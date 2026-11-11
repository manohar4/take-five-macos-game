(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const lb="modulepreload",ub=function(n){return"/"+n},C0={},aS=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let u=function(h){return Promise.all(h.map(g=>Promise.resolve(g).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));s=u(t.map(h=>{if(h=ub(h),h in C0)return;C0[h]=!0;const g=h.endsWith(".css"),m=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const v=document.createElement("link");if(v.rel=g?"stylesheet":lb,g||(v.as="script"),v.crossOrigin="",v.href=h,f&&v.setAttribute("nonce",f),document.head.appendChild(v),g)return new Promise((x,E)=>{v.addEventListener("load",x),v.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return s.then(u=>{for(const d of u||[])d.status==="rejected"&&o(d.reason);return e().catch(o)})};function Si(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function sS(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var s=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:function(){return n[r]}})}),t}var Wf={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0;function cb(){if(P0)return xt;P0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),m=Symbol.iterator;function v(k){return k===null||typeof k!="object"?null:(k=m&&k[m]||k["@@iterator"],typeof k=="function"?k:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(k,ie,Ce){this.props=k,this.context=ie,this.refs=T,this.updater=Ce||x}y.prototype.isReactComponent={},y.prototype.setState=function(k,ie){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,ie,"setState")},y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function S(){}S.prototype=y.prototype;function b(k,ie,Ce){this.props=k,this.context=ie,this.refs=T,this.updater=Ce||x}var N=b.prototype=new S;N.constructor=b,E(N,y.prototype),N.isPureReactComponent=!0;var L=Array.isArray,O=Object.prototype.hasOwnProperty,D={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function P(k,ie,Ce){var se,xe={},Me=null,Re=null;if(ie!=null)for(se in ie.ref!==void 0&&(Re=ie.ref),ie.key!==void 0&&(Me=""+ie.key),ie)O.call(ie,se)&&!w.hasOwnProperty(se)&&(xe[se]=ie[se]);var ye=arguments.length-2;if(ye===1)xe.children=Ce;else if(1<ye){for(var Ue=Array(ye),ut=0;ut<ye;ut++)Ue[ut]=arguments[ut+2];xe.children=Ue}if(k&&k.defaultProps)for(se in ye=k.defaultProps,ye)xe[se]===void 0&&(xe[se]=ye[se]);return{$$typeof:n,type:k,key:Me,ref:Re,props:xe,_owner:D.current}}function V(k,ie){return{$$typeof:n,type:k.type,key:ie,ref:k.ref,props:k.props,_owner:k._owner}}function I(k){return typeof k=="object"&&k!==null&&k.$$typeof===n}function z(k){var ie={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Ce){return ie[Ce]})}var W=/\/+/g;function Z(k,ie){return typeof k=="object"&&k!==null&&k.key!=null?z(""+k.key):ie.toString(36)}function B(k,ie,Ce,se,xe){var Me=typeof k;(Me==="undefined"||Me==="boolean")&&(k=null);var Re=!1;if(k===null)Re=!0;else switch(Me){case"string":case"number":Re=!0;break;case"object":switch(k.$$typeof){case n:case e:Re=!0}}if(Re)return Re=k,xe=xe(Re),k=se===""?"."+Z(Re,0):se,L(xe)?(Ce="",k!=null&&(Ce=k.replace(W,"$&/")+"/"),B(xe,ie,Ce,"",function(ut){return ut})):xe!=null&&(I(xe)&&(xe=V(xe,Ce+(!xe.key||Re&&Re.key===xe.key?"":(""+xe.key).replace(W,"$&/")+"/")+k)),ie.push(xe)),1;if(Re=0,se=se===""?".":se+":",L(k))for(var ye=0;ye<k.length;ye++){Me=k[ye];var Ue=se+Z(Me,ye);Re+=B(Me,ie,Ce,Ue,xe)}else if(Ue=v(k),typeof Ue=="function")for(k=Ue.call(k),ye=0;!(Me=k.next()).done;)Me=Me.value,Ue=se+Z(Me,ye++),Re+=B(Me,ie,Ce,Ue,xe);else if(Me==="object")throw ie=String(k),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return Re}function le(k,ie,Ce){if(k==null)return k;var se=[],xe=0;return B(k,se,"","",function(Me){return ie.call(Ce,Me,xe++)}),se}function re(k){if(k._status===-1){var ie=k._result;ie=ie(),ie.then(function(Ce){(k._status===0||k._status===-1)&&(k._status=1,k._result=Ce)},function(Ce){(k._status===0||k._status===-1)&&(k._status=2,k._result=Ce)}),k._status===-1&&(k._status=0,k._result=ie)}if(k._status===1)return k._result.default;throw k._result}var ne={current:null},K={transition:null},q={ReactCurrentDispatcher:ne,ReactCurrentBatchConfig:K,ReactCurrentOwner:D};function J(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:le,forEach:function(k,ie,Ce){le(k,function(){ie.apply(this,arguments)},Ce)},count:function(k){var ie=0;return le(k,function(){ie++}),ie},toArray:function(k){return le(k,function(ie){return ie})||[]},only:function(k){if(!I(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},xt.Component=y,xt.Fragment=t,xt.Profiler=s,xt.PureComponent=b,xt.StrictMode=r,xt.Suspense=f,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,xt.act=J,xt.cloneElement=function(k,ie,Ce){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var se=E({},k.props),xe=k.key,Me=k.ref,Re=k._owner;if(ie!=null){if(ie.ref!==void 0&&(Me=ie.ref,Re=D.current),ie.key!==void 0&&(xe=""+ie.key),k.type&&k.type.defaultProps)var ye=k.type.defaultProps;for(Ue in ie)O.call(ie,Ue)&&!w.hasOwnProperty(Ue)&&(se[Ue]=ie[Ue]===void 0&&ye!==void 0?ye[Ue]:ie[Ue])}var Ue=arguments.length-2;if(Ue===1)se.children=Ce;else if(1<Ue){ye=Array(Ue);for(var ut=0;ut<Ue;ut++)ye[ut]=arguments[ut+2];se.children=ye}return{$$typeof:n,type:k.type,key:xe,ref:Me,props:se,_owner:Re}},xt.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:o,_context:k},k.Consumer=k},xt.createElement=P,xt.createFactory=function(k){var ie=P.bind(null,k);return ie.type=k,ie},xt.createRef=function(){return{current:null}},xt.forwardRef=function(k){return{$$typeof:d,render:k}},xt.isValidElement=I,xt.lazy=function(k){return{$$typeof:g,_payload:{_status:-1,_result:k},_init:re}},xt.memo=function(k,ie){return{$$typeof:h,type:k,compare:ie===void 0?null:ie}},xt.startTransition=function(k){var ie=K.transition;K.transition={};try{k()}finally{K.transition=ie}},xt.unstable_act=J,xt.useCallback=function(k,ie){return ne.current.useCallback(k,ie)},xt.useContext=function(k){return ne.current.useContext(k)},xt.useDebugValue=function(){},xt.useDeferredValue=function(k){return ne.current.useDeferredValue(k)},xt.useEffect=function(k,ie){return ne.current.useEffect(k,ie)},xt.useId=function(){return ne.current.useId()},xt.useImperativeHandle=function(k,ie,Ce){return ne.current.useImperativeHandle(k,ie,Ce)},xt.useInsertionEffect=function(k,ie){return ne.current.useInsertionEffect(k,ie)},xt.useLayoutEffect=function(k,ie){return ne.current.useLayoutEffect(k,ie)},xt.useMemo=function(k,ie){return ne.current.useMemo(k,ie)},xt.useReducer=function(k,ie,Ce){return ne.current.useReducer(k,ie,Ce)},xt.useRef=function(k){return ne.current.useRef(k)},xt.useState=function(k){return ne.current.useState(k)},xt.useSyncExternalStore=function(k,ie,Ce){return ne.current.useSyncExternalStore(k,ie,Ce)},xt.useTransition=function(){return ne.current.useTransition()},xt.version="18.3.1",xt}var L0;function oS(){return L0||(L0=1,Wf.exports=cb()),Wf.exports}var at=oS();const fo=Si(at);var Gu={},$f={exports:{}},Jn={},Xf={exports:{}},qf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0;function db(){return D0||(D0=1,(function(n){function e(K,q){var J=K.length;K.push(q);e:for(;0<J;){var k=J-1>>>1,ie=K[k];if(0<s(ie,q))K[k]=q,K[J]=ie,J=k;else break e}}function t(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var q=K[0],J=K.pop();if(J!==q){K[0]=J;e:for(var k=0,ie=K.length,Ce=ie>>>1;k<Ce;){var se=2*(k+1)-1,xe=K[se],Me=se+1,Re=K[Me];if(0>s(xe,J))Me<ie&&0>s(Re,xe)?(K[k]=Re,K[Me]=J,k=Me):(K[k]=xe,K[se]=J,k=se);else if(Me<ie&&0>s(Re,J))K[k]=Re,K[Me]=J,k=Me;else break e}}return q}function s(K,q){var J=K.sortIndex-q.sortIndex;return J!==0?J:K.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],h=[],g=1,m=null,v=3,x=!1,E=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(K){for(var q=t(h);q!==null;){if(q.callback===null)r(h);else if(q.startTime<=K)r(h),q.sortIndex=q.expirationTime,e(f,q);else break;q=t(h)}}function L(K){if(T=!1,N(K),!E)if(t(f)!==null)E=!0,re(O);else{var q=t(h);q!==null&&ne(L,q.startTime-K)}}function O(K,q){E=!1,T&&(T=!1,S(P),P=-1),x=!0;var J=v;try{for(N(q),m=t(f);m!==null&&(!(m.expirationTime>q)||K&&!z());){var k=m.callback;if(typeof k=="function"){m.callback=null,v=m.priorityLevel;var ie=k(m.expirationTime<=q);q=n.unstable_now(),typeof ie=="function"?m.callback=ie:m===t(f)&&r(f),N(q)}else r(f);m=t(f)}if(m!==null)var Ce=!0;else{var se=t(h);se!==null&&ne(L,se.startTime-q),Ce=!1}return Ce}finally{m=null,v=J,x=!1}}var D=!1,w=null,P=-1,V=5,I=-1;function z(){return!(n.unstable_now()-I<V)}function W(){if(w!==null){var K=n.unstable_now();I=K;var q=!0;try{q=w(!0,K)}finally{q?Z():(D=!1,w=null)}}else D=!1}var Z;if(typeof b=="function")Z=function(){b(W)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,le=B.port2;B.port1.onmessage=W,Z=function(){le.postMessage(null)}}else Z=function(){y(W,0)};function re(K){w=K,D||(D=!0,Z())}function ne(K,q){P=y(function(){K(n.unstable_now())},q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(K){K.callback=null},n.unstable_continueExecution=function(){E||x||(E=!0,re(O))},n.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<K?Math.floor(1e3/K):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(K){switch(v){case 1:case 2:case 3:var q=3;break;default:q=v}var J=v;v=q;try{return K()}finally{v=J}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(K,q){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var J=v;v=K;try{return q()}finally{v=J}},n.unstable_scheduleCallback=function(K,q,J){var k=n.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?k+J:k):J=k,K){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=J+ie,K={id:g++,callback:q,priorityLevel:K,startTime:J,expirationTime:ie,sortIndex:-1},J>k?(K.sortIndex=J,e(h,K),t(f)===null&&K===t(h)&&(T?(S(P),P=-1):T=!0,ne(L,J-k))):(K.sortIndex=ie,e(f,K),E||x||(E=!0,re(O))),K},n.unstable_shouldYield=z,n.unstable_wrapCallback=function(K){var q=v;return function(){var J=v;v=q;try{return K.apply(this,arguments)}finally{v=J}}}})(qf)),qf}var I0;function fb(){return I0||(I0=1,Xf.exports=db()),Xf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function hb(){if(N0)return Jn;N0=1;var n=oS(),e=fb();function t(i){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)a+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function o(i,a){u(i,a),u(i+"Capture",a)}function u(i,a){for(s[i]=a,i=0;i<a.length;i++)r.add(a[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},m={};function v(i){return f.call(m,i)?!0:f.call(g,i)?!1:h.test(i)?m[i]=!0:(g[i]=!0,!1)}function x(i,a,l,c){if(l!==null&&l.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return c?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,a,l,c){if(a===null||typeof a>"u"||x(i,a,l,c))return!0;if(c)return!1;if(l!==null)switch(l.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function T(i,a,l,c,p,_,A){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=a,this.sanitizeURL=_,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new T(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var a=i[0];y[a]=new T(a,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new T(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new T(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new T(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new T(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new T(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new T(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new T(i,5,!1,i.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function b(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var a=i.replace(S,b);y[a]=new T(a,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var a=i.replace(S,b);y[a]=new T(a,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var a=i.replace(S,b);y[a]=new T(a,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new T(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new T(i,1,!1,i.toLowerCase(),null,!0,!0)});function N(i,a,l,c){var p=y.hasOwnProperty(a)?y[a]:null;(p!==null?p.type!==0:c||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(E(a,l,p,c)&&(l=null),c||p===null?v(a)&&(l===null?i.removeAttribute(a):i.setAttribute(a,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(a=p.attributeName,c=p.attributeNamespace,l===null?i.removeAttribute(a):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,c?i.setAttributeNS(c,a,l):i.setAttribute(a,l))))}var L=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),D=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),I=Symbol.for("react.provider"),z=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),ne=Symbol.for("react.offscreen"),K=Symbol.iterator;function q(i){return i===null||typeof i!="object"?null:(i=K&&i[K]||i["@@iterator"],typeof i=="function"?i:null)}var J=Object.assign,k;function ie(i){if(k===void 0)try{throw Error()}catch(l){var a=l.stack.trim().match(/\n( *(at )?)/);k=a&&a[1]||""}return`
`+k+i}var Ce=!1;function se(i,a){if(!i||Ce)return"";Ce=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(_e){var c=_e}Reflect.construct(i,[],a)}else{try{a.call()}catch(_e){c=_e}i.call(a.prototype)}else{try{throw Error()}catch(_e){c=_e}i()}}catch(_e){if(_e&&c&&typeof _e.stack=="string"){for(var p=_e.stack.split(`
`),_=c.stack.split(`
`),A=p.length-1,H=_.length-1;1<=A&&0<=H&&p[A]!==_[H];)H--;for(;1<=A&&0<=H;A--,H--)if(p[A]!==_[H]){if(A!==1||H!==1)do if(A--,H--,0>H||p[A]!==_[H]){var Y=`
`+p[A].replace(" at new "," at ");return i.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",i.displayName)),Y}while(1<=A&&0<=H);break}}}finally{Ce=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?ie(i):""}function xe(i){switch(i.tag){case 5:return ie(i.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return i=se(i.type,!1),i;case 11:return i=se(i.type.render,!1),i;case 1:return i=se(i.type,!0),i;default:return""}}function Me(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case w:return"Fragment";case D:return"Portal";case V:return"Profiler";case P:return"StrictMode";case Z:return"Suspense";case B:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case z:return(i.displayName||"Context")+".Consumer";case I:return(i._context.displayName||"Context")+".Provider";case W:var a=i.render;return i=i.displayName,i||(i=a.displayName||a.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case le:return a=i.displayName||null,a!==null?a:Me(i.type)||"Memo";case re:a=i._payload,i=i._init;try{return Me(i(a))}catch{}}return null}function Re(i){var a=i.type;switch(i.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=a.render,i=i.displayName||i.name||"",a.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(a);case 8:return a===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function ye(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ue(i){var a=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function ut(i){var a=Ue(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,a),c=""+i[a];if(!i.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,a,{configurable:!0,get:function(){return p.call(this)},set:function(A){c=""+A,_.call(this,A)}}),Object.defineProperty(i,a,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){i._valueTracker=null,delete i[a]}}}}function Je(i){i._valueTracker||(i._valueTracker=ut(i))}function pt(i){if(!i)return!1;var a=i._valueTracker;if(!a)return!0;var l=a.getValue(),c="";return i&&(c=Ue(i)?i.checked?"true":"false":i.value),i=c,i!==l?(a.setValue(i),!0):!1}function yt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function ot(i,a){var l=a.checked;return J({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Ft(i,a){var l=a.defaultValue==null?"":a.defaultValue,c=a.checked!=null?a.checked:a.defaultChecked;l=ye(a.value!=null?a.value:l),i._wrapperState={initialChecked:c,initialValue:l,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function kt(i,a){a=a.checked,a!=null&&N(i,"checked",a,!1)}function Xt(i,a){kt(i,a);var l=ye(a.value),c=a.type;if(l!=null)c==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(c==="submit"||c==="reset"){i.removeAttribute("value");return}a.hasOwnProperty("value")?hn(i,a.type,l):a.hasOwnProperty("defaultValue")&&hn(i,a.type,ye(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(i.defaultChecked=!!a.defaultChecked)}function vt(i,a,l){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var c=a.type;if(!(c!=="submit"&&c!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+i._wrapperState.initialValue,l||a===i.value||(i.value=a),i.defaultValue=a}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function hn(i,a,l){(a!=="number"||yt(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Nt=Array.isArray;function zt(i,a,l,c){if(i=i.options,a){a={};for(var p=0;p<l.length;p++)a["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=a.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&c&&(i[l].defaultSelected=!0)}else{for(l=""+ye(l),a=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,c&&(i[p].defaultSelected=!0);return}a!==null||i[p].disabled||(a=i[p])}a!==null&&(a.selected=!0)}}function an(i,a){if(a.dangerouslySetInnerHTML!=null)throw Error(t(91));return J({},a,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function pn(i,a){var l=a.value;if(l==null){if(l=a.children,a=a.defaultValue,l!=null){if(a!=null)throw Error(t(92));if(Nt(l)){if(1<l.length)throw Error(t(93));l=l[0]}a=l}a==null&&(a=""),l=a}i._wrapperState={initialValue:ye(l)}}function j(i,a){var l=ye(a.value),c=ye(a.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),a.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),c!=null&&(i.defaultValue=""+c)}function mn(i){var a=i.textContent;a===i._wrapperState.initialValue&&a!==""&&a!==null&&(i.value=a)}function bt(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ct(i,a){return i==null||i==="http://www.w3.org/1999/xhtml"?bt(a):i==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var De,Ht=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,l,c,p){MSApp.execUnsafeLocalFunction(function(){return i(a,l,c,p)})}:i})(function(i,a){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=a;else{for(De=De||document.createElement("div"),De.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=De.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;a.firstChild;)i.appendChild(a.firstChild)}});function Ze(i,a){if(a){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=a;return}}i.textContent=a}var tt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F=["Webkit","ms","Moz","O"];Object.keys(tt).forEach(function(i){F.forEach(function(a){a=a+i.charAt(0).toUpperCase()+i.substring(1),tt[a]=tt[i]})});function R(i,a,l){return a==null||typeof a=="boolean"||a===""?"":l||typeof a!="number"||a===0||tt.hasOwnProperty(i)&&tt[i]?(""+a).trim():a+"px"}function ue(i,a){i=i.style;for(var l in a)if(a.hasOwnProperty(l)){var c=l.indexOf("--")===0,p=R(l,a[l],c);l==="float"&&(l="cssFloat"),c?i.setProperty(l,p):i[l]=p}}var G=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function X(i,a){if(a){if(G[i]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(t(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(t(61))}if(a.style!=null&&typeof a.style!="object")throw Error(t(62))}}function ce(i,a){if(i.indexOf("-")===-1)return typeof a.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oe=null;function Q(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var te=null,Se=null,U=null;function ve(i){if(i=ko(i)){if(typeof te!="function")throw Error(t(280));var a=i.stateNode;a&&(a=iu(a),te(i.stateNode,i.type,a))}}function pe(i){Se?U?U.push(i):U=[i]:Se=i}function be(){if(Se){var i=Se,a=U;if(U=Se=null,ve(i),a)for(i=0;i<a.length;i++)ve(a[i])}}function Ae(i,a){return i(a)}function Le(){}var Xe=!1;function dt(i,a,l){if(Xe)return i(a,l);Xe=!0;try{return Ae(i,a,l)}finally{Xe=!1,(Se!==null||U!==null)&&(Le(),be())}}function we(i,a){var l=i.stateNode;if(l===null)return null;var c=iu(l);if(c===null)return null;l=c[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,a,typeof l));return l}var Qe=!1;if(d)try{var st={};Object.defineProperty(st,"passive",{get:function(){Qe=!0}}),window.addEventListener("test",st,st),window.removeEventListener("test",st,st)}catch{Qe=!1}function ke(i,a,l,c,p,_,A,H,Y){var _e=Array.prototype.slice.call(arguments,3);try{a.apply(l,_e)}catch(Te){this.onError(Te)}}var St=!1,qt=null,Ln=!1,ea=null,rr={onError:function(i){St=!0,qt=i}};function ta(i,a,l,c,p,_,A,H,Y){St=!1,qt=null,ke.apply(rr,arguments)}function Ba(i,a,l,c,p,_,A,H,Y){if(ta.apply(this,arguments),St){if(St){var _e=qt;St=!1,qt=null}else throw Error(t(198));Ln||(Ln=!0,ea=_e)}}function Mi(i){var a=i,l=i;if(i.alternate)for(;a.return;)a=a.return;else{i=a;do a=i,(a.flags&4098)!==0&&(l=a.return),i=a.return;while(i)}return a.tag===3?l:null}function ai(i){if(i.tag===13){var a=i.memoizedState;if(a===null&&(i=i.alternate,i!==null&&(a=i.memoizedState)),a!==null)return a.dehydrated}return null}function na(i){if(Mi(i)!==i)throw Error(t(188))}function ar(i){var a=i.alternate;if(!a){if(a=Mi(i),a===null)throw Error(t(188));return a!==i?null:i}for(var l=i,c=a;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(c=p.return,c!==null){l=c;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return na(p),i;if(_===c)return na(p),a;_=_.sibling}throw Error(t(188))}if(l.return!==c.return)l=p,c=_;else{for(var A=!1,H=p.child;H;){if(H===l){A=!0,l=p,c=_;break}if(H===c){A=!0,c=p,l=_;break}H=H.sibling}if(!A){for(H=_.child;H;){if(H===l){A=!0,l=_,c=p;break}if(H===c){A=!0,c=_,l=p;break}H=H.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==c)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:a}function ia(i){return i=ar(i),i!==null?ze(i):null}function ze(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var a=ze(i);if(a!==null)return a;i=i.sibling}return null}var za=e.unstable_scheduleCallback,zn=e.unstable_cancelCallback,sr=e.unstable_shouldYield,ys=e.unstable_requestPaint,Gt=e.unstable_now,Ha=e.unstable_getCurrentPriorityLevel,ra=e.unstable_ImmediatePriority,Ga=e.unstable_UserBlockingPriority,Ar=e.unstable_NormalPriority,Va=e.unstable_LowPriority,C=e.unstable_IdlePriority,$=null,he=null;function de(i){if(he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot($,i,void 0,(i.current.flags&128)===128)}catch{}}var ae=Math.clz32?Math.clz32:Ne,Oe=Math.log,Ge=Math.LN2;function Ne(i){return i>>>=0,i===0?32:31-(Oe(i)/Ge|0)|0}var Fe=64,Ve=4194304;function nt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function ht(i,a){var l=i.pendingLanes;if(l===0)return 0;var c=0,p=i.suspendedLanes,_=i.pingedLanes,A=l&268435455;if(A!==0){var H=A&~p;H!==0?c=nt(H):(_&=A,_!==0&&(c=nt(_)))}else A=l&~p,A!==0?c=nt(A):_!==0&&(c=nt(_));if(c===0)return 0;if(a!==0&&a!==c&&(a&p)===0&&(p=c&-c,_=a&-a,p>=_||p===16&&(_&4194240)!==0))return a;if((c&4)!==0&&(c|=l&16),a=i.entangledLanes,a!==0)for(i=i.entanglements,a&=c;0<a;)l=31-ae(a),p=1<<l,c|=i[l],a&=~p;return c}function We(i,a){switch(i){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mt(i,a){for(var l=i.suspendedLanes,c=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var A=31-ae(_),H=1<<A,Y=p[A];Y===-1?((H&l)===0||(H&c)!==0)&&(p[A]=We(H,a)):Y<=a&&(i.expiredLanes|=H),_&=~H}}function Bt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Lt(){var i=Fe;return Fe<<=1,(Fe&4194240)===0&&(Fe=64),i}function At(i){for(var a=[],l=0;31>l;l++)a.push(i);return a}function Yt(i,a,l){i.pendingLanes|=a,a!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,a=31-ae(a),i[a]=l}function $e(i,a){var l=i.pendingLanes&~a;i.pendingLanes=a,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=a,i.mutableReadLanes&=a,i.entangledLanes&=a,a=i.entanglements;var c=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-ae(l),_=1<<p;a[p]=0,c[p]=-1,i[p]=-1,l&=~_}}function sn(i,a){var l=i.entangledLanes|=a;for(i=i.entanglements;l;){var c=31-ae(l),p=1<<c;p&a|i[c]&a&&(i[c]|=a),l&=~p}}var Ye=0;function si(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var on,Fi,Xn,oi,_t,Jt=!1,_n=[],wt=null,Ot=null,cn=null,ki=new Map,aa=new Map,Bi=[],Hl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ss(i,a){switch(i){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":ki.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":aa.delete(a.pointerId)}}function Wa(i,a,l,c,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:a,domEventName:l,eventSystemFlags:c,nativeEvent:_,targetContainers:[p]},a!==null&&(a=ko(a),a!==null&&Fi(a)),i):(i.eventSystemFlags|=c,a=i.targetContainers,p!==null&&a.indexOf(p)===-1&&a.push(p),i)}function Gl(i,a,l,c,p){switch(a){case"focusin":return wt=Wa(wt,i,a,l,c,p),!0;case"dragenter":return Ot=Wa(Ot,i,a,l,c,p),!0;case"mouseover":return cn=Wa(cn,i,a,l,c,p),!0;case"pointerover":var _=p.pointerId;return ki.set(_,Wa(ki.get(_)||null,i,a,l,c,p)),!0;case"gotpointercapture":return _=p.pointerId,aa.set(_,Wa(aa.get(_)||null,i,a,l,c,p)),!0}return!1}function Eo(i){var a=Xa(i.target);if(a!==null){var l=Mi(a);if(l!==null){if(a=l.tag,a===13){if(a=ai(l),a!==null){i.blockedOn=a,_t(i.priority,function(){Xn(l)});return}}else if(a===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function $a(i){if(i.blockedOn!==null)return!1;for(var a=i.targetContainers;0<a.length;){var l=gd(i.domEventName,i.eventSystemFlags,a[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var c=new l.constructor(l.type,l);oe=c,l.target.dispatchEvent(c),oe=null}else return a=ko(l),a!==null&&Fi(a),i.blockedOn=l,!1;a.shift()}return!0}function bo(i,a,l){$a(i)&&l.delete(a)}function Vl(){Jt=!1,wt!==null&&$a(wt)&&(wt=null),Ot!==null&&$a(Ot)&&(Ot=null),cn!==null&&$a(cn)&&(cn=null),ki.forEach(bo),aa.forEach(bo)}function wo(i,a){i.blockedOn===a&&(i.blockedOn=null,Jt||(Jt=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Vl)))}function To(i){function a(p){return wo(p,i)}if(0<_n.length){wo(_n[0],i);for(var l=1;l<_n.length;l++){var c=_n[l];c.blockedOn===i&&(c.blockedOn=null)}}for(wt!==null&&wo(wt,i),Ot!==null&&wo(Ot,i),cn!==null&&wo(cn,i),ki.forEach(a),aa.forEach(a),l=0;l<Bi.length;l++)c=Bi[l],c.blockedOn===i&&(c.blockedOn=null);for(;0<Bi.length&&(l=Bi[0],l.blockedOn===null);)Eo(l),l.blockedOn===null&&Bi.shift()}var xs=L.ReactCurrentBatchConfig,Wl=!0;function IM(i,a,l,c){var p=Ye,_=xs.transition;xs.transition=null;try{Ye=1,md(i,a,l,c)}finally{Ye=p,xs.transition=_}}function NM(i,a,l,c){var p=Ye,_=xs.transition;xs.transition=null;try{Ye=4,md(i,a,l,c)}finally{Ye=p,xs.transition=_}}function md(i,a,l,c){if(Wl){var p=gd(i,a,l,c);if(p===null)Id(i,a,c,$l,l),Ss(i,c);else if(Gl(p,i,a,l,c))c.stopPropagation();else if(Ss(i,c),a&4&&-1<Hl.indexOf(i)){for(;p!==null;){var _=ko(p);if(_!==null&&on(_),_=gd(i,a,l,c),_===null&&Id(i,a,c,$l,l),_===p)break;p=_}p!==null&&c.stopPropagation()}else Id(i,a,c,null,l)}}var $l=null;function gd(i,a,l,c){if($l=null,i=Q(c),i=Xa(i),i!==null)if(a=Mi(i),a===null)i=null;else if(l=a.tag,l===13){if(i=ai(a),i!==null)return i;i=null}else if(l===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;i=null}else a!==i&&(i=null);return $l=i,null}function mg(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ha()){case ra:return 1;case Ga:return 4;case Ar:case Va:return 16;case C:return 536870912;default:return 16}default:return 16}}var sa=null,vd=null,Xl=null;function gg(){if(Xl)return Xl;var i,a=vd,l=a.length,c,p="value"in sa?sa.value:sa.textContent,_=p.length;for(i=0;i<l&&a[i]===p[i];i++);var A=l-i;for(c=1;c<=A&&a[l-c]===p[_-c];c++);return Xl=p.slice(i,1<c?1-c:void 0)}function ql(i){var a=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&a===13&&(i=13)):i=a,i===10&&(i=13),32<=i||i===13?i:0}function Yl(){return!0}function vg(){return!1}function li(i){function a(l,c,p,_,A){this._reactName=l,this._targetInst=p,this.type=c,this.nativeEvent=_,this.target=A,this.currentTarget=null;for(var H in i)i.hasOwnProperty(H)&&(l=i[H],this[H]=l?l(_):_[H]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Yl:vg,this.isPropagationStopped=vg,this}return J(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Yl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Yl)},persist:function(){},isPersistent:Yl}),a}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_d=li(Ms),Ro=J({},Ms,{view:0,detail:0}),OM=li(Ro),yd,Sd,Ao,Kl=J({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Md,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ao&&(Ao&&i.type==="mousemove"?(yd=i.screenX-Ao.screenX,Sd=i.screenY-Ao.screenY):Sd=yd=0,Ao=i),yd)},movementY:function(i){return"movementY"in i?i.movementY:Sd}}),_g=li(Kl),UM=J({},Kl,{dataTransfer:0}),FM=li(UM),kM=J({},Ro,{relatedTarget:0}),xd=li(kM),BM=J({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),zM=li(BM),HM=J({},Ms,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),GM=li(HM),VM=J({},Ms,{data:0}),yg=li(VM),WM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},XM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qM(i){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(i):(i=XM[i])?!!a[i]:!1}function Md(){return qM}var YM=J({},Ro,{key:function(i){if(i.key){var a=WM[i.key]||i.key;if(a!=="Unidentified")return a}return i.type==="keypress"?(i=ql(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?$M[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Md,charCode:function(i){return i.type==="keypress"?ql(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ql(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),KM=li(YM),ZM=J({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sg=li(ZM),jM=J({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Md}),JM=li(jM),QM=J({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),eE=li(QM),tE=J({},Kl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),nE=li(tE),iE=[9,13,27,32],Ed=d&&"CompositionEvent"in window,Co=null;d&&"documentMode"in document&&(Co=document.documentMode);var rE=d&&"TextEvent"in window&&!Co,xg=d&&(!Ed||Co&&8<Co&&11>=Co),Mg=" ",Eg=!1;function bg(i,a){switch(i){case"keyup":return iE.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wg(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Es=!1;function aE(i,a){switch(i){case"compositionend":return wg(a);case"keypress":return a.which!==32?null:(Eg=!0,Mg);case"textInput":return i=a.data,i===Mg&&Eg?null:i;default:return null}}function sE(i,a){if(Es)return i==="compositionend"||!Ed&&bg(i,a)?(i=gg(),Xl=vd=sa=null,Es=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return xg&&a.locale!=="ko"?null:a.data;default:return null}}var oE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tg(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a==="input"?!!oE[i.type]:a==="textarea"}function Rg(i,a,l,c){pe(c),a=eu(a,"onChange"),0<a.length&&(l=new _d("onChange","change",null,l,c),i.push({event:l,listeners:a}))}var Po=null,Lo=null;function lE(i){$g(i,0)}function Zl(i){var a=As(i);if(pt(a))return i}function uE(i,a){if(i==="change")return a}var Ag=!1;if(d){var bd;if(d){var wd="oninput"in document;if(!wd){var Cg=document.createElement("div");Cg.setAttribute("oninput","return;"),wd=typeof Cg.oninput=="function"}bd=wd}else bd=!1;Ag=bd&&(!document.documentMode||9<document.documentMode)}function Pg(){Po&&(Po.detachEvent("onpropertychange",Lg),Lo=Po=null)}function Lg(i){if(i.propertyName==="value"&&Zl(Lo)){var a=[];Rg(a,Lo,i,Q(i)),dt(lE,a)}}function cE(i,a,l){i==="focusin"?(Pg(),Po=a,Lo=l,Po.attachEvent("onpropertychange",Lg)):i==="focusout"&&Pg()}function dE(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Zl(Lo)}function fE(i,a){if(i==="click")return Zl(a)}function hE(i,a){if(i==="input"||i==="change")return Zl(a)}function pE(i,a){return i===a&&(i!==0||1/i===1/a)||i!==i&&a!==a}var zi=typeof Object.is=="function"?Object.is:pE;function Do(i,a){if(zi(i,a))return!0;if(typeof i!="object"||i===null||typeof a!="object"||a===null)return!1;var l=Object.keys(i),c=Object.keys(a);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var p=l[c];if(!f.call(a,p)||!zi(i[p],a[p]))return!1}return!0}function Dg(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Ig(i,a){var l=Dg(i);i=0;for(var c;l;){if(l.nodeType===3){if(c=i+l.textContent.length,i<=a&&c>=a)return{node:l,offset:a-i};i=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Dg(l)}}function Ng(i,a){return i&&a?i===a?!0:i&&i.nodeType===3?!1:a&&a.nodeType===3?Ng(i,a.parentNode):"contains"in i?i.contains(a):i.compareDocumentPosition?!!(i.compareDocumentPosition(a)&16):!1:!1}function Og(){for(var i=window,a=yt();a instanceof i.HTMLIFrameElement;){try{var l=typeof a.contentWindow.location.href=="string"}catch{l=!1}if(l)i=a.contentWindow;else break;a=yt(i.document)}return a}function Td(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a&&(a==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||a==="textarea"||i.contentEditable==="true")}function mE(i){var a=Og(),l=i.focusedElem,c=i.selectionRange;if(a!==l&&l&&l.ownerDocument&&Ng(l.ownerDocument.documentElement,l)){if(c!==null&&Td(l)){if(a=c.start,i=c.end,i===void 0&&(i=a),"selectionStart"in l)l.selectionStart=a,l.selectionEnd=Math.min(i,l.value.length);else if(i=(a=l.ownerDocument||document)&&a.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(c.start,p);c=c.end===void 0?_:Math.min(c.end,p),!i.extend&&_>c&&(p=c,c=_,_=p),p=Ig(l,_);var A=Ig(l,c);p&&A&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==A.node||i.focusOffset!==A.offset)&&(a=a.createRange(),a.setStart(p.node,p.offset),i.removeAllRanges(),_>c?(i.addRange(a),i.extend(A.node,A.offset)):(a.setEnd(A.node,A.offset),i.addRange(a)))}}for(a=[],i=l;i=i.parentNode;)i.nodeType===1&&a.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<a.length;l++)i=a[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var gE=d&&"documentMode"in document&&11>=document.documentMode,bs=null,Rd=null,Io=null,Ad=!1;function Ug(i,a,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ad||bs==null||bs!==yt(c)||(c=bs,"selectionStart"in c&&Td(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Io&&Do(Io,c)||(Io=c,c=eu(Rd,"onSelect"),0<c.length&&(a=new _d("onSelect","select",null,a,l),i.push({event:a,listeners:c}),a.target=bs)))}function jl(i,a){var l={};return l[i.toLowerCase()]=a.toLowerCase(),l["Webkit"+i]="webkit"+a,l["Moz"+i]="moz"+a,l}var ws={animationend:jl("Animation","AnimationEnd"),animationiteration:jl("Animation","AnimationIteration"),animationstart:jl("Animation","AnimationStart"),transitionend:jl("Transition","TransitionEnd")},Cd={},Fg={};d&&(Fg=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function Jl(i){if(Cd[i])return Cd[i];if(!ws[i])return i;var a=ws[i],l;for(l in a)if(a.hasOwnProperty(l)&&l in Fg)return Cd[i]=a[l];return i}var kg=Jl("animationend"),Bg=Jl("animationiteration"),zg=Jl("animationstart"),Hg=Jl("transitionend"),Gg=new Map,Vg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function oa(i,a){Gg.set(i,a),o(a,[i])}for(var Pd=0;Pd<Vg.length;Pd++){var Ld=Vg[Pd],vE=Ld.toLowerCase(),_E=Ld[0].toUpperCase()+Ld.slice(1);oa(vE,"on"+_E)}oa(kg,"onAnimationEnd"),oa(Bg,"onAnimationIteration"),oa(zg,"onAnimationStart"),oa("dblclick","onDoubleClick"),oa("focusin","onFocus"),oa("focusout","onBlur"),oa(Hg,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yE=new Set("cancel close invalid load scroll toggle".split(" ").concat(No));function Wg(i,a,l){var c=i.type||"unknown-event";i.currentTarget=l,Ba(c,a,void 0,i),i.currentTarget=null}function $g(i,a){a=(a&4)!==0;for(var l=0;l<i.length;l++){var c=i[l],p=c.event;c=c.listeners;e:{var _=void 0;if(a)for(var A=c.length-1;0<=A;A--){var H=c[A],Y=H.instance,_e=H.currentTarget;if(H=H.listener,Y!==_&&p.isPropagationStopped())break e;Wg(p,H,_e),_=Y}else for(A=0;A<c.length;A++){if(H=c[A],Y=H.instance,_e=H.currentTarget,H=H.listener,Y!==_&&p.isPropagationStopped())break e;Wg(p,H,_e),_=Y}}}if(Ln)throw i=ea,Ln=!1,ea=null,i}function Kt(i,a){var l=a[Bd];l===void 0&&(l=a[Bd]=new Set);var c=i+"__bubble";l.has(c)||(Xg(a,i,2,!1),l.add(c))}function Dd(i,a,l){var c=0;a&&(c|=4),Xg(l,i,c,a)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Oo(i){if(!i[Ql]){i[Ql]=!0,r.forEach(function(l){l!=="selectionchange"&&(yE.has(l)||Dd(l,!1,i),Dd(l,!0,i))});var a=i.nodeType===9?i:i.ownerDocument;a===null||a[Ql]||(a[Ql]=!0,Dd("selectionchange",!1,a))}}function Xg(i,a,l,c){switch(mg(a)){case 1:var p=IM;break;case 4:p=NM;break;default:p=md}l=p.bind(null,a,l,i),p=void 0,!Qe||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(p=!0),c?p!==void 0?i.addEventListener(a,l,{capture:!0,passive:p}):i.addEventListener(a,l,!0):p!==void 0?i.addEventListener(a,l,{passive:p}):i.addEventListener(a,l,!1)}function Id(i,a,l,c,p){var _=c;if((a&1)===0&&(a&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var H=c.stateNode.containerInfo;if(H===p||H.nodeType===8&&H.parentNode===p)break;if(A===4)for(A=c.return;A!==null;){var Y=A.tag;if((Y===3||Y===4)&&(Y=A.stateNode.containerInfo,Y===p||Y.nodeType===8&&Y.parentNode===p))return;A=A.return}for(;H!==null;){if(A=Xa(H),A===null)return;if(Y=A.tag,Y===5||Y===6){c=_=A;continue e}H=H.parentNode}}c=c.return}dt(function(){var _e=_,Te=Q(l),Pe=[];e:{var Ee=Gg.get(i);if(Ee!==void 0){var He=_d,Ke=i;switch(i){case"keypress":if(ql(l)===0)break e;case"keydown":case"keyup":He=KM;break;case"focusin":Ke="focus",He=xd;break;case"focusout":Ke="blur",He=xd;break;case"beforeblur":case"afterblur":He=xd;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=_g;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=FM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=JM;break;case kg:case Bg:case zg:He=zM;break;case Hg:He=eE;break;case"scroll":He=OM;break;case"wheel":He=nE;break;case"copy":case"cut":case"paste":He=GM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=Sg}var je=(a&4)!==0,dn=!je&&i==="scroll",fe=je?Ee!==null?Ee+"Capture":null:Ee;je=[];for(var ee=_e,ge;ee!==null;){ge=ee;var Ie=ge.stateNode;if(ge.tag===5&&Ie!==null&&(ge=Ie,fe!==null&&(Ie=we(ee,fe),Ie!=null&&je.push(Uo(ee,Ie,ge)))),dn)break;ee=ee.return}0<je.length&&(Ee=new He(Ee,Ke,null,l,Te),Pe.push({event:Ee,listeners:je}))}}if((a&7)===0){e:{if(Ee=i==="mouseover"||i==="pointerover",He=i==="mouseout"||i==="pointerout",Ee&&l!==oe&&(Ke=l.relatedTarget||l.fromElement)&&(Xa(Ke)||Ke[Cr]))break e;if((He||Ee)&&(Ee=Te.window===Te?Te:(Ee=Te.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,He?(Ke=l.relatedTarget||l.toElement,He=_e,Ke=Ke?Xa(Ke):null,Ke!==null&&(dn=Mi(Ke),Ke!==dn||Ke.tag!==5&&Ke.tag!==6)&&(Ke=null)):(He=null,Ke=_e),He!==Ke)){if(je=_g,Ie="onMouseLeave",fe="onMouseEnter",ee="mouse",(i==="pointerout"||i==="pointerover")&&(je=Sg,Ie="onPointerLeave",fe="onPointerEnter",ee="pointer"),dn=He==null?Ee:As(He),ge=Ke==null?Ee:As(Ke),Ee=new je(Ie,ee+"leave",He,l,Te),Ee.target=dn,Ee.relatedTarget=ge,Ie=null,Xa(Te)===_e&&(je=new je(fe,ee+"enter",Ke,l,Te),je.target=ge,je.relatedTarget=dn,Ie=je),dn=Ie,He&&Ke)t:{for(je=He,fe=Ke,ee=0,ge=je;ge;ge=Ts(ge))ee++;for(ge=0,Ie=fe;Ie;Ie=Ts(Ie))ge++;for(;0<ee-ge;)je=Ts(je),ee--;for(;0<ge-ee;)fe=Ts(fe),ge--;for(;ee--;){if(je===fe||fe!==null&&je===fe.alternate)break t;je=Ts(je),fe=Ts(fe)}je=null}else je=null;He!==null&&qg(Pe,Ee,He,je,!1),Ke!==null&&dn!==null&&qg(Pe,dn,Ke,je,!0)}}e:{if(Ee=_e?As(_e):window,He=Ee.nodeName&&Ee.nodeName.toLowerCase(),He==="select"||He==="input"&&Ee.type==="file")var et=uE;else if(Tg(Ee))if(Ag)et=hE;else{et=dE;var it=cE}else(He=Ee.nodeName)&&He.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(et=fE);if(et&&(et=et(i,_e))){Rg(Pe,et,l,Te);break e}it&&it(i,Ee,_e),i==="focusout"&&(it=Ee._wrapperState)&&it.controlled&&Ee.type==="number"&&hn(Ee,"number",Ee.value)}switch(it=_e?As(_e):window,i){case"focusin":(Tg(it)||it.contentEditable==="true")&&(bs=it,Rd=_e,Io=null);break;case"focusout":Io=Rd=bs=null;break;case"mousedown":Ad=!0;break;case"contextmenu":case"mouseup":case"dragend":Ad=!1,Ug(Pe,l,Te);break;case"selectionchange":if(gE)break;case"keydown":case"keyup":Ug(Pe,l,Te)}var rt;if(Ed)e:{switch(i){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else Es?bg(i,l)&&(lt="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(lt="onCompositionStart");lt&&(xg&&l.locale!=="ko"&&(Es||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&Es&&(rt=gg()):(sa=Te,vd="value"in sa?sa.value:sa.textContent,Es=!0)),it=eu(_e,lt),0<it.length&&(lt=new yg(lt,i,null,l,Te),Pe.push({event:lt,listeners:it}),rt?lt.data=rt:(rt=wg(l),rt!==null&&(lt.data=rt)))),(rt=rE?aE(i,l):sE(i,l))&&(_e=eu(_e,"onBeforeInput"),0<_e.length&&(Te=new yg("onBeforeInput","beforeinput",null,l,Te),Pe.push({event:Te,listeners:_e}),Te.data=rt))}$g(Pe,a)})}function Uo(i,a,l){return{instance:i,listener:a,currentTarget:l}}function eu(i,a){for(var l=a+"Capture",c=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=we(i,l),_!=null&&c.unshift(Uo(i,_,p)),_=we(i,a),_!=null&&c.push(Uo(i,_,p))),i=i.return}return c}function Ts(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function qg(i,a,l,c,p){for(var _=a._reactName,A=[];l!==null&&l!==c;){var H=l,Y=H.alternate,_e=H.stateNode;if(Y!==null&&Y===c)break;H.tag===5&&_e!==null&&(H=_e,p?(Y=we(l,_),Y!=null&&A.unshift(Uo(l,Y,H))):p||(Y=we(l,_),Y!=null&&A.push(Uo(l,Y,H)))),l=l.return}A.length!==0&&i.push({event:a,listeners:A})}var SE=/\r\n?/g,xE=/\u0000|\uFFFD/g;function Yg(i){return(typeof i=="string"?i:""+i).replace(SE,`
`).replace(xE,"")}function tu(i,a,l){if(a=Yg(a),Yg(i)!==a&&l)throw Error(t(425))}function nu(){}var Nd=null,Od=null;function Ud(i,a){return i==="textarea"||i==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Fd=typeof setTimeout=="function"?setTimeout:void 0,ME=typeof clearTimeout=="function"?clearTimeout:void 0,Kg=typeof Promise=="function"?Promise:void 0,EE=typeof queueMicrotask=="function"?queueMicrotask:typeof Kg<"u"?function(i){return Kg.resolve(null).then(i).catch(bE)}:Fd;function bE(i){setTimeout(function(){throw i})}function kd(i,a){var l=a,c=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(c===0){i.removeChild(p),To(a);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=p}while(l);To(a)}function la(i){for(;i!=null;i=i.nextSibling){var a=i.nodeType;if(a===1||a===3)break;if(a===8){if(a=i.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return i}function Zg(i){i=i.previousSibling;for(var a=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(a===0)return i;a--}else l==="/$"&&a++}i=i.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),or="__reactFiber$"+Rs,Fo="__reactProps$"+Rs,Cr="__reactContainer$"+Rs,Bd="__reactEvents$"+Rs,wE="__reactListeners$"+Rs,TE="__reactHandles$"+Rs;function Xa(i){var a=i[or];if(a)return a;for(var l=i.parentNode;l;){if(a=l[Cr]||l[or]){if(l=a.alternate,a.child!==null||l!==null&&l.child!==null)for(i=Zg(i);i!==null;){if(l=i[or])return l;i=Zg(i)}return a}i=l,l=i.parentNode}return null}function ko(i){return i=i[or]||i[Cr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function As(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function iu(i){return i[Fo]||null}var zd=[],Cs=-1;function ua(i){return{current:i}}function Zt(i){0>Cs||(i.current=zd[Cs],zd[Cs]=null,Cs--)}function Wt(i,a){Cs++,zd[Cs]=i.current,i.current=a}var ca={},Dn=ua(ca),qn=ua(!1),qa=ca;function Ps(i,a){var l=i.type.contextTypes;if(!l)return ca;var c=i.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===a)return c.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=a[_];return c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=a,i.__reactInternalMemoizedMaskedChildContext=p),p}function Yn(i){return i=i.childContextTypes,i!=null}function ru(){Zt(qn),Zt(Dn)}function jg(i,a,l){if(Dn.current!==ca)throw Error(t(168));Wt(Dn,a),Wt(qn,l)}function Jg(i,a,l){var c=i.stateNode;if(a=a.childContextTypes,typeof c.getChildContext!="function")return l;c=c.getChildContext();for(var p in c)if(!(p in a))throw Error(t(108,Re(i)||"Unknown",p));return J({},l,c)}function au(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||ca,qa=Dn.current,Wt(Dn,i),Wt(qn,qn.current),!0}function Qg(i,a,l){var c=i.stateNode;if(!c)throw Error(t(169));l?(i=Jg(i,a,qa),c.__reactInternalMemoizedMergedChildContext=i,Zt(qn),Zt(Dn),Wt(Dn,i)):Zt(qn),Wt(qn,l)}var Pr=null,su=!1,Hd=!1;function ev(i){Pr===null?Pr=[i]:Pr.push(i)}function RE(i){su=!0,ev(i)}function da(){if(!Hd&&Pr!==null){Hd=!0;var i=0,a=Ye;try{var l=Pr;for(Ye=1;i<l.length;i++){var c=l[i];do c=c(!0);while(c!==null)}Pr=null,su=!1}catch(p){throw Pr!==null&&(Pr=Pr.slice(i+1)),za(ra,da),p}finally{Ye=a,Hd=!1}}return null}var Ls=[],Ds=0,ou=null,lu=0,Ei=[],bi=0,Ya=null,Lr=1,Dr="";function Ka(i,a){Ls[Ds++]=lu,Ls[Ds++]=ou,ou=i,lu=a}function tv(i,a,l){Ei[bi++]=Lr,Ei[bi++]=Dr,Ei[bi++]=Ya,Ya=i;var c=Lr;i=Dr;var p=32-ae(c)-1;c&=~(1<<p),l+=1;var _=32-ae(a)+p;if(30<_){var A=p-p%5;_=(c&(1<<A)-1).toString(32),c>>=A,p-=A,Lr=1<<32-ae(a)+p|l<<p|c,Dr=_+i}else Lr=1<<_|l<<p|c,Dr=i}function Gd(i){i.return!==null&&(Ka(i,1),tv(i,1,0))}function Vd(i){for(;i===ou;)ou=Ls[--Ds],Ls[Ds]=null,lu=Ls[--Ds],Ls[Ds]=null;for(;i===Ya;)Ya=Ei[--bi],Ei[bi]=null,Dr=Ei[--bi],Ei[bi]=null,Lr=Ei[--bi],Ei[bi]=null}var ui=null,ci=null,Qt=!1,Hi=null;function nv(i,a){var l=Ai(5,null,null,0);l.elementType="DELETED",l.stateNode=a,l.return=i,a=i.deletions,a===null?(i.deletions=[l],i.flags|=16):a.push(l)}function iv(i,a){switch(i.tag){case 5:var l=i.type;return a=a.nodeType!==1||l.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(i.stateNode=a,ui=i,ci=la(a.firstChild),!0):!1;case 6:return a=i.pendingProps===""||a.nodeType!==3?null:a,a!==null?(i.stateNode=a,ui=i,ci=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(l=Ya!==null?{id:Lr,overflow:Dr}:null,i.memoizedState={dehydrated:a,treeContext:l,retryLane:1073741824},l=Ai(18,null,null,0),l.stateNode=a,l.return=i,i.child=l,ui=i,ci=null,!0):!1;default:return!1}}function Wd(i){return(i.mode&1)!==0&&(i.flags&128)===0}function $d(i){if(Qt){var a=ci;if(a){var l=a;if(!iv(i,a)){if(Wd(i))throw Error(t(418));a=la(l.nextSibling);var c=ui;a&&iv(i,a)?nv(c,l):(i.flags=i.flags&-4097|2,Qt=!1,ui=i)}}else{if(Wd(i))throw Error(t(418));i.flags=i.flags&-4097|2,Qt=!1,ui=i}}}function rv(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;ui=i}function uu(i){if(i!==ui)return!1;if(!Qt)return rv(i),Qt=!0,!1;var a;if((a=i.tag!==3)&&!(a=i.tag!==5)&&(a=i.type,a=a!=="head"&&a!=="body"&&!Ud(i.type,i.memoizedProps)),a&&(a=ci)){if(Wd(i))throw av(),Error(t(418));for(;a;)nv(i,a),a=la(a.nextSibling)}if(rv(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,a=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(a===0){ci=la(i.nextSibling);break e}a--}else l!=="$"&&l!=="$!"&&l!=="$?"||a++}i=i.nextSibling}ci=null}}else ci=ui?la(i.stateNode.nextSibling):null;return!0}function av(){for(var i=ci;i;)i=la(i.nextSibling)}function Is(){ci=ui=null,Qt=!1}function Xd(i){Hi===null?Hi=[i]:Hi.push(i)}var AE=L.ReactCurrentBatchConfig;function Bo(i,a,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var c=l.stateNode}if(!c)throw Error(t(147,i));var p=c,_=""+i;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===_?a.ref:(a=function(A){var H=p.refs;A===null?delete H[_]:H[_]=A},a._stringRef=_,a)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function cu(i,a){throw i=Object.prototype.toString.call(a),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":i))}function sv(i){var a=i._init;return a(i._payload)}function ov(i){function a(fe,ee){if(i){var ge=fe.deletions;ge===null?(fe.deletions=[ee],fe.flags|=16):ge.push(ee)}}function l(fe,ee){if(!i)return null;for(;ee!==null;)a(fe,ee),ee=ee.sibling;return null}function c(fe,ee){for(fe=new Map;ee!==null;)ee.key!==null?fe.set(ee.key,ee):fe.set(ee.index,ee),ee=ee.sibling;return fe}function p(fe,ee){return fe=ya(fe,ee),fe.index=0,fe.sibling=null,fe}function _(fe,ee,ge){return fe.index=ge,i?(ge=fe.alternate,ge!==null?(ge=ge.index,ge<ee?(fe.flags|=2,ee):ge):(fe.flags|=2,ee)):(fe.flags|=1048576,ee)}function A(fe){return i&&fe.alternate===null&&(fe.flags|=2),fe}function H(fe,ee,ge,Ie){return ee===null||ee.tag!==6?(ee=kf(ge,fe.mode,Ie),ee.return=fe,ee):(ee=p(ee,ge),ee.return=fe,ee)}function Y(fe,ee,ge,Ie){var et=ge.type;return et===w?Te(fe,ee,ge.props.children,Ie,ge.key):ee!==null&&(ee.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===re&&sv(et)===ee.type)?(Ie=p(ee,ge.props),Ie.ref=Bo(fe,ee,ge),Ie.return=fe,Ie):(Ie=Nu(ge.type,ge.key,ge.props,null,fe.mode,Ie),Ie.ref=Bo(fe,ee,ge),Ie.return=fe,Ie)}function _e(fe,ee,ge,Ie){return ee===null||ee.tag!==4||ee.stateNode.containerInfo!==ge.containerInfo||ee.stateNode.implementation!==ge.implementation?(ee=Bf(ge,fe.mode,Ie),ee.return=fe,ee):(ee=p(ee,ge.children||[]),ee.return=fe,ee)}function Te(fe,ee,ge,Ie,et){return ee===null||ee.tag!==7?(ee=is(ge,fe.mode,Ie,et),ee.return=fe,ee):(ee=p(ee,ge),ee.return=fe,ee)}function Pe(fe,ee,ge){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return ee=kf(""+ee,fe.mode,ge),ee.return=fe,ee;if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case O:return ge=Nu(ee.type,ee.key,ee.props,null,fe.mode,ge),ge.ref=Bo(fe,null,ee),ge.return=fe,ge;case D:return ee=Bf(ee,fe.mode,ge),ee.return=fe,ee;case re:var Ie=ee._init;return Pe(fe,Ie(ee._payload),ge)}if(Nt(ee)||q(ee))return ee=is(ee,fe.mode,ge,null),ee.return=fe,ee;cu(fe,ee)}return null}function Ee(fe,ee,ge,Ie){var et=ee!==null?ee.key:null;if(typeof ge=="string"&&ge!==""||typeof ge=="number")return et!==null?null:H(fe,ee,""+ge,Ie);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case O:return ge.key===et?Y(fe,ee,ge,Ie):null;case D:return ge.key===et?_e(fe,ee,ge,Ie):null;case re:return et=ge._init,Ee(fe,ee,et(ge._payload),Ie)}if(Nt(ge)||q(ge))return et!==null?null:Te(fe,ee,ge,Ie,null);cu(fe,ge)}return null}function He(fe,ee,ge,Ie,et){if(typeof Ie=="string"&&Ie!==""||typeof Ie=="number")return fe=fe.get(ge)||null,H(ee,fe,""+Ie,et);if(typeof Ie=="object"&&Ie!==null){switch(Ie.$$typeof){case O:return fe=fe.get(Ie.key===null?ge:Ie.key)||null,Y(ee,fe,Ie,et);case D:return fe=fe.get(Ie.key===null?ge:Ie.key)||null,_e(ee,fe,Ie,et);case re:var it=Ie._init;return He(fe,ee,ge,it(Ie._payload),et)}if(Nt(Ie)||q(Ie))return fe=fe.get(ge)||null,Te(ee,fe,Ie,et,null);cu(ee,Ie)}return null}function Ke(fe,ee,ge,Ie){for(var et=null,it=null,rt=ee,lt=ee=0,wn=null;rt!==null&&lt<ge.length;lt++){rt.index>lt?(wn=rt,rt=null):wn=rt.sibling;var Dt=Ee(fe,rt,ge[lt],Ie);if(Dt===null){rt===null&&(rt=wn);break}i&&rt&&Dt.alternate===null&&a(fe,rt),ee=_(Dt,ee,lt),it===null?et=Dt:it.sibling=Dt,it=Dt,rt=wn}if(lt===ge.length)return l(fe,rt),Qt&&Ka(fe,lt),et;if(rt===null){for(;lt<ge.length;lt++)rt=Pe(fe,ge[lt],Ie),rt!==null&&(ee=_(rt,ee,lt),it===null?et=rt:it.sibling=rt,it=rt);return Qt&&Ka(fe,lt),et}for(rt=c(fe,rt);lt<ge.length;lt++)wn=He(rt,fe,lt,ge[lt],Ie),wn!==null&&(i&&wn.alternate!==null&&rt.delete(wn.key===null?lt:wn.key),ee=_(wn,ee,lt),it===null?et=wn:it.sibling=wn,it=wn);return i&&rt.forEach(function(Sa){return a(fe,Sa)}),Qt&&Ka(fe,lt),et}function je(fe,ee,ge,Ie){var et=q(ge);if(typeof et!="function")throw Error(t(150));if(ge=et.call(ge),ge==null)throw Error(t(151));for(var it=et=null,rt=ee,lt=ee=0,wn=null,Dt=ge.next();rt!==null&&!Dt.done;lt++,Dt=ge.next()){rt.index>lt?(wn=rt,rt=null):wn=rt.sibling;var Sa=Ee(fe,rt,Dt.value,Ie);if(Sa===null){rt===null&&(rt=wn);break}i&&rt&&Sa.alternate===null&&a(fe,rt),ee=_(Sa,ee,lt),it===null?et=Sa:it.sibling=Sa,it=Sa,rt=wn}if(Dt.done)return l(fe,rt),Qt&&Ka(fe,lt),et;if(rt===null){for(;!Dt.done;lt++,Dt=ge.next())Dt=Pe(fe,Dt.value,Ie),Dt!==null&&(ee=_(Dt,ee,lt),it===null?et=Dt:it.sibling=Dt,it=Dt);return Qt&&Ka(fe,lt),et}for(rt=c(fe,rt);!Dt.done;lt++,Dt=ge.next())Dt=He(rt,fe,lt,Dt.value,Ie),Dt!==null&&(i&&Dt.alternate!==null&&rt.delete(Dt.key===null?lt:Dt.key),ee=_(Dt,ee,lt),it===null?et=Dt:it.sibling=Dt,it=Dt);return i&&rt.forEach(function(ob){return a(fe,ob)}),Qt&&Ka(fe,lt),et}function dn(fe,ee,ge,Ie){if(typeof ge=="object"&&ge!==null&&ge.type===w&&ge.key===null&&(ge=ge.props.children),typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case O:e:{for(var et=ge.key,it=ee;it!==null;){if(it.key===et){if(et=ge.type,et===w){if(it.tag===7){l(fe,it.sibling),ee=p(it,ge.props.children),ee.return=fe,fe=ee;break e}}else if(it.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===re&&sv(et)===it.type){l(fe,it.sibling),ee=p(it,ge.props),ee.ref=Bo(fe,it,ge),ee.return=fe,fe=ee;break e}l(fe,it);break}else a(fe,it);it=it.sibling}ge.type===w?(ee=is(ge.props.children,fe.mode,Ie,ge.key),ee.return=fe,fe=ee):(Ie=Nu(ge.type,ge.key,ge.props,null,fe.mode,Ie),Ie.ref=Bo(fe,ee,ge),Ie.return=fe,fe=Ie)}return A(fe);case D:e:{for(it=ge.key;ee!==null;){if(ee.key===it)if(ee.tag===4&&ee.stateNode.containerInfo===ge.containerInfo&&ee.stateNode.implementation===ge.implementation){l(fe,ee.sibling),ee=p(ee,ge.children||[]),ee.return=fe,fe=ee;break e}else{l(fe,ee);break}else a(fe,ee);ee=ee.sibling}ee=Bf(ge,fe.mode,Ie),ee.return=fe,fe=ee}return A(fe);case re:return it=ge._init,dn(fe,ee,it(ge._payload),Ie)}if(Nt(ge))return Ke(fe,ee,ge,Ie);if(q(ge))return je(fe,ee,ge,Ie);cu(fe,ge)}return typeof ge=="string"&&ge!==""||typeof ge=="number"?(ge=""+ge,ee!==null&&ee.tag===6?(l(fe,ee.sibling),ee=p(ee,ge),ee.return=fe,fe=ee):(l(fe,ee),ee=kf(ge,fe.mode,Ie),ee.return=fe,fe=ee),A(fe)):l(fe,ee)}return dn}var Ns=ov(!0),lv=ov(!1),du=ua(null),fu=null,Os=null,qd=null;function Yd(){qd=Os=fu=null}function Kd(i){var a=du.current;Zt(du),i._currentValue=a}function Zd(i,a,l){for(;i!==null;){var c=i.alternate;if((i.childLanes&a)!==a?(i.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),i===l)break;i=i.return}}function Us(i,a){fu=i,qd=Os=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&a)!==0&&(Kn=!0),i.firstContext=null)}function wi(i){var a=i._currentValue;if(qd!==i)if(i={context:i,memoizedValue:a,next:null},Os===null){if(fu===null)throw Error(t(308));Os=i,fu.dependencies={lanes:0,firstContext:i}}else Os=Os.next=i;return a}var Za=null;function jd(i){Za===null?Za=[i]:Za.push(i)}function uv(i,a,l,c){var p=a.interleaved;return p===null?(l.next=l,jd(a)):(l.next=p.next,p.next=l),a.interleaved=l,Ir(i,c)}function Ir(i,a){i.lanes|=a;var l=i.alternate;for(l!==null&&(l.lanes|=a),l=i,i=i.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),l=i,i=i.return;return l.tag===3?l.stateNode:null}var fa=!1;function Jd(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cv(i,a){i=i.updateQueue,a.updateQueue===i&&(a.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Nr(i,a){return{eventTime:i,lane:a,tag:0,payload:null,callback:null,next:null}}function ha(i,a,l){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(Pt&2)!==0){var p=c.pending;return p===null?a.next=a:(a.next=p.next,p.next=a),c.pending=a,Ir(i,l)}return p=c.interleaved,p===null?(a.next=a,jd(c)):(a.next=p.next,p.next=a),c.interleaved=a,Ir(i,l)}function hu(i,a,l){if(a=a.updateQueue,a!==null&&(a=a.shared,(l&4194240)!==0)){var c=a.lanes;c&=i.pendingLanes,l|=c,a.lanes=l,sn(i,l)}}function dv(i,a){var l=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=A:_=_.next=A,l=l.next}while(l!==null);_===null?p=_=a:_=_.next=a}else p=_=a;l={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:c.shared,effects:c.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=a:i.next=a,l.lastBaseUpdate=a}function pu(i,a,l,c){var p=i.updateQueue;fa=!1;var _=p.firstBaseUpdate,A=p.lastBaseUpdate,H=p.shared.pending;if(H!==null){p.shared.pending=null;var Y=H,_e=Y.next;Y.next=null,A===null?_=_e:A.next=_e,A=Y;var Te=i.alternate;Te!==null&&(Te=Te.updateQueue,H=Te.lastBaseUpdate,H!==A&&(H===null?Te.firstBaseUpdate=_e:H.next=_e,Te.lastBaseUpdate=Y))}if(_!==null){var Pe=p.baseState;A=0,Te=_e=Y=null,H=_;do{var Ee=H.lane,He=H.eventTime;if((c&Ee)===Ee){Te!==null&&(Te=Te.next={eventTime:He,lane:0,tag:H.tag,payload:H.payload,callback:H.callback,next:null});e:{var Ke=i,je=H;switch(Ee=a,He=l,je.tag){case 1:if(Ke=je.payload,typeof Ke=="function"){Pe=Ke.call(He,Pe,Ee);break e}Pe=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=je.payload,Ee=typeof Ke=="function"?Ke.call(He,Pe,Ee):Ke,Ee==null)break e;Pe=J({},Pe,Ee);break e;case 2:fa=!0}}H.callback!==null&&H.lane!==0&&(i.flags|=64,Ee=p.effects,Ee===null?p.effects=[H]:Ee.push(H))}else He={eventTime:He,lane:Ee,tag:H.tag,payload:H.payload,callback:H.callback,next:null},Te===null?(_e=Te=He,Y=Pe):Te=Te.next=He,A|=Ee;if(H=H.next,H===null){if(H=p.shared.pending,H===null)break;Ee=H,H=Ee.next,Ee.next=null,p.lastBaseUpdate=Ee,p.shared.pending=null}}while(!0);if(Te===null&&(Y=Pe),p.baseState=Y,p.firstBaseUpdate=_e,p.lastBaseUpdate=Te,a=p.shared.interleaved,a!==null){p=a;do A|=p.lane,p=p.next;while(p!==a)}else _===null&&(p.shared.lanes=0);Qa|=A,i.lanes=A,i.memoizedState=Pe}}function fv(i,a,l){if(i=a.effects,a.effects=null,i!==null)for(a=0;a<i.length;a++){var c=i[a],p=c.callback;if(p!==null){if(c.callback=null,c=l,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var zo={},lr=ua(zo),Ho=ua(zo),Go=ua(zo);function ja(i){if(i===zo)throw Error(t(174));return i}function Qd(i,a){switch(Wt(Go,a),Wt(Ho,i),Wt(lr,zo),i=a.nodeType,i){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:Ct(null,"");break;default:i=i===8?a.parentNode:a,a=i.namespaceURI||null,i=i.tagName,a=Ct(a,i)}Zt(lr),Wt(lr,a)}function Fs(){Zt(lr),Zt(Ho),Zt(Go)}function hv(i){ja(Go.current);var a=ja(lr.current),l=Ct(a,i.type);a!==l&&(Wt(Ho,i),Wt(lr,l))}function ef(i){Ho.current===i&&(Zt(lr),Zt(Ho))}var tn=ua(0);function mu(i){for(var a=i;a!==null;){if(a.tag===13){var l=a.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var tf=[];function nf(){for(var i=0;i<tf.length;i++)tf[i]._workInProgressVersionPrimary=null;tf.length=0}var gu=L.ReactCurrentDispatcher,rf=L.ReactCurrentBatchConfig,Ja=0,nn=null,yn=null,En=null,vu=!1,Vo=!1,Wo=0,CE=0;function In(){throw Error(t(321))}function af(i,a){if(a===null)return!1;for(var l=0;l<a.length&&l<i.length;l++)if(!zi(i[l],a[l]))return!1;return!0}function sf(i,a,l,c,p,_){if(Ja=_,nn=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,gu.current=i===null||i.memoizedState===null?IE:NE,i=l(c,p),Vo){_=0;do{if(Vo=!1,Wo=0,25<=_)throw Error(t(301));_+=1,En=yn=null,a.updateQueue=null,gu.current=OE,i=l(c,p)}while(Vo)}if(gu.current=Su,a=yn!==null&&yn.next!==null,Ja=0,En=yn=nn=null,vu=!1,a)throw Error(t(300));return i}function of(){var i=Wo!==0;return Wo=0,i}function ur(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?nn.memoizedState=En=i:En=En.next=i,En}function Ti(){if(yn===null){var i=nn.alternate;i=i!==null?i.memoizedState:null}else i=yn.next;var a=En===null?nn.memoizedState:En.next;if(a!==null)En=a,yn=i;else{if(i===null)throw Error(t(310));yn=i,i={memoizedState:yn.memoizedState,baseState:yn.baseState,baseQueue:yn.baseQueue,queue:yn.queue,next:null},En===null?nn.memoizedState=En=i:En=En.next=i}return En}function $o(i,a){return typeof a=="function"?a(i):a}function lf(i){var a=Ti(),l=a.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var c=yn,p=c.baseQueue,_=l.pending;if(_!==null){if(p!==null){var A=p.next;p.next=_.next,_.next=A}c.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,c=c.baseState;var H=A=null,Y=null,_e=_;do{var Te=_e.lane;if((Ja&Te)===Te)Y!==null&&(Y=Y.next={lane:0,action:_e.action,hasEagerState:_e.hasEagerState,eagerState:_e.eagerState,next:null}),c=_e.hasEagerState?_e.eagerState:i(c,_e.action);else{var Pe={lane:Te,action:_e.action,hasEagerState:_e.hasEagerState,eagerState:_e.eagerState,next:null};Y===null?(H=Y=Pe,A=c):Y=Y.next=Pe,nn.lanes|=Te,Qa|=Te}_e=_e.next}while(_e!==null&&_e!==_);Y===null?A=c:Y.next=H,zi(c,a.memoizedState)||(Kn=!0),a.memoizedState=c,a.baseState=A,a.baseQueue=Y,l.lastRenderedState=c}if(i=l.interleaved,i!==null){p=i;do _=p.lane,nn.lanes|=_,Qa|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[a.memoizedState,l.dispatch]}function uf(i){var a=Ti(),l=a.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var c=l.dispatch,p=l.pending,_=a.memoizedState;if(p!==null){l.pending=null;var A=p=p.next;do _=i(_,A.action),A=A.next;while(A!==p);zi(_,a.memoizedState)||(Kn=!0),a.memoizedState=_,a.baseQueue===null&&(a.baseState=_),l.lastRenderedState=_}return[_,c]}function pv(){}function mv(i,a){var l=nn,c=Ti(),p=a(),_=!zi(c.memoizedState,p);if(_&&(c.memoizedState=p,Kn=!0),c=c.queue,cf(_v.bind(null,l,c,i),[i]),c.getSnapshot!==a||_||En!==null&&En.memoizedState.tag&1){if(l.flags|=2048,Xo(9,vv.bind(null,l,c,p,a),void 0,null),bn===null)throw Error(t(349));(Ja&30)!==0||gv(l,a,p)}return p}function gv(i,a,l){i.flags|=16384,i={getSnapshot:a,value:l},a=nn.updateQueue,a===null?(a={lastEffect:null,stores:null},nn.updateQueue=a,a.stores=[i]):(l=a.stores,l===null?a.stores=[i]:l.push(i))}function vv(i,a,l,c){a.value=l,a.getSnapshot=c,yv(a)&&Sv(i)}function _v(i,a,l){return l(function(){yv(a)&&Sv(i)})}function yv(i){var a=i.getSnapshot;i=i.value;try{var l=a();return!zi(i,l)}catch{return!0}}function Sv(i){var a=Ir(i,1);a!==null&&$i(a,i,1,-1)}function xv(i){var a=ur();return typeof i=="function"&&(i=i()),a.memoizedState=a.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:i},a.queue=i,i=i.dispatch=DE.bind(null,nn,i),[a.memoizedState,i]}function Xo(i,a,l,c){return i={tag:i,create:a,destroy:l,deps:c,next:null},a=nn.updateQueue,a===null?(a={lastEffect:null,stores:null},nn.updateQueue=a,a.lastEffect=i.next=i):(l=a.lastEffect,l===null?a.lastEffect=i.next=i:(c=l.next,l.next=i,i.next=c,a.lastEffect=i)),i}function Mv(){return Ti().memoizedState}function _u(i,a,l,c){var p=ur();nn.flags|=i,p.memoizedState=Xo(1|a,l,void 0,c===void 0?null:c)}function yu(i,a,l,c){var p=Ti();c=c===void 0?null:c;var _=void 0;if(yn!==null){var A=yn.memoizedState;if(_=A.destroy,c!==null&&af(c,A.deps)){p.memoizedState=Xo(a,l,_,c);return}}nn.flags|=i,p.memoizedState=Xo(1|a,l,_,c)}function Ev(i,a){return _u(8390656,8,i,a)}function cf(i,a){return yu(2048,8,i,a)}function bv(i,a){return yu(4,2,i,a)}function wv(i,a){return yu(4,4,i,a)}function Tv(i,a){if(typeof a=="function")return i=i(),a(i),function(){a(null)};if(a!=null)return i=i(),a.current=i,function(){a.current=null}}function Rv(i,a,l){return l=l!=null?l.concat([i]):null,yu(4,4,Tv.bind(null,a,i),l)}function df(){}function Av(i,a){var l=Ti();a=a===void 0?null:a;var c=l.memoizedState;return c!==null&&a!==null&&af(a,c[1])?c[0]:(l.memoizedState=[i,a],i)}function Cv(i,a){var l=Ti();a=a===void 0?null:a;var c=l.memoizedState;return c!==null&&a!==null&&af(a,c[1])?c[0]:(i=i(),l.memoizedState=[i,a],i)}function Pv(i,a,l){return(Ja&21)===0?(i.baseState&&(i.baseState=!1,Kn=!0),i.memoizedState=l):(zi(l,a)||(l=Lt(),nn.lanes|=l,Qa|=l,i.baseState=!0),a)}function PE(i,a){var l=Ye;Ye=l!==0&&4>l?l:4,i(!0);var c=rf.transition;rf.transition={};try{i(!1),a()}finally{Ye=l,rf.transition=c}}function Lv(){return Ti().memoizedState}function LE(i,a,l){var c=va(i);if(l={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null},Dv(i))Iv(a,l);else if(l=uv(i,a,l,c),l!==null){var p=Gn();$i(l,i,c,p),Nv(l,a,c)}}function DE(i,a,l){var c=va(i),p={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null};if(Dv(i))Iv(a,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=a.lastRenderedReducer,_!==null))try{var A=a.lastRenderedState,H=_(A,l);if(p.hasEagerState=!0,p.eagerState=H,zi(H,A)){var Y=a.interleaved;Y===null?(p.next=p,jd(a)):(p.next=Y.next,Y.next=p),a.interleaved=p;return}}catch{}finally{}l=uv(i,a,p,c),l!==null&&(p=Gn(),$i(l,i,c,p),Nv(l,a,c))}}function Dv(i){var a=i.alternate;return i===nn||a!==null&&a===nn}function Iv(i,a){Vo=vu=!0;var l=i.pending;l===null?a.next=a:(a.next=l.next,l.next=a),i.pending=a}function Nv(i,a,l){if((l&4194240)!==0){var c=a.lanes;c&=i.pendingLanes,l|=c,a.lanes=l,sn(i,l)}}var Su={readContext:wi,useCallback:In,useContext:In,useEffect:In,useImperativeHandle:In,useInsertionEffect:In,useLayoutEffect:In,useMemo:In,useReducer:In,useRef:In,useState:In,useDebugValue:In,useDeferredValue:In,useTransition:In,useMutableSource:In,useSyncExternalStore:In,useId:In,unstable_isNewReconciler:!1},IE={readContext:wi,useCallback:function(i,a){return ur().memoizedState=[i,a===void 0?null:a],i},useContext:wi,useEffect:Ev,useImperativeHandle:function(i,a,l){return l=l!=null?l.concat([i]):null,_u(4194308,4,Tv.bind(null,a,i),l)},useLayoutEffect:function(i,a){return _u(4194308,4,i,a)},useInsertionEffect:function(i,a){return _u(4,2,i,a)},useMemo:function(i,a){var l=ur();return a=a===void 0?null:a,i=i(),l.memoizedState=[i,a],i},useReducer:function(i,a,l){var c=ur();return a=l!==void 0?l(a):a,c.memoizedState=c.baseState=a,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:a},c.queue=i,i=i.dispatch=LE.bind(null,nn,i),[c.memoizedState,i]},useRef:function(i){var a=ur();return i={current:i},a.memoizedState=i},useState:xv,useDebugValue:df,useDeferredValue:function(i){return ur().memoizedState=i},useTransition:function(){var i=xv(!1),a=i[0];return i=PE.bind(null,i[1]),ur().memoizedState=i,[a,i]},useMutableSource:function(){},useSyncExternalStore:function(i,a,l){var c=nn,p=ur();if(Qt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=a(),bn===null)throw Error(t(349));(Ja&30)!==0||gv(c,a,l)}p.memoizedState=l;var _={value:l,getSnapshot:a};return p.queue=_,Ev(_v.bind(null,c,_,i),[i]),c.flags|=2048,Xo(9,vv.bind(null,c,_,l,a),void 0,null),l},useId:function(){var i=ur(),a=bn.identifierPrefix;if(Qt){var l=Dr,c=Lr;l=(c&~(1<<32-ae(c)-1)).toString(32)+l,a=":"+a+"R"+l,l=Wo++,0<l&&(a+="H"+l.toString(32)),a+=":"}else l=CE++,a=":"+a+"r"+l.toString(32)+":";return i.memoizedState=a},unstable_isNewReconciler:!1},NE={readContext:wi,useCallback:Av,useContext:wi,useEffect:cf,useImperativeHandle:Rv,useInsertionEffect:bv,useLayoutEffect:wv,useMemo:Cv,useReducer:lf,useRef:Mv,useState:function(){return lf($o)},useDebugValue:df,useDeferredValue:function(i){var a=Ti();return Pv(a,yn.memoizedState,i)},useTransition:function(){var i=lf($o)[0],a=Ti().memoizedState;return[i,a]},useMutableSource:pv,useSyncExternalStore:mv,useId:Lv,unstable_isNewReconciler:!1},OE={readContext:wi,useCallback:Av,useContext:wi,useEffect:cf,useImperativeHandle:Rv,useInsertionEffect:bv,useLayoutEffect:wv,useMemo:Cv,useReducer:uf,useRef:Mv,useState:function(){return uf($o)},useDebugValue:df,useDeferredValue:function(i){var a=Ti();return yn===null?a.memoizedState=i:Pv(a,yn.memoizedState,i)},useTransition:function(){var i=uf($o)[0],a=Ti().memoizedState;return[i,a]},useMutableSource:pv,useSyncExternalStore:mv,useId:Lv,unstable_isNewReconciler:!1};function Gi(i,a){if(i&&i.defaultProps){a=J({},a),i=i.defaultProps;for(var l in i)a[l]===void 0&&(a[l]=i[l]);return a}return a}function ff(i,a,l,c){a=i.memoizedState,l=l(c,a),l=l==null?a:J({},a,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var xu={isMounted:function(i){return(i=i._reactInternals)?Mi(i)===i:!1},enqueueSetState:function(i,a,l){i=i._reactInternals;var c=Gn(),p=va(i),_=Nr(c,p);_.payload=a,l!=null&&(_.callback=l),a=ha(i,_,p),a!==null&&($i(a,i,p,c),hu(a,i,p))},enqueueReplaceState:function(i,a,l){i=i._reactInternals;var c=Gn(),p=va(i),_=Nr(c,p);_.tag=1,_.payload=a,l!=null&&(_.callback=l),a=ha(i,_,p),a!==null&&($i(a,i,p,c),hu(a,i,p))},enqueueForceUpdate:function(i,a){i=i._reactInternals;var l=Gn(),c=va(i),p=Nr(l,c);p.tag=2,a!=null&&(p.callback=a),a=ha(i,p,c),a!==null&&($i(a,i,c,l),hu(a,i,c))}};function Ov(i,a,l,c,p,_,A){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,_,A):a.prototype&&a.prototype.isPureReactComponent?!Do(l,c)||!Do(p,_):!0}function Uv(i,a,l){var c=!1,p=ca,_=a.contextType;return typeof _=="object"&&_!==null?_=wi(_):(p=Yn(a)?qa:Dn.current,c=a.contextTypes,_=(c=c!=null)?Ps(i,p):ca),a=new a(l,_),i.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=xu,i.stateNode=a,a._reactInternals=i,c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),a}function Fv(i,a,l,c){i=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(l,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(l,c),a.state!==i&&xu.enqueueReplaceState(a,a.state,null)}function hf(i,a,l,c){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},Jd(i);var _=a.contextType;typeof _=="object"&&_!==null?p.context=wi(_):(_=Yn(a)?qa:Dn.current,p.context=Ps(i,_)),p.state=i.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(ff(i,a,_,l),p.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(a=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),a!==p.state&&xu.enqueueReplaceState(p,p.state,null),pu(i,l,p,c),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function ks(i,a){try{var l="",c=a;do l+=xe(c),c=c.return;while(c);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:a,stack:p,digest:null}}function pf(i,a,l){return{value:i,source:null,stack:l??null,digest:a??null}}function mf(i,a){try{console.error(a.value)}catch(l){setTimeout(function(){throw l})}}var UE=typeof WeakMap=="function"?WeakMap:Map;function kv(i,a,l){l=Nr(-1,l),l.tag=3,l.payload={element:null};var c=a.value;return l.callback=function(){Au||(Au=!0,Pf=c),mf(i,a)},l}function Bv(i,a,l){l=Nr(-1,l),l.tag=3;var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var p=a.value;l.payload=function(){return c(p)},l.callback=function(){mf(i,a)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){mf(i,a),typeof c!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var A=a.stack;this.componentDidCatch(a.value,{componentStack:A!==null?A:""})}),l}function zv(i,a,l){var c=i.pingCache;if(c===null){c=i.pingCache=new UE;var p=new Set;c.set(a,p)}else p=c.get(a),p===void 0&&(p=new Set,c.set(a,p));p.has(l)||(p.add(l),i=ZE.bind(null,i,a,l),a.then(i,i))}function Hv(i){do{var a;if((a=i.tag===13)&&(a=i.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return i;i=i.return}while(i!==null);return null}function Gv(i,a,l,c,p){return(i.mode&1)===0?(i===a?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(a=Nr(-1,1),a.tag=2,ha(l,a,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var FE=L.ReactCurrentOwner,Kn=!1;function Hn(i,a,l,c){a.child=i===null?lv(a,null,l,c):Ns(a,i.child,l,c)}function Vv(i,a,l,c,p){l=l.render;var _=a.ref;return Us(a,p),c=sf(i,a,l,c,_,p),l=of(),i!==null&&!Kn?(a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~p,Or(i,a,p)):(Qt&&l&&Gd(a),a.flags|=1,Hn(i,a,c,p),a.child)}function Wv(i,a,l,c,p){if(i===null){var _=l.type;return typeof _=="function"&&!Ff(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(a.tag=15,a.type=_,$v(i,a,_,c,p)):(i=Nu(l.type,null,c,a,a.mode,p),i.ref=a.ref,i.return=a,a.child=i)}if(_=i.child,(i.lanes&p)===0){var A=_.memoizedProps;if(l=l.compare,l=l!==null?l:Do,l(A,c)&&i.ref===a.ref)return Or(i,a,p)}return a.flags|=1,i=ya(_,c),i.ref=a.ref,i.return=a,a.child=i}function $v(i,a,l,c,p){if(i!==null){var _=i.memoizedProps;if(Do(_,c)&&i.ref===a.ref)if(Kn=!1,a.pendingProps=c=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(Kn=!0);else return a.lanes=i.lanes,Or(i,a,p)}return gf(i,a,l,c,p)}function Xv(i,a,l){var c=a.pendingProps,p=c.children,_=i!==null?i.memoizedState:null;if(c.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},Wt(zs,di),di|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:i,cachePool:null,transitions:null},a.updateQueue=null,Wt(zs,di),di|=i,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=_!==null?_.baseLanes:l,Wt(zs,di),di|=c}else _!==null?(c=_.baseLanes|l,a.memoizedState=null):c=l,Wt(zs,di),di|=c;return Hn(i,a,p,l),a.child}function qv(i,a){var l=a.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(a.flags|=512,a.flags|=2097152)}function gf(i,a,l,c,p){var _=Yn(l)?qa:Dn.current;return _=Ps(a,_),Us(a,p),l=sf(i,a,l,c,_,p),c=of(),i!==null&&!Kn?(a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~p,Or(i,a,p)):(Qt&&c&&Gd(a),a.flags|=1,Hn(i,a,l,p),a.child)}function Yv(i,a,l,c,p){if(Yn(l)){var _=!0;au(a)}else _=!1;if(Us(a,p),a.stateNode===null)Eu(i,a),Uv(a,l,c),hf(a,l,c,p),c=!0;else if(i===null){var A=a.stateNode,H=a.memoizedProps;A.props=H;var Y=A.context,_e=l.contextType;typeof _e=="object"&&_e!==null?_e=wi(_e):(_e=Yn(l)?qa:Dn.current,_e=Ps(a,_e));var Te=l.getDerivedStateFromProps,Pe=typeof Te=="function"||typeof A.getSnapshotBeforeUpdate=="function";Pe||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(H!==c||Y!==_e)&&Fv(a,A,c,_e),fa=!1;var Ee=a.memoizedState;A.state=Ee,pu(a,c,A,p),Y=a.memoizedState,H!==c||Ee!==Y||qn.current||fa?(typeof Te=="function"&&(ff(a,l,Te,c),Y=a.memoizedState),(H=fa||Ov(a,l,H,c,Ee,Y,_e))?(Pe||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(a.flags|=4194308)):(typeof A.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=Y),A.props=c,A.state=Y,A.context=_e,c=H):(typeof A.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{A=a.stateNode,cv(i,a),H=a.memoizedProps,_e=a.type===a.elementType?H:Gi(a.type,H),A.props=_e,Pe=a.pendingProps,Ee=A.context,Y=l.contextType,typeof Y=="object"&&Y!==null?Y=wi(Y):(Y=Yn(l)?qa:Dn.current,Y=Ps(a,Y));var He=l.getDerivedStateFromProps;(Te=typeof He=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(H!==Pe||Ee!==Y)&&Fv(a,A,c,Y),fa=!1,Ee=a.memoizedState,A.state=Ee,pu(a,c,A,p);var Ke=a.memoizedState;H!==Pe||Ee!==Ke||qn.current||fa?(typeof He=="function"&&(ff(a,l,He,c),Ke=a.memoizedState),(_e=fa||Ov(a,l,_e,c,Ee,Ke,Y)||!1)?(Te||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,Ke,Y),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,Ke,Y)),typeof A.componentDidUpdate=="function"&&(a.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof A.componentDidUpdate!="function"||H===i.memoizedProps&&Ee===i.memoizedState||(a.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||H===i.memoizedProps&&Ee===i.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=Ke),A.props=c,A.state=Ke,A.context=Y,c=_e):(typeof A.componentDidUpdate!="function"||H===i.memoizedProps&&Ee===i.memoizedState||(a.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||H===i.memoizedProps&&Ee===i.memoizedState||(a.flags|=1024),c=!1)}return vf(i,a,l,c,_,p)}function vf(i,a,l,c,p,_){qv(i,a);var A=(a.flags&128)!==0;if(!c&&!A)return p&&Qg(a,l,!1),Or(i,a,_);c=a.stateNode,FE.current=a;var H=A&&typeof l.getDerivedStateFromError!="function"?null:c.render();return a.flags|=1,i!==null&&A?(a.child=Ns(a,i.child,null,_),a.child=Ns(a,null,H,_)):Hn(i,a,H,_),a.memoizedState=c.state,p&&Qg(a,l,!0),a.child}function Kv(i){var a=i.stateNode;a.pendingContext?jg(i,a.pendingContext,a.pendingContext!==a.context):a.context&&jg(i,a.context,!1),Qd(i,a.containerInfo)}function Zv(i,a,l,c,p){return Is(),Xd(p),a.flags|=256,Hn(i,a,l,c),a.child}var _f={dehydrated:null,treeContext:null,retryLane:0};function yf(i){return{baseLanes:i,cachePool:null,transitions:null}}function jv(i,a,l){var c=a.pendingProps,p=tn.current,_=!1,A=(a.flags&128)!==0,H;if((H=A)||(H=i!==null&&i.memoizedState===null?!1:(p&2)!==0),H?(_=!0,a.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Wt(tn,p&1),i===null)return $d(a),i=a.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((a.mode&1)===0?a.lanes=1:i.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(A=c.children,i=c.fallback,_?(c=a.mode,_=a.child,A={mode:"hidden",children:A},(c&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=A):_=Ou(A,c,0,null),i=is(i,c,l,null),_.return=a,i.return=a,_.sibling=i,a.child=_,a.child.memoizedState=yf(l),a.memoizedState=_f,i):Sf(a,A));if(p=i.memoizedState,p!==null&&(H=p.dehydrated,H!==null))return kE(i,a,A,c,H,p,l);if(_){_=c.fallback,A=a.mode,p=i.child,H=p.sibling;var Y={mode:"hidden",children:c.children};return(A&1)===0&&a.child!==p?(c=a.child,c.childLanes=0,c.pendingProps=Y,a.deletions=null):(c=ya(p,Y),c.subtreeFlags=p.subtreeFlags&14680064),H!==null?_=ya(H,_):(_=is(_,A,l,null),_.flags|=2),_.return=a,c.return=a,c.sibling=_,a.child=c,c=_,_=a.child,A=i.child.memoizedState,A=A===null?yf(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},_.memoizedState=A,_.childLanes=i.childLanes&~l,a.memoizedState=_f,c}return _=i.child,i=_.sibling,c=ya(_,{mode:"visible",children:c.children}),(a.mode&1)===0&&(c.lanes=l),c.return=a,c.sibling=null,i!==null&&(l=a.deletions,l===null?(a.deletions=[i],a.flags|=16):l.push(i)),a.child=c,a.memoizedState=null,c}function Sf(i,a){return a=Ou({mode:"visible",children:a},i.mode,0,null),a.return=i,i.child=a}function Mu(i,a,l,c){return c!==null&&Xd(c),Ns(a,i.child,null,l),i=Sf(a,a.pendingProps.children),i.flags|=2,a.memoizedState=null,i}function kE(i,a,l,c,p,_,A){if(l)return a.flags&256?(a.flags&=-257,c=pf(Error(t(422))),Mu(i,a,A,c)):a.memoizedState!==null?(a.child=i.child,a.flags|=128,null):(_=c.fallback,p=a.mode,c=Ou({mode:"visible",children:c.children},p,0,null),_=is(_,p,A,null),_.flags|=2,c.return=a,_.return=a,c.sibling=_,a.child=c,(a.mode&1)!==0&&Ns(a,i.child,null,A),a.child.memoizedState=yf(A),a.memoizedState=_f,_);if((a.mode&1)===0)return Mu(i,a,A,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var H=c.dgst;return c=H,_=Error(t(419)),c=pf(_,c,void 0),Mu(i,a,A,c)}if(H=(A&i.childLanes)!==0,Kn||H){if(c=bn,c!==null){switch(A&-A){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|A))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Ir(i,p),$i(c,i,p,-1))}return Uf(),c=pf(Error(t(421))),Mu(i,a,A,c)}return p.data==="$?"?(a.flags|=128,a.child=i.child,a=jE.bind(null,i),p._reactRetry=a,null):(i=_.treeContext,ci=la(p.nextSibling),ui=a,Qt=!0,Hi=null,i!==null&&(Ei[bi++]=Lr,Ei[bi++]=Dr,Ei[bi++]=Ya,Lr=i.id,Dr=i.overflow,Ya=a),a=Sf(a,c.children),a.flags|=4096,a)}function Jv(i,a,l){i.lanes|=a;var c=i.alternate;c!==null&&(c.lanes|=a),Zd(i.return,a,l)}function xf(i,a,l,c,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:p}:(_.isBackwards=a,_.rendering=null,_.renderingStartTime=0,_.last=c,_.tail=l,_.tailMode=p)}function Qv(i,a,l){var c=a.pendingProps,p=c.revealOrder,_=c.tail;if(Hn(i,a,c.children,l),c=tn.current,(c&2)!==0)c=c&1|2,a.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=a.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Jv(i,l,a);else if(i.tag===19)Jv(i,l,a);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break e;for(;i.sibling===null;){if(i.return===null||i.return===a)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}if(Wt(tn,c),(a.mode&1)===0)a.memoizedState=null;else switch(p){case"forwards":for(l=a.child,p=null;l!==null;)i=l.alternate,i!==null&&mu(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=a.child,a.child=null):(p=l.sibling,l.sibling=null),xf(a,!1,p,l,_);break;case"backwards":for(l=null,p=a.child,a.child=null;p!==null;){if(i=p.alternate,i!==null&&mu(i)===null){a.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}xf(a,!0,l,null,_);break;case"together":xf(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Eu(i,a){(a.mode&1)===0&&i!==null&&(i.alternate=null,a.alternate=null,a.flags|=2)}function Or(i,a,l){if(i!==null&&(a.dependencies=i.dependencies),Qa|=a.lanes,(l&a.childLanes)===0)return null;if(i!==null&&a.child!==i.child)throw Error(t(153));if(a.child!==null){for(i=a.child,l=ya(i,i.pendingProps),a.child=l,l.return=a;i.sibling!==null;)i=i.sibling,l=l.sibling=ya(i,i.pendingProps),l.return=a;l.sibling=null}return a.child}function BE(i,a,l){switch(a.tag){case 3:Kv(a),Is();break;case 5:hv(a);break;case 1:Yn(a.type)&&au(a);break;case 4:Qd(a,a.stateNode.containerInfo);break;case 10:var c=a.type._context,p=a.memoizedProps.value;Wt(du,c._currentValue),c._currentValue=p;break;case 13:if(c=a.memoizedState,c!==null)return c.dehydrated!==null?(Wt(tn,tn.current&1),a.flags|=128,null):(l&a.child.childLanes)!==0?jv(i,a,l):(Wt(tn,tn.current&1),i=Or(i,a,l),i!==null?i.sibling:null);Wt(tn,tn.current&1);break;case 19:if(c=(l&a.childLanes)!==0,(i.flags&128)!==0){if(c)return Qv(i,a,l);a.flags|=128}if(p=a.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Wt(tn,tn.current),c)break;return null;case 22:case 23:return a.lanes=0,Xv(i,a,l)}return Or(i,a,l)}var e0,Mf,t0,n0;e0=function(i,a){for(var l=a.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===a)break;for(;l.sibling===null;){if(l.return===null||l.return===a)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Mf=function(){},t0=function(i,a,l,c){var p=i.memoizedProps;if(p!==c){i=a.stateNode,ja(lr.current);var _=null;switch(l){case"input":p=ot(i,p),c=ot(i,c),_=[];break;case"select":p=J({},p,{value:void 0}),c=J({},c,{value:void 0}),_=[];break;case"textarea":p=an(i,p),c=an(i,c),_=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(i.onclick=nu)}X(l,c);var A;l=null;for(_e in p)if(!c.hasOwnProperty(_e)&&p.hasOwnProperty(_e)&&p[_e]!=null)if(_e==="style"){var H=p[_e];for(A in H)H.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else _e!=="dangerouslySetInnerHTML"&&_e!=="children"&&_e!=="suppressContentEditableWarning"&&_e!=="suppressHydrationWarning"&&_e!=="autoFocus"&&(s.hasOwnProperty(_e)?_||(_=[]):(_=_||[]).push(_e,null));for(_e in c){var Y=c[_e];if(H=p!=null?p[_e]:void 0,c.hasOwnProperty(_e)&&Y!==H&&(Y!=null||H!=null))if(_e==="style")if(H){for(A in H)!H.hasOwnProperty(A)||Y&&Y.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in Y)Y.hasOwnProperty(A)&&H[A]!==Y[A]&&(l||(l={}),l[A]=Y[A])}else l||(_||(_=[]),_.push(_e,l)),l=Y;else _e==="dangerouslySetInnerHTML"?(Y=Y?Y.__html:void 0,H=H?H.__html:void 0,Y!=null&&H!==Y&&(_=_||[]).push(_e,Y)):_e==="children"?typeof Y!="string"&&typeof Y!="number"||(_=_||[]).push(_e,""+Y):_e!=="suppressContentEditableWarning"&&_e!=="suppressHydrationWarning"&&(s.hasOwnProperty(_e)?(Y!=null&&_e==="onScroll"&&Kt("scroll",i),_||H===Y||(_=[])):(_=_||[]).push(_e,Y))}l&&(_=_||[]).push("style",l);var _e=_;(a.updateQueue=_e)&&(a.flags|=4)}},n0=function(i,a,l,c){l!==c&&(a.flags|=4)};function qo(i,a){if(!Qt)switch(i.tailMode){case"hidden":a=i.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?a||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function Nn(i){var a=i.alternate!==null&&i.alternate.child===i.child,l=0,c=0;if(a)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=c,i.childLanes=l,a}function zE(i,a,l){var c=a.pendingProps;switch(Vd(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nn(a),null;case 1:return Yn(a.type)&&ru(),Nn(a),null;case 3:return c=a.stateNode,Fs(),Zt(qn),Zt(Dn),nf(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(i===null||i.child===null)&&(uu(a)?a.flags|=4:i===null||i.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Hi!==null&&(If(Hi),Hi=null))),Mf(i,a),Nn(a),null;case 5:ef(a);var p=ja(Go.current);if(l=a.type,i!==null&&a.stateNode!=null)t0(i,a,l,c,p),i.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!c){if(a.stateNode===null)throw Error(t(166));return Nn(a),null}if(i=ja(lr.current),uu(a)){c=a.stateNode,l=a.type;var _=a.memoizedProps;switch(c[or]=a,c[Fo]=_,i=(a.mode&1)!==0,l){case"dialog":Kt("cancel",c),Kt("close",c);break;case"iframe":case"object":case"embed":Kt("load",c);break;case"video":case"audio":for(p=0;p<No.length;p++)Kt(No[p],c);break;case"source":Kt("error",c);break;case"img":case"image":case"link":Kt("error",c),Kt("load",c);break;case"details":Kt("toggle",c);break;case"input":Ft(c,_),Kt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!_.multiple},Kt("invalid",c);break;case"textarea":pn(c,_),Kt("invalid",c)}X(l,_),p=null;for(var A in _)if(_.hasOwnProperty(A)){var H=_[A];A==="children"?typeof H=="string"?c.textContent!==H&&(_.suppressHydrationWarning!==!0&&tu(c.textContent,H,i),p=["children",H]):typeof H=="number"&&c.textContent!==""+H&&(_.suppressHydrationWarning!==!0&&tu(c.textContent,H,i),p=["children",""+H]):s.hasOwnProperty(A)&&H!=null&&A==="onScroll"&&Kt("scroll",c)}switch(l){case"input":Je(c),vt(c,_,!0);break;case"textarea":Je(c),mn(c);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(c.onclick=nu)}c=p,a.updateQueue=c,c!==null&&(a.flags|=4)}else{A=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=bt(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=A.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof c.is=="string"?i=A.createElement(l,{is:c.is}):(i=A.createElement(l),l==="select"&&(A=i,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):i=A.createElementNS(i,l),i[or]=a,i[Fo]=c,e0(i,a,!1,!1),a.stateNode=i;e:{switch(A=ce(l,c),l){case"dialog":Kt("cancel",i),Kt("close",i),p=c;break;case"iframe":case"object":case"embed":Kt("load",i),p=c;break;case"video":case"audio":for(p=0;p<No.length;p++)Kt(No[p],i);p=c;break;case"source":Kt("error",i),p=c;break;case"img":case"image":case"link":Kt("error",i),Kt("load",i),p=c;break;case"details":Kt("toggle",i),p=c;break;case"input":Ft(i,c),p=ot(i,c),Kt("invalid",i);break;case"option":p=c;break;case"select":i._wrapperState={wasMultiple:!!c.multiple},p=J({},c,{value:void 0}),Kt("invalid",i);break;case"textarea":pn(i,c),p=an(i,c),Kt("invalid",i);break;default:p=c}X(l,p),H=p;for(_ in H)if(H.hasOwnProperty(_)){var Y=H[_];_==="style"?ue(i,Y):_==="dangerouslySetInnerHTML"?(Y=Y?Y.__html:void 0,Y!=null&&Ht(i,Y)):_==="children"?typeof Y=="string"?(l!=="textarea"||Y!=="")&&Ze(i,Y):typeof Y=="number"&&Ze(i,""+Y):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?Y!=null&&_==="onScroll"&&Kt("scroll",i):Y!=null&&N(i,_,Y,A))}switch(l){case"input":Je(i),vt(i,c,!1);break;case"textarea":Je(i),mn(i);break;case"option":c.value!=null&&i.setAttribute("value",""+ye(c.value));break;case"select":i.multiple=!!c.multiple,_=c.value,_!=null?zt(i,!!c.multiple,_,!1):c.defaultValue!=null&&zt(i,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=nu)}switch(l){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return Nn(a),null;case 6:if(i&&a.stateNode!=null)n0(i,a,i.memoizedProps,c);else{if(typeof c!="string"&&a.stateNode===null)throw Error(t(166));if(l=ja(Go.current),ja(lr.current),uu(a)){if(c=a.stateNode,l=a.memoizedProps,c[or]=a,(_=c.nodeValue!==l)&&(i=ui,i!==null))switch(i.tag){case 3:tu(c.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&tu(c.nodeValue,l,(i.mode&1)!==0)}_&&(a.flags|=4)}else c=(l.nodeType===9?l:l.ownerDocument).createTextNode(c),c[or]=a,a.stateNode=c}return Nn(a),null;case 13:if(Zt(tn),c=a.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Qt&&ci!==null&&(a.mode&1)!==0&&(a.flags&128)===0)av(),Is(),a.flags|=98560,_=!1;else if(_=uu(a),c!==null&&c.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=a.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[or]=a}else Is(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Nn(a),_=!1}else Hi!==null&&(If(Hi),Hi=null),_=!0;if(!_)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=l,a):(c=c!==null,c!==(i!==null&&i.memoizedState!==null)&&c&&(a.child.flags|=8192,(a.mode&1)!==0&&(i===null||(tn.current&1)!==0?Sn===0&&(Sn=3):Uf())),a.updateQueue!==null&&(a.flags|=4),Nn(a),null);case 4:return Fs(),Mf(i,a),i===null&&Oo(a.stateNode.containerInfo),Nn(a),null;case 10:return Kd(a.type._context),Nn(a),null;case 17:return Yn(a.type)&&ru(),Nn(a),null;case 19:if(Zt(tn),_=a.memoizedState,_===null)return Nn(a),null;if(c=(a.flags&128)!==0,A=_.rendering,A===null)if(c)qo(_,!1);else{if(Sn!==0||i!==null&&(i.flags&128)!==0)for(i=a.child;i!==null;){if(A=mu(i),A!==null){for(a.flags|=128,qo(_,!1),c=A.updateQueue,c!==null&&(a.updateQueue=c,a.flags|=4),a.subtreeFlags=0,c=l,l=a.child;l!==null;)_=l,i=c,_.flags&=14680066,A=_.alternate,A===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=A.childLanes,_.lanes=A.lanes,_.child=A.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=A.memoizedProps,_.memoizedState=A.memoizedState,_.updateQueue=A.updateQueue,_.type=A.type,i=A.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Wt(tn,tn.current&1|2),a.child}i=i.sibling}_.tail!==null&&Gt()>Hs&&(a.flags|=128,c=!0,qo(_,!1),a.lanes=4194304)}else{if(!c)if(i=mu(A),i!==null){if(a.flags|=128,c=!0,l=i.updateQueue,l!==null&&(a.updateQueue=l,a.flags|=4),qo(_,!0),_.tail===null&&_.tailMode==="hidden"&&!A.alternate&&!Qt)return Nn(a),null}else 2*Gt()-_.renderingStartTime>Hs&&l!==1073741824&&(a.flags|=128,c=!0,qo(_,!1),a.lanes=4194304);_.isBackwards?(A.sibling=a.child,a.child=A):(l=_.last,l!==null?l.sibling=A:a.child=A,_.last=A)}return _.tail!==null?(a=_.tail,_.rendering=a,_.tail=a.sibling,_.renderingStartTime=Gt(),a.sibling=null,l=tn.current,Wt(tn,c?l&1|2:l&1),a):(Nn(a),null);case 22:case 23:return Of(),c=a.memoizedState!==null,i!==null&&i.memoizedState!==null!==c&&(a.flags|=8192),c&&(a.mode&1)!==0?(di&1073741824)!==0&&(Nn(a),a.subtreeFlags&6&&(a.flags|=8192)):Nn(a),null;case 24:return null;case 25:return null}throw Error(t(156,a.tag))}function HE(i,a){switch(Vd(a),a.tag){case 1:return Yn(a.type)&&ru(),i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 3:return Fs(),Zt(qn),Zt(Dn),nf(),i=a.flags,(i&65536)!==0&&(i&128)===0?(a.flags=i&-65537|128,a):null;case 5:return ef(a),null;case 13:if(Zt(tn),i=a.memoizedState,i!==null&&i.dehydrated!==null){if(a.alternate===null)throw Error(t(340));Is()}return i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 19:return Zt(tn),null;case 4:return Fs(),null;case 10:return Kd(a.type._context),null;case 22:case 23:return Of(),null;case 24:return null;default:return null}}var bu=!1,On=!1,GE=typeof WeakSet=="function"?WeakSet:Set,qe=null;function Bs(i,a){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(c){ln(i,a,c)}else l.current=null}function Ef(i,a,l){try{l()}catch(c){ln(i,a,c)}}var i0=!1;function VE(i,a){if(Nd=Wl,i=Og(),Td(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var p=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var A=0,H=-1,Y=-1,_e=0,Te=0,Pe=i,Ee=null;t:for(;;){for(var He;Pe!==l||p!==0&&Pe.nodeType!==3||(H=A+p),Pe!==_||c!==0&&Pe.nodeType!==3||(Y=A+c),Pe.nodeType===3&&(A+=Pe.nodeValue.length),(He=Pe.firstChild)!==null;)Ee=Pe,Pe=He;for(;;){if(Pe===i)break t;if(Ee===l&&++_e===p&&(H=A),Ee===_&&++Te===c&&(Y=A),(He=Pe.nextSibling)!==null)break;Pe=Ee,Ee=Pe.parentNode}Pe=He}l=H===-1||Y===-1?null:{start:H,end:Y}}else l=null}l=l||{start:0,end:0}}else l=null;for(Od={focusedElem:i,selectionRange:l},Wl=!1,qe=a;qe!==null;)if(a=qe,i=a.child,(a.subtreeFlags&1028)!==0&&i!==null)i.return=a,qe=i;else for(;qe!==null;){a=qe;try{var Ke=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(Ke!==null){var je=Ke.memoizedProps,dn=Ke.memoizedState,fe=a.stateNode,ee=fe.getSnapshotBeforeUpdate(a.elementType===a.type?je:Gi(a.type,je),dn);fe.__reactInternalSnapshotBeforeUpdate=ee}break;case 3:var ge=a.stateNode.containerInfo;ge.nodeType===1?ge.textContent="":ge.nodeType===9&&ge.documentElement&&ge.removeChild(ge.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ie){ln(a,a.return,Ie)}if(i=a.sibling,i!==null){i.return=a.return,qe=i;break}qe=a.return}return Ke=i0,i0=!1,Ke}function Yo(i,a,l){var c=a.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&Ef(a,l,_)}p=p.next}while(p!==c)}}function wu(i,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&i)===i){var c=l.create;l.destroy=c()}l=l.next}while(l!==a)}}function bf(i){var a=i.ref;if(a!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof a=="function"?a(i):a.current=i}}function r0(i){var a=i.alternate;a!==null&&(i.alternate=null,r0(a)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(a=i.stateNode,a!==null&&(delete a[or],delete a[Fo],delete a[Bd],delete a[wE],delete a[TE])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function a0(i){return i.tag===5||i.tag===3||i.tag===4}function s0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||a0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function wf(i,a,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,a?l.nodeType===8?l.parentNode.insertBefore(i,a):l.insertBefore(i,a):(l.nodeType===8?(a=l.parentNode,a.insertBefore(i,l)):(a=l,a.appendChild(i)),l=l._reactRootContainer,l!=null||a.onclick!==null||(a.onclick=nu));else if(c!==4&&(i=i.child,i!==null))for(wf(i,a,l),i=i.sibling;i!==null;)wf(i,a,l),i=i.sibling}function Tf(i,a,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,a?l.insertBefore(i,a):l.appendChild(i);else if(c!==4&&(i=i.child,i!==null))for(Tf(i,a,l),i=i.sibling;i!==null;)Tf(i,a,l),i=i.sibling}var Rn=null,Vi=!1;function pa(i,a,l){for(l=l.child;l!==null;)o0(i,a,l),l=l.sibling}function o0(i,a,l){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount($,l)}catch{}switch(l.tag){case 5:On||Bs(l,a);case 6:var c=Rn,p=Vi;Rn=null,pa(i,a,l),Rn=c,Vi=p,Rn!==null&&(Vi?(i=Rn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Rn.removeChild(l.stateNode));break;case 18:Rn!==null&&(Vi?(i=Rn,l=l.stateNode,i.nodeType===8?kd(i.parentNode,l):i.nodeType===1&&kd(i,l),To(i)):kd(Rn,l.stateNode));break;case 4:c=Rn,p=Vi,Rn=l.stateNode.containerInfo,Vi=!0,pa(i,a,l),Rn=c,Vi=p;break;case 0:case 11:case 14:case 15:if(!On&&(c=l.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var _=p,A=_.destroy;_=_.tag,A!==void 0&&((_&2)!==0||(_&4)!==0)&&Ef(l,a,A),p=p.next}while(p!==c)}pa(i,a,l);break;case 1:if(!On&&(Bs(l,a),c=l.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=l.memoizedProps,c.state=l.memoizedState,c.componentWillUnmount()}catch(H){ln(l,a,H)}pa(i,a,l);break;case 21:pa(i,a,l);break;case 22:l.mode&1?(On=(c=On)||l.memoizedState!==null,pa(i,a,l),On=c):pa(i,a,l);break;default:pa(i,a,l)}}function l0(i){var a=i.updateQueue;if(a!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new GE),a.forEach(function(c){var p=JE.bind(null,i,c);l.has(c)||(l.add(c),c.then(p,p))})}}function Wi(i,a){var l=a.deletions;if(l!==null)for(var c=0;c<l.length;c++){var p=l[c];try{var _=i,A=a,H=A;e:for(;H!==null;){switch(H.tag){case 5:Rn=H.stateNode,Vi=!1;break e;case 3:Rn=H.stateNode.containerInfo,Vi=!0;break e;case 4:Rn=H.stateNode.containerInfo,Vi=!0;break e}H=H.return}if(Rn===null)throw Error(t(160));o0(_,A,p),Rn=null,Vi=!1;var Y=p.alternate;Y!==null&&(Y.return=null),p.return=null}catch(_e){ln(p,a,_e)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)u0(a,i),a=a.sibling}function u0(i,a){var l=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Wi(a,i),cr(i),c&4){try{Yo(3,i,i.return),wu(3,i)}catch(je){ln(i,i.return,je)}try{Yo(5,i,i.return)}catch(je){ln(i,i.return,je)}}break;case 1:Wi(a,i),cr(i),c&512&&l!==null&&Bs(l,l.return);break;case 5:if(Wi(a,i),cr(i),c&512&&l!==null&&Bs(l,l.return),i.flags&32){var p=i.stateNode;try{Ze(p,"")}catch(je){ln(i,i.return,je)}}if(c&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,A=l!==null?l.memoizedProps:_,H=i.type,Y=i.updateQueue;if(i.updateQueue=null,Y!==null)try{H==="input"&&_.type==="radio"&&_.name!=null&&kt(p,_),ce(H,A);var _e=ce(H,_);for(A=0;A<Y.length;A+=2){var Te=Y[A],Pe=Y[A+1];Te==="style"?ue(p,Pe):Te==="dangerouslySetInnerHTML"?Ht(p,Pe):Te==="children"?Ze(p,Pe):N(p,Te,Pe,_e)}switch(H){case"input":Xt(p,_);break;case"textarea":j(p,_);break;case"select":var Ee=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var He=_.value;He!=null?zt(p,!!_.multiple,He,!1):Ee!==!!_.multiple&&(_.defaultValue!=null?zt(p,!!_.multiple,_.defaultValue,!0):zt(p,!!_.multiple,_.multiple?[]:"",!1))}p[Fo]=_}catch(je){ln(i,i.return,je)}}break;case 6:if(Wi(a,i),cr(i),c&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(je){ln(i,i.return,je)}}break;case 3:if(Wi(a,i),cr(i),c&4&&l!==null&&l.memoizedState.isDehydrated)try{To(a.containerInfo)}catch(je){ln(i,i.return,je)}break;case 4:Wi(a,i),cr(i);break;case 13:Wi(a,i),cr(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Cf=Gt())),c&4&&l0(i);break;case 22:if(Te=l!==null&&l.memoizedState!==null,i.mode&1?(On=(_e=On)||Te,Wi(a,i),On=_e):Wi(a,i),cr(i),c&8192){if(_e=i.memoizedState!==null,(i.stateNode.isHidden=_e)&&!Te&&(i.mode&1)!==0)for(qe=i,Te=i.child;Te!==null;){for(Pe=qe=Te;qe!==null;){switch(Ee=qe,He=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:Yo(4,Ee,Ee.return);break;case 1:Bs(Ee,Ee.return);var Ke=Ee.stateNode;if(typeof Ke.componentWillUnmount=="function"){c=Ee,l=Ee.return;try{a=c,Ke.props=a.memoizedProps,Ke.state=a.memoizedState,Ke.componentWillUnmount()}catch(je){ln(c,l,je)}}break;case 5:Bs(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){f0(Pe);continue}}He!==null?(He.return=Ee,qe=He):f0(Pe)}Te=Te.sibling}e:for(Te=null,Pe=i;;){if(Pe.tag===5){if(Te===null){Te=Pe;try{p=Pe.stateNode,_e?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(H=Pe.stateNode,Y=Pe.memoizedProps.style,A=Y!=null&&Y.hasOwnProperty("display")?Y.display:null,H.style.display=R("display",A))}catch(je){ln(i,i.return,je)}}}else if(Pe.tag===6){if(Te===null)try{Pe.stateNode.nodeValue=_e?"":Pe.memoizedProps}catch(je){ln(i,i.return,je)}}else if((Pe.tag!==22&&Pe.tag!==23||Pe.memoizedState===null||Pe===i)&&Pe.child!==null){Pe.child.return=Pe,Pe=Pe.child;continue}if(Pe===i)break e;for(;Pe.sibling===null;){if(Pe.return===null||Pe.return===i)break e;Te===Pe&&(Te=null),Pe=Pe.return}Te===Pe&&(Te=null),Pe.sibling.return=Pe.return,Pe=Pe.sibling}}break;case 19:Wi(a,i),cr(i),c&4&&l0(i);break;case 21:break;default:Wi(a,i),cr(i)}}function cr(i){var a=i.flags;if(a&2){try{e:{for(var l=i.return;l!==null;){if(a0(l)){var c=l;break e}l=l.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(Ze(p,""),c.flags&=-33);var _=s0(i);Tf(i,_,p);break;case 3:case 4:var A=c.stateNode.containerInfo,H=s0(i);wf(i,H,A);break;default:throw Error(t(161))}}catch(Y){ln(i,i.return,Y)}i.flags&=-3}a&4096&&(i.flags&=-4097)}function WE(i,a,l){qe=i,c0(i)}function c0(i,a,l){for(var c=(i.mode&1)!==0;qe!==null;){var p=qe,_=p.child;if(p.tag===22&&c){var A=p.memoizedState!==null||bu;if(!A){var H=p.alternate,Y=H!==null&&H.memoizedState!==null||On;H=bu;var _e=On;if(bu=A,(On=Y)&&!_e)for(qe=p;qe!==null;)A=qe,Y=A.child,A.tag===22&&A.memoizedState!==null?h0(p):Y!==null?(Y.return=A,qe=Y):h0(p);for(;_!==null;)qe=_,c0(_),_=_.sibling;qe=p,bu=H,On=_e}d0(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,qe=_):d0(i)}}function d0(i){for(;qe!==null;){var a=qe;if((a.flags&8772)!==0){var l=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:On||wu(5,a);break;case 1:var c=a.stateNode;if(a.flags&4&&!On)if(l===null)c.componentDidMount();else{var p=a.elementType===a.type?l.memoizedProps:Gi(a.type,l.memoizedProps);c.componentDidUpdate(p,l.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var _=a.updateQueue;_!==null&&fv(a,_,c);break;case 3:var A=a.updateQueue;if(A!==null){if(l=null,a.child!==null)switch(a.child.tag){case 5:l=a.child.stateNode;break;case 1:l=a.child.stateNode}fv(a,A,l)}break;case 5:var H=a.stateNode;if(l===null&&a.flags&4){l=H;var Y=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":Y.autoFocus&&l.focus();break;case"img":Y.src&&(l.src=Y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var _e=a.alternate;if(_e!==null){var Te=_e.memoizedState;if(Te!==null){var Pe=Te.dehydrated;Pe!==null&&To(Pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}On||a.flags&512&&bf(a)}catch(Ee){ln(a,a.return,Ee)}}if(a===i){qe=null;break}if(l=a.sibling,l!==null){l.return=a.return,qe=l;break}qe=a.return}}function f0(i){for(;qe!==null;){var a=qe;if(a===i){qe=null;break}var l=a.sibling;if(l!==null){l.return=a.return,qe=l;break}qe=a.return}}function h0(i){for(;qe!==null;){var a=qe;try{switch(a.tag){case 0:case 11:case 15:var l=a.return;try{wu(4,a)}catch(Y){ln(a,l,Y)}break;case 1:var c=a.stateNode;if(typeof c.componentDidMount=="function"){var p=a.return;try{c.componentDidMount()}catch(Y){ln(a,p,Y)}}var _=a.return;try{bf(a)}catch(Y){ln(a,_,Y)}break;case 5:var A=a.return;try{bf(a)}catch(Y){ln(a,A,Y)}}}catch(Y){ln(a,a.return,Y)}if(a===i){qe=null;break}var H=a.sibling;if(H!==null){H.return=a.return,qe=H;break}qe=a.return}}var $E=Math.ceil,Tu=L.ReactCurrentDispatcher,Rf=L.ReactCurrentOwner,Ri=L.ReactCurrentBatchConfig,Pt=0,bn=null,gn=null,An=0,di=0,zs=ua(0),Sn=0,Ko=null,Qa=0,Ru=0,Af=0,Zo=null,Zn=null,Cf=0,Hs=1/0,Ur=null,Au=!1,Pf=null,ma=null,Cu=!1,ga=null,Pu=0,jo=0,Lf=null,Lu=-1,Du=0;function Gn(){return(Pt&6)!==0?Gt():Lu!==-1?Lu:Lu=Gt()}function va(i){return(i.mode&1)===0?1:(Pt&2)!==0&&An!==0?An&-An:AE.transition!==null?(Du===0&&(Du=Lt()),Du):(i=Ye,i!==0||(i=window.event,i=i===void 0?16:mg(i.type)),i)}function $i(i,a,l,c){if(50<jo)throw jo=0,Lf=null,Error(t(185));Yt(i,l,c),((Pt&2)===0||i!==bn)&&(i===bn&&((Pt&2)===0&&(Ru|=l),Sn===4&&_a(i,An)),jn(i,c),l===1&&Pt===0&&(a.mode&1)===0&&(Hs=Gt()+500,su&&da()))}function jn(i,a){var l=i.callbackNode;mt(i,a);var c=ht(i,i===bn?An:0);if(c===0)l!==null&&zn(l),i.callbackNode=null,i.callbackPriority=0;else if(a=c&-c,i.callbackPriority!==a){if(l!=null&&zn(l),a===1)i.tag===0?RE(m0.bind(null,i)):ev(m0.bind(null,i)),EE(function(){(Pt&6)===0&&da()}),l=null;else{switch(si(c)){case 1:l=ra;break;case 4:l=Ga;break;case 16:l=Ar;break;case 536870912:l=C;break;default:l=Ar}l=E0(l,p0.bind(null,i))}i.callbackPriority=a,i.callbackNode=l}}function p0(i,a){if(Lu=-1,Du=0,(Pt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Gs()&&i.callbackNode!==l)return null;var c=ht(i,i===bn?An:0);if(c===0)return null;if((c&30)!==0||(c&i.expiredLanes)!==0||a)a=Iu(i,c);else{a=c;var p=Pt;Pt|=2;var _=v0();(bn!==i||An!==a)&&(Ur=null,Hs=Gt()+500,ts(i,a));do try{YE();break}catch(H){g0(i,H)}while(!0);Yd(),Tu.current=_,Pt=p,gn!==null?a=0:(bn=null,An=0,a=Sn)}if(a!==0){if(a===2&&(p=Bt(i),p!==0&&(c=p,a=Df(i,p))),a===1)throw l=Ko,ts(i,0),_a(i,c),jn(i,Gt()),l;if(a===6)_a(i,c);else{if(p=i.current.alternate,(c&30)===0&&!XE(p)&&(a=Iu(i,c),a===2&&(_=Bt(i),_!==0&&(c=_,a=Df(i,_))),a===1))throw l=Ko,ts(i,0),_a(i,c),jn(i,Gt()),l;switch(i.finishedWork=p,i.finishedLanes=c,a){case 0:case 1:throw Error(t(345));case 2:ns(i,Zn,Ur);break;case 3:if(_a(i,c),(c&130023424)===c&&(a=Cf+500-Gt(),10<a)){if(ht(i,0)!==0)break;if(p=i.suspendedLanes,(p&c)!==c){Gn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Fd(ns.bind(null,i,Zn,Ur),a);break}ns(i,Zn,Ur);break;case 4:if(_a(i,c),(c&4194240)===c)break;for(a=i.eventTimes,p=-1;0<c;){var A=31-ae(c);_=1<<A,A=a[A],A>p&&(p=A),c&=~_}if(c=p,c=Gt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*$E(c/1960))-c,10<c){i.timeoutHandle=Fd(ns.bind(null,i,Zn,Ur),c);break}ns(i,Zn,Ur);break;case 5:ns(i,Zn,Ur);break;default:throw Error(t(329))}}}return jn(i,Gt()),i.callbackNode===l?p0.bind(null,i):null}function Df(i,a){var l=Zo;return i.current.memoizedState.isDehydrated&&(ts(i,a).flags|=256),i=Iu(i,a),i!==2&&(a=Zn,Zn=l,a!==null&&If(a)),i}function If(i){Zn===null?Zn=i:Zn.push.apply(Zn,i)}function XE(i){for(var a=i;;){if(a.flags&16384){var l=a.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var c=0;c<l.length;c++){var p=l[c],_=p.getSnapshot;p=p.value;try{if(!zi(_(),p))return!1}catch{return!1}}}if(l=a.child,a.subtreeFlags&16384&&l!==null)l.return=a,a=l;else{if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function _a(i,a){for(a&=~Af,a&=~Ru,i.suspendedLanes|=a,i.pingedLanes&=~a,i=i.expirationTimes;0<a;){var l=31-ae(a),c=1<<l;i[l]=-1,a&=~c}}function m0(i){if((Pt&6)!==0)throw Error(t(327));Gs();var a=ht(i,0);if((a&1)===0)return jn(i,Gt()),null;var l=Iu(i,a);if(i.tag!==0&&l===2){var c=Bt(i);c!==0&&(a=c,l=Df(i,c))}if(l===1)throw l=Ko,ts(i,0),_a(i,a),jn(i,Gt()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=a,ns(i,Zn,Ur),jn(i,Gt()),null}function Nf(i,a){var l=Pt;Pt|=1;try{return i(a)}finally{Pt=l,Pt===0&&(Hs=Gt()+500,su&&da())}}function es(i){ga!==null&&ga.tag===0&&(Pt&6)===0&&Gs();var a=Pt;Pt|=1;var l=Ri.transition,c=Ye;try{if(Ri.transition=null,Ye=1,i)return i()}finally{Ye=c,Ri.transition=l,Pt=a,(Pt&6)===0&&da()}}function Of(){di=zs.current,Zt(zs)}function ts(i,a){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,ME(l)),gn!==null)for(l=gn.return;l!==null;){var c=l;switch(Vd(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ru();break;case 3:Fs(),Zt(qn),Zt(Dn),nf();break;case 5:ef(c);break;case 4:Fs();break;case 13:Zt(tn);break;case 19:Zt(tn);break;case 10:Kd(c.type._context);break;case 22:case 23:Of()}l=l.return}if(bn=i,gn=i=ya(i.current,null),An=di=a,Sn=0,Ko=null,Af=Ru=Qa=0,Zn=Zo=null,Za!==null){for(a=0;a<Za.length;a++)if(l=Za[a],c=l.interleaved,c!==null){l.interleaved=null;var p=c.next,_=l.pending;if(_!==null){var A=_.next;_.next=p,c.next=A}l.pending=c}Za=null}return i}function g0(i,a){do{var l=gn;try{if(Yd(),gu.current=Su,vu){for(var c=nn.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}vu=!1}if(Ja=0,En=yn=nn=null,Vo=!1,Wo=0,Rf.current=null,l===null||l.return===null){Sn=1,Ko=a,gn=null;break}e:{var _=i,A=l.return,H=l,Y=a;if(a=An,H.flags|=32768,Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var _e=Y,Te=H,Pe=Te.tag;if((Te.mode&1)===0&&(Pe===0||Pe===11||Pe===15)){var Ee=Te.alternate;Ee?(Te.updateQueue=Ee.updateQueue,Te.memoizedState=Ee.memoizedState,Te.lanes=Ee.lanes):(Te.updateQueue=null,Te.memoizedState=null)}var He=Hv(A);if(He!==null){He.flags&=-257,Gv(He,A,H,_,a),He.mode&1&&zv(_,_e,a),a=He,Y=_e;var Ke=a.updateQueue;if(Ke===null){var je=new Set;je.add(Y),a.updateQueue=je}else Ke.add(Y);break e}else{if((a&1)===0){zv(_,_e,a),Uf();break e}Y=Error(t(426))}}else if(Qt&&H.mode&1){var dn=Hv(A);if(dn!==null){(dn.flags&65536)===0&&(dn.flags|=256),Gv(dn,A,H,_,a),Xd(ks(Y,H));break e}}_=Y=ks(Y,H),Sn!==4&&(Sn=2),Zo===null?Zo=[_]:Zo.push(_),_=A;do{switch(_.tag){case 3:_.flags|=65536,a&=-a,_.lanes|=a;var fe=kv(_,Y,a);dv(_,fe);break e;case 1:H=Y;var ee=_.type,ge=_.stateNode;if((_.flags&128)===0&&(typeof ee.getDerivedStateFromError=="function"||ge!==null&&typeof ge.componentDidCatch=="function"&&(ma===null||!ma.has(ge)))){_.flags|=65536,a&=-a,_.lanes|=a;var Ie=Bv(_,H,a);dv(_,Ie);break e}}_=_.return}while(_!==null)}y0(l)}catch(et){a=et,gn===l&&l!==null&&(gn=l=l.return);continue}break}while(!0)}function v0(){var i=Tu.current;return Tu.current=Su,i===null?Su:i}function Uf(){(Sn===0||Sn===3||Sn===2)&&(Sn=4),bn===null||(Qa&268435455)===0&&(Ru&268435455)===0||_a(bn,An)}function Iu(i,a){var l=Pt;Pt|=2;var c=v0();(bn!==i||An!==a)&&(Ur=null,ts(i,a));do try{qE();break}catch(p){g0(i,p)}while(!0);if(Yd(),Pt=l,Tu.current=c,gn!==null)throw Error(t(261));return bn=null,An=0,Sn}function qE(){for(;gn!==null;)_0(gn)}function YE(){for(;gn!==null&&!sr();)_0(gn)}function _0(i){var a=M0(i.alternate,i,di);i.memoizedProps=i.pendingProps,a===null?y0(i):gn=a,Rf.current=null}function y0(i){var a=i;do{var l=a.alternate;if(i=a.return,(a.flags&32768)===0){if(l=zE(l,a,di),l!==null){gn=l;return}}else{if(l=HE(l,a),l!==null){l.flags&=32767,gn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Sn=6,gn=null;return}}if(a=a.sibling,a!==null){gn=a;return}gn=a=i}while(a!==null);Sn===0&&(Sn=5)}function ns(i,a,l){var c=Ye,p=Ri.transition;try{Ri.transition=null,Ye=1,KE(i,a,l,c)}finally{Ri.transition=p,Ye=c}return null}function KE(i,a,l,c){do Gs();while(ga!==null);if((Pt&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if($e(i,_),i===bn&&(gn=bn=null,An=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Cu||(Cu=!0,E0(Ar,function(){return Gs(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=Ri.transition,Ri.transition=null;var A=Ye;Ye=1;var H=Pt;Pt|=4,Rf.current=null,VE(i,l),u0(l,i),mE(Od),Wl=!!Nd,Od=Nd=null,i.current=l,WE(l),ys(),Pt=H,Ye=A,Ri.transition=_}else i.current=l;if(Cu&&(Cu=!1,ga=i,Pu=p),_=i.pendingLanes,_===0&&(ma=null),de(l.stateNode),jn(i,Gt()),a!==null)for(c=i.onRecoverableError,l=0;l<a.length;l++)p=a[l],c(p.value,{componentStack:p.stack,digest:p.digest});if(Au)throw Au=!1,i=Pf,Pf=null,i;return(Pu&1)!==0&&i.tag!==0&&Gs(),_=i.pendingLanes,(_&1)!==0?i===Lf?jo++:(jo=0,Lf=i):jo=0,da(),null}function Gs(){if(ga!==null){var i=si(Pu),a=Ri.transition,l=Ye;try{if(Ri.transition=null,Ye=16>i?16:i,ga===null)var c=!1;else{if(i=ga,ga=null,Pu=0,(Pt&6)!==0)throw Error(t(331));var p=Pt;for(Pt|=4,qe=i.current;qe!==null;){var _=qe,A=_.child;if((qe.flags&16)!==0){var H=_.deletions;if(H!==null){for(var Y=0;Y<H.length;Y++){var _e=H[Y];for(qe=_e;qe!==null;){var Te=qe;switch(Te.tag){case 0:case 11:case 15:Yo(8,Te,_)}var Pe=Te.child;if(Pe!==null)Pe.return=Te,qe=Pe;else for(;qe!==null;){Te=qe;var Ee=Te.sibling,He=Te.return;if(r0(Te),Te===_e){qe=null;break}if(Ee!==null){Ee.return=He,qe=Ee;break}qe=He}}}var Ke=_.alternate;if(Ke!==null){var je=Ke.child;if(je!==null){Ke.child=null;do{var dn=je.sibling;je.sibling=null,je=dn}while(je!==null)}}qe=_}}if((_.subtreeFlags&2064)!==0&&A!==null)A.return=_,qe=A;else e:for(;qe!==null;){if(_=qe,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Yo(9,_,_.return)}var fe=_.sibling;if(fe!==null){fe.return=_.return,qe=fe;break e}qe=_.return}}var ee=i.current;for(qe=ee;qe!==null;){A=qe;var ge=A.child;if((A.subtreeFlags&2064)!==0&&ge!==null)ge.return=A,qe=ge;else e:for(A=ee;qe!==null;){if(H=qe,(H.flags&2048)!==0)try{switch(H.tag){case 0:case 11:case 15:wu(9,H)}}catch(et){ln(H,H.return,et)}if(H===A){qe=null;break e}var Ie=H.sibling;if(Ie!==null){Ie.return=H.return,qe=Ie;break e}qe=H.return}}if(Pt=p,da(),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot($,i)}catch{}c=!0}return c}finally{Ye=l,Ri.transition=a}}return!1}function S0(i,a,l){a=ks(l,a),a=kv(i,a,1),i=ha(i,a,1),a=Gn(),i!==null&&(Yt(i,1,a),jn(i,a))}function ln(i,a,l){if(i.tag===3)S0(i,i,l);else for(;a!==null;){if(a.tag===3){S0(a,i,l);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ma===null||!ma.has(c))){i=ks(l,i),i=Bv(a,i,1),a=ha(a,i,1),i=Gn(),a!==null&&(Yt(a,1,i),jn(a,i));break}}a=a.return}}function ZE(i,a,l){var c=i.pingCache;c!==null&&c.delete(a),a=Gn(),i.pingedLanes|=i.suspendedLanes&l,bn===i&&(An&l)===l&&(Sn===4||Sn===3&&(An&130023424)===An&&500>Gt()-Cf?ts(i,0):Af|=l),jn(i,a)}function x0(i,a){a===0&&((i.mode&1)===0?a=1:(a=Ve,Ve<<=1,(Ve&130023424)===0&&(Ve=4194304)));var l=Gn();i=Ir(i,a),i!==null&&(Yt(i,a,l),jn(i,l))}function jE(i){var a=i.memoizedState,l=0;a!==null&&(l=a.retryLane),x0(i,l)}function JE(i,a){var l=0;switch(i.tag){case 13:var c=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:c=i.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(a),x0(i,l)}var M0;M0=function(i,a,l){if(i!==null)if(i.memoizedProps!==a.pendingProps||qn.current)Kn=!0;else{if((i.lanes&l)===0&&(a.flags&128)===0)return Kn=!1,BE(i,a,l);Kn=(i.flags&131072)!==0}else Kn=!1,Qt&&(a.flags&1048576)!==0&&tv(a,lu,a.index);switch(a.lanes=0,a.tag){case 2:var c=a.type;Eu(i,a),i=a.pendingProps;var p=Ps(a,Dn.current);Us(a,l),p=sf(null,a,c,i,p,l);var _=of();return a.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Yn(c)?(_=!0,au(a)):_=!1,a.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Jd(a),p.updater=xu,a.stateNode=p,p._reactInternals=a,hf(a,c,i,l),a=vf(null,a,c,!0,_,l)):(a.tag=0,Qt&&_&&Gd(a),Hn(null,a,p,l),a=a.child),a;case 16:c=a.elementType;e:{switch(Eu(i,a),i=a.pendingProps,p=c._init,c=p(c._payload),a.type=c,p=a.tag=eb(c),i=Gi(c,i),p){case 0:a=gf(null,a,c,i,l);break e;case 1:a=Yv(null,a,c,i,l);break e;case 11:a=Vv(null,a,c,i,l);break e;case 14:a=Wv(null,a,c,Gi(c.type,i),l);break e}throw Error(t(306,c,""))}return a;case 0:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:Gi(c,p),gf(i,a,c,p,l);case 1:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:Gi(c,p),Yv(i,a,c,p,l);case 3:e:{if(Kv(a),i===null)throw Error(t(387));c=a.pendingProps,_=a.memoizedState,p=_.element,cv(i,a),pu(a,c,null,l);var A=a.memoizedState;if(c=A.element,_.isDehydrated)if(_={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},a.updateQueue.baseState=_,a.memoizedState=_,a.flags&256){p=ks(Error(t(423)),a),a=Zv(i,a,c,l,p);break e}else if(c!==p){p=ks(Error(t(424)),a),a=Zv(i,a,c,l,p);break e}else for(ci=la(a.stateNode.containerInfo.firstChild),ui=a,Qt=!0,Hi=null,l=lv(a,null,c,l),a.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Is(),c===p){a=Or(i,a,l);break e}Hn(i,a,c,l)}a=a.child}return a;case 5:return hv(a),i===null&&$d(a),c=a.type,p=a.pendingProps,_=i!==null?i.memoizedProps:null,A=p.children,Ud(c,p)?A=null:_!==null&&Ud(c,_)&&(a.flags|=32),qv(i,a),Hn(i,a,A,l),a.child;case 6:return i===null&&$d(a),null;case 13:return jv(i,a,l);case 4:return Qd(a,a.stateNode.containerInfo),c=a.pendingProps,i===null?a.child=Ns(a,null,c,l):Hn(i,a,c,l),a.child;case 11:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:Gi(c,p),Vv(i,a,c,p,l);case 7:return Hn(i,a,a.pendingProps,l),a.child;case 8:return Hn(i,a,a.pendingProps.children,l),a.child;case 12:return Hn(i,a,a.pendingProps.children,l),a.child;case 10:e:{if(c=a.type._context,p=a.pendingProps,_=a.memoizedProps,A=p.value,Wt(du,c._currentValue),c._currentValue=A,_!==null)if(zi(_.value,A)){if(_.children===p.children&&!qn.current){a=Or(i,a,l);break e}}else for(_=a.child,_!==null&&(_.return=a);_!==null;){var H=_.dependencies;if(H!==null){A=_.child;for(var Y=H.firstContext;Y!==null;){if(Y.context===c){if(_.tag===1){Y=Nr(-1,l&-l),Y.tag=2;var _e=_.updateQueue;if(_e!==null){_e=_e.shared;var Te=_e.pending;Te===null?Y.next=Y:(Y.next=Te.next,Te.next=Y),_e.pending=Y}}_.lanes|=l,Y=_.alternate,Y!==null&&(Y.lanes|=l),Zd(_.return,l,a),H.lanes|=l;break}Y=Y.next}}else if(_.tag===10)A=_.type===a.type?null:_.child;else if(_.tag===18){if(A=_.return,A===null)throw Error(t(341));A.lanes|=l,H=A.alternate,H!==null&&(H.lanes|=l),Zd(A,l,a),A=_.sibling}else A=_.child;if(A!==null)A.return=_;else for(A=_;A!==null;){if(A===a){A=null;break}if(_=A.sibling,_!==null){_.return=A.return,A=_;break}A=A.return}_=A}Hn(i,a,p.children,l),a=a.child}return a;case 9:return p=a.type,c=a.pendingProps.children,Us(a,l),p=wi(p),c=c(p),a.flags|=1,Hn(i,a,c,l),a.child;case 14:return c=a.type,p=Gi(c,a.pendingProps),p=Gi(c.type,p),Wv(i,a,c,p,l);case 15:return $v(i,a,a.type,a.pendingProps,l);case 17:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:Gi(c,p),Eu(i,a),a.tag=1,Yn(c)?(i=!0,au(a)):i=!1,Us(a,l),Uv(a,c,p),hf(a,c,p,l),vf(null,a,c,!0,i,l);case 19:return Qv(i,a,l);case 22:return Xv(i,a,l)}throw Error(t(156,a.tag))};function E0(i,a){return za(i,a)}function QE(i,a,l,c){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ai(i,a,l,c){return new QE(i,a,l,c)}function Ff(i){return i=i.prototype,!(!i||!i.isReactComponent)}function eb(i){if(typeof i=="function")return Ff(i)?1:0;if(i!=null){if(i=i.$$typeof,i===W)return 11;if(i===le)return 14}return 2}function ya(i,a){var l=i.alternate;return l===null?(l=Ai(i.tag,a,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=a,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,a=i.dependencies,l.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Nu(i,a,l,c,p,_){var A=2;if(c=i,typeof i=="function")Ff(i)&&(A=1);else if(typeof i=="string")A=5;else e:switch(i){case w:return is(l.children,p,_,a);case P:A=8,p|=8;break;case V:return i=Ai(12,l,a,p|2),i.elementType=V,i.lanes=_,i;case Z:return i=Ai(13,l,a,p),i.elementType=Z,i.lanes=_,i;case B:return i=Ai(19,l,a,p),i.elementType=B,i.lanes=_,i;case ne:return Ou(l,p,_,a);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case I:A=10;break e;case z:A=9;break e;case W:A=11;break e;case le:A=14;break e;case re:A=16,c=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return a=Ai(A,l,a,p),a.elementType=i,a.type=c,a.lanes=_,a}function is(i,a,l,c){return i=Ai(7,i,c,a),i.lanes=l,i}function Ou(i,a,l,c){return i=Ai(22,i,c,a),i.elementType=ne,i.lanes=l,i.stateNode={isHidden:!1},i}function kf(i,a,l){return i=Ai(6,i,null,a),i.lanes=l,i}function Bf(i,a,l){return a=Ai(4,i.children!==null?i.children:[],i.key,a),a.lanes=l,a.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},a}function tb(i,a,l,c,p){this.tag=a,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=At(0),this.expirationTimes=At(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function zf(i,a,l,c,p,_,A,H,Y){return i=new tb(i,a,l,H,Y),a===1?(a=1,_===!0&&(a|=8)):a=0,_=Ai(3,null,null,a),i.current=_,_.stateNode=i,_.memoizedState={element:c,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jd(_),i}function nb(i,a,l){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:i,containerInfo:a,implementation:l}}function b0(i){if(!i)return ca;i=i._reactInternals;e:{if(Mi(i)!==i||i.tag!==1)throw Error(t(170));var a=i;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Yn(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Yn(l))return Jg(i,l,a)}return a}function w0(i,a,l,c,p,_,A,H,Y){return i=zf(l,c,!0,i,p,_,A,H,Y),i.context=b0(null),l=i.current,c=Gn(),p=va(l),_=Nr(c,p),_.callback=a??null,ha(l,_,p),i.current.lanes=p,Yt(i,p,c),jn(i,c),i}function Uu(i,a,l,c){var p=a.current,_=Gn(),A=va(p);return l=b0(l),a.context===null?a.context=l:a.pendingContext=l,a=Nr(_,A),a.payload={element:i},c=c===void 0?null:c,c!==null&&(a.callback=c),i=ha(p,a,A),i!==null&&($i(i,p,A,_),hu(i,p,A)),A}function Fu(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function T0(i,a){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<a?l:a}}function Hf(i,a){T0(i,a),(i=i.alternate)&&T0(i,a)}function ib(){return null}var R0=typeof reportError=="function"?reportError:function(i){console.error(i)};function Gf(i){this._internalRoot=i}ku.prototype.render=Gf.prototype.render=function(i){var a=this._internalRoot;if(a===null)throw Error(t(409));Uu(i,a,null,null)},ku.prototype.unmount=Gf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var a=i.containerInfo;es(function(){Uu(null,i,null,null)}),a[Cr]=null}};function ku(i){this._internalRoot=i}ku.prototype.unstable_scheduleHydration=function(i){if(i){var a=oi();i={blockedOn:null,target:i,priority:a};for(var l=0;l<Bi.length&&a!==0&&a<Bi[l].priority;l++);Bi.splice(l,0,i),l===0&&Eo(i)}};function Vf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Bu(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function A0(){}function rb(i,a,l,c,p){if(p){if(typeof c=="function"){var _=c;c=function(){var _e=Fu(A);_.call(_e)}}var A=w0(a,c,i,0,null,!1,!1,"",A0);return i._reactRootContainer=A,i[Cr]=A.current,Oo(i.nodeType===8?i.parentNode:i),es(),A}for(;p=i.lastChild;)i.removeChild(p);if(typeof c=="function"){var H=c;c=function(){var _e=Fu(Y);H.call(_e)}}var Y=zf(i,0,!1,null,null,!1,!1,"",A0);return i._reactRootContainer=Y,i[Cr]=Y.current,Oo(i.nodeType===8?i.parentNode:i),es(function(){Uu(a,Y,l,c)}),Y}function zu(i,a,l,c,p){var _=l._reactRootContainer;if(_){var A=_;if(typeof p=="function"){var H=p;p=function(){var Y=Fu(A);H.call(Y)}}Uu(a,A,i,p)}else A=rb(l,a,i,p,c);return Fu(A)}on=function(i){switch(i.tag){case 3:var a=i.stateNode;if(a.current.memoizedState.isDehydrated){var l=nt(a.pendingLanes);l!==0&&(sn(a,l|1),jn(a,Gt()),(Pt&6)===0&&(Hs=Gt()+500,da()))}break;case 13:es(function(){var c=Ir(i,1);if(c!==null){var p=Gn();$i(c,i,1,p)}}),Hf(i,1)}},Fi=function(i){if(i.tag===13){var a=Ir(i,134217728);if(a!==null){var l=Gn();$i(a,i,134217728,l)}Hf(i,134217728)}},Xn=function(i){if(i.tag===13){var a=va(i),l=Ir(i,a);if(l!==null){var c=Gn();$i(l,i,a,c)}Hf(i,a)}},oi=function(){return Ye},_t=function(i,a){var l=Ye;try{return Ye=i,a()}finally{Ye=l}},te=function(i,a,l){switch(a){case"input":if(Xt(i,l),a=l.name,l.type==="radio"&&a!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<l.length;a++){var c=l[a];if(c!==i&&c.form===i.form){var p=iu(c);if(!p)throw Error(t(90));pt(c),Xt(c,p)}}}break;case"textarea":j(i,l);break;case"select":a=l.value,a!=null&&zt(i,!!l.multiple,a,!1)}},Ae=Nf,Le=es;var ab={usingClientEntryPoint:!1,Events:[ko,As,iu,pe,be,Nf]},Jo={findFiberByHostInstance:Xa,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sb={bundleType:Jo.bundleType,version:Jo.version,rendererPackageName:Jo.rendererPackageName,rendererConfig:Jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=ia(i),i===null?null:i.stateNode},findFiberByHostInstance:Jo.findFiberByHostInstance||ib,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hu.isDisabled&&Hu.supportsFiber)try{$=Hu.inject(sb),he=Hu}catch{}}return Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ab,Jn.createPortal=function(i,a){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vf(a))throw Error(t(200));return nb(i,a,null,l)},Jn.createRoot=function(i,a){if(!Vf(i))throw Error(t(299));var l=!1,c="",p=R0;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onRecoverableError!==void 0&&(p=a.onRecoverableError)),a=zf(i,1,!1,null,null,l,!1,c,p),i[Cr]=a.current,Oo(i.nodeType===8?i.parentNode:i),new Gf(a)},Jn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var a=i._reactInternals;if(a===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=ia(a),i=i===null?null:i.stateNode,i},Jn.flushSync=function(i){return es(i)},Jn.hydrate=function(i,a,l){if(!Bu(a))throw Error(t(200));return zu(null,i,a,!0,l)},Jn.hydrateRoot=function(i,a,l){if(!Vf(i))throw Error(t(405));var c=l!=null&&l.hydratedSources||null,p=!1,_="",A=R0;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),a=w0(a,null,i,1,l??null,p,!1,_,A),i[Cr]=a.current,Oo(i),c)for(i=0;i<c.length;i++)l=c[i],p=l._getVersion,p=p(l._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[l,p]:a.mutableSourceEagerHydrationData.push(l,p);return new ku(a)},Jn.render=function(i,a,l){if(!Bu(a))throw Error(t(200));return zu(null,i,a,!1,l)},Jn.unmountComponentAtNode=function(i){if(!Bu(i))throw Error(t(40));return i._reactRootContainer?(es(function(){zu(null,null,i,!1,function(){i._reactRootContainer=null,i[Cr]=null})}),!0):!1},Jn.unstable_batchedUpdates=Nf,Jn.unstable_renderSubtreeIntoContainer=function(i,a,l,c){if(!Bu(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return zu(i,a,l,!1,c)},Jn.version="18.3.1-next-f1338f8080-20240426",Jn}var O0;function lS(){if(O0)return $f.exports;O0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),$f.exports=hb(),$f.exports}var U0;function pb(){if(U0)return Gu;U0=1;var n=lS();return Gu.createRoot=n.createRoot,Gu.hydrateRoot=n.hydrateRoot,Gu}var mb=pb(),gb=lS();function bl(n){"@babel/helpers - typeof";return bl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bl(n)}function vb(n,e){if(bl(n)!="object"||!n)return n;var t;if(typeof Symbol<"u"&&(t=n[Symbol.toPrimitive])!==void 0){var r=t.call(n,e);if(bl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function _b(n){var e=vb(n,"string");return bl(e)=="symbol"?e:e+""}function yb(n,e,t){return(e=_b(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function F0(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,r)}return t}function Ni(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?F0(Object(t),!0).forEach(function(r){yb(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):F0(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Hc(){return Hc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Hc.apply(null,arguments)}function gs(n,e){if(n==null)return{};var t={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.indexOf(r)!==-1)continue;t[r]=n[r]}return t}var Sb=n=>n.disabled||Array.isArray(n.accessibilityStates)&&n.accessibilityStates.indexOf("disabled")>-1,xb={adjustable:"slider",button:"button",header:"heading",image:"img",imagebutton:null,keyboardkey:null,label:null,link:"link",none:"presentation",search:"search",summary:"region",text:null},uS=n=>{var e=n.accessibilityRole,t=n.role,r=t||e;if(r){var s=xb[r];if(s!==null)return s||r}},Mb={article:"article",banner:"header",blockquote:"blockquote",button:"button",code:"code",complementary:"aside",contentinfo:"footer",deletion:"del",emphasis:"em",figure:"figure",insertion:"ins",form:"form",list:"ul",listitem:"li",main:"main",navigation:"nav",paragraph:"p",region:"section",strong:"strong"},Eb={},bb=function(e){e===void 0&&(e=Eb);var t=e.role||e.accessibilityRole;if(t==="label")return"label";var r=uS(e);if(r){if(r==="heading"){var s=e.accessibilityLevel||e["aria-level"];return s!=null?"h"+s:"h1"}return Mb[r]}},cS={isDisabled:Sb,propsToAccessibilityComponent:bb,propsToAriaRole:uS},Cc={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexOrder:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,gridRow:!0,gridRowEnd:!0,gridRowGap:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnGap:!0,gridColumnStart:!0,lineClamp:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0,scale:!0,scaleX:!0,scaleY:!0,scaleZ:!0,shadowOpacity:!0},wb=["ms","Moz","O","Webkit"],Tb=(n,e)=>n+e.charAt(0).toUpperCase()+e.substring(1);Object.keys(Cc).forEach(n=>{wb.forEach(e=>{Cc[Tb(e,n)]=Cc[n]})});var Rb=n=>n==="currentcolor"||n==="currentColor"||n==="inherit"||n.indexOf("var(")===0,Yf,k0;function Ab(){if(k0)return Yf;k0=1;function n(y){if(typeof y=="number")return y>>>0===y&&y>=0&&y<=4294967295?y:null;if(typeof y!="string")return null;const S=g();let b;if(b=S.hex6.exec(y))return parseInt(b[1]+"ff",16)>>>0;const N=T(y);return N??((b=S.rgb.exec(y))?(m(b[1])<<24|m(b[2])<<16|m(b[3])<<8|255)>>>0:(b=S.rgba.exec(y))?b[6]!==void 0?(m(b[6])<<24|m(b[7])<<16|m(b[8])<<8|x(b[9]))>>>0:(m(b[2])<<24|m(b[3])<<16|m(b[4])<<8|x(b[5]))>>>0:(b=S.hex3.exec(y))?parseInt(b[1]+b[1]+b[2]+b[2]+b[3]+b[3]+"ff",16)>>>0:(b=S.hex8.exec(y))?parseInt(b[1],16)>>>0:(b=S.hex4.exec(y))?parseInt(b[1]+b[1]+b[2]+b[2]+b[3]+b[3]+b[4]+b[4],16)>>>0:(b=S.hsl.exec(y))?(t(v(b[1]),E(b[2]),E(b[3]))|255)>>>0:(b=S.hsla.exec(y))?b[6]!==void 0?(t(v(b[6]),E(b[7]),E(b[8]))|x(b[9]))>>>0:(t(v(b[2]),E(b[3]),E(b[4]))|x(b[5]))>>>0:(b=S.hwb.exec(y))?(r(v(b[1]),E(b[2]),E(b[3]))|255)>>>0:null)}function e(y,S,b){return b<0&&(b+=1),b>1&&(b-=1),b<1/6?y+(S-y)*6*b:b<1/2?S:b<2/3?y+(S-y)*(2/3-b)*6:y}function t(y,S,b){const N=b<.5?b*(1+S):b+S-b*S,L=2*b-N,O=e(L,N,y+1/3),D=e(L,N,y),w=e(L,N,y-1/3);return Math.round(O*255)<<24|Math.round(D*255)<<16|Math.round(w*255)<<8}function r(y,S,b){if(S+b>=1){const D=Math.round(S*255/(S+b));return D<<24|D<<16|D<<8}const N=e(0,1,y+1/3)*(1-S-b)+S,L=e(0,1,y)*(1-S-b)+S,O=e(0,1,y-1/3)*(1-S-b)+S;return Math.round(N*255)<<24|Math.round(L*255)<<16|Math.round(O*255)<<8}const s="[-+]?\\d*\\.?\\d+",o=s+"%";function u(...y){return"\\(\\s*("+y.join(")\\s*,?\\s*(")+")\\s*\\)"}function d(...y){return"\\(\\s*("+y.slice(0,y.length-1).join(")\\s*,?\\s*(")+")\\s*/\\s*("+y[y.length-1]+")\\s*\\)"}function f(...y){return"\\(\\s*("+y.join(")\\s*,\\s*(")+")\\s*\\)"}let h;function g(){return h===void 0&&(h={rgb:new RegExp("rgb"+u(s,s,s)),rgba:new RegExp("rgba("+f(s,s,s,s)+"|"+d(s,s,s,s)+")"),hsl:new RegExp("hsl"+u(s,o,o)),hsla:new RegExp("hsla("+f(s,o,o,s)+"|"+d(s,o,o,s)+")"),hwb:new RegExp("hwb"+u(s,o,o)),hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex4:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{6})$/,hex8:/^#([0-9a-fA-F]{8})$/}),h}function m(y){const S=parseInt(y,10);return S<0?0:S>255?255:S}function v(y){return(parseFloat(y)%360+360)%360/360}function x(y){const S=parseFloat(y);return S<0?0:S>1?255:Math.round(S*255)}function E(y){const S=parseFloat(y);return S<0?0:S>100?1:S/100}function T(y){switch(y){case"transparent":return 0;case"aliceblue":return 4042850303;case"antiquewhite":return 4209760255;case"aqua":return 16777215;case"aquamarine":return 2147472639;case"azure":return 4043309055;case"beige":return 4126530815;case"bisque":return 4293182719;case"black":return 255;case"blanchedalmond":return 4293643775;case"blue":return 65535;case"blueviolet":return 2318131967;case"brown":return 2771004159;case"burlywood":return 3736635391;case"burntsienna":return 3934150143;case"cadetblue":return 1604231423;case"chartreuse":return 2147418367;case"chocolate":return 3530104575;case"coral":return 4286533887;case"cornflowerblue":return 1687547391;case"cornsilk":return 4294499583;case"crimson":return 3692313855;case"cyan":return 16777215;case"darkblue":return 35839;case"darkcyan":return 9145343;case"darkgoldenrod":return 3095792639;case"darkgray":return 2846468607;case"darkgreen":return 6553855;case"darkgrey":return 2846468607;case"darkkhaki":return 3182914559;case"darkmagenta":return 2332068863;case"darkolivegreen":return 1433087999;case"darkorange":return 4287365375;case"darkorchid":return 2570243327;case"darkred":return 2332033279;case"darksalmon":return 3918953215;case"darkseagreen":return 2411499519;case"darkslateblue":return 1211993087;case"darkslategray":return 793726975;case"darkslategrey":return 793726975;case"darkturquoise":return 13554175;case"darkviolet":return 2483082239;case"deeppink":return 4279538687;case"deepskyblue":return 12582911;case"dimgray":return 1768516095;case"dimgrey":return 1768516095;case"dodgerblue":return 512819199;case"firebrick":return 2988581631;case"floralwhite":return 4294635775;case"forestgreen":return 579543807;case"fuchsia":return 4278255615;case"gainsboro":return 3705462015;case"ghostwhite":return 4177068031;case"gold":return 4292280575;case"goldenrod":return 3668254975;case"gray":return 2155905279;case"green":return 8388863;case"greenyellow":return 2919182335;case"grey":return 2155905279;case"honeydew":return 4043305215;case"hotpink":return 4285117695;case"indianred":return 3445382399;case"indigo":return 1258324735;case"ivory":return 4294963455;case"khaki":return 4041641215;case"lavender":return 3873897215;case"lavenderblush":return 4293981695;case"lawngreen":return 2096890111;case"lemonchiffon":return 4294626815;case"lightblue":return 2916673279;case"lightcoral":return 4034953471;case"lightcyan":return 3774873599;case"lightgoldenrodyellow":return 4210742015;case"lightgray":return 3553874943;case"lightgreen":return 2431553791;case"lightgrey":return 3553874943;case"lightpink":return 4290167295;case"lightsalmon":return 4288707327;case"lightseagreen":return 548580095;case"lightskyblue":return 2278488831;case"lightslategray":return 2005441023;case"lightslategrey":return 2005441023;case"lightsteelblue":return 2965692159;case"lightyellow":return 4294959359;case"lime":return 16711935;case"limegreen":return 852308735;case"linen":return 4210091775;case"magenta":return 4278255615;case"maroon":return 2147483903;case"mediumaquamarine":return 1724754687;case"mediumblue":return 52735;case"mediumorchid":return 3126187007;case"mediumpurple":return 2473647103;case"mediumseagreen":return 1018393087;case"mediumslateblue":return 2070474495;case"mediumspringgreen":return 16423679;case"mediumturquoise":return 1221709055;case"mediumvioletred":return 3340076543;case"midnightblue":return 421097727;case"mintcream":return 4127193855;case"mistyrose":return 4293190143;case"moccasin":return 4293178879;case"navajowhite":return 4292783615;case"navy":return 33023;case"oldlace":return 4260751103;case"olive":return 2155872511;case"olivedrab":return 1804477439;case"orange":return 4289003775;case"orangered":return 4282712319;case"orchid":return 3664828159;case"palegoldenrod":return 4008225535;case"palegreen":return 2566625535;case"paleturquoise":return 2951671551;case"palevioletred":return 3681588223;case"papayawhip":return 4293907967;case"peachpuff":return 4292524543;case"peru":return 3448061951;case"pink":return 4290825215;case"plum":return 3718307327;case"powderblue":return 2967529215;case"purple":return 2147516671;case"rebeccapurple":return 1714657791;case"red":return 4278190335;case"rosybrown":return 3163525119;case"royalblue":return 1097458175;case"saddlebrown":return 2336560127;case"salmon":return 4202722047;case"sandybrown":return 4104413439;case"seagreen":return 780883967;case"seashell":return 4294307583;case"sienna":return 2689740287;case"silver":return 3233857791;case"skyblue":return 2278484991;case"slateblue":return 1784335871;case"slategray":return 1887473919;case"slategrey":return 1887473919;case"snow":return 4294638335;case"springgreen":return 16744447;case"steelblue":return 1182971135;case"tan":return 3535047935;case"teal":return 8421631;case"thistle":return 3636451583;case"tomato":return 4284696575;case"turquoise":return 1088475391;case"violet":return 4001558271;case"wheat":return 4125012991;case"white":return 4294967295;case"whitesmoke":return 4126537215;case"yellow":return 4294902015;case"yellowgreen":return 2597139199}return null}return Yf=n,Yf}var Cb=Ab();const Pb=Si(Cb);var Lb=n=>{if(n==null)return n;var e=Pb(n);if(e!=null)return e=(e<<24|e>>>8)>>>0,e},dS=function(e,t){if(t===void 0&&(t=1),e!=null){if(typeof e=="string"&&Rb(e))return e;var r=Lb(e);if(r!=null){var s=r>>16&255,o=r>>8&255,u=r&255,d=(r>>24&255)/255,f=(d*t).toFixed(2);return"rgba("+s+","+o+","+u+","+f+")"}}},Db={backgroundColor:!0,borderColor:!0,borderTopColor:!0,borderRightColor:!0,borderBottomColor:!0,borderLeftColor:!0,color:!0,shadowColor:!0,textDecorationColor:!0,textShadowColor:!0};function yr(n,e){var t=n;return(e==null||!Cc[e])&&typeof n=="number"?t=n+"px":e!=null&&Db[e]&&(t=dS(n)),t}var xi=!!(typeof window<"u"&&window.document&&window.document.createElement),Ib={},Nb=!xi||window.CSS!=null&&window.CSS.supports!=null&&(window.CSS.supports("text-decoration-line","none")||window.CSS.supports("-webkit-text-decoration-line","none")),Ob="monospace,monospace",B0='-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',Ub={borderColor:["borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"],borderBlockColor:["borderTopColor","borderBottomColor"],borderInlineColor:["borderRightColor","borderLeftColor"],borderRadius:["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],borderStyle:["borderTopStyle","borderRightStyle","borderBottomStyle","borderLeftStyle"],borderBlockStyle:["borderTopStyle","borderBottomStyle"],borderInlineStyle:["borderRightStyle","borderLeftStyle"],borderWidth:["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"],borderBlockWidth:["borderTopWidth","borderBottomWidth"],borderInlineWidth:["borderRightWidth","borderLeftWidth"],insetBlock:["top","bottom"],insetInline:["left","right"],marginBlock:["marginTop","marginBottom"],marginInline:["marginRight","marginLeft"],paddingBlock:["paddingTop","paddingBottom"],paddingInline:["paddingRight","paddingLeft"],overflow:["overflowX","overflowY"],overscrollBehavior:["overscrollBehaviorX","overscrollBehaviorY"],borderBlockStartColor:["borderTopColor"],borderBlockStartStyle:["borderTopStyle"],borderBlockStartWidth:["borderTopWidth"],borderBlockEndColor:["borderBottomColor"],borderBlockEndStyle:["borderBottomStyle"],borderBlockEndWidth:["borderBottomWidth"],borderEndStartRadius:["borderBottomLeftRadius"],borderEndEndRadius:["borderBottomRightRadius"],borderStartStartRadius:["borderTopLeftRadius"],borderStartEndRadius:["borderTopRightRadius"],insetBlockEnd:["bottom"],insetBlockStart:["top"],marginBlockStart:["marginTop"],marginBlockEnd:["marginBottom"],paddingBlockStart:["paddingTop"],paddingBlockEnd:["paddingBottom"]},fS=(n,e)=>{if(!n)return Ib;var t={},r=function(){var d=n[s];if(d==null)return"continue";if(s==="backgroundClip")d==="text"&&(t.backgroundClip=d,t.WebkitBackgroundClip=d);else if(s==="flex")d===-1?(t.flexGrow=0,t.flexShrink=1,t.flexBasis="auto"):t.flex=d;else if(s==="font")t[s]=d.replace("System",B0);else if(s==="fontFamily")if(d.indexOf("System")>-1){var f=d.split(/,\s*/);f[f.indexOf("System")]=B0,t[s]=f.join(",")}else d==="monospace"?t[s]=Ob:t[s]=d;else if(s==="textDecorationLine")Nb?t.textDecorationLine=d:t.textDecoration=d;else if(s==="writingDirection")t.direction=d;else{var h=yr(n[s],s),g=Ub[s];e&&s==="inset"?(n.insetInline==null&&(t.left=h,t.right=h),n.insetBlock==null&&(t.top=h,t.bottom=h)):e&&s==="margin"?(n.marginInline==null&&(t.marginLeft=h,t.marginRight=h),n.marginBlock==null&&(t.marginTop=h,t.marginBottom=h)):e&&s==="padding"?(n.paddingInline==null&&(t.paddingLeft=h,t.paddingRight=h),n.paddingBlock==null&&(t.paddingTop=h,t.paddingBottom=h)):g?g.forEach((m,v)=>{n[m]==null&&(t[m]=h)}):t[s]=h}};for(var s in n)var o=r();return t};function Fb(n,e){for(var t=n.length,r=e^t,s=0,o;t>=4;)o=n.charCodeAt(s)&255|(n.charCodeAt(++s)&255)<<8|(n.charCodeAt(++s)&255)<<16|(n.charCodeAt(++s)&255)<<24,o=(o&65535)*1540483477+(((o>>>16)*1540483477&65535)<<16),o^=o>>>24,o=(o&65535)*1540483477+(((o>>>16)*1540483477&65535)<<16),r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16)^o,t-=4,++s;switch(t){case 3:r^=(n.charCodeAt(s+2)&255)<<16;case 2:r^=(n.charCodeAt(s+1)&255)<<8;case 1:r^=n.charCodeAt(s)&255,r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16)}return r^=r>>>13,r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16),r^=r>>>15,r>>>0}var kb=n=>Fb(n,1).toString(36),Bb=/[A-Z]/g,zb=/^ms-/,Kf={};function Hb(n){return"-"+n.toLowerCase()}function Gb(n){if(n in Kf)return Kf[n];var e=n.replace(Bb,Hb);return Kf[n]=zb.test(e)?"-"+e:e}var Vu={},Wu={},$u={},z0;function hS(){if(z0)return $u;z0=1,Object.defineProperty($u,"__esModule",{value:!0}),$u.default=n;function n(e){return e.charAt(0).toUpperCase()+e.slice(1)}return $u}var H0;function Vb(){if(H0)return Wu;H0=1,Object.defineProperty(Wu,"__esModule",{value:!0}),Wu.default=r;var n=hS(),e=t(n);function t(s){return s&&s.__esModule?s:{default:s}}function r(s,o,u){var d=s[o];if(d&&u.hasOwnProperty(o))for(var f=(0,e.default)(o),h=0;h<d.length;++h){var g=d[h]+f;u[g]||(u[g]=u[o])}return u}return Wu}var Xu={},G0;function Wb(){if(G0)return Xu;G0=1,Object.defineProperty(Xu,"__esModule",{value:!0}),Xu.default=n;function n(e,t,r,s,o){for(var u=0,d=e.length;u<d;++u){var f=e[u](t,r,s,o);if(f)return f}}return Xu}var qu={},V0;function $b(){if(V0)return qu;V0=1,Object.defineProperty(qu,"__esModule",{value:!0}),qu.default=e;function n(t,r){t.indexOf(r)===-1&&t.push(r)}function e(t,r){if(Array.isArray(r))for(var s=0,o=r.length;s<o;++s)n(t,r[s]);else n(t,r)}return qu}var Yu={},W0;function Xb(){if(W0)return Yu;W0=1,Object.defineProperty(Yu,"__esModule",{value:!0}),Yu.default=n;function n(e){return e instanceof Object&&!Array.isArray(e)}return Yu}var $0;function qb(){if($0)return Vu;$0=1,Object.defineProperty(Vu,"__esModule",{value:!0}),Vu.default=h;var n=Vb(),e=f(n),t=Wb(),r=f(t),s=$b(),o=f(s),u=Xb(),d=f(u);function f(g){return g&&g.__esModule?g:{default:g}}function h(g){var m=g.prefixMap,v=g.plugins;return function x(E){for(var T in E){var y=E[T];if((0,d.default)(y))E[T]=x(y);else if(Array.isArray(y)){for(var S=[],b=0,N=y.length;b<N;++b){var L=(0,r.default)(v,T,y[b],E,m);(0,o.default)(S,L||y[b])}S.length>0&&(E[T]=S)}else{var O=(0,r.default)(v,T,y,E,m);O&&(E[T]=O),E=(0,e.default)(m,T,E)}}return E}}return Vu}var Yb=qb();const Kb=Si(Yb);var Ku={},X0;function Zb(){if(X0)return Ku;X0=1,Object.defineProperty(Ku,"__esModule",{value:!0}),Ku.default=n;function n(){return null}return Ku}var jb=Zb();const Jb=Si(jb);var Zu={};function Pc(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Pc=function(t){return typeof t}:Pc=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pc(n)}function Qb(n){return iw(n)||nw(n)||tw(n)||ew()}function ew(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tw(n,e){if(n){if(typeof n=="string")return tp(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(t);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return tp(n,e)}}function nw(n){if(typeof Symbol<"u"&&Symbol.iterator in Object(n))return Array.from(n)}function iw(n){if(Array.isArray(n))return tp(n)}function tp(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function q0(n){return n.filter(function(e,t){return n.lastIndexOf(e)===t})}function pS(n){for(var e=0,t=arguments.length<=1?0:arguments.length-1;e<t;++e){var r=e+1<1||arguments.length<=e+1?void 0:arguments[e+1];for(var s in r){var o=r[s],u=n[s];if(u&&o){if(Array.isArray(u)){n[s]=q0(u.concat(o));continue}if(Array.isArray(o)){n[s]=q0([u].concat(Qb(o)));continue}if(Pc(o)==="object"){n[s]=pS({},u,o);continue}}n[s]=o}}return n}var rw=/-([a-z])/g,aw=/^Ms/g,Zf={};function sw(n){return n[1].toUpperCase()}function mS(n){if(Zf.hasOwnProperty(n))return Zf[n];var e=n.replace(rw,sw).replace(aw,"ms");return Zf[n]=e,e}var ow=/[A-Z]/g,lw=/^ms-/,jf={};function uw(n){return"-"+n.toLowerCase()}function gS(n){if(jf.hasOwnProperty(n))return jf[n];var e=n.replace(ow,uw);return jf[n]=lw.test(e)?"-"+e:e}const cw=Object.freeze(Object.defineProperty({__proto__:null,default:gS},Symbol.toStringTag,{value:"Module"}));function ad(n){return gS(n)}function vS(n,e){return ad(n)+":"+e}function dw(n){var e="";for(var t in n){var r=n[t];typeof r!="string"&&typeof r!="number"||(e&&(e+=";"),e+=vS(t,r))}return e}var fw=/^(Webkit|Moz|O|ms)/;function hw(n){return fw.test(n)}var pw=/-webkit-|-moz-|-ms-/;function mw(n){return typeof n=="string"&&pw.test(n)}var wl={borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Y0=["animationIterationCount","boxFlex","boxFlexGroup","boxOrdinalGroup","columnCount","flex","flexGrow","flexPositive","flexShrink","flexNegative","flexOrder","gridColumn","gridColumnEnd","gridColumnStart","gridRow","gridRowEnd","gridRowStart","lineClamp","order"],K0=["Webkit","ms","Moz","O"];function gw(n,e){return n+e.charAt(0).toUpperCase()+e.slice(1)}for(var Jf=0,vw=Y0.length;Jf<vw;++Jf){var Z0=Y0[Jf];wl[Z0]=!0;for(var Qf=0,_w=K0.length;Qf<_w;++Qf)wl[gw(K0[Qf],Z0)]=!0}for(var yw in wl)wl[ad(yw)]=!0;function Sw(n){return wl.hasOwnProperty(n)}var xw=/^(ms|Webkit|Moz|O)/;function _S(n){var e=n.replace(xw,"");return e.charAt(0).toLowerCase()+e.slice(1)}function Mw(n){return _S(mS(n))}function Ew(n,e){return e.join(";"+ad(n)+":")}var bw=/(-ms-|-webkit-|-moz-|-o-)/g;function ww(n){return typeof n=="string"?n.replace(bw,""):n}const Tw=Object.freeze(Object.defineProperty({__proto__:null,assignStyle:pS,camelCaseProperty:mS,cssifyDeclaration:vS,cssifyObject:dw,hyphenateProperty:ad,isPrefixedProperty:hw,isPrefixedValue:mw,isUnitlessProperty:Sw,normalizeProperty:Mw,resolveArrayValue:Ew,unprefixProperty:_S,unprefixValue:ww},Symbol.toStringTag,{value:"Module"})),yS=sS(Tw);var j0;function Rw(){if(j0)return Zu;j0=1,Object.defineProperty(Zu,"__esModule",{value:!0}),Zu.default=r;var n=yS,e=/cross-fade\(/g,t=["-webkit-",""];function r(s,o){if(typeof o=="string"&&!(0,n.isPrefixedValue)(o)&&o.indexOf("cross-fade(")!==-1)return t.map(function(u){return o.replace(e,u+"cross-fade(")})}return Zu}var Aw=Rw();const Cw=Si(Aw);var ju={},J0;function Pw(){if(J0)return ju;J0=1,Object.defineProperty(ju,"__esModule",{value:!0}),ju.default=t;var n=["-webkit-","-moz-",""],e={"zoom-in":!0,"zoom-out":!0,grab:!0,grabbing:!0};function t(r,s){if(r==="cursor"&&e.hasOwnProperty(s))return n.map(function(o){return o+s})}return ju}var Lw=Pw();const Dw=Si(Lw);var Ju={},Q0;function Iw(){if(Q0)return Ju;Q0=1,Object.defineProperty(Ju,"__esModule",{value:!0}),Ju.default=r;var n=yS,e=/filter\(/g,t=["-webkit-",""];function r(s,o){if(typeof o=="string"&&!(0,n.isPrefixedValue)(o)&&o.indexOf("filter(")!==-1)return t.map(function(u){return o.replace(e,u+"filter(")})}return Ju}var Nw=Iw();const Ow=Si(Nw);var Qu={},eh={},e_;function SS(){return e_||(e_=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=t;var e=/-webkit-|-moz-|-ms-/;function t(r){return typeof r=="string"&&e.test(r)}})(eh)),eh}var t_;function Uw(){if(t_)return Qu;t_=1,Object.defineProperty(Qu,"__esModule",{value:!0}),Qu.default=s;var n=SS(),e=t(n);function t(o){return o&&o.__esModule?o:{default:o}}var r=["-webkit-",""];function s(o,u){if(typeof u=="string"&&!(0,e.default)(u)&&u.indexOf("image-set(")>-1)return r.map(function(d){return u.replace(/image-set\(/g,d+"image-set(")})}return Qu}var Fw=Uw();const kw=Si(Fw);var ec={},n_;function Bw(){if(n_)return ec;n_=1,Object.defineProperty(ec,"__esModule",{value:!0}),ec.default=e;var n={marginBlockStart:["WebkitMarginBefore"],marginBlockEnd:["WebkitMarginAfter"],marginInlineStart:["WebkitMarginStart","MozMarginStart"],marginInlineEnd:["WebkitMarginEnd","MozMarginEnd"],paddingBlockStart:["WebkitPaddingBefore"],paddingBlockEnd:["WebkitPaddingAfter"],paddingInlineStart:["WebkitPaddingStart","MozPaddingStart"],paddingInlineEnd:["WebkitPaddingEnd","MozPaddingEnd"],borderBlockStart:["WebkitBorderBefore"],borderBlockStartColor:["WebkitBorderBeforeColor"],borderBlockStartStyle:["WebkitBorderBeforeStyle"],borderBlockStartWidth:["WebkitBorderBeforeWidth"],borderBlockEnd:["WebkitBorderAfter"],borderBlockEndColor:["WebkitBorderAfterColor"],borderBlockEndStyle:["WebkitBorderAfterStyle"],borderBlockEndWidth:["WebkitBorderAfterWidth"],borderInlineStart:["WebkitBorderStart","MozBorderStart"],borderInlineStartColor:["WebkitBorderStartColor","MozBorderStartColor"],borderInlineStartStyle:["WebkitBorderStartStyle","MozBorderStartStyle"],borderInlineStartWidth:["WebkitBorderStartWidth","MozBorderStartWidth"],borderInlineEnd:["WebkitBorderEnd","MozBorderEnd"],borderInlineEndColor:["WebkitBorderEndColor","MozBorderEndColor"],borderInlineEndStyle:["WebkitBorderEndStyle","MozBorderEndStyle"],borderInlineEndWidth:["WebkitBorderEndWidth","MozBorderEndWidth"]};function e(t,r,s){if(Object.prototype.hasOwnProperty.call(n,t))for(var o=n[t],u=0,d=o.length;u<d;++u)s[o[u]]=r}return ec}var zw=Bw();const Hw=Si(zw);var tc={},i_;function Gw(){if(i_)return tc;i_=1,Object.defineProperty(tc,"__esModule",{value:!0}),tc.default=n;function n(e,t){if(e==="position"&&t==="sticky")return["-webkit-sticky","sticky"]}return tc}var Vw=Gw();const Ww=Si(Vw);var nc={},r_;function $w(){if(r_)return nc;r_=1,Object.defineProperty(nc,"__esModule",{value:!0}),nc.default=r;var n=["-webkit-","-moz-",""],e={maxHeight:!0,maxWidth:!0,width:!0,height:!0,columnWidth:!0,minWidth:!0,minHeight:!0},t={"min-content":!0,"max-content":!0,"fill-available":!0,"fit-content":!0,"contain-floats":!0};function r(s,o){if(e.hasOwnProperty(s)&&t.hasOwnProperty(o))return n.map(function(u){return u+o})}return nc}var Xw=$w();const qw=Si(Xw);var ic={},th={};const Yw=sS(cw);var a_;function Kw(){return a_||(a_=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=s;var e=Yw,t=r(e);function r(o){return o&&o.__esModule?o:{default:o}}function s(o){return(0,t.default)(o)}})(th)),th}var s_;function Zw(){if(s_)return ic;s_=1,Object.defineProperty(ic,"__esModule",{value:!0}),ic.default=g;var n=Kw(),e=u(n),t=SS(),r=u(t),s=hS(),o=u(s);function u(m){return m&&m.__esModule?m:{default:m}}var d={transition:!0,transitionProperty:!0,WebkitTransition:!0,WebkitTransitionProperty:!0,MozTransition:!0,MozTransitionProperty:!0},f={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-"};function h(m,v){if((0,r.default)(m))return m;for(var x=m.split(/,(?![^()]*(?:\([^()]*\))?\))/g),E=0,T=x.length;E<T;++E){var y=x[E],S=[y];for(var b in v){var N=(0,e.default)(b);if(y.indexOf(N)>-1&&N!=="order")for(var L=v[b],O=0,D=L.length;O<D;++O)S.unshift(y.replace(N,f[L[O]]+N))}x[E]=S.join(",")}return x.join(",")}function g(m,v,x,E){if(typeof v=="string"&&d.hasOwnProperty(m)){var T=h(v,E),y=T.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(b){return!/-moz-|-ms-/.test(b)}).join(",");if(m.indexOf("Webkit")>-1)return y;var S=T.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(b){return!/-webkit-|-ms-/.test(b)}).join(",");return m.indexOf("Moz")>-1?S:(x["Webkit"+(0,o.default)(m)]=y,x["Moz"+(0,o.default)(m)]=S,T)}}return ic}var jw=Zw();const Jw=Si(jw);var Vt=["Webkit"],Qw=["Moz"],eT=["Webkit","Moz"],un=["Webkit","ms"],tT=["Webkit","Moz","ms"];const nT={plugins:[Jb,Cw,Dw,Ow,kw,Hw,Ww,qw,Jw],prefixMap:{appearance:tT,userSelect:eT,textEmphasisPosition:un,textEmphasis:un,textEmphasisStyle:un,textEmphasisColor:un,boxDecorationBreak:un,clipPath:Vt,maskImage:un,maskMode:un,maskRepeat:un,maskPosition:un,maskClip:un,maskOrigin:un,maskSize:un,maskComposite:un,mask:un,maskBorderSource:un,maskBorderMode:un,maskBorderSlice:un,maskBorderWidth:un,maskBorderOutset:un,maskBorderRepeat:un,maskBorder:un,maskType:un,textDecorationStyle:Vt,textDecorationSkip:Vt,textDecorationLine:Vt,textDecorationColor:Vt,filter:Vt,breakAfter:Vt,breakBefore:Vt,breakInside:Vt,columnCount:Vt,columnFill:Vt,columnGap:Vt,columnRule:Vt,columnRuleColor:Vt,columnRuleStyle:Vt,columnRuleWidth:Vt,columns:Vt,columnSpan:Vt,columnWidth:Vt,backdropFilter:Vt,hyphens:Vt,flowInto:Vt,flowFrom:Vt,regionFragment:Vt,textOrientation:Vt,tabSize:Qw,fontKerning:Vt,textSizeAdjust:Vt}};var iT=Kb(nT),rT=["animationKeyframes"],o_=new Map,aT={},sT=1,oT=3,lT={borderColor:2,borderRadius:2,borderStyle:2,borderWidth:2,display:2,flex:2,inset:2,margin:2,overflow:2,overscrollBehavior:2,padding:2,insetBlock:2.1,insetInline:2.1,marginInline:2.1,marginBlock:2.1,paddingInline:2.1,paddingBlock:2.1,borderBlockStartColor:2.2,borderBlockStartStyle:2.2,borderBlockStartWidth:2.2,borderBlockEndColor:2.2,borderBlockEndStyle:2.2,borderBlockEndWidth:2.2,borderInlineStartColor:2.2,borderInlineStartStyle:2.2,borderInlineStartWidth:2.2,borderInlineEndColor:2.2,borderInlineEndStyle:2.2,borderInlineEndWidth:2.2,borderEndStartRadius:2.2,borderEndEndRadius:2.2,borderStartStartRadius:2.2,borderStartEndRadius:2.2,insetBlockEnd:2.2,insetBlockStart:2.2,insetInlineEnd:2.2,insetInlineStart:2.2,marginBlockStart:2.2,marginBlockEnd:2.2,marginInlineStart:2.2,marginInlineEnd:2.2,paddingBlockStart:2.2,paddingBlockEnd:2.2,paddingInlineStart:2.2,paddingInlineEnd:2.2},np="borderTopLeftRadius",ip="borderTopRightRadius",rp="borderBottomLeftRadius",ap="borderBottomRightRadius",sp="borderLeftColor",op="borderLeftStyle",lp="borderLeftWidth",up="borderRightColor",cp="borderRightStyle",dp="borderRightWidth",fp="right",hp="marginLeft",pp="marginRight",mp="paddingLeft",gp="paddingRight",vp="left",Gc={[np]:ip,[ip]:np,[rp]:ap,[ap]:rp,[sp]:up,[op]:cp,[lp]:dp,[up]:sp,[cp]:op,[dp]:lp,[vp]:fp,[hp]:pp,[pp]:hp,[mp]:gp,[gp]:mp,[fp]:vp},_l={borderStartStartRadius:np,borderStartEndRadius:ip,borderEndStartRadius:rp,borderEndEndRadius:ap,borderInlineStartColor:sp,borderInlineStartStyle:op,borderInlineStartWidth:lp,borderInlineEndColor:up,borderInlineEndStyle:cp,borderInlineEndWidth:dp,insetInlineEnd:fp,insetInlineStart:vp,marginInlineStart:hp,marginInlineEnd:pp,paddingInlineStart:mp,paddingInlineEnd:gp},xS=["clear","float","textAlign"];function uT(n){var e={$$css:!0},t=[];function r(s,o,u){var d=fT(u,o),f=o+d,h=o_.get(f),g;if(h!=null)g=h[0],t.push(h[1]);else{var m=s!==o?f:d;g=Mm("r",s,m);var v=lT[s]||oT,x=hT(g,o,u),E=[x,v];t.push(E),o_.set(f,[g,E])}return g}return Object.keys(n).sort().forEach(s=>{var o=n[s];if(o!=null){var u;if(xS.indexOf(s)>-1){var d=r(s,s,"left"),f=r(s,s,"right");o==="start"?u=[d,f]:o==="end"&&(u=[f,d])}var h=_l[s];if(h!=null){var g=r(s,h,o),m=r(s,Gc[h],o);u=[g,m]}if(s==="transitionProperty"){for(var v=Array.isArray(o)?o:[o],x=[],E=0;E<v.length;E++){var T=v[E];typeof T=="string"&&_l[T]!=null&&x.push(E)}if(x.length>0){var y=[...v],S=[...v];x.forEach(b=>{var N=y[b];if(typeof N=="string"){var L=_l[N],O=Gc[L];y[b]=L,S[b]=O;var D=r(s,s,y),w=r(s,s,S);u=[D,w]}})}}u==null?u=r(s,s,o):e.$$css$localize=!0,e[s]=u}}),[e,t]}function cT(n,e){var t={$$css:!0},r=[],s=n.animationKeyframes,o=gs(n,rT),u=Mm("css",e,JSON.stringify(n)),d="."+u,f;if(s!=null){var h=MS(s),g=h[0],m=h[1];f=g.join(","),r.push(...m)}var v=Gr(Ni(Ni({},o),{},{animationName:f}));return r.push(""+d+v),t[u]=u,[t,[[r,sT]]]}function dT(n,e){var t=n||aT,r={},s={},o=function(){var h=t[u],g=u,m=h;if(!Object.prototype.hasOwnProperty.call(t,u)||h==null)return"continue";xS.indexOf(u)>-1&&(h==="start"?m=e?"right":"left":h==="end"&&(m=e?"left":"right"));var v=_l[u];if(v!=null&&(g=e?Gc[v]:v),u==="transitionProperty"){var x=Array.isArray(h)?h:[h];x.forEach((E,T)=>{if(typeof E=="string"){var y=_l[E];y!=null&&(x[T]=e?Gc[y]:y,m=x.join(" "))}})}r[g]||(s[g]=m),g===u&&(r[g]=!0)};for(var u in t)var d=o();return fS(s,!0)}function fT(n,e){var t=yr(n,e);return typeof t!="string"?JSON.stringify(t||""):t}function hT(n,e,t){var r=[],s="."+n;switch(e){case"animationKeyframes":{var o=MS(t),u=o[0],d=o[1],f=Gr({animationName:u.join(",")});r.push(""+s+f,...d);break}case"placeholderTextColor":{var h=Gr({color:t,opacity:1});r.push(s+"::-webkit-input-placeholder"+h,s+"::-moz-placeholder"+h,s+":-ms-input-placeholder"+h,s+"::placeholder"+h);break}case"pointerEvents":{var g=t;if(t==="auto"||t==="box-only"){if(g="auto!important",t==="box-only"){var m=Gr({pointerEvents:"none"});r.push(s+">*"+m)}}else if((t==="none"||t==="box-none")&&(g="none!important",t==="box-none")){var v=Gr({pointerEvents:"auto"});r.push(s+">*"+v)}var x=Gr({pointerEvents:g});r.push(""+s+x);break}case"scrollbarWidth":{t==="none"&&r.push(s+"::-webkit-scrollbar{display:none}");var E=Gr({scrollbarWidth:t});r.push(""+s+E);break}default:{var T=Gr({[e]:t});r.push(""+s+T);break}}return r}function Gr(n){var e=iT(fS(n)),t=Object.keys(e).map(r=>{var s=e[r],o=Gb(r);return Array.isArray(s)?s.map(u=>o+":"+u).join(";"):o+":"+s}).sort().join(";");return"{"+t+";}"}function Mm(n,e,t){var r=kb(e+t);return n+"-"+r}function pT(n){var e=["-webkit-",""],t=Mm("r","animation",JSON.stringify(n)),r="{"+Object.keys(n).map(o=>{var u=n[o],d=Gr(u);return""+o+d}).join("")+"}",s=e.map(o=>"@"+o+"keyframes "+t+r);return[t,s]}function MS(n){if(typeof n=="number")throw new Error("Invalid CSS keyframes type: "+typeof n);var e=[],t=[],r=Array.isArray(n)?n:[n];return r.forEach(s=>{if(typeof s=="string")e.push(s);else{var o=pT(s),u=o[0],d=o[1];e.push(u),t.push(...d)}}),[e,t]}function nh(n,e,t){if(xi){var r=e??document,s=r.getElementById(n);if(s==null)if(s=document.createElement("style"),s.setAttribute("id",n),typeof t=="string"&&s.appendChild(document.createTextNode(t)),r instanceof ShadowRoot)r.insertBefore(s,r.firstChild);else{var o=r.head;o&&o.insertBefore(s,o.firstChild)}return s.sheet}else return null}var mT=Array.prototype.slice;function ih(n){var e={},t={};if(n!=null){var r;mT.call(n.cssRules).forEach((u,d)=>{var f=u.cssText;if(f.indexOf("stylesheet-group")>-1)r=_T(u),e[r]={start:d,rules:[f]};else{var h=u_(f);h!=null&&(t[h]=!0,e[r].rules.push(f))}})}function s(u,d,f){var h=l_(e),g=h.indexOf(d),m=g+1,v=h[m],x=v!=null&&e[v].start!=null?e[v].start:u.cssRules.length,E=ST(u,f,x);if(E){e[d].start==null&&(e[d].start=x);for(var T=m;T<h.length;T+=1){var y=h[T],S=e[y].start||0;e[y].start=S+1}}return E}var o={getTextContent(){return l_(e).map(u=>{var d=e[u].rules,f=d.shift();return d.sort(),d.unshift(f),d.join(`
`)}).join(`
`)},insert(u,d){var f=Number(d);if(e[f]==null){var h=gT(f);e[f]={start:null,rules:[h]},n!=null&&s(n,f,h)}var g=u_(u);if(g!=null&&t[g]==null&&(t[g]=!0,e[f].rules.push(u),n!=null)){var m=s(n,f,u);m||e[f].rules.pop()}}};return o}function gT(n){return'[stylesheet-group="'+n+'"]{}'}var vT=/["']/g;function _T(n){return Number(n.selectorText.split(vT)[1])}function l_(n){return Object.keys(n).map(Number).sort((e,t)=>e>t?1:-1)}var yT=/\s*([,])\s*/g;function u_(n){var e=n.split("{")[0].trim();return e!==""?e.replace(yT,"$1"):null}function ST(n,e,t){try{return n.insertRule(e,t),!0}catch{return!1}}var xT="react-native-stylesheet",rh=new WeakMap,Xi=[],c_=["html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}","body{margin:0;}","button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}","input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}"];function MT(n,e){e===void 0&&(e=xT);var t;if(xi){var r=document;if(Xi.length===0)t=ih(nh(e)),c_.forEach(d=>{t.insert(d,0)}),rh.set(r,Xi.length),Xi.push(t);else{var s=rh.get(r);if(s==null){var o=Xi[0],u=o!=null?o.getTextContent():"";t=ih(nh(e,r,u)),rh.set(r,Xi.length),Xi.push(t)}else t=Xi[s]}}else Xi.length===0?(t=ih(nh(e)),c_.forEach(d=>{t.insert(d,0)}),Xi.push(t)):t=Xi[0];return{getTextContent(){return t.getTextContent()},id:e,insert(d,f){Xi.forEach(h=>{h.insert(d,f)})}}}var rc={},d_;function ET(){if(d_)return rc;d_=1,Object.defineProperty(rc,"__esModule",{value:!0}),rc.localizeStyle=r;var n=new WeakMap,e="$$css$localize";function t(s,o){var u={};for(var d in s)if(d!==e){var f=s[d];Array.isArray(f)?u[d]=o?f[1]:f[0]:u[d]=f}return u}function r(s,o){if(s[e]!=null){var u=o?1:0;if(n.has(s)){var d=n.get(s),f=d[u];return f==null&&(f=t(s,o),d[u]=f,n.set(s,d)),f}var h=t(s,o),g=new Array(2);return g[u]=h,n.set(s,g),h}return s}return rc}var ah,f_;function bT(){return f_||(f_=1,ah=ET()),ah}var wT=bT(),TT={},ES={height:0,width:0},bS=n=>{var e=n.shadowColor,t=n.shadowOffset,r=n.shadowOpacity,s=n.shadowRadius,o=t||ES,u=o.height,d=o.width,f=yr(d),h=yr(u),g=yr(s||0),m=dS(e||"black",r);if(m!=null&&f!=null&&h!=null&&g!=null)return f+" "+h+" "+g+" "+m},RT=n=>{var e=n.textShadowColor,t=n.textShadowOffset,r=n.textShadowRadius,s=t||ES,o=s.height,u=s.width,d=r||0,f=yr(u),h=yr(o),g=yr(d),m=yr(e,"textShadowColor");if(m&&(o!==0||u!==0||d!==0)&&f!=null&&h!=null&&g!=null)return f+" "+h+" "+g+" "+m},AT=n=>{var e=Object.keys(n)[0],t=n[e];if(e==="matrix"||e==="matrix3d")return e+"("+t.join(",")+")";var r=yr(t,e);return e+"("+r+")"},CT=n=>n.map(AT).join(" "),PT={borderBottomEndRadius:"borderEndEndRadius",borderBottomStartRadius:"borderEndStartRadius",borderTopEndRadius:"borderStartEndRadius",borderTopStartRadius:"borderStartStartRadius",borderEndColor:"borderInlineEndColor",borderEndStyle:"borderInlineEndStyle",borderEndWidth:"borderInlineEndWidth",borderStartColor:"borderInlineStartColor",borderStartStyle:"borderInlineStartStyle",borderStartWidth:"borderInlineStartWidth",end:"insetInlineEnd",marginEnd:"marginInlineEnd",marginHorizontal:"marginInline",marginStart:"marginInlineStart",marginVertical:"marginBlock",paddingEnd:"paddingInlineEnd",paddingHorizontal:"paddingInline",paddingStart:"paddingInlineStart",paddingVertical:"paddingBlock",start:"insetInlineStart"},LT={elevation:!0,overlayColor:!0,resizeMode:!0,tintColor:!0},wS=function(e,t){t===void 0&&(t={});var r=e||TT,s={};if(t.shadow,r.shadowColor!=null||r.shadowOffset!=null||r.shadowOpacity!=null||r.shadowRadius!=null){var o=bS(r);if(o!=null&&s.boxShadow==null){var u=r.boxShadow,d=u?u+", "+o:o;s.boxShadow=d}}if(t.textShadow,r.textShadowColor!=null||r.textShadowOffset!=null||r.textShadowRadius!=null){var f=RT(r);if(f!=null&&s.textShadow==null){var h=r.textShadow,g=h?h+", "+f:f;s.textShadow=g}}for(var m in r)if(!(LT[m]!=null||m==="shadowColor"||m==="shadowOffset"||m==="shadowOpacity"||m==="shadowRadius"||m==="textShadowColor"||m==="textShadowOffset"||m==="textShadowRadius")){var v=r[m],x=PT[m]||m,E=v;!Object.prototype.hasOwnProperty.call(r,m)||x!==m&&r[x]!=null||(x==="aspectRatio"&&typeof E=="number"?s[x]=E.toString():x==="fontVariant"?(Array.isArray(E)&&E.length>0&&(E=E.join(" ")),s[x]=E):x==="textAlignVertical"?r.verticalAlign==null&&(s.verticalAlign=E==="center"?"middle":E):x==="transform"?(Array.isArray(E)&&(E=CT(E)),s.transform=E):s[x]=E)}return s},Qo={},h_;function DT(){if(h_)return Qo;h_=1,Object.defineProperty(Qo,"__esModule",{value:!0}),Qo.styleq=void 0;var n=new WeakMap,e="$$css";function t(s){var o,u,d;return s!=null&&(o=s.disableCache===!0,u=s.disableMix===!0,d=s.transform),function(){for(var h=[],g="",m=null,v=o?null:n,x=new Array(arguments.length),E=0;E<arguments.length;E++)x[E]=arguments[E];for(;x.length>0;){var T=x.pop();if(!(T==null||T===!1)){if(Array.isArray(T)){for(var y=0;y<T.length;y++)x.push(T[y]);continue}var S=d!=null?d(T):T;if(S.$$css){var b="";if(v!=null&&v.has(S)){var N=v.get(S);N!=null&&(b=N[0],h.push.apply(h,N[1]),v=N[2])}else{var L=[];for(var O in S){var D=S[O];O!==e&&(typeof D=="string"||D===null?h.includes(O)||(h.push(O),v!=null&&L.push(O),typeof D=="string"&&(b+=b?" "+D:D)):console.error("styleq: ".concat(O," typeof ").concat(String(D),' is not "string" or "null".')))}if(v!=null){var w=new WeakMap;v.set(S,[b,L,w]),v=w}}b&&(g=g?b+" "+g:b)}else if(u)m==null&&(m={}),m=Object.assign({},S,m);else{var P=null;for(var V in S){var I=S[V];I!==void 0&&(h.includes(V)||(I!=null&&(m==null&&(m={}),P==null&&(P={}),P[V]=I),h.push(V),v=null))}P!=null&&(m=Object.assign(P,m))}}}var z=[g,m];return z}}var r=t();return Qo.styleq=r,r.factory=t,Qo}var IT=DT(),NT=["writingDirection"],TS=new WeakMap,Vc=MT(),RS={shadow:!0,textShadow:!0};function OT(n,e){e===void 0&&(e={});var t=e,r=t.writingDirection,s=gs(t,NT),o=r==="rtl";return IT.styleq.factory({transform(u){var d=TS.get(u);return d!=null?wT.localizeStyle(d,o):wS(u,Ni(Ni({},RS),s))}})(n)}function AS(n){n.forEach(e=>{var t=e[0],r=e[1];Vc!=null&&t.forEach(s=>{Vc.insert(s,r)})})}function UT(n){var e=uT(wS(n,RS)),t=e[0],r=e[1];return AS(r),t}function FT(n,e){var t=cT(n,e),r=t[0],s=t[1];return AS(s),r}var CS={position:"absolute",left:0,right:0,top:0,bottom:0},kT=PS({x:Ni({},CS)}).x;function PS(n){return Object.keys(n).forEach(e=>{var t=n[e];if(t!=null&&t.$$css!==!0){var r;e.indexOf("$raw")>-1?r=FT(t,e.split("$raw")[0]):r=UT(t),TS.set(t,r)}}),n}function BT(n,e){return[n,e]}function zT(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];for(var r=e.flat(1/0),s={},o=0;o<r.length;o++){var u=r[o];u!=null&&typeof u=="object"&&Object.assign(s,u)}return s}function HT(){return{id:Vc.id,textContent:Vc.getTextContent()}}function jr(n,e){e===void 0&&(e={});var t=e.writingDirection==="rtl",r=OT(n,e);return Array.isArray(r)&&r[1]!=null&&(r[1]=dT(r[1],t)),r}jr.absoluteFill=kT;jr.absoluteFillObject=CS;jr.create=PS;jr.compose=BT;jr.flatten=zT;jr.getSheet=HT;jr.hairlineWidth=1;xi&&window.__REACT_DEVTOOLS_GLOBAL_HOOK__&&(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle=jr.flatten);var br=jr,GT=["aria-activedescendant","accessibilityActiveDescendant","aria-atomic","accessibilityAtomic","aria-autocomplete","accessibilityAutoComplete","aria-busy","accessibilityBusy","aria-checked","accessibilityChecked","aria-colcount","accessibilityColumnCount","aria-colindex","accessibilityColumnIndex","aria-colspan","accessibilityColumnSpan","aria-controls","accessibilityControls","aria-current","accessibilityCurrent","aria-describedby","accessibilityDescribedBy","aria-details","accessibilityDetails","aria-disabled","accessibilityDisabled","aria-errormessage","accessibilityErrorMessage","aria-expanded","accessibilityExpanded","aria-flowto","accessibilityFlowTo","aria-haspopup","accessibilityHasPopup","aria-hidden","accessibilityHidden","aria-invalid","accessibilityInvalid","aria-keyshortcuts","accessibilityKeyShortcuts","aria-label","accessibilityLabel","aria-labelledby","accessibilityLabelledBy","aria-level","accessibilityLevel","aria-live","accessibilityLiveRegion","aria-modal","accessibilityModal","aria-multiline","accessibilityMultiline","aria-multiselectable","accessibilityMultiSelectable","aria-orientation","accessibilityOrientation","aria-owns","accessibilityOwns","aria-placeholder","accessibilityPlaceholder","aria-posinset","accessibilityPosInSet","aria-pressed","accessibilityPressed","aria-readonly","accessibilityReadOnly","aria-required","accessibilityRequired","role","accessibilityRole","aria-roledescription","accessibilityRoleDescription","aria-rowcount","accessibilityRowCount","aria-rowindex","accessibilityRowIndex","aria-rowspan","accessibilityRowSpan","aria-selected","accessibilitySelected","aria-setsize","accessibilitySetSize","aria-sort","accessibilitySort","aria-valuemax","accessibilityValueMax","aria-valuemin","accessibilityValueMin","aria-valuenow","accessibilityValueNow","aria-valuetext","accessibilityValueText","dataSet","focusable","id","nativeID","pointerEvents","style","tabIndex","testID"],VT={},WT=Object.prototype.hasOwnProperty,$T=Array.isArray,XT=/[A-Z]/g;function qT(n){return"-"+n.toLowerCase()}function YT(n){return n.replace(XT,qT)}function Vs(n){return $T(n)?n.join(" "):n}var KT=br.create({auto:{pointerEvents:"auto"},"box-none":{pointerEvents:"box-none"},"box-only":{pointerEvents:"box-only"},none:{pointerEvents:"none"}}),ZT=(n,e,t)=>{e||(e=VT);var r=e,s=r["aria-activedescendant"],o=r.accessibilityActiveDescendant,u=r["aria-atomic"],d=r.accessibilityAtomic,f=r["aria-autocomplete"],h=r.accessibilityAutoComplete,g=r["aria-busy"],m=r.accessibilityBusy,v=r["aria-checked"],x=r.accessibilityChecked,E=r["aria-colcount"],T=r.accessibilityColumnCount,y=r["aria-colindex"],S=r.accessibilityColumnIndex,b=r["aria-colspan"],N=r.accessibilityColumnSpan,L=r["aria-controls"],O=r.accessibilityControls,D=r["aria-current"],w=r.accessibilityCurrent,P=r["aria-describedby"],V=r.accessibilityDescribedBy,I=r["aria-details"],z=r.accessibilityDetails,W=r["aria-disabled"],Z=r.accessibilityDisabled,B=r["aria-errormessage"],le=r.accessibilityErrorMessage,re=r["aria-expanded"],ne=r.accessibilityExpanded,K=r["aria-flowto"],q=r.accessibilityFlowTo,J=r["aria-haspopup"],k=r.accessibilityHasPopup,ie=r["aria-hidden"],Ce=r.accessibilityHidden,se=r["aria-invalid"],xe=r.accessibilityInvalid,Me=r["aria-keyshortcuts"],Re=r.accessibilityKeyShortcuts,ye=r["aria-label"],Ue=r.accessibilityLabel,ut=r["aria-labelledby"],Je=r.accessibilityLabelledBy,pt=r["aria-level"],yt=r.accessibilityLevel,ot=r["aria-live"],Ft=r.accessibilityLiveRegion,kt=r["aria-modal"],Xt=r.accessibilityModal,vt=r["aria-multiline"],hn=r.accessibilityMultiline,Nt=r["aria-multiselectable"],zt=r.accessibilityMultiSelectable,an=r["aria-orientation"],pn=r.accessibilityOrientation,j=r["aria-owns"],mn=r.accessibilityOwns,bt=r["aria-placeholder"],Ct=r.accessibilityPlaceholder,De=r["aria-posinset"],Ht=r.accessibilityPosInSet,Ze=r["aria-pressed"],tt=r.accessibilityPressed,F=r["aria-readonly"],R=r.accessibilityReadOnly,ue=r["aria-required"],G=r.accessibilityRequired;r.role,r.accessibilityRole;var X=r["aria-roledescription"],ce=r.accessibilityRoleDescription,oe=r["aria-rowcount"],Q=r.accessibilityRowCount,te=r["aria-rowindex"],Se=r.accessibilityRowIndex,U=r["aria-rowspan"],ve=r.accessibilityRowSpan,pe=r["aria-selected"],be=r.accessibilitySelected,Ae=r["aria-setsize"],Le=r.accessibilitySetSize,Xe=r["aria-sort"],dt=r.accessibilitySort,we=r["aria-valuemax"],Qe=r.accessibilityValueMax,st=r["aria-valuemin"],ke=r.accessibilityValueMin,St=r["aria-valuenow"],qt=r.accessibilityValueNow,Ln=r["aria-valuetext"],ea=r.accessibilityValueText,rr=r.dataSet,ta=r.focusable,Ba=r.id,Mi=r.nativeID,ai=r.pointerEvents,na=r.style,ar=r.tabIndex,ia=r.testID,ze=gs(r,GT),za=W||Z,zn=cS.propsToAriaRole(e),sr=s??o;sr!=null&&(ze["aria-activedescendant"]=sr);var ys=u!=null?s:d;ys!=null&&(ze["aria-atomic"]=ys);var Gt=f??h;Gt!=null&&(ze["aria-autocomplete"]=Gt);var Ha=g??m;Ha!=null&&(ze["aria-busy"]=Ha);var ra=v??x;ra!=null&&(ze["aria-checked"]=ra);var Ga=E??T;Ga!=null&&(ze["aria-colcount"]=Ga);var Ar=y??S;Ar!=null&&(ze["aria-colindex"]=Ar);var Va=b??N;Va!=null&&(ze["aria-colspan"]=Va);var C=L??O;C!=null&&(ze["aria-controls"]=Vs(C));var $=D??w;$!=null&&(ze["aria-current"]=$);var he=P??V;he!=null&&(ze["aria-describedby"]=Vs(he));var de=I??z;de!=null&&(ze["aria-details"]=de),za===!0&&(ze["aria-disabled"]=!0,(n==="button"||n==="form"||n==="input"||n==="select"||n==="textarea")&&(ze.disabled=!0));var ae=B??le;ae!=null&&(ze["aria-errormessage"]=ae);var Oe=re??ne;Oe!=null&&(ze["aria-expanded"]=Oe);var Ge=K??q;Ge!=null&&(ze["aria-flowto"]=Vs(Ge));var Ne=J??k;Ne!=null&&(ze["aria-haspopup"]=Ne);var Fe=ie??Ce;Fe===!0&&(ze["aria-hidden"]=Fe);var Ve=se??xe;Ve!=null&&(ze["aria-invalid"]=Ve);var nt=Me??Re;nt!=null&&(ze["aria-keyshortcuts"]=Vs(nt));var ht=ye??Ue;ht!=null&&(ze["aria-label"]=ht);var We=ut??Je;We!=null&&(ze["aria-labelledby"]=Vs(We));var mt=pt??yt;mt!=null&&(ze["aria-level"]=mt);var Bt=ot??Ft;Bt!=null&&(ze["aria-live"]=Bt==="none"?"off":Bt);var Lt=kt??Xt;Lt!=null&&(ze["aria-modal"]=Lt);var At=vt??hn;At!=null&&(ze["aria-multiline"]=At);var Yt=Nt??zt;Yt!=null&&(ze["aria-multiselectable"]=Yt);var $e=an??pn;$e!=null&&(ze["aria-orientation"]=$e);var sn=j??mn;sn!=null&&(ze["aria-owns"]=Vs(sn));var Ye=bt??Ct;Ye!=null&&(ze["aria-placeholder"]=Ye);var si=De??Ht;si!=null&&(ze["aria-posinset"]=si);var on=Ze??tt;on!=null&&(ze["aria-pressed"]=on);var Fi=F??R;Fi!=null&&(ze["aria-readonly"]=Fi,(n==="input"||n==="select"||n==="textarea")&&(ze.readOnly=!0));var Xn=ue??G;Xn!=null&&(ze["aria-required"]=Xn,(n==="input"||n==="select"||n==="textarea")&&(ze.required=G)),zn!=null&&(ze.role=zn==="none"?"presentation":zn);var oi=X??ce;oi!=null&&(ze["aria-roledescription"]=oi);var _t=oe??Q;_t!=null&&(ze["aria-rowcount"]=_t);var Jt=te??Se;Jt!=null&&(ze["aria-rowindex"]=Jt);var _n=U??ve;_n!=null&&(ze["aria-rowspan"]=_n);var wt=pe??be;wt!=null&&(ze["aria-selected"]=wt);var Ot=Ae??Le;Ot!=null&&(ze["aria-setsize"]=Ot);var cn=Xe??dt;cn!=null&&(ze["aria-sort"]=cn);var ki=we??Qe;ki!=null&&(ze["aria-valuemax"]=ki);var aa=st??ke;aa!=null&&(ze["aria-valuemin"]=aa);var Bi=St??qt;Bi!=null&&(ze["aria-valuenow"]=Bi);var Hl=Ln??ea;if(Hl!=null&&(ze["aria-valuetext"]=Hl),rr!=null){for(var Ss in rr)if(WT.call(rr,Ss)){var Wa=YT(Ss),Gl=rr[Ss];Gl!=null&&(ze["data-"+Wa]=Gl)}}ar===0||ar==="0"||ar===-1||ar==="-1"?ze.tabIndex=ar:(ta===!1&&(ze.tabIndex="-1"),n==="a"||n==="button"||n==="input"||n==="select"||n==="textarea"?(ta===!1||Z===!0)&&(ze.tabIndex="-1"):zn==="button"||zn==="checkbox"||zn==="link"||zn==="radio"||zn==="textbox"||zn==="switch"?ta!==!1&&(ze.tabIndex="0"):ta===!0&&(ze.tabIndex="0"));var Eo=br([na,ai&&KT[ai]],Ni({writingDirection:"ltr"},t)),$a=Eo[0],bo=Eo[1];$a&&(ze.className=$a),bo&&(ze.style=bo);var Vl=Ba??Mi;return Vl!=null&&(ze.id=Vl),ia!=null&&(ze["data-testid"]=ia),ze.type==null&&n==="button"&&(ze.type="button"),ze},jT=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),p_=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","far","glk","he","iw","khw","ks","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]),m_=new Map;function JT(n){var e=m_.get(n);if(e)return e;var t=!1;if(Intl.Locale)try{var r=new Intl.Locale(n).maximize().script;t=jT.has(r)}catch{var s=n.split("-")[0];t=p_.has(s)}else{var o=n.split("-")[0];t=p_.has(o)}return m_.set(n,t),t}var QT={direction:"ltr",locale:"en-US"},LS=at.createContext(QT);function Em(n){return JT(n)?"rtl":"ltr"}function e1(n){var e=n.direction,t=n.locale,r=n.children,s=e||t;return s?fo.createElement(LS.Provider,{children:r,value:{direction:t?Em(t):e,locale:t}}):r}function DS(){return at.useContext(LS)}var bm=(n,e,t)=>{var r;n&&n.constructor===String&&(r=cS.propsToAccessibilityComponent(e));var s=r||n,o=ZT(s,e,t),u=fo.createElement(s,o),d=o.dir?fo.createElement(e1,{children:u,direction:o.dir,locale:o.lang}):u;return d},t1=[];function IS(n){return t1[n-1]}var n1=/^data:/;class mi{static has(e){var t=mi._entries,r=n1.test(e);return r||!!t[e]}static add(e){var t=mi._entries,r=Date.now();t[e]?(t[e].lastUsedTimestamp=r,t[e].refCount+=1):t[e]={lastUsedTimestamp:r,refCount:1}}static remove(e){var t=mi._entries;t[e]&&(t[e].refCount-=1),mi._cleanUpIfNeeded()}static _cleanUpIfNeeded(){var e=mi._entries,t=Object.keys(e);if(t.length+1>mi._maximumEntries){var r,s;t.forEach(o=>{var u=e[o];(!s||u.lastUsedTimestamp<s.lastUsedTimestamp)&&u.refCount===0&&(r=o,s=u)}),r&&delete e[r]}}}mi._maximumEntries=256;mi._entries={};var sh=0,ac={},Sr={abort(n){var e=ac[""+n];e&&(e.onerror=null,e.onload=null,e=null,delete ac[""+n])},getSize(n,e,t){var r=!1,s=setInterval(u,16),o=Sr.load(n,u,d);function u(){var f=ac[""+o];if(f){var h=f.naturalHeight,g=f.naturalWidth;h&&g&&(e(g,h),r=!0)}r&&(Sr.abort(o),clearInterval(s))}function d(){typeof t=="function"&&t(),Sr.abort(o),clearInterval(s)}},has(n){return mi.has(n)},load(n,e,t){sh+=1;var r=new window.Image;return r.onerror=t,r.onload=s=>{var o=()=>e({nativeEvent:s});typeof r.decode=="function"?r.decode().then(o,o):setTimeout(o,0)},r.src=n,ac[""+sh]=r,sh},prefetch(n){return new Promise((e,t)=>{Sr.load(n,()=>{mi.add(n),mi.remove(n),e()},t)})},queryCache(n){var e={};return n.forEach(t=>{mi.has(t)&&(e[t]="disk/memory")}),Promise.resolve(e)}},oh,g_;function i1(){if(g_)return oh;g_=1;function n(e,t){for(var r=arguments.length,s=new Array(r>2?r-2:0),o=2;o<r;o++)s[o-2]=arguments[o];if(!e){var u;if(t===void 0)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=0;u=new Error(t.replace(/%s/g,function(){return String(s[d++])})),u.name="Invariant Violation"}throw u.framesToPop=1,u}}return oh=n,oh}var r1=i1();const v_=Si(r1);var us={window:{fontScale:1,height:0,scale:1,width:0},screen:{fontScale:1,height:0,scale:1,width:0}},Ra={},__=xi;function NS(){if(xi){var n=window,e,t;if(n.visualViewport){var r=n.visualViewport;e=Math.round(r.height*r.scale),t=Math.round(r.width*r.scale)}else{var s=n.document.documentElement;e=s.clientHeight,t=s.clientWidth}us.window={fontScale:1,height:e,scale:n.devicePixelRatio||1,width:t},us.screen={fontScale:1,height:n.screen.height,scale:n.devicePixelRatio||1,width:n.screen.width}}}function y_(){NS(),Array.isArray(Ra.change)&&Ra.change.forEach(n=>n(us))}class S_{static get(e){return __&&(__=!1,NS()),v_(us[e],"No dimension set for key "+e),us[e]}static set(e){e&&(xi?v_(!1,"Dimensions cannot be set in the browser"):(e.screen!=null&&(us.screen=e.screen),e.window!=null&&(us.window=e.window)))}static addEventListener(e,t){return Ra[e]=Ra[e]||[],Ra[e].push(t),{remove:()=>{this.removeEventListener(e,t)}}}static removeEventListener(e,t){Array.isArray(Ra[e])&&(Ra[e]=Ra[e].filter(r=>r!==t))}}xi&&(window.visualViewport?window.visualViewport.addEventListener("resize",y_,!1):window.addEventListener("resize",y_,!1));class yl{static get(){return S_.get("window").scale}static getFontScale(){return S_.get("window").fontScale||yl.get()}static getPixelSizeForLayoutSize(e){return Math.round(e*yl.get())}static roundToNearestPixel(e){var t=yl.get();return Math.round(e*t)/t}}var Wc=at.createContext(!1),OS={children:!0,dataSet:!0,dir:!0,id:!0,ref:!0,suppressHydrationWarning:!0,tabIndex:!0,testID:!0,focusable:!0,nativeID:!0},US={"aria-activedescendant":!0,"aria-atomic":!0,"aria-autocomplete":!0,"aria-busy":!0,"aria-checked":!0,"aria-colcount":!0,"aria-colindex":!0,"aria-colspan":!0,"aria-controls":!0,"aria-current":!0,"aria-describedby":!0,"aria-details":!0,"aria-disabled":!0,"aria-errormessage":!0,"aria-expanded":!0,"aria-flowto":!0,"aria-haspopup":!0,"aria-hidden":!0,"aria-invalid":!0,"aria-keyshortcuts":!0,"aria-label":!0,"aria-labelledby":!0,"aria-level":!0,"aria-live":!0,"aria-modal":!0,"aria-multiline":!0,"aria-multiselectable":!0,"aria-orientation":!0,"aria-owns":!0,"aria-placeholder":!0,"aria-posinset":!0,"aria-pressed":!0,"aria-readonly":!0,"aria-required":!0,role:!0,"aria-roledescription":!0,"aria-rowcount":!0,"aria-rowindex":!0,"aria-rowspan":!0,"aria-selected":!0,"aria-setsize":!0,"aria-sort":!0,"aria-valuemax":!0,"aria-valuemin":!0,"aria-valuenow":!0,"aria-valuetext":!0,accessibilityActiveDescendant:!0,accessibilityAtomic:!0,accessibilityAutoComplete:!0,accessibilityBusy:!0,accessibilityChecked:!0,accessibilityColumnCount:!0,accessibilityColumnIndex:!0,accessibilityColumnSpan:!0,accessibilityControls:!0,accessibilityCurrent:!0,accessibilityDescribedBy:!0,accessibilityDetails:!0,accessibilityDisabled:!0,accessibilityErrorMessage:!0,accessibilityExpanded:!0,accessibilityFlowTo:!0,accessibilityHasPopup:!0,accessibilityHidden:!0,accessibilityInvalid:!0,accessibilityKeyShortcuts:!0,accessibilityLabel:!0,accessibilityLabelledBy:!0,accessibilityLevel:!0,accessibilityLiveRegion:!0,accessibilityModal:!0,accessibilityMultiline:!0,accessibilityMultiSelectable:!0,accessibilityOrientation:!0,accessibilityOwns:!0,accessibilityPlaceholder:!0,accessibilityPosInSet:!0,accessibilityPressed:!0,accessibilityReadOnly:!0,accessibilityRequired:!0,accessibilityRole:!0,accessibilityRoleDescription:!0,accessibilityRowCount:!0,accessibilityRowIndex:!0,accessibilityRowSpan:!0,accessibilitySelected:!0,accessibilitySetSize:!0,accessibilitySort:!0,accessibilityValueMax:!0,accessibilityValueMin:!0,accessibilityValueNow:!0,accessibilityValueText:!0},FS={onClick:!0,onAuxClick:!0,onContextMenu:!0,onGotPointerCapture:!0,onLostPointerCapture:!0,onPointerCancel:!0,onPointerDown:!0,onPointerEnter:!0,onPointerMove:!0,onPointerLeave:!0,onPointerOut:!0,onPointerOver:!0,onPointerUp:!0},kS={onBlur:!0,onFocus:!0},BS={onKeyDown:!0,onKeyDownCapture:!0,onKeyUp:!0,onKeyUpCapture:!0},zS={onMouseDown:!0,onMouseEnter:!0,onMouseLeave:!0,onMouseMove:!0,onMouseOver:!0,onMouseOut:!0,onMouseUp:!0},HS={onTouchCancel:!0,onTouchCancelCapture:!0,onTouchEnd:!0,onTouchEndCapture:!0,onTouchMove:!0,onTouchMoveCapture:!0,onTouchStart:!0,onTouchStartCapture:!0},GS={style:!0};function VS(n,e){var t={};for(var r in n)n.hasOwnProperty(r)&&e[r]===!0&&(t[r]=n[r]);return t}var $c=xi?at.useLayoutEffect:at.useEffect,_p=n=>{if(n!=null){var e=n.nodeType===1;if(e&&typeof n.getBoundingClientRect=="function")return n.getBoundingClientRect()}},Sl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexOrder:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,gridRow:!0,gridRowEnd:!0,gridRowGap:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnGap:!0,gridColumnStart:!0,lineClamp:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0,scale:!0,scaleX:!0,scaleY:!0,scaleZ:!0,shadowOpacity:!0},a1=["ms","Moz","O","Webkit"],s1=(n,e)=>n+e.charAt(0).toUpperCase()+e.substring(1);Object.keys(Sl).forEach(n=>{a1.forEach(e=>{Sl[s1(e,n)]=Sl[n]})});function o1(n,e,t){var r=e==null||typeof e=="boolean"||e==="";return r?"":!t&&typeof e=="number"&&e!==0&&!(Sl.hasOwnProperty(n)&&Sl[n])?e+"px":(""+e).trim()}function l1(n,e){var t=n.style;for(var r in e)if(e.hasOwnProperty(r)){var s=r.indexOf("--")===0,o=o1(r,e[r],s);r==="float"&&(r="cssFloat"),s?t.setProperty(r,o):t[r]=o}}var x_=n=>{var e=n.offsetHeight,t=n.offsetWidth,r=n.offsetLeft,s=n.offsetTop;for(n=n.offsetParent;n&&n.nodeType===1;)r+=n.offsetLeft+n.clientLeft-n.scrollLeft,s+=n.offsetTop+n.clientTop-n.scrollTop,n=n.offsetParent;return s-=window.scrollY,r-=window.scrollX,{width:t,height:e,top:s,left:r}},M_=(n,e,t)=>{var r=e||n&&n.parentNode;n&&r&&setTimeout(()=>{if(n.isConnected&&r.isConnected){var s=x_(r),o=x_(n),u=o.height,d=o.left,f=o.top,h=o.width,g=d-s.left,m=f-s.top;t(g,m,h,u,d,f)}},0)},u1={A:!0,BODY:!0,INPUT:!0,SELECT:!0,TEXTAREA:!0},Lc={blur(n){try{n.blur()}catch{}},focus(n){try{var e=n.nodeName;n.getAttribute("tabIndex")==null&&n.isContentEditable!==!0&&u1[e]==null&&n.setAttribute("tabIndex","-1"),n.focus()}catch{}},measure(n,e){M_(n,null,e)},measureInWindow(n,e){n&&setTimeout(()=>{var t=_p(n),r=t.height,s=t.left,o=t.top,u=t.width;e(s,o,u,r)},0)},measureLayout(n,e,t,r){M_(n,e,r)},updateView(n,e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var r=e[t];switch(t){case"style":{l1(n,r);break}case"class":case"className":{n.setAttribute("class",r);break}case"text":case"value":n.value=r;break;default:n.setAttribute(t,r)}}},configureNextLayoutAnimation(n,e){e()},setLayoutAnimationEnabledExperimental(){}},yp="__reactLayoutHandler",lh=null;function c1(){return xi&&typeof window.ResizeObserver<"u"&&lh==null&&(lh=new window.ResizeObserver(function(n){n.forEach(e=>{var t=e.target,r=t[yp];typeof r=="function"&&Lc.measure(t,(s,o,u,d,f,h)=>{var g={nativeEvent:{layout:{x:s,y:o,width:u,height:d,left:f,top:h}},timeStamp:Date.now()};Object.defineProperty(g.nativeEvent,"target",{enumerable:!0,get:()=>e.target}),r(g)})})})),lh}function WS(n,e){var t=c1();$c(()=>{var r=n.current;r!=null&&(r[yp]=e)},[n,e]),$c(()=>{var r=n.current;return r!=null&&t!=null&&(typeof r[yp]=="function"?t.observe(r):t.unobserve(r)),()=>{r!=null&&t!=null&&t.unobserve(r)}},[n,t])}function d1(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(s){e.forEach(o=>{if(o!=null){if(typeof o=="function"){o(s);return}if(typeof o=="object"){o.current=s;return}console.error("mergeRefs cannot handle Refs of type boolean, number or string, received ref "+String(o))}})}}function wm(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return at.useMemo(()=>d1(...e),[...e])}var E_=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():Object.freeze({});function Sp(n){var e=at.useRef(E_);return e.current===E_&&(e.current=n()),e.current}function $S(n){n.pointerEvents,n.style;var e=Sp(()=>t=>{t!=null&&(t.measure=r=>Lc.measure(t,r),t.measureLayout=(r,s,o)=>Lc.measureLayout(t,r,o,s),t.measureInWindow=r=>Lc.measureInWindow(t,r))});return e}var b_=()=>{},f1={},h1=[];function w_(n){return n>20?n%20:n}function XS(n,e){var t,r=!1,s,o,u=n.changedTouches,d=n.type,f=n.metaKey===!0,h=n.shiftKey===!0,g=u&&u[0].force||0,m=w_(u&&u[0].identifier||0),v=u&&u[0].clientX||n.clientX,x=u&&u[0].clientY||n.clientY,E=u&&u[0].pageX||n.pageX,T=u&&u[0].pageY||n.pageY,y=typeof n.preventDefault=="function"?n.preventDefault.bind(n):b_,S=n.timeStamp;function b(w){return Array.prototype.slice.call(w).map(P=>({force:P.force,identifier:w_(P.identifier),get locationX(){return O(P.clientX)},get locationY(){return D(P.clientY)},pageX:P.pageX,pageY:P.pageY,target:P.target,timestamp:S}))}if(u!=null)s=b(u),o=b(n.touches);else{var N=[{force:g,identifier:m,get locationX(){return O(v)},get locationY(){return D(x)},pageX:E,pageY:T,target:n.target,timestamp:S}];s=N,o=d==="mouseup"||d==="dragstart"?h1:N}var L={bubbles:!0,cancelable:!0,currentTarget:null,defaultPrevented:n.defaultPrevented,dispatchConfig:f1,eventPhase:n.eventPhase,isDefaultPrevented(){return n.defaultPrevented},isPropagationStopped(){return r},isTrusted:n.isTrusted,nativeEvent:{altKey:!1,ctrlKey:!1,metaKey:f,shiftKey:h,changedTouches:s,force:g,identifier:m,get locationX(){return O(v)},get locationY(){return D(x)},pageX:E,pageY:T,target:n.target,timestamp:S,touches:o,type:d},persist:b_,preventDefault:y,stopPropagation(){r=!0},target:n.target,timeStamp:S,touchHistory:e.touchHistory};function O(w){if(t=t||_p(L.currentTarget),t)return w-t.left}function D(w){if(t=t||_p(L.currentTarget),t)return w-t.top}return L}var p1="mousedown",m1="mousemove",g1="mouseup",v1="dragstart",_1="touchstart",y1="touchmove",S1="touchend",x1="touchcancel",M1="scroll",E1="select",b1="selectionchange";function qS(n){return n===_1||n===p1}function YS(n){return n===y1||n===m1}function KS(n){return n===S1||n===g1||ZS(n)}function ZS(n){return n===x1||n===v1}function w1(n){return n===M1}function T1(n){return n===E1||n===b1}function R1(){var n=window.getSelection(),e=n.toString(),t=n.anchorNode,r=n.focusNode,s=t&&t.nodeType===window.Node.TEXT_NODE||r&&r.nodeType===window.Node.TEXT_NODE;return e.length>=1&&e!==`
`&&s}var jS="__reactResponderId";function A1(n){if(n.type==="selectionchange"){var e=window.getSelection().anchorNode;return T_(e)}else{var t=n.composedPath!=null?n.composedPath():T_(n.target);return t}}function T_(n){for(var e=[];n!=null&&n!==document.body;)e.push(n),n=n.parentNode;return e}function C1(n){return n!=null?n[jS]:null}function P1(n,e){n!=null&&(n[jS]=e)}function L1(n){for(var e=[],t=[],r=A1(n),s=0;s<r.length;s++){var o=r[s],u=C1(o);u!=null&&(e.push(u),t.push(o))}return{idPath:e,nodePath:t}}function D1(n,e){var t=n.length,r=e.length;if(t===0||r===0||n[t-1]!==e[r-1])return null;var s=n[0],o=0,u=e[0],d=0;t-r>0&&(o=t-r,s=n[o],t=r),r-t>0&&(d=r-t,u=e[d],r=t);for(var f=t;f--;){if(s===u)return s;s=n[o++],u=e[d++]}return null}function I1(n,e){if(!e||e.length===0)return!1;for(var t=0;t<e.length;t++){var r=e[t].target;if(r!=null&&n.contains(r))return!0}return!1}function N1(n){return n.type==="selectionchange"?R1():n.type==="select"}function O1(n){var e=n.altKey,t=n.button,r=n.buttons,s=n.ctrlKey,o=n.type,u=o==="touchstart"||o==="touchmove",d=o==="mousedown"&&(t===0||r===1),f=o==="mousemove"&&r===1,h=e===!1&&s===!1;return!!(u||d&&h||f&&h)}var R_=20;function Ui(n){return n.timeStamp||n.timestamp}function U1(n){return{touchActive:!0,startPageX:n.pageX,startPageY:n.pageY,startTimeStamp:Ui(n),currentPageX:n.pageX,currentPageY:n.pageY,currentTimeStamp:Ui(n),previousPageX:n.pageX,previousPageY:n.pageY,previousTimeStamp:Ui(n)}}function F1(n,e){n.touchActive=!0,n.startPageX=e.pageX,n.startPageY=e.pageY,n.startTimeStamp=Ui(e),n.currentPageX=e.pageX,n.currentPageY=e.pageY,n.currentTimeStamp=Ui(e),n.previousPageX=e.pageX,n.previousPageY=e.pageY,n.previousTimeStamp=Ui(e)}function Tm(n){var e=n.identifier;return e==null&&console.error("Touch object is missing identifier."),e}function k1(n,e){var t=Tm(n),r=e.touchBank[t];r?F1(r,n):e.touchBank[t]=U1(n),e.mostRecentTimeStamp=Ui(n)}function B1(n,e){var t=e.touchBank[Tm(n)];t?(t.touchActive=!0,t.previousPageX=t.currentPageX,t.previousPageY=t.currentPageY,t.previousTimeStamp=t.currentTimeStamp,t.currentPageX=n.pageX,t.currentPageY=n.pageY,t.currentTimeStamp=Ui(n),e.mostRecentTimeStamp=Ui(n)):console.warn(`Cannot record touch move without a touch start.
`,"Touch Move: "+JS(n)+`
`,"Touch Bank: "+QS(e))}function z1(n,e){var t=e.touchBank[Tm(n)];t?(t.touchActive=!1,t.previousPageX=t.currentPageX,t.previousPageY=t.currentPageY,t.previousTimeStamp=t.currentTimeStamp,t.currentPageX=n.pageX,t.currentPageY=n.pageY,t.currentTimeStamp=Ui(n),e.mostRecentTimeStamp=Ui(n)):console.warn(`Cannot record touch end without a touch start.
`,"Touch End: "+JS(n)+`
`,"Touch Bank: "+QS(e))}function JS(n){return JSON.stringify({identifier:n.identifier,pageX:n.pageX,pageY:n.pageY,timestamp:Ui(n)})}function QS(n){var e=n.touchBank,t=JSON.stringify(e.slice(0,R_));return e.length>R_&&(t+=" (original size: "+e.length+")"),t}class H1{constructor(){this._touchHistory={touchBank:[],numberActiveTouches:0,indexOfSingleActiveTouch:-1,mostRecentTimeStamp:0}}recordTouchTrack(e,t){var r=this._touchHistory;if(YS(e))t.changedTouches.forEach(d=>B1(d,r));else if(qS(e))t.changedTouches.forEach(d=>k1(d,r)),r.numberActiveTouches=t.touches.length,r.numberActiveTouches===1&&(r.indexOfSingleActiveTouch=t.touches[0].identifier);else if(KS(e)&&(t.changedTouches.forEach(d=>z1(d,r)),r.numberActiveTouches=t.touches.length,r.numberActiveTouches===1))for(var s=r.touchBank,o=0;o<s.length;o++){var u=s[o];if(u!=null&&u.touchActive){r.indexOfSingleActiveTouch=o;break}}}get touchHistory(){return this._touchHistory}}var G1={},A_=["onStartShouldSetResponderCapture","onStartShouldSetResponder",{bubbles:!0}],C_=["onMoveShouldSetResponderCapture","onMoveShouldSetResponder",{bubbles:!0}],V1=["onScrollShouldSetResponderCapture","onScrollShouldSetResponder",{bubbles:!1}],W1={touchstart:A_,mousedown:A_,touchmove:C_,mousemove:C_,scroll:V1},xp={id:null,idPath:null,node:null},Xc=new Map,Ta=!1,mr=0,vr={id:null,node:null,idPath:null},Mp=new H1;function Tl(n){vr=n}function Rl(n){var e=Xc.get(n);return e??G1}function uh(n){var e=n.type,t=n.target;if(e==="touchstart"&&(Ta=!0),(e==="touchmove"||mr>1)&&(Ta=!1),!(e==="mousedown"&&Ta||e==="mousemove"&&Ta||e==="mousemove"&&mr<1)){if(Ta&&e==="mouseup"){mr===0&&(Ta=!1);return}var r=qS(e)&&O1(n),s=YS(e),o=KS(e),u=w1(e),d=T1(e),f=XS(n,Mp);(r||s||o)&&(n.touches?mr=n.touches.length:r?mr=1:o&&(mr=0),Mp.recordTouchTrack(e,f.nativeEvent));var h=L1(n),g=!1,m;if(r||s||u&&mr>0){var v=vr.idPath,x=h.idPath;if(v!=null&&x!=null){var E=D1(v,x);if(E!=null){var T=x.indexOf(E),y=T+(E===vr.id?1:0);h={idPath:x.slice(y),nodePath:h.nodePath.slice(y)}}else h=null}h!=null&&(m=$1(h,n,f),m!=null&&(X1(f,m),g=!0))}if(vr.id!=null&&vr.node!=null){var S=vr,b=S.id,N=S.node,L=Rl(b),O=L.onResponderStart,D=L.onResponderMove,w=L.onResponderEnd,P=L.onResponderRelease,V=L.onResponderTerminate,I=L.onResponderTerminationRequest;if(f.bubbles=!1,f.cancelable=!1,f.currentTarget=N,r)O!=null&&(f.dispatchConfig.registrationName="onResponderStart",O(f));else if(s)D!=null&&(f.dispatchConfig.registrationName="onResponderMove",D(f));else{var z=ZS(e)||e==="contextmenu"||e==="blur"&&t===window||e==="blur"&&t.contains(N)&&n.relatedTarget!==N||u&&mr===0||u&&t.contains(N)&&t!==N||d&&N1(n),W=o&&!z&&!I1(N,n.touches);if(o&&w!=null&&(f.dispatchConfig.registrationName="onResponderEnd",w(f)),W&&(P!=null&&(f.dispatchConfig.registrationName="onResponderRelease",P(f)),Tl(xp)),z){var Z=!0;(e==="contextmenu"||e==="scroll"||e==="selectionchange")&&(g?Z=!1:I!=null&&(f.dispatchConfig.registrationName="onResponderTerminationRequest",I(f)===!1&&(Z=!1))),Z&&(V!=null&&(f.dispatchConfig.registrationName="onResponderTerminate",V(f)),Tl(xp),Ta=!1,mr=0)}}}}}function $1(n,e,t){var r=W1[e.type];if(r!=null){for(var s=n.idPath,o=n.nodePath,u=r[0],d=r[1],f=r[2].bubbles,h=function(D,w,P){var V=Rl(D),I=V[P];if(I!=null&&(t.currentTarget=w,I(t)===!0)){var z=s.slice(s.indexOf(D));return{id:D,node:w,idPath:z}}},g=s.length-1;g>=0;g--){var m=s[g],v=o[g],x=h(m,v,u);if(x!=null)return x;if(t.isPropagationStopped()===!0)return}if(f)for(var E=0;E<s.length;E++){var T=s[E],y=o[E],S=h(T,y,d);if(S!=null)return S;if(t.isPropagationStopped()===!0)return}else{var b=s[0],N=o[0],L=e.target;if(L===N)return h(b,N,d)}}}function X1(n,e){var t=vr,r=t.id,s=t.node,o=e.id,u=e.node,d=Rl(o),f=d.onResponderGrant,h=d.onResponderReject;if(n.bubbles=!1,n.cancelable=!1,n.currentTarget=u,r==null)f!=null&&(n.currentTarget=u,n.dispatchConfig.registrationName="onResponderGrant",f(n)),Tl(e);else{var g=Rl(r),m=g.onResponderTerminate,v=g.onResponderTerminationRequest,x=!0;v!=null&&(n.currentTarget=s,n.dispatchConfig.registrationName="onResponderTerminationRequest",v(n)===!1&&(x=!1)),x?(m!=null&&(n.currentTarget=s,n.dispatchConfig.registrationName="onResponderTerminate",m(n)),f!=null&&(n.currentTarget=u,n.dispatchConfig.registrationName="onResponderGrant",f(n)),Tl(e)):h!=null&&(n.currentTarget=u,n.dispatchConfig.registrationName="onResponderReject",h(n))}}var q1=["blur","scroll"],Y1=["mousedown","mousemove","mouseup","dragstart","touchstart","touchmove","touchend","touchcancel","contextmenu","select","selectionchange"];function K1(){xi&&window.__reactResponderSystemActive==null&&(window.addEventListener("blur",uh),Y1.forEach(n=>{document.addEventListener(n,uh)}),q1.forEach(n=>{document.addEventListener(n,uh,!0)}),window.__reactResponderSystemActive=!0)}function Z1(n,e,t){P1(e,n),Xc.set(n,t)}function P_(n){vr.id===n&&j1(),Xc.has(n)&&Xc.delete(n)}function j1(){var n=vr,e=n.id,t=n.node;if(e!=null&&t!=null){var r=Rl(e),s=r.onResponderTerminate;if(s!=null){var o=XS({},Mp);o.currentTarget=t,s(o)}Tl(xp)}Ta=!1,mr=0}function J1(){return vr.node}var Q1={},eR=0;function tR(n){var e=at.useRef(null);return e.current==null&&(e.current=n()),e.current}function ex(n,e){e===void 0&&(e=Q1);var t=tR(()=>eR++),r=at.useRef(!1);at.useEffect(()=>(K1(),()=>{P_(t)}),[t]),at.useEffect(()=>{var s=e,o=s.onMoveShouldSetResponder,u=s.onMoveShouldSetResponderCapture,d=s.onScrollShouldSetResponder,f=s.onScrollShouldSetResponderCapture,h=s.onSelectionChangeShouldSetResponder,g=s.onSelectionChangeShouldSetResponderCapture,m=s.onStartShouldSetResponder,v=s.onStartShouldSetResponderCapture,x=o!=null||u!=null||d!=null||f!=null||h!=null||g!=null||m!=null||v!=null,E=n.current;x?(Z1(t,E,e),r.current=!0):r.current&&(P_(t),r.current=!1)},[e,n,t]),at.useDebugValue({isResponder:n.current===J1()}),at.useDebugValue(e)}var nR=["hrefAttrs","onLayout","onMoveShouldSetResponder","onMoveShouldSetResponderCapture","onResponderEnd","onResponderGrant","onResponderMove","onResponderReject","onResponderRelease","onResponderStart","onResponderTerminate","onResponderTerminationRequest","onScrollShouldSetResponder","onScrollShouldSetResponderCapture","onSelectionChangeShouldSetResponder","onSelectionChangeShouldSetResponderCapture","onStartShouldSetResponder","onStartShouldSetResponderCapture"],iR=Object.assign({},OS,US,FS,kS,BS,zS,HS,GS,{href:!0,lang:!0,onScroll:!0,onWheel:!0,pointerEvents:!0}),rR=n=>VS(n,iR),Al=at.forwardRef((n,e)=>{var t=n.hrefAttrs,r=n.onLayout,s=n.onMoveShouldSetResponder,o=n.onMoveShouldSetResponderCapture,u=n.onResponderEnd,d=n.onResponderGrant,f=n.onResponderMove,h=n.onResponderReject,g=n.onResponderRelease,m=n.onResponderStart,v=n.onResponderTerminate,x=n.onResponderTerminationRequest,E=n.onScrollShouldSetResponder,T=n.onScrollShouldSetResponderCapture,y=n.onSelectionChangeShouldSetResponder,S=n.onSelectionChangeShouldSetResponderCapture,b=n.onStartShouldSetResponder,N=n.onStartShouldSetResponderCapture,L=gs(n,nR),O=at.useContext(Wc),D=at.useRef(null),w=DS(),P=w.direction;WS(D,r),ex(D,{onMoveShouldSetResponder:s,onMoveShouldSetResponderCapture:o,onResponderEnd:u,onResponderGrant:d,onResponderMove:f,onResponderReject:h,onResponderRelease:g,onResponderStart:m,onResponderTerminate:v,onResponderTerminationRequest:x,onScrollShouldSetResponder:E,onScrollShouldSetResponderCapture:T,onSelectionChangeShouldSetResponder:y,onSelectionChangeShouldSetResponderCapture:S,onStartShouldSetResponder:b,onStartShouldSetResponderCapture:N});var V="div",I=n.lang!=null?Em(n.lang):null,z=n.dir||I,W=z||P,Z=rR(L);if(Z.dir=z,Z.style=[L_.view$raw,O&&L_.inline,n.style],n.href!=null&&(V="a",t!=null)){var B=t.download,le=t.rel,re=t.target;B!=null&&(Z.download=B),le!=null&&(Z.rel=le),typeof re=="string"&&(Z.target=re.charAt(0)!=="_"?"_"+re:re)}var ne=$S(Z),K=wm(D,ne,e);return Z.ref=K,bm(V,Z,{writingDirection:W})});Al.displayName="View";var L_=br.create({view$raw:{alignItems:"stretch",backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",display:"flex",flexBasis:"auto",flexDirection:"column",flexShrink:0,listStyle:"none",margin:0,minHeight:0,minWidth:0,padding:0,position:"relative",textDecoration:"none",zIndex:0},inline:{display:"inline-flex"}}),aR=["aria-label","accessibilityLabel","blurRadius","defaultSource","draggable","onError","onLayout","onLoad","onLoadEnd","onLoadStart","pointerEvents","source","style"],sR="ERRORED",ch="LOADED",D_="LOADING",oR="IDLE",lR=0,uR=/^(data:image\/svg\+xml;utf8,)(.*)/;function cR(n,e){return n&&e!=null?at.createElement("svg",{style:{position:"absolute",height:0,visibility:"hidden",width:0}},at.createElement("defs",null,at.createElement("filter",{id:"tint-"+e,suppressHydrationWarning:!0},at.createElement("feFlood",{floodColor:""+n,key:n}),at.createElement("feComposite",{in2:"SourceAlpha",operator:"in"})))):null}function dR(n,e,t,r){var s=br.flatten(n),o=s.filter,u=s.resizeMode,d=s.shadowOffset,f=s.tintColor;s.resizeMode,s.tintColor;var h=[],g=null;if(o&&h.push(o),e&&h.push("blur("+e+"px)"),d){var m=bS(s);m&&h.push("drop-shadow("+m+")")}return(r||f)&&t!=null&&h.push("url(#tint-"+t+")"),h.length>0&&(g=h.join(" ")),[u,g,f]}function fR(n){if(typeof n=="number"){var e=IS(n),t=e.height,r=e.width;return{height:t,width:r}}else if(n!=null&&!Array.isArray(n)&&typeof n=="object"){var s=n.height,o=n.width;return{height:s,width:o}}}function dh(n){var e=null;if(typeof n=="number"){var t=IS(n);if(t==null)throw new Error('Image: asset with ID "'+n+'" could not be found. Please check the image source or packager.');var r=t.scales[0];if(t.scales.length>1){var s=yl.get();r=t.scales.reduce((g,m)=>Math.abs(m-s)<Math.abs(g-s)?m:g)}var o=r!==1?"@"+r+"x":"";e=t?t.httpServerLocation+"/"+t.name+o+"."+t.type:""}else typeof n=="string"?e=n:n&&typeof n.uri=="string"&&(e=n.uri);if(e){var u=e.match(uR);if(u){var d=u[1],f=u[2],h=encodeURIComponent(f);return""+d+h}}return e}var tx=at.forwardRef((n,e)=>{var t=n["aria-label"],r=n.accessibilityLabel,s=n.blurRadius,o=n.defaultSource,u=n.draggable,d=n.onError,f=n.onLayout,h=n.onLoad,g=n.onLoadEnd,m=n.onLoadStart,v=n.pointerEvents,x=n.source,E=n.style,T=gs(n,aR),y=t||r,S=at.useState(()=>{var Re=dh(x);if(Re!=null){var ye=Sr.has(Re);if(ye)return ch}return oR}),b=S[0],N=S[1],L=at.useState({}),O=L[0],D=L[1],w=at.useContext(Wc),P=at.useRef(null),V=at.useRef(lR++),I=at.useRef(null),z=b===ch||b===D_&&o==null,W=dR(E,s,V.current,n.tintColor),Z=W[0],B=W[1],le=W[2],re=n.resizeMode||Z||"cover",ne=n.tintColor||le,K=z?x:o,q=dh(K),J=fR(K),k=q?'url("'+q+'")':null,ie=se(),Ce=q?bm("img",{alt:y||"",style:el.accessibilityImage$raw,draggable:u||!1,ref:P,src:q}):null;function se(){if(P.current!=null&&(re==="center"||re==="repeat")){var Re=P.current,ye=Re.naturalHeight,Ue=Re.naturalWidth,ut=O.height,Je=O.width;if(ye&&Ue&&ut&&Je){var pt=Math.min(1,Je/Ue,ut/ye),yt=Math.ceil(pt*Ue),ot=Math.ceil(pt*ye);return yt+"px "+ot+"px"}}}function xe(Re){if(re==="center"||re==="repeat"||f){var ye=Re.nativeEvent.layout;f&&f(Re),D(ye)}}var Me=dh(x);return at.useEffect(()=>{Re(),Me!=null&&(N(D_),m&&m(),I.current=Sr.load(Me,function(Ue){N(ch),h&&h(Ue),g&&g()},function(){N(sR),d&&d({nativeEvent:{error:"Failed to load resource "+Me}}),g&&g()}));function Re(){I.current!=null&&(Sr.abort(I.current),I.current=null)}return Re},[Me,I,N,d,h,g,m]),at.createElement(Al,Hc({},T,{"aria-label":y,onLayout:xe,pointerEvents:v,ref:e,style:[el.root,w&&el.inline,J,E,el.undo,{boxShadow:null}]}),at.createElement(Al,{style:[el.image,hR[re],{backgroundImage:k,filter:B},ie!=null&&{backgroundSize:ie}],suppressHydrationWarning:!0}),Ce,cR(ne,V.current))});tx.displayName="Image";var sd=tx;sd.getSize=function(n,e,t){Sr.getSize(n,e,t)};sd.prefetch=function(n){return Sr.prefetch(n)};sd.queryCache=function(n){return Sr.queryCache(n)};var el=br.create({root:{flexBasis:"auto",overflow:"hidden",zIndex:0},inline:{display:"inline-flex"},undo:{blurRadius:null,shadowColor:null,shadowOpacity:null,shadowOffset:null,shadowRadius:null,tintColor:null,overlayColor:null,resizeMode:null},image:Ni(Ni({},br.absoluteFillObject),{},{backgroundColor:"transparent",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100%",width:"100%",zIndex:-1}),accessibilityImage$raw:Ni(Ni({},br.absoluteFillObject),{},{height:"100%",opacity:0,width:"100%",zIndex:-1})}),hR=br.create({center:{backgroundSize:"auto"},contain:{backgroundSize:"contain"},cover:{backgroundSize:"cover"},none:{backgroundPosition:"0",backgroundSize:"auto"},repeat:{backgroundPosition:"0",backgroundRepeat:"repeat",backgroundSize:"auto"},stretch:{backgroundSize:"100% 100%"}}),pR=()=>{};function mR(){var n=!1;if(xi)try{var e={};Object.defineProperty(e,"passive",{get(){return n=!0,!1}}),window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}return n}var gR=mR();function vR(n){return n==null?!1:gR?n:!!n.capture}function _R(){return this.cancelBubble}function yR(){return this.defaultPrevented}function SR(n){return n.nativeEvent=n,n.persist=pR,n.isDefaultPrevented=yR,n.isPropagationStopped=_R,n}function kn(n,e,t,r){var s=vR(r),o=u=>t(SR(u));return n.addEventListener(e,o,s),function(){n!=null&&n.removeEventListener(e,o,s)}}var xR=()=>typeof window<"u"&&window.PointerEvent!=null,Ji="keyboard",Qn="keyboard",fl,hl,pl=!1,MR=new Set,xl="keyboard",tl="mouse",fh="touch",ER="blur",nx="contextmenu",bR="focus",wR="keydown",ix="mousedown",rx="mousemove",ax="mouseup",sx="pointerdown",ox="pointermove",lx="scroll",ux="selectionchange",cx="touchcancel",dx="touchmove",fx="touchstart",TR="visibilitychange",I_={passive:!0},fi={capture:!0,passive:!0};function hx(){(fl!=null||hl!=null)&&(fl!=null&&(Qn=fl,fl=null),hl!=null&&(Ji=hl,hl=null),Ca())}function RR(){fl=Qn,hl=Ji,Ji=xl,Qn=xl,Ca(),pl=!1}function AR(){hx()}function CR(n){n.metaKey||n.altKey||n.ctrlKey||Qn!==xl&&(Qn=xl,Ji=xl,Ca())}function PR(){document.visibilityState!=="hidden"&&hx()}function qi(n){var e=n.type;if(xR()){if(e===sx){Ji!==n.pointerType&&(Qn=n.pointerType,Ji=n.pointerType,Ca());return}if(e===ox){Qn!==n.pointerType&&(Qn=n.pointerType,Ca());return}}else{if(pl||(e===ix&&Ji!==tl&&(Qn=tl,Ji=tl,Ca()),e===rx&&Qn!==tl&&(Qn=tl,Ca())),e===fx){pl=!0,n.touches&&n.touches.length>1&&(pl=!1),Ji!==fh&&(Qn=fh,Ji=fh,Ca());return}(e===nx||e===ax||e===ux||e===lx||e===cx||e===dx)&&(pl=!1)}}xi&&(kn(window,ER,RR,I_),kn(window,bR,AR,I_),kn(document,wR,CR,fi),kn(document,TR,PR,fi),kn(document,sx,qi,fi),kn(document,ox,qi,fi),kn(document,nx,qi,fi),kn(document,ix,qi,fi),kn(document,rx,qi,fi),kn(document,ax,qi,fi),kn(document,cx,qi,fi),kn(document,dx,qi,fi),kn(document,fx,qi,fi),kn(document,ux,qi,fi),kn(document,lx,qi,fi));function Ca(){var n={activeModality:Ji,modality:Qn};MR.forEach(e=>{e(n)})}function LR(){return Qn}function nl(n,e){var t=Sp(()=>new Map),r=Sp(()=>(s,o)=>{var u=t.get(s);u!=null&&u(),o==null&&(t.delete(s),o=()=>{});var d=kn(s,n,o,e);return t.set(s,d),d});return $c(()=>()=>{t.forEach(s=>{s()}),t.clear()},[t]),r}var DR={},il={passive:!0},N_="react-gui:hover:lock",O_="react-gui:hover:unlock",IR=()=>typeof window<"u"&&window.PointerEvent!=null;function U_(n,e,t){var r=document.createEvent("CustomEvent"),s=DR,o=s.bubbles,u=o===void 0?!0:o,d=s.cancelable,f=d===void 0?!0:d,h=s.detail;r.initCustomEvent(e,u,f,h),n.dispatchEvent(r)}function hh(n){var e=n.pointerType;return e??LR()}function NR(n,e){var t=e.contain,r=e.disabled,s=e.onHoverStart,o=e.onHoverChange,u=e.onHoverUpdate,d=e.onHoverEnd,f=IR(),h=nl(f?"pointermove":"mousemove",il),g=nl(f?"pointerenter":"mouseenter",il),m=nl(f?"pointerleave":"mouseleave",il),v=nl(N_,il),x=nl(O_,il);$c(()=>{var E=n.current;if(E!==null){var T=function(O){d!=null&&d(O),o!=null&&o(!1),h(E,null),m(E,null)},y=function(O){var D=n.current;D!=null&&hh(O)!=="touch"&&(t&&U_(D,O_),T(O))},S=function(O){hh(O)!=="touch"&&u!=null&&(O.x==null&&(O.x=O.clientX),O.y==null&&(O.y=O.clientY),u(O))},b=function(O){s!=null&&s(O),o!=null&&o(!0),u!=null&&h(E,r?null:S),m(E,r?null:y)},N=function(O){var D=n.current;if(D!=null&&hh(O)!=="touch"){t&&U_(D,N_),b(O);var w=function(I){I.target!==D&&T(O)},P=function(I){I.target!==D&&b(O)};v(D,r?null:w),x(D,r?null:P)}};g(E,r?null:N)}},[g,h,m,v,x,t,r,s,o,u,d,n])}var F_="DELAY",ji="ERROR",k_="LONG_PRESS_DETECTED",Wn="NOT_RESPONDER",ho="RESPONDER_ACTIVE_LONG_PRESS_START",od="RESPONDER_ACTIVE_PRESS_START",Ep="RESPONDER_INACTIVE_PRESS_START",OR="RESPONDER_GRANT",Dc="RESPONDER_RELEASE",px="RESPONDER_TERMINATED",B_=Object.freeze({NOT_RESPONDER:{DELAY:ji,RESPONDER_GRANT:Ep,RESPONDER_RELEASE:ji,RESPONDER_TERMINATED:ji,LONG_PRESS_DETECTED:ji},RESPONDER_INACTIVE_PRESS_START:{DELAY:od,RESPONDER_GRANT:ji,RESPONDER_RELEASE:Wn,RESPONDER_TERMINATED:Wn,LONG_PRESS_DETECTED:ji},RESPONDER_ACTIVE_PRESS_START:{DELAY:ji,RESPONDER_GRANT:ji,RESPONDER_RELEASE:Wn,RESPONDER_TERMINATED:Wn,LONG_PRESS_DETECTED:ho},RESPONDER_ACTIVE_LONG_PRESS_START:{DELAY:ji,RESPONDER_GRANT:ji,RESPONDER_RELEASE:Wn,RESPONDER_TERMINATED:Wn,LONG_PRESS_DETECTED:ho},ERROR:{DELAY:Wn,RESPONDER_GRANT:Ep,RESPONDER_RELEASE:Wn,RESPONDER_TERMINATED:Wn,LONG_PRESS_DETECTED:Wn}}),mx=n=>n.getAttribute("role"),bp=n=>n.tagName.toLowerCase(),z_=n=>n===od||n===ho,Ic=n=>mx(n)==="button",H_=n=>n===Ep||n===od||n===ho,UR=n=>n===px||n===Dc,G_=n=>{var e=n.key,t=n.target,r=e===" "||e==="Spacebar",s=bp(t)==="button"||Ic(t);return e==="Enter"||r&&s},FR=450,kR=50;class BR{constructor(e){this._eventHandlers=null,this._isPointerTouch=!1,this._longPressDelayTimeout=null,this._longPressDispatched=!1,this._pressDelayTimeout=null,this._pressOutDelayTimeout=null,this._touchState=Wn,this._responderElement=null,this.configure(e)}configure(e){this._config=e}reset(){this._cancelLongPressDelayTimeout(),this._cancelPressDelayTimeout(),this._cancelPressOutDelayTimeout()}getEventHandlers(){return this._eventHandlers==null&&(this._eventHandlers=this._createEventHandlers()),this._eventHandlers}_createEventHandlers(){var e=(s,o)=>{s.persist(),this._cancelPressOutDelayTimeout(),this._longPressDispatched=!1,this._selectionTerminated=!1,this._touchState=Wn,this._isPointerTouch=s.nativeEvent.type==="touchstart",this._receiveSignal(OR,s);var u=ph(this._config.delayPressStart,0,kR);o!==!1&&u>0?this._pressDelayTimeout=setTimeout(()=>{this._receiveSignal(F_,s)},u):this._receiveSignal(F_,s);var d=ph(this._config.delayLongPress,10,FR);this._longPressDelayTimeout=setTimeout(()=>{this._handleLongPress(s)},d+u)},t=s=>{this._receiveSignal(Dc,s)},r=s=>{var o=this._config.onPress,u=s.target;if(this._touchState!==Wn&&G_(s)){t(s),document.removeEventListener("keyup",r);var d=u.getAttribute("role"),f=bp(u),h=d==="link"||f==="a"||f==="button"||f==="input"||f==="select"||f==="textarea",g=this._responderElement===u;o!=null&&!h&&g&&o(s),this._responderElement=null}};return{onStartShouldSetResponder:s=>{var o=this._config.disabled;return o&&Ic(s.currentTarget)&&s.stopPropagation(),o==null?!0:!o},onKeyDown:s=>{var o=this._config.disabled,u=s.key,d=s.target;if(!o&&G_(s)){this._touchState===Wn&&(e(s,!1),this._responderElement=d,document.addEventListener("keyup",r));var f=u===" "||u==="Spacebar",h=mx(d),g=h==="button"||h==="menuitem";f&&g&&bp(d)!=="button"&&s.preventDefault(),s.stopPropagation()}},onResponderGrant:s=>e(s),onResponderMove:s=>{this._config.onPressMove!=null&&this._config.onPressMove(s);var o=V_(s);if(this._touchActivatePosition!=null){var u=this._touchActivatePosition.pageX-o.pageX,d=this._touchActivatePosition.pageY-o.pageY;Math.hypot(u,d)>10&&this._cancelLongPressDelayTimeout()}},onResponderRelease:s=>t(s),onResponderTerminate:s=>{s.nativeEvent.type==="selectionchange"&&(this._selectionTerminated=!0),this._receiveSignal(px,s)},onResponderTerminationRequest:s=>{var o=this._config,u=o.cancelable,d=o.disabled,f=o.onLongPress;return!d&&f!=null&&this._isPointerTouch&&s.nativeEvent.type==="contextmenu"?!1:u??!0},onClick:s=>{var o=this._config,u=o.disabled,d=o.onPress;u?Ic(s.currentTarget)&&s.stopPropagation():(s.stopPropagation(),this._longPressDispatched||this._selectionTerminated?s.preventDefault():d!=null&&s.altKey===!1&&d(s))},onContextMenu:s=>{var o=this._config,u=o.disabled,d=o.onLongPress;u?Ic(s.currentTarget)&&s.stopPropagation():d!=null&&this._isPointerTouch&&!s.defaultPrevented&&(s.preventDefault(),s.stopPropagation())}}}_receiveSignal(e,t){var r=this._touchState,s=null;B_[r]!=null&&(s=B_[r][e]),!(this._touchState===Wn&&e===Dc)&&(s==null||s===ji?console.error("PressResponder: Invalid signal "+e+" for state "+r+" on responder"):r!==s&&(this._performTransitionSideEffects(r,s,e,t),this._touchState=s))}_performTransitionSideEffects(e,t,r,s){if(UR(r)&&(setTimeout(()=>{this._isPointerTouch=!1},0),this._touchActivatePosition=null,this._cancelLongPressDelayTimeout()),H_(e)&&r===k_){var o=this._config.onLongPress;o!=null&&s.nativeEvent.key==null&&(o(s),this._longPressDispatched=!0)}var u=z_(e),d=z_(t);if(!u&&d?this._activate(s):u&&!d&&this._deactivate(s),H_(e)&&r===Dc){var f=this._config,h=f.onLongPress,g=f.onPress;if(g!=null){var m=h!=null&&e===ho;m||!d&&!u&&(this._activate(s),this._deactivate(s))}}this._cancelPressDelayTimeout()}_activate(e){var t=this._config,r=t.onPressChange,s=t.onPressStart,o=V_(e);this._touchActivatePosition={pageX:o.pageX,pageY:o.pageY},s!=null&&s(e),r!=null&&r(!0)}_deactivate(e){var t=this._config,r=t.onPressChange,s=t.onPressEnd;function o(){s!=null&&s(e),r!=null&&r(!1)}var u=ph(this._config.delayPressEnd);u>0?this._pressOutDelayTimeout=setTimeout(()=>{o()},u):o()}_handleLongPress(e){(this._touchState===od||this._touchState===ho)&&this._receiveSignal(k_,e)}_cancelLongPressDelayTimeout(){this._longPressDelayTimeout!=null&&(clearTimeout(this._longPressDelayTimeout),this._longPressDelayTimeout=null)}_cancelPressDelayTimeout(){this._pressDelayTimeout!=null&&(clearTimeout(this._pressDelayTimeout),this._pressDelayTimeout=null)}_cancelPressOutDelayTimeout(){this._pressOutDelayTimeout!=null&&(clearTimeout(this._pressOutDelayTimeout),this._pressOutDelayTimeout=null)}}function ph(n,e,t){return e===void 0&&(e=0),t===void 0&&(t=0),Math.max(e,n??t)}function V_(n){var e=n.nativeEvent,t=e.changedTouches,r=e.touches;return r!=null&&r.length>0?r[0]:t!=null&&t.length>0?t[0]:n.nativeEvent}function zR(n,e){var t=at.useRef(null);t.current==null&&(t.current=new BR(e));var r=t.current;return at.useEffect(()=>{r.configure(e)},[e,r]),at.useEffect(()=>()=>{r.reset()},[r]),at.useDebugValue(e),r.getEventHandlers()}var HR=["children","delayLongPress","delayPressIn","delayPressOut","disabled","onBlur","onContextMenu","onFocus","onHoverIn","onHoverOut","onKeyDown","onLongPress","onPress","onPressMove","onPressIn","onPressOut","style","tabIndex","testOnly_hovered","testOnly_pressed"];function GR(n,e){var t=n.children,r=n.delayLongPress,s=n.delayPressIn,o=n.delayPressOut,u=n.disabled,d=n.onBlur,f=n.onContextMenu,h=n.onFocus,g=n.onHoverIn,m=n.onHoverOut,v=n.onKeyDown,x=n.onLongPress,E=n.onPress,T=n.onPressMove,y=n.onPressIn,S=n.onPressOut,b=n.style,N=n.tabIndex,L=n.testOnly_hovered,O=n.testOnly_pressed,D=gs(n,HR),w=mh(L===!0),P=w[0],V=w[1],I=mh(!1),z=I[0],W=I[1],Z=mh(O===!0),B=Z[0],le=Z[1],re=at.useRef(null),ne=wm(e,re),K=at.useMemo(()=>({delayLongPress:r,delayPressStart:s,delayPressEnd:o,disabled:u,onLongPress:x,onPress:E,onPressChange:le,onPressStart:y,onPressMove:T,onPressEnd:S}),[r,s,o,u,x,E,y,T,S,le]),q=zR(re,K),J=q.onContextMenu,k=q.onKeyDown;NR(re,{contain:!0,disabled:u,onHoverChange:V,onHoverStart:g,onHoverEnd:m});var ie={hovered:P,focused:z,pressed:B},Ce=at.useCallback(ye=>{ye.nativeEvent.target===re.current&&(W(!1),d!=null&&d(ye))},[re,W,d]),se=at.useCallback(ye=>{ye.nativeEvent.target===re.current&&(W(!0),h!=null&&h(ye))},[re,W,h]),xe=at.useCallback(ye=>{J!=null&&J(ye),f!=null&&f(ye)},[f,J]),Me=at.useCallback(ye=>{k!=null&&k(ye),v!=null&&v(ye)},[v,k]),Re;return N!==void 0?Re=N:Re=u?-1:0,at.createElement(Al,Hc({},D,q,{"aria-disabled":u,onBlur:Ce,onContextMenu:xe,onFocus:se,onKeyDown:Me,ref:ne,style:[u?W_.disabled:W_.active,typeof b=="function"?b(ie):b],tabIndex:Re}),typeof t=="function"?t(ie):t)}function mh(n){var e=at.useState(!1),t=e[0],r=e[1];return[t||n,r]}var W_=br.create({active:{cursor:"pointer",touchAction:"manipulation"},disabled:{pointerEvents:"box-none"}}),gx=at.memo(at.forwardRef(GR));gx.displayName="Pressable";var VR=["hrefAttrs","numberOfLines","onClick","onLayout","onPress","onMoveShouldSetResponder","onMoveShouldSetResponderCapture","onResponderEnd","onResponderGrant","onResponderMove","onResponderReject","onResponderRelease","onResponderStart","onResponderTerminate","onResponderTerminationRequest","onScrollShouldSetResponder","onScrollShouldSetResponderCapture","onSelectionChangeShouldSetResponder","onSelectionChangeShouldSetResponderCapture","onStartShouldSetResponder","onStartShouldSetResponderCapture","selectable"],WR=Object.assign({},OS,US,FS,kS,BS,zS,HS,GS,{href:!0,lang:!0,pointerEvents:!0}),$R=n=>VS(n,WR),vx=at.forwardRef((n,e)=>{var t=n.hrefAttrs,r=n.numberOfLines,s=n.onClick,o=n.onLayout,u=n.onPress,d=n.onMoveShouldSetResponder,f=n.onMoveShouldSetResponderCapture,h=n.onResponderEnd,g=n.onResponderGrant,m=n.onResponderMove,v=n.onResponderReject,x=n.onResponderRelease,E=n.onResponderStart,T=n.onResponderTerminate,y=n.onResponderTerminationRequest,S=n.onScrollShouldSetResponder,b=n.onScrollShouldSetResponderCapture,N=n.onSelectionChangeShouldSetResponder,L=n.onSelectionChangeShouldSetResponderCapture,O=n.onStartShouldSetResponder,D=n.onStartShouldSetResponderCapture,w=n.selectable,P=gs(n,VR),V=at.useContext(Wc),I=at.useRef(null),z=DS(),W=z.direction;WS(I,o),ex(I,{onMoveShouldSetResponder:d,onMoveShouldSetResponderCapture:f,onResponderEnd:h,onResponderGrant:g,onResponderMove:m,onResponderReject:v,onResponderRelease:x,onResponderStart:E,onResponderTerminate:T,onResponderTerminationRequest:y,onScrollShouldSetResponder:S,onScrollShouldSetResponderCapture:b,onSelectionChangeShouldSetResponder:N,onSelectionChangeShouldSetResponderCapture:L,onStartShouldSetResponder:O,onStartShouldSetResponderCapture:D});var Z=at.useCallback(xe=>{s!=null?s(xe):u!=null&&(xe.stopPropagation(),u(xe))},[s,u]),B=V?"span":"div",le=n.lang!=null?Em(n.lang):null,re=n.dir||le,ne=re||W,K=$R(P);if(K.dir=re,V||(K.dir=re??"auto"),(s||u)&&(K.onClick=Z),K.style=[r!=null&&r>1&&{WebkitLineClamp:r},V===!0?rs.textHasAncestor$raw:rs.text$raw,r===1&&rs.textOneLine,r!=null&&r>1&&rs.textMultiLine,n.style,w===!0&&rs.selectable,w===!1&&rs.notSelectable,u&&rs.pressable],n.href!=null&&(B="a",t!=null)){var q=t.download,J=t.rel,k=t.target;q!=null&&(K.download=q),J!=null&&(K.rel=J),typeof k=="string"&&(K.target=k.charAt(0)!=="_"?"_"+k:k)}var ie=$S(K),Ce=wm(I,ie,e);K.ref=Ce;var se=bm(B,K,{writingDirection:ne});return V?se:at.createElement(Wc.Provider,{value:!0},se)});vx.displayName="Text";var $_={backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",color:"black",display:"inline",font:"14px System",listStyle:"none",margin:0,padding:0,position:"relative",textAlign:"start",textDecoration:"none",whiteSpace:"pre-wrap",wordWrap:"break-word"},rs=br.create({text$raw:$_,textHasAncestor$raw:Ni(Ni({},$_),{},{color:"inherit",font:"inherit",textAlign:"inherit",whiteSpace:"inherit"}),textOneLine:{maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",wordWrap:"normal"},textMultiLine:{display:"-webkit-box",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",WebkitBoxOrient:"vertical"},notSelectable:{userSelect:"none"},selectable:{userSelect:"text"},pressable:{cursor:"pointer"}});const wp=new Map,XR=new Set(["span","i","b","strong","small","em","label"]);function qR(n=""){const e=document.createElement("span").style;e.cssText=n;const t={};for(let r=0;r<e.length;r++){const s=e[r];if(s.startsWith("--"))continue;const o=s.replace(/-([a-z])/g,(d,f)=>f.toUpperCase()),u=e.getPropertyValue(s).trim();t[o]=/^-?\d+(?:\.\d+)?px$/.test(u)?Number.parseFloat(u):u}return t}function _x(n,e){const t={key:e};for(const r of n.attributes)if(r.name==="class")t.className=r.value;else if(r.name==="style")t.style=qR(r.value);else{if(r.name==="draggable"||r.name==="type"||r.name==="tabindex")continue;t[r.name]=r.value}return t}function YR(n){var r;const e=((r=n.className)==null?void 0:r.split(/\s+/).filter(Boolean))||[],t=Object.entries(n).filter(([s])=>s.startsWith("data-"));delete n.className;for(const[s]of t)delete n[s];return(e.length||t.length)&&(n.ref=s=>{if(s){e.length&&s.classList.add(...e);for(const[o,u]of t)s.setAttribute(o,u)}}),n}function yx(n,e="child"){if(n.nodeType===Node.TEXT_NODE)return n.textContent?n.textContent:null;if(n.nodeType!==Node.ELEMENT_NODE)return null;const t=n.tagName.toLowerCase(),r=YR(_x(n,e));if(t==="img")return r.source={uri:n.getAttribute("src")||""},n.hasAttribute("alt")&&(r.accessibilityLabel=n.getAttribute("alt")),delete r.src,delete r.alt,fo.createElement(sd,r);const s=n.querySelector("div, img, svg, button"),o=XR.has(t)&&!s?vx:Al,u=Array.from(n.childNodes).map((d,f)=>yx(d,`${e}-${f}`));return fo.createElement(o,r,...u)}function KR(n){var h;const e=_x(n),t=((h=e.className)==null?void 0:h.split(/\s+/).filter(Boolean))||[],r=Object.entries(e).filter(([g])=>g.startsWith("data-")),s=n.getAttribute("style")||"",o=document.createElement("span");o.className="rn-control-root",o.style.cssText=s,n.replaceWith(o);const u=mb.createRoot(o);wp.set(o,u);const d=Array.from(n.childNodes).map((g,m)=>yx(g,`button-${m}`)),f=n.hasAttribute("disabled");delete e.style,delete e.disabled,delete e.className;for(const[g]of r)delete e[g];e.ref=g=>{if(g){t.length&&g.classList.add(...t);for(const[m,v]of r)g.setAttribute(m,v)}},e.role=e.role||"button",e.accessibilityRole=e.role,e.disabled=f,e.onPress=()=>{var g;return(g=o.firstElementChild)==null?void 0:g.dispatchEvent(new CustomEvent("rnpress",{bubbles:!0}))},gb.flushSync(()=>u.render(fo.createElement(gx,e,...d)))}function ZR(n){for(const[e,t]of wp)(n===e||n.contains(e))&&(t.unmount(),wp.delete(e))}function Sx(n){n.querySelectorAll("button").forEach(KR)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rm="187",jR=0,X_=1,JR=2,Nc=1,xx=2,ml=3,ds=0,ii=1,_r=2,lo=0,Ml=1,q_=2,Y_=3,K_=4,QR=5,ao=100,eA=101,tA=102,nA=103,iA=104,rA=200,aA=201,sA=202,oA=203,Mx=204,Ex=205,lA=206,uA=207,cA=208,dA=209,fA=210,hA=211,pA=212,mA=213,gA=214,Tp=0,Rp=1,Ap=2,Cl=3,Cp=4,Pp=5,Lp=6,Dp=7,bx=0,vA=1,_A=2,Xr=0,wx=1,Tx=2,Rx=3,Am=4,Ax=5,Cx=6,Px=7,Lx=300,po=301,Pl=302,gh=303,vh=304,qc=1e3,Wr=1001,Ip=1002,Cn=1003,yA=1004,sc=1005,ti=1006,_h=1007,La=1008,gi=1009,Dx=1010,Ix=1011,Ll=1012,Cm=1013,Tr=1014,xr=1015,Rr=1016,Pm=1017,Lm=1018,mo=1020,Nx=35902,Ox=35899,Ux=1021,Fx=1022,Mr=1023,Oa=1026,Da=1027,kx=1028,Dm=1029,fs=1030,Im=1031,Nm=1033,Oc=33776,Uc=33777,Fc=33778,kc=33779,Np=35840,Op=35841,Up=35842,Fp=35843,kp=36196,Bp=37492,zp=37496,Hp=37488,Gp=37489,Yc=37490,Vp=37491,Wp=37808,$p=37809,Xp=37810,qp=37811,Yp=37812,Kp=37813,Zp=37814,jp=37815,Jp=37816,Qp=37817,em=37818,tm=37819,nm=37820,im=37821,rm=36492,am=36494,sm=36495,om=36283,lm=36284,Kc=36285,um=36286,SA=3200,cm=0,xA=1,Pa="",ei="srgb",Zc="srgb-linear",jc="linear",Ut="srgb",yh=7680,MA=519,EA=512,bA=513,wA=514,Bx=515,TA=516,RA=517,zx=518,Hx=519,AA=35044,Z_="300 es",er=2e3,Dl=2001;function CA(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Jc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function PA(){const n=Jc("canvas");return n.style.display="block",n}const j_={};function J_(...n){const e="THREE."+n.shift();console.log(e,...n)}function Gx(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ct(...n){n=Gx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function It(...n){n=Gx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Bc(...n){const e=n.join(" ");e in j_||(j_[e]=!0,ct(...n))}function LA(n,e,t){return new Promise(function(r,s){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:r()}}setTimeout(o,t)})}const DA={[Tp]:Tp,[Ap]:Lp,[Cp]:Cp,[Cl]:Pp,[Rp]:Rp,[Lp]:Ap,[Dp]:Dp,[Pp]:Cl};class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const s=r[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const s=r.slice(0);for(let o=0,u=s.length;o<u;o++)s[o].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sh=Math.PI/180,dm=180/Math.PI;function Ul(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function IA(n,e){return(n%e+e)%e}function xh(n,e,t){return(1-t)*n+t*e}function NA(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Om(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function OA(n,e){if(e.constructor===Float32Array)return n;const t=Om(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function UA(n,e){if(e.constructor===Float32Array)return n;const t=Om(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const dg=class dg{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,s=e.elements;return this.x=s[0]*t+s[3]*r+s[6],this.y=s[1]*t+s[4]*r+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),s=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*r-u*s+e.x,this.y=o*s+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dg.prototype.isVector2=!0;let Et=dg;class qr{constructor(e=0,t=0,r=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=s}static slerpFlat(e,t,r,s,o,u,d){let f=r[s+0],h=r[s+1],g=r[s+2],m=r[s+3],v=o[u+0],x=o[u+1],E=o[u+2],T=o[u+3];if(m!==T||f!==v||h!==x||g!==E){let y=f*v+h*x+g*E+m*T;y<0&&(v=-v,x=-x,E=-E,T=-T,y=-y);let S=1-d;if(y<.9995){const b=Math.acos(y),N=Math.sin(b);S=Math.sin(S*b)/N,d=Math.sin(d*b)/N,f=f*S+v*d,h=h*S+x*d,g=g*S+E*d,m=m*S+T*d}else{f=f*S+v*d,h=h*S+x*d,g=g*S+E*d,m=m*S+T*d;const b=1/Math.sqrt(f*f+h*h+g*g+m*m);f*=b,h*=b,g*=b,m*=b}}e[t]=f,e[t+1]=h,e[t+2]=g,e[t+3]=m}static multiplyQuaternionsFlat(e,t,r,s,o,u){const d=r[s],f=r[s+1],h=r[s+2],g=r[s+3],m=o[u],v=o[u+1],x=o[u+2],E=o[u+3];return e[t]=d*E+g*m+f*x-h*v,e[t+1]=f*E+g*v+h*m-d*x,e[t+2]=h*E+g*x+d*v-f*m,e[t+3]=g*E-d*m-f*v-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,s){return this._x=e,this._y=t,this._z=r,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,s=e._y,o=e._z,u=e._order,d=Math.cos,f=Math.sin,h=d(r/2),g=d(s/2),m=d(o/2),v=f(r/2),x=f(s/2),E=f(o/2);switch(u){case"XYZ":this._x=v*g*m+h*x*E,this._y=h*x*m-v*g*E,this._z=h*g*E+v*x*m,this._w=h*g*m-v*x*E;break;case"YXZ":this._x=v*g*m+h*x*E,this._y=h*x*m-v*g*E,this._z=h*g*E-v*x*m,this._w=h*g*m+v*x*E;break;case"ZXY":this._x=v*g*m-h*x*E,this._y=h*x*m+v*g*E,this._z=h*g*E+v*x*m,this._w=h*g*m-v*x*E;break;case"ZYX":this._x=v*g*m-h*x*E,this._y=h*x*m+v*g*E,this._z=h*g*E-v*x*m,this._w=h*g*m+v*x*E;break;case"YZX":this._x=v*g*m+h*x*E,this._y=h*x*m+v*g*E,this._z=h*g*E-v*x*m,this._w=h*g*m-v*x*E;break;case"XZY":this._x=v*g*m-h*x*E,this._y=h*x*m-v*g*E,this._z=h*g*E+v*x*m,this._w=h*g*m+v*x*E;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,s=Math.sin(r);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],s=t[4],o=t[8],u=t[1],d=t[5],f=t[9],h=t[2],g=t[6],m=t[10],v=r+d+m;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-f)*x,this._y=(o-h)*x,this._z=(u-s)*x}else if(r>d&&r>m){const x=2*Math.sqrt(1+r-d-m);this._w=(g-f)/x,this._x=.25*x,this._y=(s+u)/x,this._z=(o+h)/x}else if(d>m){const x=2*Math.sqrt(1+d-r-m);this._w=(o-h)/x,this._x=(s+u)/x,this._y=.25*x,this._z=(f+g)/x}else{const x=2*Math.sqrt(1+m-r-d);this._w=(u-s)/x,this._x=(o+h)/x,this._y=(f+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const s=Math.min(1,t/r);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,s=e._y,o=e._z,u=e._w,d=t._x,f=t._y,h=t._z,g=t._w;return this._x=r*g+u*d+s*h-o*f,this._y=s*g+u*f+o*d-r*h,this._z=o*g+u*h+r*f-s*d,this._w=u*g-r*d-s*f-o*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,s=e._y,o=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,s=-s,o=-o,u=-u,d=-d);let f=1-t;if(d<.9995){const h=Math.acos(d),g=Math.sin(h);f=Math.sin(f*h)/g,t=Math.sin(t*h)/g,this._x=this._x*f+r*t,this._y=this._y*f+s*t,this._z=this._z*f+o*t,this._w=this._w*f+u*t,this._onChangeCallback()}else this._x=this._x*f+r*t,this._y=this._y*f+s*t,this._z=this._z*f+o*t,this._w=this._w*f+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),s=Math.sqrt(1-r),o=Math.sqrt(r);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const fg=class fg{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Q_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Q_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6]*s,this.y=o[1]*t+o[4]*r+o[7]*s,this.z=o[2]*t+o[5]*r+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,s=this.z,o=e.elements,u=1/(o[3]*t+o[7]*r+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*r+o[8]*s+o[12])*u,this.y=(o[1]*t+o[5]*r+o[9]*s+o[13])*u,this.z=(o[2]*t+o[6]*r+o[10]*s+o[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,s=this.z,o=e.x,u=e.y,d=e.z,f=e.w,h=2*(u*s-d*r),g=2*(d*t-o*s),m=2*(o*r-u*t);return this.x=t+f*h+u*m-d*g,this.y=r+f*g+d*h-o*m,this.z=s+f*m+o*g-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*s,this.y=o[1]*t+o[5]*r+o[9]*s,this.z=o[2]*t+o[6]*r+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,s=e.y,o=e.z,u=t.x,d=t.y,f=t.z;return this.x=s*f-o*d,this.y=o*u-r*f,this.z=r*d-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Mh.copy(this).projectOnVector(e),this.sub(Mh)}reflect(e){return this.sub(Mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,s=this.z-e.z;return t*t+r*r+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const s=Math.sin(t)*e;return this.x=s*Math.sin(r),this.y=Math.cos(t)*e,this.z=s*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fg.prototype.isVector3=!0;let me=fg;const Mh=new me,Q_=new qr,hg=class hg{constructor(e,t,r,s,o,u,d,f,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,s,o,u,d,f,h)}set(e,t,r,s,o,u,d,f,h){const g=this.elements;return g[0]=e,g[1]=s,g[2]=d,g[3]=t,g[4]=o,g[5]=f,g[6]=r,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,s=t.elements,o=this.elements,u=r[0],d=r[3],f=r[6],h=r[1],g=r[4],m=r[7],v=r[2],x=r[5],E=r[8],T=s[0],y=s[3],S=s[6],b=s[1],N=s[4],L=s[7],O=s[2],D=s[5],w=s[8];return o[0]=u*T+d*b+f*O,o[3]=u*y+d*N+f*D,o[6]=u*S+d*L+f*w,o[1]=h*T+g*b+m*O,o[4]=h*y+g*N+m*D,o[7]=h*S+g*L+m*w,o[2]=v*T+x*b+E*O,o[5]=v*y+x*N+E*D,o[8]=v*S+x*L+E*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],s=e[2],o=e[3],u=e[4],d=e[5],f=e[6],h=e[7],g=e[8];return t*u*g-t*d*h-r*o*g+r*d*f+s*o*h-s*u*f}invert(){const e=this.elements,t=e[0],r=e[1],s=e[2],o=e[3],u=e[4],d=e[5],f=e[6],h=e[7],g=e[8],m=g*u-d*h,v=d*f-g*o,x=h*o-u*f,E=t*m+r*v+s*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=m*T,e[1]=(s*h-g*r)*T,e[2]=(d*r-s*u)*T,e[3]=v*T,e[4]=(g*t-s*f)*T,e[5]=(s*o-d*t)*T,e[6]=x*T,e[7]=(r*f-h*t)*T,e[8]=(u*t-r*o)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,s,o,u,d){const f=Math.cos(o),h=Math.sin(o);return this.set(r*f,r*h,-r*(f*u+h*d)+u+e,-s*h,s*f,-s*(-h*u+f*d)+d+t,0,0,1),this}scale(e,t){return Bc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Eh.makeScale(e,t)),this}rotate(e){return Bc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Eh.makeRotation(-e)),this}translate(e,t){return Bc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Eh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let s=0;s<9;s++)if(t[s]!==r[s])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};hg.prototype.isMatrix3=!0;let ft=hg;const Eh=new ft,ey=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ty=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function FA(){const n={enabled:!0,workingColorSpace:Zc,spaces:{},convert:function(s,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===Ut&&(s.r=Yr(s.r),s.g=Yr(s.g),s.b=Yr(s.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ut&&(s.r=uo(s.r),s.g=uo(s.g),s.b=uo(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pa?jc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,u){return s.copy(this.spaces[u].fromXYZ).multiply(this.spaces[o].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Zc]:{primaries:e,whitePoint:r,transfer:jc,toXYZ:ey,fromXYZ:ty,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:r,transfer:Ut,toXYZ:ey,fromXYZ:ty,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),n}const Tt=FA();function Yr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function uo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ws;class kA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ws===void 0&&(Ws=Jc("canvas")),Ws.width=e.width,Ws.height=e.height;const s=Ws.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),r=Ws}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const s=r.getImageData(0,0,e.width,e.height),o=s.data;for(let u=0;u<o.length;u++)o[u]=Yr(o[u]/255)*255;return r.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Yr(t[r]/255)*255):t[r]=Yr(t[r]);return{data:t,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let BA=0;class Um{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:BA++}),this.uuid=Ul(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let u=0,d=s.length;u<d;u++)s[u].isDataTexture?o.push(bh(s[u].image)):o.push(bh(s[u]))}else o=bh(s);r.url=o}return t||(e.images[this.uuid]=r),r}}function bh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?kA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let zA=0;const wh=new me;class Bn extends vs{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,r=Wr,s=Wr,o=ti,u=La,d=Mr,f=gi,h=Bn.DEFAULT_ANISOTROPY,g=Pa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zA++}),this.uuid=Ul(),this.name="",this.source=new Um(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=u,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=f,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(wh).x}get height(){return this.source.getSize(wh).y}get depth(){return this.source.getSize(wh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ct(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qc:e.x=e.x-Math.floor(e.x);break;case Wr:e.x=e.x<0?0:1;break;case Ip:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qc:e.y=e.y-Math.floor(e.y);break;case Wr:e.y=e.y<0?0:1;break;case Ip:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Lx;Bn.DEFAULT_ANISOTROPY=1;const pg=class pg{constructor(e=0,t=0,r=0,s=1){this.x=e,this.y=t,this.z=r,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,s){return this.x=e,this.y=t,this.z=r,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,s=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*s+u[12]*o,this.y=u[1]*t+u[5]*r+u[9]*s+u[13]*o,this.z=u[2]*t+u[6]*r+u[10]*s+u[14]*o,this.w=u[3]*t+u[7]*r+u[11]*s+u[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,s,o;const f=e.elements,h=f[0],g=f[4],m=f[8],v=f[1],x=f[5],E=f[9],T=f[2],y=f[6],S=f[10];if(Math.abs(g-v)<.01&&Math.abs(m-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(m+T)<.1&&Math.abs(E+y)<.1&&Math.abs(h+x+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(h+1)/2,L=(x+1)/2,O=(S+1)/2,D=(g+v)/4,w=(m+T)/4,P=(E+y)/4;return N>L&&N>O?N<.01?(r=0,s=.707106781,o=.707106781):(r=Math.sqrt(N),s=D/r,o=w/r):L>O?L<.01?(r=.707106781,s=0,o=.707106781):(s=Math.sqrt(L),r=D/s,o=P/s):O<.01?(r=.707106781,s=.707106781,o=0):(o=Math.sqrt(O),r=w/o,s=P/o),this.set(r,s,o,t),this}let b=Math.sqrt((y-E)*(y-E)+(m-T)*(m-T)+(v-g)*(v-g));return Math.abs(b)<.001&&(b=1),this.x=(y-E)/b,this.y=(m-T)/b,this.z=(v-g)/b,this.w=Math.acos((h+x+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pg.prototype.isVector4=!0;let rn=pg;class HA extends vs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];const s=r.count;for(let o=0;o<s;o++)this.textures[o]=new Bn({width:e,height:t,depth:r.depth}),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ti,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=r,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Um(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends HA{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Vx extends Bn{constructor(e=null,t=1,r=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class GA extends Bn{constructor(e=null,t=1,r=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const rd=class rd{constructor(e,t,r,s,o,u,d,f,h,g,m,v,x,E,T,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,s,o,u,d,f,h,g,m,v,x,E,T,y)}set(e,t,r,s,o,u,d,f,h,g,m,v,x,E,T,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=s,S[1]=o,S[5]=u,S[9]=d,S[13]=f,S[2]=h,S[6]=g,S[10]=m,S[14]=v,S[3]=x,S[7]=E,S[11]=T,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rd().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,s=1/$s.setFromMatrixColumn(e,0).length(),o=1/$s.setFromMatrixColumn(e,1).length(),u=1/$s.setFromMatrixColumn(e,2).length();return t[0]=r[0]*s,t[1]=r[1]*s,t[2]=r[2]*s,t[3]=0,t[4]=r[4]*o,t[5]=r[5]*o,t[6]=r[6]*o,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,s=e.y,o=e.z,u=Math.cos(r),d=Math.sin(r),f=Math.cos(s),h=Math.sin(s),g=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const v=u*g,x=u*m,E=d*g,T=d*m;t[0]=f*g,t[4]=-f*m,t[8]=h,t[1]=x+E*h,t[5]=v-T*h,t[9]=-d*f,t[2]=T-v*h,t[6]=E+x*h,t[10]=u*f}else if(e.order==="YXZ"){const v=f*g,x=f*m,E=h*g,T=h*m;t[0]=v+T*d,t[4]=E*d-x,t[8]=u*h,t[1]=u*m,t[5]=u*g,t[9]=-d,t[2]=x*d-E,t[6]=T+v*d,t[10]=u*f}else if(e.order==="ZXY"){const v=f*g,x=f*m,E=h*g,T=h*m;t[0]=v-T*d,t[4]=-u*m,t[8]=E+x*d,t[1]=x+E*d,t[5]=u*g,t[9]=T-v*d,t[2]=-u*h,t[6]=d,t[10]=u*f}else if(e.order==="ZYX"){const v=u*g,x=u*m,E=d*g,T=d*m;t[0]=f*g,t[4]=E*h-x,t[8]=v*h+T,t[1]=f*m,t[5]=T*h+v,t[9]=x*h-E,t[2]=-h,t[6]=d*f,t[10]=u*f}else if(e.order==="YZX"){const v=u*f,x=u*h,E=d*f,T=d*h;t[0]=f*g,t[4]=T-v*m,t[8]=E*m+x,t[1]=m,t[5]=u*g,t[9]=-d*g,t[2]=-h*g,t[6]=x*m+E,t[10]=v-T*m}else if(e.order==="XZY"){const v=u*f,x=u*h,E=d*f,T=d*h;t[0]=f*g,t[4]=-m,t[8]=h*g,t[1]=v*m+T,t[5]=u*g,t[9]=x*m-E,t[2]=E*m-x,t[6]=d*g,t[10]=T*m+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VA,e,WA)}lookAt(e,t,r){const s=this.elements;return hi.subVectors(e,t),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),xa.crossVectors(r,hi),xa.lengthSq()===0&&(Math.abs(r.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),xa.crossVectors(r,hi)),xa.normalize(),oc.crossVectors(hi,xa),s[0]=xa.x,s[4]=oc.x,s[8]=hi.x,s[1]=xa.y,s[5]=oc.y,s[9]=hi.y,s[2]=xa.z,s[6]=oc.z,s[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,s=t.elements,o=this.elements,u=r[0],d=r[4],f=r[8],h=r[12],g=r[1],m=r[5],v=r[9],x=r[13],E=r[2],T=r[6],y=r[10],S=r[14],b=r[3],N=r[7],L=r[11],O=r[15],D=s[0],w=s[4],P=s[8],V=s[12],I=s[1],z=s[5],W=s[9],Z=s[13],B=s[2],le=s[6],re=s[10],ne=s[14],K=s[3],q=s[7],J=s[11],k=s[15];return o[0]=u*D+d*I+f*B+h*K,o[4]=u*w+d*z+f*le+h*q,o[8]=u*P+d*W+f*re+h*J,o[12]=u*V+d*Z+f*ne+h*k,o[1]=g*D+m*I+v*B+x*K,o[5]=g*w+m*z+v*le+x*q,o[9]=g*P+m*W+v*re+x*J,o[13]=g*V+m*Z+v*ne+x*k,o[2]=E*D+T*I+y*B+S*K,o[6]=E*w+T*z+y*le+S*q,o[10]=E*P+T*W+y*re+S*J,o[14]=E*V+T*Z+y*ne+S*k,o[3]=b*D+N*I+L*B+O*K,o[7]=b*w+N*z+L*le+O*q,o[11]=b*P+N*W+L*re+O*J,o[15]=b*V+N*Z+L*ne+O*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],s=e[8],o=e[12],u=e[1],d=e[5],f=e[9],h=e[13],g=e[2],m=e[6],v=e[10],x=e[14],E=e[3],T=e[7],y=e[11],S=e[15],b=f*x-h*v,N=d*x-h*m,L=d*v-f*m,O=u*x-h*g,D=u*v-f*g,w=u*m-d*g;return t*(T*b-y*N+S*L)-r*(E*b-y*O+S*D)+s*(E*N-T*O+S*w)-o*(E*L-T*D+y*w)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],s=e[8],o=e[1],u=e[5],d=e[9],f=e[2],h=e[6],g=e[10];return t*(u*g-d*h)-r*(o*g-d*f)+s*(o*h-u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],s=e[2],o=e[3],u=e[4],d=e[5],f=e[6],h=e[7],g=e[8],m=e[9],v=e[10],x=e[11],E=e[12],T=e[13],y=e[14],S=e[15],b=t*d-r*u,N=t*f-s*u,L=t*h-o*u,O=r*f-s*d,D=r*h-o*d,w=s*h-o*f,P=g*T-m*E,V=g*y-v*E,I=g*S-x*E,z=m*y-v*T,W=m*S-x*T,Z=v*S-x*y,B=b*Z-N*W+L*z+O*I-D*V+w*P;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const le=1/B;return e[0]=(d*Z-f*W+h*z)*le,e[1]=(s*W-r*Z-o*z)*le,e[2]=(T*w-y*D+S*O)*le,e[3]=(v*D-m*w-x*O)*le,e[4]=(f*I-u*Z-h*V)*le,e[5]=(t*Z-s*I+o*V)*le,e[6]=(y*L-E*w-S*N)*le,e[7]=(g*w-v*L+x*N)*le,e[8]=(u*W-d*I+h*P)*le,e[9]=(r*I-t*W-o*P)*le,e[10]=(E*D-T*L+S*b)*le,e[11]=(m*L-g*D-x*b)*le,e[12]=(d*V-u*z-f*P)*le,e[13]=(t*z-r*V+s*P)*le,e[14]=(T*N-E*O-y*b)*le,e[15]=(g*O-m*N+v*b)*le,this}scale(e){const t=this.elements,r=e.x,s=e.y,o=e.z;return t[0]*=r,t[4]*=s,t[8]*=o,t[1]*=r,t[5]*=s,t[9]*=o,t[2]*=r,t[6]*=s,t[10]*=o,t[3]*=r,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,s))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),s=Math.sin(t),o=1-r,u=e.x,d=e.y,f=e.z,h=o*u,g=o*d;return this.set(h*u+r,h*d-s*f,h*f+s*d,0,h*d+s*f,g*d+r,g*f-s*u,0,h*f-s*d,g*f+s*u,o*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,s,o,u){return this.set(1,r,o,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,r){const s=this.elements,o=t._x,u=t._y,d=t._z,f=t._w,h=o+o,g=u+u,m=d+d,v=o*h,x=o*g,E=o*m,T=u*g,y=u*m,S=d*m,b=f*h,N=f*g,L=f*m,O=r.x,D=r.y,w=r.z;return s[0]=(1-(T+S))*O,s[1]=(x+L)*O,s[2]=(E-N)*O,s[3]=0,s[4]=(x-L)*D,s[5]=(1-(v+S))*D,s[6]=(y+b)*D,s[7]=0,s[8]=(E+N)*w,s[9]=(y-b)*w,s[10]=(1-(v+T))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,r){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const o=this.determinantAffine();if(o===0)return r.set(1,1,1),t.identity(),this;let u=$s.set(s[0],s[1],s[2]).length();const d=$s.set(s[4],s[5],s[6]).length(),f=$s.set(s[8],s[9],s[10]).length();o<0&&(u=-u),Yi.copy(this);const h=1/u,g=1/d,m=1/f;return Yi.elements[0]*=h,Yi.elements[1]*=h,Yi.elements[2]*=h,Yi.elements[4]*=g,Yi.elements[5]*=g,Yi.elements[6]*=g,Yi.elements[8]*=m,Yi.elements[9]*=m,Yi.elements[10]*=m,t.setFromRotationMatrix(Yi),r.x=u,r.y=d,r.z=f,this}makePerspective(e,t,r,s,o,u,d=er,f=!1){const h=this.elements,g=2*o/(t-e),m=2*o/(r-s),v=(t+e)/(t-e),x=(r+s)/(r-s);let E,T;if(f)E=o/(u-o),T=u*o/(u-o);else if(d===er)E=-(u+o)/(u-o),T=-2*u*o/(u-o);else if(d===Dl)E=-u/(u-o),T=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=m,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,s,o,u,d=er,f=!1){const h=this.elements,g=2/(t-e),m=2/(r-s),v=-(t+e)/(t-e),x=-(r+s)/(r-s);let E,T;if(f)E=1/(u-o),T=u/(u-o);else if(d===er)E=-2/(u-o),T=-(u+o)/(u-o);else if(d===Dl)E=-1/(u-o),T=-o/(u-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=m,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=E,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let s=0;s<16;s++)if(t[s]!==r[s])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};rd.prototype.isMatrix4=!0;let en=rd;const $s=new me,Yi=new en,VA=new me(0,0,0),WA=new me(1,1,1),xa=new me,oc=new me,hi=new me,ny=new en,iy=new qr;class Kr{constructor(e=0,t=0,r=0,s=Kr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,s=this._order){return this._x=e,this._y=t,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const s=e.elements,o=s[0],u=s[4],d=s[8],f=s[1],h=s[5],g=s[9],m=s[2],v=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-Rt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(d,o)):(this._x=Math.atan2(-g,x),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return ny.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ny,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return iy.setFromEuler(this),this.setFromQuaternion(iy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kr.DEFAULT_ORDER="XYZ";class Fm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $A=0;const ry=new me,Xs=new qr,Fr=new en,lc=new me,rl=new me,XA=new me,qA=new qr,ay=new me(1,0,0),sy=new me(0,1,0),oy=new me(0,0,1),ly={type:"added"},YA={type:"removed"},qs={type:"childadded",child:null},Th={type:"childremoved",child:null};class Pn extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$A++}),this.uuid=Ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new me,t=new Kr,r=new qr,s=new me(1,1,1);function o(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(o),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new en},normalMatrix:{value:new ft}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(ay,e)}rotateY(e){return this.rotateOnAxis(sy,e)}rotateZ(e){return this.rotateOnAxis(oy,e)}translateOnAxis(e,t){return ry.copy(e).applyQuaternion(this.quaternion),this.position.add(ry.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ay,e)}translateY(e){return this.translateOnAxis(sy,e)}translateZ(e){return this.translateOnAxis(oy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?lc.copy(e):lc.set(e,t,r);const s=this.parent;this.updateWorldMatrix(!0,!1),rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fr.lookAt(rl,lc,this.up):Fr.lookAt(lc,rl,this.up),this.quaternion.setFromRotationMatrix(Fr),s&&(Fr.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(Fr),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(It("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ly),qs.child=e,this.dispatchEvent(qs),qs.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(YA),Th.child=e,this.dispatchEvent(Th),Th.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ly),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,s=this.children.length;r<s;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const s=this.children;for(let o=0,u=s.length;o<u;o++)s[o].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,e,XA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,qA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,s=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*r-o[8]*s,o[13]+=r-o[1]*t-o[5]*r-o[9]*s,o[14]+=s-o[2]*t-o[6]*r-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const o=this.children;for(let u=0,d=o.length;u<d;u++)o[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(d=>({...d})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let h=0,g=f.length;h<g;h++){const m=f[h];o(e.shapes,m)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,h=this.material.length;f<h;f++)d.push(o(e.materials,this.material[f]));s.material=d}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let d=0;d<this.children.length;d++)s.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];s.animations.push(o(e.animations,f))}}if(t){const d=u(e.geometries),f=u(e.materials),h=u(e.textures),g=u(e.images),m=u(e.shapes),v=u(e.skeletons),x=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),f.length>0&&(r.materials=f),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),m.length>0&&(r.shapes=m),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),E.length>0&&(r.nodes=E)}return r.object=s,r;function u(d){const f=[];for(const h in d){const g=d[h];delete g.metadata,f.push(g)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const s=e.children[r];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Pn.DEFAULT_UP=new me(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class oo extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KA={type:"move"};class Rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new me,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new me),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new me,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new me,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let s=null,o=null,u=null;const d=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,r),S=this._getHandJoint(h,T);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const g=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],v=g.position.distanceTo(m.position),x=.02,E=.005;h.inputState.pinching&&v>x+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=x-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,r),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(s=t.getPose(e.targetRaySpace,r),s===null&&o!==null&&(s=o),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(KA)))}return d!==null&&(d.visible=s!==null),f!==null&&(f.visible=o!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new oo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Wx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ma={h:0,s:0,l:0},uc={h:0,s:0,l:0};function Ah(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Mt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,s=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Tt.colorSpaceToWorking(this,s),this}setHSL(e,t,r,s=Tt.workingColorSpace){if(e=IA(e,1),t=Rt(t,0,1),r=Rt(r,0,1),t===0)this.r=this.g=this.b=r;else{const o=r<=.5?r*(1+t):r+t-r*t,u=2*r-o;this.r=Ah(u,o,e+1/3),this.g=Ah(u,o,e),this.b=Ah(u,o,e-1/3)}return Tt.colorSpaceToWorking(this,s),this}setStyle(e,t=ei){function r(o){o!==void 0&&parseFloat(o)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=s[1],d=s[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(o[4]),this.setRGB(Math.min(100,parseFloat(o[1]))/100,Math.min(100,parseFloat(o[2]))/100,Math.min(100,parseFloat(o[3]))/100,t);break;case"hsl":case"hsla":if(o=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:ct("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ei){const r=Wx[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}copyLinearToSRGB(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Tt.workingToColorSpace(Fn.copy(this),e),Math.round(Rt(Fn.r*255,0,255))*65536+Math.round(Rt(Fn.g*255,0,255))*256+Math.round(Rt(Fn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(Fn.copy(this),t);const r=Fn.r,s=Fn.g,o=Fn.b,u=Math.max(r,s,o),d=Math.min(r,s,o);let f,h;const g=(d+u)/2;if(d===u)f=0,h=0;else{const m=u-d;switch(h=g<=.5?m/(u+d):m/(2-u-d),u){case r:f=(s-o)/m+(s<o?6:0);break;case s:f=(o-r)/m+2;break;case o:f=(r-s)/m+4;break}f/=6}return e.h=f,e.s=h,e.l=g,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=ei){Tt.workingToColorSpace(Fn.copy(this),e);const t=Fn.r,r=Fn.g,s=Fn.b;return e!==ei?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(s*255)})`}offsetHSL(e,t,r){return this.getHSL(Ma),this.setHSL(Ma.h+e,Ma.s+t,Ma.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ma),e.getHSL(uc);const r=xh(Ma.h,uc.h,t),s=xh(Ma.s,uc.s,t),o=xh(Ma.l,uc.l,t);return this.setHSL(r,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*r+o[6]*s,this.g=o[1]*t+o[4]*r+o[7]*s,this.b=o[2]*t+o[5]*r+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Mt;Mt.NAMES=Wx;class km{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new Mt(e),this.near=t,this.far=r}clone(){return new km(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ZA extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kr,this.environmentIntensity=1,this.environmentRotation=new Kr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ki=new me,kr=new me,Ch=new me,Br=new me,Ys=new me,Ks=new me,uy=new me,Ph=new me,Lh=new me,Dh=new me,Ih=new rn,Nh=new rn,Oh=new rn;class Qi{constructor(e=new me,t=new me,r=new me){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,s){s.subVectors(r,t),Ki.subVectors(e,t),s.cross(Ki);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,r,s,o){Ki.subVectors(s,t),kr.subVectors(r,t),Ch.subVectors(e,t);const u=Ki.dot(Ki),d=Ki.dot(kr),f=Ki.dot(Ch),h=kr.dot(kr),g=kr.dot(Ch),m=u*h-d*d;if(m===0)return o.set(0,0,0),null;const v=1/m,x=(h*f-d*g)*v,E=(u*g-d*f)*v;return o.set(1-x-E,E,x)}static containsPoint(e,t,r,s){return this.getBarycoord(e,t,r,s,Br)===null?!1:Br.x>=0&&Br.y>=0&&Br.x+Br.y<=1}static getInterpolation(e,t,r,s,o,u,d,f){return this.getBarycoord(e,t,r,s,Br)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,Br.x),f.addScaledVector(u,Br.y),f.addScaledVector(d,Br.z),f)}static getInterpolatedAttribute(e,t,r,s,o,u){return Ih.setScalar(0),Nh.setScalar(0),Oh.setScalar(0),Ih.fromBufferAttribute(e,t),Nh.fromBufferAttribute(e,r),Oh.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(Ih,o.x),u.addScaledVector(Nh,o.y),u.addScaledVector(Oh,o.z),u}static isFrontFacing(e,t,r,s){return Ki.subVectors(r,t),kr.subVectors(e,t),Ki.cross(kr).dot(s)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,s){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,r,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ki.subVectors(this.c,this.b),kr.subVectors(this.a,this.b),Ki.cross(kr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,s,o){return Qi.getInterpolation(e,this.a,this.b,this.c,t,r,s,o)}containsPoint(e){return Qi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,s=this.b,o=this.c;let u,d;Ys.subVectors(s,r),Ks.subVectors(o,r),Ph.subVectors(e,r);const f=Ys.dot(Ph),h=Ks.dot(Ph);if(f<=0&&h<=0)return t.copy(r);Lh.subVectors(e,s);const g=Ys.dot(Lh),m=Ks.dot(Lh);if(g>=0&&m<=g)return t.copy(s);const v=f*m-g*h;if(v<=0&&f>=0&&g<=0&&f-g>0)return u=f/(f-g),t.copy(r).addScaledVector(Ys,u);Dh.subVectors(e,o);const x=Ys.dot(Dh),E=Ks.dot(Dh);if(E>=0&&x<=E)return t.copy(o);const T=x*h-f*E;if(T<=0&&h>=0&&E<=0)return d=h/(h-E),t.copy(r).addScaledVector(Ks,d);const y=g*E-x*m;if(y<=0&&m-g>=0&&x-E>=0)return uy.subVectors(o,s),d=(m-g)/(m-g+(x-E)),t.copy(s).addScaledVector(uy,d);const S=1/(y+T+v);return u=T*S,d=v*S,t.copy(r).addScaledVector(Ys,u).addScaledVector(Ks,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Fl{constructor(e=new me(1/0,1/0,1/0),t=new me(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const o=r.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let u=0,d=o.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Zi):Zi.fromBufferAttribute(o,u),Zi.applyMatrix4(e.matrixWorld),this.expandByPoint(Zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),cc.copy(r.boundingBox)),cc.applyMatrix4(e.matrixWorld),this.union(cc)}const s=e.children;for(let o=0,u=s.length;o<u;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(al),dc.subVectors(this.max,al),Zs.subVectors(e.a,al),js.subVectors(e.b,al),Js.subVectors(e.c,al),Ea.subVectors(js,Zs),ba.subVectors(Js,js),as.subVectors(Zs,Js);let t=[0,-Ea.z,Ea.y,0,-ba.z,ba.y,0,-as.z,as.y,Ea.z,0,-Ea.x,ba.z,0,-ba.x,as.z,0,-as.x,-Ea.y,Ea.x,0,-ba.y,ba.x,0,-as.y,as.x,0];return!Uh(t,Zs,js,Js,dc)||(t=[1,0,0,0,1,0,0,0,1],!Uh(t,Zs,js,Js,dc))?!1:(fc.crossVectors(Ea,ba),t=[fc.x,fc.y,fc.z],Uh(t,Zs,js,Js,dc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zr=[new me,new me,new me,new me,new me,new me,new me,new me],Zi=new me,cc=new Fl,Zs=new me,js=new me,Js=new me,Ea=new me,ba=new me,as=new me,al=new me,dc=new me,fc=new me,ss=new me;function Uh(n,e,t,r,s){for(let o=0,u=n.length-3;o<=u;o+=3){ss.fromArray(n,o);const d=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),f=e.dot(ss),h=t.dot(ss),g=r.dot(ss);if(Math.max(-Math.max(f,h,g),Math.min(f,h,g))>d)return!1}return!0}const vn=new me,hc=new Et;let jA=0;class cs extends vs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=AA,this.updateRanges=[],this.gpuType=xr,this.version=0,this._normalizationScale=e!==void 0?Om(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[r+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)hc.fromBufferAttribute(this,t),hc.applyMatrix3(e),this.setXY(t,hc.x,hc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix3(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=s,this}setXYZW(e,t,r,s,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),s=this._normalize(s),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):OA(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):UA(e,this.array)}}class $x extends cs{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Xx extends cs{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class $n extends cs{constructor(e,t,r){super(new Float32Array(e),t,r)}}const JA=new Fl,sl=new me,Fh=new me;class Bm{constructor(e=new me,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):JA.setFromPoints(e).getCenter(r);let s=0;for(let o=0,u=e.length;o<u;o++)s=Math.max(s,r.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sl.subVectors(e,this.center);const t=sl.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),s=(r-this.radius)*.5;this.center.addScaledVector(sl,s/r),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sl.copy(e.center).add(Fh)),this.expandByPoint(sl.copy(e.center).sub(Fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let QA=0;const Ci=new en,kh=new Pn,Qs=new me,pi=new Fl,ol=new Fl,Tn=new me;class Jr extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QA++}),this.uuid=Ul(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(CA(e)?Xx:$x)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const o=new ft().getNormalMatrix(e);r.applyNormalMatrix(o),r.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,t,r){return Ci.makeTranslation(e,t,r),this.applyMatrix4(Ci),this}scale(e,t,r){return Ci.makeScale(e,t,r),this.applyMatrix4(Ci),this}lookAt(e){return kh.lookAt(e),kh.updateMatrix(),this.applyMatrix4(kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let s=0,o=e.length;s<o;s++){const u=e[s];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new $n(r,3))}else{const r=Math.min(e.length,t.count);for(let s=0;s<r;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new me(-1/0,-1/0,-1/0),new me(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];pi.setFromBufferAttribute(o),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bm);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new me,1/0);return}if(e){const r=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const d=t[o];ol.setFromBufferAttribute(d),this.morphTargetsRelative?(Tn.addVectors(pi.min,ol.min),pi.expandByPoint(Tn),Tn.addVectors(pi.max,ol.max),pi.expandByPoint(Tn)):(pi.expandByPoint(ol.min),pi.expandByPoint(ol.max))}pi.getCenter(r);let s=0;for(let o=0,u=e.count;o<u;o++)Tn.fromBufferAttribute(e,o),s=Math.max(s,r.distanceToSquared(Tn));if(t)for(let o=0,u=t.length;o<u;o++){const d=t[o],f=this.morphTargetsRelative;for(let h=0,g=d.count;h<g;h++)Tn.fromBufferAttribute(d,h),f&&(Qs.fromBufferAttribute(e,h),Tn.add(Qs)),s=Math.max(s,r.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,s=t.normal,o=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new cs(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],f=[],h=new Uint8Array(r.count);for(let V=0;V<r.count;V++)d[V]=new me,f[V]=new me;const g=new me,m=new me,v=new me,x=new Et,E=new Et,T=new Et,y=new me,S=new me;function b(V,I,z){h[V]=h[I]=h[z]=1,g.fromBufferAttribute(r,V),m.fromBufferAttribute(r,I),v.fromBufferAttribute(r,z),x.fromBufferAttribute(o,V),E.fromBufferAttribute(o,I),T.fromBufferAttribute(o,z),m.sub(g),v.sub(g),E.sub(x),T.sub(x);const W=1/(E.x*T.y-T.x*E.y);isFinite(W)&&(y.copy(m).multiplyScalar(T.y).addScaledVector(v,-E.y).multiplyScalar(W),S.copy(v).multiplyScalar(E.x).addScaledVector(m,-T.x).multiplyScalar(W),d[V].add(y),d[I].add(y),d[z].add(y),f[V].add(S),f[I].add(S),f[z].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let V=0,I=N.length;V<I;++V){const z=N[V],W=z.start,Z=z.count;for(let B=W,le=W+Z;B<le;B+=3)b(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const L=new me,O=new me,D=new me,w=new me;function P(V){D.fromBufferAttribute(s,V),w.copy(D);const I=d[V];L.copy(I),L.sub(D.multiplyScalar(D.dot(I))).normalize(),O.crossVectors(w,I);const W=O.dot(f[V])<0?-1:1;u.setXYZW(V,L.x,L.y,L.z,W)}for(let V=0,I=r.count;V<I;++V)h[V]&&P(V);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new cs(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const s=new me,o=new me,u=new me,d=new me,f=new me,h=new me,g=new me,m=new me;if(e)for(let v=0,x=e.count;v<x;v+=3){const E=e.getX(v+0),T=e.getX(v+1),y=e.getX(v+2);s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,T),u.fromBufferAttribute(t,y),g.subVectors(u,o),m.subVectors(s,o),g.cross(m),d.fromBufferAttribute(r,E),f.fromBufferAttribute(r,T),h.fromBufferAttribute(r,y),d.add(g),f.add(g),h.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,x=t.count;v<x;v+=3)s.fromBufferAttribute(t,v+0),o.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),g.subVectors(u,o),m.subVectors(s,o),g.cross(m),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Tn.fromBufferAttribute(e,t),Tn.normalize(),e.setXYZ(t,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(d,f){const h=d.array,g=d.itemSize,m=d.normalized,v=new h.constructor(f.length*g);let x=0,E=0;for(let T=0,y=f.length;T<y;T++){d.isInterleavedBufferAttribute?x=f[T]*d.data.stride+d.offset:x=f[T]*g;for(let S=0;S<g;S++)v[E++]=h[x++]}return new cs(v,g,m)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jr,r=this.index.array,s=this.attributes;for(const d in s){const f=s[d],h=e(f,r);t.setAttribute(d,h)}const o=this.morphAttributes;for(const d in o){const f=[],h=o[d];for(let g=0,m=h.length;g<m;g++){const v=h[g],x=e(v,r);f.push(x)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,f=u.length;d<f;d++){const h=u[d];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const h=r[f];e.data.attributes[f]=h.toJSON(e.data)}const s={};let o=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],g=[];for(let m=0,v=h.length;m<v;m++){const x=h[m];g.push(x.toJSON(e.data))}g.length>0&&(s[f]=g,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const s=e.attributes;for(const h in s){const g=s[h];this.setAttribute(h,g.clone(t))}const o=e.morphAttributes;for(const h in o){const g=[],m=o[h];for(let v=0,x=m.length;v<x;v++)g.push(m[v].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,g=u.length;h<g;h++){const m=u[h];this.addGroup(m.start,m.count,m.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bh=new me,eC=new me,tC=new ft;class Aa{constructor(e=new me(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,s){return this.normal.set(e,t,r),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const s=Bh.subVectors(r,t).cross(eC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const s=e.delta(Bh),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||tC.getNormalMatrix(e),s=this.coplanarPoint(Bh).applyMatrix4(e),o=this.normal.applyMatrix3(r).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let nC=0;class kl extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nC++}),this.uuid=Ul(),this.name="",this.type="Material",this.blending=Ml,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mx,this.blendDst=Ex,this.blendEquation=ao,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=MA,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yh,this.stencilZFail=yh,this.stencilZPass=yh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ct(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(r):s&&s.isVector2&&r&&r.isVector2||s&&s.isEuler&&r&&r.isEuler||s&&s.isVector3&&r&&r.isVector3?s.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function s(o){const u=[];for(const d in o){const f=o[d];delete f.metadata,u.push(f)}return u}if(t){const o=s(e.textures),u=s(e.images);o.length>0&&(r.textures=o),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Aa().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Et().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Et().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const s=t.length;r=new Array(s);for(let o=0;o!==s;++o)r[o]=t[o].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Hr=new me,zh=new me,pc=new me,mc=new me;class qx{constructor(e=new me,t=new me(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hr.copy(this.origin).addScaledVector(this.direction,t),Hr.distanceToSquared(e))}distanceSqToSegment(e,t,r,s){zh.copy(e).add(t).multiplyScalar(.5),pc.copy(t).sub(e).normalize(),mc.copy(this.origin).sub(zh);const o=e.distanceTo(t)*.5,u=-this.direction.dot(pc),d=mc.dot(this.direction),f=-mc.dot(pc),h=mc.lengthSq(),g=Math.abs(1-u*u);let m,v,x,E;if(g>0)if(m=u*f-d,v=u*d-f,E=o*g,m>=0)if(v>=-E)if(v<=E){const T=1/g;m*=T,v*=T,x=m*(m+u*v+2*d)+v*(u*m+v+2*f)+h}else v=o,m=Math.max(0,-(u*v+d)),x=-m*m+v*(v+2*f)+h;else v=-o,m=Math.max(0,-(u*v+d)),x=-m*m+v*(v+2*f)+h;else v<=-E?(m=Math.max(0,-(-u*o+d)),v=m>0?-o:Math.min(Math.max(-o,-f),o),x=-m*m+v*(v+2*f)+h):v<=E?(m=0,v=Math.min(Math.max(-o,-f),o),x=v*(v+2*f)+h):(m=Math.max(0,-(u*o+d)),v=m>0?o:Math.min(Math.max(-o,-f),o),x=-m*m+v*(v+2*f)+h);else v=u>0?-o:o,m=Math.max(0,-(u*v+d)),x=-m*m+v*(v+2*f)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(zh).addScaledVector(pc,v),x}intersectSphere(e,t){if(e.radius<0)return null;Hr.subVectors(e.center,this.origin);const r=Hr.dot(this.direction),s=Hr.dot(Hr)-r*r,o=e.radius*e.radius;if(s>o)return null;const u=Math.sqrt(o-s),d=r-u,f=r+u;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,s,o,u,d,f;const h=1/this.direction.x,g=1/this.direction.y,m=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,s=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,s=(e.min.x-v.x)*h),g>=0?(o=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(o=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),r>u||o>s||((o>r||isNaN(r))&&(r=o),(u<s||isNaN(s))&&(s=u),m>=0?(d=(e.min.z-v.z)*m,f=(e.max.z-v.z)*m):(d=(e.max.z-v.z)*m,f=(e.min.z-v.z)*m),r>f||d>s)||((d>r||r!==r)&&(r=d),(f<s||s!==s)&&(s=f),s<0)?null:this.at(r>=0?r:s,t)}intersectsBox(e){return this.intersectBox(e,Hr)!==null}intersectTriangle(e,t,r,s,o){const u=this.origin,d=this.direction,f=d.x,h=d.y,g=d.z,m=e.x-u.x,v=e.y-u.y,x=e.z-u.z,E=t.x-u.x,T=t.y-u.y,y=t.z-u.z,S=r.x-u.x,b=r.y-u.y,N=r.z-u.z,L=Math.abs(f),O=Math.abs(h),D=Math.abs(g);let w,P,V,I,z,W,Z,B,le,re,ne,K;if(L>=O&&L>=D?(V=f,W=m,le=E,K=S,f>=0?(w=h,P=g,I=v,z=x,Z=T,B=y,re=b,ne=N):(w=g,P=h,I=x,z=v,Z=y,B=T,re=N,ne=b)):O>=D?(V=h,W=v,le=T,K=b,h>=0?(w=g,P=f,I=x,z=m,Z=y,B=E,re=N,ne=S):(w=f,P=g,I=m,z=x,Z=E,B=y,re=S,ne=N)):(V=g,W=x,le=y,K=N,g>=0?(w=f,P=h,I=m,z=v,Z=E,B=T,re=S,ne=b):(w=h,P=f,I=v,z=m,Z=T,B=E,re=b,ne=S)),V===0)return null;const q=w/V,J=P/V,k=1/V,ie=I-q*W,Ce=z-J*W,se=Z-q*le,xe=B-J*le,Me=re-q*K,Re=ne-J*K,ye=Me*xe-Re*se,Ue=ie*Re-Ce*Me,ut=se*Ce-xe*ie;if(s){if(ye<0||Ue<0||ut<0)return null}else if((ye<0||Ue<0||ut<0)&&(ye>0||Ue>0||ut>0))return null;const Je=ye+Ue+ut;if(Je===0)return null;const pt=k*(ye*W+Ue*le+ut*K);return(Je>0?pt<0:pt>0)?null:this.at(pt/Je,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gl extends kl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kr,this.combine=bx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cy=new en,os=new qx,gc=new Bm,dy=new me,vc=new me,_c=new me,yc=new me,Hh=new me,Sc=new me,fy=new me,xc=new me;class Ua extends Pn{constructor(e=new Jr,t=new gl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const s=t[r[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const d=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=o}}}}getVertexPosition(e,t){const r=this.geometry,s=r.attributes.position,o=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(s,e);const d=this.morphTargetInfluences;if(o&&d){Sc.set(0,0,0);for(let f=0,h=o.length;f<h;f++){const g=d[f],m=o[f];g!==0&&(Hh.fromBufferAttribute(m,e),u?Sc.addScaledVector(Hh,g):Sc.addScaledVector(Hh.sub(t),g))}t.add(Sc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gc.copy(r.boundingSphere),gc.applyMatrix4(o),os.copy(e.ray).recast(e.near),!(gc.containsPoint(os.origin)===!1&&(os.intersectSphere(gc,dy)===null||os.origin.distanceToSquared(dy)>(e.far-e.near)**2))&&(cy.copy(o).invert(),os.copy(e.ray).applyMatrix4(cy),!(r.boundingBox!==null&&os.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,r){let s;const o=this.geometry,u=this.material,d=o.index,f=o.attributes.position,h=o.attributes.uv,g=o.attributes.uv1,m=o.attributes.normal,v=o.groups,x=o.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,T=v.length;E<T;E++){const y=v[E],S=u[y.materialIndex],b=Math.max(y.start,x.start),N=Math.min(d.count,Math.min(y.start+y.count,x.start+x.count));for(let L=b,O=N;L<O;L+=3){const D=d.getX(L),w=d.getX(L+1),P=d.getX(L+2);s=Mc(this,S,e,r,h,g,m,D,w,P),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const E=Math.max(0,x.start),T=Math.min(d.count,x.start+x.count);for(let y=E,S=T;y<S;y+=3){const b=d.getX(y),N=d.getX(y+1),L=d.getX(y+2);s=Mc(this,u,e,r,h,g,m,b,N,L),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(u))for(let E=0,T=v.length;E<T;E++){const y=v[E],S=u[y.materialIndex],b=Math.max(y.start,x.start),N=Math.min(f.count,Math.min(y.start+y.count,x.start+x.count));for(let L=b,O=N;L<O;L+=3){const D=L,w=L+1,P=L+2;s=Mc(this,S,e,r,h,g,m,D,w,P),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const E=Math.max(0,x.start),T=Math.min(f.count,x.start+x.count);for(let y=E,S=T;y<S;y+=3){const b=y,N=y+1,L=y+2;s=Mc(this,u,e,r,h,g,m,b,N,L),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function iC(n,e,t,r,s,o,u,d){let f;if(e.side===ii?f=r.intersectTriangle(u,o,s,!0,d):f=r.intersectTriangle(s,o,u,e.side===ds,d),f===null)return null;xc.copy(d),xc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(xc);return h<t.near||h>t.far?null:{distance:h,point:xc.clone(),object:n}}function Mc(n,e,t,r,s,o,u,d,f,h){n.getVertexPosition(d,vc),n.getVertexPosition(f,_c),n.getVertexPosition(h,yc);const g=iC(n,e,t,r,vc,_c,yc,fy);if(g){const m=new me;Qi.getBarycoord(fy,vc,_c,yc,m),s&&(g.uv=Qi.getInterpolatedAttribute(s,d,f,h,m,new Et)),o&&(g.uv1=Qi.getInterpolatedAttribute(o,d,f,h,m,new Et)),u&&(g.normal=Qi.getInterpolatedAttribute(u,d,f,h,m,new me),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:f,c:h,normal:new me,materialIndex:0};Qi.getNormal(vc,_c,yc,v.normal),g.face=v,g.barycoord=m}return g}class rC extends Bn{constructor(e=null,t=1,r=1,s,o,u,d,f,h=Cn,g=Cn,m,v){super(null,u,d,f,h,g,s,o,m,v),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ls=new Bm,aC=new Et(.5,.5),Ec=new me;class Il{constructor(e=new Aa,t=new Aa,r=new Aa,s=new Aa,o=new Aa,u=new Aa){this.planes=[e,t,r,s,o,u]}set(e,t,r,s,o,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(s),d[4].copy(o),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=er,r=!1){const s=this.planes,o=e.elements,u=o[0],d=o[1],f=o[2],h=o[3],g=o[4],m=o[5],v=o[6],x=o[7],E=o[8],T=o[9],y=o[10],S=o[11],b=o[12],N=o[13],L=o[14],O=o[15];if(s[0].setComponents(h-u,x-g,S-E,O-b).normalize(),s[1].setComponents(h+u,x+g,S+E,O+b).normalize(),s[2].setComponents(h+d,x+m,S+T,O+N).normalize(),s[3].setComponents(h-d,x-m,S-T,O-N).normalize(),r)s[4].setComponents(f,v,y,L).normalize(),s[5].setComponents(h-f,x-v,S-y,O-L).normalize();else if(s[4].setComponents(h-f,x-v,S-y,O-L).normalize(),t===er)s[5].setComponents(h+f,x+v,S+y,O+L).normalize();else if(t===Dl)s[5].setComponents(f,v,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){ls.center.set(0,0,0);const t=aC.distanceTo(e.center);return ls.radius=.7071067811865476+t,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){const t=this.planes,r=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(r)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const s=t[r];if(Ec.x=s.normal.x>0?e.max.x:e.min.x,Ec.y=s.normal.y>0?e.max.y:e.min.y,Ec.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const hy=new en;class zm{constructor(){this.coordinateSystem=er,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let s=0;s<t.length;s++){const o=t[s];hy.multiplyMatrices(o.projectionMatrix,o.matrixWorldInverse),r[s]===void 0&&(r[s]=new Il),r[s].setFromProjectionMatrix(hy,o.coordinateSystem,o.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Il),t[s].copy(r[s]);return this._count=e._count,this}clone(){return new zm().copy(this)}}class Yx extends Bn{constructor(e=[],t=po,r,s,o,u,d,f,h,g){super(e,t,r,s,o,u,d,f,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ll extends Bn{constructor(e,t,r,s,o,u,d,f,h){super(e,t,r,s,o,u,d,f,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class go extends Bn{constructor(e,t,r=Tr,s,o,u,d=Cn,f=Cn,h,g=Oa,m=1){if(g!==Oa&&g!==Da)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:m};super(v,s,o,u,d,f,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Um(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Kx extends go{constructor(e,t=Tr,r=po,s,o,u=Cn,d=Cn,f,h=Oa){const g={width:e,height:e,depth:1},m=[g,g,g,g,g,g];super(e,e,t,r,s,o,u,d,f,h),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Zx extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class So extends Jr{constructor(e=1,t=1,r=1,s=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:s,heightSegments:o,depthSegments:u};const d=this;s=Math.floor(s),o=Math.floor(o),u=Math.floor(u);const f=[],h=[],g=[],m=[];let v=0,x=0;E("z","y","x",-1,-1,r,t,e,u,o,0),E("z","y","x",1,-1,r,t,-e,u,o,1),E("x","z","y",1,1,e,r,t,s,u,2),E("x","z","y",1,-1,e,r,-t,s,u,3),E("x","y","z",1,-1,e,t,r,s,o,4),E("x","y","z",-1,-1,e,t,-r,s,o,5),this.setIndex(f),this.setAttribute("position",new $n(h,3)),this.setAttribute("normal",new $n(g,3)),this.setAttribute("uv",new $n(m,2));function E(T,y,S,b,N,L,O,D,w,P,V){const I=L/w,z=O/P,W=L/2,Z=O/2,B=D/2,le=w+1,re=P+1;let ne=0,K=0;const q=new me;for(let J=0;J<re;J++){const k=J*z-Z;for(let ie=0;ie<le;ie++){const Ce=ie*I-W;q[T]=Ce*b,q[y]=k*N,q[S]=B,h.push(q.x,q.y,q.z),q[T]=0,q[y]=0,q[S]=D>0?1:-1,g.push(q.x,q.y,q.z),m.push(ie/w),m.push(1-J/P),ne+=1}}for(let J=0;J<P;J++)for(let k=0;k<w;k++){const ie=v+k+le*J,Ce=v+k+le*(J+1),se=v+(k+1)+le*(J+1),xe=v+(k+1)+le*J;f.push(ie,Ce,xe),f.push(Ce,se,xe),K+=6}d.addGroup(x,K,V),x+=K,v+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Nl extends Jr{constructor(e=1,t=1,r=1,s=32,o=1,u=!1,d=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:s,heightSegments:o,openEnded:u,thetaStart:d,thetaLength:f};const h=this;s=Math.floor(s),o=Math.floor(o);const g=[],m=[],v=[],x=[];let E=0;const T=[],y=r/2;let S=0;b(),u===!1&&(e>0&&N(!0),t>0&&N(!1)),this.setIndex(g),this.setAttribute("position",new $n(m,3)),this.setAttribute("normal",new $n(v,3)),this.setAttribute("uv",new $n(x,2));function b(){const L=new me,O=new me;let D=0;const w=(t-e)/r;for(let P=0;P<=o;P++){const V=[],I=P/o,z=I*(t-e)+e;for(let W=0;W<=s;W++){const Z=W/s,B=Z*f+d,le=Math.sin(B),re=Math.cos(B);O.x=z*le,O.y=-I*r+y,O.z=z*re,m.push(O.x,O.y,O.z),L.set(le,w,re).normalize(),v.push(L.x,L.y,L.z),x.push(Z,1-I),V.push(E++)}T.push(V)}for(let P=0;P<s;P++)for(let V=0;V<o;V++){const I=T[V][P],z=T[V+1][P],W=T[V+1][P+1],Z=T[V][P+1];(e>0||V!==0)&&(g.push(I,z,Z),D+=3),(t>0||V!==o-1)&&(g.push(z,W,Z),D+=3)}h.addGroup(S,D,0),S+=D}function N(L){const O=E,D=new Et,w=new me;let P=0;const V=L===!0?e:t,I=L===!0?1:-1;for(let W=1;W<=s;W++)m.push(0,y*I,0),v.push(0,I,0),x.push(.5,.5),E++;const z=E;for(let W=0;W<=s;W++){const B=W/s*f+d,le=Math.cos(B),re=Math.sin(B);w.x=V*re,w.y=y*I,w.z=V*le,m.push(w.x,w.y,w.z),v.push(0,I,0),D.x=le*.5+.5,D.y=re*.5*I+.5,x.push(D.x,D.y),E++}for(let W=0;W<s;W++){const Z=O+W,B=z+W;L===!0?g.push(B,B+1,Z):g.push(B+1,B,Z),P+=3}h.addGroup(S,P,L===!0?1:2),S+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qc extends Nl{constructor(e=1,t=1,r=32,s=1,o=!1,u=0,d=Math.PI*2){super(0,e,t,r,s,o,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:u,thetaLength:d}}static fromJSON(e){return new Qc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ia extends Jr{constructor(e=1,t=1,r=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:s};const o=e/2,u=t/2,d=Math.floor(r),f=Math.floor(s),h=d+1,g=f+1,m=e/d,v=t/f,x=[],E=[],T=[],y=[];for(let S=0;S<g;S++){const b=S*v-u;for(let N=0;N<h;N++){const L=N*m-o;E.push(L,-b,0),T.push(0,0,1),y.push(N/d),y.push(1-S/f)}}for(let S=0;S<f;S++)for(let b=0;b<d;b++){const N=b+h*S,L=b+h*(S+1),O=b+1+h*(S+1),D=b+1+h*S;x.push(N,L,D),x.push(L,O,D)}this.setIndex(x),this.setAttribute("position",new $n(E,3)),this.setAttribute("normal",new $n(T,3)),this.setAttribute("uv",new $n(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hm extends Jr{constructor(e=1,t=32,r=16,s=0,o=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:s,phiLength:o,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(u+d,Math.PI);let h=0;const g=[],m=new me,v=new me,x=[],E=[],T=[],y=[];for(let S=0;S<=r;S++){const b=[],N=S/r,L=u+N*d,O=e*Math.cos(L),D=Math.sqrt(e*e-O*O);let w=0;S===0&&u===0?w=.5/t:S===r&&f===Math.PI&&(w=-.5/t);for(let P=0;P<=t;P++){const V=P/t,I=s+V*o;m.x=-D*Math.cos(I),m.y=O,m.z=D*Math.sin(I),E.push(m.x,m.y,m.z),v.copy(m).normalize(),T.push(v.x,v.y,v.z),y.push(V+w,1-N),b.push(h++)}g.push(b)}for(let S=0;S<r;S++)for(let b=0;b<t;b++){const N=g[S][b+1],L=g[S][b],O=g[S+1][b],D=g[S+1][b+1];(S!==0||u>0)&&x.push(N,L,D),(S!==r-1||f<Math.PI)&&x.push(L,O,D)}this.setIndex(x),this.setAttribute("position",new $n(E,3)),this.setAttribute("normal",new $n(T,3)),this.setAttribute("uv",new $n(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function vo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const s=n[t][r];if(py(s))s.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=s.clone();else if(Array.isArray(s))if(py(s[0])){const o=[];for(let u=0,d=s.length;u<d;u++)o[u]=s[u].clone();e[t][r]=o}else e[t][r]=s.slice();else e[t][r]=s}}return e}function Vn(n){const e={};for(let t=0;t<n.length;t++){const r=vo(n[t]);for(const s in r)e[s]=r[s]}return e}function py(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function sC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function jx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const oC={clone:vo,merge:Vn};var lC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hs extends kl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lC,this.fragmentShader=uC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vo(e.uniforms),this.uniformsGroups=sC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const s in this.extensions)this.extensions[s]===!0&&(r[s]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const s=e.uniforms[r];switch(this.uniforms[r]={},s.type){case"t":this.uniforms[r].value=t[s.value]||null;break;case"c":this.uniforms[r].value=new Mt().setHex(s.value);break;case"v2":this.uniforms[r].value=new Et().fromArray(s.value);break;case"v3":this.uniforms[r].value=new me().fromArray(s.value);break;case"v4":this.uniforms[r].value=new rn().fromArray(s.value);break;case"m3":this.uniforms[r].value=new ft().fromArray(s.value);break;case"m4":this.uniforms[r].value=new en().fromArray(s.value);break;default:this.uniforms[r].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class cC extends hs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dC extends kl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cm,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fC extends kl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hC extends kl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Gm extends Pn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class pC extends Gm{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Gh=new en,my=new me,gy=new me;class Jx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Il,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;my.setFromMatrixPosition(e.matrixWorld),t.position.copy(my),gy.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gy),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,s){Gh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Gh,e.coordinateSystem,e.reversedDepth);const o=this._frameExtents,u=s?s.z/o.x:1,d=s?s.w/o.y:1,f=s?s.x/o.x:0,h=s?s.y/o.y:0;e.coordinateSystem===Dl||e.reversedDepth?t.set(.5*u,0,0,.5*u+f,0,.5*d,0,.5*d+h,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+f,0,.5*d,0,.5*d+h,0,0,.5,.5,0,0,0,1),t.multiply(Gh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const bc=new me,wc=new qr,dr=new me;class Qx extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=er,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bc,wc,dr),dr.x===1&&dr.y===1&&dr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bc,wc,dr.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(bc,wc,dr),dr.x===1&&dr.y===1&&dr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bc,wc,dr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wa=new me,vy=new Et,_y=new Et;class Di extends Qx{constructor(e=50,t=1,r=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=dm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dm*2*Math.atan(Math.tan(Sh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){wa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wa.x,wa.y).multiplyScalar(-e/wa.z),wa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(wa.x,wa.y).multiplyScalar(-e/wa.z)}getViewSize(e,t){return this.getViewBounds(e,vy,_y),t.subVectors(_y,vy)}setViewOffset(e,t,r,s,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sh*.5*this.fov)/this.zoom,r=2*t,s=this.aspect*r,o=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,h=u.fullHeight;o+=u.offsetX*s/f,t-=u.offsetY*r/h,s*=u.width/f,r*=u.height/h}const d=this.filmOffset;d!==0&&(o+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class mC extends Jx{constructor(){super(new Di(90,1,.5,500)),this.isPointLightShadow=!0}}class yy extends Gm{constructor(e,t,r=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=s,this.shadow=new mC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class eM extends Qx{constructor(e=-1,t=1,r=1,s=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=s,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,s,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=r-e,u=r+e,d=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,u=o+h*this.view.width,d-=g*this.view.offsetY,f=d-g*this.view.height}this.projectionMatrix.makeOrthographic(o,u,d,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class gC extends Jx{constructor(){super(new eM(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vC extends Gm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new gC}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const eo=-90,to=1;class fm extends Pn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Di(eo,to,e,t);s.layers=this.layers,this.add(s);const o=new Di(eo,to,e,t);o.layers=this.layers,this.add(o);const u=new Di(eo,to,e,t);u.layers=this.layers,this.add(u);const d=new Di(eo,to,e,t);d.layers=this.layers,this.add(d);const f=new Di(eo,to,e,t);f.layers=this.layers,this.add(f);const h=new Di(eo,to,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,s,o,u,d,f]=t;for(const h of t)this.remove(h);if(e===er)r.up.set(0,1,0),r.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Dl)r.up.set(0,-1,0),r.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,d,f,h,g]=this.children,m=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(r,1,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,4,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.mipmapsAutoUpdate=T,e.setRenderTarget(r,5,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(m,v,x),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class _C extends Di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const Sy=new en;class yC{constructor(e,t,r=0,s=1/0){this.ray=new qx(e,t),this.near=r,this.far=s,this.camera=null,this.layers=new Fm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):It("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sy.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sy),this}intersectObject(e,t=!0,r=[]){return hm(e,this,r,t),r.sort(xy),r}intersectObjects(e,t=!0,r=[]){for(let s=0,o=e.length;s<o;s++)hm(e[s],this,r,t);return r.sort(xy),r}}function xy(n,e){return n.distance-e.distance}function hm(n,e,t,r){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&r===!0){const o=n.children;for(let u=0,d=o.length;u<d;u++)hm(o[u],e,t,!0)}}function My(n,e,t,r){const s=SC(r);switch(t){case Ux:return n*e;case kx:return n*e/s.components*s.byteLength;case Dm:return n*e/s.components*s.byteLength;case fs:return n*e*2/s.components*s.byteLength;case Im:return n*e*2/s.components*s.byteLength;case Fx:return n*e*3/s.components*s.byteLength;case Mr:return n*e*4/s.components*s.byteLength;case Nm:return n*e*4/s.components*s.byteLength;case Oc:case Uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fc:case kc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Op:case Fp:return Math.max(n,16)*Math.max(e,8)/4;case Np:case Up:return Math.max(n,8)*Math.max(e,8)/2;case kp:case Bp:case Hp:case Gp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zp:case Yc:case Vp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $p:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Xp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case qp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Yp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Kp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Zp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case jp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Jp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Qp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case em:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case tm:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case nm:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case im:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case rm:case am:case sm:return Math.ceil(n/4)*Math.ceil(e/4)*16;case om:case lm:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Kc:case um:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function SC(n){switch(n){case gi:case Dx:return{byteLength:1,components:1};case Ll:case Ix:case Rr:return{byteLength:2,components:1};case Pm:case Lm:return{byteLength:2,components:4};case Tr:case Cm:case xr:return{byteLength:4,components:1};case Nx:case Ox:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rm}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rm);/**
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
}`,gt={alphahash_fragment:MC,alphahash_pars_fragment:EC,alphamap_fragment:bC,alphamap_pars_fragment:wC,alphatest_fragment:TC,alphatest_pars_fragment:RC,aomap_fragment:AC,aomap_pars_fragment:CC,batching_pars_vertex:PC,batching_vertex:LC,begin_vertex:DC,beginnormal_vertex:IC,bsdfs:NC,iridescence_fragment:OC,bumpmap_pars_fragment:UC,clipping_planes_fragment:FC,clipping_planes_pars_fragment:kC,clipping_planes_pars_vertex:BC,clipping_planes_vertex:zC,color_fragment:HC,color_pars_fragment:GC,color_pars_vertex:VC,color_vertex:WC,common:$C,defaultnormal_vertex:XC,displacementmap_pars_vertex:qC,displacementmap_vertex:YC,emissivemap_fragment:KC,emissivemap_pars_fragment:ZC,colorspace_fragment:jC,colorspace_pars_fragment:JC,envmap_fragment:QC,envmap_common_pars_fragment:eP,envmap_pars_fragment:tP,envmap_pars_vertex:nP,envmap_physical_pars_fragment:hP,envmap_vertex:iP,fog_vertex:rP,fog_pars_vertex:aP,fog_fragment:sP,fog_pars_fragment:oP,gradientmap_pars_fragment:lP,lightmap_pars_fragment:uP,lights_lambert_fragment:cP,lights_lambert_pars_fragment:dP,lights_pars_begin:fP,lights_toon_fragment:pP,lights_toon_pars_fragment:mP,lights_phong_fragment:gP,lights_phong_pars_fragment:vP,lights_physical_fragment:_P,lights_physical_pars_fragment:yP,lights_fragment_begin:SP,lights_fragment_maps:xP,lights_fragment_end:MP,lightprobes_pars_fragment:EP,logdepthbuf_fragment:bP,logdepthbuf_pars_fragment:wP,logdepthbuf_pars_vertex:TP,logdepthbuf_vertex:RP,map_fragment:AP,map_pars_fragment:CP,map_particle_fragment:PP,map_particle_pars_fragment:LP,metalnessmap_fragment:DP,metalnessmap_pars_fragment:IP,morphinstance_vertex:NP,morphcolor_vertex:OP,morphnormal_vertex:UP,morphtarget_pars_vertex:FP,morphtarget_vertex:kP,normal_fragment_begin:BP,normal_fragment_maps:zP,normal_pars_fragment:HP,normal_pars_vertex:GP,normal_vertex:VP,normalmap_pars_fragment:WP,clearcoat_normal_fragment_begin:$P,clearcoat_normal_fragment_maps:XP,clearcoat_pars_fragment:qP,iridescence_pars_fragment:YP,opaque_fragment:KP,packing:ZP,premultiplied_alpha_fragment:jP,project_vertex:JP,dithering_fragment:QP,dithering_pars_fragment:eL,roughnessmap_fragment:tL,roughnessmap_pars_fragment:nL,shadowmap_pars_fragment:iL,shadowmap_pars_vertex:rL,shadowmap_vertex:aL,shadowmask_pars_fragment:sL,skinbase_vertex:oL,skinning_pars_vertex:lL,skinning_vertex:uL,skinnormal_vertex:cL,specularmap_fragment:dL,specularmap_pars_fragment:fL,tonemapping_fragment:hL,tonemapping_pars_fragment:pL,transmission_fragment:mL,transmission_pars_fragment:gL,uv_pars_fragment:vL,uv_pars_vertex:_L,uv_vertex:yL,worldpos_vertex:SL,background_vert:xL,background_frag:ML,backgroundCube_vert:EL,backgroundCube_frag:bL,cube_vert:wL,cube_frag:TL,depth_vert:RL,depth_frag:AL,distance_vert:CL,distance_frag:PL,equirect_vert:LL,equirect_frag:DL,linedashed_vert:IL,linedashed_frag:NL,meshbasic_vert:OL,meshbasic_frag:UL,meshlambert_vert:FL,meshlambert_frag:kL,meshmatcap_vert:BL,meshmatcap_frag:zL,meshnormal_vert:HL,meshnormal_frag:GL,meshphong_vert:VL,meshphong_frag:WL,meshphysical_vert:$L,meshphysical_frag:XL,meshtoon_vert:qL,meshtoon_frag:YL,points_vert:KL,points_frag:ZL,shadow_vert:jL,shadow_frag:JL,sprite_vert:QL,sprite_frag:e2},Be={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},gr={basic:{uniforms:Vn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Vn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Vn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Vn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Vn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Mt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Vn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Vn([Be.points,Be.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Vn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Vn([Be.common,Be.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Vn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Vn([Be.sprite,Be.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Vn([Be.common,Be.displacementmap,{referencePosition:{value:new me},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Vn([Be.lights,Be.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};gr.physical={uniforms:Vn([gr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Tc={r:0,b:0,g:0},t2=new en,nM=new ft;nM.set(-1,0,0,0,1,0,0,0,1);function n2(n,e,t,r,s,o){const u=new Mt(0);let d=s===!0?0:1,f,h,g=null,m=0,v=null;function x(b){let N=b.isScene===!0?b.background:null;if(N&&N.isTexture){const L=b.backgroundBlurriness>0;N=e.get(N,L)}return N}function E(b){let N=!1;const L=x(b);L===null?y(u,d):L&&L.isColor&&(y(L,1),N=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?t.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(n.autoClear||N)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function T(b,N){const L=x(N);L&&L.isCubeTexture?(h===void 0&&(h=new Ua(new So(1,1,1),new hs({name:"BackgroundCubeMaterial",uniforms:vo(gr.backgroundCube.uniforms),vertexShader:gr.backgroundCube.vertexShader,fragmentShader:gr.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,D,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=L,h.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(t2.makeRotationFromEuler(N.backgroundRotation)).transpose(),L.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(nM),h.material.toneMapped=Tt.getTransfer(L.colorSpace)!==Ut,(g!==L||m!==L.version||v!==n.toneMapping)&&(h.material.needsUpdate=!0,g=L,m=L.version,v=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(f===void 0&&(f=new Ua(new Ia(2,2),new hs({name:"BackgroundMaterial",uniforms:vo(gr.background.uniforms),vertexShader:gr.background.vertexShader,fragmentShader:gr.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=L,f.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,f.material.toneMapped=Tt.getTransfer(L.colorSpace)!==Ut,L.matrixAutoUpdate===!0&&L.updateMatrix(),f.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||m!==L.version||v!==n.toneMapping)&&(f.material.needsUpdate=!0,g=L,m=L.version,v=n.toneMapping),f.layers.enableAll(),b.unshift(f,f.geometry,f.material,0,0,null))}function y(b,N){b.getRGB(Tc,jx(n)),t.buffers.color.setClear(Tc.r,Tc.g,Tc.b,N,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(b,N=1){u.set(b),d=N,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(b){d=b,y(u,d)},render:E,addToRenderList:T,dispose:S}}function i2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},s=v(null);let o=s,u=!1;function d(z,W,Z,B,le){let re=!1;const ne=m(z,B,Z,W);o!==ne&&(o=ne,h(o.object)),re=x(z,B,Z,le),re&&E(z,B,Z,le),le!==null&&e.update(le,n.ELEMENT_ARRAY_BUFFER),(re||u)&&(u=!1,L(z,W,Z,B),le!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function f(){return n.createVertexArray()}function h(z){return n.bindVertexArray(z)}function g(z){return n.deleteVertexArray(z)}function m(z,W,Z,B){const le=B.wireframe===!0;let re=r[W.id];re===void 0&&(re={},r[W.id]=re);const ne=z.isInstancedMesh===!0?z.id:0;let K=re[ne];K===void 0&&(K={},re[ne]=K);let q=K[Z.id];q===void 0&&(q={},K[Z.id]=q);let J=q[le];return J===void 0&&(J=v(f()),q[le]=J),J}function v(z){const W=[],Z=[],B=[];for(let le=0;le<t;le++)W[le]=0,Z[le]=0,B[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Z,attributeDivisors:B,object:z,attributes:{},index:null}}function x(z,W,Z,B){const le=o.attributes,re=W.attributes;let ne=0;const K=Z.getAttributes();for(const q in K)if(K[q].location>=0){const k=le[q];let ie=re[q];if(ie===void 0&&(q==="instanceMatrix"&&z.instanceMatrix&&(ie=z.instanceMatrix),q==="instanceColor"&&z.instanceColor&&(ie=z.instanceColor)),k===void 0||k.attribute!==ie||ie&&k.data!==ie.data)return!0;ne++}return o.attributesNum!==ne||o.index!==B}function E(z,W,Z,B){const le={},re=W.attributes;let ne=0;const K=Z.getAttributes();for(const q in K)if(K[q].location>=0){let k=re[q];k===void 0&&(q==="instanceMatrix"&&z.instanceMatrix&&(k=z.instanceMatrix),q==="instanceColor"&&z.instanceColor&&(k=z.instanceColor));const ie={};ie.attribute=k,k&&k.data&&(ie.data=k.data),le[q]=ie,ne++}o.attributes=le,o.attributesNum=ne,o.index=B}function T(){const z=o.newAttributes;for(let W=0,Z=z.length;W<Z;W++)z[W]=0}function y(z){S(z,0)}function S(z,W){const Z=o.newAttributes,B=o.enabledAttributes,le=o.attributeDivisors;Z[z]=1,B[z]===0&&(n.enableVertexAttribArray(z),B[z]=1),le[z]!==W&&(n.vertexAttribDivisor(z,W),le[z]=W)}function b(){const z=o.newAttributes,W=o.enabledAttributes;for(let Z=0,B=W.length;Z<B;Z++)W[Z]!==z[Z]&&(n.disableVertexAttribArray(Z),W[Z]=0)}function N(z,W,Z,B,le,re,ne){ne===!0?n.vertexAttribIPointer(z,W,Z,le,re):n.vertexAttribPointer(z,W,Z,B,le,re)}function L(z,W,Z,B){T();const le=B.attributes,re=Z.getAttributes(),ne=W.defaultAttributeValues;for(const K in re){const q=re[K];if(q.location>=0){let J=le[K];if(J===void 0&&(K==="instanceMatrix"&&z.instanceMatrix&&(J=z.instanceMatrix),K==="instanceColor"&&z.instanceColor&&(J=z.instanceColor)),J!==void 0){const k=J.normalized,ie=J.itemSize,Ce=e.get(J);if(Ce===void 0)continue;const se=Ce.buffer,xe=Ce.type,Me=Ce.bytesPerElement,Re=xe===n.INT||xe===n.UNSIGNED_INT||J.gpuType===Cm;if(J.isInterleavedBufferAttribute){const ye=J.data,Ue=ye.isInterleavedBuffer===!0?ye.stride:ye.itemSize,ut=J.offset;if(ye.isInstancedInterleavedBuffer||ye.isInstancedBufferAttribute){for(let Je=0;Je<q.locationSize;Je++)S(q.location+Je,ye.meshPerAttribute);z.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Je=0;Je<q.locationSize;Je++)y(q.location+Je);n.bindBuffer(n.ARRAY_BUFFER,se);for(let Je=0;Je<q.locationSize;Je++)N(q.location+Je,ie/q.locationSize,xe,k,Ue*Me,(ut+ie/q.locationSize*Je)*Me,Re)}else{if(J.isInstancedBufferAttribute){for(let ye=0;ye<q.locationSize;ye++)S(q.location+ye,J.meshPerAttribute);z.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ye=0;ye<q.locationSize;ye++)y(q.location+ye);n.bindBuffer(n.ARRAY_BUFFER,se);for(let ye=0;ye<q.locationSize;ye++)N(q.location+ye,ie/q.locationSize,xe,k,ie*Me,ie/q.locationSize*ye*Me,Re)}}else if(ne!==void 0){const k=ne[K];if(k!==void 0)switch(k.length){case 2:n.vertexAttrib2fv(q.location,k);break;case 3:n.vertexAttrib3fv(q.location,k);break;case 4:n.vertexAttrib4fv(q.location,k);break;default:n.vertexAttrib1fv(q.location,k)}}}}b()}function O(){V();for(const z in r){const W=r[z];for(const Z in W){const B=W[Z];for(const le in B){const re=B[le];for(const ne in re)g(re[ne].object),delete re[ne];delete B[le]}}delete r[z]}}function D(z){if(r[z.id]===void 0)return;const W=r[z.id];for(const Z in W){const B=W[Z];for(const le in B){const re=B[le];for(const ne in re)g(re[ne].object),delete re[ne];delete B[le]}}delete r[z.id]}function w(z){for(const W in r){const Z=r[W];for(const B in Z){const le=Z[B];if(le[z.id]===void 0)continue;const re=le[z.id];for(const ne in re)g(re[ne].object),delete re[ne];delete le[z.id]}}}function P(z){for(const W in r){const Z=r[W],B=z.isInstancedMesh===!0?z.id:0,le=Z[B];if(le!==void 0){for(const re in le){const ne=le[re];for(const K in ne)g(ne[K].object),delete ne[K];delete le[re]}delete Z[B],Object.keys(Z).length===0&&delete r[W]}}}function V(){I(),u=!0,o!==s&&(o=s,h(o.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:d,reset:V,resetDefaultState:I,dispose:O,releaseStatesOfGeometry:D,releaseStatesOfObject:P,releaseStatesOfProgram:w,initAttributes:T,enableAttribute:y,disableUnusedAttributes:b}}function r2(n,e,t){let r;function s(f){r=f}function o(f,h){n.drawArrays(r,f,h),t.update(h,r,1)}function u(f,h,g){g!==0&&(n.drawArraysInstanced(r,f,h,g),t.update(h,r,g))}function d(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,h,0,g);let v=0;for(let x=0;x<g;x++)v+=h[x];t.update(v,r,1)}this.setMode=s,this.render=o,this.renderInstances=u,this.renderMultiDraw=d}function a2(n,e,t,r){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(w){return!(w!==Mr&&r.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(w){const P=w===Rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==gi&&w!==xr&&!P&&r.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function f(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const g=f(h);g!==h&&(ct("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=t.logarithmicDepthBuffer===!0&&m===!1;t.reversedDepthBuffer===!0&&m===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&m===!0&&ct("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),S=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),N=n.getParameter(n.MAX_VARYING_VECTORS),L=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=n.getParameter(n.MAX_SAMPLES),D=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:b,maxVaryings:N,maxFragmentUniforms:L,maxSamples:O,samples:D}}function s2(n){const e=this;let t=null,r=0,s=!1,o=!1;const u=new Aa,d=new ft,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const x=m.length!==0||v||r!==0||s;return s=v,r=m.length,x},this.beginShadows=function(){o=!0,g(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,v){t=g(m,v,0)},this.setState=function(m,v,x){const E=m.clippingPlanes,T=m.clipIntersection,y=m.clipShadows,S=n.get(m);if(!s||E===null||E.length===0||o&&!y)o?g(null):h();else{const b=o?0:r,N=b*4;let L=S.clippingState||null;f.value=L,L=g(E,v,N,x);for(let O=0;O!==N;++O)L[O]=t[O];S.clippingState=L,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=b}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(m,v,x,E){const T=m!==null?m.length:0;let y=null;if(T!==0){if(y=f.value,E!==!0||y===null){const S=x+T*4,b=v.matrixWorldInverse;d.getNormalMatrix(b),(y===null||y.length<S)&&(y=new Float32Array(S));for(let N=0,L=x;N!==T;++N,L+=4)u.copy(m[N]).applyMatrix4(b,d),u.normal.toArray(y,L),y[L+3]=u.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}class Vm extends wr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},s=[r,r,r,r,r,r];this.texture=new Yx(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new So(5,5,5),o=new hs({name:"CubemapFromEquirect",uniforms:vo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ii,blending:lo});o.uniforms.tEquirect.value=t;const u=new Ua(s,o),d=t.minFilter;return t.minFilter===La&&(t.minFilter=ti),new fm(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,s=!0){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,s);e.setRenderTarget(o)}}const Ey=256,o2=3,l2=20,iM=256,rM=16,u2=3,c2=new me,d2=new Mt;class ed{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new fm(1,10,null),this._boxMesh=new Ua(new So(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,s=100,o={}){const{size:u=256,position:d=c2}=o,f=this._renderer;this._setSize(u);const h=this._allocateTarget(),g=this._getSourceTarget(!0);t>0&&(g.texture.mipmapsAutoUpdate=!1);const m=f.autoClear,v=f.autoClearColor,x=f.autoClearDepth,E=f.autoClearStencil,T=e.background;f.autoClear=!0,f.autoClearColor=!0,f.autoClearDepth=!0,f.autoClearStencil=!0,T===null&&(e.background=f.getClearColor(d2));const y=new fm(r,s,g);return y.position.copy(d),y.update(f,e),f.autoClear=m,f.autoClearColor=v,f.autoClearDepth=x,f.autoClearStencil=E,e.background=T,t>0&&(g.texture.mipmapsAutoUpdate=!0,this._blur(h,t)),this._applyPMREM(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ty(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ey,NA(e))}_fromTexture(e,t){e.mapping===po||e.mapping===Pl?this._setSize(e.image.length===0?Ey:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=by(e,!1,!1),r=Math.log2(e)-o2;for(let s=0;s<=r;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=by(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const s=this._boxMesh,o=this._cubeCamera;s.material=r,o.renderTarget=e,o.activeMipmapLevel=t;const u=e.width>>t;e.viewport.set(0,0,u,u),o.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===po||e.mapping===Pl?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ty()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=wy()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=f2(),this._integrationMaterial=h2());const t=this._cubeSize,r=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const o=this._integrationMaterial.uniforms;o.envMap.value=this._sourceTarget.texture,o.sourceLod.value=Math.log2(t/rM);for(let u=0;u<=r;u++){const d=ed.lodToRoughness(u,r);if(u>r-u2)o.roughness.value=d,this._renderCube(e,u,this._integrationMaterial);else{const f=d>0?Math.log2(t)+.5*Math.log2(6/(iM*Math.pow(d,4)))+.5:0;s.roughness.value=d,s.lodBias.value=f,this._renderCube(e,u,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=p2());const r=this._blurMaterial,s=r.uniforms,o=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=o.texture,this._renderCube(e,0,r),s.envMap.value=e.texture,this._renderCube(o,0,r)}}function by(n,e,t){return new Vm(n,{minFilter:La,generateMipmaps:e,type:Rr,colorSpace:Zc,depthBuffer:t})}function Bl(n,e,t){return new hs({name:n,uniforms:e,vertexShader:gt.cube_vert,fragmentShader:t,side:ii,blending:lo,depthTest:!1,depthWrite:!1})}function f2(){return Bl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function m2(n){let e=new WeakMap,t=new WeakMap,r=null;function s(v,x=!1){return v==null?null:x?u(v):o(v)}function o(v){if(v&&v.isTexture){const x=v.mapping;if(x===gh||x===vh)if(e.has(v)){const E=e.get(v).texture;return d(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const T=new Vm(E.height);return T.fromEquirectangularTexture(n,v),e.set(v,T),v.addEventListener("dispose",h),d(T.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture&&v.isPMREMTexture!==!0){const x=v.mapping,E=x===gh||x===vh,T=x===po||x===Pl;if(E||T){let y=t.get(v);const S=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return r===null&&(r=new ed(n)),y=E?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),y.texture;if(y!==void 0)return y.texture;{const b=v.image;return E&&b&&b.height>0||T&&b&&f(b)?(r===null&&(r=new ed(n)),y=E?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),v.addEventListener("dispose",g),y.texture):null}}}return v}function d(v,x){return x===gh?v.mapping=po:x===vh&&(v.mapping=Pl),v}function f(v){let x=0;const E=6;for(let T=0;T<E;T++)v[T]!==void 0&&x++;return x===E}function h(v){const x=v.target;x.removeEventListener("dispose",h);const E=e.get(x);E!==void 0&&(e.delete(x),E.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const E=t.get(x);E!==void 0&&(t.delete(x),E.dispose())}function m(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:s,dispose:m}}function g2(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const s=n.getExtension(r);return e[r]=s,s}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const s=t(r);return s===null&&Bc("WebGLRenderer: "+r+" extension not supported."),s}}}function v2(n,e,t,r){const s={},o=new WeakMap,u=new FinalizationRegistry(E=>delete s[E]);function d(E){f(E.target)}function f(E){E.index!==null&&e.remove(E.index);for(const y in E.attributes)e.remove(E.attributes[y]);E.removeEventListener("dispose",d),delete s[E.id],u.unregister(E);const T=o.get(E);T&&(e.remove(T),o.delete(E)),r.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,t.memory.geometries--}function h(E,T){return s[T.id]!==void 0||(T.addEventListener("dispose",d),s[T.id]=new WeakRef(T),u.register(T,T.id,T),t.memory.geometries++),T}function g(E){const T=E.attributes;for(const y in T)e.update(T[y],n.ARRAY_BUFFER)}function m(E){const T=E.index,y=E.attributes.position;let S=0;if(y===void 0)return;const b=T!==null?T.array.length:y.array.length/3-1,N=y.count>=65535?Xx:$x,L=new N(Math.ceil(b/3)*6,1),O=L.array;if(T!==null){const w=T.array;S=T.version;for(let P=0,V=0;P<b;P+=3){const I=w[P+0],z=w[P+1],W=w[P+2];O[V++]=I,O[V++]=z,O[V++]=z,O[V++]=W,O[V++]=W,O[V++]=I}}else{S=y.version;for(let w=0,P=0;w<b;w+=3){const V=w+0,I=w+1,z=w+2;O[P++]=V,O[P++]=I,O[P++]=I,O[P++]=z,O[P++]=z,O[P++]=V}}L.version=S;const D=o.get(E);D&&e.remove(D),o.set(E,L)}function v(E){const T=o.get(E);if(T){const y=E.index;y!==null&&T.version<y.version&&m(E)}else m(E);return o.get(E)}function x(){for(const E in s){const T=s[E].deref();T!==void 0&&f(T)}}return{get:h,update:g,getWireframeAttribute:v,dispose:x}}function _2(n,e,t){let r;function s(m){r=m}let o,u;function d(m){o=m.type,u=m.bytesPerElement}function f(m,v){n.drawElements(r,v,o,m*u),t.update(v,r,1)}function h(m,v,x){x!==0&&(n.drawElementsInstanced(r,v,o,m*u,x),t.update(v,r,x))}function g(m,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,o,m,0,x);let T=0;for(let y=0;y<x;y++)T+=v[y];t.update(T,r,1)}this.setMode=s,this.setIndex=d,this.render=f,this.renderInstances=h,this.renderMultiDraw=g}function y2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,u,d){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=d*(o/3);break;case n.LINES:t.lines+=d*(o/2);break;case n.LINE_STRIP:t.lines+=d*(o-1);break;case n.LINE_LOOP:t.lines+=d*o;break;case n.POINTS:t.points+=d*o;break;default:It("WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:r}}function S2(n,e,t){const r=new WeakMap,s=new rn;function o(u,d,f){const h=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==m){let V=function(){w.dispose(),r.delete(d),d.removeEventListener("dispose",V)};v!==void 0&&v.texture.dispose();const x=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,T=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],b=d.morphAttributes.color||[];let N=0;x===!0&&(N=1),E===!0&&(N=2),T===!0&&(N=3);let L=d.attributes.position.count*N,O=1;L>e.maxTextureSize&&(O=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const D=new Float32Array(L*O*4*m),w=new Vx(D,L,O,m);w.type=xr,w.needsUpdate=!0;const P=N*4;for(let I=0;I<m;I++){const z=y[I],W=S[I],Z=b[I],B=L*O*4*I;for(let le=0;le<z.count;le++){const re=le*P;x===!0&&(s.fromBufferAttribute(z,le),D[B+re+0]=s.x,D[B+re+1]=s.y,D[B+re+2]=s.z,D[B+re+3]=0),E===!0&&(s.fromBufferAttribute(W,le),D[B+re+4]=s.x,D[B+re+5]=s.y,D[B+re+6]=s.z,D[B+re+7]=0),T===!0&&(s.fromBufferAttribute(Z,le),D[B+re+8]=s.x,D[B+re+9]=s.y,D[B+re+10]=s.z,D[B+re+11]=Z.itemSize===4?s.w:1)}}v={count:m,texture:w,size:new Et(L,O)},r.set(d,v),d.addEventListener("dispose",V)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let x=0;for(let T=0;T<h.length;T++)x+=h[T];const E=d.morphTargetsRelative?1:1-x;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",h)}f.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}return{update:o}}function x2(n,e,t,r,s){let o=new WeakMap;function u(h){const g=s.render.frame,m=h.geometry,v=e.get(h,m);if(o.get(v)!==g&&(e.update(v),o.set(v,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==g&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),o.set(h,g))),h.isSkinnedMesh){const x=h.skeleton;o.get(x)!==g&&(x.update(),o.set(x,g))}return v}function d(){o=new WeakMap}function f(h){const g=h.target;g.removeEventListener("dispose",f),r.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:u,dispose:d}}const M2={[wx]:"LINEAR_TONE_MAPPING",[Tx]:"REINHARD_TONE_MAPPING",[Rx]:"CINEON_TONE_MAPPING",[Am]:"ACES_FILMIC_TONE_MAPPING",[Cx]:"AGX_TONE_MAPPING",[Px]:"NEUTRAL_TONE_MAPPING",[Ax]:"CUSTOM_TONE_MAPPING"};function E2(n,e,t,r,s,o){const u=new wr(e,t,{type:n,depthBuffer:s,stencilBuffer:o,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,f=null,h=null;const g=new Jr;g.setAttribute("position",new $n([-1,3,0,-1,-1,0,3,-1,0],3)),g.setAttribute("uv",new $n([0,2,0,0,2,0],2));const m=new cC({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Ua(g,m),x=new eM(-1,1,1,-1,0,1);let E=null,T=null,y=!1,S,b=null,N=[],L=!1;this.setSize=function(O,D){u.setSize(O,D),d!==null&&d.setSize(O,D),f!==null&&f.setSize(O,D);for(let w=0;w<N.length;w++){const P=N[w];P.setSize&&P.setSize(O,D)}},this.setEffects=function(O){N=O,L=N.length>0&&N[0].isRenderPass===!0;const D=u.width,w=u.height;N.length>0&&d===null&&(d=new wr(D,w,{type:Rr,depthBuffer:!1,stencilBuffer:!1}),f=new wr(D,w,{type:Rr,depthBuffer:!1,stencilBuffer:!1}));const P=s===!0&&N.some(V=>V.needsDepthTexture===!0);P!==(u.depthTexture!==null)&&(P===!0&&h===null&&(h=new go(D,w),o===!0&&(h.format=Da,h.type=mo)),u.dispose(),u.depthTexture=P?h:null,u.resolveDepthBuffer=P,u.storeMultisampledDepthBuffer=P);for(let V=0;V<N.length;V++){const I=N[V];I.setSize&&I.setSize(D,w),P&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(h)}},this.begin=function(O,D){if(y||O.toneMapping===Xr&&N.length===0)return!1;if(b=D,D!==null){const w=D.width,P=D.height;(u.width!==w||u.height!==P)&&this.setSize(w,P)}return L===!1&&O.setRenderTarget(u),S=O.toneMapping,O.toneMapping=Xr,!0},this.hasRenderPass=function(){return L},this.end=function(O,D){O.toneMapping=S,y=!0;let w=u,P=d;for(let V=0;V<N.length;V++){const I=N[V];I.enabled!==!1&&(I.render(O,P,w,D),I.needsSwap!==!1&&(w=P,P=P===d?f:d))}if(E!==O.outputColorSpace||T!==O.toneMapping){E=O.outputColorSpace,T=O.toneMapping,m.defines={},Tt.getTransfer(E)===Ut&&(m.defines.SRGB_TRANSFER="");const V=M2[T];V&&(m.defines[V]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=w.texture,O.setRenderTarget(b),O.render(v,x),b=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),d!==null&&d.dispose(),f!==null&&f.dispose(),g.dispose(),m.dispose()}}const aM=new Bn,sM=new go(1,1),oM=new Kx(1),lM=new Vx,uM=new GA,cM=new Yx,Ry=[],Ay=[],Cy=new Float32Array(16),Py=new Float32Array(9),Ly=new Float32Array(4);function xo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const s=e*t;let o=Ry[s];if(o===void 0&&(o=new Float32Array(s),Ry[s]=o),e!==0){r.toArray(o,0);for(let u=1,d=0;u!==e;++u)d+=t,n[u].toArray(o,d)}return o}function xn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function Mn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function ld(n,e){let t=Ay[e];t===void 0&&(t=new Int32Array(e),Ay[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function b2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function w2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2fv(this.addr,e),Mn(t,e)}}function T2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;n.uniform3fv(this.addr,e),Mn(t,e)}}function R2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4fv(this.addr,e),Mn(t,e)}}function A2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mn(t,e)}else{if(xn(t,r))return;Ly.set(r),n.uniformMatrix2fv(this.addr,!1,Ly),Mn(t,r)}}function C2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mn(t,e)}else{if(xn(t,r))return;Py.set(r),n.uniformMatrix3fv(this.addr,!1,Py),Mn(t,r)}}function P2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mn(t,e)}else{if(xn(t,r))return;Cy.set(r),n.uniformMatrix4fv(this.addr,!1,Cy),Mn(t,r)}}function L2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function D2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2iv(this.addr,e),Mn(t,e)}}function I2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;n.uniform3iv(this.addr,e),Mn(t,e)}}function N2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4iv(this.addr,e),Mn(t,e)}}function O2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function U2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2uiv(this.addr,e),Mn(t,e)}}function F2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;n.uniform3uiv(this.addr,e),Mn(t,e)}}function k2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4uiv(this.addr,e),Mn(t,e)}}function ud(n){return n.version===0&&(n.compareFunction=Hx,n.needsUpdate=!0),n}function B2(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?o=ud(sM):o=aM,t.setTexture2D(e||o,s)}function z2(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s),t.setTexture3D(e||uM,s)}function H2(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s);let o;this.type===n.SAMPLER_CUBE_SHADOW?o=ud(oM):o=cM,t.setTextureCube(e||o,s)}function G2(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s),t.setTexture2DArray(e||lM,s)}function V2(n){switch(n){case 5126:return b2;case 35664:return w2;case 35665:return T2;case 35666:return R2;case 35674:return A2;case 35675:return C2;case 35676:return P2;case 5124:case 35670:return L2;case 35667:case 35671:return D2;case 35668:case 35672:return I2;case 35669:case 35673:return N2;case 5125:return O2;case 36294:return U2;case 36295:return F2;case 36296:return k2;case 35678:case 36198:case 36298:case 36306:case 35682:return B2;case 35679:case 36299:case 36307:return z2;case 35680:case 36300:case 36308:case 36293:return H2;case 36289:case 36303:case 36311:case 36292:return G2}}function W2(n,e){n.uniform1fv(this.addr,e)}function $2(n,e){const t=xo(e,this.size,2);n.uniform2fv(this.addr,t)}function X2(n,e){const t=xo(e,this.size,3);n.uniform3fv(this.addr,t)}function q2(n,e){const t=xo(e,this.size,4);n.uniform4fv(this.addr,t)}function Y2(n,e){const t=xo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function K2(n,e){const t=xo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Z2(n,e){const t=xo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function j2(n,e){n.uniform1iv(this.addr,e)}function J2(n,e){n.uniform2iv(this.addr,e)}function Q2(n,e){n.uniform3iv(this.addr,e)}function e3(n,e){n.uniform4iv(this.addr,e)}function t3(n,e){n.uniform1uiv(this.addr,e)}function n3(n,e){n.uniform2uiv(this.addr,e)}function i3(n,e){n.uniform3uiv(this.addr,e)}function r3(n,e){n.uniform4uiv(this.addr,e)}function a3(n,e,t){const r=this.cache,s=e.length,o=ld(t,s);xn(r,o)||(n.uniform1iv(this.addr,o),Mn(r,o));let u;this.type===n.SAMPLER_2D_SHADOW?u=ud(sM):u=aM;for(let d=0;d!==s;++d)t.setTexture2D(e[d]||u,o[d])}function s3(n,e,t){const r=this.cache,s=e.length,o=ld(t,s);xn(r,o)||(n.uniform1iv(this.addr,o),Mn(r,o));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||uM,o[u])}function o3(n,e,t){const r=this.cache,s=e.length,o=ld(t,s);xn(r,o)||(n.uniform1iv(this.addr,o),Mn(r,o));let u;this.type===n.SAMPLER_CUBE_SHADOW?u=ud(oM):u=cM;for(let d=0;d!==s;++d)t.setTextureCube(e[d]||u,o[d])}function l3(n,e,t){const r=this.cache,s=e.length,o=ld(t,s);xn(r,o)||(n.uniform1iv(this.addr,o),Mn(r,o));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||lM,o[u])}function u3(n){switch(n){case 5126:return W2;case 35664:return $2;case 35665:return X2;case 35666:return q2;case 35674:return Y2;case 35675:return K2;case 35676:return Z2;case 5124:case 35670:return j2;case 35667:case 35671:return J2;case 35668:case 35672:return Q2;case 35669:case 35673:return e3;case 5125:return t3;case 36294:return n3;case 36295:return i3;case 36296:return r3;case 35678:case 36198:case 36298:case 36306:case 35682:return a3;case 35679:case 36299:case 36307:return s3;case 35680:case 36300:case 36308:case 36293:return o3;case 36289:case 36303:case 36311:case 36292:return l3}}class c3{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=V2(t.type)}}class d3{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=u3(t.type)}}class f3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const s=this.seq;for(let o=0,u=s.length;o!==u;++o){const d=s[o];d.setValue(e,t[d.id],r)}}}const Vh=/(\w+)(\])?(\[|\.)?/g;function Dy(n,e){n.seq.push(e),n.map[e.id]=e}function h3(n,e,t){const r=n.name,s=r.length;for(Vh.lastIndex=0;;){const o=Vh.exec(r),u=Vh.lastIndex;let d=o[1];const f=o[2]==="]",h=o[3];if(f&&(d=d|0),h===void 0||h==="["&&u+2===s){Dy(t,h===void 0?new c3(d,n,e):new d3(d,n,e));break}else{let m=t.map[d];m===void 0&&(m=new f3(d),Dy(t,m)),t=m}}}class zc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(t,u),f=e.getUniformLocation(t,d.name);h3(d,f,this)}const s=[],o=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(u):o.push(u);s.length>0&&(this.seq=s.concat(o))}setValue(e,t,r,s){const o=this.map[t];o!==void 0&&o.setValue(e,r,s)}setOptional(e,t,r){const s=t[r];s!==void 0&&this.setValue(e,r,s)}static upload(e,t,r,s){for(let o=0,u=t.length;o!==u;++o){const d=t[o],f=r[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,s)}}static seqWithValue(e,t){const r=[];for(let s=0,o=e.length;s!==o;++s){const u=e[s];u.id in t&&r.push(u)}return r}}function Iy(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const p3=37297;let m3=0;function g3(n,e){const t=n.split(`
`),r=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=s;u<o;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const Ny=new ft;function v3(n){Tt._getMatrix(Ny,Tt.workingColorSpace,n);const e=`mat3( ${Ny.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(n)){case jc:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Oy(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),o=(n.getShaderInfoLog(e)||"").trim();if(r&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+o+`

`+g3(n.getShaderSource(e),d)}else return o}function _3(n,e){const t=v3(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const y3={[wx]:"Linear",[Tx]:"Reinhard",[Rx]:"Cineon",[Am]:"ACESFilmic",[Cx]:"AgX",[Px]:"Neutral",[Ax]:"Custom"};function S3(n,e){const t=y3[e];return t===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rc=new me;function x3(){Tt.getLuminanceCoefficients(Rc);const n=Rc.x.toFixed(4),e=Rc.y.toFixed(4),t=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vl).join(`
`)}function E3(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function b3(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<r;s++){const o=n.getActiveAttrib(e,s),u=o.name;let d=1;o.type===n.FLOAT_MAT2&&(d=2),o.type===n.FLOAT_MAT3&&(d=3),o.type===n.FLOAT_MAT4&&(d=4),t[u]={type:o.type,location:n.getAttribLocation(e,u),locationSize:d}}return t}function vl(n){return n!==""}function Uy(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Fy(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const w3=/^[ \t]*#include +<([\w\d./]+)>/gm;function pm(n){return n.replace(w3,T3)}function T3(n,e){const t=gt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return pm(t)}const R3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ky(n){return n.replace(R3,A3)}function A3(n,e,t,r){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function By(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const C3={[Nc]:"SHADOWMAP_TYPE_PCF",[ml]:"SHADOWMAP_TYPE_VSM"};function P3(n){return C3[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const L3={[Pl]:"ENVMAP_MODE_REFRACTION"};function D3(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":L3[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const I3={[bx]:"ENVMAP_BLENDING_MULTIPLY",[vA]:"ENVMAP_BLENDING_MIX",[_A]:"ENVMAP_BLENDING_ADD"};function N3(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":I3[n.combine]||"ENVMAP_BLENDING_NONE"}function O3(n,e,t,r){const s=n.getContext(),o=t.defines;let u=t.vertexShader,d=t.fragmentShader;const f=P3(t),h=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",g=D3(t),m=N3(t),v=M3(t),x=E3(o),E=s.createProgram();let T,y,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(T=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(vl).join(`
`),T.length>0&&(T+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(vl).join(`
`),y.length>0&&(y+=`
`)):(T=[By(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vl).join(`
`),y=[By(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+m:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xr?"#define TONE_MAPPING":"",t.toneMapping!==Xr?gt.tonemapping_pars_fragment:"",t.toneMapping!==Xr?S3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,_3("linearToOutputTexel",t.outputColorSpace),x3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vl).join(`
`)),u=pm(u),u=Uy(u,t),u=Fy(u,t),d=pm(d),d=Uy(d,t),d=Fy(d,t),u=ky(u),d=ky(d),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,T=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,y=["#define varying in",t.glslVersion===Z_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Z_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=S+T+u,N=S+y+d,L=Iy(s,s.VERTEX_SHADER,b),O=Iy(s,s.FRAGMENT_SHADER,N);s.attachShader(E,L),s.attachShader(E,O),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function D(I){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(E)||"",W=s.getShaderInfoLog(L)||"",Z=s.getShaderInfoLog(O)||"",B=z.trim(),le=W.trim(),re=Z.trim();let ne=!0,K=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,L,O);else{const q=Oy(s,L,"vertex"),J=Oy(s,O,"fragment");It("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+q+`
`+J)}else B!==""?ct("WebGLProgram: Program Info Log:",B):(le===""||re==="")&&(K=!1);K&&(I.diagnostics={runnable:ne,programLog:B,vertexShader:{log:le,prefix:T},fragmentShader:{log:re,prefix:y}})}s.deleteShader(L),s.deleteShader(O),w=new zc(s,E),P=b3(s,E)}let w;this.getUniforms=function(){return w===void 0&&D(this),w};let P;this.getAttributes=function(){return P===void 0&&D(this),P};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(E,p3)),V},this.destroy=function(){r.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m3++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=L,this.fragmentShader=O,this}let U3=0;class F3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new k3(e),t.set(e,r)),r}}class k3{constructor(e){this.id=U3++,this.code=e,this.usedTimes=0}}function B3(n){return n===fs||n===Yc||n===Kc}function z3(n,e,t,r,s,o){const u=new Fm,d=new F3,f=new Set,h=[],g=new Map,m=r.logarithmicDepthBuffer,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return f.add(w),w===0?"uv":`uv${w}`}function E(w,P,V,I,z,W){const Z=I.fog,B=z.geometry,le=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?I.environment:null,re=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,ne=e.get(w.envMap||le,re),K=v[w.type];let q=r.precision;w.precision!==null&&(q=r.getMaxPrecision(w.precision),q!==w.precision&&ct("WebGLProgram.getParameters:",w.precision,"not supported, using",q,"instead."));const J=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,k=J!==void 0?J.length:0;let ie=0;B.morphAttributes.position!==void 0&&(ie=1),B.morphAttributes.normal!==void 0&&(ie=2),B.morphAttributes.color!==void 0&&(ie=3);let Ce,se,xe,Me;if(K){const ke=gr[K];Ce=ke.vertexShader,se=ke.fragmentShader}else{Ce=w.vertexShader,se=w.fragmentShader;const ke=d.getVertexShaderStage(w),St=d.getFragmentShaderStage(w);d.update(w,ke,St),xe=ke.id,Me=St.id}const Re=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),Ue=z.isInstancedMesh===!0,ut=z.isBatchedMesh===!0,Je=!!w.map,pt=!!w.matcap,yt=!!ne,ot=yt&&ne.isPMREMTexture===!0,Ft=!!w.aoMap,kt=!!w.lightMap,Xt=!!w.bumpMap&&w.wireframe===!1,vt=!!w.normalMap,hn=!!w.displacementMap,Nt=!!w.emissiveMap,zt=!!w.metalnessMap,an=!!w.roughnessMap,pn=w.anisotropy>0,j=w.clearcoat>0,mn=w.diffuseRoughness>0,bt=w.dispersion>0,Ct=w.retroreflectivity>0,De=w.iridescence>0,Ht=w.sheen>0,Ze=w.transmission>0,tt=pn&&!!w.anisotropyMap,F=j&&!!w.clearcoatMap,R=j&&!!w.clearcoatNormalMap,ue=j&&!!w.clearcoatRoughnessMap,G=mn&&!!w.diffuseRoughnessMap,X=De&&!!w.iridescenceMap,ce=De&&!!w.iridescenceThicknessMap,oe=Ht&&!!w.sheenColorMap,Q=Ht&&!!w.sheenRoughnessMap,te=!!w.specularMap,Se=!!w.specularColorMap,U=!!w.specularIntensityMap,ve=Ze&&!!w.transmissionMap,pe=Ze&&!!w.thicknessMap,be=!!w.gradientMap,Ae=!!w.alphaMap,Le=w.alphaTest>0,Xe=!!w.alphaHash,dt=!!w.extensions;let we=Xr;w.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(we=n.toneMapping);const Qe=ot?ne.isCompressedCubeTexture?ne.image[0].mipmaps:ne.mipmaps:null,st={shaderID:K,shaderType:w.type,shaderName:w.name,vertexShader:Ce,fragmentShader:se,defines:w.defines,customVertexShaderID:xe,customFragmentShaderID:Me,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:q,batching:ut,batchingColor:ut&&z._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&z.instanceColor!==null,instancingMorph:Ue&&z.morphTexture!==null,outputColorSpace:Re===null?n.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:Je,matcap:pt,envMap:yt,envMapMode:yt&&ne.mapping,envMapPMREM:ot,envMapMaxLod:ot?Qe.length-1:null,envMapSize:ot?Qe[0].width:null,aoMap:Ft,lightMap:kt,bumpMap:Xt,normalMap:vt,displacementMap:hn,emissiveMap:Nt,normalMapObjectSpace:vt&&w.normalMapType===xA,normalMapTangentSpace:vt&&w.normalMapType===cm,packedNormalMap:vt&&w.normalMapType===cm&&B3(w.normalMap.format),metalnessMap:zt,roughnessMap:an,anisotropy:pn,anisotropyMap:tt,clearcoat:j,clearcoatMap:F,clearcoatNormalMap:R,clearcoatRoughnessMap:ue,diffuseRoughness:mn,diffuseRoughnessMap:G,dispersion:bt,retroreflection:Ct,iridescence:De,iridescenceMap:X,iridescenceThicknessMap:ce,sheen:Ht,sheenColorMap:oe,sheenRoughnessMap:Q,specularMap:te,specularColorMap:Se,specularIntensityMap:U,transmission:Ze,transmissionMap:ve,thicknessMap:pe,gradientMap:be,opaque:w.transparent===!1&&w.blending===Ml&&w.alphaToCoverage===!1,alphaMap:Ae,alphaTest:Le,alphaHash:Xe,combine:w.combine,mapUv:Je&&x(w.map.channel),aoMapUv:Ft&&x(w.aoMap.channel),lightMapUv:kt&&x(w.lightMap.channel),bumpMapUv:Xt&&x(w.bumpMap.channel),normalMapUv:vt&&x(w.normalMap.channel),displacementMapUv:hn&&x(w.displacementMap.channel),emissiveMapUv:Nt&&x(w.emissiveMap.channel),metalnessMapUv:zt&&x(w.metalnessMap.channel),roughnessMapUv:an&&x(w.roughnessMap.channel),anisotropyMapUv:tt&&x(w.anisotropyMap.channel),clearcoatMapUv:F&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:R&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&x(w.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:G&&x(w.diffuseRoughnessMap.channel),iridescenceMapUv:X&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Q&&x(w.sheenRoughnessMap.channel),specularMapUv:te&&x(w.specularMap.channel),specularColorMapUv:Se&&x(w.specularColorMap.channel),specularIntensityMapUv:U&&x(w.specularIntensityMap.channel),transmissionMapUv:ve&&x(w.transmissionMap.channel),thicknessMapUv:pe&&x(w.thicknessMap.channel),alphaMapUv:Ae&&x(w.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(vt||pn),vertexNormals:!!B.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!B.attributes.uv&&(Je||Ae),fog:!!Z,useFog:w.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||B.attributes.normal===void 0&&vt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ye,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:ie,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:W.filter(ke=>ke.texture!==null).length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:we,decodeVideoTexture:Je&&w.map.isVideoTexture===!0&&Tt.getTransfer(w.map.colorSpace)===Ut,decodeVideoTextureEmissive:Nt&&w.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(w.emissiveMap.colorSpace)===Ut,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===_r,flipSided:w.side===ii,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:dt&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&w.extensions.multiDraw===!0||ut)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return st.vertexUv1s=f.has(1),st.vertexUv2s=f.has(2),st.vertexUv3s=f.has(3),f.clear(),st}function T(w){const P=[];if(w.shaderID?P.push(w.shaderID):(P.push(w.customVertexShaderID),P.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)P.push(V),P.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(y(P,w),S(P,w),P.push(n.outputColorSpace)),P.push(w.customProgramCacheKey),P.join()}function y(w,P){w.push(P.precision),w.push(P.outputColorSpace),w.push(P.envMapMode),w.push(P.envMapPMREM),w.push(P.envMapMaxLod),w.push(P.envMapSize),w.push(P.mapUv),w.push(P.alphaMapUv),w.push(P.lightMapUv),w.push(P.aoMapUv),w.push(P.bumpMapUv),w.push(P.normalMapUv),w.push(P.displacementMapUv),w.push(P.emissiveMapUv),w.push(P.metalnessMapUv),w.push(P.roughnessMapUv),w.push(P.anisotropyMapUv),w.push(P.clearcoatMapUv),w.push(P.clearcoatNormalMapUv),w.push(P.clearcoatRoughnessMapUv),w.push(P.diffuseRoughnessMapUv),w.push(P.iridescenceMapUv),w.push(P.iridescenceThicknessMapUv),w.push(P.sheenColorMapUv),w.push(P.sheenRoughnessMapUv),w.push(P.specularMapUv),w.push(P.specularColorMapUv),w.push(P.specularIntensityMapUv),w.push(P.transmissionMapUv),w.push(P.thicknessMapUv),w.push(P.combine),w.push(P.fogExp2),w.push(P.sizeAttenuation),w.push(P.morphTargetsCount),w.push(P.numSunLights),w.push(P.numDirLights),w.push(P.numPointLights),w.push(P.numSpotLights),w.push(P.numSpotLightMaps),w.push(P.numHemiLights),w.push(P.numRectAreaLights),w.push(P.numSunLightShadows),w.push(P.numDirLightShadows),w.push(P.numPointLightShadows),w.push(P.numSpotLightShadows),w.push(P.numSpotLightShadowsWithMaps),w.push(P.numLightProbes),w.push(P.numLightProbeGrids),w.push(P.shadowMapType),w.push(P.toneMapping),w.push(P.numClippingPlanes),w.push(P.numClipIntersection),w.push(P.depthPacking)}function S(w,P){u.disableAll(),P.instancing&&u.enable(0),P.instancingColor&&u.enable(1),P.instancingMorph&&u.enable(2),P.matcap&&u.enable(3),P.envMap&&u.enable(4),P.normalMapObjectSpace&&u.enable(5),P.normalMapTangentSpace&&u.enable(6),P.clearcoat&&u.enable(7),P.iridescence&&u.enable(8),P.alphaTest&&u.enable(9),P.vertexColors&&u.enable(10),P.vertexAlphas&&u.enable(11),P.vertexUv1s&&u.enable(12),P.vertexUv2s&&u.enable(13),P.vertexUv3s&&u.enable(14),P.vertexTangents&&u.enable(15),P.anisotropy&&u.enable(16),P.alphaHash&&u.enable(17),P.batching&&u.enable(18),P.dispersion&&u.enable(19),P.retroreflection&&u.enable(24),P.diffuseRoughness&&u.enable(25),P.batchingColor&&u.enable(20),P.gradientMap&&u.enable(21),P.packedNormalMap&&u.enable(22),P.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reversedDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),P.numLightProbeGrids>0&&u.enable(22),P.hasPositionAttribute&&u.enable(23),w.push(u.mask)}function b(w){const P=v[w.type];let V;if(P){const I=gr[P];V=oC.clone(I.uniforms)}else V=w.uniforms;return V}function N(w,P){let V=g.get(P);return V!==void 0?++V.usedTimes:(V=new O3(n,P,w,s),h.push(V),g.set(P,V)),V}function L(w){if(--w.usedTimes===0){const P=h.indexOf(w);h[P]=h[h.length-1],h.pop(),g.delete(w.cacheKey),w.destroy()}}function O(w){d.remove(w)}function D(){d.dispose()}return{getParameters:E,getProgramCacheKey:T,getUniforms:b,acquireProgram:N,releaseProgram:L,releaseShaderCache:O,programs:h,dispose:D}}function H3(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let d=n.get(u);return d===void 0&&(d={},n.set(u,d)),d}function r(u){n.delete(u)}function s(u,d,f){n.get(u)[d]=f}function o(){n=new WeakMap}return{has:e,get:t,remove:r,update:s,dispose:o}}function G3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function zy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hy(){const n=[];let e=0;const t=[],r=[],s=[];function o(){e=0,t.length=0,r.length=0,s.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function d(v,x,E,T,y,S){let b=n[e];return b===void 0?(b={id:v.id,object:v,geometry:x,material:E,materialVariant:u(v),groupOrder:T,renderOrder:v.renderOrder,z:y,group:S},n[e]=b):(b.id=v.id,b.object=v,b.geometry=x,b.material=E,b.materialVariant=u(v),b.groupOrder=T,b.renderOrder=v.renderOrder,b.z=y,b.group=S),e++,b}function f(v,x,E,T,y,S,b){b.reversedDepth===!0&&(y=-y);const N=d(v,x,E,T,y,S);E.transmission>0?r.push(N):E.transparent===!0?s.push(N):t.push(N)}function h(v,x,E,T,y,S){const b=d(v,x,E,T,y,S);E.transmission>0?r.unshift(b):E.transparent===!0?s.unshift(b):t.unshift(b)}function g(v,x){t.length>1&&t.sort(v||G3),r.length>1&&r.sort(x||zy),s.length>1&&s.sort(x||zy)}function m(){for(let v=e,x=n.length;v<x;v++){const E=n[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:s,init:o,push:f,unshift:h,finish:m,sort:g}}function V3(){let n=new WeakMap;function e(r,s){const o=n.get(r);let u;return o===void 0?(u=new Hy,n.set(r,[u])):s>=o.length?(u=new Hy,o.push(u)):u=o[s],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function W3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new me,color:new Mt};break;case"SpotLight":t={position:new me,direction:new me,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new me,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new me,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":t={color:new Mt,position:new me,halfWidth:new me,halfHeight:new me};break}return n[e.id]=t,t}}}function $3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let X3=0;function q3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Y3(n){const e=new W3,t=$3(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new me);const s=new me,o=new en,u=new en;function d(h){let g=0,m=0,v=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let x=0,E=0,T=0,y=0,S=0,b=0,N=0,L=0,O=0,D=0,w=0,P=0,V=0,I=0;h.sort(q3);for(let W=0,Z=h.length;W<Z;W++){const B=h[W],le=B.color,re=B.intensity,ne=B.distance;let K=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===fs?K=B.shadow.map.texture:K=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)g+=le.r*re,m+=le.g*re,v+=le.b*re;else if(B.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(B.sh.coefficients[q],re);I++}else if(B.isSunLight){const q=e.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const J=B.shadow,k=t.get(B);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),r.sunShadow[E]=k,r.sunShadowMap[E]=K;const ie=J.getViewportCount();for(let Ce=0;Ce<ie;Ce++)r.sunShadowMatrix[T+Ce]=J.getMatrix(Ce),r.sunShadowCascade[T+Ce]=J._cascadeData[Ce];T+=ie,E++}r.sun[x]=q,x++}else if(B.isDirectionalLight){const q=e.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const J=B.shadow,k=t.get(B);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,r.directionalShadow[y]=k,r.directionalShadowMap[y]=K,r.directionalShadowMatrix[y]=B.shadow.matrix,O++}r.directional[y]=q,y++}else if(B.isSpotLight){const q=e.get(B);q.position.setFromMatrixPosition(B.matrixWorld),q.color.copy(le).multiplyScalar(re),q.distance=ne,q.coneCos=Math.cos(B.angle),q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),q.decay=B.decay,r.spot[b]=q;const J=B.shadow;if(B.map&&(r.spotLightMap[P]=B.map,P++,J.updateMatrices(B),B.castShadow&&V++),r.spotLightMatrix[b]=J.matrix,B.castShadow){const k=t.get(B);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,r.spotShadow[b]=k,r.spotShadowMap[b]=K,w++}b++}else if(B.isRectAreaLight){const q=e.get(B);q.color.copy(le).multiplyScalar(re),q.halfWidth.set(B.width*.5,0,0),q.halfHeight.set(0,B.height*.5,0),r.rectArea[N]=q,N++}else if(B.isPointLight){const q=e.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity),q.distance=B.distance,q.decay=B.decay,B.castShadow){const J=B.shadow,k=t.get(B);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,k.shadowCameraNear=J.camera.near,k.shadowCameraFar=J.camera.far,r.pointShadow[S]=k,r.pointShadowMap[S]=K,r.pointShadowMatrix[S]=B.shadow.matrix,D++}r.point[S]=q,S++}else if(B.isHemisphereLight){const q=e.get(B);q.skyColor.copy(B.color).multiplyScalar(re),q.groundColor.copy(B.groundColor).multiplyScalar(re),r.hemi[L]=q,L++}}N>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=m,r.ambient[2]=v;const z=r.hash;(z.sunLength!==x||z.directionalLength!==y||z.pointLength!==S||z.spotLength!==b||z.rectAreaLength!==N||z.hemiLength!==L||z.numSunShadows!==E||z.numDirectionalShadows!==O||z.numPointShadows!==D||z.numSpotShadows!==w||z.numSpotMaps!==P||z.numLightProbes!==I)&&(r.sun.length=x,r.directional.length=y,r.spot.length=b,r.rectArea.length=N,r.point.length=S,r.hemi.length=L,r.sunShadow.length=E,r.sunShadowMap.length=E,r.sunShadowMatrix.length=T,r.sunShadowCascade.length=T,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.directionalShadowMatrix.length=O,r.pointShadow.length=D,r.pointShadowMap.length=D,r.pointShadowMatrix.length=D,r.spotShadow.length=w,r.spotShadowMap.length=w,r.spotLightMatrix.length=w+P-V,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=I,z.sunLength=x,z.directionalLength=y,z.pointLength=S,z.spotLength=b,z.rectAreaLength=N,z.hemiLength=L,z.numSunShadows=E,z.numDirectionalShadows=O,z.numPointShadows=D,z.numSpotShadows=w,z.numSpotMaps=P,z.numLightProbes=I,r.version=X3++)}function f(h,g){let m=0,v=0,x=0,E=0,T=0,y=0;const S=g.matrixWorldInverse;for(let b=0,N=h.length;b<N;b++){const L=h[b];if(L.isSunLight){const O=r.sun[m];O.direction.setFromMatrixPosition(L.matrixWorld),O.direction.transformDirection(S),m++}else if(L.isDirectionalLight){const O=r.directional[v];O.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(s),O.direction.transformDirection(S),v++}else if(L.isSpotLight){const O=r.spot[E];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(S),O.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(s),O.direction.transformDirection(S),E++}else if(L.isRectAreaLight){const O=r.rectArea[T];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(S),u.identity(),o.copy(L.matrixWorld),o.premultiply(S),u.extractRotation(o),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),O.halfWidth.applyMatrix4(u),O.halfHeight.applyMatrix4(u),T++}else if(L.isPointLight){const O=r.point[x];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const O=r.hemi[y];O.direction.setFromMatrixPosition(L.matrixWorld),O.direction.transformDirection(S),y++}}}return{setup:d,setupView:f,state:r}}function Gy(n){const e=new Y3(n),t=[],r=[],s=[];function o(m){g.camera=m,t.length=0,r.length=0,s.length=0}function u(m){m.isLightProbeGrid?s.push(m):t.push(m)}function d(m){r.push(m)}function f(){e.setup(t),s.sort((m,v)=>m.priority-v.priority||m.id-v.id)}function h(m){e.setupView(t,m)}const g={lightsArray:t,shadowsArray:r,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:g,setupLights:f,setupLightsView:h,pushLight:u,pushShadow:d}}function K3(n){let e=new WeakMap;function t(s,o=0){const u=e.get(s);let d;return u===void 0?(d=new Gy(n),e.set(s,[d])):o>=u.length?(d=new Gy(n),u.push(d)):d=u[o],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const Z3=`void main() {
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
}`,J3=[new me(1,0,0),new me(-1,0,0),new me(0,1,0),new me(0,-1,0),new me(0,0,1),new me(0,0,-1)],Q3=[new me(0,-1,0),new me(0,-1,0),new me(0,0,1),new me(0,0,-1),new me(0,-1,0),new me(0,-1,0)],Vy=new en,ul=new me,Wh=new me;function eD(n,e,t){let r=new Il;const s=new Et,o=new Et,u=new rn,d=new fC,f=new hC,h={},g=t.maxTextureSize,m={[ds]:ii,[ii]:ds,[_r]:_r},v=new hs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:Z3,fragmentShader:j3}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new Jr;E.setAttribute("position",new cs(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ua(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let S=this.type;this.render=function(D,w,P){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;this.type===xx&&(ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Nc);const V=n.getRenderTarget(),I=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),W=n.state;W.setBlending(lo),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const Z=S!==this.type;Z&&w.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(le=>le.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,le=D.length;B<le;B++){const re=D[B],ne=re.shadow;if(ne===void 0){ct("WebGLShadowMap:",re,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;s.copy(ne.mapSize);const K=ne.getFrameExtents();s.multiply(K),o.copy(ne.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(o.x=Math.floor(g/K.x),s.x=o.x*K.x,ne.mapSize.x=o.x),s.y>g&&(o.y=Math.floor(g/K.y),s.y=o.y*K.y,ne.mapSize.y=o.y));const q=n.state.buffers.depth.getReversed();if(ne.camera._reversedDepth=q,ne.map===null||Z===!0){if(ne.map!==null&&(ne.map.depthTexture!==null&&(ne.map.depthTexture.dispose(),ne.map.depthTexture=null),ne.map.dispose()),this.type===ml){if(re.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ne.map=new wr(s.x,s.y,{format:fs,type:Rr,minFilter:ti,magFilter:ti,generateMipmaps:!1}),ne.map.texture.name=re.name+".shadowMap",ne.map.depthTexture=new go(s.x,s.y,xr),ne.map.depthTexture.name=re.name+".shadowMapDepth",ne.map.depthTexture.format=Oa,ne.map.depthTexture.compareFunction=null,ne.map.depthTexture.minFilter=Cn,ne.map.depthTexture.magFilter=Cn}else re.isPointLight?(ne.map=new Vm(s.x),ne.map.depthTexture=new Kx(s.x,Tr)):(ne.map=new wr(s.x,s.y),ne.map.depthTexture=new go(s.x,s.y,Tr)),ne.map.depthTexture.name=re.name+".shadowMap",ne.map.depthTexture.format=Oa,this.type===Nc?(ne.map.depthTexture.compareFunction=q?zx:Bx,ne.map.depthTexture.minFilter=ti,ne.map.depthTexture.magFilter=ti):(ne.map.depthTexture.compareFunction=null,ne.map.depthTexture.minFilter=Cn,ne.map.depthTexture.magFilter=Cn);ne.camera.updateProjectionMatrix()}ne.map.isWebGLCubeRenderTarget!==!0&&(ne.map.width!==s.x||ne.map.height!==s.y)&&ne.map.setSize(s.x,s.y);const J=ne.map.isWebGLCubeRenderTarget?6:ne.getViewportCount();re.isPointLight!==!0&&ne.updateMatrices(re,P);const k=(ne.camera.layers.mask&4294967294)!==0?ne.camera.layers:P.layers;for(let ie=0;ie<J;ie++){const Ce=ne.getCamera(ie);if(re.isPointLight){const se=ne.camera,xe=ne.matrix,Me=re.distance||se.far;Me!==se.far&&(se.far=Me,se.updateProjectionMatrix()),ul.setFromMatrixPosition(re.matrixWorld),se.position.copy(ul),Wh.copy(se.position),Wh.add(J3[ie]),se.up.copy(Q3[ie]),se.lookAt(Wh),se.updateMatrixWorld(),xe.makeTranslation(-ul.x,-ul.y,-ul.z),Vy.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),ne._frustum.setFromProjectionMatrix(Vy,se.coordinateSystem,se.reversedDepth)}if(ne.map.isWebGLCubeRenderTarget)n.setRenderTarget(ne.map,ie),n.clear();else{ie===0&&(n.setRenderTarget(ne.map),n.clear());const se=ne.getViewport(ie);u.set(o.x*se.x,o.y*se.y,o.x*se.z,o.y*se.w),W.viewport(u)}r=ne.getFrustum(ie),L(w,P,Ce,re,k,this.type)}ne.isPointLightShadow!==!0&&this.type===ml&&b(ne,P),ne.needsUpdate=!1}S=this.type,y.needsUpdate=!1,n.setRenderTarget(V,I,z)};function b(D,w){const P=e.update(T);v.defines.VSM_SAMPLES!==D.blurSamples&&(v.defines.VSM_SAMPLES=D.blurSamples,x.defines.VSM_SAMPLES=D.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),D.mapPass===null?D.mapPass=new wr(s.x,s.y,{format:fs,type:Rr}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),v.uniforms.shadow_pass.value=D.map.depthTexture,v.uniforms.resolution.value.set(D.map.width,D.map.height),v.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(w,null,P,v,T,null),x.uniforms.shadow_pass.value=D.mapPass.texture,x.uniforms.resolution.value.set(D.map.width,D.map.height),x.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(w,null,P,x,T,null)}function N(D,w,P,V){let I=null;const z=P.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(z!==void 0)I=z;else if(I=P.isPointLight===!0?f:d,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const W=I.uuid,Z=w.uuid;let B=h[W];B===void 0&&(B={},h[W]=B);let le=B[Z];le===void 0&&(le=I.clone(),B[Z]=le,w.addEventListener("dispose",O)),I=le}if(I.visible=w.visible,I.wireframe=w.wireframe,V===ml?I.side=w.shadowSide!==null?w.shadowSide:w.side:I.side=w.shadowSide!==null?w.shadowSide:m[w.side],I.alphaMap=w.alphaMap,I.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,I.map=w.map,I.clipShadows=w.clipShadows,I.clippingPlanes=w.clippingPlanes,I.clipIntersection=w.clipIntersection,I.displacementMap=w.displacementMap,I.displacementScale=w.displacementScale,I.displacementBias=w.displacementBias,I.wireframeLinewidth=w.wireframeLinewidth,I.linewidth=w.linewidth,P.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const W=n.properties.get(I);W.light=P}return I}function L(D,w,P,V,I,z){if(D.visible===!1)return;if(D.layers.test(I)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&z===ml)&&(!D.frustumCulled||D.intersectsFrustum(r))){D.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,D.matrixWorld);const B=e.update(D),le=D.material;if(Array.isArray(le)){const re=B.groups;for(let ne=0,K=re.length;ne<K;ne++){const q=re[ne],J=le[q.materialIndex];if(J&&J.visible){const k=N(D,J,V,z);D.onBeforeShadow(n,D,w,P,B,k,q),n.renderBufferDirect(P,null,B,k,D,q),D.onAfterShadow(n,D,w,P,B,k,q)}}}else if(le.visible){const re=N(D,le,V,z);D.onBeforeShadow(n,D,w,P,B,re,null),n.renderBufferDirect(P,null,B,re,D,null),D.onAfterShadow(n,D,w,P,B,re,null)}}const Z=D.children;for(let B=0,le=Z.length;B<le;B++)L(Z[B],w,P,V,I,z)}function O(D){D.target.removeEventListener("dispose",O);for(const P in h){const V=h[P],I=D.target.uuid;I in V&&(V[I].dispose(),delete V[I])}}}function tD(n,e){function t(){let U=!1;const ve=new rn;let pe=null;const be=new rn(0,0,0,0);return{setMask:function(Ae){pe!==Ae&&!U&&(n.colorMask(Ae,Ae,Ae,Ae),pe=Ae)},setLocked:function(Ae){U=Ae},setClear:function(Ae,Le,Xe,dt,we){we===!0&&(Ae*=dt,Le*=dt,Xe*=dt),ve.set(Ae,Le,Xe,dt),be.equals(ve)===!1&&(n.clearColor(Ae,Le,Xe,dt),be.copy(ve))},reset:function(){U=!1,pe=null,be.set(-1,0,0,0)}}}function r(){let U=!1,ve=!1,pe=null,be=null,Ae=null;return{setReversed:function(Le){if(ve!==Le){const Xe=e.get("EXT_clip_control");Le?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),ve=Le;const dt=Ae;Ae=null,this.setClear(dt)}},getReversed:function(){return ve},setTest:function(Le){Le?ye(n.DEPTH_TEST):Ue(n.DEPTH_TEST)},setMask:function(Le){pe!==Le&&!U&&(n.depthMask(Le),pe=Le)},setFunc:function(Le){if(ve&&(Le=DA[Le]),be!==Le){switch(Le){case Tp:n.depthFunc(n.NEVER);break;case Rp:n.depthFunc(n.ALWAYS);break;case Ap:n.depthFunc(n.LESS);break;case Cl:n.depthFunc(n.LEQUAL);break;case Cp:n.depthFunc(n.EQUAL);break;case Pp:n.depthFunc(n.GEQUAL);break;case Lp:n.depthFunc(n.GREATER);break;case Dp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}be=Le}},setLocked:function(Le){U=Le},setClear:function(Le){Ae!==Le&&(Ae=Le,ve&&(Le=1-Le),n.clearDepth(Le))},reset:function(){U=!1,pe=null,be=null,Ae=null,ve=!1}}}function s(){let U=!1,ve=null,pe=null,be=null,Ae=null,Le=null,Xe=null,dt=null,we=null;return{setTest:function(Qe){U||(Qe?ye(n.STENCIL_TEST):Ue(n.STENCIL_TEST))},setMask:function(Qe){ve!==Qe&&!U&&(n.stencilMask(Qe),ve=Qe)},setFunc:function(Qe,st,ke){(pe!==Qe||be!==st||Ae!==ke)&&(n.stencilFunc(Qe,st,ke),pe=Qe,be=st,Ae=ke)},setOp:function(Qe,st,ke){(Le!==Qe||Xe!==st||dt!==ke)&&(n.stencilOp(Qe,st,ke),Le=Qe,Xe=st,dt=ke)},setLocked:function(Qe){U=Qe},setClear:function(Qe){we!==Qe&&(n.clearStencil(Qe),we=Qe)},reset:function(){U=!1,ve=null,pe=null,be=null,Ae=null,Le=null,Xe=null,dt=null,we=null}}}const o=new t,u=new r,d=new s;let f={};const h=new WeakMap;let g={},m={},v={},x=new WeakMap,E=[],T=null,y=!1,S=null,b=null,N=null,L=null,O=null,D=null,w=null,P=new Mt(0,0,0),V=0,I=!1,z=null,W=null,Z=null,B=null,le=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,K=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),ne=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),ne=K>=2);let J=null,k={};const ie=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),se=new rn().fromArray(ie),xe=new rn().fromArray(Ce);function Me(U,ve,pe,be){const Ae=new Uint8Array(4),Le=n.createTexture();n.bindTexture(U,Le),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<pe;Xe++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ve,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(ve+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return Le}const Re={};Re[n.TEXTURE_2D]=Me(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=Me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[n.TEXTURE_2D_ARRAY]=Me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=Me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ye(n.DEPTH_TEST),u.setFunc(Cl),Xt(!1),vt(X_),ye(n.CULL_FACE),Ft(lo);function ye(U){g[U]!==!0&&(n.enable(U),g[U]=!0)}function Ue(U){g[U]!==!1&&(n.disable(U),g[U]=!1)}function ut(U,ve){return v[U]!==ve?(n.bindFramebuffer(U,ve),v[U]=ve,U===n.DRAW_FRAMEBUFFER&&(v[n.FRAMEBUFFER]=ve),U===n.FRAMEBUFFER&&(v[n.DRAW_FRAMEBUFFER]=ve),!0):!1}function Je(U,ve){let pe=E,be=!1;if(U){pe=x.get(ve),pe===void 0&&(pe=[],x.set(ve,pe));const Ae=U.textures;if(pe.length!==Ae.length||pe[0]!==n.COLOR_ATTACHMENT0){for(let Le=0,Xe=Ae.length;Le<Xe;Le++)pe[Le]=n.COLOR_ATTACHMENT0+Le;pe.length=Ae.length,be=!0}}else pe[0]!==n.BACK&&(pe[0]=n.BACK,be=!0);be&&n.drawBuffers(pe)}function pt(U){return T!==U?(n.useProgram(U),T=U,!0):!1}const yt={[ao]:n.FUNC_ADD,[eA]:n.FUNC_SUBTRACT,[tA]:n.FUNC_REVERSE_SUBTRACT};yt[nA]=n.MIN,yt[iA]=n.MAX;const ot={[rA]:n.ZERO,[aA]:n.ONE,[sA]:n.SRC_COLOR,[Mx]:n.SRC_ALPHA,[fA]:n.SRC_ALPHA_SATURATE,[cA]:n.DST_COLOR,[lA]:n.DST_ALPHA,[oA]:n.ONE_MINUS_SRC_COLOR,[Ex]:n.ONE_MINUS_SRC_ALPHA,[dA]:n.ONE_MINUS_DST_COLOR,[uA]:n.ONE_MINUS_DST_ALPHA,[hA]:n.CONSTANT_COLOR,[pA]:n.ONE_MINUS_CONSTANT_COLOR,[mA]:n.CONSTANT_ALPHA,[gA]:n.ONE_MINUS_CONSTANT_ALPHA};function Ft(U,ve,pe,be,Ae,Le,Xe,dt,we,Qe){if(U===lo){y===!0&&(Ue(n.BLEND),y=!1);return}if(y===!1&&(ye(n.BLEND),y=!0),U!==QR){if(U!==S||Qe!==I){if((b!==ao||O!==ao)&&(n.blendEquation(n.FUNC_ADD),b=ao,O=ao),Qe)switch(U){case Ml:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case q_:n.blendFunc(n.ONE,n.ONE);break;case Y_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case K_:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:It("WebGLState: Invalid blending: ",U);break}else switch(U){case Ml:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case q_:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Y_:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case K_:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",U);break}N=null,L=null,D=null,w=null,P.set(0,0,0),V=0,S=U,I=Qe}return}Ae=Ae||ve,Le=Le||pe,Xe=Xe||be,(ve!==b||Ae!==O)&&(n.blendEquationSeparate(yt[ve],yt[Ae]),b=ve,O=Ae),(pe!==N||be!==L||Le!==D||Xe!==w)&&(n.blendFuncSeparate(ot[pe],ot[be],ot[Le],ot[Xe]),N=pe,L=be,D=Le,w=Xe),(dt.equals(P)===!1||we!==V)&&(n.blendColor(dt.r,dt.g,dt.b,we),P.copy(dt),V=we),S=U,I=!1}function kt(U,ve){U.side===_r?Ue(n.CULL_FACE):ye(n.CULL_FACE);let pe=U.side===ii;ve&&(pe=!pe),Xt(pe),U.blending===Ml&&U.transparent===!1?Ft(lo):Ft(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),u.setFunc(U.depthFunc),u.setTest(U.depthTest),u.setMask(U.depthWrite),o.setMask(U.colorWrite);const be=U.stencilWrite;d.setTest(be),be&&(d.setMask(U.stencilWriteMask),d.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),d.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Nt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):Ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(U){z!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),z=U)}function vt(U){U!==jR?(ye(n.CULL_FACE),U!==W&&(U===X_?n.cullFace(n.BACK):U===JR?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ue(n.CULL_FACE),W=U}function hn(U){U!==Z&&(ne&&n.lineWidth(U),Z=U)}function Nt(U,ve,pe){U?(ye(n.POLYGON_OFFSET_FILL),(B!==ve||le!==pe)&&(B=ve,le=pe,u.getReversed()&&(ve=-ve,pe=-pe),n.polygonOffset(ve,pe))):Ue(n.POLYGON_OFFSET_FILL)}function zt(U){U?ye(n.SCISSOR_TEST):Ue(n.SCISSOR_TEST)}function an(U){U===void 0&&(U=n.TEXTURE0+re-1),J!==U&&(n.activeTexture(U),J=U)}function pn(U,ve,pe){pe===void 0&&(J===null?pe=n.TEXTURE0+re-1:pe=J);let be=k[pe];be===void 0&&(be={type:void 0,texture:void 0},k[pe]=be),(be.type!==U||be.texture!==ve)&&(J!==pe&&(n.activeTexture(pe),J=pe),n.bindTexture(U,ve||Re[U]),be.type=U,be.texture=ve)}function j(){const U=k[J];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function mn(){try{n.compressedTexImage2D(...arguments)}catch(U){It("WebGLState:",U)}}function bt(){try{n.compressedTexImage3D(...arguments)}catch(U){It("WebGLState:",U)}}function Ct(){try{n.texSubImage2D(...arguments)}catch(U){It("WebGLState:",U)}}function De(){try{n.texSubImage3D(...arguments)}catch(U){It("WebGLState:",U)}}function Ht(){try{n.compressedTexSubImage2D(...arguments)}catch(U){It("WebGLState:",U)}}function Ze(){try{n.compressedTexSubImage3D(...arguments)}catch(U){It("WebGLState:",U)}}function tt(){try{n.texStorage2D(...arguments)}catch(U){It("WebGLState:",U)}}function F(){try{n.texStorage3D(...arguments)}catch(U){It("WebGLState:",U)}}function R(){try{n.texImage2D(...arguments)}catch(U){It("WebGLState:",U)}}function ue(){try{n.texImage3D(...arguments)}catch(U){It("WebGLState:",U)}}function G(U){return m[U]!==void 0?m[U]:n.getParameter(U)}function X(U,ve){m[U]!==ve&&(n.pixelStorei(U,ve),m[U]=ve)}function ce(U){se.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),se.copy(U))}function oe(U){xe.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),xe.copy(U))}function Q(U,ve){let pe=h.get(ve);pe===void 0&&(pe=new WeakMap,h.set(ve,pe));let be=pe.get(U);be===void 0&&(be=n.getUniformBlockIndex(ve,U.name),n.uniformBlockBinding(ve,be,be),pe.set(U,be))}function te(U,ve,pe){const Ae=h.get(ve).get(U);f[Ae]!==pe&&(n.bindBufferBase(n.UNIFORM_BUFFER,Ae,pe),f[Ae]=pe)}function Se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),g={},m={},J=null,k={},v={},f={},x=new WeakMap,E=[],T=null,y=!1,S=null,b=null,N=null,L=null,O=null,D=null,w=null,P=new Mt(0,0,0),V=0,I=!1,z=null,W=null,Z=null,B=null,le=null,se.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),u.reset(),d.reset()}return{buffers:{color:o,depth:u,stencil:d},enable:ye,disable:Ue,bindFramebuffer:ut,drawBuffers:Je,useProgram:pt,setBlending:Ft,setMaterial:kt,setFlipSided:Xt,setCullFace:vt,setLineWidth:hn,setPolygonOffset:Nt,setScissorTest:zt,activeTexture:an,bindTexture:pn,unbindTexture:j,compressedTexImage2D:mn,compressedTexImage3D:bt,texImage2D:R,texImage3D:ue,pixelStorei:X,getParameter:G,updateUBOMapping:Q,uniformBlockBinding:te,texStorage2D:tt,texStorage3D:F,texSubImage2D:Ct,texSubImage3D:De,compressedTexSubImage2D:Ht,compressedTexSubImage3D:Ze,scissor:ce,viewport:oe,reset:Se}}function nD(n,e,t,r,s,o,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Et,g=new WeakMap,m=new Set;let v;const x=new WeakMap,E=new Set,T=new FinalizationRegistry(F=>E.delete(F));let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(F,R){return y?new OffscreenCanvas(F,R):Jc("canvas")}function b(F,R,ue){let G=1;const X=tt(F);if((X.width>ue||X.height>ue)&&(G=ue/Math.max(X.width,X.height)),G<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ce=Math.floor(G*X.width),oe=Math.floor(G*X.height);v===void 0&&(v=S(ce,oe));const Q=R?S(ce,oe):v;return Q.width=ce,Q.height=oe,Q.getContext("2d").drawImage(F,0,0,ce,oe),ct("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+ce+"x"+oe+")."),Q}else return"data"in F&&ct("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),F;return F}function N(F){return F.generateMipmaps}function L(F){n.generateMipmap(F)}function O(F){return F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?n.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function D(F,R,ue,G,X,ce=!1){if(F!==null){if(n[F]!==void 0)return n[F];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let oe;G&&(oe=e.get("EXT_texture_norm16"),oe||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=R;if(R===n.RED&&(ue===n.FLOAT&&(Q=n.R32F),ue===n.HALF_FLOAT&&(Q=n.R16F),ue===n.UNSIGNED_BYTE&&(Q=n.R8),ue===n.UNSIGNED_SHORT&&oe&&(Q=oe.R16_EXT),ue===n.SHORT&&oe&&(Q=oe.R16_SNORM_EXT)),R===n.RED_INTEGER&&(ue===n.UNSIGNED_BYTE&&(Q=n.R8UI),ue===n.UNSIGNED_SHORT&&(Q=n.R16UI),ue===n.UNSIGNED_INT&&(Q=n.R32UI),ue===n.BYTE&&(Q=n.R8I),ue===n.SHORT&&(Q=n.R16I),ue===n.INT&&(Q=n.R32I)),R===n.RG&&(ue===n.FLOAT&&(Q=n.RG32F),ue===n.HALF_FLOAT&&(Q=n.RG16F),ue===n.UNSIGNED_BYTE&&(Q=n.RG8),ue===n.UNSIGNED_SHORT&&oe&&(Q=oe.RG16_EXT),ue===n.SHORT&&oe&&(Q=oe.RG16_SNORM_EXT)),R===n.RG_INTEGER&&(ue===n.UNSIGNED_BYTE&&(Q=n.RG8UI),ue===n.UNSIGNED_SHORT&&(Q=n.RG16UI),ue===n.UNSIGNED_INT&&(Q=n.RG32UI),ue===n.BYTE&&(Q=n.RG8I),ue===n.SHORT&&(Q=n.RG16I),ue===n.INT&&(Q=n.RG32I)),R===n.RGB_INTEGER&&(ue===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),ue===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),ue===n.UNSIGNED_INT&&(Q=n.RGB32UI),ue===n.BYTE&&(Q=n.RGB8I),ue===n.SHORT&&(Q=n.RGB16I),ue===n.INT&&(Q=n.RGB32I)),R===n.RGBA_INTEGER&&(ue===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),ue===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),ue===n.UNSIGNED_INT&&(Q=n.RGBA32UI),ue===n.BYTE&&(Q=n.RGBA8I),ue===n.SHORT&&(Q=n.RGBA16I),ue===n.INT&&(Q=n.RGBA32I)),R===n.RGB&&(ue===n.UNSIGNED_SHORT&&oe&&(Q=oe.RGB16_EXT),ue===n.SHORT&&oe&&(Q=oe.RGB16_SNORM_EXT),ue===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),ue===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),R===n.RGBA){const te=ce?jc:Tt.getTransfer(X);ue===n.FLOAT&&(Q=n.RGBA32F),ue===n.HALF_FLOAT&&(Q=n.RGBA16F),ue===n.UNSIGNED_BYTE&&(Q=te===Ut?n.SRGB8_ALPHA8:n.RGBA8),ue===n.UNSIGNED_SHORT&&oe&&(Q=oe.RGBA16_EXT),ue===n.SHORT&&oe&&(Q=oe.RGBA16_SNORM_EXT),ue===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),ue===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function w(F,R){let ue;return F?R===null||R===Tr||R===mo?ue=n.DEPTH24_STENCIL8:R===xr?ue=n.DEPTH32F_STENCIL8:R===Ll&&(ue=n.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Tr||R===mo?ue=n.DEPTH_COMPONENT24:R===xr?ue=n.DEPTH_COMPONENT32F:R===Ll&&(ue=n.DEPTH_COMPONENT16),ue}function P(F,R){return N(F)===!0||F.isFramebufferTexture&&F.minFilter!==Cn&&F.minFilter!==ti?Math.log2(Math.max(R.width,R.height))+1:F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?R.mipmaps.length:1}function V(F){const R=new WeakRef(F);r.get(F).__ref=R,E.add(R),T.register(F,R,R)}function I(F){const R=r.get(F).__ref;R!==void 0&&(E.delete(R),T.unregister(R))}function z(F){Z(F.target)}function W(F){B(F.target)}function Z(F){F.removeEventListener("dispose",z),I(F),re(F),F.isVideoTexture&&g.delete(F),F.isHTMLTexture&&m.delete(F)}function B(F){F.removeEventListener("dispose",W),I(F),K(F)}function le(){for(const F of E){const R=F.deref();R!==void 0&&(R.isRenderTarget===!0?B(R):Z(R))}E.clear(),m.clear()}function re(F){const R=r.get(F);if(R.__webglInit===void 0)return;const ue=F.source,G=x.get(ue);if(G){const X=G[R.__cacheKey];X.usedTimes--,X.usedTimes===0&&ne(F),Object.keys(G).length===0&&x.delete(ue)}r.remove(F)}function ne(F){const R=r.get(F);n.deleteTexture(R.__webglTexture);const ue=F.source,G=x.get(ue);delete G[R.__cacheKey],u.memory.textures--}function K(F){const R=r.get(F);R.__depthDisposeCallback&&R.__depthDisposeCallback();const ue=F.depthTexture;if(ue&&ue.renderTarget===F&&Z(ue),F.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(R.__webglFramebuffer[X]))for(let ce=0;ce<R.__webglFramebuffer[X].length;ce++)n.deleteFramebuffer(R.__webglFramebuffer[X][ce]);else n.deleteFramebuffer(R.__webglFramebuffer[X]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[X])}else{if(Array.isArray(R.__webglFramebuffer))for(let X=0;X<R.__webglFramebuffer.length;X++)n.deleteFramebuffer(R.__webglFramebuffer[X]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let X=0;X<R.__webglColorRenderbuffer.length;X++)R.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[X]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const G=F.textures;for(let X=0,ce=G.length;X<ce;X++){const oe=r.get(G[X]);oe.__webglTexture&&(n.deleteTexture(oe.__webglTexture),u.memory.textures--),r.remove(G[X])}r.remove(F)}let q=0;function J(){q=0}function k(){return q}function ie(F){q=F}function Ce(){const F=q;return F>=s.maxTextures&&ct("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,F}function se(F){const R=[];return R.push(F.wrapS),R.push(F.wrapT),R.push(F.wrapR||0),R.push(F.magFilter),R.push(F.minFilter),R.push(F.anisotropy),R.push(F.internalFormat),R.push(F.format),R.push(F.type),R.push(F.generateMipmaps),R.push(F.mipmapsAutoUpdate),R.push(F.premultiplyAlpha),R.push(F.flipY),R.push(F.unpackAlignment),R.push(F.colorSpace),R.join()}function xe(F,R){const ue=r.get(F);if(F.isVideoTexture&&Ht(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&ue.__version!==F.version){const G=F.image;if(G===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{kt(ue,F,R);return}}else F.isExternalTexture&&(ue.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture,n.TEXTURE0+R)}function Me(F,R){const ue=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ue.__version!==F.version){kt(ue,F,R);return}else F.isExternalTexture&&(ue.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,ue.__webglTexture,n.TEXTURE0+R)}function Re(F,R){const ue=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ue.__version!==F.version){kt(ue,F,R);return}t.bindTexture(n.TEXTURE_3D,ue.__webglTexture,n.TEXTURE0+R)}function ye(F,R){const ue=r.get(F);if(F.version>0&&ue.__version!==F.version){Xt(ue,F,R);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture,n.TEXTURE0+R)}const Ue={[qc]:n.REPEAT,[Wr]:n.CLAMP_TO_EDGE,[Ip]:n.MIRRORED_REPEAT},ut={[Cn]:n.NEAREST,[yA]:n.NEAREST_MIPMAP_NEAREST,[sc]:n.NEAREST_MIPMAP_LINEAR,[ti]:n.LINEAR,[_h]:n.LINEAR_MIPMAP_NEAREST,[La]:n.LINEAR_MIPMAP_LINEAR},Je={[EA]:n.NEVER,[Hx]:n.ALWAYS,[bA]:n.LESS,[Bx]:n.LEQUAL,[wA]:n.EQUAL,[zx]:n.GEQUAL,[TA]:n.GREATER,[RA]:n.NOTEQUAL};function pt(F,R){if(R.type===xr&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===ti||R.magFilter===_h||R.magFilter===sc||R.magFilter===La||R.minFilter===ti||R.minFilter===_h||R.minFilter===sc||R.minFilter===La)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,Ue[R.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,Ue[R.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,Ue[R.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,ut[R.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,ut[R.minFilter]),R.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,Je[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Cn||R.minFilter!==sc&&R.minFilter!==La||R.type===xr&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||r.get(R).__currentAnisotropy){const ue=e.get("EXT_texture_filter_anisotropic");n.texParameterf(F,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy}}}function yt(F,R){let ue=!1;F.__webglInit===void 0&&(F.__webglInit=!0,R.addEventListener("dispose",z),V(R));const G=R.source;let X=x.get(G);X===void 0&&(X={},x.set(G,X));const ce=se(R);if(ce!==F.__cacheKey){X[ce]===void 0&&(X[ce]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,ue=!0),X[ce].usedTimes++;const oe=X[F.__cacheKey];oe!==void 0&&(X[F.__cacheKey].usedTimes--,oe.usedTimes===0&&ne(R)),F.__cacheKey=ce,F.__webglTexture=X[ce].texture}return ue}function ot(F,R,ue){return Math.floor(Math.floor(F/ue)/R)}function Ft(F,R,ue,G){const ce=F.updateRanges;if(ce.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,R.width,R.height,ue,G,R.data);else{ce.sort((U,ve)=>U.start-ve.start);let oe=0;for(let U=1;U<ce.length;U++){const ve=ce[oe],pe=ce[U],be=ve.start+ve.count,Ae=ot(pe.start,R.width,4),Le=ot(ve.start,R.width,4);pe.start<=be+1&&Ae===Le&&ot(pe.start+pe.count-1,R.width,4)===Ae?ve.count=Math.max(ve.count,pe.start+pe.count-ve.start):(++oe,ce[oe]=pe)}ce.length=oe+1;const Q=t.getParameter(n.UNPACK_ROW_LENGTH),te=t.getParameter(n.UNPACK_SKIP_PIXELS),Se=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,R.width);for(let U=0,ve=ce.length;U<ve;U++){const pe=ce[U],be=Math.floor(pe.start/4),Ae=Math.ceil(pe.count/4),Le=be%R.width,Xe=Math.floor(be/R.width),dt=Ae,we=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),t.pixelStorei(n.UNPACK_SKIP_ROWS,Xe),t.texSubImage2D(n.TEXTURE_2D,0,Le,Xe,dt,we,ue,G,R.data)}F.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,te),t.pixelStorei(n.UNPACK_SKIP_ROWS,Se)}}function kt(F,R,ue){let G=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(G=n.TEXTURE_3D);const X=yt(F,R),ce=R.source;t.bindTexture(G,F.__webglTexture,n.TEXTURE0+ue);const oe=r.get(ce);if(ce.version!==oe.__version||X===!0){if(t.activeTexture(n.TEXTURE0+ue),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){const we=Tt.getPrimaries(Tt.workingColorSpace),Qe=R.colorSpace===Pa?null:Tt.getPrimaries(R.colorSpace),st=R.colorSpace===Pa||we===Qe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st)}t.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment);let te=b(R.image,!1,s.maxTextureSize);te=Ze(R,te);const Se=o.convert(R.format,R.colorSpace),U=o.convert(R.type);let ve=D(R.internalFormat,Se,U,R.normalized,R.colorSpace,R.isVideoTexture);pt(G,R);let pe;const be=R.mipmaps,Ae=R.isVideoTexture!==!0,Le=oe.__version===void 0||X===!0,Xe=ce.dataReady,dt=P(R,te);if(R.isDepthTexture)ve=w(R.format===Da,R.type),Le&&(Ae?t.texStorage2D(n.TEXTURE_2D,1,ve,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,ve,te.width,te.height,0,Se,U,null));else if(R.isDataTexture)if(be.length>0){Ae&&Le&&t.texStorage2D(n.TEXTURE_2D,dt,ve,be[0].width,be[0].height);for(let we=0,Qe=be.length;we<Qe;we++)pe=be[we],Ae?Xe&&t.texSubImage2D(n.TEXTURE_2D,we,0,0,pe.width,pe.height,Se,U,pe.data):t.texImage2D(n.TEXTURE_2D,we,ve,pe.width,pe.height,0,Se,U,pe.data);R.generateMipmaps=!1}else Ae?(Le&&t.texStorage2D(n.TEXTURE_2D,dt,ve,te.width,te.height),Xe&&Ft(R,te,Se,U)):t.texImage2D(n.TEXTURE_2D,0,ve,te.width,te.height,0,Se,U,te.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Ae&&Le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,dt,ve,be[0].width,be[0].height,te.depth);for(let we=0,Qe=be.length;we<Qe;we++)if(pe=be[we],R.format!==Mr)if(Se!==null)if(Ae){if(Xe)if(R.layerUpdates.size>0){const st=My(pe.width,pe.height,R.format,R.type);for(const ke of R.layerUpdates){const St=pe.data.subarray(ke*st/pe.data.BYTES_PER_ELEMENT,(ke+1)*st/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,we,0,0,ke,pe.width,pe.height,1,Se,St)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,we,0,0,0,pe.width,pe.height,te.depth,Se,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,we,ve,pe.width,pe.height,te.depth,0,pe.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?Xe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,we,0,0,0,pe.width,pe.height,te.depth,Se,U,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,we,ve,pe.width,pe.height,te.depth,0,Se,U,pe.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{Ae&&Le&&t.texStorage2D(n.TEXTURE_2D,dt,ve,be[0].width,be[0].height);for(let we=0,Qe=be.length;we<Qe;we++)pe=be[we],R.format!==Mr?Se!==null?Ae?Xe&&t.compressedTexSubImage2D(n.TEXTURE_2D,we,0,0,pe.width,pe.height,Se,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,we,ve,pe.width,pe.height,0,pe.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?Xe&&t.texSubImage2D(n.TEXTURE_2D,we,0,0,pe.width,pe.height,Se,U,pe.data):t.texImage2D(n.TEXTURE_2D,we,ve,pe.width,pe.height,0,Se,U,pe.data)}else if(R.isDataArrayTexture)if(Ae){if(Le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,dt,ve,te.width,te.height,te.depth),Xe)if(R.layerUpdates.size>0){const we=My(te.width,te.height,R.format,R.type);for(const Qe of R.layerUpdates){const st=te.data.subarray(Qe*we/te.data.BYTES_PER_ELEMENT,(Qe+1)*we/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Qe,te.width,te.height,1,Se,U,st)}R.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Se,U,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,te.width,te.height,te.depth,0,Se,U,te.data);else if(R.isData3DTexture)Ae?(Le&&t.texStorage3D(n.TEXTURE_3D,dt,ve,te.width,te.height,te.depth),Xe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Se,U,te.data)):t.texImage3D(n.TEXTURE_3D,0,ve,te.width,te.height,te.depth,0,Se,U,te.data);else if(R.isFramebufferTexture){if(Le)if(Ae)t.texStorage2D(n.TEXTURE_2D,dt,ve,te.width,te.height);else{let we=te.width,Qe=te.height;for(let st=0;st<dt;st++)t.texImage2D(n.TEXTURE_2D,st,ve,we,Qe,0,Se,U,null),we>>=1,Qe>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in n){const we=n.canvas;if(we.hasAttribute("layoutsubtree")||we.setAttribute("layoutsubtree","true"),te.parentNode!==we){we.appendChild(te),m.add(R),we.onpaint=Qe=>{const st=Qe.changedElements;for(const ke of m)st.includes(ke.image)&&(ke.needsUpdate=!0)},we.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,te);else{const st=n.RGBA,ke=n.RGBA,St=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,st,ke,St,te)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(be.length>0){if(Ae&&Le){const we=tt(be[0]);t.texStorage2D(n.TEXTURE_2D,dt,ve,we.width,we.height)}for(let we=0,Qe=be.length;we<Qe;we++)pe=be[we],Ae?Xe&&t.texSubImage2D(n.TEXTURE_2D,we,0,0,Se,U,pe):t.texImage2D(n.TEXTURE_2D,we,ve,Se,U,pe);R.generateMipmaps=!1}else if(Ae){if(Le){const we=tt(te);t.texStorage2D(n.TEXTURE_2D,dt,ve,we.width,we.height)}Xe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,U,te)}else t.texImage2D(n.TEXTURE_2D,0,ve,Se,U,te);N(R)&&R.mipmapsAutoUpdate===!0&&L(G),oe.__version=ce.version,R.onUpdate&&R.onUpdate(R)}F.__version=R.version}function Xt(F,R,ue){if(R.image.length!==6)return;const G=yt(F,R),X=R.source;t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+ue);const ce=r.get(X);if(X.version!==ce.__version||G===!0){t.activeTexture(n.TEXTURE0+ue);const oe=Tt.getPrimaries(Tt.workingColorSpace),Q=R.colorSpace===Pa?null:Tt.getPrimaries(R.colorSpace),te=R.colorSpace===Pa||oe===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const Se=R.isCompressedTexture||R.image[0].isCompressedTexture,U=R.image[0]&&R.image[0].isDataTexture,ve=[];for(let ke=0;ke<6;ke++)!Se&&!U?ve[ke]=b(R.image[ke],!0,s.maxCubemapSize):ve[ke]=U?R.image[ke].image:R.image[ke],ve[ke]=Ze(R,ve[ke]);const pe=ve[0],be=o.convert(R.format,R.colorSpace),Ae=o.convert(R.type);let Le=D(R.internalFormat,be,Ae,R.normalized,R.colorSpace);const Xe=R.isVideoTexture!==!0,dt=ce.__version===void 0||G===!0,we=X.dataReady;let Qe=P(R,pe);pt(n.TEXTURE_CUBE_MAP,R);let st;if(R.isDepthTexture){if(Le=w(R.format===Da,R.type),dt)if(Xe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Le,pe.width,pe.height);else for(let ke=0;ke<6;ke++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,Le,pe.width,pe.height,0,be,Ae,null)}else if(Se){Xe&&dt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Qe,Le,pe.width,pe.height);for(let ke=0;ke<6;ke++){st=ve[ke].mipmaps;for(let St=0;St<st.length;St++){const qt=st[St];R.format!==Mr?be!==null?Xe?we&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,St,0,0,qt.width,qt.height,be,qt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,St,Le,qt.width,qt.height,0,qt.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,St,0,0,qt.width,qt.height,be,Ae,qt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,St,Le,qt.width,qt.height,0,be,Ae,qt.data)}}}else{if(st=R.mipmaps,Xe&&dt){st.length>0&&Qe++;const ke=tt(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Qe,Le,ke.width,ke.height)}for(let ke=0;ke<6;ke++)if(U){Xe?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,0,0,ve[ke].width,ve[ke].height,be,Ae,ve[ke].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,Le,ve[ke].width,ve[ke].height,0,be,Ae,ve[ke].data);for(let St=0;St<st.length;St++){const Ln=st[St].image[ke].image;Xe?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,St+1,0,0,Ln.width,Ln.height,be,Ae,Ln.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,St+1,Le,Ln.width,Ln.height,0,be,Ae,Ln.data)}}else{Xe?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,0,0,be,Ae,ve[ke]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,Le,be,Ae,ve[ke]);for(let St=0;St<st.length;St++){const qt=st[St];Xe?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,St+1,0,0,be,Ae,qt.image[ke]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,St+1,Le,be,Ae,qt.image[ke])}}}N(R)&&R.mipmapsAutoUpdate===!0&&L(n.TEXTURE_CUBE_MAP),ce.__version=X.version,R.onUpdate&&R.onUpdate(R)}F.__version=R.version}function vt(F,R,ue,G,X,ce){const oe=o.convert(ue.format,ue.colorSpace),Q=o.convert(ue.type),te=D(ue.internalFormat,oe,Q,ue.normalized,ue.colorSpace),Se=r.get(R),U=r.get(ue);if(U.__renderTarget=R,!Se.__hasExternalTextures){const ve=Math.max(1,R.width>>ce),pe=Math.max(1,R.height>>ce);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,ce,te,ve,pe,R.depth,0,oe,Q,null):t.texImage2D(X,ce,te,ve,pe,0,oe,Q,null)}t.bindFramebuffer(n.FRAMEBUFFER,F),De(R)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,X,U.__webglTexture,0,Ct(R)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,X,U.__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function hn(F,R,ue){if(n.bindRenderbuffer(n.RENDERBUFFER,F),R.depthBuffer){const G=R.depthTexture,X=G&&G.isDepthTexture?G.type:null,ce=w(R.stencilBuffer,X),oe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;De(R)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ct(R),ce,R.width,R.height):ue?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct(R),ce,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,ce,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,F)}else{const G=R.textures;for(let X=0;X<G.length;X++){const ce=G[X],oe=o.convert(ce.format,ce.colorSpace),Q=o.convert(ce.type),te=D(ce.internalFormat,oe,Q,ce.normalized,ce.colorSpace);De(R)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ct(R),te,R.width,R.height):ue?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct(R),te,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,te,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Nt(F,R,ue){const G=R.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,F),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=r.get(R.depthTexture);X.__renderTarget=R;const ce=G?R.depthTexture.image[0]:R.depthTexture.image;(!X.__webglTexture||ce.width!==R.width||ce.height!==R.height)&&(ce.width=R.width,ce.height=R.height,R.depthTexture.needsUpdate=!0),G?ye(R.depthTexture,0):xe(R.depthTexture,0);const oe=X.__webglTexture,Q=Ct(R),te=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+ue:n.TEXTURE_2D,Se=R.depthTexture.format===Da?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(R.depthTexture.format===Oa)De(R)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Se,te,oe,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,Se,te,oe,0);else if(R.depthTexture.format===Da)De(R)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Se,te,oe,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,Se,te,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function zt(F){const R=r.get(F),ue=F.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==F.depthTexture){const G=F.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),G){const X=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,G.removeEventListener("dispose",X)};G.addEventListener("dispose",X),R.__depthDisposeCallback=X}R.__boundDepthTexture=G}if(F.depthTexture&&!R.__autoAllocateDepthBuffer)if(ue)for(let G=0;G<6;G++)Nt(R.__webglFramebuffer[G],F,G);else F.texture.mipmaps.length>0?Nt(R.__webglFramebuffer[0],F,0):Nt(R.__webglFramebuffer,F,0);else if(ue){R.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[G]),R.__webglDepthbuffer[G]===void 0)R.__webglDepthbuffer[G]=n.createRenderbuffer(),hn(R.__webglDepthbuffer[G],F,!1);else{const X=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=R.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,ce)}}else if(F.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=n.createRenderbuffer(),hn(R.__webglDepthbuffer,F,!1);else{const X=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=R.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,ce)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function an(F,R,ue){const G=r.get(F);R!==void 0&&vt(G.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ue!==void 0&&zt(F)}function pn(F){const R=F.texture,ue=r.get(F),G=r.get(R);F.addEventListener("dispose",W),V(F);const X=F.textures,ce=F.isWebGLCubeRenderTarget===!0,oe=X.length>1;if(oe||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=R.version,u.memory.textures++),ce){ue.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(R.mipmaps.length>0){ue.__webglFramebuffer[Q]=[];for(let te=0;te<R.mipmaps.length;te++)ue.__webglFramebuffer[Q][te]=n.createFramebuffer()}else ue.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(R.mipmaps.length>0){ue.__webglFramebuffer=[];for(let Q=0;Q<R.mipmaps.length;Q++)ue.__webglFramebuffer[Q]=n.createFramebuffer()}else ue.__webglFramebuffer=n.createFramebuffer();if(oe)for(let Q=0,te=X.length;Q<te;Q++){const Se=r.get(X[Q]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),u.memory.textures++)}if(F.samples>0&&De(F)===!1){ue.__webglMultisampledFramebuffer=n.createFramebuffer(),ue.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer);for(let Q=0;Q<X.length;Q++){const te=X[Q];ue.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ue.__webglColorRenderbuffer[Q]);const Se=o.convert(te.format,te.colorSpace),U=o.convert(te.type),ve=D(te.internalFormat,Se,U,te.normalized,te.colorSpace,F.isXRRenderTarget===!0),pe=Ct(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,ve,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,ue.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(ue.__webglDepthRenderbuffer=n.createRenderbuffer(),hn(ue.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),pt(n.TEXTURE_CUBE_MAP,R);for(let Q=0;Q<6;Q++)if(R.mipmaps.length>0)for(let te=0;te<R.mipmaps.length;te++)vt(ue.__webglFramebuffer[Q][te],F,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,te);else vt(ue.__webglFramebuffer[Q],F,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);N(R)?L(n.TEXTURE_CUBE_MAP):R.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,R.mipmaps.length-1),t.unbindTexture()}else if(oe){for(let Q=0,te=X.length;Q<te;Q++){const Se=X[Q],U=r.get(Se);let ve=n.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ve=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,U.__webglTexture),pt(ve,Se),vt(ue.__webglFramebuffer,F,Se,n.COLOR_ATTACHMENT0+Q,ve,0),N(Se)&&L(ve)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Q=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,G.__webglTexture),pt(Q,R),R.mipmaps.length>0)for(let te=0;te<R.mipmaps.length;te++)vt(ue.__webglFramebuffer[te],F,R,n.COLOR_ATTACHMENT0,Q,te);else vt(ue.__webglFramebuffer,F,R,n.COLOR_ATTACHMENT0,Q,0);N(R)?L(Q):R.mipmaps.length>0&&n.texParameteri(Q,n.TEXTURE_MAX_LEVEL,R.mipmaps.length-1),t.unbindTexture()}F.depthBuffer&&zt(F)}function j(F){const R=F.textures;for(let ue=0,G=R.length;ue<G;ue++){const X=R[ue];if(N(X)&&X.mipmapsAutoUpdate===!0){const ce=O(F),oe=r.get(X).__webglTexture;t.bindTexture(ce,oe),L(ce),t.unbindTexture()}}}const mn=[];function bt(F){if(F.samples>0){if(De(F)===!1){const R=F.textures,ue=F.width,G=F.height;let X=n.COLOR_BUFFER_BIT;const ce=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=r.get(F),Q=R.length>1;if(Q)for(let Se=0;Se<R.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),F.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Se=0;Se<R.length;Se++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[Se]);const U=r.get(R[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,U,0)}n.blitFramebuffer(0,0,ue,G,0,0,ue,G,X,n.NEAREST),f===!0&&(mn.length=0,mn.push(n.COLOR_ATTACHMENT0+Se),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&mn.push(ce),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,mn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let Se=0;Se<R.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,oe.__webglColorRenderbuffer[Se]);const U=r.get(R[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,U,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&f){const R=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}}function Ct(F){return Math.min(s.maxSamples,F.samples)}function De(F){const R=r.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ht(F){const R=u.render.frame;g.get(F)!==R&&(g.set(F,R),F.update())}function Ze(F,R){const ue=F.colorSpace,G=F.format,X=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||ue!==Zc&&ue!==Pa&&(Tt.getTransfer(ue)===Ut?(G!==Mr||X!==gi)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",ue)),R}function tt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=Ce,this.resetTextureUnits=J,this.getTextureUnits=k,this.setTextureUnits=ie,this.setTexture2D=xe,this.setTexture2DArray=Me,this.setTexture3D=Re,this.setTextureCube=ye,this.rebindTextures=an,this.setupRenderTarget=pn,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=De,this.dispose=le}function iD(n,e){function t(r,s=Pa){let o;const u=Tt.getTransfer(s);if(r===gi)return n.UNSIGNED_BYTE;if(r===Pm)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Lm)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Nx)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===Ox)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===Dx)return n.BYTE;if(r===Ix)return n.SHORT;if(r===Ll)return n.UNSIGNED_SHORT;if(r===Cm)return n.INT;if(r===Tr)return n.UNSIGNED_INT;if(r===xr)return n.FLOAT;if(r===Rr)return n.HALF_FLOAT;if(r===Ux)return n.ALPHA;if(r===Fx)return n.RGB;if(r===Mr)return n.RGBA;if(r===Oa)return n.DEPTH_COMPONENT;if(r===Da)return n.DEPTH_STENCIL;if(r===kx)return n.RED;if(r===Dm)return n.RED_INTEGER;if(r===fs)return n.RG;if(r===Im)return n.RG_INTEGER;if(r===Nm)return n.RGBA_INTEGER;if(r===Oc||r===Uc||r===Fc||r===kc)if(u===Ut)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Oc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Uc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Oc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Uc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Np||r===Op||r===Up||r===Fp)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Np)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Op)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Up)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===kp||r===Bp||r===zp||r===Hp||r===Gp||r===Yc||r===Vp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===kp||r===Bp)return u===Ut?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===zp)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(r===Hp)return o.COMPRESSED_R11_EAC;if(r===Gp)return o.COMPRESSED_SIGNED_R11_EAC;if(r===Yc)return o.COMPRESSED_RG11_EAC;if(r===Vp)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Wp||r===$p||r===Xp||r===qp||r===Yp||r===Kp||r===Zp||r===jp||r===Jp||r===Qp||r===em||r===tm||r===nm||r===im)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Wp)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$p)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xp)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qp)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Yp)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kp)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zp)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jp)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jp)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qp)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===em)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===tm)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===nm)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===im)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===rm||r===am||r===sm)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===rm)return u===Ut?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===am)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===sm)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===om||r===lm||r===Kc||r===um)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===om)return o.COMPRESSED_RED_RGTC1_EXT;if(r===lm)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Kc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===um)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===mo?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const rD=`
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

}`;class sD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Zx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new hs({vertexShader:rD,fragmentShader:aD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ua(new Ia(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oD extends vs{constructor(e,t){super();const r=this;let s=null,o=1,u=null,d="local-floor",f=1,h=null,g=null,m=null,v=null,x=null,E=null;const T=typeof XRWebGLBinding<"u",y=new sD,S={},b=t.getContextAttributes();let N=null,L=null;const O=[],D=[],w=new Et;let P=null,V=null;const I=new Di;I.viewport=new rn;const z=new Di;z.viewport=new rn;const W=[I,z],Z=new _C;let B=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let xe=O[se];return xe===void 0&&(xe=new Rh,O[se]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(se){let xe=O[se];return xe===void 0&&(xe=new Rh,O[se]=xe),xe.getGripSpace()},this.getHand=function(se){let xe=O[se];return xe===void 0&&(xe=new Rh,O[se]=xe),xe.getHandSpace()};function re(se){const xe=D.indexOf(se.inputSource);if(xe===-1)return;const Me=O[xe];Me!==void 0&&(Me.update(se.inputSource,se.frame,h||u),Me.dispatchEvent({type:se.type,data:se.inputSource}))}function ne(){s.removeEventListener("select",re),s.removeEventListener("selectstart",re),s.removeEventListener("selectend",re),s.removeEventListener("squeeze",re),s.removeEventListener("squeezestart",re),s.removeEventListener("squeezeend",re),s.removeEventListener("end",ne),s.removeEventListener("inputsourceschange",K);for(let se=0;se<O.length;se++){const xe=D[se];xe!==null&&(D[se]=null,O[se].disconnect(xe))}B=null,le=null,y.reset();for(const se in S)delete S[se];if(e.setRenderTarget(N),x=null,v=null,m=null,s=null,L=null,Ce.stop(),r.isPresenting=!1,e.setPixelRatio(P),e.setSize(w.width,w.height,!1),V!==null){const se=V.camera;se.fov=V.fov,se.zoom=V.zoom,se.updateProjectionMatrix(),V=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){o=se,r.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){d=se,r.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(se){h=se},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return m===null&&T&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(N=e.getRenderTarget(),s.addEventListener("select",re),s.addEventListener("selectstart",re),s.addEventListener("selectend",re),s.addEventListener("squeeze",re),s.addEventListener("squeezestart",re),s.addEventListener("squeezeend",re),s.addEventListener("end",ne),s.addEventListener("inputsourceschange",K),b.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(w),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Re=null,ye=null;b.depth&&(ye=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=b.stencil?Da:Oa,Re=b.stencil?mo:Tr);const Ue={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:o};m=this.getBinding(),v=m.createProjectionLayer(Ue),s.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new wr(v.textureWidth,v.textureHeight,{format:Mr,type:gi,depthTexture:new go(v.textureWidth,v.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const Me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new wr(x.framebufferWidth,x.framebufferHeight,{format:Mr,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(f),h=null,u=await s.requestReferenceSpace(d),Ce.setContext(s),Ce.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(se){for(let xe=0;xe<se.removed.length;xe++){const Me=se.removed[xe],Re=D.indexOf(Me);Re>=0&&(D[Re]=null,O[Re].disconnect(Me))}for(let xe=0;xe<se.added.length;xe++){const Me=se.added[xe];let Re=D.indexOf(Me);if(Re===-1){for(let Ue=0;Ue<O.length;Ue++)if(Ue>=D.length){D.push(Me),Re=Ue;break}else if(D[Ue]===null){D[Ue]=Me,Re=Ue;break}if(Re===-1)break}const ye=O[Re];ye&&ye.connect(Me)}}function q(se,xe){xe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(xe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let xe=se.near,Me=se.far;y.texture!==null&&(y.depthNear>0&&(xe=y.depthNear),y.depthFar>0&&(Me=y.depthFar)),Z.near=z.near=I.near=xe,Z.far=z.far=I.far=Me,(B!==Z.near||le!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),B=Z.near,le=Z.far),Z.layers.mask=se.layers.mask|6,I.layers.mask=Z.layers.mask&-5,z.layers.mask=Z.layers.mask&-3;const Re=se.parent,ye=Z.cameras;q(Z,Re);for(let Ue=0;Ue<ye.length;Ue++)q(ye[Ue],Re);Z.projectionMatrix.copy(I.projectionMatrix),Z.projectionMatrixInverse.copy(I.projectionMatrixInverse),V===null&&se.isPerspectiveCamera&&(V={camera:se,fov:se.fov,zoom:se.zoom}),J(se,Z,Re)};function J(se,xe,Me){Me===null?se.matrix.copy(xe.matrixWorld):(se.matrix.copy(Me.matrixWorld),se.matrix.invert(),se.matrix.multiply(xe.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(xe.projectionMatrix),se.projectionMatrixInverse.copy(xe.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=dm*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(v===null&&x===null))return f},this.setFoveation=function(se){f=se,v!==null&&(v.fixedFoveation=se),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=se)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Z)},this.getCameraTexture=function(se){return S[se]};let k=null;function ie(se,xe){if(g=xe.getViewerPose(h||u),E=xe,g!==null){const Me=g.views;x!==null&&(e.setRenderTargetFramebuffer(L,x.framebuffer),e.setRenderTarget(L));let Re=!1;Me.length!==Z.cameras.length&&(Z.cameras.length=0,Re=!0);for(let Je=0;Je<Me.length;Je++){const pt=Me[Je];let yt=null;if(x!==null)yt=x.getViewport(pt);else{const Ft=m.getViewSubImage(v,pt);yt=Ft.viewport,Je===0&&(e.setRenderTargetTextures(L,Ft.colorTexture,Ft.depthStencilTexture),e.setRenderTarget(L))}let ot=W[Je];ot===void 0&&(ot=new Di,ot.layers.enable(Je),ot.viewport=new rn,W[Je]=ot),ot.matrix.fromArray(pt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(pt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(yt.x,yt.y,yt.width,yt.height),Je===0&&(Z.matrix.copy(ot.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Re===!0&&Z.cameras.push(ot)}const ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&T){m=r.getBinding();const Je=m.getDepthInformation(Me[0]);Je&&Je.isValid&&Je.texture&&y.init(Je,s.renderState)}if(ye&&ye.includes("camera-access")&&T){e.state.unbindTexture(),m=r.getBinding();for(let Je=0;Je<Me.length;Je++){const pt=Me[Je].camera;if(pt){let yt=S[pt];yt||(yt=new Zx,S[pt]=yt);const ot=m.getCameraImage(pt);yt.sourceTexture=ot}}}}for(let Me=0;Me<O.length;Me++){const Re=D[Me],ye=O[Me];Re!==null&&ye!==void 0&&ye.update(Re,xe,h||u)}k&&k(se,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),E=null}const Ce=new tM;Ce.setAnimationLoop(ie),this.setAnimationLoop=function(se){k=se},this.dispose=function(){}}}const lD=new en,dM=new ft;dM.set(-1,0,0,0,1,0,0,0,1);function uD(n,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,jx(n)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function s(y,S,b,N,L){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?o(y,S):S.isMeshLambertMaterial?(o(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(o(y,S),m(y,S)):S.isMeshPhongMaterial?(o(y,S),g(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(o(y,S),v(y,S),S.isMeshPhysicalMaterial&&x(y,S,L)):S.isMeshMatcapMaterial?(o(y,S),E(y,S)):S.isMeshDepthMaterial?o(y,S):S.isMeshDistanceMaterial?(o(y,S),T(y,S)):S.isMeshNormalMaterial?o(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?f(y,S,b,N):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function o(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===ii&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===ii&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const b=e.get(S),N=b.envMap,L=b.envMapRotation;N&&(y.envMap.value=N,y.envMapRotation.value.setFromMatrix4(lD.makeRotationFromEuler(L)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(dM),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function f(y,S,b,N){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*b,y.scale.value=N*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function m(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function v(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,b){y.ior.value=S.ior,S.diffuseRoughness>0&&(y.diffuseRoughness.value=S.diffuseRoughness,S.diffuseRoughnessMap&&(y.diffuseRoughnessMap.value=S.diffuseRoughnessMap,t(S.diffuseRoughnessMap,y.diffuseRoughnessMapTransform))),S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ii&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessMinimum,y.iridescenceThicknessMaximum.value=S.iridescenceThicknessMaximum,S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=b.texture,y.transmissionSamplerSize.value.set(b.width,b.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,S){S.matcap&&(y.matcap.value=S.matcap)}function T(y,S){const b=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(b.matrixWorld),y.nearDistance.value=b.shadow.camera.near,y.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:s}}function cD(n,e,t,r){let s={},o={};function u(b,N){const L=N.program;r.uniformBlockBinding(b,L,s[b.id])}function d(b,N){let L=s[b.id];L===void 0&&(E(b),L=f(b),s[b.id]=L,b.addEventListener("dispose",y));const O=N.program;r.updateUBOMapping(b,O);const D=e.render.frame;o[b.id]!==D&&(h(b),o[b.id]=D)}function f(b){const N=n.createBuffer(),L=b.__size,O=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,N),n.bufferData(n.UNIFORM_BUFFER,L,O),n.bindBuffer(n.UNIFORM_BUFFER,null),N}function h(b){const N=s[b.id],L=b.uniforms,O=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,N);for(let D=0,w=L.length;D<w;D++){const P=L[D];if(Array.isArray(P))for(let V=0,I=P.length;V<I;V++)g(P[V],D,V,O);else g(P,D,0,O)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(b,N,L,O){if(v(b,N,L,O)===!0){const D=b.__offset,w=b.value;if(Array.isArray(w)){let P=0;for(let V=0;V<w.length;V++){const I=w[V],z=T(I,!0);m(I,b.__data,P),P+=z.storage/Float32Array.BYTES_PER_ELEMENT}}else m(w,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,D,b.__data)}}function m(b,N,L){typeof b=="number"||typeof b=="boolean"?N[L]=b:b.isMatrix3?(N[L]=b.elements[0],N[L+1]=b.elements[1],N[L+2]=b.elements[2],N[L+3]=0,N[L+4]=b.elements[3],N[L+5]=b.elements[4],N[L+6]=b.elements[5],N[L+7]=0,N[L+8]=b.elements[6],N[L+9]=b.elements[7],N[L+10]=b.elements[8],N[L+11]=0):ArrayBuffer.isView(b)?N.set(b.subarray(0,N.length-L),L):b.toArray(N,L)}function v(b,N,L,O){const D=b.value,w=N+"_"+L;if(Array.isArray(D)){O[w]===void 0&&(O[w]=[]);const P=O[w];let V=!1;for(let I=0;I<D.length;I++)x(D[I],P,I)===!0&&(V=!0);return V}return x(D,O,w)}function x(b,N,L){if(N[L]===void 0)return typeof b=="number"||typeof b=="boolean"?N[L]=b:ArrayBuffer.isView(b)?N[L]=b.slice():N[L]=b.clone(),!0;{const O=N[L];if(typeof b=="number"||typeof b=="boolean"){if(O!==b)return N[L]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(O.equals(b)===!1)return O.copy(b),!0}}return!1}function E(b){const N=b.uniforms;let L=0;const O=16;for(let w=0,P=N.length;w<P;w++){const V=Array.isArray(N[w])?N[w]:[N[w]];for(let I=0,z=V.length;I<z;I++){const W=V[I],Z=Array.isArray(W.value)?W.value:[W.value],B=Array.isArray(N[w])||Array.isArray(W.value);let le=L;for(let ne=0,K=Z.length;ne<K;ne++){const q=Z[ne],J=T(q,B),k=L%O,ie=k%J.boundary,Ce=k+ie;L+=ie,Ce!==0&&O-Ce<J.storage&&(L+=O-Ce),ne===0&&(le=L),L+=J.storage}const re=W.type==="int"?Int32Array:W.type==="uint"?Uint32Array:Float32Array;W.__data=new re((L-le)/Float32Array.BYTES_PER_ELEMENT),W.__offset=le}}const D=L%O;return D>0&&(L+=O-D),b.__size=L,b.__cache={},this}function T(b,N){const L={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(L.boundary=4,L.storage=4):b.isVector2?(L.boundary=8,L.storage=8):b.isVector3||b.isColor?(L.boundary=16,L.storage=12):b.isVector4?(L.boundary=16,L.storage=16):b.isMatrix3?(L.boundary=16,L.storage=48):b.isMatrix4?(L.boundary=16,L.storage=64):b.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(L.boundary=16,L.storage=b.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",b),N===!0&&(L.boundary=16,L.storage=Math.ceil(L.storage/16)*16),L}function y(b){const N=b.target;N.removeEventListener("dispose",y),n.deleteBuffer(s[N.id]),delete s[N.id],delete o[N.id]}function S(){for(const b in s)n.deleteBuffer(s[b]);s={},o={}}return{bind:u,update:d,dispose:S}}const dD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fr=null;function fD(){return fr===null&&(fr=new rC(dD,16,16,fs,Rr),fr.name="DFG_LUT",fr.minFilter=ti,fr.magFilter=ti,fr.wrapS=Wr,fr.wrapT=Wr,fr.generateMipmaps=!1,fr.needsUpdate=!0),fr}class hD{constructor(e={}){const{canvas:t=PA(),context:r=null,depth:s=!0,stencil:o=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:v=!1,outputBufferType:x=gi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const T=x,y=new Set([Nm,Im,Dm]),S=new Set([gi,Tr,Ll,mo,Pm,Lm]),b=new Uint32Array(4),N=new Int32Array(4),L={textures:[],min:[],max:[],resolution:[]};let O=null,D=null;const w=[],P=[];let V=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let z=!1,W=null,Z=null,B=null,le=null;this._outputColorSpace=ei;let re=0,ne=0,K=null,q=-1,J=null;const k=new rn,ie=new rn;let Ce=null;const se=new Mt(0);let xe=0,Me=t.width,Re=t.height,ye=1,Ue=null,ut=null;const Je=new rn(0,0,Me,Re),pt=new rn(0,0,Me,Re);let yt=!1;const ot=new Il,Ft=new zm;let kt=!1,Xt=!1;const vt=new en,hn=new me,Nt=new rn,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let an=!1;function pn(){return K===null?ye:1}let j=r;function mn(C,$){return t.getContext(C,$)}let bt,Ct,De,Ht,Ze,tt,F,R,ue,G,X,ce,oe,Q,te,Se,U,ve,pe,be,Ae,Le,Xe;try{const C={alpha:!0,depth:s,stencil:o,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rm}`),t.addEventListener("webglcontextlost",Qe,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",ke,!1),j===null){const $="webgl2";if(j=mn($,C),j===null)throw mn($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}dt()}catch(C){throw t.removeEventListener("webglcontextlost",Qe,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),It("WebGLRenderer: "+C.message),C}function dt(){bt=new g2(j),bt.init(),Ae=new iD(j,bt),Ct=new a2(j,bt,e,Ae),De=new tD(j,bt),Ct.reversedDepthBuffer&&v&&De.buffers.depth.setReversed(!0),Z=j.createFramebuffer(),B=j.createFramebuffer(),le=j.createFramebuffer(),Ht=new y2(j),Ze=new H3,tt=new nD(j,bt,De,Ze,Ct,Ae,Ht),F=new m2(I),R=new xC(j),Le=new i2(j,R),ue=new v2(j,R,Ht,Le),G=new x2(j,ue,R,Le,Ht),ve=new S2(j,Ct,tt),te=new s2(Ze),X=new z3(I,F,bt,Ct,Le,te),ce=new uD(I,Ze),oe=new V3,Q=new K3(bt),U=new n2(I,F,De,G,E,f),Se=new eD(I,G,Ct),Xe=new cD(j,Ht,Ct,De),pe=new r2(j,bt,Ht),be=new _2(j,bt,Ht),Ht.programs=X.programs,I.capabilities=Ct,I.extensions=bt,I.properties=Ze,I.renderLists=oe,I.shadowMap=Se,I.state=De,I.info=Ht}T!==gi&&(V=new E2(T,t.width,t.height,d,s,o));const we=new oD(I,j);this.xr=we,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const C=bt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=bt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(C){C!==void 0&&(ye=C,this.setSize(Me,Re,!1))},this.getSize=function(C){return C.set(Me,Re)},this.setSize=function(C,$,he=!0){if(we.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=C,Re=$,t.width=Math.floor(C*ye),t.height=Math.floor($*ye),he===!0&&(t.style.width=C+"px",t.style.height=$+"px"),V!==null&&V.setSize(t.width,t.height),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(Me*ye,Re*ye).floor()},this.setDrawingBufferSize=function(C,$,he){Me=C,Re=$,ye=he,t.width=Math.floor(C*he),t.height=Math.floor($*he),this.setViewport(0,0,C,$)},this.setEffects=function(C){if(T===gi){It("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let $=0;$<C.length;$++)if(C[$].isOutputPass===!0){ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(k)},this.getViewport=function(C){return C.copy(Je)},this.setViewport=function(C,$,he,de){C.isVector4?Je.set(C.x,C.y,C.z,C.w):Je.set(C,$,he,de),De.viewport(k.copy(Je).multiplyScalar(pn()).round())},this.getScissor=function(C){return C.copy(pt)},this.setScissor=function(C,$,he,de){C.isVector4?pt.set(C.x,C.y,C.z,C.w):pt.set(C,$,he,de),De.scissor(ie.copy(pt).multiplyScalar(pn()).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(C){De.setScissorTest(yt=C)},this.setOpaqueSort=function(C){Ue=C},this.setTransparentSort=function(C){ut=C},this.getClearColor=function(C){return C.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(C=!0,$=!0,he=!0){let de=0;if(C){let ae=!1;if(K!==null){const Oe=K.texture.format;ae=y.has(Oe)}if(ae){const Oe=K.texture.type,Ge=S.has(Oe),Ne=U.getClearColor(),Fe=U.getClearAlpha(),Ve=Ne.r,nt=Ne.g,ht=Ne.b;Ge?(b[0]=Ve,b[1]=nt,b[2]=ht,b[3]=Fe,j.clearBufferuiv(j.COLOR,0,b)):(N[0]=Ve,N[1]=nt,N[2]=ht,N[3]=Fe,j.clearBufferiv(j.COLOR,0,N))}else de|=j.COLOR_BUFFER_BIT}$&&(de|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(de|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),de!==0&&j.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),W=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Qe,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),U.dispose(),oe.dispose(),Q.dispose(),tt.dispose(),Ze.dispose(),F.dispose(),G.dispose(),ue.dispose(),Le.dispose(),Xe.dispose(),X.dispose(),we.dispose(),we.removeEventListener("sessionstart",Ba),we.removeEventListener("sessionend",Mi),ai.stop()};function Qe(C){C.preventDefault(),J_("WebGLRenderer: Context Lost."),z=!0}function st(){J_("WebGLRenderer: Context Restored."),z=!1;const C=Ht.autoReset,$=Se.enabled,he=Se.autoUpdate,de=Se.needsUpdate,ae=Se.type;dt(),Ht.autoReset=C,Se.enabled=$,Se.autoUpdate=he,Se.needsUpdate=de,Se.type=ae}function ke(C){It("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function St(C){const $=C.target;$.removeEventListener("dispose",St),qt($)}function qt(C){Ln(C),Ze.remove(C)}function Ln(C){const $=Ze.get(C).programs;$!==void 0&&($.forEach(function(he){X.releaseProgram(he)}),C.isShaderMaterial&&X.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,he,de,ae,Oe){$===null&&($=zt);const Ge=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Ne=ra(C,$,he,de,ae);De.setMaterial(de,Ge);let Fe=he.index,Ve=1;if(de.wireframe===!0){if(Fe=ue.getWireframeAttribute(he),Fe===void 0)return;Ve=2}const nt=he.drawRange,ht=he.attributes.position;let We=nt.start*Ve,mt=(nt.start+nt.count)*Ve;Oe!==null&&(We=Math.max(We,Oe.start*Ve),mt=Math.min(mt,(Oe.start+Oe.count)*Ve)),Fe!==null?(We=Math.max(We,0),mt=Math.min(mt,Fe.count)):ht!=null&&(We=Math.max(We,0),mt=Math.min(mt,ht.count));const Bt=mt-We;if(Bt<0||Bt===1/0)return;Le.setup(ae,de,Ne,he,Fe);let Lt,At=pe;if(Fe!==null&&(Lt=R.get(Fe),At=be,At.setIndex(Lt)),ae.isMesh)de.wireframe===!0?(De.setLineWidth(de.wireframeLinewidth*pn()),At.setMode(j.LINES)):At.setMode(j.TRIANGLES);else if(ae.isLine){let Yt=de.linewidth;Yt===void 0&&(Yt=1),De.setLineWidth(Yt*pn()),ae.isLineSegments?At.setMode(j.LINES):ae.isLineLoop?At.setMode(j.LINE_LOOP):At.setMode(j.LINE_STRIP)}else ae.isPoints?At.setMode(j.POINTS):ae.isSprite&&At.setMode(j.TRIANGLES);if(ae.isBatchedMesh)if(bt.get("WEBGL_multi_draw"))At.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const Yt=ae._multiDrawStarts,$e=ae._multiDrawCounts,sn=ae._multiDrawCount,Ye=Fe?R.get(Fe).bytesPerElement:1,si=Ze.get(de).currentProgram.getUniforms();for(let on=0;on<sn;on++)si.setValue(j,"_gl_DrawID",on),At.render(Yt[on]/Ye,$e[on])}else if(ae.isInstancedMesh)At.renderInstances(We,Bt,ae.count);else if(he.isInstancedBufferGeometry){const Yt=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,$e=Math.min(he.instanceCount,Yt);At.renderInstances(We,Bt,$e)}else At.render(We,Bt)};function ea(C,$,he,de){W!==null&&C.isNodeMaterial&&W.setObject(de,C),kt===!0&&te.setState(C,he,!1),C.transparent===!0&&C.side===_r&&C.forceSinglePass===!1?(C.side=ii,C.needsUpdate=!0,sr(C,$,de),C.side=ds,C.needsUpdate=!0,sr(C,$,de),C.side=_r):sr(C,$,de)}this.compile=function(C,$,he=null){he===null&&(he=C),W!==null&&W.renderStart(C,$,he),D=Q.get(he),D.init($),P.push(D),he.traverseVisible(function(ae){ae.isLight&&ae.layers.test($.layers)&&(D.pushLight(ae),ae.castShadow&&D.pushShadow(ae))}),C!==he&&C.traverseVisible(function(ae){ae.isLight&&ae.layers.test($.layers)&&(D.pushLight(ae),ae.castShadow&&D.pushShadow(ae))}),D.setupLights(),W!==null&&W.updateLights(D.state.lightsArray),Xt=this.localClippingEnabled,kt=te.init(this.clippingPlanes,Xt),kt===!0&&te.setGlobalState(this.clippingPlanes,$),W!==null&&Se.render(D.state.shadowsArray,he,$);const de=new Set;return C.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Oe=ae.material;if(Oe)if(Array.isArray(Oe))for(let Ge=0;Ge<Oe.length;Ge++){const Ne=Oe[Ge];ea(Ne,he,$,ae),de.add(Ne)}else ea(Oe,he,$,ae),de.add(Oe)}),D=P.pop(),W!==null&&W.renderEnd(),de},this.compileAsync=function(C,$,he=null){const de=this.compile(C,$,he);return new Promise(ae=>{function Oe(){if(de.forEach(function(Ge){const Fe=Ze.get(Ge).currentProgram;(Fe===void 0||Fe.isReady())&&de.delete(Ge)}),de.size===0){ae(C);return}setTimeout(Oe,10)}bt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let rr=null;function ta(C){rr&&rr(C)}function Ba(){ai.stop()}function Mi(){ai.start()}const ai=new tM;ai.setAnimationLoop(ta),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(C){rr=C,we.setAnimationLoop(C),C===null?ai.stop():ai.start()},we.addEventListener("sessionstart",Ba),we.addEventListener("sessionend",Mi),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;W!==null&&W.renderStart(C,$);const he=we.enabled===!0&&we.isPresenting===!0,de=V!==null&&(K===null||he)&&V.begin(I,K);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera($),$=we.getCamera()),C.isScene===!0&&C.onBeforeRender(I,C,$,K),D=Q.get(C,P.length),D.init($),D.state.textureUnits=tt.getTextureUnits(),P.push(D),vt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),$.isArrayCamera?Ft.setFromArrayCamera($):ot.setFromProjectionMatrix(vt,er,$.reversedDepth),Xt=this.localClippingEnabled,kt=te.init(this.clippingPlanes,Xt),O=oe.get(C,w.length),O.init(),w.push(O),this.info.render.frame++,we.enabled===!0&&we.isPresenting===!0){const Ge=I.xr.getDepthSensingMesh();Ge!==null&&na(Ge,$,-1/0,I.sortObjects)}na(C,$,0,I.sortObjects),O.finish(),W!==null&&W.updateLights(D.state.lightsArray),I.sortObjects===!0&&O.sort(Ue,ut),an=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,an&&U.addToRenderList(O,C),this.info.autoReset===!0&&this.info.reset(),kt===!0&&te.beginShadows();const ae=D.state.shadowsArray;if(Se.render(ae,C,$),kt===!0&&te.endShadows(),(de&&V.hasRenderPass())===!1){const Ge=O.opaque,Ne=O.transmissive;if(D.setupLights(),$.isArrayCamera){const Fe=$.cameras;if(Ne.length>0)for(let Ve=0,nt=Fe.length;Ve<nt;Ve++){const ht=Fe[Ve];ia(Ge,Ne,C,ht)}an&&U.render(C);for(let Ve=0,nt=Fe.length;Ve<nt;Ve++){const ht=Fe[Ve];ar(O,C,ht,ht.viewport)}}else Ne.length>0&&ia(Ge,Ne,C,$),an&&U.render(C),ar(O,C,$)}K!==null&&ne===0&&(tt.updateMultisampleRenderTarget(K),tt.updateRenderTargetMipmap(K)),de&&V.end(I),C.isScene===!0&&C.onAfterRender(I,C,$),Le.resetDefaultState(),q=-1,J=null,P.pop(),P.length>0?(D=P[P.length-1],tt.setTextureUnits(D.state.textureUnits),kt===!0&&te.setGlobalState(I.clippingPlanes,D.state.camera)):D=null,w.pop(),w.length>0?O=w[w.length-1]:O=null,W!==null&&W.renderEnd()};function na(C,$,he,de){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)he=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLight)D.pushLight(C),C.castShadow&&D.pushShadow(C);else if(C.isSprite){const Ge=$.isArrayCamera?Ft:ot;if(!C.frustumCulled||C.intersectsFrustum(Ge)){de&&Nt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(vt);const Ne=G.update(C),Fe=C.material;Fe.visible&&O.push(C,Ne,Fe,he,Nt.z,null,$)}}else if(C.isMesh||C.isLine||C.isPoints){const Ge=$.isArrayCamera?Ft:ot;if(!C.frustumCulled||C.intersectsFrustum(Ge)){const Ne=G.update(C),Fe=C.material;if(de&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Nt.copy(C.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Nt.copy(Ne.boundingSphere.center)),Nt.applyMatrix4(C.matrixWorld).applyMatrix4(vt)),Array.isArray(Fe)){const Ve=Ne.groups;for(let nt=0,ht=Ve.length;nt<ht;nt++){const We=Ve[nt],mt=Fe[We.materialIndex];mt&&mt.visible&&O.push(C,Ne,mt,he,Nt.z,We,$)}}else Fe.visible&&O.push(C,Ne,Fe,he,Nt.z,null,$)}}}const Oe=C.children;for(let Ge=0,Ne=Oe.length;Ge<Ne;Ge++)na(Oe[Ge],$,he,de)}function ar(C,$,he,de){const{opaque:ae,transmissive:Oe,transparent:Ge}=C;D.setupLightsView(he),kt===!0&&te.setGlobalState(I.clippingPlanes,he),de&&De.viewport(k.copy(de)),ae.length>0&&ze(ae,$,he),Oe.length>0&&ze(Oe,$,he),Ge.length>0&&ze(Ge,$,he),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function ia(C,$,he,de){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[de.id]===void 0){const We=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[de.id]=new wr(1,1,{generateMipmaps:!0,type:We?Rr:gi,minFilter:La,samples:Math.max(4,Ct.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Oe=D.state.transmissionRenderTarget[de.id],Ge=de.viewport||k;Oe.setSize(Ge.z*I.transmissionResolutionScale,Ge.w*I.transmissionResolutionScale);const Ne=I.getRenderTarget(),Fe=I.getActiveCubeFace(),Ve=I.getActiveMipmapLevel();I.setRenderTarget(Oe),I.getClearColor(se),xe=I.getClearAlpha(),xe<1&&I.setClearColor(16777215,.5),I.clear(),an&&U.render(he);const nt=I.toneMapping;I.toneMapping=Xr;const ht=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),D.setupLightsView(de),kt===!0&&te.setGlobalState(I.clippingPlanes,de),ze(C,he,de),tt.updateMultisampleRenderTarget(Oe),tt.updateRenderTargetMipmap(Oe),bt.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let mt=0,Bt=$.length;mt<Bt;mt++){const Lt=$[mt],{object:At,geometry:Yt,material:$e,group:sn}=Lt;if($e.side===_r&&At.layers.test(de.layers)){const Ye=$e.side;$e.side=ii,$e.needsUpdate=!0,za(At,he,de,Yt,$e,sn),$e.side=Ye,$e.needsUpdate=!0,We=!0}}We===!0&&(tt.updateMultisampleRenderTarget(Oe),tt.updateRenderTargetMipmap(Oe))}I.setRenderTarget(Ne,Fe,Ve),I.setClearColor(se,xe),ht!==void 0&&(de.viewport=ht),I.toneMapping=nt}function ze(C,$,he){const de=$.isScene===!0?$.overrideMaterial:null;for(let ae=0,Oe=C.length;ae<Oe;ae++){const Ge=C[ae],{object:Ne,geometry:Fe,group:Ve}=Ge;let nt=Ge.material;nt.allowOverride===!0&&de!==null&&(nt=de),Ne.layers.test(he.layers)&&za(Ne,$,he,Fe,nt,Ve)}}function za(C,$,he,de,ae,Oe){W!==null&&ae.isNodeMaterial&&W.setObject(C,ae),C.onBeforeRender(I,$,he,de,ae,Oe),C.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ae.onBeforeRender(I,$,he,de,C,Oe),ae.transparent===!0&&ae.side===_r&&ae.forceSinglePass===!1?(ae.side=ii,ae.needsUpdate=!0,I.renderBufferDirect(he,$,de,ae,C,Oe),ae.side=ds,ae.needsUpdate=!0,I.renderBufferDirect(he,$,de,ae,C,Oe),ae.side=_r):I.renderBufferDirect(he,$,de,ae,C,Oe),C.onAfterRender(I,$,he,de,ae,Oe)}function zn(C){let $=0;for(const he of C)he.texture!==null&&$++;return $}function sr(C,$,he){$.isScene!==!0&&($=zt);const de=Ze.get(C),ae=D.state.lights,Oe=D.state.shadowsArray,Ge=ae.state.version,Ne=X.getParameters(C,ae.state,Oe,$,he,D.state.lightProbeGridArray),Fe=X.getProgramCacheKey(Ne);let Ve=de.programs;de.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?$.environment:null,de.fog=$.fog;const nt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;de.envMap=F.get(C.envMap||de.environment,nt),de.envMapRotation=de.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,Ve===void 0&&(C.addEventListener("dispose",St),Ve=new Map,de.programs=Ve,de.programVariants=new Map);let ht=Ve.get(Fe);if(ht!==void 0){if(de.currentProgram===ht&&de.lightsStateVersion===Ge)return Ha(C,Ne),ht}else Ne.uniforms=X.getUniforms(C),W!==null&&C.isNodeMaterial&&W.build(C,he,Ne),C.onBeforeCompile(Ne,I),ht=X.acquireProgram(Ne,Fe),Ve.set(Fe,ht),de.uniforms=Ne.uniforms;const We=de.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=te.uniform),Ha(C,Ne),de.needsLights=Ar(C),de.lightsStateVersion=Ge,de.needsLights&&(We.ambientLightColor.value=ae.state.ambient,We.lightProbe.value=ae.state.probe,We.sunLights.value=ae.state.sun,We.sunLightShadows.value=ae.state.sunShadow,We.directionalLights.value=ae.state.directional,We.directionalLightShadows.value=ae.state.directionalShadow,We.spotLights.value=ae.state.spot,We.spotLightShadows.value=ae.state.spotShadow,We.rectAreaLights.value=ae.state.rectArea,We.ltc_1.value=ae.state.rectAreaLTC1,We.ltc_2.value=ae.state.rectAreaLTC2,We.pointLights.value=ae.state.point,We.pointLightShadows.value=ae.state.pointShadow,We.hemisphereLights.value=ae.state.hemi,We.sunShadowMatrix.value=ae.state.sunShadowMatrix,We.sunShadowCascade.value=ae.state.sunShadowCascade,We.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,We.spotLightMatrix.value=ae.state.spotLightMatrix,We.spotLightMap.value=ae.state.spotLightMap,We.pointShadowMatrix.value=ae.state.pointShadowMatrix),de.numLightProbeGrids=zn(D.state.lightProbeGridArray),de.currentProgram=ht,de.uniformsList=null,ht}function ys(C,$,he,de,ae){const Oe=Ze.get(C),Ge=Oe.currentProgram.id+","+de+","+ae;let Ne=Oe.programVariants.get(Ge);return Ne===void 0?(Ne=sr(C,$,he),Oe.programVariants.set(Ge,Ne)):(Oe.currentProgram=Ne,Oe.uniformsList=null,Oe.outputColorSpace=de,Oe.toneMapping=ae),Ne}function Gt(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=zc.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function Ha(C,$){const he=Ze.get(C);he.outputColorSpace=$.outputColorSpace,he.batching=$.batching,he.batchingColor=$.batchingColor,he.instancing=$.instancing,he.instancingColor=$.instancingColor,he.instancingMorph=$.instancingMorph,he.skinning=$.skinning,he.morphTargets=$.morphTargets,he.morphNormals=$.morphNormals,he.morphColors=$.morphColors,he.morphTargetsCount=$.morphTargetsCount,he.numClippingPlanes=$.numClippingPlanes,he.numIntersection=$.numClipIntersection,he.vertexAlphas=$.vertexAlphas,he.vertexTangents=$.vertexTangents,he.toneMapping=$.toneMapping}function ra(C,$,he,de,ae){$.isScene!==!0&&($=zt),tt.resetTextureUnits();const Oe=$.fog,Ge=de.isMeshStandardMaterial||de.isMeshLambertMaterial||de.isMeshPhongMaterial?$.environment:null,Ne=K===null?I.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Tt.workingColorSpace,Fe=de.isMeshStandardMaterial||de.isMeshLambertMaterial&&!de.envMap||de.isMeshPhongMaterial&&!de.envMap,Ve=F.get(de.envMap||Ge,Fe),nt=de.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,ht=!!he.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),We=!!he.morphAttributes.position,mt=!!he.morphAttributes.normal,Bt=!!he.morphAttributes.color;let Lt=Xr;de.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Lt=I.toneMapping);const At=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Yt=At!==void 0?At.length:0,$e=Ze.get(de),sn=D.state.lights;if(kt===!0&&(Xt===!0||C!==J)){const wt=C===J&&de.id===q;te.setState(de,C,wt)}let Ye=!1,si=!1;de.version===$e.__version?$e.needsLights&&$e.lightsStateVersion!==sn.state.version||ae.isBatchedMesh&&$e.batching===!1||!ae.isBatchedMesh&&$e.batching===!0||ae.isBatchedMesh&&$e.batchingColor===!0&&ae._colorsTexture===null||ae.isBatchedMesh&&$e.batchingColor===!1&&ae._colorsTexture!==null||ae.isInstancedMesh&&$e.instancing===!1||!ae.isInstancedMesh&&$e.instancing===!0||ae.isSkinnedMesh&&$e.skinning===!1||!ae.isSkinnedMesh&&$e.skinning===!0||ae.isInstancedMesh&&$e.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&$e.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&$e.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&$e.instancingMorph===!1&&ae.morphTexture!==null||$e.envMap!==Ve||de.fog===!0&&$e.fog!==Oe||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==te.numPlanes||$e.numIntersection!==te.numIntersection)||$e.vertexAlphas!==nt||$e.vertexTangents!==ht||$e.morphTargets!==We||$e.morphNormals!==mt||$e.morphColors!==Bt||$e.morphTargetsCount!==Yt||$e.numLightProbeGrids!==zn(D.state.lightProbeGridArray)?Ye=!0:($e.outputColorSpace!==Ne||$e.toneMapping!==Lt)&&(si=!0):(Ye=!0,$e.__version=de.version);let on=$e.currentProgram;(Ye===!0||si===!0)&&(on=si===!0?ys(de,$,ae,Ne,Lt):sr(de,$,ae),W&&de.isNodeMaterial&&W.onUpdateProgram(de,on,$e));let Fi=!1,Xn=!1,oi=!1;const _t=on.getUniforms(),Jt=$e.uniforms;if(De.useProgram(on.program)&&(Fi=!0,Xn=!0,oi=!0),de.id!==q&&(q=de.id,Xn=!0),Fi||J!==C){De.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),_t.setValue(j,"projectionMatrix",C.projectionMatrix),_t.setValue(j,"viewMatrix",C.matrixWorldInverse);const Ot=_t.map.cameraPosition;Ot!==void 0&&Ot.setValue(j,hn.setFromMatrixPosition(C.matrixWorld)),Ct.logarithmicDepthBuffer&&_t.setValue(j,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&_t.setValue(j,"isOrthographic",C.isOrthographicCamera===!0),J!==C&&(J=C,Xn=!0,oi=!0)}if($e.needsLights&&(sn.state.sunShadowMap.length>0&&_t.setValue(j,"sunShadowMap",sn.state.sunShadowMap,tt),sn.state.directionalShadowMap.length>0&&_t.setValue(j,"directionalShadowMap",sn.state.directionalShadowMap,tt),sn.state.spotShadowMap.length>0&&_t.setValue(j,"spotShadowMap",sn.state.spotShadowMap,tt),sn.state.pointShadowMap.length>0&&_t.setValue(j,"pointShadowMap",sn.state.pointShadowMap,tt)),ae.isSkinnedMesh){_t.setOptional(j,ae,"bindMatrix"),_t.setOptional(j,ae,"bindMatrixInverse");const wt=ae.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),_t.setValue(j,"boneTexture",wt.boneTexture,tt))}ae.isBatchedMesh&&(_t.setOptional(j,ae,"batchingTexture"),_t.setValue(j,"batchingTexture",ae._matricesTexture,tt),_t.setOptional(j,ae,"batchingIdTexture"),_t.setValue(j,"batchingIdTexture",ae._indirectTexture,tt),_t.setOptional(j,ae,"batchingColorTexture"),ae._colorsTexture!==null&&_t.setValue(j,"batchingColorTexture",ae._colorsTexture,tt));const _n=he.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&ve.update(ae,he,on),(Xn||$e.receiveShadow!==ae.receiveShadow)&&($e.receiveShadow=ae.receiveShadow,_t.setValue(j,"receiveShadow",ae.receiveShadow)),(de.isMeshStandardMaterial||de.isMeshLambertMaterial||de.isMeshPhongMaterial)&&de.envMap===null&&$.environment!==null&&(Jt.envMapIntensity.value=$.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=fD()),Xn){if(_t.setValue(j,"toneMappingExposure",I.toneMappingExposure),$e.needsLights&&Ga(Jt,oi),Oe&&de.fog===!0&&ce.refreshFogUniforms(Jt,Oe),ce.refreshMaterialUniforms(Jt,de,ye,Re,D.state.transmissionRenderTarget[C.id]),$e.needsLights&&$e.numLightProbeGrids>0){const wt=L;let Ot=0;for(const cn of D.state.lightProbeGridArray)cn.texture!==null&&(wt.textures[Ot]=cn.texture,wt.min[Ot]=cn.boundingBox.min,wt.max[Ot]=cn.boundingBox.max,wt.resolution[Ot]=cn.resolution,Ot++);for(const cn in wt)wt[cn].length=Ot;Jt.probesSH.value=wt.textures,Jt.probesMin.value=wt.min,Jt.probesMax.value=wt.max,Jt.probesResolution.value=wt.resolution}zc.upload(j,Gt($e),Jt,tt)}if(de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(zc.upload(j,Gt($e),Jt,tt),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&_t.setValue(j,"center",ae.center),_t.setValue(j,"modelViewMatrix",ae.modelViewMatrix),_t.setValue(j,"normalMatrix",ae.normalMatrix),_t.setValue(j,"modelMatrix",ae.matrixWorld),de.uniformsGroups!==void 0){const wt=de.uniformsGroups;for(let Ot=0,cn=wt.length;Ot<cn;Ot++){const ki=wt[Ot];Xe.update(ki,on),Xe.bind(ki,on)}}return on}function Ga(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.sunLights.needsUpdate=$,C.sunLightShadows.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function Ar(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(C,$,he){const de=Ze.get(C);de.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,de.__autoAllocateDepthBuffer===!1&&(de.__useRenderToTexture=!1),Ze.get(C.texture).__webglTexture=$,Ze.get(C.depthTexture).__webglTexture=de.__autoAllocateDepthBuffer?void 0:he,de.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,$){const he=Ze.get(C);he.__webglFramebuffer=$,he.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(C,$=0,he=0){K=C,re=$,ne=he;let de=null,ae=!1,Oe=!1;if(C){const Ne=Ze.get(C);if(Ne.__useDefaultFramebuffer!==void 0){De.bindFramebuffer(j.FRAMEBUFFER,Ne.__webglFramebuffer),k.copy(C.viewport),ie.copy(C.scissor),Ce=C.scissorTest,De.viewport(k),De.scissor(ie),De.setScissorTest(Ce),q=-1;return}else if(Ne.__webglFramebuffer===void 0)tt.setupRenderTarget(C);else if(Ne.__hasExternalTextures)tt.rebindTextures(C,Ze.get(C.texture).__webglTexture,Ze.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const nt=C.depthTexture;if(Ne.__boundDepthTexture!==nt){if(nt!==null&&Ze.has(nt)&&(C.width!==nt.image.width||C.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(C)}}const Fe=C.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Oe=!0);const Ve=Ze.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ve[$])?de=Ve[$][he]:de=Ve[$],ae=!0):C.samples>0&&tt.useMultisampledRTT(C)===!1?de=Ze.get(C).__webglMultisampledFramebuffer:Array.isArray(Ve)?de=Ve[he]:de=Ve,k.copy(C.viewport),ie.copy(C.scissor),Ce=C.scissorTest}else k.copy(Je).multiplyScalar(ye).floor(),ie.copy(pt).multiplyScalar(ye).floor(),Ce=yt;if(he!==0&&(de=Z),De.bindFramebuffer(j.FRAMEBUFFER,de)&&De.drawBuffers(C,de),De.viewport(k),De.scissor(ie),De.setScissorTest(Ce),ae){const Ne=Ze.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ne.__webglTexture,he)}else if(Oe){const Ne=$;for(let Fe=0;Fe<C.textures.length;Fe++){const Ve=Ze.get(C.textures[Fe]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Fe,Ve.__webglTexture,he,Ne)}}else if(C!==null&&he!==0){const Ne=Ze.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ne.__webglTexture,he)}q=-1};function Va(C){const $=Ze.get(C);return($.__readFormat!==C.format||$.__readType!==C.type)&&($.__readFormat=C.format,$.__readType=C.type,$.__formatReadable=Ct.textureFormatReadable(C.format),$.__typeReadable=Ct.textureTypeReadable(C.type)),$}this.readRenderTargetPixels=function(C,$,he,de,ae,Oe,Ge,Ne=0){if(!(C&&C.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ge!==void 0&&(Fe=Fe[Ge],Array.isArray(Fe)&&(Fe=Fe[0])),Fe){De.bindFramebuffer(j.FRAMEBUFFER,Fe);try{const Ve=C.textures[Ne],nt=Ve.format,ht=Ve.type;C.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ne);const We=Va(Ve);if(We.__formatReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(We.__typeReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-de&&he>=0&&he<=C.height-ae&&j.readPixels($,he,de,ae,Ae.convert(nt),Ae.convert(ht),Oe)}finally{const Ve=K!==null?Ze.get(K).__webglFramebuffer:null;De.bindFramebuffer(j.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(C,$,he,de,ae,Oe,Ge,Ne=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ge!==void 0&&(Fe=Fe[Ge],Array.isArray(Fe)&&(Fe=Fe[0])),Fe)if($>=0&&$<=C.width-de&&he>=0&&he<=C.height-ae){De.bindFramebuffer(j.FRAMEBUFFER,Fe);const Ve=C.textures[Ne],nt=Ve.format,ht=Ve.type;C.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ne);const We=Va(Ve);if(We.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(We.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const mt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,mt),j.bufferData(j.PIXEL_PACK_BUFFER,Oe.byteLength,j.STREAM_READ),j.readPixels($,he,de,ae,Ae.convert(nt),Ae.convert(ht),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);const Bt=K!==null?Ze.get(K).__webglFramebuffer:null;De.bindFramebuffer(j.FRAMEBUFFER,Bt);const Lt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await LA(j,Lt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,mt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Oe),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(mt),j.deleteSync(Lt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,$=null,he=0){const de=Math.pow(2,-he),ae=Math.floor(C.image.width*de),Oe=Math.floor(C.image.height*de),Ge=$!==null?$.x:0,Ne=$!==null?$.y:0;tt.setTexture2D(C,0),j.copyTexSubImage2D(j.TEXTURE_2D,he,0,0,Ge,Ne,ae,Oe),De.unbindTexture()},this.copyTextureToTexture=function(C,$,he=null,de=null,ae=0,Oe=0){let Ge,Ne,Fe,Ve,nt,ht,We,mt,Bt;const Lt=C.isCompressedTexture?C.mipmaps[Oe]:C.image;if(he!==null)Ge=he.max.x-he.min.x,Ne=he.max.y-he.min.y,Fe=he.isBox3?he.max.z-he.min.z:1,Ve=he.min.x,nt=he.min.y,ht=he.isBox3?he.min.z:0;else{const _t=Math.pow(2,-ae);Ge=Math.floor(Lt.width*_t),Ne=Math.floor(Lt.height*_t),C.isDataArrayTexture?Fe=Lt.depth:C.isData3DTexture?Fe=Math.floor(Lt.depth*_t):Fe=1,Ve=0,nt=0,ht=0}de!==null?(We=de.x,mt=de.y,Bt=de.z):(We=0,mt=0,Bt=0);const At=Ae.convert($.format),Yt=Ae.convert($.type);let $e;$.isData3DTexture?(tt.setTexture3D($,0),$e=j.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(tt.setTexture2DArray($,0),$e=j.TEXTURE_2D_ARRAY):(tt.setTexture2D($,0),$e=j.TEXTURE_2D),De.activeTexture(j.TEXTURE0),De.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,$.flipY),De.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),De.pixelStorei(j.UNPACK_ALIGNMENT,$.unpackAlignment);const sn=De.getParameter(j.UNPACK_ROW_LENGTH),Ye=De.getParameter(j.UNPACK_IMAGE_HEIGHT),si=De.getParameter(j.UNPACK_SKIP_PIXELS),on=De.getParameter(j.UNPACK_SKIP_ROWS),Fi=De.getParameter(j.UNPACK_SKIP_IMAGES);De.pixelStorei(j.UNPACK_ROW_LENGTH,Lt.width),De.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Lt.height),De.pixelStorei(j.UNPACK_SKIP_PIXELS,Ve),De.pixelStorei(j.UNPACK_SKIP_ROWS,nt),De.pixelStorei(j.UNPACK_SKIP_IMAGES,ht);const Xn=C.isDataArrayTexture||C.isData3DTexture,oi=$.isDataArrayTexture||$.isData3DTexture;if(C.isDepthTexture){const _t=Ze.get(C),Jt=Ze.get($),_n=Ze.get(_t.__renderTarget),wt=Ze.get(Jt.__renderTarget);De.bindFramebuffer(j.READ_FRAMEBUFFER,_n.__webglFramebuffer),De.bindFramebuffer(j.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Ot=0;Ot<Fe;Ot++)Xn&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ze.get(C).__webglTexture,ae,ht+Ot),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ze.get($).__webglTexture,Oe,Bt+Ot)),j.blitFramebuffer(Ve,nt,Ve+Ge,nt+Ne,We,mt,We+Ge,mt+Ne,j.DEPTH_BUFFER_BIT,j.NEAREST);De.bindFramebuffer(j.READ_FRAMEBUFFER,null),De.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ae!==0||C.isRenderTargetTexture||Ze.has(C)){const _t=Ze.get(C),Jt=Ze.get($);De.bindFramebuffer(j.READ_FRAMEBUFFER,B),De.bindFramebuffer(j.DRAW_FRAMEBUFFER,le);for(let _n=0;_n<Fe;_n++)Xn?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,_t.__webglTexture,ae,ht+_n):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,_t.__webglTexture,ae),oi?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Jt.__webglTexture,Oe,Bt+_n):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Jt.__webglTexture,Oe),ae!==0?j.blitFramebuffer(Ve,nt,Ve+Ge,nt+Ne,We,mt,We+Ge,mt+Ne,j.COLOR_BUFFER_BIT,j.NEAREST):oi?j.copyTexSubImage3D($e,Oe,We,mt,Bt+_n,Ve,nt,Ge,Ne):j.copyTexSubImage2D($e,Oe,We,mt,Ve,nt,Ge,Ne);De.bindFramebuffer(j.READ_FRAMEBUFFER,null),De.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else oi?C.isDataTexture||C.isData3DTexture?j.texSubImage3D($e,Oe,We,mt,Bt,Ge,Ne,Fe,At,Yt,Lt.data):$.isCompressedArrayTexture?j.compressedTexSubImage3D($e,Oe,We,mt,Bt,Ge,Ne,Fe,At,Lt.data):j.texSubImage3D($e,Oe,We,mt,Bt,Ge,Ne,Fe,At,Yt,Lt):C.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Oe,We,mt,Ge,Ne,At,Yt,Lt.data):C.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Oe,We,mt,Lt.width,Lt.height,At,Lt.data):j.texSubImage2D(j.TEXTURE_2D,Oe,We,mt,Ge,Ne,At,Yt,Lt);De.pixelStorei(j.UNPACK_ROW_LENGTH,sn),De.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ye),De.pixelStorei(j.UNPACK_SKIP_PIXELS,si),De.pixelStorei(j.UNPACK_SKIP_ROWS,on),De.pixelStorei(j.UNPACK_SKIP_IMAGES,Fi),Oe===0&&$.generateMipmaps===!0&&$.mipmapsAutoUpdate===!0&&j.generateMipmap($e),De.unbindTexture()},this.initRenderTarget=function(C){Ze.get(C).__webglFramebuffer===void 0&&tt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?tt.setTextureCube(C,0):C.isData3DTexture?tt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?tt.setTexture2DArray(C,0):tt.setTexture2D(C,0),De.unbindTexture()},this.resetState=function(){re=0,ne=0,K=null,De.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return er}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}const cl=new me;function Pi(n,e,t,r,s,o){const u=2*Math.PI*s/4,d=Math.max(o-2*s,0),f=Math.PI/4;cl.copy(e),cl[r]=0,cl.normalize();const h=.5*u/(u+d),g=1-cl.angleTo(n)/f;return Math.sign(cl[t])===1?g*h:d/(u+d)+h+h*(1-g)}class Wm extends So{constructor(e=1,t=1,r=1,s=2,o=.1){const u=s*2+1;if(o=Math.min(e/2,t/2,r/2,o),super(1,1,1,u,u,u),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:r,segments:s,radius:o},u===1)return;const d=this.toNonIndexed();this.index=null,this.attributes.position=d.attributes.position,this.attributes.normal=d.attributes.normal,this.attributes.uv=d.attributes.uv;const f=new me,h=new me,g=new me(e,t,r).divideScalar(2).subScalar(o),m=this.attributes.position.array,v=this.attributes.normal.array,x=this.attributes.uv.array,E=m.length/6,T=new me,y=.5/u;for(let S=0,b=0;S<m.length;S+=3,b+=2)switch(f.fromArray(m,S),h.copy(f),h.x-=Math.sign(h.x)*y,h.y-=Math.sign(h.y)*y,h.z-=Math.sign(h.z)*y,h.normalize(),m[S+0]=g.x*Math.sign(f.x)+h.x*o,m[S+1]=g.y*Math.sign(f.y)+h.y*o,m[S+2]=g.z*Math.sign(f.z)+h.z*o,v[S+0]=h.x,v[S+1]=h.y,v[S+2]=h.z,Math.floor(S/E)){case 0:T.set(1,0,0),x[b+0]=Pi(T,h,"z","y",o,r),x[b+1]=1-Pi(T,h,"y","z",o,t);break;case 1:T.set(-1,0,0),x[b+0]=1-Pi(T,h,"z","y",o,r),x[b+1]=1-Pi(T,h,"y","z",o,t);break;case 2:T.set(0,1,0),x[b+0]=1-Pi(T,h,"x","z",o,e),x[b+1]=Pi(T,h,"z","x",o,r);break;case 3:T.set(0,-1,0),x[b+0]=1-Pi(T,h,"x","z",o,e),x[b+1]=1-Pi(T,h,"z","x",o,r);break;case 4:T.set(0,0,1),x[b+0]=1-Pi(T,h,"x","y",o,e),x[b+1]=1-Pi(T,h,"y","x",o,t);break;case 5:T.set(0,0,-1),x[b+0]=Pi(T,h,"x","y",o,e),x[b+1]=1-Pi(T,h,"y","x",o,t);break}}static fromJSON(e){return new Wm(e.width,e.height,e.depth,e.segments,e.radius)}}let Ac,Li,Vr,$h,Wy,$y;const Xh=new Set,no=new Set;let Xy=0;function pD(n,e,t){Li={game:n,viewer:e,replaying:t}}async function mD(n){return Vr?Vr.reveal(n):!1}const qh=new Map;function gD(n){return qh.has(n)||qh.set(n,new Promise(e=>{const t=new Image;t.onload=()=>e(t),t.onerror=()=>e(null),t.src=n})),qh.get(n)}function vD(){var F,R,ue;const n=document.querySelector(".match-mode:not(.lobby-mode) .rows"),e=Li?JSON.stringify({game:Li.game,viewer:Li.viewer,replaying:Li.replaying}):null;if(n&&e===$y&&Vr){(F=Vr.updateSelection)==null||F.call(Vr);return}$y=e;const t=++Xy,r=Ac;if(Ac=null,Vr=null,!n){r==null||r(),no.forEach(G=>G()),no.clear();return}r&&no.add(r);const s=document.querySelector(".page-shell"),o=document.createElement("canvas");o.className="clubhouse-scene",o.style.opacity="0",o.style.pointerEvents="none",s.prepend(o);let u;try{u=new hD({canvas:o,antialias:!0})}catch{o.remove(),r&&(Ac=r,no.delete(r));return}s.classList.add("clubhouse-ready");const d=document.createElement("div");d.className="clubhouse-score-strip",d.style.opacity="0",d.setAttribute("aria-label","Player scores"),document.querySelectorAll(".header-player").forEach(G=>{var ce,oe;const X=document.createElement("span");X.textContent=(((ce=G.querySelector(".header-player-copy b"))==null?void 0:ce.textContent)||"Player")+" · "+(((oe=G.querySelector(".header-player-score strong"))==null?void 0:oe.textContent)||"0")+" bulls",d.append(X)}),s.append(d),u.setPixelRatio(Math.min(Math.max(devicePixelRatio,2),2.5)),u.shadowMap.enabled=!0,u.shadowMap.type=xx,u.toneMapping=Am,u.toneMappingExposure=1.3;const f=new ZA;f.background=new Mt("#31273c"),f.fog=new km("#31273c",20,40);const h=new Di(38,1,.1,60);h.position.set(0,11.8,16.5),h.lookAt(0,.65,-.8);const g=[],m=[],v=[],x=[],E=[];let T=!1,y;const S=(Li==null?void 0:Li.game.round)+":"+(Li==null?void 0:Li.game.turn);Wy!==S&&(Wy=S,Xh.clear());const b=Li,N=(b==null?void 0:b.game.players.filter(G=>G.id!==b.viewer))||[],L=new Map(N.map((G,X)=>[G.id,N.length===1?0:(X/(N.length-1)-.5)*4.4]));o.dataset.opponents=String(N.length);const O=document.createElement("div");O.className="clubhouse-player-labels",O.style.opacity="0",O.setAttribute("aria-label","Opponent names"),s.append(O);const D=.38+Math.min(1.3,3.6/Math.max(1,N.length))*2.65,w=N.map(G=>{const X=document.createElement("span");return X.className="clubhouse-player-label",X.textContent=G.name,X.title=G.name,O.append(X),{el:X,position:new me(L.get(G.id),D,-4.05)}}),P=(b!=null&&b.replaying&&$h?$h:(b==null?void 0:b.game.rows)||[]).map(G=>G.slice());b!=null&&b.replaying||($h=P.map(G=>G.slice()));function V(G,X){return new Promise(ce=>{x.push({start:performance.now(),duration:G,update:X,resolve:ce})})}const I=(G,X=.65)=>{const ce=new dC({color:G,roughness:X});return g.push(ce),ce},z=I("#92582f",.4),W=I("#c48c50",.4),Z=I("#233d72",.98),B=I("#f8e9cc"),le=I("#251d26"),re=I("#e3ad4d",.3);function ne(G,X,ce=f){g.push(G);const oe=new Ua(G,X);return oe.castShadow=oe.receiveShadow=!0,ce.add(oe),oe}function K(G,X,ce,oe,Q,te,Se,U=f,ve=.06){const pe=ne(new Wm(G,X,ce,3,Math.min(ve,G/2,X/2,ce/2)),oe,U);return pe.position.set(Q,te,Se),pe}function q(G,X,ce,oe,Q,te,Se,U){const ve=ne(new Hm(1,24,16),Se,U);return ve.position.set(G,X,ce),ve.scale.set(oe,Q,te),ve}f.add(new pC("#ffe6bc","#364a80",2.2));const J=new vC("#ffd1a1",3);J.position.set(-4,9,5),J.castShadow=!0,J.shadow.mapSize.set(1024,1024),Object.assign(J.shadow.camera,{left:-7,right:7,top:8,bottom:-8}),J.shadow.bias=-.001,f.add(J);const k=new yy("#8da3ff",22,20);k.position.set(4,5,-4),f.add(k),K(24,.2,25,z,0,-.9,-2),K(22,10,.3,I("#513a4d"),0,3.5,-7.8);for(let G=-10;G<=10;G+=1.5)K(.07,9,.12,z,G,3.5,-7.55);for(const G of[-1,1]){K(2.4,5,.65,z,G*5.7,1.7,-6.8);for(let oe=0;oe<4.5;oe+=1.15){K(2.35,.12,.85,W,G*5.7,oe,-6.5);for(let Q=0;Q<6;Q++)K(.22,.55+Q%3*.12,.35,I(["#8b5879","#728a78","#c09060"][Q%3]),G*5.7-.8+Q*.3,oe+.4,-6.4)}ne(new Qc(.7,.5,32,1,!0),re).position.set(G*3.5,4.6,-5),K(.04,2,.04,re,G*3.5,5.7,-5);const ce=new yy("#ffc16e",18,9);ce.position.set(G*3.5,4.3,-5),f.add(ce)}K(2.5,1.8,.1,W,0,3.6,-7.5),K(2.25,1.55,.1,I("#744656"),0,3.6,-7.4);const ie=document.createElement("canvas");ie.width=512,ie.height=256;const Ce=ie.getContext("2d");Ce.fillStyle="#ffe7ac",Ce.textAlign="center",Ce.font="bold 100px Georgia",Ce.fillText("Take 5",256,150);const se=new ll(ie);g.push(se);const xe=new gl({map:se,transparent:!0});g.push(xe),ne(new Ia(2.2,1.1),xe).position.set(0,3.65,-7.3);function Re(G,X,ce,oe){const Q=ne(new Nl(G,G,ce,80),oe);return Q.scale.z=1.16,Q.position.y=X,Q}Re(4.1,-.14,.42,z),Re(4.02,.07,.12,W),Re(3.73,.14,.08,Z);const ye=document.createElement("canvas");ye.width=ye.height=128;const Ue=ye.getContext("2d");Ue.fillStyle="#7587a2",Ue.fillRect(0,0,128,128);for(let G=0;G<128;G+=3)Ue.fillStyle=G%2?"#637594":"#8999b0",Ue.fillRect(G,0,1,128),Ue.fillRect(0,G,128,1);const ut=new ll(ye);ut.wrapS=ut.wrapT=qc,ut.repeat.set(18,18),g.push(ut),Z.bumpMap=ut,Z.bumpScale=.02;function Je(G,X){const ce=new oo;ce.position.set(X,.2,-4.15),ce.scale.setScalar(Math.min(1.3,3.6/Math.max(1,N.length))),f.add(ce);const oe=I(G==="fox"?"#e88b34":G==="bear"?"#a7754b":"#7eae43"),Q=I(G==="fox"?"#ead3a8":G==="bear"?"#4f5683":"#c89e4f");if(K(1.65,1.9,.6,I("#773d47"),0,.7,-.5,ce,.25),q(0,.85,0,.64,.72,.45,Q,ce),q(0,1.85,.04,.67,.63,.52,oe,ce),G==="fox")for(const te of[-1,1]){const Se=ne(new Qc(.25,.64,3),oe,ce);Se.position.set(te*.47,2.43,0),Se.rotation.z=-te*.22,q(te*.24,1.64,.42,.33,.22,.16,B,ce)}if(G==="bear")for(const te of[-1,1])q(te*.53,2.29,0,.24,.25,.19,oe,ce),q(te*.53,2.29,.13,.12,.13,.06,B,ce);if(G==="frog")for(const te of[-1,1])q(te*.33,2.23,.25,.29,.3,.25,oe,ce);for(const te of[-1,1])q(te*.25,1.95,.49,.135,.16,.055,B,ce),q(te*.25,1.94,.54,.065,.085,.025,le,ce),q(te*.27,1.98,.565,.024,.03,.012,B,ce),q(te*.48,.35,.55,.23,.16,.28,oe,ce);q(0,1.61,.5,.28,.18,.1,G==="frog"?oe:B,ce),q(0,1.7,.61,.11,.075,.065,le,ce),q(0,1.48,.56,.12,.065,.035,le,ce),v.push(ce)}N.forEach((G,X)=>Je(["fox","bear","frog"][X%3],L.get(G.id)));function pt(G,X,ce,oe){const Q=document.createElement("canvas");Q.width=Q.height=128;const te=Q.getContext("2d");te.fillStyle="#322039",te.font="bold 70px Arial",te.textAlign="center",te.fillText(G,64,90);const Se=new ll(Q);g.push(Se);const U=new gl({map:Se,transparent:!0});g.push(U);const ve=ne(new Ia(.4,.4),U);ve.position.set(X,ce,oe),ve.rotation.x=-Math.PI/2}async function yt(G,X){const ce=Number(G.dataset.cardNumber||G.dataset.card),oe=ce===55?7:ce%11===0?5:ce%10===0?3:ce%5===0?2:1,Q={1:"one-bull",2:"two-bulls",3:"three-bulls",5:"five-bulls",7:"seven-bulls"}[oe],te=await gD(new URL("assets/cards/card-"+Q+".png",document.baseURI).href);if(T||!te)return;const Se=document.createElement("canvas");Se.width=1024,Se.height=1536;const U=Se.getContext("2d");U.imageSmoothingEnabled=!0,U.imageSmoothingQuality="high",U.fillStyle="#fffdf8",U.beginPath(),U.roundRect(0,0,1024,1536,48),U.fill(),U.save(),U.beginPath(),U.roundRect(0,0,1024,1536,48),U.clip(),U.drawImage(te,te.width*.065,te.height*.045,te.width*.87,te.height*.91,0,0,1024,1536),U.restore();const ve=String(ce);U.textAlign="center",U.textBaseline="middle",U.font="900 "+(ve.length===3?440:530)+"px Arial, sans-serif",U.lineJoin="round",U.strokeStyle="#fffdf8",U.lineWidth=30,U.strokeText(ve,512,795),U.fillStyle="#101622",U.fillText(ve,512,795);const pe={1:"#244d9b",2:"#158145",3:"#087eac",5:"#cf3032",7:"#b67e12"}[oe];for(const Xe of[!1,!0])U.save(),Xe&&(U.translate(1024,1536),U.rotate(Math.PI)),U.beginPath(),U.roundRect(18,18,988,1508,40),U.clip(),U.fillStyle=pe,U.beginPath(),U.moveTo(18,18),U.lineTo(1006,18),U.lineTo(1006,165),U.quadraticCurveTo(720,130,18,238),U.closePath(),U.fill(),U.textAlign="left",U.textBaseline="middle",U.font="900 "+(ve.length===3?154:190)+"px Arial, sans-serif",U.fillStyle="#ffffff",U.fillText(ve,42,118),U.restore();const be=new ll(Se);be.colorSpace=ei,be.anisotropy=u.capabilities.getMaxAnisotropy(),g.push(be);const Ae=new gl({map:be,side:_r,toneMapped:!1,fog:!1,transparent:!0,alphaTest:.1});g.push(Ae);const Le=ne(new Ia(.68,1.02),Ae,X);Le.position.z=.075,Le.castShadow=!1,o.dataset.textures=String(Number(o.dataset.textures||0)+1)}function ot(G,X,ce,oe,Q=0,te=!1){const Se=new oo;return f.add(Se),Se.position.set(X,ce,oe),Se.rotation.x=-1.35,Se.position.y+=.1,Se.rotation.z=Q,K(.7,1.04,.065,B,0,0,0,Se,.045),E.push(yt(G,Se)),te&&(Se.rotation.x=-.72,G.classList.contains("selected")&&(Se.position.y+=.3,Se.position.z-=.2,K(.76,1.1,.025,re,0,0,-.025,Se,.045)),Se.userData.control=G,m.push(Se)),Se}const Ft=[[],[],[],[]];function kt(G){const X=document.createElement("span");return X.dataset.card=String(G),X}for(let G=0;G<4;G++){const X=-2.2+G*1.12;K(6.25,.012,.025,I("#67799b"),0,.195,X+.57),pt(String(G+1),-3.1,.21,X),(R=P[G])==null||R.forEach((Q,te)=>Ft[G].push(ot(kt(Q),-2.35+te*.81,.24,X))),ne(new Nl(.24,.24,.07,32),re).position.set(2.9,.24,X);const oe=(P[G]||[]).reduce((Q,te)=>Q+(te===55?7:te%11===0?5:te%10===0?3:te%5===0?2:1),0);pt(String(oe),2.9,.285,X)}const Xt=document.createElement("canvas");Xt.width=256,Xt.height=384;const vt=Xt.getContext("2d");vt.fillStyle="#264c88",vt.fillRect(0,0,256,384),vt.strokeStyle="#e6c07b",vt.lineWidth=10,vt.strokeRect(12,12,232,360),vt.fillStyle="#f5db9d",vt.font="bold 62px Georgia",vt.textAlign="center",vt.fillText("Take 5",128,208);const hn=new ll(Xt);hn.colorSpace=ei,g.push(hn);const Nt=new gl({map:hn,toneMapped:!1});g.push(Nt);const zt=new Map;function an(G,X,ce=!0){if(zt.has(G))return zt.get(G);const oe=G===(b==null?void 0:b.viewer),Q=ot(kt(X||1),oe?0:L.get(G)||0,oe?.42:D+.9,oe?2.8:-4.05);Q.rotation.x=oe?-1.35:0,oe||Q.quaternion.copy(h.quaternion);const te=Q.quaternion.clone(),Se=ne(new Ia(.68,1.02),Nt,Q);if(Se.position.z=-.075,Se.rotation.y=Math.PI,Q.userData.base=te,Q.userData.back=Se,Q.userData.playerId=G,ce&&Q.quaternion.multiply(new qr().setFromAxisAngle(new me(0,1,0),Math.PI)),zt.set(G,Q),o.dataset.stagePlayers=JSON.stringify([...zt.keys()]),!(b!=null&&b.replaying)&&!Xh.has(G)){Xh.add(G);const U=Q.position.clone();Q.position.y-=oe?.08:1,Q.scale.setScalar(.8),V(360,ve=>{const pe=1-Math.pow(1-ve,3);Q.position.y=U.y-(oe?.08:1)*(1-pe),Q.scale.setScalar(.8+.2*pe)})}return Q}if(!(b!=null&&b.replaying)){const G=new Set((b==null?void 0:b.game.readyPlayers)||Object.keys((b==null?void 0:b.game.selections)||{}));for(const X of G)an(X,(ue=b.game.selections)==null?void 0:ue[X],!0);o.dataset.ready=String(G.size)}Vr={async reveal(G){o.dataset.reveal="flipping",window.dispatchEvent(new CustomEvent("clubhouse-reveal",{detail:{phase:"flipping"}}));const X=G.slice().sort((oe,Q)=>oe.card-Q.card),ce=X.map(oe=>an(oe.playerId,oe.card,!0));await Promise.all(ce.map(oe=>V(430,Q=>oe.quaternion.copy(oe.userData.base).multiply(new qr().setFromAxisAngle(new me(0,1,0),Math.PI*(1-Q))))));for(const oe of X){if(T)return!0;o.dataset.reveal="moving-"+oe.card,window.dispatchEvent(new CustomEvent("clubhouse-reveal",{detail:{phase:"moving",card:oe.card,playerId:oe.playerId}}));const Q=zt.get(oe.playerId);if(oe.tookRow){const pe=Ft[oe.rowIndex];await V(260,be=>pe.forEach(Ae=>{Ae.position.y=.34+be*.4,Ae.scale.setScalar(1-be*.85)})),pe.forEach(be=>be.visible=!1),Ft[oe.rowIndex]=[]}const te=Q.position.clone(),Se=Q.quaternion.clone(),U=new me(-2.35+Ft[oe.rowIndex].length*.81,.34,-2.2+oe.rowIndex*1.12),ve=new qr().setFromEuler(new Kr(-1.35,0,0));await V(620,pe=>{const be=pe*pe*(3-2*pe);Q.position.lerpVectors(te,U,be),Q.position.y+=Math.sin(Math.PI*pe)*.55,Q.quaternion.slerpQuaternions(Se,ve,be)}),Ft[oe.rowIndex].push(Q),await V(100,()=>{})}return o.dataset.reveal="complete",window.dispatchEvent(new CustomEvent("clubhouse-reveal",{detail:{phase:"complete"}})),!0}},f.add(h);const pn=[...document.querySelectorAll(".hand-card")];pn.forEach((G,X)=>{const ce=(X-(pn.length-1)/2)*.16,oe=-1.32-Math.abs(ce)*.1,Q=-5.25+X*.04,te=ot(G,0,0,0,-ce*.25,!0);h.add(te);const Se=G.classList.contains("selected");te.position.set(ce,oe+(Se?.22:0),Se?-4.65:Q),te.rotation.x=0,te.scale.setScalar(.52),te.userData.restY=oe,te.userData.restZ=Q,te.userData.value=G.dataset.card}),o.dataset.handLayout=JSON.stringify(m.map(G=>({value:G.userData.value,x:G.position.x,z:G.userData.restZ}))),Vr.updateSelection=()=>{const G=[...document.querySelectorAll(".hand-card")];m.forEach(X=>{const ce=G.find(ve=>ve.dataset.card===X.userData.value);if(!ce)return;X.userData.control=ce;const oe=ce.classList.contains("selected");X.userData.highlight||(X.userData.highlight=K(.76,1.1,.025,re,0,0,-.025,X,.045)),X.userData.highlight.visible=oe;const Q=X.position.y,te=X.userData.restY+(oe?.22:0),Se=oe?-4.65:X.userData.restZ,U=(X.userData.revision||0)+1;X.userData.revision=U,V(180,ve=>{if(X.userData.revision!==U)return;const pe=1-Math.pow(1-ve,3);X.position.y=Q+(te-Q)*pe,X.position.z=Se})})};const j=new yC,mn=new Et;let bt;o.addEventListener("pointerdown",G=>{bt={x:G.clientX,y:G.clientY}}),o.addEventListener("pointerup",G=>{if(!bt||Math.hypot(G.clientX-bt.x,G.clientY-bt.y)>12)return;const X=o.getBoundingClientRect();mn.set((G.clientX-X.left)/X.width*2-1,-(G.clientY-X.top)/X.height*2+1),j.setFromCamera(mn,h);const ce=j.intersectObjects(m,!0)[0];if(ce){let oe=ce.object;for(;oe&&!oe.userData.control;)oe=oe.parent;oe!=null&&oe.userData.control&&!oe.userData.control.disabled&&oe.userData.control.click()}});const Ct=()=>{const G=s.getBoundingClientRect();(o.dataset.width!==String(G.width)||o.dataset.height!==String(G.height))&&(u.setSize(G.width,G.height,!1),o.dataset.width=String(G.width),o.dataset.height=String(G.height)),h.aspect=G.width/G.height,h.zoom=.8,h.updateProjectionMatrix(),h.updateMatrixWorld(),o.dataset.handTargets=JSON.stringify(m.map(X=>{const ce=X.getWorldPosition(new me).project(h);return{x:(ce.x+1)*G.width/2,y:(1-ce.y)*G.height/2}})),w.forEach(({el:X,position:ce})=>{const oe=ce.clone().project(h);X.style.left=(oe.x+1)*G.width/2+"px",X.style.top=(1-oe.y)*G.height/2+"px"}),u.render(f,h)},De=new ResizeObserver(Ct);De.observe(s),Ct();let Ht=0;const Ze=matchMedia("(prefers-reduced-motion: reduce)").matches;function tt(G){if(!T&&(y=requestAnimationFrame(tt),!(G-Ht<33))){Ht=G;for(let X=x.length-1;X>=0;X--){const ce=x[X],oe=Math.min(1,(G-ce.start)/(Ze?Math.min(ce.duration,80):ce.duration));ce.update(oe),oe===1&&(x.splice(X,1),ce.resolve())}Ze||v.forEach((X,ce)=>X.rotation.z=Math.sin(G*8e-4+ce)*.012),u.render(f,h)}}y=requestAnimationFrame(tt),Promise.all(E).then(()=>{T||t!==Xy||(u.render(f,h),o.dataset.presented="true",o.style.opacity="1",o.style.pointerEvents="auto",d.style.opacity="1",O.style.opacity="1",no.forEach(G=>G()),no.clear(),s.classList.add("clubhouse-ready"))}),Ac=()=>{T=!0,x.splice(0).forEach(G=>G.resolve()),cancelAnimationFrame(y),De.disconnect(),g.forEach(G=>G.dispose()),u.dispose(),u.forceContextLoss(),o.remove(),d.remove(),O.remove(),s.classList.remove("clubhouse-ready")}}const fM="take5-sound-enabled",_D={tap:{src:"assets/audio/click1.wav",volume:.12},select:{src:"assets/audio/click2.wav",volume:.17},card:{src:"assets/audio/click3.wav",volume:.2},deal:{src:"assets/audio/rollover1.wav",volume:.13},row:{src:"assets/audio/click1.wav",volume:.2}};let Ii=localStorage.getItem(fM)!=="false",fn,ri,$m=!1,ps;const El=new Set,qy=new Map,hM=[523.25,null,659.25,783.99,null,659.25,587.33,null,523.25,null,392,523.25,null,587.33,523.25,null],mm=.42,yD=hM.length*mm;function SD(){if(fn)return fn;const n=window.AudioContext||window.webkitAudioContext;return n?(fn=new n,ri=fn.createGain(),ri.gain.value=0,ri.connect(fn.destination),fn):null}function Yy(n,e,t,r=.22,s="sine"){if(!fn||!ri||!n)return;const o=fn.createOscillator(),u=fn.createGain();o.type=s,o.frequency.setValueAtTime(n,e),u.gain.setValueAtTime(1e-4,e),u.gain.linearRampToValueAtTime(r,e+.035),u.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(u),u.connect(ri),o.start(e),o.stop(e+t+.02)}function Xm(){if(!Ii||!$m||!fn||fn.state!=="running")return;const n=fn.currentTime+.08;hM.forEach((e,t)=>{e&&Yy(e,n+t*mm,.3,.2,"sine")}),[0,4,8,12].forEach((e,t)=>Yy([261.63,196,220,196][t],n+e*mm,.6,.09,"triangle")),ps=setTimeout(()=>{ps=null,Xm()},yD*1e3)}function pM(){!Ii||!$m||!fn||!ri||(ri.gain.cancelScheduledValues(fn.currentTime),ri.gain.setTargetAtTime(.08,fn.currentTime,1.2),ps||Xm())}function qm(){if(!Ii)return;const n=SD();(n==null?void 0:n.state)==="suspended"&&n.resume().catch(()=>{}),pM()}function _s(n){$m=n,n||(clearTimeout(ps),ps=null),!(!fn||!ri)&&(ri.gain.cancelScheduledValues(fn.currentTime),ri.gain.setTargetAtTime(Ii&&n?.08:0,fn.currentTime,n?1.2:.35),Ii&&n&&Xm())}function ka(n){if(!Ii)return;const e=_D[n];if(!e)return;const t=qy.get(n)||new Audio(e.src);t.preload="auto",qy.set(n,t);const r=t.cloneNode();r.volume=e.volume,El.add(r),r.addEventListener("ended",()=>El.delete(r),{once:!0}),r.play().catch(()=>El.delete(r))}function gm(){return Ii}function mM(){return Ii=!Ii,localStorage.setItem(fM,String(Ii)),Ii?(qm(),pM()):(El.forEach(n=>{n.pause(),n.currentTime=0}),El.clear(),clearTimeout(ps),ps=null,fn&&ri&&(ri.gain.cancelScheduledValues(fn.currentTime),ri.gain.setTargetAtTime(0,fn.currentTime,.12))),Ii}/*! Capacitor: https://capacitorjs.com/ - MIT License */var _o;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(_o||(_o={}));class Yh extends Error{constructor(e,t,r){super(e),this.message=e,this.code=t,this.data=r}}const xD=n=>{var e,t;return n!=null&&n.androidBridge?"android":!((t=(e=n==null?void 0:n.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},MD=n=>{const e=n.CapacitorCustomPlatform||null,t=n.Capacitor||{},r=t.Plugins=t.Plugins||{},s=()=>e!==null?e.name:xD(n),o=()=>s()!=="web",u=m=>{const v=h.get(m);return!!(v!=null&&v.platforms.has(s())||d(m))},d=m=>{var v;return(v=t.PluginHeaders)===null||v===void 0?void 0:v.find(x=>x.name===m)},f=m=>n.console.error(m),h=new Map,g=(m,v={})=>{const x=h.get(m);if(x)return console.warn(`Capacitor plugin "${m}" already registered. Cannot register plugins twice.`),x.proxy;const E=s(),T=d(m);let y;const S=async()=>(!y&&E in v?y=typeof v[E]=="function"?y=await v[E]():y=v[E]:e!==null&&!y&&"web"in v&&(y=typeof v.web=="function"?y=await v.web():y=v.web),y),b=(P,V)=>{var I,z;if(T){const W=T==null?void 0:T.methods.find(Z=>V===Z.name);if(W)return W.rtype==="promise"?Z=>t.nativePromise(m,V.toString(),Z):(Z,B)=>t.nativeCallback(m,V.toString(),Z,B);if(P)return(I=P[V])===null||I===void 0?void 0:I.bind(P)}else{if(P)return(z=P[V])===null||z===void 0?void 0:z.bind(P);throw new Yh(`"${m}" plugin is not implemented on ${E}`,_o.Unimplemented)}},N=P=>{let V;const I=(...z)=>{const W=S().then(Z=>{const B=b(Z,P);if(B){const le=B(...z);return V=le==null?void 0:le.remove,le}else throw new Yh(`"${m}.${P}()" is not implemented on ${E}`,_o.Unimplemented)});return P==="addListener"&&(W.remove=async()=>V()),W};return I.toString=()=>`${P.toString()}() { [capacitor code] }`,Object.defineProperty(I,"name",{value:P,writable:!1,configurable:!1}),I},L=N("addListener"),O=N("removeListener"),D=(P,V)=>{const I=L({eventName:P},V),z=async()=>{const Z=await I;O({eventName:P,callbackId:Z},V)},W=new Promise(Z=>I.then(()=>Z({remove:z})));return W.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await z()},W},w=new Proxy({},{get(P,V){switch(V){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return T?D:L;case"removeListener":return O;default:return N(V)}}});return r[m]=w,h.set(m,{name:m,proxy:w,platforms:new Set([...Object.keys(v),...T?[E]:[]])}),w};return t.convertFileSrc||(t.convertFileSrc=m=>m),t.getPlatform=s,t.handleError=f,t.isNativePlatform=o,t.isPluginAvailable=u,t.registerPlugin=g,t.Exception=Yh,t.DEBUG=!!t.DEBUG,t.isLoggingEnabled=!!t.isLoggingEnabled,t},ED=n=>n.Capacitor=MD(n),td=ED(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),cd=td.registerPlugin;class Ym{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(t);const o=this.windowListeners[e];o&&!o.registered&&this.addWindowListener(o),r&&this.sendRetainedArgumentsForEvent(e);const u=async()=>this.removeListener(e,t);return Promise.resolve({remove:u})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,r){const s=this.listeners[e];if(!s){if(r){let o=this.retainedEventArguments[e];o||(o=[]),o.push(t),this.retainedEventArguments[e]=o}return}s.forEach(o=>o(t))}hasListeners(e){var t;return!!(!((t=this.listeners[e])===null||t===void 0)&&t.length)}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:r=>{this.notifyListeners(t,r)}}}unimplemented(e="not implemented"){return new td.Exception(e,_o.Unimplemented)}unavailable(e="not available"){return new td.Exception(e,_o.Unavailable)}async removeListener(e,t){const r=this.listeners[e];if(!r)return;const s=r.indexOf(t);s!==-1&&this.listeners[e].splice(s,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(r=>{this.notifyListeners(e,r)}))}}const Ky=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Zy=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class bD extends Ym{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[s,o]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=Zy(s).trim(),o=Zy(o).trim(),t[s]=o}),t}async setCookie(e){try{const t=Ky(e.key),r=Ky(e.value),s=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",o=(e.path||"/").replace("path=",""),u=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${r||""}${s}; path=${o}; ${u};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}cd("CapacitorCookies",{web:()=>new bD});const wD=async n=>new Promise((e,t)=>{const r=new FileReader;r.onload=()=>{const s=r.result;e(s.indexOf(",")>=0?s.split(",")[1]:s)},r.onerror=s=>t(s),r.readAsDataURL(n)}),TD=(n={})=>{const e=Object.keys(n);return Object.keys(n).map(s=>s.toLocaleLowerCase()).reduce((s,o,u)=>(s[o]=n[e[u]],s),{})},RD=(n,e=!0)=>n?Object.entries(n).reduce((r,s)=>{const[o,u]=s;let d,f;return Array.isArray(u)?(f="",u.forEach(h=>{d=e?encodeURIComponent(h):h,f+=`${o}=${d}&`}),f.slice(0,-1)):(d=e?encodeURIComponent(u):u,f=`${o}=${d}`),`${r}&${f}`},"").substr(1):null,AD=(n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),s=TD(n.headers)["content-type"]||"";if(typeof n.data=="string")t.body=n.data;else if(s.includes("application/x-www-form-urlencoded")){const o=new URLSearchParams;for(const[u,d]of Object.entries(n.data||{}))o.set(u,d);t.body=o.toString()}else if(s.includes("multipart/form-data")||n.data instanceof FormData){const o=new FormData;if(n.data instanceof FormData)n.data.forEach((d,f)=>{o.append(f,d)});else for(const d of Object.keys(n.data))o.append(d,n.data[d]);t.body=o;const u=new Headers(t.headers);u.delete("content-type"),t.headers=u}else(s.includes("application/json")||typeof n.data=="object")&&(t.body=JSON.stringify(n.data));return t};class CD extends Ym{async request(e){const t=AD(e,e.webFetchExtra),r=RD(e.params,e.shouldEncodeUrlParams),s=r?`${e.url}?${r}`:e.url,o=await fetch(s,t),u=o.headers.get("content-type")||"";let{responseType:d="text"}=o.ok?e:{};u.includes("application/json")&&(d="json");let f,h;switch(d){case"arraybuffer":case"blob":h=await o.blob(),f=await wD(h);break;case"json":f=await o.json();break;case"document":case"text":default:f=await o.text()}const g={};return o.headers.forEach((m,v)=>{g[v]=m}),{data:f,headers:g,status:o.status,url:o.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}cd("CapacitorHttp",{web:()=>new CD});var jy;(function(n){n.Dark="DARK",n.Light="LIGHT",n.Default="DEFAULT"})(jy||(jy={}));var Jy;(function(n){n.StatusBar="StatusBar",n.NavigationBar="NavigationBar"})(Jy||(Jy={}));class PD extends Ym{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}cd("SystemBars",{web:()=>new PD});const Kh=cd("App",{web:()=>aS(()=>import("./web-Ba0sDU30.js"),[]).then(n=>new n.AppWeb)}),gM=td.isNativePlatform(),LD="https://take-five-friends-game.onrender.com/";gM&&(document.documentElement.classList.add("capacitor-native"),Kh.addListener("backButton",()=>{var r;const n=document.querySelector("#rulesDialog");if(n!=null&&n.open){n.close();return}const e=document.querySelector("#gameMenuPanel");if(e&&!e.classList.contains("is-hidden")){(r=document.querySelector("#gameMenuToggle"))==null||r.dispatchEvent(new CustomEvent("rnpress",{bubbles:!0}));return}const t=document.querySelector("#gameMenuToggle");if(t){t.dispatchEvent(new CustomEvent("rnpress",{bubbles:!0}));return}Kh.exitApp()}),Kh.addListener("appUrlOpen",({url:n})=>{try{const e=new URL(n).searchParams.get("room");/^\d{4}$/.test(e||"")&&window.location.assign(`/?room=${encodeURIComponent(e)}`)}catch{}}));const Km=[{id:"take-5",name:"Take 5",category:"Card game",status:"available",route:"take-5",description:"A clever card game where every move counts. Avoid the bulls!",featuredDescription:"Think ahead, play your cards, and avoid collecting the bulls!",artwork:"take5"},{id:"phase-10",name:"Phase 10",category:"Card game",status:"available",route:"phase-10",description:"Build sets, make runs, and race through all ten phases.",artwork:"phase10"},{id:"splendor",name:"Splendor",category:"Strategy game",status:"coming-soon",route:null,description:"Collect precious gems, build your empire, and earn prestige.",artwork:"splendor"}],hr=Km.find(n=>n.status==="available");function vM(n){return`<span class="game-status game-status--${n.status}">${n.status==="available"?"Available now":"Coming soon"}</span>`}function _M(n){return n.artwork==="take5"?'<div class="game-art game-art--take5"><span class="game-art-card game-art-card--one" aria-hidden="true"></span><span class="game-art-card game-art-card--two" aria-hidden="true"></span><span class="game-art-card game-art-card--three" aria-hidden="true"></span><span class="game-art-bull">♞</span></div>':n.artwork==="phase10"?'<div class="game-art game-art--phase10"><span class="phase-orb phase-orb--blue">7</span><span class="phase-orb phase-orb--red">10</span><span class="phase-orb phase-orb--gold">★</span><span class="phase-run">4 · 5 · 6 · 7</span></div>':'<div class="game-art game-art--splendor"><span class="gem gem--emerald"></span><span class="gem gem--ruby"></span><span class="gem gem--sapphire"></span><span class="splendor-crown">♛</span></div>'}function DD(n){const e=n.status==="available";return`<article class="game-card game-card--${n.id}" data-game-id="${n.id}" ${e?`data-game-tile="play" role="button" tabindex="0" aria-label="Play ${n.name}"`:""}>
    ${_M(n)}
    <div class="game-card-copy">
      <div class="game-card-meta"><span>${n.category}</span>${vM(n)}</div>
      <h3>${n.name}</h3>
      <p>${n.description}</p>
      <button class="game-card-action" data-game-action="${e?"play":"soon"}" data-game-id="${n.id}" ${e?"":'aria-disabled="true"'}>${e?"Play now":"Coming soon"} <span>→</span></button>
    </div>
  </article>`}function Qy(){return Km.map(DD).join("")}const ID=["blue","green","red","yellow"],vm=["2 sets of 3","1 set of 3 + 1 run of 4","1 set of 4 + 1 run of 4","1 run of 7","1 run of 8","1 run of 9","2 sets of 4","7 cards of one color","1 set of 5 + 1 set of 2","1 set of 5 + 1 set of 3"],ND=["🧑🏻","🦊","🐻","🐸"];let OD=0;const Zh=(n,e=null)=>({id:`phase-card-${OD++}`,value:n,color:e}),Na=n=>n.value==="wild",tr=n=>n.value==="skip";function UD(){const n=[];for(let e=0;e<2;e++)ID.forEach(t=>{for(let r=1;r<=12;r++)n.push(Zh(r,t))});for(let e=0;e<8;e++)n.push(Zh("wild"));for(let e=0;e<4;e++)n.push(Zh("skip"));return FD(n)}function FD(n){const e=n.slice();for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e}function kD(n){return Na(n)?25:tr(n)?15:n.value>=10?10:5}function Zm(n){return n.filter(e=>!Na(e)&&!tr(e))}function jm(n,e){return n.length===e&&!n.some(tr)}function pr(n,e){const t=Zm(n).map(r=>r.value);return jm(n,e)&&t.length>0&&t.every(r=>r===t[0])}function dl(n,e){const t=Zm(n).map(o=>o.value);if(!jm(n,e)||t.length===0||new Set(t).size!==t.length)return!1;const r=Math.min(...t),s=Math.max(...t);return s-r<e&&Math.max(1,s-e+1)<=Math.min(r,13-e)}function BD(n,e){const t=Zm(n).map(r=>r.color);return jm(n,e)&&t.length>0&&t.every(r=>r===t[0])}function yM(n,e,t=0,r=[],s=[]){if(r.length===e)return s.push(r),s;for(let o=t;o<=n.length-(e-r.length);o++)yM(n,e,o+1,r.concat(o),s);return s}function io(n,e,t,r,s){return n.length!==e+r?!1:yM(n,e).some(o=>{const u=o.map(f=>n[f]),d=n.filter((f,h)=>!o.includes(h));return t(u,e)&&s(d,r)})}function SM(n,e){switch(n){case 1:return io(e,3,pr,3,pr);case 2:return io(e,3,pr,4,dl);case 3:return io(e,4,pr,4,dl);case 4:return dl(e,7);case 5:return dl(e,8);case 6:return dl(e,9);case 7:return io(e,4,pr,4,pr);case 8:return BD(e,7);case 9:return io(e,5,pr,2,pr);case 10:return io(e,5,pr,3,pr);default:return!1}}function xM(n,e){const t=UD(),r=[{id:"phase-you",name:n||"You",avatar:e,phase:1,score:0,hand:[],laid:!1,phaseCards:[]},{id:"phase-milo",name:"Milo",avatar:"🦊",phase:1,score:0,hand:[],laid:!1,phaseCards:[]},{id:"phase-nora",name:"Nora",avatar:"🐻",phase:1,score:0,hand:[],laid:!1,phaseCards:[]},{id:"phase-pip",name:"Pip",avatar:"🐸",phase:1,score:0,hand:[],laid:!1,phaseCards:[]}];return r.forEach(s=>{s.hand=t.splice(0,10)}),{players:r,drawPile:t,discardPile:[t.pop()],current:0,turn:"draw",selected:[],message:"Draw a card to begin.",round:1,finished:!1,skipped:null}}const _i=document.querySelector("#app"),nd=document.querySelector("#rulesDialog"),eS=new URLSearchParams(location.search),Jm="take5-host-save",ms="take5-guest-session",M={screen:"home",mode:"online",tab:"rooms",name:localStorage.getItem("take5-name")||"",peer:null,host:!1,connection:null,connections:new Map,clientId:null,roomId:"",players:[],game:null,selected:null,busy:!1,toastTimer:null,botCount:3,roundFlashTimer:null,submittedTurn:!1,animating:!1,replay:null,replayKey:null,revealOrigins:{},stageSeen:new Set,stageTurnKey:null,countdownTimer:null,countdownInterval:null,reconnectTimer:null,peerReconnectTimer:null,disconnectAdvanceTimer:null,resumeToken:null,recoveringGuest:!1,reactionCooldowns:new Map,screenTransition:!1,phase10:null,phase10Avatar:"🧑🏻"};document.addEventListener("pointerdown",qm,{passive:!0});document.addEventListener("keydown",qm);function MM(){var n;if(M.peer){if(M.peer.disconnected)try{M.peer.reconnect()}catch{fd(M.peer)}if(!M.host&&M.roomId){const e=M.peer;(n=M.connection)!=null&&n.open?M.connection.send({type:"sync"}):(M.connection=null,clearTimeout(M.reconnectTimer),hd(M.roomId,e))}}}window.addEventListener("online",MM);document.addEventListener("visibilitychange",()=>{document.hidden||MM()});document.querySelector("#homeLink").addEventListener("click",n=>{n.preventDefault(),Fa()});Sx(nd);jt(".dialog-close",()=>nd.close());var rS;if(eS.get("room")){const n=eS.get("room");M.tab="rooms",M.roomPrefill=/^\d{4}$/.test(n)?n:((rS=n.match(/^take5-(\d{4})$/))==null?void 0:rS[1])||""}const jh=dd(Jm),$r=dd(ms),Jh=M.roomPrefill||($r==null?void 0:$r.roomId)||"",zD=!!$r&&(!M.roomPrefill||$r.roomId===M.roomPrefill);jh&&(M.roomPrefill===jh.roomId||!M.roomPrefill&&!zD)?(Fa(),aI(jh)):(Fa(),Jh&&($r==null?void 0:$r.roomId)===Jh&&(M.resumeToken=$r.token,M.recoveringGuest=!0,og(Jh)));function dd(n){try{return JSON.parse(localStorage.getItem(n)||"null")}catch{return null}}function $t(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function nr(n,e,{nativeControls:t=!0}={}){const r=M.screenTransition&&!matchMedia("(prefers-reduced-motion: reduce)").matches;if(ZR(n),n.innerHTML=e,requestAnimationFrame(vD),t)try{Sx(n)}catch(s){console.error("Could not mount React Native Web controls.",s)}r&&(n.animate([{opacity:0,transform:"translateY(10px) scale(.992)"},{opacity:1,transform:"translateY(0) scale(1)"}],{duration:300,easing:"cubic-bezier(.2,.78,.25,1)"}),M.screenTransition=!1)}function jt(n,e){(typeof n=="string"?document.querySelectorAll(n):[n]).forEach(r=>{if(!r)return;const s=o=>{ka("tap"),e(o,r)};r.addEventListener("rnpress",s),r.addEventListener("click",o=>{r.closest(".rn-control-root")||s(o)})})}function HD(){const n=gm();return`<button class="icon-button sound-toggle" id="soundToggle" aria-label="${n?"Mute sound":"Enable sound"}" aria-pressed="${n}" title="${n?"Mute sound":"Enable sound"}"><span class="sound-toggle-glyph" aria-hidden="true">♪</span><span class="sound-toggle-state" aria-hidden="true">${n?"":"×"}</span></button>`}function GD(){jt("#soundToggle",()=>{mM(),Qr()})}function ni(n){return n===55?7:n%11===0?5:n%10===0?3:n%5===0?2:1}function VD(n){return{1:"one-bull",2:"two-bulls",3:"three-bulls",5:"five-bulls",7:"seven-bulls"}[ni(n)]}function Er(){return'<span class="bull-icon" aria-hidden="true"><img class="bull-icon-art" src="assets/bullhead.svg" alt="" draggable="false"></span>'}function tS(n){return`<span class="bull-marks" aria-label="${ni(n)} bullheads">${Array.from({length:ni(n)},()=>'<i class="bull-head" aria-hidden="true"></i>').join("")}</span>`}function so(n,e=""){const t=VD(n),r=$t(n),s=String(n).length;return`<span class="card-face ${e} tone-${t} value-${s}-digits" aria-hidden="true"><img class="card-art" src="assets/cards/card-${t}.png" alt="" draggable="false"><span class="card-corner top-left">${r}</span><span class="card-corner top-right">${r}</span>${tS(n)}<span class="card-value-outline">${r}</span><span class="card-value">${r}</span><span class="card-bottom-meta"><span class="card-corner bottom-left">${r}</span>${tS(n)}<span class="card-corner bottom-right">${r}</span></span></span>`}function EM(n,e){return n.human?["🧑🏻","👩🏽","🧔🏼","👩🏻","🧑🏾","👩🏼","🧑🏽","👨🏾","👩🏻","🧑🏼"][e%10]:["🦊","🐻","🐸","🐼","🐯","🐵","🐰","🦝","🦁"][Math.max(0,e-1)%9]}function WD(){return Array.from({length:104},(n,e)=>e+1).sort(()=>Math.random()-.5)}function Qr(){var h,g;const n=document.querySelector("#homeLink"),e=document.querySelector("#headerRoster"),t=document.querySelector("#topbarRight"),r=M.screen==="home",s=["lobby","game","result"].includes(M.screen);if(n&&(n.innerHTML='<span class="brand-mark">CG</span><span>Card <span class="brand-dot">Games</span></span>'),r){e.innerHTML="",nr(t,`<div class="platform-profile" aria-label="Player profile"><span class="platform-avatar">${$t((M.name||"P").slice(0,1).toUpperCase())}</span><span class="platform-profile-copy"><b>${$t(M.name||"Player")}</b><small>Ready to play</small></span></div>`,{nativeControls:!1}),jt("[data-platform-nav]",(m,v)=>{var E;const x=v.dataset.platformNav;x==="take5"?eg():x==="games"?(E=document.querySelector("#games"))==null||E.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"smooth"})});return}const o=M.screen==="lobby"?M.players:((h=M.game)==null?void 0:h.players)||M.players,u=!!M.game&&["game","result"].includes(M.screen);if(e&&(e.innerHTML=s?o.map((m,v)=>{var y;const x=m.id===M.clientId,E=((y=m.hand)==null?void 0:y.length)||0,T=u?`${E} cards`:m.human?m.ready?"READY":"ONLINE":"BOT";return`<div class="header-player ${x?"is-you":""} ${m.ready?"is-ready":""}" data-player-id="${$t(m.id)}"><span class="header-avatar">${EM(m,v)}</span><span class="header-player-copy"><b>${$t(m.name)}${x?" · you":""}</b><small>${T}</small></span>${u?`<span class="header-player-score bull-counter-badge" aria-label="${m.total||0} bullheads"><strong>${m.total||0}</strong>${Er()}</span><span class="opponent-cards" aria-label="${E} cards in hand">${Array.from({length:Math.min(4,E)},(S,b)=>`<i style="--i:${b}"></i>`).join("")}</span>`:`<i class="header-player-status ${m.online===!1?"is-offline":""}"></i>`}</div>`}).join(""):""),!t)return;if(!s){nr(t,`<span class="top-note"><span class="online-dot"></span> the table is open</span>${HD()}<button class="icon-button" id="rulesButton" aria-label="How to play" title="How to play">?</button>`),GD(),jt("#rulesButton",()=>nd.showModal());return}const d=((g=M.mode)==null?void 0:g.startsWith("online"))||M.screen==="lobby",f=[];f.push(`<button class="menu-action" data-menu-action="toggle-sound"><span class="menu-action-icon">${gm()?"♫":"♪"}</span><span>${gm()?"Sound on":"Sound off"}</span></button>`),M.screen==="game"&&d&&f.push(`<div class="menu-reaction-section"><button class="menu-action menu-reaction-toggle" data-menu-action="toggle-reactions" aria-expanded="false"><span class="menu-action-icon">☺</span><span>Send a reaction</span><span class="menu-action-chevron" aria-hidden="true">⌄</span></button><div class="menu-reaction-picker" role="group" aria-label="Choose a reaction" hidden>${zl.map(m=>`<button class="menu-reaction-option" type="button" role="menuitem" data-reaction="${m}" aria-label="Send ${m} reaction">${m}</button>`).join("")}</div></div>`),d&&M.roomId&&(f.push('<button class="menu-action" data-menu-action="sync-room"><span class="menu-action-icon">⟳</span><span>Refresh room sync</span></button>'),f.push('<button class="menu-action" data-menu-action="copy-invite"><span class="menu-action-icon">↗</span><span>Copy invite link</span></button>'),f.push('<button class="menu-action" data-menu-action="copy-code"><span class="menu-action-icon">#</span><span>Copy room code</span></button>')),M.screen==="lobby"&&M.host&&f.push('<button class="menu-action" data-menu-action="start-game"><span class="menu-action-icon">▶</span><span>Start game</span></button>'),M.screen==="game"&&(!d||M.host)&&f.push('<button class="menu-action" data-menu-action="new-game"><span class="menu-action-icon">⟳</span><span>Start new game</span></button>'),M.screen==="result"&&f.push('<button class="menu-action" data-menu-action="new-game"><span class="menu-action-icon">⟳</span><span>Play again</span></button>'),f.push('<button class="menu-action" data-menu-action="rules"><span class="menu-action-icon">?</span><span>How to play</span></button>'),(d||M.screen==="game"||M.screen==="result")&&f.push('<button class="menu-action is-danger" data-menu-action="leave"><span class="menu-action-icon">↩</span><span>Leave game</span></button>'),nr(t,`<div class="menu-shell"><button class="menu-trigger" id="gameMenuToggle" aria-label="Game menu" aria-haspopup="menu" aria-expanded="false" title="Game menu"><span class="menu-icon" aria-hidden="true"></span></button><div class="game-menu-panel is-hidden" id="gameMenuPanel" role="menu">${f.join("")}</div></div>`),jt("#gameMenuToggle",(m,v)=>{var T;const x=document.querySelector("#gameMenuPanel"),E=v.getAttribute("aria-expanded")!=="true";v.setAttribute("aria-expanded",String(E)),x.classList.toggle("is-hidden",!E),(T=v.closest(".menu-shell"))==null||T.classList.toggle("is-open",E)}),jt(".menu-action",(m,v)=>{var T,y,S;const x=v.dataset.menuAction,E=document.querySelector("#gameMenuPanel");if(x==="toggle-reactions"){const b=v.nextElementSibling,N=v.getAttribute("aria-expanded")!=="true";v.setAttribute("aria-expanded",String(N)),b.hidden=!N,(T=v.closest(".menu-reaction-section"))==null||T.classList.toggle("is-expanded",N);return}if(E&&E.classList.add("is-hidden"),(y=document.querySelector("#gameMenuToggle"))==null||y.setAttribute("aria-expanded","false"),(S=document.querySelector(".menu-shell"))==null||S.classList.remove("is-open"),x==="copy-invite")dI();else if(x==="copy-code")LM(M.roomId,"Room code copied");else if(x==="sync-room")oI();else if(x==="toggle-sound")mM(),Qr();else if(x==="rules")nd.showModal();else if(x==="leave")DM();else if(x==="start-game")id();else if(x==="new-game"){if(d&&M.host&&M.players.forEach(b=>{b.score=0,b.total=0}),d&&!M.host)return vi("Ask the host to start another game.");d?id():ig()}}),jt(".menu-reaction-option",(m,v)=>RM(v.dataset.reaction))}function Fa(){pd(),document.body.classList.remove("match-mode","lobby-mode","take5-entry-mode"),document.body.classList.add("home-mode","platform-home"),M.screen="home",M.game=null,M.selected=null,_s(!0);try{if(!hr||typeof Qy!="function")throw new Error("The game registry is unavailable.");Qr(),nr(_i,`<section class="platform-homepage">
      <section class="platform-welcome" aria-labelledby="platformWelcomeTitle"><div><h1 id="platformWelcomeTitle">Ready to play?</h1><p>Pick your game. Bring your friends. Let the fun begin.</p></div><span class="platform-online"><i></i> Games ready</span></section>
      <section class="platform-featured" data-game-tile="play" data-game-id="${hr.id}" role="button" tabindex="0" aria-label="Play ${$t(hr.name)}" aria-labelledby="featuredTitle"><div class="featured-art">${_M(hr)}</div><div class="featured-copy"><div class="featured-meta"><span>Featured game</span>${vM(hr)}</div><h2 id="featuredTitle">${$t(hr.name)}</h2><p>${hr.featuredDescription}</p><button class="platform-primary" data-game-action="play" data-game-id="${hr.id}">Play now <span>→</span></button></div><div class="featured-detail"><span>2–10 players</span><span>10 cards each</span><span>15 min</span></div></section>
      <section class="platform-library" id="games" aria-labelledby="gamesTitle"><div class="section-heading"><div><span>Game library</span><h2 id="gamesTitle">Your Game Collection</h2><p>Choose a game and start playing.</p></div></div><div class="game-library-grid">${Qy()}</div></section>
    </section>`,{nativeControls:!1}),jt("[data-game-action]",(n,e)=>{e.dataset.gameAction==="play"?Qh(e.dataset.gameId):vi(`${e.dataset.gameId==="phase-10"?"Phase 10":"Splendor"} is coming soon.`)}),document.querySelectorAll('[data-game-tile="play"]').forEach(n=>{n.addEventListener("click",e=>{e.target.closest("[data-game-action]")||Qh(n.dataset.gameId||hr.id)}),n.addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),Qh(n.dataset.gameId||hr.id))})})}catch(n){console.error("Could not render the Card Games lobby.",n),nr(_i,`<section class="platform-fallback" role="alert"><span>Card Games</span><h1>We couldn’t load the game lobby.</h1><p>${$t(n.message||"Please try again.")}</p><button class="platform-primary" id="retryLobby">Try again <span>↻</span></button></section>`,{nativeControls:!1}),jt("#retryLobby",Fa)}}function Qh(n){const e=Km.find(t=>t.id===n);if(!e||e.status!=="available")return vi("This game is coming soon.");e.route==="phase-10"?Qm():eg()}function Qm(){pd(),M.phase10=null,M.screen="phase10-setup",document.body.classList.remove("match-mode","platform-home","lobby-mode"),document.body.classList.add("home-mode","phase10-mode"),_s(!1),Qr(),nr(_i,`<section class="phase10-setup"><div class="phase10-setup-art"><div class="p10-floating-card p10-card-blue">7</div><div class="p10-floating-card p10-card-green">8</div><div class="p10-floating-card p10-card-red">10</div></div><div class="phase10-setup-copy"><span class="phase10-kicker">Phase 10 · local table</span><h1>Choose your player</h1><p>Choose your character, build your phase, and be first through all ten challenges.</p><div class="memoji-grid" role="group" aria-label="Choose your player">${ND.map(n=>`<button class="memoji-choice ${n===M.phase10Avatar?"is-selected":""}" data-phase-avatar="${n}" aria-pressed="${n===M.phase10Avatar}" aria-label="Choose ${$D(n)}">${_m(n)}</button>`).join("")}</div><button class="phase10-play" id="startPhase10">Start game <span>→</span></button><button class="phase10-back" id="backToLobby">Back to games</button></div></section>`,{nativeControls:!1}),jt("[data-phase-avatar]",(n,e)=>{M.phase10Avatar=e.dataset.phaseAvatar,Qm()}),jt("#startPhase10",()=>{M.phase10=xM(M.name,M.phase10Avatar),M.screen="phase10",Zr()}),jt("#backToLobby",Fa)}function $D(n){return{"🧑🏻":"Player","🦊":"Milo","🐻":"Nora","🐸":"Pip"}[n]||"Player"}function _m(n,e=""){return`<span class="avatar-3d avatar-3d--${{"🧑🏻":"player","🦊":"fox","🐻":"bear","🐸":"frog"}[n]||"player"} ${e}" aria-hidden="true"></span>`}function ro(n,e){(typeof n=="string"?document.querySelectorAll(n):[n]).forEach(r=>{if(!r)return;let s=!1;const o=u=>{s||r.getAttribute("aria-disabled")==="true"||(s=!0,u.preventDefault(),ka("tap"),e(u,r))};r.addEventListener("pointerup",o),r.addEventListener("click",o)})}function XD(n,e=!1){var o;const t=Na(n)?"wild":tr(n)?"skip":"",r=Na(n)?"★":tr(n)?"⊘":n.value,s=t==="wild"?"★":t==="skip"?"⊘":n.value;return`<button class="phase10-card ${t} ${n.color||""} ${e?"is-selected":""}" data-phase-card="${n.id}" aria-label="${Na(n)?"Wild card":tr(n)?"Skip card":`${n.color} ${n.value}`}" ${((o=M.phase10)==null?void 0:o.turn)!=="play"?'aria-disabled="true"':""}><div class="phase10-card-band phase10-card-band-top"><b>${s}</b><b>${s}</b></div><b class="phase10-card-value">${r}</b><div class="phase10-card-band phase10-card-band-bottom"><b>${s}</b><b>${s}</b></div><i>${t==="wild"?"WILD":t==="skip"?"SKIP":n.color}</i></button>`}function qD(n){return[6,7,8,7,8,9,8,7,7,8][n-1]||6}function bM(n,e,t=0,r=[],s=[]){if(r.length===e)return s.push(r),s;for(let o=t;o<=n.length-(e-r.length);o++)bM(n,e,o+1,r.concat(n[o]),s);return s}function YD(n){const e=qD(n.phase),t=bM(n.hand,e).find(s=>SM(n.phase,s));if(!t)return!1;const r=new Set(t.map(s=>s.id));return n.phaseCards=t,n.hand=n.hand.filter(s=>!r.has(s.id)),n.laid=!0,!0}function Zr(){const n=M.phase10;if(!n)return Qm();document.body.classList.remove("home-mode","platform-home","match-mode"),document.body.classList.add("phase10-mode"),M.screen="phase10",Qr();const e=n.players[0];n.players[n.current];const t=n.discardPile.at(-1),r=new Set(n.selected),s=n.current===0;nr(_i,`<section class="phase10-board"><header class="phase10-board-head"><div><span class="phase10-kicker">Round ${n.round}</span><h1>Phase ${e.phase}<small>${vm[e.phase-1]}</small></h1></div><div class="phase10-message ${s?"is-your-turn":""}">${$t(n.message)}</div><button class="phase10-exit" id="exitPhase10">Exit game</button></header><section class="phase10-opponents">${n.players.slice(1).map((o,u)=>`<article class="phase10-player ${n.current===u+1?"is-active":""}"><span class="phase10-avatar">${_m(o.avatar)}</span><div><b>${o.name}</b><small>Phase ${o.phase} · ${o.hand.length} cards</small></div><strong>${o.score}</strong>${o.laid?'<i class="phase10-done">✓</i>':""}</article>`).join("")}</section><main class="phase10-table"><div class="phase10-goal"><span>Your goal</span><strong>Phase ${e.phase}</strong><p>${vm[e.phase-1]}</p>${e.laid?"<b>Phase complete ✓</b>":""}</div><div class="phase10-decks"><button class="phase10-deck draw" id="phaseDraw" ${!s||n.turn!=="draw"?'aria-disabled="true"':""}><span>✦</span><small>Draw</small><i>${n.drawPile.length}</i></button><button class="phase10-deck discard ${(t==null?void 0:t.color)||""} ${Na(t)?"wild":""} ${tr(t)?"skip":""}" id="phaseDiscardDraw" ${!s||n.turn!=="draw"?'aria-disabled="true"':""}><span>${Na(t)?"★":tr(t)?"⊘":t==null?void 0:t.value}</span><small>Discard</small></button></div><div class="phase10-actions"><button id="phaseLay" ${!s||n.turn!=="play"||e.laid?'aria-disabled="true"':""}>Lay phase</button><button id="phaseDiscard" ${!s||n.turn!=="play"||n.selected.length!==1?'aria-disabled="true"':""}>Discard selected</button></div></main><section class="phase10-hand-wrap"><div class="phase10-hand-heading"><span>${_m(e.avatar)}</span><div><b>Your hand</b><small>${e.hand.length} cards · select cards to lay or discard</small></div></div><div class="phase10-hand">${e.hand.map(o=>XD(o,r.has(o.id))).join("")}</div></section></section>`,{nativeControls:!1}),ro("[data-phase-card]",(o,u)=>{if(n.current!==0||n.turn!=="play")return;const d=u.dataset.phaseCard;n.selected=n.selected.includes(d)?n.selected.filter(f=>f!==d):n.selected.concat(d),Zr()}),ro("#phaseDraw",()=>nS(!1)),ro("#phaseDiscardDraw",()=>nS(!0)),ro("#phaseLay",KD),ro("#phaseDiscard",ZD),ro("#exitPhase10",Fa)}function nS(n){const e=M.phase10,t=e==null?void 0:e.players[0];if(!e||e.current!==0||e.turn!=="draw")return;const r=n?e.discardPile.pop():e.drawPile.pop();r&&(t.hand.push(r),e.turn="play",e.message="Lay your phase or discard one card.",Zr())}function KD(){const n=M.phase10,e=n==null?void 0:n.players[0];if(!n||n.current!==0||n.turn!=="play"||e.laid)return;const t=e.hand.filter(s=>n.selected.includes(s.id));if(!SM(e.phase,t)){n.message=`Those cards do not complete Phase ${e.phase}: ${vm[e.phase-1]}.`,Zr();return}const r=new Set(t.map(s=>s.id));e.phaseCards=t,e.hand=e.hand.filter(s=>!r.has(s.id)),e.laid=!0,n.selected=[],n.message="Phase complete! Discard one card to end your turn.",Zr()}function ZD(){const n=M.phase10,e=n==null?void 0:n.players[0];if(!n||n.current!==0||n.turn!=="play"||n.selected.length!==1)return;const t=n.selected[0],r=e.hand.findIndex(o=>o.id===t);if(r<0)return;const[s]=e.hand.splice(r,1);n.discardPile.push(s),n.selected=[],tr(s)&&(n.skipped=1),wM()}function wM(){const n=M.phase10,e=n.players[n.current];if(e.hand.length===0)return JD(e);n.current=(n.current+1)%n.players.length,n.skipped===n.current&&(n.message=`${n.players[n.current].name} was skipped!`,n.skipped=null,n.current=(n.current+1)%n.players.length),n.turn="draw",n.current===0?(n.message="Your turn: draw a card.",Zr()):(n.message=`${n.players[n.current].name} is thinking…`,Zr(),window.setTimeout(jD,650))}function jD(){const n=M.phase10;if(!n||n.current===0||n.finished)return;const e=n.players[n.current],t=n.drawPile.pop();t&&e.hand.push(t),YD(e);const r=e.hand.filter(o=>!Na(o)&&!tr(o)),s=(r.length?r:e.hand)[Math.floor(Math.random()*(r.length?r.length:e.hand.length))];s&&(e.hand.splice(e.hand.indexOf(s),1),n.discardPile.push(s),tr(s)&&(n.skipped=(n.current+1)%n.players.length)),wM()}function JD(n){const e=M.phase10;if(e.players.forEach(r=>{r!==n&&(r.score+=r.hand.reduce((s,o)=>s+kD(o),0))}),n.phase+=1,n.phase>10){e.finished=!0,e.message=`${n.name} completed all ten phases!`,Zr();return}const t=xM(M.name,M.phase10Avatar);t.players.forEach((r,s)=>{r.phase=e.players[s].phase,r.score=e.players[s].score}),t.round=e.round+1,t.message=`${n.name} went out. New round!`,M.phase10=t,Zr()}function eg(){var e,t,r;pd(),document.body.classList.remove("match-mode","lobby-mode","platform-home"),document.body.classList.add("home-mode","take5-entry-mode"),M.screen="take5-home",M.game=null,M.selected=null,_s(!0),Qr();const n=$t(M.name);nr(_i,`<section class="landing">
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
          <div class="join-room-controls"><input class="text-field room-code-input" id="roomCode" type="text" inputmode="numeric" pattern="[0-9]{4}" maxlength="4" placeholder="1234" aria-describedby="roomCodeHint" value="${$t(M.roomPrefill||"")}" autocomplete="one-time-code" /><button class="primary-button action-button join-room-button" id="joinRoom">Join room</button></div>
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
  </section>`),jt(".setup-tab",(s,o)=>{M.tab=o.dataset.tab,eg()}),(e=document.querySelector("#botCount"))==null||e.addEventListener("change",s=>M.botCount=+s.target.value),jt("#startBots",()=>{ep("#playerName"),ig()}),jt("#hostRoom",()=>{ep("#roomPlayerName"),rI()}),jt("#joinRoom",()=>{ep("#roomPlayerName"),og(document.querySelector("#roomCode").value.trim())}),(t=document.querySelector("#roomCode"))==null||t.addEventListener("input",s=>{s.target.value=s.target.value.replace(/\D/g,"").slice(0,4)}),(r=document.querySelector("#roomCode"))==null||r.addEventListener("keydown",s=>{var o;s.key==="Enter"&&((o=document.querySelector("#joinRoom"))==null||o.dispatchEvent(new CustomEvent("rnpress",{bubbles:!0})))})}function ep(n){var e;M.name=((e=document.querySelector(n))==null?void 0:e.value.trim())||"Player",localStorage.setItem("take5-name",M.name)}function Oi(n){const e=document.querySelector(`[data-panel="${M.tab}"] .inline-error`);e&&(e.textContent=n)}function vi(n){var t;clearTimeout(M.toastTimer),(t=document.querySelector(".toast"))==null||t.remove();const e=document.createElement("div");e.className="toast",e.textContent=n,document.body.append(e),M.toastTimer=setTimeout(()=>e.remove(),2600)}const zl=["😂","😮","😭","👏","❤️","🐂"];function tg(n){if(M.screen!=="game"||!zl.includes(n.emoji))return;const e=Array.from(document.querySelectorAll(".header-player[data-player-id]")).find(s=>s.dataset.playerId===n.playerId),t=e==null?void 0:e.getBoundingClientRect(),r=document.createElement("div");r.className="room-reaction-float",r.style.left=`${t?t.left+t.width/2:innerWidth/2}px`,r.style.top=`${t?t.bottom-4:innerHeight*.45}px`,r.innerHTML=`<span>${n.emoji}</span><small>${$t(n.name||"Player")}</small>`,document.body.append(r),setTimeout(()=>r.remove(),1700)}function TM(n,e=null){M.connections.forEach((t,r)=>{if(r!==e&&t.open)try{t.send(n)}catch{}})}function RM(n){var r,s,o,u,d;if(!((r=M.mode)!=null&&r.startsWith("online"))||M.screen!=="game"||!zl.includes(n))return;const e=Date.now();if(e-(M.reactionCooldowns.get(M.clientId)||0)<650)return;M.reactionCooldowns.set(M.clientId,e);const t={type:"reaction",playerId:M.clientId,name:M.name||"Player",emoji:n};tg(t),(s=document.querySelector("#gameMenuPanel"))==null||s.classList.add("is-hidden"),(o=document.querySelector("#gameMenuToggle"))==null||o.setAttribute("aria-expanded","false"),(u=document.querySelector(".menu-shell"))==null||u.classList.remove("is-open"),document.querySelectorAll(".hand-reaction-picker").forEach(f=>{f.hidden=!0}),document.querySelectorAll(".hand-reaction-trigger").forEach(f=>f.setAttribute("aria-expanded","false")),document.querySelectorAll(".hand-reaction-control").forEach(f=>f.classList.remove("is-expanded")),M.host?TM(t):(d=M.connection)!=null&&d.open&&M.connection.send({type:"reaction",emoji:n})}function QD(n,e=!1){const t=[{id:"self",name:M.name||"You",human:!0,online:!0,score:0,total:0,hand:[]}];for(let r=0;r<n;r++)t.push({id:`bot${r+1}`,name:["Milo","Nora","Pip","June","Otto","Bea","Finn","Kit","Lou"][r],human:!1,online:!0,score:0,total:0,hand:[]});return t}function ng(n){const e=WD();return n.forEach(t=>t.hand=e.splice(0,10).sort((r,s)=>r-s)),e.splice(0,4).map(t=>[t])}function ig(){var t,r;ka("deal"),_s(!1),clearTimeout(M.countdownTimer),clearInterval(M.countdownInterval);const n=+(((t=document.querySelector("#botCount"))==null?void 0:t.value)||M.botCount||3);M.botCount=n,M.submittedTurn=!1,M.animating=!1,M.replay=null,M.replayKey=null,M.revealOrigins={},M.stageSeen=new Set,M.stageTurnKey=null;const e=QD(n);M.game={players:e,rows:ng(e),turn:1,round:1,tieOffset:0,phase:"choosing",selections:{},lastReveal:null,mode:"local",botStyle:((r=document.querySelector("#botStyle"))==null?void 0:r.value)||"clever"},M.mode="local",M.screen="game",M.selected=null,M.screenTransition=!0,yi()}function eI(n){n.round++,n.turn=1,n.tieOffset=(n.tieOffset+1)%n.players.length,n.rows=ng(n.players),n.phase="choosing",n.selections={},n.lastReveal=null,delete n.pendingRowChoice}function rg(n,e){const t=n.hand;let r=t[0],s=1/0;for(const o of t){const u=e.rows.map((f,h)=>({i:h,top:f.at(-1),distance:o-f.at(-1),heads:f.reduce((g,m)=>g+ni(m),0)})).filter(f=>o>f.top).sort((f,h)=>h.top-f.top);let d;if(!u.length)d=26+e.rows.reduce((f,h)=>f+h.reduce((g,m)=>g+ni(m),0),0)*1.1+o/104;else{const f=u[0];d=f.heads*2.1+(f.distance<4?1.3:0)+(f.i===3?-.3:0),e.rows[f.i].length>=5&&(d+=7),e.rows[f.i].length>=4&&(d+=2.5),d+=o/500}e.botStyle==="chaotic"&&(d+=(Math.random()-.5)*9),d<s&&(s=d,r=o)}return r}function tI(n){var r;const e=M.game;if(M.animating||!e||e.phase!=="choosing"||!e.players[0].hand.includes(n))return;ka("card");const t=(r=document.querySelector(`.hand-card[data-card="${n}"]`))==null?void 0:r.getBoundingClientRect();t&&(M.revealOrigins.self={left:t.left,top:t.top,width:t.width,height:t.height}),e.selections.self=n,e.phase="waiting",M.selected=null,yi(),e.players.slice(1).forEach((s,o)=>window.setTimeout(()=>{M.game!==e||e.phase!=="waiting"||(e.selections[s.id]=rg(s,e),e.players.every(u=>e.selections[u.id]!=null)?(e.phase="countdown",e.countdownAt=Date.now()+900,yi(),ug(e,!1)):yi())},550+o*380))}function AM(n,e){var u;const t=n.players.map((d,f)=>(f+n.tieOffset)%n.players.length),r=n.players.map(d=>({p:d,card:n.selections[d.id]})).sort((d,f)=>d.card-f.card||t.indexOf(n.players.indexOf(d.p))-t.indexOf(n.players.indexOf(f.p))),s=r.find(d=>d.p.hand.includes(d.card));if(s&&!n.rows.some(f=>s.card>f.at(-1))&&s.p.human&&e==null)return n.pendingRowChoice={playerId:s.p.id,card:s.card},n.phase="row-choice",!0;const o=[];for(const{p:d,card:f}of r){const h=d.hand.indexOf(f);if(h<0)continue;d.hand.splice(h,1);let g=n.rows.map((E,T)=>({i:T,top:E.at(-1)})).filter(E=>f>E.top).sort((E,T)=>T.top-E.top),m,v=0,x=!1;if(g.length)m=g[0].i,n.rows[m].length===5?(v=n.rows[m].slice(0,5).reduce((E,T)=>E+ni(T),0),d.score+=v,d.total+=v,x=!0,n.rows[m]=[f]):n.rows[m].push(f);else{if(m=e!=null&&d.id===((u=n.pendingRowChoice)==null?void 0:u.playerId)?e:n.rows.reduce((T,y,S)=>y.reduce((b,N)=>b+ni(N),0)<n.rows[T].reduce((b,N)=>b+ni(N),0)?S:T,0),!Number.isInteger(m)||m<0||m>=n.rows.length)return d.hand.splice(h,0,f),!0;v=n.rows[m].reduce((T,y)=>T+ni(y),0),d.score+=v,d.total+=v,x=!0,n.rows[m]=[f]}o.push({playerId:d.id,name:d.name,card:f,rowIndex:m,penalty:v,tookRow:x})}return n.lastReveal=o,n.selections={},delete n.pendingRowChoice,n.tieOffset=(n.tieOffset+1)%n.players.length,M.selected=null,M.submittedTurn=!1,n.players.every(d=>d.hand.length===0)?n.players.some(f=>f.total>=66)?(n.phase="finished",M.screen="result"):n.phase="round-break":(n.turn++,n.phase="choosing"),!1}async function ag(){return aS(()=>import("https://esm.sh/peerjs@1.5.5?bundle"),[])}function nI(){const n=new Uint16Array(1);return crypto.getRandomValues(n),String(n[0]%1e4).padStart(4,"0")}function iI(n){var t;let e=dd(ms);return((e==null?void 0:e.roomId)!==n||!e.token)&&(e={roomId:n,token:((t=crypto.randomUUID)==null?void 0:t.call(crypto))||`${Date.now()}-${Math.random().toString(36).slice(2)}`},localStorage.setItem(ms,JSON.stringify(e))),M.resumeToken=e.token,e.token}function Mo(){if(!(!M.host||!M.roomId))try{localStorage.setItem(Jm,JSON.stringify({roomId:M.roomId,name:M.name,screen:M.screen,players:M.players,game:M.game}))}catch{vi("Could not save a recovery copy of this room on this device.")}}function CM(n,e){M.peer===n&&(e.on("open",()=>{}),e.on("data",t=>sI(e,t)),e.on("close",()=>{var r,s,o;if(M.peer!==n||M.connections.get(e.peer)!==e)return;const t=M.players.find(u=>u.id===e.peer);t&&(t.online=!1),M.connections.delete(e.peer),Mo(),((r=M.game)==null?void 0:r.phase)==="choosing"?(Ol(),ir()):((s=M.game)==null?void 0:s.phase)==="row-choice"?(((o=M.game.pendingRowChoice)==null?void 0:o.playerId)===(t==null?void 0:t.id)&&PM(),ir()):M.screen==="lobby"&&co()}))}function sg(n){n.on("disconnected",()=>{M.peer===n&&fd(n,1200)}),n.on("open",()=>clearTimeout(M.peerReconnectTimer))}function fd(n,e=3e3){M.peer===n&&(clearTimeout(M.peerReconnectTimer),M.peerReconnectTimer=setTimeout(()=>{if(!(M.peer!==n||!n.disconnected)){try{n.reconnect()}catch{}M.peer===n&&n.disconnected&&fd(n,4e3)}},e))}async function rI(){if(!M.busy){M.busy=!0,Oi("Opening your room…");try{const{Peer:n}=await ag();let e=0;const t=()=>{const r=nI(),s=new n(`take5-${r}`);M.peer=s,M.host=!0,sg(s),s.on("open",o=>{M.peer===s&&(localStorage.removeItem(ms),M.roomId=r,M.clientId=o,M.players=[{id:o,name:M.name,human:!0,online:!0,score:0,total:0,hand:[]}],M.screen="lobby",M.mode="online-host",M.busy=!1,M.screenTransition=!0,history.replaceState({},"",`?room=${encodeURIComponent(r)}`),yo(),Mo())}),s.on("connection",o=>CM(s,o)),s.on("error",o=>{if(M.peer===s){if(o.type==="unavailable-id"&&e<8){e++,s.destroy(),M.peer=null,setTimeout(t,120);return}M.busy=!1,M.screen==="home"?Oi(o.type==="unavailable-id"?"Could not reserve a room code. Try again.":"Room connection failed. Check your internet and try again."):vi("Room connection hiccup.")}})};t()}catch{M.busy=!1,Oi("Online rooms need an internet connection. Please try again.")}}}async function aI(n){if(!(n!=null&&n.roomId)||!/^\d{4}$/.test(n.roomId))return Fa();M.busy=!0,M.name=n.name||M.name,Oi("Restoring your room…");try{const{Peer:e}=await ag();let t=0;const r=()=>{const s=new e(`take5-${n.roomId}`);M.peer=s,M.host=!0,sg(s),s.on("open",o=>{var u;M.peer===s&&(_s(!1),M.roomId=n.roomId,M.clientId=o,M.game=n.game||null,M.players=((u=M.game)==null?void 0:u.players)||n.players||[],M.game&&(M.players=M.game.players),M.mode="online-host",M.screen=M.game?M.game.phase==="finished"?"result":"game":"lobby",M.busy=!1,M.screenTransition=!0,M.selected=null,M.submittedTurn=!1,M.animating=!1,M.replay=null,M.replayKey=null,M.revealOrigins={},history.replaceState({},"",`?room=${encodeURIComponent(n.roomId)}`),M.screen==="lobby"?yo():M.screen==="result"?cg():(yi(),M.game.phase==="countdown"&&ug(M.game,!0)),Mo())}),s.on("connection",o=>CM(s,o)),s.on("error",o=>{if(M.peer===s){if(o.type==="unavailable-id"&&t<25){t++,s.destroy(),M.peer=null,setTimeout(r,Math.min(1800,180+t*120));return}M.busy=!1,t>=25?Oi("This room is still active in another tab. Close that tab, then refresh to restore it."):Oi("Could not reconnect to your room. Refresh to try again."),s.destroy(),M.peer=null,M.host=!1}})};r()}catch{M.busy=!1,M.host=!1,Oi("Could not restore the room. Check your connection and refresh to try again.")}}function sI(n,e){var t,r;if(!(!e||typeof e!="object")){if(e.type==="hello"){const s=typeof e.resumeToken=="string"?e.resumeToken.slice(0,100):"",o=M.players.find(d=>d.id===n.peer||s&&d.resumeToken===s);if(o){const d=o.id,f=M.connections.get(d);if(f&&f!==n){M.connections.delete(d);try{f.close()}catch{}}o.id=n.peer,o.online=!0,M.game&&d!==n.peer&&(Object.hasOwn(M.game.selections||{},d)&&(M.game.selections[n.peer]=M.game.selections[d],delete M.game.selections[d]),((t=M.game.pendingRowChoice)==null?void 0:t.playerId)===d&&(M.game.pendingRowChoice.playerId=n.peer),M.game.lastReveal&&(M.game.lastReveal=M.game.lastReveal.map(h=>h.playerId===d?{...h,playerId:n.peer}:h))),M.connections.set(n.peer,n),n.send({type:"welcome",id:n.peer,roomId:M.roomId}),M.game?(clearTimeout(M.disconnectAdvanceTimer),M.disconnectAdvanceTimer=null,n.send(ym(n.peer)),Ol(),Mo(),ir()):co();return}if(M.game){n.send({type:"error",message:"This game is already in progress. Rejoin using your original invite link."}),n.close();return}if(M.players.length>=10){n.send({type:"error",message:"This table is full (10 players max)."}),n.close();return}const u={id:n.peer,name:String(e.name||"Player").slice(0,18),resumeToken:s||void 0,human:!0,online:!0,ready:!1,score:0,total:0,hand:[]};M.players.push(u),M.connections.set(n.peer,n),n.send({type:"welcome",id:n.peer,roomId:M.roomId}),M.screen==="lobby"&&co();return}if(e.type==="sync"){if(M.connections.get(n.peer)!==n)return;n.send({type:"welcome",id:n.peer,roomId:M.roomId}),M.game?n.send(ym(n.peer)):n.send({type:"lobby",players:M.players.map(({id:s,name:o,online:u,human:d,ready:f})=>({id:s,name:o,online:u,human:d,ready:f})),roomId:M.roomId});return}if(e.type==="ready"&&M.screen==="lobby"){const s=M.players.find(o=>o.id===n.peer);if(!s)return;s.ready=!!e.ready,co();return}if(e.type==="reaction"){const s=M.players.find(d=>d.id===n.peer),o=Date.now();if(M.screen!=="game"||!(s!=null&&s.human)||!s.online||!zl.includes(e.emoji)||o-(M.reactionCooldowns.get(n.peer)||0)<650)return;M.reactionCooldowns.set(n.peer,o);const u={type:"reaction",playerId:n.peer,name:s.name,emoji:e.emoji};tg(u),TM(u,n.peer);return}if(e.type==="pick"&&M.game&&M.game.phase==="choosing"&&!M.animating){const s=M.players.find(o=>o.id===n.peer);if(!s||!s.hand.includes(+e.card)||M.game.selections[n.peer])return;M.game.selections[n.peer]=+e.card,Ol(),ir()}if(e.type==="choose-row"&&((r=M.game)==null?void 0:r.phase)==="row-choice"){const s=M.game.pendingRowChoice;if(!s||s.playerId!==n.peer||!Number.isInteger(+e.rowIndex))return;lg(+e.rowIndex)}}}function Ol(){const n=M.game;if(M.animating||!n||n.phase!=="choosing"||n.players.some(r=>r.human&&r.online&&!n.selections[r.id]))return;if(n.players.some(r=>r.human&&!r.online&&!n.selections[r.id])){PM();return}clearTimeout(M.disconnectAdvanceTimer),M.disconnectAdvanceTimer=null,n.players.filter(r=>!r.human&&!n.selections[r.id]).forEach(r=>n.selections[r.id]=rg(r,n)),n.phase="countdown",n.countdownAt=Date.now()+3e3,ug(n,!0)}function PM(){M.disconnectAdvanceTimer||(M.disconnectAdvanceTimer=setTimeout(()=>{var e;M.disconnectAdvanceTimer=null;const n=M.game;if(n){if(n.phase==="choosing")n.players.filter(t=>t.human&&!t.online&&!n.selections[t.id]).forEach(t=>n.selections[t.id]=rg(t,n)),Ol(),ir();else if(n.phase==="row-choice"&&n.pendingRowChoice){const r=((e=n.rows.map((s,o)=>({i:o,penalty:s.reduce((u,d)=>u+ni(d),0)})).sort((s,o)=>s.penalty-o.penalty||s.i-o.i)[0])==null?void 0:e.i)??0;lg(r)}}},2e4))}function co(){Mo();const n={type:"lobby",players:M.players.map(({id:e,name:t,online:r,human:s,ready:o})=>({id:e,name:t,online:r,human:s,ready:o})),roomId:M.roomId};M.connections.forEach(e=>{try{e.send(n)}catch{}}),yo()}function ym(n){const e=M.game;return e?{type:"game",viewer:n,game:{...e,players:e.players.map(t=>{const{resumeToken:r,...s}=t;return{...s,hand:t.id===n?t.hand:void 0}}),readyPlayers:Object.keys(e.selections),selections:e.phase==="row-choice"?{...e.selections}:{},mode:"online"}}:null}function ir(){if(M.screen==="lobby"){co();return}Mo(),M.connections.forEach((n,e)=>{try{n.send(ym(e))}catch{}}),M.clientId&&yi()}function oI(){var e,t;if(!M.roomId){vi("This room is not connected.");return}if(M.host){M.screen==="lobby"?co():ir(),vi("Room state refreshed for everyone.");return}const n=M.peer;if((e=M.connection)!=null&&e.open){M.connection.send({type:"sync"}),vi("Refreshing room sync…");return}if(n){if(M.recoveringGuest=!0,M.connection=null,clearTimeout(M.reconnectTimer),n.disconnected)try{n.reconnect()}catch{fd(n)}hd(M.roomId,n),vi("Reconnecting to the room…");return}M.resumeToken=((t=dd(ms))==null?void 0:t.token)||M.resumeToken,M.busy=!1,og(M.roomId)}function id(){var e;if(!M.host||M.players.filter(t=>t.human&&t.online).length<1)return;ka("deal"),_s(!1),clearTimeout(M.countdownTimer),clearInterval(M.countdownInterval);let n=+(((e=document.querySelector("#lobbyBots"))==null?void 0:e.value)||0);M.players.filter(t=>t.human&&t.online).length===1&&!M.players.some(t=>!t.human)&&n===0&&(n=1);for(let t=0;t<n&&M.players.length<10;t++){const r=M.players.filter(s=>!s.human).length;M.players.push({id:`bot${r+1}`,name:["Milo","Nora","Pip","June","Otto","Bea","Finn","Kit","Lou"][r],human:!1,online:!0,score:0,total:0,hand:[]})}M.game={players:M.players,rows:ng(M.players),turn:1,round:1,tieOffset:0,phase:"choosing",selections:{},lastReveal:null,mode:"online"},M.submittedTurn=!1,M.animating=!1,M.replay=null,M.replayKey=null,M.revealOrigins={},M.stageSeen=new Set,M.stageTurnKey=null,M.screen="game",M.mode="online-host",M.screenTransition=!0,ir()}function hd(n,e,t=0){if(M.peer!==e||M.host||M.connection&&M.connection.open)return;let r;try{r=e.connect(`take5-${n}`,{reliable:!0})}catch{Sm(n,e,t);return}M.connection=r;let s=!1,o=setTimeout(()=>{!s&&M.connection===r&&r.close()},1e4);r.on("open",()=>{M.peer===e&&r.send({type:"hello",name:M.name,resumeToken:M.resumeToken})}),r.on("data",u=>{(u==null?void 0:u.type)==="welcome"&&(s=!0,clearTimeout(o),M.recoveringGuest=!1),lI(u)}),r.on("error",()=>r.close()),r.on("close",()=>{clearTimeout(o),!(M.connection!==r||M.peer!==e)&&Sm(n,e,t)})}function Sm(n,e,t){if(!(M.peer!==e||M.host)){if(!M.recoveringGuest&&M.screen!=="game"&&M.screen!=="lobby"){M.busy=!1,Oi("Could not reach that room. Check the code and try again.");return}M.recoveringGuest=!0,clearTimeout(M.reconnectTimer),M.reconnectTimer=setTimeout(()=>hd(n,e,t+1),Math.min(8e3,700*Math.pow(2,Math.min(t,3))))}}function og(n){if(!M.busy){if(!/^\d{4}$/.test(n)){Oi("Enter the 4-digit room code.");return}M.busy=!0,M.roomId=n,iI(n),Oi("Finding your table…"),ag().then(({Peer:e})=>{const t=new e;M.peer=t,M.host=!1,sg(t),t.on("open",()=>hd(n,t)),t.on("error",r=>{if(r.type==="peer-unavailable"&&M.recoveringGuest){Sm(n,t,0);return}M.screen==="home"&&!M.recoveringGuest&&(M.busy=!1,Oi(r.type==="peer-unavailable"?"Room not found. Check the code and try again.":"Could not connect. Check your internet and try again."))})}).catch(()=>{M.busy=!1,Oi("Online rooms need an internet connection. Please try again.")})}}function lI(n){var e;if((n==null?void 0:n.type)==="reaction")tg(n);else if((n==null?void 0:n.type)==="welcome")M.clientId=n.id,M.roomId=n.roomId,M.busy=!1,M.mode="online-guest",M.game||(M.screen="lobby"),localStorage.setItem(ms,JSON.stringify({roomId:n.roomId,token:M.resumeToken})),M.game||yo();else if((n==null?void 0:n.type)==="lobby")M.players=n.players,M.roomId=n.roomId,M.screen!=="game"&&(M.screen="lobby"),yo();else if((n==null?void 0:n.type)==="game"){const t=M.game,r=t&&(t.turn!==n.game.turn||t.round!==n.game.round);M.game=n.game,M.players=n.game.players,M.clientId=n.viewer,M.mode="online-guest",M.screen=n.game.phase==="finished"?"result":"game",r&&(M.selected=null,M.submittedTurn=!1),M.submittedTurn=!!((e=n.game.readyPlayers)!=null&&e.includes(n.viewer)),M.recoveringGuest=!1,yi()}else(n==null?void 0:n.type)==="error"&&(M.busy=!1,vi(n.message))}function uI(n){var t,r,s;if(M.animating||((t=M.game)==null?void 0:t.phase)!=="choosing")return;ka("card");const e=(r=document.querySelector(`.hand-card[data-card="${n}"]`))==null?void 0:r.getBoundingClientRect();if(e&&(M.revealOrigins[M.clientId]={left:e.left,top:e.top,width:e.width,height:e.height}),M.host){if(M.game.selections[M.clientId])return;M.game.selections[M.clientId]=n,Ol(),ir()}else(s=M.connection)!=null&&s.open&&(M.connection.send({type:"pick",card:n}),M.selected=n,M.submittedTurn=!0,yi())}function lg(n){var o;const e=M.game,t=e==null?void 0:e.pendingRowChoice;if(!e||!t||n<0||n>=e.rows.length)return;clearTimeout(M.disconnectAdvanceTimer),M.disconnectAdvanceTimer=null;const r=M.mode==="local"?(o=e.players[0])==null?void 0:o.id:M.clientId;!(t.playerId===r)&&!M.host||(AM(e,n),M.host?ir():yi())}function cI(n){var s,o;ka("row");const e=M.game,t=e==null?void 0:e.pendingRowChoice,r=M.mode==="local"?(s=e==null?void 0:e.players[0])==null?void 0:s.id:M.clientId;!t||t.playerId!==r||(M.mode==="local"||M.host?lg(n):(o=M.connection)!=null&&o.open&&M.connection.send({type:"choose-row",rowIndex:n}))}function yo(){_s(!1),document.body.classList.remove("home-mode"),document.body.classList.add("match-mode","lobby-mode"),M.screen="lobby";const n=M.players.filter(s=>s.online!==!1).length,e=M.players.find(s=>s.id===M.clientId),t=!!(e!=null&&e.ready),r=$t(M.roomId);Qr(),nr(_i,`<section class="game-layout lobby-layout"><div class="lobby-row"><strong>ROOM CODE</strong><span class="room-code">${r}</span><span class="lobby-wait">${n<2?"Waiting for friends, or start a practice game now.":`${n} players connected`}</span></div><div class="tabletop"><div class="tabletop-head"><span>THE TABLE</span><strong>2–10 PLAYERS</strong></div><div class="row-empty">${n<2?"Share the invite link, or start now and a bot will join your table.":"Players are here. The host can start the game."}</div></div><div class="game-bottom lobby-bottom"><div></div><aside class="turn-side"><div class="turn-state">READY TO PLAY</div><p class="turn-message">${n<2?"Start now and play with one bot, or wait for friends to join.":"Everyone is here. Deal the cards!"}</p>${M.host?'<label class="field-label" for="lobbyBots">Bots to add</label><select class="select-field" id="lobbyBots"><option value="0">No bots</option><option value="1">1 bot</option><option value="2">2 bots</option><option value="3">3 bots</option></select><button class="primary-button lobby-start" id="beginOnline">Start game ↗</button>':`<button class="primary-button lobby-start lobby-ready" id="toggleReady">${t?"Ready ✓":"Ready up"}</button><div class="turn-help">${t?"You’re ready. Waiting for the host…":"Tap Ready when you’re set to play."}</div>`}</aside></div></section>`),jt("#beginOnline",id),jt("#toggleReady",()=>{var o;const s=!t;M.players=M.players.map(u=>u.id===M.clientId?{...u,ready:s}:u),(o=M.connection)==null||o.send({type:"ready",ready:s}),yo()})}function LM(n,e){var t;(t=navigator.clipboard)==null||t.writeText(n).then(()=>vi(e)).catch(()=>vi("Could not copy. Select the room code to copy it."))}function dI(){const e=`${gM?LD:`${location.origin}${location.pathname}`}?room=${encodeURIComponent(M.roomId)}`;LM(e,"Invite link copied")}function xm(){return`<div class="card-back-design"><span class="back-emblem">${Er()}</span><b>TAKE<br>5</b><span class="back-stars">✦　✦　✦</span></div>`}function ug(n,e){clearTimeout(M.countdownTimer),M.countdownTimer=setTimeout(()=>{M.game!==n||n.phase!=="countdown"||(clearInterval(M.countdownInterval),M.countdownInterval=null,n.phase="choosing",delete n.countdownAt,AM(n),n.phase==="finished"&&(M.screen="result"),e?ir():yi())},Math.max(0,(n.countdownAt||Date.now()+3e3)-Date.now()))}function fI(n){if(clearInterval(M.countdownInterval),M.countdownInterval=null,n.phase!=="countdown")return;const e=()=>{const t=_i.querySelector("[data-countdown]");if(!t)return;const r=Math.max(0,(n.countdownAt-Date.now())/1e3);t.textContent=r>0?String(Math.ceil(r)):"REVEAL"};e(),M.countdownInterval=setInterval(e,100)}function hI(){var t;if(document.querySelector(".clubhouse-ready"))return;const n=Array.from(_i.querySelectorAll(".stage-card-back"));if(!n.length)return;const e=[];for(const r of n){const s=r.dataset.stagePlayer;if(M.stageSeen.has(s))continue;M.stageSeen.add(s);const o=Array.from(document.querySelectorAll("[data-player-id]")).find(v=>v.dataset.playerId===s),u=M.revealOrigins[s]||((t=o==null?void 0:o.querySelector(".opponent-cards"))==null?void 0:t.getBoundingClientRect())||(o==null?void 0:o.getBoundingClientRect()),d=r.getBoundingClientRect();if(!u){r.classList.remove("stage-pending");continue}const f=document.createElement("div");f.className="flying-back",f.innerHTML=xm(),document.body.append(f);const h={x:u.left+u.width/2,y:u.top+u.height/2},g={x:d.left+d.width/2,y:d.top+d.height/2};f.style.left=`${h.x}px`,f.style.top=`${h.y}px`;const m=(async()=>{try{await f.animate([{left:`${h.x}px`,top:`${h.y}px`,transform:"translate(-50%,-50%) scale(.5) rotate(-7deg)"},{left:`${g.x}px`,top:`${g.y}px`,transform:"translate(-50%,-50%) scale(1) rotate(0deg)"}],{duration:330,easing:"cubic-bezier(.18,.75,.25,1)",fill:"forwards"}).finished}catch{}f.remove(),r.classList.remove("stage-pending")})();e.push(m)}Promise.all(e)}function pI(n){var t;if(!((t=n.lastReveal)!=null&&t.length))return;const e=`${n.round}:${n.turn}:${n.lastReveal.map(r=>`${r.playerId}-${r.card}`).join(",")}`;e!==M.replayKey&&(M.replayKey=e,M.replay={key:e,reveals:n.lastReveal.map(r=>({...r})),seen:new Set,active:!0,running:!1},M.revealOrigins=M.revealOrigins||{},M.animating=!0)}function iS(n){return new Promise(e=>setTimeout(e,n))}async function mI(){var r,s,o,u,d;const n=M.replay;if(!(n!=null&&n.active)||n.running)return;ka("deal"),n.running=!0,M.animating=!0;const e=matchMedia("(prefers-reduced-motion: reduce)").matches,t=e?180:500;if(await iS(e?150:720),!await mD(n.reveals))for(const f of n.reveals){if(M.replay!==n||M.screen==="home")break;const h=_i.querySelector(`.row-lane[data-row-index="${f.rowIndex}"]`),g=_i.querySelector(`.playing-card[data-row-index="${f.rowIndex}"][data-card-number="${f.card}"]`),m=g||(h==null?void 0:h.querySelector(".row-cards"));let v=(r=M.revealOrigins)==null?void 0:r[f.playerId];if(!v){const S=Array.from(document.querySelectorAll("[data-player-id]")).find(b=>b.dataset.playerId===f.playerId);v=((s=S==null?void 0:S.querySelector(".opponent-cards"))==null?void 0:s.getBoundingClientRect())||(S==null?void 0:S.getBoundingClientRect())||((o=_i.querySelector(".hand-area"))==null?void 0:o.getBoundingClientRect())}if(!v||!m){n.seen.add(f.card),g==null||g.classList.remove("reveal-pending");continue}const x={x:v.left+v.width/2,y:v.top+v.height/2},E=m.getBoundingClientRect(),T={x:E.left+E.width/2,y:E.top+E.height/2},y=document.createElement("div");y.className="flying-card",y.innerHTML=so(f.card),document.body.append(y),y.style.left=`${x.x}px`,y.style.top=`${x.y}px`;try{await y.animate([{left:`${x.x}px`,top:`${x.y}px`,transform:"translate(-50%,-50%) scale(.62) rotate(-5deg)"},{left:`${(x.x+T.x)/2}px`,top:`${(x.y+T.y)/2-24}px`,transform:"translate(-50%,-50%) scale(.86) rotate(2deg)"},{left:`${T.x}px`,top:`${T.y}px`,transform:"translate(-50%,-50%) scale(1) rotate(0deg)"}],{duration:t,easing:"cubic-bezier(.2,.78,.24,1)",fill:"forwards"}).finished}catch{}if(y.remove(),M.replay!==n)break;n.seen.add(f.card),g==null||g.classList.remove("reveal-pending"),h==null||h.classList.add("card-landed"),setTimeout(()=>h==null?void 0:h.classList.remove("card-landed"),360),await iS(e?40:130)}M.replay===n&&(n.active=!1,n.running=!1,M.animating=!1,M.revealOrigins={},((u=M.game)==null?void 0:u.phase)==="finished"?(M.screen="result",cg()):((d=M.game)==null?void 0:d.phase)==="round-break"?(eI(M.game),M.stageSeen=new Set,M.stageTurnKey=null,M.host?ir():yi()):yi())}function yi(){var y,S,b,N,L,O,D,w,P,V;if(!M.game)return;const n=M.game;if(pI(n),M.screen==="result"&&!((y=M.replay)!=null&&y.active)){cg();return}document.body.classList.remove("home-mode","lobby-mode"),document.body.classList.add("match-mode"),M.screen="game",Qr();const e=n.players.find(I=>I.id===M.clientId)||n.players[0],t=(e==null?void 0:e.hand)||[],r=n.phase==="choosing",s=(S=M.mode)==null?void 0:S.startsWith("online"),o=n.readyPlayers||Object.keys(n.selections||{}),u=s&&(!!((b=n.selections)!=null&&b[M.clientId])||o.includes(M.clientId)||M.submittedTurn);(N=e==null?void 0:e.hand)==null||N.length;const d=`${n.round}:${n.turn}`;M.stageTurnKey!==d&&(M.stageTurnKey=d,M.stageSeen=new Set);const f=new Set(o);s&&u&&f.add(M.clientId);const h=n.players.filter(I=>f.has(I.id)),g=((L=n.selections)==null?void 0:L[e.id])??(u?M.selected:null),m=g==null?t:t.filter(I=>I!==g),v=new Set((O=M.replay)!=null&&O.active?M.replay.reveals.filter(I=>!M.replay.seen.has(I.card)).map(I=>`${I.rowIndex}:${I.card}`):[]),x=n.phase==="row-choice"?n.pendingRowChoice:null,E=!!x&&x.playerId===e.id,T=x?n.players.find(I=>I.id===x.playerId):null;pD(n,e.id,(D=M.replay)==null?void 0:D.active),nr(_i,`<section class="game-layout">
  <div class="tabletop"><div class="tabletop-head"><span>✦ THE MEADOW TABLE ✦</span><strong>ROUND ${n.round} <span>·</span> TURN ${Math.min(n.turn,10)} OF 10</strong></div><div class="rows">${n.rows.map((I,z)=>{var Z;const W=I.reduce((B,le)=>B+ni(le),0);return`<div class="row-lane ${(Z=n.lastReveal)!=null&&Z.some(B=>B.rowIndex===z&&B.playerId===e.id&&B.tookRow)?"target":""}" data-row-index="${z}"><div class="row-label"><span>ROW ${z+1}</span></div><b class="row-total bull-counter-badge" aria-label="${W} bullheads"><strong>${W}</strong>${Er()}</b><div class="row-cards">${I.map(B=>`<div class="playing-card ${v.has(`${z}:${B}`)?"reveal-pending":""}" data-row-index="${z}" data-card-number="${B}" aria-label="${B}, ${ni(B)} bullheads">${so(B)}</div>`).join("")}</div></div>`}).join("")}</div></div>
  <div class="stage-zone ${h.length?"has-cards":""} ${n.phase==="countdown"?"countdown-active":""}">${h.map(I=>{var W;const z=((W=n.selections)==null?void 0:W[I.id])??(I.id===(x==null?void 0:x.playerId)?x.card:null);return x&&Number.isInteger(z)?`<div class="stage-reveal-card" data-stage-player="${$t(I.id)}" aria-label="${$t(I.name)} played ${z}">${so(z)}<small>${$t(I.name)} · ${z}</small></div>`:`<div class="stage-card-back ${M.stageSeen.has(I.id)?"":"stage-pending"}" data-stage-player="${$t(I.id)}">${xm()}<small>${$t(I.name)}</small></div>`}).join("")}${n.phase==="countdown"?'<div class="reveal-countdown"><span>REVEALING IN</span><strong data-countdown>3</strong></div>':""}</div>
  ${(w=M.replay)!=null&&w.active?`<div class="reveal-bay">${M.replay.reveals.map(I=>{var z;return`<div class="reveal-card"><div class="reveal-flip"><div class="reveal-side reveal-back">${xm()}</div><div class="reveal-side reveal-front">${so(I.card)}</div></div><small>${$t(((z=n.players.find(W=>W.id===I.playerId))==null?void 0:z.name)||I.name||"Player")}</small></div>`}).join("")}</div>`:""}
  ${x?`<section class="row-choice-bay ${E?"is-your-choice":"is-waiting"}" aria-labelledby="rowChoiceTitle" aria-live="polite">
    <div class="row-choice-header">
      <div class="row-choice-card">${so(x.card)}</div>
      <div class="row-choice-copy"><span class="row-choice-eyebrow">${E?"YOUR LOW CARD":"ROW CHOICE"}</span><h2 id="rowChoiceTitle">${E?"Choose a row to collect":`#${$t((T==null?void 0:T.name)||"Player")} waiting for a row choice`}</h2><p>${E?"Pick the row of bullheads you want to take.":`${$t((T==null?void 0:T.name)||"The player")} is choosing which row to collect.`}</p></div>
    </div>
    <div class="row-choice-options" role="group" aria-label="Choose a row">
      ${n.rows.map((I,z)=>{const W=I.reduce((Z,B)=>Z+ni(B),0);return`<button class="row-choice-option" data-row-choice="${z}" aria-label="Row ${z+1}, take ${W} ${W===1?"bullhead":"bullheads"}" ${E?"":"disabled"}><span class="row-choice-option-top"><b>ROW ${String(z+1).padStart(2,"0")}</b><strong class="row-choice-penalty bull-counter-badge" aria-hidden="true"><span>${W}</span>${Er()}</strong></span><span class="row-choice-preview" aria-hidden="true">${I.map(Z=>`<i>${Z}</i>`).join("")}</span><span class="row-choice-action">${E?"Take row":"Waiting"} <b aria-hidden="true">→</b></span></button>`}).join("")}
    </div>
  </section>`:""}
  <div class="game-bottom"><section class="hand-area" data-player-id="${$t(e.id)}"><div class="hand-heading"><h2><span class="your-avatar">${EM(e,0)}</span> Your hand <span class="my-score" aria-label="Your score: ${e.total||0} bullheads"><b>${e.total||0}</b>${Er()}</span>${s?`<span class="hand-reaction-control"><button type="button" class="hand-reaction-trigger" aria-label="Open reactions" aria-expanded="false">☺</button><span class="hand-reaction-picker" role="group" aria-label="Choose a reaction" hidden>${zl.map(I=>`<button type="button" class="hand-reaction-option" data-reaction="${I}" aria-label="Send ${I} reaction">${I}</button>`).join("")}</span></span>`:""}</h2><span>${u?"PICK LOCKED IN":"PICK YOUR CARD"}</span></div><div class="hand" role="group" aria-label="Your cards">${m.map((I,z)=>`<button class="hand-card ${M.selected===I?"selected":""}" style="--hand-index:${z}" data-card="${I}" aria-label="Card ${I}, ${ni(I)} bullheads${M.selected===I?", selected":""}" aria-pressed="${M.selected===I}" ${!r||u||M.animating?"disabled":""}>${so(I)}</button>`).join("")}</div></section><aside class="turn-side"><div class="turn-state ${u?"done":s?"waiting":""}">${u?"PICK LOCKED IN":s?"EVERYONE PICKS AT ONCE":"YOUR TURN"}</div><p class="turn-message">${u?s?"Waiting for the other players…":"Your card is away. Let’s see where it lands.":"Pick a card and dodge those bullheads."}</p><button id="playCard" class="primary-button play-button" ${M.selected===null||u||!r||M.animating?"disabled":""}>Play card <span>↗</span></button><div class="turn-help">${(P=M.lastReveal)!=null&&P.length?gI(n.lastReveal,e.id):"Lowest bigger card wins the row."}</div></aside></div></section>`),jt("[data-card]",(I,z)=>{z.getAttribute("aria-disabled")!=="true"&&(M.selected=+z.dataset.card,yi())}),jt("#playCard",()=>{M.selected!=null&&!M.animating&&(M.mode==="local"?tI(M.selected):uI(M.selected))}),jt("[data-row-choice]",(I,z)=>cI(+z.dataset.rowChoice)),jt(".hand-reaction-trigger",(I,z)=>{var B;const W=z.nextElementSibling,Z=z.getAttribute("aria-expanded")!=="true";z.setAttribute("aria-expanded",String(Z)),W.hidden=!Z,(B=z.closest(".hand-reaction-control"))==null||B.classList.toggle("is-expanded",Z)}),jt(".hand-reaction-option",(I,z)=>RM(z.dataset.reaction)),n.phase==="countdown"?fI(n):(clearInterval(M.countdownInterval),M.countdownInterval=null),hI(),(V=M.replay)!=null&&V.active&&mI()}function gI(n,e){const t=n.find(r=>r.playerId===e);return t?`${t.penalty?`You took ${t.penalty} bullheads.`:`Your ${t.card} landed in row ${t.rowIndex+1}.`} ${n.length>1?n.filter(r=>r.playerId!==e).map(r=>`${$t(r.name)} ${r.penalty?`took ${r.penalty} bulls`:`played ${r.card}`}`).join(" · "):""}`:n.map(r=>`${$t(r.name)} played ${r.card}${r.penalty?` and took ${r.penalty} bulls`:""}`).join(" · ")}function cg(){document.body.classList.add("match-mode"),M.screen="result",Qr();const n=M.game.players.slice().sort((t,r)=>t.total-r.total),e=n[0];nr(_i,`<section class="result-screen"><div class="result-mark">🏆</div><div class="eyebrow">THAT’S A WRAP</div><h1>${e.id===M.clientId?"You kept your cool!":`${$t(e.name)} takes it!`}</h1><p>Fewest bullheads at the table. A suspiciously good run.</p><div class="final-scores">${n.map((t,r)=>`<div class="final-score"><span>${r===0?"✳ ":""}${$t(t.name)}${t.id===M.clientId?" (you)":""}</span><b aria-label="${t.total} bullheads">${t.total}${Er()}</b></div>`).join("")}</div><button class="primary-button lobby-start" id="playAgain">Play again ↗</button><button class="pill-button" id="backHome">Back to table</button></section>`),jt("#playAgain",()=>{M.mode.startsWith("online")?M.host?(M.players.forEach(r=>{r.score=0,r.total=0}),id()):vi("Ask the host to start another game."):ig()}),jt("#backHome",DM)}function pd(){if(M.peer)try{M.peer.destroy()}catch{}clearTimeout(M.countdownTimer),clearInterval(M.countdownInterval),clearTimeout(M.reconnectTimer),clearTimeout(M.peerReconnectTimer),clearTimeout(M.disconnectAdvanceTimer),document.querySelectorAll(".flying-card,.flying-back").forEach(n=>n.remove()),M.animating=!1,M.replay=null,M.replayKey=null,M.revealOrigins={},M.stageSeen=new Set,M.stageTurnKey=null,M.reactionCooldowns.clear(),M.recoveringGuest=!1,M.resumeToken=null,M.peer=null,M.connection=null,M.connections.clear(),M.host=!1,M.clientId=null,M.roomId="",M.players=[],history.replaceState({},"",location.pathname)}function DM(){M.host&&localStorage.removeItem(Jm),localStorage.removeItem(ms),pd(),M.screen="home",M.game=null,M.selected=null,M.tab="rooms",M.screenTransition=!0,Fa()}export{Ym as W};
