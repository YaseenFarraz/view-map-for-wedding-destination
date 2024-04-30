// Wait for the DOM content to be fully loaded before executing
document.addEventListener("DOMContentLoaded", function() {
   // Lazy load images
   var lazyImages = document.querySelectorAll('img[data-src]');
   lazyImages.forEach(function(img) {
       img.setAttribute('src', img.getAttribute('data-src'));
       img.onload = function() {
           img.removeAttribute('data-src');
       };
   });

   // Asynchronously load non-critical scripts
   var asyncScripts = document.querySelectorAll('script[data-async-src]');
   asyncScripts.forEach(function(script) {
       var newScript = document.createElement('script');
       newScript.src = script.getAttribute('data-async-src');
       script.parentNode.insertBefore(newScript, script.nextSibling);
   });

   // Defer loading of CSS
   var head = document.getElementsByTagName('head')[0];
   var link = document.createElement('link');
   link.rel = 'stylesheet';
   link.type = 'text/css';
   link.href = 'style.css';
   head.appendChild(link);
});
