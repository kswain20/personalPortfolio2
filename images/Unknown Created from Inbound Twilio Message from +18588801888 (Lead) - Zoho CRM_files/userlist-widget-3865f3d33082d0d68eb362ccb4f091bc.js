"use strict"
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}define("userlist-widget/adapters/-json-api",["exports","@ember-data/adapter/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("userlist-widget/adapters/application",["exports","@ember-data/adapter/json-api","userlist-widget/config/environment"],(function(e,t,r){var n,o,i,u
function a(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t)
if(n){var o=Object.getOwnPropertyDescriptor(n,t)
return o.get?o.get.call(r):o.value}})(e,t,r||e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=d(e)
if(t){var o=d(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return b(this,r)}}function b(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var m,h,g,w,_,O,j=(n=Ember.inject.service,u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)})(b,e)
var t,n,o,u=p(b)
function b(){var e
c(this,b)
for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o]
return a(y(e=u.call.apply(u,[this].concat(n))),"session",i,y(e)),v(y(e),"host",r.default.APP.host),e}return t=b,(n=[{key:"headers",get:function(){var e=this.session.token
return{Authorization:"Bearer ".concat(e),Accept:"application/vnd.api+json"}}},{key:"buildURL",value:function(e,t,r,n,o){switch(n){case"memberAction":return this.urlForMemberAction(t,e,r,o)
default:return f(d(b.prototype),"buildURL",this).call(this,e,t)}}},{key:"urlForMemberAction",value:function(e,t,r,n){return this._buildURL(t,e)+"/".concat(n)}},{key:"memberAction",value:function(e,t,r,n,o){var i=this.buildURL(t.modelName,r,n,"memberAction",o)
return this.ajax(i,"PUT")}}])&&l(t.prototype,n),o&&l(t,o),b}(t.default),m=(o=u).prototype,h="session",g=[n],w={configurable:!0,enumerable:!0,writable:!0,initializer:null},O={},Object.keys(w).forEach((function(e){O[e]=w[e]})),O.enumerable=!!O.enumerable,O.configurable=!!O.configurable,("value"in O||O.initializer)&&(O.writable=!0),O=g.slice().reverse().reduce((function(e,t){return t(m,h,e)||e}),O),_&&void 0!==O.initializer&&(O.value=O.initializer?O.initializer.call(_):void 0,O.initializer=void 0),void 0===O.initializer&&(Object.defineProperty(m,h,O),O=null),i=O,o)
e.default=j})),define("userlist-widget/adapters/configuration",["exports","userlist-widget/adapters/application"],(function(e,t){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=a(e)
if(t){var o=a(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return u(this,r)}}function u(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(l,e)
var t,u,a,c=i(l)
function l(){return r(this,l),c.apply(this,arguments)}return t=l,(u=[{key:"pathForType",value:function(){return"config"}}])&&n(t.prototype,u),a&&n(t,a),l}(t.default)
e.default=c})),define("userlist-widget/app",["exports","ember-resolver","ember-load-initializers","userlist-widget/config/environment"],(function(e,t,r,n){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=l(e)
if(t){var o=l(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return a(this,r)}}function a(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?c(e):t}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var s=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)})(a,Ember.Application)
var r=u(a)
function a(){var e
o(this,a)
for(var i=arguments.length,u=new Array(i),l=0;l<i;l++)u[l]=arguments[l]
return f(c(e=r.call.apply(r,[this].concat(u))),"modulePrefix",n.default.modulePrefix),f(c(e),"podModulePrefix",n.default.podModulePrefix),f(c(e),"Resolver",t.default),e}return a}()
e.default=s,(0,r.default)(s,n.default.modulePrefix)})),define("userlist-widget/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("userlist-widget/components/message",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"6H7uWEWk",block:'{"symbols":["@message","@onClose"],"statements":[[10,"div"],[14,0,"message"],[12],[2,"\\n  "],[11,"div"],[24,0,"close"],[4,[38,1],["click",[30,[36,0],[[32,2],[32,1]],null]],null],[12],[2,"\\n    "],[10,"svg"],[14,"width","15"],[14,"height","15"],[14,"viewBox","0 0 15 15"],[14,"fill","none"],[14,"xmlns","http://www.w3.org/2000/svg","http://www.w3.org/2000/xmlns/"],[12],[2,"\\n      "],[10,"path"],[14,"d","M8.93945 7.18578L13.3652 2.80297L14.2676 1.90063C14.3965 1.77172 14.3965 1.55688 14.2676 1.385L13.3223 0.43969C13.1504 0.310783 12.9355 0.310783 12.8066 0.43969L7.52148 5.76781L2.19336 0.43969C2.06445 0.310783 1.84961 0.310783 1.67773 0.43969L0.732422 1.385C0.603516 1.55688 0.603516 1.77172 0.732422 1.90063L6.06055 7.18578L0.732422 12.5139C0.603516 12.6428 0.603516 12.8577 0.732422 13.0295L1.67773 13.9748C1.84961 14.1038 2.06445 14.1038 2.19336 13.9748L7.52148 8.64672L11.9043 13.0725L12.8066 13.9748C12.9355 14.1038 13.1504 14.1038 13.3223 13.9748L14.2676 13.0295C14.3965 12.8577 14.3965 12.6428 14.2676 12.5139L8.93945 7.18578Z"],[14,"fill","#D5D5D5"],[12],[13],[2,"\\n    "],[13],[2,"\\n  "],[13],[2,"\\n\\n  "],[10,"div"],[14,0,"icon"],[12],[2,"\\n    "],[10,"svg"],[14,"width","32"],[14,"height","24"],[14,"viewBox","0 0 32 24"],[14,"version","1.1"],[14,"xmlns","http://www.w3.org/2000/svg","http://www.w3.org/2000/xmlns/"],[12],[2,"\\n      "],[10,"path"],[14,"d","M1.99544363,21.9908879 L29.9863309,21.9908879 L29.9863309,8.28246028 L17.0569469,16.3599089 L14.9384948,16.3599089 L1.99544363,8.28246028 L1.99544363,21.9908879 Z M15.9908873,14.6651485 L29.9863309,5.91799624 L29.9863309,2.00911209 L1.99544363,2.00911209 L1.99544363,5.91799624 L15.9908873,14.6651485 Z M31.9954417,0 L31.9954417,24 L0,24 L0,0 L31.9954417,0 Z"],[12],[13],[2,"\\n    "],[13],[2,"\\n  "],[13],[2,"\\n\\n  "],[10,"main"],[12],[2,"\\n    "],[10,"header"],[12],[1,[32,1,["subject"]]],[13],[2,"\\n\\n    "],[2,[32,1,["body"]]],[2,"\\n  "],[13],[2,"\\n"],[13],[2,"\\n"]],"hasEval":false,"upvars":["fn","on"]}',moduleName:"userlist-widget/components/message.hbs"}),r=Ember._setComponentTemplate(t,Ember._templateOnlyComponent())
e.default=r})),define("userlist-widget/components/resizable-container",["exports","@glimmer/component","resize-observer"],(function(e,t,r){var n,o,i,u,a,c
function l(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=v(e)
if(t){var o=v(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return y(this,r)}}function y(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var h=Ember.HTMLBars.template({id:"DcGW9Ar7",block:'{"symbols":["&attrs","&default"],"statements":[[11,"div"],[17,1],[4,[38,0],[[32,0,["startResizeObserver"]]],null],[4,[38,1],[[32,0,["stopResizeObserver"]]],null],[12],[18,2,null],[13],[2,"\\n"]],"hasEval":false,"upvars":["did-insert","will-destroy"]}',moduleName:"userlist-widget/components/resizable-container.hbs"}),g=(n=Ember.inject.service,o=Ember._action,i=Ember._action,c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)})(u,e)
var t,n,o,i=b(u)
function u(){var e
f(this,u)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return l(d(e=i.call.apply(i,[this].concat(r))),"channel",a,d(e)),e}return t=u,(n=[{key:"startResizeObserver",value:function(e){var t=this
this.resizeObserver=new r.ResizeObserver((function(){t.channel.postMessage("resize",{width:e.offsetWidth,height:e.offsetHeight})})),this.resizeObserver.observe(e)}},{key:"stopResizeObserver",value:function(){this.resizeObserver.disconnect(),this.resizeObserver=null}}])&&s(t.prototype,n),o&&s(t,o),u}(t.default),a=m((u=c).prototype,"channel",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m(u.prototype,"startResizeObserver",[o],Object.getOwnPropertyDescriptor(u.prototype,"startResizeObserver"),u.prototype),m(u.prototype,"stopResizeObserver",[i],Object.getOwnPropertyDescriptor(u.prototype,"stopResizeObserver"),u.prototype),u)
e.default=g,Ember._setComponentTemplate(h,g)})),define("userlist-widget/controllers/application",["exports"],(function(e){var t,r,n
function o(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=s(e)
if(t){var o=s(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return l(this,r)}}function l(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var p,b,y,d,v,m,h=(t=Ember.inject.service,p=(r=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)})(p,Ember.Controller)
var t,r,l,s=c(p)
function p(){var e
i(this,p)
for(var t=arguments.length,r=new Array(t),u=0;u<t;u++)r[u]=arguments[u]
return o(f(e=s.call.apply(s,[this].concat(r))),"config",n,f(e)),e}return t=p,(r=[{key:"showFooter",get:function(){return!1!==this.config.theme.showFooter}}])&&u(t.prototype,r),l&&u(t,l),p}()).prototype,b="config",y=[t],d={configurable:!0,enumerable:!0,writable:!0,initializer:null},m={},Object.keys(d).forEach((function(e){m[e]=d[e]})),m.enumerable=!!m.enumerable,m.configurable=!!m.configurable,("value"in m||m.initializer)&&(m.writable=!0),m=y.slice().reverse().reduce((function(e,t){return t(p,b,e)||e}),m),v&&void 0!==m.initializer&&(m.value=m.initializer?m.initializer.call(v):void 0,m.initializer=void 0),void 0===m.initializer&&(Object.defineProperty(p,b,m),m=null),n=m,r)
e.default=h})),define("userlist-widget/controllers/messages",["exports"],(function(e){var t,r,n,o,i,u
function a(e,t,r,n,o,i,u){try{var a=e[i](u),c=a.value}catch(l){return void r(l)}a.done?t(c):Promise.resolve(c).then(n,o)}function c(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=d(e)
if(t){var o=d(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return b(this,r)}}function b(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var m=(t=Ember.inject.service,r=Ember.inject.controller("application"),n=Ember._action,i=v((o=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)})(v,Ember.Controller)
var t,r,n,o,b,d=p(v)
function v(){var e
l(this,v)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return c(y(e=d.call.apply(d,[this].concat(r))),"store",i,y(e)),c(y(e),"config",u,y(e)),e}return t=v,(r=[{key:"closeMessage",value:(o=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.open()
case 3:e.next=8
break
case 5:e.prev=5,e.t0=e.catch(0),console.info(e.t0)
case 8:return e.prev=8,this.store.unloadRecord(t),e.finish(8)
case 11:case"end":return e.stop()}}),e,this,[[0,5,8,11]])})),b=function(){var e=this,t=arguments
return new Promise((function(r,n){var i=o.apply(e,t)
function u(e){a(i,r,n,u,c,"next",e)}function c(e){a(i,r,n,u,c,"throw",e)}u(void 0)}))},function(e){return b.apply(this,arguments)})}])&&f(t.prototype,r),n&&f(t,n),v}()).prototype,"store",[t],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=v(o.prototype,"config",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v(o.prototype,"closeMessage",[n],Object.getOwnPropertyDescriptor(o.prototype,"closeMessage"),o.prototype),o)
e.default=m})),define("userlist-widget/data-adapter",["exports","@ember-data/debug"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("userlist-widget/helpers/app-version",["exports","userlist-widget/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,r){function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.default.APP.version,i=n.versionOnly||n.hideSha,u=n.shaOnly||n.hideVersion,a=null
return i&&(n.showExtended&&(a=o.match(r.versionExtendedRegExp)),a||(a=o.match(r.versionRegExp))),u&&(a=o.match(r.shaRegExp)),a?a[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=void 0
var o=Ember.Helper.helper(n)
e.default=o})),define("userlist-widget/helpers/loc",["exports","@ember/string/helpers/loc"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"loc",{enumerable:!0,get:function(){return t.loc}})})),define("userlist-widget/helpers/page-title",["exports","ember-page-title/helpers/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("userlist-widget/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("userlist-widget/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("userlist-widget/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","userlist-widget/config/environment"],(function(e,t,r){var n,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(n=r.default.APP.name,o=r.default.APP.version)
var i={name:"App Version",initialize:(0,t.default)(n,o)}
e.default=i})),define("userlist-widget/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=r})),define("userlist-widget/initializers/ember-data-data-adapter",["exports","@ember-data/debug/setup"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("userlist-widget/initializers/ember-data",["exports","ember-data","ember-data/setup-container"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:r.default}
e.default=n})),define("userlist-widget/initializers/export-application-global",["exports","userlist-widget/config/environment"],(function(e,t){function r(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var n,o=t.default.exportApplicationGlobal
n="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),r[n]||(r[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default=void 0
var n={name:"export-application-global",initialize:r}
e.default=n})),define("userlist-widget/instance-initializers/ember-data",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"ember-data",initialize:function(){}}})),define("userlist-widget/models/configuration",["exports","@ember-data/model"],(function(e,t){var r,n,o,i,u,a,c,l
function f(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=v(e)
if(t){var o=v(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return y(this,r)}}function y(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var h=(r=(0,t.attr)("object"),n=(0,t.attr)("object"),o=(0,t.attr)("string"),l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)})(r,e)
var t=b(r)
function r(){var e
s(this,r)
for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i]
return f(d(e=t.call.apply(t,[this].concat(o))),"transport",u,d(e)),f(d(e),"theme",a,d(e)),f(d(e),"defaultWidgetPosition",c,d(e)),e}return r}(t.default),u=m((i=l).prototype,"transport",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=m(i.prototype,"theme",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=m(i.prototype,"defaultWidgetPosition",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i)
e.default=h})),define("userlist-widget/models/message",["exports","@ember-data/model","userlist-widget/utils/actions"],(function(e,t,r){var n,o,i,u,a,c,l,f,s,p,b,y,d,v
function m(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=P(e)
if(t){var o=P(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return O(this,r)}}function O(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?j(e):t}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var R=(n=(0,t.attr)("string"),o=(0,t.attr)("string"),i=(0,t.attr)("date"),u=(0,t.attr)("date"),a=(0,t.attr)("object"),c=(0,r.memberAction)(),v=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)})(i,e)
var t,r,n,o=_(i)
function i(){var e
h(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return m(j(e=o.call.apply(o,[this].concat(r))),"subject",f,j(e)),m(j(e),"body",s,j(e)),m(j(e),"deliveredAt",p,j(e)),m(j(e),"openedAt",b,j(e)),m(j(e),"sender",y,j(e)),m(j(e),"open",d,j(e)),e}return t=i,(r=[{key:"isUnread",get:function(){return!this.isOpened}},{key:"isRead",get:function(){return null!=this.openedAt}}])&&g(t.prototype,r),n&&g(t,n),i}(t.default),f=z((l=v).prototype,"subject",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=z(l.prototype,"body",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=z(l.prototype,"deliveredAt",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=z(l.prototype,"openedAt",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=z(l.prototype,"sender",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=z(l.prototype,"open",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l)
e.default=R})),define("userlist-widget/modifiers/did-insert",["exports","@ember/render-modifiers/modifiers/did-insert"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("userlist-widget/modifiers/did-update",["exports","@ember/render-modifiers/modifiers/did-update"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("userlist-widget/modifiers/will-destroy",["exports","@ember/render-modifiers/modifiers/will-destroy"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("userlist-widget/router",["exports","userlist-widget/config/environment"],(function(e,t){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=a(e)
if(t){var o=a(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return i(this,r)}}function i(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)})(a,Ember.Router)
var i=o(a)
function a(){var e
r(this,a)
for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l]
return c(u(e=i.call.apply(i,[this].concat(o))),"location",t.default.locationType),c(u(e),"rootURL",t.default.rootURL),e}return a}()
e.default=l,l.map((function(){this.route("messages")}))})),define("userlist-widget/routes/application",["exports"],(function(e){var t,r,n,o,i,u,a,c,l
function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],n=!0,o=!1,i=void 0
try{for(var u,a=e[Symbol.iterator]();!(n=(u=a.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return s(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function p(e,t,r,n,o,i,u){try{var a=e[i](u),c=a.value}catch(l){return void r(l)}a.done?t(c):Promise.resolve(c).then(n,o)}function b(e){return function(){var t=this,r=arguments
return new Promise((function(n,o){var i=e.apply(t,r)
function u(e){p(i,n,o,u,a,"next",e)}function a(e){p(i,n,o,u,a,"throw",e)}u(void 0)}))}}function y(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=_(e)
if(t){var o=_(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return g(this,r)}}function g(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var j=(t=Ember.inject.service,r=Ember.inject.service,n=Ember.inject.service,o=Ember.inject.service,u=O((i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)})(p,Ember.Route)
var t,r,n,o,i,s=h(p)
function p(){var e
d(this,p)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return y(w(e=s.call.apply(s,[this].concat(r))),"channel",u,w(e)),y(w(e),"session",a,w(e)),y(w(e),"transport",c,w(e)),y(w(e),"config",l,w(e)),e}return t=p,(r=[{key:"beforeModel",value:(i=b(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setupChannel()
case 2:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"model",value:(o=b(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.config.load())
case 1:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"afterModel",value:function(){this.setupTheme(),this.setupContainer(),this.transitionTo("messages")}},{key:"setupChannel",value:function(){var e=this
return new Promise((function(t){if(e.session.isAuthenticated)return t()
e.channel.on("track",(function(t){var r=f(t,2),n=r[0],o=r[1]
e.transport.publish("track",{name:n,properties:o})})),e.channel.on("identify",(function(t){var r=f(t,1)[0]
e.transport.publish("identify",r)})),e.channel.on("init",(function(r){var n=r.token
e.session.setup(n),t()}))}))}},{key:"setupTheme",value:function(){var e=document.documentElement.style,t=this.config.theme,r=t.accentColor,n=t.hoverColor
e.setProperty("--accent-color",r),e.setProperty("--hover-color",n)}},{key:"setupContainer",value:function(){var e=this.config.defaultWidgetPosition
this.channel.postMessage("reposition",e)}}])&&v(t.prototype,r),n&&v(t,n),p}()).prototype,"channel",[t],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=O(i.prototype,"session",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=O(i.prototype,"transport",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=O(i.prototype,"config",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i)
e.default=j})),define("userlist-widget/routes/messages",["exports"],(function(e){var t,r,n,o,i
function u(e,t,r,n,o,i,u){try{var a=e[i](u),c=a.value}catch(l){return void r(l)}a.done?t(c):Promise.resolve(c).then(n,o)}function a(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=y(e)
if(t){var o=y(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return p(this,r)}}function p(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var v=(t=Ember.inject.service,r=Ember.inject.service,o=d((n=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)})(v,Ember.Route)
var t,r,n,p,y,d=s(v)
function v(){var e
c(this,v)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return a(b(e=d.call.apply(d,[this].concat(r))),"store",o,b(e)),a(b(e),"transport",i,b(e)),e}return t=v,(r=[{key:"model",value:(p=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.store.findAll("message")
case 2:return e.abrupt("return",this.store.peekAll("message"))
case 3:case"end":return e.stop()}}),e,this)})),y=function(){var e=this,t=arguments
return new Promise((function(r,n){var o=p.apply(e,t)
function i(e){u(o,r,n,i,a,"next",e)}function a(e){u(o,r,n,i,a,"throw",e)}i(void 0)}))},function(){return y.apply(this,arguments)})},{key:"afterModel",value:function(){var e=this
this.transport.subscribe("message",(function(t){e.store.pushPayload(t)}))}}])&&l(t.prototype,r),n&&l(t,n),v}()).prototype,"store",[t],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i=d(n.prototype,"transport",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),n)
e.default=v})),define("userlist-widget/serializers/-default",["exports","@ember-data/serializer/json"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}))
define("userlist-widget/serializers/-json-api",["exports","@ember-data/serializer/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("userlist-widget/serializers/-rest",["exports","@ember-data/serializer/rest"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("userlist-widget/serializers/application",["exports","@ember-data/serializer/json-api"],(function(e,t){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=a(e)
if(t){var o=a(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return u(this,r)}}function u(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(l,e)
var t,u,a,c=i(l)
function l(){return r(this,l),c.apply(this,arguments)}return t=l,(u=[{key:"keyForAttribute",value:function(e){return Ember.String.decamelize(e)}}])&&n(t.prototype,u),a&&n(t,a),l}(t.default)
e.default=c})),define("userlist-widget/services/channel",["exports","userlist-widget/utils/channel"],(function(e,t){function r(e,t,r,n,o,i,u){try{var a=e[i](u),c=a.value}catch(l){return void r(l)}a.done?t(c):Promise.resolve(c).then(n,o)}function n(e){return function(){var t=this,n=arguments
return new Promise((function(o,i){var u=e.apply(t,n)
function a(e){r(u,o,i,a,c,"next",e)}function c(e){r(u,o,i,a,c,"throw",e)}a(void 0)}))}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=l(e)
if(t){var o=l(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return c(this,r)}}function c(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var f=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)})(b,Ember.Service)
var r,c,l,f,s,p=a(b)
function b(){return o(this,b),p.apply(this,arguments)}return r=b,(c=[{key:"on",value:(s=n(regeneratorRuntime.mark((function e(){var t,r=arguments
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.connect()
case 2:(t=e.sent).on.apply(t,r)
case 4:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})},{key:"connect",value:function(){return this._connectChannel=this._connectChannel||t.default.connect(window.parent)}},{key:"postMessage",value:(f=n(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.connect()
case 2:e.sent.postMessage(t,r)
case 4:case"end":return e.stop()}}),e,this)}))),function(e,t){return f.apply(this,arguments)})}])&&i(r.prototype,c),l&&i(r,l),b}()
e.default=f})),define("userlist-widget/services/config",["exports"],(function(e){var t,r,n,o,i,u,a,c,l
function f(e,t,r,n,o,i,u){try{var a=e[i](u),c=a.value}catch(l){return void r(l)}a.done?t(c):Promise.resolve(c).then(n,o)}function s(e){return function(){var t=this,r=arguments
return new Promise((function(n,o){var i=e.apply(t,r)
function u(e){f(i,n,o,u,a,"next",e)}function a(e){f(i,n,o,u,a,"throw",e)}u(void 0)}))}}function p(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=g(e)
if(t){var o=g(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return m(this,r)}}function m(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var _=(t=Ember.inject.service,r=Ember._tracked,n=Ember._tracked,o=Ember._tracked,u=w((i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)})(f,Ember.Service)
var t,r,n,o,i=v(f)
function f(){var e
return b(this,f),p(h(e=i.apply(this,arguments)),"store",u,h(e)),p(h(e),"theme",a,h(e)),p(h(e),"transport",c,h(e)),p(h(e),"defaultWidgetPosition",l,h(e)),e.load(),e}return t=f,(r=[{key:"load",value:(o=s(regeneratorRuntime.mark((function e(){var t,r=this
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._config=null!==(t=this._config)&&void 0!==t?t:s(regeneratorRuntime.mark((function e(){var t
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.store.queryRecord("configuration",{})
case 2:t=e.sent,r.theme=t.theme,r.transport=t.transport,r.defaultWidgetPosition=t.defaultWidgetPosition
case 6:case"end":return e.stop()}}),e)})))())
case 1:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})}])&&y(t.prototype,r),n&&y(t,n),f}()).prototype,"store",[t],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=w(i.prototype,"theme",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=w(i.prototype,"transport",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=w(i.prototype,"defaultWidgetPosition",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i)
e.default=_})),define("userlist-widget/services/page-title-list",["exports","ember-page-title/services/page-title-list"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("userlist-widget/services/page-title",["exports","ember-page-title/services/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("userlist-widget/services/session",["exports"],(function(e){var t,r,n
function o(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=s(e)
if(t){var o=s(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return l(this,r)}}function l(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var p,b,y,d,v,m,h=(t=Ember._tracked,p=(r=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)})(p,Ember.Service)
var t,r,l,s=c(p)
function p(){var e
i(this,p)
for(var t=arguments.length,r=new Array(t),u=0;u<t;u++)r[u]=arguments[u]
return o(f(e=s.call.apply(s,[this].concat(r))),"token",n,f(e)),e}return t=p,(r=[{key:"setup",value:function(e){this.token=e}},{key:"isAuthenticated",get:function(){return null!=this.token}}])&&u(t.prototype,r),l&&u(t,l),p}()).prototype,b="token",y=[t],d={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}},m={},Object.keys(d).forEach((function(e){m[e]=d[e]})),m.enumerable=!!m.enumerable,m.configurable=!!m.configurable,("value"in m||m.initializer)&&(m.writable=!0),m=y.slice().reverse().reduce((function(e,t){return t(p,b,e)||e}),m),v&&void 0!==m.initializer&&(m.value=m.initializer?m.initializer.call(v):void 0,m.initializer=void 0),void 0===m.initializer&&(Object.defineProperty(p,b,m),m=null),n=m,r)
e.default=h})),define("userlist-widget/services/store",["exports","ember-data/store"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("userlist-widget/services/transport",["exports","userlist-widget/transports/ably"],(function(e,t){var r,n,o
function i(e,t,r,n,o,i,u){try{var a=e[i](u),c=a.value}catch(l){return void r(l)}a.done?t(c):Promise.resolve(c).then(n,o)}function u(e){return function(){var t=this,r=arguments
return new Promise((function(n,o){var u=e.apply(t,r)
function a(e){i(u,n,o,a,c,"next",e)}function c(e){i(u,n,o,a,c,"throw",e)}a(void 0)}))}}function a(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=y(e)
if(t){var o=y(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return p(this,r)}}function p(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var d={ably:t.default}
var v,m,h,g,w,_,O=(r=Ember.inject.service,v=(n=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)})(m,Ember.Service)
var t,r,n,i,p,y,v=s(m)
function m(){var e
c(this,m)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return a(b(e=v.call.apply(v,[this].concat(r))),"config",o,b(e)),e}return t=m,(r=[{key:"load",value:(y=u(regeneratorRuntime.mark((function e(){var t,r=this
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._transport=null!==(t=this._transport)&&void 0!==t?t:u(regeneratorRuntime.mark((function e(){var t
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.config.load()
case 2:return n=r.config.transport,o=void 0,i=void 0,o=n.adapter,i=n.options,t=new(0,d[o])(i),e.abrupt("return",t)
case 4:case"end":return e.stop()}var n,o,i}),e)})))())
case 1:case"end":return e.stop()}}),e,this)}))),function(){return y.apply(this,arguments)})},{key:"publish",value:(p=u(regeneratorRuntime.mark((function e(){var t,r=arguments
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load()
case 2:(t=e.sent).publish.apply(t,r)
case 4:case"end":return e.stop()}}),e,this)}))),function(){return p.apply(this,arguments)})},{key:"subscribe",value:(i=u(regeneratorRuntime.mark((function e(){var t,r=arguments
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load()
case 2:(t=e.sent).subscribe.apply(t,r)
case 4:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})}])&&l(t.prototype,r),n&&l(t,n),m}()).prototype,m="config",h=[r],g={configurable:!0,enumerable:!0,writable:!0,initializer:null},_={},Object.keys(g).forEach((function(e){_[e]=g[e]})),_.enumerable=!!_.enumerable,_.configurable=!!_.configurable,("value"in _||_.initializer)&&(_.writable=!0),_=h.slice().reverse().reduce((function(e,t){return t(v,m,e)||e}),_),w&&void 0!==_.initializer&&(_.value=_.initializer?_.initializer.call(w):void 0,_.initializer=void 0),void 0===_.initializer&&(Object.defineProperty(v,m,_),_=null),o=_,n)
e.default=O})),define("userlist-widget/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"7AplgOcP",block:'{"symbols":[],"statements":[[1,[30,[36,0],["Userlist Widget"],null]],[2,"\\n"],[1,[30,[36,2],[[30,[36,1],null,null]],null]],[2,"\\n"]],"hasEval":false,"upvars":["page-title","-outlet","component"]}',moduleName:"userlist-widget/templates/application.hbs"})
e.default=t})),define("userlist-widget/templates/messages",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"F+1ERL3W",block:'{"symbols":["message","@model"],"statements":[[1,[30,[36,0],["Messages"],null]],[2,"\\n\\n"],[8,"resizable-container",[[24,0,"messages-container"]],[[],[]],[["default"],[{"statements":[[2,"\\n"],[6,[37,2],[[30,[36,1],[[30,[36,1],[[32,2]],null]],null]],null,[["default"],[{"statements":[[2,"    "],[8,"message",[],[["@message","@onClose"],[[32,1],[32,0,["closeMessage"]]]],null],[2,"\\n"]],"parameters":[1]}]]],[2,"\\n"],[6,[37,3],[[32,0,["config","showFooter"]]],null,[["default"],[{"statements":[[2,"    "],[10,"footer"],[12],[2,"\\n      Sent with "],[10,"a"],[14,6,"https://userlist.com"],[12],[2,"Userlist"],[13],[2,"\\n    "],[13],[2,"\\n"]],"parameters":[]}]]]],"parameters":[]}]]],[2,"\\n"]],"hasEval":false,"upvars":["page-title","-track-array","each","if"]}',moduleName:"userlist-widget/templates/messages.hbs"})
e.default=t})),define("userlist-widget/transforms/boolean",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.BooleanTransform}})})),define("userlist-widget/transforms/date",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.DateTransform}})})),define("userlist-widget/transforms/number",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.NumberTransform}})})),define("userlist-widget/transforms/object",["exports","@ember-data/serializer/transform"],(function(e,t){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=a(e)
if(t){var o=a(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return u(this,r)}}function u(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){if(null===e)return null
if("object"!==Ember.typeOf(e))return e
var r={}
return Object.keys(e).forEach((function(n){var o=t(n),i=e[n]
"array"===Ember.typeOf(i)?i=i.map((function(e){return c(e,t)})):"object"===Ember.typeOf(i)&&(i=c(i,t)),r[o]=i})),r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(f,e)
var t,u,a,l=i(f)
function f(){return r(this,f),l.apply(this,arguments)}return t=f,(u=[{key:"deserialize",value:function(e){return c(e,(function(e){return Ember.String.camelize(e)}))}},{key:"serialize",value:function(e){return c(e,(function(e){return Ember.String.decamelize(e)}))}}])&&n(t.prototype,u),a&&n(t,a),f}(t.default)
e.default=l})),define("userlist-widget/transforms/string",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.StringTransform}})})),define("userlist-widget/transports/ably",["exports","ably"],(function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=function(){function e(r){var n=r.token,o=r.channels;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.client=new t.Realtime({token:n,authCallback:function(){}}),this.messagingChannel=this.client.channels.get(o.messaging),this.pushChannel=this.client.channels.get(o.push)}var n,o,i
return n=e,(o=[{key:"subscribe",value:function(e,t){this.messagingChannel.subscribe(e,(function(e){t(e.data)}))}},{key:"publish",value:function(e,t){this.pushChannel.publish({name:e,data:t})}}])&&r(n.prototype,o),i&&r(n,i),e}()
e.default=n})),define("userlist-widget/utils/actions",["exports"],(function(e){function t(e,t,r,n,o,i,u){try{var a=e[i](u),c=a.value}catch(l){return void r(l)}a.done?t(c):Promise.resolve(c).then(n,o)}function r(e){return function(){var r=this,n=arguments
return new Promise((function(o,i){var u=e.apply(r,n)
function a(e){t(u,o,i,a,c,"next",e)}function c(e){t(u,o,i,a,c,"throw",e)}a(void 0)}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.memberAction=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null
return function(t,n){return{value:function(){var t=this
return r(regeneratorRuntime.mark((function r(){var o,i,u,a,c,l,f,s
return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=t._createSnapshot(),u=t.store,a=i.modelName,c=i.type,l=u.adapterFor(a),f=i.id,e=null!==(o=e)&&void 0!==o?o:Ember.String.dasherize(n),r.next=9,l.memberAction(u,c,f,i,e)
case 9:s=r.sent,u.pushPayload(s)
case 11:case"end":return r.stop()}}),r)})))()}}}}})),define("userlist-widget/utils/channel",["exports","userlist-widget/utils/event-emitter"],(function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=u(e)
if(t){var o=u(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return i(this,r)}}function i(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a="userlist/init",c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)})(l,e)
var t,i,u,c=o(l)
function l(e){var t
return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=c.call(this)).port=e,e.addEventListener("message",(function(e){var r=e.data,n=r.type,o=r.payload
t.emit(n,o)})),e.start(),t.postMessage("connect"),t}return t=l,u=[{key:"connect",value:function(e){return new Promise((function(t){var r=new MessageChannel,n=new l(r.port1)
n.on("connect",(function(){return t(n)})),e.postMessage(a,"*",[r.port2])}))}},{key:"listen",value:function(e){return new Promise((function(t){e.addEventListener("message",(function(e){if(e.data===a){var r=new l(e.ports[0])
r.on("connect",(function(){return t(r)}))}}))}))}}],(i=[{key:"postMessage",value:function(e,t){return this.port.postMessage({type:e,payload:t})}},{key:"close",value:function(){this.port.close()}}])&&r(t.prototype,i),u&&r(t,u),l}(t.default)
e.default=c})),define("userlist-widget/utils/event-emitter",["exports"],(function(e){function t(e,t){var n
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return
if("string"==typeof e)return r(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
"Object"===n&&e.constructor&&(n=e.constructor.name)
if("Map"===n||"Set"===n)return Array.from(e)
if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n)
var o=0,i=function(){}
return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,c=!1
return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next()
return a=e.done,e},e:function(e){c=!0,u=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw u}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this._callbacks={}}var r,o,i
return r=e,(o=[{key:"on",value:function(e,t){this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t)}},{key:"emit",value:function(e){var r=this._callbacks[e]
if(r){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i]
var u,a=t(r)
try{for(a.s();!(u=a.n()).done;){var c=u.value
c.apply(void 0,o)}}catch(l){a.e(l)}finally{a.f()}}}}])&&n(r.prototype,o),i&&n(r,i),e}()
e.default=o})),define("userlist-widget/config/environment",[],(function(){try{var e="userlist-widget/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("userlist-widget/app").default.create({host:"https://api.widget.userlist.com",name:"userlist-widget",version:"0.0.0+5363657b"})
