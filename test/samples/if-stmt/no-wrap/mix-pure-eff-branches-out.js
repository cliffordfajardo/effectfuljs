function a() {
    return M.scope(function (root) {
        if (true)
            return eff(1).mbind(root);
        else
            return root(3);
    });
}
function b() {
    return function () {
        if (true)
            return eff(1);
        else {
            console.log(3);
            return M.pure();
        }
    }().mbind(function () {
        return eff(3);
    }).mbind(function () {
        return eff(4);
    });
}
function c() {
    return M.scope(function (root) {
        return function () {
            if (true)
                return eff(1);
            else {
                console.log(3);
                return root(3);
            }
        }().mbind(function () {
            return eff(3);
        }).mbind(function () {
            return eff(4);
        });
    });
}
function d() {
    return eff('a').mbind(function () {
        if (true)
            return eff(1);
        else {
            console.log(3);
            return M.pure();
        }
    }).mbind(function () {
        return eff(3);
    }).mbind(function () {
        return eff(4);
    });
}
function e() {
    return M.scope(function (root) {
        return eff('1').mbind(function (b) {
            if (b)
                return root();
            else
                return M.pure();
        }).mbind(function () {
            return eff('2');
        });
    });
}
function f() {
    return M.scope(function (root) {
        return eff('1').mbind(function (b) {
            if (b)
                return eff('i').mbind(root);
            else
                return M.pure();
        }).mbind(function () {
            return eff('2');
        });
    });
}
function g() {
    return M.scope(function (root) {
        return eff('1').mbind(function (b) {
            if (b)
                return root();
            else
                return M.pure();
        }).mapply(function () {
            console.log('2');
        });
    });
}
function h() {
    return M.scope(function (root) {
        return eff('1').mbind(function (b) {
            if (b)
                return root();
            else
                return M.pure();
        }).mbind(function () {
            console.log('2');
            return eff('2');
        });
    });
}
function i() {
    return M.scope(function (root) {
        return eff('1').mbind(function (b) {
            if (b)
                return root();
            else
                return M.pure();
        }).mbind(function () {
            console.log('2');
            return eff(2);
        });
    });
}
function j() {
    return M.scope(function (root) {
        return eff('1').mbind(function (b) {
            if (b)
                return root();
            else
                return M.pure();
        }).mbind(function () {
            console.log('2');
            return eff(2);
        }).mapply(function () {
            console.log('3');
        });
    });
}