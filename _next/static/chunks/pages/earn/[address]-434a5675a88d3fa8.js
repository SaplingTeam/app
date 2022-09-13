(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[563],{7285:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var s=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=s},9546:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=o,t.useAmp=function(){return o(s.default.useContext(a.AmpStateContext))};var r,s=(r=n(7294))&&r.__esModule?r:{default:r},a=n(7285);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,s=void 0!==r&&r,a=e.hasQuery,o=void 0!==a&&a;return n||s&&o}},6505:function(e,t,n){"use strict";var r=n(930);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=u,t.default=void 0;var a,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),i=(a=n(8252))&&a.__esModule?a:{default:a},d=n(7285),l=n(523),c=n(9546);n(7206);function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(s){var a=!0,o=!1;if(s.key&&"number"!==typeof s.key&&s.key.indexOf("$")>0){o=!0;var i=s.key.slice(s.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(s.type){case"title":case"base":t.has(s.type)?a=!1:t.add(s.type);break;case"meta":for(var d=0,l=f.length;d<l;d++){var c=f[d];if(s.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?a=!1:n.add(c);else{var u=s.props[c],p=r[c]||new Set;"name"===c&&o||!p.has(u)?(p.add(u),r[c]=p):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,o.default.cloneElement(e,i)}return o.default.cloneElement(e,{key:a})}))}var m=function(e){var t=e.children,n=o.useContext(d.AmpStateContext),r=o.useContext(l.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:h,headManager:r,inAmpMode:c.isInAmpMode(n)},t)};t.default=m},8252:function(e,t,n){"use strict";var r=n(7980),s=n(3227),a=n(8361),o=(n(2191),n(5971)),i=n(2715),d=n(1193);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var s=d(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return i(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294));var u=function(e){o(n,e);var t=l(n);function n(e){var a;return s(this,n),(a=t.call(this,e)).emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(c.Component);t.default=u},6042:function(e,t,n){"use strict";n.r(t);var r=n(6835),s=n(5988),a=n.n(s),o=n(2593),i=n(9008),d=n(7294),l=n(6594),c=n(9310),u=n(2462),p=n(2563),f=n(5893),h=function(e){var t,n=e.address,r=(0,l.v9)((function(e){return e.pools[n]})),s=(null===(t=c.D.find((function(e){return e.address===n})))||void 0===t?void 0:t.name)||"",a=s?"".concat(s," - ").concat(c.iC):c.iC,o=(0,f.jsxs)(i.default,{children:[(0,f.jsx)("title",{children:a}),(0,f.jsx)("link",{rel:"icon",href:"".concat(c.O4,"/favicon.svg")})]}),p=(0,d.useState)(""),h=p[0],x=p[1],g=(0,c.mA)();return(0,d.useEffect)((function(){g?(x(""),(0,c.qd)(g).then((function(e){x(e?g:"no")}))):x("no")}),[g]),r&&h?(0,f.jsxs)(u.T3,{children:[o,(0,f.jsx)(u.VB,{href:"/"}),(0,f.jsx)(u.EG,{poolAddress:n,name:s}),(0,f.jsx)(u.s6,{pool:r,poolAddress:n}),h===g?(0,f.jsxs)(m,{children:[(0,f.jsx)(y,{pool:r,poolAddress:n}),(0,f.jsx)(j,{pool:r,poolAddress:n})]}):(0,f.jsx)(m,{children:(0,f.jsx)(v,{pool:r,poolAddress:n})}),(0,f.jsx)(b,{pool:r,poolAddress:n})]}):(0,f.jsx)(u.SX,{children:o})};function m(e){var t=e.children;return(0,f.jsxs)("div",{className:"jsx-708391026",children:[(0,f.jsx)(a(),{id:"708391026",children:["div.jsx-708391026 h2{font-size:16px;margin:0 0 16px;}","div.jsx-708391026>.box{-webkit-flex-basis:50%;-ms-flex-preferred-size:50%;flex-basis:50%;}","div.jsx-708391026>.box>.stats>.stat{margin-top:8px;}","div.jsx-708391026>.box>.stats>.stat>.label{color:var(--color-secondary);margin-bottom:8px;font-size:16px;font-weight:400;}","div.jsx-708391026>.box>.stats>.stat>.value{color:var(--color);font-size:24px;font-weight:700;}","@media screen and (min-width:800px){div.jsx-708391026{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}div.jsx-708391026>:first-child{margin-right:8px;}div.jsx-708391026>:last-child{margin-left:8px;}div.jsx-708391026>:first-child:last-child{margin-left:0;margin-right:8px;}}","@media screen and (min-width:950px){div.jsx-708391026>.box>.stats{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}div.jsx-708391026>.box>.stats>.stat{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;}}"]}),t]})}h.getInitialProps=function(e){return{address:(0,c.Kn)(e.query.address)}},t.default=h;var x=(0,f.jsx)(u.gs,{size:19,text:"Snapshot of current return based APR of loans outstanding."});function v(e){var t=e.pool.managerAddress,n=e.poolAddress,s=(0,c.mA)(),a=(0,p.tJ)(n),o=(0,r.Z)(a,1)[0],i=t===s?"Manager can't deposit":void 0;return(0,f.jsxs)(u.xu,{overlay:i||null,children:[(0,f.jsx)("h2",{children:"Apply for access to lend (takes 1 min)"}),(0,f.jsx)("div",{className:"stats",children:(0,f.jsxs)("div",{className:"stat",children:[(0,f.jsxs)("div",{className:"label",children:["Estimated APY ",x]}),(0,f.jsx)("div",{className:"value",children:o?"".concat(o.apy,"%"):(0,f.jsx)(u.Od,{width:50})})]})}),(0,f.jsx)("div",{style:{marginBottom:8}}),(0,f.jsx)(u.zx,{href:"".concat(c.Kj===c.p5.mumbai?"https://plcw7zwnspa.typeform.com/to/OBHwt5ow":"https://plcw7zwnspa.typeform.com/to/trkCl5gk","#wallet_address=").concat(s),target:"_blank",style:{padding:"0 24px"},children:"Apply"}),(0,f.jsx)("div",{style:{marginBottom:16}}),(0,f.jsx)(u.bZ,{style:"warning",title:"This is an unaudited, size limited alpha proof of concept version. Please only add limited funds that you are prepared to lose. There is also limited liquidity to remove funds. Thank you for your support!"})]})}function y(e){var t=e.pool,n=t.managerAddress,s=t.liquidityTokenAddress,a=t.liquidityTokenDecimals,i=e.poolAddress,l=(0,c.mA)(),h=(0,p.tJ)(i),m=(0,r.Z)(h,2),v=m[0],y=m[1],j=(0,p.BP)(i,l),b=(0,r.Z)(j,2),g=b[0],w=b[1],O=(0,d.useMemo)((function(){if(!v)return{max:void 0,cannotDeposit:!1};var e=o.O$.from(v.amountDepositable),t=e.eq(c.bM);return{max:e,cannotDeposit:t}}),[v]),A=O.max,k=O.cannotDeposit,P=n===l,_=(0,u.nP)({type:"Deposit",onSumbit:function(e,t){return e.deposit(t)},refetch:function(){return Promise.all([w(),y()])},poolAddress:i,liquidityTokenAddress:s,liquidityTokenDecimals:a,disabled:Boolean(P||!v||k),max:A}),M=_.form,N=_.allowance,S=_.balance,C=P?"Manager can't deposit":k?"This pool doesn't accept deposits":void 0;return(0,f.jsxs)(u.xu,{loading:Boolean(!(!l||k)&&(!N||!S)||void 0===v),overlay:C?(0,f.jsxs)("div",{children:[C,g&&c.bM.lt(g.withdrawable)?(0,f.jsx)("div",{style:{textAlign:"center",marginTop:8},children:(0,f.jsx)(u.zx,{children:"Withdraw"})}):null]}):null,children:[(0,f.jsx)("h2",{children:"Add money"}),(0,f.jsx)("div",{className:"stats",children:(0,f.jsxs)("div",{className:"stat",children:[(0,f.jsxs)("div",{className:"label",children:["Estimated APY ",x]}),(0,f.jsx)("div",{className:"value",children:v?(0,c.T3)(v.apy/100):(0,f.jsx)(u.Od,{width:50})})]})}),M,(0,f.jsx)(u.bZ,{style:"warning",title:"You should not deposit unless you are prepared to sustain a total loss of the money you have invested plus any commission or other transaction charges"})]})}function j(e){var t=e.pool,n=t.managerAddress,s=t.liquidityTokenAddress,a=t.liquidityTokenDecimals,i=e.poolAddress,l=(0,c.mA)(),h=(0,p.tJ)(i),m=(0,r.Z)(h,2),x=m[0],v=m[1],y=(0,p.BP)(i,l),j=(0,r.Z)(y,2),b=j[0],g=j[1],w=(0,d.useMemo)((function(){return b?o.O$.from(b.withdrawable):void 0}),[b]),O=n===l,A=(0,u.nP)({type:"Withdraw",onSumbit:function(e,t){return e.withdraw(t)},refetch:function(){return Promise.all([g(),v()])},poolAddress:i,liquidityTokenAddress:s,liquidityTokenDecimals:a,disabled:Boolean(O||!x),max:w}),k=A.form,P=A.value;return(0,f.jsxs)(u.xu,{loading:Boolean(!!l&&!b),children:[(0,f.jsx)("h2",{children:"Your money"}),(0,f.jsxs)("div",{className:"stats",children:[(0,f.jsxs)("div",{className:"stat",children:[(0,f.jsxs)("div",{className:"label",children:["Balance"," ",(0,f.jsx)(u.gs,{size:19,text:"Your funds in the Pool including any interested earned. Note that interest earned is only shown when Borrowers make repayments. Generally, this number will rise once a month, not everyday."})]}),(0,f.jsx)("div",{className:"value",children:l?b?(0,c.xG)(b.balance,a):(0,f.jsx)(u.Od,{width:50}):"-"})]}),(0,f.jsxs)("div",{className:"stat",children:[(0,f.jsxs)("div",{className:"label",children:["Withdrawable"," ",(0,f.jsx)(u.gs,{size:19,text:"Funds that you can withdraw today. Dependant on how much un-loaned funds are in the pool at any one time."})]}),(0,f.jsx)("div",{className:"value",children:l?b?(0,c.xG)(b.withdrawable,a):(0,f.jsx)(u.Od,{width:50}):"-"})]})]}),k,(0,f.jsx)(u.$c,{value:P,verb:"withdrawing",feePercent:x?x.exitFeePercent:0})]})}function b(e){var t=e.pool.liquidityTokenDecimals,n=e.poolAddress,r=(0,d.useState)(!1),s=r[0],i=r[1],h=(0,d.useState)(null),m=h[0],x=h[1],v=(0,c.mA)(),y=(0,c.yL)(),j=(0,l.I0)();if((0,d.useEffect)((function(){v&&p.LJ.attach(n).protocolEarningsOf(v).then((function(e){e.gt(o.O$.from(0))&&x({amount:e,account:v})}))}),[v,n]),!m||!y)return null;var b=s?void 0:function(e){e.preventDefault(),i(!0),p.LJ.attach(n).connect(y.getSigner()).withdrawProtocolEarnings().then((function(e){return(0,p.y5)(j,{name:"Withdraw earnings",tx:e})})).then((function(){i(!1),x({account:v,amount:o.O$.from(0)})})).catch((function(e){console.error(e),i(!1)}))};return(0,f.jsxs)(u.xu,{children:[(0,f.jsx)(a(),{id:"1072476523",children:["h4.jsx-1072476523{margin-top:0;margin-bottom:10px;text-align:center;}","div.jsx-1072476523{text-align:center;margin-bottom:8px;}","form.jsx-1072476523>button{display:block;margin:0 auto;}"]}),(0,f.jsxs)("form",{onSubmit:b,className:"jsx-1072476523 section",children:[(0,f.jsx)("h4",{className:"jsx-1072476523",children:"Earnings"}),(0,f.jsxs)("div",{className:"jsx-1072476523",children:["Your earnings:"," ",m&&m.account===v&&(0,c.nx)(m.amount,t)," ",c.ob]}),(0,f.jsx)(u.zx,{type:"submit",loading:s,disabled:s||(null===m||void 0===m?void 0:m.amount.lte(o.O$.from(0))),children:"Withdraw"})]})]})}},5193:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/earn/[address]",function(){return n(6042)}])},9008:function(e,t,n){e.exports=n(6505)}},function(e){e.O(0,[774,888,179],(function(){return t=5193,e(e.s=t);var t}));var t=e.O();_N_E=t}]);