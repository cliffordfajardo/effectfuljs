import config from "./config";
import {
  Frame,
  Module,
  Handler,
  StateMap,
  States,
  FunctionDescr
} from "./state";
import * as State from "./state";
import { fun, checkExitBrk, call, resume, then, handle, wrap } from "./engine";
import { regOpaqueObject } from "@effectful/serialization";

const { context, token } = State;

interface AsyncFrame extends Frame {
  onResolve: (arg: any) => void;
  onReject: (arg: any) => void;
  promise: Promise<any>;
}

let AsyncFunctionPrototype: any;

const exec = config.patchedPromise ? call : resume;

try {
  AsyncFunctionPrototype = Object.getPrototypeOf(eval("(async function(){})"));
} catch (e) {
  function AsyncFunction() {}
  AsyncFunctionPrototype = AsyncFunction.prototype;
  AsyncFunctionPrototype[Symbol.toStringTag] = "AsyncFunction";
}

export function funA(
  module: Module,
  func: (...args: any[]) => any,
  handler: Handler,
  err: StateMap,
  fin: StateMap,
  states: States,
  name: string,
  loc: string,
  parent: FunctionDescr | undefined,
  params: string[]
): ($$: { [name: string]: any }) => any {
  return Object.setPrototypeOf(
    fun(module, func, handler, err, fin, states, name, loc, parent, params),
    AsyncFunctionPrototype
  );
}

export function scopeInit(
  this: AsyncFrame,
  rs: (value: any) => void,
  rj: (value: any) => void
) {
  this.onResolve = rs;
  this.onReject = rj;
}

regOpaqueObject(scopeInit, "@effectful/debugger/scopeInit");

export function scopeA(dest: number): Promise<any> {
  const top = <AsyncFrame>context.top;
  top.goto = dest;
  if (!top.promise) {
    context.call = <any>Promise;
    top.promise = wrap(new Promise(scopeInit.bind(top)));
  }
  try {
    return top.meta.handler(top, void 0);
  } catch (e) {
    return handle(top, e);
  }
}

export function retA(value: any): any {
  const top = <AsyncFrame>context.top;
  context.call = top.onResolve;
  top.onResolve(value);
  top.state = top.goto = 0;
  if (context.debug) {
    if (context.running) checkExitBrk(top, top.promise);
  } else if (top.restoreDebug) context.debug = true;
  context.top = top.next;
  return top.promise;
}

export function unhandledA(reason: any): any {
  const top = <AsyncFrame>context.top;
  context.call = top.onReject;
  top.onReject(reason);
  top.state = top.goto = 0;
  if (!context.debug && top.restoreDebug) context.debug = true;
  context.top = top.next;
  return top.promise;
}

function awtOnResolve(this: Frame, value: any) {
  context.suspended.delete(this);
  this.awaiting = token;
  return exec(this, value);
}

regOpaqueObject(awtOnResolve, "@effectful/debugger/awt#resolve");

export function awtOnReject(this: AsyncFrame, error: any) {
  context.suspended.delete(this);
  this.awaiting = token;
  this.goto = this.meta.errHandler(this.state);
  return exec(this, error);
}
regOpaqueObject(awtOnReject, "@effectful/debugger/awt#reject");

export function awtImpl(
  asyncValue: any,
  goto: number,
  onResolve: (this: Frame, value: any) => any
) {
  const top = <AsyncFrame>context.top;
  if (!context.debug && top.restoreDebug) context.debug = true;
  context.top = top.next;
  top.next = null;
  top.goto = goto;
  context.suspended.add(top);
  top.awaiting = asyncValue;
  then(asyncValue, onResolve.bind(top), awtOnReject.bind(top));
  return (context.value = top.promise);
}

export function awt(asyncValue: any, goto: number): any {
  return awtImpl(asyncValue, goto, awtOnResolve);
}
