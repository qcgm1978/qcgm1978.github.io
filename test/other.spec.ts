import { foo } from './exports'
import * as math from './exports'
import * as puppeteer from 'puppeteer';
// import * as WGo from 'wgo.js-1'
import * as $ from 'jquery';
process.on('unhandledRejection', function (err, promise) {
    debugger;
    expect('Unhandled rejection (promise: ', promise, ', reason: ', err, ').').toEqual();
});
it(`Move them to an array, sort that array, and then use that array for your purposes. Here's a solution:`, () => {
    function sort(sortable: any[], prop: String, ascending = true): any {
        return sortable.sort(function (a, b) {
            if (typeof a[prop] === 'string') {
                if (a[prop] < b[prop]) return 1;
                if (a[prop] > b[prop]) return -1;
                return 0;
            }
            return ascending ? (a[prop] - b[prop]) : (b[prop] - a[prop]);
        });
    }
    var arr = [{ name: 'a', height: 170, weigh: 40 }, { name: 'b', height: 180, weigh: 50 }, { name: 'c', height: 150, weigh: 30 }]

    expect(sort(arr, 'height')).toEqual([{ name: 'c', height: 150, weigh: 30 }, { name: 'a', height: 170, weigh: 40 }, { name: 'b', height: 180, weigh: 50 },]);
    expect(sort(arr, 'height', false)).toEqual([{ name: 'b', height: 180, weigh: 50 }, { name: 'a', height: 170, weigh: 40 }, { name: 'c', height: 150, weigh: 30 },]);
    expect(sort(arr, 'name', false)).toEqual([{ name: 'c', height: 150, weigh: 30 }, { name: 'b', height: 180, weigh: 50 }, { name: 'a', height: 170, weigh: 40 },]);

});
it(`The Promise.all(iterable) method returns a single Promise that resolves when all of the promises in the iterable argument have resolved or when the iterable argument contains no promises. It rejects with the reason of the first promise that rejects.`, (done) => {
    var promise1 = Promise.resolve(3);
    var promise3 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 100, 'foo', 'foo1');
    });
    var promise2 = 42;

    Promise.all([promise1, promise3, promise2,]).then(function (values) {
        expect(values).toEqual([3, "foo", 42,]);
        done()
    });

});
it(`Promise.all waits for all fulfillments (or the first rejection).`, (done) => {
    var p1 = Promise.resolve(3);
    var p2 = 1337;
    var p3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'foo');
    });

    Promise.all([p1, p2, p3]).then(values => {
        expect(values).toEqual([3, 1337, 'foo'])
        done()
    });
});
it(`If the iterable contains non-promise values, they will be ignored, but still counted in the returned promise array value (if the promise is fulfilled):`, (done) => {
    // this will be counted as if the iterable passed is empty, so it gets fulfilled
    var p = Promise.all([1, 2, 3]);
    // this will be counted as if the iterable passed contains only the resolved promise with value "444", so it gets fulfilled
    var p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);

    // using setTimeout we can execute code after the stack is empty
    setTimeout(function () {
        p.then(data => expect(data).toEqual([1, 2, 3]));
        p2.then(data => expect(data).toEqual([1, 2, 3, 444]));
        done()
    }, 0);
});
it(``, async () => {
    // we are passing as argument an array of promises that are already resolved,
    // to trigger Promise.all as soon as possible
    var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

    var p = Promise.all(resolvedPromisesArray);
    // immediately logging the value of p
    await expect(p).toBeInstanceOf(Promise)
    await p.then(data => expect(data).toEqual([33, 44]));


});
it(`The same thing happens if Promise.all rejects:`, () => {
    expect(Promise.all([Promise.resolve(33), Promise.reject(44)])).rejects.toThrow(/44/);
});
it(`It is possible to change this behaviour by handling possible rejections:`, async () => {
    var p1 = new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, 'p1_delayed_resolvement');
    });

    var p2 = new Promise((resolve, reject) => {
        reject(new Error('p2_immediate_rejection'));
    });

    await Promise.all([
        p1.catch(error => {
            return error.message;
        }),
        p2.catch(error => {
            return error.message
        }),
    ]).then(values => {
        expect(values).toEqual(["p1_delayed_resolvement", 'p2_immediate_rejection']);
    })

});
it(`this will be counted as if the iterable passed contains only the rejected promise with value "555", so it gets rejected`, (done) => {
    var p3 = Promise.all([1, 2, 3, Promise.reject(555)]).catch(data => {
        expect(data).toBe(555);
        done()
    });
    expect(Promise.all([1, 2, 3, Promise.reject(555)])).rejects.toThrow()
});
test('rejects to octopus', async () => {
    await expect(Promise.reject(new Error('octopus'))).rejects.toThrow('octopus');
    await expect(Promise.all([1, 2, 3, Promise.reject(555)])).rejects.toThrow(/555/)
    await expect(Promise.all([1, 2, 3, Promise.reject({ code: 555, status: 404 })])).rejects.toMatchObject({ code: 555 });

});
it(`The get trap executes when you try to access a property of an object using the proxy. Get method accepts target (the object we are trying to access) and the property (the property that we try to access).`, () => {
    let target = {
        a: 1
    }, b = 0;
    var p = new Proxy(target, {
        get: function (target, property, receiver) {
            b = target[property]
        }
    });
    const a = p.a
    expect(b).toBe(1)
});
it(`An arrow function expression has a shorter syntax than a function expression and does not have its own this, arguments, super, or new.target. These function expressions are best suited for non-method functions, and they cannot be used as constructors.`, () => {
    const Arrow = () => this.prop = true;
    const arrow = new Arrow()
    expect(arrow.prop).toBeUndefined()
    const FunctionExpression = function () {
        this.prop = true;
    }
    const instance = new FunctionExpression()
    expect(instance.prop).toBeTruthy()
});
it(`Symbol creates a new symbol each time`, () => {
    expect(Symbol('foo')).not.toEqual(Symbol('foo'))
});
it(`The typeof operator can help you to identify symbols.`, () => {
    // expect(Symbol()).toBeInstanceOf(Symbol)
    // expect(Symbol('foo')).toBeInstanceOf(Symbol)
    // expect(Symbol.iterator).toBeInstanceOf(Symbol)
});
it(`https://twitter.com/WorldAndScience/status/992297965715767296`, (/* done */) => {
    expect
    const universeAge = 13.7e9, quarkElectronSoup = Math.pow(10, -32), PlanckTime = Math.pow(10, -43), timeBeforeAtom = 3 * 60, MilkyWay = 13.2e9, SunAge = 4.57e9, EarthAge = 4.54e9, lifeAge = 3.5e9;
    const timeArr = [universeAge, quarkElectronSoup, PlanckTime, timeBeforeAtom, MilkyWay, SunAge, EarthAge, lifeAge];
    const randomArithmaticOperate = (num1, num2) => {
        const index = getRandomBetween({ min: 0, max: 5 });
        let ret = 0;
        switch (index) {
            case 0: ret = num1 + num2; break;
            case 1: ret = num1 - num2; break;
            case 2: ret = num1 * num2; break;
            case 3: ret = num1 / num2; break;
            case 4: ret = num1 % num2; break;
            case 5: ret = num1 ** num2; break;

        }
        return ret ? ret : 0.1;
    }
    const getRandomBetween = obj => {
        const num = Math.floor(Math.random() * (obj.max - 1)) + obj.min;
        return num === obj.notEqual ? getRandomBetween(obj) : num
    };
    // const promise = new Promise((resolve, rject) => {
    //     const recursive = (arr) => {
    //         if (arr.length <= 1) {
    //             return resolve(arr[0])
    //         }
    //         const random1 = getRandomBetween({
    //             min: 0,
    //             max: arr.length
    //         }), random2 = getRandomBetween({
    //             min: 0,
    //             max: arr.length,
    //             notEqual: random1
    //         });
    //         const result = randomArithmaticOperate(arr[random1], arr[random2]);
    //         const min = Math.min(random1, random2);
    //         const max = Math.max(random1, random2);
    //         const array = arr.slice(0, min).concat(arr.slice(min + 1, max)).concat(arr.slice(max + 1));
    //         array.push(result);
    //         recursive(array)
    //     }
    //     recursive(timeArr)
    // })
    // promise.then(data => {
    //     expect(data).toBe()
    //     done()
    // })
});
it(`equal`, () => {
    expect([1, 2, 3]).not.toEqual('1,2,3')
});
it(`The greatest truths are the simplest`, () => {
    let isSuccess = false;
    const method = bool => {
        for (let i = 0, fool = true, son = false; i < 10000; i++) {
            if (!fool && !son) {
                return false;
            }
            if (i === 5000) {
                fool = false;
                son = true;
            }
            if (i === 9999) {
                return isSuccess = true;
                // break;
            }
        }
    };
    expect(method(isSuccess)).toBeTruthy()
});
it(`the sequential, conditional and iterative relationship`, () => {
    const sequential = data => data, conditional = (data, bool) => bool ? data : null, iterative = (data, repeat) => {
        return data.repeat(repeat);

    }
    expect(sequential([1])).toEqual([1])
    expect(conditional([1], false)).toBeNull()
    expect(iterative('1', 10)).toEqual("1111111111")
});
it(`64k file`, () => {
    // create an ArrayBuffer with a size in bytes
    let buffer = new ArrayBuffer(8);
    let uint8 = new Uint8Array(buffer, 2);

    expect(uint8.byteLength).toBe(6);


    uint8 = new Uint8Array(buffer, 1, 5);
    expect(uint8.byteLength).toBe(5); // 5 (as specified when constructing the Uint8Array)

    uint8 = new Uint8Array(buffer, 2);
    expect(uint8.byteLength).toBe(6); // 6 (due to the offset of the constructed Uint8Array)
    let str = ' '.repeat(30);
    expect(str.length).toBe(30)
    buffer = new ArrayBuffer(30);
    uint8 = new Uint8Array(buffer);
    expect(uint8.byteLength).toBe(30); // 8 (matches the byteLength of the buffer)
    let total = 30 * 3000;
    buffer = new ArrayBuffer(total);
    uint8 = new Uint8Array(buffer);
    expect(uint8.byteLength).toBe(9e4); // 8 (matches the byteLength of the buffer)
    expect(uint8.byteLength).toBeGreaterThan(64 * 1024)
});
it(`Hello World`, () => {
    const procedureOriented = (input) => {
        let output = 0;
        const process = input => `Output: ${input}`;
        output = process(input);
        return output;
    }
    expect(procedureOriented(`Hello World`)).toBe("Output: Hello World")
    class OOP {
        constructor() {
        }
        set input(data) {
            this.output = `Output: ${data}`;
        }

    }
    let instance = new OOP();
    instance.input = `Hello World`;
    expect(instance.output).toBe("Output: Hello World")
    class engineering extends OOP {
        constructor(data) {
            super(data)
            this.year = data;
        }

        get outputNew() {
            return `${this.output}, year: ${this.year}`
        }
    }
    instance = new engineering(new Date().getFullYear())
    instance.input = `Hello World`
    expect(instance.output).toBe("Output: Hello World");
    expect(instance.outputNew).toBe("Output: Hello World, year: 2018")
});
it(`Algorithms + Data Structures = Programs `, () => {
    let Algorithms = input => 'output'
});
// it(`http://wgo.waltheri.net/tutorials/board`, (/* done */) => {
//     expect(WGo).toBeDefined()
//     expect(WGo.Board).toBeInstanceOf(Function)
//     const getAjax = function (url, data, token, sucFn, errFn) {
//         $.ajax({
//             type: "get",
//             url: url,
//             beforeSend: function (xhr) {
//                 xhr.setRequestHeader("usertoken", token);
//             },
//             data: data,
//             dataType: "json",
//             timeout: 10000,
//             success: sucFn,
//             error: errFn
//         });
//     }
//     const loadData = () => {
//         var self = this;
//         // var url = '/online/golive/getdetail?id=' + commonMethod.getQueryString('id');
//         var url = 'http://portal.yikeweiqi.com/online/golive/getdetail?id=8681'
//         getAjax(url, '', self.userToken || -1, function (res) {
//             expect(res).toBeDefined()
//             done()
//             self.boardInfo = res.live;
//             self.cmt = res.cmt;
//             self.branch = res.branch;
//             self.player.loadSgf(self.boardInfo.Content);
//             self.player.last();
//             self.changeReaderControl();
//         }.bind(this), (err) => {
//             debugger;
//         });
//     }
//     // loadData()
// });
it(`The animation CSS property is a shorthand property for the various animation properties: animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, and animation-play-state.`, () => {
    // (async (expect) => {
    //     const browser = await puppeteer.launch();
    //     const page = await browser.newPage();
    //     await page.goto('http://127.0.0.1:4000');
    //     // Get the "viewport" of the page, as reported by the page.

    //     const dimensions = await page.evaluate(() => {
    //         expect(document.body.style.animation).toBeUndefined()
    //         document.body.style.animation = 'slidein 3s ease-in 1s infinite reverse both running';
    //         expect(document.body.style.animationName).toBe();
    //         return {
    //             width: document.documentElement.clientWidth,
    //             height: document.documentElement.clientHeight,
    //             deviceScaleFactor: window.devicePixelRatio,
    //             body: document.body
    //         };
    //     });

    //     // expect(dimensions).toEqual({ "deviceScaleFactor": 1, "height": 600, "width": 800 });

    //     await browser.close();
    // })(expect);
});
it(`Partial support refers to basic support of element.animate() and playback control of AnimationPlayer`, () => {
    if (navigator.appVersion.startsWith('5')) {

        expect(document.body.animate).toBeDefined()
    }
});
it('ES2016 modules has the `import X from ...` statement. but there’s also the `export X from ...` statement.', () => {
    expect(foo).not.toThrow();
    expect(foo()).toBe(1)
});
it(`Ways to create a regular expression`, () => {
    const regex = /dog/;
    const regex1 = new RegExp('dog');
    expect(regex.test('dog')).toBeTruthy(); // true
    expect(regex1.test('hot-dog')).toBeTruthy(); // true
});
it(`Character set`, () => {
    expect(/[dfl]og/.test('dog')).toBeTruthy(); // true
    expect(/[dfl]og/.test('fog')).toBeTruthy(); // true
    expect(/[dfl]og/.test('log')).toBeTruthy(); // true
    expect(/[A-z]/.test('a')).toBeTruthy(); // true
    expect(/[A-z]/.test('Z')).toBeTruthy(); // true
    expect(() =>const pattern = /[a-Z]/).toThrow()
});
describe("regular expression", function () {
    const regexp = /[bdc]\d\w/
    it("to be true", function () {
        expect(regexp.test('b6c')).toBe(true);
        expect(regexp.test('d5e')).toBe(true);
        expect(regexp.test('c7d')).toBe(true);
    });

    it("to be false", function () {
        expect(regexp.test('a4b')).toBe(false);
        expect(regexp.test('f8a')).toBe(false);
        expect(regexp.test('e2f')).toBe(false);
    });
    it(`negated character`, () => {
        expect(/[^df]og/.test('dog')).toBeFalsy(); // false
        expect(/[^df]og/.test('fog')).toBeFalsy(); // false
        expect(/[^df]og/.test('log')).toBeTruthy(); // true
    });
    it(`multiple repetitions`, () => {
        function isPhoneNumber(number) {
            return /\+[0-9]{2} [0-9]{3} [0-9]{3} [0-9]{3}/.test(number);
        }

        expect(isPhoneNumber('+12 123 123 123')).toBeTruthy(); // true
        expect(isPhoneNumber('123212')).toBeFalsy(); // false
    });
});
it(`https://en.wikipedia.org/wiki/Bernoulli_process`, () => {
    let num = parseInt('101010', 2);
    expect(num).toBe(42)
    num = parseInt('10011011', 2)
    expect(num).toBe(155)
    num = Number(0o10011011.toString())
    expect(num).toBe(2101769)
});
it(`https://stackoverflow.com/questions/30314603/insert-english-characters-get-greek-characters-back-javascript`, () => {
    expect(toGreek('abc')).toEqual("αβψ")
    function toGreek(chVal) {
        var myObject;
        myObject = {
            "a": "α",
            "b": "β",
            "c": "ψ",
            "d": "δ",
            "e": "ε",
            "f": "φ",
            "g": "γ",
            "h": "η",
            "i": "ι",
            "j": "ξ",
            "k": "κ",
            "l": "λ",
            "m": "μ",
            "n": "ν",
            "o": "ο",
            "p": "π",
            "q": ";",
            "r": "ρ",
            "s": "σ",
            "t": "τ",
            "u": "θ",
            "v": "ω",
            "w": "ς",
            "x": "χ",
            "y": "υ",
            "z": "ζ",
            ";": ""
        };
        // for (const item of chVal) {
        //     chVal = chVal.replace(item, myObject[item])
        // }
        return chVal.replace(/\w/g, item => myObject[item]);
        // return chVal.map(a => myObject[a] || a).join('');
    }

});
describe(`https://en.wikipedia.org/wiki/SI_base_unit`, () => {
    it(`Seven SI base units`, () => {
        const SI = [{ "Name": "metre", "Symbol": "m", "Measure": "length", "DimensionSymbol": "L" }, { "Name": "kilogram", "Symbol": "kg", "Measure": "mass", "DimensionSymbol": "M" }, { "Name": "second", "Symbol": "s", "Measure": "time", "DimensionSymbol": "T" }, { "Name": "ampere", "Symbol": "A", "Measure": "electric current", "DimensionSymbol": "I" }, { "Name": "kelvin", "Symbol": "K", "Measure": "thermodynamic temperature", "DimensionSymbol": "Θ" }, { "Name": "mole", "Symbol": "mol", "Measure": "amount of substance", "DimensionSymbol": "N" }, { "Name": "candela", "Symbol": "cd", "Measure": "luminous intensity", "DimensionSymbol": "J" }];
        expect(SI.length).toBe(7)
    });
    it(`"The metre is the length of the path travelled by light in vacuum during a time interval of 1 / 299792458 of a second."`, () => {
        const metreUnit = 1, LightSpeed = metreUnit * 299792458, threeHundredThounsandMetres = 30 * 1e5 * 1e3;
        expect(LightSpeed).toBeLessThan(threeHundredThounsandMetres)
    });
    describe(`Absolute length units represent a physical measurement when the physical properties of the output medium are known, such as for print layout.`, () => {
        it(`1px = 1/96th of 1in，One inch. 1in = 2.54cm = 96px`, () => {
            const metre = 1
            const cm = 1e-2 * metre
            const px = 2.54 * cm / 96;
            expect((px).toFixed(5)).toBe("0.00026")
        });
    });
});
it(`Compute the mean value of matrix or a list with values.`, () => {
    expect(math.mean(2, 1, 4, 3)).toBe(2.5);                     // returns 
    expect(math.mean([1, 2.7, 3.2, 4])).toBe(2.725);               // returns 

    expect(math.mean([[2, 5], [6, 3], [1, 7]], 0)).toEqual([3, 5]);    // returns 
    expect(math.mean([[2, 5], [6, 3], [1, 7]], 1)).toEqual([3.5, 4.5, 4]);    // returns 
});


