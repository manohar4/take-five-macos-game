(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const HE="modulepreload",GE=function(n){return"/"+n},g0={},zy=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let u=function(h){return Promise.all(h.map(_=>Promise.resolve(_).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));s=u(t.map(h=>{if(h=GE(h),h in g0)return;g0[h]=!0;const _=h.endsWith(".css"),m=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const v=document.createElement("link");if(v.rel=_?"stylesheet":HE,_||(v.as="script"),v.crossOrigin="",v.href=h,f&&v.setAttribute("nonce",f),document.head.appendChild(v),_)return new Promise((x,E)=>{v.addEventListener("load",x),v.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return s.then(u=>{for(const d of u||[])d.status==="rejected"&&o(d.reason);return e().catch(o)})};function _i(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function Hy(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var s=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:function(){return n[r]}})}),t}var Uf={exports:{}},yt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0;function VE(){if(v0)return yt;v0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),m=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=m&&U[m]||U["@@iterator"],typeof U=="function"?U:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(U,Q,Te){this.props=U,this.context=Q,this.refs=T,this.updater=Te||x}y.prototype.isReactComponent={},y.prototype.setState=function(U,Q){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Q,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function S(){}S.prototype=y.prototype;function w(U,Q,Te){this.props=U,this.context=Q,this.refs=T,this.updater=Te||x}var D=w.prototype=new S;D.constructor=w,E(D,y.prototype),D.isPureReactComponent=!0;var L=Array.isArray,N=Object.prototype.hasOwnProperty,I={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function P(U,Q,Te){var te,ve={},_e=null,Ee=null;if(Q!=null)for(te in Q.ref!==void 0&&(Ee=Q.ref),Q.key!==void 0&&(_e=""+Q.key),Q)N.call(Q,te)&&!b.hasOwnProperty(te)&&(ve[te]=Q[te]);var pe=arguments.length-2;if(pe===1)ve.children=Te;else if(1<pe){for(var ke=Array(pe),pt=0;pt<pe;pt++)ke[pt]=arguments[pt+2];ve.children=ke}if(U&&U.defaultProps)for(te in pe=U.defaultProps,pe)ve[te]===void 0&&(ve[te]=pe[te]);return{$$typeof:n,type:U,key:_e,ref:Ee,props:ve,_owner:I.current}}function k(U,Q){return{$$typeof:n,type:U.type,key:Q,ref:U.ref,props:U.props,_owner:U._owner}}function F(U){return typeof U=="object"&&U!==null&&U.$$typeof===n}function G(U){var Q={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Te){return Q[Te]})}var K=/\/+/g;function Y(U,Q){return typeof U=="object"&&U!==null&&U.key!=null?G(""+U.key):Q.toString(36)}function H(U,Q,Te,te,ve){var _e=typeof U;(_e==="undefined"||_e==="boolean")&&(U=null);var Ee=!1;if(U===null)Ee=!0;else switch(_e){case"string":case"number":Ee=!0;break;case"object":switch(U.$$typeof){case n:case e:Ee=!0}}if(Ee)return Ee=U,ve=ve(Ee),U=te===""?"."+Y(Ee,0):te,L(ve)?(Te="",U!=null&&(Te=U.replace(K,"$&/")+"/"),H(ve,Q,Te,"",function(pt){return pt})):ve!=null&&(F(ve)&&(ve=k(ve,Te+(!ve.key||Ee&&Ee.key===ve.key?"":(""+ve.key).replace(K,"$&/")+"/")+U)),Q.push(ve)),1;if(Ee=0,te=te===""?".":te+":",L(U))for(var pe=0;pe<U.length;pe++){_e=U[pe];var ke=te+Y(_e,pe);Ee+=H(_e,Q,Te,ke,ve)}else if(ke=v(U),typeof ke=="function")for(U=ke.call(U),pe=0;!(_e=U.next()).done;)_e=_e.value,ke=te+Y(_e,pe++),Ee+=H(_e,Q,Te,ke,ve);else if(_e==="object")throw Q=String(U),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Ee}function se(U,Q,Te){if(U==null)return U;var te=[],ve=0;return H(U,te,"","",function(_e){return Q.call(Te,_e,ve++)}),te}function ae(U){if(U._status===-1){var Q=U._result;Q=Q(),Q.then(function(Te){(U._status===0||U._status===-1)&&(U._status=1,U._result=Te)},function(Te){(U._status===0||U._status===-1)&&(U._status=2,U._result=Te)}),U._status===-1&&(U._status=0,U._result=Q)}if(U._status===1)return U._result.default;throw U._result}var ee={current:null},j={transition:null},$={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:j,ReactCurrentOwner:I};function Z(){throw Error("act(...) is not supported in production builds of React.")}return yt.Children={map:se,forEach:function(U,Q,Te){se(U,function(){Q.apply(this,arguments)},Te)},count:function(U){var Q=0;return se(U,function(){Q++}),Q},toArray:function(U){return se(U,function(Q){return Q})||[]},only:function(U){if(!F(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},yt.Component=y,yt.Fragment=t,yt.Profiler=s,yt.PureComponent=w,yt.StrictMode=r,yt.Suspense=f,yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,yt.act=Z,yt.cloneElement=function(U,Q,Te){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var te=E({},U.props),ve=U.key,_e=U.ref,Ee=U._owner;if(Q!=null){if(Q.ref!==void 0&&(_e=Q.ref,Ee=I.current),Q.key!==void 0&&(ve=""+Q.key),U.type&&U.type.defaultProps)var pe=U.type.defaultProps;for(ke in Q)N.call(Q,ke)&&!b.hasOwnProperty(ke)&&(te[ke]=Q[ke]===void 0&&pe!==void 0?pe[ke]:Q[ke])}var ke=arguments.length-2;if(ke===1)te.children=Te;else if(1<ke){pe=Array(ke);for(var pt=0;pt<ke;pt++)pe[pt]=arguments[pt+2];te.children=pe}return{$$typeof:n,type:U.type,key:ve,ref:_e,props:te,_owner:Ee}},yt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:o,_context:U},U.Consumer=U},yt.createElement=P,yt.createFactory=function(U){var Q=P.bind(null,U);return Q.type=U,Q},yt.createRef=function(){return{current:null}},yt.forwardRef=function(U){return{$$typeof:d,render:U}},yt.isValidElement=F,yt.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:ae}},yt.memo=function(U,Q){return{$$typeof:h,type:U,compare:Q===void 0?null:Q}},yt.startTransition=function(U){var Q=j.transition;j.transition={};try{U()}finally{j.transition=Q}},yt.unstable_act=Z,yt.useCallback=function(U,Q){return ee.current.useCallback(U,Q)},yt.useContext=function(U){return ee.current.useContext(U)},yt.useDebugValue=function(){},yt.useDeferredValue=function(U){return ee.current.useDeferredValue(U)},yt.useEffect=function(U,Q){return ee.current.useEffect(U,Q)},yt.useId=function(){return ee.current.useId()},yt.useImperativeHandle=function(U,Q,Te){return ee.current.useImperativeHandle(U,Q,Te)},yt.useInsertionEffect=function(U,Q){return ee.current.useInsertionEffect(U,Q)},yt.useLayoutEffect=function(U,Q){return ee.current.useLayoutEffect(U,Q)},yt.useMemo=function(U,Q){return ee.current.useMemo(U,Q)},yt.useReducer=function(U,Q,Te){return ee.current.useReducer(U,Q,Te)},yt.useRef=function(U){return ee.current.useRef(U)},yt.useState=function(U){return ee.current.useState(U)},yt.useSyncExternalStore=function(U,Q,Te){return ee.current.useSyncExternalStore(U,Q,Te)},yt.useTransition=function(){return ee.current.useTransition()},yt.version="18.3.1",yt}var _0;function Gy(){return _0||(_0=1,Uf.exports=VE()),Uf.exports}var at=Gy();const ao=_i(at);var Ou={},Ff={exports:{}},jn={},kf={exports:{}},Bf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0;function WE(){return y0||(y0=1,(function(n){function e(j,$){var Z=j.length;j.push($);e:for(;0<Z;){var U=Z-1>>>1,Q=j[U];if(0<s(Q,$))j[U]=$,j[Z]=Q,Z=U;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var $=j[0],Z=j.pop();if(Z!==$){j[0]=Z;e:for(var U=0,Q=j.length,Te=Q>>>1;U<Te;){var te=2*(U+1)-1,ve=j[te],_e=te+1,Ee=j[_e];if(0>s(ve,Z))_e<Q&&0>s(Ee,ve)?(j[U]=Ee,j[_e]=Z,U=_e):(j[U]=ve,j[te]=Z,U=te);else if(_e<Q&&0>s(Ee,Z))j[U]=Ee,j[_e]=Z,U=_e;else break e}}return $}function s(j,$){var Z=j.sortIndex-$.sortIndex;return Z!==0?Z:j.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],h=[],_=1,m=null,v=3,x=!1,E=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(j){for(var $=t(h);$!==null;){if($.callback===null)r(h);else if($.startTime<=j)r(h),$.sortIndex=$.expirationTime,e(f,$);else break;$=t(h)}}function L(j){if(T=!1,D(j),!E)if(t(f)!==null)E=!0,ae(N);else{var $=t(h);$!==null&&ee(L,$.startTime-j)}}function N(j,$){E=!1,T&&(T=!1,S(P),P=-1),x=!0;var Z=v;try{for(D($),m=t(f);m!==null&&(!(m.expirationTime>$)||j&&!G());){var U=m.callback;if(typeof U=="function"){m.callback=null,v=m.priorityLevel;var Q=U(m.expirationTime<=$);$=n.unstable_now(),typeof Q=="function"?m.callback=Q:m===t(f)&&r(f),D($)}else r(f);m=t(f)}if(m!==null)var Te=!0;else{var te=t(h);te!==null&&ee(L,te.startTime-$),Te=!1}return Te}finally{m=null,v=Z,x=!1}}var I=!1,b=null,P=-1,k=5,F=-1;function G(){return!(n.unstable_now()-F<k)}function K(){if(b!==null){var j=n.unstable_now();F=j;var $=!0;try{$=b(!0,j)}finally{$?Y():(I=!1,b=null)}}else I=!1}var Y;if(typeof w=="function")Y=function(){w(K)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,se=H.port2;H.port1.onmessage=K,Y=function(){se.postMessage(null)}}else Y=function(){y(K,0)};function ae(j){b=j,I||(I=!0,Y())}function ee(j,$){P=y(function(){j(n.unstable_now())},$)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(j){j.callback=null},n.unstable_continueExecution=function(){E||x||(E=!0,ae(N))},n.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<j?Math.floor(1e3/j):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(j){switch(v){case 1:case 2:case 3:var $=3;break;default:$=v}var Z=v;v=$;try{return j()}finally{v=Z}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(j,$){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var Z=v;v=j;try{return $()}finally{v=Z}},n.unstable_scheduleCallback=function(j,$,Z){var U=n.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?U+Z:U):Z=U,j){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=Z+Q,j={id:_++,callback:$,priorityLevel:j,startTime:Z,expirationTime:Q,sortIndex:-1},Z>U?(j.sortIndex=Z,e(h,j),t(f)===null&&j===t(h)&&(T?(S(P),P=-1):T=!0,ee(L,Z-U))):(j.sortIndex=Q,e(f,j),E||x||(E=!0,ae(N))),j},n.unstable_shouldYield=G,n.unstable_wrapCallback=function(j){var $=v;return function(){var Z=v;v=$;try{return j.apply(this,arguments)}finally{v=Z}}}})(Bf)),Bf}var S0;function $E(){return S0||(S0=1,kf.exports=WE()),kf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x0;function XE(){if(x0)return jn;x0=1;var n=Gy(),e=$E();function t(i){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)a+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function o(i,a){u(i,a),u(i+"Capture",a)}function u(i,a){for(s[i]=a,i=0;i<a.length;i++)r.add(a[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},m={};function v(i){return f.call(m,i)?!0:f.call(_,i)?!1:h.test(i)?m[i]=!0:(_[i]=!0,!1)}function x(i,a,l,c){if(l!==null&&l.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return c?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,a,l,c){if(a===null||typeof a>"u"||x(i,a,l,c))return!0;if(c)return!1;if(l!==null)switch(l.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function T(i,a,l,c,p,g,R){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=a,this.sanitizeURL=g,this.removeEmptyString=R}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new T(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var a=i[0];y[a]=new T(a,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new T(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new T(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new T(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new T(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new T(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new T(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new T(i,5,!1,i.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function w(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var a=i.replace(S,w);y[a]=new T(a,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var a=i.replace(S,w);y[a]=new T(a,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var a=i.replace(S,w);y[a]=new T(a,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new T(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new T(i,1,!1,i.toLowerCase(),null,!0,!0)});function D(i,a,l,c){var p=y.hasOwnProperty(a)?y[a]:null;(p!==null?p.type!==0:c||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(E(a,l,p,c)&&(l=null),c||p===null?v(a)&&(l===null?i.removeAttribute(a):i.setAttribute(a,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(a=p.attributeName,c=p.attributeNamespace,l===null?i.removeAttribute(a):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,c?i.setAttributeNS(c,a,l):i.setAttribute(a,l))))}var L=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),I=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),G=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),j=Symbol.iterator;function $(i){return i===null||typeof i!="object"?null:(i=j&&i[j]||i["@@iterator"],typeof i=="function"?i:null)}var Z=Object.assign,U;function Q(i){if(U===void 0)try{throw Error()}catch(l){var a=l.stack.trim().match(/\n( *(at )?)/);U=a&&a[1]||""}return`
`+U+i}var Te=!1;function te(i,a){if(!i||Te)return"";Te=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(ce){var c=ce}Reflect.construct(i,[],a)}else{try{a.call()}catch(ce){c=ce}i.call(a.prototype)}else{try{throw Error()}catch(ce){c=ce}i()}}catch(ce){if(ce&&c&&typeof ce.stack=="string"){for(var p=ce.stack.split(`
`),g=c.stack.split(`
`),R=p.length-1,B=g.length-1;1<=R&&0<=B&&p[R]!==g[B];)B--;for(;1<=R&&0<=B;R--,B--)if(p[R]!==g[B]){if(R!==1||B!==1)do if(R--,B--,0>B||p[R]!==g[B]){var W=`
`+p[R].replace(" at new "," at ");return i.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",i.displayName)),W}while(1<=R&&0<=B);break}}}finally{Te=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?Q(i):""}function ve(i){switch(i.tag){case 5:return Q(i.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return i=te(i.type,!1),i;case 11:return i=te(i.type.render,!1),i;case 1:return i=te(i.type,!0),i;default:return""}}function _e(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case b:return"Fragment";case I:return"Portal";case k:return"Profiler";case P:return"StrictMode";case Y:return"Suspense";case H:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case G:return(i.displayName||"Context")+".Consumer";case F:return(i._context.displayName||"Context")+".Provider";case K:var a=i.render;return i=i.displayName,i||(i=a.displayName||a.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case se:return a=i.displayName||null,a!==null?a:_e(i.type)||"Memo";case ae:a=i._payload,i=i._init;try{return _e(i(a))}catch{}}return null}function Ee(i){var a=i.type;switch(i.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=a.render,i=i.displayName||i.name||"",a.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _e(a);case 8:return a===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function pe(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function ke(i){var a=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function pt(i){var a=ke(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,a),c=""+i[a];if(!i.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,g=l.set;return Object.defineProperty(i,a,{configurable:!0,get:function(){return p.call(this)},set:function(R){c=""+R,g.call(this,R)}}),Object.defineProperty(i,a,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(R){c=""+R},stopTracking:function(){i._valueTracker=null,delete i[a]}}}}function et(i){i._valueTracker||(i._valueTracker=pt(i))}function vt(i){if(!i)return!1;var a=i._valueTracker;if(!a)return!0;var l=a.getValue(),c="";return i&&(c=ke(i)?i.checked?"true":"false":i.value),i=c,i!==l?(a.setValue(i),!0):!1}function St(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function ut(i,a){var l=a.checked;return Z({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function tn(i,a){var l=a.defaultValue==null?"":a.defaultValue,c=a.checked!=null?a.checked:a.defaultChecked;l=pe(a.value!=null?a.value:l),i._wrapperState={initialChecked:c,initialValue:l,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function Gt(i,a){a=a.checked,a!=null&&D(i,"checked",a,!1)}function dn(i,a){Gt(i,a);var l=pe(a.value),c=a.type;if(l!=null)c==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(c==="submit"||c==="reset"){i.removeAttribute("value");return}a.hasOwnProperty("value")?Pn(i,a.type,l):a.hasOwnProperty("defaultValue")&&Pn(i,a.type,pe(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(i.defaultChecked=!!a.defaultChecked)}function Nt(i,a,l){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var c=a.type;if(!(c!=="submit"&&c!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+i._wrapperState.initialValue,l||a===i.value||(i.value=a),i.defaultValue=a}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Pn(i,a,l){(a!=="number"||St(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Ft=Array.isArray;function on(i,a,l,c){if(i=i.options,a){a={};for(var p=0;p<l.length;p++)a["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=a.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&c&&(i[l].defaultSelected=!0)}else{for(l=""+pe(l),a=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,c&&(i[p].defaultSelected=!0);return}a!==null||i[p].disabled||(a=i[p])}a!==null&&(a.selected=!0)}}function pn(i,a){if(a.dangerouslySetInnerHTML!=null)throw Error(t(91));return Z({},a,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function bn(i,a){var l=a.value;if(l==null){if(l=a.children,a=a.defaultValue,l!=null){if(a!=null)throw Error(t(92));if(Ft(l)){if(1<l.length)throw Error(t(93));l=l[0]}a=l}a==null&&(a=""),l=a}i._wrapperState={initialValue:pe(l)}}function X(i,a){var l=pe(a.value),c=pe(a.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),a.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),c!=null&&(i.defaultValue=""+c)}function wn(i){var a=i.textContent;a===i._wrapperState.initialValue&&a!==""&&a!==null&&(i.value=a)}function Lt(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dt(i,a){return i==null||i==="http://www.w3.org/1999/xhtml"?Lt(a):i==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Ne,Yt=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,l,c,p){MSApp.execUnsafeLocalFunction(function(){return i(a,l,c,p)})}:i})(function(i,a){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=a;else{for(Ne=Ne||document.createElement("div"),Ne.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=Ne.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;a.firstChild;)i.appendChild(a.firstChild)}});function je(i,a){if(a){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=a;return}}i.textContent=a}var tt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},O=["Webkit","ms","Moz","O"];Object.keys(tt).forEach(function(i){O.forEach(function(a){a=a+i.charAt(0).toUpperCase()+i.substring(1),tt[a]=tt[i]})});function A(i,a,l){return a==null||typeof a=="boolean"||a===""?"":l||typeof a!="number"||a===0||tt.hasOwnProperty(i)&&tt[i]?(""+a).trim():a+"px"}function ie(i,a){i=i.style;for(var l in a)if(a.hasOwnProperty(l)){var c=l.indexOf("--")===0,p=A(l,a[l],c);l==="float"&&(l="cssFloat"),c?i.setProperty(l,p):i[l]=p}}var Me=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ge(i,a){if(a){if(Me[i]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(t(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(t(61))}if(a.style!=null&&typeof a.style!="object")throw Error(t(62))}}function Ae(i,a){if(i.indexOf("-")===-1)return typeof a.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Le=null;function fe(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var he=null,Re=null,z=null;function me(i){if(i=Io(i)){if(typeof he!="function")throw Error(t(280));var a=i.stateNode;a&&(a=Zl(a),he(i.stateNode,i.type,a))}}function de(i){Re?z?z.push(i):z=[i]:Re=i}function De(){if(Re){var i=Re,a=z;if(z=Re=null,me(i),a)for(i=0;i<a.length;i++)me(a[i])}}function we(i,a){return i(a)}function Ce(){}var qe=!1;function ct(i,a,l){if(qe)return i(a,l);qe=!0;try{return we(i,a,l)}finally{qe=!1,(Re!==null||z!==null)&&(Ce(),De())}}function Se(i,a){var l=i.stateNode;if(l===null)return null;var c=Zl(l);if(c===null)return null;l=c[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,a,typeof l));return l}var Je=!1;if(d)try{var st={};Object.defineProperty(st,"passive",{get:function(){Je=!0}}),window.addEventListener("test",st,st),window.removeEventListener("test",st,st)}catch{Je=!1}function Fe(i,a,l,c,p,g,R,B,W){var ce=Array.prototype.slice.call(arguments,3);try{a.apply(l,ce)}catch(xe){this.onError(xe)}}var _t=!1,Vt=null,Ln=!1,Kr=null,nr={onError:function(i){_t=!0,Vt=i}};function Zr(i,a,l,c,p,g,R,B,W){_t=!1,Vt=null,Fe.apply(nr,arguments)}function Na(i,a,l,c,p,g,R,B,W){if(Zr.apply(this,arguments),_t){if(_t){var ce=Vt;_t=!1,Vt=null}else throw Error(t(198));Ln||(Ln=!0,Kr=ce)}}function Si(i){var a=i,l=i;if(i.alternate)for(;a.return;)a=a.return;else{i=a;do a=i,(a.flags&4098)!==0&&(l=a.return),i=a.return;while(i)}return a.tag===3?l:null}function ii(i){if(i.tag===13){var a=i.memoizedState;if(a===null&&(i=i.alternate,i!==null&&(a=i.memoizedState)),a!==null)return a.dehydrated}return null}function jr(i){if(Si(i)!==i)throw Error(t(188))}function ir(i){var a=i.alternate;if(!a){if(a=Si(i),a===null)throw Error(t(188));return a!==i?null:i}for(var l=i,c=a;;){var p=l.return;if(p===null)break;var g=p.alternate;if(g===null){if(c=p.return,c!==null){l=c;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===l)return jr(p),i;if(g===c)return jr(p),a;g=g.sibling}throw Error(t(188))}if(l.return!==c.return)l=p,c=g;else{for(var R=!1,B=p.child;B;){if(B===l){R=!0,l=p,c=g;break}if(B===c){R=!0,c=p,l=g;break}B=B.sibling}if(!R){for(B=g.child;B;){if(B===l){R=!0,l=g,c=p;break}if(B===c){R=!0,c=g,l=p;break}B=B.sibling}if(!R)throw Error(t(189))}}if(l.alternate!==c)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:a}function Jr(i){return i=ir(i),i!==null?ze(i):null}function ze(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var a=ze(i);if(a!==null)return a;i=i.sibling}return null}var Oa=e.unstable_scheduleCallback,Bn=e.unstable_cancelCallback,rr=e.unstable_shouldYield,ms=e.unstable_requestPaint,kt=e.unstable_now,Ua=e.unstable_getCurrentPriorityLevel,Qr=e.unstable_ImmediatePriority,Fa=e.unstable_UserBlockingPriority,wr=e.unstable_NormalPriority,ka=e.unstable_LowPriority,C=e.unstable_IdlePriority,V=null,oe=null;function ne(i){if(oe&&typeof oe.onCommitFiberRoot=="function")try{oe.onCommitFiberRoot(V,i,void 0,(i.current.flags&128)===128)}catch{}}var J=Math.clz32?Math.clz32:Ie,Oe=Math.log,Ge=Math.LN2;function Ie(i){return i>>>=0,i===0?32:31-(Oe(i)/Ge|0)|0}var Ue=64,Ve=4194304;function nt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function ft(i,a){var l=i.pendingLanes;if(l===0)return 0;var c=0,p=i.suspendedLanes,g=i.pingedLanes,R=l&268435455;if(R!==0){var B=R&~p;B!==0?c=nt(B):(g&=R,g!==0&&(c=nt(g)))}else R=l&~p,R!==0?c=nt(R):g!==0&&(c=nt(g));if(c===0)return 0;if(a!==0&&a!==c&&(a&p)===0&&(p=c&-c,g=a&-a,p>=g||p===16&&(g&4194240)!==0))return a;if((c&4)!==0&&(c|=l&16),a=i.entangledLanes,a!==0)for(i=i.entanglements,a&=c;0<a;)l=31-J(a),p=1<<l,c|=i[l],a&=~p;return c}function We(i,a){switch(i){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ht(i,a){for(var l=i.suspendedLanes,c=i.pingedLanes,p=i.expirationTimes,g=i.pendingLanes;0<g;){var R=31-J(g),B=1<<R,W=p[R];W===-1?((B&l)===0||(B&c)!==0)&&(p[R]=We(B,a)):W<=a&&(i.expiredLanes|=B),g&=~B}}function Ut(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function At(){var i=Ue;return Ue<<=1,(Ue&4194240)===0&&(Ue=64),i}function wt(i){for(var a=[],l=0;31>l;l++)a.push(i);return a}function Wt(i,a,l){i.pendingLanes|=a,a!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,a=31-J(a),i[a]=l}function $e(i,a){var l=i.pendingLanes&~a;i.pendingLanes=a,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=a,i.mutableReadLanes&=a,i.entangledLanes&=a,a=i.entanglements;var c=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-J(l),g=1<<p;a[p]=0,c[p]=-1,i[p]=-1,l&=~g}}function nn(i,a){var l=i.entangledLanes|=a;for(i=i.entanglements;l;){var c=31-J(l),p=1<<c;p&a|i[c]&a&&(i[c]|=a),l&=~p}}var Ye=0;function ri(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var rn,Ii,$n,ai,gt,Kt=!1,mn=[],xt=null,It=null,ln=null,Ni=new Map,ea=new Map,Oi=[],Nl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gs(i,a){switch(i){case"focusin":case"focusout":xt=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":Ni.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(a.pointerId)}}function Ba(i,a,l,c,p,g){return i===null||i.nativeEvent!==g?(i={blockedOn:a,domEventName:l,eventSystemFlags:c,nativeEvent:g,targetContainers:[p]},a!==null&&(a=Io(a),a!==null&&Ii(a)),i):(i.eventSystemFlags|=c,a=i.targetContainers,p!==null&&a.indexOf(p)===-1&&a.push(p),i)}function Ol(i,a,l,c,p){switch(a){case"focusin":return xt=Ba(xt,i,a,l,c,p),!0;case"dragenter":return It=Ba(It,i,a,l,c,p),!0;case"mouseover":return ln=Ba(ln,i,a,l,c,p),!0;case"pointerover":var g=p.pointerId;return Ni.set(g,Ba(Ni.get(g)||null,i,a,l,c,p)),!0;case"gotpointercapture":return g=p.pointerId,ea.set(g,Ba(ea.get(g)||null,i,a,l,c,p)),!0}return!1}function _o(i){var a=Ha(i.target);if(a!==null){var l=Si(a);if(l!==null){if(a=l.tag,a===13){if(a=ii(l),a!==null){i.blockedOn=a,gt(i.priority,function(){$n(l)});return}}else if(a===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function za(i){if(i.blockedOn!==null)return!1;for(var a=i.targetContainers;0<a.length;){var l=ld(i.domEventName,i.eventSystemFlags,a[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var c=new l.constructor(l.type,l);Le=c,l.target.dispatchEvent(c),Le=null}else return a=Io(l),a!==null&&Ii(a),i.blockedOn=l,!1;a.shift()}return!0}function yo(i,a,l){za(i)&&l.delete(a)}function Ul(){Kt=!1,xt!==null&&za(xt)&&(xt=null),It!==null&&za(It)&&(It=null),ln!==null&&za(ln)&&(ln=null),Ni.forEach(yo),ea.forEach(yo)}function So(i,a){i.blockedOn===a&&(i.blockedOn=null,Kt||(Kt=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ul)))}function xo(i){function a(p){return So(p,i)}if(0<mn.length){So(mn[0],i);for(var l=1;l<mn.length;l++){var c=mn[l];c.blockedOn===i&&(c.blockedOn=null)}}for(xt!==null&&So(xt,i),It!==null&&So(It,i),ln!==null&&So(ln,i),Ni.forEach(a),ea.forEach(a),l=0;l<Oi.length;l++)c=Oi[l],c.blockedOn===i&&(c.blockedOn=null);for(;0<Oi.length&&(l=Oi[0],l.blockedOn===null);)_o(l),l.blockedOn===null&&Oi.shift()}var vs=L.ReactCurrentBatchConfig,Fl=!0;function fM(i,a,l,c){var p=Ye,g=vs.transition;vs.transition=null;try{Ye=1,od(i,a,l,c)}finally{Ye=p,vs.transition=g}}function hM(i,a,l,c){var p=Ye,g=vs.transition;vs.transition=null;try{Ye=4,od(i,a,l,c)}finally{Ye=p,vs.transition=g}}function od(i,a,l,c){if(Fl){var p=ld(i,a,l,c);if(p===null)wd(i,a,c,kl,l),gs(i,c);else if(Ol(p,i,a,l,c))c.stopPropagation();else if(gs(i,c),a&4&&-1<Nl.indexOf(i)){for(;p!==null;){var g=Io(p);if(g!==null&&rn(g),g=ld(i,a,l,c),g===null&&wd(i,a,c,kl,l),g===p)break;p=g}p!==null&&c.stopPropagation()}else wd(i,a,c,null,l)}}var kl=null;function ld(i,a,l,c){if(kl=null,i=fe(c),i=Ha(i),i!==null)if(a=Si(i),a===null)i=null;else if(l=a.tag,l===13){if(i=ii(a),i!==null)return i;i=null}else if(l===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;i=null}else a!==i&&(i=null);return kl=i,null}function ng(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ua()){case Qr:return 1;case Fa:return 4;case wr:case ka:return 16;case C:return 536870912;default:return 16}default:return 16}}var ta=null,ud=null,Bl=null;function ig(){if(Bl)return Bl;var i,a=ud,l=a.length,c,p="value"in ta?ta.value:ta.textContent,g=p.length;for(i=0;i<l&&a[i]===p[i];i++);var R=l-i;for(c=1;c<=R&&a[l-c]===p[g-c];c++);return Bl=p.slice(i,1<c?1-c:void 0)}function zl(i){var a=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&a===13&&(i=13)):i=a,i===10&&(i=13),32<=i||i===13?i:0}function Hl(){return!0}function rg(){return!1}function si(i){function a(l,c,p,g,R){this._reactName=l,this._targetInst=p,this.type=c,this.nativeEvent=g,this.target=R,this.currentTarget=null;for(var B in i)i.hasOwnProperty(B)&&(l=i[B],this[B]=l?l(g):g[B]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Hl:rg,this.isPropagationStopped=rg,this}return Z(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Hl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Hl)},persist:function(){},isPersistent:Hl}),a}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cd=si(_s),Mo=Z({},_s,{view:0,detail:0}),pM=si(Mo),dd,fd,Eo,Gl=Z({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pd,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Eo&&(Eo&&i.type==="mousemove"?(dd=i.screenX-Eo.screenX,fd=i.screenY-Eo.screenY):fd=dd=0,Eo=i),dd)},movementY:function(i){return"movementY"in i?i.movementY:fd}}),ag=si(Gl),mM=Z({},Gl,{dataTransfer:0}),gM=si(mM),vM=Z({},Mo,{relatedTarget:0}),hd=si(vM),_M=Z({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),yM=si(_M),SM=Z({},_s,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),xM=si(SM),MM=Z({},_s,{data:0}),sg=si(MM),EM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function TM(i){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(i):(i=wM[i])?!!a[i]:!1}function pd(){return TM}var RM=Z({},Mo,{key:function(i){if(i.key){var a=EM[i.key]||i.key;if(a!=="Unidentified")return a}return i.type==="keypress"?(i=zl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?bM[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pd,charCode:function(i){return i.type==="keypress"?zl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?zl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),AM=si(RM),CM=Z({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),og=si(CM),PM=Z({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pd}),LM=si(PM),DM=Z({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),IM=si(DM),NM=Z({},Gl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),OM=si(NM),UM=[9,13,27,32],md=d&&"CompositionEvent"in window,bo=null;d&&"documentMode"in document&&(bo=document.documentMode);var FM=d&&"TextEvent"in window&&!bo,lg=d&&(!md||bo&&8<bo&&11>=bo),ug=" ",cg=!1;function dg(i,a){switch(i){case"keyup":return UM.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fg(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var ys=!1;function kM(i,a){switch(i){case"compositionend":return fg(a);case"keypress":return a.which!==32?null:(cg=!0,ug);case"textInput":return i=a.data,i===ug&&cg?null:i;default:return null}}function BM(i,a){if(ys)return i==="compositionend"||!md&&dg(i,a)?(i=ig(),Bl=ud=ta=null,ys=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return lg&&a.locale!=="ko"?null:a.data;default:return null}}var zM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hg(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a==="input"?!!zM[i.type]:a==="textarea"}function pg(i,a,l,c){de(c),a=ql(a,"onChange"),0<a.length&&(l=new cd("onChange","change",null,l,c),i.push({event:l,listeners:a}))}var wo=null,To=null;function HM(i){Dg(i,0)}function Vl(i){var a=bs(i);if(vt(a))return i}function GM(i,a){if(i==="change")return a}var mg=!1;if(d){var gd;if(d){var vd="oninput"in document;if(!vd){var gg=document.createElement("div");gg.setAttribute("oninput","return;"),vd=typeof gg.oninput=="function"}gd=vd}else gd=!1;mg=gd&&(!document.documentMode||9<document.documentMode)}function vg(){wo&&(wo.detachEvent("onpropertychange",_g),To=wo=null)}function _g(i){if(i.propertyName==="value"&&Vl(To)){var a=[];pg(a,To,i,fe(i)),ct(HM,a)}}function VM(i,a,l){i==="focusin"?(vg(),wo=a,To=l,wo.attachEvent("onpropertychange",_g)):i==="focusout"&&vg()}function WM(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Vl(To)}function $M(i,a){if(i==="click")return Vl(a)}function XM(i,a){if(i==="input"||i==="change")return Vl(a)}function qM(i,a){return i===a&&(i!==0||1/i===1/a)||i!==i&&a!==a}var Ui=typeof Object.is=="function"?Object.is:qM;function Ro(i,a){if(Ui(i,a))return!0;if(typeof i!="object"||i===null||typeof a!="object"||a===null)return!1;var l=Object.keys(i),c=Object.keys(a);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var p=l[c];if(!f.call(a,p)||!Ui(i[p],a[p]))return!1}return!0}function yg(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Sg(i,a){var l=yg(i);i=0;for(var c;l;){if(l.nodeType===3){if(c=i+l.textContent.length,i<=a&&c>=a)return{node:l,offset:a-i};i=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=yg(l)}}function xg(i,a){return i&&a?i===a?!0:i&&i.nodeType===3?!1:a&&a.nodeType===3?xg(i,a.parentNode):"contains"in i?i.contains(a):i.compareDocumentPosition?!!(i.compareDocumentPosition(a)&16):!1:!1}function Mg(){for(var i=window,a=St();a instanceof i.HTMLIFrameElement;){try{var l=typeof a.contentWindow.location.href=="string"}catch{l=!1}if(l)i=a.contentWindow;else break;a=St(i.document)}return a}function _d(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a&&(a==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||a==="textarea"||i.contentEditable==="true")}function YM(i){var a=Mg(),l=i.focusedElem,c=i.selectionRange;if(a!==l&&l&&l.ownerDocument&&xg(l.ownerDocument.documentElement,l)){if(c!==null&&_d(l)){if(a=c.start,i=c.end,i===void 0&&(i=a),"selectionStart"in l)l.selectionStart=a,l.selectionEnd=Math.min(i,l.value.length);else if(i=(a=l.ownerDocument||document)&&a.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,g=Math.min(c.start,p);c=c.end===void 0?g:Math.min(c.end,p),!i.extend&&g>c&&(p=c,c=g,g=p),p=Sg(l,g);var R=Sg(l,c);p&&R&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==R.node||i.focusOffset!==R.offset)&&(a=a.createRange(),a.setStart(p.node,p.offset),i.removeAllRanges(),g>c?(i.addRange(a),i.extend(R.node,R.offset)):(a.setEnd(R.node,R.offset),i.addRange(a)))}}for(a=[],i=l;i=i.parentNode;)i.nodeType===1&&a.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<a.length;l++)i=a[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var KM=d&&"documentMode"in document&&11>=document.documentMode,Ss=null,yd=null,Ao=null,Sd=!1;function Eg(i,a,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Sd||Ss==null||Ss!==St(c)||(c=Ss,"selectionStart"in c&&_d(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ao&&Ro(Ao,c)||(Ao=c,c=ql(yd,"onSelect"),0<c.length&&(a=new cd("onSelect","select",null,a,l),i.push({event:a,listeners:c}),a.target=Ss)))}function Wl(i,a){var l={};return l[i.toLowerCase()]=a.toLowerCase(),l["Webkit"+i]="webkit"+a,l["Moz"+i]="moz"+a,l}var xs={animationend:Wl("Animation","AnimationEnd"),animationiteration:Wl("Animation","AnimationIteration"),animationstart:Wl("Animation","AnimationStart"),transitionend:Wl("Transition","TransitionEnd")},xd={},bg={};d&&(bg=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function $l(i){if(xd[i])return xd[i];if(!xs[i])return i;var a=xs[i],l;for(l in a)if(a.hasOwnProperty(l)&&l in bg)return xd[i]=a[l];return i}var wg=$l("animationend"),Tg=$l("animationiteration"),Rg=$l("animationstart"),Ag=$l("transitionend"),Cg=new Map,Pg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function na(i,a){Cg.set(i,a),o(a,[i])}for(var Md=0;Md<Pg.length;Md++){var Ed=Pg[Md],ZM=Ed.toLowerCase(),jM=Ed[0].toUpperCase()+Ed.slice(1);na(ZM,"on"+jM)}na(wg,"onAnimationEnd"),na(Tg,"onAnimationIteration"),na(Rg,"onAnimationStart"),na("dblclick","onDoubleClick"),na("focusin","onFocus"),na("focusout","onBlur"),na(Ag,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));function Lg(i,a,l){var c=i.type||"unknown-event";i.currentTarget=l,Na(c,a,void 0,i),i.currentTarget=null}function Dg(i,a){a=(a&4)!==0;for(var l=0;l<i.length;l++){var c=i[l],p=c.event;c=c.listeners;e:{var g=void 0;if(a)for(var R=c.length-1;0<=R;R--){var B=c[R],W=B.instance,ce=B.currentTarget;if(B=B.listener,W!==g&&p.isPropagationStopped())break e;Lg(p,B,ce),g=W}else for(R=0;R<c.length;R++){if(B=c[R],W=B.instance,ce=B.currentTarget,B=B.listener,W!==g&&p.isPropagationStopped())break e;Lg(p,B,ce),g=W}}}if(Ln)throw i=Kr,Ln=!1,Kr=null,i}function $t(i,a){var l=a[Ld];l===void 0&&(l=a[Ld]=new Set);var c=i+"__bubble";l.has(c)||(Ig(a,i,2,!1),l.add(c))}function bd(i,a,l){var c=0;a&&(c|=4),Ig(l,i,c,a)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Po(i){if(!i[Xl]){i[Xl]=!0,r.forEach(function(l){l!=="selectionchange"&&(JM.has(l)||bd(l,!1,i),bd(l,!0,i))});var a=i.nodeType===9?i:i.ownerDocument;a===null||a[Xl]||(a[Xl]=!0,bd("selectionchange",!1,a))}}function Ig(i,a,l,c){switch(ng(a)){case 1:var p=fM;break;case 4:p=hM;break;default:p=od}l=p.bind(null,a,l,i),p=void 0,!Je||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(p=!0),c?p!==void 0?i.addEventListener(a,l,{capture:!0,passive:p}):i.addEventListener(a,l,!0):p!==void 0?i.addEventListener(a,l,{passive:p}):i.addEventListener(a,l,!1)}function wd(i,a,l,c,p){var g=c;if((a&1)===0&&(a&2)===0&&c!==null)e:for(;;){if(c===null)return;var R=c.tag;if(R===3||R===4){var B=c.stateNode.containerInfo;if(B===p||B.nodeType===8&&B.parentNode===p)break;if(R===4)for(R=c.return;R!==null;){var W=R.tag;if((W===3||W===4)&&(W=R.stateNode.containerInfo,W===p||W.nodeType===8&&W.parentNode===p))return;R=R.return}for(;B!==null;){if(R=Ha(B),R===null)return;if(W=R.tag,W===5||W===6){c=g=R;continue e}B=B.parentNode}}c=c.return}ct(function(){var ce=g,xe=fe(l),be=[];e:{var ye=Cg.get(i);if(ye!==void 0){var He=cd,Ke=i;switch(i){case"keypress":if(zl(l)===0)break e;case"keydown":case"keyup":He=AM;break;case"focusin":Ke="focus",He=hd;break;case"focusout":Ke="blur",He=hd;break;case"beforeblur":case"afterblur":He=hd;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=ag;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=gM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=LM;break;case wg:case Tg:case Rg:He=yM;break;case Ag:He=IM;break;case"scroll":He=pM;break;case"wheel":He=OM;break;case"copy":case"cut":case"paste":He=xM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=og}var Ze=(a&4)!==0,un=!Ze&&i==="scroll",re=Ze?ye!==null?ye+"Capture":null:ye;Ze=[];for(var q=ce,le;q!==null;){le=q;var Pe=le.stateNode;if(le.tag===5&&Pe!==null&&(le=Pe,re!==null&&(Pe=Se(q,re),Pe!=null&&Ze.push(Lo(q,Pe,le)))),un)break;q=q.return}0<Ze.length&&(ye=new He(ye,Ke,null,l,xe),be.push({event:ye,listeners:Ze}))}}if((a&7)===0){e:{if(ye=i==="mouseover"||i==="pointerover",He=i==="mouseout"||i==="pointerout",ye&&l!==Le&&(Ke=l.relatedTarget||l.fromElement)&&(Ha(Ke)||Ke[Tr]))break e;if((He||ye)&&(ye=xe.window===xe?xe:(ye=xe.ownerDocument)?ye.defaultView||ye.parentWindow:window,He?(Ke=l.relatedTarget||l.toElement,He=ce,Ke=Ke?Ha(Ke):null,Ke!==null&&(un=Si(Ke),Ke!==un||Ke.tag!==5&&Ke.tag!==6)&&(Ke=null)):(He=null,Ke=ce),He!==Ke)){if(Ze=ag,Pe="onMouseLeave",re="onMouseEnter",q="mouse",(i==="pointerout"||i==="pointerover")&&(Ze=og,Pe="onPointerLeave",re="onPointerEnter",q="pointer"),un=He==null?ye:bs(He),le=Ke==null?ye:bs(Ke),ye=new Ze(Pe,q+"leave",He,l,xe),ye.target=un,ye.relatedTarget=le,Pe=null,Ha(xe)===ce&&(Ze=new Ze(re,q+"enter",Ke,l,xe),Ze.target=le,Ze.relatedTarget=un,Pe=Ze),un=Pe,He&&Ke)t:{for(Ze=He,re=Ke,q=0,le=Ze;le;le=Ms(le))q++;for(le=0,Pe=re;Pe;Pe=Ms(Pe))le++;for(;0<q-le;)Ze=Ms(Ze),q--;for(;0<le-q;)re=Ms(re),le--;for(;q--;){if(Ze===re||re!==null&&Ze===re.alternate)break t;Ze=Ms(Ze),re=Ms(re)}Ze=null}else Ze=null;He!==null&&Ng(be,ye,He,Ze,!1),Ke!==null&&un!==null&&Ng(be,un,Ke,Ze,!0)}}e:{if(ye=ce?bs(ce):window,He=ye.nodeName&&ye.nodeName.toLowerCase(),He==="select"||He==="input"&&ye.type==="file")var Qe=GM;else if(hg(ye))if(mg)Qe=XM;else{Qe=WM;var it=VM}else(He=ye.nodeName)&&He.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(Qe=$M);if(Qe&&(Qe=Qe(i,ce))){pg(be,Qe,l,xe);break e}it&&it(i,ye,ce),i==="focusout"&&(it=ye._wrapperState)&&it.controlled&&ye.type==="number"&&Pn(ye,"number",ye.value)}switch(it=ce?bs(ce):window,i){case"focusin":(hg(it)||it.contentEditable==="true")&&(Ss=it,yd=ce,Ao=null);break;case"focusout":Ao=yd=Ss=null;break;case"mousedown":Sd=!0;break;case"contextmenu":case"mouseup":case"dragend":Sd=!1,Eg(be,l,xe);break;case"selectionchange":if(KM)break;case"keydown":case"keyup":Eg(be,l,xe)}var rt;if(md)e:{switch(i){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else ys?dg(i,l)&&(ot="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(ot="onCompositionStart");ot&&(lg&&l.locale!=="ko"&&(ys||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&ys&&(rt=ig()):(ta=xe,ud="value"in ta?ta.value:ta.textContent,ys=!0)),it=ql(ce,ot),0<it.length&&(ot=new sg(ot,i,null,l,xe),be.push({event:ot,listeners:it}),rt?ot.data=rt:(rt=fg(l),rt!==null&&(ot.data=rt)))),(rt=FM?kM(i,l):BM(i,l))&&(ce=ql(ce,"onBeforeInput"),0<ce.length&&(xe=new sg("onBeforeInput","beforeinput",null,l,xe),be.push({event:xe,listeners:ce}),xe.data=rt))}Dg(be,a)})}function Lo(i,a,l){return{instance:i,listener:a,currentTarget:l}}function ql(i,a){for(var l=a+"Capture",c=[];i!==null;){var p=i,g=p.stateNode;p.tag===5&&g!==null&&(p=g,g=Se(i,l),g!=null&&c.unshift(Lo(i,g,p)),g=Se(i,a),g!=null&&c.push(Lo(i,g,p))),i=i.return}return c}function Ms(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Ng(i,a,l,c,p){for(var g=a._reactName,R=[];l!==null&&l!==c;){var B=l,W=B.alternate,ce=B.stateNode;if(W!==null&&W===c)break;B.tag===5&&ce!==null&&(B=ce,p?(W=Se(l,g),W!=null&&R.unshift(Lo(l,W,B))):p||(W=Se(l,g),W!=null&&R.push(Lo(l,W,B)))),l=l.return}R.length!==0&&i.push({event:a,listeners:R})}var QM=/\r\n?/g,eE=/\u0000|\uFFFD/g;function Og(i){return(typeof i=="string"?i:""+i).replace(QM,`
`).replace(eE,"")}function Yl(i,a,l){if(a=Og(a),Og(i)!==a&&l)throw Error(t(425))}function Kl(){}var Td=null,Rd=null;function Ad(i,a){return i==="textarea"||i==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Cd=typeof setTimeout=="function"?setTimeout:void 0,tE=typeof clearTimeout=="function"?clearTimeout:void 0,Ug=typeof Promise=="function"?Promise:void 0,nE=typeof queueMicrotask=="function"?queueMicrotask:typeof Ug<"u"?function(i){return Ug.resolve(null).then(i).catch(iE)}:Cd;function iE(i){setTimeout(function(){throw i})}function Pd(i,a){var l=a,c=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(c===0){i.removeChild(p),xo(a);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=p}while(l);xo(a)}function ia(i){for(;i!=null;i=i.nextSibling){var a=i.nodeType;if(a===1||a===3)break;if(a===8){if(a=i.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return i}function Fg(i){i=i.previousSibling;for(var a=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(a===0)return i;a--}else l==="/$"&&a++}i=i.previousSibling}return null}var Es=Math.random().toString(36).slice(2),ar="__reactFiber$"+Es,Do="__reactProps$"+Es,Tr="__reactContainer$"+Es,Ld="__reactEvents$"+Es,rE="__reactListeners$"+Es,aE="__reactHandles$"+Es;function Ha(i){var a=i[ar];if(a)return a;for(var l=i.parentNode;l;){if(a=l[Tr]||l[ar]){if(l=a.alternate,a.child!==null||l!==null&&l.child!==null)for(i=Fg(i);i!==null;){if(l=i[ar])return l;i=Fg(i)}return a}i=l,l=i.parentNode}return null}function Io(i){return i=i[ar]||i[Tr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function bs(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Zl(i){return i[Do]||null}var Dd=[],ws=-1;function ra(i){return{current:i}}function Xt(i){0>ws||(i.current=Dd[ws],Dd[ws]=null,ws--)}function zt(i,a){ws++,Dd[ws]=i.current,i.current=a}var aa={},Dn=ra(aa),Xn=ra(!1),Ga=aa;function Ts(i,a){var l=i.type.contextTypes;if(!l)return aa;var c=i.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===a)return c.__reactInternalMemoizedMaskedChildContext;var p={},g;for(g in l)p[g]=a[g];return c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=a,i.__reactInternalMemoizedMaskedChildContext=p),p}function qn(i){return i=i.childContextTypes,i!=null}function jl(){Xt(Xn),Xt(Dn)}function kg(i,a,l){if(Dn.current!==aa)throw Error(t(168));zt(Dn,a),zt(Xn,l)}function Bg(i,a,l){var c=i.stateNode;if(a=a.childContextTypes,typeof c.getChildContext!="function")return l;c=c.getChildContext();for(var p in c)if(!(p in a))throw Error(t(108,Ee(i)||"Unknown",p));return Z({},l,c)}function Jl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||aa,Ga=Dn.current,zt(Dn,i),zt(Xn,Xn.current),!0}function zg(i,a,l){var c=i.stateNode;if(!c)throw Error(t(169));l?(i=Bg(i,a,Ga),c.__reactInternalMemoizedMergedChildContext=i,Xt(Xn),Xt(Dn),zt(Dn,i)):Xt(Xn),zt(Xn,l)}var Rr=null,Ql=!1,Id=!1;function Hg(i){Rr===null?Rr=[i]:Rr.push(i)}function sE(i){Ql=!0,Hg(i)}function sa(){if(!Id&&Rr!==null){Id=!0;var i=0,a=Ye;try{var l=Rr;for(Ye=1;i<l.length;i++){var c=l[i];do c=c(!0);while(c!==null)}Rr=null,Ql=!1}catch(p){throw Rr!==null&&(Rr=Rr.slice(i+1)),Oa(Qr,sa),p}finally{Ye=a,Id=!1}}return null}var Rs=[],As=0,eu=null,tu=0,xi=[],Mi=0,Va=null,Ar=1,Cr="";function Wa(i,a){Rs[As++]=tu,Rs[As++]=eu,eu=i,tu=a}function Gg(i,a,l){xi[Mi++]=Ar,xi[Mi++]=Cr,xi[Mi++]=Va,Va=i;var c=Ar;i=Cr;var p=32-J(c)-1;c&=~(1<<p),l+=1;var g=32-J(a)+p;if(30<g){var R=p-p%5;g=(c&(1<<R)-1).toString(32),c>>=R,p-=R,Ar=1<<32-J(a)+p|l<<p|c,Cr=g+i}else Ar=1<<g|l<<p|c,Cr=i}function Nd(i){i.return!==null&&(Wa(i,1),Gg(i,1,0))}function Od(i){for(;i===eu;)eu=Rs[--As],Rs[As]=null,tu=Rs[--As],Rs[As]=null;for(;i===Va;)Va=xi[--Mi],xi[Mi]=null,Cr=xi[--Mi],xi[Mi]=null,Ar=xi[--Mi],xi[Mi]=null}var oi=null,li=null,Zt=!1,Fi=null;function Vg(i,a){var l=Ti(5,null,null,0);l.elementType="DELETED",l.stateNode=a,l.return=i,a=i.deletions,a===null?(i.deletions=[l],i.flags|=16):a.push(l)}function Wg(i,a){switch(i.tag){case 5:var l=i.type;return a=a.nodeType!==1||l.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(i.stateNode=a,oi=i,li=ia(a.firstChild),!0):!1;case 6:return a=i.pendingProps===""||a.nodeType!==3?null:a,a!==null?(i.stateNode=a,oi=i,li=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(l=Va!==null?{id:Ar,overflow:Cr}:null,i.memoizedState={dehydrated:a,treeContext:l,retryLane:1073741824},l=Ti(18,null,null,0),l.stateNode=a,l.return=i,i.child=l,oi=i,li=null,!0):!1;default:return!1}}function Ud(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Fd(i){if(Zt){var a=li;if(a){var l=a;if(!Wg(i,a)){if(Ud(i))throw Error(t(418));a=ia(l.nextSibling);var c=oi;a&&Wg(i,a)?Vg(c,l):(i.flags=i.flags&-4097|2,Zt=!1,oi=i)}}else{if(Ud(i))throw Error(t(418));i.flags=i.flags&-4097|2,Zt=!1,oi=i}}}function $g(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;oi=i}function nu(i){if(i!==oi)return!1;if(!Zt)return $g(i),Zt=!0,!1;var a;if((a=i.tag!==3)&&!(a=i.tag!==5)&&(a=i.type,a=a!=="head"&&a!=="body"&&!Ad(i.type,i.memoizedProps)),a&&(a=li)){if(Ud(i))throw Xg(),Error(t(418));for(;a;)Vg(i,a),a=ia(a.nextSibling)}if($g(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,a=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(a===0){li=ia(i.nextSibling);break e}a--}else l!=="$"&&l!=="$!"&&l!=="$?"||a++}i=i.nextSibling}li=null}}else li=oi?ia(i.stateNode.nextSibling):null;return!0}function Xg(){for(var i=li;i;)i=ia(i.nextSibling)}function Cs(){li=oi=null,Zt=!1}function kd(i){Fi===null?Fi=[i]:Fi.push(i)}var oE=L.ReactCurrentBatchConfig;function No(i,a,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var c=l.stateNode}if(!c)throw Error(t(147,i));var p=c,g=""+i;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===g?a.ref:(a=function(R){var B=p.refs;R===null?delete B[g]:B[g]=R},a._stringRef=g,a)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function iu(i,a){throw i=Object.prototype.toString.call(a),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":i))}function qg(i){var a=i._init;return a(i._payload)}function Yg(i){function a(re,q){if(i){var le=re.deletions;le===null?(re.deletions=[q],re.flags|=16):le.push(q)}}function l(re,q){if(!i)return null;for(;q!==null;)a(re,q),q=q.sibling;return null}function c(re,q){for(re=new Map;q!==null;)q.key!==null?re.set(q.key,q):re.set(q.index,q),q=q.sibling;return re}function p(re,q){return re=pa(re,q),re.index=0,re.sibling=null,re}function g(re,q,le){return re.index=le,i?(le=re.alternate,le!==null?(le=le.index,le<q?(re.flags|=2,q):le):(re.flags|=2,q)):(re.flags|=1048576,q)}function R(re){return i&&re.alternate===null&&(re.flags|=2),re}function B(re,q,le,Pe){return q===null||q.tag!==6?(q=Pf(le,re.mode,Pe),q.return=re,q):(q=p(q,le),q.return=re,q)}function W(re,q,le,Pe){var Qe=le.type;return Qe===b?xe(re,q,le.props.children,Pe,le.key):q!==null&&(q.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ae&&qg(Qe)===q.type)?(Pe=p(q,le.props),Pe.ref=No(re,q,le),Pe.return=re,Pe):(Pe=Ru(le.type,le.key,le.props,null,re.mode,Pe),Pe.ref=No(re,q,le),Pe.return=re,Pe)}function ce(re,q,le,Pe){return q===null||q.tag!==4||q.stateNode.containerInfo!==le.containerInfo||q.stateNode.implementation!==le.implementation?(q=Lf(le,re.mode,Pe),q.return=re,q):(q=p(q,le.children||[]),q.return=re,q)}function xe(re,q,le,Pe,Qe){return q===null||q.tag!==7?(q=Ja(le,re.mode,Pe,Qe),q.return=re,q):(q=p(q,le),q.return=re,q)}function be(re,q,le){if(typeof q=="string"&&q!==""||typeof q=="number")return q=Pf(""+q,re.mode,le),q.return=re,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case N:return le=Ru(q.type,q.key,q.props,null,re.mode,le),le.ref=No(re,null,q),le.return=re,le;case I:return q=Lf(q,re.mode,le),q.return=re,q;case ae:var Pe=q._init;return be(re,Pe(q._payload),le)}if(Ft(q)||$(q))return q=Ja(q,re.mode,le,null),q.return=re,q;iu(re,q)}return null}function ye(re,q,le,Pe){var Qe=q!==null?q.key:null;if(typeof le=="string"&&le!==""||typeof le=="number")return Qe!==null?null:B(re,q,""+le,Pe);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case N:return le.key===Qe?W(re,q,le,Pe):null;case I:return le.key===Qe?ce(re,q,le,Pe):null;case ae:return Qe=le._init,ye(re,q,Qe(le._payload),Pe)}if(Ft(le)||$(le))return Qe!==null?null:xe(re,q,le,Pe,null);iu(re,le)}return null}function He(re,q,le,Pe,Qe){if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number")return re=re.get(le)||null,B(q,re,""+Pe,Qe);if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case N:return re=re.get(Pe.key===null?le:Pe.key)||null,W(q,re,Pe,Qe);case I:return re=re.get(Pe.key===null?le:Pe.key)||null,ce(q,re,Pe,Qe);case ae:var it=Pe._init;return He(re,q,le,it(Pe._payload),Qe)}if(Ft(Pe)||$(Pe))return re=re.get(le)||null,xe(q,re,Pe,Qe,null);iu(q,Pe)}return null}function Ke(re,q,le,Pe){for(var Qe=null,it=null,rt=q,ot=q=0,Mn=null;rt!==null&&ot<le.length;ot++){rt.index>ot?(Mn=rt,rt=null):Mn=rt.sibling;var Ct=ye(re,rt,le[ot],Pe);if(Ct===null){rt===null&&(rt=Mn);break}i&&rt&&Ct.alternate===null&&a(re,rt),q=g(Ct,q,ot),it===null?Qe=Ct:it.sibling=Ct,it=Ct,rt=Mn}if(ot===le.length)return l(re,rt),Zt&&Wa(re,ot),Qe;if(rt===null){for(;ot<le.length;ot++)rt=be(re,le[ot],Pe),rt!==null&&(q=g(rt,q,ot),it===null?Qe=rt:it.sibling=rt,it=rt);return Zt&&Wa(re,ot),Qe}for(rt=c(re,rt);ot<le.length;ot++)Mn=He(rt,re,ot,le[ot],Pe),Mn!==null&&(i&&Mn.alternate!==null&&rt.delete(Mn.key===null?ot:Mn.key),q=g(Mn,q,ot),it===null?Qe=Mn:it.sibling=Mn,it=Mn);return i&&rt.forEach(function(ma){return a(re,ma)}),Zt&&Wa(re,ot),Qe}function Ze(re,q,le,Pe){var Qe=$(le);if(typeof Qe!="function")throw Error(t(150));if(le=Qe.call(le),le==null)throw Error(t(151));for(var it=Qe=null,rt=q,ot=q=0,Mn=null,Ct=le.next();rt!==null&&!Ct.done;ot++,Ct=le.next()){rt.index>ot?(Mn=rt,rt=null):Mn=rt.sibling;var ma=ye(re,rt,Ct.value,Pe);if(ma===null){rt===null&&(rt=Mn);break}i&&rt&&ma.alternate===null&&a(re,rt),q=g(ma,q,ot),it===null?Qe=ma:it.sibling=ma,it=ma,rt=Mn}if(Ct.done)return l(re,rt),Zt&&Wa(re,ot),Qe;if(rt===null){for(;!Ct.done;ot++,Ct=le.next())Ct=be(re,Ct.value,Pe),Ct!==null&&(q=g(Ct,q,ot),it===null?Qe=Ct:it.sibling=Ct,it=Ct);return Zt&&Wa(re,ot),Qe}for(rt=c(re,rt);!Ct.done;ot++,Ct=le.next())Ct=He(rt,re,ot,Ct.value,Pe),Ct!==null&&(i&&Ct.alternate!==null&&rt.delete(Ct.key===null?ot:Ct.key),q=g(Ct,q,ot),it===null?Qe=Ct:it.sibling=Ct,it=Ct);return i&&rt.forEach(function(zE){return a(re,zE)}),Zt&&Wa(re,ot),Qe}function un(re,q,le,Pe){if(typeof le=="object"&&le!==null&&le.type===b&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case N:e:{for(var Qe=le.key,it=q;it!==null;){if(it.key===Qe){if(Qe=le.type,Qe===b){if(it.tag===7){l(re,it.sibling),q=p(it,le.props.children),q.return=re,re=q;break e}}else if(it.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ae&&qg(Qe)===it.type){l(re,it.sibling),q=p(it,le.props),q.ref=No(re,it,le),q.return=re,re=q;break e}l(re,it);break}else a(re,it);it=it.sibling}le.type===b?(q=Ja(le.props.children,re.mode,Pe,le.key),q.return=re,re=q):(Pe=Ru(le.type,le.key,le.props,null,re.mode,Pe),Pe.ref=No(re,q,le),Pe.return=re,re=Pe)}return R(re);case I:e:{for(it=le.key;q!==null;){if(q.key===it)if(q.tag===4&&q.stateNode.containerInfo===le.containerInfo&&q.stateNode.implementation===le.implementation){l(re,q.sibling),q=p(q,le.children||[]),q.return=re,re=q;break e}else{l(re,q);break}else a(re,q);q=q.sibling}q=Lf(le,re.mode,Pe),q.return=re,re=q}return R(re);case ae:return it=le._init,un(re,q,it(le._payload),Pe)}if(Ft(le))return Ke(re,q,le,Pe);if($(le))return Ze(re,q,le,Pe);iu(re,le)}return typeof le=="string"&&le!==""||typeof le=="number"?(le=""+le,q!==null&&q.tag===6?(l(re,q.sibling),q=p(q,le),q.return=re,re=q):(l(re,q),q=Pf(le,re.mode,Pe),q.return=re,re=q),R(re)):l(re,q)}return un}var Ps=Yg(!0),Kg=Yg(!1),ru=ra(null),au=null,Ls=null,Bd=null;function zd(){Bd=Ls=au=null}function Hd(i){var a=ru.current;Xt(ru),i._currentValue=a}function Gd(i,a,l){for(;i!==null;){var c=i.alternate;if((i.childLanes&a)!==a?(i.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),i===l)break;i=i.return}}function Ds(i,a){au=i,Bd=Ls=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&a)!==0&&(Yn=!0),i.firstContext=null)}function Ei(i){var a=i._currentValue;if(Bd!==i)if(i={context:i,memoizedValue:a,next:null},Ls===null){if(au===null)throw Error(t(308));Ls=i,au.dependencies={lanes:0,firstContext:i}}else Ls=Ls.next=i;return a}var $a=null;function Vd(i){$a===null?$a=[i]:$a.push(i)}function Zg(i,a,l,c){var p=a.interleaved;return p===null?(l.next=l,Vd(a)):(l.next=p.next,p.next=l),a.interleaved=l,Pr(i,c)}function Pr(i,a){i.lanes|=a;var l=i.alternate;for(l!==null&&(l.lanes|=a),l=i,i=i.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),l=i,i=i.return;return l.tag===3?l.stateNode:null}var oa=!1;function Wd(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jg(i,a){i=i.updateQueue,a.updateQueue===i&&(a.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Lr(i,a){return{eventTime:i,lane:a,tag:0,payload:null,callback:null,next:null}}function la(i,a,l){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(Rt&2)!==0){var p=c.pending;return p===null?a.next=a:(a.next=p.next,p.next=a),c.pending=a,Pr(i,l)}return p=c.interleaved,p===null?(a.next=a,Vd(c)):(a.next=p.next,p.next=a),c.interleaved=a,Pr(i,l)}function su(i,a,l){if(a=a.updateQueue,a!==null&&(a=a.shared,(l&4194240)!==0)){var c=a.lanes;c&=i.pendingLanes,l|=c,a.lanes=l,nn(i,l)}}function Jg(i,a){var l=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var p=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var R={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};g===null?p=g=R:g=g.next=R,l=l.next}while(l!==null);g===null?p=g=a:g=g.next=a}else p=g=a;l={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:c.shared,effects:c.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=a:i.next=a,l.lastBaseUpdate=a}function ou(i,a,l,c){var p=i.updateQueue;oa=!1;var g=p.firstBaseUpdate,R=p.lastBaseUpdate,B=p.shared.pending;if(B!==null){p.shared.pending=null;var W=B,ce=W.next;W.next=null,R===null?g=ce:R.next=ce,R=W;var xe=i.alternate;xe!==null&&(xe=xe.updateQueue,B=xe.lastBaseUpdate,B!==R&&(B===null?xe.firstBaseUpdate=ce:B.next=ce,xe.lastBaseUpdate=W))}if(g!==null){var be=p.baseState;R=0,xe=ce=W=null,B=g;do{var ye=B.lane,He=B.eventTime;if((c&ye)===ye){xe!==null&&(xe=xe.next={eventTime:He,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var Ke=i,Ze=B;switch(ye=a,He=l,Ze.tag){case 1:if(Ke=Ze.payload,typeof Ke=="function"){be=Ke.call(He,be,ye);break e}be=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=Ze.payload,ye=typeof Ke=="function"?Ke.call(He,be,ye):Ke,ye==null)break e;be=Z({},be,ye);break e;case 2:oa=!0}}B.callback!==null&&B.lane!==0&&(i.flags|=64,ye=p.effects,ye===null?p.effects=[B]:ye.push(B))}else He={eventTime:He,lane:ye,tag:B.tag,payload:B.payload,callback:B.callback,next:null},xe===null?(ce=xe=He,W=be):xe=xe.next=He,R|=ye;if(B=B.next,B===null){if(B=p.shared.pending,B===null)break;ye=B,B=ye.next,ye.next=null,p.lastBaseUpdate=ye,p.shared.pending=null}}while(!0);if(xe===null&&(W=be),p.baseState=W,p.firstBaseUpdate=ce,p.lastBaseUpdate=xe,a=p.shared.interleaved,a!==null){p=a;do R|=p.lane,p=p.next;while(p!==a)}else g===null&&(p.shared.lanes=0);Ya|=R,i.lanes=R,i.memoizedState=be}}function Qg(i,a,l){if(i=a.effects,a.effects=null,i!==null)for(a=0;a<i.length;a++){var c=i[a],p=c.callback;if(p!==null){if(c.callback=null,c=l,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var Oo={},sr=ra(Oo),Uo=ra(Oo),Fo=ra(Oo);function Xa(i){if(i===Oo)throw Error(t(174));return i}function $d(i,a){switch(zt(Fo,a),zt(Uo,i),zt(sr,Oo),i=a.nodeType,i){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:Dt(null,"");break;default:i=i===8?a.parentNode:a,a=i.namespaceURI||null,i=i.tagName,a=Dt(a,i)}Xt(sr),zt(sr,a)}function Is(){Xt(sr),Xt(Uo),Xt(Fo)}function ev(i){Xa(Fo.current);var a=Xa(sr.current),l=Dt(a,i.type);a!==l&&(zt(Uo,i),zt(sr,l))}function Xd(i){Uo.current===i&&(Xt(sr),Xt(Uo))}var jt=ra(0);function lu(i){for(var a=i;a!==null;){if(a.tag===13){var l=a.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var qd=[];function Yd(){for(var i=0;i<qd.length;i++)qd[i]._workInProgressVersionPrimary=null;qd.length=0}var uu=L.ReactCurrentDispatcher,Kd=L.ReactCurrentBatchConfig,qa=0,Jt=null,gn=null,Sn=null,cu=!1,ko=!1,Bo=0,lE=0;function In(){throw Error(t(321))}function Zd(i,a){if(a===null)return!1;for(var l=0;l<a.length&&l<i.length;l++)if(!Ui(i[l],a[l]))return!1;return!0}function jd(i,a,l,c,p,g){if(qa=g,Jt=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,uu.current=i===null||i.memoizedState===null?fE:hE,i=l(c,p),ko){g=0;do{if(ko=!1,Bo=0,25<=g)throw Error(t(301));g+=1,Sn=gn=null,a.updateQueue=null,uu.current=pE,i=l(c,p)}while(ko)}if(uu.current=hu,a=gn!==null&&gn.next!==null,qa=0,Sn=gn=Jt=null,cu=!1,a)throw Error(t(300));return i}function Jd(){var i=Bo!==0;return Bo=0,i}function or(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?Jt.memoizedState=Sn=i:Sn=Sn.next=i,Sn}function bi(){if(gn===null){var i=Jt.alternate;i=i!==null?i.memoizedState:null}else i=gn.next;var a=Sn===null?Jt.memoizedState:Sn.next;if(a!==null)Sn=a,gn=i;else{if(i===null)throw Error(t(310));gn=i,i={memoizedState:gn.memoizedState,baseState:gn.baseState,baseQueue:gn.baseQueue,queue:gn.queue,next:null},Sn===null?Jt.memoizedState=Sn=i:Sn=Sn.next=i}return Sn}function zo(i,a){return typeof a=="function"?a(i):a}function Qd(i){var a=bi(),l=a.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var c=gn,p=c.baseQueue,g=l.pending;if(g!==null){if(p!==null){var R=p.next;p.next=g.next,g.next=R}c.baseQueue=p=g,l.pending=null}if(p!==null){g=p.next,c=c.baseState;var B=R=null,W=null,ce=g;do{var xe=ce.lane;if((qa&xe)===xe)W!==null&&(W=W.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),c=ce.hasEagerState?ce.eagerState:i(c,ce.action);else{var be={lane:xe,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};W===null?(B=W=be,R=c):W=W.next=be,Jt.lanes|=xe,Ya|=xe}ce=ce.next}while(ce!==null&&ce!==g);W===null?R=c:W.next=B,Ui(c,a.memoizedState)||(Yn=!0),a.memoizedState=c,a.baseState=R,a.baseQueue=W,l.lastRenderedState=c}if(i=l.interleaved,i!==null){p=i;do g=p.lane,Jt.lanes|=g,Ya|=g,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[a.memoizedState,l.dispatch]}function ef(i){var a=bi(),l=a.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var c=l.dispatch,p=l.pending,g=a.memoizedState;if(p!==null){l.pending=null;var R=p=p.next;do g=i(g,R.action),R=R.next;while(R!==p);Ui(g,a.memoizedState)||(Yn=!0),a.memoizedState=g,a.baseQueue===null&&(a.baseState=g),l.lastRenderedState=g}return[g,c]}function tv(){}function nv(i,a){var l=Jt,c=bi(),p=a(),g=!Ui(c.memoizedState,p);if(g&&(c.memoizedState=p,Yn=!0),c=c.queue,tf(av.bind(null,l,c,i),[i]),c.getSnapshot!==a||g||Sn!==null&&Sn.memoizedState.tag&1){if(l.flags|=2048,Ho(9,rv.bind(null,l,c,p,a),void 0,null),xn===null)throw Error(t(349));(qa&30)!==0||iv(l,a,p)}return p}function iv(i,a,l){i.flags|=16384,i={getSnapshot:a,value:l},a=Jt.updateQueue,a===null?(a={lastEffect:null,stores:null},Jt.updateQueue=a,a.stores=[i]):(l=a.stores,l===null?a.stores=[i]:l.push(i))}function rv(i,a,l,c){a.value=l,a.getSnapshot=c,sv(a)&&ov(i)}function av(i,a,l){return l(function(){sv(a)&&ov(i)})}function sv(i){var a=i.getSnapshot;i=i.value;try{var l=a();return!Ui(i,l)}catch{return!0}}function ov(i){var a=Pr(i,1);a!==null&&Hi(a,i,1,-1)}function lv(i){var a=or();return typeof i=="function"&&(i=i()),a.memoizedState=a.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:i},a.queue=i,i=i.dispatch=dE.bind(null,Jt,i),[a.memoizedState,i]}function Ho(i,a,l,c){return i={tag:i,create:a,destroy:l,deps:c,next:null},a=Jt.updateQueue,a===null?(a={lastEffect:null,stores:null},Jt.updateQueue=a,a.lastEffect=i.next=i):(l=a.lastEffect,l===null?a.lastEffect=i.next=i:(c=l.next,l.next=i,i.next=c,a.lastEffect=i)),i}function uv(){return bi().memoizedState}function du(i,a,l,c){var p=or();Jt.flags|=i,p.memoizedState=Ho(1|a,l,void 0,c===void 0?null:c)}function fu(i,a,l,c){var p=bi();c=c===void 0?null:c;var g=void 0;if(gn!==null){var R=gn.memoizedState;if(g=R.destroy,c!==null&&Zd(c,R.deps)){p.memoizedState=Ho(a,l,g,c);return}}Jt.flags|=i,p.memoizedState=Ho(1|a,l,g,c)}function cv(i,a){return du(8390656,8,i,a)}function tf(i,a){return fu(2048,8,i,a)}function dv(i,a){return fu(4,2,i,a)}function fv(i,a){return fu(4,4,i,a)}function hv(i,a){if(typeof a=="function")return i=i(),a(i),function(){a(null)};if(a!=null)return i=i(),a.current=i,function(){a.current=null}}function pv(i,a,l){return l=l!=null?l.concat([i]):null,fu(4,4,hv.bind(null,a,i),l)}function nf(){}function mv(i,a){var l=bi();a=a===void 0?null:a;var c=l.memoizedState;return c!==null&&a!==null&&Zd(a,c[1])?c[0]:(l.memoizedState=[i,a],i)}function gv(i,a){var l=bi();a=a===void 0?null:a;var c=l.memoizedState;return c!==null&&a!==null&&Zd(a,c[1])?c[0]:(i=i(),l.memoizedState=[i,a],i)}function vv(i,a,l){return(qa&21)===0?(i.baseState&&(i.baseState=!1,Yn=!0),i.memoizedState=l):(Ui(l,a)||(l=At(),Jt.lanes|=l,Ya|=l,i.baseState=!0),a)}function uE(i,a){var l=Ye;Ye=l!==0&&4>l?l:4,i(!0);var c=Kd.transition;Kd.transition={};try{i(!1),a()}finally{Ye=l,Kd.transition=c}}function _v(){return bi().memoizedState}function cE(i,a,l){var c=fa(i);if(l={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null},yv(i))Sv(a,l);else if(l=Zg(i,a,l,c),l!==null){var p=Hn();Hi(l,i,c,p),xv(l,a,c)}}function dE(i,a,l){var c=fa(i),p={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null};if(yv(i))Sv(a,p);else{var g=i.alternate;if(i.lanes===0&&(g===null||g.lanes===0)&&(g=a.lastRenderedReducer,g!==null))try{var R=a.lastRenderedState,B=g(R,l);if(p.hasEagerState=!0,p.eagerState=B,Ui(B,R)){var W=a.interleaved;W===null?(p.next=p,Vd(a)):(p.next=W.next,W.next=p),a.interleaved=p;return}}catch{}finally{}l=Zg(i,a,p,c),l!==null&&(p=Hn(),Hi(l,i,c,p),xv(l,a,c))}}function yv(i){var a=i.alternate;return i===Jt||a!==null&&a===Jt}function Sv(i,a){ko=cu=!0;var l=i.pending;l===null?a.next=a:(a.next=l.next,l.next=a),i.pending=a}function xv(i,a,l){if((l&4194240)!==0){var c=a.lanes;c&=i.pendingLanes,l|=c,a.lanes=l,nn(i,l)}}var hu={readContext:Ei,useCallback:In,useContext:In,useEffect:In,useImperativeHandle:In,useInsertionEffect:In,useLayoutEffect:In,useMemo:In,useReducer:In,useRef:In,useState:In,useDebugValue:In,useDeferredValue:In,useTransition:In,useMutableSource:In,useSyncExternalStore:In,useId:In,unstable_isNewReconciler:!1},fE={readContext:Ei,useCallback:function(i,a){return or().memoizedState=[i,a===void 0?null:a],i},useContext:Ei,useEffect:cv,useImperativeHandle:function(i,a,l){return l=l!=null?l.concat([i]):null,du(4194308,4,hv.bind(null,a,i),l)},useLayoutEffect:function(i,a){return du(4194308,4,i,a)},useInsertionEffect:function(i,a){return du(4,2,i,a)},useMemo:function(i,a){var l=or();return a=a===void 0?null:a,i=i(),l.memoizedState=[i,a],i},useReducer:function(i,a,l){var c=or();return a=l!==void 0?l(a):a,c.memoizedState=c.baseState=a,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:a},c.queue=i,i=i.dispatch=cE.bind(null,Jt,i),[c.memoizedState,i]},useRef:function(i){var a=or();return i={current:i},a.memoizedState=i},useState:lv,useDebugValue:nf,useDeferredValue:function(i){return or().memoizedState=i},useTransition:function(){var i=lv(!1),a=i[0];return i=uE.bind(null,i[1]),or().memoizedState=i,[a,i]},useMutableSource:function(){},useSyncExternalStore:function(i,a,l){var c=Jt,p=or();if(Zt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=a(),xn===null)throw Error(t(349));(qa&30)!==0||iv(c,a,l)}p.memoizedState=l;var g={value:l,getSnapshot:a};return p.queue=g,cv(av.bind(null,c,g,i),[i]),c.flags|=2048,Ho(9,rv.bind(null,c,g,l,a),void 0,null),l},useId:function(){var i=or(),a=xn.identifierPrefix;if(Zt){var l=Cr,c=Ar;l=(c&~(1<<32-J(c)-1)).toString(32)+l,a=":"+a+"R"+l,l=Bo++,0<l&&(a+="H"+l.toString(32)),a+=":"}else l=lE++,a=":"+a+"r"+l.toString(32)+":";return i.memoizedState=a},unstable_isNewReconciler:!1},hE={readContext:Ei,useCallback:mv,useContext:Ei,useEffect:tf,useImperativeHandle:pv,useInsertionEffect:dv,useLayoutEffect:fv,useMemo:gv,useReducer:Qd,useRef:uv,useState:function(){return Qd(zo)},useDebugValue:nf,useDeferredValue:function(i){var a=bi();return vv(a,gn.memoizedState,i)},useTransition:function(){var i=Qd(zo)[0],a=bi().memoizedState;return[i,a]},useMutableSource:tv,useSyncExternalStore:nv,useId:_v,unstable_isNewReconciler:!1},pE={readContext:Ei,useCallback:mv,useContext:Ei,useEffect:tf,useImperativeHandle:pv,useInsertionEffect:dv,useLayoutEffect:fv,useMemo:gv,useReducer:ef,useRef:uv,useState:function(){return ef(zo)},useDebugValue:nf,useDeferredValue:function(i){var a=bi();return gn===null?a.memoizedState=i:vv(a,gn.memoizedState,i)},useTransition:function(){var i=ef(zo)[0],a=bi().memoizedState;return[i,a]},useMutableSource:tv,useSyncExternalStore:nv,useId:_v,unstable_isNewReconciler:!1};function ki(i,a){if(i&&i.defaultProps){a=Z({},a),i=i.defaultProps;for(var l in i)a[l]===void 0&&(a[l]=i[l]);return a}return a}function rf(i,a,l,c){a=i.memoizedState,l=l(c,a),l=l==null?a:Z({},a,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var pu={isMounted:function(i){return(i=i._reactInternals)?Si(i)===i:!1},enqueueSetState:function(i,a,l){i=i._reactInternals;var c=Hn(),p=fa(i),g=Lr(c,p);g.payload=a,l!=null&&(g.callback=l),a=la(i,g,p),a!==null&&(Hi(a,i,p,c),su(a,i,p))},enqueueReplaceState:function(i,a,l){i=i._reactInternals;var c=Hn(),p=fa(i),g=Lr(c,p);g.tag=1,g.payload=a,l!=null&&(g.callback=l),a=la(i,g,p),a!==null&&(Hi(a,i,p,c),su(a,i,p))},enqueueForceUpdate:function(i,a){i=i._reactInternals;var l=Hn(),c=fa(i),p=Lr(l,c);p.tag=2,a!=null&&(p.callback=a),a=la(i,p,c),a!==null&&(Hi(a,i,c,l),su(a,i,c))}};function Mv(i,a,l,c,p,g,R){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,g,R):a.prototype&&a.prototype.isPureReactComponent?!Ro(l,c)||!Ro(p,g):!0}function Ev(i,a,l){var c=!1,p=aa,g=a.contextType;return typeof g=="object"&&g!==null?g=Ei(g):(p=qn(a)?Ga:Dn.current,c=a.contextTypes,g=(c=c!=null)?Ts(i,p):aa),a=new a(l,g),i.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=pu,i.stateNode=a,a._reactInternals=i,c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=g),a}function bv(i,a,l,c){i=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(l,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(l,c),a.state!==i&&pu.enqueueReplaceState(a,a.state,null)}function af(i,a,l,c){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},Wd(i);var g=a.contextType;typeof g=="object"&&g!==null?p.context=Ei(g):(g=qn(a)?Ga:Dn.current,p.context=Ts(i,g)),p.state=i.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(rf(i,a,g,l),p.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(a=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),a!==p.state&&pu.enqueueReplaceState(p,p.state,null),ou(i,l,p,c),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Ns(i,a){try{var l="",c=a;do l+=ve(c),c=c.return;while(c);var p=l}catch(g){p=`
Error generating stack: `+g.message+`
`+g.stack}return{value:i,source:a,stack:p,digest:null}}function sf(i,a,l){return{value:i,source:null,stack:l??null,digest:a??null}}function of(i,a){try{console.error(a.value)}catch(l){setTimeout(function(){throw l})}}var mE=typeof WeakMap=="function"?WeakMap:Map;function wv(i,a,l){l=Lr(-1,l),l.tag=3,l.payload={element:null};var c=a.value;return l.callback=function(){xu||(xu=!0,Mf=c),of(i,a)},l}function Tv(i,a,l){l=Lr(-1,l),l.tag=3;var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var p=a.value;l.payload=function(){return c(p)},l.callback=function(){of(i,a)}}var g=i.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(l.callback=function(){of(i,a),typeof c!="function"&&(ca===null?ca=new Set([this]):ca.add(this));var R=a.stack;this.componentDidCatch(a.value,{componentStack:R!==null?R:""})}),l}function Rv(i,a,l){var c=i.pingCache;if(c===null){c=i.pingCache=new mE;var p=new Set;c.set(a,p)}else p=c.get(a),p===void 0&&(p=new Set,c.set(a,p));p.has(l)||(p.add(l),i=CE.bind(null,i,a,l),a.then(i,i))}function Av(i){do{var a;if((a=i.tag===13)&&(a=i.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return i;i=i.return}while(i!==null);return null}function Cv(i,a,l,c,p){return(i.mode&1)===0?(i===a?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(a=Lr(-1,1),a.tag=2,la(l,a,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var gE=L.ReactCurrentOwner,Yn=!1;function zn(i,a,l,c){a.child=i===null?Kg(a,null,l,c):Ps(a,i.child,l,c)}function Pv(i,a,l,c,p){l=l.render;var g=a.ref;return Ds(a,p),c=jd(i,a,l,c,g,p),l=Jd(),i!==null&&!Yn?(a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~p,Dr(i,a,p)):(Zt&&l&&Nd(a),a.flags|=1,zn(i,a,c,p),a.child)}function Lv(i,a,l,c,p){if(i===null){var g=l.type;return typeof g=="function"&&!Cf(g)&&g.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(a.tag=15,a.type=g,Dv(i,a,g,c,p)):(i=Ru(l.type,null,c,a,a.mode,p),i.ref=a.ref,i.return=a,a.child=i)}if(g=i.child,(i.lanes&p)===0){var R=g.memoizedProps;if(l=l.compare,l=l!==null?l:Ro,l(R,c)&&i.ref===a.ref)return Dr(i,a,p)}return a.flags|=1,i=pa(g,c),i.ref=a.ref,i.return=a,a.child=i}function Dv(i,a,l,c,p){if(i!==null){var g=i.memoizedProps;if(Ro(g,c)&&i.ref===a.ref)if(Yn=!1,a.pendingProps=c=g,(i.lanes&p)!==0)(i.flags&131072)!==0&&(Yn=!0);else return a.lanes=i.lanes,Dr(i,a,p)}return lf(i,a,l,c,p)}function Iv(i,a,l){var c=a.pendingProps,p=c.children,g=i!==null?i.memoizedState:null;if(c.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(Us,ui),ui|=l;else{if((l&1073741824)===0)return i=g!==null?g.baseLanes|l:l,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:i,cachePool:null,transitions:null},a.updateQueue=null,zt(Us,ui),ui|=i,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:l,zt(Us,ui),ui|=c}else g!==null?(c=g.baseLanes|l,a.memoizedState=null):c=l,zt(Us,ui),ui|=c;return zn(i,a,p,l),a.child}function Nv(i,a){var l=a.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(a.flags|=512,a.flags|=2097152)}function lf(i,a,l,c,p){var g=qn(l)?Ga:Dn.current;return g=Ts(a,g),Ds(a,p),l=jd(i,a,l,c,g,p),c=Jd(),i!==null&&!Yn?(a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~p,Dr(i,a,p)):(Zt&&c&&Nd(a),a.flags|=1,zn(i,a,l,p),a.child)}function Ov(i,a,l,c,p){if(qn(l)){var g=!0;Jl(a)}else g=!1;if(Ds(a,p),a.stateNode===null)gu(i,a),Ev(a,l,c),af(a,l,c,p),c=!0;else if(i===null){var R=a.stateNode,B=a.memoizedProps;R.props=B;var W=R.context,ce=l.contextType;typeof ce=="object"&&ce!==null?ce=Ei(ce):(ce=qn(l)?Ga:Dn.current,ce=Ts(a,ce));var xe=l.getDerivedStateFromProps,be=typeof xe=="function"||typeof R.getSnapshotBeforeUpdate=="function";be||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(B!==c||W!==ce)&&bv(a,R,c,ce),oa=!1;var ye=a.memoizedState;R.state=ye,ou(a,c,R,p),W=a.memoizedState,B!==c||ye!==W||Xn.current||oa?(typeof xe=="function"&&(rf(a,l,xe,c),W=a.memoizedState),(B=oa||Mv(a,l,B,c,ye,W,ce))?(be||typeof R.UNSAFE_componentWillMount!="function"&&typeof R.componentWillMount!="function"||(typeof R.componentWillMount=="function"&&R.componentWillMount(),typeof R.UNSAFE_componentWillMount=="function"&&R.UNSAFE_componentWillMount()),typeof R.componentDidMount=="function"&&(a.flags|=4194308)):(typeof R.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=W),R.props=c,R.state=W,R.context=ce,c=B):(typeof R.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{R=a.stateNode,jg(i,a),B=a.memoizedProps,ce=a.type===a.elementType?B:ki(a.type,B),R.props=ce,be=a.pendingProps,ye=R.context,W=l.contextType,typeof W=="object"&&W!==null?W=Ei(W):(W=qn(l)?Ga:Dn.current,W=Ts(a,W));var He=l.getDerivedStateFromProps;(xe=typeof He=="function"||typeof R.getSnapshotBeforeUpdate=="function")||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(B!==be||ye!==W)&&bv(a,R,c,W),oa=!1,ye=a.memoizedState,R.state=ye,ou(a,c,R,p);var Ke=a.memoizedState;B!==be||ye!==Ke||Xn.current||oa?(typeof He=="function"&&(rf(a,l,He,c),Ke=a.memoizedState),(ce=oa||Mv(a,l,ce,c,ye,Ke,W)||!1)?(xe||typeof R.UNSAFE_componentWillUpdate!="function"&&typeof R.componentWillUpdate!="function"||(typeof R.componentWillUpdate=="function"&&R.componentWillUpdate(c,Ke,W),typeof R.UNSAFE_componentWillUpdate=="function"&&R.UNSAFE_componentWillUpdate(c,Ke,W)),typeof R.componentDidUpdate=="function"&&(a.flags|=4),typeof R.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof R.componentDidUpdate!="function"||B===i.memoizedProps&&ye===i.memoizedState||(a.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||B===i.memoizedProps&&ye===i.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=Ke),R.props=c,R.state=Ke,R.context=W,c=ce):(typeof R.componentDidUpdate!="function"||B===i.memoizedProps&&ye===i.memoizedState||(a.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||B===i.memoizedProps&&ye===i.memoizedState||(a.flags|=1024),c=!1)}return uf(i,a,l,c,g,p)}function uf(i,a,l,c,p,g){Nv(i,a);var R=(a.flags&128)!==0;if(!c&&!R)return p&&zg(a,l,!1),Dr(i,a,g);c=a.stateNode,gE.current=a;var B=R&&typeof l.getDerivedStateFromError!="function"?null:c.render();return a.flags|=1,i!==null&&R?(a.child=Ps(a,i.child,null,g),a.child=Ps(a,null,B,g)):zn(i,a,B,g),a.memoizedState=c.state,p&&zg(a,l,!0),a.child}function Uv(i){var a=i.stateNode;a.pendingContext?kg(i,a.pendingContext,a.pendingContext!==a.context):a.context&&kg(i,a.context,!1),$d(i,a.containerInfo)}function Fv(i,a,l,c,p){return Cs(),kd(p),a.flags|=256,zn(i,a,l,c),a.child}var cf={dehydrated:null,treeContext:null,retryLane:0};function df(i){return{baseLanes:i,cachePool:null,transitions:null}}function kv(i,a,l){var c=a.pendingProps,p=jt.current,g=!1,R=(a.flags&128)!==0,B;if((B=R)||(B=i!==null&&i.memoizedState===null?!1:(p&2)!==0),B?(g=!0,a.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),zt(jt,p&1),i===null)return Fd(a),i=a.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((a.mode&1)===0?a.lanes=1:i.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(R=c.children,i=c.fallback,g?(c=a.mode,g=a.child,R={mode:"hidden",children:R},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=R):g=Au(R,c,0,null),i=Ja(i,c,l,null),g.return=a,i.return=a,g.sibling=i,a.child=g,a.child.memoizedState=df(l),a.memoizedState=cf,i):ff(a,R));if(p=i.memoizedState,p!==null&&(B=p.dehydrated,B!==null))return vE(i,a,R,c,B,p,l);if(g){g=c.fallback,R=a.mode,p=i.child,B=p.sibling;var W={mode:"hidden",children:c.children};return(R&1)===0&&a.child!==p?(c=a.child,c.childLanes=0,c.pendingProps=W,a.deletions=null):(c=pa(p,W),c.subtreeFlags=p.subtreeFlags&14680064),B!==null?g=pa(B,g):(g=Ja(g,R,l,null),g.flags|=2),g.return=a,c.return=a,c.sibling=g,a.child=c,c=g,g=a.child,R=i.child.memoizedState,R=R===null?df(l):{baseLanes:R.baseLanes|l,cachePool:null,transitions:R.transitions},g.memoizedState=R,g.childLanes=i.childLanes&~l,a.memoizedState=cf,c}return g=i.child,i=g.sibling,c=pa(g,{mode:"visible",children:c.children}),(a.mode&1)===0&&(c.lanes=l),c.return=a,c.sibling=null,i!==null&&(l=a.deletions,l===null?(a.deletions=[i],a.flags|=16):l.push(i)),a.child=c,a.memoizedState=null,c}function ff(i,a){return a=Au({mode:"visible",children:a},i.mode,0,null),a.return=i,i.child=a}function mu(i,a,l,c){return c!==null&&kd(c),Ps(a,i.child,null,l),i=ff(a,a.pendingProps.children),i.flags|=2,a.memoizedState=null,i}function vE(i,a,l,c,p,g,R){if(l)return a.flags&256?(a.flags&=-257,c=sf(Error(t(422))),mu(i,a,R,c)):a.memoizedState!==null?(a.child=i.child,a.flags|=128,null):(g=c.fallback,p=a.mode,c=Au({mode:"visible",children:c.children},p,0,null),g=Ja(g,p,R,null),g.flags|=2,c.return=a,g.return=a,c.sibling=g,a.child=c,(a.mode&1)!==0&&Ps(a,i.child,null,R),a.child.memoizedState=df(R),a.memoizedState=cf,g);if((a.mode&1)===0)return mu(i,a,R,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var B=c.dgst;return c=B,g=Error(t(419)),c=sf(g,c,void 0),mu(i,a,R,c)}if(B=(R&i.childLanes)!==0,Yn||B){if(c=xn,c!==null){switch(R&-R){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|R))!==0?0:p,p!==0&&p!==g.retryLane&&(g.retryLane=p,Pr(i,p),Hi(c,i,p,-1))}return Af(),c=sf(Error(t(421))),mu(i,a,R,c)}return p.data==="$?"?(a.flags|=128,a.child=i.child,a=PE.bind(null,i),p._reactRetry=a,null):(i=g.treeContext,li=ia(p.nextSibling),oi=a,Zt=!0,Fi=null,i!==null&&(xi[Mi++]=Ar,xi[Mi++]=Cr,xi[Mi++]=Va,Ar=i.id,Cr=i.overflow,Va=a),a=ff(a,c.children),a.flags|=4096,a)}function Bv(i,a,l){i.lanes|=a;var c=i.alternate;c!==null&&(c.lanes|=a),Gd(i.return,a,l)}function hf(i,a,l,c,p){var g=i.memoizedState;g===null?i.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:p}:(g.isBackwards=a,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=l,g.tailMode=p)}function zv(i,a,l){var c=a.pendingProps,p=c.revealOrder,g=c.tail;if(zn(i,a,c.children,l),c=jt.current,(c&2)!==0)c=c&1|2,a.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=a.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Bv(i,l,a);else if(i.tag===19)Bv(i,l,a);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break e;for(;i.sibling===null;){if(i.return===null||i.return===a)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}if(zt(jt,c),(a.mode&1)===0)a.memoizedState=null;else switch(p){case"forwards":for(l=a.child,p=null;l!==null;)i=l.alternate,i!==null&&lu(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=a.child,a.child=null):(p=l.sibling,l.sibling=null),hf(a,!1,p,l,g);break;case"backwards":for(l=null,p=a.child,a.child=null;p!==null;){if(i=p.alternate,i!==null&&lu(i)===null){a.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}hf(a,!0,l,null,g);break;case"together":hf(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function gu(i,a){(a.mode&1)===0&&i!==null&&(i.alternate=null,a.alternate=null,a.flags|=2)}function Dr(i,a,l){if(i!==null&&(a.dependencies=i.dependencies),Ya|=a.lanes,(l&a.childLanes)===0)return null;if(i!==null&&a.child!==i.child)throw Error(t(153));if(a.child!==null){for(i=a.child,l=pa(i,i.pendingProps),a.child=l,l.return=a;i.sibling!==null;)i=i.sibling,l=l.sibling=pa(i,i.pendingProps),l.return=a;l.sibling=null}return a.child}function _E(i,a,l){switch(a.tag){case 3:Uv(a),Cs();break;case 5:ev(a);break;case 1:qn(a.type)&&Jl(a);break;case 4:$d(a,a.stateNode.containerInfo);break;case 10:var c=a.type._context,p=a.memoizedProps.value;zt(ru,c._currentValue),c._currentValue=p;break;case 13:if(c=a.memoizedState,c!==null)return c.dehydrated!==null?(zt(jt,jt.current&1),a.flags|=128,null):(l&a.child.childLanes)!==0?kv(i,a,l):(zt(jt,jt.current&1),i=Dr(i,a,l),i!==null?i.sibling:null);zt(jt,jt.current&1);break;case 19:if(c=(l&a.childLanes)!==0,(i.flags&128)!==0){if(c)return zv(i,a,l);a.flags|=128}if(p=a.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),zt(jt,jt.current),c)break;return null;case 22:case 23:return a.lanes=0,Iv(i,a,l)}return Dr(i,a,l)}var Hv,pf,Gv,Vv;Hv=function(i,a){for(var l=a.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===a)break;for(;l.sibling===null;){if(l.return===null||l.return===a)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},pf=function(){},Gv=function(i,a,l,c){var p=i.memoizedProps;if(p!==c){i=a.stateNode,Xa(sr.current);var g=null;switch(l){case"input":p=ut(i,p),c=ut(i,c),g=[];break;case"select":p=Z({},p,{value:void 0}),c=Z({},c,{value:void 0}),g=[];break;case"textarea":p=pn(i,p),c=pn(i,c),g=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(i.onclick=Kl)}ge(l,c);var R;l=null;for(ce in p)if(!c.hasOwnProperty(ce)&&p.hasOwnProperty(ce)&&p[ce]!=null)if(ce==="style"){var B=p[ce];for(R in B)B.hasOwnProperty(R)&&(l||(l={}),l[R]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(s.hasOwnProperty(ce)?g||(g=[]):(g=g||[]).push(ce,null));for(ce in c){var W=c[ce];if(B=p!=null?p[ce]:void 0,c.hasOwnProperty(ce)&&W!==B&&(W!=null||B!=null))if(ce==="style")if(B){for(R in B)!B.hasOwnProperty(R)||W&&W.hasOwnProperty(R)||(l||(l={}),l[R]="");for(R in W)W.hasOwnProperty(R)&&B[R]!==W[R]&&(l||(l={}),l[R]=W[R])}else l||(g||(g=[]),g.push(ce,l)),l=W;else ce==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,B=B?B.__html:void 0,W!=null&&B!==W&&(g=g||[]).push(ce,W)):ce==="children"?typeof W!="string"&&typeof W!="number"||(g=g||[]).push(ce,""+W):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(s.hasOwnProperty(ce)?(W!=null&&ce==="onScroll"&&$t("scroll",i),g||B===W||(g=[])):(g=g||[]).push(ce,W))}l&&(g=g||[]).push("style",l);var ce=g;(a.updateQueue=ce)&&(a.flags|=4)}},Vv=function(i,a,l,c){l!==c&&(a.flags|=4)};function Go(i,a){if(!Zt)switch(i.tailMode){case"hidden":a=i.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?a||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function Nn(i){var a=i.alternate!==null&&i.alternate.child===i.child,l=0,c=0;if(a)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=c,i.childLanes=l,a}function yE(i,a,l){var c=a.pendingProps;switch(Od(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nn(a),null;case 1:return qn(a.type)&&jl(),Nn(a),null;case 3:return c=a.stateNode,Is(),Xt(Xn),Xt(Dn),Yd(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(i===null||i.child===null)&&(nu(a)?a.flags|=4:i===null||i.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Fi!==null&&(wf(Fi),Fi=null))),pf(i,a),Nn(a),null;case 5:Xd(a);var p=Xa(Fo.current);if(l=a.type,i!==null&&a.stateNode!=null)Gv(i,a,l,c,p),i.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!c){if(a.stateNode===null)throw Error(t(166));return Nn(a),null}if(i=Xa(sr.current),nu(a)){c=a.stateNode,l=a.type;var g=a.memoizedProps;switch(c[ar]=a,c[Do]=g,i=(a.mode&1)!==0,l){case"dialog":$t("cancel",c),$t("close",c);break;case"iframe":case"object":case"embed":$t("load",c);break;case"video":case"audio":for(p=0;p<Co.length;p++)$t(Co[p],c);break;case"source":$t("error",c);break;case"img":case"image":case"link":$t("error",c),$t("load",c);break;case"details":$t("toggle",c);break;case"input":tn(c,g),$t("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},$t("invalid",c);break;case"textarea":bn(c,g),$t("invalid",c)}ge(l,g),p=null;for(var R in g)if(g.hasOwnProperty(R)){var B=g[R];R==="children"?typeof B=="string"?c.textContent!==B&&(g.suppressHydrationWarning!==!0&&Yl(c.textContent,B,i),p=["children",B]):typeof B=="number"&&c.textContent!==""+B&&(g.suppressHydrationWarning!==!0&&Yl(c.textContent,B,i),p=["children",""+B]):s.hasOwnProperty(R)&&B!=null&&R==="onScroll"&&$t("scroll",c)}switch(l){case"input":et(c),Nt(c,g,!0);break;case"textarea":et(c),wn(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Kl)}c=p,a.updateQueue=c,c!==null&&(a.flags|=4)}else{R=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Lt(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=R.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof c.is=="string"?i=R.createElement(l,{is:c.is}):(i=R.createElement(l),l==="select"&&(R=i,c.multiple?R.multiple=!0:c.size&&(R.size=c.size))):i=R.createElementNS(i,l),i[ar]=a,i[Do]=c,Hv(i,a,!1,!1),a.stateNode=i;e:{switch(R=Ae(l,c),l){case"dialog":$t("cancel",i),$t("close",i),p=c;break;case"iframe":case"object":case"embed":$t("load",i),p=c;break;case"video":case"audio":for(p=0;p<Co.length;p++)$t(Co[p],i);p=c;break;case"source":$t("error",i),p=c;break;case"img":case"image":case"link":$t("error",i),$t("load",i),p=c;break;case"details":$t("toggle",i),p=c;break;case"input":tn(i,c),p=ut(i,c),$t("invalid",i);break;case"option":p=c;break;case"select":i._wrapperState={wasMultiple:!!c.multiple},p=Z({},c,{value:void 0}),$t("invalid",i);break;case"textarea":bn(i,c),p=pn(i,c),$t("invalid",i);break;default:p=c}ge(l,p),B=p;for(g in B)if(B.hasOwnProperty(g)){var W=B[g];g==="style"?ie(i,W):g==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&Yt(i,W)):g==="children"?typeof W=="string"?(l!=="textarea"||W!=="")&&je(i,W):typeof W=="number"&&je(i,""+W):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(s.hasOwnProperty(g)?W!=null&&g==="onScroll"&&$t("scroll",i):W!=null&&D(i,g,W,R))}switch(l){case"input":et(i),Nt(i,c,!1);break;case"textarea":et(i),wn(i);break;case"option":c.value!=null&&i.setAttribute("value",""+pe(c.value));break;case"select":i.multiple=!!c.multiple,g=c.value,g!=null?on(i,!!c.multiple,g,!1):c.defaultValue!=null&&on(i,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Kl)}switch(l){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return Nn(a),null;case 6:if(i&&a.stateNode!=null)Vv(i,a,i.memoizedProps,c);else{if(typeof c!="string"&&a.stateNode===null)throw Error(t(166));if(l=Xa(Fo.current),Xa(sr.current),nu(a)){if(c=a.stateNode,l=a.memoizedProps,c[ar]=a,(g=c.nodeValue!==l)&&(i=oi,i!==null))switch(i.tag){case 3:Yl(c.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Yl(c.nodeValue,l,(i.mode&1)!==0)}g&&(a.flags|=4)}else c=(l.nodeType===9?l:l.ownerDocument).createTextNode(c),c[ar]=a,a.stateNode=c}return Nn(a),null;case 13:if(Xt(jt),c=a.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Zt&&li!==null&&(a.mode&1)!==0&&(a.flags&128)===0)Xg(),Cs(),a.flags|=98560,g=!1;else if(g=nu(a),c!==null&&c.dehydrated!==null){if(i===null){if(!g)throw Error(t(318));if(g=a.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[ar]=a}else Cs(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Nn(a),g=!1}else Fi!==null&&(wf(Fi),Fi=null),g=!0;if(!g)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=l,a):(c=c!==null,c!==(i!==null&&i.memoizedState!==null)&&c&&(a.child.flags|=8192,(a.mode&1)!==0&&(i===null||(jt.current&1)!==0?vn===0&&(vn=3):Af())),a.updateQueue!==null&&(a.flags|=4),Nn(a),null);case 4:return Is(),pf(i,a),i===null&&Po(a.stateNode.containerInfo),Nn(a),null;case 10:return Hd(a.type._context),Nn(a),null;case 17:return qn(a.type)&&jl(),Nn(a),null;case 19:if(Xt(jt),g=a.memoizedState,g===null)return Nn(a),null;if(c=(a.flags&128)!==0,R=g.rendering,R===null)if(c)Go(g,!1);else{if(vn!==0||i!==null&&(i.flags&128)!==0)for(i=a.child;i!==null;){if(R=lu(i),R!==null){for(a.flags|=128,Go(g,!1),c=R.updateQueue,c!==null&&(a.updateQueue=c,a.flags|=4),a.subtreeFlags=0,c=l,l=a.child;l!==null;)g=l,i=c,g.flags&=14680066,R=g.alternate,R===null?(g.childLanes=0,g.lanes=i,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=R.childLanes,g.lanes=R.lanes,g.child=R.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=R.memoizedProps,g.memoizedState=R.memoizedState,g.updateQueue=R.updateQueue,g.type=R.type,i=R.dependencies,g.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return zt(jt,jt.current&1|2),a.child}i=i.sibling}g.tail!==null&&kt()>Fs&&(a.flags|=128,c=!0,Go(g,!1),a.lanes=4194304)}else{if(!c)if(i=lu(R),i!==null){if(a.flags|=128,c=!0,l=i.updateQueue,l!==null&&(a.updateQueue=l,a.flags|=4),Go(g,!0),g.tail===null&&g.tailMode==="hidden"&&!R.alternate&&!Zt)return Nn(a),null}else 2*kt()-g.renderingStartTime>Fs&&l!==1073741824&&(a.flags|=128,c=!0,Go(g,!1),a.lanes=4194304);g.isBackwards?(R.sibling=a.child,a.child=R):(l=g.last,l!==null?l.sibling=R:a.child=R,g.last=R)}return g.tail!==null?(a=g.tail,g.rendering=a,g.tail=a.sibling,g.renderingStartTime=kt(),a.sibling=null,l=jt.current,zt(jt,c?l&1|2:l&1),a):(Nn(a),null);case 22:case 23:return Rf(),c=a.memoizedState!==null,i!==null&&i.memoizedState!==null!==c&&(a.flags|=8192),c&&(a.mode&1)!==0?(ui&1073741824)!==0&&(Nn(a),a.subtreeFlags&6&&(a.flags|=8192)):Nn(a),null;case 24:return null;case 25:return null}throw Error(t(156,a.tag))}function SE(i,a){switch(Od(a),a.tag){case 1:return qn(a.type)&&jl(),i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 3:return Is(),Xt(Xn),Xt(Dn),Yd(),i=a.flags,(i&65536)!==0&&(i&128)===0?(a.flags=i&-65537|128,a):null;case 5:return Xd(a),null;case 13:if(Xt(jt),i=a.memoizedState,i!==null&&i.dehydrated!==null){if(a.alternate===null)throw Error(t(340));Cs()}return i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 19:return Xt(jt),null;case 4:return Is(),null;case 10:return Hd(a.type._context),null;case 22:case 23:return Rf(),null;case 24:return null;default:return null}}var vu=!1,On=!1,xE=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function Os(i,a){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(c){an(i,a,c)}else l.current=null}function mf(i,a,l){try{l()}catch(c){an(i,a,c)}}var Wv=!1;function ME(i,a){if(Td=Fl,i=Mg(),_d(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var p=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var R=0,B=-1,W=-1,ce=0,xe=0,be=i,ye=null;t:for(;;){for(var He;be!==l||p!==0&&be.nodeType!==3||(B=R+p),be!==g||c!==0&&be.nodeType!==3||(W=R+c),be.nodeType===3&&(R+=be.nodeValue.length),(He=be.firstChild)!==null;)ye=be,be=He;for(;;){if(be===i)break t;if(ye===l&&++ce===p&&(B=R),ye===g&&++xe===c&&(W=R),(He=be.nextSibling)!==null)break;be=ye,ye=be.parentNode}be=He}l=B===-1||W===-1?null:{start:B,end:W}}else l=null}l=l||{start:0,end:0}}else l=null;for(Rd={focusedElem:i,selectionRange:l},Fl=!1,Xe=a;Xe!==null;)if(a=Xe,i=a.child,(a.subtreeFlags&1028)!==0&&i!==null)i.return=a,Xe=i;else for(;Xe!==null;){a=Xe;try{var Ke=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(Ke!==null){var Ze=Ke.memoizedProps,un=Ke.memoizedState,re=a.stateNode,q=re.getSnapshotBeforeUpdate(a.elementType===a.type?Ze:ki(a.type,Ze),un);re.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var le=a.stateNode.containerInfo;le.nodeType===1?le.textContent="":le.nodeType===9&&le.documentElement&&le.removeChild(le.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Pe){an(a,a.return,Pe)}if(i=a.sibling,i!==null){i.return=a.return,Xe=i;break}Xe=a.return}return Ke=Wv,Wv=!1,Ke}function Vo(i,a,l){var c=a.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&i)===i){var g=p.destroy;p.destroy=void 0,g!==void 0&&mf(a,l,g)}p=p.next}while(p!==c)}}function _u(i,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&i)===i){var c=l.create;l.destroy=c()}l=l.next}while(l!==a)}}function gf(i){var a=i.ref;if(a!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof a=="function"?a(i):a.current=i}}function $v(i){var a=i.alternate;a!==null&&(i.alternate=null,$v(a)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(a=i.stateNode,a!==null&&(delete a[ar],delete a[Do],delete a[Ld],delete a[rE],delete a[aE])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Xv(i){return i.tag===5||i.tag===3||i.tag===4}function qv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Xv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function vf(i,a,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,a?l.nodeType===8?l.parentNode.insertBefore(i,a):l.insertBefore(i,a):(l.nodeType===8?(a=l.parentNode,a.insertBefore(i,l)):(a=l,a.appendChild(i)),l=l._reactRootContainer,l!=null||a.onclick!==null||(a.onclick=Kl));else if(c!==4&&(i=i.child,i!==null))for(vf(i,a,l),i=i.sibling;i!==null;)vf(i,a,l),i=i.sibling}function _f(i,a,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,a?l.insertBefore(i,a):l.appendChild(i);else if(c!==4&&(i=i.child,i!==null))for(_f(i,a,l),i=i.sibling;i!==null;)_f(i,a,l),i=i.sibling}var Tn=null,Bi=!1;function ua(i,a,l){for(l=l.child;l!==null;)Yv(i,a,l),l=l.sibling}function Yv(i,a,l){if(oe&&typeof oe.onCommitFiberUnmount=="function")try{oe.onCommitFiberUnmount(V,l)}catch{}switch(l.tag){case 5:On||Os(l,a);case 6:var c=Tn,p=Bi;Tn=null,ua(i,a,l),Tn=c,Bi=p,Tn!==null&&(Bi?(i=Tn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Tn.removeChild(l.stateNode));break;case 18:Tn!==null&&(Bi?(i=Tn,l=l.stateNode,i.nodeType===8?Pd(i.parentNode,l):i.nodeType===1&&Pd(i,l),xo(i)):Pd(Tn,l.stateNode));break;case 4:c=Tn,p=Bi,Tn=l.stateNode.containerInfo,Bi=!0,ua(i,a,l),Tn=c,Bi=p;break;case 0:case 11:case 14:case 15:if(!On&&(c=l.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var g=p,R=g.destroy;g=g.tag,R!==void 0&&((g&2)!==0||(g&4)!==0)&&mf(l,a,R),p=p.next}while(p!==c)}ua(i,a,l);break;case 1:if(!On&&(Os(l,a),c=l.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=l.memoizedProps,c.state=l.memoizedState,c.componentWillUnmount()}catch(B){an(l,a,B)}ua(i,a,l);break;case 21:ua(i,a,l);break;case 22:l.mode&1?(On=(c=On)||l.memoizedState!==null,ua(i,a,l),On=c):ua(i,a,l);break;default:ua(i,a,l)}}function Kv(i){var a=i.updateQueue;if(a!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new xE),a.forEach(function(c){var p=LE.bind(null,i,c);l.has(c)||(l.add(c),c.then(p,p))})}}function zi(i,a){var l=a.deletions;if(l!==null)for(var c=0;c<l.length;c++){var p=l[c];try{var g=i,R=a,B=R;e:for(;B!==null;){switch(B.tag){case 5:Tn=B.stateNode,Bi=!1;break e;case 3:Tn=B.stateNode.containerInfo,Bi=!0;break e;case 4:Tn=B.stateNode.containerInfo,Bi=!0;break e}B=B.return}if(Tn===null)throw Error(t(160));Yv(g,R,p),Tn=null,Bi=!1;var W=p.alternate;W!==null&&(W.return=null),p.return=null}catch(ce){an(p,a,ce)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)Zv(a,i),a=a.sibling}function Zv(i,a){var l=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(zi(a,i),lr(i),c&4){try{Vo(3,i,i.return),_u(3,i)}catch(Ze){an(i,i.return,Ze)}try{Vo(5,i,i.return)}catch(Ze){an(i,i.return,Ze)}}break;case 1:zi(a,i),lr(i),c&512&&l!==null&&Os(l,l.return);break;case 5:if(zi(a,i),lr(i),c&512&&l!==null&&Os(l,l.return),i.flags&32){var p=i.stateNode;try{je(p,"")}catch(Ze){an(i,i.return,Ze)}}if(c&4&&(p=i.stateNode,p!=null)){var g=i.memoizedProps,R=l!==null?l.memoizedProps:g,B=i.type,W=i.updateQueue;if(i.updateQueue=null,W!==null)try{B==="input"&&g.type==="radio"&&g.name!=null&&Gt(p,g),Ae(B,R);var ce=Ae(B,g);for(R=0;R<W.length;R+=2){var xe=W[R],be=W[R+1];xe==="style"?ie(p,be):xe==="dangerouslySetInnerHTML"?Yt(p,be):xe==="children"?je(p,be):D(p,xe,be,ce)}switch(B){case"input":dn(p,g);break;case"textarea":X(p,g);break;case"select":var ye=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!g.multiple;var He=g.value;He!=null?on(p,!!g.multiple,He,!1):ye!==!!g.multiple&&(g.defaultValue!=null?on(p,!!g.multiple,g.defaultValue,!0):on(p,!!g.multiple,g.multiple?[]:"",!1))}p[Do]=g}catch(Ze){an(i,i.return,Ze)}}break;case 6:if(zi(a,i),lr(i),c&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,g=i.memoizedProps;try{p.nodeValue=g}catch(Ze){an(i,i.return,Ze)}}break;case 3:if(zi(a,i),lr(i),c&4&&l!==null&&l.memoizedState.isDehydrated)try{xo(a.containerInfo)}catch(Ze){an(i,i.return,Ze)}break;case 4:zi(a,i),lr(i);break;case 13:zi(a,i),lr(i),p=i.child,p.flags&8192&&(g=p.memoizedState!==null,p.stateNode.isHidden=g,!g||p.alternate!==null&&p.alternate.memoizedState!==null||(xf=kt())),c&4&&Kv(i);break;case 22:if(xe=l!==null&&l.memoizedState!==null,i.mode&1?(On=(ce=On)||xe,zi(a,i),On=ce):zi(a,i),lr(i),c&8192){if(ce=i.memoizedState!==null,(i.stateNode.isHidden=ce)&&!xe&&(i.mode&1)!==0)for(Xe=i,xe=i.child;xe!==null;){for(be=Xe=xe;Xe!==null;){switch(ye=Xe,He=ye.child,ye.tag){case 0:case 11:case 14:case 15:Vo(4,ye,ye.return);break;case 1:Os(ye,ye.return);var Ke=ye.stateNode;if(typeof Ke.componentWillUnmount=="function"){c=ye,l=ye.return;try{a=c,Ke.props=a.memoizedProps,Ke.state=a.memoizedState,Ke.componentWillUnmount()}catch(Ze){an(c,l,Ze)}}break;case 5:Os(ye,ye.return);break;case 22:if(ye.memoizedState!==null){Qv(be);continue}}He!==null?(He.return=ye,Xe=He):Qv(be)}xe=xe.sibling}e:for(xe=null,be=i;;){if(be.tag===5){if(xe===null){xe=be;try{p=be.stateNode,ce?(g=p.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(B=be.stateNode,W=be.memoizedProps.style,R=W!=null&&W.hasOwnProperty("display")?W.display:null,B.style.display=A("display",R))}catch(Ze){an(i,i.return,Ze)}}}else if(be.tag===6){if(xe===null)try{be.stateNode.nodeValue=ce?"":be.memoizedProps}catch(Ze){an(i,i.return,Ze)}}else if((be.tag!==22&&be.tag!==23||be.memoizedState===null||be===i)&&be.child!==null){be.child.return=be,be=be.child;continue}if(be===i)break e;for(;be.sibling===null;){if(be.return===null||be.return===i)break e;xe===be&&(xe=null),be=be.return}xe===be&&(xe=null),be.sibling.return=be.return,be=be.sibling}}break;case 19:zi(a,i),lr(i),c&4&&Kv(i);break;case 21:break;default:zi(a,i),lr(i)}}function lr(i){var a=i.flags;if(a&2){try{e:{for(var l=i.return;l!==null;){if(Xv(l)){var c=l;break e}l=l.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(je(p,""),c.flags&=-33);var g=qv(i);_f(i,g,p);break;case 3:case 4:var R=c.stateNode.containerInfo,B=qv(i);vf(i,B,R);break;default:throw Error(t(161))}}catch(W){an(i,i.return,W)}i.flags&=-3}a&4096&&(i.flags&=-4097)}function EE(i,a,l){Xe=i,jv(i)}function jv(i,a,l){for(var c=(i.mode&1)!==0;Xe!==null;){var p=Xe,g=p.child;if(p.tag===22&&c){var R=p.memoizedState!==null||vu;if(!R){var B=p.alternate,W=B!==null&&B.memoizedState!==null||On;B=vu;var ce=On;if(vu=R,(On=W)&&!ce)for(Xe=p;Xe!==null;)R=Xe,W=R.child,R.tag===22&&R.memoizedState!==null?e0(p):W!==null?(W.return=R,Xe=W):e0(p);for(;g!==null;)Xe=g,jv(g),g=g.sibling;Xe=p,vu=B,On=ce}Jv(i)}else(p.subtreeFlags&8772)!==0&&g!==null?(g.return=p,Xe=g):Jv(i)}}function Jv(i){for(;Xe!==null;){var a=Xe;if((a.flags&8772)!==0){var l=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:On||_u(5,a);break;case 1:var c=a.stateNode;if(a.flags&4&&!On)if(l===null)c.componentDidMount();else{var p=a.elementType===a.type?l.memoizedProps:ki(a.type,l.memoizedProps);c.componentDidUpdate(p,l.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=a.updateQueue;g!==null&&Qg(a,g,c);break;case 3:var R=a.updateQueue;if(R!==null){if(l=null,a.child!==null)switch(a.child.tag){case 5:l=a.child.stateNode;break;case 1:l=a.child.stateNode}Qg(a,R,l)}break;case 5:var B=a.stateNode;if(l===null&&a.flags&4){l=B;var W=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&l.focus();break;case"img":W.src&&(l.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var ce=a.alternate;if(ce!==null){var xe=ce.memoizedState;if(xe!==null){var be=xe.dehydrated;be!==null&&xo(be)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}On||a.flags&512&&gf(a)}catch(ye){an(a,a.return,ye)}}if(a===i){Xe=null;break}if(l=a.sibling,l!==null){l.return=a.return,Xe=l;break}Xe=a.return}}function Qv(i){for(;Xe!==null;){var a=Xe;if(a===i){Xe=null;break}var l=a.sibling;if(l!==null){l.return=a.return,Xe=l;break}Xe=a.return}}function e0(i){for(;Xe!==null;){var a=Xe;try{switch(a.tag){case 0:case 11:case 15:var l=a.return;try{_u(4,a)}catch(W){an(a,l,W)}break;case 1:var c=a.stateNode;if(typeof c.componentDidMount=="function"){var p=a.return;try{c.componentDidMount()}catch(W){an(a,p,W)}}var g=a.return;try{gf(a)}catch(W){an(a,g,W)}break;case 5:var R=a.return;try{gf(a)}catch(W){an(a,R,W)}}}catch(W){an(a,a.return,W)}if(a===i){Xe=null;break}var B=a.sibling;if(B!==null){B.return=a.return,Xe=B;break}Xe=a.return}}var bE=Math.ceil,yu=L.ReactCurrentDispatcher,yf=L.ReactCurrentOwner,wi=L.ReactCurrentBatchConfig,Rt=0,xn=null,fn=null,Rn=0,ui=0,Us=ra(0),vn=0,Wo=null,Ya=0,Su=0,Sf=0,$o=null,Kn=null,xf=0,Fs=1/0,Ir=null,xu=!1,Mf=null,ca=null,Mu=!1,da=null,Eu=0,Xo=0,Ef=null,bu=-1,wu=0;function Hn(){return(Rt&6)!==0?kt():bu!==-1?bu:bu=kt()}function fa(i){return(i.mode&1)===0?1:(Rt&2)!==0&&Rn!==0?Rn&-Rn:oE.transition!==null?(wu===0&&(wu=At()),wu):(i=Ye,i!==0||(i=window.event,i=i===void 0?16:ng(i.type)),i)}function Hi(i,a,l,c){if(50<Xo)throw Xo=0,Ef=null,Error(t(185));Wt(i,l,c),((Rt&2)===0||i!==xn)&&(i===xn&&((Rt&2)===0&&(Su|=l),vn===4&&ha(i,Rn)),Zn(i,c),l===1&&Rt===0&&(a.mode&1)===0&&(Fs=kt()+500,Ql&&sa()))}function Zn(i,a){var l=i.callbackNode;ht(i,a);var c=ft(i,i===xn?Rn:0);if(c===0)l!==null&&Bn(l),i.callbackNode=null,i.callbackPriority=0;else if(a=c&-c,i.callbackPriority!==a){if(l!=null&&Bn(l),a===1)i.tag===0?sE(n0.bind(null,i)):Hg(n0.bind(null,i)),nE(function(){(Rt&6)===0&&sa()}),l=null;else{switch(ri(c)){case 1:l=Qr;break;case 4:l=Fa;break;case 16:l=wr;break;case 536870912:l=C;break;default:l=wr}l=c0(l,t0.bind(null,i))}i.callbackPriority=a,i.callbackNode=l}}function t0(i,a){if(bu=-1,wu=0,(Rt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(ks()&&i.callbackNode!==l)return null;var c=ft(i,i===xn?Rn:0);if(c===0)return null;if((c&30)!==0||(c&i.expiredLanes)!==0||a)a=Tu(i,c);else{a=c;var p=Rt;Rt|=2;var g=r0();(xn!==i||Rn!==a)&&(Ir=null,Fs=kt()+500,Za(i,a));do try{RE();break}catch(B){i0(i,B)}while(!0);zd(),yu.current=g,Rt=p,fn!==null?a=0:(xn=null,Rn=0,a=vn)}if(a!==0){if(a===2&&(p=Ut(i),p!==0&&(c=p,a=bf(i,p))),a===1)throw l=Wo,Za(i,0),ha(i,c),Zn(i,kt()),l;if(a===6)ha(i,c);else{if(p=i.current.alternate,(c&30)===0&&!wE(p)&&(a=Tu(i,c),a===2&&(g=Ut(i),g!==0&&(c=g,a=bf(i,g))),a===1))throw l=Wo,Za(i,0),ha(i,c),Zn(i,kt()),l;switch(i.finishedWork=p,i.finishedLanes=c,a){case 0:case 1:throw Error(t(345));case 2:ja(i,Kn,Ir);break;case 3:if(ha(i,c),(c&130023424)===c&&(a=xf+500-kt(),10<a)){if(ft(i,0)!==0)break;if(p=i.suspendedLanes,(p&c)!==c){Hn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Cd(ja.bind(null,i,Kn,Ir),a);break}ja(i,Kn,Ir);break;case 4:if(ha(i,c),(c&4194240)===c)break;for(a=i.eventTimes,p=-1;0<c;){var R=31-J(c);g=1<<R,R=a[R],R>p&&(p=R),c&=~g}if(c=p,c=kt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*bE(c/1960))-c,10<c){i.timeoutHandle=Cd(ja.bind(null,i,Kn,Ir),c);break}ja(i,Kn,Ir);break;case 5:ja(i,Kn,Ir);break;default:throw Error(t(329))}}}return Zn(i,kt()),i.callbackNode===l?t0.bind(null,i):null}function bf(i,a){var l=$o;return i.current.memoizedState.isDehydrated&&(Za(i,a).flags|=256),i=Tu(i,a),i!==2&&(a=Kn,Kn=l,a!==null&&wf(a)),i}function wf(i){Kn===null?Kn=i:Kn.push.apply(Kn,i)}function wE(i){for(var a=i;;){if(a.flags&16384){var l=a.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var c=0;c<l.length;c++){var p=l[c],g=p.getSnapshot;p=p.value;try{if(!Ui(g(),p))return!1}catch{return!1}}}if(l=a.child,a.subtreeFlags&16384&&l!==null)l.return=a,a=l;else{if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function ha(i,a){for(a&=~Sf,a&=~Su,i.suspendedLanes|=a,i.pingedLanes&=~a,i=i.expirationTimes;0<a;){var l=31-J(a),c=1<<l;i[l]=-1,a&=~c}}function n0(i){if((Rt&6)!==0)throw Error(t(327));ks();var a=ft(i,0);if((a&1)===0)return Zn(i,kt()),null;var l=Tu(i,a);if(i.tag!==0&&l===2){var c=Ut(i);c!==0&&(a=c,l=bf(i,c))}if(l===1)throw l=Wo,Za(i,0),ha(i,a),Zn(i,kt()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=a,ja(i,Kn,Ir),Zn(i,kt()),null}function Tf(i,a){var l=Rt;Rt|=1;try{return i(a)}finally{Rt=l,Rt===0&&(Fs=kt()+500,Ql&&sa())}}function Ka(i){da!==null&&da.tag===0&&(Rt&6)===0&&ks();var a=Rt;Rt|=1;var l=wi.transition,c=Ye;try{if(wi.transition=null,Ye=1,i)return i()}finally{Ye=c,wi.transition=l,Rt=a,(Rt&6)===0&&sa()}}function Rf(){ui=Us.current,Xt(Us)}function Za(i,a){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,tE(l)),fn!==null)for(l=fn.return;l!==null;){var c=l;switch(Od(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&jl();break;case 3:Is(),Xt(Xn),Xt(Dn),Yd();break;case 5:Xd(c);break;case 4:Is();break;case 13:Xt(jt);break;case 19:Xt(jt);break;case 10:Hd(c.type._context);break;case 22:case 23:Rf()}l=l.return}if(xn=i,fn=i=pa(i.current,null),Rn=ui=a,vn=0,Wo=null,Sf=Su=Ya=0,Kn=$o=null,$a!==null){for(a=0;a<$a.length;a++)if(l=$a[a],c=l.interleaved,c!==null){l.interleaved=null;var p=c.next,g=l.pending;if(g!==null){var R=g.next;g.next=p,c.next=R}l.pending=c}$a=null}return i}function i0(i,a){do{var l=fn;try{if(zd(),uu.current=hu,cu){for(var c=Jt.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}cu=!1}if(qa=0,Sn=gn=Jt=null,ko=!1,Bo=0,yf.current=null,l===null||l.return===null){vn=1,Wo=a,fn=null;break}e:{var g=i,R=l.return,B=l,W=a;if(a=Rn,B.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var ce=W,xe=B,be=xe.tag;if((xe.mode&1)===0&&(be===0||be===11||be===15)){var ye=xe.alternate;ye?(xe.updateQueue=ye.updateQueue,xe.memoizedState=ye.memoizedState,xe.lanes=ye.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var He=Av(R);if(He!==null){He.flags&=-257,Cv(He,R,B,g,a),He.mode&1&&Rv(g,ce,a),a=He,W=ce;var Ke=a.updateQueue;if(Ke===null){var Ze=new Set;Ze.add(W),a.updateQueue=Ze}else Ke.add(W);break e}else{if((a&1)===0){Rv(g,ce,a),Af();break e}W=Error(t(426))}}else if(Zt&&B.mode&1){var un=Av(R);if(un!==null){(un.flags&65536)===0&&(un.flags|=256),Cv(un,R,B,g,a),kd(Ns(W,B));break e}}g=W=Ns(W,B),vn!==4&&(vn=2),$o===null?$o=[g]:$o.push(g),g=R;do{switch(g.tag){case 3:g.flags|=65536,a&=-a,g.lanes|=a;var re=wv(g,W,a);Jg(g,re);break e;case 1:B=W;var q=g.type,le=g.stateNode;if((g.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||le!==null&&typeof le.componentDidCatch=="function"&&(ca===null||!ca.has(le)))){g.flags|=65536,a&=-a,g.lanes|=a;var Pe=Tv(g,B,a);Jg(g,Pe);break e}}g=g.return}while(g!==null)}s0(l)}catch(Qe){a=Qe,fn===l&&l!==null&&(fn=l=l.return);continue}break}while(!0)}function r0(){var i=yu.current;return yu.current=hu,i===null?hu:i}function Af(){(vn===0||vn===3||vn===2)&&(vn=4),xn===null||(Ya&268435455)===0&&(Su&268435455)===0||ha(xn,Rn)}function Tu(i,a){var l=Rt;Rt|=2;var c=r0();(xn!==i||Rn!==a)&&(Ir=null,Za(i,a));do try{TE();break}catch(p){i0(i,p)}while(!0);if(zd(),Rt=l,yu.current=c,fn!==null)throw Error(t(261));return xn=null,Rn=0,vn}function TE(){for(;fn!==null;)a0(fn)}function RE(){for(;fn!==null&&!rr();)a0(fn)}function a0(i){var a=u0(i.alternate,i,ui);i.memoizedProps=i.pendingProps,a===null?s0(i):fn=a,yf.current=null}function s0(i){var a=i;do{var l=a.alternate;if(i=a.return,(a.flags&32768)===0){if(l=yE(l,a,ui),l!==null){fn=l;return}}else{if(l=SE(l,a),l!==null){l.flags&=32767,fn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{vn=6,fn=null;return}}if(a=a.sibling,a!==null){fn=a;return}fn=a=i}while(a!==null);vn===0&&(vn=5)}function ja(i,a,l){var c=Ye,p=wi.transition;try{wi.transition=null,Ye=1,AE(i,a,l,c)}finally{wi.transition=p,Ye=c}return null}function AE(i,a,l,c){do ks();while(da!==null);if((Rt&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var g=l.lanes|l.childLanes;if($e(i,g),i===xn&&(fn=xn=null,Rn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Mu||(Mu=!0,c0(wr,function(){return ks(),null})),g=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||g){g=wi.transition,wi.transition=null;var R=Ye;Ye=1;var B=Rt;Rt|=4,yf.current=null,ME(i,l),Zv(l,i),YM(Rd),Fl=!!Td,Rd=Td=null,i.current=l,EE(l),ms(),Rt=B,Ye=R,wi.transition=g}else i.current=l;if(Mu&&(Mu=!1,da=i,Eu=p),g=i.pendingLanes,g===0&&(ca=null),ne(l.stateNode),Zn(i,kt()),a!==null)for(c=i.onRecoverableError,l=0;l<a.length;l++)p=a[l],c(p.value,{componentStack:p.stack,digest:p.digest});if(xu)throw xu=!1,i=Mf,Mf=null,i;return(Eu&1)!==0&&i.tag!==0&&ks(),g=i.pendingLanes,(g&1)!==0?i===Ef?Xo++:(Xo=0,Ef=i):Xo=0,sa(),null}function ks(){if(da!==null){var i=ri(Eu),a=wi.transition,l=Ye;try{if(wi.transition=null,Ye=16>i?16:i,da===null)var c=!1;else{if(i=da,da=null,Eu=0,(Rt&6)!==0)throw Error(t(331));var p=Rt;for(Rt|=4,Xe=i.current;Xe!==null;){var g=Xe,R=g.child;if((Xe.flags&16)!==0){var B=g.deletions;if(B!==null){for(var W=0;W<B.length;W++){var ce=B[W];for(Xe=ce;Xe!==null;){var xe=Xe;switch(xe.tag){case 0:case 11:case 15:Vo(8,xe,g)}var be=xe.child;if(be!==null)be.return=xe,Xe=be;else for(;Xe!==null;){xe=Xe;var ye=xe.sibling,He=xe.return;if($v(xe),xe===ce){Xe=null;break}if(ye!==null){ye.return=He,Xe=ye;break}Xe=He}}}var Ke=g.alternate;if(Ke!==null){var Ze=Ke.child;if(Ze!==null){Ke.child=null;do{var un=Ze.sibling;Ze.sibling=null,Ze=un}while(Ze!==null)}}Xe=g}}if((g.subtreeFlags&2064)!==0&&R!==null)R.return=g,Xe=R;else e:for(;Xe!==null;){if(g=Xe,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Vo(9,g,g.return)}var re=g.sibling;if(re!==null){re.return=g.return,Xe=re;break e}Xe=g.return}}var q=i.current;for(Xe=q;Xe!==null;){R=Xe;var le=R.child;if((R.subtreeFlags&2064)!==0&&le!==null)le.return=R,Xe=le;else e:for(R=q;Xe!==null;){if(B=Xe,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:_u(9,B)}}catch(Qe){an(B,B.return,Qe)}if(B===R){Xe=null;break e}var Pe=B.sibling;if(Pe!==null){Pe.return=B.return,Xe=Pe;break e}Xe=B.return}}if(Rt=p,sa(),oe&&typeof oe.onPostCommitFiberRoot=="function")try{oe.onPostCommitFiberRoot(V,i)}catch{}c=!0}return c}finally{Ye=l,wi.transition=a}}return!1}function o0(i,a,l){a=Ns(l,a),a=wv(i,a,1),i=la(i,a,1),a=Hn(),i!==null&&(Wt(i,1,a),Zn(i,a))}function an(i,a,l){if(i.tag===3)o0(i,i,l);else for(;a!==null;){if(a.tag===3){o0(a,i,l);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ca===null||!ca.has(c))){i=Ns(l,i),i=Tv(a,i,1),a=la(a,i,1),i=Hn(),a!==null&&(Wt(a,1,i),Zn(a,i));break}}a=a.return}}function CE(i,a,l){var c=i.pingCache;c!==null&&c.delete(a),a=Hn(),i.pingedLanes|=i.suspendedLanes&l,xn===i&&(Rn&l)===l&&(vn===4||vn===3&&(Rn&130023424)===Rn&&500>kt()-xf?Za(i,0):Sf|=l),Zn(i,a)}function l0(i,a){a===0&&((i.mode&1)===0?a=1:(a=Ve,Ve<<=1,(Ve&130023424)===0&&(Ve=4194304)));var l=Hn();i=Pr(i,a),i!==null&&(Wt(i,a,l),Zn(i,l))}function PE(i){var a=i.memoizedState,l=0;a!==null&&(l=a.retryLane),l0(i,l)}function LE(i,a){var l=0;switch(i.tag){case 13:var c=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:c=i.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(a),l0(i,l)}var u0;u0=function(i,a,l){if(i!==null)if(i.memoizedProps!==a.pendingProps||Xn.current)Yn=!0;else{if((i.lanes&l)===0&&(a.flags&128)===0)return Yn=!1,_E(i,a,l);Yn=(i.flags&131072)!==0}else Yn=!1,Zt&&(a.flags&1048576)!==0&&Gg(a,tu,a.index);switch(a.lanes=0,a.tag){case 2:var c=a.type;gu(i,a),i=a.pendingProps;var p=Ts(a,Dn.current);Ds(a,l),p=jd(null,a,c,i,p,l);var g=Jd();return a.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,qn(c)?(g=!0,Jl(a)):g=!1,a.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Wd(a),p.updater=pu,a.stateNode=p,p._reactInternals=a,af(a,c,i,l),a=uf(null,a,c,!0,g,l)):(a.tag=0,Zt&&g&&Nd(a),zn(null,a,p,l),a=a.child),a;case 16:c=a.elementType;e:{switch(gu(i,a),i=a.pendingProps,p=c._init,c=p(c._payload),a.type=c,p=a.tag=IE(c),i=ki(c,i),p){case 0:a=lf(null,a,c,i,l);break e;case 1:a=Ov(null,a,c,i,l);break e;case 11:a=Pv(null,a,c,i,l);break e;case 14:a=Lv(null,a,c,ki(c.type,i),l);break e}throw Error(t(306,c,""))}return a;case 0:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:ki(c,p),lf(i,a,c,p,l);case 1:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:ki(c,p),Ov(i,a,c,p,l);case 3:e:{if(Uv(a),i===null)throw Error(t(387));c=a.pendingProps,g=a.memoizedState,p=g.element,jg(i,a),ou(a,c,null,l);var R=a.memoizedState;if(c=R.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:R.cache,pendingSuspenseBoundaries:R.pendingSuspenseBoundaries,transitions:R.transitions},a.updateQueue.baseState=g,a.memoizedState=g,a.flags&256){p=Ns(Error(t(423)),a),a=Fv(i,a,c,l,p);break e}else if(c!==p){p=Ns(Error(t(424)),a),a=Fv(i,a,c,l,p);break e}else for(li=ia(a.stateNode.containerInfo.firstChild),oi=a,Zt=!0,Fi=null,l=Kg(a,null,c,l),a.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Cs(),c===p){a=Dr(i,a,l);break e}zn(i,a,c,l)}a=a.child}return a;case 5:return ev(a),i===null&&Fd(a),c=a.type,p=a.pendingProps,g=i!==null?i.memoizedProps:null,R=p.children,Ad(c,p)?R=null:g!==null&&Ad(c,g)&&(a.flags|=32),Nv(i,a),zn(i,a,R,l),a.child;case 6:return i===null&&Fd(a),null;case 13:return kv(i,a,l);case 4:return $d(a,a.stateNode.containerInfo),c=a.pendingProps,i===null?a.child=Ps(a,null,c,l):zn(i,a,c,l),a.child;case 11:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:ki(c,p),Pv(i,a,c,p,l);case 7:return zn(i,a,a.pendingProps,l),a.child;case 8:return zn(i,a,a.pendingProps.children,l),a.child;case 12:return zn(i,a,a.pendingProps.children,l),a.child;case 10:e:{if(c=a.type._context,p=a.pendingProps,g=a.memoizedProps,R=p.value,zt(ru,c._currentValue),c._currentValue=R,g!==null)if(Ui(g.value,R)){if(g.children===p.children&&!Xn.current){a=Dr(i,a,l);break e}}else for(g=a.child,g!==null&&(g.return=a);g!==null;){var B=g.dependencies;if(B!==null){R=g.child;for(var W=B.firstContext;W!==null;){if(W.context===c){if(g.tag===1){W=Lr(-1,l&-l),W.tag=2;var ce=g.updateQueue;if(ce!==null){ce=ce.shared;var xe=ce.pending;xe===null?W.next=W:(W.next=xe.next,xe.next=W),ce.pending=W}}g.lanes|=l,W=g.alternate,W!==null&&(W.lanes|=l),Gd(g.return,l,a),B.lanes|=l;break}W=W.next}}else if(g.tag===10)R=g.type===a.type?null:g.child;else if(g.tag===18){if(R=g.return,R===null)throw Error(t(341));R.lanes|=l,B=R.alternate,B!==null&&(B.lanes|=l),Gd(R,l,a),R=g.sibling}else R=g.child;if(R!==null)R.return=g;else for(R=g;R!==null;){if(R===a){R=null;break}if(g=R.sibling,g!==null){g.return=R.return,R=g;break}R=R.return}g=R}zn(i,a,p.children,l),a=a.child}return a;case 9:return p=a.type,c=a.pendingProps.children,Ds(a,l),p=Ei(p),c=c(p),a.flags|=1,zn(i,a,c,l),a.child;case 14:return c=a.type,p=ki(c,a.pendingProps),p=ki(c.type,p),Lv(i,a,c,p,l);case 15:return Dv(i,a,a.type,a.pendingProps,l);case 17:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:ki(c,p),gu(i,a),a.tag=1,qn(c)?(i=!0,Jl(a)):i=!1,Ds(a,l),Ev(a,c,p),af(a,c,p,l),uf(null,a,c,!0,i,l);case 19:return zv(i,a,l);case 22:return Iv(i,a,l)}throw Error(t(156,a.tag))};function c0(i,a){return Oa(i,a)}function DE(i,a,l,c){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ti(i,a,l,c){return new DE(i,a,l,c)}function Cf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function IE(i){if(typeof i=="function")return Cf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===K)return 11;if(i===se)return 14}return 2}function pa(i,a){var l=i.alternate;return l===null?(l=Ti(i.tag,a,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=a,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,a=i.dependencies,l.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Ru(i,a,l,c,p,g){var R=2;if(c=i,typeof i=="function")Cf(i)&&(R=1);else if(typeof i=="string")R=5;else e:switch(i){case b:return Ja(l.children,p,g,a);case P:R=8,p|=8;break;case k:return i=Ti(12,l,a,p|2),i.elementType=k,i.lanes=g,i;case Y:return i=Ti(13,l,a,p),i.elementType=Y,i.lanes=g,i;case H:return i=Ti(19,l,a,p),i.elementType=H,i.lanes=g,i;case ee:return Au(l,p,g,a);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case F:R=10;break e;case G:R=9;break e;case K:R=11;break e;case se:R=14;break e;case ae:R=16,c=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return a=Ti(R,l,a,p),a.elementType=i,a.type=c,a.lanes=g,a}function Ja(i,a,l,c){return i=Ti(7,i,c,a),i.lanes=l,i}function Au(i,a,l,c){return i=Ti(22,i,c,a),i.elementType=ee,i.lanes=l,i.stateNode={isHidden:!1},i}function Pf(i,a,l){return i=Ti(6,i,null,a),i.lanes=l,i}function Lf(i,a,l){return a=Ti(4,i.children!==null?i.children:[],i.key,a),a.lanes=l,a.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},a}function NE(i,a,l,c,p){this.tag=a,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wt(0),this.expirationTimes=wt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Df(i,a,l,c,p,g,R,B,W){return i=new NE(i,a,l,B,W),a===1?(a=1,g===!0&&(a|=8)):a=0,g=Ti(3,null,null,a),i.current=g,g.stateNode=i,g.memoizedState={element:c,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wd(g),i}function OE(i,a,l){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:i,containerInfo:a,implementation:l}}function d0(i){if(!i)return aa;i=i._reactInternals;e:{if(Si(i)!==i||i.tag!==1)throw Error(t(170));var a=i;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(qn(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(qn(l))return Bg(i,l,a)}return a}function f0(i,a,l,c,p,g,R,B,W){return i=Df(l,c,!0,i,p,g,R,B,W),i.context=d0(null),l=i.current,c=Hn(),p=fa(l),g=Lr(c,p),g.callback=a??null,la(l,g,p),i.current.lanes=p,Wt(i,p,c),Zn(i,c),i}function Cu(i,a,l,c){var p=a.current,g=Hn(),R=fa(p);return l=d0(l),a.context===null?a.context=l:a.pendingContext=l,a=Lr(g,R),a.payload={element:i},c=c===void 0?null:c,c!==null&&(a.callback=c),i=la(p,a,R),i!==null&&(Hi(i,p,R,g),su(i,p,R)),R}function Pu(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function h0(i,a){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<a?l:a}}function If(i,a){h0(i,a),(i=i.alternate)&&h0(i,a)}function UE(){return null}var p0=typeof reportError=="function"?reportError:function(i){console.error(i)};function Nf(i){this._internalRoot=i}Lu.prototype.render=Nf.prototype.render=function(i){var a=this._internalRoot;if(a===null)throw Error(t(409));Cu(i,a,null,null)},Lu.prototype.unmount=Nf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var a=i.containerInfo;Ka(function(){Cu(null,i,null,null)}),a[Tr]=null}};function Lu(i){this._internalRoot=i}Lu.prototype.unstable_scheduleHydration=function(i){if(i){var a=ai();i={blockedOn:null,target:i,priority:a};for(var l=0;l<Oi.length&&a!==0&&a<Oi[l].priority;l++);Oi.splice(l,0,i),l===0&&_o(i)}};function Of(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Du(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function m0(){}function FE(i,a,l,c,p){if(p){if(typeof c=="function"){var g=c;c=function(){var ce=Pu(R);g.call(ce)}}var R=f0(a,c,i,0,null,!1,!1,"",m0);return i._reactRootContainer=R,i[Tr]=R.current,Po(i.nodeType===8?i.parentNode:i),Ka(),R}for(;p=i.lastChild;)i.removeChild(p);if(typeof c=="function"){var B=c;c=function(){var ce=Pu(W);B.call(ce)}}var W=Df(i,0,!1,null,null,!1,!1,"",m0);return i._reactRootContainer=W,i[Tr]=W.current,Po(i.nodeType===8?i.parentNode:i),Ka(function(){Cu(a,W,l,c)}),W}function Iu(i,a,l,c,p){var g=l._reactRootContainer;if(g){var R=g;if(typeof p=="function"){var B=p;p=function(){var W=Pu(R);B.call(W)}}Cu(a,R,i,p)}else R=FE(l,a,i,p,c);return Pu(R)}rn=function(i){switch(i.tag){case 3:var a=i.stateNode;if(a.current.memoizedState.isDehydrated){var l=nt(a.pendingLanes);l!==0&&(nn(a,l|1),Zn(a,kt()),(Rt&6)===0&&(Fs=kt()+500,sa()))}break;case 13:Ka(function(){var c=Pr(i,1);if(c!==null){var p=Hn();Hi(c,i,1,p)}}),If(i,1)}},Ii=function(i){if(i.tag===13){var a=Pr(i,134217728);if(a!==null){var l=Hn();Hi(a,i,134217728,l)}If(i,134217728)}},$n=function(i){if(i.tag===13){var a=fa(i),l=Pr(i,a);if(l!==null){var c=Hn();Hi(l,i,a,c)}If(i,a)}},ai=function(){return Ye},gt=function(i,a){var l=Ye;try{return Ye=i,a()}finally{Ye=l}},he=function(i,a,l){switch(a){case"input":if(dn(i,l),a=l.name,l.type==="radio"&&a!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<l.length;a++){var c=l[a];if(c!==i&&c.form===i.form){var p=Zl(c);if(!p)throw Error(t(90));vt(c),dn(c,p)}}}break;case"textarea":X(i,l);break;case"select":a=l.value,a!=null&&on(i,!!l.multiple,a,!1)}},we=Tf,Ce=Ka;var kE={usingClientEntryPoint:!1,Events:[Io,bs,Zl,de,De,Tf]},qo={findFiberByHostInstance:Ha,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},BE={bundleType:qo.bundleType,version:qo.version,rendererPackageName:qo.rendererPackageName,rendererConfig:qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Jr(i),i===null?null:i.stateNode},findFiberByHostInstance:qo.findFiberByHostInstance||UE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nu.isDisabled&&Nu.supportsFiber)try{V=Nu.inject(BE),oe=Nu}catch{}}return jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kE,jn.createPortal=function(i,a){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Of(a))throw Error(t(200));return OE(i,a,null,l)},jn.createRoot=function(i,a){if(!Of(i))throw Error(t(299));var l=!1,c="",p=p0;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onRecoverableError!==void 0&&(p=a.onRecoverableError)),a=Df(i,1,!1,null,null,l,!1,c,p),i[Tr]=a.current,Po(i.nodeType===8?i.parentNode:i),new Nf(a)},jn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var a=i._reactInternals;if(a===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Jr(a),i=i===null?null:i.stateNode,i},jn.flushSync=function(i){return Ka(i)},jn.hydrate=function(i,a,l){if(!Du(a))throw Error(t(200));return Iu(null,i,a,!0,l)},jn.hydrateRoot=function(i,a,l){if(!Of(i))throw Error(t(405));var c=l!=null&&l.hydratedSources||null,p=!1,g="",R=p0;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(g=l.identifierPrefix),l.onRecoverableError!==void 0&&(R=l.onRecoverableError)),a=f0(a,null,i,1,l??null,p,!1,g,R),i[Tr]=a.current,Po(i),c)for(i=0;i<c.length;i++)l=c[i],p=l._getVersion,p=p(l._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[l,p]:a.mutableSourceEagerHydrationData.push(l,p);return new Lu(a)},jn.render=function(i,a,l){if(!Du(a))throw Error(t(200));return Iu(null,i,a,!1,l)},jn.unmountComponentAtNode=function(i){if(!Du(i))throw Error(t(40));return i._reactRootContainer?(Ka(function(){Iu(null,null,i,!1,function(){i._reactRootContainer=null,i[Tr]=null})}),!0):!1},jn.unstable_batchedUpdates=Tf,jn.unstable_renderSubtreeIntoContainer=function(i,a,l,c){if(!Du(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Iu(i,a,l,!1,c)},jn.version="18.3.1-next-f1338f8080-20240426",jn}var M0;function Vy(){if(M0)return Ff.exports;M0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Ff.exports=XE(),Ff.exports}var E0;function qE(){if(E0)return Ou;E0=1;var n=Vy();return Ou.createRoot=n.createRoot,Ou.hydrateRoot=n.hydrateRoot,Ou}var YE=qE(),KE=Vy();function _l(n){"@babel/helpers - typeof";return _l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_l(n)}function ZE(n,e){if(_l(n)!="object"||!n)return n;var t;if(typeof Symbol<"u"&&(t=n[Symbol.toPrimitive])!==void 0){var r=t.call(n,e);if(_l(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function jE(n){var e=ZE(n,"string");return _l(e)=="symbol"?e:e+""}function JE(n,e,t){return(e=jE(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function b0(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,r)}return t}function Pi(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?b0(Object(t),!0).forEach(function(r){JE(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):b0(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Nc(){return Nc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Nc.apply(null,arguments)}function ds(n,e){if(n==null)return{};var t={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.indexOf(r)!==-1)continue;t[r]=n[r]}return t}var QE=n=>n.disabled||Array.isArray(n.accessibilityStates)&&n.accessibilityStates.indexOf("disabled")>-1,eb={adjustable:"slider",button:"button",header:"heading",image:"img",imagebutton:null,keyboardkey:null,label:null,link:"link",none:"presentation",search:"search",summary:"region",text:null},Wy=n=>{var e=n.accessibilityRole,t=n.role,r=t||e;if(r){var s=eb[r];if(s!==null)return s||r}},tb={article:"article",banner:"header",blockquote:"blockquote",button:"button",code:"code",complementary:"aside",contentinfo:"footer",deletion:"del",emphasis:"em",figure:"figure",insertion:"ins",form:"form",list:"ul",listitem:"li",main:"main",navigation:"nav",paragraph:"p",region:"section",strong:"strong"},nb={},ib=function(e){e===void 0&&(e=nb);var t=e.role||e.accessibilityRole;if(t==="label")return"label";var r=Wy(e);if(r){if(r==="heading"){var s=e.accessibilityLevel||e["aria-level"];return s!=null?"h"+s:"h1"}return tb[r]}},$y={isDisabled:QE,propsToAccessibilityComponent:ib,propsToAriaRole:Wy},Mc={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexOrder:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,gridRow:!0,gridRowEnd:!0,gridRowGap:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnGap:!0,gridColumnStart:!0,lineClamp:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0,scale:!0,scaleX:!0,scaleY:!0,scaleZ:!0,shadowOpacity:!0},rb=["ms","Moz","O","Webkit"],ab=(n,e)=>n+e.charAt(0).toUpperCase()+e.substring(1);Object.keys(Mc).forEach(n=>{rb.forEach(e=>{Mc[ab(e,n)]=Mc[n]})});var sb=n=>n==="currentcolor"||n==="currentColor"||n==="inherit"||n.indexOf("var(")===0,zf,w0;function ob(){if(w0)return zf;w0=1;function n(y){if(typeof y=="number")return y>>>0===y&&y>=0&&y<=4294967295?y:null;if(typeof y!="string")return null;const S=_();let w;if(w=S.hex6.exec(y))return parseInt(w[1]+"ff",16)>>>0;const D=T(y);return D??((w=S.rgb.exec(y))?(m(w[1])<<24|m(w[2])<<16|m(w[3])<<8|255)>>>0:(w=S.rgba.exec(y))?w[6]!==void 0?(m(w[6])<<24|m(w[7])<<16|m(w[8])<<8|x(w[9]))>>>0:(m(w[2])<<24|m(w[3])<<16|m(w[4])<<8|x(w[5]))>>>0:(w=S.hex3.exec(y))?parseInt(w[1]+w[1]+w[2]+w[2]+w[3]+w[3]+"ff",16)>>>0:(w=S.hex8.exec(y))?parseInt(w[1],16)>>>0:(w=S.hex4.exec(y))?parseInt(w[1]+w[1]+w[2]+w[2]+w[3]+w[3]+w[4]+w[4],16)>>>0:(w=S.hsl.exec(y))?(t(v(w[1]),E(w[2]),E(w[3]))|255)>>>0:(w=S.hsla.exec(y))?w[6]!==void 0?(t(v(w[6]),E(w[7]),E(w[8]))|x(w[9]))>>>0:(t(v(w[2]),E(w[3]),E(w[4]))|x(w[5]))>>>0:(w=S.hwb.exec(y))?(r(v(w[1]),E(w[2]),E(w[3]))|255)>>>0:null)}function e(y,S,w){return w<0&&(w+=1),w>1&&(w-=1),w<1/6?y+(S-y)*6*w:w<1/2?S:w<2/3?y+(S-y)*(2/3-w)*6:y}function t(y,S,w){const D=w<.5?w*(1+S):w+S-w*S,L=2*w-D,N=e(L,D,y+1/3),I=e(L,D,y),b=e(L,D,y-1/3);return Math.round(N*255)<<24|Math.round(I*255)<<16|Math.round(b*255)<<8}function r(y,S,w){if(S+w>=1){const I=Math.round(S*255/(S+w));return I<<24|I<<16|I<<8}const D=e(0,1,y+1/3)*(1-S-w)+S,L=e(0,1,y)*(1-S-w)+S,N=e(0,1,y-1/3)*(1-S-w)+S;return Math.round(D*255)<<24|Math.round(L*255)<<16|Math.round(N*255)<<8}const s="[-+]?\\d*\\.?\\d+",o=s+"%";function u(...y){return"\\(\\s*("+y.join(")\\s*,?\\s*(")+")\\s*\\)"}function d(...y){return"\\(\\s*("+y.slice(0,y.length-1).join(")\\s*,?\\s*(")+")\\s*/\\s*("+y[y.length-1]+")\\s*\\)"}function f(...y){return"\\(\\s*("+y.join(")\\s*,\\s*(")+")\\s*\\)"}let h;function _(){return h===void 0&&(h={rgb:new RegExp("rgb"+u(s,s,s)),rgba:new RegExp("rgba("+f(s,s,s,s)+"|"+d(s,s,s,s)+")"),hsl:new RegExp("hsl"+u(s,o,o)),hsla:new RegExp("hsla("+f(s,o,o,s)+"|"+d(s,o,o,s)+")"),hwb:new RegExp("hwb"+u(s,o,o)),hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex4:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{6})$/,hex8:/^#([0-9a-fA-F]{8})$/}),h}function m(y){const S=parseInt(y,10);return S<0?0:S>255?255:S}function v(y){return(parseFloat(y)%360+360)%360/360}function x(y){const S=parseFloat(y);return S<0?0:S>1?255:Math.round(S*255)}function E(y){const S=parseFloat(y);return S<0?0:S>100?1:S/100}function T(y){switch(y){case"transparent":return 0;case"aliceblue":return 4042850303;case"antiquewhite":return 4209760255;case"aqua":return 16777215;case"aquamarine":return 2147472639;case"azure":return 4043309055;case"beige":return 4126530815;case"bisque":return 4293182719;case"black":return 255;case"blanchedalmond":return 4293643775;case"blue":return 65535;case"blueviolet":return 2318131967;case"brown":return 2771004159;case"burlywood":return 3736635391;case"burntsienna":return 3934150143;case"cadetblue":return 1604231423;case"chartreuse":return 2147418367;case"chocolate":return 3530104575;case"coral":return 4286533887;case"cornflowerblue":return 1687547391;case"cornsilk":return 4294499583;case"crimson":return 3692313855;case"cyan":return 16777215;case"darkblue":return 35839;case"darkcyan":return 9145343;case"darkgoldenrod":return 3095792639;case"darkgray":return 2846468607;case"darkgreen":return 6553855;case"darkgrey":return 2846468607;case"darkkhaki":return 3182914559;case"darkmagenta":return 2332068863;case"darkolivegreen":return 1433087999;case"darkorange":return 4287365375;case"darkorchid":return 2570243327;case"darkred":return 2332033279;case"darksalmon":return 3918953215;case"darkseagreen":return 2411499519;case"darkslateblue":return 1211993087;case"darkslategray":return 793726975;case"darkslategrey":return 793726975;case"darkturquoise":return 13554175;case"darkviolet":return 2483082239;case"deeppink":return 4279538687;case"deepskyblue":return 12582911;case"dimgray":return 1768516095;case"dimgrey":return 1768516095;case"dodgerblue":return 512819199;case"firebrick":return 2988581631;case"floralwhite":return 4294635775;case"forestgreen":return 579543807;case"fuchsia":return 4278255615;case"gainsboro":return 3705462015;case"ghostwhite":return 4177068031;case"gold":return 4292280575;case"goldenrod":return 3668254975;case"gray":return 2155905279;case"green":return 8388863;case"greenyellow":return 2919182335;case"grey":return 2155905279;case"honeydew":return 4043305215;case"hotpink":return 4285117695;case"indianred":return 3445382399;case"indigo":return 1258324735;case"ivory":return 4294963455;case"khaki":return 4041641215;case"lavender":return 3873897215;case"lavenderblush":return 4293981695;case"lawngreen":return 2096890111;case"lemonchiffon":return 4294626815;case"lightblue":return 2916673279;case"lightcoral":return 4034953471;case"lightcyan":return 3774873599;case"lightgoldenrodyellow":return 4210742015;case"lightgray":return 3553874943;case"lightgreen":return 2431553791;case"lightgrey":return 3553874943;case"lightpink":return 4290167295;case"lightsalmon":return 4288707327;case"lightseagreen":return 548580095;case"lightskyblue":return 2278488831;case"lightslategray":return 2005441023;case"lightslategrey":return 2005441023;case"lightsteelblue":return 2965692159;case"lightyellow":return 4294959359;case"lime":return 16711935;case"limegreen":return 852308735;case"linen":return 4210091775;case"magenta":return 4278255615;case"maroon":return 2147483903;case"mediumaquamarine":return 1724754687;case"mediumblue":return 52735;case"mediumorchid":return 3126187007;case"mediumpurple":return 2473647103;case"mediumseagreen":return 1018393087;case"mediumslateblue":return 2070474495;case"mediumspringgreen":return 16423679;case"mediumturquoise":return 1221709055;case"mediumvioletred":return 3340076543;case"midnightblue":return 421097727;case"mintcream":return 4127193855;case"mistyrose":return 4293190143;case"moccasin":return 4293178879;case"navajowhite":return 4292783615;case"navy":return 33023;case"oldlace":return 4260751103;case"olive":return 2155872511;case"olivedrab":return 1804477439;case"orange":return 4289003775;case"orangered":return 4282712319;case"orchid":return 3664828159;case"palegoldenrod":return 4008225535;case"palegreen":return 2566625535;case"paleturquoise":return 2951671551;case"palevioletred":return 3681588223;case"papayawhip":return 4293907967;case"peachpuff":return 4292524543;case"peru":return 3448061951;case"pink":return 4290825215;case"plum":return 3718307327;case"powderblue":return 2967529215;case"purple":return 2147516671;case"rebeccapurple":return 1714657791;case"red":return 4278190335;case"rosybrown":return 3163525119;case"royalblue":return 1097458175;case"saddlebrown":return 2336560127;case"salmon":return 4202722047;case"sandybrown":return 4104413439;case"seagreen":return 780883967;case"seashell":return 4294307583;case"sienna":return 2689740287;case"silver":return 3233857791;case"skyblue":return 2278484991;case"slateblue":return 1784335871;case"slategray":return 1887473919;case"slategrey":return 1887473919;case"snow":return 4294638335;case"springgreen":return 16744447;case"steelblue":return 1182971135;case"tan":return 3535047935;case"teal":return 8421631;case"thistle":return 3636451583;case"tomato":return 4284696575;case"turquoise":return 1088475391;case"violet":return 4001558271;case"wheat":return 4125012991;case"white":return 4294967295;case"whitesmoke":return 4126537215;case"yellow":return 4294902015;case"yellowgreen":return 2597139199}return null}return zf=n,zf}var lb=ob();const ub=_i(lb);var cb=n=>{if(n==null)return n;var e=ub(n);if(e!=null)return e=(e<<24|e>>>8)>>>0,e},Xy=function(e,t){if(t===void 0&&(t=1),e!=null){if(typeof e=="string"&&sb(e))return e;var r=cb(e);if(r!=null){var s=r>>16&255,o=r>>8&255,u=r&255,d=(r>>24&255)/255,f=(d*t).toFixed(2);return"rgba("+s+","+o+","+u+","+f+")"}}},db={backgroundColor:!0,borderColor:!0,borderTopColor:!0,borderRightColor:!0,borderBottomColor:!0,borderLeftColor:!0,color:!0,shadowColor:!0,textDecorationColor:!0,textShadowColor:!0};function gr(n,e){var t=n;return(e==null||!Mc[e])&&typeof n=="number"?t=n+"px":e!=null&&db[e]&&(t=Xy(n)),t}var yi=!!(typeof window<"u"&&window.document&&window.document.createElement),fb={},hb=!yi||window.CSS!=null&&window.CSS.supports!=null&&(window.CSS.supports("text-decoration-line","none")||window.CSS.supports("-webkit-text-decoration-line","none")),pb="monospace,monospace",T0='-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',mb={borderColor:["borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"],borderBlockColor:["borderTopColor","borderBottomColor"],borderInlineColor:["borderRightColor","borderLeftColor"],borderRadius:["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],borderStyle:["borderTopStyle","borderRightStyle","borderBottomStyle","borderLeftStyle"],borderBlockStyle:["borderTopStyle","borderBottomStyle"],borderInlineStyle:["borderRightStyle","borderLeftStyle"],borderWidth:["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"],borderBlockWidth:["borderTopWidth","borderBottomWidth"],borderInlineWidth:["borderRightWidth","borderLeftWidth"],insetBlock:["top","bottom"],insetInline:["left","right"],marginBlock:["marginTop","marginBottom"],marginInline:["marginRight","marginLeft"],paddingBlock:["paddingTop","paddingBottom"],paddingInline:["paddingRight","paddingLeft"],overflow:["overflowX","overflowY"],overscrollBehavior:["overscrollBehaviorX","overscrollBehaviorY"],borderBlockStartColor:["borderTopColor"],borderBlockStartStyle:["borderTopStyle"],borderBlockStartWidth:["borderTopWidth"],borderBlockEndColor:["borderBottomColor"],borderBlockEndStyle:["borderBottomStyle"],borderBlockEndWidth:["borderBottomWidth"],borderEndStartRadius:["borderBottomLeftRadius"],borderEndEndRadius:["borderBottomRightRadius"],borderStartStartRadius:["borderTopLeftRadius"],borderStartEndRadius:["borderTopRightRadius"],insetBlockEnd:["bottom"],insetBlockStart:["top"],marginBlockStart:["marginTop"],marginBlockEnd:["marginBottom"],paddingBlockStart:["paddingTop"],paddingBlockEnd:["paddingBottom"]},qy=(n,e)=>{if(!n)return fb;var t={},r=function(){var d=n[s];if(d==null)return"continue";if(s==="backgroundClip")d==="text"&&(t.backgroundClip=d,t.WebkitBackgroundClip=d);else if(s==="flex")d===-1?(t.flexGrow=0,t.flexShrink=1,t.flexBasis="auto"):t.flex=d;else if(s==="font")t[s]=d.replace("System",T0);else if(s==="fontFamily")if(d.indexOf("System")>-1){var f=d.split(/,\s*/);f[f.indexOf("System")]=T0,t[s]=f.join(",")}else d==="monospace"?t[s]=pb:t[s]=d;else if(s==="textDecorationLine")hb?t.textDecorationLine=d:t.textDecoration=d;else if(s==="writingDirection")t.direction=d;else{var h=gr(n[s],s),_=mb[s];e&&s==="inset"?(n.insetInline==null&&(t.left=h,t.right=h),n.insetBlock==null&&(t.top=h,t.bottom=h)):e&&s==="margin"?(n.marginInline==null&&(t.marginLeft=h,t.marginRight=h),n.marginBlock==null&&(t.marginTop=h,t.marginBottom=h)):e&&s==="padding"?(n.paddingInline==null&&(t.paddingLeft=h,t.paddingRight=h),n.paddingBlock==null&&(t.paddingTop=h,t.paddingBottom=h)):_?_.forEach((m,v)=>{n[m]==null&&(t[m]=h)}):t[s]=h}};for(var s in n)var o=r();return t};function gb(n,e){for(var t=n.length,r=e^t,s=0,o;t>=4;)o=n.charCodeAt(s)&255|(n.charCodeAt(++s)&255)<<8|(n.charCodeAt(++s)&255)<<16|(n.charCodeAt(++s)&255)<<24,o=(o&65535)*1540483477+(((o>>>16)*1540483477&65535)<<16),o^=o>>>24,o=(o&65535)*1540483477+(((o>>>16)*1540483477&65535)<<16),r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16)^o,t-=4,++s;switch(t){case 3:r^=(n.charCodeAt(s+2)&255)<<16;case 2:r^=(n.charCodeAt(s+1)&255)<<8;case 1:r^=n.charCodeAt(s)&255,r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16)}return r^=r>>>13,r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16),r^=r>>>15,r>>>0}var vb=n=>gb(n,1).toString(36),_b=/[A-Z]/g,yb=/^ms-/,Hf={};function Sb(n){return"-"+n.toLowerCase()}function xb(n){if(n in Hf)return Hf[n];var e=n.replace(_b,Sb);return Hf[n]=yb.test(e)?"-"+e:e}var Uu={},Fu={},ku={},R0;function Yy(){if(R0)return ku;R0=1,Object.defineProperty(ku,"__esModule",{value:!0}),ku.default=n;function n(e){return e.charAt(0).toUpperCase()+e.slice(1)}return ku}var A0;function Mb(){if(A0)return Fu;A0=1,Object.defineProperty(Fu,"__esModule",{value:!0}),Fu.default=r;var n=Yy(),e=t(n);function t(s){return s&&s.__esModule?s:{default:s}}function r(s,o,u){var d=s[o];if(d&&u.hasOwnProperty(o))for(var f=(0,e.default)(o),h=0;h<d.length;++h){var _=d[h]+f;u[_]||(u[_]=u[o])}return u}return Fu}var Bu={},C0;function Eb(){if(C0)return Bu;C0=1,Object.defineProperty(Bu,"__esModule",{value:!0}),Bu.default=n;function n(e,t,r,s,o){for(var u=0,d=e.length;u<d;++u){var f=e[u](t,r,s,o);if(f)return f}}return Bu}var zu={},P0;function bb(){if(P0)return zu;P0=1,Object.defineProperty(zu,"__esModule",{value:!0}),zu.default=e;function n(t,r){t.indexOf(r)===-1&&t.push(r)}function e(t,r){if(Array.isArray(r))for(var s=0,o=r.length;s<o;++s)n(t,r[s]);else n(t,r)}return zu}var Hu={},L0;function wb(){if(L0)return Hu;L0=1,Object.defineProperty(Hu,"__esModule",{value:!0}),Hu.default=n;function n(e){return e instanceof Object&&!Array.isArray(e)}return Hu}var D0;function Tb(){if(D0)return Uu;D0=1,Object.defineProperty(Uu,"__esModule",{value:!0}),Uu.default=h;var n=Mb(),e=f(n),t=Eb(),r=f(t),s=bb(),o=f(s),u=wb(),d=f(u);function f(_){return _&&_.__esModule?_:{default:_}}function h(_){var m=_.prefixMap,v=_.plugins;return function x(E){for(var T in E){var y=E[T];if((0,d.default)(y))E[T]=x(y);else if(Array.isArray(y)){for(var S=[],w=0,D=y.length;w<D;++w){var L=(0,r.default)(v,T,y[w],E,m);(0,o.default)(S,L||y[w])}S.length>0&&(E[T]=S)}else{var N=(0,r.default)(v,T,y,E,m);N&&(E[T]=N),E=(0,e.default)(m,T,E)}}return E}}return Uu}var Rb=Tb();const Ab=_i(Rb);var Gu={},I0;function Cb(){if(I0)return Gu;I0=1,Object.defineProperty(Gu,"__esModule",{value:!0}),Gu.default=n;function n(){return null}return Gu}var Pb=Cb();const Lb=_i(Pb);var Vu={};function Ec(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ec=function(t){return typeof t}:Ec=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ec(n)}function Db(n){return Ub(n)||Ob(n)||Nb(n)||Ib()}function Ib(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nb(n,e){if(n){if(typeof n=="string")return Wh(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(t);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Wh(n,e)}}function Ob(n){if(typeof Symbol<"u"&&Symbol.iterator in Object(n))return Array.from(n)}function Ub(n){if(Array.isArray(n))return Wh(n)}function Wh(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function N0(n){return n.filter(function(e,t){return n.lastIndexOf(e)===t})}function Ky(n){for(var e=0,t=arguments.length<=1?0:arguments.length-1;e<t;++e){var r=e+1<1||arguments.length<=e+1?void 0:arguments[e+1];for(var s in r){var o=r[s],u=n[s];if(u&&o){if(Array.isArray(u)){n[s]=N0(u.concat(o));continue}if(Array.isArray(o)){n[s]=N0([u].concat(Db(o)));continue}if(Ec(o)==="object"){n[s]=Ky({},u,o);continue}}n[s]=o}}return n}var Fb=/-([a-z])/g,kb=/^Ms/g,Gf={};function Bb(n){return n[1].toUpperCase()}function Zy(n){if(Gf.hasOwnProperty(n))return Gf[n];var e=n.replace(Fb,Bb).replace(kb,"ms");return Gf[n]=e,e}var zb=/[A-Z]/g,Hb=/^ms-/,Vf={};function Gb(n){return"-"+n.toLowerCase()}function jy(n){if(Vf.hasOwnProperty(n))return Vf[n];var e=n.replace(zb,Gb);return Vf[n]=Hb.test(e)?"-"+e:e}const Vb=Object.freeze(Object.defineProperty({__proto__:null,default:jy},Symbol.toStringTag,{value:"Module"}));function Zc(n){return jy(n)}function Jy(n,e){return Zc(n)+":"+e}function Wb(n){var e="";for(var t in n){var r=n[t];typeof r!="string"&&typeof r!="number"||(e&&(e+=";"),e+=Jy(t,r))}return e}var $b=/^(Webkit|Moz|O|ms)/;function Xb(n){return $b.test(n)}var qb=/-webkit-|-moz-|-ms-/;function Yb(n){return typeof n=="string"&&qb.test(n)}var yl={borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},O0=["animationIterationCount","boxFlex","boxFlexGroup","boxOrdinalGroup","columnCount","flex","flexGrow","flexPositive","flexShrink","flexNegative","flexOrder","gridColumn","gridColumnEnd","gridColumnStart","gridRow","gridRowEnd","gridRowStart","lineClamp","order"],U0=["Webkit","ms","Moz","O"];function Kb(n,e){return n+e.charAt(0).toUpperCase()+e.slice(1)}for(var Wf=0,Zb=O0.length;Wf<Zb;++Wf){var F0=O0[Wf];yl[F0]=!0;for(var $f=0,jb=U0.length;$f<jb;++$f)yl[Kb(U0[$f],F0)]=!0}for(var Jb in yl)yl[Zc(Jb)]=!0;function Qb(n){return yl.hasOwnProperty(n)}var ew=/^(ms|Webkit|Moz|O)/;function Qy(n){var e=n.replace(ew,"");return e.charAt(0).toLowerCase()+e.slice(1)}function tw(n){return Qy(Zy(n))}function nw(n,e){return e.join(";"+Zc(n)+":")}var iw=/(-ms-|-webkit-|-moz-|-o-)/g;function rw(n){return typeof n=="string"?n.replace(iw,""):n}const aw=Object.freeze(Object.defineProperty({__proto__:null,assignStyle:Ky,camelCaseProperty:Zy,cssifyDeclaration:Jy,cssifyObject:Wb,hyphenateProperty:Zc,isPrefixedProperty:Xb,isPrefixedValue:Yb,isUnitlessProperty:Qb,normalizeProperty:tw,resolveArrayValue:nw,unprefixProperty:Qy,unprefixValue:rw},Symbol.toStringTag,{value:"Module"})),eS=Hy(aw);var k0;function sw(){if(k0)return Vu;k0=1,Object.defineProperty(Vu,"__esModule",{value:!0}),Vu.default=r;var n=eS,e=/cross-fade\(/g,t=["-webkit-",""];function r(s,o){if(typeof o=="string"&&!(0,n.isPrefixedValue)(o)&&o.indexOf("cross-fade(")!==-1)return t.map(function(u){return o.replace(e,u+"cross-fade(")})}return Vu}var ow=sw();const lw=_i(ow);var Wu={},B0;function uw(){if(B0)return Wu;B0=1,Object.defineProperty(Wu,"__esModule",{value:!0}),Wu.default=t;var n=["-webkit-","-moz-",""],e={"zoom-in":!0,"zoom-out":!0,grab:!0,grabbing:!0};function t(r,s){if(r==="cursor"&&e.hasOwnProperty(s))return n.map(function(o){return o+s})}return Wu}var cw=uw();const dw=_i(cw);var $u={},z0;function fw(){if(z0)return $u;z0=1,Object.defineProperty($u,"__esModule",{value:!0}),$u.default=r;var n=eS,e=/filter\(/g,t=["-webkit-",""];function r(s,o){if(typeof o=="string"&&!(0,n.isPrefixedValue)(o)&&o.indexOf("filter(")!==-1)return t.map(function(u){return o.replace(e,u+"filter(")})}return $u}var hw=fw();const pw=_i(hw);var Xu={},Xf={},H0;function tS(){return H0||(H0=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=t;var e=/-webkit-|-moz-|-ms-/;function t(r){return typeof r=="string"&&e.test(r)}})(Xf)),Xf}var G0;function mw(){if(G0)return Xu;G0=1,Object.defineProperty(Xu,"__esModule",{value:!0}),Xu.default=s;var n=tS(),e=t(n);function t(o){return o&&o.__esModule?o:{default:o}}var r=["-webkit-",""];function s(o,u){if(typeof u=="string"&&!(0,e.default)(u)&&u.indexOf("image-set(")>-1)return r.map(function(d){return u.replace(/image-set\(/g,d+"image-set(")})}return Xu}var gw=mw();const vw=_i(gw);var qu={},V0;function _w(){if(V0)return qu;V0=1,Object.defineProperty(qu,"__esModule",{value:!0}),qu.default=e;var n={marginBlockStart:["WebkitMarginBefore"],marginBlockEnd:["WebkitMarginAfter"],marginInlineStart:["WebkitMarginStart","MozMarginStart"],marginInlineEnd:["WebkitMarginEnd","MozMarginEnd"],paddingBlockStart:["WebkitPaddingBefore"],paddingBlockEnd:["WebkitPaddingAfter"],paddingInlineStart:["WebkitPaddingStart","MozPaddingStart"],paddingInlineEnd:["WebkitPaddingEnd","MozPaddingEnd"],borderBlockStart:["WebkitBorderBefore"],borderBlockStartColor:["WebkitBorderBeforeColor"],borderBlockStartStyle:["WebkitBorderBeforeStyle"],borderBlockStartWidth:["WebkitBorderBeforeWidth"],borderBlockEnd:["WebkitBorderAfter"],borderBlockEndColor:["WebkitBorderAfterColor"],borderBlockEndStyle:["WebkitBorderAfterStyle"],borderBlockEndWidth:["WebkitBorderAfterWidth"],borderInlineStart:["WebkitBorderStart","MozBorderStart"],borderInlineStartColor:["WebkitBorderStartColor","MozBorderStartColor"],borderInlineStartStyle:["WebkitBorderStartStyle","MozBorderStartStyle"],borderInlineStartWidth:["WebkitBorderStartWidth","MozBorderStartWidth"],borderInlineEnd:["WebkitBorderEnd","MozBorderEnd"],borderInlineEndColor:["WebkitBorderEndColor","MozBorderEndColor"],borderInlineEndStyle:["WebkitBorderEndStyle","MozBorderEndStyle"],borderInlineEndWidth:["WebkitBorderEndWidth","MozBorderEndWidth"]};function e(t,r,s){if(Object.prototype.hasOwnProperty.call(n,t))for(var o=n[t],u=0,d=o.length;u<d;++u)s[o[u]]=r}return qu}var yw=_w();const Sw=_i(yw);var Yu={},W0;function xw(){if(W0)return Yu;W0=1,Object.defineProperty(Yu,"__esModule",{value:!0}),Yu.default=n;function n(e,t){if(e==="position"&&t==="sticky")return["-webkit-sticky","sticky"]}return Yu}var Mw=xw();const Ew=_i(Mw);var Ku={},$0;function bw(){if($0)return Ku;$0=1,Object.defineProperty(Ku,"__esModule",{value:!0}),Ku.default=r;var n=["-webkit-","-moz-",""],e={maxHeight:!0,maxWidth:!0,width:!0,height:!0,columnWidth:!0,minWidth:!0,minHeight:!0},t={"min-content":!0,"max-content":!0,"fill-available":!0,"fit-content":!0,"contain-floats":!0};function r(s,o){if(e.hasOwnProperty(s)&&t.hasOwnProperty(o))return n.map(function(u){return u+o})}return Ku}var ww=bw();const Tw=_i(ww);var Zu={},qf={};const Rw=Hy(Vb);var X0;function Aw(){return X0||(X0=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=s;var e=Rw,t=r(e);function r(o){return o&&o.__esModule?o:{default:o}}function s(o){return(0,t.default)(o)}})(qf)),qf}var q0;function Cw(){if(q0)return Zu;q0=1,Object.defineProperty(Zu,"__esModule",{value:!0}),Zu.default=_;var n=Aw(),e=u(n),t=tS(),r=u(t),s=Yy(),o=u(s);function u(m){return m&&m.__esModule?m:{default:m}}var d={transition:!0,transitionProperty:!0,WebkitTransition:!0,WebkitTransitionProperty:!0,MozTransition:!0,MozTransitionProperty:!0},f={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-"};function h(m,v){if((0,r.default)(m))return m;for(var x=m.split(/,(?![^()]*(?:\([^()]*\))?\))/g),E=0,T=x.length;E<T;++E){var y=x[E],S=[y];for(var w in v){var D=(0,e.default)(w);if(y.indexOf(D)>-1&&D!=="order")for(var L=v[w],N=0,I=L.length;N<I;++N)S.unshift(y.replace(D,f[L[N]]+D))}x[E]=S.join(",")}return x.join(",")}function _(m,v,x,E){if(typeof v=="string"&&d.hasOwnProperty(m)){var T=h(v,E),y=T.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(w){return!/-moz-|-ms-/.test(w)}).join(",");if(m.indexOf("Webkit")>-1)return y;var S=T.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(w){return!/-webkit-|-ms-/.test(w)}).join(",");return m.indexOf("Moz")>-1?S:(x["Webkit"+(0,o.default)(m)]=y,x["Moz"+(0,o.default)(m)]=S,T)}}return Zu}var Pw=Cw();const Lw=_i(Pw);var Bt=["Webkit"],Dw=["Moz"],Iw=["Webkit","Moz"],sn=["Webkit","ms"],Nw=["Webkit","Moz","ms"];const Ow={plugins:[Lb,lw,dw,pw,vw,Sw,Ew,Tw,Lw],prefixMap:{appearance:Nw,userSelect:Iw,textEmphasisPosition:sn,textEmphasis:sn,textEmphasisStyle:sn,textEmphasisColor:sn,boxDecorationBreak:sn,clipPath:Bt,maskImage:sn,maskMode:sn,maskRepeat:sn,maskPosition:sn,maskClip:sn,maskOrigin:sn,maskSize:sn,maskComposite:sn,mask:sn,maskBorderSource:sn,maskBorderMode:sn,maskBorderSlice:sn,maskBorderWidth:sn,maskBorderOutset:sn,maskBorderRepeat:sn,maskBorder:sn,maskType:sn,textDecorationStyle:Bt,textDecorationSkip:Bt,textDecorationLine:Bt,textDecorationColor:Bt,filter:Bt,breakAfter:Bt,breakBefore:Bt,breakInside:Bt,columnCount:Bt,columnFill:Bt,columnGap:Bt,columnRule:Bt,columnRuleColor:Bt,columnRuleStyle:Bt,columnRuleWidth:Bt,columns:Bt,columnSpan:Bt,columnWidth:Bt,backdropFilter:Bt,hyphens:Bt,flowInto:Bt,flowFrom:Bt,regionFragment:Bt,textOrientation:Bt,tabSize:Dw,fontKerning:Bt,textSizeAdjust:Bt}};var Uw=Ab(Ow),Fw=["animationKeyframes"],Y0=new Map,kw={},Bw=1,zw=3,Hw={borderColor:2,borderRadius:2,borderStyle:2,borderWidth:2,display:2,flex:2,inset:2,margin:2,overflow:2,overscrollBehavior:2,padding:2,insetBlock:2.1,insetInline:2.1,marginInline:2.1,marginBlock:2.1,paddingInline:2.1,paddingBlock:2.1,borderBlockStartColor:2.2,borderBlockStartStyle:2.2,borderBlockStartWidth:2.2,borderBlockEndColor:2.2,borderBlockEndStyle:2.2,borderBlockEndWidth:2.2,borderInlineStartColor:2.2,borderInlineStartStyle:2.2,borderInlineStartWidth:2.2,borderInlineEndColor:2.2,borderInlineEndStyle:2.2,borderInlineEndWidth:2.2,borderEndStartRadius:2.2,borderEndEndRadius:2.2,borderStartStartRadius:2.2,borderStartEndRadius:2.2,insetBlockEnd:2.2,insetBlockStart:2.2,insetInlineEnd:2.2,insetInlineStart:2.2,marginBlockStart:2.2,marginBlockEnd:2.2,marginInlineStart:2.2,marginInlineEnd:2.2,paddingBlockStart:2.2,paddingBlockEnd:2.2,paddingInlineStart:2.2,paddingInlineEnd:2.2},$h="borderTopLeftRadius",Xh="borderTopRightRadius",qh="borderBottomLeftRadius",Yh="borderBottomRightRadius",Kh="borderLeftColor",Zh="borderLeftStyle",jh="borderLeftWidth",Jh="borderRightColor",Qh="borderRightStyle",ep="borderRightWidth",tp="right",np="marginLeft",ip="marginRight",rp="paddingLeft",ap="paddingRight",sp="left",Oc={[$h]:Xh,[Xh]:$h,[qh]:Yh,[Yh]:qh,[Kh]:Jh,[Zh]:Qh,[jh]:ep,[Jh]:Kh,[Qh]:Zh,[ep]:jh,[sp]:tp,[np]:ip,[ip]:np,[rp]:ap,[ap]:rp,[tp]:sp},fl={borderStartStartRadius:$h,borderStartEndRadius:Xh,borderEndStartRadius:qh,borderEndEndRadius:Yh,borderInlineStartColor:Kh,borderInlineStartStyle:Zh,borderInlineStartWidth:jh,borderInlineEndColor:Jh,borderInlineEndStyle:Qh,borderInlineEndWidth:ep,insetInlineEnd:tp,insetInlineStart:sp,marginInlineStart:np,marginInlineEnd:ip,paddingInlineStart:rp,paddingInlineEnd:ap},nS=["clear","float","textAlign"];function Gw(n){var e={$$css:!0},t=[];function r(s,o,u){var d=$w(u,o),f=o+d,h=Y0.get(f),_;if(h!=null)_=h[0],t.push(h[1]);else{var m=s!==o?f:d;_=dm("r",s,m);var v=Hw[s]||zw,x=Xw(_,o,u),E=[x,v];t.push(E),Y0.set(f,[_,E])}return _}return Object.keys(n).sort().forEach(s=>{var o=n[s];if(o!=null){var u;if(nS.indexOf(s)>-1){var d=r(s,s,"left"),f=r(s,s,"right");o==="start"?u=[d,f]:o==="end"&&(u=[f,d])}var h=fl[s];if(h!=null){var _=r(s,h,o),m=r(s,Oc[h],o);u=[_,m]}if(s==="transitionProperty"){for(var v=Array.isArray(o)?o:[o],x=[],E=0;E<v.length;E++){var T=v[E];typeof T=="string"&&fl[T]!=null&&x.push(E)}if(x.length>0){var y=[...v],S=[...v];x.forEach(w=>{var D=y[w];if(typeof D=="string"){var L=fl[D],N=Oc[L];y[w]=L,S[w]=N;var I=r(s,s,y),b=r(s,s,S);u=[I,b]}})}}u==null?u=r(s,s,o):e.$$css$localize=!0,e[s]=u}}),[e,t]}function Vw(n,e){var t={$$css:!0},r=[],s=n.animationKeyframes,o=ds(n,Fw),u=dm("css",e,JSON.stringify(n)),d="."+u,f;if(s!=null){var h=iS(s),_=h[0],m=h[1];f=_.join(","),r.push(...m)}var v=Br(Pi(Pi({},o),{},{animationName:f}));return r.push(""+d+v),t[u]=u,[t,[[r,Bw]]]}function Ww(n,e){var t=n||kw,r={},s={},o=function(){var h=t[u],_=u,m=h;if(!Object.prototype.hasOwnProperty.call(t,u)||h==null)return"continue";nS.indexOf(u)>-1&&(h==="start"?m=e?"right":"left":h==="end"&&(m=e?"left":"right"));var v=fl[u];if(v!=null&&(_=e?Oc[v]:v),u==="transitionProperty"){var x=Array.isArray(h)?h:[h];x.forEach((E,T)=>{if(typeof E=="string"){var y=fl[E];y!=null&&(x[T]=e?Oc[y]:y,m=x.join(" "))}})}r[_]||(s[_]=m),_===u&&(r[_]=!0)};for(var u in t)var d=o();return qy(s,!0)}function $w(n,e){var t=gr(n,e);return typeof t!="string"?JSON.stringify(t||""):t}function Xw(n,e,t){var r=[],s="."+n;switch(e){case"animationKeyframes":{var o=iS(t),u=o[0],d=o[1],f=Br({animationName:u.join(",")});r.push(""+s+f,...d);break}case"placeholderTextColor":{var h=Br({color:t,opacity:1});r.push(s+"::-webkit-input-placeholder"+h,s+"::-moz-placeholder"+h,s+":-ms-input-placeholder"+h,s+"::placeholder"+h);break}case"pointerEvents":{var _=t;if(t==="auto"||t==="box-only"){if(_="auto!important",t==="box-only"){var m=Br({pointerEvents:"none"});r.push(s+">*"+m)}}else if((t==="none"||t==="box-none")&&(_="none!important",t==="box-none")){var v=Br({pointerEvents:"auto"});r.push(s+">*"+v)}var x=Br({pointerEvents:_});r.push(""+s+x);break}case"scrollbarWidth":{t==="none"&&r.push(s+"::-webkit-scrollbar{display:none}");var E=Br({scrollbarWidth:t});r.push(""+s+E);break}default:{var T=Br({[e]:t});r.push(""+s+T);break}}return r}function Br(n){var e=Uw(qy(n)),t=Object.keys(e).map(r=>{var s=e[r],o=xb(r);return Array.isArray(s)?s.map(u=>o+":"+u).join(";"):o+":"+s}).sort().join(";");return"{"+t+";}"}function dm(n,e,t){var r=vb(e+t);return n+"-"+r}function qw(n){var e=["-webkit-",""],t=dm("r","animation",JSON.stringify(n)),r="{"+Object.keys(n).map(o=>{var u=n[o],d=Br(u);return""+o+d}).join("")+"}",s=e.map(o=>"@"+o+"keyframes "+t+r);return[t,s]}function iS(n){if(typeof n=="number")throw new Error("Invalid CSS keyframes type: "+typeof n);var e=[],t=[],r=Array.isArray(n)?n:[n];return r.forEach(s=>{if(typeof s=="string")e.push(s);else{var o=qw(s),u=o[0],d=o[1];e.push(u),t.push(...d)}}),[e,t]}function Yf(n,e,t){if(yi){var r=e??document,s=r.getElementById(n);if(s==null)if(s=document.createElement("style"),s.setAttribute("id",n),typeof t=="string"&&s.appendChild(document.createTextNode(t)),r instanceof ShadowRoot)r.insertBefore(s,r.firstChild);else{var o=r.head;o&&o.insertBefore(s,o.firstChild)}return s.sheet}else return null}var Yw=Array.prototype.slice;function Kf(n){var e={},t={};if(n!=null){var r;Yw.call(n.cssRules).forEach((u,d)=>{var f=u.cssText;if(f.indexOf("stylesheet-group")>-1)r=jw(u),e[r]={start:d,rules:[f]};else{var h=Z0(f);h!=null&&(t[h]=!0,e[r].rules.push(f))}})}function s(u,d,f){var h=K0(e),_=h.indexOf(d),m=_+1,v=h[m],x=v!=null&&e[v].start!=null?e[v].start:u.cssRules.length,E=Qw(u,f,x);if(E){e[d].start==null&&(e[d].start=x);for(var T=m;T<h.length;T+=1){var y=h[T],S=e[y].start||0;e[y].start=S+1}}return E}var o={getTextContent(){return K0(e).map(u=>{var d=e[u].rules,f=d.shift();return d.sort(),d.unshift(f),d.join(`
`)}).join(`
`)},insert(u,d){var f=Number(d);if(e[f]==null){var h=Kw(f);e[f]={start:null,rules:[h]},n!=null&&s(n,f,h)}var _=Z0(u);if(_!=null&&t[_]==null&&(t[_]=!0,e[f].rules.push(u),n!=null)){var m=s(n,f,u);m||e[f].rules.pop()}}};return o}function Kw(n){return'[stylesheet-group="'+n+'"]{}'}var Zw=/["']/g;function jw(n){return Number(n.selectorText.split(Zw)[1])}function K0(n){return Object.keys(n).map(Number).sort((e,t)=>e>t?1:-1)}var Jw=/\s*([,])\s*/g;function Z0(n){var e=n.split("{")[0].trim();return e!==""?e.replace(Jw,"$1"):null}function Qw(n,e,t){try{return n.insertRule(e,t),!0}catch{return!1}}var eT="react-native-stylesheet",Zf=new WeakMap,Gi=[],j0=["html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}","body{margin:0;}","button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}","input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}"];function tT(n,e){e===void 0&&(e=eT);var t;if(yi){var r=document;if(Gi.length===0)t=Kf(Yf(e)),j0.forEach(d=>{t.insert(d,0)}),Zf.set(r,Gi.length),Gi.push(t);else{var s=Zf.get(r);if(s==null){var o=Gi[0],u=o!=null?o.getTextContent():"";t=Kf(Yf(e,r,u)),Zf.set(r,Gi.length),Gi.push(t)}else t=Gi[s]}}else Gi.length===0?(t=Kf(Yf(e)),j0.forEach(d=>{t.insert(d,0)}),Gi.push(t)):t=Gi[0];return{getTextContent(){return t.getTextContent()},id:e,insert(d,f){Gi.forEach(h=>{h.insert(d,f)})}}}var ju={},J0;function nT(){if(J0)return ju;J0=1,Object.defineProperty(ju,"__esModule",{value:!0}),ju.localizeStyle=r;var n=new WeakMap,e="$$css$localize";function t(s,o){var u={};for(var d in s)if(d!==e){var f=s[d];Array.isArray(f)?u[d]=o?f[1]:f[0]:u[d]=f}return u}function r(s,o){if(s[e]!=null){var u=o?1:0;if(n.has(s)){var d=n.get(s),f=d[u];return f==null&&(f=t(s,o),d[u]=f,n.set(s,d)),f}var h=t(s,o),_=new Array(2);return _[u]=h,n.set(s,_),h}return s}return ju}var jf,Q0;function iT(){return Q0||(Q0=1,jf=nT()),jf}var rT=iT(),aT={},rS={height:0,width:0},aS=n=>{var e=n.shadowColor,t=n.shadowOffset,r=n.shadowOpacity,s=n.shadowRadius,o=t||rS,u=o.height,d=o.width,f=gr(d),h=gr(u),_=gr(s||0),m=Xy(e||"black",r);if(m!=null&&f!=null&&h!=null&&_!=null)return f+" "+h+" "+_+" "+m},sT=n=>{var e=n.textShadowColor,t=n.textShadowOffset,r=n.textShadowRadius,s=t||rS,o=s.height,u=s.width,d=r||0,f=gr(u),h=gr(o),_=gr(d),m=gr(e,"textShadowColor");if(m&&(o!==0||u!==0||d!==0)&&f!=null&&h!=null&&_!=null)return f+" "+h+" "+_+" "+m},oT=n=>{var e=Object.keys(n)[0],t=n[e];if(e==="matrix"||e==="matrix3d")return e+"("+t.join(",")+")";var r=gr(t,e);return e+"("+r+")"},lT=n=>n.map(oT).join(" "),uT={borderBottomEndRadius:"borderEndEndRadius",borderBottomStartRadius:"borderEndStartRadius",borderTopEndRadius:"borderStartEndRadius",borderTopStartRadius:"borderStartStartRadius",borderEndColor:"borderInlineEndColor",borderEndStyle:"borderInlineEndStyle",borderEndWidth:"borderInlineEndWidth",borderStartColor:"borderInlineStartColor",borderStartStyle:"borderInlineStartStyle",borderStartWidth:"borderInlineStartWidth",end:"insetInlineEnd",marginEnd:"marginInlineEnd",marginHorizontal:"marginInline",marginStart:"marginInlineStart",marginVertical:"marginBlock",paddingEnd:"paddingInlineEnd",paddingHorizontal:"paddingInline",paddingStart:"paddingInlineStart",paddingVertical:"paddingBlock",start:"insetInlineStart"},cT={elevation:!0,overlayColor:!0,resizeMode:!0,tintColor:!0},sS=function(e,t){t===void 0&&(t={});var r=e||aT,s={};if(t.shadow,r.shadowColor!=null||r.shadowOffset!=null||r.shadowOpacity!=null||r.shadowRadius!=null){var o=aS(r);if(o!=null&&s.boxShadow==null){var u=r.boxShadow,d=u?u+", "+o:o;s.boxShadow=d}}if(t.textShadow,r.textShadowColor!=null||r.textShadowOffset!=null||r.textShadowRadius!=null){var f=sT(r);if(f!=null&&s.textShadow==null){var h=r.textShadow,_=h?h+", "+f:f;s.textShadow=_}}for(var m in r)if(!(cT[m]!=null||m==="shadowColor"||m==="shadowOffset"||m==="shadowOpacity"||m==="shadowRadius"||m==="textShadowColor"||m==="textShadowOffset"||m==="textShadowRadius")){var v=r[m],x=uT[m]||m,E=v;!Object.prototype.hasOwnProperty.call(r,m)||x!==m&&r[x]!=null||(x==="aspectRatio"&&typeof E=="number"?s[x]=E.toString():x==="fontVariant"?(Array.isArray(E)&&E.length>0&&(E=E.join(" ")),s[x]=E):x==="textAlignVertical"?r.verticalAlign==null&&(s.verticalAlign=E==="center"?"middle":E):x==="transform"?(Array.isArray(E)&&(E=lT(E)),s.transform=E):s[x]=E)}return s},Yo={},e_;function dT(){if(e_)return Yo;e_=1,Object.defineProperty(Yo,"__esModule",{value:!0}),Yo.styleq=void 0;var n=new WeakMap,e="$$css";function t(s){var o,u,d;return s!=null&&(o=s.disableCache===!0,u=s.disableMix===!0,d=s.transform),function(){for(var h=[],_="",m=null,v=o?null:n,x=new Array(arguments.length),E=0;E<arguments.length;E++)x[E]=arguments[E];for(;x.length>0;){var T=x.pop();if(!(T==null||T===!1)){if(Array.isArray(T)){for(var y=0;y<T.length;y++)x.push(T[y]);continue}var S=d!=null?d(T):T;if(S.$$css){var w="";if(v!=null&&v.has(S)){var D=v.get(S);D!=null&&(w=D[0],h.push.apply(h,D[1]),v=D[2])}else{var L=[];for(var N in S){var I=S[N];N!==e&&(typeof I=="string"||I===null?h.includes(N)||(h.push(N),v!=null&&L.push(N),typeof I=="string"&&(w+=w?" "+I:I)):console.error("styleq: ".concat(N," typeof ").concat(String(I),' is not "string" or "null".')))}if(v!=null){var b=new WeakMap;v.set(S,[w,L,b]),v=b}}w&&(_=_?w+" "+_:w)}else if(u)m==null&&(m={}),m=Object.assign({},S,m);else{var P=null;for(var k in S){var F=S[k];F!==void 0&&(h.includes(k)||(F!=null&&(m==null&&(m={}),P==null&&(P={}),P[k]=F),h.push(k),v=null))}P!=null&&(m=Object.assign(P,m))}}}var G=[_,m];return G}}var r=t();return Yo.styleq=r,r.factory=t,Yo}var fT=dT(),hT=["writingDirection"],oS=new WeakMap,Uc=tT(),lS={shadow:!0,textShadow:!0};function pT(n,e){e===void 0&&(e={});var t=e,r=t.writingDirection,s=ds(t,hT),o=r==="rtl";return fT.styleq.factory({transform(u){var d=oS.get(u);return d!=null?rT.localizeStyle(d,o):sS(u,Pi(Pi({},lS),s))}})(n)}function uS(n){n.forEach(e=>{var t=e[0],r=e[1];Uc!=null&&t.forEach(s=>{Uc.insert(s,r)})})}function mT(n){var e=Gw(sS(n,lS)),t=e[0],r=e[1];return uS(r),t}function gT(n,e){var t=Vw(n,e),r=t[0],s=t[1];return uS(s),r}var cS={position:"absolute",left:0,right:0,top:0,bottom:0},vT=dS({x:Pi({},cS)}).x;function dS(n){return Object.keys(n).forEach(e=>{var t=n[e];if(t!=null&&t.$$css!==!0){var r;e.indexOf("$raw")>-1?r=gT(t,e.split("$raw")[0]):r=mT(t),oS.set(t,r)}}),n}function _T(n,e){return[n,e]}function yT(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];for(var r=e.flat(1/0),s={},o=0;o<r.length;o++){var u=r[o];u!=null&&typeof u=="object"&&Object.assign(s,u)}return s}function ST(){return{id:Uc.id,textContent:Uc.getTextContent()}}function qr(n,e){e===void 0&&(e={});var t=e.writingDirection==="rtl",r=pT(n,e);return Array.isArray(r)&&r[1]!=null&&(r[1]=Ww(r[1],t)),r}qr.absoluteFill=vT;qr.absoluteFillObject=cS;qr.create=dS;qr.compose=_T;qr.flatten=yT;qr.getSheet=ST;qr.hairlineWidth=1;yi&&window.__REACT_DEVTOOLS_GLOBAL_HOOK__&&(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle=qr.flatten);var xr=qr,xT=["aria-activedescendant","accessibilityActiveDescendant","aria-atomic","accessibilityAtomic","aria-autocomplete","accessibilityAutoComplete","aria-busy","accessibilityBusy","aria-checked","accessibilityChecked","aria-colcount","accessibilityColumnCount","aria-colindex","accessibilityColumnIndex","aria-colspan","accessibilityColumnSpan","aria-controls","accessibilityControls","aria-current","accessibilityCurrent","aria-describedby","accessibilityDescribedBy","aria-details","accessibilityDetails","aria-disabled","accessibilityDisabled","aria-errormessage","accessibilityErrorMessage","aria-expanded","accessibilityExpanded","aria-flowto","accessibilityFlowTo","aria-haspopup","accessibilityHasPopup","aria-hidden","accessibilityHidden","aria-invalid","accessibilityInvalid","aria-keyshortcuts","accessibilityKeyShortcuts","aria-label","accessibilityLabel","aria-labelledby","accessibilityLabelledBy","aria-level","accessibilityLevel","aria-live","accessibilityLiveRegion","aria-modal","accessibilityModal","aria-multiline","accessibilityMultiline","aria-multiselectable","accessibilityMultiSelectable","aria-orientation","accessibilityOrientation","aria-owns","accessibilityOwns","aria-placeholder","accessibilityPlaceholder","aria-posinset","accessibilityPosInSet","aria-pressed","accessibilityPressed","aria-readonly","accessibilityReadOnly","aria-required","accessibilityRequired","role","accessibilityRole","aria-roledescription","accessibilityRoleDescription","aria-rowcount","accessibilityRowCount","aria-rowindex","accessibilityRowIndex","aria-rowspan","accessibilityRowSpan","aria-selected","accessibilitySelected","aria-setsize","accessibilitySetSize","aria-sort","accessibilitySort","aria-valuemax","accessibilityValueMax","aria-valuemin","accessibilityValueMin","aria-valuenow","accessibilityValueNow","aria-valuetext","accessibilityValueText","dataSet","focusable","id","nativeID","pointerEvents","style","tabIndex","testID"],MT={},ET=Object.prototype.hasOwnProperty,bT=Array.isArray,wT=/[A-Z]/g;function TT(n){return"-"+n.toLowerCase()}function RT(n){return n.replace(wT,TT)}function Bs(n){return bT(n)?n.join(" "):n}var AT=xr.create({auto:{pointerEvents:"auto"},"box-none":{pointerEvents:"box-none"},"box-only":{pointerEvents:"box-only"},none:{pointerEvents:"none"}}),CT=(n,e,t)=>{e||(e=MT);var r=e,s=r["aria-activedescendant"],o=r.accessibilityActiveDescendant,u=r["aria-atomic"],d=r.accessibilityAtomic,f=r["aria-autocomplete"],h=r.accessibilityAutoComplete,_=r["aria-busy"],m=r.accessibilityBusy,v=r["aria-checked"],x=r.accessibilityChecked,E=r["aria-colcount"],T=r.accessibilityColumnCount,y=r["aria-colindex"],S=r.accessibilityColumnIndex,w=r["aria-colspan"],D=r.accessibilityColumnSpan,L=r["aria-controls"],N=r.accessibilityControls,I=r["aria-current"],b=r.accessibilityCurrent,P=r["aria-describedby"],k=r.accessibilityDescribedBy,F=r["aria-details"],G=r.accessibilityDetails,K=r["aria-disabled"],Y=r.accessibilityDisabled,H=r["aria-errormessage"],se=r.accessibilityErrorMessage,ae=r["aria-expanded"],ee=r.accessibilityExpanded,j=r["aria-flowto"],$=r.accessibilityFlowTo,Z=r["aria-haspopup"],U=r.accessibilityHasPopup,Q=r["aria-hidden"],Te=r.accessibilityHidden,te=r["aria-invalid"],ve=r.accessibilityInvalid,_e=r["aria-keyshortcuts"],Ee=r.accessibilityKeyShortcuts,pe=r["aria-label"],ke=r.accessibilityLabel,pt=r["aria-labelledby"],et=r.accessibilityLabelledBy,vt=r["aria-level"],St=r.accessibilityLevel,ut=r["aria-live"],tn=r.accessibilityLiveRegion,Gt=r["aria-modal"],dn=r.accessibilityModal,Nt=r["aria-multiline"],Pn=r.accessibilityMultiline,Ft=r["aria-multiselectable"],on=r.accessibilityMultiSelectable,pn=r["aria-orientation"],bn=r.accessibilityOrientation,X=r["aria-owns"],wn=r.accessibilityOwns,Lt=r["aria-placeholder"],Dt=r.accessibilityPlaceholder,Ne=r["aria-posinset"],Yt=r.accessibilityPosInSet,je=r["aria-pressed"],tt=r.accessibilityPressed,O=r["aria-readonly"],A=r.accessibilityReadOnly,ie=r["aria-required"],Me=r.accessibilityRequired;r.role,r.accessibilityRole;var ge=r["aria-roledescription"],Ae=r.accessibilityRoleDescription,Le=r["aria-rowcount"],fe=r.accessibilityRowCount,he=r["aria-rowindex"],Re=r.accessibilityRowIndex,z=r["aria-rowspan"],me=r.accessibilityRowSpan,de=r["aria-selected"],De=r.accessibilitySelected,we=r["aria-setsize"],Ce=r.accessibilitySetSize,qe=r["aria-sort"],ct=r.accessibilitySort,Se=r["aria-valuemax"],Je=r.accessibilityValueMax,st=r["aria-valuemin"],Fe=r.accessibilityValueMin,_t=r["aria-valuenow"],Vt=r.accessibilityValueNow,Ln=r["aria-valuetext"],Kr=r.accessibilityValueText,nr=r.dataSet,Zr=r.focusable,Na=r.id,Si=r.nativeID,ii=r.pointerEvents,jr=r.style,ir=r.tabIndex,Jr=r.testID,ze=ds(r,xT),Oa=K||Y,Bn=$y.propsToAriaRole(e),rr=s??o;rr!=null&&(ze["aria-activedescendant"]=rr);var ms=u!=null?s:d;ms!=null&&(ze["aria-atomic"]=ms);var kt=f??h;kt!=null&&(ze["aria-autocomplete"]=kt);var Ua=_??m;Ua!=null&&(ze["aria-busy"]=Ua);var Qr=v??x;Qr!=null&&(ze["aria-checked"]=Qr);var Fa=E??T;Fa!=null&&(ze["aria-colcount"]=Fa);var wr=y??S;wr!=null&&(ze["aria-colindex"]=wr);var ka=w??D;ka!=null&&(ze["aria-colspan"]=ka);var C=L??N;C!=null&&(ze["aria-controls"]=Bs(C));var V=I??b;V!=null&&(ze["aria-current"]=V);var oe=P??k;oe!=null&&(ze["aria-describedby"]=Bs(oe));var ne=F??G;ne!=null&&(ze["aria-details"]=ne),Oa===!0&&(ze["aria-disabled"]=!0,(n==="button"||n==="form"||n==="input"||n==="select"||n==="textarea")&&(ze.disabled=!0));var J=H??se;J!=null&&(ze["aria-errormessage"]=J);var Oe=ae??ee;Oe!=null&&(ze["aria-expanded"]=Oe);var Ge=j??$;Ge!=null&&(ze["aria-flowto"]=Bs(Ge));var Ie=Z??U;Ie!=null&&(ze["aria-haspopup"]=Ie);var Ue=Q??Te;Ue===!0&&(ze["aria-hidden"]=Ue);var Ve=te??ve;Ve!=null&&(ze["aria-invalid"]=Ve);var nt=_e??Ee;nt!=null&&(ze["aria-keyshortcuts"]=Bs(nt));var ft=pe??ke;ft!=null&&(ze["aria-label"]=ft);var We=pt??et;We!=null&&(ze["aria-labelledby"]=Bs(We));var ht=vt??St;ht!=null&&(ze["aria-level"]=ht);var Ut=ut??tn;Ut!=null&&(ze["aria-live"]=Ut==="none"?"off":Ut);var At=Gt??dn;At!=null&&(ze["aria-modal"]=At);var wt=Nt??Pn;wt!=null&&(ze["aria-multiline"]=wt);var Wt=Ft??on;Wt!=null&&(ze["aria-multiselectable"]=Wt);var $e=pn??bn;$e!=null&&(ze["aria-orientation"]=$e);var nn=X??wn;nn!=null&&(ze["aria-owns"]=Bs(nn));var Ye=Lt??Dt;Ye!=null&&(ze["aria-placeholder"]=Ye);var ri=Ne??Yt;ri!=null&&(ze["aria-posinset"]=ri);var rn=je??tt;rn!=null&&(ze["aria-pressed"]=rn);var Ii=O??A;Ii!=null&&(ze["aria-readonly"]=Ii,(n==="input"||n==="select"||n==="textarea")&&(ze.readOnly=!0));var $n=ie??Me;$n!=null&&(ze["aria-required"]=$n,(n==="input"||n==="select"||n==="textarea")&&(ze.required=Me)),Bn!=null&&(ze.role=Bn==="none"?"presentation":Bn);var ai=ge??Ae;ai!=null&&(ze["aria-roledescription"]=ai);var gt=Le??fe;gt!=null&&(ze["aria-rowcount"]=gt);var Kt=he??Re;Kt!=null&&(ze["aria-rowindex"]=Kt);var mn=z??me;mn!=null&&(ze["aria-rowspan"]=mn);var xt=de??De;xt!=null&&(ze["aria-selected"]=xt);var It=we??Ce;It!=null&&(ze["aria-setsize"]=It);var ln=qe??ct;ln!=null&&(ze["aria-sort"]=ln);var Ni=Se??Je;Ni!=null&&(ze["aria-valuemax"]=Ni);var ea=st??Fe;ea!=null&&(ze["aria-valuemin"]=ea);var Oi=_t??Vt;Oi!=null&&(ze["aria-valuenow"]=Oi);var Nl=Ln??Kr;if(Nl!=null&&(ze["aria-valuetext"]=Nl),nr!=null){for(var gs in nr)if(ET.call(nr,gs)){var Ba=RT(gs),Ol=nr[gs];Ol!=null&&(ze["data-"+Ba]=Ol)}}ir===0||ir==="0"||ir===-1||ir==="-1"?ze.tabIndex=ir:(Zr===!1&&(ze.tabIndex="-1"),n==="a"||n==="button"||n==="input"||n==="select"||n==="textarea"?(Zr===!1||Y===!0)&&(ze.tabIndex="-1"):Bn==="button"||Bn==="checkbox"||Bn==="link"||Bn==="radio"||Bn==="textbox"||Bn==="switch"?Zr!==!1&&(ze.tabIndex="0"):Zr===!0&&(ze.tabIndex="0"));var _o=xr([jr,ii&&AT[ii]],Pi({writingDirection:"ltr"},t)),za=_o[0],yo=_o[1];za&&(ze.className=za),yo&&(ze.style=yo);var Ul=Na??Si;return Ul!=null&&(ze.id=Ul),Jr!=null&&(ze["data-testid"]=Jr),ze.type==null&&n==="button"&&(ze.type="button"),ze},PT=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),t_=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","far","glk","he","iw","khw","ks","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]),n_=new Map;function LT(n){var e=n_.get(n);if(e)return e;var t=!1;if(Intl.Locale)try{var r=new Intl.Locale(n).maximize().script;t=PT.has(r)}catch{var s=n.split("-")[0];t=t_.has(s)}else{var o=n.split("-")[0];t=t_.has(o)}return n_.set(n,t),t}var DT={direction:"ltr",locale:"en-US"},fS=at.createContext(DT);function fm(n){return LT(n)?"rtl":"ltr"}function IT(n){var e=n.direction,t=n.locale,r=n.children,s=e||t;return s?ao.createElement(fS.Provider,{children:r,value:{direction:t?fm(t):e,locale:t}}):r}function hS(){return at.useContext(fS)}var hm=(n,e,t)=>{var r;n&&n.constructor===String&&(r=$y.propsToAccessibilityComponent(e));var s=r||n,o=CT(s,e,t),u=ao.createElement(s,o),d=o.dir?ao.createElement(IT,{children:u,direction:o.dir,locale:o.lang}):u;return d},NT=[];function pS(n){return NT[n-1]}var OT=/^data:/;class pi{static has(e){var t=pi._entries,r=OT.test(e);return r||!!t[e]}static add(e){var t=pi._entries,r=Date.now();t[e]?(t[e].lastUsedTimestamp=r,t[e].refCount+=1):t[e]={lastUsedTimestamp:r,refCount:1}}static remove(e){var t=pi._entries;t[e]&&(t[e].refCount-=1),pi._cleanUpIfNeeded()}static _cleanUpIfNeeded(){var e=pi._entries,t=Object.keys(e);if(t.length+1>pi._maximumEntries){var r,s;t.forEach(o=>{var u=e[o];(!s||u.lastUsedTimestamp<s.lastUsedTimestamp)&&u.refCount===0&&(r=o,s=u)}),r&&delete e[r]}}}pi._maximumEntries=256;pi._entries={};var Jf=0,Ju={},vr={abort(n){var e=Ju[""+n];e&&(e.onerror=null,e.onload=null,e=null,delete Ju[""+n])},getSize(n,e,t){var r=!1,s=setInterval(u,16),o=vr.load(n,u,d);function u(){var f=Ju[""+o];if(f){var h=f.naturalHeight,_=f.naturalWidth;h&&_&&(e(_,h),r=!0)}r&&(vr.abort(o),clearInterval(s))}function d(){typeof t=="function"&&t(),vr.abort(o),clearInterval(s)}},has(n){return pi.has(n)},load(n,e,t){Jf+=1;var r=new window.Image;return r.onerror=t,r.onload=s=>{var o=()=>e({nativeEvent:s});typeof r.decode=="function"?r.decode().then(o,o):setTimeout(o,0)},r.src=n,Ju[""+Jf]=r,Jf},prefetch(n){return new Promise((e,t)=>{vr.load(n,()=>{pi.add(n),pi.remove(n),e()},t)})},queryCache(n){var e={};return n.forEach(t=>{pi.has(t)&&(e[t]="disk/memory")}),Promise.resolve(e)}},Qf,i_;function UT(){if(i_)return Qf;i_=1;function n(e,t){for(var r=arguments.length,s=new Array(r>2?r-2:0),o=2;o<r;o++)s[o-2]=arguments[o];if(!e){var u;if(t===void 0)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=0;u=new Error(t.replace(/%s/g,function(){return String(s[d++])})),u.name="Invariant Violation"}throw u.framesToPop=1,u}}return Qf=n,Qf}var FT=UT();const r_=_i(FT);var rs={window:{fontScale:1,height:0,scale:1,width:0},screen:{fontScale:1,height:0,scale:1,width:0}},Ma={},a_=yi;function mS(){if(yi){var n=window,e,t;if(n.visualViewport){var r=n.visualViewport;e=Math.round(r.height*r.scale),t=Math.round(r.width*r.scale)}else{var s=n.document.documentElement;e=s.clientHeight,t=s.clientWidth}rs.window={fontScale:1,height:e,scale:n.devicePixelRatio||1,width:t},rs.screen={fontScale:1,height:n.screen.height,scale:n.devicePixelRatio||1,width:n.screen.width}}}function s_(){mS(),Array.isArray(Ma.change)&&Ma.change.forEach(n=>n(rs))}class o_{static get(e){return a_&&(a_=!1,mS()),r_(rs[e],"No dimension set for key "+e),rs[e]}static set(e){e&&(yi?r_(!1,"Dimensions cannot be set in the browser"):(e.screen!=null&&(rs.screen=e.screen),e.window!=null&&(rs.window=e.window)))}static addEventListener(e,t){return Ma[e]=Ma[e]||[],Ma[e].push(t),{remove:()=>{this.removeEventListener(e,t)}}}static removeEventListener(e,t){Array.isArray(Ma[e])&&(Ma[e]=Ma[e].filter(r=>r!==t))}}yi&&(window.visualViewport?window.visualViewport.addEventListener("resize",s_,!1):window.addEventListener("resize",s_,!1));class hl{static get(){return o_.get("window").scale}static getFontScale(){return o_.get("window").fontScale||hl.get()}static getPixelSizeForLayoutSize(e){return Math.round(e*hl.get())}static roundToNearestPixel(e){var t=hl.get();return Math.round(e*t)/t}}var Fc=at.createContext(!1),gS={children:!0,dataSet:!0,dir:!0,id:!0,ref:!0,suppressHydrationWarning:!0,tabIndex:!0,testID:!0,focusable:!0,nativeID:!0},vS={"aria-activedescendant":!0,"aria-atomic":!0,"aria-autocomplete":!0,"aria-busy":!0,"aria-checked":!0,"aria-colcount":!0,"aria-colindex":!0,"aria-colspan":!0,"aria-controls":!0,"aria-current":!0,"aria-describedby":!0,"aria-details":!0,"aria-disabled":!0,"aria-errormessage":!0,"aria-expanded":!0,"aria-flowto":!0,"aria-haspopup":!0,"aria-hidden":!0,"aria-invalid":!0,"aria-keyshortcuts":!0,"aria-label":!0,"aria-labelledby":!0,"aria-level":!0,"aria-live":!0,"aria-modal":!0,"aria-multiline":!0,"aria-multiselectable":!0,"aria-orientation":!0,"aria-owns":!0,"aria-placeholder":!0,"aria-posinset":!0,"aria-pressed":!0,"aria-readonly":!0,"aria-required":!0,role:!0,"aria-roledescription":!0,"aria-rowcount":!0,"aria-rowindex":!0,"aria-rowspan":!0,"aria-selected":!0,"aria-setsize":!0,"aria-sort":!0,"aria-valuemax":!0,"aria-valuemin":!0,"aria-valuenow":!0,"aria-valuetext":!0,accessibilityActiveDescendant:!0,accessibilityAtomic:!0,accessibilityAutoComplete:!0,accessibilityBusy:!0,accessibilityChecked:!0,accessibilityColumnCount:!0,accessibilityColumnIndex:!0,accessibilityColumnSpan:!0,accessibilityControls:!0,accessibilityCurrent:!0,accessibilityDescribedBy:!0,accessibilityDetails:!0,accessibilityDisabled:!0,accessibilityErrorMessage:!0,accessibilityExpanded:!0,accessibilityFlowTo:!0,accessibilityHasPopup:!0,accessibilityHidden:!0,accessibilityInvalid:!0,accessibilityKeyShortcuts:!0,accessibilityLabel:!0,accessibilityLabelledBy:!0,accessibilityLevel:!0,accessibilityLiveRegion:!0,accessibilityModal:!0,accessibilityMultiline:!0,accessibilityMultiSelectable:!0,accessibilityOrientation:!0,accessibilityOwns:!0,accessibilityPlaceholder:!0,accessibilityPosInSet:!0,accessibilityPressed:!0,accessibilityReadOnly:!0,accessibilityRequired:!0,accessibilityRole:!0,accessibilityRoleDescription:!0,accessibilityRowCount:!0,accessibilityRowIndex:!0,accessibilityRowSpan:!0,accessibilitySelected:!0,accessibilitySetSize:!0,accessibilitySort:!0,accessibilityValueMax:!0,accessibilityValueMin:!0,accessibilityValueNow:!0,accessibilityValueText:!0},_S={onClick:!0,onAuxClick:!0,onContextMenu:!0,onGotPointerCapture:!0,onLostPointerCapture:!0,onPointerCancel:!0,onPointerDown:!0,onPointerEnter:!0,onPointerMove:!0,onPointerLeave:!0,onPointerOut:!0,onPointerOver:!0,onPointerUp:!0},yS={onBlur:!0,onFocus:!0},SS={onKeyDown:!0,onKeyDownCapture:!0,onKeyUp:!0,onKeyUpCapture:!0},xS={onMouseDown:!0,onMouseEnter:!0,onMouseLeave:!0,onMouseMove:!0,onMouseOver:!0,onMouseOut:!0,onMouseUp:!0},MS={onTouchCancel:!0,onTouchCancelCapture:!0,onTouchEnd:!0,onTouchEndCapture:!0,onTouchMove:!0,onTouchMoveCapture:!0,onTouchStart:!0,onTouchStartCapture:!0},ES={style:!0};function bS(n,e){var t={};for(var r in n)n.hasOwnProperty(r)&&e[r]===!0&&(t[r]=n[r]);return t}var kc=yi?at.useLayoutEffect:at.useEffect,op=n=>{if(n!=null){var e=n.nodeType===1;if(e&&typeof n.getBoundingClientRect=="function")return n.getBoundingClientRect()}},pl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexOrder:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,gridRow:!0,gridRowEnd:!0,gridRowGap:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnGap:!0,gridColumnStart:!0,lineClamp:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0,scale:!0,scaleX:!0,scaleY:!0,scaleZ:!0,shadowOpacity:!0},kT=["ms","Moz","O","Webkit"],BT=(n,e)=>n+e.charAt(0).toUpperCase()+e.substring(1);Object.keys(pl).forEach(n=>{kT.forEach(e=>{pl[BT(e,n)]=pl[n]})});function zT(n,e,t){var r=e==null||typeof e=="boolean"||e==="";return r?"":!t&&typeof e=="number"&&e!==0&&!(pl.hasOwnProperty(n)&&pl[n])?e+"px":(""+e).trim()}function HT(n,e){var t=n.style;for(var r in e)if(e.hasOwnProperty(r)){var s=r.indexOf("--")===0,o=zT(r,e[r],s);r==="float"&&(r="cssFloat"),s?t.setProperty(r,o):t[r]=o}}var l_=n=>{var e=n.offsetHeight,t=n.offsetWidth,r=n.offsetLeft,s=n.offsetTop;for(n=n.offsetParent;n&&n.nodeType===1;)r+=n.offsetLeft+n.clientLeft-n.scrollLeft,s+=n.offsetTop+n.clientTop-n.scrollTop,n=n.offsetParent;return s-=window.scrollY,r-=window.scrollX,{width:t,height:e,top:s,left:r}},u_=(n,e,t)=>{var r=e||n&&n.parentNode;n&&r&&setTimeout(()=>{if(n.isConnected&&r.isConnected){var s=l_(r),o=l_(n),u=o.height,d=o.left,f=o.top,h=o.width,_=d-s.left,m=f-s.top;t(_,m,h,u,d,f)}},0)},GT={A:!0,BODY:!0,INPUT:!0,SELECT:!0,TEXTAREA:!0},bc={blur(n){try{n.blur()}catch{}},focus(n){try{var e=n.nodeName;n.getAttribute("tabIndex")==null&&n.isContentEditable!==!0&&GT[e]==null&&n.setAttribute("tabIndex","-1"),n.focus()}catch{}},measure(n,e){u_(n,null,e)},measureInWindow(n,e){n&&setTimeout(()=>{var t=op(n),r=t.height,s=t.left,o=t.top,u=t.width;e(s,o,u,r)},0)},measureLayout(n,e,t,r){u_(n,e,r)},updateView(n,e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var r=e[t];switch(t){case"style":{HT(n,r);break}case"class":case"className":{n.setAttribute("class",r);break}case"text":case"value":n.value=r;break;default:n.setAttribute(t,r)}}},configureNextLayoutAnimation(n,e){e()},setLayoutAnimationEnabledExperimental(){}},lp="__reactLayoutHandler",eh=null;function VT(){return yi&&typeof window.ResizeObserver<"u"&&eh==null&&(eh=new window.ResizeObserver(function(n){n.forEach(e=>{var t=e.target,r=t[lp];typeof r=="function"&&bc.measure(t,(s,o,u,d,f,h)=>{var _={nativeEvent:{layout:{x:s,y:o,width:u,height:d,left:f,top:h}},timeStamp:Date.now()};Object.defineProperty(_.nativeEvent,"target",{enumerable:!0,get:()=>e.target}),r(_)})})})),eh}function wS(n,e){var t=VT();kc(()=>{var r=n.current;r!=null&&(r[lp]=e)},[n,e]),kc(()=>{var r=n.current;return r!=null&&t!=null&&(typeof r[lp]=="function"?t.observe(r):t.unobserve(r)),()=>{r!=null&&t!=null&&t.unobserve(r)}},[n,t])}function WT(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(s){e.forEach(o=>{if(o!=null){if(typeof o=="function"){o(s);return}if(typeof o=="object"){o.current=s;return}console.error("mergeRefs cannot handle Refs of type boolean, number or string, received ref "+String(o))}})}}function pm(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return at.useMemo(()=>WT(...e),[...e])}var c_=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():Object.freeze({});function up(n){var e=at.useRef(c_);return e.current===c_&&(e.current=n()),e.current}function TS(n){n.pointerEvents,n.style;var e=up(()=>t=>{t!=null&&(t.measure=r=>bc.measure(t,r),t.measureLayout=(r,s,o)=>bc.measureLayout(t,r,o,s),t.measureInWindow=r=>bc.measureInWindow(t,r))});return e}var d_=()=>{},$T={},XT=[];function f_(n){return n>20?n%20:n}function RS(n,e){var t,r=!1,s,o,u=n.changedTouches,d=n.type,f=n.metaKey===!0,h=n.shiftKey===!0,_=u&&u[0].force||0,m=f_(u&&u[0].identifier||0),v=u&&u[0].clientX||n.clientX,x=u&&u[0].clientY||n.clientY,E=u&&u[0].pageX||n.pageX,T=u&&u[0].pageY||n.pageY,y=typeof n.preventDefault=="function"?n.preventDefault.bind(n):d_,S=n.timeStamp;function w(b){return Array.prototype.slice.call(b).map(P=>({force:P.force,identifier:f_(P.identifier),get locationX(){return N(P.clientX)},get locationY(){return I(P.clientY)},pageX:P.pageX,pageY:P.pageY,target:P.target,timestamp:S}))}if(u!=null)s=w(u),o=w(n.touches);else{var D=[{force:_,identifier:m,get locationX(){return N(v)},get locationY(){return I(x)},pageX:E,pageY:T,target:n.target,timestamp:S}];s=D,o=d==="mouseup"||d==="dragstart"?XT:D}var L={bubbles:!0,cancelable:!0,currentTarget:null,defaultPrevented:n.defaultPrevented,dispatchConfig:$T,eventPhase:n.eventPhase,isDefaultPrevented(){return n.defaultPrevented},isPropagationStopped(){return r},isTrusted:n.isTrusted,nativeEvent:{altKey:!1,ctrlKey:!1,metaKey:f,shiftKey:h,changedTouches:s,force:_,identifier:m,get locationX(){return N(v)},get locationY(){return I(x)},pageX:E,pageY:T,target:n.target,timestamp:S,touches:o,type:d},persist:d_,preventDefault:y,stopPropagation(){r=!0},target:n.target,timeStamp:S,touchHistory:e.touchHistory};function N(b){if(t=t||op(L.currentTarget),t)return b-t.left}function I(b){if(t=t||op(L.currentTarget),t)return b-t.top}return L}var qT="mousedown",YT="mousemove",KT="mouseup",ZT="dragstart",jT="touchstart",JT="touchmove",QT="touchend",eR="touchcancel",tR="scroll",nR="select",iR="selectionchange";function AS(n){return n===jT||n===qT}function CS(n){return n===JT||n===YT}function PS(n){return n===QT||n===KT||LS(n)}function LS(n){return n===eR||n===ZT}function rR(n){return n===tR}function aR(n){return n===nR||n===iR}function sR(){var n=window.getSelection(),e=n.toString(),t=n.anchorNode,r=n.focusNode,s=t&&t.nodeType===window.Node.TEXT_NODE||r&&r.nodeType===window.Node.TEXT_NODE;return e.length>=1&&e!==`
`&&s}var DS="__reactResponderId";function oR(n){if(n.type==="selectionchange"){var e=window.getSelection().anchorNode;return h_(e)}else{var t=n.composedPath!=null?n.composedPath():h_(n.target);return t}}function h_(n){for(var e=[];n!=null&&n!==document.body;)e.push(n),n=n.parentNode;return e}function lR(n){return n!=null?n[DS]:null}function uR(n,e){n!=null&&(n[DS]=e)}function cR(n){for(var e=[],t=[],r=oR(n),s=0;s<r.length;s++){var o=r[s],u=lR(o);u!=null&&(e.push(u),t.push(o))}return{idPath:e,nodePath:t}}function dR(n,e){var t=n.length,r=e.length;if(t===0||r===0||n[t-1]!==e[r-1])return null;var s=n[0],o=0,u=e[0],d=0;t-r>0&&(o=t-r,s=n[o],t=r),r-t>0&&(d=r-t,u=e[d],r=t);for(var f=t;f--;){if(s===u)return s;s=n[o++],u=e[d++]}return null}function fR(n,e){if(!e||e.length===0)return!1;for(var t=0;t<e.length;t++){var r=e[t].target;if(r!=null&&n.contains(r))return!0}return!1}function hR(n){return n.type==="selectionchange"?sR():n.type==="select"}function pR(n){var e=n.altKey,t=n.button,r=n.buttons,s=n.ctrlKey,o=n.type,u=o==="touchstart"||o==="touchmove",d=o==="mousedown"&&(t===0||r===1),f=o==="mousemove"&&r===1,h=e===!1&&s===!1;return!!(u||d&&h||f&&h)}var p_=20;function Di(n){return n.timeStamp||n.timestamp}function mR(n){return{touchActive:!0,startPageX:n.pageX,startPageY:n.pageY,startTimeStamp:Di(n),currentPageX:n.pageX,currentPageY:n.pageY,currentTimeStamp:Di(n),previousPageX:n.pageX,previousPageY:n.pageY,previousTimeStamp:Di(n)}}function gR(n,e){n.touchActive=!0,n.startPageX=e.pageX,n.startPageY=e.pageY,n.startTimeStamp=Di(e),n.currentPageX=e.pageX,n.currentPageY=e.pageY,n.currentTimeStamp=Di(e),n.previousPageX=e.pageX,n.previousPageY=e.pageY,n.previousTimeStamp=Di(e)}function mm(n){var e=n.identifier;return e==null&&console.error("Touch object is missing identifier."),e}function vR(n,e){var t=mm(n),r=e.touchBank[t];r?gR(r,n):e.touchBank[t]=mR(n),e.mostRecentTimeStamp=Di(n)}function _R(n,e){var t=e.touchBank[mm(n)];t?(t.touchActive=!0,t.previousPageX=t.currentPageX,t.previousPageY=t.currentPageY,t.previousTimeStamp=t.currentTimeStamp,t.currentPageX=n.pageX,t.currentPageY=n.pageY,t.currentTimeStamp=Di(n),e.mostRecentTimeStamp=Di(n)):console.warn(`Cannot record touch move without a touch start.
`,"Touch Move: "+IS(n)+`
`,"Touch Bank: "+NS(e))}function yR(n,e){var t=e.touchBank[mm(n)];t?(t.touchActive=!1,t.previousPageX=t.currentPageX,t.previousPageY=t.currentPageY,t.previousTimeStamp=t.currentTimeStamp,t.currentPageX=n.pageX,t.currentPageY=n.pageY,t.currentTimeStamp=Di(n),e.mostRecentTimeStamp=Di(n)):console.warn(`Cannot record touch end without a touch start.
`,"Touch End: "+IS(n)+`
`,"Touch Bank: "+NS(e))}function IS(n){return JSON.stringify({identifier:n.identifier,pageX:n.pageX,pageY:n.pageY,timestamp:Di(n)})}function NS(n){var e=n.touchBank,t=JSON.stringify(e.slice(0,p_));return e.length>p_&&(t+=" (original size: "+e.length+")"),t}class SR{constructor(){this._touchHistory={touchBank:[],numberActiveTouches:0,indexOfSingleActiveTouch:-1,mostRecentTimeStamp:0}}recordTouchTrack(e,t){var r=this._touchHistory;if(CS(e))t.changedTouches.forEach(d=>_R(d,r));else if(AS(e))t.changedTouches.forEach(d=>vR(d,r)),r.numberActiveTouches=t.touches.length,r.numberActiveTouches===1&&(r.indexOfSingleActiveTouch=t.touches[0].identifier);else if(PS(e)&&(t.changedTouches.forEach(d=>yR(d,r)),r.numberActiveTouches=t.touches.length,r.numberActiveTouches===1))for(var s=r.touchBank,o=0;o<s.length;o++){var u=s[o];if(u!=null&&u.touchActive){r.indexOfSingleActiveTouch=o;break}}}get touchHistory(){return this._touchHistory}}var xR={},m_=["onStartShouldSetResponderCapture","onStartShouldSetResponder",{bubbles:!0}],g_=["onMoveShouldSetResponderCapture","onMoveShouldSetResponder",{bubbles:!0}],MR=["onScrollShouldSetResponderCapture","onScrollShouldSetResponder",{bubbles:!1}],ER={touchstart:m_,mousedown:m_,touchmove:g_,mousemove:g_,scroll:MR},cp={id:null,idPath:null,node:null},Bc=new Map,xa=!1,hr=0,mr={id:null,node:null,idPath:null},dp=new SR;function Sl(n){mr=n}function xl(n){var e=Bc.get(n);return e??xR}function th(n){var e=n.type,t=n.target;if(e==="touchstart"&&(xa=!0),(e==="touchmove"||hr>1)&&(xa=!1),!(e==="mousedown"&&xa||e==="mousemove"&&xa||e==="mousemove"&&hr<1)){if(xa&&e==="mouseup"){hr===0&&(xa=!1);return}var r=AS(e)&&pR(n),s=CS(e),o=PS(e),u=rR(e),d=aR(e),f=RS(n,dp);(r||s||o)&&(n.touches?hr=n.touches.length:r?hr=1:o&&(hr=0),dp.recordTouchTrack(e,f.nativeEvent));var h=cR(n),_=!1,m;if(r||s||u&&hr>0){var v=mr.idPath,x=h.idPath;if(v!=null&&x!=null){var E=dR(v,x);if(E!=null){var T=x.indexOf(E),y=T+(E===mr.id?1:0);h={idPath:x.slice(y),nodePath:h.nodePath.slice(y)}}else h=null}h!=null&&(m=bR(h,n,f),m!=null&&(wR(f,m),_=!0))}if(mr.id!=null&&mr.node!=null){var S=mr,w=S.id,D=S.node,L=xl(w),N=L.onResponderStart,I=L.onResponderMove,b=L.onResponderEnd,P=L.onResponderRelease,k=L.onResponderTerminate,F=L.onResponderTerminationRequest;if(f.bubbles=!1,f.cancelable=!1,f.currentTarget=D,r)N!=null&&(f.dispatchConfig.registrationName="onResponderStart",N(f));else if(s)I!=null&&(f.dispatchConfig.registrationName="onResponderMove",I(f));else{var G=LS(e)||e==="contextmenu"||e==="blur"&&t===window||e==="blur"&&t.contains(D)&&n.relatedTarget!==D||u&&hr===0||u&&t.contains(D)&&t!==D||d&&hR(n),K=o&&!G&&!fR(D,n.touches);if(o&&b!=null&&(f.dispatchConfig.registrationName="onResponderEnd",b(f)),K&&(P!=null&&(f.dispatchConfig.registrationName="onResponderRelease",P(f)),Sl(cp)),G){var Y=!0;(e==="contextmenu"||e==="scroll"||e==="selectionchange")&&(_?Y=!1:F!=null&&(f.dispatchConfig.registrationName="onResponderTerminationRequest",F(f)===!1&&(Y=!1))),Y&&(k!=null&&(f.dispatchConfig.registrationName="onResponderTerminate",k(f)),Sl(cp),xa=!1,hr=0)}}}}}function bR(n,e,t){var r=ER[e.type];if(r!=null){for(var s=n.idPath,o=n.nodePath,u=r[0],d=r[1],f=r[2].bubbles,h=function(I,b,P){var k=xl(I),F=k[P];if(F!=null&&(t.currentTarget=b,F(t)===!0)){var G=s.slice(s.indexOf(I));return{id:I,node:b,idPath:G}}},_=s.length-1;_>=0;_--){var m=s[_],v=o[_],x=h(m,v,u);if(x!=null)return x;if(t.isPropagationStopped()===!0)return}if(f)for(var E=0;E<s.length;E++){var T=s[E],y=o[E],S=h(T,y,d);if(S!=null)return S;if(t.isPropagationStopped()===!0)return}else{var w=s[0],D=o[0],L=e.target;if(L===D)return h(w,D,d)}}}function wR(n,e){var t=mr,r=t.id,s=t.node,o=e.id,u=e.node,d=xl(o),f=d.onResponderGrant,h=d.onResponderReject;if(n.bubbles=!1,n.cancelable=!1,n.currentTarget=u,r==null)f!=null&&(n.currentTarget=u,n.dispatchConfig.registrationName="onResponderGrant",f(n)),Sl(e);else{var _=xl(r),m=_.onResponderTerminate,v=_.onResponderTerminationRequest,x=!0;v!=null&&(n.currentTarget=s,n.dispatchConfig.registrationName="onResponderTerminationRequest",v(n)===!1&&(x=!1)),x?(m!=null&&(n.currentTarget=s,n.dispatchConfig.registrationName="onResponderTerminate",m(n)),f!=null&&(n.currentTarget=u,n.dispatchConfig.registrationName="onResponderGrant",f(n)),Sl(e)):h!=null&&(n.currentTarget=u,n.dispatchConfig.registrationName="onResponderReject",h(n))}}var TR=["blur","scroll"],RR=["mousedown","mousemove","mouseup","dragstart","touchstart","touchmove","touchend","touchcancel","contextmenu","select","selectionchange"];function AR(){yi&&window.__reactResponderSystemActive==null&&(window.addEventListener("blur",th),RR.forEach(n=>{document.addEventListener(n,th)}),TR.forEach(n=>{document.addEventListener(n,th,!0)}),window.__reactResponderSystemActive=!0)}function CR(n,e,t){uR(e,n),Bc.set(n,t)}function v_(n){mr.id===n&&PR(),Bc.has(n)&&Bc.delete(n)}function PR(){var n=mr,e=n.id,t=n.node;if(e!=null&&t!=null){var r=xl(e),s=r.onResponderTerminate;if(s!=null){var o=RS({},dp);o.currentTarget=t,s(o)}Sl(cp)}xa=!1,hr=0}function LR(){return mr.node}var DR={},IR=0;function NR(n){var e=at.useRef(null);return e.current==null&&(e.current=n()),e.current}function OS(n,e){e===void 0&&(e=DR);var t=NR(()=>IR++),r=at.useRef(!1);at.useEffect(()=>(AR(),()=>{v_(t)}),[t]),at.useEffect(()=>{var s=e,o=s.onMoveShouldSetResponder,u=s.onMoveShouldSetResponderCapture,d=s.onScrollShouldSetResponder,f=s.onScrollShouldSetResponderCapture,h=s.onSelectionChangeShouldSetResponder,_=s.onSelectionChangeShouldSetResponderCapture,m=s.onStartShouldSetResponder,v=s.onStartShouldSetResponderCapture,x=o!=null||u!=null||d!=null||f!=null||h!=null||_!=null||m!=null||v!=null,E=n.current;x?(CR(t,E,e),r.current=!0):r.current&&(v_(t),r.current=!1)},[e,n,t]),at.useDebugValue({isResponder:n.current===LR()}),at.useDebugValue(e)}var OR=["hrefAttrs","onLayout","onMoveShouldSetResponder","onMoveShouldSetResponderCapture","onResponderEnd","onResponderGrant","onResponderMove","onResponderReject","onResponderRelease","onResponderStart","onResponderTerminate","onResponderTerminationRequest","onScrollShouldSetResponder","onScrollShouldSetResponderCapture","onSelectionChangeShouldSetResponder","onSelectionChangeShouldSetResponderCapture","onStartShouldSetResponder","onStartShouldSetResponderCapture"],UR=Object.assign({},gS,vS,_S,yS,SS,xS,MS,ES,{href:!0,lang:!0,onScroll:!0,onWheel:!0,pointerEvents:!0}),FR=n=>bS(n,UR),Ml=at.forwardRef((n,e)=>{var t=n.hrefAttrs,r=n.onLayout,s=n.onMoveShouldSetResponder,o=n.onMoveShouldSetResponderCapture,u=n.onResponderEnd,d=n.onResponderGrant,f=n.onResponderMove,h=n.onResponderReject,_=n.onResponderRelease,m=n.onResponderStart,v=n.onResponderTerminate,x=n.onResponderTerminationRequest,E=n.onScrollShouldSetResponder,T=n.onScrollShouldSetResponderCapture,y=n.onSelectionChangeShouldSetResponder,S=n.onSelectionChangeShouldSetResponderCapture,w=n.onStartShouldSetResponder,D=n.onStartShouldSetResponderCapture,L=ds(n,OR),N=at.useContext(Fc),I=at.useRef(null),b=hS(),P=b.direction;wS(I,r),OS(I,{onMoveShouldSetResponder:s,onMoveShouldSetResponderCapture:o,onResponderEnd:u,onResponderGrant:d,onResponderMove:f,onResponderReject:h,onResponderRelease:_,onResponderStart:m,onResponderTerminate:v,onResponderTerminationRequest:x,onScrollShouldSetResponder:E,onScrollShouldSetResponderCapture:T,onSelectionChangeShouldSetResponder:y,onSelectionChangeShouldSetResponderCapture:S,onStartShouldSetResponder:w,onStartShouldSetResponderCapture:D});var k="div",F=n.lang!=null?fm(n.lang):null,G=n.dir||F,K=G||P,Y=FR(L);if(Y.dir=G,Y.style=[__.view$raw,N&&__.inline,n.style],n.href!=null&&(k="a",t!=null)){var H=t.download,se=t.rel,ae=t.target;H!=null&&(Y.download=H),se!=null&&(Y.rel=se),typeof ae=="string"&&(Y.target=ae.charAt(0)!=="_"?"_"+ae:ae)}var ee=TS(Y),j=pm(I,ee,e);return Y.ref=j,hm(k,Y,{writingDirection:K})});Ml.displayName="View";var __=xr.create({view$raw:{alignItems:"stretch",backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",display:"flex",flexBasis:"auto",flexDirection:"column",flexShrink:0,listStyle:"none",margin:0,minHeight:0,minWidth:0,padding:0,position:"relative",textDecoration:"none",zIndex:0},inline:{display:"inline-flex"}}),kR=["aria-label","accessibilityLabel","blurRadius","defaultSource","draggable","onError","onLayout","onLoad","onLoadEnd","onLoadStart","pointerEvents","source","style"],BR="ERRORED",nh="LOADED",y_="LOADING",zR="IDLE",HR=0,GR=/^(data:image\/svg\+xml;utf8,)(.*)/;function VR(n,e){return n&&e!=null?at.createElement("svg",{style:{position:"absolute",height:0,visibility:"hidden",width:0}},at.createElement("defs",null,at.createElement("filter",{id:"tint-"+e,suppressHydrationWarning:!0},at.createElement("feFlood",{floodColor:""+n,key:n}),at.createElement("feComposite",{in2:"SourceAlpha",operator:"in"})))):null}function WR(n,e,t,r){var s=xr.flatten(n),o=s.filter,u=s.resizeMode,d=s.shadowOffset,f=s.tintColor;s.resizeMode,s.tintColor;var h=[],_=null;if(o&&h.push(o),e&&h.push("blur("+e+"px)"),d){var m=aS(s);m&&h.push("drop-shadow("+m+")")}return(r||f)&&t!=null&&h.push("url(#tint-"+t+")"),h.length>0&&(_=h.join(" ")),[u,_,f]}function $R(n){if(typeof n=="number"){var e=pS(n),t=e.height,r=e.width;return{height:t,width:r}}else if(n!=null&&!Array.isArray(n)&&typeof n=="object"){var s=n.height,o=n.width;return{height:s,width:o}}}function ih(n){var e=null;if(typeof n=="number"){var t=pS(n);if(t==null)throw new Error('Image: asset with ID "'+n+'" could not be found. Please check the image source or packager.');var r=t.scales[0];if(t.scales.length>1){var s=hl.get();r=t.scales.reduce((_,m)=>Math.abs(m-s)<Math.abs(_-s)?m:_)}var o=r!==1?"@"+r+"x":"";e=t?t.httpServerLocation+"/"+t.name+o+"."+t.type:""}else typeof n=="string"?e=n:n&&typeof n.uri=="string"&&(e=n.uri);if(e){var u=e.match(GR);if(u){var d=u[1],f=u[2],h=encodeURIComponent(f);return""+d+h}}return e}var US=at.forwardRef((n,e)=>{var t=n["aria-label"],r=n.accessibilityLabel,s=n.blurRadius,o=n.defaultSource,u=n.draggable,d=n.onError,f=n.onLayout,h=n.onLoad,_=n.onLoadEnd,m=n.onLoadStart,v=n.pointerEvents,x=n.source,E=n.style,T=ds(n,kR),y=t||r,S=at.useState(()=>{var Ee=ih(x);if(Ee!=null){var pe=vr.has(Ee);if(pe)return nh}return zR}),w=S[0],D=S[1],L=at.useState({}),N=L[0],I=L[1],b=at.useContext(Fc),P=at.useRef(null),k=at.useRef(HR++),F=at.useRef(null),G=w===nh||w===y_&&o==null,K=WR(E,s,k.current,n.tintColor),Y=K[0],H=K[1],se=K[2],ae=n.resizeMode||Y||"cover",ee=n.tintColor||se,j=G?x:o,$=ih(j),Z=$R(j),U=$?'url("'+$+'")':null,Q=te(),Te=$?hm("img",{alt:y||"",style:Ko.accessibilityImage$raw,draggable:u||!1,ref:P,src:$}):null;function te(){if(P.current!=null&&(ae==="center"||ae==="repeat")){var Ee=P.current,pe=Ee.naturalHeight,ke=Ee.naturalWidth,pt=N.height,et=N.width;if(pe&&ke&&pt&&et){var vt=Math.min(1,et/ke,pt/pe),St=Math.ceil(vt*ke),ut=Math.ceil(vt*pe);return St+"px "+ut+"px"}}}function ve(Ee){if(ae==="center"||ae==="repeat"||f){var pe=Ee.nativeEvent.layout;f&&f(Ee),I(pe)}}var _e=ih(x);return at.useEffect(()=>{Ee(),_e!=null&&(D(y_),m&&m(),F.current=vr.load(_e,function(ke){D(nh),h&&h(ke),_&&_()},function(){D(BR),d&&d({nativeEvent:{error:"Failed to load resource "+_e}}),_&&_()}));function Ee(){F.current!=null&&(vr.abort(F.current),F.current=null)}return Ee},[_e,F,D,d,h,_,m]),at.createElement(Ml,Nc({},T,{"aria-label":y,onLayout:ve,pointerEvents:v,ref:e,style:[Ko.root,b&&Ko.inline,Z,E,Ko.undo,{boxShadow:null}]}),at.createElement(Ml,{style:[Ko.image,XR[ae],{backgroundImage:U,filter:H},Q!=null&&{backgroundSize:Q}],suppressHydrationWarning:!0}),Te,VR(ee,k.current))});US.displayName="Image";var jc=US;jc.getSize=function(n,e,t){vr.getSize(n,e,t)};jc.prefetch=function(n){return vr.prefetch(n)};jc.queryCache=function(n){return vr.queryCache(n)};var Ko=xr.create({root:{flexBasis:"auto",overflow:"hidden",zIndex:0},inline:{display:"inline-flex"},undo:{blurRadius:null,shadowColor:null,shadowOpacity:null,shadowOffset:null,shadowRadius:null,tintColor:null,overlayColor:null,resizeMode:null},image:Pi(Pi({},xr.absoluteFillObject),{},{backgroundColor:"transparent",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100%",width:"100%",zIndex:-1}),accessibilityImage$raw:Pi(Pi({},xr.absoluteFillObject),{},{height:"100%",opacity:0,width:"100%",zIndex:-1})}),XR=xr.create({center:{backgroundSize:"auto"},contain:{backgroundSize:"contain"},cover:{backgroundSize:"cover"},none:{backgroundPosition:"0",backgroundSize:"auto"},repeat:{backgroundPosition:"0",backgroundRepeat:"repeat",backgroundSize:"auto"},stretch:{backgroundSize:"100% 100%"}}),qR=()=>{};function YR(){var n=!1;if(yi)try{var e={};Object.defineProperty(e,"passive",{get(){return n=!0,!1}}),window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}return n}var KR=YR();function ZR(n){return n==null?!1:KR?n:!!n.capture}function jR(){return this.cancelBubble}function JR(){return this.defaultPrevented}function QR(n){return n.nativeEvent=n,n.persist=qR,n.isDefaultPrevented=JR,n.isPropagationStopped=jR,n}function kn(n,e,t,r){var s=ZR(r),o=u=>t(QR(u));return n.addEventListener(e,o,s),function(){n!=null&&n.removeEventListener(e,o,s)}}var e1=()=>typeof window<"u"&&window.PointerEvent!=null,Yi="keyboard",Jn="keyboard",ol,ll,ul=!1,t1=new Set,ml="keyboard",Zo="mouse",rh="touch",n1="blur",FS="contextmenu",i1="focus",r1="keydown",kS="mousedown",BS="mousemove",zS="mouseup",HS="pointerdown",GS="pointermove",VS="scroll",WS="selectionchange",$S="touchcancel",XS="touchmove",qS="touchstart",a1="visibilitychange",S_={passive:!0},ci={capture:!0,passive:!0};function YS(){(ol!=null||ll!=null)&&(ol!=null&&(Jn=ol,ol=null),ll!=null&&(Yi=ll,ll=null),ba())}function s1(){ol=Jn,ll=Yi,Yi=ml,Jn=ml,ba(),ul=!1}function o1(){YS()}function l1(n){n.metaKey||n.altKey||n.ctrlKey||Jn!==ml&&(Jn=ml,Yi=ml,ba())}function u1(){document.visibilityState!=="hidden"&&YS()}function Vi(n){var e=n.type;if(e1()){if(e===HS){Yi!==n.pointerType&&(Jn=n.pointerType,Yi=n.pointerType,ba());return}if(e===GS){Jn!==n.pointerType&&(Jn=n.pointerType,ba());return}}else{if(ul||(e===kS&&Yi!==Zo&&(Jn=Zo,Yi=Zo,ba()),e===BS&&Jn!==Zo&&(Jn=Zo,ba())),e===qS){ul=!0,n.touches&&n.touches.length>1&&(ul=!1),Yi!==rh&&(Jn=rh,Yi=rh,ba());return}(e===FS||e===zS||e===WS||e===VS||e===$S||e===XS)&&(ul=!1)}}yi&&(kn(window,n1,s1,S_),kn(window,i1,o1,S_),kn(document,r1,l1,ci),kn(document,a1,u1,ci),kn(document,HS,Vi,ci),kn(document,GS,Vi,ci),kn(document,FS,Vi,ci),kn(document,kS,Vi,ci),kn(document,BS,Vi,ci),kn(document,zS,Vi,ci),kn(document,$S,Vi,ci),kn(document,XS,Vi,ci),kn(document,qS,Vi,ci),kn(document,WS,Vi,ci),kn(document,VS,Vi,ci));function ba(){var n={activeModality:Yi,modality:Jn};t1.forEach(e=>{e(n)})}function c1(){return Jn}function jo(n,e){var t=up(()=>new Map),r=up(()=>(s,o)=>{var u=t.get(s);u!=null&&u(),o==null&&(t.delete(s),o=()=>{});var d=kn(s,n,o,e);return t.set(s,d),d});return kc(()=>()=>{t.forEach(s=>{s()}),t.clear()},[t]),r}var d1={},Jo={passive:!0},x_="react-gui:hover:lock",M_="react-gui:hover:unlock",f1=()=>typeof window<"u"&&window.PointerEvent!=null;function E_(n,e,t){var r=document.createEvent("CustomEvent"),s=d1,o=s.bubbles,u=o===void 0?!0:o,d=s.cancelable,f=d===void 0?!0:d,h=s.detail;r.initCustomEvent(e,u,f,h),n.dispatchEvent(r)}function ah(n){var e=n.pointerType;return e??c1()}function h1(n,e){var t=e.contain,r=e.disabled,s=e.onHoverStart,o=e.onHoverChange,u=e.onHoverUpdate,d=e.onHoverEnd,f=f1(),h=jo(f?"pointermove":"mousemove",Jo),_=jo(f?"pointerenter":"mouseenter",Jo),m=jo(f?"pointerleave":"mouseleave",Jo),v=jo(x_,Jo),x=jo(M_,Jo);kc(()=>{var E=n.current;if(E!==null){var T=function(N){d!=null&&d(N),o!=null&&o(!1),h(E,null),m(E,null)},y=function(N){var I=n.current;I!=null&&ah(N)!=="touch"&&(t&&E_(I,M_),T(N))},S=function(N){ah(N)!=="touch"&&u!=null&&(N.x==null&&(N.x=N.clientX),N.y==null&&(N.y=N.clientY),u(N))},w=function(N){s!=null&&s(N),o!=null&&o(!0),u!=null&&h(E,r?null:S),m(E,r?null:y)},D=function(N){var I=n.current;if(I!=null&&ah(N)!=="touch"){t&&E_(I,x_),w(N);var b=function(F){F.target!==I&&T(N)},P=function(F){F.target!==I&&w(N)};v(I,r?null:b),x(I,r?null:P)}};_(E,r?null:D)}},[_,h,m,v,x,t,r,s,o,u,d,n])}var b_="DELAY",qi="ERROR",w_="LONG_PRESS_DETECTED",Vn="NOT_RESPONDER",so="RESPONDER_ACTIVE_LONG_PRESS_START",Jc="RESPONDER_ACTIVE_PRESS_START",fp="RESPONDER_INACTIVE_PRESS_START",p1="RESPONDER_GRANT",wc="RESPONDER_RELEASE",KS="RESPONDER_TERMINATED",T_=Object.freeze({NOT_RESPONDER:{DELAY:qi,RESPONDER_GRANT:fp,RESPONDER_RELEASE:qi,RESPONDER_TERMINATED:qi,LONG_PRESS_DETECTED:qi},RESPONDER_INACTIVE_PRESS_START:{DELAY:Jc,RESPONDER_GRANT:qi,RESPONDER_RELEASE:Vn,RESPONDER_TERMINATED:Vn,LONG_PRESS_DETECTED:qi},RESPONDER_ACTIVE_PRESS_START:{DELAY:qi,RESPONDER_GRANT:qi,RESPONDER_RELEASE:Vn,RESPONDER_TERMINATED:Vn,LONG_PRESS_DETECTED:so},RESPONDER_ACTIVE_LONG_PRESS_START:{DELAY:qi,RESPONDER_GRANT:qi,RESPONDER_RELEASE:Vn,RESPONDER_TERMINATED:Vn,LONG_PRESS_DETECTED:so},ERROR:{DELAY:Vn,RESPONDER_GRANT:fp,RESPONDER_RELEASE:Vn,RESPONDER_TERMINATED:Vn,LONG_PRESS_DETECTED:Vn}}),ZS=n=>n.getAttribute("role"),hp=n=>n.tagName.toLowerCase(),R_=n=>n===Jc||n===so,Tc=n=>ZS(n)==="button",A_=n=>n===fp||n===Jc||n===so,m1=n=>n===KS||n===wc,C_=n=>{var e=n.key,t=n.target,r=e===" "||e==="Spacebar",s=hp(t)==="button"||Tc(t);return e==="Enter"||r&&s},g1=450,v1=50;class _1{constructor(e){this._eventHandlers=null,this._isPointerTouch=!1,this._longPressDelayTimeout=null,this._longPressDispatched=!1,this._pressDelayTimeout=null,this._pressOutDelayTimeout=null,this._touchState=Vn,this._responderElement=null,this.configure(e)}configure(e){this._config=e}reset(){this._cancelLongPressDelayTimeout(),this._cancelPressDelayTimeout(),this._cancelPressOutDelayTimeout()}getEventHandlers(){return this._eventHandlers==null&&(this._eventHandlers=this._createEventHandlers()),this._eventHandlers}_createEventHandlers(){var e=(s,o)=>{s.persist(),this._cancelPressOutDelayTimeout(),this._longPressDispatched=!1,this._selectionTerminated=!1,this._touchState=Vn,this._isPointerTouch=s.nativeEvent.type==="touchstart",this._receiveSignal(p1,s);var u=sh(this._config.delayPressStart,0,v1);o!==!1&&u>0?this._pressDelayTimeout=setTimeout(()=>{this._receiveSignal(b_,s)},u):this._receiveSignal(b_,s);var d=sh(this._config.delayLongPress,10,g1);this._longPressDelayTimeout=setTimeout(()=>{this._handleLongPress(s)},d+u)},t=s=>{this._receiveSignal(wc,s)},r=s=>{var o=this._config.onPress,u=s.target;if(this._touchState!==Vn&&C_(s)){t(s),document.removeEventListener("keyup",r);var d=u.getAttribute("role"),f=hp(u),h=d==="link"||f==="a"||f==="button"||f==="input"||f==="select"||f==="textarea",_=this._responderElement===u;o!=null&&!h&&_&&o(s),this._responderElement=null}};return{onStartShouldSetResponder:s=>{var o=this._config.disabled;return o&&Tc(s.currentTarget)&&s.stopPropagation(),o==null?!0:!o},onKeyDown:s=>{var o=this._config.disabled,u=s.key,d=s.target;if(!o&&C_(s)){this._touchState===Vn&&(e(s,!1),this._responderElement=d,document.addEventListener("keyup",r));var f=u===" "||u==="Spacebar",h=ZS(d),_=h==="button"||h==="menuitem";f&&_&&hp(d)!=="button"&&s.preventDefault(),s.stopPropagation()}},onResponderGrant:s=>e(s),onResponderMove:s=>{this._config.onPressMove!=null&&this._config.onPressMove(s);var o=P_(s);if(this._touchActivatePosition!=null){var u=this._touchActivatePosition.pageX-o.pageX,d=this._touchActivatePosition.pageY-o.pageY;Math.hypot(u,d)>10&&this._cancelLongPressDelayTimeout()}},onResponderRelease:s=>t(s),onResponderTerminate:s=>{s.nativeEvent.type==="selectionchange"&&(this._selectionTerminated=!0),this._receiveSignal(KS,s)},onResponderTerminationRequest:s=>{var o=this._config,u=o.cancelable,d=o.disabled,f=o.onLongPress;return!d&&f!=null&&this._isPointerTouch&&s.nativeEvent.type==="contextmenu"?!1:u??!0},onClick:s=>{var o=this._config,u=o.disabled,d=o.onPress;u?Tc(s.currentTarget)&&s.stopPropagation():(s.stopPropagation(),this._longPressDispatched||this._selectionTerminated?s.preventDefault():d!=null&&s.altKey===!1&&d(s))},onContextMenu:s=>{var o=this._config,u=o.disabled,d=o.onLongPress;u?Tc(s.currentTarget)&&s.stopPropagation():d!=null&&this._isPointerTouch&&!s.defaultPrevented&&(s.preventDefault(),s.stopPropagation())}}}_receiveSignal(e,t){var r=this._touchState,s=null;T_[r]!=null&&(s=T_[r][e]),!(this._touchState===Vn&&e===wc)&&(s==null||s===qi?console.error("PressResponder: Invalid signal "+e+" for state "+r+" on responder"):r!==s&&(this._performTransitionSideEffects(r,s,e,t),this._touchState=s))}_performTransitionSideEffects(e,t,r,s){if(m1(r)&&(setTimeout(()=>{this._isPointerTouch=!1},0),this._touchActivatePosition=null,this._cancelLongPressDelayTimeout()),A_(e)&&r===w_){var o=this._config.onLongPress;o!=null&&s.nativeEvent.key==null&&(o(s),this._longPressDispatched=!0)}var u=R_(e),d=R_(t);if(!u&&d?this._activate(s):u&&!d&&this._deactivate(s),A_(e)&&r===wc){var f=this._config,h=f.onLongPress,_=f.onPress;if(_!=null){var m=h!=null&&e===so;m||!d&&!u&&(this._activate(s),this._deactivate(s))}}this._cancelPressDelayTimeout()}_activate(e){var t=this._config,r=t.onPressChange,s=t.onPressStart,o=P_(e);this._touchActivatePosition={pageX:o.pageX,pageY:o.pageY},s!=null&&s(e),r!=null&&r(!0)}_deactivate(e){var t=this._config,r=t.onPressChange,s=t.onPressEnd;function o(){s!=null&&s(e),r!=null&&r(!1)}var u=sh(this._config.delayPressEnd);u>0?this._pressOutDelayTimeout=setTimeout(()=>{o()},u):o()}_handleLongPress(e){(this._touchState===Jc||this._touchState===so)&&this._receiveSignal(w_,e)}_cancelLongPressDelayTimeout(){this._longPressDelayTimeout!=null&&(clearTimeout(this._longPressDelayTimeout),this._longPressDelayTimeout=null)}_cancelPressDelayTimeout(){this._pressDelayTimeout!=null&&(clearTimeout(this._pressDelayTimeout),this._pressDelayTimeout=null)}_cancelPressOutDelayTimeout(){this._pressOutDelayTimeout!=null&&(clearTimeout(this._pressOutDelayTimeout),this._pressOutDelayTimeout=null)}}function sh(n,e,t){return e===void 0&&(e=0),t===void 0&&(t=0),Math.max(e,n??t)}function P_(n){var e=n.nativeEvent,t=e.changedTouches,r=e.touches;return r!=null&&r.length>0?r[0]:t!=null&&t.length>0?t[0]:n.nativeEvent}function y1(n,e){var t=at.useRef(null);t.current==null&&(t.current=new _1(e));var r=t.current;return at.useEffect(()=>{r.configure(e)},[e,r]),at.useEffect(()=>()=>{r.reset()},[r]),at.useDebugValue(e),r.getEventHandlers()}var S1=["children","delayLongPress","delayPressIn","delayPressOut","disabled","onBlur","onContextMenu","onFocus","onHoverIn","onHoverOut","onKeyDown","onLongPress","onPress","onPressMove","onPressIn","onPressOut","style","tabIndex","testOnly_hovered","testOnly_pressed"];function x1(n,e){var t=n.children,r=n.delayLongPress,s=n.delayPressIn,o=n.delayPressOut,u=n.disabled,d=n.onBlur,f=n.onContextMenu,h=n.onFocus,_=n.onHoverIn,m=n.onHoverOut,v=n.onKeyDown,x=n.onLongPress,E=n.onPress,T=n.onPressMove,y=n.onPressIn,S=n.onPressOut,w=n.style,D=n.tabIndex,L=n.testOnly_hovered,N=n.testOnly_pressed,I=ds(n,S1),b=oh(L===!0),P=b[0],k=b[1],F=oh(!1),G=F[0],K=F[1],Y=oh(N===!0),H=Y[0],se=Y[1],ae=at.useRef(null),ee=pm(e,ae),j=at.useMemo(()=>({delayLongPress:r,delayPressStart:s,delayPressEnd:o,disabled:u,onLongPress:x,onPress:E,onPressChange:se,onPressStart:y,onPressMove:T,onPressEnd:S}),[r,s,o,u,x,E,y,T,S,se]),$=y1(ae,j),Z=$.onContextMenu,U=$.onKeyDown;h1(ae,{contain:!0,disabled:u,onHoverChange:k,onHoverStart:_,onHoverEnd:m});var Q={hovered:P,focused:G,pressed:H},Te=at.useCallback(pe=>{pe.nativeEvent.target===ae.current&&(K(!1),d!=null&&d(pe))},[ae,K,d]),te=at.useCallback(pe=>{pe.nativeEvent.target===ae.current&&(K(!0),h!=null&&h(pe))},[ae,K,h]),ve=at.useCallback(pe=>{Z!=null&&Z(pe),f!=null&&f(pe)},[f,Z]),_e=at.useCallback(pe=>{U!=null&&U(pe),v!=null&&v(pe)},[v,U]),Ee;return D!==void 0?Ee=D:Ee=u?-1:0,at.createElement(Ml,Nc({},I,$,{"aria-disabled":u,onBlur:Te,onContextMenu:ve,onFocus:te,onKeyDown:_e,ref:ee,style:[u?L_.disabled:L_.active,typeof w=="function"?w(Q):w],tabIndex:Ee}),typeof t=="function"?t(Q):t)}function oh(n){var e=at.useState(!1),t=e[0],r=e[1];return[t||n,r]}var L_=xr.create({active:{cursor:"pointer",touchAction:"manipulation"},disabled:{pointerEvents:"box-none"}}),jS=at.memo(at.forwardRef(x1));jS.displayName="Pressable";var M1=["hrefAttrs","numberOfLines","onClick","onLayout","onPress","onMoveShouldSetResponder","onMoveShouldSetResponderCapture","onResponderEnd","onResponderGrant","onResponderMove","onResponderReject","onResponderRelease","onResponderStart","onResponderTerminate","onResponderTerminationRequest","onScrollShouldSetResponder","onScrollShouldSetResponderCapture","onSelectionChangeShouldSetResponder","onSelectionChangeShouldSetResponderCapture","onStartShouldSetResponder","onStartShouldSetResponderCapture","selectable"],E1=Object.assign({},gS,vS,_S,yS,SS,xS,MS,ES,{href:!0,lang:!0,pointerEvents:!0}),b1=n=>bS(n,E1),JS=at.forwardRef((n,e)=>{var t=n.hrefAttrs,r=n.numberOfLines,s=n.onClick,o=n.onLayout,u=n.onPress,d=n.onMoveShouldSetResponder,f=n.onMoveShouldSetResponderCapture,h=n.onResponderEnd,_=n.onResponderGrant,m=n.onResponderMove,v=n.onResponderReject,x=n.onResponderRelease,E=n.onResponderStart,T=n.onResponderTerminate,y=n.onResponderTerminationRequest,S=n.onScrollShouldSetResponder,w=n.onScrollShouldSetResponderCapture,D=n.onSelectionChangeShouldSetResponder,L=n.onSelectionChangeShouldSetResponderCapture,N=n.onStartShouldSetResponder,I=n.onStartShouldSetResponderCapture,b=n.selectable,P=ds(n,M1),k=at.useContext(Fc),F=at.useRef(null),G=hS(),K=G.direction;wS(F,o),OS(F,{onMoveShouldSetResponder:d,onMoveShouldSetResponderCapture:f,onResponderEnd:h,onResponderGrant:_,onResponderMove:m,onResponderReject:v,onResponderRelease:x,onResponderStart:E,onResponderTerminate:T,onResponderTerminationRequest:y,onScrollShouldSetResponder:S,onScrollShouldSetResponderCapture:w,onSelectionChangeShouldSetResponder:D,onSelectionChangeShouldSetResponderCapture:L,onStartShouldSetResponder:N,onStartShouldSetResponderCapture:I});var Y=at.useCallback(ve=>{s!=null?s(ve):u!=null&&(ve.stopPropagation(),u(ve))},[s,u]),H=k?"span":"div",se=n.lang!=null?fm(n.lang):null,ae=n.dir||se,ee=ae||K,j=b1(P);if(j.dir=ae,k||(j.dir=ae??"auto"),(s||u)&&(j.onClick=Y),j.style=[r!=null&&r>1&&{WebkitLineClamp:r},k===!0?Qa.textHasAncestor$raw:Qa.text$raw,r===1&&Qa.textOneLine,r!=null&&r>1&&Qa.textMultiLine,n.style,b===!0&&Qa.selectable,b===!1&&Qa.notSelectable,u&&Qa.pressable],n.href!=null&&(H="a",t!=null)){var $=t.download,Z=t.rel,U=t.target;$!=null&&(j.download=$),Z!=null&&(j.rel=Z),typeof U=="string"&&(j.target=U.charAt(0)!=="_"?"_"+U:U)}var Q=TS(j),Te=pm(F,Q,e);j.ref=Te;var te=hm(H,j,{writingDirection:ee});return k?te:at.createElement(Fc.Provider,{value:!0},te)});JS.displayName="Text";var D_={backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",color:"black",display:"inline",font:"14px System",listStyle:"none",margin:0,padding:0,position:"relative",textAlign:"start",textDecoration:"none",whiteSpace:"pre-wrap",wordWrap:"break-word"},Qa=xr.create({text$raw:D_,textHasAncestor$raw:Pi(Pi({},D_),{},{color:"inherit",font:"inherit",textAlign:"inherit",whiteSpace:"inherit"}),textOneLine:{maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",wordWrap:"normal"},textMultiLine:{display:"-webkit-box",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",WebkitBoxOrient:"vertical"},notSelectable:{userSelect:"none"},selectable:{userSelect:"text"},pressable:{cursor:"pointer"}});const pp=new Map,w1=new Set(["span","i","b","strong","small","em","label"]);function T1(n=""){const e=document.createElement("span").style;e.cssText=n;const t={};for(let r=0;r<e.length;r++){const s=e[r];if(s.startsWith("--"))continue;const o=s.replace(/-([a-z])/g,(d,f)=>f.toUpperCase()),u=e.getPropertyValue(s).trim();t[o]=/^-?\d+(?:\.\d+)?px$/.test(u)?Number.parseFloat(u):u}return t}function QS(n,e){const t={key:e};for(const r of n.attributes)if(r.name==="class")t.className=r.value;else if(r.name==="style")t.style=T1(r.value);else{if(r.name==="draggable"||r.name==="type"||r.name==="tabindex")continue;t[r.name]=r.value}return t}function R1(n){var r;const e=((r=n.className)==null?void 0:r.split(/\s+/).filter(Boolean))||[],t=Object.entries(n).filter(([s])=>s.startsWith("data-"));delete n.className;for(const[s]of t)delete n[s];return(e.length||t.length)&&(n.ref=s=>{if(s){e.length&&s.classList.add(...e);for(const[o,u]of t)s.setAttribute(o,u)}}),n}function ex(n,e="child"){if(n.nodeType===Node.TEXT_NODE)return n.textContent?n.textContent:null;if(n.nodeType!==Node.ELEMENT_NODE)return null;const t=n.tagName.toLowerCase(),r=R1(QS(n,e));if(t==="img")return r.source={uri:n.getAttribute("src")||""},n.hasAttribute("alt")&&(r.accessibilityLabel=n.getAttribute("alt")),delete r.src,delete r.alt,ao.createElement(jc,r);const s=n.querySelector("div, img, svg, button"),o=w1.has(t)&&!s?JS:Ml,u=Array.from(n.childNodes).map((d,f)=>ex(d,`${e}-${f}`));return ao.createElement(o,r,...u)}function A1(n){var h;const e=QS(n),t=((h=e.className)==null?void 0:h.split(/\s+/).filter(Boolean))||[],r=Object.entries(e).filter(([_])=>_.startsWith("data-")),s=n.getAttribute("style")||"",o=document.createElement("span");o.className="rn-control-root",o.style.cssText=s,n.replaceWith(o);const u=YE.createRoot(o);pp.set(o,u);const d=Array.from(n.childNodes).map((_,m)=>ex(_,`button-${m}`)),f=n.hasAttribute("disabled");delete e.style,delete e.disabled,delete e.className;for(const[_]of r)delete e[_];e.ref=_=>{if(_){t.length&&_.classList.add(...t);for(const[m,v]of r)_.setAttribute(m,v)}},e.role=e.role||"button",e.accessibilityRole=e.role,e.disabled=f,e.onPress=()=>{var _;return(_=o.firstElementChild)==null?void 0:_.dispatchEvent(new CustomEvent("rnpress",{bubbles:!0}))},KE.flushSync(()=>u.render(ao.createElement(jS,e,...d)))}function C1(n){for(const[e,t]of pp)(n===e||n.contains(e))&&(t.unmount(),pp.delete(e))}function tx(n){n.querySelectorAll("button").forEach(A1)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gm="187",P1=0,I_=1,L1=2,Rc=1,D1=2,cl=3,ss=0,ti=1,zr=2,no=0,gl=1,N_=2,O_=3,U_=4,I1=5,eo=100,N1=101,O1=102,U1=103,F1=104,k1=200,B1=201,z1=202,H1=203,nx=204,ix=205,G1=206,V1=207,W1=208,$1=209,X1=210,q1=211,Y1=212,K1=213,Z1=214,mp=0,gp=1,vp=2,El=3,_p=4,yp=5,Sp=6,xp=7,rx=0,j1=1,J1=2,Vr=0,ax=1,sx=2,ox=3,vm=4,lx=5,ux=6,cx=7,dx=300,oo=301,bl=302,lh=303,uh=304,Mp=1e3,Hr=1001,Ep=1002,An=1003,Q1=1004,Qu=1005,Qn=1006,ch=1007,Ta=1008,mi=1009,fx=1010,hx=1011,wl=1012,_m=1013,Er=1014,_r=1015,br=1016,ym=1017,Sm=1018,lo=1020,px=35902,mx=35899,gx=1021,vx=1022,yr=1023,Ca=1026,Ra=1027,_x=1028,xm=1029,os=1030,Mm=1031,Em=1033,Ac=33776,Cc=33777,Pc=33778,Lc=33779,bp=35840,wp=35841,Tp=35842,Rp=35843,Ap=36196,Cp=37492,Pp=37496,Lp=37488,Dp=37489,zc=37490,Ip=37491,Np=37808,Op=37809,Up=37810,Fp=37811,kp=37812,Bp=37813,zp=37814,Hp=37815,Gp=37816,Vp=37817,Wp=37818,$p=37819,Xp=37820,qp=37821,Yp=36492,Kp=36494,Zp=36495,jp=36283,Jp=36284,Hc=36285,Qp=36286,eA=3200,em=0,tA=1,wa="",hi="srgb",Gc="srgb-linear",Vc="linear",Ot="srgb",dh=7680,nA=519,iA=512,rA=513,aA=514,yx=515,sA=516,oA=517,Sx=518,xx=519,lA=35044,F_="300 es",ji=2e3,Tl=2001;function uA(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cA(){const n=Wc("canvas");return n.style.display="block",n}const k_={};function B_(...n){const e="THREE."+n.shift();console.log(e,...n)}function Mx(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function lt(...n){n=Mx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Pt(...n){n=Mx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Dc(...n){const e=n.join(" ");e in k_||(k_[e]=!0,lt(...n))}function dA(n,e,t){return new Promise(function(r,s){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:r()}}setTimeout(o,t)})}const fA={[mp]:mp,[vp]:Sp,[_p]:_p,[El]:yp,[gp]:gp,[Sp]:vp,[xp]:xp,[yp]:El};class fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const s=r[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const s=r.slice(0);for(let o=0,u=s.length;o<u;o++)s[o].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fh=Math.PI/180,tm=180/Math.PI;function Cl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Et(n,e,t){return Math.max(e,Math.min(t,n))}function hA(n,e){return(n%e+e)%e}function hh(n,e,t){return(1-t)*n+t*e}function pA(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function bm(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function mA(n,e){if(e.constructor===Float32Array)return n;const t=bm(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function gA(n,e){if(e.constructor===Float32Array)return n;const t=bm(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const Jm=class Jm{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,s=e.elements;return this.x=s[0]*t+s[3]*r+s[6],this.y=s[1]*t+s[4]*r+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),s=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*r-u*s+e.x,this.y=o*s+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Jm.prototype.isVector2=!0;let Tt=Jm;class po{constructor(e=0,t=0,r=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=s}static slerpFlat(e,t,r,s,o,u,d){let f=r[s+0],h=r[s+1],_=r[s+2],m=r[s+3],v=o[u+0],x=o[u+1],E=o[u+2],T=o[u+3];if(m!==T||f!==v||h!==x||_!==E){let y=f*v+h*x+_*E+m*T;y<0&&(v=-v,x=-x,E=-E,T=-T,y=-y);let S=1-d;if(y<.9995){const w=Math.acos(y),D=Math.sin(w);S=Math.sin(S*w)/D,d=Math.sin(d*w)/D,f=f*S+v*d,h=h*S+x*d,_=_*S+E*d,m=m*S+T*d}else{f=f*S+v*d,h=h*S+x*d,_=_*S+E*d,m=m*S+T*d;const w=1/Math.sqrt(f*f+h*h+_*_+m*m);f*=w,h*=w,_*=w,m*=w}}e[t]=f,e[t+1]=h,e[t+2]=_,e[t+3]=m}static multiplyQuaternionsFlat(e,t,r,s,o,u){const d=r[s],f=r[s+1],h=r[s+2],_=r[s+3],m=o[u],v=o[u+1],x=o[u+2],E=o[u+3];return e[t]=d*E+_*m+f*x-h*v,e[t+1]=f*E+_*v+h*m-d*x,e[t+2]=h*E+_*x+d*v-f*m,e[t+3]=_*E-d*m-f*v-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,s){return this._x=e,this._y=t,this._z=r,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,s=e._y,o=e._z,u=e._order,d=Math.cos,f=Math.sin,h=d(r/2),_=d(s/2),m=d(o/2),v=f(r/2),x=f(s/2),E=f(o/2);switch(u){case"XYZ":this._x=v*_*m+h*x*E,this._y=h*x*m-v*_*E,this._z=h*_*E+v*x*m,this._w=h*_*m-v*x*E;break;case"YXZ":this._x=v*_*m+h*x*E,this._y=h*x*m-v*_*E,this._z=h*_*E-v*x*m,this._w=h*_*m+v*x*E;break;case"ZXY":this._x=v*_*m-h*x*E,this._y=h*x*m+v*_*E,this._z=h*_*E+v*x*m,this._w=h*_*m-v*x*E;break;case"ZYX":this._x=v*_*m-h*x*E,this._y=h*x*m+v*_*E,this._z=h*_*E-v*x*m,this._w=h*_*m+v*x*E;break;case"YZX":this._x=v*_*m+h*x*E,this._y=h*x*m+v*_*E,this._z=h*_*E-v*x*m,this._w=h*_*m-v*x*E;break;case"XZY":this._x=v*_*m-h*x*E,this._y=h*x*m-v*_*E,this._z=h*_*E+v*x*m,this._w=h*_*m+v*x*E;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,s=Math.sin(r);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],s=t[4],o=t[8],u=t[1],d=t[5],f=t[9],h=t[2],_=t[6],m=t[10],v=r+d+m;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(_-f)*x,this._y=(o-h)*x,this._z=(u-s)*x}else if(r>d&&r>m){const x=2*Math.sqrt(1+r-d-m);this._w=(_-f)/x,this._x=.25*x,this._y=(s+u)/x,this._z=(o+h)/x}else if(d>m){const x=2*Math.sqrt(1+d-r-m);this._w=(o-h)/x,this._x=(s+u)/x,this._y=.25*x,this._z=(f+_)/x}else{const x=2*Math.sqrt(1+m-r-d);this._w=(u-s)/x,this._x=(o+h)/x,this._y=(f+_)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const s=Math.min(1,t/r);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,s=e._y,o=e._z,u=e._w,d=t._x,f=t._y,h=t._z,_=t._w;return this._x=r*_+u*d+s*h-o*f,this._y=s*_+u*f+o*d-r*h,this._z=o*_+u*h+r*f-s*d,this._w=u*_-r*d-s*f-o*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,s=e._y,o=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,s=-s,o=-o,u=-u,d=-d);let f=1-t;if(d<.9995){const h=Math.acos(d),_=Math.sin(h);f=Math.sin(f*h)/_,t=Math.sin(t*h)/_,this._x=this._x*f+r*t,this._y=this._y*f+s*t,this._z=this._z*f+o*t,this._w=this._w*f+u*t,this._onChangeCallback()}else this._x=this._x*f+r*t,this._y=this._y*f+s*t,this._z=this._z*f+o*t,this._w=this._w*f+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),s=Math.sqrt(1-r),o=Math.sqrt(r);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Qm=class Qm{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(z_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(z_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6]*s,this.y=o[1]*t+o[4]*r+o[7]*s,this.z=o[2]*t+o[5]*r+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,s=this.z,o=e.elements,u=1/(o[3]*t+o[7]*r+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*r+o[8]*s+o[12])*u,this.y=(o[1]*t+o[5]*r+o[9]*s+o[13])*u,this.z=(o[2]*t+o[6]*r+o[10]*s+o[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,s=this.z,o=e.x,u=e.y,d=e.z,f=e.w,h=2*(u*s-d*r),_=2*(d*t-o*s),m=2*(o*r-u*t);return this.x=t+f*h+u*m-d*_,this.y=r+f*_+d*h-o*m,this.z=s+f*m+o*_-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*s,this.y=o[1]*t+o[5]*r+o[9]*s,this.z=o[2]*t+o[6]*r+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,s=e.y,o=e.z,u=t.x,d=t.y,f=t.z;return this.x=s*f-o*d,this.y=o*u-r*f,this.z=r*d-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ph.copy(this).projectOnVector(e),this.sub(ph)}reflect(e){return this.sub(ph.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,s=this.z-e.z;return t*t+r*r+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const s=Math.sin(t)*e;return this.x=s*Math.sin(r),this.y=Math.cos(t)*e,this.z=s*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qm.prototype.isVector3=!0;let ue=Qm;const ph=new ue,z_=new po,eg=class eg{constructor(e,t,r,s,o,u,d,f,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,s,o,u,d,f,h)}set(e,t,r,s,o,u,d,f,h){const _=this.elements;return _[0]=e,_[1]=s,_[2]=d,_[3]=t,_[4]=o,_[5]=f,_[6]=r,_[7]=u,_[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,s=t.elements,o=this.elements,u=r[0],d=r[3],f=r[6],h=r[1],_=r[4],m=r[7],v=r[2],x=r[5],E=r[8],T=s[0],y=s[3],S=s[6],w=s[1],D=s[4],L=s[7],N=s[2],I=s[5],b=s[8];return o[0]=u*T+d*w+f*N,o[3]=u*y+d*D+f*I,o[6]=u*S+d*L+f*b,o[1]=h*T+_*w+m*N,o[4]=h*y+_*D+m*I,o[7]=h*S+_*L+m*b,o[2]=v*T+x*w+E*N,o[5]=v*y+x*D+E*I,o[8]=v*S+x*L+E*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],s=e[2],o=e[3],u=e[4],d=e[5],f=e[6],h=e[7],_=e[8];return t*u*_-t*d*h-r*o*_+r*d*f+s*o*h-s*u*f}invert(){const e=this.elements,t=e[0],r=e[1],s=e[2],o=e[3],u=e[4],d=e[5],f=e[6],h=e[7],_=e[8],m=_*u-d*h,v=d*f-_*o,x=h*o-u*f,E=t*m+r*v+s*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=m*T,e[1]=(s*h-_*r)*T,e[2]=(d*r-s*u)*T,e[3]=v*T,e[4]=(_*t-s*f)*T,e[5]=(s*o-d*t)*T,e[6]=x*T,e[7]=(r*f-h*t)*T,e[8]=(u*t-r*o)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,s,o,u,d){const f=Math.cos(o),h=Math.sin(o);return this.set(r*f,r*h,-r*(f*u+h*d)+u+e,-s*h,s*f,-s*(-h*u+f*d)+d+t,0,0,1),this}scale(e,t){return Dc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mh.makeScale(e,t)),this}rotate(e){return Dc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mh.makeRotation(-e)),this}translate(e,t){return Dc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let s=0;s<9;s++)if(t[s]!==r[s])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};eg.prototype.isMatrix3=!0;let dt=eg;const mh=new dt,H_=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),G_=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vA(){const n={enabled:!0,workingColorSpace:Gc,spaces:{},convert:function(s,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===Ot&&(s.r=Wr(s.r),s.g=Wr(s.g),s.b=Wr(s.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ot&&(s.r=io(s.r),s.g=io(s.g),s.b=io(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wa?Vc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,u){return s.copy(this.spaces[u].fromXYZ).multiply(this.spaces[o].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Gc]:{primaries:e,whitePoint:r,transfer:Vc,toXYZ:H_,fromXYZ:G_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:r,transfer:Ot,toXYZ:H_,fromXYZ:G_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),n}const Mt=vA();function Wr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function io(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let zs;class _A{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{zs===void 0&&(zs=Wc("canvas")),zs.width=e.width,zs.height=e.height;const s=zs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),r=zs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const s=r.getImageData(0,0,e.width,e.height),o=s.data;for(let u=0;u<o.length;u++)o[u]=Wr(o[u]/255)*255;return r.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Wr(t[r]/255)*255):t[r]=Wr(t[r]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yA=0;class wm{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yA++}),this.uuid=Cl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let u=0,d=s.length;u<d;u++)s[u].isDataTexture?o.push(gh(s[u].image)):o.push(gh(s[u]))}else o=gh(s);r.url=o}return t||(e.images[this.uuid]=r),r}}function gh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_A.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let SA=0;const vh=new ue;class Wn extends fs{constructor(e=Wn.DEFAULT_IMAGE,t=Wn.DEFAULT_MAPPING,r=Hr,s=Hr,o=Qn,u=Ta,d=yr,f=mi,h=Wn.DEFAULT_ANISOTROPY,_=wa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SA++}),this.uuid=Cl(),this.name="",this.source=new wm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=u,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=f,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(vh).x}get height(){return this.source.getSize(vh).y}get depth(){return this.source.getSize(vh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mp:e.x=e.x-Math.floor(e.x);break;case Hr:e.x=e.x<0?0:1;break;case Ep:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mp:e.y=e.y-Math.floor(e.y);break;case Hr:e.y=e.y<0?0:1;break;case Ep:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=dx;Wn.DEFAULT_ANISOTROPY=1;const tg=class tg{constructor(e=0,t=0,r=0,s=1){this.x=e,this.y=t,this.z=r,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,s){return this.x=e,this.y=t,this.z=r,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,s=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*s+u[12]*o,this.y=u[1]*t+u[5]*r+u[9]*s+u[13]*o,this.z=u[2]*t+u[6]*r+u[10]*s+u[14]*o,this.w=u[3]*t+u[7]*r+u[11]*s+u[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,s,o;const f=e.elements,h=f[0],_=f[4],m=f[8],v=f[1],x=f[5],E=f[9],T=f[2],y=f[6],S=f[10];if(Math.abs(_-v)<.01&&Math.abs(m-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(m+T)<.1&&Math.abs(E+y)<.1&&Math.abs(h+x+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(h+1)/2,L=(x+1)/2,N=(S+1)/2,I=(_+v)/4,b=(m+T)/4,P=(E+y)/4;return D>L&&D>N?D<.01?(r=0,s=.707106781,o=.707106781):(r=Math.sqrt(D),s=I/r,o=b/r):L>N?L<.01?(r=.707106781,s=0,o=.707106781):(s=Math.sqrt(L),r=I/s,o=P/s):N<.01?(r=.707106781,s=.707106781,o=0):(o=Math.sqrt(N),r=b/o,s=P/o),this.set(r,s,o,t),this}let w=Math.sqrt((y-E)*(y-E)+(m-T)*(m-T)+(v-_)*(v-_));return Math.abs(w)<.001&&(w=1),this.x=(y-E)/w,this.y=(m-T)/w,this.z=(v-_)/w,this.w=Math.acos((h+x+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this.w=Et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this.w=Et(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};tg.prototype.isVector4=!0;let Qt=tg;class xA extends fs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t),this.textures=[];const s=r.count;for(let o=0;o<s;o++)this.textures[o]=new Wn({width:e,height:t,depth:r.depth}),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=r,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new wm(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends xA{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Ex extends Wn{constructor(e=null,t=1,r=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class MA extends Wn{constructor(e=null,t=1,r=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Kc=class Kc{constructor(e,t,r,s,o,u,d,f,h,_,m,v,x,E,T,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,s,o,u,d,f,h,_,m,v,x,E,T,y)}set(e,t,r,s,o,u,d,f,h,_,m,v,x,E,T,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=s,S[1]=o,S[5]=u,S[9]=d,S[13]=f,S[2]=h,S[6]=_,S[10]=m,S[14]=v,S[3]=x,S[7]=E,S[11]=T,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,s=1/Hs.setFromMatrixColumn(e,0).length(),o=1/Hs.setFromMatrixColumn(e,1).length(),u=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*s,t[1]=r[1]*s,t[2]=r[2]*s,t[3]=0,t[4]=r[4]*o,t[5]=r[5]*o,t[6]=r[6]*o,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,s=e.y,o=e.z,u=Math.cos(r),d=Math.sin(r),f=Math.cos(s),h=Math.sin(s),_=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const v=u*_,x=u*m,E=d*_,T=d*m;t[0]=f*_,t[4]=-f*m,t[8]=h,t[1]=x+E*h,t[5]=v-T*h,t[9]=-d*f,t[2]=T-v*h,t[6]=E+x*h,t[10]=u*f}else if(e.order==="YXZ"){const v=f*_,x=f*m,E=h*_,T=h*m;t[0]=v+T*d,t[4]=E*d-x,t[8]=u*h,t[1]=u*m,t[5]=u*_,t[9]=-d,t[2]=x*d-E,t[6]=T+v*d,t[10]=u*f}else if(e.order==="ZXY"){const v=f*_,x=f*m,E=h*_,T=h*m;t[0]=v-T*d,t[4]=-u*m,t[8]=E+x*d,t[1]=x+E*d,t[5]=u*_,t[9]=T-v*d,t[2]=-u*h,t[6]=d,t[10]=u*f}else if(e.order==="ZYX"){const v=u*_,x=u*m,E=d*_,T=d*m;t[0]=f*_,t[4]=E*h-x,t[8]=v*h+T,t[1]=f*m,t[5]=T*h+v,t[9]=x*h-E,t[2]=-h,t[6]=d*f,t[10]=u*f}else if(e.order==="YZX"){const v=u*f,x=u*h,E=d*f,T=d*h;t[0]=f*_,t[4]=T-v*m,t[8]=E*m+x,t[1]=m,t[5]=u*_,t[9]=-d*_,t[2]=-h*_,t[6]=x*m+E,t[10]=v-T*m}else if(e.order==="XZY"){const v=u*f,x=u*h,E=d*f,T=d*h;t[0]=f*_,t[4]=-m,t[8]=h*_,t[1]=v*m+T,t[5]=u*_,t[9]=x*m-E,t[2]=E*m-x,t[6]=d*_,t[10]=T*m+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(EA,e,bA)}lookAt(e,t,r){const s=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),ga.crossVectors(r,di),ga.lengthSq()===0&&(Math.abs(r.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),ga.crossVectors(r,di)),ga.normalize(),ec.crossVectors(di,ga),s[0]=ga.x,s[4]=ec.x,s[8]=di.x,s[1]=ga.y,s[5]=ec.y,s[9]=di.y,s[2]=ga.z,s[6]=ec.z,s[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,s=t.elements,o=this.elements,u=r[0],d=r[4],f=r[8],h=r[12],_=r[1],m=r[5],v=r[9],x=r[13],E=r[2],T=r[6],y=r[10],S=r[14],w=r[3],D=r[7],L=r[11],N=r[15],I=s[0],b=s[4],P=s[8],k=s[12],F=s[1],G=s[5],K=s[9],Y=s[13],H=s[2],se=s[6],ae=s[10],ee=s[14],j=s[3],$=s[7],Z=s[11],U=s[15];return o[0]=u*I+d*F+f*H+h*j,o[4]=u*b+d*G+f*se+h*$,o[8]=u*P+d*K+f*ae+h*Z,o[12]=u*k+d*Y+f*ee+h*U,o[1]=_*I+m*F+v*H+x*j,o[5]=_*b+m*G+v*se+x*$,o[9]=_*P+m*K+v*ae+x*Z,o[13]=_*k+m*Y+v*ee+x*U,o[2]=E*I+T*F+y*H+S*j,o[6]=E*b+T*G+y*se+S*$,o[10]=E*P+T*K+y*ae+S*Z,o[14]=E*k+T*Y+y*ee+S*U,o[3]=w*I+D*F+L*H+N*j,o[7]=w*b+D*G+L*se+N*$,o[11]=w*P+D*K+L*ae+N*Z,o[15]=w*k+D*Y+L*ee+N*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],s=e[8],o=e[12],u=e[1],d=e[5],f=e[9],h=e[13],_=e[2],m=e[6],v=e[10],x=e[14],E=e[3],T=e[7],y=e[11],S=e[15],w=f*x-h*v,D=d*x-h*m,L=d*v-f*m,N=u*x-h*_,I=u*v-f*_,b=u*m-d*_;return t*(T*w-y*D+S*L)-r*(E*w-y*N+S*I)+s*(E*D-T*N+S*b)-o*(E*L-T*I+y*b)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],s=e[8],o=e[1],u=e[5],d=e[9],f=e[2],h=e[6],_=e[10];return t*(u*_-d*h)-r*(o*_-d*f)+s*(o*h-u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],s=e[2],o=e[3],u=e[4],d=e[5],f=e[6],h=e[7],_=e[8],m=e[9],v=e[10],x=e[11],E=e[12],T=e[13],y=e[14],S=e[15],w=t*d-r*u,D=t*f-s*u,L=t*h-o*u,N=r*f-s*d,I=r*h-o*d,b=s*h-o*f,P=_*T-m*E,k=_*y-v*E,F=_*S-x*E,G=m*y-v*T,K=m*S-x*T,Y=v*S-x*y,H=w*Y-D*K+L*G+N*F-I*k+b*P;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const se=1/H;return e[0]=(d*Y-f*K+h*G)*se,e[1]=(s*K-r*Y-o*G)*se,e[2]=(T*b-y*I+S*N)*se,e[3]=(v*I-m*b-x*N)*se,e[4]=(f*F-u*Y-h*k)*se,e[5]=(t*Y-s*F+o*k)*se,e[6]=(y*L-E*b-S*D)*se,e[7]=(_*b-v*L+x*D)*se,e[8]=(u*K-d*F+h*P)*se,e[9]=(r*F-t*K-o*P)*se,e[10]=(E*I-T*L+S*w)*se,e[11]=(m*L-_*I-x*w)*se,e[12]=(d*k-u*G-f*P)*se,e[13]=(t*G-r*k+s*P)*se,e[14]=(T*D-E*N-y*w)*se,e[15]=(_*N-m*D+v*w)*se,this}scale(e){const t=this.elements,r=e.x,s=e.y,o=e.z;return t[0]*=r,t[4]*=s,t[8]*=o,t[1]*=r,t[5]*=s,t[9]*=o,t[2]*=r,t[6]*=s,t[10]*=o,t[3]*=r,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,s))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),s=Math.sin(t),o=1-r,u=e.x,d=e.y,f=e.z,h=o*u,_=o*d;return this.set(h*u+r,h*d-s*f,h*f+s*d,0,h*d+s*f,_*d+r,_*f-s*u,0,h*f-s*d,_*f+s*u,o*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,s,o,u){return this.set(1,r,o,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,r){const s=this.elements,o=t._x,u=t._y,d=t._z,f=t._w,h=o+o,_=u+u,m=d+d,v=o*h,x=o*_,E=o*m,T=u*_,y=u*m,S=d*m,w=f*h,D=f*_,L=f*m,N=r.x,I=r.y,b=r.z;return s[0]=(1-(T+S))*N,s[1]=(x+L)*N,s[2]=(E-D)*N,s[3]=0,s[4]=(x-L)*I,s[5]=(1-(v+S))*I,s[6]=(y+w)*I,s[7]=0,s[8]=(E+D)*b,s[9]=(y-w)*b,s[10]=(1-(v+T))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,r){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const o=this.determinantAffine();if(o===0)return r.set(1,1,1),t.identity(),this;let u=Hs.set(s[0],s[1],s[2]).length();const d=Hs.set(s[4],s[5],s[6]).length(),f=Hs.set(s[8],s[9],s[10]).length();o<0&&(u=-u),Wi.copy(this);const h=1/u,_=1/d,m=1/f;return Wi.elements[0]*=h,Wi.elements[1]*=h,Wi.elements[2]*=h,Wi.elements[4]*=_,Wi.elements[5]*=_,Wi.elements[6]*=_,Wi.elements[8]*=m,Wi.elements[9]*=m,Wi.elements[10]*=m,t.setFromRotationMatrix(Wi),r.x=u,r.y=d,r.z=f,this}makePerspective(e,t,r,s,o,u,d=ji,f=!1){const h=this.elements,_=2*o/(t-e),m=2*o/(r-s),v=(t+e)/(t-e),x=(r+s)/(r-s);let E,T;if(f)E=o/(u-o),T=u*o/(u-o);else if(d===ji)E=-(u+o)/(u-o),T=-2*u*o/(u-o);else if(d===Tl)E=-u/(u-o),T=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=_,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=m,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,s,o,u,d=ji,f=!1){const h=this.elements,_=2/(t-e),m=2/(r-s),v=-(t+e)/(t-e),x=-(r+s)/(r-s);let E,T;if(f)E=1/(u-o),T=u/(u-o);else if(d===ji)E=-2/(u-o),T=-(u+o)/(u-o);else if(d===Tl)E=-1/(u-o),T=-o/(u-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=_,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=m,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=E,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let s=0;s<16;s++)if(t[s]!==r[s])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Kc.prototype.isMatrix4=!0;let en=Kc;const Hs=new ue,Wi=new en,EA=new ue(0,0,0),bA=new ue(1,1,1),ga=new ue,ec=new ue,di=new ue,V_=new en,W_=new po;class Pa{constructor(e=0,t=0,r=0,s=Pa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,s=this._order){return this._x=e,this._y=t,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const s=e.elements,o=s[0],u=s[4],d=s[8],f=s[1],h=s[5],_=s[9],m=s[2],v=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,x),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,h),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(d,o)):(this._x=Math.atan2(-_,x),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return V_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(V_,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return W_.setFromEuler(this),this.setFromQuaternion(W_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pa.DEFAULT_ORDER="XYZ";class bx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wA=0;const $_=new ue,Gs=new po,Nr=new en,tc=new ue,Qo=new ue,TA=new ue,RA=new po,X_=new ue(1,0,0),q_=new ue(0,1,0),Y_=new ue(0,0,1),K_={type:"added"},AA={type:"removed"},Vs={type:"childadded",child:null},_h={type:"childremoved",child:null};class Cn extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wA++}),this.uuid=Cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new ue,t=new Pa,r=new po,s=new ue(1,1,1);function o(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(o),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new en},normalMatrix:{value:new dt}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(X_,e)}rotateY(e){return this.rotateOnAxis(q_,e)}rotateZ(e){return this.rotateOnAxis(Y_,e)}translateOnAxis(e,t){return $_.copy(e).applyQuaternion(this.quaternion),this.position.add($_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(X_,e)}translateY(e){return this.translateOnAxis(q_,e)}translateZ(e){return this.translateOnAxis(Y_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?tc.copy(e):tc.set(e,t,r);const s=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nr.lookAt(Qo,tc,this.up):Nr.lookAt(tc,Qo,this.up),this.quaternion.setFromRotationMatrix(Nr),s&&(Nr.extractRotation(s.matrixWorld),Gs.setFromRotationMatrix(Nr),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(K_),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(AA),_h.child=e,this.dispatchEvent(_h),_h.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(K_),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,s=this.children.length;r<s;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const s=this.children;for(let o=0,u=s.length;o<u;o++)s[o].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,e,TA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,RA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,s=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*r-o[8]*s,o[13]+=r-o[1]*t-o[5]*r-o[9]*s,o[14]+=s-o[2]*t-o[6]*r-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const o=this.children;for(let u=0,d=o.length;u<d;u++)o[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(d=>({...d})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let h=0,_=f.length;h<_;h++){const m=f[h];o(e.shapes,m)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,h=this.material.length;f<h;f++)d.push(o(e.materials,this.material[f]));s.material=d}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let d=0;d<this.children.length;d++)s.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];s.animations.push(o(e.animations,f))}}if(t){const d=u(e.geometries),f=u(e.materials),h=u(e.textures),_=u(e.images),m=u(e.shapes),v=u(e.skeletons),x=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),f.length>0&&(r.materials=f),h.length>0&&(r.textures=h),_.length>0&&(r.images=_),m.length>0&&(r.shapes=m),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),E.length>0&&(r.nodes=E)}return r.object=s,r;function u(d){const f=[];for(const h in d){const _=d[h];delete _.metadata,f.push(_)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const s=e.children[r];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Cn.DEFAULT_UP=new ue(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class nc extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CA={type:"move"};class yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let s=null,o=null,u=null;const d=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,r),S=this._getHandJoint(h,T);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const _=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],v=_.position.distanceTo(m.position),x=.02,E=.005;h.inputState.pinching&&v>x+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=x-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,r),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(s=t.getPose(e.targetRaySpace,r),s===null&&o!==null&&(s=o),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(CA)))}return d!==null&&(d.visible=s!==null),f!==null&&(f.visible=o!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new nc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const wx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},va={h:0,s:0,l:0},ic={h:0,s:0,l:0};function Sh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class bt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,s=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Mt.colorSpaceToWorking(this,s),this}setHSL(e,t,r,s=Mt.workingColorSpace){if(e=hA(e,1),t=Et(t,0,1),r=Et(r,0,1),t===0)this.r=this.g=this.b=r;else{const o=r<=.5?r*(1+t):r+t-r*t,u=2*r-o;this.r=Sh(u,o,e+1/3),this.g=Sh(u,o,e),this.b=Sh(u,o,e-1/3)}return Mt.colorSpaceToWorking(this,s),this}setStyle(e,t=hi){function r(o){o!==void 0&&parseFloat(o)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=s[1],d=s[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(o[4]),this.setRGB(Math.min(100,parseFloat(o[1]))/100,Math.min(100,parseFloat(o[2]))/100,Math.min(100,parseFloat(o[3]))/100,t);break;case"hsl":case"hsla":if(o=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hi){const r=wx[e.toLowerCase()];return r!==void 0?this.setHex(r,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Mt.workingToColorSpace(Fn.copy(this),e),Math.round(Et(Fn.r*255,0,255))*65536+Math.round(Et(Fn.g*255,0,255))*256+Math.round(Et(Fn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(Fn.copy(this),t);const r=Fn.r,s=Fn.g,o=Fn.b,u=Math.max(r,s,o),d=Math.min(r,s,o);let f,h;const _=(d+u)/2;if(d===u)f=0,h=0;else{const m=u-d;switch(h=_<=.5?m/(u+d):m/(2-u-d),u){case r:f=(s-o)/m+(s<o?6:0);break;case s:f=(o-r)/m+2;break;case o:f=(r-s)/m+4;break}f/=6}return e.h=f,e.s=h,e.l=_,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=hi){Mt.workingToColorSpace(Fn.copy(this),e);const t=Fn.r,r=Fn.g,s=Fn.b;return e!==hi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(s*255)})`}offsetHSL(e,t,r){return this.getHSL(va),this.setHSL(va.h+e,va.s+t,va.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(va),e.getHSL(ic);const r=hh(va.h,ic.h,t),s=hh(va.s,ic.s,t),o=hh(va.l,ic.l,t);return this.setHSL(r,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*r+o[6]*s,this.g=o[1]*t+o[4]*r+o[7]*s,this.b=o[2]*t+o[5]*r+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new bt;bt.NAMES=wx;class PA extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pa,this.environmentIntensity=1,this.environmentRotation=new Pa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $i=new ue,Or=new ue,xh=new ue,Ur=new ue,Ws=new ue,$s=new ue,Z_=new ue,Mh=new ue,Eh=new ue,bh=new ue,wh=new Qt,Th=new Qt,Rh=new Qt;class Zi{constructor(e=new ue,t=new ue,r=new ue){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,s){s.subVectors(r,t),$i.subVectors(e,t),s.cross($i);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,r,s,o){$i.subVectors(s,t),Or.subVectors(r,t),xh.subVectors(e,t);const u=$i.dot($i),d=$i.dot(Or),f=$i.dot(xh),h=Or.dot(Or),_=Or.dot(xh),m=u*h-d*d;if(m===0)return o.set(0,0,0),null;const v=1/m,x=(h*f-d*_)*v,E=(u*_-d*f)*v;return o.set(1-x-E,E,x)}static containsPoint(e,t,r,s){return this.getBarycoord(e,t,r,s,Ur)===null?!1:Ur.x>=0&&Ur.y>=0&&Ur.x+Ur.y<=1}static getInterpolation(e,t,r,s,o,u,d,f){return this.getBarycoord(e,t,r,s,Ur)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,Ur.x),f.addScaledVector(u,Ur.y),f.addScaledVector(d,Ur.z),f)}static getInterpolatedAttribute(e,t,r,s,o,u){return wh.setScalar(0),Th.setScalar(0),Rh.setScalar(0),wh.fromBufferAttribute(e,t),Th.fromBufferAttribute(e,r),Rh.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(wh,o.x),u.addScaledVector(Th,o.y),u.addScaledVector(Rh,o.z),u}static isFrontFacing(e,t,r,s){return $i.subVectors(r,t),Or.subVectors(e,t),$i.cross(Or).dot(s)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,s){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,r,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),Or.subVectors(this.a,this.b),$i.cross(Or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,s,o){return Zi.getInterpolation(e,this.a,this.b,this.c,t,r,s,o)}containsPoint(e){return Zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,s=this.b,o=this.c;let u,d;Ws.subVectors(s,r),$s.subVectors(o,r),Mh.subVectors(e,r);const f=Ws.dot(Mh),h=$s.dot(Mh);if(f<=0&&h<=0)return t.copy(r);Eh.subVectors(e,s);const _=Ws.dot(Eh),m=$s.dot(Eh);if(_>=0&&m<=_)return t.copy(s);const v=f*m-_*h;if(v<=0&&f>=0&&_<=0&&f-_>0)return u=f/(f-_),t.copy(r).addScaledVector(Ws,u);bh.subVectors(e,o);const x=Ws.dot(bh),E=$s.dot(bh);if(E>=0&&x<=E)return t.copy(o);const T=x*h-f*E;if(T<=0&&h>=0&&E<=0)return d=h/(h-E),t.copy(r).addScaledVector($s,d);const y=_*E-x*m;if(y<=0&&m-_>=0&&x-E>=0)return Z_.subVectors(o,s),d=(m-_)/(m-_+(x-E)),t.copy(s).addScaledVector(Z_,d);const S=1/(y+T+v);return u=T*S,d=v*S,t.copy(r).addScaledVector(Ws,u).addScaledVector($s,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Pl{constructor(e=new ue(1/0,1/0,1/0),t=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const o=r.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let u=0,d=o.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Xi):Xi.fromBufferAttribute(o,u),Xi.applyMatrix4(e.matrixWorld),this.expandByPoint(Xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),rc.copy(r.boundingBox)),rc.applyMatrix4(e.matrixWorld),this.union(rc)}const s=e.children;for(let o=0,u=s.length;o<u;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(el),ac.subVectors(this.max,el),Xs.subVectors(e.a,el),qs.subVectors(e.b,el),Ys.subVectors(e.c,el),_a.subVectors(qs,Xs),ya.subVectors(Ys,qs),es.subVectors(Xs,Ys);let t=[0,-_a.z,_a.y,0,-ya.z,ya.y,0,-es.z,es.y,_a.z,0,-_a.x,ya.z,0,-ya.x,es.z,0,-es.x,-_a.y,_a.x,0,-ya.y,ya.x,0,-es.y,es.x,0];return!Ah(t,Xs,qs,Ys,ac)||(t=[1,0,0,0,1,0,0,0,1],!Ah(t,Xs,qs,Ys,ac))?!1:(sc.crossVectors(_a,ya),t=[sc.x,sc.y,sc.z],Ah(t,Xs,qs,Ys,ac))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fr=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],Xi=new ue,rc=new Pl,Xs=new ue,qs=new ue,Ys=new ue,_a=new ue,ya=new ue,es=new ue,el=new ue,ac=new ue,sc=new ue,ts=new ue;function Ah(n,e,t,r,s){for(let o=0,u=n.length-3;o<=u;o+=3){ts.fromArray(n,o);const d=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),f=e.dot(ts),h=t.dot(ts),_=r.dot(ts);if(Math.max(-Math.max(f,h,_),Math.min(f,h,_))>d)return!1}return!0}const hn=new ue,oc=new Tt;let LA=0;class as extends fs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=lA,this.updateRanges=[],this.gpuType=_r,this.version=0,this._normalizationScale=e!==void 0?bm(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[r+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)oc.fromBufferAttribute(this,t),oc.applyMatrix3(e),this.setXY(t,oc.x,oc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=s,this}setXYZW(e,t,r,s,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),s=this._normalize(s),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):mA(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):gA(e,this.array)}}class Tx extends as{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Rx extends as{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class $r extends as{constructor(e,t,r){super(new Float32Array(e),t,r)}}const DA=new Pl,tl=new ue,Ch=new ue;class Tm{constructor(e=new ue,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):DA.setFromPoints(e).getCenter(r);let s=0;for(let o=0,u=e.length;o<u;o++)s=Math.max(s,r.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tl.subVectors(e,this.center);const t=tl.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),s=(r-this.radius)*.5;this.center.addScaledVector(tl,s/r),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ch.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tl.copy(e.center).add(Ch)),this.expandByPoint(tl.copy(e.center).sub(Ch))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let IA=0;const Ri=new en,Ph=new Cn,Ks=new ue,fi=new Pl,nl=new Pl,En=new ue;class hs extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IA++}),this.uuid=Cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uA(e)?Rx:Tx)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const o=new dt().getNormalMatrix(e);r.applyNormalMatrix(o),r.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,r){return Ri.makeTranslation(e,t,r),this.applyMatrix4(Ri),this}scale(e,t,r){return Ri.makeScale(e,t,r),this.applyMatrix4(Ri),this}lookAt(e){return Ph.lookAt(e),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let s=0,o=e.length;s<o;s++){const u=e[s];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new $r(r,3))}else{const r=Math.min(e.length,t.count);for(let s=0;s<r;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];fi.setFromBufferAttribute(o),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tm);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(e){const r=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const d=t[o];nl.setFromBufferAttribute(d),this.morphTargetsRelative?(En.addVectors(fi.min,nl.min),fi.expandByPoint(En),En.addVectors(fi.max,nl.max),fi.expandByPoint(En)):(fi.expandByPoint(nl.min),fi.expandByPoint(nl.max))}fi.getCenter(r);let s=0;for(let o=0,u=e.count;o<u;o++)En.fromBufferAttribute(e,o),s=Math.max(s,r.distanceToSquared(En));if(t)for(let o=0,u=t.length;o<u;o++){const d=t[o],f=this.morphTargetsRelative;for(let h=0,_=d.count;h<_;h++)En.fromBufferAttribute(d,h),f&&(Ks.fromBufferAttribute(e,h),En.add(Ks)),s=Math.max(s,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,s=t.normal,o=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new as(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],f=[],h=new Uint8Array(r.count);for(let k=0;k<r.count;k++)d[k]=new ue,f[k]=new ue;const _=new ue,m=new ue,v=new ue,x=new Tt,E=new Tt,T=new Tt,y=new ue,S=new ue;function w(k,F,G){h[k]=h[F]=h[G]=1,_.fromBufferAttribute(r,k),m.fromBufferAttribute(r,F),v.fromBufferAttribute(r,G),x.fromBufferAttribute(o,k),E.fromBufferAttribute(o,F),T.fromBufferAttribute(o,G),m.sub(_),v.sub(_),E.sub(x),T.sub(x);const K=1/(E.x*T.y-T.x*E.y);isFinite(K)&&(y.copy(m).multiplyScalar(T.y).addScaledVector(v,-E.y).multiplyScalar(K),S.copy(v).multiplyScalar(E.x).addScaledVector(m,-T.x).multiplyScalar(K),d[k].add(y),d[F].add(y),d[G].add(y),f[k].add(S),f[F].add(S),f[G].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let k=0,F=D.length;k<F;++k){const G=D[k],K=G.start,Y=G.count;for(let H=K,se=K+Y;H<se;H+=3)w(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const L=new ue,N=new ue,I=new ue,b=new ue;function P(k){I.fromBufferAttribute(s,k),b.copy(I);const F=d[k];L.copy(F),L.sub(I.multiplyScalar(I.dot(F))).normalize(),N.crossVectors(b,F);const K=N.dot(f[k])<0?-1:1;u.setXYZW(k,L.x,L.y,L.z,K)}for(let k=0,F=r.count;k<F;++k)h[k]&&P(k);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new as(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const s=new ue,o=new ue,u=new ue,d=new ue,f=new ue,h=new ue,_=new ue,m=new ue;if(e)for(let v=0,x=e.count;v<x;v+=3){const E=e.getX(v+0),T=e.getX(v+1),y=e.getX(v+2);s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,T),u.fromBufferAttribute(t,y),_.subVectors(u,o),m.subVectors(s,o),_.cross(m),d.fromBufferAttribute(r,E),f.fromBufferAttribute(r,T),h.fromBufferAttribute(r,y),d.add(_),f.add(_),h.add(_),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,x=t.count;v<x;v+=3)s.fromBufferAttribute(t,v+0),o.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),_.subVectors(u,o),m.subVectors(s,o),_.cross(m),r.setXYZ(v+0,_.x,_.y,_.z),r.setXYZ(v+1,_.x,_.y,_.z),r.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(d,f){const h=d.array,_=d.itemSize,m=d.normalized,v=new h.constructor(f.length*_);let x=0,E=0;for(let T=0,y=f.length;T<y;T++){d.isInterleavedBufferAttribute?x=f[T]*d.data.stride+d.offset:x=f[T]*_;for(let S=0;S<_;S++)v[E++]=h[x++]}return new as(v,_,m)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hs,r=this.index.array,s=this.attributes;for(const d in s){const f=s[d],h=e(f,r);t.setAttribute(d,h)}const o=this.morphAttributes;for(const d in o){const f=[],h=o[d];for(let _=0,m=h.length;_<m;_++){const v=h[_],x=e(v,r);f.push(x)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,f=u.length;d<f;d++){const h=u[d];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const h=r[f];e.data.attributes[f]=h.toJSON(e.data)}const s={};let o=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],_=[];for(let m=0,v=h.length;m<v;m++){const x=h[m];_.push(x.toJSON(e.data))}_.length>0&&(s[f]=_,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const s=e.attributes;for(const h in s){const _=s[h];this.setAttribute(h,_.clone(t))}const o=e.morphAttributes;for(const h in o){const _=[],m=o[h];for(let v=0,x=m.length;v<x;v++)_.push(m[v].clone(t));this.morphAttributes[h]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,_=u.length;h<_;h++){const m=u[h];this.addGroup(m.start,m.count,m.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lh=new ue,NA=new ue,OA=new dt;class Ea{constructor(e=new ue(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,s){return this.normal.set(e,t,r),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const s=Lh.subVectors(r,t).cross(NA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const s=e.delta(Lh),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||OA.getNormalMatrix(e),s=this.coplanarPoint(Lh).applyMatrix4(e),o=this.normal.applyMatrix3(r).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let UA=0;class Ll extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UA++}),this.uuid=Cl(),this.name="",this.type="Material",this.blending=gl,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nx,this.blendDst=ix,this.blendEquation=eo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=El,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nA,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dh,this.stencilZFail=dh,this.stencilZPass=dh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(r):s&&s.isVector2&&r&&r.isVector2||s&&s.isEuler&&r&&r.isEuler||s&&s.isVector3&&r&&r.isVector3?s.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function s(o){const u=[];for(const d in o){const f=o[d];delete f.metadata,u.push(f)}return u}if(t){const o=s(e.textures),u=s(e.images);o.length>0&&(r.textures=o),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new bt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Ea().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Tt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Tt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const s=t.length;r=new Array(s);for(let o=0;o!==s;++o)r[o]=t[o].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const kr=new ue,Dh=new ue,lc=new ue,uc=new ue;class FA{constructor(e=new ue,t=new ue(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kr.copy(this.origin).addScaledVector(this.direction,t),kr.distanceToSquared(e))}distanceSqToSegment(e,t,r,s){Dh.copy(e).add(t).multiplyScalar(.5),lc.copy(t).sub(e).normalize(),uc.copy(this.origin).sub(Dh);const o=e.distanceTo(t)*.5,u=-this.direction.dot(lc),d=uc.dot(this.direction),f=-uc.dot(lc),h=uc.lengthSq(),_=Math.abs(1-u*u);let m,v,x,E;if(_>0)if(m=u*f-d,v=u*d-f,E=o*_,m>=0)if(v>=-E)if(v<=E){const T=1/_;m*=T,v*=T,x=m*(m+u*v+2*d)+v*(u*m+v+2*f)+h}else v=o,m=Math.max(0,-(u*v+d)),x=-m*m+v*(v+2*f)+h;else v=-o,m=Math.max(0,-(u*v+d)),x=-m*m+v*(v+2*f)+h;else v<=-E?(m=Math.max(0,-(-u*o+d)),v=m>0?-o:Math.min(Math.max(-o,-f),o),x=-m*m+v*(v+2*f)+h):v<=E?(m=0,v=Math.min(Math.max(-o,-f),o),x=v*(v+2*f)+h):(m=Math.max(0,-(u*o+d)),v=m>0?o:Math.min(Math.max(-o,-f),o),x=-m*m+v*(v+2*f)+h);else v=u>0?-o:o,m=Math.max(0,-(u*v+d)),x=-m*m+v*(v+2*f)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Dh).addScaledVector(lc,v),x}intersectSphere(e,t){if(e.radius<0)return null;kr.subVectors(e.center,this.origin);const r=kr.dot(this.direction),s=kr.dot(kr)-r*r,o=e.radius*e.radius;if(s>o)return null;const u=Math.sqrt(o-s),d=r-u,f=r+u;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,s,o,u,d,f;const h=1/this.direction.x,_=1/this.direction.y,m=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,s=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,s=(e.min.x-v.x)*h),_>=0?(o=(e.min.y-v.y)*_,u=(e.max.y-v.y)*_):(o=(e.max.y-v.y)*_,u=(e.min.y-v.y)*_),r>u||o>s||((o>r||isNaN(r))&&(r=o),(u<s||isNaN(s))&&(s=u),m>=0?(d=(e.min.z-v.z)*m,f=(e.max.z-v.z)*m):(d=(e.max.z-v.z)*m,f=(e.min.z-v.z)*m),r>f||d>s)||((d>r||r!==r)&&(r=d),(f<s||s!==s)&&(s=f),s<0)?null:this.at(r>=0?r:s,t)}intersectsBox(e){return this.intersectBox(e,kr)!==null}intersectTriangle(e,t,r,s,o){const u=this.origin,d=this.direction,f=d.x,h=d.y,_=d.z,m=e.x-u.x,v=e.y-u.y,x=e.z-u.z,E=t.x-u.x,T=t.y-u.y,y=t.z-u.z,S=r.x-u.x,w=r.y-u.y,D=r.z-u.z,L=Math.abs(f),N=Math.abs(h),I=Math.abs(_);let b,P,k,F,G,K,Y,H,se,ae,ee,j;if(L>=N&&L>=I?(k=f,K=m,se=E,j=S,f>=0?(b=h,P=_,F=v,G=x,Y=T,H=y,ae=w,ee=D):(b=_,P=h,F=x,G=v,Y=y,H=T,ae=D,ee=w)):N>=I?(k=h,K=v,se=T,j=w,h>=0?(b=_,P=f,F=x,G=m,Y=y,H=E,ae=D,ee=S):(b=f,P=_,F=m,G=x,Y=E,H=y,ae=S,ee=D)):(k=_,K=x,se=y,j=D,_>=0?(b=f,P=h,F=m,G=v,Y=E,H=T,ae=S,ee=w):(b=h,P=f,F=v,G=m,Y=T,H=E,ae=w,ee=S)),k===0)return null;const $=b/k,Z=P/k,U=1/k,Q=F-$*K,Te=G-Z*K,te=Y-$*se,ve=H-Z*se,_e=ae-$*j,Ee=ee-Z*j,pe=_e*ve-Ee*te,ke=Q*Ee-Te*_e,pt=te*Te-ve*Q;if(s){if(pe<0||ke<0||pt<0)return null}else if((pe<0||ke<0||pt<0)&&(pe>0||ke>0||pt>0))return null;const et=pe+ke+pt;if(et===0)return null;const vt=U*(pe*K+ke*se+pt*j);return(et>0?vt<0:vt>0)?null:this.at(vt/et,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kA extends Ll{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pa,this.combine=rx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const j_=new en,ns=new FA,cc=new Tm,J_=new ue,dc=new ue,fc=new ue,hc=new ue,Ih=new ue,pc=new ue,Q_=new ue,mc=new ue;class La extends Cn{constructor(e=new hs,t=new kA){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const s=t[r[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const d=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=o}}}}getVertexPosition(e,t){const r=this.geometry,s=r.attributes.position,o=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(s,e);const d=this.morphTargetInfluences;if(o&&d){pc.set(0,0,0);for(let f=0,h=o.length;f<h;f++){const _=d[f],m=o[f];_!==0&&(Ih.fromBufferAttribute(m,e),u?pc.addScaledVector(Ih,_):pc.addScaledVector(Ih.sub(t),_))}t.add(pc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cc.copy(r.boundingSphere),cc.applyMatrix4(o),ns.copy(e.ray).recast(e.near),!(cc.containsPoint(ns.origin)===!1&&(ns.intersectSphere(cc,J_)===null||ns.origin.distanceToSquared(J_)>(e.far-e.near)**2))&&(j_.copy(o).invert(),ns.copy(e.ray).applyMatrix4(j_),!(r.boundingBox!==null&&ns.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,r){let s;const o=this.geometry,u=this.material,d=o.index,f=o.attributes.position,h=o.attributes.uv,_=o.attributes.uv1,m=o.attributes.normal,v=o.groups,x=o.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,T=v.length;E<T;E++){const y=v[E],S=u[y.materialIndex],w=Math.max(y.start,x.start),D=Math.min(d.count,Math.min(y.start+y.count,x.start+x.count));for(let L=w,N=D;L<N;L+=3){const I=d.getX(L),b=d.getX(L+1),P=d.getX(L+2);s=gc(this,S,e,r,h,_,m,I,b,P),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const E=Math.max(0,x.start),T=Math.min(d.count,x.start+x.count);for(let y=E,S=T;y<S;y+=3){const w=d.getX(y),D=d.getX(y+1),L=d.getX(y+2);s=gc(this,u,e,r,h,_,m,w,D,L),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(u))for(let E=0,T=v.length;E<T;E++){const y=v[E],S=u[y.materialIndex],w=Math.max(y.start,x.start),D=Math.min(f.count,Math.min(y.start+y.count,x.start+x.count));for(let L=w,N=D;L<N;L+=3){const I=L,b=L+1,P=L+2;s=gc(this,S,e,r,h,_,m,I,b,P),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const E=Math.max(0,x.start),T=Math.min(f.count,x.start+x.count);for(let y=E,S=T;y<S;y+=3){const w=y,D=y+1,L=y+2;s=gc(this,u,e,r,h,_,m,w,D,L),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function BA(n,e,t,r,s,o,u,d){let f;if(e.side===ti?f=r.intersectTriangle(u,o,s,!0,d):f=r.intersectTriangle(s,o,u,e.side===ss,d),f===null)return null;mc.copy(d),mc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(mc);return h<t.near||h>t.far?null:{distance:h,point:mc.clone(),object:n}}function gc(n,e,t,r,s,o,u,d,f,h){n.getVertexPosition(d,dc),n.getVertexPosition(f,fc),n.getVertexPosition(h,hc);const _=BA(n,e,t,r,dc,fc,hc,Q_);if(_){const m=new ue;Zi.getBarycoord(Q_,dc,fc,hc,m),s&&(_.uv=Zi.getInterpolatedAttribute(s,d,f,h,m,new Tt)),o&&(_.uv1=Zi.getInterpolatedAttribute(o,d,f,h,m,new Tt)),u&&(_.normal=Zi.getInterpolatedAttribute(u,d,f,h,m,new ue),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const v={a:d,b:f,c:h,normal:new ue,materialIndex:0};Zi.getNormal(dc,fc,hc,v.normal),_.face=v,_.barycoord=m}return _}class zA extends Wn{constructor(e=null,t=1,r=1,s,o,u,d,f,h=An,_=An,m,v){super(null,u,d,f,h,_,s,o,m,v),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const is=new Tm,HA=new Tt(.5,.5),vc=new ue;class Rl{constructor(e=new Ea,t=new Ea,r=new Ea,s=new Ea,o=new Ea,u=new Ea){this.planes=[e,t,r,s,o,u]}set(e,t,r,s,o,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(s),d[4].copy(o),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ji,r=!1){const s=this.planes,o=e.elements,u=o[0],d=o[1],f=o[2],h=o[3],_=o[4],m=o[5],v=o[6],x=o[7],E=o[8],T=o[9],y=o[10],S=o[11],w=o[12],D=o[13],L=o[14],N=o[15];if(s[0].setComponents(h-u,x-_,S-E,N-w).normalize(),s[1].setComponents(h+u,x+_,S+E,N+w).normalize(),s[2].setComponents(h+d,x+m,S+T,N+D).normalize(),s[3].setComponents(h-d,x-m,S-T,N-D).normalize(),r)s[4].setComponents(f,v,y,L).normalize(),s[5].setComponents(h-f,x-v,S-y,N-L).normalize();else if(s[4].setComponents(h-f,x-v,S-y,N-L).normalize(),t===ji)s[5].setComponents(h+f,x+v,S+y,N+L).normalize();else if(t===Tl)s[5].setComponents(f,v,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){is.center.set(0,0,0);const t=HA.distanceTo(e.center);return is.radius=.7071067811865476+t,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const t=this.planes,r=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(r)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const s=t[r];if(vc.x=s.normal.x>0?e.max.x:e.min.x,vc.y=s.normal.y>0?e.max.y:e.min.y,vc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const ey=new en;class Rm{constructor(){this.coordinateSystem=ji,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let s=0;s<t.length;s++){const o=t[s];ey.multiplyMatrices(o.projectionMatrix,o.matrixWorldInverse),r[s]===void 0&&(r[s]=new Rl),r[s].setFromProjectionMatrix(ey,o.coordinateSystem,o.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Rl),t[s].copy(r[s]);return this._count=e._count,this}clone(){return new Rm().copy(this)}}class Ax extends Wn{constructor(e=[],t=oo,r,s,o,u,d,f,h,_){super(e,t,r,s,o,u,d,f,h,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uo extends Wn{constructor(e,t,r=Er,s,o,u,d=An,f=An,h,_=Ca,m=1){if(_!==Ca&&_!==Ra)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:m};super(v,s,o,u,d,f,_,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Cx extends uo{constructor(e,t=Er,r=oo,s,o,u=An,d=An,f,h=Ca){const _={width:e,height:e,depth:1},m=[_,_,_,_,_,_];super(e,e,t,r,s,o,u,d,f,h),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Px extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class mo extends hs{constructor(e=1,t=1,r=1,s=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:s,heightSegments:o,depthSegments:u};const d=this;s=Math.floor(s),o=Math.floor(o),u=Math.floor(u);const f=[],h=[],_=[],m=[];let v=0,x=0;E("z","y","x",-1,-1,r,t,e,u,o,0),E("z","y","x",1,-1,r,t,-e,u,o,1),E("x","z","y",1,1,e,r,t,s,u,2),E("x","z","y",1,-1,e,r,-t,s,u,3),E("x","y","z",1,-1,e,t,r,s,o,4),E("x","y","z",-1,-1,e,t,-r,s,o,5),this.setIndex(f),this.setAttribute("position",new $r(h,3)),this.setAttribute("normal",new $r(_,3)),this.setAttribute("uv",new $r(m,2));function E(T,y,S,w,D,L,N,I,b,P,k){const F=L/b,G=N/P,K=L/2,Y=N/2,H=I/2,se=b+1,ae=P+1;let ee=0,j=0;const $=new ue;for(let Z=0;Z<ae;Z++){const U=Z*G-Y;for(let Q=0;Q<se;Q++){const Te=Q*F-K;$[T]=Te*w,$[y]=U*D,$[S]=H,h.push($.x,$.y,$.z),$[T]=0,$[y]=0,$[S]=I>0?1:-1,_.push($.x,$.y,$.z),m.push(Q/b),m.push(1-Z/P),ee+=1}}for(let Z=0;Z<P;Z++)for(let U=0;U<b;U++){const Q=v+U+se*Z,Te=v+U+se*(Z+1),te=v+(U+1)+se*(Z+1),ve=v+(U+1)+se*Z;f.push(Q,Te,ve),f.push(Te,te,ve),j+=6}d.addGroup(x,j,k),x+=j,v+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Qc extends hs{constructor(e=1,t=1,r=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:s};const o=e/2,u=t/2,d=Math.floor(r),f=Math.floor(s),h=d+1,_=f+1,m=e/d,v=t/f,x=[],E=[],T=[],y=[];for(let S=0;S<_;S++){const w=S*v-u;for(let D=0;D<h;D++){const L=D*m-o;E.push(L,-w,0),T.push(0,0,1),y.push(D/d),y.push(1-S/f)}}for(let S=0;S<f;S++)for(let w=0;w<d;w++){const D=w+h*S,L=w+h*(S+1),N=w+1+h*(S+1),I=w+1+h*S;x.push(D,L,I),x.push(L,N,I)}this.setIndex(x),this.setAttribute("position",new $r(E,3)),this.setAttribute("normal",new $r(T,3)),this.setAttribute("uv",new $r(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.width,e.height,e.widthSegments,e.heightSegments)}}function co(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const s=n[t][r];if(ty(s))s.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=s.clone();else if(Array.isArray(s))if(ty(s[0])){const o=[];for(let u=0,d=s.length;u<d;u++)o[u]=s[u].clone();e[t][r]=o}else e[t][r]=s.slice();else e[t][r]=s}}return e}function Gn(n){const e={};for(let t=0;t<n.length;t++){const r=co(n[t]);for(const s in r)e[s]=r[s]}return e}function ty(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function GA(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Lx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const VA={clone:co,merge:Gn};var WA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$A=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ls extends Ll{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WA,this.fragmentShader=$A,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=GA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const s in this.extensions)this.extensions[s]===!0&&(r[s]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const s=e.uniforms[r];switch(this.uniforms[r]={},s.type){case"t":this.uniforms[r].value=t[s.value]||null;break;case"c":this.uniforms[r].value=new bt().setHex(s.value);break;case"v2":this.uniforms[r].value=new Tt().fromArray(s.value);break;case"v3":this.uniforms[r].value=new ue().fromArray(s.value);break;case"v4":this.uniforms[r].value=new Qt().fromArray(s.value);break;case"m3":this.uniforms[r].value=new dt().fromArray(s.value);break;case"m4":this.uniforms[r].value=new en().fromArray(s.value);break;default:this.uniforms[r].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class XA extends ls{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qA extends Ll{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=em,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class YA extends Ll{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KA extends Ll{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Am extends Cn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class ZA extends Am{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Nh=new en,ny=new ue,iy=new ue;class Dx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rl,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;ny.setFromMatrixPosition(e.matrixWorld),t.position.copy(ny),iy.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(iy),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,s){Nh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Nh,e.coordinateSystem,e.reversedDepth);const o=this._frameExtents,u=s?s.z/o.x:1,d=s?s.w/o.y:1,f=s?s.x/o.x:0,h=s?s.y/o.y:0;e.coordinateSystem===Tl||e.reversedDepth?t.set(.5*u,0,0,.5*u+f,0,.5*d,0,.5*d+h,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+f,0,.5*d,0,.5*d+h,0,0,.5,.5,0,0,0,1),t.multiply(Nh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _c=new ue,yc=new po,ur=new ue;class Ix extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_c,yc,ur),ur.x===1&&ur.y===1&&ur.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_c,yc,ur.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(_c,yc,ur),ur.x===1&&ur.y===1&&ur.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_c,yc,ur.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Sa=new ue,ry=new Tt,ay=new Tt;class Ki extends Ix{constructor(e=50,t=1,r=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tm*2*Math.atan(Math.tan(fh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Sa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sa.x,Sa.y).multiplyScalar(-e/Sa.z),Sa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Sa.x,Sa.y).multiplyScalar(-e/Sa.z)}getViewSize(e,t){return this.getViewBounds(e,ry,ay),t.subVectors(ay,ry)}setViewOffset(e,t,r,s,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fh*.5*this.fov)/this.zoom,r=2*t,s=this.aspect*r,o=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,h=u.fullHeight;o+=u.offsetX*s/f,t-=u.offsetY*r/h,s*=u.width/f,r*=u.height/h}const d=this.filmOffset;d!==0&&(o+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class jA extends Dx{constructor(){super(new Ki(90,1,.5,500)),this.isPointLightShadow=!0}}class JA extends Am{constructor(e,t,r=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=s,this.shadow=new jA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Cm extends Ix{constructor(e=-1,t=1,r=1,s=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=s,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,s,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=r-e,u=r+e,d=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,u=o+h*this.view.width,d-=_*this.view.offsetY,f=d-_*this.view.height}this.projectionMatrix.makeOrthographic(o,u,d,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class QA extends Dx{constructor(){super(new Cm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eC extends Am{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new QA}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Zs=-90,js=1;class nm extends Cn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ki(Zs,js,e,t);s.layers=this.layers,this.add(s);const o=new Ki(Zs,js,e,t);o.layers=this.layers,this.add(o);const u=new Ki(Zs,js,e,t);u.layers=this.layers,this.add(u);const d=new Ki(Zs,js,e,t);d.layers=this.layers,this.add(d);const f=new Ki(Zs,js,e,t);f.layers=this.layers,this.add(f);const h=new Ki(Zs,js,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,s,o,u,d,f]=t;for(const h of t)this.remove(h);if(e===ji)r.up.set(0,1,0),r.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Tl)r.up.set(0,-1,0),r.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,d,f,h,_]=this.children,m=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(r,1,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,4,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.mipmapsAutoUpdate=T,e.setRenderTarget(r,5,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(m,v,x),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class tC extends Ki{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function sy(n,e,t,r){const s=nC(r);switch(t){case gx:return n*e;case _x:return n*e/s.components*s.byteLength;case xm:return n*e/s.components*s.byteLength;case os:return n*e*2/s.components*s.byteLength;case Mm:return n*e*2/s.components*s.byteLength;case vx:return n*e*3/s.components*s.byteLength;case yr:return n*e*4/s.components*s.byteLength;case Em:return n*e*4/s.components*s.byteLength;case Ac:case Cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pc:case Lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wp:case Rp:return Math.max(n,16)*Math.max(e,8)/4;case bp:case Tp:return Math.max(n,8)*Math.max(e,8)/2;case Ap:case Cp:case Lp:case Dp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pp:case zc:case Ip:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Np:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Op:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Up:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Fp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case kp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Bp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case zp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Hp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Gp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Vp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Wp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case $p:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Xp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case qp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Yp:case Kp:case Zp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case jp:case Jp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Hc:case Qp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nC(n){switch(n){case mi:case fx:return{byteLength:1,components:1};case wl:case hx:case br:return{byteLength:2,components:1};case ym:case Sm:return{byteLength:2,components:4};case Er:case _m:case _r:return{byteLength:4,components:1};case px:case mx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gm}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nx(){let n=null,e=!1,t=null,r=null;function s(o,u){r=n.requestAnimationFrame(s),t(o,u)}return{start:function(){e!==!0&&t!==null&&n!==null&&(r=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function iC(n){const e=new WeakMap;function t(d,f){const h=d.array,_=d.usage,m=h.byteLength,v=n.createBuffer();n.bindBuffer(f,v),n.bufferData(f,h,_),d.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=n.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:m}}function r(d,f,h){const _=f.array,m=f.updateRanges;if(n.bindBuffer(h,d),m.length===0)n.bufferSubData(h,0,_);else{m.sort((x,E)=>x.start-E.start);let v=0;for(let x=1;x<m.length;x++){const E=m[v],T=m[x];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,m[v]=T)}m.length=v+1;for(let x=0,E=m.length;x<E;x++){const T=m[x];n.bufferSubData(h,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function o(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(n.deleteBuffer(f.buffer),e.delete(d))}function u(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,t(d,f));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,d,f),h.version=d.version}}return{get:s,remove:o,update:u}}var rC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,hC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_C=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,SC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,EC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,TC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,RC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,AC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,CC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IC="gl_FragColor = linearToOutputTexel( gl_FragColor );",NC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,UC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,FC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,VC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$C=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,KC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ZC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tP=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rP=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aP=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,sP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vP=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_P=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,SP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,MP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,EP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,TP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,RP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,IP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,HP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,GP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,VP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$P=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,JP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,QP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rL=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sL=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cL=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dL=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mL=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gL=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_L=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yL=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xL=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ML=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,AL=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CL=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,DL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IL=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NL=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:rC,alphahash_pars_fragment:aC,alphamap_fragment:sC,alphamap_pars_fragment:oC,alphatest_fragment:lC,alphatest_pars_fragment:uC,aomap_fragment:cC,aomap_pars_fragment:dC,batching_pars_vertex:fC,batching_vertex:hC,begin_vertex:pC,beginnormal_vertex:mC,bsdfs:gC,iridescence_fragment:vC,bumpmap_pars_fragment:_C,clipping_planes_fragment:yC,clipping_planes_pars_fragment:SC,clipping_planes_pars_vertex:xC,clipping_planes_vertex:MC,color_fragment:EC,color_pars_fragment:bC,color_pars_vertex:wC,color_vertex:TC,common:RC,defaultnormal_vertex:AC,displacementmap_pars_vertex:CC,displacementmap_vertex:PC,emissivemap_fragment:LC,emissivemap_pars_fragment:DC,colorspace_fragment:IC,colorspace_pars_fragment:NC,envmap_fragment:OC,envmap_common_pars_fragment:UC,envmap_pars_fragment:FC,envmap_pars_vertex:kC,envmap_physical_pars_fragment:KC,envmap_vertex:BC,fog_vertex:zC,fog_pars_vertex:HC,fog_fragment:GC,fog_pars_fragment:VC,gradientmap_pars_fragment:WC,lightmap_pars_fragment:$C,lights_lambert_fragment:XC,lights_lambert_pars_fragment:qC,lights_pars_begin:YC,lights_toon_fragment:ZC,lights_toon_pars_fragment:jC,lights_phong_fragment:JC,lights_phong_pars_fragment:QC,lights_physical_fragment:eP,lights_physical_pars_fragment:tP,lights_fragment_begin:nP,lights_fragment_maps:iP,lights_fragment_end:rP,lightprobes_pars_fragment:aP,logdepthbuf_fragment:sP,logdepthbuf_pars_fragment:oP,logdepthbuf_pars_vertex:lP,logdepthbuf_vertex:uP,map_fragment:cP,map_pars_fragment:dP,map_particle_fragment:fP,map_particle_pars_fragment:hP,metalnessmap_fragment:pP,metalnessmap_pars_fragment:mP,morphinstance_vertex:gP,morphcolor_vertex:vP,morphnormal_vertex:_P,morphtarget_pars_vertex:yP,morphtarget_vertex:SP,normal_fragment_begin:xP,normal_fragment_maps:MP,normal_pars_fragment:EP,normal_pars_vertex:bP,normal_vertex:wP,normalmap_pars_fragment:TP,clearcoat_normal_fragment_begin:RP,clearcoat_normal_fragment_maps:AP,clearcoat_pars_fragment:CP,iridescence_pars_fragment:PP,opaque_fragment:LP,packing:DP,premultiplied_alpha_fragment:IP,project_vertex:NP,dithering_fragment:OP,dithering_pars_fragment:UP,roughnessmap_fragment:FP,roughnessmap_pars_fragment:kP,shadowmap_pars_fragment:BP,shadowmap_pars_vertex:zP,shadowmap_vertex:HP,shadowmask_pars_fragment:GP,skinbase_vertex:VP,skinning_pars_vertex:WP,skinning_vertex:$P,skinnormal_vertex:XP,specularmap_fragment:qP,specularmap_pars_fragment:YP,tonemapping_fragment:KP,tonemapping_pars_fragment:ZP,transmission_fragment:jP,transmission_pars_fragment:JP,uv_pars_fragment:QP,uv_pars_vertex:eL,uv_vertex:tL,worldpos_vertex:nL,background_vert:iL,background_frag:rL,backgroundCube_vert:aL,backgroundCube_frag:sL,cube_vert:oL,cube_frag:lL,depth_vert:uL,depth_frag:cL,distance_vert:dL,distance_frag:fL,equirect_vert:hL,equirect_frag:pL,linedashed_vert:mL,linedashed_frag:gL,meshbasic_vert:vL,meshbasic_frag:_L,meshlambert_vert:yL,meshlambert_frag:SL,meshmatcap_vert:xL,meshmatcap_frag:ML,meshnormal_vert:EL,meshnormal_frag:bL,meshphong_vert:wL,meshphong_frag:TL,meshphysical_vert:RL,meshphysical_frag:AL,meshtoon_vert:CL,meshtoon_frag:PL,points_vert:LL,points_frag:DL,shadow_vert:IL,shadow_frag:NL,sprite_vert:OL,sprite_frag:UL},Be={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},pr={basic:{uniforms:Gn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Gn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new bt(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Gn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Gn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Gn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new bt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Gn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Gn([Be.points,Be.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Gn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Gn([Be.common,Be.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Gn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Gn([Be.sprite,Be.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Gn([Be.common,Be.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Gn([Be.lights,Be.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};pr.physical={uniforms:Gn([pr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Sc={r:0,b:0,g:0},FL=new en,Ox=new dt;Ox.set(-1,0,0,0,1,0,0,0,1);function kL(n,e,t,r,s,o){const u=new bt(0);let d=s===!0?0:1,f,h,_=null,m=0,v=null;function x(w){let D=w.isScene===!0?w.background:null;if(D&&D.isTexture){const L=w.backgroundBlurriness>0;D=e.get(D,L)}return D}function E(w){let D=!1;const L=x(w);L===null?y(u,d):L&&L.isColor&&(y(L,1),D=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(n.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function T(w,D){const L=x(D);L&&L.isCubeTexture?(h===void 0&&(h=new La(new mo(1,1,1),new ls({name:"BackgroundCubeMaterial",uniforms:co(pr.backgroundCube.uniforms),vertexShader:pr.backgroundCube.vertexShader,fragmentShader:pr.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,I,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=L,h.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(FL.makeRotationFromEuler(D.backgroundRotation)).transpose(),L.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Ox),h.material.toneMapped=Mt.getTransfer(L.colorSpace)!==Ot,(_!==L||m!==L.version||v!==n.toneMapping)&&(h.material.needsUpdate=!0,_=L,m=L.version,v=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(f===void 0&&(f=new La(new Qc(2,2),new ls({name:"BackgroundMaterial",uniforms:co(pr.background.uniforms),vertexShader:pr.background.vertexShader,fragmentShader:pr.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=L,f.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,f.material.toneMapped=Mt.getTransfer(L.colorSpace)!==Ot,L.matrixAutoUpdate===!0&&L.updateMatrix(),f.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||m!==L.version||v!==n.toneMapping)&&(f.material.needsUpdate=!0,_=L,m=L.version,v=n.toneMapping),f.layers.enableAll(),w.unshift(f,f.geometry,f.material,0,0,null))}function y(w,D){w.getRGB(Sc,Lx(n)),t.buffers.color.setClear(Sc.r,Sc.g,Sc.b,D,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(w,D=1){u.set(w),d=D,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(w){d=w,y(u,d)},render:E,addToRenderList:T,dispose:S}}function BL(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},s=v(null);let o=s,u=!1;function d(G,K,Y,H,se){let ae=!1;const ee=m(G,H,Y,K);o!==ee&&(o=ee,h(o.object)),ae=x(G,H,Y,se),ae&&E(G,H,Y,se),se!==null&&e.update(se,n.ELEMENT_ARRAY_BUFFER),(ae||u)&&(u=!1,L(G,K,Y,H),se!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function f(){return n.createVertexArray()}function h(G){return n.bindVertexArray(G)}function _(G){return n.deleteVertexArray(G)}function m(G,K,Y,H){const se=H.wireframe===!0;let ae=r[K.id];ae===void 0&&(ae={},r[K.id]=ae);const ee=G.isInstancedMesh===!0?G.id:0;let j=ae[ee];j===void 0&&(j={},ae[ee]=j);let $=j[Y.id];$===void 0&&($={},j[Y.id]=$);let Z=$[se];return Z===void 0&&(Z=v(f()),$[se]=Z),Z}function v(G){const K=[],Y=[],H=[];for(let se=0;se<t;se++)K[se]=0,Y[se]=0,H[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:Y,attributeDivisors:H,object:G,attributes:{},index:null}}function x(G,K,Y,H){const se=o.attributes,ae=K.attributes;let ee=0;const j=Y.getAttributes();for(const $ in j)if(j[$].location>=0){const U=se[$];let Q=ae[$];if(Q===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(Q=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(Q=G.instanceColor)),U===void 0||U.attribute!==Q||Q&&U.data!==Q.data)return!0;ee++}return o.attributesNum!==ee||o.index!==H}function E(G,K,Y,H){const se={},ae=K.attributes;let ee=0;const j=Y.getAttributes();for(const $ in j)if(j[$].location>=0){let U=ae[$];U===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(U=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(U=G.instanceColor));const Q={};Q.attribute=U,U&&U.data&&(Q.data=U.data),se[$]=Q,ee++}o.attributes=se,o.attributesNum=ee,o.index=H}function T(){const G=o.newAttributes;for(let K=0,Y=G.length;K<Y;K++)G[K]=0}function y(G){S(G,0)}function S(G,K){const Y=o.newAttributes,H=o.enabledAttributes,se=o.attributeDivisors;Y[G]=1,H[G]===0&&(n.enableVertexAttribArray(G),H[G]=1),se[G]!==K&&(n.vertexAttribDivisor(G,K),se[G]=K)}function w(){const G=o.newAttributes,K=o.enabledAttributes;for(let Y=0,H=K.length;Y<H;Y++)K[Y]!==G[Y]&&(n.disableVertexAttribArray(Y),K[Y]=0)}function D(G,K,Y,H,se,ae,ee){ee===!0?n.vertexAttribIPointer(G,K,Y,se,ae):n.vertexAttribPointer(G,K,Y,H,se,ae)}function L(G,K,Y,H){T();const se=H.attributes,ae=Y.getAttributes(),ee=K.defaultAttributeValues;for(const j in ae){const $=ae[j];if($.location>=0){let Z=se[j];if(Z===void 0&&(j==="instanceMatrix"&&G.instanceMatrix&&(Z=G.instanceMatrix),j==="instanceColor"&&G.instanceColor&&(Z=G.instanceColor)),Z!==void 0){const U=Z.normalized,Q=Z.itemSize,Te=e.get(Z);if(Te===void 0)continue;const te=Te.buffer,ve=Te.type,_e=Te.bytesPerElement,Ee=ve===n.INT||ve===n.UNSIGNED_INT||Z.gpuType===_m;if(Z.isInterleavedBufferAttribute){const pe=Z.data,ke=pe.isInterleavedBuffer===!0?pe.stride:pe.itemSize,pt=Z.offset;if(pe.isInstancedInterleavedBuffer||pe.isInstancedBufferAttribute){for(let et=0;et<$.locationSize;et++)S($.location+et,pe.meshPerAttribute);G.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let et=0;et<$.locationSize;et++)y($.location+et);n.bindBuffer(n.ARRAY_BUFFER,te);for(let et=0;et<$.locationSize;et++)D($.location+et,Q/$.locationSize,ve,U,ke*_e,(pt+Q/$.locationSize*et)*_e,Ee)}else{if(Z.isInstancedBufferAttribute){for(let pe=0;pe<$.locationSize;pe++)S($.location+pe,Z.meshPerAttribute);G.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let pe=0;pe<$.locationSize;pe++)y($.location+pe);n.bindBuffer(n.ARRAY_BUFFER,te);for(let pe=0;pe<$.locationSize;pe++)D($.location+pe,Q/$.locationSize,ve,U,Q*_e,Q/$.locationSize*pe*_e,Ee)}}else if(ee!==void 0){const U=ee[j];if(U!==void 0)switch(U.length){case 2:n.vertexAttrib2fv($.location,U);break;case 3:n.vertexAttrib3fv($.location,U);break;case 4:n.vertexAttrib4fv($.location,U);break;default:n.vertexAttrib1fv($.location,U)}}}}w()}function N(){k();for(const G in r){const K=r[G];for(const Y in K){const H=K[Y];for(const se in H){const ae=H[se];for(const ee in ae)_(ae[ee].object),delete ae[ee];delete H[se]}}delete r[G]}}function I(G){if(r[G.id]===void 0)return;const K=r[G.id];for(const Y in K){const H=K[Y];for(const se in H){const ae=H[se];for(const ee in ae)_(ae[ee].object),delete ae[ee];delete H[se]}}delete r[G.id]}function b(G){for(const K in r){const Y=r[K];for(const H in Y){const se=Y[H];if(se[G.id]===void 0)continue;const ae=se[G.id];for(const ee in ae)_(ae[ee].object),delete ae[ee];delete se[G.id]}}}function P(G){for(const K in r){const Y=r[K],H=G.isInstancedMesh===!0?G.id:0,se=Y[H];if(se!==void 0){for(const ae in se){const ee=se[ae];for(const j in ee)_(ee[j].object),delete ee[j];delete se[ae]}delete Y[H],Object.keys(Y).length===0&&delete r[K]}}}function k(){F(),u=!0,o!==s&&(o=s,h(o.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:d,reset:k,resetDefaultState:F,dispose:N,releaseStatesOfGeometry:I,releaseStatesOfObject:P,releaseStatesOfProgram:b,initAttributes:T,enableAttribute:y,disableUnusedAttributes:w}}function zL(n,e,t){let r;function s(f){r=f}function o(f,h){n.drawArrays(r,f,h),t.update(h,r,1)}function u(f,h,_){_!==0&&(n.drawArraysInstanced(r,f,h,_),t.update(h,r,_))}function d(f,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,h,0,_);let v=0;for(let x=0;x<_;x++)v+=h[x];t.update(v,r,1)}this.setMode=s,this.render=o,this.renderInstances=u,this.renderMultiDraw=d}function HL(n,e,t,r){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(b){return!(b!==yr&&r.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(b){const P=b===br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==mi&&b!==_r&&!P&&r.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function f(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const _=f(h);_!==h&&(lt("WebGLRenderer:",h,"not supported, using",_,"instead."),h=_);const m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=t.logarithmicDepthBuffer===!0&&m===!1;t.reversedDepthBuffer===!0&&m===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&m===!0&&lt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),S=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),L=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=n.getParameter(n.MAX_SAMPLES),I=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:w,maxVaryings:D,maxFragmentUniforms:L,maxSamples:N,samples:I}}function GL(n){const e=this;let t=null,r=0,s=!1,o=!1;const u=new Ea,d=new dt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const x=m.length!==0||v||r!==0||s;return s=v,r=m.length,x},this.beginShadows=function(){o=!0,_(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,v){t=_(m,v,0)},this.setState=function(m,v,x){const E=m.clippingPlanes,T=m.clipIntersection,y=m.clipShadows,S=n.get(m);if(!s||E===null||E.length===0||o&&!y)o?_(null):h();else{const w=o?0:r,D=w*4;let L=S.clippingState||null;f.value=L,L=_(E,v,D,x);for(let N=0;N!==D;++N)L[N]=t[N];S.clippingState=L,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(m,v,x,E){const T=m!==null?m.length:0;let y=null;if(T!==0){if(y=f.value,E!==!0||y===null){const S=x+T*4,w=v.matrixWorldInverse;d.getNormalMatrix(w),(y===null||y.length<S)&&(y=new Float32Array(S));for(let D=0,L=x;D!==T;++D,L+=4)u.copy(m[D]).applyMatrix4(w,d),u.normal.toArray(y,L),y[L+3]=u.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}class Pm extends Mr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},s=[r,r,r,r,r,r];this.texture=new Ax(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new mo(5,5,5),o=new ls({name:"CubemapFromEquirect",uniforms:co(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ti,blending:no});o.uniforms.tEquirect.value=t;const u=new La(s,o),d=t.minFilter;return t.minFilter===Ta&&(t.minFilter=Qn),new nm(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,s=!0){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,s);e.setRenderTarget(o)}}const oy=256,VL=3,WL=20,Ux=256,Fx=16,$L=3,XL=new ue,qL=new bt;class $c{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new nm(1,10,null),this._boxMesh=new La(new mo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,s=100,o={}){const{size:u=256,position:d=XL}=o,f=this._renderer;this._setSize(u);const h=this._allocateTarget(),_=this._getSourceTarget(!0);t>0&&(_.texture.mipmapsAutoUpdate=!1);const m=f.autoClear,v=f.autoClearColor,x=f.autoClearDepth,E=f.autoClearStencil,T=e.background;f.autoClear=!0,f.autoClearColor=!0,f.autoClearDepth=!0,f.autoClearStencil=!0,T===null&&(e.background=f.getClearColor(qL));const y=new nm(r,s,_);return y.position.copy(d),y.update(f,e),f.autoClear=m,f.autoClearColor=v,f.autoClearDepth=x,f.autoClearStencil=E,e.background=T,t>0&&(_.texture.mipmapsAutoUpdate=!0,this._blur(h,t)),this._applyPMREM(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(oy,pA(e))}_fromTexture(e,t){e.mapping===oo||e.mapping===bl?this._setSize(e.image.length===0?oy:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=ly(e,!1,!1),r=Math.log2(e)-VL;for(let s=0;s<=r;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=ly(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const s=this._boxMesh,o=this._cubeCamera;s.material=r,o.renderTarget=e,o.activeMipmapLevel=t;const u=e.width>>t;e.viewport.set(0,0,u,u),o.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===oo||e.mapping===bl?(this._cubemapMaterial===null&&(this._cubemapMaterial=cy()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=uy()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=YL(),this._integrationMaterial=KL());const t=this._cubeSize,r=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const o=this._integrationMaterial.uniforms;o.envMap.value=this._sourceTarget.texture,o.sourceLod.value=Math.log2(t/Fx);for(let u=0;u<=r;u++){const d=$c.lodToRoughness(u,r);if(u>r-$L)o.roughness.value=d,this._renderCube(e,u,this._integrationMaterial);else{const f=d>0?Math.log2(t)+.5*Math.log2(6/(Ux*Math.pow(d,4)))+.5:0;s.roughness.value=d,s.lodBias.value=f,this._renderCube(e,u,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=ZL());const r=this._blurMaterial,s=r.uniforms,o=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=o.texture,this._renderCube(e,0,r),s.envMap.value=e.texture,this._renderCube(o,0,r)}}function ly(n,e,t){return new Pm(n,{minFilter:Ta,generateMipmaps:e,type:br,colorSpace:Gc,depthBuffer:t})}function Dl(n,e,t){return new ls({name:n,uniforms:e,vertexShader:mt.cube_vert,fragmentShader:t,side:ti,blending:no,depthTest:!1,depthWrite:!1})}function YL(){return Dl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ux}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function KL(){return Dl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Fx}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ZL(){return Dl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${WL}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function uy(){return Dl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function cy(){return Dl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function jL(n){let e=new WeakMap,t=new WeakMap,r=null;function s(v,x=!1){return v==null?null:x?u(v):o(v)}function o(v){if(v&&v.isTexture){const x=v.mapping;if(x===lh||x===uh)if(e.has(v)){const E=e.get(v).texture;return d(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const T=new Pm(E.height);return T.fromEquirectangularTexture(n,v),e.set(v,T),v.addEventListener("dispose",h),d(T.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture&&v.isPMREMTexture!==!0){const x=v.mapping,E=x===lh||x===uh,T=x===oo||x===bl;if(E||T){let y=t.get(v);const S=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return r===null&&(r=new $c(n)),y=E?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),y.texture;if(y!==void 0)return y.texture;{const w=v.image;return E&&w&&w.height>0||T&&w&&f(w)?(r===null&&(r=new $c(n)),y=E?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),v.addEventListener("dispose",_),y.texture):null}}}return v}function d(v,x){return x===lh?v.mapping=oo:x===uh&&(v.mapping=bl),v}function f(v){let x=0;const E=6;for(let T=0;T<E;T++)v[T]!==void 0&&x++;return x===E}function h(v){const x=v.target;x.removeEventListener("dispose",h);const E=e.get(x);E!==void 0&&(e.delete(x),E.dispose())}function _(v){const x=v.target;x.removeEventListener("dispose",_);const E=t.get(x);E!==void 0&&(t.delete(x),E.dispose())}function m(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:s,dispose:m}}function JL(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const s=n.getExtension(r);return e[r]=s,s}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const s=t(r);return s===null&&Dc("WebGLRenderer: "+r+" extension not supported."),s}}}function QL(n,e,t,r){const s={},o=new WeakMap,u=new FinalizationRegistry(E=>delete s[E]);function d(E){f(E.target)}function f(E){E.index!==null&&e.remove(E.index);for(const y in E.attributes)e.remove(E.attributes[y]);E.removeEventListener("dispose",d),delete s[E.id],u.unregister(E);const T=o.get(E);T&&(e.remove(T),o.delete(E)),r.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,t.memory.geometries--}function h(E,T){return s[T.id]!==void 0||(T.addEventListener("dispose",d),s[T.id]=new WeakRef(T),u.register(T,T.id,T),t.memory.geometries++),T}function _(E){const T=E.attributes;for(const y in T)e.update(T[y],n.ARRAY_BUFFER)}function m(E){const T=E.index,y=E.attributes.position;let S=0;if(y===void 0)return;const w=T!==null?T.array.length:y.array.length/3-1,D=y.count>=65535?Rx:Tx,L=new D(Math.ceil(w/3)*6,1),N=L.array;if(T!==null){const b=T.array;S=T.version;for(let P=0,k=0;P<w;P+=3){const F=b[P+0],G=b[P+1],K=b[P+2];N[k++]=F,N[k++]=G,N[k++]=G,N[k++]=K,N[k++]=K,N[k++]=F}}else{S=y.version;for(let b=0,P=0;b<w;b+=3){const k=b+0,F=b+1,G=b+2;N[P++]=k,N[P++]=F,N[P++]=F,N[P++]=G,N[P++]=G,N[P++]=k}}L.version=S;const I=o.get(E);I&&e.remove(I),o.set(E,L)}function v(E){const T=o.get(E);if(T){const y=E.index;y!==null&&T.version<y.version&&m(E)}else m(E);return o.get(E)}function x(){for(const E in s){const T=s[E].deref();T!==void 0&&f(T)}}return{get:h,update:_,getWireframeAttribute:v,dispose:x}}function e3(n,e,t){let r;function s(m){r=m}let o,u;function d(m){o=m.type,u=m.bytesPerElement}function f(m,v){n.drawElements(r,v,o,m*u),t.update(v,r,1)}function h(m,v,x){x!==0&&(n.drawElementsInstanced(r,v,o,m*u,x),t.update(v,r,x))}function _(m,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,o,m,0,x);let T=0;for(let y=0;y<x;y++)T+=v[y];t.update(T,r,1)}this.setMode=s,this.setIndex=d,this.render=f,this.renderInstances=h,this.renderMultiDraw=_}function t3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,u,d){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=d*(o/3);break;case n.LINES:t.lines+=d*(o/2);break;case n.LINE_STRIP:t.lines+=d*(o-1);break;case n.LINE_LOOP:t.lines+=d*o;break;case n.POINTS:t.points+=d*o;break;default:Pt("WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:r}}function n3(n,e,t){const r=new WeakMap,s=new Qt;function o(u,d,f){const h=u.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=_!==void 0?_.length:0;let v=r.get(d);if(v===void 0||v.count!==m){let k=function(){b.dispose(),r.delete(d),d.removeEventListener("dispose",k)};v!==void 0&&v.texture.dispose();const x=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,T=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],w=d.morphAttributes.color||[];let D=0;x===!0&&(D=1),E===!0&&(D=2),T===!0&&(D=3);let L=d.attributes.position.count*D,N=1;L>e.maxTextureSize&&(N=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const I=new Float32Array(L*N*4*m),b=new Ex(I,L,N,m);b.type=_r,b.needsUpdate=!0;const P=D*4;for(let F=0;F<m;F++){const G=y[F],K=S[F],Y=w[F],H=L*N*4*F;for(let se=0;se<G.count;se++){const ae=se*P;x===!0&&(s.fromBufferAttribute(G,se),I[H+ae+0]=s.x,I[H+ae+1]=s.y,I[H+ae+2]=s.z,I[H+ae+3]=0),E===!0&&(s.fromBufferAttribute(K,se),I[H+ae+4]=s.x,I[H+ae+5]=s.y,I[H+ae+6]=s.z,I[H+ae+7]=0),T===!0&&(s.fromBufferAttribute(Y,se),I[H+ae+8]=s.x,I[H+ae+9]=s.y,I[H+ae+10]=s.z,I[H+ae+11]=Y.itemSize===4?s.w:1)}}v={count:m,texture:b,size:new Tt(L,N)},r.set(d,v),d.addEventListener("dispose",k)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let x=0;for(let T=0;T<h.length;T++)x+=h[T];const E=d.morphTargetsRelative?1:1-x;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",h)}f.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}return{update:o}}function i3(n,e,t,r,s){let o=new WeakMap;function u(h){const _=s.render.frame,m=h.geometry,v=e.get(h,m);if(o.get(v)!==_&&(e.update(v),o.set(v,_)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==_&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),o.set(h,_))),h.isSkinnedMesh){const x=h.skeleton;o.get(x)!==_&&(x.update(),o.set(x,_))}return v}function d(){o=new WeakMap}function f(h){const _=h.target;_.removeEventListener("dispose",f),r.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:u,dispose:d}}const r3={[ax]:"LINEAR_TONE_MAPPING",[sx]:"REINHARD_TONE_MAPPING",[ox]:"CINEON_TONE_MAPPING",[vm]:"ACES_FILMIC_TONE_MAPPING",[ux]:"AGX_TONE_MAPPING",[cx]:"NEUTRAL_TONE_MAPPING",[lx]:"CUSTOM_TONE_MAPPING"};function a3(n,e,t,r,s,o){const u=new Mr(e,t,{type:n,depthBuffer:s,stencilBuffer:o,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,f=null,h=null;const _=new hs;_.setAttribute("position",new $r([-1,3,0,-1,-1,0,3,-1,0],3)),_.setAttribute("uv",new $r([0,2,0,0,2,0],2));const m=new XA({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new La(_,m),x=new Cm(-1,1,1,-1,0,1);let E=null,T=null,y=!1,S,w=null,D=[],L=!1;this.setSize=function(N,I){u.setSize(N,I),d!==null&&d.setSize(N,I),f!==null&&f.setSize(N,I);for(let b=0;b<D.length;b++){const P=D[b];P.setSize&&P.setSize(N,I)}},this.setEffects=function(N){D=N,L=D.length>0&&D[0].isRenderPass===!0;const I=u.width,b=u.height;D.length>0&&d===null&&(d=new Mr(I,b,{type:br,depthBuffer:!1,stencilBuffer:!1}),f=new Mr(I,b,{type:br,depthBuffer:!1,stencilBuffer:!1}));const P=s===!0&&D.some(k=>k.needsDepthTexture===!0);P!==(u.depthTexture!==null)&&(P===!0&&h===null&&(h=new uo(I,b),o===!0&&(h.format=Ra,h.type=lo)),u.dispose(),u.depthTexture=P?h:null,u.resolveDepthBuffer=P,u.storeMultisampledDepthBuffer=P);for(let k=0;k<D.length;k++){const F=D[k];F.setSize&&F.setSize(I,b),P&&F.needsDepthTexture===!0&&F.setDepthTexture&&F.setDepthTexture(h)}},this.begin=function(N,I){if(y||N.toneMapping===Vr&&D.length===0)return!1;if(w=I,I!==null){const b=I.width,P=I.height;(u.width!==b||u.height!==P)&&this.setSize(b,P)}return L===!1&&N.setRenderTarget(u),S=N.toneMapping,N.toneMapping=Vr,!0},this.hasRenderPass=function(){return L},this.end=function(N,I){N.toneMapping=S,y=!0;let b=u,P=d;for(let k=0;k<D.length;k++){const F=D[k];F.enabled!==!1&&(F.render(N,P,b,I),F.needsSwap!==!1&&(b=P,P=P===d?f:d))}if(E!==N.outputColorSpace||T!==N.toneMapping){E=N.outputColorSpace,T=N.toneMapping,m.defines={},Mt.getTransfer(E)===Ot&&(m.defines.SRGB_TRANSFER="");const k=r3[T];k&&(m.defines[k]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=b.texture,N.setRenderTarget(w),N.render(v,x),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),d!==null&&d.dispose(),f!==null&&f.dispose(),_.dispose(),m.dispose()}}const kx=new Wn,Bx=new uo(1,1),zx=new Cx(1),Hx=new Ex,Gx=new MA,Vx=new Ax,dy=[],fy=[],hy=new Float32Array(16),py=new Float32Array(9),my=new Float32Array(4);function go(n,e,t){const r=n[0];if(r<=0||r>0)return n;const s=e*t;let o=dy[s];if(o===void 0&&(o=new Float32Array(s),dy[s]=o),e!==0){r.toArray(o,0);for(let u=1,d=0;u!==e;++u)d+=t,n[u].toArray(o,d)}return o}function _n(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function yn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function ed(n,e){let t=fy[e];t===void 0&&(t=new Int32Array(e),fy[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function s3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function o3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2fv(this.addr,e),yn(t,e)}}function l3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;n.uniform3fv(this.addr,e),yn(t,e)}}function u3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4fv(this.addr,e),yn(t,e)}}function c3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(_n(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,r))return;my.set(r),n.uniformMatrix2fv(this.addr,!1,my),yn(t,r)}}function d3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(_n(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,r))return;py.set(r),n.uniformMatrix3fv(this.addr,!1,py),yn(t,r)}}function f3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(_n(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,r))return;hy.set(r),n.uniformMatrix4fv(this.addr,!1,hy),yn(t,r)}}function h3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function p3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2iv(this.addr,e),yn(t,e)}}function m3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;n.uniform3iv(this.addr,e),yn(t,e)}}function g3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4iv(this.addr,e),yn(t,e)}}function v3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2uiv(this.addr,e),yn(t,e)}}function y3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;n.uniform3uiv(this.addr,e),yn(t,e)}}function S3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4uiv(this.addr,e),yn(t,e)}}function td(n){return n.version===0&&(n.compareFunction=xx,n.needsUpdate=!0),n}function x3(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?o=td(Bx):o=kx,t.setTexture2D(e||o,s)}function M3(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s),t.setTexture3D(e||Gx,s)}function E3(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s);let o;this.type===n.SAMPLER_CUBE_SHADOW?o=td(zx):o=Vx,t.setTextureCube(e||o,s)}function b3(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s),t.setTexture2DArray(e||Hx,s)}function w3(n){switch(n){case 5126:return s3;case 35664:return o3;case 35665:return l3;case 35666:return u3;case 35674:return c3;case 35675:return d3;case 35676:return f3;case 5124:case 35670:return h3;case 35667:case 35671:return p3;case 35668:case 35672:return m3;case 35669:case 35673:return g3;case 5125:return v3;case 36294:return _3;case 36295:return y3;case 36296:return S3;case 35678:case 36198:case 36298:case 36306:case 35682:return x3;case 35679:case 36299:case 36307:return M3;case 35680:case 36300:case 36308:case 36293:return E3;case 36289:case 36303:case 36311:case 36292:return b3}}function T3(n,e){n.uniform1fv(this.addr,e)}function R3(n,e){const t=go(e,this.size,2);n.uniform2fv(this.addr,t)}function A3(n,e){const t=go(e,this.size,3);n.uniform3fv(this.addr,t)}function C3(n,e){const t=go(e,this.size,4);n.uniform4fv(this.addr,t)}function P3(n,e){const t=go(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function L3(n,e){const t=go(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function D3(n,e){const t=go(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function I3(n,e){n.uniform1iv(this.addr,e)}function N3(n,e){n.uniform2iv(this.addr,e)}function O3(n,e){n.uniform3iv(this.addr,e)}function U3(n,e){n.uniform4iv(this.addr,e)}function F3(n,e){n.uniform1uiv(this.addr,e)}function k3(n,e){n.uniform2uiv(this.addr,e)}function B3(n,e){n.uniform3uiv(this.addr,e)}function z3(n,e){n.uniform4uiv(this.addr,e)}function H3(n,e,t){const r=this.cache,s=e.length,o=ed(t,s);_n(r,o)||(n.uniform1iv(this.addr,o),yn(r,o));let u;this.type===n.SAMPLER_2D_SHADOW?u=td(Bx):u=kx;for(let d=0;d!==s;++d)t.setTexture2D(e[d]||u,o[d])}function G3(n,e,t){const r=this.cache,s=e.length,o=ed(t,s);_n(r,o)||(n.uniform1iv(this.addr,o),yn(r,o));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||Gx,o[u])}function V3(n,e,t){const r=this.cache,s=e.length,o=ed(t,s);_n(r,o)||(n.uniform1iv(this.addr,o),yn(r,o));let u;this.type===n.SAMPLER_CUBE_SHADOW?u=td(zx):u=Vx;for(let d=0;d!==s;++d)t.setTextureCube(e[d]||u,o[d])}function W3(n,e,t){const r=this.cache,s=e.length,o=ed(t,s);_n(r,o)||(n.uniform1iv(this.addr,o),yn(r,o));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||Hx,o[u])}function $3(n){switch(n){case 5126:return T3;case 35664:return R3;case 35665:return A3;case 35666:return C3;case 35674:return P3;case 35675:return L3;case 35676:return D3;case 5124:case 35670:return I3;case 35667:case 35671:return N3;case 35668:case 35672:return O3;case 35669:case 35673:return U3;case 5125:return F3;case 36294:return k3;case 36295:return B3;case 36296:return z3;case 35678:case 36198:case 36298:case 36306:case 35682:return H3;case 35679:case 36299:case 36307:return G3;case 35680:case 36300:case 36308:case 36293:return V3;case 36289:case 36303:case 36311:case 36292:return W3}}class X3{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=w3(t.type)}}class q3{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$3(t.type)}}class Y3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const s=this.seq;for(let o=0,u=s.length;o!==u;++o){const d=s[o];d.setValue(e,t[d.id],r)}}}const Oh=/(\w+)(\])?(\[|\.)?/g;function gy(n,e){n.seq.push(e),n.map[e.id]=e}function K3(n,e,t){const r=n.name,s=r.length;for(Oh.lastIndex=0;;){const o=Oh.exec(r),u=Oh.lastIndex;let d=o[1];const f=o[2]==="]",h=o[3];if(f&&(d=d|0),h===void 0||h==="["&&u+2===s){gy(t,h===void 0?new X3(d,n,e):new q3(d,n,e));break}else{let m=t.map[d];m===void 0&&(m=new Y3(d),gy(t,m)),t=m}}}class Ic{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(t,u),f=e.getUniformLocation(t,d.name);K3(d,f,this)}const s=[],o=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(u):o.push(u);s.length>0&&(this.seq=s.concat(o))}setValue(e,t,r,s){const o=this.map[t];o!==void 0&&o.setValue(e,r,s)}setOptional(e,t,r){const s=t[r];s!==void 0&&this.setValue(e,r,s)}static upload(e,t,r,s){for(let o=0,u=t.length;o!==u;++o){const d=t[o],f=r[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,s)}}static seqWithValue(e,t){const r=[];for(let s=0,o=e.length;s!==o;++s){const u=e[s];u.id in t&&r.push(u)}return r}}function vy(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const Z3=37297;let j3=0;function J3(n,e){const t=n.split(`
`),r=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=s;u<o;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const _y=new dt;function Q3(n){Mt._getMatrix(_y,Mt.workingColorSpace,n);const e=`mat3( ${_y.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(n)){case Vc:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function yy(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),o=(n.getShaderInfoLog(e)||"").trim();if(r&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+o+`

`+J3(n.getShaderSource(e),d)}else return o}function eD(n,e){const t=Q3(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const tD={[ax]:"Linear",[sx]:"Reinhard",[ox]:"Cineon",[vm]:"ACESFilmic",[ux]:"AgX",[cx]:"Neutral",[lx]:"Custom"};function nD(n,e){const t=tD[e];return t===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xc=new ue;function iD(){Mt.getLuminanceCoefficients(xc);const n=xc.x.toFixed(4),e=xc.y.toFixed(4),t=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dl).join(`
`)}function aD(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function sD(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<r;s++){const o=n.getActiveAttrib(e,s),u=o.name;let d=1;o.type===n.FLOAT_MAT2&&(d=2),o.type===n.FLOAT_MAT3&&(d=3),o.type===n.FLOAT_MAT4&&(d=4),t[u]={type:o.type,location:n.getAttribLocation(e,u),locationSize:d}}return t}function dl(n){return n!==""}function Sy(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function xy(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oD=/^[ \t]*#include +<([\w\d./]+)>/gm;function im(n){return n.replace(oD,lD)}function lD(n,e){const t=mt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return im(t)}const uD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function My(n){return n.replace(uD,cD)}function cD(n,e,t,r){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Ey(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const dD={[Rc]:"SHADOWMAP_TYPE_PCF",[cl]:"SHADOWMAP_TYPE_VSM"};function fD(n){return dD[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const hD={[bl]:"ENVMAP_MODE_REFRACTION"};function pD(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":hD[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const mD={[rx]:"ENVMAP_BLENDING_MULTIPLY",[j1]:"ENVMAP_BLENDING_MIX",[J1]:"ENVMAP_BLENDING_ADD"};function gD(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":mD[n.combine]||"ENVMAP_BLENDING_NONE"}function vD(n,e,t,r){const s=n.getContext(),o=t.defines;let u=t.vertexShader,d=t.fragmentShader;const f=fD(t),h=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",_=pD(t),m=gD(t),v=rD(t),x=aD(o),E=s.createProgram();let T,y,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(T=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(dl).join(`
`),T.length>0&&(T+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(dl).join(`
`),y.length>0&&(y+=`
`)):(T=[Ey(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dl).join(`
`),y=[Ey(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+_:"",t.envMap?"#define "+m:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vr?"#define TONE_MAPPING":"",t.toneMapping!==Vr?mt.tonemapping_pars_fragment:"",t.toneMapping!==Vr?nD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,eD("linearToOutputTexel",t.outputColorSpace),iD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dl).join(`
`)),u=im(u),u=Sy(u,t),u=xy(u,t),d=im(d),d=Sy(d,t),d=xy(d,t),u=My(u),d=My(d),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,T=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,y=["#define varying in",t.glslVersion===F_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===F_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const w=S+T+u,D=S+y+d,L=vy(s,s.VERTEX_SHADER,w),N=vy(s,s.FRAGMENT_SHADER,D);s.attachShader(E,L),s.attachShader(E,N),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function I(F){if(n.debug.checkShaderErrors){const G=s.getProgramInfoLog(E)||"",K=s.getShaderInfoLog(L)||"",Y=s.getShaderInfoLog(N)||"",H=G.trim(),se=K.trim(),ae=Y.trim();let ee=!0,j=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,L,N);else{const $=yy(s,L,"vertex"),Z=yy(s,N,"fragment");Pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+H+`
`+$+`
`+Z)}else H!==""?lt("WebGLProgram: Program Info Log:",H):(se===""||ae==="")&&(j=!1);j&&(F.diagnostics={runnable:ee,programLog:H,vertexShader:{log:se,prefix:T},fragmentShader:{log:ae,prefix:y}})}s.deleteShader(L),s.deleteShader(N),b=new Ic(s,E),P=sD(s,E)}let b;this.getUniforms=function(){return b===void 0&&I(this),b};let P;this.getAttributes=function(){return P===void 0&&I(this),P};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(E,Z3)),k},this.destroy=function(){r.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j3++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=L,this.fragmentShader=N,this}let _D=0;class yD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new SD(e),t.set(e,r)),r}}class SD{constructor(e){this.id=_D++,this.code=e,this.usedTimes=0}}function xD(n){return n===os||n===zc||n===Hc}function MD(n,e,t,r,s,o){const u=new bx,d=new yD,f=new Set,h=[],_=new Map,m=r.logarithmicDepthBuffer,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return f.add(b),b===0?"uv":`uv${b}`}function E(b,P,k,F,G,K){const Y=F.fog,H=G.geometry,se=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,ae=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,ee=e.get(b.envMap||se,ae),j=v[b.type];let $=r.precision;b.precision!==null&&($=r.getMaxPrecision(b.precision),$!==b.precision&&lt("WebGLProgram.getParameters:",b.precision,"not supported, using",$,"instead."));const Z=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,U=Z!==void 0?Z.length:0;let Q=0;H.morphAttributes.position!==void 0&&(Q=1),H.morphAttributes.normal!==void 0&&(Q=2),H.morphAttributes.color!==void 0&&(Q=3);let Te,te,ve,_e;if(j){const Fe=pr[j];Te=Fe.vertexShader,te=Fe.fragmentShader}else{Te=b.vertexShader,te=b.fragmentShader;const Fe=d.getVertexShaderStage(b),_t=d.getFragmentShaderStage(b);d.update(b,Fe,_t),ve=Fe.id,_e=_t.id}const Ee=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),ke=G.isInstancedMesh===!0,pt=G.isBatchedMesh===!0,et=!!b.map,vt=!!b.matcap,St=!!ee,ut=St&&ee.isPMREMTexture===!0,tn=!!b.aoMap,Gt=!!b.lightMap,dn=!!b.bumpMap&&b.wireframe===!1,Nt=!!b.normalMap,Pn=!!b.displacementMap,Ft=!!b.emissiveMap,on=!!b.metalnessMap,pn=!!b.roughnessMap,bn=b.anisotropy>0,X=b.clearcoat>0,wn=b.diffuseRoughness>0,Lt=b.dispersion>0,Dt=b.retroreflectivity>0,Ne=b.iridescence>0,Yt=b.sheen>0,je=b.transmission>0,tt=bn&&!!b.anisotropyMap,O=X&&!!b.clearcoatMap,A=X&&!!b.clearcoatNormalMap,ie=X&&!!b.clearcoatRoughnessMap,Me=wn&&!!b.diffuseRoughnessMap,ge=Ne&&!!b.iridescenceMap,Ae=Ne&&!!b.iridescenceThicknessMap,Le=Yt&&!!b.sheenColorMap,fe=Yt&&!!b.sheenRoughnessMap,he=!!b.specularMap,Re=!!b.specularColorMap,z=!!b.specularIntensityMap,me=je&&!!b.transmissionMap,de=je&&!!b.thicknessMap,De=!!b.gradientMap,we=!!b.alphaMap,Ce=b.alphaTest>0,qe=!!b.alphaHash,ct=!!b.extensions;let Se=Vr;b.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Se=n.toneMapping);const Je=ut?ee.isCompressedCubeTexture?ee.image[0].mipmaps:ee.mipmaps:null,st={shaderID:j,shaderType:b.type,shaderName:b.name,vertexShader:Te,fragmentShader:te,defines:b.defines,customVertexShaderID:ve,customFragmentShaderID:_e,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:$,batching:pt,batchingColor:pt&&G._colorsTexture!==null,instancing:ke,instancingColor:ke&&G.instanceColor!==null,instancingMorph:ke&&G.morphTexture!==null,outputColorSpace:Ee===null?n.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:et,matcap:vt,envMap:St,envMapMode:St&&ee.mapping,envMapPMREM:ut,envMapMaxLod:ut?Je.length-1:null,envMapSize:ut?Je[0].width:null,aoMap:tn,lightMap:Gt,bumpMap:dn,normalMap:Nt,displacementMap:Pn,emissiveMap:Ft,normalMapObjectSpace:Nt&&b.normalMapType===tA,normalMapTangentSpace:Nt&&b.normalMapType===em,packedNormalMap:Nt&&b.normalMapType===em&&xD(b.normalMap.format),metalnessMap:on,roughnessMap:pn,anisotropy:bn,anisotropyMap:tt,clearcoat:X,clearcoatMap:O,clearcoatNormalMap:A,clearcoatRoughnessMap:ie,diffuseRoughness:wn,diffuseRoughnessMap:Me,dispersion:Lt,retroreflection:Dt,iridescence:Ne,iridescenceMap:ge,iridescenceThicknessMap:Ae,sheen:Yt,sheenColorMap:Le,sheenRoughnessMap:fe,specularMap:he,specularColorMap:Re,specularIntensityMap:z,transmission:je,transmissionMap:me,thicknessMap:de,gradientMap:De,opaque:b.transparent===!1&&b.blending===gl&&b.alphaToCoverage===!1,alphaMap:we,alphaTest:Ce,alphaHash:qe,combine:b.combine,mapUv:et&&x(b.map.channel),aoMapUv:tn&&x(b.aoMap.channel),lightMapUv:Gt&&x(b.lightMap.channel),bumpMapUv:dn&&x(b.bumpMap.channel),normalMapUv:Nt&&x(b.normalMap.channel),displacementMapUv:Pn&&x(b.displacementMap.channel),emissiveMapUv:Ft&&x(b.emissiveMap.channel),metalnessMapUv:on&&x(b.metalnessMap.channel),roughnessMapUv:pn&&x(b.roughnessMap.channel),anisotropyMapUv:tt&&x(b.anisotropyMap.channel),clearcoatMapUv:O&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:A&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&x(b.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Me&&x(b.diffuseRoughnessMap.channel),iridescenceMapUv:ge&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:fe&&x(b.sheenRoughnessMap.channel),specularMapUv:he&&x(b.specularMap.channel),specularColorMapUv:Re&&x(b.specularColorMap.channel),specularIntensityMapUv:z&&x(b.specularIntensityMap.channel),transmissionMapUv:me&&x(b.transmissionMap.channel),thicknessMapUv:de&&x(b.thicknessMap.channel),alphaMapUv:we&&x(b.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Nt||bn),vertexNormals:!!H.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!H.attributes.uv&&(et||we),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||H.attributes.normal===void 0&&Nt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:pe,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:Q,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:K.filter(Fe=>Fe.texture!==null).length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:Se,decodeVideoTexture:et&&b.map.isVideoTexture===!0&&Mt.getTransfer(b.map.colorSpace)===Ot,decodeVideoTextureEmissive:Ft&&b.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(b.emissiveMap.colorSpace)===Ot,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===zr,flipSided:b.side===ti,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ct&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&b.extensions.multiDraw===!0||pt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return st.vertexUv1s=f.has(1),st.vertexUv2s=f.has(2),st.vertexUv3s=f.has(3),f.clear(),st}function T(b){const P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(const k in b.defines)P.push(k),P.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(y(P,b),S(P,b),P.push(n.outputColorSpace)),P.push(b.customProgramCacheKey),P.join()}function y(b,P){b.push(P.precision),b.push(P.outputColorSpace),b.push(P.envMapMode),b.push(P.envMapPMREM),b.push(P.envMapMaxLod),b.push(P.envMapSize),b.push(P.mapUv),b.push(P.alphaMapUv),b.push(P.lightMapUv),b.push(P.aoMapUv),b.push(P.bumpMapUv),b.push(P.normalMapUv),b.push(P.displacementMapUv),b.push(P.emissiveMapUv),b.push(P.metalnessMapUv),b.push(P.roughnessMapUv),b.push(P.anisotropyMapUv),b.push(P.clearcoatMapUv),b.push(P.clearcoatNormalMapUv),b.push(P.clearcoatRoughnessMapUv),b.push(P.diffuseRoughnessMapUv),b.push(P.iridescenceMapUv),b.push(P.iridescenceThicknessMapUv),b.push(P.sheenColorMapUv),b.push(P.sheenRoughnessMapUv),b.push(P.specularMapUv),b.push(P.specularColorMapUv),b.push(P.specularIntensityMapUv),b.push(P.transmissionMapUv),b.push(P.thicknessMapUv),b.push(P.combine),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.numSunLights),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numSunLightShadows),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.numLightProbes),b.push(P.numLightProbeGrids),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function S(b,P){u.disableAll(),P.instancing&&u.enable(0),P.instancingColor&&u.enable(1),P.instancingMorph&&u.enable(2),P.matcap&&u.enable(3),P.envMap&&u.enable(4),P.normalMapObjectSpace&&u.enable(5),P.normalMapTangentSpace&&u.enable(6),P.clearcoat&&u.enable(7),P.iridescence&&u.enable(8),P.alphaTest&&u.enable(9),P.vertexColors&&u.enable(10),P.vertexAlphas&&u.enable(11),P.vertexUv1s&&u.enable(12),P.vertexUv2s&&u.enable(13),P.vertexUv3s&&u.enable(14),P.vertexTangents&&u.enable(15),P.anisotropy&&u.enable(16),P.alphaHash&&u.enable(17),P.batching&&u.enable(18),P.dispersion&&u.enable(19),P.retroreflection&&u.enable(24),P.diffuseRoughness&&u.enable(25),P.batchingColor&&u.enable(20),P.gradientMap&&u.enable(21),P.packedNormalMap&&u.enable(22),P.vertexNormals&&u.enable(23),b.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reversedDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),P.numLightProbeGrids>0&&u.enable(22),P.hasPositionAttribute&&u.enable(23),b.push(u.mask)}function w(b){const P=v[b.type];let k;if(P){const F=pr[P];k=VA.clone(F.uniforms)}else k=b.uniforms;return k}function D(b,P){let k=_.get(P);return k!==void 0?++k.usedTimes:(k=new vD(n,P,b,s),h.push(k),_.set(P,k)),k}function L(b){if(--b.usedTimes===0){const P=h.indexOf(b);h[P]=h[h.length-1],h.pop(),_.delete(b.cacheKey),b.destroy()}}function N(b){d.remove(b)}function I(){d.dispose()}return{getParameters:E,getProgramCacheKey:T,getUniforms:w,acquireProgram:D,releaseProgram:L,releaseShaderCache:N,programs:h,dispose:I}}function ED(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let d=n.get(u);return d===void 0&&(d={},n.set(u,d)),d}function r(u){n.delete(u)}function s(u,d,f){n.get(u)[d]=f}function o(){n=new WeakMap}return{has:e,get:t,remove:r,update:s,dispose:o}}function bD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function by(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function wy(){const n=[];let e=0;const t=[],r=[],s=[];function o(){e=0,t.length=0,r.length=0,s.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function d(v,x,E,T,y,S){let w=n[e];return w===void 0?(w={id:v.id,object:v,geometry:x,material:E,materialVariant:u(v),groupOrder:T,renderOrder:v.renderOrder,z:y,group:S},n[e]=w):(w.id=v.id,w.object=v,w.geometry=x,w.material=E,w.materialVariant=u(v),w.groupOrder=T,w.renderOrder=v.renderOrder,w.z=y,w.group=S),e++,w}function f(v,x,E,T,y,S,w){w.reversedDepth===!0&&(y=-y);const D=d(v,x,E,T,y,S);E.transmission>0?r.push(D):E.transparent===!0?s.push(D):t.push(D)}function h(v,x,E,T,y,S){const w=d(v,x,E,T,y,S);E.transmission>0?r.unshift(w):E.transparent===!0?s.unshift(w):t.unshift(w)}function _(v,x){t.length>1&&t.sort(v||bD),r.length>1&&r.sort(x||by),s.length>1&&s.sort(x||by)}function m(){for(let v=e,x=n.length;v<x;v++){const E=n[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:s,init:o,push:f,unshift:h,finish:m,sort:_}}function wD(){let n=new WeakMap;function e(r,s){const o=n.get(r);let u;return o===void 0?(u=new wy,n.set(r,[u])):s>=o.length?(u=new wy,o.push(u)):u=o[s],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function TD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ue,color:new bt};break;case"SpotLight":t={position:new ue,direction:new ue,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ue,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ue,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return n[e.id]=t,t}}}function RD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let AD=0;function CD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function PD(n){const e=new TD,t=RD(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ue);const s=new ue,o=new en,u=new en;function d(h){let _=0,m=0,v=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let x=0,E=0,T=0,y=0,S=0,w=0,D=0,L=0,N=0,I=0,b=0,P=0,k=0,F=0;h.sort(CD);for(let K=0,Y=h.length;K<Y;K++){const H=h[K],se=H.color,ae=H.intensity,ee=H.distance;let j=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===os?j=H.shadow.map.texture:j=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=se.r*ae,m+=se.g*ae,v+=se.b*ae;else if(H.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(H.sh.coefficients[$],ae);F++}else if(H.isSunLight){const $=e.get(H);if($.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Z=H.shadow,U=t.get(H);U.shadowIntensity=Z.intensity,U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),r.sunShadow[E]=U,r.sunShadowMap[E]=j;const Q=Z.getViewportCount();for(let Te=0;Te<Q;Te++)r.sunShadowMatrix[T+Te]=Z.getMatrix(Te),r.sunShadowCascade[T+Te]=Z._cascadeData[Te];T+=Q,E++}r.sun[x]=$,x++}else if(H.isDirectionalLight){const $=e.get(H);if($.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Z=H.shadow,U=t.get(H);U.shadowIntensity=Z.intensity,U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize=Z.mapSize,r.directionalShadow[y]=U,r.directionalShadowMap[y]=j,r.directionalShadowMatrix[y]=H.shadow.matrix,N++}r.directional[y]=$,y++}else if(H.isSpotLight){const $=e.get(H);$.position.setFromMatrixPosition(H.matrixWorld),$.color.copy(se).multiplyScalar(ae),$.distance=ee,$.coneCos=Math.cos(H.angle),$.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),$.decay=H.decay,r.spot[w]=$;const Z=H.shadow;if(H.map&&(r.spotLightMap[P]=H.map,P++,Z.updateMatrices(H),H.castShadow&&k++),r.spotLightMatrix[w]=Z.matrix,H.castShadow){const U=t.get(H);U.shadowIntensity=Z.intensity,U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize=Z.mapSize,r.spotShadow[w]=U,r.spotShadowMap[w]=j,b++}w++}else if(H.isRectAreaLight){const $=e.get(H);$.color.copy(se).multiplyScalar(ae),$.halfWidth.set(H.width*.5,0,0),$.halfHeight.set(0,H.height*.5,0),r.rectArea[D]=$,D++}else if(H.isPointLight){const $=e.get(H);if($.color.copy(H.color).multiplyScalar(H.intensity),$.distance=H.distance,$.decay=H.decay,H.castShadow){const Z=H.shadow,U=t.get(H);U.shadowIntensity=Z.intensity,U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize=Z.mapSize,U.shadowCameraNear=Z.camera.near,U.shadowCameraFar=Z.camera.far,r.pointShadow[S]=U,r.pointShadowMap[S]=j,r.pointShadowMatrix[S]=H.shadow.matrix,I++}r.point[S]=$,S++}else if(H.isHemisphereLight){const $=e.get(H);$.skyColor.copy(H.color).multiplyScalar(ae),$.groundColor.copy(H.groundColor).multiplyScalar(ae),r.hemi[L]=$,L++}}D>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=m,r.ambient[2]=v;const G=r.hash;(G.sunLength!==x||G.directionalLength!==y||G.pointLength!==S||G.spotLength!==w||G.rectAreaLength!==D||G.hemiLength!==L||G.numSunShadows!==E||G.numDirectionalShadows!==N||G.numPointShadows!==I||G.numSpotShadows!==b||G.numSpotMaps!==P||G.numLightProbes!==F)&&(r.sun.length=x,r.directional.length=y,r.spot.length=w,r.rectArea.length=D,r.point.length=S,r.hemi.length=L,r.sunShadow.length=E,r.sunShadowMap.length=E,r.sunShadowMatrix.length=T,r.sunShadowCascade.length=T,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.directionalShadowMatrix.length=N,r.pointShadow.length=I,r.pointShadowMap.length=I,r.pointShadowMatrix.length=I,r.spotShadow.length=b,r.spotShadowMap.length=b,r.spotLightMatrix.length=b+P-k,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=F,G.sunLength=x,G.directionalLength=y,G.pointLength=S,G.spotLength=w,G.rectAreaLength=D,G.hemiLength=L,G.numSunShadows=E,G.numDirectionalShadows=N,G.numPointShadows=I,G.numSpotShadows=b,G.numSpotMaps=P,G.numLightProbes=F,r.version=AD++)}function f(h,_){let m=0,v=0,x=0,E=0,T=0,y=0;const S=_.matrixWorldInverse;for(let w=0,D=h.length;w<D;w++){const L=h[w];if(L.isSunLight){const N=r.sun[m];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(S),m++}else if(L.isDirectionalLight){const N=r.directional[v];N.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(S),v++}else if(L.isSpotLight){const N=r.spot[E];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(S),E++}else if(L.isRectAreaLight){const N=r.rectArea[T];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(S),u.identity(),o.copy(L.matrixWorld),o.premultiply(S),u.extractRotation(o),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),T++}else if(L.isPointLight){const N=r.point[x];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const N=r.hemi[y];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(S),y++}}}return{setup:d,setupView:f,state:r}}function Ty(n){const e=new PD(n),t=[],r=[],s=[];function o(m){_.camera=m,t.length=0,r.length=0,s.length=0}function u(m){m.isLightProbeGrid?s.push(m):t.push(m)}function d(m){r.push(m)}function f(){e.setup(t),s.sort((m,v)=>m.priority-v.priority||m.id-v.id)}function h(m){e.setupView(t,m)}const _={lightsArray:t,shadowsArray:r,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:_,setupLights:f,setupLightsView:h,pushLight:u,pushShadow:d}}function LD(n){let e=new WeakMap;function t(s,o=0){const u=e.get(s);let d;return u===void 0?(d=new Ty(n),e.set(s,[d])):o>=u.length?(d=new Ty(n),u.push(d)):d=u[o],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const DD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ID=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ND=[new ue(1,0,0),new ue(-1,0,0),new ue(0,1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1)],OD=[new ue(0,-1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1),new ue(0,-1,0),new ue(0,-1,0)],Ry=new en,il=new ue,Uh=new ue;function UD(n,e,t){let r=new Rl;const s=new Tt,o=new Tt,u=new Qt,d=new YA,f=new KA,h={},_=t.maxTextureSize,m={[ss]:ti,[ti]:ss,[zr]:zr},v=new ls({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:DD,fragmentShader:ID}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new hs;E.setAttribute("position",new as(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new La(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rc;let S=this.type;this.render=function(I,b,P){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;this.type===D1&&(lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rc);const k=n.getRenderTarget(),F=n.getActiveCubeFace(),G=n.getActiveMipmapLevel(),K=n.state;K.setBlending(no),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const Y=S!==this.type;Y&&b.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(se=>se.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,se=I.length;H<se;H++){const ae=I[H],ee=ae.shadow;if(ee===void 0){lt("WebGLShadowMap:",ae,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;s.copy(ee.mapSize);const j=ee.getFrameExtents();s.multiply(j),o.copy(ee.mapSize),(s.x>_||s.y>_)&&(s.x>_&&(o.x=Math.floor(_/j.x),s.x=o.x*j.x,ee.mapSize.x=o.x),s.y>_&&(o.y=Math.floor(_/j.y),s.y=o.y*j.y,ee.mapSize.y=o.y));const $=n.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=$,ee.map===null||Y===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===cl){if(ae.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new Mr(s.x,s.y,{format:os,type:br,minFilter:Qn,magFilter:Qn,generateMipmaps:!1}),ee.map.texture.name=ae.name+".shadowMap",ee.map.depthTexture=new uo(s.x,s.y,_r),ee.map.depthTexture.name=ae.name+".shadowMapDepth",ee.map.depthTexture.format=Ca,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=An,ee.map.depthTexture.magFilter=An}else ae.isPointLight?(ee.map=new Pm(s.x),ee.map.depthTexture=new Cx(s.x,Er)):(ee.map=new Mr(s.x,s.y),ee.map.depthTexture=new uo(s.x,s.y,Er)),ee.map.depthTexture.name=ae.name+".shadowMap",ee.map.depthTexture.format=Ca,this.type===Rc?(ee.map.depthTexture.compareFunction=$?Sx:yx,ee.map.depthTexture.minFilter=Qn,ee.map.depthTexture.magFilter=Qn):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=An,ee.map.depthTexture.magFilter=An);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==s.x||ee.map.height!==s.y)&&ee.map.setSize(s.x,s.y);const Z=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();ae.isPointLight!==!0&&ee.updateMatrices(ae,P);const U=(ee.camera.layers.mask&4294967294)!==0?ee.camera.layers:P.layers;for(let Q=0;Q<Z;Q++){const Te=ee.getCamera(Q);if(ae.isPointLight){const te=ee.camera,ve=ee.matrix,_e=ae.distance||te.far;_e!==te.far&&(te.far=_e,te.updateProjectionMatrix()),il.setFromMatrixPosition(ae.matrixWorld),te.position.copy(il),Uh.copy(te.position),Uh.add(ND[Q]),te.up.copy(OD[Q]),te.lookAt(Uh),te.updateMatrixWorld(),ve.makeTranslation(-il.x,-il.y,-il.z),Ry.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(Ry,te.coordinateSystem,te.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)n.setRenderTarget(ee.map,Q),n.clear();else{Q===0&&(n.setRenderTarget(ee.map),n.clear());const te=ee.getViewport(Q);u.set(o.x*te.x,o.y*te.y,o.x*te.z,o.y*te.w),K.viewport(u)}r=ee.getFrustum(Q),L(b,P,Te,ae,U,this.type)}ee.isPointLightShadow!==!0&&this.type===cl&&w(ee,P),ee.needsUpdate=!1}S=this.type,y.needsUpdate=!1,n.setRenderTarget(k,F,G)};function w(I,b){const P=e.update(T);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,x.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),I.mapPass===null?I.mapPass=new Mr(s.x,s.y,{format:os,type:br}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),v.uniforms.shadow_pass.value=I.map.depthTexture,v.uniforms.resolution.value.set(I.map.width,I.map.height),v.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(b,null,P,v,T,null),x.uniforms.shadow_pass.value=I.mapPass.texture,x.uniforms.resolution.value.set(I.map.width,I.map.height),x.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(b,null,P,x,T,null)}function D(I,b,P,k){let F=null;const G=P.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)F=G;else if(F=P.isPointLight===!0?f:d,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const K=F.uuid,Y=b.uuid;let H=h[K];H===void 0&&(H={},h[K]=H);let se=H[Y];se===void 0&&(se=F.clone(),H[Y]=se,b.addEventListener("dispose",N)),F=se}if(F.visible=b.visible,F.wireframe=b.wireframe,k===cl?F.side=b.shadowSide!==null?b.shadowSide:b.side:F.side=b.shadowSide!==null?b.shadowSide:m[b.side],F.alphaMap=b.alphaMap,F.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,F.map=b.map,F.clipShadows=b.clipShadows,F.clippingPlanes=b.clippingPlanes,F.clipIntersection=b.clipIntersection,F.displacementMap=b.displacementMap,F.displacementScale=b.displacementScale,F.displacementBias=b.displacementBias,F.wireframeLinewidth=b.wireframeLinewidth,F.linewidth=b.linewidth,P.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const K=n.properties.get(F);K.light=P}return F}function L(I,b,P,k,F,G){if(I.visible===!1)return;if(I.layers.test(F)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&G===cl)&&(!I.frustumCulled||I.intersectsFrustum(r))){I.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,I.matrixWorld);const H=e.update(I),se=I.material;if(Array.isArray(se)){const ae=H.groups;for(let ee=0,j=ae.length;ee<j;ee++){const $=ae[ee],Z=se[$.materialIndex];if(Z&&Z.visible){const U=D(I,Z,k,G);I.onBeforeShadow(n,I,b,P,H,U,$),n.renderBufferDirect(P,null,H,U,I,$),I.onAfterShadow(n,I,b,P,H,U,$)}}}else if(se.visible){const ae=D(I,se,k,G);I.onBeforeShadow(n,I,b,P,H,ae,null),n.renderBufferDirect(P,null,H,ae,I,null),I.onAfterShadow(n,I,b,P,H,ae,null)}}const Y=I.children;for(let H=0,se=Y.length;H<se;H++)L(Y[H],b,P,k,F,G)}function N(I){I.target.removeEventListener("dispose",N);for(const P in h){const k=h[P],F=I.target.uuid;F in k&&(k[F].dispose(),delete k[F])}}}function FD(n,e){function t(){let z=!1;const me=new Qt;let de=null;const De=new Qt(0,0,0,0);return{setMask:function(we){de!==we&&!z&&(n.colorMask(we,we,we,we),de=we)},setLocked:function(we){z=we},setClear:function(we,Ce,qe,ct,Se){Se===!0&&(we*=ct,Ce*=ct,qe*=ct),me.set(we,Ce,qe,ct),De.equals(me)===!1&&(n.clearColor(we,Ce,qe,ct),De.copy(me))},reset:function(){z=!1,de=null,De.set(-1,0,0,0)}}}function r(){let z=!1,me=!1,de=null,De=null,we=null;return{setReversed:function(Ce){if(me!==Ce){const qe=e.get("EXT_clip_control");Ce?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),me=Ce;const ct=we;we=null,this.setClear(ct)}},getReversed:function(){return me},setTest:function(Ce){Ce?pe(n.DEPTH_TEST):ke(n.DEPTH_TEST)},setMask:function(Ce){de!==Ce&&!z&&(n.depthMask(Ce),de=Ce)},setFunc:function(Ce){if(me&&(Ce=fA[Ce]),De!==Ce){switch(Ce){case mp:n.depthFunc(n.NEVER);break;case gp:n.depthFunc(n.ALWAYS);break;case vp:n.depthFunc(n.LESS);break;case El:n.depthFunc(n.LEQUAL);break;case _p:n.depthFunc(n.EQUAL);break;case yp:n.depthFunc(n.GEQUAL);break;case Sp:n.depthFunc(n.GREATER);break;case xp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=Ce}},setLocked:function(Ce){z=Ce},setClear:function(Ce){we!==Ce&&(we=Ce,me&&(Ce=1-Ce),n.clearDepth(Ce))},reset:function(){z=!1,de=null,De=null,we=null,me=!1}}}function s(){let z=!1,me=null,de=null,De=null,we=null,Ce=null,qe=null,ct=null,Se=null;return{setTest:function(Je){z||(Je?pe(n.STENCIL_TEST):ke(n.STENCIL_TEST))},setMask:function(Je){me!==Je&&!z&&(n.stencilMask(Je),me=Je)},setFunc:function(Je,st,Fe){(de!==Je||De!==st||we!==Fe)&&(n.stencilFunc(Je,st,Fe),de=Je,De=st,we=Fe)},setOp:function(Je,st,Fe){(Ce!==Je||qe!==st||ct!==Fe)&&(n.stencilOp(Je,st,Fe),Ce=Je,qe=st,ct=Fe)},setLocked:function(Je){z=Je},setClear:function(Je){Se!==Je&&(n.clearStencil(Je),Se=Je)},reset:function(){z=!1,me=null,de=null,De=null,we=null,Ce=null,qe=null,ct=null,Se=null}}}const o=new t,u=new r,d=new s;let f={};const h=new WeakMap;let _={},m={},v={},x=new WeakMap,E=[],T=null,y=!1,S=null,w=null,D=null,L=null,N=null,I=null,b=null,P=new bt(0,0,0),k=0,F=!1,G=null,K=null,Y=null,H=null,se=null;const ae=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,j=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec($)[1]),ee=j>=1):$.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),ee=j>=2);let Z=null,U={};const Q=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),te=new Qt().fromArray(Q),ve=new Qt().fromArray(Te);function _e(z,me,de,De){const we=new Uint8Array(4),Ce=n.createTexture();n.bindTexture(z,Ce),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<de;qe++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(me+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return Ce}const Ee={};Ee[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),d.setClear(0),pe(n.DEPTH_TEST),u.setFunc(El),dn(!1),Nt(I_),pe(n.CULL_FACE),tn(no);function pe(z){_[z]!==!0&&(n.enable(z),_[z]=!0)}function ke(z){_[z]!==!1&&(n.disable(z),_[z]=!1)}function pt(z,me){return v[z]!==me?(n.bindFramebuffer(z,me),v[z]=me,z===n.DRAW_FRAMEBUFFER&&(v[n.FRAMEBUFFER]=me),z===n.FRAMEBUFFER&&(v[n.DRAW_FRAMEBUFFER]=me),!0):!1}function et(z,me){let de=E,De=!1;if(z){de=x.get(me),de===void 0&&(de=[],x.set(me,de));const we=z.textures;if(de.length!==we.length||de[0]!==n.COLOR_ATTACHMENT0){for(let Ce=0,qe=we.length;Ce<qe;Ce++)de[Ce]=n.COLOR_ATTACHMENT0+Ce;de.length=we.length,De=!0}}else de[0]!==n.BACK&&(de[0]=n.BACK,De=!0);De&&n.drawBuffers(de)}function vt(z){return T!==z?(n.useProgram(z),T=z,!0):!1}const St={[eo]:n.FUNC_ADD,[N1]:n.FUNC_SUBTRACT,[O1]:n.FUNC_REVERSE_SUBTRACT};St[U1]=n.MIN,St[F1]=n.MAX;const ut={[k1]:n.ZERO,[B1]:n.ONE,[z1]:n.SRC_COLOR,[nx]:n.SRC_ALPHA,[X1]:n.SRC_ALPHA_SATURATE,[W1]:n.DST_COLOR,[G1]:n.DST_ALPHA,[H1]:n.ONE_MINUS_SRC_COLOR,[ix]:n.ONE_MINUS_SRC_ALPHA,[$1]:n.ONE_MINUS_DST_COLOR,[V1]:n.ONE_MINUS_DST_ALPHA,[q1]:n.CONSTANT_COLOR,[Y1]:n.ONE_MINUS_CONSTANT_COLOR,[K1]:n.CONSTANT_ALPHA,[Z1]:n.ONE_MINUS_CONSTANT_ALPHA};function tn(z,me,de,De,we,Ce,qe,ct,Se,Je){if(z===no){y===!0&&(ke(n.BLEND),y=!1);return}if(y===!1&&(pe(n.BLEND),y=!0),z!==I1){if(z!==S||Je!==F){if((w!==eo||N!==eo)&&(n.blendEquation(n.FUNC_ADD),w=eo,N=eo),Je)switch(z){case gl:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case N_:n.blendFunc(n.ONE,n.ONE);break;case O_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case U_:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Pt("WebGLState: Invalid blending: ",z);break}else switch(z){case gl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case N_:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case O_:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case U_:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",z);break}D=null,L=null,I=null,b=null,P.set(0,0,0),k=0,S=z,F=Je}return}we=we||me,Ce=Ce||de,qe=qe||De,(me!==w||we!==N)&&(n.blendEquationSeparate(St[me],St[we]),w=me,N=we),(de!==D||De!==L||Ce!==I||qe!==b)&&(n.blendFuncSeparate(ut[de],ut[De],ut[Ce],ut[qe]),D=de,L=De,I=Ce,b=qe),(ct.equals(P)===!1||Se!==k)&&(n.blendColor(ct.r,ct.g,ct.b,Se),P.copy(ct),k=Se),S=z,F=!1}function Gt(z,me){z.side===zr?ke(n.CULL_FACE):pe(n.CULL_FACE);let de=z.side===ti;me&&(de=!de),dn(de),z.blending===gl&&z.transparent===!1?tn(no):tn(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),u.setFunc(z.depthFunc),u.setTest(z.depthTest),u.setMask(z.depthWrite),o.setMask(z.colorWrite);const De=z.stencilWrite;d.setTest(De),De&&(d.setMask(z.stencilWriteMask),d.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),d.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ft(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):ke(n.SAMPLE_ALPHA_TO_COVERAGE)}function dn(z){G!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),G=z)}function Nt(z){z!==P1?(pe(n.CULL_FACE),z!==K&&(z===I_?n.cullFace(n.BACK):z===L1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ke(n.CULL_FACE),K=z}function Pn(z){z!==Y&&(ee&&n.lineWidth(z),Y=z)}function Ft(z,me,de){z?(pe(n.POLYGON_OFFSET_FILL),(H!==me||se!==de)&&(H=me,se=de,u.getReversed()&&(me=-me,de=-de),n.polygonOffset(me,de))):ke(n.POLYGON_OFFSET_FILL)}function on(z){z?pe(n.SCISSOR_TEST):ke(n.SCISSOR_TEST)}function pn(z){z===void 0&&(z=n.TEXTURE0+ae-1),Z!==z&&(n.activeTexture(z),Z=z)}function bn(z,me,de){de===void 0&&(Z===null?de=n.TEXTURE0+ae-1:de=Z);let De=U[de];De===void 0&&(De={type:void 0,texture:void 0},U[de]=De),(De.type!==z||De.texture!==me)&&(Z!==de&&(n.activeTexture(de),Z=de),n.bindTexture(z,me||Ee[z]),De.type=z,De.texture=me)}function X(){const z=U[Z];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function wn(){try{n.compressedTexImage2D(...arguments)}catch(z){Pt("WebGLState:",z)}}function Lt(){try{n.compressedTexImage3D(...arguments)}catch(z){Pt("WebGLState:",z)}}function Dt(){try{n.texSubImage2D(...arguments)}catch(z){Pt("WebGLState:",z)}}function Ne(){try{n.texSubImage3D(...arguments)}catch(z){Pt("WebGLState:",z)}}function Yt(){try{n.compressedTexSubImage2D(...arguments)}catch(z){Pt("WebGLState:",z)}}function je(){try{n.compressedTexSubImage3D(...arguments)}catch(z){Pt("WebGLState:",z)}}function tt(){try{n.texStorage2D(...arguments)}catch(z){Pt("WebGLState:",z)}}function O(){try{n.texStorage3D(...arguments)}catch(z){Pt("WebGLState:",z)}}function A(){try{n.texImage2D(...arguments)}catch(z){Pt("WebGLState:",z)}}function ie(){try{n.texImage3D(...arguments)}catch(z){Pt("WebGLState:",z)}}function Me(z){return m[z]!==void 0?m[z]:n.getParameter(z)}function ge(z,me){m[z]!==me&&(n.pixelStorei(z,me),m[z]=me)}function Ae(z){te.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),te.copy(z))}function Le(z){ve.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),ve.copy(z))}function fe(z,me){let de=h.get(me);de===void 0&&(de=new WeakMap,h.set(me,de));let De=de.get(z);De===void 0&&(De=n.getUniformBlockIndex(me,z.name),n.uniformBlockBinding(me,De,De),de.set(z,De))}function he(z,me,de){const we=h.get(me).get(z);f[we]!==de&&(n.bindBufferBase(n.UNIFORM_BUFFER,we,de),f[we]=de)}function Re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),_={},m={},Z=null,U={},v={},f={},x=new WeakMap,E=[],T=null,y=!1,S=null,w=null,D=null,L=null,N=null,I=null,b=null,P=new bt(0,0,0),k=0,F=!1,G=null,K=null,Y=null,H=null,se=null,te.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),o.reset(),u.reset(),d.reset()}return{buffers:{color:o,depth:u,stencil:d},enable:pe,disable:ke,bindFramebuffer:pt,drawBuffers:et,useProgram:vt,setBlending:tn,setMaterial:Gt,setFlipSided:dn,setCullFace:Nt,setLineWidth:Pn,setPolygonOffset:Ft,setScissorTest:on,activeTexture:pn,bindTexture:bn,unbindTexture:X,compressedTexImage2D:wn,compressedTexImage3D:Lt,texImage2D:A,texImage3D:ie,pixelStorei:ge,getParameter:Me,updateUBOMapping:fe,uniformBlockBinding:he,texStorage2D:tt,texStorage3D:O,texSubImage2D:Dt,texSubImage3D:Ne,compressedTexSubImage2D:Yt,compressedTexSubImage3D:je,scissor:Ae,viewport:Le,reset:Re}}function kD(n,e,t,r,s,o,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Tt,_=new WeakMap,m=new Set;let v;const x=new WeakMap,E=new Set,T=new FinalizationRegistry(O=>E.delete(O));let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(O,A){return y?new OffscreenCanvas(O,A):Wc("canvas")}function w(O,A,ie){let Me=1;const ge=tt(O);if((ge.width>ie||ge.height>ie)&&(Me=ie/Math.max(ge.width,ge.height)),Me<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Ae=Math.floor(Me*ge.width),Le=Math.floor(Me*ge.height);v===void 0&&(v=S(Ae,Le));const fe=A?S(Ae,Le):v;return fe.width=Ae,fe.height=Le,fe.getContext("2d").drawImage(O,0,0,Ae,Le),lt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Ae+"x"+Le+")."),fe}else return"data"in O&&lt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),O;return O}function D(O){return O.generateMipmaps}function L(O){n.generateMipmap(O)}function N(O){return O.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?n.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function I(O,A,ie,Me,ge,Ae=!1){if(O!==null){if(n[O]!==void 0)return n[O];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Le;Me&&(Le=e.get("EXT_texture_norm16"),Le||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=A;if(A===n.RED&&(ie===n.FLOAT&&(fe=n.R32F),ie===n.HALF_FLOAT&&(fe=n.R16F),ie===n.UNSIGNED_BYTE&&(fe=n.R8),ie===n.UNSIGNED_SHORT&&Le&&(fe=Le.R16_EXT),ie===n.SHORT&&Le&&(fe=Le.R16_SNORM_EXT)),A===n.RED_INTEGER&&(ie===n.UNSIGNED_BYTE&&(fe=n.R8UI),ie===n.UNSIGNED_SHORT&&(fe=n.R16UI),ie===n.UNSIGNED_INT&&(fe=n.R32UI),ie===n.BYTE&&(fe=n.R8I),ie===n.SHORT&&(fe=n.R16I),ie===n.INT&&(fe=n.R32I)),A===n.RG&&(ie===n.FLOAT&&(fe=n.RG32F),ie===n.HALF_FLOAT&&(fe=n.RG16F),ie===n.UNSIGNED_BYTE&&(fe=n.RG8),ie===n.UNSIGNED_SHORT&&Le&&(fe=Le.RG16_EXT),ie===n.SHORT&&Le&&(fe=Le.RG16_SNORM_EXT)),A===n.RG_INTEGER&&(ie===n.UNSIGNED_BYTE&&(fe=n.RG8UI),ie===n.UNSIGNED_SHORT&&(fe=n.RG16UI),ie===n.UNSIGNED_INT&&(fe=n.RG32UI),ie===n.BYTE&&(fe=n.RG8I),ie===n.SHORT&&(fe=n.RG16I),ie===n.INT&&(fe=n.RG32I)),A===n.RGB_INTEGER&&(ie===n.UNSIGNED_BYTE&&(fe=n.RGB8UI),ie===n.UNSIGNED_SHORT&&(fe=n.RGB16UI),ie===n.UNSIGNED_INT&&(fe=n.RGB32UI),ie===n.BYTE&&(fe=n.RGB8I),ie===n.SHORT&&(fe=n.RGB16I),ie===n.INT&&(fe=n.RGB32I)),A===n.RGBA_INTEGER&&(ie===n.UNSIGNED_BYTE&&(fe=n.RGBA8UI),ie===n.UNSIGNED_SHORT&&(fe=n.RGBA16UI),ie===n.UNSIGNED_INT&&(fe=n.RGBA32UI),ie===n.BYTE&&(fe=n.RGBA8I),ie===n.SHORT&&(fe=n.RGBA16I),ie===n.INT&&(fe=n.RGBA32I)),A===n.RGB&&(ie===n.UNSIGNED_SHORT&&Le&&(fe=Le.RGB16_EXT),ie===n.SHORT&&Le&&(fe=Le.RGB16_SNORM_EXT),ie===n.UNSIGNED_INT_5_9_9_9_REV&&(fe=n.RGB9_E5),ie===n.UNSIGNED_INT_10F_11F_11F_REV&&(fe=n.R11F_G11F_B10F)),A===n.RGBA){const he=Ae?Vc:Mt.getTransfer(ge);ie===n.FLOAT&&(fe=n.RGBA32F),ie===n.HALF_FLOAT&&(fe=n.RGBA16F),ie===n.UNSIGNED_BYTE&&(fe=he===Ot?n.SRGB8_ALPHA8:n.RGBA8),ie===n.UNSIGNED_SHORT&&Le&&(fe=Le.RGBA16_EXT),ie===n.SHORT&&Le&&(fe=Le.RGBA16_SNORM_EXT),ie===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),ie===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function b(O,A){let ie;return O?A===null||A===Er||A===lo?ie=n.DEPTH24_STENCIL8:A===_r?ie=n.DEPTH32F_STENCIL8:A===wl&&(ie=n.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Er||A===lo?ie=n.DEPTH_COMPONENT24:A===_r?ie=n.DEPTH_COMPONENT32F:A===wl&&(ie=n.DEPTH_COMPONENT16),ie}function P(O,A){return D(O)===!0||O.isFramebufferTexture&&O.minFilter!==An&&O.minFilter!==Qn?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function k(O){const A=new WeakRef(O);r.get(O).__ref=A,E.add(A),T.register(O,A,A)}function F(O){const A=r.get(O).__ref;A!==void 0&&(E.delete(A),T.unregister(A))}function G(O){Y(O.target)}function K(O){H(O.target)}function Y(O){O.removeEventListener("dispose",G),F(O),ae(O),O.isVideoTexture&&_.delete(O),O.isHTMLTexture&&m.delete(O)}function H(O){O.removeEventListener("dispose",K),F(O),j(O)}function se(){for(const O of E){const A=O.deref();A!==void 0&&(A.isRenderTarget===!0?H(A):Y(A))}E.clear(),m.clear()}function ae(O){const A=r.get(O);if(A.__webglInit===void 0)return;const ie=O.source,Me=x.get(ie);if(Me){const ge=Me[A.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&ee(O),Object.keys(Me).length===0&&x.delete(ie)}r.remove(O)}function ee(O){const A=r.get(O);n.deleteTexture(A.__webglTexture);const ie=O.source,Me=x.get(ie);delete Me[A.__cacheKey],u.memory.textures--}function j(O){const A=r.get(O);A.__depthDisposeCallback&&A.__depthDisposeCallback();const ie=O.depthTexture;if(ie&&ie.renderTarget===O&&Y(ie),O.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(A.__webglFramebuffer[ge]))for(let Ae=0;Ae<A.__webglFramebuffer[ge].length;Ae++)n.deleteFramebuffer(A.__webglFramebuffer[ge][Ae]);else n.deleteFramebuffer(A.__webglFramebuffer[ge]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[ge])}else{if(Array.isArray(A.__webglFramebuffer))for(let ge=0;ge<A.__webglFramebuffer.length;ge++)n.deleteFramebuffer(A.__webglFramebuffer[ge]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ge=0;ge<A.__webglColorRenderbuffer.length;ge++)A.__webglColorRenderbuffer[ge]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[ge]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Me=O.textures;for(let ge=0,Ae=Me.length;ge<Ae;ge++){const Le=r.get(Me[ge]);Le.__webglTexture&&(n.deleteTexture(Le.__webglTexture),u.memory.textures--),r.remove(Me[ge])}r.remove(O)}let $=0;function Z(){$=0}function U(){return $}function Q(O){$=O}function Te(){const O=$;return O>=s.maxTextures&&lt("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,O}function te(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.mipmapsAutoUpdate),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function ve(O,A){const ie=r.get(O);if(O.isVideoTexture&&Yt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&ie.__version!==O.version){const Me=O.image;if(Me===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Gt(ie,O,A);return}}else O.isExternalTexture&&(ie.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture,n.TEXTURE0+A)}function _e(O,A){const ie=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ie.__version!==O.version){Gt(ie,O,A);return}else O.isExternalTexture&&(ie.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,ie.__webglTexture,n.TEXTURE0+A)}function Ee(O,A){const ie=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ie.__version!==O.version){Gt(ie,O,A);return}t.bindTexture(n.TEXTURE_3D,ie.__webglTexture,n.TEXTURE0+A)}function pe(O,A){const ie=r.get(O);if(O.version>0&&ie.__version!==O.version){dn(ie,O,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture,n.TEXTURE0+A)}const ke={[Mp]:n.REPEAT,[Hr]:n.CLAMP_TO_EDGE,[Ep]:n.MIRRORED_REPEAT},pt={[An]:n.NEAREST,[Q1]:n.NEAREST_MIPMAP_NEAREST,[Qu]:n.NEAREST_MIPMAP_LINEAR,[Qn]:n.LINEAR,[ch]:n.LINEAR_MIPMAP_NEAREST,[Ta]:n.LINEAR_MIPMAP_LINEAR},et={[iA]:n.NEVER,[xx]:n.ALWAYS,[rA]:n.LESS,[yx]:n.LEQUAL,[aA]:n.EQUAL,[Sx]:n.GEQUAL,[sA]:n.GREATER,[oA]:n.NOTEQUAL};function vt(O,A){if(A.type===_r&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Qn||A.magFilter===ch||A.magFilter===Qu||A.magFilter===Ta||A.minFilter===Qn||A.minFilter===ch||A.minFilter===Qu||A.minFilter===Ta)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(O,n.TEXTURE_WRAP_S,ke[A.wrapS]),n.texParameteri(O,n.TEXTURE_WRAP_T,ke[A.wrapT]),(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)&&n.texParameteri(O,n.TEXTURE_WRAP_R,ke[A.wrapR]),n.texParameteri(O,n.TEXTURE_MAG_FILTER,pt[A.magFilter]),n.texParameteri(O,n.TEXTURE_MIN_FILTER,pt[A.minFilter]),A.compareFunction&&(n.texParameteri(O,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(O,n.TEXTURE_COMPARE_FUNC,et[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===An||A.minFilter!==Qu&&A.minFilter!==Ta||A.type===_r&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");n.texParameterf(O,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function St(O,A){let ie=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",G),k(A));const Me=A.source;let ge=x.get(Me);ge===void 0&&(ge={},x.set(Me,ge));const Ae=te(A);if(Ae!==O.__cacheKey){ge[Ae]===void 0&&(ge[Ae]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,ie=!0),ge[Ae].usedTimes++;const Le=ge[O.__cacheKey];Le!==void 0&&(ge[O.__cacheKey].usedTimes--,Le.usedTimes===0&&ee(A)),O.__cacheKey=Ae,O.__webglTexture=ge[Ae].texture}return ie}function ut(O,A,ie){return Math.floor(Math.floor(O/ie)/A)}function tn(O,A,ie,Me){const Ae=O.updateRanges;if(Ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,A.width,A.height,ie,Me,A.data);else{Ae.sort((z,me)=>z.start-me.start);let Le=0;for(let z=1;z<Ae.length;z++){const me=Ae[Le],de=Ae[z],De=me.start+me.count,we=ut(de.start,A.width,4),Ce=ut(me.start,A.width,4);de.start<=De+1&&we===Ce&&ut(de.start+de.count-1,A.width,4)===we?me.count=Math.max(me.count,de.start+de.count-me.start):(++Le,Ae[Le]=de)}Ae.length=Le+1;const fe=t.getParameter(n.UNPACK_ROW_LENGTH),he=t.getParameter(n.UNPACK_SKIP_PIXELS),Re=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,A.width);for(let z=0,me=Ae.length;z<me;z++){const de=Ae[z],De=Math.floor(de.start/4),we=Math.ceil(de.count/4),Ce=De%A.width,qe=Math.floor(De/A.width),ct=we,Se=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(n.UNPACK_SKIP_ROWS,qe),t.texSubImage2D(n.TEXTURE_2D,0,Ce,qe,ct,Se,ie,Me,A.data)}O.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,fe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,he),t.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function Gt(O,A,ie){let Me=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Me=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Me=n.TEXTURE_3D);const ge=St(O,A),Ae=A.source;t.bindTexture(Me,O.__webglTexture,n.TEXTURE0+ie);const Le=r.get(Ae);if(Ae.version!==Le.__version||ge===!0){if(t.activeTexture(n.TEXTURE0+ie),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const Se=Mt.getPrimaries(Mt.workingColorSpace),Je=A.colorSpace===wa?null:Mt.getPrimaries(A.colorSpace),st=A.colorSpace===wa||Se===Je?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st)}t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment);let he=w(A.image,!1,s.maxTextureSize);he=je(A,he);const Re=o.convert(A.format,A.colorSpace),z=o.convert(A.type);let me=I(A.internalFormat,Re,z,A.normalized,A.colorSpace,A.isVideoTexture);vt(Me,A);let de;const De=A.mipmaps,we=A.isVideoTexture!==!0,Ce=Le.__version===void 0||ge===!0,qe=Ae.dataReady,ct=P(A,he);if(A.isDepthTexture)me=b(A.format===Ra,A.type),Ce&&(we?t.texStorage2D(n.TEXTURE_2D,1,me,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,me,he.width,he.height,0,Re,z,null));else if(A.isDataTexture)if(De.length>0){we&&Ce&&t.texStorage2D(n.TEXTURE_2D,ct,me,De[0].width,De[0].height);for(let Se=0,Je=De.length;Se<Je;Se++)de=De[Se],we?qe&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,de.width,de.height,Re,z,de.data):t.texImage2D(n.TEXTURE_2D,Se,me,de.width,de.height,0,Re,z,de.data);A.generateMipmaps=!1}else we?(Ce&&t.texStorage2D(n.TEXTURE_2D,ct,me,he.width,he.height),qe&&tn(A,he,Re,z)):t.texImage2D(n.TEXTURE_2D,0,me,he.width,he.height,0,Re,z,he.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){we&&Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ct,me,De[0].width,De[0].height,he.depth);for(let Se=0,Je=De.length;Se<Je;Se++)if(de=De[Se],A.format!==yr)if(Re!==null)if(we){if(qe)if(A.layerUpdates.size>0){const st=sy(de.width,de.height,A.format,A.type);for(const Fe of A.layerUpdates){const _t=de.data.subarray(Fe*st/de.data.BYTES_PER_ELEMENT,(Fe+1)*st/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,Fe,de.width,de.height,1,Re,_t)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,de.width,de.height,he.depth,Re,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Se,me,de.width,de.height,he.depth,0,de.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?qe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,de.width,de.height,he.depth,Re,z,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Se,me,de.width,de.height,he.depth,0,Re,z,de.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{we&&Ce&&t.texStorage2D(n.TEXTURE_2D,ct,me,De[0].width,De[0].height);for(let Se=0,Je=De.length;Se<Je;Se++)de=De[Se],A.format!==yr?Re!==null?we?qe&&t.compressedTexSubImage2D(n.TEXTURE_2D,Se,0,0,de.width,de.height,Re,de.data):t.compressedTexImage2D(n.TEXTURE_2D,Se,me,de.width,de.height,0,de.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?qe&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,de.width,de.height,Re,z,de.data):t.texImage2D(n.TEXTURE_2D,Se,me,de.width,de.height,0,Re,z,de.data)}else if(A.isDataArrayTexture)if(we){if(Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ct,me,he.width,he.height,he.depth),qe)if(A.layerUpdates.size>0){const Se=sy(he.width,he.height,A.format,A.type);for(const Je of A.layerUpdates){const st=he.data.subarray(Je*Se/he.data.BYTES_PER_ELEMENT,(Je+1)*Se/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Je,he.width,he.height,1,Re,z,st)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Re,z,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,me,he.width,he.height,he.depth,0,Re,z,he.data);else if(A.isData3DTexture)we?(Ce&&t.texStorage3D(n.TEXTURE_3D,ct,me,he.width,he.height,he.depth),qe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Re,z,he.data)):t.texImage3D(n.TEXTURE_3D,0,me,he.width,he.height,he.depth,0,Re,z,he.data);else if(A.isFramebufferTexture){if(Ce)if(we)t.texStorage2D(n.TEXTURE_2D,ct,me,he.width,he.height);else{let Se=he.width,Je=he.height;for(let st=0;st<ct;st++)t.texImage2D(n.TEXTURE_2D,st,me,Se,Je,0,Re,z,null),Se>>=1,Je>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in n){const Se=n.canvas;if(Se.hasAttribute("layoutsubtree")||Se.setAttribute("layoutsubtree","true"),he.parentNode!==Se){Se.appendChild(he),m.add(A),Se.onpaint=Je=>{const st=Je.changedElements;for(const Fe of m)st.includes(Fe.image)&&(Fe.needsUpdate=!0)},Se.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,he);else{const st=n.RGBA,Fe=n.RGBA,_t=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,st,Fe,_t,he)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(De.length>0){if(we&&Ce){const Se=tt(De[0]);t.texStorage2D(n.TEXTURE_2D,ct,me,Se.width,Se.height)}for(let Se=0,Je=De.length;Se<Je;Se++)de=De[Se],we?qe&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Re,z,de):t.texImage2D(n.TEXTURE_2D,Se,me,Re,z,de);A.generateMipmaps=!1}else if(we){if(Ce){const Se=tt(he);t.texStorage2D(n.TEXTURE_2D,ct,me,Se.width,Se.height)}qe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,z,he)}else t.texImage2D(n.TEXTURE_2D,0,me,Re,z,he);D(A)&&A.mipmapsAutoUpdate===!0&&L(Me),Le.__version=Ae.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function dn(O,A,ie){if(A.image.length!==6)return;const Me=St(O,A),ge=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+ie);const Ae=r.get(ge);if(ge.version!==Ae.__version||Me===!0){t.activeTexture(n.TEXTURE0+ie);const Le=Mt.getPrimaries(Mt.workingColorSpace),fe=A.colorSpace===wa?null:Mt.getPrimaries(A.colorSpace),he=A.colorSpace===wa||Le===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Re=A.isCompressedTexture||A.image[0].isCompressedTexture,z=A.image[0]&&A.image[0].isDataTexture,me=[];for(let Fe=0;Fe<6;Fe++)!Re&&!z?me[Fe]=w(A.image[Fe],!0,s.maxCubemapSize):me[Fe]=z?A.image[Fe].image:A.image[Fe],me[Fe]=je(A,me[Fe]);const de=me[0],De=o.convert(A.format,A.colorSpace),we=o.convert(A.type);let Ce=I(A.internalFormat,De,we,A.normalized,A.colorSpace);const qe=A.isVideoTexture!==!0,ct=Ae.__version===void 0||Me===!0,Se=ge.dataReady;let Je=P(A,de);vt(n.TEXTURE_CUBE_MAP,A);let st;if(A.isDepthTexture){if(Ce=b(A.format===Ra,A.type),ct)if(qe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Ce,de.width,de.height);else for(let Fe=0;Fe<6;Fe++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ce,de.width,de.height,0,De,we,null)}else if(Re){qe&&ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Je,Ce,de.width,de.height);for(let Fe=0;Fe<6;Fe++){st=me[Fe].mipmaps;for(let _t=0;_t<st.length;_t++){const Vt=st[_t];A.format!==yr?De!==null?qe?Se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,_t,0,0,Vt.width,Vt.height,De,Vt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,_t,Ce,Vt.width,Vt.height,0,Vt.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,_t,0,0,Vt.width,Vt.height,De,we,Vt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,_t,Ce,Vt.width,Vt.height,0,De,we,Vt.data)}}}else{if(st=A.mipmaps,qe&&ct){st.length>0&&Je++;const Fe=tt(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Je,Ce,Fe.width,Fe.height)}for(let Fe=0;Fe<6;Fe++)if(z){qe?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,me[Fe].width,me[Fe].height,De,we,me[Fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ce,me[Fe].width,me[Fe].height,0,De,we,me[Fe].data);for(let _t=0;_t<st.length;_t++){const Ln=st[_t].image[Fe].image;qe?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,_t+1,0,0,Ln.width,Ln.height,De,we,Ln.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,_t+1,Ce,Ln.width,Ln.height,0,De,we,Ln.data)}}else{qe?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,De,we,me[Fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ce,De,we,me[Fe]);for(let _t=0;_t<st.length;_t++){const Vt=st[_t];qe?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,_t+1,0,0,De,we,Vt.image[Fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,_t+1,Ce,De,we,Vt.image[Fe])}}}D(A)&&A.mipmapsAutoUpdate===!0&&L(n.TEXTURE_CUBE_MAP),Ae.__version=ge.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function Nt(O,A,ie,Me,ge,Ae){const Le=o.convert(ie.format,ie.colorSpace),fe=o.convert(ie.type),he=I(ie.internalFormat,Le,fe,ie.normalized,ie.colorSpace),Re=r.get(A),z=r.get(ie);if(z.__renderTarget=A,!Re.__hasExternalTextures){const me=Math.max(1,A.width>>Ae),de=Math.max(1,A.height>>Ae);ge===n.TEXTURE_3D||ge===n.TEXTURE_2D_ARRAY?t.texImage3D(ge,Ae,he,me,de,A.depth,0,Le,fe,null):t.texImage2D(ge,Ae,he,me,de,0,Le,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,O),Ne(A)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Me,ge,z.__webglTexture,0,Dt(A)):(ge===n.TEXTURE_2D||ge>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Me,ge,z.__webglTexture,Ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pn(O,A,ie){if(n.bindRenderbuffer(n.RENDERBUFFER,O),A.depthBuffer){const Me=A.depthTexture,ge=Me&&Me.isDepthTexture?Me.type:null,Ae=b(A.stencilBuffer,ge),Le=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ne(A)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Dt(A),Ae,A.width,A.height):ie?n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt(A),Ae,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Le,n.RENDERBUFFER,O)}else{const Me=A.textures;for(let ge=0;ge<Me.length;ge++){const Ae=Me[ge],Le=o.convert(Ae.format,Ae.colorSpace),fe=o.convert(Ae.type),he=I(Ae.internalFormat,Le,fe,Ae.normalized,Ae.colorSpace);Ne(A)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Dt(A),he,A.width,A.height):ie?n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt(A),he,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,he,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ft(O,A,ie){const Me=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=r.get(A.depthTexture);ge.__renderTarget=A;const Ae=Me?A.depthTexture.image[0]:A.depthTexture.image;(!ge.__webglTexture||Ae.width!==A.width||Ae.height!==A.height)&&(Ae.width=A.width,Ae.height=A.height,A.depthTexture.needsUpdate=!0),Me?pe(A.depthTexture,0):ve(A.depthTexture,0);const Le=ge.__webglTexture,fe=Dt(A),he=Me?n.TEXTURE_CUBE_MAP_POSITIVE_X+ie:n.TEXTURE_2D,Re=A.depthTexture.format===Ra?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(A.depthTexture.format===Ca)Ne(A)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,he,Le,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,Re,he,Le,0);else if(A.depthTexture.format===Ra)Ne(A)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,he,Le,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,Re,he,Le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function on(O){const A=r.get(O),ie=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){const Me=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Me){const ge=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Me.removeEventListener("dispose",ge)};Me.addEventListener("dispose",ge),A.__depthDisposeCallback=ge}A.__boundDepthTexture=Me}if(O.depthTexture&&!A.__autoAllocateDepthBuffer)if(ie)for(let Me=0;Me<6;Me++)Ft(A.__webglFramebuffer[Me],O,Me);else O.texture.mipmaps.length>0?Ft(A.__webglFramebuffer[0],O,0):Ft(A.__webglFramebuffer,O,0);else if(ie){A.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[Me]),A.__webglDepthbuffer[Me]===void 0)A.__webglDepthbuffer[Me]=n.createRenderbuffer(),Pn(A.__webglDepthbuffer[Me],O,!1);else{const ge=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=A.__webglDepthbuffer[Me];n.bindRenderbuffer(n.RENDERBUFFER,Ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,Ae)}}else if(O.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),Pn(A.__webglDepthbuffer,O,!1);else{const ge=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,Ae)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function pn(O,A,ie){const Me=r.get(O);A!==void 0&&Nt(Me.__webglFramebuffer,O,O.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ie!==void 0&&on(O)}function bn(O){const A=O.texture,ie=r.get(O),Me=r.get(A);O.addEventListener("dispose",K),k(O);const ge=O.textures,Ae=O.isWebGLCubeRenderTarget===!0,Le=ge.length>1;if(Le||(Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture()),Me.__version=A.version,u.memory.textures++),Ae){ie.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(A.mipmaps.length>0){ie.__webglFramebuffer[fe]=[];for(let he=0;he<A.mipmaps.length;he++)ie.__webglFramebuffer[fe][he]=n.createFramebuffer()}else ie.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(A.mipmaps.length>0){ie.__webglFramebuffer=[];for(let fe=0;fe<A.mipmaps.length;fe++)ie.__webglFramebuffer[fe]=n.createFramebuffer()}else ie.__webglFramebuffer=n.createFramebuffer();if(Le)for(let fe=0,he=ge.length;fe<he;fe++){const Re=r.get(ge[fe]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),u.memory.textures++)}if(O.samples>0&&Ne(O)===!1){ie.__webglMultisampledFramebuffer=n.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let fe=0;fe<ge.length;fe++){const he=ge[fe];ie.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ie.__webglColorRenderbuffer[fe]);const Re=o.convert(he.format,he.colorSpace),z=o.convert(he.type),me=I(he.internalFormat,Re,z,he.normalized,he.colorSpace,O.isXRRenderTarget===!0),de=Dt(O);n.renderbufferStorageMultisample(n.RENDERBUFFER,de,me,O.width,O.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,ie.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),O.depthBuffer&&(ie.__webglDepthRenderbuffer=n.createRenderbuffer(),Pn(ie.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(n.TEXTURE_CUBE_MAP,Me.__webglTexture),vt(n.TEXTURE_CUBE_MAP,A);for(let fe=0;fe<6;fe++)if(A.mipmaps.length>0)for(let he=0;he<A.mipmaps.length;he++)Nt(ie.__webglFramebuffer[fe][he],O,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,he);else Nt(ie.__webglFramebuffer[fe],O,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);D(A)?L(n.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(Le){for(let fe=0,he=ge.length;fe<he;fe++){const Re=ge[fe],z=r.get(Re);let me=n.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(me=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,z.__webglTexture),vt(me,Re),Nt(ie.__webglFramebuffer,O,Re,n.COLOR_ATTACHMENT0+fe,me,0),D(Re)&&L(me)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(fe=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,Me.__webglTexture),vt(fe,A),A.mipmaps.length>0)for(let he=0;he<A.mipmaps.length;he++)Nt(ie.__webglFramebuffer[he],O,A,n.COLOR_ATTACHMENT0,fe,he);else Nt(ie.__webglFramebuffer,O,A,n.COLOR_ATTACHMENT0,fe,0);D(A)?L(fe):A.mipmaps.length>0&&n.texParameteri(fe,n.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}O.depthBuffer&&on(O)}function X(O){const A=O.textures;for(let ie=0,Me=A.length;ie<Me;ie++){const ge=A[ie];if(D(ge)&&ge.mipmapsAutoUpdate===!0){const Ae=N(O),Le=r.get(ge).__webglTexture;t.bindTexture(Ae,Le),L(Ae),t.unbindTexture()}}}const wn=[];function Lt(O){if(O.samples>0){if(Ne(O)===!1){const A=O.textures,ie=O.width,Me=O.height;let ge=n.COLOR_BUFFER_BIT;const Ae=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Le=r.get(O),fe=A.length>1;if(fe)for(let Re=0;Re<A.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),O.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Re=0;Re<A.length;Re++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ge|=n.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ge|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Le.__webglColorRenderbuffer[Re]);const z=r.get(A[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,z,0)}n.blitFramebuffer(0,0,ie,Me,0,0,ie,Me,ge,n.NEAREST),f===!0&&(wn.length=0,wn.push(n.COLOR_ATTACHMENT0+Re),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&wn.push(Ae),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,wn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Re=0;Re<A.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,Le.__webglColorRenderbuffer[Re]);const z=r.get(A[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,z,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&f){const A=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function Dt(O){return Math.min(s.maxSamples,O.samples)}function Ne(O){const A=r.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Yt(O){const A=u.render.frame;_.get(O)!==A&&(_.set(O,A),O.update())}function je(O,A){const ie=O.colorSpace,Me=O.format,ge=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ie!==Gc&&ie!==wa&&(Mt.getTransfer(ie)===Ot?(Me!==yr||ge!==mi)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",ie)),A}function tt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=Te,this.resetTextureUnits=Z,this.getTextureUnits=U,this.setTextureUnits=Q,this.setTexture2D=ve,this.setTexture2DArray=_e,this.setTexture3D=Ee,this.setTextureCube=pe,this.rebindTextures=pn,this.setupRenderTarget=bn,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=on,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=Ne,this.dispose=se}function BD(n,e){function t(r,s=wa){let o;const u=Mt.getTransfer(s);if(r===mi)return n.UNSIGNED_BYTE;if(r===ym)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Sm)return n.UNSIGNED_SHORT_5_5_5_1;if(r===px)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===mx)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===fx)return n.BYTE;if(r===hx)return n.SHORT;if(r===wl)return n.UNSIGNED_SHORT;if(r===_m)return n.INT;if(r===Er)return n.UNSIGNED_INT;if(r===_r)return n.FLOAT;if(r===br)return n.HALF_FLOAT;if(r===gx)return n.ALPHA;if(r===vx)return n.RGB;if(r===yr)return n.RGBA;if(r===Ca)return n.DEPTH_COMPONENT;if(r===Ra)return n.DEPTH_STENCIL;if(r===_x)return n.RED;if(r===xm)return n.RED_INTEGER;if(r===os)return n.RG;if(r===Mm)return n.RG_INTEGER;if(r===Em)return n.RGBA_INTEGER;if(r===Ac||r===Cc||r===Pc||r===Lc)if(u===Ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ac)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ac)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===bp||r===wp||r===Tp||r===Rp)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===bp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Tp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Rp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ap||r===Cp||r===Pp||r===Lp||r===Dp||r===zc||r===Ip)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ap||r===Cp)return u===Ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Pp)return u===Ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(r===Lp)return o.COMPRESSED_R11_EAC;if(r===Dp)return o.COMPRESSED_SIGNED_R11_EAC;if(r===zc)return o.COMPRESSED_RG11_EAC;if(r===Ip)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Np||r===Op||r===Up||r===Fp||r===kp||r===Bp||r===zp||r===Hp||r===Gp||r===Vp||r===Wp||r===$p||r===Xp||r===qp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Np)return u===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Op)return u===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Up)return u===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fp)return u===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===kp)return u===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Bp)return u===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zp)return u===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hp)return u===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gp)return u===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vp)return u===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wp)return u===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===$p)return u===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xp)return u===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===qp)return u===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Yp||r===Kp||r===Zp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Yp)return u===Ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Kp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===jp||r===Jp||r===Hc||r===Qp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===jp)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Jp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Hc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Qp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===lo?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const zD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class GD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Px(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new ls({vertexShader:zD,fragmentShader:HD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new La(new Qc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VD extends fs{constructor(e,t){super();const r=this;let s=null,o=1,u=null,d="local-floor",f=1,h=null,_=null,m=null,v=null,x=null,E=null;const T=typeof XRWebGLBinding<"u",y=new GD,S={},w=t.getContextAttributes();let D=null,L=null;const N=[],I=[],b=new Tt;let P=null,k=null;const F=new Ki;F.viewport=new Qt;const G=new Ki;G.viewport=new Qt;const K=[F,G],Y=new tC;let H=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ve=N[te];return ve===void 0&&(ve=new yh,N[te]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(te){let ve=N[te];return ve===void 0&&(ve=new yh,N[te]=ve),ve.getGripSpace()},this.getHand=function(te){let ve=N[te];return ve===void 0&&(ve=new yh,N[te]=ve),ve.getHandSpace()};function ae(te){const ve=I.indexOf(te.inputSource);if(ve===-1)return;const _e=N[ve];_e!==void 0&&(_e.update(te.inputSource,te.frame,h||u),_e.dispatchEvent({type:te.type,data:te.inputSource}))}function ee(){s.removeEventListener("select",ae),s.removeEventListener("selectstart",ae),s.removeEventListener("selectend",ae),s.removeEventListener("squeeze",ae),s.removeEventListener("squeezestart",ae),s.removeEventListener("squeezeend",ae),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",j);for(let te=0;te<N.length;te++){const ve=I[te];ve!==null&&(I[te]=null,N[te].disconnect(ve))}H=null,se=null,y.reset();for(const te in S)delete S[te];if(e.setRenderTarget(D),x=null,v=null,m=null,s=null,L=null,Te.stop(),r.isPresenting=!1,e.setPixelRatio(P),e.setSize(b.width,b.height,!1),k!==null){const te=k.camera;te.fov=k.fov,te.zoom=k.zoom,te.updateProjectionMatrix(),k=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){o=te,r.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){d=te,r.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return m===null&&T&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(D=e.getRenderTarget(),s.addEventListener("select",ae),s.addEventListener("selectstart",ae),s.addEventListener("selectend",ae),s.addEventListener("squeeze",ae),s.addEventListener("squeezestart",ae),s.addEventListener("squeezeend",ae),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",j),w.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(b),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ee=null,pe=null;w.depth&&(pe=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=w.stencil?Ra:Ca,Ee=w.stencil?lo:Er);const ke={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:o};m=this.getBinding(),v=m.createProjectionLayer(ke),s.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new Mr(v.textureWidth,v.textureHeight,{format:yr,type:mi,depthTexture:new uo(v.textureWidth,v.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const _e={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new Mr(x.framebufferWidth,x.framebufferHeight,{format:yr,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(f),h=null,u=await s.requestReferenceSpace(d),Te.setContext(s),Te.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(te){for(let ve=0;ve<te.removed.length;ve++){const _e=te.removed[ve],Ee=I.indexOf(_e);Ee>=0&&(I[Ee]=null,N[Ee].disconnect(_e))}for(let ve=0;ve<te.added.length;ve++){const _e=te.added[ve];let Ee=I.indexOf(_e);if(Ee===-1){for(let ke=0;ke<N.length;ke++)if(ke>=I.length){I.push(_e),Ee=ke;break}else if(I[ke]===null){I[ke]=_e,Ee=ke;break}if(Ee===-1)break}const pe=N[Ee];pe&&pe.connect(_e)}}function $(te,ve){ve===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ve.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let ve=te.near,_e=te.far;y.texture!==null&&(y.depthNear>0&&(ve=y.depthNear),y.depthFar>0&&(_e=y.depthFar)),Y.near=G.near=F.near=ve,Y.far=G.far=F.far=_e,(H!==Y.near||se!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),H=Y.near,se=Y.far),Y.layers.mask=te.layers.mask|6,F.layers.mask=Y.layers.mask&-5,G.layers.mask=Y.layers.mask&-3;const Ee=te.parent,pe=Y.cameras;$(Y,Ee);for(let ke=0;ke<pe.length;ke++)$(pe[ke],Ee);Y.projectionMatrix.copy(F.projectionMatrix),Y.projectionMatrixInverse.copy(F.projectionMatrixInverse),k===null&&te.isPerspectiveCamera&&(k={camera:te,fov:te.fov,zoom:te.zoom}),Z(te,Y,Ee)};function Z(te,ve,_e){_e===null?te.matrix.copy(ve.matrixWorld):(te.matrix.copy(_e.matrixWorld),te.matrix.invert(),te.matrix.multiply(ve.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ve.projectionMatrix),te.projectionMatrixInverse.copy(ve.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=tm*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(v===null&&x===null))return f},this.setFoveation=function(te){f=te,v!==null&&(v.fixedFoveation=te),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(te){return S[te]};let U=null;function Q(te,ve){if(_=ve.getViewerPose(h||u),E=ve,_!==null){const _e=_.views;x!==null&&(e.setRenderTargetFramebuffer(L,x.framebuffer),e.setRenderTarget(L));let Ee=!1;_e.length!==Y.cameras.length&&(Y.cameras.length=0,Ee=!0);for(let et=0;et<_e.length;et++){const vt=_e[et];let St=null;if(x!==null)St=x.getViewport(vt);else{const tn=m.getViewSubImage(v,vt);St=tn.viewport,et===0&&(e.setRenderTargetTextures(L,tn.colorTexture,tn.depthStencilTexture),e.setRenderTarget(L))}let ut=K[et];ut===void 0&&(ut=new Ki,ut.layers.enable(et),ut.viewport=new Qt,K[et]=ut),ut.matrix.fromArray(vt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(vt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(St.x,St.y,St.width,St.height),et===0&&(Y.matrix.copy(ut.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ee===!0&&Y.cameras.push(ut)}const pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&T){m=r.getBinding();const et=m.getDepthInformation(_e[0]);et&&et.isValid&&et.texture&&y.init(et,s.renderState)}if(pe&&pe.includes("camera-access")&&T){e.state.unbindTexture(),m=r.getBinding();for(let et=0;et<_e.length;et++){const vt=_e[et].camera;if(vt){let St=S[vt];St||(St=new Px,S[vt]=St);const ut=m.getCameraImage(vt);St.sourceTexture=ut}}}}for(let _e=0;_e<N.length;_e++){const Ee=I[_e],pe=N[_e];Ee!==null&&pe!==void 0&&pe.update(Ee,ve,h||u)}U&&U(te,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),E=null}const Te=new Nx;Te.setAnimationLoop(Q),this.setAnimationLoop=function(te){U=te},this.dispose=function(){}}}const WD=new en,Wx=new dt;Wx.set(-1,0,0,0,1,0,0,0,1);function $D(n,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,Lx(n)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function s(y,S,w,D,L){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?o(y,S):S.isMeshLambertMaterial?(o(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(o(y,S),m(y,S)):S.isMeshPhongMaterial?(o(y,S),_(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(o(y,S),v(y,S),S.isMeshPhysicalMaterial&&x(y,S,L)):S.isMeshMatcapMaterial?(o(y,S),E(y,S)):S.isMeshDepthMaterial?o(y,S):S.isMeshDistanceMaterial?(o(y,S),T(y,S)):S.isMeshNormalMaterial?o(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?f(y,S,w,D):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function o(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===ti&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===ti&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const w=e.get(S),D=w.envMap,L=w.envMapRotation;D&&(y.envMap.value=D,y.envMapRotation.value.setFromMatrix4(WD.makeRotationFromEuler(L)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Wx),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function f(y,S,w,D){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*w,y.scale.value=D*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function _(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function m(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function v(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,w){y.ior.value=S.ior,S.diffuseRoughness>0&&(y.diffuseRoughness.value=S.diffuseRoughness,S.diffuseRoughnessMap&&(y.diffuseRoughnessMap.value=S.diffuseRoughnessMap,t(S.diffuseRoughnessMap,y.diffuseRoughnessMapTransform))),S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ti&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessMinimum,y.iridescenceThicknessMaximum.value=S.iridescenceThicknessMaximum,S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,S){S.matcap&&(y.matcap.value=S.matcap)}function T(y,S){const w=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:s}}function XD(n,e,t,r){let s={},o={};function u(w,D){const L=D.program;r.uniformBlockBinding(w,L,s[w.id])}function d(w,D){let L=s[w.id];L===void 0&&(E(w),L=f(w),s[w.id]=L,w.addEventListener("dispose",y));const N=D.program;r.updateUBOMapping(w,N);const I=e.render.frame;o[w.id]!==I&&(h(w),o[w.id]=I)}function f(w){const D=n.createBuffer(),L=w.__size,N=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,D),n.bufferData(n.UNIFORM_BUFFER,L,N),n.bindBuffer(n.UNIFORM_BUFFER,null),D}function h(w){const D=s[w.id],L=w.uniforms,N=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,D);for(let I=0,b=L.length;I<b;I++){const P=L[I];if(Array.isArray(P))for(let k=0,F=P.length;k<F;k++)_(P[k],I,k,N);else _(P,I,0,N)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(w,D,L,N){if(v(w,D,L,N)===!0){const I=w.__offset,b=w.value;if(Array.isArray(b)){let P=0;for(let k=0;k<b.length;k++){const F=b[k],G=T(F,!0);m(F,w.__data,P),P+=G.storage/Float32Array.BYTES_PER_ELEMENT}}else m(b,w.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,I,w.__data)}}function m(w,D,L){typeof w=="number"||typeof w=="boolean"?D[L]=w:w.isMatrix3?(D[L]=w.elements[0],D[L+1]=w.elements[1],D[L+2]=w.elements[2],D[L+3]=0,D[L+4]=w.elements[3],D[L+5]=w.elements[4],D[L+6]=w.elements[5],D[L+7]=0,D[L+8]=w.elements[6],D[L+9]=w.elements[7],D[L+10]=w.elements[8],D[L+11]=0):ArrayBuffer.isView(w)?D.set(w.subarray(0,D.length-L),L):w.toArray(D,L)}function v(w,D,L,N){const I=w.value,b=D+"_"+L;if(Array.isArray(I)){N[b]===void 0&&(N[b]=[]);const P=N[b];let k=!1;for(let F=0;F<I.length;F++)x(I[F],P,F)===!0&&(k=!0);return k}return x(I,N,b)}function x(w,D,L){if(D[L]===void 0)return typeof w=="number"||typeof w=="boolean"?D[L]=w:ArrayBuffer.isView(w)?D[L]=w.slice():D[L]=w.clone(),!0;{const N=D[L];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return D[L]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(N.equals(w)===!1)return N.copy(w),!0}}return!1}function E(w){const D=w.uniforms;let L=0;const N=16;for(let b=0,P=D.length;b<P;b++){const k=Array.isArray(D[b])?D[b]:[D[b]];for(let F=0,G=k.length;F<G;F++){const K=k[F],Y=Array.isArray(K.value)?K.value:[K.value],H=Array.isArray(D[b])||Array.isArray(K.value);let se=L;for(let ee=0,j=Y.length;ee<j;ee++){const $=Y[ee],Z=T($,H),U=L%N,Q=U%Z.boundary,Te=U+Q;L+=Q,Te!==0&&N-Te<Z.storage&&(L+=N-Te),ee===0&&(se=L),L+=Z.storage}const ae=K.type==="int"?Int32Array:K.type==="uint"?Uint32Array:Float32Array;K.__data=new ae((L-se)/Float32Array.BYTES_PER_ELEMENT),K.__offset=se}}const I=L%N;return I>0&&(L+=N-I),w.__size=L,w.__cache={},this}function T(w,D){const L={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(L.boundary=4,L.storage=4):w.isVector2?(L.boundary=8,L.storage=8):w.isVector3||w.isColor?(L.boundary=16,L.storage=12):w.isVector4?(L.boundary=16,L.storage=16):w.isMatrix3?(L.boundary=16,L.storage=48):w.isMatrix4?(L.boundary=16,L.storage=64):w.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(L.boundary=16,L.storage=w.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",w),D===!0&&(L.boundary=16,L.storage=Math.ceil(L.storage/16)*16),L}function y(w){const D=w.target;D.removeEventListener("dispose",y),n.deleteBuffer(s[D.id]),delete s[D.id],delete o[D.id]}function S(){for(const w in s)n.deleteBuffer(s[w]);s={},o={}}return{bind:u,update:d,dispose:S}}const qD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let cr=null;function YD(){return cr===null&&(cr=new zA(qD,16,16,os,br),cr.name="DFG_LUT",cr.minFilter=Qn,cr.magFilter=Qn,cr.wrapS=Hr,cr.wrapT=Hr,cr.generateMipmaps=!1,cr.needsUpdate=!0),cr}class KD{constructor(e={}){const{canvas:t=cA(),context:r=null,depth:s=!0,stencil:o=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:v=!1,outputBufferType:x=mi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const T=x,y=new Set([Em,Mm,xm]),S=new Set([mi,Er,wl,lo,ym,Sm]),w=new Uint32Array(4),D=new Int32Array(4),L={textures:[],min:[],max:[],resolution:[]};let N=null,I=null;const b=[],P=[];let k=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let G=!1,K=null,Y=null,H=null,se=null;this._outputColorSpace=hi;let ae=0,ee=0,j=null,$=-1,Z=null;const U=new Qt,Q=new Qt;let Te=null;const te=new bt(0);let ve=0,_e=t.width,Ee=t.height,pe=1,ke=null,pt=null;const et=new Qt(0,0,_e,Ee),vt=new Qt(0,0,_e,Ee);let St=!1;const ut=new Rl,tn=new Rm;let Gt=!1,dn=!1;const Nt=new en,Pn=new ue,Ft=new Qt,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pn=!1;function bn(){return j===null?pe:1}let X=r;function wn(C,V){return t.getContext(C,V)}let Lt,Dt,Ne,Yt,je,tt,O,A,ie,Me,ge,Ae,Le,fe,he,Re,z,me,de,De,we,Ce,qe;try{const C={alpha:!0,depth:s,stencil:o,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:_,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gm}`),t.addEventListener("webglcontextlost",Je,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),X===null){const V="webgl2";if(X=wn(V,C),X===null)throw wn(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ct()}catch(C){throw t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),Pt("WebGLRenderer: "+C.message),C}function ct(){Lt=new JL(X),Lt.init(),we=new BD(X,Lt),Dt=new HL(X,Lt,e,we),Ne=new FD(X,Lt),Dt.reversedDepthBuffer&&v&&Ne.buffers.depth.setReversed(!0),Y=X.createFramebuffer(),H=X.createFramebuffer(),se=X.createFramebuffer(),Yt=new t3(X),je=new ED,tt=new kD(X,Lt,Ne,je,Dt,we,Yt),O=new jL(F),A=new iC(X),Ce=new BL(X,A),ie=new QL(X,A,Yt,Ce),Me=new i3(X,ie,A,Ce,Yt),me=new n3(X,Dt,tt),he=new GL(je),ge=new MD(F,O,Lt,Dt,Ce,he),Ae=new $D(F,je),Le=new wD,fe=new LD(Lt),z=new kL(F,O,Ne,Me,E,f),Re=new UD(F,Me,Dt),qe=new XD(X,Yt,Dt,Ne),de=new zL(X,Lt,Yt),De=new e3(X,Lt,Yt),Yt.programs=ge.programs,F.capabilities=Dt,F.extensions=Lt,F.properties=je,F.renderLists=Le,F.shadowMap=Re,F.state=Ne,F.info=Yt}T!==mi&&(k=new a3(T,t.width,t.height,d,s,o));const Se=new VD(F,X);this.xr=Se,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const C=Lt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Lt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(C){C!==void 0&&(pe=C,this.setSize(_e,Ee,!1))},this.getSize=function(C){return C.set(_e,Ee)},this.setSize=function(C,V,oe=!0){if(Se.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=C,Ee=V,t.width=Math.floor(C*pe),t.height=Math.floor(V*pe),oe===!0&&(t.style.width=C+"px",t.style.height=V+"px"),k!==null&&k.setSize(t.width,t.height),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(_e*pe,Ee*pe).floor()},this.setDrawingBufferSize=function(C,V,oe){_e=C,Ee=V,pe=oe,t.width=Math.floor(C*oe),t.height=Math.floor(V*oe),this.setViewport(0,0,C,V)},this.setEffects=function(C){if(T===mi){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let V=0;V<C.length;V++)if(C[V].isOutputPass===!0){lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(U)},this.getViewport=function(C){return C.copy(et)},this.setViewport=function(C,V,oe,ne){C.isVector4?et.set(C.x,C.y,C.z,C.w):et.set(C,V,oe,ne),Ne.viewport(U.copy(et).multiplyScalar(bn()).round())},this.getScissor=function(C){return C.copy(vt)},this.setScissor=function(C,V,oe,ne){C.isVector4?vt.set(C.x,C.y,C.z,C.w):vt.set(C,V,oe,ne),Ne.scissor(Q.copy(vt).multiplyScalar(bn()).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(C){Ne.setScissorTest(St=C)},this.setOpaqueSort=function(C){ke=C},this.setTransparentSort=function(C){pt=C},this.getClearColor=function(C){return C.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor(...arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha(...arguments)},this.clear=function(C=!0,V=!0,oe=!0){let ne=0;if(C){let J=!1;if(j!==null){const Oe=j.texture.format;J=y.has(Oe)}if(J){const Oe=j.texture.type,Ge=S.has(Oe),Ie=z.getClearColor(),Ue=z.getClearAlpha(),Ve=Ie.r,nt=Ie.g,ft=Ie.b;Ge?(w[0]=Ve,w[1]=nt,w[2]=ft,w[3]=Ue,X.clearBufferuiv(X.COLOR,0,w)):(D[0]=Ve,D[1]=nt,D[2]=ft,D[3]=Ue,X.clearBufferiv(X.COLOR,0,D))}else ne|=X.COLOR_BUFFER_BIT}V&&(ne|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ne|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&X.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),K=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),z.dispose(),Le.dispose(),fe.dispose(),tt.dispose(),je.dispose(),O.dispose(),Me.dispose(),ie.dispose(),Ce.dispose(),qe.dispose(),ge.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Na),Se.removeEventListener("sessionend",Si),ii.stop()};function Je(C){C.preventDefault(),B_("WebGLRenderer: Context Lost."),G=!0}function st(){B_("WebGLRenderer: Context Restored."),G=!1;const C=Yt.autoReset,V=Re.enabled,oe=Re.autoUpdate,ne=Re.needsUpdate,J=Re.type;ct(),Yt.autoReset=C,Re.enabled=V,Re.autoUpdate=oe,Re.needsUpdate=ne,Re.type=J}function Fe(C){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function _t(C){const V=C.target;V.removeEventListener("dispose",_t),Vt(V)}function Vt(C){Ln(C),je.remove(C)}function Ln(C){const V=je.get(C).programs;V!==void 0&&(V.forEach(function(oe){ge.releaseProgram(oe)}),C.isShaderMaterial&&ge.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,oe,ne,J,Oe){V===null&&(V=on);const Ge=J.isMesh&&J.matrixWorld.determinantAffine()<0,Ie=Qr(C,V,oe,ne,J);Ne.setMaterial(ne,Ge);let Ue=oe.index,Ve=1;if(ne.wireframe===!0){if(Ue=ie.getWireframeAttribute(oe),Ue===void 0)return;Ve=2}const nt=oe.drawRange,ft=oe.attributes.position;let We=nt.start*Ve,ht=(nt.start+nt.count)*Ve;Oe!==null&&(We=Math.max(We,Oe.start*Ve),ht=Math.min(ht,(Oe.start+Oe.count)*Ve)),Ue!==null?(We=Math.max(We,0),ht=Math.min(ht,Ue.count)):ft!=null&&(We=Math.max(We,0),ht=Math.min(ht,ft.count));const Ut=ht-We;if(Ut<0||Ut===1/0)return;Ce.setup(J,ne,Ie,oe,Ue);let At,wt=de;if(Ue!==null&&(At=A.get(Ue),wt=De,wt.setIndex(At)),J.isMesh)ne.wireframe===!0?(Ne.setLineWidth(ne.wireframeLinewidth*bn()),wt.setMode(X.LINES)):wt.setMode(X.TRIANGLES);else if(J.isLine){let Wt=ne.linewidth;Wt===void 0&&(Wt=1),Ne.setLineWidth(Wt*bn()),J.isLineSegments?wt.setMode(X.LINES):J.isLineLoop?wt.setMode(X.LINE_LOOP):wt.setMode(X.LINE_STRIP)}else J.isPoints?wt.setMode(X.POINTS):J.isSprite&&wt.setMode(X.TRIANGLES);if(J.isBatchedMesh)if(Lt.get("WEBGL_multi_draw"))wt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Wt=J._multiDrawStarts,$e=J._multiDrawCounts,nn=J._multiDrawCount,Ye=Ue?A.get(Ue).bytesPerElement:1,ri=je.get(ne).currentProgram.getUniforms();for(let rn=0;rn<nn;rn++)ri.setValue(X,"_gl_DrawID",rn),wt.render(Wt[rn]/Ye,$e[rn])}else if(J.isInstancedMesh)wt.renderInstances(We,Ut,J.count);else if(oe.isInstancedBufferGeometry){const Wt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,$e=Math.min(oe.instanceCount,Wt);wt.renderInstances(We,Ut,$e)}else wt.render(We,Ut)};function Kr(C,V,oe,ne){K!==null&&C.isNodeMaterial&&K.setObject(ne,C),Gt===!0&&he.setState(C,oe,!1),C.transparent===!0&&C.side===zr&&C.forceSinglePass===!1?(C.side=ti,C.needsUpdate=!0,rr(C,V,ne),C.side=ss,C.needsUpdate=!0,rr(C,V,ne),C.side=zr):rr(C,V,ne)}this.compile=function(C,V,oe=null){oe===null&&(oe=C),K!==null&&K.renderStart(C,V,oe),I=fe.get(oe),I.init(V),P.push(I),oe.traverseVisible(function(J){J.isLight&&J.layers.test(V.layers)&&(I.pushLight(J),J.castShadow&&I.pushShadow(J))}),C!==oe&&C.traverseVisible(function(J){J.isLight&&J.layers.test(V.layers)&&(I.pushLight(J),J.castShadow&&I.pushShadow(J))}),I.setupLights(),K!==null&&K.updateLights(I.state.lightsArray),dn=this.localClippingEnabled,Gt=he.init(this.clippingPlanes,dn),Gt===!0&&he.setGlobalState(this.clippingPlanes,V),K!==null&&Re.render(I.state.shadowsArray,oe,V);const ne=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Oe=J.material;if(Oe)if(Array.isArray(Oe))for(let Ge=0;Ge<Oe.length;Ge++){const Ie=Oe[Ge];Kr(Ie,oe,V,J),ne.add(Ie)}else Kr(Oe,oe,V,J),ne.add(Oe)}),I=P.pop(),K!==null&&K.renderEnd(),ne},this.compileAsync=function(C,V,oe=null){const ne=this.compile(C,V,oe);return new Promise(J=>{function Oe(){if(ne.forEach(function(Ge){const Ue=je.get(Ge).currentProgram;(Ue===void 0||Ue.isReady())&&ne.delete(Ge)}),ne.size===0){J(C);return}setTimeout(Oe,10)}Lt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let nr=null;function Zr(C){nr&&nr(C)}function Na(){ii.stop()}function Si(){ii.start()}const ii=new Nx;ii.setAnimationLoop(Zr),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(C){nr=C,Se.setAnimationLoop(C),C===null?ii.stop():ii.start()},Se.addEventListener("sessionstart",Na),Se.addEventListener("sessionend",Si),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;K!==null&&K.renderStart(C,V);const oe=Se.enabled===!0&&Se.isPresenting===!0,ne=k!==null&&(j===null||oe)&&k.begin(F,j);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(V),V=Se.getCamera()),C.isScene===!0&&C.onBeforeRender(F,C,V,j),I=fe.get(C,P.length),I.init(V),I.state.textureUnits=tt.getTextureUnits(),P.push(I),Nt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),V.isArrayCamera?tn.setFromArrayCamera(V):ut.setFromProjectionMatrix(Nt,ji,V.reversedDepth),dn=this.localClippingEnabled,Gt=he.init(this.clippingPlanes,dn),N=Le.get(C,b.length),N.init(),b.push(N),this.info.render.frame++,Se.enabled===!0&&Se.isPresenting===!0){const Ge=F.xr.getDepthSensingMesh();Ge!==null&&jr(Ge,V,-1/0,F.sortObjects)}jr(C,V,0,F.sortObjects),N.finish(),K!==null&&K.updateLights(I.state.lightsArray),F.sortObjects===!0&&N.sort(ke,pt),pn=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,pn&&z.addToRenderList(N,C),this.info.autoReset===!0&&this.info.reset(),Gt===!0&&he.beginShadows();const J=I.state.shadowsArray;if(Re.render(J,C,V),Gt===!0&&he.endShadows(),(ne&&k.hasRenderPass())===!1){const Ge=N.opaque,Ie=N.transmissive;if(I.setupLights(),V.isArrayCamera){const Ue=V.cameras;if(Ie.length>0)for(let Ve=0,nt=Ue.length;Ve<nt;Ve++){const ft=Ue[Ve];Jr(Ge,Ie,C,ft)}pn&&z.render(C);for(let Ve=0,nt=Ue.length;Ve<nt;Ve++){const ft=Ue[Ve];ir(N,C,ft,ft.viewport)}}else Ie.length>0&&Jr(Ge,Ie,C,V),pn&&z.render(C),ir(N,C,V)}j!==null&&ee===0&&(tt.updateMultisampleRenderTarget(j),tt.updateRenderTargetMipmap(j)),ne&&k.end(F),C.isScene===!0&&C.onAfterRender(F,C,V),Ce.resetDefaultState(),$=-1,Z=null,P.pop(),P.length>0?(I=P[P.length-1],tt.setTextureUnits(I.state.textureUnits),Gt===!0&&he.setGlobalState(F.clippingPlanes,I.state.camera)):I=null,b.pop(),b.length>0?N=b[b.length-1]:N=null,K!==null&&K.renderEnd()};function jr(C,V,oe,ne){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)I.pushLight(C),C.castShadow&&I.pushShadow(C);else if(C.isSprite){const Ge=V.isArrayCamera?tn:ut;if(!C.frustumCulled||C.intersectsFrustum(Ge)){ne&&Ft.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Nt);const Ie=Me.update(C),Ue=C.material;Ue.visible&&N.push(C,Ie,Ue,oe,Ft.z,null,V)}}else if(C.isMesh||C.isLine||C.isPoints){const Ge=V.isArrayCamera?tn:ut;if(!C.frustumCulled||C.intersectsFrustum(Ge)){const Ie=Me.update(C),Ue=C.material;if(ne&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ft.copy(C.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Ft.copy(Ie.boundingSphere.center)),Ft.applyMatrix4(C.matrixWorld).applyMatrix4(Nt)),Array.isArray(Ue)){const Ve=Ie.groups;for(let nt=0,ft=Ve.length;nt<ft;nt++){const We=Ve[nt],ht=Ue[We.materialIndex];ht&&ht.visible&&N.push(C,Ie,ht,oe,Ft.z,We,V)}}else Ue.visible&&N.push(C,Ie,Ue,oe,Ft.z,null,V)}}}const Oe=C.children;for(let Ge=0,Ie=Oe.length;Ge<Ie;Ge++)jr(Oe[Ge],V,oe,ne)}function ir(C,V,oe,ne){const{opaque:J,transmissive:Oe,transparent:Ge}=C;I.setupLightsView(oe),Gt===!0&&he.setGlobalState(F.clippingPlanes,oe),ne&&Ne.viewport(U.copy(ne)),J.length>0&&ze(J,V,oe),Oe.length>0&&ze(Oe,V,oe),Ge.length>0&&ze(Ge,V,oe),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Jr(C,V,oe,ne){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ne.id]===void 0){const We=Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ne.id]=new Mr(1,1,{generateMipmaps:!0,type:We?br:mi,minFilter:Ta,samples:Math.max(4,Dt.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const Oe=I.state.transmissionRenderTarget[ne.id],Ge=ne.viewport||U;Oe.setSize(Ge.z*F.transmissionResolutionScale,Ge.w*F.transmissionResolutionScale);const Ie=F.getRenderTarget(),Ue=F.getActiveCubeFace(),Ve=F.getActiveMipmapLevel();F.setRenderTarget(Oe),F.getClearColor(te),ve=F.getClearAlpha(),ve<1&&F.setClearColor(16777215,.5),F.clear(),pn&&z.render(oe);const nt=F.toneMapping;F.toneMapping=Vr;const ft=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),I.setupLightsView(ne),Gt===!0&&he.setGlobalState(F.clippingPlanes,ne),ze(C,oe,ne),tt.updateMultisampleRenderTarget(Oe),tt.updateRenderTargetMipmap(Oe),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let ht=0,Ut=V.length;ht<Ut;ht++){const At=V[ht],{object:wt,geometry:Wt,material:$e,group:nn}=At;if($e.side===zr&&wt.layers.test(ne.layers)){const Ye=$e.side;$e.side=ti,$e.needsUpdate=!0,Oa(wt,oe,ne,Wt,$e,nn),$e.side=Ye,$e.needsUpdate=!0,We=!0}}We===!0&&(tt.updateMultisampleRenderTarget(Oe),tt.updateRenderTargetMipmap(Oe))}F.setRenderTarget(Ie,Ue,Ve),F.setClearColor(te,ve),ft!==void 0&&(ne.viewport=ft),F.toneMapping=nt}function ze(C,V,oe){const ne=V.isScene===!0?V.overrideMaterial:null;for(let J=0,Oe=C.length;J<Oe;J++){const Ge=C[J],{object:Ie,geometry:Ue,group:Ve}=Ge;let nt=Ge.material;nt.allowOverride===!0&&ne!==null&&(nt=ne),Ie.layers.test(oe.layers)&&Oa(Ie,V,oe,Ue,nt,Ve)}}function Oa(C,V,oe,ne,J,Oe){K!==null&&J.isNodeMaterial&&K.setObject(C,J),C.onBeforeRender(F,V,oe,ne,J,Oe),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(F,V,oe,ne,C,Oe),J.transparent===!0&&J.side===zr&&J.forceSinglePass===!1?(J.side=ti,J.needsUpdate=!0,F.renderBufferDirect(oe,V,ne,J,C,Oe),J.side=ss,J.needsUpdate=!0,F.renderBufferDirect(oe,V,ne,J,C,Oe),J.side=zr):F.renderBufferDirect(oe,V,ne,J,C,Oe),C.onAfterRender(F,V,oe,ne,J,Oe)}function Bn(C){let V=0;for(const oe of C)oe.texture!==null&&V++;return V}function rr(C,V,oe){V.isScene!==!0&&(V=on);const ne=je.get(C),J=I.state.lights,Oe=I.state.shadowsArray,Ge=J.state.version,Ie=ge.getParameters(C,J.state,Oe,V,oe,I.state.lightProbeGridArray),Ue=ge.getProgramCacheKey(Ie);let Ve=ne.programs;ne.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?V.environment:null,ne.fog=V.fog;const nt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ne.envMap=O.get(C.envMap||ne.environment,nt),ne.envMapRotation=ne.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,Ve===void 0&&(C.addEventListener("dispose",_t),Ve=new Map,ne.programs=Ve,ne.programVariants=new Map);let ft=Ve.get(Ue);if(ft!==void 0){if(ne.currentProgram===ft&&ne.lightsStateVersion===Ge)return Ua(C,Ie),ft}else Ie.uniforms=ge.getUniforms(C),K!==null&&C.isNodeMaterial&&K.build(C,oe,Ie),C.onBeforeCompile(Ie,F),ft=ge.acquireProgram(Ie,Ue),Ve.set(Ue,ft),ne.uniforms=Ie.uniforms;const We=ne.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=he.uniform),Ua(C,Ie),ne.needsLights=wr(C),ne.lightsStateVersion=Ge,ne.needsLights&&(We.ambientLightColor.value=J.state.ambient,We.lightProbe.value=J.state.probe,We.sunLights.value=J.state.sun,We.sunLightShadows.value=J.state.sunShadow,We.directionalLights.value=J.state.directional,We.directionalLightShadows.value=J.state.directionalShadow,We.spotLights.value=J.state.spot,We.spotLightShadows.value=J.state.spotShadow,We.rectAreaLights.value=J.state.rectArea,We.ltc_1.value=J.state.rectAreaLTC1,We.ltc_2.value=J.state.rectAreaLTC2,We.pointLights.value=J.state.point,We.pointLightShadows.value=J.state.pointShadow,We.hemisphereLights.value=J.state.hemi,We.sunShadowMatrix.value=J.state.sunShadowMatrix,We.sunShadowCascade.value=J.state.sunShadowCascade,We.directionalShadowMatrix.value=J.state.directionalShadowMatrix,We.spotLightMatrix.value=J.state.spotLightMatrix,We.spotLightMap.value=J.state.spotLightMap,We.pointShadowMatrix.value=J.state.pointShadowMatrix),ne.numLightProbeGrids=Bn(I.state.lightProbeGridArray),ne.currentProgram=ft,ne.uniformsList=null,ft}function ms(C,V,oe,ne,J){const Oe=je.get(C),Ge=Oe.currentProgram.id+","+ne+","+J;let Ie=Oe.programVariants.get(Ge);return Ie===void 0?(Ie=rr(C,V,oe),Oe.programVariants.set(Ge,Ie)):(Oe.currentProgram=Ie,Oe.uniformsList=null,Oe.outputColorSpace=ne,Oe.toneMapping=J),Ie}function kt(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=Ic.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function Ua(C,V){const oe=je.get(C);oe.outputColorSpace=V.outputColorSpace,oe.batching=V.batching,oe.batchingColor=V.batchingColor,oe.instancing=V.instancing,oe.instancingColor=V.instancingColor,oe.instancingMorph=V.instancingMorph,oe.skinning=V.skinning,oe.morphTargets=V.morphTargets,oe.morphNormals=V.morphNormals,oe.morphColors=V.morphColors,oe.morphTargetsCount=V.morphTargetsCount,oe.numClippingPlanes=V.numClippingPlanes,oe.numIntersection=V.numClipIntersection,oe.vertexAlphas=V.vertexAlphas,oe.vertexTangents=V.vertexTangents,oe.toneMapping=V.toneMapping}function Qr(C,V,oe,ne,J){V.isScene!==!0&&(V=on),tt.resetTextureUnits();const Oe=V.fog,Ge=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?V.environment:null,Ie=j===null?F.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Mt.workingColorSpace,Ue=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Ve=O.get(ne.envMap||Ge,Ue),nt=ne.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ft=!!oe.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),We=!!oe.morphAttributes.position,ht=!!oe.morphAttributes.normal,Ut=!!oe.morphAttributes.color;let At=Vr;ne.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(At=F.toneMapping);const wt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Wt=wt!==void 0?wt.length:0,$e=je.get(ne),nn=I.state.lights;if(Gt===!0&&(dn===!0||C!==Z)){const xt=C===Z&&ne.id===$;he.setState(ne,C,xt)}let Ye=!1,ri=!1;ne.version===$e.__version?$e.needsLights&&$e.lightsStateVersion!==nn.state.version||J.isBatchedMesh&&$e.batching===!1||!J.isBatchedMesh&&$e.batching===!0||J.isBatchedMesh&&$e.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&$e.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&$e.instancing===!1||!J.isInstancedMesh&&$e.instancing===!0||J.isSkinnedMesh&&$e.skinning===!1||!J.isSkinnedMesh&&$e.skinning===!0||J.isInstancedMesh&&$e.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&$e.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&$e.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&$e.instancingMorph===!1&&J.morphTexture!==null||$e.envMap!==Ve||ne.fog===!0&&$e.fog!==Oe||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==he.numPlanes||$e.numIntersection!==he.numIntersection)||$e.vertexAlphas!==nt||$e.vertexTangents!==ft||$e.morphTargets!==We||$e.morphNormals!==ht||$e.morphColors!==Ut||$e.morphTargetsCount!==Wt||$e.numLightProbeGrids!==Bn(I.state.lightProbeGridArray)?Ye=!0:($e.outputColorSpace!==Ie||$e.toneMapping!==At)&&(ri=!0):(Ye=!0,$e.__version=ne.version);let rn=$e.currentProgram;(Ye===!0||ri===!0)&&(rn=ri===!0?ms(ne,V,J,Ie,At):rr(ne,V,J),K&&ne.isNodeMaterial&&K.onUpdateProgram(ne,rn,$e));let Ii=!1,$n=!1,ai=!1;const gt=rn.getUniforms(),Kt=$e.uniforms;if(Ne.useProgram(rn.program)&&(Ii=!0,$n=!0,ai=!0),ne.id!==$&&($=ne.id,$n=!0),Ii||Z!==C){Ne.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),gt.setValue(X,"projectionMatrix",C.projectionMatrix),gt.setValue(X,"viewMatrix",C.matrixWorldInverse);const It=gt.map.cameraPosition;It!==void 0&&It.setValue(X,Pn.setFromMatrixPosition(C.matrixWorld)),Dt.logarithmicDepthBuffer&&gt.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&gt.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),Z!==C&&(Z=C,$n=!0,ai=!0)}if($e.needsLights&&(nn.state.sunShadowMap.length>0&&gt.setValue(X,"sunShadowMap",nn.state.sunShadowMap,tt),nn.state.directionalShadowMap.length>0&&gt.setValue(X,"directionalShadowMap",nn.state.directionalShadowMap,tt),nn.state.spotShadowMap.length>0&&gt.setValue(X,"spotShadowMap",nn.state.spotShadowMap,tt),nn.state.pointShadowMap.length>0&&gt.setValue(X,"pointShadowMap",nn.state.pointShadowMap,tt)),J.isSkinnedMesh){gt.setOptional(X,J,"bindMatrix"),gt.setOptional(X,J,"bindMatrixInverse");const xt=J.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),gt.setValue(X,"boneTexture",xt.boneTexture,tt))}J.isBatchedMesh&&(gt.setOptional(X,J,"batchingTexture"),gt.setValue(X,"batchingTexture",J._matricesTexture,tt),gt.setOptional(X,J,"batchingIdTexture"),gt.setValue(X,"batchingIdTexture",J._indirectTexture,tt),gt.setOptional(X,J,"batchingColorTexture"),J._colorsTexture!==null&&gt.setValue(X,"batchingColorTexture",J._colorsTexture,tt));const mn=oe.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&me.update(J,oe,rn),($n||$e.receiveShadow!==J.receiveShadow)&&($e.receiveShadow=J.receiveShadow,gt.setValue(X,"receiveShadow",J.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&V.environment!==null&&(Kt.envMapIntensity.value=V.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=YD()),$n){if(gt.setValue(X,"toneMappingExposure",F.toneMappingExposure),$e.needsLights&&Fa(Kt,ai),Oe&&ne.fog===!0&&Ae.refreshFogUniforms(Kt,Oe),Ae.refreshMaterialUniforms(Kt,ne,pe,Ee,I.state.transmissionRenderTarget[C.id]),$e.needsLights&&$e.numLightProbeGrids>0){const xt=L;let It=0;for(const ln of I.state.lightProbeGridArray)ln.texture!==null&&(xt.textures[It]=ln.texture,xt.min[It]=ln.boundingBox.min,xt.max[It]=ln.boundingBox.max,xt.resolution[It]=ln.resolution,It++);for(const ln in xt)xt[ln].length=It;Kt.probesSH.value=xt.textures,Kt.probesMin.value=xt.min,Kt.probesMax.value=xt.max,Kt.probesResolution.value=xt.resolution}Ic.upload(X,kt($e),Kt,tt)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ic.upload(X,kt($e),Kt,tt),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&gt.setValue(X,"center",J.center),gt.setValue(X,"modelViewMatrix",J.modelViewMatrix),gt.setValue(X,"normalMatrix",J.normalMatrix),gt.setValue(X,"modelMatrix",J.matrixWorld),ne.uniformsGroups!==void 0){const xt=ne.uniformsGroups;for(let It=0,ln=xt.length;It<ln;It++){const Ni=xt[It];qe.update(Ni,rn),qe.bind(Ni,rn)}}return rn}function Fa(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.sunLights.needsUpdate=V,C.sunLightShadows.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function wr(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(C,V,oe){const ne=je.get(C);ne.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),je.get(C.texture).__webglTexture=V,je.get(C.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:oe,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,V){const oe=je.get(C);oe.__webglFramebuffer=V,oe.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,oe=0){j=C,ae=V,ee=oe;let ne=null,J=!1,Oe=!1;if(C){const Ie=je.get(C);if(Ie.__useDefaultFramebuffer!==void 0){Ne.bindFramebuffer(X.FRAMEBUFFER,Ie.__webglFramebuffer),U.copy(C.viewport),Q.copy(C.scissor),Te=C.scissorTest,Ne.viewport(U),Ne.scissor(Q),Ne.setScissorTest(Te),$=-1;return}else if(Ie.__webglFramebuffer===void 0)tt.setupRenderTarget(C);else if(Ie.__hasExternalTextures)tt.rebindTextures(C,je.get(C.texture).__webglTexture,je.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const nt=C.depthTexture;if(Ie.__boundDepthTexture!==nt){if(nt!==null&&je.has(nt)&&(C.width!==nt.image.width||C.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(C)}}const Ue=C.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Oe=!0);const Ve=je.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ve[V])?ne=Ve[V][oe]:ne=Ve[V],J=!0):C.samples>0&&tt.useMultisampledRTT(C)===!1?ne=je.get(C).__webglMultisampledFramebuffer:Array.isArray(Ve)?ne=Ve[oe]:ne=Ve,U.copy(C.viewport),Q.copy(C.scissor),Te=C.scissorTest}else U.copy(et).multiplyScalar(pe).floor(),Q.copy(vt).multiplyScalar(pe).floor(),Te=St;if(oe!==0&&(ne=Y),Ne.bindFramebuffer(X.FRAMEBUFFER,ne)&&Ne.drawBuffers(C,ne),Ne.viewport(U),Ne.scissor(Q),Ne.setScissorTest(Te),J){const Ie=je.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ie.__webglTexture,oe)}else if(Oe){const Ie=V;for(let Ue=0;Ue<C.textures.length;Ue++){const Ve=je.get(C.textures[Ue]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Ue,Ve.__webglTexture,oe,Ie)}}else if(C!==null&&oe!==0){const Ie=je.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ie.__webglTexture,oe)}$=-1};function ka(C){const V=je.get(C);return(V.__readFormat!==C.format||V.__readType!==C.type)&&(V.__readFormat=C.format,V.__readType=C.type,V.__formatReadable=Dt.textureFormatReadable(C.format),V.__typeReadable=Dt.textureTypeReadable(C.type)),V}this.readRenderTargetPixels=function(C,V,oe,ne,J,Oe,Ge,Ie=0){if(!(C&&C.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=je.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ue=Ue[Ge],Array.isArray(Ue)&&(Ue=Ue[0])),Ue){Ne.bindFramebuffer(X.FRAMEBUFFER,Ue);try{const Ve=C.textures[Ie],nt=Ve.format,ft=Ve.type;C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ie);const We=ka(Ve);if(We.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(We.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-ne&&oe>=0&&oe<=C.height-J&&X.readPixels(V,oe,ne,J,we.convert(nt),we.convert(ft),Oe)}finally{const Ve=j!==null?je.get(j).__webglFramebuffer:null;Ne.bindFramebuffer(X.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(C,V,oe,ne,J,Oe,Ge,Ie=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=je.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ue=Ue[Ge],Array.isArray(Ue)&&(Ue=Ue[0])),Ue)if(V>=0&&V<=C.width-ne&&oe>=0&&oe<=C.height-J){Ne.bindFramebuffer(X.FRAMEBUFFER,Ue);const Ve=C.textures[Ie],nt=Ve.format,ft=Ve.type;C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ie);const We=ka(Ve);if(We.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(We.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,ht),X.bufferData(X.PIXEL_PACK_BUFFER,Oe.byteLength,X.STREAM_READ),X.readPixels(V,oe,ne,J,we.convert(nt),we.convert(ft),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);const Ut=j!==null?je.get(j).__webglFramebuffer:null;Ne.bindFramebuffer(X.FRAMEBUFFER,Ut);const At=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await dA(X,At,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,ht),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Oe),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(ht),X.deleteSync(At),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,V=null,oe=0){const ne=Math.pow(2,-oe),J=Math.floor(C.image.width*ne),Oe=Math.floor(C.image.height*ne),Ge=V!==null?V.x:0,Ie=V!==null?V.y:0;tt.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,oe,0,0,Ge,Ie,J,Oe),Ne.unbindTexture()},this.copyTextureToTexture=function(C,V,oe=null,ne=null,J=0,Oe=0){let Ge,Ie,Ue,Ve,nt,ft,We,ht,Ut;const At=C.isCompressedTexture?C.mipmaps[Oe]:C.image;if(oe!==null)Ge=oe.max.x-oe.min.x,Ie=oe.max.y-oe.min.y,Ue=oe.isBox3?oe.max.z-oe.min.z:1,Ve=oe.min.x,nt=oe.min.y,ft=oe.isBox3?oe.min.z:0;else{const gt=Math.pow(2,-J);Ge=Math.floor(At.width*gt),Ie=Math.floor(At.height*gt),C.isDataArrayTexture?Ue=At.depth:C.isData3DTexture?Ue=Math.floor(At.depth*gt):Ue=1,Ve=0,nt=0,ft=0}ne!==null?(We=ne.x,ht=ne.y,Ut=ne.z):(We=0,ht=0,Ut=0);const wt=we.convert(V.format),Wt=we.convert(V.type);let $e;V.isData3DTexture?(tt.setTexture3D(V,0),$e=X.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(tt.setTexture2DArray(V,0),$e=X.TEXTURE_2D_ARRAY):(tt.setTexture2D(V,0),$e=X.TEXTURE_2D),Ne.activeTexture(X.TEXTURE0),Ne.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,V.flipY),Ne.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),Ne.pixelStorei(X.UNPACK_ALIGNMENT,V.unpackAlignment);const nn=Ne.getParameter(X.UNPACK_ROW_LENGTH),Ye=Ne.getParameter(X.UNPACK_IMAGE_HEIGHT),ri=Ne.getParameter(X.UNPACK_SKIP_PIXELS),rn=Ne.getParameter(X.UNPACK_SKIP_ROWS),Ii=Ne.getParameter(X.UNPACK_SKIP_IMAGES);Ne.pixelStorei(X.UNPACK_ROW_LENGTH,At.width),Ne.pixelStorei(X.UNPACK_IMAGE_HEIGHT,At.height),Ne.pixelStorei(X.UNPACK_SKIP_PIXELS,Ve),Ne.pixelStorei(X.UNPACK_SKIP_ROWS,nt),Ne.pixelStorei(X.UNPACK_SKIP_IMAGES,ft);const $n=C.isDataArrayTexture||C.isData3DTexture,ai=V.isDataArrayTexture||V.isData3DTexture;if(C.isDepthTexture){const gt=je.get(C),Kt=je.get(V),mn=je.get(gt.__renderTarget),xt=je.get(Kt.__renderTarget);Ne.bindFramebuffer(X.READ_FRAMEBUFFER,mn.__webglFramebuffer),Ne.bindFramebuffer(X.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let It=0;It<Ue;It++)$n&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,je.get(C).__webglTexture,J,ft+It),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,je.get(V).__webglTexture,Oe,Ut+It)),X.blitFramebuffer(Ve,nt,Ve+Ge,nt+Ie,We,ht,We+Ge,ht+Ie,X.DEPTH_BUFFER_BIT,X.NEAREST);Ne.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||je.has(C)){const gt=je.get(C),Kt=je.get(V);Ne.bindFramebuffer(X.READ_FRAMEBUFFER,H),Ne.bindFramebuffer(X.DRAW_FRAMEBUFFER,se);for(let mn=0;mn<Ue;mn++)$n?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,gt.__webglTexture,J,ft+mn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,gt.__webglTexture,J),ai?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Kt.__webglTexture,Oe,Ut+mn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Kt.__webglTexture,Oe),J!==0?X.blitFramebuffer(Ve,nt,Ve+Ge,nt+Ie,We,ht,We+Ge,ht+Ie,X.COLOR_BUFFER_BIT,X.NEAREST):ai?X.copyTexSubImage3D($e,Oe,We,ht,Ut+mn,Ve,nt,Ge,Ie):X.copyTexSubImage2D($e,Oe,We,ht,Ve,nt,Ge,Ie);Ne.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else ai?C.isDataTexture||C.isData3DTexture?X.texSubImage3D($e,Oe,We,ht,Ut,Ge,Ie,Ue,wt,Wt,At.data):V.isCompressedArrayTexture?X.compressedTexSubImage3D($e,Oe,We,ht,Ut,Ge,Ie,Ue,wt,At.data):X.texSubImage3D($e,Oe,We,ht,Ut,Ge,Ie,Ue,wt,Wt,At):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Oe,We,ht,Ge,Ie,wt,Wt,At.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Oe,We,ht,At.width,At.height,wt,At.data):X.texSubImage2D(X.TEXTURE_2D,Oe,We,ht,Ge,Ie,wt,Wt,At);Ne.pixelStorei(X.UNPACK_ROW_LENGTH,nn),Ne.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ye),Ne.pixelStorei(X.UNPACK_SKIP_PIXELS,ri),Ne.pixelStorei(X.UNPACK_SKIP_ROWS,rn),Ne.pixelStorei(X.UNPACK_SKIP_IMAGES,Ii),Oe===0&&V.generateMipmaps===!0&&V.mipmapsAutoUpdate===!0&&X.generateMipmap($e),Ne.unbindTexture()},this.initRenderTarget=function(C){je.get(C).__webglFramebuffer===void 0&&tt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?tt.setTextureCube(C,0):C.isData3DTexture?tt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?tt.setTexture2DArray(C,0):tt.setTexture2D(C,0),Ne.unbindTexture()},this.resetState=function(){ae=0,ee=0,j=null,Ne.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}const rl=new ue;function Ai(n,e,t,r,s,o){const u=2*Math.PI*s/4,d=Math.max(o-2*s,0),f=Math.PI/4;rl.copy(e),rl[r]=0,rl.normalize();const h=.5*u/(u+d),_=1-rl.angleTo(n)/f;return Math.sign(rl[t])===1?_*h:d/(u+d)+h+h*(1-_)}class Lm extends mo{constructor(e=1,t=1,r=1,s=2,o=.1){const u=s*2+1;if(o=Math.min(e/2,t/2,r/2,o),super(1,1,1,u,u,u),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:r,segments:s,radius:o},u===1)return;const d=this.toNonIndexed();this.index=null,this.attributes.position=d.attributes.position,this.attributes.normal=d.attributes.normal,this.attributes.uv=d.attributes.uv;const f=new ue,h=new ue,_=new ue(e,t,r).divideScalar(2).subScalar(o),m=this.attributes.position.array,v=this.attributes.normal.array,x=this.attributes.uv.array,E=m.length/6,T=new ue,y=.5/u;for(let S=0,w=0;S<m.length;S+=3,w+=2)switch(f.fromArray(m,S),h.copy(f),h.x-=Math.sign(h.x)*y,h.y-=Math.sign(h.y)*y,h.z-=Math.sign(h.z)*y,h.normalize(),m[S+0]=_.x*Math.sign(f.x)+h.x*o,m[S+1]=_.y*Math.sign(f.y)+h.y*o,m[S+2]=_.z*Math.sign(f.z)+h.z*o,v[S+0]=h.x,v[S+1]=h.y,v[S+2]=h.z,Math.floor(S/E)){case 0:T.set(1,0,0),x[w+0]=Ai(T,h,"z","y",o,r),x[w+1]=1-Ai(T,h,"y","z",o,t);break;case 1:T.set(-1,0,0),x[w+0]=1-Ai(T,h,"z","y",o,r),x[w+1]=1-Ai(T,h,"y","z",o,t);break;case 2:T.set(0,1,0),x[w+0]=1-Ai(T,h,"x","z",o,e),x[w+1]=Ai(T,h,"z","x",o,r);break;case 3:T.set(0,-1,0),x[w+0]=1-Ai(T,h,"x","z",o,e),x[w+1]=1-Ai(T,h,"z","x",o,r);break;case 4:T.set(0,0,1),x[w+0]=1-Ai(T,h,"x","y",o,e),x[w+1]=1-Ai(T,h,"y","x",o,t);break;case 5:T.set(0,0,-1),x[w+0]=Ai(T,h,"x","y",o,e),x[w+1]=1-Ai(T,h,"y","x",o,t);break}}static fromJSON(e){return new Lm(e.width,e.height,e.depth,e.segments,e.radius)}}let al;function ZD(){al==null||al(),al=null;const n=document.querySelector(".match-mode:not(.lobby-mode) .rows");if(!n)return;const e=document.querySelector(".page-shell"),t=document.createElement("canvas");t.className="clubhouse-scene",t.setAttribute("aria-hidden","true"),e.prepend(t);let r;try{r=new KD({canvas:t,antialias:!0,alpha:!1})}catch{t.remove();return}r.setPixelRatio(Math.min(devicePixelRatio,1.5)),r.outputColorSpace=hi,r.toneMapping=vm;const s=new PA;s.background=new bt("#211a2a");const o=new Cm(-215,215,422,-422,.1,3e3);o.position.set(0,0,1200),s.add(new ZA("#ffe7c1","#1c284b",2.5));const u=new eC("#ffce83",3.2);u.position.set(-250,500,800),s.add(u);const d=new JA("#7895ff",12e4,1800);d.position.set(250,-100,400),s.add(d);const f=[];function h(x,E,T,y,S,w,D,L=12){const N=new Lm(x,E,T,3,L),I=new qA({color:y,roughness:.6,metalness:.03}),b=new La(N,I);return b.position.set(S,w,D),s.add(b),f.push(N,I),b}let _;function m(){s.children.filter(D=>D.isMesh).forEach(D=>s.remove(D)),f.splice(0).forEach(D=>D.dispose());const x=e.getBoundingClientRect(),E=n.getBoundingClientRect(),T=x.width,y=x.height;r.setSize(T,y,!1),o.left=-T/2,o.right=T/2,o.top=y/2,o.bottom=-y/2,o.updateProjectionMatrix();const S=y/2-(E.top-x.top+E.height/2);for(let D=-3;D<=3;D++)h(62,y,12,D%2?"#423043":"#39293b",D*65,0,-130,3);h(T,11,20,"#815536",0,y/2-110,-80,3);for(const D of[-T*.4,T*.4]){const L=h(32,22,16,"#ffd185",D,y/2-76,-40,8);L.material.emissive.set("#ffb54c"),L.material.emissiveIntensity=.8,h(5,35,8,"#a67845",D,y/2-95,-50,2)}const w=h(T-10,E.height+30,30,"#925c38",0,S,-10,18);h(T-23,E.height+17,16,"#c08a50",0,S,7,16),h(T-35,E.height+4,12,"#23395c",0,S,18,14),w.rotation.x=.025,n.querySelectorAll(".row-lane").forEach(D=>{const L=D.getBoundingClientRect();h(T-58,2,2,"#405277",0,y/2-(L.bottom-x.top),26,.6)}),n.querySelectorAll(".playing-card").forEach(D=>{const L=D.getBoundingClientRect();h(L.width+2,L.height+2,5,"#f4e7ce",L.left-x.left+L.width/2-T/2,y/2-(L.top-x.top+L.height/2)-2,32,3)}),r.render(s,o)}_=requestAnimationFrame(m);const v=new ResizeObserver(()=>{cancelAnimationFrame(_),_=requestAnimationFrame(m)});v.observe(e),al=()=>{cancelAnimationFrame(_),v.disconnect(),f.forEach(x=>x.dispose()),r.dispose(),t.remove()}}const $x="take5-sound-enabled",jD={tap:{src:"assets/audio/click1.wav",volume:.12},select:{src:"assets/audio/click2.wav",volume:.17},card:{src:"assets/audio/click3.wav",volume:.2},deal:{src:"assets/audio/rollover1.wav",volume:.13},row:{src:"assets/audio/click1.wav",volume:.2}};let Ci=localStorage.getItem($x)!=="false",cn,ni,Dm=!1,us;const vl=new Set,Ay=new Map,Xx=[523.25,null,659.25,783.99,null,659.25,587.33,null,523.25,null,392,523.25,null,587.33,523.25,null],rm=.42,JD=Xx.length*rm;function QD(){if(cn)return cn;const n=window.AudioContext||window.webkitAudioContext;return n?(cn=new n,ni=cn.createGain(),ni.gain.value=0,ni.connect(cn.destination),cn):null}function Cy(n,e,t,r=.22,s="sine"){if(!cn||!ni||!n)return;const o=cn.createOscillator(),u=cn.createGain();o.type=s,o.frequency.setValueAtTime(n,e),u.gain.setValueAtTime(1e-4,e),u.gain.linearRampToValueAtTime(r,e+.035),u.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(u),u.connect(ni),o.start(e),o.stop(e+t+.02)}function Im(){if(!Ci||!Dm||!cn||cn.state!=="running")return;const n=cn.currentTime+.08;Xx.forEach((e,t)=>{e&&Cy(e,n+t*rm,.3,.2,"sine")}),[0,4,8,12].forEach((e,t)=>Cy([261.63,196,220,196][t],n+e*rm,.6,.09,"triangle")),us=setTimeout(()=>{us=null,Im()},JD*1e3)}function qx(){!Ci||!Dm||!cn||!ni||(ni.gain.cancelScheduledValues(cn.currentTime),ni.gain.setTargetAtTime(.08,cn.currentTime,1.2),us||Im())}function Nm(){if(!Ci)return;const n=QD();(n==null?void 0:n.state)==="suspended"&&n.resume().catch(()=>{}),qx()}function ps(n){Dm=n,n||(clearTimeout(us),us=null),!(!cn||!ni)&&(ni.gain.cancelScheduledValues(cn.currentTime),ni.gain.setTargetAtTime(Ci&&n?.08:0,cn.currentTime,n?1.2:.35),Ci&&n&&Im())}function Ia(n){if(!Ci)return;const e=jD[n];if(!e)return;const t=Ay.get(n)||new Audio(e.src);t.preload="auto",Ay.set(n,t);const r=t.cloneNode();r.volume=e.volume,vl.add(r),r.addEventListener("ended",()=>vl.delete(r),{once:!0}),r.play().catch(()=>vl.delete(r))}function am(){return Ci}function Yx(){return Ci=!Ci,localStorage.setItem($x,String(Ci)),Ci?(Nm(),qx()):(vl.forEach(n=>{n.pause(),n.currentTime=0}),vl.clear(),clearTimeout(us),us=null,cn&&ni&&(ni.gain.cancelScheduledValues(cn.currentTime),ni.gain.setTargetAtTime(0,cn.currentTime,.12))),Ci}/*! Capacitor: https://capacitorjs.com/ - MIT License */var fo;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(fo||(fo={}));class Fh extends Error{constructor(e,t,r){super(e),this.message=e,this.code=t,this.data=r}}const eI=n=>{var e,t;return n!=null&&n.androidBridge?"android":!((t=(e=n==null?void 0:n.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},tI=n=>{const e=n.CapacitorCustomPlatform||null,t=n.Capacitor||{},r=t.Plugins=t.Plugins||{},s=()=>e!==null?e.name:eI(n),o=()=>s()!=="web",u=m=>{const v=h.get(m);return!!(v!=null&&v.platforms.has(s())||d(m))},d=m=>{var v;return(v=t.PluginHeaders)===null||v===void 0?void 0:v.find(x=>x.name===m)},f=m=>n.console.error(m),h=new Map,_=(m,v={})=>{const x=h.get(m);if(x)return console.warn(`Capacitor plugin "${m}" already registered. Cannot register plugins twice.`),x.proxy;const E=s(),T=d(m);let y;const S=async()=>(!y&&E in v?y=typeof v[E]=="function"?y=await v[E]():y=v[E]:e!==null&&!y&&"web"in v&&(y=typeof v.web=="function"?y=await v.web():y=v.web),y),w=(P,k)=>{var F,G;if(T){const K=T==null?void 0:T.methods.find(Y=>k===Y.name);if(K)return K.rtype==="promise"?Y=>t.nativePromise(m,k.toString(),Y):(Y,H)=>t.nativeCallback(m,k.toString(),Y,H);if(P)return(F=P[k])===null||F===void 0?void 0:F.bind(P)}else{if(P)return(G=P[k])===null||G===void 0?void 0:G.bind(P);throw new Fh(`"${m}" plugin is not implemented on ${E}`,fo.Unimplemented)}},D=P=>{let k;const F=(...G)=>{const K=S().then(Y=>{const H=w(Y,P);if(H){const se=H(...G);return k=se==null?void 0:se.remove,se}else throw new Fh(`"${m}.${P}()" is not implemented on ${E}`,fo.Unimplemented)});return P==="addListener"&&(K.remove=async()=>k()),K};return F.toString=()=>`${P.toString()}() { [capacitor code] }`,Object.defineProperty(F,"name",{value:P,writable:!1,configurable:!1}),F},L=D("addListener"),N=D("removeListener"),I=(P,k)=>{const F=L({eventName:P},k),G=async()=>{const Y=await F;N({eventName:P,callbackId:Y},k)},K=new Promise(Y=>F.then(()=>Y({remove:G})));return K.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await G()},K},b=new Proxy({},{get(P,k){switch(k){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return T?I:L;case"removeListener":return N;default:return D(k)}}});return r[m]=b,h.set(m,{name:m,proxy:b,platforms:new Set([...Object.keys(v),...T?[E]:[]])}),b};return t.convertFileSrc||(t.convertFileSrc=m=>m),t.getPlatform=s,t.handleError=f,t.isNativePlatform=o,t.isPluginAvailable=u,t.registerPlugin=_,t.Exception=Fh,t.DEBUG=!!t.DEBUG,t.isLoggingEnabled=!!t.isLoggingEnabled,t},nI=n=>n.Capacitor=tI(n),Xc=nI(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),nd=Xc.registerPlugin;class Om{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(t);const o=this.windowListeners[e];o&&!o.registered&&this.addWindowListener(o),r&&this.sendRetainedArgumentsForEvent(e);const u=async()=>this.removeListener(e,t);return Promise.resolve({remove:u})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,r){const s=this.listeners[e];if(!s){if(r){let o=this.retainedEventArguments[e];o||(o=[]),o.push(t),this.retainedEventArguments[e]=o}return}s.forEach(o=>o(t))}hasListeners(e){var t;return!!(!((t=this.listeners[e])===null||t===void 0)&&t.length)}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:r=>{this.notifyListeners(t,r)}}}unimplemented(e="not implemented"){return new Xc.Exception(e,fo.Unimplemented)}unavailable(e="not available"){return new Xc.Exception(e,fo.Unavailable)}async removeListener(e,t){const r=this.listeners[e];if(!r)return;const s=r.indexOf(t);s!==-1&&this.listeners[e].splice(s,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(r=>{this.notifyListeners(e,r)}))}}const Py=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Ly=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class iI extends Om{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[s,o]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=Ly(s).trim(),o=Ly(o).trim(),t[s]=o}),t}async setCookie(e){try{const t=Py(e.key),r=Py(e.value),s=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",o=(e.path||"/").replace("path=",""),u=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${r||""}${s}; path=${o}; ${u};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}nd("CapacitorCookies",{web:()=>new iI});const rI=async n=>new Promise((e,t)=>{const r=new FileReader;r.onload=()=>{const s=r.result;e(s.indexOf(",")>=0?s.split(",")[1]:s)},r.onerror=s=>t(s),r.readAsDataURL(n)}),aI=(n={})=>{const e=Object.keys(n);return Object.keys(n).map(s=>s.toLocaleLowerCase()).reduce((s,o,u)=>(s[o]=n[e[u]],s),{})},sI=(n,e=!0)=>n?Object.entries(n).reduce((r,s)=>{const[o,u]=s;let d,f;return Array.isArray(u)?(f="",u.forEach(h=>{d=e?encodeURIComponent(h):h,f+=`${o}=${d}&`}),f.slice(0,-1)):(d=e?encodeURIComponent(u):u,f=`${o}=${d}`),`${r}&${f}`},"").substr(1):null,oI=(n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),s=aI(n.headers)["content-type"]||"";if(typeof n.data=="string")t.body=n.data;else if(s.includes("application/x-www-form-urlencoded")){const o=new URLSearchParams;for(const[u,d]of Object.entries(n.data||{}))o.set(u,d);t.body=o.toString()}else if(s.includes("multipart/form-data")||n.data instanceof FormData){const o=new FormData;if(n.data instanceof FormData)n.data.forEach((d,f)=>{o.append(f,d)});else for(const d of Object.keys(n.data))o.append(d,n.data[d]);t.body=o;const u=new Headers(t.headers);u.delete("content-type"),t.headers=u}else(s.includes("application/json")||typeof n.data=="object")&&(t.body=JSON.stringify(n.data));return t};class lI extends Om{async request(e){const t=oI(e,e.webFetchExtra),r=sI(e.params,e.shouldEncodeUrlParams),s=r?`${e.url}?${r}`:e.url,o=await fetch(s,t),u=o.headers.get("content-type")||"";let{responseType:d="text"}=o.ok?e:{};u.includes("application/json")&&(d="json");let f,h;switch(d){case"arraybuffer":case"blob":h=await o.blob(),f=await rI(h);break;case"json":f=await o.json();break;case"document":case"text":default:f=await o.text()}const _={};return o.headers.forEach((m,v)=>{_[v]=m}),{data:f,headers:_,status:o.status,url:o.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}nd("CapacitorHttp",{web:()=>new lI});var Dy;(function(n){n.Dark="DARK",n.Light="LIGHT",n.Default="DEFAULT"})(Dy||(Dy={}));var Iy;(function(n){n.StatusBar="StatusBar",n.NavigationBar="NavigationBar"})(Iy||(Iy={}));class uI extends Om{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}nd("SystemBars",{web:()=>new uI});const kh=nd("App",{web:()=>zy(()=>import("./web-B4yex5jB.js"),[]).then(n=>new n.AppWeb)}),Kx=Xc.isNativePlatform(),cI="https://take-five-friends-game.onrender.com/";Kx&&(document.documentElement.classList.add("capacitor-native"),kh.addListener("backButton",()=>{var r;const n=document.querySelector("#rulesDialog");if(n!=null&&n.open){n.close();return}const e=document.querySelector("#gameMenuPanel");if(e&&!e.classList.contains("is-hidden")){(r=document.querySelector("#gameMenuToggle"))==null||r.dispatchEvent(new CustomEvent("rnpress",{bubbles:!0}));return}const t=document.querySelector("#gameMenuToggle");if(t){t.dispatchEvent(new CustomEvent("rnpress",{bubbles:!0}));return}kh.exitApp()}),kh.addListener("appUrlOpen",({url:n})=>{try{const e=new URL(n).searchParams.get("room");/^\d{4}$/.test(e||"")&&window.location.assign(`/?room=${encodeURIComponent(e)}`)}catch{}}));const Um=[{id:"take-5",name:"Take 5",category:"Card game",status:"available",route:"take-5",description:"A clever card game where every move counts. Avoid the bulls!",featuredDescription:"Think ahead, play your cards, and avoid collecting the bulls!",artwork:"take5"},{id:"phase-10",name:"Phase 10",category:"Card game",status:"available",route:"phase-10",description:"Build sets, make runs, and race through all ten phases.",artwork:"phase10"},{id:"splendor",name:"Splendor",category:"Strategy game",status:"coming-soon",route:null,description:"Collect precious gems, build your empire, and earn prestige.",artwork:"splendor"}],dr=Um.find(n=>n.status==="available");function Zx(n){return`<span class="game-status game-status--${n.status}">${n.status==="available"?"Available now":"Coming soon"}</span>`}function jx(n){return n.artwork==="take5"?'<div class="game-art game-art--take5"><span class="game-art-card game-art-card--one" aria-hidden="true"></span><span class="game-art-card game-art-card--two" aria-hidden="true"></span><span class="game-art-card game-art-card--three" aria-hidden="true"></span><span class="game-art-bull">♞</span></div>':n.artwork==="phase10"?'<div class="game-art game-art--phase10"><span class="phase-orb phase-orb--blue">7</span><span class="phase-orb phase-orb--red">10</span><span class="phase-orb phase-orb--gold">★</span><span class="phase-run">4 · 5 · 6 · 7</span></div>':'<div class="game-art game-art--splendor"><span class="gem gem--emerald"></span><span class="gem gem--ruby"></span><span class="gem gem--sapphire"></span><span class="splendor-crown">♛</span></div>'}function dI(n){const e=n.status==="available";return`<article class="game-card game-card--${n.id}" data-game-id="${n.id}" ${e?`data-game-tile="play" role="button" tabindex="0" aria-label="Play ${n.name}"`:""}>
    ${jx(n)}
    <div class="game-card-copy">
      <div class="game-card-meta"><span>${n.category}</span>${Zx(n)}</div>
      <h3>${n.name}</h3>
      <p>${n.description}</p>
      <button class="game-card-action" data-game-action="${e?"play":"soon"}" data-game-id="${n.id}" ${e?"":'aria-disabled="true"'}>${e?"Play now":"Coming soon"} <span>→</span></button>
    </div>
  </article>`}function Ny(){return Um.map(dI).join("")}const fI=["blue","green","red","yellow"],sm=["2 sets of 3","1 set of 3 + 1 run of 4","1 set of 4 + 1 run of 4","1 run of 7","1 run of 8","1 run of 9","2 sets of 4","7 cards of one color","1 set of 5 + 1 set of 2","1 set of 5 + 1 set of 3"],hI=["🧑🏻","🦊","🐻","🐸"];let pI=0;const Bh=(n,e=null)=>({id:`phase-card-${pI++}`,value:n,color:e}),Aa=n=>n.value==="wild",Ji=n=>n.value==="skip";function mI(){const n=[];for(let e=0;e<2;e++)fI.forEach(t=>{for(let r=1;r<=12;r++)n.push(Bh(r,t))});for(let e=0;e<8;e++)n.push(Bh("wild"));for(let e=0;e<4;e++)n.push(Bh("skip"));return gI(n)}function gI(n){const e=n.slice();for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e}function vI(n){return Aa(n)?25:Ji(n)?15:n.value>=10?10:5}function Fm(n){return n.filter(e=>!Aa(e)&&!Ji(e))}function km(n,e){return n.length===e&&!n.some(Ji)}function fr(n,e){const t=Fm(n).map(r=>r.value);return km(n,e)&&t.length>0&&t.every(r=>r===t[0])}function sl(n,e){const t=Fm(n).map(o=>o.value);if(!km(n,e)||t.length===0||new Set(t).size!==t.length)return!1;const r=Math.min(...t),s=Math.max(...t);return s-r<e&&Math.max(1,s-e+1)<=Math.min(r,13-e)}function _I(n,e){const t=Fm(n).map(r=>r.color);return km(n,e)&&t.length>0&&t.every(r=>r===t[0])}function Jx(n,e,t=0,r=[],s=[]){if(r.length===e)return s.push(r),s;for(let o=t;o<=n.length-(e-r.length);o++)Jx(n,e,o+1,r.concat(o),s);return s}function Js(n,e,t,r,s){return n.length!==e+r?!1:Jx(n,e).some(o=>{const u=o.map(f=>n[f]),d=n.filter((f,h)=>!o.includes(h));return t(u,e)&&s(d,r)})}function Qx(n,e){switch(n){case 1:return Js(e,3,fr,3,fr);case 2:return Js(e,3,fr,4,sl);case 3:return Js(e,4,fr,4,sl);case 4:return sl(e,7);case 5:return sl(e,8);case 6:return sl(e,9);case 7:return Js(e,4,fr,4,fr);case 8:return _I(e,7);case 9:return Js(e,5,fr,2,fr);case 10:return Js(e,5,fr,3,fr);default:return!1}}function eM(n,e){const t=mI(),r=[{id:"phase-you",name:n||"You",avatar:e,phase:1,score:0,hand:[],laid:!1,phaseCards:[]},{id:"phase-milo",name:"Milo",avatar:"🦊",phase:1,score:0,hand:[],laid:!1,phaseCards:[]},{id:"phase-nora",name:"Nora",avatar:"🐻",phase:1,score:0,hand:[],laid:!1,phaseCards:[]},{id:"phase-pip",name:"Pip",avatar:"🐸",phase:1,score:0,hand:[],laid:!1,phaseCards:[]}];return r.forEach(s=>{s.hand=t.splice(0,10)}),{players:r,drawPile:t,discardPile:[t.pop()],current:0,turn:"draw",selected:[],message:"Draw a card to begin.",round:1,finished:!1,skipped:null}}const vi=document.querySelector("#app"),qc=document.querySelector("#rulesDialog"),Oy=new URLSearchParams(location.search),Bm="take5-host-save",cs="take5-guest-session",M={screen:"home",mode:"online",tab:"rooms",name:localStorage.getItem("take5-name")||"",peer:null,host:!1,connection:null,connections:new Map,clientId:null,roomId:"",players:[],game:null,selected:null,busy:!1,toastTimer:null,botCount:3,roundFlashTimer:null,submittedTurn:!1,animating:!1,replay:null,replayKey:null,revealOrigins:{},stageSeen:new Set,stageTurnKey:null,countdownTimer:null,countdownInterval:null,reconnectTimer:null,peerReconnectTimer:null,disconnectAdvanceTimer:null,resumeToken:null,recoveringGuest:!1,reactionCooldowns:new Map,screenTransition:!1,phase10:null,phase10Avatar:"🧑🏻"};document.addEventListener("pointerdown",Nm,{passive:!0});document.addEventListener("keydown",Nm);function tM(){var n;if(M.peer){if(M.peer.disconnected)try{M.peer.reconnect()}catch{rd(M.peer)}if(!M.host&&M.roomId){const e=M.peer;(n=M.connection)!=null&&n.open?M.connection.send({type:"sync"}):(M.connection=null,clearTimeout(M.reconnectTimer),ad(M.roomId,e))}}}window.addEventListener("online",tM);document.addEventListener("visibilitychange",()=>{document.hidden||tM()});document.querySelector("#homeLink").addEventListener("click",n=>{n.preventDefault(),Da()});tx(qc);qt(".dialog-close",()=>qc.close());var By;if(Oy.get("room")){const n=Oy.get("room");M.tab="rooms",M.roomPrefill=/^\d{4}$/.test(n)?n:((By=n.match(/^take5-(\d{4})$/))==null?void 0:By[1])||""}const zh=id(Bm),Gr=id(cs),Hh=M.roomPrefill||(Gr==null?void 0:Gr.roomId)||"",yI=!!Gr&&(!M.roomPrefill||Gr.roomId===M.roomPrefill);zh&&(M.roomPrefill===zh.roomId||!M.roomPrefill&&!yI)?(Da(),kI(zh)):(Da(),Hh&&(Gr==null?void 0:Gr.roomId)===Hh&&(M.resumeToken=Gr.token,M.recoveringGuest=!0,Ym(Hh)));function id(n){try{return JSON.parse(localStorage.getItem(n)||"null")}catch{return null}}function Ht(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Qi(n,e,{nativeControls:t=!0}={}){const r=M.screenTransition&&!matchMedia("(prefers-reduced-motion: reduce)").matches;if(C1(n),n.innerHTML=e,requestAnimationFrame(ZD),t)try{tx(n)}catch(s){console.error("Could not mount React Native Web controls.",s)}r&&(n.animate([{opacity:0,transform:"translateY(10px) scale(.992)"},{opacity:1,transform:"translateY(0) scale(1)"}],{duration:300,easing:"cubic-bezier(.2,.78,.25,1)"}),M.screenTransition=!1)}function qt(n,e){(typeof n=="string"?document.querySelectorAll(n):[n]).forEach(r=>{if(!r)return;const s=o=>{Ia("tap"),e(o,r)};r.addEventListener("rnpress",s),r.addEventListener("click",o=>{r.closest(".rn-control-root")||s(o)})})}function SI(){const n=am();return`<button class="icon-button sound-toggle" id="soundToggle" aria-label="${n?"Mute sound":"Enable sound"}" aria-pressed="${n}" title="${n?"Mute sound":"Enable sound"}"><span class="sound-toggle-glyph" aria-hidden="true">♪</span><span class="sound-toggle-state" aria-hidden="true">${n?"":"×"}</span></button>`}function xI(){qt("#soundToggle",()=>{Yx(),Yr()})}function ei(n){return n===55?7:n%11===0?5:n%10===0?3:n%5===0?2:1}function MI(n){return{1:"one-bull",2:"two-bulls",3:"three-bulls",5:"five-bulls",7:"seven-bulls"}[ei(n)]}function Sr(){return'<span class="bull-icon" aria-hidden="true"><img class="bull-icon-art" src="assets/bullhead.svg" alt="" draggable="false"></span>'}function Uy(n){return`<span class="bull-marks" aria-label="${ei(n)} bullheads">${Array.from({length:ei(n)},()=>'<i class="bull-head" aria-hidden="true"></i>').join("")}</span>`}function to(n,e=""){const t=MI(n),r=Ht(n),s=String(n).length;return`<span class="card-face ${e} tone-${t} value-${s}-digits" aria-hidden="true"><img class="card-art" src="assets/cards/card-${t}.png" alt="" draggable="false"><span class="card-corner top-left">${r}</span><span class="card-corner top-right">${r}</span>${Uy(n)}<span class="card-value-outline">${r}</span><span class="card-value">${r}</span><span class="card-bottom-meta"><span class="card-corner bottom-left">${r}</span>${Uy(n)}<span class="card-corner bottom-right">${r}</span></span></span>`}function nM(n,e){return n.human?["🧑🏻","👩🏽","🧔🏼","👩🏻","🧑🏾","👩🏼","🧑🏽","👨🏾","👩🏻","🧑🏼"][e%10]:["🦊","🐻","🐸","🐼","🐯","🐵","🐰","🦝","🦁"][Math.max(0,e-1)%9]}function EI(){return Array.from({length:104},(n,e)=>e+1).sort(()=>Math.random()-.5)}function Yr(){var h,_;const n=document.querySelector("#homeLink"),e=document.querySelector("#headerRoster"),t=document.querySelector("#topbarRight"),r=M.screen==="home",s=["lobby","game","result"].includes(M.screen);if(n&&(n.innerHTML='<span class="brand-mark">CG</span><span>Card <span class="brand-dot">Games</span></span>'),r){e.innerHTML="",Qi(t,`<div class="platform-profile" aria-label="Player profile"><span class="platform-avatar">${Ht((M.name||"P").slice(0,1).toUpperCase())}</span><span class="platform-profile-copy"><b>${Ht(M.name||"Player")}</b><small>Ready to play</small></span></div>`,{nativeControls:!1}),qt("[data-platform-nav]",(m,v)=>{var E;const x=v.dataset.platformNav;x==="take5"?Hm():x==="games"?(E=document.querySelector("#games"))==null||E.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"smooth"})});return}const o=M.screen==="lobby"?M.players:((h=M.game)==null?void 0:h.players)||M.players,u=!!M.game&&["game","result"].includes(M.screen);if(e&&(e.innerHTML=s?o.map((m,v)=>{var y;const x=m.id===M.clientId,E=((y=m.hand)==null?void 0:y.length)||0,T=u?`${E} cards`:m.human?m.ready?"READY":"ONLINE":"BOT";return`<div class="header-player ${x?"is-you":""} ${m.ready?"is-ready":""}" data-player-id="${Ht(m.id)}"><span class="header-avatar">${nM(m,v)}</span><span class="header-player-copy"><b>${Ht(m.name)}${x?" · you":""}</b><small>${T}</small></span>${u?`<span class="header-player-score bull-counter-badge" aria-label="${m.total||0} bullheads"><strong>${m.total||0}</strong>${Sr()}</span><span class="opponent-cards" aria-label="${E} cards in hand">${Array.from({length:Math.min(4,E)},(S,w)=>`<i style="--i:${w}"></i>`).join("")}</span>`:`<i class="header-player-status ${m.online===!1?"is-offline":""}"></i>`}</div>`}).join(""):""),!t)return;if(!s){Qi(t,`<span class="top-note"><span class="online-dot"></span> the table is open</span>${SI()}<button class="icon-button" id="rulesButton" aria-label="How to play" title="How to play">?</button>`),xI(),qt("#rulesButton",()=>qc.showModal());return}const d=((_=M.mode)==null?void 0:_.startsWith("online"))||M.screen==="lobby",f=[];f.push(`<button class="menu-action" data-menu-action="toggle-sound"><span class="menu-action-icon">${am()?"♫":"♪"}</span><span>${am()?"Sound on":"Sound off"}</span></button>`),M.screen==="game"&&d&&f.push(`<div class="menu-reaction-section"><button class="menu-action menu-reaction-toggle" data-menu-action="toggle-reactions" aria-expanded="false"><span class="menu-action-icon">☺</span><span>Send a reaction</span><span class="menu-action-chevron" aria-hidden="true">⌄</span></button><div class="menu-reaction-picker" role="group" aria-label="Choose a reaction" hidden>${Il.map(m=>`<button class="menu-reaction-option" type="button" role="menuitem" data-reaction="${m}" aria-label="Send ${m} reaction">${m}</button>`).join("")}</div></div>`),d&&M.roomId&&(f.push('<button class="menu-action" data-menu-action="sync-room"><span class="menu-action-icon">⟳</span><span>Refresh room sync</span></button>'),f.push('<button class="menu-action" data-menu-action="copy-invite"><span class="menu-action-icon">↗</span><span>Copy invite link</span></button>'),f.push('<button class="menu-action" data-menu-action="copy-code"><span class="menu-action-icon">#</span><span>Copy room code</span></button>')),M.screen==="lobby"&&M.host&&f.push('<button class="menu-action" data-menu-action="start-game"><span class="menu-action-icon">▶</span><span>Start game</span></button>'),M.screen==="game"&&(!d||M.host)&&f.push('<button class="menu-action" data-menu-action="new-game"><span class="menu-action-icon">⟳</span><span>Start new game</span></button>'),M.screen==="result"&&f.push('<button class="menu-action" data-menu-action="new-game"><span class="menu-action-icon">⟳</span><span>Play again</span></button>'),f.push('<button class="menu-action" data-menu-action="rules"><span class="menu-action-icon">?</span><span>How to play</span></button>'),(d||M.screen==="game"||M.screen==="result")&&f.push('<button class="menu-action is-danger" data-menu-action="leave"><span class="menu-action-icon">↩</span><span>Leave game</span></button>'),Qi(t,`<div class="menu-shell"><button class="menu-trigger" id="gameMenuToggle" aria-label="Game menu" aria-haspopup="menu" aria-expanded="false" title="Game menu"><span class="menu-icon" aria-hidden="true"></span></button><div class="game-menu-panel is-hidden" id="gameMenuPanel" role="menu">${f.join("")}</div></div>`),qt("#gameMenuToggle",(m,v)=>{var T;const x=document.querySelector("#gameMenuPanel"),E=v.getAttribute("aria-expanded")!=="true";v.setAttribute("aria-expanded",String(E)),x.classList.toggle("is-hidden",!E),(T=v.closest(".menu-shell"))==null||T.classList.toggle("is-open",E)}),qt(".menu-action",(m,v)=>{var T,y,S;const x=v.dataset.menuAction,E=document.querySelector("#gameMenuPanel");if(x==="toggle-reactions"){const w=v.nextElementSibling,D=v.getAttribute("aria-expanded")!=="true";v.setAttribute("aria-expanded",String(D)),w.hidden=!D,(T=v.closest(".menu-reaction-section"))==null||T.classList.toggle("is-expanded",D);return}if(E&&E.classList.add("is-hidden"),(y=document.querySelector("#gameMenuToggle"))==null||y.setAttribute("aria-expanded","false"),(S=document.querySelector(".menu-shell"))==null||S.classList.remove("is-open"),x==="copy-invite")WI();else if(x==="copy-code")cM(M.roomId,"Room code copied");else if(x==="sync-room")zI();else if(x==="toggle-sound")Yx(),Yr();else if(x==="rules")qc.showModal();else if(x==="leave")dM();else if(x==="start-game")Yc();else if(x==="new-game"){if(d&&M.host&&M.players.forEach(w=>{w.score=0,w.total=0}),d&&!M.host)return gi("Ask the host to start another game.");d?Yc():Wm()}}),qt(".menu-reaction-option",(m,v)=>sM(v.dataset.reaction))}function Da(){sd(),document.body.classList.remove("match-mode","lobby-mode","take5-entry-mode"),document.body.classList.add("home-mode","platform-home"),M.screen="home",M.game=null,M.selected=null,ps(!0);try{if(!dr||typeof Ny!="function")throw new Error("The game registry is unavailable.");Yr(),Qi(vi,`<section class="platform-homepage">
      <section class="platform-welcome" aria-labelledby="platformWelcomeTitle"><div><h1 id="platformWelcomeTitle">Ready to play?</h1><p>Pick your game. Bring your friends. Let the fun begin.</p></div><span class="platform-online"><i></i> Games ready</span></section>
      <section class="platform-featured" data-game-tile="play" data-game-id="${dr.id}" role="button" tabindex="0" aria-label="Play ${Ht(dr.name)}" aria-labelledby="featuredTitle"><div class="featured-art">${jx(dr)}</div><div class="featured-copy"><div class="featured-meta"><span>Featured game</span>${Zx(dr)}</div><h2 id="featuredTitle">${Ht(dr.name)}</h2><p>${dr.featuredDescription}</p><button class="platform-primary" data-game-action="play" data-game-id="${dr.id}">Play now <span>→</span></button></div><div class="featured-detail"><span>2–10 players</span><span>10 cards each</span><span>15 min</span></div></section>
      <section class="platform-library" id="games" aria-labelledby="gamesTitle"><div class="section-heading"><div><span>Game library</span><h2 id="gamesTitle">Your Game Collection</h2><p>Choose a game and start playing.</p></div></div><div class="game-library-grid">${Ny()}</div></section>
    </section>`,{nativeControls:!1}),qt("[data-game-action]",(n,e)=>{e.dataset.gameAction==="play"?Gh(e.dataset.gameId):gi(`${e.dataset.gameId==="phase-10"?"Phase 10":"Splendor"} is coming soon.`)}),document.querySelectorAll('[data-game-tile="play"]').forEach(n=>{n.addEventListener("click",e=>{e.target.closest("[data-game-action]")||Gh(n.dataset.gameId||dr.id)}),n.addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),Gh(n.dataset.gameId||dr.id))})})}catch(n){console.error("Could not render the Card Games lobby.",n),Qi(vi,`<section class="platform-fallback" role="alert"><span>Card Games</span><h1>We couldn’t load the game lobby.</h1><p>${Ht(n.message||"Please try again.")}</p><button class="platform-primary" id="retryLobby">Try again <span>↻</span></button></section>`,{nativeControls:!1}),qt("#retryLobby",Da)}}function Gh(n){const e=Um.find(t=>t.id===n);if(!e||e.status!=="available")return gi("This game is coming soon.");e.route==="phase-10"?zm():Hm()}function zm(){sd(),M.phase10=null,M.screen="phase10-setup",document.body.classList.remove("match-mode","platform-home","lobby-mode"),document.body.classList.add("home-mode","phase10-mode"),ps(!1),Yr(),Qi(vi,`<section class="phase10-setup"><div class="phase10-setup-art"><div class="p10-floating-card p10-card-blue">7</div><div class="p10-floating-card p10-card-green">8</div><div class="p10-floating-card p10-card-red">10</div></div><div class="phase10-setup-copy"><span class="phase10-kicker">Phase 10 · local table</span><h1>Choose your player</h1><p>Choose your character, build your phase, and be first through all ten challenges.</p><div class="memoji-grid" role="group" aria-label="Choose your player">${hI.map(n=>`<button class="memoji-choice ${n===M.phase10Avatar?"is-selected":""}" data-phase-avatar="${n}" aria-pressed="${n===M.phase10Avatar}" aria-label="Choose ${bI(n)}">${om(n)}</button>`).join("")}</div><button class="phase10-play" id="startPhase10">Start game <span>→</span></button><button class="phase10-back" id="backToLobby">Back to games</button></div></section>`,{nativeControls:!1}),qt("[data-phase-avatar]",(n,e)=>{M.phase10Avatar=e.dataset.phaseAvatar,zm()}),qt("#startPhase10",()=>{M.phase10=eM(M.name,M.phase10Avatar),M.screen="phase10",Xr()}),qt("#backToLobby",Da)}function bI(n){return{"🧑🏻":"Player","🦊":"Milo","🐻":"Nora","🐸":"Pip"}[n]||"Player"}function om(n,e=""){return`<span class="avatar-3d avatar-3d--${{"🧑🏻":"player","🦊":"fox","🐻":"bear","🐸":"frog"}[n]||"player"} ${e}" aria-hidden="true"></span>`}function Qs(n,e){(typeof n=="string"?document.querySelectorAll(n):[n]).forEach(r=>{if(!r)return;let s=!1;const o=u=>{s||r.getAttribute("aria-disabled")==="true"||(s=!0,u.preventDefault(),Ia("tap"),e(u,r))};r.addEventListener("pointerup",o),r.addEventListener("click",o)})}function wI(n,e=!1){var o;const t=Aa(n)?"wild":Ji(n)?"skip":"",r=Aa(n)?"★":Ji(n)?"⊘":n.value,s=t==="wild"?"★":t==="skip"?"⊘":n.value;return`<button class="phase10-card ${t} ${n.color||""} ${e?"is-selected":""}" data-phase-card="${n.id}" aria-label="${Aa(n)?"Wild card":Ji(n)?"Skip card":`${n.color} ${n.value}`}" ${((o=M.phase10)==null?void 0:o.turn)!=="play"?'aria-disabled="true"':""}><div class="phase10-card-band phase10-card-band-top"><b>${s}</b><b>${s}</b></div><b class="phase10-card-value">${r}</b><div class="phase10-card-band phase10-card-band-bottom"><b>${s}</b><b>${s}</b></div><i>${t==="wild"?"WILD":t==="skip"?"SKIP":n.color}</i></button>`}function TI(n){return[6,7,8,7,8,9,8,7,7,8][n-1]||6}function iM(n,e,t=0,r=[],s=[]){if(r.length===e)return s.push(r),s;for(let o=t;o<=n.length-(e-r.length);o++)iM(n,e,o+1,r.concat(n[o]),s);return s}function RI(n){const e=TI(n.phase),t=iM(n.hand,e).find(s=>Qx(n.phase,s));if(!t)return!1;const r=new Set(t.map(s=>s.id));return n.phaseCards=t,n.hand=n.hand.filter(s=>!r.has(s.id)),n.laid=!0,!0}function Xr(){const n=M.phase10;if(!n)return zm();document.body.classList.remove("home-mode","platform-home","match-mode"),document.body.classList.add("phase10-mode"),M.screen="phase10",Yr();const e=n.players[0];n.players[n.current];const t=n.discardPile.at(-1),r=new Set(n.selected),s=n.current===0;Qi(vi,`<section class="phase10-board"><header class="phase10-board-head"><div><span class="phase10-kicker">Round ${n.round}</span><h1>Phase ${e.phase}<small>${sm[e.phase-1]}</small></h1></div><div class="phase10-message ${s?"is-your-turn":""}">${Ht(n.message)}</div><button class="phase10-exit" id="exitPhase10">Exit game</button></header><section class="phase10-opponents">${n.players.slice(1).map((o,u)=>`<article class="phase10-player ${n.current===u+1?"is-active":""}"><span class="phase10-avatar">${om(o.avatar)}</span><div><b>${o.name}</b><small>Phase ${o.phase} · ${o.hand.length} cards</small></div><strong>${o.score}</strong>${o.laid?'<i class="phase10-done">✓</i>':""}</article>`).join("")}</section><main class="phase10-table"><div class="phase10-goal"><span>Your goal</span><strong>Phase ${e.phase}</strong><p>${sm[e.phase-1]}</p>${e.laid?"<b>Phase complete ✓</b>":""}</div><div class="phase10-decks"><button class="phase10-deck draw" id="phaseDraw" ${!s||n.turn!=="draw"?'aria-disabled="true"':""}><span>✦</span><small>Draw</small><i>${n.drawPile.length}</i></button><button class="phase10-deck discard ${(t==null?void 0:t.color)||""} ${Aa(t)?"wild":""} ${Ji(t)?"skip":""}" id="phaseDiscardDraw" ${!s||n.turn!=="draw"?'aria-disabled="true"':""}><span>${Aa(t)?"★":Ji(t)?"⊘":t==null?void 0:t.value}</span><small>Discard</small></button></div><div class="phase10-actions"><button id="phaseLay" ${!s||n.turn!=="play"||e.laid?'aria-disabled="true"':""}>Lay phase</button><button id="phaseDiscard" ${!s||n.turn!=="play"||n.selected.length!==1?'aria-disabled="true"':""}>Discard selected</button></div></main><section class="phase10-hand-wrap"><div class="phase10-hand-heading"><span>${om(e.avatar)}</span><div><b>Your hand</b><small>${e.hand.length} cards · select cards to lay or discard</small></div></div><div class="phase10-hand">${e.hand.map(o=>wI(o,r.has(o.id))).join("")}</div></section></section>`,{nativeControls:!1}),Qs("[data-phase-card]",(o,u)=>{if(n.current!==0||n.turn!=="play")return;const d=u.dataset.phaseCard;n.selected=n.selected.includes(d)?n.selected.filter(f=>f!==d):n.selected.concat(d),Xr()}),Qs("#phaseDraw",()=>Fy(!1)),Qs("#phaseDiscardDraw",()=>Fy(!0)),Qs("#phaseLay",AI),Qs("#phaseDiscard",CI),Qs("#exitPhase10",Da)}function Fy(n){const e=M.phase10,t=e==null?void 0:e.players[0];if(!e||e.current!==0||e.turn!=="draw")return;const r=n?e.discardPile.pop():e.drawPile.pop();r&&(t.hand.push(r),e.turn="play",e.message="Lay your phase or discard one card.",Xr())}function AI(){const n=M.phase10,e=n==null?void 0:n.players[0];if(!n||n.current!==0||n.turn!=="play"||e.laid)return;const t=e.hand.filter(s=>n.selected.includes(s.id));if(!Qx(e.phase,t)){n.message=`Those cards do not complete Phase ${e.phase}: ${sm[e.phase-1]}.`,Xr();return}const r=new Set(t.map(s=>s.id));e.phaseCards=t,e.hand=e.hand.filter(s=>!r.has(s.id)),e.laid=!0,n.selected=[],n.message="Phase complete! Discard one card to end your turn.",Xr()}function CI(){const n=M.phase10,e=n==null?void 0:n.players[0];if(!n||n.current!==0||n.turn!=="play"||n.selected.length!==1)return;const t=n.selected[0],r=e.hand.findIndex(o=>o.id===t);if(r<0)return;const[s]=e.hand.splice(r,1);n.discardPile.push(s),n.selected=[],Ji(s)&&(n.skipped=1),rM()}function rM(){const n=M.phase10,e=n.players[n.current];if(e.hand.length===0)return LI(e);n.current=(n.current+1)%n.players.length,n.skipped===n.current&&(n.message=`${n.players[n.current].name} was skipped!`,n.skipped=null,n.current=(n.current+1)%n.players.length),n.turn="draw",n.current===0?(n.message="Your turn: draw a card.",Xr()):(n.message=`${n.players[n.current].name} is thinking…`,Xr(),window.setTimeout(PI,650))}function PI(){const n=M.phase10;if(!n||n.current===0||n.finished)return;const e=n.players[n.current],t=n.drawPile.pop();t&&e.hand.push(t),RI(e);const r=e.hand.filter(o=>!Aa(o)&&!Ji(o)),s=(r.length?r:e.hand)[Math.floor(Math.random()*(r.length?r.length:e.hand.length))];s&&(e.hand.splice(e.hand.indexOf(s),1),n.discardPile.push(s),Ji(s)&&(n.skipped=(n.current+1)%n.players.length)),rM()}function LI(n){const e=M.phase10;if(e.players.forEach(r=>{r!==n&&(r.score+=r.hand.reduce((s,o)=>s+vI(o),0))}),n.phase+=1,n.phase>10){e.finished=!0,e.message=`${n.name} completed all ten phases!`,Xr();return}const t=eM(M.name,M.phase10Avatar);t.players.forEach((r,s)=>{r.phase=e.players[s].phase,r.score=e.players[s].score}),t.round=e.round+1,t.message=`${n.name} went out. New round!`,M.phase10=t,Xr()}function Hm(){var e,t,r;sd(),document.body.classList.remove("match-mode","lobby-mode","platform-home"),document.body.classList.add("home-mode","take5-entry-mode"),M.screen="take5-home",M.game=null,M.selected=null,ps(!0),Yr();const n=Ht(M.name);Qi(vi,`<section class="landing">
    <div class="hero-copy"><div class="eyebrow">TAKE 5 · QUICK TABLE</div><h1>Play a clever<br /><em>card game.</em></h1><p>Choose a card. Avoid the bulls. Bring friends.</p>
      <div class="hero-points"><span><i class="tiny-star">✳</i> 2–10 players</span><span><i class="tiny-star">✳</i> 10 cards each</span><span><i class="tiny-star">✳</i> maximum mischief</span></div>
    <div class="table-scene" aria-hidden="true"><div class="scene-felt"></div><div class="scene-card c1"><strong>12</strong>${Sr()}</div><div class="scene-card c2"><strong>38</strong>${Sr()}</div><div class="scene-card c3"><strong>64</strong>${Sr()}</div><div class="scene-card c4"><strong>91</strong>${Sr()}</div><div class="decor-cow">🐮</div><div class="scene-caption">a very serious card table</div></div>
    </div>
    <section class="setup-card" aria-label="Start a game">
      <div class="setup-tabs" role="tablist" aria-label="Game type">
        <button class="setup-tab ${M.tab==="rooms"?"active":""}" id="roomsTab" data-tab="rooms" role="tab" aria-controls="roomsPanel" aria-selected="${M.tab==="rooms"}">Create / join room</button>
        <button class="setup-tab ${M.tab==="bots"?"active":""}" id="botsTab" data-tab="bots" role="tab" aria-controls="botsPanel" aria-selected="${M.tab==="bots"}">Play with bots</button>
      </div>
      <div class="mode-content mode-panel ${M.tab==="rooms"?"active":""}" id="roomsPanel" data-panel="rooms" role="tabpanel" aria-labelledby="roomsTab">
        <div class="room-panel-intro"><span class="panel-kicker">ONLINE TABLE</span><h2>Play with friends</h2><p>Join a room with a code, or create a table and invite your friends.</p></div>
        <label class="field-label" for="roomPlayerName">Your name</label>
        <input class="text-field" id="roomPlayerName" maxlength="18" placeholder="e.g. Alex" autocomplete="name" value="${n}" />
        <section class="room-path join-path" aria-labelledby="joinRoomHeading">
          <div class="room-path-heading"><span class="room-path-step">01</span><div><h3 id="joinRoomHeading">Join a room</h3><p>Enter the four-digit code from your friend.</p></div></div>
          <label class="field-label" for="roomCode">Room code</label>
          <div class="join-room-controls"><input class="text-field room-code-input" id="roomCode" type="text" inputmode="numeric" pattern="[0-9]{4}" maxlength="4" placeholder="1234" aria-describedby="roomCodeHint" value="${Ht(M.roomPrefill||"")}" autocomplete="one-time-code" /><button class="primary-button action-button join-room-button" id="joinRoom">Join room</button></div>
          <span class="field-hint" id="roomCodeHint">Use the code shared by the host.</span>
        </section>
        <div class="room-divider"><span>OR CREATE YOUR OWN</span></div>
        <section class="room-path create-path" aria-labelledby="createRoomHeading">
          <div class="room-path-heading"><span class="room-path-step">02</span><div><h3 id="createRoomHeading">Create a room</h3><p>Open a table, then invite friends or add bots.</p></div></div>
          <button class="primary-button action-button" id="hostRoom">Create room</button>
        </section>
        <div class="inline-error" role="status" aria-live="polite"></div>
      </div>
      <div class="mode-content mode-panel ${M.tab==="bots"?"active":""}" id="botsPanel" data-panel="bots" role="tabpanel" aria-labelledby="botsTab">
        <div class="room-panel-intro"><span class="panel-kicker">SOLO TABLE</span><h2>A table of your own</h2><p>Practice your poker face. The bots are suspiciously confident.</p></div>
        <label class="field-label" for="playerName">Your name</label>
        <input class="text-field" id="playerName" maxlength="18" placeholder="e.g. Alex" autocomplete="name" value="${n}" />
        <div class="row-fields"><div><label class="field-label" for="botCount">Opponents</label><select class="select-field" id="botCount">${[1,2,3,4,5,6,7,8,9].map(s=>`<option value="${s}" ${M.botCount===s?"selected":""}>${s} ${s===1?"bot":"bots"}</option>`).join("")}</select></div><div><label class="field-label" for="botStyle">Bot style</label><select class="select-field" id="botStyle"><option value="clever">Clever</option><option value="chaotic">Chaotic</option></select></div></div>
        <button class="primary-button action-button" id="startBots">Shuffle up</button>
      </div>
    </section>
  </section>`),qt(".setup-tab",(s,o)=>{M.tab=o.dataset.tab,Hm()}),(e=document.querySelector("#botCount"))==null||e.addEventListener("change",s=>M.botCount=+s.target.value),qt("#startBots",()=>{Vh("#playerName"),Wm()}),qt("#hostRoom",()=>{Vh("#roomPlayerName"),FI()}),qt("#joinRoom",()=>{Vh("#roomPlayerName"),Ym(document.querySelector("#roomCode").value.trim())}),(t=document.querySelector("#roomCode"))==null||t.addEventListener("input",s=>{s.target.value=s.target.value.replace(/\D/g,"").slice(0,4)}),(r=document.querySelector("#roomCode"))==null||r.addEventListener("keydown",s=>{var o;s.key==="Enter"&&((o=document.querySelector("#joinRoom"))==null||o.dispatchEvent(new CustomEvent("rnpress",{bubbles:!0})))})}function Vh(n){var e;M.name=((e=document.querySelector(n))==null?void 0:e.value.trim())||"Player",localStorage.setItem("take5-name",M.name)}function Li(n){const e=document.querySelector(`[data-panel="${M.tab}"] .inline-error`);e&&(e.textContent=n)}function gi(n){var t;clearTimeout(M.toastTimer),(t=document.querySelector(".toast"))==null||t.remove();const e=document.createElement("div");e.className="toast",e.textContent=n,document.body.append(e),M.toastTimer=setTimeout(()=>e.remove(),2600)}const Il=["😂","😮","😭","👏","❤️","🐂"];function Gm(n){if(M.screen!=="game"||!Il.includes(n.emoji))return;const e=Array.from(document.querySelectorAll(".header-player[data-player-id]")).find(s=>s.dataset.playerId===n.playerId),t=e==null?void 0:e.getBoundingClientRect(),r=document.createElement("div");r.className="room-reaction-float",r.style.left=`${t?t.left+t.width/2:innerWidth/2}px`,r.style.top=`${t?t.bottom-4:innerHeight*.45}px`,r.innerHTML=`<span>${n.emoji}</span><small>${Ht(n.name||"Player")}</small>`,document.body.append(r),setTimeout(()=>r.remove(),1700)}function aM(n,e=null){M.connections.forEach((t,r)=>{if(r!==e&&t.open)try{t.send(n)}catch{}})}function sM(n){var r,s,o,u,d;if(!((r=M.mode)!=null&&r.startsWith("online"))||M.screen!=="game"||!Il.includes(n))return;const e=Date.now();if(e-(M.reactionCooldowns.get(M.clientId)||0)<650)return;M.reactionCooldowns.set(M.clientId,e);const t={type:"reaction",playerId:M.clientId,name:M.name||"Player",emoji:n};Gm(t),(s=document.querySelector("#gameMenuPanel"))==null||s.classList.add("is-hidden"),(o=document.querySelector("#gameMenuToggle"))==null||o.setAttribute("aria-expanded","false"),(u=document.querySelector(".menu-shell"))==null||u.classList.remove("is-open"),document.querySelectorAll(".hand-reaction-picker").forEach(f=>{f.hidden=!0}),document.querySelectorAll(".hand-reaction-trigger").forEach(f=>f.setAttribute("aria-expanded","false")),document.querySelectorAll(".hand-reaction-control").forEach(f=>f.classList.remove("is-expanded")),M.host?aM(t):(d=M.connection)!=null&&d.open&&M.connection.send({type:"reaction",emoji:n})}function DI(n,e=!1){const t=[{id:"self",name:M.name||"You",human:!0,online:!0,score:0,total:0,hand:[]}];for(let r=0;r<n;r++)t.push({id:`bot${r+1}`,name:["Milo","Nora","Pip","June","Otto","Bea","Finn","Kit","Lou"][r],human:!1,online:!0,score:0,total:0,hand:[]});return t}function Vm(n){const e=EI();return n.forEach(t=>t.hand=e.splice(0,10).sort((r,s)=>r-s)),e.splice(0,4).map(t=>[t])}function Wm(){var t,r;Ia("deal"),ps(!1),clearTimeout(M.countdownTimer),clearInterval(M.countdownInterval);const n=+(((t=document.querySelector("#botCount"))==null?void 0:t.value)||M.botCount||3);M.botCount=n,M.submittedTurn=!1,M.animating=!1,M.replay=null,M.replayKey=null,M.revealOrigins={},M.stageSeen=new Set,M.stageTurnKey=null;const e=DI(n);M.game={players:e,rows:Vm(e),turn:1,round:1,tieOffset:0,phase:"choosing",selections:{},lastReveal:null,mode:"local",botStyle:((r=document.querySelector("#botStyle"))==null?void 0:r.value)||"clever"},M.mode="local",M.screen="game",M.selected=null,M.screenTransition=!0,tr()}function II(n){n.round++,n.turn=1,n.tieOffset=(n.tieOffset+1)%n.players.length,n.rows=Vm(n.players),n.phase="choosing",n.selections={},n.lastReveal=null,delete n.pendingRowChoice}function $m(n,e){const t=n.hand;let r=t[0],s=1/0;for(const o of t){const u=e.rows.map((f,h)=>({i:h,top:f.at(-1),distance:o-f.at(-1),heads:f.reduce((_,m)=>_+ei(m),0)})).filter(f=>o>f.top).sort((f,h)=>h.top-f.top);let d;if(!u.length)d=26+e.rows.reduce((f,h)=>f+h.reduce((_,m)=>_+ei(m),0),0)*1.1+o/104;else{const f=u[0];d=f.heads*2.1+(f.distance<4?1.3:0)+(f.i===3?-.3:0),e.rows[f.i].length>=5&&(d+=7),e.rows[f.i].length>=4&&(d+=2.5),d+=o/500}e.botStyle==="chaotic"&&(d+=(Math.random()-.5)*9),d<s&&(s=d,r=o)}return r}function NI(n){var r;const e=M.game;if(M.animating||!e||e.phase!=="choosing"||!e.players[0].hand.includes(n))return;Ia("card");const t=(r=document.querySelector(`.hand-card[data-card="${n}"]`))==null?void 0:r.getBoundingClientRect();t&&(M.revealOrigins.self={left:t.left,top:t.top,width:t.width,height:t.height}),M.selected=n,e.players.slice(1).forEach(s=>e.selections[s.id]=$m(s,e)),e.selections.self=n,e.phase="countdown",e.countdownAt=Date.now()+3e3,M.selected=null,tr(),Zm(e,!1)}function oM(n,e){var u;const t=n.players.map((d,f)=>(f+n.tieOffset)%n.players.length),r=n.players.map(d=>({p:d,card:n.selections[d.id]})).sort((d,f)=>d.card-f.card||t.indexOf(n.players.indexOf(d.p))-t.indexOf(n.players.indexOf(f.p))),s=r.find(d=>d.p.hand.includes(d.card));if(s&&!n.rows.some(f=>s.card>f.at(-1))&&s.p.human&&e==null)return n.pendingRowChoice={playerId:s.p.id,card:s.card},n.phase="row-choice",!0;const o=[];for(const{p:d,card:f}of r){const h=d.hand.indexOf(f);if(h<0)continue;d.hand.splice(h,1);let _=n.rows.map((E,T)=>({i:T,top:E.at(-1)})).filter(E=>f>E.top).sort((E,T)=>T.top-E.top),m,v=0,x=!1;if(_.length)m=_[0].i,n.rows[m].length===5?(v=n.rows[m].slice(0,5).reduce((E,T)=>E+ei(T),0),d.score+=v,d.total+=v,x=!0,n.rows[m]=[f]):n.rows[m].push(f);else{if(m=e!=null&&d.id===((u=n.pendingRowChoice)==null?void 0:u.playerId)?e:n.rows.reduce((T,y,S)=>y.reduce((w,D)=>w+ei(D),0)<n.rows[T].reduce((w,D)=>w+ei(D),0)?S:T,0),!Number.isInteger(m)||m<0||m>=n.rows.length)return d.hand.splice(h,0,f),!0;v=n.rows[m].reduce((T,y)=>T+ei(y),0),d.score+=v,d.total+=v,x=!0,n.rows[m]=[f]}o.push({playerId:d.id,name:d.name,card:f,rowIndex:m,penalty:v,tookRow:x})}return n.lastReveal=o,n.selections={},delete n.pendingRowChoice,n.tieOffset=(n.tieOffset+1)%n.players.length,M.selected=null,M.submittedTurn=!1,n.players.every(d=>d.hand.length===0)?n.players.some(f=>f.total>=66)?(n.phase="finished",M.screen="result"):n.phase="round-break":(n.turn++,n.phase="choosing"),!1}async function Xm(){return zy(()=>import("https://esm.sh/peerjs@1.5.5?bundle"),[])}function OI(){const n=new Uint16Array(1);return crypto.getRandomValues(n),String(n[0]%1e4).padStart(4,"0")}function UI(n){var t;let e=id(cs);return((e==null?void 0:e.roomId)!==n||!e.token)&&(e={roomId:n,token:((t=crypto.randomUUID)==null?void 0:t.call(crypto))||`${Date.now()}-${Math.random().toString(36).slice(2)}`},localStorage.setItem(cs,JSON.stringify(e))),M.resumeToken=e.token,e.token}function vo(){if(!(!M.host||!M.roomId))try{localStorage.setItem(Bm,JSON.stringify({roomId:M.roomId,name:M.name,screen:M.screen,players:M.players,game:M.game}))}catch{gi("Could not save a recovery copy of this room on this device.")}}function lM(n,e){M.peer===n&&(e.on("open",()=>{}),e.on("data",t=>BI(e,t)),e.on("close",()=>{var r,s,o;if(M.peer!==n||M.connections.get(e.peer)!==e)return;const t=M.players.find(u=>u.id===e.peer);t&&(t.online=!1),M.connections.delete(e.peer),vo(),((r=M.game)==null?void 0:r.phase)==="choosing"?(Al(),er()):((s=M.game)==null?void 0:s.phase)==="row-choice"?(((o=M.game.pendingRowChoice)==null?void 0:o.playerId)===(t==null?void 0:t.id)&&uM(),er()):M.screen==="lobby"&&ro()}))}function qm(n){n.on("disconnected",()=>{M.peer===n&&rd(n,1200)}),n.on("open",()=>clearTimeout(M.peerReconnectTimer))}function rd(n,e=3e3){M.peer===n&&(clearTimeout(M.peerReconnectTimer),M.peerReconnectTimer=setTimeout(()=>{if(!(M.peer!==n||!n.disconnected)){try{n.reconnect()}catch{}M.peer===n&&n.disconnected&&rd(n,4e3)}},e))}async function FI(){if(!M.busy){M.busy=!0,Li("Opening your room…");try{const{Peer:n}=await Xm();let e=0;const t=()=>{const r=OI(),s=new n(`take5-${r}`);M.peer=s,M.host=!0,qm(s),s.on("open",o=>{M.peer===s&&(localStorage.removeItem(cs),M.roomId=r,M.clientId=o,M.players=[{id:o,name:M.name,human:!0,online:!0,score:0,total:0,hand:[]}],M.screen="lobby",M.mode="online-host",M.busy=!1,M.screenTransition=!0,history.replaceState({},"",`?room=${encodeURIComponent(r)}`),ho(),vo())}),s.on("connection",o=>lM(s,o)),s.on("error",o=>{if(M.peer===s){if(o.type==="unavailable-id"&&e<8){e++,s.destroy(),M.peer=null,setTimeout(t,120);return}M.busy=!1,M.screen==="home"?Li(o.type==="unavailable-id"?"Could not reserve a room code. Try again.":"Room connection failed. Check your internet and try again."):gi("Room connection hiccup.")}})};t()}catch{M.busy=!1,Li("Online rooms need an internet connection. Please try again.")}}}async function kI(n){if(!(n!=null&&n.roomId)||!/^\d{4}$/.test(n.roomId))return Da();M.busy=!0,M.name=n.name||M.name,Li("Restoring your room…");try{const{Peer:e}=await Xm();let t=0;const r=()=>{const s=new e(`take5-${n.roomId}`);M.peer=s,M.host=!0,qm(s),s.on("open",o=>{var u;M.peer===s&&(ps(!1),M.roomId=n.roomId,M.clientId=o,M.game=n.game||null,M.players=((u=M.game)==null?void 0:u.players)||n.players||[],M.game&&(M.players=M.game.players),M.mode="online-host",M.screen=M.game?M.game.phase==="finished"?"result":"game":"lobby",M.busy=!1,M.screenTransition=!0,M.selected=null,M.submittedTurn=!1,M.animating=!1,M.replay=null,M.replayKey=null,M.revealOrigins={},history.replaceState({},"",`?room=${encodeURIComponent(n.roomId)}`),M.screen==="lobby"?ho():M.screen==="result"?jm():(tr(),M.game.phase==="countdown"&&Zm(M.game,!0)),vo())}),s.on("connection",o=>lM(s,o)),s.on("error",o=>{if(M.peer===s){if(o.type==="unavailable-id"&&t<25){t++,s.destroy(),M.peer=null,setTimeout(r,Math.min(1800,180+t*120));return}M.busy=!1,t>=25?Li("This room is still active in another tab. Close that tab, then refresh to restore it."):Li("Could not reconnect to your room. Refresh to try again."),s.destroy(),M.peer=null,M.host=!1}})};r()}catch{M.busy=!1,M.host=!1,Li("Could not restore the room. Check your connection and refresh to try again.")}}function BI(n,e){var t,r;if(!(!e||typeof e!="object")){if(e.type==="hello"){const s=typeof e.resumeToken=="string"?e.resumeToken.slice(0,100):"",o=M.players.find(d=>d.id===n.peer||s&&d.resumeToken===s);if(o){const d=o.id,f=M.connections.get(d);if(f&&f!==n){M.connections.delete(d);try{f.close()}catch{}}o.id=n.peer,o.online=!0,M.game&&d!==n.peer&&(Object.hasOwn(M.game.selections||{},d)&&(M.game.selections[n.peer]=M.game.selections[d],delete M.game.selections[d]),((t=M.game.pendingRowChoice)==null?void 0:t.playerId)===d&&(M.game.pendingRowChoice.playerId=n.peer),M.game.lastReveal&&(M.game.lastReveal=M.game.lastReveal.map(h=>h.playerId===d?{...h,playerId:n.peer}:h))),M.connections.set(n.peer,n),n.send({type:"welcome",id:n.peer,roomId:M.roomId}),M.game?(clearTimeout(M.disconnectAdvanceTimer),M.disconnectAdvanceTimer=null,n.send(lm(n.peer)),Al(),vo(),er()):ro();return}if(M.game){n.send({type:"error",message:"This game is already in progress. Rejoin using your original invite link."}),n.close();return}if(M.players.length>=10){n.send({type:"error",message:"This table is full (10 players max)."}),n.close();return}const u={id:n.peer,name:String(e.name||"Player").slice(0,18),resumeToken:s||void 0,human:!0,online:!0,ready:!1,score:0,total:0,hand:[]};M.players.push(u),M.connections.set(n.peer,n),n.send({type:"welcome",id:n.peer,roomId:M.roomId}),M.screen==="lobby"&&ro();return}if(e.type==="sync"){if(M.connections.get(n.peer)!==n)return;n.send({type:"welcome",id:n.peer,roomId:M.roomId}),M.game?n.send(lm(n.peer)):n.send({type:"lobby",players:M.players.map(({id:s,name:o,online:u,human:d,ready:f})=>({id:s,name:o,online:u,human:d,ready:f})),roomId:M.roomId});return}if(e.type==="ready"&&M.screen==="lobby"){const s=M.players.find(o=>o.id===n.peer);if(!s)return;s.ready=!!e.ready,ro();return}if(e.type==="reaction"){const s=M.players.find(d=>d.id===n.peer),o=Date.now();if(M.screen!=="game"||!(s!=null&&s.human)||!s.online||!Il.includes(e.emoji)||o-(M.reactionCooldowns.get(n.peer)||0)<650)return;M.reactionCooldowns.set(n.peer,o);const u={type:"reaction",playerId:n.peer,name:s.name,emoji:e.emoji};Gm(u),aM(u,n.peer);return}if(e.type==="pick"&&M.game&&M.game.phase==="choosing"&&!M.animating){const s=M.players.find(o=>o.id===n.peer);if(!s||!s.hand.includes(+e.card)||M.game.selections[n.peer])return;M.game.selections[n.peer]=+e.card,Al(),er()}if(e.type==="choose-row"&&((r=M.game)==null?void 0:r.phase)==="row-choice"){const s=M.game.pendingRowChoice;if(!s||s.playerId!==n.peer||!Number.isInteger(+e.rowIndex))return;Km(+e.rowIndex)}}}function Al(){const n=M.game;if(M.animating||!n||n.phase!=="choosing"||n.players.some(r=>r.human&&r.online&&!n.selections[r.id]))return;if(n.players.some(r=>r.human&&!r.online&&!n.selections[r.id])){uM();return}clearTimeout(M.disconnectAdvanceTimer),M.disconnectAdvanceTimer=null,n.players.filter(r=>!r.human&&!n.selections[r.id]).forEach(r=>n.selections[r.id]=$m(r,n)),n.phase="countdown",n.countdownAt=Date.now()+3e3,Zm(n,!0)}function uM(){M.disconnectAdvanceTimer||(M.disconnectAdvanceTimer=setTimeout(()=>{var e;M.disconnectAdvanceTimer=null;const n=M.game;if(n){if(n.phase==="choosing")n.players.filter(t=>t.human&&!t.online&&!n.selections[t.id]).forEach(t=>n.selections[t.id]=$m(t,n)),Al(),er();else if(n.phase==="row-choice"&&n.pendingRowChoice){const r=((e=n.rows.map((s,o)=>({i:o,penalty:s.reduce((u,d)=>u+ei(d),0)})).sort((s,o)=>s.penalty-o.penalty||s.i-o.i)[0])==null?void 0:e.i)??0;Km(r)}}},2e4))}function ro(){vo();const n={type:"lobby",players:M.players.map(({id:e,name:t,online:r,human:s,ready:o})=>({id:e,name:t,online:r,human:s,ready:o})),roomId:M.roomId};M.connections.forEach(e=>{try{e.send(n)}catch{}}),ho()}function lm(n){const e=M.game;return e?{type:"game",viewer:n,game:{...e,players:e.players.map(t=>{const{resumeToken:r,...s}=t;return{...s,hand:t.id===n?t.hand:void 0}}),readyPlayers:Object.keys(e.selections),selections:e.phase==="row-choice"?{...e.selections}:{},mode:"online"}}:null}function er(){if(M.screen==="lobby"){ro();return}vo(),M.connections.forEach((n,e)=>{try{n.send(lm(e))}catch{}}),M.clientId&&tr()}function zI(){var e,t;if(!M.roomId){gi("This room is not connected.");return}if(M.host){M.screen==="lobby"?ro():er(),gi("Room state refreshed for everyone.");return}const n=M.peer;if((e=M.connection)!=null&&e.open){M.connection.send({type:"sync"}),gi("Refreshing room sync…");return}if(n){if(M.recoveringGuest=!0,M.connection=null,clearTimeout(M.reconnectTimer),n.disconnected)try{n.reconnect()}catch{rd(n)}ad(M.roomId,n),gi("Reconnecting to the room…");return}M.resumeToken=((t=id(cs))==null?void 0:t.token)||M.resumeToken,M.busy=!1,Ym(M.roomId)}function Yc(){var e;if(!M.host||M.players.filter(t=>t.human&&t.online).length<1)return;Ia("deal"),ps(!1),clearTimeout(M.countdownTimer),clearInterval(M.countdownInterval);let n=+(((e=document.querySelector("#lobbyBots"))==null?void 0:e.value)||0);M.players.filter(t=>t.human&&t.online).length===1&&!M.players.some(t=>!t.human)&&n===0&&(n=1);for(let t=0;t<n&&M.players.length<10;t++){const r=M.players.filter(s=>!s.human).length;M.players.push({id:`bot${r+1}`,name:["Milo","Nora","Pip","June","Otto","Bea","Finn","Kit","Lou"][r],human:!1,online:!0,score:0,total:0,hand:[]})}M.game={players:M.players,rows:Vm(M.players),turn:1,round:1,tieOffset:0,phase:"choosing",selections:{},lastReveal:null,mode:"online"},M.submittedTurn=!1,M.animating=!1,M.replay=null,M.replayKey=null,M.revealOrigins={},M.stageSeen=new Set,M.stageTurnKey=null,M.screen="game",M.mode="online-host",M.screenTransition=!0,er()}function ad(n,e,t=0){if(M.peer!==e||M.host||M.connection&&M.connection.open)return;let r;try{r=e.connect(`take5-${n}`,{reliable:!0})}catch{um(n,e,t);return}M.connection=r;let s=!1,o=setTimeout(()=>{!s&&M.connection===r&&r.close()},1e4);r.on("open",()=>{M.peer===e&&r.send({type:"hello",name:M.name,resumeToken:M.resumeToken})}),r.on("data",u=>{(u==null?void 0:u.type)==="welcome"&&(s=!0,clearTimeout(o),M.recoveringGuest=!1),HI(u)}),r.on("error",()=>r.close()),r.on("close",()=>{clearTimeout(o),!(M.connection!==r||M.peer!==e)&&um(n,e,t)})}function um(n,e,t){if(!(M.peer!==e||M.host)){if(!M.recoveringGuest&&M.screen!=="game"&&M.screen!=="lobby"){M.busy=!1,Li("Could not reach that room. Check the code and try again.");return}M.recoveringGuest=!0,clearTimeout(M.reconnectTimer),M.reconnectTimer=setTimeout(()=>ad(n,e,t+1),Math.min(8e3,700*Math.pow(2,Math.min(t,3))))}}function Ym(n){if(!M.busy){if(!/^\d{4}$/.test(n)){Li("Enter the 4-digit room code.");return}M.busy=!0,M.roomId=n,UI(n),Li("Finding your table…"),Xm().then(({Peer:e})=>{const t=new e;M.peer=t,M.host=!1,qm(t),t.on("open",()=>ad(n,t)),t.on("error",r=>{if(r.type==="peer-unavailable"&&M.recoveringGuest){um(n,t,0);return}M.screen==="home"&&!M.recoveringGuest&&(M.busy=!1,Li(r.type==="peer-unavailable"?"Room not found. Check the code and try again.":"Could not connect. Check your internet and try again."))})}).catch(()=>{M.busy=!1,Li("Online rooms need an internet connection. Please try again.")})}}function HI(n){var e;if((n==null?void 0:n.type)==="reaction")Gm(n);else if((n==null?void 0:n.type)==="welcome")M.clientId=n.id,M.roomId=n.roomId,M.busy=!1,M.mode="online-guest",M.game||(M.screen="lobby"),localStorage.setItem(cs,JSON.stringify({roomId:n.roomId,token:M.resumeToken})),M.game||ho();else if((n==null?void 0:n.type)==="lobby")M.players=n.players,M.roomId=n.roomId,M.screen!=="game"&&(M.screen="lobby"),ho();else if((n==null?void 0:n.type)==="game"){const t=M.game,r=t&&(t.turn!==n.game.turn||t.round!==n.game.round);M.game=n.game,M.players=n.game.players,M.clientId=n.viewer,M.mode="online-guest",M.screen=n.game.phase==="finished"?"result":"game",r&&(M.selected=null,M.submittedTurn=!1),M.submittedTurn=!!((e=n.game.readyPlayers)!=null&&e.includes(n.viewer)),M.recoveringGuest=!1,tr()}else(n==null?void 0:n.type)==="error"&&(M.busy=!1,gi(n.message))}function GI(n){var t,r,s;if(M.animating||((t=M.game)==null?void 0:t.phase)!=="choosing")return;Ia("card");const e=(r=document.querySelector(`.hand-card[data-card="${n}"]`))==null?void 0:r.getBoundingClientRect();if(e&&(M.revealOrigins[M.clientId]={left:e.left,top:e.top,width:e.width,height:e.height}),M.host){if(M.game.selections[M.clientId])return;M.game.selections[M.clientId]=n,Al(),er()}else(s=M.connection)!=null&&s.open&&(M.connection.send({type:"pick",card:n}),M.selected=n,M.submittedTurn=!0,tr())}function Km(n){var o;const e=M.game,t=e==null?void 0:e.pendingRowChoice;if(!e||!t||n<0||n>=e.rows.length)return;clearTimeout(M.disconnectAdvanceTimer),M.disconnectAdvanceTimer=null;const r=M.mode==="local"?(o=e.players[0])==null?void 0:o.id:M.clientId;!(t.playerId===r)&&!M.host||(oM(e,n),M.host?er():tr())}function VI(n){var s,o;Ia("row");const e=M.game,t=e==null?void 0:e.pendingRowChoice,r=M.mode==="local"?(s=e==null?void 0:e.players[0])==null?void 0:s.id:M.clientId;!t||t.playerId!==r||(M.mode==="local"||M.host?Km(n):(o=M.connection)!=null&&o.open&&M.connection.send({type:"choose-row",rowIndex:n}))}function ho(){ps(!1),document.body.classList.remove("home-mode"),document.body.classList.add("match-mode","lobby-mode"),M.screen="lobby";const n=M.players.filter(s=>s.online!==!1).length,e=M.players.find(s=>s.id===M.clientId),t=!!(e!=null&&e.ready),r=Ht(M.roomId);Yr(),Qi(vi,`<section class="game-layout lobby-layout"><div class="lobby-row"><strong>ROOM CODE</strong><span class="room-code">${r}</span><span class="lobby-wait">${n<2?"Waiting for friends, or start a practice game now.":`${n} players connected`}</span></div><div class="tabletop"><div class="tabletop-head"><span>THE TABLE</span><strong>2–10 PLAYERS</strong></div><div class="row-empty">${n<2?"Share the invite link, or start now and a bot will join your table.":"Players are here. The host can start the game."}</div></div><div class="game-bottom lobby-bottom"><div></div><aside class="turn-side"><div class="turn-state">READY TO PLAY</div><p class="turn-message">${n<2?"Start now and play with one bot, or wait for friends to join.":"Everyone is here. Deal the cards!"}</p>${M.host?'<label class="field-label" for="lobbyBots">Bots to add</label><select class="select-field" id="lobbyBots"><option value="0">No bots</option><option value="1">1 bot</option><option value="2">2 bots</option><option value="3">3 bots</option></select><button class="primary-button lobby-start" id="beginOnline">Start game ↗</button>':`<button class="primary-button lobby-start lobby-ready" id="toggleReady">${t?"Ready ✓":"Ready up"}</button><div class="turn-help">${t?"You’re ready. Waiting for the host…":"Tap Ready when you’re set to play."}</div>`}</aside></div></section>`),qt("#beginOnline",Yc),qt("#toggleReady",()=>{var o;const s=!t;M.players=M.players.map(u=>u.id===M.clientId?{...u,ready:s}:u),(o=M.connection)==null||o.send({type:"ready",ready:s}),ho()})}function cM(n,e){var t;(t=navigator.clipboard)==null||t.writeText(n).then(()=>gi(e)).catch(()=>gi("Could not copy. Select the room code to copy it."))}function WI(){const e=`${Kx?cI:`${location.origin}${location.pathname}`}?room=${encodeURIComponent(M.roomId)}`;cM(e,"Invite link copied")}function cm(){return`<div class="card-back-design"><span class="back-emblem">${Sr()}</span><b>TAKE<br>5</b><span class="back-stars">✦　✦　✦</span></div>`}function Zm(n,e){clearTimeout(M.countdownTimer),M.countdownTimer=setTimeout(()=>{M.game!==n||n.phase!=="countdown"||(clearInterval(M.countdownInterval),M.countdownInterval=null,n.phase="choosing",delete n.countdownAt,oM(n),n.phase==="finished"&&(M.screen="result"),e?er():tr())},Math.max(0,(n.countdownAt||Date.now()+3e3)-Date.now()))}function $I(n){if(clearInterval(M.countdownInterval),M.countdownInterval=null,n.phase!=="countdown")return;const e=()=>{const t=vi.querySelector("[data-countdown]");if(!t)return;const r=Math.max(0,(n.countdownAt-Date.now())/1e3);t.textContent=r>0?String(Math.ceil(r)):"REVEAL"};e(),M.countdownInterval=setInterval(e,100)}function XI(){var t;const n=Array.from(vi.querySelectorAll(".stage-card-back"));if(!n.length)return;const e=[];for(const r of n){const s=r.dataset.stagePlayer;if(M.stageSeen.has(s))continue;M.stageSeen.add(s);const o=Array.from(document.querySelectorAll("[data-player-id]")).find(v=>v.dataset.playerId===s),u=M.revealOrigins[s]||((t=o==null?void 0:o.querySelector(".opponent-cards"))==null?void 0:t.getBoundingClientRect())||(o==null?void 0:o.getBoundingClientRect()),d=r.getBoundingClientRect();if(!u){r.classList.remove("stage-pending");continue}const f=document.createElement("div");f.className="flying-back",f.innerHTML=cm(),document.body.append(f);const h={x:u.left+u.width/2,y:u.top+u.height/2},_={x:d.left+d.width/2,y:d.top+d.height/2};f.style.left=`${h.x}px`,f.style.top=`${h.y}px`;const m=(async()=>{try{await f.animate([{left:`${h.x}px`,top:`${h.y}px`,transform:"translate(-50%,-50%) scale(.5) rotate(-7deg)"},{left:`${_.x}px`,top:`${_.y}px`,transform:"translate(-50%,-50%) scale(1) rotate(0deg)"}],{duration:330,easing:"cubic-bezier(.18,.75,.25,1)",fill:"forwards"}).finished}catch{}f.remove(),r.classList.remove("stage-pending")})();e.push(m)}Promise.all(e)}function qI(n){var t;if(!((t=n.lastReveal)!=null&&t.length))return;const e=`${n.round}:${n.turn}:${n.lastReveal.map(r=>`${r.playerId}-${r.card}`).join(",")}`;e!==M.replayKey&&(M.replayKey=e,M.replay={key:e,reveals:n.lastReveal.map(r=>({...r})),seen:new Set,active:!0,running:!1},M.revealOrigins=M.revealOrigins||{},M.animating=!0)}function ky(n){return new Promise(e=>setTimeout(e,n))}async function YI(){var r,s,o,u,d;const n=M.replay;if(!(n!=null&&n.active)||n.running)return;Ia("deal"),n.running=!0,M.animating=!0;const e=matchMedia("(prefers-reduced-motion: reduce)").matches,t=e?180:500;await ky(e?150:720);for(const f of n.reveals){if(M.replay!==n||M.screen==="home")break;const h=vi.querySelector(`.row-lane[data-row-index="${f.rowIndex}"]`),_=vi.querySelector(`.playing-card[data-row-index="${f.rowIndex}"][data-card-number="${f.card}"]`),m=_||(h==null?void 0:h.querySelector(".row-cards"));let v=(r=M.revealOrigins)==null?void 0:r[f.playerId];if(!v){const S=Array.from(document.querySelectorAll("[data-player-id]")).find(w=>w.dataset.playerId===f.playerId);v=((s=S==null?void 0:S.querySelector(".opponent-cards"))==null?void 0:s.getBoundingClientRect())||(S==null?void 0:S.getBoundingClientRect())||((o=vi.querySelector(".hand-area"))==null?void 0:o.getBoundingClientRect())}if(!v||!m){n.seen.add(f.card),_==null||_.classList.remove("reveal-pending");continue}const x={x:v.left+v.width/2,y:v.top+v.height/2},E=m.getBoundingClientRect(),T={x:E.left+E.width/2,y:E.top+E.height/2},y=document.createElement("div");y.className="flying-card",y.innerHTML=to(f.card),document.body.append(y),y.style.left=`${x.x}px`,y.style.top=`${x.y}px`;try{await y.animate([{left:`${x.x}px`,top:`${x.y}px`,transform:"translate(-50%,-50%) scale(.62) rotate(-5deg)"},{left:`${(x.x+T.x)/2}px`,top:`${(x.y+T.y)/2-24}px`,transform:"translate(-50%,-50%) scale(.86) rotate(2deg)"},{left:`${T.x}px`,top:`${T.y}px`,transform:"translate(-50%,-50%) scale(1) rotate(0deg)"}],{duration:t,easing:"cubic-bezier(.2,.78,.24,1)",fill:"forwards"}).finished}catch{}if(y.remove(),M.replay!==n)break;n.seen.add(f.card),_==null||_.classList.remove("reveal-pending"),h==null||h.classList.add("card-landed"),setTimeout(()=>h==null?void 0:h.classList.remove("card-landed"),360),await ky(e?40:130)}M.replay===n&&(n.active=!1,n.running=!1,M.animating=!1,M.revealOrigins={},((u=M.game)==null?void 0:u.phase)==="finished"?(M.screen="result",jm()):((d=M.game)==null?void 0:d.phase)==="round-break"?(II(M.game),M.stageSeen=new Set,M.stageTurnKey=null,M.host?er():tr()):tr())}function tr(){var y,S,w,D,L,N,I,b,P;if(!M.game)return;const n=M.game;if(qI(n),M.screen==="result"&&!((y=M.replay)!=null&&y.active)){jm();return}document.body.classList.remove("home-mode","lobby-mode"),document.body.classList.add("match-mode"),M.screen="game",Yr();const e=n.players.find(k=>k.id===M.clientId)||n.players[0],t=(e==null?void 0:e.hand)||[],r=n.phase==="choosing",s=(S=M.mode)==null?void 0:S.startsWith("online"),o=n.readyPlayers||Object.keys(n.selections||{}),u=s&&(!!((w=n.selections)!=null&&w[M.clientId])||o.includes(M.clientId)||M.submittedTurn);(D=e==null?void 0:e.hand)==null||D.length;const d=`${n.round}:${n.turn}`;M.stageTurnKey!==d&&(M.stageTurnKey=d,M.stageSeen=new Set);const f=new Set(o);s&&u&&f.add(M.clientId);const h=n.players.filter(k=>f.has(k.id)),_=((L=n.selections)==null?void 0:L[e.id])??(u?M.selected:null),m=_==null?t:t.filter(k=>k!==_),v=new Set((N=M.replay)!=null&&N.active?M.replay.reveals.filter(k=>!M.replay.seen.has(k.card)).map(k=>`${k.rowIndex}:${k.card}`):[]),x=n.phase==="row-choice"?n.pendingRowChoice:null,E=!!x&&x.playerId===e.id,T=x?n.players.find(k=>k.id===x.playerId):null;Qi(vi,`<section class="game-layout">
  <div class="tabletop"><div class="tabletop-head"><span>✦ THE MEADOW TABLE ✦</span><strong>ROUND ${n.round} <span>·</span> TURN ${Math.min(n.turn,10)} OF 10</strong></div><div class="rows">${n.rows.map((k,F)=>{var K;const G=k.reduce((Y,H)=>Y+ei(H),0);return`<div class="row-lane ${(K=n.lastReveal)!=null&&K.some(Y=>Y.rowIndex===F&&Y.playerId===e.id&&Y.tookRow)?"target":""}" data-row-index="${F}"><div class="row-label"><span>ROW ${F+1}</span></div><b class="row-total bull-counter-badge" aria-label="${G} bullheads"><strong>${G}</strong>${Sr()}</b><div class="row-cards">${k.map(Y=>`<div class="playing-card ${v.has(`${F}:${Y}`)?"reveal-pending":""}" data-row-index="${F}" data-card-number="${Y}" aria-label="${Y}, ${ei(Y)} bullheads">${to(Y)}</div>`).join("")}</div></div>`}).join("")}</div></div>
  <div class="stage-zone ${h.length?"has-cards":""} ${n.phase==="countdown"?"countdown-active":""}">${h.map(k=>{var G;const F=((G=n.selections)==null?void 0:G[k.id])??(k.id===(x==null?void 0:x.playerId)?x.card:null);return x&&Number.isInteger(F)?`<div class="stage-reveal-card" data-stage-player="${Ht(k.id)}" aria-label="${Ht(k.name)} played ${F}">${to(F)}<small>${Ht(k.name)} · ${F}</small></div>`:`<div class="stage-card-back ${M.stageSeen.has(k.id)?"":"stage-pending"}" data-stage-player="${Ht(k.id)}">${cm()}<small>${Ht(k.name)}</small></div>`}).join("")}${n.phase==="countdown"?'<div class="reveal-countdown"><span>REVEALING IN</span><strong data-countdown>3</strong></div>':""}</div>
  ${(I=M.replay)!=null&&I.active?`<div class="reveal-bay">${M.replay.reveals.map(k=>{var F;return`<div class="reveal-card"><div class="reveal-flip"><div class="reveal-side reveal-back">${cm()}</div><div class="reveal-side reveal-front">${to(k.card)}</div></div><small>${Ht(((F=n.players.find(G=>G.id===k.playerId))==null?void 0:F.name)||k.name||"Player")}</small></div>`}).join("")}</div>`:""}
  ${x?`<section class="row-choice-bay ${E?"is-your-choice":"is-waiting"}" aria-labelledby="rowChoiceTitle" aria-live="polite">
    <div class="row-choice-header">
      <div class="row-choice-card">${to(x.card)}</div>
      <div class="row-choice-copy"><span class="row-choice-eyebrow">${E?"YOUR LOW CARD":"ROW CHOICE"}</span><h2 id="rowChoiceTitle">${E?"Choose a row to collect":`#${Ht((T==null?void 0:T.name)||"Player")} waiting for a row choice`}</h2><p>${E?"Pick the row of bullheads you want to take.":`${Ht((T==null?void 0:T.name)||"The player")} is choosing which row to collect.`}</p></div>
    </div>
    <div class="row-choice-options" role="group" aria-label="Choose a row">
      ${n.rows.map((k,F)=>{const G=k.reduce((K,Y)=>K+ei(Y),0);return`<button class="row-choice-option" data-row-choice="${F}" aria-label="Row ${F+1}, take ${G} ${G===1?"bullhead":"bullheads"}" ${E?"":"disabled"}><span class="row-choice-option-top"><b>ROW ${String(F+1).padStart(2,"0")}</b><strong class="row-choice-penalty bull-counter-badge" aria-hidden="true"><span>${G}</span>${Sr()}</strong></span><span class="row-choice-preview" aria-hidden="true">${k.map(K=>`<i>${K}</i>`).join("")}</span><span class="row-choice-action">${E?"Take row":"Waiting"} <b aria-hidden="true">→</b></span></button>`}).join("")}
    </div>
  </section>`:""}
  <div class="game-bottom"><section class="hand-area" data-player-id="${Ht(e.id)}"><div class="hand-heading"><h2><span class="your-avatar">${nM(e,0)}</span> Your hand <span class="my-score" aria-label="Your score: ${e.total||0} bullheads"><b>${e.total||0}</b>${Sr()}</span>${s?`<span class="hand-reaction-control"><button type="button" class="hand-reaction-trigger" aria-label="Open reactions" aria-expanded="false">☺</button><span class="hand-reaction-picker" role="group" aria-label="Choose a reaction" hidden>${Il.map(k=>`<button type="button" class="hand-reaction-option" data-reaction="${k}" aria-label="Send ${k} reaction">${k}</button>`).join("")}</span></span>`:""}</h2><span>${u?"PICK LOCKED IN":"PICK YOUR CARD"}</span></div><div class="hand" role="group" aria-label="Your cards">${m.map((k,F)=>`<button class="hand-card ${M.selected===k?"selected":""}" style="--hand-index:${F}" data-card="${k}" aria-label="Card ${k}, ${ei(k)} bullheads${M.selected===k?", selected":""}" aria-pressed="${M.selected===k}" ${!r||u||M.animating?"disabled":""}>${to(k)}</button>`).join("")}</div></section><aside class="turn-side"><div class="turn-state ${u?"done":s?"waiting":""}">${u?"PICK LOCKED IN":s?"EVERYONE PICKS AT ONCE":"YOUR TURN"}</div><p class="turn-message">${u?s?"Waiting for the other players…":"Your card is away. Let’s see where it lands.":"Pick a card and dodge those bullheads."}</p><button id="playCard" class="primary-button play-button" ${M.selected===null||u||!r||M.animating?"disabled":""}>Play card <span>↗</span></button><div class="turn-help">${(b=M.lastReveal)!=null&&b.length?KI(n.lastReveal,e.id):"Lowest bigger card wins the row."}</div></aside></div></section>`),qt("[data-card]",(k,F)=>{F.getAttribute("aria-disabled")!=="true"&&(M.selected=+F.dataset.card,tr())}),qt("#playCard",()=>{M.selected!=null&&!M.animating&&(M.mode==="local"?NI(M.selected):GI(M.selected))}),qt("[data-row-choice]",(k,F)=>VI(+F.dataset.rowChoice)),qt(".hand-reaction-trigger",(k,F)=>{var Y;const G=F.nextElementSibling,K=F.getAttribute("aria-expanded")!=="true";F.setAttribute("aria-expanded",String(K)),G.hidden=!K,(Y=F.closest(".hand-reaction-control"))==null||Y.classList.toggle("is-expanded",K)}),qt(".hand-reaction-option",(k,F)=>sM(F.dataset.reaction)),n.phase==="countdown"?$I(n):(clearInterval(M.countdownInterval),M.countdownInterval=null),XI(),(P=M.replay)!=null&&P.active&&YI()}function KI(n,e){const t=n.find(r=>r.playerId===e);return t?`${t.penalty?`You took ${t.penalty} bullheads.`:`Your ${t.card} landed in row ${t.rowIndex+1}.`} ${n.length>1?n.filter(r=>r.playerId!==e).map(r=>`${Ht(r.name)} ${r.penalty?`took ${r.penalty} bulls`:`played ${r.card}`}`).join(" · "):""}`:n.map(r=>`${Ht(r.name)} played ${r.card}${r.penalty?` and took ${r.penalty} bulls`:""}`).join(" · ")}function jm(){document.body.classList.add("match-mode"),M.screen="result",Yr();const n=M.game.players.slice().sort((t,r)=>t.total-r.total),e=n[0];Qi(vi,`<section class="result-screen"><div class="result-mark">🏆</div><div class="eyebrow">THAT’S A WRAP</div><h1>${e.id===M.clientId?"You kept your cool!":`${Ht(e.name)} takes it!`}</h1><p>Fewest bullheads at the table. A suspiciously good run.</p><div class="final-scores">${n.map((t,r)=>`<div class="final-score"><span>${r===0?"✳ ":""}${Ht(t.name)}${t.id===M.clientId?" (you)":""}</span><b aria-label="${t.total} bullheads">${t.total}${Sr()}</b></div>`).join("")}</div><button class="primary-button lobby-start" id="playAgain">Play again ↗</button><button class="pill-button" id="backHome">Back to table</button></section>`),qt("#playAgain",()=>{M.mode.startsWith("online")?M.host?(M.players.forEach(r=>{r.score=0,r.total=0}),Yc()):gi("Ask the host to start another game."):Wm()}),qt("#backHome",dM)}function sd(){if(M.peer)try{M.peer.destroy()}catch{}clearTimeout(M.countdownTimer),clearInterval(M.countdownInterval),clearTimeout(M.reconnectTimer),clearTimeout(M.peerReconnectTimer),clearTimeout(M.disconnectAdvanceTimer),document.querySelectorAll(".flying-card,.flying-back").forEach(n=>n.remove()),M.animating=!1,M.replay=null,M.replayKey=null,M.revealOrigins={},M.stageSeen=new Set,M.stageTurnKey=null,M.reactionCooldowns.clear(),M.recoveringGuest=!1,M.resumeToken=null,M.peer=null,M.connection=null,M.connections.clear(),M.host=!1,M.clientId=null,M.roomId="",M.players=[],history.replaceState({},"",location.pathname)}function dM(){M.host&&localStorage.removeItem(Bm),localStorage.removeItem(cs),sd(),M.screen="home",M.game=null,M.selected=null,M.tab="rooms",M.screenTransition=!0,Da()}export{Om as W};
