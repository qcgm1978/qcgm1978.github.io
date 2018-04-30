import * as math from 'mathjs'
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