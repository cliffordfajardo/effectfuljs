import * as M from '@effectful/core';

function a() {
  var a = M.context();
  return M.scope(a_1, a_5);
}

function a_1(a) {
  var b;
  a._i = 0;
  b = a._i++;
  return M.chain(eff5(b), a_2, a_5);
}

function a_2(a) {
  var b;

  if (ee) {
    b = a._i++;
    return M.chain(eff7(b), a_3, a_5);
  } else {
    return M.jump(void 0, a_3, a_5);
  }
}

function a_3(a) {
  return M.chain(eff8(a._i), a_4, a_5);
}

function a_4(a) {
  return M.pure();
}

function a_5(a, e) {
  return M.raise(e);
}