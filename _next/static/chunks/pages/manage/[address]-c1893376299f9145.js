(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[634],{7285:function(e,n,t){"use strict";var a;Object.defineProperty(n,"__esModule",{value:!0}),n.AmpStateContext=void 0;var r=((a=t(7294))&&a.__esModule?a:{default:a}).default.createContext({});n.AmpStateContext=r},9546:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.isInAmpMode=o,n.useAmp=function(){return o(r.default.useContext(i.AmpStateContext))};var a,r=(a=t(7294))&&a.__esModule?a:{default:a},i=t(7285);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.ampFirst,t=void 0!==n&&n,a=e.hybrid,r=void 0!==a&&a,i=e.hasQuery,o=void 0!==i&&i;return t||r&&o}},6505:function(e,n,t){"use strict";var a=t(930);function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}Object.defineProperty(n,"__esModule",{value:!0}),n.defaultHead=d,n.default=void 0;var i,o=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};a.get||a.set?Object.defineProperty(n,t,a):n[t]=e[t]}return n.default=e,n}(t(7294)),l=(i=t(8252))&&i.__esModule?i:{default:i},s=t(7285),c=t(523),u=t(9546);t(7206);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=[o.default.createElement("meta",{charSet:"utf-8"})];return e||n.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),n}function m(e,n){return"string"===typeof n||"number"===typeof n?e:n.type===o.default.Fragment?e.concat(o.default.Children.toArray(n.props.children).reduce((function(e,n){return"string"===typeof n||"number"===typeof n?e:e.concat(n)}),[])):e.concat(n)}var f=["name","httpEquiv","charSet","itemProp"];function h(e,n){return e.reduce((function(e,n){var t=o.default.Children.toArray(n.props.children);return e.concat(t)}),[]).reduce(m,[]).reverse().concat(d(n.inAmpMode)).filter(function(){var e=new Set,n=new Set,t=new Set,a={};return function(r){var i=!0,o=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){o=!0;var l=r.key.slice(r.key.indexOf("$")+1);e.has(l)?i=!1:e.add(l)}switch(r.type){case"title":case"base":n.has(r.type)?i=!1:n.add(r.type);break;case"meta":for(var s=0,c=f.length;s<c;s++){var u=f[s];if(r.props.hasOwnProperty(u))if("charSet"===u)t.has(u)?i=!1:t.add(u);else{var d=r.props[u],m=a[u]||new Set;"name"===u&&o||!m.has(d)?(m.add(d),a[u]=m):i=!1}}}return i}}()).reverse().map((function(e,t){var i=e.key||t;if(!n.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(n){return e.props.href.startsWith(n)}))){var l=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e.props||{});return l["data-href"]=l.href,l.href=void 0,l["data-optimized-fonts"]=!0,o.default.cloneElement(e,l)}return o.default.cloneElement(e,{key:i})}))}var y=function(e){var n=e.children,t=o.useContext(s.AmpStateContext),a=o.useContext(c.HeadManagerContext);return o.default.createElement(l.default,{reduceComponentsToState:h,headManager:a,inAmpMode:u.isInAmpMode(t)},n)};n.default=y},8252:function(e,n,t){"use strict";var a=t(7980),r=t(3227),i=t(8361),o=(t(2191),t(5971)),l=t(2715),s=t(1193);function c(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=s(e);if(n){var r=s(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return l(this,t)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};a.get||a.set?Object.defineProperty(n,t,a):n[t]=e[t]}return n.default=e,n}(t(7294));var d=function(e){o(t,e);var n=c(t);function t(e){var i;return r(this,t),(i=n.call(this,e)).emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(a(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(t,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),t}(u.Component);n.default=d},9534:function(e,n,t){"use strict";t.r(n);var a=t(9499),r=t(6835),i=t(5988),o=t.n(i),l=t(2593),s=t(1744),c=t(9008),u=t(7294),d=t(5447),m=t(5462),f=t(2563),h=t(6594),y=t(5533),x=t(5893);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v="Earn - ".concat(d.iC),j=function(e){var n=e.address,t=(0,h.v9)((function(e){return e.pools[n]})),a=(0,d.mA)(),r=(0,h.I0)(),i=(0,u.useRef)("");(0,u.useEffect)((function(){t&&i.current!==n&&(i.current=n,r((0,f.YO)({poolAddress:n,loanDeskAddress:t.loanDeskAddress})))}),[n,r,t]);var o=(0,x.jsxs)(c.default,{children:[(0,x.jsx)("title",{children:v}),(0,x.jsx)("link",{rel:"icon",href:"".concat(d.O4,"/favicon.svg")})]});return t&&t.borrowInfo?(0,x.jsxs)(m.T3,{children:[o,(0,x.jsx)(m.VB,{href:"/manage"}),(0,x.jsx)("h1",{children:t.name}),t?t.managerAddress===a?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g,{pool:t,poolAddress:n,account:a}),(0,x.jsx)(m.Ng,{pool:t,poolAddress:n})]}):(0,x.jsx)("h3",{children:"Login with manager wallet"}):(0,x.jsx)("h3",{children:"Loading\u2026"})]}):(0,x.jsx)(m.SX,{children:o})};function g(e){var n=e.pool,t=n.loanDeskAddress,a=n.liquidityTokenDecimals,i=n.block,l=n.borrowInfo,s=e.poolAddress,c=(e.account,(0,h.I0)()),p=(0,d.yL)(),v=(0,u.useState)(null),j=v[0],g=v[1];(0,u.useEffect)((function(){var e=!1,n=f.Ed.attach(t),a=f.Ed.attach(t),i=d.Kj===d.p5.mumbai?80:40,o=(0,f.qm)(i,n).loanDeskContract;return Promise.all(Array.from({length:i}).map((function(e,n){return o.loanApplications(n+1)}))).then((function(n){return e?[]:Promise.allSettled(n.filter((function(e){return e.status===f.WR.APPLIED||e.status===f.WR.OFFER_DRAFTED||e.status===f.WR.OFFER_DRAFT_LOCKED||e.status===f.WR.OFFER_MADE})).map((function(e){return Promise.all([(0,d.nQ)(e.borrower).then((function(n){return(0,d.wQ)(e.id.toNumber(),n),n})),e.status!==f.WR.APPLIED?a.loanOffers(e.id).then((function(e){return{graceDefaultPeriod:e.gracePeriod.toNumber(),installmentAmount:e.installmentAmount,installments:e.installments,interest:e.apr,amount:e.amount,duration:e.duration,lockedTime:e.lockedTime.toNumber()}})):void 0]).then((function(n){var t=(0,r.Z)(n,2),a=t[0],i=t[1];return b(b(b(b({},a),e),i),{},{id:e.id.toNumber()})}))})))})).then((function(n){e||g(n.filter((function(e){return"fulfilled"===e.status})).map((function(e){return e.value})))})).catch((function(e){console.error(e)})),function(){e=!0,g(null)}}),[i,t,p]);var L=(0,u.useState)(null),M=L[0],O=L[1];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(m.xu,{children:[(0,x.jsx)("h2",{className:o().dynamic([["123951469",[d.wP]]]),children:"Loan requests"}),(0,x.jsx)("div",{className:o().dynamic([["123951469",[d.wP]]])+" "+((null===j?void 0:"grid")||""),children:j?j.length?_(j.filter((function(e){return e.status===f.WR.APPLIED})),O,a):"No loans awaiting approval":(0,x.jsx)("div",{className:o().dynamic([["123951469",[d.wP]]])+" loading",children:(0,x.jsx)(y.iT,{speed:.7,stroke:d.wP,width:32,height:32})})})]}),(0,x.jsxs)(m.xu,{children:[(0,x.jsx)("h2",{className:o().dynamic([["123951469",[d.wP]]]),children:"Draft offers"}),(0,x.jsx)("div",{className:o().dynamic([["123951469",[d.wP]]])+" "+((null===j?void 0:"grid")||""),children:j?j.length?_(j.filter((function(e){return e.status===f.WR.OFFER_DRAFTED})),O,a):"No active offers":(0,x.jsx)("div",{className:o().dynamic([["123951469",[d.wP]]])+" loading",children:(0,x.jsx)(y.iT,{speed:.7,stroke:d.wP,width:32,height:32})})})]}),(0,x.jsxs)(m.xu,{children:[(0,x.jsx)("h2",{className:o().dynamic([["123951469",[d.wP]]]),children:"Votable offers"}),(0,x.jsx)("div",{className:o().dynamic([["123951469",[d.wP]]])+" "+((null===j?void 0:"grid")||""),children:j?j.length?_(j.filter((function(e){return e.status===f.WR.OFFER_DRAFT_LOCKED})),O,a):"No active offers":(0,x.jsx)("div",{className:o().dynamic([["123951469",[d.wP]]])+" loading",children:(0,x.jsx)(y.iT,{speed:.7,stroke:d.wP,width:32,height:32})})})]}),(0,x.jsxs)(m.xu,{children:[(0,x.jsx)("h2",{className:o().dynamic([["123951469",[d.wP]]]),children:"Active offers"}),(0,x.jsx)("div",{className:o().dynamic([["123951469",[d.wP]]])+" "+((null===j?void 0:"grid")||""),children:j?j.length?_(j.filter((function(e){return e.status===f.WR.OFFER_MADE})),O,a):"No active offers":(0,x.jsx)("div",{className:o().dynamic([["123951469",[d.wP]]])+" loading",children:(0,x.jsx)(y.iT,{speed:.7,stroke:d.wP,width:32,height:32})})})]}),M?(0,x.jsx)(N,{loan:M,liquidityTokenDecimals:a,borrowInfo:l,poolAddress:s,onClose:function(){return O(null)},onDraftOffer:function(e,n,r,i,o,l,s){var u=f.Ed.attach(t).connect(p.getSigner()),m=M.status===f.WR.APPLIED;return M&&(0,d.nQ)(null===M||void 0===M?void 0:M.borrower).then((function(e){e&&(0,d.wQ)(null===M||void 0===M?void 0:M.id,b(b({},e),{},{localDetail:s}))})),(m?u.draftOffer(M.id,e,n,l,r,i,o).then((function(e){return{tx:e,name:"Update offer"}})):u.updateDraftOffer(M.id,e,n,l,r,i,o).then((function(n){return{tx:n,name:"Draft a loan offer for ".concat((0,d.nx)(e,a)," ").concat(d.ob)}}))).then((function(e){var n=e.tx,t=e.name;return(0,f.y5)(c,{name:t,tx:n})})).then((function(){O(null),g(j.map((function(t){return t===M?b(b({},t),{},{status:f.WR.OFFER_DRAFTED,amount:e,duration:n,graceDefaultPeriod:l,installmentAmount:r,installments:i,interest:o,lockedTime:0}):t})))})).catch((function(e){throw console.error(e),e}))},onReject:function(){var e=f.Ed.attach(t).connect(p.getSigner());return(M.status===f.WR.OFFER_DRAFTED||M.status===f.WR.OFFER_DRAFT_LOCKED||M.status===f.WR.OFFER_MADE?e.cancelLoan(M.id).then((function(e){return{tx:e,name:"Cancel loan",newStatus:f.WR.CANCELLED}})):e.denyLoan(M.id).then((function(e){return{tx:e,name:"Reject loan",newStatus:f.WR.DENIED}}))).then((function(e){var n=e.tx,t=e.name,a=e.newStatus;return(0,f.y5)(c,{name:t,tx:n}).then((function(){return a}))})).then((function(e){O(null),g(j.map((function(n){return n===M?b(b({},n),{},{status:e}):n})))})).catch((function(e){throw console.error(e),e}))},onLock:function(){return f.Ed.attach(t).connect(p.getSigner()).lockDraftOffer(M.id).then((function(e){return{tx:e,name:"Lock draft offer",newStatus:f.WR.OFFER_DRAFT_LOCKED}})).then((function(e){var n=e.tx,t=e.name,a=e.newStatus;return(0,f.y5)(c,{name:t,tx:n}).then((function(){return a}))})).then((function(e){O(null),g(j.map((function(n){return n===M?b(b({},n),{},{status:e}):n})))})).catch((function(e){throw console.error(e),e}))},onOffer:function(){var e=f.Ed.attach(t).connect(p.getSigner());return console.log(M),e.offerLoan(M.id).then((function(e){return{tx:e,name:"Activate Loan Offer",newStatus:f.WR.OFFER_MADE}})).then((function(e){var n=e.tx,t=e.name,a=e.newStatus;return(0,f.y5)(c,{name:t,tx:n}).then((function(){return a}))})).then((function(e){O(null),g(j.map((function(n){return n===M?b(b({},n),{},{status:e}):n})))})).catch((function(e){throw console.error(e),e}))}}):null,(0,x.jsx)(o(),{id:"123951469",dynamic:[d.wP],children:["h2.__jsx-style-dynamic-selector{font-size:16px;margin-top:0;}",".loading.__jsx-style-dynamic-selector>svg{display:block;margin:10px auto 0;}",".grid.__jsx-style-dynamic-selector{display:grid;grid-template-columns:30% 50% 20%;}",".grid.__jsx-style-dynamic-selector>.name{margin-right:24px;margin-bottom:12px;}",".grid.__jsx-style-dynamic-selector>.name>span{color:".concat(d.wP,";cursor:pointer;}")]})]})}function _(e,n,t){return e.map((function(e){return(0,x.jsxs)(u.Fragment,{children:[(0,x.jsx)("div",{className:"name",children:(0,x.jsxs)("span",{onClick:function(){return n(e)},children:[e.id,". ",e.name]})}),(0,x.jsx)("div",{className:"description",children:(0,x.jsxs)("span",{children:[e.isLocalCurrencyLoan?(0,x.jsxs)(x.Fragment,{children:[Number(e.localDetail.localLoanAmount).toFixed(2)," ",e.localDetail.localCurrencyCode," ","("]}):null,(0,d.nx)(e.amount,t,2)," ",d.ob,e.isLocalCurrencyLoan?(0,x.jsx)(x.Fragment,{children:")"}):null," ","for"," ",(0,m.DL)(e.duration.toNumber())," months"]})}),(0,x.jsx)("div",{children:" "})]},e.id)}))}function N(e){var n,t,a=e.loan,i=e.liquidityTokenDecimals,c=e.borrowInfo,h=e.poolAddress,y=e.onClose,p=e.onDraftOffer,b=e.onReject,v=e.onLock,j=e.onOffer,g=(0,f.o)(h),_=(0,r.Z)(g,1)[0],N=a.status===f.WR.OFFER_DRAFTED,L=a.status===f.WR.OFFER_DRAFT_LOCKED,M=a.status===f.WR.OFFER_MADE,O=a.status===f.WR.OFFER_DRAFTED||a.status===f.WR.OFFER_DRAFT_LOCKED||a.status===f.WR.OFFER_MADE,D=!L&&!M,w=(0,u.useMemo)((function(){var e=(0,d.xA)(a.amount,i),n=a.duration.toNumber(),t=(0,m.DL)(n),r=t.toString();if(O)return{initialAmount:e,initialMonths:r,initialInstallments:a.installments.toString(),initialInstallmentAmount:(0,d.xA)(a.installmentAmount,i),initialInterestValue:(a.interest/10).toString(),initialGraceDefaultPeriod:(a.graceDefaultPeriod/d.u3).toString()};var o=Math.max(Math.ceil(t),1);return{initialAmount:e,initialMonths:r,initialInstallments:o.toString(),initialInstallmentAmount:(0,d.xA)((0,d.Ci)(a.amount,c.apr,o,n),i),initialInterestValue:c.apr.toString(),initialGraceDefaultPeriod:"35"}}),[O,i,a,c]),A=w.initialAmount,k=w.initialMonths,C=w.initialInstallments,P=w.initialInstallmentAmount,F=w.initialInterestValue,R=w.initialGraceDefaultPeriod,E=(0,u.useState)(A),S=E[0],G=E[1],I=(0,u.useState)(a.isLocalCurrencyLoan?Number(a.localDetail.localLoanAmount).toFixed(2):"0"),T=I[0],W=I[1],Z=(0,u.useState)(a.isLocalCurrencyLoan?null===(n=a.localDetail.fxRate)||void 0===n?void 0:n.toFixed(2):"0"),$=Z[0],z=Z[1],B=(0,u.useState)(k),q=B[0],H=B[1],K=(0,u.useState)(C),V=K[0],J=K[1],U=(0,u.useState)(P),Q=U[0],X=U[1],Y=(0,u.useState)(a.isLocalCurrencyLoan?(0,d.IA)(Number.parseFloat((Number(P)*Number(a.localDetail.fxRate)).toFixed(2))):P),ee=Y[0],ne=Y[1],te=(0,u.useState)(F),ae=te[0],re=te[1],ie=(0,u.useState)(R),oe=ie[0],le=ie[1],se=(0,u.useState)(!1),ce=se[0],ue=se[1],de=(0,u.useState)(!1),me=de[0],fe=de[1],he=(0,u.useState)(!1),ye=he[0],xe=he[1],pe=(0,u.useState)(!1),be=pe[0],ve=pe[1],je=(0,u.useState)(!1),ge=je[0],_e=je[1],Ne=(0,u.useState)(!O),Le=Ne[0],Me=Ne[1],Oe=(0,u.useState)(""),De=Oe[0],we=Oe[1],Ae=(0,u.useMemo)((function(){return ge?function(e,n,t,a,r){var i=Math.trunc(Date.now()/1e3);return(0,d.xA)((0,d.qJ)(e,d.bM,i,n,i+t/a).interestOutstanding,r)}((0,s.vz)(S,i),Number(ae),Number(q)*d.L$,parseInt(V,10),i):Le?(0,d.xA)((0,d.Ci)((0,s.vz)(S.length>0?S:"0",i),Number(ae.length>0&&Number(ae)>0?ae:"1"),Math.max(parseInt(V.length>0?V:C,10),1),Number(q.length>0?q:a.duration.toNumber())*d.L$),i):Q}),[ge,Le,S,i,ae,q,V,Q]),ke=(0,u.useMemo)((function(){return ge||Le?(0,d.IA)(Number.parseFloat((Number(Ae)*Number($)).toFixed(2))):ee}),[ge,Le,Ae,ee]),Ce=(0,u.useMemo)((function(){var e=Math.trunc(Date.now()/1e3);if(!S||!T||!$||!q||!ae||!V||!Ae)return[d.bM,!1,null];var n=(0,s.vz)(S,i),t=Number(q),a=parseInt(V,10);return[n,t%1===0&&a===t,{amount:n,duration:Number(q)*d.L$,apr:Number(ae),borrowedTime:e,installments:a,installmentAmount:(0,s.vz)(Ae,i),details:{baseAmountRepaid:d.wL,totalAmountRepaid:d.wL,interestPaid:d.wL,interestPaidUntil:e}}]}),[S,T,$,i,q,ae,V,Ae]),Pe=Ce[0],Fe=Ce[1],Re=Ce[2],Ee=(0,f.uh)(Re,l.O$.from((1e6*Number(ke)).toFixed(0)),Number($)),Se=(0,u.useCallback)((function(e){var n;e.preventDefault(),ue(!0),p((0,s.vz)(S,i),l.O$.from(Number(q)*d.L$),(0,s.vz)(Ae,i),parseInt(V,10),10*Number(ae),Number(oe)*d.u3,{localLoanAmount:T.toString(),localCurrencyCode:null===(n=a.localDetail)||void 0===n?void 0:n.localCurrencyCode,fxRate:Number($),localInstallmentAmount:ke}).catch((function(){ue(!1)}))}),[S,T,$,q,oe,Ae,V,ae,i,p]),Ge=(0,u.useCallback)((function(){fe(!0),b().catch((function(){fe(!1)}))}),[b]),Ie=(0,u.useCallback)((function(){xe(!0),v().catch((function(){xe(!1)}))}),[v]),Te=(0,u.useCallback)((function(){ve(!0),j().catch((function(){ve(!1)}))}),[j]),We=(0,u.useMemo)((function(){var e=(0,d.BJ)(S,i,c.minLoanAmount),n=!_||(0,d.Pe)(S,i,O?l.O$.from(_).add((0,s.vz)(A,i)):_);return e?n?"":"Maximum available amount is ".concat((0,d.nx)(O?l.O$.from(_).add((0,s.vz)(A,i)):l.O$.from(_),i,2,!1)):"Minimum amount is ".concat((0,d.nx)(l.O$.from(c.minLoanAmount),i,2,!0))}),[S,c.minLoanAmount,_,i]),Ze=(0,u.useMemo)((function(){return!(0,d.BJ)(T,i,l.O$.from(c.minLoanAmount).mul((100*Number($)).toFixed(0)).div(100))}),[T,c.minLoanAmount,i]),$e=(0,u.useMemo)((function(){var e=Number(q)*d.L$;return e<c.minLoanDuration?"Minimum duration is ".concat(c.minLoanDuration/d.u3," day"):e>c.maxLoanDuration?"Maximum duration is ".concat(c.maxLoanDuration/d.eV," years"):""}),[q,c.minLoanDuration,c.maxLoanDuration]),ze=(0,u.useMemo)((function(){return!(0,d.BJ)(Ae,i,d.bM)}),[Ae,i]),Be=(0,u.useMemo)((function(){return Number(ae)<=0}),[ae]),qe=(0,u.useMemo)((function(){var e=parseInt(V,10);return e<1?"Installments must be at least 1":e>Number(q)*d.L$/d.u3?"Installments can not be more than the duration in days":""}),[q,V]),He=(0,u.useMemo)((function(){var e=Number(oe);return e<3?"Grace default period must be at least 3":e>365?"Grace default period must be less than 365":""}),[oe]),Ke=(0,u.useMemo)((function(){var e;return{localLoanAmount:T,localCurrencyCode:null===(e=a.localDetail)||void 0===e?void 0:e.localCurrencyCode,fxRate:Number($)}}),[T,$,ee]);return(0,x.jsx)(m.u_,{onClose:y,children:(0,x.jsxs)("form",{onSubmit:Se,className:o().dynamic([["915165999",[d.G9,d.LM]]]),children:[(0,x.jsx)("h3",{className:o().dynamic([["915165999",[d.G9,d.LM]]]),children:M?"Active Loan Offer":"Draft Loan Offer"}),(0,x.jsxs)("div",{className:o().dynamic([["915165999",[d.G9,d.LM]]])+" field",children:[(0,x.jsx)("div",{className:o().dynamic([["915165999",[d.G9,d.LM]]])+" label",children:"Account"}),(0,x.jsx)("div",{className:o().dynamic([["915165999",[d.G9,d.LM]]]),children:(0,x.jsx)(m.s_,{address:a.borrower})})]}),(0,x.jsxs)("div",{className:o().dynamic([["915165999",[d.G9,d.LM]]])+" field",children:[(0,x.jsx)("div",{className:o().dynamic([["915165999",[d.G9,d.LM]]])+" label",children:"Name"}),(0,x.jsx)("div",{className:o().dynamic([["915165999",[d.G9,d.LM]]]),children:a.name})]}),(0,x.jsxs)("div",{className:o().dynamic([["915165999",[d.G9,d.LM]]])+" field",children:[(0,x.jsx)("div",{className:o().dynamic([["915165999",[d.G9,d.LM]]])+" label",children:"Business Name"}),(0,x.jsx)("div",{className:o().dynamic([["915165999",[d.G9,d.LM]]]),children:a.businessName})]}),a.phone?(0,x.jsxs)("div",{className:o().dynamic([["915165999",[d.G9,d.LM]]])+" field",children:[(0,x.jsx)("div",{className:o().dynamic([["915165999",[d.G9,d.LM]]])+" label",children:"Phone"}),(0,x.jsx)("div",{className:o().dynamic([["915165999",[d.G9,d.LM]]]),children:(0,x.jsx)("a",{href:"tel:".concat(a.phone),className:o().dynamic([["915165999",[d.G9,d.LM]]]),children:a.phone})})]}):null,a.email?(0,x.jsxs)("div",{className:o().dynamic([["915165999",[d.G9,d.LM]]])+" field",children:[(0,x.jsx)("div",{className:o().dynamic([["915165999",[d.G9,d.LM]]])+" label",children:"Email"}),(0,x.jsx)("div",{className:o().dynamic([["915165999",[d.G9,d.LM]]]),children:(0,x.jsx)("a",{href:"mailto:".concat(a.email),className:o().dynamic([["915165999",[d.G9,d.LM]]]),children:a.email})})]}):null,a.isLocalCurrencyLoan?(0,x.jsxs)("label",{className:o().dynamic([["915165999",[d.G9,d.LM]]]),children:[(0,x.jsx)("div",{className:o().dynamic([["915165999",[d.G9,d.LM]]])+" label",children:"Amount in Local Currency"}),(0,x.jsx)(m._Z,{invalid:!0,decimals:2,value:T,onChange:function(e){W(e);var n=(e&&e.trim().length>=1?Number(e):0)/Number($);G((0,d.IA)(Number.parseFloat(n.toFixed(2))))},disabled:ce||!D,currency:a.localDetail.localCurrencyCode}),Ze?(0,x.jsx)(m.bZ,{style:"error",title:"Minimum amount is ".concat((0,d.nx)(l.O$.from(c.minLoanAmount).mul((100*Number($)).toFixed(0)).div(100),i))}):null]}):null,(0,x.jsxs)("label",{className:o().dynamic([["915165999",[d.G9,d.LM]]]),children:[(0,x.jsx)("div",{className:o().dynamic([["915165999",[d.G9,d.LM]]])+" label",children:"Amount"}),(0,x.jsx)(m._Z,{decimals:i,value:S,onChange:function(e){G(e);var n=e&&e.trim().length>=1?Number(e):0,t=n>0?(0,d.IA)(Number.parseFloat((Number(T)/n).toFixed(2))):0;z(t)},disabled:ce||!D,invalid:Boolean(We)}),We?(0,x.jsx)(m.bZ,{style:"error",title:We}):null]}),a.isLocalCurrencyLoan?(0,x.jsxs)("label",{className:o().dynamic([["915165999",[d.G9,d.LM]]]),children:[(0,x.jsx)("div",{className:o().dynamic([["915165999",[d.G9,d.LM]]])+" label",children:"FX Rate, 1 USDT ="}),(0,x.jsx)(m._Z,{invalid:!0,decimals:2,value:$,onChange:function(e){z(e);var n=e&&e.trim().length>=1?Number(e):0,t=n>0?(0,d.IA)(Number.parseFloat((Number(T)/n).toFixed(2))):0;G(t);var a=n>0?(0,d.IA)(Number.parseFloat((Number(ee)/n).toFixed(2))):0;X(a)},disabled:ce||!D,currency:a.localDetail.localCurrencyCode})]}):null,(0,x.jsxs)("label",{className:o().dynamic([["915165999",[d.G9,d.LM]]]),children:[(0,x.jsx)("div",{className:o().dynamic([["915165999",[d.G9,d.LM]]])+" label",children:"Duration"}),(0,x.jsx)(m._Z,{decimals:100,value:q,onChange:H,disabled:ce||!D,invalid:Boolean($e),noToken:!0,label:"months",paddingRight:60}),$e?(0,x.jsx)(m.bZ,{style:"error",title:$e}):null]}),(0,x.jsxs)("label",{className:o().dynamic([["915165999",[d.G9,d.LM]]]),children:[(0,x.jsx)("div",{className:o().dynamic([["915165999",[d.G9,d.LM]]])+" label",children:"Installments"}),(0,x.jsx)(m._Z,{decimals:0,value:V,onChange:J,disabled:ce||!D,invalid:Boolean(qe),noToken:!0}),qe?(0,x.jsx)(m.bZ,{style:"error",title:qe}):null]}),(0,x.jsxs)("label",{className:o().dynamic([["915165999",[d.G9,d.LM]]]),children:[(0,x.jsx)("div",{className:o().dynamic([["915165999",[d.G9,d.LM]]])+" label",children:"Interest p/a"}),(0,x.jsx)(m._Z,{decimals:1,value:ae,onChange:re,disabled:ce||!D,invalid:Be,noToken:!0,label:"%",paddingRight:26}),Be?(0,x.jsx)(m.bZ,{style:"error",title:"Invalid interest"}):null]}),(0,x.jsxs)("label",{className:o().dynamic([["915165999",[d.G9,d.LM]]]),children:[(0,x.jsx)("div",{className:o().dynamic([["915165999",[d.G9,d.LM]]])+" label",children:"Installment Amount"}),(0,x.jsx)(m._Z,{decimals:i,value:Ae,onChange:function(e){X(e);var n=(e&&e.trim().length>=1?Number(e):0)*Number($);ne((0,d.IA)(Number.parseFloat(n.toFixed(2))))},disabled:!D||ce||ge||Le,invalid:ze}),(0,x.jsxs)("label",{className:o().dynamic([["915165999",[d.G9,d.LM]]])+" checkbox",children:[(0,x.jsx)("input",{type:"checkbox",checked:ge,disabled:ce||!D,onChange:function(){ge?(X(De),_e(!1)):(we(Q),_e(!0))},className:o().dynamic([["915165999",[d.G9,d.LM]]])}),"Interest only"]}),(0,x.jsxs)("label",{className:o().dynamic([["915165999",[d.G9,d.LM]]])+" checkbox",children:[(0,x.jsx)("input",{type:"checkbox",checked:Le,disabled:ce||!D,onChange:function(){Me(!Le)},className:o().dynamic([["915165999",[d.G9,d.LM]]])}),"Amortized"]}),ze?(0,x.jsx)(m.bZ,{style:"error",title:"Invalid installment amount"}):null]}),(0,x.jsxs)("label",{className:o().dynamic([["915165999",[d.G9,d.LM]]]),children:[(0,x.jsx)("div",{className:o().dynamic([["915165999",[d.G9,d.LM]]])+" label",children:"Grace Default Period"}),(0,x.jsx)(m._Z,{decimals:2,value:oe,onChange:le,disabled:ce||!D,invalid:Boolean(He),noToken:!0,label:"days",paddingRight:44}),He?(0,x.jsx)(m.bZ,{style:"error",title:He}):null]}),(0,x.jsx)("div",{className:o().dynamic([["915165999",[d.G9,d.LM]]])+" schedule-container",children:(0,x.jsx)(m.JJ,{amount:Pe,monthly:Fe,schedule:Ee,liquidityTokenDecimals:i,isLocalCurrencyLoan:null!==(t=a.isLocalCurrencyLoan)&&void 0!==t&&t,localDetail:Ke})}),(0,x.jsxs)("div",{className:o().dynamic([["915165999",[d.G9,d.LM]]])+" buttons",children:[D?(0,x.jsx)(m.zx,{disabled:Boolean(ce||me||ye||be||We||$e||qe||Be||ze||He),loading:ce,type:"submit",children:N?"Update Draft Offer":"Draft Offer"}):null,N?(0,x.jsx)(m.zx,{disabled:Boolean(ce||me||ye||be||We||$e||qe||Be||ze||He),loading:ye,onClick:Ie,type:"button",children:"Lock for Voting"}):null,L?(0,x.jsxs)(m.zx,{disabled:Boolean(ce||me||ye||be||We||$e||qe||Be||ze||He||Math.ceil((a.lockedTime+172800-Date.now()/1e3)/60/60)>0),loading:be,onClick:Te,type:"button",children:["Make Active",Math.ceil((a.lockedTime+172800-Date.now()/1e3)/60/60)>0?" - Locked for "+Math.ceil((a.lockedTime+172800-Date.now()/1e3)/60/60)+"H":null]}):null,(0,x.jsx)(m.zx,{disabled:ce||me||ye||be,loading:me,onClick:Ge,type:"button",stone:!0,children:O?"Cancel":"Reject Application"})]}),(0,x.jsx)(o(),{id:"915165999",dynamic:[d.G9,d.LM],children:["form.__jsx-style-dynamic-selector{padding:20px;}","form.__jsx-style-dynamic-selector>h3.__jsx-style-dynamic-selector{margin-top:0;}","form.__jsx-style-dynamic-selector>.field.__jsx-style-dynamic-selector,form.__jsx-style-dynamic-selector>label.__jsx-style-dynamic-selector{display:block;margin-top:16px;}","form.__jsx-style-dynamic-selector>.field.__jsx-style-dynamic-selector>.label.__jsx-style-dynamic-selector,form.__jsx-style-dynamic-selector>label.__jsx-style-dynamic-selector>.label.__jsx-style-dynamic-selector{color:var(--color-secondary);font-weight:400;margin-bottom:8px;}","form.__jsx-style-dynamic-selector>.field.__jsx-style-dynamic-selector>.checkbox.__jsx-style-dynamic-selector,form.__jsx-style-dynamic-selector>label.__jsx-style-dynamic-selector>.checkbox.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","form.__jsx-style-dynamic-selector>.field.__jsx-style-dynamic-selector>.checkbox.__jsx-style-dynamic-selector>input[type=checkbox].__jsx-style-dynamic-selector,form.__jsx-style-dynamic-selector>label.__jsx-style-dynamic-selector>.checkbox.__jsx-style-dynamic-selector>input[type=checkbox].__jsx-style-dynamic-selector{width:16px;height:16px;margin-right:4px;}","form.__jsx-style-dynamic-selector>.field.__jsx-style-dynamic-selector>.alert,form.__jsx-style-dynamic-selector>label.__jsx-style-dynamic-selector>.alert{margin-top:8px;}","form.__jsx-style-dynamic-selector>.buttons.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}","form.__jsx-style-dynamic-selector>.buttons.__jsx-style-dynamic-selector>button{margin:16px 8px 0 0;}","form.__jsx-style-dynamic-selector>.schedule-container.__jsx-style-dynamic-selector{color:".concat(d.G9,";background-color:").concat(d.LM,";margin-top:16px;padding:12px 16px;border-radius:8px;}")]})]})})}j.getInitialProps=function(e){return{address:(0,d.Kn)(e.query.address)}},n.default=j},5243:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/[address]",function(){return t(9534)}])},9008:function(e,n,t){e.exports=t(6505)}},function(e){e.O(0,[774,888,179],(function(){return n=5243,e(e.s=n);var n}));var n=e.O();_N_E=n}]);