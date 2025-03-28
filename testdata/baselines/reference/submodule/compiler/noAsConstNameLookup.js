//// [tests/cases/compiler/noAsConstNameLookup.ts] ////

//// [noAsConstNameLookup.ts]
// Repros from #44292

type Store = { a: 123 }
export type Cleaner = <W extends Store>(runner: FeatureRunner<W>) => Promise<any>

export class FeatureRunner<W extends Store> {
    private readonly cleaners: Cleaner[] = []

    async runFeature(): Promise<any> {
        const objectWhichShouldBeConst = {
            flags: {},
            settings: {},
        } as const;
        return objectWhichShouldBeConst
    }

    async run(): Promise<any> {
        const result = {}
        this.cleaners.forEach(c => c(this))
        return result
    }
}

export class C<T> {
    f(): void {
        let one = 1 as const;
    }
}
new C<string>().f();


//// [noAsConstNameLookup.js]
export class FeatureRunner {
    cleaners = [];
    async runFeature() {
        const objectWhichShouldBeConst = {
            flags: {},
            settings: {},
        };
        return objectWhichShouldBeConst;
    }
    async run() {
        const result = {};
        this.cleaners.forEach(c => c(this));
        return result;
    }
}
export class C {
    f() {
        let one = 1;
    }
}
new C().f();
