webpackJsonp([0xb1abc741118f],{341:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),f=r(l),s=n(183),c=(0,s.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?c():(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,s.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return f.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}(f.default.Component)},342:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),f=r(l),s=36,c=t.CommentEmbed=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"getSrc",value:function(){var e=Number(this.props.commentId).toString(s),t=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/"+e+"?p="+t+"&m="+n}},{key:"render",value:function(){return f.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}(f.default.Component);c.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},343:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),f=r(l),s=n(183);t.DiscussionEmbed=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,s.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return f.default.createElement("div",{id:"disqus_thread"})}}]),t}(f.default.Component)},344:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var r=n(341),o=n(342),u=n(343);t.CommentCount=r.CommentCount,t.CommentEmbed=o.CommentEmbed,t.DiscussionEmbed=u.DiscussionEmbed;var i={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:u.DiscussionEmbed};t.default=i},183:function(e,t){"use strict";function n(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r}function r(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)}function o(e,t,n){var r=void 0;return function(){var o=this,u=arguments,i=function(){r=null,n||e.apply(o,u)},a=n&&!r;window.clearTimeout(r),r=setTimeout(i,t),a&&e.apply(o,u)}}Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=n,t.removeScript=r,t.debounce=o},26:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e){if(e.constructor===Date)return{date:e,time:e.getTime()};if("number"==typeof e)return{time:e};throw new Error("Unsupported relative time formatter input: "+("undefined"==typeof e?"undefined":a(e))+", "+e)}function i(e,t){var n=Object.keys(e);return t?t.filter(function(e){return n.indexOf(e)>=0}):n}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(63),s=r(f),c=n(18),d=r(c),p=n(65),m=n(27),h=r(m),y=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];o(this,e),"string"==typeof t&&(t=[t]),this.locale=(0,d.default)(t.concat(e.default_locale),e.locales)}return l(e,[{key:"format",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p.defaultStyle;if("string"==typeof t)switch(t){case"twitter":t=p.twitterStyle;break;case"time":t=p.timeStyle;break;default:t=p.defaultStyle}var n=u(e),r=n.date,o=n.time,a=this.get_locale_data(t.flavour),l=a.flavour,f=a.locale_data,c=t.now||Date.now(),d=(c-o)/1e3;if(t.custom){var m=t.custom({now:c,date:r,time:o,elapsed:d,locale:this.locale});if(void 0!==m)return m}var y=i(f,t.units);if(0===y.length)return console.error('Units "'+y.join(", ")+'" were not found in locale data for "'+this.locale+'".'),"";var v=(0,s.default)(Math.abs(d),c,y,t.gradation);if(!v)return"";if(v.format)return v.format(r||o,this.locale);var b=v.unit,g=v.factor,w=v.granularity,_=Math.abs(d)/g;return w&&(_=Math.round(_/w)*w),new h.default(this.locale,{style:l}).format(-1*Math.sign(d)*Math.round(_),b)}},{key:"get_locale_data",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=e.locales[this.locale];"string"==typeof t&&(t=[t]),t=t.concat("long");for(var r=t,o=Array.isArray(r),u=0,r=o?r:r[Symbol.iterator]();;){var i;if(o){if(u>=r.length)break;i=r[u++]}else{if(u=r.next(),u.done)break;i=u.value}var a=i;if(n[a])return{flavour:a,locale_data:n[a]}}}}]),e}();y.default_locale="en",y.locales={},t.default=y,y.setDefaultLocale=function(e){y.default_locale=e},y.locale=function(e){if(!e)throw new Error("[javascript-time-ago] Invalid locale data passed.");y.locales[e.locale]=e}},27:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e){if(a()[e])return e;for(var t=e.split("-");e.length>1;)if(t.pop(),e=t.join("-"),a()[e])return e}function i(e){c.default.locale(e)}function a(){return c.default.locales}function l(){return c.default.default_locale}Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.loadLocale=i;var s=n(26),c=r(s),d=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,e);var r=n.style;this.style=r||"long",t&&(this.locale=e.supportedLocalesOf(t)[0]),this.locale=this.locale?u(this.locale):l()}return f(e,[{key:"format",value:function(e,t){return this.getRule(e,t).replace("{0}",Math.abs(e))}},{key:"formatToParts",value:function(e,t){var n=this.getRule(e,t),r=n.indexOf("{0}"),o=[];return r>0&&o.push({type:"literal",value:n.slice(0,r)}),o.push({type:t,value:String(Math.abs(e))}),r+"{0}".length<n.length-1&&o.push({type:"literal",value:n.slice(r+"{0}".length)}),o}},{key:"getRule",value:function(e,t){if(["now","second","minute","hour","day","week","month","quarter","year"].indexOf(t)<0)throw new RangeError("Unknown time unit: "+t+".");var n=a()[this.locale][this.style][t];if("string"==typeof n)return n;var r=n[e<=0?"past":"future"]||n;if("string"==typeof r)return r;var o=a()[this.locale].quantify,u=o&&o(Math.abs(e));return u=u||"other",r[u]||r.other}},{key:"resolvedOptions",value:function(){return{locale:this.locale}}}]),e}();t.default=d,d.supportedLocalesOf=function(e,t){return"string"==typeof e&&(e=[e]),e.filter(u)}},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(17);t.default=[{factor:1,unit:"now"},{threshold:.5,factor:1,unit:"second"},{threshold:59.5,factor:60,unit:"minute"},{threshold:3570,factor:3600,unit:"hour"},{threshold:84600,factor:r.day,unit:"day"},{threshold:6.5*r.day,factor:7*r.day,unit:"week"},{threshold:24.5*r.day,factor:r.month,unit:"month"},{threshold:11.5*r.month,factor:r.year,unit:"year"}]},62:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(17);t.default=[{factor:1,unit:"now"},{threshold:1,threshold_for_now:45,factor:1,unit:"second"},{threshold:45,factor:60,unit:"minute"},{threshold:150,factor:60,granularity:5,unit:"minute"},{threshold:1350,factor:1800,unit:"half-hour"},{threshold:2550,threshold_for_minute:3150,factor:3600,unit:"hour"},{threshold:20.5/24*r.day,factor:r.day,unit:"day"},{threshold:5.5*r.day,factor:7*r.day,unit:"week"},{threshold:24.5*r.day,factor:r.month,unit:"month"},{threshold:10.5*r.month,factor:r.year,unit:"year"}]},17:function(e,t){"use strict";function n(e,t){for(var n=e,r=Array.isArray(n),o=0,n=r?n:n[Symbol.iterator]();;){var u;if(r){if(o>=n.length)break;u=n[o++]}else{if(o=n.next(),o.done)break;u=o.value}var i=u;if(i.unit===t)return i}}function r(e){return e instanceof Date?e:new Date(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getStep=n,t.getDate=r;var o=t.minute=60,u=t.hour=60*o,i=t.day=24*u;t.month=30.44*i,t.year=365.2425*i},10:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(61);Object.defineProperty(t,"canonical",{enumerable:!0,get:function(){return r(o).default}});var u=n(62);Object.defineProperty(t,"convenient",{enumerable:!0,get:function(){return r(u).default}});var i=n(17);Object.defineProperty(t,"minute",{enumerable:!0,get:function(){return i.minute}}),Object.defineProperty(t,"hour",{enumerable:!0,get:function(){return i.hour}}),Object.defineProperty(t,"day",{enumerable:!0,get:function(){return i.day}}),Object.defineProperty(t,"month",{enumerable:!0,get:function(){return i.month}}),Object.defineProperty(t,"year",{enumerable:!0,get:function(){return i.year}}),Object.defineProperty(t,"getStep",{enumerable:!0,get:function(){return i.getStep}}),Object.defineProperty(t,"getDate",{enumerable:!0,get:function(){return i.getDate}})},63:function(e,t,n){"use strict";function r(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:l.convenient;if(r=i(r,n),0!==r.length){var o=u(e,t,r),a=r[o];if(o!==-1){if(a.granularity){var f=Math.round(e/a.factor/a.granularity)*a.granularity;if(0===f&&o>0)return r[o-1]}return a}}}function o(e,t,n){var r=void 0;if(e&&(e.id||e.unit)&&(r=t["threshold_for_"+(e.id||e.unit)]),void 0===r&&(r=t.threshold),"function"==typeof r&&(r=r(n)),e&&"number"!=typeof r){var o="undefined"==typeof r?"undefined":a(r);throw new Error('Each step of a gradation must have a threshold defined except for the first one. Got "'+r+'", '+o+". Step: "+JSON.stringify(t))}return r}function u(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return e<o(n[r-1],n[r],t)?r-1:r===n.length-1?r:u(e,t,n,r+1)}function i(e,t){return e.filter(function(e){var n=e.unit;return!n||t.indexOf(n)>=0})}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=r;var l=n(10)},18:function(e,t){"use strict";function n(e,t){for(var n=e,r=Array.isArray(n),o=0,n=r?n:n[Symbol.iterator]();;){var u;if(r){if(o>=n.length)break;u=n[o++]}else{if(o=n.next(),o.done)break;u=o.value}var i=u;if(t[i])return i;for(var a=i.split("-");a.length>1;)if(a.pop(),i=a.join("-"),t[i])return i}throw new Error("No locale data has been registered for any of the locales: "+e.join(", "))}function r(e){if(o())return Intl.DateTimeFormat.supportedLocalesOf(e)[0]}function o(){var e="object"===("undefined"==typeof Intl?"undefined":u(Intl));return e&&"function"==typeof Intl.DateTimeFormat}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=n,t.intlDateTimeFormatSupportedLocale=r,t.intlDateTimeFormatSupported=o},64:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(10);t.default={gradation:r.convenient,flavour:["long_convenient","long"],units:["now","minute","hour","day","week","month","year"]}},65:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(66);Object.defineProperty(t,"timeStyle",{enumerable:!0,get:function(){return r(o).default}});var u=n(67);Object.defineProperty(t,"twitterStyle",{enumerable:!0,get:function(){return r(u).default}});var i=n(64);Object.defineProperty(t,"defaultStyle",{enumerable:!0,get:function(){return r(i).default}})},66:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(10);t.default={gradation:r.convenient,flavour:"long_time",units:["now","minute","hour","day","week","month","year"]}},67:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(10),u=n(18),i={};t.default={gradation:[r({},(0,o.getStep)(o.canonical,"minute"),{threshold:45}),(0,o.getStep)(o.canonical,"hour"),{threshold:o.day-.5*o.hour,format:function(e,t){if((0,u.intlDateTimeFormatSupported)())return i[t]||(i[t]={}),i[t].this_year||(i[t].this_year=new Intl.DateTimeFormat(t,{month:"short",day:"numeric"})),i[t].this_year.format((0,o.getDate)(e))}},{threshold:function(e){var t=new Date(new Date(e).getFullYear()+1,0);return(t.getTime()-e)/1e3},format:function(e,t){if((0,u.intlDateTimeFormatSupported)())return i[t]||(i[t]={}),i[t].other||(i[t].other=new Intl.DateTimeFormat(t,{year:"numeric",month:"short",day:"numeric"})),i[t].other.format((0,o.getDate)(e))}}],flavour:["tiny","short_time","narrow","short"]}},68:function(e,t,n){"use strict";t=e.exports=n(26).default,t.default=t;var r=n(18);t.intlDateTimeFormatSupported=r.intlDateTimeFormatSupported,t.intlDateTimeFormatSupportedLocale=r.intlDateTimeFormatSupportedLocale,t.RelativeTimeFormat=n(27).default},69:function(e,t,n){e.exports={locale:"zh-Hant",long:n(70),short:n(72),narrow:n(71)}},70:function(e,t){e.exports={year:{previous:"去年",current:"今年",next:"明年",past:"{0} 年前",future:"{0} 年後"},quarter:{previous:"上一季",current:"這一季",next:"下一季",past:"{0} 季前",future:"{0} 季後"},month:{previous:"上個月",current:"本月",next:"下個月",past:"{0} 個月前",future:"{0} 個月後"},week:{previous:"上週",current:"本週",next:"下週",past:"{0} 週前",future:"{0} 週後"},day:{previous:"昨天",current:"今天",next:"明天",past:"{0} 天前",future:"{0} 天後"},hour:{current:"這一小時",past:"{0} 小時前",future:"{0} 小時後"},minute:{current:"這一分鐘",past:"{0} 分鐘前",future:"{0} 分鐘後"},second:{current:"現在",past:"{0} 秒前",future:"{0} 秒後"},now:"現在"}},71:function(e,t){e.exports={year:{previous:"去年",current:"今年",next:"明年",past:"{0} 年前",future:"{0} 年後"},quarter:{previous:"上一季",current:"這一季",next:"下一季",past:"{0} 季前",future:"{0} 季後"},month:{previous:"上個月",current:"本月",next:"下個月",past:"{0} 個月前",future:"{0} 個月後"},week:{previous:"上週",current:"本週",next:"下週",past:"{0} 週前",future:"{0} 週後"},day:{previous:"昨天",current:"今天",next:"明天",past:"{0} 天前",future:"{0} 天後"},hour:{current:"這一小時",past:"{0} 小時前",future:"{0} 小時後"},minute:{current:"這一分鐘",past:"{0} 分鐘前",future:"{0} 分鐘後"},second:{current:"現在",past:"{0} 秒前",future:"{0} 秒後"},now:"現在"}},72:function(e,t){e.exports={year:{previous:"去年",current:"今年",next:"明年",past:"{0} 年前",future:"{0} 年後"},quarter:{previous:"上一季",current:"這一季",next:"下一季",past:"{0} 季前",future:"{0} 季後"},month:{previous:"上個月",current:"本月",next:"下個月",past:"{0} 個月前",future:"{0} 個月後"},week:{previous:"上週",current:"本週",next:"下週",past:"{0} 週前",future:"{0} 週後"},day:{previous:"昨天",current:"今天",next:"明天",past:"{0} 天前",future:"{0} 天後"},hour:{current:"這一小時",past:"{0} 小時前",future:"{0} 小時後"},minute:{current:"這一分鐘",past:"{0} 分鐘前",future:"{0} 分鐘後"},second:{current:"現在",past:"{0} 秒前",future:"{0} 秒後"},now:"現在"}},240:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),u=r(o),i=n(11),a=r(i),l=n(344),f=n(49),s=r(f),c=a.default.div.withConfig({displayName:"Disqus__CommentWrapper"})(["margin:40px 0 20px;"]),d=function(e){var t=e.shortname,n=e.siteUrl,r=e.slug,o=e.title;return u.default.createElement(s.default,null,u.default.createElement(c,null,u.default.createElement(l.DiscussionEmbed,{shortname:t,config:{url:""+n+r,identifier:r,title:o}})))};t.default=d,e.exports=t.default},247:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),u=r(o),i=n(11),a=r(i),l=n(50),f=r(l),s=a.default.aside.withConfig({displayName:"PostTitleSection__Wrapper"})(["margin-top:35px;"]),c=a.default.h1.withConfig({displayName:"PostTitleSection__Title"})(["color:rgb(0,0,0);font-weight:400;font-size:28px;max-width:650px;text-align:center;padding-left:20px;padding-right:20px;line-height:42px;margin:0px auto;"]),d=a.default.div.withConfig({displayName:"PostTitleSection__Date"})(["color:rgb(153,153,153);font-size:12px;text-align:center;margin:20px 0px 40px;"]);t.default=function(e){var t=e.title,n=e.date;return u.default.createElement(s,null,u.default.createElement(c,null,t),u.default.createElement(d,null,(0,f.default)(n)))},e.exports=t.default},257:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var o=n(1),u=r(o),i=n(77),a=r(i),l=n(247),f=r(l),s=n(79),c=n(49),d=r(c),p=n(240),m=r(p),h=function(e){var t=e.data,n=t.site.siteMetadata,r=n.title,o=n.disqusShortname,i=n.siteUrl,l=t.markdownRemark,c=l.frontmatter,p=l.fields,h=l.html;return u.default.createElement("div",null,u.default.createElement(a.default,{title:c.title+" | "+r}),u.default.createElement(f.default,{title:c.title,date:c.date}),u.default.createElement(s.Separaotr,null),u.default.createElement(d.default,null,u.default.createElement(s.ArticleContent,{dangerouslySetInnerHTML:{__html:h}})),u.default.createElement(m.default,{shortname:o,siteUrl:i,slug:p.slug,title:c.title}))};t.default=h;t.pageQuery="** extracted graphql fragment **"},50:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(68),u=r(o),i=n(69),a=r(i);u.default.locale(a.default);var l=new u.default("zh-Hant");t.default=function(e){var t=new Date(e),n=t.getFullYear(),r=t.getMonth()+1,o=t.getDate(),u=l.format(t);return n+" 年 "+r+" 月 "+o+" 日（"+u+"）"},e.exports=t.default}});
//# sourceMappingURL=component---src-templates-post-js-6cbc0a7eb6b27945369a.js.map