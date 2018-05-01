import { foo } from './exports'
import * as math from './exports'
import * as puppeteer from 'puppeteer';
process.on('unhandledRejection', function (err, promise) {
    debugger;
    console.log('Unhandled rejection (promise: ', promise, ', reason: ', err, ').');
});
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