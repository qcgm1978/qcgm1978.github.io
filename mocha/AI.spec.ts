

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
});