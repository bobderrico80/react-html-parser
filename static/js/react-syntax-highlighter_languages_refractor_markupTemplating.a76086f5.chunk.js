(this["webpackJsonp@bobderrico80/react-html-parser-example"]=this["webpackJsonp@bobderrico80/react-html-parser-example"]||[]).push([[81],{44:function(e,t,n){"use strict";function a(e){!function(e){function t(e,t){return"___"+e.toUpperCase()+t+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,a,r,o){if(n.language===a){var c=n.tokenStack=[];n.code=n.code.replace(r,(function(e){if("function"===typeof o&&!o(e))return e;for(var r,i=c.length;-1!==n.code.indexOf(r=t(a,i));)++i;return c[i]=e,r})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,a){if(n.language===a&&n.tokenStack){n.grammar=e.languages[a];var r=0,o=Object.keys(n.tokenStack);!function c(i){for(var p=0;p<i.length&&!(r>=o.length);p++){var s=i[p];if("string"===typeof s||s.content&&"string"===typeof s.content){var u=o[r],l=n.tokenStack[u],g="string"===typeof s?s:s.content,f=t(a,u),k=g.indexOf(f);if(k>-1){++r;var m=g.substring(0,k),h=new e.Token(a,e.tokenize(l,n.grammar),"language-"+a,l),d=g.substring(k+f.length),b=[];m&&b.push.apply(b,c([m])),b.push(h),d&&b.push.apply(b,c([d])),"string"===typeof s?i.splice.apply(i,[p,1].concat(b)):s.content=b}}else s.content&&c(s.content)}return i}(n.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.a76086f5.chunk.js.map