var $M = require("@effectful/debugger"),
    $context = $M.context,
    $ret = $M.ret,
    $unhandled = $M.unhandled,
    $brk = $M.brk,
    $m = $M.module("file.js", null, typeof module === "undefined" ? null : module, null, "$", {
  __webpack_require__: typeof __webpack_require__ !== "undefined" && __webpack_require__
}, null),
    $s$1 = [{
  a: [1, "1:9-1:10"]
}, null, 0],
    $s$2 = [{
  i: [1, "2:6-2:7"]
}, $s$1, 1],
    $m$0 = $M.fun("m$0", "file.js", null, null, [], 0, 2, "1:0-11:0", 32, function file_js($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $l[1] = $m$1($);
      $.goto = 2;
      continue;

    case 1:
      $.goto = 2;
      return $unhandled($.error);

    case 2:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 0, [[0, "1:0-10:1", $s$1], [16, "11:0-11:0", $s$1], [16, "11:0-11:0", $s$1]]),
    $m$1 = $M.fun("m$1", "a", null, $m$0, [], 1, 2, "1:0-10:1", 0, function a($, $l, $p) {
  var $1;

  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk("2:2-2:12");
      $.state = 1;

    case 1:
      $l[1] = 0;
      $.goto = 2;
      $brk("3:2-3:9");
      $.state = 2;

    case 2:
      $.goto = 3;
      ($context.call = eff)($l[1]);
      $.state = 3;

    case 3:
      $.goto = 4;
      $brk("4:2-8:3");
      $.state = 4;

    case 4:
      $1 = $l[1];
      $l[1] = $1 + 1;

      if ($1) {
        $.goto = 8;
        $brk("5:4-5:12");
        continue;
      } else {
        $.goto = 5;
        $brk("7:4-7:12");
        $.state = 5;
      }

    case 5:
      $.goto = 6;
      ($context.call = eff2)($l[1]);
      $.state = 6;

    case 6:
      $.goto = 7;
      $brk("9:2-9:9");
      $.state = 7;

    case 7:
      $.goto = 10;
      ($context.call = eff)($l[1]);
      continue;

    case 8:
      $.goto = 6;
      ($context.call = eff1)($l[1]);
      continue;

    case 9:
      $.goto = 10;
      return $unhandled($.error);

    case 10:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[4, "2:2-2:12", $s$2], [4, "3:2-3:9", $s$2], [2, "3:2-3:8", $s$2], [4, "4:2-8:3", $s$2], [4, "5:4-5:12", $s$2], [2, "7:4-7:11", $s$2], [4, "9:2-9:9", $s$2], [2, "9:2-9:8", $s$2], [2, "5:4-5:11", $s$2], [16, "10:1-10:1", $s$2], [16, "10:1-10:1", $s$2]]);

$M.moduleExports();