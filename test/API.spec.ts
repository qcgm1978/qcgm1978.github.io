import * as tf from '@tensorflow/tfjs';
const isIos = () => !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    });
describe(`https://js.tensorflow.org/api/0.9.0/`, () => {
    // beforeAll(() => {
    //     this.isIos = () => !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    // });
    it(`tf.tensor (values, shape?, dtype?) function source
Creates a tf.Tensor with the provided values, shape and dtype.`, function () {
            if (isIos()) {
                const tensor = tf.tensor([1, 2, 3, 4]);
                expect(tensor).toBeInstanceOf(Object)
            }
        });
});