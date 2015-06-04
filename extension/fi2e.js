//create a script element for the
//embedder script
// var s = document.createElement('script'),
// 	target =document.getElementsByTagName('script')[0];

// s.async=1;
// s.src='http://flickr-embedr.v1.production.manhattan.bf1.yahoo.com/assets/embedr.js';
// //add the script to the DOM so that it loads
// target.parentNode.insertBefore(s,target);
var s = document.createElement('script');
s.src = chrome.extension.getURL('client-code.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};