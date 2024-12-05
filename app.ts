const num: number = 12;

function calculateNumber(a: number, b: number | string): number {
    if (typeof b === 'string')
        return 0;
    return a + b
}


class SuperClass {
    constructor() {
        console.log("Super Class Created...");
    }
    meth(): Function {
        const appPlay = () => "App Play Function "

        return appPlay;
    }
}
const superCls = new SuperClass();
superCls.meth()