webpackJsonp([0x67ef26645b2a,60335399758886],{100:function(e,t){e.exports={data:{site:{siteMetadata:{title:"JIGSAWYE",description:"個人筆記及教學空間，包含了 PHP / Laravel、JavaScript / React.js、DevOps 等等⋯⋯，及一些雜七雜八的記錄。",siteUrl:"https://jigsawye.com"}}},layoutContext:{}}},161:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),i=r(a),u=n(182),l=r(u),c=n(100),s=r(c);t.default=function(e){return i.default.createElement(l.default,o({},e,s.default))},e.exports=t.default},16:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function a(e,t,n){var a,s;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(l(e))return!!l(t)&&(e=i.call(e),t=i.call(t),c(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var f=u(e),d=u(t)}catch(e){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),a=f.length-1;a>=0;a--)if(f[a]!=d[a])return!1;for(a=f.length-1;a>=0;a--)if(s=f[a],!c(e[s],t[s],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,u=n(18),l=n(17),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:a(e,t,n))}},17:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},18:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},19:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return a}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},20:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=r(s),d=n(3),p=r(d),T=n(22),E=r(T),m=n(16),h=r(m),y=n(21),b=n(9),g=function(e){var t,n;return n=t=function(t){function n(){return a(this,n),i(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,h.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case b.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return l({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[l({},o,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case b.TAG_NAMES.TITLE:return l({},o,(t={},t[r.type]=i,t.titleAttributes=l({},a),t));case b.TAG_NAMES.BODY:return l({},o,{bodyAttributes:l({},a)});case b.TAG_NAMES.HTML:return l({},o,{htmlAttributes:l({},a)})}return l({},o,(n={},n[r.type]=l({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=l({},t);return Object.keys(e).forEach(function(t){var r;n=l({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,i=a.children,u=o(a,["children"]),l=(0,y.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,i),e.type){case b.TAG_NAMES.LINK:case b.TAG_NAMES.META:case b.TAG_NAMES.NOSCRIPT:case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),a=l({},r);return n&&(a=this.mapChildrenToProps(n,a)),f.default.createElement(e,a)},c(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},A=function(){return null},_=(0,E.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(A),S=g(_);S.renderStatic=S.rewind,t.Helmet=S,t.default=S},9:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},21:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),u=r(i),l=n(36),c=r(l),s=n(9),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=h(e,s.TAG_NAMES.TITLE),n=h(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=h(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return h(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},E=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],i=a.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},m=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var u=a[i],l=u.toLowerCase();t.indexOf(l)===-1||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===s.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),t.indexOf(u)===-1||u!==s.TAG_PROPERTIES.INNER_HTML&&u!==s.TAG_PROPERTIES.CSS_TEXT&&u!==s.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),i=0;i<a.length;i++){var u=a[i],l=(0,c.default)({},r[u],o[u]);r[u]=l}return e},[]).reverse()},h=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:E([s.TAG_PROPERTIES.HREF],e),bodyAttributes:T(s.ATTRIBUTE_NAMES.BODY,e),defer:h(e,s.HELMET_PROPS.DEFER),encode:h(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(s.ATTRIBUTE_NAMES.HTML,e),linkTags:m(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:m(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:m(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:T(s.ATTRIBUTE_NAMES.TITLE,e)}},b=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){b(t)},0)}}(),g=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||b:e.requestAnimationFrame||b,_="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||g:e.cancelAnimationFrame||g,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,M=function(e){v&&_(v),e.defer?v=A(function(){w(e,function(){v=null})}):(w(e),v=null)},w=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;R(s.TAG_NAMES.BODY,r),R(s.TAG_NAMES.HTML,o),O(d,p);var T={baseTag:C(s.TAG_NAMES.BASE,n),linkTags:C(s.TAG_NAMES.LINK,a),metaTags:C(s.TAG_NAMES.META,i),noscriptTags:C(s.TAG_NAMES.NOSCRIPT,u),scriptTags:C(s.TAG_NAMES.SCRIPT,c),styleTags:C(s.TAG_NAMES.STYLE,f)},E={},m={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(m[e]=T[e].oldTags)}),t&&t(),l(e,E,m)},P=function(e){return Array.isArray(e)?e.join(""):e},O=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=P(e)),R(s.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),u=0;u<i.length;u++){var l=i[u],c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),o.indexOf(l)===-1&&o.push(l);var f=a.indexOf(l);f!==-1&&a.splice(f,1)}for(var d=a.length-1;d>=0;d--)n.removeAttribute(a[d]);o.length===a.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,i.join(","))}},C=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return i=t,n.isEqualNode(e)})?o.splice(i,1):a.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},N=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},k=function(e,t,n,r){var o=N(n),a=P(t);return o?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+f(a,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+f(a,r)+"</"+e+">"},x=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),a=r.innerHTML||r.cssText||"",i=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")},"")},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},G=function(e,t,n){var r,o=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),a=I(n,o);return[u.default.createElement(s.TAG_NAMES.TITLE,a,t)]},H=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},j=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return G(e,t.title,t.titleAttributes,n)},toString:function(){return k(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return I(t)},toString:function(){return N(t)}};default:return{toComponent:function(){return H(e,t)},toString:function(){return x(e,t,n)}}}},U=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,l=e.scriptTags,c=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:j(s.TAG_NAMES.BASE,t,r),bodyAttributes:j(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:j(s.ATTRIBUTE_NAMES.HTML,o,r),link:j(s.TAG_NAMES.LINK,a,r),meta:j(s.TAG_NAMES.META,i,r),noscript:j(s.TAG_NAMES.NOSCRIPT,u,r),script:j(s.TAG_NAMES.SCRIPT,l,r),style:j(s.TAG_NAMES.STYLE,c,r),title:j(s.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=L,t.handleClientStateChange=M,t.mapStateOnServer=U,t.reducePropsToState=y,t.requestAnimationFrame=A,t.warn=S}).call(t,function(){return this}())},22:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){function d(){T=e(p.map(function(e){return e.props})),E.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof u)throw new Error("Expected WrappedComponent to be a React component.");var p=[],T=void 0,E=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!f(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),d()},t.prototype.componentDidUpdate=function(){d()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),d()},t.prototype.render=function(){return c.createElement(u,this.props)},t}(l.Component);return E.displayName="SideEffect("+r(u)+")",E.canUseDOM=s.canUseDOM,E}}var l=n(1),c=r(l),s=r(n(19)),f=r(n(23));e.exports=u},23:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!u(c))return!1;var s=e[c],f=t[c];if(o=n?n.call(r,s,f,c):void 0,o===!1||void 0===o&&s!==f)return!1}return!0}},156:function(e,t,n){e.exports=n.p+"static/favicon.4877df40.png"},170:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(4),u=r(i),l=u.default.div.withConfig({displayName:"Copyright__CopyrightWrapper"})(["display:flex;vertical-align:top;justify-content:center;padding:40px 0;margin:auto;p{color:#999999;text-align:center;font-size:12px;}a{color:#999999;text-decoration:none;font-size:12px;transition:all 0.2s ease;:hover{color:#000;}}"]),c=function(){return a.default.createElement(l,null,a.default.createElement("p",null,"Copyright © ",(new Date).getFullYear()," ",a.default.createElement("a",{href:"https://jigsawye.com"},"Evan Ye"),", powered by"," ",a.default.createElement("a",{href:"https://www.gatsbyjs.org/",rel:"noopener noreferrer",target:"_blank"},"Gatsby"),". All rights reserved."))};t.default=c,e.exports=t.default},171:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(4),u=r(i),l=n(170),c=r(l),s=u.default.footer.withConfig({displayName:"Footer__FooterWrapper"})(["background:#fafafa;border-top:1px solid #eaeaea;"]),f=function(){return a.default.createElement(s,null,a.default.createElement(c.default,null))};t.default=f,e.exports=t.default},172:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(94),u=r(i),l=n(4),c=r(l),s=n(156),f=r(s),d=c.default.aside.withConfig({displayName:"Logo__LogoWrapper"})(["padding:30px 0;display:flex;justify-content:space-between;align-items:center;"]),p=(0,c.default)(u.default).withConfig({displayName:"Logo__LogoLink"})(["display:block;width:28px;height:24px;position:relative;"]),T=function(){return a.default.createElement(d,null,a.default.createElement(p,{to:"/"},a.default.createElement("img",{src:f.default,height:"28px",width:"28px",alt:"Logo"})))};t.default=T,e.exports=t.default},173:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(94),u=r(i),l=n(4),c=r(l),s=n(175),f=r(s),d=c.default.div.withConfig({displayName:"Nav__NavWrapper"})(["display:flex;align-items:center;margin:2px 0 0 auto;a{border:0;font-size:12px;padding:10px;color:#999;text-transform:uppercase;text-decoration:none;transition:color 0.2s ease;&.active{color:#000;}:hover{background:none;color:#000;}}"]),p=function(e){var t=e.to,n=e.children;return t.startsWith("http")?a.default.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},n):a.default.createElement(u.default,{to:t,activeClassName:"active",exact:!0},n)},T=function(){return a.default.createElement(d,null,f.default.map(function(e){var t=e.title,n=e.path;return a.default.createElement(p,{to:n,key:t},t)}),a.default.createElement("a",{href:"/rss.xml",target:"_blank",rel:"noopener noreferrer"},"RSS"))};t.default=T,e.exports=t.default},174:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(4),u=r(i),l=n(39),c=n(172),s=r(c),f=n(173),d=r(f),p=(0,u.default)(l.Container).withConfig({displayName:"Header__HeaderWrapper"})(["margin:auto;position:relative;display:flex;flex-direction:row;"]),T=function(){return a.default.createElement(p,null,a.default.createElement(s.default,null),a.default.createElement(d.default,null))};t.default=T,e.exports=t.default},175:function(e,t){"use strict";t.__esModule=!0,t.default=[{title:"HOME",path:"/"},{title:"ARCHIVE",path:"/archives"},{title:"ABOUT",path:"/about"}],e.exports=t.default},38:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(4),u=r(i),l=u.default.aside.withConfig({displayName:"TitleSection__Wrapper"})(["padding:30px 0 50px;border-bottom:1px solid rgb(234,234,234);"]),c=u.default.h1.withConfig({displayName:"TitleSection__Title"})(["color:rgb(0,0,0);font-weight:400;font-size:32px;text-align:center;"]);t.default=function(e){var t=e.children;return a.default.createElement(l,null,a.default.createElement(c,null,t))},e.exports=t.default},39:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(24);Object.defineProperty(t,"Container",{enumerable:!0,get:function(){return r(o).default}});var a=n(38);Object.defineProperty(t,"TitleSection",{enumerable:!0,get:function(){return r(a).default}})},177:function(e,t,n){"use strict";t.__esModule=!0;var r=n(4);t.default=(0,r.css)(["@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');body{font-family:'SF Pro TC','SF Pro Text','PingFang TC','Helvetica Neue','Helvetica','Arial','Microsoft JhengHei',wf_SegoeUI,'Segoe UI',Segoe,'Segoe WP',Tahoma,Verdana,Ubuntu,'Bitstream Vera Sans','DejaVu Sans',Tahoma,微軟正黑體,'LiHei Pro','WenQuanYi Micro Hei','Droid Sans Fallback','AR PL UMing TW',Roboto,'Helvetica Neue','Hiragino Maru Gothic ProN',メイリオ,'ヒラギノ丸ゴ ProN W4',Meiryo,'Droid Sans',sans-serif;text-rendering:optimizeLegibility;}::selection{background-color:#79ffe1;color:#000;}code,pre{font-family:Menlo,Monaco,Consolas,'Courier New','Roboto Mono',monospace;}"]),e.exports=t.default},178:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return e.raw=t,e}t.__esModule=!0;var a=o(["\n  ",";\n  ",";\n  ",";\n"],["\n  ",";\n  ",";\n  ",";\n"]),i=n(4),u=n(179),l=r(u),c=n(177),s=r(c),f=n(180),d=r(f);t.default=function(){return(0,i.injectGlobal)(a,l.default,d.default,s.default)},e.exports=t.default},179:function(e,t,n){"use strict";t.__esModule=!0;var r=n(4);t.default=(0,r.css)(["/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */ html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;}button::-moz-focus-inner,[type='button']::-moz-focus-inner,[type='reset']::-moz-focus-inner,[type='submit']::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type='button']:-moz-focusring,[type='reset']:-moz-focusring,[type='submit']:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type='checkbox'],[type='radio']{box-sizing:border-box;padding:0;}[type='number']::-webkit-inner-spin-button,[type='number']::-webkit-outer-spin-button{height:auto;}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}[type='search']::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}"]),e.exports=t.default},180:function(e,t,n){"use strict";t.__esModule=!0;var r=n(4),o={blue:"#005cc5",green:"#22863a",orange:"#d73a49",purple:"#6f42c1",black:"#24292e",darkBlue:"#032f62",gray:"#6a737d"},a={char:o.green,comment:o.gray,keyword:o.orange,lineHighlight:"#ddd",primitive:o.blue,string:o.darkBlue,variable:o.blue,boolean:o.blue,punctuation:o.black,tag:o.oragne,function:o.blue,className:o.purple,method:o.blue,operator:o.orange};t.default=(0,r.css)([".gatsby-highlight{font-size:13px;background-color:#fff;color:#000;border-width:1px;border-style:solid;border-color:rgb(234,234,234);margin:40px 0px;padding:20px;overflow:auto;}.gatsby-highlight code[class*='language-'],.gatsby-highlight pre[class*='language-'],.gatsby-highlight pre.prism-code{background-color:transparent;margin:0;padding:0;overflow:initial;float:left;min-width:100%;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;tab-size:4;hyphens:none;}.gatsby-highlight + .gatsby-highlight{margintop:20;}.gatsby-highlight-code-line{backgroundcolor:",";display:block;margin:-0.125rem calc(-1rem - 15px);padding:0.125rem calc(1rem + 15px);}.token.attr-name{color:",";}.token.comment,.token.block-comment,.token.prolog,.token.doctype,.token.cdata{color:",";}.token.property,.token.number,.token.function-name,.token.constant,.token.symbol,.token.deleted{color:",";}.token.boolean{color:",";}.token.tag{color:",";}.token.string{color:",";}.token.punctuation{color:",";}.token.selector,.token.char,.token.builtin,.token.inserted{color:",";}.token.function{color:",";}.token.operator,.token.entity,.token.url,.token.variable{color:",";}.token.attr-value{color:",";}.token.keyword{color:",";}.token.atrule,.token.class-name{color:",";}.token.important{fontweight:400;}.token.bold{fontweight:700;}.token.italic{fontstyle:italic;}.token.entity{cursor:help;}.namespace{opacity:0.7;}"],a.lineHighlight,a.keyword,a.comment,a.primitive,a.boolean,a.tag,a.string,a.punctuation,a.char,a.function,a.variable,a.string,a.keyword,a.className),e.exports=t.default},181:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(20),u=r(i),l=n(156),c=r(l),s=function(e){var t=e.siteMetadata;return a.default.createElement(u.default,null,a.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.default.createElement("meta",{name:"description",content:t.description}),a.default.createElement("title",null,t.title),a.default.createElement("meta",{property:"og:title",content:t.title}),a.default.createElement("meta",{property:"og:url",content:t.siteUrl}),a.default.createElement("meta",{property:"og:site_name",content:t.title}),a.default.createElement("meta",{property:"og:image",content:"https://avatars1.githubusercontent.com/u/8567270?v=3&s=300"}),a.default.createElement("meta",{name:"twitter:card",content:"summary"}),a.default.createElement("meta",{name:"twitter:title",content:t.title}),a.default.createElement("meta",{name:"twitter:description",content:t.description}),a.default.createElement("link",{rel:"icon",href:c.default}),a.default.createElement("link",{rel:"search",type:"application/opensearchdescription+xml",href:"/rss.xml",title:"JIGSAWYE"}))};t.default=s,e.exports=t.default},182:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var o=n(1),a=r(o),i=n(178),u=r(i),l=n(174),c=r(l),s=n(171),f=r(s),d=n(181),p=r(d);(0,u.default)();var T=function(e){var t=e.children,n=e.data;return a.default.createElement(o.Fragment,null,a.default.createElement(p.default,{siteMetadata:n.site.siteMetadata}),a.default.createElement(c.default,null),t(),a.default.createElement(f.default,null))};t.default=T;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-layouts-index-js-df118401f86114d944d5.js.map