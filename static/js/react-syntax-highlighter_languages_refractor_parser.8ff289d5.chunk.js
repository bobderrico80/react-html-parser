(this["webpackJsonp@bobderrico80/react-html-parser-example"]=this["webpackJsonp@bobderrico80/react-html-parser-example"]||[]).push([[97],{178:function(e,a,n){"use strict";function t(e){!function(e){var a=e.languages.parser=e.languages.extend("markup",{keyword:{pattern:/(^|[^^])(?:\^(?:case|eval|for|if|switch|throw)\b|@(?:BASE|CLASS|GET(?:_DEFAULT)?|OPTIONS|SET_DEFAULT|USE)\b)/,lookbehind:!0},variable:{pattern:/(^|[^^])\B\$(?:\w+|(?=[.{]))(?:(?:\.|::?)\w+)*(?:\.|::?)?/,lookbehind:!0,inside:{punctuation:/\.|:+/}},function:{pattern:/(^|[^^])\B[@^]\w+(?:(?:\.|::?)\w+)*(?:\.|::?)?/,lookbehind:!0,inside:{keyword:{pattern:/(^@)(?:GET_|SET_)/,lookbehind:!0},punctuation:/\.|:+/}},escape:{pattern:/\^(?:[$^;@()\[\]{}"':]|#[a-f\d]*)/i,alias:"builtin"},punctuation:/[\[\](){};]/});a=e.languages.insertBefore("parser","keyword",{"parser-comment":{pattern:/(\s)#.*/,lookbehind:!0,alias:"comment"},expression:{pattern:/(^|[^^])\((?:[^()]|\((?:[^()]|\((?:[^()])*\))*\))*\)/,greedy:!0,lookbehind:!0,inside:{string:{pattern:/(^|[^^])(["'])(?:(?!\2)[^^]|\^[\s\S])*\2/,lookbehind:!0},keyword:a.keyword,variable:a.variable,function:a.function,boolean:/\b(?:true|false)\b/,number:/\b(?:0x[a-f\d]+|\d+\.?\d*(?:e[+-]?\d+)?)\b/i,escape:a.escape,operator:/[~+*\/\\%]|!(?:\|\|?|=)?|&&?|\|\|?|==|<[<=]?|>[>=]?|-[fd]?|\b(?:def|eq|ge|gt|in|is|le|lt|ne)\b/,punctuation:a.punctuation}}}),a=e.languages.insertBefore("inside","punctuation",{expression:a.expression,keyword:a.keyword,variable:a.variable,function:a.function,escape:a.escape,"parser-punctuation":{pattern:a.punctuation,alias:"punctuation"}},a.tag.inside["attr-value"])}(e)}e.exports=t,t.displayName="parser",t.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_parser.8ff289d5.chunk.js.map