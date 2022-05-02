(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7285:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},9546:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},o=n(7285);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},6505:function(e,t,n){"use strict";var r=n(930);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=p,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),u=(o=n(148))&&o.__esModule?o:{default:o},c=n(7285),s=n(523),d=n(9546);n(7206);function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var u=a.key.slice(a.key.indexOf("$")+1);e.has(u)?o=!1:e.add(u)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,s=l.length;c<s;c++){var d=l[c];if(a.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?o=!1:n.add(d);else{var p=a.props[d],f=r[d]||new Set;"name"===d&&i||!f.has(p)?(f.add(p),r[d]=f):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return u["data-href"]=u.href,u.href=void 0,u["data-optimized-fonts"]=!0,i.default.cloneElement(e,u)}return i.default.cloneElement(e,{key:o})}))}var v=function(e){var t=e.children,n=i.useContext(c.AmpStateContext),r=i.useContext(s.HeadManagerContext);return i.default.createElement(u.default,{reduceComponentsToState:h,headManager:r,inAmpMode:d.isInAmpMode(n)},t)};t.default=v},148:function(e,t,n){"use strict";var r=n(7980),a=n(3227),o=n(8361),i=(n(2191),n(5971)),u=n(2715),c=n(1193);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294));var p=function(e){i(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e)).emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=p},5006:function(e,t,n){"use strict";n.r(t);var r=n(29),a=n(5988),o=n.n(a),i=n(7794),u=n.n(i),c=n(5553),s=n(9008),d=n(7294),p=n(9473),f=n(5078),l=n(883),h=n(5575),v=n(4739),m=n(8349),y=n(5893),b="Earn - ".concat(f.iC);function g(){var e=(0,d.useState)(!1),t=e[0],n=e[1],a=(0,d.useState)("100"),o=a[0],i=a[1],s=(0,p.v9)(m.qo),l=(0,p.v9)(m.n2),b=(0,p.v9)(m.Cu),g=(0,f.mA)(),x=(0,f.yL)(),O=s===g,j=(0,d.useState)("0"),w=j[0],M=j[1],_=(0,d.useRef)(void 0);(0,d.useEffect)((function(){b&&!O&&_.current!==g&&(_.current=g,g&&h.LJ.balanceOf(g).then((function(e){console.log({amount:e}),M((0,c.bM)(e,b))})))}),[g,b,O]);var P=!l||!g||!x||void 0===b||O,k=P?void 0:function(e){e.preventDefault(),n(!0);var t=(0,c.vz)(o,b),a=x.getSigner();h.LJ.amountDepositable().then(function(){var e=(0,r.Z)(u().mark((function e(r){var o,i,s,d;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.gt(r)){e.next=4;break}return alert("Maximum depositable amount is ".concat((0,c.bM)(r,b))),n(!1),e.abrupt("return");case 4:return e.next=6,l.allowance(g,f.ez);case 6:return o=e.sent,i=l.connect(a),e.next=10,i.balanceOf(g);case 10:if(!e.sent.lt(t)){e.next=15;break}return alert("USDC balance too low"),n(!1),e.abrupt("return");case 15:if(!t.gt(o)){e.next=21;break}return e.next=18,i.approve(f.ez,v.PM);case 18:return s=e.sent,e.next=21,s.wait();case 21:return e.next=23,h.LJ.connect(a).deposit(t);case 23:return d=e.sent,e.next=26,d.wait();case 26:M((function(e){return(0,c.bM)((0,c.vz)(e,b).add(t),b)})),n(!1);case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())};return(0,y.jsxs)("form",{className:"section",onSubmit:k,children:[(0,y.jsx)("h4",{children:"Deposit"}),s&&g&&(O?(0,y.jsx)("div",{children:"Manager can not deposit"}):(0,y.jsxs)("div",{children:["You deposited ",w]})),(0,y.jsx)("input",{type:"number",inputMode:"decimal",onChange:function(e){i(e.target.value)},value:o}),(0,y.jsx)("button",{disabled:P||t,children:"Deposit"})]})}t.default=function(){return(0,y.jsxs)(l.T3,{children:[(0,y.jsxs)(s.default,{children:[(0,y.jsx)("title",{className:"jsx-963716107",children:b}),(0,y.jsx)("meta",{name:"description",content:"",className:"jsx-963716107"}),(0,y.jsx)("link",{rel:"icon",href:"/favicon.ico",className:"jsx-963716107"})]}),(0,y.jsx)(o(),{id:"963716107",children:[".page>.section{max-width:300px;margin:10px auto;border:1px solid grey;border-radius:8px;text-align:center;padding:20px 0;}",".page>.section>h4{margin:0 0 10px;}","h3{text-align:center;}"]}),(0,y.jsx)(g,{})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5006)}])},9008:function(e,t,n){e.exports=n(6505)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);