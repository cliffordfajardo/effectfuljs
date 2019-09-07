import { kit, scope as varScope } from "@effectful/transducers";
const {
  toArray,
  result,
  tillLevel,
  till,
  clone,
  withOpts,
  toks,
  skip,
  setType,
  setPos,
  Subst,
  completeSubst,
  hasAnnot,
  find,
  share,
  wrap,
  saveLast,
  transform,
  babelBridge,
  babelPlugin,
  tee,
  optsScope,
  setOpts,
  getOpts,
  optsScopeLift,
  adjustFieldType,
  adjustFieldTypeSimple,
  select,
  cons,
  la,
  enableIf,
  output,
  repos,
  reposOne,
  reposOneArr,
  reverse,
  pack,
  unpack,
  packed,
  flatMap,
  map,
  forEach,
  filter,
  cleanEmptyExprs,
  mapAdd,
  mapPush,
  mapArr,
  group,
  groupUniq,
  concat,
  stage,
  curryN,
  curry,
  pipe,
  time,
  timeEnd,
  prepend,
  tillVal,
  single,
  fileBody
} = kit;
export {
  toArray,
  result,
  tillLevel,
  till,
  clone,
  withOpts,
  toks,
  skip,
  setType,
  setPos,
  Subst,
  completeSubst,
  hasAnnot,
  find,
  share,
  wrap,
  saveLast,
  transform,
  babelBridge,
  babelPlugin,
  tee,
  optsScope,
  setOpts,
  getOpts,
  optsScopeLift,
  adjustFieldType,
  adjustFieldTypeSimple,
  varScope,
  select,
  cons,
  la,
  enableIf,
  output,
  repos,
  reposOneArr,
  reposOne,
  reverse,
  pack,
  unpack,
  packed,
  flatMap,
  map,
  forEach,
  filter,
  cleanEmptyExprs,
  mapAdd,
  mapPush,
  mapArr,
  group,
  groupUniq,
  concat,
  stage,
  curryN,
  curry,
  pipe,
  time,
  timeEnd,
  prepend,
  tillVal,
  single,
  fileBody
};

import {
  Tag,
  symbol,
  symName,
  symKind,
  symInfo,
  dump,
  trace,
  scope,
  typeInfo,
  resetFieldInfo,
  invariant,
  emitConst
} from "@effectful/transducers";
export {
  Tag,
  symbol,
  symName,
  symKind,
  symInfo,
  dump,
  trace,
  scope,
  typeInfo,
  resetFieldInfo,
  invariant,
  emitConst
};
import {
  packId,
  auto,
  autoBlock,
  autoBlockPass,
  rmEmpty,
  removeNulls,
  enter,
  leave,
  tok,
  repeat,
  complete,
  Any,
  completeAny,
  finalize,
  strip,
  swap,
  swapTok,
  produce,
  consume,
  tagValue,
  idTok,
  applyIgnoreResult,
  lookahead,
  rsub,
  prepare,
  resetLevel,
  sysId,
  coerceId,
  skipTillFileBeg
} from "./core";
export {
  packId,
  auto,
  autoBlock,
  autoBlockPass,
  rmEmpty,
  removeNulls,
  enter,
  leave,
  tok,
  repeat,
  complete,
  Any,
  completeAny,
  finalize,
  strip,
  swap,
  swapTok,
  produce,
  consume,
  tagValue,
  idTok,
  applyIgnoreResult,
  lookahead,
  rsub,
  prepare,
  resetLevel,
  sysId,
  coerceId,
  skipTillFileBeg
};
export const globalOpts = kit.getOpts;

export const isWindows =
  typeof process !== "undefined" && process.platform === "win32";
