//// [tests/cases/conformance/es6/yieldExpressions/generatorTypeCheck23.ts] ////

//// [generatorTypeCheck23.ts]
class Foo { x: number }
class Bar extends Foo { y: string }
class Baz { z: number }
function* g3() {
    yield;
    yield new Foo;
    yield new Bar;
    yield new Baz;
    yield *[new Bar];
    yield *[new Baz];
}

//// [generatorTypeCheck23.js]
class Foo {
    x;
}
class Bar extends Foo {
    y;
}
class Baz {
    z;
}
function* g3() {
    yield;
    yield new Foo;
    yield new Bar;
    yield new Baz;
    yield* [new Bar];
    yield* [new Baz];
}
