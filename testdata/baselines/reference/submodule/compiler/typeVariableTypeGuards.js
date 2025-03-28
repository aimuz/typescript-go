//// [tests/cases/compiler/typeVariableTypeGuards.ts] ////

//// [typeVariableTypeGuards.ts]
// Repro from #14091

interface Foo {
    foo(): void
}

class A<P extends Partial<Foo>> {
    constructor(public props: Readonly<P>) {}
    doSomething() {
        this.props.foo && this.props.foo()
    }
}

// Repro from #14415

interface Banana {
    color: 'yellow';
}

class Monkey<T extends Banana | undefined> {
    constructor(public a: T) {}
    render() {
        if (this.a) {
            this.a.color;
        }
    }
}

interface BigBanana extends Banana {
}

class BigMonkey extends Monkey<BigBanana> {
    render() {
        if (this.a) {
            this.a.color;
        }
    }
}

// Another repro

type Item = {
    (): string;
    x: string;
}

function f1<T extends Item | undefined>(obj: T) {
    if (obj) {
        obj.x;
        obj["x"];
        obj();
    }
}

function f2<T extends Item | undefined>(obj: T | undefined) {
    if (obj) {
        obj.x;
        obj["x"];
        obj();
    }
}

function f3<T extends Item | undefined>(obj: T | null) {
    if (obj) {
        obj.x;
        obj["x"];
        obj();
    }
}

function f4<T extends string[] | undefined>(obj: T | undefined, x: number) {
    if (obj) {
        obj[x].length;
    }
}

function f5<T, K extends keyof T>(obj: T | undefined, key: K) {
    if (obj) {
        obj[key];
    }
}

// https://github.com/microsoft/TypeScript/issues/57381

function f6<T extends string | (new () => {})>(a: T) {
  if (typeof a !== "string") {
    new a();
  }
}


//// [typeVariableTypeGuards.js]
class A {
    props;
    constructor(props) {
        this.props = props;
    }
    doSomething() {
        this.props.foo && this.props.foo();
    }
}
class Monkey {
    a;
    constructor(a) {
        this.a = a;
    }
    render() {
        if (this.a) {
            this.a.color;
        }
    }
}
class BigMonkey extends Monkey {
    render() {
        if (this.a) {
            this.a.color;
        }
    }
}
function f1(obj) {
    if (obj) {
        obj.x;
        obj["x"];
        obj();
    }
}
function f2(obj) {
    if (obj) {
        obj.x;
        obj["x"];
        obj();
    }
}
function f3(obj) {
    if (obj) {
        obj.x;
        obj["x"];
        obj();
    }
}
function f4(obj, x) {
    if (obj) {
        obj[x].length;
    }
}
function f5(obj, key) {
    if (obj) {
        obj[key];
    }
}
// https://github.com/microsoft/TypeScript/issues/57381
function f6(a) {
    if (typeof a !== "string") {
        new a();
    }
}
