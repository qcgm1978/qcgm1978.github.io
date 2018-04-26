import * as math from 'mathjs'
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