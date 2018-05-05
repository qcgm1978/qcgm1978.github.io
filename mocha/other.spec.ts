// const ObserveObj = require('../module/observe')
var chai = require("chai");

var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

// Then either:
var expect = chai.expect;
it(`The ES6 Proxy constructor will accept the source object and an interceptor/handler. An interceptor can be a object with a functions which define the operation.`, () => {
    const obj = {};

    const handler = {
        set(target, key, value) {
            target.d = (`Setting value ${key} as ${value}`)
            target[key] = value;
        },
    };

    const p = new Proxy(obj, handler);
    p.a = 10; // logs "Setting value a as 10"
    p.c = 20; // logs "Setting value c as 20"
    expect(p.a).equal(10); // logs 10
    expect(p.d).equal('Setting value c as 20')
});
it(`try to read any value from the object by defining a get method on handler.`, () => {
    const obj = { a: 10, c: 20 };

    const handler = {
        get(target, key) {
            target.d = 'd'
            return target[key];
        },
    };

    const p = new Proxy(obj, handler);
    expect(p.d).equal('d')
    expect(p.a).equal(10); // logs "Reading value from a" and "10"

});
it(`observe deleting a key we can define deleteProperty on handler.`, () => {
    const obj = { a: 10, c: 20 };

    const handler = {
        deleteProperty(target, key) {
            target.d = (`Deleting ${key}`)
            delete target[key];
        },
    };

    const p = new Proxy(obj, handler);
    delete p.a; // logs "Deleting a"
    expect(p.a).to.be.undefined;
    expect(p.d).equal('Deleting a')
});