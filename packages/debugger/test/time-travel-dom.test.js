require("./setup-time-travel");
const trace = require("./run");
trace.silent = true;
const D = require("../main");

test("DOM time traveling", function() {
  D.TimeTravel.reset();
  global.console = { log: jest.fn() };
  document.body.innerHTML = `<div id="root"></div>`;
  const mod = trace(D.evalThunk(require("./__fixtures__/dom")));
  D.TimeTravel.DOM.track(document.getElementById("root"));
  const text0 = document.body.innerHTML;
  expect(text0).toMatchSnapshot();
  D.TimeTravel.checkpoint();
  trace(mod.changeDom1());
  const text1 = document.body.innerHTML;
  expect(text1).toMatchSnapshot();
  D.TimeTravel.checkpoint();
  trace(mod.changeDom2());
  const text2 = document.body.innerHTML;
  expect(text2).toMatchSnapshot();
  D.TimeTravel.checkpoint();
  trace(mod.changeDom3());
  const text3 = document.body.innerHTML;
  expect(text3).toMatchSnapshot();
  D.TimeTravel.checkpoint();
  trace(mod.changeDom4());
  const text4 = document.body.innerHTML;
  expect(text4).toMatchSnapshot();
  D.TimeTravel.checkpoint();
  D.TimeTravel.undo();
  expect(document.body.innerHTML).toBe(text3);
  trace(mod.changeDom4());
  expect(document.body.innerHTML).toBe(text4);
  D.TimeTravel.checkpoint();
  D.TimeTravel.undo();
  expect(document.body.innerHTML).toBe(text3);
  D.TimeTravel.undo();
  expect(document.body.innerHTML).toBe(text2);
  trace(mod.changeDom3());
  expect(document.body.innerHTML).toBe(text3);
  D.TimeTravel.checkpoint();
  trace(mod.changeDom4());
  expect(document.body.innerHTML).toBe(text4);
  D.TimeTravel.checkpoint();
  D.TimeTravel.undo();
  expect(document.body.innerHTML).toBe(text3);
  D.TimeTravel.undo();
  expect(document.body.innerHTML).toBe(text2);
  D.TimeTravel.undo();
  expect(document.body.innerHTML).toBe(text1);
  D.TimeTravel.undo();
  expect(document.body.innerHTML).toBe(text0);
  expect(console.log.mock.calls).toMatchSnapshot();
});
