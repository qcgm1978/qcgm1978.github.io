---
layout: post
title:  "TensorFlow-AI-Doc"
date:   2018-04-19 19:38:28 +0800
categories: jekyll update
---
I know you want to learn tensorflow.js API BY TDD. So I'll desmontrate how to do that, of course the tensorflow.js official API DOC is at: https://js.tensorflow.org/api/0.9.0/

1, Firstly I see the Tensors on the top of the doc page. What describes it is `Tensors are the core datastructure of TensorFlow.js They are a generalization of vectors and matrices to potentially higher dimensions.`

How to understand that? I see the left navigation bar and try to get a complete impression on the library. There're Tensors, Models, Layers, Operations, Training, Performance, Environment, Constrains, Initializes, Regularizers. Those are the basis of the library. All of those are based on Tensors. As it defined datastructure, vectors, matrics and dimensions are the core of the Tensors.

I decided to study by TDD, TypeScript so I need config jest. After solving some problems my project changed as follows:

I'm using npm manage the project and the package.json changed to:

{% highlight json %}
"jest": {
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ]
  },
  "scripts": {
    "start": "bundle exec jekyll serve --incremental  --verbose",
    "test": "node --inspect ./node_modules/jest/bin/jest.js --runInBand  spec.ts --watch"
  },
   "devDependencies": {
    "canvas": "^1.6.10",
    "jest": "^22.4.3",
    "source-map-support": "^0.5.4",
    "ts-jest": "^22.4.4",
    "typescript": "^2.8.3"
  },
  "dependencies": {
    "@tensorflow/tfjs": "^0.9.1"
  }
{% endhighlight %}

I need add a tsconfig.json as follows:

{% highlight json %}
{
    "compilerOptions": {
        "module": "commonjs",
        "noImplicitAny": true,
        "removeComments": true,
        "preserveConstEnums": true,
        "sourceMap": true
    },
    "files": [
        "core.ts",
        "sys.ts",
        "types.ts",
        "scanner.ts",
        "parser.ts",
        "utilities.ts",
        "binder.ts",
        "checker.ts",
        "emitter.ts",
        "program.ts",
        "commandLineParser.ts",
        "tsc.ts",
        "diagnosticInformationMap.generated.ts"
    ]
}
{% endhighlight %}

After all of the above I can code tensorflow.js jest ts test:

{% highlight typescript %}
import * as tf from '@tensorflow/tfjs';

describe(`https://js.tensorflow.org/api/0.9.0/`, () => {
    it(`tf.tensor (values, shape?, dtype?) function source
Creates a tf.Tensor with the provided values, shape and dtype.`, () => {
            const tensor = tf.tensor([1, 2, 3, 4]);
            expect(tensor).toEqual()
        });
});
{% endhighlight %}

Of course it failed. What I received is Received:
      `{"dataId": {}, "dtype": "float32", "id": 0, "isDisposed": false, "rankType": "1", "shape": [4], "size": 4, "strides": []}`

So the tensor method of namespace tf returns an object. So I try testing:

{% highlight json %}
            expect(tensor).toBeInstanceOf(Object)
 
{% endhighlight %}

It passed.

To be continued...