---
layout: post
title:  "TensorFlow-AI-Learning"
date:   2018-04-14 19:38:28 +0800
categories: jekyll update
---
Today I know TensorFlow.js is released that is a library train and use deep learning models directly in the browser, in JavaScript. Includes the full Keras API, and ability to load saved Keras models (and even fine-tune them in the browser)! So I learn it on the official page: https://js.tensorflow.org/



There's a simple model in the page. So I try it by TDD style.

{% highlight javascript %}
const tf = require('@tensorflow/tfjs');
const expect = require('chai').expect

describe(`A WebGL accelerated, browser based JavaScript library for training and deploying ML models`, () => {
    it(`train a simple model in TensorFlow.js`, (done) => {

        // Define a model for linear regression.
        const model = tf.sequential();
        model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

        // Prepare the model for training: Specify the loss and the optimizer.
        model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

        // Generate some synthetic data for training.
        const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
        const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

        // Train the model using the data.
        model.fit(xs, ys).then(() => {
            // Use the model to do inference on a data point the model hasn't seen before:
            // model.predict(tf.tensor2d([5], [1, 1])).print();
            const tensor = model.predict(tf.tensor2d([5], [1, 1]));
            expect(tensor.dataSync()[0]).to.be.greaterThan(7.9)
            done();
        }).catch((err) => done());
    });
});
=> test passed
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
