function a() {
  eff(1);
  eff(2);
  return eff(3);
}

function b() {
  eff(1);
  return M.jM(eff(2), _1);

  function _1() {
    eff(3);
    return M.jM(eff(4), _2);
  }

  function _2() {
    return M.pure(5);
  }
}