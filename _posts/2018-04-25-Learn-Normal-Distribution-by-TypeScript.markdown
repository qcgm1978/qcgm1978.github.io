---
layout: post
title:  "Learn-Normal-Distribution-by-TypeScript"
date:   2018-04-25 1:38:28 +0800
categories: jekyll update
---

Recently I've read some articles about AI or Machine Learning those all come down to Normal Distribution or Uniform Distribution. So I decide to learn that.

I will learn it by https://en.wikipedia.org/wiki/Normal_distribution

According Wiki: `In probability theory, the normal (or Gaussian or Gauss or Laplace-Gauss) distribution is a very common continuous probability distribution. Normal distributions are important in statistics and are often used in the natural and social sciences to represent real-valued random variables whose distributions are not known. A random variable with a Gaussian distribution is said to be normally distributed and is called a normal deviate.`

First we describe Normal Distribution by equation by Math.js library.

demo code:

{% highlight css %}
it(`The probability density of the normal distribution is`, () => {
    expect(math.eval(`1/sqrt (2*pi *sigma ^2)*e^(-(x-u )^2/(2*sigma ^2))`, {
        sigma: 0.5,
        x: 1,
        u: 5
    })).toEqual(1.0104542167073798e-14)
});
{% endhighlight %}

Now let's explain its physical significance:

u is the mean or expectation of the distribution (and also its median and mode),
sigma is the standard deviation, and
sigma^2 is the variance.

<B>Definition</B>

{% highlight typescript %}

{% endhighlight %}

To be continued

Best luck to you!

Thank you reading my blog.