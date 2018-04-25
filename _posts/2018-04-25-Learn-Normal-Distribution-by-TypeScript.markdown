---
layout: post
title:  "Learn-Normal-Distribution-by-TypeScript"
date:   2018-04-25 1:38:28 +0800
categories: jekyll update
---

Recently I've read some articles about AI or Machine Learning those all come down to Normal Distribution or Uniform Distribution. So I decide to learn that.

According Wiki: `In probability theory, the normal (or Gaussian or Gauss or Laplace-Gauss) distribution is a very common continuous probability distribution. Normal distributions are important in statistics and are often used in the natural and social sciences to represent real-valued random variables whose distributions are not known. A random variable with a Gaussian distribution is said to be normally distributed and is called a normal deviate.`

First we describe Normal Distribution by equation by Math.js library.

demo code:

{% highlight css %}
html {
  font-size: 62.5%; /* font-size 1em = 10px on default browser settings */
}
span {
  font-size: 1.6rem;
}
{% endhighlight %}

But before exploring the `rem` unit we firstly need think what's the meaning of the unit on earth that is traced back to philosophy.

In the dark age or religious era we needn't know about the nature because God knows everything create everything and we only obeyed the rule of his. But after the era we began to know about nature or things. When I see a physics objects what I've seen. The fact I see its properties including width, height, weigh, taste, dense etc. But how I eliminate all of those? The concepts of human is about kinds or types that is ideal. To agreement we invent `Units` to measure all the things.

Now we have SEVEN basic Units those're `The International System of Units (SI) defines seven units of measure as a basic set from which all other SI units can be derived. The SI base units and their physical quantities are the metre for measurement of length, the kilogram for mass, the second for time, the ampere for electric current, the kelvin for temperature, the candela for luminous intensity, and the mole for amount of substance.`

We can code a test suit to describe the above units:

{% highlight typescript %}
describe(`https://en.wikipedia.org/wiki/SI_base_unit`, () => {
    it(`Seven SI base units`, () => {
        const SI = [{ "Name": "metre", "Symbol": "m", "Measure": "length", "DimensionSymbol": "L" }, { "Name": "kilogram", "Symbol": "kg", "Measure": "mass", "DimensionSymbol": "M" }, { "Name": "second", "Symbol": "s", "Measure": "time", "DimensionSymbol": "T" }, { "Name": "ampere", "Symbol": "A", "Measure": "electric current", "DimensionSymbol": "I" }, { "Name": "kelvin", "Symbol": "K", "Measure": "thermodynamic temperature", "DimensionSymbol": "Θ" }, { "Name": "mole", "Symbol": "mol", "Measure": "amount of substance", "DimensionSymbol": "N" }, { "Name": "candela", "Symbol": "cd", "Measure": "luminous intensity", "DimensionSymbol": "J" }];
        expect(SI.length).toBe(7)
    });
    it(`"The metre is the length of the path travelled by light in vacuum during a time interval of 1 / 299792458 of a second."`, () => {
        const metreUnit = 1, LightSpeed = metreUnit * 299792458, threeHundredThounsandMetres = 30 * 1e5 * 1e3;
        expect(LightSpeed).toBeLessThan(threeHundredThounsandMetres)
    });
});
{% endhighlight %}

What's the meaning? Metre(l) is the basic unit of Length. It's akin to the pixel(px) in physical measurement of DOM elements that is called `Absolute length units`. Of course there're seveal units like px e.g. cm, mm, ...

We code a test unit to describe that:

{% highlight typescript %}
describe(`Absolute length units represent a physical measurement when the physical properties of the output medium are known, such as for print layout.`, () => {
        it(`1px = 1/96th of 1in，One inch. 1in = 2.54cm = 96px`, () => {
            const metre = 1
            const cm = 1e-2 * metre
            const px = 2.54 * cm / 96;
            expect((px).toFixed(5)).toBe("0.00026")
        });
    });
{% endhighlight %}

What does the test tell us? `px` is not the basic unit of everything. It can be evaluated by METRE through the bridge of INCH. So we know we need a length measuement when developing front-end page. We set all kinds of absolute length units for web development. Those length units derived from the ultimate length unit METRE.

p.s. Why does metre is constant? It's measured by the speed of light. Light speed in vacuum is absolute and unchangable. The statement is important for the modern science. We know Einstain's Relative Theory is based on the light speed exeriments. Einstain doesn't know why the light speed is constant but he is the first human knowing what it'll lead to. From then the ideal of human in the macro world is changed for ever.

Next question: Why the `rem` unit introduced into web development?

`rem
Represents the font-size of the root element (typically <html>). When used within the root element font-size, it represents its initial value (a common browser default is 16px, but user-defined preferences may modify this).`

This means that 1rem equals the font size of the html element (which for most browsers has a default value of 16px). Because the two aspect relation is ratio relation that identify the page layout keeps constant in different metrics devices.

But because it's a ratio relation that leads to the actual rem not intuitional. So we can use a trick called '62.5%' such as:

{% highlight typescript %}
body { font-size:62.5%; }  /* =10px */
h1   { font-size: 2.4em; } /* =24px */
p    { font-size: 1.4em; } /* =14px */
li   { font-size: 1.4em; } /* =14px */
{% endhighlight %}

<B>The second: Remote Debugging:</B>

Remote debug live content on an Android device from your Windows, Mac, or Linux computer.

Android: https://developers.google.com/web/tools/chrome-devtools/remote-debugging/

iOS: It's akin to Android but you have to use Mac's safari to debug the browser or hybrid app embedded browser.

So you should have a mac and install safari and Chrome/Canary to debug iOS and Android respectively.

Tips: If your country block some google services you maybe open blank page when debugging. If so you have to use VPN service to connect the google server and debug the pages.

<B>Performance:</B>

The mobile performance is important and you need remember the problem. If page freezes you can use Performance panel of devtools in Chrome/Canary to detect the situation and which function callback. Or you can use Audits panel which integrated into Lighthouse tool to see what need optimize.

Now you know the most important problems about mobile development. Moreover if you want to simulate App actions and UI effects you need use some UI library.

Best luck to you!

Thank you reading my blog.