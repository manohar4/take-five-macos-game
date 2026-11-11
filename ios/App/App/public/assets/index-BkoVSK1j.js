(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const lb="modulepreload",ub=function(n){return"/"+n},C0={},aS=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let u=function(h){return Promise.all(h.map(g=>Promise.resolve(g).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));s=u(t.map(h=>{if(h=ub(h),h in C0)return;C0[h]=!0;const g=h.endsWith(".css"),m=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const v=document.createElement("link");if(v.rel=g?"stylesheet":lb,g||(v.as="script"),v.crossOrigin="",v.href=h,f&&v.setAttribute("nonce",f),document.head.appendChild(v),g)return new Promise((x,E)=>{v.addEventListener("load",x),v.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return s.then(u=>{for(const d of u||[])d.status==="rejected"&&o(d.reason);return e().catch(o)})};function Si(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function sS(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var s=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:function(){return n[r]}})}),t}var Wf={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0;function cb(){if(P0)return St;P0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),m=Symbol.iterator;function v(F){return F===null||typeof F!="object"?null:(F=m&&F[m]||F["@@iterator"],typeof F=="function"?F:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(F,te,Ae){this.props=F,this.context=te,this.refs=T,this.updater=Ae||x}y.prototype.isReactComponent={},y.prototype.setState=function(F,te){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,te,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function S(){}S.prototype=y.prototype;function w(F,te,Ae){this.props=F,this.context=te,this.refs=T,this.updater=Ae||x}var D=w.prototype=new S;D.constructor=w,E(D,y.prototype),D.isPureReactComponent=!0;var L=Array.isArray,O=Object.prototype.hasOwnProperty,I={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function C(F,te,Ae){var ae,Me={},be=null,Ce=null;if(te!=null)for(ae in te.ref!==void 0&&(Ce=te.ref),te.key!==void 0&&(be=""+te.key),te)O.call(te,ae)&&!b.hasOwnProperty(ae)&&(Me[ae]=te[ae]);var ye=arguments.length-2;if(ye===1)Me.children=Ae;else if(1<ye){for(var Be=Array(ye),ft=0;ft<ye;ft++)Be[ft]=arguments[ft+2];Me.children=Be}if(F&&F.defaultProps)for(ae in ye=F.defaultProps,ye)Me[ae]===void 0&&(Me[ae]=ye[ae]);return{$$typeof:n,type:F,key:be,ref:Ce,props:Me,_owner:I.current}}function V(F,te){return{$$typeof:n,type:F.type,key:te,ref:F.ref,props:F.props,_owner:F._owner}}function U(F){return typeof F=="object"&&F!==null&&F.$$typeof===n}function z(F){var te={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ae){return te[Ae]})}var $=/\/+/g;function Y(F,te){return typeof F=="object"&&F!==null&&F.key!=null?z(""+F.key):te.toString(36)}function B(F,te,Ae,ae,Me){var be=typeof F;(be==="undefined"||be==="boolean")&&(F=null);var Ce=!1;if(F===null)Ce=!0;else switch(be){case"string":case"number":Ce=!0;break;case"object":switch(F.$$typeof){case n:case e:Ce=!0}}if(Ce)return Ce=F,Me=Me(Ce),F=ae===""?"."+Y(Ce,0):ae,L(Me)?(Ae="",F!=null&&(Ae=F.replace($,"$&/")+"/"),B(Me,te,Ae,"",function(ft){return ft})):Me!=null&&(U(Me)&&(Me=V(Me,Ae+(!Me.key||Ce&&Ce.key===Me.key?"":(""+Me.key).replace($,"$&/")+"/")+F)),te.push(Me)),1;if(Ce=0,ae=ae===""?".":ae+":",L(F))for(var ye=0;ye<F.length;ye++){be=F[ye];var Be=ae+Y(be,ye);Ce+=B(be,te,Ae,Be,Me)}else if(Be=v(F),typeof Be=="function")for(F=Be.call(F),ye=0;!(be=F.next()).done;)be=be.value,Be=ae+Y(be,ye++),Ce+=B(be,te,Ae,Be,Me);else if(be==="object")throw te=String(F),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return Ce}function se(F,te,Ae){if(F==null)return F;var ae=[],Me=0;return B(F,ae,"","",function(be){return te.call(Ae,be,Me++)}),ae}function re(F){if(F._status===-1){var te=F._result;te=te(),te.then(function(Ae){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ae)},function(Ae){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ae)}),F._status===-1&&(F._status=0,F._result=te)}if(F._status===1)return F._result.default;throw F._result}var ne={current:null},ee={transition:null},Z={ReactCurrentDispatcher:ne,ReactCurrentBatchConfig:ee,ReactCurrentOwner:I};function j(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:se,forEach:function(F,te,Ae){se(F,function(){te.apply(this,arguments)},Ae)},count:function(F){var te=0;return se(F,function(){te++}),te},toArray:function(F){return se(F,function(te){return te})||[]},only:function(F){if(!U(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},St.Component=y,St.Fragment=t,St.Profiler=s,St.PureComponent=w,St.StrictMode=r,St.Suspense=f,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,St.act=j,St.cloneElement=function(F,te,Ae){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var ae=E({},F.props),Me=F.key,be=F.ref,Ce=F._owner;if(te!=null){if(te.ref!==void 0&&(be=te.ref,Ce=I.current),te.key!==void 0&&(Me=""+te.key),F.type&&F.type.defaultProps)var ye=F.type.defaultProps;for(Be in te)O.call(te,Be)&&!b.hasOwnProperty(Be)&&(ae[Be]=te[Be]===void 0&&ye!==void 0?ye[Be]:te[Be])}var Be=arguments.length-2;if(Be===1)ae.children=Ae;else if(1<Be){ye=Array(Be);for(var ft=0;ft<Be;ft++)ye[ft]=arguments[ft+2];ae.children=ye}return{$$typeof:n,type:F.type,key:Me,ref:be,props:ae,_owner:Ce}},St.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:o,_context:F},F.Consumer=F},St.createElement=C,St.createFactory=function(F){var te=C.bind(null,F);return te.type=F,te},St.createRef=function(){return{current:null}},St.forwardRef=function(F){return{$$typeof:d,render:F}},St.isValidElement=U,St.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:re}},St.memo=function(F,te){return{$$typeof:h,type:F,compare:te===void 0?null:te}},St.startTransition=function(F){var te=ee.transition;ee.transition={};try{F()}finally{ee.transition=te}},St.unstable_act=j,St.useCallback=function(F,te){return ne.current.useCallback(F,te)},St.useContext=function(F){return ne.current.useContext(F)},St.useDebugValue=function(){},St.useDeferredValue=function(F){return ne.current.useDeferredValue(F)},St.useEffect=function(F,te){return ne.current.useEffect(F,te)},St.useId=function(){return ne.current.useId()},St.useImperativeHandle=function(F,te,Ae){return ne.current.useImperativeHandle(F,te,Ae)},St.useInsertionEffect=function(F,te){return ne.current.useInsertionEffect(F,te)},St.useLayoutEffect=function(F,te){return ne.current.useLayoutEffect(F,te)},St.useMemo=function(F,te){return ne.current.useMemo(F,te)},St.useReducer=function(F,te,Ae){return ne.current.useReducer(F,te,Ae)},St.useRef=function(F){return ne.current.useRef(F)},St.useState=function(F){return ne.current.useState(F)},St.useSyncExternalStore=function(F,te,Ae){return ne.current.useSyncExternalStore(F,te,Ae)},St.useTransition=function(){return ne.current.useTransition()},St.version="18.3.1",St}var L0;function oS(){return L0||(L0=1,Wf.exports=cb()),Wf.exports}var ot=oS();const ho=Si(ot);var Gu={},$f={exports:{}},Jn={},Xf={exports:{}},qf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0;function db(){return D0||(D0=1,(function(n){function e(ee,Z){var j=ee.length;ee.push(Z);e:for(;0<j;){var F=j-1>>>1,te=ee[F];if(0<s(te,Z))ee[F]=Z,ee[j]=te,j=F;else break e}}function t(ee){return ee.length===0?null:ee[0]}function r(ee){if(ee.length===0)return null;var Z=ee[0],j=ee.pop();if(j!==Z){ee[0]=j;e:for(var F=0,te=ee.length,Ae=te>>>1;F<Ae;){var ae=2*(F+1)-1,Me=ee[ae],be=ae+1,Ce=ee[be];if(0>s(Me,j))be<te&&0>s(Ce,Me)?(ee[F]=Ce,ee[be]=j,F=be):(ee[F]=Me,ee[ae]=j,F=ae);else if(be<te&&0>s(Ce,j))ee[F]=Ce,ee[be]=j,F=be;else break e}}return Z}function s(ee,Z){var j=ee.sortIndex-Z.sortIndex;return j!==0?j:ee.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],h=[],g=1,m=null,v=3,x=!1,E=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(ee){for(var Z=t(h);Z!==null;){if(Z.callback===null)r(h);else if(Z.startTime<=ee)r(h),Z.sortIndex=Z.expirationTime,e(f,Z);else break;Z=t(h)}}function L(ee){if(T=!1,D(ee),!E)if(t(f)!==null)E=!0,re(O);else{var Z=t(h);Z!==null&&ne(L,Z.startTime-ee)}}function O(ee,Z){E=!1,T&&(T=!1,S(C),C=-1),x=!0;var j=v;try{for(D(Z),m=t(f);m!==null&&(!(m.expirationTime>Z)||ee&&!z());){var F=m.callback;if(typeof F=="function"){m.callback=null,v=m.priorityLevel;var te=F(m.expirationTime<=Z);Z=n.unstable_now(),typeof te=="function"?m.callback=te:m===t(f)&&r(f),D(Z)}else r(f);m=t(f)}if(m!==null)var Ae=!0;else{var ae=t(h);ae!==null&&ne(L,ae.startTime-Z),Ae=!1}return Ae}finally{m=null,v=j,x=!1}}var I=!1,b=null,C=-1,V=5,U=-1;function z(){return!(n.unstable_now()-U<V)}function $(){if(b!==null){var ee=n.unstable_now();U=ee;var Z=!0;try{Z=b(!0,ee)}finally{Z?Y():(I=!1,b=null)}}else I=!1}var Y;if(typeof w=="function")Y=function(){w($)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,se=B.port2;B.port1.onmessage=$,Y=function(){se.postMessage(null)}}else Y=function(){y($,0)};function re(ee){b=ee,I||(I=!0,Y())}function ne(ee,Z){C=y(function(){ee(n.unstable_now())},Z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ee){ee.callback=null},n.unstable_continueExecution=function(){E||x||(E=!0,re(O))},n.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<ee?Math.floor(1e3/ee):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(ee){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var j=v;v=Z;try{return ee()}finally{v=j}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ee,Z){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var j=v;v=ee;try{return Z()}finally{v=j}},n.unstable_scheduleCallback=function(ee,Z,j){var F=n.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?F+j:F):j=F,ee){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=j+te,ee={id:g++,callback:Z,priorityLevel:ee,startTime:j,expirationTime:te,sortIndex:-1},j>F?(ee.sortIndex=j,e(h,ee),t(f)===null&&ee===t(h)&&(T?(S(C),C=-1):T=!0,ne(L,j-F))):(ee.sortIndex=te,e(f,ee),E||x||(E=!0,re(O))),ee},n.unstable_shouldYield=z,n.unstable_wrapCallback=function(ee){var Z=v;return function(){var j=v;v=Z;try{return ee.apply(this,arguments)}finally{v=j}}}})(qf)),qf}var I0;function fb(){return I0||(I0=1,Xf.exports=db()),Xf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function hb(){if(N0)return Jn;N0=1;var n=oS(),e=fb();function t(i){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)a+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function o(i,a){u(i,a),u(i+"Capture",a)}function u(i,a){for(s[i]=a,i=0;i<a.length;i++)r.add(a[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},m={};function v(i){return f.call(m,i)?!0:f.call(g,i)?!1:h.test(i)?m[i]=!0:(g[i]=!0,!1)}function x(i,a,l,c){if(l!==null&&l.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return c?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,a,l,c){if(a===null||typeof a>"u"||x(i,a,l,c))return!0;if(c)return!1;if(l!==null)switch(l.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function T(i,a,l,c,p,_,A){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=a,this.sanitizeURL=_,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new T(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var a=i[0];y[a]=new T(a,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new T(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new T(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new T(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new T(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new T(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new T(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new T(i,5,!1,i.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function w(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var a=i.replace(S,w);y[a]=new T(a,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var a=i.replace(S,w);y[a]=new T(a,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var a=i.replace(S,w);y[a]=new T(a,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new T(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new T(i,1,!1,i.toLowerCase(),null,!0,!0)});function D(i,a,l,c){var p=y.hasOwnProperty(a)?y[a]:null;(p!==null?p.type!==0:c||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(E(a,l,p,c)&&(l=null),c||p===null?v(a)&&(l===null?i.removeAttribute(a):i.setAttribute(a,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(a=p.attributeName,c=p.attributeNamespace,l===null?i.removeAttribute(a):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,c?i.setAttributeNS(c,a,l):i.setAttribute(a,l))))}var L=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),I=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),z=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),ne=Symbol.for("react.offscreen"),ee=Symbol.iterator;function Z(i){return i===null||typeof i!="object"?null:(i=ee&&i[ee]||i["@@iterator"],typeof i=="function"?i:null)}var j=Object.assign,F;function te(i){if(F===void 0)try{throw Error()}catch(l){var a=l.stack.trim().match(/\n( *(at )?)/);F=a&&a[1]||""}return`
`+F+i}var Ae=!1;function ae(i,a){if(!i||Ae)return"";Ae=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(me){var c=me}Reflect.construct(i,[],a)}else{try{a.call()}catch(me){c=me}i.call(a.prototype)}else{try{throw Error()}catch(me){c=me}i()}}catch(me){if(me&&c&&typeof me.stack=="string"){for(var p=me.stack.split(`
`),_=c.stack.split(`
`),A=p.length-1,H=_.length-1;1<=A&&0<=H&&p[A]!==_[H];)H--;for(;1<=A&&0<=H;A--,H--)if(p[A]!==_[H]){if(A!==1||H!==1)do if(A--,H--,0>H||p[A]!==_[H]){var K=`
`+p[A].replace(" at new "," at ");return i.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",i.displayName)),K}while(1<=A&&0<=H);break}}}finally{Ae=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?te(i):""}function Me(i){switch(i.tag){case 5:return te(i.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return i=ae(i.type,!1),i;case 11:return i=ae(i.type.render,!1),i;case 1:return i=ae(i.type,!0),i;default:return""}}function be(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case b:return"Fragment";case I:return"Portal";case V:return"Profiler";case C:return"StrictMode";case Y:return"Suspense";case B:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case z:return(i.displayName||"Context")+".Consumer";case U:return(i._context.displayName||"Context")+".Provider";case $:var a=i.render;return i=i.displayName,i||(i=a.displayName||a.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case se:return a=i.displayName||null,a!==null?a:be(i.type)||"Memo";case re:a=i._payload,i=i._init;try{return be(i(a))}catch{}}return null}function Ce(i){var a=i.type;switch(i.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=a.render,i=i.displayName||i.name||"",a.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(a);case 8:return a===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function ye(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Be(i){var a=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function ft(i){var a=Be(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,a),c=""+i[a];if(!i.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,a,{configurable:!0,get:function(){return p.call(this)},set:function(A){c=""+A,_.call(this,A)}}),Object.defineProperty(i,a,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){i._valueTracker=null,delete i[a]}}}}function Ze(i){i._valueTracker||(i._valueTracker=ft(i))}function ht(i){if(!i)return!1;var a=i._valueTracker;if(!a)return!0;var l=a.getValue(),c="";return i&&(c=Be(i)?i.checked?"true":"false":i.value),i=c,i!==l?(a.setValue(i),!0):!1}function mt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function lt(i,a){var l=a.checked;return j({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function $t(i,a){var l=a.defaultValue==null?"":a.defaultValue,c=a.checked!=null?a.checked:a.defaultChecked;l=ye(a.value!=null?a.value:l),i._wrapperState={initialChecked:c,initialValue:l,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function Bt(i,a){a=a.checked,a!=null&&D(i,"checked",a,!1)}function jt(i,a){Bt(i,a);var l=ye(a.value),c=a.type;if(l!=null)c==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(c==="submit"||c==="reset"){i.removeAttribute("value");return}a.hasOwnProperty("value")?Jt(i,a.type,l):a.hasOwnProperty("defaultValue")&&Jt(i,a.type,ye(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(i.defaultChecked=!!a.defaultChecked)}function bt(i,a,l){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var c=a.type;if(!(c!=="submit"&&c!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+i._wrapperState.initialValue,l||a===i.value||(i.value=a),i.defaultValue=a}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Jt(i,a,l){(a!=="number"||mt(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Nt=Array.isArray;function Qt(i,a,l,c){if(i=i.options,a){a={};for(var p=0;p<l.length;p++)a["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=a.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&c&&(i[l].defaultSelected=!0)}else{for(l=""+ye(l),a=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,c&&(i[p].defaultSelected=!0);return}a!==null||i[p].disabled||(a=i[p])}a!==null&&(a.selected=!0)}}function en(i,a){if(a.dangerouslySetInnerHTML!=null)throw Error(t(91));return j({},a,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function zt(i,a){var l=a.value;if(l==null){if(l=a.children,a=a.defaultValue,l!=null){if(a!=null)throw Error(t(92));if(Nt(l)){if(1<l.length)throw Error(t(93));l=l[0]}a=l}a==null&&(a=""),l=a}i._wrapperState={initialValue:ye(l)}}function J(i,a){var l=ye(a.value),c=ye(a.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),a.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),c!=null&&(i.defaultValue=""+c)}function mn(i){var a=i.textContent;a===i._wrapperState.initialValue&&a!==""&&a!==null&&(i.value=a)}function xt(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ct(i,a){return i==null||i==="http://www.w3.org/1999/xhtml"?xt(a):i==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Ie,Ft=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,l,c,p){MSApp.execUnsafeLocalFunction(function(){return i(a,l,c,p)})}:i})(function(i,a){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=a;else{for(Ie=Ie||document.createElement("div"),Ie.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=Ie.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;a.firstChild;)i.appendChild(a.firstChild)}});function Qe(i,a){if(a){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=a;return}}i.textContent=a}var nt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},k=["Webkit","ms","Moz","O"];Object.keys(nt).forEach(function(i){k.forEach(function(a){a=a+i.charAt(0).toUpperCase()+i.substring(1),nt[a]=nt[i]})});function R(i,a,l){return a==null||typeof a=="boolean"||a===""?"":l||typeof a!="number"||a===0||nt.hasOwnProperty(i)&&nt[i]?(""+a).trim():a+"px"}function oe(i,a){i=i.style;for(var l in a)if(a.hasOwnProperty(l)){var c=l.indexOf("--")===0,p=R(l,a[l],c);l==="float"&&(l="cssFloat"),c?i.setProperty(l,p):i[l]=p}}var we=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Se(i,a){if(a){if(we[i]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(t(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(t(61))}if(a.style!=null&&typeof a.style!="object")throw Error(t(62))}}function Le(i,a){if(i.indexOf("-")===-1)return typeof a.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var De=null;function ve(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var _e=null,G=null,N=null;function q(i){if(i=Bo(i)){if(typeof _e!="function")throw Error(t(280));var a=i.stateNode;a&&(a=iu(a),_e(i.stateNode,i.type,a))}}function W(i){G?N?N.push(i):N=[i]:G=i}function ue(){if(G){var i=G,a=N;if(N=G=null,q(i),a)for(i=0;i<a.length;i++)q(a[i])}}function pe(i,a){return i(a)}function ge(){}var xe=!1;function $e(i,a,l){if(xe)return i(a,l);xe=!0;try{return pe(i,a,l)}finally{xe=!1,(G!==null||N!==null)&&(ge(),ue())}}function Ee(i,a){var l=i.stateNode;if(l===null)return null;var c=iu(l);if(c===null)return null;l=c[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,a,typeof l));return l}var He=!1;if(d)try{var it={};Object.defineProperty(it,"passive",{get:function(){He=!0}}),window.addEventListener("test",it,it),window.removeEventListener("test",it,it)}catch{He=!1}function Fe(i,a,l,c,p,_,A,H,K){var me=Array.prototype.slice.call(arguments,3);try{a.apply(l,me)}catch(Re){this.onError(Re)}}var vt=!1,Xt=null,Ln=!1,ta=null,ar={onError:function(i){vt=!0,Xt=i}};function na(i,a,l,c,p,_,A,H,K){vt=!1,Xt=null,Fe.apply(ar,arguments)}function Ba(i,a,l,c,p,_,A,H,K){if(na.apply(this,arguments),vt){if(vt){var me=Xt;vt=!1,Xt=null}else throw Error(t(198));Ln||(Ln=!0,ta=me)}}function Mi(i){var a=i,l=i;if(i.alternate)for(;a.return;)a=a.return;else{i=a;do a=i,(a.flags&4098)!==0&&(l=a.return),i=a.return;while(i)}return a.tag===3?l:null}function ai(i){if(i.tag===13){var a=i.memoizedState;if(a===null&&(i=i.alternate,i!==null&&(a=i.memoizedState)),a!==null)return a.dehydrated}return null}function ia(i){if(Mi(i)!==i)throw Error(t(188))}function sr(i){var a=i.alternate;if(!a){if(a=Mi(i),a===null)throw Error(t(188));return a!==i?null:i}for(var l=i,c=a;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(c=p.return,c!==null){l=c;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return ia(p),i;if(_===c)return ia(p),a;_=_.sibling}throw Error(t(188))}if(l.return!==c.return)l=p,c=_;else{for(var A=!1,H=p.child;H;){if(H===l){A=!0,l=p,c=_;break}if(H===c){A=!0,c=p,l=_;break}H=H.sibling}if(!A){for(H=_.child;H;){if(H===l){A=!0,l=_,c=p;break}if(H===c){A=!0,c=_,l=p;break}H=H.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==c)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:a}function ra(i){return i=sr(i),i!==null?Ge(i):null}function Ge(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var a=Ge(i);if(a!==null)return a;i=i.sibling}return null}var za=e.unstable_scheduleCallback,zn=e.unstable_cancelCallback,or=e.unstable_shouldYield,ys=e.unstable_requestPaint,Ht=e.unstable_now,Ha=e.unstable_getCurrentPriorityLevel,aa=e.unstable_ImmediatePriority,Ga=e.unstable_UserBlockingPriority,Ar=e.unstable_NormalPriority,Va=e.unstable_LowPriority,P=e.unstable_IdlePriority,X=null,de=null;function le(i){if(de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(X,i,void 0,(i.current.flags&128)===128)}catch{}}var ie=Math.clz32?Math.clz32:Oe,Ue=Math.log,We=Math.LN2;function Oe(i){return i>>>=0,i===0?32:31-(Ue(i)/We|0)|0}var ke=64,Xe=4194304;function rt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function pt(i,a){var l=i.pendingLanes;if(l===0)return 0;var c=0,p=i.suspendedLanes,_=i.pingedLanes,A=l&268435455;if(A!==0){var H=A&~p;H!==0?c=rt(H):(_&=A,_!==0&&(c=rt(_)))}else A=l&~p,A!==0?c=rt(A):_!==0&&(c=rt(_));if(c===0)return 0;if(a!==0&&a!==c&&(a&p)===0&&(p=c&-c,_=a&-a,p>=_||p===16&&(_&4194240)!==0))return a;if((c&4)!==0&&(c|=l&16),a=i.entangledLanes,a!==0)for(i=i.entanglements,a&=c;0<a;)l=31-ie(a),p=1<<l,c|=i[l],a&=~p;return c}function qe(i,a){switch(i){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gt(i,a){for(var l=i.suspendedLanes,c=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var A=31-ie(_),H=1<<A,K=p[A];K===-1?((H&l)===0||(H&c)!==0)&&(p[A]=qe(H,a)):K<=a&&(i.expiredLanes|=H),_&=~H}}function kt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Lt(){var i=ke;return ke<<=1,(ke&4194240)===0&&(ke=64),i}function At(i){for(var a=[],l=0;31>l;l++)a.push(i);return a}function qt(i,a,l){i.pendingLanes|=a,a!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,a=31-ie(a),i[a]=l}function Ye(i,a){var l=i.pendingLanes&~a;i.pendingLanes=a,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=a,i.mutableReadLanes&=a,i.entangledLanes&=a,a=i.entanglements;var c=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-ie(l),_=1<<p;a[p]=0,c[p]=-1,i[p]=-1,l&=~_}}function ln(i,a){var l=i.entangledLanes|=a;for(i=i.entanglements;l;){var c=31-ie(l),p=1<<c;p&a|i[c]&a&&(i[c]|=a),l&=~p}}var je=0;function si(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var un,Fi,Xn,oi,yt,tn=!1,_n=[],wt=null,Ot=null,fn=null,ki=new Map,sa=new Map,Bi=[],Hl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ss(i,a){switch(i){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":ki.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(a.pointerId)}}function Wa(i,a,l,c,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:a,domEventName:l,eventSystemFlags:c,nativeEvent:_,targetContainers:[p]},a!==null&&(a=Bo(a),a!==null&&Fi(a)),i):(i.eventSystemFlags|=c,a=i.targetContainers,p!==null&&a.indexOf(p)===-1&&a.push(p),i)}function Gl(i,a,l,c,p){switch(a){case"focusin":return wt=Wa(wt,i,a,l,c,p),!0;case"dragenter":return Ot=Wa(Ot,i,a,l,c,p),!0;case"mouseover":return fn=Wa(fn,i,a,l,c,p),!0;case"pointerover":var _=p.pointerId;return ki.set(_,Wa(ki.get(_)||null,i,a,l,c,p)),!0;case"gotpointercapture":return _=p.pointerId,sa.set(_,Wa(sa.get(_)||null,i,a,l,c,p)),!0}return!1}function bo(i){var a=Xa(i.target);if(a!==null){var l=Mi(a);if(l!==null){if(a=l.tag,a===13){if(a=ai(l),a!==null){i.blockedOn=a,yt(i.priority,function(){Xn(l)});return}}else if(a===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function $a(i){if(i.blockedOn!==null)return!1;for(var a=i.targetContainers;0<a.length;){var l=gd(i.domEventName,i.eventSystemFlags,a[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var c=new l.constructor(l.type,l);De=c,l.target.dispatchEvent(c),De=null}else return a=Bo(l),a!==null&&Fi(a),i.blockedOn=l,!1;a.shift()}return!0}function wo(i,a,l){$a(i)&&l.delete(a)}function Vl(){tn=!1,wt!==null&&$a(wt)&&(wt=null),Ot!==null&&$a(Ot)&&(Ot=null),fn!==null&&$a(fn)&&(fn=null),ki.forEach(wo),sa.forEach(wo)}function To(i,a){i.blockedOn===a&&(i.blockedOn=null,tn||(tn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Vl)))}function Ro(i){function a(p){return To(p,i)}if(0<_n.length){To(_n[0],i);for(var l=1;l<_n.length;l++){var c=_n[l];c.blockedOn===i&&(c.blockedOn=null)}}for(wt!==null&&To(wt,i),Ot!==null&&To(Ot,i),fn!==null&&To(fn,i),ki.forEach(a),sa.forEach(a),l=0;l<Bi.length;l++)c=Bi[l],c.blockedOn===i&&(c.blockedOn=null);for(;0<Bi.length&&(l=Bi[0],l.blockedOn===null);)bo(l),l.blockedOn===null&&Bi.shift()}var xs=L.ReactCurrentBatchConfig,Wl=!0;function IM(i,a,l,c){var p=je,_=xs.transition;xs.transition=null;try{je=1,md(i,a,l,c)}finally{je=p,xs.transition=_}}function NM(i,a,l,c){var p=je,_=xs.transition;xs.transition=null;try{je=4,md(i,a,l,c)}finally{je=p,xs.transition=_}}function md(i,a,l,c){if(Wl){var p=gd(i,a,l,c);if(p===null)Id(i,a,c,$l,l),Ss(i,c);else if(Gl(p,i,a,l,c))c.stopPropagation();else if(Ss(i,c),a&4&&-1<Hl.indexOf(i)){for(;p!==null;){var _=Bo(p);if(_!==null&&un(_),_=gd(i,a,l,c),_===null&&Id(i,a,c,$l,l),_===p)break;p=_}p!==null&&c.stopPropagation()}else Id(i,a,c,null,l)}}var $l=null;function gd(i,a,l,c){if($l=null,i=ve(c),i=Xa(i),i!==null)if(a=Mi(i),a===null)i=null;else if(l=a.tag,l===13){if(i=ai(a),i!==null)return i;i=null}else if(l===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;i=null}else a!==i&&(i=null);return $l=i,null}function mg(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ha()){case aa:return 1;case Ga:return 4;case Ar:case Va:return 16;case P:return 536870912;default:return 16}default:return 16}}var oa=null,vd=null,Xl=null;function gg(){if(Xl)return Xl;var i,a=vd,l=a.length,c,p="value"in oa?oa.value:oa.textContent,_=p.length;for(i=0;i<l&&a[i]===p[i];i++);var A=l-i;for(c=1;c<=A&&a[l-c]===p[_-c];c++);return Xl=p.slice(i,1<c?1-c:void 0)}function ql(i){var a=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&a===13&&(i=13)):i=a,i===10&&(i=13),32<=i||i===13?i:0}function Yl(){return!0}function vg(){return!1}function li(i){function a(l,c,p,_,A){this._reactName=l,this._targetInst=p,this.type=c,this.nativeEvent=_,this.target=A,this.currentTarget=null;for(var H in i)i.hasOwnProperty(H)&&(l=i[H],this[H]=l?l(_):_[H]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Yl:vg,this.isPropagationStopped=vg,this}return j(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Yl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Yl)},persist:function(){},isPersistent:Yl}),a}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_d=li(Ms),Ao=j({},Ms,{view:0,detail:0}),OM=li(Ao),yd,Sd,Co,Kl=j({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Md,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Co&&(Co&&i.type==="mousemove"?(yd=i.screenX-Co.screenX,Sd=i.screenY-Co.screenY):Sd=yd=0,Co=i),yd)},movementY:function(i){return"movementY"in i?i.movementY:Sd}}),_g=li(Kl),UM=j({},Kl,{dataTransfer:0}),FM=li(UM),kM=j({},Ao,{relatedTarget:0}),xd=li(kM),BM=j({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),zM=li(BM),HM=j({},Ms,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),GM=li(HM),VM=j({},Ms,{data:0}),yg=li(VM),WM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},XM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qM(i){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(i):(i=XM[i])?!!a[i]:!1}function Md(){return qM}var YM=j({},Ao,{key:function(i){if(i.key){var a=WM[i.key]||i.key;if(a!=="Unidentified")return a}return i.type==="keypress"?(i=ql(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?$M[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Md,charCode:function(i){return i.type==="keypress"?ql(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ql(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),KM=li(YM),ZM=j({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sg=li(ZM),jM=j({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Md}),JM=li(jM),QM=j({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),eE=li(QM),tE=j({},Kl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),nE=li(tE),iE=[9,13,27,32],Ed=d&&"CompositionEvent"in window,Po=null;d&&"documentMode"in document&&(Po=document.documentMode);var rE=d&&"TextEvent"in window&&!Po,xg=d&&(!Ed||Po&&8<Po&&11>=Po),Mg=" ",Eg=!1;function bg(i,a){switch(i){case"keyup":return iE.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wg(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Es=!1;function aE(i,a){switch(i){case"compositionend":return wg(a);case"keypress":return a.which!==32?null:(Eg=!0,Mg);case"textInput":return i=a.data,i===Mg&&Eg?null:i;default:return null}}function sE(i,a){if(Es)return i==="compositionend"||!Ed&&bg(i,a)?(i=gg(),Xl=vd=oa=null,Es=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return xg&&a.locale!=="ko"?null:a.data;default:return null}}var oE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tg(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a==="input"?!!oE[i.type]:a==="textarea"}function Rg(i,a,l,c){W(c),a=eu(a,"onChange"),0<a.length&&(l=new _d("onChange","change",null,l,c),i.push({event:l,listeners:a}))}var Lo=null,Do=null;function lE(i){$g(i,0)}function Zl(i){var a=As(i);if(ht(a))return i}function uE(i,a){if(i==="change")return a}var Ag=!1;if(d){var bd;if(d){var wd="oninput"in document;if(!wd){var Cg=document.createElement("div");Cg.setAttribute("oninput","return;"),wd=typeof Cg.oninput=="function"}bd=wd}else bd=!1;Ag=bd&&(!document.documentMode||9<document.documentMode)}function Pg(){Lo&&(Lo.detachEvent("onpropertychange",Lg),Do=Lo=null)}function Lg(i){if(i.propertyName==="value"&&Zl(Do)){var a=[];Rg(a,Do,i,ve(i)),$e(lE,a)}}function cE(i,a,l){i==="focusin"?(Pg(),Lo=a,Do=l,Lo.attachEvent("onpropertychange",Lg)):i==="focusout"&&Pg()}function dE(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Zl(Do)}function fE(i,a){if(i==="click")return Zl(a)}function hE(i,a){if(i==="input"||i==="change")return Zl(a)}function pE(i,a){return i===a&&(i!==0||1/i===1/a)||i!==i&&a!==a}var zi=typeof Object.is=="function"?Object.is:pE;function Io(i,a){if(zi(i,a))return!0;if(typeof i!="object"||i===null||typeof a!="object"||a===null)return!1;var l=Object.keys(i),c=Object.keys(a);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var p=l[c];if(!f.call(a,p)||!zi(i[p],a[p]))return!1}return!0}function Dg(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Ig(i,a){var l=Dg(i);i=0;for(var c;l;){if(l.nodeType===3){if(c=i+l.textContent.length,i<=a&&c>=a)return{node:l,offset:a-i};i=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Dg(l)}}function Ng(i,a){return i&&a?i===a?!0:i&&i.nodeType===3?!1:a&&a.nodeType===3?Ng(i,a.parentNode):"contains"in i?i.contains(a):i.compareDocumentPosition?!!(i.compareDocumentPosition(a)&16):!1:!1}function Og(){for(var i=window,a=mt();a instanceof i.HTMLIFrameElement;){try{var l=typeof a.contentWindow.location.href=="string"}catch{l=!1}if(l)i=a.contentWindow;else break;a=mt(i.document)}return a}function Td(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a&&(a==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||a==="textarea"||i.contentEditable==="true")}function mE(i){var a=Og(),l=i.focusedElem,c=i.selectionRange;if(a!==l&&l&&l.ownerDocument&&Ng(l.ownerDocument.documentElement,l)){if(c!==null&&Td(l)){if(a=c.start,i=c.end,i===void 0&&(i=a),"selectionStart"in l)l.selectionStart=a,l.selectionEnd=Math.min(i,l.value.length);else if(i=(a=l.ownerDocument||document)&&a.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(c.start,p);c=c.end===void 0?_:Math.min(c.end,p),!i.extend&&_>c&&(p=c,c=_,_=p),p=Ig(l,_);var A=Ig(l,c);p&&A&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==A.node||i.focusOffset!==A.offset)&&(a=a.createRange(),a.setStart(p.node,p.offset),i.removeAllRanges(),_>c?(i.addRange(a),i.extend(A.node,A.offset)):(a.setEnd(A.node,A.offset),i.addRange(a)))}}for(a=[],i=l;i=i.parentNode;)i.nodeType===1&&a.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<a.length;l++)i=a[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var gE=d&&"documentMode"in document&&11>=document.documentMode,bs=null,Rd=null,No=null,Ad=!1;function Ug(i,a,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ad||bs==null||bs!==mt(c)||(c=bs,"selectionStart"in c&&Td(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),No&&Io(No,c)||(No=c,c=eu(Rd,"onSelect"),0<c.length&&(a=new _d("onSelect","select",null,a,l),i.push({event:a,listeners:c}),a.target=bs)))}function jl(i,a){var l={};return l[i.toLowerCase()]=a.toLowerCase(),l["Webkit"+i]="webkit"+a,l["Moz"+i]="moz"+a,l}var ws={animationend:jl("Animation","AnimationEnd"),animationiteration:jl("Animation","AnimationIteration"),animationstart:jl("Animation","AnimationStart"),transitionend:jl("Transition","TransitionEnd")},Cd={},Fg={};d&&(Fg=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function Jl(i){if(Cd[i])return Cd[i];if(!ws[i])return i;var a=ws[i],l;for(l in a)if(a.hasOwnProperty(l)&&l in Fg)return Cd[i]=a[l];return i}var kg=Jl("animationend"),Bg=Jl("animationiteration"),zg=Jl("animationstart"),Hg=Jl("transitionend"),Gg=new Map,Vg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function la(i,a){Gg.set(i,a),o(a,[i])}for(var Pd=0;Pd<Vg.length;Pd++){var Ld=Vg[Pd],vE=Ld.toLowerCase(),_E=Ld[0].toUpperCase()+Ld.slice(1);la(vE,"on"+_E)}la(kg,"onAnimationEnd"),la(Bg,"onAnimationIteration"),la(zg,"onAnimationStart"),la("dblclick","onDoubleClick"),la("focusin","onFocus"),la("focusout","onBlur"),la(Hg,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function Wg(i,a,l){var c=i.type||"unknown-event";i.currentTarget=l,Ba(c,a,void 0,i),i.currentTarget=null}function $g(i,a){a=(a&4)!==0;for(var l=0;l<i.length;l++){var c=i[l],p=c.event;c=c.listeners;e:{var _=void 0;if(a)for(var A=c.length-1;0<=A;A--){var H=c[A],K=H.instance,me=H.currentTarget;if(H=H.listener,K!==_&&p.isPropagationStopped())break e;Wg(p,H,me),_=K}else for(A=0;A<c.length;A++){if(H=c[A],K=H.instance,me=H.currentTarget,H=H.listener,K!==_&&p.isPropagationStopped())break e;Wg(p,H,me),_=K}}}if(Ln)throw i=ta,Ln=!1,ta=null,i}function Yt(i,a){var l=a[Bd];l===void 0&&(l=a[Bd]=new Set);var c=i+"__bubble";l.has(c)||(Xg(a,i,2,!1),l.add(c))}function Dd(i,a,l){var c=0;a&&(c|=4),Xg(l,i,c,a)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Uo(i){if(!i[Ql]){i[Ql]=!0,r.forEach(function(l){l!=="selectionchange"&&(yE.has(l)||Dd(l,!1,i),Dd(l,!0,i))});var a=i.nodeType===9?i:i.ownerDocument;a===null||a[Ql]||(a[Ql]=!0,Dd("selectionchange",!1,a))}}function Xg(i,a,l,c){switch(mg(a)){case 1:var p=IM;break;case 4:p=NM;break;default:p=md}l=p.bind(null,a,l,i),p=void 0,!He||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(p=!0),c?p!==void 0?i.addEventListener(a,l,{capture:!0,passive:p}):i.addEventListener(a,l,!0):p!==void 0?i.addEventListener(a,l,{passive:p}):i.addEventListener(a,l,!1)}function Id(i,a,l,c,p){var _=c;if((a&1)===0&&(a&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var H=c.stateNode.containerInfo;if(H===p||H.nodeType===8&&H.parentNode===p)break;if(A===4)for(A=c.return;A!==null;){var K=A.tag;if((K===3||K===4)&&(K=A.stateNode.containerInfo,K===p||K.nodeType===8&&K.parentNode===p))return;A=A.return}for(;H!==null;){if(A=Xa(H),A===null)return;if(K=A.tag,K===5||K===6){c=_=A;continue e}H=H.parentNode}}c=c.return}$e(function(){var me=_,Re=ve(l),Pe=[];e:{var Te=Gg.get(i);if(Te!==void 0){var Ve=_d,Je=i;switch(i){case"keypress":if(ql(l)===0)break e;case"keydown":case"keyup":Ve=KM;break;case"focusin":Je="focus",Ve=xd;break;case"focusout":Je="blur",Ve=xd;break;case"beforeblur":case"afterblur":Ve=xd;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=_g;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=FM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=JM;break;case kg:case Bg:case zg:Ve=zM;break;case Hg:Ve=eE;break;case"scroll":Ve=OM;break;case"wheel":Ve=nE;break;case"copy":case"cut":case"paste":Ve=GM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=Sg}var et=(a&4)!==0,hn=!et&&i==="scroll",ce=et?Te!==null?Te+"Capture":null:Te;et=[];for(var Q=me,he;Q!==null;){he=Q;var Ne=he.stateNode;if(he.tag===5&&Ne!==null&&(he=Ne,ce!==null&&(Ne=Ee(Q,ce),Ne!=null&&et.push(Fo(Q,Ne,he)))),hn)break;Q=Q.return}0<et.length&&(Te=new Ve(Te,Je,null,l,Re),Pe.push({event:Te,listeners:et}))}}if((a&7)===0){e:{if(Te=i==="mouseover"||i==="pointerover",Ve=i==="mouseout"||i==="pointerout",Te&&l!==De&&(Je=l.relatedTarget||l.fromElement)&&(Xa(Je)||Je[Cr]))break e;if((Ve||Te)&&(Te=Re.window===Re?Re:(Te=Re.ownerDocument)?Te.defaultView||Te.parentWindow:window,Ve?(Je=l.relatedTarget||l.toElement,Ve=me,Je=Je?Xa(Je):null,Je!==null&&(hn=Mi(Je),Je!==hn||Je.tag!==5&&Je.tag!==6)&&(Je=null)):(Ve=null,Je=me),Ve!==Je)){if(et=_g,Ne="onMouseLeave",ce="onMouseEnter",Q="mouse",(i==="pointerout"||i==="pointerover")&&(et=Sg,Ne="onPointerLeave",ce="onPointerEnter",Q="pointer"),hn=Ve==null?Te:As(Ve),he=Je==null?Te:As(Je),Te=new et(Ne,Q+"leave",Ve,l,Re),Te.target=hn,Te.relatedTarget=he,Ne=null,Xa(Re)===me&&(et=new et(ce,Q+"enter",Je,l,Re),et.target=he,et.relatedTarget=hn,Ne=et),hn=Ne,Ve&&Je)t:{for(et=Ve,ce=Je,Q=0,he=et;he;he=Ts(he))Q++;for(he=0,Ne=ce;Ne;Ne=Ts(Ne))he++;for(;0<Q-he;)et=Ts(et),Q--;for(;0<he-Q;)ce=Ts(ce),he--;for(;Q--;){if(et===ce||ce!==null&&et===ce.alternate)break t;et=Ts(et),ce=Ts(ce)}et=null}else et=null;Ve!==null&&qg(Pe,Te,Ve,et,!1),Je!==null&&hn!==null&&qg(Pe,hn,Je,et,!0)}}e:{if(Te=me?As(me):window,Ve=Te.nodeName&&Te.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&Te.type==="file")var tt=uE;else if(Tg(Te))if(Ag)tt=hE;else{tt=dE;var at=cE}else(Ve=Te.nodeName)&&Ve.toLowerCase()==="input"&&(Te.type==="checkbox"||Te.type==="radio")&&(tt=fE);if(tt&&(tt=tt(i,me))){Rg(Pe,tt,l,Re);break e}at&&at(i,Te,me),i==="focusout"&&(at=Te._wrapperState)&&at.controlled&&Te.type==="number"&&Jt(Te,"number",Te.value)}switch(at=me?As(me):window,i){case"focusin":(Tg(at)||at.contentEditable==="true")&&(bs=at,Rd=me,No=null);break;case"focusout":No=Rd=bs=null;break;case"mousedown":Ad=!0;break;case"contextmenu":case"mouseup":case"dragend":Ad=!1,Ug(Pe,l,Re);break;case"selectionchange":if(gE)break;case"keydown":case"keyup":Ug(Pe,l,Re)}var st;if(Ed)e:{switch(i){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else Es?bg(i,l)&&(ut="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(ut="onCompositionStart");ut&&(xg&&l.locale!=="ko"&&(Es||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&Es&&(st=gg()):(oa=Re,vd="value"in oa?oa.value:oa.textContent,Es=!0)),at=eu(me,ut),0<at.length&&(ut=new yg(ut,i,null,l,Re),Pe.push({event:ut,listeners:at}),st?ut.data=st:(st=wg(l),st!==null&&(ut.data=st)))),(st=rE?aE(i,l):sE(i,l))&&(me=eu(me,"onBeforeInput"),0<me.length&&(Re=new yg("onBeforeInput","beforeinput",null,l,Re),Pe.push({event:Re,listeners:me}),Re.data=st))}$g(Pe,a)})}function Fo(i,a,l){return{instance:i,listener:a,currentTarget:l}}function eu(i,a){for(var l=a+"Capture",c=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=Ee(i,l),_!=null&&c.unshift(Fo(i,_,p)),_=Ee(i,a),_!=null&&c.push(Fo(i,_,p))),i=i.return}return c}function Ts(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function qg(i,a,l,c,p){for(var _=a._reactName,A=[];l!==null&&l!==c;){var H=l,K=H.alternate,me=H.stateNode;if(K!==null&&K===c)break;H.tag===5&&me!==null&&(H=me,p?(K=Ee(l,_),K!=null&&A.unshift(Fo(l,K,H))):p||(K=Ee(l,_),K!=null&&A.push(Fo(l,K,H)))),l=l.return}A.length!==0&&i.push({event:a,listeners:A})}var SE=/\r\n?/g,xE=/\u0000|\uFFFD/g;function Yg(i){return(typeof i=="string"?i:""+i).replace(SE,`
`).replace(xE,"")}function tu(i,a,l){if(a=Yg(a),Yg(i)!==a&&l)throw Error(t(425))}function nu(){}var Nd=null,Od=null;function Ud(i,a){return i==="textarea"||i==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Fd=typeof setTimeout=="function"?setTimeout:void 0,ME=typeof clearTimeout=="function"?clearTimeout:void 0,Kg=typeof Promise=="function"?Promise:void 0,EE=typeof queueMicrotask=="function"?queueMicrotask:typeof Kg<"u"?function(i){return Kg.resolve(null).then(i).catch(bE)}:Fd;function bE(i){setTimeout(function(){throw i})}function kd(i,a){var l=a,c=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(c===0){i.removeChild(p),Ro(a);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=p}while(l);Ro(a)}function ua(i){for(;i!=null;i=i.nextSibling){var a=i.nodeType;if(a===1||a===3)break;if(a===8){if(a=i.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return i}function Zg(i){i=i.previousSibling;for(var a=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(a===0)return i;a--}else l==="/$"&&a++}i=i.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),lr="__reactFiber$"+Rs,ko="__reactProps$"+Rs,Cr="__reactContainer$"+Rs,Bd="__reactEvents$"+Rs,wE="__reactListeners$"+Rs,TE="__reactHandles$"+Rs;function Xa(i){var a=i[lr];if(a)return a;for(var l=i.parentNode;l;){if(a=l[Cr]||l[lr]){if(l=a.alternate,a.child!==null||l!==null&&l.child!==null)for(i=Zg(i);i!==null;){if(l=i[lr])return l;i=Zg(i)}return a}i=l,l=i.parentNode}return null}function Bo(i){return i=i[lr]||i[Cr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function As(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function iu(i){return i[ko]||null}var zd=[],Cs=-1;function ca(i){return{current:i}}function Kt(i){0>Cs||(i.current=zd[Cs],zd[Cs]=null,Cs--)}function Vt(i,a){Cs++,zd[Cs]=i.current,i.current=a}var da={},Dn=ca(da),qn=ca(!1),qa=da;function Ps(i,a){var l=i.type.contextTypes;if(!l)return da;var c=i.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===a)return c.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=a[_];return c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=a,i.__reactInternalMemoizedMaskedChildContext=p),p}function Yn(i){return i=i.childContextTypes,i!=null}function ru(){Kt(qn),Kt(Dn)}function jg(i,a,l){if(Dn.current!==da)throw Error(t(168));Vt(Dn,a),Vt(qn,l)}function Jg(i,a,l){var c=i.stateNode;if(a=a.childContextTypes,typeof c.getChildContext!="function")return l;c=c.getChildContext();for(var p in c)if(!(p in a))throw Error(t(108,Ce(i)||"Unknown",p));return j({},l,c)}function au(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||da,qa=Dn.current,Vt(Dn,i),Vt(qn,qn.current),!0}function Qg(i,a,l){var c=i.stateNode;if(!c)throw Error(t(169));l?(i=Jg(i,a,qa),c.__reactInternalMemoizedMergedChildContext=i,Kt(qn),Kt(Dn),Vt(Dn,i)):Kt(qn),Vt(qn,l)}var Pr=null,su=!1,Hd=!1;function ev(i){Pr===null?Pr=[i]:Pr.push(i)}function RE(i){su=!0,ev(i)}function fa(){if(!Hd&&Pr!==null){Hd=!0;var i=0,a=je;try{var l=Pr;for(je=1;i<l.length;i++){var c=l[i];do c=c(!0);while(c!==null)}Pr=null,su=!1}catch(p){throw Pr!==null&&(Pr=Pr.slice(i+1)),za(aa,fa),p}finally{je=a,Hd=!1}}return null}var Ls=[],Ds=0,ou=null,lu=0,Ei=[],bi=0,Ya=null,Lr=1,Dr="";function Ka(i,a){Ls[Ds++]=lu,Ls[Ds++]=ou,ou=i,lu=a}function tv(i,a,l){Ei[bi++]=Lr,Ei[bi++]=Dr,Ei[bi++]=Ya,Ya=i;var c=Lr;i=Dr;var p=32-ie(c)-1;c&=~(1<<p),l+=1;var _=32-ie(a)+p;if(30<_){var A=p-p%5;_=(c&(1<<A)-1).toString(32),c>>=A,p-=A,Lr=1<<32-ie(a)+p|l<<p|c,Dr=_+i}else Lr=1<<_|l<<p|c,Dr=i}function Gd(i){i.return!==null&&(Ka(i,1),tv(i,1,0))}function Vd(i){for(;i===ou;)ou=Ls[--Ds],Ls[Ds]=null,lu=Ls[--Ds],Ls[Ds]=null;for(;i===Ya;)Ya=Ei[--bi],Ei[bi]=null,Dr=Ei[--bi],Ei[bi]=null,Lr=Ei[--bi],Ei[bi]=null}var ui=null,ci=null,nn=!1,Hi=null;function nv(i,a){var l=Ai(5,null,null,0);l.elementType="DELETED",l.stateNode=a,l.return=i,a=i.deletions,a===null?(i.deletions=[l],i.flags|=16):a.push(l)}function iv(i,a){switch(i.tag){case 5:var l=i.type;return a=a.nodeType!==1||l.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(i.stateNode=a,ui=i,ci=ua(a.firstChild),!0):!1;case 6:return a=i.pendingProps===""||a.nodeType!==3?null:a,a!==null?(i.stateNode=a,ui=i,ci=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(l=Ya!==null?{id:Lr,overflow:Dr}:null,i.memoizedState={dehydrated:a,treeContext:l,retryLane:1073741824},l=Ai(18,null,null,0),l.stateNode=a,l.return=i,i.child=l,ui=i,ci=null,!0):!1;default:return!1}}function Wd(i){return(i.mode&1)!==0&&(i.flags&128)===0}function $d(i){if(nn){var a=ci;if(a){var l=a;if(!iv(i,a)){if(Wd(i))throw Error(t(418));a=ua(l.nextSibling);var c=ui;a&&iv(i,a)?nv(c,l):(i.flags=i.flags&-4097|2,nn=!1,ui=i)}}else{if(Wd(i))throw Error(t(418));i.flags=i.flags&-4097|2,nn=!1,ui=i}}}function rv(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;ui=i}function uu(i){if(i!==ui)return!1;if(!nn)return rv(i),nn=!0,!1;var a;if((a=i.tag!==3)&&!(a=i.tag!==5)&&(a=i.type,a=a!=="head"&&a!=="body"&&!Ud(i.type,i.memoizedProps)),a&&(a=ci)){if(Wd(i))throw av(),Error(t(418));for(;a;)nv(i,a),a=ua(a.nextSibling)}if(rv(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,a=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(a===0){ci=ua(i.nextSibling);break e}a--}else l!=="$"&&l!=="$!"&&l!=="$?"||a++}i=i.nextSibling}ci=null}}else ci=ui?ua(i.stateNode.nextSibling):null;return!0}function av(){for(var i=ci;i;)i=ua(i.nextSibling)}function Is(){ci=ui=null,nn=!1}function Xd(i){Hi===null?Hi=[i]:Hi.push(i)}var AE=L.ReactCurrentBatchConfig;function zo(i,a,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var c=l.stateNode}if(!c)throw Error(t(147,i));var p=c,_=""+i;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===_?a.ref:(a=function(A){var H=p.refs;A===null?delete H[_]:H[_]=A},a._stringRef=_,a)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function cu(i,a){throw i=Object.prototype.toString.call(a),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":i))}function sv(i){var a=i._init;return a(i._payload)}function ov(i){function a(ce,Q){if(i){var he=ce.deletions;he===null?(ce.deletions=[Q],ce.flags|=16):he.push(Q)}}function l(ce,Q){if(!i)return null;for(;Q!==null;)a(ce,Q),Q=Q.sibling;return null}function c(ce,Q){for(ce=new Map;Q!==null;)Q.key!==null?ce.set(Q.key,Q):ce.set(Q.index,Q),Q=Q.sibling;return ce}function p(ce,Q){return ce=Sa(ce,Q),ce.index=0,ce.sibling=null,ce}function _(ce,Q,he){return ce.index=he,i?(he=ce.alternate,he!==null?(he=he.index,he<Q?(ce.flags|=2,Q):he):(ce.flags|=2,Q)):(ce.flags|=1048576,Q)}function A(ce){return i&&ce.alternate===null&&(ce.flags|=2),ce}function H(ce,Q,he,Ne){return Q===null||Q.tag!==6?(Q=kf(he,ce.mode,Ne),Q.return=ce,Q):(Q=p(Q,he),Q.return=ce,Q)}function K(ce,Q,he,Ne){var tt=he.type;return tt===b?Re(ce,Q,he.props.children,Ne,he.key):Q!==null&&(Q.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===re&&sv(tt)===Q.type)?(Ne=p(Q,he.props),Ne.ref=zo(ce,Q,he),Ne.return=ce,Ne):(Ne=Nu(he.type,he.key,he.props,null,ce.mode,Ne),Ne.ref=zo(ce,Q,he),Ne.return=ce,Ne)}function me(ce,Q,he,Ne){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==he.containerInfo||Q.stateNode.implementation!==he.implementation?(Q=Bf(he,ce.mode,Ne),Q.return=ce,Q):(Q=p(Q,he.children||[]),Q.return=ce,Q)}function Re(ce,Q,he,Ne,tt){return Q===null||Q.tag!==7?(Q=is(he,ce.mode,Ne,tt),Q.return=ce,Q):(Q=p(Q,he),Q.return=ce,Q)}function Pe(ce,Q,he){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Q=kf(""+Q,ce.mode,he),Q.return=ce,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case O:return he=Nu(Q.type,Q.key,Q.props,null,ce.mode,he),he.ref=zo(ce,null,Q),he.return=ce,he;case I:return Q=Bf(Q,ce.mode,he),Q.return=ce,Q;case re:var Ne=Q._init;return Pe(ce,Ne(Q._payload),he)}if(Nt(Q)||Z(Q))return Q=is(Q,ce.mode,he,null),Q.return=ce,Q;cu(ce,Q)}return null}function Te(ce,Q,he,Ne){var tt=Q!==null?Q.key:null;if(typeof he=="string"&&he!==""||typeof he=="number")return tt!==null?null:H(ce,Q,""+he,Ne);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case O:return he.key===tt?K(ce,Q,he,Ne):null;case I:return he.key===tt?me(ce,Q,he,Ne):null;case re:return tt=he._init,Te(ce,Q,tt(he._payload),Ne)}if(Nt(he)||Z(he))return tt!==null?null:Re(ce,Q,he,Ne,null);cu(ce,he)}return null}function Ve(ce,Q,he,Ne,tt){if(typeof Ne=="string"&&Ne!==""||typeof Ne=="number")return ce=ce.get(he)||null,H(Q,ce,""+Ne,tt);if(typeof Ne=="object"&&Ne!==null){switch(Ne.$$typeof){case O:return ce=ce.get(Ne.key===null?he:Ne.key)||null,K(Q,ce,Ne,tt);case I:return ce=ce.get(Ne.key===null?he:Ne.key)||null,me(Q,ce,Ne,tt);case re:var at=Ne._init;return Ve(ce,Q,he,at(Ne._payload),tt)}if(Nt(Ne)||Z(Ne))return ce=ce.get(he)||null,Re(Q,ce,Ne,tt,null);cu(Q,Ne)}return null}function Je(ce,Q,he,Ne){for(var tt=null,at=null,st=Q,ut=Q=0,wn=null;st!==null&&ut<he.length;ut++){st.index>ut?(wn=st,st=null):wn=st.sibling;var Dt=Te(ce,st,he[ut],Ne);if(Dt===null){st===null&&(st=wn);break}i&&st&&Dt.alternate===null&&a(ce,st),Q=_(Dt,Q,ut),at===null?tt=Dt:at.sibling=Dt,at=Dt,st=wn}if(ut===he.length)return l(ce,st),nn&&Ka(ce,ut),tt;if(st===null){for(;ut<he.length;ut++)st=Pe(ce,he[ut],Ne),st!==null&&(Q=_(st,Q,ut),at===null?tt=st:at.sibling=st,at=st);return nn&&Ka(ce,ut),tt}for(st=c(ce,st);ut<he.length;ut++)wn=Ve(st,ce,ut,he[ut],Ne),wn!==null&&(i&&wn.alternate!==null&&st.delete(wn.key===null?ut:wn.key),Q=_(wn,Q,ut),at===null?tt=wn:at.sibling=wn,at=wn);return i&&st.forEach(function(xa){return a(ce,xa)}),nn&&Ka(ce,ut),tt}function et(ce,Q,he,Ne){var tt=Z(he);if(typeof tt!="function")throw Error(t(150));if(he=tt.call(he),he==null)throw Error(t(151));for(var at=tt=null,st=Q,ut=Q=0,wn=null,Dt=he.next();st!==null&&!Dt.done;ut++,Dt=he.next()){st.index>ut?(wn=st,st=null):wn=st.sibling;var xa=Te(ce,st,Dt.value,Ne);if(xa===null){st===null&&(st=wn);break}i&&st&&xa.alternate===null&&a(ce,st),Q=_(xa,Q,ut),at===null?tt=xa:at.sibling=xa,at=xa,st=wn}if(Dt.done)return l(ce,st),nn&&Ka(ce,ut),tt;if(st===null){for(;!Dt.done;ut++,Dt=he.next())Dt=Pe(ce,Dt.value,Ne),Dt!==null&&(Q=_(Dt,Q,ut),at===null?tt=Dt:at.sibling=Dt,at=Dt);return nn&&Ka(ce,ut),tt}for(st=c(ce,st);!Dt.done;ut++,Dt=he.next())Dt=Ve(st,ce,ut,Dt.value,Ne),Dt!==null&&(i&&Dt.alternate!==null&&st.delete(Dt.key===null?ut:Dt.key),Q=_(Dt,Q,ut),at===null?tt=Dt:at.sibling=Dt,at=Dt);return i&&st.forEach(function(ob){return a(ce,ob)}),nn&&Ka(ce,ut),tt}function hn(ce,Q,he,Ne){if(typeof he=="object"&&he!==null&&he.type===b&&he.key===null&&(he=he.props.children),typeof he=="object"&&he!==null){switch(he.$$typeof){case O:e:{for(var tt=he.key,at=Q;at!==null;){if(at.key===tt){if(tt=he.type,tt===b){if(at.tag===7){l(ce,at.sibling),Q=p(at,he.props.children),Q.return=ce,ce=Q;break e}}else if(at.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===re&&sv(tt)===at.type){l(ce,at.sibling),Q=p(at,he.props),Q.ref=zo(ce,at,he),Q.return=ce,ce=Q;break e}l(ce,at);break}else a(ce,at);at=at.sibling}he.type===b?(Q=is(he.props.children,ce.mode,Ne,he.key),Q.return=ce,ce=Q):(Ne=Nu(he.type,he.key,he.props,null,ce.mode,Ne),Ne.ref=zo(ce,Q,he),Ne.return=ce,ce=Ne)}return A(ce);case I:e:{for(at=he.key;Q!==null;){if(Q.key===at)if(Q.tag===4&&Q.stateNode.containerInfo===he.containerInfo&&Q.stateNode.implementation===he.implementation){l(ce,Q.sibling),Q=p(Q,he.children||[]),Q.return=ce,ce=Q;break e}else{l(ce,Q);break}else a(ce,Q);Q=Q.sibling}Q=Bf(he,ce.mode,Ne),Q.return=ce,ce=Q}return A(ce);case re:return at=he._init,hn(ce,Q,at(he._payload),Ne)}if(Nt(he))return Je(ce,Q,he,Ne);if(Z(he))return et(ce,Q,he,Ne);cu(ce,he)}return typeof he=="string"&&he!==""||typeof he=="number"?(he=""+he,Q!==null&&Q.tag===6?(l(ce,Q.sibling),Q=p(Q,he),Q.return=ce,ce=Q):(l(ce,Q),Q=kf(he,ce.mode,Ne),Q.return=ce,ce=Q),A(ce)):l(ce,Q)}return hn}var Ns=ov(!0),lv=ov(!1),du=ca(null),fu=null,Os=null,qd=null;function Yd(){qd=Os=fu=null}function Kd(i){var a=du.current;Kt(du),i._currentValue=a}function Zd(i,a,l){for(;i!==null;){var c=i.alternate;if((i.childLanes&a)!==a?(i.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),i===l)break;i=i.return}}function Us(i,a){fu=i,qd=Os=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&a)!==0&&(Kn=!0),i.firstContext=null)}function wi(i){var a=i._currentValue;if(qd!==i)if(i={context:i,memoizedValue:a,next:null},Os===null){if(fu===null)throw Error(t(308));Os=i,fu.dependencies={lanes:0,firstContext:i}}else Os=Os.next=i;return a}var Za=null;function jd(i){Za===null?Za=[i]:Za.push(i)}function uv(i,a,l,c){var p=a.interleaved;return p===null?(l.next=l,jd(a)):(l.next=p.next,p.next=l),a.interleaved=l,Ir(i,c)}function Ir(i,a){i.lanes|=a;var l=i.alternate;for(l!==null&&(l.lanes|=a),l=i,i=i.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),l=i,i=i.return;return l.tag===3?l.stateNode:null}var ha=!1;function Jd(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cv(i,a){i=i.updateQueue,a.updateQueue===i&&(a.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Nr(i,a){return{eventTime:i,lane:a,tag:0,payload:null,callback:null,next:null}}function pa(i,a,l){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(Pt&2)!==0){var p=c.pending;return p===null?a.next=a:(a.next=p.next,p.next=a),c.pending=a,Ir(i,l)}return p=c.interleaved,p===null?(a.next=a,jd(c)):(a.next=p.next,p.next=a),c.interleaved=a,Ir(i,l)}function hu(i,a,l){if(a=a.updateQueue,a!==null&&(a=a.shared,(l&4194240)!==0)){var c=a.lanes;c&=i.pendingLanes,l|=c,a.lanes=l,ln(i,l)}}function dv(i,a){var l=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=A:_=_.next=A,l=l.next}while(l!==null);_===null?p=_=a:_=_.next=a}else p=_=a;l={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:c.shared,effects:c.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=a:i.next=a,l.lastBaseUpdate=a}function pu(i,a,l,c){var p=i.updateQueue;ha=!1;var _=p.firstBaseUpdate,A=p.lastBaseUpdate,H=p.shared.pending;if(H!==null){p.shared.pending=null;var K=H,me=K.next;K.next=null,A===null?_=me:A.next=me,A=K;var Re=i.alternate;Re!==null&&(Re=Re.updateQueue,H=Re.lastBaseUpdate,H!==A&&(H===null?Re.firstBaseUpdate=me:H.next=me,Re.lastBaseUpdate=K))}if(_!==null){var Pe=p.baseState;A=0,Re=me=K=null,H=_;do{var Te=H.lane,Ve=H.eventTime;if((c&Te)===Te){Re!==null&&(Re=Re.next={eventTime:Ve,lane:0,tag:H.tag,payload:H.payload,callback:H.callback,next:null});e:{var Je=i,et=H;switch(Te=a,Ve=l,et.tag){case 1:if(Je=et.payload,typeof Je=="function"){Pe=Je.call(Ve,Pe,Te);break e}Pe=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=et.payload,Te=typeof Je=="function"?Je.call(Ve,Pe,Te):Je,Te==null)break e;Pe=j({},Pe,Te);break e;case 2:ha=!0}}H.callback!==null&&H.lane!==0&&(i.flags|=64,Te=p.effects,Te===null?p.effects=[H]:Te.push(H))}else Ve={eventTime:Ve,lane:Te,tag:H.tag,payload:H.payload,callback:H.callback,next:null},Re===null?(me=Re=Ve,K=Pe):Re=Re.next=Ve,A|=Te;if(H=H.next,H===null){if(H=p.shared.pending,H===null)break;Te=H,H=Te.next,Te.next=null,p.lastBaseUpdate=Te,p.shared.pending=null}}while(!0);if(Re===null&&(K=Pe),p.baseState=K,p.firstBaseUpdate=me,p.lastBaseUpdate=Re,a=p.shared.interleaved,a!==null){p=a;do A|=p.lane,p=p.next;while(p!==a)}else _===null&&(p.shared.lanes=0);Qa|=A,i.lanes=A,i.memoizedState=Pe}}function fv(i,a,l){if(i=a.effects,a.effects=null,i!==null)for(a=0;a<i.length;a++){var c=i[a],p=c.callback;if(p!==null){if(c.callback=null,c=l,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var Ho={},ur=ca(Ho),Go=ca(Ho),Vo=ca(Ho);function ja(i){if(i===Ho)throw Error(t(174));return i}function Qd(i,a){switch(Vt(Vo,a),Vt(Go,i),Vt(ur,Ho),i=a.nodeType,i){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:Ct(null,"");break;default:i=i===8?a.parentNode:a,a=i.namespaceURI||null,i=i.tagName,a=Ct(a,i)}Kt(ur),Vt(ur,a)}function Fs(){Kt(ur),Kt(Go),Kt(Vo)}function hv(i){ja(Vo.current);var a=ja(ur.current),l=Ct(a,i.type);a!==l&&(Vt(Go,i),Vt(ur,l))}function ef(i){Go.current===i&&(Kt(ur),Kt(Go))}var an=ca(0);function mu(i){for(var a=i;a!==null;){if(a.tag===13){var l=a.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var tf=[];function nf(){for(var i=0;i<tf.length;i++)tf[i]._workInProgressVersionPrimary=null;tf.length=0}var gu=L.ReactCurrentDispatcher,rf=L.ReactCurrentBatchConfig,Ja=0,sn=null,yn=null,En=null,vu=!1,Wo=!1,$o=0,CE=0;function In(){throw Error(t(321))}function af(i,a){if(a===null)return!1;for(var l=0;l<a.length&&l<i.length;l++)if(!zi(i[l],a[l]))return!1;return!0}function sf(i,a,l,c,p,_){if(Ja=_,sn=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,gu.current=i===null||i.memoizedState===null?IE:NE,i=l(c,p),Wo){_=0;do{if(Wo=!1,$o=0,25<=_)throw Error(t(301));_+=1,En=yn=null,a.updateQueue=null,gu.current=OE,i=l(c,p)}while(Wo)}if(gu.current=Su,a=yn!==null&&yn.next!==null,Ja=0,En=yn=sn=null,vu=!1,a)throw Error(t(300));return i}function of(){var i=$o!==0;return $o=0,i}function cr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?sn.memoizedState=En=i:En=En.next=i,En}function Ti(){if(yn===null){var i=sn.alternate;i=i!==null?i.memoizedState:null}else i=yn.next;var a=En===null?sn.memoizedState:En.next;if(a!==null)En=a,yn=i;else{if(i===null)throw Error(t(310));yn=i,i={memoizedState:yn.memoizedState,baseState:yn.baseState,baseQueue:yn.baseQueue,queue:yn.queue,next:null},En===null?sn.memoizedState=En=i:En=En.next=i}return En}function Xo(i,a){return typeof a=="function"?a(i):a}function lf(i){var a=Ti(),l=a.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var c=yn,p=c.baseQueue,_=l.pending;if(_!==null){if(p!==null){var A=p.next;p.next=_.next,_.next=A}c.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,c=c.baseState;var H=A=null,K=null,me=_;do{var Re=me.lane;if((Ja&Re)===Re)K!==null&&(K=K.next={lane:0,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null}),c=me.hasEagerState?me.eagerState:i(c,me.action);else{var Pe={lane:Re,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null};K===null?(H=K=Pe,A=c):K=K.next=Pe,sn.lanes|=Re,Qa|=Re}me=me.next}while(me!==null&&me!==_);K===null?A=c:K.next=H,zi(c,a.memoizedState)||(Kn=!0),a.memoizedState=c,a.baseState=A,a.baseQueue=K,l.lastRenderedState=c}if(i=l.interleaved,i!==null){p=i;do _=p.lane,sn.lanes|=_,Qa|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[a.memoizedState,l.dispatch]}function uf(i){var a=Ti(),l=a.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var c=l.dispatch,p=l.pending,_=a.memoizedState;if(p!==null){l.pending=null;var A=p=p.next;do _=i(_,A.action),A=A.next;while(A!==p);zi(_,a.memoizedState)||(Kn=!0),a.memoizedState=_,a.baseQueue===null&&(a.baseState=_),l.lastRenderedState=_}return[_,c]}function pv(){}function mv(i,a){var l=sn,c=Ti(),p=a(),_=!zi(c.memoizedState,p);if(_&&(c.memoizedState=p,Kn=!0),c=c.queue,cf(_v.bind(null,l,c,i),[i]),c.getSnapshot!==a||_||En!==null&&En.memoizedState.tag&1){if(l.flags|=2048,qo(9,vv.bind(null,l,c,p,a),void 0,null),bn===null)throw Error(t(349));(Ja&30)!==0||gv(l,a,p)}return p}function gv(i,a,l){i.flags|=16384,i={getSnapshot:a,value:l},a=sn.updateQueue,a===null?(a={lastEffect:null,stores:null},sn.updateQueue=a,a.stores=[i]):(l=a.stores,l===null?a.stores=[i]:l.push(i))}function vv(i,a,l,c){a.value=l,a.getSnapshot=c,yv(a)&&Sv(i)}function _v(i,a,l){return l(function(){yv(a)&&Sv(i)})}function yv(i){var a=i.getSnapshot;i=i.value;try{var l=a();return!zi(i,l)}catch{return!0}}function Sv(i){var a=Ir(i,1);a!==null&&$i(a,i,1,-1)}function xv(i){var a=cr();return typeof i=="function"&&(i=i()),a.memoizedState=a.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:i},a.queue=i,i=i.dispatch=DE.bind(null,sn,i),[a.memoizedState,i]}function qo(i,a,l,c){return i={tag:i,create:a,destroy:l,deps:c,next:null},a=sn.updateQueue,a===null?(a={lastEffect:null,stores:null},sn.updateQueue=a,a.lastEffect=i.next=i):(l=a.lastEffect,l===null?a.lastEffect=i.next=i:(c=l.next,l.next=i,i.next=c,a.lastEffect=i)),i}function Mv(){return Ti().memoizedState}function _u(i,a,l,c){var p=cr();sn.flags|=i,p.memoizedState=qo(1|a,l,void 0,c===void 0?null:c)}function yu(i,a,l,c){var p=Ti();c=c===void 0?null:c;var _=void 0;if(yn!==null){var A=yn.memoizedState;if(_=A.destroy,c!==null&&af(c,A.deps)){p.memoizedState=qo(a,l,_,c);return}}sn.flags|=i,p.memoizedState=qo(1|a,l,_,c)}function Ev(i,a){return _u(8390656,8,i,a)}function cf(i,a){return yu(2048,8,i,a)}function bv(i,a){return yu(4,2,i,a)}function wv(i,a){return yu(4,4,i,a)}function Tv(i,a){if(typeof a=="function")return i=i(),a(i),function(){a(null)};if(a!=null)return i=i(),a.current=i,function(){a.current=null}}function Rv(i,a,l){return l=l!=null?l.concat([i]):null,yu(4,4,Tv.bind(null,a,i),l)}function df(){}function Av(i,a){var l=Ti();a=a===void 0?null:a;var c=l.memoizedState;return c!==null&&a!==null&&af(a,c[1])?c[0]:(l.memoizedState=[i,a],i)}function Cv(i,a){var l=Ti();a=a===void 0?null:a;var c=l.memoizedState;return c!==null&&a!==null&&af(a,c[1])?c[0]:(i=i(),l.memoizedState=[i,a],i)}function Pv(i,a,l){return(Ja&21)===0?(i.baseState&&(i.baseState=!1,Kn=!0),i.memoizedState=l):(zi(l,a)||(l=Lt(),sn.lanes|=l,Qa|=l,i.baseState=!0),a)}function PE(i,a){var l=je;je=l!==0&&4>l?l:4,i(!0);var c=rf.transition;rf.transition={};try{i(!1),a()}finally{je=l,rf.transition=c}}function Lv(){return Ti().memoizedState}function LE(i,a,l){var c=_a(i);if(l={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null},Dv(i))Iv(a,l);else if(l=uv(i,a,l,c),l!==null){var p=Gn();$i(l,i,c,p),Nv(l,a,c)}}function DE(i,a,l){var c=_a(i),p={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null};if(Dv(i))Iv(a,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=a.lastRenderedReducer,_!==null))try{var A=a.lastRenderedState,H=_(A,l);if(p.hasEagerState=!0,p.eagerState=H,zi(H,A)){var K=a.interleaved;K===null?(p.next=p,jd(a)):(p.next=K.next,K.next=p),a.interleaved=p;return}}catch{}finally{}l=uv(i,a,p,c),l!==null&&(p=Gn(),$i(l,i,c,p),Nv(l,a,c))}}function Dv(i){var a=i.alternate;return i===sn||a!==null&&a===sn}function Iv(i,a){Wo=vu=!0;var l=i.pending;l===null?a.next=a:(a.next=l.next,l.next=a),i.pending=a}function Nv(i,a,l){if((l&4194240)!==0){var c=a.lanes;c&=i.pendingLanes,l|=c,a.lanes=l,ln(i,l)}}var Su={readContext:wi,useCallback:In,useContext:In,useEffect:In,useImperativeHandle:In,useInsertionEffect:In,useLayoutEffect:In,useMemo:In,useReducer:In,useRef:In,useState:In,useDebugValue:In,useDeferredValue:In,useTransition:In,useMutableSource:In,useSyncExternalStore:In,useId:In,unstable_isNewReconciler:!1},IE={readContext:wi,useCallback:function(i,a){return cr().memoizedState=[i,a===void 0?null:a],i},useContext:wi,useEffect:Ev,useImperativeHandle:function(i,a,l){return l=l!=null?l.concat([i]):null,_u(4194308,4,Tv.bind(null,a,i),l)},useLayoutEffect:function(i,a){return _u(4194308,4,i,a)},useInsertionEffect:function(i,a){return _u(4,2,i,a)},useMemo:function(i,a){var l=cr();return a=a===void 0?null:a,i=i(),l.memoizedState=[i,a],i},useReducer:function(i,a,l){var c=cr();return a=l!==void 0?l(a):a,c.memoizedState=c.baseState=a,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:a},c.queue=i,i=i.dispatch=LE.bind(null,sn,i),[c.memoizedState,i]},useRef:function(i){var a=cr();return i={current:i},a.memoizedState=i},useState:xv,useDebugValue:df,useDeferredValue:function(i){return cr().memoizedState=i},useTransition:function(){var i=xv(!1),a=i[0];return i=PE.bind(null,i[1]),cr().memoizedState=i,[a,i]},useMutableSource:function(){},useSyncExternalStore:function(i,a,l){var c=sn,p=cr();if(nn){if(l===void 0)throw Error(t(407));l=l()}else{if(l=a(),bn===null)throw Error(t(349));(Ja&30)!==0||gv(c,a,l)}p.memoizedState=l;var _={value:l,getSnapshot:a};return p.queue=_,Ev(_v.bind(null,c,_,i),[i]),c.flags|=2048,qo(9,vv.bind(null,c,_,l,a),void 0,null),l},useId:function(){var i=cr(),a=bn.identifierPrefix;if(nn){var l=Dr,c=Lr;l=(c&~(1<<32-ie(c)-1)).toString(32)+l,a=":"+a+"R"+l,l=$o++,0<l&&(a+="H"+l.toString(32)),a+=":"}else l=CE++,a=":"+a+"r"+l.toString(32)+":";return i.memoizedState=a},unstable_isNewReconciler:!1},NE={readContext:wi,useCallback:Av,useContext:wi,useEffect:cf,useImperativeHandle:Rv,useInsertionEffect:bv,useLayoutEffect:wv,useMemo:Cv,useReducer:lf,useRef:Mv,useState:function(){return lf(Xo)},useDebugValue:df,useDeferredValue:function(i){var a=Ti();return Pv(a,yn.memoizedState,i)},useTransition:function(){var i=lf(Xo)[0],a=Ti().memoizedState;return[i,a]},useMutableSource:pv,useSyncExternalStore:mv,useId:Lv,unstable_isNewReconciler:!1},OE={readContext:wi,useCallback:Av,useContext:wi,useEffect:cf,useImperativeHandle:Rv,useInsertionEffect:bv,useLayoutEffect:wv,useMemo:Cv,useReducer:uf,useRef:Mv,useState:function(){return uf(Xo)},useDebugValue:df,useDeferredValue:function(i){var a=Ti();return yn===null?a.memoizedState=i:Pv(a,yn.memoizedState,i)},useTransition:function(){var i=uf(Xo)[0],a=Ti().memoizedState;return[i,a]},useMutableSource:pv,useSyncExternalStore:mv,useId:Lv,unstable_isNewReconciler:!1};function Gi(i,a){if(i&&i.defaultProps){a=j({},a),i=i.defaultProps;for(var l in i)a[l]===void 0&&(a[l]=i[l]);return a}return a}function ff(i,a,l,c){a=i.memoizedState,l=l(c,a),l=l==null?a:j({},a,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var xu={isMounted:function(i){return(i=i._reactInternals)?Mi(i)===i:!1},enqueueSetState:function(i,a,l){i=i._reactInternals;var c=Gn(),p=_a(i),_=Nr(c,p);_.payload=a,l!=null&&(_.callback=l),a=pa(i,_,p),a!==null&&($i(a,i,p,c),hu(a,i,p))},enqueueReplaceState:function(i,a,l){i=i._reactInternals;var c=Gn(),p=_a(i),_=Nr(c,p);_.tag=1,_.payload=a,l!=null&&(_.callback=l),a=pa(i,_,p),a!==null&&($i(a,i,p,c),hu(a,i,p))},enqueueForceUpdate:function(i,a){i=i._reactInternals;var l=Gn(),c=_a(i),p=Nr(l,c);p.tag=2,a!=null&&(p.callback=a),a=pa(i,p,c),a!==null&&($i(a,i,c,l),hu(a,i,c))}};function Ov(i,a,l,c,p,_,A){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,_,A):a.prototype&&a.prototype.isPureReactComponent?!Io(l,c)||!Io(p,_):!0}function Uv(i,a,l){var c=!1,p=da,_=a.contextType;return typeof _=="object"&&_!==null?_=wi(_):(p=Yn(a)?qa:Dn.current,c=a.contextTypes,_=(c=c!=null)?Ps(i,p):da),a=new a(l,_),i.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=xu,i.stateNode=a,a._reactInternals=i,c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),a}function Fv(i,a,l,c){i=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(l,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(l,c),a.state!==i&&xu.enqueueReplaceState(a,a.state,null)}function hf(i,a,l,c){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},Jd(i);var _=a.contextType;typeof _=="object"&&_!==null?p.context=wi(_):(_=Yn(a)?qa:Dn.current,p.context=Ps(i,_)),p.state=i.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(ff(i,a,_,l),p.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(a=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),a!==p.state&&xu.enqueueReplaceState(p,p.state,null),pu(i,l,p,c),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function ks(i,a){try{var l="",c=a;do l+=Me(c),c=c.return;while(c);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:a,stack:p,digest:null}}function pf(i,a,l){return{value:i,source:null,stack:l??null,digest:a??null}}function mf(i,a){try{console.error(a.value)}catch(l){setTimeout(function(){throw l})}}var UE=typeof WeakMap=="function"?WeakMap:Map;function kv(i,a,l){l=Nr(-1,l),l.tag=3,l.payload={element:null};var c=a.value;return l.callback=function(){Au||(Au=!0,Pf=c),mf(i,a)},l}function Bv(i,a,l){l=Nr(-1,l),l.tag=3;var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var p=a.value;l.payload=function(){return c(p)},l.callback=function(){mf(i,a)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){mf(i,a),typeof c!="function"&&(ga===null?ga=new Set([this]):ga.add(this));var A=a.stack;this.componentDidCatch(a.value,{componentStack:A!==null?A:""})}),l}function zv(i,a,l){var c=i.pingCache;if(c===null){c=i.pingCache=new UE;var p=new Set;c.set(a,p)}else p=c.get(a),p===void 0&&(p=new Set,c.set(a,p));p.has(l)||(p.add(l),i=ZE.bind(null,i,a,l),a.then(i,i))}function Hv(i){do{var a;if((a=i.tag===13)&&(a=i.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return i;i=i.return}while(i!==null);return null}function Gv(i,a,l,c,p){return(i.mode&1)===0?(i===a?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(a=Nr(-1,1),a.tag=2,pa(l,a,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var FE=L.ReactCurrentOwner,Kn=!1;function Hn(i,a,l,c){a.child=i===null?lv(a,null,l,c):Ns(a,i.child,l,c)}function Vv(i,a,l,c,p){l=l.render;var _=a.ref;return Us(a,p),c=sf(i,a,l,c,_,p),l=of(),i!==null&&!Kn?(a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~p,Or(i,a,p)):(nn&&l&&Gd(a),a.flags|=1,Hn(i,a,c,p),a.child)}function Wv(i,a,l,c,p){if(i===null){var _=l.type;return typeof _=="function"&&!Ff(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(a.tag=15,a.type=_,$v(i,a,_,c,p)):(i=Nu(l.type,null,c,a,a.mode,p),i.ref=a.ref,i.return=a,a.child=i)}if(_=i.child,(i.lanes&p)===0){var A=_.memoizedProps;if(l=l.compare,l=l!==null?l:Io,l(A,c)&&i.ref===a.ref)return Or(i,a,p)}return a.flags|=1,i=Sa(_,c),i.ref=a.ref,i.return=a,a.child=i}function $v(i,a,l,c,p){if(i!==null){var _=i.memoizedProps;if(Io(_,c)&&i.ref===a.ref)if(Kn=!1,a.pendingProps=c=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(Kn=!0);else return a.lanes=i.lanes,Or(i,a,p)}return gf(i,a,l,c,p)}function Xv(i,a,l){var c=a.pendingProps,p=c.children,_=i!==null?i.memoizedState:null;if(c.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(zs,di),di|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:i,cachePool:null,transitions:null},a.updateQueue=null,Vt(zs,di),di|=i,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=_!==null?_.baseLanes:l,Vt(zs,di),di|=c}else _!==null?(c=_.baseLanes|l,a.memoizedState=null):c=l,Vt(zs,di),di|=c;return Hn(i,a,p,l),a.child}function qv(i,a){var l=a.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(a.flags|=512,a.flags|=2097152)}function gf(i,a,l,c,p){var _=Yn(l)?qa:Dn.current;return _=Ps(a,_),Us(a,p),l=sf(i,a,l,c,_,p),c=of(),i!==null&&!Kn?(a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~p,Or(i,a,p)):(nn&&c&&Gd(a),a.flags|=1,Hn(i,a,l,p),a.child)}function Yv(i,a,l,c,p){if(Yn(l)){var _=!0;au(a)}else _=!1;if(Us(a,p),a.stateNode===null)Eu(i,a),Uv(a,l,c),hf(a,l,c,p),c=!0;else if(i===null){var A=a.stateNode,H=a.memoizedProps;A.props=H;var K=A.context,me=l.contextType;typeof me=="object"&&me!==null?me=wi(me):(me=Yn(l)?qa:Dn.current,me=Ps(a,me));var Re=l.getDerivedStateFromProps,Pe=typeof Re=="function"||typeof A.getSnapshotBeforeUpdate=="function";Pe||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(H!==c||K!==me)&&Fv(a,A,c,me),ha=!1;var Te=a.memoizedState;A.state=Te,pu(a,c,A,p),K=a.memoizedState,H!==c||Te!==K||qn.current||ha?(typeof Re=="function"&&(ff(a,l,Re,c),K=a.memoizedState),(H=ha||Ov(a,l,H,c,Te,K,me))?(Pe||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(a.flags|=4194308)):(typeof A.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=K),A.props=c,A.state=K,A.context=me,c=H):(typeof A.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{A=a.stateNode,cv(i,a),H=a.memoizedProps,me=a.type===a.elementType?H:Gi(a.type,H),A.props=me,Pe=a.pendingProps,Te=A.context,K=l.contextType,typeof K=="object"&&K!==null?K=wi(K):(K=Yn(l)?qa:Dn.current,K=Ps(a,K));var Ve=l.getDerivedStateFromProps;(Re=typeof Ve=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(H!==Pe||Te!==K)&&Fv(a,A,c,K),ha=!1,Te=a.memoizedState,A.state=Te,pu(a,c,A,p);var Je=a.memoizedState;H!==Pe||Te!==Je||qn.current||ha?(typeof Ve=="function"&&(ff(a,l,Ve,c),Je=a.memoizedState),(me=ha||Ov(a,l,me,c,Te,Je,K)||!1)?(Re||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,Je,K),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,Je,K)),typeof A.componentDidUpdate=="function"&&(a.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof A.componentDidUpdate!="function"||H===i.memoizedProps&&Te===i.memoizedState||(a.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||H===i.memoizedProps&&Te===i.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=Je),A.props=c,A.state=Je,A.context=K,c=me):(typeof A.componentDidUpdate!="function"||H===i.memoizedProps&&Te===i.memoizedState||(a.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||H===i.memoizedProps&&Te===i.memoizedState||(a.flags|=1024),c=!1)}return vf(i,a,l,c,_,p)}function vf(i,a,l,c,p,_){qv(i,a);var A=(a.flags&128)!==0;if(!c&&!A)return p&&Qg(a,l,!1),Or(i,a,_);c=a.stateNode,FE.current=a;var H=A&&typeof l.getDerivedStateFromError!="function"?null:c.render();return a.flags|=1,i!==null&&A?(a.child=Ns(a,i.child,null,_),a.child=Ns(a,null,H,_)):Hn(i,a,H,_),a.memoizedState=c.state,p&&Qg(a,l,!0),a.child}function Kv(i){var a=i.stateNode;a.pendingContext?jg(i,a.pendingContext,a.pendingContext!==a.context):a.context&&jg(i,a.context,!1),Qd(i,a.containerInfo)}function Zv(i,a,l,c,p){return Is(),Xd(p),a.flags|=256,Hn(i,a,l,c),a.child}var _f={dehydrated:null,treeContext:null,retryLane:0};function yf(i){return{baseLanes:i,cachePool:null,transitions:null}}function jv(i,a,l){var c=a.pendingProps,p=an.current,_=!1,A=(a.flags&128)!==0,H;if((H=A)||(H=i!==null&&i.memoizedState===null?!1:(p&2)!==0),H?(_=!0,a.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Vt(an,p&1),i===null)return $d(a),i=a.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((a.mode&1)===0?a.lanes=1:i.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(A=c.children,i=c.fallback,_?(c=a.mode,_=a.child,A={mode:"hidden",children:A},(c&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=A):_=Ou(A,c,0,null),i=is(i,c,l,null),_.return=a,i.return=a,_.sibling=i,a.child=_,a.child.memoizedState=yf(l),a.memoizedState=_f,i):Sf(a,A));if(p=i.memoizedState,p!==null&&(H=p.dehydrated,H!==null))return kE(i,a,A,c,H,p,l);if(_){_=c.fallback,A=a.mode,p=i.child,H=p.sibling;var K={mode:"hidden",children:c.children};return(A&1)===0&&a.child!==p?(c=a.child,c.childLanes=0,c.pendingProps=K,a.deletions=null):(c=Sa(p,K),c.subtreeFlags=p.subtreeFlags&14680064),H!==null?_=Sa(H,_):(_=is(_,A,l,null),_.flags|=2),_.return=a,c.return=a,c.sibling=_,a.child=c,c=_,_=a.child,A=i.child.memoizedState,A=A===null?yf(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},_.memoizedState=A,_.childLanes=i.childLanes&~l,a.memoizedState=_f,c}return _=i.child,i=_.sibling,c=Sa(_,{mode:"visible",children:c.children}),(a.mode&1)===0&&(c.lanes=l),c.return=a,c.sibling=null,i!==null&&(l=a.deletions,l===null?(a.deletions=[i],a.flags|=16):l.push(i)),a.child=c,a.memoizedState=null,c}function Sf(i,a){return a=Ou({mode:"visible",children:a},i.mode,0,null),a.return=i,i.child=a}function Mu(i,a,l,c){return c!==null&&Xd(c),Ns(a,i.child,null,l),i=Sf(a,a.pendingProps.children),i.flags|=2,a.memoizedState=null,i}function kE(i,a,l,c,p,_,A){if(l)return a.flags&256?(a.flags&=-257,c=pf(Error(t(422))),Mu(i,a,A,c)):a.memoizedState!==null?(a.child=i.child,a.flags|=128,null):(_=c.fallback,p=a.mode,c=Ou({mode:"visible",children:c.children},p,0,null),_=is(_,p,A,null),_.flags|=2,c.return=a,_.return=a,c.sibling=_,a.child=c,(a.mode&1)!==0&&Ns(a,i.child,null,A),a.child.memoizedState=yf(A),a.memoizedState=_f,_);if((a.mode&1)===0)return Mu(i,a,A,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var H=c.dgst;return c=H,_=Error(t(419)),c=pf(_,c,void 0),Mu(i,a,A,c)}if(H=(A&i.childLanes)!==0,Kn||H){if(c=bn,c!==null){switch(A&-A){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|A))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Ir(i,p),$i(c,i,p,-1))}return Uf(),c=pf(Error(t(421))),Mu(i,a,A,c)}return p.data==="$?"?(a.flags|=128,a.child=i.child,a=jE.bind(null,i),p._reactRetry=a,null):(i=_.treeContext,ci=ua(p.nextSibling),ui=a,nn=!0,Hi=null,i!==null&&(Ei[bi++]=Lr,Ei[bi++]=Dr,Ei[bi++]=Ya,Lr=i.id,Dr=i.overflow,Ya=a),a=Sf(a,c.children),a.flags|=4096,a)}function Jv(i,a,l){i.lanes|=a;var c=i.alternate;c!==null&&(c.lanes|=a),Zd(i.return,a,l)}function xf(i,a,l,c,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:p}:(_.isBackwards=a,_.rendering=null,_.renderingStartTime=0,_.last=c,_.tail=l,_.tailMode=p)}function Qv(i,a,l){var c=a.pendingProps,p=c.revealOrder,_=c.tail;if(Hn(i,a,c.children,l),c=an.current,(c&2)!==0)c=c&1|2,a.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=a.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Jv(i,l,a);else if(i.tag===19)Jv(i,l,a);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break e;for(;i.sibling===null;){if(i.return===null||i.return===a)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}if(Vt(an,c),(a.mode&1)===0)a.memoizedState=null;else switch(p){case"forwards":for(l=a.child,p=null;l!==null;)i=l.alternate,i!==null&&mu(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=a.child,a.child=null):(p=l.sibling,l.sibling=null),xf(a,!1,p,l,_);break;case"backwards":for(l=null,p=a.child,a.child=null;p!==null;){if(i=p.alternate,i!==null&&mu(i)===null){a.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}xf(a,!0,l,null,_);break;case"together":xf(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Eu(i,a){(a.mode&1)===0&&i!==null&&(i.alternate=null,a.alternate=null,a.flags|=2)}function Or(i,a,l){if(i!==null&&(a.dependencies=i.dependencies),Qa|=a.lanes,(l&a.childLanes)===0)return null;if(i!==null&&a.child!==i.child)throw Error(t(153));if(a.child!==null){for(i=a.child,l=Sa(i,i.pendingProps),a.child=l,l.return=a;i.sibling!==null;)i=i.sibling,l=l.sibling=Sa(i,i.pendingProps),l.return=a;l.sibling=null}return a.child}function BE(i,a,l){switch(a.tag){case 3:Kv(a),Is();break;case 5:hv(a);break;case 1:Yn(a.type)&&au(a);break;case 4:Qd(a,a.stateNode.containerInfo);break;case 10:var c=a.type._context,p=a.memoizedProps.value;Vt(du,c._currentValue),c._currentValue=p;break;case 13:if(c=a.memoizedState,c!==null)return c.dehydrated!==null?(Vt(an,an.current&1),a.flags|=128,null):(l&a.child.childLanes)!==0?jv(i,a,l):(Vt(an,an.current&1),i=Or(i,a,l),i!==null?i.sibling:null);Vt(an,an.current&1);break;case 19:if(c=(l&a.childLanes)!==0,(i.flags&128)!==0){if(c)return Qv(i,a,l);a.flags|=128}if(p=a.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Vt(an,an.current),c)break;return null;case 22:case 23:return a.lanes=0,Xv(i,a,l)}return Or(i,a,l)}var e0,Mf,t0,n0;e0=function(i,a){for(var l=a.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===a)break;for(;l.sibling===null;){if(l.return===null||l.return===a)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Mf=function(){},t0=function(i,a,l,c){var p=i.memoizedProps;if(p!==c){i=a.stateNode,ja(ur.current);var _=null;switch(l){case"input":p=lt(i,p),c=lt(i,c),_=[];break;case"select":p=j({},p,{value:void 0}),c=j({},c,{value:void 0}),_=[];break;case"textarea":p=en(i,p),c=en(i,c),_=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(i.onclick=nu)}Se(l,c);var A;l=null;for(me in p)if(!c.hasOwnProperty(me)&&p.hasOwnProperty(me)&&p[me]!=null)if(me==="style"){var H=p[me];for(A in H)H.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else me!=="dangerouslySetInnerHTML"&&me!=="children"&&me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&me!=="autoFocus"&&(s.hasOwnProperty(me)?_||(_=[]):(_=_||[]).push(me,null));for(me in c){var K=c[me];if(H=p!=null?p[me]:void 0,c.hasOwnProperty(me)&&K!==H&&(K!=null||H!=null))if(me==="style")if(H){for(A in H)!H.hasOwnProperty(A)||K&&K.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in K)K.hasOwnProperty(A)&&H[A]!==K[A]&&(l||(l={}),l[A]=K[A])}else l||(_||(_=[]),_.push(me,l)),l=K;else me==="dangerouslySetInnerHTML"?(K=K?K.__html:void 0,H=H?H.__html:void 0,K!=null&&H!==K&&(_=_||[]).push(me,K)):me==="children"?typeof K!="string"&&typeof K!="number"||(_=_||[]).push(me,""+K):me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&(s.hasOwnProperty(me)?(K!=null&&me==="onScroll"&&Yt("scroll",i),_||H===K||(_=[])):(_=_||[]).push(me,K))}l&&(_=_||[]).push("style",l);var me=_;(a.updateQueue=me)&&(a.flags|=4)}},n0=function(i,a,l,c){l!==c&&(a.flags|=4)};function Yo(i,a){if(!nn)switch(i.tailMode){case"hidden":a=i.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?a||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function Nn(i){var a=i.alternate!==null&&i.alternate.child===i.child,l=0,c=0;if(a)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=c,i.childLanes=l,a}function zE(i,a,l){var c=a.pendingProps;switch(Vd(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nn(a),null;case 1:return Yn(a.type)&&ru(),Nn(a),null;case 3:return c=a.stateNode,Fs(),Kt(qn),Kt(Dn),nf(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(i===null||i.child===null)&&(uu(a)?a.flags|=4:i===null||i.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Hi!==null&&(If(Hi),Hi=null))),Mf(i,a),Nn(a),null;case 5:ef(a);var p=ja(Vo.current);if(l=a.type,i!==null&&a.stateNode!=null)t0(i,a,l,c,p),i.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!c){if(a.stateNode===null)throw Error(t(166));return Nn(a),null}if(i=ja(ur.current),uu(a)){c=a.stateNode,l=a.type;var _=a.memoizedProps;switch(c[lr]=a,c[ko]=_,i=(a.mode&1)!==0,l){case"dialog":Yt("cancel",c),Yt("close",c);break;case"iframe":case"object":case"embed":Yt("load",c);break;case"video":case"audio":for(p=0;p<Oo.length;p++)Yt(Oo[p],c);break;case"source":Yt("error",c);break;case"img":case"image":case"link":Yt("error",c),Yt("load",c);break;case"details":Yt("toggle",c);break;case"input":$t(c,_),Yt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!_.multiple},Yt("invalid",c);break;case"textarea":zt(c,_),Yt("invalid",c)}Se(l,_),p=null;for(var A in _)if(_.hasOwnProperty(A)){var H=_[A];A==="children"?typeof H=="string"?c.textContent!==H&&(_.suppressHydrationWarning!==!0&&tu(c.textContent,H,i),p=["children",H]):typeof H=="number"&&c.textContent!==""+H&&(_.suppressHydrationWarning!==!0&&tu(c.textContent,H,i),p=["children",""+H]):s.hasOwnProperty(A)&&H!=null&&A==="onScroll"&&Yt("scroll",c)}switch(l){case"input":Ze(c),bt(c,_,!0);break;case"textarea":Ze(c),mn(c);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(c.onclick=nu)}c=p,a.updateQueue=c,c!==null&&(a.flags|=4)}else{A=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=xt(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=A.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof c.is=="string"?i=A.createElement(l,{is:c.is}):(i=A.createElement(l),l==="select"&&(A=i,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):i=A.createElementNS(i,l),i[lr]=a,i[ko]=c,e0(i,a,!1,!1),a.stateNode=i;e:{switch(A=Le(l,c),l){case"dialog":Yt("cancel",i),Yt("close",i),p=c;break;case"iframe":case"object":case"embed":Yt("load",i),p=c;break;case"video":case"audio":for(p=0;p<Oo.length;p++)Yt(Oo[p],i);p=c;break;case"source":Yt("error",i),p=c;break;case"img":case"image":case"link":Yt("error",i),Yt("load",i),p=c;break;case"details":Yt("toggle",i),p=c;break;case"input":$t(i,c),p=lt(i,c),Yt("invalid",i);break;case"option":p=c;break;case"select":i._wrapperState={wasMultiple:!!c.multiple},p=j({},c,{value:void 0}),Yt("invalid",i);break;case"textarea":zt(i,c),p=en(i,c),Yt("invalid",i);break;default:p=c}Se(l,p),H=p;for(_ in H)if(H.hasOwnProperty(_)){var K=H[_];_==="style"?oe(i,K):_==="dangerouslySetInnerHTML"?(K=K?K.__html:void 0,K!=null&&Ft(i,K)):_==="children"?typeof K=="string"?(l!=="textarea"||K!=="")&&Qe(i,K):typeof K=="number"&&Qe(i,""+K):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?K!=null&&_==="onScroll"&&Yt("scroll",i):K!=null&&D(i,_,K,A))}switch(l){case"input":Ze(i),bt(i,c,!1);break;case"textarea":Ze(i),mn(i);break;case"option":c.value!=null&&i.setAttribute("value",""+ye(c.value));break;case"select":i.multiple=!!c.multiple,_=c.value,_!=null?Qt(i,!!c.multiple,_,!1):c.defaultValue!=null&&Qt(i,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=nu)}switch(l){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return Nn(a),null;case 6:if(i&&a.stateNode!=null)n0(i,a,i.memoizedProps,c);else{if(typeof c!="string"&&a.stateNode===null)throw Error(t(166));if(l=ja(Vo.current),ja(ur.current),uu(a)){if(c=a.stateNode,l=a.memoizedProps,c[lr]=a,(_=c.nodeValue!==l)&&(i=ui,i!==null))switch(i.tag){case 3:tu(c.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&tu(c.nodeValue,l,(i.mode&1)!==0)}_&&(a.flags|=4)}else c=(l.nodeType===9?l:l.ownerDocument).createTextNode(c),c[lr]=a,a.stateNode=c}return Nn(a),null;case 13:if(Kt(an),c=a.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(nn&&ci!==null&&(a.mode&1)!==0&&(a.flags&128)===0)av(),Is(),a.flags|=98560,_=!1;else if(_=uu(a),c!==null&&c.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=a.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[lr]=a}else Is(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Nn(a),_=!1}else Hi!==null&&(If(Hi),Hi=null),_=!0;if(!_)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=l,a):(c=c!==null,c!==(i!==null&&i.memoizedState!==null)&&c&&(a.child.flags|=8192,(a.mode&1)!==0&&(i===null||(an.current&1)!==0?Sn===0&&(Sn=3):Uf())),a.updateQueue!==null&&(a.flags|=4),Nn(a),null);case 4:return Fs(),Mf(i,a),i===null&&Uo(a.stateNode.containerInfo),Nn(a),null;case 10:return Kd(a.type._context),Nn(a),null;case 17:return Yn(a.type)&&ru(),Nn(a),null;case 19:if(Kt(an),_=a.memoizedState,_===null)return Nn(a),null;if(c=(a.flags&128)!==0,A=_.rendering,A===null)if(c)Yo(_,!1);else{if(Sn!==0||i!==null&&(i.flags&128)!==0)for(i=a.child;i!==null;){if(A=mu(i),A!==null){for(a.flags|=128,Yo(_,!1),c=A.updateQueue,c!==null&&(a.updateQueue=c,a.flags|=4),a.subtreeFlags=0,c=l,l=a.child;l!==null;)_=l,i=c,_.flags&=14680066,A=_.alternate,A===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=A.childLanes,_.lanes=A.lanes,_.child=A.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=A.memoizedProps,_.memoizedState=A.memoizedState,_.updateQueue=A.updateQueue,_.type=A.type,i=A.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Vt(an,an.current&1|2),a.child}i=i.sibling}_.tail!==null&&Ht()>Hs&&(a.flags|=128,c=!0,Yo(_,!1),a.lanes=4194304)}else{if(!c)if(i=mu(A),i!==null){if(a.flags|=128,c=!0,l=i.updateQueue,l!==null&&(a.updateQueue=l,a.flags|=4),Yo(_,!0),_.tail===null&&_.tailMode==="hidden"&&!A.alternate&&!nn)return Nn(a),null}else 2*Ht()-_.renderingStartTime>Hs&&l!==1073741824&&(a.flags|=128,c=!0,Yo(_,!1),a.lanes=4194304);_.isBackwards?(A.sibling=a.child,a.child=A):(l=_.last,l!==null?l.sibling=A:a.child=A,_.last=A)}return _.tail!==null?(a=_.tail,_.rendering=a,_.tail=a.sibling,_.renderingStartTime=Ht(),a.sibling=null,l=an.current,Vt(an,c?l&1|2:l&1),a):(Nn(a),null);case 22:case 23:return Of(),c=a.memoizedState!==null,i!==null&&i.memoizedState!==null!==c&&(a.flags|=8192),c&&(a.mode&1)!==0?(di&1073741824)!==0&&(Nn(a),a.subtreeFlags&6&&(a.flags|=8192)):Nn(a),null;case 24:return null;case 25:return null}throw Error(t(156,a.tag))}function HE(i,a){switch(Vd(a),a.tag){case 1:return Yn(a.type)&&ru(),i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 3:return Fs(),Kt(qn),Kt(Dn),nf(),i=a.flags,(i&65536)!==0&&(i&128)===0?(a.flags=i&-65537|128,a):null;case 5:return ef(a),null;case 13:if(Kt(an),i=a.memoizedState,i!==null&&i.dehydrated!==null){if(a.alternate===null)throw Error(t(340));Is()}return i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 19:return Kt(an),null;case 4:return Fs(),null;case 10:return Kd(a.type._context),null;case 22:case 23:return Of(),null;case 24:return null;default:return null}}var bu=!1,On=!1,GE=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function Bs(i,a){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(c){cn(i,a,c)}else l.current=null}function Ef(i,a,l){try{l()}catch(c){cn(i,a,c)}}var i0=!1;function VE(i,a){if(Nd=Wl,i=Og(),Td(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var p=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var A=0,H=-1,K=-1,me=0,Re=0,Pe=i,Te=null;t:for(;;){for(var Ve;Pe!==l||p!==0&&Pe.nodeType!==3||(H=A+p),Pe!==_||c!==0&&Pe.nodeType!==3||(K=A+c),Pe.nodeType===3&&(A+=Pe.nodeValue.length),(Ve=Pe.firstChild)!==null;)Te=Pe,Pe=Ve;for(;;){if(Pe===i)break t;if(Te===l&&++me===p&&(H=A),Te===_&&++Re===c&&(K=A),(Ve=Pe.nextSibling)!==null)break;Pe=Te,Te=Pe.parentNode}Pe=Ve}l=H===-1||K===-1?null:{start:H,end:K}}else l=null}l=l||{start:0,end:0}}else l=null;for(Od={focusedElem:i,selectionRange:l},Wl=!1,Ke=a;Ke!==null;)if(a=Ke,i=a.child,(a.subtreeFlags&1028)!==0&&i!==null)i.return=a,Ke=i;else for(;Ke!==null;){a=Ke;try{var Je=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(Je!==null){var et=Je.memoizedProps,hn=Je.memoizedState,ce=a.stateNode,Q=ce.getSnapshotBeforeUpdate(a.elementType===a.type?et:Gi(a.type,et),hn);ce.__reactInternalSnapshotBeforeUpdate=Q}break;case 3:var he=a.stateNode.containerInfo;he.nodeType===1?he.textContent="":he.nodeType===9&&he.documentElement&&he.removeChild(he.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ne){cn(a,a.return,Ne)}if(i=a.sibling,i!==null){i.return=a.return,Ke=i;break}Ke=a.return}return Je=i0,i0=!1,Je}function Ko(i,a,l){var c=a.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&Ef(a,l,_)}p=p.next}while(p!==c)}}function wu(i,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&i)===i){var c=l.create;l.destroy=c()}l=l.next}while(l!==a)}}function bf(i){var a=i.ref;if(a!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof a=="function"?a(i):a.current=i}}function r0(i){var a=i.alternate;a!==null&&(i.alternate=null,r0(a)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(a=i.stateNode,a!==null&&(delete a[lr],delete a[ko],delete a[Bd],delete a[wE],delete a[TE])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function a0(i){return i.tag===5||i.tag===3||i.tag===4}function s0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||a0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function wf(i,a,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,a?l.nodeType===8?l.parentNode.insertBefore(i,a):l.insertBefore(i,a):(l.nodeType===8?(a=l.parentNode,a.insertBefore(i,l)):(a=l,a.appendChild(i)),l=l._reactRootContainer,l!=null||a.onclick!==null||(a.onclick=nu));else if(c!==4&&(i=i.child,i!==null))for(wf(i,a,l),i=i.sibling;i!==null;)wf(i,a,l),i=i.sibling}function Tf(i,a,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,a?l.insertBefore(i,a):l.appendChild(i);else if(c!==4&&(i=i.child,i!==null))for(Tf(i,a,l),i=i.sibling;i!==null;)Tf(i,a,l),i=i.sibling}var Rn=null,Vi=!1;function ma(i,a,l){for(l=l.child;l!==null;)o0(i,a,l),l=l.sibling}function o0(i,a,l){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(X,l)}catch{}switch(l.tag){case 5:On||Bs(l,a);case 6:var c=Rn,p=Vi;Rn=null,ma(i,a,l),Rn=c,Vi=p,Rn!==null&&(Vi?(i=Rn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Rn.removeChild(l.stateNode));break;case 18:Rn!==null&&(Vi?(i=Rn,l=l.stateNode,i.nodeType===8?kd(i.parentNode,l):i.nodeType===1&&kd(i,l),Ro(i)):kd(Rn,l.stateNode));break;case 4:c=Rn,p=Vi,Rn=l.stateNode.containerInfo,Vi=!0,ma(i,a,l),Rn=c,Vi=p;break;case 0:case 11:case 14:case 15:if(!On&&(c=l.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var _=p,A=_.destroy;_=_.tag,A!==void 0&&((_&2)!==0||(_&4)!==0)&&Ef(l,a,A),p=p.next}while(p!==c)}ma(i,a,l);break;case 1:if(!On&&(Bs(l,a),c=l.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=l.memoizedProps,c.state=l.memoizedState,c.componentWillUnmount()}catch(H){cn(l,a,H)}ma(i,a,l);break;case 21:ma(i,a,l);break;case 22:l.mode&1?(On=(c=On)||l.memoizedState!==null,ma(i,a,l),On=c):ma(i,a,l);break;default:ma(i,a,l)}}function l0(i){var a=i.updateQueue;if(a!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new GE),a.forEach(function(c){var p=JE.bind(null,i,c);l.has(c)||(l.add(c),c.then(p,p))})}}function Wi(i,a){var l=a.deletions;if(l!==null)for(var c=0;c<l.length;c++){var p=l[c];try{var _=i,A=a,H=A;e:for(;H!==null;){switch(H.tag){case 5:Rn=H.stateNode,Vi=!1;break e;case 3:Rn=H.stateNode.containerInfo,Vi=!0;break e;case 4:Rn=H.stateNode.containerInfo,Vi=!0;break e}H=H.return}if(Rn===null)throw Error(t(160));o0(_,A,p),Rn=null,Vi=!1;var K=p.alternate;K!==null&&(K.return=null),p.return=null}catch(me){cn(p,a,me)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)u0(a,i),a=a.sibling}function u0(i,a){var l=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Wi(a,i),dr(i),c&4){try{Ko(3,i,i.return),wu(3,i)}catch(et){cn(i,i.return,et)}try{Ko(5,i,i.return)}catch(et){cn(i,i.return,et)}}break;case 1:Wi(a,i),dr(i),c&512&&l!==null&&Bs(l,l.return);break;case 5:if(Wi(a,i),dr(i),c&512&&l!==null&&Bs(l,l.return),i.flags&32){var p=i.stateNode;try{Qe(p,"")}catch(et){cn(i,i.return,et)}}if(c&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,A=l!==null?l.memoizedProps:_,H=i.type,K=i.updateQueue;if(i.updateQueue=null,K!==null)try{H==="input"&&_.type==="radio"&&_.name!=null&&Bt(p,_),Le(H,A);var me=Le(H,_);for(A=0;A<K.length;A+=2){var Re=K[A],Pe=K[A+1];Re==="style"?oe(p,Pe):Re==="dangerouslySetInnerHTML"?Ft(p,Pe):Re==="children"?Qe(p,Pe):D(p,Re,Pe,me)}switch(H){case"input":jt(p,_);break;case"textarea":J(p,_);break;case"select":var Te=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Ve=_.value;Ve!=null?Qt(p,!!_.multiple,Ve,!1):Te!==!!_.multiple&&(_.defaultValue!=null?Qt(p,!!_.multiple,_.defaultValue,!0):Qt(p,!!_.multiple,_.multiple?[]:"",!1))}p[ko]=_}catch(et){cn(i,i.return,et)}}break;case 6:if(Wi(a,i),dr(i),c&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(et){cn(i,i.return,et)}}break;case 3:if(Wi(a,i),dr(i),c&4&&l!==null&&l.memoizedState.isDehydrated)try{Ro(a.containerInfo)}catch(et){cn(i,i.return,et)}break;case 4:Wi(a,i),dr(i);break;case 13:Wi(a,i),dr(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Cf=Ht())),c&4&&l0(i);break;case 22:if(Re=l!==null&&l.memoizedState!==null,i.mode&1?(On=(me=On)||Re,Wi(a,i),On=me):Wi(a,i),dr(i),c&8192){if(me=i.memoizedState!==null,(i.stateNode.isHidden=me)&&!Re&&(i.mode&1)!==0)for(Ke=i,Re=i.child;Re!==null;){for(Pe=Ke=Re;Ke!==null;){switch(Te=Ke,Ve=Te.child,Te.tag){case 0:case 11:case 14:case 15:Ko(4,Te,Te.return);break;case 1:Bs(Te,Te.return);var Je=Te.stateNode;if(typeof Je.componentWillUnmount=="function"){c=Te,l=Te.return;try{a=c,Je.props=a.memoizedProps,Je.state=a.memoizedState,Je.componentWillUnmount()}catch(et){cn(c,l,et)}}break;case 5:Bs(Te,Te.return);break;case 22:if(Te.memoizedState!==null){f0(Pe);continue}}Ve!==null?(Ve.return=Te,Ke=Ve):f0(Pe)}Re=Re.sibling}e:for(Re=null,Pe=i;;){if(Pe.tag===5){if(Re===null){Re=Pe;try{p=Pe.stateNode,me?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(H=Pe.stateNode,K=Pe.memoizedProps.style,A=K!=null&&K.hasOwnProperty("display")?K.display:null,H.style.display=R("display",A))}catch(et){cn(i,i.return,et)}}}else if(Pe.tag===6){if(Re===null)try{Pe.stateNode.nodeValue=me?"":Pe.memoizedProps}catch(et){cn(i,i.return,et)}}else if((Pe.tag!==22&&Pe.tag!==23||Pe.memoizedState===null||Pe===i)&&Pe.child!==null){Pe.child.return=Pe,Pe=Pe.child;continue}if(Pe===i)break e;for(;Pe.sibling===null;){if(Pe.return===null||Pe.return===i)break e;Re===Pe&&(Re=null),Pe=Pe.return}Re===Pe&&(Re=null),Pe.sibling.return=Pe.return,Pe=Pe.sibling}}break;case 19:Wi(a,i),dr(i),c&4&&l0(i);break;case 21:break;default:Wi(a,i),dr(i)}}function dr(i){var a=i.flags;if(a&2){try{e:{for(var l=i.return;l!==null;){if(a0(l)){var c=l;break e}l=l.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(Qe(p,""),c.flags&=-33);var _=s0(i);Tf(i,_,p);break;case 3:case 4:var A=c.stateNode.containerInfo,H=s0(i);wf(i,H,A);break;default:throw Error(t(161))}}catch(K){cn(i,i.return,K)}i.flags&=-3}a&4096&&(i.flags&=-4097)}function WE(i,a,l){Ke=i,c0(i)}function c0(i,a,l){for(var c=(i.mode&1)!==0;Ke!==null;){var p=Ke,_=p.child;if(p.tag===22&&c){var A=p.memoizedState!==null||bu;if(!A){var H=p.alternate,K=H!==null&&H.memoizedState!==null||On;H=bu;var me=On;if(bu=A,(On=K)&&!me)for(Ke=p;Ke!==null;)A=Ke,K=A.child,A.tag===22&&A.memoizedState!==null?h0(p):K!==null?(K.return=A,Ke=K):h0(p);for(;_!==null;)Ke=_,c0(_),_=_.sibling;Ke=p,bu=H,On=me}d0(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,Ke=_):d0(i)}}function d0(i){for(;Ke!==null;){var a=Ke;if((a.flags&8772)!==0){var l=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:On||wu(5,a);break;case 1:var c=a.stateNode;if(a.flags&4&&!On)if(l===null)c.componentDidMount();else{var p=a.elementType===a.type?l.memoizedProps:Gi(a.type,l.memoizedProps);c.componentDidUpdate(p,l.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var _=a.updateQueue;_!==null&&fv(a,_,c);break;case 3:var A=a.updateQueue;if(A!==null){if(l=null,a.child!==null)switch(a.child.tag){case 5:l=a.child.stateNode;break;case 1:l=a.child.stateNode}fv(a,A,l)}break;case 5:var H=a.stateNode;if(l===null&&a.flags&4){l=H;var K=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":K.autoFocus&&l.focus();break;case"img":K.src&&(l.src=K.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var me=a.alternate;if(me!==null){var Re=me.memoizedState;if(Re!==null){var Pe=Re.dehydrated;Pe!==null&&Ro(Pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}On||a.flags&512&&bf(a)}catch(Te){cn(a,a.return,Te)}}if(a===i){Ke=null;break}if(l=a.sibling,l!==null){l.return=a.return,Ke=l;break}Ke=a.return}}function f0(i){for(;Ke!==null;){var a=Ke;if(a===i){Ke=null;break}var l=a.sibling;if(l!==null){l.return=a.return,Ke=l;break}Ke=a.return}}function h0(i){for(;Ke!==null;){var a=Ke;try{switch(a.tag){case 0:case 11:case 15:var l=a.return;try{wu(4,a)}catch(K){cn(a,l,K)}break;case 1:var c=a.stateNode;if(typeof c.componentDidMount=="function"){var p=a.return;try{c.componentDidMount()}catch(K){cn(a,p,K)}}var _=a.return;try{bf(a)}catch(K){cn(a,_,K)}break;case 5:var A=a.return;try{bf(a)}catch(K){cn(a,A,K)}}}catch(K){cn(a,a.return,K)}if(a===i){Ke=null;break}var H=a.sibling;if(H!==null){H.return=a.return,Ke=H;break}Ke=a.return}}var $E=Math.ceil,Tu=L.ReactCurrentDispatcher,Rf=L.ReactCurrentOwner,Ri=L.ReactCurrentBatchConfig,Pt=0,bn=null,gn=null,An=0,di=0,zs=ca(0),Sn=0,Zo=null,Qa=0,Ru=0,Af=0,jo=null,Zn=null,Cf=0,Hs=1/0,Ur=null,Au=!1,Pf=null,ga=null,Cu=!1,va=null,Pu=0,Jo=0,Lf=null,Lu=-1,Du=0;function Gn(){return(Pt&6)!==0?Ht():Lu!==-1?Lu:Lu=Ht()}function _a(i){return(i.mode&1)===0?1:(Pt&2)!==0&&An!==0?An&-An:AE.transition!==null?(Du===0&&(Du=Lt()),Du):(i=je,i!==0||(i=window.event,i=i===void 0?16:mg(i.type)),i)}function $i(i,a,l,c){if(50<Jo)throw Jo=0,Lf=null,Error(t(185));qt(i,l,c),((Pt&2)===0||i!==bn)&&(i===bn&&((Pt&2)===0&&(Ru|=l),Sn===4&&ya(i,An)),jn(i,c),l===1&&Pt===0&&(a.mode&1)===0&&(Hs=Ht()+500,su&&fa()))}function jn(i,a){var l=i.callbackNode;gt(i,a);var c=pt(i,i===bn?An:0);if(c===0)l!==null&&zn(l),i.callbackNode=null,i.callbackPriority=0;else if(a=c&-c,i.callbackPriority!==a){if(l!=null&&zn(l),a===1)i.tag===0?RE(m0.bind(null,i)):ev(m0.bind(null,i)),EE(function(){(Pt&6)===0&&fa()}),l=null;else{switch(si(c)){case 1:l=aa;break;case 4:l=Ga;break;case 16:l=Ar;break;case 536870912:l=P;break;default:l=Ar}l=E0(l,p0.bind(null,i))}i.callbackPriority=a,i.callbackNode=l}}function p0(i,a){if(Lu=-1,Du=0,(Pt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Gs()&&i.callbackNode!==l)return null;var c=pt(i,i===bn?An:0);if(c===0)return null;if((c&30)!==0||(c&i.expiredLanes)!==0||a)a=Iu(i,c);else{a=c;var p=Pt;Pt|=2;var _=v0();(bn!==i||An!==a)&&(Ur=null,Hs=Ht()+500,ts(i,a));do try{YE();break}catch(H){g0(i,H)}while(!0);Yd(),Tu.current=_,Pt=p,gn!==null?a=0:(bn=null,An=0,a=Sn)}if(a!==0){if(a===2&&(p=kt(i),p!==0&&(c=p,a=Df(i,p))),a===1)throw l=Zo,ts(i,0),ya(i,c),jn(i,Ht()),l;if(a===6)ya(i,c);else{if(p=i.current.alternate,(c&30)===0&&!XE(p)&&(a=Iu(i,c),a===2&&(_=kt(i),_!==0&&(c=_,a=Df(i,_))),a===1))throw l=Zo,ts(i,0),ya(i,c),jn(i,Ht()),l;switch(i.finishedWork=p,i.finishedLanes=c,a){case 0:case 1:throw Error(t(345));case 2:ns(i,Zn,Ur);break;case 3:if(ya(i,c),(c&130023424)===c&&(a=Cf+500-Ht(),10<a)){if(pt(i,0)!==0)break;if(p=i.suspendedLanes,(p&c)!==c){Gn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Fd(ns.bind(null,i,Zn,Ur),a);break}ns(i,Zn,Ur);break;case 4:if(ya(i,c),(c&4194240)===c)break;for(a=i.eventTimes,p=-1;0<c;){var A=31-ie(c);_=1<<A,A=a[A],A>p&&(p=A),c&=~_}if(c=p,c=Ht()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*$E(c/1960))-c,10<c){i.timeoutHandle=Fd(ns.bind(null,i,Zn,Ur),c);break}ns(i,Zn,Ur);break;case 5:ns(i,Zn,Ur);break;default:throw Error(t(329))}}}return jn(i,Ht()),i.callbackNode===l?p0.bind(null,i):null}function Df(i,a){var l=jo;return i.current.memoizedState.isDehydrated&&(ts(i,a).flags|=256),i=Iu(i,a),i!==2&&(a=Zn,Zn=l,a!==null&&If(a)),i}function If(i){Zn===null?Zn=i:Zn.push.apply(Zn,i)}function XE(i){for(var a=i;;){if(a.flags&16384){var l=a.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var c=0;c<l.length;c++){var p=l[c],_=p.getSnapshot;p=p.value;try{if(!zi(_(),p))return!1}catch{return!1}}}if(l=a.child,a.subtreeFlags&16384&&l!==null)l.return=a,a=l;else{if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function ya(i,a){for(a&=~Af,a&=~Ru,i.suspendedLanes|=a,i.pingedLanes&=~a,i=i.expirationTimes;0<a;){var l=31-ie(a),c=1<<l;i[l]=-1,a&=~c}}function m0(i){if((Pt&6)!==0)throw Error(t(327));Gs();var a=pt(i,0);if((a&1)===0)return jn(i,Ht()),null;var l=Iu(i,a);if(i.tag!==0&&l===2){var c=kt(i);c!==0&&(a=c,l=Df(i,c))}if(l===1)throw l=Zo,ts(i,0),ya(i,a),jn(i,Ht()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=a,ns(i,Zn,Ur),jn(i,Ht()),null}function Nf(i,a){var l=Pt;Pt|=1;try{return i(a)}finally{Pt=l,Pt===0&&(Hs=Ht()+500,su&&fa())}}function es(i){va!==null&&va.tag===0&&(Pt&6)===0&&Gs();var a=Pt;Pt|=1;var l=Ri.transition,c=je;try{if(Ri.transition=null,je=1,i)return i()}finally{je=c,Ri.transition=l,Pt=a,(Pt&6)===0&&fa()}}function Of(){di=zs.current,Kt(zs)}function ts(i,a){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,ME(l)),gn!==null)for(l=gn.return;l!==null;){var c=l;switch(Vd(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ru();break;case 3:Fs(),Kt(qn),Kt(Dn),nf();break;case 5:ef(c);break;case 4:Fs();break;case 13:Kt(an);break;case 19:Kt(an);break;case 10:Kd(c.type._context);break;case 22:case 23:Of()}l=l.return}if(bn=i,gn=i=Sa(i.current,null),An=di=a,Sn=0,Zo=null,Af=Ru=Qa=0,Zn=jo=null,Za!==null){for(a=0;a<Za.length;a++)if(l=Za[a],c=l.interleaved,c!==null){l.interleaved=null;var p=c.next,_=l.pending;if(_!==null){var A=_.next;_.next=p,c.next=A}l.pending=c}Za=null}return i}function g0(i,a){do{var l=gn;try{if(Yd(),gu.current=Su,vu){for(var c=sn.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}vu=!1}if(Ja=0,En=yn=sn=null,Wo=!1,$o=0,Rf.current=null,l===null||l.return===null){Sn=1,Zo=a,gn=null;break}e:{var _=i,A=l.return,H=l,K=a;if(a=An,H.flags|=32768,K!==null&&typeof K=="object"&&typeof K.then=="function"){var me=K,Re=H,Pe=Re.tag;if((Re.mode&1)===0&&(Pe===0||Pe===11||Pe===15)){var Te=Re.alternate;Te?(Re.updateQueue=Te.updateQueue,Re.memoizedState=Te.memoizedState,Re.lanes=Te.lanes):(Re.updateQueue=null,Re.memoizedState=null)}var Ve=Hv(A);if(Ve!==null){Ve.flags&=-257,Gv(Ve,A,H,_,a),Ve.mode&1&&zv(_,me,a),a=Ve,K=me;var Je=a.updateQueue;if(Je===null){var et=new Set;et.add(K),a.updateQueue=et}else Je.add(K);break e}else{if((a&1)===0){zv(_,me,a),Uf();break e}K=Error(t(426))}}else if(nn&&H.mode&1){var hn=Hv(A);if(hn!==null){(hn.flags&65536)===0&&(hn.flags|=256),Gv(hn,A,H,_,a),Xd(ks(K,H));break e}}_=K=ks(K,H),Sn!==4&&(Sn=2),jo===null?jo=[_]:jo.push(_),_=A;do{switch(_.tag){case 3:_.flags|=65536,a&=-a,_.lanes|=a;var ce=kv(_,K,a);dv(_,ce);break e;case 1:H=K;var Q=_.type,he=_.stateNode;if((_.flags&128)===0&&(typeof Q.getDerivedStateFromError=="function"||he!==null&&typeof he.componentDidCatch=="function"&&(ga===null||!ga.has(he)))){_.flags|=65536,a&=-a,_.lanes|=a;var Ne=Bv(_,H,a);dv(_,Ne);break e}}_=_.return}while(_!==null)}y0(l)}catch(tt){a=tt,gn===l&&l!==null&&(gn=l=l.return);continue}break}while(!0)}function v0(){var i=Tu.current;return Tu.current=Su,i===null?Su:i}function Uf(){(Sn===0||Sn===3||Sn===2)&&(Sn=4),bn===null||(Qa&268435455)===0&&(Ru&268435455)===0||ya(bn,An)}function Iu(i,a){var l=Pt;Pt|=2;var c=v0();(bn!==i||An!==a)&&(Ur=null,ts(i,a));do try{qE();break}catch(p){g0(i,p)}while(!0);if(Yd(),Pt=l,Tu.current=c,gn!==null)throw Error(t(261));return bn=null,An=0,Sn}function qE(){for(;gn!==null;)_0(gn)}function YE(){for(;gn!==null&&!or();)_0(gn)}function _0(i){var a=M0(i.alternate,i,di);i.memoizedProps=i.pendingProps,a===null?y0(i):gn=a,Rf.current=null}function y0(i){var a=i;do{var l=a.alternate;if(i=a.return,(a.flags&32768)===0){if(l=zE(l,a,di),l!==null){gn=l;return}}else{if(l=HE(l,a),l!==null){l.flags&=32767,gn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Sn=6,gn=null;return}}if(a=a.sibling,a!==null){gn=a;return}gn=a=i}while(a!==null);Sn===0&&(Sn=5)}function ns(i,a,l){var c=je,p=Ri.transition;try{Ri.transition=null,je=1,KE(i,a,l,c)}finally{Ri.transition=p,je=c}return null}function KE(i,a,l,c){do Gs();while(va!==null);if((Pt&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(Ye(i,_),i===bn&&(gn=bn=null,An=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Cu||(Cu=!0,E0(Ar,function(){return Gs(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=Ri.transition,Ri.transition=null;var A=je;je=1;var H=Pt;Pt|=4,Rf.current=null,VE(i,l),u0(l,i),mE(Od),Wl=!!Nd,Od=Nd=null,i.current=l,WE(l),ys(),Pt=H,je=A,Ri.transition=_}else i.current=l;if(Cu&&(Cu=!1,va=i,Pu=p),_=i.pendingLanes,_===0&&(ga=null),le(l.stateNode),jn(i,Ht()),a!==null)for(c=i.onRecoverableError,l=0;l<a.length;l++)p=a[l],c(p.value,{componentStack:p.stack,digest:p.digest});if(Au)throw Au=!1,i=Pf,Pf=null,i;return(Pu&1)!==0&&i.tag!==0&&Gs(),_=i.pendingLanes,(_&1)!==0?i===Lf?Jo++:(Jo=0,Lf=i):Jo=0,fa(),null}function Gs(){if(va!==null){var i=si(Pu),a=Ri.transition,l=je;try{if(Ri.transition=null,je=16>i?16:i,va===null)var c=!1;else{if(i=va,va=null,Pu=0,(Pt&6)!==0)throw Error(t(331));var p=Pt;for(Pt|=4,Ke=i.current;Ke!==null;){var _=Ke,A=_.child;if((Ke.flags&16)!==0){var H=_.deletions;if(H!==null){for(var K=0;K<H.length;K++){var me=H[K];for(Ke=me;Ke!==null;){var Re=Ke;switch(Re.tag){case 0:case 11:case 15:Ko(8,Re,_)}var Pe=Re.child;if(Pe!==null)Pe.return=Re,Ke=Pe;else for(;Ke!==null;){Re=Ke;var Te=Re.sibling,Ve=Re.return;if(r0(Re),Re===me){Ke=null;break}if(Te!==null){Te.return=Ve,Ke=Te;break}Ke=Ve}}}var Je=_.alternate;if(Je!==null){var et=Je.child;if(et!==null){Je.child=null;do{var hn=et.sibling;et.sibling=null,et=hn}while(et!==null)}}Ke=_}}if((_.subtreeFlags&2064)!==0&&A!==null)A.return=_,Ke=A;else e:for(;Ke!==null;){if(_=Ke,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Ko(9,_,_.return)}var ce=_.sibling;if(ce!==null){ce.return=_.return,Ke=ce;break e}Ke=_.return}}var Q=i.current;for(Ke=Q;Ke!==null;){A=Ke;var he=A.child;if((A.subtreeFlags&2064)!==0&&he!==null)he.return=A,Ke=he;else e:for(A=Q;Ke!==null;){if(H=Ke,(H.flags&2048)!==0)try{switch(H.tag){case 0:case 11:case 15:wu(9,H)}}catch(tt){cn(H,H.return,tt)}if(H===A){Ke=null;break e}var Ne=H.sibling;if(Ne!==null){Ne.return=H.return,Ke=Ne;break e}Ke=H.return}}if(Pt=p,fa(),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(X,i)}catch{}c=!0}return c}finally{je=l,Ri.transition=a}}return!1}function S0(i,a,l){a=ks(l,a),a=kv(i,a,1),i=pa(i,a,1),a=Gn(),i!==null&&(qt(i,1,a),jn(i,a))}function cn(i,a,l){if(i.tag===3)S0(i,i,l);else for(;a!==null;){if(a.tag===3){S0(a,i,l);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ga===null||!ga.has(c))){i=ks(l,i),i=Bv(a,i,1),a=pa(a,i,1),i=Gn(),a!==null&&(qt(a,1,i),jn(a,i));break}}a=a.return}}function ZE(i,a,l){var c=i.pingCache;c!==null&&c.delete(a),a=Gn(),i.pingedLanes|=i.suspendedLanes&l,bn===i&&(An&l)===l&&(Sn===4||Sn===3&&(An&130023424)===An&&500>Ht()-Cf?ts(i,0):Af|=l),jn(i,a)}function x0(i,a){a===0&&((i.mode&1)===0?a=1:(a=Xe,Xe<<=1,(Xe&130023424)===0&&(Xe=4194304)));var l=Gn();i=Ir(i,a),i!==null&&(qt(i,a,l),jn(i,l))}function jE(i){var a=i.memoizedState,l=0;a!==null&&(l=a.retryLane),x0(i,l)}function JE(i,a){var l=0;switch(i.tag){case 13:var c=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:c=i.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(a),x0(i,l)}var M0;M0=function(i,a,l){if(i!==null)if(i.memoizedProps!==a.pendingProps||qn.current)Kn=!0;else{if((i.lanes&l)===0&&(a.flags&128)===0)return Kn=!1,BE(i,a,l);Kn=(i.flags&131072)!==0}else Kn=!1,nn&&(a.flags&1048576)!==0&&tv(a,lu,a.index);switch(a.lanes=0,a.tag){case 2:var c=a.type;Eu(i,a),i=a.pendingProps;var p=Ps(a,Dn.current);Us(a,l),p=sf(null,a,c,i,p,l);var _=of();return a.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Yn(c)?(_=!0,au(a)):_=!1,a.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Jd(a),p.updater=xu,a.stateNode=p,p._reactInternals=a,hf(a,c,i,l),a=vf(null,a,c,!0,_,l)):(a.tag=0,nn&&_&&Gd(a),Hn(null,a,p,l),a=a.child),a;case 16:c=a.elementType;e:{switch(Eu(i,a),i=a.pendingProps,p=c._init,c=p(c._payload),a.type=c,p=a.tag=eb(c),i=Gi(c,i),p){case 0:a=gf(null,a,c,i,l);break e;case 1:a=Yv(null,a,c,i,l);break e;case 11:a=Vv(null,a,c,i,l);break e;case 14:a=Wv(null,a,c,Gi(c.type,i),l);break e}throw Error(t(306,c,""))}return a;case 0:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:Gi(c,p),gf(i,a,c,p,l);case 1:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:Gi(c,p),Yv(i,a,c,p,l);case 3:e:{if(Kv(a),i===null)throw Error(t(387));c=a.pendingProps,_=a.memoizedState,p=_.element,cv(i,a),pu(a,c,null,l);var A=a.memoizedState;if(c=A.element,_.isDehydrated)if(_={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},a.updateQueue.baseState=_,a.memoizedState=_,a.flags&256){p=ks(Error(t(423)),a),a=Zv(i,a,c,l,p);break e}else if(c!==p){p=ks(Error(t(424)),a),a=Zv(i,a,c,l,p);break e}else for(ci=ua(a.stateNode.containerInfo.firstChild),ui=a,nn=!0,Hi=null,l=lv(a,null,c,l),a.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Is(),c===p){a=Or(i,a,l);break e}Hn(i,a,c,l)}a=a.child}return a;case 5:return hv(a),i===null&&$d(a),c=a.type,p=a.pendingProps,_=i!==null?i.memoizedProps:null,A=p.children,Ud(c,p)?A=null:_!==null&&Ud(c,_)&&(a.flags|=32),qv(i,a),Hn(i,a,A,l),a.child;case 6:return i===null&&$d(a),null;case 13:return jv(i,a,l);case 4:return Qd(a,a.stateNode.containerInfo),c=a.pendingProps,i===null?a.child=Ns(a,null,c,l):Hn(i,a,c,l),a.child;case 11:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:Gi(c,p),Vv(i,a,c,p,l);case 7:return Hn(i,a,a.pendingProps,l),a.child;case 8:return Hn(i,a,a.pendingProps.children,l),a.child;case 12:return Hn(i,a,a.pendingProps.children,l),a.child;case 10:e:{if(c=a.type._context,p=a.pendingProps,_=a.memoizedProps,A=p.value,Vt(du,c._currentValue),c._currentValue=A,_!==null)if(zi(_.value,A)){if(_.children===p.children&&!qn.current){a=Or(i,a,l);break e}}else for(_=a.child,_!==null&&(_.return=a);_!==null;){var H=_.dependencies;if(H!==null){A=_.child;for(var K=H.firstContext;K!==null;){if(K.context===c){if(_.tag===1){K=Nr(-1,l&-l),K.tag=2;var me=_.updateQueue;if(me!==null){me=me.shared;var Re=me.pending;Re===null?K.next=K:(K.next=Re.next,Re.next=K),me.pending=K}}_.lanes|=l,K=_.alternate,K!==null&&(K.lanes|=l),Zd(_.return,l,a),H.lanes|=l;break}K=K.next}}else if(_.tag===10)A=_.type===a.type?null:_.child;else if(_.tag===18){if(A=_.return,A===null)throw Error(t(341));A.lanes|=l,H=A.alternate,H!==null&&(H.lanes|=l),Zd(A,l,a),A=_.sibling}else A=_.child;if(A!==null)A.return=_;else for(A=_;A!==null;){if(A===a){A=null;break}if(_=A.sibling,_!==null){_.return=A.return,A=_;break}A=A.return}_=A}Hn(i,a,p.children,l),a=a.child}return a;case 9:return p=a.type,c=a.pendingProps.children,Us(a,l),p=wi(p),c=c(p),a.flags|=1,Hn(i,a,c,l),a.child;case 14:return c=a.type,p=Gi(c,a.pendingProps),p=Gi(c.type,p),Wv(i,a,c,p,l);case 15:return $v(i,a,a.type,a.pendingProps,l);case 17:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:Gi(c,p),Eu(i,a),a.tag=1,Yn(c)?(i=!0,au(a)):i=!1,Us(a,l),Uv(a,c,p),hf(a,c,p,l),vf(null,a,c,!0,i,l);case 19:return Qv(i,a,l);case 22:return Xv(i,a,l)}throw Error(t(156,a.tag))};function E0(i,a){return za(i,a)}function QE(i,a,l,c){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ai(i,a,l,c){return new QE(i,a,l,c)}function Ff(i){return i=i.prototype,!(!i||!i.isReactComponent)}function eb(i){if(typeof i=="function")return Ff(i)?1:0;if(i!=null){if(i=i.$$typeof,i===$)return 11;if(i===se)return 14}return 2}function Sa(i,a){var l=i.alternate;return l===null?(l=Ai(i.tag,a,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=a,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,a=i.dependencies,l.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Nu(i,a,l,c,p,_){var A=2;if(c=i,typeof i=="function")Ff(i)&&(A=1);else if(typeof i=="string")A=5;else e:switch(i){case b:return is(l.children,p,_,a);case C:A=8,p|=8;break;case V:return i=Ai(12,l,a,p|2),i.elementType=V,i.lanes=_,i;case Y:return i=Ai(13,l,a,p),i.elementType=Y,i.lanes=_,i;case B:return i=Ai(19,l,a,p),i.elementType=B,i.lanes=_,i;case ne:return Ou(l,p,_,a);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case U:A=10;break e;case z:A=9;break e;case $:A=11;break e;case se:A=14;break e;case re:A=16,c=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return a=Ai(A,l,a,p),a.elementType=i,a.type=c,a.lanes=_,a}function is(i,a,l,c){return i=Ai(7,i,c,a),i.lanes=l,i}function Ou(i,a,l,c){return i=Ai(22,i,c,a),i.elementType=ne,i.lanes=l,i.stateNode={isHidden:!1},i}function kf(i,a,l){return i=Ai(6,i,null,a),i.lanes=l,i}function Bf(i,a,l){return a=Ai(4,i.children!==null?i.children:[],i.key,a),a.lanes=l,a.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},a}function tb(i,a,l,c,p){this.tag=a,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=At(0),this.expirationTimes=At(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function zf(i,a,l,c,p,_,A,H,K){return i=new tb(i,a,l,H,K),a===1?(a=1,_===!0&&(a|=8)):a=0,_=Ai(3,null,null,a),i.current=_,_.stateNode=i,_.memoizedState={element:c,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jd(_),i}function nb(i,a,l){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:i,containerInfo:a,implementation:l}}function b0(i){if(!i)return da;i=i._reactInternals;e:{if(Mi(i)!==i||i.tag!==1)throw Error(t(170));var a=i;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Yn(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Yn(l))return Jg(i,l,a)}return a}function w0(i,a,l,c,p,_,A,H,K){return i=zf(l,c,!0,i,p,_,A,H,K),i.context=b0(null),l=i.current,c=Gn(),p=_a(l),_=Nr(c,p),_.callback=a??null,pa(l,_,p),i.current.lanes=p,qt(i,p,c),jn(i,c),i}function Uu(i,a,l,c){var p=a.current,_=Gn(),A=_a(p);return l=b0(l),a.context===null?a.context=l:a.pendingContext=l,a=Nr(_,A),a.payload={element:i},c=c===void 0?null:c,c!==null&&(a.callback=c),i=pa(p,a,A),i!==null&&($i(i,p,A,_),hu(i,p,A)),A}function Fu(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function T0(i,a){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<a?l:a}}function Hf(i,a){T0(i,a),(i=i.alternate)&&T0(i,a)}function ib(){return null}var R0=typeof reportError=="function"?reportError:function(i){console.error(i)};function Gf(i){this._internalRoot=i}ku.prototype.render=Gf.prototype.render=function(i){var a=this._internalRoot;if(a===null)throw Error(t(409));Uu(i,a,null,null)},ku.prototype.unmount=Gf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var a=i.containerInfo;es(function(){Uu(null,i,null,null)}),a[Cr]=null}};function ku(i){this._internalRoot=i}ku.prototype.unstable_scheduleHydration=function(i){if(i){var a=oi();i={blockedOn:null,target:i,priority:a};for(var l=0;l<Bi.length&&a!==0&&a<Bi[l].priority;l++);Bi.splice(l,0,i),l===0&&bo(i)}};function Vf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Bu(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function A0(){}function rb(i,a,l,c,p){if(p){if(typeof c=="function"){var _=c;c=function(){var me=Fu(A);_.call(me)}}var A=w0(a,c,i,0,null,!1,!1,"",A0);return i._reactRootContainer=A,i[Cr]=A.current,Uo(i.nodeType===8?i.parentNode:i),es(),A}for(;p=i.lastChild;)i.removeChild(p);if(typeof c=="function"){var H=c;c=function(){var me=Fu(K);H.call(me)}}var K=zf(i,0,!1,null,null,!1,!1,"",A0);return i._reactRootContainer=K,i[Cr]=K.current,Uo(i.nodeType===8?i.parentNode:i),es(function(){Uu(a,K,l,c)}),K}function zu(i,a,l,c,p){var _=l._reactRootContainer;if(_){var A=_;if(typeof p=="function"){var H=p;p=function(){var K=Fu(A);H.call(K)}}Uu(a,A,i,p)}else A=rb(l,a,i,p,c);return Fu(A)}un=function(i){switch(i.tag){case 3:var a=i.stateNode;if(a.current.memoizedState.isDehydrated){var l=rt(a.pendingLanes);l!==0&&(ln(a,l|1),jn(a,Ht()),(Pt&6)===0&&(Hs=Ht()+500,fa()))}break;case 13:es(function(){var c=Ir(i,1);if(c!==null){var p=Gn();$i(c,i,1,p)}}),Hf(i,1)}},Fi=function(i){if(i.tag===13){var a=Ir(i,134217728);if(a!==null){var l=Gn();$i(a,i,134217728,l)}Hf(i,134217728)}},Xn=function(i){if(i.tag===13){var a=_a(i),l=Ir(i,a);if(l!==null){var c=Gn();$i(l,i,a,c)}Hf(i,a)}},oi=function(){return je},yt=function(i,a){var l=je;try{return je=i,a()}finally{je=l}},_e=function(i,a,l){switch(a){case"input":if(jt(i,l),a=l.name,l.type==="radio"&&a!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<l.length;a++){var c=l[a];if(c!==i&&c.form===i.form){var p=iu(c);if(!p)throw Error(t(90));ht(c),jt(c,p)}}}break;case"textarea":J(i,l);break;case"select":a=l.value,a!=null&&Qt(i,!!l.multiple,a,!1)}},pe=Nf,ge=es;var ab={usingClientEntryPoint:!1,Events:[Bo,As,iu,W,ue,Nf]},Qo={findFiberByHostInstance:Xa,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sb={bundleType:Qo.bundleType,version:Qo.version,rendererPackageName:Qo.rendererPackageName,rendererConfig:Qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=ra(i),i===null?null:i.stateNode},findFiberByHostInstance:Qo.findFiberByHostInstance||ib,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hu.isDisabled&&Hu.supportsFiber)try{X=Hu.inject(sb),de=Hu}catch{}}return Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ab,Jn.createPortal=function(i,a){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vf(a))throw Error(t(200));return nb(i,a,null,l)},Jn.createRoot=function(i,a){if(!Vf(i))throw Error(t(299));var l=!1,c="",p=R0;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onRecoverableError!==void 0&&(p=a.onRecoverableError)),a=zf(i,1,!1,null,null,l,!1,c,p),i[Cr]=a.current,Uo(i.nodeType===8?i.parentNode:i),new Gf(a)},Jn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var a=i._reactInternals;if(a===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=ra(a),i=i===null?null:i.stateNode,i},Jn.flushSync=function(i){return es(i)},Jn.hydrate=function(i,a,l){if(!Bu(a))throw Error(t(200));return zu(null,i,a,!0,l)},Jn.hydrateRoot=function(i,a,l){if(!Vf(i))throw Error(t(405));var c=l!=null&&l.hydratedSources||null,p=!1,_="",A=R0;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),a=w0(a,null,i,1,l??null,p,!1,_,A),i[Cr]=a.current,Uo(i),c)for(i=0;i<c.length;i++)l=c[i],p=l._getVersion,p=p(l._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[l,p]:a.mutableSourceEagerHydrationData.push(l,p);return new ku(a)},Jn.render=function(i,a,l){if(!Bu(a))throw Error(t(200));return zu(null,i,a,!1,l)},Jn.unmountComponentAtNode=function(i){if(!Bu(i))throw Error(t(40));return i._reactRootContainer?(es(function(){zu(null,null,i,!1,function(){i._reactRootContainer=null,i[Cr]=null})}),!0):!1},Jn.unstable_batchedUpdates=Nf,Jn.unstable_renderSubtreeIntoContainer=function(i,a,l,c){if(!Bu(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return zu(i,a,l,!1,c)},Jn.version="18.3.1-next-f1338f8080-20240426",Jn}var O0;function lS(){if(O0)return $f.exports;O0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),$f.exports=hb(),$f.exports}var U0;function pb(){if(U0)return Gu;U0=1;var n=lS();return Gu.createRoot=n.createRoot,Gu.hydrateRoot=n.hydrateRoot,Gu}var mb=pb(),gb=lS();function bl(n){"@babel/helpers - typeof";return bl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bl(n)}function vb(n,e){if(bl(n)!="object"||!n)return n;var t;if(typeof Symbol<"u"&&(t=n[Symbol.toPrimitive])!==void 0){var r=t.call(n,e);if(bl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function _b(n){var e=vb(n,"string");return bl(e)=="symbol"?e:e+""}function yb(n,e,t){return(e=_b(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function F0(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,r)}return t}function Ni(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?F0(Object(t),!0).forEach(function(r){yb(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):F0(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Hc(){return Hc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Hc.apply(null,arguments)}function gs(n,e){if(n==null)return{};var t={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.indexOf(r)!==-1)continue;t[r]=n[r]}return t}var Sb=n=>n.disabled||Array.isArray(n.accessibilityStates)&&n.accessibilityStates.indexOf("disabled")>-1,xb={adjustable:"slider",button:"button",header:"heading",image:"img",imagebutton:null,keyboardkey:null,label:null,link:"link",none:"presentation",search:"search",summary:"region",text:null},uS=n=>{var e=n.accessibilityRole,t=n.role,r=t||e;if(r){var s=xb[r];if(s!==null)return s||r}},Mb={article:"article",banner:"header",blockquote:"blockquote",button:"button",code:"code",complementary:"aside",contentinfo:"footer",deletion:"del",emphasis:"em",figure:"figure",insertion:"ins",form:"form",list:"ul",listitem:"li",main:"main",navigation:"nav",paragraph:"p",region:"section",strong:"strong"},Eb={},bb=function(e){e===void 0&&(e=Eb);var t=e.role||e.accessibilityRole;if(t==="label")return"label";var r=uS(e);if(r){if(r==="heading"){var s=e.accessibilityLevel||e["aria-level"];return s!=null?"h"+s:"h1"}return Mb[r]}},cS={isDisabled:Sb,propsToAccessibilityComponent:bb,propsToAriaRole:uS},Cc={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexOrder:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,gridRow:!0,gridRowEnd:!0,gridRowGap:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnGap:!0,gridColumnStart:!0,lineClamp:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0,scale:!0,scaleX:!0,scaleY:!0,scaleZ:!0,shadowOpacity:!0},wb=["ms","Moz","O","Webkit"],Tb=(n,e)=>n+e.charAt(0).toUpperCase()+e.substring(1);Object.keys(Cc).forEach(n=>{wb.forEach(e=>{Cc[Tb(e,n)]=Cc[n]})});var Rb=n=>n==="currentcolor"||n==="currentColor"||n==="inherit"||n.indexOf("var(")===0,Yf,k0;function Ab(){if(k0)return Yf;k0=1;function n(y){if(typeof y=="number")return y>>>0===y&&y>=0&&y<=4294967295?y:null;if(typeof y!="string")return null;const S=g();let w;if(w=S.hex6.exec(y))return parseInt(w[1]+"ff",16)>>>0;const D=T(y);return D??((w=S.rgb.exec(y))?(m(w[1])<<24|m(w[2])<<16|m(w[3])<<8|255)>>>0:(w=S.rgba.exec(y))?w[6]!==void 0?(m(w[6])<<24|m(w[7])<<16|m(w[8])<<8|x(w[9]))>>>0:(m(w[2])<<24|m(w[3])<<16|m(w[4])<<8|x(w[5]))>>>0:(w=S.hex3.exec(y))?parseInt(w[1]+w[1]+w[2]+w[2]+w[3]+w[3]+"ff",16)>>>0:(w=S.hex8.exec(y))?parseInt(w[1],16)>>>0:(w=S.hex4.exec(y))?parseInt(w[1]+w[1]+w[2]+w[2]+w[3]+w[3]+w[4]+w[4],16)>>>0:(w=S.hsl.exec(y))?(t(v(w[1]),E(w[2]),E(w[3]))|255)>>>0:(w=S.hsla.exec(y))?w[6]!==void 0?(t(v(w[6]),E(w[7]),E(w[8]))|x(w[9]))>>>0:(t(v(w[2]),E(w[3]),E(w[4]))|x(w[5]))>>>0:(w=S.hwb.exec(y))?(r(v(w[1]),E(w[2]),E(w[3]))|255)>>>0:null)}function e(y,S,w){return w<0&&(w+=1),w>1&&(w-=1),w<1/6?y+(S-y)*6*w:w<1/2?S:w<2/3?y+(S-y)*(2/3-w)*6:y}function t(y,S,w){const D=w<.5?w*(1+S):w+S-w*S,L=2*w-D,O=e(L,D,y+1/3),I=e(L,D,y),b=e(L,D,y-1/3);return Math.round(O*255)<<24|Math.round(I*255)<<16|Math.round(b*255)<<8}function r(y,S,w){if(S+w>=1){const I=Math.round(S*255/(S+w));return I<<24|I<<16|I<<8}const D=e(0,1,y+1/3)*(1-S-w)+S,L=e(0,1,y)*(1-S-w)+S,O=e(0,1,y-1/3)*(1-S-w)+S;return Math.round(D*255)<<24|Math.round(L*255)<<16|Math.round(O*255)<<8}const s="[-+]?\\d*\\.?\\d+",o=s+"%";function u(...y){return"\\(\\s*("+y.join(")\\s*,?\\s*(")+")\\s*\\)"}function d(...y){return"\\(\\s*("+y.slice(0,y.length-1).join(")\\s*,?\\s*(")+")\\s*/\\s*("+y[y.length-1]+")\\s*\\)"}function f(...y){return"\\(\\s*("+y.join(")\\s*,\\s*(")+")\\s*\\)"}let h;function g(){return h===void 0&&(h={rgb:new RegExp("rgb"+u(s,s,s)),rgba:new RegExp("rgba("+f(s,s,s,s)+"|"+d(s,s,s,s)+")"),hsl:new RegExp("hsl"+u(s,o,o)),hsla:new RegExp("hsla("+f(s,o,o,s)+"|"+d(s,o,o,s)+")"),hwb:new RegExp("hwb"+u(s,o,o)),hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex4:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{6})$/,hex8:/^#([0-9a-fA-F]{8})$/}),h}function m(y){const S=parseInt(y,10);return S<0?0:S>255?255:S}function v(y){return(parseFloat(y)%360+360)%360/360}function x(y){const S=parseFloat(y);return S<0?0:S>1?255:Math.round(S*255)}function E(y){const S=parseFloat(y);return S<0?0:S>100?1:S/100}function T(y){switch(y){case"transparent":return 0;case"aliceblue":return 4042850303;case"antiquewhite":return 4209760255;case"aqua":return 16777215;case"aquamarine":return 2147472639;case"azure":return 4043309055;case"beige":return 4126530815;case"bisque":return 4293182719;case"black":return 255;case"blanchedalmond":return 4293643775;case"blue":return 65535;case"blueviolet":return 2318131967;case"brown":return 2771004159;case"burlywood":return 3736635391;case"burntsienna":return 3934150143;case"cadetblue":return 1604231423;case"chartreuse":return 2147418367;case"chocolate":return 3530104575;case"coral":return 4286533887;case"cornflowerblue":return 1687547391;case"cornsilk":return 4294499583;case"crimson":return 3692313855;case"cyan":return 16777215;case"darkblue":return 35839;case"darkcyan":return 9145343;case"darkgoldenrod":return 3095792639;case"darkgray":return 2846468607;case"darkgreen":return 6553855;case"darkgrey":return 2846468607;case"darkkhaki":return 3182914559;case"darkmagenta":return 2332068863;case"darkolivegreen":return 1433087999;case"darkorange":return 4287365375;case"darkorchid":return 2570243327;case"darkred":return 2332033279;case"darksalmon":return 3918953215;case"darkseagreen":return 2411499519;case"darkslateblue":return 1211993087;case"darkslategray":return 793726975;case"darkslategrey":return 793726975;case"darkturquoise":return 13554175;case"darkviolet":return 2483082239;case"deeppink":return 4279538687;case"deepskyblue":return 12582911;case"dimgray":return 1768516095;case"dimgrey":return 1768516095;case"dodgerblue":return 512819199;case"firebrick":return 2988581631;case"floralwhite":return 4294635775;case"forestgreen":return 579543807;case"fuchsia":return 4278255615;case"gainsboro":return 3705462015;case"ghostwhite":return 4177068031;case"gold":return 4292280575;case"goldenrod":return 3668254975;case"gray":return 2155905279;case"green":return 8388863;case"greenyellow":return 2919182335;case"grey":return 2155905279;case"honeydew":return 4043305215;case"hotpink":return 4285117695;case"indianred":return 3445382399;case"indigo":return 1258324735;case"ivory":return 4294963455;case"khaki":return 4041641215;case"lavender":return 3873897215;case"lavenderblush":return 4293981695;case"lawngreen":return 2096890111;case"lemonchiffon":return 4294626815;case"lightblue":return 2916673279;case"lightcoral":return 4034953471;case"lightcyan":return 3774873599;case"lightgoldenrodyellow":return 4210742015;case"lightgray":return 3553874943;case"lightgreen":return 2431553791;case"lightgrey":return 3553874943;case"lightpink":return 4290167295;case"lightsalmon":return 4288707327;case"lightseagreen":return 548580095;case"lightskyblue":return 2278488831;case"lightslategray":return 2005441023;case"lightslategrey":return 2005441023;case"lightsteelblue":return 2965692159;case"lightyellow":return 4294959359;case"lime":return 16711935;case"limegreen":return 852308735;case"linen":return 4210091775;case"magenta":return 4278255615;case"maroon":return 2147483903;case"mediumaquamarine":return 1724754687;case"mediumblue":return 52735;case"mediumorchid":return 3126187007;case"mediumpurple":return 2473647103;case"mediumseagreen":return 1018393087;case"mediumslateblue":return 2070474495;case"mediumspringgreen":return 16423679;case"mediumturquoise":return 1221709055;case"mediumvioletred":return 3340076543;case"midnightblue":return 421097727;case"mintcream":return 4127193855;case"mistyrose":return 4293190143;case"moccasin":return 4293178879;case"navajowhite":return 4292783615;case"navy":return 33023;case"oldlace":return 4260751103;case"olive":return 2155872511;case"olivedrab":return 1804477439;case"orange":return 4289003775;case"orangered":return 4282712319;case"orchid":return 3664828159;case"palegoldenrod":return 4008225535;case"palegreen":return 2566625535;case"paleturquoise":return 2951671551;case"palevioletred":return 3681588223;case"papayawhip":return 4293907967;case"peachpuff":return 4292524543;case"peru":return 3448061951;case"pink":return 4290825215;case"plum":return 3718307327;case"powderblue":return 2967529215;case"purple":return 2147516671;case"rebeccapurple":return 1714657791;case"red":return 4278190335;case"rosybrown":return 3163525119;case"royalblue":return 1097458175;case"saddlebrown":return 2336560127;case"salmon":return 4202722047;case"sandybrown":return 4104413439;case"seagreen":return 780883967;case"seashell":return 4294307583;case"sienna":return 2689740287;case"silver":return 3233857791;case"skyblue":return 2278484991;case"slateblue":return 1784335871;case"slategray":return 1887473919;case"slategrey":return 1887473919;case"snow":return 4294638335;case"springgreen":return 16744447;case"steelblue":return 1182971135;case"tan":return 3535047935;case"teal":return 8421631;case"thistle":return 3636451583;case"tomato":return 4284696575;case"turquoise":return 1088475391;case"violet":return 4001558271;case"wheat":return 4125012991;case"white":return 4294967295;case"whitesmoke":return 4126537215;case"yellow":return 4294902015;case"yellowgreen":return 2597139199}return null}return Yf=n,Yf}var Cb=Ab();const Pb=Si(Cb);var Lb=n=>{if(n==null)return n;var e=Pb(n);if(e!=null)return e=(e<<24|e>>>8)>>>0,e},dS=function(e,t){if(t===void 0&&(t=1),e!=null){if(typeof e=="string"&&Rb(e))return e;var r=Lb(e);if(r!=null){var s=r>>16&255,o=r>>8&255,u=r&255,d=(r>>24&255)/255,f=(d*t).toFixed(2);return"rgba("+s+","+o+","+u+","+f+")"}}},Db={backgroundColor:!0,borderColor:!0,borderTopColor:!0,borderRightColor:!0,borderBottomColor:!0,borderLeftColor:!0,color:!0,shadowColor:!0,textDecorationColor:!0,textShadowColor:!0};function yr(n,e){var t=n;return(e==null||!Cc[e])&&typeof n=="number"?t=n+"px":e!=null&&Db[e]&&(t=dS(n)),t}var xi=!!(typeof window<"u"&&window.document&&window.document.createElement),Ib={},Nb=!xi||window.CSS!=null&&window.CSS.supports!=null&&(window.CSS.supports("text-decoration-line","none")||window.CSS.supports("-webkit-text-decoration-line","none")),Ob="monospace,monospace",B0='-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',Ub={borderColor:["borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"],borderBlockColor:["borderTopColor","borderBottomColor"],borderInlineColor:["borderRightColor","borderLeftColor"],borderRadius:["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],borderStyle:["borderTopStyle","borderRightStyle","borderBottomStyle","borderLeftStyle"],borderBlockStyle:["borderTopStyle","borderBottomStyle"],borderInlineStyle:["borderRightStyle","borderLeftStyle"],borderWidth:["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"],borderBlockWidth:["borderTopWidth","borderBottomWidth"],borderInlineWidth:["borderRightWidth","borderLeftWidth"],insetBlock:["top","bottom"],insetInline:["left","right"],marginBlock:["marginTop","marginBottom"],marginInline:["marginRight","marginLeft"],paddingBlock:["paddingTop","paddingBottom"],paddingInline:["paddingRight","paddingLeft"],overflow:["overflowX","overflowY"],overscrollBehavior:["overscrollBehaviorX","overscrollBehaviorY"],borderBlockStartColor:["borderTopColor"],borderBlockStartStyle:["borderTopStyle"],borderBlockStartWidth:["borderTopWidth"],borderBlockEndColor:["borderBottomColor"],borderBlockEndStyle:["borderBottomStyle"],borderBlockEndWidth:["borderBottomWidth"],borderEndStartRadius:["borderBottomLeftRadius"],borderEndEndRadius:["borderBottomRightRadius"],borderStartStartRadius:["borderTopLeftRadius"],borderStartEndRadius:["borderTopRightRadius"],insetBlockEnd:["bottom"],insetBlockStart:["top"],marginBlockStart:["marginTop"],marginBlockEnd:["marginBottom"],paddingBlockStart:["paddingTop"],paddingBlockEnd:["paddingBottom"]},fS=(n,e)=>{if(!n)return Ib;var t={},r=function(){var d=n[s];if(d==null)return"continue";if(s==="backgroundClip")d==="text"&&(t.backgroundClip=d,t.WebkitBackgroundClip=d);else if(s==="flex")d===-1?(t.flexGrow=0,t.flexShrink=1,t.flexBasis="auto"):t.flex=d;else if(s==="font")t[s]=d.replace("System",B0);else if(s==="fontFamily")if(d.indexOf("System")>-1){var f=d.split(/,\s*/);f[f.indexOf("System")]=B0,t[s]=f.join(",")}else d==="monospace"?t[s]=Ob:t[s]=d;else if(s==="textDecorationLine")Nb?t.textDecorationLine=d:t.textDecoration=d;else if(s==="writingDirection")t.direction=d;else{var h=yr(n[s],s),g=Ub[s];e&&s==="inset"?(n.insetInline==null&&(t.left=h,t.right=h),n.insetBlock==null&&(t.top=h,t.bottom=h)):e&&s==="margin"?(n.marginInline==null&&(t.marginLeft=h,t.marginRight=h),n.marginBlock==null&&(t.marginTop=h,t.marginBottom=h)):e&&s==="padding"?(n.paddingInline==null&&(t.paddingLeft=h,t.paddingRight=h),n.paddingBlock==null&&(t.paddingTop=h,t.paddingBottom=h)):g?g.forEach((m,v)=>{n[m]==null&&(t[m]=h)}):t[s]=h}};for(var s in n)var o=r();return t};function Fb(n,e){for(var t=n.length,r=e^t,s=0,o;t>=4;)o=n.charCodeAt(s)&255|(n.charCodeAt(++s)&255)<<8|(n.charCodeAt(++s)&255)<<16|(n.charCodeAt(++s)&255)<<24,o=(o&65535)*1540483477+(((o>>>16)*1540483477&65535)<<16),o^=o>>>24,o=(o&65535)*1540483477+(((o>>>16)*1540483477&65535)<<16),r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16)^o,t-=4,++s;switch(t){case 3:r^=(n.charCodeAt(s+2)&255)<<16;case 2:r^=(n.charCodeAt(s+1)&255)<<8;case 1:r^=n.charCodeAt(s)&255,r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16)}return r^=r>>>13,r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16),r^=r>>>15,r>>>0}var kb=n=>Fb(n,1).toString(36),Bb=/[A-Z]/g,zb=/^ms-/,Kf={};function Hb(n){return"-"+n.toLowerCase()}function Gb(n){if(n in Kf)return Kf[n];var e=n.replace(Bb,Hb);return Kf[n]=zb.test(e)?"-"+e:e}var Vu={},Wu={},$u={},z0;function hS(){if(z0)return $u;z0=1,Object.defineProperty($u,"__esModule",{value:!0}),$u.default=n;function n(e){return e.charAt(0).toUpperCase()+e.slice(1)}return $u}var H0;function Vb(){if(H0)return Wu;H0=1,Object.defineProperty(Wu,"__esModule",{value:!0}),Wu.default=r;var n=hS(),e=t(n);function t(s){return s&&s.__esModule?s:{default:s}}function r(s,o,u){var d=s[o];if(d&&u.hasOwnProperty(o))for(var f=(0,e.default)(o),h=0;h<d.length;++h){var g=d[h]+f;u[g]||(u[g]=u[o])}return u}return Wu}var Xu={},G0;function Wb(){if(G0)return Xu;G0=1,Object.defineProperty(Xu,"__esModule",{value:!0}),Xu.default=n;function n(e,t,r,s,o){for(var u=0,d=e.length;u<d;++u){var f=e[u](t,r,s,o);if(f)return f}}return Xu}var qu={},V0;function $b(){if(V0)return qu;V0=1,Object.defineProperty(qu,"__esModule",{value:!0}),qu.default=e;function n(t,r){t.indexOf(r)===-1&&t.push(r)}function e(t,r){if(Array.isArray(r))for(var s=0,o=r.length;s<o;++s)n(t,r[s]);else n(t,r)}return qu}var Yu={},W0;function Xb(){if(W0)return Yu;W0=1,Object.defineProperty(Yu,"__esModule",{value:!0}),Yu.default=n;function n(e){return e instanceof Object&&!Array.isArray(e)}return Yu}var $0;function qb(){if($0)return Vu;$0=1,Object.defineProperty(Vu,"__esModule",{value:!0}),Vu.default=h;var n=Vb(),e=f(n),t=Wb(),r=f(t),s=$b(),o=f(s),u=Xb(),d=f(u);function f(g){return g&&g.__esModule?g:{default:g}}function h(g){var m=g.prefixMap,v=g.plugins;return function x(E){for(var T in E){var y=E[T];if((0,d.default)(y))E[T]=x(y);else if(Array.isArray(y)){for(var S=[],w=0,D=y.length;w<D;++w){var L=(0,r.default)(v,T,y[w],E,m);(0,o.default)(S,L||y[w])}S.length>0&&(E[T]=S)}else{var O=(0,r.default)(v,T,y,E,m);O&&(E[T]=O),E=(0,e.default)(m,T,E)}}return E}}return Vu}var Yb=qb();const Kb=Si(Yb);var Ku={},X0;function Zb(){if(X0)return Ku;X0=1,Object.defineProperty(Ku,"__esModule",{value:!0}),Ku.default=n;function n(){return null}return Ku}var jb=Zb();const Jb=Si(jb);var Zu={};function Pc(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Pc=function(t){return typeof t}:Pc=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pc(n)}function Qb(n){return iw(n)||nw(n)||tw(n)||ew()}function ew(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tw(n,e){if(n){if(typeof n=="string")return tp(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(t);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return tp(n,e)}}function nw(n){if(typeof Symbol<"u"&&Symbol.iterator in Object(n))return Array.from(n)}function iw(n){if(Array.isArray(n))return tp(n)}function tp(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function q0(n){return n.filter(function(e,t){return n.lastIndexOf(e)===t})}function pS(n){for(var e=0,t=arguments.length<=1?0:arguments.length-1;e<t;++e){var r=e+1<1||arguments.length<=e+1?void 0:arguments[e+1];for(var s in r){var o=r[s],u=n[s];if(u&&o){if(Array.isArray(u)){n[s]=q0(u.concat(o));continue}if(Array.isArray(o)){n[s]=q0([u].concat(Qb(o)));continue}if(Pc(o)==="object"){n[s]=pS({},u,o);continue}}n[s]=o}}return n}var rw=/-([a-z])/g,aw=/^Ms/g,Zf={};function sw(n){return n[1].toUpperCase()}function mS(n){if(Zf.hasOwnProperty(n))return Zf[n];var e=n.replace(rw,sw).replace(aw,"ms");return Zf[n]=e,e}var ow=/[A-Z]/g,lw=/^ms-/,jf={};function uw(n){return"-"+n.toLowerCase()}function gS(n){if(jf.hasOwnProperty(n))return jf[n];var e=n.replace(ow,uw);return jf[n]=lw.test(e)?"-"+e:e}const cw=Object.freeze(Object.defineProperty({__proto__:null,default:gS},Symbol.toStringTag,{value:"Module"}));function ad(n){return gS(n)}function vS(n,e){return ad(n)+":"+e}function dw(n){var e="";for(var t in n){var r=n[t];typeof r!="string"&&typeof r!="number"||(e&&(e+=";"),e+=vS(t,r))}return e}var fw=/^(Webkit|Moz|O|ms)/;function hw(n){return fw.test(n)}var pw=/-webkit-|-moz-|-ms-/;function mw(n){return typeof n=="string"&&pw.test(n)}var wl={borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Y0=["animationIterationCount","boxFlex","boxFlexGroup","boxOrdinalGroup","columnCount","flex","flexGrow","flexPositive","flexShrink","flexNegative","flexOrder","gridColumn","gridColumnEnd","gridColumnStart","gridRow","gridRowEnd","gridRowStart","lineClamp","order"],K0=["Webkit","ms","Moz","O"];function gw(n,e){return n+e.charAt(0).toUpperCase()+e.slice(1)}for(var Jf=0,vw=Y0.length;Jf<vw;++Jf){var Z0=Y0[Jf];wl[Z0]=!0;for(var Qf=0,_w=K0.length;Qf<_w;++Qf)wl[gw(K0[Qf],Z0)]=!0}for(var yw in wl)wl[ad(yw)]=!0;function Sw(n){return wl.hasOwnProperty(n)}var xw=/^(ms|Webkit|Moz|O)/;function _S(n){var e=n.replace(xw,"");return e.charAt(0).toLowerCase()+e.slice(1)}function Mw(n){return _S(mS(n))}function Ew(n,e){return e.join(";"+ad(n)+":")}var bw=/(-ms-|-webkit-|-moz-|-o-)/g;function ww(n){return typeof n=="string"?n.replace(bw,""):n}const Tw=Object.freeze(Object.defineProperty({__proto__:null,assignStyle:pS,camelCaseProperty:mS,cssifyDeclaration:vS,cssifyObject:dw,hyphenateProperty:ad,isPrefixedProperty:hw,isPrefixedValue:mw,isUnitlessProperty:Sw,normalizeProperty:Mw,resolveArrayValue:Ew,unprefixProperty:_S,unprefixValue:ww},Symbol.toStringTag,{value:"Module"})),yS=sS(Tw);var j0;function Rw(){if(j0)return Zu;j0=1,Object.defineProperty(Zu,"__esModule",{value:!0}),Zu.default=r;var n=yS,e=/cross-fade\(/g,t=["-webkit-",""];function r(s,o){if(typeof o=="string"&&!(0,n.isPrefixedValue)(o)&&o.indexOf("cross-fade(")!==-1)return t.map(function(u){return o.replace(e,u+"cross-fade(")})}return Zu}var Aw=Rw();const Cw=Si(Aw);var ju={},J0;function Pw(){if(J0)return ju;J0=1,Object.defineProperty(ju,"__esModule",{value:!0}),ju.default=t;var n=["-webkit-","-moz-",""],e={"zoom-in":!0,"zoom-out":!0,grab:!0,grabbing:!0};function t(r,s){if(r==="cursor"&&e.hasOwnProperty(s))return n.map(function(o){return o+s})}return ju}var Lw=Pw();const Dw=Si(Lw);var Ju={},Q0;function Iw(){if(Q0)return Ju;Q0=1,Object.defineProperty(Ju,"__esModule",{value:!0}),Ju.default=r;var n=yS,e=/filter\(/g,t=["-webkit-",""];function r(s,o){if(typeof o=="string"&&!(0,n.isPrefixedValue)(o)&&o.indexOf("filter(")!==-1)return t.map(function(u){return o.replace(e,u+"filter(")})}return Ju}var Nw=Iw();const Ow=Si(Nw);var Qu={},eh={},e_;function SS(){return e_||(e_=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=t;var e=/-webkit-|-moz-|-ms-/;function t(r){return typeof r=="string"&&e.test(r)}})(eh)),eh}var t_;function Uw(){if(t_)return Qu;t_=1,Object.defineProperty(Qu,"__esModule",{value:!0}),Qu.default=s;var n=SS(),e=t(n);function t(o){return o&&o.__esModule?o:{default:o}}var r=["-webkit-",""];function s(o,u){if(typeof u=="string"&&!(0,e.default)(u)&&u.indexOf("image-set(")>-1)return r.map(function(d){return u.replace(/image-set\(/g,d+"image-set(")})}return Qu}var Fw=Uw();const kw=Si(Fw);var ec={},n_;function Bw(){if(n_)return ec;n_=1,Object.defineProperty(ec,"__esModule",{value:!0}),ec.default=e;var n={marginBlockStart:["WebkitMarginBefore"],marginBlockEnd:["WebkitMarginAfter"],marginInlineStart:["WebkitMarginStart","MozMarginStart"],marginInlineEnd:["WebkitMarginEnd","MozMarginEnd"],paddingBlockStart:["WebkitPaddingBefore"],paddingBlockEnd:["WebkitPaddingAfter"],paddingInlineStart:["WebkitPaddingStart","MozPaddingStart"],paddingInlineEnd:["WebkitPaddingEnd","MozPaddingEnd"],borderBlockStart:["WebkitBorderBefore"],borderBlockStartColor:["WebkitBorderBeforeColor"],borderBlockStartStyle:["WebkitBorderBeforeStyle"],borderBlockStartWidth:["WebkitBorderBeforeWidth"],borderBlockEnd:["WebkitBorderAfter"],borderBlockEndColor:["WebkitBorderAfterColor"],borderBlockEndStyle:["WebkitBorderAfterStyle"],borderBlockEndWidth:["WebkitBorderAfterWidth"],borderInlineStart:["WebkitBorderStart","MozBorderStart"],borderInlineStartColor:["WebkitBorderStartColor","MozBorderStartColor"],borderInlineStartStyle:["WebkitBorderStartStyle","MozBorderStartStyle"],borderInlineStartWidth:["WebkitBorderStartWidth","MozBorderStartWidth"],borderInlineEnd:["WebkitBorderEnd","MozBorderEnd"],borderInlineEndColor:["WebkitBorderEndColor","MozBorderEndColor"],borderInlineEndStyle:["WebkitBorderEndStyle","MozBorderEndStyle"],borderInlineEndWidth:["WebkitBorderEndWidth","MozBorderEndWidth"]};function e(t,r,s){if(Object.prototype.hasOwnProperty.call(n,t))for(var o=n[t],u=0,d=o.length;u<d;++u)s[o[u]]=r}return ec}var zw=Bw();const Hw=Si(zw);var tc={},i_;function Gw(){if(i_)return tc;i_=1,Object.defineProperty(tc,"__esModule",{value:!0}),tc.default=n;function n(e,t){if(e==="position"&&t==="sticky")return["-webkit-sticky","sticky"]}return tc}var Vw=Gw();const Ww=Si(Vw);var nc={},r_;function $w(){if(r_)return nc;r_=1,Object.defineProperty(nc,"__esModule",{value:!0}),nc.default=r;var n=["-webkit-","-moz-",""],e={maxHeight:!0,maxWidth:!0,width:!0,height:!0,columnWidth:!0,minWidth:!0,minHeight:!0},t={"min-content":!0,"max-content":!0,"fill-available":!0,"fit-content":!0,"contain-floats":!0};function r(s,o){if(e.hasOwnProperty(s)&&t.hasOwnProperty(o))return n.map(function(u){return u+o})}return nc}var Xw=$w();const qw=Si(Xw);var ic={},th={};const Yw=sS(cw);var a_;function Kw(){return a_||(a_=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=s;var e=Yw,t=r(e);function r(o){return o&&o.__esModule?o:{default:o}}function s(o){return(0,t.default)(o)}})(th)),th}var s_;function Zw(){if(s_)return ic;s_=1,Object.defineProperty(ic,"__esModule",{value:!0}),ic.default=g;var n=Kw(),e=u(n),t=SS(),r=u(t),s=hS(),o=u(s);function u(m){return m&&m.__esModule?m:{default:m}}var d={transition:!0,transitionProperty:!0,WebkitTransition:!0,WebkitTransitionProperty:!0,MozTransition:!0,MozTransitionProperty:!0},f={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-"};function h(m,v){if((0,r.default)(m))return m;for(var x=m.split(/,(?![^()]*(?:\([^()]*\))?\))/g),E=0,T=x.length;E<T;++E){var y=x[E],S=[y];for(var w in v){var D=(0,e.default)(w);if(y.indexOf(D)>-1&&D!=="order")for(var L=v[w],O=0,I=L.length;O<I;++O)S.unshift(y.replace(D,f[L[O]]+D))}x[E]=S.join(",")}return x.join(",")}function g(m,v,x,E){if(typeof v=="string"&&d.hasOwnProperty(m)){var T=h(v,E),y=T.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(w){return!/-moz-|-ms-/.test(w)}).join(",");if(m.indexOf("Webkit")>-1)return y;var S=T.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(w){return!/-webkit-|-ms-/.test(w)}).join(",");return m.indexOf("Moz")>-1?S:(x["Webkit"+(0,o.default)(m)]=y,x["Moz"+(0,o.default)(m)]=S,T)}}return ic}var jw=Zw();const Jw=Si(jw);var Gt=["Webkit"],Qw=["Moz"],eT=["Webkit","Moz"],dn=["Webkit","ms"],tT=["Webkit","Moz","ms"];const nT={plugins:[Jb,Cw,Dw,Ow,kw,Hw,Ww,qw,Jw],prefixMap:{appearance:tT,userSelect:eT,textEmphasisPosition:dn,textEmphasis:dn,textEmphasisStyle:dn,textEmphasisColor:dn,boxDecorationBreak:dn,clipPath:Gt,maskImage:dn,maskMode:dn,maskRepeat:dn,maskPosition:dn,maskClip:dn,maskOrigin:dn,maskSize:dn,maskComposite:dn,mask:dn,maskBorderSource:dn,maskBorderMode:dn,maskBorderSlice:dn,maskBorderWidth:dn,maskBorderOutset:dn,maskBorderRepeat:dn,maskBorder:dn,maskType:dn,textDecorationStyle:Gt,textDecorationSkip:Gt,textDecorationLine:Gt,textDecorationColor:Gt,filter:Gt,breakAfter:Gt,breakBefore:Gt,breakInside:Gt,columnCount:Gt,columnFill:Gt,columnGap:Gt,columnRule:Gt,columnRuleColor:Gt,columnRuleStyle:Gt,columnRuleWidth:Gt,columns:Gt,columnSpan:Gt,columnWidth:Gt,backdropFilter:Gt,hyphens:Gt,flowInto:Gt,flowFrom:Gt,regionFragment:Gt,textOrientation:Gt,tabSize:Qw,fontKerning:Gt,textSizeAdjust:Gt}};var iT=Kb(nT),rT=["animationKeyframes"],o_=new Map,aT={},sT=1,oT=3,lT={borderColor:2,borderRadius:2,borderStyle:2,borderWidth:2,display:2,flex:2,inset:2,margin:2,overflow:2,overscrollBehavior:2,padding:2,insetBlock:2.1,insetInline:2.1,marginInline:2.1,marginBlock:2.1,paddingInline:2.1,paddingBlock:2.1,borderBlockStartColor:2.2,borderBlockStartStyle:2.2,borderBlockStartWidth:2.2,borderBlockEndColor:2.2,borderBlockEndStyle:2.2,borderBlockEndWidth:2.2,borderInlineStartColor:2.2,borderInlineStartStyle:2.2,borderInlineStartWidth:2.2,borderInlineEndColor:2.2,borderInlineEndStyle:2.2,borderInlineEndWidth:2.2,borderEndStartRadius:2.2,borderEndEndRadius:2.2,borderStartStartRadius:2.2,borderStartEndRadius:2.2,insetBlockEnd:2.2,insetBlockStart:2.2,insetInlineEnd:2.2,insetInlineStart:2.2,marginBlockStart:2.2,marginBlockEnd:2.2,marginInlineStart:2.2,marginInlineEnd:2.2,paddingBlockStart:2.2,paddingBlockEnd:2.2,paddingInlineStart:2.2,paddingInlineEnd:2.2},np="borderTopLeftRadius",ip="borderTopRightRadius",rp="borderBottomLeftRadius",ap="borderBottomRightRadius",sp="borderLeftColor",op="borderLeftStyle",lp="borderLeftWidth",up="borderRightColor",cp="borderRightStyle",dp="borderRightWidth",fp="right",hp="marginLeft",pp="marginRight",mp="paddingLeft",gp="paddingRight",vp="left",Gc={[np]:ip,[ip]:np,[rp]:ap,[ap]:rp,[sp]:up,[op]:cp,[lp]:dp,[up]:sp,[cp]:op,[dp]:lp,[vp]:fp,[hp]:pp,[pp]:hp,[mp]:gp,[gp]:mp,[fp]:vp},_l={borderStartStartRadius:np,borderStartEndRadius:ip,borderEndStartRadius:rp,borderEndEndRadius:ap,borderInlineStartColor:sp,borderInlineStartStyle:op,borderInlineStartWidth:lp,borderInlineEndColor:up,borderInlineEndStyle:cp,borderInlineEndWidth:dp,insetInlineEnd:fp,insetInlineStart:vp,marginInlineStart:hp,marginInlineEnd:pp,paddingInlineStart:mp,paddingInlineEnd:gp},xS=["clear","float","textAlign"];function uT(n){var e={$$css:!0},t=[];function r(s,o,u){var d=fT(u,o),f=o+d,h=o_.get(f),g;if(h!=null)g=h[0],t.push(h[1]);else{var m=s!==o?f:d;g=Mm("r",s,m);var v=lT[s]||oT,x=hT(g,o,u),E=[x,v];t.push(E),o_.set(f,[g,E])}return g}return Object.keys(n).sort().forEach(s=>{var o=n[s];if(o!=null){var u;if(xS.indexOf(s)>-1){var d=r(s,s,"left"),f=r(s,s,"right");o==="start"?u=[d,f]:o==="end"&&(u=[f,d])}var h=_l[s];if(h!=null){var g=r(s,h,o),m=r(s,Gc[h],o);u=[g,m]}if(s==="transitionProperty"){for(var v=Array.isArray(o)?o:[o],x=[],E=0;E<v.length;E++){var T=v[E];typeof T=="string"&&_l[T]!=null&&x.push(E)}if(x.length>0){var y=[...v],S=[...v];x.forEach(w=>{var D=y[w];if(typeof D=="string"){var L=_l[D],O=Gc[L];y[w]=L,S[w]=O;var I=r(s,s,y),b=r(s,s,S);u=[I,b]}})}}u==null?u=r(s,s,o):e.$$css$localize=!0,e[s]=u}}),[e,t]}function cT(n,e){var t={$$css:!0},r=[],s=n.animationKeyframes,o=gs(n,rT),u=Mm("css",e,JSON.stringify(n)),d="."+u,f;if(s!=null){var h=MS(s),g=h[0],m=h[1];f=g.join(","),r.push(...m)}var v=Gr(Ni(Ni({},o),{},{animationName:f}));return r.push(""+d+v),t[u]=u,[t,[[r,sT]]]}function dT(n,e){var t=n||aT,r={},s={},o=function(){var h=t[u],g=u,m=h;if(!Object.prototype.hasOwnProperty.call(t,u)||h==null)return"continue";xS.indexOf(u)>-1&&(h==="start"?m=e?"right":"left":h==="end"&&(m=e?"left":"right"));var v=_l[u];if(v!=null&&(g=e?Gc[v]:v),u==="transitionProperty"){var x=Array.isArray(h)?h:[h];x.forEach((E,T)=>{if(typeof E=="string"){var y=_l[E];y!=null&&(x[T]=e?Gc[y]:y,m=x.join(" "))}})}r[g]||(s[g]=m),g===u&&(r[g]=!0)};for(var u in t)var d=o();return fS(s,!0)}function fT(n,e){var t=yr(n,e);return typeof t!="string"?JSON.stringify(t||""):t}function hT(n,e,t){var r=[],s="."+n;switch(e){case"animationKeyframes":{var o=MS(t),u=o[0],d=o[1],f=Gr({animationName:u.join(",")});r.push(""+s+f,...d);break}case"placeholderTextColor":{var h=Gr({color:t,opacity:1});r.push(s+"::-webkit-input-placeholder"+h,s+"::-moz-placeholder"+h,s+":-ms-input-placeholder"+h,s+"::placeholder"+h);break}case"pointerEvents":{var g=t;if(t==="auto"||t==="box-only"){if(g="auto!important",t==="box-only"){var m=Gr({pointerEvents:"none"});r.push(s+">*"+m)}}else if((t==="none"||t==="box-none")&&(g="none!important",t==="box-none")){var v=Gr({pointerEvents:"auto"});r.push(s+">*"+v)}var x=Gr({pointerEvents:g});r.push(""+s+x);break}case"scrollbarWidth":{t==="none"&&r.push(s+"::-webkit-scrollbar{display:none}");var E=Gr({scrollbarWidth:t});r.push(""+s+E);break}default:{var T=Gr({[e]:t});r.push(""+s+T);break}}return r}function Gr(n){var e=iT(fS(n)),t=Object.keys(e).map(r=>{var s=e[r],o=Gb(r);return Array.isArray(s)?s.map(u=>o+":"+u).join(";"):o+":"+s}).sort().join(";");return"{"+t+";}"}function Mm(n,e,t){var r=kb(e+t);return n+"-"+r}function pT(n){var e=["-webkit-",""],t=Mm("r","animation",JSON.stringify(n)),r="{"+Object.keys(n).map(o=>{var u=n[o],d=Gr(u);return""+o+d}).join("")+"}",s=e.map(o=>"@"+o+"keyframes "+t+r);return[t,s]}function MS(n){if(typeof n=="number")throw new Error("Invalid CSS keyframes type: "+typeof n);var e=[],t=[],r=Array.isArray(n)?n:[n];return r.forEach(s=>{if(typeof s=="string")e.push(s);else{var o=pT(s),u=o[0],d=o[1];e.push(u),t.push(...d)}}),[e,t]}function nh(n,e,t){if(xi){var r=e??document,s=r.getElementById(n);if(s==null)if(s=document.createElement("style"),s.setAttribute("id",n),typeof t=="string"&&s.appendChild(document.createTextNode(t)),r instanceof ShadowRoot)r.insertBefore(s,r.firstChild);else{var o=r.head;o&&o.insertBefore(s,o.firstChild)}return s.sheet}else return null}var mT=Array.prototype.slice;function ih(n){var e={},t={};if(n!=null){var r;mT.call(n.cssRules).forEach((u,d)=>{var f=u.cssText;if(f.indexOf("stylesheet-group")>-1)r=_T(u),e[r]={start:d,rules:[f]};else{var h=u_(f);h!=null&&(t[h]=!0,e[r].rules.push(f))}})}function s(u,d,f){var h=l_(e),g=h.indexOf(d),m=g+1,v=h[m],x=v!=null&&e[v].start!=null?e[v].start:u.cssRules.length,E=ST(u,f,x);if(E){e[d].start==null&&(e[d].start=x);for(var T=m;T<h.length;T+=1){var y=h[T],S=e[y].start||0;e[y].start=S+1}}return E}var o={getTextContent(){return l_(e).map(u=>{var d=e[u].rules,f=d.shift();return d.sort(),d.unshift(f),d.join(`
`)}).join(`
`)},insert(u,d){var f=Number(d);if(e[f]==null){var h=gT(f);e[f]={start:null,rules:[h]},n!=null&&s(n,f,h)}var g=u_(u);if(g!=null&&t[g]==null&&(t[g]=!0,e[f].rules.push(u),n!=null)){var m=s(n,f,u);m||e[f].rules.pop()}}};return o}function gT(n){return'[stylesheet-group="'+n+'"]{}'}var vT=/["']/g;function _T(n){return Number(n.selectorText.split(vT)[1])}function l_(n){return Object.keys(n).map(Number).sort((e,t)=>e>t?1:-1)}var yT=/\s*([,])\s*/g;function u_(n){var e=n.split("{")[0].trim();return e!==""?e.replace(yT,"$1"):null}function ST(n,e,t){try{return n.insertRule(e,t),!0}catch{return!1}}var xT="react-native-stylesheet",rh=new WeakMap,Xi=[],c_=["html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}","body{margin:0;}","button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}","input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}"];function MT(n,e){e===void 0&&(e=xT);var t;if(xi){var r=document;if(Xi.length===0)t=ih(nh(e)),c_.forEach(d=>{t.insert(d,0)}),rh.set(r,Xi.length),Xi.push(t);else{var s=rh.get(r);if(s==null){var o=Xi[0],u=o!=null?o.getTextContent():"";t=ih(nh(e,r,u)),rh.set(r,Xi.length),Xi.push(t)}else t=Xi[s]}}else Xi.length===0?(t=ih(nh(e)),c_.forEach(d=>{t.insert(d,0)}),Xi.push(t)):t=Xi[0];return{getTextContent(){return t.getTextContent()},id:e,insert(d,f){Xi.forEach(h=>{h.insert(d,f)})}}}var rc={},d_;function ET(){if(d_)return rc;d_=1,Object.defineProperty(rc,"__esModule",{value:!0}),rc.localizeStyle=r;var n=new WeakMap,e="$$css$localize";function t(s,o){var u={};for(var d in s)if(d!==e){var f=s[d];Array.isArray(f)?u[d]=o?f[1]:f[0]:u[d]=f}return u}function r(s,o){if(s[e]!=null){var u=o?1:0;if(n.has(s)){var d=n.get(s),f=d[u];return f==null&&(f=t(s,o),d[u]=f,n.set(s,d)),f}var h=t(s,o),g=new Array(2);return g[u]=h,n.set(s,g),h}return s}return rc}var ah,f_;function bT(){return f_||(f_=1,ah=ET()),ah}var wT=bT(),TT={},ES={height:0,width:0},bS=n=>{var e=n.shadowColor,t=n.shadowOffset,r=n.shadowOpacity,s=n.shadowRadius,o=t||ES,u=o.height,d=o.width,f=yr(d),h=yr(u),g=yr(s||0),m=dS(e||"black",r);if(m!=null&&f!=null&&h!=null&&g!=null)return f+" "+h+" "+g+" "+m},RT=n=>{var e=n.textShadowColor,t=n.textShadowOffset,r=n.textShadowRadius,s=t||ES,o=s.height,u=s.width,d=r||0,f=yr(u),h=yr(o),g=yr(d),m=yr(e,"textShadowColor");if(m&&(o!==0||u!==0||d!==0)&&f!=null&&h!=null&&g!=null)return f+" "+h+" "+g+" "+m},AT=n=>{var e=Object.keys(n)[0],t=n[e];if(e==="matrix"||e==="matrix3d")return e+"("+t.join(",")+")";var r=yr(t,e);return e+"("+r+")"},CT=n=>n.map(AT).join(" "),PT={borderBottomEndRadius:"borderEndEndRadius",borderBottomStartRadius:"borderEndStartRadius",borderTopEndRadius:"borderStartEndRadius",borderTopStartRadius:"borderStartStartRadius",borderEndColor:"borderInlineEndColor",borderEndStyle:"borderInlineEndStyle",borderEndWidth:"borderInlineEndWidth",borderStartColor:"borderInlineStartColor",borderStartStyle:"borderInlineStartStyle",borderStartWidth:"borderInlineStartWidth",end:"insetInlineEnd",marginEnd:"marginInlineEnd",marginHorizontal:"marginInline",marginStart:"marginInlineStart",marginVertical:"marginBlock",paddingEnd:"paddingInlineEnd",paddingHorizontal:"paddingInline",paddingStart:"paddingInlineStart",paddingVertical:"paddingBlock",start:"insetInlineStart"},LT={elevation:!0,overlayColor:!0,resizeMode:!0,tintColor:!0},wS=function(e,t){t===void 0&&(t={});var r=e||TT,s={};if(t.shadow,r.shadowColor!=null||r.shadowOffset!=null||r.shadowOpacity!=null||r.shadowRadius!=null){var o=bS(r);if(o!=null&&s.boxShadow==null){var u=r.boxShadow,d=u?u+", "+o:o;s.boxShadow=d}}if(t.textShadow,r.textShadowColor!=null||r.textShadowOffset!=null||r.textShadowRadius!=null){var f=RT(r);if(f!=null&&s.textShadow==null){var h=r.textShadow,g=h?h+", "+f:f;s.textShadow=g}}for(var m in r)if(!(LT[m]!=null||m==="shadowColor"||m==="shadowOffset"||m==="shadowOpacity"||m==="shadowRadius"||m==="textShadowColor"||m==="textShadowOffset"||m==="textShadowRadius")){var v=r[m],x=PT[m]||m,E=v;!Object.prototype.hasOwnProperty.call(r,m)||x!==m&&r[x]!=null||(x==="aspectRatio"&&typeof E=="number"?s[x]=E.toString():x==="fontVariant"?(Array.isArray(E)&&E.length>0&&(E=E.join(" ")),s[x]=E):x==="textAlignVertical"?r.verticalAlign==null&&(s.verticalAlign=E==="center"?"middle":E):x==="transform"?(Array.isArray(E)&&(E=CT(E)),s.transform=E):s[x]=E)}return s},el={},h_;function DT(){if(h_)return el;h_=1,Object.defineProperty(el,"__esModule",{value:!0}),el.styleq=void 0;var n=new WeakMap,e="$$css";function t(s){var o,u,d;return s!=null&&(o=s.disableCache===!0,u=s.disableMix===!0,d=s.transform),function(){for(var h=[],g="",m=null,v=o?null:n,x=new Array(arguments.length),E=0;E<arguments.length;E++)x[E]=arguments[E];for(;x.length>0;){var T=x.pop();if(!(T==null||T===!1)){if(Array.isArray(T)){for(var y=0;y<T.length;y++)x.push(T[y]);continue}var S=d!=null?d(T):T;if(S.$$css){var w="";if(v!=null&&v.has(S)){var D=v.get(S);D!=null&&(w=D[0],h.push.apply(h,D[1]),v=D[2])}else{var L=[];for(var O in S){var I=S[O];O!==e&&(typeof I=="string"||I===null?h.includes(O)||(h.push(O),v!=null&&L.push(O),typeof I=="string"&&(w+=w?" "+I:I)):console.error("styleq: ".concat(O," typeof ").concat(String(I),' is not "string" or "null".')))}if(v!=null){var b=new WeakMap;v.set(S,[w,L,b]),v=b}}w&&(g=g?w+" "+g:w)}else if(u)m==null&&(m={}),m=Object.assign({},S,m);else{var C=null;for(var V in S){var U=S[V];U!==void 0&&(h.includes(V)||(U!=null&&(m==null&&(m={}),C==null&&(C={}),C[V]=U),h.push(V),v=null))}C!=null&&(m=Object.assign(C,m))}}}var z=[g,m];return z}}var r=t();return el.styleq=r,r.factory=t,el}var IT=DT(),NT=["writingDirection"],TS=new WeakMap,Vc=MT(),RS={shadow:!0,textShadow:!0};function OT(n,e){e===void 0&&(e={});var t=e,r=t.writingDirection,s=gs(t,NT),o=r==="rtl";return IT.styleq.factory({transform(u){var d=TS.get(u);return d!=null?wT.localizeStyle(d,o):wS(u,Ni(Ni({},RS),s))}})(n)}function AS(n){n.forEach(e=>{var t=e[0],r=e[1];Vc!=null&&t.forEach(s=>{Vc.insert(s,r)})})}function UT(n){var e=uT(wS(n,RS)),t=e[0],r=e[1];return AS(r),t}function FT(n,e){var t=cT(n,e),r=t[0],s=t[1];return AS(s),r}var CS={position:"absolute",left:0,right:0,top:0,bottom:0},kT=PS({x:Ni({},CS)}).x;function PS(n){return Object.keys(n).forEach(e=>{var t=n[e];if(t!=null&&t.$$css!==!0){var r;e.indexOf("$raw")>-1?r=FT(t,e.split("$raw")[0]):r=UT(t),TS.set(t,r)}}),n}function BT(n,e){return[n,e]}function zT(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];for(var r=e.flat(1/0),s={},o=0;o<r.length;o++){var u=r[o];u!=null&&typeof u=="object"&&Object.assign(s,u)}return s}function HT(){return{id:Vc.id,textContent:Vc.getTextContent()}}function Jr(n,e){e===void 0&&(e={});var t=e.writingDirection==="rtl",r=OT(n,e);return Array.isArray(r)&&r[1]!=null&&(r[1]=dT(r[1],t)),r}Jr.absoluteFill=kT;Jr.absoluteFillObject=CS;Jr.create=PS;Jr.compose=BT;Jr.flatten=zT;Jr.getSheet=HT;Jr.hairlineWidth=1;xi&&window.__REACT_DEVTOOLS_GLOBAL_HOOK__&&(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle=Jr.flatten);var br=Jr,GT=["aria-activedescendant","accessibilityActiveDescendant","aria-atomic","accessibilityAtomic","aria-autocomplete","accessibilityAutoComplete","aria-busy","accessibilityBusy","aria-checked","accessibilityChecked","aria-colcount","accessibilityColumnCount","aria-colindex","accessibilityColumnIndex","aria-colspan","accessibilityColumnSpan","aria-controls","accessibilityControls","aria-current","accessibilityCurrent","aria-describedby","accessibilityDescribedBy","aria-details","accessibilityDetails","aria-disabled","accessibilityDisabled","aria-errormessage","accessibilityErrorMessage","aria-expanded","accessibilityExpanded","aria-flowto","accessibilityFlowTo","aria-haspopup","accessibilityHasPopup","aria-hidden","accessibilityHidden","aria-invalid","accessibilityInvalid","aria-keyshortcuts","accessibilityKeyShortcuts","aria-label","accessibilityLabel","aria-labelledby","accessibilityLabelledBy","aria-level","accessibilityLevel","aria-live","accessibilityLiveRegion","aria-modal","accessibilityModal","aria-multiline","accessibilityMultiline","aria-multiselectable","accessibilityMultiSelectable","aria-orientation","accessibilityOrientation","aria-owns","accessibilityOwns","aria-placeholder","accessibilityPlaceholder","aria-posinset","accessibilityPosInSet","aria-pressed","accessibilityPressed","aria-readonly","accessibilityReadOnly","aria-required","accessibilityRequired","role","accessibilityRole","aria-roledescription","accessibilityRoleDescription","aria-rowcount","accessibilityRowCount","aria-rowindex","accessibilityRowIndex","aria-rowspan","accessibilityRowSpan","aria-selected","accessibilitySelected","aria-setsize","accessibilitySetSize","aria-sort","accessibilitySort","aria-valuemax","accessibilityValueMax","aria-valuemin","accessibilityValueMin","aria-valuenow","accessibilityValueNow","aria-valuetext","accessibilityValueText","dataSet","focusable","id","nativeID","pointerEvents","style","tabIndex","testID"],VT={},WT=Object.prototype.hasOwnProperty,$T=Array.isArray,XT=/[A-Z]/g;function qT(n){return"-"+n.toLowerCase()}function YT(n){return n.replace(XT,qT)}function Vs(n){return $T(n)?n.join(" "):n}var KT=br.create({auto:{pointerEvents:"auto"},"box-none":{pointerEvents:"box-none"},"box-only":{pointerEvents:"box-only"},none:{pointerEvents:"none"}}),ZT=(n,e,t)=>{e||(e=VT);var r=e,s=r["aria-activedescendant"],o=r.accessibilityActiveDescendant,u=r["aria-atomic"],d=r.accessibilityAtomic,f=r["aria-autocomplete"],h=r.accessibilityAutoComplete,g=r["aria-busy"],m=r.accessibilityBusy,v=r["aria-checked"],x=r.accessibilityChecked,E=r["aria-colcount"],T=r.accessibilityColumnCount,y=r["aria-colindex"],S=r.accessibilityColumnIndex,w=r["aria-colspan"],D=r.accessibilityColumnSpan,L=r["aria-controls"],O=r.accessibilityControls,I=r["aria-current"],b=r.accessibilityCurrent,C=r["aria-describedby"],V=r.accessibilityDescribedBy,U=r["aria-details"],z=r.accessibilityDetails,$=r["aria-disabled"],Y=r.accessibilityDisabled,B=r["aria-errormessage"],se=r.accessibilityErrorMessage,re=r["aria-expanded"],ne=r.accessibilityExpanded,ee=r["aria-flowto"],Z=r.accessibilityFlowTo,j=r["aria-haspopup"],F=r.accessibilityHasPopup,te=r["aria-hidden"],Ae=r.accessibilityHidden,ae=r["aria-invalid"],Me=r.accessibilityInvalid,be=r["aria-keyshortcuts"],Ce=r.accessibilityKeyShortcuts,ye=r["aria-label"],Be=r.accessibilityLabel,ft=r["aria-labelledby"],Ze=r.accessibilityLabelledBy,ht=r["aria-level"],mt=r.accessibilityLevel,lt=r["aria-live"],$t=r.accessibilityLiveRegion,Bt=r["aria-modal"],jt=r.accessibilityModal,bt=r["aria-multiline"],Jt=r.accessibilityMultiline,Nt=r["aria-multiselectable"],Qt=r.accessibilityMultiSelectable,en=r["aria-orientation"],zt=r.accessibilityOrientation,J=r["aria-owns"],mn=r.accessibilityOwns,xt=r["aria-placeholder"],Ct=r.accessibilityPlaceholder,Ie=r["aria-posinset"],Ft=r.accessibilityPosInSet,Qe=r["aria-pressed"],nt=r.accessibilityPressed,k=r["aria-readonly"],R=r.accessibilityReadOnly,oe=r["aria-required"],we=r.accessibilityRequired;r.role,r.accessibilityRole;var Se=r["aria-roledescription"],Le=r.accessibilityRoleDescription,De=r["aria-rowcount"],ve=r.accessibilityRowCount,_e=r["aria-rowindex"],G=r.accessibilityRowIndex,N=r["aria-rowspan"],q=r.accessibilityRowSpan,W=r["aria-selected"],ue=r.accessibilitySelected,pe=r["aria-setsize"],ge=r.accessibilitySetSize,xe=r["aria-sort"],$e=r.accessibilitySort,Ee=r["aria-valuemax"],He=r.accessibilityValueMax,it=r["aria-valuemin"],Fe=r.accessibilityValueMin,vt=r["aria-valuenow"],Xt=r.accessibilityValueNow,Ln=r["aria-valuetext"],ta=r.accessibilityValueText,ar=r.dataSet,na=r.focusable,Ba=r.id,Mi=r.nativeID,ai=r.pointerEvents,ia=r.style,sr=r.tabIndex,ra=r.testID,Ge=gs(r,GT),za=$||Y,zn=cS.propsToAriaRole(e),or=s??o;or!=null&&(Ge["aria-activedescendant"]=or);var ys=u!=null?s:d;ys!=null&&(Ge["aria-atomic"]=ys);var Ht=f??h;Ht!=null&&(Ge["aria-autocomplete"]=Ht);var Ha=g??m;Ha!=null&&(Ge["aria-busy"]=Ha);var aa=v??x;aa!=null&&(Ge["aria-checked"]=aa);var Ga=E??T;Ga!=null&&(Ge["aria-colcount"]=Ga);var Ar=y??S;Ar!=null&&(Ge["aria-colindex"]=Ar);var Va=w??D;Va!=null&&(Ge["aria-colspan"]=Va);var P=L??O;P!=null&&(Ge["aria-controls"]=Vs(P));var X=I??b;X!=null&&(Ge["aria-current"]=X);var de=C??V;de!=null&&(Ge["aria-describedby"]=Vs(de));var le=U??z;le!=null&&(Ge["aria-details"]=le),za===!0&&(Ge["aria-disabled"]=!0,(n==="button"||n==="form"||n==="input"||n==="select"||n==="textarea")&&(Ge.disabled=!0));var ie=B??se;ie!=null&&(Ge["aria-errormessage"]=ie);var Ue=re??ne;Ue!=null&&(Ge["aria-expanded"]=Ue);var We=ee??Z;We!=null&&(Ge["aria-flowto"]=Vs(We));var Oe=j??F;Oe!=null&&(Ge["aria-haspopup"]=Oe);var ke=te??Ae;ke===!0&&(Ge["aria-hidden"]=ke);var Xe=ae??Me;Xe!=null&&(Ge["aria-invalid"]=Xe);var rt=be??Ce;rt!=null&&(Ge["aria-keyshortcuts"]=Vs(rt));var pt=ye??Be;pt!=null&&(Ge["aria-label"]=pt);var qe=ft??Ze;qe!=null&&(Ge["aria-labelledby"]=Vs(qe));var gt=ht??mt;gt!=null&&(Ge["aria-level"]=gt);var kt=lt??$t;kt!=null&&(Ge["aria-live"]=kt==="none"?"off":kt);var Lt=Bt??jt;Lt!=null&&(Ge["aria-modal"]=Lt);var At=bt??Jt;At!=null&&(Ge["aria-multiline"]=At);var qt=Nt??Qt;qt!=null&&(Ge["aria-multiselectable"]=qt);var Ye=en??zt;Ye!=null&&(Ge["aria-orientation"]=Ye);var ln=J??mn;ln!=null&&(Ge["aria-owns"]=Vs(ln));var je=xt??Ct;je!=null&&(Ge["aria-placeholder"]=je);var si=Ie??Ft;si!=null&&(Ge["aria-posinset"]=si);var un=Qe??nt;un!=null&&(Ge["aria-pressed"]=un);var Fi=k??R;Fi!=null&&(Ge["aria-readonly"]=Fi,(n==="input"||n==="select"||n==="textarea")&&(Ge.readOnly=!0));var Xn=oe??we;Xn!=null&&(Ge["aria-required"]=Xn,(n==="input"||n==="select"||n==="textarea")&&(Ge.required=we)),zn!=null&&(Ge.role=zn==="none"?"presentation":zn);var oi=Se??Le;oi!=null&&(Ge["aria-roledescription"]=oi);var yt=De??ve;yt!=null&&(Ge["aria-rowcount"]=yt);var tn=_e??G;tn!=null&&(Ge["aria-rowindex"]=tn);var _n=N??q;_n!=null&&(Ge["aria-rowspan"]=_n);var wt=W??ue;wt!=null&&(Ge["aria-selected"]=wt);var Ot=pe??ge;Ot!=null&&(Ge["aria-setsize"]=Ot);var fn=xe??$e;fn!=null&&(Ge["aria-sort"]=fn);var ki=Ee??He;ki!=null&&(Ge["aria-valuemax"]=ki);var sa=it??Fe;sa!=null&&(Ge["aria-valuemin"]=sa);var Bi=vt??Xt;Bi!=null&&(Ge["aria-valuenow"]=Bi);var Hl=Ln??ta;if(Hl!=null&&(Ge["aria-valuetext"]=Hl),ar!=null){for(var Ss in ar)if(WT.call(ar,Ss)){var Wa=YT(Ss),Gl=ar[Ss];Gl!=null&&(Ge["data-"+Wa]=Gl)}}sr===0||sr==="0"||sr===-1||sr==="-1"?Ge.tabIndex=sr:(na===!1&&(Ge.tabIndex="-1"),n==="a"||n==="button"||n==="input"||n==="select"||n==="textarea"?(na===!1||Y===!0)&&(Ge.tabIndex="-1"):zn==="button"||zn==="checkbox"||zn==="link"||zn==="radio"||zn==="textbox"||zn==="switch"?na!==!1&&(Ge.tabIndex="0"):na===!0&&(Ge.tabIndex="0"));var bo=br([ia,ai&&KT[ai]],Ni({writingDirection:"ltr"},t)),$a=bo[0],wo=bo[1];$a&&(Ge.className=$a),wo&&(Ge.style=wo);var Vl=Ba??Mi;return Vl!=null&&(Ge.id=Vl),ra!=null&&(Ge["data-testid"]=ra),Ge.type==null&&n==="button"&&(Ge.type="button"),Ge},jT=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),p_=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","far","glk","he","iw","khw","ks","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]),m_=new Map;function JT(n){var e=m_.get(n);if(e)return e;var t=!1;if(Intl.Locale)try{var r=new Intl.Locale(n).maximize().script;t=jT.has(r)}catch{var s=n.split("-")[0];t=p_.has(s)}else{var o=n.split("-")[0];t=p_.has(o)}return m_.set(n,t),t}var QT={direction:"ltr",locale:"en-US"},LS=ot.createContext(QT);function Em(n){return JT(n)?"rtl":"ltr"}function e1(n){var e=n.direction,t=n.locale,r=n.children,s=e||t;return s?ho.createElement(LS.Provider,{children:r,value:{direction:t?Em(t):e,locale:t}}):r}function DS(){return ot.useContext(LS)}var bm=(n,e,t)=>{var r;n&&n.constructor===String&&(r=cS.propsToAccessibilityComponent(e));var s=r||n,o=ZT(s,e,t),u=ho.createElement(s,o),d=o.dir?ho.createElement(e1,{children:u,direction:o.dir,locale:o.lang}):u;return d},t1=[];function IS(n){return t1[n-1]}var n1=/^data:/;class mi{static has(e){var t=mi._entries,r=n1.test(e);return r||!!t[e]}static add(e){var t=mi._entries,r=Date.now();t[e]?(t[e].lastUsedTimestamp=r,t[e].refCount+=1):t[e]={lastUsedTimestamp:r,refCount:1}}static remove(e){var t=mi._entries;t[e]&&(t[e].refCount-=1),mi._cleanUpIfNeeded()}static _cleanUpIfNeeded(){var e=mi._entries,t=Object.keys(e);if(t.length+1>mi._maximumEntries){var r,s;t.forEach(o=>{var u=e[o];(!s||u.lastUsedTimestamp<s.lastUsedTimestamp)&&u.refCount===0&&(r=o,s=u)}),r&&delete e[r]}}}mi._maximumEntries=256;mi._entries={};var sh=0,ac={},Sr={abort(n){var e=ac[""+n];e&&(e.onerror=null,e.onload=null,e=null,delete ac[""+n])},getSize(n,e,t){var r=!1,s=setInterval(u,16),o=Sr.load(n,u,d);function u(){var f=ac[""+o];if(f){var h=f.naturalHeight,g=f.naturalWidth;h&&g&&(e(g,h),r=!0)}r&&(Sr.abort(o),clearInterval(s))}function d(){typeof t=="function"&&t(),Sr.abort(o),clearInterval(s)}},has(n){return mi.has(n)},load(n,e,t){sh+=1;var r=new window.Image;return r.onerror=t,r.onload=s=>{var o=()=>e({nativeEvent:s});typeof r.decode=="function"?r.decode().then(o,o):setTimeout(o,0)},r.src=n,ac[""+sh]=r,sh},prefetch(n){return new Promise((e,t)=>{Sr.load(n,()=>{mi.add(n),mi.remove(n),e()},t)})},queryCache(n){var e={};return n.forEach(t=>{mi.has(t)&&(e[t]="disk/memory")}),Promise.resolve(e)}},oh,g_;function i1(){if(g_)return oh;g_=1;function n(e,t){for(var r=arguments.length,s=new Array(r>2?r-2:0),o=2;o<r;o++)s[o-2]=arguments[o];if(!e){var u;if(t===void 0)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=0;u=new Error(t.replace(/%s/g,function(){return String(s[d++])})),u.name="Invariant Violation"}throw u.framesToPop=1,u}}return oh=n,oh}var r1=i1();const v_=Si(r1);var us={window:{fontScale:1,height:0,scale:1,width:0},screen:{fontScale:1,height:0,scale:1,width:0}},Aa={},__=xi;function NS(){if(xi){var n=window,e,t;if(n.visualViewport){var r=n.visualViewport;e=Math.round(r.height*r.scale),t=Math.round(r.width*r.scale)}else{var s=n.document.documentElement;e=s.clientHeight,t=s.clientWidth}us.window={fontScale:1,height:e,scale:n.devicePixelRatio||1,width:t},us.screen={fontScale:1,height:n.screen.height,scale:n.devicePixelRatio||1,width:n.screen.width}}}function y_(){NS(),Array.isArray(Aa.change)&&Aa.change.forEach(n=>n(us))}class S_{static get(e){return __&&(__=!1,NS()),v_(us[e],"No dimension set for key "+e),us[e]}static set(e){e&&(xi?v_(!1,"Dimensions cannot be set in the browser"):(e.screen!=null&&(us.screen=e.screen),e.window!=null&&(us.window=e.window)))}static addEventListener(e,t){return Aa[e]=Aa[e]||[],Aa[e].push(t),{remove:()=>{this.removeEventListener(e,t)}}}static removeEventListener(e,t){Array.isArray(Aa[e])&&(Aa[e]=Aa[e].filter(r=>r!==t))}}xi&&(window.visualViewport?window.visualViewport.addEventListener("resize",y_,!1):window.addEventListener("resize",y_,!1));class yl{static get(){return S_.get("window").scale}static getFontScale(){return S_.get("window").fontScale||yl.get()}static getPixelSizeForLayoutSize(e){return Math.round(e*yl.get())}static roundToNearestPixel(e){var t=yl.get();return Math.round(e*t)/t}}var Wc=ot.createContext(!1),OS={children:!0,dataSet:!0,dir:!0,id:!0,ref:!0,suppressHydrationWarning:!0,tabIndex:!0,testID:!0,focusable:!0,nativeID:!0},US={"aria-activedescendant":!0,"aria-atomic":!0,"aria-autocomplete":!0,"aria-busy":!0,"aria-checked":!0,"aria-colcount":!0,"aria-colindex":!0,"aria-colspan":!0,"aria-controls":!0,"aria-current":!0,"aria-describedby":!0,"aria-details":!0,"aria-disabled":!0,"aria-errormessage":!0,"aria-expanded":!0,"aria-flowto":!0,"aria-haspopup":!0,"aria-hidden":!0,"aria-invalid":!0,"aria-keyshortcuts":!0,"aria-label":!0,"aria-labelledby":!0,"aria-level":!0,"aria-live":!0,"aria-modal":!0,"aria-multiline":!0,"aria-multiselectable":!0,"aria-orientation":!0,"aria-owns":!0,"aria-placeholder":!0,"aria-posinset":!0,"aria-pressed":!0,"aria-readonly":!0,"aria-required":!0,role:!0,"aria-roledescription":!0,"aria-rowcount":!0,"aria-rowindex":!0,"aria-rowspan":!0,"aria-selected":!0,"aria-setsize":!0,"aria-sort":!0,"aria-valuemax":!0,"aria-valuemin":!0,"aria-valuenow":!0,"aria-valuetext":!0,accessibilityActiveDescendant:!0,accessibilityAtomic:!0,accessibilityAutoComplete:!0,accessibilityBusy:!0,accessibilityChecked:!0,accessibilityColumnCount:!0,accessibilityColumnIndex:!0,accessibilityColumnSpan:!0,accessibilityControls:!0,accessibilityCurrent:!0,accessibilityDescribedBy:!0,accessibilityDetails:!0,accessibilityDisabled:!0,accessibilityErrorMessage:!0,accessibilityExpanded:!0,accessibilityFlowTo:!0,accessibilityHasPopup:!0,accessibilityHidden:!0,accessibilityInvalid:!0,accessibilityKeyShortcuts:!0,accessibilityLabel:!0,accessibilityLabelledBy:!0,accessibilityLevel:!0,accessibilityLiveRegion:!0,accessibilityModal:!0,accessibilityMultiline:!0,accessibilityMultiSelectable:!0,accessibilityOrientation:!0,accessibilityOwns:!0,accessibilityPlaceholder:!0,accessibilityPosInSet:!0,accessibilityPressed:!0,accessibilityReadOnly:!0,accessibilityRequired:!0,accessibilityRole:!0,accessibilityRoleDescription:!0,accessibilityRowCount:!0,accessibilityRowIndex:!0,accessibilityRowSpan:!0,accessibilitySelected:!0,accessibilitySetSize:!0,accessibilitySort:!0,accessibilityValueMax:!0,accessibilityValueMin:!0,accessibilityValueNow:!0,accessibilityValueText:!0},FS={onClick:!0,onAuxClick:!0,onContextMenu:!0,onGotPointerCapture:!0,onLostPointerCapture:!0,onPointerCancel:!0,onPointerDown:!0,onPointerEnter:!0,onPointerMove:!0,onPointerLeave:!0,onPointerOut:!0,onPointerOver:!0,onPointerUp:!0},kS={onBlur:!0,onFocus:!0},BS={onKeyDown:!0,onKeyDownCapture:!0,onKeyUp:!0,onKeyUpCapture:!0},zS={onMouseDown:!0,onMouseEnter:!0,onMouseLeave:!0,onMouseMove:!0,onMouseOver:!0,onMouseOut:!0,onMouseUp:!0},HS={onTouchCancel:!0,onTouchCancelCapture:!0,onTouchEnd:!0,onTouchEndCapture:!0,onTouchMove:!0,onTouchMoveCapture:!0,onTouchStart:!0,onTouchStartCapture:!0},GS={style:!0};function VS(n,e){var t={};for(var r in n)n.hasOwnProperty(r)&&e[r]===!0&&(t[r]=n[r]);return t}var $c=xi?ot.useLayoutEffect:ot.useEffect,_p=n=>{if(n!=null){var e=n.nodeType===1;if(e&&typeof n.getBoundingClientRect=="function")return n.getBoundingClientRect()}},Sl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexOrder:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,gridRow:!0,gridRowEnd:!0,gridRowGap:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnGap:!0,gridColumnStart:!0,lineClamp:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0,scale:!0,scaleX:!0,scaleY:!0,scaleZ:!0,shadowOpacity:!0},a1=["ms","Moz","O","Webkit"],s1=(n,e)=>n+e.charAt(0).toUpperCase()+e.substring(1);Object.keys(Sl).forEach(n=>{a1.forEach(e=>{Sl[s1(e,n)]=Sl[n]})});function o1(n,e,t){var r=e==null||typeof e=="boolean"||e==="";return r?"":!t&&typeof e=="number"&&e!==0&&!(Sl.hasOwnProperty(n)&&Sl[n])?e+"px":(""+e).trim()}function l1(n,e){var t=n.style;for(var r in e)if(e.hasOwnProperty(r)){var s=r.indexOf("--")===0,o=o1(r,e[r],s);r==="float"&&(r="cssFloat"),s?t.setProperty(r,o):t[r]=o}}var x_=n=>{var e=n.offsetHeight,t=n.offsetWidth,r=n.offsetLeft,s=n.offsetTop;for(n=n.offsetParent;n&&n.nodeType===1;)r+=n.offsetLeft+n.clientLeft-n.scrollLeft,s+=n.offsetTop+n.clientTop-n.scrollTop,n=n.offsetParent;return s-=window.scrollY,r-=window.scrollX,{width:t,height:e,top:s,left:r}},M_=(n,e,t)=>{var r=e||n&&n.parentNode;n&&r&&setTimeout(()=>{if(n.isConnected&&r.isConnected){var s=x_(r),o=x_(n),u=o.height,d=o.left,f=o.top,h=o.width,g=d-s.left,m=f-s.top;t(g,m,h,u,d,f)}},0)},u1={A:!0,BODY:!0,INPUT:!0,SELECT:!0,TEXTAREA:!0},Lc={blur(n){try{n.blur()}catch{}},focus(n){try{var e=n.nodeName;n.getAttribute("tabIndex")==null&&n.isContentEditable!==!0&&u1[e]==null&&n.setAttribute("tabIndex","-1"),n.focus()}catch{}},measure(n,e){M_(n,null,e)},measureInWindow(n,e){n&&setTimeout(()=>{var t=_p(n),r=t.height,s=t.left,o=t.top,u=t.width;e(s,o,u,r)},0)},measureLayout(n,e,t,r){M_(n,e,r)},updateView(n,e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var r=e[t];switch(t){case"style":{l1(n,r);break}case"class":case"className":{n.setAttribute("class",r);break}case"text":case"value":n.value=r;break;default:n.setAttribute(t,r)}}},configureNextLayoutAnimation(n,e){e()},setLayoutAnimationEnabledExperimental(){}},yp="__reactLayoutHandler",lh=null;function c1(){return xi&&typeof window.ResizeObserver<"u"&&lh==null&&(lh=new window.ResizeObserver(function(n){n.forEach(e=>{var t=e.target,r=t[yp];typeof r=="function"&&Lc.measure(t,(s,o,u,d,f,h)=>{var g={nativeEvent:{layout:{x:s,y:o,width:u,height:d,left:f,top:h}},timeStamp:Date.now()};Object.defineProperty(g.nativeEvent,"target",{enumerable:!0,get:()=>e.target}),r(g)})})})),lh}function WS(n,e){var t=c1();$c(()=>{var r=n.current;r!=null&&(r[yp]=e)},[n,e]),$c(()=>{var r=n.current;return r!=null&&t!=null&&(typeof r[yp]=="function"?t.observe(r):t.unobserve(r)),()=>{r!=null&&t!=null&&t.unobserve(r)}},[n,t])}function d1(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(s){e.forEach(o=>{if(o!=null){if(typeof o=="function"){o(s);return}if(typeof o=="object"){o.current=s;return}console.error("mergeRefs cannot handle Refs of type boolean, number or string, received ref "+String(o))}})}}function wm(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return ot.useMemo(()=>d1(...e),[...e])}var E_=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():Object.freeze({});function Sp(n){var e=ot.useRef(E_);return e.current===E_&&(e.current=n()),e.current}function $S(n){n.pointerEvents,n.style;var e=Sp(()=>t=>{t!=null&&(t.measure=r=>Lc.measure(t,r),t.measureLayout=(r,s,o)=>Lc.measureLayout(t,r,o,s),t.measureInWindow=r=>Lc.measureInWindow(t,r))});return e}var b_=()=>{},f1={},h1=[];function w_(n){return n>20?n%20:n}function XS(n,e){var t,r=!1,s,o,u=n.changedTouches,d=n.type,f=n.metaKey===!0,h=n.shiftKey===!0,g=u&&u[0].force||0,m=w_(u&&u[0].identifier||0),v=u&&u[0].clientX||n.clientX,x=u&&u[0].clientY||n.clientY,E=u&&u[0].pageX||n.pageX,T=u&&u[0].pageY||n.pageY,y=typeof n.preventDefault=="function"?n.preventDefault.bind(n):b_,S=n.timeStamp;function w(b){return Array.prototype.slice.call(b).map(C=>({force:C.force,identifier:w_(C.identifier),get locationX(){return O(C.clientX)},get locationY(){return I(C.clientY)},pageX:C.pageX,pageY:C.pageY,target:C.target,timestamp:S}))}if(u!=null)s=w(u),o=w(n.touches);else{var D=[{force:g,identifier:m,get locationX(){return O(v)},get locationY(){return I(x)},pageX:E,pageY:T,target:n.target,timestamp:S}];s=D,o=d==="mouseup"||d==="dragstart"?h1:D}var L={bubbles:!0,cancelable:!0,currentTarget:null,defaultPrevented:n.defaultPrevented,dispatchConfig:f1,eventPhase:n.eventPhase,isDefaultPrevented(){return n.defaultPrevented},isPropagationStopped(){return r},isTrusted:n.isTrusted,nativeEvent:{altKey:!1,ctrlKey:!1,metaKey:f,shiftKey:h,changedTouches:s,force:g,identifier:m,get locationX(){return O(v)},get locationY(){return I(x)},pageX:E,pageY:T,target:n.target,timestamp:S,touches:o,type:d},persist:b_,preventDefault:y,stopPropagation(){r=!0},target:n.target,timeStamp:S,touchHistory:e.touchHistory};function O(b){if(t=t||_p(L.currentTarget),t)return b-t.left}function I(b){if(t=t||_p(L.currentTarget),t)return b-t.top}return L}var p1="mousedown",m1="mousemove",g1="mouseup",v1="dragstart",_1="touchstart",y1="touchmove",S1="touchend",x1="touchcancel",M1="scroll",E1="select",b1="selectionchange";function qS(n){return n===_1||n===p1}function YS(n){return n===y1||n===m1}function KS(n){return n===S1||n===g1||ZS(n)}function ZS(n){return n===x1||n===v1}function w1(n){return n===M1}function T1(n){return n===E1||n===b1}function R1(){var n=window.getSelection(),e=n.toString(),t=n.anchorNode,r=n.focusNode,s=t&&t.nodeType===window.Node.TEXT_NODE||r&&r.nodeType===window.Node.TEXT_NODE;return e.length>=1&&e!==`
`&&s}var jS="__reactResponderId";function A1(n){if(n.type==="selectionchange"){var e=window.getSelection().anchorNode;return T_(e)}else{var t=n.composedPath!=null?n.composedPath():T_(n.target);return t}}function T_(n){for(var e=[];n!=null&&n!==document.body;)e.push(n),n=n.parentNode;return e}function C1(n){return n!=null?n[jS]:null}function P1(n,e){n!=null&&(n[jS]=e)}function L1(n){for(var e=[],t=[],r=A1(n),s=0;s<r.length;s++){var o=r[s],u=C1(o);u!=null&&(e.push(u),t.push(o))}return{idPath:e,nodePath:t}}function D1(n,e){var t=n.length,r=e.length;if(t===0||r===0||n[t-1]!==e[r-1])return null;var s=n[0],o=0,u=e[0],d=0;t-r>0&&(o=t-r,s=n[o],t=r),r-t>0&&(d=r-t,u=e[d],r=t);for(var f=t;f--;){if(s===u)return s;s=n[o++],u=e[d++]}return null}function I1(n,e){if(!e||e.length===0)return!1;for(var t=0;t<e.length;t++){var r=e[t].target;if(r!=null&&n.contains(r))return!0}return!1}function N1(n){return n.type==="selectionchange"?R1():n.type==="select"}function O1(n){var e=n.altKey,t=n.button,r=n.buttons,s=n.ctrlKey,o=n.type,u=o==="touchstart"||o==="touchmove",d=o==="mousedown"&&(t===0||r===1),f=o==="mousemove"&&r===1,h=e===!1&&s===!1;return!!(u||d&&h||f&&h)}var R_=20;function Ui(n){return n.timeStamp||n.timestamp}function U1(n){return{touchActive:!0,startPageX:n.pageX,startPageY:n.pageY,startTimeStamp:Ui(n),currentPageX:n.pageX,currentPageY:n.pageY,currentTimeStamp:Ui(n),previousPageX:n.pageX,previousPageY:n.pageY,previousTimeStamp:Ui(n)}}function F1(n,e){n.touchActive=!0,n.startPageX=e.pageX,n.startPageY=e.pageY,n.startTimeStamp=Ui(e),n.currentPageX=e.pageX,n.currentPageY=e.pageY,n.currentTimeStamp=Ui(e),n.previousPageX=e.pageX,n.previousPageY=e.pageY,n.previousTimeStamp=Ui(e)}function Tm(n){var e=n.identifier;return e==null&&console.error("Touch object is missing identifier."),e}function k1(n,e){var t=Tm(n),r=e.touchBank[t];r?F1(r,n):e.touchBank[t]=U1(n),e.mostRecentTimeStamp=Ui(n)}function B1(n,e){var t=e.touchBank[Tm(n)];t?(t.touchActive=!0,t.previousPageX=t.currentPageX,t.previousPageY=t.currentPageY,t.previousTimeStamp=t.currentTimeStamp,t.currentPageX=n.pageX,t.currentPageY=n.pageY,t.currentTimeStamp=Ui(n),e.mostRecentTimeStamp=Ui(n)):console.warn(`Cannot record touch move without a touch start.
`,"Touch Move: "+JS(n)+`
`,"Touch Bank: "+QS(e))}function z1(n,e){var t=e.touchBank[Tm(n)];t?(t.touchActive=!1,t.previousPageX=t.currentPageX,t.previousPageY=t.currentPageY,t.previousTimeStamp=t.currentTimeStamp,t.currentPageX=n.pageX,t.currentPageY=n.pageY,t.currentTimeStamp=Ui(n),e.mostRecentTimeStamp=Ui(n)):console.warn(`Cannot record touch end without a touch start.
`,"Touch End: "+JS(n)+`
`,"Touch Bank: "+QS(e))}function JS(n){return JSON.stringify({identifier:n.identifier,pageX:n.pageX,pageY:n.pageY,timestamp:Ui(n)})}function QS(n){var e=n.touchBank,t=JSON.stringify(e.slice(0,R_));return e.length>R_&&(t+=" (original size: "+e.length+")"),t}class H1{constructor(){this._touchHistory={touchBank:[],numberActiveTouches:0,indexOfSingleActiveTouch:-1,mostRecentTimeStamp:0}}recordTouchTrack(e,t){var r=this._touchHistory;if(YS(e))t.changedTouches.forEach(d=>B1(d,r));else if(qS(e))t.changedTouches.forEach(d=>k1(d,r)),r.numberActiveTouches=t.touches.length,r.numberActiveTouches===1&&(r.indexOfSingleActiveTouch=t.touches[0].identifier);else if(KS(e)&&(t.changedTouches.forEach(d=>z1(d,r)),r.numberActiveTouches=t.touches.length,r.numberActiveTouches===1))for(var s=r.touchBank,o=0;o<s.length;o++){var u=s[o];if(u!=null&&u.touchActive){r.indexOfSingleActiveTouch=o;break}}}get touchHistory(){return this._touchHistory}}var G1={},A_=["onStartShouldSetResponderCapture","onStartShouldSetResponder",{bubbles:!0}],C_=["onMoveShouldSetResponderCapture","onMoveShouldSetResponder",{bubbles:!0}],V1=["onScrollShouldSetResponderCapture","onScrollShouldSetResponder",{bubbles:!1}],W1={touchstart:A_,mousedown:A_,touchmove:C_,mousemove:C_,scroll:V1},xp={id:null,idPath:null,node:null},Xc=new Map,Ra=!1,gr=0,_r={id:null,node:null,idPath:null},Mp=new H1;function Tl(n){_r=n}function Rl(n){var e=Xc.get(n);return e??G1}function uh(n){var e=n.type,t=n.target;if(e==="touchstart"&&(Ra=!0),(e==="touchmove"||gr>1)&&(Ra=!1),!(e==="mousedown"&&Ra||e==="mousemove"&&Ra||e==="mousemove"&&gr<1)){if(Ra&&e==="mouseup"){gr===0&&(Ra=!1);return}var r=qS(e)&&O1(n),s=YS(e),o=KS(e),u=w1(e),d=T1(e),f=XS(n,Mp);(r||s||o)&&(n.touches?gr=n.touches.length:r?gr=1:o&&(gr=0),Mp.recordTouchTrack(e,f.nativeEvent));var h=L1(n),g=!1,m;if(r||s||u&&gr>0){var v=_r.idPath,x=h.idPath;if(v!=null&&x!=null){var E=D1(v,x);if(E!=null){var T=x.indexOf(E),y=T+(E===_r.id?1:0);h={idPath:x.slice(y),nodePath:h.nodePath.slice(y)}}else h=null}h!=null&&(m=$1(h,n,f),m!=null&&(X1(f,m),g=!0))}if(_r.id!=null&&_r.node!=null){var S=_r,w=S.id,D=S.node,L=Rl(w),O=L.onResponderStart,I=L.onResponderMove,b=L.onResponderEnd,C=L.onResponderRelease,V=L.onResponderTerminate,U=L.onResponderTerminationRequest;if(f.bubbles=!1,f.cancelable=!1,f.currentTarget=D,r)O!=null&&(f.dispatchConfig.registrationName="onResponderStart",O(f));else if(s)I!=null&&(f.dispatchConfig.registrationName="onResponderMove",I(f));else{var z=ZS(e)||e==="contextmenu"||e==="blur"&&t===window||e==="blur"&&t.contains(D)&&n.relatedTarget!==D||u&&gr===0||u&&t.contains(D)&&t!==D||d&&N1(n),$=o&&!z&&!I1(D,n.touches);if(o&&b!=null&&(f.dispatchConfig.registrationName="onResponderEnd",b(f)),$&&(C!=null&&(f.dispatchConfig.registrationName="onResponderRelease",C(f)),Tl(xp)),z){var Y=!0;(e==="contextmenu"||e==="scroll"||e==="selectionchange")&&(g?Y=!1:U!=null&&(f.dispatchConfig.registrationName="onResponderTerminationRequest",U(f)===!1&&(Y=!1))),Y&&(V!=null&&(f.dispatchConfig.registrationName="onResponderTerminate",V(f)),Tl(xp),Ra=!1,gr=0)}}}}}function $1(n,e,t){var r=W1[e.type];if(r!=null){for(var s=n.idPath,o=n.nodePath,u=r[0],d=r[1],f=r[2].bubbles,h=function(I,b,C){var V=Rl(I),U=V[C];if(U!=null&&(t.currentTarget=b,U(t)===!0)){var z=s.slice(s.indexOf(I));return{id:I,node:b,idPath:z}}},g=s.length-1;g>=0;g--){var m=s[g],v=o[g],x=h(m,v,u);if(x!=null)return x;if(t.isPropagationStopped()===!0)return}if(f)for(var E=0;E<s.length;E++){var T=s[E],y=o[E],S=h(T,y,d);if(S!=null)return S;if(t.isPropagationStopped()===!0)return}else{var w=s[0],D=o[0],L=e.target;if(L===D)return h(w,D,d)}}}function X1(n,e){var t=_r,r=t.id,s=t.node,o=e.id,u=e.node,d=Rl(o),f=d.onResponderGrant,h=d.onResponderReject;if(n.bubbles=!1,n.cancelable=!1,n.currentTarget=u,r==null)f!=null&&(n.currentTarget=u,n.dispatchConfig.registrationName="onResponderGrant",f(n)),Tl(e);else{var g=Rl(r),m=g.onResponderTerminate,v=g.onResponderTerminationRequest,x=!0;v!=null&&(n.currentTarget=s,n.dispatchConfig.registrationName="onResponderTerminationRequest",v(n)===!1&&(x=!1)),x?(m!=null&&(n.currentTarget=s,n.dispatchConfig.registrationName="onResponderTerminate",m(n)),f!=null&&(n.currentTarget=u,n.dispatchConfig.registrationName="onResponderGrant",f(n)),Tl(e)):h!=null&&(n.currentTarget=u,n.dispatchConfig.registrationName="onResponderReject",h(n))}}var q1=["blur","scroll"],Y1=["mousedown","mousemove","mouseup","dragstart","touchstart","touchmove","touchend","touchcancel","contextmenu","select","selectionchange"];function K1(){xi&&window.__reactResponderSystemActive==null&&(window.addEventListener("blur",uh),Y1.forEach(n=>{document.addEventListener(n,uh)}),q1.forEach(n=>{document.addEventListener(n,uh,!0)}),window.__reactResponderSystemActive=!0)}function Z1(n,e,t){P1(e,n),Xc.set(n,t)}function P_(n){_r.id===n&&j1(),Xc.has(n)&&Xc.delete(n)}function j1(){var n=_r,e=n.id,t=n.node;if(e!=null&&t!=null){var r=Rl(e),s=r.onResponderTerminate;if(s!=null){var o=XS({},Mp);o.currentTarget=t,s(o)}Tl(xp)}Ra=!1,gr=0}function J1(){return _r.node}var Q1={},eR=0;function tR(n){var e=ot.useRef(null);return e.current==null&&(e.current=n()),e.current}function ex(n,e){e===void 0&&(e=Q1);var t=tR(()=>eR++),r=ot.useRef(!1);ot.useEffect(()=>(K1(),()=>{P_(t)}),[t]),ot.useEffect(()=>{var s=e,o=s.onMoveShouldSetResponder,u=s.onMoveShouldSetResponderCapture,d=s.onScrollShouldSetResponder,f=s.onScrollShouldSetResponderCapture,h=s.onSelectionChangeShouldSetResponder,g=s.onSelectionChangeShouldSetResponderCapture,m=s.onStartShouldSetResponder,v=s.onStartShouldSetResponderCapture,x=o!=null||u!=null||d!=null||f!=null||h!=null||g!=null||m!=null||v!=null,E=n.current;x?(Z1(t,E,e),r.current=!0):r.current&&(P_(t),r.current=!1)},[e,n,t]),ot.useDebugValue({isResponder:n.current===J1()}),ot.useDebugValue(e)}var nR=["hrefAttrs","onLayout","onMoveShouldSetResponder","onMoveShouldSetResponderCapture","onResponderEnd","onResponderGrant","onResponderMove","onResponderReject","onResponderRelease","onResponderStart","onResponderTerminate","onResponderTerminationRequest","onScrollShouldSetResponder","onScrollShouldSetResponderCapture","onSelectionChangeShouldSetResponder","onSelectionChangeShouldSetResponderCapture","onStartShouldSetResponder","onStartShouldSetResponderCapture"],iR=Object.assign({},OS,US,FS,kS,BS,zS,HS,GS,{href:!0,lang:!0,onScroll:!0,onWheel:!0,pointerEvents:!0}),rR=n=>VS(n,iR),Al=ot.forwardRef((n,e)=>{var t=n.hrefAttrs,r=n.onLayout,s=n.onMoveShouldSetResponder,o=n.onMoveShouldSetResponderCapture,u=n.onResponderEnd,d=n.onResponderGrant,f=n.onResponderMove,h=n.onResponderReject,g=n.onResponderRelease,m=n.onResponderStart,v=n.onResponderTerminate,x=n.onResponderTerminationRequest,E=n.onScrollShouldSetResponder,T=n.onScrollShouldSetResponderCapture,y=n.onSelectionChangeShouldSetResponder,S=n.onSelectionChangeShouldSetResponderCapture,w=n.onStartShouldSetResponder,D=n.onStartShouldSetResponderCapture,L=gs(n,nR),O=ot.useContext(Wc),I=ot.useRef(null),b=DS(),C=b.direction;WS(I,r),ex(I,{onMoveShouldSetResponder:s,onMoveShouldSetResponderCapture:o,onResponderEnd:u,onResponderGrant:d,onResponderMove:f,onResponderReject:h,onResponderRelease:g,onResponderStart:m,onResponderTerminate:v,onResponderTerminationRequest:x,onScrollShouldSetResponder:E,onScrollShouldSetResponderCapture:T,onSelectionChangeShouldSetResponder:y,onSelectionChangeShouldSetResponderCapture:S,onStartShouldSetResponder:w,onStartShouldSetResponderCapture:D});var V="div",U=n.lang!=null?Em(n.lang):null,z=n.dir||U,$=z||C,Y=rR(L);if(Y.dir=z,Y.style=[L_.view$raw,O&&L_.inline,n.style],n.href!=null&&(V="a",t!=null)){var B=t.download,se=t.rel,re=t.target;B!=null&&(Y.download=B),se!=null&&(Y.rel=se),typeof re=="string"&&(Y.target=re.charAt(0)!=="_"?"_"+re:re)}var ne=$S(Y),ee=wm(I,ne,e);return Y.ref=ee,bm(V,Y,{writingDirection:$})});Al.displayName="View";var L_=br.create({view$raw:{alignItems:"stretch",backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",display:"flex",flexBasis:"auto",flexDirection:"column",flexShrink:0,listStyle:"none",margin:0,minHeight:0,minWidth:0,padding:0,position:"relative",textDecoration:"none",zIndex:0},inline:{display:"inline-flex"}}),aR=["aria-label","accessibilityLabel","blurRadius","defaultSource","draggable","onError","onLayout","onLoad","onLoadEnd","onLoadStart","pointerEvents","source","style"],sR="ERRORED",ch="LOADED",D_="LOADING",oR="IDLE",lR=0,uR=/^(data:image\/svg\+xml;utf8,)(.*)/;function cR(n,e){return n&&e!=null?ot.createElement("svg",{style:{position:"absolute",height:0,visibility:"hidden",width:0}},ot.createElement("defs",null,ot.createElement("filter",{id:"tint-"+e,suppressHydrationWarning:!0},ot.createElement("feFlood",{floodColor:""+n,key:n}),ot.createElement("feComposite",{in2:"SourceAlpha",operator:"in"})))):null}function dR(n,e,t,r){var s=br.flatten(n),o=s.filter,u=s.resizeMode,d=s.shadowOffset,f=s.tintColor;s.resizeMode,s.tintColor;var h=[],g=null;if(o&&h.push(o),e&&h.push("blur("+e+"px)"),d){var m=bS(s);m&&h.push("drop-shadow("+m+")")}return(r||f)&&t!=null&&h.push("url(#tint-"+t+")"),h.length>0&&(g=h.join(" ")),[u,g,f]}function fR(n){if(typeof n=="number"){var e=IS(n),t=e.height,r=e.width;return{height:t,width:r}}else if(n!=null&&!Array.isArray(n)&&typeof n=="object"){var s=n.height,o=n.width;return{height:s,width:o}}}function dh(n){var e=null;if(typeof n=="number"){var t=IS(n);if(t==null)throw new Error('Image: asset with ID "'+n+'" could not be found. Please check the image source or packager.');var r=t.scales[0];if(t.scales.length>1){var s=yl.get();r=t.scales.reduce((g,m)=>Math.abs(m-s)<Math.abs(g-s)?m:g)}var o=r!==1?"@"+r+"x":"";e=t?t.httpServerLocation+"/"+t.name+o+"."+t.type:""}else typeof n=="string"?e=n:n&&typeof n.uri=="string"&&(e=n.uri);if(e){var u=e.match(uR);if(u){var d=u[1],f=u[2],h=encodeURIComponent(f);return""+d+h}}return e}var tx=ot.forwardRef((n,e)=>{var t=n["aria-label"],r=n.accessibilityLabel,s=n.blurRadius,o=n.defaultSource,u=n.draggable,d=n.onError,f=n.onLayout,h=n.onLoad,g=n.onLoadEnd,m=n.onLoadStart,v=n.pointerEvents,x=n.source,E=n.style,T=gs(n,aR),y=t||r,S=ot.useState(()=>{var Ce=dh(x);if(Ce!=null){var ye=Sr.has(Ce);if(ye)return ch}return oR}),w=S[0],D=S[1],L=ot.useState({}),O=L[0],I=L[1],b=ot.useContext(Wc),C=ot.useRef(null),V=ot.useRef(lR++),U=ot.useRef(null),z=w===ch||w===D_&&o==null,$=dR(E,s,V.current,n.tintColor),Y=$[0],B=$[1],se=$[2],re=n.resizeMode||Y||"cover",ne=n.tintColor||se,ee=z?x:o,Z=dh(ee),j=fR(ee),F=Z?'url("'+Z+'")':null,te=ae(),Ae=Z?bm("img",{alt:y||"",style:tl.accessibilityImage$raw,draggable:u||!1,ref:C,src:Z}):null;function ae(){if(C.current!=null&&(re==="center"||re==="repeat")){var Ce=C.current,ye=Ce.naturalHeight,Be=Ce.naturalWidth,ft=O.height,Ze=O.width;if(ye&&Be&&ft&&Ze){var ht=Math.min(1,Ze/Be,ft/ye),mt=Math.ceil(ht*Be),lt=Math.ceil(ht*ye);return mt+"px "+lt+"px"}}}function Me(Ce){if(re==="center"||re==="repeat"||f){var ye=Ce.nativeEvent.layout;f&&f(Ce),I(ye)}}var be=dh(x);return ot.useEffect(()=>{Ce(),be!=null&&(D(D_),m&&m(),U.current=Sr.load(be,function(Be){D(ch),h&&h(Be),g&&g()},function(){D(sR),d&&d({nativeEvent:{error:"Failed to load resource "+be}}),g&&g()}));function Ce(){U.current!=null&&(Sr.abort(U.current),U.current=null)}return Ce},[be,U,D,d,h,g,m]),ot.createElement(Al,Hc({},T,{"aria-label":y,onLayout:Me,pointerEvents:v,ref:e,style:[tl.root,b&&tl.inline,j,E,tl.undo,{boxShadow:null}]}),ot.createElement(Al,{style:[tl.image,hR[re],{backgroundImage:F,filter:B},te!=null&&{backgroundSize:te}],suppressHydrationWarning:!0}),Ae,cR(ne,V.current))});tx.displayName="Image";var sd=tx;sd.getSize=function(n,e,t){Sr.getSize(n,e,t)};sd.prefetch=function(n){return Sr.prefetch(n)};sd.queryCache=function(n){return Sr.queryCache(n)};var tl=br.create({root:{flexBasis:"auto",overflow:"hidden",zIndex:0},inline:{display:"inline-flex"},undo:{blurRadius:null,shadowColor:null,shadowOpacity:null,shadowOffset:null,shadowRadius:null,tintColor:null,overlayColor:null,resizeMode:null},image:Ni(Ni({},br.absoluteFillObject),{},{backgroundColor:"transparent",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100%",width:"100%",zIndex:-1}),accessibilityImage$raw:Ni(Ni({},br.absoluteFillObject),{},{height:"100%",opacity:0,width:"100%",zIndex:-1})}),hR=br.create({center:{backgroundSize:"auto"},contain:{backgroundSize:"contain"},cover:{backgroundSize:"cover"},none:{backgroundPosition:"0",backgroundSize:"auto"},repeat:{backgroundPosition:"0",backgroundRepeat:"repeat",backgroundSize:"auto"},stretch:{backgroundSize:"100% 100%"}}),pR=()=>{};function mR(){var n=!1;if(xi)try{var e={};Object.defineProperty(e,"passive",{get(){return n=!0,!1}}),window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}return n}var gR=mR();function vR(n){return n==null?!1:gR?n:!!n.capture}function _R(){return this.cancelBubble}function yR(){return this.defaultPrevented}function SR(n){return n.nativeEvent=n,n.persist=pR,n.isDefaultPrevented=yR,n.isPropagationStopped=_R,n}function kn(n,e,t,r){var s=vR(r),o=u=>t(SR(u));return n.addEventListener(e,o,s),function(){n!=null&&n.removeEventListener(e,o,s)}}var xR=()=>typeof window<"u"&&window.PointerEvent!=null,Ji="keyboard",Qn="keyboard",hl,pl,ml=!1,MR=new Set,xl="keyboard",nl="mouse",fh="touch",ER="blur",nx="contextmenu",bR="focus",wR="keydown",ix="mousedown",rx="mousemove",ax="mouseup",sx="pointerdown",ox="pointermove",lx="scroll",ux="selectionchange",cx="touchcancel",dx="touchmove",fx="touchstart",TR="visibilitychange",I_={passive:!0},fi={capture:!0,passive:!0};function hx(){(hl!=null||pl!=null)&&(hl!=null&&(Qn=hl,hl=null),pl!=null&&(Ji=pl,pl=null),Pa())}function RR(){hl=Qn,pl=Ji,Ji=xl,Qn=xl,Pa(),ml=!1}function AR(){hx()}function CR(n){n.metaKey||n.altKey||n.ctrlKey||Qn!==xl&&(Qn=xl,Ji=xl,Pa())}function PR(){document.visibilityState!=="hidden"&&hx()}function qi(n){var e=n.type;if(xR()){if(e===sx){Ji!==n.pointerType&&(Qn=n.pointerType,Ji=n.pointerType,Pa());return}if(e===ox){Qn!==n.pointerType&&(Qn=n.pointerType,Pa());return}}else{if(ml||(e===ix&&Ji!==nl&&(Qn=nl,Ji=nl,Pa()),e===rx&&Qn!==nl&&(Qn=nl,Pa())),e===fx){ml=!0,n.touches&&n.touches.length>1&&(ml=!1),Ji!==fh&&(Qn=fh,Ji=fh,Pa());return}(e===nx||e===ax||e===ux||e===lx||e===cx||e===dx)&&(ml=!1)}}xi&&(kn(window,ER,RR,I_),kn(window,bR,AR,I_),kn(document,wR,CR,fi),kn(document,TR,PR,fi),kn(document,sx,qi,fi),kn(document,ox,qi,fi),kn(document,nx,qi,fi),kn(document,ix,qi,fi),kn(document,rx,qi,fi),kn(document,ax,qi,fi),kn(document,cx,qi,fi),kn(document,dx,qi,fi),kn(document,fx,qi,fi),kn(document,ux,qi,fi),kn(document,lx,qi,fi));function Pa(){var n={activeModality:Ji,modality:Qn};MR.forEach(e=>{e(n)})}function LR(){return Qn}function il(n,e){var t=Sp(()=>new Map),r=Sp(()=>(s,o)=>{var u=t.get(s);u!=null&&u(),o==null&&(t.delete(s),o=()=>{});var d=kn(s,n,o,e);return t.set(s,d),d});return $c(()=>()=>{t.forEach(s=>{s()}),t.clear()},[t]),r}var DR={},rl={passive:!0},N_="react-gui:hover:lock",O_="react-gui:hover:unlock",IR=()=>typeof window<"u"&&window.PointerEvent!=null;function U_(n,e,t){var r=document.createEvent("CustomEvent"),s=DR,o=s.bubbles,u=o===void 0?!0:o,d=s.cancelable,f=d===void 0?!0:d,h=s.detail;r.initCustomEvent(e,u,f,h),n.dispatchEvent(r)}function hh(n){var e=n.pointerType;return e??LR()}function NR(n,e){var t=e.contain,r=e.disabled,s=e.onHoverStart,o=e.onHoverChange,u=e.onHoverUpdate,d=e.onHoverEnd,f=IR(),h=il(f?"pointermove":"mousemove",rl),g=il(f?"pointerenter":"mouseenter",rl),m=il(f?"pointerleave":"mouseleave",rl),v=il(N_,rl),x=il(O_,rl);$c(()=>{var E=n.current;if(E!==null){var T=function(O){d!=null&&d(O),o!=null&&o(!1),h(E,null),m(E,null)},y=function(O){var I=n.current;I!=null&&hh(O)!=="touch"&&(t&&U_(I,O_),T(O))},S=function(O){hh(O)!=="touch"&&u!=null&&(O.x==null&&(O.x=O.clientX),O.y==null&&(O.y=O.clientY),u(O))},w=function(O){s!=null&&s(O),o!=null&&o(!0),u!=null&&h(E,r?null:S),m(E,r?null:y)},D=function(O){var I=n.current;if(I!=null&&hh(O)!=="touch"){t&&U_(I,N_),w(O);var b=function(U){U.target!==I&&T(O)},C=function(U){U.target!==I&&w(O)};v(I,r?null:b),x(I,r?null:C)}};g(E,r?null:D)}},[g,h,m,v,x,t,r,s,o,u,d,n])}var F_="DELAY",ji="ERROR",k_="LONG_PRESS_DETECTED",Wn="NOT_RESPONDER",po="RESPONDER_ACTIVE_LONG_PRESS_START",od="RESPONDER_ACTIVE_PRESS_START",Ep="RESPONDER_INACTIVE_PRESS_START",OR="RESPONDER_GRANT",Dc="RESPONDER_RELEASE",px="RESPONDER_TERMINATED",B_=Object.freeze({NOT_RESPONDER:{DELAY:ji,RESPONDER_GRANT:Ep,RESPONDER_RELEASE:ji,RESPONDER_TERMINATED:ji,LONG_PRESS_DETECTED:ji},RESPONDER_INACTIVE_PRESS_START:{DELAY:od,RESPONDER_GRANT:ji,RESPONDER_RELEASE:Wn,RESPONDER_TERMINATED:Wn,LONG_PRESS_DETECTED:ji},RESPONDER_ACTIVE_PRESS_START:{DELAY:ji,RESPONDER_GRANT:ji,RESPONDER_RELEASE:Wn,RESPONDER_TERMINATED:Wn,LONG_PRESS_DETECTED:po},RESPONDER_ACTIVE_LONG_PRESS_START:{DELAY:ji,RESPONDER_GRANT:ji,RESPONDER_RELEASE:Wn,RESPONDER_TERMINATED:Wn,LONG_PRESS_DETECTED:po},ERROR:{DELAY:Wn,RESPONDER_GRANT:Ep,RESPONDER_RELEASE:Wn,RESPONDER_TERMINATED:Wn,LONG_PRESS_DETECTED:Wn}}),mx=n=>n.getAttribute("role"),bp=n=>n.tagName.toLowerCase(),z_=n=>n===od||n===po,Ic=n=>mx(n)==="button",H_=n=>n===Ep||n===od||n===po,UR=n=>n===px||n===Dc,G_=n=>{var e=n.key,t=n.target,r=e===" "||e==="Spacebar",s=bp(t)==="button"||Ic(t);return e==="Enter"||r&&s},FR=450,kR=50;class BR{constructor(e){this._eventHandlers=null,this._isPointerTouch=!1,this._longPressDelayTimeout=null,this._longPressDispatched=!1,this._pressDelayTimeout=null,this._pressOutDelayTimeout=null,this._touchState=Wn,this._responderElement=null,this.configure(e)}configure(e){this._config=e}reset(){this._cancelLongPressDelayTimeout(),this._cancelPressDelayTimeout(),this._cancelPressOutDelayTimeout()}getEventHandlers(){return this._eventHandlers==null&&(this._eventHandlers=this._createEventHandlers()),this._eventHandlers}_createEventHandlers(){var e=(s,o)=>{s.persist(),this._cancelPressOutDelayTimeout(),this._longPressDispatched=!1,this._selectionTerminated=!1,this._touchState=Wn,this._isPointerTouch=s.nativeEvent.type==="touchstart",this._receiveSignal(OR,s);var u=ph(this._config.delayPressStart,0,kR);o!==!1&&u>0?this._pressDelayTimeout=setTimeout(()=>{this._receiveSignal(F_,s)},u):this._receiveSignal(F_,s);var d=ph(this._config.delayLongPress,10,FR);this._longPressDelayTimeout=setTimeout(()=>{this._handleLongPress(s)},d+u)},t=s=>{this._receiveSignal(Dc,s)},r=s=>{var o=this._config.onPress,u=s.target;if(this._touchState!==Wn&&G_(s)){t(s),document.removeEventListener("keyup",r);var d=u.getAttribute("role"),f=bp(u),h=d==="link"||f==="a"||f==="button"||f==="input"||f==="select"||f==="textarea",g=this._responderElement===u;o!=null&&!h&&g&&o(s),this._responderElement=null}};return{onStartShouldSetResponder:s=>{var o=this._config.disabled;return o&&Ic(s.currentTarget)&&s.stopPropagation(),o==null?!0:!o},onKeyDown:s=>{var o=this._config.disabled,u=s.key,d=s.target;if(!o&&G_(s)){this._touchState===Wn&&(e(s,!1),this._responderElement=d,document.addEventListener("keyup",r));var f=u===" "||u==="Spacebar",h=mx(d),g=h==="button"||h==="menuitem";f&&g&&bp(d)!=="button"&&s.preventDefault(),s.stopPropagation()}},onResponderGrant:s=>e(s),onResponderMove:s=>{this._config.onPressMove!=null&&this._config.onPressMove(s);var o=V_(s);if(this._touchActivatePosition!=null){var u=this._touchActivatePosition.pageX-o.pageX,d=this._touchActivatePosition.pageY-o.pageY;Math.hypot(u,d)>10&&this._cancelLongPressDelayTimeout()}},onResponderRelease:s=>t(s),onResponderTerminate:s=>{s.nativeEvent.type==="selectionchange"&&(this._selectionTerminated=!0),this._receiveSignal(px,s)},onResponderTerminationRequest:s=>{var o=this._config,u=o.cancelable,d=o.disabled,f=o.onLongPress;return!d&&f!=null&&this._isPointerTouch&&s.nativeEvent.type==="contextmenu"?!1:u??!0},onClick:s=>{var o=this._config,u=o.disabled,d=o.onPress;u?Ic(s.currentTarget)&&s.stopPropagation():(s.stopPropagation(),this._longPressDispatched||this._selectionTerminated?s.preventDefault():d!=null&&s.altKey===!1&&d(s))},onContextMenu:s=>{var o=this._config,u=o.disabled,d=o.onLongPress;u?Ic(s.currentTarget)&&s.stopPropagation():d!=null&&this._isPointerTouch&&!s.defaultPrevented&&(s.preventDefault(),s.stopPropagation())}}}_receiveSignal(e,t){var r=this._touchState,s=null;B_[r]!=null&&(s=B_[r][e]),!(this._touchState===Wn&&e===Dc)&&(s==null||s===ji?console.error("PressResponder: Invalid signal "+e+" for state "+r+" on responder"):r!==s&&(this._performTransitionSideEffects(r,s,e,t),this._touchState=s))}_performTransitionSideEffects(e,t,r,s){if(UR(r)&&(setTimeout(()=>{this._isPointerTouch=!1},0),this._touchActivatePosition=null,this._cancelLongPressDelayTimeout()),H_(e)&&r===k_){var o=this._config.onLongPress;o!=null&&s.nativeEvent.key==null&&(o(s),this._longPressDispatched=!0)}var u=z_(e),d=z_(t);if(!u&&d?this._activate(s):u&&!d&&this._deactivate(s),H_(e)&&r===Dc){var f=this._config,h=f.onLongPress,g=f.onPress;if(g!=null){var m=h!=null&&e===po;m||!d&&!u&&(this._activate(s),this._deactivate(s))}}this._cancelPressDelayTimeout()}_activate(e){var t=this._config,r=t.onPressChange,s=t.onPressStart,o=V_(e);this._touchActivatePosition={pageX:o.pageX,pageY:o.pageY},s!=null&&s(e),r!=null&&r(!0)}_deactivate(e){var t=this._config,r=t.onPressChange,s=t.onPressEnd;function o(){s!=null&&s(e),r!=null&&r(!1)}var u=ph(this._config.delayPressEnd);u>0?this._pressOutDelayTimeout=setTimeout(()=>{o()},u):o()}_handleLongPress(e){(this._touchState===od||this._touchState===po)&&this._receiveSignal(k_,e)}_cancelLongPressDelayTimeout(){this._longPressDelayTimeout!=null&&(clearTimeout(this._longPressDelayTimeout),this._longPressDelayTimeout=null)}_cancelPressDelayTimeout(){this._pressDelayTimeout!=null&&(clearTimeout(this._pressDelayTimeout),this._pressDelayTimeout=null)}_cancelPressOutDelayTimeout(){this._pressOutDelayTimeout!=null&&(clearTimeout(this._pressOutDelayTimeout),this._pressOutDelayTimeout=null)}}function ph(n,e,t){return e===void 0&&(e=0),t===void 0&&(t=0),Math.max(e,n??t)}function V_(n){var e=n.nativeEvent,t=e.changedTouches,r=e.touches;return r!=null&&r.length>0?r[0]:t!=null&&t.length>0?t[0]:n.nativeEvent}function zR(n,e){var t=ot.useRef(null);t.current==null&&(t.current=new BR(e));var r=t.current;return ot.useEffect(()=>{r.configure(e)},[e,r]),ot.useEffect(()=>()=>{r.reset()},[r]),ot.useDebugValue(e),r.getEventHandlers()}var HR=["children","delayLongPress","delayPressIn","delayPressOut","disabled","onBlur","onContextMenu","onFocus","onHoverIn","onHoverOut","onKeyDown","onLongPress","onPress","onPressMove","onPressIn","onPressOut","style","tabIndex","testOnly_hovered","testOnly_pressed"];function GR(n,e){var t=n.children,r=n.delayLongPress,s=n.delayPressIn,o=n.delayPressOut,u=n.disabled,d=n.onBlur,f=n.onContextMenu,h=n.onFocus,g=n.onHoverIn,m=n.onHoverOut,v=n.onKeyDown,x=n.onLongPress,E=n.onPress,T=n.onPressMove,y=n.onPressIn,S=n.onPressOut,w=n.style,D=n.tabIndex,L=n.testOnly_hovered,O=n.testOnly_pressed,I=gs(n,HR),b=mh(L===!0),C=b[0],V=b[1],U=mh(!1),z=U[0],$=U[1],Y=mh(O===!0),B=Y[0],se=Y[1],re=ot.useRef(null),ne=wm(e,re),ee=ot.useMemo(()=>({delayLongPress:r,delayPressStart:s,delayPressEnd:o,disabled:u,onLongPress:x,onPress:E,onPressChange:se,onPressStart:y,onPressMove:T,onPressEnd:S}),[r,s,o,u,x,E,y,T,S,se]),Z=zR(re,ee),j=Z.onContextMenu,F=Z.onKeyDown;NR(re,{contain:!0,disabled:u,onHoverChange:V,onHoverStart:g,onHoverEnd:m});var te={hovered:C,focused:z,pressed:B},Ae=ot.useCallback(ye=>{ye.nativeEvent.target===re.current&&($(!1),d!=null&&d(ye))},[re,$,d]),ae=ot.useCallback(ye=>{ye.nativeEvent.target===re.current&&($(!0),h!=null&&h(ye))},[re,$,h]),Me=ot.useCallback(ye=>{j!=null&&j(ye),f!=null&&f(ye)},[f,j]),be=ot.useCallback(ye=>{F!=null&&F(ye),v!=null&&v(ye)},[v,F]),Ce;return D!==void 0?Ce=D:Ce=u?-1:0,ot.createElement(Al,Hc({},I,Z,{"aria-disabled":u,onBlur:Ae,onContextMenu:Me,onFocus:ae,onKeyDown:be,ref:ne,style:[u?W_.disabled:W_.active,typeof w=="function"?w(te):w],tabIndex:Ce}),typeof t=="function"?t(te):t)}function mh(n){var e=ot.useState(!1),t=e[0],r=e[1];return[t||n,r]}var W_=br.create({active:{cursor:"pointer",touchAction:"manipulation"},disabled:{pointerEvents:"box-none"}}),gx=ot.memo(ot.forwardRef(GR));gx.displayName="Pressable";var VR=["hrefAttrs","numberOfLines","onClick","onLayout","onPress","onMoveShouldSetResponder","onMoveShouldSetResponderCapture","onResponderEnd","onResponderGrant","onResponderMove","onResponderReject","onResponderRelease","onResponderStart","onResponderTerminate","onResponderTerminationRequest","onScrollShouldSetResponder","onScrollShouldSetResponderCapture","onSelectionChangeShouldSetResponder","onSelectionChangeShouldSetResponderCapture","onStartShouldSetResponder","onStartShouldSetResponderCapture","selectable"],WR=Object.assign({},OS,US,FS,kS,BS,zS,HS,GS,{href:!0,lang:!0,pointerEvents:!0}),$R=n=>VS(n,WR),vx=ot.forwardRef((n,e)=>{var t=n.hrefAttrs,r=n.numberOfLines,s=n.onClick,o=n.onLayout,u=n.onPress,d=n.onMoveShouldSetResponder,f=n.onMoveShouldSetResponderCapture,h=n.onResponderEnd,g=n.onResponderGrant,m=n.onResponderMove,v=n.onResponderReject,x=n.onResponderRelease,E=n.onResponderStart,T=n.onResponderTerminate,y=n.onResponderTerminationRequest,S=n.onScrollShouldSetResponder,w=n.onScrollShouldSetResponderCapture,D=n.onSelectionChangeShouldSetResponder,L=n.onSelectionChangeShouldSetResponderCapture,O=n.onStartShouldSetResponder,I=n.onStartShouldSetResponderCapture,b=n.selectable,C=gs(n,VR),V=ot.useContext(Wc),U=ot.useRef(null),z=DS(),$=z.direction;WS(U,o),ex(U,{onMoveShouldSetResponder:d,onMoveShouldSetResponderCapture:f,onResponderEnd:h,onResponderGrant:g,onResponderMove:m,onResponderReject:v,onResponderRelease:x,onResponderStart:E,onResponderTerminate:T,onResponderTerminationRequest:y,onScrollShouldSetResponder:S,onScrollShouldSetResponderCapture:w,onSelectionChangeShouldSetResponder:D,onSelectionChangeShouldSetResponderCapture:L,onStartShouldSetResponder:O,onStartShouldSetResponderCapture:I});var Y=ot.useCallback(Me=>{s!=null?s(Me):u!=null&&(Me.stopPropagation(),u(Me))},[s,u]),B=V?"span":"div",se=n.lang!=null?Em(n.lang):null,re=n.dir||se,ne=re||$,ee=$R(C);if(ee.dir=re,V||(ee.dir=re??"auto"),(s||u)&&(ee.onClick=Y),ee.style=[r!=null&&r>1&&{WebkitLineClamp:r},V===!0?rs.textHasAncestor$raw:rs.text$raw,r===1&&rs.textOneLine,r!=null&&r>1&&rs.textMultiLine,n.style,b===!0&&rs.selectable,b===!1&&rs.notSelectable,u&&rs.pressable],n.href!=null&&(B="a",t!=null)){var Z=t.download,j=t.rel,F=t.target;Z!=null&&(ee.download=Z),j!=null&&(ee.rel=j),typeof F=="string"&&(ee.target=F.charAt(0)!=="_"?"_"+F:F)}var te=$S(ee),Ae=wm(U,te,e);ee.ref=Ae;var ae=bm(B,ee,{writingDirection:ne});return V?ae:ot.createElement(Wc.Provider,{value:!0},ae)});vx.displayName="Text";var $_={backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",color:"black",display:"inline",font:"14px System",listStyle:"none",margin:0,padding:0,position:"relative",textAlign:"start",textDecoration:"none",whiteSpace:"pre-wrap",wordWrap:"break-word"},rs=br.create({text$raw:$_,textHasAncestor$raw:Ni(Ni({},$_),{},{color:"inherit",font:"inherit",textAlign:"inherit",whiteSpace:"inherit"}),textOneLine:{maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",wordWrap:"normal"},textMultiLine:{display:"-webkit-box",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",WebkitBoxOrient:"vertical"},notSelectable:{userSelect:"none"},selectable:{userSelect:"text"},pressable:{cursor:"pointer"}});const wp=new Map,XR=new Set(["span","i","b","strong","small","em","label"]);function qR(n=""){const e=document.createElement("span").style;e.cssText=n;const t={};for(let r=0;r<e.length;r++){const s=e[r];if(s.startsWith("--"))continue;const o=s.replace(/-([a-z])/g,(d,f)=>f.toUpperCase()),u=e.getPropertyValue(s).trim();t[o]=/^-?\d+(?:\.\d+)?px$/.test(u)?Number.parseFloat(u):u}return t}function _x(n,e){const t={key:e};for(const r of n.attributes)if(r.name==="class")t.className=r.value;else if(r.name==="style")t.style=qR(r.value);else{if(r.name==="draggable"||r.name==="type"||r.name==="tabindex")continue;t[r.name]=r.value}return t}function YR(n){var r;const e=((r=n.className)==null?void 0:r.split(/\s+/).filter(Boolean))||[],t=Object.entries(n).filter(([s])=>s.startsWith("data-"));delete n.className;for(const[s]of t)delete n[s];return(e.length||t.length)&&(n.ref=s=>{if(s){e.length&&s.classList.add(...e);for(const[o,u]of t)s.setAttribute(o,u)}}),n}function yx(n,e="child"){if(n.nodeType===Node.TEXT_NODE)return n.textContent?n.textContent:null;if(n.nodeType!==Node.ELEMENT_NODE)return null;const t=n.tagName.toLowerCase(),r=YR(_x(n,e));if(t==="img")return r.source={uri:n.getAttribute("src")||""},n.hasAttribute("alt")&&(r.accessibilityLabel=n.getAttribute("alt")),delete r.src,delete r.alt,ho.createElement(sd,r);const s=n.querySelector("div, img, svg, button"),o=XR.has(t)&&!s?vx:Al,u=Array.from(n.childNodes).map((d,f)=>yx(d,`${e}-${f}`));return ho.createElement(o,r,...u)}function KR(n){var h;const e=_x(n),t=((h=e.className)==null?void 0:h.split(/\s+/).filter(Boolean))||[],r=Object.entries(e).filter(([g])=>g.startsWith("data-")),s=n.getAttribute("style")||"",o=document.createElement("span");o.className="rn-control-root",o.style.cssText=s,n.replaceWith(o);const u=mb.createRoot(o);wp.set(o,u);const d=Array.from(n.childNodes).map((g,m)=>yx(g,`button-${m}`)),f=n.hasAttribute("disabled");delete e.style,delete e.disabled,delete e.className;for(const[g]of r)delete e[g];e.ref=g=>{if(g){t.length&&g.classList.add(...t);for(const[m,v]of r)g.setAttribute(m,v)}},e.role=e.role||"button",e.accessibilityRole=e.role,e.disabled=f,e.onPress=()=>{var g;return(g=o.firstElementChild)==null?void 0:g.dispatchEvent(new CustomEvent("rnpress",{bubbles:!0}))},gb.flushSync(()=>u.render(ho.createElement(gx,e,...d)))}function ZR(n){for(const[e,t]of wp)(n===e||n.contains(e))&&(t.unmount(),wp.delete(e))}function Sx(n){n.querySelectorAll("button").forEach(KR)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rm="187",jR=0,X_=1,JR=2,Nc=1,xx=2,gl=3,ds=0,ii=1,Qi=2,uo=0,Ml=1,q_=2,Y_=3,K_=4,QR=5,ao=100,eA=101,tA=102,nA=103,iA=104,rA=200,aA=201,sA=202,oA=203,Mx=204,Ex=205,lA=206,uA=207,cA=208,dA=209,fA=210,hA=211,pA=212,mA=213,gA=214,Tp=0,Rp=1,Ap=2,Cl=3,Cp=4,Pp=5,Lp=6,Dp=7,bx=0,vA=1,_A=2,qr=0,wx=1,Tx=2,Rx=3,Am=4,Ax=5,Cx=6,Px=7,Lx=300,mo=301,Pl=302,gh=303,vh=304,qc=1e3,$r=1001,Ip=1002,Cn=1003,yA=1004,sc=1005,ti=1006,_h=1007,Da=1008,gi=1009,Dx=1010,Ix=1011,Ll=1012,Cm=1013,Tr=1014,xr=1015,Rr=1016,Pm=1017,Lm=1018,go=1020,Nx=35902,Ox=35899,Ux=1021,Fx=1022,Mr=1023,Oa=1026,Ia=1027,kx=1028,Dm=1029,fs=1030,Im=1031,Nm=1033,Oc=33776,Uc=33777,Fc=33778,kc=33779,Np=35840,Op=35841,Up=35842,Fp=35843,kp=36196,Bp=37492,zp=37496,Hp=37488,Gp=37489,Yc=37490,Vp=37491,Wp=37808,$p=37809,Xp=37810,qp=37811,Yp=37812,Kp=37813,Zp=37814,jp=37815,Jp=37816,Qp=37817,em=37818,tm=37819,nm=37820,im=37821,rm=36492,am=36494,sm=36495,om=36283,lm=36284,Kc=36285,um=36286,SA=3200,cm=0,xA=1,La="",ei="srgb",Zc="srgb-linear",jc="linear",Ut="srgb",yh=7680,MA=519,EA=512,bA=513,wA=514,Bx=515,TA=516,RA=517,zx=518,Hx=519,AA=35044,Z_="300 es",tr=2e3,Dl=2001;function CA(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Jc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function PA(){const n=Jc("canvas");return n.style.display="block",n}const j_={};function J_(...n){const e="THREE."+n.shift();console.log(e,...n)}function Gx(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ct(...n){n=Gx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function It(...n){n=Gx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Bc(...n){const e=n.join(" ");e in j_||(j_[e]=!0,ct(...n))}function LA(n,e,t){return new Promise(function(r,s){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:r()}}setTimeout(o,t)})}const DA={[Tp]:Tp,[Ap]:Lp,[Cp]:Cp,[Cl]:Pp,[Rp]:Rp,[Lp]:Ap,[Dp]:Dp,[Pp]:Cl};class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const s=r[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const s=r.slice(0);for(let o=0,u=s.length;o<u;o++)s[o].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sh=Math.PI/180,dm=180/Math.PI;function Ul(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function IA(n,e){return(n%e+e)%e}function xh(n,e,t){return(1-t)*n+t*e}function NA(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Om(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function OA(n,e){if(e.constructor===Float32Array)return n;const t=Om(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function UA(n,e){if(e.constructor===Float32Array)return n;const t=Om(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const dg=class dg{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,s=e.elements;return this.x=s[0]*t+s[3]*r+s[6],this.y=s[1]*t+s[4]*r+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),s=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*r-u*s+e.x,this.y=o*s+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dg.prototype.isVector2=!0;let Et=dg;class Yr{constructor(e=0,t=0,r=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=s}static slerpFlat(e,t,r,s,o,u,d){let f=r[s+0],h=r[s+1],g=r[s+2],m=r[s+3],v=o[u+0],x=o[u+1],E=o[u+2],T=o[u+3];if(m!==T||f!==v||h!==x||g!==E){let y=f*v+h*x+g*E+m*T;y<0&&(v=-v,x=-x,E=-E,T=-T,y=-y);let S=1-d;if(y<.9995){const w=Math.acos(y),D=Math.sin(w);S=Math.sin(S*w)/D,d=Math.sin(d*w)/D,f=f*S+v*d,h=h*S+x*d,g=g*S+E*d,m=m*S+T*d}else{f=f*S+v*d,h=h*S+x*d,g=g*S+E*d,m=m*S+T*d;const w=1/Math.sqrt(f*f+h*h+g*g+m*m);f*=w,h*=w,g*=w,m*=w}}e[t]=f,e[t+1]=h,e[t+2]=g,e[t+3]=m}static multiplyQuaternionsFlat(e,t,r,s,o,u){const d=r[s],f=r[s+1],h=r[s+2],g=r[s+3],m=o[u],v=o[u+1],x=o[u+2],E=o[u+3];return e[t]=d*E+g*m+f*x-h*v,e[t+1]=f*E+g*v+h*m-d*x,e[t+2]=h*E+g*x+d*v-f*m,e[t+3]=g*E-d*m-f*v-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,s){return this._x=e,this._y=t,this._z=r,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,s=e._y,o=e._z,u=e._order,d=Math.cos,f=Math.sin,h=d(r/2),g=d(s/2),m=d(o/2),v=f(r/2),x=f(s/2),E=f(o/2);switch(u){case"XYZ":this._x=v*g*m+h*x*E,this._y=h*x*m-v*g*E,this._z=h*g*E+v*x*m,this._w=h*g*m-v*x*E;break;case"YXZ":this._x=v*g*m+h*x*E,this._y=h*x*m-v*g*E,this._z=h*g*E-v*x*m,this._w=h*g*m+v*x*E;break;case"ZXY":this._x=v*g*m-h*x*E,this._y=h*x*m+v*g*E,this._z=h*g*E+v*x*m,this._w=h*g*m-v*x*E;break;case"ZYX":this._x=v*g*m-h*x*E,this._y=h*x*m+v*g*E,this._z=h*g*E-v*x*m,this._w=h*g*m+v*x*E;break;case"YZX":this._x=v*g*m+h*x*E,this._y=h*x*m+v*g*E,this._z=h*g*E-v*x*m,this._w=h*g*m-v*x*E;break;case"XZY":this._x=v*g*m-h*x*E,this._y=h*x*m-v*g*E,this._z=h*g*E+v*x*m,this._w=h*g*m+v*x*E;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,s=Math.sin(r);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],s=t[4],o=t[8],u=t[1],d=t[5],f=t[9],h=t[2],g=t[6],m=t[10],v=r+d+m;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-f)*x,this._y=(o-h)*x,this._z=(u-s)*x}else if(r>d&&r>m){const x=2*Math.sqrt(1+r-d-m);this._w=(g-f)/x,this._x=.25*x,this._y=(s+u)/x,this._z=(o+h)/x}else if(d>m){const x=2*Math.sqrt(1+d-r-m);this._w=(o-h)/x,this._x=(s+u)/x,this._y=.25*x,this._z=(f+g)/x}else{const x=2*Math.sqrt(1+m-r-d);this._w=(u-s)/x,this._x=(o+h)/x,this._y=(f+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const s=Math.min(1,t/r);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,s=e._y,o=e._z,u=e._w,d=t._x,f=t._y,h=t._z,g=t._w;return this._x=r*g+u*d+s*h-o*f,this._y=s*g+u*f+o*d-r*h,this._z=o*g+u*h+r*f-s*d,this._w=u*g-r*d-s*f-o*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,s=e._y,o=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,s=-s,o=-o,u=-u,d=-d);let f=1-t;if(d<.9995){const h=Math.acos(d),g=Math.sin(h);f=Math.sin(f*h)/g,t=Math.sin(t*h)/g,this._x=this._x*f+r*t,this._y=this._y*f+s*t,this._z=this._z*f+o*t,this._w=this._w*f+u*t,this._onChangeCallback()}else this._x=this._x*f+r*t,this._y=this._y*f+s*t,this._z=this._z*f+o*t,this._w=this._w*f+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),s=Math.sqrt(1-r),o=Math.sqrt(r);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const fg=class fg{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Q_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Q_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6]*s,this.y=o[1]*t+o[4]*r+o[7]*s,this.z=o[2]*t+o[5]*r+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,s=this.z,o=e.elements,u=1/(o[3]*t+o[7]*r+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*r+o[8]*s+o[12])*u,this.y=(o[1]*t+o[5]*r+o[9]*s+o[13])*u,this.z=(o[2]*t+o[6]*r+o[10]*s+o[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,s=this.z,o=e.x,u=e.y,d=e.z,f=e.w,h=2*(u*s-d*r),g=2*(d*t-o*s),m=2*(o*r-u*t);return this.x=t+f*h+u*m-d*g,this.y=r+f*g+d*h-o*m,this.z=s+f*m+o*g-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*s,this.y=o[1]*t+o[5]*r+o[9]*s,this.z=o[2]*t+o[6]*r+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,s=e.y,o=e.z,u=t.x,d=t.y,f=t.z;return this.x=s*f-o*d,this.y=o*u-r*f,this.z=r*d-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Mh.copy(this).projectOnVector(e),this.sub(Mh)}reflect(e){return this.sub(Mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,s=this.z-e.z;return t*t+r*r+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const s=Math.sin(t)*e;return this.x=s*Math.sin(r),this.y=Math.cos(t)*e,this.z=s*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fg.prototype.isVector3=!0;let fe=fg;const Mh=new fe,Q_=new Yr,hg=class hg{constructor(e,t,r,s,o,u,d,f,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,s,o,u,d,f,h)}set(e,t,r,s,o,u,d,f,h){const g=this.elements;return g[0]=e,g[1]=s,g[2]=d,g[3]=t,g[4]=o,g[5]=f,g[6]=r,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,s=t.elements,o=this.elements,u=r[0],d=r[3],f=r[6],h=r[1],g=r[4],m=r[7],v=r[2],x=r[5],E=r[8],T=s[0],y=s[3],S=s[6],w=s[1],D=s[4],L=s[7],O=s[2],I=s[5],b=s[8];return o[0]=u*T+d*w+f*O,o[3]=u*y+d*D+f*I,o[6]=u*S+d*L+f*b,o[1]=h*T+g*w+m*O,o[4]=h*y+g*D+m*I,o[7]=h*S+g*L+m*b,o[2]=v*T+x*w+E*O,o[5]=v*y+x*D+E*I,o[8]=v*S+x*L+E*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],s=e[2],o=e[3],u=e[4],d=e[5],f=e[6],h=e[7],g=e[8];return t*u*g-t*d*h-r*o*g+r*d*f+s*o*h-s*u*f}invert(){const e=this.elements,t=e[0],r=e[1],s=e[2],o=e[3],u=e[4],d=e[5],f=e[6],h=e[7],g=e[8],m=g*u-d*h,v=d*f-g*o,x=h*o-u*f,E=t*m+r*v+s*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=m*T,e[1]=(s*h-g*r)*T,e[2]=(d*r-s*u)*T,e[3]=v*T,e[4]=(g*t-s*f)*T,e[5]=(s*o-d*t)*T,e[6]=x*T,e[7]=(r*f-h*t)*T,e[8]=(u*t-r*o)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,s,o,u,d){const f=Math.cos(o),h=Math.sin(o);return this.set(r*f,r*h,-r*(f*u+h*d)+u+e,-s*h,s*f,-s*(-h*u+f*d)+d+t,0,0,1),this}scale(e,t){return Bc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Eh.makeScale(e,t)),this}rotate(e){return Bc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Eh.makeRotation(-e)),this}translate(e,t){return Bc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Eh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let s=0;s<9;s++)if(t[s]!==r[s])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};hg.prototype.isMatrix3=!0;let dt=hg;const Eh=new dt,ey=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ty=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function FA(){const n={enabled:!0,workingColorSpace:Zc,spaces:{},convert:function(s,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===Ut&&(s.r=Kr(s.r),s.g=Kr(s.g),s.b=Kr(s.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ut&&(s.r=co(s.r),s.g=co(s.g),s.b=co(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===La?jc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,u){return s.copy(this.spaces[u].fromXYZ).multiply(this.spaces[o].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Zc]:{primaries:e,whitePoint:r,transfer:jc,toXYZ:ey,fromXYZ:ty,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:r,transfer:Ut,toXYZ:ey,fromXYZ:ty,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),n}const Tt=FA();function Kr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function co(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ws;class kA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ws===void 0&&(Ws=Jc("canvas")),Ws.width=e.width,Ws.height=e.height;const s=Ws.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),r=Ws}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const s=r.getImageData(0,0,e.width,e.height),o=s.data;for(let u=0;u<o.length;u++)o[u]=Kr(o[u]/255)*255;return r.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Kr(t[r]/255)*255):t[r]=Kr(t[r]);return{data:t,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let BA=0;class Um{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:BA++}),this.uuid=Ul(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let u=0,d=s.length;u<d;u++)s[u].isDataTexture?o.push(bh(s[u].image)):o.push(bh(s[u]))}else o=bh(s);r.url=o}return t||(e.images[this.uuid]=r),r}}function bh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?kA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let zA=0;const wh=new fe;class Bn extends vs{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,r=$r,s=$r,o=ti,u=Da,d=Mr,f=gi,h=Bn.DEFAULT_ANISOTROPY,g=La){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zA++}),this.uuid=Ul(),this.name="",this.source=new Um(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=u,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=f,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(wh).x}get height(){return this.source.getSize(wh).y}get depth(){return this.source.getSize(wh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ct(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qc:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case Ip:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qc:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case Ip:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Lx;Bn.DEFAULT_ANISOTROPY=1;const pg=class pg{constructor(e=0,t=0,r=0,s=1){this.x=e,this.y=t,this.z=r,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,s){return this.x=e,this.y=t,this.z=r,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,s=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*s+u[12]*o,this.y=u[1]*t+u[5]*r+u[9]*s+u[13]*o,this.z=u[2]*t+u[6]*r+u[10]*s+u[14]*o,this.w=u[3]*t+u[7]*r+u[11]*s+u[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,s,o;const f=e.elements,h=f[0],g=f[4],m=f[8],v=f[1],x=f[5],E=f[9],T=f[2],y=f[6],S=f[10];if(Math.abs(g-v)<.01&&Math.abs(m-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(m+T)<.1&&Math.abs(E+y)<.1&&Math.abs(h+x+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(h+1)/2,L=(x+1)/2,O=(S+1)/2,I=(g+v)/4,b=(m+T)/4,C=(E+y)/4;return D>L&&D>O?D<.01?(r=0,s=.707106781,o=.707106781):(r=Math.sqrt(D),s=I/r,o=b/r):L>O?L<.01?(r=.707106781,s=0,o=.707106781):(s=Math.sqrt(L),r=I/s,o=C/s):O<.01?(r=.707106781,s=.707106781,o=0):(o=Math.sqrt(O),r=b/o,s=C/o),this.set(r,s,o,t),this}let w=Math.sqrt((y-E)*(y-E)+(m-T)*(m-T)+(v-g)*(v-g));return Math.abs(w)<.001&&(w=1),this.x=(y-E)/w,this.y=(m-T)/w,this.z=(v-g)/w,this.w=Math.acos((h+x+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pg.prototype.isVector4=!0;let on=pg;class HA extends vs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t),this.textures=[];const s=r.count;for(let o=0;o<s;o++)this.textures[o]=new Bn({width:e,height:t,depth:r.depth}),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ti,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=r,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Um(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends HA{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Vx extends Bn{constructor(e=null,t=1,r=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class GA extends Bn{constructor(e=null,t=1,r=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const rd=class rd{constructor(e,t,r,s,o,u,d,f,h,g,m,v,x,E,T,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,s,o,u,d,f,h,g,m,v,x,E,T,y)}set(e,t,r,s,o,u,d,f,h,g,m,v,x,E,T,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=s,S[1]=o,S[5]=u,S[9]=d,S[13]=f,S[2]=h,S[6]=g,S[10]=m,S[14]=v,S[3]=x,S[7]=E,S[11]=T,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rd().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,s=1/$s.setFromMatrixColumn(e,0).length(),o=1/$s.setFromMatrixColumn(e,1).length(),u=1/$s.setFromMatrixColumn(e,2).length();return t[0]=r[0]*s,t[1]=r[1]*s,t[2]=r[2]*s,t[3]=0,t[4]=r[4]*o,t[5]=r[5]*o,t[6]=r[6]*o,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,s=e.y,o=e.z,u=Math.cos(r),d=Math.sin(r),f=Math.cos(s),h=Math.sin(s),g=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const v=u*g,x=u*m,E=d*g,T=d*m;t[0]=f*g,t[4]=-f*m,t[8]=h,t[1]=x+E*h,t[5]=v-T*h,t[9]=-d*f,t[2]=T-v*h,t[6]=E+x*h,t[10]=u*f}else if(e.order==="YXZ"){const v=f*g,x=f*m,E=h*g,T=h*m;t[0]=v+T*d,t[4]=E*d-x,t[8]=u*h,t[1]=u*m,t[5]=u*g,t[9]=-d,t[2]=x*d-E,t[6]=T+v*d,t[10]=u*f}else if(e.order==="ZXY"){const v=f*g,x=f*m,E=h*g,T=h*m;t[0]=v-T*d,t[4]=-u*m,t[8]=E+x*d,t[1]=x+E*d,t[5]=u*g,t[9]=T-v*d,t[2]=-u*h,t[6]=d,t[10]=u*f}else if(e.order==="ZYX"){const v=u*g,x=u*m,E=d*g,T=d*m;t[0]=f*g,t[4]=E*h-x,t[8]=v*h+T,t[1]=f*m,t[5]=T*h+v,t[9]=x*h-E,t[2]=-h,t[6]=d*f,t[10]=u*f}else if(e.order==="YZX"){const v=u*f,x=u*h,E=d*f,T=d*h;t[0]=f*g,t[4]=T-v*m,t[8]=E*m+x,t[1]=m,t[5]=u*g,t[9]=-d*g,t[2]=-h*g,t[6]=x*m+E,t[10]=v-T*m}else if(e.order==="XZY"){const v=u*f,x=u*h,E=d*f,T=d*h;t[0]=f*g,t[4]=-m,t[8]=h*g,t[1]=v*m+T,t[5]=u*g,t[9]=x*m-E,t[2]=E*m-x,t[6]=d*g,t[10]=T*m+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VA,e,WA)}lookAt(e,t,r){const s=this.elements;return hi.subVectors(e,t),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),Ma.crossVectors(r,hi),Ma.lengthSq()===0&&(Math.abs(r.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),Ma.crossVectors(r,hi)),Ma.normalize(),oc.crossVectors(hi,Ma),s[0]=Ma.x,s[4]=oc.x,s[8]=hi.x,s[1]=Ma.y,s[5]=oc.y,s[9]=hi.y,s[2]=Ma.z,s[6]=oc.z,s[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,s=t.elements,o=this.elements,u=r[0],d=r[4],f=r[8],h=r[12],g=r[1],m=r[5],v=r[9],x=r[13],E=r[2],T=r[6],y=r[10],S=r[14],w=r[3],D=r[7],L=r[11],O=r[15],I=s[0],b=s[4],C=s[8],V=s[12],U=s[1],z=s[5],$=s[9],Y=s[13],B=s[2],se=s[6],re=s[10],ne=s[14],ee=s[3],Z=s[7],j=s[11],F=s[15];return o[0]=u*I+d*U+f*B+h*ee,o[4]=u*b+d*z+f*se+h*Z,o[8]=u*C+d*$+f*re+h*j,o[12]=u*V+d*Y+f*ne+h*F,o[1]=g*I+m*U+v*B+x*ee,o[5]=g*b+m*z+v*se+x*Z,o[9]=g*C+m*$+v*re+x*j,o[13]=g*V+m*Y+v*ne+x*F,o[2]=E*I+T*U+y*B+S*ee,o[6]=E*b+T*z+y*se+S*Z,o[10]=E*C+T*$+y*re+S*j,o[14]=E*V+T*Y+y*ne+S*F,o[3]=w*I+D*U+L*B+O*ee,o[7]=w*b+D*z+L*se+O*Z,o[11]=w*C+D*$+L*re+O*j,o[15]=w*V+D*Y+L*ne+O*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],s=e[8],o=e[12],u=e[1],d=e[5],f=e[9],h=e[13],g=e[2],m=e[6],v=e[10],x=e[14],E=e[3],T=e[7],y=e[11],S=e[15],w=f*x-h*v,D=d*x-h*m,L=d*v-f*m,O=u*x-h*g,I=u*v-f*g,b=u*m-d*g;return t*(T*w-y*D+S*L)-r*(E*w-y*O+S*I)+s*(E*D-T*O+S*b)-o*(E*L-T*I+y*b)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],s=e[8],o=e[1],u=e[5],d=e[9],f=e[2],h=e[6],g=e[10];return t*(u*g-d*h)-r*(o*g-d*f)+s*(o*h-u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],s=e[2],o=e[3],u=e[4],d=e[5],f=e[6],h=e[7],g=e[8],m=e[9],v=e[10],x=e[11],E=e[12],T=e[13],y=e[14],S=e[15],w=t*d-r*u,D=t*f-s*u,L=t*h-o*u,O=r*f-s*d,I=r*h-o*d,b=s*h-o*f,C=g*T-m*E,V=g*y-v*E,U=g*S-x*E,z=m*y-v*T,$=m*S-x*T,Y=v*S-x*y,B=w*Y-D*$+L*z+O*U-I*V+b*C;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const se=1/B;return e[0]=(d*Y-f*$+h*z)*se,e[1]=(s*$-r*Y-o*z)*se,e[2]=(T*b-y*I+S*O)*se,e[3]=(v*I-m*b-x*O)*se,e[4]=(f*U-u*Y-h*V)*se,e[5]=(t*Y-s*U+o*V)*se,e[6]=(y*L-E*b-S*D)*se,e[7]=(g*b-v*L+x*D)*se,e[8]=(u*$-d*U+h*C)*se,e[9]=(r*U-t*$-o*C)*se,e[10]=(E*I-T*L+S*w)*se,e[11]=(m*L-g*I-x*w)*se,e[12]=(d*V-u*z-f*C)*se,e[13]=(t*z-r*V+s*C)*se,e[14]=(T*D-E*O-y*w)*se,e[15]=(g*O-m*D+v*w)*se,this}scale(e){const t=this.elements,r=e.x,s=e.y,o=e.z;return t[0]*=r,t[4]*=s,t[8]*=o,t[1]*=r,t[5]*=s,t[9]*=o,t[2]*=r,t[6]*=s,t[10]*=o,t[3]*=r,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,s))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),s=Math.sin(t),o=1-r,u=e.x,d=e.y,f=e.z,h=o*u,g=o*d;return this.set(h*u+r,h*d-s*f,h*f+s*d,0,h*d+s*f,g*d+r,g*f-s*u,0,h*f-s*d,g*f+s*u,o*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,s,o,u){return this.set(1,r,o,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,r){const s=this.elements,o=t._x,u=t._y,d=t._z,f=t._w,h=o+o,g=u+u,m=d+d,v=o*h,x=o*g,E=o*m,T=u*g,y=u*m,S=d*m,w=f*h,D=f*g,L=f*m,O=r.x,I=r.y,b=r.z;return s[0]=(1-(T+S))*O,s[1]=(x+L)*O,s[2]=(E-D)*O,s[3]=0,s[4]=(x-L)*I,s[5]=(1-(v+S))*I,s[6]=(y+w)*I,s[7]=0,s[8]=(E+D)*b,s[9]=(y-w)*b,s[10]=(1-(v+T))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,r){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const o=this.determinantAffine();if(o===0)return r.set(1,1,1),t.identity(),this;let u=$s.set(s[0],s[1],s[2]).length();const d=$s.set(s[4],s[5],s[6]).length(),f=$s.set(s[8],s[9],s[10]).length();o<0&&(u=-u),Yi.copy(this);const h=1/u,g=1/d,m=1/f;return Yi.elements[0]*=h,Yi.elements[1]*=h,Yi.elements[2]*=h,Yi.elements[4]*=g,Yi.elements[5]*=g,Yi.elements[6]*=g,Yi.elements[8]*=m,Yi.elements[9]*=m,Yi.elements[10]*=m,t.setFromRotationMatrix(Yi),r.x=u,r.y=d,r.z=f,this}makePerspective(e,t,r,s,o,u,d=tr,f=!1){const h=this.elements,g=2*o/(t-e),m=2*o/(r-s),v=(t+e)/(t-e),x=(r+s)/(r-s);let E,T;if(f)E=o/(u-o),T=u*o/(u-o);else if(d===tr)E=-(u+o)/(u-o),T=-2*u*o/(u-o);else if(d===Dl)E=-u/(u-o),T=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=m,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,s,o,u,d=tr,f=!1){const h=this.elements,g=2/(t-e),m=2/(r-s),v=-(t+e)/(t-e),x=-(r+s)/(r-s);let E,T;if(f)E=1/(u-o),T=u/(u-o);else if(d===tr)E=-2/(u-o),T=-(u+o)/(u-o);else if(d===Dl)E=-1/(u-o),T=-o/(u-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=m,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=E,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let s=0;s<16;s++)if(t[s]!==r[s])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};rd.prototype.isMatrix4=!0;let rn=rd;const $s=new fe,Yi=new rn,VA=new fe(0,0,0),WA=new fe(1,1,1),Ma=new fe,oc=new fe,hi=new fe,ny=new rn,iy=new Yr;class Zr{constructor(e=0,t=0,r=0,s=Zr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,s=this._order){return this._x=e,this._y=t,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const s=e.elements,o=s[0],u=s[4],d=s[8],f=s[1],h=s[5],g=s[9],m=s[2],v=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-Rt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(d,o)):(this._x=Math.atan2(-g,x),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return ny.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ny,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return iy.setFromEuler(this),this.setFromQuaternion(iy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zr.DEFAULT_ORDER="XYZ";class Fm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $A=0;const ry=new fe,Xs=new Yr,Fr=new rn,lc=new fe,al=new fe,XA=new fe,qA=new Yr,ay=new fe(1,0,0),sy=new fe(0,1,0),oy=new fe(0,0,1),ly={type:"added"},YA={type:"removed"},qs={type:"childadded",child:null},Th={type:"childremoved",child:null};class Pn extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$A++}),this.uuid=Ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new fe,t=new Zr,r=new Yr,s=new fe(1,1,1);function o(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(o),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rn},normalMatrix:{value:new dt}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(ay,e)}rotateY(e){return this.rotateOnAxis(sy,e)}rotateZ(e){return this.rotateOnAxis(oy,e)}translateOnAxis(e,t){return ry.copy(e).applyQuaternion(this.quaternion),this.position.add(ry.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ay,e)}translateY(e){return this.translateOnAxis(sy,e)}translateZ(e){return this.translateOnAxis(oy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?lc.copy(e):lc.set(e,t,r);const s=this.parent;this.updateWorldMatrix(!0,!1),al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fr.lookAt(al,lc,this.up):Fr.lookAt(lc,al,this.up),this.quaternion.setFromRotationMatrix(Fr),s&&(Fr.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(Fr),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(It("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ly),qs.child=e,this.dispatchEvent(qs),qs.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(YA),Th.child=e,this.dispatchEvent(Th),Th.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ly),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,s=this.children.length;r<s;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const s=this.children;for(let o=0,u=s.length;o<u;o++)s[o].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,e,XA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,qA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,s=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*r-o[8]*s,o[13]+=r-o[1]*t-o[5]*r-o[9]*s,o[14]+=s-o[2]*t-o[6]*r-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const o=this.children;for(let u=0,d=o.length;u<d;u++)o[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(d=>({...d})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let h=0,g=f.length;h<g;h++){const m=f[h];o(e.shapes,m)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,h=this.material.length;f<h;f++)d.push(o(e.materials,this.material[f]));s.material=d}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let d=0;d<this.children.length;d++)s.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];s.animations.push(o(e.animations,f))}}if(t){const d=u(e.geometries),f=u(e.materials),h=u(e.textures),g=u(e.images),m=u(e.shapes),v=u(e.skeletons),x=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),f.length>0&&(r.materials=f),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),m.length>0&&(r.shapes=m),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),E.length>0&&(r.nodes=E)}return r.object=s,r;function u(d){const f=[];for(const h in d){const g=d[h];delete g.metadata,f.push(g)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const s=e.children[r];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Pn.DEFAULT_UP=new fe(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class lo extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KA={type:"move"};class Rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new fe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new fe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new fe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new fe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let s=null,o=null,u=null;const d=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,r),S=this._getHandJoint(h,T);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const g=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],v=g.position.distanceTo(m.position),x=.02,E=.005;h.inputState.pinching&&v>x+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=x-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,r),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(s=t.getPose(e.targetRaySpace,r),s===null&&o!==null&&(s=o),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(KA)))}return d!==null&&(d.visible=s!==null),f!==null&&(f.visible=o!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new lo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Wx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ea={h:0,s:0,l:0},uc={h:0,s:0,l:0};function Ah(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Mt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,s=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Tt.colorSpaceToWorking(this,s),this}setHSL(e,t,r,s=Tt.workingColorSpace){if(e=IA(e,1),t=Rt(t,0,1),r=Rt(r,0,1),t===0)this.r=this.g=this.b=r;else{const o=r<=.5?r*(1+t):r+t-r*t,u=2*r-o;this.r=Ah(u,o,e+1/3),this.g=Ah(u,o,e),this.b=Ah(u,o,e-1/3)}return Tt.colorSpaceToWorking(this,s),this}setStyle(e,t=ei){function r(o){o!==void 0&&parseFloat(o)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=s[1],d=s[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(o[4]),this.setRGB(Math.min(100,parseFloat(o[1]))/100,Math.min(100,parseFloat(o[2]))/100,Math.min(100,parseFloat(o[3]))/100,t);break;case"hsl":case"hsla":if(o=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:ct("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ei){const r=Wx[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Tt.workingToColorSpace(Fn.copy(this),e),Math.round(Rt(Fn.r*255,0,255))*65536+Math.round(Rt(Fn.g*255,0,255))*256+Math.round(Rt(Fn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(Fn.copy(this),t);const r=Fn.r,s=Fn.g,o=Fn.b,u=Math.max(r,s,o),d=Math.min(r,s,o);let f,h;const g=(d+u)/2;if(d===u)f=0,h=0;else{const m=u-d;switch(h=g<=.5?m/(u+d):m/(2-u-d),u){case r:f=(s-o)/m+(s<o?6:0);break;case s:f=(o-r)/m+2;break;case o:f=(r-s)/m+4;break}f/=6}return e.h=f,e.s=h,e.l=g,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=ei){Tt.workingToColorSpace(Fn.copy(this),e);const t=Fn.r,r=Fn.g,s=Fn.b;return e!==ei?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(s*255)})`}offsetHSL(e,t,r){return this.getHSL(Ea),this.setHSL(Ea.h+e,Ea.s+t,Ea.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ea),e.getHSL(uc);const r=xh(Ea.h,uc.h,t),s=xh(Ea.s,uc.s,t),o=xh(Ea.l,uc.l,t);return this.setHSL(r,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*r+o[6]*s,this.g=o[1]*t+o[4]*r+o[7]*s,this.b=o[2]*t+o[5]*r+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Mt;Mt.NAMES=Wx;class km{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new Mt(e),this.near=t,this.far=r}clone(){return new km(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ZA extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zr,this.environmentIntensity=1,this.environmentRotation=new Zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ki=new fe,kr=new fe,Ch=new fe,Br=new fe,Ys=new fe,Ks=new fe,uy=new fe,Ph=new fe,Lh=new fe,Dh=new fe,Ih=new on,Nh=new on,Oh=new on;class er{constructor(e=new fe,t=new fe,r=new fe){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,s){s.subVectors(r,t),Ki.subVectors(e,t),s.cross(Ki);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,r,s,o){Ki.subVectors(s,t),kr.subVectors(r,t),Ch.subVectors(e,t);const u=Ki.dot(Ki),d=Ki.dot(kr),f=Ki.dot(Ch),h=kr.dot(kr),g=kr.dot(Ch),m=u*h-d*d;if(m===0)return o.set(0,0,0),null;const v=1/m,x=(h*f-d*g)*v,E=(u*g-d*f)*v;return o.set(1-x-E,E,x)}static containsPoint(e,t,r,s){return this.getBarycoord(e,t,r,s,Br)===null?!1:Br.x>=0&&Br.y>=0&&Br.x+Br.y<=1}static getInterpolation(e,t,r,s,o,u,d,f){return this.getBarycoord(e,t,r,s,Br)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,Br.x),f.addScaledVector(u,Br.y),f.addScaledVector(d,Br.z),f)}static getInterpolatedAttribute(e,t,r,s,o,u){return Ih.setScalar(0),Nh.setScalar(0),Oh.setScalar(0),Ih.fromBufferAttribute(e,t),Nh.fromBufferAttribute(e,r),Oh.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(Ih,o.x),u.addScaledVector(Nh,o.y),u.addScaledVector(Oh,o.z),u}static isFrontFacing(e,t,r,s){return Ki.subVectors(r,t),kr.subVectors(e,t),Ki.cross(kr).dot(s)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,s){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,r,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ki.subVectors(this.c,this.b),kr.subVectors(this.a,this.b),Ki.cross(kr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return er.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return er.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,s,o){return er.getInterpolation(e,this.a,this.b,this.c,t,r,s,o)}containsPoint(e){return er.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return er.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,s=this.b,o=this.c;let u,d;Ys.subVectors(s,r),Ks.subVectors(o,r),Ph.subVectors(e,r);const f=Ys.dot(Ph),h=Ks.dot(Ph);if(f<=0&&h<=0)return t.copy(r);Lh.subVectors(e,s);const g=Ys.dot(Lh),m=Ks.dot(Lh);if(g>=0&&m<=g)return t.copy(s);const v=f*m-g*h;if(v<=0&&f>=0&&g<=0&&f-g>0)return u=f/(f-g),t.copy(r).addScaledVector(Ys,u);Dh.subVectors(e,o);const x=Ys.dot(Dh),E=Ks.dot(Dh);if(E>=0&&x<=E)return t.copy(o);const T=x*h-f*E;if(T<=0&&h>=0&&E<=0)return d=h/(h-E),t.copy(r).addScaledVector(Ks,d);const y=g*E-x*m;if(y<=0&&m-g>=0&&x-E>=0)return uy.subVectors(o,s),d=(m-g)/(m-g+(x-E)),t.copy(s).addScaledVector(uy,d);const S=1/(y+T+v);return u=T*S,d=v*S,t.copy(r).addScaledVector(Ys,u).addScaledVector(Ks,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Fl{constructor(e=new fe(1/0,1/0,1/0),t=new fe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const o=r.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let u=0,d=o.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Zi):Zi.fromBufferAttribute(o,u),Zi.applyMatrix4(e.matrixWorld),this.expandByPoint(Zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),cc.copy(r.boundingBox)),cc.applyMatrix4(e.matrixWorld),this.union(cc)}const s=e.children;for(let o=0,u=s.length;o<u;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sl),dc.subVectors(this.max,sl),Zs.subVectors(e.a,sl),js.subVectors(e.b,sl),Js.subVectors(e.c,sl),ba.subVectors(js,Zs),wa.subVectors(Js,js),as.subVectors(Zs,Js);let t=[0,-ba.z,ba.y,0,-wa.z,wa.y,0,-as.z,as.y,ba.z,0,-ba.x,wa.z,0,-wa.x,as.z,0,-as.x,-ba.y,ba.x,0,-wa.y,wa.x,0,-as.y,as.x,0];return!Uh(t,Zs,js,Js,dc)||(t=[1,0,0,0,1,0,0,0,1],!Uh(t,Zs,js,Js,dc))?!1:(fc.crossVectors(ba,wa),t=[fc.x,fc.y,fc.z],Uh(t,Zs,js,Js,dc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zr=[new fe,new fe,new fe,new fe,new fe,new fe,new fe,new fe],Zi=new fe,cc=new Fl,Zs=new fe,js=new fe,Js=new fe,ba=new fe,wa=new fe,as=new fe,sl=new fe,dc=new fe,fc=new fe,ss=new fe;function Uh(n,e,t,r,s){for(let o=0,u=n.length-3;o<=u;o+=3){ss.fromArray(n,o);const d=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),f=e.dot(ss),h=t.dot(ss),g=r.dot(ss);if(Math.max(-Math.max(f,h,g),Math.min(f,h,g))>d)return!1}return!0}const vn=new fe,hc=new Et;let jA=0;class cs extends vs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=AA,this.updateRanges=[],this.gpuType=xr,this.version=0,this._normalizationScale=e!==void 0?Om(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[r+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)hc.fromBufferAttribute(this,t),hc.applyMatrix3(e),this.setXY(t,hc.x,hc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix3(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=s,this}setXYZW(e,t,r,s,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),s=this._normalize(s),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):OA(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):UA(e,this.array)}}class $x extends cs{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Xx extends cs{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class $n extends cs{constructor(e,t,r){super(new Float32Array(e),t,r)}}const JA=new Fl,ol=new fe,Fh=new fe;class Bm{constructor(e=new fe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):JA.setFromPoints(e).getCenter(r);let s=0;for(let o=0,u=e.length;o<u;o++)s=Math.max(s,r.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ol.subVectors(e,this.center);const t=ol.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),s=(r-this.radius)*.5;this.center.addScaledVector(ol,s/r),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ol.copy(e.center).add(Fh)),this.expandByPoint(ol.copy(e.center).sub(Fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let QA=0;const Ci=new rn,kh=new Pn,Qs=new fe,pi=new Fl,ll=new Fl,Tn=new fe;class Qr extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QA++}),this.uuid=Ul(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(CA(e)?Xx:$x)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const o=new dt().getNormalMatrix(e);r.applyNormalMatrix(o),r.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,t,r){return Ci.makeTranslation(e,t,r),this.applyMatrix4(Ci),this}scale(e,t,r){return Ci.makeScale(e,t,r),this.applyMatrix4(Ci),this}lookAt(e){return kh.lookAt(e),kh.updateMatrix(),this.applyMatrix4(kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let s=0,o=e.length;s<o;s++){const u=e[s];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new $n(r,3))}else{const r=Math.min(e.length,t.count);for(let s=0;s<r;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new fe(-1/0,-1/0,-1/0),new fe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];pi.setFromBufferAttribute(o),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bm);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new fe,1/0);return}if(e){const r=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const d=t[o];ll.setFromBufferAttribute(d),this.morphTargetsRelative?(Tn.addVectors(pi.min,ll.min),pi.expandByPoint(Tn),Tn.addVectors(pi.max,ll.max),pi.expandByPoint(Tn)):(pi.expandByPoint(ll.min),pi.expandByPoint(ll.max))}pi.getCenter(r);let s=0;for(let o=0,u=e.count;o<u;o++)Tn.fromBufferAttribute(e,o),s=Math.max(s,r.distanceToSquared(Tn));if(t)for(let o=0,u=t.length;o<u;o++){const d=t[o],f=this.morphTargetsRelative;for(let h=0,g=d.count;h<g;h++)Tn.fromBufferAttribute(d,h),f&&(Qs.fromBufferAttribute(e,h),Tn.add(Qs)),s=Math.max(s,r.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,s=t.normal,o=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new cs(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],f=[],h=new Uint8Array(r.count);for(let V=0;V<r.count;V++)d[V]=new fe,f[V]=new fe;const g=new fe,m=new fe,v=new fe,x=new Et,E=new Et,T=new Et,y=new fe,S=new fe;function w(V,U,z){h[V]=h[U]=h[z]=1,g.fromBufferAttribute(r,V),m.fromBufferAttribute(r,U),v.fromBufferAttribute(r,z),x.fromBufferAttribute(o,V),E.fromBufferAttribute(o,U),T.fromBufferAttribute(o,z),m.sub(g),v.sub(g),E.sub(x),T.sub(x);const $=1/(E.x*T.y-T.x*E.y);isFinite($)&&(y.copy(m).multiplyScalar(T.y).addScaledVector(v,-E.y).multiplyScalar($),S.copy(v).multiplyScalar(E.x).addScaledVector(m,-T.x).multiplyScalar($),d[V].add(y),d[U].add(y),d[z].add(y),f[V].add(S),f[U].add(S),f[z].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let V=0,U=D.length;V<U;++V){const z=D[V],$=z.start,Y=z.count;for(let B=$,se=$+Y;B<se;B+=3)w(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const L=new fe,O=new fe,I=new fe,b=new fe;function C(V){I.fromBufferAttribute(s,V),b.copy(I);const U=d[V];L.copy(U),L.sub(I.multiplyScalar(I.dot(U))).normalize(),O.crossVectors(b,U);const $=O.dot(f[V])<0?-1:1;u.setXYZW(V,L.x,L.y,L.z,$)}for(let V=0,U=r.count;V<U;++V)h[V]&&C(V);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new cs(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const s=new fe,o=new fe,u=new fe,d=new fe,f=new fe,h=new fe,g=new fe,m=new fe;if(e)for(let v=0,x=e.count;v<x;v+=3){const E=e.getX(v+0),T=e.getX(v+1),y=e.getX(v+2);s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,T),u.fromBufferAttribute(t,y),g.subVectors(u,o),m.subVectors(s,o),g.cross(m),d.fromBufferAttribute(r,E),f.fromBufferAttribute(r,T),h.fromBufferAttribute(r,y),d.add(g),f.add(g),h.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,x=t.count;v<x;v+=3)s.fromBufferAttribute(t,v+0),o.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),g.subVectors(u,o),m.subVectors(s,o),g.cross(m),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Tn.fromBufferAttribute(e,t),Tn.normalize(),e.setXYZ(t,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(d,f){const h=d.array,g=d.itemSize,m=d.normalized,v=new h.constructor(f.length*g);let x=0,E=0;for(let T=0,y=f.length;T<y;T++){d.isInterleavedBufferAttribute?x=f[T]*d.data.stride+d.offset:x=f[T]*g;for(let S=0;S<g;S++)v[E++]=h[x++]}return new cs(v,g,m)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qr,r=this.index.array,s=this.attributes;for(const d in s){const f=s[d],h=e(f,r);t.setAttribute(d,h)}const o=this.morphAttributes;for(const d in o){const f=[],h=o[d];for(let g=0,m=h.length;g<m;g++){const v=h[g],x=e(v,r);f.push(x)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,f=u.length;d<f;d++){const h=u[d];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const h=r[f];e.data.attributes[f]=h.toJSON(e.data)}const s={};let o=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],g=[];for(let m=0,v=h.length;m<v;m++){const x=h[m];g.push(x.toJSON(e.data))}g.length>0&&(s[f]=g,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const s=e.attributes;for(const h in s){const g=s[h];this.setAttribute(h,g.clone(t))}const o=e.morphAttributes;for(const h in o){const g=[],m=o[h];for(let v=0,x=m.length;v<x;v++)g.push(m[v].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,g=u.length;h<g;h++){const m=u[h];this.addGroup(m.start,m.count,m.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bh=new fe,eC=new fe,tC=new dt;class Ca{constructor(e=new fe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,s){return this.normal.set(e,t,r),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const s=Bh.subVectors(r,t).cross(eC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const s=e.delta(Bh),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||tC.getNormalMatrix(e),s=this.coplanarPoint(Bh).applyMatrix4(e),o=this.normal.applyMatrix3(r).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let nC=0;class kl extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nC++}),this.uuid=Ul(),this.name="",this.type="Material",this.blending=Ml,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mx,this.blendDst=Ex,this.blendEquation=ao,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=MA,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yh,this.stencilZFail=yh,this.stencilZPass=yh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ct(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(r):s&&s.isVector2&&r&&r.isVector2||s&&s.isEuler&&r&&r.isEuler||s&&s.isVector3&&r&&r.isVector3?s.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function s(o){const u=[];for(const d in o){const f=o[d];delete f.metadata,u.push(f)}return u}if(t){const o=s(e.textures),u=s(e.images);o.length>0&&(r.textures=o),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Ca().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Et().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Et().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const s=t.length;r=new Array(s);for(let o=0;o!==s;++o)r[o]=t[o].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Hr=new fe,zh=new fe,pc=new fe,mc=new fe;class qx{constructor(e=new fe,t=new fe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hr.copy(this.origin).addScaledVector(this.direction,t),Hr.distanceToSquared(e))}distanceSqToSegment(e,t,r,s){zh.copy(e).add(t).multiplyScalar(.5),pc.copy(t).sub(e).normalize(),mc.copy(this.origin).sub(zh);const o=e.distanceTo(t)*.5,u=-this.direction.dot(pc),d=mc.dot(this.direction),f=-mc.dot(pc),h=mc.lengthSq(),g=Math.abs(1-u*u);let m,v,x,E;if(g>0)if(m=u*f-d,v=u*d-f,E=o*g,m>=0)if(v>=-E)if(v<=E){const T=1/g;m*=T,v*=T,x=m*(m+u*v+2*d)+v*(u*m+v+2*f)+h}else v=o,m=Math.max(0,-(u*v+d)),x=-m*m+v*(v+2*f)+h;else v=-o,m=Math.max(0,-(u*v+d)),x=-m*m+v*(v+2*f)+h;else v<=-E?(m=Math.max(0,-(-u*o+d)),v=m>0?-o:Math.min(Math.max(-o,-f),o),x=-m*m+v*(v+2*f)+h):v<=E?(m=0,v=Math.min(Math.max(-o,-f),o),x=v*(v+2*f)+h):(m=Math.max(0,-(u*o+d)),v=m>0?o:Math.min(Math.max(-o,-f),o),x=-m*m+v*(v+2*f)+h);else v=u>0?-o:o,m=Math.max(0,-(u*v+d)),x=-m*m+v*(v+2*f)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(zh).addScaledVector(pc,v),x}intersectSphere(e,t){if(e.radius<0)return null;Hr.subVectors(e.center,this.origin);const r=Hr.dot(this.direction),s=Hr.dot(Hr)-r*r,o=e.radius*e.radius;if(s>o)return null;const u=Math.sqrt(o-s),d=r-u,f=r+u;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,s,o,u,d,f;const h=1/this.direction.x,g=1/this.direction.y,m=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,s=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,s=(e.min.x-v.x)*h),g>=0?(o=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(o=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),r>u||o>s||((o>r||isNaN(r))&&(r=o),(u<s||isNaN(s))&&(s=u),m>=0?(d=(e.min.z-v.z)*m,f=(e.max.z-v.z)*m):(d=(e.max.z-v.z)*m,f=(e.min.z-v.z)*m),r>f||d>s)||((d>r||r!==r)&&(r=d),(f<s||s!==s)&&(s=f),s<0)?null:this.at(r>=0?r:s,t)}intersectsBox(e){return this.intersectBox(e,Hr)!==null}intersectTriangle(e,t,r,s,o){const u=this.origin,d=this.direction,f=d.x,h=d.y,g=d.z,m=e.x-u.x,v=e.y-u.y,x=e.z-u.z,E=t.x-u.x,T=t.y-u.y,y=t.z-u.z,S=r.x-u.x,w=r.y-u.y,D=r.z-u.z,L=Math.abs(f),O=Math.abs(h),I=Math.abs(g);let b,C,V,U,z,$,Y,B,se,re,ne,ee;if(L>=O&&L>=I?(V=f,$=m,se=E,ee=S,f>=0?(b=h,C=g,U=v,z=x,Y=T,B=y,re=w,ne=D):(b=g,C=h,U=x,z=v,Y=y,B=T,re=D,ne=w)):O>=I?(V=h,$=v,se=T,ee=w,h>=0?(b=g,C=f,U=x,z=m,Y=y,B=E,re=D,ne=S):(b=f,C=g,U=m,z=x,Y=E,B=y,re=S,ne=D)):(V=g,$=x,se=y,ee=D,g>=0?(b=f,C=h,U=m,z=v,Y=E,B=T,re=S,ne=w):(b=h,C=f,U=v,z=m,Y=T,B=E,re=w,ne=S)),V===0)return null;const Z=b/V,j=C/V,F=1/V,te=U-Z*$,Ae=z-j*$,ae=Y-Z*se,Me=B-j*se,be=re-Z*ee,Ce=ne-j*ee,ye=be*Me-Ce*ae,Be=te*Ce-Ae*be,ft=ae*Ae-Me*te;if(s){if(ye<0||Be<0||ft<0)return null}else if((ye<0||Be<0||ft<0)&&(ye>0||Be>0||ft>0))return null;const Ze=ye+Be+ft;if(Ze===0)return null;const ht=F*(ye*$+Be*se+ft*ee);return(Ze>0?ht<0:ht>0)?null:this.at(ht/Ze,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class so extends kl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.combine=bx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cy=new rn,os=new qx,gc=new Bm,dy=new fe,vc=new fe,_c=new fe,yc=new fe,Hh=new fe,Sc=new fe,fy=new fe,xc=new fe;class Ua extends Pn{constructor(e=new Qr,t=new so){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const s=t[r[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const d=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=o}}}}getVertexPosition(e,t){const r=this.geometry,s=r.attributes.position,o=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(s,e);const d=this.morphTargetInfluences;if(o&&d){Sc.set(0,0,0);for(let f=0,h=o.length;f<h;f++){const g=d[f],m=o[f];g!==0&&(Hh.fromBufferAttribute(m,e),u?Sc.addScaledVector(Hh,g):Sc.addScaledVector(Hh.sub(t),g))}t.add(Sc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gc.copy(r.boundingSphere),gc.applyMatrix4(o),os.copy(e.ray).recast(e.near),!(gc.containsPoint(os.origin)===!1&&(os.intersectSphere(gc,dy)===null||os.origin.distanceToSquared(dy)>(e.far-e.near)**2))&&(cy.copy(o).invert(),os.copy(e.ray).applyMatrix4(cy),!(r.boundingBox!==null&&os.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,r){let s;const o=this.geometry,u=this.material,d=o.index,f=o.attributes.position,h=o.attributes.uv,g=o.attributes.uv1,m=o.attributes.normal,v=o.groups,x=o.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,T=v.length;E<T;E++){const y=v[E],S=u[y.materialIndex],w=Math.max(y.start,x.start),D=Math.min(d.count,Math.min(y.start+y.count,x.start+x.count));for(let L=w,O=D;L<O;L+=3){const I=d.getX(L),b=d.getX(L+1),C=d.getX(L+2);s=Mc(this,S,e,r,h,g,m,I,b,C),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const E=Math.max(0,x.start),T=Math.min(d.count,x.start+x.count);for(let y=E,S=T;y<S;y+=3){const w=d.getX(y),D=d.getX(y+1),L=d.getX(y+2);s=Mc(this,u,e,r,h,g,m,w,D,L),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(u))for(let E=0,T=v.length;E<T;E++){const y=v[E],S=u[y.materialIndex],w=Math.max(y.start,x.start),D=Math.min(f.count,Math.min(y.start+y.count,x.start+x.count));for(let L=w,O=D;L<O;L+=3){const I=L,b=L+1,C=L+2;s=Mc(this,S,e,r,h,g,m,I,b,C),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const E=Math.max(0,x.start),T=Math.min(f.count,x.start+x.count);for(let y=E,S=T;y<S;y+=3){const w=y,D=y+1,L=y+2;s=Mc(this,u,e,r,h,g,m,w,D,L),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function iC(n,e,t,r,s,o,u,d){let f;if(e.side===ii?f=r.intersectTriangle(u,o,s,!0,d):f=r.intersectTriangle(s,o,u,e.side===ds,d),f===null)return null;xc.copy(d),xc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(xc);return h<t.near||h>t.far?null:{distance:h,point:xc.clone(),object:n}}function Mc(n,e,t,r,s,o,u,d,f,h){n.getVertexPosition(d,vc),n.getVertexPosition(f,_c),n.getVertexPosition(h,yc);const g=iC(n,e,t,r,vc,_c,yc,fy);if(g){const m=new fe;er.getBarycoord(fy,vc,_c,yc,m),s&&(g.uv=er.getInterpolatedAttribute(s,d,f,h,m,new Et)),o&&(g.uv1=er.getInterpolatedAttribute(o,d,f,h,m,new Et)),u&&(g.normal=er.getInterpolatedAttribute(u,d,f,h,m,new fe),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:f,c:h,normal:new fe,materialIndex:0};er.getNormal(vc,_c,yc,v.normal),g.face=v,g.barycoord=m}return g}class rC extends Bn{constructor(e=null,t=1,r=1,s,o,u,d,f,h=Cn,g=Cn,m,v){super(null,u,d,f,h,g,s,o,m,v),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ls=new Bm,aC=new Et(.5,.5),Ec=new fe;class Il{constructor(e=new Ca,t=new Ca,r=new Ca,s=new Ca,o=new Ca,u=new Ca){this.planes=[e,t,r,s,o,u]}set(e,t,r,s,o,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(s),d[4].copy(o),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=tr,r=!1){const s=this.planes,o=e.elements,u=o[0],d=o[1],f=o[2],h=o[3],g=o[4],m=o[5],v=o[6],x=o[7],E=o[8],T=o[9],y=o[10],S=o[11],w=o[12],D=o[13],L=o[14],O=o[15];if(s[0].setComponents(h-u,x-g,S-E,O-w).normalize(),s[1].setComponents(h+u,x+g,S+E,O+w).normalize(),s[2].setComponents(h+d,x+m,S+T,O+D).normalize(),s[3].setComponents(h-d,x-m,S-T,O-D).normalize(),r)s[4].setComponents(f,v,y,L).normalize(),s[5].setComponents(h-f,x-v,S-y,O-L).normalize();else if(s[4].setComponents(h-f,x-v,S-y,O-L).normalize(),t===tr)s[5].setComponents(h+f,x+v,S+y,O+L).normalize();else if(t===Dl)s[5].setComponents(f,v,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){ls.center.set(0,0,0);const t=aC.distanceTo(e.center);return ls.radius=.7071067811865476+t,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){const t=this.planes,r=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(r)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const s=t[r];if(Ec.x=s.normal.x>0?e.max.x:e.min.x,Ec.y=s.normal.y>0?e.max.y:e.min.y,Ec.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const hy=new rn;class zm{constructor(){this.coordinateSystem=tr,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let s=0;s<t.length;s++){const o=t[s];hy.multiplyMatrices(o.projectionMatrix,o.matrixWorldInverse),r[s]===void 0&&(r[s]=new Il),r[s].setFromProjectionMatrix(hy,o.coordinateSystem,o.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Il),t[s].copy(r[s]);return this._count=e._count,this}clone(){return new zm().copy(this)}}class Yx extends Bn{constructor(e=[],t=mo,r,s,o,u,d,f,h,g){super(e,t,r,s,o,u,d,f,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ul extends Bn{constructor(e,t,r,s,o,u,d,f,h){super(e,t,r,s,o,u,d,f,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vo extends Bn{constructor(e,t,r=Tr,s,o,u,d=Cn,f=Cn,h,g=Oa,m=1){if(g!==Oa&&g!==Ia)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:m};super(v,s,o,u,d,f,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Um(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Kx extends vo{constructor(e,t=Tr,r=mo,s,o,u=Cn,d=Cn,f,h=Oa){const g={width:e,height:e,depth:1},m=[g,g,g,g,g,g];super(e,e,t,r,s,o,u,d,f,h),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Zx extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xo extends Qr{constructor(e=1,t=1,r=1,s=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:s,heightSegments:o,depthSegments:u};const d=this;s=Math.floor(s),o=Math.floor(o),u=Math.floor(u);const f=[],h=[],g=[],m=[];let v=0,x=0;E("z","y","x",-1,-1,r,t,e,u,o,0),E("z","y","x",1,-1,r,t,-e,u,o,1),E("x","z","y",1,1,e,r,t,s,u,2),E("x","z","y",1,-1,e,r,-t,s,u,3),E("x","y","z",1,-1,e,t,r,s,o,4),E("x","y","z",-1,-1,e,t,-r,s,o,5),this.setIndex(f),this.setAttribute("position",new $n(h,3)),this.setAttribute("normal",new $n(g,3)),this.setAttribute("uv",new $n(m,2));function E(T,y,S,w,D,L,O,I,b,C,V){const U=L/b,z=O/C,$=L/2,Y=O/2,B=I/2,se=b+1,re=C+1;let ne=0,ee=0;const Z=new fe;for(let j=0;j<re;j++){const F=j*z-Y;for(let te=0;te<se;te++){const Ae=te*U-$;Z[T]=Ae*w,Z[y]=F*D,Z[S]=B,h.push(Z.x,Z.y,Z.z),Z[T]=0,Z[y]=0,Z[S]=I>0?1:-1,g.push(Z.x,Z.y,Z.z),m.push(te/b),m.push(1-j/C),ne+=1}}for(let j=0;j<C;j++)for(let F=0;F<b;F++){const te=v+F+se*j,Ae=v+F+se*(j+1),ae=v+(F+1)+se*(j+1),Me=v+(F+1)+se*j;f.push(te,Ae,Me),f.push(Ae,ae,Me),ee+=6}d.addGroup(x,ee,V),x+=ee,v+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Nl extends Qr{constructor(e=1,t=1,r=1,s=32,o=1,u=!1,d=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:s,heightSegments:o,openEnded:u,thetaStart:d,thetaLength:f};const h=this;s=Math.floor(s),o=Math.floor(o);const g=[],m=[],v=[],x=[];let E=0;const T=[],y=r/2;let S=0;w(),u===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(g),this.setAttribute("position",new $n(m,3)),this.setAttribute("normal",new $n(v,3)),this.setAttribute("uv",new $n(x,2));function w(){const L=new fe,O=new fe;let I=0;const b=(t-e)/r;for(let C=0;C<=o;C++){const V=[],U=C/o,z=U*(t-e)+e;for(let $=0;$<=s;$++){const Y=$/s,B=Y*f+d,se=Math.sin(B),re=Math.cos(B);O.x=z*se,O.y=-U*r+y,O.z=z*re,m.push(O.x,O.y,O.z),L.set(se,b,re).normalize(),v.push(L.x,L.y,L.z),x.push(Y,1-U),V.push(E++)}T.push(V)}for(let C=0;C<s;C++)for(let V=0;V<o;V++){const U=T[V][C],z=T[V+1][C],$=T[V+1][C+1],Y=T[V][C+1];(e>0||V!==0)&&(g.push(U,z,Y),I+=3),(t>0||V!==o-1)&&(g.push(z,$,Y),I+=3)}h.addGroup(S,I,0),S+=I}function D(L){const O=E,I=new Et,b=new fe;let C=0;const V=L===!0?e:t,U=L===!0?1:-1;for(let $=1;$<=s;$++)m.push(0,y*U,0),v.push(0,U,0),x.push(.5,.5),E++;const z=E;for(let $=0;$<=s;$++){const B=$/s*f+d,se=Math.cos(B),re=Math.sin(B);b.x=V*re,b.y=y*U,b.z=V*se,m.push(b.x,b.y,b.z),v.push(0,U,0),I.x=se*.5+.5,I.y=re*.5*U+.5,x.push(I.x,I.y),E++}for(let $=0;$<s;$++){const Y=O+$,B=z+$;L===!0?g.push(B,B+1,Y):g.push(B+1,B,Y),C+=3}h.addGroup(S,C,L===!0?1:2),S+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qc extends Nl{constructor(e=1,t=1,r=32,s=1,o=!1,u=0,d=Math.PI*2){super(0,e,t,r,s,o,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:u,thetaLength:d}}static fromJSON(e){return new Qc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wr extends Qr{constructor(e=1,t=1,r=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:s};const o=e/2,u=t/2,d=Math.floor(r),f=Math.floor(s),h=d+1,g=f+1,m=e/d,v=t/f,x=[],E=[],T=[],y=[];for(let S=0;S<g;S++){const w=S*v-u;for(let D=0;D<h;D++){const L=D*m-o;E.push(L,-w,0),T.push(0,0,1),y.push(D/d),y.push(1-S/f)}}for(let S=0;S<f;S++)for(let w=0;w<d;w++){const D=w+h*S,L=w+h*(S+1),O=w+1+h*(S+1),I=w+1+h*S;x.push(D,L,I),x.push(L,O,I)}this.setIndex(x),this.setAttribute("position",new $n(E,3)),this.setAttribute("normal",new $n(T,3)),this.setAttribute("uv",new $n(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hm extends Qr{constructor(e=1,t=32,r=16,s=0,o=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:s,phiLength:o,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(u+d,Math.PI);let h=0;const g=[],m=new fe,v=new fe,x=[],E=[],T=[],y=[];for(let S=0;S<=r;S++){const w=[],D=S/r,L=u+D*d,O=e*Math.cos(L),I=Math.sqrt(e*e-O*O);let b=0;S===0&&u===0?b=.5/t:S===r&&f===Math.PI&&(b=-.5/t);for(let C=0;C<=t;C++){const V=C/t,U=s+V*o;m.x=-I*Math.cos(U),m.y=O,m.z=I*Math.sin(U),E.push(m.x,m.y,m.z),v.copy(m).normalize(),T.push(v.x,v.y,v.z),y.push(V+b,1-D),w.push(h++)}g.push(w)}for(let S=0;S<r;S++)for(let w=0;w<t;w++){const D=g[S][w+1],L=g[S][w],O=g[S+1][w],I=g[S+1][w+1];(S!==0||u>0)&&x.push(D,L,I),(S!==r-1||f<Math.PI)&&x.push(L,O,I)}this.setIndex(x),this.setAttribute("position",new $n(E,3)),this.setAttribute("normal",new $n(T,3)),this.setAttribute("uv",new $n(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function _o(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const s=n[t][r];if(py(s))s.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=s.clone();else if(Array.isArray(s))if(py(s[0])){const o=[];for(let u=0,d=s.length;u<d;u++)o[u]=s[u].clone();e[t][r]=o}else e[t][r]=s.slice();else e[t][r]=s}}return e}function Vn(n){const e={};for(let t=0;t<n.length;t++){const r=_o(n[t]);for(const s in r)e[s]=r[s]}return e}function py(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function sC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function jx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const oC={clone:_o,merge:Vn};var lC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hs extends kl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lC,this.fragmentShader=uC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_o(e.uniforms),this.uniformsGroups=sC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const s in this.extensions)this.extensions[s]===!0&&(r[s]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const s=e.uniforms[r];switch(this.uniforms[r]={},s.type){case"t":this.uniforms[r].value=t[s.value]||null;break;case"c":this.uniforms[r].value=new Mt().setHex(s.value);break;case"v2":this.uniforms[r].value=new Et().fromArray(s.value);break;case"v3":this.uniforms[r].value=new fe().fromArray(s.value);break;case"v4":this.uniforms[r].value=new on().fromArray(s.value);break;case"m3":this.uniforms[r].value=new dt().fromArray(s.value);break;case"m4":this.uniforms[r].value=new rn().fromArray(s.value);break;default:this.uniforms[r].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class cC extends hs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dC extends kl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cm,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fC extends kl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hC extends kl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Gm extends Pn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class pC extends Gm{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Gh=new rn,my=new fe,gy=new fe;class Jx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Il,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;my.setFromMatrixPosition(e.matrixWorld),t.position.copy(my),gy.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gy),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,s){Gh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Gh,e.coordinateSystem,e.reversedDepth);const o=this._frameExtents,u=s?s.z/o.x:1,d=s?s.w/o.y:1,f=s?s.x/o.x:0,h=s?s.y/o.y:0;e.coordinateSystem===Dl||e.reversedDepth?t.set(.5*u,0,0,.5*u+f,0,.5*d,0,.5*d+h,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+f,0,.5*d,0,.5*d+h,0,0,.5,.5,0,0,0,1),t.multiply(Gh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const bc=new fe,wc=new Yr,fr=new fe;class Qx extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=tr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bc,wc,fr),fr.x===1&&fr.y===1&&fr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bc,wc,fr.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(bc,wc,fr),fr.x===1&&fr.y===1&&fr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bc,wc,fr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ta=new fe,vy=new Et,_y=new Et;class Di extends Qx{constructor(e=50,t=1,r=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=dm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dm*2*Math.atan(Math.tan(Sh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Ta.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ta.x,Ta.y).multiplyScalar(-e/Ta.z),Ta.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ta.x,Ta.y).multiplyScalar(-e/Ta.z)}getViewSize(e,t){return this.getViewBounds(e,vy,_y),t.subVectors(_y,vy)}setViewOffset(e,t,r,s,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sh*.5*this.fov)/this.zoom,r=2*t,s=this.aspect*r,o=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,h=u.fullHeight;o+=u.offsetX*s/f,t-=u.offsetY*r/h,s*=u.width/f,r*=u.height/h}const d=this.filmOffset;d!==0&&(o+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class mC extends Jx{constructor(){super(new Di(90,1,.5,500)),this.isPointLightShadow=!0}}class yy extends Gm{constructor(e,t,r=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=s,this.shadow=new mC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class eM extends Qx{constructor(e=-1,t=1,r=1,s=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=s,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,s,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=r-e,u=r+e,d=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,u=o+h*this.view.width,d-=g*this.view.offsetY,f=d-g*this.view.height}this.projectionMatrix.makeOrthographic(o,u,d,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class gC extends Jx{constructor(){super(new eM(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vC extends Gm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new gC}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const eo=-90,to=1;class fm extends Pn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Di(eo,to,e,t);s.layers=this.layers,this.add(s);const o=new Di(eo,to,e,t);o.layers=this.layers,this.add(o);const u=new Di(eo,to,e,t);u.layers=this.layers,this.add(u);const d=new Di(eo,to,e,t);d.layers=this.layers,this.add(d);const f=new Di(eo,to,e,t);f.layers=this.layers,this.add(f);const h=new Di(eo,to,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,s,o,u,d,f]=t;for(const h of t)this.remove(h);if(e===tr)r.up.set(0,1,0),r.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Dl)r.up.set(0,-1,0),r.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,d,f,h,g]=this.children,m=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(r,1,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,4,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.mipmapsAutoUpdate=T,e.setRenderTarget(r,5,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(m,v,x),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class _C extends Di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const Sy=new rn;class yC{constructor(e,t,r=0,s=1/0){this.ray=new qx(e,t),this.near=r,this.far=s,this.camera=null,this.layers=new Fm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):It("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sy.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sy),this}intersectObject(e,t=!0,r=[]){return hm(e,this,r,t),r.sort(xy),r}intersectObjects(e,t=!0,r=[]){for(let s=0,o=e.length;s<o;s++)hm(e[s],this,r,t);return r.sort(xy),r}}function xy(n,e){return n.distance-e.distance}function hm(n,e,t,r){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&r===!0){const o=n.children;for(let u=0,d=o.length;u<d;u++)hm(o[u],e,t,!0)}}function My(n,e,t,r){const s=SC(r);switch(t){case Ux:return n*e;case kx:return n*e/s.components*s.byteLength;case Dm:return n*e/s.components*s.byteLength;case fs:return n*e*2/s.components*s.byteLength;case Im:return n*e*2/s.components*s.byteLength;case Fx:return n*e*3/s.components*s.byteLength;case Mr:return n*e*4/s.components*s.byteLength;case Nm:return n*e*4/s.components*s.byteLength;case Oc:case Uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fc:case kc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Op:case Fp:return Math.max(n,16)*Math.max(e,8)/4;case Np:case Up:return Math.max(n,8)*Math.max(e,8)/2;case kp:case Bp:case Hp:case Gp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zp:case Yc:case Vp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $p:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Xp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case qp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Yp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Kp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Zp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case jp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Jp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Qp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case em:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case tm:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case nm:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case im:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case rm:case am:case sm:return Math.ceil(n/4)*Math.ceil(e/4)*16;case om:case lm:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Kc:case um:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function SC(n){switch(n){case gi:case Dx:return{byteLength:1,components:1};case Ll:case Ix:case Rr:return{byteLength:2,components:1};case Pm:case Lm:return{byteLength:2,components:4};case Tr:case Cm:case xr:return{byteLength:4,components:1};case Nx:case Ox:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rm}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tM(){let n=null,e=!1,t=null,r=null;function s(o,u){r=n.requestAnimationFrame(s),t(o,u)}return{start:function(){e!==!0&&t!==null&&n!==null&&(r=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function xC(n){const e=new WeakMap;function t(d,f){const h=d.array,g=d.usage,m=h.byteLength,v=n.createBuffer();n.bindBuffer(f,v),n.bufferData(f,h,g),d.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=n.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:m}}function r(d,f,h){const g=f.array,m=f.updateRanges;if(n.bindBuffer(h,d),m.length===0)n.bufferSubData(h,0,g);else{m.sort((x,E)=>x.start-E.start);let v=0;for(let x=1;x<m.length;x++){const E=m[v],T=m[x];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,m[v]=T)}m.length=v+1;for(let x=0,E=m.length;x<E;x++){const T=m[x];n.bufferSubData(h,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function o(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(n.deleteBuffer(f.buffer),e.delete(d))}function u(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,t(d,f));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,d,f),h.version=d.version}}return{get:s,remove:o,update:u}}var MC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EC=`#ifdef USE_ALPHAHASH
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
#endif`,bC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AC=`#ifdef USE_AOMAP
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
#endif`,CC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PC=`#ifdef USE_BATCHING
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
#endif`,LC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,OC=`#ifdef USE_IRIDESCENCE
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
#endif`,UC=`#ifdef USE_BUMPMAP
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
#endif`,FC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,GC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,VC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,WC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$C=`#define PI 3.141592653589793
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
} // validated`,XC=`vec3 transformedNormal = objectNormal;
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
#endif`,qC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jC="gl_FragColor = linearToOutputTexel( gl_FragColor );",JC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QC=`#ifdef USE_ENVMAP
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
#endif`,eP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,tP=`#ifdef USE_ENVMAP
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
#endif`,nP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iP=`#ifdef USE_ENVMAP
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
#endif`,rP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lP=`#ifdef USE_GRADIENTMAP
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
}`,uP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fP=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,hP=`#ifdef USE_ENVMAP
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
#endif`,pP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_P=`PhysicalMaterial material;
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
#endif`,yP=`uniform sampler2D dfgLUT;
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
}`,SP=`
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
#endif`,xP=`#if defined( RE_IndirectDiffuse )
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
#endif`,MP=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EP=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,bP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LP=`#if defined( USE_POINTS_UV )
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
#endif`,DP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OP=`#if defined( USE_MORPHCOLORS )
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
#endif`,UP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FP=`#ifdef USE_MORPHTARGETS
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
#endif`,kP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,HP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,WP=`#ifdef USE_NORMALMAP
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
#endif`,$P=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZP=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iL=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rL=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sL=`float getShadowMask() {
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
}`,oL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lL=`#ifdef USE_SKINNING
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
#endif`,uL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cL=`#ifdef USE_SKINNING
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
#endif`,dL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pL=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mL=`#ifdef USE_TRANSMISSION
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
#endif`,gL=`#ifdef USE_TRANSMISSION
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
#endif`,vL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_L=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ML=`uniform sampler2D t2D;
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
}`,EL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bL=`uniform float backgroundBlurriness;
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
}`,wL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RL=`#include <common>
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
}`,AL=`#if DEPTH_PACKING == 3200
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
}`,CL=`#define DISTANCE
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
}`,PL=`#define DISTANCE
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
}`,LL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IL=`uniform float scale;
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
}`,NL=`uniform vec3 diffuse;
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
}`,OL=`#include <common>
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
}`,UL=`uniform vec3 diffuse;
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
}`,FL=`#define LAMBERT
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
}`,kL=`#define LAMBERT
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
}`,BL=`#define MATCAP
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
}`,zL=`#define MATCAP
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
}`,HL=`#define NORMAL
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
}`,GL=`#define NORMAL
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
}`,VL=`#define PHONG
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
}`,WL=`#define PHONG
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
}`,$L=`#define STANDARD
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
}`,XL=`#define STANDARD
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
}`,qL=`#define TOON
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
}`,YL=`#define TOON
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
}`,KL=`uniform float size;
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
}`,ZL=`uniform vec3 diffuse;
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
}`,jL=`#include <common>
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
}`,JL=`uniform vec3 color;
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
}`,QL=`uniform float rotation;
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
}`,e2=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:MC,alphahash_pars_fragment:EC,alphamap_fragment:bC,alphamap_pars_fragment:wC,alphatest_fragment:TC,alphatest_pars_fragment:RC,aomap_fragment:AC,aomap_pars_fragment:CC,batching_pars_vertex:PC,batching_vertex:LC,begin_vertex:DC,beginnormal_vertex:IC,bsdfs:NC,iridescence_fragment:OC,bumpmap_pars_fragment:UC,clipping_planes_fragment:FC,clipping_planes_pars_fragment:kC,clipping_planes_pars_vertex:BC,clipping_planes_vertex:zC,color_fragment:HC,color_pars_fragment:GC,color_pars_vertex:VC,color_vertex:WC,common:$C,defaultnormal_vertex:XC,displacementmap_pars_vertex:qC,displacementmap_vertex:YC,emissivemap_fragment:KC,emissivemap_pars_fragment:ZC,colorspace_fragment:jC,colorspace_pars_fragment:JC,envmap_fragment:QC,envmap_common_pars_fragment:eP,envmap_pars_fragment:tP,envmap_pars_vertex:nP,envmap_physical_pars_fragment:hP,envmap_vertex:iP,fog_vertex:rP,fog_pars_vertex:aP,fog_fragment:sP,fog_pars_fragment:oP,gradientmap_pars_fragment:lP,lightmap_pars_fragment:uP,lights_lambert_fragment:cP,lights_lambert_pars_fragment:dP,lights_pars_begin:fP,lights_toon_fragment:pP,lights_toon_pars_fragment:mP,lights_phong_fragment:gP,lights_phong_pars_fragment:vP,lights_physical_fragment:_P,lights_physical_pars_fragment:yP,lights_fragment_begin:SP,lights_fragment_maps:xP,lights_fragment_end:MP,lightprobes_pars_fragment:EP,logdepthbuf_fragment:bP,logdepthbuf_pars_fragment:wP,logdepthbuf_pars_vertex:TP,logdepthbuf_vertex:RP,map_fragment:AP,map_pars_fragment:CP,map_particle_fragment:PP,map_particle_pars_fragment:LP,metalnessmap_fragment:DP,metalnessmap_pars_fragment:IP,morphinstance_vertex:NP,morphcolor_vertex:OP,morphnormal_vertex:UP,morphtarget_pars_vertex:FP,morphtarget_vertex:kP,normal_fragment_begin:BP,normal_fragment_maps:zP,normal_pars_fragment:HP,normal_pars_vertex:GP,normal_vertex:VP,normalmap_pars_fragment:WP,clearcoat_normal_fragment_begin:$P,clearcoat_normal_fragment_maps:XP,clearcoat_pars_fragment:qP,iridescence_pars_fragment:YP,opaque_fragment:KP,packing:ZP,premultiplied_alpha_fragment:jP,project_vertex:JP,dithering_fragment:QP,dithering_pars_fragment:eL,roughnessmap_fragment:tL,roughnessmap_pars_fragment:nL,shadowmap_pars_fragment:iL,shadowmap_pars_vertex:rL,shadowmap_vertex:aL,shadowmask_pars_fragment:sL,skinbase_vertex:oL,skinning_pars_vertex:lL,skinning_vertex:uL,skinnormal_vertex:cL,specularmap_fragment:dL,specularmap_pars_fragment:fL,tonemapping_fragment:hL,tonemapping_pars_fragment:pL,transmission_fragment:mL,transmission_pars_fragment:gL,uv_pars_fragment:vL,uv_pars_vertex:_L,uv_vertex:yL,worldpos_vertex:SL,background_vert:xL,background_frag:ML,backgroundCube_vert:EL,backgroundCube_frag:bL,cube_vert:wL,cube_frag:TL,depth_vert:RL,depth_frag:AL,distance_vert:CL,distance_frag:PL,equirect_vert:LL,equirect_frag:DL,linedashed_vert:IL,linedashed_frag:NL,meshbasic_vert:OL,meshbasic_frag:UL,meshlambert_vert:FL,meshlambert_frag:kL,meshmatcap_vert:BL,meshmatcap_frag:zL,meshnormal_vert:HL,meshnormal_frag:GL,meshphong_vert:VL,meshphong_frag:WL,meshphysical_vert:$L,meshphysical_frag:XL,meshtoon_vert:qL,meshtoon_frag:YL,points_vert:KL,points_frag:ZL,shadow_vert:jL,shadow_frag:JL,sprite_vert:QL,sprite_frag:e2},ze={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},vr={basic:{uniforms:Vn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Vn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Vn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Vn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Vn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Mt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Vn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Vn([ze.points,ze.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Vn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Vn([ze.common,ze.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Vn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Vn([ze.sprite,ze.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:Vn([ze.common,ze.displacementmap,{referencePosition:{value:new fe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:Vn([ze.lights,ze.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};vr.physical={uniforms:Vn([vr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Tc={r:0,b:0,g:0},t2=new rn,nM=new dt;nM.set(-1,0,0,0,1,0,0,0,1);function n2(n,e,t,r,s,o){const u=new Mt(0);let d=s===!0?0:1,f,h,g=null,m=0,v=null;function x(w){let D=w.isScene===!0?w.background:null;if(D&&D.isTexture){const L=w.backgroundBlurriness>0;D=e.get(D,L)}return D}function E(w){let D=!1;const L=x(w);L===null?y(u,d):L&&L.isColor&&(y(L,1),D=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?t.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(n.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function T(w,D){const L=x(D);L&&L.isCubeTexture?(h===void 0&&(h=new Ua(new xo(1,1,1),new hs({name:"BackgroundCubeMaterial",uniforms:_o(vr.backgroundCube.uniforms),vertexShader:vr.backgroundCube.vertexShader,fragmentShader:vr.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,I,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=L,h.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(t2.makeRotationFromEuler(D.backgroundRotation)).transpose(),L.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(nM),h.material.toneMapped=Tt.getTransfer(L.colorSpace)!==Ut,(g!==L||m!==L.version||v!==n.toneMapping)&&(h.material.needsUpdate=!0,g=L,m=L.version,v=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(f===void 0&&(f=new Ua(new Wr(2,2),new hs({name:"BackgroundMaterial",uniforms:_o(vr.background.uniforms),vertexShader:vr.background.vertexShader,fragmentShader:vr.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=L,f.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,f.material.toneMapped=Tt.getTransfer(L.colorSpace)!==Ut,L.matrixAutoUpdate===!0&&L.updateMatrix(),f.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||m!==L.version||v!==n.toneMapping)&&(f.material.needsUpdate=!0,g=L,m=L.version,v=n.toneMapping),f.layers.enableAll(),w.unshift(f,f.geometry,f.material,0,0,null))}function y(w,D){w.getRGB(Tc,jx(n)),t.buffers.color.setClear(Tc.r,Tc.g,Tc.b,D,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(w,D=1){u.set(w),d=D,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(w){d=w,y(u,d)},render:E,addToRenderList:T,dispose:S}}function i2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},s=v(null);let o=s,u=!1;function d(z,$,Y,B,se){let re=!1;const ne=m(z,B,Y,$);o!==ne&&(o=ne,h(o.object)),re=x(z,B,Y,se),re&&E(z,B,Y,se),se!==null&&e.update(se,n.ELEMENT_ARRAY_BUFFER),(re||u)&&(u=!1,L(z,$,Y,B),se!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function f(){return n.createVertexArray()}function h(z){return n.bindVertexArray(z)}function g(z){return n.deleteVertexArray(z)}function m(z,$,Y,B){const se=B.wireframe===!0;let re=r[$.id];re===void 0&&(re={},r[$.id]=re);const ne=z.isInstancedMesh===!0?z.id:0;let ee=re[ne];ee===void 0&&(ee={},re[ne]=ee);let Z=ee[Y.id];Z===void 0&&(Z={},ee[Y.id]=Z);let j=Z[se];return j===void 0&&(j=v(f()),Z[se]=j),j}function v(z){const $=[],Y=[],B=[];for(let se=0;se<t;se++)$[se]=0,Y[se]=0,B[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:Y,attributeDivisors:B,object:z,attributes:{},index:null}}function x(z,$,Y,B){const se=o.attributes,re=$.attributes;let ne=0;const ee=Y.getAttributes();for(const Z in ee)if(ee[Z].location>=0){const F=se[Z];let te=re[Z];if(te===void 0&&(Z==="instanceMatrix"&&z.instanceMatrix&&(te=z.instanceMatrix),Z==="instanceColor"&&z.instanceColor&&(te=z.instanceColor)),F===void 0||F.attribute!==te||te&&F.data!==te.data)return!0;ne++}return o.attributesNum!==ne||o.index!==B}function E(z,$,Y,B){const se={},re=$.attributes;let ne=0;const ee=Y.getAttributes();for(const Z in ee)if(ee[Z].location>=0){let F=re[Z];F===void 0&&(Z==="instanceMatrix"&&z.instanceMatrix&&(F=z.instanceMatrix),Z==="instanceColor"&&z.instanceColor&&(F=z.instanceColor));const te={};te.attribute=F,F&&F.data&&(te.data=F.data),se[Z]=te,ne++}o.attributes=se,o.attributesNum=ne,o.index=B}function T(){const z=o.newAttributes;for(let $=0,Y=z.length;$<Y;$++)z[$]=0}function y(z){S(z,0)}function S(z,$){const Y=o.newAttributes,B=o.enabledAttributes,se=o.attributeDivisors;Y[z]=1,B[z]===0&&(n.enableVertexAttribArray(z),B[z]=1),se[z]!==$&&(n.vertexAttribDivisor(z,$),se[z]=$)}function w(){const z=o.newAttributes,$=o.enabledAttributes;for(let Y=0,B=$.length;Y<B;Y++)$[Y]!==z[Y]&&(n.disableVertexAttribArray(Y),$[Y]=0)}function D(z,$,Y,B,se,re,ne){ne===!0?n.vertexAttribIPointer(z,$,Y,se,re):n.vertexAttribPointer(z,$,Y,B,se,re)}function L(z,$,Y,B){T();const se=B.attributes,re=Y.getAttributes(),ne=$.defaultAttributeValues;for(const ee in re){const Z=re[ee];if(Z.location>=0){let j=se[ee];if(j===void 0&&(ee==="instanceMatrix"&&z.instanceMatrix&&(j=z.instanceMatrix),ee==="instanceColor"&&z.instanceColor&&(j=z.instanceColor)),j!==void 0){const F=j.normalized,te=j.itemSize,Ae=e.get(j);if(Ae===void 0)continue;const ae=Ae.buffer,Me=Ae.type,be=Ae.bytesPerElement,Ce=Me===n.INT||Me===n.UNSIGNED_INT||j.gpuType===Cm;if(j.isInterleavedBufferAttribute){const ye=j.data,Be=ye.isInterleavedBuffer===!0?ye.stride:ye.itemSize,ft=j.offset;if(ye.isInstancedInterleavedBuffer||ye.isInstancedBufferAttribute){for(let Ze=0;Ze<Z.locationSize;Ze++)S(Z.location+Ze,ye.meshPerAttribute);z.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ze=0;Ze<Z.locationSize;Ze++)y(Z.location+Ze);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let Ze=0;Ze<Z.locationSize;Ze++)D(Z.location+Ze,te/Z.locationSize,Me,F,Be*be,(ft+te/Z.locationSize*Ze)*be,Ce)}else{if(j.isInstancedBufferAttribute){for(let ye=0;ye<Z.locationSize;ye++)S(Z.location+ye,j.meshPerAttribute);z.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ye=0;ye<Z.locationSize;ye++)y(Z.location+ye);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let ye=0;ye<Z.locationSize;ye++)D(Z.location+ye,te/Z.locationSize,Me,F,te*be,te/Z.locationSize*ye*be,Ce)}}else if(ne!==void 0){const F=ne[ee];if(F!==void 0)switch(F.length){case 2:n.vertexAttrib2fv(Z.location,F);break;case 3:n.vertexAttrib3fv(Z.location,F);break;case 4:n.vertexAttrib4fv(Z.location,F);break;default:n.vertexAttrib1fv(Z.location,F)}}}}w()}function O(){V();for(const z in r){const $=r[z];for(const Y in $){const B=$[Y];for(const se in B){const re=B[se];for(const ne in re)g(re[ne].object),delete re[ne];delete B[se]}}delete r[z]}}function I(z){if(r[z.id]===void 0)return;const $=r[z.id];for(const Y in $){const B=$[Y];for(const se in B){const re=B[se];for(const ne in re)g(re[ne].object),delete re[ne];delete B[se]}}delete r[z.id]}function b(z){for(const $ in r){const Y=r[$];for(const B in Y){const se=Y[B];if(se[z.id]===void 0)continue;const re=se[z.id];for(const ne in re)g(re[ne].object),delete re[ne];delete se[z.id]}}}function C(z){for(const $ in r){const Y=r[$],B=z.isInstancedMesh===!0?z.id:0,se=Y[B];if(se!==void 0){for(const re in se){const ne=se[re];for(const ee in ne)g(ne[ee].object),delete ne[ee];delete se[re]}delete Y[B],Object.keys(Y).length===0&&delete r[$]}}}function V(){U(),u=!0,o!==s&&(o=s,h(o.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:d,reset:V,resetDefaultState:U,dispose:O,releaseStatesOfGeometry:I,releaseStatesOfObject:C,releaseStatesOfProgram:b,initAttributes:T,enableAttribute:y,disableUnusedAttributes:w}}function r2(n,e,t){let r;function s(f){r=f}function o(f,h){n.drawArrays(r,f,h),t.update(h,r,1)}function u(f,h,g){g!==0&&(n.drawArraysInstanced(r,f,h,g),t.update(h,r,g))}function d(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,h,0,g);let v=0;for(let x=0;x<g;x++)v+=h[x];t.update(v,r,1)}this.setMode=s,this.render=o,this.renderInstances=u,this.renderMultiDraw=d}function a2(n,e,t,r){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(b){return!(b!==Mr&&r.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(b){const C=b===Rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==gi&&b!==xr&&!C&&r.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function f(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const g=f(h);g!==h&&(ct("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=t.logarithmicDepthBuffer===!0&&m===!1;t.reversedDepthBuffer===!0&&m===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&m===!0&&ct("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),S=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),L=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=n.getParameter(n.MAX_SAMPLES),I=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:w,maxVaryings:D,maxFragmentUniforms:L,maxSamples:O,samples:I}}function s2(n){const e=this;let t=null,r=0,s=!1,o=!1;const u=new Ca,d=new dt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const x=m.length!==0||v||r!==0||s;return s=v,r=m.length,x},this.beginShadows=function(){o=!0,g(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,v){t=g(m,v,0)},this.setState=function(m,v,x){const E=m.clippingPlanes,T=m.clipIntersection,y=m.clipShadows,S=n.get(m);if(!s||E===null||E.length===0||o&&!y)o?g(null):h();else{const w=o?0:r,D=w*4;let L=S.clippingState||null;f.value=L,L=g(E,v,D,x);for(let O=0;O!==D;++O)L[O]=t[O];S.clippingState=L,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(m,v,x,E){const T=m!==null?m.length:0;let y=null;if(T!==0){if(y=f.value,E!==!0||y===null){const S=x+T*4,w=v.matrixWorldInverse;d.getNormalMatrix(w),(y===null||y.length<S)&&(y=new Float32Array(S));for(let D=0,L=x;D!==T;++D,L+=4)u.copy(m[D]).applyMatrix4(w,d),u.normal.toArray(y,L),y[L+3]=u.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}class Vm extends wr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},s=[r,r,r,r,r,r];this.texture=new Yx(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xo(5,5,5),o=new hs({name:"CubemapFromEquirect",uniforms:_o(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ii,blending:uo});o.uniforms.tEquirect.value=t;const u=new Ua(s,o),d=t.minFilter;return t.minFilter===Da&&(t.minFilter=ti),new fm(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,s=!0){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,s);e.setRenderTarget(o)}}const Ey=256,o2=3,l2=20,iM=256,rM=16,u2=3,c2=new fe,d2=new Mt;class ed{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new fm(1,10,null),this._boxMesh=new Ua(new xo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,s=100,o={}){const{size:u=256,position:d=c2}=o,f=this._renderer;this._setSize(u);const h=this._allocateTarget(),g=this._getSourceTarget(!0);t>0&&(g.texture.mipmapsAutoUpdate=!1);const m=f.autoClear,v=f.autoClearColor,x=f.autoClearDepth,E=f.autoClearStencil,T=e.background;f.autoClear=!0,f.autoClearColor=!0,f.autoClearDepth=!0,f.autoClearStencil=!0,T===null&&(e.background=f.getClearColor(d2));const y=new fm(r,s,g);return y.position.copy(d),y.update(f,e),f.autoClear=m,f.autoClearColor=v,f.autoClearDepth=x,f.autoClearStencil=E,e.background=T,t>0&&(g.texture.mipmapsAutoUpdate=!0,this._blur(h,t)),this._applyPMREM(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ty(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ey,NA(e))}_fromTexture(e,t){e.mapping===mo||e.mapping===Pl?this._setSize(e.image.length===0?Ey:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=by(e,!1,!1),r=Math.log2(e)-o2;for(let s=0;s<=r;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=by(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const s=this._boxMesh,o=this._cubeCamera;s.material=r,o.renderTarget=e,o.activeMipmapLevel=t;const u=e.width>>t;e.viewport.set(0,0,u,u),o.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===mo||e.mapping===Pl?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ty()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=wy()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=f2(),this._integrationMaterial=h2());const t=this._cubeSize,r=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const o=this._integrationMaterial.uniforms;o.envMap.value=this._sourceTarget.texture,o.sourceLod.value=Math.log2(t/rM);for(let u=0;u<=r;u++){const d=ed.lodToRoughness(u,r);if(u>r-u2)o.roughness.value=d,this._renderCube(e,u,this._integrationMaterial);else{const f=d>0?Math.log2(t)+.5*Math.log2(6/(iM*Math.pow(d,4)))+.5:0;s.roughness.value=d,s.lodBias.value=f,this._renderCube(e,u,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=p2());const r=this._blurMaterial,s=r.uniforms,o=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=o.texture,this._renderCube(e,0,r),s.envMap.value=e.texture,this._renderCube(o,0,r)}}function by(n,e,t){return new Vm(n,{minFilter:Da,generateMipmaps:e,type:Rr,colorSpace:Zc,depthBuffer:t})}function Bl(n,e,t){return new hs({name:n,uniforms:e,vertexShader:_t.cube_vert,fragmentShader:t,side:ii,blending:uo,depthTest:!1,depthWrite:!1})}function f2(){return Bl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${iM}u

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
	`)}function h2(){return Bl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:rM}},`

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
	`)}function p2(){return Bl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${l2}
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
	`)}function wy(){return Bl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ty(){return Bl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function m2(n){let e=new WeakMap,t=new WeakMap,r=null;function s(v,x=!1){return v==null?null:x?u(v):o(v)}function o(v){if(v&&v.isTexture){const x=v.mapping;if(x===gh||x===vh)if(e.has(v)){const E=e.get(v).texture;return d(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const T=new Vm(E.height);return T.fromEquirectangularTexture(n,v),e.set(v,T),v.addEventListener("dispose",h),d(T.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture&&v.isPMREMTexture!==!0){const x=v.mapping,E=x===gh||x===vh,T=x===mo||x===Pl;if(E||T){let y=t.get(v);const S=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return r===null&&(r=new ed(n)),y=E?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),y.texture;if(y!==void 0)return y.texture;{const w=v.image;return E&&w&&w.height>0||T&&w&&f(w)?(r===null&&(r=new ed(n)),y=E?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),v.addEventListener("dispose",g),y.texture):null}}}return v}function d(v,x){return x===gh?v.mapping=mo:x===vh&&(v.mapping=Pl),v}function f(v){let x=0;const E=6;for(let T=0;T<E;T++)v[T]!==void 0&&x++;return x===E}function h(v){const x=v.target;x.removeEventListener("dispose",h);const E=e.get(x);E!==void 0&&(e.delete(x),E.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const E=t.get(x);E!==void 0&&(t.delete(x),E.dispose())}function m(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:s,dispose:m}}function g2(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const s=n.getExtension(r);return e[r]=s,s}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const s=t(r);return s===null&&Bc("WebGLRenderer: "+r+" extension not supported."),s}}}function v2(n,e,t,r){const s={},o=new WeakMap,u=new FinalizationRegistry(E=>delete s[E]);function d(E){f(E.target)}function f(E){E.index!==null&&e.remove(E.index);for(const y in E.attributes)e.remove(E.attributes[y]);E.removeEventListener("dispose",d),delete s[E.id],u.unregister(E);const T=o.get(E);T&&(e.remove(T),o.delete(E)),r.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,t.memory.geometries--}function h(E,T){return s[T.id]!==void 0||(T.addEventListener("dispose",d),s[T.id]=new WeakRef(T),u.register(T,T.id,T),t.memory.geometries++),T}function g(E){const T=E.attributes;for(const y in T)e.update(T[y],n.ARRAY_BUFFER)}function m(E){const T=E.index,y=E.attributes.position;let S=0;if(y===void 0)return;const w=T!==null?T.array.length:y.array.length/3-1,D=y.count>=65535?Xx:$x,L=new D(Math.ceil(w/3)*6,1),O=L.array;if(T!==null){const b=T.array;S=T.version;for(let C=0,V=0;C<w;C+=3){const U=b[C+0],z=b[C+1],$=b[C+2];O[V++]=U,O[V++]=z,O[V++]=z,O[V++]=$,O[V++]=$,O[V++]=U}}else{S=y.version;for(let b=0,C=0;b<w;b+=3){const V=b+0,U=b+1,z=b+2;O[C++]=V,O[C++]=U,O[C++]=U,O[C++]=z,O[C++]=z,O[C++]=V}}L.version=S;const I=o.get(E);I&&e.remove(I),o.set(E,L)}function v(E){const T=o.get(E);if(T){const y=E.index;y!==null&&T.version<y.version&&m(E)}else m(E);return o.get(E)}function x(){for(const E in s){const T=s[E].deref();T!==void 0&&f(T)}}return{get:h,update:g,getWireframeAttribute:v,dispose:x}}function _2(n,e,t){let r;function s(m){r=m}let o,u;function d(m){o=m.type,u=m.bytesPerElement}function f(m,v){n.drawElements(r,v,o,m*u),t.update(v,r,1)}function h(m,v,x){x!==0&&(n.drawElementsInstanced(r,v,o,m*u,x),t.update(v,r,x))}function g(m,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,o,m,0,x);let T=0;for(let y=0;y<x;y++)T+=v[y];t.update(T,r,1)}this.setMode=s,this.setIndex=d,this.render=f,this.renderInstances=h,this.renderMultiDraw=g}function y2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,u,d){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=d*(o/3);break;case n.LINES:t.lines+=d*(o/2);break;case n.LINE_STRIP:t.lines+=d*(o-1);break;case n.LINE_LOOP:t.lines+=d*o;break;case n.POINTS:t.points+=d*o;break;default:It("WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:r}}function S2(n,e,t){const r=new WeakMap,s=new on;function o(u,d,f){const h=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==m){let V=function(){b.dispose(),r.delete(d),d.removeEventListener("dispose",V)};v!==void 0&&v.texture.dispose();const x=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,T=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],w=d.morphAttributes.color||[];let D=0;x===!0&&(D=1),E===!0&&(D=2),T===!0&&(D=3);let L=d.attributes.position.count*D,O=1;L>e.maxTextureSize&&(O=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const I=new Float32Array(L*O*4*m),b=new Vx(I,L,O,m);b.type=xr,b.needsUpdate=!0;const C=D*4;for(let U=0;U<m;U++){const z=y[U],$=S[U],Y=w[U],B=L*O*4*U;for(let se=0;se<z.count;se++){const re=se*C;x===!0&&(s.fromBufferAttribute(z,se),I[B+re+0]=s.x,I[B+re+1]=s.y,I[B+re+2]=s.z,I[B+re+3]=0),E===!0&&(s.fromBufferAttribute($,se),I[B+re+4]=s.x,I[B+re+5]=s.y,I[B+re+6]=s.z,I[B+re+7]=0),T===!0&&(s.fromBufferAttribute(Y,se),I[B+re+8]=s.x,I[B+re+9]=s.y,I[B+re+10]=s.z,I[B+re+11]=Y.itemSize===4?s.w:1)}}v={count:m,texture:b,size:new Et(L,O)},r.set(d,v),d.addEventListener("dispose",V)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let x=0;for(let T=0;T<h.length;T++)x+=h[T];const E=d.morphTargetsRelative?1:1-x;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",h)}f.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}return{update:o}}function x2(n,e,t,r,s){let o=new WeakMap;function u(h){const g=s.render.frame,m=h.geometry,v=e.get(h,m);if(o.get(v)!==g&&(e.update(v),o.set(v,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==g&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),o.set(h,g))),h.isSkinnedMesh){const x=h.skeleton;o.get(x)!==g&&(x.update(),o.set(x,g))}return v}function d(){o=new WeakMap}function f(h){const g=h.target;g.removeEventListener("dispose",f),r.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:u,dispose:d}}const M2={[wx]:"LINEAR_TONE_MAPPING",[Tx]:"REINHARD_TONE_MAPPING",[Rx]:"CINEON_TONE_MAPPING",[Am]:"ACES_FILMIC_TONE_MAPPING",[Cx]:"AGX_TONE_MAPPING",[Px]:"NEUTRAL_TONE_MAPPING",[Ax]:"CUSTOM_TONE_MAPPING"};function E2(n,e,t,r,s,o){const u=new wr(e,t,{type:n,depthBuffer:s,stencilBuffer:o,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,f=null,h=null;const g=new Qr;g.setAttribute("position",new $n([-1,3,0,-1,-1,0,3,-1,0],3)),g.setAttribute("uv",new $n([0,2,0,0,2,0],2));const m=new cC({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Ua(g,m),x=new eM(-1,1,1,-1,0,1);let E=null,T=null,y=!1,S,w=null,D=[],L=!1;this.setSize=function(O,I){u.setSize(O,I),d!==null&&d.setSize(O,I),f!==null&&f.setSize(O,I);for(let b=0;b<D.length;b++){const C=D[b];C.setSize&&C.setSize(O,I)}},this.setEffects=function(O){D=O,L=D.length>0&&D[0].isRenderPass===!0;const I=u.width,b=u.height;D.length>0&&d===null&&(d=new wr(I,b,{type:Rr,depthBuffer:!1,stencilBuffer:!1}),f=new wr(I,b,{type:Rr,depthBuffer:!1,stencilBuffer:!1}));const C=s===!0&&D.some(V=>V.needsDepthTexture===!0);C!==(u.depthTexture!==null)&&(C===!0&&h===null&&(h=new vo(I,b),o===!0&&(h.format=Ia,h.type=go)),u.dispose(),u.depthTexture=C?h:null,u.resolveDepthBuffer=C,u.storeMultisampledDepthBuffer=C);for(let V=0;V<D.length;V++){const U=D[V];U.setSize&&U.setSize(I,b),C&&U.needsDepthTexture===!0&&U.setDepthTexture&&U.setDepthTexture(h)}},this.begin=function(O,I){if(y||O.toneMapping===qr&&D.length===0)return!1;if(w=I,I!==null){const b=I.width,C=I.height;(u.width!==b||u.height!==C)&&this.setSize(b,C)}return L===!1&&O.setRenderTarget(u),S=O.toneMapping,O.toneMapping=qr,!0},this.hasRenderPass=function(){return L},this.end=function(O,I){O.toneMapping=S,y=!0;let b=u,C=d;for(let V=0;V<D.length;V++){const U=D[V];U.enabled!==!1&&(U.render(O,C,b,I),U.needsSwap!==!1&&(b=C,C=C===d?f:d))}if(E!==O.outputColorSpace||T!==O.toneMapping){E=O.outputColorSpace,T=O.toneMapping,m.defines={},Tt.getTransfer(E)===Ut&&(m.defines.SRGB_TRANSFER="");const V=M2[T];V&&(m.defines[V]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=b.texture,O.setRenderTarget(w),O.render(v,x),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),d!==null&&d.dispose(),f!==null&&f.dispose(),g.dispose(),m.dispose()}}const aM=new Bn,sM=new vo(1,1),oM=new Kx(1),lM=new Vx,uM=new GA,cM=new Yx,Ry=[],Ay=[],Cy=new Float32Array(16),Py=new Float32Array(9),Ly=new Float32Array(4);function Mo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const s=e*t;let o=Ry[s];if(o===void 0&&(o=new Float32Array(s),Ry[s]=o),e!==0){r.toArray(o,0);for(let u=1,d=0;u!==e;++u)d+=t,n[u].toArray(o,d)}return o}function xn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function Mn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function ld(n,e){let t=Ay[e];t===void 0&&(t=new Int32Array(e),Ay[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function b2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function w2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2fv(this.addr,e),Mn(t,e)}}function T2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;n.uniform3fv(this.addr,e),Mn(t,e)}}function R2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4fv(this.addr,e),Mn(t,e)}}function A2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mn(t,e)}else{if(xn(t,r))return;Ly.set(r),n.uniformMatrix2fv(this.addr,!1,Ly),Mn(t,r)}}function C2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mn(t,e)}else{if(xn(t,r))return;Py.set(r),n.uniformMatrix3fv(this.addr,!1,Py),Mn(t,r)}}function P2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mn(t,e)}else{if(xn(t,r))return;Cy.set(r),n.uniformMatrix4fv(this.addr,!1,Cy),Mn(t,r)}}function L2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function D2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2iv(this.addr,e),Mn(t,e)}}function I2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;n.uniform3iv(this.addr,e),Mn(t,e)}}function N2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4iv(this.addr,e),Mn(t,e)}}function O2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function U2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2uiv(this.addr,e),Mn(t,e)}}function F2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;n.uniform3uiv(this.addr,e),Mn(t,e)}}function k2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4uiv(this.addr,e),Mn(t,e)}}function ud(n){return n.version===0&&(n.compareFunction=Hx,n.needsUpdate=!0),n}function B2(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?o=ud(sM):o=aM,t.setTexture2D(e||o,s)}function z2(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s),t.setTexture3D(e||uM,s)}function H2(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s);let o;this.type===n.SAMPLER_CUBE_SHADOW?o=ud(oM):o=cM,t.setTextureCube(e||o,s)}function G2(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s),t.setTexture2DArray(e||lM,s)}function V2(n){switch(n){case 5126:return b2;case 35664:return w2;case 35665:return T2;case 35666:return R2;case 35674:return A2;case 35675:return C2;case 35676:return P2;case 5124:case 35670:return L2;case 35667:case 35671:return D2;case 35668:case 35672:return I2;case 35669:case 35673:return N2;case 5125:return O2;case 36294:return U2;case 36295:return F2;case 36296:return k2;case 35678:case 36198:case 36298:case 36306:case 35682:return B2;case 35679:case 36299:case 36307:return z2;case 35680:case 36300:case 36308:case 36293:return H2;case 36289:case 36303:case 36311:case 36292:return G2}}function W2(n,e){n.uniform1fv(this.addr,e)}function $2(n,e){const t=Mo(e,this.size,2);n.uniform2fv(this.addr,t)}function X2(n,e){const t=Mo(e,this.size,3);n.uniform3fv(this.addr,t)}function q2(n,e){const t=Mo(e,this.size,4);n.uniform4fv(this.addr,t)}function Y2(n,e){const t=Mo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function K2(n,e){const t=Mo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Z2(n,e){const t=Mo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function j2(n,e){n.uniform1iv(this.addr,e)}function J2(n,e){n.uniform2iv(this.addr,e)}function Q2(n,e){n.uniform3iv(this.addr,e)}function e3(n,e){n.uniform4iv(this.addr,e)}function t3(n,e){n.uniform1uiv(this.addr,e)}function n3(n,e){n.uniform2uiv(this.addr,e)}function i3(n,e){n.uniform3uiv(this.addr,e)}function r3(n,e){n.uniform4uiv(this.addr,e)}function a3(n,e,t){const r=this.cache,s=e.length,o=ld(t,s);xn(r,o)||(n.uniform1iv(this.addr,o),Mn(r,o));let u;this.type===n.SAMPLER_2D_SHADOW?u=ud(sM):u=aM;for(let d=0;d!==s;++d)t.setTexture2D(e[d]||u,o[d])}function s3(n,e,t){const r=this.cache,s=e.length,o=ld(t,s);xn(r,o)||(n.uniform1iv(this.addr,o),Mn(r,o));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||uM,o[u])}function o3(n,e,t){const r=this.cache,s=e.length,o=ld(t,s);xn(r,o)||(n.uniform1iv(this.addr,o),Mn(r,o));let u;this.type===n.SAMPLER_CUBE_SHADOW?u=ud(oM):u=cM;for(let d=0;d!==s;++d)t.setTextureCube(e[d]||u,o[d])}function l3(n,e,t){const r=this.cache,s=e.length,o=ld(t,s);xn(r,o)||(n.uniform1iv(this.addr,o),Mn(r,o));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||lM,o[u])}function u3(n){switch(n){case 5126:return W2;case 35664:return $2;case 35665:return X2;case 35666:return q2;case 35674:return Y2;case 35675:return K2;case 35676:return Z2;case 5124:case 35670:return j2;case 35667:case 35671:return J2;case 35668:case 35672:return Q2;case 35669:case 35673:return e3;case 5125:return t3;case 36294:return n3;case 36295:return i3;case 36296:return r3;case 35678:case 36198:case 36298:case 36306:case 35682:return a3;case 35679:case 36299:case 36307:return s3;case 35680:case 36300:case 36308:case 36293:return o3;case 36289:case 36303:case 36311:case 36292:return l3}}class c3{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=V2(t.type)}}class d3{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=u3(t.type)}}class f3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const s=this.seq;for(let o=0,u=s.length;o!==u;++o){const d=s[o];d.setValue(e,t[d.id],r)}}}const Vh=/(\w+)(\])?(\[|\.)?/g;function Dy(n,e){n.seq.push(e),n.map[e.id]=e}function h3(n,e,t){const r=n.name,s=r.length;for(Vh.lastIndex=0;;){const o=Vh.exec(r),u=Vh.lastIndex;let d=o[1];const f=o[2]==="]",h=o[3];if(f&&(d=d|0),h===void 0||h==="["&&u+2===s){Dy(t,h===void 0?new c3(d,n,e):new d3(d,n,e));break}else{let m=t.map[d];m===void 0&&(m=new f3(d),Dy(t,m)),t=m}}}class zc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(t,u),f=e.getUniformLocation(t,d.name);h3(d,f,this)}const s=[],o=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(u):o.push(u);s.length>0&&(this.seq=s.concat(o))}setValue(e,t,r,s){const o=this.map[t];o!==void 0&&o.setValue(e,r,s)}setOptional(e,t,r){const s=t[r];s!==void 0&&this.setValue(e,r,s)}static upload(e,t,r,s){for(let o=0,u=t.length;o!==u;++o){const d=t[o],f=r[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,s)}}static seqWithValue(e,t){const r=[];for(let s=0,o=e.length;s!==o;++s){const u=e[s];u.id in t&&r.push(u)}return r}}function Iy(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const p3=37297;let m3=0;function g3(n,e){const t=n.split(`
`),r=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=s;u<o;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const Ny=new dt;function v3(n){Tt._getMatrix(Ny,Tt.workingColorSpace,n);const e=`mat3( ${Ny.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(n)){case jc:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Oy(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),o=(n.getShaderInfoLog(e)||"").trim();if(r&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+o+`

`+g3(n.getShaderSource(e),d)}else return o}function _3(n,e){const t=v3(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const y3={[wx]:"Linear",[Tx]:"Reinhard",[Rx]:"Cineon",[Am]:"ACESFilmic",[Cx]:"AgX",[Px]:"Neutral",[Ax]:"Custom"};function S3(n,e){const t=y3[e];return t===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rc=new fe;function x3(){Tt.getLuminanceCoefficients(Rc);const n=Rc.x.toFixed(4),e=Rc.y.toFixed(4),t=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vl).join(`
`)}function E3(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function b3(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<r;s++){const o=n.getActiveAttrib(e,s),u=o.name;let d=1;o.type===n.FLOAT_MAT2&&(d=2),o.type===n.FLOAT_MAT3&&(d=3),o.type===n.FLOAT_MAT4&&(d=4),t[u]={type:o.type,location:n.getAttribLocation(e,u),locationSize:d}}return t}function vl(n){return n!==""}function Uy(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Fy(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const w3=/^[ \t]*#include +<([\w\d./]+)>/gm;function pm(n){return n.replace(w3,T3)}function T3(n,e){const t=_t[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return pm(t)}const R3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ky(n){return n.replace(R3,A3)}function A3(n,e,t,r){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function By(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const C3={[Nc]:"SHADOWMAP_TYPE_PCF",[gl]:"SHADOWMAP_TYPE_VSM"};function P3(n){return C3[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const L3={[Pl]:"ENVMAP_MODE_REFRACTION"};function D3(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":L3[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const I3={[bx]:"ENVMAP_BLENDING_MULTIPLY",[vA]:"ENVMAP_BLENDING_MIX",[_A]:"ENVMAP_BLENDING_ADD"};function N3(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":I3[n.combine]||"ENVMAP_BLENDING_NONE"}function O3(n,e,t,r){const s=n.getContext(),o=t.defines;let u=t.vertexShader,d=t.fragmentShader;const f=P3(t),h=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",g=D3(t),m=N3(t),v=M3(t),x=E3(o),E=s.createProgram();let T,y,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(T=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(vl).join(`
`),T.length>0&&(T+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(vl).join(`
`),y.length>0&&(y+=`
`)):(T=[By(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vl).join(`
`),y=[By(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+m:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qr?"#define TONE_MAPPING":"",t.toneMapping!==qr?_t.tonemapping_pars_fragment:"",t.toneMapping!==qr?S3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,_3("linearToOutputTexel",t.outputColorSpace),x3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vl).join(`
`)),u=pm(u),u=Uy(u,t),u=Fy(u,t),d=pm(d),d=Uy(d,t),d=Fy(d,t),u=ky(u),d=ky(d),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,T=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,y=["#define varying in",t.glslVersion===Z_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Z_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const w=S+T+u,D=S+y+d,L=Iy(s,s.VERTEX_SHADER,w),O=Iy(s,s.FRAGMENT_SHADER,D);s.attachShader(E,L),s.attachShader(E,O),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function I(U){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(E)||"",$=s.getShaderInfoLog(L)||"",Y=s.getShaderInfoLog(O)||"",B=z.trim(),se=$.trim(),re=Y.trim();let ne=!0,ee=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,L,O);else{const Z=Oy(s,L,"vertex"),j=Oy(s,O,"fragment");It("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+B+`
`+Z+`
`+j)}else B!==""?ct("WebGLProgram: Program Info Log:",B):(se===""||re==="")&&(ee=!1);ee&&(U.diagnostics={runnable:ne,programLog:B,vertexShader:{log:se,prefix:T},fragmentShader:{log:re,prefix:y}})}s.deleteShader(L),s.deleteShader(O),b=new zc(s,E),C=b3(s,E)}let b;this.getUniforms=function(){return b===void 0&&I(this),b};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(E,p3)),V},this.destroy=function(){r.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m3++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=L,this.fragmentShader=O,this}let U3=0;class F3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new k3(e),t.set(e,r)),r}}class k3{constructor(e){this.id=U3++,this.code=e,this.usedTimes=0}}function B3(n){return n===fs||n===Yc||n===Kc}function z3(n,e,t,r,s,o){const u=new Fm,d=new F3,f=new Set,h=[],g=new Map,m=r.logarithmicDepthBuffer,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return f.add(b),b===0?"uv":`uv${b}`}function E(b,C,V,U,z,$){const Y=U.fog,B=z.geometry,se=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,re=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,ne=e.get(b.envMap||se,re),ee=v[b.type];let Z=r.precision;b.precision!==null&&(Z=r.getMaxPrecision(b.precision),Z!==b.precision&&ct("WebGLProgram.getParameters:",b.precision,"not supported, using",Z,"instead."));const j=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,F=j!==void 0?j.length:0;let te=0;B.morphAttributes.position!==void 0&&(te=1),B.morphAttributes.normal!==void 0&&(te=2),B.morphAttributes.color!==void 0&&(te=3);let Ae,ae,Me,be;if(ee){const Fe=vr[ee];Ae=Fe.vertexShader,ae=Fe.fragmentShader}else{Ae=b.vertexShader,ae=b.fragmentShader;const Fe=d.getVertexShaderStage(b),vt=d.getFragmentShaderStage(b);d.update(b,Fe,vt),Me=Fe.id,be=vt.id}const Ce=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),Be=z.isInstancedMesh===!0,ft=z.isBatchedMesh===!0,Ze=!!b.map,ht=!!b.matcap,mt=!!ne,lt=mt&&ne.isPMREMTexture===!0,$t=!!b.aoMap,Bt=!!b.lightMap,jt=!!b.bumpMap&&b.wireframe===!1,bt=!!b.normalMap,Jt=!!b.displacementMap,Nt=!!b.emissiveMap,Qt=!!b.metalnessMap,en=!!b.roughnessMap,zt=b.anisotropy>0,J=b.clearcoat>0,mn=b.diffuseRoughness>0,xt=b.dispersion>0,Ct=b.retroreflectivity>0,Ie=b.iridescence>0,Ft=b.sheen>0,Qe=b.transmission>0,nt=zt&&!!b.anisotropyMap,k=J&&!!b.clearcoatMap,R=J&&!!b.clearcoatNormalMap,oe=J&&!!b.clearcoatRoughnessMap,we=mn&&!!b.diffuseRoughnessMap,Se=Ie&&!!b.iridescenceMap,Le=Ie&&!!b.iridescenceThicknessMap,De=Ft&&!!b.sheenColorMap,ve=Ft&&!!b.sheenRoughnessMap,_e=!!b.specularMap,G=!!b.specularColorMap,N=!!b.specularIntensityMap,q=Qe&&!!b.transmissionMap,W=Qe&&!!b.thicknessMap,ue=!!b.gradientMap,pe=!!b.alphaMap,ge=b.alphaTest>0,xe=!!b.alphaHash,$e=!!b.extensions;let Ee=qr;b.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(Ee=n.toneMapping);const He=lt?ne.isCompressedCubeTexture?ne.image[0].mipmaps:ne.mipmaps:null,it={shaderID:ee,shaderType:b.type,shaderName:b.name,vertexShader:Ae,fragmentShader:ae,defines:b.defines,customVertexShaderID:Me,customFragmentShaderID:be,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:Z,batching:ft,batchingColor:ft&&z._colorsTexture!==null,instancing:Be,instancingColor:Be&&z.instanceColor!==null,instancingMorph:Be&&z.morphTexture!==null,outputColorSpace:Ce===null?n.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Ze,matcap:ht,envMap:mt,envMapMode:mt&&ne.mapping,envMapPMREM:lt,envMapMaxLod:lt?He.length-1:null,envMapSize:lt?He[0].width:null,aoMap:$t,lightMap:Bt,bumpMap:jt,normalMap:bt,displacementMap:Jt,emissiveMap:Nt,normalMapObjectSpace:bt&&b.normalMapType===xA,normalMapTangentSpace:bt&&b.normalMapType===cm,packedNormalMap:bt&&b.normalMapType===cm&&B3(b.normalMap.format),metalnessMap:Qt,roughnessMap:en,anisotropy:zt,anisotropyMap:nt,clearcoat:J,clearcoatMap:k,clearcoatNormalMap:R,clearcoatRoughnessMap:oe,diffuseRoughness:mn,diffuseRoughnessMap:we,dispersion:xt,retroreflection:Ct,iridescence:Ie,iridescenceMap:Se,iridescenceThicknessMap:Le,sheen:Ft,sheenColorMap:De,sheenRoughnessMap:ve,specularMap:_e,specularColorMap:G,specularIntensityMap:N,transmission:Qe,transmissionMap:q,thicknessMap:W,gradientMap:ue,opaque:b.transparent===!1&&b.blending===Ml&&b.alphaToCoverage===!1,alphaMap:pe,alphaTest:ge,alphaHash:xe,combine:b.combine,mapUv:Ze&&x(b.map.channel),aoMapUv:$t&&x(b.aoMap.channel),lightMapUv:Bt&&x(b.lightMap.channel),bumpMapUv:jt&&x(b.bumpMap.channel),normalMapUv:bt&&x(b.normalMap.channel),displacementMapUv:Jt&&x(b.displacementMap.channel),emissiveMapUv:Nt&&x(b.emissiveMap.channel),metalnessMapUv:Qt&&x(b.metalnessMap.channel),roughnessMapUv:en&&x(b.roughnessMap.channel),anisotropyMapUv:nt&&x(b.anisotropyMap.channel),clearcoatMapUv:k&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:R&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&x(b.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:we&&x(b.diffuseRoughnessMap.channel),iridescenceMapUv:Se&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:De&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:ve&&x(b.sheenRoughnessMap.channel),specularMapUv:_e&&x(b.specularMap.channel),specularColorMapUv:G&&x(b.specularColorMap.channel),specularIntensityMapUv:N&&x(b.specularIntensityMap.channel),transmissionMapUv:q&&x(b.transmissionMap.channel),thicknessMapUv:W&&x(b.thicknessMap.channel),alphaMapUv:pe&&x(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(bt||zt),vertexNormals:!!B.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!B.attributes.uv&&(Ze||pe),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||B.attributes.normal===void 0&&bt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ye,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:te,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:$.filter(Fe=>Fe.texture!==null).length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Ze&&b.map.isVideoTexture===!0&&Tt.getTransfer(b.map.colorSpace)===Ut,decodeVideoTextureEmissive:Nt&&b.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(b.emissiveMap.colorSpace)===Ut,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Qi,flipSided:b.side===ii,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:$e&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&b.extensions.multiDraw===!0||ft)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return it.vertexUv1s=f.has(1),it.vertexUv2s=f.has(2),it.vertexUv3s=f.has(3),f.clear(),it}function T(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const V in b.defines)C.push(V),C.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(y(C,b),S(C,b),C.push(n.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function y(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapPMREM),b.push(C.envMapMaxLod),b.push(C.envMapSize),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.diffuseRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.numSunLights),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numSunLightShadows),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.numLightProbeGrids),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function S(b,C){u.disableAll(),C.instancing&&u.enable(0),C.instancingColor&&u.enable(1),C.instancingMorph&&u.enable(2),C.matcap&&u.enable(3),C.envMap&&u.enable(4),C.normalMapObjectSpace&&u.enable(5),C.normalMapTangentSpace&&u.enable(6),C.clearcoat&&u.enable(7),C.iridescence&&u.enable(8),C.alphaTest&&u.enable(9),C.vertexColors&&u.enable(10),C.vertexAlphas&&u.enable(11),C.vertexUv1s&&u.enable(12),C.vertexUv2s&&u.enable(13),C.vertexUv3s&&u.enable(14),C.vertexTangents&&u.enable(15),C.anisotropy&&u.enable(16),C.alphaHash&&u.enable(17),C.batching&&u.enable(18),C.dispersion&&u.enable(19),C.retroreflection&&u.enable(24),C.diffuseRoughness&&u.enable(25),C.batchingColor&&u.enable(20),C.gradientMap&&u.enable(21),C.packedNormalMap&&u.enable(22),C.vertexNormals&&u.enable(23),b.push(u.mask),u.disableAll(),C.fog&&u.enable(0),C.useFog&&u.enable(1),C.flatShading&&u.enable(2),C.logarithmicDepthBuffer&&u.enable(3),C.reversedDepthBuffer&&u.enable(4),C.skinning&&u.enable(5),C.morphTargets&&u.enable(6),C.morphNormals&&u.enable(7),C.morphColors&&u.enable(8),C.premultipliedAlpha&&u.enable(9),C.shadowMapEnabled&&u.enable(10),C.doubleSided&&u.enable(11),C.flipSided&&u.enable(12),C.useDepthPacking&&u.enable(13),C.dithering&&u.enable(14),C.transmission&&u.enable(15),C.sheen&&u.enable(16),C.opaque&&u.enable(17),C.pointsUvs&&u.enable(18),C.decodeVideoTexture&&u.enable(19),C.decodeVideoTextureEmissive&&u.enable(20),C.alphaToCoverage&&u.enable(21),C.numLightProbeGrids>0&&u.enable(22),C.hasPositionAttribute&&u.enable(23),b.push(u.mask)}function w(b){const C=v[b.type];let V;if(C){const U=vr[C];V=oC.clone(U.uniforms)}else V=b.uniforms;return V}function D(b,C){let V=g.get(C);return V!==void 0?++V.usedTimes:(V=new O3(n,C,b,s),h.push(V),g.set(C,V)),V}function L(b){if(--b.usedTimes===0){const C=h.indexOf(b);h[C]=h[h.length-1],h.pop(),g.delete(b.cacheKey),b.destroy()}}function O(b){d.remove(b)}function I(){d.dispose()}return{getParameters:E,getProgramCacheKey:T,getUniforms:w,acquireProgram:D,releaseProgram:L,releaseShaderCache:O,programs:h,dispose:I}}function H3(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let d=n.get(u);return d===void 0&&(d={},n.set(u,d)),d}function r(u){n.delete(u)}function s(u,d,f){n.get(u)[d]=f}function o(){n=new WeakMap}return{has:e,get:t,remove:r,update:s,dispose:o}}function G3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function zy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hy(){const n=[];let e=0;const t=[],r=[],s=[];function o(){e=0,t.length=0,r.length=0,s.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function d(v,x,E,T,y,S){let w=n[e];return w===void 0?(w={id:v.id,object:v,geometry:x,material:E,materialVariant:u(v),groupOrder:T,renderOrder:v.renderOrder,z:y,group:S},n[e]=w):(w.id=v.id,w.object=v,w.geometry=x,w.material=E,w.materialVariant=u(v),w.groupOrder=T,w.renderOrder=v.renderOrder,w.z=y,w.group=S),e++,w}function f(v,x,E,T,y,S,w){w.reversedDepth===!0&&(y=-y);const D=d(v,x,E,T,y,S);E.transmission>0?r.push(D):E.transparent===!0?s.push(D):t.push(D)}function h(v,x,E,T,y,S){const w=d(v,x,E,T,y,S);E.transmission>0?r.unshift(w):E.transparent===!0?s.unshift(w):t.unshift(w)}function g(v,x){t.length>1&&t.sort(v||G3),r.length>1&&r.sort(x||zy),s.length>1&&s.sort(x||zy)}function m(){for(let v=e,x=n.length;v<x;v++){const E=n[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:s,init:o,push:f,unshift:h,finish:m,sort:g}}function V3(){let n=new WeakMap;function e(r,s){const o=n.get(r);let u;return o===void 0?(u=new Hy,n.set(r,[u])):s>=o.length?(u=new Hy,o.push(u)):u=o[s],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function W3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new fe,color:new Mt};break;case"SpotLight":t={position:new fe,direction:new fe,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new fe,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new fe,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":t={color:new Mt,position:new fe,halfWidth:new fe,halfHeight:new fe};break}return n[e.id]=t,t}}}function $3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let X3=0;function q3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Y3(n){const e=new W3,t=$3(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new fe);const s=new fe,o=new rn,u=new rn;function d(h){let g=0,m=0,v=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let x=0,E=0,T=0,y=0,S=0,w=0,D=0,L=0,O=0,I=0,b=0,C=0,V=0,U=0;h.sort(q3);for(let $=0,Y=h.length;$<Y;$++){const B=h[$],se=B.color,re=B.intensity,ne=B.distance;let ee=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===fs?ee=B.shadow.map.texture:ee=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)g+=se.r*re,m+=se.g*re,v+=se.b*re;else if(B.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(B.sh.coefficients[Z],re);U++}else if(B.isSunLight){const Z=e.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const j=B.shadow,F=t.get(B);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),r.sunShadow[E]=F,r.sunShadowMap[E]=ee;const te=j.getViewportCount();for(let Ae=0;Ae<te;Ae++)r.sunShadowMatrix[T+Ae]=j.getMatrix(Ae),r.sunShadowCascade[T+Ae]=j._cascadeData[Ae];T+=te,E++}r.sun[x]=Z,x++}else if(B.isDirectionalLight){const Z=e.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const j=B.shadow,F=t.get(B);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,r.directionalShadow[y]=F,r.directionalShadowMap[y]=ee,r.directionalShadowMatrix[y]=B.shadow.matrix,O++}r.directional[y]=Z,y++}else if(B.isSpotLight){const Z=e.get(B);Z.position.setFromMatrixPosition(B.matrixWorld),Z.color.copy(se).multiplyScalar(re),Z.distance=ne,Z.coneCos=Math.cos(B.angle),Z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Z.decay=B.decay,r.spot[w]=Z;const j=B.shadow;if(B.map&&(r.spotLightMap[C]=B.map,C++,j.updateMatrices(B),B.castShadow&&V++),r.spotLightMatrix[w]=j.matrix,B.castShadow){const F=t.get(B);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,r.spotShadow[w]=F,r.spotShadowMap[w]=ee,b++}w++}else if(B.isRectAreaLight){const Z=e.get(B);Z.color.copy(se).multiplyScalar(re),Z.halfWidth.set(B.width*.5,0,0),Z.halfHeight.set(0,B.height*.5,0),r.rectArea[D]=Z,D++}else if(B.isPointLight){const Z=e.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity),Z.distance=B.distance,Z.decay=B.decay,B.castShadow){const j=B.shadow,F=t.get(B);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,F.shadowCameraNear=j.camera.near,F.shadowCameraFar=j.camera.far,r.pointShadow[S]=F,r.pointShadowMap[S]=ee,r.pointShadowMatrix[S]=B.shadow.matrix,I++}r.point[S]=Z,S++}else if(B.isHemisphereLight){const Z=e.get(B);Z.skyColor.copy(B.color).multiplyScalar(re),Z.groundColor.copy(B.groundColor).multiplyScalar(re),r.hemi[L]=Z,L++}}D>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ze.LTC_FLOAT_1,r.rectAreaLTC2=ze.LTC_FLOAT_2):(r.rectAreaLTC1=ze.LTC_HALF_1,r.rectAreaLTC2=ze.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=m,r.ambient[2]=v;const z=r.hash;(z.sunLength!==x||z.directionalLength!==y||z.pointLength!==S||z.spotLength!==w||z.rectAreaLength!==D||z.hemiLength!==L||z.numSunShadows!==E||z.numDirectionalShadows!==O||z.numPointShadows!==I||z.numSpotShadows!==b||z.numSpotMaps!==C||z.numLightProbes!==U)&&(r.sun.length=x,r.directional.length=y,r.spot.length=w,r.rectArea.length=D,r.point.length=S,r.hemi.length=L,r.sunShadow.length=E,r.sunShadowMap.length=E,r.sunShadowMatrix.length=T,r.sunShadowCascade.length=T,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.directionalShadowMatrix.length=O,r.pointShadow.length=I,r.pointShadowMap.length=I,r.pointShadowMatrix.length=I,r.spotShadow.length=b,r.spotShadowMap.length=b,r.spotLightMatrix.length=b+C-V,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=U,z.sunLength=x,z.directionalLength=y,z.pointLength=S,z.spotLength=w,z.rectAreaLength=D,z.hemiLength=L,z.numSunShadows=E,z.numDirectionalShadows=O,z.numPointShadows=I,z.numSpotShadows=b,z.numSpotMaps=C,z.numLightProbes=U,r.version=X3++)}function f(h,g){let m=0,v=0,x=0,E=0,T=0,y=0;const S=g.matrixWorldInverse;for(let w=0,D=h.length;w<D;w++){const L=h[w];if(L.isSunLight){const O=r.sun[m];O.direction.setFromMatrixPosition(L.matrixWorld),O.direction.transformDirection(S),m++}else if(L.isDirectionalLight){const O=r.directional[v];O.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(s),O.direction.transformDirection(S),v++}else if(L.isSpotLight){const O=r.spot[E];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(S),O.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(s),O.direction.transformDirection(S),E++}else if(L.isRectAreaLight){const O=r.rectArea[T];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(S),u.identity(),o.copy(L.matrixWorld),o.premultiply(S),u.extractRotation(o),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),O.halfWidth.applyMatrix4(u),O.halfHeight.applyMatrix4(u),T++}else if(L.isPointLight){const O=r.point[x];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const O=r.hemi[y];O.direction.setFromMatrixPosition(L.matrixWorld),O.direction.transformDirection(S),y++}}}return{setup:d,setupView:f,state:r}}function Gy(n){const e=new Y3(n),t=[],r=[],s=[];function o(m){g.camera=m,t.length=0,r.length=0,s.length=0}function u(m){m.isLightProbeGrid?s.push(m):t.push(m)}function d(m){r.push(m)}function f(){e.setup(t),s.sort((m,v)=>m.priority-v.priority||m.id-v.id)}function h(m){e.setupView(t,m)}const g={lightsArray:t,shadowsArray:r,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:g,setupLights:f,setupLightsView:h,pushLight:u,pushShadow:d}}function K3(n){let e=new WeakMap;function t(s,o=0){const u=e.get(s);let d;return u===void 0?(d=new Gy(n),e.set(s,[d])):o>=u.length?(d=new Gy(n),u.push(d)):d=u[o],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const Z3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j3=`uniform sampler2D shadow_pass;
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
}`,J3=[new fe(1,0,0),new fe(-1,0,0),new fe(0,1,0),new fe(0,-1,0),new fe(0,0,1),new fe(0,0,-1)],Q3=[new fe(0,-1,0),new fe(0,-1,0),new fe(0,0,1),new fe(0,0,-1),new fe(0,-1,0),new fe(0,-1,0)],Vy=new rn,cl=new fe,Wh=new fe;function eD(n,e,t){let r=new Il;const s=new Et,o=new Et,u=new on,d=new fC,f=new hC,h={},g=t.maxTextureSize,m={[ds]:ii,[ii]:ds,[Qi]:Qi},v=new hs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:Z3,fragmentShader:j3}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new Qr;E.setAttribute("position",new cs(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ua(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let S=this.type;this.render=function(I,b,C){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;this.type===xx&&(ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Nc);const V=n.getRenderTarget(),U=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),$=n.state;$.setBlending(uo),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const Y=S!==this.type;Y&&b.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(se=>se.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,se=I.length;B<se;B++){const re=I[B],ne=re.shadow;if(ne===void 0){ct("WebGLShadowMap:",re,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;s.copy(ne.mapSize);const ee=ne.getFrameExtents();s.multiply(ee),o.copy(ne.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(o.x=Math.floor(g/ee.x),s.x=o.x*ee.x,ne.mapSize.x=o.x),s.y>g&&(o.y=Math.floor(g/ee.y),s.y=o.y*ee.y,ne.mapSize.y=o.y));const Z=n.state.buffers.depth.getReversed();if(ne.camera._reversedDepth=Z,ne.map===null||Y===!0){if(ne.map!==null&&(ne.map.depthTexture!==null&&(ne.map.depthTexture.dispose(),ne.map.depthTexture=null),ne.map.dispose()),this.type===gl){if(re.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ne.map=new wr(s.x,s.y,{format:fs,type:Rr,minFilter:ti,magFilter:ti,generateMipmaps:!1}),ne.map.texture.name=re.name+".shadowMap",ne.map.depthTexture=new vo(s.x,s.y,xr),ne.map.depthTexture.name=re.name+".shadowMapDepth",ne.map.depthTexture.format=Oa,ne.map.depthTexture.compareFunction=null,ne.map.depthTexture.minFilter=Cn,ne.map.depthTexture.magFilter=Cn}else re.isPointLight?(ne.map=new Vm(s.x),ne.map.depthTexture=new Kx(s.x,Tr)):(ne.map=new wr(s.x,s.y),ne.map.depthTexture=new vo(s.x,s.y,Tr)),ne.map.depthTexture.name=re.name+".shadowMap",ne.map.depthTexture.format=Oa,this.type===Nc?(ne.map.depthTexture.compareFunction=Z?zx:Bx,ne.map.depthTexture.minFilter=ti,ne.map.depthTexture.magFilter=ti):(ne.map.depthTexture.compareFunction=null,ne.map.depthTexture.minFilter=Cn,ne.map.depthTexture.magFilter=Cn);ne.camera.updateProjectionMatrix()}ne.map.isWebGLCubeRenderTarget!==!0&&(ne.map.width!==s.x||ne.map.height!==s.y)&&ne.map.setSize(s.x,s.y);const j=ne.map.isWebGLCubeRenderTarget?6:ne.getViewportCount();re.isPointLight!==!0&&ne.updateMatrices(re,C);const F=(ne.camera.layers.mask&4294967294)!==0?ne.camera.layers:C.layers;for(let te=0;te<j;te++){const Ae=ne.getCamera(te);if(re.isPointLight){const ae=ne.camera,Me=ne.matrix,be=re.distance||ae.far;be!==ae.far&&(ae.far=be,ae.updateProjectionMatrix()),cl.setFromMatrixPosition(re.matrixWorld),ae.position.copy(cl),Wh.copy(ae.position),Wh.add(J3[te]),ae.up.copy(Q3[te]),ae.lookAt(Wh),ae.updateMatrixWorld(),Me.makeTranslation(-cl.x,-cl.y,-cl.z),Vy.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),ne._frustum.setFromProjectionMatrix(Vy,ae.coordinateSystem,ae.reversedDepth)}if(ne.map.isWebGLCubeRenderTarget)n.setRenderTarget(ne.map,te),n.clear();else{te===0&&(n.setRenderTarget(ne.map),n.clear());const ae=ne.getViewport(te);u.set(o.x*ae.x,o.y*ae.y,o.x*ae.z,o.y*ae.w),$.viewport(u)}r=ne.getFrustum(te),L(b,C,Ae,re,F,this.type)}ne.isPointLightShadow!==!0&&this.type===gl&&w(ne,C),ne.needsUpdate=!1}S=this.type,y.needsUpdate=!1,n.setRenderTarget(V,U,z)};function w(I,b){const C=e.update(T);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,x.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),I.mapPass===null?I.mapPass=new wr(s.x,s.y,{format:fs,type:Rr}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),v.uniforms.shadow_pass.value=I.map.depthTexture,v.uniforms.resolution.value.set(I.map.width,I.map.height),v.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(b,null,C,v,T,null),x.uniforms.shadow_pass.value=I.mapPass.texture,x.uniforms.resolution.value.set(I.map.width,I.map.height),x.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(b,null,C,x,T,null)}function D(I,b,C,V){let U=null;const z=C.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(z!==void 0)U=z;else if(U=C.isPointLight===!0?f:d,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const $=U.uuid,Y=b.uuid;let B=h[$];B===void 0&&(B={},h[$]=B);let se=B[Y];se===void 0&&(se=U.clone(),B[Y]=se,b.addEventListener("dispose",O)),U=se}if(U.visible=b.visible,U.wireframe=b.wireframe,V===gl?U.side=b.shadowSide!==null?b.shadowSide:b.side:U.side=b.shadowSide!==null?b.shadowSide:m[b.side],U.alphaMap=b.alphaMap,U.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,U.map=b.map,U.clipShadows=b.clipShadows,U.clippingPlanes=b.clippingPlanes,U.clipIntersection=b.clipIntersection,U.displacementMap=b.displacementMap,U.displacementScale=b.displacementScale,U.displacementBias=b.displacementBias,U.wireframeLinewidth=b.wireframeLinewidth,U.linewidth=b.linewidth,C.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const $=n.properties.get(U);$.light=C}return U}function L(I,b,C,V,U,z){if(I.visible===!1)return;if(I.layers.test(U)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&z===gl)&&(!I.frustumCulled||I.intersectsFrustum(r))){I.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,I.matrixWorld);const B=e.update(I),se=I.material;if(Array.isArray(se)){const re=B.groups;for(let ne=0,ee=re.length;ne<ee;ne++){const Z=re[ne],j=se[Z.materialIndex];if(j&&j.visible){const F=D(I,j,V,z);I.onBeforeShadow(n,I,b,C,B,F,Z),n.renderBufferDirect(C,null,B,F,I,Z),I.onAfterShadow(n,I,b,C,B,F,Z)}}}else if(se.visible){const re=D(I,se,V,z);I.onBeforeShadow(n,I,b,C,B,re,null),n.renderBufferDirect(C,null,B,re,I,null),I.onAfterShadow(n,I,b,C,B,re,null)}}const Y=I.children;for(let B=0,se=Y.length;B<se;B++)L(Y[B],b,C,V,U,z)}function O(I){I.target.removeEventListener("dispose",O);for(const C in h){const V=h[C],U=I.target.uuid;U in V&&(V[U].dispose(),delete V[U])}}}function tD(n,e){function t(){let N=!1;const q=new on;let W=null;const ue=new on(0,0,0,0);return{setMask:function(pe){W!==pe&&!N&&(n.colorMask(pe,pe,pe,pe),W=pe)},setLocked:function(pe){N=pe},setClear:function(pe,ge,xe,$e,Ee){Ee===!0&&(pe*=$e,ge*=$e,xe*=$e),q.set(pe,ge,xe,$e),ue.equals(q)===!1&&(n.clearColor(pe,ge,xe,$e),ue.copy(q))},reset:function(){N=!1,W=null,ue.set(-1,0,0,0)}}}function r(){let N=!1,q=!1,W=null,ue=null,pe=null;return{setReversed:function(ge){if(q!==ge){const xe=e.get("EXT_clip_control");ge?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),q=ge;const $e=pe;pe=null,this.setClear($e)}},getReversed:function(){return q},setTest:function(ge){ge?ye(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(ge){W!==ge&&!N&&(n.depthMask(ge),W=ge)},setFunc:function(ge){if(q&&(ge=DA[ge]),ue!==ge){switch(ge){case Tp:n.depthFunc(n.NEVER);break;case Rp:n.depthFunc(n.ALWAYS);break;case Ap:n.depthFunc(n.LESS);break;case Cl:n.depthFunc(n.LEQUAL);break;case Cp:n.depthFunc(n.EQUAL);break;case Pp:n.depthFunc(n.GEQUAL);break;case Lp:n.depthFunc(n.GREATER);break;case Dp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=ge}},setLocked:function(ge){N=ge},setClear:function(ge){pe!==ge&&(pe=ge,q&&(ge=1-ge),n.clearDepth(ge))},reset:function(){N=!1,W=null,ue=null,pe=null,q=!1}}}function s(){let N=!1,q=null,W=null,ue=null,pe=null,ge=null,xe=null,$e=null,Ee=null;return{setTest:function(He){N||(He?ye(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(He){q!==He&&!N&&(n.stencilMask(He),q=He)},setFunc:function(He,it,Fe){(W!==He||ue!==it||pe!==Fe)&&(n.stencilFunc(He,it,Fe),W=He,ue=it,pe=Fe)},setOp:function(He,it,Fe){(ge!==He||xe!==it||$e!==Fe)&&(n.stencilOp(He,it,Fe),ge=He,xe=it,$e=Fe)},setLocked:function(He){N=He},setClear:function(He){Ee!==He&&(n.clearStencil(He),Ee=He)},reset:function(){N=!1,q=null,W=null,ue=null,pe=null,ge=null,xe=null,$e=null,Ee=null}}}const o=new t,u=new r,d=new s;let f={};const h=new WeakMap;let g={},m={},v={},x=new WeakMap,E=[],T=null,y=!1,S=null,w=null,D=null,L=null,O=null,I=null,b=null,C=new Mt(0,0,0),V=0,U=!1,z=null,$=null,Y=null,B=null,se=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,ee=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(Z)[1]),ne=ee>=1):Z.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),ne=ee>=2);let j=null,F={};const te=n.getParameter(n.SCISSOR_BOX),Ae=n.getParameter(n.VIEWPORT),ae=new on().fromArray(te),Me=new on().fromArray(Ae);function be(N,q,W,ue){const pe=new Uint8Array(4),ge=n.createTexture();n.bindTexture(N,ge),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xe=0;xe<W;xe++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(q,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(q+xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return ge}const Ce={};Ce[n.TEXTURE_2D]=be(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=be(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[n.TEXTURE_2D_ARRAY]=be(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=be(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ye(n.DEPTH_TEST),u.setFunc(Cl),jt(!1),bt(X_),ye(n.CULL_FACE),$t(uo);function ye(N){g[N]!==!0&&(n.enable(N),g[N]=!0)}function Be(N){g[N]!==!1&&(n.disable(N),g[N]=!1)}function ft(N,q){return v[N]!==q?(n.bindFramebuffer(N,q),v[N]=q,N===n.DRAW_FRAMEBUFFER&&(v[n.FRAMEBUFFER]=q),N===n.FRAMEBUFFER&&(v[n.DRAW_FRAMEBUFFER]=q),!0):!1}function Ze(N,q){let W=E,ue=!1;if(N){W=x.get(q),W===void 0&&(W=[],x.set(q,W));const pe=N.textures;if(W.length!==pe.length||W[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,xe=pe.length;ge<xe;ge++)W[ge]=n.COLOR_ATTACHMENT0+ge;W.length=pe.length,ue=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,ue=!0);ue&&n.drawBuffers(W)}function ht(N){return T!==N?(n.useProgram(N),T=N,!0):!1}const mt={[ao]:n.FUNC_ADD,[eA]:n.FUNC_SUBTRACT,[tA]:n.FUNC_REVERSE_SUBTRACT};mt[nA]=n.MIN,mt[iA]=n.MAX;const lt={[rA]:n.ZERO,[aA]:n.ONE,[sA]:n.SRC_COLOR,[Mx]:n.SRC_ALPHA,[fA]:n.SRC_ALPHA_SATURATE,[cA]:n.DST_COLOR,[lA]:n.DST_ALPHA,[oA]:n.ONE_MINUS_SRC_COLOR,[Ex]:n.ONE_MINUS_SRC_ALPHA,[dA]:n.ONE_MINUS_DST_COLOR,[uA]:n.ONE_MINUS_DST_ALPHA,[hA]:n.CONSTANT_COLOR,[pA]:n.ONE_MINUS_CONSTANT_COLOR,[mA]:n.CONSTANT_ALPHA,[gA]:n.ONE_MINUS_CONSTANT_ALPHA};function $t(N,q,W,ue,pe,ge,xe,$e,Ee,He){if(N===uo){y===!0&&(Be(n.BLEND),y=!1);return}if(y===!1&&(ye(n.BLEND),y=!0),N!==QR){if(N!==S||He!==U){if((w!==ao||O!==ao)&&(n.blendEquation(n.FUNC_ADD),w=ao,O=ao),He)switch(N){case Ml:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case q_:n.blendFunc(n.ONE,n.ONE);break;case Y_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case K_:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:It("WebGLState: Invalid blending: ",N);break}else switch(N){case Ml:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case q_:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Y_:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case K_:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",N);break}D=null,L=null,I=null,b=null,C.set(0,0,0),V=0,S=N,U=He}return}pe=pe||q,ge=ge||W,xe=xe||ue,(q!==w||pe!==O)&&(n.blendEquationSeparate(mt[q],mt[pe]),w=q,O=pe),(W!==D||ue!==L||ge!==I||xe!==b)&&(n.blendFuncSeparate(lt[W],lt[ue],lt[ge],lt[xe]),D=W,L=ue,I=ge,b=xe),($e.equals(C)===!1||Ee!==V)&&(n.blendColor($e.r,$e.g,$e.b,Ee),C.copy($e),V=Ee),S=N,U=!1}function Bt(N,q){N.side===Qi?Be(n.CULL_FACE):ye(n.CULL_FACE);let W=N.side===ii;q&&(W=!W),jt(W),N.blending===Ml&&N.transparent===!1?$t(uo):$t(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),u.setFunc(N.depthFunc),u.setTest(N.depthTest),u.setMask(N.depthWrite),o.setMask(N.colorWrite);const ue=N.stencilWrite;d.setTest(ue),ue&&(d.setMask(N.stencilWriteMask),d.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),d.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Nt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function jt(N){z!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),z=N)}function bt(N){N!==jR?(ye(n.CULL_FACE),N!==$&&(N===X_?n.cullFace(n.BACK):N===JR?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),$=N}function Jt(N){N!==Y&&(ne&&n.lineWidth(N),Y=N)}function Nt(N,q,W){N?(ye(n.POLYGON_OFFSET_FILL),(B!==q||se!==W)&&(B=q,se=W,u.getReversed()&&(q=-q,W=-W),n.polygonOffset(q,W))):Be(n.POLYGON_OFFSET_FILL)}function Qt(N){N?ye(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function en(N){N===void 0&&(N=n.TEXTURE0+re-1),j!==N&&(n.activeTexture(N),j=N)}function zt(N,q,W){W===void 0&&(j===null?W=n.TEXTURE0+re-1:W=j);let ue=F[W];ue===void 0&&(ue={type:void 0,texture:void 0},F[W]=ue),(ue.type!==N||ue.texture!==q)&&(j!==W&&(n.activeTexture(W),j=W),n.bindTexture(N,q||Ce[N]),ue.type=N,ue.texture=q)}function J(){const N=F[j];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function mn(){try{n.compressedTexImage2D(...arguments)}catch(N){It("WebGLState:",N)}}function xt(){try{n.compressedTexImage3D(...arguments)}catch(N){It("WebGLState:",N)}}function Ct(){try{n.texSubImage2D(...arguments)}catch(N){It("WebGLState:",N)}}function Ie(){try{n.texSubImage3D(...arguments)}catch(N){It("WebGLState:",N)}}function Ft(){try{n.compressedTexSubImage2D(...arguments)}catch(N){It("WebGLState:",N)}}function Qe(){try{n.compressedTexSubImage3D(...arguments)}catch(N){It("WebGLState:",N)}}function nt(){try{n.texStorage2D(...arguments)}catch(N){It("WebGLState:",N)}}function k(){try{n.texStorage3D(...arguments)}catch(N){It("WebGLState:",N)}}function R(){try{n.texImage2D(...arguments)}catch(N){It("WebGLState:",N)}}function oe(){try{n.texImage3D(...arguments)}catch(N){It("WebGLState:",N)}}function we(N){return m[N]!==void 0?m[N]:n.getParameter(N)}function Se(N,q){m[N]!==q&&(n.pixelStorei(N,q),m[N]=q)}function Le(N){ae.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ae.copy(N))}function De(N){Me.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Me.copy(N))}function ve(N,q){let W=h.get(q);W===void 0&&(W=new WeakMap,h.set(q,W));let ue=W.get(N);ue===void 0&&(ue=n.getUniformBlockIndex(q,N.name),n.uniformBlockBinding(q,ue,ue),W.set(N,ue))}function _e(N,q,W){const pe=h.get(q).get(N);f[pe]!==W&&(n.bindBufferBase(n.UNIFORM_BUFFER,pe,W),f[pe]=W)}function G(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),g={},m={},j=null,F={},v={},f={},x=new WeakMap,E=[],T=null,y=!1,S=null,w=null,D=null,L=null,O=null,I=null,b=null,C=new Mt(0,0,0),V=0,U=!1,z=null,$=null,Y=null,B=null,se=null,ae.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),o.reset(),u.reset(),d.reset()}return{buffers:{color:o,depth:u,stencil:d},enable:ye,disable:Be,bindFramebuffer:ft,drawBuffers:Ze,useProgram:ht,setBlending:$t,setMaterial:Bt,setFlipSided:jt,setCullFace:bt,setLineWidth:Jt,setPolygonOffset:Nt,setScissorTest:Qt,activeTexture:en,bindTexture:zt,unbindTexture:J,compressedTexImage2D:mn,compressedTexImage3D:xt,texImage2D:R,texImage3D:oe,pixelStorei:Se,getParameter:we,updateUBOMapping:ve,uniformBlockBinding:_e,texStorage2D:nt,texStorage3D:k,texSubImage2D:Ct,texSubImage3D:Ie,compressedTexSubImage2D:Ft,compressedTexSubImage3D:Qe,scissor:Le,viewport:De,reset:G}}function nD(n,e,t,r,s,o,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Et,g=new WeakMap,m=new Set;let v;const x=new WeakMap,E=new Set,T=new FinalizationRegistry(k=>E.delete(k));let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(k,R){return y?new OffscreenCanvas(k,R):Jc("canvas")}function w(k,R,oe){let we=1;const Se=nt(k);if((Se.width>oe||Se.height>oe)&&(we=oe/Math.max(Se.width,Se.height)),we<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const Le=Math.floor(we*Se.width),De=Math.floor(we*Se.height);v===void 0&&(v=S(Le,De));const ve=R?S(Le,De):v;return ve.width=Le,ve.height=De,ve.getContext("2d").drawImage(k,0,0,Le,De),ct("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+Le+"x"+De+")."),ve}else return"data"in k&&ct("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),k;return k}function D(k){return k.generateMipmaps}function L(k){n.generateMipmap(k)}function O(k){return k.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?n.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function I(k,R,oe,we,Se,Le=!1){if(k!==null){if(n[k]!==void 0)return n[k];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let De;we&&(De=e.get("EXT_texture_norm16"),De||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=R;if(R===n.RED&&(oe===n.FLOAT&&(ve=n.R32F),oe===n.HALF_FLOAT&&(ve=n.R16F),oe===n.UNSIGNED_BYTE&&(ve=n.R8),oe===n.UNSIGNED_SHORT&&De&&(ve=De.R16_EXT),oe===n.SHORT&&De&&(ve=De.R16_SNORM_EXT)),R===n.RED_INTEGER&&(oe===n.UNSIGNED_BYTE&&(ve=n.R8UI),oe===n.UNSIGNED_SHORT&&(ve=n.R16UI),oe===n.UNSIGNED_INT&&(ve=n.R32UI),oe===n.BYTE&&(ve=n.R8I),oe===n.SHORT&&(ve=n.R16I),oe===n.INT&&(ve=n.R32I)),R===n.RG&&(oe===n.FLOAT&&(ve=n.RG32F),oe===n.HALF_FLOAT&&(ve=n.RG16F),oe===n.UNSIGNED_BYTE&&(ve=n.RG8),oe===n.UNSIGNED_SHORT&&De&&(ve=De.RG16_EXT),oe===n.SHORT&&De&&(ve=De.RG16_SNORM_EXT)),R===n.RG_INTEGER&&(oe===n.UNSIGNED_BYTE&&(ve=n.RG8UI),oe===n.UNSIGNED_SHORT&&(ve=n.RG16UI),oe===n.UNSIGNED_INT&&(ve=n.RG32UI),oe===n.BYTE&&(ve=n.RG8I),oe===n.SHORT&&(ve=n.RG16I),oe===n.INT&&(ve=n.RG32I)),R===n.RGB_INTEGER&&(oe===n.UNSIGNED_BYTE&&(ve=n.RGB8UI),oe===n.UNSIGNED_SHORT&&(ve=n.RGB16UI),oe===n.UNSIGNED_INT&&(ve=n.RGB32UI),oe===n.BYTE&&(ve=n.RGB8I),oe===n.SHORT&&(ve=n.RGB16I),oe===n.INT&&(ve=n.RGB32I)),R===n.RGBA_INTEGER&&(oe===n.UNSIGNED_BYTE&&(ve=n.RGBA8UI),oe===n.UNSIGNED_SHORT&&(ve=n.RGBA16UI),oe===n.UNSIGNED_INT&&(ve=n.RGBA32UI),oe===n.BYTE&&(ve=n.RGBA8I),oe===n.SHORT&&(ve=n.RGBA16I),oe===n.INT&&(ve=n.RGBA32I)),R===n.RGB&&(oe===n.UNSIGNED_SHORT&&De&&(ve=De.RGB16_EXT),oe===n.SHORT&&De&&(ve=De.RGB16_SNORM_EXT),oe===n.UNSIGNED_INT_5_9_9_9_REV&&(ve=n.RGB9_E5),oe===n.UNSIGNED_INT_10F_11F_11F_REV&&(ve=n.R11F_G11F_B10F)),R===n.RGBA){const _e=Le?jc:Tt.getTransfer(Se);oe===n.FLOAT&&(ve=n.RGBA32F),oe===n.HALF_FLOAT&&(ve=n.RGBA16F),oe===n.UNSIGNED_BYTE&&(ve=_e===Ut?n.SRGB8_ALPHA8:n.RGBA8),oe===n.UNSIGNED_SHORT&&De&&(ve=De.RGBA16_EXT),oe===n.SHORT&&De&&(ve=De.RGBA16_SNORM_EXT),oe===n.UNSIGNED_SHORT_4_4_4_4&&(ve=n.RGBA4),oe===n.UNSIGNED_SHORT_5_5_5_1&&(ve=n.RGB5_A1)}return(ve===n.R16F||ve===n.R32F||ve===n.RG16F||ve===n.RG32F||ve===n.RGBA16F||ve===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function b(k,R){let oe;return k?R===null||R===Tr||R===go?oe=n.DEPTH24_STENCIL8:R===xr?oe=n.DEPTH32F_STENCIL8:R===Ll&&(oe=n.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Tr||R===go?oe=n.DEPTH_COMPONENT24:R===xr?oe=n.DEPTH_COMPONENT32F:R===Ll&&(oe=n.DEPTH_COMPONENT16),oe}function C(k,R){return D(k)===!0||k.isFramebufferTexture&&k.minFilter!==Cn&&k.minFilter!==ti?Math.log2(Math.max(R.width,R.height))+1:k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?R.mipmaps.length:1}function V(k){const R=new WeakRef(k);r.get(k).__ref=R,E.add(R),T.register(k,R,R)}function U(k){const R=r.get(k).__ref;R!==void 0&&(E.delete(R),T.unregister(R))}function z(k){Y(k.target)}function $(k){B(k.target)}function Y(k){k.removeEventListener("dispose",z),U(k),re(k),k.isVideoTexture&&g.delete(k),k.isHTMLTexture&&m.delete(k)}function B(k){k.removeEventListener("dispose",$),U(k),ee(k)}function se(){for(const k of E){const R=k.deref();R!==void 0&&(R.isRenderTarget===!0?B(R):Y(R))}E.clear(),m.clear()}function re(k){const R=r.get(k);if(R.__webglInit===void 0)return;const oe=k.source,we=x.get(oe);if(we){const Se=we[R.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&ne(k),Object.keys(we).length===0&&x.delete(oe)}r.remove(k)}function ne(k){const R=r.get(k);n.deleteTexture(R.__webglTexture);const oe=k.source,we=x.get(oe);delete we[R.__cacheKey],u.memory.textures--}function ee(k){const R=r.get(k);R.__depthDisposeCallback&&R.__depthDisposeCallback();const oe=k.depthTexture;if(oe&&oe.renderTarget===k&&Y(oe),k.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(R.__webglFramebuffer[Se]))for(let Le=0;Le<R.__webglFramebuffer[Se].length;Le++)n.deleteFramebuffer(R.__webglFramebuffer[Se][Le]);else n.deleteFramebuffer(R.__webglFramebuffer[Se]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[Se])}else{if(Array.isArray(R.__webglFramebuffer))for(let Se=0;Se<R.__webglFramebuffer.length;Se++)n.deleteFramebuffer(R.__webglFramebuffer[Se]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Se=0;Se<R.__webglColorRenderbuffer.length;Se++)R.__webglColorRenderbuffer[Se]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[Se]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const we=k.textures;for(let Se=0,Le=we.length;Se<Le;Se++){const De=r.get(we[Se]);De.__webglTexture&&(n.deleteTexture(De.__webglTexture),u.memory.textures--),r.remove(we[Se])}r.remove(k)}let Z=0;function j(){Z=0}function F(){return Z}function te(k){Z=k}function Ae(){const k=Z;return k>=s.maxTextures&&ct("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,k}function ae(k){const R=[];return R.push(k.wrapS),R.push(k.wrapT),R.push(k.wrapR||0),R.push(k.magFilter),R.push(k.minFilter),R.push(k.anisotropy),R.push(k.internalFormat),R.push(k.format),R.push(k.type),R.push(k.generateMipmaps),R.push(k.mipmapsAutoUpdate),R.push(k.premultiplyAlpha),R.push(k.flipY),R.push(k.unpackAlignment),R.push(k.colorSpace),R.join()}function Me(k,R){const oe=r.get(k);if(k.isVideoTexture&&Ft(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&oe.__version!==k.version){const we=k.image;if(we===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(we.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{Bt(oe,k,R);return}}else k.isExternalTexture&&(oe.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture,n.TEXTURE0+R)}function be(k,R){const oe=r.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&oe.__version!==k.version){Bt(oe,k,R);return}else k.isExternalTexture&&(oe.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,oe.__webglTexture,n.TEXTURE0+R)}function Ce(k,R){const oe=r.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&oe.__version!==k.version){Bt(oe,k,R);return}t.bindTexture(n.TEXTURE_3D,oe.__webglTexture,n.TEXTURE0+R)}function ye(k,R){const oe=r.get(k);if(k.version>0&&oe.__version!==k.version){jt(oe,k,R);return}t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture,n.TEXTURE0+R)}const Be={[qc]:n.REPEAT,[$r]:n.CLAMP_TO_EDGE,[Ip]:n.MIRRORED_REPEAT},ft={[Cn]:n.NEAREST,[yA]:n.NEAREST_MIPMAP_NEAREST,[sc]:n.NEAREST_MIPMAP_LINEAR,[ti]:n.LINEAR,[_h]:n.LINEAR_MIPMAP_NEAREST,[Da]:n.LINEAR_MIPMAP_LINEAR},Ze={[EA]:n.NEVER,[Hx]:n.ALWAYS,[bA]:n.LESS,[Bx]:n.LEQUAL,[wA]:n.EQUAL,[zx]:n.GEQUAL,[TA]:n.GREATER,[RA]:n.NOTEQUAL};function ht(k,R){if(R.type===xr&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===ti||R.magFilter===_h||R.magFilter===sc||R.magFilter===Da||R.minFilter===ti||R.minFilter===_h||R.minFilter===sc||R.minFilter===Da)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(k,n.TEXTURE_WRAP_S,Be[R.wrapS]),n.texParameteri(k,n.TEXTURE_WRAP_T,Be[R.wrapT]),(k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY)&&n.texParameteri(k,n.TEXTURE_WRAP_R,Be[R.wrapR]),n.texParameteri(k,n.TEXTURE_MAG_FILTER,ft[R.magFilter]),n.texParameteri(k,n.TEXTURE_MIN_FILTER,ft[R.minFilter]),R.compareFunction&&(n.texParameteri(k,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(k,n.TEXTURE_COMPARE_FUNC,Ze[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Cn||R.minFilter!==sc&&R.minFilter!==Da||R.type===xr&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||r.get(R).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");n.texParameterf(k,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy}}}function mt(k,R){let oe=!1;k.__webglInit===void 0&&(k.__webglInit=!0,R.addEventListener("dispose",z),V(R));const we=R.source;let Se=x.get(we);Se===void 0&&(Se={},x.set(we,Se));const Le=ae(R);if(Le!==k.__cacheKey){Se[Le]===void 0&&(Se[Le]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,oe=!0),Se[Le].usedTimes++;const De=Se[k.__cacheKey];De!==void 0&&(Se[k.__cacheKey].usedTimes--,De.usedTimes===0&&ne(R)),k.__cacheKey=Le,k.__webglTexture=Se[Le].texture}return oe}function lt(k,R,oe){return Math.floor(Math.floor(k/oe)/R)}function $t(k,R,oe,we){const Le=k.updateRanges;if(Le.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,R.width,R.height,oe,we,R.data);else{Le.sort((N,q)=>N.start-q.start);let De=0;for(let N=1;N<Le.length;N++){const q=Le[De],W=Le[N],ue=q.start+q.count,pe=lt(W.start,R.width,4),ge=lt(q.start,R.width,4);W.start<=ue+1&&pe===ge&&lt(W.start+W.count-1,R.width,4)===pe?q.count=Math.max(q.count,W.start+W.count-q.start):(++De,Le[De]=W)}Le.length=De+1;const ve=t.getParameter(n.UNPACK_ROW_LENGTH),_e=t.getParameter(n.UNPACK_SKIP_PIXELS),G=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,R.width);for(let N=0,q=Le.length;N<q;N++){const W=Le[N],ue=Math.floor(W.start/4),pe=Math.ceil(W.count/4),ge=ue%R.width,xe=Math.floor(ue/R.width),$e=pe,Ee=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(n.UNPACK_SKIP_ROWS,xe),t.texSubImage2D(n.TEXTURE_2D,0,ge,xe,$e,Ee,oe,we,R.data)}k.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ve),t.pixelStorei(n.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(n.UNPACK_SKIP_ROWS,G)}}function Bt(k,R,oe){let we=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(we=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(we=n.TEXTURE_3D);const Se=mt(k,R),Le=R.source;t.bindTexture(we,k.__webglTexture,n.TEXTURE0+oe);const De=r.get(Le);if(Le.version!==De.__version||Se===!0){if(t.activeTexture(n.TEXTURE0+oe),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){const Ee=Tt.getPrimaries(Tt.workingColorSpace),He=R.colorSpace===La?null:Tt.getPrimaries(R.colorSpace),it=R.colorSpace===La||Ee===He?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it)}t.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment);let _e=w(R.image,!1,s.maxTextureSize);_e=Qe(R,_e);const G=o.convert(R.format,R.colorSpace),N=o.convert(R.type);let q=I(R.internalFormat,G,N,R.normalized,R.colorSpace,R.isVideoTexture);ht(we,R);let W;const ue=R.mipmaps,pe=R.isVideoTexture!==!0,ge=De.__version===void 0||Se===!0,xe=Le.dataReady,$e=C(R,_e);if(R.isDepthTexture)q=b(R.format===Ia,R.type),ge&&(pe?t.texStorage2D(n.TEXTURE_2D,1,q,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,q,_e.width,_e.height,0,G,N,null));else if(R.isDataTexture)if(ue.length>0){pe&&ge&&t.texStorage2D(n.TEXTURE_2D,$e,q,ue[0].width,ue[0].height);for(let Ee=0,He=ue.length;Ee<He;Ee++)W=ue[Ee],pe?xe&&t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,W.width,W.height,G,N,W.data):t.texImage2D(n.TEXTURE_2D,Ee,q,W.width,W.height,0,G,N,W.data);R.generateMipmaps=!1}else pe?(ge&&t.texStorage2D(n.TEXTURE_2D,$e,q,_e.width,_e.height),xe&&$t(R,_e,G,N)):t.texImage2D(n.TEXTURE_2D,0,q,_e.width,_e.height,0,G,N,_e.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){pe&&ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,$e,q,ue[0].width,ue[0].height,_e.depth);for(let Ee=0,He=ue.length;Ee<He;Ee++)if(W=ue[Ee],R.format!==Mr)if(G!==null)if(pe){if(xe)if(R.layerUpdates.size>0){const it=My(W.width,W.height,R.format,R.type);for(const Fe of R.layerUpdates){const vt=W.data.subarray(Fe*it/W.data.BYTES_PER_ELEMENT,(Fe+1)*it/W.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ee,0,0,Fe,W.width,W.height,1,G,vt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ee,0,0,0,W.width,W.height,_e.depth,G,W.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Ee,q,W.width,W.height,_e.depth,0,W.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?xe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Ee,0,0,0,W.width,W.height,_e.depth,G,N,W.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Ee,q,W.width,W.height,_e.depth,0,G,N,W.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{pe&&ge&&t.texStorage2D(n.TEXTURE_2D,$e,q,ue[0].width,ue[0].height);for(let Ee=0,He=ue.length;Ee<He;Ee++)W=ue[Ee],R.format!==Mr?G!==null?pe?xe&&t.compressedTexSubImage2D(n.TEXTURE_2D,Ee,0,0,W.width,W.height,G,W.data):t.compressedTexImage2D(n.TEXTURE_2D,Ee,q,W.width,W.height,0,W.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?xe&&t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,W.width,W.height,G,N,W.data):t.texImage2D(n.TEXTURE_2D,Ee,q,W.width,W.height,0,G,N,W.data)}else if(R.isDataArrayTexture)if(pe){if(ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,$e,q,_e.width,_e.height,_e.depth),xe)if(R.layerUpdates.size>0){const Ee=My(_e.width,_e.height,R.format,R.type);for(const He of R.layerUpdates){const it=_e.data.subarray(He*Ee/_e.data.BYTES_PER_ELEMENT,(He+1)*Ee/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,He,_e.width,_e.height,1,G,N,it)}R.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,G,N,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,q,_e.width,_e.height,_e.depth,0,G,N,_e.data);else if(R.isData3DTexture)pe?(ge&&t.texStorage3D(n.TEXTURE_3D,$e,q,_e.width,_e.height,_e.depth),xe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,G,N,_e.data)):t.texImage3D(n.TEXTURE_3D,0,q,_e.width,_e.height,_e.depth,0,G,N,_e.data);else if(R.isFramebufferTexture){if(ge)if(pe)t.texStorage2D(n.TEXTURE_2D,$e,q,_e.width,_e.height);else{let Ee=_e.width,He=_e.height;for(let it=0;it<$e;it++)t.texImage2D(n.TEXTURE_2D,it,q,Ee,He,0,G,N,null),Ee>>=1,He>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in n){const Ee=n.canvas;if(Ee.hasAttribute("layoutsubtree")||Ee.setAttribute("layoutsubtree","true"),_e.parentNode!==Ee){Ee.appendChild(_e),m.add(R),Ee.onpaint=He=>{const it=He.changedElements;for(const Fe of m)it.includes(Fe.image)&&(Fe.needsUpdate=!0)},Ee.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,_e);else{const it=n.RGBA,Fe=n.RGBA,vt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,it,Fe,vt,_e)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ue.length>0){if(pe&&ge){const Ee=nt(ue[0]);t.texStorage2D(n.TEXTURE_2D,$e,q,Ee.width,Ee.height)}for(let Ee=0,He=ue.length;Ee<He;Ee++)W=ue[Ee],pe?xe&&t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,G,N,W):t.texImage2D(n.TEXTURE_2D,Ee,q,G,N,W);R.generateMipmaps=!1}else if(pe){if(ge){const Ee=nt(_e);t.texStorage2D(n.TEXTURE_2D,$e,q,Ee.width,Ee.height)}xe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,G,N,_e)}else t.texImage2D(n.TEXTURE_2D,0,q,G,N,_e);D(R)&&R.mipmapsAutoUpdate===!0&&L(we),De.__version=Le.version,R.onUpdate&&R.onUpdate(R)}k.__version=R.version}function jt(k,R,oe){if(R.image.length!==6)return;const we=mt(k,R),Se=R.source;t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+oe);const Le=r.get(Se);if(Se.version!==Le.__version||we===!0){t.activeTexture(n.TEXTURE0+oe);const De=Tt.getPrimaries(Tt.workingColorSpace),ve=R.colorSpace===La?null:Tt.getPrimaries(R.colorSpace),_e=R.colorSpace===La||De===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const G=R.isCompressedTexture||R.image[0].isCompressedTexture,N=R.image[0]&&R.image[0].isDataTexture,q=[];for(let Fe=0;Fe<6;Fe++)!G&&!N?q[Fe]=w(R.image[Fe],!0,s.maxCubemapSize):q[Fe]=N?R.image[Fe].image:R.image[Fe],q[Fe]=Qe(R,q[Fe]);const W=q[0],ue=o.convert(R.format,R.colorSpace),pe=o.convert(R.type);let ge=I(R.internalFormat,ue,pe,R.normalized,R.colorSpace);const xe=R.isVideoTexture!==!0,$e=Le.__version===void 0||we===!0,Ee=Se.dataReady;let He=C(R,W);ht(n.TEXTURE_CUBE_MAP,R);let it;if(R.isDepthTexture){if(ge=b(R.format===Ia,R.type),$e)if(xe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,ge,W.width,W.height);else for(let Fe=0;Fe<6;Fe++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,ge,W.width,W.height,0,ue,pe,null)}else if(G){xe&&$e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,He,ge,W.width,W.height);for(let Fe=0;Fe<6;Fe++){it=q[Fe].mipmaps;for(let vt=0;vt<it.length;vt++){const Xt=it[vt];R.format!==Mr?ue!==null?xe?Ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,vt,0,0,Xt.width,Xt.height,ue,Xt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,vt,ge,Xt.width,Xt.height,0,Xt.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):xe?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,vt,0,0,Xt.width,Xt.height,ue,pe,Xt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,vt,ge,Xt.width,Xt.height,0,ue,pe,Xt.data)}}}else{if(it=R.mipmaps,xe&&$e){it.length>0&&He++;const Fe=nt(q[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,He,ge,Fe.width,Fe.height)}for(let Fe=0;Fe<6;Fe++)if(N){xe?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,q[Fe].width,q[Fe].height,ue,pe,q[Fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,ge,q[Fe].width,q[Fe].height,0,ue,pe,q[Fe].data);for(let vt=0;vt<it.length;vt++){const Ln=it[vt].image[Fe].image;xe?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,vt+1,0,0,Ln.width,Ln.height,ue,pe,Ln.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,vt+1,ge,Ln.width,Ln.height,0,ue,pe,Ln.data)}}else{xe?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,ue,pe,q[Fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,ge,ue,pe,q[Fe]);for(let vt=0;vt<it.length;vt++){const Xt=it[vt];xe?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,vt+1,0,0,ue,pe,Xt.image[Fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,vt+1,ge,ue,pe,Xt.image[Fe])}}}D(R)&&R.mipmapsAutoUpdate===!0&&L(n.TEXTURE_CUBE_MAP),Le.__version=Se.version,R.onUpdate&&R.onUpdate(R)}k.__version=R.version}function bt(k,R,oe,we,Se,Le){const De=o.convert(oe.format,oe.colorSpace),ve=o.convert(oe.type),_e=I(oe.internalFormat,De,ve,oe.normalized,oe.colorSpace),G=r.get(R),N=r.get(oe);if(N.__renderTarget=R,!G.__hasExternalTextures){const q=Math.max(1,R.width>>Le),W=Math.max(1,R.height>>Le);Se===n.TEXTURE_3D||Se===n.TEXTURE_2D_ARRAY?t.texImage3D(Se,Le,_e,q,W,R.depth,0,De,ve,null):t.texImage2D(Se,Le,_e,q,W,0,De,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,k),Ie(R)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,we,Se,N.__webglTexture,0,Ct(R)):(Se===n.TEXTURE_2D||Se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,we,Se,N.__webglTexture,Le),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Jt(k,R,oe){if(n.bindRenderbuffer(n.RENDERBUFFER,k),R.depthBuffer){const we=R.depthTexture,Se=we&&we.isDepthTexture?we.type:null,Le=b(R.stencilBuffer,Se),De=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ie(R)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ct(R),Le,R.width,R.height):oe?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct(R),Le,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,Le,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,k)}else{const we=R.textures;for(let Se=0;Se<we.length;Se++){const Le=we[Se],De=o.convert(Le.format,Le.colorSpace),ve=o.convert(Le.type),_e=I(Le.internalFormat,De,ve,Le.normalized,Le.colorSpace);Ie(R)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ct(R),_e,R.width,R.height):oe?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct(R),_e,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,_e,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Nt(k,R,oe){const we=R.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,k),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Se=r.get(R.depthTexture);Se.__renderTarget=R;const Le=we?R.depthTexture.image[0]:R.depthTexture.image;(!Se.__webglTexture||Le.width!==R.width||Le.height!==R.height)&&(Le.width=R.width,Le.height=R.height,R.depthTexture.needsUpdate=!0),we?ye(R.depthTexture,0):Me(R.depthTexture,0);const De=Se.__webglTexture,ve=Ct(R),_e=we?n.TEXTURE_CUBE_MAP_POSITIVE_X+oe:n.TEXTURE_2D,G=R.depthTexture.format===Ia?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(R.depthTexture.format===Oa)Ie(R)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,_e,De,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,G,_e,De,0);else if(R.depthTexture.format===Ia)Ie(R)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,_e,De,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,G,_e,De,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qt(k){const R=r.get(k),oe=k.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==k.depthTexture){const we=k.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),we){const Se=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,we.removeEventListener("dispose",Se)};we.addEventListener("dispose",Se),R.__depthDisposeCallback=Se}R.__boundDepthTexture=we}if(k.depthTexture&&!R.__autoAllocateDepthBuffer)if(oe)for(let we=0;we<6;we++)Nt(R.__webglFramebuffer[we],k,we);else k.texture.mipmaps.length>0?Nt(R.__webglFramebuffer[0],k,0):Nt(R.__webglFramebuffer,k,0);else if(oe){R.__webglDepthbuffer=[];for(let we=0;we<6;we++)if(t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[we]),R.__webglDepthbuffer[we]===void 0)R.__webglDepthbuffer[we]=n.createRenderbuffer(),Jt(R.__webglDepthbuffer[we],k,!1);else{const Se=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Le=R.__webglDepthbuffer[we];n.bindRenderbuffer(n.RENDERBUFFER,Le),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,Le)}}else if(k.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=n.createRenderbuffer(),Jt(R.__webglDepthbuffer,k,!1);else{const Se=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Le=R.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Le),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,Le)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function en(k,R,oe){const we=r.get(k);R!==void 0&&bt(we.__webglFramebuffer,k,k.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),oe!==void 0&&Qt(k)}function zt(k){const R=k.texture,oe=r.get(k),we=r.get(R);k.addEventListener("dispose",$),V(k);const Se=k.textures,Le=k.isWebGLCubeRenderTarget===!0,De=Se.length>1;if(De||(we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture()),we.__version=R.version,u.memory.textures++),Le){oe.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(R.mipmaps.length>0){oe.__webglFramebuffer[ve]=[];for(let _e=0;_e<R.mipmaps.length;_e++)oe.__webglFramebuffer[ve][_e]=n.createFramebuffer()}else oe.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(R.mipmaps.length>0){oe.__webglFramebuffer=[];for(let ve=0;ve<R.mipmaps.length;ve++)oe.__webglFramebuffer[ve]=n.createFramebuffer()}else oe.__webglFramebuffer=n.createFramebuffer();if(De)for(let ve=0,_e=Se.length;ve<_e;ve++){const G=r.get(Se[ve]);G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture(),u.memory.textures++)}if(k.samples>0&&Ie(k)===!1){oe.__webglMultisampledFramebuffer=n.createFramebuffer(),oe.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer);for(let ve=0;ve<Se.length;ve++){const _e=Se[ve];oe.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,oe.__webglColorRenderbuffer[ve]);const G=o.convert(_e.format,_e.colorSpace),N=o.convert(_e.type),q=I(_e.internalFormat,G,N,_e.normalized,_e.colorSpace,k.isXRRenderTarget===!0),W=Ct(k);n.renderbufferStorageMultisample(n.RENDERBUFFER,W,q,k.width,k.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,oe.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),k.depthBuffer&&(oe.__webglDepthRenderbuffer=n.createRenderbuffer(),Jt(oe.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Le){t.bindTexture(n.TEXTURE_CUBE_MAP,we.__webglTexture),ht(n.TEXTURE_CUBE_MAP,R);for(let ve=0;ve<6;ve++)if(R.mipmaps.length>0)for(let _e=0;_e<R.mipmaps.length;_e++)bt(oe.__webglFramebuffer[ve][_e],k,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,_e);else bt(oe.__webglFramebuffer[ve],k,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);D(R)?L(n.TEXTURE_CUBE_MAP):R.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,R.mipmaps.length-1),t.unbindTexture()}else if(De){for(let ve=0,_e=Se.length;ve<_e;ve++){const G=Se[ve],N=r.get(G);let q=n.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(q=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,N.__webglTexture),ht(q,G),bt(oe.__webglFramebuffer,k,G,n.COLOR_ATTACHMENT0+ve,q,0),D(G)&&L(q)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(ve=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,we.__webglTexture),ht(ve,R),R.mipmaps.length>0)for(let _e=0;_e<R.mipmaps.length;_e++)bt(oe.__webglFramebuffer[_e],k,R,n.COLOR_ATTACHMENT0,ve,_e);else bt(oe.__webglFramebuffer,k,R,n.COLOR_ATTACHMENT0,ve,0);D(R)?L(ve):R.mipmaps.length>0&&n.texParameteri(ve,n.TEXTURE_MAX_LEVEL,R.mipmaps.length-1),t.unbindTexture()}k.depthBuffer&&Qt(k)}function J(k){const R=k.textures;for(let oe=0,we=R.length;oe<we;oe++){const Se=R[oe];if(D(Se)&&Se.mipmapsAutoUpdate===!0){const Le=O(k),De=r.get(Se).__webglTexture;t.bindTexture(Le,De),L(Le),t.unbindTexture()}}}const mn=[];function xt(k){if(k.samples>0){if(Ie(k)===!1){const R=k.textures,oe=k.width,we=k.height;let Se=n.COLOR_BUFFER_BIT;const Le=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=r.get(k),ve=R.length>1;if(ve)for(let G=0;G<R.length;G++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+G,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+G,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),k.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let G=0;G<R.length;G++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(Se|=n.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(Se|=n.STENCIL_BUFFER_BIT)),ve){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[G]);const N=r.get(R[G]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,oe,we,0,0,oe,we,Se,n.NEAREST),f===!0&&(mn.length=0,mn.push(n.COLOR_ATTACHMENT0+G),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&mn.push(Le),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,mn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let G=0;G<R.length;G++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+G,n.RENDERBUFFER,De.__webglColorRenderbuffer[G]);const N=r.get(R[G]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+G,n.TEXTURE_2D,N,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&f){const R=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}}function Ct(k){return Math.min(s.maxSamples,k.samples)}function Ie(k){const R=r.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ft(k){const R=u.render.frame;g.get(k)!==R&&(g.set(k,R),k.update())}function Qe(k,R){const oe=k.colorSpace,we=k.format,Se=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||oe!==Zc&&oe!==La&&(Tt.getTransfer(oe)===Ut?(we!==Mr||Se!==gi)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",oe)),R}function nt(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(h.width=k.naturalWidth||k.width,h.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(h.width=k.displayWidth,h.height=k.displayHeight):(h.width=k.width,h.height=k.height),h}this.allocateTextureUnit=Ae,this.resetTextureUnits=j,this.getTextureUnits=F,this.setTextureUnits=te,this.setTexture2D=Me,this.setTexture2DArray=be,this.setTexture3D=Ce,this.setTextureCube=ye,this.rebindTextures=en,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Ie,this.dispose=se}function iD(n,e){function t(r,s=La){let o;const u=Tt.getTransfer(s);if(r===gi)return n.UNSIGNED_BYTE;if(r===Pm)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Lm)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Nx)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===Ox)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===Dx)return n.BYTE;if(r===Ix)return n.SHORT;if(r===Ll)return n.UNSIGNED_SHORT;if(r===Cm)return n.INT;if(r===Tr)return n.UNSIGNED_INT;if(r===xr)return n.FLOAT;if(r===Rr)return n.HALF_FLOAT;if(r===Ux)return n.ALPHA;if(r===Fx)return n.RGB;if(r===Mr)return n.RGBA;if(r===Oa)return n.DEPTH_COMPONENT;if(r===Ia)return n.DEPTH_STENCIL;if(r===kx)return n.RED;if(r===Dm)return n.RED_INTEGER;if(r===fs)return n.RG;if(r===Im)return n.RG_INTEGER;if(r===Nm)return n.RGBA_INTEGER;if(r===Oc||r===Uc||r===Fc||r===kc)if(u===Ut)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Oc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Uc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Oc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Uc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Np||r===Op||r===Up||r===Fp)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Np)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Op)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Up)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===kp||r===Bp||r===zp||r===Hp||r===Gp||r===Yc||r===Vp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===kp||r===Bp)return u===Ut?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===zp)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(r===Hp)return o.COMPRESSED_R11_EAC;if(r===Gp)return o.COMPRESSED_SIGNED_R11_EAC;if(r===Yc)return o.COMPRESSED_RG11_EAC;if(r===Vp)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Wp||r===$p||r===Xp||r===qp||r===Yp||r===Kp||r===Zp||r===jp||r===Jp||r===Qp||r===em||r===tm||r===nm||r===im)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Wp)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$p)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xp)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qp)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Yp)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kp)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zp)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jp)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jp)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qp)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===em)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===tm)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===nm)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===im)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===rm||r===am||r===sm)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===rm)return u===Ut?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===am)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===sm)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===om||r===lm||r===Kc||r===um)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===om)return o.COMPRESSED_RED_RGTC1_EXT;if(r===lm)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Kc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===um)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===go?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const rD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aD=`
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

}`;class sD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Zx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new hs({vertexShader:rD,fragmentShader:aD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ua(new Wr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oD extends vs{constructor(e,t){super();const r=this;let s=null,o=1,u=null,d="local-floor",f=1,h=null,g=null,m=null,v=null,x=null,E=null;const T=typeof XRWebGLBinding<"u",y=new sD,S={},w=t.getContextAttributes();let D=null,L=null;const O=[],I=[],b=new Et;let C=null,V=null;const U=new Di;U.viewport=new on;const z=new Di;z.viewport=new on;const $=[U,z],Y=new _C;let B=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let Me=O[ae];return Me===void 0&&(Me=new Rh,O[ae]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(ae){let Me=O[ae];return Me===void 0&&(Me=new Rh,O[ae]=Me),Me.getGripSpace()},this.getHand=function(ae){let Me=O[ae];return Me===void 0&&(Me=new Rh,O[ae]=Me),Me.getHandSpace()};function re(ae){const Me=I.indexOf(ae.inputSource);if(Me===-1)return;const be=O[Me];be!==void 0&&(be.update(ae.inputSource,ae.frame,h||u),be.dispatchEvent({type:ae.type,data:ae.inputSource}))}function ne(){s.removeEventListener("select",re),s.removeEventListener("selectstart",re),s.removeEventListener("selectend",re),s.removeEventListener("squeeze",re),s.removeEventListener("squeezestart",re),s.removeEventListener("squeezeend",re),s.removeEventListener("end",ne),s.removeEventListener("inputsourceschange",ee);for(let ae=0;ae<O.length;ae++){const Me=I[ae];Me!==null&&(I[ae]=null,O[ae].disconnect(Me))}B=null,se=null,y.reset();for(const ae in S)delete S[ae];if(e.setRenderTarget(D),x=null,v=null,m=null,s=null,L=null,Ae.stop(),r.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),V!==null){const ae=V.camera;ae.fov=V.fov,ae.zoom=V.zoom,ae.updateProjectionMatrix(),V=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){o=ae,r.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){d=ae,r.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(ae){h=ae},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return m===null&&T&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(ae){if(s=ae,s!==null){if(D=e.getRenderTarget(),s.addEventListener("select",re),s.addEventListener("selectstart",re),s.addEventListener("selectend",re),s.addEventListener("squeeze",re),s.addEventListener("squeezestart",re),s.addEventListener("squeezeend",re),s.addEventListener("end",ne),s.addEventListener("inputsourceschange",ee),w.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ce=null,ye=null;w.depth&&(ye=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=w.stencil?Ia:Oa,Ce=w.stencil?go:Tr);const Be={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:o};m=this.getBinding(),v=m.createProjectionLayer(Be),s.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new wr(v.textureWidth,v.textureHeight,{format:Mr,type:gi,depthTexture:new vo(v.textureWidth,v.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const be={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new wr(x.framebufferWidth,x.framebufferHeight,{format:Mr,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(f),h=null,u=await s.requestReferenceSpace(d),Ae.setContext(s),Ae.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ee(ae){for(let Me=0;Me<ae.removed.length;Me++){const be=ae.removed[Me],Ce=I.indexOf(be);Ce>=0&&(I[Ce]=null,O[Ce].disconnect(be))}for(let Me=0;Me<ae.added.length;Me++){const be=ae.added[Me];let Ce=I.indexOf(be);if(Ce===-1){for(let Be=0;Be<O.length;Be++)if(Be>=I.length){I.push(be),Ce=Be;break}else if(I[Be]===null){I[Be]=be,Ce=Be;break}if(Ce===-1)break}const ye=O[Ce];ye&&ye.connect(be)}}function Z(ae,Me){Me===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(Me.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(s===null)return;let Me=ae.near,be=ae.far;y.texture!==null&&(y.depthNear>0&&(Me=y.depthNear),y.depthFar>0&&(be=y.depthFar)),Y.near=z.near=U.near=Me,Y.far=z.far=U.far=be,(B!==Y.near||se!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),B=Y.near,se=Y.far),Y.layers.mask=ae.layers.mask|6,U.layers.mask=Y.layers.mask&-5,z.layers.mask=Y.layers.mask&-3;const Ce=ae.parent,ye=Y.cameras;Z(Y,Ce);for(let Be=0;Be<ye.length;Be++)Z(ye[Be],Ce);Y.projectionMatrix.copy(U.projectionMatrix),Y.projectionMatrixInverse.copy(U.projectionMatrixInverse),V===null&&ae.isPerspectiveCamera&&(V={camera:ae,fov:ae.fov,zoom:ae.zoom}),j(ae,Y,Ce)};function j(ae,Me,be){be===null?ae.matrix.copy(Me.matrixWorld):(ae.matrix.copy(be.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(Me.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(Me.projectionMatrix),ae.projectionMatrixInverse.copy(Me.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=dm*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(v===null&&x===null))return f},this.setFoveation=function(ae){f=ae,v!==null&&(v.fixedFoveation=ae),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ae)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(ae){return S[ae]};let F=null;function te(ae,Me){if(g=Me.getViewerPose(h||u),E=Me,g!==null){const be=g.views;x!==null&&(e.setRenderTargetFramebuffer(L,x.framebuffer),e.setRenderTarget(L));let Ce=!1;be.length!==Y.cameras.length&&(Y.cameras.length=0,Ce=!0);for(let Ze=0;Ze<be.length;Ze++){const ht=be[Ze];let mt=null;if(x!==null)mt=x.getViewport(ht);else{const $t=m.getViewSubImage(v,ht);mt=$t.viewport,Ze===0&&(e.setRenderTargetTextures(L,$t.colorTexture,$t.depthStencilTexture),e.setRenderTarget(L))}let lt=$[Ze];lt===void 0&&(lt=new Di,lt.layers.enable(Ze),lt.viewport=new on,$[Ze]=lt),lt.matrix.fromArray(ht.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(ht.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(mt.x,mt.y,mt.width,mt.height),Ze===0&&(Y.matrix.copy(lt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ce===!0&&Y.cameras.push(lt)}const ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&T){m=r.getBinding();const Ze=m.getDepthInformation(be[0]);Ze&&Ze.isValid&&Ze.texture&&y.init(Ze,s.renderState)}if(ye&&ye.includes("camera-access")&&T){e.state.unbindTexture(),m=r.getBinding();for(let Ze=0;Ze<be.length;Ze++){const ht=be[Ze].camera;if(ht){let mt=S[ht];mt||(mt=new Zx,S[ht]=mt);const lt=m.getCameraImage(ht);mt.sourceTexture=lt}}}}for(let be=0;be<O.length;be++){const Ce=I[be],ye=O[be];Ce!==null&&ye!==void 0&&ye.update(Ce,Me,h||u)}F&&F(ae,Me),Me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Me}),E=null}const Ae=new tM;Ae.setAnimationLoop(te),this.setAnimationLoop=function(ae){F=ae},this.dispose=function(){}}}const lD=new rn,dM=new dt;dM.set(-1,0,0,0,1,0,0,0,1);function uD(n,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,jx(n)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function s(y,S,w,D,L){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?o(y,S):S.isMeshLambertMaterial?(o(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(o(y,S),m(y,S)):S.isMeshPhongMaterial?(o(y,S),g(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(o(y,S),v(y,S),S.isMeshPhysicalMaterial&&x(y,S,L)):S.isMeshMatcapMaterial?(o(y,S),E(y,S)):S.isMeshDepthMaterial?o(y,S):S.isMeshDistanceMaterial?(o(y,S),T(y,S)):S.isMeshNormalMaterial?o(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?f(y,S,w,D):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function o(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===ii&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===ii&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const w=e.get(S),D=w.envMap,L=w.envMapRotation;D&&(y.envMap.value=D,y.envMapRotation.value.setFromMatrix4(lD.makeRotationFromEuler(L)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(dM),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function f(y,S,w,D){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*w,y.scale.value=D*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function m(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function v(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,w){y.ior.value=S.ior,S.diffuseRoughness>0&&(y.diffuseRoughness.value=S.diffuseRoughness,S.diffuseRoughnessMap&&(y.diffuseRoughnessMap.value=S.diffuseRoughnessMap,t(S.diffuseRoughnessMap,y.diffuseRoughnessMapTransform))),S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ii&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessMinimum,y.iridescenceThicknessMaximum.value=S.iridescenceThicknessMaximum,S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,S){S.matcap&&(y.matcap.value=S.matcap)}function T(y,S){const w=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:s}}function cD(n,e,t,r){let s={},o={};function u(w,D){const L=D.program;r.uniformBlockBinding(w,L,s[w.id])}function d(w,D){let L=s[w.id];L===void 0&&(E(w),L=f(w),s[w.id]=L,w.addEventListener("dispose",y));const O=D.program;r.updateUBOMapping(w,O);const I=e.render.frame;o[w.id]!==I&&(h(w),o[w.id]=I)}function f(w){const D=n.createBuffer(),L=w.__size,O=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,D),n.bufferData(n.UNIFORM_BUFFER,L,O),n.bindBuffer(n.UNIFORM_BUFFER,null),D}function h(w){const D=s[w.id],L=w.uniforms,O=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,D);for(let I=0,b=L.length;I<b;I++){const C=L[I];if(Array.isArray(C))for(let V=0,U=C.length;V<U;V++)g(C[V],I,V,O);else g(C,I,0,O)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(w,D,L,O){if(v(w,D,L,O)===!0){const I=w.__offset,b=w.value;if(Array.isArray(b)){let C=0;for(let V=0;V<b.length;V++){const U=b[V],z=T(U,!0);m(U,w.__data,C),C+=z.storage/Float32Array.BYTES_PER_ELEMENT}}else m(b,w.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,I,w.__data)}}function m(w,D,L){typeof w=="number"||typeof w=="boolean"?D[L]=w:w.isMatrix3?(D[L]=w.elements[0],D[L+1]=w.elements[1],D[L+2]=w.elements[2],D[L+3]=0,D[L+4]=w.elements[3],D[L+5]=w.elements[4],D[L+6]=w.elements[5],D[L+7]=0,D[L+8]=w.elements[6],D[L+9]=w.elements[7],D[L+10]=w.elements[8],D[L+11]=0):ArrayBuffer.isView(w)?D.set(w.subarray(0,D.length-L),L):w.toArray(D,L)}function v(w,D,L,O){const I=w.value,b=D+"_"+L;if(Array.isArray(I)){O[b]===void 0&&(O[b]=[]);const C=O[b];let V=!1;for(let U=0;U<I.length;U++)x(I[U],C,U)===!0&&(V=!0);return V}return x(I,O,b)}function x(w,D,L){if(D[L]===void 0)return typeof w=="number"||typeof w=="boolean"?D[L]=w:ArrayBuffer.isView(w)?D[L]=w.slice():D[L]=w.clone(),!0;{const O=D[L];if(typeof w=="number"||typeof w=="boolean"){if(O!==w)return D[L]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(O.equals(w)===!1)return O.copy(w),!0}}return!1}function E(w){const D=w.uniforms;let L=0;const O=16;for(let b=0,C=D.length;b<C;b++){const V=Array.isArray(D[b])?D[b]:[D[b]];for(let U=0,z=V.length;U<z;U++){const $=V[U],Y=Array.isArray($.value)?$.value:[$.value],B=Array.isArray(D[b])||Array.isArray($.value);let se=L;for(let ne=0,ee=Y.length;ne<ee;ne++){const Z=Y[ne],j=T(Z,B),F=L%O,te=F%j.boundary,Ae=F+te;L+=te,Ae!==0&&O-Ae<j.storage&&(L+=O-Ae),ne===0&&(se=L),L+=j.storage}const re=$.type==="int"?Int32Array:$.type==="uint"?Uint32Array:Float32Array;$.__data=new re((L-se)/Float32Array.BYTES_PER_ELEMENT),$.__offset=se}}const I=L%O;return I>0&&(L+=O-I),w.__size=L,w.__cache={},this}function T(w,D){const L={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(L.boundary=4,L.storage=4):w.isVector2?(L.boundary=8,L.storage=8):w.isVector3||w.isColor?(L.boundary=16,L.storage=12):w.isVector4?(L.boundary=16,L.storage=16):w.isMatrix3?(L.boundary=16,L.storage=48):w.isMatrix4?(L.boundary=16,L.storage=64):w.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(L.boundary=16,L.storage=w.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",w),D===!0&&(L.boundary=16,L.storage=Math.ceil(L.storage/16)*16),L}function y(w){const D=w.target;D.removeEventListener("dispose",y),n.deleteBuffer(s[D.id]),delete s[D.id],delete o[D.id]}function S(){for(const w in s)n.deleteBuffer(s[w]);s={},o={}}return{bind:u,update:d,dispose:S}}const dD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let hr=null;function fD(){return hr===null&&(hr=new rC(dD,16,16,fs,Rr),hr.name="DFG_LUT",hr.minFilter=ti,hr.magFilter=ti,hr.wrapS=$r,hr.wrapT=$r,hr.generateMipmaps=!1,hr.needsUpdate=!0),hr}class hD{constructor(e={}){const{canvas:t=PA(),context:r=null,depth:s=!0,stencil:o=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:v=!1,outputBufferType:x=gi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const T=x,y=new Set([Nm,Im,Dm]),S=new Set([gi,Tr,Ll,go,Pm,Lm]),w=new Uint32Array(4),D=new Int32Array(4),L={textures:[],min:[],max:[],resolution:[]};let O=null,I=null;const b=[],C=[];let V=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let z=!1,$=null,Y=null,B=null,se=null;this._outputColorSpace=ei;let re=0,ne=0,ee=null,Z=-1,j=null;const F=new on,te=new on;let Ae=null;const ae=new Mt(0);let Me=0,be=t.width,Ce=t.height,ye=1,Be=null,ft=null;const Ze=new on(0,0,be,Ce),ht=new on(0,0,be,Ce);let mt=!1;const lt=new Il,$t=new zm;let Bt=!1,jt=!1;const bt=new rn,Jt=new fe,Nt=new on,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let en=!1;function zt(){return ee===null?ye:1}let J=r;function mn(P,X){return t.getContext(P,X)}let xt,Ct,Ie,Ft,Qe,nt,k,R,oe,we,Se,Le,De,ve,_e,G,N,q,W,ue,pe,ge,xe;try{const P={alpha:!0,depth:s,stencil:o,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rm}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),J===null){const X="webgl2";if(J=mn(X,P),J===null)throw mn(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(P){throw t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),It("WebGLRenderer: "+P.message),P}function $e(){xt=new g2(J),xt.init(),pe=new iD(J,xt),Ct=new a2(J,xt,e,pe),Ie=new tD(J,xt),Ct.reversedDepthBuffer&&v&&Ie.buffers.depth.setReversed(!0),Y=J.createFramebuffer(),B=J.createFramebuffer(),se=J.createFramebuffer(),Ft=new y2(J),Qe=new H3,nt=new nD(J,xt,Ie,Qe,Ct,pe,Ft),k=new m2(U),R=new xC(J),ge=new i2(J,R),oe=new v2(J,R,Ft,ge),we=new x2(J,oe,R,ge,Ft),q=new S2(J,Ct,nt),_e=new s2(Qe),Se=new z3(U,k,xt,Ct,ge,_e),Le=new uD(U,Qe),De=new V3,ve=new K3(xt),N=new n2(U,k,Ie,we,E,f),G=new eD(U,we,Ct),xe=new cD(J,Ft,Ct,Ie),W=new r2(J,xt,Ft),ue=new _2(J,xt,Ft),Ft.programs=Se.programs,U.capabilities=Ct,U.extensions=xt,U.properties=Qe,U.renderLists=De,U.shadowMap=G,U.state=Ie,U.info=Ft}T!==gi&&(V=new E2(T,t.width,t.height,d,s,o));const Ee=new oD(U,J);this.xr=Ee,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const P=xt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=xt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(P){P!==void 0&&(ye=P,this.setSize(be,Ce,!1))},this.getSize=function(P){return P.set(be,Ce)},this.setSize=function(P,X,de=!0){if(Ee.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}be=P,Ce=X,t.width=Math.floor(P*ye),t.height=Math.floor(X*ye),de===!0&&(t.style.width=P+"px",t.style.height=X+"px"),V!==null&&V.setSize(t.width,t.height),this.setViewport(0,0,P,X)},this.getDrawingBufferSize=function(P){return P.set(be*ye,Ce*ye).floor()},this.setDrawingBufferSize=function(P,X,de){be=P,Ce=X,ye=de,t.width=Math.floor(P*de),t.height=Math.floor(X*de),this.setViewport(0,0,P,X)},this.setEffects=function(P){if(T===gi){It("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let X=0;X<P.length;X++)if(P[X].isOutputPass===!0){ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(F)},this.getViewport=function(P){return P.copy(Ze)},this.setViewport=function(P,X,de,le){P.isVector4?Ze.set(P.x,P.y,P.z,P.w):Ze.set(P,X,de,le),Ie.viewport(F.copy(Ze).multiplyScalar(zt()).round())},this.getScissor=function(P){return P.copy(ht)},this.setScissor=function(P,X,de,le){P.isVector4?ht.set(P.x,P.y,P.z,P.w):ht.set(P,X,de,le),Ie.scissor(te.copy(ht).multiplyScalar(zt()).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(P){Ie.setScissorTest(mt=P)},this.setOpaqueSort=function(P){Be=P},this.setTransparentSort=function(P){ft=P},this.getClearColor=function(P){return P.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(P=!0,X=!0,de=!0){let le=0;if(P){let ie=!1;if(ee!==null){const Ue=ee.texture.format;ie=y.has(Ue)}if(ie){const Ue=ee.texture.type,We=S.has(Ue),Oe=N.getClearColor(),ke=N.getClearAlpha(),Xe=Oe.r,rt=Oe.g,pt=Oe.b;We?(w[0]=Xe,w[1]=rt,w[2]=pt,w[3]=ke,J.clearBufferuiv(J.COLOR,0,w)):(D[0]=Xe,D[1]=rt,D[2]=pt,D[3]=ke,J.clearBufferiv(J.COLOR,0,D))}else le|=J.COLOR_BUFFER_BIT}X&&(le|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(le|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&J.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),$=P},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),N.dispose(),De.dispose(),ve.dispose(),nt.dispose(),Qe.dispose(),k.dispose(),we.dispose(),oe.dispose(),ge.dispose(),xe.dispose(),Se.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Ba),Ee.removeEventListener("sessionend",Mi),ai.stop()};function He(P){P.preventDefault(),J_("WebGLRenderer: Context Lost."),z=!0}function it(){J_("WebGLRenderer: Context Restored."),z=!1;const P=Ft.autoReset,X=G.enabled,de=G.autoUpdate,le=G.needsUpdate,ie=G.type;$e(),Ft.autoReset=P,G.enabled=X,G.autoUpdate=de,G.needsUpdate=le,G.type=ie}function Fe(P){It("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function vt(P){const X=P.target;X.removeEventListener("dispose",vt),Xt(X)}function Xt(P){Ln(P),Qe.remove(P)}function Ln(P){const X=Qe.get(P).programs;X!==void 0&&(X.forEach(function(de){Se.releaseProgram(de)}),P.isShaderMaterial&&Se.releaseShaderCache(P))}this.renderBufferDirect=function(P,X,de,le,ie,Ue){X===null&&(X=Qt);const We=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Oe=aa(P,X,de,le,ie);Ie.setMaterial(le,We);let ke=de.index,Xe=1;if(le.wireframe===!0){if(ke=oe.getWireframeAttribute(de),ke===void 0)return;Xe=2}const rt=de.drawRange,pt=de.attributes.position;let qe=rt.start*Xe,gt=(rt.start+rt.count)*Xe;Ue!==null&&(qe=Math.max(qe,Ue.start*Xe),gt=Math.min(gt,(Ue.start+Ue.count)*Xe)),ke!==null?(qe=Math.max(qe,0),gt=Math.min(gt,ke.count)):pt!=null&&(qe=Math.max(qe,0),gt=Math.min(gt,pt.count));const kt=gt-qe;if(kt<0||kt===1/0)return;ge.setup(ie,le,Oe,de,ke);let Lt,At=W;if(ke!==null&&(Lt=R.get(ke),At=ue,At.setIndex(Lt)),ie.isMesh)le.wireframe===!0?(Ie.setLineWidth(le.wireframeLinewidth*zt()),At.setMode(J.LINES)):At.setMode(J.TRIANGLES);else if(ie.isLine){let qt=le.linewidth;qt===void 0&&(qt=1),Ie.setLineWidth(qt*zt()),ie.isLineSegments?At.setMode(J.LINES):ie.isLineLoop?At.setMode(J.LINE_LOOP):At.setMode(J.LINE_STRIP)}else ie.isPoints?At.setMode(J.POINTS):ie.isSprite&&At.setMode(J.TRIANGLES);if(ie.isBatchedMesh)if(xt.get("WEBGL_multi_draw"))At.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const qt=ie._multiDrawStarts,Ye=ie._multiDrawCounts,ln=ie._multiDrawCount,je=ke?R.get(ke).bytesPerElement:1,si=Qe.get(le).currentProgram.getUniforms();for(let un=0;un<ln;un++)si.setValue(J,"_gl_DrawID",un),At.render(qt[un]/je,Ye[un])}else if(ie.isInstancedMesh)At.renderInstances(qe,kt,ie.count);else if(de.isInstancedBufferGeometry){const qt=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Ye=Math.min(de.instanceCount,qt);At.renderInstances(qe,kt,Ye)}else At.render(qe,kt)};function ta(P,X,de,le){$!==null&&P.isNodeMaterial&&$.setObject(le,P),Bt===!0&&_e.setState(P,de,!1),P.transparent===!0&&P.side===Qi&&P.forceSinglePass===!1?(P.side=ii,P.needsUpdate=!0,or(P,X,le),P.side=ds,P.needsUpdate=!0,or(P,X,le),P.side=Qi):or(P,X,le)}this.compile=function(P,X,de=null){de===null&&(de=P),$!==null&&$.renderStart(P,X,de),I=ve.get(de),I.init(X),C.push(I),de.traverseVisible(function(ie){ie.isLight&&ie.layers.test(X.layers)&&(I.pushLight(ie),ie.castShadow&&I.pushShadow(ie))}),P!==de&&P.traverseVisible(function(ie){ie.isLight&&ie.layers.test(X.layers)&&(I.pushLight(ie),ie.castShadow&&I.pushShadow(ie))}),I.setupLights(),$!==null&&$.updateLights(I.state.lightsArray),jt=this.localClippingEnabled,Bt=_e.init(this.clippingPlanes,jt),Bt===!0&&_e.setGlobalState(this.clippingPlanes,X),$!==null&&G.render(I.state.shadowsArray,de,X);const le=new Set;return P.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Ue=ie.material;if(Ue)if(Array.isArray(Ue))for(let We=0;We<Ue.length;We++){const Oe=Ue[We];ta(Oe,de,X,ie),le.add(Oe)}else ta(Ue,de,X,ie),le.add(Ue)}),I=C.pop(),$!==null&&$.renderEnd(),le},this.compileAsync=function(P,X,de=null){const le=this.compile(P,X,de);return new Promise(ie=>{function Ue(){if(le.forEach(function(We){const ke=Qe.get(We).currentProgram;(ke===void 0||ke.isReady())&&le.delete(We)}),le.size===0){ie(P);return}setTimeout(Ue,10)}xt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let ar=null;function na(P){ar&&ar(P)}function Ba(){ai.stop()}function Mi(){ai.start()}const ai=new tM;ai.setAnimationLoop(na),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(P){ar=P,Ee.setAnimationLoop(P),P===null?ai.stop():ai.start()},Ee.addEventListener("sessionstart",Ba),Ee.addEventListener("sessionend",Mi),this.render=function(P,X){if(X!==void 0&&X.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;$!==null&&$.renderStart(P,X);const de=Ee.enabled===!0&&Ee.isPresenting===!0,le=V!==null&&(ee===null||de)&&V.begin(U,ee);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(X),X=Ee.getCamera()),P.isScene===!0&&P.onBeforeRender(U,P,X,ee),I=ve.get(P,C.length),I.init(X),I.state.textureUnits=nt.getTextureUnits(),C.push(I),bt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),X.isArrayCamera?$t.setFromArrayCamera(X):lt.setFromProjectionMatrix(bt,tr,X.reversedDepth),jt=this.localClippingEnabled,Bt=_e.init(this.clippingPlanes,jt),O=De.get(P,b.length),O.init(),b.push(O),this.info.render.frame++,Ee.enabled===!0&&Ee.isPresenting===!0){const We=U.xr.getDepthSensingMesh();We!==null&&ia(We,X,-1/0,U.sortObjects)}ia(P,X,0,U.sortObjects),O.finish(),$!==null&&$.updateLights(I.state.lightsArray),U.sortObjects===!0&&O.sort(Be,ft),en=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,en&&N.addToRenderList(O,P),this.info.autoReset===!0&&this.info.reset(),Bt===!0&&_e.beginShadows();const ie=I.state.shadowsArray;if(G.render(ie,P,X),Bt===!0&&_e.endShadows(),(le&&V.hasRenderPass())===!1){const We=O.opaque,Oe=O.transmissive;if(I.setupLights(),X.isArrayCamera){const ke=X.cameras;if(Oe.length>0)for(let Xe=0,rt=ke.length;Xe<rt;Xe++){const pt=ke[Xe];ra(We,Oe,P,pt)}en&&N.render(P);for(let Xe=0,rt=ke.length;Xe<rt;Xe++){const pt=ke[Xe];sr(O,P,pt,pt.viewport)}}else Oe.length>0&&ra(We,Oe,P,X),en&&N.render(P),sr(O,P,X)}ee!==null&&ne===0&&(nt.updateMultisampleRenderTarget(ee),nt.updateRenderTargetMipmap(ee)),le&&V.end(U),P.isScene===!0&&P.onAfterRender(U,P,X),ge.resetDefaultState(),Z=-1,j=null,C.pop(),C.length>0?(I=C[C.length-1],nt.setTextureUnits(I.state.textureUnits),Bt===!0&&_e.setGlobalState(U.clippingPlanes,I.state.camera)):I=null,b.pop(),b.length>0?O=b[b.length-1]:O=null,$!==null&&$.renderEnd()};function ia(P,X,de,le){if(P.visible===!1)return;if(P.layers.test(X.layers)){if(P.isGroup)de=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(X);else if(P.isLight)I.pushLight(P),P.castShadow&&I.pushShadow(P);else if(P.isSprite){const We=X.isArrayCamera?$t:lt;if(!P.frustumCulled||P.intersectsFrustum(We)){le&&Nt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(bt);const Oe=we.update(P),ke=P.material;ke.visible&&O.push(P,Oe,ke,de,Nt.z,null,X)}}else if(P.isMesh||P.isLine||P.isPoints){const We=X.isArrayCamera?$t:lt;if(!P.frustumCulled||P.intersectsFrustum(We)){const Oe=we.update(P),ke=P.material;if(le&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Nt.copy(P.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Nt.copy(Oe.boundingSphere.center)),Nt.applyMatrix4(P.matrixWorld).applyMatrix4(bt)),Array.isArray(ke)){const Xe=Oe.groups;for(let rt=0,pt=Xe.length;rt<pt;rt++){const qe=Xe[rt],gt=ke[qe.materialIndex];gt&&gt.visible&&O.push(P,Oe,gt,de,Nt.z,qe,X)}}else ke.visible&&O.push(P,Oe,ke,de,Nt.z,null,X)}}}const Ue=P.children;for(let We=0,Oe=Ue.length;We<Oe;We++)ia(Ue[We],X,de,le)}function sr(P,X,de,le){const{opaque:ie,transmissive:Ue,transparent:We}=P;I.setupLightsView(de),Bt===!0&&_e.setGlobalState(U.clippingPlanes,de),le&&Ie.viewport(F.copy(le)),ie.length>0&&Ge(ie,X,de),Ue.length>0&&Ge(Ue,X,de),We.length>0&&Ge(We,X,de),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function ra(P,X,de,le){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[le.id]===void 0){const qe=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[le.id]=new wr(1,1,{generateMipmaps:!0,type:qe?Rr:gi,minFilter:Da,samples:Math.max(4,Ct.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Ue=I.state.transmissionRenderTarget[le.id],We=le.viewport||F;Ue.setSize(We.z*U.transmissionResolutionScale,We.w*U.transmissionResolutionScale);const Oe=U.getRenderTarget(),ke=U.getActiveCubeFace(),Xe=U.getActiveMipmapLevel();U.setRenderTarget(Ue),U.getClearColor(ae),Me=U.getClearAlpha(),Me<1&&U.setClearColor(16777215,.5),U.clear(),en&&N.render(de);const rt=U.toneMapping;U.toneMapping=qr;const pt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),I.setupLightsView(le),Bt===!0&&_e.setGlobalState(U.clippingPlanes,le),Ge(P,de,le),nt.updateMultisampleRenderTarget(Ue),nt.updateRenderTargetMipmap(Ue),xt.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let gt=0,kt=X.length;gt<kt;gt++){const Lt=X[gt],{object:At,geometry:qt,material:Ye,group:ln}=Lt;if(Ye.side===Qi&&At.layers.test(le.layers)){const je=Ye.side;Ye.side=ii,Ye.needsUpdate=!0,za(At,de,le,qt,Ye,ln),Ye.side=je,Ye.needsUpdate=!0,qe=!0}}qe===!0&&(nt.updateMultisampleRenderTarget(Ue),nt.updateRenderTargetMipmap(Ue))}U.setRenderTarget(Oe,ke,Xe),U.setClearColor(ae,Me),pt!==void 0&&(le.viewport=pt),U.toneMapping=rt}function Ge(P,X,de){const le=X.isScene===!0?X.overrideMaterial:null;for(let ie=0,Ue=P.length;ie<Ue;ie++){const We=P[ie],{object:Oe,geometry:ke,group:Xe}=We;let rt=We.material;rt.allowOverride===!0&&le!==null&&(rt=le),Oe.layers.test(de.layers)&&za(Oe,X,de,ke,rt,Xe)}}function za(P,X,de,le,ie,Ue){$!==null&&ie.isNodeMaterial&&$.setObject(P,ie),P.onBeforeRender(U,X,de,le,ie,Ue),P.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ie.onBeforeRender(U,X,de,le,P,Ue),ie.transparent===!0&&ie.side===Qi&&ie.forceSinglePass===!1?(ie.side=ii,ie.needsUpdate=!0,U.renderBufferDirect(de,X,le,ie,P,Ue),ie.side=ds,ie.needsUpdate=!0,U.renderBufferDirect(de,X,le,ie,P,Ue),ie.side=Qi):U.renderBufferDirect(de,X,le,ie,P,Ue),P.onAfterRender(U,X,de,le,ie,Ue)}function zn(P){let X=0;for(const de of P)de.texture!==null&&X++;return X}function or(P,X,de){X.isScene!==!0&&(X=Qt);const le=Qe.get(P),ie=I.state.lights,Ue=I.state.shadowsArray,We=ie.state.version,Oe=Se.getParameters(P,ie.state,Ue,X,de,I.state.lightProbeGridArray),ke=Se.getProgramCacheKey(Oe);let Xe=le.programs;le.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?X.environment:null,le.fog=X.fog;const rt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;le.envMap=k.get(P.envMap||le.environment,rt),le.envMapRotation=le.environment!==null&&P.envMap===null?X.environmentRotation:P.envMapRotation,Xe===void 0&&(P.addEventListener("dispose",vt),Xe=new Map,le.programs=Xe,le.programVariants=new Map);let pt=Xe.get(ke);if(pt!==void 0){if(le.currentProgram===pt&&le.lightsStateVersion===We)return Ha(P,Oe),pt}else Oe.uniforms=Se.getUniforms(P),$!==null&&P.isNodeMaterial&&$.build(P,de,Oe),P.onBeforeCompile(Oe,U),pt=Se.acquireProgram(Oe,ke),Xe.set(ke,pt),le.uniforms=Oe.uniforms;const qe=le.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(qe.clippingPlanes=_e.uniform),Ha(P,Oe),le.needsLights=Ar(P),le.lightsStateVersion=We,le.needsLights&&(qe.ambientLightColor.value=ie.state.ambient,qe.lightProbe.value=ie.state.probe,qe.sunLights.value=ie.state.sun,qe.sunLightShadows.value=ie.state.sunShadow,qe.directionalLights.value=ie.state.directional,qe.directionalLightShadows.value=ie.state.directionalShadow,qe.spotLights.value=ie.state.spot,qe.spotLightShadows.value=ie.state.spotShadow,qe.rectAreaLights.value=ie.state.rectArea,qe.ltc_1.value=ie.state.rectAreaLTC1,qe.ltc_2.value=ie.state.rectAreaLTC2,qe.pointLights.value=ie.state.point,qe.pointLightShadows.value=ie.state.pointShadow,qe.hemisphereLights.value=ie.state.hemi,qe.sunShadowMatrix.value=ie.state.sunShadowMatrix,qe.sunShadowCascade.value=ie.state.sunShadowCascade,qe.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,qe.spotLightMatrix.value=ie.state.spotLightMatrix,qe.spotLightMap.value=ie.state.spotLightMap,qe.pointShadowMatrix.value=ie.state.pointShadowMatrix),le.numLightProbeGrids=zn(I.state.lightProbeGridArray),le.currentProgram=pt,le.uniformsList=null,pt}function ys(P,X,de,le,ie){const Ue=Qe.get(P),We=Ue.currentProgram.id+","+le+","+ie;let Oe=Ue.programVariants.get(We);return Oe===void 0?(Oe=or(P,X,de),Ue.programVariants.set(We,Oe)):(Ue.currentProgram=Oe,Ue.uniformsList=null,Ue.outputColorSpace=le,Ue.toneMapping=ie),Oe}function Ht(P){if(P.uniformsList===null){const X=P.currentProgram.getUniforms();P.uniformsList=zc.seqWithValue(X.seq,P.uniforms)}return P.uniformsList}function Ha(P,X){const de=Qe.get(P);de.outputColorSpace=X.outputColorSpace,de.batching=X.batching,de.batchingColor=X.batchingColor,de.instancing=X.instancing,de.instancingColor=X.instancingColor,de.instancingMorph=X.instancingMorph,de.skinning=X.skinning,de.morphTargets=X.morphTargets,de.morphNormals=X.morphNormals,de.morphColors=X.morphColors,de.morphTargetsCount=X.morphTargetsCount,de.numClippingPlanes=X.numClippingPlanes,de.numIntersection=X.numClipIntersection,de.vertexAlphas=X.vertexAlphas,de.vertexTangents=X.vertexTangents,de.toneMapping=X.toneMapping}function aa(P,X,de,le,ie){X.isScene!==!0&&(X=Qt),nt.resetTextureUnits();const Ue=X.fog,We=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?X.environment:null,Oe=ee===null?U.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Tt.workingColorSpace,ke=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,Xe=k.get(le.envMap||We,ke),rt=le.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pt=!!de.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),qe=!!de.morphAttributes.position,gt=!!de.morphAttributes.normal,kt=!!de.morphAttributes.color;let Lt=qr;le.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Lt=U.toneMapping);const At=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,qt=At!==void 0?At.length:0,Ye=Qe.get(le),ln=I.state.lights;if(Bt===!0&&(jt===!0||P!==j)){const wt=P===j&&le.id===Z;_e.setState(le,P,wt)}let je=!1,si=!1;le.version===Ye.__version?Ye.needsLights&&Ye.lightsStateVersion!==ln.state.version||ie.isBatchedMesh&&Ye.batching===!1||!ie.isBatchedMesh&&Ye.batching===!0||ie.isBatchedMesh&&Ye.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&Ye.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&Ye.instancing===!1||!ie.isInstancedMesh&&Ye.instancing===!0||ie.isSkinnedMesh&&Ye.skinning===!1||!ie.isSkinnedMesh&&Ye.skinning===!0||ie.isInstancedMesh&&Ye.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ye.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Ye.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Ye.instancingMorph===!1&&ie.morphTexture!==null||Ye.envMap!==Xe||le.fog===!0&&Ye.fog!==Ue||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==_e.numPlanes||Ye.numIntersection!==_e.numIntersection)||Ye.vertexAlphas!==rt||Ye.vertexTangents!==pt||Ye.morphTargets!==qe||Ye.morphNormals!==gt||Ye.morphColors!==kt||Ye.morphTargetsCount!==qt||Ye.numLightProbeGrids!==zn(I.state.lightProbeGridArray)?je=!0:(Ye.outputColorSpace!==Oe||Ye.toneMapping!==Lt)&&(si=!0):(je=!0,Ye.__version=le.version);let un=Ye.currentProgram;(je===!0||si===!0)&&(un=si===!0?ys(le,X,ie,Oe,Lt):or(le,X,ie),$&&le.isNodeMaterial&&$.onUpdateProgram(le,un,Ye));let Fi=!1,Xn=!1,oi=!1;const yt=un.getUniforms(),tn=Ye.uniforms;if(Ie.useProgram(un.program)&&(Fi=!0,Xn=!0,oi=!0),le.id!==Z&&(Z=le.id,Xn=!0),Fi||j!==P){Ie.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),yt.setValue(J,"projectionMatrix",P.projectionMatrix),yt.setValue(J,"viewMatrix",P.matrixWorldInverse);const Ot=yt.map.cameraPosition;Ot!==void 0&&Ot.setValue(J,Jt.setFromMatrixPosition(P.matrixWorld)),Ct.logarithmicDepthBuffer&&yt.setValue(J,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&yt.setValue(J,"isOrthographic",P.isOrthographicCamera===!0),j!==P&&(j=P,Xn=!0,oi=!0)}if(Ye.needsLights&&(ln.state.sunShadowMap.length>0&&yt.setValue(J,"sunShadowMap",ln.state.sunShadowMap,nt),ln.state.directionalShadowMap.length>0&&yt.setValue(J,"directionalShadowMap",ln.state.directionalShadowMap,nt),ln.state.spotShadowMap.length>0&&yt.setValue(J,"spotShadowMap",ln.state.spotShadowMap,nt),ln.state.pointShadowMap.length>0&&yt.setValue(J,"pointShadowMap",ln.state.pointShadowMap,nt)),ie.isSkinnedMesh){yt.setOptional(J,ie,"bindMatrix"),yt.setOptional(J,ie,"bindMatrixInverse");const wt=ie.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),yt.setValue(J,"boneTexture",wt.boneTexture,nt))}ie.isBatchedMesh&&(yt.setOptional(J,ie,"batchingTexture"),yt.setValue(J,"batchingTexture",ie._matricesTexture,nt),yt.setOptional(J,ie,"batchingIdTexture"),yt.setValue(J,"batchingIdTexture",ie._indirectTexture,nt),yt.setOptional(J,ie,"batchingColorTexture"),ie._colorsTexture!==null&&yt.setValue(J,"batchingColorTexture",ie._colorsTexture,nt));const _n=de.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&q.update(ie,de,un),(Xn||Ye.receiveShadow!==ie.receiveShadow)&&(Ye.receiveShadow=ie.receiveShadow,yt.setValue(J,"receiveShadow",ie.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&X.environment!==null&&(tn.envMapIntensity.value=X.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=fD()),Xn){if(yt.setValue(J,"toneMappingExposure",U.toneMappingExposure),Ye.needsLights&&Ga(tn,oi),Ue&&le.fog===!0&&Le.refreshFogUniforms(tn,Ue),Le.refreshMaterialUniforms(tn,le,ye,Ce,I.state.transmissionRenderTarget[P.id]),Ye.needsLights&&Ye.numLightProbeGrids>0){const wt=L;let Ot=0;for(const fn of I.state.lightProbeGridArray)fn.texture!==null&&(wt.textures[Ot]=fn.texture,wt.min[Ot]=fn.boundingBox.min,wt.max[Ot]=fn.boundingBox.max,wt.resolution[Ot]=fn.resolution,Ot++);for(const fn in wt)wt[fn].length=Ot;tn.probesSH.value=wt.textures,tn.probesMin.value=wt.min,tn.probesMax.value=wt.max,tn.probesResolution.value=wt.resolution}zc.upload(J,Ht(Ye),tn,nt)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(zc.upload(J,Ht(Ye),tn,nt),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&yt.setValue(J,"center",ie.center),yt.setValue(J,"modelViewMatrix",ie.modelViewMatrix),yt.setValue(J,"normalMatrix",ie.normalMatrix),yt.setValue(J,"modelMatrix",ie.matrixWorld),le.uniformsGroups!==void 0){const wt=le.uniformsGroups;for(let Ot=0,fn=wt.length;Ot<fn;Ot++){const ki=wt[Ot];xe.update(ki,un),xe.bind(ki,un)}}return un}function Ga(P,X){P.ambientLightColor.needsUpdate=X,P.lightProbe.needsUpdate=X,P.sunLights.needsUpdate=X,P.sunLightShadows.needsUpdate=X,P.directionalLights.needsUpdate=X,P.directionalLightShadows.needsUpdate=X,P.pointLights.needsUpdate=X,P.pointLightShadows.needsUpdate=X,P.spotLights.needsUpdate=X,P.spotLightShadows.needsUpdate=X,P.rectAreaLights.needsUpdate=X,P.hemisphereLights.needsUpdate=X}function Ar(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(P,X,de){const le=Qe.get(P);le.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),Qe.get(P.texture).__webglTexture=X,Qe.get(P.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:de,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,X){const de=Qe.get(P);de.__webglFramebuffer=X,de.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(P,X=0,de=0){ee=P,re=X,ne=de;let le=null,ie=!1,Ue=!1;if(P){const Oe=Qe.get(P);if(Oe.__useDefaultFramebuffer!==void 0){Ie.bindFramebuffer(J.FRAMEBUFFER,Oe.__webglFramebuffer),F.copy(P.viewport),te.copy(P.scissor),Ae=P.scissorTest,Ie.viewport(F),Ie.scissor(te),Ie.setScissorTest(Ae),Z=-1;return}else if(Oe.__webglFramebuffer===void 0)nt.setupRenderTarget(P);else if(Oe.__hasExternalTextures)nt.rebindTextures(P,Qe.get(P.texture).__webglTexture,Qe.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const rt=P.depthTexture;if(Oe.__boundDepthTexture!==rt){if(rt!==null&&Qe.has(rt)&&(P.width!==rt.image.width||P.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(P)}}const ke=P.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ue=!0);const Xe=Qe.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Xe[X])?le=Xe[X][de]:le=Xe[X],ie=!0):P.samples>0&&nt.useMultisampledRTT(P)===!1?le=Qe.get(P).__webglMultisampledFramebuffer:Array.isArray(Xe)?le=Xe[de]:le=Xe,F.copy(P.viewport),te.copy(P.scissor),Ae=P.scissorTest}else F.copy(Ze).multiplyScalar(ye).floor(),te.copy(ht).multiplyScalar(ye).floor(),Ae=mt;if(de!==0&&(le=Y),Ie.bindFramebuffer(J.FRAMEBUFFER,le)&&Ie.drawBuffers(P,le),Ie.viewport(F),Ie.scissor(te),Ie.setScissorTest(Ae),ie){const Oe=Qe.get(P.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+X,Oe.__webglTexture,de)}else if(Ue){const Oe=X;for(let ke=0;ke<P.textures.length;ke++){const Xe=Qe.get(P.textures[ke]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+ke,Xe.__webglTexture,de,Oe)}}else if(P!==null&&de!==0){const Oe=Qe.get(P.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Oe.__webglTexture,de)}Z=-1};function Va(P){const X=Qe.get(P);return(X.__readFormat!==P.format||X.__readType!==P.type)&&(X.__readFormat=P.format,X.__readType=P.type,X.__formatReadable=Ct.textureFormatReadable(P.format),X.__typeReadable=Ct.textureTypeReadable(P.type)),X}this.readRenderTargetPixels=function(P,X,de,le,ie,Ue,We,Oe=0){if(!(P&&P.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Qe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&We!==void 0&&(ke=ke[We],Array.isArray(ke)&&(ke=ke[0])),ke){Ie.bindFramebuffer(J.FRAMEBUFFER,ke);try{const Xe=P.textures[Oe],rt=Xe.format,pt=Xe.type;P.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Oe);const qe=Va(Xe);if(qe.__formatReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=P.width-le&&de>=0&&de<=P.height-ie&&J.readPixels(X,de,le,ie,pe.convert(rt),pe.convert(pt),Ue)}finally{const Xe=ee!==null?Qe.get(ee).__webglFramebuffer:null;Ie.bindFramebuffer(J.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(P,X,de,le,ie,Ue,We,Oe=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=Qe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&We!==void 0&&(ke=ke[We],Array.isArray(ke)&&(ke=ke[0])),ke)if(X>=0&&X<=P.width-le&&de>=0&&de<=P.height-ie){Ie.bindFramebuffer(J.FRAMEBUFFER,ke);const Xe=P.textures[Oe],rt=Xe.format,pt=Xe.type;P.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Oe);const qe=Va(Xe);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,gt),J.bufferData(J.PIXEL_PACK_BUFFER,Ue.byteLength,J.STREAM_READ),J.readPixels(X,de,le,ie,pe.convert(rt),pe.convert(pt),0),J.bindBuffer(J.PIXEL_PACK_BUFFER,null);const kt=ee!==null?Qe.get(ee).__webglFramebuffer:null;Ie.bindFramebuffer(J.FRAMEBUFFER,kt);const Lt=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await LA(J,Lt,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,gt),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,Ue),J.bindBuffer(J.PIXEL_PACK_BUFFER,null),J.deleteBuffer(gt),J.deleteSync(Lt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,X=null,de=0){const le=Math.pow(2,-de),ie=Math.floor(P.image.width*le),Ue=Math.floor(P.image.height*le),We=X!==null?X.x:0,Oe=X!==null?X.y:0;nt.setTexture2D(P,0),J.copyTexSubImage2D(J.TEXTURE_2D,de,0,0,We,Oe,ie,Ue),Ie.unbindTexture()},this.copyTextureToTexture=function(P,X,de=null,le=null,ie=0,Ue=0){let We,Oe,ke,Xe,rt,pt,qe,gt,kt;const Lt=P.isCompressedTexture?P.mipmaps[Ue]:P.image;if(de!==null)We=de.max.x-de.min.x,Oe=de.max.y-de.min.y,ke=de.isBox3?de.max.z-de.min.z:1,Xe=de.min.x,rt=de.min.y,pt=de.isBox3?de.min.z:0;else{const yt=Math.pow(2,-ie);We=Math.floor(Lt.width*yt),Oe=Math.floor(Lt.height*yt),P.isDataArrayTexture?ke=Lt.depth:P.isData3DTexture?ke=Math.floor(Lt.depth*yt):ke=1,Xe=0,rt=0,pt=0}le!==null?(qe=le.x,gt=le.y,kt=le.z):(qe=0,gt=0,kt=0);const At=pe.convert(X.format),qt=pe.convert(X.type);let Ye;X.isData3DTexture?(nt.setTexture3D(X,0),Ye=J.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(nt.setTexture2DArray(X,0),Ye=J.TEXTURE_2D_ARRAY):(nt.setTexture2D(X,0),Ye=J.TEXTURE_2D),Ie.activeTexture(J.TEXTURE0),Ie.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,X.flipY),Ie.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),Ie.pixelStorei(J.UNPACK_ALIGNMENT,X.unpackAlignment);const ln=Ie.getParameter(J.UNPACK_ROW_LENGTH),je=Ie.getParameter(J.UNPACK_IMAGE_HEIGHT),si=Ie.getParameter(J.UNPACK_SKIP_PIXELS),un=Ie.getParameter(J.UNPACK_SKIP_ROWS),Fi=Ie.getParameter(J.UNPACK_SKIP_IMAGES);Ie.pixelStorei(J.UNPACK_ROW_LENGTH,Lt.width),Ie.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Lt.height),Ie.pixelStorei(J.UNPACK_SKIP_PIXELS,Xe),Ie.pixelStorei(J.UNPACK_SKIP_ROWS,rt),Ie.pixelStorei(J.UNPACK_SKIP_IMAGES,pt);const Xn=P.isDataArrayTexture||P.isData3DTexture,oi=X.isDataArrayTexture||X.isData3DTexture;if(P.isDepthTexture){const yt=Qe.get(P),tn=Qe.get(X),_n=Qe.get(yt.__renderTarget),wt=Qe.get(tn.__renderTarget);Ie.bindFramebuffer(J.READ_FRAMEBUFFER,_n.__webglFramebuffer),Ie.bindFramebuffer(J.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Ot=0;Ot<ke;Ot++)Xn&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Qe.get(P).__webglTexture,ie,pt+Ot),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Qe.get(X).__webglTexture,Ue,kt+Ot)),J.blitFramebuffer(Xe,rt,Xe+We,rt+Oe,qe,gt,qe+We,gt+Oe,J.DEPTH_BUFFER_BIT,J.NEAREST);Ie.bindFramebuffer(J.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(ie!==0||P.isRenderTargetTexture||Qe.has(P)){const yt=Qe.get(P),tn=Qe.get(X);Ie.bindFramebuffer(J.READ_FRAMEBUFFER,B),Ie.bindFramebuffer(J.DRAW_FRAMEBUFFER,se);for(let _n=0;_n<ke;_n++)Xn?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,yt.__webglTexture,ie,pt+_n):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,yt.__webglTexture,ie),oi?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,tn.__webglTexture,Ue,kt+_n):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,tn.__webglTexture,Ue),ie!==0?J.blitFramebuffer(Xe,rt,Xe+We,rt+Oe,qe,gt,qe+We,gt+Oe,J.COLOR_BUFFER_BIT,J.NEAREST):oi?J.copyTexSubImage3D(Ye,Ue,qe,gt,kt+_n,Xe,rt,We,Oe):J.copyTexSubImage2D(Ye,Ue,qe,gt,Xe,rt,We,Oe);Ie.bindFramebuffer(J.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else oi?P.isDataTexture||P.isData3DTexture?J.texSubImage3D(Ye,Ue,qe,gt,kt,We,Oe,ke,At,qt,Lt.data):X.isCompressedArrayTexture?J.compressedTexSubImage3D(Ye,Ue,qe,gt,kt,We,Oe,ke,At,Lt.data):J.texSubImage3D(Ye,Ue,qe,gt,kt,We,Oe,ke,At,qt,Lt):P.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,Ue,qe,gt,We,Oe,At,qt,Lt.data):P.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,Ue,qe,gt,Lt.width,Lt.height,At,Lt.data):J.texSubImage2D(J.TEXTURE_2D,Ue,qe,gt,We,Oe,At,qt,Lt);Ie.pixelStorei(J.UNPACK_ROW_LENGTH,ln),Ie.pixelStorei(J.UNPACK_IMAGE_HEIGHT,je),Ie.pixelStorei(J.UNPACK_SKIP_PIXELS,si),Ie.pixelStorei(J.UNPACK_SKIP_ROWS,un),Ie.pixelStorei(J.UNPACK_SKIP_IMAGES,Fi),Ue===0&&X.generateMipmaps===!0&&X.mipmapsAutoUpdate===!0&&J.generateMipmap(Ye),Ie.unbindTexture()},this.initRenderTarget=function(P){Qe.get(P).__webglFramebuffer===void 0&&nt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?nt.setTextureCube(P,0):P.isData3DTexture?nt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?nt.setTexture2DArray(P,0):nt.setTexture2D(P,0),Ie.unbindTexture()},this.resetState=function(){re=0,ne=0,ee=null,Ie.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}const dl=new fe;function Pi(n,e,t,r,s,o){const u=2*Math.PI*s/4,d=Math.max(o-2*s,0),f=Math.PI/4;dl.copy(e),dl[r]=0,dl.normalize();const h=.5*u/(u+d),g=1-dl.angleTo(n)/f;return Math.sign(dl[t])===1?g*h:d/(u+d)+h+h*(1-g)}class Wm extends xo{constructor(e=1,t=1,r=1,s=2,o=.1){const u=s*2+1;if(o=Math.min(e/2,t/2,r/2,o),super(1,1,1,u,u,u),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:r,segments:s,radius:o},u===1)return;const d=this.toNonIndexed();this.index=null,this.attributes.position=d.attributes.position,this.attributes.normal=d.attributes.normal,this.attributes.uv=d.attributes.uv;const f=new fe,h=new fe,g=new fe(e,t,r).divideScalar(2).subScalar(o),m=this.attributes.position.array,v=this.attributes.normal.array,x=this.attributes.uv.array,E=m.length/6,T=new fe,y=.5/u;for(let S=0,w=0;S<m.length;S+=3,w+=2)switch(f.fromArray(m,S),h.copy(f),h.x-=Math.sign(h.x)*y,h.y-=Math.sign(h.y)*y,h.z-=Math.sign(h.z)*y,h.normalize(),m[S+0]=g.x*Math.sign(f.x)+h.x*o,m[S+1]=g.y*Math.sign(f.y)+h.y*o,m[S+2]=g.z*Math.sign(f.z)+h.z*o,v[S+0]=h.x,v[S+1]=h.y,v[S+2]=h.z,Math.floor(S/E)){case 0:T.set(1,0,0),x[w+0]=Pi(T,h,"z","y",o,r),x[w+1]=1-Pi(T,h,"y","z",o,t);break;case 1:T.set(-1,0,0),x[w+0]=1-Pi(T,h,"z","y",o,r),x[w+1]=1-Pi(T,h,"y","z",o,t);break;case 2:T.set(0,1,0),x[w+0]=1-Pi(T,h,"x","z",o,e),x[w+1]=Pi(T,h,"z","x",o,r);break;case 3:T.set(0,-1,0),x[w+0]=1-Pi(T,h,"x","z",o,e),x[w+1]=1-Pi(T,h,"z","x",o,r);break;case 4:T.set(0,0,1),x[w+0]=1-Pi(T,h,"x","y",o,e),x[w+1]=1-Pi(T,h,"y","x",o,t);break;case 5:T.set(0,0,-1),x[w+0]=Pi(T,h,"x","y",o,e),x[w+1]=1-Pi(T,h,"y","x",o,t);break}}static fromJSON(e){return new Wm(e.width,e.height,e.depth,e.segments,e.radius)}}let Ac,Li,Vr,$h,Wy,$y;const Xh=new Set,no=new Set;let Xy=0;function pD(n,e,t){Li={game:n,viewer:e,replaying:t}}async function mD(n){return Vr?Vr.reveal(n):!1}const qh=new Map;function gD(n){return qh.has(n)||qh.set(n,new Promise(e=>{const t=new Image;t.onload=()=>e(t),t.onerror=()=>e(null),t.src=n})),qh.get(n)}function vD(){var Le,De,ve,_e;const n=document.querySelector(".match-mode:not(.lobby-mode) .rows"),e=Li?JSON.stringify({game:Li.game,viewer:Li.viewer,replaying:Li.replaying}):null;if(n&&e===$y&&Vr){(Le=Vr.updateSelection)==null||Le.call(Vr);return}$y=e;const t=++Xy,r=Ac;if(Ac=null,Vr=null,!n){r==null||r(),no.forEach(G=>G()),no.clear();return}r&&no.add(r);const s=document.querySelector(".page-shell"),o=document.createElement("canvas");o.className="clubhouse-scene",o.style.opacity="0",o.style.pointerEvents="none",s.prepend(o);let u;try{u=new hD({canvas:o,antialias:!0})}catch{o.remove(),r&&(Ac=r,no.delete(r));return}s.classList.add("clubhouse-ready");const d=document.createElement("div");d.className="clubhouse-score-strip",d.style.opacity="0",d.setAttribute("aria-label","Player scores"),document.querySelectorAll(".header-player").forEach(G=>{var q,W;const N=document.createElement("span");N.textContent=(((q=G.querySelector(".header-player-copy b"))==null?void 0:q.textContent)||"Player")+" · "+(((W=G.querySelector(".header-player-score strong"))==null?void 0:W.textContent)||"0")+" bulls",d.append(N)}),s.append(d),u.setPixelRatio(Math.min(Math.max(devicePixelRatio,2),2.5)),u.shadowMap.enabled=!0,u.shadowMap.type=xx,u.toneMapping=Am,u.toneMappingExposure=1.3;const f=new ZA;f.background=new Mt("#31273c"),f.fog=new km("#31273c",20,40);const h=new Di(38,1,.1,60);h.position.set(0,11.8,16.5),h.lookAt(0,.65,-.8);const g=[],m=[],v=[],x=[],E=[],T=[];let y=!1,S;const w=(Li==null?void 0:Li.game.round)+":"+(Li==null?void 0:Li.game.turn);Wy!==w&&(Wy=w,Xh.clear());const D=Li,L=(D==null?void 0:D.game.players.filter(G=>G.id!==D.viewer))||[],O=new Map(L.map((G,N)=>[G.id,L.length===1?0:(N/(L.length-1)-.5)*4.4])),I=(D==null?void 0:D.game.phase)==="row-choice"?D.game.pendingRowChoice:null,b=!!I&&I.playerId===D.viewer;o.dataset.rowChoice=b?"own":I?"waiting":"none",o.dataset.opponents=String(L.length);const C=document.createElement("div");C.className="clubhouse-player-labels",C.style.opacity="0",C.setAttribute("aria-label","Opponent names"),s.append(C);const V=.38+Math.min(1.3,3.6/Math.max(1,L.length))*2.65,U=L.map(G=>{const N=document.createElement("span");return N.className="clubhouse-player-label",N.textContent=G.name+((I==null?void 0:I.playerId)===G.id?" · Picking a row…":""),N.classList.toggle("is-picking",(I==null?void 0:I.playerId)===G.id),N.title=N.textContent,C.append(N),{el:N,position:new fe(O.get(G.id),V,-4.05)}}),z=(D!=null&&D.replaying&&$h?$h:(D==null?void 0:D.game.rows)||[]).map(G=>G.slice());D!=null&&D.replaying||($h=z.map(G=>G.slice()));function $(G,N){return new Promise(q=>{x.push({start:performance.now(),duration:G,update:N,resolve:q})})}const Y=(G,N=.65)=>{const q=new dC({color:G,roughness:N});return g.push(q),q},B=Y("#92582f",.4),se=Y("#c48c50",.4),re=Y("#233d72",.98),ne=Y("#f8e9cc"),ee=Y("#251d26"),Z=Y("#e3ad4d",.3);function j(G,N,q=f){g.push(G);const W=new Ua(G,N);return W.castShadow=W.receiveShadow=!0,q.add(W),W}function F(G,N,q,W,ue,pe,ge,xe=f,$e=.06){const Ee=j(new Wm(G,N,q,3,Math.min($e,G/2,N/2,q/2)),W,xe);return Ee.position.set(ue,pe,ge),Ee}function te(G,N,q,W,ue,pe,ge,xe){const $e=j(new Hm(1,24,16),ge,xe);return $e.position.set(G,N,q),$e.scale.set(W,ue,pe),$e}f.add(new pC("#ffe6bc","#364a80",2.2));const Ae=new vC("#ffd1a1",3);Ae.position.set(-4,9,5),Ae.castShadow=!0,Ae.shadow.mapSize.set(1024,1024),Object.assign(Ae.shadow.camera,{left:-7,right:7,top:8,bottom:-8}),Ae.shadow.bias=-.001,f.add(Ae);const ae=new yy("#8da3ff",22,20);ae.position.set(4,5,-4),f.add(ae),F(24,.2,25,B,0,-.9,-2),F(22,10,.3,Y("#513a4d"),0,3.5,-7.8);for(let G=-10;G<=10;G+=1.5)F(.07,9,.12,B,G,3.5,-7.55);for(const G of[-1,1]){F(2.4,5,.65,B,G*5.7,1.7,-6.8);for(let W=0;W<4.5;W+=1.15){F(2.35,.12,.85,se,G*5.7,W,-6.5);for(let ue=0;ue<6;ue++)F(.22,.55+ue%3*.12,.35,Y(["#8b5879","#728a78","#c09060"][ue%3]),G*5.7-.8+ue*.3,W+.4,-6.4)}j(new Qc(.7,.5,32,1,!0),Z).position.set(G*3.5,4.6,-5),F(.04,2,.04,Z,G*3.5,5.7,-5);const q=new yy("#ffc16e",18,9);q.position.set(G*3.5,4.3,-5),f.add(q)}F(2.5,1.8,.1,se,0,3.6,-7.5),F(2.25,1.55,.1,Y("#744656"),0,3.6,-7.4);const Me=document.createElement("canvas");Me.width=512,Me.height=256;const be=Me.getContext("2d");be.fillStyle="#ffe7ac",be.textAlign="center",be.font="bold 100px Georgia",be.fillText("Take 5",256,150);const Ce=new ul(Me);g.push(Ce);const ye=new so({map:Ce,transparent:!0});g.push(ye),j(new Wr(2.2,1.1),ye).position.set(0,3.65,-7.3);function ft(G,N,q,W){const ue=j(new Nl(G,G,q,80),W);return ue.scale.z=1.16,ue.position.y=N,ue}ft(4.1,-.14,.42,B),ft(4.02,.07,.12,se),ft(3.73,.14,.08,re);const Ze=document.createElement("canvas");Ze.width=Ze.height=128;const ht=Ze.getContext("2d");ht.fillStyle="#7587a2",ht.fillRect(0,0,128,128);for(let G=0;G<128;G+=3)ht.fillStyle=G%2?"#637594":"#8999b0",ht.fillRect(G,0,1,128),ht.fillRect(0,G,128,1);const mt=new ul(Ze);mt.wrapS=mt.wrapT=qc,mt.repeat.set(18,18),g.push(mt),re.bumpMap=mt,re.bumpScale=.02;function lt(G,N){const q=new lo;q.position.set(N,.2,-4.15),q.scale.setScalar(Math.min(1.3,3.6/Math.max(1,L.length))),f.add(q);const W=Y(G==="fox"?"#e88b34":G==="bear"?"#a7754b":"#7eae43"),ue=Y(G==="fox"?"#ead3a8":G==="bear"?"#4f5683":"#c89e4f");if(F(1.65,1.9,.6,Y("#773d47"),0,.7,-.5,q,.25),te(0,.85,0,.64,.72,.45,ue,q),te(0,1.85,.04,.67,.63,.52,W,q),G==="fox")for(const pe of[-1,1]){const ge=j(new Qc(.25,.64,3),W,q);ge.position.set(pe*.47,2.43,0),ge.rotation.z=-pe*.22,te(pe*.24,1.64,.42,.33,.22,.16,ne,q)}if(G==="bear")for(const pe of[-1,1])te(pe*.53,2.29,0,.24,.25,.19,W,q),te(pe*.53,2.29,.13,.12,.13,.06,ne,q);if(G==="frog")for(const pe of[-1,1])te(pe*.33,2.23,.25,.29,.3,.25,W,q);for(const pe of[-1,1])te(pe*.25,1.95,.49,.135,.16,.055,ne,q),te(pe*.25,1.94,.54,.065,.085,.025,ee,q),te(pe*.27,1.98,.565,.024,.03,.012,ne,q),te(pe*.48,.35,.55,.23,.16,.28,W,q);te(0,1.61,.5,.28,.18,.1,G==="frog"?W:ne,q),te(0,1.7,.61,.11,.075,.065,ee,q),te(0,1.48,.56,.12,.065,.035,ee,q),v.push(q)}L.forEach((G,N)=>lt(["fox","bear","frog"][N%3],O.get(G.id)));function $t(G,N,q,W){const ue=document.createElement("canvas");ue.width=ue.height=128;const pe=ue.getContext("2d");pe.fillStyle="#322039",pe.font="bold 70px Arial",pe.textAlign="center",pe.fillText(G,64,90);const ge=new ul(ue);g.push(ge);const xe=new so({map:ge,transparent:!0});g.push(xe);const $e=j(new Wr(.4,.4),xe);$e.position.set(N,q,W),$e.rotation.x=-Math.PI/2}async function Bt(G,N){const q=Number(G.dataset.cardNumber||G.dataset.card),W=q===55?7:q%11===0?5:q%10===0?3:q%5===0?2:1,ue={1:"one-bull",2:"two-bulls",3:"three-bulls",5:"five-bulls",7:"seven-bulls"}[W],pe=await gD(new URL("assets/cards/card-"+ue+".png",document.baseURI).href);if(y||!pe)return;const ge=document.createElement("canvas");ge.width=1024,ge.height=1536;const xe=ge.getContext("2d");xe.imageSmoothingEnabled=!0,xe.imageSmoothingQuality="high",xe.fillStyle="#fffdf8",xe.beginPath(),xe.roundRect(0,0,1024,1536,48),xe.fill(),xe.save(),xe.beginPath(),xe.roundRect(0,0,1024,1536,48),xe.clip(),xe.drawImage(pe,pe.width*.065,pe.height*.045,pe.width*.87,pe.height*.91,0,0,1024,1536),xe.restore();const $e=String(q);xe.textAlign="center",xe.textBaseline="middle",xe.font="900 "+($e.length===3?440:530)+"px Arial, sans-serif",xe.lineJoin="round",xe.strokeStyle="#fffdf8",xe.lineWidth=30,xe.strokeText($e,512,795),xe.fillStyle="#101622",xe.fillText($e,512,795);const Ee={1:"#244d9b",2:"#158145",3:"#087eac",5:"#cf3032",7:"#b67e12"}[W];for(const vt of[!1,!0])xe.save(),vt&&(xe.translate(1024,1536),xe.rotate(Math.PI)),xe.beginPath(),xe.roundRect(18,18,988,1508,40),xe.clip(),xe.fillStyle=Ee,xe.beginPath(),xe.moveTo(18,18),xe.lineTo(1006,18),xe.lineTo(1006,165),xe.quadraticCurveTo(720,130,18,238),xe.closePath(),xe.fill(),xe.textAlign="left",xe.textBaseline="middle",xe.font="900 "+($e.length===3?154:190)+"px Arial, sans-serif",xe.fillStyle="#ffffff",xe.fillText($e,42,118),xe.restore();const He=new ul(ge);He.colorSpace=ei,He.anisotropy=u.capabilities.getMaxAnisotropy(),g.push(He);const it=new so({map:He,side:Qi,toneMapped:!1,fog:!1,transparent:!0,alphaTest:.1});g.push(it);const Fe=j(new Wr(.68,1.02),it,N);Fe.position.z=.075,Fe.castShadow=!1,o.dataset.textures=String(Number(o.dataset.textures||0)+1)}function jt(G,N,q,W,ue=0,pe=!1){const ge=new lo;return f.add(ge),ge.position.set(N,q,W),ge.rotation.x=-1.35,ge.position.y+=.1,ge.rotation.z=ue,F(.7,1.04,.065,ne,0,0,0,ge,.045),E.push(Bt(G,ge)),pe&&(ge.rotation.x=-.72,G.classList.contains("selected")&&(ge.position.y+=.3,ge.position.z-=.2,F(.76,1.1,.025,Z,0,0,-.025,ge,.045)),ge.userData.control=G,m.push(ge)),ge}const bt=[[],[],[],[]],Jt=document.createElement("div");Jt.className="clubhouse-board-choices",s.append(Jt),Jt.style.opacity="0";const Nt=[];if(I){const G=document.createElement("div");G.className="clubhouse-choice-notice",G.textContent=b?"Your "+I.card+" is too low · Tap a row to collect":(((De=D.game.players.find(N=>N.id===I.playerId))==null?void 0:De.name)||"Player")+" is picking a row…",Jt.append(G)}function Qt(G){const N=document.createElement("span");return N.dataset.card=String(G),N}for(let G=0;G<4;G++){const N=-2.2+G*1.12;F(6.25,.012,.025,Y("#67799b"),0,.195,N+.57),$t(String(G+1),-3.1,.21,N),(ve=z[G])==null||ve.forEach((ue,pe)=>bt[G].push(jt(Qt(ue),-2.35+pe*.81,.24,N))),j(new Nl(.24,.24,.07,32),Z).position.set(2.9,.24,N);const W=(z[G]||[]).reduce((ue,pe)=>ue+(pe===55?7:pe%11===0?5:pe%10===0?3:pe%5===0?2:1),0);if($t(String(W),2.9,.285,N),b){const ue=new so({color:"#ffd778",transparent:!0,opacity:.19,depthWrite:!1,side:Qi});g.push(ue);const pe=j(new Wr(6.4,1.03),ue);pe.rotation.x=-Math.PI/2,pe.position.set(0,.21,N),pe.userData.rowIndex=G,T.push(pe);const ge=document.createElement("button");ge.type="button",ge.className="clubhouse-board-choice",ge.textContent=String(W),ge.setAttribute("aria-label","Collect row "+(G+1)+", "+W+" bullheads"),ge.dataset.boardRow=String(G),ge.addEventListener("click",()=>{var xe;return(xe=document.querySelector('[data-row-choice="'+G+'"]'))==null?void 0:xe.click()}),Jt.append(ge),Nt.push({button:ge,position:new fe(2.9,.3,N)})}}const en=document.createElement("canvas");en.width=256,en.height=384;const zt=en.getContext("2d");zt.fillStyle="#264c88",zt.fillRect(0,0,256,384),zt.strokeStyle="#e6c07b",zt.lineWidth=10,zt.strokeRect(12,12,232,360),zt.fillStyle="#f5db9d",zt.font="bold 62px Georgia",zt.textAlign="center",zt.fillText("Take 5",128,208);const J=new ul(en);J.colorSpace=ei,g.push(J);const mn=new so({map:J,toneMapped:!1});g.push(mn);const xt=new Map;function Ct(G,N,q=!0){if(xt.has(G))return xt.get(G);const W=G===(D==null?void 0:D.viewer),ue=jt(Qt(N||1),W?0:O.get(G)||0,W?.42:V+.9,W?2.8:-4.05);ue.rotation.x=W?-1.35:0,W||ue.quaternion.copy(h.quaternion);const pe=ue.quaternion.clone(),ge=j(new Wr(.68,1.02),mn,ue);if(ge.position.z=-.075,ge.rotation.y=Math.PI,ue.userData.base=pe,ue.userData.back=ge,ue.userData.playerId=G,q&&ue.quaternion.multiply(new Yr().setFromAxisAngle(new fe(0,1,0),Math.PI)),xt.set(G,ue),o.dataset.stagePlayers=JSON.stringify([...xt.keys()]),!(D!=null&&D.replaying)&&!Xh.has(G)){Xh.add(G);const xe=ue.position.clone();ue.position.y-=W?.08:1,ue.scale.setScalar(.8),$(360,$e=>{const Ee=1-Math.pow(1-$e,3);ue.position.y=xe.y-(W?.08:1)*(1-Ee),ue.scale.setScalar(.8+.2*Ee)})}return ue}if(!(D!=null&&D.replaying)){const G=new Set((D==null?void 0:D.game.readyPlayers)||Object.keys((D==null?void 0:D.game.selections)||{}));for(const N of G)Ct(N,(_e=D.game.selections)==null?void 0:_e[N],!I);o.dataset.ready=String(G.size)}Vr={async reveal(G){o.dataset.reveal="flipping",window.dispatchEvent(new CustomEvent("clubhouse-reveal",{detail:{phase:"flipping"}}));const N=G.slice().sort((W,ue)=>W.card-ue.card),q=N.map(W=>Ct(W.playerId,W.card,!0));await Promise.all(q.map(W=>$(430,ue=>W.quaternion.copy(W.userData.base).multiply(new Yr().setFromAxisAngle(new fe(0,1,0),Math.PI*(1-ue))))));for(const W of N){if(y)return!0;o.dataset.reveal="moving-"+W.card,window.dispatchEvent(new CustomEvent("clubhouse-reveal",{detail:{phase:"moving",card:W.card,playerId:W.playerId}}));const ue=xt.get(W.playerId);if(W.tookRow){const Ee=bt[W.rowIndex];await $(260,He=>Ee.forEach(it=>{it.position.y=.34+He*.4,it.scale.setScalar(1-He*.85)})),Ee.forEach(He=>He.visible=!1),bt[W.rowIndex]=[]}const pe=ue.position.clone(),ge=ue.quaternion.clone(),xe=new fe(-2.35+bt[W.rowIndex].length*.81,.34,-2.2+W.rowIndex*1.12),$e=new Yr().setFromEuler(new Zr(-1.35,0,0));await $(620,Ee=>{const He=Ee*Ee*(3-2*Ee);ue.position.lerpVectors(pe,xe,He),ue.position.y+=Math.sin(Math.PI*Ee)*.55,ue.quaternion.slerpQuaternions(ge,$e,He)}),bt[W.rowIndex].push(ue),await $(100,()=>{})}return o.dataset.reveal="complete",window.dispatchEvent(new CustomEvent("clubhouse-reveal",{detail:{phase:"complete"}})),!0}},f.add(h);const Ie=[...document.querySelectorAll(".hand-card")];Ie.forEach((G,N)=>{const q=(N-(Ie.length-1)/2)*.16,W=-1.32-Math.abs(q)*.1,ue=-5.25+N*.04,pe=jt(G,0,0,0,-q*.25,!0);h.add(pe);const ge=G.classList.contains("selected");pe.position.set(q,W+(ge?.22:0),ge?-4.65:ue),pe.rotation.x=0,pe.scale.setScalar(.52),pe.userData.restY=W,pe.userData.restZ=ue,pe.userData.value=G.dataset.card}),o.dataset.handLayout=JSON.stringify(m.map(G=>({value:G.userData.value,x:G.position.x,z:G.userData.restZ}))),Vr.updateSelection=()=>{const G=[...document.querySelectorAll(".hand-card")];m.forEach(N=>{const q=G.find($e=>$e.dataset.card===N.userData.value);if(!q)return;N.userData.control=q;const W=q.classList.contains("selected");N.userData.highlight||(N.userData.highlight=F(.76,1.1,.025,Z,0,0,-.025,N,.045)),N.userData.highlight.visible=W;const ue=N.position.y,pe=N.userData.restY+(W?.22:0),ge=W?-4.65:N.userData.restZ,xe=(N.userData.revision||0)+1;N.userData.revision=xe,$(180,$e=>{if(N.userData.revision!==xe)return;const Ee=1-Math.pow(1-$e,3);N.position.y=ue+(pe-ue)*Ee,N.position.z=ge})})};const Ft=new yC,Qe=new Et;let nt;o.addEventListener("pointerdown",G=>{nt={x:G.clientX,y:G.clientY}}),o.addEventListener("pointerup",G=>{var W;if(!nt||Math.hypot(G.clientX-nt.x,G.clientY-nt.y)>12)return;const N=o.getBoundingClientRect();if(Qe.set((G.clientX-N.left)/N.width*2-1,-(G.clientY-N.top)/N.height*2+1),Ft.setFromCamera(Qe,h),I){if(b){const ue=Ft.intersectObjects(T)[0];ue&&((W=document.querySelector('[data-row-choice="'+ue.object.userData.rowIndex+'"]'))==null||W.click())}return}const q=Ft.intersectObjects(m,!0)[0];if(q){let ue=q.object;for(;ue&&!ue.userData.control;)ue=ue.parent;ue!=null&&ue.userData.control&&!ue.userData.control.disabled&&ue.userData.control.click()}});const k=()=>{const G=s.getBoundingClientRect();(o.dataset.width!==String(G.width)||o.dataset.height!==String(G.height))&&(u.setSize(G.width,G.height,!1),o.dataset.width=String(G.width),o.dataset.height=String(G.height)),h.aspect=G.width/G.height,h.zoom=.8,h.updateProjectionMatrix(),h.updateMatrixWorld(),o.dataset.handTargets=JSON.stringify(m.map(N=>{const q=N.getWorldPosition(new fe).project(h);return{x:(q.x+1)*G.width/2,y:(1-q.y)*G.height/2}})),o.dataset.rowTargets=JSON.stringify(T.map(N=>{const q=N.position.clone().project(h);return{x:(q.x+1)*G.width/2,y:(1-q.y)*G.height/2}})),Nt.forEach(({button:N,position:q})=>{const W=q.clone().project(h);N.style.left=(W.x+1)*G.width/2+"px",N.style.top=(1-W.y)*G.height/2+"px"}),U.forEach(({el:N,position:q})=>{const W=q.clone().project(h);N.style.left=(W.x+1)*G.width/2+"px",N.style.top=(1-W.y)*G.height/2+"px"}),u.render(f,h)},R=new ResizeObserver(k);R.observe(s),k();let oe=0;const we=matchMedia("(prefers-reduced-motion: reduce)").matches;function Se(G){if(!y&&(S=requestAnimationFrame(Se),!(G-oe<33))){oe=G;for(let N=x.length-1;N>=0;N--){const q=x[N],W=Math.min(1,(G-q.start)/(we?Math.min(q.duration,80):q.duration));q.update(W),W===1&&(x.splice(N,1),q.resolve())}we||v.forEach((N,q)=>N.rotation.z=Math.sin(G*8e-4+q)*.012),u.render(f,h)}}S=requestAnimationFrame(Se),Promise.all(E).then(()=>{y||t!==Xy||(u.render(f,h),o.dataset.presented="true",o.style.opacity="1",o.style.pointerEvents="auto",d.style.opacity="1",C.style.opacity="1",Jt.style.opacity="1",no.forEach(G=>G()),no.clear(),s.classList.add("clubhouse-ready"))}),Ac=()=>{y=!0,x.splice(0).forEach(G=>G.resolve()),cancelAnimationFrame(S),R.disconnect(),g.forEach(G=>G.dispose()),u.dispose(),u.forceContextLoss(),o.remove(),d.remove(),C.remove(),Jt.remove(),s.classList.remove("clubhouse-ready")}}const fM="take5-sound-enabled",_D={tap:{src:"assets/audio/click1.wav",volume:.12},select:{src:"assets/audio/click2.wav",volume:.17},card:{src:"assets/audio/click3.wav",volume:.2},deal:{src:"assets/audio/rollover1.wav",volume:.13},row:{src:"assets/audio/click1.wav",volume:.2}};let Ii=localStorage.getItem(fM)!=="false",pn,ri,$m=!1,ps;const El=new Set,qy=new Map,hM=[523.25,null,659.25,783.99,null,659.25,587.33,null,523.25,null,392,523.25,null,587.33,523.25,null],mm=.42,yD=hM.length*mm;function SD(){if(pn)return pn;const n=window.AudioContext||window.webkitAudioContext;return n?(pn=new n,ri=pn.createGain(),ri.gain.value=0,ri.connect(pn.destination),pn):null}function Yy(n,e,t,r=.22,s="sine"){if(!pn||!ri||!n)return;const o=pn.createOscillator(),u=pn.createGain();o.type=s,o.frequency.setValueAtTime(n,e),u.gain.setValueAtTime(1e-4,e),u.gain.linearRampToValueAtTime(r,e+.035),u.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(u),u.connect(ri),o.start(e),o.stop(e+t+.02)}function Xm(){if(!Ii||!$m||!pn||pn.state!=="running")return;const n=pn.currentTime+.08;hM.forEach((e,t)=>{e&&Yy(e,n+t*mm,.3,.2,"sine")}),[0,4,8,12].forEach((e,t)=>Yy([261.63,196,220,196][t],n+e*mm,.6,.09,"triangle")),ps=setTimeout(()=>{ps=null,Xm()},yD*1e3)}function pM(){!Ii||!$m||!pn||!ri||(ri.gain.cancelScheduledValues(pn.currentTime),ri.gain.setTargetAtTime(.08,pn.currentTime,1.2),ps||Xm())}function qm(){if(!Ii)return;const n=SD();(n==null?void 0:n.state)==="suspended"&&n.resume().catch(()=>{}),pM()}function _s(n){$m=n,n||(clearTimeout(ps),ps=null),!(!pn||!ri)&&(ri.gain.cancelScheduledValues(pn.currentTime),ri.gain.setTargetAtTime(Ii&&n?.08:0,pn.currentTime,n?1.2:.35),Ii&&n&&Xm())}function ka(n){if(!Ii)return;const e=_D[n];if(!e)return;const t=qy.get(n)||new Audio(e.src);t.preload="auto",qy.set(n,t);const r=t.cloneNode();r.volume=e.volume,El.add(r),r.addEventListener("ended",()=>El.delete(r),{once:!0}),r.play().catch(()=>El.delete(r))}function gm(){return Ii}function mM(){return Ii=!Ii,localStorage.setItem(fM,String(Ii)),Ii?(qm(),pM()):(El.forEach(n=>{n.pause(),n.currentTime=0}),El.clear(),clearTimeout(ps),ps=null,pn&&ri&&(ri.gain.cancelScheduledValues(pn.currentTime),ri.gain.setTargetAtTime(0,pn.currentTime,.12))),Ii}/*! Capacitor: https://capacitorjs.com/ - MIT License */var yo;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(yo||(yo={}));class Yh extends Error{constructor(e,t,r){super(e),this.message=e,this.code=t,this.data=r}}const xD=n=>{var e,t;return n!=null&&n.androidBridge?"android":!((t=(e=n==null?void 0:n.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},MD=n=>{const e=n.CapacitorCustomPlatform||null,t=n.Capacitor||{},r=t.Plugins=t.Plugins||{},s=()=>e!==null?e.name:xD(n),o=()=>s()!=="web",u=m=>{const v=h.get(m);return!!(v!=null&&v.platforms.has(s())||d(m))},d=m=>{var v;return(v=t.PluginHeaders)===null||v===void 0?void 0:v.find(x=>x.name===m)},f=m=>n.console.error(m),h=new Map,g=(m,v={})=>{const x=h.get(m);if(x)return console.warn(`Capacitor plugin "${m}" already registered. Cannot register plugins twice.`),x.proxy;const E=s(),T=d(m);let y;const S=async()=>(!y&&E in v?y=typeof v[E]=="function"?y=await v[E]():y=v[E]:e!==null&&!y&&"web"in v&&(y=typeof v.web=="function"?y=await v.web():y=v.web),y),w=(C,V)=>{var U,z;if(T){const $=T==null?void 0:T.methods.find(Y=>V===Y.name);if($)return $.rtype==="promise"?Y=>t.nativePromise(m,V.toString(),Y):(Y,B)=>t.nativeCallback(m,V.toString(),Y,B);if(C)return(U=C[V])===null||U===void 0?void 0:U.bind(C)}else{if(C)return(z=C[V])===null||z===void 0?void 0:z.bind(C);throw new Yh(`"${m}" plugin is not implemented on ${E}`,yo.Unimplemented)}},D=C=>{let V;const U=(...z)=>{const $=S().then(Y=>{const B=w(Y,C);if(B){const se=B(...z);return V=se==null?void 0:se.remove,se}else throw new Yh(`"${m}.${C}()" is not implemented on ${E}`,yo.Unimplemented)});return C==="addListener"&&($.remove=async()=>V()),$};return U.toString=()=>`${C.toString()}() { [capacitor code] }`,Object.defineProperty(U,"name",{value:C,writable:!1,configurable:!1}),U},L=D("addListener"),O=D("removeListener"),I=(C,V)=>{const U=L({eventName:C},V),z=async()=>{const Y=await U;O({eventName:C,callbackId:Y},V)},$=new Promise(Y=>U.then(()=>Y({remove:z})));return $.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await z()},$},b=new Proxy({},{get(C,V){switch(V){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return T?I:L;case"removeListener":return O;default:return D(V)}}});return r[m]=b,h.set(m,{name:m,proxy:b,platforms:new Set([...Object.keys(v),...T?[E]:[]])}),b};return t.convertFileSrc||(t.convertFileSrc=m=>m),t.getPlatform=s,t.handleError=f,t.isNativePlatform=o,t.isPluginAvailable=u,t.registerPlugin=g,t.Exception=Yh,t.DEBUG=!!t.DEBUG,t.isLoggingEnabled=!!t.isLoggingEnabled,t},ED=n=>n.Capacitor=MD(n),td=ED(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),cd=td.registerPlugin;class Ym{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(t);const o=this.windowListeners[e];o&&!o.registered&&this.addWindowListener(o),r&&this.sendRetainedArgumentsForEvent(e);const u=async()=>this.removeListener(e,t);return Promise.resolve({remove:u})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,r){const s=this.listeners[e];if(!s){if(r){let o=this.retainedEventArguments[e];o||(o=[]),o.push(t),this.retainedEventArguments[e]=o}return}s.forEach(o=>o(t))}hasListeners(e){var t;return!!(!((t=this.listeners[e])===null||t===void 0)&&t.length)}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:r=>{this.notifyListeners(t,r)}}}unimplemented(e="not implemented"){return new td.Exception(e,yo.Unimplemented)}unavailable(e="not available"){return new td.Exception(e,yo.Unavailable)}async removeListener(e,t){const r=this.listeners[e];if(!r)return;const s=r.indexOf(t);s!==-1&&this.listeners[e].splice(s,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(r=>{this.notifyListeners(e,r)}))}}const Ky=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Zy=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class bD extends Ym{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[s,o]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=Zy(s).trim(),o=Zy(o).trim(),t[s]=o}),t}async setCookie(e){try{const t=Ky(e.key),r=Ky(e.value),s=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",o=(e.path||"/").replace("path=",""),u=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${r||""}${s}; path=${o}; ${u};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}cd("CapacitorCookies",{web:()=>new bD});const wD=async n=>new Promise((e,t)=>{const r=new FileReader;r.onload=()=>{const s=r.result;e(s.indexOf(",")>=0?s.split(",")[1]:s)},r.onerror=s=>t(s),r.readAsDataURL(n)}),TD=(n={})=>{const e=Object.keys(n);return Object.keys(n).map(s=>s.toLocaleLowerCase()).reduce((s,o,u)=>(s[o]=n[e[u]],s),{})},RD=(n,e=!0)=>n?Object.entries(n).reduce((r,s)=>{const[o,u]=s;let d,f;return Array.isArray(u)?(f="",u.forEach(h=>{d=e?encodeURIComponent(h):h,f+=`${o}=${d}&`}),f.slice(0,-1)):(d=e?encodeURIComponent(u):u,f=`${o}=${d}`),`${r}&${f}`},"").substr(1):null,AD=(n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),s=TD(n.headers)["content-type"]||"";if(typeof n.data=="string")t.body=n.data;else if(s.includes("application/x-www-form-urlencoded")){const o=new URLSearchParams;for(const[u,d]of Object.entries(n.data||{}))o.set(u,d);t.body=o.toString()}else if(s.includes("multipart/form-data")||n.data instanceof FormData){const o=new FormData;if(n.data instanceof FormData)n.data.forEach((d,f)=>{o.append(f,d)});else for(const d of Object.keys(n.data))o.append(d,n.data[d]);t.body=o;const u=new Headers(t.headers);u.delete("content-type"),t.headers=u}else(s.includes("application/json")||typeof n.data=="object")&&(t.body=JSON.stringify(n.data));return t};class CD extends Ym{async request(e){const t=AD(e,e.webFetchExtra),r=RD(e.params,e.shouldEncodeUrlParams),s=r?`${e.url}?${r}`:e.url,o=await fetch(s,t),u=o.headers.get("content-type")||"";let{responseType:d="text"}=o.ok?e:{};u.includes("application/json")&&(d="json");let f,h;switch(d){case"arraybuffer":case"blob":h=await o.blob(),f=await wD(h);break;case"json":f=await o.json();break;case"document":case"text":default:f=await o.text()}const g={};return o.headers.forEach((m,v)=>{g[v]=m}),{data:f,headers:g,status:o.status,url:o.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}cd("CapacitorHttp",{web:()=>new CD});var jy;(function(n){n.Dark="DARK",n.Light="LIGHT",n.Default="DEFAULT"})(jy||(jy={}));var Jy;(function(n){n.StatusBar="StatusBar",n.NavigationBar="NavigationBar"})(Jy||(Jy={}));class PD extends Ym{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}cd("SystemBars",{web:()=>new PD});const Kh=cd("App",{web:()=>aS(()=>import("./web-DDfoeeSQ.js"),[]).then(n=>new n.AppWeb)}),gM=td.isNativePlatform(),LD="https://take-five-friends-game.onrender.com/";gM&&(document.documentElement.classList.add("capacitor-native"),Kh.addListener("backButton",()=>{var r;const n=document.querySelector("#rulesDialog");if(n!=null&&n.open){n.close();return}const e=document.querySelector("#gameMenuPanel");if(e&&!e.classList.contains("is-hidden")){(r=document.querySelector("#gameMenuToggle"))==null||r.dispatchEvent(new CustomEvent("rnpress",{bubbles:!0}));return}const t=document.querySelector("#gameMenuToggle");if(t){t.dispatchEvent(new CustomEvent("rnpress",{bubbles:!0}));return}Kh.exitApp()}),Kh.addListener("appUrlOpen",({url:n})=>{try{const e=new URL(n).searchParams.get("room");/^\d{4}$/.test(e||"")&&window.location.assign(`/?room=${encodeURIComponent(e)}`)}catch{}}));const Km=[{id:"take-5",name:"Take 5",category:"Card game",status:"available",route:"take-5",description:"A clever card game where every move counts. Avoid the bulls!",featuredDescription:"Think ahead, play your cards, and avoid collecting the bulls!",artwork:"take5"},{id:"phase-10",name:"Phase 10",category:"Card game",status:"available",route:"phase-10",description:"Build sets, make runs, and race through all ten phases.",artwork:"phase10"},{id:"splendor",name:"Splendor",category:"Strategy game",status:"coming-soon",route:null,description:"Collect precious gems, build your empire, and earn prestige.",artwork:"splendor"}],pr=Km.find(n=>n.status==="available");function vM(n){return`<span class="game-status game-status--${n.status}">${n.status==="available"?"Available now":"Coming soon"}</span>`}function _M(n){return n.artwork==="take5"?'<div class="game-art game-art--take5"><span class="game-art-card game-art-card--one" aria-hidden="true"></span><span class="game-art-card game-art-card--two" aria-hidden="true"></span><span class="game-art-card game-art-card--three" aria-hidden="true"></span><span class="game-art-bull">♞</span></div>':n.artwork==="phase10"?'<div class="game-art game-art--phase10"><span class="phase-orb phase-orb--blue">7</span><span class="phase-orb phase-orb--red">10</span><span class="phase-orb phase-orb--gold">★</span><span class="phase-run">4 · 5 · 6 · 7</span></div>':'<div class="game-art game-art--splendor"><span class="gem gem--emerald"></span><span class="gem gem--ruby"></span><span class="gem gem--sapphire"></span><span class="splendor-crown">♛</span></div>'}function DD(n){const e=n.status==="available";return`<article class="game-card game-card--${n.id}" data-game-id="${n.id}" ${e?`data-game-tile="play" role="button" tabindex="0" aria-label="Play ${n.name}"`:""}>
    ${_M(n)}
    <div class="game-card-copy">
      <div class="game-card-meta"><span>${n.category}</span>${vM(n)}</div>
      <h3>${n.name}</h3>
      <p>${n.description}</p>
      <button class="game-card-action" data-game-action="${e?"play":"soon"}" data-game-id="${n.id}" ${e?"":'aria-disabled="true"'}>${e?"Play now":"Coming soon"} <span>→</span></button>
    </div>
  </article>`}function Qy(){return Km.map(DD).join("")}const ID=["blue","green","red","yellow"],vm=["2 sets of 3","1 set of 3 + 1 run of 4","1 set of 4 + 1 run of 4","1 run of 7","1 run of 8","1 run of 9","2 sets of 4","7 cards of one color","1 set of 5 + 1 set of 2","1 set of 5 + 1 set of 3"],ND=["🧑🏻","🦊","🐻","🐸"];let OD=0;const Zh=(n,e=null)=>({id:`phase-card-${OD++}`,value:n,color:e}),Na=n=>n.value==="wild",nr=n=>n.value==="skip";function UD(){const n=[];for(let e=0;e<2;e++)ID.forEach(t=>{for(let r=1;r<=12;r++)n.push(Zh(r,t))});for(let e=0;e<8;e++)n.push(Zh("wild"));for(let e=0;e<4;e++)n.push(Zh("skip"));return FD(n)}function FD(n){const e=n.slice();for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e}function kD(n){return Na(n)?25:nr(n)?15:n.value>=10?10:5}function Zm(n){return n.filter(e=>!Na(e)&&!nr(e))}function jm(n,e){return n.length===e&&!n.some(nr)}function mr(n,e){const t=Zm(n).map(r=>r.value);return jm(n,e)&&t.length>0&&t.every(r=>r===t[0])}function fl(n,e){const t=Zm(n).map(o=>o.value);if(!jm(n,e)||t.length===0||new Set(t).size!==t.length)return!1;const r=Math.min(...t),s=Math.max(...t);return s-r<e&&Math.max(1,s-e+1)<=Math.min(r,13-e)}function BD(n,e){const t=Zm(n).map(r=>r.color);return jm(n,e)&&t.length>0&&t.every(r=>r===t[0])}function yM(n,e,t=0,r=[],s=[]){if(r.length===e)return s.push(r),s;for(let o=t;o<=n.length-(e-r.length);o++)yM(n,e,o+1,r.concat(o),s);return s}function io(n,e,t,r,s){return n.length!==e+r?!1:yM(n,e).some(o=>{const u=o.map(f=>n[f]),d=n.filter((f,h)=>!o.includes(h));return t(u,e)&&s(d,r)})}function SM(n,e){switch(n){case 1:return io(e,3,mr,3,mr);case 2:return io(e,3,mr,4,fl);case 3:return io(e,4,mr,4,fl);case 4:return fl(e,7);case 5:return fl(e,8);case 6:return fl(e,9);case 7:return io(e,4,mr,4,mr);case 8:return BD(e,7);case 9:return io(e,5,mr,2,mr);case 10:return io(e,5,mr,3,mr);default:return!1}}function xM(n,e){const t=UD(),r=[{id:"phase-you",name:n||"You",avatar:e,phase:1,score:0,hand:[],laid:!1,phaseCards:[]},{id:"phase-milo",name:"Milo",avatar:"🦊",phase:1,score:0,hand:[],laid:!1,phaseCards:[]},{id:"phase-nora",name:"Nora",avatar:"🐻",phase:1,score:0,hand:[],laid:!1,phaseCards:[]},{id:"phase-pip",name:"Pip",avatar:"🐸",phase:1,score:0,hand:[],laid:!1,phaseCards:[]}];return r.forEach(s=>{s.hand=t.splice(0,10)}),{players:r,drawPile:t,discardPile:[t.pop()],current:0,turn:"draw",selected:[],message:"Draw a card to begin.",round:1,finished:!1,skipped:null}}const _i=document.querySelector("#app"),nd=document.querySelector("#rulesDialog"),eS=new URLSearchParams(location.search),Jm="take5-host-save",ms="take5-guest-session",M={screen:"home",mode:"online",tab:"rooms",name:localStorage.getItem("take5-name")||"",peer:null,host:!1,connection:null,connections:new Map,clientId:null,roomId:"",players:[],game:null,selected:null,busy:!1,toastTimer:null,botCount:3,roundFlashTimer:null,submittedTurn:!1,animating:!1,replay:null,replayKey:null,revealOrigins:{},stageSeen:new Set,stageTurnKey:null,countdownTimer:null,countdownInterval:null,reconnectTimer:null,peerReconnectTimer:null,disconnectAdvanceTimer:null,resumeToken:null,recoveringGuest:!1,reactionCooldowns:new Map,screenTransition:!1,phase10:null,phase10Avatar:"🧑🏻"};document.addEventListener("pointerdown",qm,{passive:!0});document.addEventListener("keydown",qm);function MM(){var n;if(M.peer){if(M.peer.disconnected)try{M.peer.reconnect()}catch{fd(M.peer)}if(!M.host&&M.roomId){const e=M.peer;(n=M.connection)!=null&&n.open?M.connection.send({type:"sync"}):(M.connection=null,clearTimeout(M.reconnectTimer),hd(M.roomId,e))}}}window.addEventListener("online",MM);document.addEventListener("visibilitychange",()=>{document.hidden||MM()});document.querySelector("#homeLink").addEventListener("click",n=>{n.preventDefault(),Fa()});Sx(nd);Zt(".dialog-close",()=>nd.close());var rS;if(eS.get("room")){const n=eS.get("room");M.tab="rooms",M.roomPrefill=/^\d{4}$/.test(n)?n:((rS=n.match(/^take5-(\d{4})$/))==null?void 0:rS[1])||""}const jh=dd(Jm),Xr=dd(ms),Jh=M.roomPrefill||(Xr==null?void 0:Xr.roomId)||"",zD=!!Xr&&(!M.roomPrefill||Xr.roomId===M.roomPrefill);jh&&(M.roomPrefill===jh.roomId||!M.roomPrefill&&!zD)?(Fa(),aI(jh)):(Fa(),Jh&&(Xr==null?void 0:Xr.roomId)===Jh&&(M.resumeToken=Xr.token,M.recoveringGuest=!0,og(Jh)));function dd(n){try{return JSON.parse(localStorage.getItem(n)||"null")}catch{return null}}function Wt(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function ir(n,e,{nativeControls:t=!0}={}){const r=M.screenTransition&&!matchMedia("(prefers-reduced-motion: reduce)").matches;if(ZR(n),n.innerHTML=e,requestAnimationFrame(vD),t)try{Sx(n)}catch(s){console.error("Could not mount React Native Web controls.",s)}r&&(n.animate([{opacity:0,transform:"translateY(10px) scale(.992)"},{opacity:1,transform:"translateY(0) scale(1)"}],{duration:300,easing:"cubic-bezier(.2,.78,.25,1)"}),M.screenTransition=!1)}function Zt(n,e){(typeof n=="string"?document.querySelectorAll(n):[n]).forEach(r=>{if(!r)return;const s=o=>{ka("tap"),e(o,r)};r.addEventListener("rnpress",s),r.addEventListener("click",o=>{r.closest(".rn-control-root")||s(o)})})}function HD(){const n=gm();return`<button class="icon-button sound-toggle" id="soundToggle" aria-label="${n?"Mute sound":"Enable sound"}" aria-pressed="${n}" title="${n?"Mute sound":"Enable sound"}"><span class="sound-toggle-glyph" aria-hidden="true">♪</span><span class="sound-toggle-state" aria-hidden="true">${n?"":"×"}</span></button>`}function GD(){Zt("#soundToggle",()=>{mM(),ea()})}function ni(n){return n===55?7:n%11===0?5:n%10===0?3:n%5===0?2:1}function VD(n){return{1:"one-bull",2:"two-bulls",3:"three-bulls",5:"five-bulls",7:"seven-bulls"}[ni(n)]}function Er(){return'<span class="bull-icon" aria-hidden="true"><img class="bull-icon-art" src="assets/bullhead.svg" alt="" draggable="false"></span>'}function tS(n){return`<span class="bull-marks" aria-label="${ni(n)} bullheads">${Array.from({length:ni(n)},()=>'<i class="bull-head" aria-hidden="true"></i>').join("")}</span>`}function oo(n,e=""){const t=VD(n),r=Wt(n),s=String(n).length;return`<span class="card-face ${e} tone-${t} value-${s}-digits" aria-hidden="true"><img class="card-art" src="assets/cards/card-${t}.png" alt="" draggable="false"><span class="card-corner top-left">${r}</span><span class="card-corner top-right">${r}</span>${tS(n)}<span class="card-value-outline">${r}</span><span class="card-value">${r}</span><span class="card-bottom-meta"><span class="card-corner bottom-left">${r}</span>${tS(n)}<span class="card-corner bottom-right">${r}</span></span></span>`}function EM(n,e){return n.human?["🧑🏻","👩🏽","🧔🏼","👩🏻","🧑🏾","👩🏼","🧑🏽","👨🏾","👩🏻","🧑🏼"][e%10]:["🦊","🐻","🐸","🐼","🐯","🐵","🐰","🦝","🦁"][Math.max(0,e-1)%9]}function WD(){return Array.from({length:104},(n,e)=>e+1).sort(()=>Math.random()-.5)}function ea(){var h,g;const n=document.querySelector("#homeLink"),e=document.querySelector("#headerRoster"),t=document.querySelector("#topbarRight"),r=M.screen==="home",s=["lobby","game","result"].includes(M.screen);if(n&&(n.innerHTML='<span class="brand-mark">CG</span><span>Card <span class="brand-dot">Games</span></span>'),r){e.innerHTML="",ir(t,`<div class="platform-profile" aria-label="Player profile"><span class="platform-avatar">${Wt((M.name||"P").slice(0,1).toUpperCase())}</span><span class="platform-profile-copy"><b>${Wt(M.name||"Player")}</b><small>Ready to play</small></span></div>`,{nativeControls:!1}),Zt("[data-platform-nav]",(m,v)=>{var E;const x=v.dataset.platformNav;x==="take5"?eg():x==="games"?(E=document.querySelector("#games"))==null||E.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"smooth"})});return}const o=M.screen==="lobby"?M.players:((h=M.game)==null?void 0:h.players)||M.players,u=!!M.game&&["game","result"].includes(M.screen);if(e&&(e.innerHTML=s?o.map((m,v)=>{var y;const x=m.id===M.clientId,E=((y=m.hand)==null?void 0:y.length)||0,T=u?`${E} cards`:m.human?m.ready?"READY":"ONLINE":"BOT";return`<div class="header-player ${x?"is-you":""} ${m.ready?"is-ready":""}" data-player-id="${Wt(m.id)}"><span class="header-avatar">${EM(m,v)}</span><span class="header-player-copy"><b>${Wt(m.name)}${x?" · you":""}</b><small>${T}</small></span>${u?`<span class="header-player-score bull-counter-badge" aria-label="${m.total||0} bullheads"><strong>${m.total||0}</strong>${Er()}</span><span class="opponent-cards" aria-label="${E} cards in hand">${Array.from({length:Math.min(4,E)},(S,w)=>`<i style="--i:${w}"></i>`).join("")}</span>`:`<i class="header-player-status ${m.online===!1?"is-offline":""}"></i>`}</div>`}).join(""):""),!t)return;if(!s){ir(t,`<span class="top-note"><span class="online-dot"></span> the table is open</span>${HD()}<button class="icon-button" id="rulesButton" aria-label="How to play" title="How to play">?</button>`),GD(),Zt("#rulesButton",()=>nd.showModal());return}const d=((g=M.mode)==null?void 0:g.startsWith("online"))||M.screen==="lobby",f=[];f.push(`<button class="menu-action" data-menu-action="toggle-sound"><span class="menu-action-icon">${gm()?"♫":"♪"}</span><span>${gm()?"Sound on":"Sound off"}</span></button>`),M.screen==="game"&&d&&f.push(`<div class="menu-reaction-section"><button class="menu-action menu-reaction-toggle" data-menu-action="toggle-reactions" aria-expanded="false"><span class="menu-action-icon">☺</span><span>Send a reaction</span><span class="menu-action-chevron" aria-hidden="true">⌄</span></button><div class="menu-reaction-picker" role="group" aria-label="Choose a reaction" hidden>${zl.map(m=>`<button class="menu-reaction-option" type="button" role="menuitem" data-reaction="${m}" aria-label="Send ${m} reaction">${m}</button>`).join("")}</div></div>`),d&&M.roomId&&(f.push('<button class="menu-action" data-menu-action="sync-room"><span class="menu-action-icon">⟳</span><span>Refresh room sync</span></button>'),f.push('<button class="menu-action" data-menu-action="copy-invite"><span class="menu-action-icon">↗</span><span>Copy invite link</span></button>'),f.push('<button class="menu-action" data-menu-action="copy-code"><span class="menu-action-icon">#</span><span>Copy room code</span></button>')),M.screen==="lobby"&&M.host&&f.push('<button class="menu-action" data-menu-action="start-game"><span class="menu-action-icon">▶</span><span>Start game</span></button>'),M.screen==="game"&&(!d||M.host)&&f.push('<button class="menu-action" data-menu-action="new-game"><span class="menu-action-icon">⟳</span><span>Start new game</span></button>'),M.screen==="result"&&f.push('<button class="menu-action" data-menu-action="new-game"><span class="menu-action-icon">⟳</span><span>Play again</span></button>'),f.push('<button class="menu-action" data-menu-action="rules"><span class="menu-action-icon">?</span><span>How to play</span></button>'),(d||M.screen==="game"||M.screen==="result")&&f.push('<button class="menu-action is-danger" data-menu-action="leave"><span class="menu-action-icon">↩</span><span>Leave game</span></button>'),ir(t,`<div class="menu-shell"><button class="menu-trigger" id="gameMenuToggle" aria-label="Game menu" aria-haspopup="menu" aria-expanded="false" title="Game menu"><span class="menu-icon" aria-hidden="true"></span></button><div class="game-menu-panel is-hidden" id="gameMenuPanel" role="menu">${f.join("")}</div></div>`),Zt("#gameMenuToggle",(m,v)=>{var T;const x=document.querySelector("#gameMenuPanel"),E=v.getAttribute("aria-expanded")!=="true";v.setAttribute("aria-expanded",String(E)),x.classList.toggle("is-hidden",!E),(T=v.closest(".menu-shell"))==null||T.classList.toggle("is-open",E)}),Zt(".menu-action",(m,v)=>{var T,y,S;const x=v.dataset.menuAction,E=document.querySelector("#gameMenuPanel");if(x==="toggle-reactions"){const w=v.nextElementSibling,D=v.getAttribute("aria-expanded")!=="true";v.setAttribute("aria-expanded",String(D)),w.hidden=!D,(T=v.closest(".menu-reaction-section"))==null||T.classList.toggle("is-expanded",D);return}if(E&&E.classList.add("is-hidden"),(y=document.querySelector("#gameMenuToggle"))==null||y.setAttribute("aria-expanded","false"),(S=document.querySelector(".menu-shell"))==null||S.classList.remove("is-open"),x==="copy-invite")dI();else if(x==="copy-code")LM(M.roomId,"Room code copied");else if(x==="sync-room")oI();else if(x==="toggle-sound")mM(),ea();else if(x==="rules")nd.showModal();else if(x==="leave")DM();else if(x==="start-game")id();else if(x==="new-game"){if(d&&M.host&&M.players.forEach(w=>{w.score=0,w.total=0}),d&&!M.host)return vi("Ask the host to start another game.");d?id():ig()}}),Zt(".menu-reaction-option",(m,v)=>RM(v.dataset.reaction))}function Fa(){pd(),document.body.classList.remove("match-mode","lobby-mode","take5-entry-mode"),document.body.classList.add("home-mode","platform-home"),M.screen="home",M.game=null,M.selected=null,_s(!0);try{if(!pr||typeof Qy!="function")throw new Error("The game registry is unavailable.");ea(),ir(_i,`<section class="platform-homepage">
      <section class="platform-welcome" aria-labelledby="platformWelcomeTitle"><div><h1 id="platformWelcomeTitle">Ready to play?</h1><p>Pick your game. Bring your friends. Let the fun begin.</p></div><span class="platform-online"><i></i> Games ready</span></section>
      <section class="platform-featured" data-game-tile="play" data-game-id="${pr.id}" role="button" tabindex="0" aria-label="Play ${Wt(pr.name)}" aria-labelledby="featuredTitle"><div class="featured-art">${_M(pr)}</div><div class="featured-copy"><div class="featured-meta"><span>Featured game</span>${vM(pr)}</div><h2 id="featuredTitle">${Wt(pr.name)}</h2><p>${pr.featuredDescription}</p><button class="platform-primary" data-game-action="play" data-game-id="${pr.id}">Play now <span>→</span></button></div><div class="featured-detail"><span>2–10 players</span><span>10 cards each</span><span>15 min</span></div></section>
      <section class="platform-library" id="games" aria-labelledby="gamesTitle"><div class="section-heading"><div><span>Game library</span><h2 id="gamesTitle">Your Game Collection</h2><p>Choose a game and start playing.</p></div></div><div class="game-library-grid">${Qy()}</div></section>
    </section>`,{nativeControls:!1}),Zt("[data-game-action]",(n,e)=>{e.dataset.gameAction==="play"?Qh(e.dataset.gameId):vi(`${e.dataset.gameId==="phase-10"?"Phase 10":"Splendor"} is coming soon.`)}),document.querySelectorAll('[data-game-tile="play"]').forEach(n=>{n.addEventListener("click",e=>{e.target.closest("[data-game-action]")||Qh(n.dataset.gameId||pr.id)}),n.addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),Qh(n.dataset.gameId||pr.id))})})}catch(n){console.error("Could not render the Card Games lobby.",n),ir(_i,`<section class="platform-fallback" role="alert"><span>Card Games</span><h1>We couldn’t load the game lobby.</h1><p>${Wt(n.message||"Please try again.")}</p><button class="platform-primary" id="retryLobby">Try again <span>↻</span></button></section>`,{nativeControls:!1}),Zt("#retryLobby",Fa)}}function Qh(n){const e=Km.find(t=>t.id===n);if(!e||e.status!=="available")return vi("This game is coming soon.");e.route==="phase-10"?Qm():eg()}function Qm(){pd(),M.phase10=null,M.screen="phase10-setup",document.body.classList.remove("match-mode","platform-home","lobby-mode"),document.body.classList.add("home-mode","phase10-mode"),_s(!1),ea(),ir(_i,`<section class="phase10-setup"><div class="phase10-setup-art"><div class="p10-floating-card p10-card-blue">7</div><div class="p10-floating-card p10-card-green">8</div><div class="p10-floating-card p10-card-red">10</div></div><div class="phase10-setup-copy"><span class="phase10-kicker">Phase 10 · local table</span><h1>Choose your player</h1><p>Choose your character, build your phase, and be first through all ten challenges.</p><div class="memoji-grid" role="group" aria-label="Choose your player">${ND.map(n=>`<button class="memoji-choice ${n===M.phase10Avatar?"is-selected":""}" data-phase-avatar="${n}" aria-pressed="${n===M.phase10Avatar}" aria-label="Choose ${$D(n)}">${_m(n)}</button>`).join("")}</div><button class="phase10-play" id="startPhase10">Start game <span>→</span></button><button class="phase10-back" id="backToLobby">Back to games</button></div></section>`,{nativeControls:!1}),Zt("[data-phase-avatar]",(n,e)=>{M.phase10Avatar=e.dataset.phaseAvatar,Qm()}),Zt("#startPhase10",()=>{M.phase10=xM(M.name,M.phase10Avatar),M.screen="phase10",jr()}),Zt("#backToLobby",Fa)}function $D(n){return{"🧑🏻":"Player","🦊":"Milo","🐻":"Nora","🐸":"Pip"}[n]||"Player"}function _m(n,e=""){return`<span class="avatar-3d avatar-3d--${{"🧑🏻":"player","🦊":"fox","🐻":"bear","🐸":"frog"}[n]||"player"} ${e}" aria-hidden="true"></span>`}function ro(n,e){(typeof n=="string"?document.querySelectorAll(n):[n]).forEach(r=>{if(!r)return;let s=!1;const o=u=>{s||r.getAttribute("aria-disabled")==="true"||(s=!0,u.preventDefault(),ka("tap"),e(u,r))};r.addEventListener("pointerup",o),r.addEventListener("click",o)})}function XD(n,e=!1){var o;const t=Na(n)?"wild":nr(n)?"skip":"",r=Na(n)?"★":nr(n)?"⊘":n.value,s=t==="wild"?"★":t==="skip"?"⊘":n.value;return`<button class="phase10-card ${t} ${n.color||""} ${e?"is-selected":""}" data-phase-card="${n.id}" aria-label="${Na(n)?"Wild card":nr(n)?"Skip card":`${n.color} ${n.value}`}" ${((o=M.phase10)==null?void 0:o.turn)!=="play"?'aria-disabled="true"':""}><div class="phase10-card-band phase10-card-band-top"><b>${s}</b><b>${s}</b></div><b class="phase10-card-value">${r}</b><div class="phase10-card-band phase10-card-band-bottom"><b>${s}</b><b>${s}</b></div><i>${t==="wild"?"WILD":t==="skip"?"SKIP":n.color}</i></button>`}function qD(n){return[6,7,8,7,8,9,8,7,7,8][n-1]||6}function bM(n,e,t=0,r=[],s=[]){if(r.length===e)return s.push(r),s;for(let o=t;o<=n.length-(e-r.length);o++)bM(n,e,o+1,r.concat(n[o]),s);return s}function YD(n){const e=qD(n.phase),t=bM(n.hand,e).find(s=>SM(n.phase,s));if(!t)return!1;const r=new Set(t.map(s=>s.id));return n.phaseCards=t,n.hand=n.hand.filter(s=>!r.has(s.id)),n.laid=!0,!0}function jr(){const n=M.phase10;if(!n)return Qm();document.body.classList.remove("home-mode","platform-home","match-mode"),document.body.classList.add("phase10-mode"),M.screen="phase10",ea();const e=n.players[0];n.players[n.current];const t=n.discardPile.at(-1),r=new Set(n.selected),s=n.current===0;ir(_i,`<section class="phase10-board"><header class="phase10-board-head"><div><span class="phase10-kicker">Round ${n.round}</span><h1>Phase ${e.phase}<small>${vm[e.phase-1]}</small></h1></div><div class="phase10-message ${s?"is-your-turn":""}">${Wt(n.message)}</div><button class="phase10-exit" id="exitPhase10">Exit game</button></header><section class="phase10-opponents">${n.players.slice(1).map((o,u)=>`<article class="phase10-player ${n.current===u+1?"is-active":""}"><span class="phase10-avatar">${_m(o.avatar)}</span><div><b>${o.name}</b><small>Phase ${o.phase} · ${o.hand.length} cards</small></div><strong>${o.score}</strong>${o.laid?'<i class="phase10-done">✓</i>':""}</article>`).join("")}</section><main class="phase10-table"><div class="phase10-goal"><span>Your goal</span><strong>Phase ${e.phase}</strong><p>${vm[e.phase-1]}</p>${e.laid?"<b>Phase complete ✓</b>":""}</div><div class="phase10-decks"><button class="phase10-deck draw" id="phaseDraw" ${!s||n.turn!=="draw"?'aria-disabled="true"':""}><span>✦</span><small>Draw</small><i>${n.drawPile.length}</i></button><button class="phase10-deck discard ${(t==null?void 0:t.color)||""} ${Na(t)?"wild":""} ${nr(t)?"skip":""}" id="phaseDiscardDraw" ${!s||n.turn!=="draw"?'aria-disabled="true"':""}><span>${Na(t)?"★":nr(t)?"⊘":t==null?void 0:t.value}</span><small>Discard</small></button></div><div class="phase10-actions"><button id="phaseLay" ${!s||n.turn!=="play"||e.laid?'aria-disabled="true"':""}>Lay phase</button><button id="phaseDiscard" ${!s||n.turn!=="play"||n.selected.length!==1?'aria-disabled="true"':""}>Discard selected</button></div></main><section class="phase10-hand-wrap"><div class="phase10-hand-heading"><span>${_m(e.avatar)}</span><div><b>Your hand</b><small>${e.hand.length} cards · select cards to lay or discard</small></div></div><div class="phase10-hand">${e.hand.map(o=>XD(o,r.has(o.id))).join("")}</div></section></section>`,{nativeControls:!1}),ro("[data-phase-card]",(o,u)=>{if(n.current!==0||n.turn!=="play")return;const d=u.dataset.phaseCard;n.selected=n.selected.includes(d)?n.selected.filter(f=>f!==d):n.selected.concat(d),jr()}),ro("#phaseDraw",()=>nS(!1)),ro("#phaseDiscardDraw",()=>nS(!0)),ro("#phaseLay",KD),ro("#phaseDiscard",ZD),ro("#exitPhase10",Fa)}function nS(n){const e=M.phase10,t=e==null?void 0:e.players[0];if(!e||e.current!==0||e.turn!=="draw")return;const r=n?e.discardPile.pop():e.drawPile.pop();r&&(t.hand.push(r),e.turn="play",e.message="Lay your phase or discard one card.",jr())}function KD(){const n=M.phase10,e=n==null?void 0:n.players[0];if(!n||n.current!==0||n.turn!=="play"||e.laid)return;const t=e.hand.filter(s=>n.selected.includes(s.id));if(!SM(e.phase,t)){n.message=`Those cards do not complete Phase ${e.phase}: ${vm[e.phase-1]}.`,jr();return}const r=new Set(t.map(s=>s.id));e.phaseCards=t,e.hand=e.hand.filter(s=>!r.has(s.id)),e.laid=!0,n.selected=[],n.message="Phase complete! Discard one card to end your turn.",jr()}function ZD(){const n=M.phase10,e=n==null?void 0:n.players[0];if(!n||n.current!==0||n.turn!=="play"||n.selected.length!==1)return;const t=n.selected[0],r=e.hand.findIndex(o=>o.id===t);if(r<0)return;const[s]=e.hand.splice(r,1);n.discardPile.push(s),n.selected=[],nr(s)&&(n.skipped=1),wM()}function wM(){const n=M.phase10,e=n.players[n.current];if(e.hand.length===0)return JD(e);n.current=(n.current+1)%n.players.length,n.skipped===n.current&&(n.message=`${n.players[n.current].name} was skipped!`,n.skipped=null,n.current=(n.current+1)%n.players.length),n.turn="draw",n.current===0?(n.message="Your turn: draw a card.",jr()):(n.message=`${n.players[n.current].name} is thinking…`,jr(),window.setTimeout(jD,650))}function jD(){const n=M.phase10;if(!n||n.current===0||n.finished)return;const e=n.players[n.current],t=n.drawPile.pop();t&&e.hand.push(t),YD(e);const r=e.hand.filter(o=>!Na(o)&&!nr(o)),s=(r.length?r:e.hand)[Math.floor(Math.random()*(r.length?r.length:e.hand.length))];s&&(e.hand.splice(e.hand.indexOf(s),1),n.discardPile.push(s),nr(s)&&(n.skipped=(n.current+1)%n.players.length)),wM()}function JD(n){const e=M.phase10;if(e.players.forEach(r=>{r!==n&&(r.score+=r.hand.reduce((s,o)=>s+kD(o),0))}),n.phase+=1,n.phase>10){e.finished=!0,e.message=`${n.name} completed all ten phases!`,jr();return}const t=xM(M.name,M.phase10Avatar);t.players.forEach((r,s)=>{r.phase=e.players[s].phase,r.score=e.players[s].score}),t.round=e.round+1,t.message=`${n.name} went out. New round!`,M.phase10=t,jr()}function eg(){var e,t,r;pd(),document.body.classList.remove("match-mode","lobby-mode","platform-home"),document.body.classList.add("home-mode","take5-entry-mode"),M.screen="take5-home",M.game=null,M.selected=null,_s(!0),ea();const n=Wt(M.name);ir(_i,`<section class="landing">
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
  </section>`),Zt(".setup-tab",(s,o)=>{M.tab=o.dataset.tab,eg()}),(e=document.querySelector("#botCount"))==null||e.addEventListener("change",s=>M.botCount=+s.target.value),Zt("#startBots",()=>{ep("#playerName"),ig()}),Zt("#hostRoom",()=>{ep("#roomPlayerName"),rI()}),Zt("#joinRoom",()=>{ep("#roomPlayerName"),og(document.querySelector("#roomCode").value.trim())}),(t=document.querySelector("#roomCode"))==null||t.addEventListener("input",s=>{s.target.value=s.target.value.replace(/\D/g,"").slice(0,4)}),(r=document.querySelector("#roomCode"))==null||r.addEventListener("keydown",s=>{var o;s.key==="Enter"&&((o=document.querySelector("#joinRoom"))==null||o.dispatchEvent(new CustomEvent("rnpress",{bubbles:!0})))})}function ep(n){var e;M.name=((e=document.querySelector(n))==null?void 0:e.value.trim())||"Player",localStorage.setItem("take5-name",M.name)}function Oi(n){const e=document.querySelector(`[data-panel="${M.tab}"] .inline-error`);e&&(e.textContent=n)}function vi(n){var t;clearTimeout(M.toastTimer),(t=document.querySelector(".toast"))==null||t.remove();const e=document.createElement("div");e.className="toast",e.textContent=n,document.body.append(e),M.toastTimer=setTimeout(()=>e.remove(),2600)}const zl=["😂","😮","😭","👏","❤️","🐂"];function tg(n){if(M.screen!=="game"||!zl.includes(n.emoji))return;const e=Array.from(document.querySelectorAll(".header-player[data-player-id]")).find(s=>s.dataset.playerId===n.playerId),t=e==null?void 0:e.getBoundingClientRect(),r=document.createElement("div");r.className="room-reaction-float",r.style.left=`${t?t.left+t.width/2:innerWidth/2}px`,r.style.top=`${t?t.bottom-4:innerHeight*.45}px`,r.innerHTML=`<span>${n.emoji}</span><small>${Wt(n.name||"Player")}</small>`,document.body.append(r),setTimeout(()=>r.remove(),1700)}function TM(n,e=null){M.connections.forEach((t,r)=>{if(r!==e&&t.open)try{t.send(n)}catch{}})}function RM(n){var r,s,o,u,d;if(!((r=M.mode)!=null&&r.startsWith("online"))||M.screen!=="game"||!zl.includes(n))return;const e=Date.now();if(e-(M.reactionCooldowns.get(M.clientId)||0)<650)return;M.reactionCooldowns.set(M.clientId,e);const t={type:"reaction",playerId:M.clientId,name:M.name||"Player",emoji:n};tg(t),(s=document.querySelector("#gameMenuPanel"))==null||s.classList.add("is-hidden"),(o=document.querySelector("#gameMenuToggle"))==null||o.setAttribute("aria-expanded","false"),(u=document.querySelector(".menu-shell"))==null||u.classList.remove("is-open"),document.querySelectorAll(".hand-reaction-picker").forEach(f=>{f.hidden=!0}),document.querySelectorAll(".hand-reaction-trigger").forEach(f=>f.setAttribute("aria-expanded","false")),document.querySelectorAll(".hand-reaction-control").forEach(f=>f.classList.remove("is-expanded")),M.host?TM(t):(d=M.connection)!=null&&d.open&&M.connection.send({type:"reaction",emoji:n})}function QD(n,e=!1){const t=[{id:"self",name:M.name||"You",human:!0,online:!0,score:0,total:0,hand:[]}];for(let r=0;r<n;r++)t.push({id:`bot${r+1}`,name:["Milo","Nora","Pip","June","Otto","Bea","Finn","Kit","Lou"][r],human:!1,online:!0,score:0,total:0,hand:[]});return t}function ng(n){const e=WD();return n.forEach(t=>t.hand=e.splice(0,10).sort((r,s)=>r-s)),e.splice(0,4).map(t=>[t])}function ig(){var t,r;ka("deal"),_s(!1),clearTimeout(M.countdownTimer),clearInterval(M.countdownInterval);const n=+(((t=document.querySelector("#botCount"))==null?void 0:t.value)||M.botCount||3);M.botCount=n,M.submittedTurn=!1,M.animating=!1,M.replay=null,M.replayKey=null,M.revealOrigins={},M.stageSeen=new Set,M.stageTurnKey=null;const e=QD(n);M.game={players:e,rows:ng(e),turn:1,round:1,tieOffset:0,phase:"choosing",selections:{},lastReveal:null,mode:"local",botStyle:((r=document.querySelector("#botStyle"))==null?void 0:r.value)||"clever"},M.mode="local",M.screen="game",M.selected=null,M.screenTransition=!0,yi()}function eI(n){n.round++,n.turn=1,n.tieOffset=(n.tieOffset+1)%n.players.length,n.rows=ng(n.players),n.phase="choosing",n.selections={},n.lastReveal=null,delete n.pendingRowChoice}function rg(n,e){const t=n.hand;let r=t[0],s=1/0;for(const o of t){const u=e.rows.map((f,h)=>({i:h,top:f.at(-1),distance:o-f.at(-1),heads:f.reduce((g,m)=>g+ni(m),0)})).filter(f=>o>f.top).sort((f,h)=>h.top-f.top);let d;if(!u.length)d=26+e.rows.reduce((f,h)=>f+h.reduce((g,m)=>g+ni(m),0),0)*1.1+o/104;else{const f=u[0];d=f.heads*2.1+(f.distance<4?1.3:0)+(f.i===3?-.3:0),e.rows[f.i].length>=5&&(d+=7),e.rows[f.i].length>=4&&(d+=2.5),d+=o/500}e.botStyle==="chaotic"&&(d+=(Math.random()-.5)*9),d<s&&(s=d,r=o)}return r}function tI(n){var r;const e=M.game;if(M.animating||!e||e.phase!=="choosing"||!e.players[0].hand.includes(n))return;ka("card");const t=(r=document.querySelector(`.hand-card[data-card="${n}"]`))==null?void 0:r.getBoundingClientRect();t&&(M.revealOrigins.self={left:t.left,top:t.top,width:t.width,height:t.height}),e.selections.self=n,e.phase="waiting",M.selected=null,yi(),e.players.slice(1).forEach((s,o)=>window.setTimeout(()=>{M.game!==e||e.phase!=="waiting"||(e.selections[s.id]=rg(s,e),e.players.every(u=>e.selections[u.id]!=null)?(e.phase="countdown",e.countdownAt=Date.now()+900,yi(),ug(e,!1)):yi())},550+o*380))}function AM(n,e){var u;const t=n.players.map((d,f)=>(f+n.tieOffset)%n.players.length),r=n.players.map(d=>({p:d,card:n.selections[d.id]})).sort((d,f)=>d.card-f.card||t.indexOf(n.players.indexOf(d.p))-t.indexOf(n.players.indexOf(f.p))),s=r.find(d=>d.p.hand.includes(d.card));if(s&&!n.rows.some(f=>s.card>f.at(-1))&&s.p.human&&e==null)return n.pendingRowChoice={playerId:s.p.id,card:s.card},n.phase="row-choice",!0;const o=[];for(const{p:d,card:f}of r){const h=d.hand.indexOf(f);if(h<0)continue;d.hand.splice(h,1);let g=n.rows.map((E,T)=>({i:T,top:E.at(-1)})).filter(E=>f>E.top).sort((E,T)=>T.top-E.top),m,v=0,x=!1;if(g.length)m=g[0].i,n.rows[m].length===5?(v=n.rows[m].slice(0,5).reduce((E,T)=>E+ni(T),0),d.score+=v,d.total+=v,x=!0,n.rows[m]=[f]):n.rows[m].push(f);else{if(m=e!=null&&d.id===((u=n.pendingRowChoice)==null?void 0:u.playerId)?e:n.rows.reduce((T,y,S)=>y.reduce((w,D)=>w+ni(D),0)<n.rows[T].reduce((w,D)=>w+ni(D),0)?S:T,0),!Number.isInteger(m)||m<0||m>=n.rows.length)return d.hand.splice(h,0,f),!0;v=n.rows[m].reduce((T,y)=>T+ni(y),0),d.score+=v,d.total+=v,x=!0,n.rows[m]=[f]}o.push({playerId:d.id,name:d.name,card:f,rowIndex:m,penalty:v,tookRow:x})}return n.lastReveal=o,n.selections={},delete n.pendingRowChoice,n.tieOffset=(n.tieOffset+1)%n.players.length,M.selected=null,M.submittedTurn=!1,n.players.every(d=>d.hand.length===0)?n.players.some(f=>f.total>=66)?(n.phase="finished",M.screen="result"):n.phase="round-break":(n.turn++,n.phase="choosing"),!1}async function ag(){return aS(()=>import("https://esm.sh/peerjs@1.5.5?bundle"),[])}function nI(){const n=new Uint16Array(1);return crypto.getRandomValues(n),String(n[0]%1e4).padStart(4,"0")}function iI(n){var t;let e=dd(ms);return((e==null?void 0:e.roomId)!==n||!e.token)&&(e={roomId:n,token:((t=crypto.randomUUID)==null?void 0:t.call(crypto))||`${Date.now()}-${Math.random().toString(36).slice(2)}`},localStorage.setItem(ms,JSON.stringify(e))),M.resumeToken=e.token,e.token}function Eo(){if(!(!M.host||!M.roomId))try{localStorage.setItem(Jm,JSON.stringify({roomId:M.roomId,name:M.name,screen:M.screen,players:M.players,game:M.game}))}catch{vi("Could not save a recovery copy of this room on this device.")}}function CM(n,e){M.peer===n&&(e.on("open",()=>{}),e.on("data",t=>sI(e,t)),e.on("close",()=>{var r,s,o;if(M.peer!==n||M.connections.get(e.peer)!==e)return;const t=M.players.find(u=>u.id===e.peer);t&&(t.online=!1),M.connections.delete(e.peer),Eo(),((r=M.game)==null?void 0:r.phase)==="choosing"?(Ol(),rr()):((s=M.game)==null?void 0:s.phase)==="row-choice"?(((o=M.game.pendingRowChoice)==null?void 0:o.playerId)===(t==null?void 0:t.id)&&PM(),rr()):M.screen==="lobby"&&fo()}))}function sg(n){n.on("disconnected",()=>{M.peer===n&&fd(n,1200)}),n.on("open",()=>clearTimeout(M.peerReconnectTimer))}function fd(n,e=3e3){M.peer===n&&(clearTimeout(M.peerReconnectTimer),M.peerReconnectTimer=setTimeout(()=>{if(!(M.peer!==n||!n.disconnected)){try{n.reconnect()}catch{}M.peer===n&&n.disconnected&&fd(n,4e3)}},e))}async function rI(){if(!M.busy){M.busy=!0,Oi("Opening your room…");try{const{Peer:n}=await ag();let e=0;const t=()=>{const r=nI(),s=new n(`take5-${r}`);M.peer=s,M.host=!0,sg(s),s.on("open",o=>{M.peer===s&&(localStorage.removeItem(ms),M.roomId=r,M.clientId=o,M.players=[{id:o,name:M.name,human:!0,online:!0,score:0,total:0,hand:[]}],M.screen="lobby",M.mode="online-host",M.busy=!1,M.screenTransition=!0,history.replaceState({},"",`?room=${encodeURIComponent(r)}`),So(),Eo())}),s.on("connection",o=>CM(s,o)),s.on("error",o=>{if(M.peer===s){if(o.type==="unavailable-id"&&e<8){e++,s.destroy(),M.peer=null,setTimeout(t,120);return}M.busy=!1,M.screen==="home"?Oi(o.type==="unavailable-id"?"Could not reserve a room code. Try again.":"Room connection failed. Check your internet and try again."):vi("Room connection hiccup.")}})};t()}catch{M.busy=!1,Oi("Online rooms need an internet connection. Please try again.")}}}async function aI(n){if(!(n!=null&&n.roomId)||!/^\d{4}$/.test(n.roomId))return Fa();M.busy=!0,M.name=n.name||M.name,Oi("Restoring your room…");try{const{Peer:e}=await ag();let t=0;const r=()=>{const s=new e(`take5-${n.roomId}`);M.peer=s,M.host=!0,sg(s),s.on("open",o=>{var u;M.peer===s&&(_s(!1),M.roomId=n.roomId,M.clientId=o,M.game=n.game||null,M.players=((u=M.game)==null?void 0:u.players)||n.players||[],M.game&&(M.players=M.game.players),M.mode="online-host",M.screen=M.game?M.game.phase==="finished"?"result":"game":"lobby",M.busy=!1,M.screenTransition=!0,M.selected=null,M.submittedTurn=!1,M.animating=!1,M.replay=null,M.replayKey=null,M.revealOrigins={},history.replaceState({},"",`?room=${encodeURIComponent(n.roomId)}`),M.screen==="lobby"?So():M.screen==="result"?cg():(yi(),M.game.phase==="countdown"&&ug(M.game,!0)),Eo())}),s.on("connection",o=>CM(s,o)),s.on("error",o=>{if(M.peer===s){if(o.type==="unavailable-id"&&t<25){t++,s.destroy(),M.peer=null,setTimeout(r,Math.min(1800,180+t*120));return}M.busy=!1,t>=25?Oi("This room is still active in another tab. Close that tab, then refresh to restore it."):Oi("Could not reconnect to your room. Refresh to try again."),s.destroy(),M.peer=null,M.host=!1}})};r()}catch{M.busy=!1,M.host=!1,Oi("Could not restore the room. Check your connection and refresh to try again.")}}function sI(n,e){var t,r;if(!(!e||typeof e!="object")){if(e.type==="hello"){const s=typeof e.resumeToken=="string"?e.resumeToken.slice(0,100):"",o=M.players.find(d=>d.id===n.peer||s&&d.resumeToken===s);if(o){const d=o.id,f=M.connections.get(d);if(f&&f!==n){M.connections.delete(d);try{f.close()}catch{}}o.id=n.peer,o.online=!0,M.game&&d!==n.peer&&(Object.hasOwn(M.game.selections||{},d)&&(M.game.selections[n.peer]=M.game.selections[d],delete M.game.selections[d]),((t=M.game.pendingRowChoice)==null?void 0:t.playerId)===d&&(M.game.pendingRowChoice.playerId=n.peer),M.game.lastReveal&&(M.game.lastReveal=M.game.lastReveal.map(h=>h.playerId===d?{...h,playerId:n.peer}:h))),M.connections.set(n.peer,n),n.send({type:"welcome",id:n.peer,roomId:M.roomId}),M.game?(clearTimeout(M.disconnectAdvanceTimer),M.disconnectAdvanceTimer=null,n.send(ym(n.peer)),Ol(),Eo(),rr()):fo();return}if(M.game){n.send({type:"error",message:"This game is already in progress. Rejoin using your original invite link."}),n.close();return}if(M.players.length>=10){n.send({type:"error",message:"This table is full (10 players max)."}),n.close();return}const u={id:n.peer,name:String(e.name||"Player").slice(0,18),resumeToken:s||void 0,human:!0,online:!0,ready:!1,score:0,total:0,hand:[]};M.players.push(u),M.connections.set(n.peer,n),n.send({type:"welcome",id:n.peer,roomId:M.roomId}),M.screen==="lobby"&&fo();return}if(e.type==="sync"){if(M.connections.get(n.peer)!==n)return;n.send({type:"welcome",id:n.peer,roomId:M.roomId}),M.game?n.send(ym(n.peer)):n.send({type:"lobby",players:M.players.map(({id:s,name:o,online:u,human:d,ready:f})=>({id:s,name:o,online:u,human:d,ready:f})),roomId:M.roomId});return}if(e.type==="ready"&&M.screen==="lobby"){const s=M.players.find(o=>o.id===n.peer);if(!s)return;s.ready=!!e.ready,fo();return}if(e.type==="reaction"){const s=M.players.find(d=>d.id===n.peer),o=Date.now();if(M.screen!=="game"||!(s!=null&&s.human)||!s.online||!zl.includes(e.emoji)||o-(M.reactionCooldowns.get(n.peer)||0)<650)return;M.reactionCooldowns.set(n.peer,o);const u={type:"reaction",playerId:n.peer,name:s.name,emoji:e.emoji};tg(u),TM(u,n.peer);return}if(e.type==="pick"&&M.game&&M.game.phase==="choosing"&&!M.animating){const s=M.players.find(o=>o.id===n.peer);if(!s||!s.hand.includes(+e.card)||M.game.selections[n.peer])return;M.game.selections[n.peer]=+e.card,Ol(),rr()}if(e.type==="choose-row"&&((r=M.game)==null?void 0:r.phase)==="row-choice"){const s=M.game.pendingRowChoice;if(!s||s.playerId!==n.peer||!Number.isInteger(+e.rowIndex))return;lg(+e.rowIndex)}}}function Ol(){const n=M.game;if(M.animating||!n||n.phase!=="choosing"||n.players.some(r=>r.human&&r.online&&!n.selections[r.id]))return;if(n.players.some(r=>r.human&&!r.online&&!n.selections[r.id])){PM();return}clearTimeout(M.disconnectAdvanceTimer),M.disconnectAdvanceTimer=null,n.players.filter(r=>!r.human&&!n.selections[r.id]).forEach(r=>n.selections[r.id]=rg(r,n)),n.phase="countdown",n.countdownAt=Date.now()+3e3,ug(n,!0)}function PM(){M.disconnectAdvanceTimer||(M.disconnectAdvanceTimer=setTimeout(()=>{var e;M.disconnectAdvanceTimer=null;const n=M.game;if(n){if(n.phase==="choosing")n.players.filter(t=>t.human&&!t.online&&!n.selections[t.id]).forEach(t=>n.selections[t.id]=rg(t,n)),Ol(),rr();else if(n.phase==="row-choice"&&n.pendingRowChoice){const r=((e=n.rows.map((s,o)=>({i:o,penalty:s.reduce((u,d)=>u+ni(d),0)})).sort((s,o)=>s.penalty-o.penalty||s.i-o.i)[0])==null?void 0:e.i)??0;lg(r)}}},2e4))}function fo(){Eo();const n={type:"lobby",players:M.players.map(({id:e,name:t,online:r,human:s,ready:o})=>({id:e,name:t,online:r,human:s,ready:o})),roomId:M.roomId};M.connections.forEach(e=>{try{e.send(n)}catch{}}),So()}function ym(n){const e=M.game;return e?{type:"game",viewer:n,game:{...e,players:e.players.map(t=>{const{resumeToken:r,...s}=t;return{...s,hand:t.id===n?t.hand:void 0}}),readyPlayers:Object.keys(e.selections),selections:e.phase==="row-choice"?{...e.selections}:{},mode:"online"}}:null}function rr(){if(M.screen==="lobby"){fo();return}Eo(),M.connections.forEach((n,e)=>{try{n.send(ym(e))}catch{}}),M.clientId&&yi()}function oI(){var e,t;if(!M.roomId){vi("This room is not connected.");return}if(M.host){M.screen==="lobby"?fo():rr(),vi("Room state refreshed for everyone.");return}const n=M.peer;if((e=M.connection)!=null&&e.open){M.connection.send({type:"sync"}),vi("Refreshing room sync…");return}if(n){if(M.recoveringGuest=!0,M.connection=null,clearTimeout(M.reconnectTimer),n.disconnected)try{n.reconnect()}catch{fd(n)}hd(M.roomId,n),vi("Reconnecting to the room…");return}M.resumeToken=((t=dd(ms))==null?void 0:t.token)||M.resumeToken,M.busy=!1,og(M.roomId)}function id(){var e;if(!M.host||M.players.filter(t=>t.human&&t.online).length<1)return;ka("deal"),_s(!1),clearTimeout(M.countdownTimer),clearInterval(M.countdownInterval);let n=+(((e=document.querySelector("#lobbyBots"))==null?void 0:e.value)||0);M.players.filter(t=>t.human&&t.online).length===1&&!M.players.some(t=>!t.human)&&n===0&&(n=1);for(let t=0;t<n&&M.players.length<10;t++){const r=M.players.filter(s=>!s.human).length;M.players.push({id:`bot${r+1}`,name:["Milo","Nora","Pip","June","Otto","Bea","Finn","Kit","Lou"][r],human:!1,online:!0,score:0,total:0,hand:[]})}M.game={players:M.players,rows:ng(M.players),turn:1,round:1,tieOffset:0,phase:"choosing",selections:{},lastReveal:null,mode:"online"},M.submittedTurn=!1,M.animating=!1,M.replay=null,M.replayKey=null,M.revealOrigins={},M.stageSeen=new Set,M.stageTurnKey=null,M.screen="game",M.mode="online-host",M.screenTransition=!0,rr()}function hd(n,e,t=0){if(M.peer!==e||M.host||M.connection&&M.connection.open)return;let r;try{r=e.connect(`take5-${n}`,{reliable:!0})}catch{Sm(n,e,t);return}M.connection=r;let s=!1,o=setTimeout(()=>{!s&&M.connection===r&&r.close()},1e4);r.on("open",()=>{M.peer===e&&r.send({type:"hello",name:M.name,resumeToken:M.resumeToken})}),r.on("data",u=>{(u==null?void 0:u.type)==="welcome"&&(s=!0,clearTimeout(o),M.recoveringGuest=!1),lI(u)}),r.on("error",()=>r.close()),r.on("close",()=>{clearTimeout(o),!(M.connection!==r||M.peer!==e)&&Sm(n,e,t)})}function Sm(n,e,t){if(!(M.peer!==e||M.host)){if(!M.recoveringGuest&&M.screen!=="game"&&M.screen!=="lobby"){M.busy=!1,Oi("Could not reach that room. Check the code and try again.");return}M.recoveringGuest=!0,clearTimeout(M.reconnectTimer),M.reconnectTimer=setTimeout(()=>hd(n,e,t+1),Math.min(8e3,700*Math.pow(2,Math.min(t,3))))}}function og(n){if(!M.busy){if(!/^\d{4}$/.test(n)){Oi("Enter the 4-digit room code.");return}M.busy=!0,M.roomId=n,iI(n),Oi("Finding your table…"),ag().then(({Peer:e})=>{const t=new e;M.peer=t,M.host=!1,sg(t),t.on("open",()=>hd(n,t)),t.on("error",r=>{if(r.type==="peer-unavailable"&&M.recoveringGuest){Sm(n,t,0);return}M.screen==="home"&&!M.recoveringGuest&&(M.busy=!1,Oi(r.type==="peer-unavailable"?"Room not found. Check the code and try again.":"Could not connect. Check your internet and try again."))})}).catch(()=>{M.busy=!1,Oi("Online rooms need an internet connection. Please try again.")})}}function lI(n){var e;if((n==null?void 0:n.type)==="reaction")tg(n);else if((n==null?void 0:n.type)==="welcome")M.clientId=n.id,M.roomId=n.roomId,M.busy=!1,M.mode="online-guest",M.game||(M.screen="lobby"),localStorage.setItem(ms,JSON.stringify({roomId:n.roomId,token:M.resumeToken})),M.game||So();else if((n==null?void 0:n.type)==="lobby")M.players=n.players,M.roomId=n.roomId,M.screen!=="game"&&(M.screen="lobby"),So();else if((n==null?void 0:n.type)==="game"){const t=M.game,r=t&&(t.turn!==n.game.turn||t.round!==n.game.round);M.game=n.game,M.players=n.game.players,M.clientId=n.viewer,M.mode="online-guest",M.screen=n.game.phase==="finished"?"result":"game",r&&(M.selected=null,M.submittedTurn=!1),M.submittedTurn=!!((e=n.game.readyPlayers)!=null&&e.includes(n.viewer)),M.recoveringGuest=!1,yi()}else(n==null?void 0:n.type)==="error"&&(M.busy=!1,vi(n.message))}function uI(n){var t,r,s;if(M.animating||((t=M.game)==null?void 0:t.phase)!=="choosing")return;ka("card");const e=(r=document.querySelector(`.hand-card[data-card="${n}"]`))==null?void 0:r.getBoundingClientRect();if(e&&(M.revealOrigins[M.clientId]={left:e.left,top:e.top,width:e.width,height:e.height}),M.host){if(M.game.selections[M.clientId])return;M.game.selections[M.clientId]=n,Ol(),rr()}else(s=M.connection)!=null&&s.open&&(M.connection.send({type:"pick",card:n}),M.selected=n,M.submittedTurn=!0,yi())}function lg(n){var o;const e=M.game,t=e==null?void 0:e.pendingRowChoice;if(!e||!t||n<0||n>=e.rows.length)return;clearTimeout(M.disconnectAdvanceTimer),M.disconnectAdvanceTimer=null;const r=M.mode==="local"?(o=e.players[0])==null?void 0:o.id:M.clientId;!(t.playerId===r)&&!M.host||(AM(e,n),M.host?rr():yi())}function cI(n){var s,o;ka("row");const e=M.game,t=e==null?void 0:e.pendingRowChoice,r=M.mode==="local"?(s=e==null?void 0:e.players[0])==null?void 0:s.id:M.clientId;!t||t.playerId!==r||(M.mode==="local"||M.host?lg(n):(o=M.connection)!=null&&o.open&&M.connection.send({type:"choose-row",rowIndex:n}))}function So(){_s(!1),document.body.classList.remove("home-mode"),document.body.classList.add("match-mode","lobby-mode"),M.screen="lobby";const n=M.players.filter(s=>s.online!==!1).length,e=M.players.find(s=>s.id===M.clientId),t=!!(e!=null&&e.ready),r=Wt(M.roomId);ea(),ir(_i,`<section class="game-layout lobby-layout"><div class="lobby-row"><strong>ROOM CODE</strong><span class="room-code">${r}</span><span class="lobby-wait">${n<2?"Waiting for friends, or start a practice game now.":`${n} players connected`}</span></div><div class="tabletop"><div class="tabletop-head"><span>THE TABLE</span><strong>2–10 PLAYERS</strong></div><div class="row-empty">${n<2?"Share the invite link, or start now and a bot will join your table.":"Players are here. The host can start the game."}</div></div><div class="game-bottom lobby-bottom"><div></div><aside class="turn-side"><div class="turn-state">READY TO PLAY</div><p class="turn-message">${n<2?"Start now and play with one bot, or wait for friends to join.":"Everyone is here. Deal the cards!"}</p>${M.host?'<label class="field-label" for="lobbyBots">Bots to add</label><select class="select-field" id="lobbyBots"><option value="0">No bots</option><option value="1">1 bot</option><option value="2">2 bots</option><option value="3">3 bots</option></select><button class="primary-button lobby-start" id="beginOnline">Start game ↗</button>':`<button class="primary-button lobby-start lobby-ready" id="toggleReady">${t?"Ready ✓":"Ready up"}</button><div class="turn-help">${t?"You’re ready. Waiting for the host…":"Tap Ready when you’re set to play."}</div>`}</aside></div></section>`),Zt("#beginOnline",id),Zt("#toggleReady",()=>{var o;const s=!t;M.players=M.players.map(u=>u.id===M.clientId?{...u,ready:s}:u),(o=M.connection)==null||o.send({type:"ready",ready:s}),So()})}function LM(n,e){var t;(t=navigator.clipboard)==null||t.writeText(n).then(()=>vi(e)).catch(()=>vi("Could not copy. Select the room code to copy it."))}function dI(){const e=`${gM?LD:`${location.origin}${location.pathname}`}?room=${encodeURIComponent(M.roomId)}`;LM(e,"Invite link copied")}function xm(){return`<div class="card-back-design"><span class="back-emblem">${Er()}</span><b>TAKE<br>5</b><span class="back-stars">✦　✦　✦</span></div>`}function ug(n,e){clearTimeout(M.countdownTimer),M.countdownTimer=setTimeout(()=>{M.game!==n||n.phase!=="countdown"||(clearInterval(M.countdownInterval),M.countdownInterval=null,n.phase="choosing",delete n.countdownAt,AM(n),n.phase==="finished"&&(M.screen="result"),e?rr():yi())},Math.max(0,(n.countdownAt||Date.now()+3e3)-Date.now()))}function fI(n){if(clearInterval(M.countdownInterval),M.countdownInterval=null,n.phase!=="countdown")return;const e=()=>{const t=_i.querySelector("[data-countdown]");if(!t)return;const r=Math.max(0,(n.countdownAt-Date.now())/1e3);t.textContent=r>0?String(Math.ceil(r)):"REVEAL"};e(),M.countdownInterval=setInterval(e,100)}function hI(){var t;if(document.querySelector(".clubhouse-ready"))return;const n=Array.from(_i.querySelectorAll(".stage-card-back"));if(!n.length)return;const e=[];for(const r of n){const s=r.dataset.stagePlayer;if(M.stageSeen.has(s))continue;M.stageSeen.add(s);const o=Array.from(document.querySelectorAll("[data-player-id]")).find(v=>v.dataset.playerId===s),u=M.revealOrigins[s]||((t=o==null?void 0:o.querySelector(".opponent-cards"))==null?void 0:t.getBoundingClientRect())||(o==null?void 0:o.getBoundingClientRect()),d=r.getBoundingClientRect();if(!u){r.classList.remove("stage-pending");continue}const f=document.createElement("div");f.className="flying-back",f.innerHTML=xm(),document.body.append(f);const h={x:u.left+u.width/2,y:u.top+u.height/2},g={x:d.left+d.width/2,y:d.top+d.height/2};f.style.left=`${h.x}px`,f.style.top=`${h.y}px`;const m=(async()=>{try{await f.animate([{left:`${h.x}px`,top:`${h.y}px`,transform:"translate(-50%,-50%) scale(.5) rotate(-7deg)"},{left:`${g.x}px`,top:`${g.y}px`,transform:"translate(-50%,-50%) scale(1) rotate(0deg)"}],{duration:330,easing:"cubic-bezier(.18,.75,.25,1)",fill:"forwards"}).finished}catch{}f.remove(),r.classList.remove("stage-pending")})();e.push(m)}Promise.all(e)}function pI(n){var t;if(!((t=n.lastReveal)!=null&&t.length))return;const e=`${n.round}:${n.turn}:${n.lastReveal.map(r=>`${r.playerId}-${r.card}`).join(",")}`;e!==M.replayKey&&(M.replayKey=e,M.replay={key:e,reveals:n.lastReveal.map(r=>({...r})),seen:new Set,active:!0,running:!1},M.revealOrigins=M.revealOrigins||{},M.animating=!0)}function iS(n){return new Promise(e=>setTimeout(e,n))}async function mI(){var r,s,o,u,d;const n=M.replay;if(!(n!=null&&n.active)||n.running)return;ka("deal"),n.running=!0,M.animating=!0;const e=matchMedia("(prefers-reduced-motion: reduce)").matches,t=e?180:500;if(await iS(e?150:720),!await mD(n.reveals))for(const f of n.reveals){if(M.replay!==n||M.screen==="home")break;const h=_i.querySelector(`.row-lane[data-row-index="${f.rowIndex}"]`),g=_i.querySelector(`.playing-card[data-row-index="${f.rowIndex}"][data-card-number="${f.card}"]`),m=g||(h==null?void 0:h.querySelector(".row-cards"));let v=(r=M.revealOrigins)==null?void 0:r[f.playerId];if(!v){const S=Array.from(document.querySelectorAll("[data-player-id]")).find(w=>w.dataset.playerId===f.playerId);v=((s=S==null?void 0:S.querySelector(".opponent-cards"))==null?void 0:s.getBoundingClientRect())||(S==null?void 0:S.getBoundingClientRect())||((o=_i.querySelector(".hand-area"))==null?void 0:o.getBoundingClientRect())}if(!v||!m){n.seen.add(f.card),g==null||g.classList.remove("reveal-pending");continue}const x={x:v.left+v.width/2,y:v.top+v.height/2},E=m.getBoundingClientRect(),T={x:E.left+E.width/2,y:E.top+E.height/2},y=document.createElement("div");y.className="flying-card",y.innerHTML=oo(f.card),document.body.append(y),y.style.left=`${x.x}px`,y.style.top=`${x.y}px`;try{await y.animate([{left:`${x.x}px`,top:`${x.y}px`,transform:"translate(-50%,-50%) scale(.62) rotate(-5deg)"},{left:`${(x.x+T.x)/2}px`,top:`${(x.y+T.y)/2-24}px`,transform:"translate(-50%,-50%) scale(.86) rotate(2deg)"},{left:`${T.x}px`,top:`${T.y}px`,transform:"translate(-50%,-50%) scale(1) rotate(0deg)"}],{duration:t,easing:"cubic-bezier(.2,.78,.24,1)",fill:"forwards"}).finished}catch{}if(y.remove(),M.replay!==n)break;n.seen.add(f.card),g==null||g.classList.remove("reveal-pending"),h==null||h.classList.add("card-landed"),setTimeout(()=>h==null?void 0:h.classList.remove("card-landed"),360),await iS(e?40:130)}M.replay===n&&(n.active=!1,n.running=!1,M.animating=!1,M.revealOrigins={},((u=M.game)==null?void 0:u.phase)==="finished"?(M.screen="result",cg()):((d=M.game)==null?void 0:d.phase)==="round-break"?(eI(M.game),M.stageSeen=new Set,M.stageTurnKey=null,M.host?rr():yi()):yi())}function yi(){var y,S,w,D,L,O,I,b,C,V;if(!M.game)return;const n=M.game;if(pI(n),M.screen==="result"&&!((y=M.replay)!=null&&y.active)){cg();return}document.body.classList.remove("home-mode","lobby-mode"),document.body.classList.add("match-mode"),M.screen="game",ea();const e=n.players.find(U=>U.id===M.clientId)||n.players[0],t=(e==null?void 0:e.hand)||[],r=n.phase==="choosing",s=(S=M.mode)==null?void 0:S.startsWith("online"),o=n.readyPlayers||Object.keys(n.selections||{}),u=s&&(!!((w=n.selections)!=null&&w[M.clientId])||o.includes(M.clientId)||M.submittedTurn);(D=e==null?void 0:e.hand)==null||D.length;const d=`${n.round}:${n.turn}`;M.stageTurnKey!==d&&(M.stageTurnKey=d,M.stageSeen=new Set);const f=new Set(o);s&&u&&f.add(M.clientId);const h=n.players.filter(U=>f.has(U.id)),g=((L=n.selections)==null?void 0:L[e.id])??(u?M.selected:null),m=g==null?t:t.filter(U=>U!==g),v=new Set((O=M.replay)!=null&&O.active?M.replay.reveals.filter(U=>!M.replay.seen.has(U.card)).map(U=>`${U.rowIndex}:${U.card}`):[]),x=n.phase==="row-choice"?n.pendingRowChoice:null,E=!!x&&x.playerId===e.id,T=x?n.players.find(U=>U.id===x.playerId):null;pD(n,e.id,(I=M.replay)==null?void 0:I.active),ir(_i,`<section class="game-layout">
  <div class="tabletop"><div class="tabletop-head"><span>✦ THE MEADOW TABLE ✦</span><strong>ROUND ${n.round} <span>·</span> TURN ${Math.min(n.turn,10)} OF 10</strong></div><div class="rows">${n.rows.map((U,z)=>{var Y;const $=U.reduce((B,se)=>B+ni(se),0);return`<div class="row-lane ${(Y=n.lastReveal)!=null&&Y.some(B=>B.rowIndex===z&&B.playerId===e.id&&B.tookRow)?"target":""}" data-row-index="${z}"><div class="row-label"><span>ROW ${z+1}</span></div><b class="row-total bull-counter-badge" aria-label="${$} bullheads"><strong>${$}</strong>${Er()}</b><div class="row-cards">${U.map(B=>`<div class="playing-card ${v.has(`${z}:${B}`)?"reveal-pending":""}" data-row-index="${z}" data-card-number="${B}" aria-label="${B}, ${ni(B)} bullheads">${oo(B)}</div>`).join("")}</div></div>`}).join("")}</div></div>
  <div class="stage-zone ${h.length?"has-cards":""} ${n.phase==="countdown"?"countdown-active":""}">${h.map(U=>{var $;const z=(($=n.selections)==null?void 0:$[U.id])??(U.id===(x==null?void 0:x.playerId)?x.card:null);return x&&Number.isInteger(z)?`<div class="stage-reveal-card" data-stage-player="${Wt(U.id)}" aria-label="${Wt(U.name)} played ${z}">${oo(z)}<small>${Wt(U.name)} · ${z}</small></div>`:`<div class="stage-card-back ${M.stageSeen.has(U.id)?"":"stage-pending"}" data-stage-player="${Wt(U.id)}">${xm()}<small>${Wt(U.name)}</small></div>`}).join("")}${n.phase==="countdown"?'<div class="reveal-countdown"><span>REVEALING IN</span><strong data-countdown>3</strong></div>':""}</div>
  ${(b=M.replay)!=null&&b.active?`<div class="reveal-bay">${M.replay.reveals.map(U=>{var z;return`<div class="reveal-card"><div class="reveal-flip"><div class="reveal-side reveal-back">${xm()}</div><div class="reveal-side reveal-front">${oo(U.card)}</div></div><small>${Wt(((z=n.players.find($=>$.id===U.playerId))==null?void 0:z.name)||U.name||"Player")}</small></div>`}).join("")}</div>`:""}
  ${x?`<section class="row-choice-bay ${E?"is-your-choice":"is-waiting"}" aria-labelledby="rowChoiceTitle" aria-live="polite">
    <div class="row-choice-header">
      <div class="row-choice-card">${oo(x.card)}</div>
      <div class="row-choice-copy"><span class="row-choice-eyebrow">${E?"YOUR LOW CARD":"ROW CHOICE"}</span><h2 id="rowChoiceTitle">${E?"Choose a row to collect":`#${Wt((T==null?void 0:T.name)||"Player")} waiting for a row choice`}</h2><p>${E?"Pick the row of bullheads you want to take.":`${Wt((T==null?void 0:T.name)||"The player")} is choosing which row to collect.`}</p></div>
    </div>
    <div class="row-choice-options" role="group" aria-label="Choose a row">
      ${n.rows.map((U,z)=>{const $=U.reduce((Y,B)=>Y+ni(B),0);return`<button class="row-choice-option" data-row-choice="${z}" aria-label="Row ${z+1}, take ${$} ${$===1?"bullhead":"bullheads"}" ${E?"":"disabled"}><span class="row-choice-option-top"><b>ROW ${String(z+1).padStart(2,"0")}</b><strong class="row-choice-penalty bull-counter-badge" aria-hidden="true"><span>${$}</span>${Er()}</strong></span><span class="row-choice-preview" aria-hidden="true">${U.map(Y=>`<i>${Y}</i>`).join("")}</span><span class="row-choice-action">${E?"Take row":"Waiting"} <b aria-hidden="true">→</b></span></button>`}).join("")}
    </div>
  </section>`:""}
  <div class="game-bottom"><section class="hand-area" data-player-id="${Wt(e.id)}"><div class="hand-heading"><h2><span class="your-avatar">${EM(e,0)}</span> Your hand <span class="my-score" aria-label="Your score: ${e.total||0} bullheads"><b>${e.total||0}</b>${Er()}</span>${s?`<span class="hand-reaction-control"><button type="button" class="hand-reaction-trigger" aria-label="Open reactions" aria-expanded="false">☺</button><span class="hand-reaction-picker" role="group" aria-label="Choose a reaction" hidden>${zl.map(U=>`<button type="button" class="hand-reaction-option" data-reaction="${U}" aria-label="Send ${U} reaction">${U}</button>`).join("")}</span></span>`:""}</h2><span>${u?"PICK LOCKED IN":"PICK YOUR CARD"}</span></div><div class="hand" role="group" aria-label="Your cards">${m.map((U,z)=>`<button class="hand-card ${M.selected===U?"selected":""}" style="--hand-index:${z}" data-card="${U}" aria-label="Card ${U}, ${ni(U)} bullheads${M.selected===U?", selected":""}" aria-pressed="${M.selected===U}" ${!r||u||M.animating?"disabled":""}>${oo(U)}</button>`).join("")}</div></section><aside class="turn-side"><div class="turn-state ${u?"done":s?"waiting":""}">${u?"PICK LOCKED IN":s?"EVERYONE PICKS AT ONCE":"YOUR TURN"}</div><p class="turn-message">${u?s?"Waiting for the other players…":"Your card is away. Let’s see where it lands.":"Pick a card and dodge those bullheads."}</p><button id="playCard" class="primary-button play-button" ${M.selected===null||u||!r||M.animating?"disabled":""}>Play card <span>↗</span></button><div class="turn-help">${(C=M.lastReveal)!=null&&C.length?gI(n.lastReveal,e.id):"Lowest bigger card wins the row."}</div></aside></div></section>`),Zt("[data-card]",(U,z)=>{z.getAttribute("aria-disabled")!=="true"&&(M.selected=+z.dataset.card,yi())}),Zt("#playCard",()=>{M.selected!=null&&!M.animating&&(M.mode==="local"?tI(M.selected):uI(M.selected))}),Zt("[data-row-choice]",(U,z)=>cI(+z.dataset.rowChoice)),Zt(".hand-reaction-trigger",(U,z)=>{var B;const $=z.nextElementSibling,Y=z.getAttribute("aria-expanded")!=="true";z.setAttribute("aria-expanded",String(Y)),$.hidden=!Y,(B=z.closest(".hand-reaction-control"))==null||B.classList.toggle("is-expanded",Y)}),Zt(".hand-reaction-option",(U,z)=>RM(z.dataset.reaction)),n.phase==="countdown"?fI(n):(clearInterval(M.countdownInterval),M.countdownInterval=null),hI(),(V=M.replay)!=null&&V.active&&mI()}function gI(n,e){const t=n.find(r=>r.playerId===e);return t?`${t.penalty?`You took ${t.penalty} bullheads.`:`Your ${t.card} landed in row ${t.rowIndex+1}.`} ${n.length>1?n.filter(r=>r.playerId!==e).map(r=>`${Wt(r.name)} ${r.penalty?`took ${r.penalty} bulls`:`played ${r.card}`}`).join(" · "):""}`:n.map(r=>`${Wt(r.name)} played ${r.card}${r.penalty?` and took ${r.penalty} bulls`:""}`).join(" · ")}function cg(){document.body.classList.add("match-mode"),M.screen="result",ea();const n=M.game.players.slice().sort((t,r)=>t.total-r.total),e=n[0];ir(_i,`<section class="result-screen"><div class="result-mark">🏆</div><div class="eyebrow">THAT’S A WRAP</div><h1>${e.id===M.clientId?"You kept your cool!":`${Wt(e.name)} takes it!`}</h1><p>Fewest bullheads at the table. A suspiciously good run.</p><div class="final-scores">${n.map((t,r)=>`<div class="final-score"><span>${r===0?"✳ ":""}${Wt(t.name)}${t.id===M.clientId?" (you)":""}</span><b aria-label="${t.total} bullheads">${t.total}${Er()}</b></div>`).join("")}</div><button class="primary-button lobby-start" id="playAgain">Play again ↗</button><button class="pill-button" id="backHome">Back to table</button></section>`),Zt("#playAgain",()=>{M.mode.startsWith("online")?M.host?(M.players.forEach(r=>{r.score=0,r.total=0}),id()):vi("Ask the host to start another game."):ig()}),Zt("#backHome",DM)}function pd(){if(M.peer)try{M.peer.destroy()}catch{}clearTimeout(M.countdownTimer),clearInterval(M.countdownInterval),clearTimeout(M.reconnectTimer),clearTimeout(M.peerReconnectTimer),clearTimeout(M.disconnectAdvanceTimer),document.querySelectorAll(".flying-card,.flying-back").forEach(n=>n.remove()),M.animating=!1,M.replay=null,M.replayKey=null,M.revealOrigins={},M.stageSeen=new Set,M.stageTurnKey=null,M.reactionCooldowns.clear(),M.recoveringGuest=!1,M.resumeToken=null,M.peer=null,M.connection=null,M.connections.clear(),M.host=!1,M.clientId=null,M.roomId="",M.players=[],history.replaceState({},"",location.pathname)}function DM(){M.host&&localStorage.removeItem(Jm),localStorage.removeItem(ms),pd(),M.screen="home",M.game=null,M.selected=null,M.tab="rooms",M.screenTransition=!0,Fa()}export{Ym as W};
