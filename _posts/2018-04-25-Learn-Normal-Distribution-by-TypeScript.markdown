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

{% highlight typescript %}
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

As you've seen the code hasn't meaning because TypeScript as the superset of javascript isn't a math programming language.

There're many programming languages for mathematics as [the article](https://mathblog.com/10-great-programming-languages-for-mathematics/) describes. I'll talk my understanding about some of those:

MATLAB / GNU OCTAVE: Of course MATLAB is excellent but with licence payment so Octave is our alternative.

R: R is a programming language and software environment for statistical computing and graphics. So statistics is the key to R.

Python: Python interesting from a mathematical and scientific standpoint is the extensive amount of relevant libraries that are available for this popular programming language

So I know which programming languages for mathematics can implement the algorithm about normal distribution. I plan to implement it by TypeScript, Octave, Python.

<B>TypeScript implementation with node modules 'normal-distribution'</B>

{% highlight typescript %}
import NormalDistribution from 'normal-distribution'
const obj = {}
describe(`A small javascript module for working with normal distributions.`, () => {
    beforeAll(() => {
        obj.normDist = new NormalDistribution(/* mean, standardDeviation */)
        obj.normDist1 = new NormalDistribution(1, 2);
    });
    it(`With no arguments the distribution will be a standard normal distribution with mean = 0 and standardDeviation = 1.`, () => {
        expect(obj.normDist).toEqual({ "_mean": 0, "_standardDeviation": 1 })
        expect(obj.normDist1).toEqual({ "_mean": 1, "_standardDeviation": 2 })
    });
    it(`#pdf(value)
    Accepts an integer argument and returns the probability denisty at that point in the distribution; useful for drawing the curve.`, () => {
            expect(obj.normDist.pdf(0)).toEqual(0.3989422804014327)
            expect(obj.normDist1.pdf(0)).toEqual(0.17603266338214976)
            expect(obj.normDist1.pdf(3)).toEqual(0.12098536225957168)

        });
    it(`#cdf(value)
    Accepts an integer argument and returns the probability of a random variable being below the one argument passed to the method.`, () => {
            expect(obj.normDist.cdf(0)).toEqual(0.5)
            expect(obj.normDist1.cdf(0)).toEqual(0.3085)

        });
    it(`#probabilityBetween(value1, value2)
Accepts two integer arguments and returns the probability of a random variable being between the two arguments passed.`, () => {
            expect(obj.normDist.probabilityBetween(0, 1)).toEqual(0.34130000000000005)
            expect(obj.normDist1.probabilityBetween(0, 2)).toEqual(0.383)
        });
    it(`zScore(value)
Accepts an integer argument and returns the z-score for that value.`, () => {
            expect(obj.normDist.zScore(0)).toEqual(0)
            expect(obj.normDist1.zScore(2)).toEqual(0.5)
        });    
});
{% endhighlight %}

What do we know about the above test suit?

`new NormalDistribution(/* mean, standardDeviation */)` instantiates Class NormalDistribution that returns an object contains passed arguments as _mean and _standardDeviation. The returning object would be `{ "_mean": 0, "_standardDeviation": 1 }` if no arguments passed that means you default passed two arguments 0 and 1 in sequence.

The instance instantiated by the above step would inherit four instance methods from Class NormalDistribution: pdf, cdf, probabilityBetween, zScore. Let's try to understand what's meaning of those methods.

`pdf(value)`: What's probability denisty? Maybe it's a value's probability in some range. <i>obj.normDist</i>'s mean is 0 and standard deviation is 1 so the numbers according to the instance should be a serial of numbers moves around 0 and the more data is 1 or -1. The result of pdf(0) must be less than 0.5 that is all I infer. Now the result is 0.3989422804014327 that satisfy my inference condition.

<i>obj.normDist1</i>'s mean is 1 and standard deviation is 2 so the numbers according to the instance should be a serial of numbers moves around 1 and the more data is 3 and -3, The result of pdf(0) must be less than 0.5. It should be less than the result the above expect because 3 > 1. Although 0 is less than the mean 1 the difference is less than 3 - 1. I infer the probability should be less than the above expect and the expect statement proves my inference.

But <i>obj.normDist1.pdf(3)</i> is less than the result when passing 0. What's meaning of it? That means 3 is not the more probability but the less.

`cdf(value)`: On the basis of the above conclusion <i>obj.normDist</i> means a serial numbers move around 0 with the range of -1 and 1. Now I know a bit about `Normal Distribution` that is a kind of distribution with the probability decided by the distance from the mean value. 0 is  obj.normDist's mean value so the cdf method's result is 0.5 that is the meaning of the mean value as 0 = math.mean(1,-1)

Now considering obj.normDist1.cdf(0), the deviation is 2 and the difference arument and mean value is 1 - 0 = 1 that is less than 2 so the probability should be less 0.5. The difference of the argument and deviation is equal to the difference of the argument and the mean value: 2 - 1 == 1 - 0. By the meaning of normal distribution the probability should be more than 50% so the result should be less than 0.5 but more than 0.25 as 50% of 0.5.

`probabilityBetween(value1, value2)` and `zScore` we would discuss after some time because I need more expericences to explain those meaning.

<B>Octave</B>

{% highlight octave %}
assert(stdnormal_cdf(0.5),0.69146,1);
assert(stdnormal_pdf(0),0.39894,1);
{% endhighlight %}

Now let's study some basic knowledge of Octave. Of course you should download and install Octave in Windows or Mac. I install it on the different operation system respectively. It also support GNU/Linux and BSD systems that I don't play.

Let's distinguish two concepts: Octave and GNU Octave. 

`Octave` is a software that you download, install and to learn. It was originally intended to be companion software for an undergraduate-level textbook on chemical reactor design. More recently, Octave has been used as the primary computational tool for teaching Stanford’s online Machine Learning class (<ml-class.org>) taught by [Andrew Ng](https://twitter.com/AndrewYNg).

`GNU Octave` is a high-level language primarily intended for numerical computations.  It is typically used for such problems as solving linear and nonlinear equations, numerical linear algebra, statistical analysis, and for performing other numerical experiments.

Other concepts: 

`Octave GUI`: The GUI hosts an Integrated Development Environment (IDE) which includes a code editor with syntax highlighting, built-in debugger, documentation browser, as well as the interpreter for the language itself.  A command-line interface for Octave is also available.

You can type `doc foo` to browse help document, e.g. `doc stdnormal_cdf`

The built-in method stdnormal_pdf (X): For each element of X, compute the probability density function (PDF) at X of the standard normal distribution (mean = 0, standard deviation = 1).

<B>Python</B>

To be continued

Best luck to you!

Thank you reading my blog.