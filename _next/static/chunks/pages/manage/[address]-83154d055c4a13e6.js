(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[634],{7285:function(e,n,t){"use strict";var a;Object.defineProperty(n,"__esModule",{value:!0}),n.AmpStateContext=void 0;var r=((a=t(7294))&&a.__esModule?a:{default:a}).default.createContext({});n.AmpStateContext=r},9546:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.isInAmpMode=l,n.useAmp=function(){return l(r.default.useContext(i.AmpStateContext))};var a,r=(a=t(7294))&&a.__esModule?a:{default:a},i=t(7285);function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.ampFirst,t=void 0!==n&&n,a=e.hybrid,r=void 0!==a&&a,i=e.hasQuery,l=void 0!==i&&i;return t||r&&l}},6505:function(e,n,t){"use strict";var a=t(930);function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}Object.defineProperty(n,"__esModule",{value:!0}),n.defaultHead=d,n.default=void 0;var i,l=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};a.get||a.set?Object.defineProperty(n,t,a):n[t]=e[t]}return n.default=e,n}(t(7294)),o=(i=t(8252))&&i.__esModule?i:{default:i},s=t(7285),c=t(523),u=t(9546);t(7206);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=[l.default.createElement("meta",{charSet:"utf-8"})];return e||n.push(l.default.createElement("meta",{name:"viewport",content:"width=device-width"})),n}function m(e,n){return"string"===typeof n||"number"===typeof n?e:n.type===l.default.Fragment?e.concat(l.default.Children.toArray(n.props.children).reduce((function(e,n){return"string"===typeof n||"number"===typeof n?e:e.concat(n)}),[])):e.concat(n)}var f=["name","httpEquiv","charSet","itemProp"];function h(e,n){return e.reduce((function(e,n){var t=l.default.Children.toArray(n.props.children);return e.concat(t)}),[]).reduce(m,[]).reverse().concat(d(n.inAmpMode)).filter(function(){var e=new Set,n=new Set,t=new Set,a={};return function(r){var i=!0,l=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){l=!0;var o=r.key.slice(r.key.indexOf("$")+1);e.has(o)?i=!1:e.add(o)}switch(r.type){case"title":case"base":n.has(r.type)?i=!1:n.add(r.type);break;case"meta":for(var s=0,c=f.length;s<c;s++){var u=f[s];if(r.props.hasOwnProperty(u))if("charSet"===u)t.has(u)?i=!1:t.add(u);else{var d=r.props[u],m=a[u]||new Set;"name"===u&&l||!m.has(d)?(m.add(d),a[u]=m):i=!1}}}return i}}()).reverse().map((function(e,t){var i=e.key||t;if(!n.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(n){return e.props.href.startsWith(n)}))){var o=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,l.default.cloneElement(e,o)}return l.default.cloneElement(e,{key:i})}))}var y=function(e){var n=e.children,t=l.useContext(s.AmpStateContext),a=l.useContext(c.HeadManagerContext);return l.default.createElement(o.default,{reduceComponentsToState:h,headManager:a,inAmpMode:u.isInAmpMode(t)},n)};n.default=y},8252:function(e,n,t){"use strict";var a=t(7980),r=t(3227),i=t(8361),l=(t(2191),t(5971)),o=t(2715),s=t(1193);function c(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=s(e);if(n){var r=s(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return o(this,t)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};a.get||a.set?Object.defineProperty(n,t,a):n[t]=e[t]}return n.default=e,n}(t(7294));var d=function(e){l(t,e);var n=c(t);function t(e){var i;return r(this,t),(i=n.call(this,e)).emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(a(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(t,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),t}(u.Component);n.default=d},9534:function(e,n,t){"use strict";t.r(n);var a=t(29),r=t(9499),i=t(6835),l=t(5988),o=t.n(l),s=t(7794),c=t.n(s),u=t(2593),d=t(1744),m=t(9008),f=t(7294),h=t(9310),y=t(5462),p=t(2563),x=t(6594),b=t(5533),j=t(5893);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var _="Earn - ".concat(h.iC),N=function(e){var n=e.address,t=(0,x.v9)((function(e){return e.pools[n]})),a=(0,h.mA)(),r=(0,x.I0)(),i=(0,f.useRef)("");(0,f.useEffect)((function(){t&&i.current!==n&&(i.current=n,r((0,p.YO)({poolAddress:n,loanDeskAddress:t.loanDeskAddress})))}),[n,r,t]);var l=(0,j.jsxs)(m.default,{children:[(0,j.jsx)("title",{children:_}),(0,j.jsx)("link",{rel:"icon",href:"".concat(h.O4,"/favicon.svg")})]});return t&&t.borrowInfo?(0,j.jsxs)(y.T3,{children:[l,(0,j.jsx)(y.VB,{href:"/manage"}),(0,j.jsx)("h1",{children:t.name}),t?t.managerAddress===a?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(M,{pool:t,poolAddress:n,account:a}),(0,j.jsx)(y.Ng,{pool:t,poolAddress:n})]}):(0,j.jsx)("h3",{children:"Login with manager wallet"}):(0,j.jsx)("h3",{children:"Loading\u2026"})]}):(0,j.jsx)(y.SX,{children:l})};function M(e){var n=e.pool,t=n.loanDeskAddress,r=n.liquidityTokenDecimals,l=n.block,s=n.borrowInfo,u=e.poolAddress,d=e.account,m=(0,x.I0)(),v=(0,h.yL)(),_=(0,f.useState)(null),N=_[0],M=_[1];(0,f.useEffect)((function(){var e=!1,n=p.Ed.attach(t),a=h.Kj===h.p5.mumbai?40:20,r=(0,p.qm)(a,n).contract;return Promise.all(Array.from({length:a}).map((function(e,n){return r.loanApplications(n+1)}))).then((function(t){return e?[]:Promise.allSettled(t.filter((function(e){return e.status===p.WR.APPLIED||e.status===p.WR.OFFER_MADE})).map((function(e){return Promise.all([(0,h.rY)(e.id.toNumber()).then((function(n){return fetch("".concat(h.g9,"/profile/").concat(e.profileId)).then((function(e){return e.json()})).then((function(n){return(0,h.wQ)(e.id.toNumber(),n),n}))})),e.status===p.WR.OFFER_MADE?n.loanOffers(e.id).then((function(e){return{graceDefaultPeriod:e.gracePeriod.toNumber(),installmentAmount:e.installmentAmount,installments:e.installments,interest:e.apr,amount:e.amount,duration:e.duration}})):void 0]).then((function(n){var t=(0,i.Z)(n,2),a=t[0],r=t[1];return g(g(g(g({},a),e),r),{},{id:e.id.toNumber()})}))})))})).then((function(n){e||M(n.filter((function(e){return"fulfilled"===e.status})).map((function(e){return e.value})))})).catch((function(e){console.error(e)})),function(){e=!0,M(null)}}),[l,t,v]);var w=(0,f.useState)(null),A=w[0],C=w[1];return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(y.xu,{children:[(0,j.jsx)("h2",{className:o().dynamic([["123951469",[h.wP]]]),children:"Loans awaiting approval"}),(0,j.jsx)("div",{className:o().dynamic([["123951469",[h.wP]]])+" "+((null===N?void 0:"grid")||""),children:N?N.length?L(N.filter((function(e){return e.status===p.WR.APPLIED})),C,r):"No loans awaiting approval":(0,j.jsx)("div",{className:o().dynamic([["123951469",[h.wP]]])+" loading",children:(0,j.jsx)(b.iT,{speed:.7,stroke:h.wP,width:32,height:32})})})]}),(0,j.jsxs)(y.xu,{children:[(0,j.jsx)("h2",{className:o().dynamic([["123951469",[h.wP]]]),children:"Active offers"}),(0,j.jsx)("div",{className:o().dynamic([["123951469",[h.wP]]])+" "+((null===N?void 0:"grid")||""),children:N?N.length?L(N.filter((function(e){return e.status===p.WR.OFFER_MADE})),C,r):"No active offers":(0,j.jsx)("div",{className:o().dynamic([["123951469",[h.wP]]])+" loading",children:(0,j.jsx)(b.iT,{speed:.7,stroke:h.wP,width:32,height:32})})})]}),A?(0,j.jsx)(O,{loan:A,liquidityTokenDecimals:r,borrowInfo:s,onClose:function(){return C(null)},onOffer:function(e,n,a,i,l,o,s){var c=p.Ed.attach(t).connect(v.getSigner()),f=A.status===p.WR.OFFER_MADE,y=v.getSigner();return(0,h.So)(d,y).then((function(e){return fetch("".concat(h.g9,"/profile/").concat(A.profileId,"?").concat(new URLSearchParams(g(g({},e),{},{poolAddress:u}))),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({localDetail:s})})})).then((function(e){if(!e.ok)throw new Error("Error when updating loan application!");A&&(0,h.rY)(null===A||void 0===A?void 0:A.id).then((function(e){e&&(0,h.wQ)(null===A||void 0===A?void 0:A.id,g(g({},e),{},{localDetail:s}))}))})).then((function(){return f?c.updateOffer(A.id,e,n,o,a,i,l).then((function(e){return{tx:e,name:"Update offer"}})):c.offerLoan(A.id,e,n,o,a,i,l).then((function(n){return{tx:n,name:"Offer a loan for ".concat((0,h.nx)(e,r)," ").concat(h.ob)}}))})).then((function(e){var n=e.tx,t=e.name;return(0,p.y5)(m,{name:t,tx:n})})).then((function(){C(null),M(N.map((function(t){return t===A?g(g({},t),{},{status:p.WR.OFFER_MADE,amount:e,duration:n,graceDefaultPeriod:o,installmentAmount:a,installments:i,interest:l}):t})))})).catch((function(e){throw console.error(e),e}))},onReject:function(){var e=p.Ed.attach(t).connect(v.getSigner());return(A.status===p.WR.OFFER_MADE?e.cancelLoan(A.id).then((function(e){return{tx:e,name:"Cancel loan",newStatus:p.WR.OFFER_CANCELLED}})):e.denyLoan(A.id).then((function(e){return{tx:e,name:"Reject loan",newStatus:p.WR.DENIED}}))).then((function(e){var n=e.tx,t=e.name,a=e.newStatus;return(0,p.y5)(m,{name:t,tx:n}).then((function(){return a}))})).then((function(e){C(null),M(N.map((function(n){return n===A?g(g({},n),{},{status:e}):n})))})).catch((function(e){throw console.error(e),e}))},onFetchBorrowerInfo:(0,a.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.Mj)(u,A.id,A.profileId,d,v.getSigner());case 2:n=e.sent,t=g(g({},A),{},{phone:n.phone,email:n.email}),C(t),M(N.map((function(e){return e===A?t:e})));case 6:case"end":return e.stop()}}),e)})))}):null,(0,j.jsx)(o(),{id:"123951469",dynamic:[h.wP],children:["h2.__jsx-style-dynamic-selector{font-size:16px;margin-top:0;}",".loading.__jsx-style-dynamic-selector>svg{display:block;margin:10px auto 0;}",".grid.__jsx-style-dynamic-selector{display:grid;grid-template-columns:30% 50% 20%;}",".grid.__jsx-style-dynamic-selector>.name{margin-right:24px;margin-bottom:12px;}",".grid.__jsx-style-dynamic-selector>.name>span{color:".concat(h.wP,";cursor:pointer;}")]})]})}function L(e,n,t){return e.map((function(e){return(0,j.jsxs)(f.Fragment,{children:[(0,j.jsx)("div",{className:"name",children:(0,j.jsx)("span",{onClick:function(){return n(e)},children:e.name})}),(0,j.jsx)("div",{className:"description",children:(0,j.jsxs)("span",{children:[e.isLocalCurrencyLoan?(0,j.jsxs)(j.Fragment,{children:[Number(e.localDetail.localLoanAmount).toFixed(2)," ",e.localDetail.localCurrencyCode," ","("]}):null,(0,h.nx)(e.amount,t,2)," ",h.ob,e.isLocalCurrencyLoan?(0,j.jsx)(j.Fragment,{children:")"}):null," ","for"," ",(0,y.DL)(e.duration.toNumber())," months"]})}),(0,j.jsx)("div",{children:" "})]},e.id)}))}function O(e){var n,t,a=e.loan,r=e.liquidityTokenDecimals,i=e.borrowInfo,l=e.onClose,s=e.onOffer,c=e.onReject,m=e.onFetchBorrowerInfo,x=a.status===p.WR.OFFER_MADE,b=(0,f.useMemo)((function(){var e=(0,h.xA)(a.amount,r),n=a.duration.toNumber(),t=(0,y.DL)(n),l=t.toString();if(x)return{initialAmount:e,initialMonths:l,initialInstallments:a.installments.toString(),initialInstallmentAmount:(0,h.xA)(a.installmentAmount,r),initialInterestValue:(a.interest/10).toString(),initialGraceDefaultPeriod:(a.graceDefaultPeriod/h.u3).toString()};var o=Math.max(Math.ceil(t),1);return{initialAmount:e,initialMonths:l,initialInstallments:o.toString(),initialInstallmentAmount:(0,h.xA)((0,h.Ci)(a.amount,i.apr,o,n),r),initialInterestValue:i.apr.toString(),initialGraceDefaultPeriod:"35"}}),[x,r,a,i]),v=b.initialAmount,g=b.initialMonths,_=b.initialInstallments,N=b.initialInstallmentAmount,M=b.initialInterestValue,L=b.initialGraceDefaultPeriod,O=(0,f.useState)(v),w=O[0],A=O[1],C=(0,f.useState)(a.isLocalCurrencyLoan?Number(a.localDetail.localLoanAmount).toFixed(2):"0"),D=C[0],P=C[1],k=(0,f.useState)(a.isLocalCurrencyLoan?null===(n=a.localDetail.fxRate)||void 0===n?void 0:n.toFixed(2):"0"),I=k[0],S=k[1],G=(0,f.useState)(g),F=G[0],E=G[1],R=(0,f.useState)(_),T=R[0],Z=R[1],B=(0,f.useState)(N),W=B[0],$=B[1],z=(0,f.useState)(a.isLocalCurrencyLoan?(0,h.IA)(Number.parseFloat((Number(N)*Number(a.localDetail.fxRate)).toFixed(2))):N),q=z[0],H=z[1],J=(0,f.useState)(M),U=J[0],V=J[1],X=(0,f.useState)(L),Q=X[0],Y=X[1],K=(0,f.useState)(!1),ee=K[0],ne=K[1],te=(0,f.useState)(!1),ae=te[0],re=te[1],ie=(0,f.useState)(!1),le=ie[0],oe=ie[1],se=(0,f.useState)(!0),ce=se[0],ue=se[1],de=(0,f.useState)(""),me=de[0],fe=de[1],he=(0,f.useMemo)((function(){return le?function(e,n,t,a,r){var i=Math.trunc(Date.now()/1e3);return(0,h.xA)((0,h.qJ)(e,h.bM,i,n,i+t/a).interestOutstanding,r)}((0,d.vz)(w,r),Number(U),Number(F)*h.L$,parseInt(T,10),r):ce?(0,h.xA)((0,h.Ci)((0,d.vz)(w.length>0?w:"0",r),Number(U.length>0&&Number(U)>0?U:"1"),Math.max(parseInt(T.length>0?T:_,10),1),Number(F.length>0?F:a.duration.toNumber())*h.L$),r):W}),[le,ce,w,r,U,F,T,W]),ye=(0,f.useMemo)((function(){return le||ce?(0,h.IA)(Number.parseFloat((Number(he)*Number(I)).toFixed(2))):q}),[le,ce,he,q]),pe=(0,f.useMemo)((function(){var e=Math.trunc(Date.now()/1e3);if(!w||!D||!I||!F||!U||!T||!he)return[h.bM,!1,null];var n=(0,d.vz)(w,r),t=Number(F),a=parseInt(T,10);return[n,t%1===0&&a===t,{amount:n,duration:Number(F)*h.L$,apr:Number(U),borrowedTime:e,installments:a,installmentAmount:(0,d.vz)(he,r),details:{baseAmountRepaid:h.wL,totalAmountRepaid:h.wL,interestPaid:h.wL,interestPaidUntil:e}}]}),[w,D,I,r,F,U,T,he]),xe=pe[0],be=pe[1],je=pe[2],ve=(0,p.uh)(je,u.O$.from((1e6*Number(ye)).toFixed(0)),Number(I)),ge=(0,f.useCallback)((function(e){e.preventDefault(),ne(!0),s((0,d.vz)(w,r),u.O$.from(Number(F)*h.L$),(0,d.vz)(he,r),parseInt(T,10),10*Number(U),Number(Q)*h.u3,{localLoanAmount:D.toString(),localCurrencyCode:a.localDetail.localCurrencyCode,fxRate:Number(I),localInstallmentAmount:ye}).catch((function(){ne(!1)}))}),[w,D,I,F,Q,he,T,U,r,s]),_e=(0,f.useCallback)((function(){re(!0),c().catch((function(){re(!1)}))}),[c]),Ne=(0,f.useMemo)((function(){return!(0,h.BJ)(w,r,i.minLoanAmount)}),[w,i.minLoanAmount,r]),Me=(0,f.useMemo)((function(){return!(0,h.BJ)(D,r,u.O$.from(i.minLoanAmount).mul((100*Number(I)).toFixed(0)).div(100))}),[D,i.minLoanAmount,r]),Le=(0,f.useMemo)((function(){var e=Number(F)*h.L$;return e<i.minLoanDuration?"Minimum duration is ".concat(i.minLoanDuration/h.u3," day"):e>i.maxLoanDuration?"Maximum duration is ".concat(i.maxLoanDuration/h.eV," years"):""}),[F,i.minLoanDuration,i.maxLoanDuration]),Oe=(0,f.useMemo)((function(){return!(0,h.BJ)(he,r,h.bM)}),[he,r]),we=(0,f.useMemo)((function(){return!(0,h.BJ)(ye,2,h.bM)}),[ye]),Ae=(0,f.useMemo)((function(){return Number(U)<=0}),[U]),Ce=(0,f.useMemo)((function(){var e=parseInt(T,10);return e<1?"Installments must be at least 1":e>Number(F)*h.L$/h.u3?"Installments can not be more than the duration in days":""}),[F,T]),De=(0,f.useMemo)((function(){var e=Number(Q);return e<3?"Grace default period must be at least 3":e>365?"Grace default period must be less than 365":""}),[Q]),Pe=(0,f.useMemo)((function(){return{localLoanAmount:D,localCurrencyCode:a.localDetail.localCurrencyCode,fxRate:Number(I)}}),[D,I,q]);return(0,j.jsx)(y.u_,{onClose:l,children:(0,j.jsxs)("form",{onSubmit:ge,className:o().dynamic([["915165999",[h.G9,h.LM]]]),children:[(0,j.jsx)("h3",{className:o().dynamic([["915165999",[h.G9,h.LM]]]),children:x?"Update Offer":"Offer a Loan"}),(0,j.jsxs)("div",{className:o().dynamic([["915165999",[h.G9,h.LM]]])+" field",children:[(0,j.jsx)("div",{className:o().dynamic([["915165999",[h.G9,h.LM]]])+" label",children:"Account"}),(0,j.jsx)("div",{className:o().dynamic([["915165999",[h.G9,h.LM]]]),children:(0,j.jsx)(y.s_,{address:a.borrower})})]}),(0,j.jsxs)("div",{className:o().dynamic([["915165999",[h.G9,h.LM]]])+" field",children:[(0,j.jsx)("div",{className:o().dynamic([["915165999",[h.G9,h.LM]]])+" label",children:"Name"}),(0,j.jsx)("div",{className:o().dynamic([["915165999",[h.G9,h.LM]]]),children:a.name})]}),(0,j.jsxs)("div",{className:o().dynamic([["915165999",[h.G9,h.LM]]])+" field",children:[(0,j.jsx)("div",{className:o().dynamic([["915165999",[h.G9,h.LM]]])+" label",children:"Business Name"}),(0,j.jsx)("div",{className:o().dynamic([["915165999",[h.G9,h.LM]]]),children:a.businessName})]}),a.phone?(0,j.jsxs)("div",{className:o().dynamic([["915165999",[h.G9,h.LM]]])+" field",children:[(0,j.jsx)("div",{className:o().dynamic([["915165999",[h.G9,h.LM]]])+" label",children:"Phone"}),(0,j.jsx)("div",{className:o().dynamic([["915165999",[h.G9,h.LM]]]),children:(0,j.jsx)("a",{href:"tel:".concat(a.phone),className:o().dynamic([["915165999",[h.G9,h.LM]]]),children:a.phone})})]}):null,a.email?(0,j.jsxs)("div",{className:o().dynamic([["915165999",[h.G9,h.LM]]])+" field",children:[(0,j.jsx)("div",{className:o().dynamic([["915165999",[h.G9,h.LM]]])+" label",children:"Email"}),(0,j.jsx)("div",{className:o().dynamic([["915165999",[h.G9,h.LM]]]),children:(0,j.jsx)("a",{href:"mailto:".concat(a.email),className:o().dynamic([["915165999",[h.G9,h.LM]]]),children:a.email})})]}):null,a.email||a.phone?null:(0,j.jsx)(y.zx,{type:"button",stone:!0,onClick:m,style:{marginTop:16},children:"Get contact information"}),a.isLocalCurrencyLoan?(0,j.jsxs)("label",{className:o().dynamic([["915165999",[h.G9,h.LM]]]),children:[(0,j.jsx)("div",{className:o().dynamic([["915165999",[h.G9,h.LM]]])+" label",children:"Amount in Local Currency"}),(0,j.jsx)(y._Z,{invalid:!0,decimals:2,value:D,onChange:function(e){P(e);var n=(e&&e.trim().length>=1?Number(e):0)/Number(I);A((0,h.IA)(Number.parseFloat(n.toFixed(2))))},disabled:ee,currency:a.localDetail.localCurrencyCode}),Me?(0,j.jsx)(y.bZ,{style:"error",title:"Minimum amount is ".concat((0,h.nx)(u.O$.from(i.minLoanAmount).mul((100*Number(I)).toFixed(0)).div(100),r))}):null]}):null,(0,j.jsxs)("label",{className:o().dynamic([["915165999",[h.G9,h.LM]]]),children:[(0,j.jsx)("div",{className:o().dynamic([["915165999",[h.G9,h.LM]]])+" label",children:"Amount"}),(0,j.jsx)(y._Z,{decimals:r,value:w,onChange:function(e){A(e);var n=e&&e.trim().length>=1?Number(e):0,t=n>0?(0,h.IA)(Number.parseFloat((Number(D)/n).toFixed(2))):0;S(t)},disabled:ee,invalid:Ne}),Ne?(0,j.jsx)(y.bZ,{style:"error",title:"Minimum amount is ".concat((0,h.nx)(u.O$.from(i.minLoanAmount),r))}):null]}),a.isLocalCurrencyLoan?(0,j.jsxs)("label",{className:o().dynamic([["915165999",[h.G9,h.LM]]]),children:[(0,j.jsx)("div",{className:o().dynamic([["915165999",[h.G9,h.LM]]])+" label",children:"FX Rate, 1 USDT ="}),(0,j.jsx)(y._Z,{invalid:!0,decimals:2,value:I,onChange:function(e){S(e);var n=e&&e.trim().length>=1?Number(e):0,t=n>0?(0,h.IA)(Number.parseFloat((Number(D)/n).toFixed(2))):0;A(t);var a=n>0?(0,h.IA)(Number.parseFloat((Number(q)/n).toFixed(2))):0;$(a)},disabled:ee,currency:a.localDetail.localCurrencyCode})]}):null,(0,j.jsxs)("label",{className:o().dynamic([["915165999",[h.G9,h.LM]]]),children:[(0,j.jsx)("div",{className:o().dynamic([["915165999",[h.G9,h.LM]]])+" label",children:"Duration"}),(0,j.jsx)(y._Z,{decimals:100,value:F,onChange:E,disabled:ee,invalid:Boolean(Le),noToken:!0,label:"months",paddingRight:60}),Le?(0,j.jsx)(y.bZ,{style:"error",title:Le}):null]}),(0,j.jsxs)("label",{className:o().dynamic([["915165999",[h.G9,h.LM]]]),children:[(0,j.jsx)("div",{className:o().dynamic([["915165999",[h.G9,h.LM]]])+" label",children:"Installments"}),(0,j.jsx)(y._Z,{decimals:0,value:T,onChange:Z,disabled:ee,invalid:Boolean(Ce),noToken:!0}),Ce?(0,j.jsx)(y.bZ,{style:"error",title:Ce}):null]}),(0,j.jsxs)("label",{className:o().dynamic([["915165999",[h.G9,h.LM]]]),children:[(0,j.jsx)("div",{className:o().dynamic([["915165999",[h.G9,h.LM]]])+" label",children:"Interest p/a"}),(0,j.jsx)(y._Z,{decimals:1,value:U,onChange:V,disabled:ee,invalid:Ae,noToken:!0,label:"%",paddingRight:26}),Ae?(0,j.jsx)(y.bZ,{style:"error",title:"Invalid interest"}):null]}),(0,j.jsxs)("label",{className:o().dynamic([["915165999",[h.G9,h.LM]]]),children:[(0,j.jsx)("div",{className:o().dynamic([["915165999",[h.G9,h.LM]]])+" label",children:"Local Installment Amount"}),(0,j.jsx)(y._Z,{decimals:2,value:ye,onChange:function(e){H(e);var n=(e&&e.trim().length>=1?Number(e):0)/Number(I);$((0,h.IA)(Number.parseFloat(n.toFixed(6))))},disabled:ee||le||ce,invalid:we,currency:a.localDetail.localCurrencyCode}),we?(0,j.jsx)(y.bZ,{style:"error",title:"Invalid installment amount"}):null]}),(0,j.jsxs)("label",{className:o().dynamic([["915165999",[h.G9,h.LM]]]),children:[(0,j.jsx)("div",{className:o().dynamic([["915165999",[h.G9,h.LM]]])+" label",children:"Installment Amount"}),(0,j.jsx)(y._Z,{decimals:r,value:he,onChange:function(e){$(e);var n=(e&&e.trim().length>=1?Number(e):0)*Number(I);H((0,h.IA)(Number.parseFloat(n.toFixed(2))))},disabled:ee||le||ce,invalid:Oe}),(0,j.jsxs)("label",{className:o().dynamic([["915165999",[h.G9,h.LM]]])+" checkbox",children:[(0,j.jsx)("input",{type:"checkbox",checked:le,onChange:function(){le?($(me),oe(!1)):(fe(W),oe(!0))},className:o().dynamic([["915165999",[h.G9,h.LM]]])}),"Interest only"]}),(0,j.jsxs)("label",{className:o().dynamic([["915165999",[h.G9,h.LM]]])+" checkbox",children:[(0,j.jsx)("input",{type:"checkbox",checked:ce,onChange:function(){ue(!ce)},className:o().dynamic([["915165999",[h.G9,h.LM]]])}),"Amortized"]}),Oe?(0,j.jsx)(y.bZ,{style:"error",title:"Invalid installment amount"}):null]}),(0,j.jsxs)("label",{className:o().dynamic([["915165999",[h.G9,h.LM]]]),children:[(0,j.jsx)("div",{className:o().dynamic([["915165999",[h.G9,h.LM]]])+" label",children:"Grace Default Period"}),(0,j.jsx)(y._Z,{decimals:2,value:Q,onChange:Y,disabled:ee,invalid:Boolean(De),noToken:!0,label:"days",paddingRight:44}),De?(0,j.jsx)(y.bZ,{style:"error",title:De}):null]}),(0,j.jsx)("div",{className:o().dynamic([["915165999",[h.G9,h.LM]]])+" schedule-container",children:(0,j.jsx)(y.JJ,{amount:xe,monthly:be,schedule:ve,liquidityTokenDecimals:r,isLocalCurrencyLoan:null!==(t=a.isLocalCurrencyLoan)&&void 0!==t&&t,localDetail:Pe})}),(0,j.jsxs)("div",{className:o().dynamic([["915165999",[h.G9,h.LM]]])+" buttons",children:[(0,j.jsx)(y.zx,{disabled:Boolean(ee||ae||Ne||Le||Ce||Ae||Oe||De),loading:ee,type:"submit",children:x?"Update Offer":"Offer Loan"}),(0,j.jsx)(y.zx,{disabled:ee||ae,loading:ae,onClick:_e,type:"button",stone:!0,children:x?"Cancel Offer":"Reject Application"})]}),(0,j.jsx)(o(),{id:"915165999",dynamic:[h.G9,h.LM],children:["form.__jsx-style-dynamic-selector{padding:20px;}","form.__jsx-style-dynamic-selector>h3.__jsx-style-dynamic-selector{margin-top:0;}","form.__jsx-style-dynamic-selector>.field.__jsx-style-dynamic-selector,form.__jsx-style-dynamic-selector>label.__jsx-style-dynamic-selector{display:block;margin-top:16px;}","form.__jsx-style-dynamic-selector>.field.__jsx-style-dynamic-selector>.label.__jsx-style-dynamic-selector,form.__jsx-style-dynamic-selector>label.__jsx-style-dynamic-selector>.label.__jsx-style-dynamic-selector{color:var(--color-secondary);font-weight:400;margin-bottom:8px;}","form.__jsx-style-dynamic-selector>.field.__jsx-style-dynamic-selector>.checkbox.__jsx-style-dynamic-selector,form.__jsx-style-dynamic-selector>label.__jsx-style-dynamic-selector>.checkbox.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","form.__jsx-style-dynamic-selector>.field.__jsx-style-dynamic-selector>.checkbox.__jsx-style-dynamic-selector>input[type=checkbox].__jsx-style-dynamic-selector,form.__jsx-style-dynamic-selector>label.__jsx-style-dynamic-selector>.checkbox.__jsx-style-dynamic-selector>input[type=checkbox].__jsx-style-dynamic-selector{width:16px;height:16px;margin-right:4px;}","form.__jsx-style-dynamic-selector>.field.__jsx-style-dynamic-selector>.alert,form.__jsx-style-dynamic-selector>label.__jsx-style-dynamic-selector>.alert{margin-top:8px;}","form.__jsx-style-dynamic-selector>.buttons.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}","form.__jsx-style-dynamic-selector>.buttons.__jsx-style-dynamic-selector>button{margin:16px 8px 0 0;}","form.__jsx-style-dynamic-selector>.schedule-container.__jsx-style-dynamic-selector{color:".concat(h.G9,";background-color:").concat(h.LM,";margin-top:16px;padding:12px 16px;border-radius:8px;}")]})]})})}N.getInitialProps=function(e){return{address:(0,h.Kn)(e.query.address)}},n.default=N},5243:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/[address]",function(){return t(9534)}])},9008:function(e,n,t){e.exports=t(6505)}},function(e){e.O(0,[774,888,179],(function(){return n=5243,e(e.s=n);var n}));var n=e.O();_N_E=n}]);