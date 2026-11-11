(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const sb="modulepreload",ob=function(n){return"/"+n},A0={},iS=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let u=function(h){return Promise.all(h.map(g=>Promise.resolve(g).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));s=u(t.map(h=>{if(h=ob(h),h in A0)return;A0[h]=!0;const g=h.endsWith(".css"),m=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const v=document.createElement("link");if(v.rel=g?"stylesheet":sb,g||(v.as="script"),v.crossOrigin="",v.href=h,f&&v.setAttribute("nonce",f),document.head.appendChild(v),g)return new Promise((x,M)=>{v.addEventListener("load",x),v.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return s.then(u=>{for(const d of u||[])d.status==="rejected"&&o(d.reason);return e().catch(o)})};function Si(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function rS(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var s=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:function(){return n[r]}})}),t}var Vf={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0;function lb(){if(C0)return Mt;C0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),m=Symbol.iterator;function v(F){return F===null||typeof F!="object"?null:(F=m&&F[m]||F["@@iterator"],typeof F=="function"?F:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,R={};function y(F,Q,Ce){this.props=F,this.context=Q,this.refs=R,this.updater=Ce||x}y.prototype.isReactComponent={},y.prototype.setState=function(F,Q){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,Q,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function S(){}S.prototype=y.prototype;function w(F,Q,Ce){this.props=F,this.context=Q,this.refs=R,this.updater=Ce||x}var N=w.prototype=new S;N.constructor=w,M(N,y.prototype),N.isPureReactComponent=!0;var L=Array.isArray,U=Object.prototype.hasOwnProperty,D={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function P(F,Q,Ce){var re,Se={},Ee=null,Ae=null;if(Q!=null)for(re in Q.ref!==void 0&&(Ae=Q.ref),Q.key!==void 0&&(Ee=""+Q.key),Q)U.call(Q,re)&&!b.hasOwnProperty(re)&&(Se[re]=Q[re]);var ve=arguments.length-2;if(ve===1)Se.children=Ce;else if(1<ve){for(var He=Array(ve),ft=0;ft<ve;ft++)He[ft]=arguments[ft+2];Se.children=He}if(F&&F.defaultProps)for(re in ve=F.defaultProps,ve)Se[re]===void 0&&(Se[re]=ve[re]);return{$$typeof:n,type:F,key:Ee,ref:Ae,props:Se,_owner:D.current}}function G(F,Q){return{$$typeof:n,type:F.type,key:Q,ref:F.ref,props:F.props,_owner:F._owner}}function O(F){return typeof F=="object"&&F!==null&&F.$$typeof===n}function B(F){var Q={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ce){return Q[Ce]})}var V=/\/+/g;function q(F,Q){return typeof F=="object"&&F!==null&&F.key!=null?B(""+F.key):Q.toString(36)}function k(F,Q,Ce,re,Se){var Ee=typeof F;(Ee==="undefined"||Ee==="boolean")&&(F=null);var Ae=!1;if(F===null)Ae=!0;else switch(Ee){case"string":case"number":Ae=!0;break;case"object":switch(F.$$typeof){case n:case e:Ae=!0}}if(Ae)return Ae=F,Se=Se(Ae),F=re===""?"."+q(Ae,0):re,L(Se)?(Ce="",F!=null&&(Ce=F.replace(V,"$&/")+"/"),k(Se,Q,Ce,"",function(ft){return ft})):Se!=null&&(O(Se)&&(Se=G(Se,Ce+(!Se.key||Ae&&Ae.key===Se.key?"":(""+Se.key).replace(V,"$&/")+"/")+F)),Q.push(Se)),1;if(Ae=0,re=re===""?".":re+":",L(F))for(var ve=0;ve<F.length;ve++){Ee=F[ve];var He=re+q(Ee,ve);Ae+=k(Ee,Q,Ce,He,Se)}else if(He=v(F),typeof He=="function")for(F=He.call(F),ve=0;!(Ee=F.next()).done;)Ee=Ee.value,He=re+q(Ee,ve++),Ae+=k(Ee,Q,Ce,He,Se);else if(Ee==="object")throw Q=String(F),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Ae}function ie(F,Q,Ce){if(F==null)return F;var re=[],Se=0;return k(F,re,"","",function(Ee){return Q.call(Ce,Ee,Se++)}),re}function te(F){if(F._status===-1){var Q=F._result;Q=Q(),Q.then(function(Ce){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ce)},function(Ce){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ce)}),F._status===-1&&(F._status=0,F._result=Q)}if(F._status===1)return F._result.default;throw F._result}var ee={current:null},J={transition:null},Y={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:J,ReactCurrentOwner:D};function j(){throw Error("act(...) is not supported in production builds of React.")}return Mt.Children={map:ie,forEach:function(F,Q,Ce){ie(F,function(){Q.apply(this,arguments)},Ce)},count:function(F){var Q=0;return ie(F,function(){Q++}),Q},toArray:function(F){return ie(F,function(Q){return Q})||[]},only:function(F){if(!O(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Mt.Component=y,Mt.Fragment=t,Mt.Profiler=s,Mt.PureComponent=w,Mt.StrictMode=r,Mt.Suspense=f,Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,Mt.act=j,Mt.cloneElement=function(F,Q,Ce){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var re=M({},F.props),Se=F.key,Ee=F.ref,Ae=F._owner;if(Q!=null){if(Q.ref!==void 0&&(Ee=Q.ref,Ae=D.current),Q.key!==void 0&&(Se=""+Q.key),F.type&&F.type.defaultProps)var ve=F.type.defaultProps;for(He in Q)U.call(Q,He)&&!b.hasOwnProperty(He)&&(re[He]=Q[He]===void 0&&ve!==void 0?ve[He]:Q[He])}var He=arguments.length-2;if(He===1)re.children=Ce;else if(1<He){ve=Array(He);for(var ft=0;ft<He;ft++)ve[ft]=arguments[ft+2];re.children=ve}return{$$typeof:n,type:F.type,key:Se,ref:Ee,props:re,_owner:Ae}},Mt.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:o,_context:F},F.Consumer=F},Mt.createElement=P,Mt.createFactory=function(F){var Q=P.bind(null,F);return Q.type=F,Q},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(F){return{$$typeof:d,render:F}},Mt.isValidElement=O,Mt.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:te}},Mt.memo=function(F,Q){return{$$typeof:h,type:F,compare:Q===void 0?null:Q}},Mt.startTransition=function(F){var Q=J.transition;J.transition={};try{F()}finally{J.transition=Q}},Mt.unstable_act=j,Mt.useCallback=function(F,Q){return ee.current.useCallback(F,Q)},Mt.useContext=function(F){return ee.current.useContext(F)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(F){return ee.current.useDeferredValue(F)},Mt.useEffect=function(F,Q){return ee.current.useEffect(F,Q)},Mt.useId=function(){return ee.current.useId()},Mt.useImperativeHandle=function(F,Q,Ce){return ee.current.useImperativeHandle(F,Q,Ce)},Mt.useInsertionEffect=function(F,Q){return ee.current.useInsertionEffect(F,Q)},Mt.useLayoutEffect=function(F,Q){return ee.current.useLayoutEffect(F,Q)},Mt.useMemo=function(F,Q){return ee.current.useMemo(F,Q)},Mt.useReducer=function(F,Q,Ce){return ee.current.useReducer(F,Q,Ce)},Mt.useRef=function(F){return ee.current.useRef(F)},Mt.useState=function(F){return ee.current.useState(F)},Mt.useSyncExternalStore=function(F,Q,Ce){return ee.current.useSyncExternalStore(F,Q,Ce)},Mt.useTransition=function(){return ee.current.useTransition()},Mt.version="18.3.1",Mt}var P0;function aS(){return P0||(P0=1,Vf.exports=lb()),Vf.exports}var lt=aS();const uo=Si(lt);var Gu={},Wf={exports:{}},Jn={},$f={exports:{}},Xf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0;function ub(){return L0||(L0=1,(function(n){function e(J,Y){var j=J.length;J.push(Y);e:for(;0<j;){var F=j-1>>>1,Q=J[F];if(0<s(Q,Y))J[F]=Y,J[j]=Q,j=F;else break e}}function t(J){return J.length===0?null:J[0]}function r(J){if(J.length===0)return null;var Y=J[0],j=J.pop();if(j!==Y){J[0]=j;e:for(var F=0,Q=J.length,Ce=Q>>>1;F<Ce;){var re=2*(F+1)-1,Se=J[re],Ee=re+1,Ae=J[Ee];if(0>s(Se,j))Ee<Q&&0>s(Ae,Se)?(J[F]=Ae,J[Ee]=j,F=Ee):(J[F]=Se,J[re]=j,F=re);else if(Ee<Q&&0>s(Ae,j))J[F]=Ae,J[Ee]=j,F=Ee;else break e}}return Y}function s(J,Y){var j=J.sortIndex-Y.sortIndex;return j!==0?j:J.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],h=[],g=1,m=null,v=3,x=!1,M=!1,R=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(J){for(var Y=t(h);Y!==null;){if(Y.callback===null)r(h);else if(Y.startTime<=J)r(h),Y.sortIndex=Y.expirationTime,e(f,Y);else break;Y=t(h)}}function L(J){if(R=!1,N(J),!M)if(t(f)!==null)M=!0,te(U);else{var Y=t(h);Y!==null&&ee(L,Y.startTime-J)}}function U(J,Y){M=!1,R&&(R=!1,S(P),P=-1),x=!0;var j=v;try{for(N(Y),m=t(f);m!==null&&(!(m.expirationTime>Y)||J&&!B());){var F=m.callback;if(typeof F=="function"){m.callback=null,v=m.priorityLevel;var Q=F(m.expirationTime<=Y);Y=n.unstable_now(),typeof Q=="function"?m.callback=Q:m===t(f)&&r(f),N(Y)}else r(f);m=t(f)}if(m!==null)var Ce=!0;else{var re=t(h);re!==null&&ee(L,re.startTime-Y),Ce=!1}return Ce}finally{m=null,v=j,x=!1}}var D=!1,b=null,P=-1,G=5,O=-1;function B(){return!(n.unstable_now()-O<G)}function V(){if(b!==null){var J=n.unstable_now();O=J;var Y=!0;try{Y=b(!0,J)}finally{Y?q():(D=!1,b=null)}}else D=!1}var q;if(typeof w=="function")q=function(){w(V)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,ie=k.port2;k.port1.onmessage=V,q=function(){ie.postMessage(null)}}else q=function(){y(V,0)};function te(J){b=J,D||(D=!0,q())}function ee(J,Y){P=y(function(){J(n.unstable_now())},Y)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(J){J.callback=null},n.unstable_continueExecution=function(){M||x||(M=!0,te(U))},n.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<J?Math.floor(1e3/J):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(J){switch(v){case 1:case 2:case 3:var Y=3;break;default:Y=v}var j=v;v=Y;try{return J()}finally{v=j}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(J,Y){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var j=v;v=J;try{return Y()}finally{v=j}},n.unstable_scheduleCallback=function(J,Y,j){var F=n.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?F+j:F):j=F,J){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=j+Q,J={id:g++,callback:Y,priorityLevel:J,startTime:j,expirationTime:Q,sortIndex:-1},j>F?(J.sortIndex=j,e(h,J),t(f)===null&&J===t(h)&&(R?(S(P),P=-1):R=!0,ee(L,j-F))):(J.sortIndex=Q,e(f,J),M||x||(M=!0,te(U))),J},n.unstable_shouldYield=B,n.unstable_wrapCallback=function(J){var Y=v;return function(){var j=v;v=Y;try{return J.apply(this,arguments)}finally{v=j}}}})(Xf)),Xf}var I0;function cb(){return I0||(I0=1,$f.exports=ub()),$f.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0;function db(){if(D0)return Jn;D0=1;var n=aS(),e=cb();function t(i){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)a+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function o(i,a){u(i,a),u(i+"Capture",a)}function u(i,a){for(s[i]=a,i=0;i<a.length;i++)r.add(a[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},m={};function v(i){return f.call(m,i)?!0:f.call(g,i)?!1:h.test(i)?m[i]=!0:(g[i]=!0,!1)}function x(i,a,l,c){if(l!==null&&l.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return c?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,a,l,c){if(a===null||typeof a>"u"||x(i,a,l,c))return!0;if(c)return!1;if(l!==null)switch(l.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function R(i,a,l,c,p,_,A){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=a,this.sanitizeURL=_,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new R(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var a=i[0];y[a]=new R(a,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new R(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new R(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new R(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new R(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new R(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new R(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new R(i,5,!1,i.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function w(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var a=i.replace(S,w);y[a]=new R(a,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var a=i.replace(S,w);y[a]=new R(a,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var a=i.replace(S,w);y[a]=new R(a,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new R(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new R(i,1,!1,i.toLowerCase(),null,!0,!0)});function N(i,a,l,c){var p=y.hasOwnProperty(a)?y[a]:null;(p!==null?p.type!==0:c||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(M(a,l,p,c)&&(l=null),c||p===null?v(a)&&(l===null?i.removeAttribute(a):i.setAttribute(a,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(a=p.attributeName,c=p.attributeNamespace,l===null?i.removeAttribute(a):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,c?i.setAttributeNS(c,a,l):i.setAttribute(a,l))))}var L=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),D=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),B=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),J=Symbol.iterator;function Y(i){return i===null||typeof i!="object"?null:(i=J&&i[J]||i["@@iterator"],typeof i=="function"?i:null)}var j=Object.assign,F;function Q(i){if(F===void 0)try{throw Error()}catch(l){var a=l.stack.trim().match(/\n( *(at )?)/);F=a&&a[1]||""}return`
`+F+i}var Ce=!1;function re(i,a){if(!i||Ce)return"";Ce=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(de){var c=de}Reflect.construct(i,[],a)}else{try{a.call()}catch(de){c=de}i.call(a.prototype)}else{try{throw Error()}catch(de){c=de}i()}}catch(de){if(de&&c&&typeof de.stack=="string"){for(var p=de.stack.split(`
`),_=c.stack.split(`
`),A=p.length-1,z=_.length-1;1<=A&&0<=z&&p[A]!==_[z];)z--;for(;1<=A&&0<=z;A--,z--)if(p[A]!==_[z]){if(A!==1||z!==1)do if(A--,z--,0>z||p[A]!==_[z]){var X=`
`+p[A].replace(" at new "," at ");return i.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",i.displayName)),X}while(1<=A&&0<=z);break}}}finally{Ce=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?Q(i):""}function Se(i){switch(i.tag){case 5:return Q(i.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return i=re(i.type,!1),i;case 11:return i=re(i.type.render,!1),i;case 1:return i=re(i.type,!0),i;default:return""}}function Ee(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case b:return"Fragment";case D:return"Portal";case G:return"Profiler";case P:return"StrictMode";case q:return"Suspense";case k:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case B:return(i.displayName||"Context")+".Consumer";case O:return(i._context.displayName||"Context")+".Provider";case V:var a=i.render;return i=i.displayName,i||(i=a.displayName||a.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ie:return a=i.displayName||null,a!==null?a:Ee(i.type)||"Memo";case te:a=i._payload,i=i._init;try{return Ee(i(a))}catch{}}return null}function Ae(i){var a=i.type;switch(i.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=a.render,i=i.displayName||i.name||"",a.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(a);case 8:return a===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function ve(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function He(i){var a=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function ft(i){var a=He(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,a),c=""+i[a];if(!i.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,a,{configurable:!0,get:function(){return p.call(this)},set:function(A){c=""+A,_.call(this,A)}}),Object.defineProperty(i,a,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){i._valueTracker=null,delete i[a]}}}}function Xe(i){i._valueTracker||(i._valueTracker=ft(i))}function gt(i){if(!i)return!1;var a=i._valueTracker;if(!a)return!0;var l=a.getValue(),c="";return i&&(c=He(i)?i.checked?"true":"false":i.value),i=c,i!==l?(a.setValue(i),!0):!1}function yt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function ot(i,a){var l=a.checked;return j({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Wt(i,a){var l=a.defaultValue==null?"":a.defaultValue,c=a.checked!=null?a.checked:a.defaultChecked;l=ve(a.value!=null?a.value:l),i._wrapperState={initialChecked:c,initialValue:l,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function Ft(i,a){a=a.checked,a!=null&&N(i,"checked",a,!1)}function en(i,a){Ft(i,a);var l=ve(a.value),c=a.type;if(l!=null)c==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(c==="submit"||c==="reset"){i.removeAttribute("value");return}a.hasOwnProperty("value")?cn(i,a.type,l):a.hasOwnProperty("defaultValue")&&cn(i,a.type,ve(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(i.defaultChecked=!!a.defaultChecked)}function Lt(i,a,l){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var c=a.type;if(!(c!=="submit"&&c!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+i._wrapperState.initialValue,l||a===i.value||(i.value=a),i.defaultValue=a}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function cn(i,a,l){(a!=="number"||yt(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Ot=Array.isArray;function Zt(i,a,l,c){if(i=i.options,a){a={};for(var p=0;p<l.length;p++)a["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=a.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&c&&(i[l].defaultSelected=!0)}else{for(l=""+ve(l),a=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,c&&(i[p].defaultSelected=!0);return}a!==null||i[p].disabled||(a=i[p])}a!==null&&(a.selected=!0)}}function an(i,a){if(a.dangerouslySetInnerHTML!=null)throw Error(t(91));return j({},a,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function pn(i,a){var l=a.value;if(l==null){if(l=a.children,a=a.defaultValue,l!=null){if(a!=null)throw Error(t(92));if(Ot(l)){if(1<l.length)throw Error(t(93));l=l[0]}a=l}a==null&&(a=""),l=a}i._wrapperState={initialValue:ve(l)}}function K(i,a){var l=ve(a.value),c=ve(a.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),a.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),c!=null&&(i.defaultValue=""+c)}function mn(i){var a=i.textContent;a===i._wrapperState.initialValue&&a!==""&&a!==null&&(i.value=a)}function Ct(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fe(i,a){return i==null||i==="http://www.w3.org/1999/xhtml"?Ct(a):i==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var ce,Pe=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,l,c,p){MSApp.execUnsafeLocalFunction(function(){return i(a,l,c,p)})}:i})(function(i,a){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=a;else{for(ce=ce||document.createElement("div"),ce.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=ce.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;a.firstChild;)i.appendChild(a.firstChild)}});function he(i,a){if(a){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=a;return}}i.textContent=a}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},I=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(i){I.forEach(function(a){a=a+i.charAt(0).toUpperCase()+i.substring(1),Me[a]=Me[i]})});function T(i,a,l){return a==null||typeof a=="boolean"||a===""?"":l||typeof a!="number"||a===0||Me.hasOwnProperty(i)&&Me[i]?(""+a).trim():a+"px"}function W(i,a){i=i.style;for(var l in a)if(a.hasOwnProperty(l)){var c=l.indexOf("--")===0,p=T(l,a[l],c);l==="float"&&(l="cssFloat"),c?i.setProperty(l,p):i[l]=p}}var xe=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pe(i,a){if(a){if(xe[i]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(t(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(t(61))}if(a.style!=null&&typeof a.style!="object")throw Error(t(62))}}function be(i,a){if(i.indexOf("-")===-1)return typeof a.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ie=null;function ge(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var _e=null,Ne=null,H=null;function ye(i){if(i=Uo(i)){if(typeof _e!="function")throw Error(t(280));var a=i.stateNode;a&&(a=iu(a),_e(i.stateNode,i.type,a))}}function me(i){Ne?H?H.push(i):H=[i]:Ne=i}function Fe(){if(Ne){var i=Ne,a=H;if(H=Ne=null,ye(i),a)for(i=0;i<a.length;i++)ye(a[i])}}function De(i,a){return i(a)}function Oe(){}var Je=!1;function ht(i,a,l){if(Je)return i(a,l);Je=!0;try{return De(i,a,l)}finally{Je=!1,(Ne!==null||H!==null)&&(Oe(),Fe())}}function Te(i,a){var l=i.stateNode;if(l===null)return null;var c=iu(l);if(c===null)return null;l=c[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,a,typeof l));return l}var nt=!1;if(d)try{var ut={};Object.defineProperty(ut,"passive",{get:function(){nt=!0}}),window.addEventListener("test",ut,ut),window.removeEventListener("test",ut,ut)}catch{nt=!1}function Ge(i,a,l,c,p,_,A,z,X){var de=Array.prototype.slice.call(arguments,3);try{a.apply(l,de)}catch(Re){this.onError(Re)}}var xt=!1,$t=null,Ln=!1,Jr=null,ir={onError:function(i){xt=!0,$t=i}};function Qr(i,a,l,c,p,_,A,z,X){xt=!1,$t=null,Ge.apply(ir,arguments)}function ka(i,a,l,c,p,_,A,z,X){if(Qr.apply(this,arguments),xt){if(xt){var de=$t;xt=!1,$t=null}else throw Error(t(198));Ln||(Ln=!0,Jr=de)}}function Mi(i){var a=i,l=i;if(i.alternate)for(;a.return;)a=a.return;else{i=a;do a=i,(a.flags&4098)!==0&&(l=a.return),i=a.return;while(i)}return a.tag===3?l:null}function ai(i){if(i.tag===13){var a=i.memoizedState;if(a===null&&(i=i.alternate,i!==null&&(a=i.memoizedState)),a!==null)return a.dehydrated}return null}function ea(i){if(Mi(i)!==i)throw Error(t(188))}function rr(i){var a=i.alternate;if(!a){if(a=Mi(i),a===null)throw Error(t(188));return a!==i?null:i}for(var l=i,c=a;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(c=p.return,c!==null){l=c;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return ea(p),i;if(_===c)return ea(p),a;_=_.sibling}throw Error(t(188))}if(l.return!==c.return)l=p,c=_;else{for(var A=!1,z=p.child;z;){if(z===l){A=!0,l=p,c=_;break}if(z===c){A=!0,c=p,l=_;break}z=z.sibling}if(!A){for(z=_.child;z;){if(z===l){A=!0,l=_,c=p;break}if(z===c){A=!0,c=_,l=p;break}z=z.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==c)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:a}function ta(i){return i=rr(i),i!==null?We(i):null}function We(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var a=We(i);if(a!==null)return a;i=i.sibling}return null}var Ba=e.unstable_scheduleCallback,zn=e.unstable_cancelCallback,ar=e.unstable_shouldYield,_s=e.unstable_requestPaint,zt=e.unstable_now,za=e.unstable_getCurrentPriorityLevel,na=e.unstable_ImmediatePriority,Ha=e.unstable_UserBlockingPriority,Rr=e.unstable_NormalPriority,Ga=e.unstable_LowPriority,C=e.unstable_IdlePriority,$=null,oe=null;function ae(i){if(oe&&typeof oe.onCommitFiberRoot=="function")try{oe.onCommitFiberRoot($,i,void 0,(i.current.flags&128)===128)}catch{}}var ne=Math.clz32?Math.clz32:ke,Be=Math.log,qe=Math.LN2;function ke(i){return i>>>=0,i===0?32:31-(Be(i)/qe|0)|0}var ze=64,Ye=4194304;function rt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function mt(i,a){var l=i.pendingLanes;if(l===0)return 0;var c=0,p=i.suspendedLanes,_=i.pingedLanes,A=l&268435455;if(A!==0){var z=A&~p;z!==0?c=rt(z):(_&=A,_!==0&&(c=rt(_)))}else A=l&~p,A!==0?c=rt(A):_!==0&&(c=rt(_));if(c===0)return 0;if(a!==0&&a!==c&&(a&p)===0&&(p=c&-c,_=a&-a,p>=_||p===16&&(_&4194240)!==0))return a;if((c&4)!==0&&(c|=l&16),a=i.entangledLanes,a!==0)for(i=i.entanglements,a&=c;0<a;)l=31-ne(a),p=1<<l,c|=i[l],a&=~p;return c}function Ke(i,a){switch(i){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vt(i,a){for(var l=i.suspendedLanes,c=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var A=31-ne(_),z=1<<A,X=p[A];X===-1?((z&l)===0||(z&c)!==0)&&(p[A]=Ke(z,a)):X<=a&&(i.expiredLanes|=z),_&=~z}}function Bt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function It(){var i=ze;return ze<<=1,(ze&4194240)===0&&(ze=64),i}function At(i){for(var a=[],l=0;31>l;l++)a.push(i);return a}function Xt(i,a,l){i.pendingLanes|=a,a!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,a=31-ne(a),i[a]=l}function Ze(i,a){var l=i.pendingLanes&~a;i.pendingLanes=a,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=a,i.mutableReadLanes&=a,i.entangledLanes&=a,a=i.entanglements;var c=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-ne(l),_=1<<p;a[p]=0,c[p]=-1,i[p]=-1,l&=~_}}function sn(i,a){var l=i.entangledLanes|=a;for(i=i.entanglements;l;){var c=31-ne(l),p=1<<c;p&a|i[c]&a&&(i[c]|=a),l&=~p}}var Qe=0;function si(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var on,Ui,Xn,oi,St,jt=!1,_n=[],wt=null,Ut=null,dn=null,Fi=new Map,ia=new Map,ki=[],Hl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ys(i,a){switch(i){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":Fi.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":ia.delete(a.pointerId)}}function Va(i,a,l,c,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:a,domEventName:l,eventSystemFlags:c,nativeEvent:_,targetContainers:[p]},a!==null&&(a=Uo(a),a!==null&&Ui(a)),i):(i.eventSystemFlags|=c,a=i.targetContainers,p!==null&&a.indexOf(p)===-1&&a.push(p),i)}function Gl(i,a,l,c,p){switch(a){case"focusin":return wt=Va(wt,i,a,l,c,p),!0;case"dragenter":return Ut=Va(Ut,i,a,l,c,p),!0;case"mouseover":return dn=Va(dn,i,a,l,c,p),!0;case"pointerover":var _=p.pointerId;return Fi.set(_,Va(Fi.get(_)||null,i,a,l,c,p)),!0;case"gotpointercapture":return _=p.pointerId,ia.set(_,Va(ia.get(_)||null,i,a,l,c,p)),!0}return!1}function xo(i){var a=$a(i.target);if(a!==null){var l=Mi(a);if(l!==null){if(a=l.tag,a===13){if(a=ai(l),a!==null){i.blockedOn=a,St(i.priority,function(){Xn(l)});return}}else if(a===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Wa(i){if(i.blockedOn!==null)return!1;for(var a=i.targetContainers;0<a.length;){var l=md(i.domEventName,i.eventSystemFlags,a[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var c=new l.constructor(l.type,l);Ie=c,l.target.dispatchEvent(c),Ie=null}else return a=Uo(l),a!==null&&Ui(a),i.blockedOn=l,!1;a.shift()}return!0}function Mo(i,a,l){Wa(i)&&l.delete(a)}function Vl(){jt=!1,wt!==null&&Wa(wt)&&(wt=null),Ut!==null&&Wa(Ut)&&(Ut=null),dn!==null&&Wa(dn)&&(dn=null),Fi.forEach(Mo),ia.forEach(Mo)}function Eo(i,a){i.blockedOn===a&&(i.blockedOn=null,jt||(jt=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Vl)))}function bo(i){function a(p){return Eo(p,i)}if(0<_n.length){Eo(_n[0],i);for(var l=1;l<_n.length;l++){var c=_n[l];c.blockedOn===i&&(c.blockedOn=null)}}for(wt!==null&&Eo(wt,i),Ut!==null&&Eo(Ut,i),dn!==null&&Eo(dn,i),Fi.forEach(a),ia.forEach(a),l=0;l<ki.length;l++)c=ki[l],c.blockedOn===i&&(c.blockedOn=null);for(;0<ki.length&&(l=ki[0],l.blockedOn===null);)xo(l),l.blockedOn===null&&ki.shift()}var Ss=L.ReactCurrentBatchConfig,Wl=!0;function LM(i,a,l,c){var p=Qe,_=Ss.transition;Ss.transition=null;try{Qe=1,pd(i,a,l,c)}finally{Qe=p,Ss.transition=_}}function IM(i,a,l,c){var p=Qe,_=Ss.transition;Ss.transition=null;try{Qe=4,pd(i,a,l,c)}finally{Qe=p,Ss.transition=_}}function pd(i,a,l,c){if(Wl){var p=md(i,a,l,c);if(p===null)Id(i,a,c,$l,l),ys(i,c);else if(Gl(p,i,a,l,c))c.stopPropagation();else if(ys(i,c),a&4&&-1<Hl.indexOf(i)){for(;p!==null;){var _=Uo(p);if(_!==null&&on(_),_=md(i,a,l,c),_===null&&Id(i,a,c,$l,l),_===p)break;p=_}p!==null&&c.stopPropagation()}else Id(i,a,c,null,l)}}var $l=null;function md(i,a,l,c){if($l=null,i=ge(c),i=$a(i),i!==null)if(a=Mi(i),a===null)i=null;else if(l=a.tag,l===13){if(i=ai(a),i!==null)return i;i=null}else if(l===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;i=null}else a!==i&&(i=null);return $l=i,null}function pg(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(za()){case na:return 1;case Ha:return 4;case Rr:case Ga:return 16;case C:return 536870912;default:return 16}default:return 16}}var ra=null,gd=null,Xl=null;function mg(){if(Xl)return Xl;var i,a=gd,l=a.length,c,p="value"in ra?ra.value:ra.textContent,_=p.length;for(i=0;i<l&&a[i]===p[i];i++);var A=l-i;for(c=1;c<=A&&a[l-c]===p[_-c];c++);return Xl=p.slice(i,1<c?1-c:void 0)}function ql(i){var a=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&a===13&&(i=13)):i=a,i===10&&(i=13),32<=i||i===13?i:0}function Yl(){return!0}function gg(){return!1}function li(i){function a(l,c,p,_,A){this._reactName=l,this._targetInst=p,this.type=c,this.nativeEvent=_,this.target=A,this.currentTarget=null;for(var z in i)i.hasOwnProperty(z)&&(l=i[z],this[z]=l?l(_):_[z]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Yl:gg,this.isPropagationStopped=gg,this}return j(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Yl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Yl)},persist:function(){},isPersistent:Yl}),a}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vd=li(xs),wo=j({},xs,{view:0,detail:0}),DM=li(wo),_d,yd,To,Kl=j({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xd,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==To&&(To&&i.type==="mousemove"?(_d=i.screenX-To.screenX,yd=i.screenY-To.screenY):yd=_d=0,To=i),_d)},movementY:function(i){return"movementY"in i?i.movementY:yd}}),vg=li(Kl),NM=j({},Kl,{dataTransfer:0}),OM=li(NM),UM=j({},wo,{relatedTarget:0}),Sd=li(UM),FM=j({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),kM=li(FM),BM=j({},xs,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),zM=li(BM),HM=j({},xs,{data:0}),_g=li(HM),GM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},VM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $M(i){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(i):(i=WM[i])?!!a[i]:!1}function xd(){return $M}var XM=j({},wo,{key:function(i){if(i.key){var a=GM[i.key]||i.key;if(a!=="Unidentified")return a}return i.type==="keypress"?(i=ql(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?VM[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xd,charCode:function(i){return i.type==="keypress"?ql(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ql(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),qM=li(XM),YM=j({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yg=li(YM),KM=j({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xd}),ZM=li(KM),jM=j({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),JM=li(jM),QM=j({},Kl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),eE=li(QM),tE=[9,13,27,32],Md=d&&"CompositionEvent"in window,Ro=null;d&&"documentMode"in document&&(Ro=document.documentMode);var nE=d&&"TextEvent"in window&&!Ro,Sg=d&&(!Md||Ro&&8<Ro&&11>=Ro),xg=" ",Mg=!1;function Eg(i,a){switch(i){case"keyup":return tE.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bg(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ms=!1;function iE(i,a){switch(i){case"compositionend":return bg(a);case"keypress":return a.which!==32?null:(Mg=!0,xg);case"textInput":return i=a.data,i===xg&&Mg?null:i;default:return null}}function rE(i,a){if(Ms)return i==="compositionend"||!Md&&Eg(i,a)?(i=mg(),Xl=gd=ra=null,Ms=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Sg&&a.locale!=="ko"?null:a.data;default:return null}}var aE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wg(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a==="input"?!!aE[i.type]:a==="textarea"}function Tg(i,a,l,c){me(c),a=eu(a,"onChange"),0<a.length&&(l=new vd("onChange","change",null,l,c),i.push({event:l,listeners:a}))}var Ao=null,Co=null;function sE(i){Wg(i,0)}function Zl(i){var a=Rs(i);if(gt(a))return i}function oE(i,a){if(i==="change")return a}var Rg=!1;if(d){var Ed;if(d){var bd="oninput"in document;if(!bd){var Ag=document.createElement("div");Ag.setAttribute("oninput","return;"),bd=typeof Ag.oninput=="function"}Ed=bd}else Ed=!1;Rg=Ed&&(!document.documentMode||9<document.documentMode)}function Cg(){Ao&&(Ao.detachEvent("onpropertychange",Pg),Co=Ao=null)}function Pg(i){if(i.propertyName==="value"&&Zl(Co)){var a=[];Tg(a,Co,i,ge(i)),ht(sE,a)}}function lE(i,a,l){i==="focusin"?(Cg(),Ao=a,Co=l,Ao.attachEvent("onpropertychange",Pg)):i==="focusout"&&Cg()}function uE(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Zl(Co)}function cE(i,a){if(i==="click")return Zl(a)}function dE(i,a){if(i==="input"||i==="change")return Zl(a)}function fE(i,a){return i===a&&(i!==0||1/i===1/a)||i!==i&&a!==a}var Bi=typeof Object.is=="function"?Object.is:fE;function Po(i,a){if(Bi(i,a))return!0;if(typeof i!="object"||i===null||typeof a!="object"||a===null)return!1;var l=Object.keys(i),c=Object.keys(a);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var p=l[c];if(!f.call(a,p)||!Bi(i[p],a[p]))return!1}return!0}function Lg(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Ig(i,a){var l=Lg(i);i=0;for(var c;l;){if(l.nodeType===3){if(c=i+l.textContent.length,i<=a&&c>=a)return{node:l,offset:a-i};i=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Lg(l)}}function Dg(i,a){return i&&a?i===a?!0:i&&i.nodeType===3?!1:a&&a.nodeType===3?Dg(i,a.parentNode):"contains"in i?i.contains(a):i.compareDocumentPosition?!!(i.compareDocumentPosition(a)&16):!1:!1}function Ng(){for(var i=window,a=yt();a instanceof i.HTMLIFrameElement;){try{var l=typeof a.contentWindow.location.href=="string"}catch{l=!1}if(l)i=a.contentWindow;else break;a=yt(i.document)}return a}function wd(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a&&(a==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||a==="textarea"||i.contentEditable==="true")}function hE(i){var a=Ng(),l=i.focusedElem,c=i.selectionRange;if(a!==l&&l&&l.ownerDocument&&Dg(l.ownerDocument.documentElement,l)){if(c!==null&&wd(l)){if(a=c.start,i=c.end,i===void 0&&(i=a),"selectionStart"in l)l.selectionStart=a,l.selectionEnd=Math.min(i,l.value.length);else if(i=(a=l.ownerDocument||document)&&a.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(c.start,p);c=c.end===void 0?_:Math.min(c.end,p),!i.extend&&_>c&&(p=c,c=_,_=p),p=Ig(l,_);var A=Ig(l,c);p&&A&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==A.node||i.focusOffset!==A.offset)&&(a=a.createRange(),a.setStart(p.node,p.offset),i.removeAllRanges(),_>c?(i.addRange(a),i.extend(A.node,A.offset)):(a.setEnd(A.node,A.offset),i.addRange(a)))}}for(a=[],i=l;i=i.parentNode;)i.nodeType===1&&a.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<a.length;l++)i=a[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var pE=d&&"documentMode"in document&&11>=document.documentMode,Es=null,Td=null,Lo=null,Rd=!1;function Og(i,a,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Rd||Es==null||Es!==yt(c)||(c=Es,"selectionStart"in c&&wd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Lo&&Po(Lo,c)||(Lo=c,c=eu(Td,"onSelect"),0<c.length&&(a=new vd("onSelect","select",null,a,l),i.push({event:a,listeners:c}),a.target=Es)))}function jl(i,a){var l={};return l[i.toLowerCase()]=a.toLowerCase(),l["Webkit"+i]="webkit"+a,l["Moz"+i]="moz"+a,l}var bs={animationend:jl("Animation","AnimationEnd"),animationiteration:jl("Animation","AnimationIteration"),animationstart:jl("Animation","AnimationStart"),transitionend:jl("Transition","TransitionEnd")},Ad={},Ug={};d&&(Ug=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Jl(i){if(Ad[i])return Ad[i];if(!bs[i])return i;var a=bs[i],l;for(l in a)if(a.hasOwnProperty(l)&&l in Ug)return Ad[i]=a[l];return i}var Fg=Jl("animationend"),kg=Jl("animationiteration"),Bg=Jl("animationstart"),zg=Jl("transitionend"),Hg=new Map,Gg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function aa(i,a){Hg.set(i,a),o(a,[i])}for(var Cd=0;Cd<Gg.length;Cd++){var Pd=Gg[Cd],mE=Pd.toLowerCase(),gE=Pd[0].toUpperCase()+Pd.slice(1);aa(mE,"on"+gE)}aa(Fg,"onAnimationEnd"),aa(kg,"onAnimationIteration"),aa(Bg,"onAnimationStart"),aa("dblclick","onDoubleClick"),aa("focusin","onFocus"),aa("focusout","onBlur"),aa(zg,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));function Vg(i,a,l){var c=i.type||"unknown-event";i.currentTarget=l,ka(c,a,void 0,i),i.currentTarget=null}function Wg(i,a){a=(a&4)!==0;for(var l=0;l<i.length;l++){var c=i[l],p=c.event;c=c.listeners;e:{var _=void 0;if(a)for(var A=c.length-1;0<=A;A--){var z=c[A],X=z.instance,de=z.currentTarget;if(z=z.listener,X!==_&&p.isPropagationStopped())break e;Vg(p,z,de),_=X}else for(A=0;A<c.length;A++){if(z=c[A],X=z.instance,de=z.currentTarget,z=z.listener,X!==_&&p.isPropagationStopped())break e;Vg(p,z,de),_=X}}}if(Ln)throw i=Jr,Ln=!1,Jr=null,i}function qt(i,a){var l=a[kd];l===void 0&&(l=a[kd]=new Set);var c=i+"__bubble";l.has(c)||($g(a,i,2,!1),l.add(c))}function Ld(i,a,l){var c=0;a&&(c|=4),$g(l,i,c,a)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Do(i){if(!i[Ql]){i[Ql]=!0,r.forEach(function(l){l!=="selectionchange"&&(vE.has(l)||Ld(l,!1,i),Ld(l,!0,i))});var a=i.nodeType===9?i:i.ownerDocument;a===null||a[Ql]||(a[Ql]=!0,Ld("selectionchange",!1,a))}}function $g(i,a,l,c){switch(pg(a)){case 1:var p=LM;break;case 4:p=IM;break;default:p=pd}l=p.bind(null,a,l,i),p=void 0,!nt||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(p=!0),c?p!==void 0?i.addEventListener(a,l,{capture:!0,passive:p}):i.addEventListener(a,l,!0):p!==void 0?i.addEventListener(a,l,{passive:p}):i.addEventListener(a,l,!1)}function Id(i,a,l,c,p){var _=c;if((a&1)===0&&(a&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var z=c.stateNode.containerInfo;if(z===p||z.nodeType===8&&z.parentNode===p)break;if(A===4)for(A=c.return;A!==null;){var X=A.tag;if((X===3||X===4)&&(X=A.stateNode.containerInfo,X===p||X.nodeType===8&&X.parentNode===p))return;A=A.return}for(;z!==null;){if(A=$a(z),A===null)return;if(X=A.tag,X===5||X===6){c=_=A;continue e}z=z.parentNode}}c=c.return}ht(function(){var de=_,Re=ge(l),Le=[];e:{var we=Hg.get(i);if(we!==void 0){var $e=vd,et=i;switch(i){case"keypress":if(ql(l)===0)break e;case"keydown":case"keyup":$e=qM;break;case"focusin":et="focus",$e=Sd;break;case"focusout":et="blur",$e=Sd;break;case"beforeblur":case"afterblur":$e=Sd;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$e=vg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$e=OM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$e=ZM;break;case Fg:case kg:case Bg:$e=kM;break;case zg:$e=JM;break;case"scroll":$e=DM;break;case"wheel":$e=eE;break;case"copy":case"cut":case"paste":$e=zM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$e=yg}var tt=(a&4)!==0,fn=!tt&&i==="scroll",se=tt?we!==null?we+"Capture":null:we;tt=[];for(var Z=de,le;Z!==null;){le=Z;var Ue=le.stateNode;if(le.tag===5&&Ue!==null&&(le=Ue,se!==null&&(Ue=Te(Z,se),Ue!=null&&tt.push(No(Z,Ue,le)))),fn)break;Z=Z.return}0<tt.length&&(we=new $e(we,et,null,l,Re),Le.push({event:we,listeners:tt}))}}if((a&7)===0){e:{if(we=i==="mouseover"||i==="pointerover",$e=i==="mouseout"||i==="pointerout",we&&l!==Ie&&(et=l.relatedTarget||l.fromElement)&&($a(et)||et[Ar]))break e;if(($e||we)&&(we=Re.window===Re?Re:(we=Re.ownerDocument)?we.defaultView||we.parentWindow:window,$e?(et=l.relatedTarget||l.toElement,$e=de,et=et?$a(et):null,et!==null&&(fn=Mi(et),et!==fn||et.tag!==5&&et.tag!==6)&&(et=null)):($e=null,et=de),$e!==et)){if(tt=vg,Ue="onMouseLeave",se="onMouseEnter",Z="mouse",(i==="pointerout"||i==="pointerover")&&(tt=yg,Ue="onPointerLeave",se="onPointerEnter",Z="pointer"),fn=$e==null?we:Rs($e),le=et==null?we:Rs(et),we=new tt(Ue,Z+"leave",$e,l,Re),we.target=fn,we.relatedTarget=le,Ue=null,$a(Re)===de&&(tt=new tt(se,Z+"enter",et,l,Re),tt.target=le,tt.relatedTarget=fn,Ue=tt),fn=Ue,$e&&et)t:{for(tt=$e,se=et,Z=0,le=tt;le;le=ws(le))Z++;for(le=0,Ue=se;Ue;Ue=ws(Ue))le++;for(;0<Z-le;)tt=ws(tt),Z--;for(;0<le-Z;)se=ws(se),le--;for(;Z--;){if(tt===se||se!==null&&tt===se.alternate)break t;tt=ws(tt),se=ws(se)}tt=null}else tt=null;$e!==null&&Xg(Le,we,$e,tt,!1),et!==null&&fn!==null&&Xg(Le,fn,et,tt,!0)}}e:{if(we=de?Rs(de):window,$e=we.nodeName&&we.nodeName.toLowerCase(),$e==="select"||$e==="input"&&we.type==="file")var it=oE;else if(wg(we))if(Rg)it=dE;else{it=uE;var at=lE}else($e=we.nodeName)&&$e.toLowerCase()==="input"&&(we.type==="checkbox"||we.type==="radio")&&(it=cE);if(it&&(it=it(i,de))){Tg(Le,it,l,Re);break e}at&&at(i,we,de),i==="focusout"&&(at=we._wrapperState)&&at.controlled&&we.type==="number"&&cn(we,"number",we.value)}switch(at=de?Rs(de):window,i){case"focusin":(wg(at)||at.contentEditable==="true")&&(Es=at,Td=de,Lo=null);break;case"focusout":Lo=Td=Es=null;break;case"mousedown":Rd=!0;break;case"contextmenu":case"mouseup":case"dragend":Rd=!1,Og(Le,l,Re);break;case"selectionchange":if(pE)break;case"keydown":case"keyup":Og(Le,l,Re)}var st;if(Md)e:{switch(i){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else Ms?Eg(i,l)&&(ct="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(ct="onCompositionStart");ct&&(Sg&&l.locale!=="ko"&&(Ms||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&Ms&&(st=mg()):(ra=Re,gd="value"in ra?ra.value:ra.textContent,Ms=!0)),at=eu(de,ct),0<at.length&&(ct=new _g(ct,i,null,l,Re),Le.push({event:ct,listeners:at}),st?ct.data=st:(st=bg(l),st!==null&&(ct.data=st)))),(st=nE?iE(i,l):rE(i,l))&&(de=eu(de,"onBeforeInput"),0<de.length&&(Re=new _g("onBeforeInput","beforeinput",null,l,Re),Le.push({event:Re,listeners:de}),Re.data=st))}Wg(Le,a)})}function No(i,a,l){return{instance:i,listener:a,currentTarget:l}}function eu(i,a){for(var l=a+"Capture",c=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=Te(i,l),_!=null&&c.unshift(No(i,_,p)),_=Te(i,a),_!=null&&c.push(No(i,_,p))),i=i.return}return c}function ws(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Xg(i,a,l,c,p){for(var _=a._reactName,A=[];l!==null&&l!==c;){var z=l,X=z.alternate,de=z.stateNode;if(X!==null&&X===c)break;z.tag===5&&de!==null&&(z=de,p?(X=Te(l,_),X!=null&&A.unshift(No(l,X,z))):p||(X=Te(l,_),X!=null&&A.push(No(l,X,z)))),l=l.return}A.length!==0&&i.push({event:a,listeners:A})}var _E=/\r\n?/g,yE=/\u0000|\uFFFD/g;function qg(i){return(typeof i=="string"?i:""+i).replace(_E,`
`).replace(yE,"")}function tu(i,a,l){if(a=qg(a),qg(i)!==a&&l)throw Error(t(425))}function nu(){}var Dd=null,Nd=null;function Od(i,a){return i==="textarea"||i==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Ud=typeof setTimeout=="function"?setTimeout:void 0,SE=typeof clearTimeout=="function"?clearTimeout:void 0,Yg=typeof Promise=="function"?Promise:void 0,xE=typeof queueMicrotask=="function"?queueMicrotask:typeof Yg<"u"?function(i){return Yg.resolve(null).then(i).catch(ME)}:Ud;function ME(i){setTimeout(function(){throw i})}function Fd(i,a){var l=a,c=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(c===0){i.removeChild(p),bo(a);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=p}while(l);bo(a)}function sa(i){for(;i!=null;i=i.nextSibling){var a=i.nodeType;if(a===1||a===3)break;if(a===8){if(a=i.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return i}function Kg(i){i=i.previousSibling;for(var a=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(a===0)return i;a--}else l==="/$"&&a++}i=i.previousSibling}return null}var Ts=Math.random().toString(36).slice(2),sr="__reactFiber$"+Ts,Oo="__reactProps$"+Ts,Ar="__reactContainer$"+Ts,kd="__reactEvents$"+Ts,EE="__reactListeners$"+Ts,bE="__reactHandles$"+Ts;function $a(i){var a=i[sr];if(a)return a;for(var l=i.parentNode;l;){if(a=l[Ar]||l[sr]){if(l=a.alternate,a.child!==null||l!==null&&l.child!==null)for(i=Kg(i);i!==null;){if(l=i[sr])return l;i=Kg(i)}return a}i=l,l=i.parentNode}return null}function Uo(i){return i=i[sr]||i[Ar],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Rs(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function iu(i){return i[Oo]||null}var Bd=[],As=-1;function oa(i){return{current:i}}function Yt(i){0>As||(i.current=Bd[As],Bd[As]=null,As--)}function Gt(i,a){As++,Bd[As]=i.current,i.current=a}var la={},In=oa(la),qn=oa(!1),Xa=la;function Cs(i,a){var l=i.type.contextTypes;if(!l)return la;var c=i.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===a)return c.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=a[_];return c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=a,i.__reactInternalMemoizedMaskedChildContext=p),p}function Yn(i){return i=i.childContextTypes,i!=null}function ru(){Yt(qn),Yt(In)}function Zg(i,a,l){if(In.current!==la)throw Error(t(168));Gt(In,a),Gt(qn,l)}function jg(i,a,l){var c=i.stateNode;if(a=a.childContextTypes,typeof c.getChildContext!="function")return l;c=c.getChildContext();for(var p in c)if(!(p in a))throw Error(t(108,Ae(i)||"Unknown",p));return j({},l,c)}function au(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||la,Xa=In.current,Gt(In,i),Gt(qn,qn.current),!0}function Jg(i,a,l){var c=i.stateNode;if(!c)throw Error(t(169));l?(i=jg(i,a,Xa),c.__reactInternalMemoizedMergedChildContext=i,Yt(qn),Yt(In),Gt(In,i)):Yt(qn),Gt(qn,l)}var Cr=null,su=!1,zd=!1;function Qg(i){Cr===null?Cr=[i]:Cr.push(i)}function wE(i){su=!0,Qg(i)}function ua(){if(!zd&&Cr!==null){zd=!0;var i=0,a=Qe;try{var l=Cr;for(Qe=1;i<l.length;i++){var c=l[i];do c=c(!0);while(c!==null)}Cr=null,su=!1}catch(p){throw Cr!==null&&(Cr=Cr.slice(i+1)),Ba(na,ua),p}finally{Qe=a,zd=!1}}return null}var Ps=[],Ls=0,ou=null,lu=0,Ei=[],bi=0,qa=null,Pr=1,Lr="";function Ya(i,a){Ps[Ls++]=lu,Ps[Ls++]=ou,ou=i,lu=a}function ev(i,a,l){Ei[bi++]=Pr,Ei[bi++]=Lr,Ei[bi++]=qa,qa=i;var c=Pr;i=Lr;var p=32-ne(c)-1;c&=~(1<<p),l+=1;var _=32-ne(a)+p;if(30<_){var A=p-p%5;_=(c&(1<<A)-1).toString(32),c>>=A,p-=A,Pr=1<<32-ne(a)+p|l<<p|c,Lr=_+i}else Pr=1<<_|l<<p|c,Lr=i}function Hd(i){i.return!==null&&(Ya(i,1),ev(i,1,0))}function Gd(i){for(;i===ou;)ou=Ps[--Ls],Ps[Ls]=null,lu=Ps[--Ls],Ps[Ls]=null;for(;i===qa;)qa=Ei[--bi],Ei[bi]=null,Lr=Ei[--bi],Ei[bi]=null,Pr=Ei[--bi],Ei[bi]=null}var ui=null,ci=null,Jt=!1,zi=null;function tv(i,a){var l=Ai(5,null,null,0);l.elementType="DELETED",l.stateNode=a,l.return=i,a=i.deletions,a===null?(i.deletions=[l],i.flags|=16):a.push(l)}function nv(i,a){switch(i.tag){case 5:var l=i.type;return a=a.nodeType!==1||l.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(i.stateNode=a,ui=i,ci=sa(a.firstChild),!0):!1;case 6:return a=i.pendingProps===""||a.nodeType!==3?null:a,a!==null?(i.stateNode=a,ui=i,ci=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(l=qa!==null?{id:Pr,overflow:Lr}:null,i.memoizedState={dehydrated:a,treeContext:l,retryLane:1073741824},l=Ai(18,null,null,0),l.stateNode=a,l.return=i,i.child=l,ui=i,ci=null,!0):!1;default:return!1}}function Vd(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Wd(i){if(Jt){var a=ci;if(a){var l=a;if(!nv(i,a)){if(Vd(i))throw Error(t(418));a=sa(l.nextSibling);var c=ui;a&&nv(i,a)?tv(c,l):(i.flags=i.flags&-4097|2,Jt=!1,ui=i)}}else{if(Vd(i))throw Error(t(418));i.flags=i.flags&-4097|2,Jt=!1,ui=i}}}function iv(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;ui=i}function uu(i){if(i!==ui)return!1;if(!Jt)return iv(i),Jt=!0,!1;var a;if((a=i.tag!==3)&&!(a=i.tag!==5)&&(a=i.type,a=a!=="head"&&a!=="body"&&!Od(i.type,i.memoizedProps)),a&&(a=ci)){if(Vd(i))throw rv(),Error(t(418));for(;a;)tv(i,a),a=sa(a.nextSibling)}if(iv(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,a=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(a===0){ci=sa(i.nextSibling);break e}a--}else l!=="$"&&l!=="$!"&&l!=="$?"||a++}i=i.nextSibling}ci=null}}else ci=ui?sa(i.stateNode.nextSibling):null;return!0}function rv(){for(var i=ci;i;)i=sa(i.nextSibling)}function Is(){ci=ui=null,Jt=!1}function $d(i){zi===null?zi=[i]:zi.push(i)}var TE=L.ReactCurrentBatchConfig;function Fo(i,a,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var c=l.stateNode}if(!c)throw Error(t(147,i));var p=c,_=""+i;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===_?a.ref:(a=function(A){var z=p.refs;A===null?delete z[_]:z[_]=A},a._stringRef=_,a)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function cu(i,a){throw i=Object.prototype.toString.call(a),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":i))}function av(i){var a=i._init;return a(i._payload)}function sv(i){function a(se,Z){if(i){var le=se.deletions;le===null?(se.deletions=[Z],se.flags|=16):le.push(Z)}}function l(se,Z){if(!i)return null;for(;Z!==null;)a(se,Z),Z=Z.sibling;return null}function c(se,Z){for(se=new Map;Z!==null;)Z.key!==null?se.set(Z.key,Z):se.set(Z.index,Z),Z=Z.sibling;return se}function p(se,Z){return se=va(se,Z),se.index=0,se.sibling=null,se}function _(se,Z,le){return se.index=le,i?(le=se.alternate,le!==null?(le=le.index,le<Z?(se.flags|=2,Z):le):(se.flags|=2,Z)):(se.flags|=1048576,Z)}function A(se){return i&&se.alternate===null&&(se.flags|=2),se}function z(se,Z,le,Ue){return Z===null||Z.tag!==6?(Z=Ff(le,se.mode,Ue),Z.return=se,Z):(Z=p(Z,le),Z.return=se,Z)}function X(se,Z,le,Ue){var it=le.type;return it===b?Re(se,Z,le.props.children,Ue,le.key):Z!==null&&(Z.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===te&&av(it)===Z.type)?(Ue=p(Z,le.props),Ue.ref=Fo(se,Z,le),Ue.return=se,Ue):(Ue=Nu(le.type,le.key,le.props,null,se.mode,Ue),Ue.ref=Fo(se,Z,le),Ue.return=se,Ue)}function de(se,Z,le,Ue){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==le.containerInfo||Z.stateNode.implementation!==le.implementation?(Z=kf(le,se.mode,Ue),Z.return=se,Z):(Z=p(Z,le.children||[]),Z.return=se,Z)}function Re(se,Z,le,Ue,it){return Z===null||Z.tag!==7?(Z=ns(le,se.mode,Ue,it),Z.return=se,Z):(Z=p(Z,le),Z.return=se,Z)}function Le(se,Z,le){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Z=Ff(""+Z,se.mode,le),Z.return=se,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case U:return le=Nu(Z.type,Z.key,Z.props,null,se.mode,le),le.ref=Fo(se,null,Z),le.return=se,le;case D:return Z=kf(Z,se.mode,le),Z.return=se,Z;case te:var Ue=Z._init;return Le(se,Ue(Z._payload),le)}if(Ot(Z)||Y(Z))return Z=ns(Z,se.mode,le,null),Z.return=se,Z;cu(se,Z)}return null}function we(se,Z,le,Ue){var it=Z!==null?Z.key:null;if(typeof le=="string"&&le!==""||typeof le=="number")return it!==null?null:z(se,Z,""+le,Ue);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case U:return le.key===it?X(se,Z,le,Ue):null;case D:return le.key===it?de(se,Z,le,Ue):null;case te:return it=le._init,we(se,Z,it(le._payload),Ue)}if(Ot(le)||Y(le))return it!==null?null:Re(se,Z,le,Ue,null);cu(se,le)}return null}function $e(se,Z,le,Ue,it){if(typeof Ue=="string"&&Ue!==""||typeof Ue=="number")return se=se.get(le)||null,z(Z,se,""+Ue,it);if(typeof Ue=="object"&&Ue!==null){switch(Ue.$$typeof){case U:return se=se.get(Ue.key===null?le:Ue.key)||null,X(Z,se,Ue,it);case D:return se=se.get(Ue.key===null?le:Ue.key)||null,de(Z,se,Ue,it);case te:var at=Ue._init;return $e(se,Z,le,at(Ue._payload),it)}if(Ot(Ue)||Y(Ue))return se=se.get(le)||null,Re(Z,se,Ue,it,null);cu(Z,Ue)}return null}function et(se,Z,le,Ue){for(var it=null,at=null,st=Z,ct=Z=0,wn=null;st!==null&&ct<le.length;ct++){st.index>ct?(wn=st,st=null):wn=st.sibling;var Dt=we(se,st,le[ct],Ue);if(Dt===null){st===null&&(st=wn);break}i&&st&&Dt.alternate===null&&a(se,st),Z=_(Dt,Z,ct),at===null?it=Dt:at.sibling=Dt,at=Dt,st=wn}if(ct===le.length)return l(se,st),Jt&&Ya(se,ct),it;if(st===null){for(;ct<le.length;ct++)st=Le(se,le[ct],Ue),st!==null&&(Z=_(st,Z,ct),at===null?it=st:at.sibling=st,at=st);return Jt&&Ya(se,ct),it}for(st=c(se,st);ct<le.length;ct++)wn=$e(st,se,ct,le[ct],Ue),wn!==null&&(i&&wn.alternate!==null&&st.delete(wn.key===null?ct:wn.key),Z=_(wn,Z,ct),at===null?it=wn:at.sibling=wn,at=wn);return i&&st.forEach(function(_a){return a(se,_a)}),Jt&&Ya(se,ct),it}function tt(se,Z,le,Ue){var it=Y(le);if(typeof it!="function")throw Error(t(150));if(le=it.call(le),le==null)throw Error(t(151));for(var at=it=null,st=Z,ct=Z=0,wn=null,Dt=le.next();st!==null&&!Dt.done;ct++,Dt=le.next()){st.index>ct?(wn=st,st=null):wn=st.sibling;var _a=we(se,st,Dt.value,Ue);if(_a===null){st===null&&(st=wn);break}i&&st&&_a.alternate===null&&a(se,st),Z=_(_a,Z,ct),at===null?it=_a:at.sibling=_a,at=_a,st=wn}if(Dt.done)return l(se,st),Jt&&Ya(se,ct),it;if(st===null){for(;!Dt.done;ct++,Dt=le.next())Dt=Le(se,Dt.value,Ue),Dt!==null&&(Z=_(Dt,Z,ct),at===null?it=Dt:at.sibling=Dt,at=Dt);return Jt&&Ya(se,ct),it}for(st=c(se,st);!Dt.done;ct++,Dt=le.next())Dt=$e(st,se,ct,Dt.value,Ue),Dt!==null&&(i&&Dt.alternate!==null&&st.delete(Dt.key===null?ct:Dt.key),Z=_(Dt,Z,ct),at===null?it=Dt:at.sibling=Dt,at=Dt);return i&&st.forEach(function(ab){return a(se,ab)}),Jt&&Ya(se,ct),it}function fn(se,Z,le,Ue){if(typeof le=="object"&&le!==null&&le.type===b&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case U:e:{for(var it=le.key,at=Z;at!==null;){if(at.key===it){if(it=le.type,it===b){if(at.tag===7){l(se,at.sibling),Z=p(at,le.props.children),Z.return=se,se=Z;break e}}else if(at.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===te&&av(it)===at.type){l(se,at.sibling),Z=p(at,le.props),Z.ref=Fo(se,at,le),Z.return=se,se=Z;break e}l(se,at);break}else a(se,at);at=at.sibling}le.type===b?(Z=ns(le.props.children,se.mode,Ue,le.key),Z.return=se,se=Z):(Ue=Nu(le.type,le.key,le.props,null,se.mode,Ue),Ue.ref=Fo(se,Z,le),Ue.return=se,se=Ue)}return A(se);case D:e:{for(at=le.key;Z!==null;){if(Z.key===at)if(Z.tag===4&&Z.stateNode.containerInfo===le.containerInfo&&Z.stateNode.implementation===le.implementation){l(se,Z.sibling),Z=p(Z,le.children||[]),Z.return=se,se=Z;break e}else{l(se,Z);break}else a(se,Z);Z=Z.sibling}Z=kf(le,se.mode,Ue),Z.return=se,se=Z}return A(se);case te:return at=le._init,fn(se,Z,at(le._payload),Ue)}if(Ot(le))return et(se,Z,le,Ue);if(Y(le))return tt(se,Z,le,Ue);cu(se,le)}return typeof le=="string"&&le!==""||typeof le=="number"?(le=""+le,Z!==null&&Z.tag===6?(l(se,Z.sibling),Z=p(Z,le),Z.return=se,se=Z):(l(se,Z),Z=Ff(le,se.mode,Ue),Z.return=se,se=Z),A(se)):l(se,Z)}return fn}var Ds=sv(!0),ov=sv(!1),du=oa(null),fu=null,Ns=null,Xd=null;function qd(){Xd=Ns=fu=null}function Yd(i){var a=du.current;Yt(du),i._currentValue=a}function Kd(i,a,l){for(;i!==null;){var c=i.alternate;if((i.childLanes&a)!==a?(i.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),i===l)break;i=i.return}}function Os(i,a){fu=i,Xd=Ns=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&a)!==0&&(Kn=!0),i.firstContext=null)}function wi(i){var a=i._currentValue;if(Xd!==i)if(i={context:i,memoizedValue:a,next:null},Ns===null){if(fu===null)throw Error(t(308));Ns=i,fu.dependencies={lanes:0,firstContext:i}}else Ns=Ns.next=i;return a}var Ka=null;function Zd(i){Ka===null?Ka=[i]:Ka.push(i)}function lv(i,a,l,c){var p=a.interleaved;return p===null?(l.next=l,Zd(a)):(l.next=p.next,p.next=l),a.interleaved=l,Ir(i,c)}function Ir(i,a){i.lanes|=a;var l=i.alternate;for(l!==null&&(l.lanes|=a),l=i,i=i.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),l=i,i=i.return;return l.tag===3?l.stateNode:null}var ca=!1;function jd(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uv(i,a){i=i.updateQueue,a.updateQueue===i&&(a.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Dr(i,a){return{eventTime:i,lane:a,tag:0,payload:null,callback:null,next:null}}function da(i,a,l){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(Pt&2)!==0){var p=c.pending;return p===null?a.next=a:(a.next=p.next,p.next=a),c.pending=a,Ir(i,l)}return p=c.interleaved,p===null?(a.next=a,Zd(c)):(a.next=p.next,p.next=a),c.interleaved=a,Ir(i,l)}function hu(i,a,l){if(a=a.updateQueue,a!==null&&(a=a.shared,(l&4194240)!==0)){var c=a.lanes;c&=i.pendingLanes,l|=c,a.lanes=l,sn(i,l)}}function cv(i,a){var l=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=A:_=_.next=A,l=l.next}while(l!==null);_===null?p=_=a:_=_.next=a}else p=_=a;l={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:c.shared,effects:c.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=a:i.next=a,l.lastBaseUpdate=a}function pu(i,a,l,c){var p=i.updateQueue;ca=!1;var _=p.firstBaseUpdate,A=p.lastBaseUpdate,z=p.shared.pending;if(z!==null){p.shared.pending=null;var X=z,de=X.next;X.next=null,A===null?_=de:A.next=de,A=X;var Re=i.alternate;Re!==null&&(Re=Re.updateQueue,z=Re.lastBaseUpdate,z!==A&&(z===null?Re.firstBaseUpdate=de:z.next=de,Re.lastBaseUpdate=X))}if(_!==null){var Le=p.baseState;A=0,Re=de=X=null,z=_;do{var we=z.lane,$e=z.eventTime;if((c&we)===we){Re!==null&&(Re=Re.next={eventTime:$e,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var et=i,tt=z;switch(we=a,$e=l,tt.tag){case 1:if(et=tt.payload,typeof et=="function"){Le=et.call($e,Le,we);break e}Le=et;break e;case 3:et.flags=et.flags&-65537|128;case 0:if(et=tt.payload,we=typeof et=="function"?et.call($e,Le,we):et,we==null)break e;Le=j({},Le,we);break e;case 2:ca=!0}}z.callback!==null&&z.lane!==0&&(i.flags|=64,we=p.effects,we===null?p.effects=[z]:we.push(z))}else $e={eventTime:$e,lane:we,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Re===null?(de=Re=$e,X=Le):Re=Re.next=$e,A|=we;if(z=z.next,z===null){if(z=p.shared.pending,z===null)break;we=z,z=we.next,we.next=null,p.lastBaseUpdate=we,p.shared.pending=null}}while(!0);if(Re===null&&(X=Le),p.baseState=X,p.firstBaseUpdate=de,p.lastBaseUpdate=Re,a=p.shared.interleaved,a!==null){p=a;do A|=p.lane,p=p.next;while(p!==a)}else _===null&&(p.shared.lanes=0);Ja|=A,i.lanes=A,i.memoizedState=Le}}function dv(i,a,l){if(i=a.effects,a.effects=null,i!==null)for(a=0;a<i.length;a++){var c=i[a],p=c.callback;if(p!==null){if(c.callback=null,c=l,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var ko={},or=oa(ko),Bo=oa(ko),zo=oa(ko);function Za(i){if(i===ko)throw Error(t(174));return i}function Jd(i,a){switch(Gt(zo,a),Gt(Bo,i),Gt(or,ko),i=a.nodeType,i){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:fe(null,"");break;default:i=i===8?a.parentNode:a,a=i.namespaceURI||null,i=i.tagName,a=fe(a,i)}Yt(or),Gt(or,a)}function Us(){Yt(or),Yt(Bo),Yt(zo)}function fv(i){Za(zo.current);var a=Za(or.current),l=fe(a,i.type);a!==l&&(Gt(Bo,i),Gt(or,l))}function Qd(i){Bo.current===i&&(Yt(or),Yt(Bo))}var tn=oa(0);function mu(i){for(var a=i;a!==null;){if(a.tag===13){var l=a.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var ef=[];function tf(){for(var i=0;i<ef.length;i++)ef[i]._workInProgressVersionPrimary=null;ef.length=0}var gu=L.ReactCurrentDispatcher,nf=L.ReactCurrentBatchConfig,ja=0,nn=null,yn=null,En=null,vu=!1,Ho=!1,Go=0,RE=0;function Dn(){throw Error(t(321))}function rf(i,a){if(a===null)return!1;for(var l=0;l<a.length&&l<i.length;l++)if(!Bi(i[l],a[l]))return!1;return!0}function af(i,a,l,c,p,_){if(ja=_,nn=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,gu.current=i===null||i.memoizedState===null?LE:IE,i=l(c,p),Ho){_=0;do{if(Ho=!1,Go=0,25<=_)throw Error(t(301));_+=1,En=yn=null,a.updateQueue=null,gu.current=DE,i=l(c,p)}while(Ho)}if(gu.current=Su,a=yn!==null&&yn.next!==null,ja=0,En=yn=nn=null,vu=!1,a)throw Error(t(300));return i}function sf(){var i=Go!==0;return Go=0,i}function lr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?nn.memoizedState=En=i:En=En.next=i,En}function Ti(){if(yn===null){var i=nn.alternate;i=i!==null?i.memoizedState:null}else i=yn.next;var a=En===null?nn.memoizedState:En.next;if(a!==null)En=a,yn=i;else{if(i===null)throw Error(t(310));yn=i,i={memoizedState:yn.memoizedState,baseState:yn.baseState,baseQueue:yn.baseQueue,queue:yn.queue,next:null},En===null?nn.memoizedState=En=i:En=En.next=i}return En}function Vo(i,a){return typeof a=="function"?a(i):a}function of(i){var a=Ti(),l=a.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var c=yn,p=c.baseQueue,_=l.pending;if(_!==null){if(p!==null){var A=p.next;p.next=_.next,_.next=A}c.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,c=c.baseState;var z=A=null,X=null,de=_;do{var Re=de.lane;if((ja&Re)===Re)X!==null&&(X=X.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),c=de.hasEagerState?de.eagerState:i(c,de.action);else{var Le={lane:Re,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};X===null?(z=X=Le,A=c):X=X.next=Le,nn.lanes|=Re,Ja|=Re}de=de.next}while(de!==null&&de!==_);X===null?A=c:X.next=z,Bi(c,a.memoizedState)||(Kn=!0),a.memoizedState=c,a.baseState=A,a.baseQueue=X,l.lastRenderedState=c}if(i=l.interleaved,i!==null){p=i;do _=p.lane,nn.lanes|=_,Ja|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[a.memoizedState,l.dispatch]}function lf(i){var a=Ti(),l=a.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var c=l.dispatch,p=l.pending,_=a.memoizedState;if(p!==null){l.pending=null;var A=p=p.next;do _=i(_,A.action),A=A.next;while(A!==p);Bi(_,a.memoizedState)||(Kn=!0),a.memoizedState=_,a.baseQueue===null&&(a.baseState=_),l.lastRenderedState=_}return[_,c]}function hv(){}function pv(i,a){var l=nn,c=Ti(),p=a(),_=!Bi(c.memoizedState,p);if(_&&(c.memoizedState=p,Kn=!0),c=c.queue,uf(vv.bind(null,l,c,i),[i]),c.getSnapshot!==a||_||En!==null&&En.memoizedState.tag&1){if(l.flags|=2048,Wo(9,gv.bind(null,l,c,p,a),void 0,null),bn===null)throw Error(t(349));(ja&30)!==0||mv(l,a,p)}return p}function mv(i,a,l){i.flags|=16384,i={getSnapshot:a,value:l},a=nn.updateQueue,a===null?(a={lastEffect:null,stores:null},nn.updateQueue=a,a.stores=[i]):(l=a.stores,l===null?a.stores=[i]:l.push(i))}function gv(i,a,l,c){a.value=l,a.getSnapshot=c,_v(a)&&yv(i)}function vv(i,a,l){return l(function(){_v(a)&&yv(i)})}function _v(i){var a=i.getSnapshot;i=i.value;try{var l=a();return!Bi(i,l)}catch{return!0}}function yv(i){var a=Ir(i,1);a!==null&&Wi(a,i,1,-1)}function Sv(i){var a=lr();return typeof i=="function"&&(i=i()),a.memoizedState=a.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:i},a.queue=i,i=i.dispatch=PE.bind(null,nn,i),[a.memoizedState,i]}function Wo(i,a,l,c){return i={tag:i,create:a,destroy:l,deps:c,next:null},a=nn.updateQueue,a===null?(a={lastEffect:null,stores:null},nn.updateQueue=a,a.lastEffect=i.next=i):(l=a.lastEffect,l===null?a.lastEffect=i.next=i:(c=l.next,l.next=i,i.next=c,a.lastEffect=i)),i}function xv(){return Ti().memoizedState}function _u(i,a,l,c){var p=lr();nn.flags|=i,p.memoizedState=Wo(1|a,l,void 0,c===void 0?null:c)}function yu(i,a,l,c){var p=Ti();c=c===void 0?null:c;var _=void 0;if(yn!==null){var A=yn.memoizedState;if(_=A.destroy,c!==null&&rf(c,A.deps)){p.memoizedState=Wo(a,l,_,c);return}}nn.flags|=i,p.memoizedState=Wo(1|a,l,_,c)}function Mv(i,a){return _u(8390656,8,i,a)}function uf(i,a){return yu(2048,8,i,a)}function Ev(i,a){return yu(4,2,i,a)}function bv(i,a){return yu(4,4,i,a)}function wv(i,a){if(typeof a=="function")return i=i(),a(i),function(){a(null)};if(a!=null)return i=i(),a.current=i,function(){a.current=null}}function Tv(i,a,l){return l=l!=null?l.concat([i]):null,yu(4,4,wv.bind(null,a,i),l)}function cf(){}function Rv(i,a){var l=Ti();a=a===void 0?null:a;var c=l.memoizedState;return c!==null&&a!==null&&rf(a,c[1])?c[0]:(l.memoizedState=[i,a],i)}function Av(i,a){var l=Ti();a=a===void 0?null:a;var c=l.memoizedState;return c!==null&&a!==null&&rf(a,c[1])?c[0]:(i=i(),l.memoizedState=[i,a],i)}function Cv(i,a,l){return(ja&21)===0?(i.baseState&&(i.baseState=!1,Kn=!0),i.memoizedState=l):(Bi(l,a)||(l=It(),nn.lanes|=l,Ja|=l,i.baseState=!0),a)}function AE(i,a){var l=Qe;Qe=l!==0&&4>l?l:4,i(!0);var c=nf.transition;nf.transition={};try{i(!1),a()}finally{Qe=l,nf.transition=c}}function Pv(){return Ti().memoizedState}function CE(i,a,l){var c=ma(i);if(l={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null},Lv(i))Iv(a,l);else if(l=lv(i,a,l,c),l!==null){var p=Gn();Wi(l,i,c,p),Dv(l,a,c)}}function PE(i,a,l){var c=ma(i),p={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null};if(Lv(i))Iv(a,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=a.lastRenderedReducer,_!==null))try{var A=a.lastRenderedState,z=_(A,l);if(p.hasEagerState=!0,p.eagerState=z,Bi(z,A)){var X=a.interleaved;X===null?(p.next=p,Zd(a)):(p.next=X.next,X.next=p),a.interleaved=p;return}}catch{}finally{}l=lv(i,a,p,c),l!==null&&(p=Gn(),Wi(l,i,c,p),Dv(l,a,c))}}function Lv(i){var a=i.alternate;return i===nn||a!==null&&a===nn}function Iv(i,a){Ho=vu=!0;var l=i.pending;l===null?a.next=a:(a.next=l.next,l.next=a),i.pending=a}function Dv(i,a,l){if((l&4194240)!==0){var c=a.lanes;c&=i.pendingLanes,l|=c,a.lanes=l,sn(i,l)}}var Su={readContext:wi,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useInsertionEffect:Dn,useLayoutEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useMutableSource:Dn,useSyncExternalStore:Dn,useId:Dn,unstable_isNewReconciler:!1},LE={readContext:wi,useCallback:function(i,a){return lr().memoizedState=[i,a===void 0?null:a],i},useContext:wi,useEffect:Mv,useImperativeHandle:function(i,a,l){return l=l!=null?l.concat([i]):null,_u(4194308,4,wv.bind(null,a,i),l)},useLayoutEffect:function(i,a){return _u(4194308,4,i,a)},useInsertionEffect:function(i,a){return _u(4,2,i,a)},useMemo:function(i,a){var l=lr();return a=a===void 0?null:a,i=i(),l.memoizedState=[i,a],i},useReducer:function(i,a,l){var c=lr();return a=l!==void 0?l(a):a,c.memoizedState=c.baseState=a,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:a},c.queue=i,i=i.dispatch=CE.bind(null,nn,i),[c.memoizedState,i]},useRef:function(i){var a=lr();return i={current:i},a.memoizedState=i},useState:Sv,useDebugValue:cf,useDeferredValue:function(i){return lr().memoizedState=i},useTransition:function(){var i=Sv(!1),a=i[0];return i=AE.bind(null,i[1]),lr().memoizedState=i,[a,i]},useMutableSource:function(){},useSyncExternalStore:function(i,a,l){var c=nn,p=lr();if(Jt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=a(),bn===null)throw Error(t(349));(ja&30)!==0||mv(c,a,l)}p.memoizedState=l;var _={value:l,getSnapshot:a};return p.queue=_,Mv(vv.bind(null,c,_,i),[i]),c.flags|=2048,Wo(9,gv.bind(null,c,_,l,a),void 0,null),l},useId:function(){var i=lr(),a=bn.identifierPrefix;if(Jt){var l=Lr,c=Pr;l=(c&~(1<<32-ne(c)-1)).toString(32)+l,a=":"+a+"R"+l,l=Go++,0<l&&(a+="H"+l.toString(32)),a+=":"}else l=RE++,a=":"+a+"r"+l.toString(32)+":";return i.memoizedState=a},unstable_isNewReconciler:!1},IE={readContext:wi,useCallback:Rv,useContext:wi,useEffect:uf,useImperativeHandle:Tv,useInsertionEffect:Ev,useLayoutEffect:bv,useMemo:Av,useReducer:of,useRef:xv,useState:function(){return of(Vo)},useDebugValue:cf,useDeferredValue:function(i){var a=Ti();return Cv(a,yn.memoizedState,i)},useTransition:function(){var i=of(Vo)[0],a=Ti().memoizedState;return[i,a]},useMutableSource:hv,useSyncExternalStore:pv,useId:Pv,unstable_isNewReconciler:!1},DE={readContext:wi,useCallback:Rv,useContext:wi,useEffect:uf,useImperativeHandle:Tv,useInsertionEffect:Ev,useLayoutEffect:bv,useMemo:Av,useReducer:lf,useRef:xv,useState:function(){return lf(Vo)},useDebugValue:cf,useDeferredValue:function(i){var a=Ti();return yn===null?a.memoizedState=i:Cv(a,yn.memoizedState,i)},useTransition:function(){var i=lf(Vo)[0],a=Ti().memoizedState;return[i,a]},useMutableSource:hv,useSyncExternalStore:pv,useId:Pv,unstable_isNewReconciler:!1};function Hi(i,a){if(i&&i.defaultProps){a=j({},a),i=i.defaultProps;for(var l in i)a[l]===void 0&&(a[l]=i[l]);return a}return a}function df(i,a,l,c){a=i.memoizedState,l=l(c,a),l=l==null?a:j({},a,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var xu={isMounted:function(i){return(i=i._reactInternals)?Mi(i)===i:!1},enqueueSetState:function(i,a,l){i=i._reactInternals;var c=Gn(),p=ma(i),_=Dr(c,p);_.payload=a,l!=null&&(_.callback=l),a=da(i,_,p),a!==null&&(Wi(a,i,p,c),hu(a,i,p))},enqueueReplaceState:function(i,a,l){i=i._reactInternals;var c=Gn(),p=ma(i),_=Dr(c,p);_.tag=1,_.payload=a,l!=null&&(_.callback=l),a=da(i,_,p),a!==null&&(Wi(a,i,p,c),hu(a,i,p))},enqueueForceUpdate:function(i,a){i=i._reactInternals;var l=Gn(),c=ma(i),p=Dr(l,c);p.tag=2,a!=null&&(p.callback=a),a=da(i,p,c),a!==null&&(Wi(a,i,c,l),hu(a,i,c))}};function Nv(i,a,l,c,p,_,A){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,_,A):a.prototype&&a.prototype.isPureReactComponent?!Po(l,c)||!Po(p,_):!0}function Ov(i,a,l){var c=!1,p=la,_=a.contextType;return typeof _=="object"&&_!==null?_=wi(_):(p=Yn(a)?Xa:In.current,c=a.contextTypes,_=(c=c!=null)?Cs(i,p):la),a=new a(l,_),i.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=xu,i.stateNode=a,a._reactInternals=i,c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),a}function Uv(i,a,l,c){i=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(l,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(l,c),a.state!==i&&xu.enqueueReplaceState(a,a.state,null)}function ff(i,a,l,c){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},jd(i);var _=a.contextType;typeof _=="object"&&_!==null?p.context=wi(_):(_=Yn(a)?Xa:In.current,p.context=Cs(i,_)),p.state=i.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(df(i,a,_,l),p.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(a=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),a!==p.state&&xu.enqueueReplaceState(p,p.state,null),pu(i,l,p,c),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Fs(i,a){try{var l="",c=a;do l+=Se(c),c=c.return;while(c);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:a,stack:p,digest:null}}function hf(i,a,l){return{value:i,source:null,stack:l??null,digest:a??null}}function pf(i,a){try{console.error(a.value)}catch(l){setTimeout(function(){throw l})}}var NE=typeof WeakMap=="function"?WeakMap:Map;function Fv(i,a,l){l=Dr(-1,l),l.tag=3,l.payload={element:null};var c=a.value;return l.callback=function(){Au||(Au=!0,Cf=c),pf(i,a)},l}function kv(i,a,l){l=Dr(-1,l),l.tag=3;var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var p=a.value;l.payload=function(){return c(p)},l.callback=function(){pf(i,a)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){pf(i,a),typeof c!="function"&&(ha===null?ha=new Set([this]):ha.add(this));var A=a.stack;this.componentDidCatch(a.value,{componentStack:A!==null?A:""})}),l}function Bv(i,a,l){var c=i.pingCache;if(c===null){c=i.pingCache=new NE;var p=new Set;c.set(a,p)}else p=c.get(a),p===void 0&&(p=new Set,c.set(a,p));p.has(l)||(p.add(l),i=YE.bind(null,i,a,l),a.then(i,i))}function zv(i){do{var a;if((a=i.tag===13)&&(a=i.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return i;i=i.return}while(i!==null);return null}function Hv(i,a,l,c,p){return(i.mode&1)===0?(i===a?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(a=Dr(-1,1),a.tag=2,da(l,a,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var OE=L.ReactCurrentOwner,Kn=!1;function Hn(i,a,l,c){a.child=i===null?ov(a,null,l,c):Ds(a,i.child,l,c)}function Gv(i,a,l,c,p){l=l.render;var _=a.ref;return Os(a,p),c=af(i,a,l,c,_,p),l=sf(),i!==null&&!Kn?(a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~p,Nr(i,a,p)):(Jt&&l&&Hd(a),a.flags|=1,Hn(i,a,c,p),a.child)}function Vv(i,a,l,c,p){if(i===null){var _=l.type;return typeof _=="function"&&!Uf(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(a.tag=15,a.type=_,Wv(i,a,_,c,p)):(i=Nu(l.type,null,c,a,a.mode,p),i.ref=a.ref,i.return=a,a.child=i)}if(_=i.child,(i.lanes&p)===0){var A=_.memoizedProps;if(l=l.compare,l=l!==null?l:Po,l(A,c)&&i.ref===a.ref)return Nr(i,a,p)}return a.flags|=1,i=va(_,c),i.ref=a.ref,i.return=a,a.child=i}function Wv(i,a,l,c,p){if(i!==null){var _=i.memoizedProps;if(Po(_,c)&&i.ref===a.ref)if(Kn=!1,a.pendingProps=c=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(Kn=!0);else return a.lanes=i.lanes,Nr(i,a,p)}return mf(i,a,l,c,p)}function $v(i,a,l){var c=a.pendingProps,p=c.children,_=i!==null?i.memoizedState:null;if(c.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(Bs,di),di|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:i,cachePool:null,transitions:null},a.updateQueue=null,Gt(Bs,di),di|=i,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=_!==null?_.baseLanes:l,Gt(Bs,di),di|=c}else _!==null?(c=_.baseLanes|l,a.memoizedState=null):c=l,Gt(Bs,di),di|=c;return Hn(i,a,p,l),a.child}function Xv(i,a){var l=a.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(a.flags|=512,a.flags|=2097152)}function mf(i,a,l,c,p){var _=Yn(l)?Xa:In.current;return _=Cs(a,_),Os(a,p),l=af(i,a,l,c,_,p),c=sf(),i!==null&&!Kn?(a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~p,Nr(i,a,p)):(Jt&&c&&Hd(a),a.flags|=1,Hn(i,a,l,p),a.child)}function qv(i,a,l,c,p){if(Yn(l)){var _=!0;au(a)}else _=!1;if(Os(a,p),a.stateNode===null)Eu(i,a),Ov(a,l,c),ff(a,l,c,p),c=!0;else if(i===null){var A=a.stateNode,z=a.memoizedProps;A.props=z;var X=A.context,de=l.contextType;typeof de=="object"&&de!==null?de=wi(de):(de=Yn(l)?Xa:In.current,de=Cs(a,de));var Re=l.getDerivedStateFromProps,Le=typeof Re=="function"||typeof A.getSnapshotBeforeUpdate=="function";Le||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==c||X!==de)&&Uv(a,A,c,de),ca=!1;var we=a.memoizedState;A.state=we,pu(a,c,A,p),X=a.memoizedState,z!==c||we!==X||qn.current||ca?(typeof Re=="function"&&(df(a,l,Re,c),X=a.memoizedState),(z=ca||Nv(a,l,z,c,we,X,de))?(Le||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(a.flags|=4194308)):(typeof A.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=X),A.props=c,A.state=X,A.context=de,c=z):(typeof A.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{A=a.stateNode,uv(i,a),z=a.memoizedProps,de=a.type===a.elementType?z:Hi(a.type,z),A.props=de,Le=a.pendingProps,we=A.context,X=l.contextType,typeof X=="object"&&X!==null?X=wi(X):(X=Yn(l)?Xa:In.current,X=Cs(a,X));var $e=l.getDerivedStateFromProps;(Re=typeof $e=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==Le||we!==X)&&Uv(a,A,c,X),ca=!1,we=a.memoizedState,A.state=we,pu(a,c,A,p);var et=a.memoizedState;z!==Le||we!==et||qn.current||ca?(typeof $e=="function"&&(df(a,l,$e,c),et=a.memoizedState),(de=ca||Nv(a,l,de,c,we,et,X)||!1)?(Re||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,et,X),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,et,X)),typeof A.componentDidUpdate=="function"&&(a.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof A.componentDidUpdate!="function"||z===i.memoizedProps&&we===i.memoizedState||(a.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&we===i.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=et),A.props=c,A.state=et,A.context=X,c=de):(typeof A.componentDidUpdate!="function"||z===i.memoizedProps&&we===i.memoizedState||(a.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&we===i.memoizedState||(a.flags|=1024),c=!1)}return gf(i,a,l,c,_,p)}function gf(i,a,l,c,p,_){Xv(i,a);var A=(a.flags&128)!==0;if(!c&&!A)return p&&Jg(a,l,!1),Nr(i,a,_);c=a.stateNode,OE.current=a;var z=A&&typeof l.getDerivedStateFromError!="function"?null:c.render();return a.flags|=1,i!==null&&A?(a.child=Ds(a,i.child,null,_),a.child=Ds(a,null,z,_)):Hn(i,a,z,_),a.memoizedState=c.state,p&&Jg(a,l,!0),a.child}function Yv(i){var a=i.stateNode;a.pendingContext?Zg(i,a.pendingContext,a.pendingContext!==a.context):a.context&&Zg(i,a.context,!1),Jd(i,a.containerInfo)}function Kv(i,a,l,c,p){return Is(),$d(p),a.flags|=256,Hn(i,a,l,c),a.child}var vf={dehydrated:null,treeContext:null,retryLane:0};function _f(i){return{baseLanes:i,cachePool:null,transitions:null}}function Zv(i,a,l){var c=a.pendingProps,p=tn.current,_=!1,A=(a.flags&128)!==0,z;if((z=A)||(z=i!==null&&i.memoizedState===null?!1:(p&2)!==0),z?(_=!0,a.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Gt(tn,p&1),i===null)return Wd(a),i=a.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((a.mode&1)===0?a.lanes=1:i.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(A=c.children,i=c.fallback,_?(c=a.mode,_=a.child,A={mode:"hidden",children:A},(c&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=A):_=Ou(A,c,0,null),i=ns(i,c,l,null),_.return=a,i.return=a,_.sibling=i,a.child=_,a.child.memoizedState=_f(l),a.memoizedState=vf,i):yf(a,A));if(p=i.memoizedState,p!==null&&(z=p.dehydrated,z!==null))return UE(i,a,A,c,z,p,l);if(_){_=c.fallback,A=a.mode,p=i.child,z=p.sibling;var X={mode:"hidden",children:c.children};return(A&1)===0&&a.child!==p?(c=a.child,c.childLanes=0,c.pendingProps=X,a.deletions=null):(c=va(p,X),c.subtreeFlags=p.subtreeFlags&14680064),z!==null?_=va(z,_):(_=ns(_,A,l,null),_.flags|=2),_.return=a,c.return=a,c.sibling=_,a.child=c,c=_,_=a.child,A=i.child.memoizedState,A=A===null?_f(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},_.memoizedState=A,_.childLanes=i.childLanes&~l,a.memoizedState=vf,c}return _=i.child,i=_.sibling,c=va(_,{mode:"visible",children:c.children}),(a.mode&1)===0&&(c.lanes=l),c.return=a,c.sibling=null,i!==null&&(l=a.deletions,l===null?(a.deletions=[i],a.flags|=16):l.push(i)),a.child=c,a.memoizedState=null,c}function yf(i,a){return a=Ou({mode:"visible",children:a},i.mode,0,null),a.return=i,i.child=a}function Mu(i,a,l,c){return c!==null&&$d(c),Ds(a,i.child,null,l),i=yf(a,a.pendingProps.children),i.flags|=2,a.memoizedState=null,i}function UE(i,a,l,c,p,_,A){if(l)return a.flags&256?(a.flags&=-257,c=hf(Error(t(422))),Mu(i,a,A,c)):a.memoizedState!==null?(a.child=i.child,a.flags|=128,null):(_=c.fallback,p=a.mode,c=Ou({mode:"visible",children:c.children},p,0,null),_=ns(_,p,A,null),_.flags|=2,c.return=a,_.return=a,c.sibling=_,a.child=c,(a.mode&1)!==0&&Ds(a,i.child,null,A),a.child.memoizedState=_f(A),a.memoizedState=vf,_);if((a.mode&1)===0)return Mu(i,a,A,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var z=c.dgst;return c=z,_=Error(t(419)),c=hf(_,c,void 0),Mu(i,a,A,c)}if(z=(A&i.childLanes)!==0,Kn||z){if(c=bn,c!==null){switch(A&-A){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|A))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Ir(i,p),Wi(c,i,p,-1))}return Of(),c=hf(Error(t(421))),Mu(i,a,A,c)}return p.data==="$?"?(a.flags|=128,a.child=i.child,a=KE.bind(null,i),p._reactRetry=a,null):(i=_.treeContext,ci=sa(p.nextSibling),ui=a,Jt=!0,zi=null,i!==null&&(Ei[bi++]=Pr,Ei[bi++]=Lr,Ei[bi++]=qa,Pr=i.id,Lr=i.overflow,qa=a),a=yf(a,c.children),a.flags|=4096,a)}function jv(i,a,l){i.lanes|=a;var c=i.alternate;c!==null&&(c.lanes|=a),Kd(i.return,a,l)}function Sf(i,a,l,c,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:p}:(_.isBackwards=a,_.rendering=null,_.renderingStartTime=0,_.last=c,_.tail=l,_.tailMode=p)}function Jv(i,a,l){var c=a.pendingProps,p=c.revealOrder,_=c.tail;if(Hn(i,a,c.children,l),c=tn.current,(c&2)!==0)c=c&1|2,a.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=a.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&jv(i,l,a);else if(i.tag===19)jv(i,l,a);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break e;for(;i.sibling===null;){if(i.return===null||i.return===a)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}if(Gt(tn,c),(a.mode&1)===0)a.memoizedState=null;else switch(p){case"forwards":for(l=a.child,p=null;l!==null;)i=l.alternate,i!==null&&mu(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=a.child,a.child=null):(p=l.sibling,l.sibling=null),Sf(a,!1,p,l,_);break;case"backwards":for(l=null,p=a.child,a.child=null;p!==null;){if(i=p.alternate,i!==null&&mu(i)===null){a.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}Sf(a,!0,l,null,_);break;case"together":Sf(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Eu(i,a){(a.mode&1)===0&&i!==null&&(i.alternate=null,a.alternate=null,a.flags|=2)}function Nr(i,a,l){if(i!==null&&(a.dependencies=i.dependencies),Ja|=a.lanes,(l&a.childLanes)===0)return null;if(i!==null&&a.child!==i.child)throw Error(t(153));if(a.child!==null){for(i=a.child,l=va(i,i.pendingProps),a.child=l,l.return=a;i.sibling!==null;)i=i.sibling,l=l.sibling=va(i,i.pendingProps),l.return=a;l.sibling=null}return a.child}function FE(i,a,l){switch(a.tag){case 3:Yv(a),Is();break;case 5:fv(a);break;case 1:Yn(a.type)&&au(a);break;case 4:Jd(a,a.stateNode.containerInfo);break;case 10:var c=a.type._context,p=a.memoizedProps.value;Gt(du,c._currentValue),c._currentValue=p;break;case 13:if(c=a.memoizedState,c!==null)return c.dehydrated!==null?(Gt(tn,tn.current&1),a.flags|=128,null):(l&a.child.childLanes)!==0?Zv(i,a,l):(Gt(tn,tn.current&1),i=Nr(i,a,l),i!==null?i.sibling:null);Gt(tn,tn.current&1);break;case 19:if(c=(l&a.childLanes)!==0,(i.flags&128)!==0){if(c)return Jv(i,a,l);a.flags|=128}if(p=a.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Gt(tn,tn.current),c)break;return null;case 22:case 23:return a.lanes=0,$v(i,a,l)}return Nr(i,a,l)}var Qv,xf,e0,t0;Qv=function(i,a){for(var l=a.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===a)break;for(;l.sibling===null;){if(l.return===null||l.return===a)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},xf=function(){},e0=function(i,a,l,c){var p=i.memoizedProps;if(p!==c){i=a.stateNode,Za(or.current);var _=null;switch(l){case"input":p=ot(i,p),c=ot(i,c),_=[];break;case"select":p=j({},p,{value:void 0}),c=j({},c,{value:void 0}),_=[];break;case"textarea":p=an(i,p),c=an(i,c),_=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(i.onclick=nu)}pe(l,c);var A;l=null;for(de in p)if(!c.hasOwnProperty(de)&&p.hasOwnProperty(de)&&p[de]!=null)if(de==="style"){var z=p[de];for(A in z)z.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(s.hasOwnProperty(de)?_||(_=[]):(_=_||[]).push(de,null));for(de in c){var X=c[de];if(z=p!=null?p[de]:void 0,c.hasOwnProperty(de)&&X!==z&&(X!=null||z!=null))if(de==="style")if(z){for(A in z)!z.hasOwnProperty(A)||X&&X.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in X)X.hasOwnProperty(A)&&z[A]!==X[A]&&(l||(l={}),l[A]=X[A])}else l||(_||(_=[]),_.push(de,l)),l=X;else de==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,z=z?z.__html:void 0,X!=null&&z!==X&&(_=_||[]).push(de,X)):de==="children"?typeof X!="string"&&typeof X!="number"||(_=_||[]).push(de,""+X):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(s.hasOwnProperty(de)?(X!=null&&de==="onScroll"&&qt("scroll",i),_||z===X||(_=[])):(_=_||[]).push(de,X))}l&&(_=_||[]).push("style",l);var de=_;(a.updateQueue=de)&&(a.flags|=4)}},t0=function(i,a,l,c){l!==c&&(a.flags|=4)};function $o(i,a){if(!Jt)switch(i.tailMode){case"hidden":a=i.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?a||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function Nn(i){var a=i.alternate!==null&&i.alternate.child===i.child,l=0,c=0;if(a)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=c,i.childLanes=l,a}function kE(i,a,l){var c=a.pendingProps;switch(Gd(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nn(a),null;case 1:return Yn(a.type)&&ru(),Nn(a),null;case 3:return c=a.stateNode,Us(),Yt(qn),Yt(In),tf(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(i===null||i.child===null)&&(uu(a)?a.flags|=4:i===null||i.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,zi!==null&&(If(zi),zi=null))),xf(i,a),Nn(a),null;case 5:Qd(a);var p=Za(zo.current);if(l=a.type,i!==null&&a.stateNode!=null)e0(i,a,l,c,p),i.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!c){if(a.stateNode===null)throw Error(t(166));return Nn(a),null}if(i=Za(or.current),uu(a)){c=a.stateNode,l=a.type;var _=a.memoizedProps;switch(c[sr]=a,c[Oo]=_,i=(a.mode&1)!==0,l){case"dialog":qt("cancel",c),qt("close",c);break;case"iframe":case"object":case"embed":qt("load",c);break;case"video":case"audio":for(p=0;p<Io.length;p++)qt(Io[p],c);break;case"source":qt("error",c);break;case"img":case"image":case"link":qt("error",c),qt("load",c);break;case"details":qt("toggle",c);break;case"input":Wt(c,_),qt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!_.multiple},qt("invalid",c);break;case"textarea":pn(c,_),qt("invalid",c)}pe(l,_),p=null;for(var A in _)if(_.hasOwnProperty(A)){var z=_[A];A==="children"?typeof z=="string"?c.textContent!==z&&(_.suppressHydrationWarning!==!0&&tu(c.textContent,z,i),p=["children",z]):typeof z=="number"&&c.textContent!==""+z&&(_.suppressHydrationWarning!==!0&&tu(c.textContent,z,i),p=["children",""+z]):s.hasOwnProperty(A)&&z!=null&&A==="onScroll"&&qt("scroll",c)}switch(l){case"input":Xe(c),Lt(c,_,!0);break;case"textarea":Xe(c),mn(c);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(c.onclick=nu)}c=p,a.updateQueue=c,c!==null&&(a.flags|=4)}else{A=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Ct(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=A.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof c.is=="string"?i=A.createElement(l,{is:c.is}):(i=A.createElement(l),l==="select"&&(A=i,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):i=A.createElementNS(i,l),i[sr]=a,i[Oo]=c,Qv(i,a,!1,!1),a.stateNode=i;e:{switch(A=be(l,c),l){case"dialog":qt("cancel",i),qt("close",i),p=c;break;case"iframe":case"object":case"embed":qt("load",i),p=c;break;case"video":case"audio":for(p=0;p<Io.length;p++)qt(Io[p],i);p=c;break;case"source":qt("error",i),p=c;break;case"img":case"image":case"link":qt("error",i),qt("load",i),p=c;break;case"details":qt("toggle",i),p=c;break;case"input":Wt(i,c),p=ot(i,c),qt("invalid",i);break;case"option":p=c;break;case"select":i._wrapperState={wasMultiple:!!c.multiple},p=j({},c,{value:void 0}),qt("invalid",i);break;case"textarea":pn(i,c),p=an(i,c),qt("invalid",i);break;default:p=c}pe(l,p),z=p;for(_ in z)if(z.hasOwnProperty(_)){var X=z[_];_==="style"?W(i,X):_==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,X!=null&&Pe(i,X)):_==="children"?typeof X=="string"?(l!=="textarea"||X!=="")&&he(i,X):typeof X=="number"&&he(i,""+X):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?X!=null&&_==="onScroll"&&qt("scroll",i):X!=null&&N(i,_,X,A))}switch(l){case"input":Xe(i),Lt(i,c,!1);break;case"textarea":Xe(i),mn(i);break;case"option":c.value!=null&&i.setAttribute("value",""+ve(c.value));break;case"select":i.multiple=!!c.multiple,_=c.value,_!=null?Zt(i,!!c.multiple,_,!1):c.defaultValue!=null&&Zt(i,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=nu)}switch(l){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return Nn(a),null;case 6:if(i&&a.stateNode!=null)t0(i,a,i.memoizedProps,c);else{if(typeof c!="string"&&a.stateNode===null)throw Error(t(166));if(l=Za(zo.current),Za(or.current),uu(a)){if(c=a.stateNode,l=a.memoizedProps,c[sr]=a,(_=c.nodeValue!==l)&&(i=ui,i!==null))switch(i.tag){case 3:tu(c.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&tu(c.nodeValue,l,(i.mode&1)!==0)}_&&(a.flags|=4)}else c=(l.nodeType===9?l:l.ownerDocument).createTextNode(c),c[sr]=a,a.stateNode=c}return Nn(a),null;case 13:if(Yt(tn),c=a.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Jt&&ci!==null&&(a.mode&1)!==0&&(a.flags&128)===0)rv(),Is(),a.flags|=98560,_=!1;else if(_=uu(a),c!==null&&c.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=a.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[sr]=a}else Is(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Nn(a),_=!1}else zi!==null&&(If(zi),zi=null),_=!0;if(!_)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=l,a):(c=c!==null,c!==(i!==null&&i.memoizedState!==null)&&c&&(a.child.flags|=8192,(a.mode&1)!==0&&(i===null||(tn.current&1)!==0?Sn===0&&(Sn=3):Of())),a.updateQueue!==null&&(a.flags|=4),Nn(a),null);case 4:return Us(),xf(i,a),i===null&&Do(a.stateNode.containerInfo),Nn(a),null;case 10:return Yd(a.type._context),Nn(a),null;case 17:return Yn(a.type)&&ru(),Nn(a),null;case 19:if(Yt(tn),_=a.memoizedState,_===null)return Nn(a),null;if(c=(a.flags&128)!==0,A=_.rendering,A===null)if(c)$o(_,!1);else{if(Sn!==0||i!==null&&(i.flags&128)!==0)for(i=a.child;i!==null;){if(A=mu(i),A!==null){for(a.flags|=128,$o(_,!1),c=A.updateQueue,c!==null&&(a.updateQueue=c,a.flags|=4),a.subtreeFlags=0,c=l,l=a.child;l!==null;)_=l,i=c,_.flags&=14680066,A=_.alternate,A===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=A.childLanes,_.lanes=A.lanes,_.child=A.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=A.memoizedProps,_.memoizedState=A.memoizedState,_.updateQueue=A.updateQueue,_.type=A.type,i=A.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Gt(tn,tn.current&1|2),a.child}i=i.sibling}_.tail!==null&&zt()>zs&&(a.flags|=128,c=!0,$o(_,!1),a.lanes=4194304)}else{if(!c)if(i=mu(A),i!==null){if(a.flags|=128,c=!0,l=i.updateQueue,l!==null&&(a.updateQueue=l,a.flags|=4),$o(_,!0),_.tail===null&&_.tailMode==="hidden"&&!A.alternate&&!Jt)return Nn(a),null}else 2*zt()-_.renderingStartTime>zs&&l!==1073741824&&(a.flags|=128,c=!0,$o(_,!1),a.lanes=4194304);_.isBackwards?(A.sibling=a.child,a.child=A):(l=_.last,l!==null?l.sibling=A:a.child=A,_.last=A)}return _.tail!==null?(a=_.tail,_.rendering=a,_.tail=a.sibling,_.renderingStartTime=zt(),a.sibling=null,l=tn.current,Gt(tn,c?l&1|2:l&1),a):(Nn(a),null);case 22:case 23:return Nf(),c=a.memoizedState!==null,i!==null&&i.memoizedState!==null!==c&&(a.flags|=8192),c&&(a.mode&1)!==0?(di&1073741824)!==0&&(Nn(a),a.subtreeFlags&6&&(a.flags|=8192)):Nn(a),null;case 24:return null;case 25:return null}throw Error(t(156,a.tag))}function BE(i,a){switch(Gd(a),a.tag){case 1:return Yn(a.type)&&ru(),i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 3:return Us(),Yt(qn),Yt(In),tf(),i=a.flags,(i&65536)!==0&&(i&128)===0?(a.flags=i&-65537|128,a):null;case 5:return Qd(a),null;case 13:if(Yt(tn),i=a.memoizedState,i!==null&&i.dehydrated!==null){if(a.alternate===null)throw Error(t(340));Is()}return i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 19:return Yt(tn),null;case 4:return Us(),null;case 10:return Yd(a.type._context),null;case 22:case 23:return Nf(),null;case 24:return null;default:return null}}var bu=!1,On=!1,zE=typeof WeakSet=="function"?WeakSet:Set,je=null;function ks(i,a){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(c){ln(i,a,c)}else l.current=null}function Mf(i,a,l){try{l()}catch(c){ln(i,a,c)}}var n0=!1;function HE(i,a){if(Dd=Wl,i=Ng(),wd(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var p=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var A=0,z=-1,X=-1,de=0,Re=0,Le=i,we=null;t:for(;;){for(var $e;Le!==l||p!==0&&Le.nodeType!==3||(z=A+p),Le!==_||c!==0&&Le.nodeType!==3||(X=A+c),Le.nodeType===3&&(A+=Le.nodeValue.length),($e=Le.firstChild)!==null;)we=Le,Le=$e;for(;;){if(Le===i)break t;if(we===l&&++de===p&&(z=A),we===_&&++Re===c&&(X=A),($e=Le.nextSibling)!==null)break;Le=we,we=Le.parentNode}Le=$e}l=z===-1||X===-1?null:{start:z,end:X}}else l=null}l=l||{start:0,end:0}}else l=null;for(Nd={focusedElem:i,selectionRange:l},Wl=!1,je=a;je!==null;)if(a=je,i=a.child,(a.subtreeFlags&1028)!==0&&i!==null)i.return=a,je=i;else for(;je!==null;){a=je;try{var et=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(et!==null){var tt=et.memoizedProps,fn=et.memoizedState,se=a.stateNode,Z=se.getSnapshotBeforeUpdate(a.elementType===a.type?tt:Hi(a.type,tt),fn);se.__reactInternalSnapshotBeforeUpdate=Z}break;case 3:var le=a.stateNode.containerInfo;le.nodeType===1?le.textContent="":le.nodeType===9&&le.documentElement&&le.removeChild(le.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ue){ln(a,a.return,Ue)}if(i=a.sibling,i!==null){i.return=a.return,je=i;break}je=a.return}return et=n0,n0=!1,et}function Xo(i,a,l){var c=a.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&Mf(a,l,_)}p=p.next}while(p!==c)}}function wu(i,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&i)===i){var c=l.create;l.destroy=c()}l=l.next}while(l!==a)}}function Ef(i){var a=i.ref;if(a!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof a=="function"?a(i):a.current=i}}function i0(i){var a=i.alternate;a!==null&&(i.alternate=null,i0(a)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(a=i.stateNode,a!==null&&(delete a[sr],delete a[Oo],delete a[kd],delete a[EE],delete a[bE])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function r0(i){return i.tag===5||i.tag===3||i.tag===4}function a0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||r0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function bf(i,a,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,a?l.nodeType===8?l.parentNode.insertBefore(i,a):l.insertBefore(i,a):(l.nodeType===8?(a=l.parentNode,a.insertBefore(i,l)):(a=l,a.appendChild(i)),l=l._reactRootContainer,l!=null||a.onclick!==null||(a.onclick=nu));else if(c!==4&&(i=i.child,i!==null))for(bf(i,a,l),i=i.sibling;i!==null;)bf(i,a,l),i=i.sibling}function wf(i,a,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,a?l.insertBefore(i,a):l.appendChild(i);else if(c!==4&&(i=i.child,i!==null))for(wf(i,a,l),i=i.sibling;i!==null;)wf(i,a,l),i=i.sibling}var Rn=null,Gi=!1;function fa(i,a,l){for(l=l.child;l!==null;)s0(i,a,l),l=l.sibling}function s0(i,a,l){if(oe&&typeof oe.onCommitFiberUnmount=="function")try{oe.onCommitFiberUnmount($,l)}catch{}switch(l.tag){case 5:On||ks(l,a);case 6:var c=Rn,p=Gi;Rn=null,fa(i,a,l),Rn=c,Gi=p,Rn!==null&&(Gi?(i=Rn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Rn.removeChild(l.stateNode));break;case 18:Rn!==null&&(Gi?(i=Rn,l=l.stateNode,i.nodeType===8?Fd(i.parentNode,l):i.nodeType===1&&Fd(i,l),bo(i)):Fd(Rn,l.stateNode));break;case 4:c=Rn,p=Gi,Rn=l.stateNode.containerInfo,Gi=!0,fa(i,a,l),Rn=c,Gi=p;break;case 0:case 11:case 14:case 15:if(!On&&(c=l.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var _=p,A=_.destroy;_=_.tag,A!==void 0&&((_&2)!==0||(_&4)!==0)&&Mf(l,a,A),p=p.next}while(p!==c)}fa(i,a,l);break;case 1:if(!On&&(ks(l,a),c=l.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=l.memoizedProps,c.state=l.memoizedState,c.componentWillUnmount()}catch(z){ln(l,a,z)}fa(i,a,l);break;case 21:fa(i,a,l);break;case 22:l.mode&1?(On=(c=On)||l.memoizedState!==null,fa(i,a,l),On=c):fa(i,a,l);break;default:fa(i,a,l)}}function o0(i){var a=i.updateQueue;if(a!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new zE),a.forEach(function(c){var p=ZE.bind(null,i,c);l.has(c)||(l.add(c),c.then(p,p))})}}function Vi(i,a){var l=a.deletions;if(l!==null)for(var c=0;c<l.length;c++){var p=l[c];try{var _=i,A=a,z=A;e:for(;z!==null;){switch(z.tag){case 5:Rn=z.stateNode,Gi=!1;break e;case 3:Rn=z.stateNode.containerInfo,Gi=!0;break e;case 4:Rn=z.stateNode.containerInfo,Gi=!0;break e}z=z.return}if(Rn===null)throw Error(t(160));s0(_,A,p),Rn=null,Gi=!1;var X=p.alternate;X!==null&&(X.return=null),p.return=null}catch(de){ln(p,a,de)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)l0(a,i),a=a.sibling}function l0(i,a){var l=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Vi(a,i),ur(i),c&4){try{Xo(3,i,i.return),wu(3,i)}catch(tt){ln(i,i.return,tt)}try{Xo(5,i,i.return)}catch(tt){ln(i,i.return,tt)}}break;case 1:Vi(a,i),ur(i),c&512&&l!==null&&ks(l,l.return);break;case 5:if(Vi(a,i),ur(i),c&512&&l!==null&&ks(l,l.return),i.flags&32){var p=i.stateNode;try{he(p,"")}catch(tt){ln(i,i.return,tt)}}if(c&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,A=l!==null?l.memoizedProps:_,z=i.type,X=i.updateQueue;if(i.updateQueue=null,X!==null)try{z==="input"&&_.type==="radio"&&_.name!=null&&Ft(p,_),be(z,A);var de=be(z,_);for(A=0;A<X.length;A+=2){var Re=X[A],Le=X[A+1];Re==="style"?W(p,Le):Re==="dangerouslySetInnerHTML"?Pe(p,Le):Re==="children"?he(p,Le):N(p,Re,Le,de)}switch(z){case"input":en(p,_);break;case"textarea":K(p,_);break;case"select":var we=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var $e=_.value;$e!=null?Zt(p,!!_.multiple,$e,!1):we!==!!_.multiple&&(_.defaultValue!=null?Zt(p,!!_.multiple,_.defaultValue,!0):Zt(p,!!_.multiple,_.multiple?[]:"",!1))}p[Oo]=_}catch(tt){ln(i,i.return,tt)}}break;case 6:if(Vi(a,i),ur(i),c&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(tt){ln(i,i.return,tt)}}break;case 3:if(Vi(a,i),ur(i),c&4&&l!==null&&l.memoizedState.isDehydrated)try{bo(a.containerInfo)}catch(tt){ln(i,i.return,tt)}break;case 4:Vi(a,i),ur(i);break;case 13:Vi(a,i),ur(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Af=zt())),c&4&&o0(i);break;case 22:if(Re=l!==null&&l.memoizedState!==null,i.mode&1?(On=(de=On)||Re,Vi(a,i),On=de):Vi(a,i),ur(i),c&8192){if(de=i.memoizedState!==null,(i.stateNode.isHidden=de)&&!Re&&(i.mode&1)!==0)for(je=i,Re=i.child;Re!==null;){for(Le=je=Re;je!==null;){switch(we=je,$e=we.child,we.tag){case 0:case 11:case 14:case 15:Xo(4,we,we.return);break;case 1:ks(we,we.return);var et=we.stateNode;if(typeof et.componentWillUnmount=="function"){c=we,l=we.return;try{a=c,et.props=a.memoizedProps,et.state=a.memoizedState,et.componentWillUnmount()}catch(tt){ln(c,l,tt)}}break;case 5:ks(we,we.return);break;case 22:if(we.memoizedState!==null){d0(Le);continue}}$e!==null?($e.return=we,je=$e):d0(Le)}Re=Re.sibling}e:for(Re=null,Le=i;;){if(Le.tag===5){if(Re===null){Re=Le;try{p=Le.stateNode,de?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(z=Le.stateNode,X=Le.memoizedProps.style,A=X!=null&&X.hasOwnProperty("display")?X.display:null,z.style.display=T("display",A))}catch(tt){ln(i,i.return,tt)}}}else if(Le.tag===6){if(Re===null)try{Le.stateNode.nodeValue=de?"":Le.memoizedProps}catch(tt){ln(i,i.return,tt)}}else if((Le.tag!==22&&Le.tag!==23||Le.memoizedState===null||Le===i)&&Le.child!==null){Le.child.return=Le,Le=Le.child;continue}if(Le===i)break e;for(;Le.sibling===null;){if(Le.return===null||Le.return===i)break e;Re===Le&&(Re=null),Le=Le.return}Re===Le&&(Re=null),Le.sibling.return=Le.return,Le=Le.sibling}}break;case 19:Vi(a,i),ur(i),c&4&&o0(i);break;case 21:break;default:Vi(a,i),ur(i)}}function ur(i){var a=i.flags;if(a&2){try{e:{for(var l=i.return;l!==null;){if(r0(l)){var c=l;break e}l=l.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(he(p,""),c.flags&=-33);var _=a0(i);wf(i,_,p);break;case 3:case 4:var A=c.stateNode.containerInfo,z=a0(i);bf(i,z,A);break;default:throw Error(t(161))}}catch(X){ln(i,i.return,X)}i.flags&=-3}a&4096&&(i.flags&=-4097)}function GE(i,a,l){je=i,u0(i)}function u0(i,a,l){for(var c=(i.mode&1)!==0;je!==null;){var p=je,_=p.child;if(p.tag===22&&c){var A=p.memoizedState!==null||bu;if(!A){var z=p.alternate,X=z!==null&&z.memoizedState!==null||On;z=bu;var de=On;if(bu=A,(On=X)&&!de)for(je=p;je!==null;)A=je,X=A.child,A.tag===22&&A.memoizedState!==null?f0(p):X!==null?(X.return=A,je=X):f0(p);for(;_!==null;)je=_,u0(_),_=_.sibling;je=p,bu=z,On=de}c0(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,je=_):c0(i)}}function c0(i){for(;je!==null;){var a=je;if((a.flags&8772)!==0){var l=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:On||wu(5,a);break;case 1:var c=a.stateNode;if(a.flags&4&&!On)if(l===null)c.componentDidMount();else{var p=a.elementType===a.type?l.memoizedProps:Hi(a.type,l.memoizedProps);c.componentDidUpdate(p,l.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var _=a.updateQueue;_!==null&&dv(a,_,c);break;case 3:var A=a.updateQueue;if(A!==null){if(l=null,a.child!==null)switch(a.child.tag){case 5:l=a.child.stateNode;break;case 1:l=a.child.stateNode}dv(a,A,l)}break;case 5:var z=a.stateNode;if(l===null&&a.flags&4){l=z;var X=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":X.autoFocus&&l.focus();break;case"img":X.src&&(l.src=X.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var de=a.alternate;if(de!==null){var Re=de.memoizedState;if(Re!==null){var Le=Re.dehydrated;Le!==null&&bo(Le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}On||a.flags&512&&Ef(a)}catch(we){ln(a,a.return,we)}}if(a===i){je=null;break}if(l=a.sibling,l!==null){l.return=a.return,je=l;break}je=a.return}}function d0(i){for(;je!==null;){var a=je;if(a===i){je=null;break}var l=a.sibling;if(l!==null){l.return=a.return,je=l;break}je=a.return}}function f0(i){for(;je!==null;){var a=je;try{switch(a.tag){case 0:case 11:case 15:var l=a.return;try{wu(4,a)}catch(X){ln(a,l,X)}break;case 1:var c=a.stateNode;if(typeof c.componentDidMount=="function"){var p=a.return;try{c.componentDidMount()}catch(X){ln(a,p,X)}}var _=a.return;try{Ef(a)}catch(X){ln(a,_,X)}break;case 5:var A=a.return;try{Ef(a)}catch(X){ln(a,A,X)}}}catch(X){ln(a,a.return,X)}if(a===i){je=null;break}var z=a.sibling;if(z!==null){z.return=a.return,je=z;break}je=a.return}}var VE=Math.ceil,Tu=L.ReactCurrentDispatcher,Tf=L.ReactCurrentOwner,Ri=L.ReactCurrentBatchConfig,Pt=0,bn=null,gn=null,An=0,di=0,Bs=oa(0),Sn=0,qo=null,Ja=0,Ru=0,Rf=0,Yo=null,Zn=null,Af=0,zs=1/0,Or=null,Au=!1,Cf=null,ha=null,Cu=!1,pa=null,Pu=0,Ko=0,Pf=null,Lu=-1,Iu=0;function Gn(){return(Pt&6)!==0?zt():Lu!==-1?Lu:Lu=zt()}function ma(i){return(i.mode&1)===0?1:(Pt&2)!==0&&An!==0?An&-An:TE.transition!==null?(Iu===0&&(Iu=It()),Iu):(i=Qe,i!==0||(i=window.event,i=i===void 0?16:pg(i.type)),i)}function Wi(i,a,l,c){if(50<Ko)throw Ko=0,Pf=null,Error(t(185));Xt(i,l,c),((Pt&2)===0||i!==bn)&&(i===bn&&((Pt&2)===0&&(Ru|=l),Sn===4&&ga(i,An)),jn(i,c),l===1&&Pt===0&&(a.mode&1)===0&&(zs=zt()+500,su&&ua()))}function jn(i,a){var l=i.callbackNode;vt(i,a);var c=mt(i,i===bn?An:0);if(c===0)l!==null&&zn(l),i.callbackNode=null,i.callbackPriority=0;else if(a=c&-c,i.callbackPriority!==a){if(l!=null&&zn(l),a===1)i.tag===0?wE(p0.bind(null,i)):Qg(p0.bind(null,i)),xE(function(){(Pt&6)===0&&ua()}),l=null;else{switch(si(c)){case 1:l=na;break;case 4:l=Ha;break;case 16:l=Rr;break;case 536870912:l=C;break;default:l=Rr}l=M0(l,h0.bind(null,i))}i.callbackPriority=a,i.callbackNode=l}}function h0(i,a){if(Lu=-1,Iu=0,(Pt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Hs()&&i.callbackNode!==l)return null;var c=mt(i,i===bn?An:0);if(c===0)return null;if((c&30)!==0||(c&i.expiredLanes)!==0||a)a=Du(i,c);else{a=c;var p=Pt;Pt|=2;var _=g0();(bn!==i||An!==a)&&(Or=null,zs=zt()+500,es(i,a));do try{XE();break}catch(z){m0(i,z)}while(!0);qd(),Tu.current=_,Pt=p,gn!==null?a=0:(bn=null,An=0,a=Sn)}if(a!==0){if(a===2&&(p=Bt(i),p!==0&&(c=p,a=Lf(i,p))),a===1)throw l=qo,es(i,0),ga(i,c),jn(i,zt()),l;if(a===6)ga(i,c);else{if(p=i.current.alternate,(c&30)===0&&!WE(p)&&(a=Du(i,c),a===2&&(_=Bt(i),_!==0&&(c=_,a=Lf(i,_))),a===1))throw l=qo,es(i,0),ga(i,c),jn(i,zt()),l;switch(i.finishedWork=p,i.finishedLanes=c,a){case 0:case 1:throw Error(t(345));case 2:ts(i,Zn,Or);break;case 3:if(ga(i,c),(c&130023424)===c&&(a=Af+500-zt(),10<a)){if(mt(i,0)!==0)break;if(p=i.suspendedLanes,(p&c)!==c){Gn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Ud(ts.bind(null,i,Zn,Or),a);break}ts(i,Zn,Or);break;case 4:if(ga(i,c),(c&4194240)===c)break;for(a=i.eventTimes,p=-1;0<c;){var A=31-ne(c);_=1<<A,A=a[A],A>p&&(p=A),c&=~_}if(c=p,c=zt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*VE(c/1960))-c,10<c){i.timeoutHandle=Ud(ts.bind(null,i,Zn,Or),c);break}ts(i,Zn,Or);break;case 5:ts(i,Zn,Or);break;default:throw Error(t(329))}}}return jn(i,zt()),i.callbackNode===l?h0.bind(null,i):null}function Lf(i,a){var l=Yo;return i.current.memoizedState.isDehydrated&&(es(i,a).flags|=256),i=Du(i,a),i!==2&&(a=Zn,Zn=l,a!==null&&If(a)),i}function If(i){Zn===null?Zn=i:Zn.push.apply(Zn,i)}function WE(i){for(var a=i;;){if(a.flags&16384){var l=a.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var c=0;c<l.length;c++){var p=l[c],_=p.getSnapshot;p=p.value;try{if(!Bi(_(),p))return!1}catch{return!1}}}if(l=a.child,a.subtreeFlags&16384&&l!==null)l.return=a,a=l;else{if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function ga(i,a){for(a&=~Rf,a&=~Ru,i.suspendedLanes|=a,i.pingedLanes&=~a,i=i.expirationTimes;0<a;){var l=31-ne(a),c=1<<l;i[l]=-1,a&=~c}}function p0(i){if((Pt&6)!==0)throw Error(t(327));Hs();var a=mt(i,0);if((a&1)===0)return jn(i,zt()),null;var l=Du(i,a);if(i.tag!==0&&l===2){var c=Bt(i);c!==0&&(a=c,l=Lf(i,c))}if(l===1)throw l=qo,es(i,0),ga(i,a),jn(i,zt()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=a,ts(i,Zn,Or),jn(i,zt()),null}function Df(i,a){var l=Pt;Pt|=1;try{return i(a)}finally{Pt=l,Pt===0&&(zs=zt()+500,su&&ua())}}function Qa(i){pa!==null&&pa.tag===0&&(Pt&6)===0&&Hs();var a=Pt;Pt|=1;var l=Ri.transition,c=Qe;try{if(Ri.transition=null,Qe=1,i)return i()}finally{Qe=c,Ri.transition=l,Pt=a,(Pt&6)===0&&ua()}}function Nf(){di=Bs.current,Yt(Bs)}function es(i,a){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,SE(l)),gn!==null)for(l=gn.return;l!==null;){var c=l;switch(Gd(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ru();break;case 3:Us(),Yt(qn),Yt(In),tf();break;case 5:Qd(c);break;case 4:Us();break;case 13:Yt(tn);break;case 19:Yt(tn);break;case 10:Yd(c.type._context);break;case 22:case 23:Nf()}l=l.return}if(bn=i,gn=i=va(i.current,null),An=di=a,Sn=0,qo=null,Rf=Ru=Ja=0,Zn=Yo=null,Ka!==null){for(a=0;a<Ka.length;a++)if(l=Ka[a],c=l.interleaved,c!==null){l.interleaved=null;var p=c.next,_=l.pending;if(_!==null){var A=_.next;_.next=p,c.next=A}l.pending=c}Ka=null}return i}function m0(i,a){do{var l=gn;try{if(qd(),gu.current=Su,vu){for(var c=nn.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}vu=!1}if(ja=0,En=yn=nn=null,Ho=!1,Go=0,Tf.current=null,l===null||l.return===null){Sn=1,qo=a,gn=null;break}e:{var _=i,A=l.return,z=l,X=a;if(a=An,z.flags|=32768,X!==null&&typeof X=="object"&&typeof X.then=="function"){var de=X,Re=z,Le=Re.tag;if((Re.mode&1)===0&&(Le===0||Le===11||Le===15)){var we=Re.alternate;we?(Re.updateQueue=we.updateQueue,Re.memoizedState=we.memoizedState,Re.lanes=we.lanes):(Re.updateQueue=null,Re.memoizedState=null)}var $e=zv(A);if($e!==null){$e.flags&=-257,Hv($e,A,z,_,a),$e.mode&1&&Bv(_,de,a),a=$e,X=de;var et=a.updateQueue;if(et===null){var tt=new Set;tt.add(X),a.updateQueue=tt}else et.add(X);break e}else{if((a&1)===0){Bv(_,de,a),Of();break e}X=Error(t(426))}}else if(Jt&&z.mode&1){var fn=zv(A);if(fn!==null){(fn.flags&65536)===0&&(fn.flags|=256),Hv(fn,A,z,_,a),$d(Fs(X,z));break e}}_=X=Fs(X,z),Sn!==4&&(Sn=2),Yo===null?Yo=[_]:Yo.push(_),_=A;do{switch(_.tag){case 3:_.flags|=65536,a&=-a,_.lanes|=a;var se=Fv(_,X,a);cv(_,se);break e;case 1:z=X;var Z=_.type,le=_.stateNode;if((_.flags&128)===0&&(typeof Z.getDerivedStateFromError=="function"||le!==null&&typeof le.componentDidCatch=="function"&&(ha===null||!ha.has(le)))){_.flags|=65536,a&=-a,_.lanes|=a;var Ue=kv(_,z,a);cv(_,Ue);break e}}_=_.return}while(_!==null)}_0(l)}catch(it){a=it,gn===l&&l!==null&&(gn=l=l.return);continue}break}while(!0)}function g0(){var i=Tu.current;return Tu.current=Su,i===null?Su:i}function Of(){(Sn===0||Sn===3||Sn===2)&&(Sn=4),bn===null||(Ja&268435455)===0&&(Ru&268435455)===0||ga(bn,An)}function Du(i,a){var l=Pt;Pt|=2;var c=g0();(bn!==i||An!==a)&&(Or=null,es(i,a));do try{$E();break}catch(p){m0(i,p)}while(!0);if(qd(),Pt=l,Tu.current=c,gn!==null)throw Error(t(261));return bn=null,An=0,Sn}function $E(){for(;gn!==null;)v0(gn)}function XE(){for(;gn!==null&&!ar();)v0(gn)}function v0(i){var a=x0(i.alternate,i,di);i.memoizedProps=i.pendingProps,a===null?_0(i):gn=a,Tf.current=null}function _0(i){var a=i;do{var l=a.alternate;if(i=a.return,(a.flags&32768)===0){if(l=kE(l,a,di),l!==null){gn=l;return}}else{if(l=BE(l,a),l!==null){l.flags&=32767,gn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Sn=6,gn=null;return}}if(a=a.sibling,a!==null){gn=a;return}gn=a=i}while(a!==null);Sn===0&&(Sn=5)}function ts(i,a,l){var c=Qe,p=Ri.transition;try{Ri.transition=null,Qe=1,qE(i,a,l,c)}finally{Ri.transition=p,Qe=c}return null}function qE(i,a,l,c){do Hs();while(pa!==null);if((Pt&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(Ze(i,_),i===bn&&(gn=bn=null,An=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Cu||(Cu=!0,M0(Rr,function(){return Hs(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=Ri.transition,Ri.transition=null;var A=Qe;Qe=1;var z=Pt;Pt|=4,Tf.current=null,HE(i,l),l0(l,i),hE(Nd),Wl=!!Dd,Nd=Dd=null,i.current=l,GE(l),_s(),Pt=z,Qe=A,Ri.transition=_}else i.current=l;if(Cu&&(Cu=!1,pa=i,Pu=p),_=i.pendingLanes,_===0&&(ha=null),ae(l.stateNode),jn(i,zt()),a!==null)for(c=i.onRecoverableError,l=0;l<a.length;l++)p=a[l],c(p.value,{componentStack:p.stack,digest:p.digest});if(Au)throw Au=!1,i=Cf,Cf=null,i;return(Pu&1)!==0&&i.tag!==0&&Hs(),_=i.pendingLanes,(_&1)!==0?i===Pf?Ko++:(Ko=0,Pf=i):Ko=0,ua(),null}function Hs(){if(pa!==null){var i=si(Pu),a=Ri.transition,l=Qe;try{if(Ri.transition=null,Qe=16>i?16:i,pa===null)var c=!1;else{if(i=pa,pa=null,Pu=0,(Pt&6)!==0)throw Error(t(331));var p=Pt;for(Pt|=4,je=i.current;je!==null;){var _=je,A=_.child;if((je.flags&16)!==0){var z=_.deletions;if(z!==null){for(var X=0;X<z.length;X++){var de=z[X];for(je=de;je!==null;){var Re=je;switch(Re.tag){case 0:case 11:case 15:Xo(8,Re,_)}var Le=Re.child;if(Le!==null)Le.return=Re,je=Le;else for(;je!==null;){Re=je;var we=Re.sibling,$e=Re.return;if(i0(Re),Re===de){je=null;break}if(we!==null){we.return=$e,je=we;break}je=$e}}}var et=_.alternate;if(et!==null){var tt=et.child;if(tt!==null){et.child=null;do{var fn=tt.sibling;tt.sibling=null,tt=fn}while(tt!==null)}}je=_}}if((_.subtreeFlags&2064)!==0&&A!==null)A.return=_,je=A;else e:for(;je!==null;){if(_=je,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Xo(9,_,_.return)}var se=_.sibling;if(se!==null){se.return=_.return,je=se;break e}je=_.return}}var Z=i.current;for(je=Z;je!==null;){A=je;var le=A.child;if((A.subtreeFlags&2064)!==0&&le!==null)le.return=A,je=le;else e:for(A=Z;je!==null;){if(z=je,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:wu(9,z)}}catch(it){ln(z,z.return,it)}if(z===A){je=null;break e}var Ue=z.sibling;if(Ue!==null){Ue.return=z.return,je=Ue;break e}je=z.return}}if(Pt=p,ua(),oe&&typeof oe.onPostCommitFiberRoot=="function")try{oe.onPostCommitFiberRoot($,i)}catch{}c=!0}return c}finally{Qe=l,Ri.transition=a}}return!1}function y0(i,a,l){a=Fs(l,a),a=Fv(i,a,1),i=da(i,a,1),a=Gn(),i!==null&&(Xt(i,1,a),jn(i,a))}function ln(i,a,l){if(i.tag===3)y0(i,i,l);else for(;a!==null;){if(a.tag===3){y0(a,i,l);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ha===null||!ha.has(c))){i=Fs(l,i),i=kv(a,i,1),a=da(a,i,1),i=Gn(),a!==null&&(Xt(a,1,i),jn(a,i));break}}a=a.return}}function YE(i,a,l){var c=i.pingCache;c!==null&&c.delete(a),a=Gn(),i.pingedLanes|=i.suspendedLanes&l,bn===i&&(An&l)===l&&(Sn===4||Sn===3&&(An&130023424)===An&&500>zt()-Af?es(i,0):Rf|=l),jn(i,a)}function S0(i,a){a===0&&((i.mode&1)===0?a=1:(a=Ye,Ye<<=1,(Ye&130023424)===0&&(Ye=4194304)));var l=Gn();i=Ir(i,a),i!==null&&(Xt(i,a,l),jn(i,l))}function KE(i){var a=i.memoizedState,l=0;a!==null&&(l=a.retryLane),S0(i,l)}function ZE(i,a){var l=0;switch(i.tag){case 13:var c=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:c=i.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(a),S0(i,l)}var x0;x0=function(i,a,l){if(i!==null)if(i.memoizedProps!==a.pendingProps||qn.current)Kn=!0;else{if((i.lanes&l)===0&&(a.flags&128)===0)return Kn=!1,FE(i,a,l);Kn=(i.flags&131072)!==0}else Kn=!1,Jt&&(a.flags&1048576)!==0&&ev(a,lu,a.index);switch(a.lanes=0,a.tag){case 2:var c=a.type;Eu(i,a),i=a.pendingProps;var p=Cs(a,In.current);Os(a,l),p=af(null,a,c,i,p,l);var _=sf();return a.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Yn(c)?(_=!0,au(a)):_=!1,a.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,jd(a),p.updater=xu,a.stateNode=p,p._reactInternals=a,ff(a,c,i,l),a=gf(null,a,c,!0,_,l)):(a.tag=0,Jt&&_&&Hd(a),Hn(null,a,p,l),a=a.child),a;case 16:c=a.elementType;e:{switch(Eu(i,a),i=a.pendingProps,p=c._init,c=p(c._payload),a.type=c,p=a.tag=JE(c),i=Hi(c,i),p){case 0:a=mf(null,a,c,i,l);break e;case 1:a=qv(null,a,c,i,l);break e;case 11:a=Gv(null,a,c,i,l);break e;case 14:a=Vv(null,a,c,Hi(c.type,i),l);break e}throw Error(t(306,c,""))}return a;case 0:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:Hi(c,p),mf(i,a,c,p,l);case 1:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:Hi(c,p),qv(i,a,c,p,l);case 3:e:{if(Yv(a),i===null)throw Error(t(387));c=a.pendingProps,_=a.memoizedState,p=_.element,uv(i,a),pu(a,c,null,l);var A=a.memoizedState;if(c=A.element,_.isDehydrated)if(_={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},a.updateQueue.baseState=_,a.memoizedState=_,a.flags&256){p=Fs(Error(t(423)),a),a=Kv(i,a,c,l,p);break e}else if(c!==p){p=Fs(Error(t(424)),a),a=Kv(i,a,c,l,p);break e}else for(ci=sa(a.stateNode.containerInfo.firstChild),ui=a,Jt=!0,zi=null,l=ov(a,null,c,l),a.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Is(),c===p){a=Nr(i,a,l);break e}Hn(i,a,c,l)}a=a.child}return a;case 5:return fv(a),i===null&&Wd(a),c=a.type,p=a.pendingProps,_=i!==null?i.memoizedProps:null,A=p.children,Od(c,p)?A=null:_!==null&&Od(c,_)&&(a.flags|=32),Xv(i,a),Hn(i,a,A,l),a.child;case 6:return i===null&&Wd(a),null;case 13:return Zv(i,a,l);case 4:return Jd(a,a.stateNode.containerInfo),c=a.pendingProps,i===null?a.child=Ds(a,null,c,l):Hn(i,a,c,l),a.child;case 11:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:Hi(c,p),Gv(i,a,c,p,l);case 7:return Hn(i,a,a.pendingProps,l),a.child;case 8:return Hn(i,a,a.pendingProps.children,l),a.child;case 12:return Hn(i,a,a.pendingProps.children,l),a.child;case 10:e:{if(c=a.type._context,p=a.pendingProps,_=a.memoizedProps,A=p.value,Gt(du,c._currentValue),c._currentValue=A,_!==null)if(Bi(_.value,A)){if(_.children===p.children&&!qn.current){a=Nr(i,a,l);break e}}else for(_=a.child,_!==null&&(_.return=a);_!==null;){var z=_.dependencies;if(z!==null){A=_.child;for(var X=z.firstContext;X!==null;){if(X.context===c){if(_.tag===1){X=Dr(-1,l&-l),X.tag=2;var de=_.updateQueue;if(de!==null){de=de.shared;var Re=de.pending;Re===null?X.next=X:(X.next=Re.next,Re.next=X),de.pending=X}}_.lanes|=l,X=_.alternate,X!==null&&(X.lanes|=l),Kd(_.return,l,a),z.lanes|=l;break}X=X.next}}else if(_.tag===10)A=_.type===a.type?null:_.child;else if(_.tag===18){if(A=_.return,A===null)throw Error(t(341));A.lanes|=l,z=A.alternate,z!==null&&(z.lanes|=l),Kd(A,l,a),A=_.sibling}else A=_.child;if(A!==null)A.return=_;else for(A=_;A!==null;){if(A===a){A=null;break}if(_=A.sibling,_!==null){_.return=A.return,A=_;break}A=A.return}_=A}Hn(i,a,p.children,l),a=a.child}return a;case 9:return p=a.type,c=a.pendingProps.children,Os(a,l),p=wi(p),c=c(p),a.flags|=1,Hn(i,a,c,l),a.child;case 14:return c=a.type,p=Hi(c,a.pendingProps),p=Hi(c.type,p),Vv(i,a,c,p,l);case 15:return Wv(i,a,a.type,a.pendingProps,l);case 17:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:Hi(c,p),Eu(i,a),a.tag=1,Yn(c)?(i=!0,au(a)):i=!1,Os(a,l),Ov(a,c,p),ff(a,c,p,l),gf(null,a,c,!0,i,l);case 19:return Jv(i,a,l);case 22:return $v(i,a,l)}throw Error(t(156,a.tag))};function M0(i,a){return Ba(i,a)}function jE(i,a,l,c){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ai(i,a,l,c){return new jE(i,a,l,c)}function Uf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function JE(i){if(typeof i=="function")return Uf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===V)return 11;if(i===ie)return 14}return 2}function va(i,a){var l=i.alternate;return l===null?(l=Ai(i.tag,a,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=a,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,a=i.dependencies,l.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Nu(i,a,l,c,p,_){var A=2;if(c=i,typeof i=="function")Uf(i)&&(A=1);else if(typeof i=="string")A=5;else e:switch(i){case b:return ns(l.children,p,_,a);case P:A=8,p|=8;break;case G:return i=Ai(12,l,a,p|2),i.elementType=G,i.lanes=_,i;case q:return i=Ai(13,l,a,p),i.elementType=q,i.lanes=_,i;case k:return i=Ai(19,l,a,p),i.elementType=k,i.lanes=_,i;case ee:return Ou(l,p,_,a);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case O:A=10;break e;case B:A=9;break e;case V:A=11;break e;case ie:A=14;break e;case te:A=16,c=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return a=Ai(A,l,a,p),a.elementType=i,a.type=c,a.lanes=_,a}function ns(i,a,l,c){return i=Ai(7,i,c,a),i.lanes=l,i}function Ou(i,a,l,c){return i=Ai(22,i,c,a),i.elementType=ee,i.lanes=l,i.stateNode={isHidden:!1},i}function Ff(i,a,l){return i=Ai(6,i,null,a),i.lanes=l,i}function kf(i,a,l){return a=Ai(4,i.children!==null?i.children:[],i.key,a),a.lanes=l,a.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},a}function QE(i,a,l,c,p){this.tag=a,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=At(0),this.expirationTimes=At(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Bf(i,a,l,c,p,_,A,z,X){return i=new QE(i,a,l,z,X),a===1?(a=1,_===!0&&(a|=8)):a=0,_=Ai(3,null,null,a),i.current=_,_.stateNode=i,_.memoizedState={element:c,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},jd(_),i}function eb(i,a,l){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:i,containerInfo:a,implementation:l}}function E0(i){if(!i)return la;i=i._reactInternals;e:{if(Mi(i)!==i||i.tag!==1)throw Error(t(170));var a=i;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Yn(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Yn(l))return jg(i,l,a)}return a}function b0(i,a,l,c,p,_,A,z,X){return i=Bf(l,c,!0,i,p,_,A,z,X),i.context=E0(null),l=i.current,c=Gn(),p=ma(l),_=Dr(c,p),_.callback=a??null,da(l,_,p),i.current.lanes=p,Xt(i,p,c),jn(i,c),i}function Uu(i,a,l,c){var p=a.current,_=Gn(),A=ma(p);return l=E0(l),a.context===null?a.context=l:a.pendingContext=l,a=Dr(_,A),a.payload={element:i},c=c===void 0?null:c,c!==null&&(a.callback=c),i=da(p,a,A),i!==null&&(Wi(i,p,A,_),hu(i,p,A)),A}function Fu(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function w0(i,a){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<a?l:a}}function zf(i,a){w0(i,a),(i=i.alternate)&&w0(i,a)}function tb(){return null}var T0=typeof reportError=="function"?reportError:function(i){console.error(i)};function Hf(i){this._internalRoot=i}ku.prototype.render=Hf.prototype.render=function(i){var a=this._internalRoot;if(a===null)throw Error(t(409));Uu(i,a,null,null)},ku.prototype.unmount=Hf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var a=i.containerInfo;Qa(function(){Uu(null,i,null,null)}),a[Ar]=null}};function ku(i){this._internalRoot=i}ku.prototype.unstable_scheduleHydration=function(i){if(i){var a=oi();i={blockedOn:null,target:i,priority:a};for(var l=0;l<ki.length&&a!==0&&a<ki[l].priority;l++);ki.splice(l,0,i),l===0&&xo(i)}};function Gf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Bu(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function R0(){}function nb(i,a,l,c,p){if(p){if(typeof c=="function"){var _=c;c=function(){var de=Fu(A);_.call(de)}}var A=b0(a,c,i,0,null,!1,!1,"",R0);return i._reactRootContainer=A,i[Ar]=A.current,Do(i.nodeType===8?i.parentNode:i),Qa(),A}for(;p=i.lastChild;)i.removeChild(p);if(typeof c=="function"){var z=c;c=function(){var de=Fu(X);z.call(de)}}var X=Bf(i,0,!1,null,null,!1,!1,"",R0);return i._reactRootContainer=X,i[Ar]=X.current,Do(i.nodeType===8?i.parentNode:i),Qa(function(){Uu(a,X,l,c)}),X}function zu(i,a,l,c,p){var _=l._reactRootContainer;if(_){var A=_;if(typeof p=="function"){var z=p;p=function(){var X=Fu(A);z.call(X)}}Uu(a,A,i,p)}else A=nb(l,a,i,p,c);return Fu(A)}on=function(i){switch(i.tag){case 3:var a=i.stateNode;if(a.current.memoizedState.isDehydrated){var l=rt(a.pendingLanes);l!==0&&(sn(a,l|1),jn(a,zt()),(Pt&6)===0&&(zs=zt()+500,ua()))}break;case 13:Qa(function(){var c=Ir(i,1);if(c!==null){var p=Gn();Wi(c,i,1,p)}}),zf(i,1)}},Ui=function(i){if(i.tag===13){var a=Ir(i,134217728);if(a!==null){var l=Gn();Wi(a,i,134217728,l)}zf(i,134217728)}},Xn=function(i){if(i.tag===13){var a=ma(i),l=Ir(i,a);if(l!==null){var c=Gn();Wi(l,i,a,c)}zf(i,a)}},oi=function(){return Qe},St=function(i,a){var l=Qe;try{return Qe=i,a()}finally{Qe=l}},_e=function(i,a,l){switch(a){case"input":if(en(i,l),a=l.name,l.type==="radio"&&a!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<l.length;a++){var c=l[a];if(c!==i&&c.form===i.form){var p=iu(c);if(!p)throw Error(t(90));gt(c),en(c,p)}}}break;case"textarea":K(i,l);break;case"select":a=l.value,a!=null&&Zt(i,!!l.multiple,a,!1)}},De=Df,Oe=Qa;var ib={usingClientEntryPoint:!1,Events:[Uo,Rs,iu,me,Fe,Df]},Zo={findFiberByHostInstance:$a,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rb={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=ta(i),i===null?null:i.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||tb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hu.isDisabled&&Hu.supportsFiber)try{$=Hu.inject(rb),oe=Hu}catch{}}return Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ib,Jn.createPortal=function(i,a){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gf(a))throw Error(t(200));return eb(i,a,null,l)},Jn.createRoot=function(i,a){if(!Gf(i))throw Error(t(299));var l=!1,c="",p=T0;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onRecoverableError!==void 0&&(p=a.onRecoverableError)),a=Bf(i,1,!1,null,null,l,!1,c,p),i[Ar]=a.current,Do(i.nodeType===8?i.parentNode:i),new Hf(a)},Jn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var a=i._reactInternals;if(a===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=ta(a),i=i===null?null:i.stateNode,i},Jn.flushSync=function(i){return Qa(i)},Jn.hydrate=function(i,a,l){if(!Bu(a))throw Error(t(200));return zu(null,i,a,!0,l)},Jn.hydrateRoot=function(i,a,l){if(!Gf(i))throw Error(t(405));var c=l!=null&&l.hydratedSources||null,p=!1,_="",A=T0;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),a=b0(a,null,i,1,l??null,p,!1,_,A),i[Ar]=a.current,Do(i),c)for(i=0;i<c.length;i++)l=c[i],p=l._getVersion,p=p(l._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[l,p]:a.mutableSourceEagerHydrationData.push(l,p);return new ku(a)},Jn.render=function(i,a,l){if(!Bu(a))throw Error(t(200));return zu(null,i,a,!1,l)},Jn.unmountComponentAtNode=function(i){if(!Bu(i))throw Error(t(40));return i._reactRootContainer?(Qa(function(){zu(null,null,i,!1,function(){i._reactRootContainer=null,i[Ar]=null})}),!0):!1},Jn.unstable_batchedUpdates=Df,Jn.unstable_renderSubtreeIntoContainer=function(i,a,l,c){if(!Bu(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return zu(i,a,l,!1,c)},Jn.version="18.3.1-next-f1338f8080-20240426",Jn}var N0;function sS(){if(N0)return Wf.exports;N0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Wf.exports=db(),Wf.exports}var O0;function fb(){if(O0)return Gu;O0=1;var n=sS();return Gu.createRoot=n.createRoot,Gu.hydrateRoot=n.hydrateRoot,Gu}var hb=fb(),pb=sS();function bl(n){"@babel/helpers - typeof";return bl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bl(n)}function mb(n,e){if(bl(n)!="object"||!n)return n;var t;if(typeof Symbol<"u"&&(t=n[Symbol.toPrimitive])!==void 0){var r=t.call(n,e);if(bl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function gb(n){var e=mb(n,"string");return bl(e)=="symbol"?e:e+""}function vb(n,e,t){return(e=gb(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function U0(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,r)}return t}function Di(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?U0(Object(t),!0).forEach(function(r){vb(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):U0(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function zc(){return zc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},zc.apply(null,arguments)}function ms(n,e){if(n==null)return{};var t={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.indexOf(r)!==-1)continue;t[r]=n[r]}return t}var _b=n=>n.disabled||Array.isArray(n.accessibilityStates)&&n.accessibilityStates.indexOf("disabled")>-1,yb={adjustable:"slider",button:"button",header:"heading",image:"img",imagebutton:null,keyboardkey:null,label:null,link:"link",none:"presentation",search:"search",summary:"region",text:null},oS=n=>{var e=n.accessibilityRole,t=n.role,r=t||e;if(r){var s=yb[r];if(s!==null)return s||r}},Sb={article:"article",banner:"header",blockquote:"blockquote",button:"button",code:"code",complementary:"aside",contentinfo:"footer",deletion:"del",emphasis:"em",figure:"figure",insertion:"ins",form:"form",list:"ul",listitem:"li",main:"main",navigation:"nav",paragraph:"p",region:"section",strong:"strong"},xb={},Mb=function(e){e===void 0&&(e=xb);var t=e.role||e.accessibilityRole;if(t==="label")return"label";var r=oS(e);if(r){if(r==="heading"){var s=e.accessibilityLevel||e["aria-level"];return s!=null?"h"+s:"h1"}return Sb[r]}},lS={isDisabled:_b,propsToAccessibilityComponent:Mb,propsToAriaRole:oS},Ac={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexOrder:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,gridRow:!0,gridRowEnd:!0,gridRowGap:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnGap:!0,gridColumnStart:!0,lineClamp:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0,scale:!0,scaleX:!0,scaleY:!0,scaleZ:!0,shadowOpacity:!0},Eb=["ms","Moz","O","Webkit"],bb=(n,e)=>n+e.charAt(0).toUpperCase()+e.substring(1);Object.keys(Ac).forEach(n=>{Eb.forEach(e=>{Ac[bb(e,n)]=Ac[n]})});var wb=n=>n==="currentcolor"||n==="currentColor"||n==="inherit"||n.indexOf("var(")===0,qf,F0;function Tb(){if(F0)return qf;F0=1;function n(y){if(typeof y=="number")return y>>>0===y&&y>=0&&y<=4294967295?y:null;if(typeof y!="string")return null;const S=g();let w;if(w=S.hex6.exec(y))return parseInt(w[1]+"ff",16)>>>0;const N=R(y);return N??((w=S.rgb.exec(y))?(m(w[1])<<24|m(w[2])<<16|m(w[3])<<8|255)>>>0:(w=S.rgba.exec(y))?w[6]!==void 0?(m(w[6])<<24|m(w[7])<<16|m(w[8])<<8|x(w[9]))>>>0:(m(w[2])<<24|m(w[3])<<16|m(w[4])<<8|x(w[5]))>>>0:(w=S.hex3.exec(y))?parseInt(w[1]+w[1]+w[2]+w[2]+w[3]+w[3]+"ff",16)>>>0:(w=S.hex8.exec(y))?parseInt(w[1],16)>>>0:(w=S.hex4.exec(y))?parseInt(w[1]+w[1]+w[2]+w[2]+w[3]+w[3]+w[4]+w[4],16)>>>0:(w=S.hsl.exec(y))?(t(v(w[1]),M(w[2]),M(w[3]))|255)>>>0:(w=S.hsla.exec(y))?w[6]!==void 0?(t(v(w[6]),M(w[7]),M(w[8]))|x(w[9]))>>>0:(t(v(w[2]),M(w[3]),M(w[4]))|x(w[5]))>>>0:(w=S.hwb.exec(y))?(r(v(w[1]),M(w[2]),M(w[3]))|255)>>>0:null)}function e(y,S,w){return w<0&&(w+=1),w>1&&(w-=1),w<1/6?y+(S-y)*6*w:w<1/2?S:w<2/3?y+(S-y)*(2/3-w)*6:y}function t(y,S,w){const N=w<.5?w*(1+S):w+S-w*S,L=2*w-N,U=e(L,N,y+1/3),D=e(L,N,y),b=e(L,N,y-1/3);return Math.round(U*255)<<24|Math.round(D*255)<<16|Math.round(b*255)<<8}function r(y,S,w){if(S+w>=1){const D=Math.round(S*255/(S+w));return D<<24|D<<16|D<<8}const N=e(0,1,y+1/3)*(1-S-w)+S,L=e(0,1,y)*(1-S-w)+S,U=e(0,1,y-1/3)*(1-S-w)+S;return Math.round(N*255)<<24|Math.round(L*255)<<16|Math.round(U*255)<<8}const s="[-+]?\\d*\\.?\\d+",o=s+"%";function u(...y){return"\\(\\s*("+y.join(")\\s*,?\\s*(")+")\\s*\\)"}function d(...y){return"\\(\\s*("+y.slice(0,y.length-1).join(")\\s*,?\\s*(")+")\\s*/\\s*("+y[y.length-1]+")\\s*\\)"}function f(...y){return"\\(\\s*("+y.join(")\\s*,\\s*(")+")\\s*\\)"}let h;function g(){return h===void 0&&(h={rgb:new RegExp("rgb"+u(s,s,s)),rgba:new RegExp("rgba("+f(s,s,s,s)+"|"+d(s,s,s,s)+")"),hsl:new RegExp("hsl"+u(s,o,o)),hsla:new RegExp("hsla("+f(s,o,o,s)+"|"+d(s,o,o,s)+")"),hwb:new RegExp("hwb"+u(s,o,o)),hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex4:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{6})$/,hex8:/^#([0-9a-fA-F]{8})$/}),h}function m(y){const S=parseInt(y,10);return S<0?0:S>255?255:S}function v(y){return(parseFloat(y)%360+360)%360/360}function x(y){const S=parseFloat(y);return S<0?0:S>1?255:Math.round(S*255)}function M(y){const S=parseFloat(y);return S<0?0:S>100?1:S/100}function R(y){switch(y){case"transparent":return 0;case"aliceblue":return 4042850303;case"antiquewhite":return 4209760255;case"aqua":return 16777215;case"aquamarine":return 2147472639;case"azure":return 4043309055;case"beige":return 4126530815;case"bisque":return 4293182719;case"black":return 255;case"blanchedalmond":return 4293643775;case"blue":return 65535;case"blueviolet":return 2318131967;case"brown":return 2771004159;case"burlywood":return 3736635391;case"burntsienna":return 3934150143;case"cadetblue":return 1604231423;case"chartreuse":return 2147418367;case"chocolate":return 3530104575;case"coral":return 4286533887;case"cornflowerblue":return 1687547391;case"cornsilk":return 4294499583;case"crimson":return 3692313855;case"cyan":return 16777215;case"darkblue":return 35839;case"darkcyan":return 9145343;case"darkgoldenrod":return 3095792639;case"darkgray":return 2846468607;case"darkgreen":return 6553855;case"darkgrey":return 2846468607;case"darkkhaki":return 3182914559;case"darkmagenta":return 2332068863;case"darkolivegreen":return 1433087999;case"darkorange":return 4287365375;case"darkorchid":return 2570243327;case"darkred":return 2332033279;case"darksalmon":return 3918953215;case"darkseagreen":return 2411499519;case"darkslateblue":return 1211993087;case"darkslategray":return 793726975;case"darkslategrey":return 793726975;case"darkturquoise":return 13554175;case"darkviolet":return 2483082239;case"deeppink":return 4279538687;case"deepskyblue":return 12582911;case"dimgray":return 1768516095;case"dimgrey":return 1768516095;case"dodgerblue":return 512819199;case"firebrick":return 2988581631;case"floralwhite":return 4294635775;case"forestgreen":return 579543807;case"fuchsia":return 4278255615;case"gainsboro":return 3705462015;case"ghostwhite":return 4177068031;case"gold":return 4292280575;case"goldenrod":return 3668254975;case"gray":return 2155905279;case"green":return 8388863;case"greenyellow":return 2919182335;case"grey":return 2155905279;case"honeydew":return 4043305215;case"hotpink":return 4285117695;case"indianred":return 3445382399;case"indigo":return 1258324735;case"ivory":return 4294963455;case"khaki":return 4041641215;case"lavender":return 3873897215;case"lavenderblush":return 4293981695;case"lawngreen":return 2096890111;case"lemonchiffon":return 4294626815;case"lightblue":return 2916673279;case"lightcoral":return 4034953471;case"lightcyan":return 3774873599;case"lightgoldenrodyellow":return 4210742015;case"lightgray":return 3553874943;case"lightgreen":return 2431553791;case"lightgrey":return 3553874943;case"lightpink":return 4290167295;case"lightsalmon":return 4288707327;case"lightseagreen":return 548580095;case"lightskyblue":return 2278488831;case"lightslategray":return 2005441023;case"lightslategrey":return 2005441023;case"lightsteelblue":return 2965692159;case"lightyellow":return 4294959359;case"lime":return 16711935;case"limegreen":return 852308735;case"linen":return 4210091775;case"magenta":return 4278255615;case"maroon":return 2147483903;case"mediumaquamarine":return 1724754687;case"mediumblue":return 52735;case"mediumorchid":return 3126187007;case"mediumpurple":return 2473647103;case"mediumseagreen":return 1018393087;case"mediumslateblue":return 2070474495;case"mediumspringgreen":return 16423679;case"mediumturquoise":return 1221709055;case"mediumvioletred":return 3340076543;case"midnightblue":return 421097727;case"mintcream":return 4127193855;case"mistyrose":return 4293190143;case"moccasin":return 4293178879;case"navajowhite":return 4292783615;case"navy":return 33023;case"oldlace":return 4260751103;case"olive":return 2155872511;case"olivedrab":return 1804477439;case"orange":return 4289003775;case"orangered":return 4282712319;case"orchid":return 3664828159;case"palegoldenrod":return 4008225535;case"palegreen":return 2566625535;case"paleturquoise":return 2951671551;case"palevioletred":return 3681588223;case"papayawhip":return 4293907967;case"peachpuff":return 4292524543;case"peru":return 3448061951;case"pink":return 4290825215;case"plum":return 3718307327;case"powderblue":return 2967529215;case"purple":return 2147516671;case"rebeccapurple":return 1714657791;case"red":return 4278190335;case"rosybrown":return 3163525119;case"royalblue":return 1097458175;case"saddlebrown":return 2336560127;case"salmon":return 4202722047;case"sandybrown":return 4104413439;case"seagreen":return 780883967;case"seashell":return 4294307583;case"sienna":return 2689740287;case"silver":return 3233857791;case"skyblue":return 2278484991;case"slateblue":return 1784335871;case"slategray":return 1887473919;case"slategrey":return 1887473919;case"snow":return 4294638335;case"springgreen":return 16744447;case"steelblue":return 1182971135;case"tan":return 3535047935;case"teal":return 8421631;case"thistle":return 3636451583;case"tomato":return 4284696575;case"turquoise":return 1088475391;case"violet":return 4001558271;case"wheat":return 4125012991;case"white":return 4294967295;case"whitesmoke":return 4126537215;case"yellow":return 4294902015;case"yellowgreen":return 2597139199}return null}return qf=n,qf}var Rb=Tb();const Ab=Si(Rb);var Cb=n=>{if(n==null)return n;var e=Ab(n);if(e!=null)return e=(e<<24|e>>>8)>>>0,e},uS=function(e,t){if(t===void 0&&(t=1),e!=null){if(typeof e=="string"&&wb(e))return e;var r=Cb(e);if(r!=null){var s=r>>16&255,o=r>>8&255,u=r&255,d=(r>>24&255)/255,f=(d*t).toFixed(2);return"rgba("+s+","+o+","+u+","+f+")"}}},Pb={backgroundColor:!0,borderColor:!0,borderTopColor:!0,borderRightColor:!0,borderBottomColor:!0,borderLeftColor:!0,color:!0,shadowColor:!0,textDecorationColor:!0,textShadowColor:!0};function _r(n,e){var t=n;return(e==null||!Ac[e])&&typeof n=="number"?t=n+"px":e!=null&&Pb[e]&&(t=uS(n)),t}var xi=!!(typeof window<"u"&&window.document&&window.document.createElement),Lb={},Ib=!xi||window.CSS!=null&&window.CSS.supports!=null&&(window.CSS.supports("text-decoration-line","none")||window.CSS.supports("-webkit-text-decoration-line","none")),Db="monospace,monospace",k0='-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',Nb={borderColor:["borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"],borderBlockColor:["borderTopColor","borderBottomColor"],borderInlineColor:["borderRightColor","borderLeftColor"],borderRadius:["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],borderStyle:["borderTopStyle","borderRightStyle","borderBottomStyle","borderLeftStyle"],borderBlockStyle:["borderTopStyle","borderBottomStyle"],borderInlineStyle:["borderRightStyle","borderLeftStyle"],borderWidth:["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"],borderBlockWidth:["borderTopWidth","borderBottomWidth"],borderInlineWidth:["borderRightWidth","borderLeftWidth"],insetBlock:["top","bottom"],insetInline:["left","right"],marginBlock:["marginTop","marginBottom"],marginInline:["marginRight","marginLeft"],paddingBlock:["paddingTop","paddingBottom"],paddingInline:["paddingRight","paddingLeft"],overflow:["overflowX","overflowY"],overscrollBehavior:["overscrollBehaviorX","overscrollBehaviorY"],borderBlockStartColor:["borderTopColor"],borderBlockStartStyle:["borderTopStyle"],borderBlockStartWidth:["borderTopWidth"],borderBlockEndColor:["borderBottomColor"],borderBlockEndStyle:["borderBottomStyle"],borderBlockEndWidth:["borderBottomWidth"],borderEndStartRadius:["borderBottomLeftRadius"],borderEndEndRadius:["borderBottomRightRadius"],borderStartStartRadius:["borderTopLeftRadius"],borderStartEndRadius:["borderTopRightRadius"],insetBlockEnd:["bottom"],insetBlockStart:["top"],marginBlockStart:["marginTop"],marginBlockEnd:["marginBottom"],paddingBlockStart:["paddingTop"],paddingBlockEnd:["paddingBottom"]},cS=(n,e)=>{if(!n)return Lb;var t={},r=function(){var d=n[s];if(d==null)return"continue";if(s==="backgroundClip")d==="text"&&(t.backgroundClip=d,t.WebkitBackgroundClip=d);else if(s==="flex")d===-1?(t.flexGrow=0,t.flexShrink=1,t.flexBasis="auto"):t.flex=d;else if(s==="font")t[s]=d.replace("System",k0);else if(s==="fontFamily")if(d.indexOf("System")>-1){var f=d.split(/,\s*/);f[f.indexOf("System")]=k0,t[s]=f.join(",")}else d==="monospace"?t[s]=Db:t[s]=d;else if(s==="textDecorationLine")Ib?t.textDecorationLine=d:t.textDecoration=d;else if(s==="writingDirection")t.direction=d;else{var h=_r(n[s],s),g=Nb[s];e&&s==="inset"?(n.insetInline==null&&(t.left=h,t.right=h),n.insetBlock==null&&(t.top=h,t.bottom=h)):e&&s==="margin"?(n.marginInline==null&&(t.marginLeft=h,t.marginRight=h),n.marginBlock==null&&(t.marginTop=h,t.marginBottom=h)):e&&s==="padding"?(n.paddingInline==null&&(t.paddingLeft=h,t.paddingRight=h),n.paddingBlock==null&&(t.paddingTop=h,t.paddingBottom=h)):g?g.forEach((m,v)=>{n[m]==null&&(t[m]=h)}):t[s]=h}};for(var s in n)var o=r();return t};function Ob(n,e){for(var t=n.length,r=e^t,s=0,o;t>=4;)o=n.charCodeAt(s)&255|(n.charCodeAt(++s)&255)<<8|(n.charCodeAt(++s)&255)<<16|(n.charCodeAt(++s)&255)<<24,o=(o&65535)*1540483477+(((o>>>16)*1540483477&65535)<<16),o^=o>>>24,o=(o&65535)*1540483477+(((o>>>16)*1540483477&65535)<<16),r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16)^o,t-=4,++s;switch(t){case 3:r^=(n.charCodeAt(s+2)&255)<<16;case 2:r^=(n.charCodeAt(s+1)&255)<<8;case 1:r^=n.charCodeAt(s)&255,r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16)}return r^=r>>>13,r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16),r^=r>>>15,r>>>0}var Ub=n=>Ob(n,1).toString(36),Fb=/[A-Z]/g,kb=/^ms-/,Yf={};function Bb(n){return"-"+n.toLowerCase()}function zb(n){if(n in Yf)return Yf[n];var e=n.replace(Fb,Bb);return Yf[n]=kb.test(e)?"-"+e:e}var Vu={},Wu={},$u={},B0;function dS(){if(B0)return $u;B0=1,Object.defineProperty($u,"__esModule",{value:!0}),$u.default=n;function n(e){return e.charAt(0).toUpperCase()+e.slice(1)}return $u}var z0;function Hb(){if(z0)return Wu;z0=1,Object.defineProperty(Wu,"__esModule",{value:!0}),Wu.default=r;var n=dS(),e=t(n);function t(s){return s&&s.__esModule?s:{default:s}}function r(s,o,u){var d=s[o];if(d&&u.hasOwnProperty(o))for(var f=(0,e.default)(o),h=0;h<d.length;++h){var g=d[h]+f;u[g]||(u[g]=u[o])}return u}return Wu}var Xu={},H0;function Gb(){if(H0)return Xu;H0=1,Object.defineProperty(Xu,"__esModule",{value:!0}),Xu.default=n;function n(e,t,r,s,o){for(var u=0,d=e.length;u<d;++u){var f=e[u](t,r,s,o);if(f)return f}}return Xu}var qu={},G0;function Vb(){if(G0)return qu;G0=1,Object.defineProperty(qu,"__esModule",{value:!0}),qu.default=e;function n(t,r){t.indexOf(r)===-1&&t.push(r)}function e(t,r){if(Array.isArray(r))for(var s=0,o=r.length;s<o;++s)n(t,r[s]);else n(t,r)}return qu}var Yu={},V0;function Wb(){if(V0)return Yu;V0=1,Object.defineProperty(Yu,"__esModule",{value:!0}),Yu.default=n;function n(e){return e instanceof Object&&!Array.isArray(e)}return Yu}var W0;function $b(){if(W0)return Vu;W0=1,Object.defineProperty(Vu,"__esModule",{value:!0}),Vu.default=h;var n=Hb(),e=f(n),t=Gb(),r=f(t),s=Vb(),o=f(s),u=Wb(),d=f(u);function f(g){return g&&g.__esModule?g:{default:g}}function h(g){var m=g.prefixMap,v=g.plugins;return function x(M){for(var R in M){var y=M[R];if((0,d.default)(y))M[R]=x(y);else if(Array.isArray(y)){for(var S=[],w=0,N=y.length;w<N;++w){var L=(0,r.default)(v,R,y[w],M,m);(0,o.default)(S,L||y[w])}S.length>0&&(M[R]=S)}else{var U=(0,r.default)(v,R,y,M,m);U&&(M[R]=U),M=(0,e.default)(m,R,M)}}return M}}return Vu}var Xb=$b();const qb=Si(Xb);var Ku={},$0;function Yb(){if($0)return Ku;$0=1,Object.defineProperty(Ku,"__esModule",{value:!0}),Ku.default=n;function n(){return null}return Ku}var Kb=Yb();const Zb=Si(Kb);var Zu={};function Cc(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Cc=function(t){return typeof t}:Cc=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cc(n)}function jb(n){return tw(n)||ew(n)||Qb(n)||Jb()}function Jb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qb(n,e){if(n){if(typeof n=="string")return ep(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(t);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ep(n,e)}}function ew(n){if(typeof Symbol<"u"&&Symbol.iterator in Object(n))return Array.from(n)}function tw(n){if(Array.isArray(n))return ep(n)}function ep(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function X0(n){return n.filter(function(e,t){return n.lastIndexOf(e)===t})}function fS(n){for(var e=0,t=arguments.length<=1?0:arguments.length-1;e<t;++e){var r=e+1<1||arguments.length<=e+1?void 0:arguments[e+1];for(var s in r){var o=r[s],u=n[s];if(u&&o){if(Array.isArray(u)){n[s]=X0(u.concat(o));continue}if(Array.isArray(o)){n[s]=X0([u].concat(jb(o)));continue}if(Cc(o)==="object"){n[s]=fS({},u,o);continue}}n[s]=o}}return n}var nw=/-([a-z])/g,iw=/^Ms/g,Kf={};function rw(n){return n[1].toUpperCase()}function hS(n){if(Kf.hasOwnProperty(n))return Kf[n];var e=n.replace(nw,rw).replace(iw,"ms");return Kf[n]=e,e}var aw=/[A-Z]/g,sw=/^ms-/,Zf={};function ow(n){return"-"+n.toLowerCase()}function pS(n){if(Zf.hasOwnProperty(n))return Zf[n];var e=n.replace(aw,ow);return Zf[n]=sw.test(e)?"-"+e:e}const lw=Object.freeze(Object.defineProperty({__proto__:null,default:pS},Symbol.toStringTag,{value:"Module"}));function rd(n){return pS(n)}function mS(n,e){return rd(n)+":"+e}function uw(n){var e="";for(var t in n){var r=n[t];typeof r!="string"&&typeof r!="number"||(e&&(e+=";"),e+=mS(t,r))}return e}var cw=/^(Webkit|Moz|O|ms)/;function dw(n){return cw.test(n)}var fw=/-webkit-|-moz-|-ms-/;function hw(n){return typeof n=="string"&&fw.test(n)}var wl={borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},q0=["animationIterationCount","boxFlex","boxFlexGroup","boxOrdinalGroup","columnCount","flex","flexGrow","flexPositive","flexShrink","flexNegative","flexOrder","gridColumn","gridColumnEnd","gridColumnStart","gridRow","gridRowEnd","gridRowStart","lineClamp","order"],Y0=["Webkit","ms","Moz","O"];function pw(n,e){return n+e.charAt(0).toUpperCase()+e.slice(1)}for(var jf=0,mw=q0.length;jf<mw;++jf){var K0=q0[jf];wl[K0]=!0;for(var Jf=0,gw=Y0.length;Jf<gw;++Jf)wl[pw(Y0[Jf],K0)]=!0}for(var vw in wl)wl[rd(vw)]=!0;function _w(n){return wl.hasOwnProperty(n)}var yw=/^(ms|Webkit|Moz|O)/;function gS(n){var e=n.replace(yw,"");return e.charAt(0).toLowerCase()+e.slice(1)}function Sw(n){return gS(hS(n))}function xw(n,e){return e.join(";"+rd(n)+":")}var Mw=/(-ms-|-webkit-|-moz-|-o-)/g;function Ew(n){return typeof n=="string"?n.replace(Mw,""):n}const bw=Object.freeze(Object.defineProperty({__proto__:null,assignStyle:fS,camelCaseProperty:hS,cssifyDeclaration:mS,cssifyObject:uw,hyphenateProperty:rd,isPrefixedProperty:dw,isPrefixedValue:hw,isUnitlessProperty:_w,normalizeProperty:Sw,resolveArrayValue:xw,unprefixProperty:gS,unprefixValue:Ew},Symbol.toStringTag,{value:"Module"})),vS=rS(bw);var Z0;function ww(){if(Z0)return Zu;Z0=1,Object.defineProperty(Zu,"__esModule",{value:!0}),Zu.default=r;var n=vS,e=/cross-fade\(/g,t=["-webkit-",""];function r(s,o){if(typeof o=="string"&&!(0,n.isPrefixedValue)(o)&&o.indexOf("cross-fade(")!==-1)return t.map(function(u){return o.replace(e,u+"cross-fade(")})}return Zu}var Tw=ww();const Rw=Si(Tw);var ju={},j0;function Aw(){if(j0)return ju;j0=1,Object.defineProperty(ju,"__esModule",{value:!0}),ju.default=t;var n=["-webkit-","-moz-",""],e={"zoom-in":!0,"zoom-out":!0,grab:!0,grabbing:!0};function t(r,s){if(r==="cursor"&&e.hasOwnProperty(s))return n.map(function(o){return o+s})}return ju}var Cw=Aw();const Pw=Si(Cw);var Ju={},J0;function Lw(){if(J0)return Ju;J0=1,Object.defineProperty(Ju,"__esModule",{value:!0}),Ju.default=r;var n=vS,e=/filter\(/g,t=["-webkit-",""];function r(s,o){if(typeof o=="string"&&!(0,n.isPrefixedValue)(o)&&o.indexOf("filter(")!==-1)return t.map(function(u){return o.replace(e,u+"filter(")})}return Ju}var Iw=Lw();const Dw=Si(Iw);var Qu={},Qf={},Q0;function _S(){return Q0||(Q0=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=t;var e=/-webkit-|-moz-|-ms-/;function t(r){return typeof r=="string"&&e.test(r)}})(Qf)),Qf}var e_;function Nw(){if(e_)return Qu;e_=1,Object.defineProperty(Qu,"__esModule",{value:!0}),Qu.default=s;var n=_S(),e=t(n);function t(o){return o&&o.__esModule?o:{default:o}}var r=["-webkit-",""];function s(o,u){if(typeof u=="string"&&!(0,e.default)(u)&&u.indexOf("image-set(")>-1)return r.map(function(d){return u.replace(/image-set\(/g,d+"image-set(")})}return Qu}var Ow=Nw();const Uw=Si(Ow);var ec={},t_;function Fw(){if(t_)return ec;t_=1,Object.defineProperty(ec,"__esModule",{value:!0}),ec.default=e;var n={marginBlockStart:["WebkitMarginBefore"],marginBlockEnd:["WebkitMarginAfter"],marginInlineStart:["WebkitMarginStart","MozMarginStart"],marginInlineEnd:["WebkitMarginEnd","MozMarginEnd"],paddingBlockStart:["WebkitPaddingBefore"],paddingBlockEnd:["WebkitPaddingAfter"],paddingInlineStart:["WebkitPaddingStart","MozPaddingStart"],paddingInlineEnd:["WebkitPaddingEnd","MozPaddingEnd"],borderBlockStart:["WebkitBorderBefore"],borderBlockStartColor:["WebkitBorderBeforeColor"],borderBlockStartStyle:["WebkitBorderBeforeStyle"],borderBlockStartWidth:["WebkitBorderBeforeWidth"],borderBlockEnd:["WebkitBorderAfter"],borderBlockEndColor:["WebkitBorderAfterColor"],borderBlockEndStyle:["WebkitBorderAfterStyle"],borderBlockEndWidth:["WebkitBorderAfterWidth"],borderInlineStart:["WebkitBorderStart","MozBorderStart"],borderInlineStartColor:["WebkitBorderStartColor","MozBorderStartColor"],borderInlineStartStyle:["WebkitBorderStartStyle","MozBorderStartStyle"],borderInlineStartWidth:["WebkitBorderStartWidth","MozBorderStartWidth"],borderInlineEnd:["WebkitBorderEnd","MozBorderEnd"],borderInlineEndColor:["WebkitBorderEndColor","MozBorderEndColor"],borderInlineEndStyle:["WebkitBorderEndStyle","MozBorderEndStyle"],borderInlineEndWidth:["WebkitBorderEndWidth","MozBorderEndWidth"]};function e(t,r,s){if(Object.prototype.hasOwnProperty.call(n,t))for(var o=n[t],u=0,d=o.length;u<d;++u)s[o[u]]=r}return ec}var kw=Fw();const Bw=Si(kw);var tc={},n_;function zw(){if(n_)return tc;n_=1,Object.defineProperty(tc,"__esModule",{value:!0}),tc.default=n;function n(e,t){if(e==="position"&&t==="sticky")return["-webkit-sticky","sticky"]}return tc}var Hw=zw();const Gw=Si(Hw);var nc={},i_;function Vw(){if(i_)return nc;i_=1,Object.defineProperty(nc,"__esModule",{value:!0}),nc.default=r;var n=["-webkit-","-moz-",""],e={maxHeight:!0,maxWidth:!0,width:!0,height:!0,columnWidth:!0,minWidth:!0,minHeight:!0},t={"min-content":!0,"max-content":!0,"fill-available":!0,"fit-content":!0,"contain-floats":!0};function r(s,o){if(e.hasOwnProperty(s)&&t.hasOwnProperty(o))return n.map(function(u){return u+o})}return nc}var Ww=Vw();const $w=Si(Ww);var ic={},eh={};const Xw=rS(lw);var r_;function qw(){return r_||(r_=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=s;var e=Xw,t=r(e);function r(o){return o&&o.__esModule?o:{default:o}}function s(o){return(0,t.default)(o)}})(eh)),eh}var a_;function Yw(){if(a_)return ic;a_=1,Object.defineProperty(ic,"__esModule",{value:!0}),ic.default=g;var n=qw(),e=u(n),t=_S(),r=u(t),s=dS(),o=u(s);function u(m){return m&&m.__esModule?m:{default:m}}var d={transition:!0,transitionProperty:!0,WebkitTransition:!0,WebkitTransitionProperty:!0,MozTransition:!0,MozTransitionProperty:!0},f={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-"};function h(m,v){if((0,r.default)(m))return m;for(var x=m.split(/,(?![^()]*(?:\([^()]*\))?\))/g),M=0,R=x.length;M<R;++M){var y=x[M],S=[y];for(var w in v){var N=(0,e.default)(w);if(y.indexOf(N)>-1&&N!=="order")for(var L=v[w],U=0,D=L.length;U<D;++U)S.unshift(y.replace(N,f[L[U]]+N))}x[M]=S.join(",")}return x.join(",")}function g(m,v,x,M){if(typeof v=="string"&&d.hasOwnProperty(m)){var R=h(v,M),y=R.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(w){return!/-moz-|-ms-/.test(w)}).join(",");if(m.indexOf("Webkit")>-1)return y;var S=R.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(w){return!/-webkit-|-ms-/.test(w)}).join(",");return m.indexOf("Moz")>-1?S:(x["Webkit"+(0,o.default)(m)]=y,x["Moz"+(0,o.default)(m)]=S,R)}}return ic}var Kw=Yw();const Zw=Si(Kw);var Ht=["Webkit"],jw=["Moz"],Jw=["Webkit","Moz"],un=["Webkit","ms"],Qw=["Webkit","Moz","ms"];const eT={plugins:[Zb,Rw,Pw,Dw,Uw,Bw,Gw,$w,Zw],prefixMap:{appearance:Qw,userSelect:Jw,textEmphasisPosition:un,textEmphasis:un,textEmphasisStyle:un,textEmphasisColor:un,boxDecorationBreak:un,clipPath:Ht,maskImage:un,maskMode:un,maskRepeat:un,maskPosition:un,maskClip:un,maskOrigin:un,maskSize:un,maskComposite:un,mask:un,maskBorderSource:un,maskBorderMode:un,maskBorderSlice:un,maskBorderWidth:un,maskBorderOutset:un,maskBorderRepeat:un,maskBorder:un,maskType:un,textDecorationStyle:Ht,textDecorationSkip:Ht,textDecorationLine:Ht,textDecorationColor:Ht,filter:Ht,breakAfter:Ht,breakBefore:Ht,breakInside:Ht,columnCount:Ht,columnFill:Ht,columnGap:Ht,columnRule:Ht,columnRuleColor:Ht,columnRuleStyle:Ht,columnRuleWidth:Ht,columns:Ht,columnSpan:Ht,columnWidth:Ht,backdropFilter:Ht,hyphens:Ht,flowInto:Ht,flowFrom:Ht,regionFragment:Ht,textOrientation:Ht,tabSize:jw,fontKerning:Ht,textSizeAdjust:Ht}};var tT=qb(eT),nT=["animationKeyframes"],s_=new Map,iT={},rT=1,aT=3,sT={borderColor:2,borderRadius:2,borderStyle:2,borderWidth:2,display:2,flex:2,inset:2,margin:2,overflow:2,overscrollBehavior:2,padding:2,insetBlock:2.1,insetInline:2.1,marginInline:2.1,marginBlock:2.1,paddingInline:2.1,paddingBlock:2.1,borderBlockStartColor:2.2,borderBlockStartStyle:2.2,borderBlockStartWidth:2.2,borderBlockEndColor:2.2,borderBlockEndStyle:2.2,borderBlockEndWidth:2.2,borderInlineStartColor:2.2,borderInlineStartStyle:2.2,borderInlineStartWidth:2.2,borderInlineEndColor:2.2,borderInlineEndStyle:2.2,borderInlineEndWidth:2.2,borderEndStartRadius:2.2,borderEndEndRadius:2.2,borderStartStartRadius:2.2,borderStartEndRadius:2.2,insetBlockEnd:2.2,insetBlockStart:2.2,insetInlineEnd:2.2,insetInlineStart:2.2,marginBlockStart:2.2,marginBlockEnd:2.2,marginInlineStart:2.2,marginInlineEnd:2.2,paddingBlockStart:2.2,paddingBlockEnd:2.2,paddingInlineStart:2.2,paddingInlineEnd:2.2},tp="borderTopLeftRadius",np="borderTopRightRadius",ip="borderBottomLeftRadius",rp="borderBottomRightRadius",ap="borderLeftColor",sp="borderLeftStyle",op="borderLeftWidth",lp="borderRightColor",up="borderRightStyle",cp="borderRightWidth",dp="right",fp="marginLeft",hp="marginRight",pp="paddingLeft",mp="paddingRight",gp="left",Hc={[tp]:np,[np]:tp,[ip]:rp,[rp]:ip,[ap]:lp,[sp]:up,[op]:cp,[lp]:ap,[up]:sp,[cp]:op,[gp]:dp,[fp]:hp,[hp]:fp,[pp]:mp,[mp]:pp,[dp]:gp},vl={borderStartStartRadius:tp,borderStartEndRadius:np,borderEndStartRadius:ip,borderEndEndRadius:rp,borderInlineStartColor:ap,borderInlineStartStyle:sp,borderInlineStartWidth:op,borderInlineEndColor:lp,borderInlineEndStyle:up,borderInlineEndWidth:cp,insetInlineEnd:dp,insetInlineStart:gp,marginInlineStart:fp,marginInlineEnd:hp,paddingInlineStart:pp,paddingInlineEnd:mp},yS=["clear","float","textAlign"];function oT(n){var e={$$css:!0},t=[];function r(s,o,u){var d=cT(u,o),f=o+d,h=s_.get(f),g;if(h!=null)g=h[0],t.push(h[1]);else{var m=s!==o?f:d;g=xm("r",s,m);var v=sT[s]||aT,x=dT(g,o,u),M=[x,v];t.push(M),s_.set(f,[g,M])}return g}return Object.keys(n).sort().forEach(s=>{var o=n[s];if(o!=null){var u;if(yS.indexOf(s)>-1){var d=r(s,s,"left"),f=r(s,s,"right");o==="start"?u=[d,f]:o==="end"&&(u=[f,d])}var h=vl[s];if(h!=null){var g=r(s,h,o),m=r(s,Hc[h],o);u=[g,m]}if(s==="transitionProperty"){for(var v=Array.isArray(o)?o:[o],x=[],M=0;M<v.length;M++){var R=v[M];typeof R=="string"&&vl[R]!=null&&x.push(M)}if(x.length>0){var y=[...v],S=[...v];x.forEach(w=>{var N=y[w];if(typeof N=="string"){var L=vl[N],U=Hc[L];y[w]=L,S[w]=U;var D=r(s,s,y),b=r(s,s,S);u=[D,b]}})}}u==null?u=r(s,s,o):e.$$css$localize=!0,e[s]=u}}),[e,t]}function lT(n,e){var t={$$css:!0},r=[],s=n.animationKeyframes,o=ms(n,nT),u=xm("css",e,JSON.stringify(n)),d="."+u,f;if(s!=null){var h=SS(s),g=h[0],m=h[1];f=g.join(","),r.push(...m)}var v=Hr(Di(Di({},o),{},{animationName:f}));return r.push(""+d+v),t[u]=u,[t,[[r,rT]]]}function uT(n,e){var t=n||iT,r={},s={},o=function(){var h=t[u],g=u,m=h;if(!Object.prototype.hasOwnProperty.call(t,u)||h==null)return"continue";yS.indexOf(u)>-1&&(h==="start"?m=e?"right":"left":h==="end"&&(m=e?"left":"right"));var v=vl[u];if(v!=null&&(g=e?Hc[v]:v),u==="transitionProperty"){var x=Array.isArray(h)?h:[h];x.forEach((M,R)=>{if(typeof M=="string"){var y=vl[M];y!=null&&(x[R]=e?Hc[y]:y,m=x.join(" "))}})}r[g]||(s[g]=m),g===u&&(r[g]=!0)};for(var u in t)var d=o();return cS(s,!0)}function cT(n,e){var t=_r(n,e);return typeof t!="string"?JSON.stringify(t||""):t}function dT(n,e,t){var r=[],s="."+n;switch(e){case"animationKeyframes":{var o=SS(t),u=o[0],d=o[1],f=Hr({animationName:u.join(",")});r.push(""+s+f,...d);break}case"placeholderTextColor":{var h=Hr({color:t,opacity:1});r.push(s+"::-webkit-input-placeholder"+h,s+"::-moz-placeholder"+h,s+":-ms-input-placeholder"+h,s+"::placeholder"+h);break}case"pointerEvents":{var g=t;if(t==="auto"||t==="box-only"){if(g="auto!important",t==="box-only"){var m=Hr({pointerEvents:"none"});r.push(s+">*"+m)}}else if((t==="none"||t==="box-none")&&(g="none!important",t==="box-none")){var v=Hr({pointerEvents:"auto"});r.push(s+">*"+v)}var x=Hr({pointerEvents:g});r.push(""+s+x);break}case"scrollbarWidth":{t==="none"&&r.push(s+"::-webkit-scrollbar{display:none}");var M=Hr({scrollbarWidth:t});r.push(""+s+M);break}default:{var R=Hr({[e]:t});r.push(""+s+R);break}}return r}function Hr(n){var e=tT(cS(n)),t=Object.keys(e).map(r=>{var s=e[r],o=zb(r);return Array.isArray(s)?s.map(u=>o+":"+u).join(";"):o+":"+s}).sort().join(";");return"{"+t+";}"}function xm(n,e,t){var r=Ub(e+t);return n+"-"+r}function fT(n){var e=["-webkit-",""],t=xm("r","animation",JSON.stringify(n)),r="{"+Object.keys(n).map(o=>{var u=n[o],d=Hr(u);return""+o+d}).join("")+"}",s=e.map(o=>"@"+o+"keyframes "+t+r);return[t,s]}function SS(n){if(typeof n=="number")throw new Error("Invalid CSS keyframes type: "+typeof n);var e=[],t=[],r=Array.isArray(n)?n:[n];return r.forEach(s=>{if(typeof s=="string")e.push(s);else{var o=fT(s),u=o[0],d=o[1];e.push(u),t.push(...d)}}),[e,t]}function th(n,e,t){if(xi){var r=e??document,s=r.getElementById(n);if(s==null)if(s=document.createElement("style"),s.setAttribute("id",n),typeof t=="string"&&s.appendChild(document.createTextNode(t)),r instanceof ShadowRoot)r.insertBefore(s,r.firstChild);else{var o=r.head;o&&o.insertBefore(s,o.firstChild)}return s.sheet}else return null}var hT=Array.prototype.slice;function nh(n){var e={},t={};if(n!=null){var r;hT.call(n.cssRules).forEach((u,d)=>{var f=u.cssText;if(f.indexOf("stylesheet-group")>-1)r=gT(u),e[r]={start:d,rules:[f]};else{var h=l_(f);h!=null&&(t[h]=!0,e[r].rules.push(f))}})}function s(u,d,f){var h=o_(e),g=h.indexOf(d),m=g+1,v=h[m],x=v!=null&&e[v].start!=null?e[v].start:u.cssRules.length,M=_T(u,f,x);if(M){e[d].start==null&&(e[d].start=x);for(var R=m;R<h.length;R+=1){var y=h[R],S=e[y].start||0;e[y].start=S+1}}return M}var o={getTextContent(){return o_(e).map(u=>{var d=e[u].rules,f=d.shift();return d.sort(),d.unshift(f),d.join(`
`)}).join(`
`)},insert(u,d){var f=Number(d);if(e[f]==null){var h=pT(f);e[f]={start:null,rules:[h]},n!=null&&s(n,f,h)}var g=l_(u);if(g!=null&&t[g]==null&&(t[g]=!0,e[f].rules.push(u),n!=null)){var m=s(n,f,u);m||e[f].rules.pop()}}};return o}function pT(n){return'[stylesheet-group="'+n+'"]{}'}var mT=/["']/g;function gT(n){return Number(n.selectorText.split(mT)[1])}function o_(n){return Object.keys(n).map(Number).sort((e,t)=>e>t?1:-1)}var vT=/\s*([,])\s*/g;function l_(n){var e=n.split("{")[0].trim();return e!==""?e.replace(vT,"$1"):null}function _T(n,e,t){try{return n.insertRule(e,t),!0}catch{return!1}}var yT="react-native-stylesheet",ih=new WeakMap,$i=[],u_=["html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}","body{margin:0;}","button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}","input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}"];function ST(n,e){e===void 0&&(e=yT);var t;if(xi){var r=document;if($i.length===0)t=nh(th(e)),u_.forEach(d=>{t.insert(d,0)}),ih.set(r,$i.length),$i.push(t);else{var s=ih.get(r);if(s==null){var o=$i[0],u=o!=null?o.getTextContent():"";t=nh(th(e,r,u)),ih.set(r,$i.length),$i.push(t)}else t=$i[s]}}else $i.length===0?(t=nh(th(e)),u_.forEach(d=>{t.insert(d,0)}),$i.push(t)):t=$i[0];return{getTextContent(){return t.getTextContent()},id:e,insert(d,f){$i.forEach(h=>{h.insert(d,f)})}}}var rc={},c_;function xT(){if(c_)return rc;c_=1,Object.defineProperty(rc,"__esModule",{value:!0}),rc.localizeStyle=r;var n=new WeakMap,e="$$css$localize";function t(s,o){var u={};for(var d in s)if(d!==e){var f=s[d];Array.isArray(f)?u[d]=o?f[1]:f[0]:u[d]=f}return u}function r(s,o){if(s[e]!=null){var u=o?1:0;if(n.has(s)){var d=n.get(s),f=d[u];return f==null&&(f=t(s,o),d[u]=f,n.set(s,d)),f}var h=t(s,o),g=new Array(2);return g[u]=h,n.set(s,g),h}return s}return rc}var rh,d_;function MT(){return d_||(d_=1,rh=xT()),rh}var ET=MT(),bT={},xS={height:0,width:0},MS=n=>{var e=n.shadowColor,t=n.shadowOffset,r=n.shadowOpacity,s=n.shadowRadius,o=t||xS,u=o.height,d=o.width,f=_r(d),h=_r(u),g=_r(s||0),m=uS(e||"black",r);if(m!=null&&f!=null&&h!=null&&g!=null)return f+" "+h+" "+g+" "+m},wT=n=>{var e=n.textShadowColor,t=n.textShadowOffset,r=n.textShadowRadius,s=t||xS,o=s.height,u=s.width,d=r||0,f=_r(u),h=_r(o),g=_r(d),m=_r(e,"textShadowColor");if(m&&(o!==0||u!==0||d!==0)&&f!=null&&h!=null&&g!=null)return f+" "+h+" "+g+" "+m},TT=n=>{var e=Object.keys(n)[0],t=n[e];if(e==="matrix"||e==="matrix3d")return e+"("+t.join(",")+")";var r=_r(t,e);return e+"("+r+")"},RT=n=>n.map(TT).join(" "),AT={borderBottomEndRadius:"borderEndEndRadius",borderBottomStartRadius:"borderEndStartRadius",borderTopEndRadius:"borderStartEndRadius",borderTopStartRadius:"borderStartStartRadius",borderEndColor:"borderInlineEndColor",borderEndStyle:"borderInlineEndStyle",borderEndWidth:"borderInlineEndWidth",borderStartColor:"borderInlineStartColor",borderStartStyle:"borderInlineStartStyle",borderStartWidth:"borderInlineStartWidth",end:"insetInlineEnd",marginEnd:"marginInlineEnd",marginHorizontal:"marginInline",marginStart:"marginInlineStart",marginVertical:"marginBlock",paddingEnd:"paddingInlineEnd",paddingHorizontal:"paddingInline",paddingStart:"paddingInlineStart",paddingVertical:"paddingBlock",start:"insetInlineStart"},CT={elevation:!0,overlayColor:!0,resizeMode:!0,tintColor:!0},ES=function(e,t){t===void 0&&(t={});var r=e||bT,s={};if(t.shadow,r.shadowColor!=null||r.shadowOffset!=null||r.shadowOpacity!=null||r.shadowRadius!=null){var o=MS(r);if(o!=null&&s.boxShadow==null){var u=r.boxShadow,d=u?u+", "+o:o;s.boxShadow=d}}if(t.textShadow,r.textShadowColor!=null||r.textShadowOffset!=null||r.textShadowRadius!=null){var f=wT(r);if(f!=null&&s.textShadow==null){var h=r.textShadow,g=h?h+", "+f:f;s.textShadow=g}}for(var m in r)if(!(CT[m]!=null||m==="shadowColor"||m==="shadowOffset"||m==="shadowOpacity"||m==="shadowRadius"||m==="textShadowColor"||m==="textShadowOffset"||m==="textShadowRadius")){var v=r[m],x=AT[m]||m,M=v;!Object.prototype.hasOwnProperty.call(r,m)||x!==m&&r[x]!=null||(x==="aspectRatio"&&typeof M=="number"?s[x]=M.toString():x==="fontVariant"?(Array.isArray(M)&&M.length>0&&(M=M.join(" ")),s[x]=M):x==="textAlignVertical"?r.verticalAlign==null&&(s.verticalAlign=M==="center"?"middle":M):x==="transform"?(Array.isArray(M)&&(M=RT(M)),s.transform=M):s[x]=M)}return s},jo={},f_;function PT(){if(f_)return jo;f_=1,Object.defineProperty(jo,"__esModule",{value:!0}),jo.styleq=void 0;var n=new WeakMap,e="$$css";function t(s){var o,u,d;return s!=null&&(o=s.disableCache===!0,u=s.disableMix===!0,d=s.transform),function(){for(var h=[],g="",m=null,v=o?null:n,x=new Array(arguments.length),M=0;M<arguments.length;M++)x[M]=arguments[M];for(;x.length>0;){var R=x.pop();if(!(R==null||R===!1)){if(Array.isArray(R)){for(var y=0;y<R.length;y++)x.push(R[y]);continue}var S=d!=null?d(R):R;if(S.$$css){var w="";if(v!=null&&v.has(S)){var N=v.get(S);N!=null&&(w=N[0],h.push.apply(h,N[1]),v=N[2])}else{var L=[];for(var U in S){var D=S[U];U!==e&&(typeof D=="string"||D===null?h.includes(U)||(h.push(U),v!=null&&L.push(U),typeof D=="string"&&(w+=w?" "+D:D)):console.error("styleq: ".concat(U," typeof ").concat(String(D),' is not "string" or "null".')))}if(v!=null){var b=new WeakMap;v.set(S,[w,L,b]),v=b}}w&&(g=g?w+" "+g:w)}else if(u)m==null&&(m={}),m=Object.assign({},S,m);else{var P=null;for(var G in S){var O=S[G];O!==void 0&&(h.includes(G)||(O!=null&&(m==null&&(m={}),P==null&&(P={}),P[G]=O),h.push(G),v=null))}P!=null&&(m=Object.assign(P,m))}}}var B=[g,m];return B}}var r=t();return jo.styleq=r,r.factory=t,jo}var LT=PT(),IT=["writingDirection"],bS=new WeakMap,Gc=ST(),wS={shadow:!0,textShadow:!0};function DT(n,e){e===void 0&&(e={});var t=e,r=t.writingDirection,s=ms(t,IT),o=r==="rtl";return LT.styleq.factory({transform(u){var d=bS.get(u);return d!=null?ET.localizeStyle(d,o):ES(u,Di(Di({},wS),s))}})(n)}function TS(n){n.forEach(e=>{var t=e[0],r=e[1];Gc!=null&&t.forEach(s=>{Gc.insert(s,r)})})}function NT(n){var e=oT(ES(n,wS)),t=e[0],r=e[1];return TS(r),t}function OT(n,e){var t=lT(n,e),r=t[0],s=t[1];return TS(s),r}var RS={position:"absolute",left:0,right:0,top:0,bottom:0},UT=AS({x:Di({},RS)}).x;function AS(n){return Object.keys(n).forEach(e=>{var t=n[e];if(t!=null&&t.$$css!==!0){var r;e.indexOf("$raw")>-1?r=OT(t,e.split("$raw")[0]):r=NT(t),bS.set(t,r)}}),n}function FT(n,e){return[n,e]}function kT(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];for(var r=e.flat(1/0),s={},o=0;o<r.length;o++){var u=r[o];u!=null&&typeof u=="object"&&Object.assign(s,u)}return s}function BT(){return{id:Gc.id,textContent:Gc.getTextContent()}}function Kr(n,e){e===void 0&&(e={});var t=e.writingDirection==="rtl",r=DT(n,e);return Array.isArray(r)&&r[1]!=null&&(r[1]=uT(r[1],t)),r}Kr.absoluteFill=UT;Kr.absoluteFillObject=RS;Kr.create=AS;Kr.compose=FT;Kr.flatten=kT;Kr.getSheet=BT;Kr.hairlineWidth=1;xi&&window.__REACT_DEVTOOLS_GLOBAL_HOOK__&&(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle=Kr.flatten);var Er=Kr,zT=["aria-activedescendant","accessibilityActiveDescendant","aria-atomic","accessibilityAtomic","aria-autocomplete","accessibilityAutoComplete","aria-busy","accessibilityBusy","aria-checked","accessibilityChecked","aria-colcount","accessibilityColumnCount","aria-colindex","accessibilityColumnIndex","aria-colspan","accessibilityColumnSpan","aria-controls","accessibilityControls","aria-current","accessibilityCurrent","aria-describedby","accessibilityDescribedBy","aria-details","accessibilityDetails","aria-disabled","accessibilityDisabled","aria-errormessage","accessibilityErrorMessage","aria-expanded","accessibilityExpanded","aria-flowto","accessibilityFlowTo","aria-haspopup","accessibilityHasPopup","aria-hidden","accessibilityHidden","aria-invalid","accessibilityInvalid","aria-keyshortcuts","accessibilityKeyShortcuts","aria-label","accessibilityLabel","aria-labelledby","accessibilityLabelledBy","aria-level","accessibilityLevel","aria-live","accessibilityLiveRegion","aria-modal","accessibilityModal","aria-multiline","accessibilityMultiline","aria-multiselectable","accessibilityMultiSelectable","aria-orientation","accessibilityOrientation","aria-owns","accessibilityOwns","aria-placeholder","accessibilityPlaceholder","aria-posinset","accessibilityPosInSet","aria-pressed","accessibilityPressed","aria-readonly","accessibilityReadOnly","aria-required","accessibilityRequired","role","accessibilityRole","aria-roledescription","accessibilityRoleDescription","aria-rowcount","accessibilityRowCount","aria-rowindex","accessibilityRowIndex","aria-rowspan","accessibilityRowSpan","aria-selected","accessibilitySelected","aria-setsize","accessibilitySetSize","aria-sort","accessibilitySort","aria-valuemax","accessibilityValueMax","aria-valuemin","accessibilityValueMin","aria-valuenow","accessibilityValueNow","aria-valuetext","accessibilityValueText","dataSet","focusable","id","nativeID","pointerEvents","style","tabIndex","testID"],HT={},GT=Object.prototype.hasOwnProperty,VT=Array.isArray,WT=/[A-Z]/g;function $T(n){return"-"+n.toLowerCase()}function XT(n){return n.replace(WT,$T)}function Gs(n){return VT(n)?n.join(" "):n}var qT=Er.create({auto:{pointerEvents:"auto"},"box-none":{pointerEvents:"box-none"},"box-only":{pointerEvents:"box-only"},none:{pointerEvents:"none"}}),YT=(n,e,t)=>{e||(e=HT);var r=e,s=r["aria-activedescendant"],o=r.accessibilityActiveDescendant,u=r["aria-atomic"],d=r.accessibilityAtomic,f=r["aria-autocomplete"],h=r.accessibilityAutoComplete,g=r["aria-busy"],m=r.accessibilityBusy,v=r["aria-checked"],x=r.accessibilityChecked,M=r["aria-colcount"],R=r.accessibilityColumnCount,y=r["aria-colindex"],S=r.accessibilityColumnIndex,w=r["aria-colspan"],N=r.accessibilityColumnSpan,L=r["aria-controls"],U=r.accessibilityControls,D=r["aria-current"],b=r.accessibilityCurrent,P=r["aria-describedby"],G=r.accessibilityDescribedBy,O=r["aria-details"],B=r.accessibilityDetails,V=r["aria-disabled"],q=r.accessibilityDisabled,k=r["aria-errormessage"],ie=r.accessibilityErrorMessage,te=r["aria-expanded"],ee=r.accessibilityExpanded,J=r["aria-flowto"],Y=r.accessibilityFlowTo,j=r["aria-haspopup"],F=r.accessibilityHasPopup,Q=r["aria-hidden"],Ce=r.accessibilityHidden,re=r["aria-invalid"],Se=r.accessibilityInvalid,Ee=r["aria-keyshortcuts"],Ae=r.accessibilityKeyShortcuts,ve=r["aria-label"],He=r.accessibilityLabel,ft=r["aria-labelledby"],Xe=r.accessibilityLabelledBy,gt=r["aria-level"],yt=r.accessibilityLevel,ot=r["aria-live"],Wt=r.accessibilityLiveRegion,Ft=r["aria-modal"],en=r.accessibilityModal,Lt=r["aria-multiline"],cn=r.accessibilityMultiline,Ot=r["aria-multiselectable"],Zt=r.accessibilityMultiSelectable,an=r["aria-orientation"],pn=r.accessibilityOrientation,K=r["aria-owns"],mn=r.accessibilityOwns,Ct=r["aria-placeholder"],fe=r.accessibilityPlaceholder,ce=r["aria-posinset"],Pe=r.accessibilityPosInSet,he=r["aria-pressed"],Me=r.accessibilityPressed,I=r["aria-readonly"],T=r.accessibilityReadOnly,W=r["aria-required"],xe=r.accessibilityRequired;r.role,r.accessibilityRole;var pe=r["aria-roledescription"],be=r.accessibilityRoleDescription,Ie=r["aria-rowcount"],ge=r.accessibilityRowCount,_e=r["aria-rowindex"],Ne=r.accessibilityRowIndex,H=r["aria-rowspan"],ye=r.accessibilityRowSpan,me=r["aria-selected"],Fe=r.accessibilitySelected,De=r["aria-setsize"],Oe=r.accessibilitySetSize,Je=r["aria-sort"],ht=r.accessibilitySort,Te=r["aria-valuemax"],nt=r.accessibilityValueMax,ut=r["aria-valuemin"],Ge=r.accessibilityValueMin,xt=r["aria-valuenow"],$t=r.accessibilityValueNow,Ln=r["aria-valuetext"],Jr=r.accessibilityValueText,ir=r.dataSet,Qr=r.focusable,ka=r.id,Mi=r.nativeID,ai=r.pointerEvents,ea=r.style,rr=r.tabIndex,ta=r.testID,We=ms(r,zT),Ba=V||q,zn=lS.propsToAriaRole(e),ar=s??o;ar!=null&&(We["aria-activedescendant"]=ar);var _s=u!=null?s:d;_s!=null&&(We["aria-atomic"]=_s);var zt=f??h;zt!=null&&(We["aria-autocomplete"]=zt);var za=g??m;za!=null&&(We["aria-busy"]=za);var na=v??x;na!=null&&(We["aria-checked"]=na);var Ha=M??R;Ha!=null&&(We["aria-colcount"]=Ha);var Rr=y??S;Rr!=null&&(We["aria-colindex"]=Rr);var Ga=w??N;Ga!=null&&(We["aria-colspan"]=Ga);var C=L??U;C!=null&&(We["aria-controls"]=Gs(C));var $=D??b;$!=null&&(We["aria-current"]=$);var oe=P??G;oe!=null&&(We["aria-describedby"]=Gs(oe));var ae=O??B;ae!=null&&(We["aria-details"]=ae),Ba===!0&&(We["aria-disabled"]=!0,(n==="button"||n==="form"||n==="input"||n==="select"||n==="textarea")&&(We.disabled=!0));var ne=k??ie;ne!=null&&(We["aria-errormessage"]=ne);var Be=te??ee;Be!=null&&(We["aria-expanded"]=Be);var qe=J??Y;qe!=null&&(We["aria-flowto"]=Gs(qe));var ke=j??F;ke!=null&&(We["aria-haspopup"]=ke);var ze=Q??Ce;ze===!0&&(We["aria-hidden"]=ze);var Ye=re??Se;Ye!=null&&(We["aria-invalid"]=Ye);var rt=Ee??Ae;rt!=null&&(We["aria-keyshortcuts"]=Gs(rt));var mt=ve??He;mt!=null&&(We["aria-label"]=mt);var Ke=ft??Xe;Ke!=null&&(We["aria-labelledby"]=Gs(Ke));var vt=gt??yt;vt!=null&&(We["aria-level"]=vt);var Bt=ot??Wt;Bt!=null&&(We["aria-live"]=Bt==="none"?"off":Bt);var It=Ft??en;It!=null&&(We["aria-modal"]=It);var At=Lt??cn;At!=null&&(We["aria-multiline"]=At);var Xt=Ot??Zt;Xt!=null&&(We["aria-multiselectable"]=Xt);var Ze=an??pn;Ze!=null&&(We["aria-orientation"]=Ze);var sn=K??mn;sn!=null&&(We["aria-owns"]=Gs(sn));var Qe=Ct??fe;Qe!=null&&(We["aria-placeholder"]=Qe);var si=ce??Pe;si!=null&&(We["aria-posinset"]=si);var on=he??Me;on!=null&&(We["aria-pressed"]=on);var Ui=I??T;Ui!=null&&(We["aria-readonly"]=Ui,(n==="input"||n==="select"||n==="textarea")&&(We.readOnly=!0));var Xn=W??xe;Xn!=null&&(We["aria-required"]=Xn,(n==="input"||n==="select"||n==="textarea")&&(We.required=xe)),zn!=null&&(We.role=zn==="none"?"presentation":zn);var oi=pe??be;oi!=null&&(We["aria-roledescription"]=oi);var St=Ie??ge;St!=null&&(We["aria-rowcount"]=St);var jt=_e??Ne;jt!=null&&(We["aria-rowindex"]=jt);var _n=H??ye;_n!=null&&(We["aria-rowspan"]=_n);var wt=me??Fe;wt!=null&&(We["aria-selected"]=wt);var Ut=De??Oe;Ut!=null&&(We["aria-setsize"]=Ut);var dn=Je??ht;dn!=null&&(We["aria-sort"]=dn);var Fi=Te??nt;Fi!=null&&(We["aria-valuemax"]=Fi);var ia=ut??Ge;ia!=null&&(We["aria-valuemin"]=ia);var ki=xt??$t;ki!=null&&(We["aria-valuenow"]=ki);var Hl=Ln??Jr;if(Hl!=null&&(We["aria-valuetext"]=Hl),ir!=null){for(var ys in ir)if(GT.call(ir,ys)){var Va=XT(ys),Gl=ir[ys];Gl!=null&&(We["data-"+Va]=Gl)}}rr===0||rr==="0"||rr===-1||rr==="-1"?We.tabIndex=rr:(Qr===!1&&(We.tabIndex="-1"),n==="a"||n==="button"||n==="input"||n==="select"||n==="textarea"?(Qr===!1||q===!0)&&(We.tabIndex="-1"):zn==="button"||zn==="checkbox"||zn==="link"||zn==="radio"||zn==="textbox"||zn==="switch"?Qr!==!1&&(We.tabIndex="0"):Qr===!0&&(We.tabIndex="0"));var xo=Er([ea,ai&&qT[ai]],Di({writingDirection:"ltr"},t)),Wa=xo[0],Mo=xo[1];Wa&&(We.className=Wa),Mo&&(We.style=Mo);var Vl=ka??Mi;return Vl!=null&&(We.id=Vl),ta!=null&&(We["data-testid"]=ta),We.type==null&&n==="button"&&(We.type="button"),We},KT=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),h_=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","far","glk","he","iw","khw","ks","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]),p_=new Map;function ZT(n){var e=p_.get(n);if(e)return e;var t=!1;if(Intl.Locale)try{var r=new Intl.Locale(n).maximize().script;t=KT.has(r)}catch{var s=n.split("-")[0];t=h_.has(s)}else{var o=n.split("-")[0];t=h_.has(o)}return p_.set(n,t),t}var jT={direction:"ltr",locale:"en-US"},CS=lt.createContext(jT);function Mm(n){return ZT(n)?"rtl":"ltr"}function JT(n){var e=n.direction,t=n.locale,r=n.children,s=e||t;return s?uo.createElement(CS.Provider,{children:r,value:{direction:t?Mm(t):e,locale:t}}):r}function PS(){return lt.useContext(CS)}var Em=(n,e,t)=>{var r;n&&n.constructor===String&&(r=lS.propsToAccessibilityComponent(e));var s=r||n,o=YT(s,e,t),u=uo.createElement(s,o),d=o.dir?uo.createElement(JT,{children:u,direction:o.dir,locale:o.lang}):u;return d},QT=[];function LS(n){return QT[n-1]}var e1=/^data:/;class mi{static has(e){var t=mi._entries,r=e1.test(e);return r||!!t[e]}static add(e){var t=mi._entries,r=Date.now();t[e]?(t[e].lastUsedTimestamp=r,t[e].refCount+=1):t[e]={lastUsedTimestamp:r,refCount:1}}static remove(e){var t=mi._entries;t[e]&&(t[e].refCount-=1),mi._cleanUpIfNeeded()}static _cleanUpIfNeeded(){var e=mi._entries,t=Object.keys(e);if(t.length+1>mi._maximumEntries){var r,s;t.forEach(o=>{var u=e[o];(!s||u.lastUsedTimestamp<s.lastUsedTimestamp)&&u.refCount===0&&(r=o,s=u)}),r&&delete e[r]}}}mi._maximumEntries=256;mi._entries={};var ah=0,ac={},yr={abort(n){var e=ac[""+n];e&&(e.onerror=null,e.onload=null,e=null,delete ac[""+n])},getSize(n,e,t){var r=!1,s=setInterval(u,16),o=yr.load(n,u,d);function u(){var f=ac[""+o];if(f){var h=f.naturalHeight,g=f.naturalWidth;h&&g&&(e(g,h),r=!0)}r&&(yr.abort(o),clearInterval(s))}function d(){typeof t=="function"&&t(),yr.abort(o),clearInterval(s)}},has(n){return mi.has(n)},load(n,e,t){ah+=1;var r=new window.Image;return r.onerror=t,r.onload=s=>{var o=()=>e({nativeEvent:s});typeof r.decode=="function"?r.decode().then(o,o):setTimeout(o,0)},r.src=n,ac[""+ah]=r,ah},prefetch(n){return new Promise((e,t)=>{yr.load(n,()=>{mi.add(n),mi.remove(n),e()},t)})},queryCache(n){var e={};return n.forEach(t=>{mi.has(t)&&(e[t]="disk/memory")}),Promise.resolve(e)}},sh,m_;function t1(){if(m_)return sh;m_=1;function n(e,t){for(var r=arguments.length,s=new Array(r>2?r-2:0),o=2;o<r;o++)s[o-2]=arguments[o];if(!e){var u;if(t===void 0)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=0;u=new Error(t.replace(/%s/g,function(){return String(s[d++])})),u.name="Invariant Violation"}throw u.framesToPop=1,u}}return sh=n,sh}var n1=t1();const g_=Si(n1);var ls={window:{fontScale:1,height:0,scale:1,width:0},screen:{fontScale:1,height:0,scale:1,width:0}},Ta={},v_=xi;function IS(){if(xi){var n=window,e,t;if(n.visualViewport){var r=n.visualViewport;e=Math.round(r.height*r.scale),t=Math.round(r.width*r.scale)}else{var s=n.document.documentElement;e=s.clientHeight,t=s.clientWidth}ls.window={fontScale:1,height:e,scale:n.devicePixelRatio||1,width:t},ls.screen={fontScale:1,height:n.screen.height,scale:n.devicePixelRatio||1,width:n.screen.width}}}function __(){IS(),Array.isArray(Ta.change)&&Ta.change.forEach(n=>n(ls))}class y_{static get(e){return v_&&(v_=!1,IS()),g_(ls[e],"No dimension set for key "+e),ls[e]}static set(e){e&&(xi?g_(!1,"Dimensions cannot be set in the browser"):(e.screen!=null&&(ls.screen=e.screen),e.window!=null&&(ls.window=e.window)))}static addEventListener(e,t){return Ta[e]=Ta[e]||[],Ta[e].push(t),{remove:()=>{this.removeEventListener(e,t)}}}static removeEventListener(e,t){Array.isArray(Ta[e])&&(Ta[e]=Ta[e].filter(r=>r!==t))}}xi&&(window.visualViewport?window.visualViewport.addEventListener("resize",__,!1):window.addEventListener("resize",__,!1));class _l{static get(){return y_.get("window").scale}static getFontScale(){return y_.get("window").fontScale||_l.get()}static getPixelSizeForLayoutSize(e){return Math.round(e*_l.get())}static roundToNearestPixel(e){var t=_l.get();return Math.round(e*t)/t}}var Vc=lt.createContext(!1),DS={children:!0,dataSet:!0,dir:!0,id:!0,ref:!0,suppressHydrationWarning:!0,tabIndex:!0,testID:!0,focusable:!0,nativeID:!0},NS={"aria-activedescendant":!0,"aria-atomic":!0,"aria-autocomplete":!0,"aria-busy":!0,"aria-checked":!0,"aria-colcount":!0,"aria-colindex":!0,"aria-colspan":!0,"aria-controls":!0,"aria-current":!0,"aria-describedby":!0,"aria-details":!0,"aria-disabled":!0,"aria-errormessage":!0,"aria-expanded":!0,"aria-flowto":!0,"aria-haspopup":!0,"aria-hidden":!0,"aria-invalid":!0,"aria-keyshortcuts":!0,"aria-label":!0,"aria-labelledby":!0,"aria-level":!0,"aria-live":!0,"aria-modal":!0,"aria-multiline":!0,"aria-multiselectable":!0,"aria-orientation":!0,"aria-owns":!0,"aria-placeholder":!0,"aria-posinset":!0,"aria-pressed":!0,"aria-readonly":!0,"aria-required":!0,role:!0,"aria-roledescription":!0,"aria-rowcount":!0,"aria-rowindex":!0,"aria-rowspan":!0,"aria-selected":!0,"aria-setsize":!0,"aria-sort":!0,"aria-valuemax":!0,"aria-valuemin":!0,"aria-valuenow":!0,"aria-valuetext":!0,accessibilityActiveDescendant:!0,accessibilityAtomic:!0,accessibilityAutoComplete:!0,accessibilityBusy:!0,accessibilityChecked:!0,accessibilityColumnCount:!0,accessibilityColumnIndex:!0,accessibilityColumnSpan:!0,accessibilityControls:!0,accessibilityCurrent:!0,accessibilityDescribedBy:!0,accessibilityDetails:!0,accessibilityDisabled:!0,accessibilityErrorMessage:!0,accessibilityExpanded:!0,accessibilityFlowTo:!0,accessibilityHasPopup:!0,accessibilityHidden:!0,accessibilityInvalid:!0,accessibilityKeyShortcuts:!0,accessibilityLabel:!0,accessibilityLabelledBy:!0,accessibilityLevel:!0,accessibilityLiveRegion:!0,accessibilityModal:!0,accessibilityMultiline:!0,accessibilityMultiSelectable:!0,accessibilityOrientation:!0,accessibilityOwns:!0,accessibilityPlaceholder:!0,accessibilityPosInSet:!0,accessibilityPressed:!0,accessibilityReadOnly:!0,accessibilityRequired:!0,accessibilityRole:!0,accessibilityRoleDescription:!0,accessibilityRowCount:!0,accessibilityRowIndex:!0,accessibilityRowSpan:!0,accessibilitySelected:!0,accessibilitySetSize:!0,accessibilitySort:!0,accessibilityValueMax:!0,accessibilityValueMin:!0,accessibilityValueNow:!0,accessibilityValueText:!0},OS={onClick:!0,onAuxClick:!0,onContextMenu:!0,onGotPointerCapture:!0,onLostPointerCapture:!0,onPointerCancel:!0,onPointerDown:!0,onPointerEnter:!0,onPointerMove:!0,onPointerLeave:!0,onPointerOut:!0,onPointerOver:!0,onPointerUp:!0},US={onBlur:!0,onFocus:!0},FS={onKeyDown:!0,onKeyDownCapture:!0,onKeyUp:!0,onKeyUpCapture:!0},kS={onMouseDown:!0,onMouseEnter:!0,onMouseLeave:!0,onMouseMove:!0,onMouseOver:!0,onMouseOut:!0,onMouseUp:!0},BS={onTouchCancel:!0,onTouchCancelCapture:!0,onTouchEnd:!0,onTouchEndCapture:!0,onTouchMove:!0,onTouchMoveCapture:!0,onTouchStart:!0,onTouchStartCapture:!0},zS={style:!0};function HS(n,e){var t={};for(var r in n)n.hasOwnProperty(r)&&e[r]===!0&&(t[r]=n[r]);return t}var Wc=xi?lt.useLayoutEffect:lt.useEffect,vp=n=>{if(n!=null){var e=n.nodeType===1;if(e&&typeof n.getBoundingClientRect=="function")return n.getBoundingClientRect()}},yl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexOrder:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,gridRow:!0,gridRowEnd:!0,gridRowGap:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnGap:!0,gridColumnStart:!0,lineClamp:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0,scale:!0,scaleX:!0,scaleY:!0,scaleZ:!0,shadowOpacity:!0},i1=["ms","Moz","O","Webkit"],r1=(n,e)=>n+e.charAt(0).toUpperCase()+e.substring(1);Object.keys(yl).forEach(n=>{i1.forEach(e=>{yl[r1(e,n)]=yl[n]})});function a1(n,e,t){var r=e==null||typeof e=="boolean"||e==="";return r?"":!t&&typeof e=="number"&&e!==0&&!(yl.hasOwnProperty(n)&&yl[n])?e+"px":(""+e).trim()}function s1(n,e){var t=n.style;for(var r in e)if(e.hasOwnProperty(r)){var s=r.indexOf("--")===0,o=a1(r,e[r],s);r==="float"&&(r="cssFloat"),s?t.setProperty(r,o):t[r]=o}}var S_=n=>{var e=n.offsetHeight,t=n.offsetWidth,r=n.offsetLeft,s=n.offsetTop;for(n=n.offsetParent;n&&n.nodeType===1;)r+=n.offsetLeft+n.clientLeft-n.scrollLeft,s+=n.offsetTop+n.clientTop-n.scrollTop,n=n.offsetParent;return s-=window.scrollY,r-=window.scrollX,{width:t,height:e,top:s,left:r}},x_=(n,e,t)=>{var r=e||n&&n.parentNode;n&&r&&setTimeout(()=>{if(n.isConnected&&r.isConnected){var s=S_(r),o=S_(n),u=o.height,d=o.left,f=o.top,h=o.width,g=d-s.left,m=f-s.top;t(g,m,h,u,d,f)}},0)},o1={A:!0,BODY:!0,INPUT:!0,SELECT:!0,TEXTAREA:!0},Pc={blur(n){try{n.blur()}catch{}},focus(n){try{var e=n.nodeName;n.getAttribute("tabIndex")==null&&n.isContentEditable!==!0&&o1[e]==null&&n.setAttribute("tabIndex","-1"),n.focus()}catch{}},measure(n,e){x_(n,null,e)},measureInWindow(n,e){n&&setTimeout(()=>{var t=vp(n),r=t.height,s=t.left,o=t.top,u=t.width;e(s,o,u,r)},0)},measureLayout(n,e,t,r){x_(n,e,r)},updateView(n,e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var r=e[t];switch(t){case"style":{s1(n,r);break}case"class":case"className":{n.setAttribute("class",r);break}case"text":case"value":n.value=r;break;default:n.setAttribute(t,r)}}},configureNextLayoutAnimation(n,e){e()},setLayoutAnimationEnabledExperimental(){}},_p="__reactLayoutHandler",oh=null;function l1(){return xi&&typeof window.ResizeObserver<"u"&&oh==null&&(oh=new window.ResizeObserver(function(n){n.forEach(e=>{var t=e.target,r=t[_p];typeof r=="function"&&Pc.measure(t,(s,o,u,d,f,h)=>{var g={nativeEvent:{layout:{x:s,y:o,width:u,height:d,left:f,top:h}},timeStamp:Date.now()};Object.defineProperty(g.nativeEvent,"target",{enumerable:!0,get:()=>e.target}),r(g)})})})),oh}function GS(n,e){var t=l1();Wc(()=>{var r=n.current;r!=null&&(r[_p]=e)},[n,e]),Wc(()=>{var r=n.current;return r!=null&&t!=null&&(typeof r[_p]=="function"?t.observe(r):t.unobserve(r)),()=>{r!=null&&t!=null&&t.unobserve(r)}},[n,t])}function u1(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(s){e.forEach(o=>{if(o!=null){if(typeof o=="function"){o(s);return}if(typeof o=="object"){o.current=s;return}console.error("mergeRefs cannot handle Refs of type boolean, number or string, received ref "+String(o))}})}}function bm(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return lt.useMemo(()=>u1(...e),[...e])}var M_=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():Object.freeze({});function yp(n){var e=lt.useRef(M_);return e.current===M_&&(e.current=n()),e.current}function VS(n){n.pointerEvents,n.style;var e=yp(()=>t=>{t!=null&&(t.measure=r=>Pc.measure(t,r),t.measureLayout=(r,s,o)=>Pc.measureLayout(t,r,o,s),t.measureInWindow=r=>Pc.measureInWindow(t,r))});return e}var E_=()=>{},c1={},d1=[];function b_(n){return n>20?n%20:n}function WS(n,e){var t,r=!1,s,o,u=n.changedTouches,d=n.type,f=n.metaKey===!0,h=n.shiftKey===!0,g=u&&u[0].force||0,m=b_(u&&u[0].identifier||0),v=u&&u[0].clientX||n.clientX,x=u&&u[0].clientY||n.clientY,M=u&&u[0].pageX||n.pageX,R=u&&u[0].pageY||n.pageY,y=typeof n.preventDefault=="function"?n.preventDefault.bind(n):E_,S=n.timeStamp;function w(b){return Array.prototype.slice.call(b).map(P=>({force:P.force,identifier:b_(P.identifier),get locationX(){return U(P.clientX)},get locationY(){return D(P.clientY)},pageX:P.pageX,pageY:P.pageY,target:P.target,timestamp:S}))}if(u!=null)s=w(u),o=w(n.touches);else{var N=[{force:g,identifier:m,get locationX(){return U(v)},get locationY(){return D(x)},pageX:M,pageY:R,target:n.target,timestamp:S}];s=N,o=d==="mouseup"||d==="dragstart"?d1:N}var L={bubbles:!0,cancelable:!0,currentTarget:null,defaultPrevented:n.defaultPrevented,dispatchConfig:c1,eventPhase:n.eventPhase,isDefaultPrevented(){return n.defaultPrevented},isPropagationStopped(){return r},isTrusted:n.isTrusted,nativeEvent:{altKey:!1,ctrlKey:!1,metaKey:f,shiftKey:h,changedTouches:s,force:g,identifier:m,get locationX(){return U(v)},get locationY(){return D(x)},pageX:M,pageY:R,target:n.target,timestamp:S,touches:o,type:d},persist:E_,preventDefault:y,stopPropagation(){r=!0},target:n.target,timeStamp:S,touchHistory:e.touchHistory};function U(b){if(t=t||vp(L.currentTarget),t)return b-t.left}function D(b){if(t=t||vp(L.currentTarget),t)return b-t.top}return L}var f1="mousedown",h1="mousemove",p1="mouseup",m1="dragstart",g1="touchstart",v1="touchmove",_1="touchend",y1="touchcancel",S1="scroll",x1="select",M1="selectionchange";function $S(n){return n===g1||n===f1}function XS(n){return n===v1||n===h1}function qS(n){return n===_1||n===p1||YS(n)}function YS(n){return n===y1||n===m1}function E1(n){return n===S1}function b1(n){return n===x1||n===M1}function w1(){var n=window.getSelection(),e=n.toString(),t=n.anchorNode,r=n.focusNode,s=t&&t.nodeType===window.Node.TEXT_NODE||r&&r.nodeType===window.Node.TEXT_NODE;return e.length>=1&&e!==`
`&&s}var KS="__reactResponderId";function T1(n){if(n.type==="selectionchange"){var e=window.getSelection().anchorNode;return w_(e)}else{var t=n.composedPath!=null?n.composedPath():w_(n.target);return t}}function w_(n){for(var e=[];n!=null&&n!==document.body;)e.push(n),n=n.parentNode;return e}function R1(n){return n!=null?n[KS]:null}function A1(n,e){n!=null&&(n[KS]=e)}function C1(n){for(var e=[],t=[],r=T1(n),s=0;s<r.length;s++){var o=r[s],u=R1(o);u!=null&&(e.push(u),t.push(o))}return{idPath:e,nodePath:t}}function P1(n,e){var t=n.length,r=e.length;if(t===0||r===0||n[t-1]!==e[r-1])return null;var s=n[0],o=0,u=e[0],d=0;t-r>0&&(o=t-r,s=n[o],t=r),r-t>0&&(d=r-t,u=e[d],r=t);for(var f=t;f--;){if(s===u)return s;s=n[o++],u=e[d++]}return null}function L1(n,e){if(!e||e.length===0)return!1;for(var t=0;t<e.length;t++){var r=e[t].target;if(r!=null&&n.contains(r))return!0}return!1}function I1(n){return n.type==="selectionchange"?w1():n.type==="select"}function D1(n){var e=n.altKey,t=n.button,r=n.buttons,s=n.ctrlKey,o=n.type,u=o==="touchstart"||o==="touchmove",d=o==="mousedown"&&(t===0||r===1),f=o==="mousemove"&&r===1,h=e===!1&&s===!1;return!!(u||d&&h||f&&h)}var T_=20;function Oi(n){return n.timeStamp||n.timestamp}function N1(n){return{touchActive:!0,startPageX:n.pageX,startPageY:n.pageY,startTimeStamp:Oi(n),currentPageX:n.pageX,currentPageY:n.pageY,currentTimeStamp:Oi(n),previousPageX:n.pageX,previousPageY:n.pageY,previousTimeStamp:Oi(n)}}function O1(n,e){n.touchActive=!0,n.startPageX=e.pageX,n.startPageY=e.pageY,n.startTimeStamp=Oi(e),n.currentPageX=e.pageX,n.currentPageY=e.pageY,n.currentTimeStamp=Oi(e),n.previousPageX=e.pageX,n.previousPageY=e.pageY,n.previousTimeStamp=Oi(e)}function wm(n){var e=n.identifier;return e==null&&console.error("Touch object is missing identifier."),e}function U1(n,e){var t=wm(n),r=e.touchBank[t];r?O1(r,n):e.touchBank[t]=N1(n),e.mostRecentTimeStamp=Oi(n)}function F1(n,e){var t=e.touchBank[wm(n)];t?(t.touchActive=!0,t.previousPageX=t.currentPageX,t.previousPageY=t.currentPageY,t.previousTimeStamp=t.currentTimeStamp,t.currentPageX=n.pageX,t.currentPageY=n.pageY,t.currentTimeStamp=Oi(n),e.mostRecentTimeStamp=Oi(n)):console.warn(`Cannot record touch move without a touch start.
`,"Touch Move: "+ZS(n)+`
`,"Touch Bank: "+jS(e))}function k1(n,e){var t=e.touchBank[wm(n)];t?(t.touchActive=!1,t.previousPageX=t.currentPageX,t.previousPageY=t.currentPageY,t.previousTimeStamp=t.currentTimeStamp,t.currentPageX=n.pageX,t.currentPageY=n.pageY,t.currentTimeStamp=Oi(n),e.mostRecentTimeStamp=Oi(n)):console.warn(`Cannot record touch end without a touch start.
`,"Touch End: "+ZS(n)+`
`,"Touch Bank: "+jS(e))}function ZS(n){return JSON.stringify({identifier:n.identifier,pageX:n.pageX,pageY:n.pageY,timestamp:Oi(n)})}function jS(n){var e=n.touchBank,t=JSON.stringify(e.slice(0,T_));return e.length>T_&&(t+=" (original size: "+e.length+")"),t}class B1{constructor(){this._touchHistory={touchBank:[],numberActiveTouches:0,indexOfSingleActiveTouch:-1,mostRecentTimeStamp:0}}recordTouchTrack(e,t){var r=this._touchHistory;if(XS(e))t.changedTouches.forEach(d=>F1(d,r));else if($S(e))t.changedTouches.forEach(d=>U1(d,r)),r.numberActiveTouches=t.touches.length,r.numberActiveTouches===1&&(r.indexOfSingleActiveTouch=t.touches[0].identifier);else if(qS(e)&&(t.changedTouches.forEach(d=>k1(d,r)),r.numberActiveTouches=t.touches.length,r.numberActiveTouches===1))for(var s=r.touchBank,o=0;o<s.length;o++){var u=s[o];if(u!=null&&u.touchActive){r.indexOfSingleActiveTouch=o;break}}}get touchHistory(){return this._touchHistory}}var z1={},R_=["onStartShouldSetResponderCapture","onStartShouldSetResponder",{bubbles:!0}],A_=["onMoveShouldSetResponderCapture","onMoveShouldSetResponder",{bubbles:!0}],H1=["onScrollShouldSetResponderCapture","onScrollShouldSetResponder",{bubbles:!1}],G1={touchstart:R_,mousedown:R_,touchmove:A_,mousemove:A_,scroll:H1},Sp={id:null,idPath:null,node:null},$c=new Map,ba=!1,pr=0,gr={id:null,node:null,idPath:null},xp=new B1;function Tl(n){gr=n}function Rl(n){var e=$c.get(n);return e??z1}function lh(n){var e=n.type,t=n.target;if(e==="touchstart"&&(ba=!0),(e==="touchmove"||pr>1)&&(ba=!1),!(e==="mousedown"&&ba||e==="mousemove"&&ba||e==="mousemove"&&pr<1)){if(ba&&e==="mouseup"){pr===0&&(ba=!1);return}var r=$S(e)&&D1(n),s=XS(e),o=qS(e),u=E1(e),d=b1(e),f=WS(n,xp);(r||s||o)&&(n.touches?pr=n.touches.length:r?pr=1:o&&(pr=0),xp.recordTouchTrack(e,f.nativeEvent));var h=C1(n),g=!1,m;if(r||s||u&&pr>0){var v=gr.idPath,x=h.idPath;if(v!=null&&x!=null){var M=P1(v,x);if(M!=null){var R=x.indexOf(M),y=R+(M===gr.id?1:0);h={idPath:x.slice(y),nodePath:h.nodePath.slice(y)}}else h=null}h!=null&&(m=V1(h,n,f),m!=null&&(W1(f,m),g=!0))}if(gr.id!=null&&gr.node!=null){var S=gr,w=S.id,N=S.node,L=Rl(w),U=L.onResponderStart,D=L.onResponderMove,b=L.onResponderEnd,P=L.onResponderRelease,G=L.onResponderTerminate,O=L.onResponderTerminationRequest;if(f.bubbles=!1,f.cancelable=!1,f.currentTarget=N,r)U!=null&&(f.dispatchConfig.registrationName="onResponderStart",U(f));else if(s)D!=null&&(f.dispatchConfig.registrationName="onResponderMove",D(f));else{var B=YS(e)||e==="contextmenu"||e==="blur"&&t===window||e==="blur"&&t.contains(N)&&n.relatedTarget!==N||u&&pr===0||u&&t.contains(N)&&t!==N||d&&I1(n),V=o&&!B&&!L1(N,n.touches);if(o&&b!=null&&(f.dispatchConfig.registrationName="onResponderEnd",b(f)),V&&(P!=null&&(f.dispatchConfig.registrationName="onResponderRelease",P(f)),Tl(Sp)),B){var q=!0;(e==="contextmenu"||e==="scroll"||e==="selectionchange")&&(g?q=!1:O!=null&&(f.dispatchConfig.registrationName="onResponderTerminationRequest",O(f)===!1&&(q=!1))),q&&(G!=null&&(f.dispatchConfig.registrationName="onResponderTerminate",G(f)),Tl(Sp),ba=!1,pr=0)}}}}}function V1(n,e,t){var r=G1[e.type];if(r!=null){for(var s=n.idPath,o=n.nodePath,u=r[0],d=r[1],f=r[2].bubbles,h=function(D,b,P){var G=Rl(D),O=G[P];if(O!=null&&(t.currentTarget=b,O(t)===!0)){var B=s.slice(s.indexOf(D));return{id:D,node:b,idPath:B}}},g=s.length-1;g>=0;g--){var m=s[g],v=o[g],x=h(m,v,u);if(x!=null)return x;if(t.isPropagationStopped()===!0)return}if(f)for(var M=0;M<s.length;M++){var R=s[M],y=o[M],S=h(R,y,d);if(S!=null)return S;if(t.isPropagationStopped()===!0)return}else{var w=s[0],N=o[0],L=e.target;if(L===N)return h(w,N,d)}}}function W1(n,e){var t=gr,r=t.id,s=t.node,o=e.id,u=e.node,d=Rl(o),f=d.onResponderGrant,h=d.onResponderReject;if(n.bubbles=!1,n.cancelable=!1,n.currentTarget=u,r==null)f!=null&&(n.currentTarget=u,n.dispatchConfig.registrationName="onResponderGrant",f(n)),Tl(e);else{var g=Rl(r),m=g.onResponderTerminate,v=g.onResponderTerminationRequest,x=!0;v!=null&&(n.currentTarget=s,n.dispatchConfig.registrationName="onResponderTerminationRequest",v(n)===!1&&(x=!1)),x?(m!=null&&(n.currentTarget=s,n.dispatchConfig.registrationName="onResponderTerminate",m(n)),f!=null&&(n.currentTarget=u,n.dispatchConfig.registrationName="onResponderGrant",f(n)),Tl(e)):h!=null&&(n.currentTarget=u,n.dispatchConfig.registrationName="onResponderReject",h(n))}}var $1=["blur","scroll"],X1=["mousedown","mousemove","mouseup","dragstart","touchstart","touchmove","touchend","touchcancel","contextmenu","select","selectionchange"];function q1(){xi&&window.__reactResponderSystemActive==null&&(window.addEventListener("blur",lh),X1.forEach(n=>{document.addEventListener(n,lh)}),$1.forEach(n=>{document.addEventListener(n,lh,!0)}),window.__reactResponderSystemActive=!0)}function Y1(n,e,t){A1(e,n),$c.set(n,t)}function C_(n){gr.id===n&&K1(),$c.has(n)&&$c.delete(n)}function K1(){var n=gr,e=n.id,t=n.node;if(e!=null&&t!=null){var r=Rl(e),s=r.onResponderTerminate;if(s!=null){var o=WS({},xp);o.currentTarget=t,s(o)}Tl(Sp)}ba=!1,pr=0}function Z1(){return gr.node}var j1={},J1=0;function Q1(n){var e=lt.useRef(null);return e.current==null&&(e.current=n()),e.current}function JS(n,e){e===void 0&&(e=j1);var t=Q1(()=>J1++),r=lt.useRef(!1);lt.useEffect(()=>(q1(),()=>{C_(t)}),[t]),lt.useEffect(()=>{var s=e,o=s.onMoveShouldSetResponder,u=s.onMoveShouldSetResponderCapture,d=s.onScrollShouldSetResponder,f=s.onScrollShouldSetResponderCapture,h=s.onSelectionChangeShouldSetResponder,g=s.onSelectionChangeShouldSetResponderCapture,m=s.onStartShouldSetResponder,v=s.onStartShouldSetResponderCapture,x=o!=null||u!=null||d!=null||f!=null||h!=null||g!=null||m!=null||v!=null,M=n.current;x?(Y1(t,M,e),r.current=!0):r.current&&(C_(t),r.current=!1)},[e,n,t]),lt.useDebugValue({isResponder:n.current===Z1()}),lt.useDebugValue(e)}var eR=["hrefAttrs","onLayout","onMoveShouldSetResponder","onMoveShouldSetResponderCapture","onResponderEnd","onResponderGrant","onResponderMove","onResponderReject","onResponderRelease","onResponderStart","onResponderTerminate","onResponderTerminationRequest","onScrollShouldSetResponder","onScrollShouldSetResponderCapture","onSelectionChangeShouldSetResponder","onSelectionChangeShouldSetResponderCapture","onStartShouldSetResponder","onStartShouldSetResponderCapture"],tR=Object.assign({},DS,NS,OS,US,FS,kS,BS,zS,{href:!0,lang:!0,onScroll:!0,onWheel:!0,pointerEvents:!0}),nR=n=>HS(n,tR),Al=lt.forwardRef((n,e)=>{var t=n.hrefAttrs,r=n.onLayout,s=n.onMoveShouldSetResponder,o=n.onMoveShouldSetResponderCapture,u=n.onResponderEnd,d=n.onResponderGrant,f=n.onResponderMove,h=n.onResponderReject,g=n.onResponderRelease,m=n.onResponderStart,v=n.onResponderTerminate,x=n.onResponderTerminationRequest,M=n.onScrollShouldSetResponder,R=n.onScrollShouldSetResponderCapture,y=n.onSelectionChangeShouldSetResponder,S=n.onSelectionChangeShouldSetResponderCapture,w=n.onStartShouldSetResponder,N=n.onStartShouldSetResponderCapture,L=ms(n,eR),U=lt.useContext(Vc),D=lt.useRef(null),b=PS(),P=b.direction;GS(D,r),JS(D,{onMoveShouldSetResponder:s,onMoveShouldSetResponderCapture:o,onResponderEnd:u,onResponderGrant:d,onResponderMove:f,onResponderReject:h,onResponderRelease:g,onResponderStart:m,onResponderTerminate:v,onResponderTerminationRequest:x,onScrollShouldSetResponder:M,onScrollShouldSetResponderCapture:R,onSelectionChangeShouldSetResponder:y,onSelectionChangeShouldSetResponderCapture:S,onStartShouldSetResponder:w,onStartShouldSetResponderCapture:N});var G="div",O=n.lang!=null?Mm(n.lang):null,B=n.dir||O,V=B||P,q=nR(L);if(q.dir=B,q.style=[P_.view$raw,U&&P_.inline,n.style],n.href!=null&&(G="a",t!=null)){var k=t.download,ie=t.rel,te=t.target;k!=null&&(q.download=k),ie!=null&&(q.rel=ie),typeof te=="string"&&(q.target=te.charAt(0)!=="_"?"_"+te:te)}var ee=VS(q),J=bm(D,ee,e);return q.ref=J,Em(G,q,{writingDirection:V})});Al.displayName="View";var P_=Er.create({view$raw:{alignItems:"stretch",backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",display:"flex",flexBasis:"auto",flexDirection:"column",flexShrink:0,listStyle:"none",margin:0,minHeight:0,minWidth:0,padding:0,position:"relative",textDecoration:"none",zIndex:0},inline:{display:"inline-flex"}}),iR=["aria-label","accessibilityLabel","blurRadius","defaultSource","draggable","onError","onLayout","onLoad","onLoadEnd","onLoadStart","pointerEvents","source","style"],rR="ERRORED",uh="LOADED",L_="LOADING",aR="IDLE",sR=0,oR=/^(data:image\/svg\+xml;utf8,)(.*)/;function lR(n,e){return n&&e!=null?lt.createElement("svg",{style:{position:"absolute",height:0,visibility:"hidden",width:0}},lt.createElement("defs",null,lt.createElement("filter",{id:"tint-"+e,suppressHydrationWarning:!0},lt.createElement("feFlood",{floodColor:""+n,key:n}),lt.createElement("feComposite",{in2:"SourceAlpha",operator:"in"})))):null}function uR(n,e,t,r){var s=Er.flatten(n),o=s.filter,u=s.resizeMode,d=s.shadowOffset,f=s.tintColor;s.resizeMode,s.tintColor;var h=[],g=null;if(o&&h.push(o),e&&h.push("blur("+e+"px)"),d){var m=MS(s);m&&h.push("drop-shadow("+m+")")}return(r||f)&&t!=null&&h.push("url(#tint-"+t+")"),h.length>0&&(g=h.join(" ")),[u,g,f]}function cR(n){if(typeof n=="number"){var e=LS(n),t=e.height,r=e.width;return{height:t,width:r}}else if(n!=null&&!Array.isArray(n)&&typeof n=="object"){var s=n.height,o=n.width;return{height:s,width:o}}}function ch(n){var e=null;if(typeof n=="number"){var t=LS(n);if(t==null)throw new Error('Image: asset with ID "'+n+'" could not be found. Please check the image source or packager.');var r=t.scales[0];if(t.scales.length>1){var s=_l.get();r=t.scales.reduce((g,m)=>Math.abs(m-s)<Math.abs(g-s)?m:g)}var o=r!==1?"@"+r+"x":"";e=t?t.httpServerLocation+"/"+t.name+o+"."+t.type:""}else typeof n=="string"?e=n:n&&typeof n.uri=="string"&&(e=n.uri);if(e){var u=e.match(oR);if(u){var d=u[1],f=u[2],h=encodeURIComponent(f);return""+d+h}}return e}var QS=lt.forwardRef((n,e)=>{var t=n["aria-label"],r=n.accessibilityLabel,s=n.blurRadius,o=n.defaultSource,u=n.draggable,d=n.onError,f=n.onLayout,h=n.onLoad,g=n.onLoadEnd,m=n.onLoadStart,v=n.pointerEvents,x=n.source,M=n.style,R=ms(n,iR),y=t||r,S=lt.useState(()=>{var Ae=ch(x);if(Ae!=null){var ve=yr.has(Ae);if(ve)return uh}return aR}),w=S[0],N=S[1],L=lt.useState({}),U=L[0],D=L[1],b=lt.useContext(Vc),P=lt.useRef(null),G=lt.useRef(sR++),O=lt.useRef(null),B=w===uh||w===L_&&o==null,V=uR(M,s,G.current,n.tintColor),q=V[0],k=V[1],ie=V[2],te=n.resizeMode||q||"cover",ee=n.tintColor||ie,J=B?x:o,Y=ch(J),j=cR(J),F=Y?'url("'+Y+'")':null,Q=re(),Ce=Y?Em("img",{alt:y||"",style:Jo.accessibilityImage$raw,draggable:u||!1,ref:P,src:Y}):null;function re(){if(P.current!=null&&(te==="center"||te==="repeat")){var Ae=P.current,ve=Ae.naturalHeight,He=Ae.naturalWidth,ft=U.height,Xe=U.width;if(ve&&He&&ft&&Xe){var gt=Math.min(1,Xe/He,ft/ve),yt=Math.ceil(gt*He),ot=Math.ceil(gt*ve);return yt+"px "+ot+"px"}}}function Se(Ae){if(te==="center"||te==="repeat"||f){var ve=Ae.nativeEvent.layout;f&&f(Ae),D(ve)}}var Ee=ch(x);return lt.useEffect(()=>{Ae(),Ee!=null&&(N(L_),m&&m(),O.current=yr.load(Ee,function(He){N(uh),h&&h(He),g&&g()},function(){N(rR),d&&d({nativeEvent:{error:"Failed to load resource "+Ee}}),g&&g()}));function Ae(){O.current!=null&&(yr.abort(O.current),O.current=null)}return Ae},[Ee,O,N,d,h,g,m]),lt.createElement(Al,zc({},R,{"aria-label":y,onLayout:Se,pointerEvents:v,ref:e,style:[Jo.root,b&&Jo.inline,j,M,Jo.undo,{boxShadow:null}]}),lt.createElement(Al,{style:[Jo.image,dR[te],{backgroundImage:F,filter:k},Q!=null&&{backgroundSize:Q}],suppressHydrationWarning:!0}),Ce,lR(ee,G.current))});QS.displayName="Image";var ad=QS;ad.getSize=function(n,e,t){yr.getSize(n,e,t)};ad.prefetch=function(n){return yr.prefetch(n)};ad.queryCache=function(n){return yr.queryCache(n)};var Jo=Er.create({root:{flexBasis:"auto",overflow:"hidden",zIndex:0},inline:{display:"inline-flex"},undo:{blurRadius:null,shadowColor:null,shadowOpacity:null,shadowOffset:null,shadowRadius:null,tintColor:null,overlayColor:null,resizeMode:null},image:Di(Di({},Er.absoluteFillObject),{},{backgroundColor:"transparent",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100%",width:"100%",zIndex:-1}),accessibilityImage$raw:Di(Di({},Er.absoluteFillObject),{},{height:"100%",opacity:0,width:"100%",zIndex:-1})}),dR=Er.create({center:{backgroundSize:"auto"},contain:{backgroundSize:"contain"},cover:{backgroundSize:"cover"},none:{backgroundPosition:"0",backgroundSize:"auto"},repeat:{backgroundPosition:"0",backgroundRepeat:"repeat",backgroundSize:"auto"},stretch:{backgroundSize:"100% 100%"}}),fR=()=>{};function hR(){var n=!1;if(xi)try{var e={};Object.defineProperty(e,"passive",{get(){return n=!0,!1}}),window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}return n}var pR=hR();function mR(n){return n==null?!1:pR?n:!!n.capture}function gR(){return this.cancelBubble}function vR(){return this.defaultPrevented}function _R(n){return n.nativeEvent=n,n.persist=fR,n.isDefaultPrevented=vR,n.isPropagationStopped=gR,n}function kn(n,e,t,r){var s=mR(r),o=u=>t(_R(u));return n.addEventListener(e,o,s),function(){n!=null&&n.removeEventListener(e,o,s)}}var yR=()=>typeof window<"u"&&window.PointerEvent!=null,ji="keyboard",Qn="keyboard",dl,fl,hl=!1,SR=new Set,Sl="keyboard",Qo="mouse",dh="touch",xR="blur",ex="contextmenu",MR="focus",ER="keydown",tx="mousedown",nx="mousemove",ix="mouseup",rx="pointerdown",ax="pointermove",sx="scroll",ox="selectionchange",lx="touchcancel",ux="touchmove",cx="touchstart",bR="visibilitychange",I_={passive:!0},fi={capture:!0,passive:!0};function dx(){(dl!=null||fl!=null)&&(dl!=null&&(Qn=dl,dl=null),fl!=null&&(ji=fl,fl=null),Aa())}function wR(){dl=Qn,fl=ji,ji=Sl,Qn=Sl,Aa(),hl=!1}function TR(){dx()}function RR(n){n.metaKey||n.altKey||n.ctrlKey||Qn!==Sl&&(Qn=Sl,ji=Sl,Aa())}function AR(){document.visibilityState!=="hidden"&&dx()}function Xi(n){var e=n.type;if(yR()){if(e===rx){ji!==n.pointerType&&(Qn=n.pointerType,ji=n.pointerType,Aa());return}if(e===ax){Qn!==n.pointerType&&(Qn=n.pointerType,Aa());return}}else{if(hl||(e===tx&&ji!==Qo&&(Qn=Qo,ji=Qo,Aa()),e===nx&&Qn!==Qo&&(Qn=Qo,Aa())),e===cx){hl=!0,n.touches&&n.touches.length>1&&(hl=!1),ji!==dh&&(Qn=dh,ji=dh,Aa());return}(e===ex||e===ix||e===ox||e===sx||e===lx||e===ux)&&(hl=!1)}}xi&&(kn(window,xR,wR,I_),kn(window,MR,TR,I_),kn(document,ER,RR,fi),kn(document,bR,AR,fi),kn(document,rx,Xi,fi),kn(document,ax,Xi,fi),kn(document,ex,Xi,fi),kn(document,tx,Xi,fi),kn(document,nx,Xi,fi),kn(document,ix,Xi,fi),kn(document,lx,Xi,fi),kn(document,ux,Xi,fi),kn(document,cx,Xi,fi),kn(document,ox,Xi,fi),kn(document,sx,Xi,fi));function Aa(){var n={activeModality:ji,modality:Qn};SR.forEach(e=>{e(n)})}function CR(){return Qn}function el(n,e){var t=yp(()=>new Map),r=yp(()=>(s,o)=>{var u=t.get(s);u!=null&&u(),o==null&&(t.delete(s),o=()=>{});var d=kn(s,n,o,e);return t.set(s,d),d});return Wc(()=>()=>{t.forEach(s=>{s()}),t.clear()},[t]),r}var PR={},tl={passive:!0},D_="react-gui:hover:lock",N_="react-gui:hover:unlock",LR=()=>typeof window<"u"&&window.PointerEvent!=null;function O_(n,e,t){var r=document.createEvent("CustomEvent"),s=PR,o=s.bubbles,u=o===void 0?!0:o,d=s.cancelable,f=d===void 0?!0:d,h=s.detail;r.initCustomEvent(e,u,f,h),n.dispatchEvent(r)}function fh(n){var e=n.pointerType;return e??CR()}function IR(n,e){var t=e.contain,r=e.disabled,s=e.onHoverStart,o=e.onHoverChange,u=e.onHoverUpdate,d=e.onHoverEnd,f=LR(),h=el(f?"pointermove":"mousemove",tl),g=el(f?"pointerenter":"mouseenter",tl),m=el(f?"pointerleave":"mouseleave",tl),v=el(D_,tl),x=el(N_,tl);Wc(()=>{var M=n.current;if(M!==null){var R=function(U){d!=null&&d(U),o!=null&&o(!1),h(M,null),m(M,null)},y=function(U){var D=n.current;D!=null&&fh(U)!=="touch"&&(t&&O_(D,N_),R(U))},S=function(U){fh(U)!=="touch"&&u!=null&&(U.x==null&&(U.x=U.clientX),U.y==null&&(U.y=U.clientY),u(U))},w=function(U){s!=null&&s(U),o!=null&&o(!0),u!=null&&h(M,r?null:S),m(M,r?null:y)},N=function(U){var D=n.current;if(D!=null&&fh(U)!=="touch"){t&&O_(D,D_),w(U);var b=function(O){O.target!==D&&R(U)},P=function(O){O.target!==D&&w(U)};v(D,r?null:b),x(D,r?null:P)}};g(M,r?null:N)}},[g,h,m,v,x,t,r,s,o,u,d,n])}var U_="DELAY",Zi="ERROR",F_="LONG_PRESS_DETECTED",Wn="NOT_RESPONDER",co="RESPONDER_ACTIVE_LONG_PRESS_START",sd="RESPONDER_ACTIVE_PRESS_START",Mp="RESPONDER_INACTIVE_PRESS_START",DR="RESPONDER_GRANT",Lc="RESPONDER_RELEASE",fx="RESPONDER_TERMINATED",k_=Object.freeze({NOT_RESPONDER:{DELAY:Zi,RESPONDER_GRANT:Mp,RESPONDER_RELEASE:Zi,RESPONDER_TERMINATED:Zi,LONG_PRESS_DETECTED:Zi},RESPONDER_INACTIVE_PRESS_START:{DELAY:sd,RESPONDER_GRANT:Zi,RESPONDER_RELEASE:Wn,RESPONDER_TERMINATED:Wn,LONG_PRESS_DETECTED:Zi},RESPONDER_ACTIVE_PRESS_START:{DELAY:Zi,RESPONDER_GRANT:Zi,RESPONDER_RELEASE:Wn,RESPONDER_TERMINATED:Wn,LONG_PRESS_DETECTED:co},RESPONDER_ACTIVE_LONG_PRESS_START:{DELAY:Zi,RESPONDER_GRANT:Zi,RESPONDER_RELEASE:Wn,RESPONDER_TERMINATED:Wn,LONG_PRESS_DETECTED:co},ERROR:{DELAY:Wn,RESPONDER_GRANT:Mp,RESPONDER_RELEASE:Wn,RESPONDER_TERMINATED:Wn,LONG_PRESS_DETECTED:Wn}}),hx=n=>n.getAttribute("role"),Ep=n=>n.tagName.toLowerCase(),B_=n=>n===sd||n===co,Ic=n=>hx(n)==="button",z_=n=>n===Mp||n===sd||n===co,NR=n=>n===fx||n===Lc,H_=n=>{var e=n.key,t=n.target,r=e===" "||e==="Spacebar",s=Ep(t)==="button"||Ic(t);return e==="Enter"||r&&s},OR=450,UR=50;class FR{constructor(e){this._eventHandlers=null,this._isPointerTouch=!1,this._longPressDelayTimeout=null,this._longPressDispatched=!1,this._pressDelayTimeout=null,this._pressOutDelayTimeout=null,this._touchState=Wn,this._responderElement=null,this.configure(e)}configure(e){this._config=e}reset(){this._cancelLongPressDelayTimeout(),this._cancelPressDelayTimeout(),this._cancelPressOutDelayTimeout()}getEventHandlers(){return this._eventHandlers==null&&(this._eventHandlers=this._createEventHandlers()),this._eventHandlers}_createEventHandlers(){var e=(s,o)=>{s.persist(),this._cancelPressOutDelayTimeout(),this._longPressDispatched=!1,this._selectionTerminated=!1,this._touchState=Wn,this._isPointerTouch=s.nativeEvent.type==="touchstart",this._receiveSignal(DR,s);var u=hh(this._config.delayPressStart,0,UR);o!==!1&&u>0?this._pressDelayTimeout=setTimeout(()=>{this._receiveSignal(U_,s)},u):this._receiveSignal(U_,s);var d=hh(this._config.delayLongPress,10,OR);this._longPressDelayTimeout=setTimeout(()=>{this._handleLongPress(s)},d+u)},t=s=>{this._receiveSignal(Lc,s)},r=s=>{var o=this._config.onPress,u=s.target;if(this._touchState!==Wn&&H_(s)){t(s),document.removeEventListener("keyup",r);var d=u.getAttribute("role"),f=Ep(u),h=d==="link"||f==="a"||f==="button"||f==="input"||f==="select"||f==="textarea",g=this._responderElement===u;o!=null&&!h&&g&&o(s),this._responderElement=null}};return{onStartShouldSetResponder:s=>{var o=this._config.disabled;return o&&Ic(s.currentTarget)&&s.stopPropagation(),o==null?!0:!o},onKeyDown:s=>{var o=this._config.disabled,u=s.key,d=s.target;if(!o&&H_(s)){this._touchState===Wn&&(e(s,!1),this._responderElement=d,document.addEventListener("keyup",r));var f=u===" "||u==="Spacebar",h=hx(d),g=h==="button"||h==="menuitem";f&&g&&Ep(d)!=="button"&&s.preventDefault(),s.stopPropagation()}},onResponderGrant:s=>e(s),onResponderMove:s=>{this._config.onPressMove!=null&&this._config.onPressMove(s);var o=G_(s);if(this._touchActivatePosition!=null){var u=this._touchActivatePosition.pageX-o.pageX,d=this._touchActivatePosition.pageY-o.pageY;Math.hypot(u,d)>10&&this._cancelLongPressDelayTimeout()}},onResponderRelease:s=>t(s),onResponderTerminate:s=>{s.nativeEvent.type==="selectionchange"&&(this._selectionTerminated=!0),this._receiveSignal(fx,s)},onResponderTerminationRequest:s=>{var o=this._config,u=o.cancelable,d=o.disabled,f=o.onLongPress;return!d&&f!=null&&this._isPointerTouch&&s.nativeEvent.type==="contextmenu"?!1:u??!0},onClick:s=>{var o=this._config,u=o.disabled,d=o.onPress;u?Ic(s.currentTarget)&&s.stopPropagation():(s.stopPropagation(),this._longPressDispatched||this._selectionTerminated?s.preventDefault():d!=null&&s.altKey===!1&&d(s))},onContextMenu:s=>{var o=this._config,u=o.disabled,d=o.onLongPress;u?Ic(s.currentTarget)&&s.stopPropagation():d!=null&&this._isPointerTouch&&!s.defaultPrevented&&(s.preventDefault(),s.stopPropagation())}}}_receiveSignal(e,t){var r=this._touchState,s=null;k_[r]!=null&&(s=k_[r][e]),!(this._touchState===Wn&&e===Lc)&&(s==null||s===Zi?console.error("PressResponder: Invalid signal "+e+" for state "+r+" on responder"):r!==s&&(this._performTransitionSideEffects(r,s,e,t),this._touchState=s))}_performTransitionSideEffects(e,t,r,s){if(NR(r)&&(setTimeout(()=>{this._isPointerTouch=!1},0),this._touchActivatePosition=null,this._cancelLongPressDelayTimeout()),z_(e)&&r===F_){var o=this._config.onLongPress;o!=null&&s.nativeEvent.key==null&&(o(s),this._longPressDispatched=!0)}var u=B_(e),d=B_(t);if(!u&&d?this._activate(s):u&&!d&&this._deactivate(s),z_(e)&&r===Lc){var f=this._config,h=f.onLongPress,g=f.onPress;if(g!=null){var m=h!=null&&e===co;m||!d&&!u&&(this._activate(s),this._deactivate(s))}}this._cancelPressDelayTimeout()}_activate(e){var t=this._config,r=t.onPressChange,s=t.onPressStart,o=G_(e);this._touchActivatePosition={pageX:o.pageX,pageY:o.pageY},s!=null&&s(e),r!=null&&r(!0)}_deactivate(e){var t=this._config,r=t.onPressChange,s=t.onPressEnd;function o(){s!=null&&s(e),r!=null&&r(!1)}var u=hh(this._config.delayPressEnd);u>0?this._pressOutDelayTimeout=setTimeout(()=>{o()},u):o()}_handleLongPress(e){(this._touchState===sd||this._touchState===co)&&this._receiveSignal(F_,e)}_cancelLongPressDelayTimeout(){this._longPressDelayTimeout!=null&&(clearTimeout(this._longPressDelayTimeout),this._longPressDelayTimeout=null)}_cancelPressDelayTimeout(){this._pressDelayTimeout!=null&&(clearTimeout(this._pressDelayTimeout),this._pressDelayTimeout=null)}_cancelPressOutDelayTimeout(){this._pressOutDelayTimeout!=null&&(clearTimeout(this._pressOutDelayTimeout),this._pressOutDelayTimeout=null)}}function hh(n,e,t){return e===void 0&&(e=0),t===void 0&&(t=0),Math.max(e,n??t)}function G_(n){var e=n.nativeEvent,t=e.changedTouches,r=e.touches;return r!=null&&r.length>0?r[0]:t!=null&&t.length>0?t[0]:n.nativeEvent}function kR(n,e){var t=lt.useRef(null);t.current==null&&(t.current=new FR(e));var r=t.current;return lt.useEffect(()=>{r.configure(e)},[e,r]),lt.useEffect(()=>()=>{r.reset()},[r]),lt.useDebugValue(e),r.getEventHandlers()}var BR=["children","delayLongPress","delayPressIn","delayPressOut","disabled","onBlur","onContextMenu","onFocus","onHoverIn","onHoverOut","onKeyDown","onLongPress","onPress","onPressMove","onPressIn","onPressOut","style","tabIndex","testOnly_hovered","testOnly_pressed"];function zR(n,e){var t=n.children,r=n.delayLongPress,s=n.delayPressIn,o=n.delayPressOut,u=n.disabled,d=n.onBlur,f=n.onContextMenu,h=n.onFocus,g=n.onHoverIn,m=n.onHoverOut,v=n.onKeyDown,x=n.onLongPress,M=n.onPress,R=n.onPressMove,y=n.onPressIn,S=n.onPressOut,w=n.style,N=n.tabIndex,L=n.testOnly_hovered,U=n.testOnly_pressed,D=ms(n,BR),b=ph(L===!0),P=b[0],G=b[1],O=ph(!1),B=O[0],V=O[1],q=ph(U===!0),k=q[0],ie=q[1],te=lt.useRef(null),ee=bm(e,te),J=lt.useMemo(()=>({delayLongPress:r,delayPressStart:s,delayPressEnd:o,disabled:u,onLongPress:x,onPress:M,onPressChange:ie,onPressStart:y,onPressMove:R,onPressEnd:S}),[r,s,o,u,x,M,y,R,S,ie]),Y=kR(te,J),j=Y.onContextMenu,F=Y.onKeyDown;IR(te,{contain:!0,disabled:u,onHoverChange:G,onHoverStart:g,onHoverEnd:m});var Q={hovered:P,focused:B,pressed:k},Ce=lt.useCallback(ve=>{ve.nativeEvent.target===te.current&&(V(!1),d!=null&&d(ve))},[te,V,d]),re=lt.useCallback(ve=>{ve.nativeEvent.target===te.current&&(V(!0),h!=null&&h(ve))},[te,V,h]),Se=lt.useCallback(ve=>{j!=null&&j(ve),f!=null&&f(ve)},[f,j]),Ee=lt.useCallback(ve=>{F!=null&&F(ve),v!=null&&v(ve)},[v,F]),Ae;return N!==void 0?Ae=N:Ae=u?-1:0,lt.createElement(Al,zc({},D,Y,{"aria-disabled":u,onBlur:Ce,onContextMenu:Se,onFocus:re,onKeyDown:Ee,ref:ee,style:[u?V_.disabled:V_.active,typeof w=="function"?w(Q):w],tabIndex:Ae}),typeof t=="function"?t(Q):t)}function ph(n){var e=lt.useState(!1),t=e[0],r=e[1];return[t||n,r]}var V_=Er.create({active:{cursor:"pointer",touchAction:"manipulation"},disabled:{pointerEvents:"box-none"}}),px=lt.memo(lt.forwardRef(zR));px.displayName="Pressable";var HR=["hrefAttrs","numberOfLines","onClick","onLayout","onPress","onMoveShouldSetResponder","onMoveShouldSetResponderCapture","onResponderEnd","onResponderGrant","onResponderMove","onResponderReject","onResponderRelease","onResponderStart","onResponderTerminate","onResponderTerminationRequest","onScrollShouldSetResponder","onScrollShouldSetResponderCapture","onSelectionChangeShouldSetResponder","onSelectionChangeShouldSetResponderCapture","onStartShouldSetResponder","onStartShouldSetResponderCapture","selectable"],GR=Object.assign({},DS,NS,OS,US,FS,kS,BS,zS,{href:!0,lang:!0,pointerEvents:!0}),VR=n=>HS(n,GR),mx=lt.forwardRef((n,e)=>{var t=n.hrefAttrs,r=n.numberOfLines,s=n.onClick,o=n.onLayout,u=n.onPress,d=n.onMoveShouldSetResponder,f=n.onMoveShouldSetResponderCapture,h=n.onResponderEnd,g=n.onResponderGrant,m=n.onResponderMove,v=n.onResponderReject,x=n.onResponderRelease,M=n.onResponderStart,R=n.onResponderTerminate,y=n.onResponderTerminationRequest,S=n.onScrollShouldSetResponder,w=n.onScrollShouldSetResponderCapture,N=n.onSelectionChangeShouldSetResponder,L=n.onSelectionChangeShouldSetResponderCapture,U=n.onStartShouldSetResponder,D=n.onStartShouldSetResponderCapture,b=n.selectable,P=ms(n,HR),G=lt.useContext(Vc),O=lt.useRef(null),B=PS(),V=B.direction;GS(O,o),JS(O,{onMoveShouldSetResponder:d,onMoveShouldSetResponderCapture:f,onResponderEnd:h,onResponderGrant:g,onResponderMove:m,onResponderReject:v,onResponderRelease:x,onResponderStart:M,onResponderTerminate:R,onResponderTerminationRequest:y,onScrollShouldSetResponder:S,onScrollShouldSetResponderCapture:w,onSelectionChangeShouldSetResponder:N,onSelectionChangeShouldSetResponderCapture:L,onStartShouldSetResponder:U,onStartShouldSetResponderCapture:D});var q=lt.useCallback(Se=>{s!=null?s(Se):u!=null&&(Se.stopPropagation(),u(Se))},[s,u]),k=G?"span":"div",ie=n.lang!=null?Mm(n.lang):null,te=n.dir||ie,ee=te||V,J=VR(P);if(J.dir=te,G||(J.dir=te??"auto"),(s||u)&&(J.onClick=q),J.style=[r!=null&&r>1&&{WebkitLineClamp:r},G===!0?is.textHasAncestor$raw:is.text$raw,r===1&&is.textOneLine,r!=null&&r>1&&is.textMultiLine,n.style,b===!0&&is.selectable,b===!1&&is.notSelectable,u&&is.pressable],n.href!=null&&(k="a",t!=null)){var Y=t.download,j=t.rel,F=t.target;Y!=null&&(J.download=Y),j!=null&&(J.rel=j),typeof F=="string"&&(J.target=F.charAt(0)!=="_"?"_"+F:F)}var Q=VS(J),Ce=bm(O,Q,e);J.ref=Ce;var re=Em(k,J,{writingDirection:ee});return G?re:lt.createElement(Vc.Provider,{value:!0},re)});mx.displayName="Text";var W_={backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",color:"black",display:"inline",font:"14px System",listStyle:"none",margin:0,padding:0,position:"relative",textAlign:"start",textDecoration:"none",whiteSpace:"pre-wrap",wordWrap:"break-word"},is=Er.create({text$raw:W_,textHasAncestor$raw:Di(Di({},W_),{},{color:"inherit",font:"inherit",textAlign:"inherit",whiteSpace:"inherit"}),textOneLine:{maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",wordWrap:"normal"},textMultiLine:{display:"-webkit-box",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",WebkitBoxOrient:"vertical"},notSelectable:{userSelect:"none"},selectable:{userSelect:"text"},pressable:{cursor:"pointer"}});const bp=new Map,WR=new Set(["span","i","b","strong","small","em","label"]);function $R(n=""){const e=document.createElement("span").style;e.cssText=n;const t={};for(let r=0;r<e.length;r++){const s=e[r];if(s.startsWith("--"))continue;const o=s.replace(/-([a-z])/g,(d,f)=>f.toUpperCase()),u=e.getPropertyValue(s).trim();t[o]=/^-?\d+(?:\.\d+)?px$/.test(u)?Number.parseFloat(u):u}return t}function gx(n,e){const t={key:e};for(const r of n.attributes)if(r.name==="class")t.className=r.value;else if(r.name==="style")t.style=$R(r.value);else{if(r.name==="draggable"||r.name==="type"||r.name==="tabindex")continue;t[r.name]=r.value}return t}function XR(n){var r;const e=((r=n.className)==null?void 0:r.split(/\s+/).filter(Boolean))||[],t=Object.entries(n).filter(([s])=>s.startsWith("data-"));delete n.className;for(const[s]of t)delete n[s];return(e.length||t.length)&&(n.ref=s=>{if(s){e.length&&s.classList.add(...e);for(const[o,u]of t)s.setAttribute(o,u)}}),n}function vx(n,e="child"){if(n.nodeType===Node.TEXT_NODE)return n.textContent?n.textContent:null;if(n.nodeType!==Node.ELEMENT_NODE)return null;const t=n.tagName.toLowerCase(),r=XR(gx(n,e));if(t==="img")return r.source={uri:n.getAttribute("src")||""},n.hasAttribute("alt")&&(r.accessibilityLabel=n.getAttribute("alt")),delete r.src,delete r.alt,uo.createElement(ad,r);const s=n.querySelector("div, img, svg, button"),o=WR.has(t)&&!s?mx:Al,u=Array.from(n.childNodes).map((d,f)=>vx(d,`${e}-${f}`));return uo.createElement(o,r,...u)}function qR(n){var h;const e=gx(n),t=((h=e.className)==null?void 0:h.split(/\s+/).filter(Boolean))||[],r=Object.entries(e).filter(([g])=>g.startsWith("data-")),s=n.getAttribute("style")||"",o=document.createElement("span");o.className="rn-control-root",o.style.cssText=s,n.replaceWith(o);const u=hb.createRoot(o);bp.set(o,u);const d=Array.from(n.childNodes).map((g,m)=>vx(g,`button-${m}`)),f=n.hasAttribute("disabled");delete e.style,delete e.disabled,delete e.className;for(const[g]of r)delete e[g];e.ref=g=>{if(g){t.length&&g.classList.add(...t);for(const[m,v]of r)g.setAttribute(m,v)}},e.role=e.role||"button",e.accessibilityRole=e.role,e.disabled=f,e.onPress=()=>{var g;return(g=o.firstElementChild)==null?void 0:g.dispatchEvent(new CustomEvent("rnpress",{bubbles:!0}))},pb.flushSync(()=>u.render(uo.createElement(px,e,...d)))}function YR(n){for(const[e,t]of bp)(n===e||n.contains(e))&&(t.unmount(),bp.delete(e))}function _x(n){n.querySelectorAll("button").forEach(qR)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tm="187",KR=0,$_=1,ZR=2,Dc=1,yx=2,pl=3,cs=0,ii=1,vr=2,so=0,xl=1,X_=2,q_=3,Y_=4,jR=5,io=100,JR=101,QR=102,eA=103,tA=104,nA=200,iA=201,rA=202,aA=203,Sx=204,xx=205,sA=206,oA=207,lA=208,uA=209,cA=210,dA=211,fA=212,hA=213,pA=214,wp=0,Tp=1,Rp=2,Cl=3,Ap=4,Cp=5,Pp=6,Lp=7,Mx=0,mA=1,gA=2,Wr=0,Ex=1,bx=2,wx=3,Rm=4,Tx=5,Rx=6,Ax=7,Cx=300,fo=301,Pl=302,mh=303,gh=304,Xc=1e3,Gr=1001,Ip=1002,Cn=1003,vA=1004,sc=1005,ti=1006,vh=1007,Pa=1008,gi=1009,Px=1010,Lx=1011,Ll=1012,Am=1013,wr=1014,Sr=1015,Tr=1016,Cm=1017,Pm=1018,ho=1020,Ix=35902,Dx=35899,Nx=1021,Ox=1022,xr=1023,Na=1026,La=1027,Ux=1028,Lm=1029,ds=1030,Im=1031,Dm=1033,Nc=33776,Oc=33777,Uc=33778,Fc=33779,Dp=35840,Np=35841,Op=35842,Up=35843,Fp=36196,kp=37492,Bp=37496,zp=37488,Hp=37489,qc=37490,Gp=37491,Vp=37808,Wp=37809,$p=37810,Xp=37811,qp=37812,Yp=37813,Kp=37814,Zp=37815,jp=37816,Jp=37817,Qp=37818,em=37819,tm=37820,nm=37821,im=36492,rm=36494,am=36495,sm=36283,om=36284,Yc=36285,lm=36286,_A=3200,um=0,yA=1,Ca="",ei="srgb",Kc="srgb-linear",Zc="linear",kt="srgb",_h=7680,SA=519,xA=512,MA=513,EA=514,Fx=515,bA=516,wA=517,kx=518,Bx=519,TA=35044,K_="300 es",Qi=2e3,Il=2001;function RA(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function jc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function AA(){const n=jc("canvas");return n.style.display="block",n}const Z_={};function j_(...n){const e="THREE."+n.shift();console.log(e,...n)}function zx(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function dt(...n){n=zx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Nt(...n){n=zx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function kc(...n){const e=n.join(" ");e in Z_||(Z_[e]=!0,dt(...n))}function CA(n,e,t){return new Promise(function(r,s){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:r()}}setTimeout(o,t)})}const PA={[wp]:wp,[Rp]:Pp,[Ap]:Ap,[Cl]:Cp,[Tp]:Tp,[Pp]:Rp,[Lp]:Lp,[Cp]:Cl};class gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const s=r[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const s=r.slice(0);for(let o=0,u=s.length;o<u;o++)s[o].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yh=Math.PI/180,cm=180/Math.PI;function Ul(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function LA(n,e){return(n%e+e)%e}function Sh(n,e,t){return(1-t)*n+t*e}function IA(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Nm(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function DA(n,e){if(e.constructor===Float32Array)return n;const t=Nm(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function NA(n,e){if(e.constructor===Float32Array)return n;const t=Nm(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const cg=class cg{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,s=e.elements;return this.x=s[0]*t+s[3]*r+s[6],this.y=s[1]*t+s[4]*r+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),s=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*r-u*s+e.x,this.y=o*s+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cg.prototype.isVector2=!0;let bt=cg;class $r{constructor(e=0,t=0,r=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=s}static slerpFlat(e,t,r,s,o,u,d){let f=r[s+0],h=r[s+1],g=r[s+2],m=r[s+3],v=o[u+0],x=o[u+1],M=o[u+2],R=o[u+3];if(m!==R||f!==v||h!==x||g!==M){let y=f*v+h*x+g*M+m*R;y<0&&(v=-v,x=-x,M=-M,R=-R,y=-y);let S=1-d;if(y<.9995){const w=Math.acos(y),N=Math.sin(w);S=Math.sin(S*w)/N,d=Math.sin(d*w)/N,f=f*S+v*d,h=h*S+x*d,g=g*S+M*d,m=m*S+R*d}else{f=f*S+v*d,h=h*S+x*d,g=g*S+M*d,m=m*S+R*d;const w=1/Math.sqrt(f*f+h*h+g*g+m*m);f*=w,h*=w,g*=w,m*=w}}e[t]=f,e[t+1]=h,e[t+2]=g,e[t+3]=m}static multiplyQuaternionsFlat(e,t,r,s,o,u){const d=r[s],f=r[s+1],h=r[s+2],g=r[s+3],m=o[u],v=o[u+1],x=o[u+2],M=o[u+3];return e[t]=d*M+g*m+f*x-h*v,e[t+1]=f*M+g*v+h*m-d*x,e[t+2]=h*M+g*x+d*v-f*m,e[t+3]=g*M-d*m-f*v-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,s){return this._x=e,this._y=t,this._z=r,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,s=e._y,o=e._z,u=e._order,d=Math.cos,f=Math.sin,h=d(r/2),g=d(s/2),m=d(o/2),v=f(r/2),x=f(s/2),M=f(o/2);switch(u){case"XYZ":this._x=v*g*m+h*x*M,this._y=h*x*m-v*g*M,this._z=h*g*M+v*x*m,this._w=h*g*m-v*x*M;break;case"YXZ":this._x=v*g*m+h*x*M,this._y=h*x*m-v*g*M,this._z=h*g*M-v*x*m,this._w=h*g*m+v*x*M;break;case"ZXY":this._x=v*g*m-h*x*M,this._y=h*x*m+v*g*M,this._z=h*g*M+v*x*m,this._w=h*g*m-v*x*M;break;case"ZYX":this._x=v*g*m-h*x*M,this._y=h*x*m+v*g*M,this._z=h*g*M-v*x*m,this._w=h*g*m+v*x*M;break;case"YZX":this._x=v*g*m+h*x*M,this._y=h*x*m+v*g*M,this._z=h*g*M-v*x*m,this._w=h*g*m-v*x*M;break;case"XZY":this._x=v*g*m-h*x*M,this._y=h*x*m-v*g*M,this._z=h*g*M+v*x*m,this._w=h*g*m+v*x*M;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,s=Math.sin(r);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],s=t[4],o=t[8],u=t[1],d=t[5],f=t[9],h=t[2],g=t[6],m=t[10],v=r+d+m;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-f)*x,this._y=(o-h)*x,this._z=(u-s)*x}else if(r>d&&r>m){const x=2*Math.sqrt(1+r-d-m);this._w=(g-f)/x,this._x=.25*x,this._y=(s+u)/x,this._z=(o+h)/x}else if(d>m){const x=2*Math.sqrt(1+d-r-m);this._w=(o-h)/x,this._x=(s+u)/x,this._y=.25*x,this._z=(f+g)/x}else{const x=2*Math.sqrt(1+m-r-d);this._w=(u-s)/x,this._x=(o+h)/x,this._y=(f+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const s=Math.min(1,t/r);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,s=e._y,o=e._z,u=e._w,d=t._x,f=t._y,h=t._z,g=t._w;return this._x=r*g+u*d+s*h-o*f,this._y=s*g+u*f+o*d-r*h,this._z=o*g+u*h+r*f-s*d,this._w=u*g-r*d-s*f-o*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,s=e._y,o=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,s=-s,o=-o,u=-u,d=-d);let f=1-t;if(d<.9995){const h=Math.acos(d),g=Math.sin(h);f=Math.sin(f*h)/g,t=Math.sin(t*h)/g,this._x=this._x*f+r*t,this._y=this._y*f+s*t,this._z=this._z*f+o*t,this._w=this._w*f+u*t,this._onChangeCallback()}else this._x=this._x*f+r*t,this._y=this._y*f+s*t,this._z=this._z*f+o*t,this._w=this._w*f+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),s=Math.sqrt(1-r),o=Math.sqrt(r);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const dg=class dg{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(J_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(J_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6]*s,this.y=o[1]*t+o[4]*r+o[7]*s,this.z=o[2]*t+o[5]*r+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,s=this.z,o=e.elements,u=1/(o[3]*t+o[7]*r+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*r+o[8]*s+o[12])*u,this.y=(o[1]*t+o[5]*r+o[9]*s+o[13])*u,this.z=(o[2]*t+o[6]*r+o[10]*s+o[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,s=this.z,o=e.x,u=e.y,d=e.z,f=e.w,h=2*(u*s-d*r),g=2*(d*t-o*s),m=2*(o*r-u*t);return this.x=t+f*h+u*m-d*g,this.y=r+f*g+d*h-o*m,this.z=s+f*m+o*g-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*s,this.y=o[1]*t+o[5]*r+o[9]*s,this.z=o[2]*t+o[6]*r+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,s=e.y,o=e.z,u=t.x,d=t.y,f=t.z;return this.x=s*f-o*d,this.y=o*u-r*f,this.z=r*d-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return xh.copy(this).projectOnVector(e),this.sub(xh)}reflect(e){return this.sub(xh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,s=this.z-e.z;return t*t+r*r+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const s=Math.sin(t)*e;return this.x=s*Math.sin(r),this.y=Math.cos(t)*e,this.z=s*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};dg.prototype.isVector3=!0;let ue=dg;const xh=new ue,J_=new $r,fg=class fg{constructor(e,t,r,s,o,u,d,f,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,s,o,u,d,f,h)}set(e,t,r,s,o,u,d,f,h){const g=this.elements;return g[0]=e,g[1]=s,g[2]=d,g[3]=t,g[4]=o,g[5]=f,g[6]=r,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,s=t.elements,o=this.elements,u=r[0],d=r[3],f=r[6],h=r[1],g=r[4],m=r[7],v=r[2],x=r[5],M=r[8],R=s[0],y=s[3],S=s[6],w=s[1],N=s[4],L=s[7],U=s[2],D=s[5],b=s[8];return o[0]=u*R+d*w+f*U,o[3]=u*y+d*N+f*D,o[6]=u*S+d*L+f*b,o[1]=h*R+g*w+m*U,o[4]=h*y+g*N+m*D,o[7]=h*S+g*L+m*b,o[2]=v*R+x*w+M*U,o[5]=v*y+x*N+M*D,o[8]=v*S+x*L+M*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],s=e[2],o=e[3],u=e[4],d=e[5],f=e[6],h=e[7],g=e[8];return t*u*g-t*d*h-r*o*g+r*d*f+s*o*h-s*u*f}invert(){const e=this.elements,t=e[0],r=e[1],s=e[2],o=e[3],u=e[4],d=e[5],f=e[6],h=e[7],g=e[8],m=g*u-d*h,v=d*f-g*o,x=h*o-u*f,M=t*m+r*v+s*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/M;return e[0]=m*R,e[1]=(s*h-g*r)*R,e[2]=(d*r-s*u)*R,e[3]=v*R,e[4]=(g*t-s*f)*R,e[5]=(s*o-d*t)*R,e[6]=x*R,e[7]=(r*f-h*t)*R,e[8]=(u*t-r*o)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,s,o,u,d){const f=Math.cos(o),h=Math.sin(o);return this.set(r*f,r*h,-r*(f*u+h*d)+u+e,-s*h,s*f,-s*(-h*u+f*d)+d+t,0,0,1),this}scale(e,t){return kc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mh.makeScale(e,t)),this}rotate(e){return kc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mh.makeRotation(-e)),this}translate(e,t){return kc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let s=0;s<9;s++)if(t[s]!==r[s])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};fg.prototype.isMatrix3=!0;let pt=fg;const Mh=new pt,Q_=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ey=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OA(){const n={enabled:!0,workingColorSpace:Kc,spaces:{},convert:function(s,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===kt&&(s.r=Xr(s.r),s.g=Xr(s.g),s.b=Xr(s.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===kt&&(s.r=oo(s.r),s.g=oo(s.g),s.b=oo(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ca?Zc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,u){return s.copy(this.spaces[u].fromXYZ).multiply(this.spaces[o].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Kc]:{primaries:e,whitePoint:r,transfer:Zc,toXYZ:Q_,fromXYZ:ey,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:r,transfer:kt,toXYZ:Q_,fromXYZ:ey,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),n}const Tt=OA();function Xr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function oo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vs;class UA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Vs===void 0&&(Vs=jc("canvas")),Vs.width=e.width,Vs.height=e.height;const s=Vs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),r=Vs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const s=r.getImageData(0,0,e.width,e.height),o=s.data;for(let u=0;u<o.length;u++)o[u]=Xr(o[u]/255)*255;return r.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Xr(t[r]/255)*255):t[r]=Xr(t[r]);return{data:t,width:e.width,height:e.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FA=0;class Om{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:FA++}),this.uuid=Ul(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let u=0,d=s.length;u<d;u++)s[u].isDataTexture?o.push(Eh(s[u].image)):o.push(Eh(s[u]))}else o=Eh(s);r.url=o}return t||(e.images[this.uuid]=r),r}}function Eh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?UA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let kA=0;const bh=new ue;class Bn extends gs{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,r=Gr,s=Gr,o=ti,u=Pa,d=xr,f=gi,h=Bn.DEFAULT_ANISOTROPY,g=Ca){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kA++}),this.uuid=Ul(),this.name="",this.source=new Om(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=u,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=f,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(bh).x}get height(){return this.source.getSize(bh).y}get depth(){return this.source.getSize(bh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){dt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){dt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xc:e.x=e.x-Math.floor(e.x);break;case Gr:e.x=e.x<0?0:1;break;case Ip:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xc:e.y=e.y-Math.floor(e.y);break;case Gr:e.y=e.y<0?0:1;break;case Ip:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Cx;Bn.DEFAULT_ANISOTROPY=1;const hg=class hg{constructor(e=0,t=0,r=0,s=1){this.x=e,this.y=t,this.z=r,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,s){return this.x=e,this.y=t,this.z=r,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,s=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*s+u[12]*o,this.y=u[1]*t+u[5]*r+u[9]*s+u[13]*o,this.z=u[2]*t+u[6]*r+u[10]*s+u[14]*o,this.w=u[3]*t+u[7]*r+u[11]*s+u[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,s,o;const f=e.elements,h=f[0],g=f[4],m=f[8],v=f[1],x=f[5],M=f[9],R=f[2],y=f[6],S=f[10];if(Math.abs(g-v)<.01&&Math.abs(m-R)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(m+R)<.1&&Math.abs(M+y)<.1&&Math.abs(h+x+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(h+1)/2,L=(x+1)/2,U=(S+1)/2,D=(g+v)/4,b=(m+R)/4,P=(M+y)/4;return N>L&&N>U?N<.01?(r=0,s=.707106781,o=.707106781):(r=Math.sqrt(N),s=D/r,o=b/r):L>U?L<.01?(r=.707106781,s=0,o=.707106781):(s=Math.sqrt(L),r=D/s,o=P/s):U<.01?(r=.707106781,s=.707106781,o=0):(o=Math.sqrt(U),r=b/o,s=P/o),this.set(r,s,o,t),this}let w=Math.sqrt((y-M)*(y-M)+(m-R)*(m-R)+(v-g)*(v-g));return Math.abs(w)<.001&&(w=1),this.x=(y-M)/w,this.y=(m-R)/w,this.z=(v-g)/w,this.w=Math.acos((h+x+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hg.prototype.isVector4=!0;let rn=hg;class BA extends gs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];const s=r.count;for(let o=0;o<s;o++)this.textures[o]=new Bn({width:e,height:t,depth:r.depth}),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ti,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=r,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Om(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class br extends BA{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Hx extends Bn{constructor(e=null,t=1,r=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zA extends Bn{constructor(e=null,t=1,r=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const id=class id{constructor(e,t,r,s,o,u,d,f,h,g,m,v,x,M,R,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,s,o,u,d,f,h,g,m,v,x,M,R,y)}set(e,t,r,s,o,u,d,f,h,g,m,v,x,M,R,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=s,S[1]=o,S[5]=u,S[9]=d,S[13]=f,S[2]=h,S[6]=g,S[10]=m,S[14]=v,S[3]=x,S[7]=M,S[11]=R,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new id().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,s=1/Ws.setFromMatrixColumn(e,0).length(),o=1/Ws.setFromMatrixColumn(e,1).length(),u=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=r[0]*s,t[1]=r[1]*s,t[2]=r[2]*s,t[3]=0,t[4]=r[4]*o,t[5]=r[5]*o,t[6]=r[6]*o,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,s=e.y,o=e.z,u=Math.cos(r),d=Math.sin(r),f=Math.cos(s),h=Math.sin(s),g=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const v=u*g,x=u*m,M=d*g,R=d*m;t[0]=f*g,t[4]=-f*m,t[8]=h,t[1]=x+M*h,t[5]=v-R*h,t[9]=-d*f,t[2]=R-v*h,t[6]=M+x*h,t[10]=u*f}else if(e.order==="YXZ"){const v=f*g,x=f*m,M=h*g,R=h*m;t[0]=v+R*d,t[4]=M*d-x,t[8]=u*h,t[1]=u*m,t[5]=u*g,t[9]=-d,t[2]=x*d-M,t[6]=R+v*d,t[10]=u*f}else if(e.order==="ZXY"){const v=f*g,x=f*m,M=h*g,R=h*m;t[0]=v-R*d,t[4]=-u*m,t[8]=M+x*d,t[1]=x+M*d,t[5]=u*g,t[9]=R-v*d,t[2]=-u*h,t[6]=d,t[10]=u*f}else if(e.order==="ZYX"){const v=u*g,x=u*m,M=d*g,R=d*m;t[0]=f*g,t[4]=M*h-x,t[8]=v*h+R,t[1]=f*m,t[5]=R*h+v,t[9]=x*h-M,t[2]=-h,t[6]=d*f,t[10]=u*f}else if(e.order==="YZX"){const v=u*f,x=u*h,M=d*f,R=d*h;t[0]=f*g,t[4]=R-v*m,t[8]=M*m+x,t[1]=m,t[5]=u*g,t[9]=-d*g,t[2]=-h*g,t[6]=x*m+M,t[10]=v-R*m}else if(e.order==="XZY"){const v=u*f,x=u*h,M=d*f,R=d*h;t[0]=f*g,t[4]=-m,t[8]=h*g,t[1]=v*m+R,t[5]=u*g,t[9]=x*m-M,t[2]=M*m-x,t[6]=d*g,t[10]=R*m+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HA,e,GA)}lookAt(e,t,r){const s=this.elements;return hi.subVectors(e,t),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),ya.crossVectors(r,hi),ya.lengthSq()===0&&(Math.abs(r.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),ya.crossVectors(r,hi)),ya.normalize(),oc.crossVectors(hi,ya),s[0]=ya.x,s[4]=oc.x,s[8]=hi.x,s[1]=ya.y,s[5]=oc.y,s[9]=hi.y,s[2]=ya.z,s[6]=oc.z,s[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,s=t.elements,o=this.elements,u=r[0],d=r[4],f=r[8],h=r[12],g=r[1],m=r[5],v=r[9],x=r[13],M=r[2],R=r[6],y=r[10],S=r[14],w=r[3],N=r[7],L=r[11],U=r[15],D=s[0],b=s[4],P=s[8],G=s[12],O=s[1],B=s[5],V=s[9],q=s[13],k=s[2],ie=s[6],te=s[10],ee=s[14],J=s[3],Y=s[7],j=s[11],F=s[15];return o[0]=u*D+d*O+f*k+h*J,o[4]=u*b+d*B+f*ie+h*Y,o[8]=u*P+d*V+f*te+h*j,o[12]=u*G+d*q+f*ee+h*F,o[1]=g*D+m*O+v*k+x*J,o[5]=g*b+m*B+v*ie+x*Y,o[9]=g*P+m*V+v*te+x*j,o[13]=g*G+m*q+v*ee+x*F,o[2]=M*D+R*O+y*k+S*J,o[6]=M*b+R*B+y*ie+S*Y,o[10]=M*P+R*V+y*te+S*j,o[14]=M*G+R*q+y*ee+S*F,o[3]=w*D+N*O+L*k+U*J,o[7]=w*b+N*B+L*ie+U*Y,o[11]=w*P+N*V+L*te+U*j,o[15]=w*G+N*q+L*ee+U*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],s=e[8],o=e[12],u=e[1],d=e[5],f=e[9],h=e[13],g=e[2],m=e[6],v=e[10],x=e[14],M=e[3],R=e[7],y=e[11],S=e[15],w=f*x-h*v,N=d*x-h*m,L=d*v-f*m,U=u*x-h*g,D=u*v-f*g,b=u*m-d*g;return t*(R*w-y*N+S*L)-r*(M*w-y*U+S*D)+s*(M*N-R*U+S*b)-o*(M*L-R*D+y*b)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],s=e[8],o=e[1],u=e[5],d=e[9],f=e[2],h=e[6],g=e[10];return t*(u*g-d*h)-r*(o*g-d*f)+s*(o*h-u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],s=e[2],o=e[3],u=e[4],d=e[5],f=e[6],h=e[7],g=e[8],m=e[9],v=e[10],x=e[11],M=e[12],R=e[13],y=e[14],S=e[15],w=t*d-r*u,N=t*f-s*u,L=t*h-o*u,U=r*f-s*d,D=r*h-o*d,b=s*h-o*f,P=g*R-m*M,G=g*y-v*M,O=g*S-x*M,B=m*y-v*R,V=m*S-x*R,q=v*S-x*y,k=w*q-N*V+L*B+U*O-D*G+b*P;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ie=1/k;return e[0]=(d*q-f*V+h*B)*ie,e[1]=(s*V-r*q-o*B)*ie,e[2]=(R*b-y*D+S*U)*ie,e[3]=(v*D-m*b-x*U)*ie,e[4]=(f*O-u*q-h*G)*ie,e[5]=(t*q-s*O+o*G)*ie,e[6]=(y*L-M*b-S*N)*ie,e[7]=(g*b-v*L+x*N)*ie,e[8]=(u*V-d*O+h*P)*ie,e[9]=(r*O-t*V-o*P)*ie,e[10]=(M*D-R*L+S*w)*ie,e[11]=(m*L-g*D-x*w)*ie,e[12]=(d*G-u*B-f*P)*ie,e[13]=(t*B-r*G+s*P)*ie,e[14]=(R*N-M*U-y*w)*ie,e[15]=(g*U-m*N+v*w)*ie,this}scale(e){const t=this.elements,r=e.x,s=e.y,o=e.z;return t[0]*=r,t[4]*=s,t[8]*=o,t[1]*=r,t[5]*=s,t[9]*=o,t[2]*=r,t[6]*=s,t[10]*=o,t[3]*=r,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,s))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),s=Math.sin(t),o=1-r,u=e.x,d=e.y,f=e.z,h=o*u,g=o*d;return this.set(h*u+r,h*d-s*f,h*f+s*d,0,h*d+s*f,g*d+r,g*f-s*u,0,h*f-s*d,g*f+s*u,o*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,s,o,u){return this.set(1,r,o,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,r){const s=this.elements,o=t._x,u=t._y,d=t._z,f=t._w,h=o+o,g=u+u,m=d+d,v=o*h,x=o*g,M=o*m,R=u*g,y=u*m,S=d*m,w=f*h,N=f*g,L=f*m,U=r.x,D=r.y,b=r.z;return s[0]=(1-(R+S))*U,s[1]=(x+L)*U,s[2]=(M-N)*U,s[3]=0,s[4]=(x-L)*D,s[5]=(1-(v+S))*D,s[6]=(y+w)*D,s[7]=0,s[8]=(M+N)*b,s[9]=(y-w)*b,s[10]=(1-(v+R))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,r){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const o=this.determinantAffine();if(o===0)return r.set(1,1,1),t.identity(),this;let u=Ws.set(s[0],s[1],s[2]).length();const d=Ws.set(s[4],s[5],s[6]).length(),f=Ws.set(s[8],s[9],s[10]).length();o<0&&(u=-u),qi.copy(this);const h=1/u,g=1/d,m=1/f;return qi.elements[0]*=h,qi.elements[1]*=h,qi.elements[2]*=h,qi.elements[4]*=g,qi.elements[5]*=g,qi.elements[6]*=g,qi.elements[8]*=m,qi.elements[9]*=m,qi.elements[10]*=m,t.setFromRotationMatrix(qi),r.x=u,r.y=d,r.z=f,this}makePerspective(e,t,r,s,o,u,d=Qi,f=!1){const h=this.elements,g=2*o/(t-e),m=2*o/(r-s),v=(t+e)/(t-e),x=(r+s)/(r-s);let M,R;if(f)M=o/(u-o),R=u*o/(u-o);else if(d===Qi)M=-(u+o)/(u-o),R=-2*u*o/(u-o);else if(d===Il)M=-u/(u-o),R=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=m,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=R,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,s,o,u,d=Qi,f=!1){const h=this.elements,g=2/(t-e),m=2/(r-s),v=-(t+e)/(t-e),x=-(r+s)/(r-s);let M,R;if(f)M=1/(u-o),R=u/(u-o);else if(d===Qi)M=-2/(u-o),R=-(u+o)/(u-o);else if(d===Il)M=-1/(u-o),R=-o/(u-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=m,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=M,h[14]=R,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let s=0;s<16;s++)if(t[s]!==r[s])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};id.prototype.isMatrix4=!0;let Qt=id;const Ws=new ue,qi=new Qt,HA=new ue(0,0,0),GA=new ue(1,1,1),ya=new ue,oc=new ue,hi=new ue,ty=new Qt,ny=new $r;class qr{constructor(e=0,t=0,r=0,s=qr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,s=this._order){return this._x=e,this._y=t,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const s=e.elements,o=s[0],u=s[4],d=s[8],f=s[1],h=s[5],g=s[9],m=s[2],v=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-Rt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(d,o)):(this._x=Math.atan2(-g,x),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return ty.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ty,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ny.setFromEuler(this),this.setFromQuaternion(ny,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qr.DEFAULT_ORDER="XYZ";class Um{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let VA=0;const iy=new ue,$s=new $r,Ur=new Qt,lc=new ue,nl=new ue,WA=new ue,$A=new $r,ry=new ue(1,0,0),ay=new ue(0,1,0),sy=new ue(0,0,1),oy={type:"added"},XA={type:"removed"},Xs={type:"childadded",child:null},wh={type:"childremoved",child:null};class Pn extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VA++}),this.uuid=Ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new ue,t=new qr,r=new $r,s=new ue(1,1,1);function o(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(o),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qt},normalMatrix:{value:new pt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Um,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(ry,e)}rotateY(e){return this.rotateOnAxis(ay,e)}rotateZ(e){return this.rotateOnAxis(sy,e)}translateOnAxis(e,t){return iy.copy(e).applyQuaternion(this.quaternion),this.position.add(iy.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ry,e)}translateY(e){return this.translateOnAxis(ay,e)}translateZ(e){return this.translateOnAxis(sy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ur.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?lc.copy(e):lc.set(e,t,r);const s=this.parent;this.updateWorldMatrix(!0,!1),nl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ur.lookAt(nl,lc,this.up):Ur.lookAt(lc,nl,this.up),this.quaternion.setFromRotationMatrix(Ur),s&&(Ur.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(Ur),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oy),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(XA),wh.child=e,this.dispatchEvent(wh),wh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ur.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ur.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ur),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oy),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,s=this.children.length;r<s;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const s=this.children;for(let o=0,u=s.length;o<u;o++)s[o].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,e,WA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,$A,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,s=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*r-o[8]*s,o[13]+=r-o[1]*t-o[5]*r-o[9]*s,o[14]+=s-o[2]*t-o[6]*r-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const o=this.children;for(let u=0,d=o.length;u<d;u++)o[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(d=>({...d})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let h=0,g=f.length;h<g;h++){const m=f[h];o(e.shapes,m)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,h=this.material.length;f<h;f++)d.push(o(e.materials,this.material[f]));s.material=d}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let d=0;d<this.children.length;d++)s.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];s.animations.push(o(e.animations,f))}}if(t){const d=u(e.geometries),f=u(e.materials),h=u(e.textures),g=u(e.images),m=u(e.shapes),v=u(e.skeletons),x=u(e.animations),M=u(e.nodes);d.length>0&&(r.geometries=d),f.length>0&&(r.materials=f),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),m.length>0&&(r.shapes=m),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),M.length>0&&(r.nodes=M)}return r.object=s,r;function u(d){const f=[];for(const h in d){const g=d[h];delete g.metadata,f.push(g)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const s=e.children[r];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Pn.DEFAULT_UP=new ue(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ao extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qA={type:"move"};class Th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let s=null,o=null,u=null;const d=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const R of e.hand.values()){const y=t.getJointPose(R,r),S=this._getHandJoint(h,R);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const g=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],v=g.position.distanceTo(m.position),x=.02,M=.005;h.inputState.pinching&&v>x+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=x-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,r),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(s=t.getPose(e.targetRaySpace,r),s===null&&o!==null&&(s=o),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(qA)))}return d!==null&&(d.visible=s!==null),f!==null&&(f.visible=o!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ao;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Gx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sa={h:0,s:0,l:0},uc={h:0,s:0,l:0};function Rh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Et{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,s=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Tt.colorSpaceToWorking(this,s),this}setHSL(e,t,r,s=Tt.workingColorSpace){if(e=LA(e,1),t=Rt(t,0,1),r=Rt(r,0,1),t===0)this.r=this.g=this.b=r;else{const o=r<=.5?r*(1+t):r+t-r*t,u=2*r-o;this.r=Rh(u,o,e+1/3),this.g=Rh(u,o,e),this.b=Rh(u,o,e-1/3)}return Tt.colorSpaceToWorking(this,s),this}setStyle(e,t=ei){function r(o){o!==void 0&&parseFloat(o)<1&&dt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=s[1],d=s[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(o[4]),this.setRGB(Math.min(100,parseFloat(o[1]))/100,Math.min(100,parseFloat(o[2]))/100,Math.min(100,parseFloat(o[3]))/100,t);break;case"hsl":case"hsla":if(o=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:dt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ei){const r=Gx[e.toLowerCase()];return r!==void 0?this.setHex(r,t):dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}copyLinearToSRGB(e){return this.r=oo(e.r),this.g=oo(e.g),this.b=oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Tt.workingToColorSpace(Fn.copy(this),e),Math.round(Rt(Fn.r*255,0,255))*65536+Math.round(Rt(Fn.g*255,0,255))*256+Math.round(Rt(Fn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(Fn.copy(this),t);const r=Fn.r,s=Fn.g,o=Fn.b,u=Math.max(r,s,o),d=Math.min(r,s,o);let f,h;const g=(d+u)/2;if(d===u)f=0,h=0;else{const m=u-d;switch(h=g<=.5?m/(u+d):m/(2-u-d),u){case r:f=(s-o)/m+(s<o?6:0);break;case s:f=(o-r)/m+2;break;case o:f=(r-s)/m+4;break}f/=6}return e.h=f,e.s=h,e.l=g,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=ei){Tt.workingToColorSpace(Fn.copy(this),e);const t=Fn.r,r=Fn.g,s=Fn.b;return e!==ei?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(s*255)})`}offsetHSL(e,t,r){return this.getHSL(Sa),this.setHSL(Sa.h+e,Sa.s+t,Sa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Sa),e.getHSL(uc);const r=Sh(Sa.h,uc.h,t),s=Sh(Sa.s,uc.s,t),o=Sh(Sa.l,uc.l,t);return this.setHSL(r,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*r+o[6]*s,this.g=o[1]*t+o[4]*r+o[7]*s,this.b=o[2]*t+o[5]*r+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Et;Et.NAMES=Gx;class Fm{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new Et(e),this.near=t,this.far=r}clone(){return new Fm(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class YA extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qr,this.environmentIntensity=1,this.environmentRotation=new qr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Yi=new ue,Fr=new ue,Ah=new ue,kr=new ue,qs=new ue,Ys=new ue,ly=new ue,Ch=new ue,Ph=new ue,Lh=new ue,Ih=new rn,Dh=new rn,Nh=new rn;class Ji{constructor(e=new ue,t=new ue,r=new ue){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,s){s.subVectors(r,t),Yi.subVectors(e,t),s.cross(Yi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,r,s,o){Yi.subVectors(s,t),Fr.subVectors(r,t),Ah.subVectors(e,t);const u=Yi.dot(Yi),d=Yi.dot(Fr),f=Yi.dot(Ah),h=Fr.dot(Fr),g=Fr.dot(Ah),m=u*h-d*d;if(m===0)return o.set(0,0,0),null;const v=1/m,x=(h*f-d*g)*v,M=(u*g-d*f)*v;return o.set(1-x-M,M,x)}static containsPoint(e,t,r,s){return this.getBarycoord(e,t,r,s,kr)===null?!1:kr.x>=0&&kr.y>=0&&kr.x+kr.y<=1}static getInterpolation(e,t,r,s,o,u,d,f){return this.getBarycoord(e,t,r,s,kr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,kr.x),f.addScaledVector(u,kr.y),f.addScaledVector(d,kr.z),f)}static getInterpolatedAttribute(e,t,r,s,o,u){return Ih.setScalar(0),Dh.setScalar(0),Nh.setScalar(0),Ih.fromBufferAttribute(e,t),Dh.fromBufferAttribute(e,r),Nh.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(Ih,o.x),u.addScaledVector(Dh,o.y),u.addScaledVector(Nh,o.z),u}static isFrontFacing(e,t,r,s){return Yi.subVectors(r,t),Fr.subVectors(e,t),Yi.cross(Fr).dot(s)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,s){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,r,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yi.subVectors(this.c,this.b),Fr.subVectors(this.a,this.b),Yi.cross(Fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ji.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ji.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,s,o){return Ji.getInterpolation(e,this.a,this.b,this.c,t,r,s,o)}containsPoint(e){return Ji.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ji.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,s=this.b,o=this.c;let u,d;qs.subVectors(s,r),Ys.subVectors(o,r),Ch.subVectors(e,r);const f=qs.dot(Ch),h=Ys.dot(Ch);if(f<=0&&h<=0)return t.copy(r);Ph.subVectors(e,s);const g=qs.dot(Ph),m=Ys.dot(Ph);if(g>=0&&m<=g)return t.copy(s);const v=f*m-g*h;if(v<=0&&f>=0&&g<=0&&f-g>0)return u=f/(f-g),t.copy(r).addScaledVector(qs,u);Lh.subVectors(e,o);const x=qs.dot(Lh),M=Ys.dot(Lh);if(M>=0&&x<=M)return t.copy(o);const R=x*h-f*M;if(R<=0&&h>=0&&M<=0)return d=h/(h-M),t.copy(r).addScaledVector(Ys,d);const y=g*M-x*m;if(y<=0&&m-g>=0&&x-M>=0)return ly.subVectors(o,s),d=(m-g)/(m-g+(x-M)),t.copy(s).addScaledVector(ly,d);const S=1/(y+R+v);return u=R*S,d=v*S,t.copy(r).addScaledVector(qs,u).addScaledVector(Ys,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Fl{constructor(e=new ue(1/0,1/0,1/0),t=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const o=r.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let u=0,d=o.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Ki):Ki.fromBufferAttribute(o,u),Ki.applyMatrix4(e.matrixWorld),this.expandByPoint(Ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),cc.copy(r.boundingBox)),cc.applyMatrix4(e.matrixWorld),this.union(cc)}const s=e.children;for(let o=0,u=s.length;o<u;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ki),Ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(il),dc.subVectors(this.max,il),Ks.subVectors(e.a,il),Zs.subVectors(e.b,il),js.subVectors(e.c,il),xa.subVectors(Zs,Ks),Ma.subVectors(js,Zs),rs.subVectors(Ks,js);let t=[0,-xa.z,xa.y,0,-Ma.z,Ma.y,0,-rs.z,rs.y,xa.z,0,-xa.x,Ma.z,0,-Ma.x,rs.z,0,-rs.x,-xa.y,xa.x,0,-Ma.y,Ma.x,0,-rs.y,rs.x,0];return!Oh(t,Ks,Zs,js,dc)||(t=[1,0,0,0,1,0,0,0,1],!Oh(t,Ks,Zs,js,dc))?!1:(fc.crossVectors(xa,Ma),t=[fc.x,fc.y,fc.z],Oh(t,Ks,Zs,js,dc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Br),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Br=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],Ki=new ue,cc=new Fl,Ks=new ue,Zs=new ue,js=new ue,xa=new ue,Ma=new ue,rs=new ue,il=new ue,dc=new ue,fc=new ue,as=new ue;function Oh(n,e,t,r,s){for(let o=0,u=n.length-3;o<=u;o+=3){as.fromArray(n,o);const d=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),f=e.dot(as),h=t.dot(as),g=r.dot(as);if(Math.max(-Math.max(f,h,g),Math.min(f,h,g))>d)return!1}return!0}const vn=new ue,hc=new bt;let KA=0;class us extends gs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:KA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=TA,this.updateRanges=[],this.gpuType=Sr,this.version=0,this._normalizationScale=e!==void 0?Nm(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[r+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)hc.fromBufferAttribute(this,t),hc.applyMatrix3(e),this.setXY(t,hc.x,hc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix3(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=s,this}setXYZW(e,t,r,s,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),s=this._normalize(s),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):DA(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):NA(e,this.array)}}class Vx extends us{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Wx extends us{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class $n extends us{constructor(e,t,r){super(new Float32Array(e),t,r)}}const ZA=new Fl,rl=new ue,Uh=new ue;class km{constructor(e=new ue,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):ZA.setFromPoints(e).getCenter(r);let s=0;for(let o=0,u=e.length;o<u;o++)s=Math.max(s,r.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rl.subVectors(e,this.center);const t=rl.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),s=(r-this.radius)*.5;this.center.addScaledVector(rl,s/r),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rl.copy(e.center).add(Uh)),this.expandByPoint(rl.copy(e.center).sub(Uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let jA=0;const Ci=new Qt,Fh=new Pn,Js=new ue,pi=new Fl,al=new Fl,Tn=new ue;class Zr extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jA++}),this.uuid=Ul(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(RA(e)?Wx:Vx)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const o=new pt().getNormalMatrix(e);r.applyNormalMatrix(o),r.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,t,r){return Ci.makeTranslation(e,t,r),this.applyMatrix4(Ci),this}scale(e,t,r){return Ci.makeScale(e,t,r),this.applyMatrix4(Ci),this}lookAt(e){return Fh.lookAt(e),Fh.updateMatrix(),this.applyMatrix4(Fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let s=0,o=e.length;s<o;s++){const u=e[s];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new $n(r,3))}else{const r=Math.min(e.length,t.count);for(let s=0;s<r;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];pi.setFromBufferAttribute(o),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new km);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(e){const r=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const d=t[o];al.setFromBufferAttribute(d),this.morphTargetsRelative?(Tn.addVectors(pi.min,al.min),pi.expandByPoint(Tn),Tn.addVectors(pi.max,al.max),pi.expandByPoint(Tn)):(pi.expandByPoint(al.min),pi.expandByPoint(al.max))}pi.getCenter(r);let s=0;for(let o=0,u=e.count;o<u;o++)Tn.fromBufferAttribute(e,o),s=Math.max(s,r.distanceToSquared(Tn));if(t)for(let o=0,u=t.length;o<u;o++){const d=t[o],f=this.morphTargetsRelative;for(let h=0,g=d.count;h<g;h++)Tn.fromBufferAttribute(d,h),f&&(Js.fromBufferAttribute(e,h),Tn.add(Js)),s=Math.max(s,r.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,s=t.normal,o=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new us(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],f=[],h=new Uint8Array(r.count);for(let G=0;G<r.count;G++)d[G]=new ue,f[G]=new ue;const g=new ue,m=new ue,v=new ue,x=new bt,M=new bt,R=new bt,y=new ue,S=new ue;function w(G,O,B){h[G]=h[O]=h[B]=1,g.fromBufferAttribute(r,G),m.fromBufferAttribute(r,O),v.fromBufferAttribute(r,B),x.fromBufferAttribute(o,G),M.fromBufferAttribute(o,O),R.fromBufferAttribute(o,B),m.sub(g),v.sub(g),M.sub(x),R.sub(x);const V=1/(M.x*R.y-R.x*M.y);isFinite(V)&&(y.copy(m).multiplyScalar(R.y).addScaledVector(v,-M.y).multiplyScalar(V),S.copy(v).multiplyScalar(M.x).addScaledVector(m,-R.x).multiplyScalar(V),d[G].add(y),d[O].add(y),d[B].add(y),f[G].add(S),f[O].add(S),f[B].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let G=0,O=N.length;G<O;++G){const B=N[G],V=B.start,q=B.count;for(let k=V,ie=V+q;k<ie;k+=3)w(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const L=new ue,U=new ue,D=new ue,b=new ue;function P(G){D.fromBufferAttribute(s,G),b.copy(D);const O=d[G];L.copy(O),L.sub(D.multiplyScalar(D.dot(O))).normalize(),U.crossVectors(b,O);const V=U.dot(f[G])<0?-1:1;u.setXYZW(G,L.x,L.y,L.z,V)}for(let G=0,O=r.count;G<O;++G)h[G]&&P(G);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new us(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const s=new ue,o=new ue,u=new ue,d=new ue,f=new ue,h=new ue,g=new ue,m=new ue;if(e)for(let v=0,x=e.count;v<x;v+=3){const M=e.getX(v+0),R=e.getX(v+1),y=e.getX(v+2);s.fromBufferAttribute(t,M),o.fromBufferAttribute(t,R),u.fromBufferAttribute(t,y),g.subVectors(u,o),m.subVectors(s,o),g.cross(m),d.fromBufferAttribute(r,M),f.fromBufferAttribute(r,R),h.fromBufferAttribute(r,y),d.add(g),f.add(g),h.add(g),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(R,f.x,f.y,f.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,x=t.count;v<x;v+=3)s.fromBufferAttribute(t,v+0),o.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),g.subVectors(u,o),m.subVectors(s,o),g.cross(m),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Tn.fromBufferAttribute(e,t),Tn.normalize(),e.setXYZ(t,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(d,f){const h=d.array,g=d.itemSize,m=d.normalized,v=new h.constructor(f.length*g);let x=0,M=0;for(let R=0,y=f.length;R<y;R++){d.isInterleavedBufferAttribute?x=f[R]*d.data.stride+d.offset:x=f[R]*g;for(let S=0;S<g;S++)v[M++]=h[x++]}return new us(v,g,m)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zr,r=this.index.array,s=this.attributes;for(const d in s){const f=s[d],h=e(f,r);t.setAttribute(d,h)}const o=this.morphAttributes;for(const d in o){const f=[],h=o[d];for(let g=0,m=h.length;g<m;g++){const v=h[g],x=e(v,r);f.push(x)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,f=u.length;d<f;d++){const h=u[d];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const h=r[f];e.data.attributes[f]=h.toJSON(e.data)}const s={};let o=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],g=[];for(let m=0,v=h.length;m<v;m++){const x=h[m];g.push(x.toJSON(e.data))}g.length>0&&(s[f]=g,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const s=e.attributes;for(const h in s){const g=s[h];this.setAttribute(h,g.clone(t))}const o=e.morphAttributes;for(const h in o){const g=[],m=o[h];for(let v=0,x=m.length;v<x;v++)g.push(m[v].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,g=u.length;h<g;h++){const m=u[h];this.addGroup(m.start,m.count,m.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kh=new ue,JA=new ue,QA=new pt;class Ra{constructor(e=new ue(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,s){return this.normal.set(e,t,r),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const s=kh.subVectors(r,t).cross(JA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const s=e.delta(kh),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||QA.getNormalMatrix(e),s=this.coplanarPoint(kh).applyMatrix4(e),o=this.normal.applyMatrix3(r).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let eC=0;class kl extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eC++}),this.uuid=Ul(),this.name="",this.type="Material",this.blending=xl,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sx,this.blendDst=xx,this.blendEquation=io,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=SA,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_h,this.stencilZFail=_h,this.stencilZPass=_h,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){dt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){dt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(r):s&&s.isVector2&&r&&r.isVector2||s&&s.isEuler&&r&&r.isEuler||s&&s.isVector3&&r&&r.isVector3?s.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function s(o){const u=[];for(const d in o){const f=o[d];delete f.metadata,u.push(f)}return u}if(t){const o=s(e.textures),u=s(e.images);o.length>0&&(r.textures=o),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Ra().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new bt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new bt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const s=t.length;r=new Array(s);for(let o=0;o!==s;++o)r[o]=t[o].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const zr=new ue,Bh=new ue,pc=new ue,mc=new ue;class $x{constructor(e=new ue,t=new ue(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zr.copy(this.origin).addScaledVector(this.direction,t),zr.distanceToSquared(e))}distanceSqToSegment(e,t,r,s){Bh.copy(e).add(t).multiplyScalar(.5),pc.copy(t).sub(e).normalize(),mc.copy(this.origin).sub(Bh);const o=e.distanceTo(t)*.5,u=-this.direction.dot(pc),d=mc.dot(this.direction),f=-mc.dot(pc),h=mc.lengthSq(),g=Math.abs(1-u*u);let m,v,x,M;if(g>0)if(m=u*f-d,v=u*d-f,M=o*g,m>=0)if(v>=-M)if(v<=M){const R=1/g;m*=R,v*=R,x=m*(m+u*v+2*d)+v*(u*m+v+2*f)+h}else v=o,m=Math.max(0,-(u*v+d)),x=-m*m+v*(v+2*f)+h;else v=-o,m=Math.max(0,-(u*v+d)),x=-m*m+v*(v+2*f)+h;else v<=-M?(m=Math.max(0,-(-u*o+d)),v=m>0?-o:Math.min(Math.max(-o,-f),o),x=-m*m+v*(v+2*f)+h):v<=M?(m=0,v=Math.min(Math.max(-o,-f),o),x=v*(v+2*f)+h):(m=Math.max(0,-(u*o+d)),v=m>0?o:Math.min(Math.max(-o,-f),o),x=-m*m+v*(v+2*f)+h);else v=u>0?-o:o,m=Math.max(0,-(u*v+d)),x=-m*m+v*(v+2*f)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Bh).addScaledVector(pc,v),x}intersectSphere(e,t){if(e.radius<0)return null;zr.subVectors(e.center,this.origin);const r=zr.dot(this.direction),s=zr.dot(zr)-r*r,o=e.radius*e.radius;if(s>o)return null;const u=Math.sqrt(o-s),d=r-u,f=r+u;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,s,o,u,d,f;const h=1/this.direction.x,g=1/this.direction.y,m=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,s=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,s=(e.min.x-v.x)*h),g>=0?(o=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(o=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),r>u||o>s||((o>r||isNaN(r))&&(r=o),(u<s||isNaN(s))&&(s=u),m>=0?(d=(e.min.z-v.z)*m,f=(e.max.z-v.z)*m):(d=(e.max.z-v.z)*m,f=(e.min.z-v.z)*m),r>f||d>s)||((d>r||r!==r)&&(r=d),(f<s||s!==s)&&(s=f),s<0)?null:this.at(r>=0?r:s,t)}intersectsBox(e){return this.intersectBox(e,zr)!==null}intersectTriangle(e,t,r,s,o){const u=this.origin,d=this.direction,f=d.x,h=d.y,g=d.z,m=e.x-u.x,v=e.y-u.y,x=e.z-u.z,M=t.x-u.x,R=t.y-u.y,y=t.z-u.z,S=r.x-u.x,w=r.y-u.y,N=r.z-u.z,L=Math.abs(f),U=Math.abs(h),D=Math.abs(g);let b,P,G,O,B,V,q,k,ie,te,ee,J;if(L>=U&&L>=D?(G=f,V=m,ie=M,J=S,f>=0?(b=h,P=g,O=v,B=x,q=R,k=y,te=w,ee=N):(b=g,P=h,O=x,B=v,q=y,k=R,te=N,ee=w)):U>=D?(G=h,V=v,ie=R,J=w,h>=0?(b=g,P=f,O=x,B=m,q=y,k=M,te=N,ee=S):(b=f,P=g,O=m,B=x,q=M,k=y,te=S,ee=N)):(G=g,V=x,ie=y,J=N,g>=0?(b=f,P=h,O=m,B=v,q=M,k=R,te=S,ee=w):(b=h,P=f,O=v,B=m,q=R,k=M,te=w,ee=S)),G===0)return null;const Y=b/G,j=P/G,F=1/G,Q=O-Y*V,Ce=B-j*V,re=q-Y*ie,Se=k-j*ie,Ee=te-Y*J,Ae=ee-j*J,ve=Ee*Se-Ae*re,He=Q*Ae-Ce*Ee,ft=re*Ce-Se*Q;if(s){if(ve<0||He<0||ft<0)return null}else if((ve<0||He<0||ft<0)&&(ve>0||He>0||ft>0))return null;const Xe=ve+He+ft;if(Xe===0)return null;const gt=F*(ve*V+He*ie+ft*J);return(Xe>0?gt<0:gt>0)?null:this.at(gt/Xe,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ml extends kl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qr,this.combine=Mx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const uy=new Qt,ss=new $x,gc=new km,cy=new ue,vc=new ue,_c=new ue,yc=new ue,zh=new ue,Sc=new ue,dy=new ue,xc=new ue;class Oa extends Pn{constructor(e=new Zr,t=new ml){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const s=t[r[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const d=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=o}}}}getVertexPosition(e,t){const r=this.geometry,s=r.attributes.position,o=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(s,e);const d=this.morphTargetInfluences;if(o&&d){Sc.set(0,0,0);for(let f=0,h=o.length;f<h;f++){const g=d[f],m=o[f];g!==0&&(zh.fromBufferAttribute(m,e),u?Sc.addScaledVector(zh,g):Sc.addScaledVector(zh.sub(t),g))}t.add(Sc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gc.copy(r.boundingSphere),gc.applyMatrix4(o),ss.copy(e.ray).recast(e.near),!(gc.containsPoint(ss.origin)===!1&&(ss.intersectSphere(gc,cy)===null||ss.origin.distanceToSquared(cy)>(e.far-e.near)**2))&&(uy.copy(o).invert(),ss.copy(e.ray).applyMatrix4(uy),!(r.boundingBox!==null&&ss.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,r){let s;const o=this.geometry,u=this.material,d=o.index,f=o.attributes.position,h=o.attributes.uv,g=o.attributes.uv1,m=o.attributes.normal,v=o.groups,x=o.drawRange;if(d!==null)if(Array.isArray(u))for(let M=0,R=v.length;M<R;M++){const y=v[M],S=u[y.materialIndex],w=Math.max(y.start,x.start),N=Math.min(d.count,Math.min(y.start+y.count,x.start+x.count));for(let L=w,U=N;L<U;L+=3){const D=d.getX(L),b=d.getX(L+1),P=d.getX(L+2);s=Mc(this,S,e,r,h,g,m,D,b,P),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),R=Math.min(d.count,x.start+x.count);for(let y=M,S=R;y<S;y+=3){const w=d.getX(y),N=d.getX(y+1),L=d.getX(y+2);s=Mc(this,u,e,r,h,g,m,w,N,L),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(u))for(let M=0,R=v.length;M<R;M++){const y=v[M],S=u[y.materialIndex],w=Math.max(y.start,x.start),N=Math.min(f.count,Math.min(y.start+y.count,x.start+x.count));for(let L=w,U=N;L<U;L+=3){const D=L,b=L+1,P=L+2;s=Mc(this,S,e,r,h,g,m,D,b,P),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),R=Math.min(f.count,x.start+x.count);for(let y=M,S=R;y<S;y+=3){const w=y,N=y+1,L=y+2;s=Mc(this,u,e,r,h,g,m,w,N,L),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function tC(n,e,t,r,s,o,u,d){let f;if(e.side===ii?f=r.intersectTriangle(u,o,s,!0,d):f=r.intersectTriangle(s,o,u,e.side===cs,d),f===null)return null;xc.copy(d),xc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(xc);return h<t.near||h>t.far?null:{distance:h,point:xc.clone(),object:n}}function Mc(n,e,t,r,s,o,u,d,f,h){n.getVertexPosition(d,vc),n.getVertexPosition(f,_c),n.getVertexPosition(h,yc);const g=tC(n,e,t,r,vc,_c,yc,dy);if(g){const m=new ue;Ji.getBarycoord(dy,vc,_c,yc,m),s&&(g.uv=Ji.getInterpolatedAttribute(s,d,f,h,m,new bt)),o&&(g.uv1=Ji.getInterpolatedAttribute(o,d,f,h,m,new bt)),u&&(g.normal=Ji.getInterpolatedAttribute(u,d,f,h,m,new ue),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:f,c:h,normal:new ue,materialIndex:0};Ji.getNormal(vc,_c,yc,v.normal),g.face=v,g.barycoord=m}return g}class nC extends Bn{constructor(e=null,t=1,r=1,s,o,u,d,f,h=Cn,g=Cn,m,v){super(null,u,d,f,h,g,s,o,m,v),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const os=new km,iC=new bt(.5,.5),Ec=new ue;class Dl{constructor(e=new Ra,t=new Ra,r=new Ra,s=new Ra,o=new Ra,u=new Ra){this.planes=[e,t,r,s,o,u]}set(e,t,r,s,o,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(s),d[4].copy(o),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Qi,r=!1){const s=this.planes,o=e.elements,u=o[0],d=o[1],f=o[2],h=o[3],g=o[4],m=o[5],v=o[6],x=o[7],M=o[8],R=o[9],y=o[10],S=o[11],w=o[12],N=o[13],L=o[14],U=o[15];if(s[0].setComponents(h-u,x-g,S-M,U-w).normalize(),s[1].setComponents(h+u,x+g,S+M,U+w).normalize(),s[2].setComponents(h+d,x+m,S+R,U+N).normalize(),s[3].setComponents(h-d,x-m,S-R,U-N).normalize(),r)s[4].setComponents(f,v,y,L).normalize(),s[5].setComponents(h-f,x-v,S-y,U-L).normalize();else if(s[4].setComponents(h-f,x-v,S-y,U-L).normalize(),t===Qi)s[5].setComponents(h+f,x+v,S+y,U+L).normalize();else if(t===Il)s[5].setComponents(f,v,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);const t=iC.distanceTo(e.center);return os.radius=.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){const t=this.planes,r=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(r)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const s=t[r];if(Ec.x=s.normal.x>0?e.max.x:e.min.x,Ec.y=s.normal.y>0?e.max.y:e.min.y,Ec.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const fy=new Qt;class Bm{constructor(){this.coordinateSystem=Qi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let s=0;s<t.length;s++){const o=t[s];fy.multiplyMatrices(o.projectionMatrix,o.matrixWorldInverse),r[s]===void 0&&(r[s]=new Dl),r[s].setFromProjectionMatrix(fy,o.coordinateSystem,o.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Dl),t[s].copy(r[s]);return this._count=e._count,this}clone(){return new Bm().copy(this)}}class Xx extends Bn{constructor(e=[],t=fo,r,s,o,u,d,f,h,g){super(e,t,r,s,o,u,d,f,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sl extends Bn{constructor(e,t,r,s,o,u,d,f,h){super(e,t,r,s,o,u,d,f,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class po extends Bn{constructor(e,t,r=wr,s,o,u,d=Cn,f=Cn,h,g=Na,m=1){if(g!==Na&&g!==La)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:m};super(v,s,o,u,d,f,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Om(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class qx extends po{constructor(e,t=wr,r=fo,s,o,u=Cn,d=Cn,f,h=Na){const g={width:e,height:e,depth:1},m=[g,g,g,g,g,g];super(e,e,t,r,s,o,u,d,f,h),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Yx extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _o extends Zr{constructor(e=1,t=1,r=1,s=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:s,heightSegments:o,depthSegments:u};const d=this;s=Math.floor(s),o=Math.floor(o),u=Math.floor(u);const f=[],h=[],g=[],m=[];let v=0,x=0;M("z","y","x",-1,-1,r,t,e,u,o,0),M("z","y","x",1,-1,r,t,-e,u,o,1),M("x","z","y",1,1,e,r,t,s,u,2),M("x","z","y",1,-1,e,r,-t,s,u,3),M("x","y","z",1,-1,e,t,r,s,o,4),M("x","y","z",-1,-1,e,t,-r,s,o,5),this.setIndex(f),this.setAttribute("position",new $n(h,3)),this.setAttribute("normal",new $n(g,3)),this.setAttribute("uv",new $n(m,2));function M(R,y,S,w,N,L,U,D,b,P,G){const O=L/b,B=U/P,V=L/2,q=U/2,k=D/2,ie=b+1,te=P+1;let ee=0,J=0;const Y=new ue;for(let j=0;j<te;j++){const F=j*B-q;for(let Q=0;Q<ie;Q++){const Ce=Q*O-V;Y[R]=Ce*w,Y[y]=F*N,Y[S]=k,h.push(Y.x,Y.y,Y.z),Y[R]=0,Y[y]=0,Y[S]=D>0?1:-1,g.push(Y.x,Y.y,Y.z),m.push(Q/b),m.push(1-j/P),ee+=1}}for(let j=0;j<P;j++)for(let F=0;F<b;F++){const Q=v+F+ie*j,Ce=v+F+ie*(j+1),re=v+(F+1)+ie*(j+1),Se=v+(F+1)+ie*j;f.push(Q,Ce,Se),f.push(Ce,re,Se),J+=6}d.addGroup(x,J,G),x+=J,v+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Nl extends Zr{constructor(e=1,t=1,r=1,s=32,o=1,u=!1,d=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:s,heightSegments:o,openEnded:u,thetaStart:d,thetaLength:f};const h=this;s=Math.floor(s),o=Math.floor(o);const g=[],m=[],v=[],x=[];let M=0;const R=[],y=r/2;let S=0;w(),u===!1&&(e>0&&N(!0),t>0&&N(!1)),this.setIndex(g),this.setAttribute("position",new $n(m,3)),this.setAttribute("normal",new $n(v,3)),this.setAttribute("uv",new $n(x,2));function w(){const L=new ue,U=new ue;let D=0;const b=(t-e)/r;for(let P=0;P<=o;P++){const G=[],O=P/o,B=O*(t-e)+e;for(let V=0;V<=s;V++){const q=V/s,k=q*f+d,ie=Math.sin(k),te=Math.cos(k);U.x=B*ie,U.y=-O*r+y,U.z=B*te,m.push(U.x,U.y,U.z),L.set(ie,b,te).normalize(),v.push(L.x,L.y,L.z),x.push(q,1-O),G.push(M++)}R.push(G)}for(let P=0;P<s;P++)for(let G=0;G<o;G++){const O=R[G][P],B=R[G+1][P],V=R[G+1][P+1],q=R[G][P+1];(e>0||G!==0)&&(g.push(O,B,q),D+=3),(t>0||G!==o-1)&&(g.push(B,V,q),D+=3)}h.addGroup(S,D,0),S+=D}function N(L){const U=M,D=new bt,b=new ue;let P=0;const G=L===!0?e:t,O=L===!0?1:-1;for(let V=1;V<=s;V++)m.push(0,y*O,0),v.push(0,O,0),x.push(.5,.5),M++;const B=M;for(let V=0;V<=s;V++){const k=V/s*f+d,ie=Math.cos(k),te=Math.sin(k);b.x=G*te,b.y=y*O,b.z=G*ie,m.push(b.x,b.y,b.z),v.push(0,O,0),D.x=ie*.5+.5,D.y=te*.5*O+.5,x.push(D.x,D.y),M++}for(let V=0;V<s;V++){const q=U+V,k=B+V;L===!0?g.push(k,k+1,q):g.push(k+1,k,q),P+=3}h.addGroup(S,P,L===!0?1:2),S+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jc extends Nl{constructor(e=1,t=1,r=32,s=1,o=!1,u=0,d=Math.PI*2){super(0,e,t,r,s,o,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:u,thetaLength:d}}static fromJSON(e){return new Jc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ia extends Zr{constructor(e=1,t=1,r=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:s};const o=e/2,u=t/2,d=Math.floor(r),f=Math.floor(s),h=d+1,g=f+1,m=e/d,v=t/f,x=[],M=[],R=[],y=[];for(let S=0;S<g;S++){const w=S*v-u;for(let N=0;N<h;N++){const L=N*m-o;M.push(L,-w,0),R.push(0,0,1),y.push(N/d),y.push(1-S/f)}}for(let S=0;S<f;S++)for(let w=0;w<d;w++){const N=w+h*S,L=w+h*(S+1),U=w+1+h*(S+1),D=w+1+h*S;x.push(N,L,D),x.push(L,U,D)}this.setIndex(x),this.setAttribute("position",new $n(M,3)),this.setAttribute("normal",new $n(R,3)),this.setAttribute("uv",new $n(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.widthSegments,e.heightSegments)}}class zm extends Zr{constructor(e=1,t=32,r=16,s=0,o=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:s,phiLength:o,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(u+d,Math.PI);let h=0;const g=[],m=new ue,v=new ue,x=[],M=[],R=[],y=[];for(let S=0;S<=r;S++){const w=[],N=S/r,L=u+N*d,U=e*Math.cos(L),D=Math.sqrt(e*e-U*U);let b=0;S===0&&u===0?b=.5/t:S===r&&f===Math.PI&&(b=-.5/t);for(let P=0;P<=t;P++){const G=P/t,O=s+G*o;m.x=-D*Math.cos(O),m.y=U,m.z=D*Math.sin(O),M.push(m.x,m.y,m.z),v.copy(m).normalize(),R.push(v.x,v.y,v.z),y.push(G+b,1-N),w.push(h++)}g.push(w)}for(let S=0;S<r;S++)for(let w=0;w<t;w++){const N=g[S][w+1],L=g[S][w],U=g[S+1][w],D=g[S+1][w+1];(S!==0||u>0)&&x.push(N,L,D),(S!==r-1||f<Math.PI)&&x.push(L,U,D)}this.setIndex(x),this.setAttribute("position",new $n(M,3)),this.setAttribute("normal",new $n(R,3)),this.setAttribute("uv",new $n(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function mo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const s=n[t][r];if(hy(s))s.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=s.clone();else if(Array.isArray(s))if(hy(s[0])){const o=[];for(let u=0,d=s.length;u<d;u++)o[u]=s[u].clone();e[t][r]=o}else e[t][r]=s.slice();else e[t][r]=s}}return e}function Vn(n){const e={};for(let t=0;t<n.length;t++){const r=mo(n[t]);for(const s in r)e[s]=r[s]}return e}function hy(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function rC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Kx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const aC={clone:mo,merge:Vn};var sC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fs extends kl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sC,this.fragmentShader=oC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mo(e.uniforms),this.uniformsGroups=rC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const s in this.extensions)this.extensions[s]===!0&&(r[s]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const s=e.uniforms[r];switch(this.uniforms[r]={},s.type){case"t":this.uniforms[r].value=t[s.value]||null;break;case"c":this.uniforms[r].value=new Et().setHex(s.value);break;case"v2":this.uniforms[r].value=new bt().fromArray(s.value);break;case"v3":this.uniforms[r].value=new ue().fromArray(s.value);break;case"v4":this.uniforms[r].value=new rn().fromArray(s.value);break;case"m3":this.uniforms[r].value=new pt().fromArray(s.value);break;case"m4":this.uniforms[r].value=new Qt().fromArray(s.value);break;default:this.uniforms[r].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class lC extends fs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class uC extends kl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=um,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cC extends kl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_A,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dC extends kl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Hm extends Pn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class fC extends Hm{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Hh=new Qt,py=new ue,my=new ue;class Zx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dl,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;py.setFromMatrixPosition(e.matrixWorld),t.position.copy(py),my.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(my),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,s){Hh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Hh,e.coordinateSystem,e.reversedDepth);const o=this._frameExtents,u=s?s.z/o.x:1,d=s?s.w/o.y:1,f=s?s.x/o.x:0,h=s?s.y/o.y:0;e.coordinateSystem===Il||e.reversedDepth?t.set(.5*u,0,0,.5*u+f,0,.5*d,0,.5*d+h,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+f,0,.5*d,0,.5*d+h,0,0,.5,.5,0,0,0,1),t.multiply(Hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const bc=new ue,wc=new $r,cr=new ue;class jx extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bc,wc,cr),cr.x===1&&cr.y===1&&cr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bc,wc,cr.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(bc,wc,cr),cr.x===1&&cr.y===1&&cr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bc,wc,cr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ea=new ue,gy=new bt,vy=new bt;class Li extends jx{constructor(e=50,t=1,r=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cm*2*Math.atan(Math.tan(yh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Ea.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ea.x,Ea.y).multiplyScalar(-e/Ea.z),Ea.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ea.x,Ea.y).multiplyScalar(-e/Ea.z)}getViewSize(e,t){return this.getViewBounds(e,gy,vy),t.subVectors(vy,gy)}setViewOffset(e,t,r,s,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yh*.5*this.fov)/this.zoom,r=2*t,s=this.aspect*r,o=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,h=u.fullHeight;o+=u.offsetX*s/f,t-=u.offsetY*r/h,s*=u.width/f,r*=u.height/h}const d=this.filmOffset;d!==0&&(o+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class hC extends Zx{constructor(){super(new Li(90,1,.5,500)),this.isPointLightShadow=!0}}class _y extends Hm{constructor(e,t,r=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=s,this.shadow=new hC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Jx extends jx{constructor(e=-1,t=1,r=1,s=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=s,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,s,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=r-e,u=r+e,d=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,u=o+h*this.view.width,d-=g*this.view.offsetY,f=d-g*this.view.height}this.projectionMatrix.makeOrthographic(o,u,d,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pC extends Zx{constructor(){super(new Jx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mC extends Hm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new pC}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Qs=-90,eo=1;class dm extends Pn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Li(Qs,eo,e,t);s.layers=this.layers,this.add(s);const o=new Li(Qs,eo,e,t);o.layers=this.layers,this.add(o);const u=new Li(Qs,eo,e,t);u.layers=this.layers,this.add(u);const d=new Li(Qs,eo,e,t);d.layers=this.layers,this.add(d);const f=new Li(Qs,eo,e,t);f.layers=this.layers,this.add(f);const h=new Li(Qs,eo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,s,o,u,d,f]=t;for(const h of t)this.remove(h);if(e===Qi)r.up.set(0,1,0),r.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Il)r.up.set(0,-1,0),r.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,d,f,h,g]=this.children,m=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(r,1,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,4,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.mipmapsAutoUpdate=R,e.setRenderTarget(r,5,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(m,v,x),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class gC extends Li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const yy=new Qt;class vC{constructor(e,t,r=0,s=1/0){this.ray=new $x(e,t),this.near=r,this.far=s,this.camera=null,this.layers=new Um,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Nt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yy.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yy),this}intersectObject(e,t=!0,r=[]){return fm(e,this,r,t),r.sort(Sy),r}intersectObjects(e,t=!0,r=[]){for(let s=0,o=e.length;s<o;s++)fm(e[s],this,r,t);return r.sort(Sy),r}}function Sy(n,e){return n.distance-e.distance}function fm(n,e,t,r){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&r===!0){const o=n.children;for(let u=0,d=o.length;u<d;u++)fm(o[u],e,t,!0)}}function xy(n,e,t,r){const s=_C(r);switch(t){case Nx:return n*e;case Ux:return n*e/s.components*s.byteLength;case Lm:return n*e/s.components*s.byteLength;case ds:return n*e*2/s.components*s.byteLength;case Im:return n*e*2/s.components*s.byteLength;case Ox:return n*e*3/s.components*s.byteLength;case xr:return n*e*4/s.components*s.byteLength;case Dm:return n*e*4/s.components*s.byteLength;case Nc:case Oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Uc:case Fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Np:case Up:return Math.max(n,16)*Math.max(e,8)/4;case Dp:case Op:return Math.max(n,8)*Math.max(e,8)/2;case Fp:case kp:case zp:case Hp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Bp:case qc:case Gp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wp:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case $p:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Xp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case qp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Yp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Kp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Zp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case jp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Jp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Qp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case em:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case tm:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case nm:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case im:case rm:case am:return Math.ceil(n/4)*Math.ceil(e/4)*16;case sm:case om:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Yc:case lm:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _C(n){switch(n){case gi:case Px:return{byteLength:1,components:1};case Ll:case Lx:case Tr:return{byteLength:2,components:1};case Cm:case Pm:return{byteLength:2,components:4};case wr:case Am:case Sr:return{byteLength:4,components:1};case Ix:case Dx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tm}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qx(){let n=null,e=!1,t=null,r=null;function s(o,u){r=n.requestAnimationFrame(s),t(o,u)}return{start:function(){e!==!0&&t!==null&&n!==null&&(r=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function yC(n){const e=new WeakMap;function t(d,f){const h=d.array,g=d.usage,m=h.byteLength,v=n.createBuffer();n.bindBuffer(f,v),n.bufferData(f,h,g),d.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=n.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:m}}function r(d,f,h){const g=f.array,m=f.updateRanges;if(n.bindBuffer(h,d),m.length===0)n.bufferSubData(h,0,g);else{m.sort((x,M)=>x.start-M.start);let v=0;for(let x=1;x<m.length;x++){const M=m[v],R=m[x];R.start<=M.start+M.count+1?M.count=Math.max(M.count,R.start+R.count-M.start):(++v,m[v]=R)}m.length=v+1;for(let x=0,M=m.length;x<M;x++){const R=m[x];n.bufferSubData(h,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function o(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(n.deleteBuffer(f.buffer),e.delete(d))}function u(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,t(d,f));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,d,f),h.version=d.version}}return{get:s,remove:o,update:u}}var SC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xC=`#ifdef USE_ALPHAHASH
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
#endif`,MC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TC=`#ifdef USE_AOMAP
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
#endif`,RC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AC=`#ifdef USE_BATCHING
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
#endif`,CC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DC=`#ifdef USE_IRIDESCENCE
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
#endif`,NC=`#ifdef USE_BUMPMAP
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
#endif`,OC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,UC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,HC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,GC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,VC=`#define PI 3.141592653589793
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
} // validated`,WC=`vec3 transformedNormal = objectNormal;
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
#endif`,$C=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KC="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jC=`#ifdef USE_ENVMAP
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
#endif`,JC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,QC=`#ifdef USE_ENVMAP
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
#endif`,eP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tP=`#ifdef USE_ENVMAP
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
#endif`,nP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sP=`#ifdef USE_GRADIENTMAP
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
}`,oP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cP=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,dP=`#ifdef USE_ENVMAP
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
#endif`,fP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gP=`PhysicalMaterial material;
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
#endif`,vP=`uniform sampler2D dfgLUT;
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
}`,_P=`
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
#endif`,yP=`#if defined( RE_IndirectDiffuse )
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
#endif`,SP=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xP=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,MP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CP=`#if defined( USE_POINTS_UV )
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
#endif`,PP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DP=`#if defined( USE_MORPHCOLORS )
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
#endif`,NP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OP=`#ifdef USE_MORPHTARGETS
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
#endif`,UP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,BP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,GP=`#ifdef USE_NORMALMAP
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
#endif`,VP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$P=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YP=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,KP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tL=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nL=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rL=`float getShadowMask() {
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
}`,aL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sL=`#ifdef USE_SKINNING
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
#endif`,oL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lL=`#ifdef USE_SKINNING
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
#endif`,uL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fL=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hL=`#ifdef USE_TRANSMISSION
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
#endif`,pL=`#ifdef USE_TRANSMISSION
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
#endif`,mL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_L=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SL=`uniform sampler2D t2D;
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
}`,xL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ML=`uniform float backgroundBlurriness;
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
}`,EL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wL=`#include <common>
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
}`,TL=`#if DEPTH_PACKING == 3200
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
}`,RL=`#define DISTANCE
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
}`,AL=`#define DISTANCE
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
}`,CL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LL=`uniform float scale;
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
}`,IL=`uniform vec3 diffuse;
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
}`,DL=`#include <common>
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
}`,NL=`uniform vec3 diffuse;
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
}`,OL=`#define LAMBERT
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
}`,UL=`#define LAMBERT
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
}`,FL=`#define MATCAP
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
}`,kL=`#define MATCAP
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
}`,BL=`#define NORMAL
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
}`,zL=`#define NORMAL
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
}`,HL=`#define PHONG
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
}`,GL=`#define PHONG
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
}`,VL=`#define STANDARD
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
}`,WL=`#define STANDARD
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
}`,$L=`#define TOON
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
}`,XL=`#define TOON
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
}`,qL=`uniform float size;
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
}`,YL=`uniform vec3 diffuse;
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
}`,KL=`#include <common>
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
}`,ZL=`uniform vec3 color;
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
}`,jL=`uniform float rotation;
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
}`,JL=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:SC,alphahash_pars_fragment:xC,alphamap_fragment:MC,alphamap_pars_fragment:EC,alphatest_fragment:bC,alphatest_pars_fragment:wC,aomap_fragment:TC,aomap_pars_fragment:RC,batching_pars_vertex:AC,batching_vertex:CC,begin_vertex:PC,beginnormal_vertex:LC,bsdfs:IC,iridescence_fragment:DC,bumpmap_pars_fragment:NC,clipping_planes_fragment:OC,clipping_planes_pars_fragment:UC,clipping_planes_pars_vertex:FC,clipping_planes_vertex:kC,color_fragment:BC,color_pars_fragment:zC,color_pars_vertex:HC,color_vertex:GC,common:VC,defaultnormal_vertex:WC,displacementmap_pars_vertex:$C,displacementmap_vertex:XC,emissivemap_fragment:qC,emissivemap_pars_fragment:YC,colorspace_fragment:KC,colorspace_pars_fragment:ZC,envmap_fragment:jC,envmap_common_pars_fragment:JC,envmap_pars_fragment:QC,envmap_pars_vertex:eP,envmap_physical_pars_fragment:dP,envmap_vertex:tP,fog_vertex:nP,fog_pars_vertex:iP,fog_fragment:rP,fog_pars_fragment:aP,gradientmap_pars_fragment:sP,lightmap_pars_fragment:oP,lights_lambert_fragment:lP,lights_lambert_pars_fragment:uP,lights_pars_begin:cP,lights_toon_fragment:fP,lights_toon_pars_fragment:hP,lights_phong_fragment:pP,lights_phong_pars_fragment:mP,lights_physical_fragment:gP,lights_physical_pars_fragment:vP,lights_fragment_begin:_P,lights_fragment_maps:yP,lights_fragment_end:SP,lightprobes_pars_fragment:xP,logdepthbuf_fragment:MP,logdepthbuf_pars_fragment:EP,logdepthbuf_pars_vertex:bP,logdepthbuf_vertex:wP,map_fragment:TP,map_pars_fragment:RP,map_particle_fragment:AP,map_particle_pars_fragment:CP,metalnessmap_fragment:PP,metalnessmap_pars_fragment:LP,morphinstance_vertex:IP,morphcolor_vertex:DP,morphnormal_vertex:NP,morphtarget_pars_vertex:OP,morphtarget_vertex:UP,normal_fragment_begin:FP,normal_fragment_maps:kP,normal_pars_fragment:BP,normal_pars_vertex:zP,normal_vertex:HP,normalmap_pars_fragment:GP,clearcoat_normal_fragment_begin:VP,clearcoat_normal_fragment_maps:WP,clearcoat_pars_fragment:$P,iridescence_pars_fragment:XP,opaque_fragment:qP,packing:YP,premultiplied_alpha_fragment:KP,project_vertex:ZP,dithering_fragment:jP,dithering_pars_fragment:JP,roughnessmap_fragment:QP,roughnessmap_pars_fragment:eL,shadowmap_pars_fragment:tL,shadowmap_pars_vertex:nL,shadowmap_vertex:iL,shadowmask_pars_fragment:rL,skinbase_vertex:aL,skinning_pars_vertex:sL,skinning_vertex:oL,skinnormal_vertex:lL,specularmap_fragment:uL,specularmap_pars_fragment:cL,tonemapping_fragment:dL,tonemapping_pars_fragment:fL,transmission_fragment:hL,transmission_pars_fragment:pL,uv_pars_fragment:mL,uv_pars_vertex:gL,uv_vertex:vL,worldpos_vertex:_L,background_vert:yL,background_frag:SL,backgroundCube_vert:xL,backgroundCube_frag:ML,cube_vert:EL,cube_frag:bL,depth_vert:wL,depth_frag:TL,distance_vert:RL,distance_frag:AL,equirect_vert:CL,equirect_frag:PL,linedashed_vert:LL,linedashed_frag:IL,meshbasic_vert:DL,meshbasic_frag:NL,meshlambert_vert:OL,meshlambert_frag:UL,meshmatcap_vert:FL,meshmatcap_frag:kL,meshnormal_vert:BL,meshnormal_frag:zL,meshphong_vert:HL,meshphong_frag:GL,meshphysical_vert:VL,meshphysical_frag:WL,meshtoon_vert:$L,meshtoon_frag:XL,points_vert:qL,points_frag:YL,shadow_vert:KL,shadow_frag:ZL,sprite_vert:jL,sprite_frag:JL},Ve={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},mr={basic:{uniforms:Vn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Vn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Vn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Vn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Vn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Et(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Vn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Vn([Ve.points,Ve.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Vn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Vn([Ve.common,Ve.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Vn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Vn([Ve.sprite,Ve.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:Vn([Ve.common,Ve.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:Vn([Ve.lights,Ve.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};mr.physical={uniforms:Vn([mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Tc={r:0,b:0,g:0},QL=new Qt,eM=new pt;eM.set(-1,0,0,0,1,0,0,0,1);function e2(n,e,t,r,s,o){const u=new Et(0);let d=s===!0?0:1,f,h,g=null,m=0,v=null;function x(w){let N=w.isScene===!0?w.background:null;if(N&&N.isTexture){const L=w.backgroundBlurriness>0;N=e.get(N,L)}return N}function M(w){let N=!1;const L=x(w);L===null?y(u,d):L&&L.isColor&&(y(L,1),N=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?t.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(n.autoClear||N)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function R(w,N){const L=x(N);L&&L.isCubeTexture?(h===void 0&&(h=new Oa(new _o(1,1,1),new fs({name:"BackgroundCubeMaterial",uniforms:mo(mr.backgroundCube.uniforms),vertexShader:mr.backgroundCube.vertexShader,fragmentShader:mr.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,D,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=L,h.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(QL.makeRotationFromEuler(N.backgroundRotation)).transpose(),L.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(eM),h.material.toneMapped=Tt.getTransfer(L.colorSpace)!==kt,(g!==L||m!==L.version||v!==n.toneMapping)&&(h.material.needsUpdate=!0,g=L,m=L.version,v=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(f===void 0&&(f=new Oa(new Ia(2,2),new fs({name:"BackgroundMaterial",uniforms:mo(mr.background.uniforms),vertexShader:mr.background.vertexShader,fragmentShader:mr.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=L,f.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,f.material.toneMapped=Tt.getTransfer(L.colorSpace)!==kt,L.matrixAutoUpdate===!0&&L.updateMatrix(),f.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||m!==L.version||v!==n.toneMapping)&&(f.material.needsUpdate=!0,g=L,m=L.version,v=n.toneMapping),f.layers.enableAll(),w.unshift(f,f.geometry,f.material,0,0,null))}function y(w,N){w.getRGB(Tc,Kx(n)),t.buffers.color.setClear(Tc.r,Tc.g,Tc.b,N,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(w,N=1){u.set(w),d=N,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(w){d=w,y(u,d)},render:M,addToRenderList:R,dispose:S}}function t2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},s=v(null);let o=s,u=!1;function d(B,V,q,k,ie){let te=!1;const ee=m(B,k,q,V);o!==ee&&(o=ee,h(o.object)),te=x(B,k,q,ie),te&&M(B,k,q,ie),ie!==null&&e.update(ie,n.ELEMENT_ARRAY_BUFFER),(te||u)&&(u=!1,L(B,V,q,k),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function f(){return n.createVertexArray()}function h(B){return n.bindVertexArray(B)}function g(B){return n.deleteVertexArray(B)}function m(B,V,q,k){const ie=k.wireframe===!0;let te=r[V.id];te===void 0&&(te={},r[V.id]=te);const ee=B.isInstancedMesh===!0?B.id:0;let J=te[ee];J===void 0&&(J={},te[ee]=J);let Y=J[q.id];Y===void 0&&(Y={},J[q.id]=Y);let j=Y[ie];return j===void 0&&(j=v(f()),Y[ie]=j),j}function v(B){const V=[],q=[],k=[];for(let ie=0;ie<t;ie++)V[ie]=0,q[ie]=0,k[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:q,attributeDivisors:k,object:B,attributes:{},index:null}}function x(B,V,q,k){const ie=o.attributes,te=V.attributes;let ee=0;const J=q.getAttributes();for(const Y in J)if(J[Y].location>=0){const F=ie[Y];let Q=te[Y];if(Q===void 0&&(Y==="instanceMatrix"&&B.instanceMatrix&&(Q=B.instanceMatrix),Y==="instanceColor"&&B.instanceColor&&(Q=B.instanceColor)),F===void 0||F.attribute!==Q||Q&&F.data!==Q.data)return!0;ee++}return o.attributesNum!==ee||o.index!==k}function M(B,V,q,k){const ie={},te=V.attributes;let ee=0;const J=q.getAttributes();for(const Y in J)if(J[Y].location>=0){let F=te[Y];F===void 0&&(Y==="instanceMatrix"&&B.instanceMatrix&&(F=B.instanceMatrix),Y==="instanceColor"&&B.instanceColor&&(F=B.instanceColor));const Q={};Q.attribute=F,F&&F.data&&(Q.data=F.data),ie[Y]=Q,ee++}o.attributes=ie,o.attributesNum=ee,o.index=k}function R(){const B=o.newAttributes;for(let V=0,q=B.length;V<q;V++)B[V]=0}function y(B){S(B,0)}function S(B,V){const q=o.newAttributes,k=o.enabledAttributes,ie=o.attributeDivisors;q[B]=1,k[B]===0&&(n.enableVertexAttribArray(B),k[B]=1),ie[B]!==V&&(n.vertexAttribDivisor(B,V),ie[B]=V)}function w(){const B=o.newAttributes,V=o.enabledAttributes;for(let q=0,k=V.length;q<k;q++)V[q]!==B[q]&&(n.disableVertexAttribArray(q),V[q]=0)}function N(B,V,q,k,ie,te,ee){ee===!0?n.vertexAttribIPointer(B,V,q,ie,te):n.vertexAttribPointer(B,V,q,k,ie,te)}function L(B,V,q,k){R();const ie=k.attributes,te=q.getAttributes(),ee=V.defaultAttributeValues;for(const J in te){const Y=te[J];if(Y.location>=0){let j=ie[J];if(j===void 0&&(J==="instanceMatrix"&&B.instanceMatrix&&(j=B.instanceMatrix),J==="instanceColor"&&B.instanceColor&&(j=B.instanceColor)),j!==void 0){const F=j.normalized,Q=j.itemSize,Ce=e.get(j);if(Ce===void 0)continue;const re=Ce.buffer,Se=Ce.type,Ee=Ce.bytesPerElement,Ae=Se===n.INT||Se===n.UNSIGNED_INT||j.gpuType===Am;if(j.isInterleavedBufferAttribute){const ve=j.data,He=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,ft=j.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Xe=0;Xe<Y.locationSize;Xe++)S(Y.location+Xe,ve.meshPerAttribute);B.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Xe=0;Xe<Y.locationSize;Xe++)y(Y.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,re);for(let Xe=0;Xe<Y.locationSize;Xe++)N(Y.location+Xe,Q/Y.locationSize,Se,F,He*Ee,(ft+Q/Y.locationSize*Xe)*Ee,Ae)}else{if(j.isInstancedBufferAttribute){for(let ve=0;ve<Y.locationSize;ve++)S(Y.location+ve,j.meshPerAttribute);B.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ve=0;ve<Y.locationSize;ve++)y(Y.location+ve);n.bindBuffer(n.ARRAY_BUFFER,re);for(let ve=0;ve<Y.locationSize;ve++)N(Y.location+ve,Q/Y.locationSize,Se,F,Q*Ee,Q/Y.locationSize*ve*Ee,Ae)}}else if(ee!==void 0){const F=ee[J];if(F!==void 0)switch(F.length){case 2:n.vertexAttrib2fv(Y.location,F);break;case 3:n.vertexAttrib3fv(Y.location,F);break;case 4:n.vertexAttrib4fv(Y.location,F);break;default:n.vertexAttrib1fv(Y.location,F)}}}}w()}function U(){G();for(const B in r){const V=r[B];for(const q in V){const k=V[q];for(const ie in k){const te=k[ie];for(const ee in te)g(te[ee].object),delete te[ee];delete k[ie]}}delete r[B]}}function D(B){if(r[B.id]===void 0)return;const V=r[B.id];for(const q in V){const k=V[q];for(const ie in k){const te=k[ie];for(const ee in te)g(te[ee].object),delete te[ee];delete k[ie]}}delete r[B.id]}function b(B){for(const V in r){const q=r[V];for(const k in q){const ie=q[k];if(ie[B.id]===void 0)continue;const te=ie[B.id];for(const ee in te)g(te[ee].object),delete te[ee];delete ie[B.id]}}}function P(B){for(const V in r){const q=r[V],k=B.isInstancedMesh===!0?B.id:0,ie=q[k];if(ie!==void 0){for(const te in ie){const ee=ie[te];for(const J in ee)g(ee[J].object),delete ee[J];delete ie[te]}delete q[k],Object.keys(q).length===0&&delete r[V]}}}function G(){O(),u=!0,o!==s&&(o=s,h(o.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:d,reset:G,resetDefaultState:O,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfObject:P,releaseStatesOfProgram:b,initAttributes:R,enableAttribute:y,disableUnusedAttributes:w}}function n2(n,e,t){let r;function s(f){r=f}function o(f,h){n.drawArrays(r,f,h),t.update(h,r,1)}function u(f,h,g){g!==0&&(n.drawArraysInstanced(r,f,h,g),t.update(h,r,g))}function d(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,h,0,g);let v=0;for(let x=0;x<g;x++)v+=h[x];t.update(v,r,1)}this.setMode=s,this.render=o,this.renderInstances=u,this.renderMultiDraw=d}function i2(n,e,t,r){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(b){return!(b!==xr&&r.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(b){const P=b===Tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==gi&&b!==Sr&&!P&&r.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function f(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const g=f(h);g!==h&&(dt("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=t.logarithmicDepthBuffer===!0&&m===!1;t.reversedDepthBuffer===!0&&m===!1&&dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&m===!0&&dt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),S=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),N=n.getParameter(n.MAX_VARYING_VECTORS),L=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=n.getParameter(n.MAX_SAMPLES),D=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:M,maxTextureSize:R,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:w,maxVaryings:N,maxFragmentUniforms:L,maxSamples:U,samples:D}}function r2(n){const e=this;let t=null,r=0,s=!1,o=!1;const u=new Ra,d=new pt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const x=m.length!==0||v||r!==0||s;return s=v,r=m.length,x},this.beginShadows=function(){o=!0,g(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,v){t=g(m,v,0)},this.setState=function(m,v,x){const M=m.clippingPlanes,R=m.clipIntersection,y=m.clipShadows,S=n.get(m);if(!s||M===null||M.length===0||o&&!y)o?g(null):h();else{const w=o?0:r,N=w*4;let L=S.clippingState||null;f.value=L,L=g(M,v,N,x);for(let U=0;U!==N;++U)L[U]=t[U];S.clippingState=L,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=w}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(m,v,x,M){const R=m!==null?m.length:0;let y=null;if(R!==0){if(y=f.value,M!==!0||y===null){const S=x+R*4,w=v.matrixWorldInverse;d.getNormalMatrix(w),(y===null||y.length<S)&&(y=new Float32Array(S));for(let N=0,L=x;N!==R;++N,L+=4)u.copy(m[N]).applyMatrix4(w,d),u.normal.toArray(y,L),y[L+3]=u.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}class Gm extends br{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},s=[r,r,r,r,r,r];this.texture=new Xx(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _o(5,5,5),o=new fs({name:"CubemapFromEquirect",uniforms:mo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ii,blending:so});o.uniforms.tEquirect.value=t;const u=new Oa(s,o),d=t.minFilter;return t.minFilter===Pa&&(t.minFilter=ti),new dm(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,s=!0){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,s);e.setRenderTarget(o)}}const My=256,a2=3,s2=20,tM=256,nM=16,o2=3,l2=new ue,u2=new Et;class Qc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new dm(1,10,null),this._boxMesh=new Oa(new _o(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,s=100,o={}){const{size:u=256,position:d=l2}=o,f=this._renderer;this._setSize(u);const h=this._allocateTarget(),g=this._getSourceTarget(!0);t>0&&(g.texture.mipmapsAutoUpdate=!1);const m=f.autoClear,v=f.autoClearColor,x=f.autoClearDepth,M=f.autoClearStencil,R=e.background;f.autoClear=!0,f.autoClearColor=!0,f.autoClearDepth=!0,f.autoClearStencil=!0,R===null&&(e.background=f.getClearColor(u2));const y=new dm(r,s,g);return y.position.copy(d),y.update(f,e),f.autoClear=m,f.autoClearColor=v,f.autoClearDepth=x,f.autoClearStencil=M,e.background=R,t>0&&(g.texture.mipmapsAutoUpdate=!0,this._blur(h,t)),this._applyPMREM(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=by(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(My,IA(e))}_fromTexture(e,t){e.mapping===fo||e.mapping===Pl?this._setSize(e.image.length===0?My:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=Ey(e,!1,!1),r=Math.log2(e)-a2;for(let s=0;s<=r;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=Ey(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const s=this._boxMesh,o=this._cubeCamera;s.material=r,o.renderTarget=e,o.activeMipmapLevel=t;const u=e.width>>t;e.viewport.set(0,0,u,u),o.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===fo||e.mapping===Pl?(this._cubemapMaterial===null&&(this._cubemapMaterial=wy()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=by()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=c2(),this._integrationMaterial=d2());const t=this._cubeSize,r=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const o=this._integrationMaterial.uniforms;o.envMap.value=this._sourceTarget.texture,o.sourceLod.value=Math.log2(t/nM);for(let u=0;u<=r;u++){const d=Qc.lodToRoughness(u,r);if(u>r-o2)o.roughness.value=d,this._renderCube(e,u,this._integrationMaterial);else{const f=d>0?Math.log2(t)+.5*Math.log2(6/(tM*Math.pow(d,4)))+.5:0;s.roughness.value=d,s.lodBias.value=f,this._renderCube(e,u,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=f2());const r=this._blurMaterial,s=r.uniforms,o=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=o.texture,this._renderCube(e,0,r),s.envMap.value=e.texture,this._renderCube(o,0,r)}}function Ey(n,e,t){return new Gm(n,{minFilter:Pa,generateMipmaps:e,type:Tr,colorSpace:Kc,depthBuffer:t})}function Bl(n,e,t){return new fs({name:n,uniforms:e,vertexShader:_t.cube_vert,fragmentShader:t,side:ii,blending:so,depthTest:!1,depthWrite:!1})}function c2(){return Bl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${tM}u

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
	`)}function d2(){return Bl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:nM}},`

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
	`)}function f2(){return Bl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${s2}
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
	`)}function by(){return Bl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function wy(){return Bl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function h2(n){let e=new WeakMap,t=new WeakMap,r=null;function s(v,x=!1){return v==null?null:x?u(v):o(v)}function o(v){if(v&&v.isTexture){const x=v.mapping;if(x===mh||x===gh)if(e.has(v)){const M=e.get(v).texture;return d(M,v.mapping)}else{const M=v.image;if(M&&M.height>0){const R=new Gm(M.height);return R.fromEquirectangularTexture(n,v),e.set(v,R),v.addEventListener("dispose",h),d(R.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture&&v.isPMREMTexture!==!0){const x=v.mapping,M=x===mh||x===gh,R=x===fo||x===Pl;if(M||R){let y=t.get(v);const S=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return r===null&&(r=new Qc(n)),y=M?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),y.texture;if(y!==void 0)return y.texture;{const w=v.image;return M&&w&&w.height>0||R&&w&&f(w)?(r===null&&(r=new Qc(n)),y=M?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),v.addEventListener("dispose",g),y.texture):null}}}return v}function d(v,x){return x===mh?v.mapping=fo:x===gh&&(v.mapping=Pl),v}function f(v){let x=0;const M=6;for(let R=0;R<M;R++)v[R]!==void 0&&x++;return x===M}function h(v){const x=v.target;x.removeEventListener("dispose",h);const M=e.get(x);M!==void 0&&(e.delete(x),M.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const M=t.get(x);M!==void 0&&(t.delete(x),M.dispose())}function m(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:s,dispose:m}}function p2(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const s=n.getExtension(r);return e[r]=s,s}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const s=t(r);return s===null&&kc("WebGLRenderer: "+r+" extension not supported."),s}}}function m2(n,e,t,r){const s={},o=new WeakMap,u=new FinalizationRegistry(M=>delete s[M]);function d(M){f(M.target)}function f(M){M.index!==null&&e.remove(M.index);for(const y in M.attributes)e.remove(M.attributes[y]);M.removeEventListener("dispose",d),delete s[M.id],u.unregister(M);const R=o.get(M);R&&(e.remove(R),o.delete(M)),r.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,t.memory.geometries--}function h(M,R){return s[R.id]!==void 0||(R.addEventListener("dispose",d),s[R.id]=new WeakRef(R),u.register(R,R.id,R),t.memory.geometries++),R}function g(M){const R=M.attributes;for(const y in R)e.update(R[y],n.ARRAY_BUFFER)}function m(M){const R=M.index,y=M.attributes.position;let S=0;if(y===void 0)return;const w=R!==null?R.array.length:y.array.length/3-1,N=y.count>=65535?Wx:Vx,L=new N(Math.ceil(w/3)*6,1),U=L.array;if(R!==null){const b=R.array;S=R.version;for(let P=0,G=0;P<w;P+=3){const O=b[P+0],B=b[P+1],V=b[P+2];U[G++]=O,U[G++]=B,U[G++]=B,U[G++]=V,U[G++]=V,U[G++]=O}}else{S=y.version;for(let b=0,P=0;b<w;b+=3){const G=b+0,O=b+1,B=b+2;U[P++]=G,U[P++]=O,U[P++]=O,U[P++]=B,U[P++]=B,U[P++]=G}}L.version=S;const D=o.get(M);D&&e.remove(D),o.set(M,L)}function v(M){const R=o.get(M);if(R){const y=M.index;y!==null&&R.version<y.version&&m(M)}else m(M);return o.get(M)}function x(){for(const M in s){const R=s[M].deref();R!==void 0&&f(R)}}return{get:h,update:g,getWireframeAttribute:v,dispose:x}}function g2(n,e,t){let r;function s(m){r=m}let o,u;function d(m){o=m.type,u=m.bytesPerElement}function f(m,v){n.drawElements(r,v,o,m*u),t.update(v,r,1)}function h(m,v,x){x!==0&&(n.drawElementsInstanced(r,v,o,m*u,x),t.update(v,r,x))}function g(m,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,o,m,0,x);let R=0;for(let y=0;y<x;y++)R+=v[y];t.update(R,r,1)}this.setMode=s,this.setIndex=d,this.render=f,this.renderInstances=h,this.renderMultiDraw=g}function v2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,u,d){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=d*(o/3);break;case n.LINES:t.lines+=d*(o/2);break;case n.LINE_STRIP:t.lines+=d*(o-1);break;case n.LINE_LOOP:t.lines+=d*o;break;case n.POINTS:t.points+=d*o;break;default:Nt("WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:r}}function _2(n,e,t){const r=new WeakMap,s=new rn;function o(u,d,f){const h=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==m){let G=function(){b.dispose(),r.delete(d),d.removeEventListener("dispose",G)};v!==void 0&&v.texture.dispose();const x=d.morphAttributes.position!==void 0,M=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],w=d.morphAttributes.color||[];let N=0;x===!0&&(N=1),M===!0&&(N=2),R===!0&&(N=3);let L=d.attributes.position.count*N,U=1;L>e.maxTextureSize&&(U=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const D=new Float32Array(L*U*4*m),b=new Hx(D,L,U,m);b.type=Sr,b.needsUpdate=!0;const P=N*4;for(let O=0;O<m;O++){const B=y[O],V=S[O],q=w[O],k=L*U*4*O;for(let ie=0;ie<B.count;ie++){const te=ie*P;x===!0&&(s.fromBufferAttribute(B,ie),D[k+te+0]=s.x,D[k+te+1]=s.y,D[k+te+2]=s.z,D[k+te+3]=0),M===!0&&(s.fromBufferAttribute(V,ie),D[k+te+4]=s.x,D[k+te+5]=s.y,D[k+te+6]=s.z,D[k+te+7]=0),R===!0&&(s.fromBufferAttribute(q,ie),D[k+te+8]=s.x,D[k+te+9]=s.y,D[k+te+10]=s.z,D[k+te+11]=q.itemSize===4?s.w:1)}}v={count:m,texture:b,size:new bt(L,U)},r.set(d,v),d.addEventListener("dispose",G)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let x=0;for(let R=0;R<h.length;R++)x+=h[R];const M=d.morphTargetsRelative?1:1-x;f.getUniforms().setValue(n,"morphTargetBaseInfluence",M),f.getUniforms().setValue(n,"morphTargetInfluences",h)}f.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}return{update:o}}function y2(n,e,t,r,s){let o=new WeakMap;function u(h){const g=s.render.frame,m=h.geometry,v=e.get(h,m);if(o.get(v)!==g&&(e.update(v),o.set(v,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==g&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),o.set(h,g))),h.isSkinnedMesh){const x=h.skeleton;o.get(x)!==g&&(x.update(),o.set(x,g))}return v}function d(){o=new WeakMap}function f(h){const g=h.target;g.removeEventListener("dispose",f),r.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:u,dispose:d}}const S2={[Ex]:"LINEAR_TONE_MAPPING",[bx]:"REINHARD_TONE_MAPPING",[wx]:"CINEON_TONE_MAPPING",[Rm]:"ACES_FILMIC_TONE_MAPPING",[Rx]:"AGX_TONE_MAPPING",[Ax]:"NEUTRAL_TONE_MAPPING",[Tx]:"CUSTOM_TONE_MAPPING"};function x2(n,e,t,r,s,o){const u=new br(e,t,{type:n,depthBuffer:s,stencilBuffer:o,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,f=null,h=null;const g=new Zr;g.setAttribute("position",new $n([-1,3,0,-1,-1,0,3,-1,0],3)),g.setAttribute("uv",new $n([0,2,0,0,2,0],2));const m=new lC({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Oa(g,m),x=new Jx(-1,1,1,-1,0,1);let M=null,R=null,y=!1,S,w=null,N=[],L=!1;this.setSize=function(U,D){u.setSize(U,D),d!==null&&d.setSize(U,D),f!==null&&f.setSize(U,D);for(let b=0;b<N.length;b++){const P=N[b];P.setSize&&P.setSize(U,D)}},this.setEffects=function(U){N=U,L=N.length>0&&N[0].isRenderPass===!0;const D=u.width,b=u.height;N.length>0&&d===null&&(d=new br(D,b,{type:Tr,depthBuffer:!1,stencilBuffer:!1}),f=new br(D,b,{type:Tr,depthBuffer:!1,stencilBuffer:!1}));const P=s===!0&&N.some(G=>G.needsDepthTexture===!0);P!==(u.depthTexture!==null)&&(P===!0&&h===null&&(h=new po(D,b),o===!0&&(h.format=La,h.type=ho)),u.dispose(),u.depthTexture=P?h:null,u.resolveDepthBuffer=P,u.storeMultisampledDepthBuffer=P);for(let G=0;G<N.length;G++){const O=N[G];O.setSize&&O.setSize(D,b),P&&O.needsDepthTexture===!0&&O.setDepthTexture&&O.setDepthTexture(h)}},this.begin=function(U,D){if(y||U.toneMapping===Wr&&N.length===0)return!1;if(w=D,D!==null){const b=D.width,P=D.height;(u.width!==b||u.height!==P)&&this.setSize(b,P)}return L===!1&&U.setRenderTarget(u),S=U.toneMapping,U.toneMapping=Wr,!0},this.hasRenderPass=function(){return L},this.end=function(U,D){U.toneMapping=S,y=!0;let b=u,P=d;for(let G=0;G<N.length;G++){const O=N[G];O.enabled!==!1&&(O.render(U,P,b,D),O.needsSwap!==!1&&(b=P,P=P===d?f:d))}if(M!==U.outputColorSpace||R!==U.toneMapping){M=U.outputColorSpace,R=U.toneMapping,m.defines={},Tt.getTransfer(M)===kt&&(m.defines.SRGB_TRANSFER="");const G=S2[R];G&&(m.defines[G]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=b.texture,U.setRenderTarget(w),U.render(v,x),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),d!==null&&d.dispose(),f!==null&&f.dispose(),g.dispose(),m.dispose()}}const iM=new Bn,rM=new po(1,1),aM=new qx(1),sM=new Hx,oM=new zA,lM=new Xx,Ty=[],Ry=[],Ay=new Float32Array(16),Cy=new Float32Array(9),Py=new Float32Array(4);function yo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const s=e*t;let o=Ty[s];if(o===void 0&&(o=new Float32Array(s),Ty[s]=o),e!==0){r.toArray(o,0);for(let u=1,d=0;u!==e;++u)d+=t,n[u].toArray(o,d)}return o}function xn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function Mn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function od(n,e){let t=Ry[e];t===void 0&&(t=new Int32Array(e),Ry[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function M2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function E2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2fv(this.addr,e),Mn(t,e)}}function b2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;n.uniform3fv(this.addr,e),Mn(t,e)}}function w2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4fv(this.addr,e),Mn(t,e)}}function T2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mn(t,e)}else{if(xn(t,r))return;Py.set(r),n.uniformMatrix2fv(this.addr,!1,Py),Mn(t,r)}}function R2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mn(t,e)}else{if(xn(t,r))return;Cy.set(r),n.uniformMatrix3fv(this.addr,!1,Cy),Mn(t,r)}}function A2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mn(t,e)}else{if(xn(t,r))return;Ay.set(r),n.uniformMatrix4fv(this.addr,!1,Ay),Mn(t,r)}}function C2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function P2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2iv(this.addr,e),Mn(t,e)}}function L2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;n.uniform3iv(this.addr,e),Mn(t,e)}}function I2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4iv(this.addr,e),Mn(t,e)}}function D2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function N2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2uiv(this.addr,e),Mn(t,e)}}function O2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;n.uniform3uiv(this.addr,e),Mn(t,e)}}function U2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4uiv(this.addr,e),Mn(t,e)}}function ld(n){return n.version===0&&(n.compareFunction=Bx,n.needsUpdate=!0),n}function F2(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?o=ld(rM):o=iM,t.setTexture2D(e||o,s)}function k2(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s),t.setTexture3D(e||oM,s)}function B2(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s);let o;this.type===n.SAMPLER_CUBE_SHADOW?o=ld(aM):o=lM,t.setTextureCube(e||o,s)}function z2(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s),t.setTexture2DArray(e||sM,s)}function H2(n){switch(n){case 5126:return M2;case 35664:return E2;case 35665:return b2;case 35666:return w2;case 35674:return T2;case 35675:return R2;case 35676:return A2;case 5124:case 35670:return C2;case 35667:case 35671:return P2;case 35668:case 35672:return L2;case 35669:case 35673:return I2;case 5125:return D2;case 36294:return N2;case 36295:return O2;case 36296:return U2;case 35678:case 36198:case 36298:case 36306:case 35682:return F2;case 35679:case 36299:case 36307:return k2;case 35680:case 36300:case 36308:case 36293:return B2;case 36289:case 36303:case 36311:case 36292:return z2}}function G2(n,e){n.uniform1fv(this.addr,e)}function V2(n,e){const t=yo(e,this.size,2);n.uniform2fv(this.addr,t)}function W2(n,e){const t=yo(e,this.size,3);n.uniform3fv(this.addr,t)}function $2(n,e){const t=yo(e,this.size,4);n.uniform4fv(this.addr,t)}function X2(n,e){const t=yo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function q2(n,e){const t=yo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Y2(n,e){const t=yo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function K2(n,e){n.uniform1iv(this.addr,e)}function Z2(n,e){n.uniform2iv(this.addr,e)}function j2(n,e){n.uniform3iv(this.addr,e)}function J2(n,e){n.uniform4iv(this.addr,e)}function Q2(n,e){n.uniform1uiv(this.addr,e)}function e3(n,e){n.uniform2uiv(this.addr,e)}function t3(n,e){n.uniform3uiv(this.addr,e)}function n3(n,e){n.uniform4uiv(this.addr,e)}function i3(n,e,t){const r=this.cache,s=e.length,o=od(t,s);xn(r,o)||(n.uniform1iv(this.addr,o),Mn(r,o));let u;this.type===n.SAMPLER_2D_SHADOW?u=ld(rM):u=iM;for(let d=0;d!==s;++d)t.setTexture2D(e[d]||u,o[d])}function r3(n,e,t){const r=this.cache,s=e.length,o=od(t,s);xn(r,o)||(n.uniform1iv(this.addr,o),Mn(r,o));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||oM,o[u])}function a3(n,e,t){const r=this.cache,s=e.length,o=od(t,s);xn(r,o)||(n.uniform1iv(this.addr,o),Mn(r,o));let u;this.type===n.SAMPLER_CUBE_SHADOW?u=ld(aM):u=lM;for(let d=0;d!==s;++d)t.setTextureCube(e[d]||u,o[d])}function s3(n,e,t){const r=this.cache,s=e.length,o=od(t,s);xn(r,o)||(n.uniform1iv(this.addr,o),Mn(r,o));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||sM,o[u])}function o3(n){switch(n){case 5126:return G2;case 35664:return V2;case 35665:return W2;case 35666:return $2;case 35674:return X2;case 35675:return q2;case 35676:return Y2;case 5124:case 35670:return K2;case 35667:case 35671:return Z2;case 35668:case 35672:return j2;case 35669:case 35673:return J2;case 5125:return Q2;case 36294:return e3;case 36295:return t3;case 36296:return n3;case 35678:case 36198:case 36298:case 36306:case 35682:return i3;case 35679:case 36299:case 36307:return r3;case 35680:case 36300:case 36308:case 36293:return a3;case 36289:case 36303:case 36311:case 36292:return s3}}class l3{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=H2(t.type)}}class u3{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=o3(t.type)}}class c3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const s=this.seq;for(let o=0,u=s.length;o!==u;++o){const d=s[o];d.setValue(e,t[d.id],r)}}}const Gh=/(\w+)(\])?(\[|\.)?/g;function Ly(n,e){n.seq.push(e),n.map[e.id]=e}function d3(n,e,t){const r=n.name,s=r.length;for(Gh.lastIndex=0;;){const o=Gh.exec(r),u=Gh.lastIndex;let d=o[1];const f=o[2]==="]",h=o[3];if(f&&(d=d|0),h===void 0||h==="["&&u+2===s){Ly(t,h===void 0?new l3(d,n,e):new u3(d,n,e));break}else{let m=t.map[d];m===void 0&&(m=new c3(d),Ly(t,m)),t=m}}}class Bc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(t,u),f=e.getUniformLocation(t,d.name);d3(d,f,this)}const s=[],o=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(u):o.push(u);s.length>0&&(this.seq=s.concat(o))}setValue(e,t,r,s){const o=this.map[t];o!==void 0&&o.setValue(e,r,s)}setOptional(e,t,r){const s=t[r];s!==void 0&&this.setValue(e,r,s)}static upload(e,t,r,s){for(let o=0,u=t.length;o!==u;++o){const d=t[o],f=r[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,s)}}static seqWithValue(e,t){const r=[];for(let s=0,o=e.length;s!==o;++s){const u=e[s];u.id in t&&r.push(u)}return r}}function Iy(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const f3=37297;let h3=0;function p3(n,e){const t=n.split(`
`),r=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=s;u<o;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const Dy=new pt;function m3(n){Tt._getMatrix(Dy,Tt.workingColorSpace,n);const e=`mat3( ${Dy.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(n)){case Zc:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ny(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),o=(n.getShaderInfoLog(e)||"").trim();if(r&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+o+`

`+p3(n.getShaderSource(e),d)}else return o}function g3(n,e){const t=m3(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const v3={[Ex]:"Linear",[bx]:"Reinhard",[wx]:"Cineon",[Rm]:"ACESFilmic",[Rx]:"AgX",[Ax]:"Neutral",[Tx]:"Custom"};function _3(n,e){const t=v3[e];return t===void 0?(dt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rc=new ue;function y3(){Tt.getLuminanceCoefficients(Rc);const n=Rc.x.toFixed(4),e=Rc.y.toFixed(4),t=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gl).join(`
`)}function x3(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function M3(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<r;s++){const o=n.getActiveAttrib(e,s),u=o.name;let d=1;o.type===n.FLOAT_MAT2&&(d=2),o.type===n.FLOAT_MAT3&&(d=3),o.type===n.FLOAT_MAT4&&(d=4),t[u]={type:o.type,location:n.getAttribLocation(e,u),locationSize:d}}return t}function gl(n){return n!==""}function Oy(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Uy(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E3=/^[ \t]*#include +<([\w\d./]+)>/gm;function hm(n){return n.replace(E3,b3)}function b3(n,e){const t=_t[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return hm(t)}const w3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fy(n){return n.replace(w3,T3)}function T3(n,e,t,r){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function ky(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const R3={[Dc]:"SHADOWMAP_TYPE_PCF",[pl]:"SHADOWMAP_TYPE_VSM"};function A3(n){return R3[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const C3={[Pl]:"ENVMAP_MODE_REFRACTION"};function P3(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":C3[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const L3={[Mx]:"ENVMAP_BLENDING_MULTIPLY",[mA]:"ENVMAP_BLENDING_MIX",[gA]:"ENVMAP_BLENDING_ADD"};function I3(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":L3[n.combine]||"ENVMAP_BLENDING_NONE"}function D3(n,e,t,r){const s=n.getContext(),o=t.defines;let u=t.vertexShader,d=t.fragmentShader;const f=A3(t),h=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",g=P3(t),m=I3(t),v=S3(t),x=x3(o),M=s.createProgram();let R,y,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(R=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(gl).join(`
`),R.length>0&&(R+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(gl).join(`
`),y.length>0&&(y+=`
`)):(R=[ky(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gl).join(`
`),y=[ky(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+m:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wr?"#define TONE_MAPPING":"",t.toneMapping!==Wr?_t.tonemapping_pars_fragment:"",t.toneMapping!==Wr?_3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,g3("linearToOutputTexel",t.outputColorSpace),y3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gl).join(`
`)),u=hm(u),u=Oy(u,t),u=Uy(u,t),d=hm(d),d=Oy(d,t),d=Uy(d,t),u=Fy(u),d=Fy(d),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,R=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,y=["#define varying in",t.glslVersion===K_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===K_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const w=S+R+u,N=S+y+d,L=Iy(s,s.VERTEX_SHADER,w),U=Iy(s,s.FRAGMENT_SHADER,N);s.attachShader(M,L),s.attachShader(M,U),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function D(O){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(M)||"",V=s.getShaderInfoLog(L)||"",q=s.getShaderInfoLog(U)||"",k=B.trim(),ie=V.trim(),te=q.trim();let ee=!0,J=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,L,U);else{const Y=Ny(s,L,"vertex"),j=Ny(s,U,"fragment");Nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+k+`
`+Y+`
`+j)}else k!==""?dt("WebGLProgram: Program Info Log:",k):(ie===""||te==="")&&(J=!1);J&&(O.diagnostics={runnable:ee,programLog:k,vertexShader:{log:ie,prefix:R},fragmentShader:{log:te,prefix:y}})}s.deleteShader(L),s.deleteShader(U),b=new Bc(s,M),P=M3(s,M)}let b;this.getUniforms=function(){return b===void 0&&D(this),b};let P;this.getAttributes=function(){return P===void 0&&D(this),P};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=s.getProgramParameter(M,f3)),G},this.destroy=function(){r.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=h3++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=U,this}let N3=0;class O3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new U3(e),t.set(e,r)),r}}class U3{constructor(e){this.id=N3++,this.code=e,this.usedTimes=0}}function F3(n){return n===ds||n===qc||n===Yc}function k3(n,e,t,r,s,o){const u=new Um,d=new O3,f=new Set,h=[],g=new Map,m=r.logarithmicDepthBuffer,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return f.add(b),b===0?"uv":`uv${b}`}function M(b,P,G,O,B,V){const q=O.fog,k=B.geometry,ie=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,te=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,ee=e.get(b.envMap||ie,te),J=v[b.type];let Y=r.precision;b.precision!==null&&(Y=r.getMaxPrecision(b.precision),Y!==b.precision&&dt("WebGLProgram.getParameters:",b.precision,"not supported, using",Y,"instead."));const j=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,F=j!==void 0?j.length:0;let Q=0;k.morphAttributes.position!==void 0&&(Q=1),k.morphAttributes.normal!==void 0&&(Q=2),k.morphAttributes.color!==void 0&&(Q=3);let Ce,re,Se,Ee;if(J){const Ge=mr[J];Ce=Ge.vertexShader,re=Ge.fragmentShader}else{Ce=b.vertexShader,re=b.fragmentShader;const Ge=d.getVertexShaderStage(b),xt=d.getFragmentShaderStage(b);d.update(b,Ge,xt),Se=Ge.id,Ee=xt.id}const Ae=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),He=B.isInstancedMesh===!0,ft=B.isBatchedMesh===!0,Xe=!!b.map,gt=!!b.matcap,yt=!!ee,ot=yt&&ee.isPMREMTexture===!0,Wt=!!b.aoMap,Ft=!!b.lightMap,en=!!b.bumpMap&&b.wireframe===!1,Lt=!!b.normalMap,cn=!!b.displacementMap,Ot=!!b.emissiveMap,Zt=!!b.metalnessMap,an=!!b.roughnessMap,pn=b.anisotropy>0,K=b.clearcoat>0,mn=b.diffuseRoughness>0,Ct=b.dispersion>0,fe=b.retroreflectivity>0,ce=b.iridescence>0,Pe=b.sheen>0,he=b.transmission>0,Me=pn&&!!b.anisotropyMap,I=K&&!!b.clearcoatMap,T=K&&!!b.clearcoatNormalMap,W=K&&!!b.clearcoatRoughnessMap,xe=mn&&!!b.diffuseRoughnessMap,pe=ce&&!!b.iridescenceMap,be=ce&&!!b.iridescenceThicknessMap,Ie=Pe&&!!b.sheenColorMap,ge=Pe&&!!b.sheenRoughnessMap,_e=!!b.specularMap,Ne=!!b.specularColorMap,H=!!b.specularIntensityMap,ye=he&&!!b.transmissionMap,me=he&&!!b.thicknessMap,Fe=!!b.gradientMap,De=!!b.alphaMap,Oe=b.alphaTest>0,Je=!!b.alphaHash,ht=!!b.extensions;let Te=Wr;b.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Te=n.toneMapping);const nt=ot?ee.isCompressedCubeTexture?ee.image[0].mipmaps:ee.mipmaps:null,ut={shaderID:J,shaderType:b.type,shaderName:b.name,vertexShader:Ce,fragmentShader:re,defines:b.defines,customVertexShaderID:Se,customFragmentShaderID:Ee,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:Y,batching:ft,batchingColor:ft&&B._colorsTexture!==null,instancing:He,instancingColor:He&&B.instanceColor!==null,instancingMorph:He&&B.morphTexture!==null,outputColorSpace:Ae===null?n.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Xe,matcap:gt,envMap:yt,envMapMode:yt&&ee.mapping,envMapPMREM:ot,envMapMaxLod:ot?nt.length-1:null,envMapSize:ot?nt[0].width:null,aoMap:Wt,lightMap:Ft,bumpMap:en,normalMap:Lt,displacementMap:cn,emissiveMap:Ot,normalMapObjectSpace:Lt&&b.normalMapType===yA,normalMapTangentSpace:Lt&&b.normalMapType===um,packedNormalMap:Lt&&b.normalMapType===um&&F3(b.normalMap.format),metalnessMap:Zt,roughnessMap:an,anisotropy:pn,anisotropyMap:Me,clearcoat:K,clearcoatMap:I,clearcoatNormalMap:T,clearcoatRoughnessMap:W,diffuseRoughness:mn,diffuseRoughnessMap:xe,dispersion:Ct,retroreflection:fe,iridescence:ce,iridescenceMap:pe,iridescenceThicknessMap:be,sheen:Pe,sheenColorMap:Ie,sheenRoughnessMap:ge,specularMap:_e,specularColorMap:Ne,specularIntensityMap:H,transmission:he,transmissionMap:ye,thicknessMap:me,gradientMap:Fe,opaque:b.transparent===!1&&b.blending===xl&&b.alphaToCoverage===!1,alphaMap:De,alphaTest:Oe,alphaHash:Je,combine:b.combine,mapUv:Xe&&x(b.map.channel),aoMapUv:Wt&&x(b.aoMap.channel),lightMapUv:Ft&&x(b.lightMap.channel),bumpMapUv:en&&x(b.bumpMap.channel),normalMapUv:Lt&&x(b.normalMap.channel),displacementMapUv:cn&&x(b.displacementMap.channel),emissiveMapUv:Ot&&x(b.emissiveMap.channel),metalnessMapUv:Zt&&x(b.metalnessMap.channel),roughnessMapUv:an&&x(b.roughnessMap.channel),anisotropyMapUv:Me&&x(b.anisotropyMap.channel),clearcoatMapUv:I&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:T&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&x(b.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:xe&&x(b.diffuseRoughnessMap.channel),iridescenceMapUv:pe&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:be&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:ge&&x(b.sheenRoughnessMap.channel),specularMapUv:_e&&x(b.specularMap.channel),specularColorMapUv:Ne&&x(b.specularColorMap.channel),specularIntensityMapUv:H&&x(b.specularIntensityMap.channel),transmissionMapUv:ye&&x(b.transmissionMap.channel),thicknessMapUv:me&&x(b.thicknessMap.channel),alphaMapUv:De&&x(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Lt||pn),vertexNormals:!!k.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(Xe||De),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||k.attributes.normal===void 0&&Lt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ve,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:Q,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:V.filter(Ge=>Ge.texture!==null).length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:Te,decodeVideoTexture:Xe&&b.map.isVideoTexture===!0&&Tt.getTransfer(b.map.colorSpace)===kt,decodeVideoTextureEmissive:Ot&&b.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(b.emissiveMap.colorSpace)===kt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===vr,flipSided:b.side===ii,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ht&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&b.extensions.multiDraw===!0||ft)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ut.vertexUv1s=f.has(1),ut.vertexUv2s=f.has(2),ut.vertexUv3s=f.has(3),f.clear(),ut}function R(b){const P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(const G in b.defines)P.push(G),P.push(b.defines[G]);return b.isRawShaderMaterial===!1&&(y(P,b),S(P,b),P.push(n.outputColorSpace)),P.push(b.customProgramCacheKey),P.join()}function y(b,P){b.push(P.precision),b.push(P.outputColorSpace),b.push(P.envMapMode),b.push(P.envMapPMREM),b.push(P.envMapMaxLod),b.push(P.envMapSize),b.push(P.mapUv),b.push(P.alphaMapUv),b.push(P.lightMapUv),b.push(P.aoMapUv),b.push(P.bumpMapUv),b.push(P.normalMapUv),b.push(P.displacementMapUv),b.push(P.emissiveMapUv),b.push(P.metalnessMapUv),b.push(P.roughnessMapUv),b.push(P.anisotropyMapUv),b.push(P.clearcoatMapUv),b.push(P.clearcoatNormalMapUv),b.push(P.clearcoatRoughnessMapUv),b.push(P.diffuseRoughnessMapUv),b.push(P.iridescenceMapUv),b.push(P.iridescenceThicknessMapUv),b.push(P.sheenColorMapUv),b.push(P.sheenRoughnessMapUv),b.push(P.specularMapUv),b.push(P.specularColorMapUv),b.push(P.specularIntensityMapUv),b.push(P.transmissionMapUv),b.push(P.thicknessMapUv),b.push(P.combine),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.numSunLights),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numSunLightShadows),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.numLightProbes),b.push(P.numLightProbeGrids),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function S(b,P){u.disableAll(),P.instancing&&u.enable(0),P.instancingColor&&u.enable(1),P.instancingMorph&&u.enable(2),P.matcap&&u.enable(3),P.envMap&&u.enable(4),P.normalMapObjectSpace&&u.enable(5),P.normalMapTangentSpace&&u.enable(6),P.clearcoat&&u.enable(7),P.iridescence&&u.enable(8),P.alphaTest&&u.enable(9),P.vertexColors&&u.enable(10),P.vertexAlphas&&u.enable(11),P.vertexUv1s&&u.enable(12),P.vertexUv2s&&u.enable(13),P.vertexUv3s&&u.enable(14),P.vertexTangents&&u.enable(15),P.anisotropy&&u.enable(16),P.alphaHash&&u.enable(17),P.batching&&u.enable(18),P.dispersion&&u.enable(19),P.retroreflection&&u.enable(24),P.diffuseRoughness&&u.enable(25),P.batchingColor&&u.enable(20),P.gradientMap&&u.enable(21),P.packedNormalMap&&u.enable(22),P.vertexNormals&&u.enable(23),b.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reversedDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),P.numLightProbeGrids>0&&u.enable(22),P.hasPositionAttribute&&u.enable(23),b.push(u.mask)}function w(b){const P=v[b.type];let G;if(P){const O=mr[P];G=aC.clone(O.uniforms)}else G=b.uniforms;return G}function N(b,P){let G=g.get(P);return G!==void 0?++G.usedTimes:(G=new D3(n,P,b,s),h.push(G),g.set(P,G)),G}function L(b){if(--b.usedTimes===0){const P=h.indexOf(b);h[P]=h[h.length-1],h.pop(),g.delete(b.cacheKey),b.destroy()}}function U(b){d.remove(b)}function D(){d.dispose()}return{getParameters:M,getProgramCacheKey:R,getUniforms:w,acquireProgram:N,releaseProgram:L,releaseShaderCache:U,programs:h,dispose:D}}function B3(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let d=n.get(u);return d===void 0&&(d={},n.set(u,d)),d}function r(u){n.delete(u)}function s(u,d,f){n.get(u)[d]=f}function o(){n=new WeakMap}return{has:e,get:t,remove:r,update:s,dispose:o}}function z3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function By(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zy(){const n=[];let e=0;const t=[],r=[],s=[];function o(){e=0,t.length=0,r.length=0,s.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function d(v,x,M,R,y,S){let w=n[e];return w===void 0?(w={id:v.id,object:v,geometry:x,material:M,materialVariant:u(v),groupOrder:R,renderOrder:v.renderOrder,z:y,group:S},n[e]=w):(w.id=v.id,w.object=v,w.geometry=x,w.material=M,w.materialVariant=u(v),w.groupOrder=R,w.renderOrder=v.renderOrder,w.z=y,w.group=S),e++,w}function f(v,x,M,R,y,S,w){w.reversedDepth===!0&&(y=-y);const N=d(v,x,M,R,y,S);M.transmission>0?r.push(N):M.transparent===!0?s.push(N):t.push(N)}function h(v,x,M,R,y,S){const w=d(v,x,M,R,y,S);M.transmission>0?r.unshift(w):M.transparent===!0?s.unshift(w):t.unshift(w)}function g(v,x){t.length>1&&t.sort(v||z3),r.length>1&&r.sort(x||By),s.length>1&&s.sort(x||By)}function m(){for(let v=e,x=n.length;v<x;v++){const M=n[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:s,init:o,push:f,unshift:h,finish:m,sort:g}}function H3(){let n=new WeakMap;function e(r,s){const o=n.get(r);let u;return o===void 0?(u=new zy,n.set(r,[u])):s>=o.length?(u=new zy,o.push(u)):u=o[s],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function G3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ue,color:new Et};break;case"SpotLight":t={position:new ue,direction:new ue,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ue,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ue,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return n[e.id]=t,t}}}function V3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let W3=0;function $3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function X3(n){const e=new G3,t=V3(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ue);const s=new ue,o=new Qt,u=new Qt;function d(h){let g=0,m=0,v=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let x=0,M=0,R=0,y=0,S=0,w=0,N=0,L=0,U=0,D=0,b=0,P=0,G=0,O=0;h.sort($3);for(let V=0,q=h.length;V<q;V++){const k=h[V],ie=k.color,te=k.intensity,ee=k.distance;let J=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ds?J=k.shadow.map.texture:J=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=ie.r*te,m+=ie.g*te,v+=ie.b*te;else if(k.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(k.sh.coefficients[Y],te);O++}else if(k.isSunLight){const Y=e.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const j=k.shadow,F=t.get(k);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),r.sunShadow[M]=F,r.sunShadowMap[M]=J;const Q=j.getViewportCount();for(let Ce=0;Ce<Q;Ce++)r.sunShadowMatrix[R+Ce]=j.getMatrix(Ce),r.sunShadowCascade[R+Ce]=j._cascadeData[Ce];R+=Q,M++}r.sun[x]=Y,x++}else if(k.isDirectionalLight){const Y=e.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const j=k.shadow,F=t.get(k);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,r.directionalShadow[y]=F,r.directionalShadowMap[y]=J,r.directionalShadowMatrix[y]=k.shadow.matrix,U++}r.directional[y]=Y,y++}else if(k.isSpotLight){const Y=e.get(k);Y.position.setFromMatrixPosition(k.matrixWorld),Y.color.copy(ie).multiplyScalar(te),Y.distance=ee,Y.coneCos=Math.cos(k.angle),Y.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Y.decay=k.decay,r.spot[w]=Y;const j=k.shadow;if(k.map&&(r.spotLightMap[P]=k.map,P++,j.updateMatrices(k),k.castShadow&&G++),r.spotLightMatrix[w]=j.matrix,k.castShadow){const F=t.get(k);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,r.spotShadow[w]=F,r.spotShadowMap[w]=J,b++}w++}else if(k.isRectAreaLight){const Y=e.get(k);Y.color.copy(ie).multiplyScalar(te),Y.halfWidth.set(k.width*.5,0,0),Y.halfHeight.set(0,k.height*.5,0),r.rectArea[N]=Y,N++}else if(k.isPointLight){const Y=e.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity),Y.distance=k.distance,Y.decay=k.decay,k.castShadow){const j=k.shadow,F=t.get(k);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,F.shadowCameraNear=j.camera.near,F.shadowCameraFar=j.camera.far,r.pointShadow[S]=F,r.pointShadowMap[S]=J,r.pointShadowMatrix[S]=k.shadow.matrix,D++}r.point[S]=Y,S++}else if(k.isHemisphereLight){const Y=e.get(k);Y.skyColor.copy(k.color).multiplyScalar(te),Y.groundColor.copy(k.groundColor).multiplyScalar(te),r.hemi[L]=Y,L++}}N>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=m,r.ambient[2]=v;const B=r.hash;(B.sunLength!==x||B.directionalLength!==y||B.pointLength!==S||B.spotLength!==w||B.rectAreaLength!==N||B.hemiLength!==L||B.numSunShadows!==M||B.numDirectionalShadows!==U||B.numPointShadows!==D||B.numSpotShadows!==b||B.numSpotMaps!==P||B.numLightProbes!==O)&&(r.sun.length=x,r.directional.length=y,r.spot.length=w,r.rectArea.length=N,r.point.length=S,r.hemi.length=L,r.sunShadow.length=M,r.sunShadowMap.length=M,r.sunShadowMatrix.length=R,r.sunShadowCascade.length=R,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.directionalShadowMatrix.length=U,r.pointShadow.length=D,r.pointShadowMap.length=D,r.pointShadowMatrix.length=D,r.spotShadow.length=b,r.spotShadowMap.length=b,r.spotLightMatrix.length=b+P-G,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=O,B.sunLength=x,B.directionalLength=y,B.pointLength=S,B.spotLength=w,B.rectAreaLength=N,B.hemiLength=L,B.numSunShadows=M,B.numDirectionalShadows=U,B.numPointShadows=D,B.numSpotShadows=b,B.numSpotMaps=P,B.numLightProbes=O,r.version=W3++)}function f(h,g){let m=0,v=0,x=0,M=0,R=0,y=0;const S=g.matrixWorldInverse;for(let w=0,N=h.length;w<N;w++){const L=h[w];if(L.isSunLight){const U=r.sun[m];U.direction.setFromMatrixPosition(L.matrixWorld),U.direction.transformDirection(S),m++}else if(L.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(s),U.direction.transformDirection(S),v++}else if(L.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(s),U.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const U=r.rectArea[R];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(S),u.identity(),o.copy(L.matrixWorld),o.premultiply(S),u.extractRotation(o),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),U.halfWidth.applyMatrix4(u),U.halfHeight.applyMatrix4(u),R++}else if(L.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const U=r.hemi[y];U.direction.setFromMatrixPosition(L.matrixWorld),U.direction.transformDirection(S),y++}}}return{setup:d,setupView:f,state:r}}function Hy(n){const e=new X3(n),t=[],r=[],s=[];function o(m){g.camera=m,t.length=0,r.length=0,s.length=0}function u(m){m.isLightProbeGrid?s.push(m):t.push(m)}function d(m){r.push(m)}function f(){e.setup(t),s.sort((m,v)=>m.priority-v.priority||m.id-v.id)}function h(m){e.setupView(t,m)}const g={lightsArray:t,shadowsArray:r,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:g,setupLights:f,setupLightsView:h,pushLight:u,pushShadow:d}}function q3(n){let e=new WeakMap;function t(s,o=0){const u=e.get(s);let d;return u===void 0?(d=new Hy(n),e.set(s,[d])):o>=u.length?(d=new Hy(n),u.push(d)):d=u[o],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const Y3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K3=`uniform sampler2D shadow_pass;
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
}`,Z3=[new ue(1,0,0),new ue(-1,0,0),new ue(0,1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1)],j3=[new ue(0,-1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1),new ue(0,-1,0),new ue(0,-1,0)],Gy=new Qt,ol=new ue,Vh=new ue;function J3(n,e,t){let r=new Dl;const s=new bt,o=new bt,u=new rn,d=new cC,f=new dC,h={},g=t.maxTextureSize,m={[cs]:ii,[ii]:cs,[vr]:vr},v=new fs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:Y3,fragmentShader:K3}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const M=new Zr;M.setAttribute("position",new us(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Oa(M,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dc;let S=this.type;this.render=function(D,b,P){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;this.type===yx&&(dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Dc);const G=n.getRenderTarget(),O=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),V=n.state;V.setBlending(so),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const q=S!==this.type;q&&b.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(ie=>ie.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,ie=D.length;k<ie;k++){const te=D[k],ee=te.shadow;if(ee===void 0){dt("WebGLShadowMap:",te,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;s.copy(ee.mapSize);const J=ee.getFrameExtents();s.multiply(J),o.copy(ee.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(o.x=Math.floor(g/J.x),s.x=o.x*J.x,ee.mapSize.x=o.x),s.y>g&&(o.y=Math.floor(g/J.y),s.y=o.y*J.y,ee.mapSize.y=o.y));const Y=n.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=Y,ee.map===null||q===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===pl){if(te.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new br(s.x,s.y,{format:ds,type:Tr,minFilter:ti,magFilter:ti,generateMipmaps:!1}),ee.map.texture.name=te.name+".shadowMap",ee.map.depthTexture=new po(s.x,s.y,Sr),ee.map.depthTexture.name=te.name+".shadowMapDepth",ee.map.depthTexture.format=Na,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Cn,ee.map.depthTexture.magFilter=Cn}else te.isPointLight?(ee.map=new Gm(s.x),ee.map.depthTexture=new qx(s.x,wr)):(ee.map=new br(s.x,s.y),ee.map.depthTexture=new po(s.x,s.y,wr)),ee.map.depthTexture.name=te.name+".shadowMap",ee.map.depthTexture.format=Na,this.type===Dc?(ee.map.depthTexture.compareFunction=Y?kx:Fx,ee.map.depthTexture.minFilter=ti,ee.map.depthTexture.magFilter=ti):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Cn,ee.map.depthTexture.magFilter=Cn);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==s.x||ee.map.height!==s.y)&&ee.map.setSize(s.x,s.y);const j=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();te.isPointLight!==!0&&ee.updateMatrices(te,P);const F=(ee.camera.layers.mask&4294967294)!==0?ee.camera.layers:P.layers;for(let Q=0;Q<j;Q++){const Ce=ee.getCamera(Q);if(te.isPointLight){const re=ee.camera,Se=ee.matrix,Ee=te.distance||re.far;Ee!==re.far&&(re.far=Ee,re.updateProjectionMatrix()),ol.setFromMatrixPosition(te.matrixWorld),re.position.copy(ol),Vh.copy(re.position),Vh.add(Z3[Q]),re.up.copy(j3[Q]),re.lookAt(Vh),re.updateMatrixWorld(),Se.makeTranslation(-ol.x,-ol.y,-ol.z),Gy.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(Gy,re.coordinateSystem,re.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)n.setRenderTarget(ee.map,Q),n.clear();else{Q===0&&(n.setRenderTarget(ee.map),n.clear());const re=ee.getViewport(Q);u.set(o.x*re.x,o.y*re.y,o.x*re.z,o.y*re.w),V.viewport(u)}r=ee.getFrustum(Q),L(b,P,Ce,te,F,this.type)}ee.isPointLightShadow!==!0&&this.type===pl&&w(ee,P),ee.needsUpdate=!1}S=this.type,y.needsUpdate=!1,n.setRenderTarget(G,O,B)};function w(D,b){const P=e.update(R);v.defines.VSM_SAMPLES!==D.blurSamples&&(v.defines.VSM_SAMPLES=D.blurSamples,x.defines.VSM_SAMPLES=D.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),D.mapPass===null?D.mapPass=new br(s.x,s.y,{format:ds,type:Tr}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),v.uniforms.shadow_pass.value=D.map.depthTexture,v.uniforms.resolution.value.set(D.map.width,D.map.height),v.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(b,null,P,v,R,null),x.uniforms.shadow_pass.value=D.mapPass.texture,x.uniforms.resolution.value.set(D.map.width,D.map.height),x.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(b,null,P,x,R,null)}function N(D,b,P,G){let O=null;const B=P.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(B!==void 0)O=B;else if(O=P.isPointLight===!0?f:d,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const V=O.uuid,q=b.uuid;let k=h[V];k===void 0&&(k={},h[V]=k);let ie=k[q];ie===void 0&&(ie=O.clone(),k[q]=ie,b.addEventListener("dispose",U)),O=ie}if(O.visible=b.visible,O.wireframe=b.wireframe,G===pl?O.side=b.shadowSide!==null?b.shadowSide:b.side:O.side=b.shadowSide!==null?b.shadowSide:m[b.side],O.alphaMap=b.alphaMap,O.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,O.map=b.map,O.clipShadows=b.clipShadows,O.clippingPlanes=b.clippingPlanes,O.clipIntersection=b.clipIntersection,O.displacementMap=b.displacementMap,O.displacementScale=b.displacementScale,O.displacementBias=b.displacementBias,O.wireframeLinewidth=b.wireframeLinewidth,O.linewidth=b.linewidth,P.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const V=n.properties.get(O);V.light=P}return O}function L(D,b,P,G,O,B){if(D.visible===!1)return;if(D.layers.test(O)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&B===pl)&&(!D.frustumCulled||D.intersectsFrustum(r))){D.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,D.matrixWorld);const k=e.update(D),ie=D.material;if(Array.isArray(ie)){const te=k.groups;for(let ee=0,J=te.length;ee<J;ee++){const Y=te[ee],j=ie[Y.materialIndex];if(j&&j.visible){const F=N(D,j,G,B);D.onBeforeShadow(n,D,b,P,k,F,Y),n.renderBufferDirect(P,null,k,F,D,Y),D.onAfterShadow(n,D,b,P,k,F,Y)}}}else if(ie.visible){const te=N(D,ie,G,B);D.onBeforeShadow(n,D,b,P,k,te,null),n.renderBufferDirect(P,null,k,te,D,null),D.onAfterShadow(n,D,b,P,k,te,null)}}const q=D.children;for(let k=0,ie=q.length;k<ie;k++)L(q[k],b,P,G,O,B)}function U(D){D.target.removeEventListener("dispose",U);for(const P in h){const G=h[P],O=D.target.uuid;O in G&&(G[O].dispose(),delete G[O])}}}function Q3(n,e){function t(){let H=!1;const ye=new rn;let me=null;const Fe=new rn(0,0,0,0);return{setMask:function(De){me!==De&&!H&&(n.colorMask(De,De,De,De),me=De)},setLocked:function(De){H=De},setClear:function(De,Oe,Je,ht,Te){Te===!0&&(De*=ht,Oe*=ht,Je*=ht),ye.set(De,Oe,Je,ht),Fe.equals(ye)===!1&&(n.clearColor(De,Oe,Je,ht),Fe.copy(ye))},reset:function(){H=!1,me=null,Fe.set(-1,0,0,0)}}}function r(){let H=!1,ye=!1,me=null,Fe=null,De=null;return{setReversed:function(Oe){if(ye!==Oe){const Je=e.get("EXT_clip_control");Oe?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),ye=Oe;const ht=De;De=null,this.setClear(ht)}},getReversed:function(){return ye},setTest:function(Oe){Oe?ve(n.DEPTH_TEST):He(n.DEPTH_TEST)},setMask:function(Oe){me!==Oe&&!H&&(n.depthMask(Oe),me=Oe)},setFunc:function(Oe){if(ye&&(Oe=PA[Oe]),Fe!==Oe){switch(Oe){case wp:n.depthFunc(n.NEVER);break;case Tp:n.depthFunc(n.ALWAYS);break;case Rp:n.depthFunc(n.LESS);break;case Cl:n.depthFunc(n.LEQUAL);break;case Ap:n.depthFunc(n.EQUAL);break;case Cp:n.depthFunc(n.GEQUAL);break;case Pp:n.depthFunc(n.GREATER);break;case Lp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Fe=Oe}},setLocked:function(Oe){H=Oe},setClear:function(Oe){De!==Oe&&(De=Oe,ye&&(Oe=1-Oe),n.clearDepth(Oe))},reset:function(){H=!1,me=null,Fe=null,De=null,ye=!1}}}function s(){let H=!1,ye=null,me=null,Fe=null,De=null,Oe=null,Je=null,ht=null,Te=null;return{setTest:function(nt){H||(nt?ve(n.STENCIL_TEST):He(n.STENCIL_TEST))},setMask:function(nt){ye!==nt&&!H&&(n.stencilMask(nt),ye=nt)},setFunc:function(nt,ut,Ge){(me!==nt||Fe!==ut||De!==Ge)&&(n.stencilFunc(nt,ut,Ge),me=nt,Fe=ut,De=Ge)},setOp:function(nt,ut,Ge){(Oe!==nt||Je!==ut||ht!==Ge)&&(n.stencilOp(nt,ut,Ge),Oe=nt,Je=ut,ht=Ge)},setLocked:function(nt){H=nt},setClear:function(nt){Te!==nt&&(n.clearStencil(nt),Te=nt)},reset:function(){H=!1,ye=null,me=null,Fe=null,De=null,Oe=null,Je=null,ht=null,Te=null}}}const o=new t,u=new r,d=new s;let f={};const h=new WeakMap;let g={},m={},v={},x=new WeakMap,M=[],R=null,y=!1,S=null,w=null,N=null,L=null,U=null,D=null,b=null,P=new Et(0,0,0),G=0,O=!1,B=null,V=null,q=null,k=null,ie=null;const te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,J=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Y)[1]),ee=J>=1):Y.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),ee=J>=2);let j=null,F={};const Q=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),re=new rn().fromArray(Q),Se=new rn().fromArray(Ce);function Ee(H,ye,me,Fe){const De=new Uint8Array(4),Oe=n.createTexture();n.bindTexture(H,Oe),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<me;Je++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,Fe,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(ye+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return Oe}const Ae={};Ae[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ve(n.DEPTH_TEST),u.setFunc(Cl),en(!1),Lt($_),ve(n.CULL_FACE),Wt(so);function ve(H){g[H]!==!0&&(n.enable(H),g[H]=!0)}function He(H){g[H]!==!1&&(n.disable(H),g[H]=!1)}function ft(H,ye){return v[H]!==ye?(n.bindFramebuffer(H,ye),v[H]=ye,H===n.DRAW_FRAMEBUFFER&&(v[n.FRAMEBUFFER]=ye),H===n.FRAMEBUFFER&&(v[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function Xe(H,ye){let me=M,Fe=!1;if(H){me=x.get(ye),me===void 0&&(me=[],x.set(ye,me));const De=H.textures;if(me.length!==De.length||me[0]!==n.COLOR_ATTACHMENT0){for(let Oe=0,Je=De.length;Oe<Je;Oe++)me[Oe]=n.COLOR_ATTACHMENT0+Oe;me.length=De.length,Fe=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,Fe=!0);Fe&&n.drawBuffers(me)}function gt(H){return R!==H?(n.useProgram(H),R=H,!0):!1}const yt={[io]:n.FUNC_ADD,[JR]:n.FUNC_SUBTRACT,[QR]:n.FUNC_REVERSE_SUBTRACT};yt[eA]=n.MIN,yt[tA]=n.MAX;const ot={[nA]:n.ZERO,[iA]:n.ONE,[rA]:n.SRC_COLOR,[Sx]:n.SRC_ALPHA,[cA]:n.SRC_ALPHA_SATURATE,[lA]:n.DST_COLOR,[sA]:n.DST_ALPHA,[aA]:n.ONE_MINUS_SRC_COLOR,[xx]:n.ONE_MINUS_SRC_ALPHA,[uA]:n.ONE_MINUS_DST_COLOR,[oA]:n.ONE_MINUS_DST_ALPHA,[dA]:n.CONSTANT_COLOR,[fA]:n.ONE_MINUS_CONSTANT_COLOR,[hA]:n.CONSTANT_ALPHA,[pA]:n.ONE_MINUS_CONSTANT_ALPHA};function Wt(H,ye,me,Fe,De,Oe,Je,ht,Te,nt){if(H===so){y===!0&&(He(n.BLEND),y=!1);return}if(y===!1&&(ve(n.BLEND),y=!0),H!==jR){if(H!==S||nt!==O){if((w!==io||U!==io)&&(n.blendEquation(n.FUNC_ADD),w=io,U=io),nt)switch(H){case xl:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case X_:n.blendFunc(n.ONE,n.ONE);break;case q_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Y_:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Nt("WebGLState: Invalid blending: ",H);break}else switch(H){case xl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case X_:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case q_:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Y_:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",H);break}N=null,L=null,D=null,b=null,P.set(0,0,0),G=0,S=H,O=nt}return}De=De||ye,Oe=Oe||me,Je=Je||Fe,(ye!==w||De!==U)&&(n.blendEquationSeparate(yt[ye],yt[De]),w=ye,U=De),(me!==N||Fe!==L||Oe!==D||Je!==b)&&(n.blendFuncSeparate(ot[me],ot[Fe],ot[Oe],ot[Je]),N=me,L=Fe,D=Oe,b=Je),(ht.equals(P)===!1||Te!==G)&&(n.blendColor(ht.r,ht.g,ht.b,Te),P.copy(ht),G=Te),S=H,O=!1}function Ft(H,ye){H.side===vr?He(n.CULL_FACE):ve(n.CULL_FACE);let me=H.side===ii;ye&&(me=!me),en(me),H.blending===xl&&H.transparent===!1?Wt(so):Wt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),o.setMask(H.colorWrite);const Fe=H.stencilWrite;d.setTest(Fe),Fe&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ot(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):He(n.SAMPLE_ALPHA_TO_COVERAGE)}function en(H){B!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),B=H)}function Lt(H){H!==KR?(ve(n.CULL_FACE),H!==V&&(H===$_?n.cullFace(n.BACK):H===ZR?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):He(n.CULL_FACE),V=H}function cn(H){H!==q&&(ee&&n.lineWidth(H),q=H)}function Ot(H,ye,me){H?(ve(n.POLYGON_OFFSET_FILL),(k!==ye||ie!==me)&&(k=ye,ie=me,u.getReversed()&&(ye=-ye,me=-me),n.polygonOffset(ye,me))):He(n.POLYGON_OFFSET_FILL)}function Zt(H){H?ve(n.SCISSOR_TEST):He(n.SCISSOR_TEST)}function an(H){H===void 0&&(H=n.TEXTURE0+te-1),j!==H&&(n.activeTexture(H),j=H)}function pn(H,ye,me){me===void 0&&(j===null?me=n.TEXTURE0+te-1:me=j);let Fe=F[me];Fe===void 0&&(Fe={type:void 0,texture:void 0},F[me]=Fe),(Fe.type!==H||Fe.texture!==ye)&&(j!==me&&(n.activeTexture(me),j=me),n.bindTexture(H,ye||Ae[H]),Fe.type=H,Fe.texture=ye)}function K(){const H=F[j];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function mn(){try{n.compressedTexImage2D(...arguments)}catch(H){Nt("WebGLState:",H)}}function Ct(){try{n.compressedTexImage3D(...arguments)}catch(H){Nt("WebGLState:",H)}}function fe(){try{n.texSubImage2D(...arguments)}catch(H){Nt("WebGLState:",H)}}function ce(){try{n.texSubImage3D(...arguments)}catch(H){Nt("WebGLState:",H)}}function Pe(){try{n.compressedTexSubImage2D(...arguments)}catch(H){Nt("WebGLState:",H)}}function he(){try{n.compressedTexSubImage3D(...arguments)}catch(H){Nt("WebGLState:",H)}}function Me(){try{n.texStorage2D(...arguments)}catch(H){Nt("WebGLState:",H)}}function I(){try{n.texStorage3D(...arguments)}catch(H){Nt("WebGLState:",H)}}function T(){try{n.texImage2D(...arguments)}catch(H){Nt("WebGLState:",H)}}function W(){try{n.texImage3D(...arguments)}catch(H){Nt("WebGLState:",H)}}function xe(H){return m[H]!==void 0?m[H]:n.getParameter(H)}function pe(H,ye){m[H]!==ye&&(n.pixelStorei(H,ye),m[H]=ye)}function be(H){re.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),re.copy(H))}function Ie(H){Se.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Se.copy(H))}function ge(H,ye){let me=h.get(ye);me===void 0&&(me=new WeakMap,h.set(ye,me));let Fe=me.get(H);Fe===void 0&&(Fe=n.getUniformBlockIndex(ye,H.name),n.uniformBlockBinding(ye,Fe,Fe),me.set(H,Fe))}function _e(H,ye,me){const De=h.get(ye).get(H);f[De]!==me&&(n.bindBufferBase(n.UNIFORM_BUFFER,De,me),f[De]=me)}function Ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),g={},m={},j=null,F={},v={},f={},x=new WeakMap,M=[],R=null,y=!1,S=null,w=null,N=null,L=null,U=null,D=null,b=null,P=new Et(0,0,0),G=0,O=!1,B=null,V=null,q=null,k=null,ie=null,re.set(0,0,n.canvas.width,n.canvas.height),Se.set(0,0,n.canvas.width,n.canvas.height),o.reset(),u.reset(),d.reset()}return{buffers:{color:o,depth:u,stencil:d},enable:ve,disable:He,bindFramebuffer:ft,drawBuffers:Xe,useProgram:gt,setBlending:Wt,setMaterial:Ft,setFlipSided:en,setCullFace:Lt,setLineWidth:cn,setPolygonOffset:Ot,setScissorTest:Zt,activeTexture:an,bindTexture:pn,unbindTexture:K,compressedTexImage2D:mn,compressedTexImage3D:Ct,texImage2D:T,texImage3D:W,pixelStorei:pe,getParameter:xe,updateUBOMapping:ge,uniformBlockBinding:_e,texStorage2D:Me,texStorage3D:I,texSubImage2D:fe,texSubImage3D:ce,compressedTexSubImage2D:Pe,compressedTexSubImage3D:he,scissor:be,viewport:Ie,reset:Ne}}function eI(n,e,t,r,s,o,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new bt,g=new WeakMap,m=new Set;let v;const x=new WeakMap,M=new Set,R=new FinalizationRegistry(I=>M.delete(I));let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(I,T){return y?new OffscreenCanvas(I,T):jc("canvas")}function w(I,T,W){let xe=1;const pe=Me(I);if((pe.width>W||pe.height>W)&&(xe=W/Math.max(pe.width,pe.height)),xe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const be=Math.floor(xe*pe.width),Ie=Math.floor(xe*pe.height);v===void 0&&(v=S(be,Ie));const ge=T?S(be,Ie):v;return ge.width=be,ge.height=Ie,ge.getContext("2d").drawImage(I,0,0,be,Ie),dt("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+be+"x"+Ie+")."),ge}else return"data"in I&&dt("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),I;return I}function N(I){return I.generateMipmaps}function L(I){n.generateMipmap(I)}function U(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function D(I,T,W,xe,pe,be=!1){if(I!==null){if(n[I]!==void 0)return n[I];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ie;xe&&(Ie=e.get("EXT_texture_norm16"),Ie||dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=T;if(T===n.RED&&(W===n.FLOAT&&(ge=n.R32F),W===n.HALF_FLOAT&&(ge=n.R16F),W===n.UNSIGNED_BYTE&&(ge=n.R8),W===n.UNSIGNED_SHORT&&Ie&&(ge=Ie.R16_EXT),W===n.SHORT&&Ie&&(ge=Ie.R16_SNORM_EXT)),T===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(ge=n.R8UI),W===n.UNSIGNED_SHORT&&(ge=n.R16UI),W===n.UNSIGNED_INT&&(ge=n.R32UI),W===n.BYTE&&(ge=n.R8I),W===n.SHORT&&(ge=n.R16I),W===n.INT&&(ge=n.R32I)),T===n.RG&&(W===n.FLOAT&&(ge=n.RG32F),W===n.HALF_FLOAT&&(ge=n.RG16F),W===n.UNSIGNED_BYTE&&(ge=n.RG8),W===n.UNSIGNED_SHORT&&Ie&&(ge=Ie.RG16_EXT),W===n.SHORT&&Ie&&(ge=Ie.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(ge=n.RG8UI),W===n.UNSIGNED_SHORT&&(ge=n.RG16UI),W===n.UNSIGNED_INT&&(ge=n.RG32UI),W===n.BYTE&&(ge=n.RG8I),W===n.SHORT&&(ge=n.RG16I),W===n.INT&&(ge=n.RG32I)),T===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(ge=n.RGB8UI),W===n.UNSIGNED_SHORT&&(ge=n.RGB16UI),W===n.UNSIGNED_INT&&(ge=n.RGB32UI),W===n.BYTE&&(ge=n.RGB8I),W===n.SHORT&&(ge=n.RGB16I),W===n.INT&&(ge=n.RGB32I)),T===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(ge=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(ge=n.RGBA16UI),W===n.UNSIGNED_INT&&(ge=n.RGBA32UI),W===n.BYTE&&(ge=n.RGBA8I),W===n.SHORT&&(ge=n.RGBA16I),W===n.INT&&(ge=n.RGBA32I)),T===n.RGB&&(W===n.UNSIGNED_SHORT&&Ie&&(ge=Ie.RGB16_EXT),W===n.SHORT&&Ie&&(ge=Ie.RGB16_SNORM_EXT),W===n.UNSIGNED_INT_5_9_9_9_REV&&(ge=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(ge=n.R11F_G11F_B10F)),T===n.RGBA){const _e=be?Zc:Tt.getTransfer(pe);W===n.FLOAT&&(ge=n.RGBA32F),W===n.HALF_FLOAT&&(ge=n.RGBA16F),W===n.UNSIGNED_BYTE&&(ge=_e===kt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT&&Ie&&(ge=Ie.RGBA16_EXT),W===n.SHORT&&Ie&&(ge=Ie.RGBA16_SNORM_EXT),W===n.UNSIGNED_SHORT_4_4_4_4&&(ge=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(ge=n.RGB5_A1)}return(ge===n.R16F||ge===n.R32F||ge===n.RG16F||ge===n.RG32F||ge===n.RGBA16F||ge===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function b(I,T){let W;return I?T===null||T===wr||T===ho?W=n.DEPTH24_STENCIL8:T===Sr?W=n.DEPTH32F_STENCIL8:T===Ll&&(W=n.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===wr||T===ho?W=n.DEPTH_COMPONENT24:T===Sr?W=n.DEPTH_COMPONENT32F:T===Ll&&(W=n.DEPTH_COMPONENT16),W}function P(I,T){return N(I)===!0||I.isFramebufferTexture&&I.minFilter!==Cn&&I.minFilter!==ti?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function G(I){const T=new WeakRef(I);r.get(I).__ref=T,M.add(T),R.register(I,T,T)}function O(I){const T=r.get(I).__ref;T!==void 0&&(M.delete(T),R.unregister(T))}function B(I){q(I.target)}function V(I){k(I.target)}function q(I){I.removeEventListener("dispose",B),O(I),te(I),I.isVideoTexture&&g.delete(I),I.isHTMLTexture&&m.delete(I)}function k(I){I.removeEventListener("dispose",V),O(I),J(I)}function ie(){for(const I of M){const T=I.deref();T!==void 0&&(T.isRenderTarget===!0?k(T):q(T))}M.clear(),m.clear()}function te(I){const T=r.get(I);if(T.__webglInit===void 0)return;const W=I.source,xe=x.get(W);if(xe){const pe=xe[T.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&ee(I),Object.keys(xe).length===0&&x.delete(W)}r.remove(I)}function ee(I){const T=r.get(I);n.deleteTexture(T.__webglTexture);const W=I.source,xe=x.get(W);delete xe[T.__cacheKey],u.memory.textures--}function J(I){const T=r.get(I);T.__depthDisposeCallback&&T.__depthDisposeCallback();const W=I.depthTexture;if(W&&W.renderTarget===I&&q(W),I.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let be=0;be<T.__webglFramebuffer[pe].length;be++)n.deleteFramebuffer(T.__webglFramebuffer[pe][be]);else n.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)n.deleteFramebuffer(T.__webglFramebuffer[pe]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const xe=I.textures;for(let pe=0,be=xe.length;pe<be;pe++){const Ie=r.get(xe[pe]);Ie.__webglTexture&&(n.deleteTexture(Ie.__webglTexture),u.memory.textures--),r.remove(xe[pe])}r.remove(I)}let Y=0;function j(){Y=0}function F(){return Y}function Q(I){Y=I}function Ce(){const I=Y;return I>=s.maxTextures&&dt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,I}function re(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.mipmapsAutoUpdate),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function Se(I,T){const W=r.get(I);if(I.isVideoTexture&&Pe(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&W.__version!==I.version){const xe=I.image;if(xe===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ft(W,I,T);return}}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+T)}function Ee(I,T){const W=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){Ft(W,I,T);return}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+T)}function Ae(I,T){const W=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){Ft(W,I,T);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+T)}function ve(I,T){const W=r.get(I);if(I.version>0&&W.__version!==I.version){en(W,I,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+T)}const He={[Xc]:n.REPEAT,[Gr]:n.CLAMP_TO_EDGE,[Ip]:n.MIRRORED_REPEAT},ft={[Cn]:n.NEAREST,[vA]:n.NEAREST_MIPMAP_NEAREST,[sc]:n.NEAREST_MIPMAP_LINEAR,[ti]:n.LINEAR,[vh]:n.LINEAR_MIPMAP_NEAREST,[Pa]:n.LINEAR_MIPMAP_LINEAR},Xe={[xA]:n.NEVER,[Bx]:n.ALWAYS,[MA]:n.LESS,[Fx]:n.LEQUAL,[EA]:n.EQUAL,[kx]:n.GEQUAL,[bA]:n.GREATER,[wA]:n.NOTEQUAL};function gt(I,T){if(T.type===Sr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ti||T.magFilter===vh||T.magFilter===sc||T.magFilter===Pa||T.minFilter===ti||T.minFilter===vh||T.minFilter===sc||T.minFilter===Pa)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,He[T.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,He[T.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,He[T.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,ft[T.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,ft[T.minFilter]),T.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,Xe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Cn||T.minFilter!==sc&&T.minFilter!==Pa||T.type===Sr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function yt(I,T){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",B),G(T));const xe=T.source;let pe=x.get(xe);pe===void 0&&(pe={},x.set(xe,pe));const be=re(T);if(be!==I.__cacheKey){pe[be]===void 0&&(pe[be]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,W=!0),pe[be].usedTimes++;const Ie=pe[I.__cacheKey];Ie!==void 0&&(pe[I.__cacheKey].usedTimes--,Ie.usedTimes===0&&ee(T)),I.__cacheKey=be,I.__webglTexture=pe[be].texture}return W}function ot(I,T,W){return Math.floor(Math.floor(I/W)/T)}function Wt(I,T,W,xe){const be=I.updateRanges;if(be.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,W,xe,T.data);else{be.sort((H,ye)=>H.start-ye.start);let Ie=0;for(let H=1;H<be.length;H++){const ye=be[Ie],me=be[H],Fe=ye.start+ye.count,De=ot(me.start,T.width,4),Oe=ot(ye.start,T.width,4);me.start<=Fe+1&&De===Oe&&ot(me.start+me.count-1,T.width,4)===De?ye.count=Math.max(ye.count,me.start+me.count-ye.start):(++Ie,be[Ie]=me)}be.length=Ie+1;const ge=t.getParameter(n.UNPACK_ROW_LENGTH),_e=t.getParameter(n.UNPACK_SKIP_PIXELS),Ne=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let H=0,ye=be.length;H<ye;H++){const me=be[H],Fe=Math.floor(me.start/4),De=Math.ceil(me.count/4),Oe=Fe%T.width,Je=Math.floor(Fe/T.width),ht=De,Te=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Je),t.texSubImage2D(n.TEXTURE_2D,0,Oe,Je,ht,Te,W,xe,T.data)}I.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ge),t.pixelStorei(n.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ne)}}function Ft(I,T,W){let xe=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(xe=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(xe=n.TEXTURE_3D);const pe=yt(I,T),be=T.source;t.bindTexture(xe,I.__webglTexture,n.TEXTURE0+W);const Ie=r.get(be);if(be.version!==Ie.__version||pe===!0){if(t.activeTexture(n.TEXTURE0+W),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const Te=Tt.getPrimaries(Tt.workingColorSpace),nt=T.colorSpace===Ca?null:Tt.getPrimaries(T.colorSpace),ut=T.colorSpace===Ca||Te===nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut)}t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let _e=w(T.image,!1,s.maxTextureSize);_e=he(T,_e);const Ne=o.convert(T.format,T.colorSpace),H=o.convert(T.type);let ye=D(T.internalFormat,Ne,H,T.normalized,T.colorSpace,T.isVideoTexture);gt(xe,T);let me;const Fe=T.mipmaps,De=T.isVideoTexture!==!0,Oe=Ie.__version===void 0||pe===!0,Je=be.dataReady,ht=P(T,_e);if(T.isDepthTexture)ye=b(T.format===La,T.type),Oe&&(De?t.texStorage2D(n.TEXTURE_2D,1,ye,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,ye,_e.width,_e.height,0,Ne,H,null));else if(T.isDataTexture)if(Fe.length>0){De&&Oe&&t.texStorage2D(n.TEXTURE_2D,ht,ye,Fe[0].width,Fe[0].height);for(let Te=0,nt=Fe.length;Te<nt;Te++)me=Fe[Te],De?Je&&t.texSubImage2D(n.TEXTURE_2D,Te,0,0,me.width,me.height,Ne,H,me.data):t.texImage2D(n.TEXTURE_2D,Te,ye,me.width,me.height,0,Ne,H,me.data);T.generateMipmaps=!1}else De?(Oe&&t.texStorage2D(n.TEXTURE_2D,ht,ye,_e.width,_e.height),Je&&Wt(T,_e,Ne,H)):t.texImage2D(n.TEXTURE_2D,0,ye,_e.width,_e.height,0,Ne,H,_e.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){De&&Oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ht,ye,Fe[0].width,Fe[0].height,_e.depth);for(let Te=0,nt=Fe.length;Te<nt;Te++)if(me=Fe[Te],T.format!==xr)if(Ne!==null)if(De){if(Je)if(T.layerUpdates.size>0){const ut=xy(me.width,me.height,T.format,T.type);for(const Ge of T.layerUpdates){const xt=me.data.subarray(Ge*ut/me.data.BYTES_PER_ELEMENT,(Ge+1)*ut/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Te,0,0,Ge,me.width,me.height,1,Ne,xt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Te,0,0,0,me.width,me.height,_e.depth,Ne,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Te,ye,me.width,me.height,_e.depth,0,me.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?Je&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Te,0,0,0,me.width,me.height,_e.depth,Ne,H,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Te,ye,me.width,me.height,_e.depth,0,Ne,H,me.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{De&&Oe&&t.texStorage2D(n.TEXTURE_2D,ht,ye,Fe[0].width,Fe[0].height);for(let Te=0,nt=Fe.length;Te<nt;Te++)me=Fe[Te],T.format!==xr?Ne!==null?De?Je&&t.compressedTexSubImage2D(n.TEXTURE_2D,Te,0,0,me.width,me.height,Ne,me.data):t.compressedTexImage2D(n.TEXTURE_2D,Te,ye,me.width,me.height,0,me.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?Je&&t.texSubImage2D(n.TEXTURE_2D,Te,0,0,me.width,me.height,Ne,H,me.data):t.texImage2D(n.TEXTURE_2D,Te,ye,me.width,me.height,0,Ne,H,me.data)}else if(T.isDataArrayTexture)if(De){if(Oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ht,ye,_e.width,_e.height,_e.depth),Je)if(T.layerUpdates.size>0){const Te=xy(_e.width,_e.height,T.format,T.type);for(const nt of T.layerUpdates){const ut=_e.data.subarray(nt*Te/_e.data.BYTES_PER_ELEMENT,(nt+1)*Te/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,nt,_e.width,_e.height,1,Ne,H,ut)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ne,H,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,_e.width,_e.height,_e.depth,0,Ne,H,_e.data);else if(T.isData3DTexture)De?(Oe&&t.texStorage3D(n.TEXTURE_3D,ht,ye,_e.width,_e.height,_e.depth),Je&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ne,H,_e.data)):t.texImage3D(n.TEXTURE_3D,0,ye,_e.width,_e.height,_e.depth,0,Ne,H,_e.data);else if(T.isFramebufferTexture){if(Oe)if(De)t.texStorage2D(n.TEXTURE_2D,ht,ye,_e.width,_e.height);else{let Te=_e.width,nt=_e.height;for(let ut=0;ut<ht;ut++)t.texImage2D(n.TEXTURE_2D,ut,ye,Te,nt,0,Ne,H,null),Te>>=1,nt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){const Te=n.canvas;if(Te.hasAttribute("layoutsubtree")||Te.setAttribute("layoutsubtree","true"),_e.parentNode!==Te){Te.appendChild(_e),m.add(T),Te.onpaint=nt=>{const ut=nt.changedElements;for(const Ge of m)ut.includes(Ge.image)&&(Ge.needsUpdate=!0)},Te.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,_e);else{const ut=n.RGBA,Ge=n.RGBA,xt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ut,Ge,xt,_e)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(De&&Oe){const Te=Me(Fe[0]);t.texStorage2D(n.TEXTURE_2D,ht,ye,Te.width,Te.height)}for(let Te=0,nt=Fe.length;Te<nt;Te++)me=Fe[Te],De?Je&&t.texSubImage2D(n.TEXTURE_2D,Te,0,0,Ne,H,me):t.texImage2D(n.TEXTURE_2D,Te,ye,Ne,H,me);T.generateMipmaps=!1}else if(De){if(Oe){const Te=Me(_e);t.texStorage2D(n.TEXTURE_2D,ht,ye,Te.width,Te.height)}Je&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ne,H,_e)}else t.texImage2D(n.TEXTURE_2D,0,ye,Ne,H,_e);N(T)&&T.mipmapsAutoUpdate===!0&&L(xe),Ie.__version=be.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function en(I,T,W){if(T.image.length!==6)return;const xe=yt(I,T),pe=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+W);const be=r.get(pe);if(pe.version!==be.__version||xe===!0){t.activeTexture(n.TEXTURE0+W);const Ie=Tt.getPrimaries(Tt.workingColorSpace),ge=T.colorSpace===Ca?null:Tt.getPrimaries(T.colorSpace),_e=T.colorSpace===Ca||Ie===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ne=T.isCompressedTexture||T.image[0].isCompressedTexture,H=T.image[0]&&T.image[0].isDataTexture,ye=[];for(let Ge=0;Ge<6;Ge++)!Ne&&!H?ye[Ge]=w(T.image[Ge],!0,s.maxCubemapSize):ye[Ge]=H?T.image[Ge].image:T.image[Ge],ye[Ge]=he(T,ye[Ge]);const me=ye[0],Fe=o.convert(T.format,T.colorSpace),De=o.convert(T.type);let Oe=D(T.internalFormat,Fe,De,T.normalized,T.colorSpace);const Je=T.isVideoTexture!==!0,ht=be.__version===void 0||xe===!0,Te=pe.dataReady;let nt=P(T,me);gt(n.TEXTURE_CUBE_MAP,T);let ut;if(T.isDepthTexture){if(Oe=b(T.format===La,T.type),ht)if(Je)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Oe,me.width,me.height);else for(let Ge=0;Ge<6;Ge++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Oe,me.width,me.height,0,Fe,De,null)}else if(Ne){Je&&ht&&t.texStorage2D(n.TEXTURE_CUBE_MAP,nt,Oe,me.width,me.height);for(let Ge=0;Ge<6;Ge++){ut=ye[Ge].mipmaps;for(let xt=0;xt<ut.length;xt++){const $t=ut[xt];T.format!==xr?Fe!==null?Je?Te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,xt,0,0,$t.width,$t.height,Fe,$t.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,xt,Oe,$t.width,$t.height,0,$t.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,xt,0,0,$t.width,$t.height,Fe,De,$t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,xt,Oe,$t.width,$t.height,0,Fe,De,$t.data)}}}else{if(ut=T.mipmaps,Je&&ht){ut.length>0&&nt++;const Ge=Me(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,nt,Oe,Ge.width,Ge.height)}for(let Ge=0;Ge<6;Ge++)if(H){Je?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,0,0,ye[Ge].width,ye[Ge].height,Fe,De,ye[Ge].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Oe,ye[Ge].width,ye[Ge].height,0,Fe,De,ye[Ge].data);for(let xt=0;xt<ut.length;xt++){const Ln=ut[xt].image[Ge].image;Je?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,xt+1,0,0,Ln.width,Ln.height,Fe,De,Ln.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,xt+1,Oe,Ln.width,Ln.height,0,Fe,De,Ln.data)}}else{Je?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,0,0,Fe,De,ye[Ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Oe,Fe,De,ye[Ge]);for(let xt=0;xt<ut.length;xt++){const $t=ut[xt];Je?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,xt+1,0,0,Fe,De,$t.image[Ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,xt+1,Oe,Fe,De,$t.image[Ge])}}}N(T)&&T.mipmapsAutoUpdate===!0&&L(n.TEXTURE_CUBE_MAP),be.__version=pe.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Lt(I,T,W,xe,pe,be){const Ie=o.convert(W.format,W.colorSpace),ge=o.convert(W.type),_e=D(W.internalFormat,Ie,ge,W.normalized,W.colorSpace),Ne=r.get(T),H=r.get(W);if(H.__renderTarget=T,!Ne.__hasExternalTextures){const ye=Math.max(1,T.width>>be),me=Math.max(1,T.height>>be);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,be,_e,ye,me,T.depth,0,Ie,ge,null):t.texImage2D(pe,be,_e,ye,me,0,Ie,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),ce(T)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,pe,H.__webglTexture,0,fe(T)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,xe,pe,H.__webglTexture,be),t.bindFramebuffer(n.FRAMEBUFFER,null)}function cn(I,T,W){if(n.bindRenderbuffer(n.RENDERBUFFER,I),T.depthBuffer){const xe=T.depthTexture,pe=xe&&xe.isDepthTexture?xe.type:null,be=b(T.stencilBuffer,pe),Ie=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ce(T)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe(T),be,T.width,T.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe(T),be,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,be,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ie,n.RENDERBUFFER,I)}else{const xe=T.textures;for(let pe=0;pe<xe.length;pe++){const be=xe[pe],Ie=o.convert(be.format,be.colorSpace),ge=o.convert(be.type),_e=D(be.internalFormat,Ie,ge,be.normalized,be.colorSpace);ce(T)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe(T),_e,T.width,T.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe(T),_e,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,_e,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ot(I,T,W){const xe=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=r.get(T.depthTexture);pe.__renderTarget=T;const be=xe?T.depthTexture.image[0]:T.depthTexture.image;(!pe.__webglTexture||be.width!==T.width||be.height!==T.height)&&(be.width=T.width,be.height=T.height,T.depthTexture.needsUpdate=!0),xe?ve(T.depthTexture,0):Se(T.depthTexture,0);const Ie=pe.__webglTexture,ge=fe(T),_e=xe?n.TEXTURE_CUBE_MAP_POSITIVE_X+W:n.TEXTURE_2D,Ne=T.depthTexture.format===La?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===Na)ce(T)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ne,_e,Ie,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,Ne,_e,Ie,0);else if(T.depthTexture.format===La)ce(T)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ne,_e,Ie,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,Ne,_e,Ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Zt(I){const T=r.get(I),W=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const xe=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),xe){const pe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,xe.removeEventListener("dispose",pe)};xe.addEventListener("dispose",pe),T.__depthDisposeCallback=pe}T.__boundDepthTexture=xe}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(W)for(let xe=0;xe<6;xe++)Ot(T.__webglFramebuffer[xe],I,xe);else I.texture.mipmaps.length>0?Ot(T.__webglFramebuffer[0],I,0):Ot(T.__webglFramebuffer,I,0);else if(W){T.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[xe]),T.__webglDepthbuffer[xe]===void 0)T.__webglDepthbuffer[xe]=n.createRenderbuffer(),cn(T.__webglDepthbuffer[xe],I,!1);else{const pe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=T.__webglDepthbuffer[xe];n.bindRenderbuffer(n.RENDERBUFFER,be),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,be)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),cn(T.__webglDepthbuffer,I,!1);else{const pe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,be),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,be)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function an(I,T,W){const xe=r.get(I);T!==void 0&&Lt(xe.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Zt(I)}function pn(I){const T=I.texture,W=r.get(I),xe=r.get(T);I.addEventListener("dispose",V),G(I);const pe=I.textures,be=I.isWebGLCubeRenderTarget===!0,Ie=pe.length>1;if(Ie||(xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture()),xe.__version=T.version,u.memory.textures++),be){W.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(T.mipmaps.length>0){W.__webglFramebuffer[ge]=[];for(let _e=0;_e<T.mipmaps.length;_e++)W.__webglFramebuffer[ge][_e]=n.createFramebuffer()}else W.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(T.mipmaps.length>0){W.__webglFramebuffer=[];for(let ge=0;ge<T.mipmaps.length;ge++)W.__webglFramebuffer[ge]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(Ie)for(let ge=0,_e=pe.length;ge<_e;ge++){const Ne=r.get(pe[ge]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),u.memory.textures++)}if(I.samples>0&&ce(I)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ge=0;ge<pe.length;ge++){const _e=pe[ge];W.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[ge]);const Ne=o.convert(_e.format,_e.colorSpace),H=o.convert(_e.type),ye=D(_e.internalFormat,Ne,H,_e.normalized,_e.colorSpace,I.isXRRenderTarget===!0),me=fe(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,me,ye,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,W.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),cn(W.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(be){t.bindTexture(n.TEXTURE_CUBE_MAP,xe.__webglTexture),gt(n.TEXTURE_CUBE_MAP,T);for(let ge=0;ge<6;ge++)if(T.mipmaps.length>0)for(let _e=0;_e<T.mipmaps.length;_e++)Lt(W.__webglFramebuffer[ge][_e],I,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,_e);else Lt(W.__webglFramebuffer[ge],I,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);N(T)?L(n.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(Ie){for(let ge=0,_e=pe.length;ge<_e;ge++){const Ne=pe[ge],H=r.get(Ne);let ye=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ye=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,H.__webglTexture),gt(ye,Ne),Lt(W.__webglFramebuffer,I,Ne,n.COLOR_ATTACHMENT0+ge,ye,0),N(Ne)&&L(ye)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ge=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,xe.__webglTexture),gt(ge,T),T.mipmaps.length>0)for(let _e=0;_e<T.mipmaps.length;_e++)Lt(W.__webglFramebuffer[_e],I,T,n.COLOR_ATTACHMENT0,ge,_e);else Lt(W.__webglFramebuffer,I,T,n.COLOR_ATTACHMENT0,ge,0);N(T)?L(ge):T.mipmaps.length>0&&n.texParameteri(ge,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&Zt(I)}function K(I){const T=I.textures;for(let W=0,xe=T.length;W<xe;W++){const pe=T[W];if(N(pe)&&pe.mipmapsAutoUpdate===!0){const be=U(I),Ie=r.get(pe).__webglTexture;t.bindTexture(be,Ie),L(be),t.unbindTexture()}}}const mn=[];function Ct(I){if(I.samples>0){if(ce(I)===!1){const T=I.textures,W=I.width,xe=I.height;let pe=n.COLOR_BUFFER_BIT;const be=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=r.get(I),ge=T.length>1;if(ge)for(let Ne=0;Ne<T.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ne=0;Ne<T.length;Ne++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ne]);const H=r.get(T[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,H,0)}n.blitFramebuffer(0,0,W,xe,0,0,W,xe,pe,n.NEAREST),f===!0&&(mn.length=0,mn.push(n.COLOR_ATTACHMENT0+Ne),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&mn.push(be),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,mn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Ne=0;Ne<T.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ne]);const H=r.get(T[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,H,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&f){const T=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function fe(I){return Math.min(s.maxSamples,I.samples)}function ce(I){const T=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Pe(I){const T=u.render.frame;g.get(I)!==T&&(g.set(I,T),I.update())}function he(I,T){const W=I.colorSpace,xe=I.format,pe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==Kc&&W!==Ca&&(Tt.getTransfer(W)===kt?(xe!==xr||pe!==gi)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",W)),T}function Me(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=Ce,this.resetTextureUnits=j,this.getTextureUnits=F,this.setTextureUnits=Q,this.setTexture2D=Se,this.setTexture2DArray=Ee,this.setTexture3D=Ae,this.setTextureCube=ve,this.rebindTextures=an,this.setupRenderTarget=pn,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=ce,this.dispose=ie}function tI(n,e){function t(r,s=Ca){let o;const u=Tt.getTransfer(s);if(r===gi)return n.UNSIGNED_BYTE;if(r===Cm)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Pm)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Ix)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===Dx)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===Px)return n.BYTE;if(r===Lx)return n.SHORT;if(r===Ll)return n.UNSIGNED_SHORT;if(r===Am)return n.INT;if(r===wr)return n.UNSIGNED_INT;if(r===Sr)return n.FLOAT;if(r===Tr)return n.HALF_FLOAT;if(r===Nx)return n.ALPHA;if(r===Ox)return n.RGB;if(r===xr)return n.RGBA;if(r===Na)return n.DEPTH_COMPONENT;if(r===La)return n.DEPTH_STENCIL;if(r===Ux)return n.RED;if(r===Lm)return n.RED_INTEGER;if(r===ds)return n.RG;if(r===Im)return n.RG_INTEGER;if(r===Dm)return n.RGBA_INTEGER;if(r===Nc||r===Oc||r===Uc||r===Fc)if(u===kt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Nc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Oc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Uc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Nc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Oc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Uc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dp||r===Np||r===Op||r===Up)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Dp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Np)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Op)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Up)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Fp||r===kp||r===Bp||r===zp||r===Hp||r===qc||r===Gp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Fp||r===kp)return u===kt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Bp)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(r===zp)return o.COMPRESSED_R11_EAC;if(r===Hp)return o.COMPRESSED_SIGNED_R11_EAC;if(r===qc)return o.COMPRESSED_RG11_EAC;if(r===Gp)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Vp||r===Wp||r===$p||r===Xp||r===qp||r===Yp||r===Kp||r===Zp||r===jp||r===Jp||r===Qp||r===em||r===tm||r===nm)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Vp)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wp)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$p)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Xp)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qp)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yp)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kp)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zp)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jp)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jp)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qp)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===em)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===tm)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===nm)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===im||r===rm||r===am)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===im)return u===kt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===rm)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===am)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===sm||r===om||r===Yc||r===lm)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===sm)return o.COMPRESSED_RED_RGTC1_EXT;if(r===om)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lm)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ho?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const nI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iI=`
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

}`;class rI{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Yx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new fs({vertexShader:nI,fragmentShader:iI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oa(new Ia(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aI extends gs{constructor(e,t){super();const r=this;let s=null,o=1,u=null,d="local-floor",f=1,h=null,g=null,m=null,v=null,x=null,M=null;const R=typeof XRWebGLBinding<"u",y=new rI,S={},w=t.getContextAttributes();let N=null,L=null;const U=[],D=[],b=new bt;let P=null,G=null;const O=new Li;O.viewport=new rn;const B=new Li;B.viewport=new rn;const V=[O,B],q=new gC;let k=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let Se=U[re];return Se===void 0&&(Se=new Th,U[re]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(re){let Se=U[re];return Se===void 0&&(Se=new Th,U[re]=Se),Se.getGripSpace()},this.getHand=function(re){let Se=U[re];return Se===void 0&&(Se=new Th,U[re]=Se),Se.getHandSpace()};function te(re){const Se=D.indexOf(re.inputSource);if(Se===-1)return;const Ee=U[Se];Ee!==void 0&&(Ee.update(re.inputSource,re.frame,h||u),Ee.dispatchEvent({type:re.type,data:re.inputSource}))}function ee(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",J);for(let re=0;re<U.length;re++){const Se=D[re];Se!==null&&(D[re]=null,U[re].disconnect(Se))}k=null,ie=null,y.reset();for(const re in S)delete S[re];if(e.setRenderTarget(N),x=null,v=null,m=null,s=null,L=null,Ce.stop(),r.isPresenting=!1,e.setPixelRatio(P),e.setSize(b.width,b.height,!1),G!==null){const re=G.camera;re.fov=G.fov,re.zoom=G.zoom,re.updateProjectionMatrix(),G=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){o=re,r.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,r.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(re){h=re},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return m===null&&R&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(N=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",J),w.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(b),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ae=null,ve=null;w.depth&&(ve=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=w.stencil?La:Na,Ae=w.stencil?ho:wr);const He={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:o};m=this.getBinding(),v=m.createProjectionLayer(He),s.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new br(v.textureWidth,v.textureHeight,{format:xr,type:gi,depthTexture:new po(v.textureWidth,v.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const Ee={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new br(x.framebufferWidth,x.framebufferHeight,{format:xr,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(f),h=null,u=await s.requestReferenceSpace(d),Ce.setContext(s),Ce.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J(re){for(let Se=0;Se<re.removed.length;Se++){const Ee=re.removed[Se],Ae=D.indexOf(Ee);Ae>=0&&(D[Ae]=null,U[Ae].disconnect(Ee))}for(let Se=0;Se<re.added.length;Se++){const Ee=re.added[Se];let Ae=D.indexOf(Ee);if(Ae===-1){for(let He=0;He<U.length;He++)if(He>=D.length){D.push(Ee),Ae=He;break}else if(D[He]===null){D[He]=Ee,Ae=He;break}if(Ae===-1)break}const ve=U[Ae];ve&&ve.connect(Ee)}}function Y(re,Se){Se===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(Se.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let Se=re.near,Ee=re.far;y.texture!==null&&(y.depthNear>0&&(Se=y.depthNear),y.depthFar>0&&(Ee=y.depthFar)),q.near=B.near=O.near=Se,q.far=B.far=O.far=Ee,(k!==q.near||ie!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),k=q.near,ie=q.far),q.layers.mask=re.layers.mask|6,O.layers.mask=q.layers.mask&-5,B.layers.mask=q.layers.mask&-3;const Ae=re.parent,ve=q.cameras;Y(q,Ae);for(let He=0;He<ve.length;He++)Y(ve[He],Ae);q.projectionMatrix.copy(O.projectionMatrix),q.projectionMatrixInverse.copy(O.projectionMatrixInverse),G===null&&re.isPerspectiveCamera&&(G={camera:re,fov:re.fov,zoom:re.zoom}),j(re,q,Ae)};function j(re,Se,Ee){Ee===null?re.matrix.copy(Se.matrixWorld):(re.matrix.copy(Ee.matrixWorld),re.matrix.invert(),re.matrix.multiply(Se.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(Se.projectionMatrix),re.projectionMatrixInverse.copy(Se.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=cm*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(v===null&&x===null))return f},this.setFoveation=function(re){f=re,v!==null&&(v.fixedFoveation=re),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=re)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(q)},this.getCameraTexture=function(re){return S[re]};let F=null;function Q(re,Se){if(g=Se.getViewerPose(h||u),M=Se,g!==null){const Ee=g.views;x!==null&&(e.setRenderTargetFramebuffer(L,x.framebuffer),e.setRenderTarget(L));let Ae=!1;Ee.length!==q.cameras.length&&(q.cameras.length=0,Ae=!0);for(let Xe=0;Xe<Ee.length;Xe++){const gt=Ee[Xe];let yt=null;if(x!==null)yt=x.getViewport(gt);else{const Wt=m.getViewSubImage(v,gt);yt=Wt.viewport,Xe===0&&(e.setRenderTargetTextures(L,Wt.colorTexture,Wt.depthStencilTexture),e.setRenderTarget(L))}let ot=V[Xe];ot===void 0&&(ot=new Li,ot.layers.enable(Xe),ot.viewport=new rn,V[Xe]=ot),ot.matrix.fromArray(gt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(gt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(yt.x,yt.y,yt.width,yt.height),Xe===0&&(q.matrix.copy(ot.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ae===!0&&q.cameras.push(ot)}const ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&R){m=r.getBinding();const Xe=m.getDepthInformation(Ee[0]);Xe&&Xe.isValid&&Xe.texture&&y.init(Xe,s.renderState)}if(ve&&ve.includes("camera-access")&&R){e.state.unbindTexture(),m=r.getBinding();for(let Xe=0;Xe<Ee.length;Xe++){const gt=Ee[Xe].camera;if(gt){let yt=S[gt];yt||(yt=new Yx,S[gt]=yt);const ot=m.getCameraImage(gt);yt.sourceTexture=ot}}}}for(let Ee=0;Ee<U.length;Ee++){const Ae=D[Ee],ve=U[Ee];Ae!==null&&ve!==void 0&&ve.update(Ae,Se,h||u)}F&&F(re,Se),Se.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Se}),M=null}const Ce=new Qx;Ce.setAnimationLoop(Q),this.setAnimationLoop=function(re){F=re},this.dispose=function(){}}}const sI=new Qt,uM=new pt;uM.set(-1,0,0,0,1,0,0,0,1);function oI(n,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,Kx(n)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function s(y,S,w,N,L){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?o(y,S):S.isMeshLambertMaterial?(o(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(o(y,S),m(y,S)):S.isMeshPhongMaterial?(o(y,S),g(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(o(y,S),v(y,S),S.isMeshPhysicalMaterial&&x(y,S,L)):S.isMeshMatcapMaterial?(o(y,S),M(y,S)):S.isMeshDepthMaterial?o(y,S):S.isMeshDistanceMaterial?(o(y,S),R(y,S)):S.isMeshNormalMaterial?o(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?f(y,S,w,N):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function o(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===ii&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===ii&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const w=e.get(S),N=w.envMap,L=w.envMapRotation;N&&(y.envMap.value=N,y.envMapRotation.value.setFromMatrix4(sI.makeRotationFromEuler(L)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(uM),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function f(y,S,w,N){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*w,y.scale.value=N*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function m(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function v(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,w){y.ior.value=S.ior,S.diffuseRoughness>0&&(y.diffuseRoughness.value=S.diffuseRoughness,S.diffuseRoughnessMap&&(y.diffuseRoughnessMap.value=S.diffuseRoughnessMap,t(S.diffuseRoughnessMap,y.diffuseRoughnessMapTransform))),S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ii&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessMinimum,y.iridescenceThicknessMaximum.value=S.iridescenceThicknessMaximum,S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,S){S.matcap&&(y.matcap.value=S.matcap)}function R(y,S){const w=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:s}}function lI(n,e,t,r){let s={},o={};function u(w,N){const L=N.program;r.uniformBlockBinding(w,L,s[w.id])}function d(w,N){let L=s[w.id];L===void 0&&(M(w),L=f(w),s[w.id]=L,w.addEventListener("dispose",y));const U=N.program;r.updateUBOMapping(w,U);const D=e.render.frame;o[w.id]!==D&&(h(w),o[w.id]=D)}function f(w){const N=n.createBuffer(),L=w.__size,U=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,N),n.bufferData(n.UNIFORM_BUFFER,L,U),n.bindBuffer(n.UNIFORM_BUFFER,null),N}function h(w){const N=s[w.id],L=w.uniforms,U=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,N);for(let D=0,b=L.length;D<b;D++){const P=L[D];if(Array.isArray(P))for(let G=0,O=P.length;G<O;G++)g(P[G],D,G,U);else g(P,D,0,U)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(w,N,L,U){if(v(w,N,L,U)===!0){const D=w.__offset,b=w.value;if(Array.isArray(b)){let P=0;for(let G=0;G<b.length;G++){const O=b[G],B=R(O,!0);m(O,w.__data,P),P+=B.storage/Float32Array.BYTES_PER_ELEMENT}}else m(b,w.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,D,w.__data)}}function m(w,N,L){typeof w=="number"||typeof w=="boolean"?N[L]=w:w.isMatrix3?(N[L]=w.elements[0],N[L+1]=w.elements[1],N[L+2]=w.elements[2],N[L+3]=0,N[L+4]=w.elements[3],N[L+5]=w.elements[4],N[L+6]=w.elements[5],N[L+7]=0,N[L+8]=w.elements[6],N[L+9]=w.elements[7],N[L+10]=w.elements[8],N[L+11]=0):ArrayBuffer.isView(w)?N.set(w.subarray(0,N.length-L),L):w.toArray(N,L)}function v(w,N,L,U){const D=w.value,b=N+"_"+L;if(Array.isArray(D)){U[b]===void 0&&(U[b]=[]);const P=U[b];let G=!1;for(let O=0;O<D.length;O++)x(D[O],P,O)===!0&&(G=!0);return G}return x(D,U,b)}function x(w,N,L){if(N[L]===void 0)return typeof w=="number"||typeof w=="boolean"?N[L]=w:ArrayBuffer.isView(w)?N[L]=w.slice():N[L]=w.clone(),!0;{const U=N[L];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return N[L]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(U.equals(w)===!1)return U.copy(w),!0}}return!1}function M(w){const N=w.uniforms;let L=0;const U=16;for(let b=0,P=N.length;b<P;b++){const G=Array.isArray(N[b])?N[b]:[N[b]];for(let O=0,B=G.length;O<B;O++){const V=G[O],q=Array.isArray(V.value)?V.value:[V.value],k=Array.isArray(N[b])||Array.isArray(V.value);let ie=L;for(let ee=0,J=q.length;ee<J;ee++){const Y=q[ee],j=R(Y,k),F=L%U,Q=F%j.boundary,Ce=F+Q;L+=Q,Ce!==0&&U-Ce<j.storage&&(L+=U-Ce),ee===0&&(ie=L),L+=j.storage}const te=V.type==="int"?Int32Array:V.type==="uint"?Uint32Array:Float32Array;V.__data=new te((L-ie)/Float32Array.BYTES_PER_ELEMENT),V.__offset=ie}}const D=L%U;return D>0&&(L+=U-D),w.__size=L,w.__cache={},this}function R(w,N){const L={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(L.boundary=4,L.storage=4):w.isVector2?(L.boundary=8,L.storage=8):w.isVector3||w.isColor?(L.boundary=16,L.storage=12):w.isVector4?(L.boundary=16,L.storage=16):w.isMatrix3?(L.boundary=16,L.storage=48):w.isMatrix4?(L.boundary=16,L.storage=64):w.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(L.boundary=16,L.storage=w.byteLength):dt("WebGLRenderer: Unsupported uniform value type.",w),N===!0&&(L.boundary=16,L.storage=Math.ceil(L.storage/16)*16),L}function y(w){const N=w.target;N.removeEventListener("dispose",y),n.deleteBuffer(s[N.id]),delete s[N.id],delete o[N.id]}function S(){for(const w in s)n.deleteBuffer(s[w]);s={},o={}}return{bind:u,update:d,dispose:S}}const uI=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let dr=null;function cI(){return dr===null&&(dr=new nC(uI,16,16,ds,Tr),dr.name="DFG_LUT",dr.minFilter=ti,dr.magFilter=ti,dr.wrapS=Gr,dr.wrapT=Gr,dr.generateMipmaps=!1,dr.needsUpdate=!0),dr}class dI{constructor(e={}){const{canvas:t=AA(),context:r=null,depth:s=!0,stencil:o=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:v=!1,outputBufferType:x=gi}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const R=x,y=new Set([Dm,Im,Lm]),S=new Set([gi,wr,Ll,ho,Cm,Pm]),w=new Uint32Array(4),N=new Int32Array(4),L={textures:[],min:[],max:[],resolution:[]};let U=null,D=null;const b=[],P=[];let G=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let B=!1,V=null,q=null,k=null,ie=null;this._outputColorSpace=ei;let te=0,ee=0,J=null,Y=-1,j=null;const F=new rn,Q=new rn;let Ce=null;const re=new Et(0);let Se=0,Ee=t.width,Ae=t.height,ve=1,He=null,ft=null;const Xe=new rn(0,0,Ee,Ae),gt=new rn(0,0,Ee,Ae);let yt=!1;const ot=new Dl,Wt=new Bm;let Ft=!1,en=!1;const Lt=new Qt,cn=new ue,Ot=new rn,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let an=!1;function pn(){return J===null?ve:1}let K=r;function mn(C,$){return t.getContext(C,$)}let Ct,fe,ce,Pe,he,Me,I,T,W,xe,pe,be,Ie,ge,_e,Ne,H,ye,me,Fe,De,Oe,Je;try{const C={alpha:!0,depth:s,stencil:o,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tm}`),t.addEventListener("webglcontextlost",nt,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",Ge,!1),K===null){const $="webgl2";if(K=mn($,C),K===null)throw mn($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ht()}catch(C){throw t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Ge,!1),Nt("WebGLRenderer: "+C.message),C}function ht(){Ct=new p2(K),Ct.init(),De=new tI(K,Ct),fe=new i2(K,Ct,e,De),ce=new Q3(K,Ct),fe.reversedDepthBuffer&&v&&ce.buffers.depth.setReversed(!0),q=K.createFramebuffer(),k=K.createFramebuffer(),ie=K.createFramebuffer(),Pe=new v2(K),he=new B3,Me=new eI(K,Ct,ce,he,fe,De,Pe),I=new h2(O),T=new yC(K),Oe=new t2(K,T),W=new m2(K,T,Pe,Oe),xe=new y2(K,W,T,Oe,Pe),ye=new _2(K,fe,Me),_e=new r2(he),pe=new k3(O,I,Ct,fe,Oe,_e),be=new oI(O,he),Ie=new H3,ge=new q3(Ct),H=new e2(O,I,ce,xe,M,f),Ne=new J3(O,xe,fe),Je=new lI(K,Pe,fe,ce),me=new n2(K,Ct,Pe),Fe=new g2(K,Ct,Pe),Pe.programs=pe.programs,O.capabilities=fe,O.extensions=Ct,O.properties=he,O.renderLists=Ie,O.shadowMap=Ne,O.state=ce,O.info=Pe}R!==gi&&(G=new x2(R,t.width,t.height,d,s,o));const Te=new aI(O,K);this.xr=Te,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const C=Ct.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ct.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(C){C!==void 0&&(ve=C,this.setSize(Ee,Ae,!1))},this.getSize=function(C){return C.set(Ee,Ae)},this.setSize=function(C,$,oe=!0){if(Te.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=C,Ae=$,t.width=Math.floor(C*ve),t.height=Math.floor($*ve),oe===!0&&(t.style.width=C+"px",t.style.height=$+"px"),G!==null&&G.setSize(t.width,t.height),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(Ee*ve,Ae*ve).floor()},this.setDrawingBufferSize=function(C,$,oe){Ee=C,Ae=$,ve=oe,t.width=Math.floor(C*oe),t.height=Math.floor($*oe),this.setViewport(0,0,C,$)},this.setEffects=function(C){if(R===gi){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let $=0;$<C.length;$++)if(C[$].isOutputPass===!0){dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}G.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(Xe)},this.setViewport=function(C,$,oe,ae){C.isVector4?Xe.set(C.x,C.y,C.z,C.w):Xe.set(C,$,oe,ae),ce.viewport(F.copy(Xe).multiplyScalar(pn()).round())},this.getScissor=function(C){return C.copy(gt)},this.setScissor=function(C,$,oe,ae){C.isVector4?gt.set(C.x,C.y,C.z,C.w):gt.set(C,$,oe,ae),ce.scissor(Q.copy(gt).multiplyScalar(pn()).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(C){ce.setScissorTest(yt=C)},this.setOpaqueSort=function(C){He=C},this.setTransparentSort=function(C){ft=C},this.getClearColor=function(C){return C.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor(...arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha(...arguments)},this.clear=function(C=!0,$=!0,oe=!0){let ae=0;if(C){let ne=!1;if(J!==null){const Be=J.texture.format;ne=y.has(Be)}if(ne){const Be=J.texture.type,qe=S.has(Be),ke=H.getClearColor(),ze=H.getClearAlpha(),Ye=ke.r,rt=ke.g,mt=ke.b;qe?(w[0]=Ye,w[1]=rt,w[2]=mt,w[3]=ze,K.clearBufferuiv(K.COLOR,0,w)):(N[0]=Ye,N[1]=rt,N[2]=mt,N[3]=ze,K.clearBufferiv(K.COLOR,0,N))}else ae|=K.COLOR_BUFFER_BIT}$&&(ae|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ae|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&K.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),V=C},this.dispose=function(){t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Ge,!1),H.dispose(),Ie.dispose(),ge.dispose(),Me.dispose(),he.dispose(),I.dispose(),xe.dispose(),W.dispose(),Oe.dispose(),Je.dispose(),pe.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",ka),Te.removeEventListener("sessionend",Mi),ai.stop()};function nt(C){C.preventDefault(),j_("WebGLRenderer: Context Lost."),B=!0}function ut(){j_("WebGLRenderer: Context Restored."),B=!1;const C=Pe.autoReset,$=Ne.enabled,oe=Ne.autoUpdate,ae=Ne.needsUpdate,ne=Ne.type;ht(),Pe.autoReset=C,Ne.enabled=$,Ne.autoUpdate=oe,Ne.needsUpdate=ae,Ne.type=ne}function Ge(C){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function xt(C){const $=C.target;$.removeEventListener("dispose",xt),$t($)}function $t(C){Ln(C),he.remove(C)}function Ln(C){const $=he.get(C).programs;$!==void 0&&($.forEach(function(oe){pe.releaseProgram(oe)}),C.isShaderMaterial&&pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,oe,ae,ne,Be){$===null&&($=Zt);const qe=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,ke=na(C,$,oe,ae,ne);ce.setMaterial(ae,qe);let ze=oe.index,Ye=1;if(ae.wireframe===!0){if(ze=W.getWireframeAttribute(oe),ze===void 0)return;Ye=2}const rt=oe.drawRange,mt=oe.attributes.position;let Ke=rt.start*Ye,vt=(rt.start+rt.count)*Ye;Be!==null&&(Ke=Math.max(Ke,Be.start*Ye),vt=Math.min(vt,(Be.start+Be.count)*Ye)),ze!==null?(Ke=Math.max(Ke,0),vt=Math.min(vt,ze.count)):mt!=null&&(Ke=Math.max(Ke,0),vt=Math.min(vt,mt.count));const Bt=vt-Ke;if(Bt<0||Bt===1/0)return;Oe.setup(ne,ae,ke,oe,ze);let It,At=me;if(ze!==null&&(It=T.get(ze),At=Fe,At.setIndex(It)),ne.isMesh)ae.wireframe===!0?(ce.setLineWidth(ae.wireframeLinewidth*pn()),At.setMode(K.LINES)):At.setMode(K.TRIANGLES);else if(ne.isLine){let Xt=ae.linewidth;Xt===void 0&&(Xt=1),ce.setLineWidth(Xt*pn()),ne.isLineSegments?At.setMode(K.LINES):ne.isLineLoop?At.setMode(K.LINE_LOOP):At.setMode(K.LINE_STRIP)}else ne.isPoints?At.setMode(K.POINTS):ne.isSprite&&At.setMode(K.TRIANGLES);if(ne.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))At.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const Xt=ne._multiDrawStarts,Ze=ne._multiDrawCounts,sn=ne._multiDrawCount,Qe=ze?T.get(ze).bytesPerElement:1,si=he.get(ae).currentProgram.getUniforms();for(let on=0;on<sn;on++)si.setValue(K,"_gl_DrawID",on),At.render(Xt[on]/Qe,Ze[on])}else if(ne.isInstancedMesh)At.renderInstances(Ke,Bt,ne.count);else if(oe.isInstancedBufferGeometry){const Xt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ze=Math.min(oe.instanceCount,Xt);At.renderInstances(Ke,Bt,Ze)}else At.render(Ke,Bt)};function Jr(C,$,oe,ae){V!==null&&C.isNodeMaterial&&V.setObject(ae,C),Ft===!0&&_e.setState(C,oe,!1),C.transparent===!0&&C.side===vr&&C.forceSinglePass===!1?(C.side=ii,C.needsUpdate=!0,ar(C,$,ae),C.side=cs,C.needsUpdate=!0,ar(C,$,ae),C.side=vr):ar(C,$,ae)}this.compile=function(C,$,oe=null){oe===null&&(oe=C),V!==null&&V.renderStart(C,$,oe),D=ge.get(oe),D.init($),P.push(D),oe.traverseVisible(function(ne){ne.isLight&&ne.layers.test($.layers)&&(D.pushLight(ne),ne.castShadow&&D.pushShadow(ne))}),C!==oe&&C.traverseVisible(function(ne){ne.isLight&&ne.layers.test($.layers)&&(D.pushLight(ne),ne.castShadow&&D.pushShadow(ne))}),D.setupLights(),V!==null&&V.updateLights(D.state.lightsArray),en=this.localClippingEnabled,Ft=_e.init(this.clippingPlanes,en),Ft===!0&&_e.setGlobalState(this.clippingPlanes,$),V!==null&&Ne.render(D.state.shadowsArray,oe,$);const ae=new Set;return C.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Be=ne.material;if(Be)if(Array.isArray(Be))for(let qe=0;qe<Be.length;qe++){const ke=Be[qe];Jr(ke,oe,$,ne),ae.add(ke)}else Jr(Be,oe,$,ne),ae.add(Be)}),D=P.pop(),V!==null&&V.renderEnd(),ae},this.compileAsync=function(C,$,oe=null){const ae=this.compile(C,$,oe);return new Promise(ne=>{function Be(){if(ae.forEach(function(qe){const ze=he.get(qe).currentProgram;(ze===void 0||ze.isReady())&&ae.delete(qe)}),ae.size===0){ne(C);return}setTimeout(Be,10)}Ct.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let ir=null;function Qr(C){ir&&ir(C)}function ka(){ai.stop()}function Mi(){ai.start()}const ai=new Qx;ai.setAnimationLoop(Qr),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(C){ir=C,Te.setAnimationLoop(C),C===null?ai.stop():ai.start()},Te.addEventListener("sessionstart",ka),Te.addEventListener("sessionend",Mi),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;V!==null&&V.renderStart(C,$);const oe=Te.enabled===!0&&Te.isPresenting===!0,ae=G!==null&&(J===null||oe)&&G.begin(O,J);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(G===null||G.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera($),$=Te.getCamera()),C.isScene===!0&&C.onBeforeRender(O,C,$,J),D=ge.get(C,P.length),D.init($),D.state.textureUnits=Me.getTextureUnits(),P.push(D),Lt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),$.isArrayCamera?Wt.setFromArrayCamera($):ot.setFromProjectionMatrix(Lt,Qi,$.reversedDepth),en=this.localClippingEnabled,Ft=_e.init(this.clippingPlanes,en),U=Ie.get(C,b.length),U.init(),b.push(U),this.info.render.frame++,Te.enabled===!0&&Te.isPresenting===!0){const qe=O.xr.getDepthSensingMesh();qe!==null&&ea(qe,$,-1/0,O.sortObjects)}ea(C,$,0,O.sortObjects),U.finish(),V!==null&&V.updateLights(D.state.lightsArray),O.sortObjects===!0&&U.sort(He,ft),an=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,an&&H.addToRenderList(U,C),this.info.autoReset===!0&&this.info.reset(),Ft===!0&&_e.beginShadows();const ne=D.state.shadowsArray;if(Ne.render(ne,C,$),Ft===!0&&_e.endShadows(),(ae&&G.hasRenderPass())===!1){const qe=U.opaque,ke=U.transmissive;if(D.setupLights(),$.isArrayCamera){const ze=$.cameras;if(ke.length>0)for(let Ye=0,rt=ze.length;Ye<rt;Ye++){const mt=ze[Ye];ta(qe,ke,C,mt)}an&&H.render(C);for(let Ye=0,rt=ze.length;Ye<rt;Ye++){const mt=ze[Ye];rr(U,C,mt,mt.viewport)}}else ke.length>0&&ta(qe,ke,C,$),an&&H.render(C),rr(U,C,$)}J!==null&&ee===0&&(Me.updateMultisampleRenderTarget(J),Me.updateRenderTargetMipmap(J)),ae&&G.end(O),C.isScene===!0&&C.onAfterRender(O,C,$),Oe.resetDefaultState(),Y=-1,j=null,P.pop(),P.length>0?(D=P[P.length-1],Me.setTextureUnits(D.state.textureUnits),Ft===!0&&_e.setGlobalState(O.clippingPlanes,D.state.camera)):D=null,b.pop(),b.length>0?U=b[b.length-1]:U=null,V!==null&&V.renderEnd()};function ea(C,$,oe,ae){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLight)D.pushLight(C),C.castShadow&&D.pushShadow(C);else if(C.isSprite){const qe=$.isArrayCamera?Wt:ot;if(!C.frustumCulled||C.intersectsFrustum(qe)){ae&&Ot.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Lt);const ke=xe.update(C),ze=C.material;ze.visible&&U.push(C,ke,ze,oe,Ot.z,null,$)}}else if(C.isMesh||C.isLine||C.isPoints){const qe=$.isArrayCamera?Wt:ot;if(!C.frustumCulled||C.intersectsFrustum(qe)){const ke=xe.update(C),ze=C.material;if(ae&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ot.copy(C.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Ot.copy(ke.boundingSphere.center)),Ot.applyMatrix4(C.matrixWorld).applyMatrix4(Lt)),Array.isArray(ze)){const Ye=ke.groups;for(let rt=0,mt=Ye.length;rt<mt;rt++){const Ke=Ye[rt],vt=ze[Ke.materialIndex];vt&&vt.visible&&U.push(C,ke,vt,oe,Ot.z,Ke,$)}}else ze.visible&&U.push(C,ke,ze,oe,Ot.z,null,$)}}}const Be=C.children;for(let qe=0,ke=Be.length;qe<ke;qe++)ea(Be[qe],$,oe,ae)}function rr(C,$,oe,ae){const{opaque:ne,transmissive:Be,transparent:qe}=C;D.setupLightsView(oe),Ft===!0&&_e.setGlobalState(O.clippingPlanes,oe),ae&&ce.viewport(F.copy(ae)),ne.length>0&&We(ne,$,oe),Be.length>0&&We(Be,$,oe),qe.length>0&&We(qe,$,oe),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function ta(C,$,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ae.id]===void 0){const Ke=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ae.id]=new br(1,1,{generateMipmaps:!0,type:Ke?Tr:gi,minFilter:Pa,samples:Math.max(4,fe.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Be=D.state.transmissionRenderTarget[ae.id],qe=ae.viewport||F;Be.setSize(qe.z*O.transmissionResolutionScale,qe.w*O.transmissionResolutionScale);const ke=O.getRenderTarget(),ze=O.getActiveCubeFace(),Ye=O.getActiveMipmapLevel();O.setRenderTarget(Be),O.getClearColor(re),Se=O.getClearAlpha(),Se<1&&O.setClearColor(16777215,.5),O.clear(),an&&H.render(oe);const rt=O.toneMapping;O.toneMapping=Wr;const mt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),D.setupLightsView(ae),Ft===!0&&_e.setGlobalState(O.clippingPlanes,ae),We(C,oe,ae),Me.updateMultisampleRenderTarget(Be),Me.updateRenderTargetMipmap(Be),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let vt=0,Bt=$.length;vt<Bt;vt++){const It=$[vt],{object:At,geometry:Xt,material:Ze,group:sn}=It;if(Ze.side===vr&&At.layers.test(ae.layers)){const Qe=Ze.side;Ze.side=ii,Ze.needsUpdate=!0,Ba(At,oe,ae,Xt,Ze,sn),Ze.side=Qe,Ze.needsUpdate=!0,Ke=!0}}Ke===!0&&(Me.updateMultisampleRenderTarget(Be),Me.updateRenderTargetMipmap(Be))}O.setRenderTarget(ke,ze,Ye),O.setClearColor(re,Se),mt!==void 0&&(ae.viewport=mt),O.toneMapping=rt}function We(C,$,oe){const ae=$.isScene===!0?$.overrideMaterial:null;for(let ne=0,Be=C.length;ne<Be;ne++){const qe=C[ne],{object:ke,geometry:ze,group:Ye}=qe;let rt=qe.material;rt.allowOverride===!0&&ae!==null&&(rt=ae),ke.layers.test(oe.layers)&&Ba(ke,$,oe,ze,rt,Ye)}}function Ba(C,$,oe,ae,ne,Be){V!==null&&ne.isNodeMaterial&&V.setObject(C,ne),C.onBeforeRender(O,$,oe,ae,ne,Be),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ne.onBeforeRender(O,$,oe,ae,C,Be),ne.transparent===!0&&ne.side===vr&&ne.forceSinglePass===!1?(ne.side=ii,ne.needsUpdate=!0,O.renderBufferDirect(oe,$,ae,ne,C,Be),ne.side=cs,ne.needsUpdate=!0,O.renderBufferDirect(oe,$,ae,ne,C,Be),ne.side=vr):O.renderBufferDirect(oe,$,ae,ne,C,Be),C.onAfterRender(O,$,oe,ae,ne,Be)}function zn(C){let $=0;for(const oe of C)oe.texture!==null&&$++;return $}function ar(C,$,oe){$.isScene!==!0&&($=Zt);const ae=he.get(C),ne=D.state.lights,Be=D.state.shadowsArray,qe=ne.state.version,ke=pe.getParameters(C,ne.state,Be,$,oe,D.state.lightProbeGridArray),ze=pe.getProgramCacheKey(ke);let Ye=ae.programs;ae.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?$.environment:null,ae.fog=$.fog;const rt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ae.envMap=I.get(C.envMap||ae.environment,rt),ae.envMapRotation=ae.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,Ye===void 0&&(C.addEventListener("dispose",xt),Ye=new Map,ae.programs=Ye,ae.programVariants=new Map);let mt=Ye.get(ze);if(mt!==void 0){if(ae.currentProgram===mt&&ae.lightsStateVersion===qe)return za(C,ke),mt}else ke.uniforms=pe.getUniforms(C),V!==null&&C.isNodeMaterial&&V.build(C,oe,ke),C.onBeforeCompile(ke,O),mt=pe.acquireProgram(ke,ze),Ye.set(ze,mt),ae.uniforms=ke.uniforms;const Ke=ae.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ke.clippingPlanes=_e.uniform),za(C,ke),ae.needsLights=Rr(C),ae.lightsStateVersion=qe,ae.needsLights&&(Ke.ambientLightColor.value=ne.state.ambient,Ke.lightProbe.value=ne.state.probe,Ke.sunLights.value=ne.state.sun,Ke.sunLightShadows.value=ne.state.sunShadow,Ke.directionalLights.value=ne.state.directional,Ke.directionalLightShadows.value=ne.state.directionalShadow,Ke.spotLights.value=ne.state.spot,Ke.spotLightShadows.value=ne.state.spotShadow,Ke.rectAreaLights.value=ne.state.rectArea,Ke.ltc_1.value=ne.state.rectAreaLTC1,Ke.ltc_2.value=ne.state.rectAreaLTC2,Ke.pointLights.value=ne.state.point,Ke.pointLightShadows.value=ne.state.pointShadow,Ke.hemisphereLights.value=ne.state.hemi,Ke.sunShadowMatrix.value=ne.state.sunShadowMatrix,Ke.sunShadowCascade.value=ne.state.sunShadowCascade,Ke.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ke.spotLightMatrix.value=ne.state.spotLightMatrix,Ke.spotLightMap.value=ne.state.spotLightMap,Ke.pointShadowMatrix.value=ne.state.pointShadowMatrix),ae.numLightProbeGrids=zn(D.state.lightProbeGridArray),ae.currentProgram=mt,ae.uniformsList=null,mt}function _s(C,$,oe,ae,ne){const Be=he.get(C),qe=Be.currentProgram.id+","+ae+","+ne;let ke=Be.programVariants.get(qe);return ke===void 0?(ke=ar(C,$,oe),Be.programVariants.set(qe,ke)):(Be.currentProgram=ke,Be.uniformsList=null,Be.outputColorSpace=ae,Be.toneMapping=ne),ke}function zt(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=Bc.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function za(C,$){const oe=he.get(C);oe.outputColorSpace=$.outputColorSpace,oe.batching=$.batching,oe.batchingColor=$.batchingColor,oe.instancing=$.instancing,oe.instancingColor=$.instancingColor,oe.instancingMorph=$.instancingMorph,oe.skinning=$.skinning,oe.morphTargets=$.morphTargets,oe.morphNormals=$.morphNormals,oe.morphColors=$.morphColors,oe.morphTargetsCount=$.morphTargetsCount,oe.numClippingPlanes=$.numClippingPlanes,oe.numIntersection=$.numClipIntersection,oe.vertexAlphas=$.vertexAlphas,oe.vertexTangents=$.vertexTangents,oe.toneMapping=$.toneMapping}function na(C,$,oe,ae,ne){$.isScene!==!0&&($=Zt),Me.resetTextureUnits();const Be=$.fog,qe=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?$.environment:null,ke=J===null?O.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Tt.workingColorSpace,ze=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Ye=I.get(ae.envMap||qe,ze),rt=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,mt=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ke=!!oe.morphAttributes.position,vt=!!oe.morphAttributes.normal,Bt=!!oe.morphAttributes.color;let It=Wr;ae.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(It=O.toneMapping);const At=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Xt=At!==void 0?At.length:0,Ze=he.get(ae),sn=D.state.lights;if(Ft===!0&&(en===!0||C!==j)){const wt=C===j&&ae.id===Y;_e.setState(ae,C,wt)}let Qe=!1,si=!1;ae.version===Ze.__version?Ze.needsLights&&Ze.lightsStateVersion!==sn.state.version||ne.isBatchedMesh&&Ze.batching===!1||!ne.isBatchedMesh&&Ze.batching===!0||ne.isBatchedMesh&&Ze.batchingColor===!0&&ne._colorsTexture===null||ne.isBatchedMesh&&Ze.batchingColor===!1&&ne._colorsTexture!==null||ne.isInstancedMesh&&Ze.instancing===!1||!ne.isInstancedMesh&&Ze.instancing===!0||ne.isSkinnedMesh&&Ze.skinning===!1||!ne.isSkinnedMesh&&Ze.skinning===!0||ne.isInstancedMesh&&Ze.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Ze.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Ze.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Ze.instancingMorph===!1&&ne.morphTexture!==null||Ze.envMap!==Ye||ae.fog===!0&&Ze.fog!==Be||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==_e.numPlanes||Ze.numIntersection!==_e.numIntersection)||Ze.vertexAlphas!==rt||Ze.vertexTangents!==mt||Ze.morphTargets!==Ke||Ze.morphNormals!==vt||Ze.morphColors!==Bt||Ze.morphTargetsCount!==Xt||Ze.numLightProbeGrids!==zn(D.state.lightProbeGridArray)?Qe=!0:(Ze.outputColorSpace!==ke||Ze.toneMapping!==It)&&(si=!0):(Qe=!0,Ze.__version=ae.version);let on=Ze.currentProgram;(Qe===!0||si===!0)&&(on=si===!0?_s(ae,$,ne,ke,It):ar(ae,$,ne),V&&ae.isNodeMaterial&&V.onUpdateProgram(ae,on,Ze));let Ui=!1,Xn=!1,oi=!1;const St=on.getUniforms(),jt=Ze.uniforms;if(ce.useProgram(on.program)&&(Ui=!0,Xn=!0,oi=!0),ae.id!==Y&&(Y=ae.id,Xn=!0),Ui||j!==C){ce.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),St.setValue(K,"projectionMatrix",C.projectionMatrix),St.setValue(K,"viewMatrix",C.matrixWorldInverse);const Ut=St.map.cameraPosition;Ut!==void 0&&Ut.setValue(K,cn.setFromMatrixPosition(C.matrixWorld)),fe.logarithmicDepthBuffer&&St.setValue(K,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&St.setValue(K,"isOrthographic",C.isOrthographicCamera===!0),j!==C&&(j=C,Xn=!0,oi=!0)}if(Ze.needsLights&&(sn.state.sunShadowMap.length>0&&St.setValue(K,"sunShadowMap",sn.state.sunShadowMap,Me),sn.state.directionalShadowMap.length>0&&St.setValue(K,"directionalShadowMap",sn.state.directionalShadowMap,Me),sn.state.spotShadowMap.length>0&&St.setValue(K,"spotShadowMap",sn.state.spotShadowMap,Me),sn.state.pointShadowMap.length>0&&St.setValue(K,"pointShadowMap",sn.state.pointShadowMap,Me)),ne.isSkinnedMesh){St.setOptional(K,ne,"bindMatrix"),St.setOptional(K,ne,"bindMatrixInverse");const wt=ne.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),St.setValue(K,"boneTexture",wt.boneTexture,Me))}ne.isBatchedMesh&&(St.setOptional(K,ne,"batchingTexture"),St.setValue(K,"batchingTexture",ne._matricesTexture,Me),St.setOptional(K,ne,"batchingIdTexture"),St.setValue(K,"batchingIdTexture",ne._indirectTexture,Me),St.setOptional(K,ne,"batchingColorTexture"),ne._colorsTexture!==null&&St.setValue(K,"batchingColorTexture",ne._colorsTexture,Me));const _n=oe.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&ye.update(ne,oe,on),(Xn||Ze.receiveShadow!==ne.receiveShadow)&&(Ze.receiveShadow=ne.receiveShadow,St.setValue(K,"receiveShadow",ne.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&$.environment!==null&&(jt.envMapIntensity.value=$.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=cI()),Xn){if(St.setValue(K,"toneMappingExposure",O.toneMappingExposure),Ze.needsLights&&Ha(jt,oi),Be&&ae.fog===!0&&be.refreshFogUniforms(jt,Be),be.refreshMaterialUniforms(jt,ae,ve,Ae,D.state.transmissionRenderTarget[C.id]),Ze.needsLights&&Ze.numLightProbeGrids>0){const wt=L;let Ut=0;for(const dn of D.state.lightProbeGridArray)dn.texture!==null&&(wt.textures[Ut]=dn.texture,wt.min[Ut]=dn.boundingBox.min,wt.max[Ut]=dn.boundingBox.max,wt.resolution[Ut]=dn.resolution,Ut++);for(const dn in wt)wt[dn].length=Ut;jt.probesSH.value=wt.textures,jt.probesMin.value=wt.min,jt.probesMax.value=wt.max,jt.probesResolution.value=wt.resolution}Bc.upload(K,zt(Ze),jt,Me)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Bc.upload(K,zt(Ze),jt,Me),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&St.setValue(K,"center",ne.center),St.setValue(K,"modelViewMatrix",ne.modelViewMatrix),St.setValue(K,"normalMatrix",ne.normalMatrix),St.setValue(K,"modelMatrix",ne.matrixWorld),ae.uniformsGroups!==void 0){const wt=ae.uniformsGroups;for(let Ut=0,dn=wt.length;Ut<dn;Ut++){const Fi=wt[Ut];Je.update(Fi,on),Je.bind(Fi,on)}}return on}function Ha(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.sunLights.needsUpdate=$,C.sunLightShadows.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function Rr(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(C,$,oe){const ae=he.get(C);ae.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),he.get(C.texture).__webglTexture=$,he.get(C.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:oe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,$){const oe=he.get(C);oe.__webglFramebuffer=$,oe.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(C,$=0,oe=0){J=C,te=$,ee=oe;let ae=null,ne=!1,Be=!1;if(C){const ke=he.get(C);if(ke.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(K.FRAMEBUFFER,ke.__webglFramebuffer),F.copy(C.viewport),Q.copy(C.scissor),Ce=C.scissorTest,ce.viewport(F),ce.scissor(Q),ce.setScissorTest(Ce),Y=-1;return}else if(ke.__webglFramebuffer===void 0)Me.setupRenderTarget(C);else if(ke.__hasExternalTextures)Me.rebindTextures(C,he.get(C.texture).__webglTexture,he.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const rt=C.depthTexture;if(ke.__boundDepthTexture!==rt){if(rt!==null&&he.has(rt)&&(C.width!==rt.image.width||C.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Me.setupDepthRenderbuffer(C)}}const ze=C.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Be=!0);const Ye=he.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ye[$])?ae=Ye[$][oe]:ae=Ye[$],ne=!0):C.samples>0&&Me.useMultisampledRTT(C)===!1?ae=he.get(C).__webglMultisampledFramebuffer:Array.isArray(Ye)?ae=Ye[oe]:ae=Ye,F.copy(C.viewport),Q.copy(C.scissor),Ce=C.scissorTest}else F.copy(Xe).multiplyScalar(ve).floor(),Q.copy(gt).multiplyScalar(ve).floor(),Ce=yt;if(oe!==0&&(ae=q),ce.bindFramebuffer(K.FRAMEBUFFER,ae)&&ce.drawBuffers(C,ae),ce.viewport(F),ce.scissor(Q),ce.setScissorTest(Ce),ne){const ke=he.get(C.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+$,ke.__webglTexture,oe)}else if(Be){const ke=$;for(let ze=0;ze<C.textures.length;ze++){const Ye=he.get(C.textures[ze]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+ze,Ye.__webglTexture,oe,ke)}}else if(C!==null&&oe!==0){const ke=he.get(C.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,ke.__webglTexture,oe)}Y=-1};function Ga(C){const $=he.get(C);return($.__readFormat!==C.format||$.__readType!==C.type)&&($.__readFormat=C.format,$.__readType=C.type,$.__formatReadable=fe.textureFormatReadable(C.format),$.__typeReadable=fe.textureTypeReadable(C.type)),$}this.readRenderTargetPixels=function(C,$,oe,ae,ne,Be,qe,ke=0){if(!(C&&C.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=he.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&qe!==void 0&&(ze=ze[qe],Array.isArray(ze)&&(ze=ze[0])),ze){ce.bindFramebuffer(K.FRAMEBUFFER,ze);try{const Ye=C.textures[ke],rt=Ye.format,mt=Ye.type;C.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+ke);const Ke=Ga(Ye);if(Ke.__formatReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ke.__typeReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-ae&&oe>=0&&oe<=C.height-ne&&K.readPixels($,oe,ae,ne,De.convert(rt),De.convert(mt),Be)}finally{const Ye=J!==null?he.get(J).__webglFramebuffer:null;ce.bindFramebuffer(K.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(C,$,oe,ae,ne,Be,qe,ke=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=he.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&qe!==void 0&&(ze=ze[qe],Array.isArray(ze)&&(ze=ze[0])),ze)if($>=0&&$<=C.width-ae&&oe>=0&&oe<=C.height-ne){ce.bindFramebuffer(K.FRAMEBUFFER,ze);const Ye=C.textures[ke],rt=Ye.format,mt=Ye.type;C.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+ke);const Ke=Ga(Ye);if(Ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const vt=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,vt),K.bufferData(K.PIXEL_PACK_BUFFER,Be.byteLength,K.STREAM_READ),K.readPixels($,oe,ae,ne,De.convert(rt),De.convert(mt),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);const Bt=J!==null?he.get(J).__webglFramebuffer:null;ce.bindFramebuffer(K.FRAMEBUFFER,Bt);const It=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await CA(K,It,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,vt),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Be),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(vt),K.deleteSync(It),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,$=null,oe=0){const ae=Math.pow(2,-oe),ne=Math.floor(C.image.width*ae),Be=Math.floor(C.image.height*ae),qe=$!==null?$.x:0,ke=$!==null?$.y:0;Me.setTexture2D(C,0),K.copyTexSubImage2D(K.TEXTURE_2D,oe,0,0,qe,ke,ne,Be),ce.unbindTexture()},this.copyTextureToTexture=function(C,$,oe=null,ae=null,ne=0,Be=0){let qe,ke,ze,Ye,rt,mt,Ke,vt,Bt;const It=C.isCompressedTexture?C.mipmaps[Be]:C.image;if(oe!==null)qe=oe.max.x-oe.min.x,ke=oe.max.y-oe.min.y,ze=oe.isBox3?oe.max.z-oe.min.z:1,Ye=oe.min.x,rt=oe.min.y,mt=oe.isBox3?oe.min.z:0;else{const St=Math.pow(2,-ne);qe=Math.floor(It.width*St),ke=Math.floor(It.height*St),C.isDataArrayTexture?ze=It.depth:C.isData3DTexture?ze=Math.floor(It.depth*St):ze=1,Ye=0,rt=0,mt=0}ae!==null?(Ke=ae.x,vt=ae.y,Bt=ae.z):(Ke=0,vt=0,Bt=0);const At=De.convert($.format),Xt=De.convert($.type);let Ze;$.isData3DTexture?(Me.setTexture3D($,0),Ze=K.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(Me.setTexture2DArray($,0),Ze=K.TEXTURE_2D_ARRAY):(Me.setTexture2D($,0),Ze=K.TEXTURE_2D),ce.activeTexture(K.TEXTURE0),ce.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,$.flipY),ce.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),ce.pixelStorei(K.UNPACK_ALIGNMENT,$.unpackAlignment);const sn=ce.getParameter(K.UNPACK_ROW_LENGTH),Qe=ce.getParameter(K.UNPACK_IMAGE_HEIGHT),si=ce.getParameter(K.UNPACK_SKIP_PIXELS),on=ce.getParameter(K.UNPACK_SKIP_ROWS),Ui=ce.getParameter(K.UNPACK_SKIP_IMAGES);ce.pixelStorei(K.UNPACK_ROW_LENGTH,It.width),ce.pixelStorei(K.UNPACK_IMAGE_HEIGHT,It.height),ce.pixelStorei(K.UNPACK_SKIP_PIXELS,Ye),ce.pixelStorei(K.UNPACK_SKIP_ROWS,rt),ce.pixelStorei(K.UNPACK_SKIP_IMAGES,mt);const Xn=C.isDataArrayTexture||C.isData3DTexture,oi=$.isDataArrayTexture||$.isData3DTexture;if(C.isDepthTexture){const St=he.get(C),jt=he.get($),_n=he.get(St.__renderTarget),wt=he.get(jt.__renderTarget);ce.bindFramebuffer(K.READ_FRAMEBUFFER,_n.__webglFramebuffer),ce.bindFramebuffer(K.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Ut=0;Ut<ze;Ut++)Xn&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,he.get(C).__webglTexture,ne,mt+Ut),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,he.get($).__webglTexture,Be,Bt+Ut)),K.blitFramebuffer(Ye,rt,Ye+qe,rt+ke,Ke,vt,Ke+qe,vt+ke,K.DEPTH_BUFFER_BIT,K.NEAREST);ce.bindFramebuffer(K.READ_FRAMEBUFFER,null),ce.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(ne!==0||C.isRenderTargetTexture||he.has(C)){const St=he.get(C),jt=he.get($);ce.bindFramebuffer(K.READ_FRAMEBUFFER,k),ce.bindFramebuffer(K.DRAW_FRAMEBUFFER,ie);for(let _n=0;_n<ze;_n++)Xn?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,St.__webglTexture,ne,mt+_n):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,St.__webglTexture,ne),oi?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,jt.__webglTexture,Be,Bt+_n):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,jt.__webglTexture,Be),ne!==0?K.blitFramebuffer(Ye,rt,Ye+qe,rt+ke,Ke,vt,Ke+qe,vt+ke,K.COLOR_BUFFER_BIT,K.NEAREST):oi?K.copyTexSubImage3D(Ze,Be,Ke,vt,Bt+_n,Ye,rt,qe,ke):K.copyTexSubImage2D(Ze,Be,Ke,vt,Ye,rt,qe,ke);ce.bindFramebuffer(K.READ_FRAMEBUFFER,null),ce.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else oi?C.isDataTexture||C.isData3DTexture?K.texSubImage3D(Ze,Be,Ke,vt,Bt,qe,ke,ze,At,Xt,It.data):$.isCompressedArrayTexture?K.compressedTexSubImage3D(Ze,Be,Ke,vt,Bt,qe,ke,ze,At,It.data):K.texSubImage3D(Ze,Be,Ke,vt,Bt,qe,ke,ze,At,Xt,It):C.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Be,Ke,vt,qe,ke,At,Xt,It.data):C.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Be,Ke,vt,It.width,It.height,At,It.data):K.texSubImage2D(K.TEXTURE_2D,Be,Ke,vt,qe,ke,At,Xt,It);ce.pixelStorei(K.UNPACK_ROW_LENGTH,sn),ce.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Qe),ce.pixelStorei(K.UNPACK_SKIP_PIXELS,si),ce.pixelStorei(K.UNPACK_SKIP_ROWS,on),ce.pixelStorei(K.UNPACK_SKIP_IMAGES,Ui),Be===0&&$.generateMipmaps===!0&&$.mipmapsAutoUpdate===!0&&K.generateMipmap(Ze),ce.unbindTexture()},this.initRenderTarget=function(C){he.get(C).__webglFramebuffer===void 0&&Me.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Me.setTextureCube(C,0):C.isData3DTexture?Me.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Me.setTexture2DArray(C,0):Me.setTexture2D(C,0),ce.unbindTexture()},this.resetState=function(){te=0,ee=0,J=null,ce.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}const ll=new ue;function Pi(n,e,t,r,s,o){const u=2*Math.PI*s/4,d=Math.max(o-2*s,0),f=Math.PI/4;ll.copy(e),ll[r]=0,ll.normalize();const h=.5*u/(u+d),g=1-ll.angleTo(n)/f;return Math.sign(ll[t])===1?g*h:d/(u+d)+h+h*(1-g)}class Vm extends _o{constructor(e=1,t=1,r=1,s=2,o=.1){const u=s*2+1;if(o=Math.min(e/2,t/2,r/2,o),super(1,1,1,u,u,u),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:r,segments:s,radius:o},u===1)return;const d=this.toNonIndexed();this.index=null,this.attributes.position=d.attributes.position,this.attributes.normal=d.attributes.normal,this.attributes.uv=d.attributes.uv;const f=new ue,h=new ue,g=new ue(e,t,r).divideScalar(2).subScalar(o),m=this.attributes.position.array,v=this.attributes.normal.array,x=this.attributes.uv.array,M=m.length/6,R=new ue,y=.5/u;for(let S=0,w=0;S<m.length;S+=3,w+=2)switch(f.fromArray(m,S),h.copy(f),h.x-=Math.sign(h.x)*y,h.y-=Math.sign(h.y)*y,h.z-=Math.sign(h.z)*y,h.normalize(),m[S+0]=g.x*Math.sign(f.x)+h.x*o,m[S+1]=g.y*Math.sign(f.y)+h.y*o,m[S+2]=g.z*Math.sign(f.z)+h.z*o,v[S+0]=h.x,v[S+1]=h.y,v[S+2]=h.z,Math.floor(S/M)){case 0:R.set(1,0,0),x[w+0]=Pi(R,h,"z","y",o,r),x[w+1]=1-Pi(R,h,"y","z",o,t);break;case 1:R.set(-1,0,0),x[w+0]=1-Pi(R,h,"z","y",o,r),x[w+1]=1-Pi(R,h,"y","z",o,t);break;case 2:R.set(0,1,0),x[w+0]=1-Pi(R,h,"x","z",o,e),x[w+1]=Pi(R,h,"z","x",o,r);break;case 3:R.set(0,-1,0),x[w+0]=1-Pi(R,h,"x","z",o,e),x[w+1]=1-Pi(R,h,"z","x",o,r);break;case 4:R.set(0,0,1),x[w+0]=1-Pi(R,h,"x","y",o,e),x[w+1]=1-Pi(R,h,"y","x",o,t);break;case 5:R.set(0,0,-1),x[w+0]=Pi(R,h,"x","y",o,e),x[w+1]=1-Pi(R,h,"y","x",o,t);break}}static fromJSON(e){return new Vm(e.width,e.height,e.depth,e.segments,e.radius)}}let ul,wa,Ml,Wh,Vy,Wy;const $h=new Set;function fI(n,e,t){wa={game:n,viewer:e,replaying:t}}async function hI(n){return Ml?Ml.reveal(n):!1}const Xh=new Map;function pI(n){return Xh.has(n)||Xh.set(n,new Promise(e=>{const t=new Image;t.onload=()=>e(t),t.onerror=()=>e(null),t.src=n})),Xh.get(n)}function mI(){var mn,Ct;const n=document.querySelector(".match-mode:not(.lobby-mode) .rows");if(n&&n===Vy&&Ml||(ul==null||ul(),ul=null,Ml=null,Vy=n,!n))return;const e=document.querySelector(".page-shell"),t=document.createElement("canvas");t.className="clubhouse-scene",e.prepend(t);let r;try{r=new dI({canvas:t,antialias:!0})}catch{t.remove();return}e.classList.add("clubhouse-ready");const s=document.createElement("div");s.className="clubhouse-score-strip",s.setAttribute("aria-label","Player scores"),document.querySelectorAll(".header-player").forEach(fe=>{var Pe,he;const ce=document.createElement("span");ce.textContent=(((Pe=fe.querySelector(".header-player-copy b"))==null?void 0:Pe.textContent)||"Player")+" · "+(((he=fe.querySelector(".header-player-score strong"))==null?void 0:he.textContent)||"0")+" bulls",s.append(ce)}),e.append(s),r.setPixelRatio(Math.min(Math.max(devicePixelRatio,2),2.5)),r.shadowMap.enabled=!0,r.shadowMap.type=yx,r.toneMapping=Rm,r.toneMappingExposure=1.3;const o=new YA;o.background=new Et("#31273c"),o.fog=new Fm("#31273c",20,40);const u=new Li(38,1,.1,60);u.position.set(0,11.8,16.5),u.lookAt(0,.65,-.8);const d=[],f=[],h=[],g=[];let m=!1,v;const x=(wa==null?void 0:wa.game.round)+":"+(wa==null?void 0:wa.game.turn);Wy!==x&&(Wy=x,$h.clear());const M=wa,R=(M==null?void 0:M.game.players.filter(fe=>fe.id!==M.viewer))||[],y=new Map(R.map((fe,ce)=>[fe.id,R.length===1?0:(ce/(R.length-1)-.5)*4.4]));t.dataset.opponents=String(R.length);const S=(M!=null&&M.replaying&&Wh?Wh:(M==null?void 0:M.game.rows)||[]).map(fe=>fe.slice());M!=null&&M.replaying||(Wh=S.map(fe=>fe.slice()));function w(fe,ce){return new Promise(Pe=>{g.push({start:performance.now(),duration:fe,update:ce,resolve:Pe})})}const N=(fe,ce=.65)=>{const Pe=new uC({color:fe,roughness:ce});return d.push(Pe),Pe},L=N("#92582f",.4),U=N("#c48c50",.4),D=N("#233d72",.98),b=N("#f8e9cc"),P=N("#251d26"),G=N("#e3ad4d",.3);function O(fe,ce,Pe=o){d.push(fe);const he=new Oa(fe,ce);return he.castShadow=he.receiveShadow=!0,Pe.add(he),he}function B(fe,ce,Pe,he,Me,I,T,W=o,xe=.06){const pe=O(new Vm(fe,ce,Pe,3,Math.min(xe,fe/2,ce/2,Pe/2)),he,W);return pe.position.set(Me,I,T),pe}function V(fe,ce,Pe,he,Me,I,T,W){const xe=O(new zm(1,24,16),T,W);return xe.position.set(fe,ce,Pe),xe.scale.set(he,Me,I),xe}o.add(new fC("#ffe6bc","#364a80",2.2));const q=new mC("#ffd1a1",3);q.position.set(-4,9,5),q.castShadow=!0,q.shadow.mapSize.set(1024,1024),Object.assign(q.shadow.camera,{left:-7,right:7,top:8,bottom:-8}),q.shadow.bias=-.001,o.add(q);const k=new _y("#8da3ff",22,20);k.position.set(4,5,-4),o.add(k),B(24,.2,25,L,0,-.9,-2),B(22,10,.3,N("#513a4d"),0,3.5,-7.8);for(let fe=-10;fe<=10;fe+=1.5)B(.07,9,.12,L,fe,3.5,-7.55);for(const fe of[-1,1]){B(2.4,5,.65,L,fe*5.7,1.7,-6.8);for(let he=0;he<4.5;he+=1.15){B(2.35,.12,.85,U,fe*5.7,he,-6.5);for(let Me=0;Me<6;Me++)B(.22,.55+Me%3*.12,.35,N(["#8b5879","#728a78","#c09060"][Me%3]),fe*5.7-.8+Me*.3,he+.4,-6.4)}O(new Jc(.7,.5,32,1,!0),G).position.set(fe*3.5,4.6,-5),B(.04,2,.04,G,fe*3.5,5.7,-5);const Pe=new _y("#ffc16e",18,9);Pe.position.set(fe*3.5,4.3,-5),o.add(Pe)}B(2.5,1.8,.1,U,0,3.6,-7.5),B(2.25,1.55,.1,N("#744656"),0,3.6,-7.4);const ie=document.createElement("canvas");ie.width=512,ie.height=256;const te=ie.getContext("2d");te.fillStyle="#ffe7ac",te.textAlign="center",te.font="bold 100px Georgia",te.fillText("Take 5",256,150);const ee=new sl(ie);d.push(ee);const J=new ml({map:ee,transparent:!0});d.push(J),O(new Ia(2.2,1.1),J).position.set(0,3.65,-7.3);function j(fe,ce,Pe,he){const Me=O(new Nl(fe,fe,Pe,80),he);return Me.scale.z=1.16,Me.position.y=ce,Me}j(4.1,-.14,.42,L),j(4.02,.07,.12,U),j(3.73,.14,.08,D);const F=document.createElement("canvas");F.width=F.height=128;const Q=F.getContext("2d");Q.fillStyle="#7587a2",Q.fillRect(0,0,128,128);for(let fe=0;fe<128;fe+=3)Q.fillStyle=fe%2?"#637594":"#8999b0",Q.fillRect(fe,0,1,128),Q.fillRect(0,fe,128,1);const Ce=new sl(F);Ce.wrapS=Ce.wrapT=Xc,Ce.repeat.set(18,18),d.push(Ce),D.bumpMap=Ce,D.bumpScale=.02;function re(fe,ce){const Pe=new ao;Pe.position.set(ce,.2,-4.15),Pe.scale.setScalar(Math.min(1.3,3.6/Math.max(1,R.length))),o.add(Pe);const he=N(fe==="fox"?"#e88b34":fe==="bear"?"#a7754b":"#7eae43"),Me=N(fe==="fox"?"#ead3a8":fe==="bear"?"#4f5683":"#c89e4f");if(B(1.65,1.9,.6,N("#773d47"),0,.7,-.5,Pe,.25),V(0,.85,0,.64,.72,.45,Me,Pe),V(0,1.85,.04,.67,.63,.52,he,Pe),fe==="fox")for(const I of[-1,1]){const T=O(new Jc(.25,.64,3),he,Pe);T.position.set(I*.47,2.43,0),T.rotation.z=-I*.22,V(I*.24,1.64,.42,.33,.22,.16,b,Pe)}if(fe==="bear")for(const I of[-1,1])V(I*.53,2.29,0,.24,.25,.19,he,Pe),V(I*.53,2.29,.13,.12,.13,.06,b,Pe);if(fe==="frog")for(const I of[-1,1])V(I*.33,2.23,.25,.29,.3,.25,he,Pe);for(const I of[-1,1])V(I*.25,1.95,.49,.135,.16,.055,b,Pe),V(I*.25,1.94,.54,.065,.085,.025,P,Pe),V(I*.27,1.98,.565,.024,.03,.012,b,Pe),V(I*.48,.35,.55,.23,.16,.28,he,Pe);V(0,1.61,.5,.28,.18,.1,fe==="frog"?he:b,Pe),V(0,1.7,.61,.11,.075,.065,P,Pe),V(0,1.48,.56,.12,.065,.035,P,Pe),h.push(Pe)}R.forEach((fe,ce)=>re(["fox","bear","frog"][ce%3],y.get(fe.id)));function Se(fe,ce,Pe,he){const Me=document.createElement("canvas");Me.width=Me.height=128;const I=Me.getContext("2d");I.fillStyle="#322039",I.font="bold 70px Arial",I.textAlign="center",I.fillText(fe,64,90);const T=new sl(Me);d.push(T);const W=new ml({map:T,transparent:!0});d.push(W);const xe=O(new Ia(.4,.4),W);xe.position.set(ce,Pe,he),xe.rotation.x=-Math.PI/2}async function Ee(fe,ce){const Pe=Number(fe.dataset.cardNumber||fe.dataset.card),he=Pe===55?7:Pe%11===0?5:Pe%10===0?3:Pe%5===0?2:1,Me={1:"one-bull",2:"two-bulls",3:"three-bulls",5:"five-bulls",7:"seven-bulls"}[he],I=await pI(new URL("assets/cards/card-"+Me+".png",document.baseURI).href);if(m||!I)return;const T=document.createElement("canvas");T.width=1024,T.height=1536;const W=T.getContext("2d");W.imageSmoothingEnabled=!0,W.imageSmoothingQuality="high",W.fillStyle="#fffdf8",W.beginPath(),W.roundRect(0,0,1024,1536,48),W.fill(),W.save(),W.beginPath(),W.roundRect(0,0,1024,1536,48),W.clip(),W.drawImage(I,I.width*.065,I.height*.045,I.width*.87,I.height*.91,0,0,1024,1536),W.restore();const xe=String(Pe);W.textAlign="center",W.textBaseline="middle",W.font="900 "+(xe.length===3?440:530)+"px Arial, sans-serif",W.lineJoin="round",W.strokeStyle="#fffdf8",W.lineWidth=30,W.strokeText(xe,512,795),W.fillStyle="#101622",W.fillText(xe,512,795);const pe={1:"#244d9b",2:"#158145",3:"#087eac",5:"#cf3032",7:"#b67e12"}[he];for(const _e of[!1,!0])W.save(),_e&&(W.translate(1024,1536),W.rotate(Math.PI)),W.beginPath(),W.roundRect(18,18,988,1508,40),W.clip(),W.fillStyle=pe,W.beginPath(),W.moveTo(18,18),W.lineTo(1006,18),W.lineTo(1006,165),W.quadraticCurveTo(720,130,18,238),W.closePath(),W.fill(),W.textAlign="left",W.textBaseline="middle",W.font="900 "+(xe.length===3?154:190)+"px Arial, sans-serif",W.fillStyle="#ffffff",W.fillText(xe,42,118),W.restore();const be=new sl(T);be.colorSpace=ei,be.anisotropy=r.capabilities.getMaxAnisotropy(),d.push(be);const Ie=new ml({map:be,side:vr,toneMapped:!1,fog:!1,transparent:!0,alphaTest:.1});d.push(Ie);const ge=O(new Ia(.68,1.02),Ie,ce);ge.position.z=.075,ge.castShadow=!1,t.dataset.textures=String(Number(t.dataset.textures||0)+1)}function Ae(fe,ce,Pe,he,Me=0,I=!1){const T=new ao;return o.add(T),T.position.set(ce,Pe,he),T.rotation.x=-1.35,T.position.y+=.1,T.rotation.z=Me,B(.7,1.04,.065,b,0,0,0,T,.045),Ee(fe,T),I&&(T.rotation.x=-.72,fe.classList.contains("selected")&&(T.position.y+=.3,T.position.z-=.2,B(.76,1.1,.025,G,0,0,-.025,T,.045)),T.userData.control=fe,f.push(T)),T}const ve=[[],[],[],[]];function He(fe){const ce=document.createElement("span");return ce.dataset.card=String(fe),ce}for(let fe=0;fe<4;fe++){const ce=-2.2+fe*1.12;B(6.25,.012,.025,N("#67799b"),0,.195,ce+.57),Se(String(fe+1),-3.1,.21,ce),(mn=S[fe])==null||mn.forEach((Me,I)=>ve[fe].push(Ae(He(Me),-2.35+I*.81,.24,ce))),O(new Nl(.24,.24,.07,32),G).position.set(2.9,.24,ce);const he=(S[fe]||[]).reduce((Me,I)=>Me+(I===55?7:I%11===0?5:I%10===0?3:I%5===0?2:1),0);Se(String(he),2.9,.285,ce)}const ft=document.createElement("canvas");ft.width=256,ft.height=384;const Xe=ft.getContext("2d");Xe.fillStyle="#264c88",Xe.fillRect(0,0,256,384),Xe.strokeStyle="#e6c07b",Xe.lineWidth=10,Xe.strokeRect(12,12,232,360),Xe.fillStyle="#f5db9d",Xe.font="bold 62px Georgia",Xe.textAlign="center",Xe.fillText("Take 5",128,208);const gt=new sl(ft);gt.colorSpace=ei,d.push(gt);const yt=new ml({map:gt,toneMapped:!1});d.push(yt);const ot=new Map;function Wt(fe,ce,Pe=!0){if(ot.has(fe))return ot.get(fe);const he=fe===(M==null?void 0:M.viewer),Me=Ae(He(ce||1),he?0:y.get(fe)||0,he?.42:4.25,he?2.8:-4.05);Me.rotation.x=he?-1.35:0,he||Me.quaternion.copy(u.quaternion);const I=Me.quaternion.clone(),T=O(new Ia(.68,1.02),yt,Me);if(T.position.z=-.075,T.rotation.y=Math.PI,Me.userData.base=I,Me.userData.back=T,Me.userData.playerId=fe,Pe&&Me.quaternion.multiply(new $r().setFromAxisAngle(new ue(0,1,0),Math.PI)),ot.set(fe,Me),t.dataset.stagePlayers=JSON.stringify([...ot.keys()]),!(M!=null&&M.replaying)&&!$h.has(fe)){$h.add(fe);const W=Me.position.clone();Me.position.y-=he?.08:1,Me.scale.setScalar(.8),w(360,xe=>{const pe=1-Math.pow(1-xe,3);Me.position.y=W.y-(he?.08:1)*(1-pe),Me.scale.setScalar(.8+.2*pe)})}return Me}if(!(M!=null&&M.replaying)){const fe=new Set((M==null?void 0:M.game.readyPlayers)||Object.keys((M==null?void 0:M.game.selections)||{}));for(const ce of fe)Wt(ce,(Ct=M.game.selections)==null?void 0:Ct[ce],!0);t.dataset.ready=String(fe.size)}Ml={async reveal(fe){t.dataset.reveal="flipping",window.dispatchEvent(new CustomEvent("clubhouse-reveal",{detail:{phase:"flipping"}}));const ce=fe.slice().sort((he,Me)=>he.card-Me.card),Pe=ce.map(he=>Wt(he.playerId,he.card,!0));await Promise.all(Pe.map(he=>w(430,Me=>he.quaternion.copy(he.userData.base).multiply(new $r().setFromAxisAngle(new ue(0,1,0),Math.PI*(1-Me))))));for(const he of ce){if(m)return!0;t.dataset.reveal="moving-"+he.card,window.dispatchEvent(new CustomEvent("clubhouse-reveal",{detail:{phase:"moving",card:he.card,playerId:he.playerId}}));const Me=ot.get(he.playerId);if(he.tookRow){const pe=ve[he.rowIndex];await w(260,be=>pe.forEach(Ie=>{Ie.position.y=.34+be*.4,Ie.scale.setScalar(1-be*.85)})),pe.forEach(be=>be.visible=!1),ve[he.rowIndex]=[]}const I=Me.position.clone(),T=Me.quaternion.clone(),W=new ue(-2.35+ve[he.rowIndex].length*.81,.34,-2.2+he.rowIndex*1.12),xe=new $r().setFromEuler(new qr(-1.35,0,0));await w(620,pe=>{const be=pe*pe*(3-2*pe);Me.position.lerpVectors(I,W,be),Me.position.y+=Math.sin(Math.PI*pe)*.55,Me.quaternion.slerpQuaternions(T,xe,be)}),ve[he.rowIndex].push(Me),await w(100,()=>{})}return t.dataset.reveal="complete",window.dispatchEvent(new CustomEvent("clubhouse-reveal",{detail:{phase:"complete"}})),!0}},o.add(u);const Ft=[...document.querySelectorAll(".hand-card")];Ft.forEach((fe,ce)=>{const Pe=Ft.length===1?0:ce/(Ft.length-1)-.5,he=Ae(fe,0,0,0,-Pe*.4,!0);u.add(he),he.position.set(Pe*1.45,-1.32-Math.abs(Pe)*.15,-5+(fe.classList.contains("selected")?.15:0)),he.rotation.x=0,fe.classList.contains("selected")&&(he.position.y+=.22),he.scale.setScalar(.52)});const en=new vC,Lt=new bt;let cn;t.addEventListener("pointerdown",fe=>{cn={x:fe.clientX,y:fe.clientY}}),t.addEventListener("pointerup",fe=>{if(!cn||Math.hypot(fe.clientX-cn.x,fe.clientY-cn.y)>12)return;const ce=t.getBoundingClientRect();Lt.set((fe.clientX-ce.left)/ce.width*2-1,-(fe.clientY-ce.top)/ce.height*2+1),en.setFromCamera(Lt,u);const Pe=en.intersectObjects(f,!0)[0];if(Pe){let he=Pe.object;for(;he&&!he.userData.control;)he=he.parent;he!=null&&he.userData.control&&!he.userData.control.disabled&&he.userData.control.click()}});const Ot=()=>{const fe=e.getBoundingClientRect();r.setSize(fe.width,fe.height,!1),u.aspect=fe.width/fe.height,u.zoom=.8,u.updateProjectionMatrix(),u.updateMatrixWorld(),t.dataset.handTargets=JSON.stringify(f.map(ce=>{const Pe=ce.getWorldPosition(new ue).project(u);return{x:(Pe.x+1)*fe.width/2,y:(1-Pe.y)*fe.height/2}}))},Zt=new ResizeObserver(Ot);Zt.observe(e),Ot();let an=0;const pn=matchMedia("(prefers-reduced-motion: reduce)").matches;function K(fe){if(!m&&(v=requestAnimationFrame(K),!(fe-an<33))){an=fe;for(let ce=g.length-1;ce>=0;ce--){const Pe=g[ce],he=Math.min(1,(fe-Pe.start)/(pn?Math.min(Pe.duration,80):Pe.duration));Pe.update(he),he===1&&(g.splice(ce,1),Pe.resolve())}pn||h.forEach((ce,Pe)=>ce.rotation.z=Math.sin(fe*8e-4+Pe)*.012),r.render(o,u)}}v=requestAnimationFrame(K),ul=()=>{m=!0,g.splice(0).forEach(fe=>fe.resolve()),cancelAnimationFrame(v),Zt.disconnect(),d.forEach(fe=>fe.dispose()),r.dispose(),r.forceContextLoss(),t.remove(),s.remove(),e.classList.remove("clubhouse-ready")}}const cM="take5-sound-enabled",gI={tap:{src:"assets/audio/click1.wav",volume:.12},select:{src:"assets/audio/click2.wav",volume:.17},card:{src:"assets/audio/click3.wav",volume:.2},deal:{src:"assets/audio/rollover1.wav",volume:.13},row:{src:"assets/audio/click1.wav",volume:.2}};let Ii=localStorage.getItem(cM)!=="false",hn,ri,Wm=!1,hs;const El=new Set,$y=new Map,dM=[523.25,null,659.25,783.99,null,659.25,587.33,null,523.25,null,392,523.25,null,587.33,523.25,null],pm=.42,vI=dM.length*pm;function _I(){if(hn)return hn;const n=window.AudioContext||window.webkitAudioContext;return n?(hn=new n,ri=hn.createGain(),ri.gain.value=0,ri.connect(hn.destination),hn):null}function Xy(n,e,t,r=.22,s="sine"){if(!hn||!ri||!n)return;const o=hn.createOscillator(),u=hn.createGain();o.type=s,o.frequency.setValueAtTime(n,e),u.gain.setValueAtTime(1e-4,e),u.gain.linearRampToValueAtTime(r,e+.035),u.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(u),u.connect(ri),o.start(e),o.stop(e+t+.02)}function $m(){if(!Ii||!Wm||!hn||hn.state!=="running")return;const n=hn.currentTime+.08;dM.forEach((e,t)=>{e&&Xy(e,n+t*pm,.3,.2,"sine")}),[0,4,8,12].forEach((e,t)=>Xy([261.63,196,220,196][t],n+e*pm,.6,.09,"triangle")),hs=setTimeout(()=>{hs=null,$m()},vI*1e3)}function fM(){!Ii||!Wm||!hn||!ri||(ri.gain.cancelScheduledValues(hn.currentTime),ri.gain.setTargetAtTime(.08,hn.currentTime,1.2),hs||$m())}function Xm(){if(!Ii)return;const n=_I();(n==null?void 0:n.state)==="suspended"&&n.resume().catch(()=>{}),fM()}function vs(n){Wm=n,n||(clearTimeout(hs),hs=null),!(!hn||!ri)&&(ri.gain.cancelScheduledValues(hn.currentTime),ri.gain.setTargetAtTime(Ii&&n?.08:0,hn.currentTime,n?1.2:.35),Ii&&n&&$m())}function Fa(n){if(!Ii)return;const e=gI[n];if(!e)return;const t=$y.get(n)||new Audio(e.src);t.preload="auto",$y.set(n,t);const r=t.cloneNode();r.volume=e.volume,El.add(r),r.addEventListener("ended",()=>El.delete(r),{once:!0}),r.play().catch(()=>El.delete(r))}function mm(){return Ii}function hM(){return Ii=!Ii,localStorage.setItem(cM,String(Ii)),Ii?(Xm(),fM()):(El.forEach(n=>{n.pause(),n.currentTime=0}),El.clear(),clearTimeout(hs),hs=null,hn&&ri&&(ri.gain.cancelScheduledValues(hn.currentTime),ri.gain.setTargetAtTime(0,hn.currentTime,.12))),Ii}/*! Capacitor: https://capacitorjs.com/ - MIT License */var go;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(go||(go={}));class qh extends Error{constructor(e,t,r){super(e),this.message=e,this.code=t,this.data=r}}const yI=n=>{var e,t;return n!=null&&n.androidBridge?"android":!((t=(e=n==null?void 0:n.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},SI=n=>{const e=n.CapacitorCustomPlatform||null,t=n.Capacitor||{},r=t.Plugins=t.Plugins||{},s=()=>e!==null?e.name:yI(n),o=()=>s()!=="web",u=m=>{const v=h.get(m);return!!(v!=null&&v.platforms.has(s())||d(m))},d=m=>{var v;return(v=t.PluginHeaders)===null||v===void 0?void 0:v.find(x=>x.name===m)},f=m=>n.console.error(m),h=new Map,g=(m,v={})=>{const x=h.get(m);if(x)return console.warn(`Capacitor plugin "${m}" already registered. Cannot register plugins twice.`),x.proxy;const M=s(),R=d(m);let y;const S=async()=>(!y&&M in v?y=typeof v[M]=="function"?y=await v[M]():y=v[M]:e!==null&&!y&&"web"in v&&(y=typeof v.web=="function"?y=await v.web():y=v.web),y),w=(P,G)=>{var O,B;if(R){const V=R==null?void 0:R.methods.find(q=>G===q.name);if(V)return V.rtype==="promise"?q=>t.nativePromise(m,G.toString(),q):(q,k)=>t.nativeCallback(m,G.toString(),q,k);if(P)return(O=P[G])===null||O===void 0?void 0:O.bind(P)}else{if(P)return(B=P[G])===null||B===void 0?void 0:B.bind(P);throw new qh(`"${m}" plugin is not implemented on ${M}`,go.Unimplemented)}},N=P=>{let G;const O=(...B)=>{const V=S().then(q=>{const k=w(q,P);if(k){const ie=k(...B);return G=ie==null?void 0:ie.remove,ie}else throw new qh(`"${m}.${P}()" is not implemented on ${M}`,go.Unimplemented)});return P==="addListener"&&(V.remove=async()=>G()),V};return O.toString=()=>`${P.toString()}() { [capacitor code] }`,Object.defineProperty(O,"name",{value:P,writable:!1,configurable:!1}),O},L=N("addListener"),U=N("removeListener"),D=(P,G)=>{const O=L({eventName:P},G),B=async()=>{const q=await O;U({eventName:P,callbackId:q},G)},V=new Promise(q=>O.then(()=>q({remove:B})));return V.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await B()},V},b=new Proxy({},{get(P,G){switch(G){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return R?D:L;case"removeListener":return U;default:return N(G)}}});return r[m]=b,h.set(m,{name:m,proxy:b,platforms:new Set([...Object.keys(v),...R?[M]:[]])}),b};return t.convertFileSrc||(t.convertFileSrc=m=>m),t.getPlatform=s,t.handleError=f,t.isNativePlatform=o,t.isPluginAvailable=u,t.registerPlugin=g,t.Exception=qh,t.DEBUG=!!t.DEBUG,t.isLoggingEnabled=!!t.isLoggingEnabled,t},xI=n=>n.Capacitor=SI(n),ed=xI(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),ud=ed.registerPlugin;class qm{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(t);const o=this.windowListeners[e];o&&!o.registered&&this.addWindowListener(o),r&&this.sendRetainedArgumentsForEvent(e);const u=async()=>this.removeListener(e,t);return Promise.resolve({remove:u})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,r){const s=this.listeners[e];if(!s){if(r){let o=this.retainedEventArguments[e];o||(o=[]),o.push(t),this.retainedEventArguments[e]=o}return}s.forEach(o=>o(t))}hasListeners(e){var t;return!!(!((t=this.listeners[e])===null||t===void 0)&&t.length)}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:r=>{this.notifyListeners(t,r)}}}unimplemented(e="not implemented"){return new ed.Exception(e,go.Unimplemented)}unavailable(e="not available"){return new ed.Exception(e,go.Unavailable)}async removeListener(e,t){const r=this.listeners[e];if(!r)return;const s=r.indexOf(t);s!==-1&&this.listeners[e].splice(s,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(r=>{this.notifyListeners(e,r)}))}}const qy=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Yy=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class MI extends qm{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[s,o]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=Yy(s).trim(),o=Yy(o).trim(),t[s]=o}),t}async setCookie(e){try{const t=qy(e.key),r=qy(e.value),s=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",o=(e.path||"/").replace("path=",""),u=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${r||""}${s}; path=${o}; ${u};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}ud("CapacitorCookies",{web:()=>new MI});const EI=async n=>new Promise((e,t)=>{const r=new FileReader;r.onload=()=>{const s=r.result;e(s.indexOf(",")>=0?s.split(",")[1]:s)},r.onerror=s=>t(s),r.readAsDataURL(n)}),bI=(n={})=>{const e=Object.keys(n);return Object.keys(n).map(s=>s.toLocaleLowerCase()).reduce((s,o,u)=>(s[o]=n[e[u]],s),{})},wI=(n,e=!0)=>n?Object.entries(n).reduce((r,s)=>{const[o,u]=s;let d,f;return Array.isArray(u)?(f="",u.forEach(h=>{d=e?encodeURIComponent(h):h,f+=`${o}=${d}&`}),f.slice(0,-1)):(d=e?encodeURIComponent(u):u,f=`${o}=${d}`),`${r}&${f}`},"").substr(1):null,TI=(n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),s=bI(n.headers)["content-type"]||"";if(typeof n.data=="string")t.body=n.data;else if(s.includes("application/x-www-form-urlencoded")){const o=new URLSearchParams;for(const[u,d]of Object.entries(n.data||{}))o.set(u,d);t.body=o.toString()}else if(s.includes("multipart/form-data")||n.data instanceof FormData){const o=new FormData;if(n.data instanceof FormData)n.data.forEach((d,f)=>{o.append(f,d)});else for(const d of Object.keys(n.data))o.append(d,n.data[d]);t.body=o;const u=new Headers(t.headers);u.delete("content-type"),t.headers=u}else(s.includes("application/json")||typeof n.data=="object")&&(t.body=JSON.stringify(n.data));return t};class RI extends qm{async request(e){const t=TI(e,e.webFetchExtra),r=wI(e.params,e.shouldEncodeUrlParams),s=r?`${e.url}?${r}`:e.url,o=await fetch(s,t),u=o.headers.get("content-type")||"";let{responseType:d="text"}=o.ok?e:{};u.includes("application/json")&&(d="json");let f,h;switch(d){case"arraybuffer":case"blob":h=await o.blob(),f=await EI(h);break;case"json":f=await o.json();break;case"document":case"text":default:f=await o.text()}const g={};return o.headers.forEach((m,v)=>{g[v]=m}),{data:f,headers:g,status:o.status,url:o.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}ud("CapacitorHttp",{web:()=>new RI});var Ky;(function(n){n.Dark="DARK",n.Light="LIGHT",n.Default="DEFAULT"})(Ky||(Ky={}));var Zy;(function(n){n.StatusBar="StatusBar",n.NavigationBar="NavigationBar"})(Zy||(Zy={}));class AI extends qm{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}ud("SystemBars",{web:()=>new AI});const Yh=ud("App",{web:()=>iS(()=>import("./web-UcDNgPDN.js"),[]).then(n=>new n.AppWeb)}),pM=ed.isNativePlatform(),CI="https://take-five-friends-game.onrender.com/";pM&&(document.documentElement.classList.add("capacitor-native"),Yh.addListener("backButton",()=>{var r;const n=document.querySelector("#rulesDialog");if(n!=null&&n.open){n.close();return}const e=document.querySelector("#gameMenuPanel");if(e&&!e.classList.contains("is-hidden")){(r=document.querySelector("#gameMenuToggle"))==null||r.dispatchEvent(new CustomEvent("rnpress",{bubbles:!0}));return}const t=document.querySelector("#gameMenuToggle");if(t){t.dispatchEvent(new CustomEvent("rnpress",{bubbles:!0}));return}Yh.exitApp()}),Yh.addListener("appUrlOpen",({url:n})=>{try{const e=new URL(n).searchParams.get("room");/^\d{4}$/.test(e||"")&&window.location.assign(`/?room=${encodeURIComponent(e)}`)}catch{}}));const Ym=[{id:"take-5",name:"Take 5",category:"Card game",status:"available",route:"take-5",description:"A clever card game where every move counts. Avoid the bulls!",featuredDescription:"Think ahead, play your cards, and avoid collecting the bulls!",artwork:"take5"},{id:"phase-10",name:"Phase 10",category:"Card game",status:"available",route:"phase-10",description:"Build sets, make runs, and race through all ten phases.",artwork:"phase10"},{id:"splendor",name:"Splendor",category:"Strategy game",status:"coming-soon",route:null,description:"Collect precious gems, build your empire, and earn prestige.",artwork:"splendor"}],fr=Ym.find(n=>n.status==="available");function mM(n){return`<span class="game-status game-status--${n.status}">${n.status==="available"?"Available now":"Coming soon"}</span>`}function gM(n){return n.artwork==="take5"?'<div class="game-art game-art--take5"><span class="game-art-card game-art-card--one" aria-hidden="true"></span><span class="game-art-card game-art-card--two" aria-hidden="true"></span><span class="game-art-card game-art-card--three" aria-hidden="true"></span><span class="game-art-bull">♞</span></div>':n.artwork==="phase10"?'<div class="game-art game-art--phase10"><span class="phase-orb phase-orb--blue">7</span><span class="phase-orb phase-orb--red">10</span><span class="phase-orb phase-orb--gold">★</span><span class="phase-run">4 · 5 · 6 · 7</span></div>':'<div class="game-art game-art--splendor"><span class="gem gem--emerald"></span><span class="gem gem--ruby"></span><span class="gem gem--sapphire"></span><span class="splendor-crown">♛</span></div>'}function PI(n){const e=n.status==="available";return`<article class="game-card game-card--${n.id}" data-game-id="${n.id}" ${e?`data-game-tile="play" role="button" tabindex="0" aria-label="Play ${n.name}"`:""}>
    ${gM(n)}
    <div class="game-card-copy">
      <div class="game-card-meta"><span>${n.category}</span>${mM(n)}</div>
      <h3>${n.name}</h3>
      <p>${n.description}</p>
      <button class="game-card-action" data-game-action="${e?"play":"soon"}" data-game-id="${n.id}" ${e?"":'aria-disabled="true"'}>${e?"Play now":"Coming soon"} <span>→</span></button>
    </div>
  </article>`}function jy(){return Ym.map(PI).join("")}const LI=["blue","green","red","yellow"],gm=["2 sets of 3","1 set of 3 + 1 run of 4","1 set of 4 + 1 run of 4","1 run of 7","1 run of 8","1 run of 9","2 sets of 4","7 cards of one color","1 set of 5 + 1 set of 2","1 set of 5 + 1 set of 3"],II=["🧑🏻","🦊","🐻","🐸"];let DI=0;const Kh=(n,e=null)=>({id:`phase-card-${DI++}`,value:n,color:e}),Da=n=>n.value==="wild",er=n=>n.value==="skip";function NI(){const n=[];for(let e=0;e<2;e++)LI.forEach(t=>{for(let r=1;r<=12;r++)n.push(Kh(r,t))});for(let e=0;e<8;e++)n.push(Kh("wild"));for(let e=0;e<4;e++)n.push(Kh("skip"));return OI(n)}function OI(n){const e=n.slice();for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e}function UI(n){return Da(n)?25:er(n)?15:n.value>=10?10:5}function Km(n){return n.filter(e=>!Da(e)&&!er(e))}function Zm(n,e){return n.length===e&&!n.some(er)}function hr(n,e){const t=Km(n).map(r=>r.value);return Zm(n,e)&&t.length>0&&t.every(r=>r===t[0])}function cl(n,e){const t=Km(n).map(o=>o.value);if(!Zm(n,e)||t.length===0||new Set(t).size!==t.length)return!1;const r=Math.min(...t),s=Math.max(...t);return s-r<e&&Math.max(1,s-e+1)<=Math.min(r,13-e)}function FI(n,e){const t=Km(n).map(r=>r.color);return Zm(n,e)&&t.length>0&&t.every(r=>r===t[0])}function vM(n,e,t=0,r=[],s=[]){if(r.length===e)return s.push(r),s;for(let o=t;o<=n.length-(e-r.length);o++)vM(n,e,o+1,r.concat(o),s);return s}function to(n,e,t,r,s){return n.length!==e+r?!1:vM(n,e).some(o=>{const u=o.map(f=>n[f]),d=n.filter((f,h)=>!o.includes(h));return t(u,e)&&s(d,r)})}function _M(n,e){switch(n){case 1:return to(e,3,hr,3,hr);case 2:return to(e,3,hr,4,cl);case 3:return to(e,4,hr,4,cl);case 4:return cl(e,7);case 5:return cl(e,8);case 6:return cl(e,9);case 7:return to(e,4,hr,4,hr);case 8:return FI(e,7);case 9:return to(e,5,hr,2,hr);case 10:return to(e,5,hr,3,hr);default:return!1}}function yM(n,e){const t=NI(),r=[{id:"phase-you",name:n||"You",avatar:e,phase:1,score:0,hand:[],laid:!1,phaseCards:[]},{id:"phase-milo",name:"Milo",avatar:"🦊",phase:1,score:0,hand:[],laid:!1,phaseCards:[]},{id:"phase-nora",name:"Nora",avatar:"🐻",phase:1,score:0,hand:[],laid:!1,phaseCards:[]},{id:"phase-pip",name:"Pip",avatar:"🐸",phase:1,score:0,hand:[],laid:!1,phaseCards:[]}];return r.forEach(s=>{s.hand=t.splice(0,10)}),{players:r,drawPile:t,discardPile:[t.pop()],current:0,turn:"draw",selected:[],message:"Draw a card to begin.",round:1,finished:!1,skipped:null}}const _i=document.querySelector("#app"),td=document.querySelector("#rulesDialog"),Jy=new URLSearchParams(location.search),jm="take5-host-save",ps="take5-guest-session",E={screen:"home",mode:"online",tab:"rooms",name:localStorage.getItem("take5-name")||"",peer:null,host:!1,connection:null,connections:new Map,clientId:null,roomId:"",players:[],game:null,selected:null,busy:!1,toastTimer:null,botCount:3,roundFlashTimer:null,submittedTurn:!1,animating:!1,replay:null,replayKey:null,revealOrigins:{},stageSeen:new Set,stageTurnKey:null,countdownTimer:null,countdownInterval:null,reconnectTimer:null,peerReconnectTimer:null,disconnectAdvanceTimer:null,resumeToken:null,recoveringGuest:!1,reactionCooldowns:new Map,screenTransition:!1,phase10:null,phase10Avatar:"🧑🏻"};document.addEventListener("pointerdown",Xm,{passive:!0});document.addEventListener("keydown",Xm);function SM(){var n;if(E.peer){if(E.peer.disconnected)try{E.peer.reconnect()}catch{dd(E.peer)}if(!E.host&&E.roomId){const e=E.peer;(n=E.connection)!=null&&n.open?E.connection.send({type:"sync"}):(E.connection=null,clearTimeout(E.reconnectTimer),fd(E.roomId,e))}}}window.addEventListener("online",SM);document.addEventListener("visibilitychange",()=>{document.hidden||SM()});document.querySelector("#homeLink").addEventListener("click",n=>{n.preventDefault(),Ua()});_x(td);Kt(".dialog-close",()=>td.close());var nS;if(Jy.get("room")){const n=Jy.get("room");E.tab="rooms",E.roomPrefill=/^\d{4}$/.test(n)?n:((nS=n.match(/^take5-(\d{4})$/))==null?void 0:nS[1])||""}const Zh=cd(jm),Vr=cd(ps),jh=E.roomPrefill||(Vr==null?void 0:Vr.roomId)||"",kI=!!Vr&&(!E.roomPrefill||Vr.roomId===E.roomPrefill);Zh&&(E.roomPrefill===Zh.roomId||!E.roomPrefill&&!kI)?(Ua(),iD(Zh)):(Ua(),jh&&(Vr==null?void 0:Vr.roomId)===jh&&(E.resumeToken=Vr.token,E.recoveringGuest=!0,sg(jh)));function cd(n){try{return JSON.parse(localStorage.getItem(n)||"null")}catch{return null}}function Vt(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function tr(n,e,{nativeControls:t=!0}={}){const r=E.screenTransition&&!matchMedia("(prefers-reduced-motion: reduce)").matches;if(YR(n),n.innerHTML=e,requestAnimationFrame(mI),t)try{_x(n)}catch(s){console.error("Could not mount React Native Web controls.",s)}r&&(n.animate([{opacity:0,transform:"translateY(10px) scale(.992)"},{opacity:1,transform:"translateY(0) scale(1)"}],{duration:300,easing:"cubic-bezier(.2,.78,.25,1)"}),E.screenTransition=!1)}function Kt(n,e){(typeof n=="string"?document.querySelectorAll(n):[n]).forEach(r=>{if(!r)return;const s=o=>{Fa("tap"),e(o,r)};r.addEventListener("rnpress",s),r.addEventListener("click",o=>{r.closest(".rn-control-root")||s(o)})})}function BI(){const n=mm();return`<button class="icon-button sound-toggle" id="soundToggle" aria-label="${n?"Mute sound":"Enable sound"}" aria-pressed="${n}" title="${n?"Mute sound":"Enable sound"}"><span class="sound-toggle-glyph" aria-hidden="true">♪</span><span class="sound-toggle-state" aria-hidden="true">${n?"":"×"}</span></button>`}function zI(){Kt("#soundToggle",()=>{hM(),jr()})}function ni(n){return n===55?7:n%11===0?5:n%10===0?3:n%5===0?2:1}function HI(n){return{1:"one-bull",2:"two-bulls",3:"three-bulls",5:"five-bulls",7:"seven-bulls"}[ni(n)]}function Mr(){return'<span class="bull-icon" aria-hidden="true"><img class="bull-icon-art" src="assets/bullhead.svg" alt="" draggable="false"></span>'}function Qy(n){return`<span class="bull-marks" aria-label="${ni(n)} bullheads">${Array.from({length:ni(n)},()=>'<i class="bull-head" aria-hidden="true"></i>').join("")}</span>`}function ro(n,e=""){const t=HI(n),r=Vt(n),s=String(n).length;return`<span class="card-face ${e} tone-${t} value-${s}-digits" aria-hidden="true"><img class="card-art" src="assets/cards/card-${t}.png" alt="" draggable="false"><span class="card-corner top-left">${r}</span><span class="card-corner top-right">${r}</span>${Qy(n)}<span class="card-value-outline">${r}</span><span class="card-value">${r}</span><span class="card-bottom-meta"><span class="card-corner bottom-left">${r}</span>${Qy(n)}<span class="card-corner bottom-right">${r}</span></span></span>`}function xM(n,e){return n.human?["🧑🏻","👩🏽","🧔🏼","👩🏻","🧑🏾","👩🏼","🧑🏽","👨🏾","👩🏻","🧑🏼"][e%10]:["🦊","🐻","🐸","🐼","🐯","🐵","🐰","🦝","🦁"][Math.max(0,e-1)%9]}function GI(){return Array.from({length:104},(n,e)=>e+1).sort(()=>Math.random()-.5)}function jr(){var h,g;const n=document.querySelector("#homeLink"),e=document.querySelector("#headerRoster"),t=document.querySelector("#topbarRight"),r=E.screen==="home",s=["lobby","game","result"].includes(E.screen);if(n&&(n.innerHTML='<span class="brand-mark">CG</span><span>Card <span class="brand-dot">Games</span></span>'),r){e.innerHTML="",tr(t,`<div class="platform-profile" aria-label="Player profile"><span class="platform-avatar">${Vt((E.name||"P").slice(0,1).toUpperCase())}</span><span class="platform-profile-copy"><b>${Vt(E.name||"Player")}</b><small>Ready to play</small></span></div>`,{nativeControls:!1}),Kt("[data-platform-nav]",(m,v)=>{var M;const x=v.dataset.platformNav;x==="take5"?Qm():x==="games"?(M=document.querySelector("#games"))==null||M.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"smooth"})});return}const o=E.screen==="lobby"?E.players:((h=E.game)==null?void 0:h.players)||E.players,u=!!E.game&&["game","result"].includes(E.screen);if(e&&(e.innerHTML=s?o.map((m,v)=>{var y;const x=m.id===E.clientId,M=((y=m.hand)==null?void 0:y.length)||0,R=u?`${M} cards`:m.human?m.ready?"READY":"ONLINE":"BOT";return`<div class="header-player ${x?"is-you":""} ${m.ready?"is-ready":""}" data-player-id="${Vt(m.id)}"><span class="header-avatar">${xM(m,v)}</span><span class="header-player-copy"><b>${Vt(m.name)}${x?" · you":""}</b><small>${R}</small></span>${u?`<span class="header-player-score bull-counter-badge" aria-label="${m.total||0} bullheads"><strong>${m.total||0}</strong>${Mr()}</span><span class="opponent-cards" aria-label="${M} cards in hand">${Array.from({length:Math.min(4,M)},(S,w)=>`<i style="--i:${w}"></i>`).join("")}</span>`:`<i class="header-player-status ${m.online===!1?"is-offline":""}"></i>`}</div>`}).join(""):""),!t)return;if(!s){tr(t,`<span class="top-note"><span class="online-dot"></span> the table is open</span>${BI()}<button class="icon-button" id="rulesButton" aria-label="How to play" title="How to play">?</button>`),zI(),Kt("#rulesButton",()=>td.showModal());return}const d=((g=E.mode)==null?void 0:g.startsWith("online"))||E.screen==="lobby",f=[];f.push(`<button class="menu-action" data-menu-action="toggle-sound"><span class="menu-action-icon">${mm()?"♫":"♪"}</span><span>${mm()?"Sound on":"Sound off"}</span></button>`),E.screen==="game"&&d&&f.push(`<div class="menu-reaction-section"><button class="menu-action menu-reaction-toggle" data-menu-action="toggle-reactions" aria-expanded="false"><span class="menu-action-icon">☺</span><span>Send a reaction</span><span class="menu-action-chevron" aria-hidden="true">⌄</span></button><div class="menu-reaction-picker" role="group" aria-label="Choose a reaction" hidden>${zl.map(m=>`<button class="menu-reaction-option" type="button" role="menuitem" data-reaction="${m}" aria-label="Send ${m} reaction">${m}</button>`).join("")}</div></div>`),d&&E.roomId&&(f.push('<button class="menu-action" data-menu-action="sync-room"><span class="menu-action-icon">⟳</span><span>Refresh room sync</span></button>'),f.push('<button class="menu-action" data-menu-action="copy-invite"><span class="menu-action-icon">↗</span><span>Copy invite link</span></button>'),f.push('<button class="menu-action" data-menu-action="copy-code"><span class="menu-action-icon">#</span><span>Copy room code</span></button>')),E.screen==="lobby"&&E.host&&f.push('<button class="menu-action" data-menu-action="start-game"><span class="menu-action-icon">▶</span><span>Start game</span></button>'),E.screen==="game"&&(!d||E.host)&&f.push('<button class="menu-action" data-menu-action="new-game"><span class="menu-action-icon">⟳</span><span>Start new game</span></button>'),E.screen==="result"&&f.push('<button class="menu-action" data-menu-action="new-game"><span class="menu-action-icon">⟳</span><span>Play again</span></button>'),f.push('<button class="menu-action" data-menu-action="rules"><span class="menu-action-icon">?</span><span>How to play</span></button>'),(d||E.screen==="game"||E.screen==="result")&&f.push('<button class="menu-action is-danger" data-menu-action="leave"><span class="menu-action-icon">↩</span><span>Leave game</span></button>'),tr(t,`<div class="menu-shell"><button class="menu-trigger" id="gameMenuToggle" aria-label="Game menu" aria-haspopup="menu" aria-expanded="false" title="Game menu"><span class="menu-icon" aria-hidden="true"></span></button><div class="game-menu-panel is-hidden" id="gameMenuPanel" role="menu">${f.join("")}</div></div>`),Kt("#gameMenuToggle",(m,v)=>{var R;const x=document.querySelector("#gameMenuPanel"),M=v.getAttribute("aria-expanded")!=="true";v.setAttribute("aria-expanded",String(M)),x.classList.toggle("is-hidden",!M),(R=v.closest(".menu-shell"))==null||R.classList.toggle("is-open",M)}),Kt(".menu-action",(m,v)=>{var R,y,S;const x=v.dataset.menuAction,M=document.querySelector("#gameMenuPanel");if(x==="toggle-reactions"){const w=v.nextElementSibling,N=v.getAttribute("aria-expanded")!=="true";v.setAttribute("aria-expanded",String(N)),w.hidden=!N,(R=v.closest(".menu-reaction-section"))==null||R.classList.toggle("is-expanded",N);return}if(M&&M.classList.add("is-hidden"),(y=document.querySelector("#gameMenuToggle"))==null||y.setAttribute("aria-expanded","false"),(S=document.querySelector(".menu-shell"))==null||S.classList.remove("is-open"),x==="copy-invite")uD();else if(x==="copy-code")CM(E.roomId,"Room code copied");else if(x==="sync-room")aD();else if(x==="toggle-sound")hM(),jr();else if(x==="rules")td.showModal();else if(x==="leave")PM();else if(x==="start-game")nd();else if(x==="new-game"){if(d&&E.host&&E.players.forEach(w=>{w.score=0,w.total=0}),d&&!E.host)return vi("Ask the host to start another game.");d?nd():ng()}}),Kt(".menu-reaction-option",(m,v)=>wM(v.dataset.reaction))}function Ua(){hd(),document.body.classList.remove("match-mode","lobby-mode","take5-entry-mode"),document.body.classList.add("home-mode","platform-home"),E.screen="home",E.game=null,E.selected=null,vs(!0);try{if(!fr||typeof jy!="function")throw new Error("The game registry is unavailable.");jr(),tr(_i,`<section class="platform-homepage">
      <section class="platform-welcome" aria-labelledby="platformWelcomeTitle"><div><h1 id="platformWelcomeTitle">Ready to play?</h1><p>Pick your game. Bring your friends. Let the fun begin.</p></div><span class="platform-online"><i></i> Games ready</span></section>
      <section class="platform-featured" data-game-tile="play" data-game-id="${fr.id}" role="button" tabindex="0" aria-label="Play ${Vt(fr.name)}" aria-labelledby="featuredTitle"><div class="featured-art">${gM(fr)}</div><div class="featured-copy"><div class="featured-meta"><span>Featured game</span>${mM(fr)}</div><h2 id="featuredTitle">${Vt(fr.name)}</h2><p>${fr.featuredDescription}</p><button class="platform-primary" data-game-action="play" data-game-id="${fr.id}">Play now <span>→</span></button></div><div class="featured-detail"><span>2–10 players</span><span>10 cards each</span><span>15 min</span></div></section>
      <section class="platform-library" id="games" aria-labelledby="gamesTitle"><div class="section-heading"><div><span>Game library</span><h2 id="gamesTitle">Your Game Collection</h2><p>Choose a game and start playing.</p></div></div><div class="game-library-grid">${jy()}</div></section>
    </section>`,{nativeControls:!1}),Kt("[data-game-action]",(n,e)=>{e.dataset.gameAction==="play"?Jh(e.dataset.gameId):vi(`${e.dataset.gameId==="phase-10"?"Phase 10":"Splendor"} is coming soon.`)}),document.querySelectorAll('[data-game-tile="play"]').forEach(n=>{n.addEventListener("click",e=>{e.target.closest("[data-game-action]")||Jh(n.dataset.gameId||fr.id)}),n.addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),Jh(n.dataset.gameId||fr.id))})})}catch(n){console.error("Could not render the Card Games lobby.",n),tr(_i,`<section class="platform-fallback" role="alert"><span>Card Games</span><h1>We couldn’t load the game lobby.</h1><p>${Vt(n.message||"Please try again.")}</p><button class="platform-primary" id="retryLobby">Try again <span>↻</span></button></section>`,{nativeControls:!1}),Kt("#retryLobby",Ua)}}function Jh(n){const e=Ym.find(t=>t.id===n);if(!e||e.status!=="available")return vi("This game is coming soon.");e.route==="phase-10"?Jm():Qm()}function Jm(){hd(),E.phase10=null,E.screen="phase10-setup",document.body.classList.remove("match-mode","platform-home","lobby-mode"),document.body.classList.add("home-mode","phase10-mode"),vs(!1),jr(),tr(_i,`<section class="phase10-setup"><div class="phase10-setup-art"><div class="p10-floating-card p10-card-blue">7</div><div class="p10-floating-card p10-card-green">8</div><div class="p10-floating-card p10-card-red">10</div></div><div class="phase10-setup-copy"><span class="phase10-kicker">Phase 10 · local table</span><h1>Choose your player</h1><p>Choose your character, build your phase, and be first through all ten challenges.</p><div class="memoji-grid" role="group" aria-label="Choose your player">${II.map(n=>`<button class="memoji-choice ${n===E.phase10Avatar?"is-selected":""}" data-phase-avatar="${n}" aria-pressed="${n===E.phase10Avatar}" aria-label="Choose ${VI(n)}">${vm(n)}</button>`).join("")}</div><button class="phase10-play" id="startPhase10">Start game <span>→</span></button><button class="phase10-back" id="backToLobby">Back to games</button></div></section>`,{nativeControls:!1}),Kt("[data-phase-avatar]",(n,e)=>{E.phase10Avatar=e.dataset.phaseAvatar,Jm()}),Kt("#startPhase10",()=>{E.phase10=yM(E.name,E.phase10Avatar),E.screen="phase10",Yr()}),Kt("#backToLobby",Ua)}function VI(n){return{"🧑🏻":"Player","🦊":"Milo","🐻":"Nora","🐸":"Pip"}[n]||"Player"}function vm(n,e=""){return`<span class="avatar-3d avatar-3d--${{"🧑🏻":"player","🦊":"fox","🐻":"bear","🐸":"frog"}[n]||"player"} ${e}" aria-hidden="true"></span>`}function no(n,e){(typeof n=="string"?document.querySelectorAll(n):[n]).forEach(r=>{if(!r)return;let s=!1;const o=u=>{s||r.getAttribute("aria-disabled")==="true"||(s=!0,u.preventDefault(),Fa("tap"),e(u,r))};r.addEventListener("pointerup",o),r.addEventListener("click",o)})}function WI(n,e=!1){var o;const t=Da(n)?"wild":er(n)?"skip":"",r=Da(n)?"★":er(n)?"⊘":n.value,s=t==="wild"?"★":t==="skip"?"⊘":n.value;return`<button class="phase10-card ${t} ${n.color||""} ${e?"is-selected":""}" data-phase-card="${n.id}" aria-label="${Da(n)?"Wild card":er(n)?"Skip card":`${n.color} ${n.value}`}" ${((o=E.phase10)==null?void 0:o.turn)!=="play"?'aria-disabled="true"':""}><div class="phase10-card-band phase10-card-band-top"><b>${s}</b><b>${s}</b></div><b class="phase10-card-value">${r}</b><div class="phase10-card-band phase10-card-band-bottom"><b>${s}</b><b>${s}</b></div><i>${t==="wild"?"WILD":t==="skip"?"SKIP":n.color}</i></button>`}function $I(n){return[6,7,8,7,8,9,8,7,7,8][n-1]||6}function MM(n,e,t=0,r=[],s=[]){if(r.length===e)return s.push(r),s;for(let o=t;o<=n.length-(e-r.length);o++)MM(n,e,o+1,r.concat(n[o]),s);return s}function XI(n){const e=$I(n.phase),t=MM(n.hand,e).find(s=>_M(n.phase,s));if(!t)return!1;const r=new Set(t.map(s=>s.id));return n.phaseCards=t,n.hand=n.hand.filter(s=>!r.has(s.id)),n.laid=!0,!0}function Yr(){const n=E.phase10;if(!n)return Jm();document.body.classList.remove("home-mode","platform-home","match-mode"),document.body.classList.add("phase10-mode"),E.screen="phase10",jr();const e=n.players[0];n.players[n.current];const t=n.discardPile.at(-1),r=new Set(n.selected),s=n.current===0;tr(_i,`<section class="phase10-board"><header class="phase10-board-head"><div><span class="phase10-kicker">Round ${n.round}</span><h1>Phase ${e.phase}<small>${gm[e.phase-1]}</small></h1></div><div class="phase10-message ${s?"is-your-turn":""}">${Vt(n.message)}</div><button class="phase10-exit" id="exitPhase10">Exit game</button></header><section class="phase10-opponents">${n.players.slice(1).map((o,u)=>`<article class="phase10-player ${n.current===u+1?"is-active":""}"><span class="phase10-avatar">${vm(o.avatar)}</span><div><b>${o.name}</b><small>Phase ${o.phase} · ${o.hand.length} cards</small></div><strong>${o.score}</strong>${o.laid?'<i class="phase10-done">✓</i>':""}</article>`).join("")}</section><main class="phase10-table"><div class="phase10-goal"><span>Your goal</span><strong>Phase ${e.phase}</strong><p>${gm[e.phase-1]}</p>${e.laid?"<b>Phase complete ✓</b>":""}</div><div class="phase10-decks"><button class="phase10-deck draw" id="phaseDraw" ${!s||n.turn!=="draw"?'aria-disabled="true"':""}><span>✦</span><small>Draw</small><i>${n.drawPile.length}</i></button><button class="phase10-deck discard ${(t==null?void 0:t.color)||""} ${Da(t)?"wild":""} ${er(t)?"skip":""}" id="phaseDiscardDraw" ${!s||n.turn!=="draw"?'aria-disabled="true"':""}><span>${Da(t)?"★":er(t)?"⊘":t==null?void 0:t.value}</span><small>Discard</small></button></div><div class="phase10-actions"><button id="phaseLay" ${!s||n.turn!=="play"||e.laid?'aria-disabled="true"':""}>Lay phase</button><button id="phaseDiscard" ${!s||n.turn!=="play"||n.selected.length!==1?'aria-disabled="true"':""}>Discard selected</button></div></main><section class="phase10-hand-wrap"><div class="phase10-hand-heading"><span>${vm(e.avatar)}</span><div><b>Your hand</b><small>${e.hand.length} cards · select cards to lay or discard</small></div></div><div class="phase10-hand">${e.hand.map(o=>WI(o,r.has(o.id))).join("")}</div></section></section>`,{nativeControls:!1}),no("[data-phase-card]",(o,u)=>{if(n.current!==0||n.turn!=="play")return;const d=u.dataset.phaseCard;n.selected=n.selected.includes(d)?n.selected.filter(f=>f!==d):n.selected.concat(d),Yr()}),no("#phaseDraw",()=>eS(!1)),no("#phaseDiscardDraw",()=>eS(!0)),no("#phaseLay",qI),no("#phaseDiscard",YI),no("#exitPhase10",Ua)}function eS(n){const e=E.phase10,t=e==null?void 0:e.players[0];if(!e||e.current!==0||e.turn!=="draw")return;const r=n?e.discardPile.pop():e.drawPile.pop();r&&(t.hand.push(r),e.turn="play",e.message="Lay your phase or discard one card.",Yr())}function qI(){const n=E.phase10,e=n==null?void 0:n.players[0];if(!n||n.current!==0||n.turn!=="play"||e.laid)return;const t=e.hand.filter(s=>n.selected.includes(s.id));if(!_M(e.phase,t)){n.message=`Those cards do not complete Phase ${e.phase}: ${gm[e.phase-1]}.`,Yr();return}const r=new Set(t.map(s=>s.id));e.phaseCards=t,e.hand=e.hand.filter(s=>!r.has(s.id)),e.laid=!0,n.selected=[],n.message="Phase complete! Discard one card to end your turn.",Yr()}function YI(){const n=E.phase10,e=n==null?void 0:n.players[0];if(!n||n.current!==0||n.turn!=="play"||n.selected.length!==1)return;const t=n.selected[0],r=e.hand.findIndex(o=>o.id===t);if(r<0)return;const[s]=e.hand.splice(r,1);n.discardPile.push(s),n.selected=[],er(s)&&(n.skipped=1),EM()}function EM(){const n=E.phase10,e=n.players[n.current];if(e.hand.length===0)return ZI(e);n.current=(n.current+1)%n.players.length,n.skipped===n.current&&(n.message=`${n.players[n.current].name} was skipped!`,n.skipped=null,n.current=(n.current+1)%n.players.length),n.turn="draw",n.current===0?(n.message="Your turn: draw a card.",Yr()):(n.message=`${n.players[n.current].name} is thinking…`,Yr(),window.setTimeout(KI,650))}function KI(){const n=E.phase10;if(!n||n.current===0||n.finished)return;const e=n.players[n.current],t=n.drawPile.pop();t&&e.hand.push(t),XI(e);const r=e.hand.filter(o=>!Da(o)&&!er(o)),s=(r.length?r:e.hand)[Math.floor(Math.random()*(r.length?r.length:e.hand.length))];s&&(e.hand.splice(e.hand.indexOf(s),1),n.discardPile.push(s),er(s)&&(n.skipped=(n.current+1)%n.players.length)),EM()}function ZI(n){const e=E.phase10;if(e.players.forEach(r=>{r!==n&&(r.score+=r.hand.reduce((s,o)=>s+UI(o),0))}),n.phase+=1,n.phase>10){e.finished=!0,e.message=`${n.name} completed all ten phases!`,Yr();return}const t=yM(E.name,E.phase10Avatar);t.players.forEach((r,s)=>{r.phase=e.players[s].phase,r.score=e.players[s].score}),t.round=e.round+1,t.message=`${n.name} went out. New round!`,E.phase10=t,Yr()}function Qm(){var e,t,r;hd(),document.body.classList.remove("match-mode","lobby-mode","platform-home"),document.body.classList.add("home-mode","take5-entry-mode"),E.screen="take5-home",E.game=null,E.selected=null,vs(!0),jr();const n=Vt(E.name);tr(_i,`<section class="landing">
    <div class="hero-copy"><div class="eyebrow">TAKE 5 · QUICK TABLE</div><h1>Play a clever<br /><em>card game.</em></h1><p>Choose a card. Avoid the bulls. Bring friends.</p>
      <div class="hero-points"><span><i class="tiny-star">✳</i> 2–10 players</span><span><i class="tiny-star">✳</i> 10 cards each</span><span><i class="tiny-star">✳</i> maximum mischief</span></div>
    <div class="table-scene" aria-hidden="true"><div class="scene-felt"></div><div class="scene-card c1"><strong>12</strong>${Mr()}</div><div class="scene-card c2"><strong>38</strong>${Mr()}</div><div class="scene-card c3"><strong>64</strong>${Mr()}</div><div class="scene-card c4"><strong>91</strong>${Mr()}</div><div class="decor-cow">🐮</div><div class="scene-caption">a very serious card table</div></div>
    </div>
    <section class="setup-card" aria-label="Start a game">
      <div class="setup-tabs" role="tablist" aria-label="Game type">
        <button class="setup-tab ${E.tab==="rooms"?"active":""}" id="roomsTab" data-tab="rooms" role="tab" aria-controls="roomsPanel" aria-selected="${E.tab==="rooms"}">Create / join room</button>
        <button class="setup-tab ${E.tab==="bots"?"active":""}" id="botsTab" data-tab="bots" role="tab" aria-controls="botsPanel" aria-selected="${E.tab==="bots"}">Play with bots</button>
      </div>
      <div class="mode-content mode-panel ${E.tab==="rooms"?"active":""}" id="roomsPanel" data-panel="rooms" role="tabpanel" aria-labelledby="roomsTab">
        <div class="room-panel-intro"><span class="panel-kicker">ONLINE TABLE</span><h2>Play with friends</h2><p>Join a room with a code, or create a table and invite your friends.</p></div>
        <label class="field-label" for="roomPlayerName">Your name</label>
        <input class="text-field" id="roomPlayerName" maxlength="18" placeholder="e.g. Alex" autocomplete="name" value="${n}" />
        <section class="room-path join-path" aria-labelledby="joinRoomHeading">
          <div class="room-path-heading"><span class="room-path-step">01</span><div><h3 id="joinRoomHeading">Join a room</h3><p>Enter the four-digit code from your friend.</p></div></div>
          <label class="field-label" for="roomCode">Room code</label>
          <div class="join-room-controls"><input class="text-field room-code-input" id="roomCode" type="text" inputmode="numeric" pattern="[0-9]{4}" maxlength="4" placeholder="1234" aria-describedby="roomCodeHint" value="${Vt(E.roomPrefill||"")}" autocomplete="one-time-code" /><button class="primary-button action-button join-room-button" id="joinRoom">Join room</button></div>
          <span class="field-hint" id="roomCodeHint">Use the code shared by the host.</span>
        </section>
        <div class="room-divider"><span>OR CREATE YOUR OWN</span></div>
        <section class="room-path create-path" aria-labelledby="createRoomHeading">
          <div class="room-path-heading"><span class="room-path-step">02</span><div><h3 id="createRoomHeading">Create a room</h3><p>Open a table, then invite friends or add bots.</p></div></div>
          <button class="primary-button action-button" id="hostRoom">Create room</button>
        </section>
        <div class="inline-error" role="status" aria-live="polite"></div>
      </div>
      <div class="mode-content mode-panel ${E.tab==="bots"?"active":""}" id="botsPanel" data-panel="bots" role="tabpanel" aria-labelledby="botsTab">
        <div class="room-panel-intro"><span class="panel-kicker">SOLO TABLE</span><h2>A table of your own</h2><p>Practice your poker face. The bots are suspiciously confident.</p></div>
        <label class="field-label" for="playerName">Your name</label>
        <input class="text-field" id="playerName" maxlength="18" placeholder="e.g. Alex" autocomplete="name" value="${n}" />
        <div class="row-fields"><div><label class="field-label" for="botCount">Opponents</label><select class="select-field" id="botCount">${[1,2,3,4,5,6,7,8,9].map(s=>`<option value="${s}" ${E.botCount===s?"selected":""}>${s} ${s===1?"bot":"bots"}</option>`).join("")}</select></div><div><label class="field-label" for="botStyle">Bot style</label><select class="select-field" id="botStyle"><option value="clever">Clever</option><option value="chaotic">Chaotic</option></select></div></div>
        <button class="primary-button action-button" id="startBots">Shuffle up</button>
      </div>
    </section>
  </section>`),Kt(".setup-tab",(s,o)=>{E.tab=o.dataset.tab,Qm()}),(e=document.querySelector("#botCount"))==null||e.addEventListener("change",s=>E.botCount=+s.target.value),Kt("#startBots",()=>{Qh("#playerName"),ng()}),Kt("#hostRoom",()=>{Qh("#roomPlayerName"),nD()}),Kt("#joinRoom",()=>{Qh("#roomPlayerName"),sg(document.querySelector("#roomCode").value.trim())}),(t=document.querySelector("#roomCode"))==null||t.addEventListener("input",s=>{s.target.value=s.target.value.replace(/\D/g,"").slice(0,4)}),(r=document.querySelector("#roomCode"))==null||r.addEventListener("keydown",s=>{var o;s.key==="Enter"&&((o=document.querySelector("#joinRoom"))==null||o.dispatchEvent(new CustomEvent("rnpress",{bubbles:!0})))})}function Qh(n){var e;E.name=((e=document.querySelector(n))==null?void 0:e.value.trim())||"Player",localStorage.setItem("take5-name",E.name)}function Ni(n){const e=document.querySelector(`[data-panel="${E.tab}"] .inline-error`);e&&(e.textContent=n)}function vi(n){var t;clearTimeout(E.toastTimer),(t=document.querySelector(".toast"))==null||t.remove();const e=document.createElement("div");e.className="toast",e.textContent=n,document.body.append(e),E.toastTimer=setTimeout(()=>e.remove(),2600)}const zl=["😂","😮","😭","👏","❤️","🐂"];function eg(n){if(E.screen!=="game"||!zl.includes(n.emoji))return;const e=Array.from(document.querySelectorAll(".header-player[data-player-id]")).find(s=>s.dataset.playerId===n.playerId),t=e==null?void 0:e.getBoundingClientRect(),r=document.createElement("div");r.className="room-reaction-float",r.style.left=`${t?t.left+t.width/2:innerWidth/2}px`,r.style.top=`${t?t.bottom-4:innerHeight*.45}px`,r.innerHTML=`<span>${n.emoji}</span><small>${Vt(n.name||"Player")}</small>`,document.body.append(r),setTimeout(()=>r.remove(),1700)}function bM(n,e=null){E.connections.forEach((t,r)=>{if(r!==e&&t.open)try{t.send(n)}catch{}})}function wM(n){var r,s,o,u,d;if(!((r=E.mode)!=null&&r.startsWith("online"))||E.screen!=="game"||!zl.includes(n))return;const e=Date.now();if(e-(E.reactionCooldowns.get(E.clientId)||0)<650)return;E.reactionCooldowns.set(E.clientId,e);const t={type:"reaction",playerId:E.clientId,name:E.name||"Player",emoji:n};eg(t),(s=document.querySelector("#gameMenuPanel"))==null||s.classList.add("is-hidden"),(o=document.querySelector("#gameMenuToggle"))==null||o.setAttribute("aria-expanded","false"),(u=document.querySelector(".menu-shell"))==null||u.classList.remove("is-open"),document.querySelectorAll(".hand-reaction-picker").forEach(f=>{f.hidden=!0}),document.querySelectorAll(".hand-reaction-trigger").forEach(f=>f.setAttribute("aria-expanded","false")),document.querySelectorAll(".hand-reaction-control").forEach(f=>f.classList.remove("is-expanded")),E.host?bM(t):(d=E.connection)!=null&&d.open&&E.connection.send({type:"reaction",emoji:n})}function jI(n,e=!1){const t=[{id:"self",name:E.name||"You",human:!0,online:!0,score:0,total:0,hand:[]}];for(let r=0;r<n;r++)t.push({id:`bot${r+1}`,name:["Milo","Nora","Pip","June","Otto","Bea","Finn","Kit","Lou"][r],human:!1,online:!0,score:0,total:0,hand:[]});return t}function tg(n){const e=GI();return n.forEach(t=>t.hand=e.splice(0,10).sort((r,s)=>r-s)),e.splice(0,4).map(t=>[t])}function ng(){var t,r;Fa("deal"),vs(!1),clearTimeout(E.countdownTimer),clearInterval(E.countdownInterval);const n=+(((t=document.querySelector("#botCount"))==null?void 0:t.value)||E.botCount||3);E.botCount=n,E.submittedTurn=!1,E.animating=!1,E.replay=null,E.replayKey=null,E.revealOrigins={},E.stageSeen=new Set,E.stageTurnKey=null;const e=jI(n);E.game={players:e,rows:tg(e),turn:1,round:1,tieOffset:0,phase:"choosing",selections:{},lastReveal:null,mode:"local",botStyle:((r=document.querySelector("#botStyle"))==null?void 0:r.value)||"clever"},E.mode="local",E.screen="game",E.selected=null,E.screenTransition=!0,yi()}function JI(n){n.round++,n.turn=1,n.tieOffset=(n.tieOffset+1)%n.players.length,n.rows=tg(n.players),n.phase="choosing",n.selections={},n.lastReveal=null,delete n.pendingRowChoice}function ig(n,e){const t=n.hand;let r=t[0],s=1/0;for(const o of t){const u=e.rows.map((f,h)=>({i:h,top:f.at(-1),distance:o-f.at(-1),heads:f.reduce((g,m)=>g+ni(m),0)})).filter(f=>o>f.top).sort((f,h)=>h.top-f.top);let d;if(!u.length)d=26+e.rows.reduce((f,h)=>f+h.reduce((g,m)=>g+ni(m),0),0)*1.1+o/104;else{const f=u[0];d=f.heads*2.1+(f.distance<4?1.3:0)+(f.i===3?-.3:0),e.rows[f.i].length>=5&&(d+=7),e.rows[f.i].length>=4&&(d+=2.5),d+=o/500}e.botStyle==="chaotic"&&(d+=(Math.random()-.5)*9),d<s&&(s=d,r=o)}return r}function QI(n){var r;const e=E.game;if(E.animating||!e||e.phase!=="choosing"||!e.players[0].hand.includes(n))return;Fa("card");const t=(r=document.querySelector(`.hand-card[data-card="${n}"]`))==null?void 0:r.getBoundingClientRect();t&&(E.revealOrigins.self={left:t.left,top:t.top,width:t.width,height:t.height}),e.selections.self=n,e.phase="waiting",E.selected=null,yi(),e.players.slice(1).forEach((s,o)=>window.setTimeout(()=>{E.game!==e||e.phase!=="waiting"||(e.selections[s.id]=ig(s,e),e.players.every(u=>e.selections[u.id]!=null)?(e.phase="countdown",e.countdownAt=Date.now()+900,yi(),lg(e,!1)):yi())},550+o*380))}function TM(n,e){var u;const t=n.players.map((d,f)=>(f+n.tieOffset)%n.players.length),r=n.players.map(d=>({p:d,card:n.selections[d.id]})).sort((d,f)=>d.card-f.card||t.indexOf(n.players.indexOf(d.p))-t.indexOf(n.players.indexOf(f.p))),s=r.find(d=>d.p.hand.includes(d.card));if(s&&!n.rows.some(f=>s.card>f.at(-1))&&s.p.human&&e==null)return n.pendingRowChoice={playerId:s.p.id,card:s.card},n.phase="row-choice",!0;const o=[];for(const{p:d,card:f}of r){const h=d.hand.indexOf(f);if(h<0)continue;d.hand.splice(h,1);let g=n.rows.map((M,R)=>({i:R,top:M.at(-1)})).filter(M=>f>M.top).sort((M,R)=>R.top-M.top),m,v=0,x=!1;if(g.length)m=g[0].i,n.rows[m].length===5?(v=n.rows[m].slice(0,5).reduce((M,R)=>M+ni(R),0),d.score+=v,d.total+=v,x=!0,n.rows[m]=[f]):n.rows[m].push(f);else{if(m=e!=null&&d.id===((u=n.pendingRowChoice)==null?void 0:u.playerId)?e:n.rows.reduce((R,y,S)=>y.reduce((w,N)=>w+ni(N),0)<n.rows[R].reduce((w,N)=>w+ni(N),0)?S:R,0),!Number.isInteger(m)||m<0||m>=n.rows.length)return d.hand.splice(h,0,f),!0;v=n.rows[m].reduce((R,y)=>R+ni(y),0),d.score+=v,d.total+=v,x=!0,n.rows[m]=[f]}o.push({playerId:d.id,name:d.name,card:f,rowIndex:m,penalty:v,tookRow:x})}return n.lastReveal=o,n.selections={},delete n.pendingRowChoice,n.tieOffset=(n.tieOffset+1)%n.players.length,E.selected=null,E.submittedTurn=!1,n.players.every(d=>d.hand.length===0)?n.players.some(f=>f.total>=66)?(n.phase="finished",E.screen="result"):n.phase="round-break":(n.turn++,n.phase="choosing"),!1}async function rg(){return iS(()=>import("https://esm.sh/peerjs@1.5.5?bundle"),[])}function eD(){const n=new Uint16Array(1);return crypto.getRandomValues(n),String(n[0]%1e4).padStart(4,"0")}function tD(n){var t;let e=cd(ps);return((e==null?void 0:e.roomId)!==n||!e.token)&&(e={roomId:n,token:((t=crypto.randomUUID)==null?void 0:t.call(crypto))||`${Date.now()}-${Math.random().toString(36).slice(2)}`},localStorage.setItem(ps,JSON.stringify(e))),E.resumeToken=e.token,e.token}function So(){if(!(!E.host||!E.roomId))try{localStorage.setItem(jm,JSON.stringify({roomId:E.roomId,name:E.name,screen:E.screen,players:E.players,game:E.game}))}catch{vi("Could not save a recovery copy of this room on this device.")}}function RM(n,e){E.peer===n&&(e.on("open",()=>{}),e.on("data",t=>rD(e,t)),e.on("close",()=>{var r,s,o;if(E.peer!==n||E.connections.get(e.peer)!==e)return;const t=E.players.find(u=>u.id===e.peer);t&&(t.online=!1),E.connections.delete(e.peer),So(),((r=E.game)==null?void 0:r.phase)==="choosing"?(Ol(),nr()):((s=E.game)==null?void 0:s.phase)==="row-choice"?(((o=E.game.pendingRowChoice)==null?void 0:o.playerId)===(t==null?void 0:t.id)&&AM(),nr()):E.screen==="lobby"&&lo()}))}function ag(n){n.on("disconnected",()=>{E.peer===n&&dd(n,1200)}),n.on("open",()=>clearTimeout(E.peerReconnectTimer))}function dd(n,e=3e3){E.peer===n&&(clearTimeout(E.peerReconnectTimer),E.peerReconnectTimer=setTimeout(()=>{if(!(E.peer!==n||!n.disconnected)){try{n.reconnect()}catch{}E.peer===n&&n.disconnected&&dd(n,4e3)}},e))}async function nD(){if(!E.busy){E.busy=!0,Ni("Opening your room…");try{const{Peer:n}=await rg();let e=0;const t=()=>{const r=eD(),s=new n(`take5-${r}`);E.peer=s,E.host=!0,ag(s),s.on("open",o=>{E.peer===s&&(localStorage.removeItem(ps),E.roomId=r,E.clientId=o,E.players=[{id:o,name:E.name,human:!0,online:!0,score:0,total:0,hand:[]}],E.screen="lobby",E.mode="online-host",E.busy=!1,E.screenTransition=!0,history.replaceState({},"",`?room=${encodeURIComponent(r)}`),vo(),So())}),s.on("connection",o=>RM(s,o)),s.on("error",o=>{if(E.peer===s){if(o.type==="unavailable-id"&&e<8){e++,s.destroy(),E.peer=null,setTimeout(t,120);return}E.busy=!1,E.screen==="home"?Ni(o.type==="unavailable-id"?"Could not reserve a room code. Try again.":"Room connection failed. Check your internet and try again."):vi("Room connection hiccup.")}})};t()}catch{E.busy=!1,Ni("Online rooms need an internet connection. Please try again.")}}}async function iD(n){if(!(n!=null&&n.roomId)||!/^\d{4}$/.test(n.roomId))return Ua();E.busy=!0,E.name=n.name||E.name,Ni("Restoring your room…");try{const{Peer:e}=await rg();let t=0;const r=()=>{const s=new e(`take5-${n.roomId}`);E.peer=s,E.host=!0,ag(s),s.on("open",o=>{var u;E.peer===s&&(vs(!1),E.roomId=n.roomId,E.clientId=o,E.game=n.game||null,E.players=((u=E.game)==null?void 0:u.players)||n.players||[],E.game&&(E.players=E.game.players),E.mode="online-host",E.screen=E.game?E.game.phase==="finished"?"result":"game":"lobby",E.busy=!1,E.screenTransition=!0,E.selected=null,E.submittedTurn=!1,E.animating=!1,E.replay=null,E.replayKey=null,E.revealOrigins={},history.replaceState({},"",`?room=${encodeURIComponent(n.roomId)}`),E.screen==="lobby"?vo():E.screen==="result"?ug():(yi(),E.game.phase==="countdown"&&lg(E.game,!0)),So())}),s.on("connection",o=>RM(s,o)),s.on("error",o=>{if(E.peer===s){if(o.type==="unavailable-id"&&t<25){t++,s.destroy(),E.peer=null,setTimeout(r,Math.min(1800,180+t*120));return}E.busy=!1,t>=25?Ni("This room is still active in another tab. Close that tab, then refresh to restore it."):Ni("Could not reconnect to your room. Refresh to try again."),s.destroy(),E.peer=null,E.host=!1}})};r()}catch{E.busy=!1,E.host=!1,Ni("Could not restore the room. Check your connection and refresh to try again.")}}function rD(n,e){var t,r;if(!(!e||typeof e!="object")){if(e.type==="hello"){const s=typeof e.resumeToken=="string"?e.resumeToken.slice(0,100):"",o=E.players.find(d=>d.id===n.peer||s&&d.resumeToken===s);if(o){const d=o.id,f=E.connections.get(d);if(f&&f!==n){E.connections.delete(d);try{f.close()}catch{}}o.id=n.peer,o.online=!0,E.game&&d!==n.peer&&(Object.hasOwn(E.game.selections||{},d)&&(E.game.selections[n.peer]=E.game.selections[d],delete E.game.selections[d]),((t=E.game.pendingRowChoice)==null?void 0:t.playerId)===d&&(E.game.pendingRowChoice.playerId=n.peer),E.game.lastReveal&&(E.game.lastReveal=E.game.lastReveal.map(h=>h.playerId===d?{...h,playerId:n.peer}:h))),E.connections.set(n.peer,n),n.send({type:"welcome",id:n.peer,roomId:E.roomId}),E.game?(clearTimeout(E.disconnectAdvanceTimer),E.disconnectAdvanceTimer=null,n.send(_m(n.peer)),Ol(),So(),nr()):lo();return}if(E.game){n.send({type:"error",message:"This game is already in progress. Rejoin using your original invite link."}),n.close();return}if(E.players.length>=10){n.send({type:"error",message:"This table is full (10 players max)."}),n.close();return}const u={id:n.peer,name:String(e.name||"Player").slice(0,18),resumeToken:s||void 0,human:!0,online:!0,ready:!1,score:0,total:0,hand:[]};E.players.push(u),E.connections.set(n.peer,n),n.send({type:"welcome",id:n.peer,roomId:E.roomId}),E.screen==="lobby"&&lo();return}if(e.type==="sync"){if(E.connections.get(n.peer)!==n)return;n.send({type:"welcome",id:n.peer,roomId:E.roomId}),E.game?n.send(_m(n.peer)):n.send({type:"lobby",players:E.players.map(({id:s,name:o,online:u,human:d,ready:f})=>({id:s,name:o,online:u,human:d,ready:f})),roomId:E.roomId});return}if(e.type==="ready"&&E.screen==="lobby"){const s=E.players.find(o=>o.id===n.peer);if(!s)return;s.ready=!!e.ready,lo();return}if(e.type==="reaction"){const s=E.players.find(d=>d.id===n.peer),o=Date.now();if(E.screen!=="game"||!(s!=null&&s.human)||!s.online||!zl.includes(e.emoji)||o-(E.reactionCooldowns.get(n.peer)||0)<650)return;E.reactionCooldowns.set(n.peer,o);const u={type:"reaction",playerId:n.peer,name:s.name,emoji:e.emoji};eg(u),bM(u,n.peer);return}if(e.type==="pick"&&E.game&&E.game.phase==="choosing"&&!E.animating){const s=E.players.find(o=>o.id===n.peer);if(!s||!s.hand.includes(+e.card)||E.game.selections[n.peer])return;E.game.selections[n.peer]=+e.card,Ol(),nr()}if(e.type==="choose-row"&&((r=E.game)==null?void 0:r.phase)==="row-choice"){const s=E.game.pendingRowChoice;if(!s||s.playerId!==n.peer||!Number.isInteger(+e.rowIndex))return;og(+e.rowIndex)}}}function Ol(){const n=E.game;if(E.animating||!n||n.phase!=="choosing"||n.players.some(r=>r.human&&r.online&&!n.selections[r.id]))return;if(n.players.some(r=>r.human&&!r.online&&!n.selections[r.id])){AM();return}clearTimeout(E.disconnectAdvanceTimer),E.disconnectAdvanceTimer=null,n.players.filter(r=>!r.human&&!n.selections[r.id]).forEach(r=>n.selections[r.id]=ig(r,n)),n.phase="countdown",n.countdownAt=Date.now()+3e3,lg(n,!0)}function AM(){E.disconnectAdvanceTimer||(E.disconnectAdvanceTimer=setTimeout(()=>{var e;E.disconnectAdvanceTimer=null;const n=E.game;if(n){if(n.phase==="choosing")n.players.filter(t=>t.human&&!t.online&&!n.selections[t.id]).forEach(t=>n.selections[t.id]=ig(t,n)),Ol(),nr();else if(n.phase==="row-choice"&&n.pendingRowChoice){const r=((e=n.rows.map((s,o)=>({i:o,penalty:s.reduce((u,d)=>u+ni(d),0)})).sort((s,o)=>s.penalty-o.penalty||s.i-o.i)[0])==null?void 0:e.i)??0;og(r)}}},2e4))}function lo(){So();const n={type:"lobby",players:E.players.map(({id:e,name:t,online:r,human:s,ready:o})=>({id:e,name:t,online:r,human:s,ready:o})),roomId:E.roomId};E.connections.forEach(e=>{try{e.send(n)}catch{}}),vo()}function _m(n){const e=E.game;return e?{type:"game",viewer:n,game:{...e,players:e.players.map(t=>{const{resumeToken:r,...s}=t;return{...s,hand:t.id===n?t.hand:void 0}}),readyPlayers:Object.keys(e.selections),selections:e.phase==="row-choice"?{...e.selections}:{},mode:"online"}}:null}function nr(){if(E.screen==="lobby"){lo();return}So(),E.connections.forEach((n,e)=>{try{n.send(_m(e))}catch{}}),E.clientId&&yi()}function aD(){var e,t;if(!E.roomId){vi("This room is not connected.");return}if(E.host){E.screen==="lobby"?lo():nr(),vi("Room state refreshed for everyone.");return}const n=E.peer;if((e=E.connection)!=null&&e.open){E.connection.send({type:"sync"}),vi("Refreshing room sync…");return}if(n){if(E.recoveringGuest=!0,E.connection=null,clearTimeout(E.reconnectTimer),n.disconnected)try{n.reconnect()}catch{dd(n)}fd(E.roomId,n),vi("Reconnecting to the room…");return}E.resumeToken=((t=cd(ps))==null?void 0:t.token)||E.resumeToken,E.busy=!1,sg(E.roomId)}function nd(){var e;if(!E.host||E.players.filter(t=>t.human&&t.online).length<1)return;Fa("deal"),vs(!1),clearTimeout(E.countdownTimer),clearInterval(E.countdownInterval);let n=+(((e=document.querySelector("#lobbyBots"))==null?void 0:e.value)||0);E.players.filter(t=>t.human&&t.online).length===1&&!E.players.some(t=>!t.human)&&n===0&&(n=1);for(let t=0;t<n&&E.players.length<10;t++){const r=E.players.filter(s=>!s.human).length;E.players.push({id:`bot${r+1}`,name:["Milo","Nora","Pip","June","Otto","Bea","Finn","Kit","Lou"][r],human:!1,online:!0,score:0,total:0,hand:[]})}E.game={players:E.players,rows:tg(E.players),turn:1,round:1,tieOffset:0,phase:"choosing",selections:{},lastReveal:null,mode:"online"},E.submittedTurn=!1,E.animating=!1,E.replay=null,E.replayKey=null,E.revealOrigins={},E.stageSeen=new Set,E.stageTurnKey=null,E.screen="game",E.mode="online-host",E.screenTransition=!0,nr()}function fd(n,e,t=0){if(E.peer!==e||E.host||E.connection&&E.connection.open)return;let r;try{r=e.connect(`take5-${n}`,{reliable:!0})}catch{ym(n,e,t);return}E.connection=r;let s=!1,o=setTimeout(()=>{!s&&E.connection===r&&r.close()},1e4);r.on("open",()=>{E.peer===e&&r.send({type:"hello",name:E.name,resumeToken:E.resumeToken})}),r.on("data",u=>{(u==null?void 0:u.type)==="welcome"&&(s=!0,clearTimeout(o),E.recoveringGuest=!1),sD(u)}),r.on("error",()=>r.close()),r.on("close",()=>{clearTimeout(o),!(E.connection!==r||E.peer!==e)&&ym(n,e,t)})}function ym(n,e,t){if(!(E.peer!==e||E.host)){if(!E.recoveringGuest&&E.screen!=="game"&&E.screen!=="lobby"){E.busy=!1,Ni("Could not reach that room. Check the code and try again.");return}E.recoveringGuest=!0,clearTimeout(E.reconnectTimer),E.reconnectTimer=setTimeout(()=>fd(n,e,t+1),Math.min(8e3,700*Math.pow(2,Math.min(t,3))))}}function sg(n){if(!E.busy){if(!/^\d{4}$/.test(n)){Ni("Enter the 4-digit room code.");return}E.busy=!0,E.roomId=n,tD(n),Ni("Finding your table…"),rg().then(({Peer:e})=>{const t=new e;E.peer=t,E.host=!1,ag(t),t.on("open",()=>fd(n,t)),t.on("error",r=>{if(r.type==="peer-unavailable"&&E.recoveringGuest){ym(n,t,0);return}E.screen==="home"&&!E.recoveringGuest&&(E.busy=!1,Ni(r.type==="peer-unavailable"?"Room not found. Check the code and try again.":"Could not connect. Check your internet and try again."))})}).catch(()=>{E.busy=!1,Ni("Online rooms need an internet connection. Please try again.")})}}function sD(n){var e;if((n==null?void 0:n.type)==="reaction")eg(n);else if((n==null?void 0:n.type)==="welcome")E.clientId=n.id,E.roomId=n.roomId,E.busy=!1,E.mode="online-guest",E.game||(E.screen="lobby"),localStorage.setItem(ps,JSON.stringify({roomId:n.roomId,token:E.resumeToken})),E.game||vo();else if((n==null?void 0:n.type)==="lobby")E.players=n.players,E.roomId=n.roomId,E.screen!=="game"&&(E.screen="lobby"),vo();else if((n==null?void 0:n.type)==="game"){const t=E.game,r=t&&(t.turn!==n.game.turn||t.round!==n.game.round);E.game=n.game,E.players=n.game.players,E.clientId=n.viewer,E.mode="online-guest",E.screen=n.game.phase==="finished"?"result":"game",r&&(E.selected=null,E.submittedTurn=!1),E.submittedTurn=!!((e=n.game.readyPlayers)!=null&&e.includes(n.viewer)),E.recoveringGuest=!1,yi()}else(n==null?void 0:n.type)==="error"&&(E.busy=!1,vi(n.message))}function oD(n){var t,r,s;if(E.animating||((t=E.game)==null?void 0:t.phase)!=="choosing")return;Fa("card");const e=(r=document.querySelector(`.hand-card[data-card="${n}"]`))==null?void 0:r.getBoundingClientRect();if(e&&(E.revealOrigins[E.clientId]={left:e.left,top:e.top,width:e.width,height:e.height}),E.host){if(E.game.selections[E.clientId])return;E.game.selections[E.clientId]=n,Ol(),nr()}else(s=E.connection)!=null&&s.open&&(E.connection.send({type:"pick",card:n}),E.selected=n,E.submittedTurn=!0,yi())}function og(n){var o;const e=E.game,t=e==null?void 0:e.pendingRowChoice;if(!e||!t||n<0||n>=e.rows.length)return;clearTimeout(E.disconnectAdvanceTimer),E.disconnectAdvanceTimer=null;const r=E.mode==="local"?(o=e.players[0])==null?void 0:o.id:E.clientId;!(t.playerId===r)&&!E.host||(TM(e,n),E.host?nr():yi())}function lD(n){var s,o;Fa("row");const e=E.game,t=e==null?void 0:e.pendingRowChoice,r=E.mode==="local"?(s=e==null?void 0:e.players[0])==null?void 0:s.id:E.clientId;!t||t.playerId!==r||(E.mode==="local"||E.host?og(n):(o=E.connection)!=null&&o.open&&E.connection.send({type:"choose-row",rowIndex:n}))}function vo(){vs(!1),document.body.classList.remove("home-mode"),document.body.classList.add("match-mode","lobby-mode"),E.screen="lobby";const n=E.players.filter(s=>s.online!==!1).length,e=E.players.find(s=>s.id===E.clientId),t=!!(e!=null&&e.ready),r=Vt(E.roomId);jr(),tr(_i,`<section class="game-layout lobby-layout"><div class="lobby-row"><strong>ROOM CODE</strong><span class="room-code">${r}</span><span class="lobby-wait">${n<2?"Waiting for friends, or start a practice game now.":`${n} players connected`}</span></div><div class="tabletop"><div class="tabletop-head"><span>THE TABLE</span><strong>2–10 PLAYERS</strong></div><div class="row-empty">${n<2?"Share the invite link, or start now and a bot will join your table.":"Players are here. The host can start the game."}</div></div><div class="game-bottom lobby-bottom"><div></div><aside class="turn-side"><div class="turn-state">READY TO PLAY</div><p class="turn-message">${n<2?"Start now and play with one bot, or wait for friends to join.":"Everyone is here. Deal the cards!"}</p>${E.host?'<label class="field-label" for="lobbyBots">Bots to add</label><select class="select-field" id="lobbyBots"><option value="0">No bots</option><option value="1">1 bot</option><option value="2">2 bots</option><option value="3">3 bots</option></select><button class="primary-button lobby-start" id="beginOnline">Start game ↗</button>':`<button class="primary-button lobby-start lobby-ready" id="toggleReady">${t?"Ready ✓":"Ready up"}</button><div class="turn-help">${t?"You’re ready. Waiting for the host…":"Tap Ready when you’re set to play."}</div>`}</aside></div></section>`),Kt("#beginOnline",nd),Kt("#toggleReady",()=>{var o;const s=!t;E.players=E.players.map(u=>u.id===E.clientId?{...u,ready:s}:u),(o=E.connection)==null||o.send({type:"ready",ready:s}),vo()})}function CM(n,e){var t;(t=navigator.clipboard)==null||t.writeText(n).then(()=>vi(e)).catch(()=>vi("Could not copy. Select the room code to copy it."))}function uD(){const e=`${pM?CI:`${location.origin}${location.pathname}`}?room=${encodeURIComponent(E.roomId)}`;CM(e,"Invite link copied")}function Sm(){return`<div class="card-back-design"><span class="back-emblem">${Mr()}</span><b>TAKE<br>5</b><span class="back-stars">✦　✦　✦</span></div>`}function lg(n,e){clearTimeout(E.countdownTimer),E.countdownTimer=setTimeout(()=>{E.game!==n||n.phase!=="countdown"||(clearInterval(E.countdownInterval),E.countdownInterval=null,n.phase="choosing",delete n.countdownAt,TM(n),n.phase==="finished"&&(E.screen="result"),e?nr():yi())},Math.max(0,(n.countdownAt||Date.now()+3e3)-Date.now()))}function cD(n){if(clearInterval(E.countdownInterval),E.countdownInterval=null,n.phase!=="countdown")return;const e=()=>{const t=_i.querySelector("[data-countdown]");if(!t)return;const r=Math.max(0,(n.countdownAt-Date.now())/1e3);t.textContent=r>0?String(Math.ceil(r)):"REVEAL"};e(),E.countdownInterval=setInterval(e,100)}function dD(){var t;if(document.querySelector(".clubhouse-ready"))return;const n=Array.from(_i.querySelectorAll(".stage-card-back"));if(!n.length)return;const e=[];for(const r of n){const s=r.dataset.stagePlayer;if(E.stageSeen.has(s))continue;E.stageSeen.add(s);const o=Array.from(document.querySelectorAll("[data-player-id]")).find(v=>v.dataset.playerId===s),u=E.revealOrigins[s]||((t=o==null?void 0:o.querySelector(".opponent-cards"))==null?void 0:t.getBoundingClientRect())||(o==null?void 0:o.getBoundingClientRect()),d=r.getBoundingClientRect();if(!u){r.classList.remove("stage-pending");continue}const f=document.createElement("div");f.className="flying-back",f.innerHTML=Sm(),document.body.append(f);const h={x:u.left+u.width/2,y:u.top+u.height/2},g={x:d.left+d.width/2,y:d.top+d.height/2};f.style.left=`${h.x}px`,f.style.top=`${h.y}px`;const m=(async()=>{try{await f.animate([{left:`${h.x}px`,top:`${h.y}px`,transform:"translate(-50%,-50%) scale(.5) rotate(-7deg)"},{left:`${g.x}px`,top:`${g.y}px`,transform:"translate(-50%,-50%) scale(1) rotate(0deg)"}],{duration:330,easing:"cubic-bezier(.18,.75,.25,1)",fill:"forwards"}).finished}catch{}f.remove(),r.classList.remove("stage-pending")})();e.push(m)}Promise.all(e)}function fD(n){var t;if(!((t=n.lastReveal)!=null&&t.length))return;const e=`${n.round}:${n.turn}:${n.lastReveal.map(r=>`${r.playerId}-${r.card}`).join(",")}`;e!==E.replayKey&&(E.replayKey=e,E.replay={key:e,reveals:n.lastReveal.map(r=>({...r})),seen:new Set,active:!0,running:!1},E.revealOrigins=E.revealOrigins||{},E.animating=!0)}function tS(n){return new Promise(e=>setTimeout(e,n))}async function hD(){var r,s,o,u,d;const n=E.replay;if(!(n!=null&&n.active)||n.running)return;Fa("deal"),n.running=!0,E.animating=!0;const e=matchMedia("(prefers-reduced-motion: reduce)").matches,t=e?180:500;if(await tS(e?150:720),!await hI(n.reveals))for(const f of n.reveals){if(E.replay!==n||E.screen==="home")break;const h=_i.querySelector(`.row-lane[data-row-index="${f.rowIndex}"]`),g=_i.querySelector(`.playing-card[data-row-index="${f.rowIndex}"][data-card-number="${f.card}"]`),m=g||(h==null?void 0:h.querySelector(".row-cards"));let v=(r=E.revealOrigins)==null?void 0:r[f.playerId];if(!v){const S=Array.from(document.querySelectorAll("[data-player-id]")).find(w=>w.dataset.playerId===f.playerId);v=((s=S==null?void 0:S.querySelector(".opponent-cards"))==null?void 0:s.getBoundingClientRect())||(S==null?void 0:S.getBoundingClientRect())||((o=_i.querySelector(".hand-area"))==null?void 0:o.getBoundingClientRect())}if(!v||!m){n.seen.add(f.card),g==null||g.classList.remove("reveal-pending");continue}const x={x:v.left+v.width/2,y:v.top+v.height/2},M=m.getBoundingClientRect(),R={x:M.left+M.width/2,y:M.top+M.height/2},y=document.createElement("div");y.className="flying-card",y.innerHTML=ro(f.card),document.body.append(y),y.style.left=`${x.x}px`,y.style.top=`${x.y}px`;try{await y.animate([{left:`${x.x}px`,top:`${x.y}px`,transform:"translate(-50%,-50%) scale(.62) rotate(-5deg)"},{left:`${(x.x+R.x)/2}px`,top:`${(x.y+R.y)/2-24}px`,transform:"translate(-50%,-50%) scale(.86) rotate(2deg)"},{left:`${R.x}px`,top:`${R.y}px`,transform:"translate(-50%,-50%) scale(1) rotate(0deg)"}],{duration:t,easing:"cubic-bezier(.2,.78,.24,1)",fill:"forwards"}).finished}catch{}if(y.remove(),E.replay!==n)break;n.seen.add(f.card),g==null||g.classList.remove("reveal-pending"),h==null||h.classList.add("card-landed"),setTimeout(()=>h==null?void 0:h.classList.remove("card-landed"),360),await tS(e?40:130)}E.replay===n&&(n.active=!1,n.running=!1,E.animating=!1,E.revealOrigins={},((u=E.game)==null?void 0:u.phase)==="finished"?(E.screen="result",ug()):((d=E.game)==null?void 0:d.phase)==="round-break"?(JI(E.game),E.stageSeen=new Set,E.stageTurnKey=null,E.host?nr():yi()):yi())}function yi(){var y,S,w,N,L,U,D,b,P,G;if(!E.game)return;const n=E.game;if(fD(n),E.screen==="result"&&!((y=E.replay)!=null&&y.active)){ug();return}document.body.classList.remove("home-mode","lobby-mode"),document.body.classList.add("match-mode"),E.screen="game",jr();const e=n.players.find(O=>O.id===E.clientId)||n.players[0],t=(e==null?void 0:e.hand)||[],r=n.phase==="choosing",s=(S=E.mode)==null?void 0:S.startsWith("online"),o=n.readyPlayers||Object.keys(n.selections||{}),u=s&&(!!((w=n.selections)!=null&&w[E.clientId])||o.includes(E.clientId)||E.submittedTurn);(N=e==null?void 0:e.hand)==null||N.length;const d=`${n.round}:${n.turn}`;E.stageTurnKey!==d&&(E.stageTurnKey=d,E.stageSeen=new Set);const f=new Set(o);s&&u&&f.add(E.clientId);const h=n.players.filter(O=>f.has(O.id)),g=((L=n.selections)==null?void 0:L[e.id])??(u?E.selected:null),m=g==null?t:t.filter(O=>O!==g),v=new Set((U=E.replay)!=null&&U.active?E.replay.reveals.filter(O=>!E.replay.seen.has(O.card)).map(O=>`${O.rowIndex}:${O.card}`):[]),x=n.phase==="row-choice"?n.pendingRowChoice:null,M=!!x&&x.playerId===e.id,R=x?n.players.find(O=>O.id===x.playerId):null;fI(n,e.id,(D=E.replay)==null?void 0:D.active),tr(_i,`<section class="game-layout">
  <div class="tabletop"><div class="tabletop-head"><span>✦ THE MEADOW TABLE ✦</span><strong>ROUND ${n.round} <span>·</span> TURN ${Math.min(n.turn,10)} OF 10</strong></div><div class="rows">${n.rows.map((O,B)=>{var q;const V=O.reduce((k,ie)=>k+ni(ie),0);return`<div class="row-lane ${(q=n.lastReveal)!=null&&q.some(k=>k.rowIndex===B&&k.playerId===e.id&&k.tookRow)?"target":""}" data-row-index="${B}"><div class="row-label"><span>ROW ${B+1}</span></div><b class="row-total bull-counter-badge" aria-label="${V} bullheads"><strong>${V}</strong>${Mr()}</b><div class="row-cards">${O.map(k=>`<div class="playing-card ${v.has(`${B}:${k}`)?"reveal-pending":""}" data-row-index="${B}" data-card-number="${k}" aria-label="${k}, ${ni(k)} bullheads">${ro(k)}</div>`).join("")}</div></div>`}).join("")}</div></div>
  <div class="stage-zone ${h.length?"has-cards":""} ${n.phase==="countdown"?"countdown-active":""}">${h.map(O=>{var V;const B=((V=n.selections)==null?void 0:V[O.id])??(O.id===(x==null?void 0:x.playerId)?x.card:null);return x&&Number.isInteger(B)?`<div class="stage-reveal-card" data-stage-player="${Vt(O.id)}" aria-label="${Vt(O.name)} played ${B}">${ro(B)}<small>${Vt(O.name)} · ${B}</small></div>`:`<div class="stage-card-back ${E.stageSeen.has(O.id)?"":"stage-pending"}" data-stage-player="${Vt(O.id)}">${Sm()}<small>${Vt(O.name)}</small></div>`}).join("")}${n.phase==="countdown"?'<div class="reveal-countdown"><span>REVEALING IN</span><strong data-countdown>3</strong></div>':""}</div>
  ${(b=E.replay)!=null&&b.active?`<div class="reveal-bay">${E.replay.reveals.map(O=>{var B;return`<div class="reveal-card"><div class="reveal-flip"><div class="reveal-side reveal-back">${Sm()}</div><div class="reveal-side reveal-front">${ro(O.card)}</div></div><small>${Vt(((B=n.players.find(V=>V.id===O.playerId))==null?void 0:B.name)||O.name||"Player")}</small></div>`}).join("")}</div>`:""}
  ${x?`<section class="row-choice-bay ${M?"is-your-choice":"is-waiting"}" aria-labelledby="rowChoiceTitle" aria-live="polite">
    <div class="row-choice-header">
      <div class="row-choice-card">${ro(x.card)}</div>
      <div class="row-choice-copy"><span class="row-choice-eyebrow">${M?"YOUR LOW CARD":"ROW CHOICE"}</span><h2 id="rowChoiceTitle">${M?"Choose a row to collect":`#${Vt((R==null?void 0:R.name)||"Player")} waiting for a row choice`}</h2><p>${M?"Pick the row of bullheads you want to take.":`${Vt((R==null?void 0:R.name)||"The player")} is choosing which row to collect.`}</p></div>
    </div>
    <div class="row-choice-options" role="group" aria-label="Choose a row">
      ${n.rows.map((O,B)=>{const V=O.reduce((q,k)=>q+ni(k),0);return`<button class="row-choice-option" data-row-choice="${B}" aria-label="Row ${B+1}, take ${V} ${V===1?"bullhead":"bullheads"}" ${M?"":"disabled"}><span class="row-choice-option-top"><b>ROW ${String(B+1).padStart(2,"0")}</b><strong class="row-choice-penalty bull-counter-badge" aria-hidden="true"><span>${V}</span>${Mr()}</strong></span><span class="row-choice-preview" aria-hidden="true">${O.map(q=>`<i>${q}</i>`).join("")}</span><span class="row-choice-action">${M?"Take row":"Waiting"} <b aria-hidden="true">→</b></span></button>`}).join("")}
    </div>
  </section>`:""}
  <div class="game-bottom"><section class="hand-area" data-player-id="${Vt(e.id)}"><div class="hand-heading"><h2><span class="your-avatar">${xM(e,0)}</span> Your hand <span class="my-score" aria-label="Your score: ${e.total||0} bullheads"><b>${e.total||0}</b>${Mr()}</span>${s?`<span class="hand-reaction-control"><button type="button" class="hand-reaction-trigger" aria-label="Open reactions" aria-expanded="false">☺</button><span class="hand-reaction-picker" role="group" aria-label="Choose a reaction" hidden>${zl.map(O=>`<button type="button" class="hand-reaction-option" data-reaction="${O}" aria-label="Send ${O} reaction">${O}</button>`).join("")}</span></span>`:""}</h2><span>${u?"PICK LOCKED IN":"PICK YOUR CARD"}</span></div><div class="hand" role="group" aria-label="Your cards">${m.map((O,B)=>`<button class="hand-card ${E.selected===O?"selected":""}" style="--hand-index:${B}" data-card="${O}" aria-label="Card ${O}, ${ni(O)} bullheads${E.selected===O?", selected":""}" aria-pressed="${E.selected===O}" ${!r||u||E.animating?"disabled":""}>${ro(O)}</button>`).join("")}</div></section><aside class="turn-side"><div class="turn-state ${u?"done":s?"waiting":""}">${u?"PICK LOCKED IN":s?"EVERYONE PICKS AT ONCE":"YOUR TURN"}</div><p class="turn-message">${u?s?"Waiting for the other players…":"Your card is away. Let’s see where it lands.":"Pick a card and dodge those bullheads."}</p><button id="playCard" class="primary-button play-button" ${E.selected===null||u||!r||E.animating?"disabled":""}>Play card <span>↗</span></button><div class="turn-help">${(P=E.lastReveal)!=null&&P.length?pD(n.lastReveal,e.id):"Lowest bigger card wins the row."}</div></aside></div></section>`),Kt("[data-card]",(O,B)=>{B.getAttribute("aria-disabled")!=="true"&&(E.selected=+B.dataset.card,yi())}),Kt("#playCard",()=>{E.selected!=null&&!E.animating&&(E.mode==="local"?QI(E.selected):oD(E.selected))}),Kt("[data-row-choice]",(O,B)=>lD(+B.dataset.rowChoice)),Kt(".hand-reaction-trigger",(O,B)=>{var k;const V=B.nextElementSibling,q=B.getAttribute("aria-expanded")!=="true";B.setAttribute("aria-expanded",String(q)),V.hidden=!q,(k=B.closest(".hand-reaction-control"))==null||k.classList.toggle("is-expanded",q)}),Kt(".hand-reaction-option",(O,B)=>wM(B.dataset.reaction)),n.phase==="countdown"?cD(n):(clearInterval(E.countdownInterval),E.countdownInterval=null),dD(),(G=E.replay)!=null&&G.active&&hD()}function pD(n,e){const t=n.find(r=>r.playerId===e);return t?`${t.penalty?`You took ${t.penalty} bullheads.`:`Your ${t.card} landed in row ${t.rowIndex+1}.`} ${n.length>1?n.filter(r=>r.playerId!==e).map(r=>`${Vt(r.name)} ${r.penalty?`took ${r.penalty} bulls`:`played ${r.card}`}`).join(" · "):""}`:n.map(r=>`${Vt(r.name)} played ${r.card}${r.penalty?` and took ${r.penalty} bulls`:""}`).join(" · ")}function ug(){document.body.classList.add("match-mode"),E.screen="result",jr();const n=E.game.players.slice().sort((t,r)=>t.total-r.total),e=n[0];tr(_i,`<section class="result-screen"><div class="result-mark">🏆</div><div class="eyebrow">THAT’S A WRAP</div><h1>${e.id===E.clientId?"You kept your cool!":`${Vt(e.name)} takes it!`}</h1><p>Fewest bullheads at the table. A suspiciously good run.</p><div class="final-scores">${n.map((t,r)=>`<div class="final-score"><span>${r===0?"✳ ":""}${Vt(t.name)}${t.id===E.clientId?" (you)":""}</span><b aria-label="${t.total} bullheads">${t.total}${Mr()}</b></div>`).join("")}</div><button class="primary-button lobby-start" id="playAgain">Play again ↗</button><button class="pill-button" id="backHome">Back to table</button></section>`),Kt("#playAgain",()=>{E.mode.startsWith("online")?E.host?(E.players.forEach(r=>{r.score=0,r.total=0}),nd()):vi("Ask the host to start another game."):ng()}),Kt("#backHome",PM)}function hd(){if(E.peer)try{E.peer.destroy()}catch{}clearTimeout(E.countdownTimer),clearInterval(E.countdownInterval),clearTimeout(E.reconnectTimer),clearTimeout(E.peerReconnectTimer),clearTimeout(E.disconnectAdvanceTimer),document.querySelectorAll(".flying-card,.flying-back").forEach(n=>n.remove()),E.animating=!1,E.replay=null,E.replayKey=null,E.revealOrigins={},E.stageSeen=new Set,E.stageTurnKey=null,E.reactionCooldowns.clear(),E.recoveringGuest=!1,E.resumeToken=null,E.peer=null,E.connection=null,E.connections.clear(),E.host=!1,E.clientId=null,E.roomId="",E.players=[],history.replaceState({},"",location.pathname)}function PM(){E.host&&localStorage.removeItem(jm),localStorage.removeItem(ps),hd(),E.screen="home",E.game=null,E.selected=null,E.tab="rooms",E.screenTransition=!0,Ua()}export{qm as W};
