---
layout: post
title:  "Front-End-Topics"
date:   2018-05-06 1:38:28 +0800
categories: jekyll update
---

I think the topics about front end development, it should include the following topics:

Language: javascript, css, html

Tool: IDE, devtools, browser, remote debug

Interaction: animation, user behavior, elegant, DOM operation

UI: DOM, Image, SVG, Canvas, WebGl, Video, Audio, compatibility

Libraries: Backbone, React, Angular

Ajax: server, status code, nodejs

Development: environment setup, source map, breakpoints, Fiddler, modules dependency

TDD: Jest, mocha, console.assert, chrome headless

Product: build, bundler

AI: user inference

Domain: B to B, Finance, Game etc

I'll code a project with all the above technologies, more important I'll explore how those occurs and the procedure of the whole development process and the best development practices:

First I creat project folder structure. I don't know how the project will expand so I start from easy:

I created a index.html in practices folder in my website of github page. I want to open it in browser so I need to execute a local server. I ever use Webstorm developing but now vs code. Vs code has HTML Boilerplate plugin that make it very easy to create a standard H5 html. And I know http-server is a simple, zero-configuration command-line http server. So I install it by `npm install http-server -g` but you know it would fail if you are in mac like me. You have to execute `sudo npm install http-server -g` and input mac password to install global node modules. You need to use taobao mirror to accellerate the download speed if you are in China like me. I.e. I execute the following `sudo cnpm install http-server -g` It didn't work and prompt 404 error. I think a while and found http-server conflic with github page development tool jekyll so I have to terminate the jekyll command in terminal and now it works. The html like following:
{% highlight html %}
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
    <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
    <p>startup page html</p>
</body>

</html>
{% endhighlight %}

What do you think the above steps? It's very easy page but I still make some while. Why? Am I stupid? Don't I have many experiences? I think no. The only reason is the facts is complicated. I work in my project that is special. I need local server that is necessary for front end development. I need html boilerplate instead of code html from scratch. I need translation software because English is my the second language. What do you think the above? Is it easy? No. It needs many experiences. What's the conclusion we draw? We should do as easy as we can. 

<B>Don't burden yourself. Do as less as you can.</B>

Now we touch some of the elements of front end development. So far it includs:

HTML, VS code, Canary browser, environment setup.

I recommend you use Canary in development. It's google chrome's development version. It implements many development tools and methods. It's professional if you use it.

<B>Tools is the most important for the developers. Because the human history is from stone to computers.</B>

So I'll pay attention to the usage of the tools in the following development. So far the using tools include `VS Code and HTML Boilerplate, Canary browser, http-server command line, and OSX mac system` So why do we use these tools?

`VS Code`: Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications. That's the official definition. So far I think the critical word is optimized. What I mean is the speed, extensions system, UI schema and so on. In contract to Webstorm the speed optimization is obvious. You know the speed is very important to the developers because we open many applications and toggle all kinds of tools. We need the light feet(Nietzsche's quote).

`HTML Boilerplate`: This extension provides the standard HTML boilerplate code used in all web applications. I'll explore what's meaning the different parts of the above HTML.

<!DOCTYPE html>: It's the HTML5 markup that indicates the browsers render the html by the standards of HTML5. You always use this HTML markup.

`<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->`: It's called conditional comments to compatible with IE browser. You know IE has some features different from other browsers. So you can code conditional comments for the respective ie browser version th determine.

`<html class="no-js">`: What's the fuck of 'no-js'? When Modernizr runs, it removes the "no-js" class and replaces it with "js". This is a way to apply different CSS rules depending on whether or not Javascript support is enabled. Now we don't apply Modernizr library so the class still in the html when you open it. In fact I never reference Modernizr library because we develop only on some modern browsers. If some browser don't support the feature we request we'll soon find it. The library hasn't much help to the developers. Yes I say Paul Irish's library doesn't have much help. As Front End developers we should have courage to do as our thoughts!

`<meta charset="utf-8">`: This attribute declares the page's character encoding. UTF-8 (UCS Transformation Format 8) is the World Wide Web's most common character encoding. It's important to the other language like Chinese. If you insert such html '<p>汉字</p>'. I don't find the Text Encoding in Canary but safari support this setting. When you set it not default or utf-8 the Chinese character would be messy code.

`<meta http-equiv="X-UA-Compatible" content="IE=edge">`: "IE=edge" tells Internet Explorer to use the highest mode available to that version of IE. I don't know what's that. I think it's a history markup.

`<meta name="viewport" content="width=device-width, initial-scale=1">`: viewport, which gives hints about the size of the initial size of the viewport. Used by mobile devices only. Let's see the compatibility from this line code. I try insert img to test the effect but not work, maybe it would only have effect on some mobile browser. You see front end development is complicated because the browser environments are too much.

But now I know this means that the browser will (probably) render the width of the page at the width of its own screen. So if that screen is 320px wide, the browser window will be 320px wide, rather than way zoomed out and showing 960px (or whatever that device does by default, in lieu of a responsive meta tag).

I insert `<img width='100%' src="leg.jpg" />` into the HTML. At first I set the width a number and there's no difference. But when I set 100% the image would distract the page without the meta. It would set the img's width as the width of the screen viewport that's I want her to do.

If we want to do front end development we have to grasp so many such knowledge. Do you think it's easy?

`<!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->`: It prompts the user update his browser if he's using IE7. Why? I search the Wikipedia that says 'Internet Explorer 8 is the first version of IE to pass the Acid2 test'. I think it means many features support. Of course it's a history problem you needn't grasp it. See, Do you remember all of these details?

Now I insert `<script>
        document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
            ':35729/livereload.js?snipver=1"></' + 'script>')
    </script>` for auto refreshing page. Of course I need execute livereload command in terminal. It's another useful tool and implementation of the LiveReload server in Node.js. Now I have another development tool.

Now you see I explain a lot about such a simple page. There're many such knowledge in front end development. You needn't know all of those but you need to find such knowledge. So we get a new principle:

<B>Search and find the answer of a problem is the critical of front end development</B>

You should grasp google search and learn by stackoverflow, github, Mozilla MDN. I suggest you install chrome extension SearchBar and add those search engine. Of course you need VPN if you're in China. The basis of all the above is the English language standard. If you're a Chinese, Please grasp English like javascript.

<B>Grasp English like JavaScript</B>

To be continued

Best luck to you!

Thank you reading my blog.