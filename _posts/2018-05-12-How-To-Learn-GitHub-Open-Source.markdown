---
layout: post
title:  "How-To-Learn-GitHub-Open-Source"
date:   2018-05-12 1:38:28 +0800
categories: jekyll update
---

I'll explore how to learn a github project.

<B>The Five Ws are Who, What, When, Where, and Why, the fundamentals of clear and concise communication</B>

Who? If you're a developer and coder you'd learn how to learn to promte efficiency.

When? Now, at once. 

Where: GitHub. As of April 2017, GitHub reports having almost 20 million users and 57 million repositories, making it the largest host of source code in the world.

Why will I write the post? When I learning github project I want to focus whether I learn something and know about something at last. All of those need some standards and methods or paradigm.

My paradigm is: Trial and error is a fundamental method of problem solving. It is characterised by repeated, varied attempts which are continued until success, or until the agent stops trying. You know it's TDD development methods.

Now I'll pick up [PhoenixGo](https://github.com/Tencent/PhoenixGo) project to start my post.

At first you should read README of the project.

README: In more recent times, the popular GitHub proprietary Git repository strongly encourages a README file - if one is included in the main (top-level) directory, it is automatically presented on the main web page.

The title is `Go AI program which implement the AlphaGo Zero paper`. I know what the project is about after reading that. The I click the colored line under the title and some notifications appears: `C++ 71.4%	 Python 28.0%	 C 0.6%`. I guess the project includes some C++, Python and C. I know little about the three languages but I choose to go on.

The README includes `Building and Running` part and it only introduces Linux environment but I'm working on Mac. The project is new and there's little chance the web has the ansswer to it so I click the issues of the project search the answer and have nothing. At last I post a requesting post: 'Does the project support mac/OSX system?' The next day I have the answer 'You may try building with bazel as the same way on Linux. But since neither Tensorflow nor TensorRT provide GPU support on macOS, you could on'

I choose to go on. I fork the project so I can feel free to develop it and may pull request if I can. 

I clone it. Now I'm install building tool as [the page](https://docs.bazel.build/versions/master/install-os-x.html#install-with-installer-mac-os-x) indicates

But the downloading time is too long so I'll exploring another github project I've already clone and install.(At last the downloading failed and I decided to give up the project.)

The project is [tfjs-model](https://github.com/qcgm1978/tfjs-models), you can see some explanation right below the project name that indicates where it's forked from.

The project is `Pretrained models for TensorFlow.js https://js.tensorflow.org`. It includes  TypeScript 83.0%	 JavaScript 14.4%	 HTML 2.6%. I know some about js and html and a little knowledge about ts. Now let's start. You see the README file is missing in the root of the project but there's another README file in the posenet path and another one in the posenet/demos path. Don't ask how I know it. I find it in the twitter and the link turn to the demo path url. 

The project is built by Yarn that is a Fast, reliable, and secure dependency management. I follow the steps of setup in the README file and build the project. Because the Camera feed demo looks complicated so I decide to start from Coco images demo.

I want to know where the code's entry is. I know the tenflowjs use browser Canvas to implement acceleration. So I set the Canvas Event Listener Breakpoints and find the code line Create canvas context then I set the breakpoint on the line and cancel the event listener for elegant debugging.

The first interesting code line is `setupGui(net);` that reference a library dat.gui that I don't know very much. I want to know the AI algorthems instead of the UI implementation so I step over next function call `await testImageAndEstimatePoses(net);`

I want to know about await keyword so I search in MDN and code jest test case like the following


{% highlight typescript %}
 it(`The async function declaration defines an asynchronous function, which returns an AsyncFunction object.`, (done) => {
  function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

  async function asyncCall() {
    var result = await resolveAfter2Seconds();
    return (result);
  }

  asyncCall().then(data => {
    expect(data).toBe('resolved')
    done()
  });
});
{% endhighlight %}

Of course you should need install the relatively dependencies includes jest etc and set the test script command like `"test": "sudo node --inspect=7000 node_modules/.bin/jest --runInBand  --watch"` that indicates executed by sudo authority and inspect 7000 port or any other port so you can debug it on the Chrome/Canary insepct panel. The default port is 3299 if you don't set it.

Now the test case passed and we'll go on. What's the meaning of the parameter net that is the return result of `await posenet.load()`? So I set the breakpoint on the line and find the return value is `new PoseNet(mobileNet);`

`  const mobileNet = new MobileNet(variables, checkpoint.architecture);`

MobileNet is a class defined in mobilenet.ts that containing about 100 lines code. The class includes some public and private properties that I want to learn.

I want to test the module directly but it failed and the error is Cannot find module 'ts-jest' from 'index.ts'. I try to install ts-jest but it doesn't work. So I decide to go on and abort the error. I should learn the class properties from typescript docs directly!

I code some test cases like the following, the code would pass the test because the tsc compiler will ignore the type errors defaultly. You should set tsconfig.js as `
"compilerOptions": {
    "target": "es6"
  }
  `, and the test would fail and you have to comment those code to pass them:

{% highlight typescript %}
it(`mark a member public explicitly`, () => {
  class Animal {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
      expect(`${this.name} moved ${distanceInMeters}m.`);
    }
  }
  const animal = new Animal('cat')
  expect(animal.name).toBe('cat')
});
it(`When a member is marked private, it cannot be accessed from outside of its containing class`, () => {
  class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
  }

  expect(new Animal("Cat").name).toBe('Cat'); // Error: 'name' is private;
  const animal = new Animal("Cat")
  expect(animal.name).toBe('Cat')
});
it(`The protected modifier acts much like the private modifier with the exception that members declared protected can also be accessed within deriving classes.`, () => {
  class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
  }

  class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
      super(name);
      this.department = department;
    }

    public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
  }

  let howard = new Employee("Howard", "Sales");
  expect(howard.getElevatorPitch()).toBe(`Hello, my name is Howard and I work in Sales.`);
  expect(howard.name).toBe('Howard'); // error
});
{% endhighlight %}

Now go on...

There's a line code `  const possibleMultipliers = Object.keys(checkpoints);` that uses Object.keys method and I should test it and focus the return value's order, this time I'll use the actual data that can be get in devtools when pause on the line's breakpoint but it failed, so I have to trace the parameter's origin and last I positon the mysterious code:

{% highlight typescript %}
export type ConvolutionType = 'conv2d'|'separableConv';
export type ConvolutionDefinition = [ConvolutionType, number];
{% endhighlight %}

It seems typescript syntax and I decide to code test case about that:

To be continued

Best luck to you!

Thank you reading my blog.