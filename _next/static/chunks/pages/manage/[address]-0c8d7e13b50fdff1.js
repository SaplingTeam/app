(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[634],{7285:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=((a=n(7294))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},9546:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=s,t.useAmp=function(){return s(r.default.useContext(i.AmpStateContext))};var a,r=(a=n(7294))&&a.__esModule?a:{default:a},i=n(7285);function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,i=e.hasQuery,s=void 0!==i&&i;return n||r&&s}},6505:function(e,t,n){"use strict";var a=n(930);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=d,t.default=void 0;var i,s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(7294)),o=(i=n(8252))&&i.__esModule?i:{default:i},l=n(7285),c=n(523),u=n(9546);n(7206);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function m(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=s.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(m,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var i=!0,s=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){s=!0;var o=r.key.slice(r.key.indexOf("$")+1);e.has(o)?i=!1:e.add(o)}switch(r.type){case"title":case"base":t.has(r.type)?i=!1:t.add(r.type);break;case"meta":for(var l=0,c=f.length;l<c;l++){var u=f[l];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?i=!1:n.add(u);else{var d=r.props[u],m=a[u]||new Set;"name"===u&&s||!m.has(d)?(m.add(d),a[u]=m):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,s.default.cloneElement(e,o)}return s.default.cloneElement(e,{key:i})}))}var y=function(e){var t=e.children,n=s.useContext(l.AmpStateContext),a=s.useContext(c.HeadManagerContext);return s.default.createElement(o.default,{reduceComponentsToState:p,headManager:a,inAmpMode:u.isInAmpMode(n)},t)};t.default=y},8252:function(e,t,n){"use strict";var a=n(7980),r=n(3227),i=n(8361),s=(n(2191),n(5971)),o=n(2715),l=n(1193);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=l(e);if(t){var r=l(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return o(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(7294));var d=function(e){s(n,e);var t=c(n);function n(e){var i;return r(this,n),(i=t.call(this,e)).emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(a(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},9534:function(e,t,n){"use strict";n.r(t);var a=n(29),r=n(9499),i=n(6835),s=n(5988),o=n.n(s),l=n(7794),c=n.n(l),u=n(2593),d=n(1744),m=n(9008),f=n(7294),p=n(9310),y=n(2462),h=n(2563),x=n(6594),j=n(5533),b=n(5893);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _="Earn - ".concat(p.iC),M=function(e){var t=e.address,n=(0,x.v9)((function(e){return e.pools[t]})),a=(0,p.mA)(),r=(0,x.I0)(),i=(0,f.useRef)("");(0,f.useEffect)((function(){n&&i.current!==t&&(i.current=t,r((0,h.YO)({poolAddress:t,loanDeskAddress:n.loanDeskAddress})))}),[t,r,n]);var s=(0,b.jsxs)(m.default,{children:[(0,b.jsx)("title",{children:_}),(0,b.jsx)("link",{rel:"icon",href:"".concat(p.O4,"/favicon.svg")})]});return n&&n.borrowInfo?(0,b.jsxs)(y.T3,{children:[s,(0,b.jsx)(y.VB,{href:"/manage"}),(0,b.jsx)("h1",{children:n.name}),n?n.managerAddress===a?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(w,{pool:n,poolAddress:t,account:a}),(0,b.jsx)(k,{pool:n,poolAddress:t,account:a}),(0,b.jsx)(y.Ng,{pool:n,poolAddress:t})]}):(0,b.jsx)("h3",{children:"Login with manager wallet"}):(0,b.jsx)("h3",{children:"Loading\u2026"})]}):(0,b.jsx)(y.SX,{children:s})};M.getInitialProps=function(e){return{address:(0,p.Kn)(e.query.address)}},t.default=M;var O=["Stake","Unstake"];function w(e){var t=e.pool,n=t.managerAddress,a=t.liquidityTokenAddress,r=t.liquidityTokenDecimals,s=e.poolAddress,o=e.account,l=(0,f.useState)("Stake"),c=l[0],d=l[1],m=(0,h.tJ)(s),p=(0,i.Z)(m,1)[0],x=(0,h.DQ)(s),j=(0,i.Z)(x,2),v=j[0],g=j[1],_=(0,f.useMemo)((function(){if("Stake"!==c)return v?u.O$.from(v.unstakable):void 0}),[c,v]),M=n!==o,w=(0,y.nP)({type:c,onSumbit:"Stake"===c?function(e,t){return e.stake(t)}:function(e,t){return e.unstake(t)},refetch:function(){return Promise.all([g(),(0,h.IO)(s)])},poolAddress:s,liquidityTokenAddress:a,liquidityTokenDecimals:r,disabled:Boolean(M),max:_}),k=w.form,N=w.value;return(0,b.jsxs)(y.xu,{loading:Boolean(!("Unstake"!==c||!o)&&!v),overlay:M?"Only manager can stake":void 0,children:[(0,b.jsx)(y.mQ,{tabs:O,currentTab:c,setCurrentTab:d}),k,"Stake"===c?(0,b.jsx)(y.bZ,{style:"warning",title:"You should not stake unless you are prepared to sustain a total loss of the money you have invested plus any commission or other transaction charges"}):(0,b.jsx)(y.$c,{value:N,verb:"unstaking",feePercent:p?p.exitFeePercent:0})]})}function k(e){var t=e.pool,n=t.loanDeskAddress,r=t.liquidityTokenDecimals,s=t.block,l=t.borrowInfo,u=e.poolAddress,d=e.account,m=(0,x.I0)(),v=(0,p.yL)(),_=(0,f.useState)(null),M=_[0],O=_[1];(0,f.useEffect)((function(){var e=!1,t=h.Ed.attach(n).connect(v),a=(0,h.qm)(20,t).contract;return Promise.all(Array.from({length:20}).map((function(e,t){return a.loanApplications(t+1)}))).then((function(n){return e?[]:Promise.allSettled(n.filter((function(e){return e.status===h.WR.APPLIED||e.status===h.WR.OFFER_MADE})).map((function(e){return Promise.all([(0,p.rY)(e.profileId).then((function(t){return t||fetch("".concat(p.g9,"/profile/").concat(e.profileId)).then((function(e){return e.json()})).then((function(t){return(0,p.wQ)(e.profileId,t),t}))})),e.status===h.WR.OFFER_MADE?t.loanOffers(e.id).then((function(e){return{graceDefaultPeriod:e.gracePeriod.toNumber(),installmentAmount:e.installmentAmount,installments:e.installments,interest:e.apr,amount:e.amount,duration:e.duration}})):void 0]).then((function(t){var n=(0,i.Z)(t,2),a=n[0],r=n[1];return g(g(g(g({},a),e),r),{},{id:e.id.toHexString()})}))})))})).then((function(t){e||O(t.filter((function(e){return"fulfilled"===e.status})).map((function(e){return e.value})))})).catch((function(e){console.error(e)})),function(){e=!0,O(null)}}),[s,n,v]);var w=(0,f.useState)(null),k=w[0],P=w[1];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(y.xu,{children:[(0,b.jsx)("h2",{className:o().dynamic([["2511434330",[p.wP]]]),children:"Loans awaiting approval"}),(0,b.jsx)("div",{className:o().dynamic([["2511434330",[p.wP]]])+" "+((null===M?void 0:"grid")||""),children:M?M.length?N(M.filter((function(e){return e.status===h.WR.APPLIED})),P,r):"No loans awaiting approval":(0,b.jsx)("div",{className:o().dynamic([["2511434330",[p.wP]]])+" loading",children:(0,b.jsx)(j.iT,{speed:.7,stroke:p.wP,width:32,height:32})})})]}),(0,b.jsxs)(y.xu,{children:[(0,b.jsx)("h2",{className:o().dynamic([["2511434330",[p.wP]]]),children:"Active offers"}),(0,b.jsx)("div",{className:o().dynamic([["2511434330",[p.wP]]])+" "+((null===M?void 0:"grid")||""),children:M?M.length?N(M.filter((function(e){return e.status===h.WR.OFFER_MADE})),P,r):"No active offers":(0,b.jsx)("div",{className:o().dynamic([["2511434330",[p.wP]]])+" loading",children:(0,b.jsx)(j.iT,{speed:.7,stroke:p.wP,width:32,height:32})})})]}),k?(0,b.jsx)(L,{loan:k,liquidityTokenDecimals:r,borrowInfo:l,onClose:function(){return P(null)},onOffer:function(e,t,a,i,s,o){var l=h.Ed.attach(n).connect(v.getSigner());return(k.status===h.WR.OFFER_MADE?l.updateOffer(k.id,e,t,o,a,i,s).then((function(e){return{tx:e,name:"Update offer"}})):l.offerLoan(k.id,e,t,o,a,i,s).then((function(t){return{tx:t,name:"Offer a loan for ".concat((0,p.nx)(e,r)," ").concat(p.ob)}}))).then((function(e){var t=e.tx,n=e.name;return(0,h.y5)(m,{name:n,tx:t})})).then((function(){P(null),O(M.map((function(n){return n===k?g(g({},n),{},{status:h.WR.OFFER_MADE,amount:e,duration:t,graceDefaultPeriod:o,installmentAmount:a,installments:i,interest:s}):n})))})).catch((function(e){throw console.error(e),e}))},onReject:function(){var e=h.Ed.attach(n).connect(v.getSigner());return(k.status===h.WR.OFFER_MADE?e.cancelLoan(k.id).then((function(e){return{tx:e,name:"Cancel loan",newStatus:h.WR.OFFER_CANCELLED}})):e.denyLoan(k.id).then((function(e){return{tx:e,name:"Reject loan",newStatus:h.WR.DENIED}}))).then((function(e){var t=e.tx,n=e.name,a=e.newStatus;return(0,h.y5)(m,{name:n,tx:t}).then((function(){return a}))})).then((function(e){P(null),O(M.map((function(t){return t===k?g(g({},t),{},{status:e}):t})))})).catch((function(e){throw console.error(e),e}))},onFetchBorrowerInfo:(0,a.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.Mj)(d,v.getSigner(),k.profileId,u);case 2:t=e.sent,n=g(g({},k),{},{phone:t.phone,email:t.email}),P(n),O(M.map((function(e){return e===k?n:e})));case 6:case"end":return e.stop()}}),e)})))}):null,(0,b.jsx)(o(),{id:"2511434330",dynamic:[p.wP],children:["h2.__jsx-style-dynamic-selector{font-size:16px;margin-top:0;}",".loading.__jsx-style-dynamic-selector>svg{display:block;margin:10px auto 0;}",".grid.__jsx-style-dynamic-selector{display:grid;grid-template-columns:30% 50% 20%;}",".grid.__jsx-style-dynamic-selector>.name>span{color:".concat(p.wP,";cursor:pointer;}")]})]})}function N(e,t,n){return e.map((function(e){return(0,b.jsxs)(f.Fragment,{children:[(0,b.jsx)("div",{className:"name",children:(0,b.jsx)("span",{onClick:function(){return t(e)},children:e.name})}),(0,b.jsx)("div",{className:"description",children:(0,b.jsxs)("span",{children:[(0,p.nx)(e.amount,n)," ",p.ob," for"," ",(0,y.DL)(e.duration.toNumber())," months"]})}),(0,b.jsx)("div",{className:"address",children:(0,b.jsx)(y.s_,{address:e.borrower})})]},e.id)}))}function L(e){var t=e.loan,n=e.liquidityTokenDecimals,a=e.borrowInfo,r=e.onClose,i=e.onOffer,s=e.onReject,l=e.onFetchBorrowerInfo,c=t.status===h.WR.OFFER_MADE,m=(0,f.useMemo)((function(){var e=(0,p.xA)(t.amount,n),r=t.duration.toNumber(),i=(0,y.DL)(r),s=i.toString();if(c)return{initialAmount:e,initialMonths:s,initialInstallments:t.installments.toString(),initialInstallmentAmount:(0,p.xA)(t.installmentAmount,n),initialInterestValue:(t.interest/10).toString(),initialGraceDefaultPeriod:(t.graceDefaultPeriod/p.u3).toString()};var o=Math.max(Math.ceil(i),1);return{initialAmount:e,initialMonths:s,initialInstallments:o.toString(),initialInstallmentAmount:(0,p.xA)((0,p.Ci)(t.amount,a.apr,o,r),n),initialInterestValue:a.apr.toString(),initialGraceDefaultPeriod:"35"}}),[c,n,t,a]),x=m.initialAmount,j=m.initialMonths,v=m.initialInstallments,g=m.initialInstallmentAmount,_=m.initialInterestValue,M=m.initialGraceDefaultPeriod,O=(0,f.useState)(x),w=O[0],k=O[1],N=(0,f.useState)(j),L=N[0],P=N[1],A=(0,f.useState)(v),D=A[0],S=A[1],G=(0,f.useState)(g),I=G[0],E=G[1],C=(0,f.useState)(_),R=C[0],F=C[1],T=(0,f.useState)(M),Z=T[0],B=T[1],W=(0,f.useState)(!1),q=W[0],$=W[1],z=(0,f.useState)(!1),H=z[0],U=z[1],J=(0,f.useState)(!1),V=J[0],Q=J[1],X=(0,f.useState)(""),Y=X[0],K=X[1],ee=(0,f.useMemo)((function(){return V?function(e,t,n,a,r){var i=Math.trunc(Date.now()/1e3);return(0,p.xA)((0,p.qJ)(e,p.bM,i,t,i+n/a).interestOutstanding,r)}((0,d.vz)(w,n),Number(R),Number(L)*p.L$,parseInt(D,10),n):I}),[V,w,n,R,L,D,I]),te=(0,f.useMemo)((function(){var e=Math.trunc(Date.now()/1e3);if(!w||!L||!R||!D||!ee)return[p.bM,!1,null];var t=(0,d.vz)(w,n),a=Number(L),r=parseInt(D,10);return[t,a%1===0&&r===a,{amount:t,duration:Number(L)*p.L$,apr:Number(R),borrowedTime:e,installments:r,installmentAmount:(0,d.vz)(ee,n),details:{baseAmountRepaid:p.wL,totalAmountRepaid:p.wL,interestPaid:p.wL,interestPaidUntil:e}}]}),[w,n,L,R,D,ee]),ne=te[0],ae=te[1],re=te[2],ie=(0,h.lr)(re),se=(0,f.useCallback)((function(e){e.preventDefault(),$(!0),i((0,d.vz)(w,n),u.O$.from(Number(L)*p.L$),(0,d.vz)(ee,n),parseInt(D,10),10*Number(R),Number(Z)*p.u3).catch((function(){$(!1)}))}),[w,L,Z,ee,D,R,n,i]),oe=(0,f.useCallback)((function(){U(!0),s().catch((function(){U(!1)}))}),[s]),le=(0,f.useMemo)((function(){return!(0,p.BJ)(w,n,a.minLoanAmount)}),[w,a.minLoanAmount,n]),ce=(0,f.useMemo)((function(){var e=Number(L)*p.L$;return e<a.minLoanDuration?"Minimum duration is ".concat(a.minLoanDuration/p.u3," day"):e>a.maxLoanDuration?"Maximum duration is ".concat(a.maxLoanDuration/p.eV," years"):""}),[L,a.minLoanDuration,a.maxLoanDuration]),ue=(0,f.useMemo)((function(){return!(0,p.BJ)(ee,n,p.bM)}),[ee,n]),de=(0,f.useMemo)((function(){return Number(R)<=0}),[R]),me=(0,f.useMemo)((function(){var e=parseInt(D,10);return e<1?"Installments must be at least 1":e>Number(L)*p.L$/p.u3?"Installments can not be more than the duration in days":""}),[L,D]),fe=(0,f.useMemo)((function(){var e=Number(Z);return e<3?"Grace default period must be at least 3":e>365?"Grace default period must be less than 365":""}),[Z]);return(0,b.jsx)(y.u_,{onClose:r,children:(0,b.jsxs)("form",{onSubmit:se,className:o().dynamic([["915165999",[p.G9,p.LM]]]),children:[(0,b.jsx)("h3",{className:o().dynamic([["915165999",[p.G9,p.LM]]]),children:c?"Update Offer":"Offer a Loan"}),(0,b.jsxs)("div",{className:o().dynamic([["915165999",[p.G9,p.LM]]])+" field",children:[(0,b.jsx)("div",{className:o().dynamic([["915165999",[p.G9,p.LM]]])+" label",children:"Account"}),(0,b.jsx)("div",{className:o().dynamic([["915165999",[p.G9,p.LM]]]),children:(0,b.jsx)(y.s_,{address:t.borrower})})]}),(0,b.jsxs)("div",{className:o().dynamic([["915165999",[p.G9,p.LM]]])+" field",children:[(0,b.jsx)("div",{className:o().dynamic([["915165999",[p.G9,p.LM]]])+" label",children:"Name"}),(0,b.jsx)("div",{className:o().dynamic([["915165999",[p.G9,p.LM]]]),children:t.name})]}),(0,b.jsxs)("div",{className:o().dynamic([["915165999",[p.G9,p.LM]]])+" field",children:[(0,b.jsx)("div",{className:o().dynamic([["915165999",[p.G9,p.LM]]])+" label",children:"Business Name"}),(0,b.jsx)("div",{className:o().dynamic([["915165999",[p.G9,p.LM]]]),children:t.businessName})]}),t.phone?(0,b.jsxs)("div",{className:o().dynamic([["915165999",[p.G9,p.LM]]])+" field",children:[(0,b.jsx)("div",{className:o().dynamic([["915165999",[p.G9,p.LM]]])+" label",children:"Phone"}),(0,b.jsx)("div",{className:o().dynamic([["915165999",[p.G9,p.LM]]]),children:(0,b.jsx)("a",{href:"tel:".concat(t.phone),className:o().dynamic([["915165999",[p.G9,p.LM]]]),children:t.phone})})]}):null,t.email?(0,b.jsxs)("div",{className:o().dynamic([["915165999",[p.G9,p.LM]]])+" field",children:[(0,b.jsx)("div",{className:o().dynamic([["915165999",[p.G9,p.LM]]])+" label",children:"Email"}),(0,b.jsx)("div",{className:o().dynamic([["915165999",[p.G9,p.LM]]]),children:(0,b.jsx)("a",{href:"mailto:".concat(t.email),className:o().dynamic([["915165999",[p.G9,p.LM]]]),children:t.email})})]}):null,t.email||t.phone?null:(0,b.jsx)(y.zx,{type:"button",stone:!0,onClick:l,style:{marginTop:16},children:"Get contact information"}),(0,b.jsxs)("label",{className:o().dynamic([["915165999",[p.G9,p.LM]]]),children:[(0,b.jsx)("div",{className:o().dynamic([["915165999",[p.G9,p.LM]]])+" label",children:"Amount"}),(0,b.jsx)(y._Z,{decimals:n,value:w,onChange:k,disabled:q,invalid:le}),le?(0,b.jsx)(y.bZ,{style:"error",title:"Minimum amount is ".concat((0,p.nx)(u.O$.from(a.minLoanAmount),n))}):null]}),(0,b.jsxs)("label",{className:o().dynamic([["915165999",[p.G9,p.LM]]]),children:[(0,b.jsx)("div",{className:o().dynamic([["915165999",[p.G9,p.LM]]])+" label",children:"Duration"}),(0,b.jsx)(y._Z,{decimals:100,value:L,onChange:P,disabled:q,invalid:Boolean(ce),noToken:!0,label:"months",paddingRight:60}),ce?(0,b.jsx)(y.bZ,{style:"error",title:ce}):null]}),(0,b.jsxs)("label",{className:o().dynamic([["915165999",[p.G9,p.LM]]]),children:[(0,b.jsx)("div",{className:o().dynamic([["915165999",[p.G9,p.LM]]])+" label",children:"Installments"}),(0,b.jsx)(y._Z,{decimals:0,value:D,onChange:S,disabled:q,invalid:Boolean(me),noToken:!0}),me?(0,b.jsx)(y.bZ,{style:"error",title:me}):null]}),(0,b.jsxs)("label",{className:o().dynamic([["915165999",[p.G9,p.LM]]]),children:[(0,b.jsx)("div",{className:o().dynamic([["915165999",[p.G9,p.LM]]])+" label",children:"Interest p/a"}),(0,b.jsx)(y._Z,{decimals:1,value:R,onChange:F,disabled:q,invalid:de,noToken:!0,label:"%",paddingRight:26}),de?(0,b.jsx)(y.bZ,{style:"error",title:"Invalid interest"}):null]}),(0,b.jsxs)("label",{className:o().dynamic([["915165999",[p.G9,p.LM]]]),children:[(0,b.jsx)("div",{className:o().dynamic([["915165999",[p.G9,p.LM]]])+" label",children:"Installment amount"}),(0,b.jsx)(y._Z,{decimals:n,value:ee,onChange:E,disabled:q||V,invalid:ue}),(0,b.jsxs)("label",{className:o().dynamic([["915165999",[p.G9,p.LM]]])+" checkbox",children:[(0,b.jsx)("input",{type:"checkbox",checked:V,onChange:function(){V?(E(Y),Q(!1)):(K(I),Q(!0))},className:o().dynamic([["915165999",[p.G9,p.LM]]])}),"Interest only"]}),ue?(0,b.jsx)(y.bZ,{style:"error",title:"Invalid installment amount"}):null]}),(0,b.jsxs)("label",{className:o().dynamic([["915165999",[p.G9,p.LM]]]),children:[(0,b.jsx)("div",{className:o().dynamic([["915165999",[p.G9,p.LM]]])+" label",children:"Grace Default Period"}),(0,b.jsx)(y._Z,{decimals:2,value:Z,onChange:B,disabled:q,invalid:Boolean(fe),noToken:!0,label:"days",paddingRight:44}),fe?(0,b.jsx)(y.bZ,{style:"error",title:fe}):null]}),(0,b.jsx)("div",{className:o().dynamic([["915165999",[p.G9,p.LM]]])+" schedule-container",children:(0,b.jsx)(y.JJ,{amount:ne,monthly:ae,schedule:ie,liquidityTokenDecimals:n})}),(0,b.jsxs)("div",{className:o().dynamic([["915165999",[p.G9,p.LM]]])+" buttons",children:[(0,b.jsx)(y.zx,{disabled:Boolean(q||H||le||ce||me||de||ue||fe),loading:q,type:"submit",children:c?"Update Offer":"Offer Loan"}),(0,b.jsx)(y.zx,{disabled:q||H,loading:H,onClick:oe,type:"button",stone:!0,children:c?"Cancel Offer":"Reject Application"})]}),(0,b.jsx)(o(),{id:"915165999",dynamic:[p.G9,p.LM],children:["form.__jsx-style-dynamic-selector{padding:20px;}","form.__jsx-style-dynamic-selector>h3.__jsx-style-dynamic-selector{margin-top:0;}","form.__jsx-style-dynamic-selector>.field.__jsx-style-dynamic-selector,form.__jsx-style-dynamic-selector>label.__jsx-style-dynamic-selector{display:block;margin-top:16px;}","form.__jsx-style-dynamic-selector>.field.__jsx-style-dynamic-selector>.label.__jsx-style-dynamic-selector,form.__jsx-style-dynamic-selector>label.__jsx-style-dynamic-selector>.label.__jsx-style-dynamic-selector{color:var(--color-secondary);font-weight:400;margin-bottom:8px;}","form.__jsx-style-dynamic-selector>.field.__jsx-style-dynamic-selector>.checkbox.__jsx-style-dynamic-selector,form.__jsx-style-dynamic-selector>label.__jsx-style-dynamic-selector>.checkbox.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","form.__jsx-style-dynamic-selector>.field.__jsx-style-dynamic-selector>.checkbox.__jsx-style-dynamic-selector>input[type=checkbox].__jsx-style-dynamic-selector,form.__jsx-style-dynamic-selector>label.__jsx-style-dynamic-selector>.checkbox.__jsx-style-dynamic-selector>input[type=checkbox].__jsx-style-dynamic-selector{width:16px;height:16px;margin-right:4px;}","form.__jsx-style-dynamic-selector>.field.__jsx-style-dynamic-selector>.alert,form.__jsx-style-dynamic-selector>label.__jsx-style-dynamic-selector>.alert{margin-top:8px;}","form.__jsx-style-dynamic-selector>.buttons.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}","form.__jsx-style-dynamic-selector>.buttons.__jsx-style-dynamic-selector>button{margin:16px 8px 0 0;}","form.__jsx-style-dynamic-selector>.schedule-container.__jsx-style-dynamic-selector{color:".concat(p.G9,";background-color:").concat(p.LM,";margin-top:16px;padding:12px 16px;border-radius:8px;}")]})]})})}},5243:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/[address]",function(){return n(9534)}])},9008:function(e,t,n){e.exports=n(6505)}},function(e){e.O(0,[774,888,179],(function(){return t=5243,e(e.s=t);var t}));var t=e.O();_N_E=t}]);