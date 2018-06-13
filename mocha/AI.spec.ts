

import * as tf from '@tensorflow/tfjs';
import NormalDistribution from 'normal-distribution'
import * as chai from "chai";
import * as mocha from 'mocha';


import * as chaiAsPromised from "chai-as-promised"

chai.use(chaiAsPromised);

// Then either:
var expect = chai.expect;
describe(`tensorflow toString`, () => {
    it(`what's the output`, () => {
        const data = tf.tensor([1, 2, 3, 4])
        expect(data.toString()).equal('Tensor\n    [1, 2, 3, 4]')
    });
    it(`shape (number[]) The shape of the tensor. Optional. If not provided, it is inferred from values. Optional`, () => {
        const data = tf.tensor([1, 2, 3, 4])
        expect((data as any).shape).eql([4])
    });
    it(`5 by 3`, () => {
        const values = []
        for (let i = 0; i < 15; i++) {
            values[i] = random(0, 100)
        }
    });
});