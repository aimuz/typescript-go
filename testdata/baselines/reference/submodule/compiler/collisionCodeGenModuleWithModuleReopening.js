//// [tests/cases/compiler/collisionCodeGenModuleWithModuleReopening.ts] ////

//// [collisionCodeGenModuleWithModuleReopening.ts]
module m1 {
    export class m1 {
    }
}
var foo = new m1.m1();
module m1 {
    export class c1 {
    }
    var b = new c1();
    var c = new m1();
}
var foo2 = new m1.c1();

module m2 {
    export class c1 {
    }
    export var b10 = 10;
    var x = new c1();
}
var foo3 = new m2.c1();
module m2 {
    export class m2 {
    }
    var b = new m2();
    var d = b10;
    var c = new c1();
}
var foo3 = new m2.c1();
var foo2 = new m2.m2();

//// [collisionCodeGenModuleWithModuleReopening.js]
var m1;
(function (m1_1) {
    class m1 {
    }
    m1_1.m1 = m1;
})(m1 || (m1 = {}));
var foo = new m1.m1();
(function (m1) {
    class c1 {
    }
    m1.c1 = c1;
    var b = new c1();
    var c = new m1();
})(m1 || (m1 = {}));
var foo2 = new m1.c1();
var m2;
(function (m2) {
    class c1 {
    }
    m2.c1 = c1;
    m2.b10 = 10;
    var x = new c1();
})(m2 || (m2 = {}));
var foo3 = new m2.c1();
(function (m2_1) {
    class m2 {
    }
    m2_1.m2 = m2;
    var b = new m2();
    var d = b10;
    var c = new c1();
})(m2 || (m2 = {}));
var foo3 = new m2.c1();
var foo2 = new m2.m2();
