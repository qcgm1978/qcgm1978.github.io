---
layout: post
title:  "How-to-copy-links-to-thunder"
date:   2018-04-21 1:38:28 +0800
categories: jekyll update
---

Today I want to download X Files Season 1 to my mac. I meet the first problem is Thunder application can't open the links a time on mac. The download page is: http://www.meiju8.cc/movie/2540.html

So I decide to get the links mannually. I open devtools in Canary and inspect the download link elements. Although jQuery method is effection in the page I want to use es6 method Array.prototype.reduce:

{% highlight javascript %}
window.thunderA=$('.xl a').toArray().reduce((arr,n)=>{
   arr.push(n.getAttribute('href'));
   return arr;
},[]);
{% endhighlight %}

`$('.xl a')` is an object without reduce method so convert it with toArray() jquery method. The callback of reduce have two parameters. The first is the second arguments of reduce that is array. You must return it or the next arr would be wrong. You can't return `arr.push(n.getAttribute('href'));` directly because that's return value is the index of the new value pushed.

Secondly I want to convert the array to a string Thunder can recognize so I use `thunderA.join('\n')` that convert the array to a string by lines I can copy.

Thirdly I want to copy it to clipboard automatically. I search for the following method: https://stackoverflow.com/questions/34191780/javascript-copy-string-to-clipboard-as-text-html

{% highlight javascript %}
function copyFormatted (html) {
  // Create container for the HTML
  // [1]
  var container = document.createElement('div')
  container.innerHTML = html

  // Hide element
  // [2]
  container.style.position = 'fixed'
  container.style.pointerEvents = 'none'
  container.style.opacity = 0

  // Detect all style sheets of the page
  var activeSheets = Array.prototype.slice.call(document.styleSheets)
    .filter(function (sheet) {
      return !sheet.disabled
  })

  // Mount the iframe to the DOM to make `contentWindow` available
  // [3]
  document.body.appendChild(container)

  // Copy to clipboard
  // [4]
  window.getSelection().removeAllRanges()

  var range = document.createRange()
  range.selectNode(container)
  window.getSelection().addRange(range)

  // [5.1]
  document.execCommand('copy')

  // [5.2]
  for (var i = 0; i < activeSheets.length; i++) activeSheets[i].disabled = true

  // [5.3]
  document.execCommand('copy')

  // [5.4]
  for (var i = 0; i < activeSheets.length; i++) activeSheets[i].disabled = false

  // Remove the iframe
  // [6]
  document.body.removeChild(container)
}
{% endhighlight %}

The core concept of the method is insert an element into DOM with the above string as its text node. Invoke `window.getSelection()` to get the contents of the DOM for the argument of `document.execCommand('copy')`, then I copy the string I get in the second step.

Now Thunder recognize the copy contents and pop up the download prompt box immediately. All are perfect.

Thank you reading my blog.