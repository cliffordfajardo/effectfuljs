function a() {
  var e;
  return _1();

  function _1() {
    try {
      return M.jME(eff(1), M.pure, _2);
    } catch (e) {
      return _2();
    }
  }

  function _2(ex) {
    e = ex;
    console.log(e);
    return M.pure();
  }
}