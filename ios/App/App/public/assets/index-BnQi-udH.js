(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const eb="modulepreload",tb=function(n){return"/"+n},b0={},jy=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let u=function(h){return Promise.all(h.map(v=>Promise.resolve(v).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));s=u(t.map(h=>{if(h=tb(h),h in b0)return;b0[h]=!0;const v=h.endsWith(".css"),m=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const g=document.createElement("link");if(g.rel=v?"stylesheet":eb,v||(g.as="script"),g.crossOrigin="",g.href=h,f&&g.setAttribute("nonce",f),document.head.appendChild(g),v)return new Promise((x,E)=>{g.addEventListener("load",x),g.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return s.then(u=>{for(const d of u||[])d.status==="rejected"&&o(d.reason);return e().catch(o)})};function yi(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function Jy(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var s=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:function(){return n[r]}})}),t}var Hf={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0;function nb(){if(w0)return Mt;w0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),m=Symbol.iterator;function g(U){return U===null||typeof U!="object"?null:(U=m&&U[m]||U["@@iterator"],typeof U=="function"?U:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(U,J,Te){this.props=U,this.context=J,this.refs=T,this.updater=Te||x}y.prototype.isReactComponent={},y.prototype.setState=function(U,J){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,J,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function S(){}S.prototype=y.prototype;function w(U,J,Te){this.props=U,this.context=J,this.refs=T,this.updater=Te||x}var D=w.prototype=new S;D.constructor=w,E(D,y.prototype),D.isPureReactComponent=!0;var L=Array.isArray,N=Object.prototype.hasOwnProperty,I={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function C(U,J,Te){var ne,ye={},Se=null,we=null;if(J!=null)for(ne in J.ref!==void 0&&(we=J.ref),J.key!==void 0&&(Se=""+J.key),J)N.call(J,ne)&&!b.hasOwnProperty(ne)&&(ye[ne]=J[ne]);var pe=arguments.length-2;if(pe===1)ye.children=Te;else if(1<pe){for(var ue=Array(pe),Ge=0;Ge<pe;Ge++)ue[Ge]=arguments[Ge+2];ye.children=ue}if(U&&U.defaultProps)for(ne in pe=U.defaultProps,pe)ye[ne]===void 0&&(ye[ne]=pe[ne]);return{$$typeof:n,type:U,key:Se,ref:we,props:ye,_owner:I.current}}function k(U,J){return{$$typeof:n,type:U.type,key:J,ref:U.ref,props:U.props,_owner:U._owner}}function O(U){return typeof U=="object"&&U!==null&&U.$$typeof===n}function G(U){var J={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Te){return J[Te]})}var W=/\/+/g;function X(U,J){return typeof U=="object"&&U!==null&&U.key!=null?G(""+U.key):J.toString(36)}function B(U,J,Te,ne,ye){var Se=typeof U;(Se==="undefined"||Se==="boolean")&&(U=null);var we=!1;if(U===null)we=!0;else switch(Se){case"string":case"number":we=!0;break;case"object":switch(U.$$typeof){case n:case e:we=!0}}if(we)return we=U,ye=ye(we),U=ne===""?"."+X(we,0):ne,L(ye)?(Te="",U!=null&&(Te=U.replace(W,"$&/")+"/"),B(ye,J,Te,"",function(Ge){return Ge})):ye!=null&&(O(ye)&&(ye=k(ye,Te+(!ye.key||we&&we.key===ye.key?"":(""+ye.key).replace(W,"$&/")+"/")+U)),J.push(ye)),1;if(we=0,ne=ne===""?".":ne+":",L(U))for(var pe=0;pe<U.length;pe++){Se=U[pe];var ue=ne+X(Se,pe);we+=B(Se,J,Te,ue,ye)}else if(ue=g(U),typeof ue=="function")for(U=ue.call(U),pe=0;!(Se=U.next()).done;)Se=Se.value,ue=ne+X(Se,pe++),we+=B(Se,J,Te,ue,ye);else if(Se==="object")throw J=String(U),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return we}function ie(U,J,Te){if(U==null)return U;var ne=[],ye=0;return B(U,ne,"","",function(Se){return J.call(Te,Se,ye++)}),ne}function te(U){if(U._status===-1){var J=U._result;J=J(),J.then(function(Te){(U._status===0||U._status===-1)&&(U._status=1,U._result=Te)},function(Te){(U._status===0||U._status===-1)&&(U._status=2,U._result=Te)}),U._status===-1&&(U._status=0,U._result=J)}if(U._status===1)return U._result.default;throw U._result}var Q={current:null},j={transition:null},q={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:j,ReactCurrentOwner:I};function Z(){throw Error("act(...) is not supported in production builds of React.")}return Mt.Children={map:ie,forEach:function(U,J,Te){ie(U,function(){J.apply(this,arguments)},Te)},count:function(U){var J=0;return ie(U,function(){J++}),J},toArray:function(U){return ie(U,function(J){return J})||[]},only:function(U){if(!O(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Mt.Component=y,Mt.Fragment=t,Mt.Profiler=s,Mt.PureComponent=w,Mt.StrictMode=r,Mt.Suspense=f,Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,Mt.act=Z,Mt.cloneElement=function(U,J,Te){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var ne=E({},U.props),ye=U.key,Se=U.ref,we=U._owner;if(J!=null){if(J.ref!==void 0&&(Se=J.ref,we=I.current),J.key!==void 0&&(ye=""+J.key),U.type&&U.type.defaultProps)var pe=U.type.defaultProps;for(ue in J)N.call(J,ue)&&!b.hasOwnProperty(ue)&&(ne[ue]=J[ue]===void 0&&pe!==void 0?pe[ue]:J[ue])}var ue=arguments.length-2;if(ue===1)ne.children=Te;else if(1<ue){pe=Array(ue);for(var Ge=0;Ge<ue;Ge++)pe[Ge]=arguments[Ge+2];ne.children=pe}return{$$typeof:n,type:U.type,key:ye,ref:Se,props:ne,_owner:we}},Mt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:o,_context:U},U.Consumer=U},Mt.createElement=C,Mt.createFactory=function(U){var J=C.bind(null,U);return J.type=U,J},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(U){return{$$typeof:d,render:U}},Mt.isValidElement=O,Mt.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:te}},Mt.memo=function(U,J){return{$$typeof:h,type:U,compare:J===void 0?null:J}},Mt.startTransition=function(U){var J=j.transition;j.transition={};try{U()}finally{j.transition=J}},Mt.unstable_act=Z,Mt.useCallback=function(U,J){return Q.current.useCallback(U,J)},Mt.useContext=function(U){return Q.current.useContext(U)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(U){return Q.current.useDeferredValue(U)},Mt.useEffect=function(U,J){return Q.current.useEffect(U,J)},Mt.useId=function(){return Q.current.useId()},Mt.useImperativeHandle=function(U,J,Te){return Q.current.useImperativeHandle(U,J,Te)},Mt.useInsertionEffect=function(U,J){return Q.current.useInsertionEffect(U,J)},Mt.useLayoutEffect=function(U,J){return Q.current.useLayoutEffect(U,J)},Mt.useMemo=function(U,J){return Q.current.useMemo(U,J)},Mt.useReducer=function(U,J,Te){return Q.current.useReducer(U,J,Te)},Mt.useRef=function(U){return Q.current.useRef(U)},Mt.useState=function(U){return Q.current.useState(U)},Mt.useSyncExternalStore=function(U,J,Te){return Q.current.useSyncExternalStore(U,J,Te)},Mt.useTransition=function(){return Q.current.useTransition()},Mt.version="18.3.1",Mt}var T0;function Qy(){return T0||(T0=1,Hf.exports=nb()),Hf.exports}var dt=Qy();const oo=yi(dt);var ku={},Gf={exports:{}},Jn={},Vf={exports:{}},Wf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R0;function ib(){return R0||(R0=1,(function(n){function e(j,q){var Z=j.length;j.push(q);e:for(;0<Z;){var U=Z-1>>>1,J=j[U];if(0<s(J,q))j[U]=q,j[Z]=J,Z=U;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var q=j[0],Z=j.pop();if(Z!==q){j[0]=Z;e:for(var U=0,J=j.length,Te=J>>>1;U<Te;){var ne=2*(U+1)-1,ye=j[ne],Se=ne+1,we=j[Se];if(0>s(ye,Z))Se<J&&0>s(we,ye)?(j[U]=we,j[Se]=Z,U=Se):(j[U]=ye,j[ne]=Z,U=ne);else if(Se<J&&0>s(we,Z))j[U]=we,j[Se]=Z,U=Se;else break e}}return q}function s(j,q){var Z=j.sortIndex-q.sortIndex;return Z!==0?Z:j.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],h=[],v=1,m=null,g=3,x=!1,E=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(j){for(var q=t(h);q!==null;){if(q.callback===null)r(h);else if(q.startTime<=j)r(h),q.sortIndex=q.expirationTime,e(f,q);else break;q=t(h)}}function L(j){if(T=!1,D(j),!E)if(t(f)!==null)E=!0,te(N);else{var q=t(h);q!==null&&Q(L,q.startTime-j)}}function N(j,q){E=!1,T&&(T=!1,S(C),C=-1),x=!0;var Z=g;try{for(D(q),m=t(f);m!==null&&(!(m.expirationTime>q)||j&&!G());){var U=m.callback;if(typeof U=="function"){m.callback=null,g=m.priorityLevel;var J=U(m.expirationTime<=q);q=n.unstable_now(),typeof J=="function"?m.callback=J:m===t(f)&&r(f),D(q)}else r(f);m=t(f)}if(m!==null)var Te=!0;else{var ne=t(h);ne!==null&&Q(L,ne.startTime-q),Te=!1}return Te}finally{m=null,g=Z,x=!1}}var I=!1,b=null,C=-1,k=5,O=-1;function G(){return!(n.unstable_now()-O<k)}function W(){if(b!==null){var j=n.unstable_now();O=j;var q=!0;try{q=b(!0,j)}finally{q?X():(I=!1,b=null)}}else I=!1}var X;if(typeof w=="function")X=function(){w(W)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,ie=B.port2;B.port1.onmessage=W,X=function(){ie.postMessage(null)}}else X=function(){y(W,0)};function te(j){b=j,I||(I=!0,X())}function Q(j,q){C=y(function(){j(n.unstable_now())},q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(j){j.callback=null},n.unstable_continueExecution=function(){E||x||(E=!0,te(N))},n.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<j?Math.floor(1e3/j):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(j){switch(g){case 1:case 2:case 3:var q=3;break;default:q=g}var Z=g;g=q;try{return j()}finally{g=Z}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(j,q){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var Z=g;g=j;try{return q()}finally{g=Z}},n.unstable_scheduleCallback=function(j,q,Z){var U=n.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?U+Z:U):Z=U,j){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=Z+J,j={id:v++,callback:q,priorityLevel:j,startTime:Z,expirationTime:J,sortIndex:-1},Z>U?(j.sortIndex=Z,e(h,j),t(f)===null&&j===t(h)&&(T?(S(C),C=-1):T=!0,Q(L,Z-U))):(j.sortIndex=J,e(f,j),E||x||(E=!0,te(N))),j},n.unstable_shouldYield=G,n.unstable_wrapCallback=function(j){var q=g;return function(){var Z=g;g=q;try{return j.apply(this,arguments)}finally{g=Z}}}})(Wf)),Wf}var A0;function rb(){return A0||(A0=1,Vf.exports=ib()),Vf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0;function ab(){if(C0)return Jn;C0=1;var n=Qy(),e=rb();function t(i){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)a+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function o(i,a){u(i,a),u(i+"Capture",a)}function u(i,a){for(s[i]=a,i=0;i<a.length;i++)r.add(a[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},m={};function g(i){return f.call(m,i)?!0:f.call(v,i)?!1:h.test(i)?m[i]=!0:(v[i]=!0,!1)}function x(i,a,l,c){if(l!==null&&l.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return c?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,a,l,c){if(a===null||typeof a>"u"||x(i,a,l,c))return!0;if(c)return!1;if(l!==null)switch(l.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function T(i,a,l,c,p,_,R){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=a,this.sanitizeURL=_,this.removeEmptyString=R}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new T(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var a=i[0];y[a]=new T(a,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new T(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new T(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new T(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new T(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new T(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new T(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new T(i,5,!1,i.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function w(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var a=i.replace(S,w);y[a]=new T(a,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var a=i.replace(S,w);y[a]=new T(a,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var a=i.replace(S,w);y[a]=new T(a,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new T(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new T(i,1,!1,i.toLowerCase(),null,!0,!0)});function D(i,a,l,c){var p=y.hasOwnProperty(a)?y[a]:null;(p!==null?p.type!==0:c||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(E(a,l,p,c)&&(l=null),c||p===null?g(a)&&(l===null?i.removeAttribute(a):i.setAttribute(a,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(a=p.attributeName,c=p.attributeNamespace,l===null?i.removeAttribute(a):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,c?i.setAttributeNS(c,a,l):i.setAttribute(a,l))))}var L=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),I=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),G=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),j=Symbol.iterator;function q(i){return i===null||typeof i!="object"?null:(i=j&&i[j]||i["@@iterator"],typeof i=="function"?i:null)}var Z=Object.assign,U;function J(i){if(U===void 0)try{throw Error()}catch(l){var a=l.stack.trim().match(/\n( *(at )?)/);U=a&&a[1]||""}return`
`+U+i}var Te=!1;function ne(i,a){if(!i||Te)return"";Te=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(de){var c=de}Reflect.construct(i,[],a)}else{try{a.call()}catch(de){c=de}i.call(a.prototype)}else{try{throw Error()}catch(de){c=de}i()}}catch(de){if(de&&c&&typeof de.stack=="string"){for(var p=de.stack.split(`
`),_=c.stack.split(`
`),R=p.length-1,z=_.length-1;1<=R&&0<=z&&p[R]!==_[z];)z--;for(;1<=R&&0<=z;R--,z--)if(p[R]!==_[z]){if(R!==1||z!==1)do if(R--,z--,0>z||p[R]!==_[z]){var $=`
`+p[R].replace(" at new "," at ");return i.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",i.displayName)),$}while(1<=R&&0<=z);break}}}finally{Te=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?J(i):""}function ye(i){switch(i.tag){case 5:return J(i.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return i=ne(i.type,!1),i;case 11:return i=ne(i.type.render,!1),i;case 1:return i=ne(i.type,!0),i;default:return""}}function Se(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case b:return"Fragment";case I:return"Portal";case k:return"Profiler";case C:return"StrictMode";case X:return"Suspense";case B:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case G:return(i.displayName||"Context")+".Consumer";case O:return(i._context.displayName||"Context")+".Provider";case W:var a=i.render;return i=i.displayName,i||(i=a.displayName||a.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ie:return a=i.displayName||null,a!==null?a:Se(i.type)||"Memo";case te:a=i._payload,i=i._init;try{return Se(i(a))}catch{}}return null}function we(i){var a=i.type;switch(i.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=a.render,i=i.displayName||i.name||"",a.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(a);case 8:return a===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function pe(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function ue(i){var a=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Ge(i){var a=ue(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,a),c=""+i[a];if(!i.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,a,{configurable:!0,get:function(){return p.call(this)},set:function(R){c=""+R,_.call(this,R)}}),Object.defineProperty(i,a,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(R){c=""+R},stopTracking:function(){i._valueTracker=null,delete i[a]}}}}function ve(i){i._valueTracker||(i._valueTracker=Ge(i))}function De(i){if(!i)return!1;var a=i._valueTracker;if(!a)return!0;var l=a.getValue(),c="";return i&&(c=ue(i)?i.checked?"true":"false":i.value),i=c,i!==l?(a.setValue(i),!0):!1}function Je(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function ze(i,a){var l=a.checked;return Z({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function st(i,a){var l=a.defaultValue==null?"":a.defaultValue,c=a.checked!=null?a.checked:a.defaultChecked;l=pe(a.value!=null?a.value:l),i._wrapperState={initialChecked:c,initialValue:l,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function We(i,a){a=a.checked,a!=null&&D(i,"checked",a,!1)}function wt(i,a){We(i,a);var l=pe(a.value),c=a.type;if(l!=null)c==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(c==="submit"||c==="reset"){i.removeAttribute("value");return}a.hasOwnProperty("value")?un(i,a.type,l):a.hasOwnProperty("defaultValue")&&un(i,a.type,pe(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(i.defaultChecked=!!a.defaultChecked)}function Ct(i,a,l){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var c=a.type;if(!(c!=="submit"&&c!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+i._wrapperState.initialValue,l||a===i.value||(i.value=a),i.defaultValue=a}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function un(i,a,l){(a!=="number"||Je(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Ot=Array.isArray;function en(i,a,l,c){if(i=i.options,a){a={};for(var p=0;p<l.length;p++)a["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=a.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&c&&(i[l].defaultSelected=!0)}else{for(l=""+pe(l),a=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,c&&(i[p].defaultSelected=!0);return}a!==null||i[p].disabled||(a=i[p])}a!==null&&(a.selected=!0)}}function cn(i,a){if(a.dangerouslySetInnerHTML!=null)throw Error(t(91));return Z({},a,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function wn(i,a){var l=a.value;if(l==null){if(l=a.children,a=a.defaultValue,l!=null){if(a!=null)throw Error(t(92));if(Ot(l)){if(1<l.length)throw Error(t(93));l=l[0]}a=l}a==null&&(a=""),l=a}i._wrapperState={initialValue:pe(l)}}function Y(i,a){var l=pe(a.value),c=pe(a.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),a.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),c!=null&&(i.defaultValue=""+c)}function Tn(i){var a=i.textContent;a===i._wrapperState.initialValue&&a!==""&&a!==null&&(i.value=a)}function Ut(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ft(i,a){return i==null||i==="http://www.w3.org/1999/xhtml"?Ut(a):i==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Fe,Zt=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,l,c,p){MSApp.execUnsafeLocalFunction(function(){return i(a,l,c,p)})}:i})(function(i,a){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=a;else{for(Fe=Fe||document.createElement("div"),Fe.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=Fe.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;a.firstChild;)i.appendChild(a.firstChild)}});function it(i,a){if(a){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=a;return}}i.textContent=a}var ot={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F=["Webkit","ms","Moz","O"];Object.keys(ot).forEach(function(i){F.forEach(function(a){a=a+i.charAt(0).toUpperCase()+i.substring(1),ot[a]=ot[i]})});function A(i,a,l){return a==null||typeof a=="boolean"||a===""?"":l||typeof a!="number"||a===0||ot.hasOwnProperty(i)&&ot[i]?(""+a).trim():a+"px"}function ae(i,a){i=i.style;for(var l in a)if(a.hasOwnProperty(l)){var c=l.indexOf("--")===0,p=A(l,a[l],c);l==="float"&&(l="cssFloat"),c?i.setProperty(l,p):i[l]=p}}var be=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _e(i,a){if(a){if(be[i]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(t(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(t(61))}if(a.style!=null&&typeof a.style!="object")throw Error(t(62))}}function Pe(i,a){if(i.indexOf("-")===-1)return typeof a.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ne=null;function he(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var me=null,Ce=null,H=null;function ge(i){if(i=Oo(i)){if(typeof me!="function")throw Error(t(280));var a=i.stateNode;a&&(a=Ql(a),me(i.stateNode,i.type,a))}}function fe(i){Ce?H?H.push(i):H=[i]:Ce=i}function Oe(){if(Ce){var i=Ce,a=H;if(H=Ce=null,ge(i),a)for(i=0;i<a.length;i++)ge(a[i])}}function Ae(i,a){return i(a)}function Le(){}var Qe=!1;function mt(i,a,l){if(Qe)return i(a,l);Qe=!0;try{return Ae(i,a,l)}finally{Qe=!1,(Ce!==null||H!==null)&&(Le(),Oe())}}function Me(i,a){var l=i.stateNode;if(l===null)return null;var c=Ql(l);if(c===null)return null;l=c[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,a,typeof l));return l}var rt=!1;if(d)try{var ft={};Object.defineProperty(ft,"passive",{get:function(){rt=!0}}),window.addEventListener("test",ft,ft),window.removeEventListener("test",ft,ft)}catch{rt=!1}function He(i,a,l,c,p,_,R,z,$){var de=Array.prototype.slice.call(arguments,3);try{a.apply(l,de)}catch(Ee){this.onError(Ee)}}var xt=!1,$t=null,Ln=!1,Zr=null,ir={onError:function(i){xt=!0,$t=i}};function jr(i,a,l,c,p,_,R,z,$){xt=!1,$t=null,He.apply(ir,arguments)}function Oa(i,a,l,c,p,_,R,z,$){if(jr.apply(this,arguments),xt){if(xt){var de=$t;xt=!1,$t=null}else throw Error(t(198));Ln||(Ln=!0,Zr=de)}}function xi(i){var a=i,l=i;if(i.alternate)for(;a.return;)a=a.return;else{i=a;do a=i,(a.flags&4098)!==0&&(l=a.return),i=a.return;while(i)}return a.tag===3?l:null}function ri(i){if(i.tag===13){var a=i.memoizedState;if(a===null&&(i=i.alternate,i!==null&&(a=i.memoizedState)),a!==null)return a.dehydrated}return null}function Jr(i){if(xi(i)!==i)throw Error(t(188))}function rr(i){var a=i.alternate;if(!a){if(a=xi(i),a===null)throw Error(t(188));return a!==i?null:i}for(var l=i,c=a;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(c=p.return,c!==null){l=c;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return Jr(p),i;if(_===c)return Jr(p),a;_=_.sibling}throw Error(t(188))}if(l.return!==c.return)l=p,c=_;else{for(var R=!1,z=p.child;z;){if(z===l){R=!0,l=p,c=_;break}if(z===c){R=!0,c=p,l=_;break}z=z.sibling}if(!R){for(z=_.child;z;){if(z===l){R=!0,l=_,c=p;break}if(z===c){R=!0,c=_,l=p;break}z=z.sibling}if(!R)throw Error(t(189))}}if(l.alternate!==c)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:a}function Qr(i){return i=rr(i),i!==null?$e(i):null}function $e(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var a=$e(i);if(a!==null)return a;i=i.sibling}return null}var Ua=e.unstable_scheduleCallback,zn=e.unstable_cancelCallback,ar=e.unstable_shouldYield,gs=e.unstable_requestPaint,Ht=e.unstable_now,Fa=e.unstable_getCurrentPriorityLevel,ea=e.unstable_ImmediatePriority,ka=e.unstable_UserBlockingPriority,Rr=e.unstable_NormalPriority,Ba=e.unstable_LowPriority,P=e.unstable_IdlePriority,V=null,oe=null;function re(i){if(oe&&typeof oe.onCommitFiberRoot=="function")try{oe.onCommitFiberRoot(V,i,void 0,(i.current.flags&128)===128)}catch{}}var ee=Math.clz32?Math.clz32:Ue,ke=Math.log,qe=Math.LN2;function Ue(i){return i>>>=0,i===0?32:31-(ke(i)/qe|0)|0}var Be=64,Ye=4194304;function lt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function vt(i,a){var l=i.pendingLanes;if(l===0)return 0;var c=0,p=i.suspendedLanes,_=i.pingedLanes,R=l&268435455;if(R!==0){var z=R&~p;z!==0?c=lt(z):(_&=R,_!==0&&(c=lt(_)))}else R=l&~p,R!==0?c=lt(R):_!==0&&(c=lt(_));if(c===0)return 0;if(a!==0&&a!==c&&(a&p)===0&&(p=c&-c,_=a&-a,p>=_||p===16&&(_&4194240)!==0))return a;if((c&4)!==0&&(c|=l&16),a=i.entangledLanes,a!==0)for(i=i.entanglements,a&=c;0<a;)l=31-ee(a),p=1<<l,c|=i[l],a&=~p;return c}function Ke(i,a){switch(i){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _t(i,a){for(var l=i.suspendedLanes,c=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var R=31-ee(_),z=1<<R,$=p[R];$===-1?((z&l)===0||(z&c)!==0)&&(p[R]=Ke(z,a)):$<=a&&(i.expiredLanes|=z),_&=~z}}function zt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function It(){var i=Be;return Be<<=1,(Be&4194240)===0&&(Be=64),i}function Pt(i){for(var a=[],l=0;31>l;l++)a.push(i);return a}function Xt(i,a,l){i.pendingLanes|=a,a!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,a=31-ee(a),i[a]=l}function Ze(i,a){var l=i.pendingLanes&~a;i.pendingLanes=a,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=a,i.mutableReadLanes&=a,i.entangledLanes&=a,a=i.entanglements;var c=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-ee(l),_=1<<p;a[p]=0,c[p]=-1,i[p]=-1,l&=~_}}function an(i,a){var l=i.entangledLanes|=a;for(i=i.entanglements;l;){var c=31-ee(l),p=1<<c;p&a|i[c]&a&&(i[c]|=a),l&=~p}}var et=0;function ai(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var sn,Oi,Xn,si,St,jt=!1,gn=[],Tt=null,kt=null,dn=null,Ui=new Map,ta=new Map,Fi=[],Fl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vs(i,a){switch(i){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":Ui.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(a.pointerId)}}function za(i,a,l,c,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:a,domEventName:l,eventSystemFlags:c,nativeEvent:_,targetContainers:[p]},a!==null&&(a=Oo(a),a!==null&&Oi(a)),i):(i.eventSystemFlags|=c,a=i.targetContainers,p!==null&&a.indexOf(p)===-1&&a.push(p),i)}function kl(i,a,l,c,p){switch(a){case"focusin":return Tt=za(Tt,i,a,l,c,p),!0;case"dragenter":return kt=za(kt,i,a,l,c,p),!0;case"mouseover":return dn=za(dn,i,a,l,c,p),!0;case"pointerover":var _=p.pointerId;return Ui.set(_,za(Ui.get(_)||null,i,a,l,c,p)),!0;case"gotpointercapture":return _=p.pointerId,ta.set(_,za(ta.get(_)||null,i,a,l,c,p)),!0}return!1}function So(i){var a=Ga(i.target);if(a!==null){var l=xi(a);if(l!==null){if(a=l.tag,a===13){if(a=ri(l),a!==null){i.blockedOn=a,St(i.priority,function(){Xn(l)});return}}else if(a===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Ha(i){if(i.blockedOn!==null)return!1;for(var a=i.targetContainers;0<a.length;){var l=hd(i.domEventName,i.eventSystemFlags,a[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var c=new l.constructor(l.type,l);Ne=c,l.target.dispatchEvent(c),Ne=null}else return a=Oo(l),a!==null&&Oi(a),i.blockedOn=l,!1;a.shift()}return!0}function xo(i,a,l){Ha(i)&&l.delete(a)}function Bl(){jt=!1,Tt!==null&&Ha(Tt)&&(Tt=null),kt!==null&&Ha(kt)&&(kt=null),dn!==null&&Ha(dn)&&(dn=null),Ui.forEach(xo),ta.forEach(xo)}function Mo(i,a){i.blockedOn===a&&(i.blockedOn=null,jt||(jt=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Bl)))}function Eo(i){function a(p){return Mo(p,i)}if(0<gn.length){Mo(gn[0],i);for(var l=1;l<gn.length;l++){var c=gn[l];c.blockedOn===i&&(c.blockedOn=null)}}for(Tt!==null&&Mo(Tt,i),kt!==null&&Mo(kt,i),dn!==null&&Mo(dn,i),Ui.forEach(a),ta.forEach(a),l=0;l<Fi.length;l++)c=Fi[l],c.blockedOn===i&&(c.blockedOn=null);for(;0<Fi.length&&(l=Fi[0],l.blockedOn===null);)So(l),l.blockedOn===null&&Fi.shift()}var _s=L.ReactCurrentBatchConfig,zl=!0;function wM(i,a,l,c){var p=et,_=_s.transition;_s.transition=null;try{et=1,fd(i,a,l,c)}finally{et=p,_s.transition=_}}function TM(i,a,l,c){var p=et,_=_s.transition;_s.transition=null;try{et=4,fd(i,a,l,c)}finally{et=p,_s.transition=_}}function fd(i,a,l,c){if(zl){var p=hd(i,a,l,c);if(p===null)Pd(i,a,c,Hl,l),vs(i,c);else if(kl(p,i,a,l,c))c.stopPropagation();else if(vs(i,c),a&4&&-1<Fl.indexOf(i)){for(;p!==null;){var _=Oo(p);if(_!==null&&sn(_),_=hd(i,a,l,c),_===null&&Pd(i,a,c,Hl,l),_===p)break;p=_}p!==null&&c.stopPropagation()}else Pd(i,a,c,null,l)}}var Hl=null;function hd(i,a,l,c){if(Hl=null,i=he(c),i=Ga(i),i!==null)if(a=xi(i),a===null)i=null;else if(l=a.tag,l===13){if(i=ri(a),i!==null)return i;i=null}else if(l===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;i=null}else a!==i&&(i=null);return Hl=i,null}function cg(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fa()){case ea:return 1;case ka:return 4;case Rr:case Ba:return 16;case P:return 536870912;default:return 16}default:return 16}}var na=null,pd=null,Gl=null;function dg(){if(Gl)return Gl;var i,a=pd,l=a.length,c,p="value"in na?na.value:na.textContent,_=p.length;for(i=0;i<l&&a[i]===p[i];i++);var R=l-i;for(c=1;c<=R&&a[l-c]===p[_-c];c++);return Gl=p.slice(i,1<c?1-c:void 0)}function Vl(i){var a=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&a===13&&(i=13)):i=a,i===10&&(i=13),32<=i||i===13?i:0}function Wl(){return!0}function fg(){return!1}function oi(i){function a(l,c,p,_,R){this._reactName=l,this._targetInst=p,this.type=c,this.nativeEvent=_,this.target=R,this.currentTarget=null;for(var z in i)i.hasOwnProperty(z)&&(l=i[z],this[z]=l?l(_):_[z]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Wl:fg,this.isPropagationStopped=fg,this}return Z(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Wl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Wl)},persist:function(){},isPersistent:Wl}),a}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},md=oi(ys),bo=Z({},ys,{view:0,detail:0}),RM=oi(bo),gd,vd,wo,$l=Z({},bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yd,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==wo&&(wo&&i.type==="mousemove"?(gd=i.screenX-wo.screenX,vd=i.screenY-wo.screenY):vd=gd=0,wo=i),gd)},movementY:function(i){return"movementY"in i?i.movementY:vd}}),hg=oi($l),AM=Z({},$l,{dataTransfer:0}),CM=oi(AM),PM=Z({},bo,{relatedTarget:0}),_d=oi(PM),LM=Z({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),IM=oi(LM),DM=Z({},ys,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),NM=oi(DM),OM=Z({},ys,{data:0}),pg=oi(OM),UM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function BM(i){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(i):(i=kM[i])?!!a[i]:!1}function yd(){return BM}var zM=Z({},bo,{key:function(i){if(i.key){var a=UM[i.key]||i.key;if(a!=="Unidentified")return a}return i.type==="keypress"?(i=Vl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?FM[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yd,charCode:function(i){return i.type==="keypress"?Vl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Vl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),HM=oi(zM),GM=Z({},$l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mg=oi(GM),VM=Z({},bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yd}),WM=oi(VM),$M=Z({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),XM=oi($M),qM=Z({},$l,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),YM=oi(qM),KM=[9,13,27,32],Sd=d&&"CompositionEvent"in window,To=null;d&&"documentMode"in document&&(To=document.documentMode);var ZM=d&&"TextEvent"in window&&!To,gg=d&&(!Sd||To&&8<To&&11>=To),vg=" ",_g=!1;function yg(i,a){switch(i){case"keyup":return KM.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sg(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ss=!1;function jM(i,a){switch(i){case"compositionend":return Sg(a);case"keypress":return a.which!==32?null:(_g=!0,vg);case"textInput":return i=a.data,i===vg&&_g?null:i;default:return null}}function JM(i,a){if(Ss)return i==="compositionend"||!Sd&&yg(i,a)?(i=dg(),Gl=pd=na=null,Ss=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return gg&&a.locale!=="ko"?null:a.data;default:return null}}var QM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xg(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a==="input"?!!QM[i.type]:a==="textarea"}function Mg(i,a,l,c){fe(c),a=Zl(a,"onChange"),0<a.length&&(l=new md("onChange","change",null,l,c),i.push({event:l,listeners:a}))}var Ro=null,Ao=null;function eE(i){zg(i,0)}function Xl(i){var a=ws(i);if(De(a))return i}function tE(i,a){if(i==="change")return a}var Eg=!1;if(d){var xd;if(d){var Md="oninput"in document;if(!Md){var bg=document.createElement("div");bg.setAttribute("oninput","return;"),Md=typeof bg.oninput=="function"}xd=Md}else xd=!1;Eg=xd&&(!document.documentMode||9<document.documentMode)}function wg(){Ro&&(Ro.detachEvent("onpropertychange",Tg),Ao=Ro=null)}function Tg(i){if(i.propertyName==="value"&&Xl(Ao)){var a=[];Mg(a,Ao,i,he(i)),mt(eE,a)}}function nE(i,a,l){i==="focusin"?(wg(),Ro=a,Ao=l,Ro.attachEvent("onpropertychange",Tg)):i==="focusout"&&wg()}function iE(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Xl(Ao)}function rE(i,a){if(i==="click")return Xl(a)}function aE(i,a){if(i==="input"||i==="change")return Xl(a)}function sE(i,a){return i===a&&(i!==0||1/i===1/a)||i!==i&&a!==a}var ki=typeof Object.is=="function"?Object.is:sE;function Co(i,a){if(ki(i,a))return!0;if(typeof i!="object"||i===null||typeof a!="object"||a===null)return!1;var l=Object.keys(i),c=Object.keys(a);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var p=l[c];if(!f.call(a,p)||!ki(i[p],a[p]))return!1}return!0}function Rg(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Ag(i,a){var l=Rg(i);i=0;for(var c;l;){if(l.nodeType===3){if(c=i+l.textContent.length,i<=a&&c>=a)return{node:l,offset:a-i};i=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Rg(l)}}function Cg(i,a){return i&&a?i===a?!0:i&&i.nodeType===3?!1:a&&a.nodeType===3?Cg(i,a.parentNode):"contains"in i?i.contains(a):i.compareDocumentPosition?!!(i.compareDocumentPosition(a)&16):!1:!1}function Pg(){for(var i=window,a=Je();a instanceof i.HTMLIFrameElement;){try{var l=typeof a.contentWindow.location.href=="string"}catch{l=!1}if(l)i=a.contentWindow;else break;a=Je(i.document)}return a}function Ed(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a&&(a==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||a==="textarea"||i.contentEditable==="true")}function oE(i){var a=Pg(),l=i.focusedElem,c=i.selectionRange;if(a!==l&&l&&l.ownerDocument&&Cg(l.ownerDocument.documentElement,l)){if(c!==null&&Ed(l)){if(a=c.start,i=c.end,i===void 0&&(i=a),"selectionStart"in l)l.selectionStart=a,l.selectionEnd=Math.min(i,l.value.length);else if(i=(a=l.ownerDocument||document)&&a.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(c.start,p);c=c.end===void 0?_:Math.min(c.end,p),!i.extend&&_>c&&(p=c,c=_,_=p),p=Ag(l,_);var R=Ag(l,c);p&&R&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==R.node||i.focusOffset!==R.offset)&&(a=a.createRange(),a.setStart(p.node,p.offset),i.removeAllRanges(),_>c?(i.addRange(a),i.extend(R.node,R.offset)):(a.setEnd(R.node,R.offset),i.addRange(a)))}}for(a=[],i=l;i=i.parentNode;)i.nodeType===1&&a.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<a.length;l++)i=a[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var lE=d&&"documentMode"in document&&11>=document.documentMode,xs=null,bd=null,Po=null,wd=!1;function Lg(i,a,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;wd||xs==null||xs!==Je(c)||(c=xs,"selectionStart"in c&&Ed(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Po&&Co(Po,c)||(Po=c,c=Zl(bd,"onSelect"),0<c.length&&(a=new md("onSelect","select",null,a,l),i.push({event:a,listeners:c}),a.target=xs)))}function ql(i,a){var l={};return l[i.toLowerCase()]=a.toLowerCase(),l["Webkit"+i]="webkit"+a,l["Moz"+i]="moz"+a,l}var Ms={animationend:ql("Animation","AnimationEnd"),animationiteration:ql("Animation","AnimationIteration"),animationstart:ql("Animation","AnimationStart"),transitionend:ql("Transition","TransitionEnd")},Td={},Ig={};d&&(Ig=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Yl(i){if(Td[i])return Td[i];if(!Ms[i])return i;var a=Ms[i],l;for(l in a)if(a.hasOwnProperty(l)&&l in Ig)return Td[i]=a[l];return i}var Dg=Yl("animationend"),Ng=Yl("animationiteration"),Og=Yl("animationstart"),Ug=Yl("transitionend"),Fg=new Map,kg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ia(i,a){Fg.set(i,a),o(a,[i])}for(var Rd=0;Rd<kg.length;Rd++){var Ad=kg[Rd],uE=Ad.toLowerCase(),cE=Ad[0].toUpperCase()+Ad.slice(1);ia(uE,"on"+cE)}ia(Dg,"onAnimationEnd"),ia(Ng,"onAnimationIteration"),ia(Og,"onAnimationStart"),ia("dblclick","onDoubleClick"),ia("focusin","onFocus"),ia("focusout","onBlur"),ia(Ug,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lo));function Bg(i,a,l){var c=i.type||"unknown-event";i.currentTarget=l,Oa(c,a,void 0,i),i.currentTarget=null}function zg(i,a){a=(a&4)!==0;for(var l=0;l<i.length;l++){var c=i[l],p=c.event;c=c.listeners;e:{var _=void 0;if(a)for(var R=c.length-1;0<=R;R--){var z=c[R],$=z.instance,de=z.currentTarget;if(z=z.listener,$!==_&&p.isPropagationStopped())break e;Bg(p,z,de),_=$}else for(R=0;R<c.length;R++){if(z=c[R],$=z.instance,de=z.currentTarget,z=z.listener,$!==_&&p.isPropagationStopped())break e;Bg(p,z,de),_=$}}}if(Ln)throw i=Zr,Ln=!1,Zr=null,i}function qt(i,a){var l=a[Ud];l===void 0&&(l=a[Ud]=new Set);var c=i+"__bubble";l.has(c)||(Hg(a,i,2,!1),l.add(c))}function Cd(i,a,l){var c=0;a&&(c|=4),Hg(l,i,c,a)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function Io(i){if(!i[Kl]){i[Kl]=!0,r.forEach(function(l){l!=="selectionchange"&&(dE.has(l)||Cd(l,!1,i),Cd(l,!0,i))});var a=i.nodeType===9?i:i.ownerDocument;a===null||a[Kl]||(a[Kl]=!0,Cd("selectionchange",!1,a))}}function Hg(i,a,l,c){switch(cg(a)){case 1:var p=wM;break;case 4:p=TM;break;default:p=fd}l=p.bind(null,a,l,i),p=void 0,!rt||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(p=!0),c?p!==void 0?i.addEventListener(a,l,{capture:!0,passive:p}):i.addEventListener(a,l,!0):p!==void 0?i.addEventListener(a,l,{passive:p}):i.addEventListener(a,l,!1)}function Pd(i,a,l,c,p){var _=c;if((a&1)===0&&(a&2)===0&&c!==null)e:for(;;){if(c===null)return;var R=c.tag;if(R===3||R===4){var z=c.stateNode.containerInfo;if(z===p||z.nodeType===8&&z.parentNode===p)break;if(R===4)for(R=c.return;R!==null;){var $=R.tag;if(($===3||$===4)&&($=R.stateNode.containerInfo,$===p||$.nodeType===8&&$.parentNode===p))return;R=R.return}for(;z!==null;){if(R=Ga(z),R===null)return;if($=R.tag,$===5||$===6){c=_=R;continue e}z=z.parentNode}}c=c.return}mt(function(){var de=_,Ee=he(l),Re=[];e:{var xe=Fg.get(i);if(xe!==void 0){var Xe=md,tt=i;switch(i){case"keypress":if(Vl(l)===0)break e;case"keydown":case"keyup":Xe=HM;break;case"focusin":tt="focus",Xe=_d;break;case"focusout":tt="blur",Xe=_d;break;case"beforeblur":case"afterblur":Xe=_d;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Xe=hg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Xe=CM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Xe=WM;break;case Dg:case Ng:case Og:Xe=IM;break;case Ug:Xe=XM;break;case"scroll":Xe=RM;break;case"wheel":Xe=YM;break;case"copy":case"cut":case"paste":Xe=NM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Xe=mg}var nt=(a&4)!==0,fn=!nt&&i==="scroll",se=nt?xe!==null?xe+"Capture":null:xe;nt=[];for(var K=de,le;K!==null;){le=K;var Ie=le.stateNode;if(le.tag===5&&Ie!==null&&(le=Ie,se!==null&&(Ie=Me(K,se),Ie!=null&&nt.push(Do(K,Ie,le)))),fn)break;K=K.return}0<nt.length&&(xe=new Xe(xe,tt,null,l,Ee),Re.push({event:xe,listeners:nt}))}}if((a&7)===0){e:{if(xe=i==="mouseover"||i==="pointerover",Xe=i==="mouseout"||i==="pointerout",xe&&l!==Ne&&(tt=l.relatedTarget||l.fromElement)&&(Ga(tt)||tt[Ar]))break e;if((Xe||xe)&&(xe=Ee.window===Ee?Ee:(xe=Ee.ownerDocument)?xe.defaultView||xe.parentWindow:window,Xe?(tt=l.relatedTarget||l.toElement,Xe=de,tt=tt?Ga(tt):null,tt!==null&&(fn=xi(tt),tt!==fn||tt.tag!==5&&tt.tag!==6)&&(tt=null)):(Xe=null,tt=de),Xe!==tt)){if(nt=hg,Ie="onMouseLeave",se="onMouseEnter",K="mouse",(i==="pointerout"||i==="pointerover")&&(nt=mg,Ie="onPointerLeave",se="onPointerEnter",K="pointer"),fn=Xe==null?xe:ws(Xe),le=tt==null?xe:ws(tt),xe=new nt(Ie,K+"leave",Xe,l,Ee),xe.target=fn,xe.relatedTarget=le,Ie=null,Ga(Ee)===de&&(nt=new nt(se,K+"enter",tt,l,Ee),nt.target=le,nt.relatedTarget=fn,Ie=nt),fn=Ie,Xe&&tt)t:{for(nt=Xe,se=tt,K=0,le=nt;le;le=Es(le))K++;for(le=0,Ie=se;Ie;Ie=Es(Ie))le++;for(;0<K-le;)nt=Es(nt),K--;for(;0<le-K;)se=Es(se),le--;for(;K--;){if(nt===se||se!==null&&nt===se.alternate)break t;nt=Es(nt),se=Es(se)}nt=null}else nt=null;Xe!==null&&Gg(Re,xe,Xe,nt,!1),tt!==null&&fn!==null&&Gg(Re,fn,tt,nt,!0)}}e:{if(xe=de?ws(de):window,Xe=xe.nodeName&&xe.nodeName.toLowerCase(),Xe==="select"||Xe==="input"&&xe.type==="file")var at=tE;else if(xg(xe))if(Eg)at=aE;else{at=iE;var ut=nE}else(Xe=xe.nodeName)&&Xe.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(at=rE);if(at&&(at=at(i,de))){Mg(Re,at,l,Ee);break e}ut&&ut(i,xe,de),i==="focusout"&&(ut=xe._wrapperState)&&ut.controlled&&xe.type==="number"&&un(xe,"number",xe.value)}switch(ut=de?ws(de):window,i){case"focusin":(xg(ut)||ut.contentEditable==="true")&&(xs=ut,bd=de,Po=null);break;case"focusout":Po=bd=xs=null;break;case"mousedown":wd=!0;break;case"contextmenu":case"mouseup":case"dragend":wd=!1,Lg(Re,l,Ee);break;case"selectionchange":if(lE)break;case"keydown":case"keyup":Lg(Re,l,Ee)}var ct;if(Sd)e:{switch(i){case"compositionstart":var ht="onCompositionStart";break e;case"compositionend":ht="onCompositionEnd";break e;case"compositionupdate":ht="onCompositionUpdate";break e}ht=void 0}else Ss?yg(i,l)&&(ht="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(ht="onCompositionStart");ht&&(gg&&l.locale!=="ko"&&(Ss||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&Ss&&(ct=dg()):(na=Ee,pd="value"in na?na.value:na.textContent,Ss=!0)),ut=Zl(de,ht),0<ut.length&&(ht=new pg(ht,i,null,l,Ee),Re.push({event:ht,listeners:ut}),ct?ht.data=ct:(ct=Sg(l),ct!==null&&(ht.data=ct)))),(ct=ZM?jM(i,l):JM(i,l))&&(de=Zl(de,"onBeforeInput"),0<de.length&&(Ee=new pg("onBeforeInput","beforeinput",null,l,Ee),Re.push({event:Ee,listeners:de}),Ee.data=ct))}zg(Re,a)})}function Do(i,a,l){return{instance:i,listener:a,currentTarget:l}}function Zl(i,a){for(var l=a+"Capture",c=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=Me(i,l),_!=null&&c.unshift(Do(i,_,p)),_=Me(i,a),_!=null&&c.push(Do(i,_,p))),i=i.return}return c}function Es(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Gg(i,a,l,c,p){for(var _=a._reactName,R=[];l!==null&&l!==c;){var z=l,$=z.alternate,de=z.stateNode;if($!==null&&$===c)break;z.tag===5&&de!==null&&(z=de,p?($=Me(l,_),$!=null&&R.unshift(Do(l,$,z))):p||($=Me(l,_),$!=null&&R.push(Do(l,$,z)))),l=l.return}R.length!==0&&i.push({event:a,listeners:R})}var fE=/\r\n?/g,hE=/\u0000|\uFFFD/g;function Vg(i){return(typeof i=="string"?i:""+i).replace(fE,`
`).replace(hE,"")}function jl(i,a,l){if(a=Vg(a),Vg(i)!==a&&l)throw Error(t(425))}function Jl(){}var Ld=null,Id=null;function Dd(i,a){return i==="textarea"||i==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Nd=typeof setTimeout=="function"?setTimeout:void 0,pE=typeof clearTimeout=="function"?clearTimeout:void 0,Wg=typeof Promise=="function"?Promise:void 0,mE=typeof queueMicrotask=="function"?queueMicrotask:typeof Wg<"u"?function(i){return Wg.resolve(null).then(i).catch(gE)}:Nd;function gE(i){setTimeout(function(){throw i})}function Od(i,a){var l=a,c=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(c===0){i.removeChild(p),Eo(a);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=p}while(l);Eo(a)}function ra(i){for(;i!=null;i=i.nextSibling){var a=i.nodeType;if(a===1||a===3)break;if(a===8){if(a=i.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return i}function $g(i){i=i.previousSibling;for(var a=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(a===0)return i;a--}else l==="/$"&&a++}i=i.previousSibling}return null}var bs=Math.random().toString(36).slice(2),sr="__reactFiber$"+bs,No="__reactProps$"+bs,Ar="__reactContainer$"+bs,Ud="__reactEvents$"+bs,vE="__reactListeners$"+bs,_E="__reactHandles$"+bs;function Ga(i){var a=i[sr];if(a)return a;for(var l=i.parentNode;l;){if(a=l[Ar]||l[sr]){if(l=a.alternate,a.child!==null||l!==null&&l.child!==null)for(i=$g(i);i!==null;){if(l=i[sr])return l;i=$g(i)}return a}i=l,l=i.parentNode}return null}function Oo(i){return i=i[sr]||i[Ar],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ws(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Ql(i){return i[No]||null}var Fd=[],Ts=-1;function aa(i){return{current:i}}function Yt(i){0>Ts||(i.current=Fd[Ts],Fd[Ts]=null,Ts--)}function Vt(i,a){Ts++,Fd[Ts]=i.current,i.current=a}var sa={},In=aa(sa),qn=aa(!1),Va=sa;function Rs(i,a){var l=i.type.contextTypes;if(!l)return sa;var c=i.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===a)return c.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=a[_];return c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=a,i.__reactInternalMemoizedMaskedChildContext=p),p}function Yn(i){return i=i.childContextTypes,i!=null}function eu(){Yt(qn),Yt(In)}function Xg(i,a,l){if(In.current!==sa)throw Error(t(168));Vt(In,a),Vt(qn,l)}function qg(i,a,l){var c=i.stateNode;if(a=a.childContextTypes,typeof c.getChildContext!="function")return l;c=c.getChildContext();for(var p in c)if(!(p in a))throw Error(t(108,we(i)||"Unknown",p));return Z({},l,c)}function tu(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||sa,Va=In.current,Vt(In,i),Vt(qn,qn.current),!0}function Yg(i,a,l){var c=i.stateNode;if(!c)throw Error(t(169));l?(i=qg(i,a,Va),c.__reactInternalMemoizedMergedChildContext=i,Yt(qn),Yt(In),Vt(In,i)):Yt(qn),Vt(qn,l)}var Cr=null,nu=!1,kd=!1;function Kg(i){Cr===null?Cr=[i]:Cr.push(i)}function yE(i){nu=!0,Kg(i)}function oa(){if(!kd&&Cr!==null){kd=!0;var i=0,a=et;try{var l=Cr;for(et=1;i<l.length;i++){var c=l[i];do c=c(!0);while(c!==null)}Cr=null,nu=!1}catch(p){throw Cr!==null&&(Cr=Cr.slice(i+1)),Ua(ea,oa),p}finally{et=a,kd=!1}}return null}var As=[],Cs=0,iu=null,ru=0,Mi=[],Ei=0,Wa=null,Pr=1,Lr="";function $a(i,a){As[Cs++]=ru,As[Cs++]=iu,iu=i,ru=a}function Zg(i,a,l){Mi[Ei++]=Pr,Mi[Ei++]=Lr,Mi[Ei++]=Wa,Wa=i;var c=Pr;i=Lr;var p=32-ee(c)-1;c&=~(1<<p),l+=1;var _=32-ee(a)+p;if(30<_){var R=p-p%5;_=(c&(1<<R)-1).toString(32),c>>=R,p-=R,Pr=1<<32-ee(a)+p|l<<p|c,Lr=_+i}else Pr=1<<_|l<<p|c,Lr=i}function Bd(i){i.return!==null&&($a(i,1),Zg(i,1,0))}function zd(i){for(;i===iu;)iu=As[--Cs],As[Cs]=null,ru=As[--Cs],As[Cs]=null;for(;i===Wa;)Wa=Mi[--Ei],Mi[Ei]=null,Lr=Mi[--Ei],Mi[Ei]=null,Pr=Mi[--Ei],Mi[Ei]=null}var li=null,ui=null,Jt=!1,Bi=null;function jg(i,a){var l=Ri(5,null,null,0);l.elementType="DELETED",l.stateNode=a,l.return=i,a=i.deletions,a===null?(i.deletions=[l],i.flags|=16):a.push(l)}function Jg(i,a){switch(i.tag){case 5:var l=i.type;return a=a.nodeType!==1||l.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(i.stateNode=a,li=i,ui=ra(a.firstChild),!0):!1;case 6:return a=i.pendingProps===""||a.nodeType!==3?null:a,a!==null?(i.stateNode=a,li=i,ui=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(l=Wa!==null?{id:Pr,overflow:Lr}:null,i.memoizedState={dehydrated:a,treeContext:l,retryLane:1073741824},l=Ri(18,null,null,0),l.stateNode=a,l.return=i,i.child=l,li=i,ui=null,!0):!1;default:return!1}}function Hd(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Gd(i){if(Jt){var a=ui;if(a){var l=a;if(!Jg(i,a)){if(Hd(i))throw Error(t(418));a=ra(l.nextSibling);var c=li;a&&Jg(i,a)?jg(c,l):(i.flags=i.flags&-4097|2,Jt=!1,li=i)}}else{if(Hd(i))throw Error(t(418));i.flags=i.flags&-4097|2,Jt=!1,li=i}}}function Qg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;li=i}function au(i){if(i!==li)return!1;if(!Jt)return Qg(i),Jt=!0,!1;var a;if((a=i.tag!==3)&&!(a=i.tag!==5)&&(a=i.type,a=a!=="head"&&a!=="body"&&!Dd(i.type,i.memoizedProps)),a&&(a=ui)){if(Hd(i))throw ev(),Error(t(418));for(;a;)jg(i,a),a=ra(a.nextSibling)}if(Qg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,a=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(a===0){ui=ra(i.nextSibling);break e}a--}else l!=="$"&&l!=="$!"&&l!=="$?"||a++}i=i.nextSibling}ui=null}}else ui=li?ra(i.stateNode.nextSibling):null;return!0}function ev(){for(var i=ui;i;)i=ra(i.nextSibling)}function Ps(){ui=li=null,Jt=!1}function Vd(i){Bi===null?Bi=[i]:Bi.push(i)}var SE=L.ReactCurrentBatchConfig;function Uo(i,a,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var c=l.stateNode}if(!c)throw Error(t(147,i));var p=c,_=""+i;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===_?a.ref:(a=function(R){var z=p.refs;R===null?delete z[_]:z[_]=R},a._stringRef=_,a)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function su(i,a){throw i=Object.prototype.toString.call(a),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":i))}function tv(i){var a=i._init;return a(i._payload)}function nv(i){function a(se,K){if(i){var le=se.deletions;le===null?(se.deletions=[K],se.flags|=16):le.push(K)}}function l(se,K){if(!i)return null;for(;K!==null;)a(se,K),K=K.sibling;return null}function c(se,K){for(se=new Map;K!==null;)K.key!==null?se.set(K.key,K):se.set(K.index,K),K=K.sibling;return se}function p(se,K){return se=ma(se,K),se.index=0,se.sibling=null,se}function _(se,K,le){return se.index=le,i?(le=se.alternate,le!==null?(le=le.index,le<K?(se.flags|=2,K):le):(se.flags|=2,K)):(se.flags|=1048576,K)}function R(se){return i&&se.alternate===null&&(se.flags|=2),se}function z(se,K,le,Ie){return K===null||K.tag!==6?(K=Of(le,se.mode,Ie),K.return=se,K):(K=p(K,le),K.return=se,K)}function $(se,K,le,Ie){var at=le.type;return at===b?Ee(se,K,le.props.children,Ie,le.key):K!==null&&(K.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===te&&tv(at)===K.type)?(Ie=p(K,le.props),Ie.ref=Uo(se,K,le),Ie.return=se,Ie):(Ie=Pu(le.type,le.key,le.props,null,se.mode,Ie),Ie.ref=Uo(se,K,le),Ie.return=se,Ie)}function de(se,K,le,Ie){return K===null||K.tag!==4||K.stateNode.containerInfo!==le.containerInfo||K.stateNode.implementation!==le.implementation?(K=Uf(le,se.mode,Ie),K.return=se,K):(K=p(K,le.children||[]),K.return=se,K)}function Ee(se,K,le,Ie,at){return K===null||K.tag!==7?(K=Qa(le,se.mode,Ie,at),K.return=se,K):(K=p(K,le),K.return=se,K)}function Re(se,K,le){if(typeof K=="string"&&K!==""||typeof K=="number")return K=Of(""+K,se.mode,le),K.return=se,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case N:return le=Pu(K.type,K.key,K.props,null,se.mode,le),le.ref=Uo(se,null,K),le.return=se,le;case I:return K=Uf(K,se.mode,le),K.return=se,K;case te:var Ie=K._init;return Re(se,Ie(K._payload),le)}if(Ot(K)||q(K))return K=Qa(K,se.mode,le,null),K.return=se,K;su(se,K)}return null}function xe(se,K,le,Ie){var at=K!==null?K.key:null;if(typeof le=="string"&&le!==""||typeof le=="number")return at!==null?null:z(se,K,""+le,Ie);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case N:return le.key===at?$(se,K,le,Ie):null;case I:return le.key===at?de(se,K,le,Ie):null;case te:return at=le._init,xe(se,K,at(le._payload),Ie)}if(Ot(le)||q(le))return at!==null?null:Ee(se,K,le,Ie,null);su(se,le)}return null}function Xe(se,K,le,Ie,at){if(typeof Ie=="string"&&Ie!==""||typeof Ie=="number")return se=se.get(le)||null,z(K,se,""+Ie,at);if(typeof Ie=="object"&&Ie!==null){switch(Ie.$$typeof){case N:return se=se.get(Ie.key===null?le:Ie.key)||null,$(K,se,Ie,at);case I:return se=se.get(Ie.key===null?le:Ie.key)||null,de(K,se,Ie,at);case te:var ut=Ie._init;return Xe(se,K,le,ut(Ie._payload),at)}if(Ot(Ie)||q(Ie))return se=se.get(le)||null,Ee(K,se,Ie,at,null);su(K,Ie)}return null}function tt(se,K,le,Ie){for(var at=null,ut=null,ct=K,ht=K=0,En=null;ct!==null&&ht<le.length;ht++){ct.index>ht?(En=ct,ct=null):En=ct.sibling;var Dt=xe(se,ct,le[ht],Ie);if(Dt===null){ct===null&&(ct=En);break}i&&ct&&Dt.alternate===null&&a(se,ct),K=_(Dt,K,ht),ut===null?at=Dt:ut.sibling=Dt,ut=Dt,ct=En}if(ht===le.length)return l(se,ct),Jt&&$a(se,ht),at;if(ct===null){for(;ht<le.length;ht++)ct=Re(se,le[ht],Ie),ct!==null&&(K=_(ct,K,ht),ut===null?at=ct:ut.sibling=ct,ut=ct);return Jt&&$a(se,ht),at}for(ct=c(se,ct);ht<le.length;ht++)En=Xe(ct,se,ht,le[ht],Ie),En!==null&&(i&&En.alternate!==null&&ct.delete(En.key===null?ht:En.key),K=_(En,K,ht),ut===null?at=En:ut.sibling=En,ut=En);return i&&ct.forEach(function(ga){return a(se,ga)}),Jt&&$a(se,ht),at}function nt(se,K,le,Ie){var at=q(le);if(typeof at!="function")throw Error(t(150));if(le=at.call(le),le==null)throw Error(t(151));for(var ut=at=null,ct=K,ht=K=0,En=null,Dt=le.next();ct!==null&&!Dt.done;ht++,Dt=le.next()){ct.index>ht?(En=ct,ct=null):En=ct.sibling;var ga=xe(se,ct,Dt.value,Ie);if(ga===null){ct===null&&(ct=En);break}i&&ct&&ga.alternate===null&&a(se,ct),K=_(ga,K,ht),ut===null?at=ga:ut.sibling=ga,ut=ga,ct=En}if(Dt.done)return l(se,ct),Jt&&$a(se,ht),at;if(ct===null){for(;!Dt.done;ht++,Dt=le.next())Dt=Re(se,Dt.value,Ie),Dt!==null&&(K=_(Dt,K,ht),ut===null?at=Dt:ut.sibling=Dt,ut=Dt);return Jt&&$a(se,ht),at}for(ct=c(se,ct);!Dt.done;ht++,Dt=le.next())Dt=Xe(ct,se,ht,Dt.value,Ie),Dt!==null&&(i&&Dt.alternate!==null&&ct.delete(Dt.key===null?ht:Dt.key),K=_(Dt,K,ht),ut===null?at=Dt:ut.sibling=Dt,ut=Dt);return i&&ct.forEach(function(QE){return a(se,QE)}),Jt&&$a(se,ht),at}function fn(se,K,le,Ie){if(typeof le=="object"&&le!==null&&le.type===b&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case N:e:{for(var at=le.key,ut=K;ut!==null;){if(ut.key===at){if(at=le.type,at===b){if(ut.tag===7){l(se,ut.sibling),K=p(ut,le.props.children),K.return=se,se=K;break e}}else if(ut.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===te&&tv(at)===ut.type){l(se,ut.sibling),K=p(ut,le.props),K.ref=Uo(se,ut,le),K.return=se,se=K;break e}l(se,ut);break}else a(se,ut);ut=ut.sibling}le.type===b?(K=Qa(le.props.children,se.mode,Ie,le.key),K.return=se,se=K):(Ie=Pu(le.type,le.key,le.props,null,se.mode,Ie),Ie.ref=Uo(se,K,le),Ie.return=se,se=Ie)}return R(se);case I:e:{for(ut=le.key;K!==null;){if(K.key===ut)if(K.tag===4&&K.stateNode.containerInfo===le.containerInfo&&K.stateNode.implementation===le.implementation){l(se,K.sibling),K=p(K,le.children||[]),K.return=se,se=K;break e}else{l(se,K);break}else a(se,K);K=K.sibling}K=Uf(le,se.mode,Ie),K.return=se,se=K}return R(se);case te:return ut=le._init,fn(se,K,ut(le._payload),Ie)}if(Ot(le))return tt(se,K,le,Ie);if(q(le))return nt(se,K,le,Ie);su(se,le)}return typeof le=="string"&&le!==""||typeof le=="number"?(le=""+le,K!==null&&K.tag===6?(l(se,K.sibling),K=p(K,le),K.return=se,se=K):(l(se,K),K=Of(le,se.mode,Ie),K.return=se,se=K),R(se)):l(se,K)}return fn}var Ls=nv(!0),iv=nv(!1),ou=aa(null),lu=null,Is=null,Wd=null;function $d(){Wd=Is=lu=null}function Xd(i){var a=ou.current;Yt(ou),i._currentValue=a}function qd(i,a,l){for(;i!==null;){var c=i.alternate;if((i.childLanes&a)!==a?(i.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),i===l)break;i=i.return}}function Ds(i,a){lu=i,Wd=Is=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&a)!==0&&(Kn=!0),i.firstContext=null)}function bi(i){var a=i._currentValue;if(Wd!==i)if(i={context:i,memoizedValue:a,next:null},Is===null){if(lu===null)throw Error(t(308));Is=i,lu.dependencies={lanes:0,firstContext:i}}else Is=Is.next=i;return a}var Xa=null;function Yd(i){Xa===null?Xa=[i]:Xa.push(i)}function rv(i,a,l,c){var p=a.interleaved;return p===null?(l.next=l,Yd(a)):(l.next=p.next,p.next=l),a.interleaved=l,Ir(i,c)}function Ir(i,a){i.lanes|=a;var l=i.alternate;for(l!==null&&(l.lanes|=a),l=i,i=i.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),l=i,i=i.return;return l.tag===3?l.stateNode:null}var la=!1;function Kd(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function av(i,a){i=i.updateQueue,a.updateQueue===i&&(a.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Dr(i,a){return{eventTime:i,lane:a,tag:0,payload:null,callback:null,next:null}}function ua(i,a,l){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(Lt&2)!==0){var p=c.pending;return p===null?a.next=a:(a.next=p.next,p.next=a),c.pending=a,Ir(i,l)}return p=c.interleaved,p===null?(a.next=a,Yd(c)):(a.next=p.next,p.next=a),c.interleaved=a,Ir(i,l)}function uu(i,a,l){if(a=a.updateQueue,a!==null&&(a=a.shared,(l&4194240)!==0)){var c=a.lanes;c&=i.pendingLanes,l|=c,a.lanes=l,an(i,l)}}function sv(i,a){var l=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var R={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=R:_=_.next=R,l=l.next}while(l!==null);_===null?p=_=a:_=_.next=a}else p=_=a;l={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:c.shared,effects:c.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=a:i.next=a,l.lastBaseUpdate=a}function cu(i,a,l,c){var p=i.updateQueue;la=!1;var _=p.firstBaseUpdate,R=p.lastBaseUpdate,z=p.shared.pending;if(z!==null){p.shared.pending=null;var $=z,de=$.next;$.next=null,R===null?_=de:R.next=de,R=$;var Ee=i.alternate;Ee!==null&&(Ee=Ee.updateQueue,z=Ee.lastBaseUpdate,z!==R&&(z===null?Ee.firstBaseUpdate=de:z.next=de,Ee.lastBaseUpdate=$))}if(_!==null){var Re=p.baseState;R=0,Ee=de=$=null,z=_;do{var xe=z.lane,Xe=z.eventTime;if((c&xe)===xe){Ee!==null&&(Ee=Ee.next={eventTime:Xe,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var tt=i,nt=z;switch(xe=a,Xe=l,nt.tag){case 1:if(tt=nt.payload,typeof tt=="function"){Re=tt.call(Xe,Re,xe);break e}Re=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=nt.payload,xe=typeof tt=="function"?tt.call(Xe,Re,xe):tt,xe==null)break e;Re=Z({},Re,xe);break e;case 2:la=!0}}z.callback!==null&&z.lane!==0&&(i.flags|=64,xe=p.effects,xe===null?p.effects=[z]:xe.push(z))}else Xe={eventTime:Xe,lane:xe,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Ee===null?(de=Ee=Xe,$=Re):Ee=Ee.next=Xe,R|=xe;if(z=z.next,z===null){if(z=p.shared.pending,z===null)break;xe=z,z=xe.next,xe.next=null,p.lastBaseUpdate=xe,p.shared.pending=null}}while(!0);if(Ee===null&&($=Re),p.baseState=$,p.firstBaseUpdate=de,p.lastBaseUpdate=Ee,a=p.shared.interleaved,a!==null){p=a;do R|=p.lane,p=p.next;while(p!==a)}else _===null&&(p.shared.lanes=0);Ka|=R,i.lanes=R,i.memoizedState=Re}}function ov(i,a,l){if(i=a.effects,a.effects=null,i!==null)for(a=0;a<i.length;a++){var c=i[a],p=c.callback;if(p!==null){if(c.callback=null,c=l,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var Fo={},or=aa(Fo),ko=aa(Fo),Bo=aa(Fo);function qa(i){if(i===Fo)throw Error(t(174));return i}function Zd(i,a){switch(Vt(Bo,a),Vt(ko,i),Vt(or,Fo),i=a.nodeType,i){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:Ft(null,"");break;default:i=i===8?a.parentNode:a,a=i.namespaceURI||null,i=i.tagName,a=Ft(a,i)}Yt(or),Vt(or,a)}function Ns(){Yt(or),Yt(ko),Yt(Bo)}function lv(i){qa(Bo.current);var a=qa(or.current),l=Ft(a,i.type);a!==l&&(Vt(ko,i),Vt(or,l))}function jd(i){ko.current===i&&(Yt(or),Yt(ko))}var tn=aa(0);function du(i){for(var a=i;a!==null;){if(a.tag===13){var l=a.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Jd=[];function Qd(){for(var i=0;i<Jd.length;i++)Jd[i]._workInProgressVersionPrimary=null;Jd.length=0}var fu=L.ReactCurrentDispatcher,ef=L.ReactCurrentBatchConfig,Ya=0,nn=null,vn=null,xn=null,hu=!1,zo=!1,Ho=0,xE=0;function Dn(){throw Error(t(321))}function tf(i,a){if(a===null)return!1;for(var l=0;l<a.length&&l<i.length;l++)if(!ki(i[l],a[l]))return!1;return!0}function nf(i,a,l,c,p,_){if(Ya=_,nn=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,fu.current=i===null||i.memoizedState===null?wE:TE,i=l(c,p),zo){_=0;do{if(zo=!1,Ho=0,25<=_)throw Error(t(301));_+=1,xn=vn=null,a.updateQueue=null,fu.current=RE,i=l(c,p)}while(zo)}if(fu.current=gu,a=vn!==null&&vn.next!==null,Ya=0,xn=vn=nn=null,hu=!1,a)throw Error(t(300));return i}function rf(){var i=Ho!==0;return Ho=0,i}function lr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?nn.memoizedState=xn=i:xn=xn.next=i,xn}function wi(){if(vn===null){var i=nn.alternate;i=i!==null?i.memoizedState:null}else i=vn.next;var a=xn===null?nn.memoizedState:xn.next;if(a!==null)xn=a,vn=i;else{if(i===null)throw Error(t(310));vn=i,i={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},xn===null?nn.memoizedState=xn=i:xn=xn.next=i}return xn}function Go(i,a){return typeof a=="function"?a(i):a}function af(i){var a=wi(),l=a.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var c=vn,p=c.baseQueue,_=l.pending;if(_!==null){if(p!==null){var R=p.next;p.next=_.next,_.next=R}c.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,c=c.baseState;var z=R=null,$=null,de=_;do{var Ee=de.lane;if((Ya&Ee)===Ee)$!==null&&($=$.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),c=de.hasEagerState?de.eagerState:i(c,de.action);else{var Re={lane:Ee,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};$===null?(z=$=Re,R=c):$=$.next=Re,nn.lanes|=Ee,Ka|=Ee}de=de.next}while(de!==null&&de!==_);$===null?R=c:$.next=z,ki(c,a.memoizedState)||(Kn=!0),a.memoizedState=c,a.baseState=R,a.baseQueue=$,l.lastRenderedState=c}if(i=l.interleaved,i!==null){p=i;do _=p.lane,nn.lanes|=_,Ka|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[a.memoizedState,l.dispatch]}function sf(i){var a=wi(),l=a.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var c=l.dispatch,p=l.pending,_=a.memoizedState;if(p!==null){l.pending=null;var R=p=p.next;do _=i(_,R.action),R=R.next;while(R!==p);ki(_,a.memoizedState)||(Kn=!0),a.memoizedState=_,a.baseQueue===null&&(a.baseState=_),l.lastRenderedState=_}return[_,c]}function uv(){}function cv(i,a){var l=nn,c=wi(),p=a(),_=!ki(c.memoizedState,p);if(_&&(c.memoizedState=p,Kn=!0),c=c.queue,of(hv.bind(null,l,c,i),[i]),c.getSnapshot!==a||_||xn!==null&&xn.memoizedState.tag&1){if(l.flags|=2048,Vo(9,fv.bind(null,l,c,p,a),void 0,null),Mn===null)throw Error(t(349));(Ya&30)!==0||dv(l,a,p)}return p}function dv(i,a,l){i.flags|=16384,i={getSnapshot:a,value:l},a=nn.updateQueue,a===null?(a={lastEffect:null,stores:null},nn.updateQueue=a,a.stores=[i]):(l=a.stores,l===null?a.stores=[i]:l.push(i))}function fv(i,a,l,c){a.value=l,a.getSnapshot=c,pv(a)&&mv(i)}function hv(i,a,l){return l(function(){pv(a)&&mv(i)})}function pv(i){var a=i.getSnapshot;i=i.value;try{var l=a();return!ki(i,l)}catch{return!0}}function mv(i){var a=Ir(i,1);a!==null&&Vi(a,i,1,-1)}function gv(i){var a=lr();return typeof i=="function"&&(i=i()),a.memoizedState=a.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:i},a.queue=i,i=i.dispatch=bE.bind(null,nn,i),[a.memoizedState,i]}function Vo(i,a,l,c){return i={tag:i,create:a,destroy:l,deps:c,next:null},a=nn.updateQueue,a===null?(a={lastEffect:null,stores:null},nn.updateQueue=a,a.lastEffect=i.next=i):(l=a.lastEffect,l===null?a.lastEffect=i.next=i:(c=l.next,l.next=i,i.next=c,a.lastEffect=i)),i}function vv(){return wi().memoizedState}function pu(i,a,l,c){var p=lr();nn.flags|=i,p.memoizedState=Vo(1|a,l,void 0,c===void 0?null:c)}function mu(i,a,l,c){var p=wi();c=c===void 0?null:c;var _=void 0;if(vn!==null){var R=vn.memoizedState;if(_=R.destroy,c!==null&&tf(c,R.deps)){p.memoizedState=Vo(a,l,_,c);return}}nn.flags|=i,p.memoizedState=Vo(1|a,l,_,c)}function _v(i,a){return pu(8390656,8,i,a)}function of(i,a){return mu(2048,8,i,a)}function yv(i,a){return mu(4,2,i,a)}function Sv(i,a){return mu(4,4,i,a)}function xv(i,a){if(typeof a=="function")return i=i(),a(i),function(){a(null)};if(a!=null)return i=i(),a.current=i,function(){a.current=null}}function Mv(i,a,l){return l=l!=null?l.concat([i]):null,mu(4,4,xv.bind(null,a,i),l)}function lf(){}function Ev(i,a){var l=wi();a=a===void 0?null:a;var c=l.memoizedState;return c!==null&&a!==null&&tf(a,c[1])?c[0]:(l.memoizedState=[i,a],i)}function bv(i,a){var l=wi();a=a===void 0?null:a;var c=l.memoizedState;return c!==null&&a!==null&&tf(a,c[1])?c[0]:(i=i(),l.memoizedState=[i,a],i)}function wv(i,a,l){return(Ya&21)===0?(i.baseState&&(i.baseState=!1,Kn=!0),i.memoizedState=l):(ki(l,a)||(l=It(),nn.lanes|=l,Ka|=l,i.baseState=!0),a)}function ME(i,a){var l=et;et=l!==0&&4>l?l:4,i(!0);var c=ef.transition;ef.transition={};try{i(!1),a()}finally{et=l,ef.transition=c}}function Tv(){return wi().memoizedState}function EE(i,a,l){var c=ha(i);if(l={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null},Rv(i))Av(a,l);else if(l=rv(i,a,l,c),l!==null){var p=Gn();Vi(l,i,c,p),Cv(l,a,c)}}function bE(i,a,l){var c=ha(i),p={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null};if(Rv(i))Av(a,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=a.lastRenderedReducer,_!==null))try{var R=a.lastRenderedState,z=_(R,l);if(p.hasEagerState=!0,p.eagerState=z,ki(z,R)){var $=a.interleaved;$===null?(p.next=p,Yd(a)):(p.next=$.next,$.next=p),a.interleaved=p;return}}catch{}finally{}l=rv(i,a,p,c),l!==null&&(p=Gn(),Vi(l,i,c,p),Cv(l,a,c))}}function Rv(i){var a=i.alternate;return i===nn||a!==null&&a===nn}function Av(i,a){zo=hu=!0;var l=i.pending;l===null?a.next=a:(a.next=l.next,l.next=a),i.pending=a}function Cv(i,a,l){if((l&4194240)!==0){var c=a.lanes;c&=i.pendingLanes,l|=c,a.lanes=l,an(i,l)}}var gu={readContext:bi,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useInsertionEffect:Dn,useLayoutEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useMutableSource:Dn,useSyncExternalStore:Dn,useId:Dn,unstable_isNewReconciler:!1},wE={readContext:bi,useCallback:function(i,a){return lr().memoizedState=[i,a===void 0?null:a],i},useContext:bi,useEffect:_v,useImperativeHandle:function(i,a,l){return l=l!=null?l.concat([i]):null,pu(4194308,4,xv.bind(null,a,i),l)},useLayoutEffect:function(i,a){return pu(4194308,4,i,a)},useInsertionEffect:function(i,a){return pu(4,2,i,a)},useMemo:function(i,a){var l=lr();return a=a===void 0?null:a,i=i(),l.memoizedState=[i,a],i},useReducer:function(i,a,l){var c=lr();return a=l!==void 0?l(a):a,c.memoizedState=c.baseState=a,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:a},c.queue=i,i=i.dispatch=EE.bind(null,nn,i),[c.memoizedState,i]},useRef:function(i){var a=lr();return i={current:i},a.memoizedState=i},useState:gv,useDebugValue:lf,useDeferredValue:function(i){return lr().memoizedState=i},useTransition:function(){var i=gv(!1),a=i[0];return i=ME.bind(null,i[1]),lr().memoizedState=i,[a,i]},useMutableSource:function(){},useSyncExternalStore:function(i,a,l){var c=nn,p=lr();if(Jt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=a(),Mn===null)throw Error(t(349));(Ya&30)!==0||dv(c,a,l)}p.memoizedState=l;var _={value:l,getSnapshot:a};return p.queue=_,_v(hv.bind(null,c,_,i),[i]),c.flags|=2048,Vo(9,fv.bind(null,c,_,l,a),void 0,null),l},useId:function(){var i=lr(),a=Mn.identifierPrefix;if(Jt){var l=Lr,c=Pr;l=(c&~(1<<32-ee(c)-1)).toString(32)+l,a=":"+a+"R"+l,l=Ho++,0<l&&(a+="H"+l.toString(32)),a+=":"}else l=xE++,a=":"+a+"r"+l.toString(32)+":";return i.memoizedState=a},unstable_isNewReconciler:!1},TE={readContext:bi,useCallback:Ev,useContext:bi,useEffect:of,useImperativeHandle:Mv,useInsertionEffect:yv,useLayoutEffect:Sv,useMemo:bv,useReducer:af,useRef:vv,useState:function(){return af(Go)},useDebugValue:lf,useDeferredValue:function(i){var a=wi();return wv(a,vn.memoizedState,i)},useTransition:function(){var i=af(Go)[0],a=wi().memoizedState;return[i,a]},useMutableSource:uv,useSyncExternalStore:cv,useId:Tv,unstable_isNewReconciler:!1},RE={readContext:bi,useCallback:Ev,useContext:bi,useEffect:of,useImperativeHandle:Mv,useInsertionEffect:yv,useLayoutEffect:Sv,useMemo:bv,useReducer:sf,useRef:vv,useState:function(){return sf(Go)},useDebugValue:lf,useDeferredValue:function(i){var a=wi();return vn===null?a.memoizedState=i:wv(a,vn.memoizedState,i)},useTransition:function(){var i=sf(Go)[0],a=wi().memoizedState;return[i,a]},useMutableSource:uv,useSyncExternalStore:cv,useId:Tv,unstable_isNewReconciler:!1};function zi(i,a){if(i&&i.defaultProps){a=Z({},a),i=i.defaultProps;for(var l in i)a[l]===void 0&&(a[l]=i[l]);return a}return a}function uf(i,a,l,c){a=i.memoizedState,l=l(c,a),l=l==null?a:Z({},a,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var vu={isMounted:function(i){return(i=i._reactInternals)?xi(i)===i:!1},enqueueSetState:function(i,a,l){i=i._reactInternals;var c=Gn(),p=ha(i),_=Dr(c,p);_.payload=a,l!=null&&(_.callback=l),a=ua(i,_,p),a!==null&&(Vi(a,i,p,c),uu(a,i,p))},enqueueReplaceState:function(i,a,l){i=i._reactInternals;var c=Gn(),p=ha(i),_=Dr(c,p);_.tag=1,_.payload=a,l!=null&&(_.callback=l),a=ua(i,_,p),a!==null&&(Vi(a,i,p,c),uu(a,i,p))},enqueueForceUpdate:function(i,a){i=i._reactInternals;var l=Gn(),c=ha(i),p=Dr(l,c);p.tag=2,a!=null&&(p.callback=a),a=ua(i,p,c),a!==null&&(Vi(a,i,c,l),uu(a,i,c))}};function Pv(i,a,l,c,p,_,R){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,_,R):a.prototype&&a.prototype.isPureReactComponent?!Co(l,c)||!Co(p,_):!0}function Lv(i,a,l){var c=!1,p=sa,_=a.contextType;return typeof _=="object"&&_!==null?_=bi(_):(p=Yn(a)?Va:In.current,c=a.contextTypes,_=(c=c!=null)?Rs(i,p):sa),a=new a(l,_),i.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=vu,i.stateNode=a,a._reactInternals=i,c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),a}function Iv(i,a,l,c){i=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(l,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(l,c),a.state!==i&&vu.enqueueReplaceState(a,a.state,null)}function cf(i,a,l,c){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},Kd(i);var _=a.contextType;typeof _=="object"&&_!==null?p.context=bi(_):(_=Yn(a)?Va:In.current,p.context=Rs(i,_)),p.state=i.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(uf(i,a,_,l),p.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(a=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),a!==p.state&&vu.enqueueReplaceState(p,p.state,null),cu(i,l,p,c),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Os(i,a){try{var l="",c=a;do l+=ye(c),c=c.return;while(c);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:a,stack:p,digest:null}}function df(i,a,l){return{value:i,source:null,stack:l??null,digest:a??null}}function ff(i,a){try{console.error(a.value)}catch(l){setTimeout(function(){throw l})}}var AE=typeof WeakMap=="function"?WeakMap:Map;function Dv(i,a,l){l=Dr(-1,l),l.tag=3,l.payload={element:null};var c=a.value;return l.callback=function(){bu||(bu=!0,Rf=c),ff(i,a)},l}function Nv(i,a,l){l=Dr(-1,l),l.tag=3;var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var p=a.value;l.payload=function(){return c(p)},l.callback=function(){ff(i,a)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){ff(i,a),typeof c!="function"&&(da===null?da=new Set([this]):da.add(this));var R=a.stack;this.componentDidCatch(a.value,{componentStack:R!==null?R:""})}),l}function Ov(i,a,l){var c=i.pingCache;if(c===null){c=i.pingCache=new AE;var p=new Set;c.set(a,p)}else p=c.get(a),p===void 0&&(p=new Set,c.set(a,p));p.has(l)||(p.add(l),i=GE.bind(null,i,a,l),a.then(i,i))}function Uv(i){do{var a;if((a=i.tag===13)&&(a=i.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return i;i=i.return}while(i!==null);return null}function Fv(i,a,l,c,p){return(i.mode&1)===0?(i===a?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(a=Dr(-1,1),a.tag=2,ua(l,a,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var CE=L.ReactCurrentOwner,Kn=!1;function Hn(i,a,l,c){a.child=i===null?iv(a,null,l,c):Ls(a,i.child,l,c)}function kv(i,a,l,c,p){l=l.render;var _=a.ref;return Ds(a,p),c=nf(i,a,l,c,_,p),l=rf(),i!==null&&!Kn?(a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~p,Nr(i,a,p)):(Jt&&l&&Bd(a),a.flags|=1,Hn(i,a,c,p),a.child)}function Bv(i,a,l,c,p){if(i===null){var _=l.type;return typeof _=="function"&&!Nf(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(a.tag=15,a.type=_,zv(i,a,_,c,p)):(i=Pu(l.type,null,c,a,a.mode,p),i.ref=a.ref,i.return=a,a.child=i)}if(_=i.child,(i.lanes&p)===0){var R=_.memoizedProps;if(l=l.compare,l=l!==null?l:Co,l(R,c)&&i.ref===a.ref)return Nr(i,a,p)}return a.flags|=1,i=ma(_,c),i.ref=a.ref,i.return=a,a.child=i}function zv(i,a,l,c,p){if(i!==null){var _=i.memoizedProps;if(Co(_,c)&&i.ref===a.ref)if(Kn=!1,a.pendingProps=c=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(Kn=!0);else return a.lanes=i.lanes,Nr(i,a,p)}return hf(i,a,l,c,p)}function Hv(i,a,l){var c=a.pendingProps,p=c.children,_=i!==null?i.memoizedState:null;if(c.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(Fs,ci),ci|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:i,cachePool:null,transitions:null},a.updateQueue=null,Vt(Fs,ci),ci|=i,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=_!==null?_.baseLanes:l,Vt(Fs,ci),ci|=c}else _!==null?(c=_.baseLanes|l,a.memoizedState=null):c=l,Vt(Fs,ci),ci|=c;return Hn(i,a,p,l),a.child}function Gv(i,a){var l=a.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(a.flags|=512,a.flags|=2097152)}function hf(i,a,l,c,p){var _=Yn(l)?Va:In.current;return _=Rs(a,_),Ds(a,p),l=nf(i,a,l,c,_,p),c=rf(),i!==null&&!Kn?(a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~p,Nr(i,a,p)):(Jt&&c&&Bd(a),a.flags|=1,Hn(i,a,l,p),a.child)}function Vv(i,a,l,c,p){if(Yn(l)){var _=!0;tu(a)}else _=!1;if(Ds(a,p),a.stateNode===null)yu(i,a),Lv(a,l,c),cf(a,l,c,p),c=!0;else if(i===null){var R=a.stateNode,z=a.memoizedProps;R.props=z;var $=R.context,de=l.contextType;typeof de=="object"&&de!==null?de=bi(de):(de=Yn(l)?Va:In.current,de=Rs(a,de));var Ee=l.getDerivedStateFromProps,Re=typeof Ee=="function"||typeof R.getSnapshotBeforeUpdate=="function";Re||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(z!==c||$!==de)&&Iv(a,R,c,de),la=!1;var xe=a.memoizedState;R.state=xe,cu(a,c,R,p),$=a.memoizedState,z!==c||xe!==$||qn.current||la?(typeof Ee=="function"&&(uf(a,l,Ee,c),$=a.memoizedState),(z=la||Pv(a,l,z,c,xe,$,de))?(Re||typeof R.UNSAFE_componentWillMount!="function"&&typeof R.componentWillMount!="function"||(typeof R.componentWillMount=="function"&&R.componentWillMount(),typeof R.UNSAFE_componentWillMount=="function"&&R.UNSAFE_componentWillMount()),typeof R.componentDidMount=="function"&&(a.flags|=4194308)):(typeof R.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=$),R.props=c,R.state=$,R.context=de,c=z):(typeof R.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{R=a.stateNode,av(i,a),z=a.memoizedProps,de=a.type===a.elementType?z:zi(a.type,z),R.props=de,Re=a.pendingProps,xe=R.context,$=l.contextType,typeof $=="object"&&$!==null?$=bi($):($=Yn(l)?Va:In.current,$=Rs(a,$));var Xe=l.getDerivedStateFromProps;(Ee=typeof Xe=="function"||typeof R.getSnapshotBeforeUpdate=="function")||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(z!==Re||xe!==$)&&Iv(a,R,c,$),la=!1,xe=a.memoizedState,R.state=xe,cu(a,c,R,p);var tt=a.memoizedState;z!==Re||xe!==tt||qn.current||la?(typeof Xe=="function"&&(uf(a,l,Xe,c),tt=a.memoizedState),(de=la||Pv(a,l,de,c,xe,tt,$)||!1)?(Ee||typeof R.UNSAFE_componentWillUpdate!="function"&&typeof R.componentWillUpdate!="function"||(typeof R.componentWillUpdate=="function"&&R.componentWillUpdate(c,tt,$),typeof R.UNSAFE_componentWillUpdate=="function"&&R.UNSAFE_componentWillUpdate(c,tt,$)),typeof R.componentDidUpdate=="function"&&(a.flags|=4),typeof R.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof R.componentDidUpdate!="function"||z===i.memoizedProps&&xe===i.memoizedState||(a.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&xe===i.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=tt),R.props=c,R.state=tt,R.context=$,c=de):(typeof R.componentDidUpdate!="function"||z===i.memoizedProps&&xe===i.memoizedState||(a.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&xe===i.memoizedState||(a.flags|=1024),c=!1)}return pf(i,a,l,c,_,p)}function pf(i,a,l,c,p,_){Gv(i,a);var R=(a.flags&128)!==0;if(!c&&!R)return p&&Yg(a,l,!1),Nr(i,a,_);c=a.stateNode,CE.current=a;var z=R&&typeof l.getDerivedStateFromError!="function"?null:c.render();return a.flags|=1,i!==null&&R?(a.child=Ls(a,i.child,null,_),a.child=Ls(a,null,z,_)):Hn(i,a,z,_),a.memoizedState=c.state,p&&Yg(a,l,!0),a.child}function Wv(i){var a=i.stateNode;a.pendingContext?Xg(i,a.pendingContext,a.pendingContext!==a.context):a.context&&Xg(i,a.context,!1),Zd(i,a.containerInfo)}function $v(i,a,l,c,p){return Ps(),Vd(p),a.flags|=256,Hn(i,a,l,c),a.child}var mf={dehydrated:null,treeContext:null,retryLane:0};function gf(i){return{baseLanes:i,cachePool:null,transitions:null}}function Xv(i,a,l){var c=a.pendingProps,p=tn.current,_=!1,R=(a.flags&128)!==0,z;if((z=R)||(z=i!==null&&i.memoizedState===null?!1:(p&2)!==0),z?(_=!0,a.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Vt(tn,p&1),i===null)return Gd(a),i=a.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((a.mode&1)===0?a.lanes=1:i.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(R=c.children,i=c.fallback,_?(c=a.mode,_=a.child,R={mode:"hidden",children:R},(c&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=R):_=Lu(R,c,0,null),i=Qa(i,c,l,null),_.return=a,i.return=a,_.sibling=i,a.child=_,a.child.memoizedState=gf(l),a.memoizedState=mf,i):vf(a,R));if(p=i.memoizedState,p!==null&&(z=p.dehydrated,z!==null))return PE(i,a,R,c,z,p,l);if(_){_=c.fallback,R=a.mode,p=i.child,z=p.sibling;var $={mode:"hidden",children:c.children};return(R&1)===0&&a.child!==p?(c=a.child,c.childLanes=0,c.pendingProps=$,a.deletions=null):(c=ma(p,$),c.subtreeFlags=p.subtreeFlags&14680064),z!==null?_=ma(z,_):(_=Qa(_,R,l,null),_.flags|=2),_.return=a,c.return=a,c.sibling=_,a.child=c,c=_,_=a.child,R=i.child.memoizedState,R=R===null?gf(l):{baseLanes:R.baseLanes|l,cachePool:null,transitions:R.transitions},_.memoizedState=R,_.childLanes=i.childLanes&~l,a.memoizedState=mf,c}return _=i.child,i=_.sibling,c=ma(_,{mode:"visible",children:c.children}),(a.mode&1)===0&&(c.lanes=l),c.return=a,c.sibling=null,i!==null&&(l=a.deletions,l===null?(a.deletions=[i],a.flags|=16):l.push(i)),a.child=c,a.memoizedState=null,c}function vf(i,a){return a=Lu({mode:"visible",children:a},i.mode,0,null),a.return=i,i.child=a}function _u(i,a,l,c){return c!==null&&Vd(c),Ls(a,i.child,null,l),i=vf(a,a.pendingProps.children),i.flags|=2,a.memoizedState=null,i}function PE(i,a,l,c,p,_,R){if(l)return a.flags&256?(a.flags&=-257,c=df(Error(t(422))),_u(i,a,R,c)):a.memoizedState!==null?(a.child=i.child,a.flags|=128,null):(_=c.fallback,p=a.mode,c=Lu({mode:"visible",children:c.children},p,0,null),_=Qa(_,p,R,null),_.flags|=2,c.return=a,_.return=a,c.sibling=_,a.child=c,(a.mode&1)!==0&&Ls(a,i.child,null,R),a.child.memoizedState=gf(R),a.memoizedState=mf,_);if((a.mode&1)===0)return _u(i,a,R,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var z=c.dgst;return c=z,_=Error(t(419)),c=df(_,c,void 0),_u(i,a,R,c)}if(z=(R&i.childLanes)!==0,Kn||z){if(c=Mn,c!==null){switch(R&-R){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|R))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Ir(i,p),Vi(c,i,p,-1))}return Df(),c=df(Error(t(421))),_u(i,a,R,c)}return p.data==="$?"?(a.flags|=128,a.child=i.child,a=VE.bind(null,i),p._reactRetry=a,null):(i=_.treeContext,ui=ra(p.nextSibling),li=a,Jt=!0,Bi=null,i!==null&&(Mi[Ei++]=Pr,Mi[Ei++]=Lr,Mi[Ei++]=Wa,Pr=i.id,Lr=i.overflow,Wa=a),a=vf(a,c.children),a.flags|=4096,a)}function qv(i,a,l){i.lanes|=a;var c=i.alternate;c!==null&&(c.lanes|=a),qd(i.return,a,l)}function _f(i,a,l,c,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:p}:(_.isBackwards=a,_.rendering=null,_.renderingStartTime=0,_.last=c,_.tail=l,_.tailMode=p)}function Yv(i,a,l){var c=a.pendingProps,p=c.revealOrder,_=c.tail;if(Hn(i,a,c.children,l),c=tn.current,(c&2)!==0)c=c&1|2,a.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=a.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&qv(i,l,a);else if(i.tag===19)qv(i,l,a);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break e;for(;i.sibling===null;){if(i.return===null||i.return===a)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}if(Vt(tn,c),(a.mode&1)===0)a.memoizedState=null;else switch(p){case"forwards":for(l=a.child,p=null;l!==null;)i=l.alternate,i!==null&&du(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=a.child,a.child=null):(p=l.sibling,l.sibling=null),_f(a,!1,p,l,_);break;case"backwards":for(l=null,p=a.child,a.child=null;p!==null;){if(i=p.alternate,i!==null&&du(i)===null){a.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}_f(a,!0,l,null,_);break;case"together":_f(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function yu(i,a){(a.mode&1)===0&&i!==null&&(i.alternate=null,a.alternate=null,a.flags|=2)}function Nr(i,a,l){if(i!==null&&(a.dependencies=i.dependencies),Ka|=a.lanes,(l&a.childLanes)===0)return null;if(i!==null&&a.child!==i.child)throw Error(t(153));if(a.child!==null){for(i=a.child,l=ma(i,i.pendingProps),a.child=l,l.return=a;i.sibling!==null;)i=i.sibling,l=l.sibling=ma(i,i.pendingProps),l.return=a;l.sibling=null}return a.child}function LE(i,a,l){switch(a.tag){case 3:Wv(a),Ps();break;case 5:lv(a);break;case 1:Yn(a.type)&&tu(a);break;case 4:Zd(a,a.stateNode.containerInfo);break;case 10:var c=a.type._context,p=a.memoizedProps.value;Vt(ou,c._currentValue),c._currentValue=p;break;case 13:if(c=a.memoizedState,c!==null)return c.dehydrated!==null?(Vt(tn,tn.current&1),a.flags|=128,null):(l&a.child.childLanes)!==0?Xv(i,a,l):(Vt(tn,tn.current&1),i=Nr(i,a,l),i!==null?i.sibling:null);Vt(tn,tn.current&1);break;case 19:if(c=(l&a.childLanes)!==0,(i.flags&128)!==0){if(c)return Yv(i,a,l);a.flags|=128}if(p=a.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Vt(tn,tn.current),c)break;return null;case 22:case 23:return a.lanes=0,Hv(i,a,l)}return Nr(i,a,l)}var Kv,yf,Zv,jv;Kv=function(i,a){for(var l=a.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===a)break;for(;l.sibling===null;){if(l.return===null||l.return===a)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},yf=function(){},Zv=function(i,a,l,c){var p=i.memoizedProps;if(p!==c){i=a.stateNode,qa(or.current);var _=null;switch(l){case"input":p=ze(i,p),c=ze(i,c),_=[];break;case"select":p=Z({},p,{value:void 0}),c=Z({},c,{value:void 0}),_=[];break;case"textarea":p=cn(i,p),c=cn(i,c),_=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(i.onclick=Jl)}_e(l,c);var R;l=null;for(de in p)if(!c.hasOwnProperty(de)&&p.hasOwnProperty(de)&&p[de]!=null)if(de==="style"){var z=p[de];for(R in z)z.hasOwnProperty(R)&&(l||(l={}),l[R]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(s.hasOwnProperty(de)?_||(_=[]):(_=_||[]).push(de,null));for(de in c){var $=c[de];if(z=p!=null?p[de]:void 0,c.hasOwnProperty(de)&&$!==z&&($!=null||z!=null))if(de==="style")if(z){for(R in z)!z.hasOwnProperty(R)||$&&$.hasOwnProperty(R)||(l||(l={}),l[R]="");for(R in $)$.hasOwnProperty(R)&&z[R]!==$[R]&&(l||(l={}),l[R]=$[R])}else l||(_||(_=[]),_.push(de,l)),l=$;else de==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,z=z?z.__html:void 0,$!=null&&z!==$&&(_=_||[]).push(de,$)):de==="children"?typeof $!="string"&&typeof $!="number"||(_=_||[]).push(de,""+$):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(s.hasOwnProperty(de)?($!=null&&de==="onScroll"&&qt("scroll",i),_||z===$||(_=[])):(_=_||[]).push(de,$))}l&&(_=_||[]).push("style",l);var de=_;(a.updateQueue=de)&&(a.flags|=4)}},jv=function(i,a,l,c){l!==c&&(a.flags|=4)};function Wo(i,a){if(!Jt)switch(i.tailMode){case"hidden":a=i.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?a||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function Nn(i){var a=i.alternate!==null&&i.alternate.child===i.child,l=0,c=0;if(a)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=c,i.childLanes=l,a}function IE(i,a,l){var c=a.pendingProps;switch(zd(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nn(a),null;case 1:return Yn(a.type)&&eu(),Nn(a),null;case 3:return c=a.stateNode,Ns(),Yt(qn),Yt(In),Qd(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(i===null||i.child===null)&&(au(a)?a.flags|=4:i===null||i.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Bi!==null&&(Pf(Bi),Bi=null))),yf(i,a),Nn(a),null;case 5:jd(a);var p=qa(Bo.current);if(l=a.type,i!==null&&a.stateNode!=null)Zv(i,a,l,c,p),i.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!c){if(a.stateNode===null)throw Error(t(166));return Nn(a),null}if(i=qa(or.current),au(a)){c=a.stateNode,l=a.type;var _=a.memoizedProps;switch(c[sr]=a,c[No]=_,i=(a.mode&1)!==0,l){case"dialog":qt("cancel",c),qt("close",c);break;case"iframe":case"object":case"embed":qt("load",c);break;case"video":case"audio":for(p=0;p<Lo.length;p++)qt(Lo[p],c);break;case"source":qt("error",c);break;case"img":case"image":case"link":qt("error",c),qt("load",c);break;case"details":qt("toggle",c);break;case"input":st(c,_),qt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!_.multiple},qt("invalid",c);break;case"textarea":wn(c,_),qt("invalid",c)}_e(l,_),p=null;for(var R in _)if(_.hasOwnProperty(R)){var z=_[R];R==="children"?typeof z=="string"?c.textContent!==z&&(_.suppressHydrationWarning!==!0&&jl(c.textContent,z,i),p=["children",z]):typeof z=="number"&&c.textContent!==""+z&&(_.suppressHydrationWarning!==!0&&jl(c.textContent,z,i),p=["children",""+z]):s.hasOwnProperty(R)&&z!=null&&R==="onScroll"&&qt("scroll",c)}switch(l){case"input":ve(c),Ct(c,_,!0);break;case"textarea":ve(c),Tn(c);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(c.onclick=Jl)}c=p,a.updateQueue=c,c!==null&&(a.flags|=4)}else{R=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Ut(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=R.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof c.is=="string"?i=R.createElement(l,{is:c.is}):(i=R.createElement(l),l==="select"&&(R=i,c.multiple?R.multiple=!0:c.size&&(R.size=c.size))):i=R.createElementNS(i,l),i[sr]=a,i[No]=c,Kv(i,a,!1,!1),a.stateNode=i;e:{switch(R=Pe(l,c),l){case"dialog":qt("cancel",i),qt("close",i),p=c;break;case"iframe":case"object":case"embed":qt("load",i),p=c;break;case"video":case"audio":for(p=0;p<Lo.length;p++)qt(Lo[p],i);p=c;break;case"source":qt("error",i),p=c;break;case"img":case"image":case"link":qt("error",i),qt("load",i),p=c;break;case"details":qt("toggle",i),p=c;break;case"input":st(i,c),p=ze(i,c),qt("invalid",i);break;case"option":p=c;break;case"select":i._wrapperState={wasMultiple:!!c.multiple},p=Z({},c,{value:void 0}),qt("invalid",i);break;case"textarea":wn(i,c),p=cn(i,c),qt("invalid",i);break;default:p=c}_e(l,p),z=p;for(_ in z)if(z.hasOwnProperty(_)){var $=z[_];_==="style"?ae(i,$):_==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,$!=null&&Zt(i,$)):_==="children"?typeof $=="string"?(l!=="textarea"||$!=="")&&it(i,$):typeof $=="number"&&it(i,""+$):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?$!=null&&_==="onScroll"&&qt("scroll",i):$!=null&&D(i,_,$,R))}switch(l){case"input":ve(i),Ct(i,c,!1);break;case"textarea":ve(i),Tn(i);break;case"option":c.value!=null&&i.setAttribute("value",""+pe(c.value));break;case"select":i.multiple=!!c.multiple,_=c.value,_!=null?en(i,!!c.multiple,_,!1):c.defaultValue!=null&&en(i,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Jl)}switch(l){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return Nn(a),null;case 6:if(i&&a.stateNode!=null)jv(i,a,i.memoizedProps,c);else{if(typeof c!="string"&&a.stateNode===null)throw Error(t(166));if(l=qa(Bo.current),qa(or.current),au(a)){if(c=a.stateNode,l=a.memoizedProps,c[sr]=a,(_=c.nodeValue!==l)&&(i=li,i!==null))switch(i.tag){case 3:jl(c.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&jl(c.nodeValue,l,(i.mode&1)!==0)}_&&(a.flags|=4)}else c=(l.nodeType===9?l:l.ownerDocument).createTextNode(c),c[sr]=a,a.stateNode=c}return Nn(a),null;case 13:if(Yt(tn),c=a.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Jt&&ui!==null&&(a.mode&1)!==0&&(a.flags&128)===0)ev(),Ps(),a.flags|=98560,_=!1;else if(_=au(a),c!==null&&c.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=a.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[sr]=a}else Ps(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Nn(a),_=!1}else Bi!==null&&(Pf(Bi),Bi=null),_=!0;if(!_)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=l,a):(c=c!==null,c!==(i!==null&&i.memoizedState!==null)&&c&&(a.child.flags|=8192,(a.mode&1)!==0&&(i===null||(tn.current&1)!==0?_n===0&&(_n=3):Df())),a.updateQueue!==null&&(a.flags|=4),Nn(a),null);case 4:return Ns(),yf(i,a),i===null&&Io(a.stateNode.containerInfo),Nn(a),null;case 10:return Xd(a.type._context),Nn(a),null;case 17:return Yn(a.type)&&eu(),Nn(a),null;case 19:if(Yt(tn),_=a.memoizedState,_===null)return Nn(a),null;if(c=(a.flags&128)!==0,R=_.rendering,R===null)if(c)Wo(_,!1);else{if(_n!==0||i!==null&&(i.flags&128)!==0)for(i=a.child;i!==null;){if(R=du(i),R!==null){for(a.flags|=128,Wo(_,!1),c=R.updateQueue,c!==null&&(a.updateQueue=c,a.flags|=4),a.subtreeFlags=0,c=l,l=a.child;l!==null;)_=l,i=c,_.flags&=14680066,R=_.alternate,R===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=R.childLanes,_.lanes=R.lanes,_.child=R.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=R.memoizedProps,_.memoizedState=R.memoizedState,_.updateQueue=R.updateQueue,_.type=R.type,i=R.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Vt(tn,tn.current&1|2),a.child}i=i.sibling}_.tail!==null&&Ht()>ks&&(a.flags|=128,c=!0,Wo(_,!1),a.lanes=4194304)}else{if(!c)if(i=du(R),i!==null){if(a.flags|=128,c=!0,l=i.updateQueue,l!==null&&(a.updateQueue=l,a.flags|=4),Wo(_,!0),_.tail===null&&_.tailMode==="hidden"&&!R.alternate&&!Jt)return Nn(a),null}else 2*Ht()-_.renderingStartTime>ks&&l!==1073741824&&(a.flags|=128,c=!0,Wo(_,!1),a.lanes=4194304);_.isBackwards?(R.sibling=a.child,a.child=R):(l=_.last,l!==null?l.sibling=R:a.child=R,_.last=R)}return _.tail!==null?(a=_.tail,_.rendering=a,_.tail=a.sibling,_.renderingStartTime=Ht(),a.sibling=null,l=tn.current,Vt(tn,c?l&1|2:l&1),a):(Nn(a),null);case 22:case 23:return If(),c=a.memoizedState!==null,i!==null&&i.memoizedState!==null!==c&&(a.flags|=8192),c&&(a.mode&1)!==0?(ci&1073741824)!==0&&(Nn(a),a.subtreeFlags&6&&(a.flags|=8192)):Nn(a),null;case 24:return null;case 25:return null}throw Error(t(156,a.tag))}function DE(i,a){switch(zd(a),a.tag){case 1:return Yn(a.type)&&eu(),i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 3:return Ns(),Yt(qn),Yt(In),Qd(),i=a.flags,(i&65536)!==0&&(i&128)===0?(a.flags=i&-65537|128,a):null;case 5:return jd(a),null;case 13:if(Yt(tn),i=a.memoizedState,i!==null&&i.dehydrated!==null){if(a.alternate===null)throw Error(t(340));Ps()}return i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 19:return Yt(tn),null;case 4:return Ns(),null;case 10:return Xd(a.type._context),null;case 22:case 23:return If(),null;case 24:return null;default:return null}}var Su=!1,On=!1,NE=typeof WeakSet=="function"?WeakSet:Set,je=null;function Us(i,a){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(c){on(i,a,c)}else l.current=null}function Sf(i,a,l){try{l()}catch(c){on(i,a,c)}}var Jv=!1;function OE(i,a){if(Ld=zl,i=Pg(),Ed(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var p=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var R=0,z=-1,$=-1,de=0,Ee=0,Re=i,xe=null;t:for(;;){for(var Xe;Re!==l||p!==0&&Re.nodeType!==3||(z=R+p),Re!==_||c!==0&&Re.nodeType!==3||($=R+c),Re.nodeType===3&&(R+=Re.nodeValue.length),(Xe=Re.firstChild)!==null;)xe=Re,Re=Xe;for(;;){if(Re===i)break t;if(xe===l&&++de===p&&(z=R),xe===_&&++Ee===c&&($=R),(Xe=Re.nextSibling)!==null)break;Re=xe,xe=Re.parentNode}Re=Xe}l=z===-1||$===-1?null:{start:z,end:$}}else l=null}l=l||{start:0,end:0}}else l=null;for(Id={focusedElem:i,selectionRange:l},zl=!1,je=a;je!==null;)if(a=je,i=a.child,(a.subtreeFlags&1028)!==0&&i!==null)i.return=a,je=i;else for(;je!==null;){a=je;try{var tt=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(tt!==null){var nt=tt.memoizedProps,fn=tt.memoizedState,se=a.stateNode,K=se.getSnapshotBeforeUpdate(a.elementType===a.type?nt:zi(a.type,nt),fn);se.__reactInternalSnapshotBeforeUpdate=K}break;case 3:var le=a.stateNode.containerInfo;le.nodeType===1?le.textContent="":le.nodeType===9&&le.documentElement&&le.removeChild(le.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ie){on(a,a.return,Ie)}if(i=a.sibling,i!==null){i.return=a.return,je=i;break}je=a.return}return tt=Jv,Jv=!1,tt}function $o(i,a,l){var c=a.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&Sf(a,l,_)}p=p.next}while(p!==c)}}function xu(i,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&i)===i){var c=l.create;l.destroy=c()}l=l.next}while(l!==a)}}function xf(i){var a=i.ref;if(a!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof a=="function"?a(i):a.current=i}}function Qv(i){var a=i.alternate;a!==null&&(i.alternate=null,Qv(a)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(a=i.stateNode,a!==null&&(delete a[sr],delete a[No],delete a[Ud],delete a[vE],delete a[_E])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function e0(i){return i.tag===5||i.tag===3||i.tag===4}function t0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||e0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Mf(i,a,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,a?l.nodeType===8?l.parentNode.insertBefore(i,a):l.insertBefore(i,a):(l.nodeType===8?(a=l.parentNode,a.insertBefore(i,l)):(a=l,a.appendChild(i)),l=l._reactRootContainer,l!=null||a.onclick!==null||(a.onclick=Jl));else if(c!==4&&(i=i.child,i!==null))for(Mf(i,a,l),i=i.sibling;i!==null;)Mf(i,a,l),i=i.sibling}function Ef(i,a,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,a?l.insertBefore(i,a):l.appendChild(i);else if(c!==4&&(i=i.child,i!==null))for(Ef(i,a,l),i=i.sibling;i!==null;)Ef(i,a,l),i=i.sibling}var Rn=null,Hi=!1;function ca(i,a,l){for(l=l.child;l!==null;)n0(i,a,l),l=l.sibling}function n0(i,a,l){if(oe&&typeof oe.onCommitFiberUnmount=="function")try{oe.onCommitFiberUnmount(V,l)}catch{}switch(l.tag){case 5:On||Us(l,a);case 6:var c=Rn,p=Hi;Rn=null,ca(i,a,l),Rn=c,Hi=p,Rn!==null&&(Hi?(i=Rn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Rn.removeChild(l.stateNode));break;case 18:Rn!==null&&(Hi?(i=Rn,l=l.stateNode,i.nodeType===8?Od(i.parentNode,l):i.nodeType===1&&Od(i,l),Eo(i)):Od(Rn,l.stateNode));break;case 4:c=Rn,p=Hi,Rn=l.stateNode.containerInfo,Hi=!0,ca(i,a,l),Rn=c,Hi=p;break;case 0:case 11:case 14:case 15:if(!On&&(c=l.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var _=p,R=_.destroy;_=_.tag,R!==void 0&&((_&2)!==0||(_&4)!==0)&&Sf(l,a,R),p=p.next}while(p!==c)}ca(i,a,l);break;case 1:if(!On&&(Us(l,a),c=l.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=l.memoizedProps,c.state=l.memoizedState,c.componentWillUnmount()}catch(z){on(l,a,z)}ca(i,a,l);break;case 21:ca(i,a,l);break;case 22:l.mode&1?(On=(c=On)||l.memoizedState!==null,ca(i,a,l),On=c):ca(i,a,l);break;default:ca(i,a,l)}}function i0(i){var a=i.updateQueue;if(a!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new NE),a.forEach(function(c){var p=WE.bind(null,i,c);l.has(c)||(l.add(c),c.then(p,p))})}}function Gi(i,a){var l=a.deletions;if(l!==null)for(var c=0;c<l.length;c++){var p=l[c];try{var _=i,R=a,z=R;e:for(;z!==null;){switch(z.tag){case 5:Rn=z.stateNode,Hi=!1;break e;case 3:Rn=z.stateNode.containerInfo,Hi=!0;break e;case 4:Rn=z.stateNode.containerInfo,Hi=!0;break e}z=z.return}if(Rn===null)throw Error(t(160));n0(_,R,p),Rn=null,Hi=!1;var $=p.alternate;$!==null&&($.return=null),p.return=null}catch(de){on(p,a,de)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)r0(a,i),a=a.sibling}function r0(i,a){var l=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Gi(a,i),ur(i),c&4){try{$o(3,i,i.return),xu(3,i)}catch(nt){on(i,i.return,nt)}try{$o(5,i,i.return)}catch(nt){on(i,i.return,nt)}}break;case 1:Gi(a,i),ur(i),c&512&&l!==null&&Us(l,l.return);break;case 5:if(Gi(a,i),ur(i),c&512&&l!==null&&Us(l,l.return),i.flags&32){var p=i.stateNode;try{it(p,"")}catch(nt){on(i,i.return,nt)}}if(c&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,R=l!==null?l.memoizedProps:_,z=i.type,$=i.updateQueue;if(i.updateQueue=null,$!==null)try{z==="input"&&_.type==="radio"&&_.name!=null&&We(p,_),Pe(z,R);var de=Pe(z,_);for(R=0;R<$.length;R+=2){var Ee=$[R],Re=$[R+1];Ee==="style"?ae(p,Re):Ee==="dangerouslySetInnerHTML"?Zt(p,Re):Ee==="children"?it(p,Re):D(p,Ee,Re,de)}switch(z){case"input":wt(p,_);break;case"textarea":Y(p,_);break;case"select":var xe=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Xe=_.value;Xe!=null?en(p,!!_.multiple,Xe,!1):xe!==!!_.multiple&&(_.defaultValue!=null?en(p,!!_.multiple,_.defaultValue,!0):en(p,!!_.multiple,_.multiple?[]:"",!1))}p[No]=_}catch(nt){on(i,i.return,nt)}}break;case 6:if(Gi(a,i),ur(i),c&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(nt){on(i,i.return,nt)}}break;case 3:if(Gi(a,i),ur(i),c&4&&l!==null&&l.memoizedState.isDehydrated)try{Eo(a.containerInfo)}catch(nt){on(i,i.return,nt)}break;case 4:Gi(a,i),ur(i);break;case 13:Gi(a,i),ur(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Tf=Ht())),c&4&&i0(i);break;case 22:if(Ee=l!==null&&l.memoizedState!==null,i.mode&1?(On=(de=On)||Ee,Gi(a,i),On=de):Gi(a,i),ur(i),c&8192){if(de=i.memoizedState!==null,(i.stateNode.isHidden=de)&&!Ee&&(i.mode&1)!==0)for(je=i,Ee=i.child;Ee!==null;){for(Re=je=Ee;je!==null;){switch(xe=je,Xe=xe.child,xe.tag){case 0:case 11:case 14:case 15:$o(4,xe,xe.return);break;case 1:Us(xe,xe.return);var tt=xe.stateNode;if(typeof tt.componentWillUnmount=="function"){c=xe,l=xe.return;try{a=c,tt.props=a.memoizedProps,tt.state=a.memoizedState,tt.componentWillUnmount()}catch(nt){on(c,l,nt)}}break;case 5:Us(xe,xe.return);break;case 22:if(xe.memoizedState!==null){o0(Re);continue}}Xe!==null?(Xe.return=xe,je=Xe):o0(Re)}Ee=Ee.sibling}e:for(Ee=null,Re=i;;){if(Re.tag===5){if(Ee===null){Ee=Re;try{p=Re.stateNode,de?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(z=Re.stateNode,$=Re.memoizedProps.style,R=$!=null&&$.hasOwnProperty("display")?$.display:null,z.style.display=A("display",R))}catch(nt){on(i,i.return,nt)}}}else if(Re.tag===6){if(Ee===null)try{Re.stateNode.nodeValue=de?"":Re.memoizedProps}catch(nt){on(i,i.return,nt)}}else if((Re.tag!==22&&Re.tag!==23||Re.memoizedState===null||Re===i)&&Re.child!==null){Re.child.return=Re,Re=Re.child;continue}if(Re===i)break e;for(;Re.sibling===null;){if(Re.return===null||Re.return===i)break e;Ee===Re&&(Ee=null),Re=Re.return}Ee===Re&&(Ee=null),Re.sibling.return=Re.return,Re=Re.sibling}}break;case 19:Gi(a,i),ur(i),c&4&&i0(i);break;case 21:break;default:Gi(a,i),ur(i)}}function ur(i){var a=i.flags;if(a&2){try{e:{for(var l=i.return;l!==null;){if(e0(l)){var c=l;break e}l=l.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(it(p,""),c.flags&=-33);var _=t0(i);Ef(i,_,p);break;case 3:case 4:var R=c.stateNode.containerInfo,z=t0(i);Mf(i,z,R);break;default:throw Error(t(161))}}catch($){on(i,i.return,$)}i.flags&=-3}a&4096&&(i.flags&=-4097)}function UE(i,a,l){je=i,a0(i)}function a0(i,a,l){for(var c=(i.mode&1)!==0;je!==null;){var p=je,_=p.child;if(p.tag===22&&c){var R=p.memoizedState!==null||Su;if(!R){var z=p.alternate,$=z!==null&&z.memoizedState!==null||On;z=Su;var de=On;if(Su=R,(On=$)&&!de)for(je=p;je!==null;)R=je,$=R.child,R.tag===22&&R.memoizedState!==null?l0(p):$!==null?($.return=R,je=$):l0(p);for(;_!==null;)je=_,a0(_),_=_.sibling;je=p,Su=z,On=de}s0(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,je=_):s0(i)}}function s0(i){for(;je!==null;){var a=je;if((a.flags&8772)!==0){var l=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:On||xu(5,a);break;case 1:var c=a.stateNode;if(a.flags&4&&!On)if(l===null)c.componentDidMount();else{var p=a.elementType===a.type?l.memoizedProps:zi(a.type,l.memoizedProps);c.componentDidUpdate(p,l.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var _=a.updateQueue;_!==null&&ov(a,_,c);break;case 3:var R=a.updateQueue;if(R!==null){if(l=null,a.child!==null)switch(a.child.tag){case 5:l=a.child.stateNode;break;case 1:l=a.child.stateNode}ov(a,R,l)}break;case 5:var z=a.stateNode;if(l===null&&a.flags&4){l=z;var $=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":$.autoFocus&&l.focus();break;case"img":$.src&&(l.src=$.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var de=a.alternate;if(de!==null){var Ee=de.memoizedState;if(Ee!==null){var Re=Ee.dehydrated;Re!==null&&Eo(Re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}On||a.flags&512&&xf(a)}catch(xe){on(a,a.return,xe)}}if(a===i){je=null;break}if(l=a.sibling,l!==null){l.return=a.return,je=l;break}je=a.return}}function o0(i){for(;je!==null;){var a=je;if(a===i){je=null;break}var l=a.sibling;if(l!==null){l.return=a.return,je=l;break}je=a.return}}function l0(i){for(;je!==null;){var a=je;try{switch(a.tag){case 0:case 11:case 15:var l=a.return;try{xu(4,a)}catch($){on(a,l,$)}break;case 1:var c=a.stateNode;if(typeof c.componentDidMount=="function"){var p=a.return;try{c.componentDidMount()}catch($){on(a,p,$)}}var _=a.return;try{xf(a)}catch($){on(a,_,$)}break;case 5:var R=a.return;try{xf(a)}catch($){on(a,R,$)}}}catch($){on(a,a.return,$)}if(a===i){je=null;break}var z=a.sibling;if(z!==null){z.return=a.return,je=z;break}je=a.return}}var FE=Math.ceil,Mu=L.ReactCurrentDispatcher,bf=L.ReactCurrentOwner,Ti=L.ReactCurrentBatchConfig,Lt=0,Mn=null,pn=null,An=0,ci=0,Fs=aa(0),_n=0,Xo=null,Ka=0,Eu=0,wf=0,qo=null,Zn=null,Tf=0,ks=1/0,Or=null,bu=!1,Rf=null,da=null,wu=!1,fa=null,Tu=0,Yo=0,Af=null,Ru=-1,Au=0;function Gn(){return(Lt&6)!==0?Ht():Ru!==-1?Ru:Ru=Ht()}function ha(i){return(i.mode&1)===0?1:(Lt&2)!==0&&An!==0?An&-An:SE.transition!==null?(Au===0&&(Au=It()),Au):(i=et,i!==0||(i=window.event,i=i===void 0?16:cg(i.type)),i)}function Vi(i,a,l,c){if(50<Yo)throw Yo=0,Af=null,Error(t(185));Xt(i,l,c),((Lt&2)===0||i!==Mn)&&(i===Mn&&((Lt&2)===0&&(Eu|=l),_n===4&&pa(i,An)),jn(i,c),l===1&&Lt===0&&(a.mode&1)===0&&(ks=Ht()+500,nu&&oa()))}function jn(i,a){var l=i.callbackNode;_t(i,a);var c=vt(i,i===Mn?An:0);if(c===0)l!==null&&zn(l),i.callbackNode=null,i.callbackPriority=0;else if(a=c&-c,i.callbackPriority!==a){if(l!=null&&zn(l),a===1)i.tag===0?yE(c0.bind(null,i)):Kg(c0.bind(null,i)),mE(function(){(Lt&6)===0&&oa()}),l=null;else{switch(ai(c)){case 1:l=ea;break;case 4:l=ka;break;case 16:l=Rr;break;case 536870912:l=P;break;default:l=Rr}l=_0(l,u0.bind(null,i))}i.callbackPriority=a,i.callbackNode=l}}function u0(i,a){if(Ru=-1,Au=0,(Lt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Bs()&&i.callbackNode!==l)return null;var c=vt(i,i===Mn?An:0);if(c===0)return null;if((c&30)!==0||(c&i.expiredLanes)!==0||a)a=Cu(i,c);else{a=c;var p=Lt;Lt|=2;var _=f0();(Mn!==i||An!==a)&&(Or=null,ks=Ht()+500,ja(i,a));do try{zE();break}catch(z){d0(i,z)}while(!0);$d(),Mu.current=_,Lt=p,pn!==null?a=0:(Mn=null,An=0,a=_n)}if(a!==0){if(a===2&&(p=zt(i),p!==0&&(c=p,a=Cf(i,p))),a===1)throw l=Xo,ja(i,0),pa(i,c),jn(i,Ht()),l;if(a===6)pa(i,c);else{if(p=i.current.alternate,(c&30)===0&&!kE(p)&&(a=Cu(i,c),a===2&&(_=zt(i),_!==0&&(c=_,a=Cf(i,_))),a===1))throw l=Xo,ja(i,0),pa(i,c),jn(i,Ht()),l;switch(i.finishedWork=p,i.finishedLanes=c,a){case 0:case 1:throw Error(t(345));case 2:Ja(i,Zn,Or);break;case 3:if(pa(i,c),(c&130023424)===c&&(a=Tf+500-Ht(),10<a)){if(vt(i,0)!==0)break;if(p=i.suspendedLanes,(p&c)!==c){Gn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Nd(Ja.bind(null,i,Zn,Or),a);break}Ja(i,Zn,Or);break;case 4:if(pa(i,c),(c&4194240)===c)break;for(a=i.eventTimes,p=-1;0<c;){var R=31-ee(c);_=1<<R,R=a[R],R>p&&(p=R),c&=~_}if(c=p,c=Ht()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*FE(c/1960))-c,10<c){i.timeoutHandle=Nd(Ja.bind(null,i,Zn,Or),c);break}Ja(i,Zn,Or);break;case 5:Ja(i,Zn,Or);break;default:throw Error(t(329))}}}return jn(i,Ht()),i.callbackNode===l?u0.bind(null,i):null}function Cf(i,a){var l=qo;return i.current.memoizedState.isDehydrated&&(ja(i,a).flags|=256),i=Cu(i,a),i!==2&&(a=Zn,Zn=l,a!==null&&Pf(a)),i}function Pf(i){Zn===null?Zn=i:Zn.push.apply(Zn,i)}function kE(i){for(var a=i;;){if(a.flags&16384){var l=a.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var c=0;c<l.length;c++){var p=l[c],_=p.getSnapshot;p=p.value;try{if(!ki(_(),p))return!1}catch{return!1}}}if(l=a.child,a.subtreeFlags&16384&&l!==null)l.return=a,a=l;else{if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function pa(i,a){for(a&=~wf,a&=~Eu,i.suspendedLanes|=a,i.pingedLanes&=~a,i=i.expirationTimes;0<a;){var l=31-ee(a),c=1<<l;i[l]=-1,a&=~c}}function c0(i){if((Lt&6)!==0)throw Error(t(327));Bs();var a=vt(i,0);if((a&1)===0)return jn(i,Ht()),null;var l=Cu(i,a);if(i.tag!==0&&l===2){var c=zt(i);c!==0&&(a=c,l=Cf(i,c))}if(l===1)throw l=Xo,ja(i,0),pa(i,a),jn(i,Ht()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=a,Ja(i,Zn,Or),jn(i,Ht()),null}function Lf(i,a){var l=Lt;Lt|=1;try{return i(a)}finally{Lt=l,Lt===0&&(ks=Ht()+500,nu&&oa())}}function Za(i){fa!==null&&fa.tag===0&&(Lt&6)===0&&Bs();var a=Lt;Lt|=1;var l=Ti.transition,c=et;try{if(Ti.transition=null,et=1,i)return i()}finally{et=c,Ti.transition=l,Lt=a,(Lt&6)===0&&oa()}}function If(){ci=Fs.current,Yt(Fs)}function ja(i,a){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,pE(l)),pn!==null)for(l=pn.return;l!==null;){var c=l;switch(zd(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&eu();break;case 3:Ns(),Yt(qn),Yt(In),Qd();break;case 5:jd(c);break;case 4:Ns();break;case 13:Yt(tn);break;case 19:Yt(tn);break;case 10:Xd(c.type._context);break;case 22:case 23:If()}l=l.return}if(Mn=i,pn=i=ma(i.current,null),An=ci=a,_n=0,Xo=null,wf=Eu=Ka=0,Zn=qo=null,Xa!==null){for(a=0;a<Xa.length;a++)if(l=Xa[a],c=l.interleaved,c!==null){l.interleaved=null;var p=c.next,_=l.pending;if(_!==null){var R=_.next;_.next=p,c.next=R}l.pending=c}Xa=null}return i}function d0(i,a){do{var l=pn;try{if($d(),fu.current=gu,hu){for(var c=nn.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}hu=!1}if(Ya=0,xn=vn=nn=null,zo=!1,Ho=0,bf.current=null,l===null||l.return===null){_n=1,Xo=a,pn=null;break}e:{var _=i,R=l.return,z=l,$=a;if(a=An,z.flags|=32768,$!==null&&typeof $=="object"&&typeof $.then=="function"){var de=$,Ee=z,Re=Ee.tag;if((Ee.mode&1)===0&&(Re===0||Re===11||Re===15)){var xe=Ee.alternate;xe?(Ee.updateQueue=xe.updateQueue,Ee.memoizedState=xe.memoizedState,Ee.lanes=xe.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var Xe=Uv(R);if(Xe!==null){Xe.flags&=-257,Fv(Xe,R,z,_,a),Xe.mode&1&&Ov(_,de,a),a=Xe,$=de;var tt=a.updateQueue;if(tt===null){var nt=new Set;nt.add($),a.updateQueue=nt}else tt.add($);break e}else{if((a&1)===0){Ov(_,de,a),Df();break e}$=Error(t(426))}}else if(Jt&&z.mode&1){var fn=Uv(R);if(fn!==null){(fn.flags&65536)===0&&(fn.flags|=256),Fv(fn,R,z,_,a),Vd(Os($,z));break e}}_=$=Os($,z),_n!==4&&(_n=2),qo===null?qo=[_]:qo.push(_),_=R;do{switch(_.tag){case 3:_.flags|=65536,a&=-a,_.lanes|=a;var se=Dv(_,$,a);sv(_,se);break e;case 1:z=$;var K=_.type,le=_.stateNode;if((_.flags&128)===0&&(typeof K.getDerivedStateFromError=="function"||le!==null&&typeof le.componentDidCatch=="function"&&(da===null||!da.has(le)))){_.flags|=65536,a&=-a,_.lanes|=a;var Ie=Nv(_,z,a);sv(_,Ie);break e}}_=_.return}while(_!==null)}p0(l)}catch(at){a=at,pn===l&&l!==null&&(pn=l=l.return);continue}break}while(!0)}function f0(){var i=Mu.current;return Mu.current=gu,i===null?gu:i}function Df(){(_n===0||_n===3||_n===2)&&(_n=4),Mn===null||(Ka&268435455)===0&&(Eu&268435455)===0||pa(Mn,An)}function Cu(i,a){var l=Lt;Lt|=2;var c=f0();(Mn!==i||An!==a)&&(Or=null,ja(i,a));do try{BE();break}catch(p){d0(i,p)}while(!0);if($d(),Lt=l,Mu.current=c,pn!==null)throw Error(t(261));return Mn=null,An=0,_n}function BE(){for(;pn!==null;)h0(pn)}function zE(){for(;pn!==null&&!ar();)h0(pn)}function h0(i){var a=v0(i.alternate,i,ci);i.memoizedProps=i.pendingProps,a===null?p0(i):pn=a,bf.current=null}function p0(i){var a=i;do{var l=a.alternate;if(i=a.return,(a.flags&32768)===0){if(l=IE(l,a,ci),l!==null){pn=l;return}}else{if(l=DE(l,a),l!==null){l.flags&=32767,pn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{_n=6,pn=null;return}}if(a=a.sibling,a!==null){pn=a;return}pn=a=i}while(a!==null);_n===0&&(_n=5)}function Ja(i,a,l){var c=et,p=Ti.transition;try{Ti.transition=null,et=1,HE(i,a,l,c)}finally{Ti.transition=p,et=c}return null}function HE(i,a,l,c){do Bs();while(fa!==null);if((Lt&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(Ze(i,_),i===Mn&&(pn=Mn=null,An=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||wu||(wu=!0,_0(Rr,function(){return Bs(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=Ti.transition,Ti.transition=null;var R=et;et=1;var z=Lt;Lt|=4,bf.current=null,OE(i,l),r0(l,i),oE(Id),zl=!!Ld,Id=Ld=null,i.current=l,UE(l),gs(),Lt=z,et=R,Ti.transition=_}else i.current=l;if(wu&&(wu=!1,fa=i,Tu=p),_=i.pendingLanes,_===0&&(da=null),re(l.stateNode),jn(i,Ht()),a!==null)for(c=i.onRecoverableError,l=0;l<a.length;l++)p=a[l],c(p.value,{componentStack:p.stack,digest:p.digest});if(bu)throw bu=!1,i=Rf,Rf=null,i;return(Tu&1)!==0&&i.tag!==0&&Bs(),_=i.pendingLanes,(_&1)!==0?i===Af?Yo++:(Yo=0,Af=i):Yo=0,oa(),null}function Bs(){if(fa!==null){var i=ai(Tu),a=Ti.transition,l=et;try{if(Ti.transition=null,et=16>i?16:i,fa===null)var c=!1;else{if(i=fa,fa=null,Tu=0,(Lt&6)!==0)throw Error(t(331));var p=Lt;for(Lt|=4,je=i.current;je!==null;){var _=je,R=_.child;if((je.flags&16)!==0){var z=_.deletions;if(z!==null){for(var $=0;$<z.length;$++){var de=z[$];for(je=de;je!==null;){var Ee=je;switch(Ee.tag){case 0:case 11:case 15:$o(8,Ee,_)}var Re=Ee.child;if(Re!==null)Re.return=Ee,je=Re;else for(;je!==null;){Ee=je;var xe=Ee.sibling,Xe=Ee.return;if(Qv(Ee),Ee===de){je=null;break}if(xe!==null){xe.return=Xe,je=xe;break}je=Xe}}}var tt=_.alternate;if(tt!==null){var nt=tt.child;if(nt!==null){tt.child=null;do{var fn=nt.sibling;nt.sibling=null,nt=fn}while(nt!==null)}}je=_}}if((_.subtreeFlags&2064)!==0&&R!==null)R.return=_,je=R;else e:for(;je!==null;){if(_=je,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:$o(9,_,_.return)}var se=_.sibling;if(se!==null){se.return=_.return,je=se;break e}je=_.return}}var K=i.current;for(je=K;je!==null;){R=je;var le=R.child;if((R.subtreeFlags&2064)!==0&&le!==null)le.return=R,je=le;else e:for(R=K;je!==null;){if(z=je,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:xu(9,z)}}catch(at){on(z,z.return,at)}if(z===R){je=null;break e}var Ie=z.sibling;if(Ie!==null){Ie.return=z.return,je=Ie;break e}je=z.return}}if(Lt=p,oa(),oe&&typeof oe.onPostCommitFiberRoot=="function")try{oe.onPostCommitFiberRoot(V,i)}catch{}c=!0}return c}finally{et=l,Ti.transition=a}}return!1}function m0(i,a,l){a=Os(l,a),a=Dv(i,a,1),i=ua(i,a,1),a=Gn(),i!==null&&(Xt(i,1,a),jn(i,a))}function on(i,a,l){if(i.tag===3)m0(i,i,l);else for(;a!==null;){if(a.tag===3){m0(a,i,l);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(da===null||!da.has(c))){i=Os(l,i),i=Nv(a,i,1),a=ua(a,i,1),i=Gn(),a!==null&&(Xt(a,1,i),jn(a,i));break}}a=a.return}}function GE(i,a,l){var c=i.pingCache;c!==null&&c.delete(a),a=Gn(),i.pingedLanes|=i.suspendedLanes&l,Mn===i&&(An&l)===l&&(_n===4||_n===3&&(An&130023424)===An&&500>Ht()-Tf?ja(i,0):wf|=l),jn(i,a)}function g0(i,a){a===0&&((i.mode&1)===0?a=1:(a=Ye,Ye<<=1,(Ye&130023424)===0&&(Ye=4194304)));var l=Gn();i=Ir(i,a),i!==null&&(Xt(i,a,l),jn(i,l))}function VE(i){var a=i.memoizedState,l=0;a!==null&&(l=a.retryLane),g0(i,l)}function WE(i,a){var l=0;switch(i.tag){case 13:var c=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:c=i.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(a),g0(i,l)}var v0;v0=function(i,a,l){if(i!==null)if(i.memoizedProps!==a.pendingProps||qn.current)Kn=!0;else{if((i.lanes&l)===0&&(a.flags&128)===0)return Kn=!1,LE(i,a,l);Kn=(i.flags&131072)!==0}else Kn=!1,Jt&&(a.flags&1048576)!==0&&Zg(a,ru,a.index);switch(a.lanes=0,a.tag){case 2:var c=a.type;yu(i,a),i=a.pendingProps;var p=Rs(a,In.current);Ds(a,l),p=nf(null,a,c,i,p,l);var _=rf();return a.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Yn(c)?(_=!0,tu(a)):_=!1,a.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Kd(a),p.updater=vu,a.stateNode=p,p._reactInternals=a,cf(a,c,i,l),a=pf(null,a,c,!0,_,l)):(a.tag=0,Jt&&_&&Bd(a),Hn(null,a,p,l),a=a.child),a;case 16:c=a.elementType;e:{switch(yu(i,a),i=a.pendingProps,p=c._init,c=p(c._payload),a.type=c,p=a.tag=XE(c),i=zi(c,i),p){case 0:a=hf(null,a,c,i,l);break e;case 1:a=Vv(null,a,c,i,l);break e;case 11:a=kv(null,a,c,i,l);break e;case 14:a=Bv(null,a,c,zi(c.type,i),l);break e}throw Error(t(306,c,""))}return a;case 0:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:zi(c,p),hf(i,a,c,p,l);case 1:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:zi(c,p),Vv(i,a,c,p,l);case 3:e:{if(Wv(a),i===null)throw Error(t(387));c=a.pendingProps,_=a.memoizedState,p=_.element,av(i,a),cu(a,c,null,l);var R=a.memoizedState;if(c=R.element,_.isDehydrated)if(_={element:c,isDehydrated:!1,cache:R.cache,pendingSuspenseBoundaries:R.pendingSuspenseBoundaries,transitions:R.transitions},a.updateQueue.baseState=_,a.memoizedState=_,a.flags&256){p=Os(Error(t(423)),a),a=$v(i,a,c,l,p);break e}else if(c!==p){p=Os(Error(t(424)),a),a=$v(i,a,c,l,p);break e}else for(ui=ra(a.stateNode.containerInfo.firstChild),li=a,Jt=!0,Bi=null,l=iv(a,null,c,l),a.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ps(),c===p){a=Nr(i,a,l);break e}Hn(i,a,c,l)}a=a.child}return a;case 5:return lv(a),i===null&&Gd(a),c=a.type,p=a.pendingProps,_=i!==null?i.memoizedProps:null,R=p.children,Dd(c,p)?R=null:_!==null&&Dd(c,_)&&(a.flags|=32),Gv(i,a),Hn(i,a,R,l),a.child;case 6:return i===null&&Gd(a),null;case 13:return Xv(i,a,l);case 4:return Zd(a,a.stateNode.containerInfo),c=a.pendingProps,i===null?a.child=Ls(a,null,c,l):Hn(i,a,c,l),a.child;case 11:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:zi(c,p),kv(i,a,c,p,l);case 7:return Hn(i,a,a.pendingProps,l),a.child;case 8:return Hn(i,a,a.pendingProps.children,l),a.child;case 12:return Hn(i,a,a.pendingProps.children,l),a.child;case 10:e:{if(c=a.type._context,p=a.pendingProps,_=a.memoizedProps,R=p.value,Vt(ou,c._currentValue),c._currentValue=R,_!==null)if(ki(_.value,R)){if(_.children===p.children&&!qn.current){a=Nr(i,a,l);break e}}else for(_=a.child,_!==null&&(_.return=a);_!==null;){var z=_.dependencies;if(z!==null){R=_.child;for(var $=z.firstContext;$!==null;){if($.context===c){if(_.tag===1){$=Dr(-1,l&-l),$.tag=2;var de=_.updateQueue;if(de!==null){de=de.shared;var Ee=de.pending;Ee===null?$.next=$:($.next=Ee.next,Ee.next=$),de.pending=$}}_.lanes|=l,$=_.alternate,$!==null&&($.lanes|=l),qd(_.return,l,a),z.lanes|=l;break}$=$.next}}else if(_.tag===10)R=_.type===a.type?null:_.child;else if(_.tag===18){if(R=_.return,R===null)throw Error(t(341));R.lanes|=l,z=R.alternate,z!==null&&(z.lanes|=l),qd(R,l,a),R=_.sibling}else R=_.child;if(R!==null)R.return=_;else for(R=_;R!==null;){if(R===a){R=null;break}if(_=R.sibling,_!==null){_.return=R.return,R=_;break}R=R.return}_=R}Hn(i,a,p.children,l),a=a.child}return a;case 9:return p=a.type,c=a.pendingProps.children,Ds(a,l),p=bi(p),c=c(p),a.flags|=1,Hn(i,a,c,l),a.child;case 14:return c=a.type,p=zi(c,a.pendingProps),p=zi(c.type,p),Bv(i,a,c,p,l);case 15:return zv(i,a,a.type,a.pendingProps,l);case 17:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:zi(c,p),yu(i,a),a.tag=1,Yn(c)?(i=!0,tu(a)):i=!1,Ds(a,l),Lv(a,c,p),cf(a,c,p,l),pf(null,a,c,!0,i,l);case 19:return Yv(i,a,l);case 22:return Hv(i,a,l)}throw Error(t(156,a.tag))};function _0(i,a){return Ua(i,a)}function $E(i,a,l,c){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ri(i,a,l,c){return new $E(i,a,l,c)}function Nf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function XE(i){if(typeof i=="function")return Nf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===W)return 11;if(i===ie)return 14}return 2}function ma(i,a){var l=i.alternate;return l===null?(l=Ri(i.tag,a,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=a,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,a=i.dependencies,l.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Pu(i,a,l,c,p,_){var R=2;if(c=i,typeof i=="function")Nf(i)&&(R=1);else if(typeof i=="string")R=5;else e:switch(i){case b:return Qa(l.children,p,_,a);case C:R=8,p|=8;break;case k:return i=Ri(12,l,a,p|2),i.elementType=k,i.lanes=_,i;case X:return i=Ri(13,l,a,p),i.elementType=X,i.lanes=_,i;case B:return i=Ri(19,l,a,p),i.elementType=B,i.lanes=_,i;case Q:return Lu(l,p,_,a);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case O:R=10;break e;case G:R=9;break e;case W:R=11;break e;case ie:R=14;break e;case te:R=16,c=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return a=Ri(R,l,a,p),a.elementType=i,a.type=c,a.lanes=_,a}function Qa(i,a,l,c){return i=Ri(7,i,c,a),i.lanes=l,i}function Lu(i,a,l,c){return i=Ri(22,i,c,a),i.elementType=Q,i.lanes=l,i.stateNode={isHidden:!1},i}function Of(i,a,l){return i=Ri(6,i,null,a),i.lanes=l,i}function Uf(i,a,l){return a=Ri(4,i.children!==null?i.children:[],i.key,a),a.lanes=l,a.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},a}function qE(i,a,l,c,p){this.tag=a,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pt(0),this.expirationTimes=Pt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pt(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Ff(i,a,l,c,p,_,R,z,$){return i=new qE(i,a,l,z,$),a===1?(a=1,_===!0&&(a|=8)):a=0,_=Ri(3,null,null,a),i.current=_,_.stateNode=i,_.memoizedState={element:c,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kd(_),i}function YE(i,a,l){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:i,containerInfo:a,implementation:l}}function y0(i){if(!i)return sa;i=i._reactInternals;e:{if(xi(i)!==i||i.tag!==1)throw Error(t(170));var a=i;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Yn(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Yn(l))return qg(i,l,a)}return a}function S0(i,a,l,c,p,_,R,z,$){return i=Ff(l,c,!0,i,p,_,R,z,$),i.context=y0(null),l=i.current,c=Gn(),p=ha(l),_=Dr(c,p),_.callback=a??null,ua(l,_,p),i.current.lanes=p,Xt(i,p,c),jn(i,c),i}function Iu(i,a,l,c){var p=a.current,_=Gn(),R=ha(p);return l=y0(l),a.context===null?a.context=l:a.pendingContext=l,a=Dr(_,R),a.payload={element:i},c=c===void 0?null:c,c!==null&&(a.callback=c),i=ua(p,a,R),i!==null&&(Vi(i,p,R,_),uu(i,p,R)),R}function Du(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function x0(i,a){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<a?l:a}}function kf(i,a){x0(i,a),(i=i.alternate)&&x0(i,a)}function KE(){return null}var M0=typeof reportError=="function"?reportError:function(i){console.error(i)};function Bf(i){this._internalRoot=i}Nu.prototype.render=Bf.prototype.render=function(i){var a=this._internalRoot;if(a===null)throw Error(t(409));Iu(i,a,null,null)},Nu.prototype.unmount=Bf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var a=i.containerInfo;Za(function(){Iu(null,i,null,null)}),a[Ar]=null}};function Nu(i){this._internalRoot=i}Nu.prototype.unstable_scheduleHydration=function(i){if(i){var a=si();i={blockedOn:null,target:i,priority:a};for(var l=0;l<Fi.length&&a!==0&&a<Fi[l].priority;l++);Fi.splice(l,0,i),l===0&&So(i)}};function zf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Ou(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function E0(){}function ZE(i,a,l,c,p){if(p){if(typeof c=="function"){var _=c;c=function(){var de=Du(R);_.call(de)}}var R=S0(a,c,i,0,null,!1,!1,"",E0);return i._reactRootContainer=R,i[Ar]=R.current,Io(i.nodeType===8?i.parentNode:i),Za(),R}for(;p=i.lastChild;)i.removeChild(p);if(typeof c=="function"){var z=c;c=function(){var de=Du($);z.call(de)}}var $=Ff(i,0,!1,null,null,!1,!1,"",E0);return i._reactRootContainer=$,i[Ar]=$.current,Io(i.nodeType===8?i.parentNode:i),Za(function(){Iu(a,$,l,c)}),$}function Uu(i,a,l,c,p){var _=l._reactRootContainer;if(_){var R=_;if(typeof p=="function"){var z=p;p=function(){var $=Du(R);z.call($)}}Iu(a,R,i,p)}else R=ZE(l,a,i,p,c);return Du(R)}sn=function(i){switch(i.tag){case 3:var a=i.stateNode;if(a.current.memoizedState.isDehydrated){var l=lt(a.pendingLanes);l!==0&&(an(a,l|1),jn(a,Ht()),(Lt&6)===0&&(ks=Ht()+500,oa()))}break;case 13:Za(function(){var c=Ir(i,1);if(c!==null){var p=Gn();Vi(c,i,1,p)}}),kf(i,1)}},Oi=function(i){if(i.tag===13){var a=Ir(i,134217728);if(a!==null){var l=Gn();Vi(a,i,134217728,l)}kf(i,134217728)}},Xn=function(i){if(i.tag===13){var a=ha(i),l=Ir(i,a);if(l!==null){var c=Gn();Vi(l,i,a,c)}kf(i,a)}},si=function(){return et},St=function(i,a){var l=et;try{return et=i,a()}finally{et=l}},me=function(i,a,l){switch(a){case"input":if(wt(i,l),a=l.name,l.type==="radio"&&a!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<l.length;a++){var c=l[a];if(c!==i&&c.form===i.form){var p=Ql(c);if(!p)throw Error(t(90));De(c),wt(c,p)}}}break;case"textarea":Y(i,l);break;case"select":a=l.value,a!=null&&en(i,!!l.multiple,a,!1)}},Ae=Lf,Le=Za;var jE={usingClientEntryPoint:!1,Events:[Oo,ws,Ql,fe,Oe,Lf]},Ko={findFiberByHostInstance:Ga,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},JE={bundleType:Ko.bundleType,version:Ko.version,rendererPackageName:Ko.rendererPackageName,rendererConfig:Ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Qr(i),i===null?null:i.stateNode},findFiberByHostInstance:Ko.findFiberByHostInstance||KE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fu.isDisabled&&Fu.supportsFiber)try{V=Fu.inject(JE),oe=Fu}catch{}}return Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jE,Jn.createPortal=function(i,a){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zf(a))throw Error(t(200));return YE(i,a,null,l)},Jn.createRoot=function(i,a){if(!zf(i))throw Error(t(299));var l=!1,c="",p=M0;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onRecoverableError!==void 0&&(p=a.onRecoverableError)),a=Ff(i,1,!1,null,null,l,!1,c,p),i[Ar]=a.current,Io(i.nodeType===8?i.parentNode:i),new Bf(a)},Jn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var a=i._reactInternals;if(a===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Qr(a),i=i===null?null:i.stateNode,i},Jn.flushSync=function(i){return Za(i)},Jn.hydrate=function(i,a,l){if(!Ou(a))throw Error(t(200));return Uu(null,i,a,!0,l)},Jn.hydrateRoot=function(i,a,l){if(!zf(i))throw Error(t(405));var c=l!=null&&l.hydratedSources||null,p=!1,_="",R=M0;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(R=l.onRecoverableError)),a=S0(a,null,i,1,l??null,p,!1,_,R),i[Ar]=a.current,Io(i),c)for(i=0;i<c.length;i++)l=c[i],p=l._getVersion,p=p(l._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[l,p]:a.mutableSourceEagerHydrationData.push(l,p);return new Nu(a)},Jn.render=function(i,a,l){if(!Ou(a))throw Error(t(200));return Uu(null,i,a,!1,l)},Jn.unmountComponentAtNode=function(i){if(!Ou(i))throw Error(t(40));return i._reactRootContainer?(Za(function(){Uu(null,null,i,!1,function(){i._reactRootContainer=null,i[Ar]=null})}),!0):!1},Jn.unstable_batchedUpdates=Lf,Jn.unstable_renderSubtreeIntoContainer=function(i,a,l,c){if(!Ou(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Uu(i,a,l,!1,c)},Jn.version="18.3.1-next-f1338f8080-20240426",Jn}var P0;function eS(){if(P0)return Gf.exports;P0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Gf.exports=ab(),Gf.exports}var L0;function sb(){if(L0)return ku;L0=1;var n=eS();return ku.createRoot=n.createRoot,ku.hydrateRoot=n.hydrateRoot,ku}var ob=sb(),lb=eS();function Sl(n){"@babel/helpers - typeof";return Sl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Sl(n)}function ub(n,e){if(Sl(n)!="object"||!n)return n;var t;if(typeof Symbol<"u"&&(t=n[Symbol.toPrimitive])!==void 0){var r=t.call(n,e);if(Sl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function cb(n){var e=ub(n,"string");return Sl(e)=="symbol"?e:e+""}function db(n,e,t){return(e=cb(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function I0(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,r)}return t}function Ii(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?I0(Object(t),!0).forEach(function(r){db(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):I0(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function kc(){return kc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},kc.apply(null,arguments)}function hs(n,e){if(n==null)return{};var t={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.indexOf(r)!==-1)continue;t[r]=n[r]}return t}var fb=n=>n.disabled||Array.isArray(n.accessibilityStates)&&n.accessibilityStates.indexOf("disabled")>-1,hb={adjustable:"slider",button:"button",header:"heading",image:"img",imagebutton:null,keyboardkey:null,label:null,link:"link",none:"presentation",search:"search",summary:"region",text:null},tS=n=>{var e=n.accessibilityRole,t=n.role,r=t||e;if(r){var s=hb[r];if(s!==null)return s||r}},pb={article:"article",banner:"header",blockquote:"blockquote",button:"button",code:"code",complementary:"aside",contentinfo:"footer",deletion:"del",emphasis:"em",figure:"figure",insertion:"ins",form:"form",list:"ul",listitem:"li",main:"main",navigation:"nav",paragraph:"p",region:"section",strong:"strong"},mb={},gb=function(e){e===void 0&&(e=mb);var t=e.role||e.accessibilityRole;if(t==="label")return"label";var r=tS(e);if(r){if(r==="heading"){var s=e.accessibilityLevel||e["aria-level"];return s!=null?"h"+s:"h1"}return pb[r]}},nS={isDisabled:fb,propsToAccessibilityComponent:gb,propsToAriaRole:tS},wc={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexOrder:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,gridRow:!0,gridRowEnd:!0,gridRowGap:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnGap:!0,gridColumnStart:!0,lineClamp:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0,scale:!0,scaleX:!0,scaleY:!0,scaleZ:!0,shadowOpacity:!0},vb=["ms","Moz","O","Webkit"],_b=(n,e)=>n+e.charAt(0).toUpperCase()+e.substring(1);Object.keys(wc).forEach(n=>{vb.forEach(e=>{wc[_b(e,n)]=wc[n]})});var yb=n=>n==="currentcolor"||n==="currentColor"||n==="inherit"||n.indexOf("var(")===0,$f,D0;function Sb(){if(D0)return $f;D0=1;function n(y){if(typeof y=="number")return y>>>0===y&&y>=0&&y<=4294967295?y:null;if(typeof y!="string")return null;const S=v();let w;if(w=S.hex6.exec(y))return parseInt(w[1]+"ff",16)>>>0;const D=T(y);return D??((w=S.rgb.exec(y))?(m(w[1])<<24|m(w[2])<<16|m(w[3])<<8|255)>>>0:(w=S.rgba.exec(y))?w[6]!==void 0?(m(w[6])<<24|m(w[7])<<16|m(w[8])<<8|x(w[9]))>>>0:(m(w[2])<<24|m(w[3])<<16|m(w[4])<<8|x(w[5]))>>>0:(w=S.hex3.exec(y))?parseInt(w[1]+w[1]+w[2]+w[2]+w[3]+w[3]+"ff",16)>>>0:(w=S.hex8.exec(y))?parseInt(w[1],16)>>>0:(w=S.hex4.exec(y))?parseInt(w[1]+w[1]+w[2]+w[2]+w[3]+w[3]+w[4]+w[4],16)>>>0:(w=S.hsl.exec(y))?(t(g(w[1]),E(w[2]),E(w[3]))|255)>>>0:(w=S.hsla.exec(y))?w[6]!==void 0?(t(g(w[6]),E(w[7]),E(w[8]))|x(w[9]))>>>0:(t(g(w[2]),E(w[3]),E(w[4]))|x(w[5]))>>>0:(w=S.hwb.exec(y))?(r(g(w[1]),E(w[2]),E(w[3]))|255)>>>0:null)}function e(y,S,w){return w<0&&(w+=1),w>1&&(w-=1),w<1/6?y+(S-y)*6*w:w<1/2?S:w<2/3?y+(S-y)*(2/3-w)*6:y}function t(y,S,w){const D=w<.5?w*(1+S):w+S-w*S,L=2*w-D,N=e(L,D,y+1/3),I=e(L,D,y),b=e(L,D,y-1/3);return Math.round(N*255)<<24|Math.round(I*255)<<16|Math.round(b*255)<<8}function r(y,S,w){if(S+w>=1){const I=Math.round(S*255/(S+w));return I<<24|I<<16|I<<8}const D=e(0,1,y+1/3)*(1-S-w)+S,L=e(0,1,y)*(1-S-w)+S,N=e(0,1,y-1/3)*(1-S-w)+S;return Math.round(D*255)<<24|Math.round(L*255)<<16|Math.round(N*255)<<8}const s="[-+]?\\d*\\.?\\d+",o=s+"%";function u(...y){return"\\(\\s*("+y.join(")\\s*,?\\s*(")+")\\s*\\)"}function d(...y){return"\\(\\s*("+y.slice(0,y.length-1).join(")\\s*,?\\s*(")+")\\s*/\\s*("+y[y.length-1]+")\\s*\\)"}function f(...y){return"\\(\\s*("+y.join(")\\s*,\\s*(")+")\\s*\\)"}let h;function v(){return h===void 0&&(h={rgb:new RegExp("rgb"+u(s,s,s)),rgba:new RegExp("rgba("+f(s,s,s,s)+"|"+d(s,s,s,s)+")"),hsl:new RegExp("hsl"+u(s,o,o)),hsla:new RegExp("hsla("+f(s,o,o,s)+"|"+d(s,o,o,s)+")"),hwb:new RegExp("hwb"+u(s,o,o)),hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex4:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{6})$/,hex8:/^#([0-9a-fA-F]{8})$/}),h}function m(y){const S=parseInt(y,10);return S<0?0:S>255?255:S}function g(y){return(parseFloat(y)%360+360)%360/360}function x(y){const S=parseFloat(y);return S<0?0:S>1?255:Math.round(S*255)}function E(y){const S=parseFloat(y);return S<0?0:S>100?1:S/100}function T(y){switch(y){case"transparent":return 0;case"aliceblue":return 4042850303;case"antiquewhite":return 4209760255;case"aqua":return 16777215;case"aquamarine":return 2147472639;case"azure":return 4043309055;case"beige":return 4126530815;case"bisque":return 4293182719;case"black":return 255;case"blanchedalmond":return 4293643775;case"blue":return 65535;case"blueviolet":return 2318131967;case"brown":return 2771004159;case"burlywood":return 3736635391;case"burntsienna":return 3934150143;case"cadetblue":return 1604231423;case"chartreuse":return 2147418367;case"chocolate":return 3530104575;case"coral":return 4286533887;case"cornflowerblue":return 1687547391;case"cornsilk":return 4294499583;case"crimson":return 3692313855;case"cyan":return 16777215;case"darkblue":return 35839;case"darkcyan":return 9145343;case"darkgoldenrod":return 3095792639;case"darkgray":return 2846468607;case"darkgreen":return 6553855;case"darkgrey":return 2846468607;case"darkkhaki":return 3182914559;case"darkmagenta":return 2332068863;case"darkolivegreen":return 1433087999;case"darkorange":return 4287365375;case"darkorchid":return 2570243327;case"darkred":return 2332033279;case"darksalmon":return 3918953215;case"darkseagreen":return 2411499519;case"darkslateblue":return 1211993087;case"darkslategray":return 793726975;case"darkslategrey":return 793726975;case"darkturquoise":return 13554175;case"darkviolet":return 2483082239;case"deeppink":return 4279538687;case"deepskyblue":return 12582911;case"dimgray":return 1768516095;case"dimgrey":return 1768516095;case"dodgerblue":return 512819199;case"firebrick":return 2988581631;case"floralwhite":return 4294635775;case"forestgreen":return 579543807;case"fuchsia":return 4278255615;case"gainsboro":return 3705462015;case"ghostwhite":return 4177068031;case"gold":return 4292280575;case"goldenrod":return 3668254975;case"gray":return 2155905279;case"green":return 8388863;case"greenyellow":return 2919182335;case"grey":return 2155905279;case"honeydew":return 4043305215;case"hotpink":return 4285117695;case"indianred":return 3445382399;case"indigo":return 1258324735;case"ivory":return 4294963455;case"khaki":return 4041641215;case"lavender":return 3873897215;case"lavenderblush":return 4293981695;case"lawngreen":return 2096890111;case"lemonchiffon":return 4294626815;case"lightblue":return 2916673279;case"lightcoral":return 4034953471;case"lightcyan":return 3774873599;case"lightgoldenrodyellow":return 4210742015;case"lightgray":return 3553874943;case"lightgreen":return 2431553791;case"lightgrey":return 3553874943;case"lightpink":return 4290167295;case"lightsalmon":return 4288707327;case"lightseagreen":return 548580095;case"lightskyblue":return 2278488831;case"lightslategray":return 2005441023;case"lightslategrey":return 2005441023;case"lightsteelblue":return 2965692159;case"lightyellow":return 4294959359;case"lime":return 16711935;case"limegreen":return 852308735;case"linen":return 4210091775;case"magenta":return 4278255615;case"maroon":return 2147483903;case"mediumaquamarine":return 1724754687;case"mediumblue":return 52735;case"mediumorchid":return 3126187007;case"mediumpurple":return 2473647103;case"mediumseagreen":return 1018393087;case"mediumslateblue":return 2070474495;case"mediumspringgreen":return 16423679;case"mediumturquoise":return 1221709055;case"mediumvioletred":return 3340076543;case"midnightblue":return 421097727;case"mintcream":return 4127193855;case"mistyrose":return 4293190143;case"moccasin":return 4293178879;case"navajowhite":return 4292783615;case"navy":return 33023;case"oldlace":return 4260751103;case"olive":return 2155872511;case"olivedrab":return 1804477439;case"orange":return 4289003775;case"orangered":return 4282712319;case"orchid":return 3664828159;case"palegoldenrod":return 4008225535;case"palegreen":return 2566625535;case"paleturquoise":return 2951671551;case"palevioletred":return 3681588223;case"papayawhip":return 4293907967;case"peachpuff":return 4292524543;case"peru":return 3448061951;case"pink":return 4290825215;case"plum":return 3718307327;case"powderblue":return 2967529215;case"purple":return 2147516671;case"rebeccapurple":return 1714657791;case"red":return 4278190335;case"rosybrown":return 3163525119;case"royalblue":return 1097458175;case"saddlebrown":return 2336560127;case"salmon":return 4202722047;case"sandybrown":return 4104413439;case"seagreen":return 780883967;case"seashell":return 4294307583;case"sienna":return 2689740287;case"silver":return 3233857791;case"skyblue":return 2278484991;case"slateblue":return 1784335871;case"slategray":return 1887473919;case"slategrey":return 1887473919;case"snow":return 4294638335;case"springgreen":return 16744447;case"steelblue":return 1182971135;case"tan":return 3535047935;case"teal":return 8421631;case"thistle":return 3636451583;case"tomato":return 4284696575;case"turquoise":return 1088475391;case"violet":return 4001558271;case"wheat":return 4125012991;case"white":return 4294967295;case"whitesmoke":return 4126537215;case"yellow":return 4294902015;case"yellowgreen":return 2597139199}return null}return $f=n,$f}var xb=Sb();const Mb=yi(xb);var Eb=n=>{if(n==null)return n;var e=Mb(n);if(e!=null)return e=(e<<24|e>>>8)>>>0,e},iS=function(e,t){if(t===void 0&&(t=1),e!=null){if(typeof e=="string"&&yb(e))return e;var r=Eb(e);if(r!=null){var s=r>>16&255,o=r>>8&255,u=r&255,d=(r>>24&255)/255,f=(d*t).toFixed(2);return"rgba("+s+","+o+","+u+","+f+")"}}},bb={backgroundColor:!0,borderColor:!0,borderTopColor:!0,borderRightColor:!0,borderBottomColor:!0,borderLeftColor:!0,color:!0,shadowColor:!0,textDecorationColor:!0,textShadowColor:!0};function _r(n,e){var t=n;return(e==null||!wc[e])&&typeof n=="number"?t=n+"px":e!=null&&bb[e]&&(t=iS(n)),t}var Si=!!(typeof window<"u"&&window.document&&window.document.createElement),wb={},Tb=!Si||window.CSS!=null&&window.CSS.supports!=null&&(window.CSS.supports("text-decoration-line","none")||window.CSS.supports("-webkit-text-decoration-line","none")),Rb="monospace,monospace",N0='-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',Ab={borderColor:["borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"],borderBlockColor:["borderTopColor","borderBottomColor"],borderInlineColor:["borderRightColor","borderLeftColor"],borderRadius:["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],borderStyle:["borderTopStyle","borderRightStyle","borderBottomStyle","borderLeftStyle"],borderBlockStyle:["borderTopStyle","borderBottomStyle"],borderInlineStyle:["borderRightStyle","borderLeftStyle"],borderWidth:["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"],borderBlockWidth:["borderTopWidth","borderBottomWidth"],borderInlineWidth:["borderRightWidth","borderLeftWidth"],insetBlock:["top","bottom"],insetInline:["left","right"],marginBlock:["marginTop","marginBottom"],marginInline:["marginRight","marginLeft"],paddingBlock:["paddingTop","paddingBottom"],paddingInline:["paddingRight","paddingLeft"],overflow:["overflowX","overflowY"],overscrollBehavior:["overscrollBehaviorX","overscrollBehaviorY"],borderBlockStartColor:["borderTopColor"],borderBlockStartStyle:["borderTopStyle"],borderBlockStartWidth:["borderTopWidth"],borderBlockEndColor:["borderBottomColor"],borderBlockEndStyle:["borderBottomStyle"],borderBlockEndWidth:["borderBottomWidth"],borderEndStartRadius:["borderBottomLeftRadius"],borderEndEndRadius:["borderBottomRightRadius"],borderStartStartRadius:["borderTopLeftRadius"],borderStartEndRadius:["borderTopRightRadius"],insetBlockEnd:["bottom"],insetBlockStart:["top"],marginBlockStart:["marginTop"],marginBlockEnd:["marginBottom"],paddingBlockStart:["paddingTop"],paddingBlockEnd:["paddingBottom"]},rS=(n,e)=>{if(!n)return wb;var t={},r=function(){var d=n[s];if(d==null)return"continue";if(s==="backgroundClip")d==="text"&&(t.backgroundClip=d,t.WebkitBackgroundClip=d);else if(s==="flex")d===-1?(t.flexGrow=0,t.flexShrink=1,t.flexBasis="auto"):t.flex=d;else if(s==="font")t[s]=d.replace("System",N0);else if(s==="fontFamily")if(d.indexOf("System")>-1){var f=d.split(/,\s*/);f[f.indexOf("System")]=N0,t[s]=f.join(",")}else d==="monospace"?t[s]=Rb:t[s]=d;else if(s==="textDecorationLine")Tb?t.textDecorationLine=d:t.textDecoration=d;else if(s==="writingDirection")t.direction=d;else{var h=_r(n[s],s),v=Ab[s];e&&s==="inset"?(n.insetInline==null&&(t.left=h,t.right=h),n.insetBlock==null&&(t.top=h,t.bottom=h)):e&&s==="margin"?(n.marginInline==null&&(t.marginLeft=h,t.marginRight=h),n.marginBlock==null&&(t.marginTop=h,t.marginBottom=h)):e&&s==="padding"?(n.paddingInline==null&&(t.paddingLeft=h,t.paddingRight=h),n.paddingBlock==null&&(t.paddingTop=h,t.paddingBottom=h)):v?v.forEach((m,g)=>{n[m]==null&&(t[m]=h)}):t[s]=h}};for(var s in n)var o=r();return t};function Cb(n,e){for(var t=n.length,r=e^t,s=0,o;t>=4;)o=n.charCodeAt(s)&255|(n.charCodeAt(++s)&255)<<8|(n.charCodeAt(++s)&255)<<16|(n.charCodeAt(++s)&255)<<24,o=(o&65535)*1540483477+(((o>>>16)*1540483477&65535)<<16),o^=o>>>24,o=(o&65535)*1540483477+(((o>>>16)*1540483477&65535)<<16),r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16)^o,t-=4,++s;switch(t){case 3:r^=(n.charCodeAt(s+2)&255)<<16;case 2:r^=(n.charCodeAt(s+1)&255)<<8;case 1:r^=n.charCodeAt(s)&255,r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16)}return r^=r>>>13,r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16),r^=r>>>15,r>>>0}var Pb=n=>Cb(n,1).toString(36),Lb=/[A-Z]/g,Ib=/^ms-/,Xf={};function Db(n){return"-"+n.toLowerCase()}function Nb(n){if(n in Xf)return Xf[n];var e=n.replace(Lb,Db);return Xf[n]=Ib.test(e)?"-"+e:e}var Bu={},zu={},Hu={},O0;function aS(){if(O0)return Hu;O0=1,Object.defineProperty(Hu,"__esModule",{value:!0}),Hu.default=n;function n(e){return e.charAt(0).toUpperCase()+e.slice(1)}return Hu}var U0;function Ob(){if(U0)return zu;U0=1,Object.defineProperty(zu,"__esModule",{value:!0}),zu.default=r;var n=aS(),e=t(n);function t(s){return s&&s.__esModule?s:{default:s}}function r(s,o,u){var d=s[o];if(d&&u.hasOwnProperty(o))for(var f=(0,e.default)(o),h=0;h<d.length;++h){var v=d[h]+f;u[v]||(u[v]=u[o])}return u}return zu}var Gu={},F0;function Ub(){if(F0)return Gu;F0=1,Object.defineProperty(Gu,"__esModule",{value:!0}),Gu.default=n;function n(e,t,r,s,o){for(var u=0,d=e.length;u<d;++u){var f=e[u](t,r,s,o);if(f)return f}}return Gu}var Vu={},k0;function Fb(){if(k0)return Vu;k0=1,Object.defineProperty(Vu,"__esModule",{value:!0}),Vu.default=e;function n(t,r){t.indexOf(r)===-1&&t.push(r)}function e(t,r){if(Array.isArray(r))for(var s=0,o=r.length;s<o;++s)n(t,r[s]);else n(t,r)}return Vu}var Wu={},B0;function kb(){if(B0)return Wu;B0=1,Object.defineProperty(Wu,"__esModule",{value:!0}),Wu.default=n;function n(e){return e instanceof Object&&!Array.isArray(e)}return Wu}var z0;function Bb(){if(z0)return Bu;z0=1,Object.defineProperty(Bu,"__esModule",{value:!0}),Bu.default=h;var n=Ob(),e=f(n),t=Ub(),r=f(t),s=Fb(),o=f(s),u=kb(),d=f(u);function f(v){return v&&v.__esModule?v:{default:v}}function h(v){var m=v.prefixMap,g=v.plugins;return function x(E){for(var T in E){var y=E[T];if((0,d.default)(y))E[T]=x(y);else if(Array.isArray(y)){for(var S=[],w=0,D=y.length;w<D;++w){var L=(0,r.default)(g,T,y[w],E,m);(0,o.default)(S,L||y[w])}S.length>0&&(E[T]=S)}else{var N=(0,r.default)(g,T,y,E,m);N&&(E[T]=N),E=(0,e.default)(m,T,E)}}return E}}return Bu}var zb=Bb();const Hb=yi(zb);var $u={},H0;function Gb(){if(H0)return $u;H0=1,Object.defineProperty($u,"__esModule",{value:!0}),$u.default=n;function n(){return null}return $u}var Vb=Gb();const Wb=yi(Vb);var Xu={};function Tc(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Tc=function(t){return typeof t}:Tc=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Tc(n)}function $b(n){return Kb(n)||Yb(n)||qb(n)||Xb()}function Xb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qb(n,e){if(n){if(typeof n=="string")return Zh(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(t);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Zh(n,e)}}function Yb(n){if(typeof Symbol<"u"&&Symbol.iterator in Object(n))return Array.from(n)}function Kb(n){if(Array.isArray(n))return Zh(n)}function Zh(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function G0(n){return n.filter(function(e,t){return n.lastIndexOf(e)===t})}function sS(n){for(var e=0,t=arguments.length<=1?0:arguments.length-1;e<t;++e){var r=e+1<1||arguments.length<=e+1?void 0:arguments[e+1];for(var s in r){var o=r[s],u=n[s];if(u&&o){if(Array.isArray(u)){n[s]=G0(u.concat(o));continue}if(Array.isArray(o)){n[s]=G0([u].concat($b(o)));continue}if(Tc(o)==="object"){n[s]=sS({},u,o);continue}}n[s]=o}}return n}var Zb=/-([a-z])/g,jb=/^Ms/g,qf={};function Jb(n){return n[1].toUpperCase()}function oS(n){if(qf.hasOwnProperty(n))return qf[n];var e=n.replace(Zb,Jb).replace(jb,"ms");return qf[n]=e,e}var Qb=/[A-Z]/g,ew=/^ms-/,Yf={};function tw(n){return"-"+n.toLowerCase()}function lS(n){if(Yf.hasOwnProperty(n))return Yf[n];var e=n.replace(Qb,tw);return Yf[n]=ew.test(e)?"-"+e:e}const nw=Object.freeze(Object.defineProperty({__proto__:null,default:lS},Symbol.toStringTag,{value:"Module"}));function nd(n){return lS(n)}function uS(n,e){return nd(n)+":"+e}function iw(n){var e="";for(var t in n){var r=n[t];typeof r!="string"&&typeof r!="number"||(e&&(e+=";"),e+=uS(t,r))}return e}var rw=/^(Webkit|Moz|O|ms)/;function aw(n){return rw.test(n)}var sw=/-webkit-|-moz-|-ms-/;function ow(n){return typeof n=="string"&&sw.test(n)}var xl={borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},V0=["animationIterationCount","boxFlex","boxFlexGroup","boxOrdinalGroup","columnCount","flex","flexGrow","flexPositive","flexShrink","flexNegative","flexOrder","gridColumn","gridColumnEnd","gridColumnStart","gridRow","gridRowEnd","gridRowStart","lineClamp","order"],W0=["Webkit","ms","Moz","O"];function lw(n,e){return n+e.charAt(0).toUpperCase()+e.slice(1)}for(var Kf=0,uw=V0.length;Kf<uw;++Kf){var $0=V0[Kf];xl[$0]=!0;for(var Zf=0,cw=W0.length;Zf<cw;++Zf)xl[lw(W0[Zf],$0)]=!0}for(var dw in xl)xl[nd(dw)]=!0;function fw(n){return xl.hasOwnProperty(n)}var hw=/^(ms|Webkit|Moz|O)/;function cS(n){var e=n.replace(hw,"");return e.charAt(0).toLowerCase()+e.slice(1)}function pw(n){return cS(oS(n))}function mw(n,e){return e.join(";"+nd(n)+":")}var gw=/(-ms-|-webkit-|-moz-|-o-)/g;function vw(n){return typeof n=="string"?n.replace(gw,""):n}const _w=Object.freeze(Object.defineProperty({__proto__:null,assignStyle:sS,camelCaseProperty:oS,cssifyDeclaration:uS,cssifyObject:iw,hyphenateProperty:nd,isPrefixedProperty:aw,isPrefixedValue:ow,isUnitlessProperty:fw,normalizeProperty:pw,resolveArrayValue:mw,unprefixProperty:cS,unprefixValue:vw},Symbol.toStringTag,{value:"Module"})),dS=Jy(_w);var X0;function yw(){if(X0)return Xu;X0=1,Object.defineProperty(Xu,"__esModule",{value:!0}),Xu.default=r;var n=dS,e=/cross-fade\(/g,t=["-webkit-",""];function r(s,o){if(typeof o=="string"&&!(0,n.isPrefixedValue)(o)&&o.indexOf("cross-fade(")!==-1)return t.map(function(u){return o.replace(e,u+"cross-fade(")})}return Xu}var Sw=yw();const xw=yi(Sw);var qu={},q0;function Mw(){if(q0)return qu;q0=1,Object.defineProperty(qu,"__esModule",{value:!0}),qu.default=t;var n=["-webkit-","-moz-",""],e={"zoom-in":!0,"zoom-out":!0,grab:!0,grabbing:!0};function t(r,s){if(r==="cursor"&&e.hasOwnProperty(s))return n.map(function(o){return o+s})}return qu}var Ew=Mw();const bw=yi(Ew);var Yu={},Y0;function ww(){if(Y0)return Yu;Y0=1,Object.defineProperty(Yu,"__esModule",{value:!0}),Yu.default=r;var n=dS,e=/filter\(/g,t=["-webkit-",""];function r(s,o){if(typeof o=="string"&&!(0,n.isPrefixedValue)(o)&&o.indexOf("filter(")!==-1)return t.map(function(u){return o.replace(e,u+"filter(")})}return Yu}var Tw=ww();const Rw=yi(Tw);var Ku={},jf={},K0;function fS(){return K0||(K0=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=t;var e=/-webkit-|-moz-|-ms-/;function t(r){return typeof r=="string"&&e.test(r)}})(jf)),jf}var Z0;function Aw(){if(Z0)return Ku;Z0=1,Object.defineProperty(Ku,"__esModule",{value:!0}),Ku.default=s;var n=fS(),e=t(n);function t(o){return o&&o.__esModule?o:{default:o}}var r=["-webkit-",""];function s(o,u){if(typeof u=="string"&&!(0,e.default)(u)&&u.indexOf("image-set(")>-1)return r.map(function(d){return u.replace(/image-set\(/g,d+"image-set(")})}return Ku}var Cw=Aw();const Pw=yi(Cw);var Zu={},j0;function Lw(){if(j0)return Zu;j0=1,Object.defineProperty(Zu,"__esModule",{value:!0}),Zu.default=e;var n={marginBlockStart:["WebkitMarginBefore"],marginBlockEnd:["WebkitMarginAfter"],marginInlineStart:["WebkitMarginStart","MozMarginStart"],marginInlineEnd:["WebkitMarginEnd","MozMarginEnd"],paddingBlockStart:["WebkitPaddingBefore"],paddingBlockEnd:["WebkitPaddingAfter"],paddingInlineStart:["WebkitPaddingStart","MozPaddingStart"],paddingInlineEnd:["WebkitPaddingEnd","MozPaddingEnd"],borderBlockStart:["WebkitBorderBefore"],borderBlockStartColor:["WebkitBorderBeforeColor"],borderBlockStartStyle:["WebkitBorderBeforeStyle"],borderBlockStartWidth:["WebkitBorderBeforeWidth"],borderBlockEnd:["WebkitBorderAfter"],borderBlockEndColor:["WebkitBorderAfterColor"],borderBlockEndStyle:["WebkitBorderAfterStyle"],borderBlockEndWidth:["WebkitBorderAfterWidth"],borderInlineStart:["WebkitBorderStart","MozBorderStart"],borderInlineStartColor:["WebkitBorderStartColor","MozBorderStartColor"],borderInlineStartStyle:["WebkitBorderStartStyle","MozBorderStartStyle"],borderInlineStartWidth:["WebkitBorderStartWidth","MozBorderStartWidth"],borderInlineEnd:["WebkitBorderEnd","MozBorderEnd"],borderInlineEndColor:["WebkitBorderEndColor","MozBorderEndColor"],borderInlineEndStyle:["WebkitBorderEndStyle","MozBorderEndStyle"],borderInlineEndWidth:["WebkitBorderEndWidth","MozBorderEndWidth"]};function e(t,r,s){if(Object.prototype.hasOwnProperty.call(n,t))for(var o=n[t],u=0,d=o.length;u<d;++u)s[o[u]]=r}return Zu}var Iw=Lw();const Dw=yi(Iw);var ju={},J0;function Nw(){if(J0)return ju;J0=1,Object.defineProperty(ju,"__esModule",{value:!0}),ju.default=n;function n(e,t){if(e==="position"&&t==="sticky")return["-webkit-sticky","sticky"]}return ju}var Ow=Nw();const Uw=yi(Ow);var Ju={},Q0;function Fw(){if(Q0)return Ju;Q0=1,Object.defineProperty(Ju,"__esModule",{value:!0}),Ju.default=r;var n=["-webkit-","-moz-",""],e={maxHeight:!0,maxWidth:!0,width:!0,height:!0,columnWidth:!0,minWidth:!0,minHeight:!0},t={"min-content":!0,"max-content":!0,"fill-available":!0,"fit-content":!0,"contain-floats":!0};function r(s,o){if(e.hasOwnProperty(s)&&t.hasOwnProperty(o))return n.map(function(u){return u+o})}return Ju}var kw=Fw();const Bw=yi(kw);var Qu={},Jf={};const zw=Jy(nw);var e_;function Hw(){return e_||(e_=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=s;var e=zw,t=r(e);function r(o){return o&&o.__esModule?o:{default:o}}function s(o){return(0,t.default)(o)}})(Jf)),Jf}var t_;function Gw(){if(t_)return Qu;t_=1,Object.defineProperty(Qu,"__esModule",{value:!0}),Qu.default=v;var n=Hw(),e=u(n),t=fS(),r=u(t),s=aS(),o=u(s);function u(m){return m&&m.__esModule?m:{default:m}}var d={transition:!0,transitionProperty:!0,WebkitTransition:!0,WebkitTransitionProperty:!0,MozTransition:!0,MozTransitionProperty:!0},f={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-"};function h(m,g){if((0,r.default)(m))return m;for(var x=m.split(/,(?![^()]*(?:\([^()]*\))?\))/g),E=0,T=x.length;E<T;++E){var y=x[E],S=[y];for(var w in g){var D=(0,e.default)(w);if(y.indexOf(D)>-1&&D!=="order")for(var L=g[w],N=0,I=L.length;N<I;++N)S.unshift(y.replace(D,f[L[N]]+D))}x[E]=S.join(",")}return x.join(",")}function v(m,g,x,E){if(typeof g=="string"&&d.hasOwnProperty(m)){var T=h(g,E),y=T.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(w){return!/-moz-|-ms-/.test(w)}).join(",");if(m.indexOf("Webkit")>-1)return y;var S=T.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(w){return!/-webkit-|-ms-/.test(w)}).join(",");return m.indexOf("Moz")>-1?S:(x["Webkit"+(0,o.default)(m)]=y,x["Moz"+(0,o.default)(m)]=S,T)}}return Qu}var Vw=Gw();const Ww=yi(Vw);var Gt=["Webkit"],$w=["Moz"],Xw=["Webkit","Moz"],ln=["Webkit","ms"],qw=["Webkit","Moz","ms"];const Yw={plugins:[Wb,xw,bw,Rw,Pw,Dw,Uw,Bw,Ww],prefixMap:{appearance:qw,userSelect:Xw,textEmphasisPosition:ln,textEmphasis:ln,textEmphasisStyle:ln,textEmphasisColor:ln,boxDecorationBreak:ln,clipPath:Gt,maskImage:ln,maskMode:ln,maskRepeat:ln,maskPosition:ln,maskClip:ln,maskOrigin:ln,maskSize:ln,maskComposite:ln,mask:ln,maskBorderSource:ln,maskBorderMode:ln,maskBorderSlice:ln,maskBorderWidth:ln,maskBorderOutset:ln,maskBorderRepeat:ln,maskBorder:ln,maskType:ln,textDecorationStyle:Gt,textDecorationSkip:Gt,textDecorationLine:Gt,textDecorationColor:Gt,filter:Gt,breakAfter:Gt,breakBefore:Gt,breakInside:Gt,columnCount:Gt,columnFill:Gt,columnGap:Gt,columnRule:Gt,columnRuleColor:Gt,columnRuleStyle:Gt,columnRuleWidth:Gt,columns:Gt,columnSpan:Gt,columnWidth:Gt,backdropFilter:Gt,hyphens:Gt,flowInto:Gt,flowFrom:Gt,regionFragment:Gt,textOrientation:Gt,tabSize:$w,fontKerning:Gt,textSizeAdjust:Gt}};var Kw=Hb(Yw),Zw=["animationKeyframes"],n_=new Map,jw={},Jw=1,Qw=3,eT={borderColor:2,borderRadius:2,borderStyle:2,borderWidth:2,display:2,flex:2,inset:2,margin:2,overflow:2,overscrollBehavior:2,padding:2,insetBlock:2.1,insetInline:2.1,marginInline:2.1,marginBlock:2.1,paddingInline:2.1,paddingBlock:2.1,borderBlockStartColor:2.2,borderBlockStartStyle:2.2,borderBlockStartWidth:2.2,borderBlockEndColor:2.2,borderBlockEndStyle:2.2,borderBlockEndWidth:2.2,borderInlineStartColor:2.2,borderInlineStartStyle:2.2,borderInlineStartWidth:2.2,borderInlineEndColor:2.2,borderInlineEndStyle:2.2,borderInlineEndWidth:2.2,borderEndStartRadius:2.2,borderEndEndRadius:2.2,borderStartStartRadius:2.2,borderStartEndRadius:2.2,insetBlockEnd:2.2,insetBlockStart:2.2,insetInlineEnd:2.2,insetInlineStart:2.2,marginBlockStart:2.2,marginBlockEnd:2.2,marginInlineStart:2.2,marginInlineEnd:2.2,paddingBlockStart:2.2,paddingBlockEnd:2.2,paddingInlineStart:2.2,paddingInlineEnd:2.2},jh="borderTopLeftRadius",Jh="borderTopRightRadius",Qh="borderBottomLeftRadius",ep="borderBottomRightRadius",tp="borderLeftColor",np="borderLeftStyle",ip="borderLeftWidth",rp="borderRightColor",ap="borderRightStyle",sp="borderRightWidth",op="right",lp="marginLeft",up="marginRight",cp="paddingLeft",dp="paddingRight",fp="left",Bc={[jh]:Jh,[Jh]:jh,[Qh]:ep,[ep]:Qh,[tp]:rp,[np]:ap,[ip]:sp,[rp]:tp,[ap]:np,[sp]:ip,[fp]:op,[lp]:up,[up]:lp,[cp]:dp,[dp]:cp,[op]:fp},pl={borderStartStartRadius:jh,borderStartEndRadius:Jh,borderEndStartRadius:Qh,borderEndEndRadius:ep,borderInlineStartColor:tp,borderInlineStartStyle:np,borderInlineStartWidth:ip,borderInlineEndColor:rp,borderInlineEndStyle:ap,borderInlineEndWidth:sp,insetInlineEnd:op,insetInlineStart:fp,marginInlineStart:lp,marginInlineEnd:up,paddingInlineStart:cp,paddingInlineEnd:dp},hS=["clear","float","textAlign"];function tT(n){var e={$$css:!0},t=[];function r(s,o,u){var d=rT(u,o),f=o+d,h=n_.get(f),v;if(h!=null)v=h[0],t.push(h[1]);else{var m=s!==o?f:d;v=vm("r",s,m);var g=eT[s]||Qw,x=aT(v,o,u),E=[x,g];t.push(E),n_.set(f,[v,E])}return v}return Object.keys(n).sort().forEach(s=>{var o=n[s];if(o!=null){var u;if(hS.indexOf(s)>-1){var d=r(s,s,"left"),f=r(s,s,"right");o==="start"?u=[d,f]:o==="end"&&(u=[f,d])}var h=pl[s];if(h!=null){var v=r(s,h,o),m=r(s,Bc[h],o);u=[v,m]}if(s==="transitionProperty"){for(var g=Array.isArray(o)?o:[o],x=[],E=0;E<g.length;E++){var T=g[E];typeof T=="string"&&pl[T]!=null&&x.push(E)}if(x.length>0){var y=[...g],S=[...g];x.forEach(w=>{var D=y[w];if(typeof D=="string"){var L=pl[D],N=Bc[L];y[w]=L,S[w]=N;var I=r(s,s,y),b=r(s,s,S);u=[I,b]}})}}u==null?u=r(s,s,o):e.$$css$localize=!0,e[s]=u}}),[e,t]}function nT(n,e){var t={$$css:!0},r=[],s=n.animationKeyframes,o=hs(n,Zw),u=vm("css",e,JSON.stringify(n)),d="."+u,f;if(s!=null){var h=pS(s),v=h[0],m=h[1];f=v.join(","),r.push(...m)}var g=Hr(Ii(Ii({},o),{},{animationName:f}));return r.push(""+d+g),t[u]=u,[t,[[r,Jw]]]}function iT(n,e){var t=n||jw,r={},s={},o=function(){var h=t[u],v=u,m=h;if(!Object.prototype.hasOwnProperty.call(t,u)||h==null)return"continue";hS.indexOf(u)>-1&&(h==="start"?m=e?"right":"left":h==="end"&&(m=e?"left":"right"));var g=pl[u];if(g!=null&&(v=e?Bc[g]:g),u==="transitionProperty"){var x=Array.isArray(h)?h:[h];x.forEach((E,T)=>{if(typeof E=="string"){var y=pl[E];y!=null&&(x[T]=e?Bc[y]:y,m=x.join(" "))}})}r[v]||(s[v]=m),v===u&&(r[v]=!0)};for(var u in t)var d=o();return rS(s,!0)}function rT(n,e){var t=_r(n,e);return typeof t!="string"?JSON.stringify(t||""):t}function aT(n,e,t){var r=[],s="."+n;switch(e){case"animationKeyframes":{var o=pS(t),u=o[0],d=o[1],f=Hr({animationName:u.join(",")});r.push(""+s+f,...d);break}case"placeholderTextColor":{var h=Hr({color:t,opacity:1});r.push(s+"::-webkit-input-placeholder"+h,s+"::-moz-placeholder"+h,s+":-ms-input-placeholder"+h,s+"::placeholder"+h);break}case"pointerEvents":{var v=t;if(t==="auto"||t==="box-only"){if(v="auto!important",t==="box-only"){var m=Hr({pointerEvents:"none"});r.push(s+">*"+m)}}else if((t==="none"||t==="box-none")&&(v="none!important",t==="box-none")){var g=Hr({pointerEvents:"auto"});r.push(s+">*"+g)}var x=Hr({pointerEvents:v});r.push(""+s+x);break}case"scrollbarWidth":{t==="none"&&r.push(s+"::-webkit-scrollbar{display:none}");var E=Hr({scrollbarWidth:t});r.push(""+s+E);break}default:{var T=Hr({[e]:t});r.push(""+s+T);break}}return r}function Hr(n){var e=Kw(rS(n)),t=Object.keys(e).map(r=>{var s=e[r],o=Nb(r);return Array.isArray(s)?s.map(u=>o+":"+u).join(";"):o+":"+s}).sort().join(";");return"{"+t+";}"}function vm(n,e,t){var r=Pb(e+t);return n+"-"+r}function sT(n){var e=["-webkit-",""],t=vm("r","animation",JSON.stringify(n)),r="{"+Object.keys(n).map(o=>{var u=n[o],d=Hr(u);return""+o+d}).join("")+"}",s=e.map(o=>"@"+o+"keyframes "+t+r);return[t,s]}function pS(n){if(typeof n=="number")throw new Error("Invalid CSS keyframes type: "+typeof n);var e=[],t=[],r=Array.isArray(n)?n:[n];return r.forEach(s=>{if(typeof s=="string")e.push(s);else{var o=sT(s),u=o[0],d=o[1];e.push(u),t.push(...d)}}),[e,t]}function Qf(n,e,t){if(Si){var r=e??document,s=r.getElementById(n);if(s==null)if(s=document.createElement("style"),s.setAttribute("id",n),typeof t=="string"&&s.appendChild(document.createTextNode(t)),r instanceof ShadowRoot)r.insertBefore(s,r.firstChild);else{var o=r.head;o&&o.insertBefore(s,o.firstChild)}return s.sheet}else return null}var oT=Array.prototype.slice;function eh(n){var e={},t={};if(n!=null){var r;oT.call(n.cssRules).forEach((u,d)=>{var f=u.cssText;if(f.indexOf("stylesheet-group")>-1)r=cT(u),e[r]={start:d,rules:[f]};else{var h=r_(f);h!=null&&(t[h]=!0,e[r].rules.push(f))}})}function s(u,d,f){var h=i_(e),v=h.indexOf(d),m=v+1,g=h[m],x=g!=null&&e[g].start!=null?e[g].start:u.cssRules.length,E=fT(u,f,x);if(E){e[d].start==null&&(e[d].start=x);for(var T=m;T<h.length;T+=1){var y=h[T],S=e[y].start||0;e[y].start=S+1}}return E}var o={getTextContent(){return i_(e).map(u=>{var d=e[u].rules,f=d.shift();return d.sort(),d.unshift(f),d.join(`
`)}).join(`
`)},insert(u,d){var f=Number(d);if(e[f]==null){var h=lT(f);e[f]={start:null,rules:[h]},n!=null&&s(n,f,h)}var v=r_(u);if(v!=null&&t[v]==null&&(t[v]=!0,e[f].rules.push(u),n!=null)){var m=s(n,f,u);m||e[f].rules.pop()}}};return o}function lT(n){return'[stylesheet-group="'+n+'"]{}'}var uT=/["']/g;function cT(n){return Number(n.selectorText.split(uT)[1])}function i_(n){return Object.keys(n).map(Number).sort((e,t)=>e>t?1:-1)}var dT=/\s*([,])\s*/g;function r_(n){var e=n.split("{")[0].trim();return e!==""?e.replace(dT,"$1"):null}function fT(n,e,t){try{return n.insertRule(e,t),!0}catch{return!1}}var hT="react-native-stylesheet",th=new WeakMap,Wi=[],a_=["html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}","body{margin:0;}","button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}","input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}"];function pT(n,e){e===void 0&&(e=hT);var t;if(Si){var r=document;if(Wi.length===0)t=eh(Qf(e)),a_.forEach(d=>{t.insert(d,0)}),th.set(r,Wi.length),Wi.push(t);else{var s=th.get(r);if(s==null){var o=Wi[0],u=o!=null?o.getTextContent():"";t=eh(Qf(e,r,u)),th.set(r,Wi.length),Wi.push(t)}else t=Wi[s]}}else Wi.length===0?(t=eh(Qf(e)),a_.forEach(d=>{t.insert(d,0)}),Wi.push(t)):t=Wi[0];return{getTextContent(){return t.getTextContent()},id:e,insert(d,f){Wi.forEach(h=>{h.insert(d,f)})}}}var ec={},s_;function mT(){if(s_)return ec;s_=1,Object.defineProperty(ec,"__esModule",{value:!0}),ec.localizeStyle=r;var n=new WeakMap,e="$$css$localize";function t(s,o){var u={};for(var d in s)if(d!==e){var f=s[d];Array.isArray(f)?u[d]=o?f[1]:f[0]:u[d]=f}return u}function r(s,o){if(s[e]!=null){var u=o?1:0;if(n.has(s)){var d=n.get(s),f=d[u];return f==null&&(f=t(s,o),d[u]=f,n.set(s,d)),f}var h=t(s,o),v=new Array(2);return v[u]=h,n.set(s,v),h}return s}return ec}var nh,o_;function gT(){return o_||(o_=1,nh=mT()),nh}var vT=gT(),_T={},mS={height:0,width:0},gS=n=>{var e=n.shadowColor,t=n.shadowOffset,r=n.shadowOpacity,s=n.shadowRadius,o=t||mS,u=o.height,d=o.width,f=_r(d),h=_r(u),v=_r(s||0),m=iS(e||"black",r);if(m!=null&&f!=null&&h!=null&&v!=null)return f+" "+h+" "+v+" "+m},yT=n=>{var e=n.textShadowColor,t=n.textShadowOffset,r=n.textShadowRadius,s=t||mS,o=s.height,u=s.width,d=r||0,f=_r(u),h=_r(o),v=_r(d),m=_r(e,"textShadowColor");if(m&&(o!==0||u!==0||d!==0)&&f!=null&&h!=null&&v!=null)return f+" "+h+" "+v+" "+m},ST=n=>{var e=Object.keys(n)[0],t=n[e];if(e==="matrix"||e==="matrix3d")return e+"("+t.join(",")+")";var r=_r(t,e);return e+"("+r+")"},xT=n=>n.map(ST).join(" "),MT={borderBottomEndRadius:"borderEndEndRadius",borderBottomStartRadius:"borderEndStartRadius",borderTopEndRadius:"borderStartEndRadius",borderTopStartRadius:"borderStartStartRadius",borderEndColor:"borderInlineEndColor",borderEndStyle:"borderInlineEndStyle",borderEndWidth:"borderInlineEndWidth",borderStartColor:"borderInlineStartColor",borderStartStyle:"borderInlineStartStyle",borderStartWidth:"borderInlineStartWidth",end:"insetInlineEnd",marginEnd:"marginInlineEnd",marginHorizontal:"marginInline",marginStart:"marginInlineStart",marginVertical:"marginBlock",paddingEnd:"paddingInlineEnd",paddingHorizontal:"paddingInline",paddingStart:"paddingInlineStart",paddingVertical:"paddingBlock",start:"insetInlineStart"},ET={elevation:!0,overlayColor:!0,resizeMode:!0,tintColor:!0},vS=function(e,t){t===void 0&&(t={});var r=e||_T,s={};if(t.shadow,r.shadowColor!=null||r.shadowOffset!=null||r.shadowOpacity!=null||r.shadowRadius!=null){var o=gS(r);if(o!=null&&s.boxShadow==null){var u=r.boxShadow,d=u?u+", "+o:o;s.boxShadow=d}}if(t.textShadow,r.textShadowColor!=null||r.textShadowOffset!=null||r.textShadowRadius!=null){var f=yT(r);if(f!=null&&s.textShadow==null){var h=r.textShadow,v=h?h+", "+f:f;s.textShadow=v}}for(var m in r)if(!(ET[m]!=null||m==="shadowColor"||m==="shadowOffset"||m==="shadowOpacity"||m==="shadowRadius"||m==="textShadowColor"||m==="textShadowOffset"||m==="textShadowRadius")){var g=r[m],x=MT[m]||m,E=g;!Object.prototype.hasOwnProperty.call(r,m)||x!==m&&r[x]!=null||(x==="aspectRatio"&&typeof E=="number"?s[x]=E.toString():x==="fontVariant"?(Array.isArray(E)&&E.length>0&&(E=E.join(" ")),s[x]=E):x==="textAlignVertical"?r.verticalAlign==null&&(s.verticalAlign=E==="center"?"middle":E):x==="transform"?(Array.isArray(E)&&(E=xT(E)),s.transform=E):s[x]=E)}return s},Zo={},l_;function bT(){if(l_)return Zo;l_=1,Object.defineProperty(Zo,"__esModule",{value:!0}),Zo.styleq=void 0;var n=new WeakMap,e="$$css";function t(s){var o,u,d;return s!=null&&(o=s.disableCache===!0,u=s.disableMix===!0,d=s.transform),function(){for(var h=[],v="",m=null,g=o?null:n,x=new Array(arguments.length),E=0;E<arguments.length;E++)x[E]=arguments[E];for(;x.length>0;){var T=x.pop();if(!(T==null||T===!1)){if(Array.isArray(T)){for(var y=0;y<T.length;y++)x.push(T[y]);continue}var S=d!=null?d(T):T;if(S.$$css){var w="";if(g!=null&&g.has(S)){var D=g.get(S);D!=null&&(w=D[0],h.push.apply(h,D[1]),g=D[2])}else{var L=[];for(var N in S){var I=S[N];N!==e&&(typeof I=="string"||I===null?h.includes(N)||(h.push(N),g!=null&&L.push(N),typeof I=="string"&&(w+=w?" "+I:I)):console.error("styleq: ".concat(N," typeof ").concat(String(I),' is not "string" or "null".')))}if(g!=null){var b=new WeakMap;g.set(S,[w,L,b]),g=b}}w&&(v=v?w+" "+v:w)}else if(u)m==null&&(m={}),m=Object.assign({},S,m);else{var C=null;for(var k in S){var O=S[k];O!==void 0&&(h.includes(k)||(O!=null&&(m==null&&(m={}),C==null&&(C={}),C[k]=O),h.push(k),g=null))}C!=null&&(m=Object.assign(C,m))}}}var G=[v,m];return G}}var r=t();return Zo.styleq=r,r.factory=t,Zo}var wT=bT(),TT=["writingDirection"],_S=new WeakMap,zc=pT(),yS={shadow:!0,textShadow:!0};function RT(n,e){e===void 0&&(e={});var t=e,r=t.writingDirection,s=hs(t,TT),o=r==="rtl";return wT.styleq.factory({transform(u){var d=_S.get(u);return d!=null?vT.localizeStyle(d,o):vS(u,Ii(Ii({},yS),s))}})(n)}function SS(n){n.forEach(e=>{var t=e[0],r=e[1];zc!=null&&t.forEach(s=>{zc.insert(s,r)})})}function AT(n){var e=tT(vS(n,yS)),t=e[0],r=e[1];return SS(r),t}function CT(n,e){var t=nT(n,e),r=t[0],s=t[1];return SS(s),r}var xS={position:"absolute",left:0,right:0,top:0,bottom:0},PT=MS({x:Ii({},xS)}).x;function MS(n){return Object.keys(n).forEach(e=>{var t=n[e];if(t!=null&&t.$$css!==!0){var r;e.indexOf("$raw")>-1?r=CT(t,e.split("$raw")[0]):r=AT(t),_S.set(t,r)}}),n}function LT(n,e){return[n,e]}function IT(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];for(var r=e.flat(1/0),s={},o=0;o<r.length;o++){var u=r[o];u!=null&&typeof u=="object"&&Object.assign(s,u)}return s}function DT(){return{id:zc.id,textContent:zc.getTextContent()}}function qr(n,e){e===void 0&&(e={});var t=e.writingDirection==="rtl",r=RT(n,e);return Array.isArray(r)&&r[1]!=null&&(r[1]=iT(r[1],t)),r}qr.absoluteFill=PT;qr.absoluteFillObject=xS;qr.create=MS;qr.compose=LT;qr.flatten=IT;qr.getSheet=DT;qr.hairlineWidth=1;Si&&window.__REACT_DEVTOOLS_GLOBAL_HOOK__&&(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle=qr.flatten);var Er=qr,NT=["aria-activedescendant","accessibilityActiveDescendant","aria-atomic","accessibilityAtomic","aria-autocomplete","accessibilityAutoComplete","aria-busy","accessibilityBusy","aria-checked","accessibilityChecked","aria-colcount","accessibilityColumnCount","aria-colindex","accessibilityColumnIndex","aria-colspan","accessibilityColumnSpan","aria-controls","accessibilityControls","aria-current","accessibilityCurrent","aria-describedby","accessibilityDescribedBy","aria-details","accessibilityDetails","aria-disabled","accessibilityDisabled","aria-errormessage","accessibilityErrorMessage","aria-expanded","accessibilityExpanded","aria-flowto","accessibilityFlowTo","aria-haspopup","accessibilityHasPopup","aria-hidden","accessibilityHidden","aria-invalid","accessibilityInvalid","aria-keyshortcuts","accessibilityKeyShortcuts","aria-label","accessibilityLabel","aria-labelledby","accessibilityLabelledBy","aria-level","accessibilityLevel","aria-live","accessibilityLiveRegion","aria-modal","accessibilityModal","aria-multiline","accessibilityMultiline","aria-multiselectable","accessibilityMultiSelectable","aria-orientation","accessibilityOrientation","aria-owns","accessibilityOwns","aria-placeholder","accessibilityPlaceholder","aria-posinset","accessibilityPosInSet","aria-pressed","accessibilityPressed","aria-readonly","accessibilityReadOnly","aria-required","accessibilityRequired","role","accessibilityRole","aria-roledescription","accessibilityRoleDescription","aria-rowcount","accessibilityRowCount","aria-rowindex","accessibilityRowIndex","aria-rowspan","accessibilityRowSpan","aria-selected","accessibilitySelected","aria-setsize","accessibilitySetSize","aria-sort","accessibilitySort","aria-valuemax","accessibilityValueMax","aria-valuemin","accessibilityValueMin","aria-valuenow","accessibilityValueNow","aria-valuetext","accessibilityValueText","dataSet","focusable","id","nativeID","pointerEvents","style","tabIndex","testID"],OT={},UT=Object.prototype.hasOwnProperty,FT=Array.isArray,kT=/[A-Z]/g;function BT(n){return"-"+n.toLowerCase()}function zT(n){return n.replace(kT,BT)}function zs(n){return FT(n)?n.join(" "):n}var HT=Er.create({auto:{pointerEvents:"auto"},"box-none":{pointerEvents:"box-none"},"box-only":{pointerEvents:"box-only"},none:{pointerEvents:"none"}}),GT=(n,e,t)=>{e||(e=OT);var r=e,s=r["aria-activedescendant"],o=r.accessibilityActiveDescendant,u=r["aria-atomic"],d=r.accessibilityAtomic,f=r["aria-autocomplete"],h=r.accessibilityAutoComplete,v=r["aria-busy"],m=r.accessibilityBusy,g=r["aria-checked"],x=r.accessibilityChecked,E=r["aria-colcount"],T=r.accessibilityColumnCount,y=r["aria-colindex"],S=r.accessibilityColumnIndex,w=r["aria-colspan"],D=r.accessibilityColumnSpan,L=r["aria-controls"],N=r.accessibilityControls,I=r["aria-current"],b=r.accessibilityCurrent,C=r["aria-describedby"],k=r.accessibilityDescribedBy,O=r["aria-details"],G=r.accessibilityDetails,W=r["aria-disabled"],X=r.accessibilityDisabled,B=r["aria-errormessage"],ie=r.accessibilityErrorMessage,te=r["aria-expanded"],Q=r.accessibilityExpanded,j=r["aria-flowto"],q=r.accessibilityFlowTo,Z=r["aria-haspopup"],U=r.accessibilityHasPopup,J=r["aria-hidden"],Te=r.accessibilityHidden,ne=r["aria-invalid"],ye=r.accessibilityInvalid,Se=r["aria-keyshortcuts"],we=r.accessibilityKeyShortcuts,pe=r["aria-label"],ue=r.accessibilityLabel,Ge=r["aria-labelledby"],ve=r.accessibilityLabelledBy,De=r["aria-level"],Je=r.accessibilityLevel,ze=r["aria-live"],st=r.accessibilityLiveRegion,We=r["aria-modal"],wt=r.accessibilityModal,Ct=r["aria-multiline"],un=r.accessibilityMultiline,Ot=r["aria-multiselectable"],en=r.accessibilityMultiSelectable,cn=r["aria-orientation"],wn=r.accessibilityOrientation,Y=r["aria-owns"],Tn=r.accessibilityOwns,Ut=r["aria-placeholder"],Ft=r.accessibilityPlaceholder,Fe=r["aria-posinset"],Zt=r.accessibilityPosInSet,it=r["aria-pressed"],ot=r.accessibilityPressed,F=r["aria-readonly"],A=r.accessibilityReadOnly,ae=r["aria-required"],be=r.accessibilityRequired;r.role,r.accessibilityRole;var _e=r["aria-roledescription"],Pe=r.accessibilityRoleDescription,Ne=r["aria-rowcount"],he=r.accessibilityRowCount,me=r["aria-rowindex"],Ce=r.accessibilityRowIndex,H=r["aria-rowspan"],ge=r.accessibilityRowSpan,fe=r["aria-selected"],Oe=r.accessibilitySelected,Ae=r["aria-setsize"],Le=r.accessibilitySetSize,Qe=r["aria-sort"],mt=r.accessibilitySort,Me=r["aria-valuemax"],rt=r.accessibilityValueMax,ft=r["aria-valuemin"],He=r.accessibilityValueMin,xt=r["aria-valuenow"],$t=r.accessibilityValueNow,Ln=r["aria-valuetext"],Zr=r.accessibilityValueText,ir=r.dataSet,jr=r.focusable,Oa=r.id,xi=r.nativeID,ri=r.pointerEvents,Jr=r.style,rr=r.tabIndex,Qr=r.testID,$e=hs(r,NT),Ua=W||X,zn=nS.propsToAriaRole(e),ar=s??o;ar!=null&&($e["aria-activedescendant"]=ar);var gs=u!=null?s:d;gs!=null&&($e["aria-atomic"]=gs);var Ht=f??h;Ht!=null&&($e["aria-autocomplete"]=Ht);var Fa=v??m;Fa!=null&&($e["aria-busy"]=Fa);var ea=g??x;ea!=null&&($e["aria-checked"]=ea);var ka=E??T;ka!=null&&($e["aria-colcount"]=ka);var Rr=y??S;Rr!=null&&($e["aria-colindex"]=Rr);var Ba=w??D;Ba!=null&&($e["aria-colspan"]=Ba);var P=L??N;P!=null&&($e["aria-controls"]=zs(P));var V=I??b;V!=null&&($e["aria-current"]=V);var oe=C??k;oe!=null&&($e["aria-describedby"]=zs(oe));var re=O??G;re!=null&&($e["aria-details"]=re),Ua===!0&&($e["aria-disabled"]=!0,(n==="button"||n==="form"||n==="input"||n==="select"||n==="textarea")&&($e.disabled=!0));var ee=B??ie;ee!=null&&($e["aria-errormessage"]=ee);var ke=te??Q;ke!=null&&($e["aria-expanded"]=ke);var qe=j??q;qe!=null&&($e["aria-flowto"]=zs(qe));var Ue=Z??U;Ue!=null&&($e["aria-haspopup"]=Ue);var Be=J??Te;Be===!0&&($e["aria-hidden"]=Be);var Ye=ne??ye;Ye!=null&&($e["aria-invalid"]=Ye);var lt=Se??we;lt!=null&&($e["aria-keyshortcuts"]=zs(lt));var vt=pe??ue;vt!=null&&($e["aria-label"]=vt);var Ke=Ge??ve;Ke!=null&&($e["aria-labelledby"]=zs(Ke));var _t=De??Je;_t!=null&&($e["aria-level"]=_t);var zt=ze??st;zt!=null&&($e["aria-live"]=zt==="none"?"off":zt);var It=We??wt;It!=null&&($e["aria-modal"]=It);var Pt=Ct??un;Pt!=null&&($e["aria-multiline"]=Pt);var Xt=Ot??en;Xt!=null&&($e["aria-multiselectable"]=Xt);var Ze=cn??wn;Ze!=null&&($e["aria-orientation"]=Ze);var an=Y??Tn;an!=null&&($e["aria-owns"]=zs(an));var et=Ut??Ft;et!=null&&($e["aria-placeholder"]=et);var ai=Fe??Zt;ai!=null&&($e["aria-posinset"]=ai);var sn=it??ot;sn!=null&&($e["aria-pressed"]=sn);var Oi=F??A;Oi!=null&&($e["aria-readonly"]=Oi,(n==="input"||n==="select"||n==="textarea")&&($e.readOnly=!0));var Xn=ae??be;Xn!=null&&($e["aria-required"]=Xn,(n==="input"||n==="select"||n==="textarea")&&($e.required=be)),zn!=null&&($e.role=zn==="none"?"presentation":zn);var si=_e??Pe;si!=null&&($e["aria-roledescription"]=si);var St=Ne??he;St!=null&&($e["aria-rowcount"]=St);var jt=me??Ce;jt!=null&&($e["aria-rowindex"]=jt);var gn=H??ge;gn!=null&&($e["aria-rowspan"]=gn);var Tt=fe??Oe;Tt!=null&&($e["aria-selected"]=Tt);var kt=Ae??Le;kt!=null&&($e["aria-setsize"]=kt);var dn=Qe??mt;dn!=null&&($e["aria-sort"]=dn);var Ui=Me??rt;Ui!=null&&($e["aria-valuemax"]=Ui);var ta=ft??He;ta!=null&&($e["aria-valuemin"]=ta);var Fi=xt??$t;Fi!=null&&($e["aria-valuenow"]=Fi);var Fl=Ln??Zr;if(Fl!=null&&($e["aria-valuetext"]=Fl),ir!=null){for(var vs in ir)if(UT.call(ir,vs)){var za=zT(vs),kl=ir[vs];kl!=null&&($e["data-"+za]=kl)}}rr===0||rr==="0"||rr===-1||rr==="-1"?$e.tabIndex=rr:(jr===!1&&($e.tabIndex="-1"),n==="a"||n==="button"||n==="input"||n==="select"||n==="textarea"?(jr===!1||X===!0)&&($e.tabIndex="-1"):zn==="button"||zn==="checkbox"||zn==="link"||zn==="radio"||zn==="textbox"||zn==="switch"?jr!==!1&&($e.tabIndex="0"):jr===!0&&($e.tabIndex="0"));var So=Er([Jr,ri&&HT[ri]],Ii({writingDirection:"ltr"},t)),Ha=So[0],xo=So[1];Ha&&($e.className=Ha),xo&&($e.style=xo);var Bl=Oa??xi;return Bl!=null&&($e.id=Bl),Qr!=null&&($e["data-testid"]=Qr),$e.type==null&&n==="button"&&($e.type="button"),$e},VT=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),u_=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","far","glk","he","iw","khw","ks","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]),c_=new Map;function WT(n){var e=c_.get(n);if(e)return e;var t=!1;if(Intl.Locale)try{var r=new Intl.Locale(n).maximize().script;t=VT.has(r)}catch{var s=n.split("-")[0];t=u_.has(s)}else{var o=n.split("-")[0];t=u_.has(o)}return c_.set(n,t),t}var $T={direction:"ltr",locale:"en-US"},ES=dt.createContext($T);function _m(n){return WT(n)?"rtl":"ltr"}function XT(n){var e=n.direction,t=n.locale,r=n.children,s=e||t;return s?oo.createElement(ES.Provider,{children:r,value:{direction:t?_m(t):e,locale:t}}):r}function bS(){return dt.useContext(ES)}var ym=(n,e,t)=>{var r;n&&n.constructor===String&&(r=nS.propsToAccessibilityComponent(e));var s=r||n,o=GT(s,e,t),u=oo.createElement(s,o),d=o.dir?oo.createElement(XT,{children:u,direction:o.dir,locale:o.lang}):u;return d},qT=[];function wS(n){return qT[n-1]}var YT=/^data:/;class mi{static has(e){var t=mi._entries,r=YT.test(e);return r||!!t[e]}static add(e){var t=mi._entries,r=Date.now();t[e]?(t[e].lastUsedTimestamp=r,t[e].refCount+=1):t[e]={lastUsedTimestamp:r,refCount:1}}static remove(e){var t=mi._entries;t[e]&&(t[e].refCount-=1),mi._cleanUpIfNeeded()}static _cleanUpIfNeeded(){var e=mi._entries,t=Object.keys(e);if(t.length+1>mi._maximumEntries){var r,s;t.forEach(o=>{var u=e[o];(!s||u.lastUsedTimestamp<s.lastUsedTimestamp)&&u.refCount===0&&(r=o,s=u)}),r&&delete e[r]}}}mi._maximumEntries=256;mi._entries={};var ih=0,tc={},yr={abort(n){var e=tc[""+n];e&&(e.onerror=null,e.onload=null,e=null,delete tc[""+n])},getSize(n,e,t){var r=!1,s=setInterval(u,16),o=yr.load(n,u,d);function u(){var f=tc[""+o];if(f){var h=f.naturalHeight,v=f.naturalWidth;h&&v&&(e(v,h),r=!0)}r&&(yr.abort(o),clearInterval(s))}function d(){typeof t=="function"&&t(),yr.abort(o),clearInterval(s)}},has(n){return mi.has(n)},load(n,e,t){ih+=1;var r=new window.Image;return r.onerror=t,r.onload=s=>{var o=()=>e({nativeEvent:s});typeof r.decode=="function"?r.decode().then(o,o):setTimeout(o,0)},r.src=n,tc[""+ih]=r,ih},prefetch(n){return new Promise((e,t)=>{yr.load(n,()=>{mi.add(n),mi.remove(n),e()},t)})},queryCache(n){var e={};return n.forEach(t=>{mi.has(t)&&(e[t]="disk/memory")}),Promise.resolve(e)}},rh,d_;function KT(){if(d_)return rh;d_=1;function n(e,t){for(var r=arguments.length,s=new Array(r>2?r-2:0),o=2;o<r;o++)s[o-2]=arguments[o];if(!e){var u;if(t===void 0)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=0;u=new Error(t.replace(/%s/g,function(){return String(s[d++])})),u.name="Invariant Violation"}throw u.framesToPop=1,u}}return rh=n,rh}var ZT=KT();const f_=yi(ZT);var as={window:{fontScale:1,height:0,scale:1,width:0},screen:{fontScale:1,height:0,scale:1,width:0}},Ea={},h_=Si;function TS(){if(Si){var n=window,e,t;if(n.visualViewport){var r=n.visualViewport;e=Math.round(r.height*r.scale),t=Math.round(r.width*r.scale)}else{var s=n.document.documentElement;e=s.clientHeight,t=s.clientWidth}as.window={fontScale:1,height:e,scale:n.devicePixelRatio||1,width:t},as.screen={fontScale:1,height:n.screen.height,scale:n.devicePixelRatio||1,width:n.screen.width}}}function p_(){TS(),Array.isArray(Ea.change)&&Ea.change.forEach(n=>n(as))}class m_{static get(e){return h_&&(h_=!1,TS()),f_(as[e],"No dimension set for key "+e),as[e]}static set(e){e&&(Si?f_(!1,"Dimensions cannot be set in the browser"):(e.screen!=null&&(as.screen=e.screen),e.window!=null&&(as.window=e.window)))}static addEventListener(e,t){return Ea[e]=Ea[e]||[],Ea[e].push(t),{remove:()=>{this.removeEventListener(e,t)}}}static removeEventListener(e,t){Array.isArray(Ea[e])&&(Ea[e]=Ea[e].filter(r=>r!==t))}}Si&&(window.visualViewport?window.visualViewport.addEventListener("resize",p_,!1):window.addEventListener("resize",p_,!1));class ml{static get(){return m_.get("window").scale}static getFontScale(){return m_.get("window").fontScale||ml.get()}static getPixelSizeForLayoutSize(e){return Math.round(e*ml.get())}static roundToNearestPixel(e){var t=ml.get();return Math.round(e*t)/t}}var Hc=dt.createContext(!1),RS={children:!0,dataSet:!0,dir:!0,id:!0,ref:!0,suppressHydrationWarning:!0,tabIndex:!0,testID:!0,focusable:!0,nativeID:!0},AS={"aria-activedescendant":!0,"aria-atomic":!0,"aria-autocomplete":!0,"aria-busy":!0,"aria-checked":!0,"aria-colcount":!0,"aria-colindex":!0,"aria-colspan":!0,"aria-controls":!0,"aria-current":!0,"aria-describedby":!0,"aria-details":!0,"aria-disabled":!0,"aria-errormessage":!0,"aria-expanded":!0,"aria-flowto":!0,"aria-haspopup":!0,"aria-hidden":!0,"aria-invalid":!0,"aria-keyshortcuts":!0,"aria-label":!0,"aria-labelledby":!0,"aria-level":!0,"aria-live":!0,"aria-modal":!0,"aria-multiline":!0,"aria-multiselectable":!0,"aria-orientation":!0,"aria-owns":!0,"aria-placeholder":!0,"aria-posinset":!0,"aria-pressed":!0,"aria-readonly":!0,"aria-required":!0,role:!0,"aria-roledescription":!0,"aria-rowcount":!0,"aria-rowindex":!0,"aria-rowspan":!0,"aria-selected":!0,"aria-setsize":!0,"aria-sort":!0,"aria-valuemax":!0,"aria-valuemin":!0,"aria-valuenow":!0,"aria-valuetext":!0,accessibilityActiveDescendant:!0,accessibilityAtomic:!0,accessibilityAutoComplete:!0,accessibilityBusy:!0,accessibilityChecked:!0,accessibilityColumnCount:!0,accessibilityColumnIndex:!0,accessibilityColumnSpan:!0,accessibilityControls:!0,accessibilityCurrent:!0,accessibilityDescribedBy:!0,accessibilityDetails:!0,accessibilityDisabled:!0,accessibilityErrorMessage:!0,accessibilityExpanded:!0,accessibilityFlowTo:!0,accessibilityHasPopup:!0,accessibilityHidden:!0,accessibilityInvalid:!0,accessibilityKeyShortcuts:!0,accessibilityLabel:!0,accessibilityLabelledBy:!0,accessibilityLevel:!0,accessibilityLiveRegion:!0,accessibilityModal:!0,accessibilityMultiline:!0,accessibilityMultiSelectable:!0,accessibilityOrientation:!0,accessibilityOwns:!0,accessibilityPlaceholder:!0,accessibilityPosInSet:!0,accessibilityPressed:!0,accessibilityReadOnly:!0,accessibilityRequired:!0,accessibilityRole:!0,accessibilityRoleDescription:!0,accessibilityRowCount:!0,accessibilityRowIndex:!0,accessibilityRowSpan:!0,accessibilitySelected:!0,accessibilitySetSize:!0,accessibilitySort:!0,accessibilityValueMax:!0,accessibilityValueMin:!0,accessibilityValueNow:!0,accessibilityValueText:!0},CS={onClick:!0,onAuxClick:!0,onContextMenu:!0,onGotPointerCapture:!0,onLostPointerCapture:!0,onPointerCancel:!0,onPointerDown:!0,onPointerEnter:!0,onPointerMove:!0,onPointerLeave:!0,onPointerOut:!0,onPointerOver:!0,onPointerUp:!0},PS={onBlur:!0,onFocus:!0},LS={onKeyDown:!0,onKeyDownCapture:!0,onKeyUp:!0,onKeyUpCapture:!0},IS={onMouseDown:!0,onMouseEnter:!0,onMouseLeave:!0,onMouseMove:!0,onMouseOver:!0,onMouseOut:!0,onMouseUp:!0},DS={onTouchCancel:!0,onTouchCancelCapture:!0,onTouchEnd:!0,onTouchEndCapture:!0,onTouchMove:!0,onTouchMoveCapture:!0,onTouchStart:!0,onTouchStartCapture:!0},NS={style:!0};function OS(n,e){var t={};for(var r in n)n.hasOwnProperty(r)&&e[r]===!0&&(t[r]=n[r]);return t}var Gc=Si?dt.useLayoutEffect:dt.useEffect,hp=n=>{if(n!=null){var e=n.nodeType===1;if(e&&typeof n.getBoundingClientRect=="function")return n.getBoundingClientRect()}},gl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexOrder:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,gridRow:!0,gridRowEnd:!0,gridRowGap:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnGap:!0,gridColumnStart:!0,lineClamp:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0,scale:!0,scaleX:!0,scaleY:!0,scaleZ:!0,shadowOpacity:!0},jT=["ms","Moz","O","Webkit"],JT=(n,e)=>n+e.charAt(0).toUpperCase()+e.substring(1);Object.keys(gl).forEach(n=>{jT.forEach(e=>{gl[JT(e,n)]=gl[n]})});function QT(n,e,t){var r=e==null||typeof e=="boolean"||e==="";return r?"":!t&&typeof e=="number"&&e!==0&&!(gl.hasOwnProperty(n)&&gl[n])?e+"px":(""+e).trim()}function e1(n,e){var t=n.style;for(var r in e)if(e.hasOwnProperty(r)){var s=r.indexOf("--")===0,o=QT(r,e[r],s);r==="float"&&(r="cssFloat"),s?t.setProperty(r,o):t[r]=o}}var g_=n=>{var e=n.offsetHeight,t=n.offsetWidth,r=n.offsetLeft,s=n.offsetTop;for(n=n.offsetParent;n&&n.nodeType===1;)r+=n.offsetLeft+n.clientLeft-n.scrollLeft,s+=n.offsetTop+n.clientTop-n.scrollTop,n=n.offsetParent;return s-=window.scrollY,r-=window.scrollX,{width:t,height:e,top:s,left:r}},v_=(n,e,t)=>{var r=e||n&&n.parentNode;n&&r&&setTimeout(()=>{if(n.isConnected&&r.isConnected){var s=g_(r),o=g_(n),u=o.height,d=o.left,f=o.top,h=o.width,v=d-s.left,m=f-s.top;t(v,m,h,u,d,f)}},0)},t1={A:!0,BODY:!0,INPUT:!0,SELECT:!0,TEXTAREA:!0},Rc={blur(n){try{n.blur()}catch{}},focus(n){try{var e=n.nodeName;n.getAttribute("tabIndex")==null&&n.isContentEditable!==!0&&t1[e]==null&&n.setAttribute("tabIndex","-1"),n.focus()}catch{}},measure(n,e){v_(n,null,e)},measureInWindow(n,e){n&&setTimeout(()=>{var t=hp(n),r=t.height,s=t.left,o=t.top,u=t.width;e(s,o,u,r)},0)},measureLayout(n,e,t,r){v_(n,e,r)},updateView(n,e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var r=e[t];switch(t){case"style":{e1(n,r);break}case"class":case"className":{n.setAttribute("class",r);break}case"text":case"value":n.value=r;break;default:n.setAttribute(t,r)}}},configureNextLayoutAnimation(n,e){e()},setLayoutAnimationEnabledExperimental(){}},pp="__reactLayoutHandler",ah=null;function n1(){return Si&&typeof window.ResizeObserver<"u"&&ah==null&&(ah=new window.ResizeObserver(function(n){n.forEach(e=>{var t=e.target,r=t[pp];typeof r=="function"&&Rc.measure(t,(s,o,u,d,f,h)=>{var v={nativeEvent:{layout:{x:s,y:o,width:u,height:d,left:f,top:h}},timeStamp:Date.now()};Object.defineProperty(v.nativeEvent,"target",{enumerable:!0,get:()=>e.target}),r(v)})})})),ah}function US(n,e){var t=n1();Gc(()=>{var r=n.current;r!=null&&(r[pp]=e)},[n,e]),Gc(()=>{var r=n.current;return r!=null&&t!=null&&(typeof r[pp]=="function"?t.observe(r):t.unobserve(r)),()=>{r!=null&&t!=null&&t.unobserve(r)}},[n,t])}function i1(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(s){e.forEach(o=>{if(o!=null){if(typeof o=="function"){o(s);return}if(typeof o=="object"){o.current=s;return}console.error("mergeRefs cannot handle Refs of type boolean, number or string, received ref "+String(o))}})}}function Sm(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return dt.useMemo(()=>i1(...e),[...e])}var __=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():Object.freeze({});function mp(n){var e=dt.useRef(__);return e.current===__&&(e.current=n()),e.current}function FS(n){n.pointerEvents,n.style;var e=mp(()=>t=>{t!=null&&(t.measure=r=>Rc.measure(t,r),t.measureLayout=(r,s,o)=>Rc.measureLayout(t,r,o,s),t.measureInWindow=r=>Rc.measureInWindow(t,r))});return e}var y_=()=>{},r1={},a1=[];function S_(n){return n>20?n%20:n}function kS(n,e){var t,r=!1,s,o,u=n.changedTouches,d=n.type,f=n.metaKey===!0,h=n.shiftKey===!0,v=u&&u[0].force||0,m=S_(u&&u[0].identifier||0),g=u&&u[0].clientX||n.clientX,x=u&&u[0].clientY||n.clientY,E=u&&u[0].pageX||n.pageX,T=u&&u[0].pageY||n.pageY,y=typeof n.preventDefault=="function"?n.preventDefault.bind(n):y_,S=n.timeStamp;function w(b){return Array.prototype.slice.call(b).map(C=>({force:C.force,identifier:S_(C.identifier),get locationX(){return N(C.clientX)},get locationY(){return I(C.clientY)},pageX:C.pageX,pageY:C.pageY,target:C.target,timestamp:S}))}if(u!=null)s=w(u),o=w(n.touches);else{var D=[{force:v,identifier:m,get locationX(){return N(g)},get locationY(){return I(x)},pageX:E,pageY:T,target:n.target,timestamp:S}];s=D,o=d==="mouseup"||d==="dragstart"?a1:D}var L={bubbles:!0,cancelable:!0,currentTarget:null,defaultPrevented:n.defaultPrevented,dispatchConfig:r1,eventPhase:n.eventPhase,isDefaultPrevented(){return n.defaultPrevented},isPropagationStopped(){return r},isTrusted:n.isTrusted,nativeEvent:{altKey:!1,ctrlKey:!1,metaKey:f,shiftKey:h,changedTouches:s,force:v,identifier:m,get locationX(){return N(g)},get locationY(){return I(x)},pageX:E,pageY:T,target:n.target,timestamp:S,touches:o,type:d},persist:y_,preventDefault:y,stopPropagation(){r=!0},target:n.target,timeStamp:S,touchHistory:e.touchHistory};function N(b){if(t=t||hp(L.currentTarget),t)return b-t.left}function I(b){if(t=t||hp(L.currentTarget),t)return b-t.top}return L}var s1="mousedown",o1="mousemove",l1="mouseup",u1="dragstart",c1="touchstart",d1="touchmove",f1="touchend",h1="touchcancel",p1="scroll",m1="select",g1="selectionchange";function BS(n){return n===c1||n===s1}function zS(n){return n===d1||n===o1}function HS(n){return n===f1||n===l1||GS(n)}function GS(n){return n===h1||n===u1}function v1(n){return n===p1}function _1(n){return n===m1||n===g1}function y1(){var n=window.getSelection(),e=n.toString(),t=n.anchorNode,r=n.focusNode,s=t&&t.nodeType===window.Node.TEXT_NODE||r&&r.nodeType===window.Node.TEXT_NODE;return e.length>=1&&e!==`
`&&s}var VS="__reactResponderId";function S1(n){if(n.type==="selectionchange"){var e=window.getSelection().anchorNode;return x_(e)}else{var t=n.composedPath!=null?n.composedPath():x_(n.target);return t}}function x_(n){for(var e=[];n!=null&&n!==document.body;)e.push(n),n=n.parentNode;return e}function x1(n){return n!=null?n[VS]:null}function M1(n,e){n!=null&&(n[VS]=e)}function E1(n){for(var e=[],t=[],r=S1(n),s=0;s<r.length;s++){var o=r[s],u=x1(o);u!=null&&(e.push(u),t.push(o))}return{idPath:e,nodePath:t}}function b1(n,e){var t=n.length,r=e.length;if(t===0||r===0||n[t-1]!==e[r-1])return null;var s=n[0],o=0,u=e[0],d=0;t-r>0&&(o=t-r,s=n[o],t=r),r-t>0&&(d=r-t,u=e[d],r=t);for(var f=t;f--;){if(s===u)return s;s=n[o++],u=e[d++]}return null}function w1(n,e){if(!e||e.length===0)return!1;for(var t=0;t<e.length;t++){var r=e[t].target;if(r!=null&&n.contains(r))return!0}return!1}function T1(n){return n.type==="selectionchange"?y1():n.type==="select"}function R1(n){var e=n.altKey,t=n.button,r=n.buttons,s=n.ctrlKey,o=n.type,u=o==="touchstart"||o==="touchmove",d=o==="mousedown"&&(t===0||r===1),f=o==="mousemove"&&r===1,h=e===!1&&s===!1;return!!(u||d&&h||f&&h)}var M_=20;function Ni(n){return n.timeStamp||n.timestamp}function A1(n){return{touchActive:!0,startPageX:n.pageX,startPageY:n.pageY,startTimeStamp:Ni(n),currentPageX:n.pageX,currentPageY:n.pageY,currentTimeStamp:Ni(n),previousPageX:n.pageX,previousPageY:n.pageY,previousTimeStamp:Ni(n)}}function C1(n,e){n.touchActive=!0,n.startPageX=e.pageX,n.startPageY=e.pageY,n.startTimeStamp=Ni(e),n.currentPageX=e.pageX,n.currentPageY=e.pageY,n.currentTimeStamp=Ni(e),n.previousPageX=e.pageX,n.previousPageY=e.pageY,n.previousTimeStamp=Ni(e)}function xm(n){var e=n.identifier;return e==null&&console.error("Touch object is missing identifier."),e}function P1(n,e){var t=xm(n),r=e.touchBank[t];r?C1(r,n):e.touchBank[t]=A1(n),e.mostRecentTimeStamp=Ni(n)}function L1(n,e){var t=e.touchBank[xm(n)];t?(t.touchActive=!0,t.previousPageX=t.currentPageX,t.previousPageY=t.currentPageY,t.previousTimeStamp=t.currentTimeStamp,t.currentPageX=n.pageX,t.currentPageY=n.pageY,t.currentTimeStamp=Ni(n),e.mostRecentTimeStamp=Ni(n)):console.warn(`Cannot record touch move without a touch start.
`,"Touch Move: "+WS(n)+`
`,"Touch Bank: "+$S(e))}function I1(n,e){var t=e.touchBank[xm(n)];t?(t.touchActive=!1,t.previousPageX=t.currentPageX,t.previousPageY=t.currentPageY,t.previousTimeStamp=t.currentTimeStamp,t.currentPageX=n.pageX,t.currentPageY=n.pageY,t.currentTimeStamp=Ni(n),e.mostRecentTimeStamp=Ni(n)):console.warn(`Cannot record touch end without a touch start.
`,"Touch End: "+WS(n)+`
`,"Touch Bank: "+$S(e))}function WS(n){return JSON.stringify({identifier:n.identifier,pageX:n.pageX,pageY:n.pageY,timestamp:Ni(n)})}function $S(n){var e=n.touchBank,t=JSON.stringify(e.slice(0,M_));return e.length>M_&&(t+=" (original size: "+e.length+")"),t}class D1{constructor(){this._touchHistory={touchBank:[],numberActiveTouches:0,indexOfSingleActiveTouch:-1,mostRecentTimeStamp:0}}recordTouchTrack(e,t){var r=this._touchHistory;if(zS(e))t.changedTouches.forEach(d=>L1(d,r));else if(BS(e))t.changedTouches.forEach(d=>P1(d,r)),r.numberActiveTouches=t.touches.length,r.numberActiveTouches===1&&(r.indexOfSingleActiveTouch=t.touches[0].identifier);else if(HS(e)&&(t.changedTouches.forEach(d=>I1(d,r)),r.numberActiveTouches=t.touches.length,r.numberActiveTouches===1))for(var s=r.touchBank,o=0;o<s.length;o++){var u=s[o];if(u!=null&&u.touchActive){r.indexOfSingleActiveTouch=o;break}}}get touchHistory(){return this._touchHistory}}var N1={},E_=["onStartShouldSetResponderCapture","onStartShouldSetResponder",{bubbles:!0}],b_=["onMoveShouldSetResponderCapture","onMoveShouldSetResponder",{bubbles:!0}],O1=["onScrollShouldSetResponderCapture","onScrollShouldSetResponder",{bubbles:!1}],U1={touchstart:E_,mousedown:E_,touchmove:b_,mousemove:b_,scroll:O1},gp={id:null,idPath:null,node:null},Vc=new Map,Ma=!1,pr=0,gr={id:null,node:null,idPath:null},vp=new D1;function Ml(n){gr=n}function El(n){var e=Vc.get(n);return e??N1}function sh(n){var e=n.type,t=n.target;if(e==="touchstart"&&(Ma=!0),(e==="touchmove"||pr>1)&&(Ma=!1),!(e==="mousedown"&&Ma||e==="mousemove"&&Ma||e==="mousemove"&&pr<1)){if(Ma&&e==="mouseup"){pr===0&&(Ma=!1);return}var r=BS(e)&&R1(n),s=zS(e),o=HS(e),u=v1(e),d=_1(e),f=kS(n,vp);(r||s||o)&&(n.touches?pr=n.touches.length:r?pr=1:o&&(pr=0),vp.recordTouchTrack(e,f.nativeEvent));var h=E1(n),v=!1,m;if(r||s||u&&pr>0){var g=gr.idPath,x=h.idPath;if(g!=null&&x!=null){var E=b1(g,x);if(E!=null){var T=x.indexOf(E),y=T+(E===gr.id?1:0);h={idPath:x.slice(y),nodePath:h.nodePath.slice(y)}}else h=null}h!=null&&(m=F1(h,n,f),m!=null&&(k1(f,m),v=!0))}if(gr.id!=null&&gr.node!=null){var S=gr,w=S.id,D=S.node,L=El(w),N=L.onResponderStart,I=L.onResponderMove,b=L.onResponderEnd,C=L.onResponderRelease,k=L.onResponderTerminate,O=L.onResponderTerminationRequest;if(f.bubbles=!1,f.cancelable=!1,f.currentTarget=D,r)N!=null&&(f.dispatchConfig.registrationName="onResponderStart",N(f));else if(s)I!=null&&(f.dispatchConfig.registrationName="onResponderMove",I(f));else{var G=GS(e)||e==="contextmenu"||e==="blur"&&t===window||e==="blur"&&t.contains(D)&&n.relatedTarget!==D||u&&pr===0||u&&t.contains(D)&&t!==D||d&&T1(n),W=o&&!G&&!w1(D,n.touches);if(o&&b!=null&&(f.dispatchConfig.registrationName="onResponderEnd",b(f)),W&&(C!=null&&(f.dispatchConfig.registrationName="onResponderRelease",C(f)),Ml(gp)),G){var X=!0;(e==="contextmenu"||e==="scroll"||e==="selectionchange")&&(v?X=!1:O!=null&&(f.dispatchConfig.registrationName="onResponderTerminationRequest",O(f)===!1&&(X=!1))),X&&(k!=null&&(f.dispatchConfig.registrationName="onResponderTerminate",k(f)),Ml(gp),Ma=!1,pr=0)}}}}}function F1(n,e,t){var r=U1[e.type];if(r!=null){for(var s=n.idPath,o=n.nodePath,u=r[0],d=r[1],f=r[2].bubbles,h=function(I,b,C){var k=El(I),O=k[C];if(O!=null&&(t.currentTarget=b,O(t)===!0)){var G=s.slice(s.indexOf(I));return{id:I,node:b,idPath:G}}},v=s.length-1;v>=0;v--){var m=s[v],g=o[v],x=h(m,g,u);if(x!=null)return x;if(t.isPropagationStopped()===!0)return}if(f)for(var E=0;E<s.length;E++){var T=s[E],y=o[E],S=h(T,y,d);if(S!=null)return S;if(t.isPropagationStopped()===!0)return}else{var w=s[0],D=o[0],L=e.target;if(L===D)return h(w,D,d)}}}function k1(n,e){var t=gr,r=t.id,s=t.node,o=e.id,u=e.node,d=El(o),f=d.onResponderGrant,h=d.onResponderReject;if(n.bubbles=!1,n.cancelable=!1,n.currentTarget=u,r==null)f!=null&&(n.currentTarget=u,n.dispatchConfig.registrationName="onResponderGrant",f(n)),Ml(e);else{var v=El(r),m=v.onResponderTerminate,g=v.onResponderTerminationRequest,x=!0;g!=null&&(n.currentTarget=s,n.dispatchConfig.registrationName="onResponderTerminationRequest",g(n)===!1&&(x=!1)),x?(m!=null&&(n.currentTarget=s,n.dispatchConfig.registrationName="onResponderTerminate",m(n)),f!=null&&(n.currentTarget=u,n.dispatchConfig.registrationName="onResponderGrant",f(n)),Ml(e)):h!=null&&(n.currentTarget=u,n.dispatchConfig.registrationName="onResponderReject",h(n))}}var B1=["blur","scroll"],z1=["mousedown","mousemove","mouseup","dragstart","touchstart","touchmove","touchend","touchcancel","contextmenu","select","selectionchange"];function H1(){Si&&window.__reactResponderSystemActive==null&&(window.addEventListener("blur",sh),z1.forEach(n=>{document.addEventListener(n,sh)}),B1.forEach(n=>{document.addEventListener(n,sh,!0)}),window.__reactResponderSystemActive=!0)}function G1(n,e,t){M1(e,n),Vc.set(n,t)}function w_(n){gr.id===n&&V1(),Vc.has(n)&&Vc.delete(n)}function V1(){var n=gr,e=n.id,t=n.node;if(e!=null&&t!=null){var r=El(e),s=r.onResponderTerminate;if(s!=null){var o=kS({},vp);o.currentTarget=t,s(o)}Ml(gp)}Ma=!1,pr=0}function W1(){return gr.node}var $1={},X1=0;function q1(n){var e=dt.useRef(null);return e.current==null&&(e.current=n()),e.current}function XS(n,e){e===void 0&&(e=$1);var t=q1(()=>X1++),r=dt.useRef(!1);dt.useEffect(()=>(H1(),()=>{w_(t)}),[t]),dt.useEffect(()=>{var s=e,o=s.onMoveShouldSetResponder,u=s.onMoveShouldSetResponderCapture,d=s.onScrollShouldSetResponder,f=s.onScrollShouldSetResponderCapture,h=s.onSelectionChangeShouldSetResponder,v=s.onSelectionChangeShouldSetResponderCapture,m=s.onStartShouldSetResponder,g=s.onStartShouldSetResponderCapture,x=o!=null||u!=null||d!=null||f!=null||h!=null||v!=null||m!=null||g!=null,E=n.current;x?(G1(t,E,e),r.current=!0):r.current&&(w_(t),r.current=!1)},[e,n,t]),dt.useDebugValue({isResponder:n.current===W1()}),dt.useDebugValue(e)}var Y1=["hrefAttrs","onLayout","onMoveShouldSetResponder","onMoveShouldSetResponderCapture","onResponderEnd","onResponderGrant","onResponderMove","onResponderReject","onResponderRelease","onResponderStart","onResponderTerminate","onResponderTerminationRequest","onScrollShouldSetResponder","onScrollShouldSetResponderCapture","onSelectionChangeShouldSetResponder","onSelectionChangeShouldSetResponderCapture","onStartShouldSetResponder","onStartShouldSetResponderCapture"],K1=Object.assign({},RS,AS,CS,PS,LS,IS,DS,NS,{href:!0,lang:!0,onScroll:!0,onWheel:!0,pointerEvents:!0}),Z1=n=>OS(n,K1),bl=dt.forwardRef((n,e)=>{var t=n.hrefAttrs,r=n.onLayout,s=n.onMoveShouldSetResponder,o=n.onMoveShouldSetResponderCapture,u=n.onResponderEnd,d=n.onResponderGrant,f=n.onResponderMove,h=n.onResponderReject,v=n.onResponderRelease,m=n.onResponderStart,g=n.onResponderTerminate,x=n.onResponderTerminationRequest,E=n.onScrollShouldSetResponder,T=n.onScrollShouldSetResponderCapture,y=n.onSelectionChangeShouldSetResponder,S=n.onSelectionChangeShouldSetResponderCapture,w=n.onStartShouldSetResponder,D=n.onStartShouldSetResponderCapture,L=hs(n,Y1),N=dt.useContext(Hc),I=dt.useRef(null),b=bS(),C=b.direction;US(I,r),XS(I,{onMoveShouldSetResponder:s,onMoveShouldSetResponderCapture:o,onResponderEnd:u,onResponderGrant:d,onResponderMove:f,onResponderReject:h,onResponderRelease:v,onResponderStart:m,onResponderTerminate:g,onResponderTerminationRequest:x,onScrollShouldSetResponder:E,onScrollShouldSetResponderCapture:T,onSelectionChangeShouldSetResponder:y,onSelectionChangeShouldSetResponderCapture:S,onStartShouldSetResponder:w,onStartShouldSetResponderCapture:D});var k="div",O=n.lang!=null?_m(n.lang):null,G=n.dir||O,W=G||C,X=Z1(L);if(X.dir=G,X.style=[T_.view$raw,N&&T_.inline,n.style],n.href!=null&&(k="a",t!=null)){var B=t.download,ie=t.rel,te=t.target;B!=null&&(X.download=B),ie!=null&&(X.rel=ie),typeof te=="string"&&(X.target=te.charAt(0)!=="_"?"_"+te:te)}var Q=FS(X),j=Sm(I,Q,e);return X.ref=j,ym(k,X,{writingDirection:W})});bl.displayName="View";var T_=Er.create({view$raw:{alignItems:"stretch",backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",display:"flex",flexBasis:"auto",flexDirection:"column",flexShrink:0,listStyle:"none",margin:0,minHeight:0,minWidth:0,padding:0,position:"relative",textDecoration:"none",zIndex:0},inline:{display:"inline-flex"}}),j1=["aria-label","accessibilityLabel","blurRadius","defaultSource","draggable","onError","onLayout","onLoad","onLoadEnd","onLoadStart","pointerEvents","source","style"],J1="ERRORED",oh="LOADED",R_="LOADING",Q1="IDLE",eR=0,tR=/^(data:image\/svg\+xml;utf8,)(.*)/;function nR(n,e){return n&&e!=null?dt.createElement("svg",{style:{position:"absolute",height:0,visibility:"hidden",width:0}},dt.createElement("defs",null,dt.createElement("filter",{id:"tint-"+e,suppressHydrationWarning:!0},dt.createElement("feFlood",{floodColor:""+n,key:n}),dt.createElement("feComposite",{in2:"SourceAlpha",operator:"in"})))):null}function iR(n,e,t,r){var s=Er.flatten(n),o=s.filter,u=s.resizeMode,d=s.shadowOffset,f=s.tintColor;s.resizeMode,s.tintColor;var h=[],v=null;if(o&&h.push(o),e&&h.push("blur("+e+"px)"),d){var m=gS(s);m&&h.push("drop-shadow("+m+")")}return(r||f)&&t!=null&&h.push("url(#tint-"+t+")"),h.length>0&&(v=h.join(" ")),[u,v,f]}function rR(n){if(typeof n=="number"){var e=wS(n),t=e.height,r=e.width;return{height:t,width:r}}else if(n!=null&&!Array.isArray(n)&&typeof n=="object"){var s=n.height,o=n.width;return{height:s,width:o}}}function lh(n){var e=null;if(typeof n=="number"){var t=wS(n);if(t==null)throw new Error('Image: asset with ID "'+n+'" could not be found. Please check the image source or packager.');var r=t.scales[0];if(t.scales.length>1){var s=ml.get();r=t.scales.reduce((v,m)=>Math.abs(m-s)<Math.abs(v-s)?m:v)}var o=r!==1?"@"+r+"x":"";e=t?t.httpServerLocation+"/"+t.name+o+"."+t.type:""}else typeof n=="string"?e=n:n&&typeof n.uri=="string"&&(e=n.uri);if(e){var u=e.match(tR);if(u){var d=u[1],f=u[2],h=encodeURIComponent(f);return""+d+h}}return e}var qS=dt.forwardRef((n,e)=>{var t=n["aria-label"],r=n.accessibilityLabel,s=n.blurRadius,o=n.defaultSource,u=n.draggable,d=n.onError,f=n.onLayout,h=n.onLoad,v=n.onLoadEnd,m=n.onLoadStart,g=n.pointerEvents,x=n.source,E=n.style,T=hs(n,j1),y=t||r,S=dt.useState(()=>{var we=lh(x);if(we!=null){var pe=yr.has(we);if(pe)return oh}return Q1}),w=S[0],D=S[1],L=dt.useState({}),N=L[0],I=L[1],b=dt.useContext(Hc),C=dt.useRef(null),k=dt.useRef(eR++),O=dt.useRef(null),G=w===oh||w===R_&&o==null,W=iR(E,s,k.current,n.tintColor),X=W[0],B=W[1],ie=W[2],te=n.resizeMode||X||"cover",Q=n.tintColor||ie,j=G?x:o,q=lh(j),Z=rR(j),U=q?'url("'+q+'")':null,J=ne(),Te=q?ym("img",{alt:y||"",style:jo.accessibilityImage$raw,draggable:u||!1,ref:C,src:q}):null;function ne(){if(C.current!=null&&(te==="center"||te==="repeat")){var we=C.current,pe=we.naturalHeight,ue=we.naturalWidth,Ge=N.height,ve=N.width;if(pe&&ue&&Ge&&ve){var De=Math.min(1,ve/ue,Ge/pe),Je=Math.ceil(De*ue),ze=Math.ceil(De*pe);return Je+"px "+ze+"px"}}}function ye(we){if(te==="center"||te==="repeat"||f){var pe=we.nativeEvent.layout;f&&f(we),I(pe)}}var Se=lh(x);return dt.useEffect(()=>{we(),Se!=null&&(D(R_),m&&m(),O.current=yr.load(Se,function(ue){D(oh),h&&h(ue),v&&v()},function(){D(J1),d&&d({nativeEvent:{error:"Failed to load resource "+Se}}),v&&v()}));function we(){O.current!=null&&(yr.abort(O.current),O.current=null)}return we},[Se,O,D,d,h,v,m]),dt.createElement(bl,kc({},T,{"aria-label":y,onLayout:ye,pointerEvents:g,ref:e,style:[jo.root,b&&jo.inline,Z,E,jo.undo,{boxShadow:null}]}),dt.createElement(bl,{style:[jo.image,aR[te],{backgroundImage:U,filter:B},J!=null&&{backgroundSize:J}],suppressHydrationWarning:!0}),Te,nR(Q,k.current))});qS.displayName="Image";var id=qS;id.getSize=function(n,e,t){yr.getSize(n,e,t)};id.prefetch=function(n){return yr.prefetch(n)};id.queryCache=function(n){return yr.queryCache(n)};var jo=Er.create({root:{flexBasis:"auto",overflow:"hidden",zIndex:0},inline:{display:"inline-flex"},undo:{blurRadius:null,shadowColor:null,shadowOpacity:null,shadowOffset:null,shadowRadius:null,tintColor:null,overlayColor:null,resizeMode:null},image:Ii(Ii({},Er.absoluteFillObject),{},{backgroundColor:"transparent",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100%",width:"100%",zIndex:-1}),accessibilityImage$raw:Ii(Ii({},Er.absoluteFillObject),{},{height:"100%",opacity:0,width:"100%",zIndex:-1})}),aR=Er.create({center:{backgroundSize:"auto"},contain:{backgroundSize:"contain"},cover:{backgroundSize:"cover"},none:{backgroundPosition:"0",backgroundSize:"auto"},repeat:{backgroundPosition:"0",backgroundRepeat:"repeat",backgroundSize:"auto"},stretch:{backgroundSize:"100% 100%"}}),sR=()=>{};function oR(){var n=!1;if(Si)try{var e={};Object.defineProperty(e,"passive",{get(){return n=!0,!1}}),window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}return n}var lR=oR();function uR(n){return n==null?!1:lR?n:!!n.capture}function cR(){return this.cancelBubble}function dR(){return this.defaultPrevented}function fR(n){return n.nativeEvent=n,n.persist=sR,n.isDefaultPrevented=dR,n.isPropagationStopped=cR,n}function kn(n,e,t,r){var s=uR(r),o=u=>t(fR(u));return n.addEventListener(e,o,s),function(){n!=null&&n.removeEventListener(e,o,s)}}var hR=()=>typeof window<"u"&&window.PointerEvent!=null,Zi="keyboard",Qn="keyboard",ul,cl,dl=!1,pR=new Set,vl="keyboard",Jo="mouse",uh="touch",mR="blur",YS="contextmenu",gR="focus",vR="keydown",KS="mousedown",ZS="mousemove",jS="mouseup",JS="pointerdown",QS="pointermove",ex="scroll",tx="selectionchange",nx="touchcancel",ix="touchmove",rx="touchstart",_R="visibilitychange",A_={passive:!0},di={capture:!0,passive:!0};function ax(){(ul!=null||cl!=null)&&(ul!=null&&(Qn=ul,ul=null),cl!=null&&(Zi=cl,cl=null),wa())}function yR(){ul=Qn,cl=Zi,Zi=vl,Qn=vl,wa(),dl=!1}function SR(){ax()}function xR(n){n.metaKey||n.altKey||n.ctrlKey||Qn!==vl&&(Qn=vl,Zi=vl,wa())}function MR(){document.visibilityState!=="hidden"&&ax()}function $i(n){var e=n.type;if(hR()){if(e===JS){Zi!==n.pointerType&&(Qn=n.pointerType,Zi=n.pointerType,wa());return}if(e===QS){Qn!==n.pointerType&&(Qn=n.pointerType,wa());return}}else{if(dl||(e===KS&&Zi!==Jo&&(Qn=Jo,Zi=Jo,wa()),e===ZS&&Qn!==Jo&&(Qn=Jo,wa())),e===rx){dl=!0,n.touches&&n.touches.length>1&&(dl=!1),Zi!==uh&&(Qn=uh,Zi=uh,wa());return}(e===YS||e===jS||e===tx||e===ex||e===nx||e===ix)&&(dl=!1)}}Si&&(kn(window,mR,yR,A_),kn(window,gR,SR,A_),kn(document,vR,xR,di),kn(document,_R,MR,di),kn(document,JS,$i,di),kn(document,QS,$i,di),kn(document,YS,$i,di),kn(document,KS,$i,di),kn(document,ZS,$i,di),kn(document,jS,$i,di),kn(document,nx,$i,di),kn(document,ix,$i,di),kn(document,rx,$i,di),kn(document,tx,$i,di),kn(document,ex,$i,di));function wa(){var n={activeModality:Zi,modality:Qn};pR.forEach(e=>{e(n)})}function ER(){return Qn}function Qo(n,e){var t=mp(()=>new Map),r=mp(()=>(s,o)=>{var u=t.get(s);u!=null&&u(),o==null&&(t.delete(s),o=()=>{});var d=kn(s,n,o,e);return t.set(s,d),d});return Gc(()=>()=>{t.forEach(s=>{s()}),t.clear()},[t]),r}var bR={},el={passive:!0},C_="react-gui:hover:lock",P_="react-gui:hover:unlock",wR=()=>typeof window<"u"&&window.PointerEvent!=null;function L_(n,e,t){var r=document.createEvent("CustomEvent"),s=bR,o=s.bubbles,u=o===void 0?!0:o,d=s.cancelable,f=d===void 0?!0:d,h=s.detail;r.initCustomEvent(e,u,f,h),n.dispatchEvent(r)}function ch(n){var e=n.pointerType;return e??ER()}function TR(n,e){var t=e.contain,r=e.disabled,s=e.onHoverStart,o=e.onHoverChange,u=e.onHoverUpdate,d=e.onHoverEnd,f=wR(),h=Qo(f?"pointermove":"mousemove",el),v=Qo(f?"pointerenter":"mouseenter",el),m=Qo(f?"pointerleave":"mouseleave",el),g=Qo(C_,el),x=Qo(P_,el);Gc(()=>{var E=n.current;if(E!==null){var T=function(N){d!=null&&d(N),o!=null&&o(!1),h(E,null),m(E,null)},y=function(N){var I=n.current;I!=null&&ch(N)!=="touch"&&(t&&L_(I,P_),T(N))},S=function(N){ch(N)!=="touch"&&u!=null&&(N.x==null&&(N.x=N.clientX),N.y==null&&(N.y=N.clientY),u(N))},w=function(N){s!=null&&s(N),o!=null&&o(!0),u!=null&&h(E,r?null:S),m(E,r?null:y)},D=function(N){var I=n.current;if(I!=null&&ch(N)!=="touch"){t&&L_(I,C_),w(N);var b=function(O){O.target!==I&&T(N)},C=function(O){O.target!==I&&w(N)};g(I,r?null:b),x(I,r?null:C)}};v(E,r?null:D)}},[v,h,m,g,x,t,r,s,o,u,d,n])}var I_="DELAY",Ki="ERROR",D_="LONG_PRESS_DETECTED",Wn="NOT_RESPONDER",lo="RESPONDER_ACTIVE_LONG_PRESS_START",rd="RESPONDER_ACTIVE_PRESS_START",_p="RESPONDER_INACTIVE_PRESS_START",RR="RESPONDER_GRANT",Ac="RESPONDER_RELEASE",sx="RESPONDER_TERMINATED",N_=Object.freeze({NOT_RESPONDER:{DELAY:Ki,RESPONDER_GRANT:_p,RESPONDER_RELEASE:Ki,RESPONDER_TERMINATED:Ki,LONG_PRESS_DETECTED:Ki},RESPONDER_INACTIVE_PRESS_START:{DELAY:rd,RESPONDER_GRANT:Ki,RESPONDER_RELEASE:Wn,RESPONDER_TERMINATED:Wn,LONG_PRESS_DETECTED:Ki},RESPONDER_ACTIVE_PRESS_START:{DELAY:Ki,RESPONDER_GRANT:Ki,RESPONDER_RELEASE:Wn,RESPONDER_TERMINATED:Wn,LONG_PRESS_DETECTED:lo},RESPONDER_ACTIVE_LONG_PRESS_START:{DELAY:Ki,RESPONDER_GRANT:Ki,RESPONDER_RELEASE:Wn,RESPONDER_TERMINATED:Wn,LONG_PRESS_DETECTED:lo},ERROR:{DELAY:Wn,RESPONDER_GRANT:_p,RESPONDER_RELEASE:Wn,RESPONDER_TERMINATED:Wn,LONG_PRESS_DETECTED:Wn}}),ox=n=>n.getAttribute("role"),yp=n=>n.tagName.toLowerCase(),O_=n=>n===rd||n===lo,Cc=n=>ox(n)==="button",U_=n=>n===_p||n===rd||n===lo,AR=n=>n===sx||n===Ac,F_=n=>{var e=n.key,t=n.target,r=e===" "||e==="Spacebar",s=yp(t)==="button"||Cc(t);return e==="Enter"||r&&s},CR=450,PR=50;class LR{constructor(e){this._eventHandlers=null,this._isPointerTouch=!1,this._longPressDelayTimeout=null,this._longPressDispatched=!1,this._pressDelayTimeout=null,this._pressOutDelayTimeout=null,this._touchState=Wn,this._responderElement=null,this.configure(e)}configure(e){this._config=e}reset(){this._cancelLongPressDelayTimeout(),this._cancelPressDelayTimeout(),this._cancelPressOutDelayTimeout()}getEventHandlers(){return this._eventHandlers==null&&(this._eventHandlers=this._createEventHandlers()),this._eventHandlers}_createEventHandlers(){var e=(s,o)=>{s.persist(),this._cancelPressOutDelayTimeout(),this._longPressDispatched=!1,this._selectionTerminated=!1,this._touchState=Wn,this._isPointerTouch=s.nativeEvent.type==="touchstart",this._receiveSignal(RR,s);var u=dh(this._config.delayPressStart,0,PR);o!==!1&&u>0?this._pressDelayTimeout=setTimeout(()=>{this._receiveSignal(I_,s)},u):this._receiveSignal(I_,s);var d=dh(this._config.delayLongPress,10,CR);this._longPressDelayTimeout=setTimeout(()=>{this._handleLongPress(s)},d+u)},t=s=>{this._receiveSignal(Ac,s)},r=s=>{var o=this._config.onPress,u=s.target;if(this._touchState!==Wn&&F_(s)){t(s),document.removeEventListener("keyup",r);var d=u.getAttribute("role"),f=yp(u),h=d==="link"||f==="a"||f==="button"||f==="input"||f==="select"||f==="textarea",v=this._responderElement===u;o!=null&&!h&&v&&o(s),this._responderElement=null}};return{onStartShouldSetResponder:s=>{var o=this._config.disabled;return o&&Cc(s.currentTarget)&&s.stopPropagation(),o==null?!0:!o},onKeyDown:s=>{var o=this._config.disabled,u=s.key,d=s.target;if(!o&&F_(s)){this._touchState===Wn&&(e(s,!1),this._responderElement=d,document.addEventListener("keyup",r));var f=u===" "||u==="Spacebar",h=ox(d),v=h==="button"||h==="menuitem";f&&v&&yp(d)!=="button"&&s.preventDefault(),s.stopPropagation()}},onResponderGrant:s=>e(s),onResponderMove:s=>{this._config.onPressMove!=null&&this._config.onPressMove(s);var o=k_(s);if(this._touchActivatePosition!=null){var u=this._touchActivatePosition.pageX-o.pageX,d=this._touchActivatePosition.pageY-o.pageY;Math.hypot(u,d)>10&&this._cancelLongPressDelayTimeout()}},onResponderRelease:s=>t(s),onResponderTerminate:s=>{s.nativeEvent.type==="selectionchange"&&(this._selectionTerminated=!0),this._receiveSignal(sx,s)},onResponderTerminationRequest:s=>{var o=this._config,u=o.cancelable,d=o.disabled,f=o.onLongPress;return!d&&f!=null&&this._isPointerTouch&&s.nativeEvent.type==="contextmenu"?!1:u??!0},onClick:s=>{var o=this._config,u=o.disabled,d=o.onPress;u?Cc(s.currentTarget)&&s.stopPropagation():(s.stopPropagation(),this._longPressDispatched||this._selectionTerminated?s.preventDefault():d!=null&&s.altKey===!1&&d(s))},onContextMenu:s=>{var o=this._config,u=o.disabled,d=o.onLongPress;u?Cc(s.currentTarget)&&s.stopPropagation():d!=null&&this._isPointerTouch&&!s.defaultPrevented&&(s.preventDefault(),s.stopPropagation())}}}_receiveSignal(e,t){var r=this._touchState,s=null;N_[r]!=null&&(s=N_[r][e]),!(this._touchState===Wn&&e===Ac)&&(s==null||s===Ki?console.error("PressResponder: Invalid signal "+e+" for state "+r+" on responder"):r!==s&&(this._performTransitionSideEffects(r,s,e,t),this._touchState=s))}_performTransitionSideEffects(e,t,r,s){if(AR(r)&&(setTimeout(()=>{this._isPointerTouch=!1},0),this._touchActivatePosition=null,this._cancelLongPressDelayTimeout()),U_(e)&&r===D_){var o=this._config.onLongPress;o!=null&&s.nativeEvent.key==null&&(o(s),this._longPressDispatched=!0)}var u=O_(e),d=O_(t);if(!u&&d?this._activate(s):u&&!d&&this._deactivate(s),U_(e)&&r===Ac){var f=this._config,h=f.onLongPress,v=f.onPress;if(v!=null){var m=h!=null&&e===lo;m||!d&&!u&&(this._activate(s),this._deactivate(s))}}this._cancelPressDelayTimeout()}_activate(e){var t=this._config,r=t.onPressChange,s=t.onPressStart,o=k_(e);this._touchActivatePosition={pageX:o.pageX,pageY:o.pageY},s!=null&&s(e),r!=null&&r(!0)}_deactivate(e){var t=this._config,r=t.onPressChange,s=t.onPressEnd;function o(){s!=null&&s(e),r!=null&&r(!1)}var u=dh(this._config.delayPressEnd);u>0?this._pressOutDelayTimeout=setTimeout(()=>{o()},u):o()}_handleLongPress(e){(this._touchState===rd||this._touchState===lo)&&this._receiveSignal(D_,e)}_cancelLongPressDelayTimeout(){this._longPressDelayTimeout!=null&&(clearTimeout(this._longPressDelayTimeout),this._longPressDelayTimeout=null)}_cancelPressDelayTimeout(){this._pressDelayTimeout!=null&&(clearTimeout(this._pressDelayTimeout),this._pressDelayTimeout=null)}_cancelPressOutDelayTimeout(){this._pressOutDelayTimeout!=null&&(clearTimeout(this._pressOutDelayTimeout),this._pressOutDelayTimeout=null)}}function dh(n,e,t){return e===void 0&&(e=0),t===void 0&&(t=0),Math.max(e,n??t)}function k_(n){var e=n.nativeEvent,t=e.changedTouches,r=e.touches;return r!=null&&r.length>0?r[0]:t!=null&&t.length>0?t[0]:n.nativeEvent}function IR(n,e){var t=dt.useRef(null);t.current==null&&(t.current=new LR(e));var r=t.current;return dt.useEffect(()=>{r.configure(e)},[e,r]),dt.useEffect(()=>()=>{r.reset()},[r]),dt.useDebugValue(e),r.getEventHandlers()}var DR=["children","delayLongPress","delayPressIn","delayPressOut","disabled","onBlur","onContextMenu","onFocus","onHoverIn","onHoverOut","onKeyDown","onLongPress","onPress","onPressMove","onPressIn","onPressOut","style","tabIndex","testOnly_hovered","testOnly_pressed"];function NR(n,e){var t=n.children,r=n.delayLongPress,s=n.delayPressIn,o=n.delayPressOut,u=n.disabled,d=n.onBlur,f=n.onContextMenu,h=n.onFocus,v=n.onHoverIn,m=n.onHoverOut,g=n.onKeyDown,x=n.onLongPress,E=n.onPress,T=n.onPressMove,y=n.onPressIn,S=n.onPressOut,w=n.style,D=n.tabIndex,L=n.testOnly_hovered,N=n.testOnly_pressed,I=hs(n,DR),b=fh(L===!0),C=b[0],k=b[1],O=fh(!1),G=O[0],W=O[1],X=fh(N===!0),B=X[0],ie=X[1],te=dt.useRef(null),Q=Sm(e,te),j=dt.useMemo(()=>({delayLongPress:r,delayPressStart:s,delayPressEnd:o,disabled:u,onLongPress:x,onPress:E,onPressChange:ie,onPressStart:y,onPressMove:T,onPressEnd:S}),[r,s,o,u,x,E,y,T,S,ie]),q=IR(te,j),Z=q.onContextMenu,U=q.onKeyDown;TR(te,{contain:!0,disabled:u,onHoverChange:k,onHoverStart:v,onHoverEnd:m});var J={hovered:C,focused:G,pressed:B},Te=dt.useCallback(pe=>{pe.nativeEvent.target===te.current&&(W(!1),d!=null&&d(pe))},[te,W,d]),ne=dt.useCallback(pe=>{pe.nativeEvent.target===te.current&&(W(!0),h!=null&&h(pe))},[te,W,h]),ye=dt.useCallback(pe=>{Z!=null&&Z(pe),f!=null&&f(pe)},[f,Z]),Se=dt.useCallback(pe=>{U!=null&&U(pe),g!=null&&g(pe)},[g,U]),we;return D!==void 0?we=D:we=u?-1:0,dt.createElement(bl,kc({},I,q,{"aria-disabled":u,onBlur:Te,onContextMenu:ye,onFocus:ne,onKeyDown:Se,ref:Q,style:[u?B_.disabled:B_.active,typeof w=="function"?w(J):w],tabIndex:we}),typeof t=="function"?t(J):t)}function fh(n){var e=dt.useState(!1),t=e[0],r=e[1];return[t||n,r]}var B_=Er.create({active:{cursor:"pointer",touchAction:"manipulation"},disabled:{pointerEvents:"box-none"}}),lx=dt.memo(dt.forwardRef(NR));lx.displayName="Pressable";var OR=["hrefAttrs","numberOfLines","onClick","onLayout","onPress","onMoveShouldSetResponder","onMoveShouldSetResponderCapture","onResponderEnd","onResponderGrant","onResponderMove","onResponderReject","onResponderRelease","onResponderStart","onResponderTerminate","onResponderTerminationRequest","onScrollShouldSetResponder","onScrollShouldSetResponderCapture","onSelectionChangeShouldSetResponder","onSelectionChangeShouldSetResponderCapture","onStartShouldSetResponder","onStartShouldSetResponderCapture","selectable"],UR=Object.assign({},RS,AS,CS,PS,LS,IS,DS,NS,{href:!0,lang:!0,pointerEvents:!0}),FR=n=>OS(n,UR),ux=dt.forwardRef((n,e)=>{var t=n.hrefAttrs,r=n.numberOfLines,s=n.onClick,o=n.onLayout,u=n.onPress,d=n.onMoveShouldSetResponder,f=n.onMoveShouldSetResponderCapture,h=n.onResponderEnd,v=n.onResponderGrant,m=n.onResponderMove,g=n.onResponderReject,x=n.onResponderRelease,E=n.onResponderStart,T=n.onResponderTerminate,y=n.onResponderTerminationRequest,S=n.onScrollShouldSetResponder,w=n.onScrollShouldSetResponderCapture,D=n.onSelectionChangeShouldSetResponder,L=n.onSelectionChangeShouldSetResponderCapture,N=n.onStartShouldSetResponder,I=n.onStartShouldSetResponderCapture,b=n.selectable,C=hs(n,OR),k=dt.useContext(Hc),O=dt.useRef(null),G=bS(),W=G.direction;US(O,o),XS(O,{onMoveShouldSetResponder:d,onMoveShouldSetResponderCapture:f,onResponderEnd:h,onResponderGrant:v,onResponderMove:m,onResponderReject:g,onResponderRelease:x,onResponderStart:E,onResponderTerminate:T,onResponderTerminationRequest:y,onScrollShouldSetResponder:S,onScrollShouldSetResponderCapture:w,onSelectionChangeShouldSetResponder:D,onSelectionChangeShouldSetResponderCapture:L,onStartShouldSetResponder:N,onStartShouldSetResponderCapture:I});var X=dt.useCallback(ye=>{s!=null?s(ye):u!=null&&(ye.stopPropagation(),u(ye))},[s,u]),B=k?"span":"div",ie=n.lang!=null?_m(n.lang):null,te=n.dir||ie,Q=te||W,j=FR(C);if(j.dir=te,k||(j.dir=te??"auto"),(s||u)&&(j.onClick=X),j.style=[r!=null&&r>1&&{WebkitLineClamp:r},k===!0?es.textHasAncestor$raw:es.text$raw,r===1&&es.textOneLine,r!=null&&r>1&&es.textMultiLine,n.style,b===!0&&es.selectable,b===!1&&es.notSelectable,u&&es.pressable],n.href!=null&&(B="a",t!=null)){var q=t.download,Z=t.rel,U=t.target;q!=null&&(j.download=q),Z!=null&&(j.rel=Z),typeof U=="string"&&(j.target=U.charAt(0)!=="_"?"_"+U:U)}var J=FS(j),Te=Sm(O,J,e);j.ref=Te;var ne=ym(B,j,{writingDirection:Q});return k?ne:dt.createElement(Hc.Provider,{value:!0},ne)});ux.displayName="Text";var z_={backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",color:"black",display:"inline",font:"14px System",listStyle:"none",margin:0,padding:0,position:"relative",textAlign:"start",textDecoration:"none",whiteSpace:"pre-wrap",wordWrap:"break-word"},es=Er.create({text$raw:z_,textHasAncestor$raw:Ii(Ii({},z_),{},{color:"inherit",font:"inherit",textAlign:"inherit",whiteSpace:"inherit"}),textOneLine:{maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",wordWrap:"normal"},textMultiLine:{display:"-webkit-box",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",WebkitBoxOrient:"vertical"},notSelectable:{userSelect:"none"},selectable:{userSelect:"text"},pressable:{cursor:"pointer"}});const Sp=new Map,kR=new Set(["span","i","b","strong","small","em","label"]);function BR(n=""){const e=document.createElement("span").style;e.cssText=n;const t={};for(let r=0;r<e.length;r++){const s=e[r];if(s.startsWith("--"))continue;const o=s.replace(/-([a-z])/g,(d,f)=>f.toUpperCase()),u=e.getPropertyValue(s).trim();t[o]=/^-?\d+(?:\.\d+)?px$/.test(u)?Number.parseFloat(u):u}return t}function cx(n,e){const t={key:e};for(const r of n.attributes)if(r.name==="class")t.className=r.value;else if(r.name==="style")t.style=BR(r.value);else{if(r.name==="draggable"||r.name==="type"||r.name==="tabindex")continue;t[r.name]=r.value}return t}function zR(n){var r;const e=((r=n.className)==null?void 0:r.split(/\s+/).filter(Boolean))||[],t=Object.entries(n).filter(([s])=>s.startsWith("data-"));delete n.className;for(const[s]of t)delete n[s];return(e.length||t.length)&&(n.ref=s=>{if(s){e.length&&s.classList.add(...e);for(const[o,u]of t)s.setAttribute(o,u)}}),n}function dx(n,e="child"){if(n.nodeType===Node.TEXT_NODE)return n.textContent?n.textContent:null;if(n.nodeType!==Node.ELEMENT_NODE)return null;const t=n.tagName.toLowerCase(),r=zR(cx(n,e));if(t==="img")return r.source={uri:n.getAttribute("src")||""},n.hasAttribute("alt")&&(r.accessibilityLabel=n.getAttribute("alt")),delete r.src,delete r.alt,oo.createElement(id,r);const s=n.querySelector("div, img, svg, button"),o=kR.has(t)&&!s?ux:bl,u=Array.from(n.childNodes).map((d,f)=>dx(d,`${e}-${f}`));return oo.createElement(o,r,...u)}function HR(n){var h;const e=cx(n),t=((h=e.className)==null?void 0:h.split(/\s+/).filter(Boolean))||[],r=Object.entries(e).filter(([v])=>v.startsWith("data-")),s=n.getAttribute("style")||"",o=document.createElement("span");o.className="rn-control-root",o.style.cssText=s,n.replaceWith(o);const u=ob.createRoot(o);Sp.set(o,u);const d=Array.from(n.childNodes).map((v,m)=>dx(v,`button-${m}`)),f=n.hasAttribute("disabled");delete e.style,delete e.disabled,delete e.className;for(const[v]of r)delete e[v];e.ref=v=>{if(v){t.length&&v.classList.add(...t);for(const[m,g]of r)v.setAttribute(m,g)}},e.role=e.role||"button",e.accessibilityRole=e.role,e.disabled=f,e.onPress=()=>{var v;return(v=o.firstElementChild)==null?void 0:v.dispatchEvent(new CustomEvent("rnpress",{bubbles:!0}))},lb.flushSync(()=>u.render(oo.createElement(lx,e,...d)))}function GR(n){for(const[e,t]of Sp)(n===e||n.contains(e))&&(t.unmount(),Sp.delete(e))}function fx(n){n.querySelectorAll("button").forEach(HR)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mm="187",VR=0,H_=1,WR=2,Pc=1,hx=2,fl=3,ls=0,ni=1,vr=2,ro=0,_l=1,G_=2,V_=3,W_=4,$R=5,to=100,XR=101,qR=102,YR=103,KR=104,ZR=200,jR=201,JR=202,QR=203,px=204,mx=205,eA=206,tA=207,nA=208,iA=209,rA=210,aA=211,sA=212,oA=213,lA=214,xp=0,Mp=1,Ep=2,wl=3,bp=4,wp=5,Tp=6,Rp=7,gx=0,uA=1,cA=2,Wr=0,vx=1,_x=2,yx=3,Em=4,Sx=5,xx=6,Mx=7,Ex=300,uo=301,Tl=302,hh=303,ph=304,Wc=1e3,Gr=1001,Ap=1002,Cn=1003,dA=1004,nc=1005,ei=1006,mh=1007,Ra=1008,gi=1009,bx=1010,wx=1011,Rl=1012,bm=1013,wr=1014,Sr=1015,Tr=1016,wm=1017,Tm=1018,co=1020,Tx=35902,Rx=35899,Ax=1021,Cx=1022,xr=1023,Pa=1026,Aa=1027,Px=1028,Rm=1029,us=1030,Am=1031,Cm=1033,Lc=33776,Ic=33777,Dc=33778,Nc=33779,Cp=35840,Pp=35841,Lp=35842,Ip=35843,Dp=36196,Np=37492,Op=37496,Up=37488,Fp=37489,$c=37490,kp=37491,Bp=37808,zp=37809,Hp=37810,Gp=37811,Vp=37812,Wp=37813,$p=37814,Xp=37815,qp=37816,Yp=37817,Kp=37818,Zp=37819,jp=37820,Jp=37821,Qp=36492,em=36494,tm=36495,nm=36283,im=36284,Xc=36285,rm=36286,fA=3200,am=0,hA=1,Ta="",pi="srgb",qc="srgb-linear",Yc="linear",Bt="srgb",gh=7680,pA=519,mA=512,gA=513,vA=514,Lx=515,_A=516,yA=517,Ix=518,Dx=519,SA=35044,$_="300 es",Ji=2e3,Al=2001;function xA(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Kc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function MA(){const n=Kc("canvas");return n.style.display="block",n}const X_={};function q_(...n){const e="THREE."+n.shift();console.log(e,...n)}function Nx(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function pt(...n){n=Nx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Nt(...n){n=Nx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Oc(...n){const e=n.join(" ");e in X_||(X_[e]=!0,pt(...n))}function EA(n,e,t){return new Promise(function(r,s){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:r()}}setTimeout(o,t)})}const bA={[xp]:xp,[Ep]:Tp,[bp]:bp,[wl]:wp,[Mp]:Mp,[Tp]:Ep,[Rp]:Rp,[wp]:wl};class ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const s=r[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const s=r.slice(0);for(let o=0,u=s.length;o<u;o++)s[o].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vh=Math.PI/180,sm=180/Math.PI;function Il(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function At(n,e,t){return Math.max(e,Math.min(t,n))}function wA(n,e){return(n%e+e)%e}function _h(n,e,t){return(1-t)*n+t*e}function TA(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Pm(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function RA(n,e){if(e.constructor===Float32Array)return n;const t=Pm(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function AA(n,e){if(e.constructor===Float32Array)return n;const t=Pm(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const sg=class sg{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,s=e.elements;return this.x=s[0]*t+s[3]*r+s[6],this.y=s[1]*t+s[4]*r+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),s=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*r-u*s+e.x,this.y=o*s+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};sg.prototype.isVector2=!0;let bt=sg;class go{constructor(e=0,t=0,r=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=s}static slerpFlat(e,t,r,s,o,u,d){let f=r[s+0],h=r[s+1],v=r[s+2],m=r[s+3],g=o[u+0],x=o[u+1],E=o[u+2],T=o[u+3];if(m!==T||f!==g||h!==x||v!==E){let y=f*g+h*x+v*E+m*T;y<0&&(g=-g,x=-x,E=-E,T=-T,y=-y);let S=1-d;if(y<.9995){const w=Math.acos(y),D=Math.sin(w);S=Math.sin(S*w)/D,d=Math.sin(d*w)/D,f=f*S+g*d,h=h*S+x*d,v=v*S+E*d,m=m*S+T*d}else{f=f*S+g*d,h=h*S+x*d,v=v*S+E*d,m=m*S+T*d;const w=1/Math.sqrt(f*f+h*h+v*v+m*m);f*=w,h*=w,v*=w,m*=w}}e[t]=f,e[t+1]=h,e[t+2]=v,e[t+3]=m}static multiplyQuaternionsFlat(e,t,r,s,o,u){const d=r[s],f=r[s+1],h=r[s+2],v=r[s+3],m=o[u],g=o[u+1],x=o[u+2],E=o[u+3];return e[t]=d*E+v*m+f*x-h*g,e[t+1]=f*E+v*g+h*m-d*x,e[t+2]=h*E+v*x+d*g-f*m,e[t+3]=v*E-d*m-f*g-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,s){return this._x=e,this._y=t,this._z=r,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,s=e._y,o=e._z,u=e._order,d=Math.cos,f=Math.sin,h=d(r/2),v=d(s/2),m=d(o/2),g=f(r/2),x=f(s/2),E=f(o/2);switch(u){case"XYZ":this._x=g*v*m+h*x*E,this._y=h*x*m-g*v*E,this._z=h*v*E+g*x*m,this._w=h*v*m-g*x*E;break;case"YXZ":this._x=g*v*m+h*x*E,this._y=h*x*m-g*v*E,this._z=h*v*E-g*x*m,this._w=h*v*m+g*x*E;break;case"ZXY":this._x=g*v*m-h*x*E,this._y=h*x*m+g*v*E,this._z=h*v*E+g*x*m,this._w=h*v*m-g*x*E;break;case"ZYX":this._x=g*v*m-h*x*E,this._y=h*x*m+g*v*E,this._z=h*v*E-g*x*m,this._w=h*v*m+g*x*E;break;case"YZX":this._x=g*v*m+h*x*E,this._y=h*x*m+g*v*E,this._z=h*v*E-g*x*m,this._w=h*v*m-g*x*E;break;case"XZY":this._x=g*v*m-h*x*E,this._y=h*x*m-g*v*E,this._z=h*v*E+g*x*m,this._w=h*v*m+g*x*E;break;default:pt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,s=Math.sin(r);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],s=t[4],o=t[8],u=t[1],d=t[5],f=t[9],h=t[2],v=t[6],m=t[10],g=r+d+m;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(v-f)*x,this._y=(o-h)*x,this._z=(u-s)*x}else if(r>d&&r>m){const x=2*Math.sqrt(1+r-d-m);this._w=(v-f)/x,this._x=.25*x,this._y=(s+u)/x,this._z=(o+h)/x}else if(d>m){const x=2*Math.sqrt(1+d-r-m);this._w=(o-h)/x,this._x=(s+u)/x,this._y=.25*x,this._z=(f+v)/x}else{const x=2*Math.sqrt(1+m-r-d);this._w=(u-s)/x,this._x=(o+h)/x,this._y=(f+v)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const s=Math.min(1,t/r);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,s=e._y,o=e._z,u=e._w,d=t._x,f=t._y,h=t._z,v=t._w;return this._x=r*v+u*d+s*h-o*f,this._y=s*v+u*f+o*d-r*h,this._z=o*v+u*h+r*f-s*d,this._w=u*v-r*d-s*f-o*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,s=e._y,o=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,s=-s,o=-o,u=-u,d=-d);let f=1-t;if(d<.9995){const h=Math.acos(d),v=Math.sin(h);f=Math.sin(f*h)/v,t=Math.sin(t*h)/v,this._x=this._x*f+r*t,this._y=this._y*f+s*t,this._z=this._z*f+o*t,this._w=this._w*f+u*t,this._onChangeCallback()}else this._x=this._x*f+r*t,this._y=this._y*f+s*t,this._z=this._z*f+o*t,this._w=this._w*f+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),s=Math.sqrt(1-r),o=Math.sqrt(r);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const og=class og{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Y_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Y_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6]*s,this.y=o[1]*t+o[4]*r+o[7]*s,this.z=o[2]*t+o[5]*r+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,s=this.z,o=e.elements,u=1/(o[3]*t+o[7]*r+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*r+o[8]*s+o[12])*u,this.y=(o[1]*t+o[5]*r+o[9]*s+o[13])*u,this.z=(o[2]*t+o[6]*r+o[10]*s+o[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,s=this.z,o=e.x,u=e.y,d=e.z,f=e.w,h=2*(u*s-d*r),v=2*(d*t-o*s),m=2*(o*r-u*t);return this.x=t+f*h+u*m-d*v,this.y=r+f*v+d*h-o*m,this.z=s+f*m+o*v-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*s,this.y=o[1]*t+o[5]*r+o[9]*s,this.z=o[2]*t+o[6]*r+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,s=e.y,o=e.z,u=t.x,d=t.y,f=t.z;return this.x=s*f-o*d,this.y=o*u-r*f,this.z=r*d-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return yh.copy(this).projectOnVector(e),this.sub(yh)}reflect(e){return this.sub(yh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,s=this.z-e.z;return t*t+r*r+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const s=Math.sin(t)*e;return this.x=s*Math.sin(r),this.y=Math.cos(t)*e,this.z=s*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};og.prototype.isVector3=!0;let ce=og;const yh=new ce,Y_=new go,lg=class lg{constructor(e,t,r,s,o,u,d,f,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,s,o,u,d,f,h)}set(e,t,r,s,o,u,d,f,h){const v=this.elements;return v[0]=e,v[1]=s,v[2]=d,v[3]=t,v[4]=o,v[5]=f,v[6]=r,v[7]=u,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,s=t.elements,o=this.elements,u=r[0],d=r[3],f=r[6],h=r[1],v=r[4],m=r[7],g=r[2],x=r[5],E=r[8],T=s[0],y=s[3],S=s[6],w=s[1],D=s[4],L=s[7],N=s[2],I=s[5],b=s[8];return o[0]=u*T+d*w+f*N,o[3]=u*y+d*D+f*I,o[6]=u*S+d*L+f*b,o[1]=h*T+v*w+m*N,o[4]=h*y+v*D+m*I,o[7]=h*S+v*L+m*b,o[2]=g*T+x*w+E*N,o[5]=g*y+x*D+E*I,o[8]=g*S+x*L+E*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],s=e[2],o=e[3],u=e[4],d=e[5],f=e[6],h=e[7],v=e[8];return t*u*v-t*d*h-r*o*v+r*d*f+s*o*h-s*u*f}invert(){const e=this.elements,t=e[0],r=e[1],s=e[2],o=e[3],u=e[4],d=e[5],f=e[6],h=e[7],v=e[8],m=v*u-d*h,g=d*f-v*o,x=h*o-u*f,E=t*m+r*g+s*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=m*T,e[1]=(s*h-v*r)*T,e[2]=(d*r-s*u)*T,e[3]=g*T,e[4]=(v*t-s*f)*T,e[5]=(s*o-d*t)*T,e[6]=x*T,e[7]=(r*f-h*t)*T,e[8]=(u*t-r*o)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,s,o,u,d){const f=Math.cos(o),h=Math.sin(o);return this.set(r*f,r*h,-r*(f*u+h*d)+u+e,-s*h,s*f,-s*(-h*u+f*d)+d+t,0,0,1),this}scale(e,t){return Oc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sh.makeScale(e,t)),this}rotate(e){return Oc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sh.makeRotation(-e)),this}translate(e,t){return Oc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let s=0;s<9;s++)if(t[s]!==r[s])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};lg.prototype.isMatrix3=!0;let gt=lg;const Sh=new gt,K_=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Z_=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function CA(){const n={enabled:!0,workingColorSpace:qc,spaces:{},convert:function(s,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===Bt&&(s.r=$r(s.r),s.g=$r(s.g),s.b=$r(s.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Bt&&(s.r=ao(s.r),s.g=ao(s.g),s.b=ao(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ta?Yc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,u){return s.copy(this.spaces[u].fromXYZ).multiply(this.spaces[o].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[qc]:{primaries:e,whitePoint:r,transfer:Yc,toXYZ:K_,fromXYZ:Z_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:r,transfer:Bt,toXYZ:K_,fromXYZ:Z_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),n}const Rt=CA();function $r(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ao(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Hs;class PA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Hs===void 0&&(Hs=Kc("canvas")),Hs.width=e.width,Hs.height=e.height;const s=Hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),r=Hs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Kc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const s=r.getImageData(0,0,e.width,e.height),o=s.data;for(let u=0;u<o.length;u++)o[u]=$r(o[u]/255)*255;return r.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor($r(t[r]/255)*255):t[r]=$r(t[r]);return{data:t,width:e.width,height:e.height}}else return pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let LA=0;class Lm{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:LA++}),this.uuid=Il(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let u=0,d=s.length;u<d;u++)s[u].isDataTexture?o.push(xh(s[u].image)):o.push(xh(s[u]))}else o=xh(s);r.url=o}return t||(e.images[this.uuid]=r),r}}function xh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?PA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(pt("Texture: Unable to serialize Texture."),{})}let IA=0;const Mh=new ce;class Bn extends ps{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,r=Gr,s=Gr,o=ei,u=Ra,d=xr,f=gi,h=Bn.DEFAULT_ANISOTROPY,v=Ta){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IA++}),this.uuid=Il(),this.name="",this.source=new Lm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=u,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=f,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Mh).x}get height(){return this.source.getSize(Mh).y}get depth(){return this.source.getSize(Mh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){pt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){pt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ex)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wc:e.x=e.x-Math.floor(e.x);break;case Gr:e.x=e.x<0?0:1;break;case Ap:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wc:e.y=e.y-Math.floor(e.y);break;case Gr:e.y=e.y<0?0:1;break;case Ap:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Ex;Bn.DEFAULT_ANISOTROPY=1;const ug=class ug{constructor(e=0,t=0,r=0,s=1){this.x=e,this.y=t,this.z=r,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,s){return this.x=e,this.y=t,this.z=r,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,s=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*s+u[12]*o,this.y=u[1]*t+u[5]*r+u[9]*s+u[13]*o,this.z=u[2]*t+u[6]*r+u[10]*s+u[14]*o,this.w=u[3]*t+u[7]*r+u[11]*s+u[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,s,o;const f=e.elements,h=f[0],v=f[4],m=f[8],g=f[1],x=f[5],E=f[9],T=f[2],y=f[6],S=f[10];if(Math.abs(v-g)<.01&&Math.abs(m-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(v+g)<.1&&Math.abs(m+T)<.1&&Math.abs(E+y)<.1&&Math.abs(h+x+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(h+1)/2,L=(x+1)/2,N=(S+1)/2,I=(v+g)/4,b=(m+T)/4,C=(E+y)/4;return D>L&&D>N?D<.01?(r=0,s=.707106781,o=.707106781):(r=Math.sqrt(D),s=I/r,o=b/r):L>N?L<.01?(r=.707106781,s=0,o=.707106781):(s=Math.sqrt(L),r=I/s,o=C/s):N<.01?(r=.707106781,s=.707106781,o=0):(o=Math.sqrt(N),r=b/o,s=C/o),this.set(r,s,o,t),this}let w=Math.sqrt((y-E)*(y-E)+(m-T)*(m-T)+(g-v)*(g-v));return Math.abs(w)<.001&&(w=1),this.x=(y-E)/w,this.y=(m-T)/w,this.z=(g-v)/w,this.w=Math.acos((h+x+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ug.prototype.isVector4=!0;let rn=ug;class DA extends ps{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];const s=r.count;for(let o=0;o<s;o++)this.textures[o]=new Bn({width:e,height:t,depth:r.depth}),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ei,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=r,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Lm(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class br extends DA{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Ox extends Bn{constructor(e=null,t=1,r=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class NA extends Bn{constructor(e=null,t=1,r=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const td=class td{constructor(e,t,r,s,o,u,d,f,h,v,m,g,x,E,T,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,s,o,u,d,f,h,v,m,g,x,E,T,y)}set(e,t,r,s,o,u,d,f,h,v,m,g,x,E,T,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=s,S[1]=o,S[5]=u,S[9]=d,S[13]=f,S[2]=h,S[6]=v,S[10]=m,S[14]=g,S[3]=x,S[7]=E,S[11]=T,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new td().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,s=1/Gs.setFromMatrixColumn(e,0).length(),o=1/Gs.setFromMatrixColumn(e,1).length(),u=1/Gs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*s,t[1]=r[1]*s,t[2]=r[2]*s,t[3]=0,t[4]=r[4]*o,t[5]=r[5]*o,t[6]=r[6]*o,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,s=e.y,o=e.z,u=Math.cos(r),d=Math.sin(r),f=Math.cos(s),h=Math.sin(s),v=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const g=u*v,x=u*m,E=d*v,T=d*m;t[0]=f*v,t[4]=-f*m,t[8]=h,t[1]=x+E*h,t[5]=g-T*h,t[9]=-d*f,t[2]=T-g*h,t[6]=E+x*h,t[10]=u*f}else if(e.order==="YXZ"){const g=f*v,x=f*m,E=h*v,T=h*m;t[0]=g+T*d,t[4]=E*d-x,t[8]=u*h,t[1]=u*m,t[5]=u*v,t[9]=-d,t[2]=x*d-E,t[6]=T+g*d,t[10]=u*f}else if(e.order==="ZXY"){const g=f*v,x=f*m,E=h*v,T=h*m;t[0]=g-T*d,t[4]=-u*m,t[8]=E+x*d,t[1]=x+E*d,t[5]=u*v,t[9]=T-g*d,t[2]=-u*h,t[6]=d,t[10]=u*f}else if(e.order==="ZYX"){const g=u*v,x=u*m,E=d*v,T=d*m;t[0]=f*v,t[4]=E*h-x,t[8]=g*h+T,t[1]=f*m,t[5]=T*h+g,t[9]=x*h-E,t[2]=-h,t[6]=d*f,t[10]=u*f}else if(e.order==="YZX"){const g=u*f,x=u*h,E=d*f,T=d*h;t[0]=f*v,t[4]=T-g*m,t[8]=E*m+x,t[1]=m,t[5]=u*v,t[9]=-d*v,t[2]=-h*v,t[6]=x*m+E,t[10]=g-T*m}else if(e.order==="XZY"){const g=u*f,x=u*h,E=d*f,T=d*h;t[0]=f*v,t[4]=-m,t[8]=h*v,t[1]=g*m+T,t[5]=u*v,t[9]=x*m-E,t[2]=E*m-x,t[6]=d*v,t[10]=T*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(OA,e,UA)}lookAt(e,t,r){const s=this.elements;return fi.subVectors(e,t),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),va.crossVectors(r,fi),va.lengthSq()===0&&(Math.abs(r.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),va.crossVectors(r,fi)),va.normalize(),ic.crossVectors(fi,va),s[0]=va.x,s[4]=ic.x,s[8]=fi.x,s[1]=va.y,s[5]=ic.y,s[9]=fi.y,s[2]=va.z,s[6]=ic.z,s[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,s=t.elements,o=this.elements,u=r[0],d=r[4],f=r[8],h=r[12],v=r[1],m=r[5],g=r[9],x=r[13],E=r[2],T=r[6],y=r[10],S=r[14],w=r[3],D=r[7],L=r[11],N=r[15],I=s[0],b=s[4],C=s[8],k=s[12],O=s[1],G=s[5],W=s[9],X=s[13],B=s[2],ie=s[6],te=s[10],Q=s[14],j=s[3],q=s[7],Z=s[11],U=s[15];return o[0]=u*I+d*O+f*B+h*j,o[4]=u*b+d*G+f*ie+h*q,o[8]=u*C+d*W+f*te+h*Z,o[12]=u*k+d*X+f*Q+h*U,o[1]=v*I+m*O+g*B+x*j,o[5]=v*b+m*G+g*ie+x*q,o[9]=v*C+m*W+g*te+x*Z,o[13]=v*k+m*X+g*Q+x*U,o[2]=E*I+T*O+y*B+S*j,o[6]=E*b+T*G+y*ie+S*q,o[10]=E*C+T*W+y*te+S*Z,o[14]=E*k+T*X+y*Q+S*U,o[3]=w*I+D*O+L*B+N*j,o[7]=w*b+D*G+L*ie+N*q,o[11]=w*C+D*W+L*te+N*Z,o[15]=w*k+D*X+L*Q+N*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],s=e[8],o=e[12],u=e[1],d=e[5],f=e[9],h=e[13],v=e[2],m=e[6],g=e[10],x=e[14],E=e[3],T=e[7],y=e[11],S=e[15],w=f*x-h*g,D=d*x-h*m,L=d*g-f*m,N=u*x-h*v,I=u*g-f*v,b=u*m-d*v;return t*(T*w-y*D+S*L)-r*(E*w-y*N+S*I)+s*(E*D-T*N+S*b)-o*(E*L-T*I+y*b)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],s=e[8],o=e[1],u=e[5],d=e[9],f=e[2],h=e[6],v=e[10];return t*(u*v-d*h)-r*(o*v-d*f)+s*(o*h-u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],s=e[2],o=e[3],u=e[4],d=e[5],f=e[6],h=e[7],v=e[8],m=e[9],g=e[10],x=e[11],E=e[12],T=e[13],y=e[14],S=e[15],w=t*d-r*u,D=t*f-s*u,L=t*h-o*u,N=r*f-s*d,I=r*h-o*d,b=s*h-o*f,C=v*T-m*E,k=v*y-g*E,O=v*S-x*E,G=m*y-g*T,W=m*S-x*T,X=g*S-x*y,B=w*X-D*W+L*G+N*O-I*k+b*C;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ie=1/B;return e[0]=(d*X-f*W+h*G)*ie,e[1]=(s*W-r*X-o*G)*ie,e[2]=(T*b-y*I+S*N)*ie,e[3]=(g*I-m*b-x*N)*ie,e[4]=(f*O-u*X-h*k)*ie,e[5]=(t*X-s*O+o*k)*ie,e[6]=(y*L-E*b-S*D)*ie,e[7]=(v*b-g*L+x*D)*ie,e[8]=(u*W-d*O+h*C)*ie,e[9]=(r*O-t*W-o*C)*ie,e[10]=(E*I-T*L+S*w)*ie,e[11]=(m*L-v*I-x*w)*ie,e[12]=(d*k-u*G-f*C)*ie,e[13]=(t*G-r*k+s*C)*ie,e[14]=(T*D-E*N-y*w)*ie,e[15]=(v*N-m*D+g*w)*ie,this}scale(e){const t=this.elements,r=e.x,s=e.y,o=e.z;return t[0]*=r,t[4]*=s,t[8]*=o,t[1]*=r,t[5]*=s,t[9]*=o,t[2]*=r,t[6]*=s,t[10]*=o,t[3]*=r,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,s))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),s=Math.sin(t),o=1-r,u=e.x,d=e.y,f=e.z,h=o*u,v=o*d;return this.set(h*u+r,h*d-s*f,h*f+s*d,0,h*d+s*f,v*d+r,v*f-s*u,0,h*f-s*d,v*f+s*u,o*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,s,o,u){return this.set(1,r,o,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,r){const s=this.elements,o=t._x,u=t._y,d=t._z,f=t._w,h=o+o,v=u+u,m=d+d,g=o*h,x=o*v,E=o*m,T=u*v,y=u*m,S=d*m,w=f*h,D=f*v,L=f*m,N=r.x,I=r.y,b=r.z;return s[0]=(1-(T+S))*N,s[1]=(x+L)*N,s[2]=(E-D)*N,s[3]=0,s[4]=(x-L)*I,s[5]=(1-(g+S))*I,s[6]=(y+w)*I,s[7]=0,s[8]=(E+D)*b,s[9]=(y-w)*b,s[10]=(1-(g+T))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,r){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const o=this.determinantAffine();if(o===0)return r.set(1,1,1),t.identity(),this;let u=Gs.set(s[0],s[1],s[2]).length();const d=Gs.set(s[4],s[5],s[6]).length(),f=Gs.set(s[8],s[9],s[10]).length();o<0&&(u=-u),Xi.copy(this);const h=1/u,v=1/d,m=1/f;return Xi.elements[0]*=h,Xi.elements[1]*=h,Xi.elements[2]*=h,Xi.elements[4]*=v,Xi.elements[5]*=v,Xi.elements[6]*=v,Xi.elements[8]*=m,Xi.elements[9]*=m,Xi.elements[10]*=m,t.setFromRotationMatrix(Xi),r.x=u,r.y=d,r.z=f,this}makePerspective(e,t,r,s,o,u,d=Ji,f=!1){const h=this.elements,v=2*o/(t-e),m=2*o/(r-s),g=(t+e)/(t-e),x=(r+s)/(r-s);let E,T;if(f)E=o/(u-o),T=u*o/(u-o);else if(d===Ji)E=-(u+o)/(u-o),T=-2*u*o/(u-o);else if(d===Al)E=-u/(u-o),T=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=v,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=m,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,s,o,u,d=Ji,f=!1){const h=this.elements,v=2/(t-e),m=2/(r-s),g=-(t+e)/(t-e),x=-(r+s)/(r-s);let E,T;if(f)E=1/(u-o),T=u/(u-o);else if(d===Ji)E=-2/(u-o),T=-(u+o)/(u-o);else if(d===Al)E=-1/(u-o),T=-o/(u-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=v,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=m,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=E,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let s=0;s<16;s++)if(t[s]!==r[s])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};td.prototype.isMatrix4=!0;let Qt=td;const Gs=new ce,Xi=new Qt,OA=new ce(0,0,0),UA=new ce(1,1,1),va=new ce,ic=new ce,fi=new ce,j_=new Qt,J_=new go;class La{constructor(e=0,t=0,r=0,s=La.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,s=this._order){return this._x=e,this._y=t,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const s=e.elements,o=s[0],u=s[4],d=s[8],f=s[1],h=s[5],v=s[9],m=s[2],g=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,x),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-At(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(At(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-At(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(d,o)):(this._x=Math.atan2(-v,x),this._y=0);break;default:pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return j_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(j_,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return J_.setFromEuler(this),this.setFromQuaternion(J_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}La.DEFAULT_ORDER="XYZ";class Im{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let FA=0;const Q_=new ce,Vs=new go,Ur=new Qt,rc=new ce,tl=new ce,kA=new ce,BA=new go,ey=new ce(1,0,0),ty=new ce(0,1,0),ny=new ce(0,0,1),iy={type:"added"},zA={type:"removed"},Ws={type:"childadded",child:null},Eh={type:"childremoved",child:null};class Pn extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FA++}),this.uuid=Il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new ce,t=new La,r=new go,s=new ce(1,1,1);function o(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(o),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qt},normalMatrix:{value:new gt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Im,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(ey,e)}rotateY(e){return this.rotateOnAxis(ty,e)}rotateZ(e){return this.rotateOnAxis(ny,e)}translateOnAxis(e,t){return Q_.copy(e).applyQuaternion(this.quaternion),this.position.add(Q_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ey,e)}translateY(e){return this.translateOnAxis(ty,e)}translateZ(e){return this.translateOnAxis(ny,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ur.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?rc.copy(e):rc.set(e,t,r);const s=this.parent;this.updateWorldMatrix(!0,!1),tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ur.lookAt(tl,rc,this.up):Ur.lookAt(rc,tl,this.up),this.quaternion.setFromRotationMatrix(Ur),s&&(Ur.extractRotation(s.matrixWorld),Vs.setFromRotationMatrix(Ur),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(iy),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zA),Eh.child=e,this.dispatchEvent(Eh),Eh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ur.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ur.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ur),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(iy),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,s=this.children.length;r<s;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const s=this.children;for(let o=0,u=s.length;o<u;o++)s[o].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,e,kA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,BA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,s=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*r-o[8]*s,o[13]+=r-o[1]*t-o[5]*r-o[9]*s,o[14]+=s-o[2]*t-o[6]*r-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const o=this.children;for(let u=0,d=o.length;u<d;u++)o[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(d=>({...d})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let h=0,v=f.length;h<v;h++){const m=f[h];o(e.shapes,m)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,h=this.material.length;f<h;f++)d.push(o(e.materials,this.material[f]));s.material=d}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let d=0;d<this.children.length;d++)s.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];s.animations.push(o(e.animations,f))}}if(t){const d=u(e.geometries),f=u(e.materials),h=u(e.textures),v=u(e.images),m=u(e.shapes),g=u(e.skeletons),x=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),f.length>0&&(r.materials=f),h.length>0&&(r.textures=h),v.length>0&&(r.images=v),m.length>0&&(r.shapes=m),g.length>0&&(r.skeletons=g),x.length>0&&(r.animations=x),E.length>0&&(r.nodes=E)}return r.object=s,r;function u(d){const f=[];for(const h in d){const v=d[h];delete v.metadata,f.push(v)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const s=e.children[r];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Pn.DEFAULT_UP=new ce(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class io extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HA={type:"move"};class bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new io,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new io,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new io,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let s=null,o=null,u=null;const d=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,r),S=this._getHandJoint(h,T);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const v=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],g=v.position.distanceTo(m.position),x=.02,E=.005;h.inputState.pinching&&g>x+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=x-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,r),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(s=t.getPose(e.targetRaySpace,r),s===null&&o!==null&&(s=o),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(HA)))}return d!==null&&(d.visible=s!==null),f!==null&&(f.visible=o!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new io;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Ux={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_a={h:0,s:0,l:0},ac={h:0,s:0,l:0};function wh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Et{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,s=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Rt.colorSpaceToWorking(this,s),this}setHSL(e,t,r,s=Rt.workingColorSpace){if(e=wA(e,1),t=At(t,0,1),r=At(r,0,1),t===0)this.r=this.g=this.b=r;else{const o=r<=.5?r*(1+t):r+t-r*t,u=2*r-o;this.r=wh(u,o,e+1/3),this.g=wh(u,o,e),this.b=wh(u,o,e-1/3)}return Rt.colorSpaceToWorking(this,s),this}setStyle(e,t=pi){function r(o){o!==void 0&&parseFloat(o)<1&&pt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=s[1],d=s[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(o[4]),this.setRGB(Math.min(100,parseFloat(o[1]))/100,Math.min(100,parseFloat(o[2]))/100,Math.min(100,parseFloat(o[3]))/100,t);break;case"hsl":case"hsla":if(o=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:pt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);pt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pi){const r=Ux[e.toLowerCase()];return r!==void 0?this.setHex(r,t):pt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return Rt.workingToColorSpace(Fn.copy(this),e),Math.round(At(Fn.r*255,0,255))*65536+Math.round(At(Fn.g*255,0,255))*256+Math.round(At(Fn.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(Fn.copy(this),t);const r=Fn.r,s=Fn.g,o=Fn.b,u=Math.max(r,s,o),d=Math.min(r,s,o);let f,h;const v=(d+u)/2;if(d===u)f=0,h=0;else{const m=u-d;switch(h=v<=.5?m/(u+d):m/(2-u-d),u){case r:f=(s-o)/m+(s<o?6:0);break;case s:f=(o-r)/m+2;break;case o:f=(r-s)/m+4;break}f/=6}return e.h=f,e.s=h,e.l=v,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=pi){Rt.workingToColorSpace(Fn.copy(this),e);const t=Fn.r,r=Fn.g,s=Fn.b;return e!==pi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(s*255)})`}offsetHSL(e,t,r){return this.getHSL(_a),this.setHSL(_a.h+e,_a.s+t,_a.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(_a),e.getHSL(ac);const r=_h(_a.h,ac.h,t),s=_h(_a.s,ac.s,t),o=_h(_a.l,ac.l,t);return this.setHSL(r,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*r+o[6]*s,this.g=o[1]*t+o[4]*r+o[7]*s,this.b=o[2]*t+o[5]*r+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Et;Et.NAMES=Ux;class Dm{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new Et(e),this.near=t,this.far=r}clone(){return new Dm(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class GA extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new La,this.environmentIntensity=1,this.environmentRotation=new La,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const qi=new ce,Fr=new ce,Th=new ce,kr=new ce,$s=new ce,Xs=new ce,ry=new ce,Rh=new ce,Ah=new ce,Ch=new ce,Ph=new rn,Lh=new rn,Ih=new rn;class ji{constructor(e=new ce,t=new ce,r=new ce){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,s){s.subVectors(r,t),qi.subVectors(e,t),s.cross(qi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,r,s,o){qi.subVectors(s,t),Fr.subVectors(r,t),Th.subVectors(e,t);const u=qi.dot(qi),d=qi.dot(Fr),f=qi.dot(Th),h=Fr.dot(Fr),v=Fr.dot(Th),m=u*h-d*d;if(m===0)return o.set(0,0,0),null;const g=1/m,x=(h*f-d*v)*g,E=(u*v-d*f)*g;return o.set(1-x-E,E,x)}static containsPoint(e,t,r,s){return this.getBarycoord(e,t,r,s,kr)===null?!1:kr.x>=0&&kr.y>=0&&kr.x+kr.y<=1}static getInterpolation(e,t,r,s,o,u,d,f){return this.getBarycoord(e,t,r,s,kr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,kr.x),f.addScaledVector(u,kr.y),f.addScaledVector(d,kr.z),f)}static getInterpolatedAttribute(e,t,r,s,o,u){return Ph.setScalar(0),Lh.setScalar(0),Ih.setScalar(0),Ph.fromBufferAttribute(e,t),Lh.fromBufferAttribute(e,r),Ih.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(Ph,o.x),u.addScaledVector(Lh,o.y),u.addScaledVector(Ih,o.z),u}static isFrontFacing(e,t,r,s){return qi.subVectors(r,t),Fr.subVectors(e,t),qi.cross(Fr).dot(s)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,s){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,r,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qi.subVectors(this.c,this.b),Fr.subVectors(this.a,this.b),qi.cross(Fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ji.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ji.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,s,o){return ji.getInterpolation(e,this.a,this.b,this.c,t,r,s,o)}containsPoint(e){return ji.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ji.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,s=this.b,o=this.c;let u,d;$s.subVectors(s,r),Xs.subVectors(o,r),Rh.subVectors(e,r);const f=$s.dot(Rh),h=Xs.dot(Rh);if(f<=0&&h<=0)return t.copy(r);Ah.subVectors(e,s);const v=$s.dot(Ah),m=Xs.dot(Ah);if(v>=0&&m<=v)return t.copy(s);const g=f*m-v*h;if(g<=0&&f>=0&&v<=0&&f-v>0)return u=f/(f-v),t.copy(r).addScaledVector($s,u);Ch.subVectors(e,o);const x=$s.dot(Ch),E=Xs.dot(Ch);if(E>=0&&x<=E)return t.copy(o);const T=x*h-f*E;if(T<=0&&h>=0&&E<=0)return d=h/(h-E),t.copy(r).addScaledVector(Xs,d);const y=v*E-x*m;if(y<=0&&m-v>=0&&x-E>=0)return ry.subVectors(o,s),d=(m-v)/(m-v+(x-E)),t.copy(s).addScaledVector(ry,d);const S=1/(y+T+g);return u=T*S,d=g*S,t.copy(r).addScaledVector($s,u).addScaledVector(Xs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Dl{constructor(e=new ce(1/0,1/0,1/0),t=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const o=r.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let u=0,d=o.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Yi):Yi.fromBufferAttribute(o,u),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),sc.copy(r.boundingBox)),sc.applyMatrix4(e.matrixWorld),this.union(sc)}const s=e.children;for(let o=0,u=s.length;o<u;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nl),oc.subVectors(this.max,nl),qs.subVectors(e.a,nl),Ys.subVectors(e.b,nl),Ks.subVectors(e.c,nl),ya.subVectors(Ys,qs),Sa.subVectors(Ks,Ys),ts.subVectors(qs,Ks);let t=[0,-ya.z,ya.y,0,-Sa.z,Sa.y,0,-ts.z,ts.y,ya.z,0,-ya.x,Sa.z,0,-Sa.x,ts.z,0,-ts.x,-ya.y,ya.x,0,-Sa.y,Sa.x,0,-ts.y,ts.x,0];return!Dh(t,qs,Ys,Ks,oc)||(t=[1,0,0,0,1,0,0,0,1],!Dh(t,qs,Ys,Ks,oc))?!1:(lc.crossVectors(ya,Sa),t=[lc.x,lc.y,lc.z],Dh(t,qs,Ys,Ks,oc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Br),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Br=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Yi=new ce,sc=new Dl,qs=new ce,Ys=new ce,Ks=new ce,ya=new ce,Sa=new ce,ts=new ce,nl=new ce,oc=new ce,lc=new ce,ns=new ce;function Dh(n,e,t,r,s){for(let o=0,u=n.length-3;o<=u;o+=3){ns.fromArray(n,o);const d=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),f=e.dot(ns),h=t.dot(ns),v=r.dot(ns);if(Math.max(-Math.max(f,h,v),Math.min(f,h,v))>d)return!1}return!0}const mn=new ce,uc=new bt;let VA=0;class ss extends ps{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:VA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=SA,this.updateRanges=[],this.gpuType=Sr,this.version=0,this._normalizationScale=e!==void 0?Pm(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[r+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)uc.fromBufferAttribute(this,t),uc.applyMatrix3(e),this.setXY(t,uc.x,uc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=s,this}setXYZW(e,t,r,s,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),s=this._normalize(s),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):RA(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):AA(e,this.array)}}class Fx extends ss{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class kx extends ss{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class $n extends ss{constructor(e,t,r){super(new Float32Array(e),t,r)}}const WA=new Dl,il=new ce,Nh=new ce;class Nm{constructor(e=new ce,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):WA.setFromPoints(e).getCenter(r);let s=0;for(let o=0,u=e.length;o<u;o++)s=Math.max(s,r.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;il.subVectors(e,this.center);const t=il.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),s=(r-this.radius)*.5;this.center.addScaledVector(il,s/r),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(il.copy(e.center).add(Nh)),this.expandByPoint(il.copy(e.center).sub(Nh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let $A=0;const Ai=new Qt,Oh=new Pn,Zs=new ce,hi=new Dl,rl=new Dl,bn=new ce;class Yr extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$A++}),this.uuid=Il(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xA(e)?kx:Fx)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const o=new gt().getNormalMatrix(e);r.applyNormalMatrix(o),r.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,t,r){return Ai.makeTranslation(e,t,r),this.applyMatrix4(Ai),this}scale(e,t,r){return Ai.makeScale(e,t,r),this.applyMatrix4(Ai),this}lookAt(e){return Oh.lookAt(e),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let s=0,o=e.length;s<o;s++){const u=e[s];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new $n(r,3))}else{const r=Math.min(e.length,t.count);for(let s=0;s<r;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];hi.setFromBufferAttribute(o),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nm);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const r=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const d=t[o];rl.setFromBufferAttribute(d),this.morphTargetsRelative?(bn.addVectors(hi.min,rl.min),hi.expandByPoint(bn),bn.addVectors(hi.max,rl.max),hi.expandByPoint(bn)):(hi.expandByPoint(rl.min),hi.expandByPoint(rl.max))}hi.getCenter(r);let s=0;for(let o=0,u=e.count;o<u;o++)bn.fromBufferAttribute(e,o),s=Math.max(s,r.distanceToSquared(bn));if(t)for(let o=0,u=t.length;o<u;o++){const d=t[o],f=this.morphTargetsRelative;for(let h=0,v=d.count;h<v;h++)bn.fromBufferAttribute(d,h),f&&(Zs.fromBufferAttribute(e,h),bn.add(Zs)),s=Math.max(s,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,s=t.normal,o=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new ss(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],f=[],h=new Uint8Array(r.count);for(let k=0;k<r.count;k++)d[k]=new ce,f[k]=new ce;const v=new ce,m=new ce,g=new ce,x=new bt,E=new bt,T=new bt,y=new ce,S=new ce;function w(k,O,G){h[k]=h[O]=h[G]=1,v.fromBufferAttribute(r,k),m.fromBufferAttribute(r,O),g.fromBufferAttribute(r,G),x.fromBufferAttribute(o,k),E.fromBufferAttribute(o,O),T.fromBufferAttribute(o,G),m.sub(v),g.sub(v),E.sub(x),T.sub(x);const W=1/(E.x*T.y-T.x*E.y);isFinite(W)&&(y.copy(m).multiplyScalar(T.y).addScaledVector(g,-E.y).multiplyScalar(W),S.copy(g).multiplyScalar(E.x).addScaledVector(m,-T.x).multiplyScalar(W),d[k].add(y),d[O].add(y),d[G].add(y),f[k].add(S),f[O].add(S),f[G].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let k=0,O=D.length;k<O;++k){const G=D[k],W=G.start,X=G.count;for(let B=W,ie=W+X;B<ie;B+=3)w(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const L=new ce,N=new ce,I=new ce,b=new ce;function C(k){I.fromBufferAttribute(s,k),b.copy(I);const O=d[k];L.copy(O),L.sub(I.multiplyScalar(I.dot(O))).normalize(),N.crossVectors(b,O);const W=N.dot(f[k])<0?-1:1;u.setXYZW(k,L.x,L.y,L.z,W)}for(let k=0,O=r.count;k<O;++k)h[k]&&C(k);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new ss(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,x=r.count;g<x;g++)r.setXYZ(g,0,0,0);const s=new ce,o=new ce,u=new ce,d=new ce,f=new ce,h=new ce,v=new ce,m=new ce;if(e)for(let g=0,x=e.count;g<x;g+=3){const E=e.getX(g+0),T=e.getX(g+1),y=e.getX(g+2);s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,T),u.fromBufferAttribute(t,y),v.subVectors(u,o),m.subVectors(s,o),v.cross(m),d.fromBufferAttribute(r,E),f.fromBufferAttribute(r,T),h.fromBufferAttribute(r,y),d.add(v),f.add(v),h.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,x=t.count;g<x;g+=3)s.fromBufferAttribute(t,g+0),o.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),v.subVectors(u,o),m.subVectors(s,o),v.cross(m),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(d,f){const h=d.array,v=d.itemSize,m=d.normalized,g=new h.constructor(f.length*v);let x=0,E=0;for(let T=0,y=f.length;T<y;T++){d.isInterleavedBufferAttribute?x=f[T]*d.data.stride+d.offset:x=f[T]*v;for(let S=0;S<v;S++)g[E++]=h[x++]}return new ss(g,v,m)}if(this.index===null)return pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yr,r=this.index.array,s=this.attributes;for(const d in s){const f=s[d],h=e(f,r);t.setAttribute(d,h)}const o=this.morphAttributes;for(const d in o){const f=[],h=o[d];for(let v=0,m=h.length;v<m;v++){const g=h[v],x=e(g,r);f.push(x)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,f=u.length;d<f;d++){const h=u[d];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const h=r[f];e.data.attributes[f]=h.toJSON(e.data)}const s={};let o=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],v=[];for(let m=0,g=h.length;m<g;m++){const x=h[m];v.push(x.toJSON(e.data))}v.length>0&&(s[f]=v,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const s=e.attributes;for(const h in s){const v=s[h];this.setAttribute(h,v.clone(t))}const o=e.morphAttributes;for(const h in o){const v=[],m=o[h];for(let g=0,x=m.length;g<x;g++)v.push(m[g].clone(t));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,v=u.length;h<v;h++){const m=u[h];this.addGroup(m.start,m.count,m.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uh=new ce,XA=new ce,qA=new gt;class ba{constructor(e=new ce(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,s){return this.normal.set(e,t,r),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const s=Uh.subVectors(r,t).cross(XA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const s=e.delta(Uh),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||qA.getNormalMatrix(e),s=this.coplanarPoint(Uh).applyMatrix4(e),o=this.normal.applyMatrix3(r).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let YA=0;class Nl extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YA++}),this.uuid=Il(),this.name="",this.type="Material",this.blending=_l,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=px,this.blendDst=mx,this.blendEquation=to,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=wl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pA,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gh,this.stencilZFail=gh,this.stencilZPass=gh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){pt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){pt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(r):s&&s.isVector2&&r&&r.isVector2||s&&s.isEuler&&r&&r.isEuler||s&&s.isVector3&&r&&r.isVector3?s.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function s(o){const u=[];for(const d in o){const f=o[d];delete f.metadata,u.push(f)}return u}if(t){const o=s(e.textures),u=s(e.images);o.length>0&&(r.textures=o),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new ba().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new bt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new bt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const s=t.length;r=new Array(s);for(let o=0;o!==s;++o)r[o]=t[o].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const zr=new ce,Fh=new ce,cc=new ce,dc=new ce;class Bx{constructor(e=new ce,t=new ce(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zr.copy(this.origin).addScaledVector(this.direction,t),zr.distanceToSquared(e))}distanceSqToSegment(e,t,r,s){Fh.copy(e).add(t).multiplyScalar(.5),cc.copy(t).sub(e).normalize(),dc.copy(this.origin).sub(Fh);const o=e.distanceTo(t)*.5,u=-this.direction.dot(cc),d=dc.dot(this.direction),f=-dc.dot(cc),h=dc.lengthSq(),v=Math.abs(1-u*u);let m,g,x,E;if(v>0)if(m=u*f-d,g=u*d-f,E=o*v,m>=0)if(g>=-E)if(g<=E){const T=1/v;m*=T,g*=T,x=m*(m+u*g+2*d)+g*(u*m+g+2*f)+h}else g=o,m=Math.max(0,-(u*g+d)),x=-m*m+g*(g+2*f)+h;else g=-o,m=Math.max(0,-(u*g+d)),x=-m*m+g*(g+2*f)+h;else g<=-E?(m=Math.max(0,-(-u*o+d)),g=m>0?-o:Math.min(Math.max(-o,-f),o),x=-m*m+g*(g+2*f)+h):g<=E?(m=0,g=Math.min(Math.max(-o,-f),o),x=g*(g+2*f)+h):(m=Math.max(0,-(u*o+d)),g=m>0?o:Math.min(Math.max(-o,-f),o),x=-m*m+g*(g+2*f)+h);else g=u>0?-o:o,m=Math.max(0,-(u*g+d)),x=-m*m+g*(g+2*f)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Fh).addScaledVector(cc,g),x}intersectSphere(e,t){if(e.radius<0)return null;zr.subVectors(e.center,this.origin);const r=zr.dot(this.direction),s=zr.dot(zr)-r*r,o=e.radius*e.radius;if(s>o)return null;const u=Math.sqrt(o-s),d=r-u,f=r+u;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,s,o,u,d,f;const h=1/this.direction.x,v=1/this.direction.y,m=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,s=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,s=(e.min.x-g.x)*h),v>=0?(o=(e.min.y-g.y)*v,u=(e.max.y-g.y)*v):(o=(e.max.y-g.y)*v,u=(e.min.y-g.y)*v),r>u||o>s||((o>r||isNaN(r))&&(r=o),(u<s||isNaN(s))&&(s=u),m>=0?(d=(e.min.z-g.z)*m,f=(e.max.z-g.z)*m):(d=(e.max.z-g.z)*m,f=(e.min.z-g.z)*m),r>f||d>s)||((d>r||r!==r)&&(r=d),(f<s||s!==s)&&(s=f),s<0)?null:this.at(r>=0?r:s,t)}intersectsBox(e){return this.intersectBox(e,zr)!==null}intersectTriangle(e,t,r,s,o){const u=this.origin,d=this.direction,f=d.x,h=d.y,v=d.z,m=e.x-u.x,g=e.y-u.y,x=e.z-u.z,E=t.x-u.x,T=t.y-u.y,y=t.z-u.z,S=r.x-u.x,w=r.y-u.y,D=r.z-u.z,L=Math.abs(f),N=Math.abs(h),I=Math.abs(v);let b,C,k,O,G,W,X,B,ie,te,Q,j;if(L>=N&&L>=I?(k=f,W=m,ie=E,j=S,f>=0?(b=h,C=v,O=g,G=x,X=T,B=y,te=w,Q=D):(b=v,C=h,O=x,G=g,X=y,B=T,te=D,Q=w)):N>=I?(k=h,W=g,ie=T,j=w,h>=0?(b=v,C=f,O=x,G=m,X=y,B=E,te=D,Q=S):(b=f,C=v,O=m,G=x,X=E,B=y,te=S,Q=D)):(k=v,W=x,ie=y,j=D,v>=0?(b=f,C=h,O=m,G=g,X=E,B=T,te=S,Q=w):(b=h,C=f,O=g,G=m,X=T,B=E,te=w,Q=S)),k===0)return null;const q=b/k,Z=C/k,U=1/k,J=O-q*W,Te=G-Z*W,ne=X-q*ie,ye=B-Z*ie,Se=te-q*j,we=Q-Z*j,pe=Se*ye-we*ne,ue=J*we-Te*Se,Ge=ne*Te-ye*J;if(s){if(pe<0||ue<0||Ge<0)return null}else if((pe<0||ue<0||Ge<0)&&(pe>0||ue>0||Ge>0))return null;const ve=pe+ue+Ge;if(ve===0)return null;const De=U*(pe*W+ue*ie+Ge*j);return(ve>0?De<0:De>0)?null:this.at(De/ve,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Uc extends Nl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new La,this.combine=gx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ay=new Qt,is=new Bx,fc=new Nm,sy=new ce,hc=new ce,pc=new ce,mc=new ce,kh=new ce,gc=new ce,oy=new ce,vc=new ce;class Ia extends Pn{constructor(e=new Yr,t=new Uc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const s=t[r[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const d=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=o}}}}getVertexPosition(e,t){const r=this.geometry,s=r.attributes.position,o=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(s,e);const d=this.morphTargetInfluences;if(o&&d){gc.set(0,0,0);for(let f=0,h=o.length;f<h;f++){const v=d[f],m=o[f];v!==0&&(kh.fromBufferAttribute(m,e),u?gc.addScaledVector(kh,v):gc.addScaledVector(kh.sub(t),v))}t.add(gc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),fc.copy(r.boundingSphere),fc.applyMatrix4(o),is.copy(e.ray).recast(e.near),!(fc.containsPoint(is.origin)===!1&&(is.intersectSphere(fc,sy)===null||is.origin.distanceToSquared(sy)>(e.far-e.near)**2))&&(ay.copy(o).invert(),is.copy(e.ray).applyMatrix4(ay),!(r.boundingBox!==null&&is.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,r){let s;const o=this.geometry,u=this.material,d=o.index,f=o.attributes.position,h=o.attributes.uv,v=o.attributes.uv1,m=o.attributes.normal,g=o.groups,x=o.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,T=g.length;E<T;E++){const y=g[E],S=u[y.materialIndex],w=Math.max(y.start,x.start),D=Math.min(d.count,Math.min(y.start+y.count,x.start+x.count));for(let L=w,N=D;L<N;L+=3){const I=d.getX(L),b=d.getX(L+1),C=d.getX(L+2);s=_c(this,S,e,r,h,v,m,I,b,C),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const E=Math.max(0,x.start),T=Math.min(d.count,x.start+x.count);for(let y=E,S=T;y<S;y+=3){const w=d.getX(y),D=d.getX(y+1),L=d.getX(y+2);s=_c(this,u,e,r,h,v,m,w,D,L),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(u))for(let E=0,T=g.length;E<T;E++){const y=g[E],S=u[y.materialIndex],w=Math.max(y.start,x.start),D=Math.min(f.count,Math.min(y.start+y.count,x.start+x.count));for(let L=w,N=D;L<N;L+=3){const I=L,b=L+1,C=L+2;s=_c(this,S,e,r,h,v,m,I,b,C),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const E=Math.max(0,x.start),T=Math.min(f.count,x.start+x.count);for(let y=E,S=T;y<S;y+=3){const w=y,D=y+1,L=y+2;s=_c(this,u,e,r,h,v,m,w,D,L),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function KA(n,e,t,r,s,o,u,d){let f;if(e.side===ni?f=r.intersectTriangle(u,o,s,!0,d):f=r.intersectTriangle(s,o,u,e.side===ls,d),f===null)return null;vc.copy(d),vc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(vc);return h<t.near||h>t.far?null:{distance:h,point:vc.clone(),object:n}}function _c(n,e,t,r,s,o,u,d,f,h){n.getVertexPosition(d,hc),n.getVertexPosition(f,pc),n.getVertexPosition(h,mc);const v=KA(n,e,t,r,hc,pc,mc,oy);if(v){const m=new ce;ji.getBarycoord(oy,hc,pc,mc,m),s&&(v.uv=ji.getInterpolatedAttribute(s,d,f,h,m,new bt)),o&&(v.uv1=ji.getInterpolatedAttribute(o,d,f,h,m,new bt)),u&&(v.normal=ji.getInterpolatedAttribute(u,d,f,h,m,new ce),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:d,b:f,c:h,normal:new ce,materialIndex:0};ji.getNormal(hc,pc,mc,g.normal),v.face=g,v.barycoord=m}return v}class ZA extends Bn{constructor(e=null,t=1,r=1,s,o,u,d,f,h=Cn,v=Cn,m,g){super(null,u,d,f,h,v,s,o,m,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rs=new Nm,jA=new bt(.5,.5),yc=new ce;class Cl{constructor(e=new ba,t=new ba,r=new ba,s=new ba,o=new ba,u=new ba){this.planes=[e,t,r,s,o,u]}set(e,t,r,s,o,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(s),d[4].copy(o),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ji,r=!1){const s=this.planes,o=e.elements,u=o[0],d=o[1],f=o[2],h=o[3],v=o[4],m=o[5],g=o[6],x=o[7],E=o[8],T=o[9],y=o[10],S=o[11],w=o[12],D=o[13],L=o[14],N=o[15];if(s[0].setComponents(h-u,x-v,S-E,N-w).normalize(),s[1].setComponents(h+u,x+v,S+E,N+w).normalize(),s[2].setComponents(h+d,x+m,S+T,N+D).normalize(),s[3].setComponents(h-d,x-m,S-T,N-D).normalize(),r)s[4].setComponents(f,g,y,L).normalize(),s[5].setComponents(h-f,x-g,S-y,N-L).normalize();else if(s[4].setComponents(h-f,x-g,S-y,N-L).normalize(),t===Ji)s[5].setComponents(h+f,x+g,S+y,N+L).normalize();else if(t===Al)s[5].setComponents(f,g,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);const t=jA.distanceTo(e.center);return rs.radius=.7071067811865476+t,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,r=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(r)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const s=t[r];if(yc.x=s.normal.x>0?e.max.x:e.min.x,yc.y=s.normal.y>0?e.max.y:e.min.y,yc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(yc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const ly=new Qt;class Om{constructor(){this.coordinateSystem=Ji,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let s=0;s<t.length;s++){const o=t[s];ly.multiplyMatrices(o.projectionMatrix,o.matrixWorldInverse),r[s]===void 0&&(r[s]=new Cl),r[s].setFromProjectionMatrix(ly,o.coordinateSystem,o.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Cl),t[s].copy(r[s]);return this._count=e._count,this}clone(){return new Om().copy(this)}}class zx extends Bn{constructor(e=[],t=uo,r,s,o,u,d,f,h,v){super(e,t,r,s,o,u,d,f,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sc extends Bn{constructor(e,t,r,s,o,u,d,f,h){super(e,t,r,s,o,u,d,f,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fo extends Bn{constructor(e,t,r=wr,s,o,u,d=Cn,f=Cn,h,v=Pa,m=1){if(v!==Pa&&v!==Aa)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:m};super(g,s,o,u,d,f,v,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Hx extends fo{constructor(e,t=wr,r=uo,s,o,u=Cn,d=Cn,f,h=Pa){const v={width:e,height:e,depth:1},m=[v,v,v,v,v,v];super(e,e,t,r,s,o,u,d,f,h),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Gx extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vo extends Yr{constructor(e=1,t=1,r=1,s=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:s,heightSegments:o,depthSegments:u};const d=this;s=Math.floor(s),o=Math.floor(o),u=Math.floor(u);const f=[],h=[],v=[],m=[];let g=0,x=0;E("z","y","x",-1,-1,r,t,e,u,o,0),E("z","y","x",1,-1,r,t,-e,u,o,1),E("x","z","y",1,1,e,r,t,s,u,2),E("x","z","y",1,-1,e,r,-t,s,u,3),E("x","y","z",1,-1,e,t,r,s,o,4),E("x","y","z",-1,-1,e,t,-r,s,o,5),this.setIndex(f),this.setAttribute("position",new $n(h,3)),this.setAttribute("normal",new $n(v,3)),this.setAttribute("uv",new $n(m,2));function E(T,y,S,w,D,L,N,I,b,C,k){const O=L/b,G=N/C,W=L/2,X=N/2,B=I/2,ie=b+1,te=C+1;let Q=0,j=0;const q=new ce;for(let Z=0;Z<te;Z++){const U=Z*G-X;for(let J=0;J<ie;J++){const Te=J*O-W;q[T]=Te*w,q[y]=U*D,q[S]=B,h.push(q.x,q.y,q.z),q[T]=0,q[y]=0,q[S]=I>0?1:-1,v.push(q.x,q.y,q.z),m.push(J/b),m.push(1-Z/C),Q+=1}}for(let Z=0;Z<C;Z++)for(let U=0;U<b;U++){const J=g+U+ie*Z,Te=g+U+ie*(Z+1),ne=g+(U+1)+ie*(Z+1),ye=g+(U+1)+ie*Z;f.push(J,Te,ye),f.push(Te,ne,ye),j+=6}d.addGroup(x,j,k),x+=j,g+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Pl extends Yr{constructor(e=1,t=1,r=1,s=32,o=1,u=!1,d=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:s,heightSegments:o,openEnded:u,thetaStart:d,thetaLength:f};const h=this;s=Math.floor(s),o=Math.floor(o);const v=[],m=[],g=[],x=[];let E=0;const T=[],y=r/2;let S=0;w(),u===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(v),this.setAttribute("position",new $n(m,3)),this.setAttribute("normal",new $n(g,3)),this.setAttribute("uv",new $n(x,2));function w(){const L=new ce,N=new ce;let I=0;const b=(t-e)/r;for(let C=0;C<=o;C++){const k=[],O=C/o,G=O*(t-e)+e;for(let W=0;W<=s;W++){const X=W/s,B=X*f+d,ie=Math.sin(B),te=Math.cos(B);N.x=G*ie,N.y=-O*r+y,N.z=G*te,m.push(N.x,N.y,N.z),L.set(ie,b,te).normalize(),g.push(L.x,L.y,L.z),x.push(X,1-O),k.push(E++)}T.push(k)}for(let C=0;C<s;C++)for(let k=0;k<o;k++){const O=T[k][C],G=T[k+1][C],W=T[k+1][C+1],X=T[k][C+1];(e>0||k!==0)&&(v.push(O,G,X),I+=3),(t>0||k!==o-1)&&(v.push(G,W,X),I+=3)}h.addGroup(S,I,0),S+=I}function D(L){const N=E,I=new bt,b=new ce;let C=0;const k=L===!0?e:t,O=L===!0?1:-1;for(let W=1;W<=s;W++)m.push(0,y*O,0),g.push(0,O,0),x.push(.5,.5),E++;const G=E;for(let W=0;W<=s;W++){const B=W/s*f+d,ie=Math.cos(B),te=Math.sin(B);b.x=k*te,b.y=y*O,b.z=k*ie,m.push(b.x,b.y,b.z),g.push(0,O,0),I.x=ie*.5+.5,I.y=te*.5*O+.5,x.push(I.x,I.y),E++}for(let W=0;W<s;W++){const X=N+W,B=G+W;L===!0?v.push(B,B+1,X):v.push(B+1,B,X),C+=3}h.addGroup(S,C,L===!0?1:2),S+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zc extends Pl{constructor(e=1,t=1,r=32,s=1,o=!1,u=0,d=Math.PI*2){super(0,e,t,r,s,o,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:u,thetaLength:d}}static fromJSON(e){return new Zc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class os extends Yr{constructor(e=1,t=1,r=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:s};const o=e/2,u=t/2,d=Math.floor(r),f=Math.floor(s),h=d+1,v=f+1,m=e/d,g=t/f,x=[],E=[],T=[],y=[];for(let S=0;S<v;S++){const w=S*g-u;for(let D=0;D<h;D++){const L=D*m-o;E.push(L,-w,0),T.push(0,0,1),y.push(D/d),y.push(1-S/f)}}for(let S=0;S<f;S++)for(let w=0;w<d;w++){const D=w+h*S,L=w+h*(S+1),N=w+1+h*(S+1),I=w+1+h*S;x.push(D,L,I),x.push(L,N,I)}this.setIndex(x),this.setAttribute("position",new $n(E,3)),this.setAttribute("normal",new $n(T,3)),this.setAttribute("uv",new $n(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.width,e.height,e.widthSegments,e.heightSegments)}}class Um extends Yr{constructor(e=1,t=32,r=16,s=0,o=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:s,phiLength:o,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(u+d,Math.PI);let h=0;const v=[],m=new ce,g=new ce,x=[],E=[],T=[],y=[];for(let S=0;S<=r;S++){const w=[],D=S/r,L=u+D*d,N=e*Math.cos(L),I=Math.sqrt(e*e-N*N);let b=0;S===0&&u===0?b=.5/t:S===r&&f===Math.PI&&(b=-.5/t);for(let C=0;C<=t;C++){const k=C/t,O=s+k*o;m.x=-I*Math.cos(O),m.y=N,m.z=I*Math.sin(O),E.push(m.x,m.y,m.z),g.copy(m).normalize(),T.push(g.x,g.y,g.z),y.push(k+b,1-D),w.push(h++)}v.push(w)}for(let S=0;S<r;S++)for(let w=0;w<t;w++){const D=v[S][w+1],L=v[S][w],N=v[S+1][w],I=v[S+1][w+1];(S!==0||u>0)&&x.push(D,L,I),(S!==r-1||f<Math.PI)&&x.push(L,N,I)}this.setIndex(x),this.setAttribute("position",new $n(E,3)),this.setAttribute("normal",new $n(T,3)),this.setAttribute("uv",new $n(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Um(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ho(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const s=n[t][r];if(uy(s))s.isRenderTargetTexture?(pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=s.clone();else if(Array.isArray(s))if(uy(s[0])){const o=[];for(let u=0,d=s.length;u<d;u++)o[u]=s[u].clone();e[t][r]=o}else e[t][r]=s.slice();else e[t][r]=s}}return e}function Vn(n){const e={};for(let t=0;t<n.length;t++){const r=ho(n[t]);for(const s in r)e[s]=r[s]}return e}function uy(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function JA(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Vx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const QA={clone:ho,merge:Vn};var eC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cs extends Nl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eC,this.fragmentShader=tC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=JA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const s in this.extensions)this.extensions[s]===!0&&(r[s]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const s=e.uniforms[r];switch(this.uniforms[r]={},s.type){case"t":this.uniforms[r].value=t[s.value]||null;break;case"c":this.uniforms[r].value=new Et().setHex(s.value);break;case"v2":this.uniforms[r].value=new bt().fromArray(s.value);break;case"v3":this.uniforms[r].value=new ce().fromArray(s.value);break;case"v4":this.uniforms[r].value=new rn().fromArray(s.value);break;case"m3":this.uniforms[r].value=new gt().fromArray(s.value);break;case"m4":this.uniforms[r].value=new Qt().fromArray(s.value);break;default:this.uniforms[r].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class nC extends cs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class iC extends Nl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=am,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new La,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rC extends Nl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aC extends Nl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Fm extends Pn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class sC extends Fm{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Bh=new Qt,cy=new ce,dy=new ce;class Wx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cl,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;cy.setFromMatrixPosition(e.matrixWorld),t.position.copy(cy),dy.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dy),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,s){Bh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Bh,e.coordinateSystem,e.reversedDepth);const o=this._frameExtents,u=s?s.z/o.x:1,d=s?s.w/o.y:1,f=s?s.x/o.x:0,h=s?s.y/o.y:0;e.coordinateSystem===Al||e.reversedDepth?t.set(.5*u,0,0,.5*u+f,0,.5*d,0,.5*d+h,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+f,0,.5*d,0,.5*d+h,0,0,.5,.5,0,0,0,1),t.multiply(Bh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const xc=new ce,Mc=new go,cr=new ce;class $x extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xc,Mc,cr),cr.x===1&&cr.y===1&&cr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xc,Mc,cr.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(xc,Mc,cr),cr.x===1&&cr.y===1&&cr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xc,Mc,cr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xa=new ce,fy=new bt,hy=new bt;class Pi extends $x{constructor(e=50,t=1,r=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sm*2*Math.atan(Math.tan(vh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xa.x,xa.y).multiplyScalar(-e/xa.z),xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xa.x,xa.y).multiplyScalar(-e/xa.z)}getViewSize(e,t){return this.getViewBounds(e,fy,hy),t.subVectors(hy,fy)}setViewOffset(e,t,r,s,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vh*.5*this.fov)/this.zoom,r=2*t,s=this.aspect*r,o=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,h=u.fullHeight;o+=u.offsetX*s/f,t-=u.offsetY*r/h,s*=u.width/f,r*=u.height/h}const d=this.filmOffset;d!==0&&(o+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class oC extends Wx{constructor(){super(new Pi(90,1,.5,500)),this.isPointLightShadow=!0}}class py extends Fm{constructor(e,t,r=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=s,this.shadow=new oC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Xx extends $x{constructor(e=-1,t=1,r=1,s=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=s,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,s,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=r-e,u=r+e,d=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,u=o+h*this.view.width,d-=v*this.view.offsetY,f=d-v*this.view.height}this.projectionMatrix.makeOrthographic(o,u,d,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class lC extends Wx{constructor(){super(new Xx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uC extends Fm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new lC}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const js=-90,Js=1;class om extends Pn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Pi(js,Js,e,t);s.layers=this.layers,this.add(s);const o=new Pi(js,Js,e,t);o.layers=this.layers,this.add(o);const u=new Pi(js,Js,e,t);u.layers=this.layers,this.add(u);const d=new Pi(js,Js,e,t);d.layers=this.layers,this.add(d);const f=new Pi(js,Js,e,t);f.layers=this.layers,this.add(f);const h=new Pi(js,Js,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,s,o,u,d,f]=t;for(const h of t)this.remove(h);if(e===Ji)r.up.set(0,1,0),r.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Al)r.up.set(0,-1,0),r.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,d,f,h,v]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(r,1,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,4,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.mipmapsAutoUpdate=T,e.setRenderTarget(r,5,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(m,g,x),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class cC extends Pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const my=new Qt;class dC{constructor(e,t,r=0,s=1/0){this.ray=new Bx(e,t),this.near=r,this.far=s,this.camera=null,this.layers=new Im,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Nt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return my.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(my),this}intersectObject(e,t=!0,r=[]){return lm(e,this,r,t),r.sort(gy),r}intersectObjects(e,t=!0,r=[]){for(let s=0,o=e.length;s<o;s++)lm(e[s],this,r,t);return r.sort(gy),r}}function gy(n,e){return n.distance-e.distance}function lm(n,e,t,r){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&r===!0){const o=n.children;for(let u=0,d=o.length;u<d;u++)lm(o[u],e,t,!0)}}function vy(n,e,t,r){const s=fC(r);switch(t){case Ax:return n*e;case Px:return n*e/s.components*s.byteLength;case Rm:return n*e/s.components*s.byteLength;case us:return n*e*2/s.components*s.byteLength;case Am:return n*e*2/s.components*s.byteLength;case Cx:return n*e*3/s.components*s.byteLength;case xr:return n*e*4/s.components*s.byteLength;case Cm:return n*e*4/s.components*s.byteLength;case Lc:case Ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Dc:case Nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pp:case Ip:return Math.max(n,16)*Math.max(e,8)/4;case Cp:case Lp:return Math.max(n,8)*Math.max(e,8)/2;case Dp:case Np:case Up:case Fp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Op:case $c:case kp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zp:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Hp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Gp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Vp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Wp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case $p:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Xp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case qp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Yp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Kp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Zp:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case jp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Jp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Qp:case em:case tm:return Math.ceil(n/4)*Math.ceil(e/4)*16;case nm:case im:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Xc:case rm:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fC(n){switch(n){case gi:case bx:return{byteLength:1,components:1};case Rl:case wx:case Tr:return{byteLength:2,components:1};case wm:case Tm:return{byteLength:2,components:4};case wr:case bm:case Sr:return{byteLength:4,components:1};case Tx:case Rx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mm}}));typeof window<"u"&&(window.__THREE__?pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qx(){let n=null,e=!1,t=null,r=null;function s(o,u){r=n.requestAnimationFrame(s),t(o,u)}return{start:function(){e!==!0&&t!==null&&n!==null&&(r=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function hC(n){const e=new WeakMap;function t(d,f){const h=d.array,v=d.usage,m=h.byteLength,g=n.createBuffer();n.bindBuffer(f,g),n.bufferData(f,h,v),d.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=n.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:m}}function r(d,f,h){const v=f.array,m=f.updateRanges;if(n.bindBuffer(h,d),m.length===0)n.bufferSubData(h,0,v);else{m.sort((x,E)=>x.start-E.start);let g=0;for(let x=1;x<m.length;x++){const E=m[g],T=m[x];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++g,m[g]=T)}m.length=g+1;for(let x=0,E=m.length;x<E;x++){const T=m[x];n.bufferSubData(h,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function o(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(n.deleteBuffer(f.buffer),e.delete(d))}function u(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,t(d,f));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,d,f),h.version=d.version}}return{get:s,remove:o,update:u}}var pC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mC=`#ifdef USE_ALPHAHASH
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
#endif`,gC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_C=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SC=`#ifdef USE_AOMAP
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
#endif`,xC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MC=`#ifdef USE_BATCHING
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
#endif`,EC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,RC=`#ifdef USE_IRIDESCENCE
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
#endif`,AC=`#ifdef USE_BUMPMAP
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
#endif`,CC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,PC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,NC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,OC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,UC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,FC=`#define PI 3.141592653589793
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
} // validated`,kC=`vec3 transformedNormal = objectNormal;
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
#endif`,BC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VC="gl_FragColor = linearToOutputTexel( gl_FragColor );",WC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$C=`#ifdef USE_ENVMAP
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
#endif`,XC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,qC=`#ifdef USE_ENVMAP
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
#endif`,YC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KC=`#ifdef USE_ENVMAP
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
#endif`,ZC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eP=`#ifdef USE_GRADIENTMAP
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
}`,tP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rP=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,aP=`#ifdef USE_ENVMAP
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
#endif`,sP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cP=`PhysicalMaterial material;
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
#endif`,dP=`uniform sampler2D dfgLUT;
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
}`,fP=`
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
#endif`,hP=`#if defined( RE_IndirectDiffuse )
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
#endif`,pP=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mP=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,gP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_P=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,SP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,EP=`#if defined( USE_POINTS_UV )
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
#endif`,bP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,RP=`#if defined( USE_MORPHCOLORS )
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
#endif`,AP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CP=`#ifdef USE_MORPHTARGETS
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
#endif`,PP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,IP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,DP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,UP=`#ifdef USE_NORMALMAP
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
#endif`,FP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GP=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$P=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,JP=`float getShadowMask() {
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
}`,QP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eL=`#ifdef USE_SKINNING
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
#endif`,tL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nL=`#ifdef USE_SKINNING
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
#endif`,iL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sL=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oL=`#ifdef USE_TRANSMISSION
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
#endif`,lL=`#ifdef USE_TRANSMISSION
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
#endif`,uL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pL=`uniform sampler2D t2D;
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
}`,mL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gL=`uniform float backgroundBlurriness;
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
}`,vL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_L=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yL=`#include <common>
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
}`,SL=`#if DEPTH_PACKING == 3200
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
}`,xL=`#define DISTANCE
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
}`,ML=`#define DISTANCE
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
}`,EL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wL=`uniform float scale;
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
}`,TL=`uniform vec3 diffuse;
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
}`,RL=`#include <common>
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
}`,AL=`uniform vec3 diffuse;
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
}`,CL=`#define LAMBERT
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
}`,PL=`#define LAMBERT
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
}`,LL=`#define MATCAP
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
}`,IL=`#define MATCAP
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
}`,DL=`#define NORMAL
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
}`,NL=`#define NORMAL
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
}`,OL=`#define PHONG
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
}`,UL=`#define PHONG
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
}`,FL=`#define STANDARD
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
}`,kL=`#define STANDARD
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
}`,BL=`#define TOON
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
}`,zL=`#define TOON
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
}`,HL=`uniform float size;
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
}`,GL=`uniform vec3 diffuse;
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
}`,VL=`#include <common>
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
}`,WL=`uniform vec3 color;
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
}`,$L=`uniform float rotation;
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
}`,XL=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:pC,alphahash_pars_fragment:mC,alphamap_fragment:gC,alphamap_pars_fragment:vC,alphatest_fragment:_C,alphatest_pars_fragment:yC,aomap_fragment:SC,aomap_pars_fragment:xC,batching_pars_vertex:MC,batching_vertex:EC,begin_vertex:bC,beginnormal_vertex:wC,bsdfs:TC,iridescence_fragment:RC,bumpmap_pars_fragment:AC,clipping_planes_fragment:CC,clipping_planes_pars_fragment:PC,clipping_planes_pars_vertex:LC,clipping_planes_vertex:IC,color_fragment:DC,color_pars_fragment:NC,color_pars_vertex:OC,color_vertex:UC,common:FC,defaultnormal_vertex:kC,displacementmap_pars_vertex:BC,displacementmap_vertex:zC,emissivemap_fragment:HC,emissivemap_pars_fragment:GC,colorspace_fragment:VC,colorspace_pars_fragment:WC,envmap_fragment:$C,envmap_common_pars_fragment:XC,envmap_pars_fragment:qC,envmap_pars_vertex:YC,envmap_physical_pars_fragment:aP,envmap_vertex:KC,fog_vertex:ZC,fog_pars_vertex:jC,fog_fragment:JC,fog_pars_fragment:QC,gradientmap_pars_fragment:eP,lightmap_pars_fragment:tP,lights_lambert_fragment:nP,lights_lambert_pars_fragment:iP,lights_pars_begin:rP,lights_toon_fragment:sP,lights_toon_pars_fragment:oP,lights_phong_fragment:lP,lights_phong_pars_fragment:uP,lights_physical_fragment:cP,lights_physical_pars_fragment:dP,lights_fragment_begin:fP,lights_fragment_maps:hP,lights_fragment_end:pP,lightprobes_pars_fragment:mP,logdepthbuf_fragment:gP,logdepthbuf_pars_fragment:vP,logdepthbuf_pars_vertex:_P,logdepthbuf_vertex:yP,map_fragment:SP,map_pars_fragment:xP,map_particle_fragment:MP,map_particle_pars_fragment:EP,metalnessmap_fragment:bP,metalnessmap_pars_fragment:wP,morphinstance_vertex:TP,morphcolor_vertex:RP,morphnormal_vertex:AP,morphtarget_pars_vertex:CP,morphtarget_vertex:PP,normal_fragment_begin:LP,normal_fragment_maps:IP,normal_pars_fragment:DP,normal_pars_vertex:NP,normal_vertex:OP,normalmap_pars_fragment:UP,clearcoat_normal_fragment_begin:FP,clearcoat_normal_fragment_maps:kP,clearcoat_pars_fragment:BP,iridescence_pars_fragment:zP,opaque_fragment:HP,packing:GP,premultiplied_alpha_fragment:VP,project_vertex:WP,dithering_fragment:$P,dithering_pars_fragment:XP,roughnessmap_fragment:qP,roughnessmap_pars_fragment:YP,shadowmap_pars_fragment:KP,shadowmap_pars_vertex:ZP,shadowmap_vertex:jP,shadowmask_pars_fragment:JP,skinbase_vertex:QP,skinning_pars_vertex:eL,skinning_vertex:tL,skinnormal_vertex:nL,specularmap_fragment:iL,specularmap_pars_fragment:rL,tonemapping_fragment:aL,tonemapping_pars_fragment:sL,transmission_fragment:oL,transmission_pars_fragment:lL,uv_pars_fragment:uL,uv_pars_vertex:cL,uv_vertex:dL,worldpos_vertex:fL,background_vert:hL,background_frag:pL,backgroundCube_vert:mL,backgroundCube_frag:gL,cube_vert:vL,cube_frag:_L,depth_vert:yL,depth_frag:SL,distance_vert:xL,distance_frag:ML,equirect_vert:EL,equirect_frag:bL,linedashed_vert:wL,linedashed_frag:TL,meshbasic_vert:RL,meshbasic_frag:AL,meshlambert_vert:CL,meshlambert_frag:PL,meshmatcap_vert:LL,meshmatcap_frag:IL,meshnormal_vert:DL,meshnormal_frag:NL,meshphong_vert:OL,meshphong_frag:UL,meshphysical_vert:FL,meshphysical_frag:kL,meshtoon_vert:BL,meshtoon_frag:zL,points_vert:HL,points_frag:GL,shadow_vert:VL,shadow_frag:WL,sprite_vert:$L,sprite_frag:XL},Ve={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},mr={basic:{uniforms:Vn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:Vn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:Vn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:Vn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:Vn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Et(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:Vn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:Vn([Ve.points,Ve.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:Vn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:Vn([Ve.common,Ve.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:Vn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:Vn([Ve.sprite,Ve.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:Vn([Ve.common,Ve.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:Vn([Ve.lights,Ve.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};mr.physical={uniforms:Vn([mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const Ec={r:0,b:0,g:0},qL=new Qt,Yx=new gt;Yx.set(-1,0,0,0,1,0,0,0,1);function YL(n,e,t,r,s,o){const u=new Et(0);let d=s===!0?0:1,f,h,v=null,m=0,g=null;function x(w){let D=w.isScene===!0?w.background:null;if(D&&D.isTexture){const L=w.backgroundBlurriness>0;D=e.get(D,L)}return D}function E(w){let D=!1;const L=x(w);L===null?y(u,d):L&&L.isColor&&(y(L,1),D=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(n.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function T(w,D){const L=x(D);L&&L.isCubeTexture?(h===void 0&&(h=new Ia(new vo(1,1,1),new cs({name:"BackgroundCubeMaterial",uniforms:ho(mr.backgroundCube.uniforms),vertexShader:mr.backgroundCube.vertexShader,fragmentShader:mr.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,I,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=L,h.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qL.makeRotationFromEuler(D.backgroundRotation)).transpose(),L.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Yx),h.material.toneMapped=Rt.getTransfer(L.colorSpace)!==Bt,(v!==L||m!==L.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,v=L,m=L.version,g=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(f===void 0&&(f=new Ia(new os(2,2),new cs({name:"BackgroundMaterial",uniforms:ho(mr.background.uniforms),vertexShader:mr.background.vertexShader,fragmentShader:mr.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=L,f.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,f.material.toneMapped=Rt.getTransfer(L.colorSpace)!==Bt,L.matrixAutoUpdate===!0&&L.updateMatrix(),f.material.uniforms.uvTransform.value.copy(L.matrix),(v!==L||m!==L.version||g!==n.toneMapping)&&(f.material.needsUpdate=!0,v=L,m=L.version,g=n.toneMapping),f.layers.enableAll(),w.unshift(f,f.geometry,f.material,0,0,null))}function y(w,D){w.getRGB(Ec,Vx(n)),t.buffers.color.setClear(Ec.r,Ec.g,Ec.b,D,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(w,D=1){u.set(w),d=D,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(w){d=w,y(u,d)},render:E,addToRenderList:T,dispose:S}}function KL(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},s=g(null);let o=s,u=!1;function d(G,W,X,B,ie){let te=!1;const Q=m(G,B,X,W);o!==Q&&(o=Q,h(o.object)),te=x(G,B,X,ie),te&&E(G,B,X,ie),ie!==null&&e.update(ie,n.ELEMENT_ARRAY_BUFFER),(te||u)&&(u=!1,L(G,W,X,B),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function f(){return n.createVertexArray()}function h(G){return n.bindVertexArray(G)}function v(G){return n.deleteVertexArray(G)}function m(G,W,X,B){const ie=B.wireframe===!0;let te=r[W.id];te===void 0&&(te={},r[W.id]=te);const Q=G.isInstancedMesh===!0?G.id:0;let j=te[Q];j===void 0&&(j={},te[Q]=j);let q=j[X.id];q===void 0&&(q={},j[X.id]=q);let Z=q[ie];return Z===void 0&&(Z=g(f()),q[ie]=Z),Z}function g(G){const W=[],X=[],B=[];for(let ie=0;ie<t;ie++)W[ie]=0,X[ie]=0,B[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:X,attributeDivisors:B,object:G,attributes:{},index:null}}function x(G,W,X,B){const ie=o.attributes,te=W.attributes;let Q=0;const j=X.getAttributes();for(const q in j)if(j[q].location>=0){const U=ie[q];let J=te[q];if(J===void 0&&(q==="instanceMatrix"&&G.instanceMatrix&&(J=G.instanceMatrix),q==="instanceColor"&&G.instanceColor&&(J=G.instanceColor)),U===void 0||U.attribute!==J||J&&U.data!==J.data)return!0;Q++}return o.attributesNum!==Q||o.index!==B}function E(G,W,X,B){const ie={},te=W.attributes;let Q=0;const j=X.getAttributes();for(const q in j)if(j[q].location>=0){let U=te[q];U===void 0&&(q==="instanceMatrix"&&G.instanceMatrix&&(U=G.instanceMatrix),q==="instanceColor"&&G.instanceColor&&(U=G.instanceColor));const J={};J.attribute=U,U&&U.data&&(J.data=U.data),ie[q]=J,Q++}o.attributes=ie,o.attributesNum=Q,o.index=B}function T(){const G=o.newAttributes;for(let W=0,X=G.length;W<X;W++)G[W]=0}function y(G){S(G,0)}function S(G,W){const X=o.newAttributes,B=o.enabledAttributes,ie=o.attributeDivisors;X[G]=1,B[G]===0&&(n.enableVertexAttribArray(G),B[G]=1),ie[G]!==W&&(n.vertexAttribDivisor(G,W),ie[G]=W)}function w(){const G=o.newAttributes,W=o.enabledAttributes;for(let X=0,B=W.length;X<B;X++)W[X]!==G[X]&&(n.disableVertexAttribArray(X),W[X]=0)}function D(G,W,X,B,ie,te,Q){Q===!0?n.vertexAttribIPointer(G,W,X,ie,te):n.vertexAttribPointer(G,W,X,B,ie,te)}function L(G,W,X,B){T();const ie=B.attributes,te=X.getAttributes(),Q=W.defaultAttributeValues;for(const j in te){const q=te[j];if(q.location>=0){let Z=ie[j];if(Z===void 0&&(j==="instanceMatrix"&&G.instanceMatrix&&(Z=G.instanceMatrix),j==="instanceColor"&&G.instanceColor&&(Z=G.instanceColor)),Z!==void 0){const U=Z.normalized,J=Z.itemSize,Te=e.get(Z);if(Te===void 0)continue;const ne=Te.buffer,ye=Te.type,Se=Te.bytesPerElement,we=ye===n.INT||ye===n.UNSIGNED_INT||Z.gpuType===bm;if(Z.isInterleavedBufferAttribute){const pe=Z.data,ue=pe.isInterleavedBuffer===!0?pe.stride:pe.itemSize,Ge=Z.offset;if(pe.isInstancedInterleavedBuffer||pe.isInstancedBufferAttribute){for(let ve=0;ve<q.locationSize;ve++)S(q.location+ve,pe.meshPerAttribute);G.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ve=0;ve<q.locationSize;ve++)y(q.location+ve);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let ve=0;ve<q.locationSize;ve++)D(q.location+ve,J/q.locationSize,ye,U,ue*Se,(Ge+J/q.locationSize*ve)*Se,we)}else{if(Z.isInstancedBufferAttribute){for(let pe=0;pe<q.locationSize;pe++)S(q.location+pe,Z.meshPerAttribute);G.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let pe=0;pe<q.locationSize;pe++)y(q.location+pe);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let pe=0;pe<q.locationSize;pe++)D(q.location+pe,J/q.locationSize,ye,U,J*Se,J/q.locationSize*pe*Se,we)}}else if(Q!==void 0){const U=Q[j];if(U!==void 0)switch(U.length){case 2:n.vertexAttrib2fv(q.location,U);break;case 3:n.vertexAttrib3fv(q.location,U);break;case 4:n.vertexAttrib4fv(q.location,U);break;default:n.vertexAttrib1fv(q.location,U)}}}}w()}function N(){k();for(const G in r){const W=r[G];for(const X in W){const B=W[X];for(const ie in B){const te=B[ie];for(const Q in te)v(te[Q].object),delete te[Q];delete B[ie]}}delete r[G]}}function I(G){if(r[G.id]===void 0)return;const W=r[G.id];for(const X in W){const B=W[X];for(const ie in B){const te=B[ie];for(const Q in te)v(te[Q].object),delete te[Q];delete B[ie]}}delete r[G.id]}function b(G){for(const W in r){const X=r[W];for(const B in X){const ie=X[B];if(ie[G.id]===void 0)continue;const te=ie[G.id];for(const Q in te)v(te[Q].object),delete te[Q];delete ie[G.id]}}}function C(G){for(const W in r){const X=r[W],B=G.isInstancedMesh===!0?G.id:0,ie=X[B];if(ie!==void 0){for(const te in ie){const Q=ie[te];for(const j in Q)v(Q[j].object),delete Q[j];delete ie[te]}delete X[B],Object.keys(X).length===0&&delete r[W]}}}function k(){O(),u=!0,o!==s&&(o=s,h(o.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:d,reset:k,resetDefaultState:O,dispose:N,releaseStatesOfGeometry:I,releaseStatesOfObject:C,releaseStatesOfProgram:b,initAttributes:T,enableAttribute:y,disableUnusedAttributes:w}}function ZL(n,e,t){let r;function s(f){r=f}function o(f,h){n.drawArrays(r,f,h),t.update(h,r,1)}function u(f,h,v){v!==0&&(n.drawArraysInstanced(r,f,h,v),t.update(h,r,v))}function d(f,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,h,0,v);let g=0;for(let x=0;x<v;x++)g+=h[x];t.update(g,r,1)}this.setMode=s,this.render=o,this.renderInstances=u,this.renderMultiDraw=d}function jL(n,e,t,r){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(b){return!(b!==xr&&r.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(b){const C=b===Tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==gi&&b!==Sr&&!C&&r.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function f(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const v=f(h);v!==h&&(pt("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=t.logarithmicDepthBuffer===!0&&m===!1;t.reversedDepthBuffer===!0&&m===!1&&pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&m===!0&&pt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),S=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),L=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=n.getParameter(n.MAX_SAMPLES),I=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:w,maxVaryings:D,maxFragmentUniforms:L,maxSamples:N,samples:I}}function JL(n){const e=this;let t=null,r=0,s=!1,o=!1;const u=new ba,d=new gt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const x=m.length!==0||g||r!==0||s;return s=g,r=m.length,x},this.beginShadows=function(){o=!0,v(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,g){t=v(m,g,0)},this.setState=function(m,g,x){const E=m.clippingPlanes,T=m.clipIntersection,y=m.clipShadows,S=n.get(m);if(!s||E===null||E.length===0||o&&!y)o?v(null):h();else{const w=o?0:r,D=w*4;let L=S.clippingState||null;f.value=L,L=v(E,g,D,x);for(let N=0;N!==D;++N)L[N]=t[N];S.clippingState=L,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(m,g,x,E){const T=m!==null?m.length:0;let y=null;if(T!==0){if(y=f.value,E!==!0||y===null){const S=x+T*4,w=g.matrixWorldInverse;d.getNormalMatrix(w),(y===null||y.length<S)&&(y=new Float32Array(S));for(let D=0,L=x;D!==T;++D,L+=4)u.copy(m[D]).applyMatrix4(w,d),u.normal.toArray(y,L),y[L+3]=u.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}class km extends br{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},s=[r,r,r,r,r,r];this.texture=new zx(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vo(5,5,5),o=new cs({name:"CubemapFromEquirect",uniforms:ho(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ni,blending:ro});o.uniforms.tEquirect.value=t;const u=new Ia(s,o),d=t.minFilter;return t.minFilter===Ra&&(t.minFilter=ei),new om(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,s=!0){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,s);e.setRenderTarget(o)}}const _y=256,QL=3,e2=20,Kx=256,Zx=16,t2=3,n2=new ce,i2=new Et;class jc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new om(1,10,null),this._boxMesh=new Ia(new vo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,s=100,o={}){const{size:u=256,position:d=n2}=o,f=this._renderer;this._setSize(u);const h=this._allocateTarget(),v=this._getSourceTarget(!0);t>0&&(v.texture.mipmapsAutoUpdate=!1);const m=f.autoClear,g=f.autoClearColor,x=f.autoClearDepth,E=f.autoClearStencil,T=e.background;f.autoClear=!0,f.autoClearColor=!0,f.autoClearDepth=!0,f.autoClearStencil=!0,T===null&&(e.background=f.getClearColor(i2));const y=new om(r,s,v);return y.position.copy(d),y.update(f,e),f.autoClear=m,f.autoClearColor=g,f.autoClearDepth=x,f.autoClearStencil=E,e.background=T,t>0&&(v.texture.mipmapsAutoUpdate=!0,this._blur(h,t)),this._applyPMREM(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(_y,TA(e))}_fromTexture(e,t){e.mapping===uo||e.mapping===Tl?this._setSize(e.image.length===0?_y:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=yy(e,!1,!1),r=Math.log2(e)-QL;for(let s=0;s<=r;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=yy(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const s=this._boxMesh,o=this._cubeCamera;s.material=r,o.renderTarget=e,o.activeMipmapLevel=t;const u=e.width>>t;e.viewport.set(0,0,u,u),o.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===uo||e.mapping===Tl?(this._cubemapMaterial===null&&(this._cubemapMaterial=xy()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Sy()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=r2(),this._integrationMaterial=a2());const t=this._cubeSize,r=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const o=this._integrationMaterial.uniforms;o.envMap.value=this._sourceTarget.texture,o.sourceLod.value=Math.log2(t/Zx);for(let u=0;u<=r;u++){const d=jc.lodToRoughness(u,r);if(u>r-t2)o.roughness.value=d,this._renderCube(e,u,this._integrationMaterial);else{const f=d>0?Math.log2(t)+.5*Math.log2(6/(Kx*Math.pow(d,4)))+.5:0;s.roughness.value=d,s.lodBias.value=f,this._renderCube(e,u,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=s2());const r=this._blurMaterial,s=r.uniforms,o=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=o.texture,this._renderCube(e,0,r),s.envMap.value=e.texture,this._renderCube(o,0,r)}}function yy(n,e,t){return new km(n,{minFilter:Ra,generateMipmaps:e,type:Tr,colorSpace:qc,depthBuffer:t})}function Ol(n,e,t){return new cs({name:n,uniforms:e,vertexShader:yt.cube_vert,fragmentShader:t,side:ni,blending:ro,depthTest:!1,depthWrite:!1})}function r2(){return Ol("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Kx}u

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
	`)}function a2(){return Ol("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Zx}},`

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
	`)}function s2(){return Ol("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${e2}
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
	`)}function Sy(){return Ol("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function xy(){return Ol("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function o2(n){let e=new WeakMap,t=new WeakMap,r=null;function s(g,x=!1){return g==null?null:x?u(g):o(g)}function o(g){if(g&&g.isTexture){const x=g.mapping;if(x===hh||x===ph)if(e.has(g)){const E=e.get(g).texture;return d(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const T=new km(E.height);return T.fromEquirectangularTexture(n,g),e.set(g,T),g.addEventListener("dispose",h),d(T.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture&&g.isPMREMTexture!==!0){const x=g.mapping,E=x===hh||x===ph,T=x===uo||x===Tl;if(E||T){let y=t.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return r===null&&(r=new jc(n)),y=E?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),y.texture;if(y!==void 0)return y.texture;{const w=g.image;return E&&w&&w.height>0||T&&w&&f(w)?(r===null&&(r=new jc(n)),y=E?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),g.addEventListener("dispose",v),y.texture):null}}}return g}function d(g,x){return x===hh?g.mapping=uo:x===ph&&(g.mapping=Tl),g}function f(g){let x=0;const E=6;for(let T=0;T<E;T++)g[T]!==void 0&&x++;return x===E}function h(g){const x=g.target;x.removeEventListener("dispose",h);const E=e.get(x);E!==void 0&&(e.delete(x),E.dispose())}function v(g){const x=g.target;x.removeEventListener("dispose",v);const E=t.get(x);E!==void 0&&(t.delete(x),E.dispose())}function m(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:s,dispose:m}}function l2(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const s=n.getExtension(r);return e[r]=s,s}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const s=t(r);return s===null&&Oc("WebGLRenderer: "+r+" extension not supported."),s}}}function u2(n,e,t,r){const s={},o=new WeakMap,u=new FinalizationRegistry(E=>delete s[E]);function d(E){f(E.target)}function f(E){E.index!==null&&e.remove(E.index);for(const y in E.attributes)e.remove(E.attributes[y]);E.removeEventListener("dispose",d),delete s[E.id],u.unregister(E);const T=o.get(E);T&&(e.remove(T),o.delete(E)),r.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,t.memory.geometries--}function h(E,T){return s[T.id]!==void 0||(T.addEventListener("dispose",d),s[T.id]=new WeakRef(T),u.register(T,T.id,T),t.memory.geometries++),T}function v(E){const T=E.attributes;for(const y in T)e.update(T[y],n.ARRAY_BUFFER)}function m(E){const T=E.index,y=E.attributes.position;let S=0;if(y===void 0)return;const w=T!==null?T.array.length:y.array.length/3-1,D=y.count>=65535?kx:Fx,L=new D(Math.ceil(w/3)*6,1),N=L.array;if(T!==null){const b=T.array;S=T.version;for(let C=0,k=0;C<w;C+=3){const O=b[C+0],G=b[C+1],W=b[C+2];N[k++]=O,N[k++]=G,N[k++]=G,N[k++]=W,N[k++]=W,N[k++]=O}}else{S=y.version;for(let b=0,C=0;b<w;b+=3){const k=b+0,O=b+1,G=b+2;N[C++]=k,N[C++]=O,N[C++]=O,N[C++]=G,N[C++]=G,N[C++]=k}}L.version=S;const I=o.get(E);I&&e.remove(I),o.set(E,L)}function g(E){const T=o.get(E);if(T){const y=E.index;y!==null&&T.version<y.version&&m(E)}else m(E);return o.get(E)}function x(){for(const E in s){const T=s[E].deref();T!==void 0&&f(T)}}return{get:h,update:v,getWireframeAttribute:g,dispose:x}}function c2(n,e,t){let r;function s(m){r=m}let o,u;function d(m){o=m.type,u=m.bytesPerElement}function f(m,g){n.drawElements(r,g,o,m*u),t.update(g,r,1)}function h(m,g,x){x!==0&&(n.drawElementsInstanced(r,g,o,m*u,x),t.update(g,r,x))}function v(m,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,o,m,0,x);let T=0;for(let y=0;y<x;y++)T+=g[y];t.update(T,r,1)}this.setMode=s,this.setIndex=d,this.render=f,this.renderInstances=h,this.renderMultiDraw=v}function d2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,u,d){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=d*(o/3);break;case n.LINES:t.lines+=d*(o/2);break;case n.LINE_STRIP:t.lines+=d*(o-1);break;case n.LINE_LOOP:t.lines+=d*o;break;case n.POINTS:t.points+=d*o;break;default:Nt("WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:r}}function f2(n,e,t){const r=new WeakMap,s=new rn;function o(u,d,f){const h=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=v!==void 0?v.length:0;let g=r.get(d);if(g===void 0||g.count!==m){let k=function(){b.dispose(),r.delete(d),d.removeEventListener("dispose",k)};g!==void 0&&g.texture.dispose();const x=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,T=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],w=d.morphAttributes.color||[];let D=0;x===!0&&(D=1),E===!0&&(D=2),T===!0&&(D=3);let L=d.attributes.position.count*D,N=1;L>e.maxTextureSize&&(N=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const I=new Float32Array(L*N*4*m),b=new Ox(I,L,N,m);b.type=Sr,b.needsUpdate=!0;const C=D*4;for(let O=0;O<m;O++){const G=y[O],W=S[O],X=w[O],B=L*N*4*O;for(let ie=0;ie<G.count;ie++){const te=ie*C;x===!0&&(s.fromBufferAttribute(G,ie),I[B+te+0]=s.x,I[B+te+1]=s.y,I[B+te+2]=s.z,I[B+te+3]=0),E===!0&&(s.fromBufferAttribute(W,ie),I[B+te+4]=s.x,I[B+te+5]=s.y,I[B+te+6]=s.z,I[B+te+7]=0),T===!0&&(s.fromBufferAttribute(X,ie),I[B+te+8]=s.x,I[B+te+9]=s.y,I[B+te+10]=s.z,I[B+te+11]=X.itemSize===4?s.w:1)}}g={count:m,texture:b,size:new bt(L,N)},r.set(d,g),d.addEventListener("dispose",k)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let x=0;for(let T=0;T<h.length;T++)x+=h[T];const E=d.morphTargetsRelative?1:1-x;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",h)}f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:o}}function h2(n,e,t,r,s){let o=new WeakMap;function u(h){const v=s.render.frame,m=h.geometry,g=e.get(h,m);if(o.get(g)!==v&&(e.update(g),o.set(g,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==v&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),o.set(h,v))),h.isSkinnedMesh){const x=h.skeleton;o.get(x)!==v&&(x.update(),o.set(x,v))}return g}function d(){o=new WeakMap}function f(h){const v=h.target;v.removeEventListener("dispose",f),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:d}}const p2={[vx]:"LINEAR_TONE_MAPPING",[_x]:"REINHARD_TONE_MAPPING",[yx]:"CINEON_TONE_MAPPING",[Em]:"ACES_FILMIC_TONE_MAPPING",[xx]:"AGX_TONE_MAPPING",[Mx]:"NEUTRAL_TONE_MAPPING",[Sx]:"CUSTOM_TONE_MAPPING"};function m2(n,e,t,r,s,o){const u=new br(e,t,{type:n,depthBuffer:s,stencilBuffer:o,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,f=null,h=null;const v=new Yr;v.setAttribute("position",new $n([-1,3,0,-1,-1,0,3,-1,0],3)),v.setAttribute("uv",new $n([0,2,0,0,2,0],2));const m=new nC({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Ia(v,m),x=new Xx(-1,1,1,-1,0,1);let E=null,T=null,y=!1,S,w=null,D=[],L=!1;this.setSize=function(N,I){u.setSize(N,I),d!==null&&d.setSize(N,I),f!==null&&f.setSize(N,I);for(let b=0;b<D.length;b++){const C=D[b];C.setSize&&C.setSize(N,I)}},this.setEffects=function(N){D=N,L=D.length>0&&D[0].isRenderPass===!0;const I=u.width,b=u.height;D.length>0&&d===null&&(d=new br(I,b,{type:Tr,depthBuffer:!1,stencilBuffer:!1}),f=new br(I,b,{type:Tr,depthBuffer:!1,stencilBuffer:!1}));const C=s===!0&&D.some(k=>k.needsDepthTexture===!0);C!==(u.depthTexture!==null)&&(C===!0&&h===null&&(h=new fo(I,b),o===!0&&(h.format=Aa,h.type=co)),u.dispose(),u.depthTexture=C?h:null,u.resolveDepthBuffer=C,u.storeMultisampledDepthBuffer=C);for(let k=0;k<D.length;k++){const O=D[k];O.setSize&&O.setSize(I,b),C&&O.needsDepthTexture===!0&&O.setDepthTexture&&O.setDepthTexture(h)}},this.begin=function(N,I){if(y||N.toneMapping===Wr&&D.length===0)return!1;if(w=I,I!==null){const b=I.width,C=I.height;(u.width!==b||u.height!==C)&&this.setSize(b,C)}return L===!1&&N.setRenderTarget(u),S=N.toneMapping,N.toneMapping=Wr,!0},this.hasRenderPass=function(){return L},this.end=function(N,I){N.toneMapping=S,y=!0;let b=u,C=d;for(let k=0;k<D.length;k++){const O=D[k];O.enabled!==!1&&(O.render(N,C,b,I),O.needsSwap!==!1&&(b=C,C=C===d?f:d))}if(E!==N.outputColorSpace||T!==N.toneMapping){E=N.outputColorSpace,T=N.toneMapping,m.defines={},Rt.getTransfer(E)===Bt&&(m.defines.SRGB_TRANSFER="");const k=p2[T];k&&(m.defines[k]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=b.texture,N.setRenderTarget(w),N.render(g,x),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),d!==null&&d.dispose(),f!==null&&f.dispose(),v.dispose(),m.dispose()}}const jx=new Bn,Jx=new fo(1,1),Qx=new Hx(1),eM=new Ox,tM=new NA,nM=new zx,My=[],Ey=[],by=new Float32Array(16),wy=new Float32Array(9),Ty=new Float32Array(4);function _o(n,e,t){const r=n[0];if(r<=0||r>0)return n;const s=e*t;let o=My[s];if(o===void 0&&(o=new Float32Array(s),My[s]=o),e!==0){r.toArray(o,0);for(let u=1,d=0;u!==e;++u)d+=t,n[u].toArray(o,d)}return o}function yn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function Sn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function ad(n,e){let t=Ey[e];t===void 0&&(t=new Int32Array(e),Ey[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function g2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function v2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;n.uniform2fv(this.addr,e),Sn(t,e)}}function _2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yn(t,e))return;n.uniform3fv(this.addr,e),Sn(t,e)}}function y2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;n.uniform4fv(this.addr,e),Sn(t,e)}}function S2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(yn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Sn(t,e)}else{if(yn(t,r))return;Ty.set(r),n.uniformMatrix2fv(this.addr,!1,Ty),Sn(t,r)}}function x2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(yn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Sn(t,e)}else{if(yn(t,r))return;wy.set(r),n.uniformMatrix3fv(this.addr,!1,wy),Sn(t,r)}}function M2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(yn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Sn(t,e)}else{if(yn(t,r))return;by.set(r),n.uniformMatrix4fv(this.addr,!1,by),Sn(t,r)}}function E2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function b2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;n.uniform2iv(this.addr,e),Sn(t,e)}}function w2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;n.uniform3iv(this.addr,e),Sn(t,e)}}function T2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;n.uniform4iv(this.addr,e),Sn(t,e)}}function R2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function A2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;n.uniform2uiv(this.addr,e),Sn(t,e)}}function C2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;n.uniform3uiv(this.addr,e),Sn(t,e)}}function P2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;n.uniform4uiv(this.addr,e),Sn(t,e)}}function sd(n){return n.version===0&&(n.compareFunction=Dx,n.needsUpdate=!0),n}function L2(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?o=sd(Jx):o=jx,t.setTexture2D(e||o,s)}function I2(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s),t.setTexture3D(e||tM,s)}function D2(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s);let o;this.type===n.SAMPLER_CUBE_SHADOW?o=sd(Qx):o=nM,t.setTextureCube(e||o,s)}function N2(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s),t.setTexture2DArray(e||eM,s)}function O2(n){switch(n){case 5126:return g2;case 35664:return v2;case 35665:return _2;case 35666:return y2;case 35674:return S2;case 35675:return x2;case 35676:return M2;case 5124:case 35670:return E2;case 35667:case 35671:return b2;case 35668:case 35672:return w2;case 35669:case 35673:return T2;case 5125:return R2;case 36294:return A2;case 36295:return C2;case 36296:return P2;case 35678:case 36198:case 36298:case 36306:case 35682:return L2;case 35679:case 36299:case 36307:return I2;case 35680:case 36300:case 36308:case 36293:return D2;case 36289:case 36303:case 36311:case 36292:return N2}}function U2(n,e){n.uniform1fv(this.addr,e)}function F2(n,e){const t=_o(e,this.size,2);n.uniform2fv(this.addr,t)}function k2(n,e){const t=_o(e,this.size,3);n.uniform3fv(this.addr,t)}function B2(n,e){const t=_o(e,this.size,4);n.uniform4fv(this.addr,t)}function z2(n,e){const t=_o(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function H2(n,e){const t=_o(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function G2(n,e){const t=_o(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function V2(n,e){n.uniform1iv(this.addr,e)}function W2(n,e){n.uniform2iv(this.addr,e)}function $2(n,e){n.uniform3iv(this.addr,e)}function X2(n,e){n.uniform4iv(this.addr,e)}function q2(n,e){n.uniform1uiv(this.addr,e)}function Y2(n,e){n.uniform2uiv(this.addr,e)}function K2(n,e){n.uniform3uiv(this.addr,e)}function Z2(n,e){n.uniform4uiv(this.addr,e)}function j2(n,e,t){const r=this.cache,s=e.length,o=ad(t,s);yn(r,o)||(n.uniform1iv(this.addr,o),Sn(r,o));let u;this.type===n.SAMPLER_2D_SHADOW?u=sd(Jx):u=jx;for(let d=0;d!==s;++d)t.setTexture2D(e[d]||u,o[d])}function J2(n,e,t){const r=this.cache,s=e.length,o=ad(t,s);yn(r,o)||(n.uniform1iv(this.addr,o),Sn(r,o));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||tM,o[u])}function Q2(n,e,t){const r=this.cache,s=e.length,o=ad(t,s);yn(r,o)||(n.uniform1iv(this.addr,o),Sn(r,o));let u;this.type===n.SAMPLER_CUBE_SHADOW?u=sd(Qx):u=nM;for(let d=0;d!==s;++d)t.setTextureCube(e[d]||u,o[d])}function e3(n,e,t){const r=this.cache,s=e.length,o=ad(t,s);yn(r,o)||(n.uniform1iv(this.addr,o),Sn(r,o));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||eM,o[u])}function t3(n){switch(n){case 5126:return U2;case 35664:return F2;case 35665:return k2;case 35666:return B2;case 35674:return z2;case 35675:return H2;case 35676:return G2;case 5124:case 35670:return V2;case 35667:case 35671:return W2;case 35668:case 35672:return $2;case 35669:case 35673:return X2;case 5125:return q2;case 36294:return Y2;case 36295:return K2;case 36296:return Z2;case 35678:case 36198:case 36298:case 36306:case 35682:return j2;case 35679:case 36299:case 36307:return J2;case 35680:case 36300:case 36308:case 36293:return Q2;case 36289:case 36303:case 36311:case 36292:return e3}}class n3{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=O2(t.type)}}class i3{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=t3(t.type)}}class r3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const s=this.seq;for(let o=0,u=s.length;o!==u;++o){const d=s[o];d.setValue(e,t[d.id],r)}}}const zh=/(\w+)(\])?(\[|\.)?/g;function Ry(n,e){n.seq.push(e),n.map[e.id]=e}function a3(n,e,t){const r=n.name,s=r.length;for(zh.lastIndex=0;;){const o=zh.exec(r),u=zh.lastIndex;let d=o[1];const f=o[2]==="]",h=o[3];if(f&&(d=d|0),h===void 0||h==="["&&u+2===s){Ry(t,h===void 0?new n3(d,n,e):new i3(d,n,e));break}else{let m=t.map[d];m===void 0&&(m=new r3(d),Ry(t,m)),t=m}}}class Fc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(t,u),f=e.getUniformLocation(t,d.name);a3(d,f,this)}const s=[],o=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(u):o.push(u);s.length>0&&(this.seq=s.concat(o))}setValue(e,t,r,s){const o=this.map[t];o!==void 0&&o.setValue(e,r,s)}setOptional(e,t,r){const s=t[r];s!==void 0&&this.setValue(e,r,s)}static upload(e,t,r,s){for(let o=0,u=t.length;o!==u;++o){const d=t[o],f=r[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,s)}}static seqWithValue(e,t){const r=[];for(let s=0,o=e.length;s!==o;++s){const u=e[s];u.id in t&&r.push(u)}return r}}function Ay(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const s3=37297;let o3=0;function l3(n,e){const t=n.split(`
`),r=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=s;u<o;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const Cy=new gt;function u3(n){Rt._getMatrix(Cy,Rt.workingColorSpace,n);const e=`mat3( ${Cy.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(n)){case Yc:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return pt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Py(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),o=(n.getShaderInfoLog(e)||"").trim();if(r&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+o+`

`+l3(n.getShaderSource(e),d)}else return o}function c3(n,e){const t=u3(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const d3={[vx]:"Linear",[_x]:"Reinhard",[yx]:"Cineon",[Em]:"ACESFilmic",[xx]:"AgX",[Mx]:"Neutral",[Sx]:"Custom"};function f3(n,e){const t=d3[e];return t===void 0?(pt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bc=new ce;function h3(){Rt.getLuminanceCoefficients(bc);const n=bc.x.toFixed(4),e=bc.y.toFixed(4),t=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hl).join(`
`)}function m3(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function g3(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<r;s++){const o=n.getActiveAttrib(e,s),u=o.name;let d=1;o.type===n.FLOAT_MAT2&&(d=2),o.type===n.FLOAT_MAT3&&(d=3),o.type===n.FLOAT_MAT4&&(d=4),t[u]={type:o.type,location:n.getAttribLocation(e,u),locationSize:d}}return t}function hl(n){return n!==""}function Ly(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Iy(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const v3=/^[ \t]*#include +<([\w\d./]+)>/gm;function um(n){return n.replace(v3,_3)}function _3(n,e){const t=yt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return um(t)}const y3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dy(n){return n.replace(y3,S3)}function S3(n,e,t,r){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Ny(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const x3={[Pc]:"SHADOWMAP_TYPE_PCF",[fl]:"SHADOWMAP_TYPE_VSM"};function M3(n){return x3[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const E3={[Tl]:"ENVMAP_MODE_REFRACTION"};function b3(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":E3[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const w3={[gx]:"ENVMAP_BLENDING_MULTIPLY",[uA]:"ENVMAP_BLENDING_MIX",[cA]:"ENVMAP_BLENDING_ADD"};function T3(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":w3[n.combine]||"ENVMAP_BLENDING_NONE"}function R3(n,e,t,r){const s=n.getContext(),o=t.defines;let u=t.vertexShader,d=t.fragmentShader;const f=M3(t),h=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",v=b3(t),m=T3(t),g=p3(t),x=m3(o),E=s.createProgram();let T,y,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(T=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(hl).join(`
`),T.length>0&&(T+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(hl).join(`
`),y.length>0&&(y+=`
`)):(T=[Ny(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hl).join(`
`),y=[Ny(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+v:"",t.envMap?"#define "+m:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wr?"#define TONE_MAPPING":"",t.toneMapping!==Wr?yt.tonemapping_pars_fragment:"",t.toneMapping!==Wr?f3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,c3("linearToOutputTexel",t.outputColorSpace),h3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hl).join(`
`)),u=um(u),u=Ly(u,t),u=Iy(u,t),d=um(d),d=Ly(d,t),d=Iy(d,t),u=Dy(u),d=Dy(d),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,T=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,y=["#define varying in",t.glslVersion===$_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const w=S+T+u,D=S+y+d,L=Ay(s,s.VERTEX_SHADER,w),N=Ay(s,s.FRAGMENT_SHADER,D);s.attachShader(E,L),s.attachShader(E,N),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function I(O){if(n.debug.checkShaderErrors){const G=s.getProgramInfoLog(E)||"",W=s.getShaderInfoLog(L)||"",X=s.getShaderInfoLog(N)||"",B=G.trim(),ie=W.trim(),te=X.trim();let Q=!0,j=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,L,N);else{const q=Py(s,L,"vertex"),Z=Py(s,N,"fragment");Nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+B+`
`+q+`
`+Z)}else B!==""?pt("WebGLProgram: Program Info Log:",B):(ie===""||te==="")&&(j=!1);j&&(O.diagnostics={runnable:Q,programLog:B,vertexShader:{log:ie,prefix:T},fragmentShader:{log:te,prefix:y}})}s.deleteShader(L),s.deleteShader(N),b=new Fc(s,E),C=g3(s,E)}let b;this.getUniforms=function(){return b===void 0&&I(this),b};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(E,s3)),k},this.destroy=function(){r.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=o3++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=L,this.fragmentShader=N,this}let A3=0;class C3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new P3(e),t.set(e,r)),r}}class P3{constructor(e){this.id=A3++,this.code=e,this.usedTimes=0}}function L3(n){return n===us||n===$c||n===Xc}function I3(n,e,t,r,s,o){const u=new Im,d=new C3,f=new Set,h=[],v=new Map,m=r.logarithmicDepthBuffer,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return f.add(b),b===0?"uv":`uv${b}`}function E(b,C,k,O,G,W){const X=O.fog,B=G.geometry,ie=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,te=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,Q=e.get(b.envMap||ie,te),j=g[b.type];let q=r.precision;b.precision!==null&&(q=r.getMaxPrecision(b.precision),q!==b.precision&&pt("WebGLProgram.getParameters:",b.precision,"not supported, using",q,"instead."));const Z=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,U=Z!==void 0?Z.length:0;let J=0;B.morphAttributes.position!==void 0&&(J=1),B.morphAttributes.normal!==void 0&&(J=2),B.morphAttributes.color!==void 0&&(J=3);let Te,ne,ye,Se;if(j){const He=mr[j];Te=He.vertexShader,ne=He.fragmentShader}else{Te=b.vertexShader,ne=b.fragmentShader;const He=d.getVertexShaderStage(b),xt=d.getFragmentShaderStage(b);d.update(b,He,xt),ye=He.id,Se=xt.id}const we=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),ue=G.isInstancedMesh===!0,Ge=G.isBatchedMesh===!0,ve=!!b.map,De=!!b.matcap,Je=!!Q,ze=Je&&Q.isPMREMTexture===!0,st=!!b.aoMap,We=!!b.lightMap,wt=!!b.bumpMap&&b.wireframe===!1,Ct=!!b.normalMap,un=!!b.displacementMap,Ot=!!b.emissiveMap,en=!!b.metalnessMap,cn=!!b.roughnessMap,wn=b.anisotropy>0,Y=b.clearcoat>0,Tn=b.diffuseRoughness>0,Ut=b.dispersion>0,Ft=b.retroreflectivity>0,Fe=b.iridescence>0,Zt=b.sheen>0,it=b.transmission>0,ot=wn&&!!b.anisotropyMap,F=Y&&!!b.clearcoatMap,A=Y&&!!b.clearcoatNormalMap,ae=Y&&!!b.clearcoatRoughnessMap,be=Tn&&!!b.diffuseRoughnessMap,_e=Fe&&!!b.iridescenceMap,Pe=Fe&&!!b.iridescenceThicknessMap,Ne=Zt&&!!b.sheenColorMap,he=Zt&&!!b.sheenRoughnessMap,me=!!b.specularMap,Ce=!!b.specularColorMap,H=!!b.specularIntensityMap,ge=it&&!!b.transmissionMap,fe=it&&!!b.thicknessMap,Oe=!!b.gradientMap,Ae=!!b.alphaMap,Le=b.alphaTest>0,Qe=!!b.alphaHash,mt=!!b.extensions;let Me=Wr;b.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(Me=n.toneMapping);const rt=ze?Q.isCompressedCubeTexture?Q.image[0].mipmaps:Q.mipmaps:null,ft={shaderID:j,shaderType:b.type,shaderName:b.name,vertexShader:Te,fragmentShader:ne,defines:b.defines,customVertexShaderID:ye,customFragmentShaderID:Se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:q,batching:Ge,batchingColor:Ge&&G._colorsTexture!==null,instancing:ue,instancingColor:ue&&G.instanceColor!==null,instancingMorph:ue&&G.morphTexture!==null,outputColorSpace:we===null?n.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:ve,matcap:De,envMap:Je,envMapMode:Je&&Q.mapping,envMapPMREM:ze,envMapMaxLod:ze?rt.length-1:null,envMapSize:ze?rt[0].width:null,aoMap:st,lightMap:We,bumpMap:wt,normalMap:Ct,displacementMap:un,emissiveMap:Ot,normalMapObjectSpace:Ct&&b.normalMapType===hA,normalMapTangentSpace:Ct&&b.normalMapType===am,packedNormalMap:Ct&&b.normalMapType===am&&L3(b.normalMap.format),metalnessMap:en,roughnessMap:cn,anisotropy:wn,anisotropyMap:ot,clearcoat:Y,clearcoatMap:F,clearcoatNormalMap:A,clearcoatRoughnessMap:ae,diffuseRoughness:Tn,diffuseRoughnessMap:be,dispersion:Ut,retroreflection:Ft,iridescence:Fe,iridescenceMap:_e,iridescenceThicknessMap:Pe,sheen:Zt,sheenColorMap:Ne,sheenRoughnessMap:he,specularMap:me,specularColorMap:Ce,specularIntensityMap:H,transmission:it,transmissionMap:ge,thicknessMap:fe,gradientMap:Oe,opaque:b.transparent===!1&&b.blending===_l&&b.alphaToCoverage===!1,alphaMap:Ae,alphaTest:Le,alphaHash:Qe,combine:b.combine,mapUv:ve&&x(b.map.channel),aoMapUv:st&&x(b.aoMap.channel),lightMapUv:We&&x(b.lightMap.channel),bumpMapUv:wt&&x(b.bumpMap.channel),normalMapUv:Ct&&x(b.normalMap.channel),displacementMapUv:un&&x(b.displacementMap.channel),emissiveMapUv:Ot&&x(b.emissiveMap.channel),metalnessMapUv:en&&x(b.metalnessMap.channel),roughnessMapUv:cn&&x(b.roughnessMap.channel),anisotropyMapUv:ot&&x(b.anisotropyMap.channel),clearcoatMapUv:F&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:A&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(b.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:be&&x(b.diffuseRoughnessMap.channel),iridescenceMapUv:_e&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:he&&x(b.sheenRoughnessMap.channel),specularMapUv:me&&x(b.specularMap.channel),specularColorMapUv:Ce&&x(b.specularColorMap.channel),specularIntensityMapUv:H&&x(b.specularIntensityMap.channel),transmissionMapUv:ge&&x(b.transmissionMap.channel),thicknessMapUv:fe&&x(b.thicknessMap.channel),alphaMapUv:Ae&&x(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ct||wn),vertexNormals:!!B.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!B.attributes.uv&&(ve||Ae),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||B.attributes.normal===void 0&&Ct===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:pe,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:J,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:W.filter(He=>He.texture!==null).length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:Me,decodeVideoTexture:ve&&b.map.isVideoTexture===!0&&Rt.getTransfer(b.map.colorSpace)===Bt,decodeVideoTextureEmissive:Ot&&b.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(b.emissiveMap.colorSpace)===Bt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===vr,flipSided:b.side===ni,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:mt&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&b.extensions.multiDraw===!0||Ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ft.vertexUv1s=f.has(1),ft.vertexUv2s=f.has(2),ft.vertexUv3s=f.has(3),f.clear(),ft}function T(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const k in b.defines)C.push(k),C.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(y(C,b),S(C,b),C.push(n.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function y(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapPMREM),b.push(C.envMapMaxLod),b.push(C.envMapSize),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.diffuseRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.numSunLights),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numSunLightShadows),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.numLightProbeGrids),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function S(b,C){u.disableAll(),C.instancing&&u.enable(0),C.instancingColor&&u.enable(1),C.instancingMorph&&u.enable(2),C.matcap&&u.enable(3),C.envMap&&u.enable(4),C.normalMapObjectSpace&&u.enable(5),C.normalMapTangentSpace&&u.enable(6),C.clearcoat&&u.enable(7),C.iridescence&&u.enable(8),C.alphaTest&&u.enable(9),C.vertexColors&&u.enable(10),C.vertexAlphas&&u.enable(11),C.vertexUv1s&&u.enable(12),C.vertexUv2s&&u.enable(13),C.vertexUv3s&&u.enable(14),C.vertexTangents&&u.enable(15),C.anisotropy&&u.enable(16),C.alphaHash&&u.enable(17),C.batching&&u.enable(18),C.dispersion&&u.enable(19),C.retroreflection&&u.enable(24),C.diffuseRoughness&&u.enable(25),C.batchingColor&&u.enable(20),C.gradientMap&&u.enable(21),C.packedNormalMap&&u.enable(22),C.vertexNormals&&u.enable(23),b.push(u.mask),u.disableAll(),C.fog&&u.enable(0),C.useFog&&u.enable(1),C.flatShading&&u.enable(2),C.logarithmicDepthBuffer&&u.enable(3),C.reversedDepthBuffer&&u.enable(4),C.skinning&&u.enable(5),C.morphTargets&&u.enable(6),C.morphNormals&&u.enable(7),C.morphColors&&u.enable(8),C.premultipliedAlpha&&u.enable(9),C.shadowMapEnabled&&u.enable(10),C.doubleSided&&u.enable(11),C.flipSided&&u.enable(12),C.useDepthPacking&&u.enable(13),C.dithering&&u.enable(14),C.transmission&&u.enable(15),C.sheen&&u.enable(16),C.opaque&&u.enable(17),C.pointsUvs&&u.enable(18),C.decodeVideoTexture&&u.enable(19),C.decodeVideoTextureEmissive&&u.enable(20),C.alphaToCoverage&&u.enable(21),C.numLightProbeGrids>0&&u.enable(22),C.hasPositionAttribute&&u.enable(23),b.push(u.mask)}function w(b){const C=g[b.type];let k;if(C){const O=mr[C];k=QA.clone(O.uniforms)}else k=b.uniforms;return k}function D(b,C){let k=v.get(C);return k!==void 0?++k.usedTimes:(k=new R3(n,C,b,s),h.push(k),v.set(C,k)),k}function L(b){if(--b.usedTimes===0){const C=h.indexOf(b);h[C]=h[h.length-1],h.pop(),v.delete(b.cacheKey),b.destroy()}}function N(b){d.remove(b)}function I(){d.dispose()}return{getParameters:E,getProgramCacheKey:T,getUniforms:w,acquireProgram:D,releaseProgram:L,releaseShaderCache:N,programs:h,dispose:I}}function D3(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let d=n.get(u);return d===void 0&&(d={},n.set(u,d)),d}function r(u){n.delete(u)}function s(u,d,f){n.get(u)[d]=f}function o(){n=new WeakMap}return{has:e,get:t,remove:r,update:s,dispose:o}}function N3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Oy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Uy(){const n=[];let e=0;const t=[],r=[],s=[];function o(){e=0,t.length=0,r.length=0,s.length=0}function u(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function d(g,x,E,T,y,S){let w=n[e];return w===void 0?(w={id:g.id,object:g,geometry:x,material:E,materialVariant:u(g),groupOrder:T,renderOrder:g.renderOrder,z:y,group:S},n[e]=w):(w.id=g.id,w.object=g,w.geometry=x,w.material=E,w.materialVariant=u(g),w.groupOrder=T,w.renderOrder=g.renderOrder,w.z=y,w.group=S),e++,w}function f(g,x,E,T,y,S,w){w.reversedDepth===!0&&(y=-y);const D=d(g,x,E,T,y,S);E.transmission>0?r.push(D):E.transparent===!0?s.push(D):t.push(D)}function h(g,x,E,T,y,S){const w=d(g,x,E,T,y,S);E.transmission>0?r.unshift(w):E.transparent===!0?s.unshift(w):t.unshift(w)}function v(g,x){t.length>1&&t.sort(g||N3),r.length>1&&r.sort(x||Oy),s.length>1&&s.sort(x||Oy)}function m(){for(let g=e,x=n.length;g<x;g++){const E=n[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:s,init:o,push:f,unshift:h,finish:m,sort:v}}function O3(){let n=new WeakMap;function e(r,s){const o=n.get(r);let u;return o===void 0?(u=new Uy,n.set(r,[u])):s>=o.length?(u=new Uy,o.push(u)):u=o[s],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function U3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ce,color:new Et};break;case"SpotLight":t={position:new ce,direction:new ce,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ce,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ce,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return n[e.id]=t,t}}}function F3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let k3=0;function B3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function z3(n){const e=new U3,t=F3(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ce);const s=new ce,o=new Qt,u=new Qt;function d(h){let v=0,m=0,g=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let x=0,E=0,T=0,y=0,S=0,w=0,D=0,L=0,N=0,I=0,b=0,C=0,k=0,O=0;h.sort(B3);for(let W=0,X=h.length;W<X;W++){const B=h[W],ie=B.color,te=B.intensity,Q=B.distance;let j=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===us?j=B.shadow.map.texture:j=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)v+=ie.r*te,m+=ie.g*te,g+=ie.b*te;else if(B.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(B.sh.coefficients[q],te);O++}else if(B.isSunLight){const q=e.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Z=B.shadow,U=t.get(B);U.shadowIntensity=Z.intensity,U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),r.sunShadow[E]=U,r.sunShadowMap[E]=j;const J=Z.getViewportCount();for(let Te=0;Te<J;Te++)r.sunShadowMatrix[T+Te]=Z.getMatrix(Te),r.sunShadowCascade[T+Te]=Z._cascadeData[Te];T+=J,E++}r.sun[x]=q,x++}else if(B.isDirectionalLight){const q=e.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Z=B.shadow,U=t.get(B);U.shadowIntensity=Z.intensity,U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize=Z.mapSize,r.directionalShadow[y]=U,r.directionalShadowMap[y]=j,r.directionalShadowMatrix[y]=B.shadow.matrix,N++}r.directional[y]=q,y++}else if(B.isSpotLight){const q=e.get(B);q.position.setFromMatrixPosition(B.matrixWorld),q.color.copy(ie).multiplyScalar(te),q.distance=Q,q.coneCos=Math.cos(B.angle),q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),q.decay=B.decay,r.spot[w]=q;const Z=B.shadow;if(B.map&&(r.spotLightMap[C]=B.map,C++,Z.updateMatrices(B),B.castShadow&&k++),r.spotLightMatrix[w]=Z.matrix,B.castShadow){const U=t.get(B);U.shadowIntensity=Z.intensity,U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize=Z.mapSize,r.spotShadow[w]=U,r.spotShadowMap[w]=j,b++}w++}else if(B.isRectAreaLight){const q=e.get(B);q.color.copy(ie).multiplyScalar(te),q.halfWidth.set(B.width*.5,0,0),q.halfHeight.set(0,B.height*.5,0),r.rectArea[D]=q,D++}else if(B.isPointLight){const q=e.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity),q.distance=B.distance,q.decay=B.decay,B.castShadow){const Z=B.shadow,U=t.get(B);U.shadowIntensity=Z.intensity,U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize=Z.mapSize,U.shadowCameraNear=Z.camera.near,U.shadowCameraFar=Z.camera.far,r.pointShadow[S]=U,r.pointShadowMap[S]=j,r.pointShadowMatrix[S]=B.shadow.matrix,I++}r.point[S]=q,S++}else if(B.isHemisphereLight){const q=e.get(B);q.skyColor.copy(B.color).multiplyScalar(te),q.groundColor.copy(B.groundColor).multiplyScalar(te),r.hemi[L]=q,L++}}D>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=m,r.ambient[2]=g;const G=r.hash;(G.sunLength!==x||G.directionalLength!==y||G.pointLength!==S||G.spotLength!==w||G.rectAreaLength!==D||G.hemiLength!==L||G.numSunShadows!==E||G.numDirectionalShadows!==N||G.numPointShadows!==I||G.numSpotShadows!==b||G.numSpotMaps!==C||G.numLightProbes!==O)&&(r.sun.length=x,r.directional.length=y,r.spot.length=w,r.rectArea.length=D,r.point.length=S,r.hemi.length=L,r.sunShadow.length=E,r.sunShadowMap.length=E,r.sunShadowMatrix.length=T,r.sunShadowCascade.length=T,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.directionalShadowMatrix.length=N,r.pointShadow.length=I,r.pointShadowMap.length=I,r.pointShadowMatrix.length=I,r.spotShadow.length=b,r.spotShadowMap.length=b,r.spotLightMatrix.length=b+C-k,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=O,G.sunLength=x,G.directionalLength=y,G.pointLength=S,G.spotLength=w,G.rectAreaLength=D,G.hemiLength=L,G.numSunShadows=E,G.numDirectionalShadows=N,G.numPointShadows=I,G.numSpotShadows=b,G.numSpotMaps=C,G.numLightProbes=O,r.version=k3++)}function f(h,v){let m=0,g=0,x=0,E=0,T=0,y=0;const S=v.matrixWorldInverse;for(let w=0,D=h.length;w<D;w++){const L=h[w];if(L.isSunLight){const N=r.sun[m];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(S),m++}else if(L.isDirectionalLight){const N=r.directional[g];N.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(S),g++}else if(L.isSpotLight){const N=r.spot[E];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(S),E++}else if(L.isRectAreaLight){const N=r.rectArea[T];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(S),u.identity(),o.copy(L.matrixWorld),o.premultiply(S),u.extractRotation(o),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),T++}else if(L.isPointLight){const N=r.point[x];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const N=r.hemi[y];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(S),y++}}}return{setup:d,setupView:f,state:r}}function Fy(n){const e=new z3(n),t=[],r=[],s=[];function o(m){v.camera=m,t.length=0,r.length=0,s.length=0}function u(m){m.isLightProbeGrid?s.push(m):t.push(m)}function d(m){r.push(m)}function f(){e.setup(t),s.sort((m,g)=>m.priority-g.priority||m.id-g.id)}function h(m){e.setupView(t,m)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:v,setupLights:f,setupLightsView:h,pushLight:u,pushShadow:d}}function H3(n){let e=new WeakMap;function t(s,o=0){const u=e.get(s);let d;return u===void 0?(d=new Fy(n),e.set(s,[d])):o>=u.length?(d=new Fy(n),u.push(d)):d=u[o],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const G3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V3=`uniform sampler2D shadow_pass;
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
}`,W3=[new ce(1,0,0),new ce(-1,0,0),new ce(0,1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1)],$3=[new ce(0,-1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,-1,0),new ce(0,-1,0)],ky=new Qt,al=new ce,Hh=new ce;function X3(n,e,t){let r=new Cl;const s=new bt,o=new bt,u=new rn,d=new rC,f=new aC,h={},v=t.maxTextureSize,m={[ls]:ni,[ni]:ls,[vr]:vr},g=new cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:G3,fragmentShader:V3}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const E=new Yr;E.setAttribute("position",new ss(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ia(E,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let S=this.type;this.render=function(I,b,C){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;this.type===hx&&(pt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Pc);const k=n.getRenderTarget(),O=n.getActiveCubeFace(),G=n.getActiveMipmapLevel(),W=n.state;W.setBlending(ro),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const X=S!==this.type;X&&b.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(ie=>ie.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,ie=I.length;B<ie;B++){const te=I[B],Q=te.shadow;if(Q===void 0){pt("WebGLShadowMap:",te,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);const j=Q.getFrameExtents();s.multiply(j),o.copy(Q.mapSize),(s.x>v||s.y>v)&&(s.x>v&&(o.x=Math.floor(v/j.x),s.x=o.x*j.x,Q.mapSize.x=o.x),s.y>v&&(o.y=Math.floor(v/j.y),s.y=o.y*j.y,Q.mapSize.y=o.y));const q=n.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=q,Q.map===null||X===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===fl){if(te.isPointLight){pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new br(s.x,s.y,{format:us,type:Tr,minFilter:ei,magFilter:ei,generateMipmaps:!1}),Q.map.texture.name=te.name+".shadowMap",Q.map.depthTexture=new fo(s.x,s.y,Sr),Q.map.depthTexture.name=te.name+".shadowMapDepth",Q.map.depthTexture.format=Pa,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Cn,Q.map.depthTexture.magFilter=Cn}else te.isPointLight?(Q.map=new km(s.x),Q.map.depthTexture=new Hx(s.x,wr)):(Q.map=new br(s.x,s.y),Q.map.depthTexture=new fo(s.x,s.y,wr)),Q.map.depthTexture.name=te.name+".shadowMap",Q.map.depthTexture.format=Pa,this.type===Pc?(Q.map.depthTexture.compareFunction=q?Ix:Lx,Q.map.depthTexture.minFilter=ei,Q.map.depthTexture.magFilter=ei):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Cn,Q.map.depthTexture.magFilter=Cn);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==s.x||Q.map.height!==s.y)&&Q.map.setSize(s.x,s.y);const Z=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();te.isPointLight!==!0&&Q.updateMatrices(te,C);const U=(Q.camera.layers.mask&4294967294)!==0?Q.camera.layers:C.layers;for(let J=0;J<Z;J++){const Te=Q.getCamera(J);if(te.isPointLight){const ne=Q.camera,ye=Q.matrix,Se=te.distance||ne.far;Se!==ne.far&&(ne.far=Se,ne.updateProjectionMatrix()),al.setFromMatrixPosition(te.matrixWorld),ne.position.copy(al),Hh.copy(ne.position),Hh.add(W3[J]),ne.up.copy($3[J]),ne.lookAt(Hh),ne.updateMatrixWorld(),ye.makeTranslation(-al.x,-al.y,-al.z),ky.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(ky,ne.coordinateSystem,ne.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)n.setRenderTarget(Q.map,J),n.clear();else{J===0&&(n.setRenderTarget(Q.map),n.clear());const ne=Q.getViewport(J);u.set(o.x*ne.x,o.y*ne.y,o.x*ne.z,o.y*ne.w),W.viewport(u)}r=Q.getFrustum(J),L(b,C,Te,te,U,this.type)}Q.isPointLightShadow!==!0&&this.type===fl&&w(Q,C),Q.needsUpdate=!1}S=this.type,y.needsUpdate=!1,n.setRenderTarget(k,O,G)};function w(I,b){const C=e.update(T);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,x.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),I.mapPass===null?I.mapPass=new br(s.x,s.y,{format:us,type:Tr}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value.set(I.map.width,I.map.height),g.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(b,null,C,g,T,null),x.uniforms.shadow_pass.value=I.mapPass.texture,x.uniforms.resolution.value.set(I.map.width,I.map.height),x.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(b,null,C,x,T,null)}function D(I,b,C,k){let O=null;const G=C.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)O=G;else if(O=C.isPointLight===!0?f:d,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const W=O.uuid,X=b.uuid;let B=h[W];B===void 0&&(B={},h[W]=B);let ie=B[X];ie===void 0&&(ie=O.clone(),B[X]=ie,b.addEventListener("dispose",N)),O=ie}if(O.visible=b.visible,O.wireframe=b.wireframe,k===fl?O.side=b.shadowSide!==null?b.shadowSide:b.side:O.side=b.shadowSide!==null?b.shadowSide:m[b.side],O.alphaMap=b.alphaMap,O.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,O.map=b.map,O.clipShadows=b.clipShadows,O.clippingPlanes=b.clippingPlanes,O.clipIntersection=b.clipIntersection,O.displacementMap=b.displacementMap,O.displacementScale=b.displacementScale,O.displacementBias=b.displacementBias,O.wireframeLinewidth=b.wireframeLinewidth,O.linewidth=b.linewidth,C.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const W=n.properties.get(O);W.light=C}return O}function L(I,b,C,k,O,G){if(I.visible===!1)return;if(I.layers.test(O)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&G===fl)&&(!I.frustumCulled||I.intersectsFrustum(r))){I.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,I.matrixWorld);const B=e.update(I),ie=I.material;if(Array.isArray(ie)){const te=B.groups;for(let Q=0,j=te.length;Q<j;Q++){const q=te[Q],Z=ie[q.materialIndex];if(Z&&Z.visible){const U=D(I,Z,k,G);I.onBeforeShadow(n,I,b,C,B,U,q),n.renderBufferDirect(C,null,B,U,I,q),I.onAfterShadow(n,I,b,C,B,U,q)}}}else if(ie.visible){const te=D(I,ie,k,G);I.onBeforeShadow(n,I,b,C,B,te,null),n.renderBufferDirect(C,null,B,te,I,null),I.onAfterShadow(n,I,b,C,B,te,null)}}const X=I.children;for(let B=0,ie=X.length;B<ie;B++)L(X[B],b,C,k,O,G)}function N(I){I.target.removeEventListener("dispose",N);for(const C in h){const k=h[C],O=I.target.uuid;O in k&&(k[O].dispose(),delete k[O])}}}function q3(n,e){function t(){let H=!1;const ge=new rn;let fe=null;const Oe=new rn(0,0,0,0);return{setMask:function(Ae){fe!==Ae&&!H&&(n.colorMask(Ae,Ae,Ae,Ae),fe=Ae)},setLocked:function(Ae){H=Ae},setClear:function(Ae,Le,Qe,mt,Me){Me===!0&&(Ae*=mt,Le*=mt,Qe*=mt),ge.set(Ae,Le,Qe,mt),Oe.equals(ge)===!1&&(n.clearColor(Ae,Le,Qe,mt),Oe.copy(ge))},reset:function(){H=!1,fe=null,Oe.set(-1,0,0,0)}}}function r(){let H=!1,ge=!1,fe=null,Oe=null,Ae=null;return{setReversed:function(Le){if(ge!==Le){const Qe=e.get("EXT_clip_control");Le?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),ge=Le;const mt=Ae;Ae=null,this.setClear(mt)}},getReversed:function(){return ge},setTest:function(Le){Le?pe(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(Le){fe!==Le&&!H&&(n.depthMask(Le),fe=Le)},setFunc:function(Le){if(ge&&(Le=bA[Le]),Oe!==Le){switch(Le){case xp:n.depthFunc(n.NEVER);break;case Mp:n.depthFunc(n.ALWAYS);break;case Ep:n.depthFunc(n.LESS);break;case wl:n.depthFunc(n.LEQUAL);break;case bp:n.depthFunc(n.EQUAL);break;case wp:n.depthFunc(n.GEQUAL);break;case Tp:n.depthFunc(n.GREATER);break;case Rp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Oe=Le}},setLocked:function(Le){H=Le},setClear:function(Le){Ae!==Le&&(Ae=Le,ge&&(Le=1-Le),n.clearDepth(Le))},reset:function(){H=!1,fe=null,Oe=null,Ae=null,ge=!1}}}function s(){let H=!1,ge=null,fe=null,Oe=null,Ae=null,Le=null,Qe=null,mt=null,Me=null;return{setTest:function(rt){H||(rt?pe(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(rt){ge!==rt&&!H&&(n.stencilMask(rt),ge=rt)},setFunc:function(rt,ft,He){(fe!==rt||Oe!==ft||Ae!==He)&&(n.stencilFunc(rt,ft,He),fe=rt,Oe=ft,Ae=He)},setOp:function(rt,ft,He){(Le!==rt||Qe!==ft||mt!==He)&&(n.stencilOp(rt,ft,He),Le=rt,Qe=ft,mt=He)},setLocked:function(rt){H=rt},setClear:function(rt){Me!==rt&&(n.clearStencil(rt),Me=rt)},reset:function(){H=!1,ge=null,fe=null,Oe=null,Ae=null,Le=null,Qe=null,mt=null,Me=null}}}const o=new t,u=new r,d=new s;let f={};const h=new WeakMap;let v={},m={},g={},x=new WeakMap,E=[],T=null,y=!1,S=null,w=null,D=null,L=null,N=null,I=null,b=null,C=new Et(0,0,0),k=0,O=!1,G=null,W=null,X=null,B=null,ie=null;const te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,j=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),Q=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Q=j>=2);let Z=null,U={};const J=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),ne=new rn().fromArray(J),ye=new rn().fromArray(Te);function Se(H,ge,fe,Oe){const Ae=new Uint8Array(4),Le=n.createTexture();n.bindTexture(H,Le),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<fe;Qe++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(ge+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return Le}const we={};we[n.TEXTURE_2D]=Se(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=Se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[n.TEXTURE_2D_ARRAY]=Se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=Se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),d.setClear(0),pe(n.DEPTH_TEST),u.setFunc(wl),wt(!1),Ct(H_),pe(n.CULL_FACE),st(ro);function pe(H){v[H]!==!0&&(n.enable(H),v[H]=!0)}function ue(H){v[H]!==!1&&(n.disable(H),v[H]=!1)}function Ge(H,ge){return g[H]!==ge?(n.bindFramebuffer(H,ge),g[H]=ge,H===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=ge),H===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function ve(H,ge){let fe=E,Oe=!1;if(H){fe=x.get(ge),fe===void 0&&(fe=[],x.set(ge,fe));const Ae=H.textures;if(fe.length!==Ae.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let Le=0,Qe=Ae.length;Le<Qe;Le++)fe[Le]=n.COLOR_ATTACHMENT0+Le;fe.length=Ae.length,Oe=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,Oe=!0);Oe&&n.drawBuffers(fe)}function De(H){return T!==H?(n.useProgram(H),T=H,!0):!1}const Je={[to]:n.FUNC_ADD,[XR]:n.FUNC_SUBTRACT,[qR]:n.FUNC_REVERSE_SUBTRACT};Je[YR]=n.MIN,Je[KR]=n.MAX;const ze={[ZR]:n.ZERO,[jR]:n.ONE,[JR]:n.SRC_COLOR,[px]:n.SRC_ALPHA,[rA]:n.SRC_ALPHA_SATURATE,[nA]:n.DST_COLOR,[eA]:n.DST_ALPHA,[QR]:n.ONE_MINUS_SRC_COLOR,[mx]:n.ONE_MINUS_SRC_ALPHA,[iA]:n.ONE_MINUS_DST_COLOR,[tA]:n.ONE_MINUS_DST_ALPHA,[aA]:n.CONSTANT_COLOR,[sA]:n.ONE_MINUS_CONSTANT_COLOR,[oA]:n.CONSTANT_ALPHA,[lA]:n.ONE_MINUS_CONSTANT_ALPHA};function st(H,ge,fe,Oe,Ae,Le,Qe,mt,Me,rt){if(H===ro){y===!0&&(ue(n.BLEND),y=!1);return}if(y===!1&&(pe(n.BLEND),y=!0),H!==$R){if(H!==S||rt!==O){if((w!==to||N!==to)&&(n.blendEquation(n.FUNC_ADD),w=to,N=to),rt)switch(H){case _l:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case G_:n.blendFunc(n.ONE,n.ONE);break;case V_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case W_:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Nt("WebGLState: Invalid blending: ",H);break}else switch(H){case _l:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case G_:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case V_:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case W_:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",H);break}D=null,L=null,I=null,b=null,C.set(0,0,0),k=0,S=H,O=rt}return}Ae=Ae||ge,Le=Le||fe,Qe=Qe||Oe,(ge!==w||Ae!==N)&&(n.blendEquationSeparate(Je[ge],Je[Ae]),w=ge,N=Ae),(fe!==D||Oe!==L||Le!==I||Qe!==b)&&(n.blendFuncSeparate(ze[fe],ze[Oe],ze[Le],ze[Qe]),D=fe,L=Oe,I=Le,b=Qe),(mt.equals(C)===!1||Me!==k)&&(n.blendColor(mt.r,mt.g,mt.b,Me),C.copy(mt),k=Me),S=H,O=!1}function We(H,ge){H.side===vr?ue(n.CULL_FACE):pe(n.CULL_FACE);let fe=H.side===ni;ge&&(fe=!fe),wt(fe),H.blending===_l&&H.transparent===!1?st(ro):st(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),o.setMask(H.colorWrite);const Oe=H.stencilWrite;d.setTest(Oe),Oe&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ot(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function wt(H){G!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),G=H)}function Ct(H){H!==VR?(pe(n.CULL_FACE),H!==W&&(H===H_?n.cullFace(n.BACK):H===WR?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),W=H}function un(H){H!==X&&(Q&&n.lineWidth(H),X=H)}function Ot(H,ge,fe){H?(pe(n.POLYGON_OFFSET_FILL),(B!==ge||ie!==fe)&&(B=ge,ie=fe,u.getReversed()&&(ge=-ge,fe=-fe),n.polygonOffset(ge,fe))):ue(n.POLYGON_OFFSET_FILL)}function en(H){H?pe(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function cn(H){H===void 0&&(H=n.TEXTURE0+te-1),Z!==H&&(n.activeTexture(H),Z=H)}function wn(H,ge,fe){fe===void 0&&(Z===null?fe=n.TEXTURE0+te-1:fe=Z);let Oe=U[fe];Oe===void 0&&(Oe={type:void 0,texture:void 0},U[fe]=Oe),(Oe.type!==H||Oe.texture!==ge)&&(Z!==fe&&(n.activeTexture(fe),Z=fe),n.bindTexture(H,ge||we[H]),Oe.type=H,Oe.texture=ge)}function Y(){const H=U[Z];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Tn(){try{n.compressedTexImage2D(...arguments)}catch(H){Nt("WebGLState:",H)}}function Ut(){try{n.compressedTexImage3D(...arguments)}catch(H){Nt("WebGLState:",H)}}function Ft(){try{n.texSubImage2D(...arguments)}catch(H){Nt("WebGLState:",H)}}function Fe(){try{n.texSubImage3D(...arguments)}catch(H){Nt("WebGLState:",H)}}function Zt(){try{n.compressedTexSubImage2D(...arguments)}catch(H){Nt("WebGLState:",H)}}function it(){try{n.compressedTexSubImage3D(...arguments)}catch(H){Nt("WebGLState:",H)}}function ot(){try{n.texStorage2D(...arguments)}catch(H){Nt("WebGLState:",H)}}function F(){try{n.texStorage3D(...arguments)}catch(H){Nt("WebGLState:",H)}}function A(){try{n.texImage2D(...arguments)}catch(H){Nt("WebGLState:",H)}}function ae(){try{n.texImage3D(...arguments)}catch(H){Nt("WebGLState:",H)}}function be(H){return m[H]!==void 0?m[H]:n.getParameter(H)}function _e(H,ge){m[H]!==ge&&(n.pixelStorei(H,ge),m[H]=ge)}function Pe(H){ne.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),ne.copy(H))}function Ne(H){ye.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),ye.copy(H))}function he(H,ge){let fe=h.get(ge);fe===void 0&&(fe=new WeakMap,h.set(ge,fe));let Oe=fe.get(H);Oe===void 0&&(Oe=n.getUniformBlockIndex(ge,H.name),n.uniformBlockBinding(ge,Oe,Oe),fe.set(H,Oe))}function me(H,ge,fe){const Ae=h.get(ge).get(H);f[Ae]!==fe&&(n.bindBufferBase(n.UNIFORM_BUFFER,Ae,fe),f[Ae]=fe)}function Ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),v={},m={},Z=null,U={},g={},f={},x=new WeakMap,E=[],T=null,y=!1,S=null,w=null,D=null,L=null,N=null,I=null,b=null,C=new Et(0,0,0),k=0,O=!1,G=null,W=null,X=null,B=null,ie=null,ne.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),o.reset(),u.reset(),d.reset()}return{buffers:{color:o,depth:u,stencil:d},enable:pe,disable:ue,bindFramebuffer:Ge,drawBuffers:ve,useProgram:De,setBlending:st,setMaterial:We,setFlipSided:wt,setCullFace:Ct,setLineWidth:un,setPolygonOffset:Ot,setScissorTest:en,activeTexture:cn,bindTexture:wn,unbindTexture:Y,compressedTexImage2D:Tn,compressedTexImage3D:Ut,texImage2D:A,texImage3D:ae,pixelStorei:_e,getParameter:be,updateUBOMapping:he,uniformBlockBinding:me,texStorage2D:ot,texStorage3D:F,texSubImage2D:Ft,texSubImage3D:Fe,compressedTexSubImage2D:Zt,compressedTexSubImage3D:it,scissor:Pe,viewport:Ne,reset:Ce}}function Y3(n,e,t,r,s,o,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new bt,v=new WeakMap,m=new Set;let g;const x=new WeakMap,E=new Set,T=new FinalizationRegistry(F=>E.delete(F));let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(F,A){return y?new OffscreenCanvas(F,A):Kc("canvas")}function w(F,A,ae){let be=1;const _e=ot(F);if((_e.width>ae||_e.height>ae)&&(be=ae/Math.max(_e.width,_e.height)),be<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const Pe=Math.floor(be*_e.width),Ne=Math.floor(be*_e.height);g===void 0&&(g=S(Pe,Ne));const he=A?S(Pe,Ne):g;return he.width=Pe,he.height=Ne,he.getContext("2d").drawImage(F,0,0,Pe,Ne),pt("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+Pe+"x"+Ne+")."),he}else return"data"in F&&pt("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),F;return F}function D(F){return F.generateMipmaps}function L(F){n.generateMipmap(F)}function N(F){return F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?n.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function I(F,A,ae,be,_e,Pe=!1){if(F!==null){if(n[F]!==void 0)return n[F];pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Ne;be&&(Ne=e.get("EXT_texture_norm16"),Ne||pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=A;if(A===n.RED&&(ae===n.FLOAT&&(he=n.R32F),ae===n.HALF_FLOAT&&(he=n.R16F),ae===n.UNSIGNED_BYTE&&(he=n.R8),ae===n.UNSIGNED_SHORT&&Ne&&(he=Ne.R16_EXT),ae===n.SHORT&&Ne&&(he=Ne.R16_SNORM_EXT)),A===n.RED_INTEGER&&(ae===n.UNSIGNED_BYTE&&(he=n.R8UI),ae===n.UNSIGNED_SHORT&&(he=n.R16UI),ae===n.UNSIGNED_INT&&(he=n.R32UI),ae===n.BYTE&&(he=n.R8I),ae===n.SHORT&&(he=n.R16I),ae===n.INT&&(he=n.R32I)),A===n.RG&&(ae===n.FLOAT&&(he=n.RG32F),ae===n.HALF_FLOAT&&(he=n.RG16F),ae===n.UNSIGNED_BYTE&&(he=n.RG8),ae===n.UNSIGNED_SHORT&&Ne&&(he=Ne.RG16_EXT),ae===n.SHORT&&Ne&&(he=Ne.RG16_SNORM_EXT)),A===n.RG_INTEGER&&(ae===n.UNSIGNED_BYTE&&(he=n.RG8UI),ae===n.UNSIGNED_SHORT&&(he=n.RG16UI),ae===n.UNSIGNED_INT&&(he=n.RG32UI),ae===n.BYTE&&(he=n.RG8I),ae===n.SHORT&&(he=n.RG16I),ae===n.INT&&(he=n.RG32I)),A===n.RGB_INTEGER&&(ae===n.UNSIGNED_BYTE&&(he=n.RGB8UI),ae===n.UNSIGNED_SHORT&&(he=n.RGB16UI),ae===n.UNSIGNED_INT&&(he=n.RGB32UI),ae===n.BYTE&&(he=n.RGB8I),ae===n.SHORT&&(he=n.RGB16I),ae===n.INT&&(he=n.RGB32I)),A===n.RGBA_INTEGER&&(ae===n.UNSIGNED_BYTE&&(he=n.RGBA8UI),ae===n.UNSIGNED_SHORT&&(he=n.RGBA16UI),ae===n.UNSIGNED_INT&&(he=n.RGBA32UI),ae===n.BYTE&&(he=n.RGBA8I),ae===n.SHORT&&(he=n.RGBA16I),ae===n.INT&&(he=n.RGBA32I)),A===n.RGB&&(ae===n.UNSIGNED_SHORT&&Ne&&(he=Ne.RGB16_EXT),ae===n.SHORT&&Ne&&(he=Ne.RGB16_SNORM_EXT),ae===n.UNSIGNED_INT_5_9_9_9_REV&&(he=n.RGB9_E5),ae===n.UNSIGNED_INT_10F_11F_11F_REV&&(he=n.R11F_G11F_B10F)),A===n.RGBA){const me=Pe?Yc:Rt.getTransfer(_e);ae===n.FLOAT&&(he=n.RGBA32F),ae===n.HALF_FLOAT&&(he=n.RGBA16F),ae===n.UNSIGNED_BYTE&&(he=me===Bt?n.SRGB8_ALPHA8:n.RGBA8),ae===n.UNSIGNED_SHORT&&Ne&&(he=Ne.RGBA16_EXT),ae===n.SHORT&&Ne&&(he=Ne.RGBA16_SNORM_EXT),ae===n.UNSIGNED_SHORT_4_4_4_4&&(he=n.RGBA4),ae===n.UNSIGNED_SHORT_5_5_5_1&&(he=n.RGB5_A1)}return(he===n.R16F||he===n.R32F||he===n.RG16F||he===n.RG32F||he===n.RGBA16F||he===n.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function b(F,A){let ae;return F?A===null||A===wr||A===co?ae=n.DEPTH24_STENCIL8:A===Sr?ae=n.DEPTH32F_STENCIL8:A===Rl&&(ae=n.DEPTH24_STENCIL8,pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===wr||A===co?ae=n.DEPTH_COMPONENT24:A===Sr?ae=n.DEPTH_COMPONENT32F:A===Rl&&(ae=n.DEPTH_COMPONENT16),ae}function C(F,A){return D(F)===!0||F.isFramebufferTexture&&F.minFilter!==Cn&&F.minFilter!==ei?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function k(F){const A=new WeakRef(F);r.get(F).__ref=A,E.add(A),T.register(F,A,A)}function O(F){const A=r.get(F).__ref;A!==void 0&&(E.delete(A),T.unregister(A))}function G(F){X(F.target)}function W(F){B(F.target)}function X(F){F.removeEventListener("dispose",G),O(F),te(F),F.isVideoTexture&&v.delete(F),F.isHTMLTexture&&m.delete(F)}function B(F){F.removeEventListener("dispose",W),O(F),j(F)}function ie(){for(const F of E){const A=F.deref();A!==void 0&&(A.isRenderTarget===!0?B(A):X(A))}E.clear(),m.clear()}function te(F){const A=r.get(F);if(A.__webglInit===void 0)return;const ae=F.source,be=x.get(ae);if(be){const _e=be[A.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&Q(F),Object.keys(be).length===0&&x.delete(ae)}r.remove(F)}function Q(F){const A=r.get(F);n.deleteTexture(A.__webglTexture);const ae=F.source,be=x.get(ae);delete be[A.__cacheKey],u.memory.textures--}function j(F){const A=r.get(F);A.__depthDisposeCallback&&A.__depthDisposeCallback();const ae=F.depthTexture;if(ae&&ae.renderTarget===F&&X(ae),F.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(A.__webglFramebuffer[_e]))for(let Pe=0;Pe<A.__webglFramebuffer[_e].length;Pe++)n.deleteFramebuffer(A.__webglFramebuffer[_e][Pe]);else n.deleteFramebuffer(A.__webglFramebuffer[_e]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[_e])}else{if(Array.isArray(A.__webglFramebuffer))for(let _e=0;_e<A.__webglFramebuffer.length;_e++)n.deleteFramebuffer(A.__webglFramebuffer[_e]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let _e=0;_e<A.__webglColorRenderbuffer.length;_e++)A.__webglColorRenderbuffer[_e]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[_e]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const be=F.textures;for(let _e=0,Pe=be.length;_e<Pe;_e++){const Ne=r.get(be[_e]);Ne.__webglTexture&&(n.deleteTexture(Ne.__webglTexture),u.memory.textures--),r.remove(be[_e])}r.remove(F)}let q=0;function Z(){q=0}function U(){return q}function J(F){q=F}function Te(){const F=q;return F>=s.maxTextures&&pt("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,F}function ne(F){const A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.mipmapsAutoUpdate),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function ye(F,A){const ae=r.get(F);if(F.isVideoTexture&&Zt(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&ae.__version!==F.version){const be=F.image;if(be===null)pt("WebGLRenderer: Texture marked for update but no image data found.");else if(be.complete===!1)pt("WebGLRenderer: Texture marked for update but image is incomplete");else{We(ae,F,A);return}}else F.isExternalTexture&&(ae.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture,n.TEXTURE0+A)}function Se(F,A){const ae=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ae.__version!==F.version){We(ae,F,A);return}else F.isExternalTexture&&(ae.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,ae.__webglTexture,n.TEXTURE0+A)}function we(F,A){const ae=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ae.__version!==F.version){We(ae,F,A);return}t.bindTexture(n.TEXTURE_3D,ae.__webglTexture,n.TEXTURE0+A)}function pe(F,A){const ae=r.get(F);if(F.version>0&&ae.__version!==F.version){wt(ae,F,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture,n.TEXTURE0+A)}const ue={[Wc]:n.REPEAT,[Gr]:n.CLAMP_TO_EDGE,[Ap]:n.MIRRORED_REPEAT},Ge={[Cn]:n.NEAREST,[dA]:n.NEAREST_MIPMAP_NEAREST,[nc]:n.NEAREST_MIPMAP_LINEAR,[ei]:n.LINEAR,[mh]:n.LINEAR_MIPMAP_NEAREST,[Ra]:n.LINEAR_MIPMAP_LINEAR},ve={[mA]:n.NEVER,[Dx]:n.ALWAYS,[gA]:n.LESS,[Lx]:n.LEQUAL,[vA]:n.EQUAL,[Ix]:n.GEQUAL,[_A]:n.GREATER,[yA]:n.NOTEQUAL};function De(F,A){if(A.type===Sr&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===ei||A.magFilter===mh||A.magFilter===nc||A.magFilter===Ra||A.minFilter===ei||A.minFilter===mh||A.minFilter===nc||A.minFilter===Ra)&&pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,ue[A.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,ue[A.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,ue[A.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,Ge[A.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,Ge[A.minFilter]),A.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,ve[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Cn||A.minFilter!==nc&&A.minFilter!==Ra||A.type===Sr&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");n.texParameterf(F,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function Je(F,A){let ae=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",G),k(A));const be=A.source;let _e=x.get(be);_e===void 0&&(_e={},x.set(be,_e));const Pe=ne(A);if(Pe!==F.__cacheKey){_e[Pe]===void 0&&(_e[Pe]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,ae=!0),_e[Pe].usedTimes++;const Ne=_e[F.__cacheKey];Ne!==void 0&&(_e[F.__cacheKey].usedTimes--,Ne.usedTimes===0&&Q(A)),F.__cacheKey=Pe,F.__webglTexture=_e[Pe].texture}return ae}function ze(F,A,ae){return Math.floor(Math.floor(F/ae)/A)}function st(F,A,ae,be){const Pe=F.updateRanges;if(Pe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,A.width,A.height,ae,be,A.data);else{Pe.sort((H,ge)=>H.start-ge.start);let Ne=0;for(let H=1;H<Pe.length;H++){const ge=Pe[Ne],fe=Pe[H],Oe=ge.start+ge.count,Ae=ze(fe.start,A.width,4),Le=ze(ge.start,A.width,4);fe.start<=Oe+1&&Ae===Le&&ze(fe.start+fe.count-1,A.width,4)===Ae?ge.count=Math.max(ge.count,fe.start+fe.count-ge.start):(++Ne,Pe[Ne]=fe)}Pe.length=Ne+1;const he=t.getParameter(n.UNPACK_ROW_LENGTH),me=t.getParameter(n.UNPACK_SKIP_PIXELS),Ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,A.width);for(let H=0,ge=Pe.length;H<ge;H++){const fe=Pe[H],Oe=Math.floor(fe.start/4),Ae=Math.ceil(fe.count/4),Le=Oe%A.width,Qe=Math.floor(Oe/A.width),mt=Ae,Me=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),t.pixelStorei(n.UNPACK_SKIP_ROWS,Qe),t.texSubImage2D(n.TEXTURE_2D,0,Le,Qe,mt,Me,ae,be,A.data)}F.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,he),t.pixelStorei(n.UNPACK_SKIP_PIXELS,me),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function We(F,A,ae){let be=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(be=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(be=n.TEXTURE_3D);const _e=Je(F,A),Pe=A.source;t.bindTexture(be,F.__webglTexture,n.TEXTURE0+ae);const Ne=r.get(Pe);if(Pe.version!==Ne.__version||_e===!0){if(t.activeTexture(n.TEXTURE0+ae),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const Me=Rt.getPrimaries(Rt.workingColorSpace),rt=A.colorSpace===Ta?null:Rt.getPrimaries(A.colorSpace),ft=A.colorSpace===Ta||Me===rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft)}t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment);let me=w(A.image,!1,s.maxTextureSize);me=it(A,me);const Ce=o.convert(A.format,A.colorSpace),H=o.convert(A.type);let ge=I(A.internalFormat,Ce,H,A.normalized,A.colorSpace,A.isVideoTexture);De(be,A);let fe;const Oe=A.mipmaps,Ae=A.isVideoTexture!==!0,Le=Ne.__version===void 0||_e===!0,Qe=Pe.dataReady,mt=C(A,me);if(A.isDepthTexture)ge=b(A.format===Aa,A.type),Le&&(Ae?t.texStorage2D(n.TEXTURE_2D,1,ge,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,ge,me.width,me.height,0,Ce,H,null));else if(A.isDataTexture)if(Oe.length>0){Ae&&Le&&t.texStorage2D(n.TEXTURE_2D,mt,ge,Oe[0].width,Oe[0].height);for(let Me=0,rt=Oe.length;Me<rt;Me++)fe=Oe[Me],Ae?Qe&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,fe.width,fe.height,Ce,H,fe.data):t.texImage2D(n.TEXTURE_2D,Me,ge,fe.width,fe.height,0,Ce,H,fe.data);A.generateMipmaps=!1}else Ae?(Le&&t.texStorage2D(n.TEXTURE_2D,mt,ge,me.width,me.height),Qe&&st(A,me,Ce,H)):t.texImage2D(n.TEXTURE_2D,0,ge,me.width,me.height,0,Ce,H,me.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ae&&Le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,mt,ge,Oe[0].width,Oe[0].height,me.depth);for(let Me=0,rt=Oe.length;Me<rt;Me++)if(fe=Oe[Me],A.format!==xr)if(Ce!==null)if(Ae){if(Qe)if(A.layerUpdates.size>0){const ft=vy(fe.width,fe.height,A.format,A.type);for(const He of A.layerUpdates){const xt=fe.data.subarray(He*ft/fe.data.BYTES_PER_ELEMENT,(He+1)*ft/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,He,fe.width,fe.height,1,Ce,xt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,fe.width,fe.height,me.depth,Ce,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Me,ge,fe.width,fe.height,me.depth,0,fe.data,0,0);else pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?Qe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,fe.width,fe.height,me.depth,Ce,H,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Me,ge,fe.width,fe.height,me.depth,0,Ce,H,fe.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Ae&&Le&&t.texStorage2D(n.TEXTURE_2D,mt,ge,Oe[0].width,Oe[0].height);for(let Me=0,rt=Oe.length;Me<rt;Me++)fe=Oe[Me],A.format!==xr?Ce!==null?Ae?Qe&&t.compressedTexSubImage2D(n.TEXTURE_2D,Me,0,0,fe.width,fe.height,Ce,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,Me,ge,fe.width,fe.height,0,fe.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?Qe&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,fe.width,fe.height,Ce,H,fe.data):t.texImage2D(n.TEXTURE_2D,Me,ge,fe.width,fe.height,0,Ce,H,fe.data)}else if(A.isDataArrayTexture)if(Ae){if(Le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,mt,ge,me.width,me.height,me.depth),Qe)if(A.layerUpdates.size>0){const Me=vy(me.width,me.height,A.format,A.type);for(const rt of A.layerUpdates){const ft=me.data.subarray(rt*Me/me.data.BYTES_PER_ELEMENT,(rt+1)*Me/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,rt,me.width,me.height,1,Ce,H,ft)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ce,H,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ge,me.width,me.height,me.depth,0,Ce,H,me.data);else if(A.isData3DTexture)Ae?(Le&&t.texStorage3D(n.TEXTURE_3D,mt,ge,me.width,me.height,me.depth),Qe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ce,H,me.data)):t.texImage3D(n.TEXTURE_3D,0,ge,me.width,me.height,me.depth,0,Ce,H,me.data);else if(A.isFramebufferTexture){if(Le)if(Ae)t.texStorage2D(n.TEXTURE_2D,mt,ge,me.width,me.height);else{let Me=me.width,rt=me.height;for(let ft=0;ft<mt;ft++)t.texImage2D(n.TEXTURE_2D,ft,ge,Me,rt,0,Ce,H,null),Me>>=1,rt>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in n){const Me=n.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),me.parentNode!==Me){Me.appendChild(me),m.add(A),Me.onpaint=rt=>{const ft=rt.changedElements;for(const He of m)ft.includes(He.image)&&(He.needsUpdate=!0)},Me.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,me);else{const ft=n.RGBA,He=n.RGBA,xt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ft,He,xt,me)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(Ae&&Le){const Me=ot(Oe[0]);t.texStorage2D(n.TEXTURE_2D,mt,ge,Me.width,Me.height)}for(let Me=0,rt=Oe.length;Me<rt;Me++)fe=Oe[Me],Ae?Qe&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,Ce,H,fe):t.texImage2D(n.TEXTURE_2D,Me,ge,Ce,H,fe);A.generateMipmaps=!1}else if(Ae){if(Le){const Me=ot(me);t.texStorage2D(n.TEXTURE_2D,mt,ge,Me.width,Me.height)}Qe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,H,me)}else t.texImage2D(n.TEXTURE_2D,0,ge,Ce,H,me);D(A)&&A.mipmapsAutoUpdate===!0&&L(be),Ne.__version=Pe.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function wt(F,A,ae){if(A.image.length!==6)return;const be=Je(F,A),_e=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+ae);const Pe=r.get(_e);if(_e.version!==Pe.__version||be===!0){t.activeTexture(n.TEXTURE0+ae);const Ne=Rt.getPrimaries(Rt.workingColorSpace),he=A.colorSpace===Ta?null:Rt.getPrimaries(A.colorSpace),me=A.colorSpace===Ta||Ne===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ce=A.isCompressedTexture||A.image[0].isCompressedTexture,H=A.image[0]&&A.image[0].isDataTexture,ge=[];for(let He=0;He<6;He++)!Ce&&!H?ge[He]=w(A.image[He],!0,s.maxCubemapSize):ge[He]=H?A.image[He].image:A.image[He],ge[He]=it(A,ge[He]);const fe=ge[0],Oe=o.convert(A.format,A.colorSpace),Ae=o.convert(A.type);let Le=I(A.internalFormat,Oe,Ae,A.normalized,A.colorSpace);const Qe=A.isVideoTexture!==!0,mt=Pe.__version===void 0||be===!0,Me=_e.dataReady;let rt=C(A,fe);De(n.TEXTURE_CUBE_MAP,A);let ft;if(A.isDepthTexture){if(Le=b(A.format===Aa,A.type),mt)if(Qe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Le,fe.width,fe.height);else for(let He=0;He<6;He++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Le,fe.width,fe.height,0,Oe,Ae,null)}else if(Ce){Qe&&mt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,rt,Le,fe.width,fe.height);for(let He=0;He<6;He++){ft=ge[He].mipmaps;for(let xt=0;xt<ft.length;xt++){const $t=ft[xt];A.format!==xr?Oe!==null?Qe?Me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,xt,0,0,$t.width,$t.height,Oe,$t.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,xt,Le,$t.width,$t.height,0,$t.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,xt,0,0,$t.width,$t.height,Oe,Ae,$t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,xt,Le,$t.width,$t.height,0,Oe,Ae,$t.data)}}}else{if(ft=A.mipmaps,Qe&&mt){ft.length>0&&rt++;const He=ot(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,rt,Le,He.width,He.height)}for(let He=0;He<6;He++)if(H){Qe?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,0,0,ge[He].width,ge[He].height,Oe,Ae,ge[He].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Le,ge[He].width,ge[He].height,0,Oe,Ae,ge[He].data);for(let xt=0;xt<ft.length;xt++){const Ln=ft[xt].image[He].image;Qe?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,xt+1,0,0,Ln.width,Ln.height,Oe,Ae,Ln.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,xt+1,Le,Ln.width,Ln.height,0,Oe,Ae,Ln.data)}}else{Qe?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,0,0,Oe,Ae,ge[He]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Le,Oe,Ae,ge[He]);for(let xt=0;xt<ft.length;xt++){const $t=ft[xt];Qe?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,xt+1,0,0,Oe,Ae,$t.image[He]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,xt+1,Le,Oe,Ae,$t.image[He])}}}D(A)&&A.mipmapsAutoUpdate===!0&&L(n.TEXTURE_CUBE_MAP),Pe.__version=_e.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function Ct(F,A,ae,be,_e,Pe){const Ne=o.convert(ae.format,ae.colorSpace),he=o.convert(ae.type),me=I(ae.internalFormat,Ne,he,ae.normalized,ae.colorSpace),Ce=r.get(A),H=r.get(ae);if(H.__renderTarget=A,!Ce.__hasExternalTextures){const ge=Math.max(1,A.width>>Pe),fe=Math.max(1,A.height>>Pe);_e===n.TEXTURE_3D||_e===n.TEXTURE_2D_ARRAY?t.texImage3D(_e,Pe,me,ge,fe,A.depth,0,Ne,he,null):t.texImage2D(_e,Pe,me,ge,fe,0,Ne,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,F),Fe(A)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,_e,H.__webglTexture,0,Ft(A)):(_e===n.TEXTURE_2D||_e>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,be,_e,H.__webglTexture,Pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function un(F,A,ae){if(n.bindRenderbuffer(n.RENDERBUFFER,F),A.depthBuffer){const be=A.depthTexture,_e=be&&be.isDepthTexture?be.type:null,Pe=b(A.stencilBuffer,_e),Ne=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Fe(A)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ft(A),Pe,A.width,A.height):ae?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft(A),Pe,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Pe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ne,n.RENDERBUFFER,F)}else{const be=A.textures;for(let _e=0;_e<be.length;_e++){const Pe=be[_e],Ne=o.convert(Pe.format,Pe.colorSpace),he=o.convert(Pe.type),me=I(Pe.internalFormat,Ne,he,Pe.normalized,Pe.colorSpace);Fe(A)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ft(A),me,A.width,A.height):ae?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft(A),me,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,me,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ot(F,A,ae){const be=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const _e=r.get(A.depthTexture);_e.__renderTarget=A;const Pe=be?A.depthTexture.image[0]:A.depthTexture.image;(!_e.__webglTexture||Pe.width!==A.width||Pe.height!==A.height)&&(Pe.width=A.width,Pe.height=A.height,A.depthTexture.needsUpdate=!0),be?pe(A.depthTexture,0):ye(A.depthTexture,0);const Ne=_e.__webglTexture,he=Ft(A),me=be?n.TEXTURE_CUBE_MAP_POSITIVE_X+ae:n.TEXTURE_2D,Ce=A.depthTexture.format===Aa?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(A.depthTexture.format===Pa)Fe(A)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ce,me,Ne,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,Ce,me,Ne,0);else if(A.depthTexture.format===Aa)Fe(A)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ce,me,Ne,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,Ce,me,Ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function en(F){const A=r.get(F),ae=F.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==F.depthTexture){const be=F.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),be){const _e=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,be.removeEventListener("dispose",_e)};be.addEventListener("dispose",_e),A.__depthDisposeCallback=_e}A.__boundDepthTexture=be}if(F.depthTexture&&!A.__autoAllocateDepthBuffer)if(ae)for(let be=0;be<6;be++)Ot(A.__webglFramebuffer[be],F,be);else F.texture.mipmaps.length>0?Ot(A.__webglFramebuffer[0],F,0):Ot(A.__webglFramebuffer,F,0);else if(ae){A.__webglDepthbuffer=[];for(let be=0;be<6;be++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[be]),A.__webglDepthbuffer[be]===void 0)A.__webglDepthbuffer[be]=n.createRenderbuffer(),un(A.__webglDepthbuffer[be],F,!1);else{const _e=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=A.__webglDepthbuffer[be];n.bindRenderbuffer(n.RENDERBUFFER,Pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,Pe)}}else if(F.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),un(A.__webglDepthbuffer,F,!1);else{const _e=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,Pe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function cn(F,A,ae){const be=r.get(F);A!==void 0&&Ct(be.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ae!==void 0&&en(F)}function wn(F){const A=F.texture,ae=r.get(F),be=r.get(A);F.addEventListener("dispose",W),k(F);const _e=F.textures,Pe=F.isWebGLCubeRenderTarget===!0,Ne=_e.length>1;if(Ne||(be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture()),be.__version=A.version,u.memory.textures++),Pe){ae.__webglFramebuffer=[];for(let he=0;he<6;he++)if(A.mipmaps.length>0){ae.__webglFramebuffer[he]=[];for(let me=0;me<A.mipmaps.length;me++)ae.__webglFramebuffer[he][me]=n.createFramebuffer()}else ae.__webglFramebuffer[he]=n.createFramebuffer()}else{if(A.mipmaps.length>0){ae.__webglFramebuffer=[];for(let he=0;he<A.mipmaps.length;he++)ae.__webglFramebuffer[he]=n.createFramebuffer()}else ae.__webglFramebuffer=n.createFramebuffer();if(Ne)for(let he=0,me=_e.length;he<me;he++){const Ce=r.get(_e[he]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),u.memory.textures++)}if(F.samples>0&&Fe(F)===!1){ae.__webglMultisampledFramebuffer=n.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let he=0;he<_e.length;he++){const me=_e[he];ae.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ae.__webglColorRenderbuffer[he]);const Ce=o.convert(me.format,me.colorSpace),H=o.convert(me.type),ge=I(me.internalFormat,Ce,H,me.normalized,me.colorSpace,F.isXRRenderTarget===!0),fe=Ft(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,ge,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,ae.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(ae.__webglDepthRenderbuffer=n.createRenderbuffer(),un(ae.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Pe){t.bindTexture(n.TEXTURE_CUBE_MAP,be.__webglTexture),De(n.TEXTURE_CUBE_MAP,A);for(let he=0;he<6;he++)if(A.mipmaps.length>0)for(let me=0;me<A.mipmaps.length;me++)Ct(ae.__webglFramebuffer[he][me],F,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,me);else Ct(ae.__webglFramebuffer[he],F,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);D(A)?L(n.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(Ne){for(let he=0,me=_e.length;he<me;he++){const Ce=_e[he],H=r.get(Ce);let ge=n.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ge=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,H.__webglTexture),De(ge,Ce),Ct(ae.__webglFramebuffer,F,Ce,n.COLOR_ATTACHMENT0+he,ge,0),D(Ce)&&L(ge)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(he=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,be.__webglTexture),De(he,A),A.mipmaps.length>0)for(let me=0;me<A.mipmaps.length;me++)Ct(ae.__webglFramebuffer[me],F,A,n.COLOR_ATTACHMENT0,he,me);else Ct(ae.__webglFramebuffer,F,A,n.COLOR_ATTACHMENT0,he,0);D(A)?L(he):A.mipmaps.length>0&&n.texParameteri(he,n.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}F.depthBuffer&&en(F)}function Y(F){const A=F.textures;for(let ae=0,be=A.length;ae<be;ae++){const _e=A[ae];if(D(_e)&&_e.mipmapsAutoUpdate===!0){const Pe=N(F),Ne=r.get(_e).__webglTexture;t.bindTexture(Pe,Ne),L(Pe),t.unbindTexture()}}}const Tn=[];function Ut(F){if(F.samples>0){if(Fe(F)===!1){const A=F.textures,ae=F.width,be=F.height;let _e=n.COLOR_BUFFER_BIT;const Pe=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ne=r.get(F),he=A.length>1;if(he)for(let Ce=0;Ce<A.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),F.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Ce=0;Ce<A.length;Ce++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(_e|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(_e|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ce]);const H=r.get(A[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,H,0)}n.blitFramebuffer(0,0,ae,be,0,0,ae,be,_e,n.NEAREST),f===!0&&(Tn.length=0,Tn.push(n.COLOR_ATTACHMENT0+Ce),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&Tn.push(Pe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Tn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Ce=0;Ce<A.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ce]);const H=r.get(A[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,H,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&f){const A=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function Ft(F){return Math.min(s.maxSamples,F.samples)}function Fe(F){const A=r.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Zt(F){const A=u.render.frame;v.get(F)!==A&&(v.set(F,A),F.update())}function it(F,A){const ae=F.colorSpace,be=F.format,_e=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||ae!==qc&&ae!==Ta&&(Rt.getTransfer(ae)===Bt?(be!==xr||_e!==gi)&&pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",ae)),A}function ot(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=Te,this.resetTextureUnits=Z,this.getTextureUnits=U,this.setTextureUnits=J,this.setTexture2D=ye,this.setTexture2DArray=Se,this.setTexture3D=we,this.setTextureCube=pe,this.rebindTextures=cn,this.setupRenderTarget=wn,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=en,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Fe,this.dispose=ie}function K3(n,e){function t(r,s=Ta){let o;const u=Rt.getTransfer(s);if(r===gi)return n.UNSIGNED_BYTE;if(r===wm)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Tm)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Tx)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===Rx)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===bx)return n.BYTE;if(r===wx)return n.SHORT;if(r===Rl)return n.UNSIGNED_SHORT;if(r===bm)return n.INT;if(r===wr)return n.UNSIGNED_INT;if(r===Sr)return n.FLOAT;if(r===Tr)return n.HALF_FLOAT;if(r===Ax)return n.ALPHA;if(r===Cx)return n.RGB;if(r===xr)return n.RGBA;if(r===Pa)return n.DEPTH_COMPONENT;if(r===Aa)return n.DEPTH_STENCIL;if(r===Px)return n.RED;if(r===Rm)return n.RED_INTEGER;if(r===us)return n.RG;if(r===Am)return n.RG_INTEGER;if(r===Cm)return n.RGBA_INTEGER;if(r===Lc||r===Ic||r===Dc||r===Nc)if(u===Bt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Lc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ic)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Dc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Nc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Lc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ic)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Dc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Nc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Cp||r===Pp||r===Lp||r===Ip)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Cp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Lp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ip)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Dp||r===Np||r===Op||r===Up||r===Fp||r===$c||r===kp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Dp||r===Np)return u===Bt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Op)return u===Bt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(r===Up)return o.COMPRESSED_R11_EAC;if(r===Fp)return o.COMPRESSED_SIGNED_R11_EAC;if(r===$c)return o.COMPRESSED_RG11_EAC;if(r===kp)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Bp||r===zp||r===Hp||r===Gp||r===Vp||r===Wp||r===$p||r===Xp||r===qp||r===Yp||r===Kp||r===Zp||r===jp||r===Jp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Bp)return u===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zp)return u===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hp)return u===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Gp)return u===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vp)return u===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wp)return u===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$p)return u===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xp)return u===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qp)return u===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yp)return u===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Kp)return u===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zp)return u===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jp)return u===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jp)return u===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qp||r===em||r===tm)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Qp)return u===Bt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===em)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===tm)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===nm||r===im||r===Xc||r===rm)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===nm)return o.COMPRESSED_RED_RGTC1_EXT;if(r===im)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===rm)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===co?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const Z3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j3=`
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

}`;class J3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Gx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new cs({vertexShader:Z3,fragmentShader:j3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ia(new os(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Q3 extends ps{constructor(e,t){super();const r=this;let s=null,o=1,u=null,d="local-floor",f=1,h=null,v=null,m=null,g=null,x=null,E=null;const T=typeof XRWebGLBinding<"u",y=new J3,S={},w=t.getContextAttributes();let D=null,L=null;const N=[],I=[],b=new bt;let C=null,k=null;const O=new Pi;O.viewport=new rn;const G=new Pi;G.viewport=new rn;const W=[O,G],X=new cC;let B=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ye=N[ne];return ye===void 0&&(ye=new bh,N[ne]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ne){let ye=N[ne];return ye===void 0&&(ye=new bh,N[ne]=ye),ye.getGripSpace()},this.getHand=function(ne){let ye=N[ne];return ye===void 0&&(ye=new bh,N[ne]=ye),ye.getHandSpace()};function te(ne){const ye=I.indexOf(ne.inputSource);if(ye===-1)return;const Se=N[ye];Se!==void 0&&(Se.update(ne.inputSource,ne.frame,h||u),Se.dispatchEvent({type:ne.type,data:ne.inputSource}))}function Q(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",j);for(let ne=0;ne<N.length;ne++){const ye=I[ne];ye!==null&&(I[ne]=null,N[ne].disconnect(ye))}B=null,ie=null,y.reset();for(const ne in S)delete S[ne];if(e.setRenderTarget(D),x=null,g=null,m=null,s=null,L=null,Te.stop(),r.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),k!==null){const ne=k.camera;ne.fov=k.fov,ne.zoom=k.zoom,ne.updateProjectionMatrix(),k=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){o=ne,r.isPresenting===!0&&pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){d=ne,r.isPresenting===!0&&pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(ne){h=ne},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return m===null&&T&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(D=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",j),w.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,we=null,pe=null;w.depth&&(pe=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=w.stencil?Aa:Pa,we=w.stencil?co:wr);const ue={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:o};m=this.getBinding(),g=m.createProjectionLayer(ue),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),L=new br(g.textureWidth,g.textureHeight,{format:xr,type:gi,depthTexture:new fo(g.textureWidth,g.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Se={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new br(x.framebufferWidth,x.framebufferHeight,{format:xr,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(f),h=null,u=await s.requestReferenceSpace(d),Te.setContext(s),Te.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(ne){for(let ye=0;ye<ne.removed.length;ye++){const Se=ne.removed[ye],we=I.indexOf(Se);we>=0&&(I[we]=null,N[we].disconnect(Se))}for(let ye=0;ye<ne.added.length;ye++){const Se=ne.added[ye];let we=I.indexOf(Se);if(we===-1){for(let ue=0;ue<N.length;ue++)if(ue>=I.length){I.push(Se),we=ue;break}else if(I[ue]===null){I[ue]=Se,we=ue;break}if(we===-1)break}const pe=N[we];pe&&pe.connect(Se)}}function q(ne,ye){ye===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ye.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let ye=ne.near,Se=ne.far;y.texture!==null&&(y.depthNear>0&&(ye=y.depthNear),y.depthFar>0&&(Se=y.depthFar)),X.near=G.near=O.near=ye,X.far=G.far=O.far=Se,(B!==X.near||ie!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),B=X.near,ie=X.far),X.layers.mask=ne.layers.mask|6,O.layers.mask=X.layers.mask&-5,G.layers.mask=X.layers.mask&-3;const we=ne.parent,pe=X.cameras;q(X,we);for(let ue=0;ue<pe.length;ue++)q(pe[ue],we);X.projectionMatrix.copy(O.projectionMatrix),X.projectionMatrixInverse.copy(O.projectionMatrixInverse),k===null&&ne.isPerspectiveCamera&&(k={camera:ne,fov:ne.fov,zoom:ne.zoom}),Z(ne,X,we)};function Z(ne,ye,Se){Se===null?ne.matrix.copy(ye.matrixWorld):(ne.matrix.copy(Se.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ye.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ye.projectionMatrix),ne.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=sm*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(g===null&&x===null))return f},this.setFoveation=function(ne){f=ne,g!==null&&(g.fixedFoveation=ne),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(X)},this.getCameraTexture=function(ne){return S[ne]};let U=null;function J(ne,ye){if(v=ye.getViewerPose(h||u),E=ye,v!==null){const Se=v.views;x!==null&&(e.setRenderTargetFramebuffer(L,x.framebuffer),e.setRenderTarget(L));let we=!1;Se.length!==X.cameras.length&&(X.cameras.length=0,we=!0);for(let ve=0;ve<Se.length;ve++){const De=Se[ve];let Je=null;if(x!==null)Je=x.getViewport(De);else{const st=m.getViewSubImage(g,De);Je=st.viewport,ve===0&&(e.setRenderTargetTextures(L,st.colorTexture,st.depthStencilTexture),e.setRenderTarget(L))}let ze=W[ve];ze===void 0&&(ze=new Pi,ze.layers.enable(ve),ze.viewport=new rn,W[ve]=ze),ze.matrix.fromArray(De.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(De.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Je.x,Je.y,Je.width,Je.height),ve===0&&(X.matrix.copy(ze.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),we===!0&&X.cameras.push(ze)}const pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&T){m=r.getBinding();const ve=m.getDepthInformation(Se[0]);ve&&ve.isValid&&ve.texture&&y.init(ve,s.renderState)}if(pe&&pe.includes("camera-access")&&T){e.state.unbindTexture(),m=r.getBinding();for(let ve=0;ve<Se.length;ve++){const De=Se[ve].camera;if(De){let Je=S[De];Je||(Je=new Gx,S[De]=Je);const ze=m.getCameraImage(De);Je.sourceTexture=ze}}}}for(let Se=0;Se<N.length;Se++){const we=I[Se],pe=N[Se];we!==null&&pe!==void 0&&pe.update(we,ye,h||u)}U&&U(ne,ye),ye.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ye}),E=null}const Te=new qx;Te.setAnimationLoop(J),this.setAnimationLoop=function(ne){U=ne},this.dispose=function(){}}}const eI=new Qt,iM=new gt;iM.set(-1,0,0,0,1,0,0,0,1);function tI(n,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,Vx(n)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function s(y,S,w,D,L){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?o(y,S):S.isMeshLambertMaterial?(o(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(o(y,S),m(y,S)):S.isMeshPhongMaterial?(o(y,S),v(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(o(y,S),g(y,S),S.isMeshPhysicalMaterial&&x(y,S,L)):S.isMeshMatcapMaterial?(o(y,S),E(y,S)):S.isMeshDepthMaterial?o(y,S):S.isMeshDistanceMaterial?(o(y,S),T(y,S)):S.isMeshNormalMaterial?o(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?f(y,S,w,D):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function o(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===ni&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===ni&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const w=e.get(S),D=w.envMap,L=w.envMapRotation;D&&(y.envMap.value=D,y.envMapRotation.value.setFromMatrix4(eI.makeRotationFromEuler(L)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(iM),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function f(y,S,w,D){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*w,y.scale.value=D*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function v(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function m(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,w){y.ior.value=S.ior,S.diffuseRoughness>0&&(y.diffuseRoughness.value=S.diffuseRoughness,S.diffuseRoughnessMap&&(y.diffuseRoughnessMap.value=S.diffuseRoughnessMap,t(S.diffuseRoughnessMap,y.diffuseRoughnessMapTransform))),S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ni&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessMinimum,y.iridescenceThicknessMaximum.value=S.iridescenceThicknessMaximum,S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,S){S.matcap&&(y.matcap.value=S.matcap)}function T(y,S){const w=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:s}}function nI(n,e,t,r){let s={},o={};function u(w,D){const L=D.program;r.uniformBlockBinding(w,L,s[w.id])}function d(w,D){let L=s[w.id];L===void 0&&(E(w),L=f(w),s[w.id]=L,w.addEventListener("dispose",y));const N=D.program;r.updateUBOMapping(w,N);const I=e.render.frame;o[w.id]!==I&&(h(w),o[w.id]=I)}function f(w){const D=n.createBuffer(),L=w.__size,N=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,D),n.bufferData(n.UNIFORM_BUFFER,L,N),n.bindBuffer(n.UNIFORM_BUFFER,null),D}function h(w){const D=s[w.id],L=w.uniforms,N=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,D);for(let I=0,b=L.length;I<b;I++){const C=L[I];if(Array.isArray(C))for(let k=0,O=C.length;k<O;k++)v(C[k],I,k,N);else v(C,I,0,N)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function v(w,D,L,N){if(g(w,D,L,N)===!0){const I=w.__offset,b=w.value;if(Array.isArray(b)){let C=0;for(let k=0;k<b.length;k++){const O=b[k],G=T(O,!0);m(O,w.__data,C),C+=G.storage/Float32Array.BYTES_PER_ELEMENT}}else m(b,w.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,I,w.__data)}}function m(w,D,L){typeof w=="number"||typeof w=="boolean"?D[L]=w:w.isMatrix3?(D[L]=w.elements[0],D[L+1]=w.elements[1],D[L+2]=w.elements[2],D[L+3]=0,D[L+4]=w.elements[3],D[L+5]=w.elements[4],D[L+6]=w.elements[5],D[L+7]=0,D[L+8]=w.elements[6],D[L+9]=w.elements[7],D[L+10]=w.elements[8],D[L+11]=0):ArrayBuffer.isView(w)?D.set(w.subarray(0,D.length-L),L):w.toArray(D,L)}function g(w,D,L,N){const I=w.value,b=D+"_"+L;if(Array.isArray(I)){N[b]===void 0&&(N[b]=[]);const C=N[b];let k=!1;for(let O=0;O<I.length;O++)x(I[O],C,O)===!0&&(k=!0);return k}return x(I,N,b)}function x(w,D,L){if(D[L]===void 0)return typeof w=="number"||typeof w=="boolean"?D[L]=w:ArrayBuffer.isView(w)?D[L]=w.slice():D[L]=w.clone(),!0;{const N=D[L];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return D[L]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(N.equals(w)===!1)return N.copy(w),!0}}return!1}function E(w){const D=w.uniforms;let L=0;const N=16;for(let b=0,C=D.length;b<C;b++){const k=Array.isArray(D[b])?D[b]:[D[b]];for(let O=0,G=k.length;O<G;O++){const W=k[O],X=Array.isArray(W.value)?W.value:[W.value],B=Array.isArray(D[b])||Array.isArray(W.value);let ie=L;for(let Q=0,j=X.length;Q<j;Q++){const q=X[Q],Z=T(q,B),U=L%N,J=U%Z.boundary,Te=U+J;L+=J,Te!==0&&N-Te<Z.storage&&(L+=N-Te),Q===0&&(ie=L),L+=Z.storage}const te=W.type==="int"?Int32Array:W.type==="uint"?Uint32Array:Float32Array;W.__data=new te((L-ie)/Float32Array.BYTES_PER_ELEMENT),W.__offset=ie}}const I=L%N;return I>0&&(L+=N-I),w.__size=L,w.__cache={},this}function T(w,D){const L={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(L.boundary=4,L.storage=4):w.isVector2?(L.boundary=8,L.storage=8):w.isVector3||w.isColor?(L.boundary=16,L.storage=12):w.isVector4?(L.boundary=16,L.storage=16):w.isMatrix3?(L.boundary=16,L.storage=48):w.isMatrix4?(L.boundary=16,L.storage=64):w.isTexture?pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(L.boundary=16,L.storage=w.byteLength):pt("WebGLRenderer: Unsupported uniform value type.",w),D===!0&&(L.boundary=16,L.storage=Math.ceil(L.storage/16)*16),L}function y(w){const D=w.target;D.removeEventListener("dispose",y),n.deleteBuffer(s[D.id]),delete s[D.id],delete o[D.id]}function S(){for(const w in s)n.deleteBuffer(s[w]);s={},o={}}return{bind:u,update:d,dispose:S}}const iI=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let dr=null;function rI(){return dr===null&&(dr=new ZA(iI,16,16,us,Tr),dr.name="DFG_LUT",dr.minFilter=ei,dr.magFilter=ei,dr.wrapS=Gr,dr.wrapT=Gr,dr.generateMipmaps=!1,dr.needsUpdate=!0),dr}class aI{constructor(e={}){const{canvas:t=MA(),context:r=null,depth:s=!0,stencil:o=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:g=!1,outputBufferType:x=gi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const T=x,y=new Set([Cm,Am,Rm]),S=new Set([gi,wr,Rl,co,wm,Tm]),w=new Uint32Array(4),D=new Int32Array(4),L={textures:[],min:[],max:[],resolution:[]};let N=null,I=null;const b=[],C=[];let k=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let G=!1,W=null,X=null,B=null,ie=null;this._outputColorSpace=pi;let te=0,Q=0,j=null,q=-1,Z=null;const U=new rn,J=new rn;let Te=null;const ne=new Et(0);let ye=0,Se=t.width,we=t.height,pe=1,ue=null,Ge=null;const ve=new rn(0,0,Se,we),De=new rn(0,0,Se,we);let Je=!1;const ze=new Cl,st=new Om;let We=!1,wt=!1;const Ct=new Qt,un=new ce,Ot=new rn,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let cn=!1;function wn(){return j===null?pe:1}let Y=r;function Tn(P,V){return t.getContext(P,V)}let Ut,Ft,Fe,Zt,it,ot,F,A,ae,be,_e,Pe,Ne,he,me,Ce,H,ge,fe,Oe,Ae,Le,Qe;try{const P={alpha:!0,depth:s,stencil:o,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mm}`),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",He,!1),Y===null){const V="webgl2";if(Y=Tn(V,P),Y===null)throw Tn(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}mt()}catch(P){throw t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",He,!1),Nt("WebGLRenderer: "+P.message),P}function mt(){Ut=new l2(Y),Ut.init(),Ae=new K3(Y,Ut),Ft=new jL(Y,Ut,e,Ae),Fe=new q3(Y,Ut),Ft.reversedDepthBuffer&&g&&Fe.buffers.depth.setReversed(!0),X=Y.createFramebuffer(),B=Y.createFramebuffer(),ie=Y.createFramebuffer(),Zt=new d2(Y),it=new D3,ot=new Y3(Y,Ut,Fe,it,Ft,Ae,Zt),F=new o2(O),A=new hC(Y),Le=new KL(Y,A),ae=new u2(Y,A,Zt,Le),be=new h2(Y,ae,A,Le,Zt),ge=new f2(Y,Ft,ot),me=new JL(it),_e=new I3(O,F,Ut,Ft,Le,me),Pe=new tI(O,it),Ne=new O3,he=new H3(Ut),H=new YL(O,F,Fe,be,E,f),Ce=new X3(O,be,Ft),Qe=new nI(Y,Zt,Ft,Fe),fe=new ZL(Y,Ut,Zt),Oe=new c2(Y,Ut,Zt),Zt.programs=_e.programs,O.capabilities=Ft,O.extensions=Ut,O.properties=it,O.renderLists=Ne,O.shadowMap=Ce,O.state=Fe,O.info=Zt}T!==gi&&(k=new m2(T,t.width,t.height,d,s,o));const Me=new Q3(O,Y);this.xr=Me,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const P=Ut.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Ut.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(P){P!==void 0&&(pe=P,this.setSize(Se,we,!1))},this.getSize=function(P){return P.set(Se,we)},this.setSize=function(P,V,oe=!0){if(Me.isPresenting){pt("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=P,we=V,t.width=Math.floor(P*pe),t.height=Math.floor(V*pe),oe===!0&&(t.style.width=P+"px",t.style.height=V+"px"),k!==null&&k.setSize(t.width,t.height),this.setViewport(0,0,P,V)},this.getDrawingBufferSize=function(P){return P.set(Se*pe,we*pe).floor()},this.setDrawingBufferSize=function(P,V,oe){Se=P,we=V,pe=oe,t.width=Math.floor(P*oe),t.height=Math.floor(V*oe),this.setViewport(0,0,P,V)},this.setEffects=function(P){if(T===gi){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let V=0;V<P.length;V++)if(P[V].isOutputPass===!0){pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(U)},this.getViewport=function(P){return P.copy(ve)},this.setViewport=function(P,V,oe,re){P.isVector4?ve.set(P.x,P.y,P.z,P.w):ve.set(P,V,oe,re),Fe.viewport(U.copy(ve).multiplyScalar(wn()).round())},this.getScissor=function(P){return P.copy(De)},this.setScissor=function(P,V,oe,re){P.isVector4?De.set(P.x,P.y,P.z,P.w):De.set(P,V,oe,re),Fe.scissor(J.copy(De).multiplyScalar(wn()).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(P){Fe.setScissorTest(Je=P)},this.setOpaqueSort=function(P){ue=P},this.setTransparentSort=function(P){Ge=P},this.getClearColor=function(P){return P.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor(...arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha(...arguments)},this.clear=function(P=!0,V=!0,oe=!0){let re=0;if(P){let ee=!1;if(j!==null){const ke=j.texture.format;ee=y.has(ke)}if(ee){const ke=j.texture.type,qe=S.has(ke),Ue=H.getClearColor(),Be=H.getClearAlpha(),Ye=Ue.r,lt=Ue.g,vt=Ue.b;qe?(w[0]=Ye,w[1]=lt,w[2]=vt,w[3]=Be,Y.clearBufferuiv(Y.COLOR,0,w)):(D[0]=Ye,D[1]=lt,D[2]=vt,D[3]=Be,Y.clearBufferiv(Y.COLOR,0,D))}else re|=Y.COLOR_BUFFER_BIT}V&&(re|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(re|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&Y.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),W=P},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",He,!1),H.dispose(),Ne.dispose(),he.dispose(),ot.dispose(),it.dispose(),F.dispose(),be.dispose(),ae.dispose(),Le.dispose(),Qe.dispose(),_e.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Oa),Me.removeEventListener("sessionend",xi),ri.stop()};function rt(P){P.preventDefault(),q_("WebGLRenderer: Context Lost."),G=!0}function ft(){q_("WebGLRenderer: Context Restored."),G=!1;const P=Zt.autoReset,V=Ce.enabled,oe=Ce.autoUpdate,re=Ce.needsUpdate,ee=Ce.type;mt(),Zt.autoReset=P,Ce.enabled=V,Ce.autoUpdate=oe,Ce.needsUpdate=re,Ce.type=ee}function He(P){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function xt(P){const V=P.target;V.removeEventListener("dispose",xt),$t(V)}function $t(P){Ln(P),it.remove(P)}function Ln(P){const V=it.get(P).programs;V!==void 0&&(V.forEach(function(oe){_e.releaseProgram(oe)}),P.isShaderMaterial&&_e.releaseShaderCache(P))}this.renderBufferDirect=function(P,V,oe,re,ee,ke){V===null&&(V=en);const qe=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Ue=ea(P,V,oe,re,ee);Fe.setMaterial(re,qe);let Be=oe.index,Ye=1;if(re.wireframe===!0){if(Be=ae.getWireframeAttribute(oe),Be===void 0)return;Ye=2}const lt=oe.drawRange,vt=oe.attributes.position;let Ke=lt.start*Ye,_t=(lt.start+lt.count)*Ye;ke!==null&&(Ke=Math.max(Ke,ke.start*Ye),_t=Math.min(_t,(ke.start+ke.count)*Ye)),Be!==null?(Ke=Math.max(Ke,0),_t=Math.min(_t,Be.count)):vt!=null&&(Ke=Math.max(Ke,0),_t=Math.min(_t,vt.count));const zt=_t-Ke;if(zt<0||zt===1/0)return;Le.setup(ee,re,Ue,oe,Be);let It,Pt=fe;if(Be!==null&&(It=A.get(Be),Pt=Oe,Pt.setIndex(It)),ee.isMesh)re.wireframe===!0?(Fe.setLineWidth(re.wireframeLinewidth*wn()),Pt.setMode(Y.LINES)):Pt.setMode(Y.TRIANGLES);else if(ee.isLine){let Xt=re.linewidth;Xt===void 0&&(Xt=1),Fe.setLineWidth(Xt*wn()),ee.isLineSegments?Pt.setMode(Y.LINES):ee.isLineLoop?Pt.setMode(Y.LINE_LOOP):Pt.setMode(Y.LINE_STRIP)}else ee.isPoints?Pt.setMode(Y.POINTS):ee.isSprite&&Pt.setMode(Y.TRIANGLES);if(ee.isBatchedMesh)if(Ut.get("WEBGL_multi_draw"))Pt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const Xt=ee._multiDrawStarts,Ze=ee._multiDrawCounts,an=ee._multiDrawCount,et=Be?A.get(Be).bytesPerElement:1,ai=it.get(re).currentProgram.getUniforms();for(let sn=0;sn<an;sn++)ai.setValue(Y,"_gl_DrawID",sn),Pt.render(Xt[sn]/et,Ze[sn])}else if(ee.isInstancedMesh)Pt.renderInstances(Ke,zt,ee.count);else if(oe.isInstancedBufferGeometry){const Xt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ze=Math.min(oe.instanceCount,Xt);Pt.renderInstances(Ke,zt,Ze)}else Pt.render(Ke,zt)};function Zr(P,V,oe,re){W!==null&&P.isNodeMaterial&&W.setObject(re,P),We===!0&&me.setState(P,oe,!1),P.transparent===!0&&P.side===vr&&P.forceSinglePass===!1?(P.side=ni,P.needsUpdate=!0,ar(P,V,re),P.side=ls,P.needsUpdate=!0,ar(P,V,re),P.side=vr):ar(P,V,re)}this.compile=function(P,V,oe=null){oe===null&&(oe=P),W!==null&&W.renderStart(P,V,oe),I=he.get(oe),I.init(V),C.push(I),oe.traverseVisible(function(ee){ee.isLight&&ee.layers.test(V.layers)&&(I.pushLight(ee),ee.castShadow&&I.pushShadow(ee))}),P!==oe&&P.traverseVisible(function(ee){ee.isLight&&ee.layers.test(V.layers)&&(I.pushLight(ee),ee.castShadow&&I.pushShadow(ee))}),I.setupLights(),W!==null&&W.updateLights(I.state.lightsArray),wt=this.localClippingEnabled,We=me.init(this.clippingPlanes,wt),We===!0&&me.setGlobalState(this.clippingPlanes,V),W!==null&&Ce.render(I.state.shadowsArray,oe,V);const re=new Set;return P.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const ke=ee.material;if(ke)if(Array.isArray(ke))for(let qe=0;qe<ke.length;qe++){const Ue=ke[qe];Zr(Ue,oe,V,ee),re.add(Ue)}else Zr(ke,oe,V,ee),re.add(ke)}),I=C.pop(),W!==null&&W.renderEnd(),re},this.compileAsync=function(P,V,oe=null){const re=this.compile(P,V,oe);return new Promise(ee=>{function ke(){if(re.forEach(function(qe){const Be=it.get(qe).currentProgram;(Be===void 0||Be.isReady())&&re.delete(qe)}),re.size===0){ee(P);return}setTimeout(ke,10)}Ut.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let ir=null;function jr(P){ir&&ir(P)}function Oa(){ri.stop()}function xi(){ri.start()}const ri=new qx;ri.setAnimationLoop(jr),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(P){ir=P,Me.setAnimationLoop(P),P===null?ri.stop():ri.start()},Me.addEventListener("sessionstart",Oa),Me.addEventListener("sessionend",xi),this.render=function(P,V){if(V!==void 0&&V.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;W!==null&&W.renderStart(P,V);const oe=Me.enabled===!0&&Me.isPresenting===!0,re=k!==null&&(j===null||oe)&&k.begin(O,j);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(V),V=Me.getCamera()),P.isScene===!0&&P.onBeforeRender(O,P,V,j),I=he.get(P,C.length),I.init(V),I.state.textureUnits=ot.getTextureUnits(),C.push(I),Ct.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),V.isArrayCamera?st.setFromArrayCamera(V):ze.setFromProjectionMatrix(Ct,Ji,V.reversedDepth),wt=this.localClippingEnabled,We=me.init(this.clippingPlanes,wt),N=Ne.get(P,b.length),N.init(),b.push(N),this.info.render.frame++,Me.enabled===!0&&Me.isPresenting===!0){const qe=O.xr.getDepthSensingMesh();qe!==null&&Jr(qe,V,-1/0,O.sortObjects)}Jr(P,V,0,O.sortObjects),N.finish(),W!==null&&W.updateLights(I.state.lightsArray),O.sortObjects===!0&&N.sort(ue,Ge),cn=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,cn&&H.addToRenderList(N,P),this.info.autoReset===!0&&this.info.reset(),We===!0&&me.beginShadows();const ee=I.state.shadowsArray;if(Ce.render(ee,P,V),We===!0&&me.endShadows(),(re&&k.hasRenderPass())===!1){const qe=N.opaque,Ue=N.transmissive;if(I.setupLights(),V.isArrayCamera){const Be=V.cameras;if(Ue.length>0)for(let Ye=0,lt=Be.length;Ye<lt;Ye++){const vt=Be[Ye];Qr(qe,Ue,P,vt)}cn&&H.render(P);for(let Ye=0,lt=Be.length;Ye<lt;Ye++){const vt=Be[Ye];rr(N,P,vt,vt.viewport)}}else Ue.length>0&&Qr(qe,Ue,P,V),cn&&H.render(P),rr(N,P,V)}j!==null&&Q===0&&(ot.updateMultisampleRenderTarget(j),ot.updateRenderTargetMipmap(j)),re&&k.end(O),P.isScene===!0&&P.onAfterRender(O,P,V),Le.resetDefaultState(),q=-1,Z=null,C.pop(),C.length>0?(I=C[C.length-1],ot.setTextureUnits(I.state.textureUnits),We===!0&&me.setGlobalState(O.clippingPlanes,I.state.camera)):I=null,b.pop(),b.length>0?N=b[b.length-1]:N=null,W!==null&&W.renderEnd()};function Jr(P,V,oe,re){if(P.visible===!1)return;if(P.layers.test(V.layers)){if(P.isGroup)oe=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(V);else if(P.isLight)I.pushLight(P),P.castShadow&&I.pushShadow(P);else if(P.isSprite){const qe=V.isArrayCamera?st:ze;if(!P.frustumCulled||P.intersectsFrustum(qe)){re&&Ot.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ct);const Ue=be.update(P),Be=P.material;Be.visible&&N.push(P,Ue,Be,oe,Ot.z,null,V)}}else if(P.isMesh||P.isLine||P.isPoints){const qe=V.isArrayCamera?st:ze;if(!P.frustumCulled||P.intersectsFrustum(qe)){const Ue=be.update(P),Be=P.material;if(re&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ot.copy(P.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Ot.copy(Ue.boundingSphere.center)),Ot.applyMatrix4(P.matrixWorld).applyMatrix4(Ct)),Array.isArray(Be)){const Ye=Ue.groups;for(let lt=0,vt=Ye.length;lt<vt;lt++){const Ke=Ye[lt],_t=Be[Ke.materialIndex];_t&&_t.visible&&N.push(P,Ue,_t,oe,Ot.z,Ke,V)}}else Be.visible&&N.push(P,Ue,Be,oe,Ot.z,null,V)}}}const ke=P.children;for(let qe=0,Ue=ke.length;qe<Ue;qe++)Jr(ke[qe],V,oe,re)}function rr(P,V,oe,re){const{opaque:ee,transmissive:ke,transparent:qe}=P;I.setupLightsView(oe),We===!0&&me.setGlobalState(O.clippingPlanes,oe),re&&Fe.viewport(U.copy(re)),ee.length>0&&$e(ee,V,oe),ke.length>0&&$e(ke,V,oe),qe.length>0&&$e(qe,V,oe),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function Qr(P,V,oe,re){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[re.id]===void 0){const Ke=Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[re.id]=new br(1,1,{generateMipmaps:!0,type:Ke?Tr:gi,minFilter:Ra,samples:Math.max(4,Ft.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const ke=I.state.transmissionRenderTarget[re.id],qe=re.viewport||U;ke.setSize(qe.z*O.transmissionResolutionScale,qe.w*O.transmissionResolutionScale);const Ue=O.getRenderTarget(),Be=O.getActiveCubeFace(),Ye=O.getActiveMipmapLevel();O.setRenderTarget(ke),O.getClearColor(ne),ye=O.getClearAlpha(),ye<1&&O.setClearColor(16777215,.5),O.clear(),cn&&H.render(oe);const lt=O.toneMapping;O.toneMapping=Wr;const vt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),I.setupLightsView(re),We===!0&&me.setGlobalState(O.clippingPlanes,re),$e(P,oe,re),ot.updateMultisampleRenderTarget(ke),ot.updateRenderTargetMipmap(ke),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let _t=0,zt=V.length;_t<zt;_t++){const It=V[_t],{object:Pt,geometry:Xt,material:Ze,group:an}=It;if(Ze.side===vr&&Pt.layers.test(re.layers)){const et=Ze.side;Ze.side=ni,Ze.needsUpdate=!0,Ua(Pt,oe,re,Xt,Ze,an),Ze.side=et,Ze.needsUpdate=!0,Ke=!0}}Ke===!0&&(ot.updateMultisampleRenderTarget(ke),ot.updateRenderTargetMipmap(ke))}O.setRenderTarget(Ue,Be,Ye),O.setClearColor(ne,ye),vt!==void 0&&(re.viewport=vt),O.toneMapping=lt}function $e(P,V,oe){const re=V.isScene===!0?V.overrideMaterial:null;for(let ee=0,ke=P.length;ee<ke;ee++){const qe=P[ee],{object:Ue,geometry:Be,group:Ye}=qe;let lt=qe.material;lt.allowOverride===!0&&re!==null&&(lt=re),Ue.layers.test(oe.layers)&&Ua(Ue,V,oe,Be,lt,Ye)}}function Ua(P,V,oe,re,ee,ke){W!==null&&ee.isNodeMaterial&&W.setObject(P,ee),P.onBeforeRender(O,V,oe,re,ee,ke),P.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ee.onBeforeRender(O,V,oe,re,P,ke),ee.transparent===!0&&ee.side===vr&&ee.forceSinglePass===!1?(ee.side=ni,ee.needsUpdate=!0,O.renderBufferDirect(oe,V,re,ee,P,ke),ee.side=ls,ee.needsUpdate=!0,O.renderBufferDirect(oe,V,re,ee,P,ke),ee.side=vr):O.renderBufferDirect(oe,V,re,ee,P,ke),P.onAfterRender(O,V,oe,re,ee,ke)}function zn(P){let V=0;for(const oe of P)oe.texture!==null&&V++;return V}function ar(P,V,oe){V.isScene!==!0&&(V=en);const re=it.get(P),ee=I.state.lights,ke=I.state.shadowsArray,qe=ee.state.version,Ue=_e.getParameters(P,ee.state,ke,V,oe,I.state.lightProbeGridArray),Be=_e.getProgramCacheKey(Ue);let Ye=re.programs;re.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?V.environment:null,re.fog=V.fog;const lt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;re.envMap=F.get(P.envMap||re.environment,lt),re.envMapRotation=re.environment!==null&&P.envMap===null?V.environmentRotation:P.envMapRotation,Ye===void 0&&(P.addEventListener("dispose",xt),Ye=new Map,re.programs=Ye,re.programVariants=new Map);let vt=Ye.get(Be);if(vt!==void 0){if(re.currentProgram===vt&&re.lightsStateVersion===qe)return Fa(P,Ue),vt}else Ue.uniforms=_e.getUniforms(P),W!==null&&P.isNodeMaterial&&W.build(P,oe,Ue),P.onBeforeCompile(Ue,O),vt=_e.acquireProgram(Ue,Be),Ye.set(Be,vt),re.uniforms=Ue.uniforms;const Ke=re.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ke.clippingPlanes=me.uniform),Fa(P,Ue),re.needsLights=Rr(P),re.lightsStateVersion=qe,re.needsLights&&(Ke.ambientLightColor.value=ee.state.ambient,Ke.lightProbe.value=ee.state.probe,Ke.sunLights.value=ee.state.sun,Ke.sunLightShadows.value=ee.state.sunShadow,Ke.directionalLights.value=ee.state.directional,Ke.directionalLightShadows.value=ee.state.directionalShadow,Ke.spotLights.value=ee.state.spot,Ke.spotLightShadows.value=ee.state.spotShadow,Ke.rectAreaLights.value=ee.state.rectArea,Ke.ltc_1.value=ee.state.rectAreaLTC1,Ke.ltc_2.value=ee.state.rectAreaLTC2,Ke.pointLights.value=ee.state.point,Ke.pointLightShadows.value=ee.state.pointShadow,Ke.hemisphereLights.value=ee.state.hemi,Ke.sunShadowMatrix.value=ee.state.sunShadowMatrix,Ke.sunShadowCascade.value=ee.state.sunShadowCascade,Ke.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ke.spotLightMatrix.value=ee.state.spotLightMatrix,Ke.spotLightMap.value=ee.state.spotLightMap,Ke.pointShadowMatrix.value=ee.state.pointShadowMatrix),re.numLightProbeGrids=zn(I.state.lightProbeGridArray),re.currentProgram=vt,re.uniformsList=null,vt}function gs(P,V,oe,re,ee){const ke=it.get(P),qe=ke.currentProgram.id+","+re+","+ee;let Ue=ke.programVariants.get(qe);return Ue===void 0?(Ue=ar(P,V,oe),ke.programVariants.set(qe,Ue)):(ke.currentProgram=Ue,ke.uniformsList=null,ke.outputColorSpace=re,ke.toneMapping=ee),Ue}function Ht(P){if(P.uniformsList===null){const V=P.currentProgram.getUniforms();P.uniformsList=Fc.seqWithValue(V.seq,P.uniforms)}return P.uniformsList}function Fa(P,V){const oe=it.get(P);oe.outputColorSpace=V.outputColorSpace,oe.batching=V.batching,oe.batchingColor=V.batchingColor,oe.instancing=V.instancing,oe.instancingColor=V.instancingColor,oe.instancingMorph=V.instancingMorph,oe.skinning=V.skinning,oe.morphTargets=V.morphTargets,oe.morphNormals=V.morphNormals,oe.morphColors=V.morphColors,oe.morphTargetsCount=V.morphTargetsCount,oe.numClippingPlanes=V.numClippingPlanes,oe.numIntersection=V.numClipIntersection,oe.vertexAlphas=V.vertexAlphas,oe.vertexTangents=V.vertexTangents,oe.toneMapping=V.toneMapping}function ea(P,V,oe,re,ee){V.isScene!==!0&&(V=en),ot.resetTextureUnits();const ke=V.fog,qe=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?V.environment:null,Ue=j===null?O.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Rt.workingColorSpace,Be=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,Ye=F.get(re.envMap||qe,Be),lt=re.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,vt=!!oe.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ke=!!oe.morphAttributes.position,_t=!!oe.morphAttributes.normal,zt=!!oe.morphAttributes.color;let It=Wr;re.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(It=O.toneMapping);const Pt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Xt=Pt!==void 0?Pt.length:0,Ze=it.get(re),an=I.state.lights;if(We===!0&&(wt===!0||P!==Z)){const Tt=P===Z&&re.id===q;me.setState(re,P,Tt)}let et=!1,ai=!1;re.version===Ze.__version?Ze.needsLights&&Ze.lightsStateVersion!==an.state.version||ee.isBatchedMesh&&Ze.batching===!1||!ee.isBatchedMesh&&Ze.batching===!0||ee.isBatchedMesh&&Ze.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&Ze.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&Ze.instancing===!1||!ee.isInstancedMesh&&Ze.instancing===!0||ee.isSkinnedMesh&&Ze.skinning===!1||!ee.isSkinnedMesh&&Ze.skinning===!0||ee.isInstancedMesh&&Ze.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ze.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Ze.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Ze.instancingMorph===!1&&ee.morphTexture!==null||Ze.envMap!==Ye||re.fog===!0&&Ze.fog!==ke||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==me.numPlanes||Ze.numIntersection!==me.numIntersection)||Ze.vertexAlphas!==lt||Ze.vertexTangents!==vt||Ze.morphTargets!==Ke||Ze.morphNormals!==_t||Ze.morphColors!==zt||Ze.morphTargetsCount!==Xt||Ze.numLightProbeGrids!==zn(I.state.lightProbeGridArray)?et=!0:(Ze.outputColorSpace!==Ue||Ze.toneMapping!==It)&&(ai=!0):(et=!0,Ze.__version=re.version);let sn=Ze.currentProgram;(et===!0||ai===!0)&&(sn=ai===!0?gs(re,V,ee,Ue,It):ar(re,V,ee),W&&re.isNodeMaterial&&W.onUpdateProgram(re,sn,Ze));let Oi=!1,Xn=!1,si=!1;const St=sn.getUniforms(),jt=Ze.uniforms;if(Fe.useProgram(sn.program)&&(Oi=!0,Xn=!0,si=!0),re.id!==q&&(q=re.id,Xn=!0),Oi||Z!==P){Fe.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),St.setValue(Y,"projectionMatrix",P.projectionMatrix),St.setValue(Y,"viewMatrix",P.matrixWorldInverse);const kt=St.map.cameraPosition;kt!==void 0&&kt.setValue(Y,un.setFromMatrixPosition(P.matrixWorld)),Ft.logarithmicDepthBuffer&&St.setValue(Y,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&St.setValue(Y,"isOrthographic",P.isOrthographicCamera===!0),Z!==P&&(Z=P,Xn=!0,si=!0)}if(Ze.needsLights&&(an.state.sunShadowMap.length>0&&St.setValue(Y,"sunShadowMap",an.state.sunShadowMap,ot),an.state.directionalShadowMap.length>0&&St.setValue(Y,"directionalShadowMap",an.state.directionalShadowMap,ot),an.state.spotShadowMap.length>0&&St.setValue(Y,"spotShadowMap",an.state.spotShadowMap,ot),an.state.pointShadowMap.length>0&&St.setValue(Y,"pointShadowMap",an.state.pointShadowMap,ot)),ee.isSkinnedMesh){St.setOptional(Y,ee,"bindMatrix"),St.setOptional(Y,ee,"bindMatrixInverse");const Tt=ee.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),St.setValue(Y,"boneTexture",Tt.boneTexture,ot))}ee.isBatchedMesh&&(St.setOptional(Y,ee,"batchingTexture"),St.setValue(Y,"batchingTexture",ee._matricesTexture,ot),St.setOptional(Y,ee,"batchingIdTexture"),St.setValue(Y,"batchingIdTexture",ee._indirectTexture,ot),St.setOptional(Y,ee,"batchingColorTexture"),ee._colorsTexture!==null&&St.setValue(Y,"batchingColorTexture",ee._colorsTexture,ot));const gn=oe.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&ge.update(ee,oe,sn),(Xn||Ze.receiveShadow!==ee.receiveShadow)&&(Ze.receiveShadow=ee.receiveShadow,St.setValue(Y,"receiveShadow",ee.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&V.environment!==null&&(jt.envMapIntensity.value=V.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=rI()),Xn){if(St.setValue(Y,"toneMappingExposure",O.toneMappingExposure),Ze.needsLights&&ka(jt,si),ke&&re.fog===!0&&Pe.refreshFogUniforms(jt,ke),Pe.refreshMaterialUniforms(jt,re,pe,we,I.state.transmissionRenderTarget[P.id]),Ze.needsLights&&Ze.numLightProbeGrids>0){const Tt=L;let kt=0;for(const dn of I.state.lightProbeGridArray)dn.texture!==null&&(Tt.textures[kt]=dn.texture,Tt.min[kt]=dn.boundingBox.min,Tt.max[kt]=dn.boundingBox.max,Tt.resolution[kt]=dn.resolution,kt++);for(const dn in Tt)Tt[dn].length=kt;jt.probesSH.value=Tt.textures,jt.probesMin.value=Tt.min,jt.probesMax.value=Tt.max,jt.probesResolution.value=Tt.resolution}Fc.upload(Y,Ht(Ze),jt,ot)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Fc.upload(Y,Ht(Ze),jt,ot),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&St.setValue(Y,"center",ee.center),St.setValue(Y,"modelViewMatrix",ee.modelViewMatrix),St.setValue(Y,"normalMatrix",ee.normalMatrix),St.setValue(Y,"modelMatrix",ee.matrixWorld),re.uniformsGroups!==void 0){const Tt=re.uniformsGroups;for(let kt=0,dn=Tt.length;kt<dn;kt++){const Ui=Tt[kt];Qe.update(Ui,sn),Qe.bind(Ui,sn)}}return sn}function ka(P,V){P.ambientLightColor.needsUpdate=V,P.lightProbe.needsUpdate=V,P.sunLights.needsUpdate=V,P.sunLightShadows.needsUpdate=V,P.directionalLights.needsUpdate=V,P.directionalLightShadows.needsUpdate=V,P.pointLights.needsUpdate=V,P.pointLightShadows.needsUpdate=V,P.spotLights.needsUpdate=V,P.spotLightShadows.needsUpdate=V,P.rectAreaLights.needsUpdate=V,P.hemisphereLights.needsUpdate=V}function Rr(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(P,V,oe){const re=it.get(P);re.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),it.get(P.texture).__webglTexture=V,it.get(P.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:oe,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,V){const oe=it.get(P);oe.__webglFramebuffer=V,oe.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(P,V=0,oe=0){j=P,te=V,Q=oe;let re=null,ee=!1,ke=!1;if(P){const Ue=it.get(P);if(Ue.__useDefaultFramebuffer!==void 0){Fe.bindFramebuffer(Y.FRAMEBUFFER,Ue.__webglFramebuffer),U.copy(P.viewport),J.copy(P.scissor),Te=P.scissorTest,Fe.viewport(U),Fe.scissor(J),Fe.setScissorTest(Te),q=-1;return}else if(Ue.__webglFramebuffer===void 0)ot.setupRenderTarget(P);else if(Ue.__hasExternalTextures)ot.rebindTextures(P,it.get(P.texture).__webglTexture,it.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const lt=P.depthTexture;if(Ue.__boundDepthTexture!==lt){if(lt!==null&&it.has(lt)&&(P.width!==lt.image.width||P.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(P)}}const Be=P.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ke=!0);const Ye=it.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ye[V])?re=Ye[V][oe]:re=Ye[V],ee=!0):P.samples>0&&ot.useMultisampledRTT(P)===!1?re=it.get(P).__webglMultisampledFramebuffer:Array.isArray(Ye)?re=Ye[oe]:re=Ye,U.copy(P.viewport),J.copy(P.scissor),Te=P.scissorTest}else U.copy(ve).multiplyScalar(pe).floor(),J.copy(De).multiplyScalar(pe).floor(),Te=Je;if(oe!==0&&(re=X),Fe.bindFramebuffer(Y.FRAMEBUFFER,re)&&Fe.drawBuffers(P,re),Fe.viewport(U),Fe.scissor(J),Fe.setScissorTest(Te),ee){const Ue=it.get(P.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ue.__webglTexture,oe)}else if(ke){const Ue=V;for(let Be=0;Be<P.textures.length;Be++){const Ye=it.get(P.textures[Be]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Be,Ye.__webglTexture,oe,Ue)}}else if(P!==null&&oe!==0){const Ue=it.get(P.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ue.__webglTexture,oe)}q=-1};function Ba(P){const V=it.get(P);return(V.__readFormat!==P.format||V.__readType!==P.type)&&(V.__readFormat=P.format,V.__readType=P.type,V.__formatReadable=Ft.textureFormatReadable(P.format),V.__typeReadable=Ft.textureTypeReadable(P.type)),V}this.readRenderTargetPixels=function(P,V,oe,re,ee,ke,qe,Ue=0){if(!(P&&P.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=it.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&qe!==void 0&&(Be=Be[qe],Array.isArray(Be)&&(Be=Be[0])),Be){Fe.bindFramebuffer(Y.FRAMEBUFFER,Be);try{const Ye=P.textures[Ue],lt=Ye.format,vt=Ye.type;P.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ue);const Ke=Ba(Ye);if(Ke.__formatReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ke.__typeReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=P.width-re&&oe>=0&&oe<=P.height-ee&&Y.readPixels(V,oe,re,ee,Ae.convert(lt),Ae.convert(vt),ke)}finally{const Ye=j!==null?it.get(j).__webglFramebuffer:null;Fe.bindFramebuffer(Y.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(P,V,oe,re,ee,ke,qe,Ue=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=it.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&qe!==void 0&&(Be=Be[qe],Array.isArray(Be)&&(Be=Be[0])),Be)if(V>=0&&V<=P.width-re&&oe>=0&&oe<=P.height-ee){Fe.bindFramebuffer(Y.FRAMEBUFFER,Be);const Ye=P.textures[Ue],lt=Ye.format,vt=Ye.type;P.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ue);const Ke=Ba(Ye);if(Ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _t=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,_t),Y.bufferData(Y.PIXEL_PACK_BUFFER,ke.byteLength,Y.STREAM_READ),Y.readPixels(V,oe,re,ee,Ae.convert(lt),Ae.convert(vt),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);const zt=j!==null?it.get(j).__webglFramebuffer:null;Fe.bindFramebuffer(Y.FRAMEBUFFER,zt);const It=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await EA(Y,It,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,_t),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,ke),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(_t),Y.deleteSync(It),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,V=null,oe=0){const re=Math.pow(2,-oe),ee=Math.floor(P.image.width*re),ke=Math.floor(P.image.height*re),qe=V!==null?V.x:0,Ue=V!==null?V.y:0;ot.setTexture2D(P,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,oe,0,0,qe,Ue,ee,ke),Fe.unbindTexture()},this.copyTextureToTexture=function(P,V,oe=null,re=null,ee=0,ke=0){let qe,Ue,Be,Ye,lt,vt,Ke,_t,zt;const It=P.isCompressedTexture?P.mipmaps[ke]:P.image;if(oe!==null)qe=oe.max.x-oe.min.x,Ue=oe.max.y-oe.min.y,Be=oe.isBox3?oe.max.z-oe.min.z:1,Ye=oe.min.x,lt=oe.min.y,vt=oe.isBox3?oe.min.z:0;else{const St=Math.pow(2,-ee);qe=Math.floor(It.width*St),Ue=Math.floor(It.height*St),P.isDataArrayTexture?Be=It.depth:P.isData3DTexture?Be=Math.floor(It.depth*St):Be=1,Ye=0,lt=0,vt=0}re!==null?(Ke=re.x,_t=re.y,zt=re.z):(Ke=0,_t=0,zt=0);const Pt=Ae.convert(V.format),Xt=Ae.convert(V.type);let Ze;V.isData3DTexture?(ot.setTexture3D(V,0),Ze=Y.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(ot.setTexture2DArray(V,0),Ze=Y.TEXTURE_2D_ARRAY):(ot.setTexture2D(V,0),Ze=Y.TEXTURE_2D),Fe.activeTexture(Y.TEXTURE0),Fe.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,V.flipY),Fe.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),Fe.pixelStorei(Y.UNPACK_ALIGNMENT,V.unpackAlignment);const an=Fe.getParameter(Y.UNPACK_ROW_LENGTH),et=Fe.getParameter(Y.UNPACK_IMAGE_HEIGHT),ai=Fe.getParameter(Y.UNPACK_SKIP_PIXELS),sn=Fe.getParameter(Y.UNPACK_SKIP_ROWS),Oi=Fe.getParameter(Y.UNPACK_SKIP_IMAGES);Fe.pixelStorei(Y.UNPACK_ROW_LENGTH,It.width),Fe.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,It.height),Fe.pixelStorei(Y.UNPACK_SKIP_PIXELS,Ye),Fe.pixelStorei(Y.UNPACK_SKIP_ROWS,lt),Fe.pixelStorei(Y.UNPACK_SKIP_IMAGES,vt);const Xn=P.isDataArrayTexture||P.isData3DTexture,si=V.isDataArrayTexture||V.isData3DTexture;if(P.isDepthTexture){const St=it.get(P),jt=it.get(V),gn=it.get(St.__renderTarget),Tt=it.get(jt.__renderTarget);Fe.bindFramebuffer(Y.READ_FRAMEBUFFER,gn.__webglFramebuffer),Fe.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let kt=0;kt<Be;kt++)Xn&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,it.get(P).__webglTexture,ee,vt+kt),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,it.get(V).__webglTexture,ke,zt+kt)),Y.blitFramebuffer(Ye,lt,Ye+qe,lt+Ue,Ke,_t,Ke+qe,_t+Ue,Y.DEPTH_BUFFER_BIT,Y.NEAREST);Fe.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ee!==0||P.isRenderTargetTexture||it.has(P)){const St=it.get(P),jt=it.get(V);Fe.bindFramebuffer(Y.READ_FRAMEBUFFER,B),Fe.bindFramebuffer(Y.DRAW_FRAMEBUFFER,ie);for(let gn=0;gn<Be;gn++)Xn?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,St.__webglTexture,ee,vt+gn):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,St.__webglTexture,ee),si?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,jt.__webglTexture,ke,zt+gn):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,jt.__webglTexture,ke),ee!==0?Y.blitFramebuffer(Ye,lt,Ye+qe,lt+Ue,Ke,_t,Ke+qe,_t+Ue,Y.COLOR_BUFFER_BIT,Y.NEAREST):si?Y.copyTexSubImage3D(Ze,ke,Ke,_t,zt+gn,Ye,lt,qe,Ue):Y.copyTexSubImage2D(Ze,ke,Ke,_t,Ye,lt,qe,Ue);Fe.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else si?P.isDataTexture||P.isData3DTexture?Y.texSubImage3D(Ze,ke,Ke,_t,zt,qe,Ue,Be,Pt,Xt,It.data):V.isCompressedArrayTexture?Y.compressedTexSubImage3D(Ze,ke,Ke,_t,zt,qe,Ue,Be,Pt,It.data):Y.texSubImage3D(Ze,ke,Ke,_t,zt,qe,Ue,Be,Pt,Xt,It):P.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,ke,Ke,_t,qe,Ue,Pt,Xt,It.data):P.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,ke,Ke,_t,It.width,It.height,Pt,It.data):Y.texSubImage2D(Y.TEXTURE_2D,ke,Ke,_t,qe,Ue,Pt,Xt,It);Fe.pixelStorei(Y.UNPACK_ROW_LENGTH,an),Fe.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,et),Fe.pixelStorei(Y.UNPACK_SKIP_PIXELS,ai),Fe.pixelStorei(Y.UNPACK_SKIP_ROWS,sn),Fe.pixelStorei(Y.UNPACK_SKIP_IMAGES,Oi),ke===0&&V.generateMipmaps===!0&&V.mipmapsAutoUpdate===!0&&Y.generateMipmap(Ze),Fe.unbindTexture()},this.initRenderTarget=function(P){it.get(P).__webglFramebuffer===void 0&&ot.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?ot.setTextureCube(P,0):P.isData3DTexture?ot.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?ot.setTexture2DArray(P,0):ot.setTexture2D(P,0),Fe.unbindTexture()},this.resetState=function(){te=0,Q=0,j=null,Fe.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}const sl=new ce;function Ci(n,e,t,r,s,o){const u=2*Math.PI*s/4,d=Math.max(o-2*s,0),f=Math.PI/4;sl.copy(e),sl[r]=0,sl.normalize();const h=.5*u/(u+d),v=1-sl.angleTo(n)/f;return Math.sign(sl[t])===1?v*h:d/(u+d)+h+h*(1-v)}class Bm extends vo{constructor(e=1,t=1,r=1,s=2,o=.1){const u=s*2+1;if(o=Math.min(e/2,t/2,r/2,o),super(1,1,1,u,u,u),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:r,segments:s,radius:o},u===1)return;const d=this.toNonIndexed();this.index=null,this.attributes.position=d.attributes.position,this.attributes.normal=d.attributes.normal,this.attributes.uv=d.attributes.uv;const f=new ce,h=new ce,v=new ce(e,t,r).divideScalar(2).subScalar(o),m=this.attributes.position.array,g=this.attributes.normal.array,x=this.attributes.uv.array,E=m.length/6,T=new ce,y=.5/u;for(let S=0,w=0;S<m.length;S+=3,w+=2)switch(f.fromArray(m,S),h.copy(f),h.x-=Math.sign(h.x)*y,h.y-=Math.sign(h.y)*y,h.z-=Math.sign(h.z)*y,h.normalize(),m[S+0]=v.x*Math.sign(f.x)+h.x*o,m[S+1]=v.y*Math.sign(f.y)+h.y*o,m[S+2]=v.z*Math.sign(f.z)+h.z*o,g[S+0]=h.x,g[S+1]=h.y,g[S+2]=h.z,Math.floor(S/E)){case 0:T.set(1,0,0),x[w+0]=Ci(T,h,"z","y",o,r),x[w+1]=1-Ci(T,h,"y","z",o,t);break;case 1:T.set(-1,0,0),x[w+0]=1-Ci(T,h,"z","y",o,r),x[w+1]=1-Ci(T,h,"y","z",o,t);break;case 2:T.set(0,1,0),x[w+0]=1-Ci(T,h,"x","z",o,e),x[w+1]=Ci(T,h,"z","x",o,r);break;case 3:T.set(0,-1,0),x[w+0]=1-Ci(T,h,"x","z",o,e),x[w+1]=1-Ci(T,h,"z","x",o,r);break;case 4:T.set(0,0,1),x[w+0]=1-Ci(T,h,"x","y",o,e),x[w+1]=1-Ci(T,h,"y","x",o,t);break;case 5:T.set(0,0,-1),x[w+0]=Ci(T,h,"x","y",o,e),x[w+1]=1-Ci(T,h,"y","x",o,t);break}}static fromJSON(e){return new Bm(e.width,e.height,e.depth,e.segments,e.radius)}}let ol;const Gh=new Map;function sI(n){return Gh.has(n)||Gh.set(n,new Promise(e=>{const t=new Image;t.onload=()=>e(t),t.onerror=()=>e(null),t.src=n})),Gh.get(n)}function oI(){if(ol==null||ol(),ol=null,!document.querySelector(".match-mode:not(.lobby-mode) .rows"))return;const n=document.querySelector(".page-shell"),e=document.createElement("canvas");e.className="clubhouse-scene",n.prepend(e);let t;try{t=new aI({canvas:e,antialias:!0})}catch{e.remove();return}n.classList.add("clubhouse-ready");const r=document.createElement("div");r.className="clubhouse-score-strip",r.setAttribute("aria-label","Player scores"),document.querySelectorAll(".header-player").forEach(ue=>{var ve,De;const Ge=document.createElement("span");Ge.textContent=(((ve=ue.querySelector(".header-player-copy b"))==null?void 0:ve.textContent)||"Player")+" · "+(((De=ue.querySelector(".header-player-score strong"))==null?void 0:De.textContent)||"0")+" bulls",r.append(Ge)}),n.append(r),t.setPixelRatio(Math.min(Math.max(devicePixelRatio,2),2.5)),t.shadowMap.enabled=!0,t.shadowMap.type=hx,t.toneMapping=Em,t.toneMappingExposure=1.3;const s=new GA;s.background=new Et("#31273c"),s.fog=new Dm("#31273c",20,40);const o=new Pi(38,1,.1,60);o.position.set(0,11.8,16.5),o.lookAt(0,.65,-.8);const u=[],d=[],f=[];let h=!1,v;const m=(ue,Ge=.65)=>{const ve=new iC({color:ue,roughness:Ge});return u.push(ve),ve},g=m("#92582f",.4),x=m("#c48c50",.4),E=m("#233d72",.98),T=m("#f8e9cc"),y=m("#251d26"),S=m("#e3ad4d",.3);function w(ue,Ge,ve=s){u.push(ue);const De=new Ia(ue,Ge);return De.castShadow=De.receiveShadow=!0,ve.add(De),De}function D(ue,Ge,ve,De,Je,ze,st,We=s,wt=.06){const Ct=w(new Bm(ue,Ge,ve,3,Math.min(wt,ue/2,Ge/2,ve/2)),De,We);return Ct.position.set(Je,ze,st),Ct}function L(ue,Ge,ve,De,Je,ze,st,We){const wt=w(new Um(1,24,16),st,We);return wt.position.set(ue,Ge,ve),wt.scale.set(De,Je,ze),wt}s.add(new sC("#ffe6bc","#364a80",2.2));const N=new uC("#ffd1a1",3);N.position.set(-4,9,5),N.castShadow=!0,N.shadow.mapSize.set(1024,1024),Object.assign(N.shadow.camera,{left:-7,right:7,top:8,bottom:-8}),N.shadow.bias=-.001,s.add(N);const I=new py("#8da3ff",22,20);I.position.set(4,5,-4),s.add(I),D(24,.2,25,g,0,-.9,-2),D(22,10,.3,m("#513a4d"),0,3.5,-7.8);for(let ue=-10;ue<=10;ue+=1.5)D(.07,9,.12,g,ue,3.5,-7.55);for(const ue of[-1,1]){D(2.4,5,.65,g,ue*5.7,1.7,-6.8);for(let De=0;De<4.5;De+=1.15){D(2.35,.12,.85,x,ue*5.7,De,-6.5);for(let Je=0;Je<6;Je++)D(.22,.55+Je%3*.12,.35,m(["#8b5879","#728a78","#c09060"][Je%3]),ue*5.7-.8+Je*.3,De+.4,-6.4)}w(new Zc(.7,.5,32,1,!0),S).position.set(ue*3.5,4.6,-5),D(.04,2,.04,S,ue*3.5,5.7,-5);const ve=new py("#ffc16e",18,9);ve.position.set(ue*3.5,4.3,-5),s.add(ve)}D(2.5,1.8,.1,x,0,3.6,-7.5),D(2.25,1.55,.1,m("#744656"),0,3.6,-7.4);const b=document.createElement("canvas");b.width=512,b.height=256;const C=b.getContext("2d");C.fillStyle="#ffe7ac",C.textAlign="center",C.font="bold 100px Georgia",C.fillText("Take 5",256,150);const k=new Sc(b);u.push(k);const O=new Uc({map:k,transparent:!0});u.push(O),w(new os(2.2,1.1),O).position.set(0,3.65,-7.3);function W(ue,Ge,ve,De){const Je=w(new Pl(ue,ue,ve,80),De);return Je.scale.z=1.16,Je.position.y=Ge,Je}W(4.1,-.14,.42,g),W(4.02,.07,.12,x),W(3.73,.14,.08,E);const X=document.createElement("canvas");X.width=X.height=128;const B=X.getContext("2d");B.fillStyle="#7587a2",B.fillRect(0,0,128,128);for(let ue=0;ue<128;ue+=3)B.fillStyle=ue%2?"#637594":"#8999b0",B.fillRect(ue,0,1,128),B.fillRect(0,ue,128,1);const ie=new Sc(X);ie.wrapS=ie.wrapT=Wc,ie.repeat.set(18,18),u.push(ie),E.bumpMap=ie,E.bumpScale=.02;function te(ue,Ge){const ve=new io;ve.position.set(Ge,.2,-4.15),ve.scale.setScalar(1.3),s.add(ve);const De=m(ue==="fox"?"#e88b34":ue==="bear"?"#a7754b":"#7eae43"),Je=m(ue==="fox"?"#ead3a8":ue==="bear"?"#4f5683":"#c89e4f");if(D(1.65,1.9,.6,m("#773d47"),0,.7,-.5,ve,.25),L(0,.85,0,.64,.72,.45,Je,ve),L(0,1.85,.04,.67,.63,.52,De,ve),ue==="fox")for(const ze of[-1,1]){const st=w(new Zc(.25,.64,3),De,ve);st.position.set(ze*.47,2.43,0),st.rotation.z=-ze*.22,L(ze*.24,1.64,.42,.33,.22,.16,T,ve)}if(ue==="bear")for(const ze of[-1,1])L(ze*.53,2.29,0,.24,.25,.19,De,ve),L(ze*.53,2.29,.13,.12,.13,.06,T,ve);if(ue==="frog")for(const ze of[-1,1])L(ze*.33,2.23,.25,.29,.3,.25,De,ve);for(const ze of[-1,1])L(ze*.25,1.95,.49,.135,.16,.055,T,ve),L(ze*.25,1.94,.54,.065,.085,.025,y,ve),L(ze*.27,1.98,.565,.024,.03,.012,T,ve),L(ze*.48,.35,.55,.23,.16,.28,De,ve);L(0,1.61,.5,.28,.18,.1,ue==="frog"?De:T,ve),L(0,1.7,.61,.11,.075,.065,y,ve),L(0,1.48,.56,.12,.065,.035,y,ve),f.push(ve)}te("fox",-2.2),te("bear",0),te("frog",2.2);function Q(ue,Ge,ve,De){const Je=document.createElement("canvas");Je.width=Je.height=128;const ze=Je.getContext("2d");ze.fillStyle="#322039",ze.font="bold 70px Arial",ze.textAlign="center",ze.fillText(ue,64,90);const st=new Sc(Je);u.push(st);const We=new Uc({map:st,transparent:!0});u.push(We);const wt=w(new os(.4,.4),We);wt.position.set(Ge,ve,De),wt.rotation.x=-Math.PI/2}async function j(ue,Ge){const ve=Number(ue.dataset.cardNumber||ue.dataset.card),De=ve===55?7:ve%11===0?5:ve%10===0?3:ve%5===0?2:1,Je={1:"one-bull",2:"two-bulls",3:"three-bulls",5:"five-bulls",7:"seven-bulls"}[De],ze=await sI(new URL("assets/cards/card-"+Je+".png",document.baseURI).href);if(h||!ze)return;const st=document.createElement("canvas");st.width=1024,st.height=1536;const We=st.getContext("2d");We.imageSmoothingEnabled=!0,We.imageSmoothingQuality="high",We.fillStyle="#fffdf8",We.fillRect(0,0,1024,1536),We.save(),We.beginPath(),We.roundRect(0,0,1024,1536,48),We.clip(),We.drawImage(ze,ze.width*.065,ze.height*.045,ze.width*.87,ze.height*.91,0,0,1024,1536),We.restore();const wt=String(ve);We.textAlign="center",We.textBaseline="middle",We.font="900 "+(wt.length===3?440:530)+"px Arial, sans-serif",We.lineJoin="round",We.strokeStyle="#fffdf8",We.lineWidth=30,We.strokeText(wt,512,795),We.fillStyle="#101622",We.fillText(wt,512,795);const Ct={1:"#244d9b",2:"#158145",3:"#087eac",5:"#cf3032",7:"#b67e12"}[De];for(const cn of[!1,!0])We.save(),cn&&(We.translate(1024,1536),We.rotate(Math.PI)),We.beginPath(),We.roundRect(18,18,988,1508,40),We.clip(),We.fillStyle=Ct,We.beginPath(),We.moveTo(18,18),We.lineTo(1006,18),We.lineTo(1006,165),We.quadraticCurveTo(720,130,18,238),We.closePath(),We.fill(),We.textAlign="left",We.textBaseline="middle",We.font="900 "+(wt.length===3?154:190)+"px Arial, sans-serif",We.fillStyle="#ffffff",We.fillText(wt,42,118),We.restore();const un=new Sc(st);un.colorSpace=pi,un.anisotropy=t.capabilities.getMaxAnisotropy(),u.push(un);const Ot=new Uc({map:un,side:vr,toneMapped:!1,fog:!1});u.push(Ot);const en=w(new os(.68,1.02),Ot,Ge);en.position.z=.075,e.dataset.textures=String(Number(e.dataset.textures||0)+1)}function q(ue,Ge,ve,De,Je=0,ze=!1){const st=new io;return s.add(st),st.position.set(Ge,ve,De),st.rotation.x=-1.35,st.position.y+=.1,st.rotation.z=Je,D(.7,1.04,.065,T,0,0,0,st,.045),j(ue,st),ze&&(st.rotation.x=-.72,ue.classList.contains("selected")&&(st.position.y+=.3,st.position.z-=.2,D(.76,1.1,.025,S,0,0,-.025,st,.045)),st.userData.control=ue,d.push(st)),st}document.querySelectorAll(".rows .row-lane").forEach((ue,Ge)=>{var Je;const ve=-2.2+Ge*1.12;D(6.25,.012,.025,m("#67799b"),0,.195,ve+.57),Q(String(Ge+1),-3.1,.21,ve),ue.querySelectorAll(".playing-card").forEach((ze,st)=>q(ze,-2.35+st*.81,.24,ve)),w(new Pl(.24,.24,.07,32),S).position.set(2.9,.24,ve),Q(((Je=ue.querySelector(".row-total strong"))==null?void 0:Je.textContent)||"0",2.9,.285,ve)}),s.add(o);const Z=[...document.querySelectorAll(".hand-card")];Z.forEach((ue,Ge)=>{const ve=Z.length===1?0:Ge/(Z.length-1)-.5,De=q(ue,0,0,0,-ve*.4,!0);o.add(De),De.position.set(ve*1.45,-1.32-Math.abs(ve)*.15,-5+(ue.classList.contains("selected")?.15:0)),De.rotation.x=0,ue.classList.contains("selected")&&(De.position.y+=.22),De.scale.setScalar(.52)});const U=new dC,J=new bt;let Te;e.addEventListener("pointerdown",ue=>{Te={x:ue.clientX,y:ue.clientY}}),e.addEventListener("pointerup",ue=>{if(!Te||Math.hypot(ue.clientX-Te.x,ue.clientY-Te.y)>12)return;const Ge=e.getBoundingClientRect();J.set((ue.clientX-Ge.left)/Ge.width*2-1,-(ue.clientY-Ge.top)/Ge.height*2+1),U.setFromCamera(J,o);const ve=U.intersectObjects(d,!0)[0];if(ve){let De=ve.object;for(;De&&!De.userData.control;)De=De.parent;De!=null&&De.userData.control&&!De.userData.control.disabled&&De.userData.control.click()}});const ne=()=>{const ue=n.getBoundingClientRect();t.setSize(ue.width,ue.height,!1),o.aspect=ue.width/ue.height,o.zoom=.8,o.updateProjectionMatrix(),o.updateMatrixWorld(),e.dataset.handTargets=JSON.stringify(d.map(Ge=>{const ve=Ge.getWorldPosition(new ce).project(o);return{x:(ve.x+1)*ue.width/2,y:(1-ve.y)*ue.height/2}}))},ye=new ResizeObserver(ne);ye.observe(n),ne();let Se=0;const we=matchMedia("(prefers-reduced-motion: reduce)").matches;function pe(ue){h||(v=requestAnimationFrame(pe),!(ue-Se<33)&&(Se=ue,we||f.forEach((Ge,ve)=>Ge.rotation.z=Math.sin(ue*8e-4+ve)*.012),t.render(s,o)))}v=requestAnimationFrame(pe),ol=()=>{h=!0,cancelAnimationFrame(v),ye.disconnect(),u.forEach(ue=>ue.dispose()),t.dispose(),t.forceContextLoss(),e.remove(),r.remove(),n.classList.remove("clubhouse-ready")}}const rM="take5-sound-enabled",lI={tap:{src:"assets/audio/click1.wav",volume:.12},select:{src:"assets/audio/click2.wav",volume:.17},card:{src:"assets/audio/click3.wav",volume:.2},deal:{src:"assets/audio/rollover1.wav",volume:.13},row:{src:"assets/audio/click1.wav",volume:.2}};let Li=localStorage.getItem(rM)!=="false",hn,ii,zm=!1,ds;const yl=new Set,By=new Map,aM=[523.25,null,659.25,783.99,null,659.25,587.33,null,523.25,null,392,523.25,null,587.33,523.25,null],cm=.42,uI=aM.length*cm;function cI(){if(hn)return hn;const n=window.AudioContext||window.webkitAudioContext;return n?(hn=new n,ii=hn.createGain(),ii.gain.value=0,ii.connect(hn.destination),hn):null}function zy(n,e,t,r=.22,s="sine"){if(!hn||!ii||!n)return;const o=hn.createOscillator(),u=hn.createGain();o.type=s,o.frequency.setValueAtTime(n,e),u.gain.setValueAtTime(1e-4,e),u.gain.linearRampToValueAtTime(r,e+.035),u.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(u),u.connect(ii),o.start(e),o.stop(e+t+.02)}function Hm(){if(!Li||!zm||!hn||hn.state!=="running")return;const n=hn.currentTime+.08;aM.forEach((e,t)=>{e&&zy(e,n+t*cm,.3,.2,"sine")}),[0,4,8,12].forEach((e,t)=>zy([261.63,196,220,196][t],n+e*cm,.6,.09,"triangle")),ds=setTimeout(()=>{ds=null,Hm()},uI*1e3)}function sM(){!Li||!zm||!hn||!ii||(ii.gain.cancelScheduledValues(hn.currentTime),ii.gain.setTargetAtTime(.08,hn.currentTime,1.2),ds||Hm())}function Gm(){if(!Li)return;const n=cI();(n==null?void 0:n.state)==="suspended"&&n.resume().catch(()=>{}),sM()}function ms(n){zm=n,n||(clearTimeout(ds),ds=null),!(!hn||!ii)&&(ii.gain.cancelScheduledValues(hn.currentTime),ii.gain.setTargetAtTime(Li&&n?.08:0,hn.currentTime,n?1.2:.35),Li&&n&&Hm())}function Na(n){if(!Li)return;const e=lI[n];if(!e)return;const t=By.get(n)||new Audio(e.src);t.preload="auto",By.set(n,t);const r=t.cloneNode();r.volume=e.volume,yl.add(r),r.addEventListener("ended",()=>yl.delete(r),{once:!0}),r.play().catch(()=>yl.delete(r))}function dm(){return Li}function oM(){return Li=!Li,localStorage.setItem(rM,String(Li)),Li?(Gm(),sM()):(yl.forEach(n=>{n.pause(),n.currentTime=0}),yl.clear(),clearTimeout(ds),ds=null,hn&&ii&&(ii.gain.cancelScheduledValues(hn.currentTime),ii.gain.setTargetAtTime(0,hn.currentTime,.12))),Li}/*! Capacitor: https://capacitorjs.com/ - MIT License */var po;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(po||(po={}));class Vh extends Error{constructor(e,t,r){super(e),this.message=e,this.code=t,this.data=r}}const dI=n=>{var e,t;return n!=null&&n.androidBridge?"android":!((t=(e=n==null?void 0:n.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},fI=n=>{const e=n.CapacitorCustomPlatform||null,t=n.Capacitor||{},r=t.Plugins=t.Plugins||{},s=()=>e!==null?e.name:dI(n),o=()=>s()!=="web",u=m=>{const g=h.get(m);return!!(g!=null&&g.platforms.has(s())||d(m))},d=m=>{var g;return(g=t.PluginHeaders)===null||g===void 0?void 0:g.find(x=>x.name===m)},f=m=>n.console.error(m),h=new Map,v=(m,g={})=>{const x=h.get(m);if(x)return console.warn(`Capacitor plugin "${m}" already registered. Cannot register plugins twice.`),x.proxy;const E=s(),T=d(m);let y;const S=async()=>(!y&&E in g?y=typeof g[E]=="function"?y=await g[E]():y=g[E]:e!==null&&!y&&"web"in g&&(y=typeof g.web=="function"?y=await g.web():y=g.web),y),w=(C,k)=>{var O,G;if(T){const W=T==null?void 0:T.methods.find(X=>k===X.name);if(W)return W.rtype==="promise"?X=>t.nativePromise(m,k.toString(),X):(X,B)=>t.nativeCallback(m,k.toString(),X,B);if(C)return(O=C[k])===null||O===void 0?void 0:O.bind(C)}else{if(C)return(G=C[k])===null||G===void 0?void 0:G.bind(C);throw new Vh(`"${m}" plugin is not implemented on ${E}`,po.Unimplemented)}},D=C=>{let k;const O=(...G)=>{const W=S().then(X=>{const B=w(X,C);if(B){const ie=B(...G);return k=ie==null?void 0:ie.remove,ie}else throw new Vh(`"${m}.${C}()" is not implemented on ${E}`,po.Unimplemented)});return C==="addListener"&&(W.remove=async()=>k()),W};return O.toString=()=>`${C.toString()}() { [capacitor code] }`,Object.defineProperty(O,"name",{value:C,writable:!1,configurable:!1}),O},L=D("addListener"),N=D("removeListener"),I=(C,k)=>{const O=L({eventName:C},k),G=async()=>{const X=await O;N({eventName:C,callbackId:X},k)},W=new Promise(X=>O.then(()=>X({remove:G})));return W.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await G()},W},b=new Proxy({},{get(C,k){switch(k){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return T?I:L;case"removeListener":return N;default:return D(k)}}});return r[m]=b,h.set(m,{name:m,proxy:b,platforms:new Set([...Object.keys(g),...T?[E]:[]])}),b};return t.convertFileSrc||(t.convertFileSrc=m=>m),t.getPlatform=s,t.handleError=f,t.isNativePlatform=o,t.isPluginAvailable=u,t.registerPlugin=v,t.Exception=Vh,t.DEBUG=!!t.DEBUG,t.isLoggingEnabled=!!t.isLoggingEnabled,t},hI=n=>n.Capacitor=fI(n),Jc=hI(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),od=Jc.registerPlugin;class Vm{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(t);const o=this.windowListeners[e];o&&!o.registered&&this.addWindowListener(o),r&&this.sendRetainedArgumentsForEvent(e);const u=async()=>this.removeListener(e,t);return Promise.resolve({remove:u})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,r){const s=this.listeners[e];if(!s){if(r){let o=this.retainedEventArguments[e];o||(o=[]),o.push(t),this.retainedEventArguments[e]=o}return}s.forEach(o=>o(t))}hasListeners(e){var t;return!!(!((t=this.listeners[e])===null||t===void 0)&&t.length)}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:r=>{this.notifyListeners(t,r)}}}unimplemented(e="not implemented"){return new Jc.Exception(e,po.Unimplemented)}unavailable(e="not available"){return new Jc.Exception(e,po.Unavailable)}async removeListener(e,t){const r=this.listeners[e];if(!r)return;const s=r.indexOf(t);s!==-1&&this.listeners[e].splice(s,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(r=>{this.notifyListeners(e,r)}))}}const Hy=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Gy=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class pI extends Vm{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[s,o]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=Gy(s).trim(),o=Gy(o).trim(),t[s]=o}),t}async setCookie(e){try{const t=Hy(e.key),r=Hy(e.value),s=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",o=(e.path||"/").replace("path=",""),u=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${r||""}${s}; path=${o}; ${u};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}od("CapacitorCookies",{web:()=>new pI});const mI=async n=>new Promise((e,t)=>{const r=new FileReader;r.onload=()=>{const s=r.result;e(s.indexOf(",")>=0?s.split(",")[1]:s)},r.onerror=s=>t(s),r.readAsDataURL(n)}),gI=(n={})=>{const e=Object.keys(n);return Object.keys(n).map(s=>s.toLocaleLowerCase()).reduce((s,o,u)=>(s[o]=n[e[u]],s),{})},vI=(n,e=!0)=>n?Object.entries(n).reduce((r,s)=>{const[o,u]=s;let d,f;return Array.isArray(u)?(f="",u.forEach(h=>{d=e?encodeURIComponent(h):h,f+=`${o}=${d}&`}),f.slice(0,-1)):(d=e?encodeURIComponent(u):u,f=`${o}=${d}`),`${r}&${f}`},"").substr(1):null,_I=(n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),s=gI(n.headers)["content-type"]||"";if(typeof n.data=="string")t.body=n.data;else if(s.includes("application/x-www-form-urlencoded")){const o=new URLSearchParams;for(const[u,d]of Object.entries(n.data||{}))o.set(u,d);t.body=o.toString()}else if(s.includes("multipart/form-data")||n.data instanceof FormData){const o=new FormData;if(n.data instanceof FormData)n.data.forEach((d,f)=>{o.append(f,d)});else for(const d of Object.keys(n.data))o.append(d,n.data[d]);t.body=o;const u=new Headers(t.headers);u.delete("content-type"),t.headers=u}else(s.includes("application/json")||typeof n.data=="object")&&(t.body=JSON.stringify(n.data));return t};class yI extends Vm{async request(e){const t=_I(e,e.webFetchExtra),r=vI(e.params,e.shouldEncodeUrlParams),s=r?`${e.url}?${r}`:e.url,o=await fetch(s,t),u=o.headers.get("content-type")||"";let{responseType:d="text"}=o.ok?e:{};u.includes("application/json")&&(d="json");let f,h;switch(d){case"arraybuffer":case"blob":h=await o.blob(),f=await mI(h);break;case"json":f=await o.json();break;case"document":case"text":default:f=await o.text()}const v={};return o.headers.forEach((m,g)=>{v[g]=m}),{data:f,headers:v,status:o.status,url:o.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}od("CapacitorHttp",{web:()=>new yI});var Vy;(function(n){n.Dark="DARK",n.Light="LIGHT",n.Default="DEFAULT"})(Vy||(Vy={}));var Wy;(function(n){n.StatusBar="StatusBar",n.NavigationBar="NavigationBar"})(Wy||(Wy={}));class SI extends Vm{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}od("SystemBars",{web:()=>new SI});const Wh=od("App",{web:()=>jy(()=>import("./web-tUUMmWV0.js"),[]).then(n=>new n.AppWeb)}),lM=Jc.isNativePlatform(),xI="https://take-five-friends-game.onrender.com/";lM&&(document.documentElement.classList.add("capacitor-native"),Wh.addListener("backButton",()=>{var r;const n=document.querySelector("#rulesDialog");if(n!=null&&n.open){n.close();return}const e=document.querySelector("#gameMenuPanel");if(e&&!e.classList.contains("is-hidden")){(r=document.querySelector("#gameMenuToggle"))==null||r.dispatchEvent(new CustomEvent("rnpress",{bubbles:!0}));return}const t=document.querySelector("#gameMenuToggle");if(t){t.dispatchEvent(new CustomEvent("rnpress",{bubbles:!0}));return}Wh.exitApp()}),Wh.addListener("appUrlOpen",({url:n})=>{try{const e=new URL(n).searchParams.get("room");/^\d{4}$/.test(e||"")&&window.location.assign(`/?room=${encodeURIComponent(e)}`)}catch{}}));const Wm=[{id:"take-5",name:"Take 5",category:"Card game",status:"available",route:"take-5",description:"A clever card game where every move counts. Avoid the bulls!",featuredDescription:"Think ahead, play your cards, and avoid collecting the bulls!",artwork:"take5"},{id:"phase-10",name:"Phase 10",category:"Card game",status:"available",route:"phase-10",description:"Build sets, make runs, and race through all ten phases.",artwork:"phase10"},{id:"splendor",name:"Splendor",category:"Strategy game",status:"coming-soon",route:null,description:"Collect precious gems, build your empire, and earn prestige.",artwork:"splendor"}],fr=Wm.find(n=>n.status==="available");function uM(n){return`<span class="game-status game-status--${n.status}">${n.status==="available"?"Available now":"Coming soon"}</span>`}function cM(n){return n.artwork==="take5"?'<div class="game-art game-art--take5"><span class="game-art-card game-art-card--one" aria-hidden="true"></span><span class="game-art-card game-art-card--two" aria-hidden="true"></span><span class="game-art-card game-art-card--three" aria-hidden="true"></span><span class="game-art-bull">♞</span></div>':n.artwork==="phase10"?'<div class="game-art game-art--phase10"><span class="phase-orb phase-orb--blue">7</span><span class="phase-orb phase-orb--red">10</span><span class="phase-orb phase-orb--gold">★</span><span class="phase-run">4 · 5 · 6 · 7</span></div>':'<div class="game-art game-art--splendor"><span class="gem gem--emerald"></span><span class="gem gem--ruby"></span><span class="gem gem--sapphire"></span><span class="splendor-crown">♛</span></div>'}function MI(n){const e=n.status==="available";return`<article class="game-card game-card--${n.id}" data-game-id="${n.id}" ${e?`data-game-tile="play" role="button" tabindex="0" aria-label="Play ${n.name}"`:""}>
    ${cM(n)}
    <div class="game-card-copy">
      <div class="game-card-meta"><span>${n.category}</span>${uM(n)}</div>
      <h3>${n.name}</h3>
      <p>${n.description}</p>
      <button class="game-card-action" data-game-action="${e?"play":"soon"}" data-game-id="${n.id}" ${e?"":'aria-disabled="true"'}>${e?"Play now":"Coming soon"} <span>→</span></button>
    </div>
  </article>`}function $y(){return Wm.map(MI).join("")}const EI=["blue","green","red","yellow"],fm=["2 sets of 3","1 set of 3 + 1 run of 4","1 set of 4 + 1 run of 4","1 run of 7","1 run of 8","1 run of 9","2 sets of 4","7 cards of one color","1 set of 5 + 1 set of 2","1 set of 5 + 1 set of 3"],bI=["🧑🏻","🦊","🐻","🐸"];let wI=0;const $h=(n,e=null)=>({id:`phase-card-${wI++}`,value:n,color:e}),Ca=n=>n.value==="wild",Qi=n=>n.value==="skip";function TI(){const n=[];for(let e=0;e<2;e++)EI.forEach(t=>{for(let r=1;r<=12;r++)n.push($h(r,t))});for(let e=0;e<8;e++)n.push($h("wild"));for(let e=0;e<4;e++)n.push($h("skip"));return RI(n)}function RI(n){const e=n.slice();for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e}function AI(n){return Ca(n)?25:Qi(n)?15:n.value>=10?10:5}function $m(n){return n.filter(e=>!Ca(e)&&!Qi(e))}function Xm(n,e){return n.length===e&&!n.some(Qi)}function hr(n,e){const t=$m(n).map(r=>r.value);return Xm(n,e)&&t.length>0&&t.every(r=>r===t[0])}function ll(n,e){const t=$m(n).map(o=>o.value);if(!Xm(n,e)||t.length===0||new Set(t).size!==t.length)return!1;const r=Math.min(...t),s=Math.max(...t);return s-r<e&&Math.max(1,s-e+1)<=Math.min(r,13-e)}function CI(n,e){const t=$m(n).map(r=>r.color);return Xm(n,e)&&t.length>0&&t.every(r=>r===t[0])}function dM(n,e,t=0,r=[],s=[]){if(r.length===e)return s.push(r),s;for(let o=t;o<=n.length-(e-r.length);o++)dM(n,e,o+1,r.concat(o),s);return s}function Qs(n,e,t,r,s){return n.length!==e+r?!1:dM(n,e).some(o=>{const u=o.map(f=>n[f]),d=n.filter((f,h)=>!o.includes(h));return t(u,e)&&s(d,r)})}function fM(n,e){switch(n){case 1:return Qs(e,3,hr,3,hr);case 2:return Qs(e,3,hr,4,ll);case 3:return Qs(e,4,hr,4,ll);case 4:return ll(e,7);case 5:return ll(e,8);case 6:return ll(e,9);case 7:return Qs(e,4,hr,4,hr);case 8:return CI(e,7);case 9:return Qs(e,5,hr,2,hr);case 10:return Qs(e,5,hr,3,hr);default:return!1}}function hM(n,e){const t=TI(),r=[{id:"phase-you",name:n||"You",avatar:e,phase:1,score:0,hand:[],laid:!1,phaseCards:[]},{id:"phase-milo",name:"Milo",avatar:"🦊",phase:1,score:0,hand:[],laid:!1,phaseCards:[]},{id:"phase-nora",name:"Nora",avatar:"🐻",phase:1,score:0,hand:[],laid:!1,phaseCards:[]},{id:"phase-pip",name:"Pip",avatar:"🐸",phase:1,score:0,hand:[],laid:!1,phaseCards:[]}];return r.forEach(s=>{s.hand=t.splice(0,10)}),{players:r,drawPile:t,discardPile:[t.pop()],current:0,turn:"draw",selected:[],message:"Draw a card to begin.",round:1,finished:!1,skipped:null}}const _i=document.querySelector("#app"),Qc=document.querySelector("#rulesDialog"),Xy=new URLSearchParams(location.search),qm="take5-host-save",fs="take5-guest-session",M={screen:"home",mode:"online",tab:"rooms",name:localStorage.getItem("take5-name")||"",peer:null,host:!1,connection:null,connections:new Map,clientId:null,roomId:"",players:[],game:null,selected:null,busy:!1,toastTimer:null,botCount:3,roundFlashTimer:null,submittedTurn:!1,animating:!1,replay:null,replayKey:null,revealOrigins:{},stageSeen:new Set,stageTurnKey:null,countdownTimer:null,countdownInterval:null,reconnectTimer:null,peerReconnectTimer:null,disconnectAdvanceTimer:null,resumeToken:null,recoveringGuest:!1,reactionCooldowns:new Map,screenTransition:!1,phase10:null,phase10Avatar:"🧑🏻"};document.addEventListener("pointerdown",Gm,{passive:!0});document.addEventListener("keydown",Gm);function pM(){var n;if(M.peer){if(M.peer.disconnected)try{M.peer.reconnect()}catch{ud(M.peer)}if(!M.host&&M.roomId){const e=M.peer;(n=M.connection)!=null&&n.open?M.connection.send({type:"sync"}):(M.connection=null,clearTimeout(M.reconnectTimer),cd(M.roomId,e))}}}window.addEventListener("online",pM);document.addEventListener("visibilitychange",()=>{document.hidden||pM()});document.querySelector("#homeLink").addEventListener("click",n=>{n.preventDefault(),Da()});fx(Qc);Kt(".dialog-close",()=>Qc.close());var Zy;if(Xy.get("room")){const n=Xy.get("room");M.tab="rooms",M.roomPrefill=/^\d{4}$/.test(n)?n:((Zy=n.match(/^take5-(\d{4})$/))==null?void 0:Zy[1])||""}const Xh=ld(qm),Vr=ld(fs),qh=M.roomPrefill||(Vr==null?void 0:Vr.roomId)||"",PI=!!Vr&&(!M.roomPrefill||Vr.roomId===M.roomPrefill);Xh&&(M.roomPrefill===Xh.roomId||!M.roomPrefill&&!PI)?(Da(),KI(Xh)):(Da(),qh&&(Vr==null?void 0:Vr.roomId)===qh&&(M.resumeToken=Vr.token,M.recoveringGuest=!0,ng(qh)));function ld(n){try{return JSON.parse(localStorage.getItem(n)||"null")}catch{return null}}function Wt(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function er(n,e,{nativeControls:t=!0}={}){const r=M.screenTransition&&!matchMedia("(prefers-reduced-motion: reduce)").matches;if(GR(n),n.innerHTML=e,requestAnimationFrame(oI),t)try{fx(n)}catch(s){console.error("Could not mount React Native Web controls.",s)}r&&(n.animate([{opacity:0,transform:"translateY(10px) scale(.992)"},{opacity:1,transform:"translateY(0) scale(1)"}],{duration:300,easing:"cubic-bezier(.2,.78,.25,1)"}),M.screenTransition=!1)}function Kt(n,e){(typeof n=="string"?document.querySelectorAll(n):[n]).forEach(r=>{if(!r)return;const s=o=>{Na("tap"),e(o,r)};r.addEventListener("rnpress",s),r.addEventListener("click",o=>{r.closest(".rn-control-root")||s(o)})})}function LI(){const n=dm();return`<button class="icon-button sound-toggle" id="soundToggle" aria-label="${n?"Mute sound":"Enable sound"}" aria-pressed="${n}" title="${n?"Mute sound":"Enable sound"}"><span class="sound-toggle-glyph" aria-hidden="true">♪</span><span class="sound-toggle-state" aria-hidden="true">${n?"":"×"}</span></button>`}function II(){Kt("#soundToggle",()=>{oM(),Kr()})}function ti(n){return n===55?7:n%11===0?5:n%10===0?3:n%5===0?2:1}function DI(n){return{1:"one-bull",2:"two-bulls",3:"three-bulls",5:"five-bulls",7:"seven-bulls"}[ti(n)]}function Mr(){return'<span class="bull-icon" aria-hidden="true"><img class="bull-icon-art" src="assets/bullhead.svg" alt="" draggable="false"></span>'}function qy(n){return`<span class="bull-marks" aria-label="${ti(n)} bullheads">${Array.from({length:ti(n)},()=>'<i class="bull-head" aria-hidden="true"></i>').join("")}</span>`}function no(n,e=""){const t=DI(n),r=Wt(n),s=String(n).length;return`<span class="card-face ${e} tone-${t} value-${s}-digits" aria-hidden="true"><img class="card-art" src="assets/cards/card-${t}.png" alt="" draggable="false"><span class="card-corner top-left">${r}</span><span class="card-corner top-right">${r}</span>${qy(n)}<span class="card-value-outline">${r}</span><span class="card-value">${r}</span><span class="card-bottom-meta"><span class="card-corner bottom-left">${r}</span>${qy(n)}<span class="card-corner bottom-right">${r}</span></span></span>`}function mM(n,e){return n.human?["🧑🏻","👩🏽","🧔🏼","👩🏻","🧑🏾","👩🏼","🧑🏽","👨🏾","👩🏻","🧑🏼"][e%10]:["🦊","🐻","🐸","🐼","🐯","🐵","🐰","🦝","🦁"][Math.max(0,e-1)%9]}function NI(){return Array.from({length:104},(n,e)=>e+1).sort(()=>Math.random()-.5)}function Kr(){var h,v;const n=document.querySelector("#homeLink"),e=document.querySelector("#headerRoster"),t=document.querySelector("#topbarRight"),r=M.screen==="home",s=["lobby","game","result"].includes(M.screen);if(n&&(n.innerHTML='<span class="brand-mark">CG</span><span>Card <span class="brand-dot">Games</span></span>'),r){e.innerHTML="",er(t,`<div class="platform-profile" aria-label="Player profile"><span class="platform-avatar">${Wt((M.name||"P").slice(0,1).toUpperCase())}</span><span class="platform-profile-copy"><b>${Wt(M.name||"Player")}</b><small>Ready to play</small></span></div>`,{nativeControls:!1}),Kt("[data-platform-nav]",(m,g)=>{var E;const x=g.dataset.platformNav;x==="take5"?Km():x==="games"?(E=document.querySelector("#games"))==null||E.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"smooth"})});return}const o=M.screen==="lobby"?M.players:((h=M.game)==null?void 0:h.players)||M.players,u=!!M.game&&["game","result"].includes(M.screen);if(e&&(e.innerHTML=s?o.map((m,g)=>{var y;const x=m.id===M.clientId,E=((y=m.hand)==null?void 0:y.length)||0,T=u?`${E} cards`:m.human?m.ready?"READY":"ONLINE":"BOT";return`<div class="header-player ${x?"is-you":""} ${m.ready?"is-ready":""}" data-player-id="${Wt(m.id)}"><span class="header-avatar">${mM(m,g)}</span><span class="header-player-copy"><b>${Wt(m.name)}${x?" · you":""}</b><small>${T}</small></span>${u?`<span class="header-player-score bull-counter-badge" aria-label="${m.total||0} bullheads"><strong>${m.total||0}</strong>${Mr()}</span><span class="opponent-cards" aria-label="${E} cards in hand">${Array.from({length:Math.min(4,E)},(S,w)=>`<i style="--i:${w}"></i>`).join("")}</span>`:`<i class="header-player-status ${m.online===!1?"is-offline":""}"></i>`}</div>`}).join(""):""),!t)return;if(!s){er(t,`<span class="top-note"><span class="online-dot"></span> the table is open</span>${LI()}<button class="icon-button" id="rulesButton" aria-label="How to play" title="How to play">?</button>`),II(),Kt("#rulesButton",()=>Qc.showModal());return}const d=((v=M.mode)==null?void 0:v.startsWith("online"))||M.screen==="lobby",f=[];f.push(`<button class="menu-action" data-menu-action="toggle-sound"><span class="menu-action-icon">${dm()?"♫":"♪"}</span><span>${dm()?"Sound on":"Sound off"}</span></button>`),M.screen==="game"&&d&&f.push(`<div class="menu-reaction-section"><button class="menu-action menu-reaction-toggle" data-menu-action="toggle-reactions" aria-expanded="false"><span class="menu-action-icon">☺</span><span>Send a reaction</span><span class="menu-action-chevron" aria-hidden="true">⌄</span></button><div class="menu-reaction-picker" role="group" aria-label="Choose a reaction" hidden>${Ul.map(m=>`<button class="menu-reaction-option" type="button" role="menuitem" data-reaction="${m}" aria-label="Send ${m} reaction">${m}</button>`).join("")}</div></div>`),d&&M.roomId&&(f.push('<button class="menu-action" data-menu-action="sync-room"><span class="menu-action-icon">⟳</span><span>Refresh room sync</span></button>'),f.push('<button class="menu-action" data-menu-action="copy-invite"><span class="menu-action-icon">↗</span><span>Copy invite link</span></button>'),f.push('<button class="menu-action" data-menu-action="copy-code"><span class="menu-action-icon">#</span><span>Copy room code</span></button>')),M.screen==="lobby"&&M.host&&f.push('<button class="menu-action" data-menu-action="start-game"><span class="menu-action-icon">▶</span><span>Start game</span></button>'),M.screen==="game"&&(!d||M.host)&&f.push('<button class="menu-action" data-menu-action="new-game"><span class="menu-action-icon">⟳</span><span>Start new game</span></button>'),M.screen==="result"&&f.push('<button class="menu-action" data-menu-action="new-game"><span class="menu-action-icon">⟳</span><span>Play again</span></button>'),f.push('<button class="menu-action" data-menu-action="rules"><span class="menu-action-icon">?</span><span>How to play</span></button>'),(d||M.screen==="game"||M.screen==="result")&&f.push('<button class="menu-action is-danger" data-menu-action="leave"><span class="menu-action-icon">↩</span><span>Leave game</span></button>'),er(t,`<div class="menu-shell"><button class="menu-trigger" id="gameMenuToggle" aria-label="Game menu" aria-haspopup="menu" aria-expanded="false" title="Game menu"><span class="menu-icon" aria-hidden="true"></span></button><div class="game-menu-panel is-hidden" id="gameMenuPanel" role="menu">${f.join("")}</div></div>`),Kt("#gameMenuToggle",(m,g)=>{var T;const x=document.querySelector("#gameMenuPanel"),E=g.getAttribute("aria-expanded")!=="true";g.setAttribute("aria-expanded",String(E)),x.classList.toggle("is-hidden",!E),(T=g.closest(".menu-shell"))==null||T.classList.toggle("is-open",E)}),Kt(".menu-action",(m,g)=>{var T,y,S;const x=g.dataset.menuAction,E=document.querySelector("#gameMenuPanel");if(x==="toggle-reactions"){const w=g.nextElementSibling,D=g.getAttribute("aria-expanded")!=="true";g.setAttribute("aria-expanded",String(D)),w.hidden=!D,(T=g.closest(".menu-reaction-section"))==null||T.classList.toggle("is-expanded",D);return}if(E&&E.classList.add("is-hidden"),(y=document.querySelector("#gameMenuToggle"))==null||y.setAttribute("aria-expanded","false"),(S=document.querySelector(".menu-shell"))==null||S.classList.remove("is-open"),x==="copy-invite")tD();else if(x==="copy-code")EM(M.roomId,"Room code copied");else if(x==="sync-room")jI();else if(x==="toggle-sound")oM(),Kr();else if(x==="rules")Qc.showModal();else if(x==="leave")bM();else if(x==="start-game")ed();else if(x==="new-game"){if(d&&M.host&&M.players.forEach(w=>{w.score=0,w.total=0}),d&&!M.host)return vi("Ask the host to start another game.");d?ed():Jm()}}),Kt(".menu-reaction-option",(m,g)=>yM(g.dataset.reaction))}function Da(){dd(),document.body.classList.remove("match-mode","lobby-mode","take5-entry-mode"),document.body.classList.add("home-mode","platform-home"),M.screen="home",M.game=null,M.selected=null,ms(!0);try{if(!fr||typeof $y!="function")throw new Error("The game registry is unavailable.");Kr(),er(_i,`<section class="platform-homepage">
      <section class="platform-welcome" aria-labelledby="platformWelcomeTitle"><div><h1 id="platformWelcomeTitle">Ready to play?</h1><p>Pick your game. Bring your friends. Let the fun begin.</p></div><span class="platform-online"><i></i> Games ready</span></section>
      <section class="platform-featured" data-game-tile="play" data-game-id="${fr.id}" role="button" tabindex="0" aria-label="Play ${Wt(fr.name)}" aria-labelledby="featuredTitle"><div class="featured-art">${cM(fr)}</div><div class="featured-copy"><div class="featured-meta"><span>Featured game</span>${uM(fr)}</div><h2 id="featuredTitle">${Wt(fr.name)}</h2><p>${fr.featuredDescription}</p><button class="platform-primary" data-game-action="play" data-game-id="${fr.id}">Play now <span>→</span></button></div><div class="featured-detail"><span>2–10 players</span><span>10 cards each</span><span>15 min</span></div></section>
      <section class="platform-library" id="games" aria-labelledby="gamesTitle"><div class="section-heading"><div><span>Game library</span><h2 id="gamesTitle">Your Game Collection</h2><p>Choose a game and start playing.</p></div></div><div class="game-library-grid">${$y()}</div></section>
    </section>`,{nativeControls:!1}),Kt("[data-game-action]",(n,e)=>{e.dataset.gameAction==="play"?Yh(e.dataset.gameId):vi(`${e.dataset.gameId==="phase-10"?"Phase 10":"Splendor"} is coming soon.`)}),document.querySelectorAll('[data-game-tile="play"]').forEach(n=>{n.addEventListener("click",e=>{e.target.closest("[data-game-action]")||Yh(n.dataset.gameId||fr.id)}),n.addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),Yh(n.dataset.gameId||fr.id))})})}catch(n){console.error("Could not render the Card Games lobby.",n),er(_i,`<section class="platform-fallback" role="alert"><span>Card Games</span><h1>We couldn’t load the game lobby.</h1><p>${Wt(n.message||"Please try again.")}</p><button class="platform-primary" id="retryLobby">Try again <span>↻</span></button></section>`,{nativeControls:!1}),Kt("#retryLobby",Da)}}function Yh(n){const e=Wm.find(t=>t.id===n);if(!e||e.status!=="available")return vi("This game is coming soon.");e.route==="phase-10"?Ym():Km()}function Ym(){dd(),M.phase10=null,M.screen="phase10-setup",document.body.classList.remove("match-mode","platform-home","lobby-mode"),document.body.classList.add("home-mode","phase10-mode"),ms(!1),Kr(),er(_i,`<section class="phase10-setup"><div class="phase10-setup-art"><div class="p10-floating-card p10-card-blue">7</div><div class="p10-floating-card p10-card-green">8</div><div class="p10-floating-card p10-card-red">10</div></div><div class="phase10-setup-copy"><span class="phase10-kicker">Phase 10 · local table</span><h1>Choose your player</h1><p>Choose your character, build your phase, and be first through all ten challenges.</p><div class="memoji-grid" role="group" aria-label="Choose your player">${bI.map(n=>`<button class="memoji-choice ${n===M.phase10Avatar?"is-selected":""}" data-phase-avatar="${n}" aria-pressed="${n===M.phase10Avatar}" aria-label="Choose ${OI(n)}">${hm(n)}</button>`).join("")}</div><button class="phase10-play" id="startPhase10">Start game <span>→</span></button><button class="phase10-back" id="backToLobby">Back to games</button></div></section>`,{nativeControls:!1}),Kt("[data-phase-avatar]",(n,e)=>{M.phase10Avatar=e.dataset.phaseAvatar,Ym()}),Kt("#startPhase10",()=>{M.phase10=hM(M.name,M.phase10Avatar),M.screen="phase10",Xr()}),Kt("#backToLobby",Da)}function OI(n){return{"🧑🏻":"Player","🦊":"Milo","🐻":"Nora","🐸":"Pip"}[n]||"Player"}function hm(n,e=""){return`<span class="avatar-3d avatar-3d--${{"🧑🏻":"player","🦊":"fox","🐻":"bear","🐸":"frog"}[n]||"player"} ${e}" aria-hidden="true"></span>`}function eo(n,e){(typeof n=="string"?document.querySelectorAll(n):[n]).forEach(r=>{if(!r)return;let s=!1;const o=u=>{s||r.getAttribute("aria-disabled")==="true"||(s=!0,u.preventDefault(),Na("tap"),e(u,r))};r.addEventListener("pointerup",o),r.addEventListener("click",o)})}function UI(n,e=!1){var o;const t=Ca(n)?"wild":Qi(n)?"skip":"",r=Ca(n)?"★":Qi(n)?"⊘":n.value,s=t==="wild"?"★":t==="skip"?"⊘":n.value;return`<button class="phase10-card ${t} ${n.color||""} ${e?"is-selected":""}" data-phase-card="${n.id}" aria-label="${Ca(n)?"Wild card":Qi(n)?"Skip card":`${n.color} ${n.value}`}" ${((o=M.phase10)==null?void 0:o.turn)!=="play"?'aria-disabled="true"':""}><div class="phase10-card-band phase10-card-band-top"><b>${s}</b><b>${s}</b></div><b class="phase10-card-value">${r}</b><div class="phase10-card-band phase10-card-band-bottom"><b>${s}</b><b>${s}</b></div><i>${t==="wild"?"WILD":t==="skip"?"SKIP":n.color}</i></button>`}function FI(n){return[6,7,8,7,8,9,8,7,7,8][n-1]||6}function gM(n,e,t=0,r=[],s=[]){if(r.length===e)return s.push(r),s;for(let o=t;o<=n.length-(e-r.length);o++)gM(n,e,o+1,r.concat(n[o]),s);return s}function kI(n){const e=FI(n.phase),t=gM(n.hand,e).find(s=>fM(n.phase,s));if(!t)return!1;const r=new Set(t.map(s=>s.id));return n.phaseCards=t,n.hand=n.hand.filter(s=>!r.has(s.id)),n.laid=!0,!0}function Xr(){const n=M.phase10;if(!n)return Ym();document.body.classList.remove("home-mode","platform-home","match-mode"),document.body.classList.add("phase10-mode"),M.screen="phase10",Kr();const e=n.players[0];n.players[n.current];const t=n.discardPile.at(-1),r=new Set(n.selected),s=n.current===0;er(_i,`<section class="phase10-board"><header class="phase10-board-head"><div><span class="phase10-kicker">Round ${n.round}</span><h1>Phase ${e.phase}<small>${fm[e.phase-1]}</small></h1></div><div class="phase10-message ${s?"is-your-turn":""}">${Wt(n.message)}</div><button class="phase10-exit" id="exitPhase10">Exit game</button></header><section class="phase10-opponents">${n.players.slice(1).map((o,u)=>`<article class="phase10-player ${n.current===u+1?"is-active":""}"><span class="phase10-avatar">${hm(o.avatar)}</span><div><b>${o.name}</b><small>Phase ${o.phase} · ${o.hand.length} cards</small></div><strong>${o.score}</strong>${o.laid?'<i class="phase10-done">✓</i>':""}</article>`).join("")}</section><main class="phase10-table"><div class="phase10-goal"><span>Your goal</span><strong>Phase ${e.phase}</strong><p>${fm[e.phase-1]}</p>${e.laid?"<b>Phase complete ✓</b>":""}</div><div class="phase10-decks"><button class="phase10-deck draw" id="phaseDraw" ${!s||n.turn!=="draw"?'aria-disabled="true"':""}><span>✦</span><small>Draw</small><i>${n.drawPile.length}</i></button><button class="phase10-deck discard ${(t==null?void 0:t.color)||""} ${Ca(t)?"wild":""} ${Qi(t)?"skip":""}" id="phaseDiscardDraw" ${!s||n.turn!=="draw"?'aria-disabled="true"':""}><span>${Ca(t)?"★":Qi(t)?"⊘":t==null?void 0:t.value}</span><small>Discard</small></button></div><div class="phase10-actions"><button id="phaseLay" ${!s||n.turn!=="play"||e.laid?'aria-disabled="true"':""}>Lay phase</button><button id="phaseDiscard" ${!s||n.turn!=="play"||n.selected.length!==1?'aria-disabled="true"':""}>Discard selected</button></div></main><section class="phase10-hand-wrap"><div class="phase10-hand-heading"><span>${hm(e.avatar)}</span><div><b>Your hand</b><small>${e.hand.length} cards · select cards to lay or discard</small></div></div><div class="phase10-hand">${e.hand.map(o=>UI(o,r.has(o.id))).join("")}</div></section></section>`,{nativeControls:!1}),eo("[data-phase-card]",(o,u)=>{if(n.current!==0||n.turn!=="play")return;const d=u.dataset.phaseCard;n.selected=n.selected.includes(d)?n.selected.filter(f=>f!==d):n.selected.concat(d),Xr()}),eo("#phaseDraw",()=>Yy(!1)),eo("#phaseDiscardDraw",()=>Yy(!0)),eo("#phaseLay",BI),eo("#phaseDiscard",zI),eo("#exitPhase10",Da)}function Yy(n){const e=M.phase10,t=e==null?void 0:e.players[0];if(!e||e.current!==0||e.turn!=="draw")return;const r=n?e.discardPile.pop():e.drawPile.pop();r&&(t.hand.push(r),e.turn="play",e.message="Lay your phase or discard one card.",Xr())}function BI(){const n=M.phase10,e=n==null?void 0:n.players[0];if(!n||n.current!==0||n.turn!=="play"||e.laid)return;const t=e.hand.filter(s=>n.selected.includes(s.id));if(!fM(e.phase,t)){n.message=`Those cards do not complete Phase ${e.phase}: ${fm[e.phase-1]}.`,Xr();return}const r=new Set(t.map(s=>s.id));e.phaseCards=t,e.hand=e.hand.filter(s=>!r.has(s.id)),e.laid=!0,n.selected=[],n.message="Phase complete! Discard one card to end your turn.",Xr()}function zI(){const n=M.phase10,e=n==null?void 0:n.players[0];if(!n||n.current!==0||n.turn!=="play"||n.selected.length!==1)return;const t=n.selected[0],r=e.hand.findIndex(o=>o.id===t);if(r<0)return;const[s]=e.hand.splice(r,1);n.discardPile.push(s),n.selected=[],Qi(s)&&(n.skipped=1),vM()}function vM(){const n=M.phase10,e=n.players[n.current];if(e.hand.length===0)return GI(e);n.current=(n.current+1)%n.players.length,n.skipped===n.current&&(n.message=`${n.players[n.current].name} was skipped!`,n.skipped=null,n.current=(n.current+1)%n.players.length),n.turn="draw",n.current===0?(n.message="Your turn: draw a card.",Xr()):(n.message=`${n.players[n.current].name} is thinking…`,Xr(),window.setTimeout(HI,650))}function HI(){const n=M.phase10;if(!n||n.current===0||n.finished)return;const e=n.players[n.current],t=n.drawPile.pop();t&&e.hand.push(t),kI(e);const r=e.hand.filter(o=>!Ca(o)&&!Qi(o)),s=(r.length?r:e.hand)[Math.floor(Math.random()*(r.length?r.length:e.hand.length))];s&&(e.hand.splice(e.hand.indexOf(s),1),n.discardPile.push(s),Qi(s)&&(n.skipped=(n.current+1)%n.players.length)),vM()}function GI(n){const e=M.phase10;if(e.players.forEach(r=>{r!==n&&(r.score+=r.hand.reduce((s,o)=>s+AI(o),0))}),n.phase+=1,n.phase>10){e.finished=!0,e.message=`${n.name} completed all ten phases!`,Xr();return}const t=hM(M.name,M.phase10Avatar);t.players.forEach((r,s)=>{r.phase=e.players[s].phase,r.score=e.players[s].score}),t.round=e.round+1,t.message=`${n.name} went out. New round!`,M.phase10=t,Xr()}function Km(){var e,t,r;dd(),document.body.classList.remove("match-mode","lobby-mode","platform-home"),document.body.classList.add("home-mode","take5-entry-mode"),M.screen="take5-home",M.game=null,M.selected=null,ms(!0),Kr();const n=Wt(M.name);er(_i,`<section class="landing">
    <div class="hero-copy"><div class="eyebrow">TAKE 5 · QUICK TABLE</div><h1>Play a clever<br /><em>card game.</em></h1><p>Choose a card. Avoid the bulls. Bring friends.</p>
      <div class="hero-points"><span><i class="tiny-star">✳</i> 2–10 players</span><span><i class="tiny-star">✳</i> 10 cards each</span><span><i class="tiny-star">✳</i> maximum mischief</span></div>
    <div class="table-scene" aria-hidden="true"><div class="scene-felt"></div><div class="scene-card c1"><strong>12</strong>${Mr()}</div><div class="scene-card c2"><strong>38</strong>${Mr()}</div><div class="scene-card c3"><strong>64</strong>${Mr()}</div><div class="scene-card c4"><strong>91</strong>${Mr()}</div><div class="decor-cow">🐮</div><div class="scene-caption">a very serious card table</div></div>
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
          <div class="join-room-controls"><input class="text-field room-code-input" id="roomCode" type="text" inputmode="numeric" pattern="[0-9]{4}" maxlength="4" placeholder="1234" aria-describedby="roomCodeHint" value="${Wt(M.roomPrefill||"")}" autocomplete="one-time-code" /><button class="primary-button action-button join-room-button" id="joinRoom">Join room</button></div>
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
  </section>`),Kt(".setup-tab",(s,o)=>{M.tab=o.dataset.tab,Km()}),(e=document.querySelector("#botCount"))==null||e.addEventListener("change",s=>M.botCount=+s.target.value),Kt("#startBots",()=>{Kh("#playerName"),Jm()}),Kt("#hostRoom",()=>{Kh("#roomPlayerName"),YI()}),Kt("#joinRoom",()=>{Kh("#roomPlayerName"),ng(document.querySelector("#roomCode").value.trim())}),(t=document.querySelector("#roomCode"))==null||t.addEventListener("input",s=>{s.target.value=s.target.value.replace(/\D/g,"").slice(0,4)}),(r=document.querySelector("#roomCode"))==null||r.addEventListener("keydown",s=>{var o;s.key==="Enter"&&((o=document.querySelector("#joinRoom"))==null||o.dispatchEvent(new CustomEvent("rnpress",{bubbles:!0})))})}function Kh(n){var e;M.name=((e=document.querySelector(n))==null?void 0:e.value.trim())||"Player",localStorage.setItem("take5-name",M.name)}function Di(n){const e=document.querySelector(`[data-panel="${M.tab}"] .inline-error`);e&&(e.textContent=n)}function vi(n){var t;clearTimeout(M.toastTimer),(t=document.querySelector(".toast"))==null||t.remove();const e=document.createElement("div");e.className="toast",e.textContent=n,document.body.append(e),M.toastTimer=setTimeout(()=>e.remove(),2600)}const Ul=["😂","😮","😭","👏","❤️","🐂"];function Zm(n){if(M.screen!=="game"||!Ul.includes(n.emoji))return;const e=Array.from(document.querySelectorAll(".header-player[data-player-id]")).find(s=>s.dataset.playerId===n.playerId),t=e==null?void 0:e.getBoundingClientRect(),r=document.createElement("div");r.className="room-reaction-float",r.style.left=`${t?t.left+t.width/2:innerWidth/2}px`,r.style.top=`${t?t.bottom-4:innerHeight*.45}px`,r.innerHTML=`<span>${n.emoji}</span><small>${Wt(n.name||"Player")}</small>`,document.body.append(r),setTimeout(()=>r.remove(),1700)}function _M(n,e=null){M.connections.forEach((t,r)=>{if(r!==e&&t.open)try{t.send(n)}catch{}})}function yM(n){var r,s,o,u,d;if(!((r=M.mode)!=null&&r.startsWith("online"))||M.screen!=="game"||!Ul.includes(n))return;const e=Date.now();if(e-(M.reactionCooldowns.get(M.clientId)||0)<650)return;M.reactionCooldowns.set(M.clientId,e);const t={type:"reaction",playerId:M.clientId,name:M.name||"Player",emoji:n};Zm(t),(s=document.querySelector("#gameMenuPanel"))==null||s.classList.add("is-hidden"),(o=document.querySelector("#gameMenuToggle"))==null||o.setAttribute("aria-expanded","false"),(u=document.querySelector(".menu-shell"))==null||u.classList.remove("is-open"),document.querySelectorAll(".hand-reaction-picker").forEach(f=>{f.hidden=!0}),document.querySelectorAll(".hand-reaction-trigger").forEach(f=>f.setAttribute("aria-expanded","false")),document.querySelectorAll(".hand-reaction-control").forEach(f=>f.classList.remove("is-expanded")),M.host?_M(t):(d=M.connection)!=null&&d.open&&M.connection.send({type:"reaction",emoji:n})}function VI(n,e=!1){const t=[{id:"self",name:M.name||"You",human:!0,online:!0,score:0,total:0,hand:[]}];for(let r=0;r<n;r++)t.push({id:`bot${r+1}`,name:["Milo","Nora","Pip","June","Otto","Bea","Finn","Kit","Lou"][r],human:!1,online:!0,score:0,total:0,hand:[]});return t}function jm(n){const e=NI();return n.forEach(t=>t.hand=e.splice(0,10).sort((r,s)=>r-s)),e.splice(0,4).map(t=>[t])}function Jm(){var t,r;Na("deal"),ms(!1),clearTimeout(M.countdownTimer),clearInterval(M.countdownInterval);const n=+(((t=document.querySelector("#botCount"))==null?void 0:t.value)||M.botCount||3);M.botCount=n,M.submittedTurn=!1,M.animating=!1,M.replay=null,M.replayKey=null,M.revealOrigins={},M.stageSeen=new Set,M.stageTurnKey=null;const e=VI(n);M.game={players:e,rows:jm(e),turn:1,round:1,tieOffset:0,phase:"choosing",selections:{},lastReveal:null,mode:"local",botStyle:((r=document.querySelector("#botStyle"))==null?void 0:r.value)||"clever"},M.mode="local",M.screen="game",M.selected=null,M.screenTransition=!0,nr()}function WI(n){n.round++,n.turn=1,n.tieOffset=(n.tieOffset+1)%n.players.length,n.rows=jm(n.players),n.phase="choosing",n.selections={},n.lastReveal=null,delete n.pendingRowChoice}function Qm(n,e){const t=n.hand;let r=t[0],s=1/0;for(const o of t){const u=e.rows.map((f,h)=>({i:h,top:f.at(-1),distance:o-f.at(-1),heads:f.reduce((v,m)=>v+ti(m),0)})).filter(f=>o>f.top).sort((f,h)=>h.top-f.top);let d;if(!u.length)d=26+e.rows.reduce((f,h)=>f+h.reduce((v,m)=>v+ti(m),0),0)*1.1+o/104;else{const f=u[0];d=f.heads*2.1+(f.distance<4?1.3:0)+(f.i===3?-.3:0),e.rows[f.i].length>=5&&(d+=7),e.rows[f.i].length>=4&&(d+=2.5),d+=o/500}e.botStyle==="chaotic"&&(d+=(Math.random()-.5)*9),d<s&&(s=d,r=o)}return r}function $I(n){var r;const e=M.game;if(M.animating||!e||e.phase!=="choosing"||!e.players[0].hand.includes(n))return;Na("card");const t=(r=document.querySelector(`.hand-card[data-card="${n}"]`))==null?void 0:r.getBoundingClientRect();t&&(M.revealOrigins.self={left:t.left,top:t.top,width:t.width,height:t.height}),M.selected=n,e.players.slice(1).forEach(s=>e.selections[s.id]=Qm(s,e)),e.selections.self=n,e.phase="countdown",e.countdownAt=Date.now()+3e3,M.selected=null,nr(),rg(e,!1)}function SM(n,e){var u;const t=n.players.map((d,f)=>(f+n.tieOffset)%n.players.length),r=n.players.map(d=>({p:d,card:n.selections[d.id]})).sort((d,f)=>d.card-f.card||t.indexOf(n.players.indexOf(d.p))-t.indexOf(n.players.indexOf(f.p))),s=r.find(d=>d.p.hand.includes(d.card));if(s&&!n.rows.some(f=>s.card>f.at(-1))&&s.p.human&&e==null)return n.pendingRowChoice={playerId:s.p.id,card:s.card},n.phase="row-choice",!0;const o=[];for(const{p:d,card:f}of r){const h=d.hand.indexOf(f);if(h<0)continue;d.hand.splice(h,1);let v=n.rows.map((E,T)=>({i:T,top:E.at(-1)})).filter(E=>f>E.top).sort((E,T)=>T.top-E.top),m,g=0,x=!1;if(v.length)m=v[0].i,n.rows[m].length===5?(g=n.rows[m].slice(0,5).reduce((E,T)=>E+ti(T),0),d.score+=g,d.total+=g,x=!0,n.rows[m]=[f]):n.rows[m].push(f);else{if(m=e!=null&&d.id===((u=n.pendingRowChoice)==null?void 0:u.playerId)?e:n.rows.reduce((T,y,S)=>y.reduce((w,D)=>w+ti(D),0)<n.rows[T].reduce((w,D)=>w+ti(D),0)?S:T,0),!Number.isInteger(m)||m<0||m>=n.rows.length)return d.hand.splice(h,0,f),!0;g=n.rows[m].reduce((T,y)=>T+ti(y),0),d.score+=g,d.total+=g,x=!0,n.rows[m]=[f]}o.push({playerId:d.id,name:d.name,card:f,rowIndex:m,penalty:g,tookRow:x})}return n.lastReveal=o,n.selections={},delete n.pendingRowChoice,n.tieOffset=(n.tieOffset+1)%n.players.length,M.selected=null,M.submittedTurn=!1,n.players.every(d=>d.hand.length===0)?n.players.some(f=>f.total>=66)?(n.phase="finished",M.screen="result"):n.phase="round-break":(n.turn++,n.phase="choosing"),!1}async function eg(){return jy(()=>import("https://esm.sh/peerjs@1.5.5?bundle"),[])}function XI(){const n=new Uint16Array(1);return crypto.getRandomValues(n),String(n[0]%1e4).padStart(4,"0")}function qI(n){var t;let e=ld(fs);return((e==null?void 0:e.roomId)!==n||!e.token)&&(e={roomId:n,token:((t=crypto.randomUUID)==null?void 0:t.call(crypto))||`${Date.now()}-${Math.random().toString(36).slice(2)}`},localStorage.setItem(fs,JSON.stringify(e))),M.resumeToken=e.token,e.token}function yo(){if(!(!M.host||!M.roomId))try{localStorage.setItem(qm,JSON.stringify({roomId:M.roomId,name:M.name,screen:M.screen,players:M.players,game:M.game}))}catch{vi("Could not save a recovery copy of this room on this device.")}}function xM(n,e){M.peer===n&&(e.on("open",()=>{}),e.on("data",t=>ZI(e,t)),e.on("close",()=>{var r,s,o;if(M.peer!==n||M.connections.get(e.peer)!==e)return;const t=M.players.find(u=>u.id===e.peer);t&&(t.online=!1),M.connections.delete(e.peer),yo(),((r=M.game)==null?void 0:r.phase)==="choosing"?(Ll(),tr()):((s=M.game)==null?void 0:s.phase)==="row-choice"?(((o=M.game.pendingRowChoice)==null?void 0:o.playerId)===(t==null?void 0:t.id)&&MM(),tr()):M.screen==="lobby"&&so()}))}function tg(n){n.on("disconnected",()=>{M.peer===n&&ud(n,1200)}),n.on("open",()=>clearTimeout(M.peerReconnectTimer))}function ud(n,e=3e3){M.peer===n&&(clearTimeout(M.peerReconnectTimer),M.peerReconnectTimer=setTimeout(()=>{if(!(M.peer!==n||!n.disconnected)){try{n.reconnect()}catch{}M.peer===n&&n.disconnected&&ud(n,4e3)}},e))}async function YI(){if(!M.busy){M.busy=!0,Di("Opening your room…");try{const{Peer:n}=await eg();let e=0;const t=()=>{const r=XI(),s=new n(`take5-${r}`);M.peer=s,M.host=!0,tg(s),s.on("open",o=>{M.peer===s&&(localStorage.removeItem(fs),M.roomId=r,M.clientId=o,M.players=[{id:o,name:M.name,human:!0,online:!0,score:0,total:0,hand:[]}],M.screen="lobby",M.mode="online-host",M.busy=!1,M.screenTransition=!0,history.replaceState({},"",`?room=${encodeURIComponent(r)}`),mo(),yo())}),s.on("connection",o=>xM(s,o)),s.on("error",o=>{if(M.peer===s){if(o.type==="unavailable-id"&&e<8){e++,s.destroy(),M.peer=null,setTimeout(t,120);return}M.busy=!1,M.screen==="home"?Di(o.type==="unavailable-id"?"Could not reserve a room code. Try again.":"Room connection failed. Check your internet and try again."):vi("Room connection hiccup.")}})};t()}catch{M.busy=!1,Di("Online rooms need an internet connection. Please try again.")}}}async function KI(n){if(!(n!=null&&n.roomId)||!/^\d{4}$/.test(n.roomId))return Da();M.busy=!0,M.name=n.name||M.name,Di("Restoring your room…");try{const{Peer:e}=await eg();let t=0;const r=()=>{const s=new e(`take5-${n.roomId}`);M.peer=s,M.host=!0,tg(s),s.on("open",o=>{var u;M.peer===s&&(ms(!1),M.roomId=n.roomId,M.clientId=o,M.game=n.game||null,M.players=((u=M.game)==null?void 0:u.players)||n.players||[],M.game&&(M.players=M.game.players),M.mode="online-host",M.screen=M.game?M.game.phase==="finished"?"result":"game":"lobby",M.busy=!1,M.screenTransition=!0,M.selected=null,M.submittedTurn=!1,M.animating=!1,M.replay=null,M.replayKey=null,M.revealOrigins={},history.replaceState({},"",`?room=${encodeURIComponent(n.roomId)}`),M.screen==="lobby"?mo():M.screen==="result"?ag():(nr(),M.game.phase==="countdown"&&rg(M.game,!0)),yo())}),s.on("connection",o=>xM(s,o)),s.on("error",o=>{if(M.peer===s){if(o.type==="unavailable-id"&&t<25){t++,s.destroy(),M.peer=null,setTimeout(r,Math.min(1800,180+t*120));return}M.busy=!1,t>=25?Di("This room is still active in another tab. Close that tab, then refresh to restore it."):Di("Could not reconnect to your room. Refresh to try again."),s.destroy(),M.peer=null,M.host=!1}})};r()}catch{M.busy=!1,M.host=!1,Di("Could not restore the room. Check your connection and refresh to try again.")}}function ZI(n,e){var t,r;if(!(!e||typeof e!="object")){if(e.type==="hello"){const s=typeof e.resumeToken=="string"?e.resumeToken.slice(0,100):"",o=M.players.find(d=>d.id===n.peer||s&&d.resumeToken===s);if(o){const d=o.id,f=M.connections.get(d);if(f&&f!==n){M.connections.delete(d);try{f.close()}catch{}}o.id=n.peer,o.online=!0,M.game&&d!==n.peer&&(Object.hasOwn(M.game.selections||{},d)&&(M.game.selections[n.peer]=M.game.selections[d],delete M.game.selections[d]),((t=M.game.pendingRowChoice)==null?void 0:t.playerId)===d&&(M.game.pendingRowChoice.playerId=n.peer),M.game.lastReveal&&(M.game.lastReveal=M.game.lastReveal.map(h=>h.playerId===d?{...h,playerId:n.peer}:h))),M.connections.set(n.peer,n),n.send({type:"welcome",id:n.peer,roomId:M.roomId}),M.game?(clearTimeout(M.disconnectAdvanceTimer),M.disconnectAdvanceTimer=null,n.send(pm(n.peer)),Ll(),yo(),tr()):so();return}if(M.game){n.send({type:"error",message:"This game is already in progress. Rejoin using your original invite link."}),n.close();return}if(M.players.length>=10){n.send({type:"error",message:"This table is full (10 players max)."}),n.close();return}const u={id:n.peer,name:String(e.name||"Player").slice(0,18),resumeToken:s||void 0,human:!0,online:!0,ready:!1,score:0,total:0,hand:[]};M.players.push(u),M.connections.set(n.peer,n),n.send({type:"welcome",id:n.peer,roomId:M.roomId}),M.screen==="lobby"&&so();return}if(e.type==="sync"){if(M.connections.get(n.peer)!==n)return;n.send({type:"welcome",id:n.peer,roomId:M.roomId}),M.game?n.send(pm(n.peer)):n.send({type:"lobby",players:M.players.map(({id:s,name:o,online:u,human:d,ready:f})=>({id:s,name:o,online:u,human:d,ready:f})),roomId:M.roomId});return}if(e.type==="ready"&&M.screen==="lobby"){const s=M.players.find(o=>o.id===n.peer);if(!s)return;s.ready=!!e.ready,so();return}if(e.type==="reaction"){const s=M.players.find(d=>d.id===n.peer),o=Date.now();if(M.screen!=="game"||!(s!=null&&s.human)||!s.online||!Ul.includes(e.emoji)||o-(M.reactionCooldowns.get(n.peer)||0)<650)return;M.reactionCooldowns.set(n.peer,o);const u={type:"reaction",playerId:n.peer,name:s.name,emoji:e.emoji};Zm(u),_M(u,n.peer);return}if(e.type==="pick"&&M.game&&M.game.phase==="choosing"&&!M.animating){const s=M.players.find(o=>o.id===n.peer);if(!s||!s.hand.includes(+e.card)||M.game.selections[n.peer])return;M.game.selections[n.peer]=+e.card,Ll(),tr()}if(e.type==="choose-row"&&((r=M.game)==null?void 0:r.phase)==="row-choice"){const s=M.game.pendingRowChoice;if(!s||s.playerId!==n.peer||!Number.isInteger(+e.rowIndex))return;ig(+e.rowIndex)}}}function Ll(){const n=M.game;if(M.animating||!n||n.phase!=="choosing"||n.players.some(r=>r.human&&r.online&&!n.selections[r.id]))return;if(n.players.some(r=>r.human&&!r.online&&!n.selections[r.id])){MM();return}clearTimeout(M.disconnectAdvanceTimer),M.disconnectAdvanceTimer=null,n.players.filter(r=>!r.human&&!n.selections[r.id]).forEach(r=>n.selections[r.id]=Qm(r,n)),n.phase="countdown",n.countdownAt=Date.now()+3e3,rg(n,!0)}function MM(){M.disconnectAdvanceTimer||(M.disconnectAdvanceTimer=setTimeout(()=>{var e;M.disconnectAdvanceTimer=null;const n=M.game;if(n){if(n.phase==="choosing")n.players.filter(t=>t.human&&!t.online&&!n.selections[t.id]).forEach(t=>n.selections[t.id]=Qm(t,n)),Ll(),tr();else if(n.phase==="row-choice"&&n.pendingRowChoice){const r=((e=n.rows.map((s,o)=>({i:o,penalty:s.reduce((u,d)=>u+ti(d),0)})).sort((s,o)=>s.penalty-o.penalty||s.i-o.i)[0])==null?void 0:e.i)??0;ig(r)}}},2e4))}function so(){yo();const n={type:"lobby",players:M.players.map(({id:e,name:t,online:r,human:s,ready:o})=>({id:e,name:t,online:r,human:s,ready:o})),roomId:M.roomId};M.connections.forEach(e=>{try{e.send(n)}catch{}}),mo()}function pm(n){const e=M.game;return e?{type:"game",viewer:n,game:{...e,players:e.players.map(t=>{const{resumeToken:r,...s}=t;return{...s,hand:t.id===n?t.hand:void 0}}),readyPlayers:Object.keys(e.selections),selections:e.phase==="row-choice"?{...e.selections}:{},mode:"online"}}:null}function tr(){if(M.screen==="lobby"){so();return}yo(),M.connections.forEach((n,e)=>{try{n.send(pm(e))}catch{}}),M.clientId&&nr()}function jI(){var e,t;if(!M.roomId){vi("This room is not connected.");return}if(M.host){M.screen==="lobby"?so():tr(),vi("Room state refreshed for everyone.");return}const n=M.peer;if((e=M.connection)!=null&&e.open){M.connection.send({type:"sync"}),vi("Refreshing room sync…");return}if(n){if(M.recoveringGuest=!0,M.connection=null,clearTimeout(M.reconnectTimer),n.disconnected)try{n.reconnect()}catch{ud(n)}cd(M.roomId,n),vi("Reconnecting to the room…");return}M.resumeToken=((t=ld(fs))==null?void 0:t.token)||M.resumeToken,M.busy=!1,ng(M.roomId)}function ed(){var e;if(!M.host||M.players.filter(t=>t.human&&t.online).length<1)return;Na("deal"),ms(!1),clearTimeout(M.countdownTimer),clearInterval(M.countdownInterval);let n=+(((e=document.querySelector("#lobbyBots"))==null?void 0:e.value)||0);M.players.filter(t=>t.human&&t.online).length===1&&!M.players.some(t=>!t.human)&&n===0&&(n=1);for(let t=0;t<n&&M.players.length<10;t++){const r=M.players.filter(s=>!s.human).length;M.players.push({id:`bot${r+1}`,name:["Milo","Nora","Pip","June","Otto","Bea","Finn","Kit","Lou"][r],human:!1,online:!0,score:0,total:0,hand:[]})}M.game={players:M.players,rows:jm(M.players),turn:1,round:1,tieOffset:0,phase:"choosing",selections:{},lastReveal:null,mode:"online"},M.submittedTurn=!1,M.animating=!1,M.replay=null,M.replayKey=null,M.revealOrigins={},M.stageSeen=new Set,M.stageTurnKey=null,M.screen="game",M.mode="online-host",M.screenTransition=!0,tr()}function cd(n,e,t=0){if(M.peer!==e||M.host||M.connection&&M.connection.open)return;let r;try{r=e.connect(`take5-${n}`,{reliable:!0})}catch{mm(n,e,t);return}M.connection=r;let s=!1,o=setTimeout(()=>{!s&&M.connection===r&&r.close()},1e4);r.on("open",()=>{M.peer===e&&r.send({type:"hello",name:M.name,resumeToken:M.resumeToken})}),r.on("data",u=>{(u==null?void 0:u.type)==="welcome"&&(s=!0,clearTimeout(o),M.recoveringGuest=!1),JI(u)}),r.on("error",()=>r.close()),r.on("close",()=>{clearTimeout(o),!(M.connection!==r||M.peer!==e)&&mm(n,e,t)})}function mm(n,e,t){if(!(M.peer!==e||M.host)){if(!M.recoveringGuest&&M.screen!=="game"&&M.screen!=="lobby"){M.busy=!1,Di("Could not reach that room. Check the code and try again.");return}M.recoveringGuest=!0,clearTimeout(M.reconnectTimer),M.reconnectTimer=setTimeout(()=>cd(n,e,t+1),Math.min(8e3,700*Math.pow(2,Math.min(t,3))))}}function ng(n){if(!M.busy){if(!/^\d{4}$/.test(n)){Di("Enter the 4-digit room code.");return}M.busy=!0,M.roomId=n,qI(n),Di("Finding your table…"),eg().then(({Peer:e})=>{const t=new e;M.peer=t,M.host=!1,tg(t),t.on("open",()=>cd(n,t)),t.on("error",r=>{if(r.type==="peer-unavailable"&&M.recoveringGuest){mm(n,t,0);return}M.screen==="home"&&!M.recoveringGuest&&(M.busy=!1,Di(r.type==="peer-unavailable"?"Room not found. Check the code and try again.":"Could not connect. Check your internet and try again."))})}).catch(()=>{M.busy=!1,Di("Online rooms need an internet connection. Please try again.")})}}function JI(n){var e;if((n==null?void 0:n.type)==="reaction")Zm(n);else if((n==null?void 0:n.type)==="welcome")M.clientId=n.id,M.roomId=n.roomId,M.busy=!1,M.mode="online-guest",M.game||(M.screen="lobby"),localStorage.setItem(fs,JSON.stringify({roomId:n.roomId,token:M.resumeToken})),M.game||mo();else if((n==null?void 0:n.type)==="lobby")M.players=n.players,M.roomId=n.roomId,M.screen!=="game"&&(M.screen="lobby"),mo();else if((n==null?void 0:n.type)==="game"){const t=M.game,r=t&&(t.turn!==n.game.turn||t.round!==n.game.round);M.game=n.game,M.players=n.game.players,M.clientId=n.viewer,M.mode="online-guest",M.screen=n.game.phase==="finished"?"result":"game",r&&(M.selected=null,M.submittedTurn=!1),M.submittedTurn=!!((e=n.game.readyPlayers)!=null&&e.includes(n.viewer)),M.recoveringGuest=!1,nr()}else(n==null?void 0:n.type)==="error"&&(M.busy=!1,vi(n.message))}function QI(n){var t,r,s;if(M.animating||((t=M.game)==null?void 0:t.phase)!=="choosing")return;Na("card");const e=(r=document.querySelector(`.hand-card[data-card="${n}"]`))==null?void 0:r.getBoundingClientRect();if(e&&(M.revealOrigins[M.clientId]={left:e.left,top:e.top,width:e.width,height:e.height}),M.host){if(M.game.selections[M.clientId])return;M.game.selections[M.clientId]=n,Ll(),tr()}else(s=M.connection)!=null&&s.open&&(M.connection.send({type:"pick",card:n}),M.selected=n,M.submittedTurn=!0,nr())}function ig(n){var o;const e=M.game,t=e==null?void 0:e.pendingRowChoice;if(!e||!t||n<0||n>=e.rows.length)return;clearTimeout(M.disconnectAdvanceTimer),M.disconnectAdvanceTimer=null;const r=M.mode==="local"?(o=e.players[0])==null?void 0:o.id:M.clientId;!(t.playerId===r)&&!M.host||(SM(e,n),M.host?tr():nr())}function eD(n){var s,o;Na("row");const e=M.game,t=e==null?void 0:e.pendingRowChoice,r=M.mode==="local"?(s=e==null?void 0:e.players[0])==null?void 0:s.id:M.clientId;!t||t.playerId!==r||(M.mode==="local"||M.host?ig(n):(o=M.connection)!=null&&o.open&&M.connection.send({type:"choose-row",rowIndex:n}))}function mo(){ms(!1),document.body.classList.remove("home-mode"),document.body.classList.add("match-mode","lobby-mode"),M.screen="lobby";const n=M.players.filter(s=>s.online!==!1).length,e=M.players.find(s=>s.id===M.clientId),t=!!(e!=null&&e.ready),r=Wt(M.roomId);Kr(),er(_i,`<section class="game-layout lobby-layout"><div class="lobby-row"><strong>ROOM CODE</strong><span class="room-code">${r}</span><span class="lobby-wait">${n<2?"Waiting for friends, or start a practice game now.":`${n} players connected`}</span></div><div class="tabletop"><div class="tabletop-head"><span>THE TABLE</span><strong>2–10 PLAYERS</strong></div><div class="row-empty">${n<2?"Share the invite link, or start now and a bot will join your table.":"Players are here. The host can start the game."}</div></div><div class="game-bottom lobby-bottom"><div></div><aside class="turn-side"><div class="turn-state">READY TO PLAY</div><p class="turn-message">${n<2?"Start now and play with one bot, or wait for friends to join.":"Everyone is here. Deal the cards!"}</p>${M.host?'<label class="field-label" for="lobbyBots">Bots to add</label><select class="select-field" id="lobbyBots"><option value="0">No bots</option><option value="1">1 bot</option><option value="2">2 bots</option><option value="3">3 bots</option></select><button class="primary-button lobby-start" id="beginOnline">Start game ↗</button>':`<button class="primary-button lobby-start lobby-ready" id="toggleReady">${t?"Ready ✓":"Ready up"}</button><div class="turn-help">${t?"You’re ready. Waiting for the host…":"Tap Ready when you’re set to play."}</div>`}</aside></div></section>`),Kt("#beginOnline",ed),Kt("#toggleReady",()=>{var o;const s=!t;M.players=M.players.map(u=>u.id===M.clientId?{...u,ready:s}:u),(o=M.connection)==null||o.send({type:"ready",ready:s}),mo()})}function EM(n,e){var t;(t=navigator.clipboard)==null||t.writeText(n).then(()=>vi(e)).catch(()=>vi("Could not copy. Select the room code to copy it."))}function tD(){const e=`${lM?xI:`${location.origin}${location.pathname}`}?room=${encodeURIComponent(M.roomId)}`;EM(e,"Invite link copied")}function gm(){return`<div class="card-back-design"><span class="back-emblem">${Mr()}</span><b>TAKE<br>5</b><span class="back-stars">✦　✦　✦</span></div>`}function rg(n,e){clearTimeout(M.countdownTimer),M.countdownTimer=setTimeout(()=>{M.game!==n||n.phase!=="countdown"||(clearInterval(M.countdownInterval),M.countdownInterval=null,n.phase="choosing",delete n.countdownAt,SM(n),n.phase==="finished"&&(M.screen="result"),e?tr():nr())},Math.max(0,(n.countdownAt||Date.now()+3e3)-Date.now()))}function nD(n){if(clearInterval(M.countdownInterval),M.countdownInterval=null,n.phase!=="countdown")return;const e=()=>{const t=_i.querySelector("[data-countdown]");if(!t)return;const r=Math.max(0,(n.countdownAt-Date.now())/1e3);t.textContent=r>0?String(Math.ceil(r)):"REVEAL"};e(),M.countdownInterval=setInterval(e,100)}function iD(){var t;const n=Array.from(_i.querySelectorAll(".stage-card-back"));if(!n.length)return;const e=[];for(const r of n){const s=r.dataset.stagePlayer;if(M.stageSeen.has(s))continue;M.stageSeen.add(s);const o=Array.from(document.querySelectorAll("[data-player-id]")).find(g=>g.dataset.playerId===s),u=M.revealOrigins[s]||((t=o==null?void 0:o.querySelector(".opponent-cards"))==null?void 0:t.getBoundingClientRect())||(o==null?void 0:o.getBoundingClientRect()),d=r.getBoundingClientRect();if(!u){r.classList.remove("stage-pending");continue}const f=document.createElement("div");f.className="flying-back",f.innerHTML=gm(),document.body.append(f);const h={x:u.left+u.width/2,y:u.top+u.height/2},v={x:d.left+d.width/2,y:d.top+d.height/2};f.style.left=`${h.x}px`,f.style.top=`${h.y}px`;const m=(async()=>{try{await f.animate([{left:`${h.x}px`,top:`${h.y}px`,transform:"translate(-50%,-50%) scale(.5) rotate(-7deg)"},{left:`${v.x}px`,top:`${v.y}px`,transform:"translate(-50%,-50%) scale(1) rotate(0deg)"}],{duration:330,easing:"cubic-bezier(.18,.75,.25,1)",fill:"forwards"}).finished}catch{}f.remove(),r.classList.remove("stage-pending")})();e.push(m)}Promise.all(e)}function rD(n){var t;if(!((t=n.lastReveal)!=null&&t.length))return;const e=`${n.round}:${n.turn}:${n.lastReveal.map(r=>`${r.playerId}-${r.card}`).join(",")}`;e!==M.replayKey&&(M.replayKey=e,M.replay={key:e,reveals:n.lastReveal.map(r=>({...r})),seen:new Set,active:!0,running:!1},M.revealOrigins=M.revealOrigins||{},M.animating=!0)}function Ky(n){return new Promise(e=>setTimeout(e,n))}async function aD(){var r,s,o,u,d;const n=M.replay;if(!(n!=null&&n.active)||n.running)return;Na("deal"),n.running=!0,M.animating=!0;const e=matchMedia("(prefers-reduced-motion: reduce)").matches,t=e?180:500;await Ky(e?150:720);for(const f of n.reveals){if(M.replay!==n||M.screen==="home")break;const h=_i.querySelector(`.row-lane[data-row-index="${f.rowIndex}"]`),v=_i.querySelector(`.playing-card[data-row-index="${f.rowIndex}"][data-card-number="${f.card}"]`),m=v||(h==null?void 0:h.querySelector(".row-cards"));let g=(r=M.revealOrigins)==null?void 0:r[f.playerId];if(!g){const S=Array.from(document.querySelectorAll("[data-player-id]")).find(w=>w.dataset.playerId===f.playerId);g=((s=S==null?void 0:S.querySelector(".opponent-cards"))==null?void 0:s.getBoundingClientRect())||(S==null?void 0:S.getBoundingClientRect())||((o=_i.querySelector(".hand-area"))==null?void 0:o.getBoundingClientRect())}if(!g||!m){n.seen.add(f.card),v==null||v.classList.remove("reveal-pending");continue}const x={x:g.left+g.width/2,y:g.top+g.height/2},E=m.getBoundingClientRect(),T={x:E.left+E.width/2,y:E.top+E.height/2},y=document.createElement("div");y.className="flying-card",y.innerHTML=no(f.card),document.body.append(y),y.style.left=`${x.x}px`,y.style.top=`${x.y}px`;try{await y.animate([{left:`${x.x}px`,top:`${x.y}px`,transform:"translate(-50%,-50%) scale(.62) rotate(-5deg)"},{left:`${(x.x+T.x)/2}px`,top:`${(x.y+T.y)/2-24}px`,transform:"translate(-50%,-50%) scale(.86) rotate(2deg)"},{left:`${T.x}px`,top:`${T.y}px`,transform:"translate(-50%,-50%) scale(1) rotate(0deg)"}],{duration:t,easing:"cubic-bezier(.2,.78,.24,1)",fill:"forwards"}).finished}catch{}if(y.remove(),M.replay!==n)break;n.seen.add(f.card),v==null||v.classList.remove("reveal-pending"),h==null||h.classList.add("card-landed"),setTimeout(()=>h==null?void 0:h.classList.remove("card-landed"),360),await Ky(e?40:130)}M.replay===n&&(n.active=!1,n.running=!1,M.animating=!1,M.revealOrigins={},((u=M.game)==null?void 0:u.phase)==="finished"?(M.screen="result",ag()):((d=M.game)==null?void 0:d.phase)==="round-break"?(WI(M.game),M.stageSeen=new Set,M.stageTurnKey=null,M.host?tr():nr()):nr())}function nr(){var y,S,w,D,L,N,I,b,C;if(!M.game)return;const n=M.game;if(rD(n),M.screen==="result"&&!((y=M.replay)!=null&&y.active)){ag();return}document.body.classList.remove("home-mode","lobby-mode"),document.body.classList.add("match-mode"),M.screen="game",Kr();const e=n.players.find(k=>k.id===M.clientId)||n.players[0],t=(e==null?void 0:e.hand)||[],r=n.phase==="choosing",s=(S=M.mode)==null?void 0:S.startsWith("online"),o=n.readyPlayers||Object.keys(n.selections||{}),u=s&&(!!((w=n.selections)!=null&&w[M.clientId])||o.includes(M.clientId)||M.submittedTurn);(D=e==null?void 0:e.hand)==null||D.length;const d=`${n.round}:${n.turn}`;M.stageTurnKey!==d&&(M.stageTurnKey=d,M.stageSeen=new Set);const f=new Set(o);s&&u&&f.add(M.clientId);const h=n.players.filter(k=>f.has(k.id)),v=((L=n.selections)==null?void 0:L[e.id])??(u?M.selected:null),m=v==null?t:t.filter(k=>k!==v),g=new Set((N=M.replay)!=null&&N.active?M.replay.reveals.filter(k=>!M.replay.seen.has(k.card)).map(k=>`${k.rowIndex}:${k.card}`):[]),x=n.phase==="row-choice"?n.pendingRowChoice:null,E=!!x&&x.playerId===e.id,T=x?n.players.find(k=>k.id===x.playerId):null;er(_i,`<section class="game-layout">
  <div class="tabletop"><div class="tabletop-head"><span>✦ THE MEADOW TABLE ✦</span><strong>ROUND ${n.round} <span>·</span> TURN ${Math.min(n.turn,10)} OF 10</strong></div><div class="rows">${n.rows.map((k,O)=>{var W;const G=k.reduce((X,B)=>X+ti(B),0);return`<div class="row-lane ${(W=n.lastReveal)!=null&&W.some(X=>X.rowIndex===O&&X.playerId===e.id&&X.tookRow)?"target":""}" data-row-index="${O}"><div class="row-label"><span>ROW ${O+1}</span></div><b class="row-total bull-counter-badge" aria-label="${G} bullheads"><strong>${G}</strong>${Mr()}</b><div class="row-cards">${k.map(X=>`<div class="playing-card ${g.has(`${O}:${X}`)?"reveal-pending":""}" data-row-index="${O}" data-card-number="${X}" aria-label="${X}, ${ti(X)} bullheads">${no(X)}</div>`).join("")}</div></div>`}).join("")}</div></div>
  <div class="stage-zone ${h.length?"has-cards":""} ${n.phase==="countdown"?"countdown-active":""}">${h.map(k=>{var G;const O=((G=n.selections)==null?void 0:G[k.id])??(k.id===(x==null?void 0:x.playerId)?x.card:null);return x&&Number.isInteger(O)?`<div class="stage-reveal-card" data-stage-player="${Wt(k.id)}" aria-label="${Wt(k.name)} played ${O}">${no(O)}<small>${Wt(k.name)} · ${O}</small></div>`:`<div class="stage-card-back ${M.stageSeen.has(k.id)?"":"stage-pending"}" data-stage-player="${Wt(k.id)}">${gm()}<small>${Wt(k.name)}</small></div>`}).join("")}${n.phase==="countdown"?'<div class="reveal-countdown"><span>REVEALING IN</span><strong data-countdown>3</strong></div>':""}</div>
  ${(I=M.replay)!=null&&I.active?`<div class="reveal-bay">${M.replay.reveals.map(k=>{var O;return`<div class="reveal-card"><div class="reveal-flip"><div class="reveal-side reveal-back">${gm()}</div><div class="reveal-side reveal-front">${no(k.card)}</div></div><small>${Wt(((O=n.players.find(G=>G.id===k.playerId))==null?void 0:O.name)||k.name||"Player")}</small></div>`}).join("")}</div>`:""}
  ${x?`<section class="row-choice-bay ${E?"is-your-choice":"is-waiting"}" aria-labelledby="rowChoiceTitle" aria-live="polite">
    <div class="row-choice-header">
      <div class="row-choice-card">${no(x.card)}</div>
      <div class="row-choice-copy"><span class="row-choice-eyebrow">${E?"YOUR LOW CARD":"ROW CHOICE"}</span><h2 id="rowChoiceTitle">${E?"Choose a row to collect":`#${Wt((T==null?void 0:T.name)||"Player")} waiting for a row choice`}</h2><p>${E?"Pick the row of bullheads you want to take.":`${Wt((T==null?void 0:T.name)||"The player")} is choosing which row to collect.`}</p></div>
    </div>
    <div class="row-choice-options" role="group" aria-label="Choose a row">
      ${n.rows.map((k,O)=>{const G=k.reduce((W,X)=>W+ti(X),0);return`<button class="row-choice-option" data-row-choice="${O}" aria-label="Row ${O+1}, take ${G} ${G===1?"bullhead":"bullheads"}" ${E?"":"disabled"}><span class="row-choice-option-top"><b>ROW ${String(O+1).padStart(2,"0")}</b><strong class="row-choice-penalty bull-counter-badge" aria-hidden="true"><span>${G}</span>${Mr()}</strong></span><span class="row-choice-preview" aria-hidden="true">${k.map(W=>`<i>${W}</i>`).join("")}</span><span class="row-choice-action">${E?"Take row":"Waiting"} <b aria-hidden="true">→</b></span></button>`}).join("")}
    </div>
  </section>`:""}
  <div class="game-bottom"><section class="hand-area" data-player-id="${Wt(e.id)}"><div class="hand-heading"><h2><span class="your-avatar">${mM(e,0)}</span> Your hand <span class="my-score" aria-label="Your score: ${e.total||0} bullheads"><b>${e.total||0}</b>${Mr()}</span>${s?`<span class="hand-reaction-control"><button type="button" class="hand-reaction-trigger" aria-label="Open reactions" aria-expanded="false">☺</button><span class="hand-reaction-picker" role="group" aria-label="Choose a reaction" hidden>${Ul.map(k=>`<button type="button" class="hand-reaction-option" data-reaction="${k}" aria-label="Send ${k} reaction">${k}</button>`).join("")}</span></span>`:""}</h2><span>${u?"PICK LOCKED IN":"PICK YOUR CARD"}</span></div><div class="hand" role="group" aria-label="Your cards">${m.map((k,O)=>`<button class="hand-card ${M.selected===k?"selected":""}" style="--hand-index:${O}" data-card="${k}" aria-label="Card ${k}, ${ti(k)} bullheads${M.selected===k?", selected":""}" aria-pressed="${M.selected===k}" ${!r||u||M.animating?"disabled":""}>${no(k)}</button>`).join("")}</div></section><aside class="turn-side"><div class="turn-state ${u?"done":s?"waiting":""}">${u?"PICK LOCKED IN":s?"EVERYONE PICKS AT ONCE":"YOUR TURN"}</div><p class="turn-message">${u?s?"Waiting for the other players…":"Your card is away. Let’s see where it lands.":"Pick a card and dodge those bullheads."}</p><button id="playCard" class="primary-button play-button" ${M.selected===null||u||!r||M.animating?"disabled":""}>Play card <span>↗</span></button><div class="turn-help">${(b=M.lastReveal)!=null&&b.length?sD(n.lastReveal,e.id):"Lowest bigger card wins the row."}</div></aside></div></section>`),Kt("[data-card]",(k,O)=>{O.getAttribute("aria-disabled")!=="true"&&(M.selected=+O.dataset.card,nr())}),Kt("#playCard",()=>{M.selected!=null&&!M.animating&&(M.mode==="local"?$I(M.selected):QI(M.selected))}),Kt("[data-row-choice]",(k,O)=>eD(+O.dataset.rowChoice)),Kt(".hand-reaction-trigger",(k,O)=>{var X;const G=O.nextElementSibling,W=O.getAttribute("aria-expanded")!=="true";O.setAttribute("aria-expanded",String(W)),G.hidden=!W,(X=O.closest(".hand-reaction-control"))==null||X.classList.toggle("is-expanded",W)}),Kt(".hand-reaction-option",(k,O)=>yM(O.dataset.reaction)),n.phase==="countdown"?nD(n):(clearInterval(M.countdownInterval),M.countdownInterval=null),iD(),(C=M.replay)!=null&&C.active&&aD()}function sD(n,e){const t=n.find(r=>r.playerId===e);return t?`${t.penalty?`You took ${t.penalty} bullheads.`:`Your ${t.card} landed in row ${t.rowIndex+1}.`} ${n.length>1?n.filter(r=>r.playerId!==e).map(r=>`${Wt(r.name)} ${r.penalty?`took ${r.penalty} bulls`:`played ${r.card}`}`).join(" · "):""}`:n.map(r=>`${Wt(r.name)} played ${r.card}${r.penalty?` and took ${r.penalty} bulls`:""}`).join(" · ")}function ag(){document.body.classList.add("match-mode"),M.screen="result",Kr();const n=M.game.players.slice().sort((t,r)=>t.total-r.total),e=n[0];er(_i,`<section class="result-screen"><div class="result-mark">🏆</div><div class="eyebrow">THAT’S A WRAP</div><h1>${e.id===M.clientId?"You kept your cool!":`${Wt(e.name)} takes it!`}</h1><p>Fewest bullheads at the table. A suspiciously good run.</p><div class="final-scores">${n.map((t,r)=>`<div class="final-score"><span>${r===0?"✳ ":""}${Wt(t.name)}${t.id===M.clientId?" (you)":""}</span><b aria-label="${t.total} bullheads">${t.total}${Mr()}</b></div>`).join("")}</div><button class="primary-button lobby-start" id="playAgain">Play again ↗</button><button class="pill-button" id="backHome">Back to table</button></section>`),Kt("#playAgain",()=>{M.mode.startsWith("online")?M.host?(M.players.forEach(r=>{r.score=0,r.total=0}),ed()):vi("Ask the host to start another game."):Jm()}),Kt("#backHome",bM)}function dd(){if(M.peer)try{M.peer.destroy()}catch{}clearTimeout(M.countdownTimer),clearInterval(M.countdownInterval),clearTimeout(M.reconnectTimer),clearTimeout(M.peerReconnectTimer),clearTimeout(M.disconnectAdvanceTimer),document.querySelectorAll(".flying-card,.flying-back").forEach(n=>n.remove()),M.animating=!1,M.replay=null,M.replayKey=null,M.revealOrigins={},M.stageSeen=new Set,M.stageTurnKey=null,M.reactionCooldowns.clear(),M.recoveringGuest=!1,M.resumeToken=null,M.peer=null,M.connection=null,M.connections.clear(),M.host=!1,M.clientId=null,M.roomId="",M.players=[],history.replaceState({},"",location.pathname)}function bM(){M.host&&localStorage.removeItem(qm),localStorage.removeItem(fs),dd(),M.screen="home",M.game=null,M.selected=null,M.tab="rooms",M.screenTransition=!0,Da()}export{Vm as W};
