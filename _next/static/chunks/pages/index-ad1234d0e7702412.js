(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7285:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},9546:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=s,t.useAmp=function(){return s(a.default.useContext(o.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},o=n(7285);function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,s=void 0!==o&&o;return n||a&&s}},6505:function(e,t,n){"use strict";var r=n(930);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=l,t.default=void 0;var o,s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),i=(o=n(8252))&&o.__esModule?o:{default:o},c=n(7285),u=n(523),d=n(9546);n(7206);function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=s.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,s=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){s=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,u=p.length;c<u;c++){var d=p[c];if(a.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?o=!1:n.add(d);else{var l=a.props[d],f=r[d]||new Set;"name"===d&&s||!f.has(l)?(f.add(l),r[d]=f):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,s.default.cloneElement(e,i)}return s.default.cloneElement(e,{key:o})}))}var y=function(e){var t=e.children,n=s.useContext(c.AmpStateContext),r=s.useContext(u.HeadManagerContext);return s.default.createElement(i.default,{reduceComponentsToState:h,headManager:r,inAmpMode:d.isInAmpMode(n)},t)};t.default=y},8252:function(e,t,n){"use strict";var r=n(7980),a=n(3227),o=n(8361),s=(n(2191),n(5971)),i=n(2715),c=n(1193);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294));var l=function(e){s(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e)).emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=l},5006:function(e,t,n){"use strict";n.r(t);var r=n(5988),a=n.n(r),o=n(9008),s=n(9473),i=n(9310),c=n(5462),u=n(2563),d=n(1664),l=n.n(d),f=n(9352),p=n(7294),h=n(5893),y="Earn - ".concat(i.iC),m=["Total Pool Size","Available for deposits","Projected APY","Loans"];t.default=function(){var e=(0,u.Oh)(),t=(0,s.I0)(),n=Object.keys(e).length===i.Q$.length;(0,u.RD)(n?{dispatch:t}:null);var r=(0,i.mA)(),d=(0,p.useMemo)((function(){return Object.values(e).filter((function(e){return e.managerAddress===r})).length>0}),[e,r]);return(0,h.jsxs)(c.T3,{children:[(0,h.jsx)(a(),{id:"1317480205",dynamic:[i.W],children:[".navlinks.__jsx-style-dynamic-selector{display:block;}","a.__jsx-style-dynamic-selector{width:50%;color:var(--greenery);font-weight:600;font-size:16px;display:inline-block;cursor:pointer;line-height:24px;}","a.__jsx-style-dynamic-selector>svg{margin-right:8px;}","@media screen and (min-width:".concat(i.W,"px){.navlinks.__jsx-style-dynamic-selector{display:none;}}")]}),(0,h.jsxs)(o.default,{children:[(0,h.jsx)("title",{className:a().dynamic([["1317480205",[i.W]]]),children:y}),(0,h.jsx)("link",{rel:"icon",href:"".concat(i.O4,"/favicon.svg"),className:a().dynamic([["1317480205",[i.W]]])})]}),(0,h.jsx)("h1",{className:a().dynamic([["1317480205",[i.W]]]),children:"Earn: Pools Open to Lenders"}),(0,h.jsxs)("span",{className:a().dynamic([["1317480205",[i.W]]])+" navlinks",children:[(0,h.jsx)(l(),{href:"/borrow",children:(0,h.jsxs)("a",{className:a().dynamic([["1317480205",[i.W]]]),children:[(0,h.jsx)(f.S$_,{size:18}),"Borrow"]})}),d&&(0,h.jsx)(l(),{href:"/manage",children:(0,h.jsxs)("a",{className:a().dynamic([["1317480205",[i.W]]]),children:[(0,h.jsx)(f.ZHh,{size:18}),"Manage"]})})]}),(0,h.jsx)(c.xC,{showMoreAndOpenPage:!0,items:i.Q$.map((function(t){var n=t.address,r=t.name,a=e[n];return{address:n,link:"/earn/".concat(n),name:r,stats:a&&a.stats?[(0,i.xG)(a.stats.poolFunds,a.liquidityTokenDecimals,0),(0,i.xG)(a.stats.amountDepositable,a.liquidityTokenDecimals,0),(0,i.T3)(a.stats.apy/100),a.stats.loans.toString()]:[(0,h.jsx)(c.Od,{width:50},"1"),(0,h.jsx)(c.Od,{width:50},"2"),(0,h.jsx)(c.Od,{width:30},"3"),(0,h.jsx)(c.Od,{width:30},"4")]}})),labels:m})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5006)}])},9008:function(e,t,n){e.exports=n(6505)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);