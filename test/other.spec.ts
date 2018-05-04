import * as math from 'mathjs'
it(`https://twitter.com/WorldAndScience/status/992297965715767296`, (done) => {
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
    const promise = new Promise((resolve, rject) => {
        const recursive = (arr) => {
            if (arr.length <= 1) {
                return resolve(arr[0])
            }
            const random1 = getRandomBetween({
                min: 0,
                max: arr.length
            }), random2 = getRandomBetween({
                min: 0,
                max: arr.length,
                notEqual: random1
            });
            const result = randomArithmaticOperate(arr[random1], arr[random2]);
            const min = Math.min(random1, random2);
            const max = Math.max(random1, random2);
            const array = arr.slice(0, min).concat(arr.slice(min + 1, max)).concat(arr.slice(max + 1));
            array.push(result);
            recursive(array)
        }
        recursive(timeArr)
    })
    promise.then(data => {
        expect(data).toBe()
        done()
    })
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