import * as tf from '@tensorflow/tfjs';

describe(`https://js.tensorflow.org/api/0.9.0/`, () => {
    it(`tf.tensor (values, shape?, dtype?) function source
Creates a tf.Tensor with the provided values, shape and dtype.`, () => {
            const tensor = tf.tensor([1, 2, 3, 4]);
            expect(tensor).toBeInstanceOf(Object)
        });
});