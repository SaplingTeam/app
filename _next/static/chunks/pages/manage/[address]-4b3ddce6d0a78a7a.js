(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[634],{7285:function(e,n,t){"use strict";var a;Object.defineProperty(n,"__esModule",{value:!0}),n.AmpStateContext=void 0;var r=((a=t(7294))&&a.__esModule?a:{default:a}).default.createContext({});n.AmpStateContext=r},9546:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.isInAmpMode=o,n.useAmp=function(){return o(r.default.useContext(i.AmpStateContext))};var a,r=(a=t(7294))&&a.__esModule?a:{default:a},i=t(7285);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.ampFirst,t=void 0!==n&&n,a=e.hybrid,r=void 0!==a&&a,i=e.hasQuery,o=void 0!==i&&i;return t||r&&o}},6505:function(e,n,t){"use strict";var a=t(930);function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}Object.defineProperty(n,"__esModule",{value:!0}),n.defaultHead=d,n.default=void 0;var i,o=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};a.get||a.set?Object.defineProperty(n,t,a):n[t]=e[t]}return n.default=e,n}(t(7294)),l=(i=t(8252))&&i.__esModule?i:{default:i},s=t(7285),c=t(523),u=t(9546);t(7206);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=[o.default.createElement("meta",{charSet:"utf-8"})];return e||n.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),n}function m(e,n){return"string"===typeof n||"number"===typeof n?e:n.type===o.default.Fragment?e.concat(o.default.Children.toArray(n.props.children).reduce((function(e,n){return"string"===typeof n||"number"===typeof n?e:e.concat(n)}),[])):e.concat(n)}var f=["name","httpEquiv","charSet","itemProp"];function y(e,n){return e.reduce((function(e,n){var t=o.default.Children.toArray(n.props.children);return e.concat(t)}),[]).reduce(m,[]).reverse().concat(d(n.inAmpMode)).filter(function(){var e=new Set,n=new Set,t=new Set,a={};return function(r){var i=!0,o=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){o=!0;var l=r.key.slice(r.key.indexOf("$")+1);e.has(l)?i=!1:e.add(l)}switch(r.type){case"title":case"base":n.has(r.type)?i=!1:n.add(r.type);break;case"meta":for(var s=0,c=f.length;s<c;s++){var u=f[s];if(r.props.hasOwnProperty(u))if("charSet"===u)t.has(u)?i=!1:t.add(u);else{var d=r.props[u],m=a[u]||new Set;"name"===u&&o||!m.has(d)?(m.add(d),a[u]=m):i=!1}}}return i}}()).reverse().map((function(e,t){var i=e.key||t;if(!n.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(n){return e.props.href.startsWith(n)}))){var l=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e.props||{});return l["data-href"]=l.href,l.href=void 0,l["data-optimized-fonts"]=!0,o.default.cloneElement(e,l)}return o.default.cloneElement(e,{key:i})}))}var h=function(e){var n=e.children,t=o.useContext(s.AmpStateContext),a=o.useContext(c.HeadManagerContext);return o.default.createElement(l.default,{reduceComponentsToState:y,headManager:a,inAmpMode:u.isInAmpMode(t)},n)};n.default=h},8252:function(e,n,t){"use strict";var a=t(7980),r=t(3227),i=t(8361),o=(t(2191),t(5971)),l=t(2715),s=t(1193);function c(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=s(e);if(n){var r=s(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return l(this,t)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};a.get||a.set?Object.defineProperty(n,t,a):n[t]=e[t]}return n.default=e,n}(t(7294));var d=function(e){o(t,e);var n=c(t);function t(e){var i;return r(this,t),(i=n.call(this,e)).emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(a(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(t,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),t}(u.Component);n.default=d},9534:function(e,n,t){"use strict";t.r(n);var a=t(29),r=t(9499),i=t(6835),o=t(5988),l=t.n(o),s=t(7794),c=t.n(s),u=t(2593),d=t(1744),m=t(9008),f=t(7294),y=t(9310),h=t(5462),p=t(2563),x=t(6594),b=t(5533),j=t(5893);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var _="Earn - ".concat(y.iC),N=function(e){var n=e.address,t=(0,x.v9)((function(e){return e.pools[n]})),a=(0,y.mA)(),r=(0,x.I0)(),i=(0,f.useRef)("");(0,f.useEffect)((function(){t&&i.current!==n&&(i.current=n,r((0,p.YO)({poolAddress:n,loanDeskAddress:t.loanDeskAddress})))}),[n,r,t]);var o=(0,j.jsxs)(m.default,{children:[(0,j.jsx)("title",{children:_}),(0,j.jsx)("link",{rel:"icon",href:"".concat(y.O4,"/favicon.svg")})]});return t&&t.borrowInfo?(0,j.jsxs)(h.T3,{children:[o,(0,j.jsx)(h.VB,{href:"/manage"}),(0,j.jsx)("h1",{children:t.name}),t?t.managerAddress===a?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(M,{pool:t,poolAddress:n,account:a}),(0,j.jsx)(h.Ng,{pool:t,poolAddress:n})]}):(0,j.jsx)("h3",{children:"Login with manager wallet"}):(0,j.jsx)("h3",{children:"Loading\u2026"})]}):(0,j.jsx)(h.SX,{children:o})};function M(e){var n=e.pool,t=n.loanDeskAddress,r=n.liquidityTokenDecimals,o=n.block,s=n.borrowInfo,u=e.poolAddress,d=e.account,m=(0,x.I0)(),v=(0,y.yL)(),_=(0,f.useState)(null),N=_[0],M=_[1];(0,f.useEffect)((function(){var e=!1,n=p.Ed.attach(t),a=y.Kj===y.p5.mumbai?40:20,r=(0,p.qm)(a,n).contract;return Promise.all(Array.from({length:a}).map((function(e,n){return r.loanApplications(n+1)}))).then((function(t){return e?[]:Promise.allSettled(t.filter((function(e){return e.status===p.WR.APPLIED||e.status===p.WR.OFFER_MADE})).map((function(e){return Promise.all([(0,y.rY)(e.id.toNumber()).then((function(n){return n||fetch("".concat(y.g9,"/profile/").concat(e.profileId)).then((function(e){return e.json()})).then((function(n){return(0,y.wQ)(e.id.toNumber(),n),n}))})),e.status===p.WR.OFFER_MADE?n.loanOffers(e.id).then((function(e){return{graceDefaultPeriod:e.gracePeriod.toNumber(),installmentAmount:e.installmentAmount,installments:e.installments,interest:e.apr,amount:e.amount,duration:e.duration}})):void 0]).then((function(n){var t=(0,i.Z)(n,2),a=t[0],r=t[1];return g(g(g(g({},a),e),r),{},{id:e.id.toNumber()})}))})))})).then((function(n){e||M(n.filter((function(e){return"fulfilled"===e.status})).map((function(e){return e.value})))})).catch((function(e){console.error(e)})),function(){e=!0,M(null)}}),[o,t,v]);var O=(0,f.useState)(null),A=O[0],C=O[1];return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(h.xu,{children:[(0,j.jsx)("h2",{className:l().dynamic([["2239332618",[y.wP,y.W]]]),children:"Loans awaiting approval"}),(0,j.jsx)("div",{className:l().dynamic([["2239332618",[y.wP,y.W]]])+" "+((null===N?void 0:"grid")||""),children:N?N.length?L(N.filter((function(e){return e.status===p.WR.APPLIED})),C,r):"No loans awaiting approval":(0,j.jsx)("div",{className:l().dynamic([["2239332618",[y.wP,y.W]]])+" loading",children:(0,j.jsx)(b.iT,{speed:.7,stroke:y.wP,width:32,height:32})})})]}),(0,j.jsxs)(h.xu,{children:[(0,j.jsx)("h2",{className:l().dynamic([["2239332618",[y.wP,y.W]]]),children:"Active offers"}),(0,j.jsx)("div",{className:l().dynamic([["2239332618",[y.wP,y.W]]])+" "+((null===N?void 0:"grid")||""),children:N?N.length?L(N.filter((function(e){return e.status===p.WR.OFFER_MADE})),C,r):"No active offers":(0,j.jsx)("div",{className:l().dynamic([["2239332618",[y.wP,y.W]]])+" loading",children:(0,j.jsx)(b.iT,{speed:.7,stroke:y.wP,width:32,height:32})})})]}),A?(0,j.jsx)(w,{loan:A,liquidityTokenDecimals:r,borrowInfo:s,onClose:function(){return C(null)},onOffer:function(e,n,a,i,o,l,s){var c=p.Ed.attach(t).connect(v.getSigner()),f=A.status===p.WR.OFFER_MADE,h=v.getSigner();return(0,y.So)(d,h).then((function(e){return fetch("".concat(y.g9,"/profile/").concat(A.profileId,"?").concat(new URLSearchParams(g(g({},e),{},{poolAddress:u}))),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({localDetail:s})})})).then((function(e){if(!e.ok)throw new Error("Error when updating loan application!");A&&(0,y.rY)(null===A||void 0===A?void 0:A.id).then((function(e){e&&(0,y.wQ)(null===A||void 0===A?void 0:A.id,g(g({},e),{},{localDetail:s}))}))})).then((function(){return f?c.updateOffer(A.id,e,n,l,a,i,o).then((function(e){return{tx:e,name:"Update offer"}})):c.offerLoan(A.id,e,n,l,a,i,o).then((function(n){return{tx:n,name:"Offer a loan for ".concat((0,y.nx)(e,r)," ").concat(y.ob)}}))})).then((function(e){var n=e.tx,t=e.name;return(0,p.y5)(m,{name:t,tx:n})})).then((function(){C(null),M(N.map((function(t){return t===A?g(g({},t),{},{status:p.WR.OFFER_MADE,amount:e,duration:n,graceDefaultPeriod:l,installmentAmount:a,installments:i,interest:o}):t})))})).catch((function(e){throw console.error(e),e}))},onReject:function(){var e=p.Ed.attach(t).connect(v.getSigner());return(A.status===p.WR.OFFER_MADE?e.cancelLoan(A.id).then((function(e){return{tx:e,name:"Cancel loan",newStatus:p.WR.OFFER_CANCELLED}})):e.denyLoan(A.id).then((function(e){return{tx:e,name:"Reject loan",newStatus:p.WR.DENIED}}))).then((function(e){var n=e.tx,t=e.name,a=e.newStatus;return(0,p.y5)(m,{name:t,tx:n}).then((function(){return a}))})).then((function(e){C(null),M(N.map((function(n){return n===A?g(g({},n),{},{status:e}):n})))})).catch((function(e){throw console.error(e),e}))},onFetchBorrowerInfo:(0,a.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.Mj)(u,A.id,A.profileId,d,v.getSigner());case 2:n=e.sent,t=g(g({},A),{},{phone:n.phone,email:n.email}),C(t),M(N.map((function(e){return e===A?t:e})));case 6:case"end":return e.stop()}}),e)})))}):null,(0,j.jsx)(l(),{id:"2239332618",dynamic:[y.wP,y.W],children:["h2.__jsx-style-dynamic-selector{font-size:16px;margin-top:0;}",".loading.__jsx-style-dynamic-selector>svg{display:block;margin:10px auto 0;}",".grid.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}",".grid.__jsx-style-dynamic-selector>.name{margin-right:24px;}",".grid.__jsx-style-dynamic-selector>.name>span{color:".concat(y.wP,";cursor:pointer;}"),"@media screen and (min-width:".concat(y.W,"px){.grid.__jsx-style-dynamic-selector{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}}")]})]})}function L(e,n,t){return e.map((function(e){return(0,j.jsxs)(f.Fragment,{children:[(0,j.jsx)("div",{className:"name",children:(0,j.jsx)("span",{onClick:function(){return n(e)},children:e.name})}),(0,j.jsx)("div",{className:"description",children:(0,j.jsxs)("span",{children:[e.isLocalCurrencyLoan?(0,j.jsxs)(j.Fragment,{children:[Number(e.localDetail.localLoanAmount).toFixed(2)," ",e.localDetail.localCurrencyCode," ","("]}):null,(0,y.nx)(e.amount,t,2)," ",y.ob,e.isLocalCurrencyLoan?(0,j.jsx)(j.Fragment,{children:")"}):null," ","for"," ",(0,h.DL)(e.duration.toNumber())," months"]})})]},e.id)}))}function w(e){var n,t,a=e.loan,r=e.liquidityTokenDecimals,i=e.borrowInfo,o=e.onClose,s=e.onOffer,c=e.onReject,m=e.onFetchBorrowerInfo,x=a.status===p.WR.OFFER_MADE,b=(0,f.useMemo)((function(){var e=(0,y.xA)(a.amount,r),n=a.duration.toNumber(),t=(0,h.DL)(n),o=t.toString();if(x)return{initialAmount:e,initialMonths:o,initialInstallments:a.installments.toString(),initialInstallmentAmount:(0,y.xA)(a.installmentAmount,r),initialInterestValue:(a.interest/10).toString(),initialGraceDefaultPeriod:(a.graceDefaultPeriod/y.u3).toString()};var l=Math.max(Math.ceil(t),1);return{initialAmount:e,initialMonths:o,initialInstallments:l.toString(),initialInstallmentAmount:(0,y.xA)((0,y.Ci)(a.amount,i.apr,l,n),r),initialInterestValue:i.apr.toString(),initialGraceDefaultPeriod:"35"}}),[x,r,a,i]),v=b.initialAmount,g=b.initialMonths,_=b.initialInstallments,N=b.initialInstallmentAmount,M=b.initialInterestValue,L=b.initialGraceDefaultPeriod,w=(0,f.useState)(v),O=w[0],A=w[1],C=(0,f.useState)(a.isLocalCurrencyLoan?Number(a.localDetail.localLoanAmount).toFixed(2):"0"),D=C[0],P=C[1],k=(0,f.useState)(a.isLocalCurrencyLoan?null===(n=a.localDetail.fxRate)||void 0===n?void 0:n.toFixed(2):"0"),I=k[0],S=k[1],G=(0,f.useState)(g),F=G[0],E=G[1],R=(0,f.useState)(_),W=R[0],T=R[1],Z=(0,f.useState)(N),B=Z[0],$=Z[1],z=(0,f.useState)(a.isLocalCurrencyLoan?(0,y.IA)(Number.parseFloat((Number(N)*Number(a.localDetail.fxRate)).toFixed(2))):N),q=z[0],H=z[1],J=(0,f.useState)(M),U=J[0],V=J[1],X=(0,f.useState)(L),Q=X[0],Y=X[1],K=(0,f.useState)(!1),ee=K[0],ne=K[1],te=(0,f.useState)(!1),ae=te[0],re=te[1],ie=(0,f.useState)(!1),oe=ie[0],le=ie[1],se=(0,f.useState)(""),ce=se[0],ue=se[1],de=(0,f.useMemo)((function(){return oe?function(e,n,t,a,r){var i=Math.trunc(Date.now()/1e3);return(0,y.xA)((0,y.qJ)(e,y.bM,i,n,i+t/a).interestOutstanding,r)}((0,d.vz)(O,r),Number(U),Number(F)*y.L$,parseInt(W,10),r):B}),[oe,O,r,U,F,W,B]),me=(0,f.useMemo)((function(){return oe?(0,y.IA)(Number.parseFloat((Number(de)*Number(I)).toFixed(2))):q}),[oe,de,q]),fe=(0,f.useMemo)((function(){var e=Math.trunc(Date.now()/1e3);if(!O||!D||!I||!F||!U||!W||!de)return[y.bM,!1,null];var n=(0,d.vz)(O,r),t=Number(F),a=parseInt(W,10);return[n,t%1===0&&a===t,{amount:n,duration:Number(F)*y.L$,apr:Number(U),borrowedTime:e,installments:a,installmentAmount:(0,d.vz)(de,r),details:{baseAmountRepaid:y.wL,totalAmountRepaid:y.wL,interestPaid:y.wL,interestPaidUntil:e}}]}),[O,D,I,r,F,U,W,de]),ye=fe[0],he=fe[1],pe=fe[2],xe=(0,p.uh)(pe,u.O$.from((1e6*Number(me)).toFixed(0)),Number(I)),be=(0,f.useCallback)((function(e){e.preventDefault(),ne(!0),s((0,d.vz)(O,r),u.O$.from(Number(F)*y.L$),(0,d.vz)(de,r),parseInt(W,10),10*Number(U),Number(Q)*y.u3,{localLoanAmount:D.toString(),localCurrencyCode:a.localDetail.localCurrencyCode,fxRate:Number(I),localInstallmentAmount:me}).catch((function(){ne(!1)}))}),[O,D,I,F,Q,de,W,U,r,s]),je=(0,f.useCallback)((function(){re(!0),c().catch((function(){re(!1)}))}),[c]),ve=(0,f.useMemo)((function(){return!(0,y.BJ)(O,r,i.minLoanAmount)}),[O,i.minLoanAmount,r]),ge=(0,f.useMemo)((function(){return!(0,y.BJ)(D,r,u.O$.from(i.minLoanAmount).mul((100*Number(I)).toFixed(0)).div(100))}),[D,i.minLoanAmount,r]),_e=(0,f.useMemo)((function(){var e=Number(F)*y.L$;return e<i.minLoanDuration?"Minimum duration is ".concat(i.minLoanDuration/y.u3," day"):e>i.maxLoanDuration?"Maximum duration is ".concat(i.maxLoanDuration/y.eV," years"):""}),[F,i.minLoanDuration,i.maxLoanDuration]),Ne=(0,f.useMemo)((function(){return!(0,y.BJ)(de,r,y.bM)}),[de,r]),Me=(0,f.useMemo)((function(){return!(0,y.BJ)(me,2,y.bM)}),[me]),Le=(0,f.useMemo)((function(){return Number(U)<=0}),[U]),we=(0,f.useMemo)((function(){var e=parseInt(W,10);return e<1?"Installments must be at least 1":e>Number(F)*y.L$/y.u3?"Installments can not be more than the duration in days":""}),[F,W]),Oe=(0,f.useMemo)((function(){var e=Number(Q);return e<3?"Grace default period must be at least 3":e>365?"Grace default period must be less than 365":""}),[Q]),Ae=(0,f.useMemo)((function(){return{localLoanAmount:D,localCurrencyCode:a.localDetail.localCurrencyCode,fxRate:Number(I)}}),[D,I,q]);return(0,j.jsx)(h.u_,{onClose:o,children:(0,j.jsxs)("form",{onSubmit:be,className:l().dynamic([["915165999",[y.G9,y.LM]]]),children:[(0,j.jsx)("h3",{className:l().dynamic([["915165999",[y.G9,y.LM]]]),children:x?"Update Offer":"Offer a Loan"}),(0,j.jsxs)("div",{className:l().dynamic([["915165999",[y.G9,y.LM]]])+" field",children:[(0,j.jsx)("div",{className:l().dynamic([["915165999",[y.G9,y.LM]]])+" label",children:"Account"}),(0,j.jsx)("div",{className:l().dynamic([["915165999",[y.G9,y.LM]]]),children:(0,j.jsx)(h.s_,{address:a.borrower})})]}),(0,j.jsxs)("div",{className:l().dynamic([["915165999",[y.G9,y.LM]]])+" field",children:[(0,j.jsx)("div",{className:l().dynamic([["915165999",[y.G9,y.LM]]])+" label",children:"Name"}),(0,j.jsx)("div",{className:l().dynamic([["915165999",[y.G9,y.LM]]]),children:a.name})]}),(0,j.jsxs)("div",{className:l().dynamic([["915165999",[y.G9,y.LM]]])+" field",children:[(0,j.jsx)("div",{className:l().dynamic([["915165999",[y.G9,y.LM]]])+" label",children:"Business Name"}),(0,j.jsx)("div",{className:l().dynamic([["915165999",[y.G9,y.LM]]]),children:a.businessName})]}),a.phone?(0,j.jsxs)("div",{className:l().dynamic([["915165999",[y.G9,y.LM]]])+" field",children:[(0,j.jsx)("div",{className:l().dynamic([["915165999",[y.G9,y.LM]]])+" label",children:"Phone"}),(0,j.jsx)("div",{className:l().dynamic([["915165999",[y.G9,y.LM]]]),children:(0,j.jsx)("a",{href:"tel:".concat(a.phone),className:l().dynamic([["915165999",[y.G9,y.LM]]]),children:a.phone})})]}):null,a.email?(0,j.jsxs)("div",{className:l().dynamic([["915165999",[y.G9,y.LM]]])+" field",children:[(0,j.jsx)("div",{className:l().dynamic([["915165999",[y.G9,y.LM]]])+" label",children:"Email"}),(0,j.jsx)("div",{className:l().dynamic([["915165999",[y.G9,y.LM]]]),children:(0,j.jsx)("a",{href:"mailto:".concat(a.email),className:l().dynamic([["915165999",[y.G9,y.LM]]]),children:a.email})})]}):null,a.email||a.phone?null:(0,j.jsx)(h.zx,{type:"button",stone:!0,onClick:m,style:{marginTop:16},children:"Get contact information"}),a.isLocalCurrencyLoan?(0,j.jsxs)("label",{className:l().dynamic([["915165999",[y.G9,y.LM]]]),children:[(0,j.jsx)("div",{className:l().dynamic([["915165999",[y.G9,y.LM]]])+" label",children:"Amount in Local Currency"}),(0,j.jsx)(h._Z,{invalid:!0,decimals:2,value:D,onChange:function(e){P(e);var n=(e&&e.trim().length>=1?Number(e):0)/Number(I);A((0,y.IA)(Number.parseFloat(n.toFixed(2))))},disabled:ee,currency:a.localDetail.localCurrencyCode}),ge?(0,j.jsx)(h.bZ,{style:"error",title:"Minimum amount is ".concat((0,y.nx)(u.O$.from(i.minLoanAmount).mul((100*Number(I)).toFixed(0)).div(100),r))}):null]}):null,(0,j.jsxs)("label",{className:l().dynamic([["915165999",[y.G9,y.LM]]]),children:[(0,j.jsx)("div",{className:l().dynamic([["915165999",[y.G9,y.LM]]])+" label",children:"Amount"}),(0,j.jsx)(h._Z,{decimals:r,value:O,onChange:function(e){A(e);var n=e&&e.trim().length>=1?Number(e):0,t=n>0?(0,y.IA)(Number.parseFloat((Number(D)/n).toFixed(2))):0;S(t)},disabled:ee,invalid:ve}),ve?(0,j.jsx)(h.bZ,{style:"error",title:"Minimum amount is ".concat((0,y.nx)(u.O$.from(i.minLoanAmount),r))}):null]}),a.isLocalCurrencyLoan?(0,j.jsxs)("label",{className:l().dynamic([["915165999",[y.G9,y.LM]]]),children:[(0,j.jsx)("div",{className:l().dynamic([["915165999",[y.G9,y.LM]]])+" label",children:"FX Rate, 1 USDT ="}),(0,j.jsx)(h._Z,{invalid:!0,decimals:2,value:I,onChange:function(e){S(e);var n=e&&e.trim().length>=1?Number(e):0,t=n>0?(0,y.IA)(Number.parseFloat((Number(D)/n).toFixed(2))):0;A(t);var a=n>0?(0,y.IA)(Number.parseFloat((Number(q)/n).toFixed(2))):0;$(a)},disabled:ee,currency:a.localDetail.localCurrencyCode})]}):null,(0,j.jsxs)("label",{className:l().dynamic([["915165999",[y.G9,y.LM]]]),children:[(0,j.jsx)("div",{className:l().dynamic([["915165999",[y.G9,y.LM]]])+" label",children:"Duration"}),(0,j.jsx)(h._Z,{decimals:100,value:F,onChange:E,disabled:ee,invalid:Boolean(_e),noToken:!0,label:"months",paddingRight:60}),_e?(0,j.jsx)(h.bZ,{style:"error",title:_e}):null]}),(0,j.jsxs)("label",{className:l().dynamic([["915165999",[y.G9,y.LM]]]),children:[(0,j.jsx)("div",{className:l().dynamic([["915165999",[y.G9,y.LM]]])+" label",children:"Installments"}),(0,j.jsx)(h._Z,{decimals:0,value:W,onChange:T,disabled:ee,invalid:Boolean(we),noToken:!0}),we?(0,j.jsx)(h.bZ,{style:"error",title:we}):null]}),(0,j.jsxs)("label",{className:l().dynamic([["915165999",[y.G9,y.LM]]]),children:[(0,j.jsx)("div",{className:l().dynamic([["915165999",[y.G9,y.LM]]])+" label",children:"Interest p/a"}),(0,j.jsx)(h._Z,{decimals:1,value:U,onChange:V,disabled:ee,invalid:Le,noToken:!0,label:"%",paddingRight:26}),Le?(0,j.jsx)(h.bZ,{style:"error",title:"Invalid interest"}):null]}),(0,j.jsxs)("label",{className:l().dynamic([["915165999",[y.G9,y.LM]]]),children:[(0,j.jsx)("div",{className:l().dynamic([["915165999",[y.G9,y.LM]]])+" label",children:"Local Installment Amount"}),(0,j.jsx)(h._Z,{decimals:2,value:me,onChange:function(e){H(e);var n=(e&&e.trim().length>=1?Number(e):0)/Number(I);$((0,y.IA)(Number.parseFloat(n.toFixed(6))))},disabled:ee||oe,invalid:Me,currency:a.localDetail.localCurrencyCode}),Me?(0,j.jsx)(h.bZ,{style:"error",title:"Invalid installment amount"}):null]}),(0,j.jsxs)("label",{className:l().dynamic([["915165999",[y.G9,y.LM]]]),children:[(0,j.jsx)("div",{className:l().dynamic([["915165999",[y.G9,y.LM]]])+" label",children:"Installment Amount"}),(0,j.jsx)(h._Z,{decimals:r,value:de,onChange:function(e){$(e);var n=(e&&e.trim().length>=1?Number(e):0)*Number(I);H((0,y.IA)(Number.parseFloat(n.toFixed(2))))},disabled:ee||oe,invalid:Ne}),(0,j.jsxs)("label",{className:l().dynamic([["915165999",[y.G9,y.LM]]])+" checkbox",children:[(0,j.jsx)("input",{type:"checkbox",checked:oe,onChange:function(){oe?($(ce),le(!1)):(ue(B),le(!0))},className:l().dynamic([["915165999",[y.G9,y.LM]]])}),"Interest only"]}),Ne?(0,j.jsx)(h.bZ,{style:"error",title:"Invalid installment amount"}):null]}),(0,j.jsxs)("label",{className:l().dynamic([["915165999",[y.G9,y.LM]]]),children:[(0,j.jsx)("div",{className:l().dynamic([["915165999",[y.G9,y.LM]]])+" label",children:"Grace Default Period"}),(0,j.jsx)(h._Z,{decimals:2,value:Q,onChange:Y,disabled:ee,invalid:Boolean(Oe),noToken:!0,label:"days",paddingRight:44}),Oe?(0,j.jsx)(h.bZ,{style:"error",title:Oe}):null]}),(0,j.jsx)("div",{className:l().dynamic([["915165999",[y.G9,y.LM]]])+" schedule-container",children:(0,j.jsx)(h.JJ,{amount:ye,monthly:he,schedule:xe,liquidityTokenDecimals:r,isLocalCurrencyLoan:null!==(t=a.isLocalCurrencyLoan)&&void 0!==t&&t,localDetail:Ae})}),(0,j.jsxs)("div",{className:l().dynamic([["915165999",[y.G9,y.LM]]])+" buttons",children:[(0,j.jsx)(h.zx,{disabled:Boolean(ee||ae||ve||_e||we||Le||Ne||Oe),loading:ee,type:"submit",children:x?"Update Offer":"Offer Loan"}),(0,j.jsx)(h.zx,{disabled:ee||ae,loading:ae,onClick:je,type:"button",stone:!0,children:x?"Cancel Offer":"Reject Application"})]}),(0,j.jsx)(l(),{id:"915165999",dynamic:[y.G9,y.LM],children:["form.__jsx-style-dynamic-selector{padding:20px;}","form.__jsx-style-dynamic-selector>h3.__jsx-style-dynamic-selector{margin-top:0;}","form.__jsx-style-dynamic-selector>.field.__jsx-style-dynamic-selector,form.__jsx-style-dynamic-selector>label.__jsx-style-dynamic-selector{display:block;margin-top:16px;}","form.__jsx-style-dynamic-selector>.field.__jsx-style-dynamic-selector>.label.__jsx-style-dynamic-selector,form.__jsx-style-dynamic-selector>label.__jsx-style-dynamic-selector>.label.__jsx-style-dynamic-selector{color:var(--color-secondary);font-weight:400;margin-bottom:8px;}","form.__jsx-style-dynamic-selector>.field.__jsx-style-dynamic-selector>.checkbox.__jsx-style-dynamic-selector,form.__jsx-style-dynamic-selector>label.__jsx-style-dynamic-selector>.checkbox.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","form.__jsx-style-dynamic-selector>.field.__jsx-style-dynamic-selector>.checkbox.__jsx-style-dynamic-selector>input[type=checkbox].__jsx-style-dynamic-selector,form.__jsx-style-dynamic-selector>label.__jsx-style-dynamic-selector>.checkbox.__jsx-style-dynamic-selector>input[type=checkbox].__jsx-style-dynamic-selector{width:16px;height:16px;margin-right:4px;}","form.__jsx-style-dynamic-selector>.field.__jsx-style-dynamic-selector>.alert,form.__jsx-style-dynamic-selector>label.__jsx-style-dynamic-selector>.alert{margin-top:8px;}","form.__jsx-style-dynamic-selector>.buttons.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}","form.__jsx-style-dynamic-selector>.buttons.__jsx-style-dynamic-selector>button{margin:16px 8px 0 0;}","form.__jsx-style-dynamic-selector>.schedule-container.__jsx-style-dynamic-selector{color:".concat(y.G9,";background-color:").concat(y.LM,";margin-top:16px;padding:12px 16px;border-radius:8px;}")]})]})})}N.getInitialProps=function(e){return{address:(0,y.Kn)(e.query.address)}},n.default=N},5243:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/[address]",function(){return t(9534)}])},9008:function(e,n,t){e.exports=t(6505)}},function(e){e.O(0,[774,888,179],(function(){return n=5243,e(e.s=n);var n}));var n=e.O();_N_E=n}]);