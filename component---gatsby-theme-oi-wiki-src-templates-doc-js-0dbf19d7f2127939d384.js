/*! For license information please see component---gatsby-theme-oi-wiki-src-templates-doc-js-0dbf19d7f2127939d384.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"2Lne":function(e,t,n){e.exports=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(n){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5e3;t(this,e),this.ctx=n,this.iframes=r,this.exclude=a,this.iframesTimeout=i}return n(e,[{key:"getContexts",value:function(){var e=[];return(void 0!==this.ctx&&this.ctx?NodeList.prototype.isPrototypeOf(this.ctx)?Array.prototype.slice.call(this.ctx):Array.isArray(this.ctx)?this.ctx:"string"==typeof this.ctx?Array.prototype.slice.call(document.querySelectorAll(this.ctx)):[this.ctx]:[]).forEach((function(t){var n=e.filter((function(e){return e.contains(t)})).length>0;-1!==e.indexOf(t)||n||e.push(t)})),e}},{key:"getIframeContents",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=void 0;try{var a=e.contentWindow;if(r=a.document,!a||!r)throw new Error("iframe inaccessible")}catch(i){n()}r&&t(r)}},{key:"isIframeBlank",value:function(e){var t="about:blank",n=e.getAttribute("src").trim();return e.contentWindow.location.href===t&&n!==t&&n}},{key:"observeIframeLoad",value:function(e,t,n){var r=this,a=!1,i=null,o=function o(){if(!a){a=!0,clearTimeout(i);try{r.isIframeBlank(e)||(e.removeEventListener("load",o),r.getIframeContents(e,t,n))}catch(s){n()}}};e.addEventListener("load",o),i=setTimeout(o,this.iframesTimeout)}},{key:"onIframeReady",value:function(e,t,n){try{"complete"===e.contentWindow.document.readyState?this.isIframeBlank(e)?this.observeIframeLoad(e,t,n):this.getIframeContents(e,t,n):this.observeIframeLoad(e,t,n)}catch(r){n()}}},{key:"waitForIframes",value:function(e,t){var n=this,r=0;this.forEachIframe(e,(function(){return!0}),(function(e){r++,n.waitForIframes(e.querySelector("html"),(function(){--r||t()}))}),(function(e){e||t()}))}},{key:"forEachIframe",value:function(t,n,r){var a=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},o=t.querySelectorAll("iframe"),s=o.length,c=0;o=Array.prototype.slice.call(o);var l=function(){--s<=0&&i(c)};s||l(),o.forEach((function(t){e.matches(t,a.exclude)?l():a.onIframeReady(t,(function(e){n(t)&&(c++,r(e)),l()}),l)}))}},{key:"createIterator",value:function(e,t,n){return document.createNodeIterator(e,t,n,!1)}},{key:"createInstanceOnIframe",value:function(t){return new e(t.querySelector("html"),this.iframes)}},{key:"compareNodeIframe",value:function(e,t,n){if(e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING){if(null===t)return!0;if(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_FOLLOWING)return!0}return!1}},{key:"getIteratorNode",value:function(e){var t=e.previousNode();return{prevNode:t,node:(null===t||e.nextNode())&&e.nextNode()}}},{key:"checkIframeFilter",value:function(e,t,n,r){var a=!1,i=!1;return r.forEach((function(e,t){e.val===n&&(a=t,i=e.handled)})),this.compareNodeIframe(e,t,n)?(!1!==a||i?!1===a||i||(r[a].handled=!0):r.push({val:n,handled:!0}),!0):(!1===a&&r.push({val:n,handled:!1}),!1)}},{key:"handleOpenIframes",value:function(e,t,n,r){var a=this;e.forEach((function(e){e.handled||a.getIframeContents(e.val,(function(e){a.createInstanceOnIframe(e).forEachNode(t,n,r)}))}))}},{key:"iterateThroughNodes",value:function(e,t,n,r,a){for(var i,o=this,s=this.createIterator(t,e,r),c=[],l=[],u=void 0,h=void 0;i=void 0,i=o.getIteratorNode(s),h=i.prevNode,u=i.node;)this.iframes&&this.forEachIframe(t,(function(e){return o.checkIframeFilter(u,h,e,c)}),(function(t){o.createInstanceOnIframe(t).forEachNode(e,(function(e){return l.push(e)}),r)})),l.push(u);l.forEach((function(e){n(e)})),this.iframes&&this.handleOpenIframes(c,e,n,r),a()}},{key:"forEachNode",value:function(e,t,n){var r=this,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},i=this.getContexts(),o=i.length;o||a(),i.forEach((function(i){var s=function(){r.iterateThroughNodes(e,i,t,n,(function(){--o<=0&&a()}))};r.iframes?r.waitForIframes(i,s):s()}))}}],[{key:"matches",value:function(e,t){var n="string"==typeof t?[t]:t,r=e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector;if(r){var a=!1;return n.every((function(t){return!r.call(e,t)||(a=!0,!1)})),a}return!1}}]),e}(),i=function(){function i(e){t(this,i),this.ctx=e,this.ie=!1;var n=window.navigator.userAgent;(n.indexOf("MSIE")>-1||n.indexOf("Trident")>-1)&&(this.ie=!0)}return n(i,[{key:"log",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"debug",r=this.opt.log;this.opt.debug&&"object"===(void 0===r?"undefined":e(r))&&"function"==typeof r[n]&&r[n]("mark.js: "+t)}},{key:"escapeStr",value:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}},{key:"createRegExp",value:function(e){return"disabled"!==this.opt.wildcards&&(e=this.setupWildcardsRegExp(e)),e=this.escapeStr(e),Object.keys(this.opt.synonyms).length&&(e=this.createSynonymsRegExp(e)),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),this.opt.diacritics&&(e=this.createDiacriticsRegExp(e)),e=this.createMergedBlanksRegExp(e),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.createJoinersRegExp(e)),"disabled"!==this.opt.wildcards&&(e=this.createWildcardsRegExp(e)),e=this.createAccuracyRegExp(e)}},{key:"createSynonymsRegExp",value:function(e){var t=this.opt.synonyms,n=this.opt.caseSensitive?"":"i",r=this.opt.ignoreJoiners||this.opt.ignorePunctuation.length?"\0":"";for(var a in t)if(t.hasOwnProperty(a)){var i=t[a],o="disabled"!==this.opt.wildcards?this.setupWildcardsRegExp(a):this.escapeStr(a),s="disabled"!==this.opt.wildcards?this.setupWildcardsRegExp(i):this.escapeStr(i);""!==o&&""!==s&&(e=e.replace(new RegExp("("+this.escapeStr(o)+"|"+this.escapeStr(s)+")","gm"+n),r+"("+this.processSynomyms(o)+"|"+this.processSynomyms(s)+")"+r))}return e}},{key:"processSynomyms",value:function(e){return(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),e}},{key:"setupWildcardsRegExp",value:function(e){return(e=e.replace(/(?:\\)*\?/g,(function(e){return"\\"===e.charAt(0)?"?":""}))).replace(/(?:\\)*\*/g,(function(e){return"\\"===e.charAt(0)?"*":""}))}},{key:"createWildcardsRegExp",value:function(e){var t="withSpaces"===this.opt.wildcards;return e.replace(/\u0001/g,t?"[\\S\\s]?":"\\S?").replace(/\u0002/g,t?"[\\S\\s]*?":"\\S*")}},{key:"setupIgnoreJoinersRegExp",value:function(e){return e.replace(/[^(|)\\]/g,(function(e,t,n){var r=n.charAt(t+1);return/[(|)\\]/.test(r)||""===r?e:e+"\0"}))}},{key:"createJoinersRegExp",value:function(e){var t=[],n=this.opt.ignorePunctuation;return Array.isArray(n)&&n.length&&t.push(this.escapeStr(n.join(""))),this.opt.ignoreJoiners&&t.push("\\u00ad\\u200b\\u200c\\u200d"),t.length?e.split(/\u0000+/).join("["+t.join("")+"]*"):e}},{key:"createDiacriticsRegExp",value:function(e){var t=this.opt.caseSensitive?"":"i",n=this.opt.caseSensitive?["aàáảãạăằắẳẵặâầấẩẫậäåāą","AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćč","CÇĆČ","dđď","DĐĎ","eèéẻẽẹêềếểễệëěēę","EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïī","IÌÍỈĨỊÎÏĪ","lł","LŁ","nñňń","NÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøō","OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rř","RŘ","sšśșş","SŠŚȘŞ","tťțţ","TŤȚŢ","uùúủũụưừứửữựûüůū","UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿ","YÝỲỶỸỴŸ","zžżź","ZŽŻŹ"]:["aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćčCÇĆČ","dđďDĐĎ","eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïīIÌÍỈĨỊÎÏĪ","lłLŁ","nñňńNÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rřRŘ","sšśșşSŠŚȘŞ","tťțţTŤȚŢ","uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿYÝỲỶỸỴŸ","zžżźZŽŻŹ"],r=[];return e.split("").forEach((function(a){n.every((function(n){if(-1!==n.indexOf(a)){if(r.indexOf(n)>-1)return!1;e=e.replace(new RegExp("["+n+"]","gm"+t),"["+n+"]"),r.push(n)}return!0}))})),e}},{key:"createMergedBlanksRegExp",value:function(e){return e.replace(/[\s]+/gim,"[\\s]+")}},{key:"createAccuracyRegExp",value:function(e){var t=this,n=this.opt.accuracy,r="string"==typeof n?n:n.value,a="string"==typeof n?[]:n.limiters,i="";switch(a.forEach((function(e){i+="|"+t.escapeStr(e)})),r){case"partially":default:return"()("+e+")";case"complementary":return"()([^"+(i="\\s"+(i||this.escapeStr("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿")))+"]*"+e+"[^"+i+"]*)";case"exactly":return"(^|\\s"+i+")("+e+")(?=$|\\s"+i+")"}}},{key:"getSeparatedKeywords",value:function(e){var t=this,n=[];return e.forEach((function(e){t.opt.separateWordSearch?e.split(" ").forEach((function(e){e.trim()&&-1===n.indexOf(e)&&n.push(e)})):e.trim()&&-1===n.indexOf(e)&&n.push(e)})),{keywords:n.sort((function(e,t){return t.length-e.length})),length:n.length}}},{key:"isNumeric",value:function(e){return Number(parseFloat(e))==e}},{key:"checkRanges",value:function(e){var t=this;if(!Array.isArray(e)||"[object Object]"!==Object.prototype.toString.call(e[0]))return this.log("markRanges() will only accept an array of objects"),this.opt.noMatch(e),[];var n=[],r=0;return e.sort((function(e,t){return e.start-t.start})).forEach((function(e){var a=t.callNoMatchOnInvalidRanges(e,r),i=a.start,o=a.end;a.valid&&(e.start=i,e.length=o-i,n.push(e),r=o)})),n}},{key:"callNoMatchOnInvalidRanges",value:function(e,t){var n=void 0,r=void 0,a=!1;return e&&void 0!==e.start?(r=(n=parseInt(e.start,10))+parseInt(e.length,10),this.isNumeric(e.start)&&this.isNumeric(e.length)&&r-t>0&&r-n>0?a=!0:(this.log("Ignoring invalid or overlapping range: "+JSON.stringify(e)),this.opt.noMatch(e))):(this.log("Ignoring invalid range: "+JSON.stringify(e)),this.opt.noMatch(e)),{start:n,end:r,valid:a}}},{key:"checkWhitespaceRanges",value:function(e,t,n){var r=void 0,a=!0,i=n.length,o=t-i,s=parseInt(e.start,10)-o;return(r=(s=s>i?i:s)+parseInt(e.length,10))>i&&(r=i,this.log("End range automatically set to the max value of "+i)),s<0||r-s<0||s>i||r>i?(a=!1,this.log("Invalid range: "+JSON.stringify(e)),this.opt.noMatch(e)):""===n.substring(s,r).replace(/\s+/g,"")&&(a=!1,this.log("Skipping whitespace only range: "+JSON.stringify(e)),this.opt.noMatch(e)),{start:s,end:r,valid:a}}},{key:"getTextNodes",value:function(e){var t=this,n="",r=[];this.iterator.forEachNode(NodeFilter.SHOW_TEXT,(function(e){r.push({start:n.length,end:(n+=e.textContent).length,node:e})}),(function(e){return t.matchesExclude(e.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),(function(){e({value:n,nodes:r})}))}},{key:"matchesExclude",value:function(e){return a.matches(e,this.opt.exclude.concat(["script","style","title","head","html"]))}},{key:"wrapRangeInTextNode",value:function(e,t,n){var r=this.opt.element?this.opt.element:"mark",a=e.splitText(t),i=a.splitText(n-t),o=document.createElement(r);return o.setAttribute("data-markjs","true"),this.opt.className&&o.setAttribute("class",this.opt.className),o.textContent=a.textContent,a.parentNode.replaceChild(o,a),i}},{key:"wrapRangeInMappedTextNode",value:function(e,t,n,r,a){var i=this;e.nodes.every((function(o,s){var c=e.nodes[s+1];if(void 0===c||c.start>t){if(!r(o.node))return!1;var l=t-o.start,u=(n>o.end?o.end:n)-o.start,h=e.value.substr(0,o.start),d=e.value.substr(u+o.start);if(o.node=i.wrapRangeInTextNode(o.node,l,u),e.value=h+d,e.nodes.forEach((function(t,n){n>=s&&(e.nodes[n].start>0&&n!==s&&(e.nodes[n].start-=u),e.nodes[n].end-=u)})),n-=u,a(o.node.previousSibling,o.start),!(n>o.end))return!1;t=o.end}return!0}))}},{key:"wrapMatches",value:function(e,t,n,r,a){var i=this,o=0===t?0:t+1;this.getTextNodes((function(t){t.nodes.forEach((function(t){t=t.node;for(var a=void 0;null!==(a=e.exec(t.textContent))&&""!==a[o];)if(n(a[o],t)){var s=a.index;if(0!==o)for(var c=1;c<o;c++)s+=a[c].length;t=i.wrapRangeInTextNode(t,s,s+a[o].length),r(t.previousSibling),e.lastIndex=0}})),a()}))}},{key:"wrapMatchesAcrossElements",value:function(e,t,n,r,a){var i=this,o=0===t?0:t+1;this.getTextNodes((function(t){for(var s=void 0;null!==(s=e.exec(t.value))&&""!==s[o];){var c=s.index;if(0!==o)for(var l=1;l<o;l++)c+=s[l].length;var u=c+s[o].length;i.wrapRangeInMappedTextNode(t,c,u,(function(e){return n(s[o],e)}),(function(t,n){e.lastIndex=n,r(t)}))}a()}))}},{key:"wrapRangeFromIndex",value:function(e,t,n,r){var a=this;this.getTextNodes((function(i){var o=i.value.length;e.forEach((function(e,r){var s=a.checkWhitespaceRanges(e,o,i.value),c=s.start,l=s.end;s.valid&&a.wrapRangeInMappedTextNode(i,c,l,(function(n){return t(n,e,i.value.substring(c,l),r)}),(function(t){n(t,e)}))})),r()}))}},{key:"unwrapMatches",value:function(e){for(var t=e.parentNode,n=document.createDocumentFragment();e.firstChild;)n.appendChild(e.removeChild(e.firstChild));t.replaceChild(n,e),this.ie?this.normalizeTextNode(t):t.normalize()}},{key:"normalizeTextNode",value:function(e){if(e){if(3===e.nodeType)for(;e.nextSibling&&3===e.nextSibling.nodeType;)e.nodeValue+=e.nextSibling.nodeValue,e.parentNode.removeChild(e.nextSibling);else this.normalizeTextNode(e.firstChild);this.normalizeTextNode(e.nextSibling)}}},{key:"markRegExp",value:function(e,t){var n=this;this.opt=t,this.log('Searching with expression "'+e+'"');var r=0,a="wrapMatches";this.opt.acrossElements&&(a="wrapMatchesAcrossElements"),this[a](e,this.opt.ignoreGroups,(function(e,t){return n.opt.filter(t,e,r)}),(function(e){r++,n.opt.each(e)}),(function(){0===r&&n.opt.noMatch(e),n.opt.done(r)}))}},{key:"mark",value:function(e,t){var n=this;this.opt=t;var r=0,a="wrapMatches",i=this.getSeparatedKeywords("string"==typeof e?[e]:e),o=i.keywords,s=i.length,c=this.opt.caseSensitive?"":"i";this.opt.acrossElements&&(a="wrapMatchesAcrossElements"),0===s?this.opt.done(r):function e(t){var i=new RegExp(n.createRegExp(t),"gm"+c),l=0;n.log('Searching with expression "'+i+'"'),n[a](i,1,(function(e,a){return n.opt.filter(a,t,r,l)}),(function(e){l++,r++,n.opt.each(e)}),(function(){0===l&&n.opt.noMatch(t),o[s-1]===t?n.opt.done(r):e(o[o.indexOf(t)+1])}))}(o[0])}},{key:"markRanges",value:function(e,t){var n=this;this.opt=t;var r=0,a=this.checkRanges(e);a&&a.length?(this.log("Starting to mark with the following ranges: "+JSON.stringify(a)),this.wrapRangeFromIndex(a,(function(e,t,r,a){return n.opt.filter(e,t,r,a)}),(function(e,t){r++,n.opt.each(e,t)}),(function(){n.opt.done(r)}))):this.opt.done(r)}},{key:"unmark",value:function(e){var t=this;this.opt=e;var n=this.opt.element?this.opt.element:"*";n+="[data-markjs]",this.opt.className&&(n+="."+this.opt.className),this.log('Removal selector "'+n+'"'),this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT,(function(e){t.unwrapMatches(e)}),(function(e){var r=a.matches(e,n),i=t.matchesExclude(e);return!r||i?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),this.opt.done)}},{key:"opt",set:function(e){this._opt=r({},{element:"",className:"",exclude:[],iframes:!1,iframesTimeout:5e3,separateWordSearch:!0,diacritics:!0,synonyms:{},accuracy:"partially",acrossElements:!1,caseSensitive:!1,ignoreJoiners:!1,ignoreGroups:0,ignorePunctuation:[],wildcards:"disabled",each:function(){},noMatch:function(){},filter:function(){return!0},done:function(){},debug:!1,log:window.console},e)},get:function(){return this._opt}},{key:"iterator",get:function(){return new a(this.ctx,this.opt.iframes,this.opt.exclude,this.opt.iframesTimeout)}}]),i}();return function(e){var t=this,n=new i(e);return this.mark=function(e,r){return n.mark(e,r),t},this.markRegExp=function(e,r){return n.markRegExp(e,r),t},this.markRanges=function(e,r){return n.markRanges(e,r),t},this.unmark=function(e){return n.unmark(e),t},this}}()},ZvLT:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var r=n("mXGw"),a=n.n(r),i=n("+I+c"),o=n("6CzD"),s=(n("x3Br"),{for:"htmlFor",class:"className",acceptcharset:"acceptCharset",accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",classid:"classID",classname:"className",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",datetime:"dateTime",enctype:"encType",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap",viewbox:"viewBox"});function c(e){return e.replace(/(-|:)(.)/g,(function(e,t,n){return n.toUpperCase()}))}function l(e){var t={};return e.split(";").filter((function(e){return""!==e.trim()})).forEach((function(e){var n,r=e.split(":");if(r.length>1){var a=function(e){return/^-ms-/.test(e)&&(e=e.substr(1)),c(e)}(r[0].trim()),i=(n=r.slice(1).join(":").trim(),/^\d+$/.test(n)?Number(n):n.replace(/'/g,'"'));t[a]=i}})),t}var u=["style"];function h(e,t,n){var r;if(void 0===n&&(n=1),"text"===e.type)return e.value;if("comment"===e.type)return a.a.createElement(a.a.Fragment,null);var i,d,p,f=Object.assign({key:n.toString()},(i=e.tagName,d=e.properties,p=[],void 0===d&&(d={}),Object.keys(d).reduce((function(e,t){if(/^on.*/.test(t))return e;function n(e){return!!p.filter((function(t){return t instanceof RegExp?t.test(e):t===e})).length}var r=t;/^(data|aria)-/.test(t)||!1===n(t)&&(r=c(t)),/^(data|aria)[A-Z]/.test(t)&&!1===n(t)&&(r=t.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()})));var a=s[r]||r;if("style"===a)e[a]=l(d.style);else if("className"===a)e[i.startsWith("mjx-")?"class":"className"]=d.className.join(" ");else{var o=d[t],u=""===o||String(o).toLowerCase()===r.toLowerCase();e[a]=!!u||o}return e}),{}))),m=null!==(r=t[e.tagName])&&void 0!==r?r:e.tagName;if(u.indexOf(e.tagName)>-1){var g=e.children[0];return f.dangerouslySetInnerHTML={__html:g.value.trim()},a.a.createElement(m,f,null)}var v=e.children.map((function(e,n){return h(e,t,n)}));return a.a.createElement.apply(a.a,[m,f].concat(Object(o.a)(v.length?[v]:[])))}function d(e){var t=e.components,n=e.htmlAst;return h(Object.assign({},n,{tagName:"div"}),null!=t?t:{})}var p=a.a.memo(d,(function(){return!0})),f=n("2Lne"),m=n.n(f),g=n("k9bD"),v=n("3hCt"),y=n("R82R"),x=Object(y.a)((function(e){return{root:{"&, &:first-child, &:last-child":{margin:"1.2em 0 !important"},borderLeft:".3rem solid",borderLeftColor:e.palette.details.border,boxShadow:e.shadows[1]},expanded:{"&, &:first-child, &:last-child":{margin:"1.2em 0 !important"}}}})),E=Object(y.a)((function(e){return{container:{width:"calc(100% - "+2*e.spacing(2)+"px)",marginLeft:e.spacing(2),marginRight:e.spacing(2)}}})),k=function(e){var t=e.className,n=void 0===t?"":t,r=e.children,o=(Object(i.a)(e,["className","children"]),x()),s=E(),c=r instanceof Array?r:[r];return a.a.createElement(g.a,{variant:"outlined",classes:o,defaultExpanded:!!n.match("open")},c[0],a.a.createElement(v.a,{style:{padding:"0"}},a.a.createElement("div",{className:s.container},c.slice(1))))},b=n("i79L"),w=n("ZBqy"),N=n("OVKZ"),I=n.n(N),S=n("D5cn"),O=n.n(S),R=n("XHtx"),T=n.n(R),C=Object(y.a)((function(e){return{expanded:{},root:{background:e.palette.details.main,minHeight:"36px","&$expanded":{minHeight:"36px",height:"auto"},height:"auto"},expandIcon:{padding:"2px","&$expanded":{padding:"2px"}},content:{margin:"4px","& p":{margin:"4px"},"&$expanded":{margin:"4px"},fontWeight:"bold"}}})),M=function(e){e.className;var t=e.children,n=C();return a.a.createElement(w.a,Object.assign({classes:n,expandIcon:a.a.createElement(T.a,null),"aria-controls":"expand"},e),a.a.createElement(O.a,{style:{margin:"0px 10px 2px -5px",alignSelf:"center",color:I.a[500]}}),t)},j=n("wBUJ"),A=n("Hrl7"),L=n("JF+v"),P=n("Wbzz"),F=function(e){var t=e.title,n=void 0===t?null:t,r=e.description,i=void 0===r?null:r,o=(e.image,e.article),s=void 0!==o&&o,c=e.author,l=void 0===c?null:c,u=e.tags,h=void 0===u?null:u,d=e.dateModified,p=e.datePublished,f=Object(L.useLocation)().pathname,m=Object(P.useStaticQuery)(W).site.siteMetadata,g=m.defaultTitle,v=m.defaultDescription,y=m.siteUrl,x=(m.defaultAuthor,{title:n||g,description:i||v,image:"https://cdn.jsdelivr.net/npm/oicdn@0.0.2/wordArt.webp",url:""+y+f,author:l&&l.split(","),tags:h}),E={headline:x.title,image:["https://cdn.jsdelivr.net/npm/oicdn@0.0.2/wordArt.webp"],datePublished:p,dateModified:d,mainEntityOfPage:x.url,author:{name:l},publisher:{name:"OI Wiki",logo:{url:"https://cdn.jsdelivr.net/npm/oicdn@0.0.2/wordArt.webp"}},"@context":"https://schema.org","@type":"Article"};return E.author["@type"]="Person",E.publisher["@type"]="Organization",E.publisher.logo["@type"]="ImageObject",a.a.createElement(A.a,null,a.a.createElement("meta",{name:"description",content:x.description}),a.a.createElement("meta",{name:"image",content:x.image}),x.url&&a.a.createElement("meta",{property:"og:url",content:x.url}),s&&a.a.createElement("meta",{property:"og:type",content:"article"}),x.tags&&x.tags.map((function(e){return a.a.createElement("meta",{key:e,property:"og:article:tag",content:e})})),x.author&&x.author.map((function(e){return a.a.createElement("meta",{key:e,property:"og:article:author",content:e})})),x.title&&a.a.createElement("meta",{property:"og:title",content:x.title}),x.description&&a.a.createElement("meta",{property:"og:description",content:x.description}),x.image&&a.a.createElement("meta",{property:"og:image",content:x.image}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),x.title&&a.a.createElement("meta",{name:"twitter:title",content:x.title}),x.description&&a.a.createElement("meta",{name:"twitter:description",content:x.description}),x.image&&a.a.createElement("meta",{name:"twitter:image",content:x.image}),E&&a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(E,null,2)))},W="2862490856",J=n("PDtE");var D=function(e){var t=e.data.mdx,n=e.location,s="/"===t.slug?null:t.frontmatter.title,c=t.frontmatter.description||t.excerpt,l=t.frontmatter.author||null,u=t.frontmatter.tags||null,h=t.frontmatter.noMeta||"false",d=t.frontmatter.noComment||"false",f=t.frontmatter.noEdit||"false",g=t.toc||null,v=t.parent.relativePath||"",y=t.parent.modifiedTime||"",x=t.wordCount.words||0,E=t.parent.birthTime||"",w=t.parent.changeTime||"",N=t.fields.isIndex,I=function(e,t){var r=document.getElementsByTagName("main")[0].getElementsByTagName(e),a=Object(o.a)(r);t?a.forEach((function(e){new m.a(e).mark(n.state.searchKey,{exclude:["span"]})})):a.forEach((function(e){new m.a(e).unmark(n.state.searchKey,{exclude:["span"]})}))};function S(e){var t=e.className,n=e.children,r=Object(i.a)(e,["className","children"]);return a.a.createElement("code",Object.assign({},r,{className:Object(J.a)(t,"inline-code")}),n)}Object(r.useEffect)((function(){var e;null!=n&&null!==(e=n.state)&&void 0!==e&&e.searchKey&&(I("h1",!0),I("h2",!0),I("h3",!0),I("p",!0),setTimeout((function(){I("h1",!1),I("h2",!1),I("h3",!1),I("p",!1)}),5e3))}),[]);var O={details:k,summary:M,a:function(e){return a.a.createElement(j.a,Object.assign({},e,{pathname:n.pathname,isIndex:N,tooltip:!0}))},inlineCode:S,inlinecode:S},R=0===x||(null==u?void 0:u.findIndex((function(e){return"WIP"===e})))>=0;return a.a.createElement(b.a,{location:n,authors:l,title:s,description:c,tags:u,toc:g,relativePath:v,modifiedTime:y,noMeta:h,noComment:d,noEdit:f,isWIP:R},a.a.createElement(F,{title:s,description:c,author:l||"OI Wiki",tags:u,dateModified:w,datePublished:E,article:!0}),a.a.createElement(p,{components:O,htmlAst:t.htmlAst}))};function _(e){var t=e.data,n=e.location;return a.a.createElement(D,{data:t,location:n})}}}]);
//# sourceMappingURL=component---gatsby-theme-oi-wiki-src-templates-doc-js-0dbf19d7f2127939d384.js.map