//// [tests/cases/compiler/alwaysStrictNoImplicitUseStrict.ts] ////

//// [alwaysStrictNoImplicitUseStrict.ts]
module M {
    export function f() {
        var arguments = [];
    }
}

//// [alwaysStrictNoImplicitUseStrict.js]
var M;
(function (M) {
    function f() {
        var arguments = [];
    }
    M.f = f;
})(M || (M = {}));
