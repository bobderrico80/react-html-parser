(this["webpackJsonp@bobderrico/react-html-parser-example"]=this["webpackJsonp@bobderrico/react-html-parser-example"]||[]).push([[136,67,139],{211:function(e,t,n){"use strict";var a=n(60),s=n(63);function i(e){e.register(a),e.register(s);var t=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",t)}e.exports=i,i.displayName="tsx",i.aliases=[]},60:function(e,t,n){"use strict";function a(e){!function(e){var t=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i,e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},e.languages.jsx.tag),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var n=function e(t){return t?"string"===typeof t?t:"string"===typeof t.content?t.content:t.content.map(e).join(""):""};e.hooks.add("after-tokenize",(function(t){"jsx"!==t.language&&"tsx"!==t.language||function t(a){for(var s=[],i=0;i<a.length;i++){var r=a[i],o=!1;if("string"!==typeof r&&("tag"===r.type&&r.content[0]&&"tag"===r.content[0].type?"</"===r.content[0].content[0].content?s.length>0&&s[s.length-1].tagName===n(r.content[0].content[1])&&s.pop():"/>"===r.content[r.content.length-1].content||s.push({tagName:n(r.content[0].content[1]),openedBraces:0}):s.length>0&&"punctuation"===r.type&&"{"===r.content?s[s.length-1].openedBraces++:s.length>0&&s[s.length-1].openedBraces>0&&"punctuation"===r.type&&"}"===r.content?s[s.length-1].openedBraces--:o=!0),(o||"string"===typeof r)&&s.length>0&&0===s[s.length-1].openedBraces){var c=n(r);i<a.length-1&&("string"===typeof a[i+1]||"plain-text"===a[i+1].type)&&(c+=n(a[i+1]),a.splice(i+1,1)),i>0&&("string"===typeof a[i-1]||"plain-text"===a[i-1].type)&&(c=n(a[i-1])+c,a.splice(i-1,1),i--),a[i]=new e.Token("plain-text",c,null,c)}r.content&&"string"!==typeof r.content&&t(r.content)}}(t.tokens)}))}(e)}e.exports=a,a.displayName="jsx",a.aliases=[]},63:function(e,t,n){"use strict";function a(e){e.languages.typescript=e.languages.extend("javascript",{keyword:/\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}),e.languages.ts=e.languages.typescript}e.exports=a,a.displayName="typescript",a.aliases=["ts"]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_tsx.31acf9bb.chunk.js.map