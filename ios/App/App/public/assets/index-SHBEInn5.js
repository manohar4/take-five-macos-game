(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const sb="modulepreload",ob=function(n){return"/"+n},A0={},iS=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let u=function(h){return Promise.all(h.map(v=>Promise.resolve(v).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));s=u(t.map(h=>{if(h=ob(h),h in A0)return;A0[h]=!0;const v=h.endsWith(".css"),m=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const g=document.createElement("link");if(g.rel=v?"stylesheet":sb,v||(g.as="script"),g.crossOrigin="",g.href=h,f&&g.setAttribute("nonce",f),document.head.appendChild(g),v)return new Promise((x,E)=>{g.addEventListener("load",x),g.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return s.then(u=>{for(const d of u||[])d.status==="rejected"&&o(d.reason);return e().catch(o)})};function Si(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function rS(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var s=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:function(){return n[r]}})}),t}var Vf={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0;function lb(){if(C0)return xt;C0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),m=Symbol.iterator;function g(F){return F===null||typeof F!="object"?null:(F=m&&F[m]||F["@@iterator"],typeof F=="function"?F:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,R={};function y(F,ee,Ae){this.props=F,this.context=ee,this.refs=R,this.updater=Ae||x}y.prototype.isReactComponent={},y.prototype.setState=function(F,ee){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ee,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function S(){}S.prototype=y.prototype;function w(F,ee,Ae){this.props=F,this.context=ee,this.refs=R,this.updater=Ae||x}var N=w.prototype=new S;N.constructor=w,E(N,y.prototype),N.isPureReactComponent=!0;var D=Array.isArray,U=Object.prototype.hasOwnProperty,I={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function P(F,ee,Ae){var ne,xe={},Ee=null,Ce=null;if(ee!=null)for(ne in ee.ref!==void 0&&(Ce=ee.ref),ee.key!==void 0&&(Ee=""+ee.key),ee)U.call(ee,ne)&&!b.hasOwnProperty(ne)&&(xe[ne]=ee[ne]);var _e=arguments.length-2;if(_e===1)xe.children=Ae;else if(1<_e){for(var Be=Array(_e),mt=0;mt<_e;mt++)Be[mt]=arguments[mt+2];xe.children=Be}if(F&&F.defaultProps)for(ne in _e=F.defaultProps,_e)xe[ne]===void 0&&(xe[ne]=_e[ne]);return{$$typeof:n,type:F,key:Ee,ref:Ce,props:xe,_owner:I.current}}function G(F,ee){return{$$typeof:n,type:F.type,key:ee,ref:F.ref,props:F.props,_owner:F._owner}}function O(F){return typeof F=="object"&&F!==null&&F.$$typeof===n}function B(F){var ee={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ae){return ee[Ae]})}var V=/\/+/g;function X(F,ee){return typeof F=="object"&&F!==null&&F.key!=null?B(""+F.key):ee.toString(36)}function k(F,ee,Ae,ne,xe){var Ee=typeof F;(Ee==="undefined"||Ee==="boolean")&&(F=null);var Ce=!1;if(F===null)Ce=!0;else switch(Ee){case"string":case"number":Ce=!0;break;case"object":switch(F.$$typeof){case n:case e:Ce=!0}}if(Ce)return Ce=F,xe=xe(Ce),F=ne===""?"."+X(Ce,0):ne,D(xe)?(Ae="",F!=null&&(Ae=F.replace(V,"$&/")+"/"),k(xe,ee,Ae,"",function(mt){return mt})):xe!=null&&(O(xe)&&(xe=G(xe,Ae+(!xe.key||Ce&&Ce.key===xe.key?"":(""+xe.key).replace(V,"$&/")+"/")+F)),ee.push(xe)),1;if(Ce=0,ne=ne===""?".":ne+":",D(F))for(var _e=0;_e<F.length;_e++){Ee=F[_e];var Be=ne+X(Ee,_e);Ce+=k(Ee,ee,Ae,Be,xe)}else if(Be=g(F),typeof Be=="function")for(F=Be.call(F),_e=0;!(Ee=F.next()).done;)Ee=Ee.value,Be=ne+X(Ee,_e++),Ce+=k(Ee,ee,Ae,Be,xe);else if(Ee==="object")throw ee=String(F),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return Ce}function ae(F,ee,Ae){if(F==null)return F;var ne=[],xe=0;return k(F,ne,"","",function(Ee){return ee.call(Ae,Ee,xe++)}),ne}function ie(F){if(F._status===-1){var ee=F._result;ee=ee(),ee.then(function(Ae){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ae)},function(Ae){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ae)}),F._status===-1&&(F._status=0,F._result=ee)}if(F._status===1)return F._result.default;throw F._result}var te={current:null},j={transition:null},Y={ReactCurrentDispatcher:te,ReactCurrentBatchConfig:j,ReactCurrentOwner:I};function J(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:ae,forEach:function(F,ee,Ae){ae(F,function(){ee.apply(this,arguments)},Ae)},count:function(F){var ee=0;return ae(F,function(){ee++}),ee},toArray:function(F){return ae(F,function(ee){return ee})||[]},only:function(F){if(!O(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},xt.Component=y,xt.Fragment=t,xt.Profiler=s,xt.PureComponent=w,xt.StrictMode=r,xt.Suspense=f,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,xt.act=J,xt.cloneElement=function(F,ee,Ae){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var ne=E({},F.props),xe=F.key,Ee=F.ref,Ce=F._owner;if(ee!=null){if(ee.ref!==void 0&&(Ee=ee.ref,Ce=I.current),ee.key!==void 0&&(xe=""+ee.key),F.type&&F.type.defaultProps)var _e=F.type.defaultProps;for(Be in ee)U.call(ee,Be)&&!b.hasOwnProperty(Be)&&(ne[Be]=ee[Be]===void 0&&_e!==void 0?_e[Be]:ee[Be])}var Be=arguments.length-2;if(Be===1)ne.children=Ae;else if(1<Be){_e=Array(Be);for(var mt=0;mt<Be;mt++)_e[mt]=arguments[mt+2];ne.children=_e}return{$$typeof:n,type:F.type,key:xe,ref:Ee,props:ne,_owner:Ce}},xt.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:o,_context:F},F.Consumer=F},xt.createElement=P,xt.createFactory=function(F){var ee=P.bind(null,F);return ee.type=F,ee},xt.createRef=function(){return{current:null}},xt.forwardRef=function(F){return{$$typeof:d,render:F}},xt.isValidElement=O,xt.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:ie}},xt.memo=function(F,ee){return{$$typeof:h,type:F,compare:ee===void 0?null:ee}},xt.startTransition=function(F){var ee=j.transition;j.transition={};try{F()}finally{j.transition=ee}},xt.unstable_act=J,xt.useCallback=function(F,ee){return te.current.useCallback(F,ee)},xt.useContext=function(F){return te.current.useContext(F)},xt.useDebugValue=function(){},xt.useDeferredValue=function(F){return te.current.useDeferredValue(F)},xt.useEffect=function(F,ee){return te.current.useEffect(F,ee)},xt.useId=function(){return te.current.useId()},xt.useImperativeHandle=function(F,ee,Ae){return te.current.useImperativeHandle(F,ee,Ae)},xt.useInsertionEffect=function(F,ee){return te.current.useInsertionEffect(F,ee)},xt.useLayoutEffect=function(F,ee){return te.current.useLayoutEffect(F,ee)},xt.useMemo=function(F,ee){return te.current.useMemo(F,ee)},xt.useReducer=function(F,ee,Ae){return te.current.useReducer(F,ee,Ae)},xt.useRef=function(F){return te.current.useRef(F)},xt.useState=function(F){return te.current.useState(F)},xt.useSyncExternalStore=function(F,ee,Ae){return te.current.useSyncExternalStore(F,ee,Ae)},xt.useTransition=function(){return te.current.useTransition()},xt.version="18.3.1",xt}var P0;function aS(){return P0||(P0=1,Vf.exports=lb()),Vf.exports}var st=aS();const co=Si(st);var Gu={},Wf={exports:{}},Jn={},$f={exports:{}},Xf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0;function ub(){return L0||(L0=1,(function(n){function e(j,Y){var J=j.length;j.push(Y);e:for(;0<J;){var F=J-1>>>1,ee=j[F];if(0<s(ee,Y))j[F]=Y,j[J]=ee,J=F;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var Y=j[0],J=j.pop();if(J!==Y){j[0]=J;e:for(var F=0,ee=j.length,Ae=ee>>>1;F<Ae;){var ne=2*(F+1)-1,xe=j[ne],Ee=ne+1,Ce=j[Ee];if(0>s(xe,J))Ee<ee&&0>s(Ce,xe)?(j[F]=Ce,j[Ee]=J,F=Ee):(j[F]=xe,j[ne]=J,F=ne);else if(Ee<ee&&0>s(Ce,J))j[F]=Ce,j[Ee]=J,F=Ee;else break e}}return Y}function s(j,Y){var J=j.sortIndex-Y.sortIndex;return J!==0?J:j.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],h=[],v=1,m=null,g=3,x=!1,E=!1,R=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(j){for(var Y=t(h);Y!==null;){if(Y.callback===null)r(h);else if(Y.startTime<=j)r(h),Y.sortIndex=Y.expirationTime,e(f,Y);else break;Y=t(h)}}function D(j){if(R=!1,N(j),!E)if(t(f)!==null)E=!0,ie(U);else{var Y=t(h);Y!==null&&te(D,Y.startTime-j)}}function U(j,Y){E=!1,R&&(R=!1,S(P),P=-1),x=!0;var J=g;try{for(N(Y),m=t(f);m!==null&&(!(m.expirationTime>Y)||j&&!B());){var F=m.callback;if(typeof F=="function"){m.callback=null,g=m.priorityLevel;var ee=F(m.expirationTime<=Y);Y=n.unstable_now(),typeof ee=="function"?m.callback=ee:m===t(f)&&r(f),N(Y)}else r(f);m=t(f)}if(m!==null)var Ae=!0;else{var ne=t(h);ne!==null&&te(D,ne.startTime-Y),Ae=!1}return Ae}finally{m=null,g=J,x=!1}}var I=!1,b=null,P=-1,G=5,O=-1;function B(){return!(n.unstable_now()-O<G)}function V(){if(b!==null){var j=n.unstable_now();O=j;var Y=!0;try{Y=b(!0,j)}finally{Y?X():(I=!1,b=null)}}else I=!1}var X;if(typeof w=="function")X=function(){w(V)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,ae=k.port2;k.port1.onmessage=V,X=function(){ae.postMessage(null)}}else X=function(){y(V,0)};function ie(j){b=j,I||(I=!0,X())}function te(j,Y){P=y(function(){j(n.unstable_now())},Y)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(j){j.callback=null},n.unstable_continueExecution=function(){E||x||(E=!0,ie(U))},n.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<j?Math.floor(1e3/j):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(j){switch(g){case 1:case 2:case 3:var Y=3;break;default:Y=g}var J=g;g=Y;try{return j()}finally{g=J}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(j,Y){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var J=g;g=j;try{return Y()}finally{g=J}},n.unstable_scheduleCallback=function(j,Y,J){var F=n.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?F+J:F):J=F,j){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=J+ee,j={id:v++,callback:Y,priorityLevel:j,startTime:J,expirationTime:ee,sortIndex:-1},J>F?(j.sortIndex=J,e(h,j),t(f)===null&&j===t(h)&&(R?(S(P),P=-1):R=!0,te(D,J-F))):(j.sortIndex=ee,e(f,j),E||x||(E=!0,ie(U))),j},n.unstable_shouldYield=B,n.unstable_wrapCallback=function(j){var Y=g;return function(){var J=g;g=Y;try{return j.apply(this,arguments)}finally{g=J}}}})(Xf)),Xf}var D0;function cb(){return D0||(D0=1,$f.exports=ub()),$f.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0;function db(){if(I0)return Jn;I0=1;var n=aS(),e=cb();function t(i){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)a+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function o(i,a){u(i,a),u(i+"Capture",a)}function u(i,a){for(s[i]=a,i=0;i<a.length;i++)r.add(a[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},m={};function g(i){return f.call(m,i)?!0:f.call(v,i)?!1:h.test(i)?m[i]=!0:(v[i]=!0,!1)}function x(i,a,l,c){if(l!==null&&l.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return c?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,a,l,c){if(a===null||typeof a>"u"||x(i,a,l,c))return!0;if(c)return!1;if(l!==null)switch(l.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function R(i,a,l,c,p,_,A){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=a,this.sanitizeURL=_,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new R(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var a=i[0];y[a]=new R(a,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new R(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new R(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new R(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new R(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new R(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new R(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new R(i,5,!1,i.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function w(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var a=i.replace(S,w);y[a]=new R(a,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var a=i.replace(S,w);y[a]=new R(a,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var a=i.replace(S,w);y[a]=new R(a,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new R(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new R(i,1,!1,i.toLowerCase(),null,!0,!0)});function N(i,a,l,c){var p=y.hasOwnProperty(a)?y[a]:null;(p!==null?p.type!==0:c||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(E(a,l,p,c)&&(l=null),c||p===null?g(a)&&(l===null?i.removeAttribute(a):i.setAttribute(a,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(a=p.attributeName,c=p.attributeNamespace,l===null?i.removeAttribute(a):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,c?i.setAttributeNS(c,a,l):i.setAttribute(a,l))))}var D=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),I=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),B=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),te=Symbol.for("react.offscreen"),j=Symbol.iterator;function Y(i){return i===null||typeof i!="object"?null:(i=j&&i[j]||i["@@iterator"],typeof i=="function"?i:null)}var J=Object.assign,F;function ee(i){if(F===void 0)try{throw Error()}catch(l){var a=l.stack.trim().match(/\n( *(at )?)/);F=a&&a[1]||""}return`
`+F+i}var Ae=!1;function ne(i,a){if(!i||Ae)return"";Ae=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(fe){var c=fe}Reflect.construct(i,[],a)}else{try{a.call()}catch(fe){c=fe}i.call(a.prototype)}else{try{throw Error()}catch(fe){c=fe}i()}}catch(fe){if(fe&&c&&typeof fe.stack=="string"){for(var p=fe.stack.split(`
`),_=c.stack.split(`
`),A=p.length-1,z=_.length-1;1<=A&&0<=z&&p[A]!==_[z];)z--;for(;1<=A&&0<=z;A--,z--)if(p[A]!==_[z]){if(A!==1||z!==1)do if(A--,z--,0>z||p[A]!==_[z]){var q=`
`+p[A].replace(" at new "," at ");return i.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",i.displayName)),q}while(1<=A&&0<=z);break}}}finally{Ae=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?ee(i):""}function xe(i){switch(i.tag){case 5:return ee(i.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return i=ne(i.type,!1),i;case 11:return i=ne(i.type.render,!1),i;case 1:return i=ne(i.type,!0),i;default:return""}}function Ee(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case b:return"Fragment";case I:return"Portal";case G:return"Profiler";case P:return"StrictMode";case X:return"Suspense";case k:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case B:return(i.displayName||"Context")+".Consumer";case O:return(i._context.displayName||"Context")+".Provider";case V:var a=i.render;return i=i.displayName,i||(i=a.displayName||a.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ae:return a=i.displayName||null,a!==null?a:Ee(i.type)||"Memo";case ie:a=i._payload,i=i._init;try{return Ee(i(a))}catch{}}return null}function Ce(i){var a=i.type;switch(i.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=a.render,i=i.displayName||i.name||"",a.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(a);case 8:return a===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function _e(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Be(i){var a=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function mt(i){var a=Be(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,a),c=""+i[a];if(!i.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,a,{configurable:!0,get:function(){return p.call(this)},set:function(A){c=""+A,_.call(this,A)}}),Object.defineProperty(i,a,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){i._valueTracker=null,delete i[a]}}}}function Ze(i){i._valueTracker||(i._valueTracker=mt(i))}function lt(i){if(!i)return!1;var a=i._valueTracker;if(!a)return!0;var l=a.getValue(),c="";return i&&(c=Be(i)?i.checked?"true":"false":i.value),i=c,i!==l?(a.setValue(i),!0):!1}function vt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function ut(i,a){var l=a.checked;return J({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function kt(i,a){var l=a.defaultValue==null?"":a.defaultValue,c=a.checked!=null?a.checked:a.defaultChecked;l=_e(a.value!=null?a.value:l),i._wrapperState={initialChecked:c,initialValue:l,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function Bt(i,a){a=a.checked,a!=null&&N(i,"checked",a,!1)}function Zt(i,a){Bt(i,a);var l=_e(a.value),c=a.type;if(l!=null)c==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(c==="submit"||c==="reset"){i.removeAttribute("value");return}a.hasOwnProperty("value")?vn(i,a.type,l):a.hasOwnProperty("defaultValue")&&vn(i,a.type,_e(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(i.defaultChecked=!!a.defaultChecked)}function Lt(i,a,l){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var c=a.type;if(!(c!=="submit"&&c!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+i._wrapperState.initialValue,l||a===i.value||(i.value=a),i.defaultValue=a}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function vn(i,a,l){(a!=="number"||vt(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Dt=Array.isArray;function jt(i,a,l,c){if(i=i.options,a){a={};for(var p=0;p<l.length;p++)a["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=a.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&c&&(i[l].defaultSelected=!0)}else{for(l=""+_e(l),a=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,c&&(i[p].defaultSelected=!0);return}a!==null||i[p].disabled||(a=i[p])}a!==null&&(a.selected=!0)}}function an(i,a){if(a.dangerouslySetInnerHTML!=null)throw Error(t(91));return J({},a,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function hn(i,a){var l=a.value;if(l==null){if(l=a.children,a=a.defaultValue,l!=null){if(a!=null)throw Error(t(92));if(Dt(l)){if(1<l.length)throw Error(t(93));l=l[0]}a=l}a==null&&(a=""),l=a}i._wrapperState={initialValue:_e(l)}}function K(i,a){var l=_e(a.value),c=_e(a.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),a.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),c!=null&&(i.defaultValue=""+c)}function pn(i){var a=i.textContent;a===i._wrapperState.initialValue&&a!==""&&a!==null&&(i.value=a)}function At(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ct(i,a){return i==null||i==="http://www.w3.org/1999/xhtml"?At(a):i==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Ie,he=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,l,c,p){MSApp.execUnsafeLocalFunction(function(){return i(a,l,c,p)})}:i})(function(i,a){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=a;else{for(Ie=Ie||document.createElement("div"),Ie.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=Ie.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;a.firstChild;)i.appendChild(a.firstChild)}});function ve(i,a){if(a){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=a;return}}i.textContent=a}var ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},C=["Webkit","ms","Moz","O"];Object.keys(ye).forEach(function(i){C.forEach(function(a){a=a+i.charAt(0).toUpperCase()+i.substring(1),ye[a]=ye[i]})});function T(i,a,l){return a==null||typeof a=="boolean"||a===""?"":l||typeof a!="number"||a===0||ye.hasOwnProperty(i)&&ye[i]?(""+a).trim():a+"px"}function $(i,a){i=i.style;for(var l in a)if(a.hasOwnProperty(l)){var c=l.indexOf("--")===0,p=T(l,a[l],c);l==="float"&&(l="cssFloat"),c?i.setProperty(l,p):i[l]=p}}var me=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Q(i,a){if(a){if(me[i]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(t(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(t(61))}if(a.style!=null&&typeof a.style!="object")throw Error(t(62))}}function Me(i,a){if(i.indexOf("-")===-1)return typeof a.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function de(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ge=null,Le=null,H=null;function Se(i){if(i=Fo(i)){if(typeof ge!="function")throw Error(t(280));var a=i.stateNode;a&&(a=iu(a),ge(i.stateNode,i.type,a))}}function pe(i){Le?H?H.push(i):H=[i]:Le=i}function Ue(){if(Le){var i=Le,a=H;if(H=Le=null,Se(i),a)for(i=0;i<a.length;i++)Se(a[i])}}function De(i,a){return i(a)}function Ne(){}var je=!1;function ft(i,a,l){if(je)return i(a,l);je=!0;try{return De(i,a,l)}finally{je=!1,(Le!==null||H!==null)&&(Ne(),Ue())}}function Te(i,a){var l=i.stateNode;if(l===null)return null;var c=iu(l);if(c===null)return null;l=c[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,a,typeof l));return l}var tt=!1;if(d)try{var ot={};Object.defineProperty(ot,"passive",{get:function(){tt=!0}}),window.addEventListener("test",ot,ot),window.removeEventListener("test",ot,ot)}catch{tt=!1}function He(i,a,l,c,p,_,A,z,q){var fe=Array.prototype.slice.call(arguments,3);try{a.apply(l,fe)}catch(Re){this.onError(Re)}}var St=!1,$t=null,Ln=!1,ea=null,rr={onError:function(i){St=!0,$t=i}};function ta(i,a,l,c,p,_,A,z,q){St=!1,$t=null,He.apply(rr,arguments)}function Ba(i,a,l,c,p,_,A,z,q){if(ta.apply(this,arguments),St){if(St){var fe=$t;St=!1,$t=null}else throw Error(t(198));Ln||(Ln=!0,ea=fe)}}function Mi(i){var a=i,l=i;if(i.alternate)for(;a.return;)a=a.return;else{i=a;do a=i,(a.flags&4098)!==0&&(l=a.return),i=a.return;while(i)}return a.tag===3?l:null}function ai(i){if(i.tag===13){var a=i.memoizedState;if(a===null&&(i=i.alternate,i!==null&&(a=i.memoizedState)),a!==null)return a.dehydrated}return null}function na(i){if(Mi(i)!==i)throw Error(t(188))}function ar(i){var a=i.alternate;if(!a){if(a=Mi(i),a===null)throw Error(t(188));return a!==i?null:i}for(var l=i,c=a;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(c=p.return,c!==null){l=c;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return na(p),i;if(_===c)return na(p),a;_=_.sibling}throw Error(t(188))}if(l.return!==c.return)l=p,c=_;else{for(var A=!1,z=p.child;z;){if(z===l){A=!0,l=p,c=_;break}if(z===c){A=!0,c=p,l=_;break}z=z.sibling}if(!A){for(z=_.child;z;){if(z===l){A=!0,l=_,c=p;break}if(z===c){A=!0,c=_,l=p;break}z=z.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==c)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:a}function ia(i){return i=ar(i),i!==null?Ve(i):null}function Ve(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var a=Ve(i);if(a!==null)return a;i=i.sibling}return null}var za=e.unstable_scheduleCallback,zn=e.unstable_cancelCallback,sr=e.unstable_shouldYield,ys=e.unstable_requestPaint,Ht=e.unstable_now,Ha=e.unstable_getCurrentPriorityLevel,ra=e.unstable_ImmediatePriority,Ga=e.unstable_UserBlockingPriority,Ar=e.unstable_NormalPriority,Va=e.unstable_LowPriority,L=e.unstable_IdlePriority,W=null,le=null;function se(i){if(le&&typeof le.onCommitFiberRoot=="function")try{le.onCommitFiberRoot(W,i,void 0,(i.current.flags&128)===128)}catch{}}var re=Math.clz32?Math.clz32:Fe,ke=Math.log,$e=Math.LN2;function Fe(i){return i>>>=0,i===0?32:31-(ke(i)/$e|0)|0}var ze=64,Xe=4194304;function it(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function pt(i,a){var l=i.pendingLanes;if(l===0)return 0;var c=0,p=i.suspendedLanes,_=i.pingedLanes,A=l&268435455;if(A!==0){var z=A&~p;z!==0?c=it(z):(_&=A,_!==0&&(c=it(_)))}else A=l&~p,A!==0?c=it(A):_!==0&&(c=it(_));if(c===0)return 0;if(a!==0&&a!==c&&(a&p)===0&&(p=c&-c,_=a&-a,p>=_||p===16&&(_&4194240)!==0))return a;if((c&4)!==0&&(c|=l&16),a=i.entangledLanes,a!==0)for(i=i.entanglements,a&=c;0<a;)l=31-re(a),p=1<<l,c|=i[l],a&=~p;return c}function qe(i,a){switch(i){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gt(i,a){for(var l=i.suspendedLanes,c=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var A=31-re(_),z=1<<A,q=p[A];q===-1?((z&l)===0||(z&c)!==0)&&(p[A]=qe(z,a)):q<=a&&(i.expiredLanes|=z),_&=~z}}function zt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function It(){var i=ze;return ze<<=1,(ze&4194240)===0&&(ze=64),i}function Rt(i){for(var a=[],l=0;31>l;l++)a.push(i);return a}function Xt(i,a,l){i.pendingLanes|=a,a!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,a=31-re(a),i[a]=l}function Ye(i,a){var l=i.pendingLanes&~a;i.pendingLanes=a,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=a,i.mutableReadLanes&=a,i.entangledLanes&=a,a=i.entanglements;var c=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-re(l),_=1<<p;a[p]=0,c[p]=-1,i[p]=-1,l&=~_}}function sn(i,a){var l=i.entangledLanes|=a;for(i=i.entanglements;l;){var c=31-re(l),p=1<<c;p&a|i[c]&a&&(i[c]|=a),l&=~p}}var Je=0;function si(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var on,Fi,Xn,oi,yt,Jt=!1,_n=[],bt=null,Ut=null,cn=null,ki=new Map,aa=new Map,Bi=[],Hl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ss(i,a){switch(i){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":ki.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":aa.delete(a.pointerId)}}function Wa(i,a,l,c,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:a,domEventName:l,eventSystemFlags:c,nativeEvent:_,targetContainers:[p]},a!==null&&(a=Fo(a),a!==null&&Fi(a)),i):(i.eventSystemFlags|=c,a=i.targetContainers,p!==null&&a.indexOf(p)===-1&&a.push(p),i)}function Gl(i,a,l,c,p){switch(a){case"focusin":return bt=Wa(bt,i,a,l,c,p),!0;case"dragenter":return Ut=Wa(Ut,i,a,l,c,p),!0;case"mouseover":return cn=Wa(cn,i,a,l,c,p),!0;case"pointerover":var _=p.pointerId;return ki.set(_,Wa(ki.get(_)||null,i,a,l,c,p)),!0;case"gotpointercapture":return _=p.pointerId,aa.set(_,Wa(aa.get(_)||null,i,a,l,c,p)),!0}return!1}function Mo(i){var a=Xa(i.target);if(a!==null){var l=Mi(a);if(l!==null){if(a=l.tag,a===13){if(a=ai(l),a!==null){i.blockedOn=a,yt(i.priority,function(){Xn(l)});return}}else if(a===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function $a(i){if(i.blockedOn!==null)return!1;for(var a=i.targetContainers;0<a.length;){var l=md(i.domEventName,i.eventSystemFlags,a[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var c=new l.constructor(l.type,l);be=c,l.target.dispatchEvent(c),be=null}else return a=Fo(l),a!==null&&Fi(a),i.blockedOn=l,!1;a.shift()}return!0}function Eo(i,a,l){$a(i)&&l.delete(a)}function Vl(){Jt=!1,bt!==null&&$a(bt)&&(bt=null),Ut!==null&&$a(Ut)&&(Ut=null),cn!==null&&$a(cn)&&(cn=null),ki.forEach(Eo),aa.forEach(Eo)}function bo(i,a){i.blockedOn===a&&(i.blockedOn=null,Jt||(Jt=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Vl)))}function wo(i){function a(p){return bo(p,i)}if(0<_n.length){bo(_n[0],i);for(var l=1;l<_n.length;l++){var c=_n[l];c.blockedOn===i&&(c.blockedOn=null)}}for(bt!==null&&bo(bt,i),Ut!==null&&bo(Ut,i),cn!==null&&bo(cn,i),ki.forEach(a),aa.forEach(a),l=0;l<Bi.length;l++)c=Bi[l],c.blockedOn===i&&(c.blockedOn=null);for(;0<Bi.length&&(l=Bi[0],l.blockedOn===null);)Mo(l),l.blockedOn===null&&Bi.shift()}var xs=D.ReactCurrentBatchConfig,Wl=!0;function LM(i,a,l,c){var p=Je,_=xs.transition;xs.transition=null;try{Je=1,pd(i,a,l,c)}finally{Je=p,xs.transition=_}}function DM(i,a,l,c){var p=Je,_=xs.transition;xs.transition=null;try{Je=4,pd(i,a,l,c)}finally{Je=p,xs.transition=_}}function pd(i,a,l,c){if(Wl){var p=md(i,a,l,c);if(p===null)Dd(i,a,c,$l,l),Ss(i,c);else if(Gl(p,i,a,l,c))c.stopPropagation();else if(Ss(i,c),a&4&&-1<Hl.indexOf(i)){for(;p!==null;){var _=Fo(p);if(_!==null&&on(_),_=md(i,a,l,c),_===null&&Dd(i,a,c,$l,l),_===p)break;p=_}p!==null&&c.stopPropagation()}else Dd(i,a,c,null,l)}}var $l=null;function md(i,a,l,c){if($l=null,i=de(c),i=Xa(i),i!==null)if(a=Mi(i),a===null)i=null;else if(l=a.tag,l===13){if(i=ai(a),i!==null)return i;i=null}else if(l===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;i=null}else a!==i&&(i=null);return $l=i,null}function pg(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ha()){case ra:return 1;case Ga:return 4;case Ar:case Va:return 16;case L:return 536870912;default:return 16}default:return 16}}var sa=null,gd=null,Xl=null;function mg(){if(Xl)return Xl;var i,a=gd,l=a.length,c,p="value"in sa?sa.value:sa.textContent,_=p.length;for(i=0;i<l&&a[i]===p[i];i++);var A=l-i;for(c=1;c<=A&&a[l-c]===p[_-c];c++);return Xl=p.slice(i,1<c?1-c:void 0)}function ql(i){var a=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&a===13&&(i=13)):i=a,i===10&&(i=13),32<=i||i===13?i:0}function Yl(){return!0}function gg(){return!1}function li(i){function a(l,c,p,_,A){this._reactName=l,this._targetInst=p,this.type=c,this.nativeEvent=_,this.target=A,this.currentTarget=null;for(var z in i)i.hasOwnProperty(z)&&(l=i[z],this[z]=l?l(_):_[z]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Yl:gg,this.isPropagationStopped=gg,this}return J(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Yl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Yl)},persist:function(){},isPersistent:Yl}),a}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vd=li(Ms),To=J({},Ms,{view:0,detail:0}),IM=li(To),_d,yd,Ro,Kl=J({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xd,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ro&&(Ro&&i.type==="mousemove"?(_d=i.screenX-Ro.screenX,yd=i.screenY-Ro.screenY):yd=_d=0,Ro=i),_d)},movementY:function(i){return"movementY"in i?i.movementY:yd}}),vg=li(Kl),NM=J({},Kl,{dataTransfer:0}),OM=li(NM),UM=J({},To,{relatedTarget:0}),Sd=li(UM),FM=J({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),kM=li(FM),BM=J({},Ms,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),zM=li(BM),HM=J({},Ms,{data:0}),_g=li(HM),GM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},VM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $M(i){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(i):(i=WM[i])?!!a[i]:!1}function xd(){return $M}var XM=J({},To,{key:function(i){if(i.key){var a=GM[i.key]||i.key;if(a!=="Unidentified")return a}return i.type==="keypress"?(i=ql(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?VM[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xd,charCode:function(i){return i.type==="keypress"?ql(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ql(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),qM=li(XM),YM=J({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yg=li(YM),KM=J({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xd}),ZM=li(KM),jM=J({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),JM=li(jM),QM=J({},Kl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),eE=li(QM),tE=[9,13,27,32],Md=d&&"CompositionEvent"in window,Ao=null;d&&"documentMode"in document&&(Ao=document.documentMode);var nE=d&&"TextEvent"in window&&!Ao,Sg=d&&(!Md||Ao&&8<Ao&&11>=Ao),xg=" ",Mg=!1;function Eg(i,a){switch(i){case"keyup":return tE.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bg(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Es=!1;function iE(i,a){switch(i){case"compositionend":return bg(a);case"keypress":return a.which!==32?null:(Mg=!0,xg);case"textInput":return i=a.data,i===xg&&Mg?null:i;default:return null}}function rE(i,a){if(Es)return i==="compositionend"||!Md&&Eg(i,a)?(i=mg(),Xl=gd=sa=null,Es=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Sg&&a.locale!=="ko"?null:a.data;default:return null}}var aE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wg(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a==="input"?!!aE[i.type]:a==="textarea"}function Tg(i,a,l,c){pe(c),a=eu(a,"onChange"),0<a.length&&(l=new vd("onChange","change",null,l,c),i.push({event:l,listeners:a}))}var Co=null,Po=null;function sE(i){Wg(i,0)}function Zl(i){var a=As(i);if(lt(a))return i}function oE(i,a){if(i==="change")return a}var Rg=!1;if(d){var Ed;if(d){var bd="oninput"in document;if(!bd){var Ag=document.createElement("div");Ag.setAttribute("oninput","return;"),bd=typeof Ag.oninput=="function"}Ed=bd}else Ed=!1;Rg=Ed&&(!document.documentMode||9<document.documentMode)}function Cg(){Co&&(Co.detachEvent("onpropertychange",Pg),Po=Co=null)}function Pg(i){if(i.propertyName==="value"&&Zl(Po)){var a=[];Tg(a,Po,i,de(i)),ft(sE,a)}}function lE(i,a,l){i==="focusin"?(Cg(),Co=a,Po=l,Co.attachEvent("onpropertychange",Pg)):i==="focusout"&&Cg()}function uE(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Zl(Po)}function cE(i,a){if(i==="click")return Zl(a)}function dE(i,a){if(i==="input"||i==="change")return Zl(a)}function fE(i,a){return i===a&&(i!==0||1/i===1/a)||i!==i&&a!==a}var zi=typeof Object.is=="function"?Object.is:fE;function Lo(i,a){if(zi(i,a))return!0;if(typeof i!="object"||i===null||typeof a!="object"||a===null)return!1;var l=Object.keys(i),c=Object.keys(a);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var p=l[c];if(!f.call(a,p)||!zi(i[p],a[p]))return!1}return!0}function Lg(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Dg(i,a){var l=Lg(i);i=0;for(var c;l;){if(l.nodeType===3){if(c=i+l.textContent.length,i<=a&&c>=a)return{node:l,offset:a-i};i=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Lg(l)}}function Ig(i,a){return i&&a?i===a?!0:i&&i.nodeType===3?!1:a&&a.nodeType===3?Ig(i,a.parentNode):"contains"in i?i.contains(a):i.compareDocumentPosition?!!(i.compareDocumentPosition(a)&16):!1:!1}function Ng(){for(var i=window,a=vt();a instanceof i.HTMLIFrameElement;){try{var l=typeof a.contentWindow.location.href=="string"}catch{l=!1}if(l)i=a.contentWindow;else break;a=vt(i.document)}return a}function wd(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a&&(a==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||a==="textarea"||i.contentEditable==="true")}function hE(i){var a=Ng(),l=i.focusedElem,c=i.selectionRange;if(a!==l&&l&&l.ownerDocument&&Ig(l.ownerDocument.documentElement,l)){if(c!==null&&wd(l)){if(a=c.start,i=c.end,i===void 0&&(i=a),"selectionStart"in l)l.selectionStart=a,l.selectionEnd=Math.min(i,l.value.length);else if(i=(a=l.ownerDocument||document)&&a.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(c.start,p);c=c.end===void 0?_:Math.min(c.end,p),!i.extend&&_>c&&(p=c,c=_,_=p),p=Dg(l,_);var A=Dg(l,c);p&&A&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==A.node||i.focusOffset!==A.offset)&&(a=a.createRange(),a.setStart(p.node,p.offset),i.removeAllRanges(),_>c?(i.addRange(a),i.extend(A.node,A.offset)):(a.setEnd(A.node,A.offset),i.addRange(a)))}}for(a=[],i=l;i=i.parentNode;)i.nodeType===1&&a.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<a.length;l++)i=a[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var pE=d&&"documentMode"in document&&11>=document.documentMode,bs=null,Td=null,Do=null,Rd=!1;function Og(i,a,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Rd||bs==null||bs!==vt(c)||(c=bs,"selectionStart"in c&&wd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Do&&Lo(Do,c)||(Do=c,c=eu(Td,"onSelect"),0<c.length&&(a=new vd("onSelect","select",null,a,l),i.push({event:a,listeners:c}),a.target=bs)))}function jl(i,a){var l={};return l[i.toLowerCase()]=a.toLowerCase(),l["Webkit"+i]="webkit"+a,l["Moz"+i]="moz"+a,l}var ws={animationend:jl("Animation","AnimationEnd"),animationiteration:jl("Animation","AnimationIteration"),animationstart:jl("Animation","AnimationStart"),transitionend:jl("Transition","TransitionEnd")},Ad={},Ug={};d&&(Ug=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function Jl(i){if(Ad[i])return Ad[i];if(!ws[i])return i;var a=ws[i],l;for(l in a)if(a.hasOwnProperty(l)&&l in Ug)return Ad[i]=a[l];return i}var Fg=Jl("animationend"),kg=Jl("animationiteration"),Bg=Jl("animationstart"),zg=Jl("transitionend"),Hg=new Map,Gg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function oa(i,a){Hg.set(i,a),o(a,[i])}for(var Cd=0;Cd<Gg.length;Cd++){var Pd=Gg[Cd],mE=Pd.toLowerCase(),gE=Pd[0].toUpperCase()+Pd.slice(1);oa(mE,"on"+gE)}oa(Fg,"onAnimationEnd"),oa(kg,"onAnimationIteration"),oa(Bg,"onAnimationStart"),oa("dblclick","onDoubleClick"),oa("focusin","onFocus"),oa("focusout","onBlur"),oa(zg,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));function Vg(i,a,l){var c=i.type||"unknown-event";i.currentTarget=l,Ba(c,a,void 0,i),i.currentTarget=null}function Wg(i,a){a=(a&4)!==0;for(var l=0;l<i.length;l++){var c=i[l],p=c.event;c=c.listeners;e:{var _=void 0;if(a)for(var A=c.length-1;0<=A;A--){var z=c[A],q=z.instance,fe=z.currentTarget;if(z=z.listener,q!==_&&p.isPropagationStopped())break e;Vg(p,z,fe),_=q}else for(A=0;A<c.length;A++){if(z=c[A],q=z.instance,fe=z.currentTarget,z=z.listener,q!==_&&p.isPropagationStopped())break e;Vg(p,z,fe),_=q}}}if(Ln)throw i=ea,Ln=!1,ea=null,i}function qt(i,a){var l=a[kd];l===void 0&&(l=a[kd]=new Set);var c=i+"__bubble";l.has(c)||($g(a,i,2,!1),l.add(c))}function Ld(i,a,l){var c=0;a&&(c|=4),$g(l,i,c,a)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function No(i){if(!i[Ql]){i[Ql]=!0,r.forEach(function(l){l!=="selectionchange"&&(vE.has(l)||Ld(l,!1,i),Ld(l,!0,i))});var a=i.nodeType===9?i:i.ownerDocument;a===null||a[Ql]||(a[Ql]=!0,Ld("selectionchange",!1,a))}}function $g(i,a,l,c){switch(pg(a)){case 1:var p=LM;break;case 4:p=DM;break;default:p=pd}l=p.bind(null,a,l,i),p=void 0,!tt||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(p=!0),c?p!==void 0?i.addEventListener(a,l,{capture:!0,passive:p}):i.addEventListener(a,l,!0):p!==void 0?i.addEventListener(a,l,{passive:p}):i.addEventListener(a,l,!1)}function Dd(i,a,l,c,p){var _=c;if((a&1)===0&&(a&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var z=c.stateNode.containerInfo;if(z===p||z.nodeType===8&&z.parentNode===p)break;if(A===4)for(A=c.return;A!==null;){var q=A.tag;if((q===3||q===4)&&(q=A.stateNode.containerInfo,q===p||q.nodeType===8&&q.parentNode===p))return;A=A.return}for(;z!==null;){if(A=Xa(z),A===null)return;if(q=A.tag,q===5||q===6){c=_=A;continue e}z=z.parentNode}}c=c.return}ft(function(){var fe=_,Re=de(l),Pe=[];e:{var we=Hg.get(i);if(we!==void 0){var We=vd,Qe=i;switch(i){case"keypress":if(ql(l)===0)break e;case"keydown":case"keyup":We=qM;break;case"focusin":Qe="focus",We=Sd;break;case"focusout":Qe="blur",We=Sd;break;case"beforeblur":case"afterblur":We=Sd;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":We=vg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":We=OM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":We=ZM;break;case Fg:case kg:case Bg:We=kM;break;case zg:We=JM;break;case"scroll":We=IM;break;case"wheel":We=eE;break;case"copy":case"cut":case"paste":We=zM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":We=yg}var et=(a&4)!==0,dn=!et&&i==="scroll",oe=et?we!==null?we+"Capture":null:we;et=[];for(var Z=fe,ue;Z!==null;){ue=Z;var Oe=ue.stateNode;if(ue.tag===5&&Oe!==null&&(ue=Oe,oe!==null&&(Oe=Te(Z,oe),Oe!=null&&et.push(Oo(Z,Oe,ue)))),dn)break;Z=Z.return}0<et.length&&(we=new We(we,Qe,null,l,Re),Pe.push({event:we,listeners:et}))}}if((a&7)===0){e:{if(we=i==="mouseover"||i==="pointerover",We=i==="mouseout"||i==="pointerout",we&&l!==be&&(Qe=l.relatedTarget||l.fromElement)&&(Xa(Qe)||Qe[Cr]))break e;if((We||we)&&(we=Re.window===Re?Re:(we=Re.ownerDocument)?we.defaultView||we.parentWindow:window,We?(Qe=l.relatedTarget||l.toElement,We=fe,Qe=Qe?Xa(Qe):null,Qe!==null&&(dn=Mi(Qe),Qe!==dn||Qe.tag!==5&&Qe.tag!==6)&&(Qe=null)):(We=null,Qe=fe),We!==Qe)){if(et=vg,Oe="onMouseLeave",oe="onMouseEnter",Z="mouse",(i==="pointerout"||i==="pointerover")&&(et=yg,Oe="onPointerLeave",oe="onPointerEnter",Z="pointer"),dn=We==null?we:As(We),ue=Qe==null?we:As(Qe),we=new et(Oe,Z+"leave",We,l,Re),we.target=dn,we.relatedTarget=ue,Oe=null,Xa(Re)===fe&&(et=new et(oe,Z+"enter",Qe,l,Re),et.target=ue,et.relatedTarget=dn,Oe=et),dn=Oe,We&&Qe)t:{for(et=We,oe=Qe,Z=0,ue=et;ue;ue=Ts(ue))Z++;for(ue=0,Oe=oe;Oe;Oe=Ts(Oe))ue++;for(;0<Z-ue;)et=Ts(et),Z--;for(;0<ue-Z;)oe=Ts(oe),ue--;for(;Z--;){if(et===oe||oe!==null&&et===oe.alternate)break t;et=Ts(et),oe=Ts(oe)}et=null}else et=null;We!==null&&Xg(Pe,we,We,et,!1),Qe!==null&&dn!==null&&Xg(Pe,dn,Qe,et,!0)}}e:{if(we=fe?As(fe):window,We=we.nodeName&&we.nodeName.toLowerCase(),We==="select"||We==="input"&&we.type==="file")var nt=oE;else if(wg(we))if(Rg)nt=dE;else{nt=uE;var rt=lE}else(We=we.nodeName)&&We.toLowerCase()==="input"&&(we.type==="checkbox"||we.type==="radio")&&(nt=cE);if(nt&&(nt=nt(i,fe))){Tg(Pe,nt,l,Re);break e}rt&&rt(i,we,fe),i==="focusout"&&(rt=we._wrapperState)&&rt.controlled&&we.type==="number"&&vn(we,"number",we.value)}switch(rt=fe?As(fe):window,i){case"focusin":(wg(rt)||rt.contentEditable==="true")&&(bs=rt,Td=fe,Do=null);break;case"focusout":Do=Td=bs=null;break;case"mousedown":Rd=!0;break;case"contextmenu":case"mouseup":case"dragend":Rd=!1,Og(Pe,l,Re);break;case"selectionchange":if(pE)break;case"keydown":case"keyup":Og(Pe,l,Re)}var at;if(Md)e:{switch(i){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else Es?Eg(i,l)&&(ct="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(ct="onCompositionStart");ct&&(Sg&&l.locale!=="ko"&&(Es||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&Es&&(at=mg()):(sa=Re,gd="value"in sa?sa.value:sa.textContent,Es=!0)),rt=eu(fe,ct),0<rt.length&&(ct=new _g(ct,i,null,l,Re),Pe.push({event:ct,listeners:rt}),at?ct.data=at:(at=bg(l),at!==null&&(ct.data=at)))),(at=nE?iE(i,l):rE(i,l))&&(fe=eu(fe,"onBeforeInput"),0<fe.length&&(Re=new _g("onBeforeInput","beforeinput",null,l,Re),Pe.push({event:Re,listeners:fe}),Re.data=at))}Wg(Pe,a)})}function Oo(i,a,l){return{instance:i,listener:a,currentTarget:l}}function eu(i,a){for(var l=a+"Capture",c=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=Te(i,l),_!=null&&c.unshift(Oo(i,_,p)),_=Te(i,a),_!=null&&c.push(Oo(i,_,p))),i=i.return}return c}function Ts(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Xg(i,a,l,c,p){for(var _=a._reactName,A=[];l!==null&&l!==c;){var z=l,q=z.alternate,fe=z.stateNode;if(q!==null&&q===c)break;z.tag===5&&fe!==null&&(z=fe,p?(q=Te(l,_),q!=null&&A.unshift(Oo(l,q,z))):p||(q=Te(l,_),q!=null&&A.push(Oo(l,q,z)))),l=l.return}A.length!==0&&i.push({event:a,listeners:A})}var _E=/\r\n?/g,yE=/\u0000|\uFFFD/g;function qg(i){return(typeof i=="string"?i:""+i).replace(_E,`
`).replace(yE,"")}function tu(i,a,l){if(a=qg(a),qg(i)!==a&&l)throw Error(t(425))}function nu(){}var Id=null,Nd=null;function Od(i,a){return i==="textarea"||i==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Ud=typeof setTimeout=="function"?setTimeout:void 0,SE=typeof clearTimeout=="function"?clearTimeout:void 0,Yg=typeof Promise=="function"?Promise:void 0,xE=typeof queueMicrotask=="function"?queueMicrotask:typeof Yg<"u"?function(i){return Yg.resolve(null).then(i).catch(ME)}:Ud;function ME(i){setTimeout(function(){throw i})}function Fd(i,a){var l=a,c=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(c===0){i.removeChild(p),wo(a);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=p}while(l);wo(a)}function la(i){for(;i!=null;i=i.nextSibling){var a=i.nodeType;if(a===1||a===3)break;if(a===8){if(a=i.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return i}function Kg(i){i=i.previousSibling;for(var a=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(a===0)return i;a--}else l==="/$"&&a++}i=i.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),or="__reactFiber$"+Rs,Uo="__reactProps$"+Rs,Cr="__reactContainer$"+Rs,kd="__reactEvents$"+Rs,EE="__reactListeners$"+Rs,bE="__reactHandles$"+Rs;function Xa(i){var a=i[or];if(a)return a;for(var l=i.parentNode;l;){if(a=l[Cr]||l[or]){if(l=a.alternate,a.child!==null||l!==null&&l.child!==null)for(i=Kg(i);i!==null;){if(l=i[or])return l;i=Kg(i)}return a}i=l,l=i.parentNode}return null}function Fo(i){return i=i[or]||i[Cr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function As(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function iu(i){return i[Uo]||null}var Bd=[],Cs=-1;function ua(i){return{current:i}}function Yt(i){0>Cs||(i.current=Bd[Cs],Bd[Cs]=null,Cs--)}function Vt(i,a){Cs++,Bd[Cs]=i.current,i.current=a}var ca={},Dn=ua(ca),qn=ua(!1),qa=ca;function Ps(i,a){var l=i.type.contextTypes;if(!l)return ca;var c=i.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===a)return c.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=a[_];return c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=a,i.__reactInternalMemoizedMaskedChildContext=p),p}function Yn(i){return i=i.childContextTypes,i!=null}function ru(){Yt(qn),Yt(Dn)}function Zg(i,a,l){if(Dn.current!==ca)throw Error(t(168));Vt(Dn,a),Vt(qn,l)}function jg(i,a,l){var c=i.stateNode;if(a=a.childContextTypes,typeof c.getChildContext!="function")return l;c=c.getChildContext();for(var p in c)if(!(p in a))throw Error(t(108,Ce(i)||"Unknown",p));return J({},l,c)}function au(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||ca,qa=Dn.current,Vt(Dn,i),Vt(qn,qn.current),!0}function Jg(i,a,l){var c=i.stateNode;if(!c)throw Error(t(169));l?(i=jg(i,a,qa),c.__reactInternalMemoizedMergedChildContext=i,Yt(qn),Yt(Dn),Vt(Dn,i)):Yt(qn),Vt(qn,l)}var Pr=null,su=!1,zd=!1;function Qg(i){Pr===null?Pr=[i]:Pr.push(i)}function wE(i){su=!0,Qg(i)}function da(){if(!zd&&Pr!==null){zd=!0;var i=0,a=Je;try{var l=Pr;for(Je=1;i<l.length;i++){var c=l[i];do c=c(!0);while(c!==null)}Pr=null,su=!1}catch(p){throw Pr!==null&&(Pr=Pr.slice(i+1)),za(ra,da),p}finally{Je=a,zd=!1}}return null}var Ls=[],Ds=0,ou=null,lu=0,Ei=[],bi=0,Ya=null,Lr=1,Dr="";function Ka(i,a){Ls[Ds++]=lu,Ls[Ds++]=ou,ou=i,lu=a}function ev(i,a,l){Ei[bi++]=Lr,Ei[bi++]=Dr,Ei[bi++]=Ya,Ya=i;var c=Lr;i=Dr;var p=32-re(c)-1;c&=~(1<<p),l+=1;var _=32-re(a)+p;if(30<_){var A=p-p%5;_=(c&(1<<A)-1).toString(32),c>>=A,p-=A,Lr=1<<32-re(a)+p|l<<p|c,Dr=_+i}else Lr=1<<_|l<<p|c,Dr=i}function Hd(i){i.return!==null&&(Ka(i,1),ev(i,1,0))}function Gd(i){for(;i===ou;)ou=Ls[--Ds],Ls[Ds]=null,lu=Ls[--Ds],Ls[Ds]=null;for(;i===Ya;)Ya=Ei[--bi],Ei[bi]=null,Dr=Ei[--bi],Ei[bi]=null,Lr=Ei[--bi],Ei[bi]=null}var ui=null,ci=null,Qt=!1,Hi=null;function tv(i,a){var l=Ai(5,null,null,0);l.elementType="DELETED",l.stateNode=a,l.return=i,a=i.deletions,a===null?(i.deletions=[l],i.flags|=16):a.push(l)}function nv(i,a){switch(i.tag){case 5:var l=i.type;return a=a.nodeType!==1||l.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(i.stateNode=a,ui=i,ci=la(a.firstChild),!0):!1;case 6:return a=i.pendingProps===""||a.nodeType!==3?null:a,a!==null?(i.stateNode=a,ui=i,ci=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(l=Ya!==null?{id:Lr,overflow:Dr}:null,i.memoizedState={dehydrated:a,treeContext:l,retryLane:1073741824},l=Ai(18,null,null,0),l.stateNode=a,l.return=i,i.child=l,ui=i,ci=null,!0):!1;default:return!1}}function Vd(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Wd(i){if(Qt){var a=ci;if(a){var l=a;if(!nv(i,a)){if(Vd(i))throw Error(t(418));a=la(l.nextSibling);var c=ui;a&&nv(i,a)?tv(c,l):(i.flags=i.flags&-4097|2,Qt=!1,ui=i)}}else{if(Vd(i))throw Error(t(418));i.flags=i.flags&-4097|2,Qt=!1,ui=i}}}function iv(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;ui=i}function uu(i){if(i!==ui)return!1;if(!Qt)return iv(i),Qt=!0,!1;var a;if((a=i.tag!==3)&&!(a=i.tag!==5)&&(a=i.type,a=a!=="head"&&a!=="body"&&!Od(i.type,i.memoizedProps)),a&&(a=ci)){if(Vd(i))throw rv(),Error(t(418));for(;a;)tv(i,a),a=la(a.nextSibling)}if(iv(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,a=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(a===0){ci=la(i.nextSibling);break e}a--}else l!=="$"&&l!=="$!"&&l!=="$?"||a++}i=i.nextSibling}ci=null}}else ci=ui?la(i.stateNode.nextSibling):null;return!0}function rv(){for(var i=ci;i;)i=la(i.nextSibling)}function Is(){ci=ui=null,Qt=!1}function $d(i){Hi===null?Hi=[i]:Hi.push(i)}var TE=D.ReactCurrentBatchConfig;function ko(i,a,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var c=l.stateNode}if(!c)throw Error(t(147,i));var p=c,_=""+i;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===_?a.ref:(a=function(A){var z=p.refs;A===null?delete z[_]:z[_]=A},a._stringRef=_,a)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function cu(i,a){throw i=Object.prototype.toString.call(a),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":i))}function av(i){var a=i._init;return a(i._payload)}function sv(i){function a(oe,Z){if(i){var ue=oe.deletions;ue===null?(oe.deletions=[Z],oe.flags|=16):ue.push(Z)}}function l(oe,Z){if(!i)return null;for(;Z!==null;)a(oe,Z),Z=Z.sibling;return null}function c(oe,Z){for(oe=new Map;Z!==null;)Z.key!==null?oe.set(Z.key,Z):oe.set(Z.index,Z),Z=Z.sibling;return oe}function p(oe,Z){return oe=ya(oe,Z),oe.index=0,oe.sibling=null,oe}function _(oe,Z,ue){return oe.index=ue,i?(ue=oe.alternate,ue!==null?(ue=ue.index,ue<Z?(oe.flags|=2,Z):ue):(oe.flags|=2,Z)):(oe.flags|=1048576,Z)}function A(oe){return i&&oe.alternate===null&&(oe.flags|=2),oe}function z(oe,Z,ue,Oe){return Z===null||Z.tag!==6?(Z=Ff(ue,oe.mode,Oe),Z.return=oe,Z):(Z=p(Z,ue),Z.return=oe,Z)}function q(oe,Z,ue,Oe){var nt=ue.type;return nt===b?Re(oe,Z,ue.props.children,Oe,ue.key):Z!==null&&(Z.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===ie&&av(nt)===Z.type)?(Oe=p(Z,ue.props),Oe.ref=ko(oe,Z,ue),Oe.return=oe,Oe):(Oe=Nu(ue.type,ue.key,ue.props,null,oe.mode,Oe),Oe.ref=ko(oe,Z,ue),Oe.return=oe,Oe)}function fe(oe,Z,ue,Oe){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==ue.containerInfo||Z.stateNode.implementation!==ue.implementation?(Z=kf(ue,oe.mode,Oe),Z.return=oe,Z):(Z=p(Z,ue.children||[]),Z.return=oe,Z)}function Re(oe,Z,ue,Oe,nt){return Z===null||Z.tag!==7?(Z=is(ue,oe.mode,Oe,nt),Z.return=oe,Z):(Z=p(Z,ue),Z.return=oe,Z)}function Pe(oe,Z,ue){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Z=Ff(""+Z,oe.mode,ue),Z.return=oe,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case U:return ue=Nu(Z.type,Z.key,Z.props,null,oe.mode,ue),ue.ref=ko(oe,null,Z),ue.return=oe,ue;case I:return Z=kf(Z,oe.mode,ue),Z.return=oe,Z;case ie:var Oe=Z._init;return Pe(oe,Oe(Z._payload),ue)}if(Dt(Z)||Y(Z))return Z=is(Z,oe.mode,ue,null),Z.return=oe,Z;cu(oe,Z)}return null}function we(oe,Z,ue,Oe){var nt=Z!==null?Z.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return nt!==null?null:z(oe,Z,""+ue,Oe);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case U:return ue.key===nt?q(oe,Z,ue,Oe):null;case I:return ue.key===nt?fe(oe,Z,ue,Oe):null;case ie:return nt=ue._init,we(oe,Z,nt(ue._payload),Oe)}if(Dt(ue)||Y(ue))return nt!==null?null:Re(oe,Z,ue,Oe,null);cu(oe,ue)}return null}function We(oe,Z,ue,Oe,nt){if(typeof Oe=="string"&&Oe!==""||typeof Oe=="number")return oe=oe.get(ue)||null,z(Z,oe,""+Oe,nt);if(typeof Oe=="object"&&Oe!==null){switch(Oe.$$typeof){case U:return oe=oe.get(Oe.key===null?ue:Oe.key)||null,q(Z,oe,Oe,nt);case I:return oe=oe.get(Oe.key===null?ue:Oe.key)||null,fe(Z,oe,Oe,nt);case ie:var rt=Oe._init;return We(oe,Z,ue,rt(Oe._payload),nt)}if(Dt(Oe)||Y(Oe))return oe=oe.get(ue)||null,Re(Z,oe,Oe,nt,null);cu(Z,Oe)}return null}function Qe(oe,Z,ue,Oe){for(var nt=null,rt=null,at=Z,ct=Z=0,wn=null;at!==null&&ct<ue.length;ct++){at.index>ct?(wn=at,at=null):wn=at.sibling;var Nt=we(oe,at,ue[ct],Oe);if(Nt===null){at===null&&(at=wn);break}i&&at&&Nt.alternate===null&&a(oe,at),Z=_(Nt,Z,ct),rt===null?nt=Nt:rt.sibling=Nt,rt=Nt,at=wn}if(ct===ue.length)return l(oe,at),Qt&&Ka(oe,ct),nt;if(at===null){for(;ct<ue.length;ct++)at=Pe(oe,ue[ct],Oe),at!==null&&(Z=_(at,Z,ct),rt===null?nt=at:rt.sibling=at,rt=at);return Qt&&Ka(oe,ct),nt}for(at=c(oe,at);ct<ue.length;ct++)wn=We(at,oe,ct,ue[ct],Oe),wn!==null&&(i&&wn.alternate!==null&&at.delete(wn.key===null?ct:wn.key),Z=_(wn,Z,ct),rt===null?nt=wn:rt.sibling=wn,rt=wn);return i&&at.forEach(function(Sa){return a(oe,Sa)}),Qt&&Ka(oe,ct),nt}function et(oe,Z,ue,Oe){var nt=Y(ue);if(typeof nt!="function")throw Error(t(150));if(ue=nt.call(ue),ue==null)throw Error(t(151));for(var rt=nt=null,at=Z,ct=Z=0,wn=null,Nt=ue.next();at!==null&&!Nt.done;ct++,Nt=ue.next()){at.index>ct?(wn=at,at=null):wn=at.sibling;var Sa=we(oe,at,Nt.value,Oe);if(Sa===null){at===null&&(at=wn);break}i&&at&&Sa.alternate===null&&a(oe,at),Z=_(Sa,Z,ct),rt===null?nt=Sa:rt.sibling=Sa,rt=Sa,at=wn}if(Nt.done)return l(oe,at),Qt&&Ka(oe,ct),nt;if(at===null){for(;!Nt.done;ct++,Nt=ue.next())Nt=Pe(oe,Nt.value,Oe),Nt!==null&&(Z=_(Nt,Z,ct),rt===null?nt=Nt:rt.sibling=Nt,rt=Nt);return Qt&&Ka(oe,ct),nt}for(at=c(oe,at);!Nt.done;ct++,Nt=ue.next())Nt=We(at,oe,ct,Nt.value,Oe),Nt!==null&&(i&&Nt.alternate!==null&&at.delete(Nt.key===null?ct:Nt.key),Z=_(Nt,Z,ct),rt===null?nt=Nt:rt.sibling=Nt,rt=Nt);return i&&at.forEach(function(ab){return a(oe,ab)}),Qt&&Ka(oe,ct),nt}function dn(oe,Z,ue,Oe){if(typeof ue=="object"&&ue!==null&&ue.type===b&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case U:e:{for(var nt=ue.key,rt=Z;rt!==null;){if(rt.key===nt){if(nt=ue.type,nt===b){if(rt.tag===7){l(oe,rt.sibling),Z=p(rt,ue.props.children),Z.return=oe,oe=Z;break e}}else if(rt.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===ie&&av(nt)===rt.type){l(oe,rt.sibling),Z=p(rt,ue.props),Z.ref=ko(oe,rt,ue),Z.return=oe,oe=Z;break e}l(oe,rt);break}else a(oe,rt);rt=rt.sibling}ue.type===b?(Z=is(ue.props.children,oe.mode,Oe,ue.key),Z.return=oe,oe=Z):(Oe=Nu(ue.type,ue.key,ue.props,null,oe.mode,Oe),Oe.ref=ko(oe,Z,ue),Oe.return=oe,oe=Oe)}return A(oe);case I:e:{for(rt=ue.key;Z!==null;){if(Z.key===rt)if(Z.tag===4&&Z.stateNode.containerInfo===ue.containerInfo&&Z.stateNode.implementation===ue.implementation){l(oe,Z.sibling),Z=p(Z,ue.children||[]),Z.return=oe,oe=Z;break e}else{l(oe,Z);break}else a(oe,Z);Z=Z.sibling}Z=kf(ue,oe.mode,Oe),Z.return=oe,oe=Z}return A(oe);case ie:return rt=ue._init,dn(oe,Z,rt(ue._payload),Oe)}if(Dt(ue))return Qe(oe,Z,ue,Oe);if(Y(ue))return et(oe,Z,ue,Oe);cu(oe,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,Z!==null&&Z.tag===6?(l(oe,Z.sibling),Z=p(Z,ue),Z.return=oe,oe=Z):(l(oe,Z),Z=Ff(ue,oe.mode,Oe),Z.return=oe,oe=Z),A(oe)):l(oe,Z)}return dn}var Ns=sv(!0),ov=sv(!1),du=ua(null),fu=null,Os=null,Xd=null;function qd(){Xd=Os=fu=null}function Yd(i){var a=du.current;Yt(du),i._currentValue=a}function Kd(i,a,l){for(;i!==null;){var c=i.alternate;if((i.childLanes&a)!==a?(i.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),i===l)break;i=i.return}}function Us(i,a){fu=i,Xd=Os=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&a)!==0&&(Kn=!0),i.firstContext=null)}function wi(i){var a=i._currentValue;if(Xd!==i)if(i={context:i,memoizedValue:a,next:null},Os===null){if(fu===null)throw Error(t(308));Os=i,fu.dependencies={lanes:0,firstContext:i}}else Os=Os.next=i;return a}var Za=null;function Zd(i){Za===null?Za=[i]:Za.push(i)}function lv(i,a,l,c){var p=a.interleaved;return p===null?(l.next=l,Zd(a)):(l.next=p.next,p.next=l),a.interleaved=l,Ir(i,c)}function Ir(i,a){i.lanes|=a;var l=i.alternate;for(l!==null&&(l.lanes|=a),l=i,i=i.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),l=i,i=i.return;return l.tag===3?l.stateNode:null}var fa=!1;function jd(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uv(i,a){i=i.updateQueue,a.updateQueue===i&&(a.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Nr(i,a){return{eventTime:i,lane:a,tag:0,payload:null,callback:null,next:null}}function ha(i,a,l){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(Pt&2)!==0){var p=c.pending;return p===null?a.next=a:(a.next=p.next,p.next=a),c.pending=a,Ir(i,l)}return p=c.interleaved,p===null?(a.next=a,Zd(c)):(a.next=p.next,p.next=a),c.interleaved=a,Ir(i,l)}function hu(i,a,l){if(a=a.updateQueue,a!==null&&(a=a.shared,(l&4194240)!==0)){var c=a.lanes;c&=i.pendingLanes,l|=c,a.lanes=l,sn(i,l)}}function cv(i,a){var l=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=A:_=_.next=A,l=l.next}while(l!==null);_===null?p=_=a:_=_.next=a}else p=_=a;l={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:c.shared,effects:c.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=a:i.next=a,l.lastBaseUpdate=a}function pu(i,a,l,c){var p=i.updateQueue;fa=!1;var _=p.firstBaseUpdate,A=p.lastBaseUpdate,z=p.shared.pending;if(z!==null){p.shared.pending=null;var q=z,fe=q.next;q.next=null,A===null?_=fe:A.next=fe,A=q;var Re=i.alternate;Re!==null&&(Re=Re.updateQueue,z=Re.lastBaseUpdate,z!==A&&(z===null?Re.firstBaseUpdate=fe:z.next=fe,Re.lastBaseUpdate=q))}if(_!==null){var Pe=p.baseState;A=0,Re=fe=q=null,z=_;do{var we=z.lane,We=z.eventTime;if((c&we)===we){Re!==null&&(Re=Re.next={eventTime:We,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var Qe=i,et=z;switch(we=a,We=l,et.tag){case 1:if(Qe=et.payload,typeof Qe=="function"){Pe=Qe.call(We,Pe,we);break e}Pe=Qe;break e;case 3:Qe.flags=Qe.flags&-65537|128;case 0:if(Qe=et.payload,we=typeof Qe=="function"?Qe.call(We,Pe,we):Qe,we==null)break e;Pe=J({},Pe,we);break e;case 2:fa=!0}}z.callback!==null&&z.lane!==0&&(i.flags|=64,we=p.effects,we===null?p.effects=[z]:we.push(z))}else We={eventTime:We,lane:we,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Re===null?(fe=Re=We,q=Pe):Re=Re.next=We,A|=we;if(z=z.next,z===null){if(z=p.shared.pending,z===null)break;we=z,z=we.next,we.next=null,p.lastBaseUpdate=we,p.shared.pending=null}}while(!0);if(Re===null&&(q=Pe),p.baseState=q,p.firstBaseUpdate=fe,p.lastBaseUpdate=Re,a=p.shared.interleaved,a!==null){p=a;do A|=p.lane,p=p.next;while(p!==a)}else _===null&&(p.shared.lanes=0);Qa|=A,i.lanes=A,i.memoizedState=Pe}}function dv(i,a,l){if(i=a.effects,a.effects=null,i!==null)for(a=0;a<i.length;a++){var c=i[a],p=c.callback;if(p!==null){if(c.callback=null,c=l,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var Bo={},lr=ua(Bo),zo=ua(Bo),Ho=ua(Bo);function ja(i){if(i===Bo)throw Error(t(174));return i}function Jd(i,a){switch(Vt(Ho,a),Vt(zo,i),Vt(lr,Bo),i=a.nodeType,i){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:Ct(null,"");break;default:i=i===8?a.parentNode:a,a=i.namespaceURI||null,i=i.tagName,a=Ct(a,i)}Yt(lr),Vt(lr,a)}function Fs(){Yt(lr),Yt(zo),Yt(Ho)}function fv(i){ja(Ho.current);var a=ja(lr.current),l=Ct(a,i.type);a!==l&&(Vt(zo,i),Vt(lr,l))}function Qd(i){zo.current===i&&(Yt(lr),Yt(zo))}var tn=ua(0);function mu(i){for(var a=i;a!==null;){if(a.tag===13){var l=a.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var ef=[];function tf(){for(var i=0;i<ef.length;i++)ef[i]._workInProgressVersionPrimary=null;ef.length=0}var gu=D.ReactCurrentDispatcher,nf=D.ReactCurrentBatchConfig,Ja=0,nn=null,yn=null,En=null,vu=!1,Go=!1,Vo=0,RE=0;function In(){throw Error(t(321))}function rf(i,a){if(a===null)return!1;for(var l=0;l<a.length&&l<i.length;l++)if(!zi(i[l],a[l]))return!1;return!0}function af(i,a,l,c,p,_){if(Ja=_,nn=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,gu.current=i===null||i.memoizedState===null?LE:DE,i=l(c,p),Go){_=0;do{if(Go=!1,Vo=0,25<=_)throw Error(t(301));_+=1,En=yn=null,a.updateQueue=null,gu.current=IE,i=l(c,p)}while(Go)}if(gu.current=Su,a=yn!==null&&yn.next!==null,Ja=0,En=yn=nn=null,vu=!1,a)throw Error(t(300));return i}function sf(){var i=Vo!==0;return Vo=0,i}function ur(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?nn.memoizedState=En=i:En=En.next=i,En}function Ti(){if(yn===null){var i=nn.alternate;i=i!==null?i.memoizedState:null}else i=yn.next;var a=En===null?nn.memoizedState:En.next;if(a!==null)En=a,yn=i;else{if(i===null)throw Error(t(310));yn=i,i={memoizedState:yn.memoizedState,baseState:yn.baseState,baseQueue:yn.baseQueue,queue:yn.queue,next:null},En===null?nn.memoizedState=En=i:En=En.next=i}return En}function Wo(i,a){return typeof a=="function"?a(i):a}function of(i){var a=Ti(),l=a.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var c=yn,p=c.baseQueue,_=l.pending;if(_!==null){if(p!==null){var A=p.next;p.next=_.next,_.next=A}c.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,c=c.baseState;var z=A=null,q=null,fe=_;do{var Re=fe.lane;if((Ja&Re)===Re)q!==null&&(q=q.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),c=fe.hasEagerState?fe.eagerState:i(c,fe.action);else{var Pe={lane:Re,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};q===null?(z=q=Pe,A=c):q=q.next=Pe,nn.lanes|=Re,Qa|=Re}fe=fe.next}while(fe!==null&&fe!==_);q===null?A=c:q.next=z,zi(c,a.memoizedState)||(Kn=!0),a.memoizedState=c,a.baseState=A,a.baseQueue=q,l.lastRenderedState=c}if(i=l.interleaved,i!==null){p=i;do _=p.lane,nn.lanes|=_,Qa|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[a.memoizedState,l.dispatch]}function lf(i){var a=Ti(),l=a.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var c=l.dispatch,p=l.pending,_=a.memoizedState;if(p!==null){l.pending=null;var A=p=p.next;do _=i(_,A.action),A=A.next;while(A!==p);zi(_,a.memoizedState)||(Kn=!0),a.memoizedState=_,a.baseQueue===null&&(a.baseState=_),l.lastRenderedState=_}return[_,c]}function hv(){}function pv(i,a){var l=nn,c=Ti(),p=a(),_=!zi(c.memoizedState,p);if(_&&(c.memoizedState=p,Kn=!0),c=c.queue,uf(vv.bind(null,l,c,i),[i]),c.getSnapshot!==a||_||En!==null&&En.memoizedState.tag&1){if(l.flags|=2048,$o(9,gv.bind(null,l,c,p,a),void 0,null),bn===null)throw Error(t(349));(Ja&30)!==0||mv(l,a,p)}return p}function mv(i,a,l){i.flags|=16384,i={getSnapshot:a,value:l},a=nn.updateQueue,a===null?(a={lastEffect:null,stores:null},nn.updateQueue=a,a.stores=[i]):(l=a.stores,l===null?a.stores=[i]:l.push(i))}function gv(i,a,l,c){a.value=l,a.getSnapshot=c,_v(a)&&yv(i)}function vv(i,a,l){return l(function(){_v(a)&&yv(i)})}function _v(i){var a=i.getSnapshot;i=i.value;try{var l=a();return!zi(i,l)}catch{return!0}}function yv(i){var a=Ir(i,1);a!==null&&$i(a,i,1,-1)}function Sv(i){var a=ur();return typeof i=="function"&&(i=i()),a.memoizedState=a.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:i},a.queue=i,i=i.dispatch=PE.bind(null,nn,i),[a.memoizedState,i]}function $o(i,a,l,c){return i={tag:i,create:a,destroy:l,deps:c,next:null},a=nn.updateQueue,a===null?(a={lastEffect:null,stores:null},nn.updateQueue=a,a.lastEffect=i.next=i):(l=a.lastEffect,l===null?a.lastEffect=i.next=i:(c=l.next,l.next=i,i.next=c,a.lastEffect=i)),i}function xv(){return Ti().memoizedState}function _u(i,a,l,c){var p=ur();nn.flags|=i,p.memoizedState=$o(1|a,l,void 0,c===void 0?null:c)}function yu(i,a,l,c){var p=Ti();c=c===void 0?null:c;var _=void 0;if(yn!==null){var A=yn.memoizedState;if(_=A.destroy,c!==null&&rf(c,A.deps)){p.memoizedState=$o(a,l,_,c);return}}nn.flags|=i,p.memoizedState=$o(1|a,l,_,c)}function Mv(i,a){return _u(8390656,8,i,a)}function uf(i,a){return yu(2048,8,i,a)}function Ev(i,a){return yu(4,2,i,a)}function bv(i,a){return yu(4,4,i,a)}function wv(i,a){if(typeof a=="function")return i=i(),a(i),function(){a(null)};if(a!=null)return i=i(),a.current=i,function(){a.current=null}}function Tv(i,a,l){return l=l!=null?l.concat([i]):null,yu(4,4,wv.bind(null,a,i),l)}function cf(){}function Rv(i,a){var l=Ti();a=a===void 0?null:a;var c=l.memoizedState;return c!==null&&a!==null&&rf(a,c[1])?c[0]:(l.memoizedState=[i,a],i)}function Av(i,a){var l=Ti();a=a===void 0?null:a;var c=l.memoizedState;return c!==null&&a!==null&&rf(a,c[1])?c[0]:(i=i(),l.memoizedState=[i,a],i)}function Cv(i,a,l){return(Ja&21)===0?(i.baseState&&(i.baseState=!1,Kn=!0),i.memoizedState=l):(zi(l,a)||(l=It(),nn.lanes|=l,Qa|=l,i.baseState=!0),a)}function AE(i,a){var l=Je;Je=l!==0&&4>l?l:4,i(!0);var c=nf.transition;nf.transition={};try{i(!1),a()}finally{Je=l,nf.transition=c}}function Pv(){return Ti().memoizedState}function CE(i,a,l){var c=va(i);if(l={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null},Lv(i))Dv(a,l);else if(l=lv(i,a,l,c),l!==null){var p=Gn();$i(l,i,c,p),Iv(l,a,c)}}function PE(i,a,l){var c=va(i),p={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null};if(Lv(i))Dv(a,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=a.lastRenderedReducer,_!==null))try{var A=a.lastRenderedState,z=_(A,l);if(p.hasEagerState=!0,p.eagerState=z,zi(z,A)){var q=a.interleaved;q===null?(p.next=p,Zd(a)):(p.next=q.next,q.next=p),a.interleaved=p;return}}catch{}finally{}l=lv(i,a,p,c),l!==null&&(p=Gn(),$i(l,i,c,p),Iv(l,a,c))}}function Lv(i){var a=i.alternate;return i===nn||a!==null&&a===nn}function Dv(i,a){Go=vu=!0;var l=i.pending;l===null?a.next=a:(a.next=l.next,l.next=a),i.pending=a}function Iv(i,a,l){if((l&4194240)!==0){var c=a.lanes;c&=i.pendingLanes,l|=c,a.lanes=l,sn(i,l)}}var Su={readContext:wi,useCallback:In,useContext:In,useEffect:In,useImperativeHandle:In,useInsertionEffect:In,useLayoutEffect:In,useMemo:In,useReducer:In,useRef:In,useState:In,useDebugValue:In,useDeferredValue:In,useTransition:In,useMutableSource:In,useSyncExternalStore:In,useId:In,unstable_isNewReconciler:!1},LE={readContext:wi,useCallback:function(i,a){return ur().memoizedState=[i,a===void 0?null:a],i},useContext:wi,useEffect:Mv,useImperativeHandle:function(i,a,l){return l=l!=null?l.concat([i]):null,_u(4194308,4,wv.bind(null,a,i),l)},useLayoutEffect:function(i,a){return _u(4194308,4,i,a)},useInsertionEffect:function(i,a){return _u(4,2,i,a)},useMemo:function(i,a){var l=ur();return a=a===void 0?null:a,i=i(),l.memoizedState=[i,a],i},useReducer:function(i,a,l){var c=ur();return a=l!==void 0?l(a):a,c.memoizedState=c.baseState=a,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:a},c.queue=i,i=i.dispatch=CE.bind(null,nn,i),[c.memoizedState,i]},useRef:function(i){var a=ur();return i={current:i},a.memoizedState=i},useState:Sv,useDebugValue:cf,useDeferredValue:function(i){return ur().memoizedState=i},useTransition:function(){var i=Sv(!1),a=i[0];return i=AE.bind(null,i[1]),ur().memoizedState=i,[a,i]},useMutableSource:function(){},useSyncExternalStore:function(i,a,l){var c=nn,p=ur();if(Qt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=a(),bn===null)throw Error(t(349));(Ja&30)!==0||mv(c,a,l)}p.memoizedState=l;var _={value:l,getSnapshot:a};return p.queue=_,Mv(vv.bind(null,c,_,i),[i]),c.flags|=2048,$o(9,gv.bind(null,c,_,l,a),void 0,null),l},useId:function(){var i=ur(),a=bn.identifierPrefix;if(Qt){var l=Dr,c=Lr;l=(c&~(1<<32-re(c)-1)).toString(32)+l,a=":"+a+"R"+l,l=Vo++,0<l&&(a+="H"+l.toString(32)),a+=":"}else l=RE++,a=":"+a+"r"+l.toString(32)+":";return i.memoizedState=a},unstable_isNewReconciler:!1},DE={readContext:wi,useCallback:Rv,useContext:wi,useEffect:uf,useImperativeHandle:Tv,useInsertionEffect:Ev,useLayoutEffect:bv,useMemo:Av,useReducer:of,useRef:xv,useState:function(){return of(Wo)},useDebugValue:cf,useDeferredValue:function(i){var a=Ti();return Cv(a,yn.memoizedState,i)},useTransition:function(){var i=of(Wo)[0],a=Ti().memoizedState;return[i,a]},useMutableSource:hv,useSyncExternalStore:pv,useId:Pv,unstable_isNewReconciler:!1},IE={readContext:wi,useCallback:Rv,useContext:wi,useEffect:uf,useImperativeHandle:Tv,useInsertionEffect:Ev,useLayoutEffect:bv,useMemo:Av,useReducer:lf,useRef:xv,useState:function(){return lf(Wo)},useDebugValue:cf,useDeferredValue:function(i){var a=Ti();return yn===null?a.memoizedState=i:Cv(a,yn.memoizedState,i)},useTransition:function(){var i=lf(Wo)[0],a=Ti().memoizedState;return[i,a]},useMutableSource:hv,useSyncExternalStore:pv,useId:Pv,unstable_isNewReconciler:!1};function Gi(i,a){if(i&&i.defaultProps){a=J({},a),i=i.defaultProps;for(var l in i)a[l]===void 0&&(a[l]=i[l]);return a}return a}function df(i,a,l,c){a=i.memoizedState,l=l(c,a),l=l==null?a:J({},a,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var xu={isMounted:function(i){return(i=i._reactInternals)?Mi(i)===i:!1},enqueueSetState:function(i,a,l){i=i._reactInternals;var c=Gn(),p=va(i),_=Nr(c,p);_.payload=a,l!=null&&(_.callback=l),a=ha(i,_,p),a!==null&&($i(a,i,p,c),hu(a,i,p))},enqueueReplaceState:function(i,a,l){i=i._reactInternals;var c=Gn(),p=va(i),_=Nr(c,p);_.tag=1,_.payload=a,l!=null&&(_.callback=l),a=ha(i,_,p),a!==null&&($i(a,i,p,c),hu(a,i,p))},enqueueForceUpdate:function(i,a){i=i._reactInternals;var l=Gn(),c=va(i),p=Nr(l,c);p.tag=2,a!=null&&(p.callback=a),a=ha(i,p,c),a!==null&&($i(a,i,c,l),hu(a,i,c))}};function Nv(i,a,l,c,p,_,A){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,_,A):a.prototype&&a.prototype.isPureReactComponent?!Lo(l,c)||!Lo(p,_):!0}function Ov(i,a,l){var c=!1,p=ca,_=a.contextType;return typeof _=="object"&&_!==null?_=wi(_):(p=Yn(a)?qa:Dn.current,c=a.contextTypes,_=(c=c!=null)?Ps(i,p):ca),a=new a(l,_),i.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=xu,i.stateNode=a,a._reactInternals=i,c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),a}function Uv(i,a,l,c){i=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(l,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(l,c),a.state!==i&&xu.enqueueReplaceState(a,a.state,null)}function ff(i,a,l,c){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},jd(i);var _=a.contextType;typeof _=="object"&&_!==null?p.context=wi(_):(_=Yn(a)?qa:Dn.current,p.context=Ps(i,_)),p.state=i.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(df(i,a,_,l),p.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(a=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),a!==p.state&&xu.enqueueReplaceState(p,p.state,null),pu(i,l,p,c),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function ks(i,a){try{var l="",c=a;do l+=xe(c),c=c.return;while(c);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:a,stack:p,digest:null}}function hf(i,a,l){return{value:i,source:null,stack:l??null,digest:a??null}}function pf(i,a){try{console.error(a.value)}catch(l){setTimeout(function(){throw l})}}var NE=typeof WeakMap=="function"?WeakMap:Map;function Fv(i,a,l){l=Nr(-1,l),l.tag=3,l.payload={element:null};var c=a.value;return l.callback=function(){Au||(Au=!0,Cf=c),pf(i,a)},l}function kv(i,a,l){l=Nr(-1,l),l.tag=3;var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var p=a.value;l.payload=function(){return c(p)},l.callback=function(){pf(i,a)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){pf(i,a),typeof c!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var A=a.stack;this.componentDidCatch(a.value,{componentStack:A!==null?A:""})}),l}function Bv(i,a,l){var c=i.pingCache;if(c===null){c=i.pingCache=new NE;var p=new Set;c.set(a,p)}else p=c.get(a),p===void 0&&(p=new Set,c.set(a,p));p.has(l)||(p.add(l),i=YE.bind(null,i,a,l),a.then(i,i))}function zv(i){do{var a;if((a=i.tag===13)&&(a=i.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return i;i=i.return}while(i!==null);return null}function Hv(i,a,l,c,p){return(i.mode&1)===0?(i===a?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(a=Nr(-1,1),a.tag=2,ha(l,a,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var OE=D.ReactCurrentOwner,Kn=!1;function Hn(i,a,l,c){a.child=i===null?ov(a,null,l,c):Ns(a,i.child,l,c)}function Gv(i,a,l,c,p){l=l.render;var _=a.ref;return Us(a,p),c=af(i,a,l,c,_,p),l=sf(),i!==null&&!Kn?(a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~p,Or(i,a,p)):(Qt&&l&&Hd(a),a.flags|=1,Hn(i,a,c,p),a.child)}function Vv(i,a,l,c,p){if(i===null){var _=l.type;return typeof _=="function"&&!Uf(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(a.tag=15,a.type=_,Wv(i,a,_,c,p)):(i=Nu(l.type,null,c,a,a.mode,p),i.ref=a.ref,i.return=a,a.child=i)}if(_=i.child,(i.lanes&p)===0){var A=_.memoizedProps;if(l=l.compare,l=l!==null?l:Lo,l(A,c)&&i.ref===a.ref)return Or(i,a,p)}return a.flags|=1,i=ya(_,c),i.ref=a.ref,i.return=a,a.child=i}function Wv(i,a,l,c,p){if(i!==null){var _=i.memoizedProps;if(Lo(_,c)&&i.ref===a.ref)if(Kn=!1,a.pendingProps=c=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(Kn=!0);else return a.lanes=i.lanes,Or(i,a,p)}return mf(i,a,l,c,p)}function $v(i,a,l){var c=a.pendingProps,p=c.children,_=i!==null?i.memoizedState:null;if(c.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(zs,di),di|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:i,cachePool:null,transitions:null},a.updateQueue=null,Vt(zs,di),di|=i,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=_!==null?_.baseLanes:l,Vt(zs,di),di|=c}else _!==null?(c=_.baseLanes|l,a.memoizedState=null):c=l,Vt(zs,di),di|=c;return Hn(i,a,p,l),a.child}function Xv(i,a){var l=a.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(a.flags|=512,a.flags|=2097152)}function mf(i,a,l,c,p){var _=Yn(l)?qa:Dn.current;return _=Ps(a,_),Us(a,p),l=af(i,a,l,c,_,p),c=sf(),i!==null&&!Kn?(a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~p,Or(i,a,p)):(Qt&&c&&Hd(a),a.flags|=1,Hn(i,a,l,p),a.child)}function qv(i,a,l,c,p){if(Yn(l)){var _=!0;au(a)}else _=!1;if(Us(a,p),a.stateNode===null)Eu(i,a),Ov(a,l,c),ff(a,l,c,p),c=!0;else if(i===null){var A=a.stateNode,z=a.memoizedProps;A.props=z;var q=A.context,fe=l.contextType;typeof fe=="object"&&fe!==null?fe=wi(fe):(fe=Yn(l)?qa:Dn.current,fe=Ps(a,fe));var Re=l.getDerivedStateFromProps,Pe=typeof Re=="function"||typeof A.getSnapshotBeforeUpdate=="function";Pe||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==c||q!==fe)&&Uv(a,A,c,fe),fa=!1;var we=a.memoizedState;A.state=we,pu(a,c,A,p),q=a.memoizedState,z!==c||we!==q||qn.current||fa?(typeof Re=="function"&&(df(a,l,Re,c),q=a.memoizedState),(z=fa||Nv(a,l,z,c,we,q,fe))?(Pe||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(a.flags|=4194308)):(typeof A.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=q),A.props=c,A.state=q,A.context=fe,c=z):(typeof A.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{A=a.stateNode,uv(i,a),z=a.memoizedProps,fe=a.type===a.elementType?z:Gi(a.type,z),A.props=fe,Pe=a.pendingProps,we=A.context,q=l.contextType,typeof q=="object"&&q!==null?q=wi(q):(q=Yn(l)?qa:Dn.current,q=Ps(a,q));var We=l.getDerivedStateFromProps;(Re=typeof We=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==Pe||we!==q)&&Uv(a,A,c,q),fa=!1,we=a.memoizedState,A.state=we,pu(a,c,A,p);var Qe=a.memoizedState;z!==Pe||we!==Qe||qn.current||fa?(typeof We=="function"&&(df(a,l,We,c),Qe=a.memoizedState),(fe=fa||Nv(a,l,fe,c,we,Qe,q)||!1)?(Re||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,Qe,q),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,Qe,q)),typeof A.componentDidUpdate=="function"&&(a.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof A.componentDidUpdate!="function"||z===i.memoizedProps&&we===i.memoizedState||(a.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&we===i.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=Qe),A.props=c,A.state=Qe,A.context=q,c=fe):(typeof A.componentDidUpdate!="function"||z===i.memoizedProps&&we===i.memoizedState||(a.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&we===i.memoizedState||(a.flags|=1024),c=!1)}return gf(i,a,l,c,_,p)}function gf(i,a,l,c,p,_){Xv(i,a);var A=(a.flags&128)!==0;if(!c&&!A)return p&&Jg(a,l,!1),Or(i,a,_);c=a.stateNode,OE.current=a;var z=A&&typeof l.getDerivedStateFromError!="function"?null:c.render();return a.flags|=1,i!==null&&A?(a.child=Ns(a,i.child,null,_),a.child=Ns(a,null,z,_)):Hn(i,a,z,_),a.memoizedState=c.state,p&&Jg(a,l,!0),a.child}function Yv(i){var a=i.stateNode;a.pendingContext?Zg(i,a.pendingContext,a.pendingContext!==a.context):a.context&&Zg(i,a.context,!1),Jd(i,a.containerInfo)}function Kv(i,a,l,c,p){return Is(),$d(p),a.flags|=256,Hn(i,a,l,c),a.child}var vf={dehydrated:null,treeContext:null,retryLane:0};function _f(i){return{baseLanes:i,cachePool:null,transitions:null}}function Zv(i,a,l){var c=a.pendingProps,p=tn.current,_=!1,A=(a.flags&128)!==0,z;if((z=A)||(z=i!==null&&i.memoizedState===null?!1:(p&2)!==0),z?(_=!0,a.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Vt(tn,p&1),i===null)return Wd(a),i=a.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((a.mode&1)===0?a.lanes=1:i.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(A=c.children,i=c.fallback,_?(c=a.mode,_=a.child,A={mode:"hidden",children:A},(c&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=A):_=Ou(A,c,0,null),i=is(i,c,l,null),_.return=a,i.return=a,_.sibling=i,a.child=_,a.child.memoizedState=_f(l),a.memoizedState=vf,i):yf(a,A));if(p=i.memoizedState,p!==null&&(z=p.dehydrated,z!==null))return UE(i,a,A,c,z,p,l);if(_){_=c.fallback,A=a.mode,p=i.child,z=p.sibling;var q={mode:"hidden",children:c.children};return(A&1)===0&&a.child!==p?(c=a.child,c.childLanes=0,c.pendingProps=q,a.deletions=null):(c=ya(p,q),c.subtreeFlags=p.subtreeFlags&14680064),z!==null?_=ya(z,_):(_=is(_,A,l,null),_.flags|=2),_.return=a,c.return=a,c.sibling=_,a.child=c,c=_,_=a.child,A=i.child.memoizedState,A=A===null?_f(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},_.memoizedState=A,_.childLanes=i.childLanes&~l,a.memoizedState=vf,c}return _=i.child,i=_.sibling,c=ya(_,{mode:"visible",children:c.children}),(a.mode&1)===0&&(c.lanes=l),c.return=a,c.sibling=null,i!==null&&(l=a.deletions,l===null?(a.deletions=[i],a.flags|=16):l.push(i)),a.child=c,a.memoizedState=null,c}function yf(i,a){return a=Ou({mode:"visible",children:a},i.mode,0,null),a.return=i,i.child=a}function Mu(i,a,l,c){return c!==null&&$d(c),Ns(a,i.child,null,l),i=yf(a,a.pendingProps.children),i.flags|=2,a.memoizedState=null,i}function UE(i,a,l,c,p,_,A){if(l)return a.flags&256?(a.flags&=-257,c=hf(Error(t(422))),Mu(i,a,A,c)):a.memoizedState!==null?(a.child=i.child,a.flags|=128,null):(_=c.fallback,p=a.mode,c=Ou({mode:"visible",children:c.children},p,0,null),_=is(_,p,A,null),_.flags|=2,c.return=a,_.return=a,c.sibling=_,a.child=c,(a.mode&1)!==0&&Ns(a,i.child,null,A),a.child.memoizedState=_f(A),a.memoizedState=vf,_);if((a.mode&1)===0)return Mu(i,a,A,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var z=c.dgst;return c=z,_=Error(t(419)),c=hf(_,c,void 0),Mu(i,a,A,c)}if(z=(A&i.childLanes)!==0,Kn||z){if(c=bn,c!==null){switch(A&-A){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|A))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Ir(i,p),$i(c,i,p,-1))}return Of(),c=hf(Error(t(421))),Mu(i,a,A,c)}return p.data==="$?"?(a.flags|=128,a.child=i.child,a=KE.bind(null,i),p._reactRetry=a,null):(i=_.treeContext,ci=la(p.nextSibling),ui=a,Qt=!0,Hi=null,i!==null&&(Ei[bi++]=Lr,Ei[bi++]=Dr,Ei[bi++]=Ya,Lr=i.id,Dr=i.overflow,Ya=a),a=yf(a,c.children),a.flags|=4096,a)}function jv(i,a,l){i.lanes|=a;var c=i.alternate;c!==null&&(c.lanes|=a),Kd(i.return,a,l)}function Sf(i,a,l,c,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:p}:(_.isBackwards=a,_.rendering=null,_.renderingStartTime=0,_.last=c,_.tail=l,_.tailMode=p)}function Jv(i,a,l){var c=a.pendingProps,p=c.revealOrder,_=c.tail;if(Hn(i,a,c.children,l),c=tn.current,(c&2)!==0)c=c&1|2,a.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=a.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&jv(i,l,a);else if(i.tag===19)jv(i,l,a);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break e;for(;i.sibling===null;){if(i.return===null||i.return===a)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}if(Vt(tn,c),(a.mode&1)===0)a.memoizedState=null;else switch(p){case"forwards":for(l=a.child,p=null;l!==null;)i=l.alternate,i!==null&&mu(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=a.child,a.child=null):(p=l.sibling,l.sibling=null),Sf(a,!1,p,l,_);break;case"backwards":for(l=null,p=a.child,a.child=null;p!==null;){if(i=p.alternate,i!==null&&mu(i)===null){a.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}Sf(a,!0,l,null,_);break;case"together":Sf(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Eu(i,a){(a.mode&1)===0&&i!==null&&(i.alternate=null,a.alternate=null,a.flags|=2)}function Or(i,a,l){if(i!==null&&(a.dependencies=i.dependencies),Qa|=a.lanes,(l&a.childLanes)===0)return null;if(i!==null&&a.child!==i.child)throw Error(t(153));if(a.child!==null){for(i=a.child,l=ya(i,i.pendingProps),a.child=l,l.return=a;i.sibling!==null;)i=i.sibling,l=l.sibling=ya(i,i.pendingProps),l.return=a;l.sibling=null}return a.child}function FE(i,a,l){switch(a.tag){case 3:Yv(a),Is();break;case 5:fv(a);break;case 1:Yn(a.type)&&au(a);break;case 4:Jd(a,a.stateNode.containerInfo);break;case 10:var c=a.type._context,p=a.memoizedProps.value;Vt(du,c._currentValue),c._currentValue=p;break;case 13:if(c=a.memoizedState,c!==null)return c.dehydrated!==null?(Vt(tn,tn.current&1),a.flags|=128,null):(l&a.child.childLanes)!==0?Zv(i,a,l):(Vt(tn,tn.current&1),i=Or(i,a,l),i!==null?i.sibling:null);Vt(tn,tn.current&1);break;case 19:if(c=(l&a.childLanes)!==0,(i.flags&128)!==0){if(c)return Jv(i,a,l);a.flags|=128}if(p=a.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Vt(tn,tn.current),c)break;return null;case 22:case 23:return a.lanes=0,$v(i,a,l)}return Or(i,a,l)}var Qv,xf,e0,t0;Qv=function(i,a){for(var l=a.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===a)break;for(;l.sibling===null;){if(l.return===null||l.return===a)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},xf=function(){},e0=function(i,a,l,c){var p=i.memoizedProps;if(p!==c){i=a.stateNode,ja(lr.current);var _=null;switch(l){case"input":p=ut(i,p),c=ut(i,c),_=[];break;case"select":p=J({},p,{value:void 0}),c=J({},c,{value:void 0}),_=[];break;case"textarea":p=an(i,p),c=an(i,c),_=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(i.onclick=nu)}Q(l,c);var A;l=null;for(fe in p)if(!c.hasOwnProperty(fe)&&p.hasOwnProperty(fe)&&p[fe]!=null)if(fe==="style"){var z=p[fe];for(A in z)z.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(s.hasOwnProperty(fe)?_||(_=[]):(_=_||[]).push(fe,null));for(fe in c){var q=c[fe];if(z=p!=null?p[fe]:void 0,c.hasOwnProperty(fe)&&q!==z&&(q!=null||z!=null))if(fe==="style")if(z){for(A in z)!z.hasOwnProperty(A)||q&&q.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in q)q.hasOwnProperty(A)&&z[A]!==q[A]&&(l||(l={}),l[A]=q[A])}else l||(_||(_=[]),_.push(fe,l)),l=q;else fe==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,z=z?z.__html:void 0,q!=null&&z!==q&&(_=_||[]).push(fe,q)):fe==="children"?typeof q!="string"&&typeof q!="number"||(_=_||[]).push(fe,""+q):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(s.hasOwnProperty(fe)?(q!=null&&fe==="onScroll"&&qt("scroll",i),_||z===q||(_=[])):(_=_||[]).push(fe,q))}l&&(_=_||[]).push("style",l);var fe=_;(a.updateQueue=fe)&&(a.flags|=4)}},t0=function(i,a,l,c){l!==c&&(a.flags|=4)};function Xo(i,a){if(!Qt)switch(i.tailMode){case"hidden":a=i.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?a||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function Nn(i){var a=i.alternate!==null&&i.alternate.child===i.child,l=0,c=0;if(a)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=c,i.childLanes=l,a}function kE(i,a,l){var c=a.pendingProps;switch(Gd(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nn(a),null;case 1:return Yn(a.type)&&ru(),Nn(a),null;case 3:return c=a.stateNode,Fs(),Yt(qn),Yt(Dn),tf(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(i===null||i.child===null)&&(uu(a)?a.flags|=4:i===null||i.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Hi!==null&&(Df(Hi),Hi=null))),xf(i,a),Nn(a),null;case 5:Qd(a);var p=ja(Ho.current);if(l=a.type,i!==null&&a.stateNode!=null)e0(i,a,l,c,p),i.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!c){if(a.stateNode===null)throw Error(t(166));return Nn(a),null}if(i=ja(lr.current),uu(a)){c=a.stateNode,l=a.type;var _=a.memoizedProps;switch(c[or]=a,c[Uo]=_,i=(a.mode&1)!==0,l){case"dialog":qt("cancel",c),qt("close",c);break;case"iframe":case"object":case"embed":qt("load",c);break;case"video":case"audio":for(p=0;p<Io.length;p++)qt(Io[p],c);break;case"source":qt("error",c);break;case"img":case"image":case"link":qt("error",c),qt("load",c);break;case"details":qt("toggle",c);break;case"input":kt(c,_),qt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!_.multiple},qt("invalid",c);break;case"textarea":hn(c,_),qt("invalid",c)}Q(l,_),p=null;for(var A in _)if(_.hasOwnProperty(A)){var z=_[A];A==="children"?typeof z=="string"?c.textContent!==z&&(_.suppressHydrationWarning!==!0&&tu(c.textContent,z,i),p=["children",z]):typeof z=="number"&&c.textContent!==""+z&&(_.suppressHydrationWarning!==!0&&tu(c.textContent,z,i),p=["children",""+z]):s.hasOwnProperty(A)&&z!=null&&A==="onScroll"&&qt("scroll",c)}switch(l){case"input":Ze(c),Lt(c,_,!0);break;case"textarea":Ze(c),pn(c);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(c.onclick=nu)}c=p,a.updateQueue=c,c!==null&&(a.flags|=4)}else{A=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=At(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=A.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof c.is=="string"?i=A.createElement(l,{is:c.is}):(i=A.createElement(l),l==="select"&&(A=i,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):i=A.createElementNS(i,l),i[or]=a,i[Uo]=c,Qv(i,a,!1,!1),a.stateNode=i;e:{switch(A=Me(l,c),l){case"dialog":qt("cancel",i),qt("close",i),p=c;break;case"iframe":case"object":case"embed":qt("load",i),p=c;break;case"video":case"audio":for(p=0;p<Io.length;p++)qt(Io[p],i);p=c;break;case"source":qt("error",i),p=c;break;case"img":case"image":case"link":qt("error",i),qt("load",i),p=c;break;case"details":qt("toggle",i),p=c;break;case"input":kt(i,c),p=ut(i,c),qt("invalid",i);break;case"option":p=c;break;case"select":i._wrapperState={wasMultiple:!!c.multiple},p=J({},c,{value:void 0}),qt("invalid",i);break;case"textarea":hn(i,c),p=an(i,c),qt("invalid",i);break;default:p=c}Q(l,p),z=p;for(_ in z)if(z.hasOwnProperty(_)){var q=z[_];_==="style"?$(i,q):_==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,q!=null&&he(i,q)):_==="children"?typeof q=="string"?(l!=="textarea"||q!=="")&&ve(i,q):typeof q=="number"&&ve(i,""+q):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?q!=null&&_==="onScroll"&&qt("scroll",i):q!=null&&N(i,_,q,A))}switch(l){case"input":Ze(i),Lt(i,c,!1);break;case"textarea":Ze(i),pn(i);break;case"option":c.value!=null&&i.setAttribute("value",""+_e(c.value));break;case"select":i.multiple=!!c.multiple,_=c.value,_!=null?jt(i,!!c.multiple,_,!1):c.defaultValue!=null&&jt(i,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=nu)}switch(l){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return Nn(a),null;case 6:if(i&&a.stateNode!=null)t0(i,a,i.memoizedProps,c);else{if(typeof c!="string"&&a.stateNode===null)throw Error(t(166));if(l=ja(Ho.current),ja(lr.current),uu(a)){if(c=a.stateNode,l=a.memoizedProps,c[or]=a,(_=c.nodeValue!==l)&&(i=ui,i!==null))switch(i.tag){case 3:tu(c.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&tu(c.nodeValue,l,(i.mode&1)!==0)}_&&(a.flags|=4)}else c=(l.nodeType===9?l:l.ownerDocument).createTextNode(c),c[or]=a,a.stateNode=c}return Nn(a),null;case 13:if(Yt(tn),c=a.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Qt&&ci!==null&&(a.mode&1)!==0&&(a.flags&128)===0)rv(),Is(),a.flags|=98560,_=!1;else if(_=uu(a),c!==null&&c.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=a.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[or]=a}else Is(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Nn(a),_=!1}else Hi!==null&&(Df(Hi),Hi=null),_=!0;if(!_)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=l,a):(c=c!==null,c!==(i!==null&&i.memoizedState!==null)&&c&&(a.child.flags|=8192,(a.mode&1)!==0&&(i===null||(tn.current&1)!==0?Sn===0&&(Sn=3):Of())),a.updateQueue!==null&&(a.flags|=4),Nn(a),null);case 4:return Fs(),xf(i,a),i===null&&No(a.stateNode.containerInfo),Nn(a),null;case 10:return Yd(a.type._context),Nn(a),null;case 17:return Yn(a.type)&&ru(),Nn(a),null;case 19:if(Yt(tn),_=a.memoizedState,_===null)return Nn(a),null;if(c=(a.flags&128)!==0,A=_.rendering,A===null)if(c)Xo(_,!1);else{if(Sn!==0||i!==null&&(i.flags&128)!==0)for(i=a.child;i!==null;){if(A=mu(i),A!==null){for(a.flags|=128,Xo(_,!1),c=A.updateQueue,c!==null&&(a.updateQueue=c,a.flags|=4),a.subtreeFlags=0,c=l,l=a.child;l!==null;)_=l,i=c,_.flags&=14680066,A=_.alternate,A===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=A.childLanes,_.lanes=A.lanes,_.child=A.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=A.memoizedProps,_.memoizedState=A.memoizedState,_.updateQueue=A.updateQueue,_.type=A.type,i=A.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Vt(tn,tn.current&1|2),a.child}i=i.sibling}_.tail!==null&&Ht()>Hs&&(a.flags|=128,c=!0,Xo(_,!1),a.lanes=4194304)}else{if(!c)if(i=mu(A),i!==null){if(a.flags|=128,c=!0,l=i.updateQueue,l!==null&&(a.updateQueue=l,a.flags|=4),Xo(_,!0),_.tail===null&&_.tailMode==="hidden"&&!A.alternate&&!Qt)return Nn(a),null}else 2*Ht()-_.renderingStartTime>Hs&&l!==1073741824&&(a.flags|=128,c=!0,Xo(_,!1),a.lanes=4194304);_.isBackwards?(A.sibling=a.child,a.child=A):(l=_.last,l!==null?l.sibling=A:a.child=A,_.last=A)}return _.tail!==null?(a=_.tail,_.rendering=a,_.tail=a.sibling,_.renderingStartTime=Ht(),a.sibling=null,l=tn.current,Vt(tn,c?l&1|2:l&1),a):(Nn(a),null);case 22:case 23:return Nf(),c=a.memoizedState!==null,i!==null&&i.memoizedState!==null!==c&&(a.flags|=8192),c&&(a.mode&1)!==0?(di&1073741824)!==0&&(Nn(a),a.subtreeFlags&6&&(a.flags|=8192)):Nn(a),null;case 24:return null;case 25:return null}throw Error(t(156,a.tag))}function BE(i,a){switch(Gd(a),a.tag){case 1:return Yn(a.type)&&ru(),i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 3:return Fs(),Yt(qn),Yt(Dn),tf(),i=a.flags,(i&65536)!==0&&(i&128)===0?(a.flags=i&-65537|128,a):null;case 5:return Qd(a),null;case 13:if(Yt(tn),i=a.memoizedState,i!==null&&i.dehydrated!==null){if(a.alternate===null)throw Error(t(340));Is()}return i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 19:return Yt(tn),null;case 4:return Fs(),null;case 10:return Yd(a.type._context),null;case 22:case 23:return Nf(),null;case 24:return null;default:return null}}var bu=!1,On=!1,zE=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function Bs(i,a){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(c){ln(i,a,c)}else l.current=null}function Mf(i,a,l){try{l()}catch(c){ln(i,a,c)}}var n0=!1;function HE(i,a){if(Id=Wl,i=Ng(),wd(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var p=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var A=0,z=-1,q=-1,fe=0,Re=0,Pe=i,we=null;t:for(;;){for(var We;Pe!==l||p!==0&&Pe.nodeType!==3||(z=A+p),Pe!==_||c!==0&&Pe.nodeType!==3||(q=A+c),Pe.nodeType===3&&(A+=Pe.nodeValue.length),(We=Pe.firstChild)!==null;)we=Pe,Pe=We;for(;;){if(Pe===i)break t;if(we===l&&++fe===p&&(z=A),we===_&&++Re===c&&(q=A),(We=Pe.nextSibling)!==null)break;Pe=we,we=Pe.parentNode}Pe=We}l=z===-1||q===-1?null:{start:z,end:q}}else l=null}l=l||{start:0,end:0}}else l=null;for(Nd={focusedElem:i,selectionRange:l},Wl=!1,Ke=a;Ke!==null;)if(a=Ke,i=a.child,(a.subtreeFlags&1028)!==0&&i!==null)i.return=a,Ke=i;else for(;Ke!==null;){a=Ke;try{var Qe=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(Qe!==null){var et=Qe.memoizedProps,dn=Qe.memoizedState,oe=a.stateNode,Z=oe.getSnapshotBeforeUpdate(a.elementType===a.type?et:Gi(a.type,et),dn);oe.__reactInternalSnapshotBeforeUpdate=Z}break;case 3:var ue=a.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Oe){ln(a,a.return,Oe)}if(i=a.sibling,i!==null){i.return=a.return,Ke=i;break}Ke=a.return}return Qe=n0,n0=!1,Qe}function qo(i,a,l){var c=a.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&Mf(a,l,_)}p=p.next}while(p!==c)}}function wu(i,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&i)===i){var c=l.create;l.destroy=c()}l=l.next}while(l!==a)}}function Ef(i){var a=i.ref;if(a!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof a=="function"?a(i):a.current=i}}function i0(i){var a=i.alternate;a!==null&&(i.alternate=null,i0(a)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(a=i.stateNode,a!==null&&(delete a[or],delete a[Uo],delete a[kd],delete a[EE],delete a[bE])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function r0(i){return i.tag===5||i.tag===3||i.tag===4}function a0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||r0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function bf(i,a,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,a?l.nodeType===8?l.parentNode.insertBefore(i,a):l.insertBefore(i,a):(l.nodeType===8?(a=l.parentNode,a.insertBefore(i,l)):(a=l,a.appendChild(i)),l=l._reactRootContainer,l!=null||a.onclick!==null||(a.onclick=nu));else if(c!==4&&(i=i.child,i!==null))for(bf(i,a,l),i=i.sibling;i!==null;)bf(i,a,l),i=i.sibling}function wf(i,a,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,a?l.insertBefore(i,a):l.appendChild(i);else if(c!==4&&(i=i.child,i!==null))for(wf(i,a,l),i=i.sibling;i!==null;)wf(i,a,l),i=i.sibling}var Rn=null,Vi=!1;function pa(i,a,l){for(l=l.child;l!==null;)s0(i,a,l),l=l.sibling}function s0(i,a,l){if(le&&typeof le.onCommitFiberUnmount=="function")try{le.onCommitFiberUnmount(W,l)}catch{}switch(l.tag){case 5:On||Bs(l,a);case 6:var c=Rn,p=Vi;Rn=null,pa(i,a,l),Rn=c,Vi=p,Rn!==null&&(Vi?(i=Rn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Rn.removeChild(l.stateNode));break;case 18:Rn!==null&&(Vi?(i=Rn,l=l.stateNode,i.nodeType===8?Fd(i.parentNode,l):i.nodeType===1&&Fd(i,l),wo(i)):Fd(Rn,l.stateNode));break;case 4:c=Rn,p=Vi,Rn=l.stateNode.containerInfo,Vi=!0,pa(i,a,l),Rn=c,Vi=p;break;case 0:case 11:case 14:case 15:if(!On&&(c=l.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var _=p,A=_.destroy;_=_.tag,A!==void 0&&((_&2)!==0||(_&4)!==0)&&Mf(l,a,A),p=p.next}while(p!==c)}pa(i,a,l);break;case 1:if(!On&&(Bs(l,a),c=l.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=l.memoizedProps,c.state=l.memoizedState,c.componentWillUnmount()}catch(z){ln(l,a,z)}pa(i,a,l);break;case 21:pa(i,a,l);break;case 22:l.mode&1?(On=(c=On)||l.memoizedState!==null,pa(i,a,l),On=c):pa(i,a,l);break;default:pa(i,a,l)}}function o0(i){var a=i.updateQueue;if(a!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new zE),a.forEach(function(c){var p=ZE.bind(null,i,c);l.has(c)||(l.add(c),c.then(p,p))})}}function Wi(i,a){var l=a.deletions;if(l!==null)for(var c=0;c<l.length;c++){var p=l[c];try{var _=i,A=a,z=A;e:for(;z!==null;){switch(z.tag){case 5:Rn=z.stateNode,Vi=!1;break e;case 3:Rn=z.stateNode.containerInfo,Vi=!0;break e;case 4:Rn=z.stateNode.containerInfo,Vi=!0;break e}z=z.return}if(Rn===null)throw Error(t(160));s0(_,A,p),Rn=null,Vi=!1;var q=p.alternate;q!==null&&(q.return=null),p.return=null}catch(fe){ln(p,a,fe)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)l0(a,i),a=a.sibling}function l0(i,a){var l=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Wi(a,i),cr(i),c&4){try{qo(3,i,i.return),wu(3,i)}catch(et){ln(i,i.return,et)}try{qo(5,i,i.return)}catch(et){ln(i,i.return,et)}}break;case 1:Wi(a,i),cr(i),c&512&&l!==null&&Bs(l,l.return);break;case 5:if(Wi(a,i),cr(i),c&512&&l!==null&&Bs(l,l.return),i.flags&32){var p=i.stateNode;try{ve(p,"")}catch(et){ln(i,i.return,et)}}if(c&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,A=l!==null?l.memoizedProps:_,z=i.type,q=i.updateQueue;if(i.updateQueue=null,q!==null)try{z==="input"&&_.type==="radio"&&_.name!=null&&Bt(p,_),Me(z,A);var fe=Me(z,_);for(A=0;A<q.length;A+=2){var Re=q[A],Pe=q[A+1];Re==="style"?$(p,Pe):Re==="dangerouslySetInnerHTML"?he(p,Pe):Re==="children"?ve(p,Pe):N(p,Re,Pe,fe)}switch(z){case"input":Zt(p,_);break;case"textarea":K(p,_);break;case"select":var we=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var We=_.value;We!=null?jt(p,!!_.multiple,We,!1):we!==!!_.multiple&&(_.defaultValue!=null?jt(p,!!_.multiple,_.defaultValue,!0):jt(p,!!_.multiple,_.multiple?[]:"",!1))}p[Uo]=_}catch(et){ln(i,i.return,et)}}break;case 6:if(Wi(a,i),cr(i),c&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(et){ln(i,i.return,et)}}break;case 3:if(Wi(a,i),cr(i),c&4&&l!==null&&l.memoizedState.isDehydrated)try{wo(a.containerInfo)}catch(et){ln(i,i.return,et)}break;case 4:Wi(a,i),cr(i);break;case 13:Wi(a,i),cr(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Af=Ht())),c&4&&o0(i);break;case 22:if(Re=l!==null&&l.memoizedState!==null,i.mode&1?(On=(fe=On)||Re,Wi(a,i),On=fe):Wi(a,i),cr(i),c&8192){if(fe=i.memoizedState!==null,(i.stateNode.isHidden=fe)&&!Re&&(i.mode&1)!==0)for(Ke=i,Re=i.child;Re!==null;){for(Pe=Ke=Re;Ke!==null;){switch(we=Ke,We=we.child,we.tag){case 0:case 11:case 14:case 15:qo(4,we,we.return);break;case 1:Bs(we,we.return);var Qe=we.stateNode;if(typeof Qe.componentWillUnmount=="function"){c=we,l=we.return;try{a=c,Qe.props=a.memoizedProps,Qe.state=a.memoizedState,Qe.componentWillUnmount()}catch(et){ln(c,l,et)}}break;case 5:Bs(we,we.return);break;case 22:if(we.memoizedState!==null){d0(Pe);continue}}We!==null?(We.return=we,Ke=We):d0(Pe)}Re=Re.sibling}e:for(Re=null,Pe=i;;){if(Pe.tag===5){if(Re===null){Re=Pe;try{p=Pe.stateNode,fe?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(z=Pe.stateNode,q=Pe.memoizedProps.style,A=q!=null&&q.hasOwnProperty("display")?q.display:null,z.style.display=T("display",A))}catch(et){ln(i,i.return,et)}}}else if(Pe.tag===6){if(Re===null)try{Pe.stateNode.nodeValue=fe?"":Pe.memoizedProps}catch(et){ln(i,i.return,et)}}else if((Pe.tag!==22&&Pe.tag!==23||Pe.memoizedState===null||Pe===i)&&Pe.child!==null){Pe.child.return=Pe,Pe=Pe.child;continue}if(Pe===i)break e;for(;Pe.sibling===null;){if(Pe.return===null||Pe.return===i)break e;Re===Pe&&(Re=null),Pe=Pe.return}Re===Pe&&(Re=null),Pe.sibling.return=Pe.return,Pe=Pe.sibling}}break;case 19:Wi(a,i),cr(i),c&4&&o0(i);break;case 21:break;default:Wi(a,i),cr(i)}}function cr(i){var a=i.flags;if(a&2){try{e:{for(var l=i.return;l!==null;){if(r0(l)){var c=l;break e}l=l.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(ve(p,""),c.flags&=-33);var _=a0(i);wf(i,_,p);break;case 3:case 4:var A=c.stateNode.containerInfo,z=a0(i);bf(i,z,A);break;default:throw Error(t(161))}}catch(q){ln(i,i.return,q)}i.flags&=-3}a&4096&&(i.flags&=-4097)}function GE(i,a,l){Ke=i,u0(i)}function u0(i,a,l){for(var c=(i.mode&1)!==0;Ke!==null;){var p=Ke,_=p.child;if(p.tag===22&&c){var A=p.memoizedState!==null||bu;if(!A){var z=p.alternate,q=z!==null&&z.memoizedState!==null||On;z=bu;var fe=On;if(bu=A,(On=q)&&!fe)for(Ke=p;Ke!==null;)A=Ke,q=A.child,A.tag===22&&A.memoizedState!==null?f0(p):q!==null?(q.return=A,Ke=q):f0(p);for(;_!==null;)Ke=_,u0(_),_=_.sibling;Ke=p,bu=z,On=fe}c0(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,Ke=_):c0(i)}}function c0(i){for(;Ke!==null;){var a=Ke;if((a.flags&8772)!==0){var l=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:On||wu(5,a);break;case 1:var c=a.stateNode;if(a.flags&4&&!On)if(l===null)c.componentDidMount();else{var p=a.elementType===a.type?l.memoizedProps:Gi(a.type,l.memoizedProps);c.componentDidUpdate(p,l.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var _=a.updateQueue;_!==null&&dv(a,_,c);break;case 3:var A=a.updateQueue;if(A!==null){if(l=null,a.child!==null)switch(a.child.tag){case 5:l=a.child.stateNode;break;case 1:l=a.child.stateNode}dv(a,A,l)}break;case 5:var z=a.stateNode;if(l===null&&a.flags&4){l=z;var q=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":q.autoFocus&&l.focus();break;case"img":q.src&&(l.src=q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var fe=a.alternate;if(fe!==null){var Re=fe.memoizedState;if(Re!==null){var Pe=Re.dehydrated;Pe!==null&&wo(Pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}On||a.flags&512&&Ef(a)}catch(we){ln(a,a.return,we)}}if(a===i){Ke=null;break}if(l=a.sibling,l!==null){l.return=a.return,Ke=l;break}Ke=a.return}}function d0(i){for(;Ke!==null;){var a=Ke;if(a===i){Ke=null;break}var l=a.sibling;if(l!==null){l.return=a.return,Ke=l;break}Ke=a.return}}function f0(i){for(;Ke!==null;){var a=Ke;try{switch(a.tag){case 0:case 11:case 15:var l=a.return;try{wu(4,a)}catch(q){ln(a,l,q)}break;case 1:var c=a.stateNode;if(typeof c.componentDidMount=="function"){var p=a.return;try{c.componentDidMount()}catch(q){ln(a,p,q)}}var _=a.return;try{Ef(a)}catch(q){ln(a,_,q)}break;case 5:var A=a.return;try{Ef(a)}catch(q){ln(a,A,q)}}}catch(q){ln(a,a.return,q)}if(a===i){Ke=null;break}var z=a.sibling;if(z!==null){z.return=a.return,Ke=z;break}Ke=a.return}}var VE=Math.ceil,Tu=D.ReactCurrentDispatcher,Tf=D.ReactCurrentOwner,Ri=D.ReactCurrentBatchConfig,Pt=0,bn=null,mn=null,An=0,di=0,zs=ua(0),Sn=0,Yo=null,Qa=0,Ru=0,Rf=0,Ko=null,Zn=null,Af=0,Hs=1/0,Ur=null,Au=!1,Cf=null,ma=null,Cu=!1,ga=null,Pu=0,Zo=0,Pf=null,Lu=-1,Du=0;function Gn(){return(Pt&6)!==0?Ht():Lu!==-1?Lu:Lu=Ht()}function va(i){return(i.mode&1)===0?1:(Pt&2)!==0&&An!==0?An&-An:TE.transition!==null?(Du===0&&(Du=It()),Du):(i=Je,i!==0||(i=window.event,i=i===void 0?16:pg(i.type)),i)}function $i(i,a,l,c){if(50<Zo)throw Zo=0,Pf=null,Error(t(185));Xt(i,l,c),((Pt&2)===0||i!==bn)&&(i===bn&&((Pt&2)===0&&(Ru|=l),Sn===4&&_a(i,An)),jn(i,c),l===1&&Pt===0&&(a.mode&1)===0&&(Hs=Ht()+500,su&&da()))}function jn(i,a){var l=i.callbackNode;gt(i,a);var c=pt(i,i===bn?An:0);if(c===0)l!==null&&zn(l),i.callbackNode=null,i.callbackPriority=0;else if(a=c&-c,i.callbackPriority!==a){if(l!=null&&zn(l),a===1)i.tag===0?wE(p0.bind(null,i)):Qg(p0.bind(null,i)),xE(function(){(Pt&6)===0&&da()}),l=null;else{switch(si(c)){case 1:l=ra;break;case 4:l=Ga;break;case 16:l=Ar;break;case 536870912:l=L;break;default:l=Ar}l=M0(l,h0.bind(null,i))}i.callbackPriority=a,i.callbackNode=l}}function h0(i,a){if(Lu=-1,Du=0,(Pt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Gs()&&i.callbackNode!==l)return null;var c=pt(i,i===bn?An:0);if(c===0)return null;if((c&30)!==0||(c&i.expiredLanes)!==0||a)a=Iu(i,c);else{a=c;var p=Pt;Pt|=2;var _=g0();(bn!==i||An!==a)&&(Ur=null,Hs=Ht()+500,ts(i,a));do try{XE();break}catch(z){m0(i,z)}while(!0);qd(),Tu.current=_,Pt=p,mn!==null?a=0:(bn=null,An=0,a=Sn)}if(a!==0){if(a===2&&(p=zt(i),p!==0&&(c=p,a=Lf(i,p))),a===1)throw l=Yo,ts(i,0),_a(i,c),jn(i,Ht()),l;if(a===6)_a(i,c);else{if(p=i.current.alternate,(c&30)===0&&!WE(p)&&(a=Iu(i,c),a===2&&(_=zt(i),_!==0&&(c=_,a=Lf(i,_))),a===1))throw l=Yo,ts(i,0),_a(i,c),jn(i,Ht()),l;switch(i.finishedWork=p,i.finishedLanes=c,a){case 0:case 1:throw Error(t(345));case 2:ns(i,Zn,Ur);break;case 3:if(_a(i,c),(c&130023424)===c&&(a=Af+500-Ht(),10<a)){if(pt(i,0)!==0)break;if(p=i.suspendedLanes,(p&c)!==c){Gn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Ud(ns.bind(null,i,Zn,Ur),a);break}ns(i,Zn,Ur);break;case 4:if(_a(i,c),(c&4194240)===c)break;for(a=i.eventTimes,p=-1;0<c;){var A=31-re(c);_=1<<A,A=a[A],A>p&&(p=A),c&=~_}if(c=p,c=Ht()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*VE(c/1960))-c,10<c){i.timeoutHandle=Ud(ns.bind(null,i,Zn,Ur),c);break}ns(i,Zn,Ur);break;case 5:ns(i,Zn,Ur);break;default:throw Error(t(329))}}}return jn(i,Ht()),i.callbackNode===l?h0.bind(null,i):null}function Lf(i,a){var l=Ko;return i.current.memoizedState.isDehydrated&&(ts(i,a).flags|=256),i=Iu(i,a),i!==2&&(a=Zn,Zn=l,a!==null&&Df(a)),i}function Df(i){Zn===null?Zn=i:Zn.push.apply(Zn,i)}function WE(i){for(var a=i;;){if(a.flags&16384){var l=a.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var c=0;c<l.length;c++){var p=l[c],_=p.getSnapshot;p=p.value;try{if(!zi(_(),p))return!1}catch{return!1}}}if(l=a.child,a.subtreeFlags&16384&&l!==null)l.return=a,a=l;else{if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function _a(i,a){for(a&=~Rf,a&=~Ru,i.suspendedLanes|=a,i.pingedLanes&=~a,i=i.expirationTimes;0<a;){var l=31-re(a),c=1<<l;i[l]=-1,a&=~c}}function p0(i){if((Pt&6)!==0)throw Error(t(327));Gs();var a=pt(i,0);if((a&1)===0)return jn(i,Ht()),null;var l=Iu(i,a);if(i.tag!==0&&l===2){var c=zt(i);c!==0&&(a=c,l=Lf(i,c))}if(l===1)throw l=Yo,ts(i,0),_a(i,a),jn(i,Ht()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=a,ns(i,Zn,Ur),jn(i,Ht()),null}function If(i,a){var l=Pt;Pt|=1;try{return i(a)}finally{Pt=l,Pt===0&&(Hs=Ht()+500,su&&da())}}function es(i){ga!==null&&ga.tag===0&&(Pt&6)===0&&Gs();var a=Pt;Pt|=1;var l=Ri.transition,c=Je;try{if(Ri.transition=null,Je=1,i)return i()}finally{Je=c,Ri.transition=l,Pt=a,(Pt&6)===0&&da()}}function Nf(){di=zs.current,Yt(zs)}function ts(i,a){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,SE(l)),mn!==null)for(l=mn.return;l!==null;){var c=l;switch(Gd(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ru();break;case 3:Fs(),Yt(qn),Yt(Dn),tf();break;case 5:Qd(c);break;case 4:Fs();break;case 13:Yt(tn);break;case 19:Yt(tn);break;case 10:Yd(c.type._context);break;case 22:case 23:Nf()}l=l.return}if(bn=i,mn=i=ya(i.current,null),An=di=a,Sn=0,Yo=null,Rf=Ru=Qa=0,Zn=Ko=null,Za!==null){for(a=0;a<Za.length;a++)if(l=Za[a],c=l.interleaved,c!==null){l.interleaved=null;var p=c.next,_=l.pending;if(_!==null){var A=_.next;_.next=p,c.next=A}l.pending=c}Za=null}return i}function m0(i,a){do{var l=mn;try{if(qd(),gu.current=Su,vu){for(var c=nn.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}vu=!1}if(Ja=0,En=yn=nn=null,Go=!1,Vo=0,Tf.current=null,l===null||l.return===null){Sn=1,Yo=a,mn=null;break}e:{var _=i,A=l.return,z=l,q=a;if(a=An,z.flags|=32768,q!==null&&typeof q=="object"&&typeof q.then=="function"){var fe=q,Re=z,Pe=Re.tag;if((Re.mode&1)===0&&(Pe===0||Pe===11||Pe===15)){var we=Re.alternate;we?(Re.updateQueue=we.updateQueue,Re.memoizedState=we.memoizedState,Re.lanes=we.lanes):(Re.updateQueue=null,Re.memoizedState=null)}var We=zv(A);if(We!==null){We.flags&=-257,Hv(We,A,z,_,a),We.mode&1&&Bv(_,fe,a),a=We,q=fe;var Qe=a.updateQueue;if(Qe===null){var et=new Set;et.add(q),a.updateQueue=et}else Qe.add(q);break e}else{if((a&1)===0){Bv(_,fe,a),Of();break e}q=Error(t(426))}}else if(Qt&&z.mode&1){var dn=zv(A);if(dn!==null){(dn.flags&65536)===0&&(dn.flags|=256),Hv(dn,A,z,_,a),$d(ks(q,z));break e}}_=q=ks(q,z),Sn!==4&&(Sn=2),Ko===null?Ko=[_]:Ko.push(_),_=A;do{switch(_.tag){case 3:_.flags|=65536,a&=-a,_.lanes|=a;var oe=Fv(_,q,a);cv(_,oe);break e;case 1:z=q;var Z=_.type,ue=_.stateNode;if((_.flags&128)===0&&(typeof Z.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(ma===null||!ma.has(ue)))){_.flags|=65536,a&=-a,_.lanes|=a;var Oe=kv(_,z,a);cv(_,Oe);break e}}_=_.return}while(_!==null)}_0(l)}catch(nt){a=nt,mn===l&&l!==null&&(mn=l=l.return);continue}break}while(!0)}function g0(){var i=Tu.current;return Tu.current=Su,i===null?Su:i}function Of(){(Sn===0||Sn===3||Sn===2)&&(Sn=4),bn===null||(Qa&268435455)===0&&(Ru&268435455)===0||_a(bn,An)}function Iu(i,a){var l=Pt;Pt|=2;var c=g0();(bn!==i||An!==a)&&(Ur=null,ts(i,a));do try{$E();break}catch(p){m0(i,p)}while(!0);if(qd(),Pt=l,Tu.current=c,mn!==null)throw Error(t(261));return bn=null,An=0,Sn}function $E(){for(;mn!==null;)v0(mn)}function XE(){for(;mn!==null&&!sr();)v0(mn)}function v0(i){var a=x0(i.alternate,i,di);i.memoizedProps=i.pendingProps,a===null?_0(i):mn=a,Tf.current=null}function _0(i){var a=i;do{var l=a.alternate;if(i=a.return,(a.flags&32768)===0){if(l=kE(l,a,di),l!==null){mn=l;return}}else{if(l=BE(l,a),l!==null){l.flags&=32767,mn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Sn=6,mn=null;return}}if(a=a.sibling,a!==null){mn=a;return}mn=a=i}while(a!==null);Sn===0&&(Sn=5)}function ns(i,a,l){var c=Je,p=Ri.transition;try{Ri.transition=null,Je=1,qE(i,a,l,c)}finally{Ri.transition=p,Je=c}return null}function qE(i,a,l,c){do Gs();while(ga!==null);if((Pt&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(Ye(i,_),i===bn&&(mn=bn=null,An=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Cu||(Cu=!0,M0(Ar,function(){return Gs(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=Ri.transition,Ri.transition=null;var A=Je;Je=1;var z=Pt;Pt|=4,Tf.current=null,HE(i,l),l0(l,i),hE(Nd),Wl=!!Id,Nd=Id=null,i.current=l,GE(l),ys(),Pt=z,Je=A,Ri.transition=_}else i.current=l;if(Cu&&(Cu=!1,ga=i,Pu=p),_=i.pendingLanes,_===0&&(ma=null),se(l.stateNode),jn(i,Ht()),a!==null)for(c=i.onRecoverableError,l=0;l<a.length;l++)p=a[l],c(p.value,{componentStack:p.stack,digest:p.digest});if(Au)throw Au=!1,i=Cf,Cf=null,i;return(Pu&1)!==0&&i.tag!==0&&Gs(),_=i.pendingLanes,(_&1)!==0?i===Pf?Zo++:(Zo=0,Pf=i):Zo=0,da(),null}function Gs(){if(ga!==null){var i=si(Pu),a=Ri.transition,l=Je;try{if(Ri.transition=null,Je=16>i?16:i,ga===null)var c=!1;else{if(i=ga,ga=null,Pu=0,(Pt&6)!==0)throw Error(t(331));var p=Pt;for(Pt|=4,Ke=i.current;Ke!==null;){var _=Ke,A=_.child;if((Ke.flags&16)!==0){var z=_.deletions;if(z!==null){for(var q=0;q<z.length;q++){var fe=z[q];for(Ke=fe;Ke!==null;){var Re=Ke;switch(Re.tag){case 0:case 11:case 15:qo(8,Re,_)}var Pe=Re.child;if(Pe!==null)Pe.return=Re,Ke=Pe;else for(;Ke!==null;){Re=Ke;var we=Re.sibling,We=Re.return;if(i0(Re),Re===fe){Ke=null;break}if(we!==null){we.return=We,Ke=we;break}Ke=We}}}var Qe=_.alternate;if(Qe!==null){var et=Qe.child;if(et!==null){Qe.child=null;do{var dn=et.sibling;et.sibling=null,et=dn}while(et!==null)}}Ke=_}}if((_.subtreeFlags&2064)!==0&&A!==null)A.return=_,Ke=A;else e:for(;Ke!==null;){if(_=Ke,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:qo(9,_,_.return)}var oe=_.sibling;if(oe!==null){oe.return=_.return,Ke=oe;break e}Ke=_.return}}var Z=i.current;for(Ke=Z;Ke!==null;){A=Ke;var ue=A.child;if((A.subtreeFlags&2064)!==0&&ue!==null)ue.return=A,Ke=ue;else e:for(A=Z;Ke!==null;){if(z=Ke,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:wu(9,z)}}catch(nt){ln(z,z.return,nt)}if(z===A){Ke=null;break e}var Oe=z.sibling;if(Oe!==null){Oe.return=z.return,Ke=Oe;break e}Ke=z.return}}if(Pt=p,da(),le&&typeof le.onPostCommitFiberRoot=="function")try{le.onPostCommitFiberRoot(W,i)}catch{}c=!0}return c}finally{Je=l,Ri.transition=a}}return!1}function y0(i,a,l){a=ks(l,a),a=Fv(i,a,1),i=ha(i,a,1),a=Gn(),i!==null&&(Xt(i,1,a),jn(i,a))}function ln(i,a,l){if(i.tag===3)y0(i,i,l);else for(;a!==null;){if(a.tag===3){y0(a,i,l);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ma===null||!ma.has(c))){i=ks(l,i),i=kv(a,i,1),a=ha(a,i,1),i=Gn(),a!==null&&(Xt(a,1,i),jn(a,i));break}}a=a.return}}function YE(i,a,l){var c=i.pingCache;c!==null&&c.delete(a),a=Gn(),i.pingedLanes|=i.suspendedLanes&l,bn===i&&(An&l)===l&&(Sn===4||Sn===3&&(An&130023424)===An&&500>Ht()-Af?ts(i,0):Rf|=l),jn(i,a)}function S0(i,a){a===0&&((i.mode&1)===0?a=1:(a=Xe,Xe<<=1,(Xe&130023424)===0&&(Xe=4194304)));var l=Gn();i=Ir(i,a),i!==null&&(Xt(i,a,l),jn(i,l))}function KE(i){var a=i.memoizedState,l=0;a!==null&&(l=a.retryLane),S0(i,l)}function ZE(i,a){var l=0;switch(i.tag){case 13:var c=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:c=i.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(a),S0(i,l)}var x0;x0=function(i,a,l){if(i!==null)if(i.memoizedProps!==a.pendingProps||qn.current)Kn=!0;else{if((i.lanes&l)===0&&(a.flags&128)===0)return Kn=!1,FE(i,a,l);Kn=(i.flags&131072)!==0}else Kn=!1,Qt&&(a.flags&1048576)!==0&&ev(a,lu,a.index);switch(a.lanes=0,a.tag){case 2:var c=a.type;Eu(i,a),i=a.pendingProps;var p=Ps(a,Dn.current);Us(a,l),p=af(null,a,c,i,p,l);var _=sf();return a.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Yn(c)?(_=!0,au(a)):_=!1,a.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,jd(a),p.updater=xu,a.stateNode=p,p._reactInternals=a,ff(a,c,i,l),a=gf(null,a,c,!0,_,l)):(a.tag=0,Qt&&_&&Hd(a),Hn(null,a,p,l),a=a.child),a;case 16:c=a.elementType;e:{switch(Eu(i,a),i=a.pendingProps,p=c._init,c=p(c._payload),a.type=c,p=a.tag=JE(c),i=Gi(c,i),p){case 0:a=mf(null,a,c,i,l);break e;case 1:a=qv(null,a,c,i,l);break e;case 11:a=Gv(null,a,c,i,l);break e;case 14:a=Vv(null,a,c,Gi(c.type,i),l);break e}throw Error(t(306,c,""))}return a;case 0:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:Gi(c,p),mf(i,a,c,p,l);case 1:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:Gi(c,p),qv(i,a,c,p,l);case 3:e:{if(Yv(a),i===null)throw Error(t(387));c=a.pendingProps,_=a.memoizedState,p=_.element,uv(i,a),pu(a,c,null,l);var A=a.memoizedState;if(c=A.element,_.isDehydrated)if(_={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},a.updateQueue.baseState=_,a.memoizedState=_,a.flags&256){p=ks(Error(t(423)),a),a=Kv(i,a,c,l,p);break e}else if(c!==p){p=ks(Error(t(424)),a),a=Kv(i,a,c,l,p);break e}else for(ci=la(a.stateNode.containerInfo.firstChild),ui=a,Qt=!0,Hi=null,l=ov(a,null,c,l),a.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Is(),c===p){a=Or(i,a,l);break e}Hn(i,a,c,l)}a=a.child}return a;case 5:return fv(a),i===null&&Wd(a),c=a.type,p=a.pendingProps,_=i!==null?i.memoizedProps:null,A=p.children,Od(c,p)?A=null:_!==null&&Od(c,_)&&(a.flags|=32),Xv(i,a),Hn(i,a,A,l),a.child;case 6:return i===null&&Wd(a),null;case 13:return Zv(i,a,l);case 4:return Jd(a,a.stateNode.containerInfo),c=a.pendingProps,i===null?a.child=Ns(a,null,c,l):Hn(i,a,c,l),a.child;case 11:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:Gi(c,p),Gv(i,a,c,p,l);case 7:return Hn(i,a,a.pendingProps,l),a.child;case 8:return Hn(i,a,a.pendingProps.children,l),a.child;case 12:return Hn(i,a,a.pendingProps.children,l),a.child;case 10:e:{if(c=a.type._context,p=a.pendingProps,_=a.memoizedProps,A=p.value,Vt(du,c._currentValue),c._currentValue=A,_!==null)if(zi(_.value,A)){if(_.children===p.children&&!qn.current){a=Or(i,a,l);break e}}else for(_=a.child,_!==null&&(_.return=a);_!==null;){var z=_.dependencies;if(z!==null){A=_.child;for(var q=z.firstContext;q!==null;){if(q.context===c){if(_.tag===1){q=Nr(-1,l&-l),q.tag=2;var fe=_.updateQueue;if(fe!==null){fe=fe.shared;var Re=fe.pending;Re===null?q.next=q:(q.next=Re.next,Re.next=q),fe.pending=q}}_.lanes|=l,q=_.alternate,q!==null&&(q.lanes|=l),Kd(_.return,l,a),z.lanes|=l;break}q=q.next}}else if(_.tag===10)A=_.type===a.type?null:_.child;else if(_.tag===18){if(A=_.return,A===null)throw Error(t(341));A.lanes|=l,z=A.alternate,z!==null&&(z.lanes|=l),Kd(A,l,a),A=_.sibling}else A=_.child;if(A!==null)A.return=_;else for(A=_;A!==null;){if(A===a){A=null;break}if(_=A.sibling,_!==null){_.return=A.return,A=_;break}A=A.return}_=A}Hn(i,a,p.children,l),a=a.child}return a;case 9:return p=a.type,c=a.pendingProps.children,Us(a,l),p=wi(p),c=c(p),a.flags|=1,Hn(i,a,c,l),a.child;case 14:return c=a.type,p=Gi(c,a.pendingProps),p=Gi(c.type,p),Vv(i,a,c,p,l);case 15:return Wv(i,a,a.type,a.pendingProps,l);case 17:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:Gi(c,p),Eu(i,a),a.tag=1,Yn(c)?(i=!0,au(a)):i=!1,Us(a,l),Ov(a,c,p),ff(a,c,p,l),gf(null,a,c,!0,i,l);case 19:return Jv(i,a,l);case 22:return $v(i,a,l)}throw Error(t(156,a.tag))};function M0(i,a){return za(i,a)}function jE(i,a,l,c){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ai(i,a,l,c){return new jE(i,a,l,c)}function Uf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function JE(i){if(typeof i=="function")return Uf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===V)return 11;if(i===ae)return 14}return 2}function ya(i,a){var l=i.alternate;return l===null?(l=Ai(i.tag,a,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=a,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,a=i.dependencies,l.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Nu(i,a,l,c,p,_){var A=2;if(c=i,typeof i=="function")Uf(i)&&(A=1);else if(typeof i=="string")A=5;else e:switch(i){case b:return is(l.children,p,_,a);case P:A=8,p|=8;break;case G:return i=Ai(12,l,a,p|2),i.elementType=G,i.lanes=_,i;case X:return i=Ai(13,l,a,p),i.elementType=X,i.lanes=_,i;case k:return i=Ai(19,l,a,p),i.elementType=k,i.lanes=_,i;case te:return Ou(l,p,_,a);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case O:A=10;break e;case B:A=9;break e;case V:A=11;break e;case ae:A=14;break e;case ie:A=16,c=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return a=Ai(A,l,a,p),a.elementType=i,a.type=c,a.lanes=_,a}function is(i,a,l,c){return i=Ai(7,i,c,a),i.lanes=l,i}function Ou(i,a,l,c){return i=Ai(22,i,c,a),i.elementType=te,i.lanes=l,i.stateNode={isHidden:!1},i}function Ff(i,a,l){return i=Ai(6,i,null,a),i.lanes=l,i}function kf(i,a,l){return a=Ai(4,i.children!==null?i.children:[],i.key,a),a.lanes=l,a.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},a}function QE(i,a,l,c,p){this.tag=a,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rt(0),this.expirationTimes=Rt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Bf(i,a,l,c,p,_,A,z,q){return i=new QE(i,a,l,z,q),a===1?(a=1,_===!0&&(a|=8)):a=0,_=Ai(3,null,null,a),i.current=_,_.stateNode=i,_.memoizedState={element:c,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},jd(_),i}function eb(i,a,l){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:i,containerInfo:a,implementation:l}}function E0(i){if(!i)return ca;i=i._reactInternals;e:{if(Mi(i)!==i||i.tag!==1)throw Error(t(170));var a=i;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Yn(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Yn(l))return jg(i,l,a)}return a}function b0(i,a,l,c,p,_,A,z,q){return i=Bf(l,c,!0,i,p,_,A,z,q),i.context=E0(null),l=i.current,c=Gn(),p=va(l),_=Nr(c,p),_.callback=a??null,ha(l,_,p),i.current.lanes=p,Xt(i,p,c),jn(i,c),i}function Uu(i,a,l,c){var p=a.current,_=Gn(),A=va(p);return l=E0(l),a.context===null?a.context=l:a.pendingContext=l,a=Nr(_,A),a.payload={element:i},c=c===void 0?null:c,c!==null&&(a.callback=c),i=ha(p,a,A),i!==null&&($i(i,p,A,_),hu(i,p,A)),A}function Fu(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function w0(i,a){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<a?l:a}}function zf(i,a){w0(i,a),(i=i.alternate)&&w0(i,a)}function tb(){return null}var T0=typeof reportError=="function"?reportError:function(i){console.error(i)};function Hf(i){this._internalRoot=i}ku.prototype.render=Hf.prototype.render=function(i){var a=this._internalRoot;if(a===null)throw Error(t(409));Uu(i,a,null,null)},ku.prototype.unmount=Hf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var a=i.containerInfo;es(function(){Uu(null,i,null,null)}),a[Cr]=null}};function ku(i){this._internalRoot=i}ku.prototype.unstable_scheduleHydration=function(i){if(i){var a=oi();i={blockedOn:null,target:i,priority:a};for(var l=0;l<Bi.length&&a!==0&&a<Bi[l].priority;l++);Bi.splice(l,0,i),l===0&&Mo(i)}};function Gf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Bu(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function R0(){}function nb(i,a,l,c,p){if(p){if(typeof c=="function"){var _=c;c=function(){var fe=Fu(A);_.call(fe)}}var A=b0(a,c,i,0,null,!1,!1,"",R0);return i._reactRootContainer=A,i[Cr]=A.current,No(i.nodeType===8?i.parentNode:i),es(),A}for(;p=i.lastChild;)i.removeChild(p);if(typeof c=="function"){var z=c;c=function(){var fe=Fu(q);z.call(fe)}}var q=Bf(i,0,!1,null,null,!1,!1,"",R0);return i._reactRootContainer=q,i[Cr]=q.current,No(i.nodeType===8?i.parentNode:i),es(function(){Uu(a,q,l,c)}),q}function zu(i,a,l,c,p){var _=l._reactRootContainer;if(_){var A=_;if(typeof p=="function"){var z=p;p=function(){var q=Fu(A);z.call(q)}}Uu(a,A,i,p)}else A=nb(l,a,i,p,c);return Fu(A)}on=function(i){switch(i.tag){case 3:var a=i.stateNode;if(a.current.memoizedState.isDehydrated){var l=it(a.pendingLanes);l!==0&&(sn(a,l|1),jn(a,Ht()),(Pt&6)===0&&(Hs=Ht()+500,da()))}break;case 13:es(function(){var c=Ir(i,1);if(c!==null){var p=Gn();$i(c,i,1,p)}}),zf(i,1)}},Fi=function(i){if(i.tag===13){var a=Ir(i,134217728);if(a!==null){var l=Gn();$i(a,i,134217728,l)}zf(i,134217728)}},Xn=function(i){if(i.tag===13){var a=va(i),l=Ir(i,a);if(l!==null){var c=Gn();$i(l,i,a,c)}zf(i,a)}},oi=function(){return Je},yt=function(i,a){var l=Je;try{return Je=i,a()}finally{Je=l}},ge=function(i,a,l){switch(a){case"input":if(Zt(i,l),a=l.name,l.type==="radio"&&a!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<l.length;a++){var c=l[a];if(c!==i&&c.form===i.form){var p=iu(c);if(!p)throw Error(t(90));lt(c),Zt(c,p)}}}break;case"textarea":K(i,l);break;case"select":a=l.value,a!=null&&jt(i,!!l.multiple,a,!1)}},De=If,Ne=es;var ib={usingClientEntryPoint:!1,Events:[Fo,As,iu,pe,Ue,If]},jo={findFiberByHostInstance:Xa,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rb={bundleType:jo.bundleType,version:jo.version,rendererPackageName:jo.rendererPackageName,rendererConfig:jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=ia(i),i===null?null:i.stateNode},findFiberByHostInstance:jo.findFiberByHostInstance||tb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hu.isDisabled&&Hu.supportsFiber)try{W=Hu.inject(rb),le=Hu}catch{}}return Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ib,Jn.createPortal=function(i,a){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gf(a))throw Error(t(200));return eb(i,a,null,l)},Jn.createRoot=function(i,a){if(!Gf(i))throw Error(t(299));var l=!1,c="",p=T0;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onRecoverableError!==void 0&&(p=a.onRecoverableError)),a=Bf(i,1,!1,null,null,l,!1,c,p),i[Cr]=a.current,No(i.nodeType===8?i.parentNode:i),new Hf(a)},Jn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var a=i._reactInternals;if(a===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=ia(a),i=i===null?null:i.stateNode,i},Jn.flushSync=function(i){return es(i)},Jn.hydrate=function(i,a,l){if(!Bu(a))throw Error(t(200));return zu(null,i,a,!0,l)},Jn.hydrateRoot=function(i,a,l){if(!Gf(i))throw Error(t(405));var c=l!=null&&l.hydratedSources||null,p=!1,_="",A=T0;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),a=b0(a,null,i,1,l??null,p,!1,_,A),i[Cr]=a.current,No(i),c)for(i=0;i<c.length;i++)l=c[i],p=l._getVersion,p=p(l._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[l,p]:a.mutableSourceEagerHydrationData.push(l,p);return new ku(a)},Jn.render=function(i,a,l){if(!Bu(a))throw Error(t(200));return zu(null,i,a,!1,l)},Jn.unmountComponentAtNode=function(i){if(!Bu(i))throw Error(t(40));return i._reactRootContainer?(es(function(){zu(null,null,i,!1,function(){i._reactRootContainer=null,i[Cr]=null})}),!0):!1},Jn.unstable_batchedUpdates=If,Jn.unstable_renderSubtreeIntoContainer=function(i,a,l,c){if(!Bu(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return zu(i,a,l,!1,c)},Jn.version="18.3.1-next-f1338f8080-20240426",Jn}var N0;function sS(){if(N0)return Wf.exports;N0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Wf.exports=db(),Wf.exports}var O0;function fb(){if(O0)return Gu;O0=1;var n=sS();return Gu.createRoot=n.createRoot,Gu.hydrateRoot=n.hydrateRoot,Gu}var hb=fb(),pb=sS();function bl(n){"@babel/helpers - typeof";return bl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bl(n)}function mb(n,e){if(bl(n)!="object"||!n)return n;var t;if(typeof Symbol<"u"&&(t=n[Symbol.toPrimitive])!==void 0){var r=t.call(n,e);if(bl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function gb(n){var e=mb(n,"string");return bl(e)=="symbol"?e:e+""}function vb(n,e,t){return(e=gb(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function U0(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,r)}return t}function Ni(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?U0(Object(t),!0).forEach(function(r){vb(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):U0(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function zc(){return zc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},zc.apply(null,arguments)}function gs(n,e){if(n==null)return{};var t={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.indexOf(r)!==-1)continue;t[r]=n[r]}return t}var _b=n=>n.disabled||Array.isArray(n.accessibilityStates)&&n.accessibilityStates.indexOf("disabled")>-1,yb={adjustable:"slider",button:"button",header:"heading",image:"img",imagebutton:null,keyboardkey:null,label:null,link:"link",none:"presentation",search:"search",summary:"region",text:null},oS=n=>{var e=n.accessibilityRole,t=n.role,r=t||e;if(r){var s=yb[r];if(s!==null)return s||r}},Sb={article:"article",banner:"header",blockquote:"blockquote",button:"button",code:"code",complementary:"aside",contentinfo:"footer",deletion:"del",emphasis:"em",figure:"figure",insertion:"ins",form:"form",list:"ul",listitem:"li",main:"main",navigation:"nav",paragraph:"p",region:"section",strong:"strong"},xb={},Mb=function(e){e===void 0&&(e=xb);var t=e.role||e.accessibilityRole;if(t==="label")return"label";var r=oS(e);if(r){if(r==="heading"){var s=e.accessibilityLevel||e["aria-level"];return s!=null?"h"+s:"h1"}return Sb[r]}},lS={isDisabled:_b,propsToAccessibilityComponent:Mb,propsToAriaRole:oS},Ac={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexOrder:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,gridRow:!0,gridRowEnd:!0,gridRowGap:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnGap:!0,gridColumnStart:!0,lineClamp:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0,scale:!0,scaleX:!0,scaleY:!0,scaleZ:!0,shadowOpacity:!0},Eb=["ms","Moz","O","Webkit"],bb=(n,e)=>n+e.charAt(0).toUpperCase()+e.substring(1);Object.keys(Ac).forEach(n=>{Eb.forEach(e=>{Ac[bb(e,n)]=Ac[n]})});var wb=n=>n==="currentcolor"||n==="currentColor"||n==="inherit"||n.indexOf("var(")===0,qf,F0;function Tb(){if(F0)return qf;F0=1;function n(y){if(typeof y=="number")return y>>>0===y&&y>=0&&y<=4294967295?y:null;if(typeof y!="string")return null;const S=v();let w;if(w=S.hex6.exec(y))return parseInt(w[1]+"ff",16)>>>0;const N=R(y);return N??((w=S.rgb.exec(y))?(m(w[1])<<24|m(w[2])<<16|m(w[3])<<8|255)>>>0:(w=S.rgba.exec(y))?w[6]!==void 0?(m(w[6])<<24|m(w[7])<<16|m(w[8])<<8|x(w[9]))>>>0:(m(w[2])<<24|m(w[3])<<16|m(w[4])<<8|x(w[5]))>>>0:(w=S.hex3.exec(y))?parseInt(w[1]+w[1]+w[2]+w[2]+w[3]+w[3]+"ff",16)>>>0:(w=S.hex8.exec(y))?parseInt(w[1],16)>>>0:(w=S.hex4.exec(y))?parseInt(w[1]+w[1]+w[2]+w[2]+w[3]+w[3]+w[4]+w[4],16)>>>0:(w=S.hsl.exec(y))?(t(g(w[1]),E(w[2]),E(w[3]))|255)>>>0:(w=S.hsla.exec(y))?w[6]!==void 0?(t(g(w[6]),E(w[7]),E(w[8]))|x(w[9]))>>>0:(t(g(w[2]),E(w[3]),E(w[4]))|x(w[5]))>>>0:(w=S.hwb.exec(y))?(r(g(w[1]),E(w[2]),E(w[3]))|255)>>>0:null)}function e(y,S,w){return w<0&&(w+=1),w>1&&(w-=1),w<1/6?y+(S-y)*6*w:w<1/2?S:w<2/3?y+(S-y)*(2/3-w)*6:y}function t(y,S,w){const N=w<.5?w*(1+S):w+S-w*S,D=2*w-N,U=e(D,N,y+1/3),I=e(D,N,y),b=e(D,N,y-1/3);return Math.round(U*255)<<24|Math.round(I*255)<<16|Math.round(b*255)<<8}function r(y,S,w){if(S+w>=1){const I=Math.round(S*255/(S+w));return I<<24|I<<16|I<<8}const N=e(0,1,y+1/3)*(1-S-w)+S,D=e(0,1,y)*(1-S-w)+S,U=e(0,1,y-1/3)*(1-S-w)+S;return Math.round(N*255)<<24|Math.round(D*255)<<16|Math.round(U*255)<<8}const s="[-+]?\\d*\\.?\\d+",o=s+"%";function u(...y){return"\\(\\s*("+y.join(")\\s*,?\\s*(")+")\\s*\\)"}function d(...y){return"\\(\\s*("+y.slice(0,y.length-1).join(")\\s*,?\\s*(")+")\\s*/\\s*("+y[y.length-1]+")\\s*\\)"}function f(...y){return"\\(\\s*("+y.join(")\\s*,\\s*(")+")\\s*\\)"}let h;function v(){return h===void 0&&(h={rgb:new RegExp("rgb"+u(s,s,s)),rgba:new RegExp("rgba("+f(s,s,s,s)+"|"+d(s,s,s,s)+")"),hsl:new RegExp("hsl"+u(s,o,o)),hsla:new RegExp("hsla("+f(s,o,o,s)+"|"+d(s,o,o,s)+")"),hwb:new RegExp("hwb"+u(s,o,o)),hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex4:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{6})$/,hex8:/^#([0-9a-fA-F]{8})$/}),h}function m(y){const S=parseInt(y,10);return S<0?0:S>255?255:S}function g(y){return(parseFloat(y)%360+360)%360/360}function x(y){const S=parseFloat(y);return S<0?0:S>1?255:Math.round(S*255)}function E(y){const S=parseFloat(y);return S<0?0:S>100?1:S/100}function R(y){switch(y){case"transparent":return 0;case"aliceblue":return 4042850303;case"antiquewhite":return 4209760255;case"aqua":return 16777215;case"aquamarine":return 2147472639;case"azure":return 4043309055;case"beige":return 4126530815;case"bisque":return 4293182719;case"black":return 255;case"blanchedalmond":return 4293643775;case"blue":return 65535;case"blueviolet":return 2318131967;case"brown":return 2771004159;case"burlywood":return 3736635391;case"burntsienna":return 3934150143;case"cadetblue":return 1604231423;case"chartreuse":return 2147418367;case"chocolate":return 3530104575;case"coral":return 4286533887;case"cornflowerblue":return 1687547391;case"cornsilk":return 4294499583;case"crimson":return 3692313855;case"cyan":return 16777215;case"darkblue":return 35839;case"darkcyan":return 9145343;case"darkgoldenrod":return 3095792639;case"darkgray":return 2846468607;case"darkgreen":return 6553855;case"darkgrey":return 2846468607;case"darkkhaki":return 3182914559;case"darkmagenta":return 2332068863;case"darkolivegreen":return 1433087999;case"darkorange":return 4287365375;case"darkorchid":return 2570243327;case"darkred":return 2332033279;case"darksalmon":return 3918953215;case"darkseagreen":return 2411499519;case"darkslateblue":return 1211993087;case"darkslategray":return 793726975;case"darkslategrey":return 793726975;case"darkturquoise":return 13554175;case"darkviolet":return 2483082239;case"deeppink":return 4279538687;case"deepskyblue":return 12582911;case"dimgray":return 1768516095;case"dimgrey":return 1768516095;case"dodgerblue":return 512819199;case"firebrick":return 2988581631;case"floralwhite":return 4294635775;case"forestgreen":return 579543807;case"fuchsia":return 4278255615;case"gainsboro":return 3705462015;case"ghostwhite":return 4177068031;case"gold":return 4292280575;case"goldenrod":return 3668254975;case"gray":return 2155905279;case"green":return 8388863;case"greenyellow":return 2919182335;case"grey":return 2155905279;case"honeydew":return 4043305215;case"hotpink":return 4285117695;case"indianred":return 3445382399;case"indigo":return 1258324735;case"ivory":return 4294963455;case"khaki":return 4041641215;case"lavender":return 3873897215;case"lavenderblush":return 4293981695;case"lawngreen":return 2096890111;case"lemonchiffon":return 4294626815;case"lightblue":return 2916673279;case"lightcoral":return 4034953471;case"lightcyan":return 3774873599;case"lightgoldenrodyellow":return 4210742015;case"lightgray":return 3553874943;case"lightgreen":return 2431553791;case"lightgrey":return 3553874943;case"lightpink":return 4290167295;case"lightsalmon":return 4288707327;case"lightseagreen":return 548580095;case"lightskyblue":return 2278488831;case"lightslategray":return 2005441023;case"lightslategrey":return 2005441023;case"lightsteelblue":return 2965692159;case"lightyellow":return 4294959359;case"lime":return 16711935;case"limegreen":return 852308735;case"linen":return 4210091775;case"magenta":return 4278255615;case"maroon":return 2147483903;case"mediumaquamarine":return 1724754687;case"mediumblue":return 52735;case"mediumorchid":return 3126187007;case"mediumpurple":return 2473647103;case"mediumseagreen":return 1018393087;case"mediumslateblue":return 2070474495;case"mediumspringgreen":return 16423679;case"mediumturquoise":return 1221709055;case"mediumvioletred":return 3340076543;case"midnightblue":return 421097727;case"mintcream":return 4127193855;case"mistyrose":return 4293190143;case"moccasin":return 4293178879;case"navajowhite":return 4292783615;case"navy":return 33023;case"oldlace":return 4260751103;case"olive":return 2155872511;case"olivedrab":return 1804477439;case"orange":return 4289003775;case"orangered":return 4282712319;case"orchid":return 3664828159;case"palegoldenrod":return 4008225535;case"palegreen":return 2566625535;case"paleturquoise":return 2951671551;case"palevioletred":return 3681588223;case"papayawhip":return 4293907967;case"peachpuff":return 4292524543;case"peru":return 3448061951;case"pink":return 4290825215;case"plum":return 3718307327;case"powderblue":return 2967529215;case"purple":return 2147516671;case"rebeccapurple":return 1714657791;case"red":return 4278190335;case"rosybrown":return 3163525119;case"royalblue":return 1097458175;case"saddlebrown":return 2336560127;case"salmon":return 4202722047;case"sandybrown":return 4104413439;case"seagreen":return 780883967;case"seashell":return 4294307583;case"sienna":return 2689740287;case"silver":return 3233857791;case"skyblue":return 2278484991;case"slateblue":return 1784335871;case"slategray":return 1887473919;case"slategrey":return 1887473919;case"snow":return 4294638335;case"springgreen":return 16744447;case"steelblue":return 1182971135;case"tan":return 3535047935;case"teal":return 8421631;case"thistle":return 3636451583;case"tomato":return 4284696575;case"turquoise":return 1088475391;case"violet":return 4001558271;case"wheat":return 4125012991;case"white":return 4294967295;case"whitesmoke":return 4126537215;case"yellow":return 4294902015;case"yellowgreen":return 2597139199}return null}return qf=n,qf}var Rb=Tb();const Ab=Si(Rb);var Cb=n=>{if(n==null)return n;var e=Ab(n);if(e!=null)return e=(e<<24|e>>>8)>>>0,e},uS=function(e,t){if(t===void 0&&(t=1),e!=null){if(typeof e=="string"&&wb(e))return e;var r=Cb(e);if(r!=null){var s=r>>16&255,o=r>>8&255,u=r&255,d=(r>>24&255)/255,f=(d*t).toFixed(2);return"rgba("+s+","+o+","+u+","+f+")"}}},Pb={backgroundColor:!0,borderColor:!0,borderTopColor:!0,borderRightColor:!0,borderBottomColor:!0,borderLeftColor:!0,color:!0,shadowColor:!0,textDecorationColor:!0,textShadowColor:!0};function yr(n,e){var t=n;return(e==null||!Ac[e])&&typeof n=="number"?t=n+"px":e!=null&&Pb[e]&&(t=uS(n)),t}var xi=!!(typeof window<"u"&&window.document&&window.document.createElement),Lb={},Db=!xi||window.CSS!=null&&window.CSS.supports!=null&&(window.CSS.supports("text-decoration-line","none")||window.CSS.supports("-webkit-text-decoration-line","none")),Ib="monospace,monospace",k0='-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',Nb={borderColor:["borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"],borderBlockColor:["borderTopColor","borderBottomColor"],borderInlineColor:["borderRightColor","borderLeftColor"],borderRadius:["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],borderStyle:["borderTopStyle","borderRightStyle","borderBottomStyle","borderLeftStyle"],borderBlockStyle:["borderTopStyle","borderBottomStyle"],borderInlineStyle:["borderRightStyle","borderLeftStyle"],borderWidth:["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"],borderBlockWidth:["borderTopWidth","borderBottomWidth"],borderInlineWidth:["borderRightWidth","borderLeftWidth"],insetBlock:["top","bottom"],insetInline:["left","right"],marginBlock:["marginTop","marginBottom"],marginInline:["marginRight","marginLeft"],paddingBlock:["paddingTop","paddingBottom"],paddingInline:["paddingRight","paddingLeft"],overflow:["overflowX","overflowY"],overscrollBehavior:["overscrollBehaviorX","overscrollBehaviorY"],borderBlockStartColor:["borderTopColor"],borderBlockStartStyle:["borderTopStyle"],borderBlockStartWidth:["borderTopWidth"],borderBlockEndColor:["borderBottomColor"],borderBlockEndStyle:["borderBottomStyle"],borderBlockEndWidth:["borderBottomWidth"],borderEndStartRadius:["borderBottomLeftRadius"],borderEndEndRadius:["borderBottomRightRadius"],borderStartStartRadius:["borderTopLeftRadius"],borderStartEndRadius:["borderTopRightRadius"],insetBlockEnd:["bottom"],insetBlockStart:["top"],marginBlockStart:["marginTop"],marginBlockEnd:["marginBottom"],paddingBlockStart:["paddingTop"],paddingBlockEnd:["paddingBottom"]},cS=(n,e)=>{if(!n)return Lb;var t={},r=function(){var d=n[s];if(d==null)return"continue";if(s==="backgroundClip")d==="text"&&(t.backgroundClip=d,t.WebkitBackgroundClip=d);else if(s==="flex")d===-1?(t.flexGrow=0,t.flexShrink=1,t.flexBasis="auto"):t.flex=d;else if(s==="font")t[s]=d.replace("System",k0);else if(s==="fontFamily")if(d.indexOf("System")>-1){var f=d.split(/,\s*/);f[f.indexOf("System")]=k0,t[s]=f.join(",")}else d==="monospace"?t[s]=Ib:t[s]=d;else if(s==="textDecorationLine")Db?t.textDecorationLine=d:t.textDecoration=d;else if(s==="writingDirection")t.direction=d;else{var h=yr(n[s],s),v=Nb[s];e&&s==="inset"?(n.insetInline==null&&(t.left=h,t.right=h),n.insetBlock==null&&(t.top=h,t.bottom=h)):e&&s==="margin"?(n.marginInline==null&&(t.marginLeft=h,t.marginRight=h),n.marginBlock==null&&(t.marginTop=h,t.marginBottom=h)):e&&s==="padding"?(n.paddingInline==null&&(t.paddingLeft=h,t.paddingRight=h),n.paddingBlock==null&&(t.paddingTop=h,t.paddingBottom=h)):v?v.forEach((m,g)=>{n[m]==null&&(t[m]=h)}):t[s]=h}};for(var s in n)var o=r();return t};function Ob(n,e){for(var t=n.length,r=e^t,s=0,o;t>=4;)o=n.charCodeAt(s)&255|(n.charCodeAt(++s)&255)<<8|(n.charCodeAt(++s)&255)<<16|(n.charCodeAt(++s)&255)<<24,o=(o&65535)*1540483477+(((o>>>16)*1540483477&65535)<<16),o^=o>>>24,o=(o&65535)*1540483477+(((o>>>16)*1540483477&65535)<<16),r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16)^o,t-=4,++s;switch(t){case 3:r^=(n.charCodeAt(s+2)&255)<<16;case 2:r^=(n.charCodeAt(s+1)&255)<<8;case 1:r^=n.charCodeAt(s)&255,r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16)}return r^=r>>>13,r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16),r^=r>>>15,r>>>0}var Ub=n=>Ob(n,1).toString(36),Fb=/[A-Z]/g,kb=/^ms-/,Yf={};function Bb(n){return"-"+n.toLowerCase()}function zb(n){if(n in Yf)return Yf[n];var e=n.replace(Fb,Bb);return Yf[n]=kb.test(e)?"-"+e:e}var Vu={},Wu={},$u={},B0;function dS(){if(B0)return $u;B0=1,Object.defineProperty($u,"__esModule",{value:!0}),$u.default=n;function n(e){return e.charAt(0).toUpperCase()+e.slice(1)}return $u}var z0;function Hb(){if(z0)return Wu;z0=1,Object.defineProperty(Wu,"__esModule",{value:!0}),Wu.default=r;var n=dS(),e=t(n);function t(s){return s&&s.__esModule?s:{default:s}}function r(s,o,u){var d=s[o];if(d&&u.hasOwnProperty(o))for(var f=(0,e.default)(o),h=0;h<d.length;++h){var v=d[h]+f;u[v]||(u[v]=u[o])}return u}return Wu}var Xu={},H0;function Gb(){if(H0)return Xu;H0=1,Object.defineProperty(Xu,"__esModule",{value:!0}),Xu.default=n;function n(e,t,r,s,o){for(var u=0,d=e.length;u<d;++u){var f=e[u](t,r,s,o);if(f)return f}}return Xu}var qu={},G0;function Vb(){if(G0)return qu;G0=1,Object.defineProperty(qu,"__esModule",{value:!0}),qu.default=e;function n(t,r){t.indexOf(r)===-1&&t.push(r)}function e(t,r){if(Array.isArray(r))for(var s=0,o=r.length;s<o;++s)n(t,r[s]);else n(t,r)}return qu}var Yu={},V0;function Wb(){if(V0)return Yu;V0=1,Object.defineProperty(Yu,"__esModule",{value:!0}),Yu.default=n;function n(e){return e instanceof Object&&!Array.isArray(e)}return Yu}var W0;function $b(){if(W0)return Vu;W0=1,Object.defineProperty(Vu,"__esModule",{value:!0}),Vu.default=h;var n=Hb(),e=f(n),t=Gb(),r=f(t),s=Vb(),o=f(s),u=Wb(),d=f(u);function f(v){return v&&v.__esModule?v:{default:v}}function h(v){var m=v.prefixMap,g=v.plugins;return function x(E){for(var R in E){var y=E[R];if((0,d.default)(y))E[R]=x(y);else if(Array.isArray(y)){for(var S=[],w=0,N=y.length;w<N;++w){var D=(0,r.default)(g,R,y[w],E,m);(0,o.default)(S,D||y[w])}S.length>0&&(E[R]=S)}else{var U=(0,r.default)(g,R,y,E,m);U&&(E[R]=U),E=(0,e.default)(m,R,E)}}return E}}return Vu}var Xb=$b();const qb=Si(Xb);var Ku={},$0;function Yb(){if($0)return Ku;$0=1,Object.defineProperty(Ku,"__esModule",{value:!0}),Ku.default=n;function n(){return null}return Ku}var Kb=Yb();const Zb=Si(Kb);var Zu={};function Cc(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Cc=function(t){return typeof t}:Cc=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cc(n)}function jb(n){return tw(n)||ew(n)||Qb(n)||Jb()}function Jb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qb(n,e){if(n){if(typeof n=="string")return ep(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(t);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ep(n,e)}}function ew(n){if(typeof Symbol<"u"&&Symbol.iterator in Object(n))return Array.from(n)}function tw(n){if(Array.isArray(n))return ep(n)}function ep(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function X0(n){return n.filter(function(e,t){return n.lastIndexOf(e)===t})}function fS(n){for(var e=0,t=arguments.length<=1?0:arguments.length-1;e<t;++e){var r=e+1<1||arguments.length<=e+1?void 0:arguments[e+1];for(var s in r){var o=r[s],u=n[s];if(u&&o){if(Array.isArray(u)){n[s]=X0(u.concat(o));continue}if(Array.isArray(o)){n[s]=X0([u].concat(jb(o)));continue}if(Cc(o)==="object"){n[s]=fS({},u,o);continue}}n[s]=o}}return n}var nw=/-([a-z])/g,iw=/^Ms/g,Kf={};function rw(n){return n[1].toUpperCase()}function hS(n){if(Kf.hasOwnProperty(n))return Kf[n];var e=n.replace(nw,rw).replace(iw,"ms");return Kf[n]=e,e}var aw=/[A-Z]/g,sw=/^ms-/,Zf={};function ow(n){return"-"+n.toLowerCase()}function pS(n){if(Zf.hasOwnProperty(n))return Zf[n];var e=n.replace(aw,ow);return Zf[n]=sw.test(e)?"-"+e:e}const lw=Object.freeze(Object.defineProperty({__proto__:null,default:pS},Symbol.toStringTag,{value:"Module"}));function rd(n){return pS(n)}function mS(n,e){return rd(n)+":"+e}function uw(n){var e="";for(var t in n){var r=n[t];typeof r!="string"&&typeof r!="number"||(e&&(e+=";"),e+=mS(t,r))}return e}var cw=/^(Webkit|Moz|O|ms)/;function dw(n){return cw.test(n)}var fw=/-webkit-|-moz-|-ms-/;function hw(n){return typeof n=="string"&&fw.test(n)}var wl={borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},q0=["animationIterationCount","boxFlex","boxFlexGroup","boxOrdinalGroup","columnCount","flex","flexGrow","flexPositive","flexShrink","flexNegative","flexOrder","gridColumn","gridColumnEnd","gridColumnStart","gridRow","gridRowEnd","gridRowStart","lineClamp","order"],Y0=["Webkit","ms","Moz","O"];function pw(n,e){return n+e.charAt(0).toUpperCase()+e.slice(1)}for(var jf=0,mw=q0.length;jf<mw;++jf){var K0=q0[jf];wl[K0]=!0;for(var Jf=0,gw=Y0.length;Jf<gw;++Jf)wl[pw(Y0[Jf],K0)]=!0}for(var vw in wl)wl[rd(vw)]=!0;function _w(n){return wl.hasOwnProperty(n)}var yw=/^(ms|Webkit|Moz|O)/;function gS(n){var e=n.replace(yw,"");return e.charAt(0).toLowerCase()+e.slice(1)}function Sw(n){return gS(hS(n))}function xw(n,e){return e.join(";"+rd(n)+":")}var Mw=/(-ms-|-webkit-|-moz-|-o-)/g;function Ew(n){return typeof n=="string"?n.replace(Mw,""):n}const bw=Object.freeze(Object.defineProperty({__proto__:null,assignStyle:fS,camelCaseProperty:hS,cssifyDeclaration:mS,cssifyObject:uw,hyphenateProperty:rd,isPrefixedProperty:dw,isPrefixedValue:hw,isUnitlessProperty:_w,normalizeProperty:Sw,resolveArrayValue:xw,unprefixProperty:gS,unprefixValue:Ew},Symbol.toStringTag,{value:"Module"})),vS=rS(bw);var Z0;function ww(){if(Z0)return Zu;Z0=1,Object.defineProperty(Zu,"__esModule",{value:!0}),Zu.default=r;var n=vS,e=/cross-fade\(/g,t=["-webkit-",""];function r(s,o){if(typeof o=="string"&&!(0,n.isPrefixedValue)(o)&&o.indexOf("cross-fade(")!==-1)return t.map(function(u){return o.replace(e,u+"cross-fade(")})}return Zu}var Tw=ww();const Rw=Si(Tw);var ju={},j0;function Aw(){if(j0)return ju;j0=1,Object.defineProperty(ju,"__esModule",{value:!0}),ju.default=t;var n=["-webkit-","-moz-",""],e={"zoom-in":!0,"zoom-out":!0,grab:!0,grabbing:!0};function t(r,s){if(r==="cursor"&&e.hasOwnProperty(s))return n.map(function(o){return o+s})}return ju}var Cw=Aw();const Pw=Si(Cw);var Ju={},J0;function Lw(){if(J0)return Ju;J0=1,Object.defineProperty(Ju,"__esModule",{value:!0}),Ju.default=r;var n=vS,e=/filter\(/g,t=["-webkit-",""];function r(s,o){if(typeof o=="string"&&!(0,n.isPrefixedValue)(o)&&o.indexOf("filter(")!==-1)return t.map(function(u){return o.replace(e,u+"filter(")})}return Ju}var Dw=Lw();const Iw=Si(Dw);var Qu={},Qf={},Q0;function _S(){return Q0||(Q0=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=t;var e=/-webkit-|-moz-|-ms-/;function t(r){return typeof r=="string"&&e.test(r)}})(Qf)),Qf}var e_;function Nw(){if(e_)return Qu;e_=1,Object.defineProperty(Qu,"__esModule",{value:!0}),Qu.default=s;var n=_S(),e=t(n);function t(o){return o&&o.__esModule?o:{default:o}}var r=["-webkit-",""];function s(o,u){if(typeof u=="string"&&!(0,e.default)(u)&&u.indexOf("image-set(")>-1)return r.map(function(d){return u.replace(/image-set\(/g,d+"image-set(")})}return Qu}var Ow=Nw();const Uw=Si(Ow);var ec={},t_;function Fw(){if(t_)return ec;t_=1,Object.defineProperty(ec,"__esModule",{value:!0}),ec.default=e;var n={marginBlockStart:["WebkitMarginBefore"],marginBlockEnd:["WebkitMarginAfter"],marginInlineStart:["WebkitMarginStart","MozMarginStart"],marginInlineEnd:["WebkitMarginEnd","MozMarginEnd"],paddingBlockStart:["WebkitPaddingBefore"],paddingBlockEnd:["WebkitPaddingAfter"],paddingInlineStart:["WebkitPaddingStart","MozPaddingStart"],paddingInlineEnd:["WebkitPaddingEnd","MozPaddingEnd"],borderBlockStart:["WebkitBorderBefore"],borderBlockStartColor:["WebkitBorderBeforeColor"],borderBlockStartStyle:["WebkitBorderBeforeStyle"],borderBlockStartWidth:["WebkitBorderBeforeWidth"],borderBlockEnd:["WebkitBorderAfter"],borderBlockEndColor:["WebkitBorderAfterColor"],borderBlockEndStyle:["WebkitBorderAfterStyle"],borderBlockEndWidth:["WebkitBorderAfterWidth"],borderInlineStart:["WebkitBorderStart","MozBorderStart"],borderInlineStartColor:["WebkitBorderStartColor","MozBorderStartColor"],borderInlineStartStyle:["WebkitBorderStartStyle","MozBorderStartStyle"],borderInlineStartWidth:["WebkitBorderStartWidth","MozBorderStartWidth"],borderInlineEnd:["WebkitBorderEnd","MozBorderEnd"],borderInlineEndColor:["WebkitBorderEndColor","MozBorderEndColor"],borderInlineEndStyle:["WebkitBorderEndStyle","MozBorderEndStyle"],borderInlineEndWidth:["WebkitBorderEndWidth","MozBorderEndWidth"]};function e(t,r,s){if(Object.prototype.hasOwnProperty.call(n,t))for(var o=n[t],u=0,d=o.length;u<d;++u)s[o[u]]=r}return ec}var kw=Fw();const Bw=Si(kw);var tc={},n_;function zw(){if(n_)return tc;n_=1,Object.defineProperty(tc,"__esModule",{value:!0}),tc.default=n;function n(e,t){if(e==="position"&&t==="sticky")return["-webkit-sticky","sticky"]}return tc}var Hw=zw();const Gw=Si(Hw);var nc={},i_;function Vw(){if(i_)return nc;i_=1,Object.defineProperty(nc,"__esModule",{value:!0}),nc.default=r;var n=["-webkit-","-moz-",""],e={maxHeight:!0,maxWidth:!0,width:!0,height:!0,columnWidth:!0,minWidth:!0,minHeight:!0},t={"min-content":!0,"max-content":!0,"fill-available":!0,"fit-content":!0,"contain-floats":!0};function r(s,o){if(e.hasOwnProperty(s)&&t.hasOwnProperty(o))return n.map(function(u){return u+o})}return nc}var Ww=Vw();const $w=Si(Ww);var ic={},eh={};const Xw=rS(lw);var r_;function qw(){return r_||(r_=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=s;var e=Xw,t=r(e);function r(o){return o&&o.__esModule?o:{default:o}}function s(o){return(0,t.default)(o)}})(eh)),eh}var a_;function Yw(){if(a_)return ic;a_=1,Object.defineProperty(ic,"__esModule",{value:!0}),ic.default=v;var n=qw(),e=u(n),t=_S(),r=u(t),s=dS(),o=u(s);function u(m){return m&&m.__esModule?m:{default:m}}var d={transition:!0,transitionProperty:!0,WebkitTransition:!0,WebkitTransitionProperty:!0,MozTransition:!0,MozTransitionProperty:!0},f={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-"};function h(m,g){if((0,r.default)(m))return m;for(var x=m.split(/,(?![^()]*(?:\([^()]*\))?\))/g),E=0,R=x.length;E<R;++E){var y=x[E],S=[y];for(var w in g){var N=(0,e.default)(w);if(y.indexOf(N)>-1&&N!=="order")for(var D=g[w],U=0,I=D.length;U<I;++U)S.unshift(y.replace(N,f[D[U]]+N))}x[E]=S.join(",")}return x.join(",")}function v(m,g,x,E){if(typeof g=="string"&&d.hasOwnProperty(m)){var R=h(g,E),y=R.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(w){return!/-moz-|-ms-/.test(w)}).join(",");if(m.indexOf("Webkit")>-1)return y;var S=R.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(w){return!/-webkit-|-ms-/.test(w)}).join(",");return m.indexOf("Moz")>-1?S:(x["Webkit"+(0,o.default)(m)]=y,x["Moz"+(0,o.default)(m)]=S,R)}}return ic}var Kw=Yw();const Zw=Si(Kw);var Gt=["Webkit"],jw=["Moz"],Jw=["Webkit","Moz"],un=["Webkit","ms"],Qw=["Webkit","Moz","ms"];const eT={plugins:[Zb,Rw,Pw,Iw,Uw,Bw,Gw,$w,Zw],prefixMap:{appearance:Qw,userSelect:Jw,textEmphasisPosition:un,textEmphasis:un,textEmphasisStyle:un,textEmphasisColor:un,boxDecorationBreak:un,clipPath:Gt,maskImage:un,maskMode:un,maskRepeat:un,maskPosition:un,maskClip:un,maskOrigin:un,maskSize:un,maskComposite:un,mask:un,maskBorderSource:un,maskBorderMode:un,maskBorderSlice:un,maskBorderWidth:un,maskBorderOutset:un,maskBorderRepeat:un,maskBorder:un,maskType:un,textDecorationStyle:Gt,textDecorationSkip:Gt,textDecorationLine:Gt,textDecorationColor:Gt,filter:Gt,breakAfter:Gt,breakBefore:Gt,breakInside:Gt,columnCount:Gt,columnFill:Gt,columnGap:Gt,columnRule:Gt,columnRuleColor:Gt,columnRuleStyle:Gt,columnRuleWidth:Gt,columns:Gt,columnSpan:Gt,columnWidth:Gt,backdropFilter:Gt,hyphens:Gt,flowInto:Gt,flowFrom:Gt,regionFragment:Gt,textOrientation:Gt,tabSize:jw,fontKerning:Gt,textSizeAdjust:Gt}};var tT=qb(eT),nT=["animationKeyframes"],s_=new Map,iT={},rT=1,aT=3,sT={borderColor:2,borderRadius:2,borderStyle:2,borderWidth:2,display:2,flex:2,inset:2,margin:2,overflow:2,overscrollBehavior:2,padding:2,insetBlock:2.1,insetInline:2.1,marginInline:2.1,marginBlock:2.1,paddingInline:2.1,paddingBlock:2.1,borderBlockStartColor:2.2,borderBlockStartStyle:2.2,borderBlockStartWidth:2.2,borderBlockEndColor:2.2,borderBlockEndStyle:2.2,borderBlockEndWidth:2.2,borderInlineStartColor:2.2,borderInlineStartStyle:2.2,borderInlineStartWidth:2.2,borderInlineEndColor:2.2,borderInlineEndStyle:2.2,borderInlineEndWidth:2.2,borderEndStartRadius:2.2,borderEndEndRadius:2.2,borderStartStartRadius:2.2,borderStartEndRadius:2.2,insetBlockEnd:2.2,insetBlockStart:2.2,insetInlineEnd:2.2,insetInlineStart:2.2,marginBlockStart:2.2,marginBlockEnd:2.2,marginInlineStart:2.2,marginInlineEnd:2.2,paddingBlockStart:2.2,paddingBlockEnd:2.2,paddingInlineStart:2.2,paddingInlineEnd:2.2},tp="borderTopLeftRadius",np="borderTopRightRadius",ip="borderBottomLeftRadius",rp="borderBottomRightRadius",ap="borderLeftColor",sp="borderLeftStyle",op="borderLeftWidth",lp="borderRightColor",up="borderRightStyle",cp="borderRightWidth",dp="right",fp="marginLeft",hp="marginRight",pp="paddingLeft",mp="paddingRight",gp="left",Hc={[tp]:np,[np]:tp,[ip]:rp,[rp]:ip,[ap]:lp,[sp]:up,[op]:cp,[lp]:ap,[up]:sp,[cp]:op,[gp]:dp,[fp]:hp,[hp]:fp,[pp]:mp,[mp]:pp,[dp]:gp},_l={borderStartStartRadius:tp,borderStartEndRadius:np,borderEndStartRadius:ip,borderEndEndRadius:rp,borderInlineStartColor:ap,borderInlineStartStyle:sp,borderInlineStartWidth:op,borderInlineEndColor:lp,borderInlineEndStyle:up,borderInlineEndWidth:cp,insetInlineEnd:dp,insetInlineStart:gp,marginInlineStart:fp,marginInlineEnd:hp,paddingInlineStart:pp,paddingInlineEnd:mp},yS=["clear","float","textAlign"];function oT(n){var e={$$css:!0},t=[];function r(s,o,u){var d=cT(u,o),f=o+d,h=s_.get(f),v;if(h!=null)v=h[0],t.push(h[1]);else{var m=s!==o?f:d;v=xm("r",s,m);var g=sT[s]||aT,x=dT(v,o,u),E=[x,g];t.push(E),s_.set(f,[v,E])}return v}return Object.keys(n).sort().forEach(s=>{var o=n[s];if(o!=null){var u;if(yS.indexOf(s)>-1){var d=r(s,s,"left"),f=r(s,s,"right");o==="start"?u=[d,f]:o==="end"&&(u=[f,d])}var h=_l[s];if(h!=null){var v=r(s,h,o),m=r(s,Hc[h],o);u=[v,m]}if(s==="transitionProperty"){for(var g=Array.isArray(o)?o:[o],x=[],E=0;E<g.length;E++){var R=g[E];typeof R=="string"&&_l[R]!=null&&x.push(E)}if(x.length>0){var y=[...g],S=[...g];x.forEach(w=>{var N=y[w];if(typeof N=="string"){var D=_l[N],U=Hc[D];y[w]=D,S[w]=U;var I=r(s,s,y),b=r(s,s,S);u=[I,b]}})}}u==null?u=r(s,s,o):e.$$css$localize=!0,e[s]=u}}),[e,t]}function lT(n,e){var t={$$css:!0},r=[],s=n.animationKeyframes,o=gs(n,nT),u=xm("css",e,JSON.stringify(n)),d="."+u,f;if(s!=null){var h=SS(s),v=h[0],m=h[1];f=v.join(","),r.push(...m)}var g=Gr(Ni(Ni({},o),{},{animationName:f}));return r.push(""+d+g),t[u]=u,[t,[[r,rT]]]}function uT(n,e){var t=n||iT,r={},s={},o=function(){var h=t[u],v=u,m=h;if(!Object.prototype.hasOwnProperty.call(t,u)||h==null)return"continue";yS.indexOf(u)>-1&&(h==="start"?m=e?"right":"left":h==="end"&&(m=e?"left":"right"));var g=_l[u];if(g!=null&&(v=e?Hc[g]:g),u==="transitionProperty"){var x=Array.isArray(h)?h:[h];x.forEach((E,R)=>{if(typeof E=="string"){var y=_l[E];y!=null&&(x[R]=e?Hc[y]:y,m=x.join(" "))}})}r[v]||(s[v]=m),v===u&&(r[v]=!0)};for(var u in t)var d=o();return cS(s,!0)}function cT(n,e){var t=yr(n,e);return typeof t!="string"?JSON.stringify(t||""):t}function dT(n,e,t){var r=[],s="."+n;switch(e){case"animationKeyframes":{var o=SS(t),u=o[0],d=o[1],f=Gr({animationName:u.join(",")});r.push(""+s+f,...d);break}case"placeholderTextColor":{var h=Gr({color:t,opacity:1});r.push(s+"::-webkit-input-placeholder"+h,s+"::-moz-placeholder"+h,s+":-ms-input-placeholder"+h,s+"::placeholder"+h);break}case"pointerEvents":{var v=t;if(t==="auto"||t==="box-only"){if(v="auto!important",t==="box-only"){var m=Gr({pointerEvents:"none"});r.push(s+">*"+m)}}else if((t==="none"||t==="box-none")&&(v="none!important",t==="box-none")){var g=Gr({pointerEvents:"auto"});r.push(s+">*"+g)}var x=Gr({pointerEvents:v});r.push(""+s+x);break}case"scrollbarWidth":{t==="none"&&r.push(s+"::-webkit-scrollbar{display:none}");var E=Gr({scrollbarWidth:t});r.push(""+s+E);break}default:{var R=Gr({[e]:t});r.push(""+s+R);break}}return r}function Gr(n){var e=tT(cS(n)),t=Object.keys(e).map(r=>{var s=e[r],o=zb(r);return Array.isArray(s)?s.map(u=>o+":"+u).join(";"):o+":"+s}).sort().join(";");return"{"+t+";}"}function xm(n,e,t){var r=Ub(e+t);return n+"-"+r}function fT(n){var e=["-webkit-",""],t=xm("r","animation",JSON.stringify(n)),r="{"+Object.keys(n).map(o=>{var u=n[o],d=Gr(u);return""+o+d}).join("")+"}",s=e.map(o=>"@"+o+"keyframes "+t+r);return[t,s]}function SS(n){if(typeof n=="number")throw new Error("Invalid CSS keyframes type: "+typeof n);var e=[],t=[],r=Array.isArray(n)?n:[n];return r.forEach(s=>{if(typeof s=="string")e.push(s);else{var o=fT(s),u=o[0],d=o[1];e.push(u),t.push(...d)}}),[e,t]}function th(n,e,t){if(xi){var r=e??document,s=r.getElementById(n);if(s==null)if(s=document.createElement("style"),s.setAttribute("id",n),typeof t=="string"&&s.appendChild(document.createTextNode(t)),r instanceof ShadowRoot)r.insertBefore(s,r.firstChild);else{var o=r.head;o&&o.insertBefore(s,o.firstChild)}return s.sheet}else return null}var hT=Array.prototype.slice;function nh(n){var e={},t={};if(n!=null){var r;hT.call(n.cssRules).forEach((u,d)=>{var f=u.cssText;if(f.indexOf("stylesheet-group")>-1)r=gT(u),e[r]={start:d,rules:[f]};else{var h=l_(f);h!=null&&(t[h]=!0,e[r].rules.push(f))}})}function s(u,d,f){var h=o_(e),v=h.indexOf(d),m=v+1,g=h[m],x=g!=null&&e[g].start!=null?e[g].start:u.cssRules.length,E=_T(u,f,x);if(E){e[d].start==null&&(e[d].start=x);for(var R=m;R<h.length;R+=1){var y=h[R],S=e[y].start||0;e[y].start=S+1}}return E}var o={getTextContent(){return o_(e).map(u=>{var d=e[u].rules,f=d.shift();return d.sort(),d.unshift(f),d.join(`
`)}).join(`
`)},insert(u,d){var f=Number(d);if(e[f]==null){var h=pT(f);e[f]={start:null,rules:[h]},n!=null&&s(n,f,h)}var v=l_(u);if(v!=null&&t[v]==null&&(t[v]=!0,e[f].rules.push(u),n!=null)){var m=s(n,f,u);m||e[f].rules.pop()}}};return o}function pT(n){return'[stylesheet-group="'+n+'"]{}'}var mT=/["']/g;function gT(n){return Number(n.selectorText.split(mT)[1])}function o_(n){return Object.keys(n).map(Number).sort((e,t)=>e>t?1:-1)}var vT=/\s*([,])\s*/g;function l_(n){var e=n.split("{")[0].trim();return e!==""?e.replace(vT,"$1"):null}function _T(n,e,t){try{return n.insertRule(e,t),!0}catch{return!1}}var yT="react-native-stylesheet",ih=new WeakMap,Xi=[],u_=["html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}","body{margin:0;}","button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}","input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}"];function ST(n,e){e===void 0&&(e=yT);var t;if(xi){var r=document;if(Xi.length===0)t=nh(th(e)),u_.forEach(d=>{t.insert(d,0)}),ih.set(r,Xi.length),Xi.push(t);else{var s=ih.get(r);if(s==null){var o=Xi[0],u=o!=null?o.getTextContent():"";t=nh(th(e,r,u)),ih.set(r,Xi.length),Xi.push(t)}else t=Xi[s]}}else Xi.length===0?(t=nh(th(e)),u_.forEach(d=>{t.insert(d,0)}),Xi.push(t)):t=Xi[0];return{getTextContent(){return t.getTextContent()},id:e,insert(d,f){Xi.forEach(h=>{h.insert(d,f)})}}}var rc={},c_;function xT(){if(c_)return rc;c_=1,Object.defineProperty(rc,"__esModule",{value:!0}),rc.localizeStyle=r;var n=new WeakMap,e="$$css$localize";function t(s,o){var u={};for(var d in s)if(d!==e){var f=s[d];Array.isArray(f)?u[d]=o?f[1]:f[0]:u[d]=f}return u}function r(s,o){if(s[e]!=null){var u=o?1:0;if(n.has(s)){var d=n.get(s),f=d[u];return f==null&&(f=t(s,o),d[u]=f,n.set(s,d)),f}var h=t(s,o),v=new Array(2);return v[u]=h,n.set(s,v),h}return s}return rc}var rh,d_;function MT(){return d_||(d_=1,rh=xT()),rh}var ET=MT(),bT={},xS={height:0,width:0},MS=n=>{var e=n.shadowColor,t=n.shadowOffset,r=n.shadowOpacity,s=n.shadowRadius,o=t||xS,u=o.height,d=o.width,f=yr(d),h=yr(u),v=yr(s||0),m=uS(e||"black",r);if(m!=null&&f!=null&&h!=null&&v!=null)return f+" "+h+" "+v+" "+m},wT=n=>{var e=n.textShadowColor,t=n.textShadowOffset,r=n.textShadowRadius,s=t||xS,o=s.height,u=s.width,d=r||0,f=yr(u),h=yr(o),v=yr(d),m=yr(e,"textShadowColor");if(m&&(o!==0||u!==0||d!==0)&&f!=null&&h!=null&&v!=null)return f+" "+h+" "+v+" "+m},TT=n=>{var e=Object.keys(n)[0],t=n[e];if(e==="matrix"||e==="matrix3d")return e+"("+t.join(",")+")";var r=yr(t,e);return e+"("+r+")"},RT=n=>n.map(TT).join(" "),AT={borderBottomEndRadius:"borderEndEndRadius",borderBottomStartRadius:"borderEndStartRadius",borderTopEndRadius:"borderStartEndRadius",borderTopStartRadius:"borderStartStartRadius",borderEndColor:"borderInlineEndColor",borderEndStyle:"borderInlineEndStyle",borderEndWidth:"borderInlineEndWidth",borderStartColor:"borderInlineStartColor",borderStartStyle:"borderInlineStartStyle",borderStartWidth:"borderInlineStartWidth",end:"insetInlineEnd",marginEnd:"marginInlineEnd",marginHorizontal:"marginInline",marginStart:"marginInlineStart",marginVertical:"marginBlock",paddingEnd:"paddingInlineEnd",paddingHorizontal:"paddingInline",paddingStart:"paddingInlineStart",paddingVertical:"paddingBlock",start:"insetInlineStart"},CT={elevation:!0,overlayColor:!0,resizeMode:!0,tintColor:!0},ES=function(e,t){t===void 0&&(t={});var r=e||bT,s={};if(t.shadow,r.shadowColor!=null||r.shadowOffset!=null||r.shadowOpacity!=null||r.shadowRadius!=null){var o=MS(r);if(o!=null&&s.boxShadow==null){var u=r.boxShadow,d=u?u+", "+o:o;s.boxShadow=d}}if(t.textShadow,r.textShadowColor!=null||r.textShadowOffset!=null||r.textShadowRadius!=null){var f=wT(r);if(f!=null&&s.textShadow==null){var h=r.textShadow,v=h?h+", "+f:f;s.textShadow=v}}for(var m in r)if(!(CT[m]!=null||m==="shadowColor"||m==="shadowOffset"||m==="shadowOpacity"||m==="shadowRadius"||m==="textShadowColor"||m==="textShadowOffset"||m==="textShadowRadius")){var g=r[m],x=AT[m]||m,E=g;!Object.prototype.hasOwnProperty.call(r,m)||x!==m&&r[x]!=null||(x==="aspectRatio"&&typeof E=="number"?s[x]=E.toString():x==="fontVariant"?(Array.isArray(E)&&E.length>0&&(E=E.join(" ")),s[x]=E):x==="textAlignVertical"?r.verticalAlign==null&&(s.verticalAlign=E==="center"?"middle":E):x==="transform"?(Array.isArray(E)&&(E=RT(E)),s.transform=E):s[x]=E)}return s},Jo={},f_;function PT(){if(f_)return Jo;f_=1,Object.defineProperty(Jo,"__esModule",{value:!0}),Jo.styleq=void 0;var n=new WeakMap,e="$$css";function t(s){var o,u,d;return s!=null&&(o=s.disableCache===!0,u=s.disableMix===!0,d=s.transform),function(){for(var h=[],v="",m=null,g=o?null:n,x=new Array(arguments.length),E=0;E<arguments.length;E++)x[E]=arguments[E];for(;x.length>0;){var R=x.pop();if(!(R==null||R===!1)){if(Array.isArray(R)){for(var y=0;y<R.length;y++)x.push(R[y]);continue}var S=d!=null?d(R):R;if(S.$$css){var w="";if(g!=null&&g.has(S)){var N=g.get(S);N!=null&&(w=N[0],h.push.apply(h,N[1]),g=N[2])}else{var D=[];for(var U in S){var I=S[U];U!==e&&(typeof I=="string"||I===null?h.includes(U)||(h.push(U),g!=null&&D.push(U),typeof I=="string"&&(w+=w?" "+I:I)):console.error("styleq: ".concat(U," typeof ").concat(String(I),' is not "string" or "null".')))}if(g!=null){var b=new WeakMap;g.set(S,[w,D,b]),g=b}}w&&(v=v?w+" "+v:w)}else if(u)m==null&&(m={}),m=Object.assign({},S,m);else{var P=null;for(var G in S){var O=S[G];O!==void 0&&(h.includes(G)||(O!=null&&(m==null&&(m={}),P==null&&(P={}),P[G]=O),h.push(G),g=null))}P!=null&&(m=Object.assign(P,m))}}}var B=[v,m];return B}}var r=t();return Jo.styleq=r,r.factory=t,Jo}var LT=PT(),DT=["writingDirection"],bS=new WeakMap,Gc=ST(),wS={shadow:!0,textShadow:!0};function IT(n,e){e===void 0&&(e={});var t=e,r=t.writingDirection,s=gs(t,DT),o=r==="rtl";return LT.styleq.factory({transform(u){var d=bS.get(u);return d!=null?ET.localizeStyle(d,o):ES(u,Ni(Ni({},wS),s))}})(n)}function TS(n){n.forEach(e=>{var t=e[0],r=e[1];Gc!=null&&t.forEach(s=>{Gc.insert(s,r)})})}function NT(n){var e=oT(ES(n,wS)),t=e[0],r=e[1];return TS(r),t}function OT(n,e){var t=lT(n,e),r=t[0],s=t[1];return TS(s),r}var RS={position:"absolute",left:0,right:0,top:0,bottom:0},UT=AS({x:Ni({},RS)}).x;function AS(n){return Object.keys(n).forEach(e=>{var t=n[e];if(t!=null&&t.$$css!==!0){var r;e.indexOf("$raw")>-1?r=OT(t,e.split("$raw")[0]):r=NT(t),bS.set(t,r)}}),n}function FT(n,e){return[n,e]}function kT(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];for(var r=e.flat(1/0),s={},o=0;o<r.length;o++){var u=r[o];u!=null&&typeof u=="object"&&Object.assign(s,u)}return s}function BT(){return{id:Gc.id,textContent:Gc.getTextContent()}}function jr(n,e){e===void 0&&(e={});var t=e.writingDirection==="rtl",r=IT(n,e);return Array.isArray(r)&&r[1]!=null&&(r[1]=uT(r[1],t)),r}jr.absoluteFill=UT;jr.absoluteFillObject=RS;jr.create=AS;jr.compose=FT;jr.flatten=kT;jr.getSheet=BT;jr.hairlineWidth=1;xi&&window.__REACT_DEVTOOLS_GLOBAL_HOOK__&&(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle=jr.flatten);var br=jr,zT=["aria-activedescendant","accessibilityActiveDescendant","aria-atomic","accessibilityAtomic","aria-autocomplete","accessibilityAutoComplete","aria-busy","accessibilityBusy","aria-checked","accessibilityChecked","aria-colcount","accessibilityColumnCount","aria-colindex","accessibilityColumnIndex","aria-colspan","accessibilityColumnSpan","aria-controls","accessibilityControls","aria-current","accessibilityCurrent","aria-describedby","accessibilityDescribedBy","aria-details","accessibilityDetails","aria-disabled","accessibilityDisabled","aria-errormessage","accessibilityErrorMessage","aria-expanded","accessibilityExpanded","aria-flowto","accessibilityFlowTo","aria-haspopup","accessibilityHasPopup","aria-hidden","accessibilityHidden","aria-invalid","accessibilityInvalid","aria-keyshortcuts","accessibilityKeyShortcuts","aria-label","accessibilityLabel","aria-labelledby","accessibilityLabelledBy","aria-level","accessibilityLevel","aria-live","accessibilityLiveRegion","aria-modal","accessibilityModal","aria-multiline","accessibilityMultiline","aria-multiselectable","accessibilityMultiSelectable","aria-orientation","accessibilityOrientation","aria-owns","accessibilityOwns","aria-placeholder","accessibilityPlaceholder","aria-posinset","accessibilityPosInSet","aria-pressed","accessibilityPressed","aria-readonly","accessibilityReadOnly","aria-required","accessibilityRequired","role","accessibilityRole","aria-roledescription","accessibilityRoleDescription","aria-rowcount","accessibilityRowCount","aria-rowindex","accessibilityRowIndex","aria-rowspan","accessibilityRowSpan","aria-selected","accessibilitySelected","aria-setsize","accessibilitySetSize","aria-sort","accessibilitySort","aria-valuemax","accessibilityValueMax","aria-valuemin","accessibilityValueMin","aria-valuenow","accessibilityValueNow","aria-valuetext","accessibilityValueText","dataSet","focusable","id","nativeID","pointerEvents","style","tabIndex","testID"],HT={},GT=Object.prototype.hasOwnProperty,VT=Array.isArray,WT=/[A-Z]/g;function $T(n){return"-"+n.toLowerCase()}function XT(n){return n.replace(WT,$T)}function Vs(n){return VT(n)?n.join(" "):n}var qT=br.create({auto:{pointerEvents:"auto"},"box-none":{pointerEvents:"box-none"},"box-only":{pointerEvents:"box-only"},none:{pointerEvents:"none"}}),YT=(n,e,t)=>{e||(e=HT);var r=e,s=r["aria-activedescendant"],o=r.accessibilityActiveDescendant,u=r["aria-atomic"],d=r.accessibilityAtomic,f=r["aria-autocomplete"],h=r.accessibilityAutoComplete,v=r["aria-busy"],m=r.accessibilityBusy,g=r["aria-checked"],x=r.accessibilityChecked,E=r["aria-colcount"],R=r.accessibilityColumnCount,y=r["aria-colindex"],S=r.accessibilityColumnIndex,w=r["aria-colspan"],N=r.accessibilityColumnSpan,D=r["aria-controls"],U=r.accessibilityControls,I=r["aria-current"],b=r.accessibilityCurrent,P=r["aria-describedby"],G=r.accessibilityDescribedBy,O=r["aria-details"],B=r.accessibilityDetails,V=r["aria-disabled"],X=r.accessibilityDisabled,k=r["aria-errormessage"],ae=r.accessibilityErrorMessage,ie=r["aria-expanded"],te=r.accessibilityExpanded,j=r["aria-flowto"],Y=r.accessibilityFlowTo,J=r["aria-haspopup"],F=r.accessibilityHasPopup,ee=r["aria-hidden"],Ae=r.accessibilityHidden,ne=r["aria-invalid"],xe=r.accessibilityInvalid,Ee=r["aria-keyshortcuts"],Ce=r.accessibilityKeyShortcuts,_e=r["aria-label"],Be=r.accessibilityLabel,mt=r["aria-labelledby"],Ze=r.accessibilityLabelledBy,lt=r["aria-level"],vt=r.accessibilityLevel,ut=r["aria-live"],kt=r.accessibilityLiveRegion,Bt=r["aria-modal"],Zt=r.accessibilityModal,Lt=r["aria-multiline"],vn=r.accessibilityMultiline,Dt=r["aria-multiselectable"],jt=r.accessibilityMultiSelectable,an=r["aria-orientation"],hn=r.accessibilityOrientation,K=r["aria-owns"],pn=r.accessibilityOwns,At=r["aria-placeholder"],Ct=r.accessibilityPlaceholder,Ie=r["aria-posinset"],he=r.accessibilityPosInSet,ve=r["aria-pressed"],ye=r.accessibilityPressed,C=r["aria-readonly"],T=r.accessibilityReadOnly,$=r["aria-required"],me=r.accessibilityRequired;r.role,r.accessibilityRole;var Q=r["aria-roledescription"],Me=r.accessibilityRoleDescription,be=r["aria-rowcount"],de=r.accessibilityRowCount,ge=r["aria-rowindex"],Le=r.accessibilityRowIndex,H=r["aria-rowspan"],Se=r.accessibilityRowSpan,pe=r["aria-selected"],Ue=r.accessibilitySelected,De=r["aria-setsize"],Ne=r.accessibilitySetSize,je=r["aria-sort"],ft=r.accessibilitySort,Te=r["aria-valuemax"],tt=r.accessibilityValueMax,ot=r["aria-valuemin"],He=r.accessibilityValueMin,St=r["aria-valuenow"],$t=r.accessibilityValueNow,Ln=r["aria-valuetext"],ea=r.accessibilityValueText,rr=r.dataSet,ta=r.focusable,Ba=r.id,Mi=r.nativeID,ai=r.pointerEvents,na=r.style,ar=r.tabIndex,ia=r.testID,Ve=gs(r,zT),za=V||X,zn=lS.propsToAriaRole(e),sr=s??o;sr!=null&&(Ve["aria-activedescendant"]=sr);var ys=u!=null?s:d;ys!=null&&(Ve["aria-atomic"]=ys);var Ht=f??h;Ht!=null&&(Ve["aria-autocomplete"]=Ht);var Ha=v??m;Ha!=null&&(Ve["aria-busy"]=Ha);var ra=g??x;ra!=null&&(Ve["aria-checked"]=ra);var Ga=E??R;Ga!=null&&(Ve["aria-colcount"]=Ga);var Ar=y??S;Ar!=null&&(Ve["aria-colindex"]=Ar);var Va=w??N;Va!=null&&(Ve["aria-colspan"]=Va);var L=D??U;L!=null&&(Ve["aria-controls"]=Vs(L));var W=I??b;W!=null&&(Ve["aria-current"]=W);var le=P??G;le!=null&&(Ve["aria-describedby"]=Vs(le));var se=O??B;se!=null&&(Ve["aria-details"]=se),za===!0&&(Ve["aria-disabled"]=!0,(n==="button"||n==="form"||n==="input"||n==="select"||n==="textarea")&&(Ve.disabled=!0));var re=k??ae;re!=null&&(Ve["aria-errormessage"]=re);var ke=ie??te;ke!=null&&(Ve["aria-expanded"]=ke);var $e=j??Y;$e!=null&&(Ve["aria-flowto"]=Vs($e));var Fe=J??F;Fe!=null&&(Ve["aria-haspopup"]=Fe);var ze=ee??Ae;ze===!0&&(Ve["aria-hidden"]=ze);var Xe=ne??xe;Xe!=null&&(Ve["aria-invalid"]=Xe);var it=Ee??Ce;it!=null&&(Ve["aria-keyshortcuts"]=Vs(it));var pt=_e??Be;pt!=null&&(Ve["aria-label"]=pt);var qe=mt??Ze;qe!=null&&(Ve["aria-labelledby"]=Vs(qe));var gt=lt??vt;gt!=null&&(Ve["aria-level"]=gt);var zt=ut??kt;zt!=null&&(Ve["aria-live"]=zt==="none"?"off":zt);var It=Bt??Zt;It!=null&&(Ve["aria-modal"]=It);var Rt=Lt??vn;Rt!=null&&(Ve["aria-multiline"]=Rt);var Xt=Dt??jt;Xt!=null&&(Ve["aria-multiselectable"]=Xt);var Ye=an??hn;Ye!=null&&(Ve["aria-orientation"]=Ye);var sn=K??pn;sn!=null&&(Ve["aria-owns"]=Vs(sn));var Je=At??Ct;Je!=null&&(Ve["aria-placeholder"]=Je);var si=Ie??he;si!=null&&(Ve["aria-posinset"]=si);var on=ve??ye;on!=null&&(Ve["aria-pressed"]=on);var Fi=C??T;Fi!=null&&(Ve["aria-readonly"]=Fi,(n==="input"||n==="select"||n==="textarea")&&(Ve.readOnly=!0));var Xn=$??me;Xn!=null&&(Ve["aria-required"]=Xn,(n==="input"||n==="select"||n==="textarea")&&(Ve.required=me)),zn!=null&&(Ve.role=zn==="none"?"presentation":zn);var oi=Q??Me;oi!=null&&(Ve["aria-roledescription"]=oi);var yt=be??de;yt!=null&&(Ve["aria-rowcount"]=yt);var Jt=ge??Le;Jt!=null&&(Ve["aria-rowindex"]=Jt);var _n=H??Se;_n!=null&&(Ve["aria-rowspan"]=_n);var bt=pe??Ue;bt!=null&&(Ve["aria-selected"]=bt);var Ut=De??Ne;Ut!=null&&(Ve["aria-setsize"]=Ut);var cn=je??ft;cn!=null&&(Ve["aria-sort"]=cn);var ki=Te??tt;ki!=null&&(Ve["aria-valuemax"]=ki);var aa=ot??He;aa!=null&&(Ve["aria-valuemin"]=aa);var Bi=St??$t;Bi!=null&&(Ve["aria-valuenow"]=Bi);var Hl=Ln??ea;if(Hl!=null&&(Ve["aria-valuetext"]=Hl),rr!=null){for(var Ss in rr)if(GT.call(rr,Ss)){var Wa=XT(Ss),Gl=rr[Ss];Gl!=null&&(Ve["data-"+Wa]=Gl)}}ar===0||ar==="0"||ar===-1||ar==="-1"?Ve.tabIndex=ar:(ta===!1&&(Ve.tabIndex="-1"),n==="a"||n==="button"||n==="input"||n==="select"||n==="textarea"?(ta===!1||X===!0)&&(Ve.tabIndex="-1"):zn==="button"||zn==="checkbox"||zn==="link"||zn==="radio"||zn==="textbox"||zn==="switch"?ta!==!1&&(Ve.tabIndex="0"):ta===!0&&(Ve.tabIndex="0"));var Mo=br([na,ai&&qT[ai]],Ni({writingDirection:"ltr"},t)),$a=Mo[0],Eo=Mo[1];$a&&(Ve.className=$a),Eo&&(Ve.style=Eo);var Vl=Ba??Mi;return Vl!=null&&(Ve.id=Vl),ia!=null&&(Ve["data-testid"]=ia),Ve.type==null&&n==="button"&&(Ve.type="button"),Ve},KT=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),h_=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","far","glk","he","iw","khw","ks","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]),p_=new Map;function ZT(n){var e=p_.get(n);if(e)return e;var t=!1;if(Intl.Locale)try{var r=new Intl.Locale(n).maximize().script;t=KT.has(r)}catch{var s=n.split("-")[0];t=h_.has(s)}else{var o=n.split("-")[0];t=h_.has(o)}return p_.set(n,t),t}var jT={direction:"ltr",locale:"en-US"},CS=st.createContext(jT);function Mm(n){return ZT(n)?"rtl":"ltr"}function JT(n){var e=n.direction,t=n.locale,r=n.children,s=e||t;return s?co.createElement(CS.Provider,{children:r,value:{direction:t?Mm(t):e,locale:t}}):r}function PS(){return st.useContext(CS)}var Em=(n,e,t)=>{var r;n&&n.constructor===String&&(r=lS.propsToAccessibilityComponent(e));var s=r||n,o=YT(s,e,t),u=co.createElement(s,o),d=o.dir?co.createElement(JT,{children:u,direction:o.dir,locale:o.lang}):u;return d},QT=[];function LS(n){return QT[n-1]}var e1=/^data:/;class mi{static has(e){var t=mi._entries,r=e1.test(e);return r||!!t[e]}static add(e){var t=mi._entries,r=Date.now();t[e]?(t[e].lastUsedTimestamp=r,t[e].refCount+=1):t[e]={lastUsedTimestamp:r,refCount:1}}static remove(e){var t=mi._entries;t[e]&&(t[e].refCount-=1),mi._cleanUpIfNeeded()}static _cleanUpIfNeeded(){var e=mi._entries,t=Object.keys(e);if(t.length+1>mi._maximumEntries){var r,s;t.forEach(o=>{var u=e[o];(!s||u.lastUsedTimestamp<s.lastUsedTimestamp)&&u.refCount===0&&(r=o,s=u)}),r&&delete e[r]}}}mi._maximumEntries=256;mi._entries={};var ah=0,ac={},Sr={abort(n){var e=ac[""+n];e&&(e.onerror=null,e.onload=null,e=null,delete ac[""+n])},getSize(n,e,t){var r=!1,s=setInterval(u,16),o=Sr.load(n,u,d);function u(){var f=ac[""+o];if(f){var h=f.naturalHeight,v=f.naturalWidth;h&&v&&(e(v,h),r=!0)}r&&(Sr.abort(o),clearInterval(s))}function d(){typeof t=="function"&&t(),Sr.abort(o),clearInterval(s)}},has(n){return mi.has(n)},load(n,e,t){ah+=1;var r=new window.Image;return r.onerror=t,r.onload=s=>{var o=()=>e({nativeEvent:s});typeof r.decode=="function"?r.decode().then(o,o):setTimeout(o,0)},r.src=n,ac[""+ah]=r,ah},prefetch(n){return new Promise((e,t)=>{Sr.load(n,()=>{mi.add(n),mi.remove(n),e()},t)})},queryCache(n){var e={};return n.forEach(t=>{mi.has(t)&&(e[t]="disk/memory")}),Promise.resolve(e)}},sh,m_;function t1(){if(m_)return sh;m_=1;function n(e,t){for(var r=arguments.length,s=new Array(r>2?r-2:0),o=2;o<r;o++)s[o-2]=arguments[o];if(!e){var u;if(t===void 0)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=0;u=new Error(t.replace(/%s/g,function(){return String(s[d++])})),u.name="Invariant Violation"}throw u.framesToPop=1,u}}return sh=n,sh}var n1=t1();const g_=Si(n1);var us={window:{fontScale:1,height:0,scale:1,width:0},screen:{fontScale:1,height:0,scale:1,width:0}},Ra={},v_=xi;function DS(){if(xi){var n=window,e,t;if(n.visualViewport){var r=n.visualViewport;e=Math.round(r.height*r.scale),t=Math.round(r.width*r.scale)}else{var s=n.document.documentElement;e=s.clientHeight,t=s.clientWidth}us.window={fontScale:1,height:e,scale:n.devicePixelRatio||1,width:t},us.screen={fontScale:1,height:n.screen.height,scale:n.devicePixelRatio||1,width:n.screen.width}}}function __(){DS(),Array.isArray(Ra.change)&&Ra.change.forEach(n=>n(us))}class y_{static get(e){return v_&&(v_=!1,DS()),g_(us[e],"No dimension set for key "+e),us[e]}static set(e){e&&(xi?g_(!1,"Dimensions cannot be set in the browser"):(e.screen!=null&&(us.screen=e.screen),e.window!=null&&(us.window=e.window)))}static addEventListener(e,t){return Ra[e]=Ra[e]||[],Ra[e].push(t),{remove:()=>{this.removeEventListener(e,t)}}}static removeEventListener(e,t){Array.isArray(Ra[e])&&(Ra[e]=Ra[e].filter(r=>r!==t))}}xi&&(window.visualViewport?window.visualViewport.addEventListener("resize",__,!1):window.addEventListener("resize",__,!1));class yl{static get(){return y_.get("window").scale}static getFontScale(){return y_.get("window").fontScale||yl.get()}static getPixelSizeForLayoutSize(e){return Math.round(e*yl.get())}static roundToNearestPixel(e){var t=yl.get();return Math.round(e*t)/t}}var Vc=st.createContext(!1),IS={children:!0,dataSet:!0,dir:!0,id:!0,ref:!0,suppressHydrationWarning:!0,tabIndex:!0,testID:!0,focusable:!0,nativeID:!0},NS={"aria-activedescendant":!0,"aria-atomic":!0,"aria-autocomplete":!0,"aria-busy":!0,"aria-checked":!0,"aria-colcount":!0,"aria-colindex":!0,"aria-colspan":!0,"aria-controls":!0,"aria-current":!0,"aria-describedby":!0,"aria-details":!0,"aria-disabled":!0,"aria-errormessage":!0,"aria-expanded":!0,"aria-flowto":!0,"aria-haspopup":!0,"aria-hidden":!0,"aria-invalid":!0,"aria-keyshortcuts":!0,"aria-label":!0,"aria-labelledby":!0,"aria-level":!0,"aria-live":!0,"aria-modal":!0,"aria-multiline":!0,"aria-multiselectable":!0,"aria-orientation":!0,"aria-owns":!0,"aria-placeholder":!0,"aria-posinset":!0,"aria-pressed":!0,"aria-readonly":!0,"aria-required":!0,role:!0,"aria-roledescription":!0,"aria-rowcount":!0,"aria-rowindex":!0,"aria-rowspan":!0,"aria-selected":!0,"aria-setsize":!0,"aria-sort":!0,"aria-valuemax":!0,"aria-valuemin":!0,"aria-valuenow":!0,"aria-valuetext":!0,accessibilityActiveDescendant:!0,accessibilityAtomic:!0,accessibilityAutoComplete:!0,accessibilityBusy:!0,accessibilityChecked:!0,accessibilityColumnCount:!0,accessibilityColumnIndex:!0,accessibilityColumnSpan:!0,accessibilityControls:!0,accessibilityCurrent:!0,accessibilityDescribedBy:!0,accessibilityDetails:!0,accessibilityDisabled:!0,accessibilityErrorMessage:!0,accessibilityExpanded:!0,accessibilityFlowTo:!0,accessibilityHasPopup:!0,accessibilityHidden:!0,accessibilityInvalid:!0,accessibilityKeyShortcuts:!0,accessibilityLabel:!0,accessibilityLabelledBy:!0,accessibilityLevel:!0,accessibilityLiveRegion:!0,accessibilityModal:!0,accessibilityMultiline:!0,accessibilityMultiSelectable:!0,accessibilityOrientation:!0,accessibilityOwns:!0,accessibilityPlaceholder:!0,accessibilityPosInSet:!0,accessibilityPressed:!0,accessibilityReadOnly:!0,accessibilityRequired:!0,accessibilityRole:!0,accessibilityRoleDescription:!0,accessibilityRowCount:!0,accessibilityRowIndex:!0,accessibilityRowSpan:!0,accessibilitySelected:!0,accessibilitySetSize:!0,accessibilitySort:!0,accessibilityValueMax:!0,accessibilityValueMin:!0,accessibilityValueNow:!0,accessibilityValueText:!0},OS={onClick:!0,onAuxClick:!0,onContextMenu:!0,onGotPointerCapture:!0,onLostPointerCapture:!0,onPointerCancel:!0,onPointerDown:!0,onPointerEnter:!0,onPointerMove:!0,onPointerLeave:!0,onPointerOut:!0,onPointerOver:!0,onPointerUp:!0},US={onBlur:!0,onFocus:!0},FS={onKeyDown:!0,onKeyDownCapture:!0,onKeyUp:!0,onKeyUpCapture:!0},kS={onMouseDown:!0,onMouseEnter:!0,onMouseLeave:!0,onMouseMove:!0,onMouseOver:!0,onMouseOut:!0,onMouseUp:!0},BS={onTouchCancel:!0,onTouchCancelCapture:!0,onTouchEnd:!0,onTouchEndCapture:!0,onTouchMove:!0,onTouchMoveCapture:!0,onTouchStart:!0,onTouchStartCapture:!0},zS={style:!0};function HS(n,e){var t={};for(var r in n)n.hasOwnProperty(r)&&e[r]===!0&&(t[r]=n[r]);return t}var Wc=xi?st.useLayoutEffect:st.useEffect,vp=n=>{if(n!=null){var e=n.nodeType===1;if(e&&typeof n.getBoundingClientRect=="function")return n.getBoundingClientRect()}},Sl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexOrder:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,gridRow:!0,gridRowEnd:!0,gridRowGap:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnGap:!0,gridColumnStart:!0,lineClamp:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0,scale:!0,scaleX:!0,scaleY:!0,scaleZ:!0,shadowOpacity:!0},i1=["ms","Moz","O","Webkit"],r1=(n,e)=>n+e.charAt(0).toUpperCase()+e.substring(1);Object.keys(Sl).forEach(n=>{i1.forEach(e=>{Sl[r1(e,n)]=Sl[n]})});function a1(n,e,t){var r=e==null||typeof e=="boolean"||e==="";return r?"":!t&&typeof e=="number"&&e!==0&&!(Sl.hasOwnProperty(n)&&Sl[n])?e+"px":(""+e).trim()}function s1(n,e){var t=n.style;for(var r in e)if(e.hasOwnProperty(r)){var s=r.indexOf("--")===0,o=a1(r,e[r],s);r==="float"&&(r="cssFloat"),s?t.setProperty(r,o):t[r]=o}}var S_=n=>{var e=n.offsetHeight,t=n.offsetWidth,r=n.offsetLeft,s=n.offsetTop;for(n=n.offsetParent;n&&n.nodeType===1;)r+=n.offsetLeft+n.clientLeft-n.scrollLeft,s+=n.offsetTop+n.clientTop-n.scrollTop,n=n.offsetParent;return s-=window.scrollY,r-=window.scrollX,{width:t,height:e,top:s,left:r}},x_=(n,e,t)=>{var r=e||n&&n.parentNode;n&&r&&setTimeout(()=>{if(n.isConnected&&r.isConnected){var s=S_(r),o=S_(n),u=o.height,d=o.left,f=o.top,h=o.width,v=d-s.left,m=f-s.top;t(v,m,h,u,d,f)}},0)},o1={A:!0,BODY:!0,INPUT:!0,SELECT:!0,TEXTAREA:!0},Pc={blur(n){try{n.blur()}catch{}},focus(n){try{var e=n.nodeName;n.getAttribute("tabIndex")==null&&n.isContentEditable!==!0&&o1[e]==null&&n.setAttribute("tabIndex","-1"),n.focus()}catch{}},measure(n,e){x_(n,null,e)},measureInWindow(n,e){n&&setTimeout(()=>{var t=vp(n),r=t.height,s=t.left,o=t.top,u=t.width;e(s,o,u,r)},0)},measureLayout(n,e,t,r){x_(n,e,r)},updateView(n,e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var r=e[t];switch(t){case"style":{s1(n,r);break}case"class":case"className":{n.setAttribute("class",r);break}case"text":case"value":n.value=r;break;default:n.setAttribute(t,r)}}},configureNextLayoutAnimation(n,e){e()},setLayoutAnimationEnabledExperimental(){}},_p="__reactLayoutHandler",oh=null;function l1(){return xi&&typeof window.ResizeObserver<"u"&&oh==null&&(oh=new window.ResizeObserver(function(n){n.forEach(e=>{var t=e.target,r=t[_p];typeof r=="function"&&Pc.measure(t,(s,o,u,d,f,h)=>{var v={nativeEvent:{layout:{x:s,y:o,width:u,height:d,left:f,top:h}},timeStamp:Date.now()};Object.defineProperty(v.nativeEvent,"target",{enumerable:!0,get:()=>e.target}),r(v)})})})),oh}function GS(n,e){var t=l1();Wc(()=>{var r=n.current;r!=null&&(r[_p]=e)},[n,e]),Wc(()=>{var r=n.current;return r!=null&&t!=null&&(typeof r[_p]=="function"?t.observe(r):t.unobserve(r)),()=>{r!=null&&t!=null&&t.unobserve(r)}},[n,t])}function u1(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(s){e.forEach(o=>{if(o!=null){if(typeof o=="function"){o(s);return}if(typeof o=="object"){o.current=s;return}console.error("mergeRefs cannot handle Refs of type boolean, number or string, received ref "+String(o))}})}}function bm(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return st.useMemo(()=>u1(...e),[...e])}var M_=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():Object.freeze({});function yp(n){var e=st.useRef(M_);return e.current===M_&&(e.current=n()),e.current}function VS(n){n.pointerEvents,n.style;var e=yp(()=>t=>{t!=null&&(t.measure=r=>Pc.measure(t,r),t.measureLayout=(r,s,o)=>Pc.measureLayout(t,r,o,s),t.measureInWindow=r=>Pc.measureInWindow(t,r))});return e}var E_=()=>{},c1={},d1=[];function b_(n){return n>20?n%20:n}function WS(n,e){var t,r=!1,s,o,u=n.changedTouches,d=n.type,f=n.metaKey===!0,h=n.shiftKey===!0,v=u&&u[0].force||0,m=b_(u&&u[0].identifier||0),g=u&&u[0].clientX||n.clientX,x=u&&u[0].clientY||n.clientY,E=u&&u[0].pageX||n.pageX,R=u&&u[0].pageY||n.pageY,y=typeof n.preventDefault=="function"?n.preventDefault.bind(n):E_,S=n.timeStamp;function w(b){return Array.prototype.slice.call(b).map(P=>({force:P.force,identifier:b_(P.identifier),get locationX(){return U(P.clientX)},get locationY(){return I(P.clientY)},pageX:P.pageX,pageY:P.pageY,target:P.target,timestamp:S}))}if(u!=null)s=w(u),o=w(n.touches);else{var N=[{force:v,identifier:m,get locationX(){return U(g)},get locationY(){return I(x)},pageX:E,pageY:R,target:n.target,timestamp:S}];s=N,o=d==="mouseup"||d==="dragstart"?d1:N}var D={bubbles:!0,cancelable:!0,currentTarget:null,defaultPrevented:n.defaultPrevented,dispatchConfig:c1,eventPhase:n.eventPhase,isDefaultPrevented(){return n.defaultPrevented},isPropagationStopped(){return r},isTrusted:n.isTrusted,nativeEvent:{altKey:!1,ctrlKey:!1,metaKey:f,shiftKey:h,changedTouches:s,force:v,identifier:m,get locationX(){return U(g)},get locationY(){return I(x)},pageX:E,pageY:R,target:n.target,timestamp:S,touches:o,type:d},persist:E_,preventDefault:y,stopPropagation(){r=!0},target:n.target,timeStamp:S,touchHistory:e.touchHistory};function U(b){if(t=t||vp(D.currentTarget),t)return b-t.left}function I(b){if(t=t||vp(D.currentTarget),t)return b-t.top}return D}var f1="mousedown",h1="mousemove",p1="mouseup",m1="dragstart",g1="touchstart",v1="touchmove",_1="touchend",y1="touchcancel",S1="scroll",x1="select",M1="selectionchange";function $S(n){return n===g1||n===f1}function XS(n){return n===v1||n===h1}function qS(n){return n===_1||n===p1||YS(n)}function YS(n){return n===y1||n===m1}function E1(n){return n===S1}function b1(n){return n===x1||n===M1}function w1(){var n=window.getSelection(),e=n.toString(),t=n.anchorNode,r=n.focusNode,s=t&&t.nodeType===window.Node.TEXT_NODE||r&&r.nodeType===window.Node.TEXT_NODE;return e.length>=1&&e!==`
`&&s}var KS="__reactResponderId";function T1(n){if(n.type==="selectionchange"){var e=window.getSelection().anchorNode;return w_(e)}else{var t=n.composedPath!=null?n.composedPath():w_(n.target);return t}}function w_(n){for(var e=[];n!=null&&n!==document.body;)e.push(n),n=n.parentNode;return e}function R1(n){return n!=null?n[KS]:null}function A1(n,e){n!=null&&(n[KS]=e)}function C1(n){for(var e=[],t=[],r=T1(n),s=0;s<r.length;s++){var o=r[s],u=R1(o);u!=null&&(e.push(u),t.push(o))}return{idPath:e,nodePath:t}}function P1(n,e){var t=n.length,r=e.length;if(t===0||r===0||n[t-1]!==e[r-1])return null;var s=n[0],o=0,u=e[0],d=0;t-r>0&&(o=t-r,s=n[o],t=r),r-t>0&&(d=r-t,u=e[d],r=t);for(var f=t;f--;){if(s===u)return s;s=n[o++],u=e[d++]}return null}function L1(n,e){if(!e||e.length===0)return!1;for(var t=0;t<e.length;t++){var r=e[t].target;if(r!=null&&n.contains(r))return!0}return!1}function D1(n){return n.type==="selectionchange"?w1():n.type==="select"}function I1(n){var e=n.altKey,t=n.button,r=n.buttons,s=n.ctrlKey,o=n.type,u=o==="touchstart"||o==="touchmove",d=o==="mousedown"&&(t===0||r===1),f=o==="mousemove"&&r===1,h=e===!1&&s===!1;return!!(u||d&&h||f&&h)}var T_=20;function Ui(n){return n.timeStamp||n.timestamp}function N1(n){return{touchActive:!0,startPageX:n.pageX,startPageY:n.pageY,startTimeStamp:Ui(n),currentPageX:n.pageX,currentPageY:n.pageY,currentTimeStamp:Ui(n),previousPageX:n.pageX,previousPageY:n.pageY,previousTimeStamp:Ui(n)}}function O1(n,e){n.touchActive=!0,n.startPageX=e.pageX,n.startPageY=e.pageY,n.startTimeStamp=Ui(e),n.currentPageX=e.pageX,n.currentPageY=e.pageY,n.currentTimeStamp=Ui(e),n.previousPageX=e.pageX,n.previousPageY=e.pageY,n.previousTimeStamp=Ui(e)}function wm(n){var e=n.identifier;return e==null&&console.error("Touch object is missing identifier."),e}function U1(n,e){var t=wm(n),r=e.touchBank[t];r?O1(r,n):e.touchBank[t]=N1(n),e.mostRecentTimeStamp=Ui(n)}function F1(n,e){var t=e.touchBank[wm(n)];t?(t.touchActive=!0,t.previousPageX=t.currentPageX,t.previousPageY=t.currentPageY,t.previousTimeStamp=t.currentTimeStamp,t.currentPageX=n.pageX,t.currentPageY=n.pageY,t.currentTimeStamp=Ui(n),e.mostRecentTimeStamp=Ui(n)):console.warn(`Cannot record touch move without a touch start.
`,"Touch Move: "+ZS(n)+`
`,"Touch Bank: "+jS(e))}function k1(n,e){var t=e.touchBank[wm(n)];t?(t.touchActive=!1,t.previousPageX=t.currentPageX,t.previousPageY=t.currentPageY,t.previousTimeStamp=t.currentTimeStamp,t.currentPageX=n.pageX,t.currentPageY=n.pageY,t.currentTimeStamp=Ui(n),e.mostRecentTimeStamp=Ui(n)):console.warn(`Cannot record touch end without a touch start.
`,"Touch End: "+ZS(n)+`
`,"Touch Bank: "+jS(e))}function ZS(n){return JSON.stringify({identifier:n.identifier,pageX:n.pageX,pageY:n.pageY,timestamp:Ui(n)})}function jS(n){var e=n.touchBank,t=JSON.stringify(e.slice(0,T_));return e.length>T_&&(t+=" (original size: "+e.length+")"),t}class B1{constructor(){this._touchHistory={touchBank:[],numberActiveTouches:0,indexOfSingleActiveTouch:-1,mostRecentTimeStamp:0}}recordTouchTrack(e,t){var r=this._touchHistory;if(XS(e))t.changedTouches.forEach(d=>F1(d,r));else if($S(e))t.changedTouches.forEach(d=>U1(d,r)),r.numberActiveTouches=t.touches.length,r.numberActiveTouches===1&&(r.indexOfSingleActiveTouch=t.touches[0].identifier);else if(qS(e)&&(t.changedTouches.forEach(d=>k1(d,r)),r.numberActiveTouches=t.touches.length,r.numberActiveTouches===1))for(var s=r.touchBank,o=0;o<s.length;o++){var u=s[o];if(u!=null&&u.touchActive){r.indexOfSingleActiveTouch=o;break}}}get touchHistory(){return this._touchHistory}}var z1={},R_=["onStartShouldSetResponderCapture","onStartShouldSetResponder",{bubbles:!0}],A_=["onMoveShouldSetResponderCapture","onMoveShouldSetResponder",{bubbles:!0}],H1=["onScrollShouldSetResponderCapture","onScrollShouldSetResponder",{bubbles:!1}],G1={touchstart:R_,mousedown:R_,touchmove:A_,mousemove:A_,scroll:H1},Sp={id:null,idPath:null,node:null},$c=new Map,Ta=!1,mr=0,vr={id:null,node:null,idPath:null},xp=new B1;function Tl(n){vr=n}function Rl(n){var e=$c.get(n);return e??z1}function lh(n){var e=n.type,t=n.target;if(e==="touchstart"&&(Ta=!0),(e==="touchmove"||mr>1)&&(Ta=!1),!(e==="mousedown"&&Ta||e==="mousemove"&&Ta||e==="mousemove"&&mr<1)){if(Ta&&e==="mouseup"){mr===0&&(Ta=!1);return}var r=$S(e)&&I1(n),s=XS(e),o=qS(e),u=E1(e),d=b1(e),f=WS(n,xp);(r||s||o)&&(n.touches?mr=n.touches.length:r?mr=1:o&&(mr=0),xp.recordTouchTrack(e,f.nativeEvent));var h=C1(n),v=!1,m;if(r||s||u&&mr>0){var g=vr.idPath,x=h.idPath;if(g!=null&&x!=null){var E=P1(g,x);if(E!=null){var R=x.indexOf(E),y=R+(E===vr.id?1:0);h={idPath:x.slice(y),nodePath:h.nodePath.slice(y)}}else h=null}h!=null&&(m=V1(h,n,f),m!=null&&(W1(f,m),v=!0))}if(vr.id!=null&&vr.node!=null){var S=vr,w=S.id,N=S.node,D=Rl(w),U=D.onResponderStart,I=D.onResponderMove,b=D.onResponderEnd,P=D.onResponderRelease,G=D.onResponderTerminate,O=D.onResponderTerminationRequest;if(f.bubbles=!1,f.cancelable=!1,f.currentTarget=N,r)U!=null&&(f.dispatchConfig.registrationName="onResponderStart",U(f));else if(s)I!=null&&(f.dispatchConfig.registrationName="onResponderMove",I(f));else{var B=YS(e)||e==="contextmenu"||e==="blur"&&t===window||e==="blur"&&t.contains(N)&&n.relatedTarget!==N||u&&mr===0||u&&t.contains(N)&&t!==N||d&&D1(n),V=o&&!B&&!L1(N,n.touches);if(o&&b!=null&&(f.dispatchConfig.registrationName="onResponderEnd",b(f)),V&&(P!=null&&(f.dispatchConfig.registrationName="onResponderRelease",P(f)),Tl(Sp)),B){var X=!0;(e==="contextmenu"||e==="scroll"||e==="selectionchange")&&(v?X=!1:O!=null&&(f.dispatchConfig.registrationName="onResponderTerminationRequest",O(f)===!1&&(X=!1))),X&&(G!=null&&(f.dispatchConfig.registrationName="onResponderTerminate",G(f)),Tl(Sp),Ta=!1,mr=0)}}}}}function V1(n,e,t){var r=G1[e.type];if(r!=null){for(var s=n.idPath,o=n.nodePath,u=r[0],d=r[1],f=r[2].bubbles,h=function(I,b,P){var G=Rl(I),O=G[P];if(O!=null&&(t.currentTarget=b,O(t)===!0)){var B=s.slice(s.indexOf(I));return{id:I,node:b,idPath:B}}},v=s.length-1;v>=0;v--){var m=s[v],g=o[v],x=h(m,g,u);if(x!=null)return x;if(t.isPropagationStopped()===!0)return}if(f)for(var E=0;E<s.length;E++){var R=s[E],y=o[E],S=h(R,y,d);if(S!=null)return S;if(t.isPropagationStopped()===!0)return}else{var w=s[0],N=o[0],D=e.target;if(D===N)return h(w,N,d)}}}function W1(n,e){var t=vr,r=t.id,s=t.node,o=e.id,u=e.node,d=Rl(o),f=d.onResponderGrant,h=d.onResponderReject;if(n.bubbles=!1,n.cancelable=!1,n.currentTarget=u,r==null)f!=null&&(n.currentTarget=u,n.dispatchConfig.registrationName="onResponderGrant",f(n)),Tl(e);else{var v=Rl(r),m=v.onResponderTerminate,g=v.onResponderTerminationRequest,x=!0;g!=null&&(n.currentTarget=s,n.dispatchConfig.registrationName="onResponderTerminationRequest",g(n)===!1&&(x=!1)),x?(m!=null&&(n.currentTarget=s,n.dispatchConfig.registrationName="onResponderTerminate",m(n)),f!=null&&(n.currentTarget=u,n.dispatchConfig.registrationName="onResponderGrant",f(n)),Tl(e)):h!=null&&(n.currentTarget=u,n.dispatchConfig.registrationName="onResponderReject",h(n))}}var $1=["blur","scroll"],X1=["mousedown","mousemove","mouseup","dragstart","touchstart","touchmove","touchend","touchcancel","contextmenu","select","selectionchange"];function q1(){xi&&window.__reactResponderSystemActive==null&&(window.addEventListener("blur",lh),X1.forEach(n=>{document.addEventListener(n,lh)}),$1.forEach(n=>{document.addEventListener(n,lh,!0)}),window.__reactResponderSystemActive=!0)}function Y1(n,e,t){A1(e,n),$c.set(n,t)}function C_(n){vr.id===n&&K1(),$c.has(n)&&$c.delete(n)}function K1(){var n=vr,e=n.id,t=n.node;if(e!=null&&t!=null){var r=Rl(e),s=r.onResponderTerminate;if(s!=null){var o=WS({},xp);o.currentTarget=t,s(o)}Tl(Sp)}Ta=!1,mr=0}function Z1(){return vr.node}var j1={},J1=0;function Q1(n){var e=st.useRef(null);return e.current==null&&(e.current=n()),e.current}function JS(n,e){e===void 0&&(e=j1);var t=Q1(()=>J1++),r=st.useRef(!1);st.useEffect(()=>(q1(),()=>{C_(t)}),[t]),st.useEffect(()=>{var s=e,o=s.onMoveShouldSetResponder,u=s.onMoveShouldSetResponderCapture,d=s.onScrollShouldSetResponder,f=s.onScrollShouldSetResponderCapture,h=s.onSelectionChangeShouldSetResponder,v=s.onSelectionChangeShouldSetResponderCapture,m=s.onStartShouldSetResponder,g=s.onStartShouldSetResponderCapture,x=o!=null||u!=null||d!=null||f!=null||h!=null||v!=null||m!=null||g!=null,E=n.current;x?(Y1(t,E,e),r.current=!0):r.current&&(C_(t),r.current=!1)},[e,n,t]),st.useDebugValue({isResponder:n.current===Z1()}),st.useDebugValue(e)}var eR=["hrefAttrs","onLayout","onMoveShouldSetResponder","onMoveShouldSetResponderCapture","onResponderEnd","onResponderGrant","onResponderMove","onResponderReject","onResponderRelease","onResponderStart","onResponderTerminate","onResponderTerminationRequest","onScrollShouldSetResponder","onScrollShouldSetResponderCapture","onSelectionChangeShouldSetResponder","onSelectionChangeShouldSetResponderCapture","onStartShouldSetResponder","onStartShouldSetResponderCapture"],tR=Object.assign({},IS,NS,OS,US,FS,kS,BS,zS,{href:!0,lang:!0,onScroll:!0,onWheel:!0,pointerEvents:!0}),nR=n=>HS(n,tR),Al=st.forwardRef((n,e)=>{var t=n.hrefAttrs,r=n.onLayout,s=n.onMoveShouldSetResponder,o=n.onMoveShouldSetResponderCapture,u=n.onResponderEnd,d=n.onResponderGrant,f=n.onResponderMove,h=n.onResponderReject,v=n.onResponderRelease,m=n.onResponderStart,g=n.onResponderTerminate,x=n.onResponderTerminationRequest,E=n.onScrollShouldSetResponder,R=n.onScrollShouldSetResponderCapture,y=n.onSelectionChangeShouldSetResponder,S=n.onSelectionChangeShouldSetResponderCapture,w=n.onStartShouldSetResponder,N=n.onStartShouldSetResponderCapture,D=gs(n,eR),U=st.useContext(Vc),I=st.useRef(null),b=PS(),P=b.direction;GS(I,r),JS(I,{onMoveShouldSetResponder:s,onMoveShouldSetResponderCapture:o,onResponderEnd:u,onResponderGrant:d,onResponderMove:f,onResponderReject:h,onResponderRelease:v,onResponderStart:m,onResponderTerminate:g,onResponderTerminationRequest:x,onScrollShouldSetResponder:E,onScrollShouldSetResponderCapture:R,onSelectionChangeShouldSetResponder:y,onSelectionChangeShouldSetResponderCapture:S,onStartShouldSetResponder:w,onStartShouldSetResponderCapture:N});var G="div",O=n.lang!=null?Mm(n.lang):null,B=n.dir||O,V=B||P,X=nR(D);if(X.dir=B,X.style=[P_.view$raw,U&&P_.inline,n.style],n.href!=null&&(G="a",t!=null)){var k=t.download,ae=t.rel,ie=t.target;k!=null&&(X.download=k),ae!=null&&(X.rel=ae),typeof ie=="string"&&(X.target=ie.charAt(0)!=="_"?"_"+ie:ie)}var te=VS(X),j=bm(I,te,e);return X.ref=j,Em(G,X,{writingDirection:V})});Al.displayName="View";var P_=br.create({view$raw:{alignItems:"stretch",backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",display:"flex",flexBasis:"auto",flexDirection:"column",flexShrink:0,listStyle:"none",margin:0,minHeight:0,minWidth:0,padding:0,position:"relative",textDecoration:"none",zIndex:0},inline:{display:"inline-flex"}}),iR=["aria-label","accessibilityLabel","blurRadius","defaultSource","draggable","onError","onLayout","onLoad","onLoadEnd","onLoadStart","pointerEvents","source","style"],rR="ERRORED",uh="LOADED",L_="LOADING",aR="IDLE",sR=0,oR=/^(data:image\/svg\+xml;utf8,)(.*)/;function lR(n,e){return n&&e!=null?st.createElement("svg",{style:{position:"absolute",height:0,visibility:"hidden",width:0}},st.createElement("defs",null,st.createElement("filter",{id:"tint-"+e,suppressHydrationWarning:!0},st.createElement("feFlood",{floodColor:""+n,key:n}),st.createElement("feComposite",{in2:"SourceAlpha",operator:"in"})))):null}function uR(n,e,t,r){var s=br.flatten(n),o=s.filter,u=s.resizeMode,d=s.shadowOffset,f=s.tintColor;s.resizeMode,s.tintColor;var h=[],v=null;if(o&&h.push(o),e&&h.push("blur("+e+"px)"),d){var m=MS(s);m&&h.push("drop-shadow("+m+")")}return(r||f)&&t!=null&&h.push("url(#tint-"+t+")"),h.length>0&&(v=h.join(" ")),[u,v,f]}function cR(n){if(typeof n=="number"){var e=LS(n),t=e.height,r=e.width;return{height:t,width:r}}else if(n!=null&&!Array.isArray(n)&&typeof n=="object"){var s=n.height,o=n.width;return{height:s,width:o}}}function ch(n){var e=null;if(typeof n=="number"){var t=LS(n);if(t==null)throw new Error('Image: asset with ID "'+n+'" could not be found. Please check the image source or packager.');var r=t.scales[0];if(t.scales.length>1){var s=yl.get();r=t.scales.reduce((v,m)=>Math.abs(m-s)<Math.abs(v-s)?m:v)}var o=r!==1?"@"+r+"x":"";e=t?t.httpServerLocation+"/"+t.name+o+"."+t.type:""}else typeof n=="string"?e=n:n&&typeof n.uri=="string"&&(e=n.uri);if(e){var u=e.match(oR);if(u){var d=u[1],f=u[2],h=encodeURIComponent(f);return""+d+h}}return e}var QS=st.forwardRef((n,e)=>{var t=n["aria-label"],r=n.accessibilityLabel,s=n.blurRadius,o=n.defaultSource,u=n.draggable,d=n.onError,f=n.onLayout,h=n.onLoad,v=n.onLoadEnd,m=n.onLoadStart,g=n.pointerEvents,x=n.source,E=n.style,R=gs(n,iR),y=t||r,S=st.useState(()=>{var Ce=ch(x);if(Ce!=null){var _e=Sr.has(Ce);if(_e)return uh}return aR}),w=S[0],N=S[1],D=st.useState({}),U=D[0],I=D[1],b=st.useContext(Vc),P=st.useRef(null),G=st.useRef(sR++),O=st.useRef(null),B=w===uh||w===L_&&o==null,V=uR(E,s,G.current,n.tintColor),X=V[0],k=V[1],ae=V[2],ie=n.resizeMode||X||"cover",te=n.tintColor||ae,j=B?x:o,Y=ch(j),J=cR(j),F=Y?'url("'+Y+'")':null,ee=ne(),Ae=Y?Em("img",{alt:y||"",style:Qo.accessibilityImage$raw,draggable:u||!1,ref:P,src:Y}):null;function ne(){if(P.current!=null&&(ie==="center"||ie==="repeat")){var Ce=P.current,_e=Ce.naturalHeight,Be=Ce.naturalWidth,mt=U.height,Ze=U.width;if(_e&&Be&&mt&&Ze){var lt=Math.min(1,Ze/Be,mt/_e),vt=Math.ceil(lt*Be),ut=Math.ceil(lt*_e);return vt+"px "+ut+"px"}}}function xe(Ce){if(ie==="center"||ie==="repeat"||f){var _e=Ce.nativeEvent.layout;f&&f(Ce),I(_e)}}var Ee=ch(x);return st.useEffect(()=>{Ce(),Ee!=null&&(N(L_),m&&m(),O.current=Sr.load(Ee,function(Be){N(uh),h&&h(Be),v&&v()},function(){N(rR),d&&d({nativeEvent:{error:"Failed to load resource "+Ee}}),v&&v()}));function Ce(){O.current!=null&&(Sr.abort(O.current),O.current=null)}return Ce},[Ee,O,N,d,h,v,m]),st.createElement(Al,zc({},R,{"aria-label":y,onLayout:xe,pointerEvents:g,ref:e,style:[Qo.root,b&&Qo.inline,J,E,Qo.undo,{boxShadow:null}]}),st.createElement(Al,{style:[Qo.image,dR[ie],{backgroundImage:F,filter:k},ee!=null&&{backgroundSize:ee}],suppressHydrationWarning:!0}),Ae,lR(te,G.current))});QS.displayName="Image";var ad=QS;ad.getSize=function(n,e,t){Sr.getSize(n,e,t)};ad.prefetch=function(n){return Sr.prefetch(n)};ad.queryCache=function(n){return Sr.queryCache(n)};var Qo=br.create({root:{flexBasis:"auto",overflow:"hidden",zIndex:0},inline:{display:"inline-flex"},undo:{blurRadius:null,shadowColor:null,shadowOpacity:null,shadowOffset:null,shadowRadius:null,tintColor:null,overlayColor:null,resizeMode:null},image:Ni(Ni({},br.absoluteFillObject),{},{backgroundColor:"transparent",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100%",width:"100%",zIndex:-1}),accessibilityImage$raw:Ni(Ni({},br.absoluteFillObject),{},{height:"100%",opacity:0,width:"100%",zIndex:-1})}),dR=br.create({center:{backgroundSize:"auto"},contain:{backgroundSize:"contain"},cover:{backgroundSize:"cover"},none:{backgroundPosition:"0",backgroundSize:"auto"},repeat:{backgroundPosition:"0",backgroundRepeat:"repeat",backgroundSize:"auto"},stretch:{backgroundSize:"100% 100%"}}),fR=()=>{};function hR(){var n=!1;if(xi)try{var e={};Object.defineProperty(e,"passive",{get(){return n=!0,!1}}),window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}return n}var pR=hR();function mR(n){return n==null?!1:pR?n:!!n.capture}function gR(){return this.cancelBubble}function vR(){return this.defaultPrevented}function _R(n){return n.nativeEvent=n,n.persist=fR,n.isDefaultPrevented=vR,n.isPropagationStopped=gR,n}function kn(n,e,t,r){var s=mR(r),o=u=>t(_R(u));return n.addEventListener(e,o,s),function(){n!=null&&n.removeEventListener(e,o,s)}}var yR=()=>typeof window<"u"&&window.PointerEvent!=null,Ji="keyboard",Qn="keyboard",fl,hl,pl=!1,SR=new Set,xl="keyboard",el="mouse",dh="touch",xR="blur",ex="contextmenu",MR="focus",ER="keydown",tx="mousedown",nx="mousemove",ix="mouseup",rx="pointerdown",ax="pointermove",sx="scroll",ox="selectionchange",lx="touchcancel",ux="touchmove",cx="touchstart",bR="visibilitychange",D_={passive:!0},fi={capture:!0,passive:!0};function dx(){(fl!=null||hl!=null)&&(fl!=null&&(Qn=fl,fl=null),hl!=null&&(Ji=hl,hl=null),Ca())}function wR(){fl=Qn,hl=Ji,Ji=xl,Qn=xl,Ca(),pl=!1}function TR(){dx()}function RR(n){n.metaKey||n.altKey||n.ctrlKey||Qn!==xl&&(Qn=xl,Ji=xl,Ca())}function AR(){document.visibilityState!=="hidden"&&dx()}function qi(n){var e=n.type;if(yR()){if(e===rx){Ji!==n.pointerType&&(Qn=n.pointerType,Ji=n.pointerType,Ca());return}if(e===ax){Qn!==n.pointerType&&(Qn=n.pointerType,Ca());return}}else{if(pl||(e===tx&&Ji!==el&&(Qn=el,Ji=el,Ca()),e===nx&&Qn!==el&&(Qn=el,Ca())),e===cx){pl=!0,n.touches&&n.touches.length>1&&(pl=!1),Ji!==dh&&(Qn=dh,Ji=dh,Ca());return}(e===ex||e===ix||e===ox||e===sx||e===lx||e===ux)&&(pl=!1)}}xi&&(kn(window,xR,wR,D_),kn(window,MR,TR,D_),kn(document,ER,RR,fi),kn(document,bR,AR,fi),kn(document,rx,qi,fi),kn(document,ax,qi,fi),kn(document,ex,qi,fi),kn(document,tx,qi,fi),kn(document,nx,qi,fi),kn(document,ix,qi,fi),kn(document,lx,qi,fi),kn(document,ux,qi,fi),kn(document,cx,qi,fi),kn(document,ox,qi,fi),kn(document,sx,qi,fi));function Ca(){var n={activeModality:Ji,modality:Qn};SR.forEach(e=>{e(n)})}function CR(){return Qn}function tl(n,e){var t=yp(()=>new Map),r=yp(()=>(s,o)=>{var u=t.get(s);u!=null&&u(),o==null&&(t.delete(s),o=()=>{});var d=kn(s,n,o,e);return t.set(s,d),d});return Wc(()=>()=>{t.forEach(s=>{s()}),t.clear()},[t]),r}var PR={},nl={passive:!0},I_="react-gui:hover:lock",N_="react-gui:hover:unlock",LR=()=>typeof window<"u"&&window.PointerEvent!=null;function O_(n,e,t){var r=document.createEvent("CustomEvent"),s=PR,o=s.bubbles,u=o===void 0?!0:o,d=s.cancelable,f=d===void 0?!0:d,h=s.detail;r.initCustomEvent(e,u,f,h),n.dispatchEvent(r)}function fh(n){var e=n.pointerType;return e??CR()}function DR(n,e){var t=e.contain,r=e.disabled,s=e.onHoverStart,o=e.onHoverChange,u=e.onHoverUpdate,d=e.onHoverEnd,f=LR(),h=tl(f?"pointermove":"mousemove",nl),v=tl(f?"pointerenter":"mouseenter",nl),m=tl(f?"pointerleave":"mouseleave",nl),g=tl(I_,nl),x=tl(N_,nl);Wc(()=>{var E=n.current;if(E!==null){var R=function(U){d!=null&&d(U),o!=null&&o(!1),h(E,null),m(E,null)},y=function(U){var I=n.current;I!=null&&fh(U)!=="touch"&&(t&&O_(I,N_),R(U))},S=function(U){fh(U)!=="touch"&&u!=null&&(U.x==null&&(U.x=U.clientX),U.y==null&&(U.y=U.clientY),u(U))},w=function(U){s!=null&&s(U),o!=null&&o(!0),u!=null&&h(E,r?null:S),m(E,r?null:y)},N=function(U){var I=n.current;if(I!=null&&fh(U)!=="touch"){t&&O_(I,I_),w(U);var b=function(O){O.target!==I&&R(U)},P=function(O){O.target!==I&&w(U)};g(I,r?null:b),x(I,r?null:P)}};v(E,r?null:N)}},[v,h,m,g,x,t,r,s,o,u,d,n])}var U_="DELAY",ji="ERROR",F_="LONG_PRESS_DETECTED",Wn="NOT_RESPONDER",fo="RESPONDER_ACTIVE_LONG_PRESS_START",sd="RESPONDER_ACTIVE_PRESS_START",Mp="RESPONDER_INACTIVE_PRESS_START",IR="RESPONDER_GRANT",Lc="RESPONDER_RELEASE",fx="RESPONDER_TERMINATED",k_=Object.freeze({NOT_RESPONDER:{DELAY:ji,RESPONDER_GRANT:Mp,RESPONDER_RELEASE:ji,RESPONDER_TERMINATED:ji,LONG_PRESS_DETECTED:ji},RESPONDER_INACTIVE_PRESS_START:{DELAY:sd,RESPONDER_GRANT:ji,RESPONDER_RELEASE:Wn,RESPONDER_TERMINATED:Wn,LONG_PRESS_DETECTED:ji},RESPONDER_ACTIVE_PRESS_START:{DELAY:ji,RESPONDER_GRANT:ji,RESPONDER_RELEASE:Wn,RESPONDER_TERMINATED:Wn,LONG_PRESS_DETECTED:fo},RESPONDER_ACTIVE_LONG_PRESS_START:{DELAY:ji,RESPONDER_GRANT:ji,RESPONDER_RELEASE:Wn,RESPONDER_TERMINATED:Wn,LONG_PRESS_DETECTED:fo},ERROR:{DELAY:Wn,RESPONDER_GRANT:Mp,RESPONDER_RELEASE:Wn,RESPONDER_TERMINATED:Wn,LONG_PRESS_DETECTED:Wn}}),hx=n=>n.getAttribute("role"),Ep=n=>n.tagName.toLowerCase(),B_=n=>n===sd||n===fo,Dc=n=>hx(n)==="button",z_=n=>n===Mp||n===sd||n===fo,NR=n=>n===fx||n===Lc,H_=n=>{var e=n.key,t=n.target,r=e===" "||e==="Spacebar",s=Ep(t)==="button"||Dc(t);return e==="Enter"||r&&s},OR=450,UR=50;class FR{constructor(e){this._eventHandlers=null,this._isPointerTouch=!1,this._longPressDelayTimeout=null,this._longPressDispatched=!1,this._pressDelayTimeout=null,this._pressOutDelayTimeout=null,this._touchState=Wn,this._responderElement=null,this.configure(e)}configure(e){this._config=e}reset(){this._cancelLongPressDelayTimeout(),this._cancelPressDelayTimeout(),this._cancelPressOutDelayTimeout()}getEventHandlers(){return this._eventHandlers==null&&(this._eventHandlers=this._createEventHandlers()),this._eventHandlers}_createEventHandlers(){var e=(s,o)=>{s.persist(),this._cancelPressOutDelayTimeout(),this._longPressDispatched=!1,this._selectionTerminated=!1,this._touchState=Wn,this._isPointerTouch=s.nativeEvent.type==="touchstart",this._receiveSignal(IR,s);var u=hh(this._config.delayPressStart,0,UR);o!==!1&&u>0?this._pressDelayTimeout=setTimeout(()=>{this._receiveSignal(U_,s)},u):this._receiveSignal(U_,s);var d=hh(this._config.delayLongPress,10,OR);this._longPressDelayTimeout=setTimeout(()=>{this._handleLongPress(s)},d+u)},t=s=>{this._receiveSignal(Lc,s)},r=s=>{var o=this._config.onPress,u=s.target;if(this._touchState!==Wn&&H_(s)){t(s),document.removeEventListener("keyup",r);var d=u.getAttribute("role"),f=Ep(u),h=d==="link"||f==="a"||f==="button"||f==="input"||f==="select"||f==="textarea",v=this._responderElement===u;o!=null&&!h&&v&&o(s),this._responderElement=null}};return{onStartShouldSetResponder:s=>{var o=this._config.disabled;return o&&Dc(s.currentTarget)&&s.stopPropagation(),o==null?!0:!o},onKeyDown:s=>{var o=this._config.disabled,u=s.key,d=s.target;if(!o&&H_(s)){this._touchState===Wn&&(e(s,!1),this._responderElement=d,document.addEventListener("keyup",r));var f=u===" "||u==="Spacebar",h=hx(d),v=h==="button"||h==="menuitem";f&&v&&Ep(d)!=="button"&&s.preventDefault(),s.stopPropagation()}},onResponderGrant:s=>e(s),onResponderMove:s=>{this._config.onPressMove!=null&&this._config.onPressMove(s);var o=G_(s);if(this._touchActivatePosition!=null){var u=this._touchActivatePosition.pageX-o.pageX,d=this._touchActivatePosition.pageY-o.pageY;Math.hypot(u,d)>10&&this._cancelLongPressDelayTimeout()}},onResponderRelease:s=>t(s),onResponderTerminate:s=>{s.nativeEvent.type==="selectionchange"&&(this._selectionTerminated=!0),this._receiveSignal(fx,s)},onResponderTerminationRequest:s=>{var o=this._config,u=o.cancelable,d=o.disabled,f=o.onLongPress;return!d&&f!=null&&this._isPointerTouch&&s.nativeEvent.type==="contextmenu"?!1:u??!0},onClick:s=>{var o=this._config,u=o.disabled,d=o.onPress;u?Dc(s.currentTarget)&&s.stopPropagation():(s.stopPropagation(),this._longPressDispatched||this._selectionTerminated?s.preventDefault():d!=null&&s.altKey===!1&&d(s))},onContextMenu:s=>{var o=this._config,u=o.disabled,d=o.onLongPress;u?Dc(s.currentTarget)&&s.stopPropagation():d!=null&&this._isPointerTouch&&!s.defaultPrevented&&(s.preventDefault(),s.stopPropagation())}}}_receiveSignal(e,t){var r=this._touchState,s=null;k_[r]!=null&&(s=k_[r][e]),!(this._touchState===Wn&&e===Lc)&&(s==null||s===ji?console.error("PressResponder: Invalid signal "+e+" for state "+r+" on responder"):r!==s&&(this._performTransitionSideEffects(r,s,e,t),this._touchState=s))}_performTransitionSideEffects(e,t,r,s){if(NR(r)&&(setTimeout(()=>{this._isPointerTouch=!1},0),this._touchActivatePosition=null,this._cancelLongPressDelayTimeout()),z_(e)&&r===F_){var o=this._config.onLongPress;o!=null&&s.nativeEvent.key==null&&(o(s),this._longPressDispatched=!0)}var u=B_(e),d=B_(t);if(!u&&d?this._activate(s):u&&!d&&this._deactivate(s),z_(e)&&r===Lc){var f=this._config,h=f.onLongPress,v=f.onPress;if(v!=null){var m=h!=null&&e===fo;m||!d&&!u&&(this._activate(s),this._deactivate(s))}}this._cancelPressDelayTimeout()}_activate(e){var t=this._config,r=t.onPressChange,s=t.onPressStart,o=G_(e);this._touchActivatePosition={pageX:o.pageX,pageY:o.pageY},s!=null&&s(e),r!=null&&r(!0)}_deactivate(e){var t=this._config,r=t.onPressChange,s=t.onPressEnd;function o(){s!=null&&s(e),r!=null&&r(!1)}var u=hh(this._config.delayPressEnd);u>0?this._pressOutDelayTimeout=setTimeout(()=>{o()},u):o()}_handleLongPress(e){(this._touchState===sd||this._touchState===fo)&&this._receiveSignal(F_,e)}_cancelLongPressDelayTimeout(){this._longPressDelayTimeout!=null&&(clearTimeout(this._longPressDelayTimeout),this._longPressDelayTimeout=null)}_cancelPressDelayTimeout(){this._pressDelayTimeout!=null&&(clearTimeout(this._pressDelayTimeout),this._pressDelayTimeout=null)}_cancelPressOutDelayTimeout(){this._pressOutDelayTimeout!=null&&(clearTimeout(this._pressOutDelayTimeout),this._pressOutDelayTimeout=null)}}function hh(n,e,t){return e===void 0&&(e=0),t===void 0&&(t=0),Math.max(e,n??t)}function G_(n){var e=n.nativeEvent,t=e.changedTouches,r=e.touches;return r!=null&&r.length>0?r[0]:t!=null&&t.length>0?t[0]:n.nativeEvent}function kR(n,e){var t=st.useRef(null);t.current==null&&(t.current=new FR(e));var r=t.current;return st.useEffect(()=>{r.configure(e)},[e,r]),st.useEffect(()=>()=>{r.reset()},[r]),st.useDebugValue(e),r.getEventHandlers()}var BR=["children","delayLongPress","delayPressIn","delayPressOut","disabled","onBlur","onContextMenu","onFocus","onHoverIn","onHoverOut","onKeyDown","onLongPress","onPress","onPressMove","onPressIn","onPressOut","style","tabIndex","testOnly_hovered","testOnly_pressed"];function zR(n,e){var t=n.children,r=n.delayLongPress,s=n.delayPressIn,o=n.delayPressOut,u=n.disabled,d=n.onBlur,f=n.onContextMenu,h=n.onFocus,v=n.onHoverIn,m=n.onHoverOut,g=n.onKeyDown,x=n.onLongPress,E=n.onPress,R=n.onPressMove,y=n.onPressIn,S=n.onPressOut,w=n.style,N=n.tabIndex,D=n.testOnly_hovered,U=n.testOnly_pressed,I=gs(n,BR),b=ph(D===!0),P=b[0],G=b[1],O=ph(!1),B=O[0],V=O[1],X=ph(U===!0),k=X[0],ae=X[1],ie=st.useRef(null),te=bm(e,ie),j=st.useMemo(()=>({delayLongPress:r,delayPressStart:s,delayPressEnd:o,disabled:u,onLongPress:x,onPress:E,onPressChange:ae,onPressStart:y,onPressMove:R,onPressEnd:S}),[r,s,o,u,x,E,y,R,S,ae]),Y=kR(ie,j),J=Y.onContextMenu,F=Y.onKeyDown;DR(ie,{contain:!0,disabled:u,onHoverChange:G,onHoverStart:v,onHoverEnd:m});var ee={hovered:P,focused:B,pressed:k},Ae=st.useCallback(_e=>{_e.nativeEvent.target===ie.current&&(V(!1),d!=null&&d(_e))},[ie,V,d]),ne=st.useCallback(_e=>{_e.nativeEvent.target===ie.current&&(V(!0),h!=null&&h(_e))},[ie,V,h]),xe=st.useCallback(_e=>{J!=null&&J(_e),f!=null&&f(_e)},[f,J]),Ee=st.useCallback(_e=>{F!=null&&F(_e),g!=null&&g(_e)},[g,F]),Ce;return N!==void 0?Ce=N:Ce=u?-1:0,st.createElement(Al,zc({},I,Y,{"aria-disabled":u,onBlur:Ae,onContextMenu:xe,onFocus:ne,onKeyDown:Ee,ref:te,style:[u?V_.disabled:V_.active,typeof w=="function"?w(ee):w],tabIndex:Ce}),typeof t=="function"?t(ee):t)}function ph(n){var e=st.useState(!1),t=e[0],r=e[1];return[t||n,r]}var V_=br.create({active:{cursor:"pointer",touchAction:"manipulation"},disabled:{pointerEvents:"box-none"}}),px=st.memo(st.forwardRef(zR));px.displayName="Pressable";var HR=["hrefAttrs","numberOfLines","onClick","onLayout","onPress","onMoveShouldSetResponder","onMoveShouldSetResponderCapture","onResponderEnd","onResponderGrant","onResponderMove","onResponderReject","onResponderRelease","onResponderStart","onResponderTerminate","onResponderTerminationRequest","onScrollShouldSetResponder","onScrollShouldSetResponderCapture","onSelectionChangeShouldSetResponder","onSelectionChangeShouldSetResponderCapture","onStartShouldSetResponder","onStartShouldSetResponderCapture","selectable"],GR=Object.assign({},IS,NS,OS,US,FS,kS,BS,zS,{href:!0,lang:!0,pointerEvents:!0}),VR=n=>HS(n,GR),mx=st.forwardRef((n,e)=>{var t=n.hrefAttrs,r=n.numberOfLines,s=n.onClick,o=n.onLayout,u=n.onPress,d=n.onMoveShouldSetResponder,f=n.onMoveShouldSetResponderCapture,h=n.onResponderEnd,v=n.onResponderGrant,m=n.onResponderMove,g=n.onResponderReject,x=n.onResponderRelease,E=n.onResponderStart,R=n.onResponderTerminate,y=n.onResponderTerminationRequest,S=n.onScrollShouldSetResponder,w=n.onScrollShouldSetResponderCapture,N=n.onSelectionChangeShouldSetResponder,D=n.onSelectionChangeShouldSetResponderCapture,U=n.onStartShouldSetResponder,I=n.onStartShouldSetResponderCapture,b=n.selectable,P=gs(n,HR),G=st.useContext(Vc),O=st.useRef(null),B=PS(),V=B.direction;GS(O,o),JS(O,{onMoveShouldSetResponder:d,onMoveShouldSetResponderCapture:f,onResponderEnd:h,onResponderGrant:v,onResponderMove:m,onResponderReject:g,onResponderRelease:x,onResponderStart:E,onResponderTerminate:R,onResponderTerminationRequest:y,onScrollShouldSetResponder:S,onScrollShouldSetResponderCapture:w,onSelectionChangeShouldSetResponder:N,onSelectionChangeShouldSetResponderCapture:D,onStartShouldSetResponder:U,onStartShouldSetResponderCapture:I});var X=st.useCallback(xe=>{s!=null?s(xe):u!=null&&(xe.stopPropagation(),u(xe))},[s,u]),k=G?"span":"div",ae=n.lang!=null?Mm(n.lang):null,ie=n.dir||ae,te=ie||V,j=VR(P);if(j.dir=ie,G||(j.dir=ie??"auto"),(s||u)&&(j.onClick=X),j.style=[r!=null&&r>1&&{WebkitLineClamp:r},G===!0?rs.textHasAncestor$raw:rs.text$raw,r===1&&rs.textOneLine,r!=null&&r>1&&rs.textMultiLine,n.style,b===!0&&rs.selectable,b===!1&&rs.notSelectable,u&&rs.pressable],n.href!=null&&(k="a",t!=null)){var Y=t.download,J=t.rel,F=t.target;Y!=null&&(j.download=Y),J!=null&&(j.rel=J),typeof F=="string"&&(j.target=F.charAt(0)!=="_"?"_"+F:F)}var ee=VS(j),Ae=bm(O,ee,e);j.ref=Ae;var ne=Em(k,j,{writingDirection:te});return G?ne:st.createElement(Vc.Provider,{value:!0},ne)});mx.displayName="Text";var W_={backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",color:"black",display:"inline",font:"14px System",listStyle:"none",margin:0,padding:0,position:"relative",textAlign:"start",textDecoration:"none",whiteSpace:"pre-wrap",wordWrap:"break-word"},rs=br.create({text$raw:W_,textHasAncestor$raw:Ni(Ni({},W_),{},{color:"inherit",font:"inherit",textAlign:"inherit",whiteSpace:"inherit"}),textOneLine:{maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",wordWrap:"normal"},textMultiLine:{display:"-webkit-box",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",WebkitBoxOrient:"vertical"},notSelectable:{userSelect:"none"},selectable:{userSelect:"text"},pressable:{cursor:"pointer"}});const bp=new Map,WR=new Set(["span","i","b","strong","small","em","label"]);function $R(n=""){const e=document.createElement("span").style;e.cssText=n;const t={};for(let r=0;r<e.length;r++){const s=e[r];if(s.startsWith("--"))continue;const o=s.replace(/-([a-z])/g,(d,f)=>f.toUpperCase()),u=e.getPropertyValue(s).trim();t[o]=/^-?\d+(?:\.\d+)?px$/.test(u)?Number.parseFloat(u):u}return t}function gx(n,e){const t={key:e};for(const r of n.attributes)if(r.name==="class")t.className=r.value;else if(r.name==="style")t.style=$R(r.value);else{if(r.name==="draggable"||r.name==="type"||r.name==="tabindex")continue;t[r.name]=r.value}return t}function XR(n){var r;const e=((r=n.className)==null?void 0:r.split(/\s+/).filter(Boolean))||[],t=Object.entries(n).filter(([s])=>s.startsWith("data-"));delete n.className;for(const[s]of t)delete n[s];return(e.length||t.length)&&(n.ref=s=>{if(s){e.length&&s.classList.add(...e);for(const[o,u]of t)s.setAttribute(o,u)}}),n}function vx(n,e="child"){if(n.nodeType===Node.TEXT_NODE)return n.textContent?n.textContent:null;if(n.nodeType!==Node.ELEMENT_NODE)return null;const t=n.tagName.toLowerCase(),r=XR(gx(n,e));if(t==="img")return r.source={uri:n.getAttribute("src")||""},n.hasAttribute("alt")&&(r.accessibilityLabel=n.getAttribute("alt")),delete r.src,delete r.alt,co.createElement(ad,r);const s=n.querySelector("div, img, svg, button"),o=WR.has(t)&&!s?mx:Al,u=Array.from(n.childNodes).map((d,f)=>vx(d,`${e}-${f}`));return co.createElement(o,r,...u)}function qR(n){var h;const e=gx(n),t=((h=e.className)==null?void 0:h.split(/\s+/).filter(Boolean))||[],r=Object.entries(e).filter(([v])=>v.startsWith("data-")),s=n.getAttribute("style")||"",o=document.createElement("span");o.className="rn-control-root",o.style.cssText=s,n.replaceWith(o);const u=hb.createRoot(o);bp.set(o,u);const d=Array.from(n.childNodes).map((v,m)=>vx(v,`button-${m}`)),f=n.hasAttribute("disabled");delete e.style,delete e.disabled,delete e.className;for(const[v]of r)delete e[v];e.ref=v=>{if(v){t.length&&v.classList.add(...t);for(const[m,g]of r)v.setAttribute(m,g)}},e.role=e.role||"button",e.accessibilityRole=e.role,e.disabled=f,e.onPress=()=>{var v;return(v=o.firstElementChild)==null?void 0:v.dispatchEvent(new CustomEvent("rnpress",{bubbles:!0}))},pb.flushSync(()=>u.render(co.createElement(px,e,...d)))}function YR(n){for(const[e,t]of bp)(n===e||n.contains(e))&&(t.unmount(),bp.delete(e))}function _x(n){n.querySelectorAll("button").forEach(qR)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tm="187",KR=0,$_=1,ZR=2,Ic=1,yx=2,ml=3,ds=0,ii=1,_r=2,oo=0,Ml=1,X_=2,q_=3,Y_=4,jR=5,ro=100,JR=101,QR=102,eA=103,tA=104,nA=200,iA=201,rA=202,aA=203,Sx=204,xx=205,sA=206,oA=207,lA=208,uA=209,cA=210,dA=211,fA=212,hA=213,pA=214,wp=0,Tp=1,Rp=2,Cl=3,Ap=4,Cp=5,Pp=6,Lp=7,Mx=0,mA=1,gA=2,Xr=0,Ex=1,bx=2,wx=3,Rm=4,Tx=5,Rx=6,Ax=7,Cx=300,ho=301,Pl=302,mh=303,gh=304,Xc=1e3,Wr=1001,Dp=1002,Cn=1003,vA=1004,sc=1005,ti=1006,vh=1007,La=1008,gi=1009,Px=1010,Lx=1011,Ll=1012,Am=1013,Tr=1014,xr=1015,Rr=1016,Cm=1017,Pm=1018,po=1020,Dx=35902,Ix=35899,Nx=1021,Ox=1022,Mr=1023,Oa=1026,Da=1027,Ux=1028,Lm=1029,fs=1030,Dm=1031,Im=1033,Nc=33776,Oc=33777,Uc=33778,Fc=33779,Ip=35840,Np=35841,Op=35842,Up=35843,Fp=36196,kp=37492,Bp=37496,zp=37488,Hp=37489,qc=37490,Gp=37491,Vp=37808,Wp=37809,$p=37810,Xp=37811,qp=37812,Yp=37813,Kp=37814,Zp=37815,jp=37816,Jp=37817,Qp=37818,em=37819,tm=37820,nm=37821,im=36492,rm=36494,am=36495,sm=36283,om=36284,Yc=36285,lm=36286,_A=3200,um=0,yA=1,Pa="",ei="srgb",Kc="srgb-linear",Zc="linear",Ft="srgb",_h=7680,SA=519,xA=512,MA=513,EA=514,Fx=515,bA=516,wA=517,kx=518,Bx=519,TA=35044,K_="300 es",er=2e3,Dl=2001;function RA(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function jc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function AA(){const n=jc("canvas");return n.style.display="block",n}const Z_={};function j_(...n){const e="THREE."+n.shift();console.log(e,...n)}function zx(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function dt(...n){n=zx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ot(...n){n=zx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function kc(...n){const e=n.join(" ");e in Z_||(Z_[e]=!0,dt(...n))}function CA(n,e,t){return new Promise(function(r,s){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:r()}}setTimeout(o,t)})}const PA={[wp]:wp,[Rp]:Pp,[Ap]:Ap,[Cl]:Cp,[Tp]:Tp,[Pp]:Rp,[Lp]:Lp,[Cp]:Cl};class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const s=r[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const s=r.slice(0);for(let o=0,u=s.length;o<u;o++)s[o].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yh=Math.PI/180,cm=180/Math.PI;function Ul(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Tt(n,e,t){return Math.max(e,Math.min(t,n))}function LA(n,e){return(n%e+e)%e}function Sh(n,e,t){return(1-t)*n+t*e}function DA(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Nm(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function IA(n,e){if(e.constructor===Float32Array)return n;const t=Nm(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function NA(n,e){if(e.constructor===Float32Array)return n;const t=Nm(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const cg=class cg{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,s=e.elements;return this.x=s[0]*t+s[3]*r+s[6],this.y=s[1]*t+s[4]*r+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),s=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*r-u*s+e.x,this.y=o*s+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cg.prototype.isVector2=!0;let Et=cg;class qr{constructor(e=0,t=0,r=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=s}static slerpFlat(e,t,r,s,o,u,d){let f=r[s+0],h=r[s+1],v=r[s+2],m=r[s+3],g=o[u+0],x=o[u+1],E=o[u+2],R=o[u+3];if(m!==R||f!==g||h!==x||v!==E){let y=f*g+h*x+v*E+m*R;y<0&&(g=-g,x=-x,E=-E,R=-R,y=-y);let S=1-d;if(y<.9995){const w=Math.acos(y),N=Math.sin(w);S=Math.sin(S*w)/N,d=Math.sin(d*w)/N,f=f*S+g*d,h=h*S+x*d,v=v*S+E*d,m=m*S+R*d}else{f=f*S+g*d,h=h*S+x*d,v=v*S+E*d,m=m*S+R*d;const w=1/Math.sqrt(f*f+h*h+v*v+m*m);f*=w,h*=w,v*=w,m*=w}}e[t]=f,e[t+1]=h,e[t+2]=v,e[t+3]=m}static multiplyQuaternionsFlat(e,t,r,s,o,u){const d=r[s],f=r[s+1],h=r[s+2],v=r[s+3],m=o[u],g=o[u+1],x=o[u+2],E=o[u+3];return e[t]=d*E+v*m+f*x-h*g,e[t+1]=f*E+v*g+h*m-d*x,e[t+2]=h*E+v*x+d*g-f*m,e[t+3]=v*E-d*m-f*g-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,s){return this._x=e,this._y=t,this._z=r,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,s=e._y,o=e._z,u=e._order,d=Math.cos,f=Math.sin,h=d(r/2),v=d(s/2),m=d(o/2),g=f(r/2),x=f(s/2),E=f(o/2);switch(u){case"XYZ":this._x=g*v*m+h*x*E,this._y=h*x*m-g*v*E,this._z=h*v*E+g*x*m,this._w=h*v*m-g*x*E;break;case"YXZ":this._x=g*v*m+h*x*E,this._y=h*x*m-g*v*E,this._z=h*v*E-g*x*m,this._w=h*v*m+g*x*E;break;case"ZXY":this._x=g*v*m-h*x*E,this._y=h*x*m+g*v*E,this._z=h*v*E+g*x*m,this._w=h*v*m-g*x*E;break;case"ZYX":this._x=g*v*m-h*x*E,this._y=h*x*m+g*v*E,this._z=h*v*E-g*x*m,this._w=h*v*m+g*x*E;break;case"YZX":this._x=g*v*m+h*x*E,this._y=h*x*m+g*v*E,this._z=h*v*E-g*x*m,this._w=h*v*m-g*x*E;break;case"XZY":this._x=g*v*m-h*x*E,this._y=h*x*m-g*v*E,this._z=h*v*E+g*x*m,this._w=h*v*m+g*x*E;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,s=Math.sin(r);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],s=t[4],o=t[8],u=t[1],d=t[5],f=t[9],h=t[2],v=t[6],m=t[10],g=r+d+m;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(v-f)*x,this._y=(o-h)*x,this._z=(u-s)*x}else if(r>d&&r>m){const x=2*Math.sqrt(1+r-d-m);this._w=(v-f)/x,this._x=.25*x,this._y=(s+u)/x,this._z=(o+h)/x}else if(d>m){const x=2*Math.sqrt(1+d-r-m);this._w=(o-h)/x,this._x=(s+u)/x,this._y=.25*x,this._z=(f+v)/x}else{const x=2*Math.sqrt(1+m-r-d);this._w=(u-s)/x,this._x=(o+h)/x,this._y=(f+v)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const s=Math.min(1,t/r);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,s=e._y,o=e._z,u=e._w,d=t._x,f=t._y,h=t._z,v=t._w;return this._x=r*v+u*d+s*h-o*f,this._y=s*v+u*f+o*d-r*h,this._z=o*v+u*h+r*f-s*d,this._w=u*v-r*d-s*f-o*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,s=e._y,o=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,s=-s,o=-o,u=-u,d=-d);let f=1-t;if(d<.9995){const h=Math.acos(d),v=Math.sin(h);f=Math.sin(f*h)/v,t=Math.sin(t*h)/v,this._x=this._x*f+r*t,this._y=this._y*f+s*t,this._z=this._z*f+o*t,this._w=this._w*f+u*t,this._onChangeCallback()}else this._x=this._x*f+r*t,this._y=this._y*f+s*t,this._z=this._z*f+o*t,this._w=this._w*f+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),s=Math.sqrt(1-r),o=Math.sqrt(r);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const dg=class dg{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(J_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(J_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6]*s,this.y=o[1]*t+o[4]*r+o[7]*s,this.z=o[2]*t+o[5]*r+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,s=this.z,o=e.elements,u=1/(o[3]*t+o[7]*r+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*r+o[8]*s+o[12])*u,this.y=(o[1]*t+o[5]*r+o[9]*s+o[13])*u,this.z=(o[2]*t+o[6]*r+o[10]*s+o[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,s=this.z,o=e.x,u=e.y,d=e.z,f=e.w,h=2*(u*s-d*r),v=2*(d*t-o*s),m=2*(o*r-u*t);return this.x=t+f*h+u*m-d*v,this.y=r+f*v+d*h-o*m,this.z=s+f*m+o*v-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*s,this.y=o[1]*t+o[5]*r+o[9]*s,this.z=o[2]*t+o[6]*r+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,s=e.y,o=e.z,u=t.x,d=t.y,f=t.z;return this.x=s*f-o*d,this.y=o*u-r*f,this.z=r*d-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return xh.copy(this).projectOnVector(e),this.sub(xh)}reflect(e){return this.sub(xh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,s=this.z-e.z;return t*t+r*r+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const s=Math.sin(t)*e;return this.x=s*Math.sin(r),this.y=Math.cos(t)*e,this.z=s*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};dg.prototype.isVector3=!0;let ce=dg;const xh=new ce,J_=new qr,fg=class fg{constructor(e,t,r,s,o,u,d,f,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,s,o,u,d,f,h)}set(e,t,r,s,o,u,d,f,h){const v=this.elements;return v[0]=e,v[1]=s,v[2]=d,v[3]=t,v[4]=o,v[5]=f,v[6]=r,v[7]=u,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,s=t.elements,o=this.elements,u=r[0],d=r[3],f=r[6],h=r[1],v=r[4],m=r[7],g=r[2],x=r[5],E=r[8],R=s[0],y=s[3],S=s[6],w=s[1],N=s[4],D=s[7],U=s[2],I=s[5],b=s[8];return o[0]=u*R+d*w+f*U,o[3]=u*y+d*N+f*I,o[6]=u*S+d*D+f*b,o[1]=h*R+v*w+m*U,o[4]=h*y+v*N+m*I,o[7]=h*S+v*D+m*b,o[2]=g*R+x*w+E*U,o[5]=g*y+x*N+E*I,o[8]=g*S+x*D+E*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],s=e[2],o=e[3],u=e[4],d=e[5],f=e[6],h=e[7],v=e[8];return t*u*v-t*d*h-r*o*v+r*d*f+s*o*h-s*u*f}invert(){const e=this.elements,t=e[0],r=e[1],s=e[2],o=e[3],u=e[4],d=e[5],f=e[6],h=e[7],v=e[8],m=v*u-d*h,g=d*f-v*o,x=h*o-u*f,E=t*m+r*g+s*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=m*R,e[1]=(s*h-v*r)*R,e[2]=(d*r-s*u)*R,e[3]=g*R,e[4]=(v*t-s*f)*R,e[5]=(s*o-d*t)*R,e[6]=x*R,e[7]=(r*f-h*t)*R,e[8]=(u*t-r*o)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,s,o,u,d){const f=Math.cos(o),h=Math.sin(o);return this.set(r*f,r*h,-r*(f*u+h*d)+u+e,-s*h,s*f,-s*(-h*u+f*d)+d+t,0,0,1),this}scale(e,t){return kc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mh.makeScale(e,t)),this}rotate(e){return kc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mh.makeRotation(-e)),this}translate(e,t){return kc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let s=0;s<9;s++)if(t[s]!==r[s])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};fg.prototype.isMatrix3=!0;let ht=fg;const Mh=new ht,Q_=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ey=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OA(){const n={enabled:!0,workingColorSpace:Kc,spaces:{},convert:function(s,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===Ft&&(s.r=Yr(s.r),s.g=Yr(s.g),s.b=Yr(s.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ft&&(s.r=lo(s.r),s.g=lo(s.g),s.b=lo(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pa?Zc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,u){return s.copy(this.spaces[u].fromXYZ).multiply(this.spaces[o].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Kc]:{primaries:e,whitePoint:r,transfer:Zc,toXYZ:Q_,fromXYZ:ey,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:r,transfer:Ft,toXYZ:Q_,fromXYZ:ey,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),n}const wt=OA();function Yr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function lo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ws;class UA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ws===void 0&&(Ws=jc("canvas")),Ws.width=e.width,Ws.height=e.height;const s=Ws.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),r=Ws}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const s=r.getImageData(0,0,e.width,e.height),o=s.data;for(let u=0;u<o.length;u++)o[u]=Yr(o[u]/255)*255;return r.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Yr(t[r]/255)*255):t[r]=Yr(t[r]);return{data:t,width:e.width,height:e.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FA=0;class Om{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:FA++}),this.uuid=Ul(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let u=0,d=s.length;u<d;u++)s[u].isDataTexture?o.push(Eh(s[u].image)):o.push(Eh(s[u]))}else o=Eh(s);r.url=o}return t||(e.images[this.uuid]=r),r}}function Eh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?UA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let kA=0;const bh=new ce;class Bn extends vs{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,r=Wr,s=Wr,o=ti,u=La,d=Mr,f=gi,h=Bn.DEFAULT_ANISOTROPY,v=Pa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kA++}),this.uuid=Ul(),this.name="",this.source=new Om(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=u,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=f,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(bh).x}get height(){return this.source.getSize(bh).y}get depth(){return this.source.getSize(bh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){dt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){dt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xc:e.x=e.x-Math.floor(e.x);break;case Wr:e.x=e.x<0?0:1;break;case Dp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xc:e.y=e.y-Math.floor(e.y);break;case Wr:e.y=e.y<0?0:1;break;case Dp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Cx;Bn.DEFAULT_ANISOTROPY=1;const hg=class hg{constructor(e=0,t=0,r=0,s=1){this.x=e,this.y=t,this.z=r,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,s){return this.x=e,this.y=t,this.z=r,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,s=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*s+u[12]*o,this.y=u[1]*t+u[5]*r+u[9]*s+u[13]*o,this.z=u[2]*t+u[6]*r+u[10]*s+u[14]*o,this.w=u[3]*t+u[7]*r+u[11]*s+u[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,s,o;const f=e.elements,h=f[0],v=f[4],m=f[8],g=f[1],x=f[5],E=f[9],R=f[2],y=f[6],S=f[10];if(Math.abs(v-g)<.01&&Math.abs(m-R)<.01&&Math.abs(E-y)<.01){if(Math.abs(v+g)<.1&&Math.abs(m+R)<.1&&Math.abs(E+y)<.1&&Math.abs(h+x+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(h+1)/2,D=(x+1)/2,U=(S+1)/2,I=(v+g)/4,b=(m+R)/4,P=(E+y)/4;return N>D&&N>U?N<.01?(r=0,s=.707106781,o=.707106781):(r=Math.sqrt(N),s=I/r,o=b/r):D>U?D<.01?(r=.707106781,s=0,o=.707106781):(s=Math.sqrt(D),r=I/s,o=P/s):U<.01?(r=.707106781,s=.707106781,o=0):(o=Math.sqrt(U),r=b/o,s=P/o),this.set(r,s,o,t),this}let w=Math.sqrt((y-E)*(y-E)+(m-R)*(m-R)+(g-v)*(g-v));return Math.abs(w)<.001&&(w=1),this.x=(y-E)/w,this.y=(m-R)/w,this.z=(g-v)/w,this.w=Math.acos((h+x+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this.w=Tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this.w=Tt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hg.prototype.isVector4=!0;let rn=hg;class BA extends vs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];const s=r.count;for(let o=0;o<s;o++)this.textures[o]=new Bn({width:e,height:t,depth:r.depth}),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ti,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=r,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Om(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends BA{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Hx extends Bn{constructor(e=null,t=1,r=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zA extends Bn{constructor(e=null,t=1,r=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const id=class id{constructor(e,t,r,s,o,u,d,f,h,v,m,g,x,E,R,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,s,o,u,d,f,h,v,m,g,x,E,R,y)}set(e,t,r,s,o,u,d,f,h,v,m,g,x,E,R,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=s,S[1]=o,S[5]=u,S[9]=d,S[13]=f,S[2]=h,S[6]=v,S[10]=m,S[14]=g,S[3]=x,S[7]=E,S[11]=R,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new id().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,s=1/$s.setFromMatrixColumn(e,0).length(),o=1/$s.setFromMatrixColumn(e,1).length(),u=1/$s.setFromMatrixColumn(e,2).length();return t[0]=r[0]*s,t[1]=r[1]*s,t[2]=r[2]*s,t[3]=0,t[4]=r[4]*o,t[5]=r[5]*o,t[6]=r[6]*o,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,s=e.y,o=e.z,u=Math.cos(r),d=Math.sin(r),f=Math.cos(s),h=Math.sin(s),v=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const g=u*v,x=u*m,E=d*v,R=d*m;t[0]=f*v,t[4]=-f*m,t[8]=h,t[1]=x+E*h,t[5]=g-R*h,t[9]=-d*f,t[2]=R-g*h,t[6]=E+x*h,t[10]=u*f}else if(e.order==="YXZ"){const g=f*v,x=f*m,E=h*v,R=h*m;t[0]=g+R*d,t[4]=E*d-x,t[8]=u*h,t[1]=u*m,t[5]=u*v,t[9]=-d,t[2]=x*d-E,t[6]=R+g*d,t[10]=u*f}else if(e.order==="ZXY"){const g=f*v,x=f*m,E=h*v,R=h*m;t[0]=g-R*d,t[4]=-u*m,t[8]=E+x*d,t[1]=x+E*d,t[5]=u*v,t[9]=R-g*d,t[2]=-u*h,t[6]=d,t[10]=u*f}else if(e.order==="ZYX"){const g=u*v,x=u*m,E=d*v,R=d*m;t[0]=f*v,t[4]=E*h-x,t[8]=g*h+R,t[1]=f*m,t[5]=R*h+g,t[9]=x*h-E,t[2]=-h,t[6]=d*f,t[10]=u*f}else if(e.order==="YZX"){const g=u*f,x=u*h,E=d*f,R=d*h;t[0]=f*v,t[4]=R-g*m,t[8]=E*m+x,t[1]=m,t[5]=u*v,t[9]=-d*v,t[2]=-h*v,t[6]=x*m+E,t[10]=g-R*m}else if(e.order==="XZY"){const g=u*f,x=u*h,E=d*f,R=d*h;t[0]=f*v,t[4]=-m,t[8]=h*v,t[1]=g*m+R,t[5]=u*v,t[9]=x*m-E,t[2]=E*m-x,t[6]=d*v,t[10]=R*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HA,e,GA)}lookAt(e,t,r){const s=this.elements;return hi.subVectors(e,t),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),xa.crossVectors(r,hi),xa.lengthSq()===0&&(Math.abs(r.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),xa.crossVectors(r,hi)),xa.normalize(),oc.crossVectors(hi,xa),s[0]=xa.x,s[4]=oc.x,s[8]=hi.x,s[1]=xa.y,s[5]=oc.y,s[9]=hi.y,s[2]=xa.z,s[6]=oc.z,s[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,s=t.elements,o=this.elements,u=r[0],d=r[4],f=r[8],h=r[12],v=r[1],m=r[5],g=r[9],x=r[13],E=r[2],R=r[6],y=r[10],S=r[14],w=r[3],N=r[7],D=r[11],U=r[15],I=s[0],b=s[4],P=s[8],G=s[12],O=s[1],B=s[5],V=s[9],X=s[13],k=s[2],ae=s[6],ie=s[10],te=s[14],j=s[3],Y=s[7],J=s[11],F=s[15];return o[0]=u*I+d*O+f*k+h*j,o[4]=u*b+d*B+f*ae+h*Y,o[8]=u*P+d*V+f*ie+h*J,o[12]=u*G+d*X+f*te+h*F,o[1]=v*I+m*O+g*k+x*j,o[5]=v*b+m*B+g*ae+x*Y,o[9]=v*P+m*V+g*ie+x*J,o[13]=v*G+m*X+g*te+x*F,o[2]=E*I+R*O+y*k+S*j,o[6]=E*b+R*B+y*ae+S*Y,o[10]=E*P+R*V+y*ie+S*J,o[14]=E*G+R*X+y*te+S*F,o[3]=w*I+N*O+D*k+U*j,o[7]=w*b+N*B+D*ae+U*Y,o[11]=w*P+N*V+D*ie+U*J,o[15]=w*G+N*X+D*te+U*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],s=e[8],o=e[12],u=e[1],d=e[5],f=e[9],h=e[13],v=e[2],m=e[6],g=e[10],x=e[14],E=e[3],R=e[7],y=e[11],S=e[15],w=f*x-h*g,N=d*x-h*m,D=d*g-f*m,U=u*x-h*v,I=u*g-f*v,b=u*m-d*v;return t*(R*w-y*N+S*D)-r*(E*w-y*U+S*I)+s*(E*N-R*U+S*b)-o*(E*D-R*I+y*b)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],s=e[8],o=e[1],u=e[5],d=e[9],f=e[2],h=e[6],v=e[10];return t*(u*v-d*h)-r*(o*v-d*f)+s*(o*h-u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],s=e[2],o=e[3],u=e[4],d=e[5],f=e[6],h=e[7],v=e[8],m=e[9],g=e[10],x=e[11],E=e[12],R=e[13],y=e[14],S=e[15],w=t*d-r*u,N=t*f-s*u,D=t*h-o*u,U=r*f-s*d,I=r*h-o*d,b=s*h-o*f,P=v*R-m*E,G=v*y-g*E,O=v*S-x*E,B=m*y-g*R,V=m*S-x*R,X=g*S-x*y,k=w*X-N*V+D*B+U*O-I*G+b*P;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ae=1/k;return e[0]=(d*X-f*V+h*B)*ae,e[1]=(s*V-r*X-o*B)*ae,e[2]=(R*b-y*I+S*U)*ae,e[3]=(g*I-m*b-x*U)*ae,e[4]=(f*O-u*X-h*G)*ae,e[5]=(t*X-s*O+o*G)*ae,e[6]=(y*D-E*b-S*N)*ae,e[7]=(v*b-g*D+x*N)*ae,e[8]=(u*V-d*O+h*P)*ae,e[9]=(r*O-t*V-o*P)*ae,e[10]=(E*I-R*D+S*w)*ae,e[11]=(m*D-v*I-x*w)*ae,e[12]=(d*G-u*B-f*P)*ae,e[13]=(t*B-r*G+s*P)*ae,e[14]=(R*N-E*U-y*w)*ae,e[15]=(v*U-m*N+g*w)*ae,this}scale(e){const t=this.elements,r=e.x,s=e.y,o=e.z;return t[0]*=r,t[4]*=s,t[8]*=o,t[1]*=r,t[5]*=s,t[9]*=o,t[2]*=r,t[6]*=s,t[10]*=o,t[3]*=r,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,s))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),s=Math.sin(t),o=1-r,u=e.x,d=e.y,f=e.z,h=o*u,v=o*d;return this.set(h*u+r,h*d-s*f,h*f+s*d,0,h*d+s*f,v*d+r,v*f-s*u,0,h*f-s*d,v*f+s*u,o*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,s,o,u){return this.set(1,r,o,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,r){const s=this.elements,o=t._x,u=t._y,d=t._z,f=t._w,h=o+o,v=u+u,m=d+d,g=o*h,x=o*v,E=o*m,R=u*v,y=u*m,S=d*m,w=f*h,N=f*v,D=f*m,U=r.x,I=r.y,b=r.z;return s[0]=(1-(R+S))*U,s[1]=(x+D)*U,s[2]=(E-N)*U,s[3]=0,s[4]=(x-D)*I,s[5]=(1-(g+S))*I,s[6]=(y+w)*I,s[7]=0,s[8]=(E+N)*b,s[9]=(y-w)*b,s[10]=(1-(g+R))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,r){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const o=this.determinantAffine();if(o===0)return r.set(1,1,1),t.identity(),this;let u=$s.set(s[0],s[1],s[2]).length();const d=$s.set(s[4],s[5],s[6]).length(),f=$s.set(s[8],s[9],s[10]).length();o<0&&(u=-u),Yi.copy(this);const h=1/u,v=1/d,m=1/f;return Yi.elements[0]*=h,Yi.elements[1]*=h,Yi.elements[2]*=h,Yi.elements[4]*=v,Yi.elements[5]*=v,Yi.elements[6]*=v,Yi.elements[8]*=m,Yi.elements[9]*=m,Yi.elements[10]*=m,t.setFromRotationMatrix(Yi),r.x=u,r.y=d,r.z=f,this}makePerspective(e,t,r,s,o,u,d=er,f=!1){const h=this.elements,v=2*o/(t-e),m=2*o/(r-s),g=(t+e)/(t-e),x=(r+s)/(r-s);let E,R;if(f)E=o/(u-o),R=u*o/(u-o);else if(d===er)E=-(u+o)/(u-o),R=-2*u*o/(u-o);else if(d===Dl)E=-u/(u-o),R=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=v,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=m,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=R,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,s,o,u,d=er,f=!1){const h=this.elements,v=2/(t-e),m=2/(r-s),g=-(t+e)/(t-e),x=-(r+s)/(r-s);let E,R;if(f)E=1/(u-o),R=u/(u-o);else if(d===er)E=-2/(u-o),R=-(u+o)/(u-o);else if(d===Dl)E=-1/(u-o),R=-o/(u-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=v,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=m,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=E,h[14]=R,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let s=0;s<16;s++)if(t[s]!==r[s])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};id.prototype.isMatrix4=!0;let en=id;const $s=new ce,Yi=new en,HA=new ce(0,0,0),GA=new ce(1,1,1),xa=new ce,oc=new ce,hi=new ce,ty=new en,ny=new qr;class Kr{constructor(e=0,t=0,r=0,s=Kr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,s=this._order){return this._x=e,this._y=t,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const s=e.elements,o=s[0],u=s[4],d=s[8],f=s[1],h=s[5],v=s[9],m=s[2],g=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,x),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-Tt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(d,o)):(this._x=Math.atan2(-v,x),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return ty.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ty,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ny.setFromEuler(this),this.setFromQuaternion(ny,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kr.DEFAULT_ORDER="XYZ";class Um{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let VA=0;const iy=new ce,Xs=new qr,Fr=new en,lc=new ce,il=new ce,WA=new ce,$A=new qr,ry=new ce(1,0,0),ay=new ce(0,1,0),sy=new ce(0,0,1),oy={type:"added"},XA={type:"removed"},qs={type:"childadded",child:null},wh={type:"childremoved",child:null};class Pn extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VA++}),this.uuid=Ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new ce,t=new Kr,r=new qr,s=new ce(1,1,1);function o(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(o),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new en},normalMatrix:{value:new ht}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Um,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(ry,e)}rotateY(e){return this.rotateOnAxis(ay,e)}rotateZ(e){return this.rotateOnAxis(sy,e)}translateOnAxis(e,t){return iy.copy(e).applyQuaternion(this.quaternion),this.position.add(iy.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ry,e)}translateY(e){return this.translateOnAxis(ay,e)}translateZ(e){return this.translateOnAxis(sy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?lc.copy(e):lc.set(e,t,r);const s=this.parent;this.updateWorldMatrix(!0,!1),il.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fr.lookAt(il,lc,this.up):Fr.lookAt(lc,il,this.up),this.quaternion.setFromRotationMatrix(Fr),s&&(Fr.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(Fr),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oy),qs.child=e,this.dispatchEvent(qs),qs.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(XA),wh.child=e,this.dispatchEvent(wh),wh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oy),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,s=this.children.length;r<s;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const s=this.children;for(let o=0,u=s.length;o<u;o++)s[o].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(il,e,WA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(il,$A,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,s=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*r-o[8]*s,o[13]+=r-o[1]*t-o[5]*r-o[9]*s,o[14]+=s-o[2]*t-o[6]*r-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const o=this.children;for(let u=0,d=o.length;u<d;u++)o[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(d=>({...d})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let h=0,v=f.length;h<v;h++){const m=f[h];o(e.shapes,m)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,h=this.material.length;f<h;f++)d.push(o(e.materials,this.material[f]));s.material=d}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let d=0;d<this.children.length;d++)s.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];s.animations.push(o(e.animations,f))}}if(t){const d=u(e.geometries),f=u(e.materials),h=u(e.textures),v=u(e.images),m=u(e.shapes),g=u(e.skeletons),x=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),f.length>0&&(r.materials=f),h.length>0&&(r.textures=h),v.length>0&&(r.images=v),m.length>0&&(r.shapes=m),g.length>0&&(r.skeletons=g),x.length>0&&(r.animations=x),E.length>0&&(r.nodes=E)}return r.object=s,r;function u(d){const f=[];for(const h in d){const v=d[h];delete v.metadata,f.push(v)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const s=e.children[r];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Pn.DEFAULT_UP=new ce(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class so extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qA={type:"move"};class Th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new so,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new so,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new so,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let s=null,o=null,u=null;const d=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const R of e.hand.values()){const y=t.getJointPose(R,r),S=this._getHandJoint(h,R);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const v=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],g=v.position.distanceTo(m.position),x=.02,E=.005;h.inputState.pinching&&g>x+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=x-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,r),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(s=t.getPose(e.targetRaySpace,r),s===null&&o!==null&&(s=o),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(qA)))}return d!==null&&(d.visible=s!==null),f!==null&&(f.visible=o!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new so;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Gx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ma={h:0,s:0,l:0},uc={h:0,s:0,l:0};function Rh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Mt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,s=wt.workingColorSpace){return this.r=e,this.g=t,this.b=r,wt.colorSpaceToWorking(this,s),this}setHSL(e,t,r,s=wt.workingColorSpace){if(e=LA(e,1),t=Tt(t,0,1),r=Tt(r,0,1),t===0)this.r=this.g=this.b=r;else{const o=r<=.5?r*(1+t):r+t-r*t,u=2*r-o;this.r=Rh(u,o,e+1/3),this.g=Rh(u,o,e),this.b=Rh(u,o,e-1/3)}return wt.colorSpaceToWorking(this,s),this}setStyle(e,t=ei){function r(o){o!==void 0&&parseFloat(o)<1&&dt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=s[1],d=s[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(o[4]),this.setRGB(Math.min(100,parseFloat(o[1]))/100,Math.min(100,parseFloat(o[2]))/100,Math.min(100,parseFloat(o[3]))/100,t);break;case"hsl":case"hsla":if(o=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:dt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ei){const r=Gx[e.toLowerCase()];return r!==void 0?this.setHex(r,t):dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}copyLinearToSRGB(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return wt.workingToColorSpace(Fn.copy(this),e),Math.round(Tt(Fn.r*255,0,255))*65536+Math.round(Tt(Fn.g*255,0,255))*256+Math.round(Tt(Fn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(Fn.copy(this),t);const r=Fn.r,s=Fn.g,o=Fn.b,u=Math.max(r,s,o),d=Math.min(r,s,o);let f,h;const v=(d+u)/2;if(d===u)f=0,h=0;else{const m=u-d;switch(h=v<=.5?m/(u+d):m/(2-u-d),u){case r:f=(s-o)/m+(s<o?6:0);break;case s:f=(o-r)/m+2;break;case o:f=(r-s)/m+4;break}f/=6}return e.h=f,e.s=h,e.l=v,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=ei){wt.workingToColorSpace(Fn.copy(this),e);const t=Fn.r,r=Fn.g,s=Fn.b;return e!==ei?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(s*255)})`}offsetHSL(e,t,r){return this.getHSL(Ma),this.setHSL(Ma.h+e,Ma.s+t,Ma.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ma),e.getHSL(uc);const r=Sh(Ma.h,uc.h,t),s=Sh(Ma.s,uc.s,t),o=Sh(Ma.l,uc.l,t);return this.setHSL(r,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*r+o[6]*s,this.g=o[1]*t+o[4]*r+o[7]*s,this.b=o[2]*t+o[5]*r+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Mt;Mt.NAMES=Gx;class Fm{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new Mt(e),this.near=t,this.far=r}clone(){return new Fm(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class YA extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kr,this.environmentIntensity=1,this.environmentRotation=new Kr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ki=new ce,kr=new ce,Ah=new ce,Br=new ce,Ys=new ce,Ks=new ce,ly=new ce,Ch=new ce,Ph=new ce,Lh=new ce,Dh=new rn,Ih=new rn,Nh=new rn;class Qi{constructor(e=new ce,t=new ce,r=new ce){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,s){s.subVectors(r,t),Ki.subVectors(e,t),s.cross(Ki);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,r,s,o){Ki.subVectors(s,t),kr.subVectors(r,t),Ah.subVectors(e,t);const u=Ki.dot(Ki),d=Ki.dot(kr),f=Ki.dot(Ah),h=kr.dot(kr),v=kr.dot(Ah),m=u*h-d*d;if(m===0)return o.set(0,0,0),null;const g=1/m,x=(h*f-d*v)*g,E=(u*v-d*f)*g;return o.set(1-x-E,E,x)}static containsPoint(e,t,r,s){return this.getBarycoord(e,t,r,s,Br)===null?!1:Br.x>=0&&Br.y>=0&&Br.x+Br.y<=1}static getInterpolation(e,t,r,s,o,u,d,f){return this.getBarycoord(e,t,r,s,Br)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,Br.x),f.addScaledVector(u,Br.y),f.addScaledVector(d,Br.z),f)}static getInterpolatedAttribute(e,t,r,s,o,u){return Dh.setScalar(0),Ih.setScalar(0),Nh.setScalar(0),Dh.fromBufferAttribute(e,t),Ih.fromBufferAttribute(e,r),Nh.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(Dh,o.x),u.addScaledVector(Ih,o.y),u.addScaledVector(Nh,o.z),u}static isFrontFacing(e,t,r,s){return Ki.subVectors(r,t),kr.subVectors(e,t),Ki.cross(kr).dot(s)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,s){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,r,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ki.subVectors(this.c,this.b),kr.subVectors(this.a,this.b),Ki.cross(kr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,s,o){return Qi.getInterpolation(e,this.a,this.b,this.c,t,r,s,o)}containsPoint(e){return Qi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,s=this.b,o=this.c;let u,d;Ys.subVectors(s,r),Ks.subVectors(o,r),Ch.subVectors(e,r);const f=Ys.dot(Ch),h=Ks.dot(Ch);if(f<=0&&h<=0)return t.copy(r);Ph.subVectors(e,s);const v=Ys.dot(Ph),m=Ks.dot(Ph);if(v>=0&&m<=v)return t.copy(s);const g=f*m-v*h;if(g<=0&&f>=0&&v<=0&&f-v>0)return u=f/(f-v),t.copy(r).addScaledVector(Ys,u);Lh.subVectors(e,o);const x=Ys.dot(Lh),E=Ks.dot(Lh);if(E>=0&&x<=E)return t.copy(o);const R=x*h-f*E;if(R<=0&&h>=0&&E<=0)return d=h/(h-E),t.copy(r).addScaledVector(Ks,d);const y=v*E-x*m;if(y<=0&&m-v>=0&&x-E>=0)return ly.subVectors(o,s),d=(m-v)/(m-v+(x-E)),t.copy(s).addScaledVector(ly,d);const S=1/(y+R+g);return u=R*S,d=g*S,t.copy(r).addScaledVector(Ys,u).addScaledVector(Ks,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Fl{constructor(e=new ce(1/0,1/0,1/0),t=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const o=r.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let u=0,d=o.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Zi):Zi.fromBufferAttribute(o,u),Zi.applyMatrix4(e.matrixWorld),this.expandByPoint(Zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),cc.copy(r.boundingBox)),cc.applyMatrix4(e.matrixWorld),this.union(cc)}const s=e.children;for(let o=0,u=s.length;o<u;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rl),dc.subVectors(this.max,rl),Zs.subVectors(e.a,rl),js.subVectors(e.b,rl),Js.subVectors(e.c,rl),Ea.subVectors(js,Zs),ba.subVectors(Js,js),as.subVectors(Zs,Js);let t=[0,-Ea.z,Ea.y,0,-ba.z,ba.y,0,-as.z,as.y,Ea.z,0,-Ea.x,ba.z,0,-ba.x,as.z,0,-as.x,-Ea.y,Ea.x,0,-ba.y,ba.x,0,-as.y,as.x,0];return!Oh(t,Zs,js,Js,dc)||(t=[1,0,0,0,1,0,0,0,1],!Oh(t,Zs,js,Js,dc))?!1:(fc.crossVectors(Ea,ba),t=[fc.x,fc.y,fc.z],Oh(t,Zs,js,Js,dc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zr=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Zi=new ce,cc=new Fl,Zs=new ce,js=new ce,Js=new ce,Ea=new ce,ba=new ce,as=new ce,rl=new ce,dc=new ce,fc=new ce,ss=new ce;function Oh(n,e,t,r,s){for(let o=0,u=n.length-3;o<=u;o+=3){ss.fromArray(n,o);const d=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),f=e.dot(ss),h=t.dot(ss),v=r.dot(ss);if(Math.max(-Math.max(f,h,v),Math.min(f,h,v))>d)return!1}return!0}const gn=new ce,hc=new Et;let KA=0;class cs extends vs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:KA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=TA,this.updateRanges=[],this.gpuType=xr,this.version=0,this._normalizationScale=e!==void 0?Nm(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[r+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)hc.fromBufferAttribute(this,t),hc.applyMatrix3(e),this.setXY(t,hc.x,hc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix3(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=s,this}setXYZW(e,t,r,s,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),s=this._normalize(s),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):IA(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):NA(e,this.array)}}class Vx extends cs{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Wx extends cs{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class $n extends cs{constructor(e,t,r){super(new Float32Array(e),t,r)}}const ZA=new Fl,al=new ce,Uh=new ce;class km{constructor(e=new ce,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):ZA.setFromPoints(e).getCenter(r);let s=0;for(let o=0,u=e.length;o<u;o++)s=Math.max(s,r.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;al.subVectors(e,this.center);const t=al.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),s=(r-this.radius)*.5;this.center.addScaledVector(al,s/r),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(al.copy(e.center).add(Uh)),this.expandByPoint(al.copy(e.center).sub(Uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let jA=0;const Ci=new en,Fh=new Pn,Qs=new ce,pi=new Fl,sl=new Fl,Tn=new ce;class Jr extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jA++}),this.uuid=Ul(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(RA(e)?Wx:Vx)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const o=new ht().getNormalMatrix(e);r.applyNormalMatrix(o),r.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,t,r){return Ci.makeTranslation(e,t,r),this.applyMatrix4(Ci),this}scale(e,t,r){return Ci.makeScale(e,t,r),this.applyMatrix4(Ci),this}lookAt(e){return Fh.lookAt(e),Fh.updateMatrix(),this.applyMatrix4(Fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let s=0,o=e.length;s<o;s++){const u=e[s];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new $n(r,3))}else{const r=Math.min(e.length,t.count);for(let s=0;s<r;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];pi.setFromBufferAttribute(o),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new km);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const r=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const d=t[o];sl.setFromBufferAttribute(d),this.morphTargetsRelative?(Tn.addVectors(pi.min,sl.min),pi.expandByPoint(Tn),Tn.addVectors(pi.max,sl.max),pi.expandByPoint(Tn)):(pi.expandByPoint(sl.min),pi.expandByPoint(sl.max))}pi.getCenter(r);let s=0;for(let o=0,u=e.count;o<u;o++)Tn.fromBufferAttribute(e,o),s=Math.max(s,r.distanceToSquared(Tn));if(t)for(let o=0,u=t.length;o<u;o++){const d=t[o],f=this.morphTargetsRelative;for(let h=0,v=d.count;h<v;h++)Tn.fromBufferAttribute(d,h),f&&(Qs.fromBufferAttribute(e,h),Tn.add(Qs)),s=Math.max(s,r.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,s=t.normal,o=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new cs(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],f=[],h=new Uint8Array(r.count);for(let G=0;G<r.count;G++)d[G]=new ce,f[G]=new ce;const v=new ce,m=new ce,g=new ce,x=new Et,E=new Et,R=new Et,y=new ce,S=new ce;function w(G,O,B){h[G]=h[O]=h[B]=1,v.fromBufferAttribute(r,G),m.fromBufferAttribute(r,O),g.fromBufferAttribute(r,B),x.fromBufferAttribute(o,G),E.fromBufferAttribute(o,O),R.fromBufferAttribute(o,B),m.sub(v),g.sub(v),E.sub(x),R.sub(x);const V=1/(E.x*R.y-R.x*E.y);isFinite(V)&&(y.copy(m).multiplyScalar(R.y).addScaledVector(g,-E.y).multiplyScalar(V),S.copy(g).multiplyScalar(E.x).addScaledVector(m,-R.x).multiplyScalar(V),d[G].add(y),d[O].add(y),d[B].add(y),f[G].add(S),f[O].add(S),f[B].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let G=0,O=N.length;G<O;++G){const B=N[G],V=B.start,X=B.count;for(let k=V,ae=V+X;k<ae;k+=3)w(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const D=new ce,U=new ce,I=new ce,b=new ce;function P(G){I.fromBufferAttribute(s,G),b.copy(I);const O=d[G];D.copy(O),D.sub(I.multiplyScalar(I.dot(O))).normalize(),U.crossVectors(b,O);const V=U.dot(f[G])<0?-1:1;u.setXYZW(G,D.x,D.y,D.z,V)}for(let G=0,O=r.count;G<O;++G)h[G]&&P(G);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new cs(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,x=r.count;g<x;g++)r.setXYZ(g,0,0,0);const s=new ce,o=new ce,u=new ce,d=new ce,f=new ce,h=new ce,v=new ce,m=new ce;if(e)for(let g=0,x=e.count;g<x;g+=3){const E=e.getX(g+0),R=e.getX(g+1),y=e.getX(g+2);s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,R),u.fromBufferAttribute(t,y),v.subVectors(u,o),m.subVectors(s,o),v.cross(m),d.fromBufferAttribute(r,E),f.fromBufferAttribute(r,R),h.fromBufferAttribute(r,y),d.add(v),f.add(v),h.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(R,f.x,f.y,f.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,x=t.count;g<x;g+=3)s.fromBufferAttribute(t,g+0),o.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),v.subVectors(u,o),m.subVectors(s,o),v.cross(m),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Tn.fromBufferAttribute(e,t),Tn.normalize(),e.setXYZ(t,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(d,f){const h=d.array,v=d.itemSize,m=d.normalized,g=new h.constructor(f.length*v);let x=0,E=0;for(let R=0,y=f.length;R<y;R++){d.isInterleavedBufferAttribute?x=f[R]*d.data.stride+d.offset:x=f[R]*v;for(let S=0;S<v;S++)g[E++]=h[x++]}return new cs(g,v,m)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jr,r=this.index.array,s=this.attributes;for(const d in s){const f=s[d],h=e(f,r);t.setAttribute(d,h)}const o=this.morphAttributes;for(const d in o){const f=[],h=o[d];for(let v=0,m=h.length;v<m;v++){const g=h[v],x=e(g,r);f.push(x)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,f=u.length;d<f;d++){const h=u[d];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const h=r[f];e.data.attributes[f]=h.toJSON(e.data)}const s={};let o=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],v=[];for(let m=0,g=h.length;m<g;m++){const x=h[m];v.push(x.toJSON(e.data))}v.length>0&&(s[f]=v,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const s=e.attributes;for(const h in s){const v=s[h];this.setAttribute(h,v.clone(t))}const o=e.morphAttributes;for(const h in o){const v=[],m=o[h];for(let g=0,x=m.length;g<x;g++)v.push(m[g].clone(t));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,v=u.length;h<v;h++){const m=u[h];this.addGroup(m.start,m.count,m.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kh=new ce,JA=new ce,QA=new ht;class Aa{constructor(e=new ce(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,s){return this.normal.set(e,t,r),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const s=kh.subVectors(r,t).cross(JA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const s=e.delta(kh),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||QA.getNormalMatrix(e),s=this.coplanarPoint(kh).applyMatrix4(e),o=this.normal.applyMatrix3(r).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let eC=0;class kl extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eC++}),this.uuid=Ul(),this.name="",this.type="Material",this.blending=Ml,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sx,this.blendDst=xx,this.blendEquation=ro,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=SA,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_h,this.stencilZFail=_h,this.stencilZPass=_h,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){dt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){dt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(r):s&&s.isVector2&&r&&r.isVector2||s&&s.isEuler&&r&&r.isEuler||s&&s.isVector3&&r&&r.isVector3?s.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function s(o){const u=[];for(const d in o){const f=o[d];delete f.metadata,u.push(f)}return u}if(t){const o=s(e.textures),u=s(e.images);o.length>0&&(r.textures=o),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Aa().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Et().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Et().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const s=t.length;r=new Array(s);for(let o=0;o!==s;++o)r[o]=t[o].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Hr=new ce,Bh=new ce,pc=new ce,mc=new ce;class $x{constructor(e=new ce,t=new ce(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hr.copy(this.origin).addScaledVector(this.direction,t),Hr.distanceToSquared(e))}distanceSqToSegment(e,t,r,s){Bh.copy(e).add(t).multiplyScalar(.5),pc.copy(t).sub(e).normalize(),mc.copy(this.origin).sub(Bh);const o=e.distanceTo(t)*.5,u=-this.direction.dot(pc),d=mc.dot(this.direction),f=-mc.dot(pc),h=mc.lengthSq(),v=Math.abs(1-u*u);let m,g,x,E;if(v>0)if(m=u*f-d,g=u*d-f,E=o*v,m>=0)if(g>=-E)if(g<=E){const R=1/v;m*=R,g*=R,x=m*(m+u*g+2*d)+g*(u*m+g+2*f)+h}else g=o,m=Math.max(0,-(u*g+d)),x=-m*m+g*(g+2*f)+h;else g=-o,m=Math.max(0,-(u*g+d)),x=-m*m+g*(g+2*f)+h;else g<=-E?(m=Math.max(0,-(-u*o+d)),g=m>0?-o:Math.min(Math.max(-o,-f),o),x=-m*m+g*(g+2*f)+h):g<=E?(m=0,g=Math.min(Math.max(-o,-f),o),x=g*(g+2*f)+h):(m=Math.max(0,-(u*o+d)),g=m>0?o:Math.min(Math.max(-o,-f),o),x=-m*m+g*(g+2*f)+h);else g=u>0?-o:o,m=Math.max(0,-(u*g+d)),x=-m*m+g*(g+2*f)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Bh).addScaledVector(pc,g),x}intersectSphere(e,t){if(e.radius<0)return null;Hr.subVectors(e.center,this.origin);const r=Hr.dot(this.direction),s=Hr.dot(Hr)-r*r,o=e.radius*e.radius;if(s>o)return null;const u=Math.sqrt(o-s),d=r-u,f=r+u;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,s,o,u,d,f;const h=1/this.direction.x,v=1/this.direction.y,m=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,s=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,s=(e.min.x-g.x)*h),v>=0?(o=(e.min.y-g.y)*v,u=(e.max.y-g.y)*v):(o=(e.max.y-g.y)*v,u=(e.min.y-g.y)*v),r>u||o>s||((o>r||isNaN(r))&&(r=o),(u<s||isNaN(s))&&(s=u),m>=0?(d=(e.min.z-g.z)*m,f=(e.max.z-g.z)*m):(d=(e.max.z-g.z)*m,f=(e.min.z-g.z)*m),r>f||d>s)||((d>r||r!==r)&&(r=d),(f<s||s!==s)&&(s=f),s<0)?null:this.at(r>=0?r:s,t)}intersectsBox(e){return this.intersectBox(e,Hr)!==null}intersectTriangle(e,t,r,s,o){const u=this.origin,d=this.direction,f=d.x,h=d.y,v=d.z,m=e.x-u.x,g=e.y-u.y,x=e.z-u.z,E=t.x-u.x,R=t.y-u.y,y=t.z-u.z,S=r.x-u.x,w=r.y-u.y,N=r.z-u.z,D=Math.abs(f),U=Math.abs(h),I=Math.abs(v);let b,P,G,O,B,V,X,k,ae,ie,te,j;if(D>=U&&D>=I?(G=f,V=m,ae=E,j=S,f>=0?(b=h,P=v,O=g,B=x,X=R,k=y,ie=w,te=N):(b=v,P=h,O=x,B=g,X=y,k=R,ie=N,te=w)):U>=I?(G=h,V=g,ae=R,j=w,h>=0?(b=v,P=f,O=x,B=m,X=y,k=E,ie=N,te=S):(b=f,P=v,O=m,B=x,X=E,k=y,ie=S,te=N)):(G=v,V=x,ae=y,j=N,v>=0?(b=f,P=h,O=m,B=g,X=E,k=R,ie=S,te=w):(b=h,P=f,O=g,B=m,X=R,k=E,ie=w,te=S)),G===0)return null;const Y=b/G,J=P/G,F=1/G,ee=O-Y*V,Ae=B-J*V,ne=X-Y*ae,xe=k-J*ae,Ee=ie-Y*j,Ce=te-J*j,_e=Ee*xe-Ce*ne,Be=ee*Ce-Ae*Ee,mt=ne*Ae-xe*ee;if(s){if(_e<0||Be<0||mt<0)return null}else if((_e<0||Be<0||mt<0)&&(_e>0||Be>0||mt>0))return null;const Ze=_e+Be+mt;if(Ze===0)return null;const lt=F*(_e*V+Be*ae+mt*j);return(Ze>0?lt<0:lt>0)?null:this.at(lt/Ze,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gl extends kl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kr,this.combine=Mx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const uy=new en,os=new $x,gc=new km,cy=new ce,vc=new ce,_c=new ce,yc=new ce,zh=new ce,Sc=new ce,dy=new ce,xc=new ce;class Ua extends Pn{constructor(e=new Jr,t=new gl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const s=t[r[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const d=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=o}}}}getVertexPosition(e,t){const r=this.geometry,s=r.attributes.position,o=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(s,e);const d=this.morphTargetInfluences;if(o&&d){Sc.set(0,0,0);for(let f=0,h=o.length;f<h;f++){const v=d[f],m=o[f];v!==0&&(zh.fromBufferAttribute(m,e),u?Sc.addScaledVector(zh,v):Sc.addScaledVector(zh.sub(t),v))}t.add(Sc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gc.copy(r.boundingSphere),gc.applyMatrix4(o),os.copy(e.ray).recast(e.near),!(gc.containsPoint(os.origin)===!1&&(os.intersectSphere(gc,cy)===null||os.origin.distanceToSquared(cy)>(e.far-e.near)**2))&&(uy.copy(o).invert(),os.copy(e.ray).applyMatrix4(uy),!(r.boundingBox!==null&&os.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,r){let s;const o=this.geometry,u=this.material,d=o.index,f=o.attributes.position,h=o.attributes.uv,v=o.attributes.uv1,m=o.attributes.normal,g=o.groups,x=o.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,R=g.length;E<R;E++){const y=g[E],S=u[y.materialIndex],w=Math.max(y.start,x.start),N=Math.min(d.count,Math.min(y.start+y.count,x.start+x.count));for(let D=w,U=N;D<U;D+=3){const I=d.getX(D),b=d.getX(D+1),P=d.getX(D+2);s=Mc(this,S,e,r,h,v,m,I,b,P),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const E=Math.max(0,x.start),R=Math.min(d.count,x.start+x.count);for(let y=E,S=R;y<S;y+=3){const w=d.getX(y),N=d.getX(y+1),D=d.getX(y+2);s=Mc(this,u,e,r,h,v,m,w,N,D),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(u))for(let E=0,R=g.length;E<R;E++){const y=g[E],S=u[y.materialIndex],w=Math.max(y.start,x.start),N=Math.min(f.count,Math.min(y.start+y.count,x.start+x.count));for(let D=w,U=N;D<U;D+=3){const I=D,b=D+1,P=D+2;s=Mc(this,S,e,r,h,v,m,I,b,P),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const E=Math.max(0,x.start),R=Math.min(f.count,x.start+x.count);for(let y=E,S=R;y<S;y+=3){const w=y,N=y+1,D=y+2;s=Mc(this,u,e,r,h,v,m,w,N,D),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function tC(n,e,t,r,s,o,u,d){let f;if(e.side===ii?f=r.intersectTriangle(u,o,s,!0,d):f=r.intersectTriangle(s,o,u,e.side===ds,d),f===null)return null;xc.copy(d),xc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(xc);return h<t.near||h>t.far?null:{distance:h,point:xc.clone(),object:n}}function Mc(n,e,t,r,s,o,u,d,f,h){n.getVertexPosition(d,vc),n.getVertexPosition(f,_c),n.getVertexPosition(h,yc);const v=tC(n,e,t,r,vc,_c,yc,dy);if(v){const m=new ce;Qi.getBarycoord(dy,vc,_c,yc,m),s&&(v.uv=Qi.getInterpolatedAttribute(s,d,f,h,m,new Et)),o&&(v.uv1=Qi.getInterpolatedAttribute(o,d,f,h,m,new Et)),u&&(v.normal=Qi.getInterpolatedAttribute(u,d,f,h,m,new ce),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:d,b:f,c:h,normal:new ce,materialIndex:0};Qi.getNormal(vc,_c,yc,g.normal),v.face=g,v.barycoord=m}return v}class nC extends Bn{constructor(e=null,t=1,r=1,s,o,u,d,f,h=Cn,v=Cn,m,g){super(null,u,d,f,h,v,s,o,m,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ls=new km,iC=new Et(.5,.5),Ec=new ce;class Il{constructor(e=new Aa,t=new Aa,r=new Aa,s=new Aa,o=new Aa,u=new Aa){this.planes=[e,t,r,s,o,u]}set(e,t,r,s,o,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(s),d[4].copy(o),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=er,r=!1){const s=this.planes,o=e.elements,u=o[0],d=o[1],f=o[2],h=o[3],v=o[4],m=o[5],g=o[6],x=o[7],E=o[8],R=o[9],y=o[10],S=o[11],w=o[12],N=o[13],D=o[14],U=o[15];if(s[0].setComponents(h-u,x-v,S-E,U-w).normalize(),s[1].setComponents(h+u,x+v,S+E,U+w).normalize(),s[2].setComponents(h+d,x+m,S+R,U+N).normalize(),s[3].setComponents(h-d,x-m,S-R,U-N).normalize(),r)s[4].setComponents(f,g,y,D).normalize(),s[5].setComponents(h-f,x-g,S-y,U-D).normalize();else if(s[4].setComponents(h-f,x-g,S-y,U-D).normalize(),t===er)s[5].setComponents(h+f,x+g,S+y,U+D).normalize();else if(t===Dl)s[5].setComponents(f,g,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){ls.center.set(0,0,0);const t=iC.distanceTo(e.center);return ls.radius=.7071067811865476+t,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){const t=this.planes,r=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(r)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const s=t[r];if(Ec.x=s.normal.x>0?e.max.x:e.min.x,Ec.y=s.normal.y>0?e.max.y:e.min.y,Ec.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const fy=new en;class Bm{constructor(){this.coordinateSystem=er,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let s=0;s<t.length;s++){const o=t[s];fy.multiplyMatrices(o.projectionMatrix,o.matrixWorldInverse),r[s]===void 0&&(r[s]=new Il),r[s].setFromProjectionMatrix(fy,o.coordinateSystem,o.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Il),t[s].copy(r[s]);return this._count=e._count,this}clone(){return new Bm().copy(this)}}class Xx extends Bn{constructor(e=[],t=ho,r,s,o,u,d,f,h,v){super(e,t,r,s,o,u,d,f,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ol extends Bn{constructor(e,t,r,s,o,u,d,f,h){super(e,t,r,s,o,u,d,f,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mo extends Bn{constructor(e,t,r=Tr,s,o,u,d=Cn,f=Cn,h,v=Oa,m=1){if(v!==Oa&&v!==Da)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:m};super(g,s,o,u,d,f,v,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Om(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class qx extends mo{constructor(e,t=Tr,r=ho,s,o,u=Cn,d=Cn,f,h=Oa){const v={width:e,height:e,depth:1},m=[v,v,v,v,v,v];super(e,e,t,r,s,o,u,d,f,h),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Yx extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yo extends Jr{constructor(e=1,t=1,r=1,s=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:s,heightSegments:o,depthSegments:u};const d=this;s=Math.floor(s),o=Math.floor(o),u=Math.floor(u);const f=[],h=[],v=[],m=[];let g=0,x=0;E("z","y","x",-1,-1,r,t,e,u,o,0),E("z","y","x",1,-1,r,t,-e,u,o,1),E("x","z","y",1,1,e,r,t,s,u,2),E("x","z","y",1,-1,e,r,-t,s,u,3),E("x","y","z",1,-1,e,t,r,s,o,4),E("x","y","z",-1,-1,e,t,-r,s,o,5),this.setIndex(f),this.setAttribute("position",new $n(h,3)),this.setAttribute("normal",new $n(v,3)),this.setAttribute("uv",new $n(m,2));function E(R,y,S,w,N,D,U,I,b,P,G){const O=D/b,B=U/P,V=D/2,X=U/2,k=I/2,ae=b+1,ie=P+1;let te=0,j=0;const Y=new ce;for(let J=0;J<ie;J++){const F=J*B-X;for(let ee=0;ee<ae;ee++){const Ae=ee*O-V;Y[R]=Ae*w,Y[y]=F*N,Y[S]=k,h.push(Y.x,Y.y,Y.z),Y[R]=0,Y[y]=0,Y[S]=I>0?1:-1,v.push(Y.x,Y.y,Y.z),m.push(ee/b),m.push(1-J/P),te+=1}}for(let J=0;J<P;J++)for(let F=0;F<b;F++){const ee=g+F+ae*J,Ae=g+F+ae*(J+1),ne=g+(F+1)+ae*(J+1),xe=g+(F+1)+ae*J;f.push(ee,Ae,xe),f.push(Ae,ne,xe),j+=6}d.addGroup(x,j,G),x+=j,g+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Nl extends Jr{constructor(e=1,t=1,r=1,s=32,o=1,u=!1,d=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:s,heightSegments:o,openEnded:u,thetaStart:d,thetaLength:f};const h=this;s=Math.floor(s),o=Math.floor(o);const v=[],m=[],g=[],x=[];let E=0;const R=[],y=r/2;let S=0;w(),u===!1&&(e>0&&N(!0),t>0&&N(!1)),this.setIndex(v),this.setAttribute("position",new $n(m,3)),this.setAttribute("normal",new $n(g,3)),this.setAttribute("uv",new $n(x,2));function w(){const D=new ce,U=new ce;let I=0;const b=(t-e)/r;for(let P=0;P<=o;P++){const G=[],O=P/o,B=O*(t-e)+e;for(let V=0;V<=s;V++){const X=V/s,k=X*f+d,ae=Math.sin(k),ie=Math.cos(k);U.x=B*ae,U.y=-O*r+y,U.z=B*ie,m.push(U.x,U.y,U.z),D.set(ae,b,ie).normalize(),g.push(D.x,D.y,D.z),x.push(X,1-O),G.push(E++)}R.push(G)}for(let P=0;P<s;P++)for(let G=0;G<o;G++){const O=R[G][P],B=R[G+1][P],V=R[G+1][P+1],X=R[G][P+1];(e>0||G!==0)&&(v.push(O,B,X),I+=3),(t>0||G!==o-1)&&(v.push(B,V,X),I+=3)}h.addGroup(S,I,0),S+=I}function N(D){const U=E,I=new Et,b=new ce;let P=0;const G=D===!0?e:t,O=D===!0?1:-1;for(let V=1;V<=s;V++)m.push(0,y*O,0),g.push(0,O,0),x.push(.5,.5),E++;const B=E;for(let V=0;V<=s;V++){const k=V/s*f+d,ae=Math.cos(k),ie=Math.sin(k);b.x=G*ie,b.y=y*O,b.z=G*ae,m.push(b.x,b.y,b.z),g.push(0,O,0),I.x=ae*.5+.5,I.y=ie*.5*O+.5,x.push(I.x,I.y),E++}for(let V=0;V<s;V++){const X=U+V,k=B+V;D===!0?v.push(k,k+1,X):v.push(k+1,k,X),P+=3}h.addGroup(S,P,D===!0?1:2),S+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jc extends Nl{constructor(e=1,t=1,r=32,s=1,o=!1,u=0,d=Math.PI*2){super(0,e,t,r,s,o,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:u,thetaLength:d}}static fromJSON(e){return new Jc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ia extends Jr{constructor(e=1,t=1,r=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:s};const o=e/2,u=t/2,d=Math.floor(r),f=Math.floor(s),h=d+1,v=f+1,m=e/d,g=t/f,x=[],E=[],R=[],y=[];for(let S=0;S<v;S++){const w=S*g-u;for(let N=0;N<h;N++){const D=N*m-o;E.push(D,-w,0),R.push(0,0,1),y.push(N/d),y.push(1-S/f)}}for(let S=0;S<f;S++)for(let w=0;w<d;w++){const N=w+h*S,D=w+h*(S+1),U=w+1+h*(S+1),I=w+1+h*S;x.push(N,D,I),x.push(D,U,I)}this.setIndex(x),this.setAttribute("position",new $n(E,3)),this.setAttribute("normal",new $n(R,3)),this.setAttribute("uv",new $n(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.widthSegments,e.heightSegments)}}class zm extends Jr{constructor(e=1,t=32,r=16,s=0,o=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:s,phiLength:o,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(u+d,Math.PI);let h=0;const v=[],m=new ce,g=new ce,x=[],E=[],R=[],y=[];for(let S=0;S<=r;S++){const w=[],N=S/r,D=u+N*d,U=e*Math.cos(D),I=Math.sqrt(e*e-U*U);let b=0;S===0&&u===0?b=.5/t:S===r&&f===Math.PI&&(b=-.5/t);for(let P=0;P<=t;P++){const G=P/t,O=s+G*o;m.x=-I*Math.cos(O),m.y=U,m.z=I*Math.sin(O),E.push(m.x,m.y,m.z),g.copy(m).normalize(),R.push(g.x,g.y,g.z),y.push(G+b,1-N),w.push(h++)}v.push(w)}for(let S=0;S<r;S++)for(let w=0;w<t;w++){const N=v[S][w+1],D=v[S][w],U=v[S+1][w],I=v[S+1][w+1];(S!==0||u>0)&&x.push(N,D,I),(S!==r-1||f<Math.PI)&&x.push(D,U,I)}this.setIndex(x),this.setAttribute("position",new $n(E,3)),this.setAttribute("normal",new $n(R,3)),this.setAttribute("uv",new $n(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function go(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const s=n[t][r];if(hy(s))s.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=s.clone();else if(Array.isArray(s))if(hy(s[0])){const o=[];for(let u=0,d=s.length;u<d;u++)o[u]=s[u].clone();e[t][r]=o}else e[t][r]=s.slice();else e[t][r]=s}}return e}function Vn(n){const e={};for(let t=0;t<n.length;t++){const r=go(n[t]);for(const s in r)e[s]=r[s]}return e}function hy(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function rC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Kx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const aC={clone:go,merge:Vn};var sC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hs extends kl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sC,this.fragmentShader=oC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=rC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const s in this.extensions)this.extensions[s]===!0&&(r[s]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const s=e.uniforms[r];switch(this.uniforms[r]={},s.type){case"t":this.uniforms[r].value=t[s.value]||null;break;case"c":this.uniforms[r].value=new Mt().setHex(s.value);break;case"v2":this.uniforms[r].value=new Et().fromArray(s.value);break;case"v3":this.uniforms[r].value=new ce().fromArray(s.value);break;case"v4":this.uniforms[r].value=new rn().fromArray(s.value);break;case"m3":this.uniforms[r].value=new ht().fromArray(s.value);break;case"m4":this.uniforms[r].value=new en().fromArray(s.value);break;default:this.uniforms[r].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class lC extends hs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class uC extends kl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=um,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cC extends kl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_A,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dC extends kl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Hm extends Pn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class fC extends Hm{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Hh=new en,py=new ce,my=new ce;class Zx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Il,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;py.setFromMatrixPosition(e.matrixWorld),t.position.copy(py),my.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(my),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,s){Hh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Hh,e.coordinateSystem,e.reversedDepth);const o=this._frameExtents,u=s?s.z/o.x:1,d=s?s.w/o.y:1,f=s?s.x/o.x:0,h=s?s.y/o.y:0;e.coordinateSystem===Dl||e.reversedDepth?t.set(.5*u,0,0,.5*u+f,0,.5*d,0,.5*d+h,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+f,0,.5*d,0,.5*d+h,0,0,.5,.5,0,0,0,1),t.multiply(Hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const bc=new ce,wc=new qr,dr=new ce;class jx extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=er,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bc,wc,dr),dr.x===1&&dr.y===1&&dr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bc,wc,dr.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(bc,wc,dr),dr.x===1&&dr.y===1&&dr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bc,wc,dr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wa=new ce,gy=new Et,vy=new Et;class Di extends jx{constructor(e=50,t=1,r=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cm*2*Math.atan(Math.tan(yh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){wa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wa.x,wa.y).multiplyScalar(-e/wa.z),wa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(wa.x,wa.y).multiplyScalar(-e/wa.z)}getViewSize(e,t){return this.getViewBounds(e,gy,vy),t.subVectors(vy,gy)}setViewOffset(e,t,r,s,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yh*.5*this.fov)/this.zoom,r=2*t,s=this.aspect*r,o=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,h=u.fullHeight;o+=u.offsetX*s/f,t-=u.offsetY*r/h,s*=u.width/f,r*=u.height/h}const d=this.filmOffset;d!==0&&(o+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class hC extends Zx{constructor(){super(new Di(90,1,.5,500)),this.isPointLightShadow=!0}}class _y extends Hm{constructor(e,t,r=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=s,this.shadow=new hC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Jx extends jx{constructor(e=-1,t=1,r=1,s=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=s,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,s,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=r-e,u=r+e,d=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,u=o+h*this.view.width,d-=v*this.view.offsetY,f=d-v*this.view.height}this.projectionMatrix.makeOrthographic(o,u,d,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pC extends Zx{constructor(){super(new Jx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mC extends Hm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new pC}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const eo=-90,to=1;class dm extends Pn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Di(eo,to,e,t);s.layers=this.layers,this.add(s);const o=new Di(eo,to,e,t);o.layers=this.layers,this.add(o);const u=new Di(eo,to,e,t);u.layers=this.layers,this.add(u);const d=new Di(eo,to,e,t);d.layers=this.layers,this.add(d);const f=new Di(eo,to,e,t);f.layers=this.layers,this.add(f);const h=new Di(eo,to,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,s,o,u,d,f]=t;for(const h of t)this.remove(h);if(e===er)r.up.set(0,1,0),r.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Dl)r.up.set(0,-1,0),r.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,d,f,h,v]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(r,1,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,4,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.mipmapsAutoUpdate=R,e.setRenderTarget(r,5,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(m,g,x),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class gC extends Di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const yy=new en;class vC{constructor(e,t,r=0,s=1/0){this.ray=new $x(e,t),this.near=r,this.far=s,this.camera=null,this.layers=new Um,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ot("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yy.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yy),this}intersectObject(e,t=!0,r=[]){return fm(e,this,r,t),r.sort(Sy),r}intersectObjects(e,t=!0,r=[]){for(let s=0,o=e.length;s<o;s++)fm(e[s],this,r,t);return r.sort(Sy),r}}function Sy(n,e){return n.distance-e.distance}function fm(n,e,t,r){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&r===!0){const o=n.children;for(let u=0,d=o.length;u<d;u++)fm(o[u],e,t,!0)}}function xy(n,e,t,r){const s=_C(r);switch(t){case Nx:return n*e;case Ux:return n*e/s.components*s.byteLength;case Lm:return n*e/s.components*s.byteLength;case fs:return n*e*2/s.components*s.byteLength;case Dm:return n*e*2/s.components*s.byteLength;case Ox:return n*e*3/s.components*s.byteLength;case Mr:return n*e*4/s.components*s.byteLength;case Im:return n*e*4/s.components*s.byteLength;case Nc:case Oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Uc:case Fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Np:case Up:return Math.max(n,16)*Math.max(e,8)/4;case Ip:case Op:return Math.max(n,8)*Math.max(e,8)/2;case Fp:case kp:case zp:case Hp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Bp:case qc:case Gp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wp:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case $p:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Xp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case qp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Yp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Kp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Zp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case jp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Jp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Qp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case em:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case tm:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case nm:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case im:case rm:case am:return Math.ceil(n/4)*Math.ceil(e/4)*16;case sm:case om:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Yc:case lm:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _C(n){switch(n){case gi:case Px:return{byteLength:1,components:1};case Ll:case Lx:case Rr:return{byteLength:2,components:1};case Cm:case Pm:return{byteLength:2,components:4};case Tr:case Am:case xr:return{byteLength:4,components:1};case Dx:case Ix:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tm}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qx(){let n=null,e=!1,t=null,r=null;function s(o,u){r=n.requestAnimationFrame(s),t(o,u)}return{start:function(){e!==!0&&t!==null&&n!==null&&(r=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function yC(n){const e=new WeakMap;function t(d,f){const h=d.array,v=d.usage,m=h.byteLength,g=n.createBuffer();n.bindBuffer(f,g),n.bufferData(f,h,v),d.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=n.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:m}}function r(d,f,h){const v=f.array,m=f.updateRanges;if(n.bindBuffer(h,d),m.length===0)n.bufferSubData(h,0,v);else{m.sort((x,E)=>x.start-E.start);let g=0;for(let x=1;x<m.length;x++){const E=m[g],R=m[x];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++g,m[g]=R)}m.length=g+1;for(let x=0,E=m.length;x<E;x++){const R=m[x];n.bufferSubData(h,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function o(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(n.deleteBuffer(f.buffer),e.delete(d))}function u(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,t(d,f));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,d,f),h.version=d.version}}return{get:s,remove:o,update:u}}var SC=`#ifdef USE_ALPHAHASH
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
#endif`,DC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,IC=`#ifdef USE_IRIDESCENCE
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
#endif`,DP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IP=`#if defined( USE_MORPHCOLORS )
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
}`,DL=`uniform vec3 diffuse;
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
}`,IL=`#include <common>
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
}`,_t={alphahash_fragment:SC,alphahash_pars_fragment:xC,alphamap_fragment:MC,alphamap_pars_fragment:EC,alphatest_fragment:bC,alphatest_pars_fragment:wC,aomap_fragment:TC,aomap_pars_fragment:RC,batching_pars_vertex:AC,batching_vertex:CC,begin_vertex:PC,beginnormal_vertex:LC,bsdfs:DC,iridescence_fragment:IC,bumpmap_pars_fragment:NC,clipping_planes_fragment:OC,clipping_planes_pars_fragment:UC,clipping_planes_pars_vertex:FC,clipping_planes_vertex:kC,color_fragment:BC,color_pars_fragment:zC,color_pars_vertex:HC,color_vertex:GC,common:VC,defaultnormal_vertex:WC,displacementmap_pars_vertex:$C,displacementmap_vertex:XC,emissivemap_fragment:qC,emissivemap_pars_fragment:YC,colorspace_fragment:KC,colorspace_pars_fragment:ZC,envmap_fragment:jC,envmap_common_pars_fragment:JC,envmap_pars_fragment:QC,envmap_pars_vertex:eP,envmap_physical_pars_fragment:dP,envmap_vertex:tP,fog_vertex:nP,fog_pars_vertex:iP,fog_fragment:rP,fog_pars_fragment:aP,gradientmap_pars_fragment:sP,lightmap_pars_fragment:oP,lights_lambert_fragment:lP,lights_lambert_pars_fragment:uP,lights_pars_begin:cP,lights_toon_fragment:fP,lights_toon_pars_fragment:hP,lights_phong_fragment:pP,lights_phong_pars_fragment:mP,lights_physical_fragment:gP,lights_physical_pars_fragment:vP,lights_fragment_begin:_P,lights_fragment_maps:yP,lights_fragment_end:SP,lightprobes_pars_fragment:xP,logdepthbuf_fragment:MP,logdepthbuf_pars_fragment:EP,logdepthbuf_pars_vertex:bP,logdepthbuf_vertex:wP,map_fragment:TP,map_pars_fragment:RP,map_particle_fragment:AP,map_particle_pars_fragment:CP,metalnessmap_fragment:PP,metalnessmap_pars_fragment:LP,morphinstance_vertex:DP,morphcolor_vertex:IP,morphnormal_vertex:NP,morphtarget_pars_vertex:OP,morphtarget_vertex:UP,normal_fragment_begin:FP,normal_fragment_maps:kP,normal_pars_fragment:BP,normal_pars_vertex:zP,normal_vertex:HP,normalmap_pars_fragment:GP,clearcoat_normal_fragment_begin:VP,clearcoat_normal_fragment_maps:WP,clearcoat_pars_fragment:$P,iridescence_pars_fragment:XP,opaque_fragment:qP,packing:YP,premultiplied_alpha_fragment:KP,project_vertex:ZP,dithering_fragment:jP,dithering_pars_fragment:JP,roughnessmap_fragment:QP,roughnessmap_pars_fragment:eL,shadowmap_pars_fragment:tL,shadowmap_pars_vertex:nL,shadowmap_vertex:iL,shadowmask_pars_fragment:rL,skinbase_vertex:aL,skinning_pars_vertex:sL,skinning_vertex:oL,skinnormal_vertex:lL,specularmap_fragment:uL,specularmap_pars_fragment:cL,tonemapping_fragment:dL,tonemapping_pars_fragment:fL,transmission_fragment:hL,transmission_pars_fragment:pL,uv_pars_fragment:mL,uv_pars_vertex:gL,uv_vertex:vL,worldpos_vertex:_L,background_vert:yL,background_frag:SL,backgroundCube_vert:xL,backgroundCube_frag:ML,cube_vert:EL,cube_frag:bL,depth_vert:wL,depth_frag:TL,distance_vert:RL,distance_frag:AL,equirect_vert:CL,equirect_frag:PL,linedashed_vert:LL,linedashed_frag:DL,meshbasic_vert:IL,meshbasic_frag:NL,meshlambert_vert:OL,meshlambert_frag:UL,meshmatcap_vert:FL,meshmatcap_frag:kL,meshnormal_vert:BL,meshnormal_frag:zL,meshphong_vert:HL,meshphong_frag:GL,meshphysical_vert:VL,meshphysical_frag:WL,meshtoon_vert:$L,meshtoon_frag:XL,points_vert:qL,points_frag:YL,shadow_vert:KL,shadow_frag:ZL,sprite_vert:jL,sprite_frag:JL},Ge={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},gr={basic:{uniforms:Vn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Vn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Vn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Vn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Vn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Mt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Vn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Vn([Ge.points,Ge.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Vn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Vn([Ge.common,Ge.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Vn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Vn([Ge.sprite,Ge.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:Vn([Ge.common,Ge.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:Vn([Ge.lights,Ge.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};gr.physical={uniforms:Vn([gr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Tc={r:0,b:0,g:0},QL=new en,eM=new ht;eM.set(-1,0,0,0,1,0,0,0,1);function e2(n,e,t,r,s,o){const u=new Mt(0);let d=s===!0?0:1,f,h,v=null,m=0,g=null;function x(w){let N=w.isScene===!0?w.background:null;if(N&&N.isTexture){const D=w.backgroundBlurriness>0;N=e.get(N,D)}return N}function E(w){let N=!1;const D=x(w);D===null?y(u,d):D&&D.isColor&&(y(D,1),N=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?t.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(n.autoClear||N)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function R(w,N){const D=x(N);D&&D.isCubeTexture?(h===void 0&&(h=new Ua(new yo(1,1,1),new hs({name:"BackgroundCubeMaterial",uniforms:go(gr.backgroundCube.uniforms),vertexShader:gr.backgroundCube.vertexShader,fragmentShader:gr.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,I,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=D,h.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(QL.makeRotationFromEuler(N.backgroundRotation)).transpose(),D.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(eM),h.material.toneMapped=wt.getTransfer(D.colorSpace)!==Ft,(v!==D||m!==D.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,v=D,m=D.version,g=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(f===void 0&&(f=new Ua(new Ia(2,2),new hs({name:"BackgroundMaterial",uniforms:go(gr.background.uniforms),vertexShader:gr.background.vertexShader,fragmentShader:gr.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=D,f.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,f.material.toneMapped=wt.getTransfer(D.colorSpace)!==Ft,D.matrixAutoUpdate===!0&&D.updateMatrix(),f.material.uniforms.uvTransform.value.copy(D.matrix),(v!==D||m!==D.version||g!==n.toneMapping)&&(f.material.needsUpdate=!0,v=D,m=D.version,g=n.toneMapping),f.layers.enableAll(),w.unshift(f,f.geometry,f.material,0,0,null))}function y(w,N){w.getRGB(Tc,Kx(n)),t.buffers.color.setClear(Tc.r,Tc.g,Tc.b,N,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(w,N=1){u.set(w),d=N,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(w){d=w,y(u,d)},render:E,addToRenderList:R,dispose:S}}function t2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},s=g(null);let o=s,u=!1;function d(B,V,X,k,ae){let ie=!1;const te=m(B,k,X,V);o!==te&&(o=te,h(o.object)),ie=x(B,k,X,ae),ie&&E(B,k,X,ae),ae!==null&&e.update(ae,n.ELEMENT_ARRAY_BUFFER),(ie||u)&&(u=!1,D(B,V,X,k),ae!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function f(){return n.createVertexArray()}function h(B){return n.bindVertexArray(B)}function v(B){return n.deleteVertexArray(B)}function m(B,V,X,k){const ae=k.wireframe===!0;let ie=r[V.id];ie===void 0&&(ie={},r[V.id]=ie);const te=B.isInstancedMesh===!0?B.id:0;let j=ie[te];j===void 0&&(j={},ie[te]=j);let Y=j[X.id];Y===void 0&&(Y={},j[X.id]=Y);let J=Y[ae];return J===void 0&&(J=g(f()),Y[ae]=J),J}function g(B){const V=[],X=[],k=[];for(let ae=0;ae<t;ae++)V[ae]=0,X[ae]=0,k[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:X,attributeDivisors:k,object:B,attributes:{},index:null}}function x(B,V,X,k){const ae=o.attributes,ie=V.attributes;let te=0;const j=X.getAttributes();for(const Y in j)if(j[Y].location>=0){const F=ae[Y];let ee=ie[Y];if(ee===void 0&&(Y==="instanceMatrix"&&B.instanceMatrix&&(ee=B.instanceMatrix),Y==="instanceColor"&&B.instanceColor&&(ee=B.instanceColor)),F===void 0||F.attribute!==ee||ee&&F.data!==ee.data)return!0;te++}return o.attributesNum!==te||o.index!==k}function E(B,V,X,k){const ae={},ie=V.attributes;let te=0;const j=X.getAttributes();for(const Y in j)if(j[Y].location>=0){let F=ie[Y];F===void 0&&(Y==="instanceMatrix"&&B.instanceMatrix&&(F=B.instanceMatrix),Y==="instanceColor"&&B.instanceColor&&(F=B.instanceColor));const ee={};ee.attribute=F,F&&F.data&&(ee.data=F.data),ae[Y]=ee,te++}o.attributes=ae,o.attributesNum=te,o.index=k}function R(){const B=o.newAttributes;for(let V=0,X=B.length;V<X;V++)B[V]=0}function y(B){S(B,0)}function S(B,V){const X=o.newAttributes,k=o.enabledAttributes,ae=o.attributeDivisors;X[B]=1,k[B]===0&&(n.enableVertexAttribArray(B),k[B]=1),ae[B]!==V&&(n.vertexAttribDivisor(B,V),ae[B]=V)}function w(){const B=o.newAttributes,V=o.enabledAttributes;for(let X=0,k=V.length;X<k;X++)V[X]!==B[X]&&(n.disableVertexAttribArray(X),V[X]=0)}function N(B,V,X,k,ae,ie,te){te===!0?n.vertexAttribIPointer(B,V,X,ae,ie):n.vertexAttribPointer(B,V,X,k,ae,ie)}function D(B,V,X,k){R();const ae=k.attributes,ie=X.getAttributes(),te=V.defaultAttributeValues;for(const j in ie){const Y=ie[j];if(Y.location>=0){let J=ae[j];if(J===void 0&&(j==="instanceMatrix"&&B.instanceMatrix&&(J=B.instanceMatrix),j==="instanceColor"&&B.instanceColor&&(J=B.instanceColor)),J!==void 0){const F=J.normalized,ee=J.itemSize,Ae=e.get(J);if(Ae===void 0)continue;const ne=Ae.buffer,xe=Ae.type,Ee=Ae.bytesPerElement,Ce=xe===n.INT||xe===n.UNSIGNED_INT||J.gpuType===Am;if(J.isInterleavedBufferAttribute){const _e=J.data,Be=_e.isInterleavedBuffer===!0?_e.stride:_e.itemSize,mt=J.offset;if(_e.isInstancedInterleavedBuffer||_e.isInstancedBufferAttribute){for(let Ze=0;Ze<Y.locationSize;Ze++)S(Y.location+Ze,_e.meshPerAttribute);B.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ze=0;Ze<Y.locationSize;Ze++)y(Y.location+Ze);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let Ze=0;Ze<Y.locationSize;Ze++)N(Y.location+Ze,ee/Y.locationSize,xe,F,Be*Ee,(mt+ee/Y.locationSize*Ze)*Ee,Ce)}else{if(J.isInstancedBufferAttribute){for(let _e=0;_e<Y.locationSize;_e++)S(Y.location+_e,J.meshPerAttribute);B.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let _e=0;_e<Y.locationSize;_e++)y(Y.location+_e);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let _e=0;_e<Y.locationSize;_e++)N(Y.location+_e,ee/Y.locationSize,xe,F,ee*Ee,ee/Y.locationSize*_e*Ee,Ce)}}else if(te!==void 0){const F=te[j];if(F!==void 0)switch(F.length){case 2:n.vertexAttrib2fv(Y.location,F);break;case 3:n.vertexAttrib3fv(Y.location,F);break;case 4:n.vertexAttrib4fv(Y.location,F);break;default:n.vertexAttrib1fv(Y.location,F)}}}}w()}function U(){G();for(const B in r){const V=r[B];for(const X in V){const k=V[X];for(const ae in k){const ie=k[ae];for(const te in ie)v(ie[te].object),delete ie[te];delete k[ae]}}delete r[B]}}function I(B){if(r[B.id]===void 0)return;const V=r[B.id];for(const X in V){const k=V[X];for(const ae in k){const ie=k[ae];for(const te in ie)v(ie[te].object),delete ie[te];delete k[ae]}}delete r[B.id]}function b(B){for(const V in r){const X=r[V];for(const k in X){const ae=X[k];if(ae[B.id]===void 0)continue;const ie=ae[B.id];for(const te in ie)v(ie[te].object),delete ie[te];delete ae[B.id]}}}function P(B){for(const V in r){const X=r[V],k=B.isInstancedMesh===!0?B.id:0,ae=X[k];if(ae!==void 0){for(const ie in ae){const te=ae[ie];for(const j in te)v(te[j].object),delete te[j];delete ae[ie]}delete X[k],Object.keys(X).length===0&&delete r[V]}}}function G(){O(),u=!0,o!==s&&(o=s,h(o.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:d,reset:G,resetDefaultState:O,dispose:U,releaseStatesOfGeometry:I,releaseStatesOfObject:P,releaseStatesOfProgram:b,initAttributes:R,enableAttribute:y,disableUnusedAttributes:w}}function n2(n,e,t){let r;function s(f){r=f}function o(f,h){n.drawArrays(r,f,h),t.update(h,r,1)}function u(f,h,v){v!==0&&(n.drawArraysInstanced(r,f,h,v),t.update(h,r,v))}function d(f,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,h,0,v);let g=0;for(let x=0;x<v;x++)g+=h[x];t.update(g,r,1)}this.setMode=s,this.render=o,this.renderInstances=u,this.renderMultiDraw=d}function i2(n,e,t,r){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(b){return!(b!==Mr&&r.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(b){const P=b===Rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==gi&&b!==xr&&!P&&r.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function f(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const v=f(h);v!==h&&(dt("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=t.logarithmicDepthBuffer===!0&&m===!1;t.reversedDepthBuffer===!0&&m===!1&&dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&m===!0&&dt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),S=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),N=n.getParameter(n.MAX_VARYING_VECTORS),D=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=n.getParameter(n.MAX_SAMPLES),I=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:w,maxVaryings:N,maxFragmentUniforms:D,maxSamples:U,samples:I}}function r2(n){const e=this;let t=null,r=0,s=!1,o=!1;const u=new Aa,d=new ht,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const x=m.length!==0||g||r!==0||s;return s=g,r=m.length,x},this.beginShadows=function(){o=!0,v(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,g){t=v(m,g,0)},this.setState=function(m,g,x){const E=m.clippingPlanes,R=m.clipIntersection,y=m.clipShadows,S=n.get(m);if(!s||E===null||E.length===0||o&&!y)o?v(null):h();else{const w=o?0:r,N=w*4;let D=S.clippingState||null;f.value=D,D=v(E,g,N,x);for(let U=0;U!==N;++U)D[U]=t[U];S.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=w}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(m,g,x,E){const R=m!==null?m.length:0;let y=null;if(R!==0){if(y=f.value,E!==!0||y===null){const S=x+R*4,w=g.matrixWorldInverse;d.getNormalMatrix(w),(y===null||y.length<S)&&(y=new Float32Array(S));for(let N=0,D=x;N!==R;++N,D+=4)u.copy(m[N]).applyMatrix4(w,d),u.normal.toArray(y,D),y[D+3]=u.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}class Gm extends wr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},s=[r,r,r,r,r,r];this.texture=new Xx(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yo(5,5,5),o=new hs({name:"CubemapFromEquirect",uniforms:go(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ii,blending:oo});o.uniforms.tEquirect.value=t;const u=new Ua(s,o),d=t.minFilter;return t.minFilter===La&&(t.minFilter=ti),new dm(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,s=!0){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,s);e.setRenderTarget(o)}}const My=256,a2=3,s2=20,tM=256,nM=16,o2=3,l2=new ce,u2=new Mt;class Qc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new dm(1,10,null),this._boxMesh=new Ua(new yo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,s=100,o={}){const{size:u=256,position:d=l2}=o,f=this._renderer;this._setSize(u);const h=this._allocateTarget(),v=this._getSourceTarget(!0);t>0&&(v.texture.mipmapsAutoUpdate=!1);const m=f.autoClear,g=f.autoClearColor,x=f.autoClearDepth,E=f.autoClearStencil,R=e.background;f.autoClear=!0,f.autoClearColor=!0,f.autoClearDepth=!0,f.autoClearStencil=!0,R===null&&(e.background=f.getClearColor(u2));const y=new dm(r,s,v);return y.position.copy(d),y.update(f,e),f.autoClear=m,f.autoClearColor=g,f.autoClearDepth=x,f.autoClearStencil=E,e.background=R,t>0&&(v.texture.mipmapsAutoUpdate=!0,this._blur(h,t)),this._applyPMREM(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=by(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(My,DA(e))}_fromTexture(e,t){e.mapping===ho||e.mapping===Pl?this._setSize(e.image.length===0?My:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=Ey(e,!1,!1),r=Math.log2(e)-a2;for(let s=0;s<=r;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=Ey(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const s=this._boxMesh,o=this._cubeCamera;s.material=r,o.renderTarget=e,o.activeMipmapLevel=t;const u=e.width>>t;e.viewport.set(0,0,u,u),o.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ho||e.mapping===Pl?(this._cubemapMaterial===null&&(this._cubemapMaterial=wy()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=by()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=c2(),this._integrationMaterial=d2());const t=this._cubeSize,r=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const o=this._integrationMaterial.uniforms;o.envMap.value=this._sourceTarget.texture,o.sourceLod.value=Math.log2(t/nM);for(let u=0;u<=r;u++){const d=Qc.lodToRoughness(u,r);if(u>r-o2)o.roughness.value=d,this._renderCube(e,u,this._integrationMaterial);else{const f=d>0?Math.log2(t)+.5*Math.log2(6/(tM*Math.pow(d,4)))+.5:0;s.roughness.value=d,s.lodBias.value=f,this._renderCube(e,u,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=f2());const r=this._blurMaterial,s=r.uniforms,o=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=o.texture,this._renderCube(e,0,r),s.envMap.value=e.texture,this._renderCube(o,0,r)}}function Ey(n,e,t){return new Gm(n,{minFilter:La,generateMipmaps:e,type:Rr,colorSpace:Kc,depthBuffer:t})}function Bl(n,e,t){return new hs({name:n,uniforms:e,vertexShader:_t.cube_vert,fragmentShader:t,side:ii,blending:oo,depthTest:!1,depthWrite:!1})}function c2(){return Bl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function h2(n){let e=new WeakMap,t=new WeakMap,r=null;function s(g,x=!1){return g==null?null:x?u(g):o(g)}function o(g){if(g&&g.isTexture){const x=g.mapping;if(x===mh||x===gh)if(e.has(g)){const E=e.get(g).texture;return d(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const R=new Gm(E.height);return R.fromEquirectangularTexture(n,g),e.set(g,R),g.addEventListener("dispose",h),d(R.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture&&g.isPMREMTexture!==!0){const x=g.mapping,E=x===mh||x===gh,R=x===ho||x===Pl;if(E||R){let y=t.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return r===null&&(r=new Qc(n)),y=E?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),y.texture;if(y!==void 0)return y.texture;{const w=g.image;return E&&w&&w.height>0||R&&w&&f(w)?(r===null&&(r=new Qc(n)),y=E?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),g.addEventListener("dispose",v),y.texture):null}}}return g}function d(g,x){return x===mh?g.mapping=ho:x===gh&&(g.mapping=Pl),g}function f(g){let x=0;const E=6;for(let R=0;R<E;R++)g[R]!==void 0&&x++;return x===E}function h(g){const x=g.target;x.removeEventListener("dispose",h);const E=e.get(x);E!==void 0&&(e.delete(x),E.dispose())}function v(g){const x=g.target;x.removeEventListener("dispose",v);const E=t.get(x);E!==void 0&&(t.delete(x),E.dispose())}function m(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:s,dispose:m}}function p2(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const s=n.getExtension(r);return e[r]=s,s}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const s=t(r);return s===null&&kc("WebGLRenderer: "+r+" extension not supported."),s}}}function m2(n,e,t,r){const s={},o=new WeakMap,u=new FinalizationRegistry(E=>delete s[E]);function d(E){f(E.target)}function f(E){E.index!==null&&e.remove(E.index);for(const y in E.attributes)e.remove(E.attributes[y]);E.removeEventListener("dispose",d),delete s[E.id],u.unregister(E);const R=o.get(E);R&&(e.remove(R),o.delete(E)),r.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,t.memory.geometries--}function h(E,R){return s[R.id]!==void 0||(R.addEventListener("dispose",d),s[R.id]=new WeakRef(R),u.register(R,R.id,R),t.memory.geometries++),R}function v(E){const R=E.attributes;for(const y in R)e.update(R[y],n.ARRAY_BUFFER)}function m(E){const R=E.index,y=E.attributes.position;let S=0;if(y===void 0)return;const w=R!==null?R.array.length:y.array.length/3-1,N=y.count>=65535?Wx:Vx,D=new N(Math.ceil(w/3)*6,1),U=D.array;if(R!==null){const b=R.array;S=R.version;for(let P=0,G=0;P<w;P+=3){const O=b[P+0],B=b[P+1],V=b[P+2];U[G++]=O,U[G++]=B,U[G++]=B,U[G++]=V,U[G++]=V,U[G++]=O}}else{S=y.version;for(let b=0,P=0;b<w;b+=3){const G=b+0,O=b+1,B=b+2;U[P++]=G,U[P++]=O,U[P++]=O,U[P++]=B,U[P++]=B,U[P++]=G}}D.version=S;const I=o.get(E);I&&e.remove(I),o.set(E,D)}function g(E){const R=o.get(E);if(R){const y=E.index;y!==null&&R.version<y.version&&m(E)}else m(E);return o.get(E)}function x(){for(const E in s){const R=s[E].deref();R!==void 0&&f(R)}}return{get:h,update:v,getWireframeAttribute:g,dispose:x}}function g2(n,e,t){let r;function s(m){r=m}let o,u;function d(m){o=m.type,u=m.bytesPerElement}function f(m,g){n.drawElements(r,g,o,m*u),t.update(g,r,1)}function h(m,g,x){x!==0&&(n.drawElementsInstanced(r,g,o,m*u,x),t.update(g,r,x))}function v(m,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,o,m,0,x);let R=0;for(let y=0;y<x;y++)R+=g[y];t.update(R,r,1)}this.setMode=s,this.setIndex=d,this.render=f,this.renderInstances=h,this.renderMultiDraw=v}function v2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,u,d){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=d*(o/3);break;case n.LINES:t.lines+=d*(o/2);break;case n.LINE_STRIP:t.lines+=d*(o-1);break;case n.LINE_LOOP:t.lines+=d*o;break;case n.POINTS:t.points+=d*o;break;default:Ot("WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:r}}function _2(n,e,t){const r=new WeakMap,s=new rn;function o(u,d,f){const h=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=v!==void 0?v.length:0;let g=r.get(d);if(g===void 0||g.count!==m){let G=function(){b.dispose(),r.delete(d),d.removeEventListener("dispose",G)};g!==void 0&&g.texture.dispose();const x=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],w=d.morphAttributes.color||[];let N=0;x===!0&&(N=1),E===!0&&(N=2),R===!0&&(N=3);let D=d.attributes.position.count*N,U=1;D>e.maxTextureSize&&(U=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const I=new Float32Array(D*U*4*m),b=new Hx(I,D,U,m);b.type=xr,b.needsUpdate=!0;const P=N*4;for(let O=0;O<m;O++){const B=y[O],V=S[O],X=w[O],k=D*U*4*O;for(let ae=0;ae<B.count;ae++){const ie=ae*P;x===!0&&(s.fromBufferAttribute(B,ae),I[k+ie+0]=s.x,I[k+ie+1]=s.y,I[k+ie+2]=s.z,I[k+ie+3]=0),E===!0&&(s.fromBufferAttribute(V,ae),I[k+ie+4]=s.x,I[k+ie+5]=s.y,I[k+ie+6]=s.z,I[k+ie+7]=0),R===!0&&(s.fromBufferAttribute(X,ae),I[k+ie+8]=s.x,I[k+ie+9]=s.y,I[k+ie+10]=s.z,I[k+ie+11]=X.itemSize===4?s.w:1)}}g={count:m,texture:b,size:new Et(D,U)},r.set(d,g),d.addEventListener("dispose",G)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let x=0;for(let R=0;R<h.length;R++)x+=h[R];const E=d.morphTargetsRelative?1:1-x;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",h)}f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:o}}function y2(n,e,t,r,s){let o=new WeakMap;function u(h){const v=s.render.frame,m=h.geometry,g=e.get(h,m);if(o.get(g)!==v&&(e.update(g),o.set(g,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==v&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),o.set(h,v))),h.isSkinnedMesh){const x=h.skeleton;o.get(x)!==v&&(x.update(),o.set(x,v))}return g}function d(){o=new WeakMap}function f(h){const v=h.target;v.removeEventListener("dispose",f),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:d}}const S2={[Ex]:"LINEAR_TONE_MAPPING",[bx]:"REINHARD_TONE_MAPPING",[wx]:"CINEON_TONE_MAPPING",[Rm]:"ACES_FILMIC_TONE_MAPPING",[Rx]:"AGX_TONE_MAPPING",[Ax]:"NEUTRAL_TONE_MAPPING",[Tx]:"CUSTOM_TONE_MAPPING"};function x2(n,e,t,r,s,o){const u=new wr(e,t,{type:n,depthBuffer:s,stencilBuffer:o,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,f=null,h=null;const v=new Jr;v.setAttribute("position",new $n([-1,3,0,-1,-1,0,3,-1,0],3)),v.setAttribute("uv",new $n([0,2,0,0,2,0],2));const m=new lC({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Ua(v,m),x=new Jx(-1,1,1,-1,0,1);let E=null,R=null,y=!1,S,w=null,N=[],D=!1;this.setSize=function(U,I){u.setSize(U,I),d!==null&&d.setSize(U,I),f!==null&&f.setSize(U,I);for(let b=0;b<N.length;b++){const P=N[b];P.setSize&&P.setSize(U,I)}},this.setEffects=function(U){N=U,D=N.length>0&&N[0].isRenderPass===!0;const I=u.width,b=u.height;N.length>0&&d===null&&(d=new wr(I,b,{type:Rr,depthBuffer:!1,stencilBuffer:!1}),f=new wr(I,b,{type:Rr,depthBuffer:!1,stencilBuffer:!1}));const P=s===!0&&N.some(G=>G.needsDepthTexture===!0);P!==(u.depthTexture!==null)&&(P===!0&&h===null&&(h=new mo(I,b),o===!0&&(h.format=Da,h.type=po)),u.dispose(),u.depthTexture=P?h:null,u.resolveDepthBuffer=P,u.storeMultisampledDepthBuffer=P);for(let G=0;G<N.length;G++){const O=N[G];O.setSize&&O.setSize(I,b),P&&O.needsDepthTexture===!0&&O.setDepthTexture&&O.setDepthTexture(h)}},this.begin=function(U,I){if(y||U.toneMapping===Xr&&N.length===0)return!1;if(w=I,I!==null){const b=I.width,P=I.height;(u.width!==b||u.height!==P)&&this.setSize(b,P)}return D===!1&&U.setRenderTarget(u),S=U.toneMapping,U.toneMapping=Xr,!0},this.hasRenderPass=function(){return D},this.end=function(U,I){U.toneMapping=S,y=!0;let b=u,P=d;for(let G=0;G<N.length;G++){const O=N[G];O.enabled!==!1&&(O.render(U,P,b,I),O.needsSwap!==!1&&(b=P,P=P===d?f:d))}if(E!==U.outputColorSpace||R!==U.toneMapping){E=U.outputColorSpace,R=U.toneMapping,m.defines={},wt.getTransfer(E)===Ft&&(m.defines.SRGB_TRANSFER="");const G=S2[R];G&&(m.defines[G]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=b.texture,U.setRenderTarget(w),U.render(g,x),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),d!==null&&d.dispose(),f!==null&&f.dispose(),v.dispose(),m.dispose()}}const iM=new Bn,rM=new mo(1,1),aM=new qx(1),sM=new Hx,oM=new zA,lM=new Xx,Ty=[],Ry=[],Ay=new Float32Array(16),Cy=new Float32Array(9),Py=new Float32Array(4);function So(n,e,t){const r=n[0];if(r<=0||r>0)return n;const s=e*t;let o=Ty[s];if(o===void 0&&(o=new Float32Array(s),Ty[s]=o),e!==0){r.toArray(o,0);for(let u=1,d=0;u!==e;++u)d+=t,n[u].toArray(o,d)}return o}function xn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function Mn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function od(n,e){let t=Ry[e];t===void 0&&(t=new Int32Array(e),Ry[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function M2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function E2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2fv(this.addr,e),Mn(t,e)}}function b2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;n.uniform3fv(this.addr,e),Mn(t,e)}}function w2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4fv(this.addr,e),Mn(t,e)}}function T2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mn(t,e)}else{if(xn(t,r))return;Py.set(r),n.uniformMatrix2fv(this.addr,!1,Py),Mn(t,r)}}function R2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mn(t,e)}else{if(xn(t,r))return;Cy.set(r),n.uniformMatrix3fv(this.addr,!1,Cy),Mn(t,r)}}function A2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mn(t,e)}else{if(xn(t,r))return;Ay.set(r),n.uniformMatrix4fv(this.addr,!1,Ay),Mn(t,r)}}function C2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function P2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2iv(this.addr,e),Mn(t,e)}}function L2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;n.uniform3iv(this.addr,e),Mn(t,e)}}function D2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4iv(this.addr,e),Mn(t,e)}}function I2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function N2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2uiv(this.addr,e),Mn(t,e)}}function O2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;n.uniform3uiv(this.addr,e),Mn(t,e)}}function U2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4uiv(this.addr,e),Mn(t,e)}}function ld(n){return n.version===0&&(n.compareFunction=Bx,n.needsUpdate=!0),n}function F2(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?o=ld(rM):o=iM,t.setTexture2D(e||o,s)}function k2(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s),t.setTexture3D(e||oM,s)}function B2(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s);let o;this.type===n.SAMPLER_CUBE_SHADOW?o=ld(aM):o=lM,t.setTextureCube(e||o,s)}function z2(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s),t.setTexture2DArray(e||sM,s)}function H2(n){switch(n){case 5126:return M2;case 35664:return E2;case 35665:return b2;case 35666:return w2;case 35674:return T2;case 35675:return R2;case 35676:return A2;case 5124:case 35670:return C2;case 35667:case 35671:return P2;case 35668:case 35672:return L2;case 35669:case 35673:return D2;case 5125:return I2;case 36294:return N2;case 36295:return O2;case 36296:return U2;case 35678:case 36198:case 36298:case 36306:case 35682:return F2;case 35679:case 36299:case 36307:return k2;case 35680:case 36300:case 36308:case 36293:return B2;case 36289:case 36303:case 36311:case 36292:return z2}}function G2(n,e){n.uniform1fv(this.addr,e)}function V2(n,e){const t=So(e,this.size,2);n.uniform2fv(this.addr,t)}function W2(n,e){const t=So(e,this.size,3);n.uniform3fv(this.addr,t)}function $2(n,e){const t=So(e,this.size,4);n.uniform4fv(this.addr,t)}function X2(n,e){const t=So(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function q2(n,e){const t=So(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Y2(n,e){const t=So(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function K2(n,e){n.uniform1iv(this.addr,e)}function Z2(n,e){n.uniform2iv(this.addr,e)}function j2(n,e){n.uniform3iv(this.addr,e)}function J2(n,e){n.uniform4iv(this.addr,e)}function Q2(n,e){n.uniform1uiv(this.addr,e)}function e3(n,e){n.uniform2uiv(this.addr,e)}function t3(n,e){n.uniform3uiv(this.addr,e)}function n3(n,e){n.uniform4uiv(this.addr,e)}function i3(n,e,t){const r=this.cache,s=e.length,o=od(t,s);xn(r,o)||(n.uniform1iv(this.addr,o),Mn(r,o));let u;this.type===n.SAMPLER_2D_SHADOW?u=ld(rM):u=iM;for(let d=0;d!==s;++d)t.setTexture2D(e[d]||u,o[d])}function r3(n,e,t){const r=this.cache,s=e.length,o=od(t,s);xn(r,o)||(n.uniform1iv(this.addr,o),Mn(r,o));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||oM,o[u])}function a3(n,e,t){const r=this.cache,s=e.length,o=od(t,s);xn(r,o)||(n.uniform1iv(this.addr,o),Mn(r,o));let u;this.type===n.SAMPLER_CUBE_SHADOW?u=ld(aM):u=lM;for(let d=0;d!==s;++d)t.setTextureCube(e[d]||u,o[d])}function s3(n,e,t){const r=this.cache,s=e.length,o=od(t,s);xn(r,o)||(n.uniform1iv(this.addr,o),Mn(r,o));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||sM,o[u])}function o3(n){switch(n){case 5126:return G2;case 35664:return V2;case 35665:return W2;case 35666:return $2;case 35674:return X2;case 35675:return q2;case 35676:return Y2;case 5124:case 35670:return K2;case 35667:case 35671:return Z2;case 35668:case 35672:return j2;case 35669:case 35673:return J2;case 5125:return Q2;case 36294:return e3;case 36295:return t3;case 36296:return n3;case 35678:case 36198:case 36298:case 36306:case 35682:return i3;case 35679:case 36299:case 36307:return r3;case 35680:case 36300:case 36308:case 36293:return a3;case 36289:case 36303:case 36311:case 36292:return s3}}class l3{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=H2(t.type)}}class u3{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=o3(t.type)}}class c3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const s=this.seq;for(let o=0,u=s.length;o!==u;++o){const d=s[o];d.setValue(e,t[d.id],r)}}}const Gh=/(\w+)(\])?(\[|\.)?/g;function Ly(n,e){n.seq.push(e),n.map[e.id]=e}function d3(n,e,t){const r=n.name,s=r.length;for(Gh.lastIndex=0;;){const o=Gh.exec(r),u=Gh.lastIndex;let d=o[1];const f=o[2]==="]",h=o[3];if(f&&(d=d|0),h===void 0||h==="["&&u+2===s){Ly(t,h===void 0?new l3(d,n,e):new u3(d,n,e));break}else{let m=t.map[d];m===void 0&&(m=new c3(d),Ly(t,m)),t=m}}}class Bc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(t,u),f=e.getUniformLocation(t,d.name);d3(d,f,this)}const s=[],o=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(u):o.push(u);s.length>0&&(this.seq=s.concat(o))}setValue(e,t,r,s){const o=this.map[t];o!==void 0&&o.setValue(e,r,s)}setOptional(e,t,r){const s=t[r];s!==void 0&&this.setValue(e,r,s)}static upload(e,t,r,s){for(let o=0,u=t.length;o!==u;++o){const d=t[o],f=r[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,s)}}static seqWithValue(e,t){const r=[];for(let s=0,o=e.length;s!==o;++s){const u=e[s];u.id in t&&r.push(u)}return r}}function Dy(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const f3=37297;let h3=0;function p3(n,e){const t=n.split(`
`),r=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=s;u<o;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const Iy=new ht;function m3(n){wt._getMatrix(Iy,wt.workingColorSpace,n);const e=`mat3( ${Iy.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(n)){case Zc:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ny(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),o=(n.getShaderInfoLog(e)||"").trim();if(r&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+o+`

`+p3(n.getShaderSource(e),d)}else return o}function g3(n,e){const t=m3(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const v3={[Ex]:"Linear",[bx]:"Reinhard",[wx]:"Cineon",[Rm]:"ACESFilmic",[Rx]:"AgX",[Ax]:"Neutral",[Tx]:"Custom"};function _3(n,e){const t=v3[e];return t===void 0?(dt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rc=new ce;function y3(){wt.getLuminanceCoefficients(Rc);const n=Rc.x.toFixed(4),e=Rc.y.toFixed(4),t=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vl).join(`
`)}function x3(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function M3(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<r;s++){const o=n.getActiveAttrib(e,s),u=o.name;let d=1;o.type===n.FLOAT_MAT2&&(d=2),o.type===n.FLOAT_MAT3&&(d=3),o.type===n.FLOAT_MAT4&&(d=4),t[u]={type:o.type,location:n.getAttribLocation(e,u),locationSize:d}}return t}function vl(n){return n!==""}function Oy(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Uy(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E3=/^[ \t]*#include +<([\w\d./]+)>/gm;function hm(n){return n.replace(E3,b3)}function b3(n,e){const t=_t[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return hm(t)}const w3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fy(n){return n.replace(w3,T3)}function T3(n,e,t,r){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function ky(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const R3={[Ic]:"SHADOWMAP_TYPE_PCF",[ml]:"SHADOWMAP_TYPE_VSM"};function A3(n){return R3[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const C3={[Pl]:"ENVMAP_MODE_REFRACTION"};function P3(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":C3[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const L3={[Mx]:"ENVMAP_BLENDING_MULTIPLY",[mA]:"ENVMAP_BLENDING_MIX",[gA]:"ENVMAP_BLENDING_ADD"};function D3(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":L3[n.combine]||"ENVMAP_BLENDING_NONE"}function I3(n,e,t,r){const s=n.getContext(),o=t.defines;let u=t.vertexShader,d=t.fragmentShader;const f=A3(t),h=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",v=P3(t),m=D3(t),g=S3(t),x=x3(o),E=s.createProgram();let R,y,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(R=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(vl).join(`
`),R.length>0&&(R+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(vl).join(`
`),y.length>0&&(y+=`
`)):(R=[ky(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vl).join(`
`),y=[ky(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+v:"",t.envMap?"#define "+m:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xr?"#define TONE_MAPPING":"",t.toneMapping!==Xr?_t.tonemapping_pars_fragment:"",t.toneMapping!==Xr?_3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,g3("linearToOutputTexel",t.outputColorSpace),y3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vl).join(`
`)),u=hm(u),u=Oy(u,t),u=Uy(u,t),d=hm(d),d=Oy(d,t),d=Uy(d,t),u=Fy(u),d=Fy(d),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,R=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,y=["#define varying in",t.glslVersion===K_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===K_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const w=S+R+u,N=S+y+d,D=Dy(s,s.VERTEX_SHADER,w),U=Dy(s,s.FRAGMENT_SHADER,N);s.attachShader(E,D),s.attachShader(E,U),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function I(O){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(E)||"",V=s.getShaderInfoLog(D)||"",X=s.getShaderInfoLog(U)||"",k=B.trim(),ae=V.trim(),ie=X.trim();let te=!0,j=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,D,U);else{const Y=Ny(s,D,"vertex"),J=Ny(s,U,"fragment");Ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+k+`
`+Y+`
`+J)}else k!==""?dt("WebGLProgram: Program Info Log:",k):(ae===""||ie==="")&&(j=!1);j&&(O.diagnostics={runnable:te,programLog:k,vertexShader:{log:ae,prefix:R},fragmentShader:{log:ie,prefix:y}})}s.deleteShader(D),s.deleteShader(U),b=new Bc(s,E),P=M3(s,E)}let b;this.getUniforms=function(){return b===void 0&&I(this),b};let P;this.getAttributes=function(){return P===void 0&&I(this),P};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=s.getProgramParameter(E,f3)),G},this.destroy=function(){r.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=h3++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=D,this.fragmentShader=U,this}let N3=0;class O3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new U3(e),t.set(e,r)),r}}class U3{constructor(e){this.id=N3++,this.code=e,this.usedTimes=0}}function F3(n){return n===fs||n===qc||n===Yc}function k3(n,e,t,r,s,o){const u=new Um,d=new O3,f=new Set,h=[],v=new Map,m=r.logarithmicDepthBuffer,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return f.add(b),b===0?"uv":`uv${b}`}function E(b,P,G,O,B,V){const X=O.fog,k=B.geometry,ae=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,ie=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,te=e.get(b.envMap||ae,ie),j=g[b.type];let Y=r.precision;b.precision!==null&&(Y=r.getMaxPrecision(b.precision),Y!==b.precision&&dt("WebGLProgram.getParameters:",b.precision,"not supported, using",Y,"instead."));const J=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,F=J!==void 0?J.length:0;let ee=0;k.morphAttributes.position!==void 0&&(ee=1),k.morphAttributes.normal!==void 0&&(ee=2),k.morphAttributes.color!==void 0&&(ee=3);let Ae,ne,xe,Ee;if(j){const He=gr[j];Ae=He.vertexShader,ne=He.fragmentShader}else{Ae=b.vertexShader,ne=b.fragmentShader;const He=d.getVertexShaderStage(b),St=d.getFragmentShaderStage(b);d.update(b,He,St),xe=He.id,Ee=St.id}const Ce=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),Be=B.isInstancedMesh===!0,mt=B.isBatchedMesh===!0,Ze=!!b.map,lt=!!b.matcap,vt=!!te,ut=vt&&te.isPMREMTexture===!0,kt=!!b.aoMap,Bt=!!b.lightMap,Zt=!!b.bumpMap&&b.wireframe===!1,Lt=!!b.normalMap,vn=!!b.displacementMap,Dt=!!b.emissiveMap,jt=!!b.metalnessMap,an=!!b.roughnessMap,hn=b.anisotropy>0,K=b.clearcoat>0,pn=b.diffuseRoughness>0,At=b.dispersion>0,Ct=b.retroreflectivity>0,Ie=b.iridescence>0,he=b.sheen>0,ve=b.transmission>0,ye=hn&&!!b.anisotropyMap,C=K&&!!b.clearcoatMap,T=K&&!!b.clearcoatNormalMap,$=K&&!!b.clearcoatRoughnessMap,me=pn&&!!b.diffuseRoughnessMap,Q=Ie&&!!b.iridescenceMap,Me=Ie&&!!b.iridescenceThicknessMap,be=he&&!!b.sheenColorMap,de=he&&!!b.sheenRoughnessMap,ge=!!b.specularMap,Le=!!b.specularColorMap,H=!!b.specularIntensityMap,Se=ve&&!!b.transmissionMap,pe=ve&&!!b.thicknessMap,Ue=!!b.gradientMap,De=!!b.alphaMap,Ne=b.alphaTest>0,je=!!b.alphaHash,ft=!!b.extensions;let Te=Xr;b.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(Te=n.toneMapping);const tt=ut?te.isCompressedCubeTexture?te.image[0].mipmaps:te.mipmaps:null,ot={shaderID:j,shaderType:b.type,shaderName:b.name,vertexShader:Ae,fragmentShader:ne,defines:b.defines,customVertexShaderID:xe,customFragmentShaderID:Ee,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:Y,batching:mt,batchingColor:mt&&B._colorsTexture!==null,instancing:Be,instancingColor:Be&&B.instanceColor!==null,instancingMorph:Be&&B.morphTexture!==null,outputColorSpace:Ce===null?n.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Ze,matcap:lt,envMap:vt,envMapMode:vt&&te.mapping,envMapPMREM:ut,envMapMaxLod:ut?tt.length-1:null,envMapSize:ut?tt[0].width:null,aoMap:kt,lightMap:Bt,bumpMap:Zt,normalMap:Lt,displacementMap:vn,emissiveMap:Dt,normalMapObjectSpace:Lt&&b.normalMapType===yA,normalMapTangentSpace:Lt&&b.normalMapType===um,packedNormalMap:Lt&&b.normalMapType===um&&F3(b.normalMap.format),metalnessMap:jt,roughnessMap:an,anisotropy:hn,anisotropyMap:ye,clearcoat:K,clearcoatMap:C,clearcoatNormalMap:T,clearcoatRoughnessMap:$,diffuseRoughness:pn,diffuseRoughnessMap:me,dispersion:At,retroreflection:Ct,iridescence:Ie,iridescenceMap:Q,iridescenceThicknessMap:Me,sheen:he,sheenColorMap:be,sheenRoughnessMap:de,specularMap:ge,specularColorMap:Le,specularIntensityMap:H,transmission:ve,transmissionMap:Se,thicknessMap:pe,gradientMap:Ue,opaque:b.transparent===!1&&b.blending===Ml&&b.alphaToCoverage===!1,alphaMap:De,alphaTest:Ne,alphaHash:je,combine:b.combine,mapUv:Ze&&x(b.map.channel),aoMapUv:kt&&x(b.aoMap.channel),lightMapUv:Bt&&x(b.lightMap.channel),bumpMapUv:Zt&&x(b.bumpMap.channel),normalMapUv:Lt&&x(b.normalMap.channel),displacementMapUv:vn&&x(b.displacementMap.channel),emissiveMapUv:Dt&&x(b.emissiveMap.channel),metalnessMapUv:jt&&x(b.metalnessMap.channel),roughnessMapUv:an&&x(b.roughnessMap.channel),anisotropyMapUv:ye&&x(b.anisotropyMap.channel),clearcoatMapUv:C&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:T&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&x(b.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:me&&x(b.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:de&&x(b.sheenRoughnessMap.channel),specularMapUv:ge&&x(b.specularMap.channel),specularColorMapUv:Le&&x(b.specularColorMap.channel),specularIntensityMapUv:H&&x(b.specularIntensityMap.channel),transmissionMapUv:Se&&x(b.transmissionMap.channel),thicknessMapUv:pe&&x(b.thicknessMap.channel),alphaMapUv:De&&x(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Lt||hn),vertexNormals:!!k.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(Ze||De),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||k.attributes.normal===void 0&&Lt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:_e,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ee,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:V.filter(He=>He.texture!==null).length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:Te,decodeVideoTexture:Ze&&b.map.isVideoTexture===!0&&wt.getTransfer(b.map.colorSpace)===Ft,decodeVideoTextureEmissive:Dt&&b.emissiveMap.isVideoTexture===!0&&wt.getTransfer(b.emissiveMap.colorSpace)===Ft,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===_r,flipSided:b.side===ii,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ft&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&b.extensions.multiDraw===!0||mt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ot.vertexUv1s=f.has(1),ot.vertexUv2s=f.has(2),ot.vertexUv3s=f.has(3),f.clear(),ot}function R(b){const P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(const G in b.defines)P.push(G),P.push(b.defines[G]);return b.isRawShaderMaterial===!1&&(y(P,b),S(P,b),P.push(n.outputColorSpace)),P.push(b.customProgramCacheKey),P.join()}function y(b,P){b.push(P.precision),b.push(P.outputColorSpace),b.push(P.envMapMode),b.push(P.envMapPMREM),b.push(P.envMapMaxLod),b.push(P.envMapSize),b.push(P.mapUv),b.push(P.alphaMapUv),b.push(P.lightMapUv),b.push(P.aoMapUv),b.push(P.bumpMapUv),b.push(P.normalMapUv),b.push(P.displacementMapUv),b.push(P.emissiveMapUv),b.push(P.metalnessMapUv),b.push(P.roughnessMapUv),b.push(P.anisotropyMapUv),b.push(P.clearcoatMapUv),b.push(P.clearcoatNormalMapUv),b.push(P.clearcoatRoughnessMapUv),b.push(P.diffuseRoughnessMapUv),b.push(P.iridescenceMapUv),b.push(P.iridescenceThicknessMapUv),b.push(P.sheenColorMapUv),b.push(P.sheenRoughnessMapUv),b.push(P.specularMapUv),b.push(P.specularColorMapUv),b.push(P.specularIntensityMapUv),b.push(P.transmissionMapUv),b.push(P.thicknessMapUv),b.push(P.combine),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.numSunLights),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numSunLightShadows),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.numLightProbes),b.push(P.numLightProbeGrids),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function S(b,P){u.disableAll(),P.instancing&&u.enable(0),P.instancingColor&&u.enable(1),P.instancingMorph&&u.enable(2),P.matcap&&u.enable(3),P.envMap&&u.enable(4),P.normalMapObjectSpace&&u.enable(5),P.normalMapTangentSpace&&u.enable(6),P.clearcoat&&u.enable(7),P.iridescence&&u.enable(8),P.alphaTest&&u.enable(9),P.vertexColors&&u.enable(10),P.vertexAlphas&&u.enable(11),P.vertexUv1s&&u.enable(12),P.vertexUv2s&&u.enable(13),P.vertexUv3s&&u.enable(14),P.vertexTangents&&u.enable(15),P.anisotropy&&u.enable(16),P.alphaHash&&u.enable(17),P.batching&&u.enable(18),P.dispersion&&u.enable(19),P.retroreflection&&u.enable(24),P.diffuseRoughness&&u.enable(25),P.batchingColor&&u.enable(20),P.gradientMap&&u.enable(21),P.packedNormalMap&&u.enable(22),P.vertexNormals&&u.enable(23),b.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reversedDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),P.numLightProbeGrids>0&&u.enable(22),P.hasPositionAttribute&&u.enable(23),b.push(u.mask)}function w(b){const P=g[b.type];let G;if(P){const O=gr[P];G=aC.clone(O.uniforms)}else G=b.uniforms;return G}function N(b,P){let G=v.get(P);return G!==void 0?++G.usedTimes:(G=new I3(n,P,b,s),h.push(G),v.set(P,G)),G}function D(b){if(--b.usedTimes===0){const P=h.indexOf(b);h[P]=h[h.length-1],h.pop(),v.delete(b.cacheKey),b.destroy()}}function U(b){d.remove(b)}function I(){d.dispose()}return{getParameters:E,getProgramCacheKey:R,getUniforms:w,acquireProgram:N,releaseProgram:D,releaseShaderCache:U,programs:h,dispose:I}}function B3(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let d=n.get(u);return d===void 0&&(d={},n.set(u,d)),d}function r(u){n.delete(u)}function s(u,d,f){n.get(u)[d]=f}function o(){n=new WeakMap}return{has:e,get:t,remove:r,update:s,dispose:o}}function z3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function By(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zy(){const n=[];let e=0;const t=[],r=[],s=[];function o(){e=0,t.length=0,r.length=0,s.length=0}function u(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function d(g,x,E,R,y,S){let w=n[e];return w===void 0?(w={id:g.id,object:g,geometry:x,material:E,materialVariant:u(g),groupOrder:R,renderOrder:g.renderOrder,z:y,group:S},n[e]=w):(w.id=g.id,w.object=g,w.geometry=x,w.material=E,w.materialVariant=u(g),w.groupOrder=R,w.renderOrder=g.renderOrder,w.z=y,w.group=S),e++,w}function f(g,x,E,R,y,S,w){w.reversedDepth===!0&&(y=-y);const N=d(g,x,E,R,y,S);E.transmission>0?r.push(N):E.transparent===!0?s.push(N):t.push(N)}function h(g,x,E,R,y,S){const w=d(g,x,E,R,y,S);E.transmission>0?r.unshift(w):E.transparent===!0?s.unshift(w):t.unshift(w)}function v(g,x){t.length>1&&t.sort(g||z3),r.length>1&&r.sort(x||By),s.length>1&&s.sort(x||By)}function m(){for(let g=e,x=n.length;g<x;g++){const E=n[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:s,init:o,push:f,unshift:h,finish:m,sort:v}}function H3(){let n=new WeakMap;function e(r,s){const o=n.get(r);let u;return o===void 0?(u=new zy,n.set(r,[u])):s>=o.length?(u=new zy,o.push(u)):u=o[s],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function G3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ce,color:new Mt};break;case"SpotLight":t={position:new ce,direction:new ce,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ce,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ce,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":t={color:new Mt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return n[e.id]=t,t}}}function V3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let W3=0;function $3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function X3(n){const e=new G3,t=V3(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ce);const s=new ce,o=new en,u=new en;function d(h){let v=0,m=0,g=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let x=0,E=0,R=0,y=0,S=0,w=0,N=0,D=0,U=0,I=0,b=0,P=0,G=0,O=0;h.sort($3);for(let V=0,X=h.length;V<X;V++){const k=h[V],ae=k.color,ie=k.intensity,te=k.distance;let j=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===fs?j=k.shadow.map.texture:j=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)v+=ae.r*ie,m+=ae.g*ie,g+=ae.b*ie;else if(k.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(k.sh.coefficients[Y],ie);O++}else if(k.isSunLight){const Y=e.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const J=k.shadow,F=t.get(k);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),r.sunShadow[E]=F,r.sunShadowMap[E]=j;const ee=J.getViewportCount();for(let Ae=0;Ae<ee;Ae++)r.sunShadowMatrix[R+Ae]=J.getMatrix(Ae),r.sunShadowCascade[R+Ae]=J._cascadeData[Ae];R+=ee,E++}r.sun[x]=Y,x++}else if(k.isDirectionalLight){const Y=e.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const J=k.shadow,F=t.get(k);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,r.directionalShadow[y]=F,r.directionalShadowMap[y]=j,r.directionalShadowMatrix[y]=k.shadow.matrix,U++}r.directional[y]=Y,y++}else if(k.isSpotLight){const Y=e.get(k);Y.position.setFromMatrixPosition(k.matrixWorld),Y.color.copy(ae).multiplyScalar(ie),Y.distance=te,Y.coneCos=Math.cos(k.angle),Y.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Y.decay=k.decay,r.spot[w]=Y;const J=k.shadow;if(k.map&&(r.spotLightMap[P]=k.map,P++,J.updateMatrices(k),k.castShadow&&G++),r.spotLightMatrix[w]=J.matrix,k.castShadow){const F=t.get(k);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,r.spotShadow[w]=F,r.spotShadowMap[w]=j,b++}w++}else if(k.isRectAreaLight){const Y=e.get(k);Y.color.copy(ae).multiplyScalar(ie),Y.halfWidth.set(k.width*.5,0,0),Y.halfHeight.set(0,k.height*.5,0),r.rectArea[N]=Y,N++}else if(k.isPointLight){const Y=e.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity),Y.distance=k.distance,Y.decay=k.decay,k.castShadow){const J=k.shadow,F=t.get(k);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,F.shadowCameraNear=J.camera.near,F.shadowCameraFar=J.camera.far,r.pointShadow[S]=F,r.pointShadowMap[S]=j,r.pointShadowMatrix[S]=k.shadow.matrix,I++}r.point[S]=Y,S++}else if(k.isHemisphereLight){const Y=e.get(k);Y.skyColor.copy(k.color).multiplyScalar(ie),Y.groundColor.copy(k.groundColor).multiplyScalar(ie),r.hemi[D]=Y,D++}}N>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ge.LTC_FLOAT_1,r.rectAreaLTC2=Ge.LTC_FLOAT_2):(r.rectAreaLTC1=Ge.LTC_HALF_1,r.rectAreaLTC2=Ge.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=m,r.ambient[2]=g;const B=r.hash;(B.sunLength!==x||B.directionalLength!==y||B.pointLength!==S||B.spotLength!==w||B.rectAreaLength!==N||B.hemiLength!==D||B.numSunShadows!==E||B.numDirectionalShadows!==U||B.numPointShadows!==I||B.numSpotShadows!==b||B.numSpotMaps!==P||B.numLightProbes!==O)&&(r.sun.length=x,r.directional.length=y,r.spot.length=w,r.rectArea.length=N,r.point.length=S,r.hemi.length=D,r.sunShadow.length=E,r.sunShadowMap.length=E,r.sunShadowMatrix.length=R,r.sunShadowCascade.length=R,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.directionalShadowMatrix.length=U,r.pointShadow.length=I,r.pointShadowMap.length=I,r.pointShadowMatrix.length=I,r.spotShadow.length=b,r.spotShadowMap.length=b,r.spotLightMatrix.length=b+P-G,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=O,B.sunLength=x,B.directionalLength=y,B.pointLength=S,B.spotLength=w,B.rectAreaLength=N,B.hemiLength=D,B.numSunShadows=E,B.numDirectionalShadows=U,B.numPointShadows=I,B.numSpotShadows=b,B.numSpotMaps=P,B.numLightProbes=O,r.version=W3++)}function f(h,v){let m=0,g=0,x=0,E=0,R=0,y=0;const S=v.matrixWorldInverse;for(let w=0,N=h.length;w<N;w++){const D=h[w];if(D.isSunLight){const U=r.sun[m];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(S),m++}else if(D.isDirectionalLight){const U=r.directional[g];U.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(s),U.direction.transformDirection(S),g++}else if(D.isSpotLight){const U=r.spot[E];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(s),U.direction.transformDirection(S),E++}else if(D.isRectAreaLight){const U=r.rectArea[R];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(S),u.identity(),o.copy(D.matrixWorld),o.premultiply(S),u.extractRotation(o),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(u),U.halfHeight.applyMatrix4(u),R++}else if(D.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(S),x++}else if(D.isHemisphereLight){const U=r.hemi[y];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(S),y++}}}return{setup:d,setupView:f,state:r}}function Hy(n){const e=new X3(n),t=[],r=[],s=[];function o(m){v.camera=m,t.length=0,r.length=0,s.length=0}function u(m){m.isLightProbeGrid?s.push(m):t.push(m)}function d(m){r.push(m)}function f(){e.setup(t),s.sort((m,g)=>m.priority-g.priority||m.id-g.id)}function h(m){e.setupView(t,m)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:v,setupLights:f,setupLightsView:h,pushLight:u,pushShadow:d}}function q3(n){let e=new WeakMap;function t(s,o=0){const u=e.get(s);let d;return u===void 0?(d=new Hy(n),e.set(s,[d])):o>=u.length?(d=new Hy(n),u.push(d)):d=u[o],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const Y3=`void main() {
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
}`,Z3=[new ce(1,0,0),new ce(-1,0,0),new ce(0,1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1)],j3=[new ce(0,-1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,-1,0),new ce(0,-1,0)],Gy=new en,ll=new ce,Vh=new ce;function J3(n,e,t){let r=new Il;const s=new Et,o=new Et,u=new rn,d=new cC,f=new dC,h={},v=t.maxTextureSize,m={[ds]:ii,[ii]:ds,[_r]:_r},g=new hs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:Y3,fragmentShader:K3}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const E=new Jr;E.setAttribute("position",new cs(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ua(E,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ic;let S=this.type;this.render=function(I,b,P){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;this.type===yx&&(dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ic);const G=n.getRenderTarget(),O=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),V=n.state;V.setBlending(oo),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const X=S!==this.type;X&&b.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(ae=>ae.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,ae=I.length;k<ae;k++){const ie=I[k],te=ie.shadow;if(te===void 0){dt("WebGLShadowMap:",ie,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;s.copy(te.mapSize);const j=te.getFrameExtents();s.multiply(j),o.copy(te.mapSize),(s.x>v||s.y>v)&&(s.x>v&&(o.x=Math.floor(v/j.x),s.x=o.x*j.x,te.mapSize.x=o.x),s.y>v&&(o.y=Math.floor(v/j.y),s.y=o.y*j.y,te.mapSize.y=o.y));const Y=n.state.buffers.depth.getReversed();if(te.camera._reversedDepth=Y,te.map===null||X===!0){if(te.map!==null&&(te.map.depthTexture!==null&&(te.map.depthTexture.dispose(),te.map.depthTexture=null),te.map.dispose()),this.type===ml){if(ie.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}te.map=new wr(s.x,s.y,{format:fs,type:Rr,minFilter:ti,magFilter:ti,generateMipmaps:!1}),te.map.texture.name=ie.name+".shadowMap",te.map.depthTexture=new mo(s.x,s.y,xr),te.map.depthTexture.name=ie.name+".shadowMapDepth",te.map.depthTexture.format=Oa,te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=Cn,te.map.depthTexture.magFilter=Cn}else ie.isPointLight?(te.map=new Gm(s.x),te.map.depthTexture=new qx(s.x,Tr)):(te.map=new wr(s.x,s.y),te.map.depthTexture=new mo(s.x,s.y,Tr)),te.map.depthTexture.name=ie.name+".shadowMap",te.map.depthTexture.format=Oa,this.type===Ic?(te.map.depthTexture.compareFunction=Y?kx:Fx,te.map.depthTexture.minFilter=ti,te.map.depthTexture.magFilter=ti):(te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=Cn,te.map.depthTexture.magFilter=Cn);te.camera.updateProjectionMatrix()}te.map.isWebGLCubeRenderTarget!==!0&&(te.map.width!==s.x||te.map.height!==s.y)&&te.map.setSize(s.x,s.y);const J=te.map.isWebGLCubeRenderTarget?6:te.getViewportCount();ie.isPointLight!==!0&&te.updateMatrices(ie,P);const F=(te.camera.layers.mask&4294967294)!==0?te.camera.layers:P.layers;for(let ee=0;ee<J;ee++){const Ae=te.getCamera(ee);if(ie.isPointLight){const ne=te.camera,xe=te.matrix,Ee=ie.distance||ne.far;Ee!==ne.far&&(ne.far=Ee,ne.updateProjectionMatrix()),ll.setFromMatrixPosition(ie.matrixWorld),ne.position.copy(ll),Vh.copy(ne.position),Vh.add(Z3[ee]),ne.up.copy(j3[ee]),ne.lookAt(Vh),ne.updateMatrixWorld(),xe.makeTranslation(-ll.x,-ll.y,-ll.z),Gy.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),te._frustum.setFromProjectionMatrix(Gy,ne.coordinateSystem,ne.reversedDepth)}if(te.map.isWebGLCubeRenderTarget)n.setRenderTarget(te.map,ee),n.clear();else{ee===0&&(n.setRenderTarget(te.map),n.clear());const ne=te.getViewport(ee);u.set(o.x*ne.x,o.y*ne.y,o.x*ne.z,o.y*ne.w),V.viewport(u)}r=te.getFrustum(ee),D(b,P,Ae,ie,F,this.type)}te.isPointLightShadow!==!0&&this.type===ml&&w(te,P),te.needsUpdate=!1}S=this.type,y.needsUpdate=!1,n.setRenderTarget(G,O,B)};function w(I,b){const P=e.update(R);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,x.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),I.mapPass===null?I.mapPass=new wr(s.x,s.y,{format:fs,type:Rr}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value.set(I.map.width,I.map.height),g.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(b,null,P,g,R,null),x.uniforms.shadow_pass.value=I.mapPass.texture,x.uniforms.resolution.value.set(I.map.width,I.map.height),x.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(b,null,P,x,R,null)}function N(I,b,P,G){let O=null;const B=P.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(B!==void 0)O=B;else if(O=P.isPointLight===!0?f:d,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const V=O.uuid,X=b.uuid;let k=h[V];k===void 0&&(k={},h[V]=k);let ae=k[X];ae===void 0&&(ae=O.clone(),k[X]=ae,b.addEventListener("dispose",U)),O=ae}if(O.visible=b.visible,O.wireframe=b.wireframe,G===ml?O.side=b.shadowSide!==null?b.shadowSide:b.side:O.side=b.shadowSide!==null?b.shadowSide:m[b.side],O.alphaMap=b.alphaMap,O.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,O.map=b.map,O.clipShadows=b.clipShadows,O.clippingPlanes=b.clippingPlanes,O.clipIntersection=b.clipIntersection,O.displacementMap=b.displacementMap,O.displacementScale=b.displacementScale,O.displacementBias=b.displacementBias,O.wireframeLinewidth=b.wireframeLinewidth,O.linewidth=b.linewidth,P.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const V=n.properties.get(O);V.light=P}return O}function D(I,b,P,G,O,B){if(I.visible===!1)return;if(I.layers.test(O)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&B===ml)&&(!I.frustumCulled||I.intersectsFrustum(r))){I.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,I.matrixWorld);const k=e.update(I),ae=I.material;if(Array.isArray(ae)){const ie=k.groups;for(let te=0,j=ie.length;te<j;te++){const Y=ie[te],J=ae[Y.materialIndex];if(J&&J.visible){const F=N(I,J,G,B);I.onBeforeShadow(n,I,b,P,k,F,Y),n.renderBufferDirect(P,null,k,F,I,Y),I.onAfterShadow(n,I,b,P,k,F,Y)}}}else if(ae.visible){const ie=N(I,ae,G,B);I.onBeforeShadow(n,I,b,P,k,ie,null),n.renderBufferDirect(P,null,k,ie,I,null),I.onAfterShadow(n,I,b,P,k,ie,null)}}const X=I.children;for(let k=0,ae=X.length;k<ae;k++)D(X[k],b,P,G,O,B)}function U(I){I.target.removeEventListener("dispose",U);for(const P in h){const G=h[P],O=I.target.uuid;O in G&&(G[O].dispose(),delete G[O])}}}function Q3(n,e){function t(){let H=!1;const Se=new rn;let pe=null;const Ue=new rn(0,0,0,0);return{setMask:function(De){pe!==De&&!H&&(n.colorMask(De,De,De,De),pe=De)},setLocked:function(De){H=De},setClear:function(De,Ne,je,ft,Te){Te===!0&&(De*=ft,Ne*=ft,je*=ft),Se.set(De,Ne,je,ft),Ue.equals(Se)===!1&&(n.clearColor(De,Ne,je,ft),Ue.copy(Se))},reset:function(){H=!1,pe=null,Ue.set(-1,0,0,0)}}}function r(){let H=!1,Se=!1,pe=null,Ue=null,De=null;return{setReversed:function(Ne){if(Se!==Ne){const je=e.get("EXT_clip_control");Ne?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Se=Ne;const ft=De;De=null,this.setClear(ft)}},getReversed:function(){return Se},setTest:function(Ne){Ne?_e(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(Ne){pe!==Ne&&!H&&(n.depthMask(Ne),pe=Ne)},setFunc:function(Ne){if(Se&&(Ne=PA[Ne]),Ue!==Ne){switch(Ne){case wp:n.depthFunc(n.NEVER);break;case Tp:n.depthFunc(n.ALWAYS);break;case Rp:n.depthFunc(n.LESS);break;case Cl:n.depthFunc(n.LEQUAL);break;case Ap:n.depthFunc(n.EQUAL);break;case Cp:n.depthFunc(n.GEQUAL);break;case Pp:n.depthFunc(n.GREATER);break;case Lp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ue=Ne}},setLocked:function(Ne){H=Ne},setClear:function(Ne){De!==Ne&&(De=Ne,Se&&(Ne=1-Ne),n.clearDepth(Ne))},reset:function(){H=!1,pe=null,Ue=null,De=null,Se=!1}}}function s(){let H=!1,Se=null,pe=null,Ue=null,De=null,Ne=null,je=null,ft=null,Te=null;return{setTest:function(tt){H||(tt?_e(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(tt){Se!==tt&&!H&&(n.stencilMask(tt),Se=tt)},setFunc:function(tt,ot,He){(pe!==tt||Ue!==ot||De!==He)&&(n.stencilFunc(tt,ot,He),pe=tt,Ue=ot,De=He)},setOp:function(tt,ot,He){(Ne!==tt||je!==ot||ft!==He)&&(n.stencilOp(tt,ot,He),Ne=tt,je=ot,ft=He)},setLocked:function(tt){H=tt},setClear:function(tt){Te!==tt&&(n.clearStencil(tt),Te=tt)},reset:function(){H=!1,Se=null,pe=null,Ue=null,De=null,Ne=null,je=null,ft=null,Te=null}}}const o=new t,u=new r,d=new s;let f={};const h=new WeakMap;let v={},m={},g={},x=new WeakMap,E=[],R=null,y=!1,S=null,w=null,N=null,D=null,U=null,I=null,b=null,P=new Mt(0,0,0),G=0,O=!1,B=null,V=null,X=null,k=null,ae=null;const ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,j=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),te=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),te=j>=2);let J=null,F={};const ee=n.getParameter(n.SCISSOR_BOX),Ae=n.getParameter(n.VIEWPORT),ne=new rn().fromArray(ee),xe=new rn().fromArray(Ae);function Ee(H,Se,pe,Ue){const De=new Uint8Array(4),Ne=n.createTexture();n.bindTexture(H,Ne),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<pe;je++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(Se+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return Ne}const Ce={};Ce[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),d.setClear(0),_e(n.DEPTH_TEST),u.setFunc(Cl),Zt(!1),Lt($_),_e(n.CULL_FACE),kt(oo);function _e(H){v[H]!==!0&&(n.enable(H),v[H]=!0)}function Be(H){v[H]!==!1&&(n.disable(H),v[H]=!1)}function mt(H,Se){return g[H]!==Se?(n.bindFramebuffer(H,Se),g[H]=Se,H===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Se),H===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function Ze(H,Se){let pe=E,Ue=!1;if(H){pe=x.get(Se),pe===void 0&&(pe=[],x.set(Se,pe));const De=H.textures;if(pe.length!==De.length||pe[0]!==n.COLOR_ATTACHMENT0){for(let Ne=0,je=De.length;Ne<je;Ne++)pe[Ne]=n.COLOR_ATTACHMENT0+Ne;pe.length=De.length,Ue=!0}}else pe[0]!==n.BACK&&(pe[0]=n.BACK,Ue=!0);Ue&&n.drawBuffers(pe)}function lt(H){return R!==H?(n.useProgram(H),R=H,!0):!1}const vt={[ro]:n.FUNC_ADD,[JR]:n.FUNC_SUBTRACT,[QR]:n.FUNC_REVERSE_SUBTRACT};vt[eA]=n.MIN,vt[tA]=n.MAX;const ut={[nA]:n.ZERO,[iA]:n.ONE,[rA]:n.SRC_COLOR,[Sx]:n.SRC_ALPHA,[cA]:n.SRC_ALPHA_SATURATE,[lA]:n.DST_COLOR,[sA]:n.DST_ALPHA,[aA]:n.ONE_MINUS_SRC_COLOR,[xx]:n.ONE_MINUS_SRC_ALPHA,[uA]:n.ONE_MINUS_DST_COLOR,[oA]:n.ONE_MINUS_DST_ALPHA,[dA]:n.CONSTANT_COLOR,[fA]:n.ONE_MINUS_CONSTANT_COLOR,[hA]:n.CONSTANT_ALPHA,[pA]:n.ONE_MINUS_CONSTANT_ALPHA};function kt(H,Se,pe,Ue,De,Ne,je,ft,Te,tt){if(H===oo){y===!0&&(Be(n.BLEND),y=!1);return}if(y===!1&&(_e(n.BLEND),y=!0),H!==jR){if(H!==S||tt!==O){if((w!==ro||U!==ro)&&(n.blendEquation(n.FUNC_ADD),w=ro,U=ro),tt)switch(H){case Ml:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case X_:n.blendFunc(n.ONE,n.ONE);break;case q_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Y_:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ot("WebGLState: Invalid blending: ",H);break}else switch(H){case Ml:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case X_:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case q_:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Y_:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",H);break}N=null,D=null,I=null,b=null,P.set(0,0,0),G=0,S=H,O=tt}return}De=De||Se,Ne=Ne||pe,je=je||Ue,(Se!==w||De!==U)&&(n.blendEquationSeparate(vt[Se],vt[De]),w=Se,U=De),(pe!==N||Ue!==D||Ne!==I||je!==b)&&(n.blendFuncSeparate(ut[pe],ut[Ue],ut[Ne],ut[je]),N=pe,D=Ue,I=Ne,b=je),(ft.equals(P)===!1||Te!==G)&&(n.blendColor(ft.r,ft.g,ft.b,Te),P.copy(ft),G=Te),S=H,O=!1}function Bt(H,Se){H.side===_r?Be(n.CULL_FACE):_e(n.CULL_FACE);let pe=H.side===ii;Se&&(pe=!pe),Zt(pe),H.blending===Ml&&H.transparent===!1?kt(oo):kt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),o.setMask(H.colorWrite);const Ue=H.stencilWrite;d.setTest(Ue),Ue&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Dt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(H){B!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),B=H)}function Lt(H){H!==KR?(_e(n.CULL_FACE),H!==V&&(H===$_?n.cullFace(n.BACK):H===ZR?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),V=H}function vn(H){H!==X&&(te&&n.lineWidth(H),X=H)}function Dt(H,Se,pe){H?(_e(n.POLYGON_OFFSET_FILL),(k!==Se||ae!==pe)&&(k=Se,ae=pe,u.getReversed()&&(Se=-Se,pe=-pe),n.polygonOffset(Se,pe))):Be(n.POLYGON_OFFSET_FILL)}function jt(H){H?_e(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function an(H){H===void 0&&(H=n.TEXTURE0+ie-1),J!==H&&(n.activeTexture(H),J=H)}function hn(H,Se,pe){pe===void 0&&(J===null?pe=n.TEXTURE0+ie-1:pe=J);let Ue=F[pe];Ue===void 0&&(Ue={type:void 0,texture:void 0},F[pe]=Ue),(Ue.type!==H||Ue.texture!==Se)&&(J!==pe&&(n.activeTexture(pe),J=pe),n.bindTexture(H,Se||Ce[H]),Ue.type=H,Ue.texture=Se)}function K(){const H=F[J];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function pn(){try{n.compressedTexImage2D(...arguments)}catch(H){Ot("WebGLState:",H)}}function At(){try{n.compressedTexImage3D(...arguments)}catch(H){Ot("WebGLState:",H)}}function Ct(){try{n.texSubImage2D(...arguments)}catch(H){Ot("WebGLState:",H)}}function Ie(){try{n.texSubImage3D(...arguments)}catch(H){Ot("WebGLState:",H)}}function he(){try{n.compressedTexSubImage2D(...arguments)}catch(H){Ot("WebGLState:",H)}}function ve(){try{n.compressedTexSubImage3D(...arguments)}catch(H){Ot("WebGLState:",H)}}function ye(){try{n.texStorage2D(...arguments)}catch(H){Ot("WebGLState:",H)}}function C(){try{n.texStorage3D(...arguments)}catch(H){Ot("WebGLState:",H)}}function T(){try{n.texImage2D(...arguments)}catch(H){Ot("WebGLState:",H)}}function $(){try{n.texImage3D(...arguments)}catch(H){Ot("WebGLState:",H)}}function me(H){return m[H]!==void 0?m[H]:n.getParameter(H)}function Q(H,Se){m[H]!==Se&&(n.pixelStorei(H,Se),m[H]=Se)}function Me(H){ne.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),ne.copy(H))}function be(H){xe.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),xe.copy(H))}function de(H,Se){let pe=h.get(Se);pe===void 0&&(pe=new WeakMap,h.set(Se,pe));let Ue=pe.get(H);Ue===void 0&&(Ue=n.getUniformBlockIndex(Se,H.name),n.uniformBlockBinding(Se,Ue,Ue),pe.set(H,Ue))}function ge(H,Se,pe){const De=h.get(Se).get(H);f[De]!==pe&&(n.bindBufferBase(n.UNIFORM_BUFFER,De,pe),f[De]=pe)}function Le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),v={},m={},J=null,F={},g={},f={},x=new WeakMap,E=[],R=null,y=!1,S=null,w=null,N=null,D=null,U=null,I=null,b=null,P=new Mt(0,0,0),G=0,O=!1,B=null,V=null,X=null,k=null,ae=null,ne.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),u.reset(),d.reset()}return{buffers:{color:o,depth:u,stencil:d},enable:_e,disable:Be,bindFramebuffer:mt,drawBuffers:Ze,useProgram:lt,setBlending:kt,setMaterial:Bt,setFlipSided:Zt,setCullFace:Lt,setLineWidth:vn,setPolygonOffset:Dt,setScissorTest:jt,activeTexture:an,bindTexture:hn,unbindTexture:K,compressedTexImage2D:pn,compressedTexImage3D:At,texImage2D:T,texImage3D:$,pixelStorei:Q,getParameter:me,updateUBOMapping:de,uniformBlockBinding:ge,texStorage2D:ye,texStorage3D:C,texSubImage2D:Ct,texSubImage3D:Ie,compressedTexSubImage2D:he,compressedTexSubImage3D:ve,scissor:Me,viewport:be,reset:Le}}function eD(n,e,t,r,s,o,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Et,v=new WeakMap,m=new Set;let g;const x=new WeakMap,E=new Set,R=new FinalizationRegistry(C=>E.delete(C));let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,T){return y?new OffscreenCanvas(C,T):jc("canvas")}function w(C,T,$){let me=1;const Q=ye(C);if((Q.width>$||Q.height>$)&&(me=$/Math.max(Q.width,Q.height)),me<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Me=Math.floor(me*Q.width),be=Math.floor(me*Q.height);g===void 0&&(g=S(Me,be));const de=T?S(Me,be):g;return de.width=Me,de.height=be,de.getContext("2d").drawImage(C,0,0,Me,be),dt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Me+"x"+be+")."),de}else return"data"in C&&dt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function N(C){return C.generateMipmaps}function D(C){n.generateMipmap(C)}function U(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function I(C,T,$,me,Q,Me=!1){if(C!==null){if(n[C]!==void 0)return n[C];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let be;me&&(be=e.get("EXT_texture_norm16"),be||dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=T;if(T===n.RED&&($===n.FLOAT&&(de=n.R32F),$===n.HALF_FLOAT&&(de=n.R16F),$===n.UNSIGNED_BYTE&&(de=n.R8),$===n.UNSIGNED_SHORT&&be&&(de=be.R16_EXT),$===n.SHORT&&be&&(de=be.R16_SNORM_EXT)),T===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(de=n.R8UI),$===n.UNSIGNED_SHORT&&(de=n.R16UI),$===n.UNSIGNED_INT&&(de=n.R32UI),$===n.BYTE&&(de=n.R8I),$===n.SHORT&&(de=n.R16I),$===n.INT&&(de=n.R32I)),T===n.RG&&($===n.FLOAT&&(de=n.RG32F),$===n.HALF_FLOAT&&(de=n.RG16F),$===n.UNSIGNED_BYTE&&(de=n.RG8),$===n.UNSIGNED_SHORT&&be&&(de=be.RG16_EXT),$===n.SHORT&&be&&(de=be.RG16_SNORM_EXT)),T===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(de=n.RG8UI),$===n.UNSIGNED_SHORT&&(de=n.RG16UI),$===n.UNSIGNED_INT&&(de=n.RG32UI),$===n.BYTE&&(de=n.RG8I),$===n.SHORT&&(de=n.RG16I),$===n.INT&&(de=n.RG32I)),T===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(de=n.RGB8UI),$===n.UNSIGNED_SHORT&&(de=n.RGB16UI),$===n.UNSIGNED_INT&&(de=n.RGB32UI),$===n.BYTE&&(de=n.RGB8I),$===n.SHORT&&(de=n.RGB16I),$===n.INT&&(de=n.RGB32I)),T===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(de=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(de=n.RGBA16UI),$===n.UNSIGNED_INT&&(de=n.RGBA32UI),$===n.BYTE&&(de=n.RGBA8I),$===n.SHORT&&(de=n.RGBA16I),$===n.INT&&(de=n.RGBA32I)),T===n.RGB&&($===n.UNSIGNED_SHORT&&be&&(de=be.RGB16_EXT),$===n.SHORT&&be&&(de=be.RGB16_SNORM_EXT),$===n.UNSIGNED_INT_5_9_9_9_REV&&(de=n.RGB9_E5),$===n.UNSIGNED_INT_10F_11F_11F_REV&&(de=n.R11F_G11F_B10F)),T===n.RGBA){const ge=Me?Zc:wt.getTransfer(Q);$===n.FLOAT&&(de=n.RGBA32F),$===n.HALF_FLOAT&&(de=n.RGBA16F),$===n.UNSIGNED_BYTE&&(de=ge===Ft?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT&&be&&(de=be.RGBA16_EXT),$===n.SHORT&&be&&(de=be.RGBA16_SNORM_EXT),$===n.UNSIGNED_SHORT_4_4_4_4&&(de=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(de=n.RGB5_A1)}return(de===n.R16F||de===n.R32F||de===n.RG16F||de===n.RG32F||de===n.RGBA16F||de===n.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function b(C,T){let $;return C?T===null||T===Tr||T===po?$=n.DEPTH24_STENCIL8:T===xr?$=n.DEPTH32F_STENCIL8:T===Ll&&($=n.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Tr||T===po?$=n.DEPTH_COMPONENT24:T===xr?$=n.DEPTH_COMPONENT32F:T===Ll&&($=n.DEPTH_COMPONENT16),$}function P(C,T){return N(C)===!0||C.isFramebufferTexture&&C.minFilter!==Cn&&C.minFilter!==ti?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function G(C){const T=new WeakRef(C);r.get(C).__ref=T,E.add(T),R.register(C,T,T)}function O(C){const T=r.get(C).__ref;T!==void 0&&(E.delete(T),R.unregister(T))}function B(C){X(C.target)}function V(C){k(C.target)}function X(C){C.removeEventListener("dispose",B),O(C),ie(C),C.isVideoTexture&&v.delete(C),C.isHTMLTexture&&m.delete(C)}function k(C){C.removeEventListener("dispose",V),O(C),j(C)}function ae(){for(const C of E){const T=C.deref();T!==void 0&&(T.isRenderTarget===!0?k(T):X(T))}E.clear(),m.clear()}function ie(C){const T=r.get(C);if(T.__webglInit===void 0)return;const $=C.source,me=x.get($);if(me){const Q=me[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&te(C),Object.keys(me).length===0&&x.delete($)}r.remove(C)}function te(C){const T=r.get(C);n.deleteTexture(T.__webglTexture);const $=C.source,me=x.get($);delete me[T.__cacheKey],u.memory.textures--}function j(C){const T=r.get(C);T.__depthDisposeCallback&&T.__depthDisposeCallback();const $=C.depthTexture;if($&&$.renderTarget===C&&X($),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let Me=0;Me<T.__webglFramebuffer[Q].length;Me++)n.deleteFramebuffer(T.__webglFramebuffer[Q][Me]);else n.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)n.deleteFramebuffer(T.__webglFramebuffer[Q]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const me=C.textures;for(let Q=0,Me=me.length;Q<Me;Q++){const be=r.get(me[Q]);be.__webglTexture&&(n.deleteTexture(be.__webglTexture),u.memory.textures--),r.remove(me[Q])}r.remove(C)}let Y=0;function J(){Y=0}function F(){return Y}function ee(C){Y=C}function Ae(){const C=Y;return C>=s.maxTextures&&dt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,C}function ne(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.mipmapsAutoUpdate),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function xe(C,T){const $=r.get(C);if(C.isVideoTexture&&he(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&$.__version!==C.version){const me=C.image;if(me===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Bt($,C,T);return}}else C.isExternalTexture&&($.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+T)}function Ee(C,T){const $=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){Bt($,C,T);return}else C.isExternalTexture&&($.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+T)}function Ce(C,T){const $=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){Bt($,C,T);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+T)}function _e(C,T){const $=r.get(C);if(C.version>0&&$.__version!==C.version){Zt($,C,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+T)}const Be={[Xc]:n.REPEAT,[Wr]:n.CLAMP_TO_EDGE,[Dp]:n.MIRRORED_REPEAT},mt={[Cn]:n.NEAREST,[vA]:n.NEAREST_MIPMAP_NEAREST,[sc]:n.NEAREST_MIPMAP_LINEAR,[ti]:n.LINEAR,[vh]:n.LINEAR_MIPMAP_NEAREST,[La]:n.LINEAR_MIPMAP_LINEAR},Ze={[xA]:n.NEVER,[Bx]:n.ALWAYS,[MA]:n.LESS,[Fx]:n.LEQUAL,[EA]:n.EQUAL,[kx]:n.GEQUAL,[bA]:n.GREATER,[wA]:n.NOTEQUAL};function lt(C,T){if(T.type===xr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ti||T.magFilter===vh||T.magFilter===sc||T.magFilter===La||T.minFilter===ti||T.minFilter===vh||T.minFilter===sc||T.minFilter===La)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Be[T.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Be[T.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Be[T.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,mt[T.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,mt[T.minFilter]),T.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Ze[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Cn||T.minFilter!==sc&&T.minFilter!==La||T.type===xr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function vt(C,T){let $=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",B),G(T));const me=T.source;let Q=x.get(me);Q===void 0&&(Q={},x.set(me,Q));const Me=ne(T);if(Me!==C.__cacheKey){Q[Me]===void 0&&(Q[Me]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,$=!0),Q[Me].usedTimes++;const be=Q[C.__cacheKey];be!==void 0&&(Q[C.__cacheKey].usedTimes--,be.usedTimes===0&&te(T)),C.__cacheKey=Me,C.__webglTexture=Q[Me].texture}return $}function ut(C,T,$){return Math.floor(Math.floor(C/$)/T)}function kt(C,T,$,me){const Me=C.updateRanges;if(Me.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,$,me,T.data);else{Me.sort((H,Se)=>H.start-Se.start);let be=0;for(let H=1;H<Me.length;H++){const Se=Me[be],pe=Me[H],Ue=Se.start+Se.count,De=ut(pe.start,T.width,4),Ne=ut(Se.start,T.width,4);pe.start<=Ue+1&&De===Ne&&ut(pe.start+pe.count-1,T.width,4)===De?Se.count=Math.max(Se.count,pe.start+pe.count-Se.start):(++be,Me[be]=pe)}Me.length=be+1;const de=t.getParameter(n.UNPACK_ROW_LENGTH),ge=t.getParameter(n.UNPACK_SKIP_PIXELS),Le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let H=0,Se=Me.length;H<Se;H++){const pe=Me[H],Ue=Math.floor(pe.start/4),De=Math.ceil(pe.count/4),Ne=Ue%T.width,je=Math.floor(Ue/T.width),ft=De,Te=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(n.UNPACK_SKIP_ROWS,je),t.texSubImage2D(n.TEXTURE_2D,0,Ne,je,ft,Te,$,me,T.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,de),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(n.UNPACK_SKIP_ROWS,Le)}}function Bt(C,T,$){let me=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(me=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(me=n.TEXTURE_3D);const Q=vt(C,T),Me=T.source;t.bindTexture(me,C.__webglTexture,n.TEXTURE0+$);const be=r.get(Me);if(Me.version!==be.__version||Q===!0){if(t.activeTexture(n.TEXTURE0+$),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const Te=wt.getPrimaries(wt.workingColorSpace),tt=T.colorSpace===Pa?null:wt.getPrimaries(T.colorSpace),ot=T.colorSpace===Pa||Te===tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot)}t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let ge=w(T.image,!1,s.maxTextureSize);ge=ve(T,ge);const Le=o.convert(T.format,T.colorSpace),H=o.convert(T.type);let Se=I(T.internalFormat,Le,H,T.normalized,T.colorSpace,T.isVideoTexture);lt(me,T);let pe;const Ue=T.mipmaps,De=T.isVideoTexture!==!0,Ne=be.__version===void 0||Q===!0,je=Me.dataReady,ft=P(T,ge);if(T.isDepthTexture)Se=b(T.format===Da,T.type),Ne&&(De?t.texStorage2D(n.TEXTURE_2D,1,Se,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,Se,ge.width,ge.height,0,Le,H,null));else if(T.isDataTexture)if(Ue.length>0){De&&Ne&&t.texStorage2D(n.TEXTURE_2D,ft,Se,Ue[0].width,Ue[0].height);for(let Te=0,tt=Ue.length;Te<tt;Te++)pe=Ue[Te],De?je&&t.texSubImage2D(n.TEXTURE_2D,Te,0,0,pe.width,pe.height,Le,H,pe.data):t.texImage2D(n.TEXTURE_2D,Te,Se,pe.width,pe.height,0,Le,H,pe.data);T.generateMipmaps=!1}else De?(Ne&&t.texStorage2D(n.TEXTURE_2D,ft,Se,ge.width,ge.height),je&&kt(T,ge,Le,H)):t.texImage2D(n.TEXTURE_2D,0,Se,ge.width,ge.height,0,Le,H,ge.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){De&&Ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ft,Se,Ue[0].width,Ue[0].height,ge.depth);for(let Te=0,tt=Ue.length;Te<tt;Te++)if(pe=Ue[Te],T.format!==Mr)if(Le!==null)if(De){if(je)if(T.layerUpdates.size>0){const ot=xy(pe.width,pe.height,T.format,T.type);for(const He of T.layerUpdates){const St=pe.data.subarray(He*ot/pe.data.BYTES_PER_ELEMENT,(He+1)*ot/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Te,0,0,He,pe.width,pe.height,1,Le,St)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Te,0,0,0,pe.width,pe.height,ge.depth,Le,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Te,Se,pe.width,pe.height,ge.depth,0,pe.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?je&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Te,0,0,0,pe.width,pe.height,ge.depth,Le,H,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Te,Se,pe.width,pe.height,ge.depth,0,Le,H,pe.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{De&&Ne&&t.texStorage2D(n.TEXTURE_2D,ft,Se,Ue[0].width,Ue[0].height);for(let Te=0,tt=Ue.length;Te<tt;Te++)pe=Ue[Te],T.format!==Mr?Le!==null?De?je&&t.compressedTexSubImage2D(n.TEXTURE_2D,Te,0,0,pe.width,pe.height,Le,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,Te,Se,pe.width,pe.height,0,pe.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?je&&t.texSubImage2D(n.TEXTURE_2D,Te,0,0,pe.width,pe.height,Le,H,pe.data):t.texImage2D(n.TEXTURE_2D,Te,Se,pe.width,pe.height,0,Le,H,pe.data)}else if(T.isDataArrayTexture)if(De){if(Ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ft,Se,ge.width,ge.height,ge.depth),je)if(T.layerUpdates.size>0){const Te=xy(ge.width,ge.height,T.format,T.type);for(const tt of T.layerUpdates){const ot=ge.data.subarray(tt*Te/ge.data.BYTES_PER_ELEMENT,(tt+1)*Te/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,tt,ge.width,ge.height,1,Le,H,ot)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Le,H,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,ge.width,ge.height,ge.depth,0,Le,H,ge.data);else if(T.isData3DTexture)De?(Ne&&t.texStorage3D(n.TEXTURE_3D,ft,Se,ge.width,ge.height,ge.depth),je&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Le,H,ge.data)):t.texImage3D(n.TEXTURE_3D,0,Se,ge.width,ge.height,ge.depth,0,Le,H,ge.data);else if(T.isFramebufferTexture){if(Ne)if(De)t.texStorage2D(n.TEXTURE_2D,ft,Se,ge.width,ge.height);else{let Te=ge.width,tt=ge.height;for(let ot=0;ot<ft;ot++)t.texImage2D(n.TEXTURE_2D,ot,Se,Te,tt,0,Le,H,null),Te>>=1,tt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){const Te=n.canvas;if(Te.hasAttribute("layoutsubtree")||Te.setAttribute("layoutsubtree","true"),ge.parentNode!==Te){Te.appendChild(ge),m.add(T),Te.onpaint=tt=>{const ot=tt.changedElements;for(const He of m)ot.includes(He.image)&&(He.needsUpdate=!0)},Te.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ge);else{const ot=n.RGBA,He=n.RGBA,St=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ot,He,St,ge)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(De&&Ne){const Te=ye(Ue[0]);t.texStorage2D(n.TEXTURE_2D,ft,Se,Te.width,Te.height)}for(let Te=0,tt=Ue.length;Te<tt;Te++)pe=Ue[Te],De?je&&t.texSubImage2D(n.TEXTURE_2D,Te,0,0,Le,H,pe):t.texImage2D(n.TEXTURE_2D,Te,Se,Le,H,pe);T.generateMipmaps=!1}else if(De){if(Ne){const Te=ye(ge);t.texStorage2D(n.TEXTURE_2D,ft,Se,Te.width,Te.height)}je&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Le,H,ge)}else t.texImage2D(n.TEXTURE_2D,0,Se,Le,H,ge);N(T)&&T.mipmapsAutoUpdate===!0&&D(me),be.__version=Me.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Zt(C,T,$){if(T.image.length!==6)return;const me=vt(C,T),Q=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+$);const Me=r.get(Q);if(Q.version!==Me.__version||me===!0){t.activeTexture(n.TEXTURE0+$);const be=wt.getPrimaries(wt.workingColorSpace),de=T.colorSpace===Pa?null:wt.getPrimaries(T.colorSpace),ge=T.colorSpace===Pa||be===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Le=T.isCompressedTexture||T.image[0].isCompressedTexture,H=T.image[0]&&T.image[0].isDataTexture,Se=[];for(let He=0;He<6;He++)!Le&&!H?Se[He]=w(T.image[He],!0,s.maxCubemapSize):Se[He]=H?T.image[He].image:T.image[He],Se[He]=ve(T,Se[He]);const pe=Se[0],Ue=o.convert(T.format,T.colorSpace),De=o.convert(T.type);let Ne=I(T.internalFormat,Ue,De,T.normalized,T.colorSpace);const je=T.isVideoTexture!==!0,ft=Me.__version===void 0||me===!0,Te=Q.dataReady;let tt=P(T,pe);lt(n.TEXTURE_CUBE_MAP,T);let ot;if(T.isDepthTexture){if(Ne=b(T.format===Da,T.type),ft)if(je)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Ne,pe.width,pe.height);else for(let He=0;He<6;He++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Ne,pe.width,pe.height,0,Ue,De,null)}else if(Le){je&&ft&&t.texStorage2D(n.TEXTURE_CUBE_MAP,tt,Ne,pe.width,pe.height);for(let He=0;He<6;He++){ot=Se[He].mipmaps;for(let St=0;St<ot.length;St++){const $t=ot[St];T.format!==Mr?Ue!==null?je?Te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,St,0,0,$t.width,$t.height,Ue,$t.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,St,Ne,$t.width,$t.height,0,$t.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,St,0,0,$t.width,$t.height,Ue,De,$t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,St,Ne,$t.width,$t.height,0,Ue,De,$t.data)}}}else{if(ot=T.mipmaps,je&&ft){ot.length>0&&tt++;const He=ye(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,tt,Ne,He.width,He.height)}for(let He=0;He<6;He++)if(H){je?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,0,0,Se[He].width,Se[He].height,Ue,De,Se[He].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Ne,Se[He].width,Se[He].height,0,Ue,De,Se[He].data);for(let St=0;St<ot.length;St++){const Ln=ot[St].image[He].image;je?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,St+1,0,0,Ln.width,Ln.height,Ue,De,Ln.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,St+1,Ne,Ln.width,Ln.height,0,Ue,De,Ln.data)}}else{je?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,0,0,Ue,De,Se[He]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Ne,Ue,De,Se[He]);for(let St=0;St<ot.length;St++){const $t=ot[St];je?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,St+1,0,0,Ue,De,$t.image[He]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+He,St+1,Ne,Ue,De,$t.image[He])}}}N(T)&&T.mipmapsAutoUpdate===!0&&D(n.TEXTURE_CUBE_MAP),Me.__version=Q.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Lt(C,T,$,me,Q,Me){const be=o.convert($.format,$.colorSpace),de=o.convert($.type),ge=I($.internalFormat,be,de,$.normalized,$.colorSpace),Le=r.get(T),H=r.get($);if(H.__renderTarget=T,!Le.__hasExternalTextures){const Se=Math.max(1,T.width>>Me),pe=Math.max(1,T.height>>Me);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,Me,ge,Se,pe,T.depth,0,be,de,null):t.texImage2D(Q,Me,ge,Se,pe,0,be,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ie(T)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,Q,H.__webglTexture,0,Ct(T)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,me,Q,H.__webglTexture,Me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function vn(C,T,$){if(n.bindRenderbuffer(n.RENDERBUFFER,C),T.depthBuffer){const me=T.depthTexture,Q=me&&me.isDepthTexture?me.type:null,Me=b(T.stencilBuffer,Q),be=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ie(T)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ct(T),Me,T.width,T.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct(T),Me,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Me,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,C)}else{const me=T.textures;for(let Q=0;Q<me.length;Q++){const Me=me[Q],be=o.convert(Me.format,Me.colorSpace),de=o.convert(Me.type),ge=I(Me.internalFormat,be,de,Me.normalized,Me.colorSpace);Ie(T)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ct(T),ge,T.width,T.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct(T),ge,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ge,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Dt(C,T,$){const me=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=r.get(T.depthTexture);Q.__renderTarget=T;const Me=me?T.depthTexture.image[0]:T.depthTexture.image;(!Q.__webglTexture||Me.width!==T.width||Me.height!==T.height)&&(Me.width=T.width,Me.height=T.height,T.depthTexture.needsUpdate=!0),me?_e(T.depthTexture,0):xe(T.depthTexture,0);const be=Q.__webglTexture,de=Ct(T),ge=me?n.TEXTURE_CUBE_MAP_POSITIVE_X+$:n.TEXTURE_2D,Le=T.depthTexture.format===Da?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===Oa)Ie(T)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Le,ge,be,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,Le,ge,be,0);else if(T.depthTexture.format===Da)Ie(T)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Le,ge,be,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,Le,ge,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function jt(C){const T=r.get(C),$=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){const me=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),me){const Q=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,me.removeEventListener("dispose",Q)};me.addEventListener("dispose",Q),T.__depthDisposeCallback=Q}T.__boundDepthTexture=me}if(C.depthTexture&&!T.__autoAllocateDepthBuffer)if($)for(let me=0;me<6;me++)Dt(T.__webglFramebuffer[me],C,me);else C.texture.mipmaps.length>0?Dt(T.__webglFramebuffer[0],C,0):Dt(T.__webglFramebuffer,C,0);else if($){T.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[me]),T.__webglDepthbuffer[me]===void 0)T.__webglDepthbuffer[me]=n.createRenderbuffer(),vn(T.__webglDepthbuffer[me],C,!1);else{const Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=T.__webglDepthbuffer[me];n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,Me)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),vn(T.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,Me)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function an(C,T,$){const me=r.get(C);T!==void 0&&Lt(me.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&jt(C)}function hn(C){const T=C.texture,$=r.get(C),me=r.get(T);C.addEventListener("dispose",V),G(C);const Q=C.textures,Me=C.isWebGLCubeRenderTarget===!0,be=Q.length>1;if(be||(me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture()),me.__version=T.version,u.memory.textures++),Me){$.__webglFramebuffer=[];for(let de=0;de<6;de++)if(T.mipmaps.length>0){$.__webglFramebuffer[de]=[];for(let ge=0;ge<T.mipmaps.length;ge++)$.__webglFramebuffer[de][ge]=n.createFramebuffer()}else $.__webglFramebuffer[de]=n.createFramebuffer()}else{if(T.mipmaps.length>0){$.__webglFramebuffer=[];for(let de=0;de<T.mipmaps.length;de++)$.__webglFramebuffer[de]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(be)for(let de=0,ge=Q.length;de<ge;de++){const Le=r.get(Q[de]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),u.memory.textures++)}if(C.samples>0&&Ie(C)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let de=0;de<Q.length;de++){const ge=Q[de];$.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[de]);const Le=o.convert(ge.format,ge.colorSpace),H=o.convert(ge.type),Se=I(ge.internalFormat,Le,H,ge.normalized,ge.colorSpace,C.isXRRenderTarget===!0),pe=Ct(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,Se,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,$.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),vn($.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Me){t.bindTexture(n.TEXTURE_CUBE_MAP,me.__webglTexture),lt(n.TEXTURE_CUBE_MAP,T);for(let de=0;de<6;de++)if(T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)Lt($.__webglFramebuffer[de][ge],C,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ge);else Lt($.__webglFramebuffer[de],C,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);N(T)?D(n.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(be){for(let de=0,ge=Q.length;de<ge;de++){const Le=Q[de],H=r.get(Le);let Se=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Se=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,H.__webglTexture),lt(Se,Le),Lt($.__webglFramebuffer,C,Le,n.COLOR_ATTACHMENT0+de,Se,0),N(Le)&&D(Se)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,me.__webglTexture),lt(de,T),T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)Lt($.__webglFramebuffer[ge],C,T,n.COLOR_ATTACHMENT0,de,ge);else Lt($.__webglFramebuffer,C,T,n.COLOR_ATTACHMENT0,de,0);N(T)?D(de):T.mipmaps.length>0&&n.texParameteri(de,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&jt(C)}function K(C){const T=C.textures;for(let $=0,me=T.length;$<me;$++){const Q=T[$];if(N(Q)&&Q.mipmapsAutoUpdate===!0){const Me=U(C),be=r.get(Q).__webglTexture;t.bindTexture(Me,be),D(Me),t.unbindTexture()}}}const pn=[];function At(C){if(C.samples>0){if(Ie(C)===!1){const T=C.textures,$=C.width,me=C.height;let Q=n.COLOR_BUFFER_BIT;const Me=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=r.get(C),de=T.length>1;if(de)for(let Le=0;Le<T.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Le=0;Le<T.length;Le++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Le]);const H=r.get(T[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,H,0)}n.blitFramebuffer(0,0,$,me,0,0,$,me,Q,n.NEAREST),f===!0&&(pn.length=0,pn.push(n.COLOR_ATTACHMENT0+Le),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&pn.push(Me),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let Le=0;Le<T.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,be.__webglColorRenderbuffer[Le]);const H=r.get(T[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,H,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&f){const T=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Ct(C){return Math.min(s.maxSamples,C.samples)}function Ie(C){const T=r.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function he(C){const T=u.render.frame;v.get(C)!==T&&(v.set(C,T),C.update())}function ve(C,T){const $=C.colorSpace,me=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||$!==Kc&&$!==Pa&&(wt.getTransfer($)===Ft?(me!==Mr||Q!==gi)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",$)),T}function ye(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=Ae,this.resetTextureUnits=J,this.getTextureUnits=F,this.setTextureUnits=ee,this.setTexture2D=xe,this.setTexture2DArray=Ee,this.setTexture3D=Ce,this.setTextureCube=_e,this.rebindTextures=an,this.setupRenderTarget=hn,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Ie,this.dispose=ae}function tD(n,e){function t(r,s=Pa){let o;const u=wt.getTransfer(s);if(r===gi)return n.UNSIGNED_BYTE;if(r===Cm)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Pm)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Dx)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===Ix)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===Px)return n.BYTE;if(r===Lx)return n.SHORT;if(r===Ll)return n.UNSIGNED_SHORT;if(r===Am)return n.INT;if(r===Tr)return n.UNSIGNED_INT;if(r===xr)return n.FLOAT;if(r===Rr)return n.HALF_FLOAT;if(r===Nx)return n.ALPHA;if(r===Ox)return n.RGB;if(r===Mr)return n.RGBA;if(r===Oa)return n.DEPTH_COMPONENT;if(r===Da)return n.DEPTH_STENCIL;if(r===Ux)return n.RED;if(r===Lm)return n.RED_INTEGER;if(r===fs)return n.RG;if(r===Dm)return n.RG_INTEGER;if(r===Im)return n.RGBA_INTEGER;if(r===Nc||r===Oc||r===Uc||r===Fc)if(u===Ft)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Nc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Oc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Uc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Nc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Oc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Uc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ip||r===Np||r===Op||r===Up)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ip)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Np)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Op)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Up)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Fp||r===kp||r===Bp||r===zp||r===Hp||r===qc||r===Gp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Fp||r===kp)return u===Ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Bp)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(r===zp)return o.COMPRESSED_R11_EAC;if(r===Hp)return o.COMPRESSED_SIGNED_R11_EAC;if(r===qc)return o.COMPRESSED_RG11_EAC;if(r===Gp)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Vp||r===Wp||r===$p||r===Xp||r===qp||r===Yp||r===Kp||r===Zp||r===jp||r===Jp||r===Qp||r===em||r===tm||r===nm)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Vp)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wp)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$p)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Xp)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qp)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yp)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kp)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zp)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jp)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jp)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qp)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===em)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===tm)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===nm)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===im||r===rm||r===am)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===im)return u===Ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===rm)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===am)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===sm||r===om||r===Yc||r===lm)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===sm)return o.COMPRESSED_RED_RGTC1_EXT;if(r===om)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lm)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===po?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const nD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iD=`
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

}`;class rD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Yx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new hs({vertexShader:nD,fragmentShader:iD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ua(new Ia(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aD extends vs{constructor(e,t){super();const r=this;let s=null,o=1,u=null,d="local-floor",f=1,h=null,v=null,m=null,g=null,x=null,E=null;const R=typeof XRWebGLBinding<"u",y=new rD,S={},w=t.getContextAttributes();let N=null,D=null;const U=[],I=[],b=new Et;let P=null,G=null;const O=new Di;O.viewport=new rn;const B=new Di;B.viewport=new rn;const V=[O,B],X=new gC;let k=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let xe=U[ne];return xe===void 0&&(xe=new Th,U[ne]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ne){let xe=U[ne];return xe===void 0&&(xe=new Th,U[ne]=xe),xe.getGripSpace()},this.getHand=function(ne){let xe=U[ne];return xe===void 0&&(xe=new Th,U[ne]=xe),xe.getHandSpace()};function ie(ne){const xe=I.indexOf(ne.inputSource);if(xe===-1)return;const Ee=U[xe];Ee!==void 0&&(Ee.update(ne.inputSource,ne.frame,h||u),Ee.dispatchEvent({type:ne.type,data:ne.inputSource}))}function te(){s.removeEventListener("select",ie),s.removeEventListener("selectstart",ie),s.removeEventListener("selectend",ie),s.removeEventListener("squeeze",ie),s.removeEventListener("squeezestart",ie),s.removeEventListener("squeezeend",ie),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",j);for(let ne=0;ne<U.length;ne++){const xe=I[ne];xe!==null&&(I[ne]=null,U[ne].disconnect(xe))}k=null,ae=null,y.reset();for(const ne in S)delete S[ne];if(e.setRenderTarget(N),x=null,g=null,m=null,s=null,D=null,Ae.stop(),r.isPresenting=!1,e.setPixelRatio(P),e.setSize(b.width,b.height,!1),G!==null){const ne=G.camera;ne.fov=G.fov,ne.zoom=G.zoom,ne.updateProjectionMatrix(),G=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){o=ne,r.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){d=ne,r.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(ne){h=ne},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return m===null&&R&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(N=e.getRenderTarget(),s.addEventListener("select",ie),s.addEventListener("selectstart",ie),s.addEventListener("selectend",ie),s.addEventListener("squeeze",ie),s.addEventListener("squeezestart",ie),s.addEventListener("squeezeend",ie),s.addEventListener("end",te),s.addEventListener("inputsourceschange",j),w.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(b),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ce=null,_e=null;w.depth&&(_e=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=w.stencil?Da:Oa,Ce=w.stencil?po:Tr);const Be={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:o};m=this.getBinding(),g=m.createProjectionLayer(Be),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),D=new wr(g.textureWidth,g.textureHeight,{format:Mr,type:gi,depthTexture:new mo(g.textureWidth,g.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Ee={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),D=new wr(x.framebufferWidth,x.framebufferHeight,{format:Mr,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(f),h=null,u=await s.requestReferenceSpace(d),Ae.setContext(s),Ae.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(ne){for(let xe=0;xe<ne.removed.length;xe++){const Ee=ne.removed[xe],Ce=I.indexOf(Ee);Ce>=0&&(I[Ce]=null,U[Ce].disconnect(Ee))}for(let xe=0;xe<ne.added.length;xe++){const Ee=ne.added[xe];let Ce=I.indexOf(Ee);if(Ce===-1){for(let Be=0;Be<U.length;Be++)if(Be>=I.length){I.push(Ee),Ce=Be;break}else if(I[Be]===null){I[Be]=Ee,Ce=Be;break}if(Ce===-1)break}const _e=U[Ce];_e&&_e.connect(Ee)}}function Y(ne,xe){xe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(xe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let xe=ne.near,Ee=ne.far;y.texture!==null&&(y.depthNear>0&&(xe=y.depthNear),y.depthFar>0&&(Ee=y.depthFar)),X.near=B.near=O.near=xe,X.far=B.far=O.far=Ee,(k!==X.near||ae!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),k=X.near,ae=X.far),X.layers.mask=ne.layers.mask|6,O.layers.mask=X.layers.mask&-5,B.layers.mask=X.layers.mask&-3;const Ce=ne.parent,_e=X.cameras;Y(X,Ce);for(let Be=0;Be<_e.length;Be++)Y(_e[Be],Ce);X.projectionMatrix.copy(O.projectionMatrix),X.projectionMatrixInverse.copy(O.projectionMatrixInverse),G===null&&ne.isPerspectiveCamera&&(G={camera:ne,fov:ne.fov,zoom:ne.zoom}),J(ne,X,Ce)};function J(ne,xe,Ee){Ee===null?ne.matrix.copy(xe.matrixWorld):(ne.matrix.copy(Ee.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(xe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(xe.projectionMatrix),ne.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=cm*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(g===null&&x===null))return f},this.setFoveation=function(ne){f=ne,g!==null&&(g.fixedFoveation=ne),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(X)},this.getCameraTexture=function(ne){return S[ne]};let F=null;function ee(ne,xe){if(v=xe.getViewerPose(h||u),E=xe,v!==null){const Ee=v.views;x!==null&&(e.setRenderTargetFramebuffer(D,x.framebuffer),e.setRenderTarget(D));let Ce=!1;Ee.length!==X.cameras.length&&(X.cameras.length=0,Ce=!0);for(let Ze=0;Ze<Ee.length;Ze++){const lt=Ee[Ze];let vt=null;if(x!==null)vt=x.getViewport(lt);else{const kt=m.getViewSubImage(g,lt);vt=kt.viewport,Ze===0&&(e.setRenderTargetTextures(D,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(D))}let ut=V[Ze];ut===void 0&&(ut=new Di,ut.layers.enable(Ze),ut.viewport=new rn,V[Ze]=ut),ut.matrix.fromArray(lt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(lt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(vt.x,vt.y,vt.width,vt.height),Ze===0&&(X.matrix.copy(ut.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ce===!0&&X.cameras.push(ut)}const _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&R){m=r.getBinding();const Ze=m.getDepthInformation(Ee[0]);Ze&&Ze.isValid&&Ze.texture&&y.init(Ze,s.renderState)}if(_e&&_e.includes("camera-access")&&R){e.state.unbindTexture(),m=r.getBinding();for(let Ze=0;Ze<Ee.length;Ze++){const lt=Ee[Ze].camera;if(lt){let vt=S[lt];vt||(vt=new Yx,S[lt]=vt);const ut=m.getCameraImage(lt);vt.sourceTexture=ut}}}}for(let Ee=0;Ee<U.length;Ee++){const Ce=I[Ee],_e=U[Ee];Ce!==null&&_e!==void 0&&_e.update(Ce,xe,h||u)}F&&F(ne,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),E=null}const Ae=new Qx;Ae.setAnimationLoop(ee),this.setAnimationLoop=function(ne){F=ne},this.dispose=function(){}}}const sD=new en,uM=new ht;uM.set(-1,0,0,0,1,0,0,0,1);function oD(n,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,Kx(n)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function s(y,S,w,N,D){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?o(y,S):S.isMeshLambertMaterial?(o(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(o(y,S),m(y,S)):S.isMeshPhongMaterial?(o(y,S),v(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(o(y,S),g(y,S),S.isMeshPhysicalMaterial&&x(y,S,D)):S.isMeshMatcapMaterial?(o(y,S),E(y,S)):S.isMeshDepthMaterial?o(y,S):S.isMeshDistanceMaterial?(o(y,S),R(y,S)):S.isMeshNormalMaterial?o(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?f(y,S,w,N):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function o(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===ii&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===ii&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const w=e.get(S),N=w.envMap,D=w.envMapRotation;N&&(y.envMap.value=N,y.envMapRotation.value.setFromMatrix4(sD.makeRotationFromEuler(D)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(uM),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function f(y,S,w,N){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*w,y.scale.value=N*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function v(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function m(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,w){y.ior.value=S.ior,S.diffuseRoughness>0&&(y.diffuseRoughness.value=S.diffuseRoughness,S.diffuseRoughnessMap&&(y.diffuseRoughnessMap.value=S.diffuseRoughnessMap,t(S.diffuseRoughnessMap,y.diffuseRoughnessMapTransform))),S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ii&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessMinimum,y.iridescenceThicknessMaximum.value=S.iridescenceThicknessMaximum,S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,S){S.matcap&&(y.matcap.value=S.matcap)}function R(y,S){const w=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:s}}function lD(n,e,t,r){let s={},o={};function u(w,N){const D=N.program;r.uniformBlockBinding(w,D,s[w.id])}function d(w,N){let D=s[w.id];D===void 0&&(E(w),D=f(w),s[w.id]=D,w.addEventListener("dispose",y));const U=N.program;r.updateUBOMapping(w,U);const I=e.render.frame;o[w.id]!==I&&(h(w),o[w.id]=I)}function f(w){const N=n.createBuffer(),D=w.__size,U=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,N),n.bufferData(n.UNIFORM_BUFFER,D,U),n.bindBuffer(n.UNIFORM_BUFFER,null),N}function h(w){const N=s[w.id],D=w.uniforms,U=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,N);for(let I=0,b=D.length;I<b;I++){const P=D[I];if(Array.isArray(P))for(let G=0,O=P.length;G<O;G++)v(P[G],I,G,U);else v(P,I,0,U)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function v(w,N,D,U){if(g(w,N,D,U)===!0){const I=w.__offset,b=w.value;if(Array.isArray(b)){let P=0;for(let G=0;G<b.length;G++){const O=b[G],B=R(O,!0);m(O,w.__data,P),P+=B.storage/Float32Array.BYTES_PER_ELEMENT}}else m(b,w.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,I,w.__data)}}function m(w,N,D){typeof w=="number"||typeof w=="boolean"?N[D]=w:w.isMatrix3?(N[D]=w.elements[0],N[D+1]=w.elements[1],N[D+2]=w.elements[2],N[D+3]=0,N[D+4]=w.elements[3],N[D+5]=w.elements[4],N[D+6]=w.elements[5],N[D+7]=0,N[D+8]=w.elements[6],N[D+9]=w.elements[7],N[D+10]=w.elements[8],N[D+11]=0):ArrayBuffer.isView(w)?N.set(w.subarray(0,N.length-D),D):w.toArray(N,D)}function g(w,N,D,U){const I=w.value,b=N+"_"+D;if(Array.isArray(I)){U[b]===void 0&&(U[b]=[]);const P=U[b];let G=!1;for(let O=0;O<I.length;O++)x(I[O],P,O)===!0&&(G=!0);return G}return x(I,U,b)}function x(w,N,D){if(N[D]===void 0)return typeof w=="number"||typeof w=="boolean"?N[D]=w:ArrayBuffer.isView(w)?N[D]=w.slice():N[D]=w.clone(),!0;{const U=N[D];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return N[D]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(U.equals(w)===!1)return U.copy(w),!0}}return!1}function E(w){const N=w.uniforms;let D=0;const U=16;for(let b=0,P=N.length;b<P;b++){const G=Array.isArray(N[b])?N[b]:[N[b]];for(let O=0,B=G.length;O<B;O++){const V=G[O],X=Array.isArray(V.value)?V.value:[V.value],k=Array.isArray(N[b])||Array.isArray(V.value);let ae=D;for(let te=0,j=X.length;te<j;te++){const Y=X[te],J=R(Y,k),F=D%U,ee=F%J.boundary,Ae=F+ee;D+=ee,Ae!==0&&U-Ae<J.storage&&(D+=U-Ae),te===0&&(ae=D),D+=J.storage}const ie=V.type==="int"?Int32Array:V.type==="uint"?Uint32Array:Float32Array;V.__data=new ie((D-ae)/Float32Array.BYTES_PER_ELEMENT),V.__offset=ae}}const I=D%U;return I>0&&(D+=U-I),w.__size=D,w.__cache={},this}function R(w,N){const D={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(D.boundary=4,D.storage=4):w.isVector2?(D.boundary=8,D.storage=8):w.isVector3||w.isColor?(D.boundary=16,D.storage=12):w.isVector4?(D.boundary=16,D.storage=16):w.isMatrix3?(D.boundary=16,D.storage=48):w.isMatrix4?(D.boundary=16,D.storage=64):w.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(D.boundary=16,D.storage=w.byteLength):dt("WebGLRenderer: Unsupported uniform value type.",w),N===!0&&(D.boundary=16,D.storage=Math.ceil(D.storage/16)*16),D}function y(w){const N=w.target;N.removeEventListener("dispose",y),n.deleteBuffer(s[N.id]),delete s[N.id],delete o[N.id]}function S(){for(const w in s)n.deleteBuffer(s[w]);s={},o={}}return{bind:u,update:d,dispose:S}}const uD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fr=null;function cD(){return fr===null&&(fr=new nC(uD,16,16,fs,Rr),fr.name="DFG_LUT",fr.minFilter=ti,fr.magFilter=ti,fr.wrapS=Wr,fr.wrapT=Wr,fr.generateMipmaps=!1,fr.needsUpdate=!0),fr}class dD{constructor(e={}){const{canvas:t=AA(),context:r=null,depth:s=!0,stencil:o=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:g=!1,outputBufferType:x=gi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const R=x,y=new Set([Im,Dm,Lm]),S=new Set([gi,Tr,Ll,po,Cm,Pm]),w=new Uint32Array(4),N=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]};let U=null,I=null;const b=[],P=[];let G=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let B=!1,V=null,X=null,k=null,ae=null;this._outputColorSpace=ei;let ie=0,te=0,j=null,Y=-1,J=null;const F=new rn,ee=new rn;let Ae=null;const ne=new Mt(0);let xe=0,Ee=t.width,Ce=t.height,_e=1,Be=null,mt=null;const Ze=new rn(0,0,Ee,Ce),lt=new rn(0,0,Ee,Ce);let vt=!1;const ut=new Il,kt=new Bm;let Bt=!1,Zt=!1;const Lt=new en,vn=new ce,Dt=new rn,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let an=!1;function hn(){return j===null?_e:1}let K=r;function pn(L,W){return t.getContext(L,W)}let At,Ct,Ie,he,ve,ye,C,T,$,me,Q,Me,be,de,ge,Le,H,Se,pe,Ue,De,Ne,je;try{const L={alpha:!0,depth:s,stencil:o,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tm}`),t.addEventListener("webglcontextlost",tt,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",He,!1),K===null){const W="webgl2";if(K=pn(W,L),K===null)throw pn(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ft()}catch(L){throw t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",He,!1),Ot("WebGLRenderer: "+L.message),L}function ft(){At=new p2(K),At.init(),De=new tD(K,At),Ct=new i2(K,At,e,De),Ie=new Q3(K,At),Ct.reversedDepthBuffer&&g&&Ie.buffers.depth.setReversed(!0),X=K.createFramebuffer(),k=K.createFramebuffer(),ae=K.createFramebuffer(),he=new v2(K),ve=new B3,ye=new eD(K,At,Ie,ve,Ct,De,he),C=new h2(O),T=new yC(K),Ne=new t2(K,T),$=new m2(K,T,he,Ne),me=new y2(K,$,T,Ne,he),Se=new _2(K,Ct,ye),ge=new r2(ve),Q=new k3(O,C,At,Ct,Ne,ge),Me=new oD(O,ve),be=new H3,de=new q3(At),H=new e2(O,C,Ie,me,E,f),Le=new J3(O,me,Ct),je=new lD(K,he,Ct,Ie),pe=new n2(K,At,he),Ue=new g2(K,At,he),he.programs=Q.programs,O.capabilities=Ct,O.extensions=At,O.properties=ve,O.renderLists=be,O.shadowMap=Le,O.state=Ie,O.info=he}R!==gi&&(G=new x2(R,t.width,t.height,d,s,o));const Te=new aD(O,K);this.xr=Te,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const L=At.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=At.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(L){L!==void 0&&(_e=L,this.setSize(Ee,Ce,!1))},this.getSize=function(L){return L.set(Ee,Ce)},this.setSize=function(L,W,le=!0){if(Te.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=L,Ce=W,t.width=Math.floor(L*_e),t.height=Math.floor(W*_e),le===!0&&(t.style.width=L+"px",t.style.height=W+"px"),G!==null&&G.setSize(t.width,t.height),this.setViewport(0,0,L,W)},this.getDrawingBufferSize=function(L){return L.set(Ee*_e,Ce*_e).floor()},this.setDrawingBufferSize=function(L,W,le){Ee=L,Ce=W,_e=le,t.width=Math.floor(L*le),t.height=Math.floor(W*le),this.setViewport(0,0,L,W)},this.setEffects=function(L){if(R===gi){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let W=0;W<L.length;W++)if(L[W].isOutputPass===!0){dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}G.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(F)},this.getViewport=function(L){return L.copy(Ze)},this.setViewport=function(L,W,le,se){L.isVector4?Ze.set(L.x,L.y,L.z,L.w):Ze.set(L,W,le,se),Ie.viewport(F.copy(Ze).multiplyScalar(hn()).round())},this.getScissor=function(L){return L.copy(lt)},this.setScissor=function(L,W,le,se){L.isVector4?lt.set(L.x,L.y,L.z,L.w):lt.set(L,W,le,se),Ie.scissor(ee.copy(lt).multiplyScalar(hn()).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(L){Ie.setScissorTest(vt=L)},this.setOpaqueSort=function(L){Be=L},this.setTransparentSort=function(L){mt=L},this.getClearColor=function(L){return L.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor(...arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha(...arguments)},this.clear=function(L=!0,W=!0,le=!0){let se=0;if(L){let re=!1;if(j!==null){const ke=j.texture.format;re=y.has(ke)}if(re){const ke=j.texture.type,$e=S.has(ke),Fe=H.getClearColor(),ze=H.getClearAlpha(),Xe=Fe.r,it=Fe.g,pt=Fe.b;$e?(w[0]=Xe,w[1]=it,w[2]=pt,w[3]=ze,K.clearBufferuiv(K.COLOR,0,w)):(N[0]=Xe,N[1]=it,N[2]=pt,N[3]=ze,K.clearBufferiv(K.COLOR,0,N))}else se|=K.COLOR_BUFFER_BIT}W&&(se|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(se|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&K.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),V=L},this.dispose=function(){t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",He,!1),H.dispose(),be.dispose(),de.dispose(),ye.dispose(),ve.dispose(),C.dispose(),me.dispose(),$.dispose(),Ne.dispose(),je.dispose(),Q.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Ba),Te.removeEventListener("sessionend",Mi),ai.stop()};function tt(L){L.preventDefault(),j_("WebGLRenderer: Context Lost."),B=!0}function ot(){j_("WebGLRenderer: Context Restored."),B=!1;const L=he.autoReset,W=Le.enabled,le=Le.autoUpdate,se=Le.needsUpdate,re=Le.type;ft(),he.autoReset=L,Le.enabled=W,Le.autoUpdate=le,Le.needsUpdate=se,Le.type=re}function He(L){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function St(L){const W=L.target;W.removeEventListener("dispose",St),$t(W)}function $t(L){Ln(L),ve.remove(L)}function Ln(L){const W=ve.get(L).programs;W!==void 0&&(W.forEach(function(le){Q.releaseProgram(le)}),L.isShaderMaterial&&Q.releaseShaderCache(L))}this.renderBufferDirect=function(L,W,le,se,re,ke){W===null&&(W=jt);const $e=re.isMesh&&re.matrixWorld.determinantAffine()<0,Fe=ra(L,W,le,se,re);Ie.setMaterial(se,$e);let ze=le.index,Xe=1;if(se.wireframe===!0){if(ze=$.getWireframeAttribute(le),ze===void 0)return;Xe=2}const it=le.drawRange,pt=le.attributes.position;let qe=it.start*Xe,gt=(it.start+it.count)*Xe;ke!==null&&(qe=Math.max(qe,ke.start*Xe),gt=Math.min(gt,(ke.start+ke.count)*Xe)),ze!==null?(qe=Math.max(qe,0),gt=Math.min(gt,ze.count)):pt!=null&&(qe=Math.max(qe,0),gt=Math.min(gt,pt.count));const zt=gt-qe;if(zt<0||zt===1/0)return;Ne.setup(re,se,Fe,le,ze);let It,Rt=pe;if(ze!==null&&(It=T.get(ze),Rt=Ue,Rt.setIndex(It)),re.isMesh)se.wireframe===!0?(Ie.setLineWidth(se.wireframeLinewidth*hn()),Rt.setMode(K.LINES)):Rt.setMode(K.TRIANGLES);else if(re.isLine){let Xt=se.linewidth;Xt===void 0&&(Xt=1),Ie.setLineWidth(Xt*hn()),re.isLineSegments?Rt.setMode(K.LINES):re.isLineLoop?Rt.setMode(K.LINE_LOOP):Rt.setMode(K.LINE_STRIP)}else re.isPoints?Rt.setMode(K.POINTS):re.isSprite&&Rt.setMode(K.TRIANGLES);if(re.isBatchedMesh)if(At.get("WEBGL_multi_draw"))Rt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const Xt=re._multiDrawStarts,Ye=re._multiDrawCounts,sn=re._multiDrawCount,Je=ze?T.get(ze).bytesPerElement:1,si=ve.get(se).currentProgram.getUniforms();for(let on=0;on<sn;on++)si.setValue(K,"_gl_DrawID",on),Rt.render(Xt[on]/Je,Ye[on])}else if(re.isInstancedMesh)Rt.renderInstances(qe,zt,re.count);else if(le.isInstancedBufferGeometry){const Xt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ye=Math.min(le.instanceCount,Xt);Rt.renderInstances(qe,zt,Ye)}else Rt.render(qe,zt)};function ea(L,W,le,se){V!==null&&L.isNodeMaterial&&V.setObject(se,L),Bt===!0&&ge.setState(L,le,!1),L.transparent===!0&&L.side===_r&&L.forceSinglePass===!1?(L.side=ii,L.needsUpdate=!0,sr(L,W,se),L.side=ds,L.needsUpdate=!0,sr(L,W,se),L.side=_r):sr(L,W,se)}this.compile=function(L,W,le=null){le===null&&(le=L),V!==null&&V.renderStart(L,W,le),I=de.get(le),I.init(W),P.push(I),le.traverseVisible(function(re){re.isLight&&re.layers.test(W.layers)&&(I.pushLight(re),re.castShadow&&I.pushShadow(re))}),L!==le&&L.traverseVisible(function(re){re.isLight&&re.layers.test(W.layers)&&(I.pushLight(re),re.castShadow&&I.pushShadow(re))}),I.setupLights(),V!==null&&V.updateLights(I.state.lightsArray),Zt=this.localClippingEnabled,Bt=ge.init(this.clippingPlanes,Zt),Bt===!0&&ge.setGlobalState(this.clippingPlanes,W),V!==null&&Le.render(I.state.shadowsArray,le,W);const se=new Set;return L.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const ke=re.material;if(ke)if(Array.isArray(ke))for(let $e=0;$e<ke.length;$e++){const Fe=ke[$e];ea(Fe,le,W,re),se.add(Fe)}else ea(ke,le,W,re),se.add(ke)}),I=P.pop(),V!==null&&V.renderEnd(),se},this.compileAsync=function(L,W,le=null){const se=this.compile(L,W,le);return new Promise(re=>{function ke(){if(se.forEach(function($e){const ze=ve.get($e).currentProgram;(ze===void 0||ze.isReady())&&se.delete($e)}),se.size===0){re(L);return}setTimeout(ke,10)}At.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let rr=null;function ta(L){rr&&rr(L)}function Ba(){ai.stop()}function Mi(){ai.start()}const ai=new Qx;ai.setAnimationLoop(ta),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(L){rr=L,Te.setAnimationLoop(L),L===null?ai.stop():ai.start()},Te.addEventListener("sessionstart",Ba),Te.addEventListener("sessionend",Mi),this.render=function(L,W){if(W!==void 0&&W.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;V!==null&&V.renderStart(L,W);const le=Te.enabled===!0&&Te.isPresenting===!0,se=G!==null&&(j===null||le)&&G.begin(O,j);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(G===null||G.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(W),W=Te.getCamera()),L.isScene===!0&&L.onBeforeRender(O,L,W,j),I=de.get(L,P.length),I.init(W),I.state.textureUnits=ye.getTextureUnits(),P.push(I),Lt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?kt.setFromArrayCamera(W):ut.setFromProjectionMatrix(Lt,er,W.reversedDepth),Zt=this.localClippingEnabled,Bt=ge.init(this.clippingPlanes,Zt),U=be.get(L,b.length),U.init(),b.push(U),this.info.render.frame++,Te.enabled===!0&&Te.isPresenting===!0){const $e=O.xr.getDepthSensingMesh();$e!==null&&na($e,W,-1/0,O.sortObjects)}na(L,W,0,O.sortObjects),U.finish(),V!==null&&V.updateLights(I.state.lightsArray),O.sortObjects===!0&&U.sort(Be,mt),an=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,an&&H.addToRenderList(U,L),this.info.autoReset===!0&&this.info.reset(),Bt===!0&&ge.beginShadows();const re=I.state.shadowsArray;if(Le.render(re,L,W),Bt===!0&&ge.endShadows(),(se&&G.hasRenderPass())===!1){const $e=U.opaque,Fe=U.transmissive;if(I.setupLights(),W.isArrayCamera){const ze=W.cameras;if(Fe.length>0)for(let Xe=0,it=ze.length;Xe<it;Xe++){const pt=ze[Xe];ia($e,Fe,L,pt)}an&&H.render(L);for(let Xe=0,it=ze.length;Xe<it;Xe++){const pt=ze[Xe];ar(U,L,pt,pt.viewport)}}else Fe.length>0&&ia($e,Fe,L,W),an&&H.render(L),ar(U,L,W)}j!==null&&te===0&&(ye.updateMultisampleRenderTarget(j),ye.updateRenderTargetMipmap(j)),se&&G.end(O),L.isScene===!0&&L.onAfterRender(O,L,W),Ne.resetDefaultState(),Y=-1,J=null,P.pop(),P.length>0?(I=P[P.length-1],ye.setTextureUnits(I.state.textureUnits),Bt===!0&&ge.setGlobalState(O.clippingPlanes,I.state.camera)):I=null,b.pop(),b.length>0?U=b[b.length-1]:U=null,V!==null&&V.renderEnd()};function na(L,W,le,se){if(L.visible===!1)return;if(L.layers.test(W.layers)){if(L.isGroup)le=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(W);else if(L.isLight)I.pushLight(L),L.castShadow&&I.pushShadow(L);else if(L.isSprite){const $e=W.isArrayCamera?kt:ut;if(!L.frustumCulled||L.intersectsFrustum($e)){se&&Dt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Lt);const Fe=me.update(L),ze=L.material;ze.visible&&U.push(L,Fe,ze,le,Dt.z,null,W)}}else if(L.isMesh||L.isLine||L.isPoints){const $e=W.isArrayCamera?kt:ut;if(!L.frustumCulled||L.intersectsFrustum($e)){const Fe=me.update(L),ze=L.material;if(se&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Dt.copy(L.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Dt.copy(Fe.boundingSphere.center)),Dt.applyMatrix4(L.matrixWorld).applyMatrix4(Lt)),Array.isArray(ze)){const Xe=Fe.groups;for(let it=0,pt=Xe.length;it<pt;it++){const qe=Xe[it],gt=ze[qe.materialIndex];gt&&gt.visible&&U.push(L,Fe,gt,le,Dt.z,qe,W)}}else ze.visible&&U.push(L,Fe,ze,le,Dt.z,null,W)}}}const ke=L.children;for(let $e=0,Fe=ke.length;$e<Fe;$e++)na(ke[$e],W,le,se)}function ar(L,W,le,se){const{opaque:re,transmissive:ke,transparent:$e}=L;I.setupLightsView(le),Bt===!0&&ge.setGlobalState(O.clippingPlanes,le),se&&Ie.viewport(F.copy(se)),re.length>0&&Ve(re,W,le),ke.length>0&&Ve(ke,W,le),$e.length>0&&Ve($e,W,le),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function ia(L,W,le,se){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[se.id]===void 0){const qe=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[se.id]=new wr(1,1,{generateMipmaps:!0,type:qe?Rr:gi,minFilter:La,samples:Math.max(4,Ct.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const ke=I.state.transmissionRenderTarget[se.id],$e=se.viewport||F;ke.setSize($e.z*O.transmissionResolutionScale,$e.w*O.transmissionResolutionScale);const Fe=O.getRenderTarget(),ze=O.getActiveCubeFace(),Xe=O.getActiveMipmapLevel();O.setRenderTarget(ke),O.getClearColor(ne),xe=O.getClearAlpha(),xe<1&&O.setClearColor(16777215,.5),O.clear(),an&&H.render(le);const it=O.toneMapping;O.toneMapping=Xr;const pt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),I.setupLightsView(se),Bt===!0&&ge.setGlobalState(O.clippingPlanes,se),Ve(L,le,se),ye.updateMultisampleRenderTarget(ke),ye.updateRenderTargetMipmap(ke),At.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let gt=0,zt=W.length;gt<zt;gt++){const It=W[gt],{object:Rt,geometry:Xt,material:Ye,group:sn}=It;if(Ye.side===_r&&Rt.layers.test(se.layers)){const Je=Ye.side;Ye.side=ii,Ye.needsUpdate=!0,za(Rt,le,se,Xt,Ye,sn),Ye.side=Je,Ye.needsUpdate=!0,qe=!0}}qe===!0&&(ye.updateMultisampleRenderTarget(ke),ye.updateRenderTargetMipmap(ke))}O.setRenderTarget(Fe,ze,Xe),O.setClearColor(ne,xe),pt!==void 0&&(se.viewport=pt),O.toneMapping=it}function Ve(L,W,le){const se=W.isScene===!0?W.overrideMaterial:null;for(let re=0,ke=L.length;re<ke;re++){const $e=L[re],{object:Fe,geometry:ze,group:Xe}=$e;let it=$e.material;it.allowOverride===!0&&se!==null&&(it=se),Fe.layers.test(le.layers)&&za(Fe,W,le,ze,it,Xe)}}function za(L,W,le,se,re,ke){V!==null&&re.isNodeMaterial&&V.setObject(L,re),L.onBeforeRender(O,W,le,se,re,ke),L.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),re.onBeforeRender(O,W,le,se,L,ke),re.transparent===!0&&re.side===_r&&re.forceSinglePass===!1?(re.side=ii,re.needsUpdate=!0,O.renderBufferDirect(le,W,se,re,L,ke),re.side=ds,re.needsUpdate=!0,O.renderBufferDirect(le,W,se,re,L,ke),re.side=_r):O.renderBufferDirect(le,W,se,re,L,ke),L.onAfterRender(O,W,le,se,re,ke)}function zn(L){let W=0;for(const le of L)le.texture!==null&&W++;return W}function sr(L,W,le){W.isScene!==!0&&(W=jt);const se=ve.get(L),re=I.state.lights,ke=I.state.shadowsArray,$e=re.state.version,Fe=Q.getParameters(L,re.state,ke,W,le,I.state.lightProbeGridArray),ze=Q.getProgramCacheKey(Fe);let Xe=se.programs;se.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?W.environment:null,se.fog=W.fog;const it=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;se.envMap=C.get(L.envMap||se.environment,it),se.envMapRotation=se.environment!==null&&L.envMap===null?W.environmentRotation:L.envMapRotation,Xe===void 0&&(L.addEventListener("dispose",St),Xe=new Map,se.programs=Xe,se.programVariants=new Map);let pt=Xe.get(ze);if(pt!==void 0){if(se.currentProgram===pt&&se.lightsStateVersion===$e)return Ha(L,Fe),pt}else Fe.uniforms=Q.getUniforms(L),V!==null&&L.isNodeMaterial&&V.build(L,le,Fe),L.onBeforeCompile(Fe,O),pt=Q.acquireProgram(Fe,ze),Xe.set(ze,pt),se.uniforms=Fe.uniforms;const qe=se.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(qe.clippingPlanes=ge.uniform),Ha(L,Fe),se.needsLights=Ar(L),se.lightsStateVersion=$e,se.needsLights&&(qe.ambientLightColor.value=re.state.ambient,qe.lightProbe.value=re.state.probe,qe.sunLights.value=re.state.sun,qe.sunLightShadows.value=re.state.sunShadow,qe.directionalLights.value=re.state.directional,qe.directionalLightShadows.value=re.state.directionalShadow,qe.spotLights.value=re.state.spot,qe.spotLightShadows.value=re.state.spotShadow,qe.rectAreaLights.value=re.state.rectArea,qe.ltc_1.value=re.state.rectAreaLTC1,qe.ltc_2.value=re.state.rectAreaLTC2,qe.pointLights.value=re.state.point,qe.pointLightShadows.value=re.state.pointShadow,qe.hemisphereLights.value=re.state.hemi,qe.sunShadowMatrix.value=re.state.sunShadowMatrix,qe.sunShadowCascade.value=re.state.sunShadowCascade,qe.directionalShadowMatrix.value=re.state.directionalShadowMatrix,qe.spotLightMatrix.value=re.state.spotLightMatrix,qe.spotLightMap.value=re.state.spotLightMap,qe.pointShadowMatrix.value=re.state.pointShadowMatrix),se.numLightProbeGrids=zn(I.state.lightProbeGridArray),se.currentProgram=pt,se.uniformsList=null,pt}function ys(L,W,le,se,re){const ke=ve.get(L),$e=ke.currentProgram.id+","+se+","+re;let Fe=ke.programVariants.get($e);return Fe===void 0?(Fe=sr(L,W,le),ke.programVariants.set($e,Fe)):(ke.currentProgram=Fe,ke.uniformsList=null,ke.outputColorSpace=se,ke.toneMapping=re),Fe}function Ht(L){if(L.uniformsList===null){const W=L.currentProgram.getUniforms();L.uniformsList=Bc.seqWithValue(W.seq,L.uniforms)}return L.uniformsList}function Ha(L,W){const le=ve.get(L);le.outputColorSpace=W.outputColorSpace,le.batching=W.batching,le.batchingColor=W.batchingColor,le.instancing=W.instancing,le.instancingColor=W.instancingColor,le.instancingMorph=W.instancingMorph,le.skinning=W.skinning,le.morphTargets=W.morphTargets,le.morphNormals=W.morphNormals,le.morphColors=W.morphColors,le.morphTargetsCount=W.morphTargetsCount,le.numClippingPlanes=W.numClippingPlanes,le.numIntersection=W.numClipIntersection,le.vertexAlphas=W.vertexAlphas,le.vertexTangents=W.vertexTangents,le.toneMapping=W.toneMapping}function ra(L,W,le,se,re){W.isScene!==!0&&(W=jt),ye.resetTextureUnits();const ke=W.fog,$e=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?W.environment:null,Fe=j===null?O.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:wt.workingColorSpace,ze=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,Xe=C.get(se.envMap||$e,ze),it=se.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pt=!!le.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),qe=!!le.morphAttributes.position,gt=!!le.morphAttributes.normal,zt=!!le.morphAttributes.color;let It=Xr;se.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(It=O.toneMapping);const Rt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Xt=Rt!==void 0?Rt.length:0,Ye=ve.get(se),sn=I.state.lights;if(Bt===!0&&(Zt===!0||L!==J)){const bt=L===J&&se.id===Y;ge.setState(se,L,bt)}let Je=!1,si=!1;se.version===Ye.__version?Ye.needsLights&&Ye.lightsStateVersion!==sn.state.version||re.isBatchedMesh&&Ye.batching===!1||!re.isBatchedMesh&&Ye.batching===!0||re.isBatchedMesh&&Ye.batchingColor===!0&&re._colorsTexture===null||re.isBatchedMesh&&Ye.batchingColor===!1&&re._colorsTexture!==null||re.isInstancedMesh&&Ye.instancing===!1||!re.isInstancedMesh&&Ye.instancing===!0||re.isSkinnedMesh&&Ye.skinning===!1||!re.isSkinnedMesh&&Ye.skinning===!0||re.isInstancedMesh&&Ye.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ye.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Ye.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Ye.instancingMorph===!1&&re.morphTexture!==null||Ye.envMap!==Xe||se.fog===!0&&Ye.fog!==ke||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ge.numPlanes||Ye.numIntersection!==ge.numIntersection)||Ye.vertexAlphas!==it||Ye.vertexTangents!==pt||Ye.morphTargets!==qe||Ye.morphNormals!==gt||Ye.morphColors!==zt||Ye.morphTargetsCount!==Xt||Ye.numLightProbeGrids!==zn(I.state.lightProbeGridArray)?Je=!0:(Ye.outputColorSpace!==Fe||Ye.toneMapping!==It)&&(si=!0):(Je=!0,Ye.__version=se.version);let on=Ye.currentProgram;(Je===!0||si===!0)&&(on=si===!0?ys(se,W,re,Fe,It):sr(se,W,re),V&&se.isNodeMaterial&&V.onUpdateProgram(se,on,Ye));let Fi=!1,Xn=!1,oi=!1;const yt=on.getUniforms(),Jt=Ye.uniforms;if(Ie.useProgram(on.program)&&(Fi=!0,Xn=!0,oi=!0),se.id!==Y&&(Y=se.id,Xn=!0),Fi||J!==L){Ie.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),yt.setValue(K,"projectionMatrix",L.projectionMatrix),yt.setValue(K,"viewMatrix",L.matrixWorldInverse);const Ut=yt.map.cameraPosition;Ut!==void 0&&Ut.setValue(K,vn.setFromMatrixPosition(L.matrixWorld)),Ct.logarithmicDepthBuffer&&yt.setValue(K,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&yt.setValue(K,"isOrthographic",L.isOrthographicCamera===!0),J!==L&&(J=L,Xn=!0,oi=!0)}if(Ye.needsLights&&(sn.state.sunShadowMap.length>0&&yt.setValue(K,"sunShadowMap",sn.state.sunShadowMap,ye),sn.state.directionalShadowMap.length>0&&yt.setValue(K,"directionalShadowMap",sn.state.directionalShadowMap,ye),sn.state.spotShadowMap.length>0&&yt.setValue(K,"spotShadowMap",sn.state.spotShadowMap,ye),sn.state.pointShadowMap.length>0&&yt.setValue(K,"pointShadowMap",sn.state.pointShadowMap,ye)),re.isSkinnedMesh){yt.setOptional(K,re,"bindMatrix"),yt.setOptional(K,re,"bindMatrixInverse");const bt=re.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),yt.setValue(K,"boneTexture",bt.boneTexture,ye))}re.isBatchedMesh&&(yt.setOptional(K,re,"batchingTexture"),yt.setValue(K,"batchingTexture",re._matricesTexture,ye),yt.setOptional(K,re,"batchingIdTexture"),yt.setValue(K,"batchingIdTexture",re._indirectTexture,ye),yt.setOptional(K,re,"batchingColorTexture"),re._colorsTexture!==null&&yt.setValue(K,"batchingColorTexture",re._colorsTexture,ye));const _n=le.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&Se.update(re,le,on),(Xn||Ye.receiveShadow!==re.receiveShadow)&&(Ye.receiveShadow=re.receiveShadow,yt.setValue(K,"receiveShadow",re.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&W.environment!==null&&(Jt.envMapIntensity.value=W.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=cD()),Xn){if(yt.setValue(K,"toneMappingExposure",O.toneMappingExposure),Ye.needsLights&&Ga(Jt,oi),ke&&se.fog===!0&&Me.refreshFogUniforms(Jt,ke),Me.refreshMaterialUniforms(Jt,se,_e,Ce,I.state.transmissionRenderTarget[L.id]),Ye.needsLights&&Ye.numLightProbeGrids>0){const bt=D;let Ut=0;for(const cn of I.state.lightProbeGridArray)cn.texture!==null&&(bt.textures[Ut]=cn.texture,bt.min[Ut]=cn.boundingBox.min,bt.max[Ut]=cn.boundingBox.max,bt.resolution[Ut]=cn.resolution,Ut++);for(const cn in bt)bt[cn].length=Ut;Jt.probesSH.value=bt.textures,Jt.probesMin.value=bt.min,Jt.probesMax.value=bt.max,Jt.probesResolution.value=bt.resolution}Bc.upload(K,Ht(Ye),Jt,ye)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Bc.upload(K,Ht(Ye),Jt,ye),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&yt.setValue(K,"center",re.center),yt.setValue(K,"modelViewMatrix",re.modelViewMatrix),yt.setValue(K,"normalMatrix",re.normalMatrix),yt.setValue(K,"modelMatrix",re.matrixWorld),se.uniformsGroups!==void 0){const bt=se.uniformsGroups;for(let Ut=0,cn=bt.length;Ut<cn;Ut++){const ki=bt[Ut];je.update(ki,on),je.bind(ki,on)}}return on}function Ga(L,W){L.ambientLightColor.needsUpdate=W,L.lightProbe.needsUpdate=W,L.sunLights.needsUpdate=W,L.sunLightShadows.needsUpdate=W,L.directionalLights.needsUpdate=W,L.directionalLightShadows.needsUpdate=W,L.pointLights.needsUpdate=W,L.pointLightShadows.needsUpdate=W,L.spotLights.needsUpdate=W,L.spotLightShadows.needsUpdate=W,L.rectAreaLights.needsUpdate=W,L.hemisphereLights.needsUpdate=W}function Ar(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(L,W,le){const se=ve.get(L);se.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),ve.get(L.texture).__webglTexture=W,ve.get(L.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:le,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,W){const le=ve.get(L);le.__webglFramebuffer=W,le.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(L,W=0,le=0){j=L,ie=W,te=le;let se=null,re=!1,ke=!1;if(L){const Fe=ve.get(L);if(Fe.__useDefaultFramebuffer!==void 0){Ie.bindFramebuffer(K.FRAMEBUFFER,Fe.__webglFramebuffer),F.copy(L.viewport),ee.copy(L.scissor),Ae=L.scissorTest,Ie.viewport(F),Ie.scissor(ee),Ie.setScissorTest(Ae),Y=-1;return}else if(Fe.__webglFramebuffer===void 0)ye.setupRenderTarget(L);else if(Fe.__hasExternalTextures)ye.rebindTextures(L,ve.get(L.texture).__webglTexture,ve.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const it=L.depthTexture;if(Fe.__boundDepthTexture!==it){if(it!==null&&ve.has(it)&&(L.width!==it.image.width||L.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ye.setupDepthRenderbuffer(L)}}const ze=L.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ke=!0);const Xe=ve.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Xe[W])?se=Xe[W][le]:se=Xe[W],re=!0):L.samples>0&&ye.useMultisampledRTT(L)===!1?se=ve.get(L).__webglMultisampledFramebuffer:Array.isArray(Xe)?se=Xe[le]:se=Xe,F.copy(L.viewport),ee.copy(L.scissor),Ae=L.scissorTest}else F.copy(Ze).multiplyScalar(_e).floor(),ee.copy(lt).multiplyScalar(_e).floor(),Ae=vt;if(le!==0&&(se=X),Ie.bindFramebuffer(K.FRAMEBUFFER,se)&&Ie.drawBuffers(L,se),Ie.viewport(F),Ie.scissor(ee),Ie.setScissorTest(Ae),re){const Fe=ve.get(L.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+W,Fe.__webglTexture,le)}else if(ke){const Fe=W;for(let ze=0;ze<L.textures.length;ze++){const Xe=ve.get(L.textures[ze]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+ze,Xe.__webglTexture,le,Fe)}}else if(L!==null&&le!==0){const Fe=ve.get(L.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Fe.__webglTexture,le)}Y=-1};function Va(L){const W=ve.get(L);return(W.__readFormat!==L.format||W.__readType!==L.type)&&(W.__readFormat=L.format,W.__readType=L.type,W.__formatReadable=Ct.textureFormatReadable(L.format),W.__typeReadable=Ct.textureTypeReadable(L.type)),W}this.readRenderTargetPixels=function(L,W,le,se,re,ke,$e,Fe=0){if(!(L&&L.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=ve.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&$e!==void 0&&(ze=ze[$e],Array.isArray(ze)&&(ze=ze[0])),ze){Ie.bindFramebuffer(K.FRAMEBUFFER,ze);try{const Xe=L.textures[Fe],it=Xe.format,pt=Xe.type;L.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Fe);const qe=Va(Xe);if(qe.__formatReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=L.width-se&&le>=0&&le<=L.height-re&&K.readPixels(W,le,se,re,De.convert(it),De.convert(pt),ke)}finally{const Xe=j!==null?ve.get(j).__webglFramebuffer:null;Ie.bindFramebuffer(K.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(L,W,le,se,re,ke,$e,Fe=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=ve.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&$e!==void 0&&(ze=ze[$e],Array.isArray(ze)&&(ze=ze[0])),ze)if(W>=0&&W<=L.width-se&&le>=0&&le<=L.height-re){Ie.bindFramebuffer(K.FRAMEBUFFER,ze);const Xe=L.textures[Fe],it=Xe.format,pt=Xe.type;L.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Fe);const qe=Va(Xe);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,gt),K.bufferData(K.PIXEL_PACK_BUFFER,ke.byteLength,K.STREAM_READ),K.readPixels(W,le,se,re,De.convert(it),De.convert(pt),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);const zt=j!==null?ve.get(j).__webglFramebuffer:null;Ie.bindFramebuffer(K.FRAMEBUFFER,zt);const It=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await CA(K,It,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,gt),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,ke),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(gt),K.deleteSync(It),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,W=null,le=0){const se=Math.pow(2,-le),re=Math.floor(L.image.width*se),ke=Math.floor(L.image.height*se),$e=W!==null?W.x:0,Fe=W!==null?W.y:0;ye.setTexture2D(L,0),K.copyTexSubImage2D(K.TEXTURE_2D,le,0,0,$e,Fe,re,ke),Ie.unbindTexture()},this.copyTextureToTexture=function(L,W,le=null,se=null,re=0,ke=0){let $e,Fe,ze,Xe,it,pt,qe,gt,zt;const It=L.isCompressedTexture?L.mipmaps[ke]:L.image;if(le!==null)$e=le.max.x-le.min.x,Fe=le.max.y-le.min.y,ze=le.isBox3?le.max.z-le.min.z:1,Xe=le.min.x,it=le.min.y,pt=le.isBox3?le.min.z:0;else{const yt=Math.pow(2,-re);$e=Math.floor(It.width*yt),Fe=Math.floor(It.height*yt),L.isDataArrayTexture?ze=It.depth:L.isData3DTexture?ze=Math.floor(It.depth*yt):ze=1,Xe=0,it=0,pt=0}se!==null?(qe=se.x,gt=se.y,zt=se.z):(qe=0,gt=0,zt=0);const Rt=De.convert(W.format),Xt=De.convert(W.type);let Ye;W.isData3DTexture?(ye.setTexture3D(W,0),Ye=K.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ye.setTexture2DArray(W,0),Ye=K.TEXTURE_2D_ARRAY):(ye.setTexture2D(W,0),Ye=K.TEXTURE_2D),Ie.activeTexture(K.TEXTURE0),Ie.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,W.flipY),Ie.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),Ie.pixelStorei(K.UNPACK_ALIGNMENT,W.unpackAlignment);const sn=Ie.getParameter(K.UNPACK_ROW_LENGTH),Je=Ie.getParameter(K.UNPACK_IMAGE_HEIGHT),si=Ie.getParameter(K.UNPACK_SKIP_PIXELS),on=Ie.getParameter(K.UNPACK_SKIP_ROWS),Fi=Ie.getParameter(K.UNPACK_SKIP_IMAGES);Ie.pixelStorei(K.UNPACK_ROW_LENGTH,It.width),Ie.pixelStorei(K.UNPACK_IMAGE_HEIGHT,It.height),Ie.pixelStorei(K.UNPACK_SKIP_PIXELS,Xe),Ie.pixelStorei(K.UNPACK_SKIP_ROWS,it),Ie.pixelStorei(K.UNPACK_SKIP_IMAGES,pt);const Xn=L.isDataArrayTexture||L.isData3DTexture,oi=W.isDataArrayTexture||W.isData3DTexture;if(L.isDepthTexture){const yt=ve.get(L),Jt=ve.get(W),_n=ve.get(yt.__renderTarget),bt=ve.get(Jt.__renderTarget);Ie.bindFramebuffer(K.READ_FRAMEBUFFER,_n.__webglFramebuffer),Ie.bindFramebuffer(K.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Ut=0;Ut<ze;Ut++)Xn&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ve.get(L).__webglTexture,re,pt+Ut),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ve.get(W).__webglTexture,ke,zt+Ut)),K.blitFramebuffer(Xe,it,Xe+$e,it+Fe,qe,gt,qe+$e,gt+Fe,K.DEPTH_BUFFER_BIT,K.NEAREST);Ie.bindFramebuffer(K.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(re!==0||L.isRenderTargetTexture||ve.has(L)){const yt=ve.get(L),Jt=ve.get(W);Ie.bindFramebuffer(K.READ_FRAMEBUFFER,k),Ie.bindFramebuffer(K.DRAW_FRAMEBUFFER,ae);for(let _n=0;_n<ze;_n++)Xn?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,yt.__webglTexture,re,pt+_n):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,yt.__webglTexture,re),oi?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Jt.__webglTexture,ke,zt+_n):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Jt.__webglTexture,ke),re!==0?K.blitFramebuffer(Xe,it,Xe+$e,it+Fe,qe,gt,qe+$e,gt+Fe,K.COLOR_BUFFER_BIT,K.NEAREST):oi?K.copyTexSubImage3D(Ye,ke,qe,gt,zt+_n,Xe,it,$e,Fe):K.copyTexSubImage2D(Ye,ke,qe,gt,Xe,it,$e,Fe);Ie.bindFramebuffer(K.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else oi?L.isDataTexture||L.isData3DTexture?K.texSubImage3D(Ye,ke,qe,gt,zt,$e,Fe,ze,Rt,Xt,It.data):W.isCompressedArrayTexture?K.compressedTexSubImage3D(Ye,ke,qe,gt,zt,$e,Fe,ze,Rt,It.data):K.texSubImage3D(Ye,ke,qe,gt,zt,$e,Fe,ze,Rt,Xt,It):L.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,ke,qe,gt,$e,Fe,Rt,Xt,It.data):L.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,ke,qe,gt,It.width,It.height,Rt,It.data):K.texSubImage2D(K.TEXTURE_2D,ke,qe,gt,$e,Fe,Rt,Xt,It);Ie.pixelStorei(K.UNPACK_ROW_LENGTH,sn),Ie.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Je),Ie.pixelStorei(K.UNPACK_SKIP_PIXELS,si),Ie.pixelStorei(K.UNPACK_SKIP_ROWS,on),Ie.pixelStorei(K.UNPACK_SKIP_IMAGES,Fi),ke===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&K.generateMipmap(Ye),Ie.unbindTexture()},this.initRenderTarget=function(L){ve.get(L).__webglFramebuffer===void 0&&ye.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?ye.setTextureCube(L,0):L.isData3DTexture?ye.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?ye.setTexture2DArray(L,0):ye.setTexture2D(L,0),Ie.unbindTexture()},this.resetState=function(){ie=0,te=0,j=null,Ie.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return er}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}const ul=new ce;function Pi(n,e,t,r,s,o){const u=2*Math.PI*s/4,d=Math.max(o-2*s,0),f=Math.PI/4;ul.copy(e),ul[r]=0,ul.normalize();const h=.5*u/(u+d),v=1-ul.angleTo(n)/f;return Math.sign(ul[t])===1?v*h:d/(u+d)+h+h*(1-v)}class Vm extends yo{constructor(e=1,t=1,r=1,s=2,o=.1){const u=s*2+1;if(o=Math.min(e/2,t/2,r/2,o),super(1,1,1,u,u,u),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:r,segments:s,radius:o},u===1)return;const d=this.toNonIndexed();this.index=null,this.attributes.position=d.attributes.position,this.attributes.normal=d.attributes.normal,this.attributes.uv=d.attributes.uv;const f=new ce,h=new ce,v=new ce(e,t,r).divideScalar(2).subScalar(o),m=this.attributes.position.array,g=this.attributes.normal.array,x=this.attributes.uv.array,E=m.length/6,R=new ce,y=.5/u;for(let S=0,w=0;S<m.length;S+=3,w+=2)switch(f.fromArray(m,S),h.copy(f),h.x-=Math.sign(h.x)*y,h.y-=Math.sign(h.y)*y,h.z-=Math.sign(h.z)*y,h.normalize(),m[S+0]=v.x*Math.sign(f.x)+h.x*o,m[S+1]=v.y*Math.sign(f.y)+h.y*o,m[S+2]=v.z*Math.sign(f.z)+h.z*o,g[S+0]=h.x,g[S+1]=h.y,g[S+2]=h.z,Math.floor(S/E)){case 0:R.set(1,0,0),x[w+0]=Pi(R,h,"z","y",o,r),x[w+1]=1-Pi(R,h,"y","z",o,t);break;case 1:R.set(-1,0,0),x[w+0]=1-Pi(R,h,"z","y",o,r),x[w+1]=1-Pi(R,h,"y","z",o,t);break;case 2:R.set(0,1,0),x[w+0]=1-Pi(R,h,"x","z",o,e),x[w+1]=Pi(R,h,"z","x",o,r);break;case 3:R.set(0,-1,0),x[w+0]=1-Pi(R,h,"x","z",o,e),x[w+1]=1-Pi(R,h,"z","x",o,r);break;case 4:R.set(0,0,1),x[w+0]=1-Pi(R,h,"x","y",o,e),x[w+1]=1-Pi(R,h,"y","x",o,t);break;case 5:R.set(0,0,-1),x[w+0]=Pi(R,h,"x","y",o,e),x[w+1]=1-Pi(R,h,"y","x",o,t);break}}static fromJSON(e){return new Vm(e.width,e.height,e.depth,e.segments,e.radius)}}let cl,Li,Vr,Wh,Vy,Wy;const $h=new Set;function fD(n,e,t){Li={game:n,viewer:e,replaying:t}}async function hD(n){return Vr?Vr.reveal(n):!1}const Xh=new Map;function pD(n){return Xh.has(n)||Xh.set(n,new Promise(e=>{const t=new Image;t.onload=()=>e(t),t.onerror=()=>e(null),t.src=n})),Xh.get(n)}function mD(){var At,Ct,Ie;const n=document.querySelector(".match-mode:not(.lobby-mode) .rows"),e=Li?JSON.stringify({game:Li.game,viewer:Li.viewer,replaying:Li.replaying}):null;if(n&&e===Wy&&Vr){(At=Vr.updateSelection)==null||At.call(Vr);return}if(Wy=e,cl==null||cl(),cl=null,Vr=null,!n)return;const t=document.querySelector(".page-shell"),r=document.createElement("canvas");r.className="clubhouse-scene",t.prepend(r);let s;try{s=new dD({canvas:r,antialias:!0})}catch{r.remove();return}t.classList.add("clubhouse-ready");const o=document.createElement("div");o.className="clubhouse-score-strip",o.setAttribute("aria-label","Player scores"),document.querySelectorAll(".header-player").forEach(he=>{var ye,C;const ve=document.createElement("span");ve.textContent=(((ye=he.querySelector(".header-player-copy b"))==null?void 0:ye.textContent)||"Player")+" · "+(((C=he.querySelector(".header-player-score strong"))==null?void 0:C.textContent)||"0")+" bulls",o.append(ve)}),t.append(o),s.setPixelRatio(Math.min(Math.max(devicePixelRatio,2),2.5)),s.shadowMap.enabled=!0,s.shadowMap.type=yx,s.toneMapping=Rm,s.toneMappingExposure=1.3;const u=new YA;u.background=new Mt("#31273c"),u.fog=new Fm("#31273c",20,40);const d=new Di(38,1,.1,60);d.position.set(0,11.8,16.5),d.lookAt(0,.65,-.8);const f=[],h=[],v=[],m=[];let g=!1,x;const E=(Li==null?void 0:Li.game.round)+":"+(Li==null?void 0:Li.game.turn);Vy!==E&&(Vy=E,$h.clear());const R=Li,y=(R==null?void 0:R.game.players.filter(he=>he.id!==R.viewer))||[],S=new Map(y.map((he,ve)=>[he.id,y.length===1?0:(ve/(y.length-1)-.5)*4.4]));r.dataset.opponents=String(y.length);const w=(R!=null&&R.replaying&&Wh?Wh:(R==null?void 0:R.game.rows)||[]).map(he=>he.slice());R!=null&&R.replaying||(Wh=w.map(he=>he.slice()));function N(he,ve){return new Promise(ye=>{m.push({start:performance.now(),duration:he,update:ve,resolve:ye})})}const D=(he,ve=.65)=>{const ye=new uC({color:he,roughness:ve});return f.push(ye),ye},U=D("#92582f",.4),I=D("#c48c50",.4),b=D("#233d72",.98),P=D("#f8e9cc"),G=D("#251d26"),O=D("#e3ad4d",.3);function B(he,ve,ye=u){f.push(he);const C=new Ua(he,ve);return C.castShadow=C.receiveShadow=!0,ye.add(C),C}function V(he,ve,ye,C,T,$,me,Q=u,Me=.06){const be=B(new Vm(he,ve,ye,3,Math.min(Me,he/2,ve/2,ye/2)),C,Q);return be.position.set(T,$,me),be}function X(he,ve,ye,C,T,$,me,Q){const Me=B(new zm(1,24,16),me,Q);return Me.position.set(he,ve,ye),Me.scale.set(C,T,$),Me}u.add(new fC("#ffe6bc","#364a80",2.2));const k=new mC("#ffd1a1",3);k.position.set(-4,9,5),k.castShadow=!0,k.shadow.mapSize.set(1024,1024),Object.assign(k.shadow.camera,{left:-7,right:7,top:8,bottom:-8}),k.shadow.bias=-.001,u.add(k);const ae=new _y("#8da3ff",22,20);ae.position.set(4,5,-4),u.add(ae),V(24,.2,25,U,0,-.9,-2),V(22,10,.3,D("#513a4d"),0,3.5,-7.8);for(let he=-10;he<=10;he+=1.5)V(.07,9,.12,U,he,3.5,-7.55);for(const he of[-1,1]){V(2.4,5,.65,U,he*5.7,1.7,-6.8);for(let C=0;C<4.5;C+=1.15){V(2.35,.12,.85,I,he*5.7,C,-6.5);for(let T=0;T<6;T++)V(.22,.55+T%3*.12,.35,D(["#8b5879","#728a78","#c09060"][T%3]),he*5.7-.8+T*.3,C+.4,-6.4)}B(new Jc(.7,.5,32,1,!0),O).position.set(he*3.5,4.6,-5),V(.04,2,.04,O,he*3.5,5.7,-5);const ye=new _y("#ffc16e",18,9);ye.position.set(he*3.5,4.3,-5),u.add(ye)}V(2.5,1.8,.1,I,0,3.6,-7.5),V(2.25,1.55,.1,D("#744656"),0,3.6,-7.4);const ie=document.createElement("canvas");ie.width=512,ie.height=256;const te=ie.getContext("2d");te.fillStyle="#ffe7ac",te.textAlign="center",te.font="bold 100px Georgia",te.fillText("Take 5",256,150);const j=new ol(ie);f.push(j);const Y=new gl({map:j,transparent:!0});f.push(Y),B(new Ia(2.2,1.1),Y).position.set(0,3.65,-7.3);function F(he,ve,ye,C){const T=B(new Nl(he,he,ye,80),C);return T.scale.z=1.16,T.position.y=ve,T}F(4.1,-.14,.42,U),F(4.02,.07,.12,I),F(3.73,.14,.08,b);const ee=document.createElement("canvas");ee.width=ee.height=128;const Ae=ee.getContext("2d");Ae.fillStyle="#7587a2",Ae.fillRect(0,0,128,128);for(let he=0;he<128;he+=3)Ae.fillStyle=he%2?"#637594":"#8999b0",Ae.fillRect(he,0,1,128),Ae.fillRect(0,he,128,1);const ne=new ol(ee);ne.wrapS=ne.wrapT=Xc,ne.repeat.set(18,18),f.push(ne),b.bumpMap=ne,b.bumpScale=.02;function xe(he,ve){const ye=new so;ye.position.set(ve,.2,-4.15),ye.scale.setScalar(Math.min(1.3,3.6/Math.max(1,y.length))),u.add(ye);const C=D(he==="fox"?"#e88b34":he==="bear"?"#a7754b":"#7eae43"),T=D(he==="fox"?"#ead3a8":he==="bear"?"#4f5683":"#c89e4f");if(V(1.65,1.9,.6,D("#773d47"),0,.7,-.5,ye,.25),X(0,.85,0,.64,.72,.45,T,ye),X(0,1.85,.04,.67,.63,.52,C,ye),he==="fox")for(const $ of[-1,1]){const me=B(new Jc(.25,.64,3),C,ye);me.position.set($*.47,2.43,0),me.rotation.z=-$*.22,X($*.24,1.64,.42,.33,.22,.16,P,ye)}if(he==="bear")for(const $ of[-1,1])X($*.53,2.29,0,.24,.25,.19,C,ye),X($*.53,2.29,.13,.12,.13,.06,P,ye);if(he==="frog")for(const $ of[-1,1])X($*.33,2.23,.25,.29,.3,.25,C,ye);for(const $ of[-1,1])X($*.25,1.95,.49,.135,.16,.055,P,ye),X($*.25,1.94,.54,.065,.085,.025,G,ye),X($*.27,1.98,.565,.024,.03,.012,P,ye),X($*.48,.35,.55,.23,.16,.28,C,ye);X(0,1.61,.5,.28,.18,.1,he==="frog"?C:P,ye),X(0,1.7,.61,.11,.075,.065,G,ye),X(0,1.48,.56,.12,.065,.035,G,ye),v.push(ye)}y.forEach((he,ve)=>xe(["fox","bear","frog"][ve%3],S.get(he.id)));function Ee(he,ve,ye,C){const T=document.createElement("canvas");T.width=T.height=128;const $=T.getContext("2d");$.fillStyle="#322039",$.font="bold 70px Arial",$.textAlign="center",$.fillText(he,64,90);const me=new ol(T);f.push(me);const Q=new gl({map:me,transparent:!0});f.push(Q);const Me=B(new Ia(.4,.4),Q);Me.position.set(ve,ye,C),Me.rotation.x=-Math.PI/2}async function Ce(he,ve){const ye=Number(he.dataset.cardNumber||he.dataset.card),C=ye===55?7:ye%11===0?5:ye%10===0?3:ye%5===0?2:1,T={1:"one-bull",2:"two-bulls",3:"three-bulls",5:"five-bulls",7:"seven-bulls"}[C],$=await pD(new URL("assets/cards/card-"+T+".png",document.baseURI).href);if(g||!$)return;const me=document.createElement("canvas");me.width=1024,me.height=1536;const Q=me.getContext("2d");Q.imageSmoothingEnabled=!0,Q.imageSmoothingQuality="high",Q.fillStyle="#fffdf8",Q.beginPath(),Q.roundRect(0,0,1024,1536,48),Q.fill(),Q.save(),Q.beginPath(),Q.roundRect(0,0,1024,1536,48),Q.clip(),Q.drawImage($,$.width*.065,$.height*.045,$.width*.87,$.height*.91,0,0,1024,1536),Q.restore();const Me=String(ye);Q.textAlign="center",Q.textBaseline="middle",Q.font="900 "+(Me.length===3?440:530)+"px Arial, sans-serif",Q.lineJoin="round",Q.strokeStyle="#fffdf8",Q.lineWidth=30,Q.strokeText(Me,512,795),Q.fillStyle="#101622",Q.fillText(Me,512,795);const be={1:"#244d9b",2:"#158145",3:"#087eac",5:"#cf3032",7:"#b67e12"}[C];for(const H of[!1,!0])Q.save(),H&&(Q.translate(1024,1536),Q.rotate(Math.PI)),Q.beginPath(),Q.roundRect(18,18,988,1508,40),Q.clip(),Q.fillStyle=be,Q.beginPath(),Q.moveTo(18,18),Q.lineTo(1006,18),Q.lineTo(1006,165),Q.quadraticCurveTo(720,130,18,238),Q.closePath(),Q.fill(),Q.textAlign="left",Q.textBaseline="middle",Q.font="900 "+(Me.length===3?154:190)+"px Arial, sans-serif",Q.fillStyle="#ffffff",Q.fillText(Me,42,118),Q.restore();const de=new ol(me);de.colorSpace=ei,de.anisotropy=s.capabilities.getMaxAnisotropy(),f.push(de);const ge=new gl({map:de,side:_r,toneMapped:!1,fog:!1,transparent:!0,alphaTest:.1});f.push(ge);const Le=B(new Ia(.68,1.02),ge,ve);Le.position.z=.075,Le.castShadow=!1,r.dataset.textures=String(Number(r.dataset.textures||0)+1)}function _e(he,ve,ye,C,T=0,$=!1){const me=new so;return u.add(me),me.position.set(ve,ye,C),me.rotation.x=-1.35,me.position.y+=.1,me.rotation.z=T,V(.7,1.04,.065,P,0,0,0,me,.045),Ce(he,me),$&&(me.rotation.x=-.72,he.classList.contains("selected")&&(me.position.y+=.3,me.position.z-=.2,V(.76,1.1,.025,O,0,0,-.025,me,.045)),me.userData.control=he,h.push(me)),me}const Be=[[],[],[],[]];function mt(he){const ve=document.createElement("span");return ve.dataset.card=String(he),ve}for(let he=0;he<4;he++){const ve=-2.2+he*1.12;V(6.25,.012,.025,D("#67799b"),0,.195,ve+.57),Ee(String(he+1),-3.1,.21,ve),(Ct=w[he])==null||Ct.forEach((T,$)=>Be[he].push(_e(mt(T),-2.35+$*.81,.24,ve))),B(new Nl(.24,.24,.07,32),O).position.set(2.9,.24,ve);const C=(w[he]||[]).reduce((T,$)=>T+($===55?7:$%11===0?5:$%10===0?3:$%5===0?2:1),0);Ee(String(C),2.9,.285,ve)}const Ze=document.createElement("canvas");Ze.width=256,Ze.height=384;const lt=Ze.getContext("2d");lt.fillStyle="#264c88",lt.fillRect(0,0,256,384),lt.strokeStyle="#e6c07b",lt.lineWidth=10,lt.strokeRect(12,12,232,360),lt.fillStyle="#f5db9d",lt.font="bold 62px Georgia",lt.textAlign="center",lt.fillText("Take 5",128,208);const vt=new ol(Ze);vt.colorSpace=ei,f.push(vt);const ut=new gl({map:vt,toneMapped:!1});f.push(ut);const kt=new Map;function Bt(he,ve,ye=!0){if(kt.has(he))return kt.get(he);const C=he===(R==null?void 0:R.viewer),T=_e(mt(ve||1),C?0:S.get(he)||0,C?.42:4.25,C?2.8:-4.05);T.rotation.x=C?-1.35:0,C||T.quaternion.copy(d.quaternion);const $=T.quaternion.clone(),me=B(new Ia(.68,1.02),ut,T);if(me.position.z=-.075,me.rotation.y=Math.PI,T.userData.base=$,T.userData.back=me,T.userData.playerId=he,ye&&T.quaternion.multiply(new qr().setFromAxisAngle(new ce(0,1,0),Math.PI)),kt.set(he,T),r.dataset.stagePlayers=JSON.stringify([...kt.keys()]),!(R!=null&&R.replaying)&&!$h.has(he)){$h.add(he);const Q=T.position.clone();T.position.y-=C?.08:1,T.scale.setScalar(.8),N(360,Me=>{const be=1-Math.pow(1-Me,3);T.position.y=Q.y-(C?.08:1)*(1-be),T.scale.setScalar(.8+.2*be)})}return T}if(!(R!=null&&R.replaying)){const he=new Set((R==null?void 0:R.game.readyPlayers)||Object.keys((R==null?void 0:R.game.selections)||{}));for(const ve of he)Bt(ve,(Ie=R.game.selections)==null?void 0:Ie[ve],!0);r.dataset.ready=String(he.size)}Vr={async reveal(he){r.dataset.reveal="flipping",window.dispatchEvent(new CustomEvent("clubhouse-reveal",{detail:{phase:"flipping"}}));const ve=he.slice().sort((C,T)=>C.card-T.card),ye=ve.map(C=>Bt(C.playerId,C.card,!0));await Promise.all(ye.map(C=>N(430,T=>C.quaternion.copy(C.userData.base).multiply(new qr().setFromAxisAngle(new ce(0,1,0),Math.PI*(1-T))))));for(const C of ve){if(g)return!0;r.dataset.reveal="moving-"+C.card,window.dispatchEvent(new CustomEvent("clubhouse-reveal",{detail:{phase:"moving",card:C.card,playerId:C.playerId}}));const T=kt.get(C.playerId);if(C.tookRow){const be=Be[C.rowIndex];await N(260,de=>be.forEach(ge=>{ge.position.y=.34+de*.4,ge.scale.setScalar(1-de*.85)})),be.forEach(de=>de.visible=!1),Be[C.rowIndex]=[]}const $=T.position.clone(),me=T.quaternion.clone(),Q=new ce(-2.35+Be[C.rowIndex].length*.81,.34,-2.2+C.rowIndex*1.12),Me=new qr().setFromEuler(new Kr(-1.35,0,0));await N(620,be=>{const de=be*be*(3-2*be);T.position.lerpVectors($,Q,de),T.position.y+=Math.sin(Math.PI*be)*.55,T.quaternion.slerpQuaternions(me,Me,de)}),Be[C.rowIndex].push(T),await N(100,()=>{})}return r.dataset.reveal="complete",window.dispatchEvent(new CustomEvent("clubhouse-reveal",{detail:{phase:"complete"}})),!0}},u.add(d);const Zt=[...document.querySelectorAll(".hand-card")];Zt.forEach((he,ve)=>{const ye=Zt.length===1?0:ve/(Zt.length-1)-.5,C=_e(he,0,0,0,-ye*.4,!0);d.add(C),C.position.set(ye*1.45,-1.32-Math.abs(ye)*.15,-5+(he.classList.contains("selected")?.15:0)),C.rotation.x=0,he.classList.contains("selected")&&(C.position.y+=.22),C.scale.setScalar(.52),C.userData.restY=-1.32-Math.abs(ye)*.15,C.userData.value=he.dataset.card}),Vr.updateSelection=()=>{const he=[...document.querySelectorAll(".hand-card")];h.forEach(ve=>{const ye=he.find(Me=>Me.dataset.card===ve.userData.value);if(!ye)return;ve.userData.control=ye;const C=ye.classList.contains("selected");ve.userData.highlight||(ve.userData.highlight=V(.76,1.1,.025,O,0,0,-.025,ve,.045)),ve.userData.highlight.visible=C;const T=ve.position.y,$=ve.userData.restY+(C?.22:0),me=C?-4.85:-5,Q=(ve.userData.revision||0)+1;ve.userData.revision=Q,N(180,Me=>{if(ve.userData.revision!==Q)return;const be=1-Math.pow(1-Me,3);ve.position.y=T+($-T)*be,ve.position.z=me})})};const Lt=new vC,vn=new Et;let Dt;r.addEventListener("pointerdown",he=>{Dt={x:he.clientX,y:he.clientY}}),r.addEventListener("pointerup",he=>{if(!Dt||Math.hypot(he.clientX-Dt.x,he.clientY-Dt.y)>12)return;const ve=r.getBoundingClientRect();vn.set((he.clientX-ve.left)/ve.width*2-1,-(he.clientY-ve.top)/ve.height*2+1),Lt.setFromCamera(vn,d);const ye=Lt.intersectObjects(h,!0)[0];if(ye){let C=ye.object;for(;C&&!C.userData.control;)C=C.parent;C!=null&&C.userData.control&&!C.userData.control.disabled&&C.userData.control.click()}});const jt=()=>{const he=t.getBoundingClientRect();s.setSize(he.width,he.height,!1),d.aspect=he.width/he.height,d.zoom=.8,d.updateProjectionMatrix(),d.updateMatrixWorld(),r.dataset.handTargets=JSON.stringify(h.map(ve=>{const ye=ve.getWorldPosition(new ce).project(d);return{x:(ye.x+1)*he.width/2,y:(1-ye.y)*he.height/2}}))},an=new ResizeObserver(jt);an.observe(t),jt();let hn=0;const K=matchMedia("(prefers-reduced-motion: reduce)").matches;function pn(he){if(!g&&(x=requestAnimationFrame(pn),!(he-hn<33))){hn=he;for(let ve=m.length-1;ve>=0;ve--){const ye=m[ve],C=Math.min(1,(he-ye.start)/(K?Math.min(ye.duration,80):ye.duration));ye.update(C),C===1&&(m.splice(ve,1),ye.resolve())}K||v.forEach((ve,ye)=>ve.rotation.z=Math.sin(he*8e-4+ye)*.012),s.render(u,d)}}x=requestAnimationFrame(pn),cl=()=>{g=!0,m.splice(0).forEach(he=>he.resolve()),cancelAnimationFrame(x),an.disconnect(),f.forEach(he=>he.dispose()),s.dispose(),s.forceContextLoss(),r.remove(),o.remove(),t.classList.remove("clubhouse-ready")}}const cM="take5-sound-enabled",gD={tap:{src:"assets/audio/click1.wav",volume:.12},select:{src:"assets/audio/click2.wav",volume:.17},card:{src:"assets/audio/click3.wav",volume:.2},deal:{src:"assets/audio/rollover1.wav",volume:.13},row:{src:"assets/audio/click1.wav",volume:.2}};let Ii=localStorage.getItem(cM)!=="false",fn,ri,Wm=!1,ps;const El=new Set,$y=new Map,dM=[523.25,null,659.25,783.99,null,659.25,587.33,null,523.25,null,392,523.25,null,587.33,523.25,null],pm=.42,vD=dM.length*pm;function _D(){if(fn)return fn;const n=window.AudioContext||window.webkitAudioContext;return n?(fn=new n,ri=fn.createGain(),ri.gain.value=0,ri.connect(fn.destination),fn):null}function Xy(n,e,t,r=.22,s="sine"){if(!fn||!ri||!n)return;const o=fn.createOscillator(),u=fn.createGain();o.type=s,o.frequency.setValueAtTime(n,e),u.gain.setValueAtTime(1e-4,e),u.gain.linearRampToValueAtTime(r,e+.035),u.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(u),u.connect(ri),o.start(e),o.stop(e+t+.02)}function $m(){if(!Ii||!Wm||!fn||fn.state!=="running")return;const n=fn.currentTime+.08;dM.forEach((e,t)=>{e&&Xy(e,n+t*pm,.3,.2,"sine")}),[0,4,8,12].forEach((e,t)=>Xy([261.63,196,220,196][t],n+e*pm,.6,.09,"triangle")),ps=setTimeout(()=>{ps=null,$m()},vD*1e3)}function fM(){!Ii||!Wm||!fn||!ri||(ri.gain.cancelScheduledValues(fn.currentTime),ri.gain.setTargetAtTime(.08,fn.currentTime,1.2),ps||$m())}function Xm(){if(!Ii)return;const n=_D();(n==null?void 0:n.state)==="suspended"&&n.resume().catch(()=>{}),fM()}function _s(n){Wm=n,n||(clearTimeout(ps),ps=null),!(!fn||!ri)&&(ri.gain.cancelScheduledValues(fn.currentTime),ri.gain.setTargetAtTime(Ii&&n?.08:0,fn.currentTime,n?1.2:.35),Ii&&n&&$m())}function ka(n){if(!Ii)return;const e=gD[n];if(!e)return;const t=$y.get(n)||new Audio(e.src);t.preload="auto",$y.set(n,t);const r=t.cloneNode();r.volume=e.volume,El.add(r),r.addEventListener("ended",()=>El.delete(r),{once:!0}),r.play().catch(()=>El.delete(r))}function mm(){return Ii}function hM(){return Ii=!Ii,localStorage.setItem(cM,String(Ii)),Ii?(Xm(),fM()):(El.forEach(n=>{n.pause(),n.currentTime=0}),El.clear(),clearTimeout(ps),ps=null,fn&&ri&&(ri.gain.cancelScheduledValues(fn.currentTime),ri.gain.setTargetAtTime(0,fn.currentTime,.12))),Ii}/*! Capacitor: https://capacitorjs.com/ - MIT License */var vo;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(vo||(vo={}));class qh extends Error{constructor(e,t,r){super(e),this.message=e,this.code=t,this.data=r}}const yD=n=>{var e,t;return n!=null&&n.androidBridge?"android":!((t=(e=n==null?void 0:n.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},SD=n=>{const e=n.CapacitorCustomPlatform||null,t=n.Capacitor||{},r=t.Plugins=t.Plugins||{},s=()=>e!==null?e.name:yD(n),o=()=>s()!=="web",u=m=>{const g=h.get(m);return!!(g!=null&&g.platforms.has(s())||d(m))},d=m=>{var g;return(g=t.PluginHeaders)===null||g===void 0?void 0:g.find(x=>x.name===m)},f=m=>n.console.error(m),h=new Map,v=(m,g={})=>{const x=h.get(m);if(x)return console.warn(`Capacitor plugin "${m}" already registered. Cannot register plugins twice.`),x.proxy;const E=s(),R=d(m);let y;const S=async()=>(!y&&E in g?y=typeof g[E]=="function"?y=await g[E]():y=g[E]:e!==null&&!y&&"web"in g&&(y=typeof g.web=="function"?y=await g.web():y=g.web),y),w=(P,G)=>{var O,B;if(R){const V=R==null?void 0:R.methods.find(X=>G===X.name);if(V)return V.rtype==="promise"?X=>t.nativePromise(m,G.toString(),X):(X,k)=>t.nativeCallback(m,G.toString(),X,k);if(P)return(O=P[G])===null||O===void 0?void 0:O.bind(P)}else{if(P)return(B=P[G])===null||B===void 0?void 0:B.bind(P);throw new qh(`"${m}" plugin is not implemented on ${E}`,vo.Unimplemented)}},N=P=>{let G;const O=(...B)=>{const V=S().then(X=>{const k=w(X,P);if(k){const ae=k(...B);return G=ae==null?void 0:ae.remove,ae}else throw new qh(`"${m}.${P}()" is not implemented on ${E}`,vo.Unimplemented)});return P==="addListener"&&(V.remove=async()=>G()),V};return O.toString=()=>`${P.toString()}() { [capacitor code] }`,Object.defineProperty(O,"name",{value:P,writable:!1,configurable:!1}),O},D=N("addListener"),U=N("removeListener"),I=(P,G)=>{const O=D({eventName:P},G),B=async()=>{const X=await O;U({eventName:P,callbackId:X},G)},V=new Promise(X=>O.then(()=>X({remove:B})));return V.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await B()},V},b=new Proxy({},{get(P,G){switch(G){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return R?I:D;case"removeListener":return U;default:return N(G)}}});return r[m]=b,h.set(m,{name:m,proxy:b,platforms:new Set([...Object.keys(g),...R?[E]:[]])}),b};return t.convertFileSrc||(t.convertFileSrc=m=>m),t.getPlatform=s,t.handleError=f,t.isNativePlatform=o,t.isPluginAvailable=u,t.registerPlugin=v,t.Exception=qh,t.DEBUG=!!t.DEBUG,t.isLoggingEnabled=!!t.isLoggingEnabled,t},xD=n=>n.Capacitor=SD(n),ed=xD(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),ud=ed.registerPlugin;class qm{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(t);const o=this.windowListeners[e];o&&!o.registered&&this.addWindowListener(o),r&&this.sendRetainedArgumentsForEvent(e);const u=async()=>this.removeListener(e,t);return Promise.resolve({remove:u})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,r){const s=this.listeners[e];if(!s){if(r){let o=this.retainedEventArguments[e];o||(o=[]),o.push(t),this.retainedEventArguments[e]=o}return}s.forEach(o=>o(t))}hasListeners(e){var t;return!!(!((t=this.listeners[e])===null||t===void 0)&&t.length)}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:r=>{this.notifyListeners(t,r)}}}unimplemented(e="not implemented"){return new ed.Exception(e,vo.Unimplemented)}unavailable(e="not available"){return new ed.Exception(e,vo.Unavailable)}async removeListener(e,t){const r=this.listeners[e];if(!r)return;const s=r.indexOf(t);s!==-1&&this.listeners[e].splice(s,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(r=>{this.notifyListeners(e,r)}))}}const qy=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Yy=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class MD extends qm{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[s,o]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=Yy(s).trim(),o=Yy(o).trim(),t[s]=o}),t}async setCookie(e){try{const t=qy(e.key),r=qy(e.value),s=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",o=(e.path||"/").replace("path=",""),u=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${r||""}${s}; path=${o}; ${u};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}ud("CapacitorCookies",{web:()=>new MD});const ED=async n=>new Promise((e,t)=>{const r=new FileReader;r.onload=()=>{const s=r.result;e(s.indexOf(",")>=0?s.split(",")[1]:s)},r.onerror=s=>t(s),r.readAsDataURL(n)}),bD=(n={})=>{const e=Object.keys(n);return Object.keys(n).map(s=>s.toLocaleLowerCase()).reduce((s,o,u)=>(s[o]=n[e[u]],s),{})},wD=(n,e=!0)=>n?Object.entries(n).reduce((r,s)=>{const[o,u]=s;let d,f;return Array.isArray(u)?(f="",u.forEach(h=>{d=e?encodeURIComponent(h):h,f+=`${o}=${d}&`}),f.slice(0,-1)):(d=e?encodeURIComponent(u):u,f=`${o}=${d}`),`${r}&${f}`},"").substr(1):null,TD=(n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),s=bD(n.headers)["content-type"]||"";if(typeof n.data=="string")t.body=n.data;else if(s.includes("application/x-www-form-urlencoded")){const o=new URLSearchParams;for(const[u,d]of Object.entries(n.data||{}))o.set(u,d);t.body=o.toString()}else if(s.includes("multipart/form-data")||n.data instanceof FormData){const o=new FormData;if(n.data instanceof FormData)n.data.forEach((d,f)=>{o.append(f,d)});else for(const d of Object.keys(n.data))o.append(d,n.data[d]);t.body=o;const u=new Headers(t.headers);u.delete("content-type"),t.headers=u}else(s.includes("application/json")||typeof n.data=="object")&&(t.body=JSON.stringify(n.data));return t};class RD extends qm{async request(e){const t=TD(e,e.webFetchExtra),r=wD(e.params,e.shouldEncodeUrlParams),s=r?`${e.url}?${r}`:e.url,o=await fetch(s,t),u=o.headers.get("content-type")||"";let{responseType:d="text"}=o.ok?e:{};u.includes("application/json")&&(d="json");let f,h;switch(d){case"arraybuffer":case"blob":h=await o.blob(),f=await ED(h);break;case"json":f=await o.json();break;case"document":case"text":default:f=await o.text()}const v={};return o.headers.forEach((m,g)=>{v[g]=m}),{data:f,headers:v,status:o.status,url:o.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}ud("CapacitorHttp",{web:()=>new RD});var Ky;(function(n){n.Dark="DARK",n.Light="LIGHT",n.Default="DEFAULT"})(Ky||(Ky={}));var Zy;(function(n){n.StatusBar="StatusBar",n.NavigationBar="NavigationBar"})(Zy||(Zy={}));class AD extends qm{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}ud("SystemBars",{web:()=>new AD});const Yh=ud("App",{web:()=>iS(()=>import("./web-DGRLt8y5.js"),[]).then(n=>new n.AppWeb)}),pM=ed.isNativePlatform(),CD="https://take-five-friends-game.onrender.com/";pM&&(document.documentElement.classList.add("capacitor-native"),Yh.addListener("backButton",()=>{var r;const n=document.querySelector("#rulesDialog");if(n!=null&&n.open){n.close();return}const e=document.querySelector("#gameMenuPanel");if(e&&!e.classList.contains("is-hidden")){(r=document.querySelector("#gameMenuToggle"))==null||r.dispatchEvent(new CustomEvent("rnpress",{bubbles:!0}));return}const t=document.querySelector("#gameMenuToggle");if(t){t.dispatchEvent(new CustomEvent("rnpress",{bubbles:!0}));return}Yh.exitApp()}),Yh.addListener("appUrlOpen",({url:n})=>{try{const e=new URL(n).searchParams.get("room");/^\d{4}$/.test(e||"")&&window.location.assign(`/?room=${encodeURIComponent(e)}`)}catch{}}));const Ym=[{id:"take-5",name:"Take 5",category:"Card game",status:"available",route:"take-5",description:"A clever card game where every move counts. Avoid the bulls!",featuredDescription:"Think ahead, play your cards, and avoid collecting the bulls!",artwork:"take5"},{id:"phase-10",name:"Phase 10",category:"Card game",status:"available",route:"phase-10",description:"Build sets, make runs, and race through all ten phases.",artwork:"phase10"},{id:"splendor",name:"Splendor",category:"Strategy game",status:"coming-soon",route:null,description:"Collect precious gems, build your empire, and earn prestige.",artwork:"splendor"}],hr=Ym.find(n=>n.status==="available");function mM(n){return`<span class="game-status game-status--${n.status}">${n.status==="available"?"Available now":"Coming soon"}</span>`}function gM(n){return n.artwork==="take5"?'<div class="game-art game-art--take5"><span class="game-art-card game-art-card--one" aria-hidden="true"></span><span class="game-art-card game-art-card--two" aria-hidden="true"></span><span class="game-art-card game-art-card--three" aria-hidden="true"></span><span class="game-art-bull">♞</span></div>':n.artwork==="phase10"?'<div class="game-art game-art--phase10"><span class="phase-orb phase-orb--blue">7</span><span class="phase-orb phase-orb--red">10</span><span class="phase-orb phase-orb--gold">★</span><span class="phase-run">4 · 5 · 6 · 7</span></div>':'<div class="game-art game-art--splendor"><span class="gem gem--emerald"></span><span class="gem gem--ruby"></span><span class="gem gem--sapphire"></span><span class="splendor-crown">♛</span></div>'}function PD(n){const e=n.status==="available";return`<article class="game-card game-card--${n.id}" data-game-id="${n.id}" ${e?`data-game-tile="play" role="button" tabindex="0" aria-label="Play ${n.name}"`:""}>
    ${gM(n)}
    <div class="game-card-copy">
      <div class="game-card-meta"><span>${n.category}</span>${mM(n)}</div>
      <h3>${n.name}</h3>
      <p>${n.description}</p>
      <button class="game-card-action" data-game-action="${e?"play":"soon"}" data-game-id="${n.id}" ${e?"":'aria-disabled="true"'}>${e?"Play now":"Coming soon"} <span>→</span></button>
    </div>
  </article>`}function jy(){return Ym.map(PD).join("")}const LD=["blue","green","red","yellow"],gm=["2 sets of 3","1 set of 3 + 1 run of 4","1 set of 4 + 1 run of 4","1 run of 7","1 run of 8","1 run of 9","2 sets of 4","7 cards of one color","1 set of 5 + 1 set of 2","1 set of 5 + 1 set of 3"],DD=["🧑🏻","🦊","🐻","🐸"];let ID=0;const Kh=(n,e=null)=>({id:`phase-card-${ID++}`,value:n,color:e}),Na=n=>n.value==="wild",tr=n=>n.value==="skip";function ND(){const n=[];for(let e=0;e<2;e++)LD.forEach(t=>{for(let r=1;r<=12;r++)n.push(Kh(r,t))});for(let e=0;e<8;e++)n.push(Kh("wild"));for(let e=0;e<4;e++)n.push(Kh("skip"));return OD(n)}function OD(n){const e=n.slice();for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e}function UD(n){return Na(n)?25:tr(n)?15:n.value>=10?10:5}function Km(n){return n.filter(e=>!Na(e)&&!tr(e))}function Zm(n,e){return n.length===e&&!n.some(tr)}function pr(n,e){const t=Km(n).map(r=>r.value);return Zm(n,e)&&t.length>0&&t.every(r=>r===t[0])}function dl(n,e){const t=Km(n).map(o=>o.value);if(!Zm(n,e)||t.length===0||new Set(t).size!==t.length)return!1;const r=Math.min(...t),s=Math.max(...t);return s-r<e&&Math.max(1,s-e+1)<=Math.min(r,13-e)}function FD(n,e){const t=Km(n).map(r=>r.color);return Zm(n,e)&&t.length>0&&t.every(r=>r===t[0])}function vM(n,e,t=0,r=[],s=[]){if(r.length===e)return s.push(r),s;for(let o=t;o<=n.length-(e-r.length);o++)vM(n,e,o+1,r.concat(o),s);return s}function no(n,e,t,r,s){return n.length!==e+r?!1:vM(n,e).some(o=>{const u=o.map(f=>n[f]),d=n.filter((f,h)=>!o.includes(h));return t(u,e)&&s(d,r)})}function _M(n,e){switch(n){case 1:return no(e,3,pr,3,pr);case 2:return no(e,3,pr,4,dl);case 3:return no(e,4,pr,4,dl);case 4:return dl(e,7);case 5:return dl(e,8);case 6:return dl(e,9);case 7:return no(e,4,pr,4,pr);case 8:return FD(e,7);case 9:return no(e,5,pr,2,pr);case 10:return no(e,5,pr,3,pr);default:return!1}}function yM(n,e){const t=ND(),r=[{id:"phase-you",name:n||"You",avatar:e,phase:1,score:0,hand:[],laid:!1,phaseCards:[]},{id:"phase-milo",name:"Milo",avatar:"🦊",phase:1,score:0,hand:[],laid:!1,phaseCards:[]},{id:"phase-nora",name:"Nora",avatar:"🐻",phase:1,score:0,hand:[],laid:!1,phaseCards:[]},{id:"phase-pip",name:"Pip",avatar:"🐸",phase:1,score:0,hand:[],laid:!1,phaseCards:[]}];return r.forEach(s=>{s.hand=t.splice(0,10)}),{players:r,drawPile:t,discardPile:[t.pop()],current:0,turn:"draw",selected:[],message:"Draw a card to begin.",round:1,finished:!1,skipped:null}}const _i=document.querySelector("#app"),td=document.querySelector("#rulesDialog"),Jy=new URLSearchParams(location.search),jm="take5-host-save",ms="take5-guest-session",M={screen:"home",mode:"online",tab:"rooms",name:localStorage.getItem("take5-name")||"",peer:null,host:!1,connection:null,connections:new Map,clientId:null,roomId:"",players:[],game:null,selected:null,busy:!1,toastTimer:null,botCount:3,roundFlashTimer:null,submittedTurn:!1,animating:!1,replay:null,replayKey:null,revealOrigins:{},stageSeen:new Set,stageTurnKey:null,countdownTimer:null,countdownInterval:null,reconnectTimer:null,peerReconnectTimer:null,disconnectAdvanceTimer:null,resumeToken:null,recoveringGuest:!1,reactionCooldowns:new Map,screenTransition:!1,phase10:null,phase10Avatar:"🧑🏻"};document.addEventListener("pointerdown",Xm,{passive:!0});document.addEventListener("keydown",Xm);function SM(){var n;if(M.peer){if(M.peer.disconnected)try{M.peer.reconnect()}catch{dd(M.peer)}if(!M.host&&M.roomId){const e=M.peer;(n=M.connection)!=null&&n.open?M.connection.send({type:"sync"}):(M.connection=null,clearTimeout(M.reconnectTimer),fd(M.roomId,e))}}}window.addEventListener("online",SM);document.addEventListener("visibilitychange",()=>{document.hidden||SM()});document.querySelector("#homeLink").addEventListener("click",n=>{n.preventDefault(),Fa()});_x(td);Kt(".dialog-close",()=>td.close());var nS;if(Jy.get("room")){const n=Jy.get("room");M.tab="rooms",M.roomPrefill=/^\d{4}$/.test(n)?n:((nS=n.match(/^take5-(\d{4})$/))==null?void 0:nS[1])||""}const Zh=cd(jm),$r=cd(ms),jh=M.roomPrefill||($r==null?void 0:$r.roomId)||"",kD=!!$r&&(!M.roomPrefill||$r.roomId===M.roomPrefill);Zh&&(M.roomPrefill===Zh.roomId||!M.roomPrefill&&!kD)?(Fa(),iI(Zh)):(Fa(),jh&&($r==null?void 0:$r.roomId)===jh&&(M.resumeToken=$r.token,M.recoveringGuest=!0,sg(jh)));function cd(n){try{return JSON.parse(localStorage.getItem(n)||"null")}catch{return null}}function Wt(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function nr(n,e,{nativeControls:t=!0}={}){const r=M.screenTransition&&!matchMedia("(prefers-reduced-motion: reduce)").matches;if(YR(n),n.innerHTML=e,requestAnimationFrame(mD),t)try{_x(n)}catch(s){console.error("Could not mount React Native Web controls.",s)}r&&(n.animate([{opacity:0,transform:"translateY(10px) scale(.992)"},{opacity:1,transform:"translateY(0) scale(1)"}],{duration:300,easing:"cubic-bezier(.2,.78,.25,1)"}),M.screenTransition=!1)}function Kt(n,e){(typeof n=="string"?document.querySelectorAll(n):[n]).forEach(r=>{if(!r)return;const s=o=>{ka("tap"),e(o,r)};r.addEventListener("rnpress",s),r.addEventListener("click",o=>{r.closest(".rn-control-root")||s(o)})})}function BD(){const n=mm();return`<button class="icon-button sound-toggle" id="soundToggle" aria-label="${n?"Mute sound":"Enable sound"}" aria-pressed="${n}" title="${n?"Mute sound":"Enable sound"}"><span class="sound-toggle-glyph" aria-hidden="true">♪</span><span class="sound-toggle-state" aria-hidden="true">${n?"":"×"}</span></button>`}function zD(){Kt("#soundToggle",()=>{hM(),Qr()})}function ni(n){return n===55?7:n%11===0?5:n%10===0?3:n%5===0?2:1}function HD(n){return{1:"one-bull",2:"two-bulls",3:"three-bulls",5:"five-bulls",7:"seven-bulls"}[ni(n)]}function Er(){return'<span class="bull-icon" aria-hidden="true"><img class="bull-icon-art" src="assets/bullhead.svg" alt="" draggable="false"></span>'}function Qy(n){return`<span class="bull-marks" aria-label="${ni(n)} bullheads">${Array.from({length:ni(n)},()=>'<i class="bull-head" aria-hidden="true"></i>').join("")}</span>`}function ao(n,e=""){const t=HD(n),r=Wt(n),s=String(n).length;return`<span class="card-face ${e} tone-${t} value-${s}-digits" aria-hidden="true"><img class="card-art" src="assets/cards/card-${t}.png" alt="" draggable="false"><span class="card-corner top-left">${r}</span><span class="card-corner top-right">${r}</span>${Qy(n)}<span class="card-value-outline">${r}</span><span class="card-value">${r}</span><span class="card-bottom-meta"><span class="card-corner bottom-left">${r}</span>${Qy(n)}<span class="card-corner bottom-right">${r}</span></span></span>`}function xM(n,e){return n.human?["🧑🏻","👩🏽","🧔🏼","👩🏻","🧑🏾","👩🏼","🧑🏽","👨🏾","👩🏻","🧑🏼"][e%10]:["🦊","🐻","🐸","🐼","🐯","🐵","🐰","🦝","🦁"][Math.max(0,e-1)%9]}function GD(){return Array.from({length:104},(n,e)=>e+1).sort(()=>Math.random()-.5)}function Qr(){var h,v;const n=document.querySelector("#homeLink"),e=document.querySelector("#headerRoster"),t=document.querySelector("#topbarRight"),r=M.screen==="home",s=["lobby","game","result"].includes(M.screen);if(n&&(n.innerHTML='<span class="brand-mark">CG</span><span>Card <span class="brand-dot">Games</span></span>'),r){e.innerHTML="",nr(t,`<div class="platform-profile" aria-label="Player profile"><span class="platform-avatar">${Wt((M.name||"P").slice(0,1).toUpperCase())}</span><span class="platform-profile-copy"><b>${Wt(M.name||"Player")}</b><small>Ready to play</small></span></div>`,{nativeControls:!1}),Kt("[data-platform-nav]",(m,g)=>{var E;const x=g.dataset.platformNav;x==="take5"?Qm():x==="games"?(E=document.querySelector("#games"))==null||E.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"smooth"})});return}const o=M.screen==="lobby"?M.players:((h=M.game)==null?void 0:h.players)||M.players,u=!!M.game&&["game","result"].includes(M.screen);if(e&&(e.innerHTML=s?o.map((m,g)=>{var y;const x=m.id===M.clientId,E=((y=m.hand)==null?void 0:y.length)||0,R=u?`${E} cards`:m.human?m.ready?"READY":"ONLINE":"BOT";return`<div class="header-player ${x?"is-you":""} ${m.ready?"is-ready":""}" data-player-id="${Wt(m.id)}"><span class="header-avatar">${xM(m,g)}</span><span class="header-player-copy"><b>${Wt(m.name)}${x?" · you":""}</b><small>${R}</small></span>${u?`<span class="header-player-score bull-counter-badge" aria-label="${m.total||0} bullheads"><strong>${m.total||0}</strong>${Er()}</span><span class="opponent-cards" aria-label="${E} cards in hand">${Array.from({length:Math.min(4,E)},(S,w)=>`<i style="--i:${w}"></i>`).join("")}</span>`:`<i class="header-player-status ${m.online===!1?"is-offline":""}"></i>`}</div>`}).join(""):""),!t)return;if(!s){nr(t,`<span class="top-note"><span class="online-dot"></span> the table is open</span>${BD()}<button class="icon-button" id="rulesButton" aria-label="How to play" title="How to play">?</button>`),zD(),Kt("#rulesButton",()=>td.showModal());return}const d=((v=M.mode)==null?void 0:v.startsWith("online"))||M.screen==="lobby",f=[];f.push(`<button class="menu-action" data-menu-action="toggle-sound"><span class="menu-action-icon">${mm()?"♫":"♪"}</span><span>${mm()?"Sound on":"Sound off"}</span></button>`),M.screen==="game"&&d&&f.push(`<div class="menu-reaction-section"><button class="menu-action menu-reaction-toggle" data-menu-action="toggle-reactions" aria-expanded="false"><span class="menu-action-icon">☺</span><span>Send a reaction</span><span class="menu-action-chevron" aria-hidden="true">⌄</span></button><div class="menu-reaction-picker" role="group" aria-label="Choose a reaction" hidden>${zl.map(m=>`<button class="menu-reaction-option" type="button" role="menuitem" data-reaction="${m}" aria-label="Send ${m} reaction">${m}</button>`).join("")}</div></div>`),d&&M.roomId&&(f.push('<button class="menu-action" data-menu-action="sync-room"><span class="menu-action-icon">⟳</span><span>Refresh room sync</span></button>'),f.push('<button class="menu-action" data-menu-action="copy-invite"><span class="menu-action-icon">↗</span><span>Copy invite link</span></button>'),f.push('<button class="menu-action" data-menu-action="copy-code"><span class="menu-action-icon">#</span><span>Copy room code</span></button>')),M.screen==="lobby"&&M.host&&f.push('<button class="menu-action" data-menu-action="start-game"><span class="menu-action-icon">▶</span><span>Start game</span></button>'),M.screen==="game"&&(!d||M.host)&&f.push('<button class="menu-action" data-menu-action="new-game"><span class="menu-action-icon">⟳</span><span>Start new game</span></button>'),M.screen==="result"&&f.push('<button class="menu-action" data-menu-action="new-game"><span class="menu-action-icon">⟳</span><span>Play again</span></button>'),f.push('<button class="menu-action" data-menu-action="rules"><span class="menu-action-icon">?</span><span>How to play</span></button>'),(d||M.screen==="game"||M.screen==="result")&&f.push('<button class="menu-action is-danger" data-menu-action="leave"><span class="menu-action-icon">↩</span><span>Leave game</span></button>'),nr(t,`<div class="menu-shell"><button class="menu-trigger" id="gameMenuToggle" aria-label="Game menu" aria-haspopup="menu" aria-expanded="false" title="Game menu"><span class="menu-icon" aria-hidden="true"></span></button><div class="game-menu-panel is-hidden" id="gameMenuPanel" role="menu">${f.join("")}</div></div>`),Kt("#gameMenuToggle",(m,g)=>{var R;const x=document.querySelector("#gameMenuPanel"),E=g.getAttribute("aria-expanded")!=="true";g.setAttribute("aria-expanded",String(E)),x.classList.toggle("is-hidden",!E),(R=g.closest(".menu-shell"))==null||R.classList.toggle("is-open",E)}),Kt(".menu-action",(m,g)=>{var R,y,S;const x=g.dataset.menuAction,E=document.querySelector("#gameMenuPanel");if(x==="toggle-reactions"){const w=g.nextElementSibling,N=g.getAttribute("aria-expanded")!=="true";g.setAttribute("aria-expanded",String(N)),w.hidden=!N,(R=g.closest(".menu-reaction-section"))==null||R.classList.toggle("is-expanded",N);return}if(E&&E.classList.add("is-hidden"),(y=document.querySelector("#gameMenuToggle"))==null||y.setAttribute("aria-expanded","false"),(S=document.querySelector(".menu-shell"))==null||S.classList.remove("is-open"),x==="copy-invite")uI();else if(x==="copy-code")CM(M.roomId,"Room code copied");else if(x==="sync-room")aI();else if(x==="toggle-sound")hM(),Qr();else if(x==="rules")td.showModal();else if(x==="leave")PM();else if(x==="start-game")nd();else if(x==="new-game"){if(d&&M.host&&M.players.forEach(w=>{w.score=0,w.total=0}),d&&!M.host)return vi("Ask the host to start another game.");d?nd():ng()}}),Kt(".menu-reaction-option",(m,g)=>wM(g.dataset.reaction))}function Fa(){hd(),document.body.classList.remove("match-mode","lobby-mode","take5-entry-mode"),document.body.classList.add("home-mode","platform-home"),M.screen="home",M.game=null,M.selected=null,_s(!0);try{if(!hr||typeof jy!="function")throw new Error("The game registry is unavailable.");Qr(),nr(_i,`<section class="platform-homepage">
      <section class="platform-welcome" aria-labelledby="platformWelcomeTitle"><div><h1 id="platformWelcomeTitle">Ready to play?</h1><p>Pick your game. Bring your friends. Let the fun begin.</p></div><span class="platform-online"><i></i> Games ready</span></section>
      <section class="platform-featured" data-game-tile="play" data-game-id="${hr.id}" role="button" tabindex="0" aria-label="Play ${Wt(hr.name)}" aria-labelledby="featuredTitle"><div class="featured-art">${gM(hr)}</div><div class="featured-copy"><div class="featured-meta"><span>Featured game</span>${mM(hr)}</div><h2 id="featuredTitle">${Wt(hr.name)}</h2><p>${hr.featuredDescription}</p><button class="platform-primary" data-game-action="play" data-game-id="${hr.id}">Play now <span>→</span></button></div><div class="featured-detail"><span>2–10 players</span><span>10 cards each</span><span>15 min</span></div></section>
      <section class="platform-library" id="games" aria-labelledby="gamesTitle"><div class="section-heading"><div><span>Game library</span><h2 id="gamesTitle">Your Game Collection</h2><p>Choose a game and start playing.</p></div></div><div class="game-library-grid">${jy()}</div></section>
    </section>`,{nativeControls:!1}),Kt("[data-game-action]",(n,e)=>{e.dataset.gameAction==="play"?Jh(e.dataset.gameId):vi(`${e.dataset.gameId==="phase-10"?"Phase 10":"Splendor"} is coming soon.`)}),document.querySelectorAll('[data-game-tile="play"]').forEach(n=>{n.addEventListener("click",e=>{e.target.closest("[data-game-action]")||Jh(n.dataset.gameId||hr.id)}),n.addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),Jh(n.dataset.gameId||hr.id))})})}catch(n){console.error("Could not render the Card Games lobby.",n),nr(_i,`<section class="platform-fallback" role="alert"><span>Card Games</span><h1>We couldn’t load the game lobby.</h1><p>${Wt(n.message||"Please try again.")}</p><button class="platform-primary" id="retryLobby">Try again <span>↻</span></button></section>`,{nativeControls:!1}),Kt("#retryLobby",Fa)}}function Jh(n){const e=Ym.find(t=>t.id===n);if(!e||e.status!=="available")return vi("This game is coming soon.");e.route==="phase-10"?Jm():Qm()}function Jm(){hd(),M.phase10=null,M.screen="phase10-setup",document.body.classList.remove("match-mode","platform-home","lobby-mode"),document.body.classList.add("home-mode","phase10-mode"),_s(!1),Qr(),nr(_i,`<section class="phase10-setup"><div class="phase10-setup-art"><div class="p10-floating-card p10-card-blue">7</div><div class="p10-floating-card p10-card-green">8</div><div class="p10-floating-card p10-card-red">10</div></div><div class="phase10-setup-copy"><span class="phase10-kicker">Phase 10 · local table</span><h1>Choose your player</h1><p>Choose your character, build your phase, and be first through all ten challenges.</p><div class="memoji-grid" role="group" aria-label="Choose your player">${DD.map(n=>`<button class="memoji-choice ${n===M.phase10Avatar?"is-selected":""}" data-phase-avatar="${n}" aria-pressed="${n===M.phase10Avatar}" aria-label="Choose ${VD(n)}">${vm(n)}</button>`).join("")}</div><button class="phase10-play" id="startPhase10">Start game <span>→</span></button><button class="phase10-back" id="backToLobby">Back to games</button></div></section>`,{nativeControls:!1}),Kt("[data-phase-avatar]",(n,e)=>{M.phase10Avatar=e.dataset.phaseAvatar,Jm()}),Kt("#startPhase10",()=>{M.phase10=yM(M.name,M.phase10Avatar),M.screen="phase10",Zr()}),Kt("#backToLobby",Fa)}function VD(n){return{"🧑🏻":"Player","🦊":"Milo","🐻":"Nora","🐸":"Pip"}[n]||"Player"}function vm(n,e=""){return`<span class="avatar-3d avatar-3d--${{"🧑🏻":"player","🦊":"fox","🐻":"bear","🐸":"frog"}[n]||"player"} ${e}" aria-hidden="true"></span>`}function io(n,e){(typeof n=="string"?document.querySelectorAll(n):[n]).forEach(r=>{if(!r)return;let s=!1;const o=u=>{s||r.getAttribute("aria-disabled")==="true"||(s=!0,u.preventDefault(),ka("tap"),e(u,r))};r.addEventListener("pointerup",o),r.addEventListener("click",o)})}function WD(n,e=!1){var o;const t=Na(n)?"wild":tr(n)?"skip":"",r=Na(n)?"★":tr(n)?"⊘":n.value,s=t==="wild"?"★":t==="skip"?"⊘":n.value;return`<button class="phase10-card ${t} ${n.color||""} ${e?"is-selected":""}" data-phase-card="${n.id}" aria-label="${Na(n)?"Wild card":tr(n)?"Skip card":`${n.color} ${n.value}`}" ${((o=M.phase10)==null?void 0:o.turn)!=="play"?'aria-disabled="true"':""}><div class="phase10-card-band phase10-card-band-top"><b>${s}</b><b>${s}</b></div><b class="phase10-card-value">${r}</b><div class="phase10-card-band phase10-card-band-bottom"><b>${s}</b><b>${s}</b></div><i>${t==="wild"?"WILD":t==="skip"?"SKIP":n.color}</i></button>`}function $D(n){return[6,7,8,7,8,9,8,7,7,8][n-1]||6}function MM(n,e,t=0,r=[],s=[]){if(r.length===e)return s.push(r),s;for(let o=t;o<=n.length-(e-r.length);o++)MM(n,e,o+1,r.concat(n[o]),s);return s}function XD(n){const e=$D(n.phase),t=MM(n.hand,e).find(s=>_M(n.phase,s));if(!t)return!1;const r=new Set(t.map(s=>s.id));return n.phaseCards=t,n.hand=n.hand.filter(s=>!r.has(s.id)),n.laid=!0,!0}function Zr(){const n=M.phase10;if(!n)return Jm();document.body.classList.remove("home-mode","platform-home","match-mode"),document.body.classList.add("phase10-mode"),M.screen="phase10",Qr();const e=n.players[0];n.players[n.current];const t=n.discardPile.at(-1),r=new Set(n.selected),s=n.current===0;nr(_i,`<section class="phase10-board"><header class="phase10-board-head"><div><span class="phase10-kicker">Round ${n.round}</span><h1>Phase ${e.phase}<small>${gm[e.phase-1]}</small></h1></div><div class="phase10-message ${s?"is-your-turn":""}">${Wt(n.message)}</div><button class="phase10-exit" id="exitPhase10">Exit game</button></header><section class="phase10-opponents">${n.players.slice(1).map((o,u)=>`<article class="phase10-player ${n.current===u+1?"is-active":""}"><span class="phase10-avatar">${vm(o.avatar)}</span><div><b>${o.name}</b><small>Phase ${o.phase} · ${o.hand.length} cards</small></div><strong>${o.score}</strong>${o.laid?'<i class="phase10-done">✓</i>':""}</article>`).join("")}</section><main class="phase10-table"><div class="phase10-goal"><span>Your goal</span><strong>Phase ${e.phase}</strong><p>${gm[e.phase-1]}</p>${e.laid?"<b>Phase complete ✓</b>":""}</div><div class="phase10-decks"><button class="phase10-deck draw" id="phaseDraw" ${!s||n.turn!=="draw"?'aria-disabled="true"':""}><span>✦</span><small>Draw</small><i>${n.drawPile.length}</i></button><button class="phase10-deck discard ${(t==null?void 0:t.color)||""} ${Na(t)?"wild":""} ${tr(t)?"skip":""}" id="phaseDiscardDraw" ${!s||n.turn!=="draw"?'aria-disabled="true"':""}><span>${Na(t)?"★":tr(t)?"⊘":t==null?void 0:t.value}</span><small>Discard</small></button></div><div class="phase10-actions"><button id="phaseLay" ${!s||n.turn!=="play"||e.laid?'aria-disabled="true"':""}>Lay phase</button><button id="phaseDiscard" ${!s||n.turn!=="play"||n.selected.length!==1?'aria-disabled="true"':""}>Discard selected</button></div></main><section class="phase10-hand-wrap"><div class="phase10-hand-heading"><span>${vm(e.avatar)}</span><div><b>Your hand</b><small>${e.hand.length} cards · select cards to lay or discard</small></div></div><div class="phase10-hand">${e.hand.map(o=>WD(o,r.has(o.id))).join("")}</div></section></section>`,{nativeControls:!1}),io("[data-phase-card]",(o,u)=>{if(n.current!==0||n.turn!=="play")return;const d=u.dataset.phaseCard;n.selected=n.selected.includes(d)?n.selected.filter(f=>f!==d):n.selected.concat(d),Zr()}),io("#phaseDraw",()=>eS(!1)),io("#phaseDiscardDraw",()=>eS(!0)),io("#phaseLay",qD),io("#phaseDiscard",YD),io("#exitPhase10",Fa)}function eS(n){const e=M.phase10,t=e==null?void 0:e.players[0];if(!e||e.current!==0||e.turn!=="draw")return;const r=n?e.discardPile.pop():e.drawPile.pop();r&&(t.hand.push(r),e.turn="play",e.message="Lay your phase or discard one card.",Zr())}function qD(){const n=M.phase10,e=n==null?void 0:n.players[0];if(!n||n.current!==0||n.turn!=="play"||e.laid)return;const t=e.hand.filter(s=>n.selected.includes(s.id));if(!_M(e.phase,t)){n.message=`Those cards do not complete Phase ${e.phase}: ${gm[e.phase-1]}.`,Zr();return}const r=new Set(t.map(s=>s.id));e.phaseCards=t,e.hand=e.hand.filter(s=>!r.has(s.id)),e.laid=!0,n.selected=[],n.message="Phase complete! Discard one card to end your turn.",Zr()}function YD(){const n=M.phase10,e=n==null?void 0:n.players[0];if(!n||n.current!==0||n.turn!=="play"||n.selected.length!==1)return;const t=n.selected[0],r=e.hand.findIndex(o=>o.id===t);if(r<0)return;const[s]=e.hand.splice(r,1);n.discardPile.push(s),n.selected=[],tr(s)&&(n.skipped=1),EM()}function EM(){const n=M.phase10,e=n.players[n.current];if(e.hand.length===0)return ZD(e);n.current=(n.current+1)%n.players.length,n.skipped===n.current&&(n.message=`${n.players[n.current].name} was skipped!`,n.skipped=null,n.current=(n.current+1)%n.players.length),n.turn="draw",n.current===0?(n.message="Your turn: draw a card.",Zr()):(n.message=`${n.players[n.current].name} is thinking…`,Zr(),window.setTimeout(KD,650))}function KD(){const n=M.phase10;if(!n||n.current===0||n.finished)return;const e=n.players[n.current],t=n.drawPile.pop();t&&e.hand.push(t),XD(e);const r=e.hand.filter(o=>!Na(o)&&!tr(o)),s=(r.length?r:e.hand)[Math.floor(Math.random()*(r.length?r.length:e.hand.length))];s&&(e.hand.splice(e.hand.indexOf(s),1),n.discardPile.push(s),tr(s)&&(n.skipped=(n.current+1)%n.players.length)),EM()}function ZD(n){const e=M.phase10;if(e.players.forEach(r=>{r!==n&&(r.score+=r.hand.reduce((s,o)=>s+UD(o),0))}),n.phase+=1,n.phase>10){e.finished=!0,e.message=`${n.name} completed all ten phases!`,Zr();return}const t=yM(M.name,M.phase10Avatar);t.players.forEach((r,s)=>{r.phase=e.players[s].phase,r.score=e.players[s].score}),t.round=e.round+1,t.message=`${n.name} went out. New round!`,M.phase10=t,Zr()}function Qm(){var e,t,r;hd(),document.body.classList.remove("match-mode","lobby-mode","platform-home"),document.body.classList.add("home-mode","take5-entry-mode"),M.screen="take5-home",M.game=null,M.selected=null,_s(!0),Qr();const n=Wt(M.name);nr(_i,`<section class="landing">
    <div class="hero-copy"><div class="eyebrow">TAKE 5 · QUICK TABLE</div><h1>Play a clever<br /><em>card game.</em></h1><p>Choose a card. Avoid the bulls. Bring friends.</p>
      <div class="hero-points"><span><i class="tiny-star">✳</i> 2–10 players</span><span><i class="tiny-star">✳</i> 10 cards each</span><span><i class="tiny-star">✳</i> maximum mischief</span></div>
    <div class="table-scene" aria-hidden="true"><div class="scene-felt"></div><div class="scene-card c1"><strong>12</strong>${Er()}</div><div class="scene-card c2"><strong>38</strong>${Er()}</div><div class="scene-card c3"><strong>64</strong>${Er()}</div><div class="scene-card c4"><strong>91</strong>${Er()}</div><div class="decor-cow">🐮</div><div class="scene-caption">a very serious card table</div></div>
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
  </section>`),Kt(".setup-tab",(s,o)=>{M.tab=o.dataset.tab,Qm()}),(e=document.querySelector("#botCount"))==null||e.addEventListener("change",s=>M.botCount=+s.target.value),Kt("#startBots",()=>{Qh("#playerName"),ng()}),Kt("#hostRoom",()=>{Qh("#roomPlayerName"),nI()}),Kt("#joinRoom",()=>{Qh("#roomPlayerName"),sg(document.querySelector("#roomCode").value.trim())}),(t=document.querySelector("#roomCode"))==null||t.addEventListener("input",s=>{s.target.value=s.target.value.replace(/\D/g,"").slice(0,4)}),(r=document.querySelector("#roomCode"))==null||r.addEventListener("keydown",s=>{var o;s.key==="Enter"&&((o=document.querySelector("#joinRoom"))==null||o.dispatchEvent(new CustomEvent("rnpress",{bubbles:!0})))})}function Qh(n){var e;M.name=((e=document.querySelector(n))==null?void 0:e.value.trim())||"Player",localStorage.setItem("take5-name",M.name)}function Oi(n){const e=document.querySelector(`[data-panel="${M.tab}"] .inline-error`);e&&(e.textContent=n)}function vi(n){var t;clearTimeout(M.toastTimer),(t=document.querySelector(".toast"))==null||t.remove();const e=document.createElement("div");e.className="toast",e.textContent=n,document.body.append(e),M.toastTimer=setTimeout(()=>e.remove(),2600)}const zl=["😂","😮","😭","👏","❤️","🐂"];function eg(n){if(M.screen!=="game"||!zl.includes(n.emoji))return;const e=Array.from(document.querySelectorAll(".header-player[data-player-id]")).find(s=>s.dataset.playerId===n.playerId),t=e==null?void 0:e.getBoundingClientRect(),r=document.createElement("div");r.className="room-reaction-float",r.style.left=`${t?t.left+t.width/2:innerWidth/2}px`,r.style.top=`${t?t.bottom-4:innerHeight*.45}px`,r.innerHTML=`<span>${n.emoji}</span><small>${Wt(n.name||"Player")}</small>`,document.body.append(r),setTimeout(()=>r.remove(),1700)}function bM(n,e=null){M.connections.forEach((t,r)=>{if(r!==e&&t.open)try{t.send(n)}catch{}})}function wM(n){var r,s,o,u,d;if(!((r=M.mode)!=null&&r.startsWith("online"))||M.screen!=="game"||!zl.includes(n))return;const e=Date.now();if(e-(M.reactionCooldowns.get(M.clientId)||0)<650)return;M.reactionCooldowns.set(M.clientId,e);const t={type:"reaction",playerId:M.clientId,name:M.name||"Player",emoji:n};eg(t),(s=document.querySelector("#gameMenuPanel"))==null||s.classList.add("is-hidden"),(o=document.querySelector("#gameMenuToggle"))==null||o.setAttribute("aria-expanded","false"),(u=document.querySelector(".menu-shell"))==null||u.classList.remove("is-open"),document.querySelectorAll(".hand-reaction-picker").forEach(f=>{f.hidden=!0}),document.querySelectorAll(".hand-reaction-trigger").forEach(f=>f.setAttribute("aria-expanded","false")),document.querySelectorAll(".hand-reaction-control").forEach(f=>f.classList.remove("is-expanded")),M.host?bM(t):(d=M.connection)!=null&&d.open&&M.connection.send({type:"reaction",emoji:n})}function jD(n,e=!1){const t=[{id:"self",name:M.name||"You",human:!0,online:!0,score:0,total:0,hand:[]}];for(let r=0;r<n;r++)t.push({id:`bot${r+1}`,name:["Milo","Nora","Pip","June","Otto","Bea","Finn","Kit","Lou"][r],human:!1,online:!0,score:0,total:0,hand:[]});return t}function tg(n){const e=GD();return n.forEach(t=>t.hand=e.splice(0,10).sort((r,s)=>r-s)),e.splice(0,4).map(t=>[t])}function ng(){var t,r;ka("deal"),_s(!1),clearTimeout(M.countdownTimer),clearInterval(M.countdownInterval);const n=+(((t=document.querySelector("#botCount"))==null?void 0:t.value)||M.botCount||3);M.botCount=n,M.submittedTurn=!1,M.animating=!1,M.replay=null,M.replayKey=null,M.revealOrigins={},M.stageSeen=new Set,M.stageTurnKey=null;const e=jD(n);M.game={players:e,rows:tg(e),turn:1,round:1,tieOffset:0,phase:"choosing",selections:{},lastReveal:null,mode:"local",botStyle:((r=document.querySelector("#botStyle"))==null?void 0:r.value)||"clever"},M.mode="local",M.screen="game",M.selected=null,M.screenTransition=!0,yi()}function JD(n){n.round++,n.turn=1,n.tieOffset=(n.tieOffset+1)%n.players.length,n.rows=tg(n.players),n.phase="choosing",n.selections={},n.lastReveal=null,delete n.pendingRowChoice}function ig(n,e){const t=n.hand;let r=t[0],s=1/0;for(const o of t){const u=e.rows.map((f,h)=>({i:h,top:f.at(-1),distance:o-f.at(-1),heads:f.reduce((v,m)=>v+ni(m),0)})).filter(f=>o>f.top).sort((f,h)=>h.top-f.top);let d;if(!u.length)d=26+e.rows.reduce((f,h)=>f+h.reduce((v,m)=>v+ni(m),0),0)*1.1+o/104;else{const f=u[0];d=f.heads*2.1+(f.distance<4?1.3:0)+(f.i===3?-.3:0),e.rows[f.i].length>=5&&(d+=7),e.rows[f.i].length>=4&&(d+=2.5),d+=o/500}e.botStyle==="chaotic"&&(d+=(Math.random()-.5)*9),d<s&&(s=d,r=o)}return r}function QD(n){var r;const e=M.game;if(M.animating||!e||e.phase!=="choosing"||!e.players[0].hand.includes(n))return;ka("card");const t=(r=document.querySelector(`.hand-card[data-card="${n}"]`))==null?void 0:r.getBoundingClientRect();t&&(M.revealOrigins.self={left:t.left,top:t.top,width:t.width,height:t.height}),e.selections.self=n,e.phase="waiting",M.selected=null,yi(),e.players.slice(1).forEach((s,o)=>window.setTimeout(()=>{M.game!==e||e.phase!=="waiting"||(e.selections[s.id]=ig(s,e),e.players.every(u=>e.selections[u.id]!=null)?(e.phase="countdown",e.countdownAt=Date.now()+900,yi(),lg(e,!1)):yi())},550+o*380))}function TM(n,e){var u;const t=n.players.map((d,f)=>(f+n.tieOffset)%n.players.length),r=n.players.map(d=>({p:d,card:n.selections[d.id]})).sort((d,f)=>d.card-f.card||t.indexOf(n.players.indexOf(d.p))-t.indexOf(n.players.indexOf(f.p))),s=r.find(d=>d.p.hand.includes(d.card));if(s&&!n.rows.some(f=>s.card>f.at(-1))&&s.p.human&&e==null)return n.pendingRowChoice={playerId:s.p.id,card:s.card},n.phase="row-choice",!0;const o=[];for(const{p:d,card:f}of r){const h=d.hand.indexOf(f);if(h<0)continue;d.hand.splice(h,1);let v=n.rows.map((E,R)=>({i:R,top:E.at(-1)})).filter(E=>f>E.top).sort((E,R)=>R.top-E.top),m,g=0,x=!1;if(v.length)m=v[0].i,n.rows[m].length===5?(g=n.rows[m].slice(0,5).reduce((E,R)=>E+ni(R),0),d.score+=g,d.total+=g,x=!0,n.rows[m]=[f]):n.rows[m].push(f);else{if(m=e!=null&&d.id===((u=n.pendingRowChoice)==null?void 0:u.playerId)?e:n.rows.reduce((R,y,S)=>y.reduce((w,N)=>w+ni(N),0)<n.rows[R].reduce((w,N)=>w+ni(N),0)?S:R,0),!Number.isInteger(m)||m<0||m>=n.rows.length)return d.hand.splice(h,0,f),!0;g=n.rows[m].reduce((R,y)=>R+ni(y),0),d.score+=g,d.total+=g,x=!0,n.rows[m]=[f]}o.push({playerId:d.id,name:d.name,card:f,rowIndex:m,penalty:g,tookRow:x})}return n.lastReveal=o,n.selections={},delete n.pendingRowChoice,n.tieOffset=(n.tieOffset+1)%n.players.length,M.selected=null,M.submittedTurn=!1,n.players.every(d=>d.hand.length===0)?n.players.some(f=>f.total>=66)?(n.phase="finished",M.screen="result"):n.phase="round-break":(n.turn++,n.phase="choosing"),!1}async function rg(){return iS(()=>import("https://esm.sh/peerjs@1.5.5?bundle"),[])}function eI(){const n=new Uint16Array(1);return crypto.getRandomValues(n),String(n[0]%1e4).padStart(4,"0")}function tI(n){var t;let e=cd(ms);return((e==null?void 0:e.roomId)!==n||!e.token)&&(e={roomId:n,token:((t=crypto.randomUUID)==null?void 0:t.call(crypto))||`${Date.now()}-${Math.random().toString(36).slice(2)}`},localStorage.setItem(ms,JSON.stringify(e))),M.resumeToken=e.token,e.token}function xo(){if(!(!M.host||!M.roomId))try{localStorage.setItem(jm,JSON.stringify({roomId:M.roomId,name:M.name,screen:M.screen,players:M.players,game:M.game}))}catch{vi("Could not save a recovery copy of this room on this device.")}}function RM(n,e){M.peer===n&&(e.on("open",()=>{}),e.on("data",t=>rI(e,t)),e.on("close",()=>{var r,s,o;if(M.peer!==n||M.connections.get(e.peer)!==e)return;const t=M.players.find(u=>u.id===e.peer);t&&(t.online=!1),M.connections.delete(e.peer),xo(),((r=M.game)==null?void 0:r.phase)==="choosing"?(Ol(),ir()):((s=M.game)==null?void 0:s.phase)==="row-choice"?(((o=M.game.pendingRowChoice)==null?void 0:o.playerId)===(t==null?void 0:t.id)&&AM(),ir()):M.screen==="lobby"&&uo()}))}function ag(n){n.on("disconnected",()=>{M.peer===n&&dd(n,1200)}),n.on("open",()=>clearTimeout(M.peerReconnectTimer))}function dd(n,e=3e3){M.peer===n&&(clearTimeout(M.peerReconnectTimer),M.peerReconnectTimer=setTimeout(()=>{if(!(M.peer!==n||!n.disconnected)){try{n.reconnect()}catch{}M.peer===n&&n.disconnected&&dd(n,4e3)}},e))}async function nI(){if(!M.busy){M.busy=!0,Oi("Opening your room…");try{const{Peer:n}=await rg();let e=0;const t=()=>{const r=eI(),s=new n(`take5-${r}`);M.peer=s,M.host=!0,ag(s),s.on("open",o=>{M.peer===s&&(localStorage.removeItem(ms),M.roomId=r,M.clientId=o,M.players=[{id:o,name:M.name,human:!0,online:!0,score:0,total:0,hand:[]}],M.screen="lobby",M.mode="online-host",M.busy=!1,M.screenTransition=!0,history.replaceState({},"",`?room=${encodeURIComponent(r)}`),_o(),xo())}),s.on("connection",o=>RM(s,o)),s.on("error",o=>{if(M.peer===s){if(o.type==="unavailable-id"&&e<8){e++,s.destroy(),M.peer=null,setTimeout(t,120);return}M.busy=!1,M.screen==="home"?Oi(o.type==="unavailable-id"?"Could not reserve a room code. Try again.":"Room connection failed. Check your internet and try again."):vi("Room connection hiccup.")}})};t()}catch{M.busy=!1,Oi("Online rooms need an internet connection. Please try again.")}}}async function iI(n){if(!(n!=null&&n.roomId)||!/^\d{4}$/.test(n.roomId))return Fa();M.busy=!0,M.name=n.name||M.name,Oi("Restoring your room…");try{const{Peer:e}=await rg();let t=0;const r=()=>{const s=new e(`take5-${n.roomId}`);M.peer=s,M.host=!0,ag(s),s.on("open",o=>{var u;M.peer===s&&(_s(!1),M.roomId=n.roomId,M.clientId=o,M.game=n.game||null,M.players=((u=M.game)==null?void 0:u.players)||n.players||[],M.game&&(M.players=M.game.players),M.mode="online-host",M.screen=M.game?M.game.phase==="finished"?"result":"game":"lobby",M.busy=!1,M.screenTransition=!0,M.selected=null,M.submittedTurn=!1,M.animating=!1,M.replay=null,M.replayKey=null,M.revealOrigins={},history.replaceState({},"",`?room=${encodeURIComponent(n.roomId)}`),M.screen==="lobby"?_o():M.screen==="result"?ug():(yi(),M.game.phase==="countdown"&&lg(M.game,!0)),xo())}),s.on("connection",o=>RM(s,o)),s.on("error",o=>{if(M.peer===s){if(o.type==="unavailable-id"&&t<25){t++,s.destroy(),M.peer=null,setTimeout(r,Math.min(1800,180+t*120));return}M.busy=!1,t>=25?Oi("This room is still active in another tab. Close that tab, then refresh to restore it."):Oi("Could not reconnect to your room. Refresh to try again."),s.destroy(),M.peer=null,M.host=!1}})};r()}catch{M.busy=!1,M.host=!1,Oi("Could not restore the room. Check your connection and refresh to try again.")}}function rI(n,e){var t,r;if(!(!e||typeof e!="object")){if(e.type==="hello"){const s=typeof e.resumeToken=="string"?e.resumeToken.slice(0,100):"",o=M.players.find(d=>d.id===n.peer||s&&d.resumeToken===s);if(o){const d=o.id,f=M.connections.get(d);if(f&&f!==n){M.connections.delete(d);try{f.close()}catch{}}o.id=n.peer,o.online=!0,M.game&&d!==n.peer&&(Object.hasOwn(M.game.selections||{},d)&&(M.game.selections[n.peer]=M.game.selections[d],delete M.game.selections[d]),((t=M.game.pendingRowChoice)==null?void 0:t.playerId)===d&&(M.game.pendingRowChoice.playerId=n.peer),M.game.lastReveal&&(M.game.lastReveal=M.game.lastReveal.map(h=>h.playerId===d?{...h,playerId:n.peer}:h))),M.connections.set(n.peer,n),n.send({type:"welcome",id:n.peer,roomId:M.roomId}),M.game?(clearTimeout(M.disconnectAdvanceTimer),M.disconnectAdvanceTimer=null,n.send(_m(n.peer)),Ol(),xo(),ir()):uo();return}if(M.game){n.send({type:"error",message:"This game is already in progress. Rejoin using your original invite link."}),n.close();return}if(M.players.length>=10){n.send({type:"error",message:"This table is full (10 players max)."}),n.close();return}const u={id:n.peer,name:String(e.name||"Player").slice(0,18),resumeToken:s||void 0,human:!0,online:!0,ready:!1,score:0,total:0,hand:[]};M.players.push(u),M.connections.set(n.peer,n),n.send({type:"welcome",id:n.peer,roomId:M.roomId}),M.screen==="lobby"&&uo();return}if(e.type==="sync"){if(M.connections.get(n.peer)!==n)return;n.send({type:"welcome",id:n.peer,roomId:M.roomId}),M.game?n.send(_m(n.peer)):n.send({type:"lobby",players:M.players.map(({id:s,name:o,online:u,human:d,ready:f})=>({id:s,name:o,online:u,human:d,ready:f})),roomId:M.roomId});return}if(e.type==="ready"&&M.screen==="lobby"){const s=M.players.find(o=>o.id===n.peer);if(!s)return;s.ready=!!e.ready,uo();return}if(e.type==="reaction"){const s=M.players.find(d=>d.id===n.peer),o=Date.now();if(M.screen!=="game"||!(s!=null&&s.human)||!s.online||!zl.includes(e.emoji)||o-(M.reactionCooldowns.get(n.peer)||0)<650)return;M.reactionCooldowns.set(n.peer,o);const u={type:"reaction",playerId:n.peer,name:s.name,emoji:e.emoji};eg(u),bM(u,n.peer);return}if(e.type==="pick"&&M.game&&M.game.phase==="choosing"&&!M.animating){const s=M.players.find(o=>o.id===n.peer);if(!s||!s.hand.includes(+e.card)||M.game.selections[n.peer])return;M.game.selections[n.peer]=+e.card,Ol(),ir()}if(e.type==="choose-row"&&((r=M.game)==null?void 0:r.phase)==="row-choice"){const s=M.game.pendingRowChoice;if(!s||s.playerId!==n.peer||!Number.isInteger(+e.rowIndex))return;og(+e.rowIndex)}}}function Ol(){const n=M.game;if(M.animating||!n||n.phase!=="choosing"||n.players.some(r=>r.human&&r.online&&!n.selections[r.id]))return;if(n.players.some(r=>r.human&&!r.online&&!n.selections[r.id])){AM();return}clearTimeout(M.disconnectAdvanceTimer),M.disconnectAdvanceTimer=null,n.players.filter(r=>!r.human&&!n.selections[r.id]).forEach(r=>n.selections[r.id]=ig(r,n)),n.phase="countdown",n.countdownAt=Date.now()+3e3,lg(n,!0)}function AM(){M.disconnectAdvanceTimer||(M.disconnectAdvanceTimer=setTimeout(()=>{var e;M.disconnectAdvanceTimer=null;const n=M.game;if(n){if(n.phase==="choosing")n.players.filter(t=>t.human&&!t.online&&!n.selections[t.id]).forEach(t=>n.selections[t.id]=ig(t,n)),Ol(),ir();else if(n.phase==="row-choice"&&n.pendingRowChoice){const r=((e=n.rows.map((s,o)=>({i:o,penalty:s.reduce((u,d)=>u+ni(d),0)})).sort((s,o)=>s.penalty-o.penalty||s.i-o.i)[0])==null?void 0:e.i)??0;og(r)}}},2e4))}function uo(){xo();const n={type:"lobby",players:M.players.map(({id:e,name:t,online:r,human:s,ready:o})=>({id:e,name:t,online:r,human:s,ready:o})),roomId:M.roomId};M.connections.forEach(e=>{try{e.send(n)}catch{}}),_o()}function _m(n){const e=M.game;return e?{type:"game",viewer:n,game:{...e,players:e.players.map(t=>{const{resumeToken:r,...s}=t;return{...s,hand:t.id===n?t.hand:void 0}}),readyPlayers:Object.keys(e.selections),selections:e.phase==="row-choice"?{...e.selections}:{},mode:"online"}}:null}function ir(){if(M.screen==="lobby"){uo();return}xo(),M.connections.forEach((n,e)=>{try{n.send(_m(e))}catch{}}),M.clientId&&yi()}function aI(){var e,t;if(!M.roomId){vi("This room is not connected.");return}if(M.host){M.screen==="lobby"?uo():ir(),vi("Room state refreshed for everyone.");return}const n=M.peer;if((e=M.connection)!=null&&e.open){M.connection.send({type:"sync"}),vi("Refreshing room sync…");return}if(n){if(M.recoveringGuest=!0,M.connection=null,clearTimeout(M.reconnectTimer),n.disconnected)try{n.reconnect()}catch{dd(n)}fd(M.roomId,n),vi("Reconnecting to the room…");return}M.resumeToken=((t=cd(ms))==null?void 0:t.token)||M.resumeToken,M.busy=!1,sg(M.roomId)}function nd(){var e;if(!M.host||M.players.filter(t=>t.human&&t.online).length<1)return;ka("deal"),_s(!1),clearTimeout(M.countdownTimer),clearInterval(M.countdownInterval);let n=+(((e=document.querySelector("#lobbyBots"))==null?void 0:e.value)||0);M.players.filter(t=>t.human&&t.online).length===1&&!M.players.some(t=>!t.human)&&n===0&&(n=1);for(let t=0;t<n&&M.players.length<10;t++){const r=M.players.filter(s=>!s.human).length;M.players.push({id:`bot${r+1}`,name:["Milo","Nora","Pip","June","Otto","Bea","Finn","Kit","Lou"][r],human:!1,online:!0,score:0,total:0,hand:[]})}M.game={players:M.players,rows:tg(M.players),turn:1,round:1,tieOffset:0,phase:"choosing",selections:{},lastReveal:null,mode:"online"},M.submittedTurn=!1,M.animating=!1,M.replay=null,M.replayKey=null,M.revealOrigins={},M.stageSeen=new Set,M.stageTurnKey=null,M.screen="game",M.mode="online-host",M.screenTransition=!0,ir()}function fd(n,e,t=0){if(M.peer!==e||M.host||M.connection&&M.connection.open)return;let r;try{r=e.connect(`take5-${n}`,{reliable:!0})}catch{ym(n,e,t);return}M.connection=r;let s=!1,o=setTimeout(()=>{!s&&M.connection===r&&r.close()},1e4);r.on("open",()=>{M.peer===e&&r.send({type:"hello",name:M.name,resumeToken:M.resumeToken})}),r.on("data",u=>{(u==null?void 0:u.type)==="welcome"&&(s=!0,clearTimeout(o),M.recoveringGuest=!1),sI(u)}),r.on("error",()=>r.close()),r.on("close",()=>{clearTimeout(o),!(M.connection!==r||M.peer!==e)&&ym(n,e,t)})}function ym(n,e,t){if(!(M.peer!==e||M.host)){if(!M.recoveringGuest&&M.screen!=="game"&&M.screen!=="lobby"){M.busy=!1,Oi("Could not reach that room. Check the code and try again.");return}M.recoveringGuest=!0,clearTimeout(M.reconnectTimer),M.reconnectTimer=setTimeout(()=>fd(n,e,t+1),Math.min(8e3,700*Math.pow(2,Math.min(t,3))))}}function sg(n){if(!M.busy){if(!/^\d{4}$/.test(n)){Oi("Enter the 4-digit room code.");return}M.busy=!0,M.roomId=n,tI(n),Oi("Finding your table…"),rg().then(({Peer:e})=>{const t=new e;M.peer=t,M.host=!1,ag(t),t.on("open",()=>fd(n,t)),t.on("error",r=>{if(r.type==="peer-unavailable"&&M.recoveringGuest){ym(n,t,0);return}M.screen==="home"&&!M.recoveringGuest&&(M.busy=!1,Oi(r.type==="peer-unavailable"?"Room not found. Check the code and try again.":"Could not connect. Check your internet and try again."))})}).catch(()=>{M.busy=!1,Oi("Online rooms need an internet connection. Please try again.")})}}function sI(n){var e;if((n==null?void 0:n.type)==="reaction")eg(n);else if((n==null?void 0:n.type)==="welcome")M.clientId=n.id,M.roomId=n.roomId,M.busy=!1,M.mode="online-guest",M.game||(M.screen="lobby"),localStorage.setItem(ms,JSON.stringify({roomId:n.roomId,token:M.resumeToken})),M.game||_o();else if((n==null?void 0:n.type)==="lobby")M.players=n.players,M.roomId=n.roomId,M.screen!=="game"&&(M.screen="lobby"),_o();else if((n==null?void 0:n.type)==="game"){const t=M.game,r=t&&(t.turn!==n.game.turn||t.round!==n.game.round);M.game=n.game,M.players=n.game.players,M.clientId=n.viewer,M.mode="online-guest",M.screen=n.game.phase==="finished"?"result":"game",r&&(M.selected=null,M.submittedTurn=!1),M.submittedTurn=!!((e=n.game.readyPlayers)!=null&&e.includes(n.viewer)),M.recoveringGuest=!1,yi()}else(n==null?void 0:n.type)==="error"&&(M.busy=!1,vi(n.message))}function oI(n){var t,r,s;if(M.animating||((t=M.game)==null?void 0:t.phase)!=="choosing")return;ka("card");const e=(r=document.querySelector(`.hand-card[data-card="${n}"]`))==null?void 0:r.getBoundingClientRect();if(e&&(M.revealOrigins[M.clientId]={left:e.left,top:e.top,width:e.width,height:e.height}),M.host){if(M.game.selections[M.clientId])return;M.game.selections[M.clientId]=n,Ol(),ir()}else(s=M.connection)!=null&&s.open&&(M.connection.send({type:"pick",card:n}),M.selected=n,M.submittedTurn=!0,yi())}function og(n){var o;const e=M.game,t=e==null?void 0:e.pendingRowChoice;if(!e||!t||n<0||n>=e.rows.length)return;clearTimeout(M.disconnectAdvanceTimer),M.disconnectAdvanceTimer=null;const r=M.mode==="local"?(o=e.players[0])==null?void 0:o.id:M.clientId;!(t.playerId===r)&&!M.host||(TM(e,n),M.host?ir():yi())}function lI(n){var s,o;ka("row");const e=M.game,t=e==null?void 0:e.pendingRowChoice,r=M.mode==="local"?(s=e==null?void 0:e.players[0])==null?void 0:s.id:M.clientId;!t||t.playerId!==r||(M.mode==="local"||M.host?og(n):(o=M.connection)!=null&&o.open&&M.connection.send({type:"choose-row",rowIndex:n}))}function _o(){_s(!1),document.body.classList.remove("home-mode"),document.body.classList.add("match-mode","lobby-mode"),M.screen="lobby";const n=M.players.filter(s=>s.online!==!1).length,e=M.players.find(s=>s.id===M.clientId),t=!!(e!=null&&e.ready),r=Wt(M.roomId);Qr(),nr(_i,`<section class="game-layout lobby-layout"><div class="lobby-row"><strong>ROOM CODE</strong><span class="room-code">${r}</span><span class="lobby-wait">${n<2?"Waiting for friends, or start a practice game now.":`${n} players connected`}</span></div><div class="tabletop"><div class="tabletop-head"><span>THE TABLE</span><strong>2–10 PLAYERS</strong></div><div class="row-empty">${n<2?"Share the invite link, or start now and a bot will join your table.":"Players are here. The host can start the game."}</div></div><div class="game-bottom lobby-bottom"><div></div><aside class="turn-side"><div class="turn-state">READY TO PLAY</div><p class="turn-message">${n<2?"Start now and play with one bot, or wait for friends to join.":"Everyone is here. Deal the cards!"}</p>${M.host?'<label class="field-label" for="lobbyBots">Bots to add</label><select class="select-field" id="lobbyBots"><option value="0">No bots</option><option value="1">1 bot</option><option value="2">2 bots</option><option value="3">3 bots</option></select><button class="primary-button lobby-start" id="beginOnline">Start game ↗</button>':`<button class="primary-button lobby-start lobby-ready" id="toggleReady">${t?"Ready ✓":"Ready up"}</button><div class="turn-help">${t?"You’re ready. Waiting for the host…":"Tap Ready when you’re set to play."}</div>`}</aside></div></section>`),Kt("#beginOnline",nd),Kt("#toggleReady",()=>{var o;const s=!t;M.players=M.players.map(u=>u.id===M.clientId?{...u,ready:s}:u),(o=M.connection)==null||o.send({type:"ready",ready:s}),_o()})}function CM(n,e){var t;(t=navigator.clipboard)==null||t.writeText(n).then(()=>vi(e)).catch(()=>vi("Could not copy. Select the room code to copy it."))}function uI(){const e=`${pM?CD:`${location.origin}${location.pathname}`}?room=${encodeURIComponent(M.roomId)}`;CM(e,"Invite link copied")}function Sm(){return`<div class="card-back-design"><span class="back-emblem">${Er()}</span><b>TAKE<br>5</b><span class="back-stars">✦　✦　✦</span></div>`}function lg(n,e){clearTimeout(M.countdownTimer),M.countdownTimer=setTimeout(()=>{M.game!==n||n.phase!=="countdown"||(clearInterval(M.countdownInterval),M.countdownInterval=null,n.phase="choosing",delete n.countdownAt,TM(n),n.phase==="finished"&&(M.screen="result"),e?ir():yi())},Math.max(0,(n.countdownAt||Date.now()+3e3)-Date.now()))}function cI(n){if(clearInterval(M.countdownInterval),M.countdownInterval=null,n.phase!=="countdown")return;const e=()=>{const t=_i.querySelector("[data-countdown]");if(!t)return;const r=Math.max(0,(n.countdownAt-Date.now())/1e3);t.textContent=r>0?String(Math.ceil(r)):"REVEAL"};e(),M.countdownInterval=setInterval(e,100)}function dI(){var t;if(document.querySelector(".clubhouse-ready"))return;const n=Array.from(_i.querySelectorAll(".stage-card-back"));if(!n.length)return;const e=[];for(const r of n){const s=r.dataset.stagePlayer;if(M.stageSeen.has(s))continue;M.stageSeen.add(s);const o=Array.from(document.querySelectorAll("[data-player-id]")).find(g=>g.dataset.playerId===s),u=M.revealOrigins[s]||((t=o==null?void 0:o.querySelector(".opponent-cards"))==null?void 0:t.getBoundingClientRect())||(o==null?void 0:o.getBoundingClientRect()),d=r.getBoundingClientRect();if(!u){r.classList.remove("stage-pending");continue}const f=document.createElement("div");f.className="flying-back",f.innerHTML=Sm(),document.body.append(f);const h={x:u.left+u.width/2,y:u.top+u.height/2},v={x:d.left+d.width/2,y:d.top+d.height/2};f.style.left=`${h.x}px`,f.style.top=`${h.y}px`;const m=(async()=>{try{await f.animate([{left:`${h.x}px`,top:`${h.y}px`,transform:"translate(-50%,-50%) scale(.5) rotate(-7deg)"},{left:`${v.x}px`,top:`${v.y}px`,transform:"translate(-50%,-50%) scale(1) rotate(0deg)"}],{duration:330,easing:"cubic-bezier(.18,.75,.25,1)",fill:"forwards"}).finished}catch{}f.remove(),r.classList.remove("stage-pending")})();e.push(m)}Promise.all(e)}function fI(n){var t;if(!((t=n.lastReveal)!=null&&t.length))return;const e=`${n.round}:${n.turn}:${n.lastReveal.map(r=>`${r.playerId}-${r.card}`).join(",")}`;e!==M.replayKey&&(M.replayKey=e,M.replay={key:e,reveals:n.lastReveal.map(r=>({...r})),seen:new Set,active:!0,running:!1},M.revealOrigins=M.revealOrigins||{},M.animating=!0)}function tS(n){return new Promise(e=>setTimeout(e,n))}async function hI(){var r,s,o,u,d;const n=M.replay;if(!(n!=null&&n.active)||n.running)return;ka("deal"),n.running=!0,M.animating=!0;const e=matchMedia("(prefers-reduced-motion: reduce)").matches,t=e?180:500;if(await tS(e?150:720),!await hD(n.reveals))for(const f of n.reveals){if(M.replay!==n||M.screen==="home")break;const h=_i.querySelector(`.row-lane[data-row-index="${f.rowIndex}"]`),v=_i.querySelector(`.playing-card[data-row-index="${f.rowIndex}"][data-card-number="${f.card}"]`),m=v||(h==null?void 0:h.querySelector(".row-cards"));let g=(r=M.revealOrigins)==null?void 0:r[f.playerId];if(!g){const S=Array.from(document.querySelectorAll("[data-player-id]")).find(w=>w.dataset.playerId===f.playerId);g=((s=S==null?void 0:S.querySelector(".opponent-cards"))==null?void 0:s.getBoundingClientRect())||(S==null?void 0:S.getBoundingClientRect())||((o=_i.querySelector(".hand-area"))==null?void 0:o.getBoundingClientRect())}if(!g||!m){n.seen.add(f.card),v==null||v.classList.remove("reveal-pending");continue}const x={x:g.left+g.width/2,y:g.top+g.height/2},E=m.getBoundingClientRect(),R={x:E.left+E.width/2,y:E.top+E.height/2},y=document.createElement("div");y.className="flying-card",y.innerHTML=ao(f.card),document.body.append(y),y.style.left=`${x.x}px`,y.style.top=`${x.y}px`;try{await y.animate([{left:`${x.x}px`,top:`${x.y}px`,transform:"translate(-50%,-50%) scale(.62) rotate(-5deg)"},{left:`${(x.x+R.x)/2}px`,top:`${(x.y+R.y)/2-24}px`,transform:"translate(-50%,-50%) scale(.86) rotate(2deg)"},{left:`${R.x}px`,top:`${R.y}px`,transform:"translate(-50%,-50%) scale(1) rotate(0deg)"}],{duration:t,easing:"cubic-bezier(.2,.78,.24,1)",fill:"forwards"}).finished}catch{}if(y.remove(),M.replay!==n)break;n.seen.add(f.card),v==null||v.classList.remove("reveal-pending"),h==null||h.classList.add("card-landed"),setTimeout(()=>h==null?void 0:h.classList.remove("card-landed"),360),await tS(e?40:130)}M.replay===n&&(n.active=!1,n.running=!1,M.animating=!1,M.revealOrigins={},((u=M.game)==null?void 0:u.phase)==="finished"?(M.screen="result",ug()):((d=M.game)==null?void 0:d.phase)==="round-break"?(JD(M.game),M.stageSeen=new Set,M.stageTurnKey=null,M.host?ir():yi()):yi())}function yi(){var y,S,w,N,D,U,I,b,P,G;if(!M.game)return;const n=M.game;if(fI(n),M.screen==="result"&&!((y=M.replay)!=null&&y.active)){ug();return}document.body.classList.remove("home-mode","lobby-mode"),document.body.classList.add("match-mode"),M.screen="game",Qr();const e=n.players.find(O=>O.id===M.clientId)||n.players[0],t=(e==null?void 0:e.hand)||[],r=n.phase==="choosing",s=(S=M.mode)==null?void 0:S.startsWith("online"),o=n.readyPlayers||Object.keys(n.selections||{}),u=s&&(!!((w=n.selections)!=null&&w[M.clientId])||o.includes(M.clientId)||M.submittedTurn);(N=e==null?void 0:e.hand)==null||N.length;const d=`${n.round}:${n.turn}`;M.stageTurnKey!==d&&(M.stageTurnKey=d,M.stageSeen=new Set);const f=new Set(o);s&&u&&f.add(M.clientId);const h=n.players.filter(O=>f.has(O.id)),v=((D=n.selections)==null?void 0:D[e.id])??(u?M.selected:null),m=v==null?t:t.filter(O=>O!==v),g=new Set((U=M.replay)!=null&&U.active?M.replay.reveals.filter(O=>!M.replay.seen.has(O.card)).map(O=>`${O.rowIndex}:${O.card}`):[]),x=n.phase==="row-choice"?n.pendingRowChoice:null,E=!!x&&x.playerId===e.id,R=x?n.players.find(O=>O.id===x.playerId):null;fD(n,e.id,(I=M.replay)==null?void 0:I.active),nr(_i,`<section class="game-layout">
  <div class="tabletop"><div class="tabletop-head"><span>✦ THE MEADOW TABLE ✦</span><strong>ROUND ${n.round} <span>·</span> TURN ${Math.min(n.turn,10)} OF 10</strong></div><div class="rows">${n.rows.map((O,B)=>{var X;const V=O.reduce((k,ae)=>k+ni(ae),0);return`<div class="row-lane ${(X=n.lastReveal)!=null&&X.some(k=>k.rowIndex===B&&k.playerId===e.id&&k.tookRow)?"target":""}" data-row-index="${B}"><div class="row-label"><span>ROW ${B+1}</span></div><b class="row-total bull-counter-badge" aria-label="${V} bullheads"><strong>${V}</strong>${Er()}</b><div class="row-cards">${O.map(k=>`<div class="playing-card ${g.has(`${B}:${k}`)?"reveal-pending":""}" data-row-index="${B}" data-card-number="${k}" aria-label="${k}, ${ni(k)} bullheads">${ao(k)}</div>`).join("")}</div></div>`}).join("")}</div></div>
  <div class="stage-zone ${h.length?"has-cards":""} ${n.phase==="countdown"?"countdown-active":""}">${h.map(O=>{var V;const B=((V=n.selections)==null?void 0:V[O.id])??(O.id===(x==null?void 0:x.playerId)?x.card:null);return x&&Number.isInteger(B)?`<div class="stage-reveal-card" data-stage-player="${Wt(O.id)}" aria-label="${Wt(O.name)} played ${B}">${ao(B)}<small>${Wt(O.name)} · ${B}</small></div>`:`<div class="stage-card-back ${M.stageSeen.has(O.id)?"":"stage-pending"}" data-stage-player="${Wt(O.id)}">${Sm()}<small>${Wt(O.name)}</small></div>`}).join("")}${n.phase==="countdown"?'<div class="reveal-countdown"><span>REVEALING IN</span><strong data-countdown>3</strong></div>':""}</div>
  ${(b=M.replay)!=null&&b.active?`<div class="reveal-bay">${M.replay.reveals.map(O=>{var B;return`<div class="reveal-card"><div class="reveal-flip"><div class="reveal-side reveal-back">${Sm()}</div><div class="reveal-side reveal-front">${ao(O.card)}</div></div><small>${Wt(((B=n.players.find(V=>V.id===O.playerId))==null?void 0:B.name)||O.name||"Player")}</small></div>`}).join("")}</div>`:""}
  ${x?`<section class="row-choice-bay ${E?"is-your-choice":"is-waiting"}" aria-labelledby="rowChoiceTitle" aria-live="polite">
    <div class="row-choice-header">
      <div class="row-choice-card">${ao(x.card)}</div>
      <div class="row-choice-copy"><span class="row-choice-eyebrow">${E?"YOUR LOW CARD":"ROW CHOICE"}</span><h2 id="rowChoiceTitle">${E?"Choose a row to collect":`#${Wt((R==null?void 0:R.name)||"Player")} waiting for a row choice`}</h2><p>${E?"Pick the row of bullheads you want to take.":`${Wt((R==null?void 0:R.name)||"The player")} is choosing which row to collect.`}</p></div>
    </div>
    <div class="row-choice-options" role="group" aria-label="Choose a row">
      ${n.rows.map((O,B)=>{const V=O.reduce((X,k)=>X+ni(k),0);return`<button class="row-choice-option" data-row-choice="${B}" aria-label="Row ${B+1}, take ${V} ${V===1?"bullhead":"bullheads"}" ${E?"":"disabled"}><span class="row-choice-option-top"><b>ROW ${String(B+1).padStart(2,"0")}</b><strong class="row-choice-penalty bull-counter-badge" aria-hidden="true"><span>${V}</span>${Er()}</strong></span><span class="row-choice-preview" aria-hidden="true">${O.map(X=>`<i>${X}</i>`).join("")}</span><span class="row-choice-action">${E?"Take row":"Waiting"} <b aria-hidden="true">→</b></span></button>`}).join("")}
    </div>
  </section>`:""}
  <div class="game-bottom"><section class="hand-area" data-player-id="${Wt(e.id)}"><div class="hand-heading"><h2><span class="your-avatar">${xM(e,0)}</span> Your hand <span class="my-score" aria-label="Your score: ${e.total||0} bullheads"><b>${e.total||0}</b>${Er()}</span>${s?`<span class="hand-reaction-control"><button type="button" class="hand-reaction-trigger" aria-label="Open reactions" aria-expanded="false">☺</button><span class="hand-reaction-picker" role="group" aria-label="Choose a reaction" hidden>${zl.map(O=>`<button type="button" class="hand-reaction-option" data-reaction="${O}" aria-label="Send ${O} reaction">${O}</button>`).join("")}</span></span>`:""}</h2><span>${u?"PICK LOCKED IN":"PICK YOUR CARD"}</span></div><div class="hand" role="group" aria-label="Your cards">${m.map((O,B)=>`<button class="hand-card ${M.selected===O?"selected":""}" style="--hand-index:${B}" data-card="${O}" aria-label="Card ${O}, ${ni(O)} bullheads${M.selected===O?", selected":""}" aria-pressed="${M.selected===O}" ${!r||u||M.animating?"disabled":""}>${ao(O)}</button>`).join("")}</div></section><aside class="turn-side"><div class="turn-state ${u?"done":s?"waiting":""}">${u?"PICK LOCKED IN":s?"EVERYONE PICKS AT ONCE":"YOUR TURN"}</div><p class="turn-message">${u?s?"Waiting for the other players…":"Your card is away. Let’s see where it lands.":"Pick a card and dodge those bullheads."}</p><button id="playCard" class="primary-button play-button" ${M.selected===null||u||!r||M.animating?"disabled":""}>Play card <span>↗</span></button><div class="turn-help">${(P=M.lastReveal)!=null&&P.length?pI(n.lastReveal,e.id):"Lowest bigger card wins the row."}</div></aside></div></section>`),Kt("[data-card]",(O,B)=>{B.getAttribute("aria-disabled")!=="true"&&(M.selected=+B.dataset.card,yi())}),Kt("#playCard",()=>{M.selected!=null&&!M.animating&&(M.mode==="local"?QD(M.selected):oI(M.selected))}),Kt("[data-row-choice]",(O,B)=>lI(+B.dataset.rowChoice)),Kt(".hand-reaction-trigger",(O,B)=>{var k;const V=B.nextElementSibling,X=B.getAttribute("aria-expanded")!=="true";B.setAttribute("aria-expanded",String(X)),V.hidden=!X,(k=B.closest(".hand-reaction-control"))==null||k.classList.toggle("is-expanded",X)}),Kt(".hand-reaction-option",(O,B)=>wM(B.dataset.reaction)),n.phase==="countdown"?cI(n):(clearInterval(M.countdownInterval),M.countdownInterval=null),dI(),(G=M.replay)!=null&&G.active&&hI()}function pI(n,e){const t=n.find(r=>r.playerId===e);return t?`${t.penalty?`You took ${t.penalty} bullheads.`:`Your ${t.card} landed in row ${t.rowIndex+1}.`} ${n.length>1?n.filter(r=>r.playerId!==e).map(r=>`${Wt(r.name)} ${r.penalty?`took ${r.penalty} bulls`:`played ${r.card}`}`).join(" · "):""}`:n.map(r=>`${Wt(r.name)} played ${r.card}${r.penalty?` and took ${r.penalty} bulls`:""}`).join(" · ")}function ug(){document.body.classList.add("match-mode"),M.screen="result",Qr();const n=M.game.players.slice().sort((t,r)=>t.total-r.total),e=n[0];nr(_i,`<section class="result-screen"><div class="result-mark">🏆</div><div class="eyebrow">THAT’S A WRAP</div><h1>${e.id===M.clientId?"You kept your cool!":`${Wt(e.name)} takes it!`}</h1><p>Fewest bullheads at the table. A suspiciously good run.</p><div class="final-scores">${n.map((t,r)=>`<div class="final-score"><span>${r===0?"✳ ":""}${Wt(t.name)}${t.id===M.clientId?" (you)":""}</span><b aria-label="${t.total} bullheads">${t.total}${Er()}</b></div>`).join("")}</div><button class="primary-button lobby-start" id="playAgain">Play again ↗</button><button class="pill-button" id="backHome">Back to table</button></section>`),Kt("#playAgain",()=>{M.mode.startsWith("online")?M.host?(M.players.forEach(r=>{r.score=0,r.total=0}),nd()):vi("Ask the host to start another game."):ng()}),Kt("#backHome",PM)}function hd(){if(M.peer)try{M.peer.destroy()}catch{}clearTimeout(M.countdownTimer),clearInterval(M.countdownInterval),clearTimeout(M.reconnectTimer),clearTimeout(M.peerReconnectTimer),clearTimeout(M.disconnectAdvanceTimer),document.querySelectorAll(".flying-card,.flying-back").forEach(n=>n.remove()),M.animating=!1,M.replay=null,M.replayKey=null,M.revealOrigins={},M.stageSeen=new Set,M.stageTurnKey=null,M.reactionCooldowns.clear(),M.recoveringGuest=!1,M.resumeToken=null,M.peer=null,M.connection=null,M.connections.clear(),M.host=!1,M.clientId=null,M.roomId="",M.players=[],history.replaceState({},"",location.pathname)}function PM(){M.host&&localStorage.removeItem(jm),localStorage.removeItem(ms),hd(),M.screen="home",M.game=null,M.selected=null,M.tab="rooms",M.screenTransition=!0,Fa()}export{qm as W};
