import * as tf from '@tensorflow/tfjs';
import NormalDistribution from 'normal-distribution'
import * as chai from "chai";

var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

// Then either:
var expect = chai.expect;
const isIos = process.platform === 'darwin';
it(`TensorFlow.js is an open source WebGL-accelerated JavaScript library for machine intelligence. `, () => {

});
describe(`https://js.tensorflow.org/api/0.9.0/`, () => {
    // before(() => {
    //     this.isIos = () => !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    // });
    it(`tf.tensor (values, shape?, dtype?) function source
Creates a tf.Tensor with the provided values, shape and dtype.`, function () {
            if (isIos) {
                const tensor = tf.tensor([1, 2, 3, 4]);
                expect(tensor).to.be.an('object')
            }
        });
});
const obj = {}
describe(`A small javascript module for working with normal distributions.`, () => {
    before(() => {
        obj.normDist = new NormalDistribution(/* mean, standardDeviation */)
        obj.normDist1 = new NormalDistribution(1, 2);
    });
    it(`With no arguments the distribution will be a standard normal distribution with mean = 0 and standardDeviation = 1.`, () => {
        expect(obj.normDist).eql({ "_mean": 0, "_standardDeviation": 1 })
        expect(obj.normDist1).eql({ "_mean": 1, "_standardDeviation": 2 })
    });
    it(`#pdf(value)
    Accepts an integer argument and returns the probability denisty at that point in the distribution; useful for drawing the curve.`, () => {
            expect(obj.normDist.pdf(0)).equal(0.3989422804014327)
            expect(obj.normDist1.pdf(0)).equal(0.17603266338214976)
            expect(obj.normDist1.pdf(3)).equal(0.12098536225957168)
            expect(obj.normDist.pdf(0.5)).equal(0.3520653267642995)

        });
    it(`#cdf(value)
    Accepts an integer argument and returns the probability of a random variable being below the one argument passed to the method.`, () => {
            expect(obj.normDist.cdf(0)).equal(0.5)
            expect(obj.normDist1.cdf(0)).equal(0.3085)

        });
    it(`#probabilityBetween(value1, value2)
Accepts two integer arguments and returns the probability of a random variable being between the two arguments passed.`, () => {
            expect(obj.normDist.probabilityBetween(0, 1)).equal(0.34130000000000005)
            expect(obj.normDist1.probabilityBetween(0, 2)).equal(0.383)
        });
    it(`zScore(value)
Accepts an integer argument and returns the z-score for that value.`, () => {
            expect(obj.normDist.zScore(0)).equal(0)
            expect(obj.normDist1.zScore(2)).equal(0.5)
        });
});