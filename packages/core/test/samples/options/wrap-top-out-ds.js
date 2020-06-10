var $M = require("@effectful/debugger"),
    $awt = $M.awt,
    $context = $M.context,
    $ret = $M.ret,
    $retA = $M.retA,
    $unhandled = $M.unhandled,
    $unhandledA = $M.unhandledA,
    $raise = $M.raise,
    $brk = $M.brk,
    $lset = $M.lset,
    $mcall = $M.mcall,
    $get = $M.get,
    $has = $M.has,
    $set = $M.set,
    $m = $M.module("file.js", null, typeof module === "undefined" ? null : module, null, "$", {
  __webpack_require__: typeof __webpack_require__ !== "undefined" && __webpack_require__
}, null),
    $s$1 = [{
  _slicedToArray: [1, null],
  _nonIterableRest: [2, null],
  _unsupportedIterableToArray: [3, null],
  _arrayLikeToArray: [4, null],
  _iterableToArrayLimit: [5, null],
  _arrayWithHoles: [6, null],
  a1: [7, "1:9-1:11"]
}, null, 0],
    $s$2 = [{
  Some: [8, "3:8-3:12"],
  b: [9, "10:6-10:7"],
  Something: [10, "11:11-11:20"],
  _Some: [11, null],
  other: [12, "14:11-14:16"],
  b2: [13, "14:18-14:20"],
  somethingElse: [14, "15:17-15:30"]
}, $s$1, 0],
    $s$3 = [{
  arr: [1, null],
  i: [2, null]
}, $s$1, 1],
    $s$4 = [{}, $s$1, 1],
    $s$5 = [{
  o: [1, null],
  minLen: [2, null],
  n: [3, null]
}, $s$1, 1],
    $s$6 = [{
  arr: [1, null],
  len: [2, null],
  i: [3, null],
  arr2: [4, null]
}, $s$1, 1],
    $s$7 = [{}, $s$6, 2],
    $s$8 = [{
  arr: [1, null],
  i: [2, null],
  _arr: [3, null],
  _n: [4, null],
  _d: [5, null],
  _e: [6, null],
  _i: [7, null],
  _s: [8, null]
}, $s$1, 1],
    $s$9 = [{}, $s$8, 2],
    $s$10 = [{
  err: [9, null]
}, $s$8, 1],
    $s$11 = [{
  arr: [1, null]
}, $s$1, 1],
    $s$12 = [{}, $s$1, 1],
    $s$13 = [{
  Some: [1, null],
  _proto: [2, null]
}, $s$2, 1],
    $s$14 = [{}, $s$13, 2],
    $s$15 = [{}, $s$13, 2],
    $s$16 = [{}, $s$2, 1],
    $s$17 = [{}, $s$2, 1],
    $s$18 = [{}, $s$17, 2],
    $m$0 = $M.fun("m$0", "file.js", null, null, [], 0, 15, "1:0-23:0", 32, function file_js($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $lset($l, 1,
      /*_slicedToArray*/
      $m$1($));
      $lset($l, 2,
      /*_nonIterableRest*/
      $m$2($));
      $lset($l, 3,
      /*_unsupportedIterableToArray*/
      $m$3($));
      $lset($l, 4,
      /*_arrayLikeToArray*/
      $m$4($));
      $lset($l, 5,
      /*_iterableToArrayLimit*/
      $m$5($));
      $lset($l, 6,
      /*_arrayWithHoles*/
      $m$6($));
      $lset($l, 7,
      /*a1*/
      $m$7($));
      $lset($l, 10,
      /*Something*/
      $m$11($));
      $lset($l, 14,
      /*somethingElse*/
      $m$12($));
      $.goto = 1;
      $brk();
      $.state = 1;

    case 1:
      $.goto = 2;
      $p = /*#__PURE__*/($context.call = $m$8($))();
      $.state = 2;

    case 2:
      $lset($l, 8,
      /*Some*/
      $p);
      $.goto = 3;
      $brk();
      $.state = 3;

    case 3:
      $lset($l, 9,
      /*b*/
      a);
      $.goto = 4;
      $brk();
      $.state = 4;

    case 4:
      $.goto = 5;
      $p = ($context.call = $l[1])($l[8], 3);
      $.state = 5;

    case 5:
      $lset($l, 11,
      /*_Some*/
      $p);
      $.goto = 6;
      $brk();
      $.state = 6;

    case 6:
      $.goto = 7;
      $p = $get($l[11], 1);
      $.state = 7;

    case 7:
      $lset($l, 12,
      /*other*/
      $p);
      $.goto = 8;
      $brk();
      $.state = 8;

    case 8:
      $.goto = 9;
      $p = $get($l[11], 2);
      $.state = 9;

    case 9:
      $lset($l, 13,
      /*b2*/
      $p);
      $.goto = 11;
      $brk();
      continue;

    case 10:
      $.goto = 11;
      return $unhandled($.error);

    case 11:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 0, [[4, "3:8-8:12", $s$2], [2, null, $s$2], [4, "10:2-10:12", $s$2], [4, "14:11-14:28", $s$2], [2, null, $s$2], [4, "14:11-14:16", $s$2], [2, null, $s$2], [4, "14:18-14:20", $s$2], [2, null, $s$2], [36, "22:1-22:1", $s$1], [16, "23:0-23:0", $s$1], [16, "23:0-23:0", $s$1]]),
    $m$1 = $M.fun("m$1", "_slicedToArray", null, $m$0, ["arr", "i"], 0, 3, null, 0, function _slicedToArray($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $p = ($context.call = $l[0][6])($l[1]);
      $.state = 1;

    case 1:
      $.result = $p;

      if ($.result) {
        $.state = 2;
      } else {
        $.goto = 9;
        continue;
      }

    case 2:
      if ($.result) {
        $.state = 3;
      } else {
        $.goto = 7;
        continue;
      }

    case 3:
      if ($.result) {
        $.state = 4;
      } else {
        $.goto = 5;
        continue;
      }

    case 4:
      $.goto = 12;
      continue;

    case 5:
      $.goto = 6;
      $p = ($context.call = $l[0][2])();
      $.state = 6;

    case 6:
      $.result = $p;
      $.goto = 4;
      continue;

    case 7:
      $.goto = 8;
      $p = ($context.call = $l[0][3])($l[1], $l[2]);
      $.state = 8;

    case 8:
      $.result = $p;
      $.goto = 3;
      continue;

    case 9:
      $.goto = 10;
      $p = ($context.call = $l[0][5])($l[1], $l[2]);
      $.state = 10;

    case 10:
      $.result = $p;
      $.goto = 2;
      continue;

    case 11:
      $.goto = 12;
      return $unhandled($.error);

    case 12:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[2, null, $s$3], [0, null, $s$3], [0, null, $s$3], [0, null, $s$3], [0, null, $s$3], [2, null, $s$3], [0, null, $s$3], [2, null, $s$3], [0, null, $s$3], [2, null, $s$3], [0, null, $s$3], [16, null, $s$3], [16, null, $s$3]]),
    $m$2 = $M.fun("m$2", "_nonIterableRest", null, $m$0, [], 0, 1, null, 0, function _nonIterableRest($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $p = new ($context.call = TypeError)("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      $.state = 1;

    case 1:
      $.goto = 3;
      return $raise($p);

    case 2:
      $.goto = 3;
      return $unhandled($.error);

    case 3:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[2, null, $s$4], [0, null, $s$4], [16, null, $s$4], [16, null, $s$4]]),
    $m$3 = $M.fun("m$3", "_unsupportedIterableToArray", null, $m$0, ["o", "minLen"], 1, 6, null, 0, function _unsupportedIterableToArray($, $l, $p) {
  var $1;

  for (;;) switch ($.state = $.goto) {
    case 0:
      if (!$l[1]) {
        $.state = 1;
      } else {
        $.goto = 2;
        continue;
      }

    case 1:
      $.goto = 29;
      continue;

    case 2:
      if (typeof $l[1] === "string") {
        $.state = 3;
      } else {
        $.goto = 5;
        continue;
      }

    case 3:
      $.goto = 4;
      $p = ($context.call = $l[0][4])($l[1], $l[2]);
      $.state = 4;

    case 4:
      $.result = $p;
      $.goto = 29;
      continue;

    case 5:
      $.goto = 6;
      $p = $get(Object, "prototype");
      $.state = 6;

    case 6:
      $.goto = 7;
      $p = $get($p, "toString");
      $.state = 7;

    case 7:
      $.goto = 8;
      $p = $mcall("call", $p, $l[1]);
      $.state = 8;

    case 8:
      $.goto = 9;
      $p = $mcall("slice", $p, 8, -1);
      $.state = 9;

    case 9:
      $lset($l, 3,
      /*n*/
      $p);
      $l[4] = $l[3] === "Object";

      if ($l[4]) {
        $.state = 10;
      } else {
        $.goto = 12;
        continue;
      }

    case 10:
      $.goto = 11;
      $p = $get($l[1], "constructor");
      $.state = 11;

    case 11:
      $l[4] = $p;
      $.state = 12;

    case 12:
      if ($l[4]) {
        $.state = 13;
      } else {
        $.goto = 16;
        continue;
      }

    case 13:
      $.goto = 14;
      $p = $get($l[1], "constructor");
      $.state = 14;

    case 14:
      $.goto = 15;
      $p = $get($p, "name");
      $.state = 15;

    case 15:
      $lset($l, 3,
      /*n*/
      $p);
      $.state = 16;

    case 16:
      $1 = $l[3] === "Map";

      if ($1) {
        $.state = 17;
      } else {
        $.goto = 27;
        continue;
      }

    case 17:
      if ($1) {
        $.state = 18;
      } else {
        $.goto = 20;
        continue;
      }

    case 18:
      $.goto = 19;
      $p = $mcall("from", Array, $l[1]);
      $.state = 19;

    case 19:
      $.result = $p;
      $.goto = 29;
      continue;

    case 20:
      $l[5] = $l[3] === "Arguments";

      if ($l[5]) {
        $.state = 21;
      } else {
        $.goto = 25;
        continue;
      }

    case 21:
      if ($l[5]) {
        $.state = 22;
      } else {
        $.goto = 24;
        continue;
      }

    case 22:
      $.goto = 23;
      $p = ($context.call = $l[0][4])($l[1], $l[2]);
      $.state = 23;

    case 23:
      $.result = $p;
      $.goto = 29;
      continue;

    case 24:
      $.goto = 29;
      continue;

    case 25:
      $.goto = 26;
      $p = $mcall("test", /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/, $l[3]);
      $.state = 26;

    case 26:
      $l[5] = $p;
      $.goto = 21;
      continue;

    case 27:
      $1 = $l[3] === "Set";
      $.goto = 17;
      continue;

    case 28:
      $.goto = 29;
      return $unhandled($.error);

    case 29:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[0, null, $s$5], [0, null, $s$5], [0, null, $s$5], [2, null, $s$5], [0, null, $s$5], [2, null, $s$5], [2, null, $s$5], [2, null, $s$5], [2, null, $s$5], [0, null, $s$5], [2, null, $s$5], [0, null, $s$5], [0, null, $s$5], [2, null, $s$5], [2, null, $s$5], [0, null, $s$5], [0, null, $s$5], [0, null, $s$5], [2, null, $s$5], [0, null, $s$5], [0, null, $s$5], [0, null, $s$5], [2, null, $s$5], [0, null, $s$5], [0, null, $s$5], [2, null, $s$5], [0, null, $s$5], [0, null, $s$5], [16, null, $s$5], [16, null, $s$5]]),
    $m$4 = $M.fun("m$4", "_arrayLikeToArray", null, $m$0, ["arr", "len"], 0, 7, null, 0, function _arrayLikeToArray($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $l[6] = $l[2] == null;

      if ($l[6]) {
        $.state = 1;
      } else {
        $.goto = 14;
        continue;
      }

    case 1:
      if ($l[6]) {
        $.state = 2;
      } else {
        $.goto = 4;
        continue;
      }

    case 2:
      $.goto = 3;
      $p = $get($l[1], "length");
      $.state = 3;

    case 3:
      $lset($l, 2,
      /*len*/
      $p);
      $.state = 4;

    case 4:
      $l = $.$ = [$l];
      $.state = 5;

    case 5:
      $lset($l[0], 3,
      /*i*/
      0);
      $.goto = 6;
      $p = new ($context.call = Array)($l[0][2]);
      $.state = 6;

    case 6:
      $lset($l[0], 4,
      /*arr2*/
      $p);
      $.state = 7;

    case 7:
      if ($l[0][3] < $l[0][2]) {
        $.state = 8;
      } else {
        $.goto = 11;
        continue;
      }

    case 8:
      $.goto = 9;
      $p = $get($l[0][1], $l[0][3]);
      $.state = 9;

    case 9:
      $.goto = 10;
      $set($l[0][4], $l[0][3], $p);
      $.state = 10;

    case 10:
      $l = $.$ = $l.slice();
      $lset($l[0], 3,
      /*i*/
      $l[0][3] + 1);
      $.goto = 7;
      continue;

    case 11:
      $l[0][5] = 13;
      $.state = 12;

    case 12:
      $l = $.$ = $l[0];
      $.goto = $l[5];
      continue;

    case 13:
      $.result = $l[4];
      $.goto = 17;
      continue;

    case 14:
      $.goto = 15;
      $p = $get($l[1], "length");
      $.state = 15;

    case 15:
      $l[6] = $l[2] > $p;
      $.goto = 1;
      continue;

    case 16:
      $.goto = 17;
      return $unhandled($.error);

    case 17:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, function ($, $l) {
  switch ($.state) {
    case 11:
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
    case 5:
      $l[0][5] = 16;
      $.goto = 12;
      break;

    default:
      $.goto = 16;
      break;
  }
}, function ($, $l) {
  switch ($.state) {
    case 11:
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
    case 5:
      $l[0][5] = 17;
      $.goto = 12;
      break;

    default:
      $.goto = 17;
      break;
  }
}, 1, [[0, null, $s$6], [0, null, $s$6], [2, null, $s$6], [0, null, $s$6], [0, null, $s$6], [2, null, $s$7], [0, null, $s$7], [0, null, $s$6], [2, null, $s$7], [2, null, $s$7], [0, null, $s$6], [0, null, $s$6], [0, null, $s$6], [0, null, $s$6], [2, null, $s$6], [0, null, $s$6], [16, null, $s$6], [16, null, $s$6]]),
    $m$5 = $M.fun("m$5", "_iterableToArrayLimit", null, $m$0, ["arr", "i"], 0, 18, null, 0, function _iterableToArrayLimit($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $l[15] = typeof Symbol === "undefined";

      if ($l[15]) {
        $.state = 1;
      } else {
        $.goto = 35;
        continue;
      }

    case 1:
      if ($l[15]) {
        $.state = 2;
      } else {
        $.goto = 3;
        continue;
      }

    case 2:
      $.goto = 40;
      continue;

    case 3:
      $lset($l, 3,
      /*_arr*/
      []);
      $lset($l, 4,
      /*_n*/
      true);
      $lset($l, 5,
      /*_d*/
      false);
      $lset($l, 6,
      /*_e*/
      undefined);
      $.state = 4;

    case 4:
      $l = $.$ = [$l, void 0];
      $.state = 5;

    case 5:
      $.goto = 6;
      $p = $get(Symbol, "iterator");
      $.state = 6;

    case 6:
      $.goto = 7;
      $p = $mcall($p, $l[0][1]);
      $.state = 7;

    case 7:
      $lset($l[0], 7,
      /*_i*/
      $p);
      $.state = 8;

    case 8:
      $.goto = 9;
      $p = $mcall("next", $l[0][7]);
      $.state = 9;

    case 9:
      $.goto = 10;
      $p = $get($lset($l[0], 8,
      /*_s*/
      $p), "done");
      $.state = 10;

    case 10:
      if (!$lset($l[0], 4,
      /*_n*/
      $p)) {
        $.state = 11;
      } else {
        $.goto = 19;
        continue;
      }

    case 11:
      $.goto = 12;
      $p = $get($l[0][8], "value");
      $.state = 12;

    case 12:
      $.goto = 13;
      $mcall("push", $l[0][3], $p);
      $.state = 13;

    case 13:
      $l[1] = $l[0][2];

      if ($l[1]) {
        $.state = 14;
      } else {
        $.goto = 16;
        continue;
      }

    case 14:
      $.goto = 15;
      $p = $get($l[0][3], "length");
      $.state = 15;

    case 15:
      $l[1] = $p === $l[0][2];
      $.state = 16;

    case 16:
      if ($l[1]) {
        $.state = 17;
      } else {
        $.goto = 18;
        continue;
      }

    case 17:
      $.goto = 19;
      continue;

    case 18:
      $l = $.$ = $l.slice();
      $lset($l[0], 4,
      /*_n*/
      true);
      $.goto = 8;
      continue;

    case 19:
      $l[0][12] = 21;
      $.state = 20;

    case 20:
      $l = $.$ = $l[0];
      $.goto = $l[12];
      continue;

    case 21:
      $l[10] = 34;
      $.goto = 23;
      continue;

    case 22:
      $lset($l, 9,
      /*err*/
      $.error);
      $.error = void 0;
      $lset($l, 5,
      /*_d*/
      true);
      $lset($l, 6,
      /*_e*/
      $l[9]);
      $l[10] = 34;
      $.state = 23;

    case 23:
      $.state = 24;

    case 24:
      $l[17] = !$l[4];

      if ($l[17]) {
        $.state = 25;
      } else {
        $.goto = 27;
        continue;
      }

    case 25:
      $.goto = 26;
      $p = $get($l[7], "return");
      $.state = 26;

    case 26:
      $l[17] = $p != null;
      $.state = 27;

    case 27:
      if ($l[17]) {
        $.state = 28;
      } else {
        $.goto = 29;
        continue;
      }

    case 28:
      $.goto = 29;
      $mcall("return", $l[7]);
      $.state = 29;

    case 29:
      $l[13] = 33;
      $.state = 30;

    case 30:
      if ($l[5]) {
        $.state = 31;
      } else {
        $.goto = 32;
        continue;
      }

    case 31:
      $.goto = 32;
      return $raise($l[6]);

    case 32:
      $.error = $l[14];
      $.goto = $l[13];
      continue;

    case 33:
      $.error = $l[11];
      $.goto = $l[10];
      continue;

    case 34:
      $.result = $l[3];
      $.goto = 40;
      continue;

    case 35:
      $.goto = 36;
      $p = $get(Symbol, "iterator");
      $.state = 36;

    case 36:
      $l[16] = $p;
      $.goto = 37;
      $p = ($context.call = Object)($l[1]);
      $.state = 37;

    case 37:
      $.goto = 38;
      $p = $has($l[16], $p);
      $.state = 38;

    case 38:
      $l[15] = !$p;
      $.goto = 1;
      continue;

    case 39:
      $.goto = 40;
      return $unhandled($.error);

    case 40:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, function ($, $l) {
  switch ($.state) {
    case 21:
    case 20:
    case 4:
      $.goto = 22;
      break;

    case 19:
    case 18:
    case 17:
    case 16:
    case 15:
    case 14:
    case 13:
    case 12:
    case 11:
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
    case 5:
      $l[0][12] = 22;
      $.goto = 20;
      break;

    case 29:
    case 28:
    case 27:
    case 26:
    case 25:
    case 24:
      $l[14] = $.error;
      $l[13] = 39;
      $.goto = 30;
      break;

    case 22:
      $l[11] = $.error;
      $l[10] = 39;
      $.goto = 23;
      break;

    default:
      $.goto = 39;
      break;
  }
}, function ($, $l) {
  switch ($.state) {
    case 22:
    case 21:
    case 20:
    case 4:
      $l[10] = 40;
      $.goto = 23;
      break;

    case 19:
    case 18:
    case 17:
    case 16:
    case 15:
    case 14:
    case 13:
    case 12:
    case 11:
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
    case 5:
      $l[0][12] = 23;
      $l[0][10] = 40;
      $.goto = 20;
      break;

    case 29:
    case 28:
    case 27:
    case 26:
    case 25:
    case 24:
      $l[13] = 40;
      $.goto = 30;
      break;

    default:
      $.goto = 40;
      break;
  }
}, 1, [[0, null, $s$8], [0, null, $s$8], [0, null, $s$8], [0, null, $s$8], [1, null, $s$8], [3, null, $s$9], [3, null, $s$9], [1, null, $s$9], [3, null, $s$9], [3, null, $s$9], [1, null, $s$8], [3, null, $s$9], [3, null, $s$9], [1, null, $s$8], [3, null, $s$9], [1, null, $s$8], [1, null, $s$8], [1, null, $s$8], [1, null, $s$8], [1, null, $s$8], [1, null, $s$8], [1, null, $s$8], [0, null, $s$10], [0, null, $s$8], [0, null, $s$8], [2, null, $s$8], [0, null, $s$8], [0, null, $s$8], [2, null, $s$8], [0, null, $s$8], [0, null, $s$8], [0, null, $s$8], [0, null, $s$8], [0, null, $s$8], [0, null, $s$8], [2, null, $s$8], [2, null, $s$8], [2, null, $s$8], [0, null, $s$8], [16, null, $s$8], [16, null, $s$8]]),
    $m$6 = $M.fun("m$6", "_arrayWithHoles", null, $m$0, ["arr"], 0, 2, null, 0, function _arrayWithHoles($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $p = $mcall("isArray", Array, $l[1]);
      $.state = 1;

    case 1:
      if ($p) {
        $.state = 2;
      } else {
        $.goto = 3;
        continue;
      }

    case 2:
      $.result = $l[1];
      $.goto = 5;
      continue;

    case 3:
      $.goto = 5;
      continue;

    case 4:
      $.goto = 5;
      return $unhandled($.error);

    case 5:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[2, null, $s$11], [0, null, $s$11], [0, null, $s$11], [0, null, $s$11], [16, null, $s$11], [16, null, $s$11]]),
    $m$7 = $M.fun("m$7", "a1", null, $m$0, [], 0, 1, "1:0-1:16", 0, function a1($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 2;
      $brk();
      continue;

    case 1:
      $.goto = 2;
      return $unhandled($.error);

    case 2:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[36, "1:16-1:16", $s$12], [16, "1:16-1:16", $s$12], [16, "1:16-1:16", $s$12]]),
    $m$8 = $M.fun("m$8", null, null, $m$0, [], 0, 3, "4:4-8:11", 0, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $lset($l, 1,
      /*Some*/
      $m$9($));
      $.goto = 1;
      $p = $get($l[1], "prototype");
      $.state = 1;

    case 1:
      $lset($l, 2,
      /*_proto*/
      $p);
      $.goto = 2;
      $brk();
      $.state = 2;

    case 2:
      $.goto = 3;
      $set($l[2], "a", $m$10($));
      $.state = 3;

    case 3:
      $.result = $l[1];
      $.goto = 5;
      continue;

    case 4:
      $.goto = 5;
      return $unhandled($.error);

    case 5:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[2, null, $s$13], [4, "4:4-8:11", $s$13], [2, null, $s$13], [0, null, $s$13], [16, "8:11-8:11", $s$13], [16, "8:11-8:11", $s$13]]),
    $m$9 = $M.fun("m$9", "Some", null, $m$8, [], 0, 1, null, 0, function Some($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
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
}, null, null, 2, [[0, null, $s$14], [16, null, $s$14], [16, null, $s$14]]),
    $m$10 = $M.fun("m$10", "a", null, $m$8, [], 0, 1, "4:4-8:5", 1, function a($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk();
      $.state = 1;

    case 1:
      $.goto = 2;
      $p = new ($context.call = $l[0][1])();
      $.state = 2;

    case 2:
      $.goto = 3;
      return $awt($p);

    case 3:
      $.goto = 4;
      $brk();
      $.state = 4;

    case 4:
      $.goto = 5;
      $p = new ($context.call = $l[0][0][10])();
      $.state = 5;

    case 5:
      $.goto = 6;
      return $awt($p);

    case 6:
      $.goto = 7;
      $brk();
      $.state = 7;

    case 7:
      $.goto = 8;
      ($context.call = $l[0][0][7])();
      $.state = 8;

    case 8:
      $.goto = 10;
      $brk();
      continue;

    case 9:
      $.goto = 10;
      return $unhandledA($.error);

    case 10:
      return $retA($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 2, [[4, "5:6-5:23", $s$15], [2, "5:12-5:22", $s$15], [2, "5:6-5:22", $s$15], [4, "6:6-6:28", $s$15], [2, "6:12-6:27", $s$15], [2, "6:6-6:27", $s$15], [4, "7:6-7:11", $s$15], [2, "7:6-7:10", $s$15], [36, "8:5-8:5", $s$15], [16, "8:5-8:5", $s$15], [16, "8:5-8:5", $s$15]]),
    $m$11 = $M.fun("m$11", "Something", null, $m$0, [], 0, 1, "11:2-13:3", 0, function Something($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk();
      $.state = 1;

    case 1:
      $.goto = 2;
      ($context.call = $l[0][7])($l[0][9]);
      $.state = 2;

    case 2:
      $.goto = 4;
      $brk();
      continue;

    case 3:
      $.goto = 4;
      return $unhandled($.error);

    case 4:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[4, "12:4-12:10", $s$16], [2, "12:4-12:9", $s$16], [36, "13:3-13:3", $s$16], [16, "13:3-13:3", $s$16], [16, "13:3-13:3", $s$16]]),
    $m$12 = $M.fun("m$12", "somethingElse", null, $m$0, [], 0, 1, "15:2-21:3", 1, function somethingElse($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk();
      $.state = 1;

    case 1:
      $.result = $m$13($);
      $.goto = 3;
      continue;

    case 2:
      $.goto = 3;
      return $unhandledA($.error);

    case 3:
      return $retA($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[4, "16:4-20:6", $s$17], [0, null, $s$17], [16, "21:3-21:3", $s$17], [16, "21:3-21:3", $s$17]]),
    $m$13 = $M.fun("m$13", "zz", null, $m$12, [], 0, 1, "16:11-20:5", 1, function zz($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk();
      $.state = 1;

    case 1:
      $.goto = 2;
      $p = ($context.call = $l[0][0][10])();
      $.state = 2;

    case 2:
      $.goto = 3;
      $p = ($context.call = eff_1)($p);
      $.state = 3;

    case 3:
      $.goto = 4;
      return $awt($p);

    case 4:
      $.goto = 5;
      $brk();
      $.state = 5;

    case 5:
      $.goto = 6;
      $p = new ($context.call = $l[0][0][8])();
      $.state = 6;

    case 6:
      $.goto = 7;
      $p = ($context.call = eff_2)($p);
      $.state = 7;

    case 7:
      $.goto = 8;
      return $awt($p);

    case 8:
      $.goto = 9;
      $brk();
      $.state = 9;

    case 9:
      $.goto = 10;
      $p = ($context.call = eff_3)(a, $l[0][0][9]);
      $.state = 10;

    case 10:
      $.goto = 11;
      return $awt($p);

    case 11:
      $.goto = 13;
      $brk();
      continue;

    case 12:
      $.goto = 13;
      return $unhandledA($.error);

    case 13:
      return $retA($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 2, [[4, "17:6-17:31", $s$18], [2, "17:18-17:29", $s$18], [2, "17:12-17:30", $s$18], [2, "17:6-17:30", $s$18], [4, "18:6-18:30", $s$18], [2, "18:18-18:28", $s$18], [2, "18:12-18:29", $s$18], [2, "18:6-18:29", $s$18], [4, "19:6-19:24", $s$18], [2, "19:12-19:23", $s$18], [2, "19:6-19:23", $s$18], [36, "20:5-20:5", $s$18], [16, "20:5-20:5", $s$18], [16, "20:5-20:5", $s$18]]);

$M.moduleExports();