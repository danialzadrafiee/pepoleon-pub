function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-D-cqeNyE.js","assets/events-5s2vgVzm.js","assets/index.es-Vulngka0.js","assets/DashboardIndex-CQqfFLal.js","assets/MainLayout-D2goJQAV.js","assets/GatewayIndex-CEI9JaCk.js","assets/GatewayIndex-CPkfPft9.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var c1=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var U=(t,e,n)=>(c1(t,e,"read from private field"),n?n.call(t):e.get(t)),We=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},Se=(t,e,n,r)=>(c1(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);var If=(t,e,n,r)=>({set _(o){Se(t,e,o,n)},get _(){return U(t,e,r)}}),tn=(t,e,n)=>(c1(t,e,"access private method"),n);const e9="modulepreload",t9=function(t){return"/build/"+t},Uv={},Pr=function(e,n,r){let o=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.all(n.map(l=>{if(l=t9(l),l in Uv)return;Uv[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(!!r)for(let g=i.length-1;g>=0;g--){const m=i[g];if(m.href===l&&(!c||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":e9,c||(h.as="script",h.crossOrigin=""),h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((g,m)=>{h.addEventListener("load",g),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}return o.then(()=>e()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})};var Mi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function os(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function n9(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var o=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return t[r]}})}),n}var Eb={exports:{}},qp={},_b={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf=Symbol.for("react.element"),r9=Symbol.for("react.portal"),i9=Symbol.for("react.fragment"),o9=Symbol.for("react.strict_mode"),s9=Symbol.for("react.profiler"),a9=Symbol.for("react.provider"),l9=Symbol.for("react.context"),c9=Symbol.for("react.forward_ref"),u9=Symbol.for("react.suspense"),d9=Symbol.for("react.memo"),f9=Symbol.for("react.lazy"),Fv=Symbol.iterator;function h9(t){return t===null||typeof t!="object"?null:(t=Fv&&t[Fv]||t["@@iterator"],typeof t=="function"?t:null)}var Sb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ab=Object.assign,$b={};function xc(t,e,n){this.props=t,this.context=e,this.refs=$b,this.updater=n||Sb}xc.prototype.isReactComponent={};xc.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xc.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Rb(){}Rb.prototype=xc.prototype;function bw(t,e,n){this.props=t,this.context=e,this.refs=$b,this.updater=n||Sb}var xw=bw.prototype=new Rb;xw.constructor=bw;Ab(xw,xc.prototype);xw.isPureReactComponent=!0;var Wv=Array.isArray,Tb=Object.prototype.hasOwnProperty,Cw={current:null},Pb={key:!0,ref:!0,__self:!0,__source:!0};function Ob(t,e,n){var r,o={},i=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(i=""+e.key),e)Tb.call(e,r)&&!Pb.hasOwnProperty(r)&&(o[r]=e[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];o.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:nf,type:t,key:i,ref:s,props:o,_owner:Cw.current}}function p9(t,e){return{$$typeof:nf,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ew(t){return typeof t=="object"&&t!==null&&t.$$typeof===nf}function m9(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var zv=/\/+/g;function u1(t,e){return typeof t=="object"&&t!==null&&t.key!=null?m9(""+t.key):e.toString(36)}function uh(t,e,n,r,o){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case nf:case r9:s=!0}}if(s)return s=t,o=o(s),t=r===""?"."+u1(s,0):r,Wv(o)?(n="",t!=null&&(n=t.replace(zv,"$&/")+"/"),uh(o,e,n,"",function(c){return c})):o!=null&&(Ew(o)&&(o=p9(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(zv,"$&/")+"/")+t)),e.push(o)),1;if(s=0,r=r===""?".":r+":",Wv(t))for(var a=0;a<t.length;a++){i=t[a];var l=r+u1(i,a);s+=uh(i,e,n,l,o)}else if(l=h9(t),typeof l=="function")for(t=l.call(t),a=0;!(i=t.next()).done;)i=i.value,l=r+u1(i,a++),s+=uh(i,e,n,l,o);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function kf(t,e,n){if(t==null)return t;var r=[],o=0;return uh(t,r,"","",function(i){return e.call(n,i,o++)}),r}function g9(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var bn={current:null},dh={transition:null},w9={ReactCurrentDispatcher:bn,ReactCurrentBatchConfig:dh,ReactCurrentOwner:Cw};Be.Children={map:kf,forEach:function(t,e,n){kf(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return kf(t,function(){e++}),e},toArray:function(t){return kf(t,function(e){return e})||[]},only:function(t){if(!Ew(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Be.Component=xc;Be.Fragment=i9;Be.Profiler=s9;Be.PureComponent=bw;Be.StrictMode=o9;Be.Suspense=u9;Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w9;Be.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ab({},t.props),o=t.key,i=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,s=Cw.current),e.key!==void 0&&(o=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Tb.call(e,l)&&!Pb.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:nf,type:t.type,key:o,ref:i,props:r,_owner:s}};Be.createContext=function(t){return t={$$typeof:l9,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:a9,_context:t},t.Consumer=t};Be.createElement=Ob;Be.createFactory=function(t){var e=Ob.bind(null,t);return e.type=t,e};Be.createRef=function(){return{current:null}};Be.forwardRef=function(t){return{$$typeof:c9,render:t}};Be.isValidElement=Ew;Be.lazy=function(t){return{$$typeof:f9,_payload:{_status:-1,_result:t},_init:g9}};Be.memo=function(t,e){return{$$typeof:d9,type:t,compare:e===void 0?null:e}};Be.startTransition=function(t){var e=dh.transition;dh.transition={};try{t()}finally{dh.transition=e}};Be.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Be.useCallback=function(t,e){return bn.current.useCallback(t,e)};Be.useContext=function(t){return bn.current.useContext(t)};Be.useDebugValue=function(){};Be.useDeferredValue=function(t){return bn.current.useDeferredValue(t)};Be.useEffect=function(t,e){return bn.current.useEffect(t,e)};Be.useId=function(){return bn.current.useId()};Be.useImperativeHandle=function(t,e,n){return bn.current.useImperativeHandle(t,e,n)};Be.useInsertionEffect=function(t,e){return bn.current.useInsertionEffect(t,e)};Be.useLayoutEffect=function(t,e){return bn.current.useLayoutEffect(t,e)};Be.useMemo=function(t,e){return bn.current.useMemo(t,e)};Be.useReducer=function(t,e,n){return bn.current.useReducer(t,e,n)};Be.useRef=function(t){return bn.current.useRef(t)};Be.useState=function(t){return bn.current.useState(t)};Be.useSyncExternalStore=function(t,e,n){return bn.current.useSyncExternalStore(t,e,n)};Be.useTransition=function(){return bn.current.useTransition()};Be.version="18.2.0";_b.exports=Be;var et=_b.exports;const BF=os(et);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y9=et,v9=Symbol.for("react.element"),b9=Symbol.for("react.fragment"),x9=Object.prototype.hasOwnProperty,C9=y9.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E9={key:!0,ref:!0,__self:!0,__source:!0};function Ib(t,e,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)x9.call(e,r)&&!E9.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:v9,type:t,key:i,ref:s,props:o,_owner:C9.current}}qp.Fragment=b9;qp.jsx=Ib;qp.jsxs=Ib;Eb.exports=qp;var Os=Eb.exports;function kb(t,e){return function(){return t.apply(e,arguments)}}const{toString:_9}=Object.prototype,{getPrototypeOf:_w}=Object,Gp=(t=>e=>{const n=_9.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),bi=t=>(t=t.toLowerCase(),e=>Gp(e)===t),Kp=t=>e=>typeof e===t,{isArray:Cc}=Array,ju=Kp("undefined");function S9(t){return t!==null&&!ju(t)&&t.constructor!==null&&!ju(t.constructor)&&dr(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Nb=bi("ArrayBuffer");function A9(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Nb(t.buffer),e}const $9=Kp("string"),dr=Kp("function"),Mb=Kp("number"),Yp=t=>t!==null&&typeof t=="object",R9=t=>t===!0||t===!1,fh=t=>{if(Gp(t)!=="object")return!1;const e=_w(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},T9=bi("Date"),P9=bi("File"),O9=bi("Blob"),I9=bi("FileList"),k9=t=>Yp(t)&&dr(t.pipe),N9=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||dr(t.append)&&((e=Gp(t))==="formdata"||e==="object"&&dr(t.toString)&&t.toString()==="[object FormData]"))},M9=bi("URLSearchParams"),L9=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function rf(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,o;if(typeof t!="object"&&(t=[t]),Cc(t))for(r=0,o=t.length;r<o;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),s=i.length;let a;for(r=0;r<s;r++)a=i[r],e.call(null,t[a],a,t)}}function Lb(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,o;for(;r-- >0;)if(o=n[r],e===o.toLowerCase())return o;return null}const Db=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,jb=t=>!ju(t)&&t!==Db;function Am(){const{caseless:t}=jb(this)&&this||{},e={},n=(r,o)=>{const i=t&&Lb(e,o)||o;fh(e[i])&&fh(r)?e[i]=Am(e[i],r):fh(r)?e[i]=Am({},r):Cc(r)?e[i]=r.slice():e[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&rf(arguments[r],n);return e}const D9=(t,e,n,{allOwnKeys:r}={})=>(rf(e,(o,i)=>{n&&dr(o)?t[i]=kb(o,n):t[i]=o},{allOwnKeys:r}),t),j9=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),B9=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},U9=(t,e,n,r)=>{let o,i,s;const a={};if(e=e||{},t==null)return e;do{for(o=Object.getOwnPropertyNames(t),i=o.length;i-- >0;)s=o[i],(!r||r(s,t,e))&&!a[s]&&(e[s]=t[s],a[s]=!0);t=n!==!1&&_w(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},F9=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},W9=t=>{if(!t)return null;if(Cc(t))return t;let e=t.length;if(!Mb(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},z9=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&_w(Uint8Array)),H9=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let o;for(;(o=r.next())&&!o.done;){const i=o.value;e.call(t,i[0],i[1])}},V9=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Z9=bi("HTMLFormElement"),q9=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Hv=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),G9=bi("RegExp"),Bb=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};rf(n,(o,i)=>{let s;(s=e(o,i,t))!==!1&&(r[i]=s||o)}),Object.defineProperties(t,r)},K9=t=>{Bb(t,(e,n)=>{if(dr(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(dr(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Y9=(t,e)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Cc(t)?r(t):r(String(t).split(e)),n},Q9=()=>{},J9=(t,e)=>(t=+t,Number.isFinite(t)?t:e),d1="abcdefghijklmnopqrstuvwxyz",Vv="0123456789",Ub={DIGIT:Vv,ALPHA:d1,ALPHA_DIGIT:d1+d1.toUpperCase()+Vv},X9=(t=16,e=Ub.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function eE(t){return!!(t&&dr(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const tE=t=>{const e=new Array(10),n=(r,o)=>{if(Yp(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[o]=r;const i=Cc(r)?[]:{};return rf(r,(s,a)=>{const l=n(s,o+1);!ju(l)&&(i[a]=l)}),e[o]=void 0,i}}return r};return n(t,0)},nE=bi("AsyncFunction"),rE=t=>t&&(Yp(t)||dr(t))&&dr(t.then)&&dr(t.catch),z={isArray:Cc,isArrayBuffer:Nb,isBuffer:S9,isFormData:N9,isArrayBufferView:A9,isString:$9,isNumber:Mb,isBoolean:R9,isObject:Yp,isPlainObject:fh,isUndefined:ju,isDate:T9,isFile:P9,isBlob:O9,isRegExp:G9,isFunction:dr,isStream:k9,isURLSearchParams:M9,isTypedArray:z9,isFileList:I9,forEach:rf,merge:Am,extend:D9,trim:L9,stripBOM:j9,inherits:B9,toFlatObject:U9,kindOf:Gp,kindOfTest:bi,endsWith:F9,toArray:W9,forEachEntry:H9,matchAll:V9,isHTMLForm:Z9,hasOwnProperty:Hv,hasOwnProp:Hv,reduceDescriptors:Bb,freezeMethods:K9,toObjectSet:Y9,toCamelCase:q9,noop:Q9,toFiniteNumber:J9,findKey:Lb,global:Db,isContextDefined:jb,ALPHABET:Ub,generateString:X9,isSpecCompliantForm:eE,toJSONObject:tE,isAsyncFn:nE,isThenable:rE};function Ue(t,e,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}z.inherits(Ue,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:z.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Fb=Ue.prototype,Wb={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Wb[t]={value:t}});Object.defineProperties(Ue,Wb);Object.defineProperty(Fb,"isAxiosError",{value:!0});Ue.from=(t,e,n,r,o,i)=>{const s=Object.create(Fb);return z.toFlatObject(t,s,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),Ue.call(s,t.message,e,n,r,o),s.cause=t,s.name=t.name,i&&Object.assign(s,i),s};const iE=null;function $m(t){return z.isPlainObject(t)||z.isArray(t)}function zb(t){return z.endsWith(t,"[]")?t.slice(0,-2):t}function Zv(t,e,n){return t?t.concat(e).map(function(o,i){return o=zb(o),!n&&i?"["+o+"]":o}).join(n?".":""):e}function oE(t){return z.isArray(t)&&!t.some($m)}const sE=z.toFlatObject(z,{},null,function(e){return/^is[A-Z]/.test(e)});function Qp(t,e,n){if(!z.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=z.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,C){return!z.isUndefined(C[w])});const r=n.metaTokens,o=n.visitor||u,i=n.dots,s=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&z.isSpecCompliantForm(e);if(!z.isFunction(o))throw new TypeError("visitor must be a function");function c(m){if(m===null)return"";if(z.isDate(m))return m.toISOString();if(!l&&z.isBlob(m))throw new Ue("Blob is not supported. Use a Buffer instead.");return z.isArrayBuffer(m)||z.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function u(m,w,C){let y=m;if(m&&!C&&typeof m=="object"){if(z.endsWith(w,"{}"))w=r?w:w.slice(0,-2),m=JSON.stringify(m);else if(z.isArray(m)&&oE(m)||(z.isFileList(m)||z.endsWith(w,"[]"))&&(y=z.toArray(m)))return w=zb(w),y.forEach(function(b,E){!(z.isUndefined(b)||b===null)&&e.append(s===!0?Zv([w],E,i):s===null?w:w+"[]",c(b))}),!1}return $m(m)?!0:(e.append(Zv(C,w,i),c(m)),!1)}const d=[],h=Object.assign(sE,{defaultVisitor:u,convertValue:c,isVisitable:$m});function g(m,w){if(!z.isUndefined(m)){if(d.indexOf(m)!==-1)throw Error("Circular reference detected in "+w.join("."));d.push(m),z.forEach(m,function(y,v){(!(z.isUndefined(y)||y===null)&&o.call(e,y,z.isString(v)?v.trim():v,w,h))===!0&&g(y,w?w.concat(v):[v])}),d.pop()}}if(!z.isObject(t))throw new TypeError("data must be an object");return g(t),e}function qv(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Sw(t,e){this._pairs=[],t&&Qp(t,this,e)}const Hb=Sw.prototype;Hb.append=function(e,n){this._pairs.push([e,n])};Hb.toString=function(e){const n=e?function(r){return e.call(this,r,qv)}:qv;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function aE(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Vb(t,e,n){if(!e)return t;const r=n&&n.encode||aE,o=n&&n.serialize;let i;if(o?i=o(e,n):i=z.isURLSearchParams(e)?e.toString():new Sw(e,n).toString(r),i){const s=t.indexOf("#");s!==-1&&(t=t.slice(0,s)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Gv{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){z.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Zb={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},lE=typeof URLSearchParams<"u"?URLSearchParams:Sw,cE=typeof FormData<"u"?FormData:null,uE=typeof Blob<"u"?Blob:null,dE={isBrowser:!0,classes:{URLSearchParams:lE,FormData:cE,Blob:uE},protocols:["http","https","file","blob","url","data"]},qb=typeof window<"u"&&typeof document<"u",fE=(t=>qb&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),hE=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",pE=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:qb,hasStandardBrowserEnv:fE,hasStandardBrowserWebWorkerEnv:hE},Symbol.toStringTag,{value:"Module"})),si={...pE,...dE};function mE(t,e){return Qp(t,new si.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return si.isNode&&z.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function gE(t){return z.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function wE(t){const e={},n=Object.keys(t);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],e[i]=t[i];return e}function Gb(t){function e(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),l=i>=n.length;return s=!s&&z.isArray(o)?o.length:s,l?(z.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!a):((!o[s]||!z.isObject(o[s]))&&(o[s]=[]),e(n,r,o[s],i)&&z.isArray(o[s])&&(o[s]=wE(o[s])),!a)}if(z.isFormData(t)&&z.isFunction(t.entries)){const n={};return z.forEachEntry(t,(r,o)=>{e(gE(r),o,n,0)}),n}return null}function yE(t,e,n){if(z.isString(t))try{return(e||JSON.parse)(t),z.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Aw={transitional:Zb,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=z.isObject(e);if(i&&z.isHTMLForm(e)&&(e=new FormData(e)),z.isFormData(e))return o?JSON.stringify(Gb(e)):e;if(z.isArrayBuffer(e)||z.isBuffer(e)||z.isStream(e)||z.isFile(e)||z.isBlob(e))return e;if(z.isArrayBufferView(e))return e.buffer;if(z.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return mE(e,this.formSerializer).toString();if((a=z.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Qp(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),yE(e)):e}],transformResponse:[function(e){const n=this.transitional||Aw.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(e&&z.isString(e)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(e)}catch(a){if(s)throw a.name==="SyntaxError"?Ue.from(a,Ue.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:si.classes.FormData,Blob:si.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};z.forEach(["delete","get","head","post","put","patch"],t=>{Aw.headers[t]={}});const $w=Aw,vE=z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),bE=t=>{const e={};let n,r,o;return t&&t.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||e[n]&&vE[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Kv=Symbol("internals");function Zc(t){return t&&String(t).trim().toLowerCase()}function hh(t){return t===!1||t==null?t:z.isArray(t)?t.map(hh):String(t)}function xE(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const CE=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function f1(t,e,n,r,o){if(z.isFunction(r))return r.call(this,e,n);if(o&&(e=n),!!z.isString(e)){if(z.isString(r))return e.indexOf(r)!==-1;if(z.isRegExp(r))return r.test(e)}}function EE(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function _E(t,e){const n=z.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(o,i,s){return this[r].call(this,e,o,i,s)},configurable:!0})})}class Jp{constructor(e){e&&this.set(e)}set(e,n,r){const o=this;function i(a,l,c){const u=Zc(l);if(!u)throw new Error("header name must be a non-empty string");const d=z.findKey(o,u);(!d||o[d]===void 0||c===!0||c===void 0&&o[d]!==!1)&&(o[d||l]=hh(a))}const s=(a,l)=>z.forEach(a,(c,u)=>i(c,u,l));return z.isPlainObject(e)||e instanceof this.constructor?s(e,n):z.isString(e)&&(e=e.trim())&&!CE(e)?s(bE(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=Zc(e),e){const r=z.findKey(this,e);if(r){const o=this[r];if(!n)return o;if(n===!0)return xE(o);if(z.isFunction(n))return n.call(this,o,r);if(z.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Zc(e),e){const r=z.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||f1(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let o=!1;function i(s){if(s=Zc(s),s){const a=z.findKey(r,s);a&&(!n||f1(r,r[a],a,n))&&(delete r[a],o=!0)}}return z.isArray(e)?e.forEach(i):i(e),o}clear(e){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!e||f1(this,this[i],i,e,!0))&&(delete this[i],o=!0)}return o}normalize(e){const n=this,r={};return z.forEach(this,(o,i)=>{const s=z.findKey(r,i);if(s){n[s]=hh(o),delete n[i];return}const a=e?EE(i):String(i).trim();a!==i&&delete n[i],n[a]=hh(o),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return z.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=e&&z.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(o=>r.set(o)),r}static accessor(e){const r=(this[Kv]=this[Kv]={accessors:{}}).accessors,o=this.prototype;function i(s){const a=Zc(s);r[a]||(_E(o,s),r[a]=!0)}return z.isArray(e)?e.forEach(i):i(e),this}}Jp.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);z.reduceDescriptors(Jp.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});z.freezeMethods(Jp);const ji=Jp;function h1(t,e){const n=this||$w,r=e||n,o=ji.from(r.headers);let i=r.data;return z.forEach(t,function(a){i=a.call(n,i,o.normalize(),e?e.status:void 0)}),o.normalize(),i}function Kb(t){return!!(t&&t.__CANCEL__)}function of(t,e,n){Ue.call(this,t??"canceled",Ue.ERR_CANCELED,e,n),this.name="CanceledError"}z.inherits(of,Ue,{__CANCEL__:!0});function SE(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new Ue("Request failed with status code "+n.status,[Ue.ERR_BAD_REQUEST,Ue.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const AE=si.hasStandardBrowserEnv?{write(t,e,n,r,o,i){const s=[t+"="+encodeURIComponent(e)];z.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),z.isString(r)&&s.push("path="+r),z.isString(o)&&s.push("domain="+o),i===!0&&s.push("secure"),document.cookie=s.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function $E(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function RE(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Yb(t,e){return t&&!$E(e)?RE(t,e):e}const TE=si.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let s=i;return e&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(s){const a=z.isString(s)?o(s):s;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function PE(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function OE(t,e){t=t||10;const n=new Array(t),r=new Array(t);let o=0,i=0,s;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=r[i];s||(s=c),n[o]=l,r[o]=c;let d=i,h=0;for(;d!==o;)h+=n[d++],d=d%t;if(o=(o+1)%t,o===i&&(i=(i+1)%t),c-s<e)return;const g=u&&c-u;return g?Math.round(h*1e3/g):void 0}}function Yv(t,e){let n=0;const r=OE(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-n,l=r(a),c=i<=s;n=i;const u={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&c?(s-i)/l:void 0,event:o};u[e?"download":"upload"]=!0,t(u)}}const IE=typeof XMLHttpRequest<"u",kE=IE&&function(t){return new Promise(function(n,r){let o=t.data;const i=ji.from(t.headers).normalize();let{responseType:s,withXSRFToken:a}=t,l;function c(){t.cancelToken&&t.cancelToken.unsubscribe(l),t.signal&&t.signal.removeEventListener("abort",l)}let u;if(z.isFormData(o)){if(si.hasStandardBrowserEnv||si.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((u=i.getContentType())!==!1){const[w,...C]=u?u.split(";").map(y=>y.trim()).filter(Boolean):[];i.setContentType([w||"multipart/form-data",...C].join("; "))}}let d=new XMLHttpRequest;if(t.auth){const w=t.auth.username||"",C=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(w+":"+C))}const h=Yb(t.baseURL,t.url);d.open(t.method.toUpperCase(),Vb(h,t.params,t.paramsSerializer),!0),d.timeout=t.timeout;function g(){if(!d)return;const w=ji.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),y={data:!s||s==="text"||s==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:w,config:t,request:d};SE(function(b){n(b),c()},function(b){r(b),c()},y),d=null}if("onloadend"in d?d.onloadend=g:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(g)},d.onabort=function(){d&&(r(new Ue("Request aborted",Ue.ECONNABORTED,t,d)),d=null)},d.onerror=function(){r(new Ue("Network Error",Ue.ERR_NETWORK,t,d)),d=null},d.ontimeout=function(){let C=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const y=t.transitional||Zb;t.timeoutErrorMessage&&(C=t.timeoutErrorMessage),r(new Ue(C,y.clarifyTimeoutError?Ue.ETIMEDOUT:Ue.ECONNABORTED,t,d)),d=null},si.hasStandardBrowserEnv&&(a&&z.isFunction(a)&&(a=a(t)),a||a!==!1&&TE(h))){const w=t.xsrfHeaderName&&t.xsrfCookieName&&AE.read(t.xsrfCookieName);w&&i.set(t.xsrfHeaderName,w)}o===void 0&&i.setContentType(null),"setRequestHeader"in d&&z.forEach(i.toJSON(),function(C,y){d.setRequestHeader(y,C)}),z.isUndefined(t.withCredentials)||(d.withCredentials=!!t.withCredentials),s&&s!=="json"&&(d.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&d.addEventListener("progress",Yv(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",Yv(t.onUploadProgress)),(t.cancelToken||t.signal)&&(l=w=>{d&&(r(!w||w.type?new of(null,t,d):w),d.abort(),d=null)},t.cancelToken&&t.cancelToken.subscribe(l),t.signal&&(t.signal.aborted?l():t.signal.addEventListener("abort",l)));const m=PE(h);if(m&&si.protocols.indexOf(m)===-1){r(new Ue("Unsupported protocol "+m+":",Ue.ERR_BAD_REQUEST,t));return}d.send(o||null)})},Rm={http:iE,xhr:kE};z.forEach(Rm,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Qv=t=>`- ${t}`,NE=t=>z.isFunction(t)||t===null||t===!1,Qb={getAdapter:t=>{t=z.isArray(t)?t:[t];const{length:e}=t;let n,r;const o={};for(let i=0;i<e;i++){n=t[i];let s;if(r=n,!NE(n)&&(r=Rm[(s=String(n)).toLowerCase()],r===void 0))throw new Ue(`Unknown adapter '${s}'`);if(r)break;o[s||"#"+i]=r}if(!r){const i=Object.entries(o).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let s=e?i.length>1?`since :
`+i.map(Qv).join(`
`):" "+Qv(i[0]):"as no adapter specified";throw new Ue("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Rm};function p1(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new of(null,t)}function Jv(t){return p1(t),t.headers=ji.from(t.headers),t.data=h1.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Qb.getAdapter(t.adapter||$w.adapter)(t).then(function(r){return p1(t),r.data=h1.call(t,t.transformResponse,r),r.headers=ji.from(r.headers),r},function(r){return Kb(r)||(p1(t),r&&r.response&&(r.response.data=h1.call(t,t.transformResponse,r.response),r.response.headers=ji.from(r.response.headers))),Promise.reject(r)})}const Xv=t=>t instanceof ji?{...t}:t;function kl(t,e){e=e||{};const n={};function r(c,u,d){return z.isPlainObject(c)&&z.isPlainObject(u)?z.merge.call({caseless:d},c,u):z.isPlainObject(u)?z.merge({},u):z.isArray(u)?u.slice():u}function o(c,u,d){if(z.isUndefined(u)){if(!z.isUndefined(c))return r(void 0,c,d)}else return r(c,u,d)}function i(c,u){if(!z.isUndefined(u))return r(void 0,u)}function s(c,u){if(z.isUndefined(u)){if(!z.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function a(c,u,d){if(d in e)return r(c,u);if(d in t)return r(void 0,c)}const l={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(c,u)=>o(Xv(c),Xv(u),!0)};return z.forEach(Object.keys(Object.assign({},t,e)),function(u){const d=l[u]||o,h=d(t[u],e[u],u);z.isUndefined(h)&&d!==a||(n[u]=h)}),n}const Jb="1.6.8",Rw={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Rw[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const e2={};Rw.transitional=function(e,n,r){function o(i,s){return"[Axios v"+Jb+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,a)=>{if(e===!1)throw new Ue(o(s," has been removed"+(n?" in "+n:"")),Ue.ERR_DEPRECATED);return n&&!e2[s]&&(e2[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,s,a):!0}};function ME(t,e,n){if(typeof t!="object")throw new Ue("options must be an object",Ue.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let o=r.length;for(;o-- >0;){const i=r[o],s=e[i];if(s){const a=t[i],l=a===void 0||s(a,i,t);if(l!==!0)throw new Ue("option "+i+" must be "+l,Ue.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ue("Unknown option "+i,Ue.ERR_BAD_OPTION)}}const Tm={assertOptions:ME,validators:Rw},co=Tm.validators;class Ih{constructor(e){this.defaults=e,this.interceptors={request:new Gv,response:new Gv}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=kl(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&Tm.assertOptions(r,{silentJSONParsing:co.transitional(co.boolean),forcedJSONParsing:co.transitional(co.boolean),clarifyTimeoutError:co.transitional(co.boolean)},!1),o!=null&&(z.isFunction(o)?n.paramsSerializer={serialize:o}:Tm.assertOptions(o,{encode:co.function,serialize:co.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&z.merge(i.common,i[n.method]);i&&z.forEach(["delete","get","head","post","put","patch","common"],m=>{delete i[m]}),n.headers=ji.concat(s,i);const a=[];let l=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(l=l&&w.synchronous,a.unshift(w.fulfilled,w.rejected))});const c=[];this.interceptors.response.forEach(function(w){c.push(w.fulfilled,w.rejected)});let u,d=0,h;if(!l){const m=[Jv.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,c),h=m.length,u=Promise.resolve(n);d<h;)u=u.then(m[d++],m[d++]);return u}h=a.length;let g=n;for(d=0;d<h;){const m=a[d++],w=a[d++];try{g=m(g)}catch(C){w.call(this,C);break}}try{u=Jv.call(this,g)}catch(m){return Promise.reject(m)}for(d=0,h=c.length;d<h;)u=u.then(c[d++],c[d++]);return u}getUri(e){e=kl(this.defaults,e);const n=Yb(e.baseURL,e.url);return Vb(n,e.params,e.paramsSerializer)}}z.forEach(["delete","get","head","options"],function(e){Ih.prototype[e]=function(n,r){return this.request(kl(r||{},{method:e,url:n,data:(r||{}).data}))}});z.forEach(["post","put","patch"],function(e){function n(r){return function(i,s,a){return this.request(kl(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}Ih.prototype[e]=n(),Ih.prototype[e+"Form"]=n(!0)});const ph=Ih;class Tw{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(a=>{r.subscribe(a),i=a}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},e(function(i,s,a){r.reason||(r.reason=new of(i,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Tw(function(o){e=o}),cancel:e}}}const LE=Tw;function DE(t){return function(n){return t.apply(null,n)}}function jE(t){return z.isObject(t)&&t.isAxiosError===!0}const Pm={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Pm).forEach(([t,e])=>{Pm[e]=t});const BE=Pm;function Xb(t){const e=new ph(t),n=kb(ph.prototype.request,e);return z.extend(n,ph.prototype,e,{allOwnKeys:!0}),z.extend(n,e,null,{allOwnKeys:!0}),n.create=function(o){return Xb(kl(t,o))},n}const kt=Xb($w);kt.Axios=ph;kt.CanceledError=of;kt.CancelToken=LE;kt.isCancel=Kb;kt.VERSION=Jb;kt.toFormData=Qp;kt.AxiosError=Ue;kt.Cancel=kt.CanceledError;kt.all=function(e){return Promise.all(e)};kt.spread=DE;kt.isAxiosError=jE;kt.mergeConfig=kl;kt.AxiosHeaders=ji;kt.formToJSON=t=>Gb(z.isHTMLForm(t)?new FormData(t):t);kt.getAdapter=Qb.getAdapter;kt.HttpStatusCode=BE;kt.default=kt;const Om=kt;window.axios=Om;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var e4={exports:{}},Yn={},t4={exports:{}},n4={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,Y){var Q=j.length;j.push(Y);e:for(;0<Q;){var re=Q-1>>>1,ge=j[re];if(0<o(ge,Y))j[re]=Y,j[Q]=ge,Q=re;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var Y=j[0],Q=j.pop();if(Q!==Y){j[0]=Q;e:for(var re=0,ge=j.length,Xe=ge>>>1;re<Xe;){var Ke=2*(re+1)-1,$e=j[Ke],Rt=Ke+1,Vt=j[Rt];if(0>o($e,Q))Rt<ge&&0>o(Vt,$e)?(j[re]=Vt,j[Rt]=Q,re=Rt):(j[re]=$e,j[Ke]=Q,re=Ke);else if(Rt<ge&&0>o(Vt,Q))j[re]=Vt,j[Rt]=Q,re=Rt;else break e}}return Y}function o(j,Y){var Q=j.sortIndex-Y.sortIndex;return Q!==0?Q:j.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,d=null,h=3,g=!1,m=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(j){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=j)r(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function E(j){if(w=!1,b(j),!m)if(n(l)!==null)m=!0,q(R);else{var Y=n(c);Y!==null&&fe(E,Y.startTime-j)}}function R(j,Y){m=!1,w&&(w=!1,y(N),N=-1),g=!0;var Q=h;try{for(b(Y),d=n(l);d!==null&&(!(d.expirationTime>Y)||j&&!H());){var re=d.callback;if(typeof re=="function"){d.callback=null,h=d.priorityLevel;var ge=re(d.expirationTime<=Y);Y=t.unstable_now(),typeof ge=="function"?d.callback=ge:d===n(l)&&r(l),b(Y)}else r(l);d=n(l)}if(d!==null)var Xe=!0;else{var Ke=n(c);Ke!==null&&fe(E,Ke.startTime-Y),Xe=!1}return Xe}finally{d=null,h=Q,g=!1}}var T=!1,k=null,N=-1,W=5,D=-1;function H(){return!(t.unstable_now()-D<W)}function he(){if(k!==null){var j=t.unstable_now();D=j;var Y=!0;try{Y=k(!0,j)}finally{Y?ye():(T=!1,k=null)}}else T=!1}var ye;if(typeof v=="function")ye=function(){v(he)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,K=ne.port2;ne.port1.onmessage=he,ye=function(){K.postMessage(null)}}else ye=function(){C(he,0)};function q(j){k=j,T||(T=!0,ye())}function fe(j,Y){N=C(function(){j(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){m||g||(m=!0,q(R))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(j){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var Q=h;h=Y;try{return j()}finally{h=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,Y){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var Q=h;h=j;try{return Y()}finally{h=Q}},t.unstable_scheduleCallback=function(j,Y,Q){var re=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?re+Q:re):Q=re,j){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=Q+ge,j={id:u++,callback:Y,priorityLevel:j,startTime:Q,expirationTime:ge,sortIndex:-1},Q>re?(j.sortIndex=Q,e(c,j),n(l)===null&&j===n(c)&&(w?(y(N),N=-1):w=!0,fe(E,Q-re))):(j.sortIndex=ge,e(l,j),m||g||(m=!0,q(R))),j},t.unstable_shouldYield=H,t.unstable_wrapCallback=function(j){var Y=h;return function(){var Q=h;h=Y;try{return j.apply(this,arguments)}finally{h=Q}}}})(n4);t4.exports=n4;var UE=t4.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r4=et,zn=UE;function G(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i4=new Set,Bu={};function $a(t,e){Nl(t,e),Nl(t+"Capture",e)}function Nl(t,e){for(Bu[t]=e,t=0;t<e.length;t++)i4.add(e[t])}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Im=Object.prototype.hasOwnProperty,FE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,t2={},n2={};function WE(t){return Im.call(n2,t)?!0:Im.call(t2,t)?!1:FE.test(t)?n2[t]=!0:(t2[t]=!0,!1)}function zE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function HE(t,e,n,r){if(e===null||typeof e>"u"||zE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xn(t,e,n,r,o,i,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=s}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new xn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new xn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new xn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new xn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new xn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new xn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new xn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new xn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new xn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pw=/[\-:]([a-z])/g;function Ow(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pw,Ow);Xt[e]=new xn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pw,Ow);Xt[e]=new xn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pw,Ow);Xt[e]=new xn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new xn(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new xn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Iw(t,e,n,r){var o=Xt.hasOwnProperty(e)?Xt[e]:null;(o!==null?o.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(HE(e,n,o,r)&&(n=null),r||o===null?WE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):o.mustUseProperty?t[o.propertyName]=n===null?o.type===3?!1:"":n:(e=o.attributeName,r=o.attributeNamespace,n===null?t.removeAttribute(e):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var to=r4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Nf=Symbol.for("react.element"),Ja=Symbol.for("react.portal"),Xa=Symbol.for("react.fragment"),kw=Symbol.for("react.strict_mode"),km=Symbol.for("react.profiler"),o4=Symbol.for("react.provider"),s4=Symbol.for("react.context"),Nw=Symbol.for("react.forward_ref"),Nm=Symbol.for("react.suspense"),Mm=Symbol.for("react.suspense_list"),Mw=Symbol.for("react.memo"),po=Symbol.for("react.lazy"),a4=Symbol.for("react.offscreen"),r2=Symbol.iterator;function qc(t){return t===null||typeof t!="object"?null:(t=r2&&t[r2]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Object.assign,m1;function du(t){if(m1===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);m1=e&&e[1]||""}return`
`+m1+t}var g1=!1;function w1(t,e){if(!t||g1)return"";g1=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{g1=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?du(t):""}function VE(t){switch(t.tag){case 5:return du(t.type);case 16:return du("Lazy");case 13:return du("Suspense");case 19:return du("SuspenseList");case 0:case 2:case 15:return t=w1(t.type,!1),t;case 11:return t=w1(t.type.render,!1),t;case 1:return t=w1(t.type,!0),t;default:return""}}function Lm(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xa:return"Fragment";case Ja:return"Portal";case km:return"Profiler";case kw:return"StrictMode";case Nm:return"Suspense";case Mm:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case s4:return(t.displayName||"Context")+".Consumer";case o4:return(t._context.displayName||"Context")+".Provider";case Nw:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mw:return e=t.displayName||null,e!==null?e:Lm(t.type)||"Memo";case po:e=t._payload,t=t._init;try{return Lm(t(e))}catch{}}return null}function ZE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lm(e);case 8:return e===kw?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qo(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function l4(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qE(t){var e=l4(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Mf(t){t._valueTracker||(t._valueTracker=qE(t))}function c4(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=l4(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function kh(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dm(t,e){var n=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function i2(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=qo(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function u4(t,e){e=e.checked,e!=null&&Iw(t,"checked",e,!1)}function jm(t,e){u4(t,e);var n=qo(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bm(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bm(t,e.type,qo(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function o2(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bm(t,e,n){(e!=="number"||kh(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var fu=Array.isArray;function dl(t,e,n,r){if(t=t.options,e){e={};for(var o=0;o<n.length;o++)e["$"+n[o]]=!0;for(n=0;n<t.length;n++)o=e.hasOwnProperty("$"+t[n].value),t[n].selected!==o&&(t[n].selected=o),o&&r&&(t[n].defaultSelected=!0)}else{for(n=""+qo(n),e=null,o=0;o<t.length;o++){if(t[o].value===n){t[o].selected=!0,r&&(t[o].defaultSelected=!0);return}e!==null||t[o].disabled||(e=t[o])}e!==null&&(e.selected=!0)}}function Um(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(G(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function s2(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(G(92));if(fu(n)){if(1<n.length)throw Error(G(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qo(n)}}function d4(t,e){var n=qo(e.value),r=qo(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function a2(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function f4(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?f4(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Lf,h4=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,o){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,o)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Lf=Lf||document.createElement("div"),Lf.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Lf.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Uu(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var gu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},GE=["Webkit","ms","Moz","O"];Object.keys(gu).forEach(function(t){GE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),gu[e]=gu[t]})});function p4(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||gu.hasOwnProperty(t)&&gu[t]?(""+e).trim():e+"px"}function m4(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=p4(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,o):t[n]=o}}var KE=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wm(t,e){if(e){if(KE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(G(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(G(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(G(61))}if(e.style!=null&&typeof e.style!="object")throw Error(G(62))}}function zm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hm=null;function Lw(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vm=null,fl=null,hl=null;function l2(t){if(t=lf(t)){if(typeof Vm!="function")throw Error(G(280));var e=t.stateNode;e&&(e=r0(e),Vm(t.stateNode,t.type,e))}}function g4(t){fl?hl?hl.push(t):hl=[t]:fl=t}function w4(){if(fl){var t=fl,e=hl;if(hl=fl=null,l2(t),e)for(t=0;t<e.length;t++)l2(e[t])}}function y4(t,e){return t(e)}function v4(){}var y1=!1;function b4(t,e,n){if(y1)return t(e,n);y1=!0;try{return y4(t,e,n)}finally{y1=!1,(fl!==null||hl!==null)&&(v4(),w4())}}function Fu(t,e){var n=t.stateNode;if(n===null)return null;var r=r0(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(G(231,e,typeof n));return n}var Zm=!1;if(Wi)try{var Gc={};Object.defineProperty(Gc,"passive",{get:function(){Zm=!0}}),window.addEventListener("test",Gc,Gc),window.removeEventListener("test",Gc,Gc)}catch{Zm=!1}function YE(t,e,n,r,o,i,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var wu=!1,Nh=null,Mh=!1,qm=null,QE={onError:function(t){wu=!0,Nh=t}};function JE(t,e,n,r,o,i,s,a,l){wu=!1,Nh=null,YE.apply(QE,arguments)}function XE(t,e,n,r,o,i,s,a,l){if(JE.apply(this,arguments),wu){if(wu){var c=Nh;wu=!1,Nh=null}else throw Error(G(198));Mh||(Mh=!0,qm=c)}}function Ra(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function x4(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function c2(t){if(Ra(t)!==t)throw Error(G(188))}function e_(t){var e=t.alternate;if(!e){if(e=Ra(t),e===null)throw Error(G(188));return e!==t?null:t}for(var n=t,r=e;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return c2(o),t;if(i===r)return c2(o),e;i=i.sibling}throw Error(G(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(G(189))}}if(n.alternate!==r)throw Error(G(190))}if(n.tag!==3)throw Error(G(188));return n.stateNode.current===n?t:e}function C4(t){return t=e_(t),t!==null?E4(t):null}function E4(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=E4(t);if(e!==null)return e;t=t.sibling}return null}var _4=zn.unstable_scheduleCallback,u2=zn.unstable_cancelCallback,t_=zn.unstable_shouldYield,n_=zn.unstable_requestPaint,St=zn.unstable_now,r_=zn.unstable_getCurrentPriorityLevel,Dw=zn.unstable_ImmediatePriority,S4=zn.unstable_UserBlockingPriority,Lh=zn.unstable_NormalPriority,i_=zn.unstable_LowPriority,A4=zn.unstable_IdlePriority,Xp=null,ai=null;function o_(t){if(ai&&typeof ai.onCommitFiberRoot=="function")try{ai.onCommitFiberRoot(Xp,t,void 0,(t.current.flags&128)===128)}catch{}}var Or=Math.clz32?Math.clz32:l_,s_=Math.log,a_=Math.LN2;function l_(t){return t>>>=0,t===0?32:31-(s_(t)/a_|0)|0}var Df=64,jf=4194304;function hu(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Dh(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,o=t.suspendedLanes,i=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=hu(a):(i&=s,i!==0&&(r=hu(i)))}else s=n&~o,s!==0?r=hu(s):i!==0&&(r=hu(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&o)&&(o=r&-r,i=e&-e,o>=i||o===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Or(e),o=1<<n,r|=t[n],e&=~o;return r}function c_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function u_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,o=t.expirationTimes,i=t.pendingLanes;0<i;){var s=31-Or(i),a=1<<s,l=o[s];l===-1?(!(a&n)||a&r)&&(o[s]=c_(a,e)):l<=e&&(t.expiredLanes|=a),i&=~a}}function Gm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $4(){var t=Df;return Df<<=1,!(Df&4194240)&&(Df=64),t}function v1(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function sf(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Or(e),t[e]=n}function d_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var o=31-Or(n),i=1<<o;e[o]=0,r[o]=-1,t[o]=-1,n&=~i}}function jw(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Or(n),o=1<<r;o&e|t[r]&e&&(t[r]|=e),n&=~o}}var Qe=0;function R4(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var T4,Bw,P4,O4,I4,Km=!1,Bf=[],ko=null,No=null,Mo=null,Wu=new Map,zu=new Map,yo=[],f_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function d2(t,e){switch(t){case"focusin":case"focusout":ko=null;break;case"dragenter":case"dragleave":No=null;break;case"mouseover":case"mouseout":Mo=null;break;case"pointerover":case"pointerout":Wu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":zu.delete(e.pointerId)}}function Kc(t,e,n,r,o,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},e!==null&&(e=lf(e),e!==null&&Bw(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),t)}function h_(t,e,n,r,o){switch(e){case"focusin":return ko=Kc(ko,t,e,n,r,o),!0;case"dragenter":return No=Kc(No,t,e,n,r,o),!0;case"mouseover":return Mo=Kc(Mo,t,e,n,r,o),!0;case"pointerover":var i=o.pointerId;return Wu.set(i,Kc(Wu.get(i)||null,t,e,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,zu.set(i,Kc(zu.get(i)||null,t,e,n,r,o)),!0}return!1}function k4(t){var e=ks(t.target);if(e!==null){var n=Ra(e);if(n!==null){if(e=n.tag,e===13){if(e=x4(n),e!==null){t.blockedOn=e,I4(t.priority,function(){P4(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mh(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ym(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Hm=r,n.target.dispatchEvent(r),Hm=null}else return e=lf(n),e!==null&&Bw(e),t.blockedOn=n,!1;e.shift()}return!0}function f2(t,e,n){mh(t)&&n.delete(e)}function p_(){Km=!1,ko!==null&&mh(ko)&&(ko=null),No!==null&&mh(No)&&(No=null),Mo!==null&&mh(Mo)&&(Mo=null),Wu.forEach(f2),zu.forEach(f2)}function Yc(t,e){t.blockedOn===e&&(t.blockedOn=null,Km||(Km=!0,zn.unstable_scheduleCallback(zn.unstable_NormalPriority,p_)))}function Hu(t){function e(o){return Yc(o,t)}if(0<Bf.length){Yc(Bf[0],t);for(var n=1;n<Bf.length;n++){var r=Bf[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ko!==null&&Yc(ko,t),No!==null&&Yc(No,t),Mo!==null&&Yc(Mo,t),Wu.forEach(e),zu.forEach(e),n=0;n<yo.length;n++)r=yo[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<yo.length&&(n=yo[0],n.blockedOn===null);)k4(n),n.blockedOn===null&&yo.shift()}var pl=to.ReactCurrentBatchConfig,jh=!0;function m_(t,e,n,r){var o=Qe,i=pl.transition;pl.transition=null;try{Qe=1,Uw(t,e,n,r)}finally{Qe=o,pl.transition=i}}function g_(t,e,n,r){var o=Qe,i=pl.transition;pl.transition=null;try{Qe=4,Uw(t,e,n,r)}finally{Qe=o,pl.transition=i}}function Uw(t,e,n,r){if(jh){var o=Ym(t,e,n,r);if(o===null)T1(t,e,r,Bh,n),d2(t,r);else if(h_(o,t,e,n,r))r.stopPropagation();else if(d2(t,r),e&4&&-1<f_.indexOf(t)){for(;o!==null;){var i=lf(o);if(i!==null&&T4(i),i=Ym(t,e,n,r),i===null&&T1(t,e,r,Bh,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else T1(t,e,r,null,n)}}var Bh=null;function Ym(t,e,n,r){if(Bh=null,t=Lw(r),t=ks(t),t!==null)if(e=Ra(t),e===null)t=null;else if(n=e.tag,n===13){if(t=x4(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Bh=t,null}function N4(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(r_()){case Dw:return 1;case S4:return 4;case Lh:case i_:return 16;case A4:return 536870912;default:return 16}default:return 16}}var Ro=null,Fw=null,gh=null;function M4(){if(gh)return gh;var t,e=Fw,n=e.length,r,o="value"in Ro?Ro.value:Ro.textContent,i=o.length;for(t=0;t<n&&e[t]===o[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===o[i-r];r++);return gh=o.slice(t,1<r?1-r:void 0)}function wh(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Uf(){return!0}function h2(){return!1}function Qn(t){function e(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Uf:h2,this.isPropagationStopped=h2,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Uf)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Uf)},persist:function(){},isPersistent:Uf}),e}var Ec={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ww=Qn(Ec),af=yt({},Ec,{view:0,detail:0}),w_=Qn(af),b1,x1,Qc,e0=yt({},af,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zw,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qc&&(Qc&&t.type==="mousemove"?(b1=t.screenX-Qc.screenX,x1=t.screenY-Qc.screenY):x1=b1=0,Qc=t),b1)},movementY:function(t){return"movementY"in t?t.movementY:x1}}),p2=Qn(e0),y_=yt({},e0,{dataTransfer:0}),v_=Qn(y_),b_=yt({},af,{relatedTarget:0}),C1=Qn(b_),x_=yt({},Ec,{animationName:0,elapsedTime:0,pseudoElement:0}),C_=Qn(x_),E_=yt({},Ec,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),__=Qn(E_),S_=yt({},Ec,{data:0}),m2=Qn(S_),A_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=R_[t])?!!e[t]:!1}function zw(){return T_}var P_=yt({},af,{key:function(t){if(t.key){var e=A_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wh(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zw,charCode:function(t){return t.type==="keypress"?wh(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wh(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),O_=Qn(P_),I_=yt({},e0,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),g2=Qn(I_),k_=yt({},af,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zw}),N_=Qn(k_),M_=yt({},Ec,{propertyName:0,elapsedTime:0,pseudoElement:0}),L_=Qn(M_),D_=yt({},e0,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),j_=Qn(D_),B_=[9,13,27,32],Hw=Wi&&"CompositionEvent"in window,yu=null;Wi&&"documentMode"in document&&(yu=document.documentMode);var U_=Wi&&"TextEvent"in window&&!yu,L4=Wi&&(!Hw||yu&&8<yu&&11>=yu),w2=" ",y2=!1;function D4(t,e){switch(t){case"keyup":return B_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function j4(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var el=!1;function F_(t,e){switch(t){case"compositionend":return j4(e);case"keypress":return e.which!==32?null:(y2=!0,w2);case"textInput":return t=e.data,t===w2&&y2?null:t;default:return null}}function W_(t,e){if(el)return t==="compositionend"||!Hw&&D4(t,e)?(t=M4(),gh=Fw=Ro=null,el=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return L4&&e.locale!=="ko"?null:e.data;default:return null}}var z_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function v2(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!z_[t.type]:e==="textarea"}function B4(t,e,n,r){g4(r),e=Uh(e,"onChange"),0<e.length&&(n=new Ww("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var vu=null,Vu=null;function H_(t){Y4(t,0)}function t0(t){var e=rl(t);if(c4(e))return t}function V_(t,e){if(t==="change")return e}var U4=!1;if(Wi){var E1;if(Wi){var _1="oninput"in document;if(!_1){var b2=document.createElement("div");b2.setAttribute("oninput","return;"),_1=typeof b2.oninput=="function"}E1=_1}else E1=!1;U4=E1&&(!document.documentMode||9<document.documentMode)}function x2(){vu&&(vu.detachEvent("onpropertychange",F4),Vu=vu=null)}function F4(t){if(t.propertyName==="value"&&t0(Vu)){var e=[];B4(e,Vu,t,Lw(t)),b4(H_,e)}}function Z_(t,e,n){t==="focusin"?(x2(),vu=e,Vu=n,vu.attachEvent("onpropertychange",F4)):t==="focusout"&&x2()}function q_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return t0(Vu)}function G_(t,e){if(t==="click")return t0(e)}function K_(t,e){if(t==="input"||t==="change")return t0(e)}function Y_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Mr=typeof Object.is=="function"?Object.is:Y_;function Zu(t,e){if(Mr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Im.call(e,o)||!Mr(t[o],e[o]))return!1}return!0}function C2(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function E2(t,e){var n=C2(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=C2(n)}}function W4(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?W4(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function z4(){for(var t=window,e=kh();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=kh(t.document)}return e}function Vw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Q_(t){var e=z4(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&W4(n.ownerDocument.documentElement,n)){if(r!==null&&Vw(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!t.extend&&i>r&&(o=r,r=i,i=o),o=E2(n,i);var s=E2(n,r);o&&s&&(t.rangeCount!==1||t.anchorNode!==o.node||t.anchorOffset!==o.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(o.node,o.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var J_=Wi&&"documentMode"in document&&11>=document.documentMode,tl=null,Qm=null,bu=null,Jm=!1;function _2(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jm||tl==null||tl!==kh(r)||(r=tl,"selectionStart"in r&&Vw(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bu&&Zu(bu,r)||(bu=r,r=Uh(Qm,"onSelect"),0<r.length&&(e=new Ww("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=tl)))}function Ff(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var nl={animationend:Ff("Animation","AnimationEnd"),animationiteration:Ff("Animation","AnimationIteration"),animationstart:Ff("Animation","AnimationStart"),transitionend:Ff("Transition","TransitionEnd")},S1={},H4={};Wi&&(H4=document.createElement("div").style,"AnimationEvent"in window||(delete nl.animationend.animation,delete nl.animationiteration.animation,delete nl.animationstart.animation),"TransitionEvent"in window||delete nl.transitionend.transition);function n0(t){if(S1[t])return S1[t];if(!nl[t])return t;var e=nl[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in H4)return S1[t]=e[n];return t}var V4=n0("animationend"),Z4=n0("animationiteration"),q4=n0("animationstart"),G4=n0("transitionend"),K4=new Map,S2="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ss(t,e){K4.set(t,e),$a(e,[t])}for(var A1=0;A1<S2.length;A1++){var $1=S2[A1],X_=$1.toLowerCase(),eS=$1[0].toUpperCase()+$1.slice(1);ss(X_,"on"+eS)}ss(V4,"onAnimationEnd");ss(Z4,"onAnimationIteration");ss(q4,"onAnimationStart");ss("dblclick","onDoubleClick");ss("focusin","onFocus");ss("focusout","onBlur");ss(G4,"onTransitionEnd");Nl("onMouseEnter",["mouseout","mouseover"]);Nl("onMouseLeave",["mouseout","mouseover"]);Nl("onPointerEnter",["pointerout","pointerover"]);Nl("onPointerLeave",["pointerout","pointerover"]);$a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$a("onBeforeInput",["compositionend","keypress","textInput","paste"]);$a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tS=new Set("cancel close invalid load scroll toggle".split(" ").concat(pu));function A2(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,XE(r,e,void 0,t),t.currentTarget=null}function Y4(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],o=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;A2(o,a,c),i=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;A2(o,a,c),i=l}}}if(Mh)throw t=qm,Mh=!1,qm=null,t}function ct(t,e){var n=e[rg];n===void 0&&(n=e[rg]=new Set);var r=t+"__bubble";n.has(r)||(Q4(e,t,2,!1),n.add(r))}function R1(t,e,n){var r=0;e&&(r|=4),Q4(n,t,r,e)}var Wf="_reactListening"+Math.random().toString(36).slice(2);function qu(t){if(!t[Wf]){t[Wf]=!0,i4.forEach(function(n){n!=="selectionchange"&&(tS.has(n)||R1(n,!1,t),R1(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Wf]||(e[Wf]=!0,R1("selectionchange",!1,e))}}function Q4(t,e,n,r){switch(N4(e)){case 1:var o=m_;break;case 4:o=g_;break;default:o=Uw}n=o.bind(null,e,n,t),o=void 0,!Zm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),r?o!==void 0?t.addEventListener(e,n,{capture:!0,passive:o}):t.addEventListener(e,n,!0):o!==void 0?t.addEventListener(e,n,{passive:o}):t.addEventListener(e,n,!1)}function T1(t,e,n,r,o){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=ks(a),s===null)return;if(l=s.tag,l===5||l===6){r=i=s;continue e}a=a.parentNode}}r=r.return}b4(function(){var c=i,u=Lw(n),d=[];e:{var h=K4.get(t);if(h!==void 0){var g=Ww,m=t;switch(t){case"keypress":if(wh(n)===0)break e;case"keydown":case"keyup":g=O_;break;case"focusin":m="focus",g=C1;break;case"focusout":m="blur",g=C1;break;case"beforeblur":case"afterblur":g=C1;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=p2;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=v_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=N_;break;case V4:case Z4:case q4:g=C_;break;case G4:g=L_;break;case"scroll":g=w_;break;case"wheel":g=j_;break;case"copy":case"cut":case"paste":g=__;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=g2}var w=(e&4)!==0,C=!w&&t==="scroll",y=w?h!==null?h+"Capture":null:h;w=[];for(var v=c,b;v!==null;){b=v;var E=b.stateNode;if(b.tag===5&&E!==null&&(b=E,y!==null&&(E=Fu(v,y),E!=null&&w.push(Gu(v,E,b)))),C)break;v=v.return}0<w.length&&(h=new g(h,m,null,n,u),d.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Hm&&(m=n.relatedTarget||n.fromElement)&&(ks(m)||m[zi]))break e;if((g||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,g?(m=n.relatedTarget||n.toElement,g=c,m=m?ks(m):null,m!==null&&(C=Ra(m),m!==C||m.tag!==5&&m.tag!==6)&&(m=null)):(g=null,m=c),g!==m)){if(w=p2,E="onMouseLeave",y="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(w=g2,E="onPointerLeave",y="onPointerEnter",v="pointer"),C=g==null?h:rl(g),b=m==null?h:rl(m),h=new w(E,v+"leave",g,n,u),h.target=C,h.relatedTarget=b,E=null,ks(u)===c&&(w=new w(y,v+"enter",m,n,u),w.target=b,w.relatedTarget=C,E=w),C=E,g&&m)t:{for(w=g,y=m,v=0,b=w;b;b=Ua(b))v++;for(b=0,E=y;E;E=Ua(E))b++;for(;0<v-b;)w=Ua(w),v--;for(;0<b-v;)y=Ua(y),b--;for(;v--;){if(w===y||y!==null&&w===y.alternate)break t;w=Ua(w),y=Ua(y)}w=null}else w=null;g!==null&&$2(d,h,g,w,!1),m!==null&&C!==null&&$2(d,C,m,w,!0)}}e:{if(h=c?rl(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var R=V_;else if(v2(h))if(U4)R=K_;else{R=q_;var T=Z_}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=G_);if(R&&(R=R(t,c))){B4(d,R,n,u);break e}T&&T(t,h,c),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Bm(h,"number",h.value)}switch(T=c?rl(c):window,t){case"focusin":(v2(T)||T.contentEditable==="true")&&(tl=T,Qm=c,bu=null);break;case"focusout":bu=Qm=tl=null;break;case"mousedown":Jm=!0;break;case"contextmenu":case"mouseup":case"dragend":Jm=!1,_2(d,n,u);break;case"selectionchange":if(J_)break;case"keydown":case"keyup":_2(d,n,u)}var k;if(Hw)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else el?D4(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(L4&&n.locale!=="ko"&&(el||N!=="onCompositionStart"?N==="onCompositionEnd"&&el&&(k=M4()):(Ro=u,Fw="value"in Ro?Ro.value:Ro.textContent,el=!0)),T=Uh(c,N),0<T.length&&(N=new m2(N,t,null,n,u),d.push({event:N,listeners:T}),k?N.data=k:(k=j4(n),k!==null&&(N.data=k)))),(k=U_?F_(t,n):W_(t,n))&&(c=Uh(c,"onBeforeInput"),0<c.length&&(u=new m2("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=k))}Y4(d,e)})}function Gu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Uh(t,e){for(var n=e+"Capture",r=[];t!==null;){var o=t,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Fu(t,n),i!=null&&r.unshift(Gu(t,i,o)),i=Fu(t,e),i!=null&&r.push(Gu(t,i,o))),t=t.return}return r}function Ua(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $2(t,e,n,r,o){for(var i=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,o?(l=Fu(n,i),l!=null&&s.unshift(Gu(n,l,a))):o||(l=Fu(n,i),l!=null&&s.push(Gu(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var nS=/\r\n?/g,rS=/\u0000|\uFFFD/g;function R2(t){return(typeof t=="string"?t:""+t).replace(nS,`
`).replace(rS,"")}function zf(t,e,n){if(e=R2(e),R2(t)!==e&&n)throw Error(G(425))}function Fh(){}var Xm=null,eg=null;function tg(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ng=typeof setTimeout=="function"?setTimeout:void 0,iS=typeof clearTimeout=="function"?clearTimeout:void 0,T2=typeof Promise=="function"?Promise:void 0,oS=typeof queueMicrotask=="function"?queueMicrotask:typeof T2<"u"?function(t){return T2.resolve(null).then(t).catch(sS)}:ng;function sS(t){setTimeout(function(){throw t})}function P1(t,e){var n=e,r=0;do{var o=n.nextSibling;if(t.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){t.removeChild(o),Hu(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Hu(e)}function Lo(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function P2(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _c=Math.random().toString(36).slice(2),ri="__reactFiber$"+_c,Ku="__reactProps$"+_c,zi="__reactContainer$"+_c,rg="__reactEvents$"+_c,aS="__reactListeners$"+_c,lS="__reactHandles$"+_c;function ks(t){var e=t[ri];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zi]||n[ri]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=P2(t);t!==null;){if(n=t[ri])return n;t=P2(t)}return e}t=n,n=t.parentNode}return null}function lf(t){return t=t[ri]||t[zi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rl(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(G(33))}function r0(t){return t[Ku]||null}var ig=[],il=-1;function as(t){return{current:t}}function ut(t){0>il||(t.current=ig[il],ig[il]=null,il--)}function st(t,e){il++,ig[il]=t.current,t.current=e}var Go={},an=as(Go),Tn=as(!1),Ys=Go;function Ml(t,e){var n=t.type.contextTypes;if(!n)return Go;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=o),o}function Pn(t){return t=t.childContextTypes,t!=null}function Wh(){ut(Tn),ut(an)}function O2(t,e,n){if(an.current!==Go)throw Error(G(168));st(an,e),st(Tn,n)}function J4(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in e))throw Error(G(108,ZE(t)||"Unknown",o));return yt({},n,r)}function zh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Go,Ys=an.current,st(an,t),st(Tn,Tn.current),!0}function I2(t,e,n){var r=t.stateNode;if(!r)throw Error(G(169));n?(t=J4(t,e,Ys),r.__reactInternalMemoizedMergedChildContext=t,ut(Tn),ut(an),st(an,t)):ut(Tn),st(Tn,n)}var ki=null,i0=!1,O1=!1;function X4(t){ki===null?ki=[t]:ki.push(t)}function cS(t){i0=!0,X4(t)}function ls(){if(!O1&&ki!==null){O1=!0;var t=0,e=Qe;try{var n=ki;for(Qe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ki=null,i0=!1}catch(o){throw ki!==null&&(ki=ki.slice(t+1)),_4(Dw,ls),o}finally{Qe=e,O1=!1}}return null}var ol=[],sl=0,Hh=null,Vh=0,lr=[],cr=0,Qs=null,Li=1,Di="";function $s(t,e){ol[sl++]=Vh,ol[sl++]=Hh,Hh=t,Vh=e}function e6(t,e,n){lr[cr++]=Li,lr[cr++]=Di,lr[cr++]=Qs,Qs=t;var r=Li;t=Di;var o=32-Or(r)-1;r&=~(1<<o),n+=1;var i=32-Or(e)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Li=1<<32-Or(e)+o|n<<o|r,Di=i+t}else Li=1<<i|n<<o|r,Di=t}function Zw(t){t.return!==null&&($s(t,1),e6(t,1,0))}function qw(t){for(;t===Hh;)Hh=ol[--sl],ol[sl]=null,Vh=ol[--sl],ol[sl]=null;for(;t===Qs;)Qs=lr[--cr],lr[cr]=null,Di=lr[--cr],lr[cr]=null,Li=lr[--cr],lr[cr]=null}var Wn=null,Un=null,ft=!1,$r=null;function t6(t,e){var n=ur(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function k2(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wn=t,Un=Lo(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wn=t,Un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qs!==null?{id:Li,overflow:Di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ur(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wn=t,Un=null,!0):!1;default:return!1}}function og(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sg(t){if(ft){var e=Un;if(e){var n=e;if(!k2(t,e)){if(og(t))throw Error(G(418));e=Lo(n.nextSibling);var r=Wn;e&&k2(t,e)?t6(r,n):(t.flags=t.flags&-4097|2,ft=!1,Wn=t)}}else{if(og(t))throw Error(G(418));t.flags=t.flags&-4097|2,ft=!1,Wn=t}}}function N2(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wn=t}function Hf(t){if(t!==Wn)return!1;if(!ft)return N2(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!tg(t.type,t.memoizedProps)),e&&(e=Un)){if(og(t))throw n6(),Error(G(418));for(;e;)t6(t,e),e=Lo(e.nextSibling)}if(N2(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(G(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Un=Lo(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Un=null}}else Un=Wn?Lo(t.stateNode.nextSibling):null;return!0}function n6(){for(var t=Un;t;)t=Lo(t.nextSibling)}function Ll(){Un=Wn=null,ft=!1}function Gw(t){$r===null?$r=[t]:$r.push(t)}var uS=to.ReactCurrentBatchConfig;function Er(t,e){if(t&&t.defaultProps){e=yt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Zh=as(null),qh=null,al=null,Kw=null;function Yw(){Kw=al=qh=null}function Qw(t){var e=Zh.current;ut(Zh),t._currentValue=e}function ag(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ml(t,e){qh=t,Kw=al=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Rn=!0),t.firstContext=null)}function pr(t){var e=t._currentValue;if(Kw!==t)if(t={context:t,memoizedValue:e,next:null},al===null){if(qh===null)throw Error(G(308));al=t,qh.dependencies={lanes:0,firstContext:t}}else al=al.next=t;return e}var Ns=null;function Jw(t){Ns===null?Ns=[t]:Ns.push(t)}function r6(t,e,n,r){var o=e.interleaved;return o===null?(n.next=n,Jw(e)):(n.next=o.next,o.next=n),e.interleaved=n,Hi(t,r)}function Hi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var mo=!1;function Xw(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i6(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Do(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,He&2){var o=r.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),r.pending=e,Hi(t,n)}return o=r.interleaved,o===null?(e.next=e,Jw(r)):(e.next=o.next,o.next=e),r.interleaved=e,Hi(t,n)}function yh(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jw(t,n)}}function M2(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=e:i=i.next=e}else o=i=e;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Gh(t,e,n,r){var o=t.updateQueue;mo=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?i=c:s.next=c,s=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(i!==null){var d=o.baseState;s=0,u=c=l=null,a=i;do{var h=a.lane,g=a.eventTime;if((r&h)===h){u!==null&&(u=u.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,w=a;switch(h=e,g=n,w.tag){case 1:if(m=w.payload,typeof m=="function"){d=m.call(g,d,h);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=w.payload,h=typeof m=="function"?m.call(g,d,h):m,h==null)break e;d=yt({},d,h);break e;case 2:mo=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=g,l=d):u=u.next=g,s|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(u===null&&(l=d),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=u,e=o.shared.interleaved,e!==null){o=e;do s|=o.lane,o=o.next;while(o!==e)}else i===null&&(o.shared.lanes=0);Xs|=s,t.lanes=s,t.memoizedState=d}}function L2(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(G(191,o));o.call(r)}}}var o6=new r4.Component().refs;function lg(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var o0={isMounted:function(t){return(t=t._reactInternals)?Ra(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=wn(),o=Bo(t),i=Bi(r,o);i.payload=e,n!=null&&(i.callback=n),e=Do(t,i,o),e!==null&&(Ir(e,t,o,r),yh(e,t,o))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=wn(),o=Bo(t),i=Bi(r,o);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Do(t,i,o),e!==null&&(Ir(e,t,o,r),yh(e,t,o))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wn(),r=Bo(t),o=Bi(n,r);o.tag=2,e!=null&&(o.callback=e),e=Do(t,o,r),e!==null&&(Ir(e,t,r,n),yh(e,t,r))}};function D2(t,e,n,r,o,i,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,s):e.prototype&&e.prototype.isPureReactComponent?!Zu(n,r)||!Zu(o,i):!0}function s6(t,e,n){var r=!1,o=Go,i=e.contextType;return typeof i=="object"&&i!==null?i=pr(i):(o=Pn(e)?Ys:an.current,r=e.contextTypes,i=(r=r!=null)?Ml(t,o):Go),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=o0,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=o,t.__reactInternalMemoizedMaskedChildContext=i),e}function j2(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&o0.enqueueReplaceState(e,e.state,null)}function cg(t,e,n,r){var o=t.stateNode;o.props=n,o.state=t.memoizedState,o.refs=o6,Xw(t);var i=e.contextType;typeof i=="object"&&i!==null?o.context=pr(i):(i=Pn(e)?Ys:an.current,o.context=Ml(t,i)),o.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(lg(t,e,i,n),o.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(e=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),e!==o.state&&o0.enqueueReplaceState(o,o.state,null),Gh(t,n,o,r),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308)}function Jc(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(G(309));var r=n.stateNode}if(!r)throw Error(G(147,t));var o=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var a=o.refs;a===o6&&(a=o.refs={}),s===null?delete a[i]:a[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(G(284));if(!n._owner)throw Error(G(290,t))}return t}function Vf(t,e){throw t=Object.prototype.toString.call(e),Error(G(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function B2(t){var e=t._init;return e(t._payload)}function a6(t){function e(y,v){if(t){var b=y.deletions;b===null?(y.deletions=[v],y.flags|=16):b.push(v)}}function n(y,v){if(!t)return null;for(;v!==null;)e(y,v),v=v.sibling;return null}function r(y,v){for(y=new Map;v!==null;)v.key!==null?y.set(v.key,v):y.set(v.index,v),v=v.sibling;return y}function o(y,v){return y=Uo(y,v),y.index=0,y.sibling=null,y}function i(y,v,b){return y.index=b,t?(b=y.alternate,b!==null?(b=b.index,b<v?(y.flags|=2,v):b):(y.flags|=2,v)):(y.flags|=1048576,v)}function s(y){return t&&y.alternate===null&&(y.flags|=2),y}function a(y,v,b,E){return v===null||v.tag!==6?(v=j1(b,y.mode,E),v.return=y,v):(v=o(v,b),v.return=y,v)}function l(y,v,b,E){var R=b.type;return R===Xa?u(y,v,b.props.children,E,b.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===po&&B2(R)===v.type)?(E=o(v,b.props),E.ref=Jc(y,v,b),E.return=y,E):(E=_h(b.type,b.key,b.props,null,y.mode,E),E.ref=Jc(y,v,b),E.return=y,E)}function c(y,v,b,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==b.containerInfo||v.stateNode.implementation!==b.implementation?(v=B1(b,y.mode,E),v.return=y,v):(v=o(v,b.children||[]),v.return=y,v)}function u(y,v,b,E,R){return v===null||v.tag!==7?(v=zs(b,y.mode,E,R),v.return=y,v):(v=o(v,b),v.return=y,v)}function d(y,v,b){if(typeof v=="string"&&v!==""||typeof v=="number")return v=j1(""+v,y.mode,b),v.return=y,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Nf:return b=_h(v.type,v.key,v.props,null,y.mode,b),b.ref=Jc(y,null,v),b.return=y,b;case Ja:return v=B1(v,y.mode,b),v.return=y,v;case po:var E=v._init;return d(y,E(v._payload),b)}if(fu(v)||qc(v))return v=zs(v,y.mode,b,null),v.return=y,v;Vf(y,v)}return null}function h(y,v,b,E){var R=v!==null?v.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return R!==null?null:a(y,v,""+b,E);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Nf:return b.key===R?l(y,v,b,E):null;case Ja:return b.key===R?c(y,v,b,E):null;case po:return R=b._init,h(y,v,R(b._payload),E)}if(fu(b)||qc(b))return R!==null?null:u(y,v,b,E,null);Vf(y,b)}return null}function g(y,v,b,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return y=y.get(b)||null,a(v,y,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Nf:return y=y.get(E.key===null?b:E.key)||null,l(v,y,E,R);case Ja:return y=y.get(E.key===null?b:E.key)||null,c(v,y,E,R);case po:var T=E._init;return g(y,v,b,T(E._payload),R)}if(fu(E)||qc(E))return y=y.get(b)||null,u(v,y,E,R,null);Vf(v,E)}return null}function m(y,v,b,E){for(var R=null,T=null,k=v,N=v=0,W=null;k!==null&&N<b.length;N++){k.index>N?(W=k,k=null):W=k.sibling;var D=h(y,k,b[N],E);if(D===null){k===null&&(k=W);break}t&&k&&D.alternate===null&&e(y,k),v=i(D,v,N),T===null?R=D:T.sibling=D,T=D,k=W}if(N===b.length)return n(y,k),ft&&$s(y,N),R;if(k===null){for(;N<b.length;N++)k=d(y,b[N],E),k!==null&&(v=i(k,v,N),T===null?R=k:T.sibling=k,T=k);return ft&&$s(y,N),R}for(k=r(y,k);N<b.length;N++)W=g(k,y,N,b[N],E),W!==null&&(t&&W.alternate!==null&&k.delete(W.key===null?N:W.key),v=i(W,v,N),T===null?R=W:T.sibling=W,T=W);return t&&k.forEach(function(H){return e(y,H)}),ft&&$s(y,N),R}function w(y,v,b,E){var R=qc(b);if(typeof R!="function")throw Error(G(150));if(b=R.call(b),b==null)throw Error(G(151));for(var T=R=null,k=v,N=v=0,W=null,D=b.next();k!==null&&!D.done;N++,D=b.next()){k.index>N?(W=k,k=null):W=k.sibling;var H=h(y,k,D.value,E);if(H===null){k===null&&(k=W);break}t&&k&&H.alternate===null&&e(y,k),v=i(H,v,N),T===null?R=H:T.sibling=H,T=H,k=W}if(D.done)return n(y,k),ft&&$s(y,N),R;if(k===null){for(;!D.done;N++,D=b.next())D=d(y,D.value,E),D!==null&&(v=i(D,v,N),T===null?R=D:T.sibling=D,T=D);return ft&&$s(y,N),R}for(k=r(y,k);!D.done;N++,D=b.next())D=g(k,y,N,D.value,E),D!==null&&(t&&D.alternate!==null&&k.delete(D.key===null?N:D.key),v=i(D,v,N),T===null?R=D:T.sibling=D,T=D);return t&&k.forEach(function(he){return e(y,he)}),ft&&$s(y,N),R}function C(y,v,b,E){if(typeof b=="object"&&b!==null&&b.type===Xa&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Nf:e:{for(var R=b.key,T=v;T!==null;){if(T.key===R){if(R=b.type,R===Xa){if(T.tag===7){n(y,T.sibling),v=o(T,b.props.children),v.return=y,y=v;break e}}else if(T.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===po&&B2(R)===T.type){n(y,T.sibling),v=o(T,b.props),v.ref=Jc(y,T,b),v.return=y,y=v;break e}n(y,T);break}else e(y,T);T=T.sibling}b.type===Xa?(v=zs(b.props.children,y.mode,E,b.key),v.return=y,y=v):(E=_h(b.type,b.key,b.props,null,y.mode,E),E.ref=Jc(y,v,b),E.return=y,y=E)}return s(y);case Ja:e:{for(T=b.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===b.containerInfo&&v.stateNode.implementation===b.implementation){n(y,v.sibling),v=o(v,b.children||[]),v.return=y,y=v;break e}else{n(y,v);break}else e(y,v);v=v.sibling}v=B1(b,y.mode,E),v.return=y,y=v}return s(y);case po:return T=b._init,C(y,v,T(b._payload),E)}if(fu(b))return m(y,v,b,E);if(qc(b))return w(y,v,b,E);Vf(y,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,v!==null&&v.tag===6?(n(y,v.sibling),v=o(v,b),v.return=y,y=v):(n(y,v),v=j1(b,y.mode,E),v.return=y,y=v),s(y)):n(y,v)}return C}var Dl=a6(!0),l6=a6(!1),cf={},li=as(cf),Yu=as(cf),Qu=as(cf);function Ms(t){if(t===cf)throw Error(G(174));return t}function ey(t,e){switch(st(Qu,e),st(Yu,t),st(li,cf),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fm(e,t)}ut(li),st(li,e)}function jl(){ut(li),ut(Yu),ut(Qu)}function c6(t){Ms(Qu.current);var e=Ms(li.current),n=Fm(e,t.type);e!==n&&(st(Yu,t),st(li,n))}function ty(t){Yu.current===t&&(ut(li),ut(Yu))}var gt=as(0);function Kh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var I1=[];function ny(){for(var t=0;t<I1.length;t++)I1[t]._workInProgressVersionPrimary=null;I1.length=0}var vh=to.ReactCurrentDispatcher,k1=to.ReactCurrentBatchConfig,Js=0,wt=null,Lt=null,Wt=null,Yh=!1,xu=!1,Ju=0,dS=0;function nn(){throw Error(G(321))}function ry(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Mr(t[n],e[n]))return!1;return!0}function iy(t,e,n,r,o,i){if(Js=i,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vh.current=t===null||t.memoizedState===null?mS:gS,t=n(r,o),xu){i=0;do{if(xu=!1,Ju=0,25<=i)throw Error(G(301));i+=1,Wt=Lt=null,e.updateQueue=null,vh.current=wS,t=n(r,o)}while(xu)}if(vh.current=Qh,e=Lt!==null&&Lt.next!==null,Js=0,Wt=Lt=wt=null,Yh=!1,e)throw Error(G(300));return t}function oy(){var t=Ju!==0;return Ju=0,t}function Qr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?wt.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function mr(){if(Lt===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=Wt===null?wt.memoizedState:Wt.next;if(e!==null)Wt=e,Lt=t;else{if(t===null)throw Error(G(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Wt===null?wt.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function Xu(t,e){return typeof e=="function"?e(t):e}function N1(t){var e=mr(),n=e.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=t;var r=Lt,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,l=null,c=i;do{var u=c.lane;if((Js&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,wt.lanes|=u,Xs|=u}c=c.next}while(c!==null&&c!==i);l===null?s=r:l.next=a,Mr(r,e.memoizedState)||(Rn=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){o=t;do i=o.lane,wt.lanes|=i,Xs|=i,o=o.next;while(o!==t)}else o===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function M1(t){var e=mr(),n=e.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=t;var r=n.dispatch,o=n.pending,i=e.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=t(i,s.action),s=s.next;while(s!==o);Mr(i,e.memoizedState)||(Rn=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function u6(){}function d6(t,e){var n=wt,r=mr(),o=e(),i=!Mr(r.memoizedState,o);if(i&&(r.memoizedState=o,Rn=!0),r=r.queue,sy(p6.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,ed(9,h6.bind(null,n,r,o,e),void 0,null),Ht===null)throw Error(G(349));Js&30||f6(n,e,o)}return o}function f6(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function h6(t,e,n,r){e.value=n,e.getSnapshot=r,m6(e)&&g6(t)}function p6(t,e,n){return n(function(){m6(e)&&g6(t)})}function m6(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Mr(t,n)}catch{return!0}}function g6(t){var e=Hi(t,1);e!==null&&Ir(e,t,1,-1)}function U2(t){var e=Qr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xu,lastRenderedState:t},e.queue=t,t=t.dispatch=pS.bind(null,wt,t),[e.memoizedState,t]}function ed(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function w6(){return mr().memoizedState}function bh(t,e,n,r){var o=Qr();wt.flags|=t,o.memoizedState=ed(1|e,n,void 0,r===void 0?null:r)}function s0(t,e,n,r){var o=mr();r=r===void 0?null:r;var i=void 0;if(Lt!==null){var s=Lt.memoizedState;if(i=s.destroy,r!==null&&ry(r,s.deps)){o.memoizedState=ed(e,n,i,r);return}}wt.flags|=t,o.memoizedState=ed(1|e,n,i,r)}function F2(t,e){return bh(8390656,8,t,e)}function sy(t,e){return s0(2048,8,t,e)}function y6(t,e){return s0(4,2,t,e)}function v6(t,e){return s0(4,4,t,e)}function b6(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function x6(t,e,n){return n=n!=null?n.concat([t]):null,s0(4,4,b6.bind(null,e,t),n)}function ay(){}function C6(t,e){var n=mr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ry(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function E6(t,e){var n=mr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ry(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function _6(t,e,n){return Js&21?(Mr(n,e)||(n=$4(),wt.lanes|=n,Xs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Rn=!0),t.memoizedState=n)}function fS(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var r=k1.transition;k1.transition={};try{t(!1),e()}finally{Qe=n,k1.transition=r}}function S6(){return mr().memoizedState}function hS(t,e,n){var r=Bo(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},A6(t))$6(e,n);else if(n=r6(t,e,n,r),n!==null){var o=wn();Ir(n,t,r,o),R6(n,e,r)}}function pS(t,e,n){var r=Bo(t),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(A6(t))$6(e,o);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var s=e.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,Mr(a,s)){var l=e.interleaved;l===null?(o.next=o,Jw(e)):(o.next=l.next,l.next=o),e.interleaved=o;return}}catch{}finally{}n=r6(t,e,o,r),n!==null&&(o=wn(),Ir(n,t,r,o),R6(n,e,r))}}function A6(t){var e=t.alternate;return t===wt||e!==null&&e===wt}function $6(t,e){xu=Yh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function R6(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jw(t,n)}}var Qh={readContext:pr,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useInsertionEffect:nn,useLayoutEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useMutableSource:nn,useSyncExternalStore:nn,useId:nn,unstable_isNewReconciler:!1},mS={readContext:pr,useCallback:function(t,e){return Qr().memoizedState=[t,e===void 0?null:e],t},useContext:pr,useEffect:F2,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,bh(4194308,4,b6.bind(null,e,t),n)},useLayoutEffect:function(t,e){return bh(4194308,4,t,e)},useInsertionEffect:function(t,e){return bh(4,2,t,e)},useMemo:function(t,e){var n=Qr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=hS.bind(null,wt,t),[r.memoizedState,t]},useRef:function(t){var e=Qr();return t={current:t},e.memoizedState=t},useState:U2,useDebugValue:ay,useDeferredValue:function(t){return Qr().memoizedState=t},useTransition:function(){var t=U2(!1),e=t[0];return t=fS.bind(null,t[1]),Qr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=wt,o=Qr();if(ft){if(n===void 0)throw Error(G(407));n=n()}else{if(n=e(),Ht===null)throw Error(G(349));Js&30||f6(r,e,n)}o.memoizedState=n;var i={value:n,getSnapshot:e};return o.queue=i,F2(p6.bind(null,r,i,t),[t]),r.flags|=2048,ed(9,h6.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Qr(),e=Ht.identifierPrefix;if(ft){var n=Di,r=Li;n=(r&~(1<<32-Or(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ju++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gS={readContext:pr,useCallback:C6,useContext:pr,useEffect:sy,useImperativeHandle:x6,useInsertionEffect:y6,useLayoutEffect:v6,useMemo:E6,useReducer:N1,useRef:w6,useState:function(){return N1(Xu)},useDebugValue:ay,useDeferredValue:function(t){var e=mr();return _6(e,Lt.memoizedState,t)},useTransition:function(){var t=N1(Xu)[0],e=mr().memoizedState;return[t,e]},useMutableSource:u6,useSyncExternalStore:d6,useId:S6,unstable_isNewReconciler:!1},wS={readContext:pr,useCallback:C6,useContext:pr,useEffect:sy,useImperativeHandle:x6,useInsertionEffect:y6,useLayoutEffect:v6,useMemo:E6,useReducer:M1,useRef:w6,useState:function(){return M1(Xu)},useDebugValue:ay,useDeferredValue:function(t){var e=mr();return Lt===null?e.memoizedState=t:_6(e,Lt.memoizedState,t)},useTransition:function(){var t=M1(Xu)[0],e=mr().memoizedState;return[t,e]},useMutableSource:u6,useSyncExternalStore:d6,useId:S6,unstable_isNewReconciler:!1};function Bl(t,e){try{var n="",r=e;do n+=VE(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:o,digest:null}}function L1(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ug(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yS=typeof WeakMap=="function"?WeakMap:Map;function T6(t,e,n){n=Bi(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Xh||(Xh=!0,bg=r),ug(t,e)},n}function P6(t,e,n){n=Bi(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var o=e.value;n.payload=function(){return r(o)},n.callback=function(){ug(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ug(t,e),typeof r!="function"&&(jo===null?jo=new Set([this]):jo.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function W2(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new yS;var o=new Set;r.set(e,o)}else o=r.get(e),o===void 0&&(o=new Set,r.set(e,o));o.has(n)||(o.add(n),t=IS.bind(null,t,e,n),e.then(t,t))}function z2(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function H2(t,e,n,r,o){return t.mode&1?(t.flags|=65536,t.lanes=o,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bi(-1,1),e.tag=2,Do(n,e,1))),n.lanes|=1),t)}var vS=to.ReactCurrentOwner,Rn=!1;function mn(t,e,n,r){e.child=t===null?l6(e,null,n,r):Dl(e,t.child,n,r)}function V2(t,e,n,r,o){n=n.render;var i=e.ref;return ml(e,o),r=iy(t,e,n,r,i,o),n=oy(),t!==null&&!Rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~o,Vi(t,e,o)):(ft&&n&&Zw(e),e.flags|=1,mn(t,e,r,o),e.child)}function Z2(t,e,n,r,o){if(t===null){var i=n.type;return typeof i=="function"&&!my(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,O6(t,e,i,r,o)):(t=_h(n.type,null,r,e,e.mode,o),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Zu,n(s,r)&&t.ref===e.ref)return Vi(t,e,o)}return e.flags|=1,t=Uo(i,r),t.ref=e.ref,t.return=e,e.child=t}function O6(t,e,n,r,o){if(t!==null){var i=t.memoizedProps;if(Zu(i,r)&&t.ref===e.ref)if(Rn=!1,e.pendingProps=r=i,(t.lanes&o)!==0)t.flags&131072&&(Rn=!0);else return e.lanes=t.lanes,Vi(t,e,o)}return dg(t,e,n,r,o)}function I6(t,e,n){var r=e.pendingProps,o=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(cl,Bn),Bn|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(cl,Bn),Bn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,st(cl,Bn),Bn|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,st(cl,Bn),Bn|=r;return mn(t,e,o,n),e.child}function k6(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dg(t,e,n,r,o){var i=Pn(n)?Ys:an.current;return i=Ml(e,i),ml(e,o),n=iy(t,e,n,r,i,o),r=oy(),t!==null&&!Rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~o,Vi(t,e,o)):(ft&&r&&Zw(e),e.flags|=1,mn(t,e,n,o),e.child)}function q2(t,e,n,r,o){if(Pn(n)){var i=!0;zh(e)}else i=!1;if(ml(e,o),e.stateNode===null)xh(t,e),s6(e,n,r),cg(e,n,r,o),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=pr(c):(c=Pn(n)?Ys:an.current,c=Ml(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&j2(e,s,r,c),mo=!1;var h=e.memoizedState;s.state=h,Gh(e,r,s,o),l=e.memoizedState,a!==r||h!==l||Tn.current||mo?(typeof u=="function"&&(lg(e,n,u,r),l=e.memoizedState),(a=mo||D2(e,n,a,r,h,l,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,i6(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Er(e.type,a),s.props=c,d=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=pr(l):(l=Pn(n)?Ys:an.current,l=Ml(e,l));var g=n.getDerivedStateFromProps;(u=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&j2(e,s,r,l),mo=!1,h=e.memoizedState,s.state=h,Gh(e,r,s,o);var m=e.memoizedState;a!==d||h!==m||Tn.current||mo?(typeof g=="function"&&(lg(e,n,g,r),m=e.memoizedState),(c=mo||D2(e,n,c,r,h,m,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,m,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,m,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),s.props=r,s.state=m,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return fg(t,e,n,r,i,o)}function fg(t,e,n,r,o,i){k6(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return o&&I2(e,n,!1),Vi(t,e,i);r=e.stateNode,vS.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Dl(e,t.child,null,i),e.child=Dl(e,null,a,i)):mn(t,e,a,i),e.memoizedState=r.state,o&&I2(e,n,!0),e.child}function N6(t){var e=t.stateNode;e.pendingContext?O2(t,e.pendingContext,e.pendingContext!==e.context):e.context&&O2(t,e.context,!1),ey(t,e.containerInfo)}function G2(t,e,n,r,o){return Ll(),Gw(o),e.flags|=256,mn(t,e,n,r),e.child}var hg={dehydrated:null,treeContext:null,retryLane:0};function pg(t){return{baseLanes:t,cachePool:null,transitions:null}}function M6(t,e,n){var r=e.pendingProps,o=gt.current,i=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(o&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(o|=1),st(gt,o&1),t===null)return sg(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,i?(r=e.mode,i=e.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=c0(s,r,0,null),t=zs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=pg(n),e.memoizedState=hg,t):ly(e,s));if(o=t.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return bS(t,e,s,r,a,o,n);if(i){i=r.fallback,s=e.mode,o=t.child,a=o.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==o?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Uo(o,l),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Uo(a,i):(i=zs(i,s,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,s=t.child.memoizedState,s=s===null?pg(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=t.childLanes&~n,e.memoizedState=hg,r}return i=t.child,t=i.sibling,r=Uo(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ly(t,e){return e=c0({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Zf(t,e,n,r){return r!==null&&Gw(r),Dl(e,t.child,null,n),t=ly(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bS(t,e,n,r,o,i,s){if(n)return e.flags&256?(e.flags&=-257,r=L1(Error(G(422))),Zf(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,o=e.mode,r=c0({mode:"visible",children:r.children},o,0,null),i=zs(i,o,s,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Dl(e,t.child,null,s),e.child.memoizedState=pg(s),e.memoizedState=hg,i);if(!(e.mode&1))return Zf(t,e,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(G(419)),r=L1(i,r,void 0),Zf(t,e,s,r)}if(a=(s&t.childLanes)!==0,Rn||a){if(r=Ht,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Hi(t,o),Ir(r,t,o,-1))}return py(),r=L1(Error(G(421))),Zf(t,e,s,r)}return o.data==="$?"?(e.flags|=128,e.child=t.child,e=kS.bind(null,t),o._reactRetry=e,null):(t=i.treeContext,Un=Lo(o.nextSibling),Wn=e,ft=!0,$r=null,t!==null&&(lr[cr++]=Li,lr[cr++]=Di,lr[cr++]=Qs,Li=t.id,Di=t.overflow,Qs=e),e=ly(e,r.children),e.flags|=4096,e)}function K2(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ag(t.return,e,n)}function D1(t,e,n,r,o){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function L6(t,e,n){var r=e.pendingProps,o=r.revealOrder,i=r.tail;if(mn(t,e,r.children,n),r=gt.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&K2(t,n,e);else if(t.tag===19)K2(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(st(gt,r),!(e.mode&1))e.memoizedState=null;else switch(o){case"forwards":for(n=e.child,o=null;n!==null;)t=n.alternate,t!==null&&Kh(t)===null&&(o=n),n=n.sibling;n=o,n===null?(o=e.child,e.child=null):(o=n.sibling,n.sibling=null),D1(e,!1,o,n,i);break;case"backwards":for(n=null,o=e.child,e.child=null;o!==null;){if(t=o.alternate,t!==null&&Kh(t)===null){e.child=o;break}t=o.sibling,o.sibling=n,n=o,o=t}D1(e,!0,n,null,i);break;case"together":D1(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xh(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(G(153));if(e.child!==null){for(t=e.child,n=Uo(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Uo(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xS(t,e,n){switch(e.tag){case 3:N6(e),Ll();break;case 5:c6(e);break;case 1:Pn(e.type)&&zh(e);break;case 4:ey(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,o=e.memoizedProps.value;st(Zh,r._currentValue),r._currentValue=o;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(st(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?M6(t,e,n):(st(gt,gt.current&1),t=Vi(t,e,n),t!==null?t.sibling:null);st(gt,gt.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return L6(t,e,n);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),st(gt,gt.current),r)break;return null;case 22:case 23:return e.lanes=0,I6(t,e,n)}return Vi(t,e,n)}var D6,mg,j6,B6;D6=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mg=function(){};j6=function(t,e,n,r){var o=t.memoizedProps;if(o!==r){t=e.stateNode,Ms(li.current);var i=null;switch(n){case"input":o=Dm(t,o),r=Dm(t,r),i=[];break;case"select":o=yt({},o,{value:void 0}),r=yt({},r,{value:void 0}),i=[];break;case"textarea":o=Um(t,o),r=Um(t,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Fh)}Wm(n,r);var s;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Bu.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var l=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Bu.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ct("scroll",t),i||a===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};B6=function(t,e,n,r){n!==r&&(e.flags|=4)};function Xc(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function rn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var o=t.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=t,o=o.sibling;else for(o=t.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=t,o=o.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function CS(t,e,n){var r=e.pendingProps;switch(qw(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(e),null;case 1:return Pn(e.type)&&Wh(),rn(e),null;case 3:return r=e.stateNode,jl(),ut(Tn),ut(an),ny(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Hf(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$r!==null&&(Eg($r),$r=null))),mg(t,e),rn(e),null;case 5:ty(e);var o=Ms(Qu.current);if(n=e.type,t!==null&&e.stateNode!=null)j6(t,e,n,r,o),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(G(166));return rn(e),null}if(t=Ms(li.current),Hf(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[ri]=e,r[Ku]=i,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",r),ct("close",r);break;case"iframe":case"object":case"embed":ct("load",r);break;case"video":case"audio":for(o=0;o<pu.length;o++)ct(pu[o],r);break;case"source":ct("error",r);break;case"img":case"image":case"link":ct("error",r),ct("load",r);break;case"details":ct("toggle",r);break;case"input":i2(r,i),ct("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ct("invalid",r);break;case"textarea":s2(r,i),ct("invalid",r)}Wm(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&zf(r.textContent,a,t),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&zf(r.textContent,a,t),o=["children",""+a]):Bu.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ct("scroll",r)}switch(n){case"input":Mf(r),o2(r,i,!0);break;case"textarea":Mf(r),a2(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Fh)}r=o,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=f4(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[ri]=e,t[Ku]=r,D6(t,e,!1,!1),e.stateNode=t;e:{switch(s=zm(n,r),n){case"dialog":ct("cancel",t),ct("close",t),o=r;break;case"iframe":case"object":case"embed":ct("load",t),o=r;break;case"video":case"audio":for(o=0;o<pu.length;o++)ct(pu[o],t);o=r;break;case"source":ct("error",t),o=r;break;case"img":case"image":case"link":ct("error",t),ct("load",t),o=r;break;case"details":ct("toggle",t),o=r;break;case"input":i2(t,r),o=Dm(t,r),ct("invalid",t);break;case"option":o=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},o=yt({},r,{value:void 0}),ct("invalid",t);break;case"textarea":s2(t,r),o=Um(t,r),ct("invalid",t);break;default:o=r}Wm(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?m4(t,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&h4(t,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Uu(t,l):typeof l=="number"&&Uu(t,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Bu.hasOwnProperty(i)?l!=null&&i==="onScroll"&&ct("scroll",t):l!=null&&Iw(t,i,l,s))}switch(n){case"input":Mf(t),o2(t,r,!1);break;case"textarea":Mf(t),a2(t);break;case"option":r.value!=null&&t.setAttribute("value",""+qo(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?dl(t,!!r.multiple,i,!1):r.defaultValue!=null&&dl(t,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(t.onclick=Fh)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rn(e),null;case 6:if(t&&e.stateNode!=null)B6(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(G(166));if(n=Ms(Qu.current),Ms(li.current),Hf(e)){if(r=e.stateNode,n=e.memoizedProps,r[ri]=e,(i=r.nodeValue!==n)&&(t=Wn,t!==null))switch(t.tag){case 3:zf(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&zf(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ri]=e,e.stateNode=r}return rn(e),null;case 13:if(ut(gt),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&Un!==null&&e.mode&1&&!(e.flags&128))n6(),Ll(),e.flags|=98560,i=!1;else if(i=Hf(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(G(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(G(317));i[ri]=e}else Ll(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rn(e),i=!1}else $r!==null&&(Eg($r),$r=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Dt===0&&(Dt=3):py())),e.updateQueue!==null&&(e.flags|=4),rn(e),null);case 4:return jl(),mg(t,e),t===null&&qu(e.stateNode.containerInfo),rn(e),null;case 10:return Qw(e.type._context),rn(e),null;case 17:return Pn(e.type)&&Wh(),rn(e),null;case 19:if(ut(gt),i=e.memoizedState,i===null)return rn(e),null;if(r=(e.flags&128)!==0,s=i.rendering,s===null)if(r)Xc(i,!1);else{if(Dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Kh(t),s!==null){for(e.flags|=128,Xc(i,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,t=s.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(gt,gt.current&1|2),e.child}t=t.sibling}i.tail!==null&&St()>Ul&&(e.flags|=128,r=!0,Xc(i,!1),e.lanes=4194304)}else{if(!r)if(t=Kh(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xc(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ft)return rn(e),null}else 2*St()-i.renderingStartTime>Ul&&n!==1073741824&&(e.flags|=128,r=!0,Xc(i,!1),e.lanes=4194304);i.isBackwards?(s.sibling=e.child,e.child=s):(n=i.last,n!==null?n.sibling=s:e.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=St(),e.sibling=null,n=gt.current,st(gt,r?n&1|2:n&1),e):(rn(e),null);case 22:case 23:return hy(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Bn&1073741824&&(rn(e),e.subtreeFlags&6&&(e.flags|=8192)):rn(e),null;case 24:return null;case 25:return null}throw Error(G(156,e.tag))}function ES(t,e){switch(qw(e),e.tag){case 1:return Pn(e.type)&&Wh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return jl(),ut(Tn),ut(an),ny(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ty(e),null;case 13:if(ut(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(G(340));Ll()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(gt),null;case 4:return jl(),null;case 10:return Qw(e.type._context),null;case 22:case 23:return hy(),null;case 24:return null;default:return null}}var qf=!1,on=!1,_S=typeof WeakSet=="function"?WeakSet:Set,ue=null;function ll(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Et(t,e,r)}else n.current=null}function gg(t,e,n){try{n()}catch(r){Et(t,e,r)}}var Y2=!1;function SS(t,e){if(Xm=jh,t=z4(),Vw(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var g;d!==n||o!==0&&d.nodeType!==3||(a=s+o),d!==i||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++c===o&&(a=s),h===i&&++u===r&&(l=s),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(eg={focusedElem:t,selectionRange:n},jh=!1,ue=e;ue!==null;)if(e=ue,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ue=t;else for(;ue!==null;){e=ue;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var w=m.memoizedProps,C=m.memoizedState,y=e.stateNode,v=y.getSnapshotBeforeUpdate(e.elementType===e.type?w:Er(e.type,w),C);y.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var b=e.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(E){Et(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,ue=t;break}ue=e.return}return m=Y2,Y2=!1,m}function Cu(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var i=o.destroy;o.destroy=void 0,i!==void 0&&gg(e,n,i)}o=o.next}while(o!==r)}}function a0(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wg(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function U6(t){var e=t.alternate;e!==null&&(t.alternate=null,U6(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ri],delete e[Ku],delete e[rg],delete e[aS],delete e[lS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function F6(t){return t.tag===5||t.tag===3||t.tag===4}function Q2(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||F6(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fh));else if(r!==4&&(t=t.child,t!==null))for(yg(t,e,n),t=t.sibling;t!==null;)yg(t,e,n),t=t.sibling}function vg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(vg(t,e,n),t=t.sibling;t!==null;)vg(t,e,n),t=t.sibling}var Kt=null,Ar=!1;function uo(t,e,n){for(n=n.child;n!==null;)W6(t,e,n),n=n.sibling}function W6(t,e,n){if(ai&&typeof ai.onCommitFiberUnmount=="function")try{ai.onCommitFiberUnmount(Xp,n)}catch{}switch(n.tag){case 5:on||ll(n,e);case 6:var r=Kt,o=Ar;Kt=null,uo(t,e,n),Kt=r,Ar=o,Kt!==null&&(Ar?(t=Kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Kt.removeChild(n.stateNode));break;case 18:Kt!==null&&(Ar?(t=Kt,n=n.stateNode,t.nodeType===8?P1(t.parentNode,n):t.nodeType===1&&P1(t,n),Hu(t)):P1(Kt,n.stateNode));break;case 4:r=Kt,o=Ar,Kt=n.stateNode.containerInfo,Ar=!0,uo(t,e,n),Kt=r,Ar=o;break;case 0:case 11:case 14:case 15:if(!on&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&gg(n,e,s),o=o.next}while(o!==r)}uo(t,e,n);break;case 1:if(!on&&(ll(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Et(n,e,a)}uo(t,e,n);break;case 21:uo(t,e,n);break;case 22:n.mode&1?(on=(r=on)||n.memoizedState!==null,uo(t,e,n),on=r):uo(t,e,n);break;default:uo(t,e,n)}}function J2(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _S),e.forEach(function(r){var o=NS.bind(null,t,r);n.has(r)||(n.add(r),r.then(o,o))})}}function xr(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Kt=a.stateNode,Ar=!1;break e;case 3:Kt=a.stateNode.containerInfo,Ar=!0;break e;case 4:Kt=a.stateNode.containerInfo,Ar=!0;break e}a=a.return}if(Kt===null)throw Error(G(160));W6(i,s,o),Kt=null,Ar=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(c){Et(o,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)z6(e,t),e=e.sibling}function z6(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xr(e,t),Gr(t),r&4){try{Cu(3,t,t.return),a0(3,t)}catch(w){Et(t,t.return,w)}try{Cu(5,t,t.return)}catch(w){Et(t,t.return,w)}}break;case 1:xr(e,t),Gr(t),r&512&&n!==null&&ll(n,n.return);break;case 5:if(xr(e,t),Gr(t),r&512&&n!==null&&ll(n,n.return),t.flags&32){var o=t.stateNode;try{Uu(o,"")}catch(w){Et(t,t.return,w)}}if(r&4&&(o=t.stateNode,o!=null)){var i=t.memoizedProps,s=n!==null?n.memoizedProps:i,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&u4(o,i),zm(a,s);var c=zm(a,i);for(s=0;s<l.length;s+=2){var u=l[s],d=l[s+1];u==="style"?m4(o,d):u==="dangerouslySetInnerHTML"?h4(o,d):u==="children"?Uu(o,d):Iw(o,u,d,c)}switch(a){case"input":jm(o,i);break;case"textarea":d4(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?dl(o,!!i.multiple,g,!1):h!==!!i.multiple&&(i.defaultValue!=null?dl(o,!!i.multiple,i.defaultValue,!0):dl(o,!!i.multiple,i.multiple?[]:"",!1))}o[Ku]=i}catch(w){Et(t,t.return,w)}}break;case 6:if(xr(e,t),Gr(t),r&4){if(t.stateNode===null)throw Error(G(162));o=t.stateNode,i=t.memoizedProps;try{o.nodeValue=i}catch(w){Et(t,t.return,w)}}break;case 3:if(xr(e,t),Gr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hu(e.containerInfo)}catch(w){Et(t,t.return,w)}break;case 4:xr(e,t),Gr(t);break;case 13:xr(e,t),Gr(t),o=t.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(dy=St())),r&4&&J2(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(on=(c=on)||u,xr(e,t),on=c):xr(e,t),Gr(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ue=t,u=t.child;u!==null;){for(d=ue=u;ue!==null;){switch(h=ue,g=h.child,h.tag){case 0:case 11:case 14:case 15:Cu(4,h,h.return);break;case 1:ll(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(w){Et(r,n,w)}}break;case 5:ll(h,h.return);break;case 22:if(h.memoizedState!==null){e3(d);continue}}g!==null?(g.return=h,ue=g):e3(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{o=d.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=p4("display",s))}catch(w){Et(t,t.return,w)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(w){Et(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:xr(e,t),Gr(t),r&4&&J2(t);break;case 21:break;default:xr(e,t),Gr(t)}}function Gr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(F6(n)){var r=n;break e}n=n.return}throw Error(G(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Uu(o,""),r.flags&=-33);var i=Q2(t);vg(t,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Q2(t);yg(t,a,s);break;default:throw Error(G(161))}}catch(l){Et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function AS(t,e,n){ue=t,H6(t)}function H6(t,e,n){for(var r=(t.mode&1)!==0;ue!==null;){var o=ue,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||qf;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||on;a=qf;var c=on;if(qf=s,(on=l)&&!c)for(ue=o;ue!==null;)s=ue,l=s.child,s.tag===22&&s.memoizedState!==null?t3(o):l!==null?(l.return=s,ue=l):t3(o);for(;i!==null;)ue=i,H6(i),i=i.sibling;ue=o,qf=a,on=c}X2(t)}else o.subtreeFlags&8772&&i!==null?(i.return=o,ue=i):X2(t)}}function X2(t){for(;ue!==null;){var e=ue;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||a0(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!on)if(n===null)r.componentDidMount();else{var o=e.elementType===e.type?n.memoizedProps:Er(e.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&L2(e,i,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}L2(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Hu(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}on||e.flags&512&&wg(e)}catch(h){Et(e,e.return,h)}}if(e===t){ue=null;break}if(n=e.sibling,n!==null){n.return=e.return,ue=n;break}ue=e.return}}function e3(t){for(;ue!==null;){var e=ue;if(e===t){ue=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ue=n;break}ue=e.return}}function t3(t){for(;ue!==null;){var e=ue;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{a0(4,e)}catch(l){Et(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var o=e.return;try{r.componentDidMount()}catch(l){Et(e,o,l)}}var i=e.return;try{wg(e)}catch(l){Et(e,i,l)}break;case 5:var s=e.return;try{wg(e)}catch(l){Et(e,s,l)}}}catch(l){Et(e,e.return,l)}if(e===t){ue=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ue=a;break}ue=e.return}}var $S=Math.ceil,Jh=to.ReactCurrentDispatcher,cy=to.ReactCurrentOwner,fr=to.ReactCurrentBatchConfig,He=0,Ht=null,It=null,Jt=0,Bn=0,cl=as(0),Dt=0,td=null,Xs=0,l0=0,uy=0,Eu=null,$n=null,dy=0,Ul=1/0,Ii=null,Xh=!1,bg=null,jo=null,Gf=!1,To=null,ep=0,_u=0,xg=null,Ch=-1,Eh=0;function wn(){return He&6?St():Ch!==-1?Ch:Ch=St()}function Bo(t){return t.mode&1?He&2&&Jt!==0?Jt&-Jt:uS.transition!==null?(Eh===0&&(Eh=$4()),Eh):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:N4(t.type)),t):1}function Ir(t,e,n,r){if(50<_u)throw _u=0,xg=null,Error(G(185));sf(t,n,r),(!(He&2)||t!==Ht)&&(t===Ht&&(!(He&2)&&(l0|=n),Dt===4&&vo(t,Jt)),On(t,r),n===1&&He===0&&!(e.mode&1)&&(Ul=St()+500,i0&&ls()))}function On(t,e){var n=t.callbackNode;u_(t,e);var r=Dh(t,t===Ht?Jt:0);if(r===0)n!==null&&u2(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&u2(n),e===1)t.tag===0?cS(n3.bind(null,t)):X4(n3.bind(null,t)),oS(function(){!(He&6)&&ls()}),n=null;else{switch(R4(r)){case 1:n=Dw;break;case 4:n=S4;break;case 16:n=Lh;break;case 536870912:n=A4;break;default:n=Lh}n=J6(n,V6.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function V6(t,e){if(Ch=-1,Eh=0,He&6)throw Error(G(327));var n=t.callbackNode;if(gl()&&t.callbackNode!==n)return null;var r=Dh(t,t===Ht?Jt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=tp(t,r);else{e=r;var o=He;He|=2;var i=q6();(Ht!==t||Jt!==e)&&(Ii=null,Ul=St()+500,Ws(t,e));do try{PS();break}catch(a){Z6(t,a)}while(!0);Yw(),Jh.current=i,He=o,It!==null?e=0:(Ht=null,Jt=0,e=Dt)}if(e!==0){if(e===2&&(o=Gm(t),o!==0&&(r=o,e=Cg(t,o))),e===1)throw n=td,Ws(t,0),vo(t,r),On(t,St()),n;if(e===6)vo(t,r);else{if(o=t.current.alternate,!(r&30)&&!RS(o)&&(e=tp(t,r),e===2&&(i=Gm(t),i!==0&&(r=i,e=Cg(t,i))),e===1))throw n=td,Ws(t,0),vo(t,r),On(t,St()),n;switch(t.finishedWork=o,t.finishedLanes=r,e){case 0:case 1:throw Error(G(345));case 2:Rs(t,$n,Ii);break;case 3:if(vo(t,r),(r&130023424)===r&&(e=dy+500-St(),10<e)){if(Dh(t,0)!==0)break;if(o=t.suspendedLanes,(o&r)!==r){wn(),t.pingedLanes|=t.suspendedLanes&o;break}t.timeoutHandle=ng(Rs.bind(null,t,$n,Ii),e);break}Rs(t,$n,Ii);break;case 4:if(vo(t,r),(r&4194240)===r)break;for(e=t.eventTimes,o=-1;0<r;){var s=31-Or(r);i=1<<s,s=e[s],s>o&&(o=s),r&=~i}if(r=o,r=St()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$S(r/1960))-r,10<r){t.timeoutHandle=ng(Rs.bind(null,t,$n,Ii),r);break}Rs(t,$n,Ii);break;case 5:Rs(t,$n,Ii);break;default:throw Error(G(329))}}}return On(t,St()),t.callbackNode===n?V6.bind(null,t):null}function Cg(t,e){var n=Eu;return t.current.memoizedState.isDehydrated&&(Ws(t,e).flags|=256),t=tp(t,e),t!==2&&(e=$n,$n=n,e!==null&&Eg(e)),t}function Eg(t){$n===null?$n=t:$n.push.apply($n,t)}function RS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Mr(i(),o))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vo(t,e){for(e&=~uy,e&=~l0,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Or(e),r=1<<n;t[n]=-1,e&=~r}}function n3(t){if(He&6)throw Error(G(327));gl();var e=Dh(t,0);if(!(e&1))return On(t,St()),null;var n=tp(t,e);if(t.tag!==0&&n===2){var r=Gm(t);r!==0&&(e=r,n=Cg(t,r))}if(n===1)throw n=td,Ws(t,0),vo(t,e),On(t,St()),n;if(n===6)throw Error(G(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rs(t,$n,Ii),On(t,St()),null}function fy(t,e){var n=He;He|=1;try{return t(e)}finally{He=n,He===0&&(Ul=St()+500,i0&&ls())}}function ea(t){To!==null&&To.tag===0&&!(He&6)&&gl();var e=He;He|=1;var n=fr.transition,r=Qe;try{if(fr.transition=null,Qe=1,t)return t()}finally{Qe=r,fr.transition=n,He=e,!(He&6)&&ls()}}function hy(){Bn=cl.current,ut(cl)}function Ws(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,iS(n)),It!==null)for(n=It.return;n!==null;){var r=n;switch(qw(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wh();break;case 3:jl(),ut(Tn),ut(an),ny();break;case 5:ty(r);break;case 4:jl();break;case 13:ut(gt);break;case 19:ut(gt);break;case 10:Qw(r.type._context);break;case 22:case 23:hy()}n=n.return}if(Ht=t,It=t=Uo(t.current,null),Jt=Bn=e,Dt=0,td=null,uy=l0=Xs=0,$n=Eu=null,Ns!==null){for(e=0;e<Ns.length;e++)if(n=Ns[e],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}Ns=null}return t}function Z6(t,e){do{var n=It;try{if(Yw(),vh.current=Qh,Yh){for(var r=wt.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Yh=!1}if(Js=0,Wt=Lt=wt=null,xu=!1,Ju=0,cy.current=null,n===null||n.return===null){Dt=1,td=e,It=null;break}e:{var i=t,s=n.return,a=n,l=e;if(e=Jt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=z2(s);if(g!==null){g.flags&=-257,H2(g,s,a,i,e),g.mode&1&&W2(i,c,e),e=g,l=c;var m=e.updateQueue;if(m===null){var w=new Set;w.add(l),e.updateQueue=w}else m.add(l);break e}else{if(!(e&1)){W2(i,c,e),py();break e}l=Error(G(426))}}else if(ft&&a.mode&1){var C=z2(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),H2(C,s,a,i,e),Gw(Bl(l,a));break e}}i=l=Bl(l,a),Dt!==4&&(Dt=2),Eu===null?Eu=[i]:Eu.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var y=T6(i,l,e);M2(i,y);break e;case 1:a=l;var v=i.type,b=i.stateNode;if(!(i.flags&128)&&(typeof v.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(jo===null||!jo.has(b)))){i.flags|=65536,e&=-e,i.lanes|=e;var E=P6(i,a,e);M2(i,E);break e}}i=i.return}while(i!==null)}K6(n)}catch(R){e=R,It===n&&n!==null&&(It=n=n.return);continue}break}while(!0)}function q6(){var t=Jh.current;return Jh.current=Qh,t===null?Qh:t}function py(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),Ht===null||!(Xs&268435455)&&!(l0&268435455)||vo(Ht,Jt)}function tp(t,e){var n=He;He|=2;var r=q6();(Ht!==t||Jt!==e)&&(Ii=null,Ws(t,e));do try{TS();break}catch(o){Z6(t,o)}while(!0);if(Yw(),He=n,Jh.current=r,It!==null)throw Error(G(261));return Ht=null,Jt=0,Dt}function TS(){for(;It!==null;)G6(It)}function PS(){for(;It!==null&&!t_();)G6(It)}function G6(t){var e=Q6(t.alternate,t,Bn);t.memoizedProps=t.pendingProps,e===null?K6(t):It=e,cy.current=null}function K6(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ES(n,e),n!==null){n.flags&=32767,It=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Dt=6,It=null;return}}else if(n=CS(n,e,Bn),n!==null){It=n;return}if(e=e.sibling,e!==null){It=e;return}It=e=t}while(e!==null);Dt===0&&(Dt=5)}function Rs(t,e,n){var r=Qe,o=fr.transition;try{fr.transition=null,Qe=1,OS(t,e,n,r)}finally{fr.transition=o,Qe=r}return null}function OS(t,e,n,r){do gl();while(To!==null);if(He&6)throw Error(G(327));n=t.finishedWork;var o=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(G(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(d_(t,i),t===Ht&&(It=Ht=null,Jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Gf||(Gf=!0,J6(Lh,function(){return gl(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=fr.transition,fr.transition=null;var s=Qe;Qe=1;var a=He;He|=4,cy.current=null,SS(t,n),z6(n,t),Q_(eg),jh=!!Xm,eg=Xm=null,t.current=n,AS(n),n_(),He=a,Qe=s,fr.transition=i}else t.current=n;if(Gf&&(Gf=!1,To=t,ep=o),i=t.pendingLanes,i===0&&(jo=null),o_(n.stateNode),On(t,St()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)o=e[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Xh)throw Xh=!1,t=bg,bg=null,t;return ep&1&&t.tag!==0&&gl(),i=t.pendingLanes,i&1?t===xg?_u++:(_u=0,xg=t):_u=0,ls(),null}function gl(){if(To!==null){var t=R4(ep),e=fr.transition,n=Qe;try{if(fr.transition=null,Qe=16>t?16:t,To===null)var r=!1;else{if(t=To,To=null,ep=0,He&6)throw Error(G(331));var o=He;for(He|=4,ue=t.current;ue!==null;){var i=ue,s=i.child;if(ue.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ue=c;ue!==null;){var u=ue;switch(u.tag){case 0:case 11:case 15:Cu(8,u,i)}var d=u.child;if(d!==null)d.return=u,ue=d;else for(;ue!==null;){u=ue;var h=u.sibling,g=u.return;if(U6(u),u===c){ue=null;break}if(h!==null){h.return=g,ue=h;break}ue=g}}}var m=i.alternate;if(m!==null){var w=m.child;if(w!==null){m.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}ue=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,ue=s;else e:for(;ue!==null;){if(i=ue,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Cu(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,ue=y;break e}ue=i.return}}var v=t.current;for(ue=v;ue!==null;){s=ue;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,ue=b;else e:for(s=v;ue!==null;){if(a=ue,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:a0(9,a)}}catch(R){Et(a,a.return,R)}if(a===s){ue=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,ue=E;break e}ue=a.return}}if(He=o,ls(),ai&&typeof ai.onPostCommitFiberRoot=="function")try{ai.onPostCommitFiberRoot(Xp,t)}catch{}r=!0}return r}finally{Qe=n,fr.transition=e}}return!1}function r3(t,e,n){e=Bl(n,e),e=T6(t,e,1),t=Do(t,e,1),e=wn(),t!==null&&(sf(t,1,e),On(t,e))}function Et(t,e,n){if(t.tag===3)r3(t,t,n);else for(;e!==null;){if(e.tag===3){r3(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jo===null||!jo.has(r))){t=Bl(n,t),t=P6(e,t,1),e=Do(e,t,1),t=wn(),e!==null&&(sf(e,1,t),On(e,t));break}}e=e.return}}function IS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=wn(),t.pingedLanes|=t.suspendedLanes&n,Ht===t&&(Jt&n)===n&&(Dt===4||Dt===3&&(Jt&130023424)===Jt&&500>St()-dy?Ws(t,0):uy|=n),On(t,e)}function Y6(t,e){e===0&&(t.mode&1?(e=jf,jf<<=1,!(jf&130023424)&&(jf=4194304)):e=1);var n=wn();t=Hi(t,e),t!==null&&(sf(t,e,n),On(t,n))}function kS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Y6(t,n)}function NS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,o=t.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(G(314))}r!==null&&r.delete(e),Y6(t,n)}var Q6;Q6=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tn.current)Rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Rn=!1,xS(t,e,n);Rn=!!(t.flags&131072)}else Rn=!1,ft&&e.flags&1048576&&e6(e,Vh,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;xh(t,e),t=e.pendingProps;var o=Ml(e,an.current);ml(e,n),o=iy(null,e,r,t,o,n);var i=oy();return e.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pn(r)?(i=!0,zh(e)):i=!1,e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Xw(e),o.updater=o0,e.stateNode=o,o._reactInternals=e,cg(e,r,t,n),e=fg(null,e,r,!0,i,n)):(e.tag=0,ft&&i&&Zw(e),mn(null,e,o,n),e=e.child),e;case 16:r=e.elementType;e:{switch(xh(t,e),t=e.pendingProps,o=r._init,r=o(r._payload),e.type=r,o=e.tag=LS(r),t=Er(r,t),o){case 0:e=dg(null,e,r,t,n);break e;case 1:e=q2(null,e,r,t,n);break e;case 11:e=V2(null,e,r,t,n);break e;case 14:e=Z2(null,e,r,Er(r.type,t),n);break e}throw Error(G(306,r,""))}return e;case 0:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:Er(r,o),dg(t,e,r,o,n);case 1:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:Er(r,o),q2(t,e,r,o,n);case 3:e:{if(N6(e),t===null)throw Error(G(387));r=e.pendingProps,i=e.memoizedState,o=i.element,i6(t,e),Gh(e,r,null,n);var s=e.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){o=Bl(Error(G(423)),e),e=G2(t,e,r,n,o);break e}else if(r!==o){o=Bl(Error(G(424)),e),e=G2(t,e,r,n,o);break e}else for(Un=Lo(e.stateNode.containerInfo.firstChild),Wn=e,ft=!0,$r=null,n=l6(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ll(),r===o){e=Vi(t,e,n);break e}mn(t,e,r,n)}e=e.child}return e;case 5:return c6(e),t===null&&sg(e),r=e.type,o=e.pendingProps,i=t!==null?t.memoizedProps:null,s=o.children,tg(r,o)?s=null:i!==null&&tg(r,i)&&(e.flags|=32),k6(t,e),mn(t,e,s,n),e.child;case 6:return t===null&&sg(e),null;case 13:return M6(t,e,n);case 4:return ey(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Dl(e,null,r,n):mn(t,e,r,n),e.child;case 11:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:Er(r,o),V2(t,e,r,o,n);case 7:return mn(t,e,e.pendingProps,n),e.child;case 8:return mn(t,e,e.pendingProps.children,n),e.child;case 12:return mn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,o=e.pendingProps,i=e.memoizedProps,s=o.value,st(Zh,r._currentValue),r._currentValue=s,i!==null)if(Mr(i.value,s)){if(i.children===o.children&&!Tn.current){e=Vi(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Bi(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),ag(i.return,n,e),a.lanes|=n;break}l=l.next}}else if(i.tag===10)s=i.type===e.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(G(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ag(s,n,e),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}mn(t,e,o.children,n),e=e.child}return e;case 9:return o=e.type,r=e.pendingProps.children,ml(e,n),o=pr(o),r=r(o),e.flags|=1,mn(t,e,r,n),e.child;case 14:return r=e.type,o=Er(r,e.pendingProps),o=Er(r.type,o),Z2(t,e,r,o,n);case 15:return O6(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:Er(r,o),xh(t,e),e.tag=1,Pn(r)?(t=!0,zh(e)):t=!1,ml(e,n),s6(e,r,o),cg(e,r,o,n),fg(null,e,r,!0,t,n);case 19:return L6(t,e,n);case 22:return I6(t,e,n)}throw Error(G(156,e.tag))};function J6(t,e){return _4(t,e)}function MS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ur(t,e,n,r){return new MS(t,e,n,r)}function my(t){return t=t.prototype,!(!t||!t.isReactComponent)}function LS(t){if(typeof t=="function")return my(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nw)return 11;if(t===Mw)return 14}return 2}function Uo(t,e){var n=t.alternate;return n===null?(n=ur(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _h(t,e,n,r,o,i){var s=2;if(r=t,typeof t=="function")my(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Xa:return zs(n.children,o,i,e);case kw:s=8,o|=8;break;case km:return t=ur(12,n,e,o|2),t.elementType=km,t.lanes=i,t;case Nm:return t=ur(13,n,e,o),t.elementType=Nm,t.lanes=i,t;case Mm:return t=ur(19,n,e,o),t.elementType=Mm,t.lanes=i,t;case a4:return c0(n,o,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case o4:s=10;break e;case s4:s=9;break e;case Nw:s=11;break e;case Mw:s=14;break e;case po:s=16,r=null;break e}throw Error(G(130,t==null?t:typeof t,""))}return e=ur(s,n,e,o),e.elementType=t,e.type=r,e.lanes=i,e}function zs(t,e,n,r){return t=ur(7,t,r,e),t.lanes=n,t}function c0(t,e,n,r){return t=ur(22,t,r,e),t.elementType=a4,t.lanes=n,t.stateNode={isHidden:!1},t}function j1(t,e,n){return t=ur(6,t,null,e),t.lanes=n,t}function B1(t,e,n){return e=ur(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function DS(t,e,n,r,o){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=v1(0),this.expirationTimes=v1(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=v1(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function gy(t,e,n,r,o,i,s,a,l){return t=new DS(t,e,n,a,l),e===1?(e=1,i===!0&&(e|=8)):e=0,i=ur(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xw(i),t}function jS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ja,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function X6(t){if(!t)return Go;t=t._reactInternals;e:{if(Ra(t)!==t||t.tag!==1)throw Error(G(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(G(171))}if(t.tag===1){var n=t.type;if(Pn(n))return J4(t,n,e)}return e}function ex(t,e,n,r,o,i,s,a,l){return t=gy(n,r,!0,t,o,i,s,a,l),t.context=X6(null),n=t.current,r=wn(),o=Bo(n),i=Bi(r,o),i.callback=e??null,Do(n,i,o),t.current.lanes=o,sf(t,o,r),On(t,r),t}function u0(t,e,n,r){var o=e.current,i=wn(),s=Bo(o);return n=X6(n),e.context===null?e.context=n:e.pendingContext=n,e=Bi(i,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Do(o,e,s),t!==null&&(Ir(t,o,s,i),yh(t,o,s)),s}function np(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function i3(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wy(t,e){i3(t,e),(t=t.alternate)&&i3(t,e)}function BS(){return null}var tx=typeof reportError=="function"?reportError:function(t){console.error(t)};function yy(t){this._internalRoot=t}d0.prototype.render=yy.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(G(409));u0(t,e,null,null)};d0.prototype.unmount=yy.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ea(function(){u0(null,t,null,null)}),e[zi]=null}};function d0(t){this._internalRoot=t}d0.prototype.unstable_scheduleHydration=function(t){if(t){var e=O4();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yo.length&&e!==0&&e<yo[n].priority;n++);yo.splice(n,0,t),n===0&&k4(t)}};function vy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function o3(){}function US(t,e,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=np(s);i.call(c)}}var s=ex(e,r,t,0,null,!1,!1,"",o3);return t._reactRootContainer=s,t[zi]=s.current,qu(t.nodeType===8?t.parentNode:t),ea(),s}for(;o=t.lastChild;)t.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=np(l);a.call(c)}}var l=gy(t,0,!1,null,null,!1,!1,"",o3);return t._reactRootContainer=l,t[zi]=l.current,qu(t.nodeType===8?t.parentNode:t),ea(function(){u0(e,l,n,r)}),l}function h0(t,e,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=np(s);a.call(l)}}u0(e,s,t,o)}else s=US(n,e,t,o,r);return np(s)}T4=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=hu(e.pendingLanes);n!==0&&(jw(e,n|1),On(e,St()),!(He&6)&&(Ul=St()+500,ls()))}break;case 13:ea(function(){var r=Hi(t,1);if(r!==null){var o=wn();Ir(r,t,1,o)}}),wy(t,1)}};Bw=function(t){if(t.tag===13){var e=Hi(t,134217728);if(e!==null){var n=wn();Ir(e,t,134217728,n)}wy(t,134217728)}};P4=function(t){if(t.tag===13){var e=Bo(t),n=Hi(t,e);if(n!==null){var r=wn();Ir(n,t,e,r)}wy(t,e)}};O4=function(){return Qe};I4=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};Vm=function(t,e,n){switch(e){case"input":if(jm(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var o=r0(r);if(!o)throw Error(G(90));c4(r),jm(r,o)}}}break;case"textarea":d4(t,n);break;case"select":e=n.value,e!=null&&dl(t,!!n.multiple,e,!1)}};y4=fy;v4=ea;var FS={usingClientEntryPoint:!1,Events:[lf,rl,r0,g4,w4,fy]},eu={findFiberByHostInstance:ks,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},WS={bundleType:eu.bundleType,version:eu.version,rendererPackageName:eu.rendererPackageName,rendererConfig:eu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:to.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=C4(t),t===null?null:t.stateNode},findFiberByHostInstance:eu.findFiberByHostInstance||BS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kf.isDisabled&&Kf.supportsFiber)try{Xp=Kf.inject(WS),ai=Kf}catch{}}Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FS;Yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vy(e))throw Error(G(200));return jS(t,e,null,n)};Yn.createRoot=function(t,e){if(!vy(t))throw Error(G(299));var n=!1,r="",o=tx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=gy(t,1,!1,null,null,n,!1,r,o),t[zi]=e.current,qu(t.nodeType===8?t.parentNode:t),new yy(e)};Yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(G(188)):(t=Object.keys(t).join(","),Error(G(268,t)));return t=C4(e),t=t===null?null:t.stateNode,t};Yn.flushSync=function(t){return ea(t)};Yn.hydrate=function(t,e,n){if(!f0(e))throw Error(G(200));return h0(null,t,e,!0,n)};Yn.hydrateRoot=function(t,e,n){if(!vy(t))throw Error(G(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=tx;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=ex(e,null,t,1,n??null,o,!1,i,s),t[zi]=e.current,qu(t),r)for(t=0;t<r.length;t++)n=r[t],o=n._getVersion,o=o(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,o]:e.mutableSourceEagerHydrationData.push(n,o);return new d0(e)};Yn.render=function(t,e,n){if(!f0(e))throw Error(G(200));return h0(null,t,e,!1,n)};Yn.unmountComponentAtNode=function(t){if(!f0(t))throw Error(G(40));return t._reactRootContainer?(ea(function(){h0(null,null,t,!1,function(){t._reactRootContainer=null,t[zi]=null})}),!0):!1};Yn.unstable_batchedUpdates=fy;Yn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!f0(n))throw Error(G(200));if(t==null||t._reactInternals===void 0)throw Error(G(38));return h0(t,e,n,!1,r)};Yn.version="18.2.0-next-9e3b772b8-20220608";function nx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nx)}catch(t){console.error(t)}}nx(),e4.exports=Yn;var zS=e4.exports,rx,s3=zS;rx=s3.createRoot,s3.hydrateRoot;var HS=function(e){return VS(e)&&!ZS(e)};function VS(t){return!!t&&typeof t=="object"}function ZS(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||KS(t)}var qS=typeof Symbol=="function"&&Symbol.for,GS=qS?Symbol.for("react.element"):60103;function KS(t){return t.$$typeof===GS}function YS(t){return Array.isArray(t)?[]:{}}function nd(t,e){return e.clone!==!1&&e.isMergeableObject(t)?Fl(YS(t),t,e):t}function QS(t,e,n){return t.concat(e).map(function(r){return nd(r,n)})}function JS(t,e){if(!e.customMerge)return Fl;var n=e.customMerge(t);return typeof n=="function"?n:Fl}function XS(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(e){return Object.propertyIsEnumerable.call(t,e)}):[]}function a3(t){return Object.keys(t).concat(XS(t))}function ix(t,e){try{return e in t}catch{return!1}}function eA(t,e){return ix(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))}function tA(t,e,n){var r={};return n.isMergeableObject(t)&&a3(t).forEach(function(o){r[o]=nd(t[o],n)}),a3(e).forEach(function(o){eA(t,o)||(ix(t,o)&&n.isMergeableObject(e[o])?r[o]=JS(o,n)(t[o],e[o],n):r[o]=nd(e[o],n))}),r}function Fl(t,e,n){n=n||{},n.arrayMerge=n.arrayMerge||QS,n.isMergeableObject=n.isMergeableObject||HS,n.cloneUnlessOtherwiseSpecified=nd;var r=Array.isArray(e),o=Array.isArray(t),i=r===o;return i?r?n.arrayMerge(t,e,n):tA(t,e,n):nd(e,n)}Fl.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(r,o){return Fl(r,o,n)},{})};var nA=Fl,rA=nA;const iA=os(rA);var oA=Error,sA=EvalError,aA=RangeError,lA=ReferenceError,ox=SyntaxError,uf=TypeError,cA=URIError,uA=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},n=Symbol("test"),r=Object(n);if(typeof n=="string"||Object.prototype.toString.call(n)!=="[object Symbol]"||Object.prototype.toString.call(r)!=="[object Symbol]")return!1;var o=42;e[n]=o;for(n in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var i=Object.getOwnPropertySymbols(e);if(i.length!==1||i[0]!==n||!Object.prototype.propertyIsEnumerable.call(e,n))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var s=Object.getOwnPropertyDescriptor(e,n);if(s.value!==o||s.enumerable!==!0)return!1}return!0},l3=typeof Symbol<"u"&&Symbol,dA=uA,fA=function(){return typeof l3!="function"||typeof Symbol!="function"||typeof l3("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:dA()},U1={__proto__:null,foo:{}},hA=Object,pA=function(){return{__proto__:U1}.foo===U1.foo&&!(U1 instanceof hA)},mA="Function.prototype.bind called on incompatible ",gA=Object.prototype.toString,wA=Math.max,yA="[object Function]",c3=function(e,n){for(var r=[],o=0;o<e.length;o+=1)r[o]=e[o];for(var i=0;i<n.length;i+=1)r[i+e.length]=n[i];return r},vA=function(e,n){for(var r=[],o=n||0,i=0;o<e.length;o+=1,i+=1)r[i]=e[o];return r},bA=function(t,e){for(var n="",r=0;r<t.length;r+=1)n+=t[r],r+1<t.length&&(n+=e);return n},xA=function(e){var n=this;if(typeof n!="function"||gA.apply(n)!==yA)throw new TypeError(mA+n);for(var r=vA(arguments,1),o,i=function(){if(this instanceof o){var u=n.apply(this,c3(r,arguments));return Object(u)===u?u:this}return n.apply(e,c3(r,arguments))},s=wA(0,n.length-r.length),a=[],l=0;l<s;l++)a[l]="$"+l;if(o=Function("binder","return function ("+bA(a,",")+"){ return binder.apply(this,arguments); }")(i),n.prototype){var c=function(){};c.prototype=n.prototype,o.prototype=new c,c.prototype=null}return o},CA=xA,by=Function.prototype.bind||CA,EA=Function.prototype.call,_A=Object.prototype.hasOwnProperty,SA=by,AA=SA.call(EA,_A),je,$A=oA,RA=sA,TA=aA,PA=lA,Wl=ox,wl=uf,OA=cA,sx=Function,F1=function(t){try{return sx('"use strict"; return ('+t+").constructor;")()}catch{}},Hs=Object.getOwnPropertyDescriptor;if(Hs)try{Hs({},"")}catch{Hs=null}var W1=function(){throw new wl},IA=Hs?function(){try{return arguments.callee,W1}catch{try{return Hs(arguments,"callee").get}catch{return W1}}}():W1,Fa=fA(),kA=pA(),Ft=Object.getPrototypeOf||(kA?function(t){return t.__proto__}:null),Ga={},NA=typeof Uint8Array>"u"||!Ft?je:Ft(Uint8Array),Vs={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?je:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?je:ArrayBuffer,"%ArrayIteratorPrototype%":Fa&&Ft?Ft([][Symbol.iterator]()):je,"%AsyncFromSyncIteratorPrototype%":je,"%AsyncFunction%":Ga,"%AsyncGenerator%":Ga,"%AsyncGeneratorFunction%":Ga,"%AsyncIteratorPrototype%":Ga,"%Atomics%":typeof Atomics>"u"?je:Atomics,"%BigInt%":typeof BigInt>"u"?je:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?je:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?je:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?je:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":$A,"%eval%":eval,"%EvalError%":RA,"%Float32Array%":typeof Float32Array>"u"?je:Float32Array,"%Float64Array%":typeof Float64Array>"u"?je:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?je:FinalizationRegistry,"%Function%":sx,"%GeneratorFunction%":Ga,"%Int8Array%":typeof Int8Array>"u"?je:Int8Array,"%Int16Array%":typeof Int16Array>"u"?je:Int16Array,"%Int32Array%":typeof Int32Array>"u"?je:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":Fa&&Ft?Ft(Ft([][Symbol.iterator]())):je,"%JSON%":typeof JSON=="object"?JSON:je,"%Map%":typeof Map>"u"?je:Map,"%MapIteratorPrototype%":typeof Map>"u"||!Fa||!Ft?je:Ft(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?je:Promise,"%Proxy%":typeof Proxy>"u"?je:Proxy,"%RangeError%":TA,"%ReferenceError%":PA,"%Reflect%":typeof Reflect>"u"?je:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?je:Set,"%SetIteratorPrototype%":typeof Set>"u"||!Fa||!Ft?je:Ft(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?je:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":Fa&&Ft?Ft(""[Symbol.iterator]()):je,"%Symbol%":Fa?Symbol:je,"%SyntaxError%":Wl,"%ThrowTypeError%":IA,"%TypedArray%":NA,"%TypeError%":wl,"%Uint8Array%":typeof Uint8Array>"u"?je:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?je:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?je:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?je:Uint32Array,"%URIError%":OA,"%WeakMap%":typeof WeakMap>"u"?je:WeakMap,"%WeakRef%":typeof WeakRef>"u"?je:WeakRef,"%WeakSet%":typeof WeakSet>"u"?je:WeakSet};if(Ft)try{null.error}catch(t){var MA=Ft(Ft(t));Vs["%Error.prototype%"]=MA}var LA=function t(e){var n;if(e==="%AsyncFunction%")n=F1("async function () {}");else if(e==="%GeneratorFunction%")n=F1("function* () {}");else if(e==="%AsyncGeneratorFunction%")n=F1("async function* () {}");else if(e==="%AsyncGenerator%"){var r=t("%AsyncGeneratorFunction%");r&&(n=r.prototype)}else if(e==="%AsyncIteratorPrototype%"){var o=t("%AsyncGenerator%");o&&Ft&&(n=Ft(o.prototype))}return Vs[e]=n,n},u3={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},df=by,rp=AA,DA=df.call(Function.call,Array.prototype.concat),jA=df.call(Function.apply,Array.prototype.splice),d3=df.call(Function.call,String.prototype.replace),ip=df.call(Function.call,String.prototype.slice),BA=df.call(Function.call,RegExp.prototype.exec),UA=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,FA=/\\(\\)?/g,WA=function(e){var n=ip(e,0,1),r=ip(e,-1);if(n==="%"&&r!=="%")throw new Wl("invalid intrinsic syntax, expected closing `%`");if(r==="%"&&n!=="%")throw new Wl("invalid intrinsic syntax, expected opening `%`");var o=[];return d3(e,UA,function(i,s,a,l){o[o.length]=a?d3(l,FA,"$1"):s||i}),o},zA=function(e,n){var r=e,o;if(rp(u3,r)&&(o=u3[r],r="%"+o[0]+"%"),rp(Vs,r)){var i=Vs[r];if(i===Ga&&(i=LA(r)),typeof i>"u"&&!n)throw new wl("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:o,name:r,value:i}}throw new Wl("intrinsic "+e+" does not exist!")},Sc=function(e,n){if(typeof e!="string"||e.length===0)throw new wl("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof n!="boolean")throw new wl('"allowMissing" argument must be a boolean');if(BA(/^%?[^%]*%?$/,e)===null)throw new Wl("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=WA(e),o=r.length>0?r[0]:"",i=zA("%"+o+"%",n),s=i.name,a=i.value,l=!1,c=i.alias;c&&(o=c[0],jA(r,DA([0,1],c)));for(var u=1,d=!0;u<r.length;u+=1){var h=r[u],g=ip(h,0,1),m=ip(h,-1);if((g==='"'||g==="'"||g==="`"||m==='"'||m==="'"||m==="`")&&g!==m)throw new Wl("property names with quotes must have matching quotes");if((h==="constructor"||!d)&&(l=!0),o+="."+h,s="%"+o+"%",rp(Vs,s))a=Vs[s];else if(a!=null){if(!(h in a)){if(!n)throw new wl("base intrinsic for "+e+" exists, but the property is not available.");return}if(Hs&&u+1>=r.length){var w=Hs(a,h);d=!!w,d&&"get"in w&&!("originalValue"in w.get)?a=w.get:a=a[h]}else d=rp(a,h),a=a[h];d&&!l&&(Vs[s]=a)}}return a},ax={exports:{}},z1,f3;function xy(){if(f3)return z1;f3=1;var t=Sc,e=t("%Object.defineProperty%",!0)||!1;if(e)try{e({},"a",{value:1})}catch{e=!1}return z1=e,z1}var HA=Sc,Sh=HA("%Object.getOwnPropertyDescriptor%",!0);if(Sh)try{Sh([],"length")}catch{Sh=null}var lx=Sh,h3=xy(),VA=ox,Wa=uf,p3=lx,ZA=function(e,n,r){if(!e||typeof e!="object"&&typeof e!="function")throw new Wa("`obj` must be an object or a function`");if(typeof n!="string"&&typeof n!="symbol")throw new Wa("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new Wa("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new Wa("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new Wa("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new Wa("`loose`, if provided, must be a boolean");var o=arguments.length>3?arguments[3]:null,i=arguments.length>4?arguments[4]:null,s=arguments.length>5?arguments[5]:null,a=arguments.length>6?arguments[6]:!1,l=!!p3&&p3(e,n);if(h3)h3(e,n,{configurable:s===null&&l?l.configurable:!s,enumerable:o===null&&l?l.enumerable:!o,value:r,writable:i===null&&l?l.writable:!i});else if(a||!o&&!i&&!s)e[n]=r;else throw new VA("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")},_g=xy(),cx=function(){return!!_g};cx.hasArrayLengthDefineBug=function(){if(!_g)return null;try{return _g([],"length",{value:1}).length!==1}catch{return!0}};var qA=cx,GA=Sc,m3=ZA,KA=qA(),g3=lx,w3=uf,YA=GA("%Math.floor%"),QA=function(e,n){if(typeof e!="function")throw new w3("`fn` is not a function");if(typeof n!="number"||n<0||n>4294967295||YA(n)!==n)throw new w3("`length` must be a positive 32-bit integer");var r=arguments.length>2&&!!arguments[2],o=!0,i=!0;if("length"in e&&g3){var s=g3(e,"length");s&&!s.configurable&&(o=!1),s&&!s.writable&&(i=!1)}return(o||i||!r)&&(KA?m3(e,"length",n,!0,!0):m3(e,"length",n)),e};(function(t){var e=by,n=Sc,r=QA,o=uf,i=n("%Function.prototype.apply%"),s=n("%Function.prototype.call%"),a=n("%Reflect.apply%",!0)||e.call(s,i),l=xy(),c=n("%Math.max%");t.exports=function(h){if(typeof h!="function")throw new o("a function is required");var g=a(e,s,arguments);return r(g,1+c(0,h.length-(arguments.length-1)),!0)};var u=function(){return a(e,i,arguments)};l?l(t.exports,"apply",{value:u}):t.exports.apply=u})(ax);var JA=ax.exports,ux=Sc,dx=JA,XA=dx(ux("String.prototype.indexOf")),e$=function(e,n){var r=ux(e,!!n);return typeof r=="function"&&XA(e,".prototype.")>-1?dx(r):r};const t$={},n$=Object.freeze(Object.defineProperty({__proto__:null,default:t$},Symbol.toStringTag,{value:"Module"})),r$=n9(n$);var Cy=typeof Map=="function"&&Map.prototype,H1=Object.getOwnPropertyDescriptor&&Cy?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,op=Cy&&H1&&typeof H1.get=="function"?H1.get:null,y3=Cy&&Map.prototype.forEach,Ey=typeof Set=="function"&&Set.prototype,V1=Object.getOwnPropertyDescriptor&&Ey?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,sp=Ey&&V1&&typeof V1.get=="function"?V1.get:null,v3=Ey&&Set.prototype.forEach,i$=typeof WeakMap=="function"&&WeakMap.prototype,Su=i$?WeakMap.prototype.has:null,o$=typeof WeakSet=="function"&&WeakSet.prototype,Au=o$?WeakSet.prototype.has:null,s$=typeof WeakRef=="function"&&WeakRef.prototype,b3=s$?WeakRef.prototype.deref:null,a$=Boolean.prototype.valueOf,l$=Object.prototype.toString,c$=Function.prototype.toString,u$=String.prototype.match,_y=String.prototype.slice,Po=String.prototype.replace,d$=String.prototype.toUpperCase,x3=String.prototype.toLowerCase,fx=RegExp.prototype.test,C3=Array.prototype.concat,ni=Array.prototype.join,f$=Array.prototype.slice,E3=Math.floor,Sg=typeof BigInt=="function"?BigInt.prototype.valueOf:null,Z1=Object.getOwnPropertySymbols,Ag=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,zl=typeof Symbol=="function"&&typeof Symbol.iterator=="object",ln=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===zl||!0)?Symbol.toStringTag:null,hx=Object.prototype.propertyIsEnumerable,_3=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(t){return t.__proto__}:null);function S3(t,e){if(t===1/0||t===-1/0||t!==t||t&&t>-1e3&&t<1e3||fx.call(/e/,e))return e;var n=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof t=="number"){var r=t<0?-E3(-t):E3(t);if(r!==t){var o=String(r),i=_y.call(e,o.length+1);return Po.call(o,n,"$&_")+"."+Po.call(Po.call(i,/([0-9]{3})/g,"$&_"),/_$/,"")}}return Po.call(e,n,"$&_")}var $g=r$,A3=$g.custom,$3=mx(A3)?A3:null,h$=function t(e,n,r,o){var i=n||{};if(go(i,"quoteStyle")&&i.quoteStyle!=="single"&&i.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(go(i,"maxStringLength")&&(typeof i.maxStringLength=="number"?i.maxStringLength<0&&i.maxStringLength!==1/0:i.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var s=go(i,"customInspect")?i.customInspect:!0;if(typeof s!="boolean"&&s!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(go(i,"indent")&&i.indent!==null&&i.indent!=="	"&&!(parseInt(i.indent,10)===i.indent&&i.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(go(i,"numericSeparator")&&typeof i.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var a=i.numericSeparator;if(typeof e>"u")return"undefined";if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="string")return wx(e,i);if(typeof e=="number"){if(e===0)return 1/0/e>0?"0":"-0";var l=String(e);return a?S3(e,l):l}if(typeof e=="bigint"){var c=String(e)+"n";return a?S3(e,c):c}var u=typeof i.depth>"u"?5:i.depth;if(typeof r>"u"&&(r=0),r>=u&&u>0&&typeof e=="object")return Rg(e)?"[Array]":"[Object]";var d=O$(i,r);if(typeof o>"u")o=[];else if(gx(o,e)>=0)return"[Circular]";function h(ye,ne,K){if(ne&&(o=f$.call(o),o.push(ne)),K){var q={depth:i.depth};return go(i,"quoteStyle")&&(q.quoteStyle=i.quoteStyle),t(ye,q,r+1,o)}return t(ye,i,r+1,o)}if(typeof e=="function"&&!R3(e)){var g=C$(e),m=Yf(e,h);return"[Function"+(g?": "+g:" (anonymous)")+"]"+(m.length>0?" { "+ni.call(m,", ")+" }":"")}if(mx(e)){var w=zl?Po.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):Ag.call(e);return typeof e=="object"&&!zl?tu(w):w}if(R$(e)){for(var C="<"+x3.call(String(e.nodeName)),y=e.attributes||[],v=0;v<y.length;v++)C+=" "+y[v].name+"="+px(p$(y[v].value),"double",i);return C+=">",e.childNodes&&e.childNodes.length&&(C+="..."),C+="</"+x3.call(String(e.nodeName))+">",C}if(Rg(e)){if(e.length===0)return"[]";var b=Yf(e,h);return d&&!P$(b)?"["+Tg(b,d)+"]":"[ "+ni.call(b,", ")+" ]"}if(g$(e)){var E=Yf(e,h);return!("cause"in Error.prototype)&&"cause"in e&&!hx.call(e,"cause")?"{ ["+String(e)+"] "+ni.call(C3.call("[cause]: "+h(e.cause),E),", ")+" }":E.length===0?"["+String(e)+"]":"{ ["+String(e)+"] "+ni.call(E,", ")+" }"}if(typeof e=="object"&&s){if($3&&typeof e[$3]=="function"&&$g)return $g(e,{depth:u-r});if(s!=="symbol"&&typeof e.inspect=="function")return e.inspect()}if(E$(e)){var R=[];return y3&&y3.call(e,function(ye,ne){R.push(h(ne,e,!0)+" => "+h(ye,e))}),T3("Map",op.call(e),R,d)}if(A$(e)){var T=[];return v3&&v3.call(e,function(ye){T.push(h(ye,e))}),T3("Set",sp.call(e),T,d)}if(_$(e))return q1("WeakMap");if($$(e))return q1("WeakSet");if(S$(e))return q1("WeakRef");if(y$(e))return tu(h(Number(e)));if(b$(e))return tu(h(Sg.call(e)));if(v$(e))return tu(a$.call(e));if(w$(e))return tu(h(String(e)));if(typeof window<"u"&&e===window)return"{ [object Window] }";if(e===Mi)return"{ [object globalThis] }";if(!m$(e)&&!R3(e)){var k=Yf(e,h),N=_3?_3(e)===Object.prototype:e instanceof Object||e.constructor===Object,W=e instanceof Object?"":"null prototype",D=!N&&ln&&Object(e)===e&&ln in e?_y.call(cs(e),8,-1):W?"Object":"",H=N||typeof e.constructor!="function"?"":e.constructor.name?e.constructor.name+" ":"",he=H+(D||W?"["+ni.call(C3.call([],D||[],W||[]),": ")+"] ":"");return k.length===0?he+"{}":d?he+"{"+Tg(k,d)+"}":he+"{ "+ni.call(k,", ")+" }"}return String(e)};function px(t,e,n){var r=(n.quoteStyle||e)==="double"?'"':"'";return r+t+r}function p$(t){return Po.call(String(t),/"/g,"&quot;")}function Rg(t){return cs(t)==="[object Array]"&&(!ln||!(typeof t=="object"&&ln in t))}function m$(t){return cs(t)==="[object Date]"&&(!ln||!(typeof t=="object"&&ln in t))}function R3(t){return cs(t)==="[object RegExp]"&&(!ln||!(typeof t=="object"&&ln in t))}function g$(t){return cs(t)==="[object Error]"&&(!ln||!(typeof t=="object"&&ln in t))}function w$(t){return cs(t)==="[object String]"&&(!ln||!(typeof t=="object"&&ln in t))}function y$(t){return cs(t)==="[object Number]"&&(!ln||!(typeof t=="object"&&ln in t))}function v$(t){return cs(t)==="[object Boolean]"&&(!ln||!(typeof t=="object"&&ln in t))}function mx(t){if(zl)return t&&typeof t=="object"&&t instanceof Symbol;if(typeof t=="symbol")return!0;if(!t||typeof t!="object"||!Ag)return!1;try{return Ag.call(t),!0}catch{}return!1}function b$(t){if(!t||typeof t!="object"||!Sg)return!1;try{return Sg.call(t),!0}catch{}return!1}var x$=Object.prototype.hasOwnProperty||function(t){return t in this};function go(t,e){return x$.call(t,e)}function cs(t){return l$.call(t)}function C$(t){if(t.name)return t.name;var e=u$.call(c$.call(t),/^function\s*([\w$]+)/);return e?e[1]:null}function gx(t,e){if(t.indexOf)return t.indexOf(e);for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1}function E$(t){if(!op||!t||typeof t!="object")return!1;try{op.call(t);try{sp.call(t)}catch{return!0}return t instanceof Map}catch{}return!1}function _$(t){if(!Su||!t||typeof t!="object")return!1;try{Su.call(t,Su);try{Au.call(t,Au)}catch{return!0}return t instanceof WeakMap}catch{}return!1}function S$(t){if(!b3||!t||typeof t!="object")return!1;try{return b3.call(t),!0}catch{}return!1}function A$(t){if(!sp||!t||typeof t!="object")return!1;try{sp.call(t);try{op.call(t)}catch{return!0}return t instanceof Set}catch{}return!1}function $$(t){if(!Au||!t||typeof t!="object")return!1;try{Au.call(t,Au);try{Su.call(t,Su)}catch{return!0}return t instanceof WeakSet}catch{}return!1}function R$(t){return!t||typeof t!="object"?!1:typeof HTMLElement<"u"&&t instanceof HTMLElement?!0:typeof t.nodeName=="string"&&typeof t.getAttribute=="function"}function wx(t,e){if(t.length>e.maxStringLength){var n=t.length-e.maxStringLength,r="... "+n+" more character"+(n>1?"s":"");return wx(_y.call(t,0,e.maxStringLength),e)+r}var o=Po.call(Po.call(t,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,T$);return px(o,"single",e)}function T$(t){var e=t.charCodeAt(0),n={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return n?"\\"+n:"\\x"+(e<16?"0":"")+d$.call(e.toString(16))}function tu(t){return"Object("+t+")"}function q1(t){return t+" { ? }"}function T3(t,e,n,r){var o=r?Tg(n,r):ni.call(n,", ");return t+" ("+e+") {"+o+"}"}function P$(t){for(var e=0;e<t.length;e++)if(gx(t[e],`
`)>=0)return!1;return!0}function O$(t,e){var n;if(t.indent==="	")n="	";else if(typeof t.indent=="number"&&t.indent>0)n=ni.call(Array(t.indent+1)," ");else return null;return{base:n,prev:ni.call(Array(e+1),n)}}function Tg(t,e){if(t.length===0)return"";var n=`
`+e.prev+e.base;return n+ni.call(t,","+n)+`
`+e.prev}function Yf(t,e){var n=Rg(t),r=[];if(n){r.length=t.length;for(var o=0;o<t.length;o++)r[o]=go(t,o)?e(t[o],t):""}var i=typeof Z1=="function"?Z1(t):[],s;if(zl){s={};for(var a=0;a<i.length;a++)s["$"+i[a]]=i[a]}for(var l in t)go(t,l)&&(n&&String(Number(l))===l&&l<t.length||zl&&s["$"+l]instanceof Symbol||(fx.call(/[^\w$]/,l)?r.push(e(l,t)+": "+e(t[l],t)):r.push(l+": "+e(t[l],t))));if(typeof Z1=="function")for(var c=0;c<i.length;c++)hx.call(t,i[c])&&r.push("["+e(i[c])+"]: "+e(t[i[c]],t));return r}var yx=Sc,Ac=e$,I$=h$,k$=uf,Qf=yx("%WeakMap%",!0),Jf=yx("%Map%",!0),N$=Ac("WeakMap.prototype.get",!0),M$=Ac("WeakMap.prototype.set",!0),L$=Ac("WeakMap.prototype.has",!0),D$=Ac("Map.prototype.get",!0),j$=Ac("Map.prototype.set",!0),B$=Ac("Map.prototype.has",!0),Sy=function(t,e){for(var n=t,r;(r=n.next)!==null;n=r)if(r.key===e)return n.next=r.next,r.next=t.next,t.next=r,r},U$=function(t,e){var n=Sy(t,e);return n&&n.value},F$=function(t,e,n){var r=Sy(t,e);r?r.value=n:t.next={key:e,next:t.next,value:n}},W$=function(t,e){return!!Sy(t,e)},z$=function(){var e,n,r,o={assert:function(i){if(!o.has(i))throw new k$("Side channel does not contain "+I$(i))},get:function(i){if(Qf&&i&&(typeof i=="object"||typeof i=="function")){if(e)return N$(e,i)}else if(Jf){if(n)return D$(n,i)}else if(r)return U$(r,i)},has:function(i){if(Qf&&i&&(typeof i=="object"||typeof i=="function")){if(e)return L$(e,i)}else if(Jf){if(n)return B$(n,i)}else if(r)return W$(r,i);return!1},set:function(i,s){Qf&&i&&(typeof i=="object"||typeof i=="function")?(e||(e=new Qf),M$(e,i,s)):Jf?(n||(n=new Jf),j$(n,i,s)):(r||(r={key:{},next:null}),F$(r,i,s))}};return o},H$=String.prototype.replace,V$=/%20/g,G1={RFC1738:"RFC1738",RFC3986:"RFC3986"},Ay={default:G1.RFC3986,formatters:{RFC1738:function(t){return H$.call(t,V$,"+")},RFC3986:function(t){return String(t)}},RFC1738:G1.RFC1738,RFC3986:G1.RFC3986},Z$=Ay,K1=Object.prototype.hasOwnProperty,Is=Array.isArray,Kr=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),q$=function(e){for(;e.length>1;){var n=e.pop(),r=n.obj[n.prop];if(Is(r)){for(var o=[],i=0;i<r.length;++i)typeof r[i]<"u"&&o.push(r[i]);n.obj[n.prop]=o}}},vx=function(e,n){for(var r=n&&n.plainObjects?Object.create(null):{},o=0;o<e.length;++o)typeof e[o]<"u"&&(r[o]=e[o]);return r},G$=function t(e,n,r){if(!n)return e;if(typeof n!="object"){if(Is(e))e.push(n);else if(e&&typeof e=="object")(r&&(r.plainObjects||r.allowPrototypes)||!K1.call(Object.prototype,n))&&(e[n]=!0);else return[e,n];return e}if(!e||typeof e!="object")return[e].concat(n);var o=e;return Is(e)&&!Is(n)&&(o=vx(e,r)),Is(e)&&Is(n)?(n.forEach(function(i,s){if(K1.call(e,s)){var a=e[s];a&&typeof a=="object"&&i&&typeof i=="object"?e[s]=t(a,i,r):e.push(i)}else e[s]=i}),e):Object.keys(n).reduce(function(i,s){var a=n[s];return K1.call(i,s)?i[s]=t(i[s],a,r):i[s]=a,i},o)},K$=function(e,n){return Object.keys(n).reduce(function(r,o){return r[o]=n[o],r},e)},Y$=function(t,e,n){var r=t.replace(/\+/g," ");if(n==="iso-8859-1")return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch{return r}},Q$=function(e,n,r,o,i){if(e.length===0)return e;var s=e;if(typeof e=="symbol"?s=Symbol.prototype.toString.call(e):typeof e!="string"&&(s=String(e)),r==="iso-8859-1")return escape(s).replace(/%u[0-9a-f]{4}/gi,function(u){return"%26%23"+parseInt(u.slice(2),16)+"%3B"});for(var a="",l=0;l<s.length;++l){var c=s.charCodeAt(l);if(c===45||c===46||c===95||c===126||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122||i===Z$.RFC1738&&(c===40||c===41)){a+=s.charAt(l);continue}if(c<128){a=a+Kr[c];continue}if(c<2048){a=a+(Kr[192|c>>6]+Kr[128|c&63]);continue}if(c<55296||c>=57344){a=a+(Kr[224|c>>12]+Kr[128|c>>6&63]+Kr[128|c&63]);continue}l+=1,c=65536+((c&1023)<<10|s.charCodeAt(l)&1023),a+=Kr[240|c>>18]+Kr[128|c>>12&63]+Kr[128|c>>6&63]+Kr[128|c&63]}return a},J$=function(e){for(var n=[{obj:{o:e},prop:"o"}],r=[],o=0;o<n.length;++o)for(var i=n[o],s=i.obj[i.prop],a=Object.keys(s),l=0;l<a.length;++l){var c=a[l],u=s[c];typeof u=="object"&&u!==null&&r.indexOf(u)===-1&&(n.push({obj:s,prop:c}),r.push(u))}return q$(n),e},X$=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},eR=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},tR=function(e,n){return[].concat(e,n)},nR=function(e,n){if(Is(e)){for(var r=[],o=0;o<e.length;o+=1)r.push(n(e[o]));return r}return n(e)},bx={arrayToObject:vx,assign:K$,combine:tR,compact:J$,decode:Y$,encode:Q$,isBuffer:eR,isRegExp:X$,maybeMap:nR,merge:G$},xx=z$,Ah=bx,$u=Ay,rR=Object.prototype.hasOwnProperty,Cx={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,n){return e+"["+n+"]"},repeat:function(e){return e}},Jr=Array.isArray,iR=Array.prototype.push,Ex=function(t,e){iR.apply(t,Jr(e)?e:[e])},oR=Date.prototype.toISOString,P3=$u.default,Nt={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:Ah.encode,encodeValuesOnly:!1,format:P3,formatter:$u.formatters[P3],indices:!1,serializeDate:function(e){return oR.call(e)},skipNulls:!1,strictNullHandling:!1},sR=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},Y1={},aR=function t(e,n,r,o,i,s,a,l,c,u,d,h,g,m,w,C,y,v){for(var b=e,E=v,R=0,T=!1;(E=E.get(Y1))!==void 0&&!T;){var k=E.get(e);if(R+=1,typeof k<"u"){if(k===R)throw new RangeError("Cyclic object value");T=!0}typeof E.get(Y1)>"u"&&(R=0)}if(typeof u=="function"?b=u(n,b):b instanceof Date?b=g(b):r==="comma"&&Jr(b)&&(b=Ah.maybeMap(b,function(Q){return Q instanceof Date?g(Q):Q})),b===null){if(s)return c&&!C?c(n,Nt.encoder,y,"key",m):n;b=""}if(sR(b)||Ah.isBuffer(b)){if(c){var N=C?n:c(n,Nt.encoder,y,"key",m);return[w(N)+"="+w(c(b,Nt.encoder,y,"value",m))]}return[w(n)+"="+w(String(b))]}var W=[];if(typeof b>"u")return W;var D;if(r==="comma"&&Jr(b))C&&c&&(b=Ah.maybeMap(b,c)),D=[{value:b.length>0?b.join(",")||null:void 0}];else if(Jr(u))D=u;else{var H=Object.keys(b);D=d?H.sort(d):H}var he=l?n.replace(/\./g,"%2E"):n,ye=o&&Jr(b)&&b.length===1?he+"[]":he;if(i&&Jr(b)&&b.length===0)return ye+"[]";for(var ne=0;ne<D.length;++ne){var K=D[ne],q=typeof K=="object"&&typeof K.value<"u"?K.value:b[K];if(!(a&&q===null)){var fe=h&&l?K.replace(/\./g,"%2E"):K,j=Jr(b)?typeof r=="function"?r(ye,fe):ye:ye+(h?"."+fe:"["+fe+"]");v.set(e,R);var Y=xx();Y.set(Y1,v),Ex(W,t(q,j,r,o,i,s,a,l,r==="comma"&&C&&Jr(b)?null:c,u,d,h,g,m,w,C,y,Y))}}return W},lR=function(e){if(!e)return Nt;if(typeof e.allowEmptyArrays<"u"&&typeof e.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof e.encodeDotInKeys<"u"&&typeof e.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(e.encoder!==null&&typeof e.encoder<"u"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var n=e.charset||Nt.charset;if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=$u.default;if(typeof e.format<"u"){if(!rR.call($u.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var o=$u.formatters[r],i=Nt.filter;(typeof e.filter=="function"||Jr(e.filter))&&(i=e.filter);var s;if(e.arrayFormat in Cx?s=e.arrayFormat:"indices"in e?s=e.indices?"indices":"repeat":s=Nt.arrayFormat,"commaRoundTrip"in e&&typeof e.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var a=typeof e.allowDots>"u"?e.encodeDotInKeys===!0?!0:Nt.allowDots:!!e.allowDots;return{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:Nt.addQueryPrefix,allowDots:a,allowEmptyArrays:typeof e.allowEmptyArrays=="boolean"?!!e.allowEmptyArrays:Nt.allowEmptyArrays,arrayFormat:s,charset:n,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:Nt.charsetSentinel,commaRoundTrip:e.commaRoundTrip,delimiter:typeof e.delimiter>"u"?Nt.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:Nt.encode,encodeDotInKeys:typeof e.encodeDotInKeys=="boolean"?e.encodeDotInKeys:Nt.encodeDotInKeys,encoder:typeof e.encoder=="function"?e.encoder:Nt.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:Nt.encodeValuesOnly,filter:i,format:r,formatter:o,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:Nt.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:Nt.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:Nt.strictNullHandling}},cR=function(t,e){var n=t,r=lR(e),o,i;typeof r.filter=="function"?(i=r.filter,n=i("",n)):Jr(r.filter)&&(i=r.filter,o=i);var s=[];if(typeof n!="object"||n===null)return"";var a=Cx[r.arrayFormat],l=a==="comma"&&r.commaRoundTrip;o||(o=Object.keys(n)),r.sort&&o.sort(r.sort);for(var c=xx(),u=0;u<o.length;++u){var d=o[u];r.skipNulls&&n[d]===null||Ex(s,aR(n[d],d,a,l,r.allowEmptyArrays,r.strictNullHandling,r.skipNulls,r.encodeDotInKeys,r.encode?r.encoder:null,r.filter,r.sort,r.allowDots,r.serializeDate,r.format,r.formatter,r.encodeValuesOnly,r.charset,c))}var h=s.join(r.delimiter),g=r.addQueryPrefix===!0?"?":"";return r.charsetSentinel&&(r.charset==="iso-8859-1"?g+="utf8=%26%2310003%3B&":g+="utf8=%E2%9C%93&"),h.length>0?g+h:""},Hl=bx,Pg=Object.prototype.hasOwnProperty,uR=Array.isArray,_t={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decodeDotInKeys:!0,decoder:Hl.decode,delimiter:"&",depth:5,duplicates:"combine",ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},dR=function(t){return t.replace(/&#(\d+);/g,function(e,n){return String.fromCharCode(parseInt(n,10))})},_x=function(t,e){return t&&typeof t=="string"&&e.comma&&t.indexOf(",")>-1?t.split(","):t},fR="utf8=%26%2310003%3B",hR="utf8=%E2%9C%93",pR=function(e,n){var r={__proto__:null},o=n.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=n.parameterLimit===1/0?void 0:n.parameterLimit,s=o.split(n.delimiter,i),a=-1,l,c=n.charset;if(n.charsetSentinel)for(l=0;l<s.length;++l)s[l].indexOf("utf8=")===0&&(s[l]===hR?c="utf-8":s[l]===fR&&(c="iso-8859-1"),a=l,l=s.length);for(l=0;l<s.length;++l)if(l!==a){var u=s[l],d=u.indexOf("]="),h=d===-1?u.indexOf("="):d+1,g,m;h===-1?(g=n.decoder(u,_t.decoder,c,"key"),m=n.strictNullHandling?null:""):(g=n.decoder(u.slice(0,h),_t.decoder,c,"key"),m=Hl.maybeMap(_x(u.slice(h+1),n),function(C){return n.decoder(C,_t.decoder,c,"value")})),m&&n.interpretNumericEntities&&c==="iso-8859-1"&&(m=dR(m)),u.indexOf("[]=")>-1&&(m=uR(m)?[m]:m);var w=Pg.call(r,g);w&&n.duplicates==="combine"?r[g]=Hl.combine(r[g],m):(!w||n.duplicates==="last")&&(r[g]=m)}return r},mR=function(t,e,n,r){for(var o=r?e:_x(e,n),i=t.length-1;i>=0;--i){var s,a=t[i];if(a==="[]"&&n.parseArrays)s=n.allowEmptyArrays&&o===""?[]:[].concat(o);else{s=n.plainObjects?Object.create(null):{};var l=a.charAt(0)==="["&&a.charAt(a.length-1)==="]"?a.slice(1,-1):a,c=n.decodeDotInKeys?l.replace(/%2E/g,"."):l,u=parseInt(c,10);!n.parseArrays&&c===""?s={0:o}:!isNaN(u)&&a!==c&&String(u)===c&&u>=0&&n.parseArrays&&u<=n.arrayLimit?(s=[],s[u]=o):c!=="__proto__"&&(s[c]=o)}o=s}return o},gR=function(e,n,r,o){if(e){var i=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,s=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,l=r.depth>0&&s.exec(i),c=l?i.slice(0,l.index):i,u=[];if(c){if(!r.plainObjects&&Pg.call(Object.prototype,c)&&!r.allowPrototypes)return;u.push(c)}for(var d=0;r.depth>0&&(l=a.exec(i))!==null&&d<r.depth;){if(d+=1,!r.plainObjects&&Pg.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+i.slice(l.index)+"]"),mR(u,n,r,o)}},wR=function(e){if(!e)return _t;if(typeof e.allowEmptyArrays<"u"&&typeof e.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof e.decodeDotInKeys<"u"&&typeof e.decodeDotInKeys!="boolean")throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(e.decoder!==null&&typeof e.decoder<"u"&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=typeof e.charset>"u"?_t.charset:e.charset,r=typeof e.duplicates>"u"?_t.duplicates:e.duplicates;if(r!=="combine"&&r!=="first"&&r!=="last")throw new TypeError("The duplicates option must be either combine, first, or last");var o=typeof e.allowDots>"u"?e.decodeDotInKeys===!0?!0:_t.allowDots:!!e.allowDots;return{allowDots:o,allowEmptyArrays:typeof e.allowEmptyArrays=="boolean"?!!e.allowEmptyArrays:_t.allowEmptyArrays,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:_t.allowPrototypes,allowSparse:typeof e.allowSparse=="boolean"?e.allowSparse:_t.allowSparse,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:_t.arrayLimit,charset:n,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:_t.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:_t.comma,decodeDotInKeys:typeof e.decodeDotInKeys=="boolean"?e.decodeDotInKeys:_t.decodeDotInKeys,decoder:typeof e.decoder=="function"?e.decoder:_t.decoder,delimiter:typeof e.delimiter=="string"||Hl.isRegExp(e.delimiter)?e.delimiter:_t.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:_t.depth,duplicates:r,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:_t.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:_t.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:_t.plainObjects,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:_t.strictNullHandling}},yR=function(t,e){var n=wR(e);if(t===""||t===null||typeof t>"u")return n.plainObjects?Object.create(null):{};for(var r=typeof t=="string"?pR(t,n):t,o=n.plainObjects?Object.create(null):{},i=Object.keys(r),s=0;s<i.length;++s){var a=i[s],l=gR(a,r[a],n,typeof t=="string");o=Hl.merge(o,l,n)}return n.allowSparse===!0?o:Hl.compact(o)},vR=cR,bR=yR,xR=Ay,O3={formats:xR,parse:bR,stringify:vR},Sx={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(t,e){(function(n,r){t.exports=r()})(Mi,function(){var n={};n.version="0.2.0";var r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};n.configure=function(m){var w,C;for(w in m)C=m[w],C!==void 0&&m.hasOwnProperty(w)&&(r[w]=C);return this},n.status=null,n.set=function(m){var w=n.isStarted();m=o(m,r.minimum,1),n.status=m===1?null:m;var C=n.render(!w),y=C.querySelector(r.barSelector),v=r.speed,b=r.easing;return C.offsetWidth,a(function(E){r.positionUsing===""&&(r.positionUsing=n.getPositioningCSS()),l(y,s(m,v,b)),m===1?(l(C,{transition:"none",opacity:1}),C.offsetWidth,setTimeout(function(){l(C,{transition:"all "+v+"ms linear",opacity:0}),setTimeout(function(){n.remove(),E()},v)},v)):setTimeout(E,v)}),this},n.isStarted=function(){return typeof n.status=="number"},n.start=function(){n.status||n.set(0);var m=function(){setTimeout(function(){n.status&&(n.trickle(),m())},r.trickleSpeed)};return r.trickle&&m(),this},n.done=function(m){return!m&&!n.status?this:n.inc(.3+.5*Math.random()).set(1)},n.inc=function(m){var w=n.status;return w?(typeof m!="number"&&(m=(1-w)*o(Math.random()*w,.1,.95)),w=o(w+m,0,.994),n.set(w)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},function(){var m=0,w=0;n.promise=function(C){return!C||C.state()==="resolved"?this:(w===0&&n.start(),m++,w++,C.always(function(){w--,w===0?(m=0,n.done()):n.set((m-w)/m)}),this)}}(),n.render=function(m){if(n.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var w=document.createElement("div");w.id="nprogress",w.innerHTML=r.template;var C=w.querySelector(r.barSelector),y=m?"-100":i(n.status||0),v=document.querySelector(r.parent),b;return l(C,{transition:"all 0 linear",transform:"translate3d("+y+"%,0,0)"}),r.showSpinner||(b=w.querySelector(r.spinnerSelector),b&&g(b)),v!=document.body&&u(v,"nprogress-custom-parent"),v.appendChild(w),w},n.remove=function(){d(document.documentElement,"nprogress-busy"),d(document.querySelector(r.parent),"nprogress-custom-parent");var m=document.getElementById("nprogress");m&&g(m)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var m=document.body.style,w="WebkitTransform"in m?"Webkit":"MozTransform"in m?"Moz":"msTransform"in m?"ms":"OTransform"in m?"O":"";return w+"Perspective"in m?"translate3d":w+"Transform"in m?"translate":"margin"};function o(m,w,C){return m<w?w:m>C?C:m}function i(m){return(-1+m)*100}function s(m,w,C){var y;return r.positionUsing==="translate3d"?y={transform:"translate3d("+i(m)+"%,0,0)"}:r.positionUsing==="translate"?y={transform:"translate("+i(m)+"%,0)"}:y={"margin-left":i(m)+"%"},y.transition="all "+w+"ms "+C,y}var a=function(){var m=[];function w(){var C=m.shift();C&&C(w)}return function(C){m.push(C),m.length==1&&w()}}(),l=function(){var m=["Webkit","O","Moz","ms"],w={};function C(E){return E.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(R,T){return T.toUpperCase()})}function y(E){var R=document.body.style;if(E in R)return E;for(var T=m.length,k=E.charAt(0).toUpperCase()+E.slice(1),N;T--;)if(N=m[T]+k,N in R)return N;return E}function v(E){return E=C(E),w[E]||(w[E]=y(E))}function b(E,R,T){R=v(R),E.style[R]=T}return function(E,R){var T=arguments,k,N;if(T.length==2)for(k in R)N=R[k],N!==void 0&&R.hasOwnProperty(k)&&b(E,k,N);else b(E,T[1],T[2])}}();function c(m,w){var C=typeof m=="string"?m:h(m);return C.indexOf(" "+w+" ")>=0}function u(m,w){var C=h(m),y=C+w;c(C,w)||(m.className=y.substring(1))}function d(m,w){var C=h(m),y;c(m,w)&&(y=C.replace(" "+w+" "," "),m.className=y.substring(1,y.length-1))}function h(m){return(" "+(m.className||"")+" ").replace(/\s+/gi," ")}function g(m){m&&m.parentNode&&m.parentNode.removeChild(m)}return n})})(Sx);var CR=Sx.exports;const ii=os(CR);function Ax(t,e){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>t.apply(this,r),e)}}function no(t,e){return document.dispatchEvent(new CustomEvent(`inertia:${t}`,e))}var ER=t=>no("before",{cancelable:!0,detail:{visit:t}}),_R=t=>no("error",{detail:{errors:t}}),SR=t=>no("exception",{cancelable:!0,detail:{exception:t}}),I3=t=>no("finish",{detail:{visit:t}}),AR=t=>no("invalid",{cancelable:!0,detail:{response:t}}),nu=t=>no("navigate",{detail:{page:t}}),$R=t=>no("progress",{detail:{progress:t}}),RR=t=>no("start",{detail:{visit:t}}),TR=t=>no("success",{detail:{page:t}});function Og(t){return t instanceof File||t instanceof Blob||t instanceof FileList&&t.length>0||t instanceof FormData&&Array.from(t.values()).some(e=>Og(e))||typeof t=="object"&&t!==null&&Object.values(t).some(e=>Og(e))}function $x(t,e=new FormData,n=null){t=t||{};for(let r in t)Object.prototype.hasOwnProperty.call(t,r)&&Tx(e,Rx(n,r),t[r]);return e}function Rx(t,e){return t?t+"["+e+"]":e}function Tx(t,e,n){if(Array.isArray(n))return Array.from(n.keys()).forEach(r=>Tx(t,Rx(e,r.toString()),n[r]));if(n instanceof Date)return t.append(e,n.toISOString());if(n instanceof File)return t.append(e,n,n.name);if(n instanceof Blob)return t.append(e,n);if(typeof n=="boolean")return t.append(e,n?"1":"0");if(typeof n=="string")return t.append(e,n);if(typeof n=="number")return t.append(e,`${n}`);if(n==null)return t.append(e,"");$x(n,t,e)}var PR={modal:null,listener:null,show(t){typeof t=="object"&&(t=`All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(t)}`);let e=document.createElement("html");e.innerHTML=t,e.querySelectorAll("a").forEach(r=>r.setAttribute("target","_top")),this.modal=document.createElement("div"),this.modal.style.position="fixed",this.modal.style.width="100vw",this.modal.style.height="100vh",this.modal.style.padding="50px",this.modal.style.boxSizing="border-box",this.modal.style.backgroundColor="rgba(0, 0, 0, .6)",this.modal.style.zIndex=2e5,this.modal.addEventListener("click",()=>this.hide());let n=document.createElement("iframe");if(n.style.backgroundColor="white",n.style.borderRadius="5px",n.style.width="100%",n.style.height="100%",this.modal.appendChild(n),document.body.prepend(this.modal),document.body.style.overflow="hidden",!n.contentWindow)throw new Error("iframe not yet ready.");n.contentWindow.document.open(),n.contentWindow.document.write(e.outerHTML),n.contentWindow.document.close(),this.listener=this.hideOnEscape.bind(this),document.addEventListener("keydown",this.listener)},hide(){this.modal.outerHTML="",this.modal=null,document.body.style.overflow="visible",document.removeEventListener("keydown",this.listener)},hideOnEscape(t){t.keyCode===27&&this.hide()}};function za(t){return new URL(t.toString(),window.location.toString())}function Px(t,e,n,r="brackets"){let o=/^https?:\/\//.test(e.toString()),i=o||e.toString().startsWith("/"),s=!i&&!e.toString().startsWith("#")&&!e.toString().startsWith("?"),a=e.toString().includes("?")||t==="get"&&Object.keys(n).length,l=e.toString().includes("#"),c=new URL(e.toString(),"http://localhost");return t==="get"&&Object.keys(n).length&&(c.search=O3.stringify(iA(O3.parse(c.search,{ignoreQueryPrefix:!0}),n),{encodeValuesOnly:!0,arrayFormat:r}),n={}),[[o?`${c.protocol}//${c.host}`:"",i?c.pathname:"",s?c.pathname.substring(1):"",a?c.search:"",l?c.hash:""].join(""),n]}function ru(t){return t=new URL(t.href),t.hash="",t}var k3=typeof window>"u",OR=class{constructor(){this.visitId=null}init({initialPage:e,resolveComponent:n,swapComponent:r}){this.page=e,this.resolveComponent=n,this.swapComponent=r,this.setNavigationType(),this.clearRememberedStateOnReload(),this.isBackForwardVisit()?this.handleBackForwardVisit(this.page):this.isLocationVisit()?this.handleLocationVisit(this.page):this.handleInitialPageVisit(this.page),this.setupEventListeners()}setNavigationType(){this.navigationType=window.performance&&window.performance.getEntriesByType("navigation").length>0?window.performance.getEntriesByType("navigation")[0].type:"navigate"}clearRememberedStateOnReload(){var e;this.navigationType==="reload"&&((e=window.history.state)!=null&&e.rememberedState)&&delete window.history.state.rememberedState}handleInitialPageVisit(e){this.page.url+=window.location.hash,this.setPage(e,{preserveState:!0}).then(()=>nu(e))}setupEventListeners(){window.addEventListener("popstate",this.handlePopstateEvent.bind(this)),document.addEventListener("scroll",Ax(this.handleScrollEvent.bind(this),100),!0)}scrollRegions(){return document.querySelectorAll("[scroll-region]")}handleScrollEvent(e){typeof e.target.hasAttribute=="function"&&e.target.hasAttribute("scroll-region")&&this.saveScrollPositions()}saveScrollPositions(){this.replaceState({...this.page,scrollRegions:Array.from(this.scrollRegions()).map(e=>({top:e.scrollTop,left:e.scrollLeft}))})}resetScrollPositions(){window.scrollTo(0,0),this.scrollRegions().forEach(e=>{typeof e.scrollTo=="function"?e.scrollTo(0,0):(e.scrollTop=0,e.scrollLeft=0)}),this.saveScrollPositions(),window.location.hash&&setTimeout(()=>{var e;return(e=document.getElementById(window.location.hash.slice(1)))==null?void 0:e.scrollIntoView()})}restoreScrollPositions(){this.page.scrollRegions&&this.scrollRegions().forEach((e,n)=>{let r=this.page.scrollRegions[n];if(r)typeof e.scrollTo=="function"?e.scrollTo(r.left,r.top):(e.scrollTop=r.top,e.scrollLeft=r.left);else return})}isBackForwardVisit(){return window.history.state&&this.navigationType==="back_forward"}handleBackForwardVisit(e){window.history.state.version=e.version,this.setPage(window.history.state,{preserveScroll:!0,preserveState:!0}).then(()=>{this.restoreScrollPositions(),nu(e)})}locationVisit(e,n){try{let r={preserveScroll:n};window.sessionStorage.setItem("inertiaLocationVisit",JSON.stringify(r)),window.location.href=e.href,ru(window.location).href===ru(e).href&&window.location.reload()}catch{return!1}}isLocationVisit(){try{return window.sessionStorage.getItem("inertiaLocationVisit")!==null}catch{return!1}}handleLocationVisit(e){var r,o;let n=JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit")||"");window.sessionStorage.removeItem("inertiaLocationVisit"),e.url+=window.location.hash,e.rememberedState=((r=window.history.state)==null?void 0:r.rememberedState)??{},e.scrollRegions=((o=window.history.state)==null?void 0:o.scrollRegions)??[],this.setPage(e,{preserveScroll:n.preserveScroll,preserveState:!0}).then(()=>{n.preserveScroll&&this.restoreScrollPositions(),nu(e)})}isLocationVisitResponse(e){return!!(e&&e.status===409&&e.headers["x-inertia-location"])}isInertiaResponse(e){return!!(e!=null&&e.headers["x-inertia"])}createVisitId(){return this.visitId={},this.visitId}cancelVisit(e,{cancelled:n=!1,interrupted:r=!1}){e&&!e.completed&&!e.cancelled&&!e.interrupted&&(e.cancelToken.abort(),e.onCancel(),e.completed=!1,e.cancelled=n,e.interrupted=r,I3(e),e.onFinish(e))}finishVisit(e){!e.cancelled&&!e.interrupted&&(e.completed=!0,e.cancelled=!1,e.interrupted=!1,I3(e),e.onFinish(e))}resolvePreserveOption(e,n){return typeof e=="function"?e(n):e==="errors"?Object.keys(n.props.errors||{}).length>0:e}cancel(){this.activeVisit&&this.cancelVisit(this.activeVisit,{cancelled:!0})}visit(e,{method:n="get",data:r={},replace:o=!1,preserveScroll:i=!1,preserveState:s=!1,only:a=[],headers:l={},errorBag:c="",forceFormData:u=!1,onCancelToken:d=()=>{},onBefore:h=()=>{},onStart:g=()=>{},onProgress:m=()=>{},onFinish:w=()=>{},onCancel:C=()=>{},onSuccess:y=()=>{},onError:v=()=>{},queryStringArrayFormat:b="brackets"}={}){let E=typeof e=="string"?za(e):e;if((Og(r)||u)&&!(r instanceof FormData)&&(r=$x(r)),!(r instanceof FormData)){let[k,N]=Px(n,E,r,b);E=za(k),r=N}let R={url:E,method:n,data:r,replace:o,preserveScroll:i,preserveState:s,only:a,headers:l,errorBag:c,forceFormData:u,queryStringArrayFormat:b,cancelled:!1,completed:!1,interrupted:!1};if(h(R)===!1||!ER(R))return;this.activeVisit&&this.cancelVisit(this.activeVisit,{interrupted:!0}),this.saveScrollPositions();let T=this.createVisitId();this.activeVisit={...R,onCancelToken:d,onBefore:h,onStart:g,onProgress:m,onFinish:w,onCancel:C,onSuccess:y,onError:v,queryStringArrayFormat:b,cancelToken:new AbortController},d({cancel:()=>{this.activeVisit&&this.cancelVisit(this.activeVisit,{cancelled:!0})}}),RR(R),g(R),Om({method:n,url:ru(E).href,data:n==="get"?{}:r,params:n==="get"?r:{},signal:this.activeVisit.cancelToken.signal,headers:{...l,Accept:"text/html, application/xhtml+xml","X-Requested-With":"XMLHttpRequest","X-Inertia":!0,...a.length?{"X-Inertia-Partial-Component":this.page.component,"X-Inertia-Partial-Data":a.join(",")}:{},...c&&c.length?{"X-Inertia-Error-Bag":c}:{},...this.page.version?{"X-Inertia-Version":this.page.version}:{}},onUploadProgress:k=>{r instanceof FormData&&(k.percentage=k.progress?Math.round(k.progress*100):0,$R(k),m(k))}}).then(k=>{var H;if(!this.isInertiaResponse(k))return Promise.reject({response:k});let N=k.data;a.length&&N.component===this.page.component&&(N.props={...this.page.props,...N.props}),i=this.resolvePreserveOption(i,N),s=this.resolvePreserveOption(s,N),s&&((H=window.history.state)!=null&&H.rememberedState)&&N.component===this.page.component&&(N.rememberedState=window.history.state.rememberedState);let W=E,D=za(N.url);return W.hash&&!D.hash&&ru(W).href===D.href&&(D.hash=W.hash,N.url=D.href),this.setPage(N,{visitId:T,replace:o,preserveScroll:i,preserveState:s})}).then(()=>{let k=this.page.props.errors||{};if(Object.keys(k).length>0){let N=c?k[c]?k[c]:{}:k;return _R(N),v(N)}return TR(this.page),y(this.page)}).catch(k=>{if(this.isInertiaResponse(k.response))return this.setPage(k.response.data,{visitId:T});if(this.isLocationVisitResponse(k.response)){let N=za(k.response.headers["x-inertia-location"]),W=E;W.hash&&!N.hash&&ru(W).href===N.href&&(N.hash=W.hash),this.locationVisit(N,i===!0)}else if(k.response)AR(k.response)&&PR.show(k.response.data);else return Promise.reject(k)}).then(()=>{this.activeVisit&&this.finishVisit(this.activeVisit)}).catch(k=>{if(!Om.isCancel(k)){let N=SR(k);if(this.activeVisit&&this.finishVisit(this.activeVisit),N)return Promise.reject(k)}})}setPage(e,{visitId:n=this.createVisitId(),replace:r=!1,preserveScroll:o=!1,preserveState:i=!1}={}){return Promise.resolve(this.resolveComponent(e.component)).then(s=>{n===this.visitId&&(e.scrollRegions=e.scrollRegions||[],e.rememberedState=e.rememberedState||{},r=r||za(e.url).href===window.location.href,r?this.replaceState(e):this.pushState(e),this.swapComponent({component:s,page:e,preserveState:i}).then(()=>{o||this.resetScrollPositions(),r||nu(e)}))})}pushState(e){this.page=e,window.history.pushState(e,"",e.url)}replaceState(e){this.page=e,window.history.replaceState(e,"",e.url)}handlePopstateEvent(e){if(e.state!==null){let n=e.state,r=this.createVisitId();Promise.resolve(this.resolveComponent(n.component)).then(o=>{r===this.visitId&&(this.page=n,this.swapComponent({component:o,page:n,preserveState:!1}).then(()=>{this.restoreScrollPositions(),nu(n)}))})}else{let n=za(this.page.url);n.hash=window.location.hash,this.replaceState({...this.page,url:n.href}),this.resetScrollPositions()}}get(e,n={},r={}){return this.visit(e,{...r,method:"get",data:n})}reload(e={}){return this.visit(window.location.href,{...e,preserveScroll:!0,preserveState:!0})}replace(e,n={}){return console.warn(`Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia.${n.method??"get"}() instead.`),this.visit(e,{preserveState:!0,...n,replace:!0})}post(e,n={},r={}){return this.visit(e,{preserveState:!0,...r,method:"post",data:n})}put(e,n={},r={}){return this.visit(e,{preserveState:!0,...r,method:"put",data:n})}patch(e,n={},r={}){return this.visit(e,{preserveState:!0,...r,method:"patch",data:n})}delete(e,n={}){return this.visit(e,{preserveState:!0,...n,method:"delete"})}remember(e,n="default"){var r;k3||this.replaceState({...this.page,rememberedState:{...(r=this.page)==null?void 0:r.rememberedState,[n]:e}})}restore(e="default"){var n,r;if(!k3)return(r=(n=window.history.state)==null?void 0:n.rememberedState)==null?void 0:r[e]}on(e,n){let r=o=>{let i=n(o);o.cancelable&&!o.defaultPrevented&&i===!1&&o.preventDefault()};return document.addEventListener(`inertia:${e}`,r),()=>document.removeEventListener(`inertia:${e}`,r)}},IR={buildDOMElement(t){let e=document.createElement("template");e.innerHTML=t;let n=e.content.firstChild;if(!t.startsWith("<script "))return n;let r=document.createElement("script");return r.innerHTML=n.innerHTML,n.getAttributeNames().forEach(o=>{r.setAttribute(o,n.getAttribute(o)||"")}),r},isInertiaManagedElement(t){return t.nodeType===Node.ELEMENT_NODE&&t.getAttribute("inertia")!==null},findMatchingElementIndex(t,e){let n=t.getAttribute("inertia");return n!==null?e.findIndex(r=>r.getAttribute("inertia")===n):-1},update:Ax(function(t){let e=t.map(n=>this.buildDOMElement(n));Array.from(document.head.childNodes).filter(n=>this.isInertiaManagedElement(n)).forEach(n=>{var i,s;let r=this.findMatchingElementIndex(n,e);if(r===-1){(i=n==null?void 0:n.parentNode)==null||i.removeChild(n);return}let o=e.splice(r,1)[0];o&&!n.isEqualNode(o)&&((s=n==null?void 0:n.parentNode)==null||s.replaceChild(o,n))}),e.forEach(n=>document.head.appendChild(n))},1)};function kR(t,e,n){let r={},o=0;function i(){let u=o+=1;return r[u]=[],u.toString()}function s(u){u===null||Object.keys(r).indexOf(u)===-1||(delete r[u],c())}function a(u,d=[]){u!==null&&Object.keys(r).indexOf(u)>-1&&(r[u]=d),c()}function l(){let u=e(""),d={...u?{title:`<title inertia="">${u}</title>`}:{}},h=Object.values(r).reduce((g,m)=>g.concat(m),[]).reduce((g,m)=>{if(m.indexOf("<")===-1)return g;if(m.indexOf("<title ")===0){let C=m.match(/(<title [^>]+>)(.*?)(<\/title>)/);return g.title=C?`${C[1]}${e(C[2])}${C[3]}`:m,g}let w=m.match(/ inertia="[^"]+"/);return w?g[w[0]]=m:g[Object.keys(g).length]=m,g},d);return Object.values(h)}function c(){t?n(l()):IR.update(l())}return c(),{forceUpdate:c,createProvider:function(){let u=i();return{update:d=>a(u,d),disconnect:()=>s(u)}}}}var Ox=null;function NR(t){document.addEventListener("inertia:start",MR.bind(null,t)),document.addEventListener("inertia:progress",LR),document.addEventListener("inertia:finish",DR)}function MR(t){Ox=setTimeout(()=>ii.start(),t)}function LR(t){var e;ii.isStarted()&&((e=t.detail.progress)!=null&&e.percentage)&&ii.set(Math.max(ii.status,t.detail.progress.percentage/100*.9))}function DR(t){if(clearTimeout(Ox),ii.isStarted())t.detail.visit.completed?ii.done():t.detail.visit.interrupted?ii.set(0):t.detail.visit.cancelled&&(ii.done(),ii.remove());else return}function jR(t){let e=document.createElement("style");e.type="text/css",e.textContent=`
    #nprogress {
      pointer-events: none;
    }

    #nprogress .bar {
      background: ${t};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${t}, 0 0 5px ${t};
      opacity: 1.0;

      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }

    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${t};
      border-left-color: ${t};
      border-radius: 50%;

      -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
    }

    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }

    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `,document.head.appendChild(e)}function BR({delay:t=250,color:e="#29d",includeCSS:n=!0,showSpinner:r=!1}={}){NR(t),ii.configure({showSpinner:r}),n&&jR(e)}function UR(t){let e=t.currentTarget.tagName.toLowerCase()==="a";return!(t.target&&(t==null?void 0:t.target).isContentEditable||t.defaultPrevented||e&&t.which>1||e&&t.altKey||e&&t.ctrlKey||e&&t.metaKey||e&&t.shiftKey)}var ap=new OR,lp={exports:{}};lp.exports;(function(t,e){var n=200,r="__lodash_hash_undefined__",o=1,i=2,s=9007199254740991,a="[object Arguments]",l="[object Array]",c="[object AsyncFunction]",u="[object Boolean]",d="[object Date]",h="[object Error]",g="[object Function]",m="[object GeneratorFunction]",w="[object Map]",C="[object Number]",y="[object Null]",v="[object Object]",b="[object Promise]",E="[object Proxy]",R="[object RegExp]",T="[object Set]",k="[object String]",N="[object Symbol]",W="[object Undefined]",D="[object WeakMap]",H="[object ArrayBuffer]",he="[object DataView]",ye="[object Float32Array]",ne="[object Float64Array]",K="[object Int8Array]",q="[object Int16Array]",fe="[object Int32Array]",j="[object Uint8Array]",Y="[object Uint8ClampedArray]",Q="[object Uint16Array]",re="[object Uint32Array]",ge=/[\\^$.*+?()[\]{}|]/g,Xe=/^\[object .+?Constructor\]$/,Ke=/^(?:0|[1-9]\d*)$/,$e={};$e[ye]=$e[ne]=$e[K]=$e[q]=$e[fe]=$e[j]=$e[Y]=$e[Q]=$e[re]=!0,$e[a]=$e[l]=$e[H]=$e[u]=$e[he]=$e[d]=$e[h]=$e[g]=$e[w]=$e[C]=$e[v]=$e[R]=$e[T]=$e[k]=$e[D]=!1;var Rt=typeof Mi=="object"&&Mi&&Mi.Object===Object&&Mi,Vt=typeof self=="object"&&self&&self.Object===Object&&self,vt=Rt||Vt||Function("return this")(),En=e&&!e.nodeType&&e,Tt=En&&!0&&t&&!t.nodeType&&t,Ln=Tt&&Tt.exports===En,tr=Ln&&Rt.process,_n=function(){try{return tr&&tr.binding&&tr.binding("util")}catch{}}(),oo=_n&&_n.isTypedArray;function Q0(A,I){for(var Z=-1,ce=A==null?0:A.length,lt=0,ke=[];++Z<ce;){var bt=A[Z];I(bt,Z,A)&&(ke[lt++]=bt)}return ke}function J0(A,I){for(var Z=-1,ce=I.length,lt=A.length;++Z<ce;)A[lt+Z]=I[Z];return A}function Uc(A,I){for(var Z=-1,ce=A==null?0:A.length;++Z<ce;)if(I(A[Z],Z,A))return!0;return!1}function X0(A,I){for(var Z=-1,ce=Array(A);++Z<A;)ce[Z]=I(Z);return ce}function e1(A){return function(I){return A(I)}}function Sf(A,I){return A.has(I)}function ja(A,I){return A==null?void 0:A[I]}function nr(A){var I=-1,Z=Array(A.size);return A.forEach(function(ce,lt){Z[++I]=[lt,ce]}),Z}function Fc(A,I){return function(Z){return A(I(Z))}}function t1(A){var I=-1,Z=Array(A.size);return A.forEach(function(ce){Z[++I]=ce}),Z}var qr=Array.prototype,n1=Function.prototype,x=Object.prototype,f=vt["__core-js_shared__"],p=n1.toString,_=x.hasOwnProperty,P=function(){var A=/[^.]+$/.exec(f&&f.keys&&f.keys.IE_PROTO||"");return A?"Symbol(src)_1."+A:""}(),M=x.toString,F=RegExp("^"+p.call(_).replace(ge,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ie=Ln?vt.Buffer:void 0,nt=vt.Symbol,rt=vt.Uint8Array,at=x.propertyIsEnumerable,Ye=qr.splice,ws=nt?nt.toStringTag:void 0,Rv=Object.getOwnPropertySymbols,i7=Ie?Ie.isBuffer:void 0,o7=Fc(Object.keys,Object),r1=Ba(vt,"DataView"),Wc=Ba(vt,"Map"),i1=Ba(vt,"Promise"),o1=Ba(vt,"Set"),s1=Ba(vt,"WeakMap"),zc=Ba(Object,"create"),s7=bs(r1),a7=bs(Wc),l7=bs(i1),c7=bs(o1),u7=bs(s1),Tv=nt?nt.prototype:void 0,a1=Tv?Tv.valueOf:void 0;function ys(A){var I=-1,Z=A==null?0:A.length;for(this.clear();++I<Z;){var ce=A[I];this.set(ce[0],ce[1])}}function d7(){this.__data__=zc?zc(null):{},this.size=0}function f7(A){var I=this.has(A)&&delete this.__data__[A];return this.size-=I?1:0,I}function h7(A){var I=this.__data__;if(zc){var Z=I[A];return Z===r?void 0:Z}return _.call(I,A)?I[A]:void 0}function p7(A){var I=this.__data__;return zc?I[A]!==void 0:_.call(I,A)}function m7(A,I){var Z=this.__data__;return this.size+=this.has(A)?0:1,Z[A]=zc&&I===void 0?r:I,this}ys.prototype.clear=d7,ys.prototype.delete=f7,ys.prototype.get=h7,ys.prototype.has=p7,ys.prototype.set=m7;function Si(A){var I=-1,Z=A==null?0:A.length;for(this.clear();++I<Z;){var ce=A[I];this.set(ce[0],ce[1])}}function g7(){this.__data__=[],this.size=0}function w7(A){var I=this.__data__,Z=$f(I,A);if(Z<0)return!1;var ce=I.length-1;return Z==ce?I.pop():Ye.call(I,Z,1),--this.size,!0}function y7(A){var I=this.__data__,Z=$f(I,A);return Z<0?void 0:I[Z][1]}function v7(A){return $f(this.__data__,A)>-1}function b7(A,I){var Z=this.__data__,ce=$f(Z,A);return ce<0?(++this.size,Z.push([A,I])):Z[ce][1]=I,this}Si.prototype.clear=g7,Si.prototype.delete=w7,Si.prototype.get=y7,Si.prototype.has=v7,Si.prototype.set=b7;function vs(A){var I=-1,Z=A==null?0:A.length;for(this.clear();++I<Z;){var ce=A[I];this.set(ce[0],ce[1])}}function x7(){this.size=0,this.__data__={hash:new ys,map:new(Wc||Si),string:new ys}}function C7(A){var I=Rf(this,A).delete(A);return this.size-=I?1:0,I}function E7(A){return Rf(this,A).get(A)}function _7(A){return Rf(this,A).has(A)}function S7(A,I){var Z=Rf(this,A),ce=Z.size;return Z.set(A,I),this.size+=Z.size==ce?0:1,this}vs.prototype.clear=x7,vs.prototype.delete=C7,vs.prototype.get=E7,vs.prototype.has=_7,vs.prototype.set=S7;function Af(A){var I=-1,Z=A==null?0:A.length;for(this.__data__=new vs;++I<Z;)this.add(A[I])}function A7(A){return this.__data__.set(A,r),this}function $7(A){return this.__data__.has(A)}Af.prototype.add=Af.prototype.push=A7,Af.prototype.has=$7;function so(A){var I=this.__data__=new Si(A);this.size=I.size}function R7(){this.__data__=new Si,this.size=0}function T7(A){var I=this.__data__,Z=I.delete(A);return this.size=I.size,Z}function P7(A){return this.__data__.get(A)}function O7(A){return this.__data__.has(A)}function I7(A,I){var Z=this.__data__;if(Z instanceof Si){var ce=Z.__data__;if(!Wc||ce.length<n-1)return ce.push([A,I]),this.size=++Z.size,this;Z=this.__data__=new vs(ce)}return Z.set(A,I),this.size=Z.size,this}so.prototype.clear=R7,so.prototype.delete=T7,so.prototype.get=P7,so.prototype.has=O7,so.prototype.set=I7;function k7(A,I){var Z=Tf(A),ce=!Z&&G7(A),lt=!Z&&!ce&&l1(A),ke=!Z&&!ce&&!lt&&jv(A),bt=Z||ce||lt||ke,jt=bt?X0(A.length,String):[],Zt=jt.length;for(var ht in A)(I||_.call(A,ht))&&!(bt&&(ht=="length"||lt&&(ht=="offset"||ht=="parent")||ke&&(ht=="buffer"||ht=="byteLength"||ht=="byteOffset")||z7(ht,Zt)))&&jt.push(ht);return jt}function $f(A,I){for(var Z=A.length;Z--;)if(Nv(A[Z][0],I))return Z;return-1}function N7(A,I,Z){var ce=I(A);return Tf(A)?ce:J0(ce,Z(A))}function Hc(A){return A==null?A===void 0?W:y:ws&&ws in Object(A)?F7(A):q7(A)}function Pv(A){return Vc(A)&&Hc(A)==a}function Ov(A,I,Z,ce,lt){return A===I?!0:A==null||I==null||!Vc(A)&&!Vc(I)?A!==A&&I!==I:M7(A,I,Z,ce,Ov,lt)}function M7(A,I,Z,ce,lt,ke){var bt=Tf(A),jt=Tf(I),Zt=bt?l:ao(A),ht=jt?l:ao(I);Zt=Zt==a?v:Zt,ht=ht==a?v:ht;var Dn=Zt==v,br=ht==v,en=Zt==ht;if(en&&l1(A)){if(!l1(I))return!1;bt=!0,Dn=!1}if(en&&!Dn)return ke||(ke=new so),bt||jv(A)?Iv(A,I,Z,ce,lt,ke):B7(A,I,Zt,Z,ce,lt,ke);if(!(Z&o)){var rr=Dn&&_.call(A,"__wrapped__"),ir=br&&_.call(I,"__wrapped__");if(rr||ir){var lo=rr?A.value():A,Ai=ir?I.value():I;return ke||(ke=new so),lt(lo,Ai,Z,ce,ke)}}return en?(ke||(ke=new so),U7(A,I,Z,ce,lt,ke)):!1}function L7(A){if(!Dv(A)||V7(A))return!1;var I=Mv(A)?F:Xe;return I.test(bs(A))}function D7(A){return Vc(A)&&Lv(A.length)&&!!$e[Hc(A)]}function j7(A){if(!Z7(A))return o7(A);var I=[];for(var Z in Object(A))_.call(A,Z)&&Z!="constructor"&&I.push(Z);return I}function Iv(A,I,Z,ce,lt,ke){var bt=Z&o,jt=A.length,Zt=I.length;if(jt!=Zt&&!(bt&&Zt>jt))return!1;var ht=ke.get(A);if(ht&&ke.get(I))return ht==I;var Dn=-1,br=!0,en=Z&i?new Af:void 0;for(ke.set(A,I),ke.set(I,A);++Dn<jt;){var rr=A[Dn],ir=I[Dn];if(ce)var lo=bt?ce(ir,rr,Dn,I,A,ke):ce(rr,ir,Dn,A,I,ke);if(lo!==void 0){if(lo)continue;br=!1;break}if(en){if(!Uc(I,function(Ai,xs){if(!Sf(en,xs)&&(rr===Ai||lt(rr,Ai,Z,ce,ke)))return en.push(xs)})){br=!1;break}}else if(!(rr===ir||lt(rr,ir,Z,ce,ke))){br=!1;break}}return ke.delete(A),ke.delete(I),br}function B7(A,I,Z,ce,lt,ke,bt){switch(Z){case he:if(A.byteLength!=I.byteLength||A.byteOffset!=I.byteOffset)return!1;A=A.buffer,I=I.buffer;case H:return!(A.byteLength!=I.byteLength||!ke(new rt(A),new rt(I)));case u:case d:case C:return Nv(+A,+I);case h:return A.name==I.name&&A.message==I.message;case R:case k:return A==I+"";case w:var jt=nr;case T:var Zt=ce&o;if(jt||(jt=t1),A.size!=I.size&&!Zt)return!1;var ht=bt.get(A);if(ht)return ht==I;ce|=i,bt.set(A,I);var Dn=Iv(jt(A),jt(I),ce,lt,ke,bt);return bt.delete(A),Dn;case N:if(a1)return a1.call(A)==a1.call(I)}return!1}function U7(A,I,Z,ce,lt,ke){var bt=Z&o,jt=kv(A),Zt=jt.length,ht=kv(I),Dn=ht.length;if(Zt!=Dn&&!bt)return!1;for(var br=Zt;br--;){var en=jt[br];if(!(bt?en in I:_.call(I,en)))return!1}var rr=ke.get(A);if(rr&&ke.get(I))return rr==I;var ir=!0;ke.set(A,I),ke.set(I,A);for(var lo=bt;++br<Zt;){en=jt[br];var Ai=A[en],xs=I[en];if(ce)var Bv=bt?ce(xs,Ai,en,I,A,ke):ce(Ai,xs,en,A,I,ke);if(!(Bv===void 0?Ai===xs||lt(Ai,xs,Z,ce,ke):Bv)){ir=!1;break}lo||(lo=en=="constructor")}if(ir&&!lo){var Pf=A.constructor,Of=I.constructor;Pf!=Of&&"constructor"in A&&"constructor"in I&&!(typeof Pf=="function"&&Pf instanceof Pf&&typeof Of=="function"&&Of instanceof Of)&&(ir=!1)}return ke.delete(A),ke.delete(I),ir}function kv(A){return N7(A,Q7,W7)}function Rf(A,I){var Z=A.__data__;return H7(I)?Z[typeof I=="string"?"string":"hash"]:Z.map}function Ba(A,I){var Z=ja(A,I);return L7(Z)?Z:void 0}function F7(A){var I=_.call(A,ws),Z=A[ws];try{A[ws]=void 0;var ce=!0}catch{}var lt=M.call(A);return ce&&(I?A[ws]=Z:delete A[ws]),lt}var W7=Rv?function(A){return A==null?[]:(A=Object(A),Q0(Rv(A),function(I){return at.call(A,I)}))}:J7,ao=Hc;(r1&&ao(new r1(new ArrayBuffer(1)))!=he||Wc&&ao(new Wc)!=w||i1&&ao(i1.resolve())!=b||o1&&ao(new o1)!=T||s1&&ao(new s1)!=D)&&(ao=function(A){var I=Hc(A),Z=I==v?A.constructor:void 0,ce=Z?bs(Z):"";if(ce)switch(ce){case s7:return he;case a7:return w;case l7:return b;case c7:return T;case u7:return D}return I});function z7(A,I){return I=I??s,!!I&&(typeof A=="number"||Ke.test(A))&&A>-1&&A%1==0&&A<I}function H7(A){var I=typeof A;return I=="string"||I=="number"||I=="symbol"||I=="boolean"?A!=="__proto__":A===null}function V7(A){return!!P&&P in A}function Z7(A){var I=A&&A.constructor,Z=typeof I=="function"&&I.prototype||x;return A===Z}function q7(A){return M.call(A)}function bs(A){if(A!=null){try{return p.call(A)}catch{}try{return A+""}catch{}}return""}function Nv(A,I){return A===I||A!==A&&I!==I}var G7=Pv(function(){return arguments}())?Pv:function(A){return Vc(A)&&_.call(A,"callee")&&!at.call(A,"callee")},Tf=Array.isArray;function K7(A){return A!=null&&Lv(A.length)&&!Mv(A)}var l1=i7||X7;function Y7(A,I){return Ov(A,I)}function Mv(A){if(!Dv(A))return!1;var I=Hc(A);return I==g||I==m||I==c||I==E}function Lv(A){return typeof A=="number"&&A>-1&&A%1==0&&A<=s}function Dv(A){var I=typeof A;return A!=null&&(I=="object"||I=="function")}function Vc(A){return A!=null&&typeof A=="object"}var jv=oo?e1(oo):D7;function Q7(A){return K7(A)?k7(A):j7(A)}function J7(){return[]}function X7(){return!1}t.exports=Y7})(lp,lp.exports);var FR=lp.exports;const FF=os(FR);var Ix=et.createContext(void 0);Ix.displayName="InertiaHeadContext";var N3=Ix,kx=et.createContext(void 0);kx.displayName="InertiaPageContext";var M3=kx;function Nx({children:t,initialPage:e,initialComponent:n,resolveComponent:r,titleCallback:o,onHeadUpdate:i}){let[s,a]=et.useState({component:n||null,page:e,key:null}),l=et.useMemo(()=>kR(typeof window>"u",o||(u=>u),i||(()=>{})),[]);if(et.useEffect(()=>{ap.init({initialPage:e,resolveComponent:r,swapComponent:async({component:u,page:d,preserveState:h})=>{a(g=>({component:u,page:d,key:h?g.key:Date.now()}))}}),ap.on("navigate",()=>l.forceUpdate())},[]),!s.component)return et.createElement(N3.Provider,{value:l},et.createElement(M3.Provider,{value:s.page},null));let c=t||(({Component:u,props:d,key:h})=>{let g=et.createElement(u,{key:h,...d});return typeof u.layout=="function"?u.layout(g):Array.isArray(u.layout)?u.layout.concat(g).reverse().reduce((m,w)=>et.createElement(w,{children:m,...d})):g});return et.createElement(N3.Provider,{value:l},et.createElement(M3.Provider,{value:s.page},c({Component:s.component,key:s.key,props:s.page.props})))}Nx.displayName="Inertia";async function WR({id:t="app",resolve:e,setup:n,title:r,progress:o={},page:i,render:s}){let a=typeof window>"u",l=a?null:document.getElementById(t),c=i||JSON.parse(l.dataset.page),u=g=>Promise.resolve(e(g)).then(m=>m.default||m),d=[],h=await u(c.component).then(g=>n({el:l,App:Nx,props:{initialPage:c,initialComponent:g,resolveComponent:u,titleCallback:r,onHeadUpdate:a?m=>d=m:null}}));if(!a&&o&&BR(o),a){let g=await s(et.createElement("div",{id:t,"data-page":JSON.stringify(c)},h));return{head:d,body:g}}}var $i=()=>{},Mx=et.forwardRef(({children:t,as:e="a",data:n={},href:r,method:o="get",preserveScroll:i=!1,preserveState:s=null,replace:a=!1,only:l=[],headers:c={},queryStringArrayFormat:u="brackets",onClick:d=$i,onCancelToken:h=$i,onBefore:g=$i,onStart:m=$i,onProgress:w=$i,onFinish:C=$i,onCancel:y=$i,onSuccess:v=$i,onError:b=$i,...E},R)=>{let T=et.useCallback(W=>{d(W),UR(W)&&(W.preventDefault(),ap.visit(r,{data:n,method:o,preserveScroll:i,preserveState:s??o!=="get",replace:a,only:l,headers:c,onCancelToken:h,onBefore:g,onStart:m,onProgress:w,onFinish:C,onCancel:y,onSuccess:v,onError:b}))},[n,r,o,i,s,a,l,c,d,h,g,m,w,C,y,v,b]);e=e.toLowerCase(),o=o.toLowerCase();let[k,N]=Px(o,r||"",n,u);return r=k,n=N,e==="a"&&o!=="get"&&console.warn(`Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${r}" method="${o}" as="button">...</Link>`),et.createElement(e,{...E,...e==="a"?{href:r}:{},ref:R,onClick:T},t)});Mx.displayName="InertiaLink";var WF=Mx,zF=ap;async function zR(t,e){for(const n of Array.isArray(t)?t:[t]){const r=e[n];if(!(typeof r>"u"))return typeof r=="function"?r():r}throw new Error(`Page not found: ${t}`)}let fo;function HR(t){t&&(fo=t)}function HF(){if(!fo)throw new Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');async function t(n){await(fo==null?void 0:fo.open(n))}async function e(){await(fo==null?void 0:fo.close())}return{open:t,close:e}}const VR="2.8.16",ZR=t=>t,$y=t=>t,qR=()=>`viem@${VR}`;class se extends Error{constructor(e,n={}){var i;super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:qR()});const r=n.cause instanceof se?n.cause.details:(i=n.cause)!=null&&i.message?n.cause.message:n.details,o=n.cause instanceof se&&n.cause.docsPath||n.docsPath;this.message=[e||"An error occurred.","",...n.metaMessages?[...n.metaMessages,""]:[],...o?[`Docs: https://viem.sh${o}${n.docsSlug?`#${n.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join(`
`),n.cause&&(this.cause=n.cause),this.details=r,this.docsPath=o,this.metaMessages=n.metaMessages,this.shortMessage=e}walk(e){return Lx(this,e)}}function Lx(t,e){return e!=null&&e(t)?t:t&&typeof t=="object"&&"cause"in t?Lx(t.cause,e):e?null:t}class GR extends se{constructor({max:e,min:n,signed:r,size:o,value:i}){super(`Number "${i}" is not in safe ${o?`${o*8}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${n} to ${e})`:`(above ${n})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class KR extends se{constructor(e){super(`Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesBooleanError"})}}class YR extends se{constructor({givenSize:e,maxSize:n}){super(`Size cannot exceed ${n} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}class Dx extends se{constructor({offset:e,position:n,size:r}){super(`Slice ${n==="start"?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class jx extends se{constructor({size:e,targetSize:n,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${n}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}class L3 extends se{constructor({size:e,targetSize:n,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} is expected to be ${n} ${r} long, but is ${e} ${r} long.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesLengthError"})}}function $c(t,{dir:e,size:n=32}={}){return typeof t=="string"?Fo(t,{dir:e,size:n}):QR(t,{dir:e,size:n})}function Fo(t,{dir:e,size:n=32}={}){if(n===null)return t;const r=t.replace("0x","");if(r.length>n*2)throw new jx({size:Math.ceil(r.length/2),targetSize:n,type:"hex"});return`0x${r[e==="right"?"padEnd":"padStart"](n*2,"0")}`}function QR(t,{dir:e,size:n=32}={}){if(n===null)return t;if(t.length>n)throw new jx({size:t.length,targetSize:n,type:"bytes"});const r=new Uint8Array(n);for(let o=0;o<n;o++){const i=e==="right";r[i?o:n-o-1]=t[i?o:t.length-o-1]}return r}function Rc(t,{strict:e=!0}={}){return!t||typeof t!="string"?!1:e?/^0x[0-9a-fA-F]*$/.test(t):t.startsWith("0x")}function sn(t){return Rc(t,{strict:!1})?Math.ceil((t.length-2)/2):t.length}function ff(t,{dir:e="left"}={}){let n=typeof t=="string"?t.replace("0x",""):t,r=0;for(let o=0;o<n.length-1&&n[e==="left"?o:n.length-o-1].toString()==="0";o++)r++;return n=e==="left"?n.slice(r):n.slice(0,n.length-r),typeof t=="string"?(n.length===1&&e==="right"&&(n=`${n}0`),`0x${n.length%2===1?`0${n}`:n}`):n}const JR=new TextEncoder;function Ry(t,e={}){return typeof t=="number"||typeof t=="bigint"?eT(t,e):typeof t=="boolean"?XR(t,e):Rc(t)?p0(t,e):Zs(t,e)}function XR(t,e={}){const n=new Uint8Array(1);return n[0]=Number(t),typeof e.size=="number"?(Wr(n,{size:e.size}),$c(n,{size:e.size})):n}const Ri={zero:48,nine:57,A:65,F:70,a:97,f:102};function D3(t){if(t>=Ri.zero&&t<=Ri.nine)return t-Ri.zero;if(t>=Ri.A&&t<=Ri.F)return t-(Ri.A-10);if(t>=Ri.a&&t<=Ri.f)return t-(Ri.a-10)}function p0(t,e={}){let n=t;e.size&&(Wr(n,{size:e.size}),n=$c(n,{dir:"right",size:e.size}));let r=n.slice(2);r.length%2&&(r=`0${r}`);const o=r.length/2,i=new Uint8Array(o);for(let s=0,a=0;s<o;s++){const l=D3(r.charCodeAt(a++)),c=D3(r.charCodeAt(a++));if(l===void 0||c===void 0)throw new se(`Invalid byte sequence ("${r[a-2]}${r[a-1]}" in "${r}").`);i[s]=l*16+c}return i}function eT(t,e){const n=dt(t,e);return p0(n)}function Zs(t,e={}){const n=JR.encode(t);return typeof e.size=="number"?(Wr(n,{size:e.size}),$c(n,{dir:"right",size:e.size})):n}function Wr(t,{size:e}){if(sn(t)>e)throw new YR({givenSize:sn(t),maxSize:e})}function Bx(t,e={}){const{signed:n}=e;e.size&&Wr(t,{size:e.size});const r=BigInt(t);if(!n)return r;const o=(t.length-2)/2,i=(1n<<BigInt(o)*8n-1n)-1n;return r<=i?r:r-BigInt(`0x${"f".padStart(o*2,"f")}`)-1n}function tT(t,e={}){return Number(Bx(t,e))}function nT(t,e={}){let n=p0(t);return e.size&&(Wr(n,{size:e.size}),n=ff(n,{dir:"right"})),new TextDecoder().decode(n)}const rT=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function m0(t,e={}){return typeof t=="number"||typeof t=="bigint"?dt(t,e):typeof t=="string"?Ty(t,e):typeof t=="boolean"?Ux(t,e):gr(t,e)}function Ux(t,e={}){const n=`0x${Number(t)}`;return typeof e.size=="number"?(Wr(n,{size:e.size}),$c(n,{size:e.size})):n}function gr(t,e={}){let n="";for(let o=0;o<t.length;o++)n+=rT[t[o]];const r=`0x${n}`;return typeof e.size=="number"?(Wr(r,{size:e.size}),$c(r,{dir:"right",size:e.size})):r}function dt(t,e={}){const{signed:n,size:r}=e,o=BigInt(t);let i;r?n?i=(1n<<BigInt(r)*8n-1n)-1n:i=2n**(BigInt(r)*8n)-1n:typeof t=="number"&&(i=BigInt(Number.MAX_SAFE_INTEGER));const s=typeof i=="bigint"&&n?-i-1n:0;if(i&&o>i||o<s){const l=typeof t=="bigint"?"n":"";throw new GR({max:i?`${i}${l}`:void 0,min:`${s}${l}`,signed:n,size:r,value:`${t}${l}`})}const a=`0x${(n&&o<0?(1n<<BigInt(r*8))+BigInt(o):o).toString(16)}`;return r?$c(a,{size:r}):a}const iT=new TextEncoder;function Ty(t,e={}){const n=iT.encode(t);return gr(n,e)}function Vl(t,{includeName:e=!1}={}){if(t.type!=="function"&&t.type!=="event"&&t.type!=="error")throw new mT(t.type);return`${t.name}(${Py(t.inputs,{includeName:e})})`}function Py(t,{includeName:e=!1}={}){return t?t.map(n=>oT(n,{includeName:e})).join(e?", ":","):""}function oT(t,{includeName:e}){return t.type.startsWith("tuple")?`(${Py(t.components,{includeName:e})})${t.type.slice(5)}`:t.type+(e&&t.name?` ${t.name}`:"")}class sT extends se{constructor({data:e,params:n,size:r}){super([`Data size of ${r} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${Py(n,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=n,this.size=r}}class g0 extends se{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class aT extends se{constructor({expectedLength:e,givenLength:n,type:r}){super([`ABI encoding array length mismatch for type ${r}.`,`Expected length: ${e}`,`Given length: ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class lT extends se{constructor({expectedSize:e,value:n}){super(`Size of bytes "${n}" (bytes${sn(n)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class cT extends se{constructor({expectedLength:e,givenLength:n}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${e}`,`Given length (values): ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class Fx extends se{constructor(e,{docsPath:n}){super([`Encoded error signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class cp extends se{constructor(e,{docsPath:n}={}){super([`Function ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class uT extends se{constructor(e,{docsPath:n}){super([`Function "${e}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class dT extends se{constructor(e,n){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${e.type}\` in \`${Vl(e.abiItem)}\`, and`,`\`${n.type}\` in \`${Vl(n.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}}class fT extends se{constructor(e,{docsPath:n}){super([`Type "${e}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class hT extends se{constructor(e,{docsPath:n}){super([`Type "${e}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class pT extends se{constructor(e){super([`Value "${e}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class mT extends se{constructor(e){super([`"${e}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}function ta(t){return typeof t[0]=="string"?Wx(t):gT(t)}function gT(t){let e=0;for(const o of t)e+=o.length;const n=new Uint8Array(e);let r=0;for(const o of t)n.set(o,r),r+=o.length;return n}function Wx(t){return`0x${t.reduce((e,n)=>e+n.replace("0x",""),"")}`}class rd extends se{constructor({address:e}){super(`Address "${e}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}class wT extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}set(e,n){return super.set(e,n),this.maxSize&&this.size>this.maxSize&&this.delete(this.keys().next().value),this}}function j3(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function zx(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function B3(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function yT(t,e){zx(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const Xf=BigInt(2**32-1),U3=BigInt(32);function vT(t,e=!1){return e?{h:Number(t&Xf),l:Number(t>>U3&Xf)}:{h:Number(t>>U3&Xf)|0,l:Number(t&Xf)|0}}function bT(t,e=!1){let n=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let o=0;o<t.length;o++){const{h:i,l:s}=vT(t[o],e);[n[o],r[o]]=[i,s]}return[n,r]}const xT=(t,e,n)=>t<<n|e>>>32-n,CT=(t,e,n)=>e<<n|t>>>32-n,ET=(t,e,n)=>e<<n-32|t>>>64-n,_T=(t,e,n)=>t<<n-32|e>>>64-n;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const ST=t=>t instanceof Uint8Array,AT=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),$T=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!$T)throw new Error("Non little-endian hardware is not supported");function RT(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function Hx(t){if(typeof t=="string"&&(t=RT(t)),!ST(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}class TT{clone(){return this._cloneInto()}}function PT(t){const e=r=>t().update(Hx(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}const[Vx,Zx,qx]=[[],[],[]],OT=BigInt(0),iu=BigInt(1),IT=BigInt(2),kT=BigInt(7),NT=BigInt(256),MT=BigInt(113);for(let t=0,e=iu,n=1,r=0;t<24;t++){[n,r]=[r,(2*n+3*r)%5],Vx.push(2*(5*r+n)),Zx.push((t+1)*(t+2)/2%64);let o=OT;for(let i=0;i<7;i++)e=(e<<iu^(e>>kT)*MT)%NT,e&IT&&(o^=iu<<(iu<<BigInt(i))-iu);qx.push(o)}const[LT,DT]=bT(qx,!0),F3=(t,e,n)=>n>32?ET(t,e,n):xT(t,e,n),W3=(t,e,n)=>n>32?_T(t,e,n):CT(t,e,n);function jT(t,e=24){const n=new Uint32Array(10);for(let r=24-e;r<24;r++){for(let s=0;s<10;s++)n[s]=t[s]^t[s+10]^t[s+20]^t[s+30]^t[s+40];for(let s=0;s<10;s+=2){const a=(s+8)%10,l=(s+2)%10,c=n[l],u=n[l+1],d=F3(c,u,1)^n[a],h=W3(c,u,1)^n[a+1];for(let g=0;g<50;g+=10)t[s+g]^=d,t[s+g+1]^=h}let o=t[2],i=t[3];for(let s=0;s<24;s++){const a=Zx[s],l=F3(o,i,a),c=W3(o,i,a),u=Vx[s];o=t[u],i=t[u+1],t[u]=l,t[u+1]=c}for(let s=0;s<50;s+=10){for(let a=0;a<10;a++)n[a]=t[s+a];for(let a=0;a<10;a++)t[s+a]^=~n[(a+2)%10]&n[(a+4)%10]}t[0]^=LT[r],t[1]^=DT[r]}n.fill(0)}class Oy extends TT{constructor(e,n,r,o=!1,i=24){if(super(),this.blockLen=e,this.suffix=n,this.outputLen=r,this.enableXOF=o,this.rounds=i,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,j3(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=AT(this.state)}keccak(){jT(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){B3(this);const{blockLen:n,state:r}=this;e=Hx(e);const o=e.length;for(let i=0;i<o;){const s=Math.min(n-this.pos,o-i);for(let a=0;a<s;a++)r[this.pos++]^=e[i++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:n,pos:r,blockLen:o}=this;e[r]^=n,n&128&&r===o-1&&this.keccak(),e[o-1]^=128,this.keccak()}writeInto(e){B3(this,!1),zx(e),this.finish();const n=this.state,{blockLen:r}=this;for(let o=0,i=e.length;o<i;){this.posOut>=r&&this.keccak();const s=Math.min(r-this.posOut,i-o);e.set(n.subarray(this.posOut,this.posOut+s),o),this.posOut+=s,o+=s}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return j3(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(yT(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:n,suffix:r,outputLen:o,rounds:i,enableXOF:s}=this;return e||(e=new Oy(n,r,o,s,i)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=i,e.suffix=r,e.outputLen=o,e.enableXOF=s,e.destroyed=this.destroyed,e}}const BT=(t,e,n)=>PT(()=>new Oy(e,t,n)),UT=BT(1,136,256/8);function id(t,e){const n=e||"hex",r=UT(Rc(t,{strict:!1})?Ry(t):t);return n==="bytes"?r:m0(r)}function Iy(t,e){const n=e?`${e}${t.toLowerCase()}`:t.substring(2).toLowerCase(),r=id(Zs(n),"bytes"),o=(e?n.substring(`${e}0x`.length):n).split("");for(let i=0;i<40;i+=2)r[i>>1]>>4>=8&&o[i]&&(o[i]=o[i].toUpperCase()),(r[i>>1]&15)>=8&&o[i+1]&&(o[i+1]=o[i+1].toUpperCase());return`0x${o.join("")}`}function Rr(t,e){if(!Ko(t))throw new rd({address:t});return Iy(t,e)}const FT=/^0x[a-fA-F0-9]{40}$/,Q1=new wT(8192);function Ko(t,{strict:e=!0}={}){if(Q1.has(t))return Q1.get(t);const n=FT.test(t)?t.toLowerCase()===t?!0:e?Iy(t)===t:!0:!1;return Q1.set(t,n),n}function up(t,e,n,{strict:r}={}){return Rc(t,{strict:!1})?WT(t,e,n,{strict:r}):Yx(t,e,n,{strict:r})}function Gx(t,e){if(typeof e=="number"&&e>0&&e>sn(t)-1)throw new Dx({offset:e,position:"start",size:sn(t)})}function Kx(t,e,n){if(typeof e=="number"&&typeof n=="number"&&sn(t)!==n-e)throw new Dx({offset:n,position:"end",size:sn(t)})}function Yx(t,e,n,{strict:r}={}){Gx(t,e);const o=t.slice(e,n);return r&&Kx(o,e,n),o}function WT(t,e,n,{strict:r}={}){Gx(t,e);const o=`0x${t.replace("0x","").slice((e??0)*2,(n??t.length)*2)}`;return r&&Kx(o,e,n),o}function zT(t,e){if(t.length!==e.length)throw new cT({expectedLength:t.length,givenLength:e.length});const n=HT({params:t,values:e}),r=Ny(n);return r.length===0?"0x":r}function HT({params:t,values:e}){const n=[];for(let r=0;r<t.length;r++)n.push(ky({param:t[r],value:e[r]}));return n}function ky({param:t,value:e}){const n=My(t.type);if(n){const[r,o]=n;return ZT(e,{length:r,param:{...t,type:o}})}if(t.type==="tuple")return QT(e,{param:t});if(t.type==="address")return VT(e);if(t.type==="bool")return GT(e);if(t.type.startsWith("uint")||t.type.startsWith("int")){const r=t.type.startsWith("int");return KT(e,{signed:r})}if(t.type.startsWith("bytes"))return qT(e,{param:t});if(t.type==="string")return YT(e);throw new fT(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function Ny(t){let e=0;for(let i=0;i<t.length;i++){const{dynamic:s,encoded:a}=t[i];s?e+=32:e+=sn(a)}const n=[],r=[];let o=0;for(let i=0;i<t.length;i++){const{dynamic:s,encoded:a}=t[i];s?(n.push(dt(e+o,{size:32})),r.push(a),o+=sn(a)):n.push(a)}return ta([...n,...r])}function VT(t){if(!Ko(t))throw new rd({address:t});return{dynamic:!1,encoded:Fo(t.toLowerCase())}}function ZT(t,{length:e,param:n}){const r=e===null;if(!Array.isArray(t))throw new pT(t);if(!r&&t.length!==e)throw new aT({expectedLength:e,givenLength:t.length,type:`${n.type}[${e}]`});let o=!1;const i=[];for(let s=0;s<t.length;s++){const a=ky({param:n,value:t[s]});a.dynamic&&(o=!0),i.push(a)}if(r||o){const s=Ny(i);if(r){const a=dt(i.length,{size:32});return{dynamic:!0,encoded:i.length>0?ta([a,s]):a}}if(o)return{dynamic:!0,encoded:s}}return{dynamic:!1,encoded:ta(i.map(({encoded:s})=>s))}}function qT(t,{param:e}){const[,n]=e.type.split("bytes"),r=sn(t);if(!n){let o=t;return r%32!==0&&(o=Fo(o,{dir:"right",size:Math.ceil((t.length-2)/2/32)*32})),{dynamic:!0,encoded:ta([Fo(dt(r,{size:32})),o])}}if(r!==parseInt(n))throw new lT({expectedSize:parseInt(n),value:t});return{dynamic:!1,encoded:Fo(t,{dir:"right"})}}function GT(t){if(typeof t!="boolean")throw new se(`Invalid boolean value: "${t}" (type: ${typeof t}). Expected: \`true\` or \`false\`.`);return{dynamic:!1,encoded:Fo(Ux(t))}}function KT(t,{signed:e}){return{dynamic:!1,encoded:dt(t,{size:32,signed:e})}}function YT(t){const e=Ty(t),n=Math.ceil(sn(e)/32),r=[];for(let o=0;o<n;o++)r.push(Fo(up(e,o*32,(o+1)*32),{dir:"right"}));return{dynamic:!0,encoded:ta([Fo(dt(sn(e),{size:32})),...r])}}function QT(t,{param:e}){let n=!1;const r=[];for(let o=0;o<e.components.length;o++){const i=e.components[o],s=Array.isArray(t)?o:i.name,a=ky({param:i,value:t[s]});r.push(a),a.dynamic&&(n=!0)}return{dynamic:n,encoded:n?Ny(r):ta(r.map(({encoded:o})=>o))}}function My(t){const e=t.match(/^(.*)\[(\d+)?\]$/);return e?[e[2]?Number(e[2]):null,e[1]]:void 0}function Tc(t){return typeof t=="string"?{address:t,type:"json-rpc"}:t}class JT extends se{constructor({docsPath:e}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`),{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}class Ig extends se{constructor({blockNumber:e,chain:n,contract:r}){super(`Chain "${n.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...e&&r.blockCreated&&r.blockCreated>e?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class Qx extends se{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}const XT={gwei:9,wei:18},eP={ether:-9,wei:9},tP={ether:-18,gwei:-9};function w0(t,e){let n=t.toString();const r=n.startsWith("-");r&&(n=n.slice(1)),n=n.padStart(e,"0");let[o,i]=[n.slice(0,n.length-e),n.slice(n.length-e)];return i=i.replace(/(0+)$/,""),`${r?"-":""}${o||"0"}${i?`.${i}`:""}`}function qs(t,e="wei"){return w0(t,eP[e])}class ul extends se{constructor({cause:e,message:n}={}){var o;const r=(o=n==null?void 0:n.replace("execution reverted: ",""))==null?void 0:o.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(ul,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(ul,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class dp extends se{constructor({cause:e,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${qs(n)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(dp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class kg extends se{constructor({cause:e,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${qs(n)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(kg,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class Ng extends se{constructor({cause:e,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(Ng,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class Mg extends se{constructor({cause:e,nonce:n}={}){super([`Nonce provided for the transaction ${n?`(${n}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(Mg,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class Lg extends se{constructor({cause:e,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(Lg,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class Dg extends se{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(Dg,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class jg extends se{constructor({cause:e,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(jg,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class Bg extends se{constructor({cause:e,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(Bg,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class Ug extends se{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(Ug,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class fp extends se{constructor({cause:e,maxPriorityFeePerGas:n,maxFeePerGas:r}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${n?` = ${qs(n)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${qs(r)} gwei`:""}).`].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(fp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class Jx extends se{constructor({cause:e}){super(`An error occurred while executing: ${e==null?void 0:e.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}function nP(t,e="wei"){return w0(t,XT[e])}function Xx(t){const e=Object.entries(t).map(([r,o])=>o===void 0||o===!1?null:[r,o]).filter(Boolean),n=e.reduce((r,[o])=>Math.max(r,o.length),0);return e.map(([r,o])=>`  ${`${r}:`.padEnd(n+1)}  ${o}`).join(`
`)}class rP extends se{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}const Gs=(t,e,n)=>JSON.stringify(t,(r,o)=>{const i=typeof o=="bigint"?o.toString():o;return typeof e=="function"?e(r,i):i},n);class Ru extends se{constructor({body:e,details:n,headers:r,status:o,url:i}){super("HTTP request failed.",{details:n,metaMessages:[o&&`Status: ${o}`,`URL: ${$y(i)}`,e&&`Request body: ${Gs(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=r,this.status=o,this.url=i}}class e8 extends se{constructor({body:e,error:n,url:r}){super("RPC Request failed.",{cause:n,details:n.message,metaMessages:[`URL: ${$y(r)}`,`Request body: ${Gs(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=n.code}}class z3 extends se{constructor({body:e,url:n}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${$y(n)}`,`Request body: ${Gs(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}const iP=-1;class Nn extends se{constructor(e,{code:n,docsPath:r,metaMessages:o,shortMessage:i}){super(i,{cause:e,docsPath:r,metaMessages:o||(e==null?void 0:e.metaMessages)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof e8?e.code:n??iP}}class Pc extends Nn{constructor(e,n){super(e,n),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=n.data}}class od extends Nn{constructor(e){super(e,{code:od.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(od,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class sd extends Nn{constructor(e){super(e,{code:sd.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(sd,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class ad extends Nn{constructor(e){super(e,{code:ad.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(ad,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class ld extends Nn{constructor(e){super(e,{code:ld.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(ld,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class na extends Nn{constructor(e){super(e,{code:na.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(na,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class cd extends Nn{constructor(e){super(e,{code:cd.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(cd,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class ud extends Nn{constructor(e){super(e,{code:ud.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(ud,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class Wo extends Nn{constructor(e){super(e,{code:Wo.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(Wo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class dd extends Nn{constructor(e){super(e,{code:dd.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(dd,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class fd extends Nn{constructor(e){super(e,{code:fd.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(fd,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class Zl extends Nn{constructor(e){super(e,{code:Zl.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(Zl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class hd extends Nn{constructor(e){super(e,{code:hd.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(hd,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class Ot extends Pc{constructor(e){super(e,{code:Ot.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(Ot,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class pd extends Pc{constructor(e){super(e,{code:pd.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(pd,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class md extends Pc{constructor(e){super(e,{code:md.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(md,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class gd extends Pc{constructor(e){super(e,{code:gd.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(gd,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class wd extends Pc{constructor(e){super(e,{code:wd.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(wd,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class Hn extends Pc{constructor(e){super(e,{code:Hn.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(Hn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class oP extends Nn{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}function sP(t,e){const n=(t.details||"").toLowerCase(),r=t instanceof se?t.walk(o=>o.code===ul.code):t;return r instanceof se?new ul({cause:t,message:r.details}):ul.nodeMessage.test(n)?new ul({cause:t,message:t.details}):dp.nodeMessage.test(n)?new dp({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):kg.nodeMessage.test(n)?new kg({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):Ng.nodeMessage.test(n)?new Ng({cause:t,nonce:e==null?void 0:e.nonce}):Mg.nodeMessage.test(n)?new Mg({cause:t,nonce:e==null?void 0:e.nonce}):Lg.nodeMessage.test(n)?new Lg({cause:t,nonce:e==null?void 0:e.nonce}):Dg.nodeMessage.test(n)?new Dg({cause:t}):jg.nodeMessage.test(n)?new jg({cause:t,gas:e==null?void 0:e.gas}):Bg.nodeMessage.test(n)?new Bg({cause:t,gas:e==null?void 0:e.gas}):Ug.nodeMessage.test(n)?new Ug({cause:t}):fp.nodeMessage.test(n)?new fp({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas,maxPriorityFeePerGas:e==null?void 0:e.maxPriorityFeePerGas}):new Jx({cause:t})}function aP(t,{format:e}){if(!e)return{};const n={};function r(i){const s=Object.keys(i);for(const a of s)a in t&&(n[a]=t[a]),i[a]&&typeof i[a]=="object"&&!Array.isArray(i[a])&&r(i[a])}const o=e(t||{});return r(o),n}const lP={legacy:"0x0",eip2930:"0x1",eip1559:"0x2",eip4844:"0x3"};function cP(t){const e={...t};return typeof t.blobs<"u"&&typeof t.blobs[0]!="string"&&(e.blobs=t.blobs.map(n=>gr(n))),typeof t.gas<"u"&&(e.gas=dt(t.gas)),typeof t.gasPrice<"u"&&(e.gasPrice=dt(t.gasPrice)),typeof t.maxFeePerBlobGas<"u"&&(e.maxFeePerBlobGas=dt(t.maxFeePerBlobGas)),typeof t.maxFeePerGas<"u"&&(e.maxFeePerGas=dt(t.maxFeePerGas)),typeof t.maxPriorityFeePerGas<"u"&&(e.maxPriorityFeePerGas=dt(t.maxPriorityFeePerGas)),typeof t.nonce<"u"&&(e.nonce=dt(t.nonce)),typeof t.type<"u"&&(e.type=lP[t.type]),typeof t.value<"u"&&(e.value=dt(t.value)),e}function hf(t,e,n){return r=>{var o;return((o=t[e.name||n])==null?void 0:o.call(t,r))??e(t,r)}}function uP(t){const{account:e,gasPrice:n,maxFeePerGas:r,maxPriorityFeePerGas:o,to:i}=t,s=e?Tc(e):void 0;if(s&&!Ko(s.address))throw new rd({address:s.address});if(i&&!Ko(i))throw new rd({address:i});if(typeof n<"u"&&(typeof r<"u"||typeof o<"u"))throw new rP;if(r&&r>2n**256n-1n)throw new dp({maxFeePerGas:r});if(o&&r&&o>r)throw new fp({maxFeePerGas:r,maxPriorityFeePerGas:o})}const Fg=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],t8=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"},{inputs:[],name:"ResolverNotContract",type:"error"},{inputs:[{name:"returnData",type:"bytes"}],name:"ResolverError",type:"error"},{inputs:[{components:[{name:"status",type:"uint16"},{name:"message",type:"string"}],name:"errors",type:"tuple[]"}],name:"HttpError",type:"error"}],dP=[...t8,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]},{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"},{name:"gateways",type:"string[]"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],fP=[...t8,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]},{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"},{type:"string[]",name:"gateways"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],H3=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}];class V3 extends se{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NegativeOffsetError"})}}class hP extends se{constructor({length:e,position:n}){super(`Position \`${n}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PositionOutOfBoundsError"})}}class pP extends se{constructor({count:e,limit:n}){super(`Recursive read limit of \`${n}\` exceeded (recursive read count: \`${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RecursiveReadLimitExceededError"})}}const mP={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:1/0,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new pP({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(t){if(t<0||t>this.bytes.length-1)throw new hP({length:this.bytes.length,position:t})},decrementPosition(t){if(t<0)throw new V3({offset:t});const e=this.position-t;this.assertPosition(e),this.position=e},getReadCount(t){return this.positionReadCount.get(t||this.position)||0},incrementPosition(t){if(t<0)throw new V3({offset:t});const e=this.position+t;this.assertPosition(e),this.position=e},inspectByte(t){const e=t??this.position;return this.assertPosition(e),this.bytes[e]},inspectBytes(t,e){const n=e??this.position;return this.assertPosition(n+t-1),this.bytes.subarray(n,n+t)},inspectUint8(t){const e=t??this.position;return this.assertPosition(e),this.bytes[e]},inspectUint16(t){const e=t??this.position;return this.assertPosition(e+1),this.dataView.getUint16(e)},inspectUint24(t){const e=t??this.position;return this.assertPosition(e+2),(this.dataView.getUint16(e)<<8)+this.dataView.getUint8(e+2)},inspectUint32(t){const e=t??this.position;return this.assertPosition(e+3),this.dataView.getUint32(e)},pushByte(t){this.assertPosition(this.position),this.bytes[this.position]=t,this.position++},pushBytes(t){this.assertPosition(this.position+t.length-1),this.bytes.set(t,this.position),this.position+=t.length},pushUint8(t){this.assertPosition(this.position),this.bytes[this.position]=t,this.position++},pushUint16(t){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,t),this.position+=2},pushUint24(t){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,t>>8),this.dataView.setUint8(this.position+2,t&255),this.position+=3},pushUint32(t){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,t),this.position+=4},readByte(){this.assertReadLimit(),this._touch();const t=this.inspectByte();return this.position++,t},readBytes(t,e){this.assertReadLimit(),this._touch();const n=this.inspectBytes(t);return this.position+=e??t,n},readUint8(){this.assertReadLimit(),this._touch();const t=this.inspectUint8();return this.position+=1,t},readUint16(){this.assertReadLimit(),this._touch();const t=this.inspectUint16();return this.position+=2,t},readUint24(){this.assertReadLimit(),this._touch();const t=this.inspectUint24();return this.position+=3,t},readUint32(){this.assertReadLimit(),this._touch();const t=this.inspectUint32();return this.position+=4,t},get remaining(){return this.bytes.length-this.position},setPosition(t){const e=this.position;return this.assertPosition(t),this.position=t,()=>this.position=e},_touch(){if(this.recursiveReadLimit===1/0)return;const t=this.getReadCount();this.positionReadCount.set(this.position,t+1),t>0&&this.recursiveReadCount++}};function gP(t,{recursiveReadLimit:e=8192}={}){const n=Object.create(mP);return n.bytes=t,n.dataView=new DataView(t.buffer,t.byteOffset,t.byteLength),n.positionReadCount=new Map,n.recursiveReadLimit=e,n}function wP(t,e={}){typeof e.size<"u"&&Wr(t,{size:e.size});const n=gr(t,e);return Bx(n,e)}function yP(t,e={}){let n=t;if(typeof e.size<"u"&&(Wr(n,{size:e.size}),n=ff(n)),n.length>1||n[0]>1)throw new KR(n);return!!n[0]}function Ui(t,e={}){typeof e.size<"u"&&Wr(t,{size:e.size});const n=gr(t,e);return tT(n,e)}function vP(t,e={}){let n=t;return typeof e.size<"u"&&(Wr(n,{size:e.size}),n=ff(n,{dir:"right"})),new TextDecoder().decode(n)}function n8(t,e){const n=typeof e=="string"?p0(e):e,r=gP(n);if(sn(n)===0&&t.length>0)throw new g0;if(sn(e)&&sn(e)<32)throw new sT({data:typeof e=="string"?e:gr(e),params:t,size:sn(e)});let o=0;const i=[];for(let s=0;s<t.length;++s){const a=t[s];r.setPosition(o);const[l,c]=yl(r,a,{staticPosition:0});o+=c,i.push(l)}return i}function yl(t,e,{staticPosition:n}){const r=My(e.type);if(r){const[o,i]=r;return xP(t,{...e,type:i},{length:o,staticPosition:n})}if(e.type==="tuple")return SP(t,e,{staticPosition:n});if(e.type==="address")return bP(t);if(e.type==="bool")return CP(t);if(e.type.startsWith("bytes"))return EP(t,e,{staticPosition:n});if(e.type.startsWith("uint")||e.type.startsWith("int"))return _P(t,e);if(e.type==="string")return AP(t,{staticPosition:n});throw new hT(e.type,{docsPath:"/docs/contract/decodeAbiParameters"})}const Z3=32,Wg=32;function bP(t){const e=t.readBytes(32);return[Iy(gr(Yx(e,-20))),32]}function xP(t,e,{length:n,staticPosition:r}){if(!n){const s=Ui(t.readBytes(Wg)),a=r+s,l=a+Z3;t.setPosition(a);const c=Ui(t.readBytes(Z3)),u=yd(e);let d=0;const h=[];for(let g=0;g<c;++g){t.setPosition(l+(u?g*32:d));const[m,w]=yl(t,e,{staticPosition:l});d+=w,h.push(m)}return t.setPosition(r+32),[h,32]}if(yd(e)){const s=Ui(t.readBytes(Wg)),a=r+s,l=[];for(let c=0;c<n;++c){t.setPosition(a+c*32);const[u]=yl(t,e,{staticPosition:a});l.push(u)}return t.setPosition(r+32),[l,32]}let o=0;const i=[];for(let s=0;s<n;++s){const[a,l]=yl(t,e,{staticPosition:r+o});o+=l,i.push(a)}return[i,o]}function CP(t){return[yP(t.readBytes(32),{size:32}),32]}function EP(t,e,{staticPosition:n}){const[r,o]=e.type.split("bytes");if(!o){const s=Ui(t.readBytes(32));t.setPosition(n+s);const a=Ui(t.readBytes(32));if(a===0)return t.setPosition(n+32),["0x",32];const l=t.readBytes(a);return t.setPosition(n+32),[gr(l),32]}return[gr(t.readBytes(parseInt(o),32)),32]}function _P(t,e){const n=e.type.startsWith("int"),r=parseInt(e.type.split("int")[1]||"256"),o=t.readBytes(32);return[r>48?wP(o,{signed:n}):Ui(o,{signed:n}),32]}function SP(t,e,{staticPosition:n}){const r=e.components.length===0||e.components.some(({name:s})=>!s),o=r?[]:{};let i=0;if(yd(e)){const s=Ui(t.readBytes(Wg)),a=n+s;for(let l=0;l<e.components.length;++l){const c=e.components[l];t.setPosition(a+i);const[u,d]=yl(t,c,{staticPosition:a});i+=d,o[r?l:c==null?void 0:c.name]=u}return t.setPosition(n+32),[o,32]}for(let s=0;s<e.components.length;++s){const a=e.components[s],[l,c]=yl(t,a,{staticPosition:n});o[r?s:a==null?void 0:a.name]=l,i+=c}return[o,i]}function AP(t,{staticPosition:e}){const n=Ui(t.readBytes(32)),r=e+n;t.setPosition(r);const o=Ui(t.readBytes(32));if(o===0)return t.setPosition(e+32),["",32];const i=t.readBytes(o,32),s=vP(ff(i));return t.setPosition(e+32),[s,32]}function yd(t){var r;const{type:e}=t;if(e==="string"||e==="bytes"||e.endsWith("[]"))return!0;if(e==="tuple")return(r=t.components)==null?void 0:r.some(yd);const n=My(t.type);return!!(n&&yd({...t,type:n[1]}))}function $P(t,e){const n=t.exec(e);return n==null?void 0:n.groups}const q3=/^tuple(?<array>(\[(\d*)\])*)$/;function zg(t){let e=t.type;if(q3.test(t.type)&&"components"in t){e="(";const n=t.components.length;for(let o=0;o<n;o++){const i=t.components[o];e+=zg(i),o<n-1&&(e+=", ")}const r=$P(q3,t.type);return e+=`)${(r==null?void 0:r.array)??""}`,zg({...t,type:e})}return"indexed"in t&&t.indexed&&(e=`${e} indexed`),t.name?`${e} ${t.name}`:e}function ou(t){let e="";const n=t.length;for(let r=0;r<n;r++){const o=t[r];e+=zg(o),r!==n-1&&(e+=", ")}return e}function RP(t){return t.type==="function"?`function ${t.name}(${ou(t.inputs)})${t.stateMutability&&t.stateMutability!=="nonpayable"?` ${t.stateMutability}`:""}${t.outputs.length?` returns (${ou(t.outputs)})`:""}`:t.type==="event"?`event ${t.name}(${ou(t.inputs)})`:t.type==="error"?`error ${t.name}(${ou(t.inputs)})`:t.type==="constructor"?`constructor(${ou(t.inputs)})${t.stateMutability==="payable"?" payable":""}`:t.type==="fallback"?"fallback()":"receive() external payable"}const TP=t=>id(Ry(t));function PP(t){return TP(t)}function OP(t){let e=!0,n="",r=0,o="",i=!1;for(let s=0;s<t.length;s++){const a=t[s];if(["(",")",","].includes(a)&&(e=!0),a==="("&&r++,a===")"&&r--,!!e){if(r===0){if(a===" "&&["event","function",""].includes(o))o="";else if(o+=a,a===")"){i=!0;break}continue}if(a===" "){t[s-1]!==","&&n!==","&&n!==",("&&(n="",e=!1);continue}o+=a,n+=a}}if(!i)throw new se("Unable to normalize signature.");return o}const IP=t=>{const e=typeof t=="string"?t:RP(t);return OP(e)};function r8(t){return PP(IP(t))}const kP=r8,Ly=t=>up(r8(t),0,4);function Dy(t){const{abi:e,args:n=[],name:r}=t,o=Rc(r,{strict:!1}),i=e.filter(a=>o?a.type==="function"?Ly(a)===r:a.type==="event"?kP(a)===r:!1:"name"in a&&a.name===r);if(i.length===0)return;if(i.length===1)return i[0];let s;for(const a of i){if(!("inputs"in a))continue;if(!n||n.length===0){if(!a.inputs||a.inputs.length===0)return a;continue}if(!a.inputs||a.inputs.length===0||a.inputs.length!==n.length)continue;if(n.every((c,u)=>{const d="inputs"in a&&a.inputs[u];return d?Hg(c,d):!1})){if(s&&"inputs"in s&&s.inputs){const c=i8(a.inputs,s.inputs,n);if(c)throw new dT({abiItem:a,type:c[0]},{abiItem:s,type:c[1]})}s=a}}return s||i[0]}function Hg(t,e){const n=typeof t,r=e.type;switch(r){case"address":return Ko(t,{strict:!1});case"bool":return n==="boolean";case"function":return n==="string";case"string":return n==="string";default:return r==="tuple"&&"components"in e?Object.values(e.components).every((o,i)=>Hg(Object.values(t)[i],o)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r)?n==="number"||n==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)?n==="string"||t instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)?Array.isArray(t)&&t.every(o=>Hg(o,{...e,type:r.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function i8(t,e,n){for(const r in t){const o=t[r],i=e[r];if(o.type==="tuple"&&i.type==="tuple"&&"components"in o&&"components"in i)return i8(o.components,i.components,n[r]);const s=[o.type,i.type];if(s.includes("address")&&s.includes("bytes20")?!0:s.includes("address")&&s.includes("string")?Ko(n[r],{strict:!1}):s.includes("address")&&s.includes("bytes")?Ko(n[r],{strict:!1}):!1)return s}}const J1="/docs/contract/decodeFunctionResult";function y0(t){const{abi:e,args:n,functionName:r,data:o}=t;let i=e[0];if(r){const a=Dy({abi:e,args:n,name:r});if(!a)throw new cp(r,{docsPath:J1});i=a}if(i.type!=="function")throw new cp(void 0,{docsPath:J1});if(!i.outputs)throw new uT(i.name,{docsPath:J1});const s=n8(i.outputs,o);if(s&&s.length>1)return s;if(s&&s.length===1)return s[0]}const G3="/docs/contract/encodeFunctionData";function NP(t){const{abi:e,args:n,functionName:r}=t;let o=e[0];if(r){const i=Dy({abi:e,args:n,name:r});if(!i)throw new cp(r,{docsPath:G3});o=i}if(o.type!=="function")throw new cp(void 0,{docsPath:G3});return{abi:[o],functionName:Ly(Vl(o))}}function v0(t){const{args:e}=t,{abi:n,functionName:r}=(()=>{var a;return t.abi.length===1&&((a=t.functionName)!=null&&a.startsWith("0x"))?t:NP(t)})(),o=n[0],i=r,s="inputs"in o&&o.inputs?zT(o.inputs,e??[]):void 0;return Wx([i,s??"0x"])}function b0({blockNumber:t,chain:e,contract:n}){var o;const r=(o=e==null?void 0:e.contracts)==null?void 0:o[n];if(!r)throw new Ig({chain:e,contract:{name:n}});if(t&&r.blockCreated&&r.blockCreated>t)throw new Ig({blockNumber:t,chain:e,contract:{name:n,blockCreated:r.blockCreated}});return r.address}const o8={1:"An `assert` condition failed.",17:"Arithmetic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},MP={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},LP={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"};function DP(t){const{abi:e,data:n}=t,r=up(n,0,4);if(r==="0x")throw new g0;const i=[...e||[],MP,LP].find(s=>s.type==="error"&&r===Ly(Vl(s)));if(!i)throw new Fx(r,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:i,args:"inputs"in i&&i.inputs&&i.inputs.length>0?n8(i.inputs,up(n,4)):void 0,errorName:i.name}}function s8({abiItem:t,args:e,includeFunctionName:n=!0,includeName:r=!1}){if("name"in t&&"inputs"in t&&t.inputs)return`${n?t.name:""}(${t.inputs.map((o,i)=>`${r&&o.name?`${o.name}: `:""}${typeof e[i]=="object"?Gs(e[i]):e[i]}`).join(", ")})`}class jP extends se{constructor({address:e}){super(`State for account "${e}" is set multiple times.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountStateConflictError"})}}class BP extends se{constructor(){super("state and stateDiff are set on the same account."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"StateAssignmentConflictError"})}}function K3(t){return t.reduce((e,{slot:n,value:r})=>`${e}        ${n}: ${r}
`,"")}function UP(t){return t.reduce((e,{address:n,...r})=>{let o=`${e}    ${n}:
`;return r.nonce&&(o+=`      nonce: ${r.nonce}
`),r.balance&&(o+=`      balance: ${r.balance}
`),r.code&&(o+=`      code: ${r.code}
`),r.state&&(o+=`      state:
`,o+=K3(r.state)),r.stateDiff&&(o+=`      stateDiff:
`,o+=K3(r.stateDiff)),o},`  State Override:
`).slice(0,-1)}class FP extends se{constructor(e,{account:n,docsPath:r,chain:o,data:i,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:h,stateOverride:g}){var C;const m=n?Tc(n):void 0;let w=Xx({from:m==null?void 0:m.address,to:d,value:typeof h<"u"&&`${nP(h)} ${((C=o==null?void 0:o.nativeCurrency)==null?void 0:C.symbol)||"ETH"}`,data:i,gas:s,gasPrice:typeof a<"u"&&`${qs(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${qs(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${qs(c)} gwei`,nonce:u});g&&(w+=`
${UP(g)}`),super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",w].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class jy extends se{constructor(e,{abi:n,args:r,contractAddress:o,docsPath:i,functionName:s,sender:a}){const l=Dy({abi:n,args:r,name:s}),c=l?s8({abiItem:l,args:r,includeFunctionName:!1,includeName:!1}):void 0,u=l?Vl(l,{includeName:!0}):void 0,d=Xx({address:o&&ZR(o),function:u,args:c&&c!=="()"&&`${[...Array((s==null?void 0:s.length)??0).keys()].map(()=>" ").join("")}${c}`,sender:a});super(e.shortMessage||`An unknown error occurred while executing the contract function "${s}".`,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",d].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=n,this.args=r,this.cause=e,this.contractAddress=o,this.functionName=s,this.sender=a}}class Vg extends se{constructor({abi:e,data:n,functionName:r,message:o}){let i,s,a,l;if(n&&n!=="0x")try{s=DP({abi:e,data:n});const{abiItem:u,errorName:d,args:h}=s;if(d==="Error")l=h[0];else if(d==="Panic"){const[g]=h;l=o8[g]}else{const g=u?Vl(u,{includeName:!0}):void 0,m=u&&h?s8({abiItem:u,args:h,includeFunctionName:!1,includeName:!1}):void 0;a=[g?`Error: ${g}`:"",m&&m!=="()"?`       ${[...Array((d==null?void 0:d.length)??0).keys()].map(()=>" ").join("")}${m}`:""]}}catch(u){i=u}else o&&(l=o);let c;i instanceof Fx&&(c=i.signature,a=[`Unable to decode signature "${c}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${c}.`]),super(l&&l!=="execution reverted"||c?[`The contract function "${r}" reverted with the following ${c?"signature":"reason"}:`,l||c].join(`
`):`The contract function "${r}" reverted.`,{cause:i,metaMessages:a}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=s,this.reason=l,this.signature=c}}class WP extends se{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class By extends se{constructor({data:e,message:n}){super(n||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}function a8(t,e){var r,o,i,s,a,l;if(!(t instanceof se))return!1;const n=t.walk(c=>c instanceof Vg);return n instanceof Vg?!!(((r=n.data)==null?void 0:r.errorName)==="ResolverNotFound"||((o=n.data)==null?void 0:o.errorName)==="ResolverWildcardNotSupported"||((i=n.data)==null?void 0:i.errorName)==="ResolverNotContract"||((s=n.data)==null?void 0:s.errorName)==="ResolverError"||((a=n.data)==null?void 0:a.errorName)==="HttpError"||(l=n.reason)!=null&&l.includes("Wildcard on non-extended resolvers is not supported")||e==="reverse"&&n.reason===o8[50]):!1}function l8(t){if(t.length!==66||t.indexOf("[")!==0||t.indexOf("]")!==65)return null;const e=`0x${t.slice(1,65)}`;return Rc(e)?e:null}function zP(t){let e=new Uint8Array(32).fill(0);if(!t)return gr(e);const n=t.split(".");for(let r=n.length-1;r>=0;r-=1){const o=l8(n[r]),i=o?Ry(o):id(Zs(n[r]),"bytes");e=id(ta([e,i]),"bytes")}return gr(e)}function HP(t){return`[${t.slice(2)}]`}function VP(t){const e=new Uint8Array(32).fill(0);return t?l8(t)||id(Zs(t)):gr(e)}function c8(t){const e=t.replace(/^\.|\.$/gm,"");if(e.length===0)return new Uint8Array(1);const n=new Uint8Array(Zs(e).byteLength+2);let r=0;const o=e.split(".");for(let i=0;i<o.length;i++){let s=Zs(o[i]);s.byteLength>255&&(s=Zs(HP(VP(o[i])))),n[r]=s.length,n.set(s,r+1),r+=s.length+1}return n.byteLength!==r+1?n.slice(0,r+1):n}const ZP=3;function Zg(t,{abi:e,address:n,args:r,docsPath:o,functionName:i,sender:s}){const{code:a,data:l,message:c,shortMessage:u}=t instanceof By?t:t instanceof se?t.walk(h=>"data"in h)||t.walk():{},d=t instanceof g0?new WP({functionName:i}):[ZP,na.code].includes(a)&&(l||c||u)?new Vg({abi:e,data:typeof l=="object"?l.data:l,functionName:i,message:u??c}):t;return new jy(d,{abi:e,args:r,contractAddress:n,docsPath:o,functionName:i,sender:s})}const qP="0x82ad56cb";function GP(t,{docsPath:e,...n}){const r=(()=>{const o=sP(t,n);return o instanceof Jx?t:o})();return new FP(r,{docsPath:e,...n})}const X1=new Map;function u8({fn:t,id:e,shouldSplitBatch:n,wait:r=0,sort:o}){const i=async()=>{const u=l();s();const d=u.map(({args:h})=>h);d.length!==0&&t(d).then(h=>{var g;o&&Array.isArray(h)&&h.sort(o);for(let m=0;m<u.length;m++){const{pendingPromise:w}=u[m];(g=w.resolve)==null||g.call(w,[h[m],h])}}).catch(h=>{var g;for(let m=0;m<u.length;m++){const{pendingPromise:w}=u[m];(g=w.reject)==null||g.call(w,h)}})},s=()=>X1.delete(e),a=()=>l().map(({args:u})=>u),l=()=>X1.get(e)||[],c=u=>X1.set(e,[...l(),u]);return{flush:s,async schedule(u){const d={},h=new Promise((w,C)=>{d.resolve=w,d.reject=C});return(n==null?void 0:n([...a(),u]))&&i(),l().length>0?(c({args:u,pendingPromise:d}),h):(c({args:u,pendingPromise:d}),setTimeout(i,r),h)}}}async function KP(t,e){var E,R,T,k;const{account:n=t.account,batch:r=!!((E=t.batch)!=null&&E.multicall),blockNumber:o,blockTag:i="latest",accessList:s,blobs:a,data:l,gas:c,gasPrice:u,maxFeePerBlobGas:d,maxFeePerGas:h,maxPriorityFeePerGas:g,nonce:m,to:w,value:C,stateOverride:y,...v}=e,b=n?Tc(n):void 0;try{uP(e);const W=(o?dt(o):void 0)||i,D=eO(y),H=(k=(T=(R=t.chain)==null?void 0:R.formatters)==null?void 0:T.transactionRequest)==null?void 0:k.format,ye=(H||cP)({...aP(v,{format:H}),from:b==null?void 0:b.address,accessList:s,blobs:a,data:l,gas:c,gasPrice:u,maxFeePerBlobGas:d,maxFeePerGas:h,maxPriorityFeePerGas:g,nonce:m,to:w,value:C});if(r&&YP({request:ye})&&!D)try{return await QP(t,{...ye,blockNumber:o,blockTag:i})}catch(K){if(!(K instanceof Qx)&&!(K instanceof Ig))throw K}const ne=await t.request({method:"eth_call",params:D?[ye,W,D]:[ye,W]});return ne==="0x"?{data:void 0}:{data:ne}}catch(N){const W=JP(N),{offchainLookup:D,offchainLookupSignature:H}=await Pr(()=>import("./ccip-DAyDB9EU.js"),__vite__mapDeps([]));if((W==null?void 0:W.slice(0,10))===H&&w)return{data:await D(t,{data:W,to:w})};throw GP(N,{...e,account:b,chain:t.chain})}}function YP({request:t}){const{data:e,to:n,...r}=t;return!(!e||e.startsWith(qP)||!n||Object.values(r).filter(o=>typeof o<"u").length>0)}async function QP(t,e){var w;const{batchSize:n=1024,wait:r=0}=typeof((w=t.batch)==null?void 0:w.multicall)=="object"?t.batch.multicall:{},{blockNumber:o,blockTag:i="latest",data:s,multicallAddress:a,to:l}=e;let c=a;if(!c){if(!t.chain)throw new Qx;c=b0({blockNumber:o,chain:t.chain,contract:"multicall3"})}const d=(o?dt(o):void 0)||i,{schedule:h}=u8({id:`${t.uid}.${d}`,wait:r,shouldSplitBatch(C){return C.reduce((v,{data:b})=>v+(b.length-2),0)>n*2},fn:async C=>{const y=C.map(E=>({allowFailure:!0,callData:E.data,target:E.to})),v=v0({abi:Fg,args:[y],functionName:"aggregate3"}),b=await t.request({method:"eth_call",params:[{data:v,to:c},d]});return y0({abi:Fg,args:[y],functionName:"aggregate3",data:b||"0x"})}}),[{returnData:g,success:m}]=await h({data:s,to:l});if(!m)throw new By({data:g});return g==="0x"?{data:void 0}:{data:g}}function JP(t){var n;if(!(t instanceof se))return;const e=t.walk();return typeof(e==null?void 0:e.data)=="object"?(n=e.data)==null?void 0:n.data:e.data}function Y3(t){if(!(!t||t.length===0))return t.reduce((e,{slot:n,value:r})=>{if(n.length!==66)throw new L3({size:n.length,targetSize:66,type:"hex"});if(r.length!==66)throw new L3({size:r.length,targetSize:66,type:"hex"});return e[n]=r,e},{})}function XP(t){const{balance:e,nonce:n,state:r,stateDiff:o,code:i}=t,s={};if(i!==void 0&&(s.code=i),e!==void 0&&(s.balance=dt(e,{size:32})),n!==void 0&&(s.nonce=dt(n,{size:8})),r!==void 0&&(s.state=Y3(r)),o!==void 0){if(s.state)throw new BP;s.stateDiff=Y3(o)}return s}function eO(t){if(!t)return;const e={};for(const{address:n,...r}of t){if(!Ko(n,{strict:!1}))throw new rd({address:n});if(e[n])throw new jP({address:n});e[n]=XP(r)}return e}async function ql(t,e){const{abi:n,address:r,args:o,functionName:i,...s}=e,a=v0({abi:n,args:o,functionName:i});try{const{data:l}=await hf(t,KP,"call")({...s,data:a,to:r});return y0({abi:n,args:o,functionName:i,data:l||"0x"})}catch(l){throw Zg(l,{abi:n,address:r,args:o,docsPath:"/docs/contract/readContract",functionName:i})}}class tO extends se{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class su extends se{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class Uy extends se{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class nO extends se{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}const rO=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,iO=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,oO=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,sO=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function aO(t){try{const e=await fetch(t,{method:"HEAD"});if(e.status===200){const n=e.headers.get("content-type");return n==null?void 0:n.startsWith("image/")}return!1}catch(e){return typeof e=="object"&&typeof e.response<"u"||!globalThis.hasOwnProperty("Image")?!1:new Promise(n=>{const r=new Image;r.onload=()=>{n(!0)},r.onerror=()=>{n(!1)},r.src=t})}}function Q3(t,e){return t?t.endsWith("/")?t.slice(0,-1):t:e}function d8({uri:t,gatewayUrls:e}){const n=oO.test(t);if(n)return{uri:t,isOnChain:!0,isEncoded:n};const r=Q3(e==null?void 0:e.ipfs,"https://ipfs.io"),o=Q3(e==null?void 0:e.arweave,"https://arweave.net"),i=t.match(rO),{protocol:s,subpath:a,target:l,subtarget:c=""}=(i==null?void 0:i.groups)||{},u=s==="ipns:/"||a==="ipns/",d=s==="ipfs:/"||a==="ipfs/"||iO.test(t);if(t.startsWith("http")&&!u&&!d){let g=t;return e!=null&&e.arweave&&(g=t.replace(/https:\/\/arweave.net/g,e==null?void 0:e.arweave)),{uri:g,isOnChain:!1,isEncoded:!1}}if((u||d)&&l)return{uri:`${r}/${u?"ipns":"ipfs"}/${l}${c}`,isOnChain:!1,isEncoded:!1};if(s==="ar:/"&&l)return{uri:`${o}/${l}${c||""}`,isOnChain:!1,isEncoded:!1};let h=t.replace(sO,"");if(h.startsWith("<svg")&&(h=`data:image/svg+xml;base64,${btoa(h)}`),h.startsWith("data:")||h.startsWith("{"))return{uri:h,isOnChain:!0,isEncoded:!1};throw new Uy({uri:t})}function f8(t){if(typeof t!="object"||!("image"in t)&&!("image_url"in t)&&!("image_data"in t))throw new tO({data:t});return t.image||t.image_url||t.image_data}async function lO({gatewayUrls:t,uri:e}){try{const n=await fetch(e).then(o=>o.json());return await Fy({gatewayUrls:t,uri:f8(n)})}catch{throw new Uy({uri:e})}}async function Fy({gatewayUrls:t,uri:e}){const{uri:n,isOnChain:r}=d8({uri:e,gatewayUrls:t});if(r||await aO(n))return n;throw new Uy({uri:e})}function cO(t){let e=t;e.startsWith("did:nft:")&&(e=e.replace("did:nft:","").replace(/_/g,"/"));const[n,r,o]=e.split("/"),[i,s]=n.split(":"),[a,l]=r.split(":");if(!i||i.toLowerCase()!=="eip155")throw new su({reason:"Only EIP-155 supported"});if(!s)throw new su({reason:"Chain ID not found"});if(!l)throw new su({reason:"Contract address not found"});if(!o)throw new su({reason:"Token ID not found"});if(!a)throw new su({reason:"ERC namespace not found"});return{chainID:parseInt(s),namespace:a.toLowerCase(),contractAddress:l,tokenID:o}}async function uO(t,{nft:e}){if(e.namespace==="erc721")return ql(t,{address:e.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(e.tokenID)]});if(e.namespace==="erc1155")return ql(t,{address:e.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(e.tokenID)]});throw new nO({namespace:e.namespace})}async function dO(t,{gatewayUrls:e,record:n}){return/eip155:/i.test(n)?fO(t,{gatewayUrls:e,record:n}):Fy({uri:n,gatewayUrls:e})}async function fO(t,{gatewayUrls:e,record:n}){const r=cO(n),o=await uO(t,{nft:r}),{uri:i,isOnChain:s,isEncoded:a}=d8({uri:o,gatewayUrls:e});if(s&&(i.includes("data:application/json;base64,")||i.startsWith("{"))){const c=a?atob(i.replace("data:application/json;base64,","")):i,u=JSON.parse(c);return Fy({uri:f8(u),gatewayUrls:e})}let l=r.tokenID;return r.namespace==="erc1155"&&(l=l.replace("0x","").padStart(64,"0")),lO({gatewayUrls:e,uri:i.replace(/(?:0x)?{id}/,l)})}async function hO(t,{blockNumber:e,blockTag:n,name:r,key:o,gatewayUrls:i,strict:s,universalResolverAddress:a}){let l=a;if(!l){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");l=b0({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}try{const c={address:l,abi:dP,functionName:"resolve",args:[m0(c8(r)),v0({abi:H3,functionName:"text",args:[zP(r),o]})],blockNumber:e,blockTag:n},u=hf(t,ql,"readContract"),d=i?await u({...c,args:[...c.args,i]}):await u(c);if(d[0]==="0x")return null;const h=y0({abi:H3,functionName:"text",data:d[0]});return h===""?null:h}catch(c){if(s)throw c;if(a8(c,"resolve"))return null;throw c}}async function pO(t,{blockNumber:e,blockTag:n,assetGatewayUrls:r,name:o,gatewayUrls:i,strict:s,universalResolverAddress:a}){const l=await hf(t,hO,"getEnsText")({blockNumber:e,blockTag:n,key:"avatar",name:o,universalResolverAddress:a,gatewayUrls:i,strict:s});if(!l)return null;try{return await dO(t,{record:l,gatewayUrls:r})}catch{return null}}async function mO(t,{address:e,blockNumber:n,blockTag:r,gatewayUrls:o,strict:i,universalResolverAddress:s}){let a=s;if(!a){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");a=b0({blockNumber:n,chain:t.chain,contract:"ensUniversalResolver"})}const l=`${e.toLowerCase().substring(2)}.addr.reverse`;try{const c={address:a,abi:fP,functionName:"reverse",args:[m0(c8(l))],blockNumber:n,blockTag:r},u=hf(t,ql,"readContract"),[d,h]=o?await u({...c,args:[...c.args,o]}):await u(c);return e.toLowerCase()!==h.toLowerCase()?null:d}catch(c){if(i)throw c;if(a8(c,"reverse"))return null;throw c}}async function gO(t,{address:e,blockNumber:n,blockTag:r="latest"}){const o=n?dt(n):void 0,i=await t.request({method:"eth_getBalance",params:[e,o||r]});return BigInt(i)}async function wO(t){return new Promise(e=>setTimeout(e,t))}const qg=256;let eh=qg,th;function yO(t=11){if(!th||eh+t>qg*2){th="",eh=0;for(let e=0;e<qg;e++)th+=(256+Math.random()*256|0).toString(16).substring(1)}return th.substring(eh,eh+++t)}function h8(t){const{batch:e,cacheTime:n=t.pollingInterval??4e3,key:r="base",name:o="Base Client",pollingInterval:i=4e3,type:s="base"}=t,a=t.chain,l=t.account?Tc(t.account):void 0,{config:c,request:u,value:d}=t.transport({chain:a,pollingInterval:i}),h={...c,...d},g={account:l,batch:e,cacheTime:n,chain:a,key:r,name:o,pollingInterval:i,request:u,transport:h,type:s,uid:yO()};function m(w){return C=>{const y=C(w);for(const b in g)delete y[b];const v={...w,...y};return Object.assign(v,{extend:m(v)})}}return Object.assign(g,{extend:m(g)})}function p8(t,{delay:e=100,retryCount:n=2,shouldRetry:r=()=>!0}={}){return new Promise((o,i)=>{const s=async({count:a=0}={})=>{const l=async({error:c})=>{const u=typeof e=="function"?e({count:a,error:c}):e;u&&await wO(u),s({count:a+1})};try{const c=await t();o(c)}catch(c){if(a<n&&await r({count:a,error:c}))return l({error:c});i(c)}};s()})}function vO(t,e={}){return async(n,r={})=>{const{retryDelay:o=150,retryCount:i=3}={...e,...r};return p8(async()=>{try{return await t(n)}catch(s){const a=s;switch(a.code){case od.code:throw new od(a);case sd.code:throw new sd(a);case ad.code:throw new ad(a);case ld.code:throw new ld(a);case na.code:throw new na(a);case cd.code:throw new cd(a);case ud.code:throw new ud(a);case Wo.code:throw new Wo(a);case dd.code:throw new dd(a);case fd.code:throw new fd(a);case Zl.code:throw new Zl(a);case hd.code:throw new hd(a);case Ot.code:throw new Ot(a);case pd.code:throw new pd(a);case md.code:throw new md(a);case gd.code:throw new gd(a);case wd.code:throw new wd(a);case Hn.code:throw new Hn(a);case 5e3:throw new Ot(a);default:throw s instanceof se?s:new oP(a)}}},{delay:({count:s,error:a})=>{var l;if(a&&a instanceof Ru){const c=(l=a==null?void 0:a.headers)==null?void 0:l.get("Retry-After");if(c!=null&&c.match(/\d/))return parseInt(c)*1e3}return~~(1<<s)*o},retryCount:i,shouldRetry:({error:s})=>bO(s)})}}function bO(t){return"code"in t&&typeof t.code=="number"?t.code===-1||t.code===Zl.code||t.code===na.code:t instanceof Ru&&t.status?t.status===403||t.status===408||t.status===413||t.status===429||t.status===500||t.status===502||t.status===503||t.status===504:!0}function m8({key:t,name:e,request:n,retryCount:r=3,retryDelay:o=150,timeout:i,type:s},a){return{config:{key:t,name:e,request:n,retryCount:r,retryDelay:o,timeout:i,type:s},request:vO(n,{retryCount:r,retryDelay:o}),value:a}}function xO(t,e={}){const{key:n="custom",name:r="Custom Provider",retryDelay:o}=e;return({retryCount:i})=>m8({key:n,name:r,request:t.request.bind(t),retryCount:e.retryCount??i,retryDelay:o,type:"custom"})}class CO extends se{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}function g8(t,{errorInstance:e=new Error("timed out"),timeout:n,signal:r}){return new Promise((o,i)=>{(async()=>{let s;try{const a=new AbortController;n>0&&(s=setTimeout(()=>{r?a.abort():i(e)},n)),o(await t({signal:(a==null?void 0:a.signal)||null}))}catch(a){a.name==="AbortError"&&i(e),i(a)}finally{clearTimeout(s)}})()})}function EO(){return{current:0,take(){return this.current++},reset(){this.current=0}}}const J3=EO();function _O(t,e={}){return{async request(n){var u;const{body:r,fetchOptions:o={},onResponse:i=e.onResponse,timeout:s=e.timeout??1e4}=n,{headers:a,method:l,signal:c}={...e.fetchOptions,...o};try{const d=await g8(async({signal:g})=>await fetch(t,{...o,body:Array.isArray(r)?Gs(r.map(w=>({jsonrpc:"2.0",id:w.id??J3.take(),...w}))):Gs({jsonrpc:"2.0",id:r.id??J3.take(),...r}),headers:{...a,"Content-Type":"application/json"},method:l||"POST",signal:c||(s>0?g:null)}),{errorInstance:new z3({body:r,url:t}),timeout:s,signal:!0});i&&await i(d);let h;if((u=d.headers.get("Content-Type"))!=null&&u.startsWith("application/json")?h=await d.json():h=await d.text(),!d.ok)throw new Ru({body:r,details:Gs(h.error)||d.statusText,headers:d.headers,status:d.status,url:t});return h}catch(d){throw d instanceof Ru||d instanceof z3?d:new Ru({body:r,details:d.message,url:t})}}}}function X3(t,e={}){const{batch:n,fetchOptions:r,key:o="http",name:i="HTTP JSON-RPC",onFetchResponse:s,retryDelay:a}=e;return({chain:l,retryCount:c,timeout:u})=>{const{batchSize:d=1e3,wait:h=0}=typeof n=="object"?n:{},g=e.retryCount??c,m=u??e.timeout??1e4,w=t||(l==null?void 0:l.rpcUrls.default.http[0]);if(!w)throw new CO;const C=_O(w,{fetchOptions:r,onResponse:s,timeout:m});return m8({key:o,name:i,async request({method:y,params:v}){const b={method:y,params:v},{schedule:E}=u8({id:`${t}`,wait:h,shouldSplitBatch(N){return N.length>d},fn:N=>C.request({body:N}),sort:(N,W)=>N.id-W.id}),R=async N=>n?E(N):[await C.request({body:N})],[{error:T,result:k}]=await R(b);if(T)throw new e8({body:b,error:T,url:w});return k},retryCount:g,retryDelay:a,timeout:m,type:"http"},{fetchOptions:r,url:w})}}function w8(t){return{formatters:void 0,fees:void 0,serializers:void 0,...t}}async function SO(t,e){var C;const{allowFailure:n=!0,batchSize:r,blockNumber:o,blockTag:i,multicallAddress:s,stateOverride:a}=e,l=e.contracts,c=r??(typeof((C=t.batch)==null?void 0:C.multicall)=="object"&&t.batch.multicall.batchSize||1024);let u=s;if(!u){if(!t.chain)throw new Error("client chain not configured. multicallAddress is required.");u=b0({blockNumber:o,chain:t.chain,contract:"multicall3"})}const d=[[]];let h=0,g=0;for(let y=0;y<l.length;y++){const{abi:v,address:b,args:E,functionName:R}=l[y];try{const T=v0({abi:v,args:E,functionName:R});g+=(T.length-2)/2,c>0&&g>c&&d[h].length>0&&(h++,g=(T.length-2)/2,d[h]=[]),d[h]=[...d[h],{allowFailure:!0,callData:T,target:b}]}catch(T){const k=Zg(T,{abi:v,address:b,args:E,docsPath:"/docs/contract/multicall",functionName:R});if(!n)throw k;d[h]=[...d[h],{allowFailure:!0,callData:"0x",target:b}]}}const m=await Promise.allSettled(d.map(y=>hf(t,ql,"readContract")({abi:Fg,address:u,args:[y],blockNumber:o,blockTag:i,functionName:"aggregate3",stateOverride:a}))),w=[];for(let y=0;y<m.length;y++){const v=m[y];if(v.status==="rejected"){if(!n)throw v.reason;for(let E=0;E<d[y].length;E++)w.push({status:"failure",error:v.reason,result:void 0});continue}const b=v.value;for(let E=0;E<b.length;E++){const{returnData:R,success:T}=b[E],{callData:k}=d[y][E],{abi:N,address:W,functionName:D,args:H}=l[w.length];try{if(k==="0x")throw new g0;if(!T)throw new By({data:R});const he=y0({abi:N,args:H,data:R,functionName:D});w.push(n?{result:he,status:"success"}:he)}catch(he){const ye=Zg(he,{abi:N,address:W,args:H,docsPath:"/docs/contract/multicall",functionName:D});if(!n)throw ye;w.push({error:ye,result:void 0,status:"failure"})}}}if(w.length!==l.length)throw new se("multicall results mismatch");return w}async function AO(t,{account:e=t.account,message:n}){if(!e)throw new JT({docsPath:"/docs/actions/wallet/signMessage"});const r=Tc(e);if(r.type==="local")return r.signMessage({message:n});const o=typeof n=="string"?Ty(n):n.raw instanceof Uint8Array?m0(n.raw):n.raw;return t.request({method:"personal_sign",params:[o,r.address]},{retryCount:0})}function $O(t){const e=n=>t(n.detail);return window.addEventListener("eip6963:announceProvider",e),window.dispatchEvent(new CustomEvent("eip6963:requestProvider")),()=>window.removeEventListener("eip6963:announceProvider",e)}function RO(){const t=new Set;let e=[];const n=()=>$O(o=>{e.some(({info:i})=>i.uuid===o.info.uuid)||(e=[...e,o],t.forEach(i=>i(e,{added:[o]})))});let r=n();return{_listeners(){return t},clear(){t.forEach(o=>o([],{removed:[...e]})),e=[]},destroy(){this.clear(),t.clear(),r()},findProvider({rdns:o}){return e.find(i=>i.info.rdns===o)},getProviders(){return e},reset(){this.clear(),r(),r=n()},subscribe(o,{emitImmediately:i}={}){return t.add(o),i&&o(e,{added:e}),()=>t.delete(o)}}}var TO={VITE_APP_NAME:"Laravel",BASE_URL:"/build/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const PO=t=>(e,n,r)=>{const o=r.subscribe;return r.subscribe=(s,a,l)=>{let c=s;if(a){const u=(l==null?void 0:l.equalityFn)||Object.is;let d=s(r.getState());c=h=>{const g=s(h);if(!u(d,g)){const m=d;a(d=g,m)}},l!=null&&l.fireImmediately&&a(d,d)}return o(c)},t(e,n,r)},OO=PO;function IO(t,e){let n;try{n=t()}catch{return}return{getItem:o=>{var i;const s=l=>l===null?null:JSON.parse(l,e==null?void 0:e.reviver),a=(i=n.getItem(o))!=null?i:null;return a instanceof Promise?a.then(s):s(a)},setItem:(o,i)=>n.setItem(o,JSON.stringify(i,e==null?void 0:e.replacer)),removeItem:o=>n.removeItem(o)}}const vd=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return vd(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return vd(r)(n)}}}},kO=(t,e)=>(n,r,o)=>{let i={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:C=>C,version:0,merge:(C,y)=>({...y,...C}),...e},s=!1;const a=new Set,l=new Set;let c;try{c=i.getStorage()}catch{}if(!c)return t((...C)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...C)},r,o);const u=vd(i.serialize),d=()=>{const C=i.partialize({...r()});let y;const v=u({state:C,version:i.version}).then(b=>c.setItem(i.name,b)).catch(b=>{y=b});if(y)throw y;return v},h=o.setState;o.setState=(C,y)=>{h(C,y),d()};const g=t((...C)=>{n(...C),d()},r,o);let m;const w=()=>{var C;if(!c)return;s=!1,a.forEach(v=>v(r()));const y=((C=i.onRehydrateStorage)==null?void 0:C.call(i,r()))||void 0;return vd(c.getItem.bind(c))(i.name).then(v=>{if(v)return i.deserialize(v)}).then(v=>{if(v)if(typeof v.version=="number"&&v.version!==i.version){if(i.migrate)return i.migrate(v.state,v.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return v.state}).then(v=>{var b;return m=i.merge(v,(b=r())!=null?b:g),n(m,!0),d()}).then(()=>{y==null||y(m,void 0),s=!0,l.forEach(v=>v(m))}).catch(v=>{y==null||y(void 0,v)})};return o.persist={setOptions:C=>{i={...i,...C},C.getStorage&&(c=C.getStorage())},clearStorage:()=>{c==null||c.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>w(),hasHydrated:()=>s,onHydrate:C=>(a.add(C),()=>{a.delete(C)}),onFinishHydration:C=>(l.add(C),()=>{l.delete(C)})},w(),m||g},NO=(t,e)=>(n,r,o)=>{let i={storage:IO(()=>localStorage),partialize:w=>w,version:0,merge:(w,C)=>({...C,...w}),...e},s=!1;const a=new Set,l=new Set;let c=i.storage;if(!c)return t((...w)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...w)},r,o);const u=()=>{const w=i.partialize({...r()});return c.setItem(i.name,{state:w,version:i.version})},d=o.setState;o.setState=(w,C)=>{d(w,C),u()};const h=t((...w)=>{n(...w),u()},r,o);let g;const m=()=>{var w,C;if(!c)return;s=!1,a.forEach(v=>{var b;return v((b=r())!=null?b:h)});const y=((C=i.onRehydrateStorage)==null?void 0:C.call(i,(w=r())!=null?w:h))||void 0;return vd(c.getItem.bind(c))(i.name).then(v=>{if(v)if(typeof v.version=="number"&&v.version!==i.version){if(i.migrate)return i.migrate(v.state,v.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return v.state}).then(v=>{var b;return g=i.merge(v,(b=r())!=null?b:h),n(g,!0),u()}).then(()=>{y==null||y(g,void 0),g=r(),s=!0,l.forEach(v=>v(g))}).catch(v=>{y==null||y(void 0,v)})};return o.persist={setOptions:w=>{i={...i,...w},w.storage&&(c=w.storage)},clearStorage:()=>{c==null||c.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>m(),hasHydrated:()=>s,onHydrate:w=>(a.add(w),()=>{a.delete(w)}),onFinishHydration:w=>(l.add(w),()=>{l.delete(w)})},i.skipHydration||m(),g||h},MO=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((TO?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),kO(t,e)):NO(t,e),LO=MO;var DO={VITE_APP_NAME:"Laravel",BASE_URL:"/build/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const e5=t=>{let e;const n=new Set,r=(l,c)=>{const u=typeof l=="function"?l(e):l;if(!Object.is(u,e)){const d=e;e=c??typeof u!="object"?u:Object.assign({},e,u),n.forEach(h=>h(e,d))}},o=()=>e,a={setState:r,getState:o,subscribe:l=>(n.add(l),()=>n.delete(l)),destroy:()=>{(DO?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return e=t(r,o,a),a},em=t=>t?e5(t):e5;var y8={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function o(l,c,u){this.fn=l,this.context=c,this.once=u||!1}function i(l,c,u,d,h){if(typeof u!="function")throw new TypeError("The listener must be a function");var g=new o(u,d||l,h),m=n?n+c:c;return l._events[m]?l._events[m].fn?l._events[m]=[l._events[m],g]:l._events[m].push(g):(l._events[m]=g,l._eventsCount++),l}function s(l,c){--l._eventsCount===0?l._events=new r:delete l._events[c]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var c=[],u,d;if(this._eventsCount===0)return c;for(d in u=this._events)e.call(u,d)&&c.push(n?d.slice(1):d);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(u)):c},a.prototype.listeners=function(c){var u=n?n+c:c,d=this._events[u];if(!d)return[];if(d.fn)return[d.fn];for(var h=0,g=d.length,m=new Array(g);h<g;h++)m[h]=d[h].fn;return m},a.prototype.listenerCount=function(c){var u=n?n+c:c,d=this._events[u];return d?d.fn?1:d.length:0},a.prototype.emit=function(c,u,d,h,g,m){var w=n?n+c:c;if(!this._events[w])return!1;var C=this._events[w],y=arguments.length,v,b;if(C.fn){switch(C.once&&this.removeListener(c,C.fn,void 0,!0),y){case 1:return C.fn.call(C.context),!0;case 2:return C.fn.call(C.context,u),!0;case 3:return C.fn.call(C.context,u,d),!0;case 4:return C.fn.call(C.context,u,d,h),!0;case 5:return C.fn.call(C.context,u,d,h,g),!0;case 6:return C.fn.call(C.context,u,d,h,g,m),!0}for(b=1,v=new Array(y-1);b<y;b++)v[b-1]=arguments[b];C.fn.apply(C.context,v)}else{var E=C.length,R;for(b=0;b<E;b++)switch(C[b].once&&this.removeListener(c,C[b].fn,void 0,!0),y){case 1:C[b].fn.call(C[b].context);break;case 2:C[b].fn.call(C[b].context,u);break;case 3:C[b].fn.call(C[b].context,u,d);break;case 4:C[b].fn.call(C[b].context,u,d,h);break;default:if(!v)for(R=1,v=new Array(y-1);R<y;R++)v[R-1]=arguments[R];C[b].fn.apply(C[b].context,v)}}return!0},a.prototype.on=function(c,u,d){return i(this,c,u,d,!1)},a.prototype.once=function(c,u,d){return i(this,c,u,d,!0)},a.prototype.removeListener=function(c,u,d,h){var g=n?n+c:c;if(!this._events[g])return this;if(!u)return s(this,g),this;var m=this._events[g];if(m.fn)m.fn===u&&(!h||m.once)&&(!d||m.context===d)&&s(this,g);else{for(var w=0,C=[],y=m.length;w<y;w++)(m[w].fn!==u||h&&!m[w].once||d&&m[w].context!==d)&&C.push(m[w]);C.length?this._events[g]=C.length===1?C[0]:C:s(this,g)}return this},a.prototype.removeAllListeners=function(c){var u;return c?(u=n?n+c:c,this._events[u]&&s(this,u)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,t.exports=a})(y8);var jO=y8.exports;const BO=os(jO);var au=function(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)},Ts;class UO{constructor(e){Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:e}),Ts.set(this,new BO)}on(e,n){au(this,Ts,"f").on(e,n)}once(e,n){au(this,Ts,"f").once(e,n)}off(e,n){au(this,Ts,"f").off(e,n)}emit(e,...n){const r=n[0];au(this,Ts,"f").emit(e,{uid:this.uid,...r})}listenerCount(e){return au(this,Ts,"f").listenerCount(e)}}Ts=new WeakMap;function FO(t){return new UO(t)}function WO(t,e){return JSON.parse(t,(n,r)=>{let o=r;return(o==null?void 0:o.__type)==="bigint"&&(o=BigInt(o.value)),(o==null?void 0:o.__type)==="Map"&&(o=new Map(o.value)),(e==null?void 0:e(n,o))??o})}function t5(t,e){return t.slice(0,e).join(".")||"."}function n5(t,e){const{length:n}=t;for(let r=0;r<n;++r)if(t[r]===e)return r+1;return 0}function zO(t,e){const n=typeof t=="function",r=typeof e=="function",o=[],i=[];return function(a,l){if(typeof l=="object")if(o.length){const c=n5(o,this);c===0?o[o.length]=this:(o.splice(c),i.splice(c)),i[i.length]=a;const u=n5(o,l);if(u!==0)return r?e.call(this,a,l,t5(i,u)):`[ref=${t5(i,u)}]`}else o[0]=l,i[0]=a;return n?t.call(this,a,l):l}}function HO(t,e,n,r){return JSON.stringify(t,zO((o,i)=>{let s=i;return typeof s=="bigint"&&(s={__type:"bigint",value:i.toString()}),s instanceof Map&&(s={__type:"Map",value:Array.from(i.entries())}),(e==null?void 0:e(o,s))??s},r),n??void 0)}function VO(t){const{deserialize:e=WO,key:n="wagmi",serialize:r=HO,storage:o=v8}=t;function i(s){return s instanceof Promise?s.then(a=>a).catch(()=>null):s}return{...o,key:n,async getItem(s,a){const l=o.getItem(`${n}.${s}`),c=await i(l);return c?e(c)??null:a??null},async setItem(s,a){const l=`${n}.${s}`;a===null?await i(o.removeItem(l)):await i(o.setItem(l,r(a)))},async removeItem(s){await i(o.removeItem(`${n}.${s}`))}}}const v8={getItem:()=>null,setItem:()=>{},removeItem:()=>{}};const $h="2.6.9",ZO=()=>`@wagmi/core@${$h}`;var b8=function(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)},hp,x8;let Oc=class Gg extends Error{get docsBaseUrl(){return"https://wagmi.sh/core"}get version(){return ZO()}constructor(e,n={}){var i;super(),hp.add(this),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiCoreError"});const r=n.cause instanceof Gg?n.cause.details:(i=n.cause)!=null&&i.message?n.cause.message:n.details,o=n.cause instanceof Gg&&n.cause.docsPath||n.docsPath;this.message=[e||"An error occurred.","",...n.metaMessages?[...n.metaMessages,""]:[],...o?[`Docs: ${this.docsBaseUrl}${o}.html${n.docsSlug?`#${n.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join(`
`),n.cause&&(this.cause=n.cause),this.details=r,this.docsPath=o,this.metaMessages=n.metaMessages,this.shortMessage=e}walk(e){return b8(this,hp,"m",x8).call(this,this,e)}};hp=new WeakSet,x8=function t(e,n){return n!=null&&n(e)?e:e.cause?b8(this,hp,"m",t).call(this,e.cause,n):e};class Gl extends Oc{constructor(){super("Chain not configured."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotConfiguredError"})}}class qO extends Oc{constructor(){super("Connector already connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAlreadyConnectedError"})}}class GO extends Oc{constructor(){super("Connector not connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorNotConnectedError"})}}class KO extends Oc{constructor({address:e,connector:n}){super(`Account "${e}" not found for connector "${n.name}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAccountNotFoundError"})}}class Ps extends Oc{constructor(){super("Provider not found."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderNotFoundError"})}}class YO extends Oc{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainNotSupportedError"})}}function ci(t){if(typeof t=="string")return Number.parseInt(t,t.trim().substring(0,2)==="0x"?16:10);if(typeof t=="bigint")return Number(t);if(typeof t=="number")return t;throw new Error(`Cannot normalize chainId "${t}" of type "${typeof t}"`)}const QO={coinbaseWallet:{id:"coinbaseWallet",name:"Coinbase Wallet",provider(t){return t!=null&&t.coinbaseWalletExtension?t.coinbaseWalletExtension:Rh(t,"isCoinbaseWallet")}},metaMask:{id:"metaMask",name:"MetaMask",provider(t){return Rh(t,e=>{if(!e.isMetaMask||e.isBraveWallet&&!e._events&&!e._state)return!1;const n=["isApexWallet","isAvalanche","isBitKeep","isBlockWallet","isKuCoinWallet","isMathWallet","isOkxWallet","isOKExWallet","isOneInchIOSWallet","isOneInchAndroidWallet","isOpera","isPortal","isRabby","isTokenPocket","isTokenary","isZerion"];for(const r of n)if(e[r])return!1;return!0})}},phantom:{id:"phantom",name:"Phantom",provider(t){var e,n;return(e=t==null?void 0:t.phantom)!=null&&e.ethereum?(n=t.phantom)==null?void 0:n.ethereum:Rh(t,"isPhantom")}}};x0.type="injected";function x0(t={}){const{shimDisconnect:e=!0,unstable_shimAsyncInject:n}=t;function r(){const o=t.target;if(typeof o=="function"){const i=o();if(i)return i}return typeof o=="object"?o:typeof o=="string"?{...QO[o]??{id:o,name:`${o[0].toUpperCase()}${o.slice(1)}`,provider:`is${o[0].toUpperCase()}${o.slice(1)}`}}:{id:"injected",name:"Injected",provider(i){return i==null?void 0:i.ethereum}}}return o=>({get icon(){return r().icon},get id(){return r().id},get name(){return r().name},type:x0.type,async setup(){const i=await this.getProvider();i&&t.target&&i.on("connect",this.onConnect.bind(this))},async connect({chainId:i,isReconnecting:s}={}){var c,u,d,h,g,m;const a=await this.getProvider();if(!a)throw new Ps;let l=null;if(!s&&(l=await this.getAccounts().catch(()=>null),!!(l!=null&&l.length)))try{l=(h=(d=(u=(c=(await a.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]}))[0])==null?void 0:c.caveats)==null?void 0:u[0])==null?void 0:d.value)==null?void 0:h.map(y=>Rr(y))}catch(C){const y=C;if(y.code===Ot.code)throw new Ot(y);if(y.code===Wo.code)throw y}try{l!=null&&l.length||(l=(await a.request({method:"eth_requestAccounts"})).map(y=>Rr(y))),a.removeListener("connect",this.onConnect.bind(this)),a.on("accountsChanged",this.onAccountsChanged.bind(this)),a.on("chainChanged",this.onChainChanged),a.on("disconnect",this.onDisconnect.bind(this));let w=await this.getChainId();if(i&&w!==i){const C=await this.switchChain({chainId:i}).catch(y=>{if(y.code===Ot.code)throw y;return{id:w}});w=(C==null?void 0:C.id)??w}return e&&(await((g=o.storage)==null?void 0:g.removeItem(`${this.id}.disconnected`)),t.target||await((m=o.storage)==null?void 0:m.setItem("injected.connected",!0))),{accounts:l,chainId:w}}catch(w){const C=w;throw C.code===Ot.code?new Ot(C):C.code===Wo.code?new Wo(C):C}},async disconnect(){var s,a;const i=await this.getProvider();if(!i)throw new Ps;i.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),i.removeListener("chainChanged",this.onChainChanged),i.removeListener("disconnect",this.onDisconnect.bind(this)),i.on("connect",this.onConnect.bind(this)),e&&(await((s=o.storage)==null?void 0:s.setItem(`${this.id}.disconnected`,!0)),t.target||await((a=o.storage)==null?void 0:a.removeItem("injected.connected")))},async getAccounts(){const i=await this.getProvider();if(!i)throw new Ps;return(await i.request({method:"eth_accounts"})).map(a=>Rr(a))},async getChainId(){const i=await this.getProvider();if(!i)throw new Ps;const s=await i.request({method:"eth_chainId"});return ci(s)},async getProvider(){if(typeof window>"u")return;let i;const s=r();return typeof s.provider=="function"?i=s.provider(window):typeof s.provider=="string"?i=Rh(window,s.provider):i=s.provider,i&&!i.removeListener&&("off"in i&&typeof i.off=="function"?i.removeListener=i.off:i.removeListener=()=>{}),i},async isAuthorized(){var i,s;try{if(e&&await((i=o.storage)==null?void 0:i.getItem(`${this.id}.disconnected`))||!t.target&&!await((s=o.storage)==null?void 0:s.getItem("injected.connected")))return!1;if(!await this.getProvider()){if(n!==void 0&&n!==!1){const u=async()=>(typeof window<"u"&&window.removeEventListener("ethereum#initialized",u),!!await this.getProvider()),d=typeof n=="number"?n:1e3;if(await Promise.race([...typeof window<"u"?[new Promise(g=>window.addEventListener("ethereum#initialized",()=>g(u()),{once:!0}))]:[],new Promise(g=>setTimeout(()=>g(u()),d))]))return!0}throw new Ps}return!!(await p8(()=>g8(()=>this.getAccounts(),{timeout:100}))).length}catch{return!1}},async switchChain({chainId:i}){var l,c,u;const s=await this.getProvider();if(!s)throw new Ps;const a=o.chains.find(d=>d.id===i);if(!a)throw new Hn(new Gl);try{return await Promise.all([s.request({method:"wallet_switchEthereumChain",params:[{chainId:dt(i)}]}),new Promise(d=>o.emitter.once("change",({chainId:h})=>{h===i&&d()}))]),a}catch(d){const h=d;if(h.code===4902||((c=(l=h==null?void 0:h.data)==null?void 0:l.originalError)==null?void 0:c.code)===4902)try{const{default:g,...m}=a.blockExplorers??{};let w;if(g&&(w=[g.url,...Object.values(m).map(y=>y.url)]),await s.request({method:"wallet_addEthereumChain",params:[{chainId:dt(i),chainName:a.name,nativeCurrency:a.nativeCurrency,rpcUrls:[((u=a.rpcUrls.default)==null?void 0:u.http[0])??""],blockExplorerUrls:w}]}),await this.getChainId()!==i)throw new Ot(new Error("User rejected switch after adding network."));return a}catch(g){throw new Ot(g)}throw h.code===Ot.code?new Ot(h):new Hn(h)}},async onAccountsChanged(i){var s;if(i.length===0)this.onDisconnect();else if(o.emitter.listenerCount("connect")){const a=(await this.getChainId()).toString();this.onConnect({chainId:a}),e&&await((s=o.storage)==null?void 0:s.removeItem(`${this.id}.disconnected`))}else o.emitter.emit("change",{accounts:i.map(a=>Rr(a))})},onChainChanged(i){const s=ci(i);o.emitter.emit("change",{chainId:s})},async onConnect(i){const s=await this.getAccounts();if(s.length===0)return;const a=ci(i.chainId);o.emitter.emit("connect",{accounts:s,chainId:a});const l=await this.getProvider();l&&(l.removeListener("connect",this.onConnect.bind(this)),l.on("accountsChanged",this.onAccountsChanged.bind(this)),l.on("chainChanged",this.onChainChanged),l.on("disconnect",this.onDisconnect.bind(this)))},async onDisconnect(i){const s=await this.getProvider();i&&i.code===1013&&s&&(await this.getAccounts()).length||(o.emitter.emit("disconnect"),s&&(s.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),s.removeListener("chainChanged",this.onChainChanged),s.removeListener("disconnect",this.onDisconnect.bind(this)),s.on("connect",this.onConnect.bind(this))))}})}function Rh(t,e){function n(o){return typeof e=="function"?e(o):typeof e=="string"?o[e]:!0}const r=t.ethereum;if(r!=null&&r.providers)return r.providers.find(o=>n(o));if(r&&n(r))return r}const Kg=256;let nh=Kg,rh;function JO(t=11){if(!rh||nh+t>Kg*2){rh="",nh=0;for(let e=0;e<Kg;e++)rh+=(256+Math.random()*256|0).toString(16).substring(1)}return rh.substring(nh,nh+++t)}function XO(t){const{multiInjectedProviderDiscovery:e=!0,storage:n=VO({storage:typeof window<"u"&&window.localStorage?window.localStorage:v8}),syncConnectedChain:r=!0,ssr:o,...i}=t,s=typeof window<"u"&&e?RO():void 0,a=em(()=>i.chains),l=em(()=>[...i.connectors??[],...o?[]:(s==null?void 0:s.getProviders().map(u))??[]].map(c));function c(E){var k;const R=FO(JO()),T={...E({emitter:R,chains:a.getState(),storage:n}),emitter:R,uid:R.uid};return R.on("connect",v),(k=T.setup)==null||k.call(T),T}function u(E){const{info:R}=E,T=E.provider;return x0({target:{...R,id:R.rdns,provider:T}})}const d=new Map;function h(E={}){const R=E.chainId??C.getState().chainId,T=a.getState().find(N=>N.id===R);if(E.chainId&&!T)throw new Gl;{const N=d.get(C.getState().chainId);if(N&&!T)return N;if(!T)throw new Gl}{const N=d.get(R);if(N)return N}let k;if(i.client)k=i.client({chain:T});else{const N=T.id,W=a.getState().map(he=>he.id),D={},H=Object.entries(i);for(const[he,ye]of H)if(!(he==="chains"||he==="client"||he==="connectors"||he==="transports"))if(typeof ye=="object")if(N in ye)D[he]=ye[N];else{if(W.some(K=>K in ye))continue;D[he]=ye}else D[he]=ye;k=h8({...D,chain:T,batch:D.batch??{multicall:!0},transport:he=>i.transports[N]({...he,connectors:l})})}return d.set(R,k),k}function g(){return{chainId:a.getState()[0].id,connections:new Map,current:void 0,status:"disconnected"}}let m;const w="0.0.0-canary-";$h.startsWith(w)?m=parseInt($h.replace(w,"")):m=parseInt($h.split(".")[0]??"0");const C=em(OO(n?LO(g,{migrate(E,R){if(R===m)return E;const T=g(),k=E&&typeof E=="object"&&"chainId"in E&&typeof E.chainId=="number"?E.chainId:T.chainId;return{...T,chainId:k}},name:"store",partialize(E){return{connections:{__type:"Map",value:Array.from(E.connections.entries()).map(([R,T])=>{const{id:k,name:N,type:W,uid:D}=T.connector;return[R,{...T,connector:{id:k,name:N,type:W,uid:D}}]})},chainId:E.chainId,current:E.current}},skipHydration:o,storage:n,version:m}):g));r&&C.subscribe(({connections:E,current:R})=>{var T;return R?(T=E.get(R))==null?void 0:T.chainId:void 0},E=>{if(a.getState().some(T=>T.id===E))return C.setState(T=>({...T,chainId:E??T.chainId}))}),s==null||s.subscribe(E=>{const R=new Map;for(const k of l.getState())R.set(k.id,!0);const T=[];for(const k of E){const N=c(u(k));R.has(N.id)||T.push(N)}l.setState(k=>[...k,...T],!0)});function y(E){C.setState(R=>{const T=R.connections.get(E.uid);return T?{...R,connections:new Map(R.connections).set(E.uid,{accounts:E.accounts??T.accounts,chainId:E.chainId??T.chainId,connector:T.connector})}:R})}function v(E){C.getState().status==="connecting"||C.getState().status==="reconnecting"||C.setState(R=>{const T=l.getState().find(k=>k.uid===E.uid);return T?{...R,connections:new Map(R.connections).set(E.uid,{accounts:E.accounts,chainId:E.chainId,connector:T}),current:E.uid,status:"connected"}:R})}function b(E){C.setState(R=>{const T=R.connections.get(E.uid);if(T&&(T.connector.emitter.off("change",y),T.connector.emitter.off("disconnect",b),T.connector.emitter.on("connect",v)),R.connections.delete(E.uid),R.connections.size===0)return{...R,connections:new Map,current:void 0,status:"disconnected"};const k=R.connections.values().next().value;return{...R,connections:new Map(R.connections),current:k.connector.uid}})}return{get chains(){return a.getState()},get connectors(){return l.getState()},storage:n,getClient:h,get state(){return C.getState()},setState(E){let R;typeof E=="function"?R=E(C.getState()):R=E;const T=g();typeof R!="object"&&(R=T),Object.keys(T).some(N=>!(N in R))&&(R=T),C.setState(R,!0)},subscribe(E,R,T){return C.subscribe(E,R,T?{...T,fireImmediately:T.emitImmediately}:void 0)},_internal:{mipd:s,store:C,ssr:!!o,syncConnectedChain:r,transports:i.transports,chains:{setState(E){const R=typeof E=="function"?E(a.getState()):E;if(R.length!==0)return a.setState(R,!0)},subscribe(E){return a.subscribe(E)}},connectors:{providerDetailToConnector:u,setup:c,setState(E){return l.setState(typeof E=="function"?E(l.getState()):E,!0)},subscribe(E){return l.subscribe(E)}},events:{change:y,connect:v,disconnect:b}}}}function Ic(t,e,n){const r=t[e.name];if(typeof r=="function")return r;const o=t[n];return typeof o=="function"?o:i=>e(t,i)}async function r5(t,e){var r;let n;if(typeof e.connector=="function"?n=t._internal.connectors.setup(e.connector):n=e.connector,n.uid===t.state.current)throw new qO;try{t.setState(s=>({...s,status:"connecting"})),n.emitter.emit("message",{type:"connecting"});const o=await n.connect({chainId:e.chainId}),i=o.accounts;return n.emitter.off("connect",t._internal.events.connect),n.emitter.on("change",t._internal.events.change),n.emitter.on("disconnect",t._internal.events.disconnect),await((r=t.storage)==null?void 0:r.setItem("recentConnectorId",n.id)),t.setState(s=>({...s,connections:new Map(s.connections).set(n.uid,{accounts:i,chainId:o.chainId,connector:n}),current:n.uid,status:"connected"})),{accounts:i,chainId:o.chainId}}catch(o){throw t.setState(i=>({...i,status:i.current?"connected":"disconnected"})),o}}async function eI(t,e={}){var o,i;let n;if(e.connector)n=e.connector;else{const{connections:s,current:a}=t.state,l=s.get(a);n=l==null?void 0:l.connector}const r=t.state.connections;n&&(await n.disconnect(),n.emitter.off("change",t._internal.events.change),n.emitter.off("disconnect",t._internal.events.disconnect),n.emitter.on("connect",t._internal.events.connect),r.delete(n.uid)),t.setState(s=>{if(r.size===0)return{...s,connections:new Map,current:void 0,status:"disconnected"};const a=r.values().next().value;return{...s,connections:new Map(r),current:a.connector.uid}});{const s=t.state.current;if(!s)return;const a=(o=t.state.connections.get(s))==null?void 0:o.connector;if(!a)return;await((i=t.storage)==null?void 0:i.setItem("recentConnectorId",a.id))}}async function tI(t,e={}){let n;if(e.connector){const{connector:l}=e,[c,u]=await Promise.all([l.getAccounts(),l.getChainId()]);n={accounts:c,chainId:u,connector:l}}else n=t.state.connections.get(t.state.current);if(!n)throw new GO;const r=e.chainId??n.chainId,o=n.connector;if(o.getClient)return o.getClient({chainId:r});const i=Tc(e.account??n.accounts[0]),s=t.chains.find(l=>l.id===r),a=await n.connector.getProvider({chainId:r});if(e.account&&!n.accounts.includes(i.address))throw new KO({address:i.address,connector:o});return h8({account:i,chain:s,name:"Connector Client",transport:l=>xO(a)({...l,retryCount:0})})}function C8(t){return typeof t=="number"?t:t==="wei"?0:Math.abs(tP[t])}function E8(t){const e=t.state.current,n=t.state.connections.get(e),r=n==null?void 0:n.accounts,o=r==null?void 0:r[0],i=t.chains.find(a=>a.id===(n==null?void 0:n.chainId)),s=t.state.status;switch(s){case"connected":return{address:o,addresses:r,chain:i,chainId:n==null?void 0:n.chainId,connector:n==null?void 0:n.connector,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:s};case"reconnecting":return{address:o,addresses:r,chain:i,chainId:n==null?void 0:n.chainId,connector:n==null?void 0:n.connector,isConnected:!!o,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:s};case"connecting":return{address:o,addresses:r,chain:i,chainId:n==null?void 0:n.chainId,connector:n==null?void 0:n.connector,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:s};case"disconnected":return{address:void 0,addresses:void 0,chain:void 0,chainId:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:s}}}async function nI(t,e){const{allowFailure:n=!0,chainId:r,contracts:o,...i}=e,s=t.getClient({chainId:r});return Ic(s,SO,"multicall")({allowFailure:n,contracts:o,...i})}function rI(t,e){const{chainId:n,...r}=e,o=t.getClient({chainId:n});return Ic(o,ql,"readContract")(r)}async function iI(t,e){const{allowFailure:n=!0,blockNumber:r,blockTag:o,...i}=e,s=e.contracts;try{const a=s.reduce((d,h,g)=>{const m=h.chainId??t.state.chainId;return{...d,[m]:[...d[m]||[],{contract:h,index:g}]}},{}),l=()=>Object.entries(a).map(([d,h])=>nI(t,{...i,allowFailure:n,blockNumber:r,blockTag:o,chainId:parseInt(d),contracts:h.map(({contract:g})=>g)})),c=(await Promise.all(l())).flat(),u=Object.values(a).flatMap(d=>d.map(({index:h})=>h));return c.reduce((d,h,g)=>(d&&(d[u[g]]=h),d),[])}catch(a){if(a instanceof jy)throw a;const l=()=>s.map(c=>rI(t,{...c,blockNumber:r,blockTag:o}));return n?(await Promise.allSettled(l())).map(c=>c.status==="fulfilled"?{result:c.value,status:"success"}:{error:c.reason,result:void 0,status:"failure"}):await Promise.all(l())}}async function oI(t,e){const{address:n,blockNumber:r,blockTag:o,chainId:i,token:s,unit:a="ether"}=e;if(s)try{return i5(t,{balanceAddress:n,chainId:i,symbolType:"string",tokenAddress:s})}catch(h){if(h instanceof jy){const g=await i5(t,{balanceAddress:n,chainId:i,symbolType:"bytes32",tokenAddress:s}),m=nT(ff(g.symbol,{dir:"right"}));return{...g,symbol:m}}throw h}const l=t.getClient({chainId:i}),u=await Ic(l,gO,"getBalance")(r?{address:n,blockNumber:r}:{address:n,blockTag:o}),d=t.chains.find(h=>h.id===i)??l.chain;return{decimals:d.nativeCurrency.decimals,formatted:w0(u,C8(a)),symbol:d.nativeCurrency.symbol,value:u}}async function i5(t,e){const{balanceAddress:n,chainId:r,symbolType:o,tokenAddress:i,unit:s}=e,a={abi:[{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:o}]}],address:i},[l,c,u]=await iI(t,{allowFailure:!1,contracts:[{...a,functionName:"balanceOf",args:[n],chainId:r},{...a,functionName:"decimals",chainId:r},{...a,functionName:"symbol",chainId:r}]}),d=w0(l??"0",C8(s??c));return{decimals:c,formatted:d,symbol:u,value:l}}function Yg(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;let n,r;if(Array.isArray(t)&&Array.isArray(e)){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(!Yg(t[r],e[r]))return!1;return!0}if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const o=Object.keys(t);if(n=o.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(i&&!Yg(t[i],e[i]))return!1}return!0}return t!==t&&e!==e}function sI(t,e){const{chainId:n,...r}=e,o=t.getClient({chainId:n});return Ic(o,pO,"getEnsAvatar")(r)}function aI(t,e){const{chainId:n,...r}=e,o=t.getClient({chainId:n});return Ic(o,mO,"getEnsName")(r)}let tm=!1;async function lI(t,e={}){var c,u;if(tm)return[];tm=!0,t.setState(d=>({...d,status:d.current?"reconnecting":"connecting"}));const n=[];if((c=e.connectors)!=null&&c.length)for(const d of e.connectors){let h;typeof d=="function"?h=t._internal.connectors.setup(d):h=d,n.push(h)}else n.push(...t.connectors);let r;try{r=await((u=t.storage)==null?void 0:u.getItem("recentConnectorId"))}catch{}const o={};for(const[,d]of t.state.connections)o[d.connector.id]=1;r&&(o[r]=0);const i=Object.keys(o).length>0?[...n].sort((d,h)=>(o[d.id]??10)-(o[h.id]??10)):n;let s=!1;const a=[],l=[];for(const d of i){const h=await d.getProvider();if(!h||l.some(w=>w===h)||!await d.isAuthorized())continue;const m=await d.connect({isReconnecting:!0}).catch(()=>null);m&&(d.emitter.off("connect",t._internal.events.connect),d.emitter.on("change",t._internal.events.change),d.emitter.on("disconnect",t._internal.events.disconnect),t.setState(w=>{const C=new Map(s?w.connections:new Map).set(d.uid,{accounts:m.accounts,chainId:m.chainId,connector:d});return{...w,current:s?w.current:d.uid,connections:C}}),a.push({accounts:m.accounts,chainId:m.chainId,connector:d}),l.push(h),s=!0)}return(t.state.status==="reconnecting"||t.state.status==="connecting")&&(s?t.setState(d=>({...d,status:"connected"})):t.setState(d=>({...d,connections:new Map,current:void 0,status:"disconnected"}))),tm=!1,a}async function cI(t,e){const{account:n,connector:r,...o}=e;let i;return typeof n=="object"&&n.type==="local"?i=t.getClient():i=await tI(t,{account:n,connector:r}),Ic(i,AO,"signMessage")({...o,...n?{account:n}:{}})}async function uI(t,e){var i;const{chainId:n}=e,r=t.state.connections.get(((i=e.connector)==null?void 0:i.uid)??t.state.current);if(r){const s=r.connector;if(!s.switchChain)throw new YO({connector:s});return await s.switchChain({chainId:n})}const o=t.chains.find(s=>s.id===n);if(!o)throw new Gl;return t.setState(s=>({...s,chainId:n})),o}function dI(t,e){const{onChange:n}=e;return t.subscribe(()=>E8(t),n,{equalityFn(r,o){const{connector:i,...s}=r,{connector:a,...l}=o;return Yg(s,l)&&(i==null?void 0:i.id)===(a==null?void 0:a.id)&&(i==null?void 0:i.uid)===(a==null?void 0:a.uid)}})}function fI(t,e){const{onChange:n}=e;return t._internal.connectors.subscribe((r,o)=>{n(Object.values(r),o)})}function hI(t,e){const{initialState:n,reconnectOnMount:r}=e;return n&&!t._internal.store.persist.hasHydrated()&&t.setState({...n,connections:r?n.connections:new Map,status:r?"reconnecting":"disconnected"}),{async onMount(){var o;if(t._internal.ssr){await t._internal.store.persist.rehydrate();const i=(o=t._internal.mipd)==null?void 0:o.getProviders().map(t._internal.connectors.providerDetailToConnector).map(t._internal.connectors.setup);t._internal.connectors.setState(s=>[...s,...i??[]])}r?lI(t):t.storage&&t.setState(i=>({...i,connections:new Map}))}}}const pI=w8({id:42161,name:"Arbitrum One",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://arb1.arbitrum.io/rpc"]}},blockExplorers:{default:{name:"Arbiscan",url:"https://arbiscan.io",apiUrl:"https://api.arbiscan.io/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:7654707}}}),_8=w8({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://cloudflare-eth.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xce01f8eee7E479C928F8919abD53E553a36CeF67",blockCreated:19258213},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}}),mI=Symbol(),o5=Object.getPrototypeOf,Qg=new WeakMap,gI=t=>t&&(Qg.has(t)?Qg.get(t):o5(t)===Object.prototype||o5(t)===Array.prototype),wI=t=>gI(t)&&t[mI]||null,s5=(t,e=!0)=>{Qg.set(t,e)};var pp={VITE_APP_NAME:"Laravel",BASE_URL:"/build/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const nm=t=>typeof t=="object"&&t!==null,wo=new WeakMap,mu=new WeakSet,yI=(t=Object.is,e=(c,u)=>new Proxy(c,u),n=c=>nm(c)&&!mu.has(c)&&(Array.isArray(c)||!(Symbol.iterator in c))&&!(c instanceof WeakMap)&&!(c instanceof WeakSet)&&!(c instanceof Error)&&!(c instanceof Number)&&!(c instanceof Date)&&!(c instanceof String)&&!(c instanceof RegExp)&&!(c instanceof ArrayBuffer),r=c=>{switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:throw c}},o=new WeakMap,i=(c,u,d=r)=>{const h=o.get(c);if((h==null?void 0:h[0])===u)return h[1];const g=Array.isArray(c)?[]:Object.create(Object.getPrototypeOf(c));return s5(g,!0),o.set(c,[u,g]),Reflect.ownKeys(c).forEach(m=>{if(Object.getOwnPropertyDescriptor(g,m))return;const w=Reflect.get(c,m),C={value:w,enumerable:!0,configurable:!0};if(mu.has(w))s5(w,!1);else if(w instanceof Promise)delete C.value,C.get=()=>d(w);else if(wo.has(w)){const[y,v]=wo.get(w);C.value=i(y,v(),d)}Object.defineProperty(g,m,C)}),Object.preventExtensions(g)},s=new WeakMap,a=[1,1],l=c=>{if(!nm(c))throw new Error("object required");const u=s.get(c);if(u)return u;let d=a[0];const h=new Set,g=(W,D=++a[0])=>{d!==D&&(d=D,h.forEach(H=>H(W,D)))};let m=a[1];const w=(W=++a[1])=>(m!==W&&!h.size&&(m=W,y.forEach(([D])=>{const H=D[1](W);H>d&&(d=H)})),d),C=W=>(D,H)=>{const he=[...D];he[1]=[W,...he[1]],g(he,H)},y=new Map,v=(W,D)=>{if((pp?"production":void 0)!=="production"&&y.has(W))throw new Error("prop listener already exists");if(h.size){const H=D[3](C(W));y.set(W,[D,H])}else y.set(W,[D])},b=W=>{var D;const H=y.get(W);H&&(y.delete(W),(D=H[1])==null||D.call(H))},E=W=>(h.add(W),h.size===1&&y.forEach(([H,he],ye)=>{if((pp?"production":void 0)!=="production"&&he)throw new Error("remove already exists");const ne=H[3](C(ye));y.set(ye,[H,ne])}),()=>{h.delete(W),h.size===0&&y.forEach(([H,he],ye)=>{he&&(he(),y.set(ye,[H]))})}),R=Array.isArray(c)?[]:Object.create(Object.getPrototypeOf(c)),k=e(R,{deleteProperty(W,D){const H=Reflect.get(W,D);b(D);const he=Reflect.deleteProperty(W,D);return he&&g(["delete",[D],H]),he},set(W,D,H,he){const ye=Reflect.has(W,D),ne=Reflect.get(W,D,he);if(ye&&(t(ne,H)||s.has(H)&&t(ne,s.get(H))))return!0;b(D),nm(H)&&(H=wI(H)||H);let K=H;if(H instanceof Promise)H.then(q=>{H.status="fulfilled",H.value=q,g(["resolve",[D],q])}).catch(q=>{H.status="rejected",H.reason=q,g(["reject",[D],q])});else{!wo.has(H)&&n(H)&&(K=l(H));const q=!mu.has(K)&&wo.get(K);q&&v(D,q)}return Reflect.set(W,D,K,he),g(["set",[D],H,ne]),!0}});s.set(c,k);const N=[R,w,i,E];return wo.set(k,N),Reflect.ownKeys(c).forEach(W=>{const D=Object.getOwnPropertyDescriptor(c,W);"value"in D&&(k[W]=c[W],delete D.value,delete D.writable),Object.defineProperty(R,W,D)}),k})=>[l,wo,mu,t,e,n,r,o,i,s,a],[vI]=yI();function Cn(t={}){return vI(t)}function ui(t,e,n){const r=wo.get(t);(pp?"production":void 0)!=="production"&&!r&&console.warn("Please use proxy object");let o;const i=[],s=r[3];let a=!1;const c=s(u=>{if(i.push(u),n){e(i.splice(0));return}o||(o=Promise.resolve().then(()=>{o=void 0,a&&e(i.splice(0))}))});return a=!0,()=>{a=!1,c()}}function S8(t,e){const n=wo.get(t);(pp?"production":void 0)!=="production"&&!n&&console.warn("Please use proxy object");const[r,o,i]=n;return i(r,o(),e)}function bd(t){return mu.add(t),t}function zr(t,e,n,r){let o=t[e];return ui(t,()=>{const i=t[e];Object.is(o,i)||n(o=i)},r)}const rm="https://secure.walletconnect.com",A8=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:""}],Fn={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:rm,SECURE_SITE_DASHBOARD:`${rm}/dashboard`,SECURE_SITE_FAVICON:`${rm}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"},WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e"},le={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){const t=window.navigator.userAgent.toLowerCase();return le.isMobile()&&t.includes("android")},isIos(){const t=window.navigator.userAgent.toLowerCase();return le.isMobile()&&(t.includes("iphone")||t.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(t){return t?t-Date.now()<=Fn.TEN_SEC_MS:!0},isAllowedRetry(t){return Date.now()-t>=Fn.ONE_SEC_MS},copyToClopboard(t){navigator.clipboard.writeText(t)},getPairingExpiry(){return Date.now()+Fn.FOUR_MINUTES_MS},getPlainAddress(t){return t.split(":")[2]},async wait(t){return new Promise(e=>{setTimeout(e,t)})},debounce(t,e=500){let n;return(...r)=>{function o(){t(...r)}n&&clearTimeout(n),n=setTimeout(o,e)}},isHttpUrl(t){return t.startsWith("http://")||t.startsWith("https://")},formatNativeUrl(t,e){if(le.isHttpUrl(t))return this.formatUniversalUrl(t,e);let n=t;n.includes("://")||(n=t.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(e);return{redirect:`${n}wc?uri=${r}`,href:n}},formatUniversalUrl(t,e){if(!le.isHttpUrl(t))return this.formatNativeUrl(t,e);let n=t;n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(e);return{redirect:`${n}wc?uri=${r}`,href:n}},openHref(t,e,n){window.open(t,e,n||"noreferrer noopener")},async preloadImage(t){const e=new Promise((n,r)=>{const o=new Image;o.onload=n,o.onerror=r,o.crossOrigin="anonymous",o.src=t});return Promise.race([e,le.wait(2e3)])},formatBalance(t,e){var r;let n;if(t==="0")n="0.000";else if(typeof t=="string"){const o=Number(t);o&&(n=(r=o.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:r[0])}return n?`${n} ${e??""}`:`0.000 ${e??""}`},formatBalance2(t,e){var r;let n;if(t==="0")n="0";else if(typeof t=="string"){const o=Number(t);o&&(n=(r=o.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:r[0])}return{value:n??"0",rest:n==="0"?"000":"",symbol:e}},isRestrictedRegion(){try{const{timeZone:t}=new Intl.DateTimeFormat().resolvedOptions(),e=t.toUpperCase();return Fn.RESTRICTED_TIMEZONES.includes(e)}catch{return!1}},getApiUrl(){return le.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return le.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return le.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})},parseError(t){var e,n;return typeof t=="string"?t:typeof((n=(e=t==null?void 0:t.issues)==null?void 0:e[0])==null?void 0:n.message)=="string"?t.issues[0].message:t instanceof Error?t.message:"Unknown error"},sortRequestedNetworks(t,e=[]){const n={};return e&&t&&(t.forEach((r,o)=>{n[r]=o}),e.sort((r,o)=>{const i=n[r.id],s=n[o.id];return i!==void 0&&s!==void 0?i-s:i!==void 0?-1:s!==void 0?1:0})),e},calculateBalance(t){let e=0;for(const n of t)e+=n.value;return e},formatTokenBalance(t){const e=t.toFixed(2),[n,r]=e.split(".");return{dollars:n,pennies:r}}};class Wy{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,signal:n,...r}){const o=this.createUrl(r);return(await fetch(o,{method:"GET",headers:e,signal:n,cache:"no-cache"})).json()}async getBlob({headers:e,signal:n,...r}){const o=this.createUrl(r);return(await fetch(o,{method:"GET",headers:e,signal:n})).blob()}async post({body:e,headers:n,signal:r,...o}){const i=this.createUrl(o);return(await fetch(i,{method:"POST",headers:n,body:e?JSON.stringify(e):void 0,signal:r})).json()}async put({body:e,headers:n,signal:r,...o}){const i=this.createUrl(o);return(await fetch(i,{method:"PUT",headers:n,body:e?JSON.stringify(e):void 0,signal:r})).json()}async delete({body:e,headers:n,signal:r,...o}){const i=this.createUrl(o);return(await fetch(i,{method:"DELETE",headers:n,body:e?JSON.stringify(e):void 0,signal:r})).json()}createUrl({path:e,params:n}){const r=new URL(e,this.baseUrl);return n&&Object.entries(n).forEach(([o,i])=>{i&&r.searchParams.append(o,i)}),r}}const qt=Cn({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),Ce={state:qt,subscribeKey(t,e){return zr(qt,t,e)},setProjectId(t){qt.projectId=t},setAllWallets(t){qt.allWallets=t},setIncludeWalletIds(t){qt.includeWalletIds=t},setExcludeWalletIds(t){qt.excludeWalletIds=t},setFeaturedWalletIds(t){qt.featuredWalletIds=t},setTokens(t){qt.tokens=t},setTermsConditionsUrl(t){qt.termsConditionsUrl=t},setPrivacyPolicyUrl(t){qt.privacyPolicyUrl=t},setCustomWallets(t){qt.customWallets=t},setIsSiweEnabled(t){qt.isSiweEnabled=t},setEnableAnalytics(t){qt.enableAnalytics=t},setSdkVersion(t){qt.sdkVersion=t},setMetadata(t){qt.metadata=t},setOnrampEnabled(t){qt.enableOnramp=t},setWalletFeaturesEnabled(t){qt.enableWalletFeatures=t}},bI={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},xI=le.getBlockchainApiUrl(),Ha=new Wy({baseUrl:xI}),ra={fetchIdentity({caipChainId:t,address:e}){return Ha.get({path:`/v1/identity/${e}`,params:{chainId:t,projectId:Ce.state.projectId}})},fetchTransactions({account:t,projectId:e,cursor:n,onramp:r,signal:o}){const i=n?{cursor:n}:{};return Ha.get({path:`/v1/account/${t}/history?projectId=${e}${r?`&onramp=${r}`:""}`,params:i,signal:o})},async getBalance(t){return Ha.get({path:`/v1/account/${t}/balance`,params:{currency:"usd",projectId:Ce.state.projectId}})},async generateOnRampURL({destinationWallets:t,partnerUserId:e,defaultNetwork:n,purchaseAmount:r,paymentAmount:o}){return(await Ha.post({path:`/v1/generators/onrampurl?projectId=${Ce.state.projectId}`,body:{destinationWallets:t,defaultNetwork:n,partnerUserId:e,defaultExperience:"buy",presetCryptoAmount:r,presetFiatAmount:o}})).url},async getOnrampOptions(){try{return await Ha.get({path:`/v1/onramp/options?projectId=${Ce.state.projectId}`})}catch{return bI}},async getOnrampQuote({purchaseCurrency:t,paymentCurrency:e,amount:n,network:r}){try{return await Ha.post({path:`/v1/onramp/quote?projectId=${Ce.state.projectId}`,body:{purchaseCurrency:t,paymentCurrency:e,amount:n,network:r}})}catch{return{coinbaseFee:{amount:n,currency:e.id},networkFee:{amount:n,currency:e.id},paymentSubtotal:{amount:n,currency:e.id},paymentTotal:{amount:n,currency:e.id},purchaseAmount:{amount:n,currency:e.id},quoteId:"mocked-quote-id"}}}},Ti=Cn({message:"",variant:"success",open:!1}),Ve={state:Ti,subscribeKey(t,e){return zr(Ti,t,e)},showSuccess(t){Ti.message=t,Ti.variant="success",Ti.open=!0},showError(t){const e=le.parseError(t);Ti.message=e,Ti.variant="error",Ti.open=!0},hide(){Ti.open=!1}},it=Cn({isConnected:!1,currentTab:0,tokenBalance:[]}),me={state:it,subscribe(t){return ui(it,()=>t(it))},subscribeKey(t,e){return zr(it,t,e)},setIsConnected(t){it.isConnected=t},setCaipAddress(t){it.caipAddress=t,it.address=t?le.getPlainAddress(t):void 0},setBalance(t,e){it.balance=t,it.balanceSymbol=e},setProfileName(t){it.profileName=t},setProfileImage(t){it.profileImage=t},setAddressExplorerUrl(t){it.addressExplorerUrl=t},setSmartAccountDeployed(t){it.smartAccountDeployed=t},setCurrentTab(t){it.currentTab=t},setTokenBalance(t){t&&(it.tokenBalance=bd(t))},async fetchTokenBalance(){try{if(it.address){const t=await ra.getBalance(it.address);this.setTokenBalance(t.balances)}}catch{Ve.showError("Failed to fetch token balance")}},resetAccount(){it.isConnected=!1,it.caipAddress=void 0,it.address=void 0,it.balance=void 0,it.balanceSymbol=void 0,it.profileName=void 0,it.profileImage=void 0,it.addressExplorerUrl=void 0,it.smartAccountDeployed=void 0,it.currentTab=0}},im="WALLETCONNECT_DEEPLINK_CHOICE",a5="@w3m/recent",l5="@w3m/connected_wallet_image_url",c5="@w3m/connected_connector",Qt={setWalletConnectDeepLink({href:t,name:e}){try{localStorage.setItem(im,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const t=localStorage.getItem(im);if(t)return JSON.parse(t)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(im)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(t){try{const e=Qt.getRecentWallets();e.find(r=>r.id===t.id)||(e.unshift(t),e.length>2&&e.pop(),localStorage.setItem(a5,JSON.stringify(e)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const t=localStorage.getItem(a5);return t?JSON.parse(t):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(t){try{localStorage.setItem(l5,t)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(l5)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(t){try{localStorage.setItem(c5,t)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(c5)}catch{console.info("Unable to get Connected Connector")}}},Cr=Cn({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),zt={state:Cr,subscribeNetworkImages(t){return ui(Cr.networkImages,()=>t(Cr.networkImages))},subscribeKey(t,e){return zr(Cr,t,e)},subscribe(t){return ui(Cr,()=>t(Cr))},setWalletImage(t,e){Cr.walletImages[t]=e},setNetworkImage(t,e){Cr.networkImages[t]=e},setConnectorImage(t,e){Cr.connectorImages[t]=e},setTokenImage(t,e){Cr.tokenImages[t]=e},setCurrencyImage(t,e){Cr.currencyImages[t]=e}},Cs=Cn({themeMode:"dark",themeVariables:{}}),Mt={state:Cs,subscribe(t){return ui(Cs,()=>t(Cs))},setThemeMode(t){Cs.themeMode=t;try{const e=ot.getEmailConnector();e&&e.provider.syncTheme({themeMode:Mt.getSnapshot().themeMode})}catch{console.info("Unable to sync theme to email connector")}},setThemeVariables(t){Cs.themeVariables={...Cs.themeVariables,...t};try{const e=ot.getEmailConnector();e&&e.provider.syncTheme({themeVariables:Mt.getSnapshot().themeVariables})}catch{console.info("Unable to sync theme to email connector")}},getSnapshot(){return S8(Cs)}},Es=Cn({connectors:[]}),ot={state:Es,subscribeKey(t,e){return zr(Es,t,e)},setConnectors(t){Es.connectors=t.map(e=>bd(e))},addConnector(t){var e,n;if(Es.connectors.push(bd(t)),t.id==="w3mEmail"){const r=t,o=S8(Ce.state);(n=(e=r==null?void 0:r.provider)==null?void 0:e.syncDappData)==null||n.call(e,{metadata:o.metadata,sdkVersion:o.sdkVersion,projectId:o.projectId}),r.provider.syncTheme({themeMode:Mt.getSnapshot().themeMode,themeVariables:Mt.getSnapshot().themeVariables})}},getEmailConnector(){return Es.connectors.find(t=>t.type==="EMAIL")},getAnnouncedConnectorRdns(){return Es.connectors.filter(t=>t.type==="ANNOUNCED").map(t=>{var e;return(e=t.info)==null?void 0:e.rdns})},getConnectors(){return Es.connectors}},lu=Cn({open:!1,selectedNetworkId:void 0}),Kl={state:lu,subscribe(t){return ui(lu,()=>t(lu))},set(t){Object.assign(lu,{...lu,...t})}},CI=le.getAnalyticsUrl(),EI=new Wy({baseUrl:CI}),_I=["MODAL_CREATED"],Va=Cn({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),xe={state:Va,subscribe(t){return ui(Va,()=>t(Va))},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:n}=Ce.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":n}},async _sendAnalyticsEvent(t){try{if(_I.includes(t.data.event)||typeof window>"u")return;await EI.post({path:"/e",headers:xe._getApiHeaders(),body:{eventId:le.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:t.timestamp,props:t.data}})}catch{}},sendEvent(t){Va.timestamp=Date.now(),Va.data=t,Ce.state.enableAnalytics&&xe._sendAnalyticsEvent(Va)}},xt=Cn({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),Pe={state:xt,subscribeKey(t,e){return zr(xt,t,e)},_getClient(){if(!xt._client)throw new Error("NetworkController client not set");return xt._client},setClient(t){xt._client=bd(t)},setCaipNetwork(t){xt.caipNetwork=t,Kl.set({selectedNetworkId:t==null?void 0:t.id}),this.state.allowUnsupportedChain||this.checkIfSupportedNetwork()},setDefaultCaipNetwork(t){xt.caipNetwork=t,Kl.set({selectedNetworkId:t==null?void 0:t.id}),xt.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(t){xt.requestedCaipNetworks=t},setAllowUnsupportedChain(t){xt.allowUnsupportedChain=t},getRequestedCaipNetworks(){const{approvedCaipNetworkIds:t,requestedCaipNetworks:e}=xt,n=t,r=e;return le.sortRequestedNetworks(n,r)},async getApprovedCaipNetworksData(){const t=await this._getClient().getApprovedCaipNetworksData();xt.supportsAllNetworks=t.supportsAllNetworks,xt.approvedCaipNetworkIds=t.approvedCaipNetworkIds},async switchActiveNetwork(t){await this._getClient().switchCaipNetwork(t),xt.caipNetwork=t,t&&xe.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:t.id}})},checkIfSupportedNetwork(){var t;xt.isUnsupportedChain=!((t=xt.requestedCaipNetworks)!=null&&t.some(e=>{var n;return e.id===((n=xt.caipNetwork)==null?void 0:n.id)})),xt.isUnsupportedChain&&this.showUnsupportedChainUI()},resetNetwork(){xt.isDefaultCaipNetwork||(xt.caipNetwork=void 0),xt.approvedCaipNetworkIds=void 0,xt.supportsAllNetworks=!0},showUnsupportedChainUI(){setTimeout(()=>{Me.open({view:"UnsupportedChain"})},300)}},SI=le.getApiUrl(),fn=new Wy({baseUrl:SI}),AI="40",u5="4",hn=Cn({page:1,count:0,featured:[],recommended:[],wallets:[],search:[],isAnalyticsEnabled:!1}),Ae={state:hn,subscribeKey(t,e){return zr(hn,t,e)},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:n}=Ce.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":n}},async _fetchWalletImage(t){const e=`${fn.baseUrl}/getWalletImage/${t}`,n=await fn.getBlob({path:e,headers:Ae._getApiHeaders()});zt.setWalletImage(t,URL.createObjectURL(n))},async _fetchNetworkImage(t){const e=`${fn.baseUrl}/public/getAssetImage/${t}`,n=await fn.getBlob({path:e,headers:Ae._getApiHeaders()});zt.setNetworkImage(t,URL.createObjectURL(n))},async _fetchConnectorImage(t){const e=`${fn.baseUrl}/public/getAssetImage/${t}`,n=await fn.getBlob({path:e,headers:Ae._getApiHeaders()});zt.setConnectorImage(t,URL.createObjectURL(n))},async _fetchCurrencyImage(t){const e=`${fn.baseUrl}/public/getCurrencyImage/${t}`,n=await fn.getBlob({path:e,headers:Ae._getApiHeaders()});zt.setCurrencyImage(t,URL.createObjectURL(n))},async _fetchTokenImage(t){const e=`${fn.baseUrl}/public/getTokenImage/${t}`,n=await fn.getBlob({path:e,headers:Ae._getApiHeaders()});zt.setTokenImage(t,URL.createObjectURL(n))},async fetchNetworkImages(){const{requestedCaipNetworks:t}=Pe.state,e=t==null?void 0:t.map(({imageId:n})=>n).filter(Boolean);e&&await Promise.allSettled(e.map(n=>Ae._fetchNetworkImage(n)))},async fetchConnectorImages(){const{connectors:t}=ot.state,e=t.map(({imageId:n})=>n).filter(Boolean);await Promise.allSettled(e.map(n=>Ae._fetchConnectorImage(n)))},async fetchCurrencyImages(t=[]){await Promise.allSettled(t.map(e=>Ae._fetchCurrencyImage(e)))},async fetchTokenImages(t=[]){await Promise.allSettled(t.map(e=>Ae._fetchTokenImage(e)))},async fetchFeaturedWallets(){const{featuredWalletIds:t}=Ce.state;if(t!=null&&t.length){const{data:e}=await fn.get({path:"/getWallets",headers:Ae._getApiHeaders(),params:{page:"1",entries:t!=null&&t.length?String(t.length):u5,include:t==null?void 0:t.join(",")}});e.sort((r,o)=>t.indexOf(r.id)-t.indexOf(o.id));const n=e.map(r=>r.image_id).filter(Boolean);await Promise.allSettled(n.map(r=>Ae._fetchWalletImage(r))),hn.featured=e}},async fetchRecommendedWallets(){const{includeWalletIds:t,excludeWalletIds:e,featuredWalletIds:n}=Ce.state,r=[...e??[],...n??[]].filter(Boolean),{data:o,count:i}=await fn.get({path:"/getWallets",headers:Ae._getApiHeaders(),params:{page:"1",entries:u5,include:t==null?void 0:t.join(","),exclude:r==null?void 0:r.join(",")}}),s=Qt.getRecentWallets(),a=o.map(c=>c.image_id).filter(Boolean),l=s.map(c=>c.image_id).filter(Boolean);await Promise.allSettled([...a,...l].map(c=>Ae._fetchWalletImage(c))),hn.recommended=o,hn.count=i??0},async fetchWallets({page:t}){const{includeWalletIds:e,excludeWalletIds:n,featuredWalletIds:r}=Ce.state,o=[...hn.recommended.map(({id:l})=>l),...n??[],...r??[]].filter(Boolean),{data:i,count:s}=await fn.get({path:"/getWallets",headers:Ae._getApiHeaders(),params:{page:String(t),entries:AI,include:e==null?void 0:e.join(","),exclude:o.join(",")}}),a=i.map(l=>l.image_id).filter(Boolean);await Promise.allSettled([...a.map(l=>Ae._fetchWalletImage(l)),le.wait(300)]),hn.wallets=[...hn.wallets,...i],hn.count=s>hn.count?s:hn.count,hn.page=t},async searchWallet({search:t}){const{includeWalletIds:e,excludeWalletIds:n}=Ce.state;hn.search=[];const{data:r}=await fn.get({path:"/getWallets",headers:Ae._getApiHeaders(),params:{page:"1",entries:"100",search:t,include:e==null?void 0:e.join(","),exclude:n==null?void 0:n.join(",")}}),o=r.map(i=>i.image_id).filter(Boolean);await Promise.allSettled([...o.map(i=>Ae._fetchWalletImage(i)),le.wait(300)]),hn.search=r},prefetch(){const t=[Ae.fetchFeaturedWallets(),Ae.fetchRecommendedWallets(),Ae.fetchNetworkImages(),Ae.fetchConnectorImages()];Ce.state.enableAnalytics===void 0&&t.push(Ae.fetchAnalyticsConfig()),hn.prefetchPromise=Promise.race([Promise.allSettled(t),le.wait(3e3)])},async fetchAnalyticsConfig(){const{isAnalyticsEnabled:t}=await fn.get({path:"/getAnalyticsConfig",headers:Ae._getApiHeaders()});Ce.setEnableAnalytics(t)}},pt=Cn({view:"Connect",history:["Connect"]}),J={state:pt,subscribeKey(t,e){return zr(pt,t,e)},push(t,e){t!==pt.view&&(pt.view=t,pt.history.push(t),pt.data=e)},reset(t){pt.view=t,pt.history=[t]},replace(t,e){pt.history.length>1&&pt.history.at(-1)!==t&&(pt.view=t,pt.history[pt.history.length-1]=t,pt.data=e)},goBack(){if(pt.history.length>1){pt.history.pop();const[t]=pt.history.slice(-1);t&&(pt.view=t)}},goBackToIndex(t){if(pt.history.length>1){pt.history=pt.history.slice(0,t+1);const[e]=pt.history.slice(-1);e&&(pt.view=e)}}},_s=Cn({loading:!1,open:!1}),Me={state:_s,subscribe(t){return ui(_s,()=>t(_s))},subscribeKey(t,e){return zr(_s,t,e)},async open(t){await Ae.state.prefetchPromise;const e=me.state.isConnected;t!=null&&t.view?J.reset(t.view):e?J.reset("Account"):J.reset("Connect"),_s.open=!0,Kl.set({open:!0}),xe.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:e}})},close(){const t=me.state.isConnected;_s.open=!1,Kl.set({open:!1}),xe.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:t}})},setLoading(t){_s.loading=t}},Tu={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},Jg={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},$I={providers:A8,selectedProvider:null,error:null,purchaseCurrency:Tu,paymentCurrency:Jg,purchaseCurrencies:[Tu],paymentCurrencies:[],quotesLoading:!1},qe=Cn($I),Ge={state:qe,subscribe(t){return ui(qe,()=>t(qe))},subscribeKey(t,e){return zr(qe,t,e)},setSelectedProvider(t){qe.selectedProvider=t},setPurchaseCurrency(t){qe.purchaseCurrency=t},setPaymentCurrency(t){qe.paymentCurrency=t},setPurchaseAmount(t){this.state.purchaseAmount=t},setPaymentAmount(t){this.state.paymentAmount=t},async getAvailableCurrencies(){const t=await ra.getOnrampOptions();qe.purchaseCurrencies=t.purchaseCurrencies,qe.paymentCurrencies=t.paymentCurrencies,qe.paymentCurrency=t.paymentCurrencies[0]||Jg,qe.purchaseCurrency=t.purchaseCurrencies[0]||Tu,await Ae.fetchCurrencyImages(t.paymentCurrencies.map(e=>e.id)),await Ae.fetchTokenImages(t.purchaseCurrencies.map(e=>e.symbol))},async getQuote(){var t,e;qe.quotesLoading=!0;try{const n=await ra.getOnrampQuote({purchaseCurrency:qe.purchaseCurrency,paymentCurrency:qe.paymentCurrency,amount:((t=qe.paymentAmount)==null?void 0:t.toString())||"0",network:(e=qe.purchaseCurrency)==null?void 0:e.symbol});return qe.quotesLoading=!1,qe.purchaseAmount=Number(n.purchaseAmount.amount),n}catch(n){return qe.error=n.message,qe.quotesLoading=!1,null}finally{qe.quotesLoading=!1}},resetState(){qe.providers=A8,qe.selectedProvider=null,qe.error=null,qe.purchaseCurrency=Tu,qe.paymentCurrency=Jg,qe.purchaseCurrencies=[Tu],qe.paymentCurrencies=[],qe.paymentAmount=void 0,qe.purchaseAmount=void 0,qe.quotesLoading=!1}},Ct=Cn({transactions:[],coinbaseTransactions:{},transactionsByYear:{},loading:!1,empty:!1,next:void 0}),An={state:Ct,subscribe(t){return ui(Ct,()=>t(Ct))},async fetchTransactions(t,e){const{projectId:n}=Ce.state;if(!n||!t)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");Ct.loading=!0;try{const r=await ra.fetchTransactions({account:t,projectId:n,cursor:Ct.next,onramp:e}),o=this.filterSpamTransactions(r.data),i=[...Ct.transactions,...o];Ct.loading=!1,e==="coinbase"?Ct.coinbaseTransactions=this.groupTransactionsByYearAndMonth(Ct.coinbaseTransactions,r.data):(Ct.transactions=i,Ct.transactionsByYear=this.groupTransactionsByYearAndMonth(Ct.transactionsByYear,o)),Ct.empty=i.length===0,Ct.next=r.next?r.next:void 0}catch{xe.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:t,projectId:n,cursor:Ct.next}}),Ve.showError("Failed to fetch transactions"),Ct.loading=!1,Ct.empty=!0}},groupTransactionsByYearAndMonth(t={},e=[]){const n=t;return e.forEach(r=>{const o=new Date(r.metadata.minedAt).getFullYear(),i=new Date(r.metadata.minedAt).getMonth(),s=n[o]??{},l=(s[i]??[]).filter(c=>c.id!==r.id);n[o]={...s,[i]:[...l,r].sort((c,u)=>new Date(u.metadata.minedAt).getTime()-new Date(c.metadata.minedAt).getTime())}}),n},filterSpamTransactions(t){return t.filter(e=>!e.transfers.every(r=>{var o;return((o=r.nft_info)==null?void 0:o.flags.is_spam)===!0}))},resetTransactions(){Ct.transactions=[],Ct.transactionsByYear={},Ct.loading=!1,Ct.empty=!1,Ct.next=void 0}},Bt=Cn({wcError:!1,buffering:!1}),De={state:Bt,subscribeKey(t,e){return zr(Bt,t,e)},_getClient(){if(!Bt._client)throw new Error("ConnectionController client not set");return Bt._client},setClient(t){Bt._client=bd(t)},connectWalletConnect(){Bt.wcPromise=this._getClient().connectWalletConnect(t=>{Bt.wcUri=t,Bt.wcPairingExpiry=le.getPairingExpiry()}),Qt.setConnectedConnector("WALLET_CONNECT")},async connectExternal(t){var e,n;await((n=(e=this._getClient()).connectExternal)==null?void 0:n.call(e,t)),Qt.setConnectedConnector(t.type)},async signMessage(t){return this._getClient().signMessage(t)},checkInstalled(t){var e,n;return(n=(e=this._getClient()).checkInstalled)==null?void 0:n.call(e,t)},resetWcConnection(){Bt.wcUri=void 0,Bt.wcPairingExpiry=void 0,Bt.wcPromise=void 0,Bt.wcLinking=void 0,Bt.recentWallet=void 0,An.resetTransactions(),Qt.deleteWalletConnectDeepLink()},setWcLinking(t){Bt.wcLinking=t},setWcError(t){Bt.wcError=t,Bt.buffering=!1},setRecentWallet(t){Bt.recentWallet=t},setBuffering(t){Bt.buffering=t},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},tt={getWalletImage(t){if(t!=null&&t.image_url)return t==null?void 0:t.image_url;if(t!=null&&t.image_id)return zt.state.walletImages[t.image_id]},getNetworkImage(t){if(t!=null&&t.imageUrl)return t==null?void 0:t.imageUrl;if(t!=null&&t.imageId)return zt.state.networkImages[t.imageId]},getConnectorImage(t){if(t!=null&&t.imageUrl)return t.imageUrl;if(t!=null&&t.imageId)return zt.state.connectorImages[t.imageId]}},zy={goBackOrCloseModal(){J.state.history.length>1?J.goBack():Me.close()},navigateAfterNetworkSwitch(){const{history:t}=J.state,e=t.findIndex(n=>n==="Networks");e>=1?J.goBackToIndex(e-1):Me.close()}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Th=globalThis,Hy=Th.ShadowRoot&&(Th.ShadyCSS===void 0||Th.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vy=Symbol(),d5=new WeakMap;let $8=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Vy)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Hy&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=d5.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&d5.set(n,e))}return e}toString(){return this.cssText}};const Yr=t=>new $8(typeof t=="string"?t:t+"",void 0,Vy),oe=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,o,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1],t[0]);return new $8(n,t,Vy)},RI=(t,e)=>{if(Hy)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const r=document.createElement("style"),o=Th.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,t.appendChild(r)}},f5=Hy?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return Yr(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:TI,defineProperty:PI,getOwnPropertyDescriptor:OI,getOwnPropertyNames:II,getOwnPropertySymbols:kI,getPrototypeOf:NI}=Object,zo=globalThis,h5=zo.trustedTypes,MI=h5?h5.emptyScript:"",om=zo.reactiveElementPolyfillSupport,Pu=(t,e)=>t,mp={toAttribute(t,e){switch(e){case Boolean:t=t?MI:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Zy=(t,e)=>!TI(t,e),p5={attribute:!0,type:String,converter:mp,reflect:!1,hasChanged:Zy};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),zo.litPropertyMetadata??(zo.litPropertyMetadata=new WeakMap);let Ka=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=p5){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,n);o!==void 0&&PI(this.prototype,e,o)}}static getPropertyDescriptor(e,n,r){const{get:o,set:i}=OI(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const a=o==null?void 0:o.call(this);i.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??p5}static _$Ei(){if(this.hasOwnProperty(Pu("elementProperties")))return;const e=NI(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Pu("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Pu("properties"))){const n=this.properties,r=[...II(n),...kI(n)];for(const o of r)this.createProperty(o,n[o])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)n.unshift(f5(o))}else e!==void 0&&n.push(f5(e));return n}static _$Eu(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$EO)==null||n.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return RI(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EC(e,n){var i;const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){const s=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:mp).toAttribute(n,r.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,n){var i;const r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const s=r.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:mp;this._$Em=o,this[o]=a.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(e,n,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??Zy)(this[e],n))return;this.P(e,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,n,r){this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,s]of o)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(r=this._$EO)==null||r.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(n)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$EO)==null||n.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(e){}firstUpdated(e){}};Ka.elementStyles=[],Ka.shadowRootOptions={mode:"open"},Ka[Pu("elementProperties")]=new Map,Ka[Pu("finalized")]=new Map,om==null||om({ReactiveElement:Ka}),(zo.reactiveElementVersions??(zo.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ou=globalThis,gp=Ou.trustedTypes,m5=gp?gp.createPolicy("lit-html",{createHTML:t=>t}):void 0,R8="$lit$",bo=`lit$${(Math.random()+"").slice(9)}$`,T8="?"+bo,LI=`<${T8}>`,ia=document,xd=()=>ia.createComment(""),Cd=t=>t===null||typeof t!="object"&&typeof t!="function",P8=Array.isArray,DI=t=>P8(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",sm=`[ 	
\f\r]`,cu=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,g5=/-->/g,w5=/>/g,Ss=RegExp(`>|${sm}(?:([^\\s"'>=/]+)(${sm}*=${sm}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),y5=/'/g,v5=/"/g,O8=/^(?:script|style|textarea|title)$/i,I8=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),L=I8(1),X=I8(2),oa=Symbol.for("lit-noChange"),At=Symbol.for("lit-nothing"),b5=new WeakMap,Ls=ia.createTreeWalker(ia,129);function k8(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return m5!==void 0?m5.createHTML(e):e}const jI=(t,e)=>{const n=t.length-1,r=[];let o,i=e===2?"<svg>":"",s=cu;for(let a=0;a<n;a++){const l=t[a];let c,u,d=-1,h=0;for(;h<l.length&&(s.lastIndex=h,u=s.exec(l),u!==null);)h=s.lastIndex,s===cu?u[1]==="!--"?s=g5:u[1]!==void 0?s=w5:u[2]!==void 0?(O8.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=Ss):u[3]!==void 0&&(s=Ss):s===Ss?u[0]===">"?(s=o??cu,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?Ss:u[3]==='"'?v5:y5):s===v5||s===y5?s=Ss:s===g5||s===w5?s=cu:(s=Ss,o=void 0);const g=s===Ss&&t[a+1].startsWith("/>")?" ":"";i+=s===cu?l+LI:d>=0?(r.push(c),l.slice(0,d)+R8+l.slice(d)+bo+g):l+bo+(d===-2?a:g)}return[k8(t,i+(t[n]||"<?>")+(e===2?"</svg>":"")),r]};let Xg=class N8{constructor({strings:e,_$litType$:n},r){let o;this.parts=[];let i=0,s=0;const a=e.length-1,l=this.parts,[c,u]=jI(e,n);if(this.el=N8.createElement(c,r),Ls.currentNode=this.el.content,n===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=Ls.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(R8)){const h=u[s++],g=o.getAttribute(d).split(bo),m=/([.?@])?(.*)/.exec(h);l.push({type:1,index:i,name:m[2],strings:g,ctor:m[1]==="."?UI:m[1]==="?"?FI:m[1]==="@"?WI:C0}),o.removeAttribute(d)}else d.startsWith(bo)&&(l.push({type:6,index:i}),o.removeAttribute(d));if(O8.test(o.tagName)){const d=o.textContent.split(bo),h=d.length-1;if(h>0){o.textContent=gp?gp.emptyScript:"";for(let g=0;g<h;g++)o.append(d[g],xd()),Ls.nextNode(),l.push({type:2,index:++i});o.append(d[h],xd())}}}else if(o.nodeType===8)if(o.data===T8)l.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(bo,d+1))!==-1;)l.push({type:7,index:i}),d+=bo.length-1}i++}}static createElement(e,n){const r=ia.createElement("template");return r.innerHTML=e,r}};function Yl(t,e,n=t,r){var s,a;if(e===oa)return e;let o=r!==void 0?(s=n._$Co)==null?void 0:s[r]:n._$Cl;const i=Cd(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),i===void 0?o=void 0:(o=new i(t),o._$AT(t,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=o:n._$Cl=o),o!==void 0&&(e=Yl(t,o._$AS(t,e.values),o,r)),e}let BI=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:r}=this._$AD,o=((e==null?void 0:e.creationScope)??ia).importNode(n,!0);Ls.currentNode=o;let i=Ls.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new qy(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new zI(i,this,e)),this._$AV.push(c),l=r[++a]}s!==(l==null?void 0:l.index)&&(i=Ls.nextNode(),s++)}return Ls.currentNode=ia,o}p(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},qy=class M8{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,r,o){this.type=2,this._$AH=At,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Yl(this,e,n),Cd(e)?e===At||e==null||e===""?(this._$AH!==At&&this._$AR(),this._$AH=At):e!==this._$AH&&e!==oa&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):DI(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==At&&Cd(this._$AH)?this._$AA.nextSibling.data=e:this.T(ia.createTextNode(e)),this._$AH=e}$(e){var i;const{values:n,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Xg.createElement(k8(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(n);else{const s=new BI(o,this),a=s.u(this.options);s.p(n),this.T(a),this._$AH=s}}_$AC(e){let n=b5.get(e.strings);return n===void 0&&b5.set(e.strings,n=new Xg(e)),n}k(e){P8(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of e)o===n.length?n.push(r=new M8(this.S(xd()),this.S(xd()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}},C0=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,o,i){this.type=1,this._$AH=At,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=At}_$AI(e,n=this,r,o){const i=this.strings;let s=!1;if(i===void 0)e=Yl(this,e,n,0),s=!Cd(e)||e!==this._$AH&&e!==oa,s&&(this._$AH=e);else{const a=e;let l,c;for(e=i[0],l=0;l<i.length-1;l++)c=Yl(this,a[r+l],n,l),c===oa&&(c=this._$AH[l]),s||(s=!Cd(c)||c!==this._$AH[l]),c===At?e=At:e!==At&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!o&&this.j(e)}j(e){e===At?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},UI=class extends C0{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===At?void 0:e}},FI=class extends C0{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==At)}},WI=class extends C0{constructor(e,n,r,o,i){super(e,n,r,o,i),this.type=5}_$AI(e,n=this){if((e=Yl(this,e,n,0)??At)===oa)return;const r=this._$AH,o=e===At&&r!==At||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==At&&(r===At||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}},zI=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Yl(this,e)}};const am=Ou.litHtmlPolyfillSupport;am==null||am(Xg,qy),(Ou.litHtmlVersions??(Ou.litHtmlVersions=[])).push("3.1.2");const HI=(t,e,n)=>{const r=(n==null?void 0:n.renderBefore)??e;let o=r._$litPart$;if(o===void 0){const i=(n==null?void 0:n.renderBefore)??null;r._$litPart$=o=new qy(e.insertBefore(xd(),i),i,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let de=class extends Ka{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=HI(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return oa}};var fb;de._$litElement$=!0,de.finalized=!0,(fb=globalThis.litElementHydrateSupport)==null||fb.call(globalThis,{LitElement:de});const lm=globalThis.litElementPolyfillSupport;lm==null||lm({LitElement:de});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");let Iu,Ho,Vo;function L8(t,e){Iu=document.createElement("style"),Ho=document.createElement("style"),Vo=document.createElement("style"),Iu.textContent=vl(t).core.cssText,Ho.textContent=vl(t).dark.cssText,Vo.textContent=vl(t).light.cssText,document.head.appendChild(Iu),document.head.appendChild(Ho),document.head.appendChild(Vo),Gy(e)}function Gy(t){Ho&&Vo&&(t==="light"?(Ho.removeAttribute("media"),Vo.media="enabled"):(Vo.removeAttribute("media"),Ho.media="enabled"))}function D8(t){Iu&&Ho&&Vo&&(Iu.textContent=vl(t).core.cssText,Ho.textContent=vl(t).dark.cssText,Vo.textContent=vl(t).light.cssText)}function vl(t){return{core:oe`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${Yr(t!=null&&t["--w3m-color-mix-strength"]?`${t["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${Yr((t==null?void 0:t["--w3m-font-family"])||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${Yr((t==null?void 0:t["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${Yr((t==null?void 0:t["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${Yr((t==null?void 0:t["--w3m-z-index"])||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:oe`
      :root {
        --w3m-color-mix: ${Yr((t==null?void 0:t["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${Yr((t==null?void 0:t["--w3m-accent"])||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-gray-glass-090: rgba(255, 255, 255, 0.9);
      }
    `,dark:oe`
      :root {
        --w3m-color-mix: ${Yr((t==null?void 0:t["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${Yr((t==null?void 0:t["--w3m-accent"])||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-gray-glass-090: rgba(0, 0, 0, 0.9);
      }
    `}}const pe=oe`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,Fe=oe`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,Ky=oe`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function VI(t,e){const{kind:n,elements:r}=e;return{kind:n,elements:r,finisher(o){customElements.get(t)||customElements.define(t,o)}}}function ZI(t,e){return customElements.get(t)||customElements.define(t,e),e}function B(t){return function(n){return typeof n=="function"?ZI(t,n):VI(t,n)}}const qI=oe`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var GI=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let wp=class extends de{render(){return L`<slot></slot>`}};wp.styles=[pe,qI];wp=GI([B("wui-card")],wp);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const KI={attribute:!0,type:String,converter:mp,reflect:!1,hasChanged:Zy},YI=(t=KI,e,n)=>{const{kind:r,metadata:o}=n;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(n.name,t),r==="accessor"){const{name:s}=n;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,l,t)},init(a){return a!==void 0&&this.P(s,void 0,t),a}}}if(r==="setter"){const{name:s}=n;return function(a){const l=this[s];e.call(this,a),this.requestUpdate(s,l,t)}}throw Error("Unsupported decorator location: "+r)};function $(t){return(e,n)=>typeof n=="object"?YI(t,e,n):((r,o,i)=>{const s=o.hasOwnProperty(i);return o.constructor.createProperty(i,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(o,i):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Yy(t){return $({...t,state:!0,attribute:!1})}const QI=oe`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,JI=X`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,XI=X`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`,ek=X`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,tk=X`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,nk=X`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,rk=X`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,ik=X`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ok=X`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,sk=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,ak=X`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M10.537 2.34245C10.8997 2.64654 10.9471 3.187 10.6429 3.54959L5.61072 9.54757C5.45645 9.73144 5.23212 9.84222 4.99229 9.85295C4.75247 9.86368 4.51914 9.77337 4.34906 9.60401L1.40881 6.6761C1.07343 6.34213 1.07238 5.7996 1.40647 5.46433C1.74055 5.12906 2.28326 5.12801 2.61865 5.46198L4.89731 7.73108L9.32942 2.44834C9.63362 2.08576 10.1743 2.03835 10.537 2.34245Z"
    fill="currentColor"
  /></svg
>`,lk=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,ck=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,uk=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,dk=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,fk=X`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,hk=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,pk=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,mk=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,gk=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,wk=X`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`,yk=X`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#47A1FF"
  /></svg
>`,vk=X` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,bk=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,xk=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Ck=X`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,Ek=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,_k=X`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,Sk=X`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Ak=X`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,$k=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Rk=X`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Tk=X`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Pk=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,Ok=X`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,Ik=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,kk=X`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,Nk=X`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,Mk=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,Lk=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,Dk=X` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,jk=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,Bk=X`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,Uk=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,Fk=X`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`,Wk=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,zk=X`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,Hk=X`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`,Vk=X`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Zk=X`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,qk=X`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Gk=X`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,Kk=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,Yk=X`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,Qk=X`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,Jk=X`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,Xk=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,eN=X`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,tN=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,nN=X`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`,rN=X`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`,iN=X`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`,oN=X`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`,sN=X`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `;var E0=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const aN={add:yk,allWallets:JI,arrowBottomCircle:XI,appStore:ek,apple:tk,arrowBottom:nk,arrowLeft:rk,arrowRight:ik,arrowTop:ok,bank:rN,browser:sk,card:iN,checkmark:ak,chevronBottom:lk,chevronLeft:ck,chevronRight:uk,chevronTop:dk,chromeStore:fk,clock:hk,close:pk,compass:gk,coinPlaceholder:mk,copy:wk,cursor:vk,cursorTransparent:sN,desktop:bk,disconnect:xk,discord:Ck,etherscan:Ek,extension:_k,externalLink:Sk,facebook:Ak,filters:$k,github:Rk,google:Tk,helpCircle:Pk,infoCircle:Ok,mail:Ik,mobile:kk,networkPlaceholder:Nk,nftPlaceholder:Mk,off:Lk,playStore:Dk,plus:oN,qrCode:jk,recycleHorizontal:nN,refresh:Bk,search:Uk,send:Fk,swapHorizontal:Wk,swapHorizontalMedium:Hk,swapHorizontalBold:zk,swapVertical:Vk,telegram:Zk,twitch:qk,twitter:Gk,twitterIcon:Kk,verify:Yk,verifyFilled:Qk,wallet:Xk,walletConnect:eN,walletPlaceholder:Jk,warningCircle:tN};let sa=class extends de{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,L`${aN[this.name]}`}};sa.styles=[pe,Ky,QI];E0([$()],sa.prototype,"size",void 0);E0([$()],sa.prototype,"name",void 0);E0([$()],sa.prototype,"color",void 0);sa=E0([B("wui-icon")],sa);const lN=oe`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var Qy=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Ql=class extends de{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return L`<img src=${this.src} alt=${this.alt} />`}};Ql.styles=[pe,Ky,lN];Qy([$()],Ql.prototype,"src",void 0);Qy([$()],Ql.prototype,"alt",void 0);Ql=Qy([B("wui-image")],Ql);const cN=oe`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var uN=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let yp=class extends de{render(){return L`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};yp.styles=[pe,cN];yp=uN([B("wui-loading-hexagon")],yp);const dN=oe`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var Jy=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Jl=class extends de{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,L`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};Jl.styles=[pe,dN];Jy([$()],Jl.prototype,"color",void 0);Jy([$()],Jl.prototype,"size",void 0);Jl=Jy([B("wui-loading-spinner")],Jl);const fN=oe`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var j8=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Ed=class extends de{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,r=36-e,o=116+r,i=245+r,s=360+r*1.75;return L`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${o} ${i}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};Ed.styles=[pe,fN];j8([$({type:Number})],Ed.prototype,"radius",void 0);Ed=j8([B("wui-loading-thumbnail")],Ed);const hN=oe`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var _0=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let aa=class extends de{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,L`<slot></slot>`}};aa.styles=[hN];_0([$()],aa.prototype,"width",void 0);_0([$()],aa.prototype,"height",void 0);_0([$()],aa.prototype,"borderRadius",void 0);aa=_0([B("wui-shimmer")],aa);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B8={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},U8=t=>(...e)=>({_$litDirective$:t,values:e});let F8=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pN=U8(class extends F8{constructor(t){var e;if(super(t),t.type!==B8.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,o;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!((r=this.nt)!=null&&r.has(i))&&this.st.add(i);return this.render(e)}const n=t.element.classList;for(const i of this.st)i in e||(n.remove(i),this.st.delete(i));for(const i in e){const s=!!e[i];s===this.st.has(i)||(o=this.nt)!=null&&o.has(i)||(s?(n.add(i),this.st.add(i)):(n.remove(i),this.st.delete(i)))}return oa}}),mN=oe`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-title-600 {
    font-size: var(--wui-font-size-medium-title);
    letter-spacing: var(--wui-letter-spacing-medium-title);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var S0=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let la=class extends de{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,L`<slot class=${pN(e)}></slot>`}};la.styles=[pe,mN];S0([$()],la.prototype,"variant",void 0);S0([$()],la.prototype,"color",void 0);S0([$()],la.prototype,"align",void 0);la=S0([B("wui-text")],la);const gN=X`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,wN=X`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,yN=X`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,vN=X`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,bN=X`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,xN=X`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,CN=X`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,EN=X`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,_N=X`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,SN=X`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,AN=X`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,$N=X`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,RN=X`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,TN=X`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`,PN=X`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,ON=X`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,IN=X`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,kN=X`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,NN=oe`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`;var Xy=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const MN={browser:gN,dao:wN,defi:yN,defiAlt:vN,eth:bN,layers:xN,lock:CN,login:EN,network:_N,nft:SN,noun:AN,profile:$N,system:RN,coinbase:TN,onrampCard:kN,moonpay:PN,stripe:ON,paypal:IN};let Xl=class extends de{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`
       --local-size: var(--wui-visual-size-${this.size});
   `,L`${MN[this.name]}`}};Xl.styles=[pe,NN];Xy([$()],Xl.prototype,"name",void 0);Xy([$()],Xl.prototype,"size",void 0);Xl=Xy([B("wui-visual")],Xl);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hr=t=>t??At,ze={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){return new URL(t).hostname},getTruncateString({string:t,charsStart:e,charsEnd:n,truncate:r}){return t.length<=e+n?t:r==="end"?`${t.substring(0,e)}...`:r==="start"?`...${t.substring(t.length-n)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(n))}`},generateAvatarColors(t){const n=t.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(n),o=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(o==null?void 0:o.replace("px","")),a=`${s}% ${s}% at 65% 40%`,l=[];for(let c=0;c<5;c+=1){const u=this.tintColor(r,.15*c);l.push(`rgb(${u[0]}, ${u[1]}, ${u[2]})`)}return`
    --local-color-1: ${l[0]};
    --local-color-2: ${l[1]};
    --local-color-3: ${l[2]};
    --local-color-4: ${l[3]};
    --local-color-5: ${l[4]};
    --local-radial-circle: ${a}
   `},hexToRgb(t){const e=parseInt(t,16),n=e>>16&255,r=e>>8&255,o=e&255;return[n,r,o]},tintColor(t,e){const[n,r,o]=t,i=Math.round(n+(255-n)*e),s=Math.round(r+(255-r)*e),a=Math.round(o+(255-o)*e);return[i,s,a]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){return t||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")},splitBalance(t){const e=t.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(t,e,n){return Math.abs(t)>=e?Number(t.toFixed(n)):t}},LN=oe`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var Jn=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let cn=class extends de{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&ze.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&ze.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&ze.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&ze.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&ze.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&ze.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&ze.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&ze.getSpacingStyles(this.margin,3)};
    `,L`<slot></slot>`}};cn.styles=[pe,LN];Jn([$()],cn.prototype,"flexDirection",void 0);Jn([$()],cn.prototype,"flexWrap",void 0);Jn([$()],cn.prototype,"flexBasis",void 0);Jn([$()],cn.prototype,"flexGrow",void 0);Jn([$()],cn.prototype,"flexShrink",void 0);Jn([$()],cn.prototype,"alignItems",void 0);Jn([$()],cn.prototype,"justifyContent",void 0);Jn([$()],cn.prototype,"columnGap",void 0);Jn([$()],cn.prototype,"rowGap",void 0);Jn([$()],cn.prototype,"gap",void 0);Jn([$()],cn.prototype,"padding",void 0);Jn([$()],cn.prototype,"margin",void 0);cn=Jn([B("wui-flex")],cn);const DN=oe`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var A0=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ca=class extends de{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return L`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",L`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=ze.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};ca.styles=[pe,DN];A0([$()],ca.prototype,"imageSrc",void 0);A0([$()],ca.prototype,"alt",void 0);A0([$()],ca.prototype,"address",void 0);ca=A0([B("wui-avatar")],ca);const jN=oe`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var ro=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let wr=class extends de{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,n=this.size==="lg",r=this.size==="xl",o=n?"12%":"16%",i=n?"xxs":r?"s":"3xl",s=this.background==="gray",a=this.background==="opaque",l=this.backgroundColor==="accent-100"&&a||this.backgroundColor==="success-100"&&a||this.backgroundColor==="error-100"&&a||this.backgroundColor==="inverse-100"&&a;let c=`var(--wui-color-${this.backgroundColor})`;return l?c=`var(--wui-icon-box-bg-${this.backgroundColor})`:s&&(c=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${c};
       --local-bg-mix: ${l||s?"100%":o};
       --local-border-radius: var(--wui-border-radius-${i});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,L` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};wr.styles=[pe,Fe,jN];ro([$()],wr.prototype,"size",void 0);ro([$()],wr.prototype,"backgroundColor",void 0);ro([$()],wr.prototype,"iconColor",void 0);ro([$()],wr.prototype,"iconSize",void 0);ro([$()],wr.prototype,"background",void 0);ro([$({type:Boolean})],wr.prototype,"border",void 0);ro([$()],wr.prototype,"borderColor",void 0);ro([$()],wr.prototype,"icon",void 0);wr=ro([B("wui-icon-box")],wr);const BN=oe`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var xi=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Vn=class extends de{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.isProfileName=!1,this.address="",this.charsStart=4,this.charsEnd=6}render(){return L`
      <button
        ?disabled=${this.disabled}
        class=${hr(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${ze.getTruncateString({string:this.address,charsStart:this.isProfileName?18:this.charsStart,charsEnd:this.isProfileName?0:this.charsEnd,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return L` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const e=this.networkSrc?L`<wui-image src=${this.networkSrc}></wui-image>`:L`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return L`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};Vn.styles=[pe,Fe,BN];xi([$()],Vn.prototype,"networkSrc",void 0);xi([$()],Vn.prototype,"avatarSrc",void 0);xi([$()],Vn.prototype,"balance",void 0);xi([$({type:Boolean})],Vn.prototype,"isUnsupportedChain",void 0);xi([$({type:Boolean})],Vn.prototype,"disabled",void 0);xi([$({type:Boolean})],Vn.prototype,"isProfileName",void 0);xi([$()],Vn.prototype,"address",void 0);xi([$()],Vn.prototype,"charsStart",void 0);xi([$()],Vn.prototype,"charsEnd",void 0);Vn=xi([B("wui-account-button")],Vn);const UN=oe`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`;var Ta=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let di=class extends de{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),L`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?L`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?L`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:L`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};di.styles=[pe,UN];Ta([$()],di.prototype,"size",void 0);Ta([$()],di.prototype,"name",void 0);Ta([$()],di.prototype,"imageSrc",void 0);Ta([$()],di.prototype,"walletIcon",void 0);Ta([$({type:Boolean})],di.prototype,"installed",void 0);Ta([$()],di.prototype,"badgeSize",void 0);di=Ta([B("wui-wallet-image")],di);const FN=oe`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var W8=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const cm=4;let _d=class extends de{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<cm;return L`${this.walletImages.slice(0,cm).map(({src:n,walletName:r})=>L`
            <wui-wallet-image
              size="inherit"
              imageSrc=${n}
              name=${hr(r)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(cm-this.walletImages.length)].map(()=>L` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};_d.styles=[pe,FN];W8([$({type:Array})],_d.prototype,"walletImages",void 0);_d=W8([B("wui-all-wallets-image")],_d);const WN=oe`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--local-border-radius);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  /* xs settings */
  button[data-size='xs'] {
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs);
  }

  button[data-size='xs'][data-icon-left='true'][data-icon-right='false'] {
    padding-left: var(--wui-spacing-xxs);
  }

  button[data-size='xs'][data-icon-right='true'][data-icon-left='false'] {
    padding-right: var(--wui-spacing-xxs);
  }

  /* sm settings */
  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'][data-icon-right='false'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'][data-icon-left='false'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  /* md settings */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  /* lg settings */
  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
  }

  button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
    padding-left: var(--wui-spacing-m);
  }

  button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
    padding-right: var(--wui-spacing-m);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var Ci=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const zN={xs:"small-600",sm:"paragraph-600",md:"small-600",mdl:"small-600",lg:"paragraph-600"};let Zn=class extends de{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;const e=this.textVariant??zN[this.size];return L`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?L`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:L``}};Zn.styles=[pe,Fe,WN];Ci([$()],Zn.prototype,"size",void 0);Ci([$({type:Boolean})],Zn.prototype,"disabled",void 0);Ci([$({type:Boolean})],Zn.prototype,"fullWidth",void 0);Ci([$({type:Boolean})],Zn.prototype,"loading",void 0);Ci([$()],Zn.prototype,"variant",void 0);Ci([$({type:Boolean})],Zn.prototype,"hasIconLeft",void 0);Ci([$({type:Boolean})],Zn.prototype,"hasIconRight",void 0);Ci([$()],Zn.prototype,"borderRadius",void 0);Ci([$()],Zn.prototype,"textVariant",void 0);Zn=Ci([B("wui-button")],Zn);const z8=X`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,HN=oe`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var H8=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Sd=class extends de{constructor(){super(...arguments),this.type="wallet"}render(){return L`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?L` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${z8}`:L`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Sd.styles=[pe,Fe,HN];H8([$()],Sd.prototype,"type",void 0);Sd=H8([B("wui-card-select-loader")],Sd);const VN=X`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,ZN=X`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,qN=oe`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var pf=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Yo=class extends de{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e={sm:VN,md:z8,lg:ZN};return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,L`${this.templateVisual()} ${e[this.size]}`}templateVisual(){return this.imageSrc?L`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:L`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Yo.styles=[pe,qN];pf([$()],Yo.prototype,"size",void 0);pf([$()],Yo.prototype,"name",void 0);pf([$()],Yo.prototype,"imageSrc",void 0);pf([$({type:Boolean})],Yo.prototype,"selected",void 0);Yo=pf([B("wui-network-image")],Yo);const GN=oe`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var Pa=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let fi=class extends de{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return L`
      <button data-selected=${hr(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?L`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${hr(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:L`
      <wui-wallet-image
        size="md"
        imageSrc=${hr(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};fi.styles=[pe,Fe,GN];Pa([$()],fi.prototype,"name",void 0);Pa([$()],fi.prototype,"type",void 0);Pa([$()],fi.prototype,"imageSrc",void 0);Pa([$({type:Boolean})],fi.prototype,"disabled",void 0);Pa([$({type:Boolean})],fi.prototype,"selected",void 0);Pa([$({type:Boolean})],fi.prototype,"installed",void 0);fi=Pa([B("wui-card-select")],fi);const KN=oe`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-error-glass-010);
    background-color: var(--wui-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon,
  a[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-error-glass-015);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-error-glass-020);
  }
`;var Oa=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let hi=class extends de{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const n=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall"?"small-600":"paragraph-600";return L`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${n} color="inherit">
          ${this.title?this.title:ze.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?L`<wui-image src=${this.imageSrc}></wui-image>`:null}};hi.styles=[pe,Fe,KN];Oa([$()],hi.prototype,"variant",void 0);Oa([$()],hi.prototype,"imageSrc",void 0);Oa([$({type:Boolean})],hi.prototype,"disabled",void 0);Oa([$()],hi.prototype,"icon",void 0);Oa([$()],hi.prototype,"href",void 0);Oa([$()],hi.prototype,"text",void 0);hi=Oa([B("wui-chip")],hi);const YN=oe`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var ev=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ec=class extends de{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e=this.size==="md"?"paragraph-600":"small-600";return L`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?L`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};ec.styles=[pe,Fe,YN];ev([$()],ec.prototype,"size",void 0);ev([$({type:Boolean})],ec.prototype,"loading",void 0);ec=ev([B("wui-connect-button")],ec);const QN=oe`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var $0=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ua=class extends de{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return L`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};ua.styles=[pe,Fe,QN];$0([$({type:Boolean})],ua.prototype,"disabled",void 0);$0([$()],ua.prototype,"label",void 0);$0([$()],ua.prototype,"buttonLabel",void 0);ua=$0([B("wui-cta-button")],ua);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const JN=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ku=(t,e)=>{var r;const n=t._$AN;if(n===void 0)return!1;for(const o of n)(r=o._$AO)==null||r.call(o,e,!1),ku(o,e);return!0},vp=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while((n==null?void 0:n.size)===0)},V8=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),tM(e)}};function XN(t){this._$AN!==void 0?(vp(this),this._$AM=t,V8(this)):this._$AM=t}function eM(t,e=!1,n=0){const r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(r))for(let i=n;i<r.length;i++)ku(r[i],!1),vp(r[i]);else r!=null&&(ku(r,!1),vp(r));else ku(this,t)}const tM=t=>{t.type==B8.CHILD&&(t._$AP??(t._$AP=eM),t._$AQ??(t._$AQ=XN))};let nM=class extends F8{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,r){super._$AT(e,n,r),V8(this),this.isConnected=e._$AU}_$AO(e,n=!0){var r,o;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)==null||r.call(this):(o=this.disconnected)==null||o.call(this)),n&&(ku(this,e),vp(this))}setValue(e){if(JN(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z8=()=>new rM;let rM=class{};const um=new WeakMap,q8=U8(class extends nM{render(t){return At}update(t,[e]){var r;const n=e!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=e,this.ht=(r=t.options)==null?void 0:r.host,this.rt(this.ct=t.element)),At}rt(t){if(typeof this.Y=="function"){const e=this.ht??globalThis;let n=um.get(e);n===void 0&&(n=new WeakMap,um.set(e,n)),n.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),n.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=um.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),iM=oe`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px 40px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var us=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Lr=class extends de{constructor(){super(...arguments),this.inputElementRef=Z8(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text"}render(){const e=`wui-size-${this.size}`;return L` ${this.templateIcon()}
      <input
        ${q8(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${hr(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        value=${hr(this.value)}
        .value=${this.value||""}
      />
      <slot></slot>`}templateIcon(){return this.icon?L`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.value,bubbles:!0,composed:!0}))}};Lr.styles=[pe,Fe,iM];us([$()],Lr.prototype,"size",void 0);us([$()],Lr.prototype,"icon",void 0);us([$({type:Boolean})],Lr.prototype,"disabled",void 0);us([$()],Lr.prototype,"placeholder",void 0);us([$()],Lr.prototype,"type",void 0);us([$()],Lr.prototype,"keyHint",void 0);us([$()],Lr.prototype,"value",void 0);Lr=us([B("wui-input-text")],Lr);const oM=oe`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var R0=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let da=class extends de{constructor(){super(...arguments),this.disabled=!1}render(){return L`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?L`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};da.styles=[pe,oM];R0([$()],da.prototype,"errorMessage",void 0);R0([$({type:Boolean})],da.prototype,"disabled",void 0);R0([$()],da.prototype,"value",void 0);da=R0([B("wui-email-input")],da);const sM=oe`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var mf=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Qo=class extends de{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",n=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${e});
    --local-padding: var(${n});
`,L`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};Qo.styles=[pe,Fe,Ky,sM];mf([$()],Qo.prototype,"size",void 0);mf([$({type:Boolean})],Qo.prototype,"disabled",void 0);mf([$()],Qo.prototype,"icon",void 0);mf([$()],Qo.prototype,"iconColor",void 0);Qo=mf([B("wui-icon-link")],Qo);const aM=oe`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var G8=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Ad=class extends de{constructor(){super(...arguments),this.icon="copy"}render(){return L`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};Ad.styles=[pe,Fe,aM];G8([$()],Ad.prototype,"icon",void 0);Ad=G8([B("wui-input-element")],Ad);const lM=oe`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-005);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }
  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }
`;var tv=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let tc=class extends de{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return L`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};tc.styles=[pe,Fe,lM];tv([$({type:Boolean})],tc.prototype,"disabled",void 0);tv([$({type:String})],tc.prototype,"value",void 0);tc=tv([B("wui-input-numeric")],tc);const cM=oe`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var nv=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let nc=class extends de{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return L`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};nc.styles=[pe,Fe,cM];nv([$({type:Boolean})],nc.prototype,"disabled",void 0);nv([$()],nc.prototype,"color",void 0);nc=nv([B("wui-link")],nc);const uM=oe`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var Ei=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let qn=class extends de{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return L`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${hr(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return L`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return L`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",n=this.iconVariant==="square-blue"?"mdl":"md",r=this.iconSize?this.iconSize:n;return L`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${n}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?L`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:L``}chevronTemplate(){return this.chevron?L`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};qn.styles=[pe,Fe,uM];Ei([$()],qn.prototype,"icon",void 0);Ei([$()],qn.prototype,"iconSize",void 0);Ei([$()],qn.prototype,"variant",void 0);Ei([$()],qn.prototype,"iconVariant",void 0);Ei([$({type:Boolean})],qn.prototype,"disabled",void 0);Ei([$()],qn.prototype,"imageSrc",void 0);Ei([$()],qn.prototype,"alt",void 0);Ei([$({type:Boolean})],qn.prototype,"chevron",void 0);Ei([$({type:Boolean})],qn.prototype,"loading",void 0);qn=Ei([B("wui-list-item")],qn);var ew;(function(t){t.approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn"})(ew||(ew={}));const dM=oe`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var Ia=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let pi=class extends de{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,n]=this.images,r=(e==null?void 0:e.type)==="NFT",o=n!=null&&n.url?n.type==="NFT":r,i=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",s=o?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${i};
    --local-right-border-radius: ${s};
    `,L`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,n]=this.images,r=e==null?void 0:e.type;return this.images.length===2&&(e!=null&&e.url||n!=null&&n.url)?L`<div class="swap-images-container">
        ${e!=null&&e.url?L`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${n!=null&&n.url?L`<wui-image src=${n.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e!=null&&e.url?L`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:r==="NFT"?L`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:L`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e="accent-100",n;return n=this.getIcon(),this.status&&(e=this.getStatusColor()),n?L`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${n}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};pi.styles=[dM];Ia([$()],pi.prototype,"type",void 0);Ia([$()],pi.prototype,"status",void 0);Ia([$()],pi.prototype,"direction",void 0);Ia([$({type:Boolean})],pi.prototype,"onlyDirectionIcon",void 0);Ia([$({type:Array})],pi.prototype,"images",void 0);Ia([$({type:Object})],pi.prototype,"secondImage",void 0);pi=Ia([B("wui-transaction-visual")],pi);const fM=oe`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var Hr=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let In=class extends de{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return L`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${hr(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${hr(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${ew[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var n;const e=(n=this.descriptions)==null?void 0:n[0];return e?L`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){var n;const e=(n=this.descriptions)==null?void 0:n[1];return e?L`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};In.styles=[pe,fM];Hr([$()],In.prototype,"type",void 0);Hr([$({type:Array})],In.prototype,"descriptions",void 0);Hr([$()],In.prototype,"date",void 0);Hr([$({type:Boolean})],In.prototype,"onlyDirectionIcon",void 0);Hr([$()],In.prototype,"status",void 0);Hr([$()],In.prototype,"direction",void 0);Hr([$({type:Array})],In.prototype,"images",void 0);Hr([$({type:Array})],In.prototype,"price",void 0);Hr([$({type:Array})],In.prototype,"amount",void 0);Hr([$({type:Array})],In.prototype,"symbol",void 0);In=Hr([B("wui-transaction-list-item")],In);const hM=oe`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var pM=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let bp=class extends de{render(){return L`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};bp.styles=[pe,hM];bp=pM([B("wui-transaction-list-item-loader")],bp);const mM=oe`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var K8=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let $d=class extends de{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,L`
      <wui-text data-variant=${this.variant} variant="mini-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};$d.styles=[pe,mM];K8([$()],$d.prototype,"variant",void 0);$d=K8([B("wui-tag")],$d);const gM=oe`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Vr=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let kn=class extends de{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return L`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?L` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?L` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?L`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?L`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?L`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?L`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};kn.styles=[pe,Fe,gM];Vr([$({type:Array})],kn.prototype,"walletImages",void 0);Vr([$()],kn.prototype,"imageSrc",void 0);Vr([$()],kn.prototype,"name",void 0);Vr([$()],kn.prototype,"tagLabel",void 0);Vr([$()],kn.prototype,"tagVariant",void 0);Vr([$()],kn.prototype,"icon",void 0);Vr([$()],kn.prototype,"walletIcon",void 0);Vr([$({type:Boolean})],kn.prototype,"installed",void 0);Vr([$({type:Boolean})],kn.prototype,"disabled",void 0);Vr([$({type:Boolean})],kn.prototype,"showAllWallets",void 0);kn=Vr([B("wui-list-wallet")],kn);const wM=oe`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var Y8=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Rd=class extends de{constructor(){super(...arguments),this.logo="google"}render(){return L`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};Rd.styles=[pe,wM];Y8([$()],Rd.prototype,"logo",void 0);Rd=Y8([B("wui-logo")],Rd);const yM=oe`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var rv=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let rc=class extends de{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return L`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};rc.styles=[pe,Fe,yM];rv([$()],rc.prototype,"logo",void 0);rv([$({type:Boolean})],rc.prototype,"disabled",void 0);rc=rv([B("wui-logo-select")],rc);const vM=oe`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`;var T0=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let fa=class extends de{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return L`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?L`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?L`<wui-image src=${this.imageSrc}></wui-image>`:L`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};fa.styles=[pe,Fe,vM];T0([$()],fa.prototype,"imageSrc",void 0);T0([$({type:Boolean})],fa.prototype,"isUnsupportedChain",void 0);T0([$({type:Boolean})],fa.prototype,"disabled",void 0);fa=T0([B("wui-network-button")],fa);const bM=oe`
  :host {
    position: relative;
    display: block;
  }
`;var P0=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ha=class extends de{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(r=>r!==""),this.handleKeyDown=(e,n)=>{const r=e.target,o=this.getInputElement(r),i=["ArrowLeft","ArrowRight","Shift","Delete"];if(!o)return;i.includes(e.key)&&e.preventDefault();const s=o.selectionStart;switch(e.key){case"ArrowLeft":s&&o.setSelectionRange(s+1,s+1),this.focusInputField("prev",n);break;case"ArrowRight":this.focusInputField("next",n);break;case"Shift":this.focusInputField("next",n);break;case"Delete":o.value===""?this.focusInputField("prev",n):this.updateInput(o,n,"");break;case"Backspace":o.value===""?this.focusInputField("prev",n):this.updateInput(o,n,"");break}},this.focusInputField=(e,n)=>{if(e==="next"){const r=n+1;if(!this.shouldInputBeEnabled(r))return;const o=this.numerics[r<this.length?r:n],i=o?this.getInputElement(o):void 0;i&&(i.disabled=!1,i.focus())}if(e==="prev"){const r=n-1,o=this.numerics[r>-1?r:n],i=o?this.getInputElement(o):void 0;i&&i.focus()}}}firstUpdated(){var n,r;this.otp&&(this.values=this.otp.split(""));const e=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),(r=this.numerics[0])==null||r.focus()}render(){return L`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,n)=>L`
            <wui-input-numeric
              @input=${r=>this.handleInput(r,n)}
              @click=${r=>this.selectInput(r)}
              @keydown=${r=>this.handleKeyDown(r,n)}
              .disabled=${!this.shouldInputBeEnabled(n)}
              .value=${this.values[n]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,n,r){const o=this.numerics[n],i=e||(o?this.getInputElement(o):void 0);i&&(i.value=r,this.values=this.values.map((s,a)=>a===n?r:s))}selectInput(e){const n=e.target;if(n){const r=this.getInputElement(n);r==null||r.select()}}handleInput(e,n){const r=e.target,o=this.getInputElement(r);if(o){const i=o.value;e.inputType==="insertFromPaste"?this.handlePaste(o,i,n):ze.isNumber(i)&&e.data?(this.updateInput(o,n,e.data),this.focusInputField("next",n)):this.updateInput(o,n,"")}this.dispatchInputChangeEvent()}handlePaste(e,n,r){const o=n[0];if(o&&ze.isNumber(o)){this.updateInput(e,r,o);const s=n.substring(1);if(r+1<this.length&&s.length){const a=this.numerics[r+1],l=a?this.getInputElement(a):void 0;l&&this.handlePaste(l,s,r+1)}else this.focusInputField("next",r)}else this.updateInput(e,r,"")}getInputElement(e){var n;return(n=e.shadowRoot)!=null&&n.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};ha.styles=[pe,bM];P0([$({type:Number})],ha.prototype,"length",void 0);P0([$({type:String})],ha.prototype,"otp",void 0);P0([Yy()],ha.prototype,"values",void 0);ha=P0([B("wui-otp")],ha);var gf={},xM=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Q8={},Xn={};let iv;const CM=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];Xn.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};Xn.getSymbolTotalCodewords=function(e){return CM[e]};Xn.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};Xn.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');iv=e};Xn.isKanjiModeEnabled=function(){return typeof iv<"u"};Xn.toSJIS=function(e){return iv(e)};var O0={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+n)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,o){if(t.isValid(r))return r;try{return e(r)}catch{return o}}})(O0);function J8(){this.buffer=[],this.length=0}J8.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var EM=J8;function wf(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}wf.prototype.set=function(t,e,n,r){const o=t*this.size+e;this.data[o]=n,r&&(this.reservedBit[o]=!0)};wf.prototype.get=function(t,e){return this.data[t*this.size+e]};wf.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n};wf.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var _M=wf,X8={};(function(t){const e=Xn.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,i=e(r),s=i===145?26:Math.ceil((i-13)/(2*o-2))*2,a=[i-7];for(let l=1;l<o-1;l++)a[l]=a[l-1]-s;return a.push(6),a.reverse()},t.getPositions=function(r){const o=[],i=t.getRowColCoords(r),s=i.length;for(let a=0;a<s;a++)for(let l=0;l<s;l++)a===0&&l===0||a===0&&l===s-1||a===s-1&&l===0||o.push([i[a],i[l]]);return o}})(X8);var eC={};const SM=Xn.getSymbolSize,x5=7;eC.getPositions=function(e){const n=SM(e);return[[0,0],[n-x5,0],[0,n-x5]]};var tC={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},t.from=function(o){return t.isValid(o)?parseInt(o,10):void 0},t.getPenaltyN1=function(o){const i=o.size;let s=0,a=0,l=0,c=null,u=null;for(let d=0;d<i;d++){a=l=0,c=u=null;for(let h=0;h<i;h++){let g=o.get(d,h);g===c?a++:(a>=5&&(s+=e.N1+(a-5)),c=g,a=1),g=o.get(h,d),g===u?l++:(l>=5&&(s+=e.N1+(l-5)),u=g,l=1)}a>=5&&(s+=e.N1+(a-5)),l>=5&&(s+=e.N1+(l-5))}return s},t.getPenaltyN2=function(o){const i=o.size;let s=0;for(let a=0;a<i-1;a++)for(let l=0;l<i-1;l++){const c=o.get(a,l)+o.get(a,l+1)+o.get(a+1,l)+o.get(a+1,l+1);(c===4||c===0)&&s++}return s*e.N2},t.getPenaltyN3=function(o){const i=o.size;let s=0,a=0,l=0;for(let c=0;c<i;c++){a=l=0;for(let u=0;u<i;u++)a=a<<1&2047|o.get(c,u),u>=10&&(a===1488||a===93)&&s++,l=l<<1&2047|o.get(u,c),u>=10&&(l===1488||l===93)&&s++}return s*e.N3},t.getPenaltyN4=function(o){let i=0;const s=o.data.length;for(let l=0;l<s;l++)i+=o.data[l];return Math.abs(Math.ceil(i*100/s/5)-10)*e.N4};function n(r,o,i){switch(r){case t.Patterns.PATTERN000:return(o+i)%2===0;case t.Patterns.PATTERN001:return o%2===0;case t.Patterns.PATTERN010:return i%3===0;case t.Patterns.PATTERN011:return(o+i)%3===0;case t.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(i/3))%2===0;case t.Patterns.PATTERN101:return o*i%2+o*i%3===0;case t.Patterns.PATTERN110:return(o*i%2+o*i%3)%2===0;case t.Patterns.PATTERN111:return(o*i%3+(o+i)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(o,i){const s=i.size;for(let a=0;a<s;a++)for(let l=0;l<s;l++)i.isReserved(l,a)||i.xor(l,a,n(o,l,a))},t.getBestMask=function(o,i){const s=Object.keys(t.Patterns).length;let a=0,l=1/0;for(let c=0;c<s;c++){i(c),t.applyMask(c,o);const u=t.getPenaltyN1(o)+t.getPenaltyN2(o)+t.getPenaltyN3(o)+t.getPenaltyN4(o);t.applyMask(c,o),u<l&&(l=u,a=c)}return a}})(tC);var I0={};const Oo=O0,ih=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],oh=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];I0.getBlocksCount=function(e,n){switch(n){case Oo.L:return ih[(e-1)*4+0];case Oo.M:return ih[(e-1)*4+1];case Oo.Q:return ih[(e-1)*4+2];case Oo.H:return ih[(e-1)*4+3];default:return}};I0.getTotalCodewordsCount=function(e,n){switch(n){case Oo.L:return oh[(e-1)*4+0];case Oo.M:return oh[(e-1)*4+1];case Oo.Q:return oh[(e-1)*4+2];case Oo.H:return oh[(e-1)*4+3];default:return}};var nC={},k0={};const Nu=new Uint8Array(512),xp=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)Nu[n]=e,xp[e]=n,e<<=1,e&256&&(e^=285);for(let n=255;n<512;n++)Nu[n]=Nu[n-255]})();k0.log=function(e){if(e<1)throw new Error("log("+e+")");return xp[e]};k0.exp=function(e){return Nu[e]};k0.mul=function(e,n){return e===0||n===0?0:Nu[xp[e]+xp[n]]};(function(t){const e=k0;t.mul=function(r,o){const i=new Uint8Array(r.length+o.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<o.length;a++)i[s+a]^=e.mul(r[s],o[a]);return i},t.mod=function(r,o){let i=new Uint8Array(r);for(;i.length-o.length>=0;){const s=i[0];for(let l=0;l<o.length;l++)i[l]^=e.mul(o[l],s);let a=0;for(;a<i.length&&i[a]===0;)a++;i=i.slice(a)}return i},t.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let i=0;i<r;i++)o=t.mul(o,new Uint8Array([1,e.exp(i)]));return o}})(nC);const rC=nC;function ov(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}ov.prototype.initialize=function(e){this.degree=e,this.genPoly=rC.generateECPolynomial(this.degree)};ov.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const r=rC.mod(n,this.genPoly),o=this.degree-r.length;if(o>0){const i=new Uint8Array(this.degree);return i.set(r,o),i}return r};var AM=ov,iC={},ds={},sv={};sv.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var _i={};const oC="[0-9]+",$M="[A-Z $%*+\\-./:]+";let Td="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Td=Td.replace(/u/g,"\\u");const RM="(?:(?![A-Z0-9 $%*+\\-./:]|"+Td+`)(?:.|[\r
]))+`;_i.KANJI=new RegExp(Td,"g");_i.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");_i.BYTE=new RegExp(RM,"g");_i.NUMERIC=new RegExp(oC,"g");_i.ALPHANUMERIC=new RegExp($M,"g");const TM=new RegExp("^"+Td+"$"),PM=new RegExp("^"+oC+"$"),OM=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");_i.testKanji=function(e){return TM.test(e)};_i.testNumeric=function(e){return PM.test(e)};_i.testAlphanumeric=function(e){return OM.test(e)};(function(t){const e=sv,n=_i;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(i,s){if(!i.ccBits)throw new Error("Invalid mode: "+i);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?i.ccBits[0]:s<27?i.ccBits[1]:i.ccBits[2]},t.getBestModeForData=function(i){return n.testNumeric(i)?t.NUMERIC:n.testAlphanumeric(i)?t.ALPHANUMERIC:n.testKanji(i)?t.KANJI:t.BYTE},t.toString=function(i){if(i&&i.id)return i.id;throw new Error("Invalid mode")},t.isValid=function(i){return i&&i.bit&&i.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+o)}}t.from=function(i,s){if(t.isValid(i))return i;try{return r(i)}catch{return s}}})(ds);(function(t){const e=Xn,n=I0,r=O0,o=ds,i=sv,s=7973,a=e.getBCHDigit(s);function l(h,g,m){for(let w=1;w<=40;w++)if(g<=t.getCapacity(w,m,h))return w}function c(h,g){return o.getCharCountIndicator(h,g)+4}function u(h,g){let m=0;return h.forEach(function(w){const C=c(w.mode,g);m+=C+w.getBitsLength()}),m}function d(h,g){for(let m=1;m<=40;m++)if(u(h,m)<=t.getCapacity(m,g,o.MIXED))return m}t.from=function(g,m){return i.isValid(g)?parseInt(g,10):m},t.getCapacity=function(g,m,w){if(!i.isValid(g))throw new Error("Invalid QR Code version");typeof w>"u"&&(w=o.BYTE);const C=e.getSymbolTotalCodewords(g),y=n.getTotalCodewordsCount(g,m),v=(C-y)*8;if(w===o.MIXED)return v;const b=v-c(w,g);switch(w){case o.NUMERIC:return Math.floor(b/10*3);case o.ALPHANUMERIC:return Math.floor(b/11*2);case o.KANJI:return Math.floor(b/13);case o.BYTE:default:return Math.floor(b/8)}},t.getBestVersionForData=function(g,m){let w;const C=r.from(m,r.M);if(Array.isArray(g)){if(g.length>1)return d(g,C);if(g.length===0)return 1;w=g[0]}else w=g;return l(w.mode,w.getLength(),C)},t.getEncodedBits=function(g){if(!i.isValid(g)||g<7)throw new Error("Invalid QR Code version");let m=g<<12;for(;e.getBCHDigit(m)-a>=0;)m^=s<<e.getBCHDigit(m)-a;return g<<12|m}})(iC);var sC={};const tw=Xn,aC=1335,IM=21522,C5=tw.getBCHDigit(aC);sC.getEncodedBits=function(e,n){const r=e.bit<<3|n;let o=r<<10;for(;tw.getBCHDigit(o)-C5>=0;)o^=aC<<tw.getBCHDigit(o)-C5;return(r<<10|o)^IM};var lC={};const kM=ds;function ic(t){this.mode=kM.NUMERIC,this.data=t.toString()}ic.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};ic.prototype.getLength=function(){return this.data.length};ic.prototype.getBitsLength=function(){return ic.getBitsLength(this.data.length)};ic.prototype.write=function(e){let n,r,o;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),o=parseInt(r,10),e.put(o,10);const i=this.data.length-n;i>0&&(r=this.data.substr(n),o=parseInt(r,10),e.put(o,i*3+1))};var NM=ic;const MM=ds,dm=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function oc(t){this.mode=MM.ALPHANUMERIC,this.data=t}oc.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};oc.prototype.getLength=function(){return this.data.length};oc.prototype.getBitsLength=function(){return oc.getBitsLength(this.data.length)};oc.prototype.write=function(e){let n;for(n=0;n+2<=this.data.length;n+=2){let r=dm.indexOf(this.data[n])*45;r+=dm.indexOf(this.data[n+1]),e.put(r,11)}this.data.length%2&&e.put(dm.indexOf(this.data[n]),6)};var LM=oc,DM=function(e){for(var n=[],r=e.length,o=0;o<r;o++){var i=e.charCodeAt(o);if(i>=55296&&i<=56319&&r>o+1){var s=e.charCodeAt(o+1);s>=56320&&s<=57343&&(i=(i-55296)*1024+s-56320+65536,o+=1)}if(i<128){n.push(i);continue}if(i<2048){n.push(i>>6|192),n.push(i&63|128);continue}if(i<55296||i>=57344&&i<65536){n.push(i>>12|224),n.push(i>>6&63|128),n.push(i&63|128);continue}if(i>=65536&&i<=1114111){n.push(i>>18|240),n.push(i>>12&63|128),n.push(i>>6&63|128),n.push(i&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const jM=DM,BM=ds;function sc(t){this.mode=BM.BYTE,typeof t=="string"&&(t=jM(t)),this.data=new Uint8Array(t)}sc.getBitsLength=function(e){return e*8};sc.prototype.getLength=function(){return this.data.length};sc.prototype.getBitsLength=function(){return sc.getBitsLength(this.data.length)};sc.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var UM=sc;const FM=ds,WM=Xn;function ac(t){this.mode=FM.KANJI,this.data=t}ac.getBitsLength=function(e){return e*13};ac.prototype.getLength=function(){return this.data.length};ac.prototype.getBitsLength=function(){return ac.getBitsLength(this.data.length)};ac.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=WM.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),t.put(n,13)}};var zM=ac,cC={exports:{}};(function(t){var e={single_source_shortest_paths:function(n,r,o){var i={},s={};s[r]=0;var a=e.PriorityQueue.make();a.push(r,0);for(var l,c,u,d,h,g,m,w,C;!a.empty();){l=a.pop(),c=l.value,d=l.cost,h=n[c]||{};for(u in h)h.hasOwnProperty(u)&&(g=h[u],m=d+g,w=s[u],C=typeof s[u]>"u",(C||w>m)&&(s[u]=m,a.push(u,m),i[u]=c))}if(typeof o<"u"&&typeof s[o]>"u"){var y=["Could not find a path from ",r," to ",o,"."].join("");throw new Error(y)}return i},extract_shortest_path_from_predecessor_list:function(n,r){for(var o=[],i=r;i;)o.push(i),n[i],i=n[i];return o.reverse(),o},find_path:function(n,r,o){var i=e.single_source_shortest_paths(n,r,o);return e.extract_shortest_path_from_predecessor_list(i,o)},PriorityQueue:{make:function(n){var r=e.PriorityQueue,o={},i;n=n||{};for(i in r)r.hasOwnProperty(i)&&(o[i]=r[i]);return o.queue=[],o.sorter=n.sorter||r.default_sorter,o},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var o={value:n,cost:r};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(cC);var HM=cC.exports;(function(t){const e=ds,n=NM,r=LM,o=UM,i=zM,s=_i,a=Xn,l=HM;function c(y){return unescape(encodeURIComponent(y)).length}function u(y,v,b){const E=[];let R;for(;(R=y.exec(b))!==null;)E.push({data:R[0],index:R.index,mode:v,length:R[0].length});return E}function d(y){const v=u(s.NUMERIC,e.NUMERIC,y),b=u(s.ALPHANUMERIC,e.ALPHANUMERIC,y);let E,R;return a.isKanjiModeEnabled()?(E=u(s.BYTE,e.BYTE,y),R=u(s.KANJI,e.KANJI,y)):(E=u(s.BYTE_KANJI,e.BYTE,y),R=[]),v.concat(b,E,R).sort(function(k,N){return k.index-N.index}).map(function(k){return{data:k.data,mode:k.mode,length:k.length}})}function h(y,v){switch(v){case e.NUMERIC:return n.getBitsLength(y);case e.ALPHANUMERIC:return r.getBitsLength(y);case e.KANJI:return i.getBitsLength(y);case e.BYTE:return o.getBitsLength(y)}}function g(y){return y.reduce(function(v,b){const E=v.length-1>=0?v[v.length-1]:null;return E&&E.mode===b.mode?(v[v.length-1].data+=b.data,v):(v.push(b),v)},[])}function m(y){const v=[];for(let b=0;b<y.length;b++){const E=y[b];switch(E.mode){case e.NUMERIC:v.push([E,{data:E.data,mode:e.ALPHANUMERIC,length:E.length},{data:E.data,mode:e.BYTE,length:E.length}]);break;case e.ALPHANUMERIC:v.push([E,{data:E.data,mode:e.BYTE,length:E.length}]);break;case e.KANJI:v.push([E,{data:E.data,mode:e.BYTE,length:c(E.data)}]);break;case e.BYTE:v.push([{data:E.data,mode:e.BYTE,length:c(E.data)}])}}return v}function w(y,v){const b={},E={start:{}};let R=["start"];for(let T=0;T<y.length;T++){const k=y[T],N=[];for(let W=0;W<k.length;W++){const D=k[W],H=""+T+W;N.push(H),b[H]={node:D,lastCount:0},E[H]={};for(let he=0;he<R.length;he++){const ye=R[he];b[ye]&&b[ye].node.mode===D.mode?(E[ye][H]=h(b[ye].lastCount+D.length,D.mode)-h(b[ye].lastCount,D.mode),b[ye].lastCount+=D.length):(b[ye]&&(b[ye].lastCount=D.length),E[ye][H]=h(D.length,D.mode)+4+e.getCharCountIndicator(D.mode,v))}}R=N}for(let T=0;T<R.length;T++)E[R[T]].end=0;return{map:E,table:b}}function C(y,v){let b;const E=e.getBestModeForData(y);if(b=e.from(v,E),b!==e.BYTE&&b.bit<E.bit)throw new Error('"'+y+'" cannot be encoded with mode '+e.toString(b)+`.
 Suggested mode is: `+e.toString(E));switch(b===e.KANJI&&!a.isKanjiModeEnabled()&&(b=e.BYTE),b){case e.NUMERIC:return new n(y);case e.ALPHANUMERIC:return new r(y);case e.KANJI:return new i(y);case e.BYTE:return new o(y)}}t.fromArray=function(v){return v.reduce(function(b,E){return typeof E=="string"?b.push(C(E,null)):E.data&&b.push(C(E.data,E.mode)),b},[])},t.fromString=function(v,b){const E=d(v,a.isKanjiModeEnabled()),R=m(E),T=w(R,b),k=l.find_path(T.map,"start","end"),N=[];for(let W=1;W<k.length-1;W++)N.push(T.table[k[W]].node);return t.fromArray(g(N))},t.rawSplit=function(v){return t.fromArray(d(v,a.isKanjiModeEnabled()))}})(lC);const N0=Xn,fm=O0,VM=EM,ZM=_M,qM=X8,GM=eC,nw=tC,rw=I0,KM=AM,Cp=iC,YM=sC,QM=ds,hm=lC;function JM(t,e){const n=t.size,r=GM.getPositions(e);for(let o=0;o<r.length;o++){const i=r[o][0],s=r[o][1];for(let a=-1;a<=7;a++)if(!(i+a<=-1||n<=i+a))for(let l=-1;l<=7;l++)s+l<=-1||n<=s+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?t.set(i+a,s+l,!0,!0):t.set(i+a,s+l,!1,!0))}}function XM(t){const e=t.size;for(let n=8;n<e-8;n++){const r=n%2===0;t.set(n,6,r,!0),t.set(6,n,r,!0)}}function eL(t,e){const n=qM.getPositions(e);for(let r=0;r<n.length;r++){const o=n[r][0],i=n[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?t.set(o+s,i+a,!0,!0):t.set(o+s,i+a,!1,!0)}}function tL(t,e){const n=t.size,r=Cp.getEncodedBits(e);let o,i,s;for(let a=0;a<18;a++)o=Math.floor(a/3),i=a%3+n-8-3,s=(r>>a&1)===1,t.set(o,i,s,!0),t.set(i,o,s,!0)}function pm(t,e,n){const r=t.size,o=YM.getEncodedBits(e,n);let i,s;for(i=0;i<15;i++)s=(o>>i&1)===1,i<6?t.set(i,8,s,!0):i<8?t.set(i+1,8,s,!0):t.set(r-15+i,8,s,!0),i<8?t.set(8,r-i-1,s,!0):i<9?t.set(8,15-i-1+1,s,!0):t.set(8,15-i-1,s,!0);t.set(r-8,8,1,!0)}function nL(t,e){const n=t.size;let r=-1,o=n-1,i=7,s=0;for(let a=n-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!t.isReserved(o,a-l)){let c=!1;s<e.length&&(c=(e[s]>>>i&1)===1),t.set(o,a-l,c),i--,i===-1&&(s++,i=7)}if(o+=r,o<0||n<=o){o-=r,r=-r;break}}}function rL(t,e,n){const r=new VM;n.forEach(function(l){r.put(l.mode.bit,4),r.put(l.getLength(),QM.getCharCountIndicator(l.mode,t)),l.write(r)});const o=N0.getSymbolTotalCodewords(t),i=rw.getTotalCodewordsCount(t,e),s=(o-i)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let l=0;l<a;l++)r.put(l%2?17:236,8);return iL(r,t,e)}function iL(t,e,n){const r=N0.getSymbolTotalCodewords(e),o=rw.getTotalCodewordsCount(e,n),i=r-o,s=rw.getBlocksCount(e,n),a=r%s,l=s-a,c=Math.floor(r/s),u=Math.floor(i/s),d=u+1,h=c-u,g=new KM(h);let m=0;const w=new Array(s),C=new Array(s);let y=0;const v=new Uint8Array(t.buffer);for(let k=0;k<s;k++){const N=k<l?u:d;w[k]=v.slice(m,m+N),C[k]=g.encode(w[k]),m+=N,y=Math.max(y,N)}const b=new Uint8Array(r);let E=0,R,T;for(R=0;R<y;R++)for(T=0;T<s;T++)R<w[T].length&&(b[E++]=w[T][R]);for(R=0;R<h;R++)for(T=0;T<s;T++)b[E++]=C[T][R];return b}function oL(t,e,n,r){let o;if(Array.isArray(t))o=hm.fromArray(t);else if(typeof t=="string"){let c=e;if(!c){const u=hm.rawSplit(t);c=Cp.getBestVersionForData(u,n)}o=hm.fromString(t,c||40)}else throw new Error("Invalid data");const i=Cp.getBestVersionForData(o,n);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=i;else if(e<i)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+i+`.
`);const s=rL(e,n,o),a=N0.getSymbolSize(e),l=new ZM(a);return JM(l,e),XM(l),eL(l,e),pm(l,n,0),e>=7&&tL(l,e),nL(l,s),isNaN(r)&&(r=nw.getBestMask(l,pm.bind(null,l,n))),nw.applyMask(r,l),pm(l,n,r),{modules:l,version:e,errorCorrectionLevel:n,maskPattern:r,segments:o}}Q8.create=function(e,n){if(typeof e>"u"||e==="")throw new Error("No input text");let r=fm.M,o,i;return typeof n<"u"&&(r=fm.from(n.errorCorrectionLevel,fm.M),o=Cp.from(n.version),i=nw.from(n.maskPattern),n.toSJISFunc&&N0.setToSJISFunction(n.toSJISFunc)),oL(e,o,r,i)};var uC={},av={};(function(t){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(i){return[i,i]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,i=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:i,scale:i?4:s,margin:o,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},t.getImageWidth=function(r,o){const i=t.getScale(r,o);return Math.floor((r+o.margin*2)*i)},t.qrToImageData=function(r,o,i){const s=o.modules.size,a=o.modules.data,l=t.getScale(s,i),c=Math.floor((s+i.margin*2)*l),u=i.margin*l,d=[i.color.light,i.color.dark];for(let h=0;h<c;h++)for(let g=0;g<c;g++){let m=(h*c+g)*4,w=i.color.light;if(h>=u&&g>=u&&h<c-u&&g<c-u){const C=Math.floor((h-u)/l),y=Math.floor((g-u)/l);w=d[a[C*s+y]?1:0]}r[m++]=w.r,r[m++]=w.g,r[m++]=w.b,r[m]=w.a}}})(av);(function(t){const e=av;function n(o,i,s){o.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=s,i.width=s,i.style.height=s+"px",i.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(i,s,a){let l=a,c=s;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),s||(c=r()),l=e.getOptions(l);const u=e.getImageWidth(i.modules.size,l),d=c.getContext("2d"),h=d.createImageData(u,u);return e.qrToImageData(h.data,i,l),n(d,c,u),d.putImageData(h,0,0),c},t.renderToDataURL=function(i,s,a){let l=a;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={});const c=t.render(i,s,l),u=l.type||"image/png",d=l.rendererOpts||{};return c.toDataURL(u,d.quality)}})(uC);var dC={};const sL=av;function E5(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function mm(t,e,n){let r=t+e;return typeof n<"u"&&(r+=" "+n),r}function aL(t,e,n){let r="",o=0,i=!1,s=0;for(let a=0;a<t.length;a++){const l=Math.floor(a%e),c=Math.floor(a/e);!l&&!i&&(i=!0),t[a]?(s++,a>0&&l>0&&t[a-1]||(r+=i?mm("M",l+n,.5+c+n):mm("m",o,0),o=0,i=!1),l+1<e&&t[a+1]||(r+=mm("h",s),s=0)):o++}return r}dC.render=function(e,n,r){const o=sL.getOptions(n),i=e.modules.size,s=e.modules.data,a=i+o.margin*2,l=o.color.light.a?"<path "+E5(o.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",c="<path "+E5(o.color.dark,"stroke")+' d="'+aL(s,i,o.margin)+'"/>',u='viewBox="0 0 '+a+" "+a+'"',h='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+u+' shape-rendering="crispEdges">'+l+c+`</svg>
`;return typeof r=="function"&&r(null,h),h};const lL=xM,iw=Q8,fC=uC,cL=dC;function lv(t,e,n,r,o){const i=[].slice.call(arguments,1),s=i.length,a=typeof i[s-1]=="function";if(!a&&!lL())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(o=n,n=e,e=r=void 0):s===3&&(e.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=n,n=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(n=e,e=r=void 0):s===2&&!e.getContext&&(r=n,n=e,e=void 0),new Promise(function(l,c){try{const u=iw.create(n,r);l(t(u,e,r))}catch(u){c(u)}})}try{const l=iw.create(n,r);o(null,t(l,e,r))}catch(l){o(l)}}gf.create=iw.create;gf.toCanvas=lv.bind(null,fC.render);gf.toDataURL=lv.bind(null,fC.renderToDataURL);gf.toString=lv.bind(null,function(t,e,n){return cL.render(t,n)});const uL=.1,_5=2.5,Pi=7;function gm(t,e,n){return t===e?!1:(t-e<0?e-t:t-e)<=n+uL}function dL(t,e){const n=Array.prototype.slice.call(gf.create(t,{errorCorrectionLevel:e}).modules.data,0),r=Math.sqrt(n.length);return n.reduce((o,i,s)=>(s%r===0?o.push([i]):o[o.length-1].push(i))&&o,[])}const fL={generate(t,e,n){const r="#141414",o="transparent",s=[],a=dL(t,"Q"),l=e/a.length,c=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];c.forEach(({x:w,y:C})=>{const y=(a.length-Pi)*l*w,v=(a.length-Pi)*l*C,b=.45;for(let E=0;E<c.length;E+=1){const R=l*(Pi-E*2);s.push(X`
            <rect
              fill=${E===2?r:o}
              width=${E===0?R-5:R}
              rx= ${E===0?(R-5)*b:R*b}
              ry= ${E===0?(R-5)*b:R*b}
              stroke=${r}
              stroke-width=${E===0?5:0}
              height=${E===0?R-5:R}
              x= ${E===0?v+l*E+5/2:v+l*E}
              y= ${E===0?y+l*E+5/2:y+l*E}
            />
          `)}});const u=Math.floor((n+25)/l),d=a.length/2-u/2,h=a.length/2+u/2-1,g=[];a.forEach((w,C)=>{w.forEach((y,v)=>{if(a[C][v]&&!(C<Pi&&v<Pi||C>a.length-(Pi+1)&&v<Pi||C<Pi&&v>a.length-(Pi+1))&&!(C>d&&C<h&&v>d&&v<h)){const b=C*l+l/2,E=v*l+l/2;g.push([b,E])}})});const m={};return g.forEach(([w,C])=>{var y;m[w]?(y=m[w])==null||y.push(C):m[w]=[C]}),Object.entries(m).map(([w,C])=>{const y=C.filter(v=>C.every(b=>!gm(v,b,l)));return[Number(w),y]}).forEach(([w,C])=>{C.forEach(y=>{s.push(X`<circle cx=${w} cy=${y} fill=${r} r=${l/_5} />`)})}),Object.entries(m).filter(([w,C])=>C.length>1).map(([w,C])=>{const y=C.filter(v=>C.some(b=>gm(v,b,l)));return[Number(w),y]}).map(([w,C])=>{C.sort((v,b)=>v<b?-1:1);const y=[];for(const v of C){const b=y.find(E=>E.some(R=>gm(v,R,l)));b?b.push(v):y.push([v])}return[w,y.map(v=>[v[0],v[v.length-1]])]}).forEach(([w,C])=>{C.forEach(([y,v])=>{s.push(X`
              <line
                x1=${w}
                x2=${w}
                y1=${y}
                y2=${v}
                stroke=${r}
                stroke-width=${l/(_5/2)}
                stroke-linecap="round"
              />
            `)})}),s}},hL=oe`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var ka=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let mi=class extends de{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,L`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return X`
      <svg height=${e} width=${e}>
        ${fL.generate(this.uri,e,this.arenaClear?0:e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?L`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:L`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};mi.styles=[pe,hL];ka([$()],mi.prototype,"uri",void 0);ka([$({type:Number})],mi.prototype,"size",void 0);ka([$()],mi.prototype,"theme",void 0);ka([$()],mi.prototype,"imageSrc",void 0);ka([$()],mi.prototype,"alt",void 0);ka([$({type:Boolean})],mi.prototype,"arenaClear",void 0);mi=ka([B("wui-qr-code")],mi);const pL=oe`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var mL=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Ep=class extends de{constructor(){super(...arguments),this.inputComponentRef=Z8()}render(){return L`
      <wui-input-text
        ${q8(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,n=e==null?void 0:e.inputElementRef.value;n&&(n.value="",n.focus(),n.dispatchEvent(new Event("input")))}};Ep.styles=[pe,pL];Ep=mL([B("wui-search-bar")],Ep);const gL=oe`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    box-sizing: border-box;
    max-height: 40px;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var yf=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Jo=class extends de{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return L`
      <wui-icon-box
        size="sm"
        iconSize="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
        background="opaque"
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};Jo.styles=[pe,gL];yf([$()],Jo.prototype,"backgroundColor",void 0);yf([$()],Jo.prototype,"iconColor",void 0);yf([$()],Jo.prototype,"icon",void 0);yf([$()],Jo.prototype,"message",void 0);Jo=yf([B("wui-snackbar")],Jo);const wL=oe`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var fs=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Dr=class extends de{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,n)=>{var o;const r=n===this.activeTab;return L`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(n)}
          data-active=${r}
          data-testid="tab-${(o=e.label)==null?void 0:o.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?L`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,n){const r=this.buttons[this.activeTab],o=this.buttons[e],i=r==null?void 0:r.querySelector("wui-text"),s=o==null?void 0:o.querySelector("wui-text"),a=o==null?void 0:o.getBoundingClientRect(),l=s==null?void 0:s.getBoundingClientRect();r&&i&&!n&&e!==this.activeTab&&(i.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&a&&l&&s&&(e!==this.activeTab||n)&&(this.localTabWidth=`${Math.round(a.width+l.width)+6}px`,o.animate([{width:`${a.width+l.width}px`}],{duration:n?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:n?0:125,delay:n?0:200,fill:"forwards",easing:"ease"}))}};Dr.styles=[pe,Fe,wL];fs([$({type:Array})],Dr.prototype,"tabs",void 0);fs([$()],Dr.prototype,"onTabChange",void 0);fs([$({type:Array})],Dr.prototype,"buttons",void 0);fs([$({type:Boolean})],Dr.prototype,"disabled",void 0);fs([$()],Dr.prototype,"localTabWidth",void 0);fs([Yy()],Dr.prototype,"activeTab",void 0);fs([Yy()],Dr.prototype,"isDense",void 0);Dr=fs([B("wui-tabs")],Dr);const yL=oe`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var M0=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let pa=class extends de{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,L`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${this.variant==="fill"?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};pa.styles=[pe,Fe,yL];M0([$()],pa.prototype,"placement",void 0);M0([$()],pa.prototype,"variant",void 0);M0([$()],pa.prototype,"message",void 0);pa=M0([B("wui-tooltip")],pa);const vL=oe`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var L0=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ma=class extends de{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,L`${this.templateVisual()}`}templateVisual(){return this.imageSrc?L`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:L`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};ma.styles=[pe,vL];L0([$()],ma.prototype,"imageSrc",void 0);L0([$()],ma.prototype,"alt",void 0);L0([$({type:Boolean})],ma.prototype,"borderRadiusFull",void 0);ma=L0([B("wui-visual-thumbnail")],ma);const bL=oe`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`;var D0=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ga=class extends de{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return L`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};ga.styles=[pe,Fe,bL];D0([$()],ga.prototype,"label",void 0);D0([$()],ga.prototype,"description",void 0);D0([$()],ga.prototype,"icon",void 0);ga=D0([B("wui-notice-card")],ga);const xL=oe`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-200), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var cv=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const wm=100;let lc=class extends de{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}updated(e){super.updated(e),(e.has("textTitle")||e.has("overflowedContent"))&&setTimeout(()=>{this.checkHeight()},1)}checkHeight(){this.updateComplete.then(()=>{var r,o;const e=(r=this.shadowRoot)==null?void 0:r.querySelector(".heightContent"),n=(o=this.shadowRoot)==null?void 0:o.querySelector(".textContent");if(e&&n){this.scrollElement=e;const i=n==null?void 0:n.scrollHeight;i&&i>wm&&(this.enableAccordion=!0,this.scrollHeightElement=i,this.requestUpdate())}})}render(){return L`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${this.enableAccordion?!!this.toggled:!0}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text class="textContent" variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?`${wm}px`:`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:`${wm}px`}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?L` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};lc.styles=[pe,Fe,xL];cv([$()],lc.prototype,"textTitle",void 0);cv([$()],lc.prototype,"overflowedContent",void 0);lc=cv([B("wui-list-accordion")],lc);const CL=oe`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var j0=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let wa=class extends de{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return L`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?L`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?L` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:L`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};wa.styles=[pe,Fe,CL];j0([$()],wa.prototype,"imageSrc",void 0);j0([$()],wa.prototype,"textTitle",void 0);j0([$()],wa.prototype,"textValue",void 0);wa=j0([B("wui-list-content")],wa);const EL=oe`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var vf=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Xo=class extends de{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.transparent=!1}render(){return L`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled} ontouchstart>
        ${this.templateNetworkImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
      </button>
    `}templateNetworkImage(){return this.imageSrc?L`<wui-network-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-network-image>`:this.imageSrc?null:L`<wui-network-image size="sm" name=${this.name}></wui-network-image>`}};Xo.styles=[pe,Fe,EL];vf([$()],Xo.prototype,"imageSrc",void 0);vf([$()],Xo.prototype,"name",void 0);vf([$({type:Boolean})],Xo.prototype,"disabled",void 0);vf([$({type:Boolean})],Xo.prototype,"transparent",void 0);Xo=vf([B("wui-list-network")],Xo);const _L=oe`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var kc=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Zi=class extends de{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return L`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?L`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:L`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Zi.styles=[pe,Fe,_L];kc([$()],Zi.prototype,"amount",void 0);kc([$()],Zi.prototype,"networkCurreny",void 0);kc([$()],Zi.prototype,"networkImageUrl",void 0);kc([$()],Zi.prototype,"receiverAddress",void 0);kc([$()],Zi.prototype,"addressExplorerUrl",void 0);Zi=kc([B("wui-list-wallet-transaction")],Zi);const SL=oe`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var er=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let un=class extends de{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="Bought",this.purchaseValue="",this.purchaseCurrency="",this.date="",this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=""}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return L`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?L`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:L`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await Ae._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return L`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){const e=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return L`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return L`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};un.styles=[pe,Fe,SL];er([$({type:Boolean})],un.prototype,"disabled",void 0);er([$()],un.prototype,"color",void 0);er([$()],un.prototype,"label",void 0);er([$()],un.prototype,"purchaseValue",void 0);er([$()],un.prototype,"purchaseCurrency",void 0);er([$()],un.prototype,"date",void 0);er([$({type:Boolean})],un.prototype,"completed",void 0);er([$({type:Boolean})],un.prototype,"inProgress",void 0);er([$({type:Boolean})],un.prototype,"failed",void 0);er([$()],un.prototype,"onClick",void 0);er([$()],un.prototype,"symbol",void 0);er([$()],un.prototype,"icon",void 0);un=er([B("wui-onramp-activity-item")],un);const AL=oe`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color 0.2s linear;
  }

  button:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow 0.2s linear;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var hs=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let jr=class extends de{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return L`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-visual name=${hr(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?L`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:L`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){var r;const e=Pe.getRequestedCaipNetworks(),n=(r=e==null?void 0:e.filter(o=>o==null?void 0:o.imageId))==null?void 0:r.slice(0,5);return L`
      <wui-flex class="networks">
        ${n==null?void 0:n.map(o=>L`
            <wui-flex class="network-icon">
              <wui-image src=${hr(tt.getNetworkImage(o))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};jr.styles=[pe,Fe,AL];hs([$({type:Boolean})],jr.prototype,"disabled",void 0);hs([$()],jr.prototype,"color",void 0);hs([$()],jr.prototype,"name",void 0);hs([$()],jr.prototype,"label",void 0);hs([$()],jr.prototype,"feeRange",void 0);hs([$({type:Boolean})],jr.prototype,"loading",void 0);hs([$()],jr.prototype,"onClick",void 0);jr=hs([B("wui-onramp-provider-item")],jr);const $L=oe`
  button {
    display: flex;
    gap: var(--wui-spacing-3xs);
    align-items: center;
    padding: 6.25px var(--wui-spacing-xs) 7.25px var(--wui-spacing-s);
    background-color: var(--wui-gray-glass-090);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-060);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-080);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-060);
    }
  }
`;var hC=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Pd=class extends de{constructor(){super(...arguments),this.text=""}render(){return L`<button ontouchstart>
      <wui-text variant="small-600" color="bg-100">${this.text}</wui-text>
      <wui-icon color="bg-100" size="xs" name="arrowRight"></wui-icon>
    </button>`}};Pd.styles=[pe,Fe,$L];hC([$()],Pd.prototype,"text",void 0);Pd=hC([B("wui-promo")],Pd);const RL=oe`
  :host {
    position: relative;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-accent-glass-020);
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    }
  }
`;var uv=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let cc=class extends de{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return L`<button
        @mouseenter=${this.onMouseEnter.bind(this)}
        @mouseleave=${this.onMouseLeave.bind(this)}
        ontouchstart
      >
        <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
      </button>
      <wui-tooltip variant="shade" message=${this.text} placement="top"></wui-tooltip>`}onMouseEnter(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-tooltip");e&&(e==null||e.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease",duration:250}))}onMouseLeave(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-tooltip");e&&(e==null||e.animate([{opacity:1},{opacity:0}],{fill:"forwards",easing:"ease",duration:200}))}};cc.styles=[pe,Fe,RL];uv([$()],cc.prototype,"text",void 0);uv([$()],cc.prototype,"icon",void 0);cc=uv([B("wui-tooltip-select")],cc);const TL=oe`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var dv=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let uc=class extends de{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return L`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};uc.styles=[pe,TL];dv([$()],uc.prototype,"dollars",void 0);dv([$()],uc.prototype,"pennies",void 0);uc=dv([B("wui-balance")],uc);const PL=oe`
  button {
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var Nc=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let qi=class extends de{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.isProfileName=!1,this.address="",this.icon="chevronBottom"}render(){return L` <button ontouchstart>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${ze.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:4,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?L`<wui-image src=${this.networkSrc}></wui-image>`:L`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};qi.styles=[pe,Fe,PL];Nc([$()],qi.prototype,"networkSrc",void 0);Nc([$()],qi.prototype,"avatarSrc",void 0);Nc([$({type:Boolean})],qi.prototype,"isProfileName",void 0);Nc([$()],qi.prototype,"address",void 0);Nc([$()],qi.prototype,"icon",void 0);qi=Nc([B("wui-profile-button")],qi);const OL=oe`
  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='shade'],
  button[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  button[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  button[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-error-glass-010);
    background-color: var(--wui-error-glass-010);
    color: var(--wui-color-error-100);
  }

  button[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  button[data-variant='transparent'],
  button[data-variant='success'],
  button[data-variant='shadeSmall'],
  button[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 8px;
  }

  button[data-variant='transparent']:has(wui-text:first-child),
  button[data-variant='success']:has(wui-text:first-child),
  button[data-variant='shadeSmall']:has(wui-text:first-child),
  button[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  button[data-variant='fill'],
  button[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-variant='fill']:has(wui-text:first-child),
  button[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  button[data-variant='fill'] > wui-image,
  button[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  button[data-variant='fill'] > wui-icon,
  button[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  button[data-variant='transparent'] > wui-image,
  button[data-variant='success'] > wui-image,
  button[data-variant='shadeSmall'] > wui-image,
  button[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  button[data-variant='transparent'] > wui-icon,
  button[data-variant='success'] > wui-icon,
  button[data-variant='shadeSmall'] > wui-icon,
  button[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='shade']:focus-visible,
  button[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  button[data-variant='error']:focus-visible {
    background-color: var(--wui-error-glass-015);
  }

  button.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='shade']:hover,
    button[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    button[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    button[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }

    button[data-variant='error']:hover {
      background-color: var(--wui-error-glass-015);
    }
  }

  button[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  button[data-variant='shade']:active,
  button[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  button[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }

  button[data-variant='error']:active {
    background-color: var(--wui-error-glass-020);
  }
`;var Mc=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Gi=class extends de{constructor(){super(...arguments),this.variant="fill",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.text=""}render(){const n=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall"?"small-600":"paragraph-600";return L`
      <button class=${this.disabled?"disabled":""} data-variant=${this.variant}>
        <wui-image src=${this.imageSrc}></wui-image>
        <wui-text variant=${n} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};Gi.styles=[pe,Fe,OL];Mc([$()],Gi.prototype,"variant",void 0);Mc([$()],Gi.prototype,"imageSrc",void 0);Mc([$({type:Boolean})],Gi.prototype,"disabled",void 0);Mc([$()],Gi.prototype,"icon",void 0);Mc([$()],Gi.prototype,"text",void 0);Gi=Mc([B("wui-chip-button")],Gi);const IL=oe`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var fv=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let dc=class extends de{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return L`
      <button ontouchstart>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return L` <wui-flex class="networks">
      ${e==null?void 0:e.map(n=>L` <wui-flex class="network-icon"> <wui-image src=${n}></wui-image> </wui-flex>`)}
    </wui-flex>`}};dc.styles=[pe,Fe,IL];fv([$({type:Array})],dc.prototype,"networkImages",void 0);fv([$()],dc.prototype,"text",void 0);dc=fv([B("wui-compatible-network")],dc);const kL=oe`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var hv=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let fc=class extends de{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return L`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};fc.styles=[pe,Fe,kL];hv([$()],fc.prototype,"icon",void 0);hv([$()],fc.prototype,"text",void 0);fc=hv([B("wui-banner")],fc);const NL=oe`
  button {
    pointer-events: none;
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }
`;var Lc=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Ki=class extends de{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency=""}render(){return L`
      <button ontouchstart>
        <wui-flex gap="s" alignItems="center">
          <wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200"
              >${ze.roundNumber(Number(this.tokenAmount),6,5)}
              ${this.tokenCurrency}</wui-text
            ></wui-flex
          >
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}};Ki.styles=[pe,Fe,NL];Lc([$()],Ki.prototype,"tokenName",void 0);Lc([$()],Ki.prototype,"tokenImageUrl",void 0);Lc([$({type:Number})],Ki.prototype,"tokenValue",void 0);Lc([$()],Ki.prototype,"tokenAmount",void 0);Lc([$()],Ki.prototype,"tokenCurrency",void 0);Ki=Lc([B("wui-list-token")],Ki);const ML=oe`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var ps=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Br=class extends de{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return L`
      <button ontouchstart ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?L` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main">${this.tag}</wui-tag>
      </wui-flex>`:L`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};Br.styles=[pe,Fe,ML];ps([$()],Br.prototype,"icon",void 0);ps([$()],Br.prototype,"text",void 0);ps([$()],Br.prototype,"description",void 0);ps([$()],Br.prototype,"tag",void 0);ps([$()],Br.prototype,"iconBackgroundColor",void 0);ps([$()],Br.prototype,"iconColor",void 0);ps([$({type:Boolean})],Br.prototype,"disabled",void 0);Br=ps([B("wui-list-description")],Br);const LL=oe`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var yr=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let yn=class extends de{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&ze.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&ze.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&ze.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&ze.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&ze.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&ze.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&ze.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&ze.getSpacingStyles(this.margin,3)};
    `,L`<slot></slot>`}};yn.styles=[pe,LL];yr([$()],yn.prototype,"gridTemplateRows",void 0);yr([$()],yn.prototype,"gridTemplateColumns",void 0);yr([$()],yn.prototype,"justifyItems",void 0);yr([$()],yn.prototype,"alignItems",void 0);yr([$()],yn.prototype,"justifyContent",void 0);yr([$()],yn.prototype,"alignContent",void 0);yr([$()],yn.prototype,"columnGap",void 0);yr([$()],yn.prototype,"rowGap",void 0);yr([$()],yn.prototype,"gap",void 0);yr([$()],yn.prototype,"padding",void 0);yr([$()],yn.prototype,"margin",void 0);yn=yr([B("wui-grid")],yn);const DL=oe`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var pC=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Od=class extends de{constructor(){super(...arguments),this.text=""}render(){return L`${this.template()}`}template(){return this.text?L`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};Od.styles=[pe,DL];pC([$()],Od.prototype,"text",void 0);Od=pC([B("wui-separator")],Od);var mC={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(Mi,function(){var n=1e3,r=6e4,o=36e5,i="millisecond",s="second",a="minute",l="hour",c="day",u="week",d="month",h="quarter",g="year",m="date",w="Invalid Date",C=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(ne){var K=["th","st","nd","rd"],q=ne%100;return"["+ne+(K[(q-20)%10]||K[q]||K[0])+"]"}},b=function(ne,K,q){var fe=String(ne);return!fe||fe.length>=K?ne:""+Array(K+1-fe.length).join(q)+ne},E={s:b,z:function(ne){var K=-ne.utcOffset(),q=Math.abs(K),fe=Math.floor(q/60),j=q%60;return(K<=0?"+":"-")+b(fe,2,"0")+":"+b(j,2,"0")},m:function ne(K,q){if(K.date()<q.date())return-ne(q,K);var fe=12*(q.year()-K.year())+(q.month()-K.month()),j=K.clone().add(fe,d),Y=q-j<0,Q=K.clone().add(fe+(Y?-1:1),d);return+(-(fe+(q-j)/(Y?j-Q:Q-j))||0)},a:function(ne){return ne<0?Math.ceil(ne)||0:Math.floor(ne)},p:function(ne){return{M:d,y:g,w:u,d:c,D:m,h:l,m:a,s,ms:i,Q:h}[ne]||String(ne||"").toLowerCase().replace(/s$/,"")},u:function(ne){return ne===void 0}},R="en",T={};T[R]=v;var k="$isDayjsObject",N=function(ne){return ne instanceof he||!(!ne||!ne[k])},W=function ne(K,q,fe){var j;if(!K)return R;if(typeof K=="string"){var Y=K.toLowerCase();T[Y]&&(j=Y),q&&(T[Y]=q,j=Y);var Q=K.split("-");if(!j&&Q.length>1)return ne(Q[0])}else{var re=K.name;T[re]=K,j=re}return!fe&&j&&(R=j),j||!fe&&R},D=function(ne,K){if(N(ne))return ne.clone();var q=typeof K=="object"?K:{};return q.date=ne,q.args=arguments,new he(q)},H=E;H.l=W,H.i=N,H.w=function(ne,K){return D(ne,{locale:K.$L,utc:K.$u,x:K.$x,$offset:K.$offset})};var he=function(){function ne(q){this.$L=W(q.locale,null,!0),this.parse(q),this.$x=this.$x||q.x||{},this[k]=!0}var K=ne.prototype;return K.parse=function(q){this.$d=function(fe){var j=fe.date,Y=fe.utc;if(j===null)return new Date(NaN);if(H.u(j))return new Date;if(j instanceof Date)return new Date(j);if(typeof j=="string"&&!/Z$/i.test(j)){var Q=j.match(C);if(Q){var re=Q[2]-1||0,ge=(Q[7]||"0").substring(0,3);return Y?new Date(Date.UTC(Q[1],re,Q[3]||1,Q[4]||0,Q[5]||0,Q[6]||0,ge)):new Date(Q[1],re,Q[3]||1,Q[4]||0,Q[5]||0,Q[6]||0,ge)}}return new Date(j)}(q),this.init()},K.init=function(){var q=this.$d;this.$y=q.getFullYear(),this.$M=q.getMonth(),this.$D=q.getDate(),this.$W=q.getDay(),this.$H=q.getHours(),this.$m=q.getMinutes(),this.$s=q.getSeconds(),this.$ms=q.getMilliseconds()},K.$utils=function(){return H},K.isValid=function(){return this.$d.toString()!==w},K.isSame=function(q,fe){var j=D(q);return this.startOf(fe)<=j&&j<=this.endOf(fe)},K.isAfter=function(q,fe){return D(q)<this.startOf(fe)},K.isBefore=function(q,fe){return this.endOf(fe)<D(q)},K.$g=function(q,fe,j){return H.u(q)?this[fe]:this.set(j,q)},K.unix=function(){return Math.floor(this.valueOf()/1e3)},K.valueOf=function(){return this.$d.getTime()},K.startOf=function(q,fe){var j=this,Y=!!H.u(fe)||fe,Q=H.p(q),re=function(En,Tt){var Ln=H.w(j.$u?Date.UTC(j.$y,Tt,En):new Date(j.$y,Tt,En),j);return Y?Ln:Ln.endOf(c)},ge=function(En,Tt){return H.w(j.toDate()[En].apply(j.toDate("s"),(Y?[0,0,0,0]:[23,59,59,999]).slice(Tt)),j)},Xe=this.$W,Ke=this.$M,$e=this.$D,Rt="set"+(this.$u?"UTC":"");switch(Q){case g:return Y?re(1,0):re(31,11);case d:return Y?re(1,Ke):re(0,Ke+1);case u:var Vt=this.$locale().weekStart||0,vt=(Xe<Vt?Xe+7:Xe)-Vt;return re(Y?$e-vt:$e+(6-vt),Ke);case c:case m:return ge(Rt+"Hours",0);case l:return ge(Rt+"Minutes",1);case a:return ge(Rt+"Seconds",2);case s:return ge(Rt+"Milliseconds",3);default:return this.clone()}},K.endOf=function(q){return this.startOf(q,!1)},K.$set=function(q,fe){var j,Y=H.p(q),Q="set"+(this.$u?"UTC":""),re=(j={},j[c]=Q+"Date",j[m]=Q+"Date",j[d]=Q+"Month",j[g]=Q+"FullYear",j[l]=Q+"Hours",j[a]=Q+"Minutes",j[s]=Q+"Seconds",j[i]=Q+"Milliseconds",j)[Y],ge=Y===c?this.$D+(fe-this.$W):fe;if(Y===d||Y===g){var Xe=this.clone().set(m,1);Xe.$d[re](ge),Xe.init(),this.$d=Xe.set(m,Math.min(this.$D,Xe.daysInMonth())).$d}else re&&this.$d[re](ge);return this.init(),this},K.set=function(q,fe){return this.clone().$set(q,fe)},K.get=function(q){return this[H.p(q)]()},K.add=function(q,fe){var j,Y=this;q=Number(q);var Q=H.p(fe),re=function(Ke){var $e=D(Y);return H.w($e.date($e.date()+Math.round(Ke*q)),Y)};if(Q===d)return this.set(d,this.$M+q);if(Q===g)return this.set(g,this.$y+q);if(Q===c)return re(1);if(Q===u)return re(7);var ge=(j={},j[a]=r,j[l]=o,j[s]=n,j)[Q]||1,Xe=this.$d.getTime()+q*ge;return H.w(Xe,this)},K.subtract=function(q,fe){return this.add(-1*q,fe)},K.format=function(q){var fe=this,j=this.$locale();if(!this.isValid())return j.invalidDate||w;var Y=q||"YYYY-MM-DDTHH:mm:ssZ",Q=H.z(this),re=this.$H,ge=this.$m,Xe=this.$M,Ke=j.weekdays,$e=j.months,Rt=j.meridiem,Vt=function(Tt,Ln,tr,_n){return Tt&&(Tt[Ln]||Tt(fe,Y))||tr[Ln].slice(0,_n)},vt=function(Tt){return H.s(re%12||12,Tt,"0")},En=Rt||function(Tt,Ln,tr){var _n=Tt<12?"AM":"PM";return tr?_n.toLowerCase():_n};return Y.replace(y,function(Tt,Ln){return Ln||function(tr){switch(tr){case"YY":return String(fe.$y).slice(-2);case"YYYY":return H.s(fe.$y,4,"0");case"M":return Xe+1;case"MM":return H.s(Xe+1,2,"0");case"MMM":return Vt(j.monthsShort,Xe,$e,3);case"MMMM":return Vt($e,Xe);case"D":return fe.$D;case"DD":return H.s(fe.$D,2,"0");case"d":return String(fe.$W);case"dd":return Vt(j.weekdaysMin,fe.$W,Ke,2);case"ddd":return Vt(j.weekdaysShort,fe.$W,Ke,3);case"dddd":return Ke[fe.$W];case"H":return String(re);case"HH":return H.s(re,2,"0");case"h":return vt(1);case"hh":return vt(2);case"a":return En(re,ge,!0);case"A":return En(re,ge,!1);case"m":return String(ge);case"mm":return H.s(ge,2,"0");case"s":return String(fe.$s);case"ss":return H.s(fe.$s,2,"0");case"SSS":return H.s(fe.$ms,3,"0");case"Z":return Q}return null}(Tt)||Q.replace(":","")})},K.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},K.diff=function(q,fe,j){var Y,Q=this,re=H.p(fe),ge=D(q),Xe=(ge.utcOffset()-this.utcOffset())*r,Ke=this-ge,$e=function(){return H.m(Q,ge)};switch(re){case g:Y=$e()/12;break;case d:Y=$e();break;case h:Y=$e()/3;break;case u:Y=(Ke-Xe)/6048e5;break;case c:Y=(Ke-Xe)/864e5;break;case l:Y=Ke/o;break;case a:Y=Ke/r;break;case s:Y=Ke/n;break;default:Y=Ke}return j?Y:H.a(Y)},K.daysInMonth=function(){return this.endOf(d).$D},K.$locale=function(){return T[this.$L]},K.locale=function(q,fe){if(!q)return this.$L;var j=this.clone(),Y=W(q,fe,!0);return Y&&(j.$L=Y),j},K.clone=function(){return H.w(this.$d,this)},K.toDate=function(){return new Date(this.valueOf())},K.toJSON=function(){return this.isValid()?this.toISOString():null},K.toISOString=function(){return this.$d.toISOString()},K.toString=function(){return this.$d.toUTCString()},ne}(),ye=he.prototype;return D.prototype=ye,[["$ms",i],["$s",s],["$m",a],["$H",l],["$W",c],["$M",d],["$y",g],["$D",m]].forEach(function(ne){ye[ne[1]]=function(K){return this.$g(K,ne[0],ne[1])}}),D.extend=function(ne,K){return ne.$i||(ne(K,he,D),ne.$i=!0),D},D.locale=W,D.isDayjs=N,D.unix=function(ne){return D(1e3*ne)},D.en=T[R],D.Ls=T,D.p={},D})})(mC);var jL=mC.exports;const bl=os(jL);var gC={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(Mi,function(){return function(n,r,o){o.updateLocale=function(i,s){var a=o.Ls[i];if(a)return(s?Object.keys(s):[]).forEach(function(l){a[l]=s[l]}),a}}})})(gC);var BL=gC.exports;const UL=os(BL);var wC={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(Mi,function(){return function(n,r,o){n=n||{};var i=r.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(c,u,d,h){return i.fromToBase(c,u,d,h)}o.en.relativeTime=s,i.fromToBase=function(c,u,d,h,g){for(var m,w,C,y=d.$locale().relativeTime||s,v=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],b=v.length,E=0;E<b;E+=1){var R=v[E];R.d&&(m=h?o(c).diff(d,R.d,!0):d.diff(c,R.d,!0));var T=(n.rounding||Math.round)(Math.abs(m));if(C=m>0,T<=R.r||!R.r){T<=1&&E>0&&(R=v[E-1]);var k=y[R.l];g&&(T=g(""+T)),w=typeof k=="string"?k.replace("%d",T):k(T,u,R.l,C);break}}if(u)return w;var N=C?y.future:y.past;return typeof N=="function"?N(w):N.replace("%s",w)},i.to=function(c,u){return a(c,u,this,!0)},i.from=function(c,u){return a(c,u,this)};var l=function(c){return c.$u?o.utc():o()};i.toNow=function(c){return this.to(l(this),c)},i.fromNow=function(c){return this.from(l(this),c)}}})})(wC);var FL=wC.exports;const WL=os(FL);bl.extend(WL);bl.extend(UL);bl.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});const pv={getYear(t=new Date().toISOString()){return bl(t).year()},getRelativeDateFromNow(t){return bl(t).fromNow(!0)},formatDate(t,e="DD MMM"){return bl(t).format(e)}},zL=3,HL=["receive","deposit","borrow","claim"],VL=["withdraw","repay","burn"],Io={getMonthName(t){const e=new Date;return e.setMonth(t),e.toLocaleString("en-US",{month:"long"})},getTransactionGroupTitle(t,e){const n=pv.getYear(),r=this.getMonthName(e);return t===n?r:`${r} ${t}`},getTransactionImages(t){const[e,n]=t,r=!!e&&(t==null?void 0:t.every(s=>!!s.nft_info)),o=(t==null?void 0:t.length)>1;return(t==null?void 0:t.length)===2&&!r?[this.getTransactionImage(e),this.getTransactionImage(n)]:o?t.map(s=>this.getTransactionImage(s)):[this.getTransactionImage(e)]},getTransactionImage(t){return{type:Io.getTransactionTransferTokenType(t),url:Io.getTransactionImageURL(t)}},getTransactionImageURL(t){var o,i,s,a,l;let e;const n=!!(t!=null&&t.nft_info),r=!!(t!=null&&t.fungible_info);return t&&n?e=(s=(i=(o=t==null?void 0:t.nft_info)==null?void 0:o.content)==null?void 0:i.preview)==null?void 0:s.url:t&&r&&(e=(l=(a=t==null?void 0:t.fungible_info)==null?void 0:a.icon)==null?void 0:l.url),e},getTransactionTransferTokenType(t){if(t!=null&&t.fungible_info)return"FUNGIBLE";if(t!=null&&t.nft_info)return"NFT"},getTransactionDescriptions(t){var d,h,g;const e=(d=t==null?void 0:t.metadata)==null?void 0:d.operationType,n=t==null?void 0:t.transfers,r=((h=t==null?void 0:t.transfers)==null?void 0:h.length)>0,o=((g=t==null?void 0:t.transfers)==null?void 0:g.length)>1,i=r&&(n==null?void 0:n.every(m=>!!(m!=null&&m.fungible_info))),[s,a]=n;let l=this.getTransferDescription(s),c=this.getTransferDescription(a);if(!r)return(e==="send"||e==="receive")&&i?(l=ze.getTruncateString({string:t==null?void 0:t.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),c=ze.getTruncateString({string:t==null?void 0:t.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[l,c]):[t.metadata.status];if(o)return n.map(m=>this.getTransferDescription(m));let u="";return HL.includes(e)?u="+":VL.includes(e)&&(u="-"),l=u.concat(l),[l]},getTransferDescription(t){var n;let e="";return t&&(t!=null&&t.nft_info?e=((n=t==null?void 0:t.nft_info)==null?void 0:n.name)||"-":t!=null&&t.fungible_info&&(e=this.getFungibleTransferDescription(t)||"-")),e},getFungibleTransferDescription(t){var r;return t?[this.getQuantityFixedValue(t==null?void 0:t.quantity.numeric),(r=t==null?void 0:t.fungible_info)==null?void 0:r.symbol].join(" ").trim():null},getQuantityFixedValue(t){return t?parseFloat(t).toFixed(zL):null}},ZL=Object.freeze(Object.defineProperty({__proto__:null,TransactionUtil:Io,UiHelperUtil:ze,get WuiAccountButton(){return Vn},get WuiAllWalletsImage(){return _d},get WuiAvatar(){return ca},get WuiBalance(){return uc},get WuiBanner(){return fc},get WuiButton(){return Zn},get WuiCard(){return wp},get WuiCardSelect(){return fi},get WuiCardSelectLoader(){return Sd},get WuiChip(){return hi},get WuiChipButton(){return Gi},get WuiCompatibleNetwork(){return dc},get WuiConnectButton(){return ec},get WuiCtaButton(){return ua},get WuiEmailInput(){return da},get WuiFlex(){return cn},get WuiGrid(){return yn},get WuiIcon(){return sa},get WuiIconBox(){return wr},get WuiIconLink(){return Qo},get WuiImage(){return Ql},get WuiInputElement(){return Ad},get WuiInputNumeric(){return tc},get WuiInputText(){return Lr},get WuiLink(){return nc},get WuiListAccordion(){return lc},get WuiListContent(){return wa},get WuiListDescription(){return Br},get WuiListItem(){return qn},get WuiListNetwork(){return Xo},get WuiListToken(){return Ki},get WuiListWallet(){return kn},get WuiListWalletTransaction(){return Zi},get WuiLoadingHexagon(){return yp},get WuiLoadingSpinner(){return Jl},get WuiLoadingThumbnail(){return Ed},get WuiLogo(){return Rd},get WuiLogoSelect(){return rc},get WuiNetworkButton(){return fa},get WuiNetworkImage(){return Yo},get WuiNoticeCard(){return ga},get WuiOnRampActivityItem(){return un},get WuiOnRampProviderItem(){return jr},get WuiOtp(){return ha},get WuiProfileButton(){return qi},get WuiPromo(){return Pd},get WuiQrCode(){return mi},get WuiSearchBar(){return Ep},get WuiSeparator(){return Od},get WuiShimmer(){return aa},get WuiSnackbar(){return Jo},get WuiTabs(){return Dr},get WuiTag(){return $d},get WuiText(){return la},get WuiTooltip(){return pa},get WuiTooltipSelect(){return cc},get WuiTransactionListItem(){return In},get WuiTransactionListItemLoader(){return bp},get WuiTransactionVisual(){return pi},get WuiVisual(){return Xl},get WuiVisualThumbnail(){return ma},get WuiWalletImage(){return di},customElement:B,initializeTheming:L8,setColorTheme:Gy,setThemeVariables:D8},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ph=globalThis,mv=Ph.ShadowRoot&&(Ph.ShadyCSS===void 0||Ph.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gv=Symbol(),S5=new WeakMap;let yC=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==gv)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(mv&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=S5.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&S5.set(n,e))}return e}toString(){return this.cssText}};const qL=t=>new yC(typeof t=="string"?t:t+"",void 0,gv),Le=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,o,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1],t[0]);return new yC(n,t,gv)},GL=(t,e)=>{if(mv)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const r=document.createElement("style"),o=Ph.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,t.appendChild(r)}},A5=mv?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return qL(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:KL,defineProperty:YL,getOwnPropertyDescriptor:QL,getOwnPropertyNames:JL,getOwnPropertySymbols:XL,getPrototypeOf:eD}=Object,Zo=globalThis,$5=Zo.trustedTypes,tD=$5?$5.emptyScript:"",ym=Zo.reactiveElementPolyfillSupport,Mu=(t,e)=>t,_p={toAttribute(t,e){switch(e){case Boolean:t=t?tD:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},wv=(t,e)=>!KL(t,e),R5={attribute:!0,type:String,converter:_p,reflect:!1,hasChanged:wv};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Zo.litPropertyMetadata??(Zo.litPropertyMetadata=new WeakMap);class Ya extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=R5){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,n);o!==void 0&&YL(this.prototype,e,o)}}static getPropertyDescriptor(e,n,r){const{get:o,set:i}=QL(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const a=o==null?void 0:o.call(this);i.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??R5}static _$Ei(){if(this.hasOwnProperty(Mu("elementProperties")))return;const e=eD(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Mu("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Mu("properties"))){const n=this.properties,r=[...JL(n),...XL(n)];for(const o of r)this.createProperty(o,n[o])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)n.unshift(A5(o))}else e!==void 0&&n.push(A5(e));return n}static _$Eu(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$EO)==null||n.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return GL(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EC(e,n){var i;const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){const s=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:_p).toAttribute(n,r.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,n){var i;const r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const s=r.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:_p;this._$Em=o,this[o]=a.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(e,n,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??wv)(this[e],n))return;this.P(e,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,n,r){this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,s]of o)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(r=this._$EO)==null||r.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(n)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$EO)==null||n.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(e){}firstUpdated(e){}}Ya.elementStyles=[],Ya.shadowRootOptions={mode:"open"},Ya[Mu("elementProperties")]=new Map,Ya[Mu("finalized")]=new Map,ym==null||ym({ReactiveElement:Ya}),(Zo.reactiveElementVersions??(Zo.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lu=globalThis,Sp=Lu.trustedTypes,T5=Sp?Sp.createPolicy("lit-html",{createHTML:t=>t}):void 0,vC="$lit$",xo=`lit$${(Math.random()+"").slice(9)}$`,bC="?"+xo,nD=`<${bC}>`,ya=document,Id=()=>ya.createComment(""),kd=t=>t===null||typeof t!="object"&&typeof t!="function",xC=Array.isArray,rD=t=>xC(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",vm=`[ 	
\f\r]`,uu=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P5=/-->/g,O5=/>/g,As=RegExp(`>|${vm}(?:([^\\s"'>=/]+)(${vm}*=${vm}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),I5=/'/g,k5=/"/g,CC=/^(?:script|style|textarea|title)$/i,iD=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),O=iD(1),hc=Symbol.for("lit-noChange"),$t=Symbol.for("lit-nothing"),N5=new WeakMap,Ds=ya.createTreeWalker(ya,129);function EC(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return T5!==void 0?T5.createHTML(e):e}const oD=(t,e)=>{const n=t.length-1,r=[];let o,i=e===2?"<svg>":"",s=uu;for(let a=0;a<n;a++){const l=t[a];let c,u,d=-1,h=0;for(;h<l.length&&(s.lastIndex=h,u=s.exec(l),u!==null);)h=s.lastIndex,s===uu?u[1]==="!--"?s=P5:u[1]!==void 0?s=O5:u[2]!==void 0?(CC.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=As):u[3]!==void 0&&(s=As):s===As?u[0]===">"?(s=o??uu,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?As:u[3]==='"'?k5:I5):s===k5||s===I5?s=As:s===P5||s===O5?s=uu:(s=As,o=void 0);const g=s===As&&t[a+1].startsWith("/>")?" ":"";i+=s===uu?l+nD:d>=0?(r.push(c),l.slice(0,d)+vC+l.slice(d)+xo+g):l+xo+(d===-2?a:g)}return[EC(t,i+(t[n]||"<?>")+(e===2?"</svg>":"")),r]};class Nd{constructor({strings:e,_$litType$:n},r){let o;this.parts=[];let i=0,s=0;const a=e.length-1,l=this.parts,[c,u]=oD(e,n);if(this.el=Nd.createElement(c,r),Ds.currentNode=this.el.content,n===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=Ds.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(vC)){const h=u[s++],g=o.getAttribute(d).split(xo),m=/([.?@])?(.*)/.exec(h);l.push({type:1,index:i,name:m[2],strings:g,ctor:m[1]==="."?aD:m[1]==="?"?lD:m[1]==="@"?cD:B0}),o.removeAttribute(d)}else d.startsWith(xo)&&(l.push({type:6,index:i}),o.removeAttribute(d));if(CC.test(o.tagName)){const d=o.textContent.split(xo),h=d.length-1;if(h>0){o.textContent=Sp?Sp.emptyScript:"";for(let g=0;g<h;g++)o.append(d[g],Id()),Ds.nextNode(),l.push({type:2,index:++i});o.append(d[h],Id())}}}else if(o.nodeType===8)if(o.data===bC)l.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(xo,d+1))!==-1;)l.push({type:7,index:i}),d+=xo.length-1}i++}}static createElement(e,n){const r=ya.createElement("template");return r.innerHTML=e,r}}function pc(t,e,n=t,r){var s,a;if(e===hc)return e;let o=r!==void 0?(s=n._$Co)==null?void 0:s[r]:n._$Cl;const i=kd(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),i===void 0?o=void 0:(o=new i(t),o._$AT(t,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=o:n._$Cl=o),o!==void 0&&(e=pc(t,o._$AS(t,e.values),o,r)),e}class sD{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:r}=this._$AD,o=((e==null?void 0:e.creationScope)??ya).importNode(n,!0);Ds.currentNode=o;let i=Ds.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new bf(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new uD(i,this,e)),this._$AV.push(c),l=r[++a]}s!==(l==null?void 0:l.index)&&(i=Ds.nextNode(),s++)}return Ds.currentNode=ya,o}p(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}}class bf{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,r,o){this.type=2,this._$AH=$t,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=pc(this,e,n),kd(e)?e===$t||e==null||e===""?(this._$AH!==$t&&this._$AR(),this._$AH=$t):e!==this._$AH&&e!==hc&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):rD(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==$t&&kd(this._$AH)?this._$AA.nextSibling.data=e:this.T(ya.createTextNode(e)),this._$AH=e}$(e){var i;const{values:n,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Nd.createElement(EC(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(n);else{const s=new sD(o,this),a=s.u(this.options);s.p(n),this.T(a),this._$AH=s}}_$AC(e){let n=N5.get(e.strings);return n===void 0&&N5.set(e.strings,n=new Nd(e)),n}k(e){xC(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of e)o===n.length?n.push(r=new bf(this.S(Id()),this.S(Id()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}}class B0{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,o,i){this.type=1,this._$AH=$t,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=$t}_$AI(e,n=this,r,o){const i=this.strings;let s=!1;if(i===void 0)e=pc(this,e,n,0),s=!kd(e)||e!==this._$AH&&e!==hc,s&&(this._$AH=e);else{const a=e;let l,c;for(e=i[0],l=0;l<i.length-1;l++)c=pc(this,a[r+l],n,l),c===hc&&(c=this._$AH[l]),s||(s=!kd(c)||c!==this._$AH[l]),c===$t?e=$t:e!==$t&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!o&&this.j(e)}j(e){e===$t?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class aD extends B0{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$t?void 0:e}}class lD extends B0{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==$t)}}class cD extends B0{constructor(e,n,r,o,i){super(e,n,r,o,i),this.type=5}_$AI(e,n=this){if((e=pc(this,e,n,0)??$t)===hc)return;const r=this._$AH,o=e===$t&&r!==$t||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==$t&&(r===$t||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}}class uD{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){pc(this,e)}}const bm=Lu.litHtmlPolyfillSupport;bm==null||bm(Nd,bf),(Lu.litHtmlVersions??(Lu.litHtmlVersions=[])).push("3.1.2");const dD=(t,e,n)=>{const r=(n==null?void 0:n.renderBefore)??e;let o=r._$litPart$;if(o===void 0){const i=(n==null?void 0:n.renderBefore)??null;r._$litPart$=o=new bf(e.insertBefore(Id(),i),i,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let we=class extends Ya{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=dD(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return hc}};var hb;we._$litElement$=!0,we.finalized=!0,(hb=globalThis.litElementHydrateSupport)==null||hb.call(globalThis,{LitElement:we});const xm=globalThis.litElementPolyfillSupport;xm==null||xm({LitElement:we});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fD={attribute:!0,type:String,converter:_p,reflect:!1,hasChanged:wv},hD=(t=fD,e,n)=>{const{kind:r,metadata:o}=n;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(n.name,t),r==="accessor"){const{name:s}=n;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,l,t)},init(a){return a!==void 0&&this.P(s,void 0,t),a}}}if(r==="setter"){const{name:s}=n;return function(a){const l=this[s];e.call(this,a),this.requestUpdate(s,l,t)}}throw Error("Unsupported decorator location: "+r)};function Je(t){return(e,n)=>typeof n=="object"?hD(t,e,n):((r,o,i)=>{const s=o.hasOwnProperty(i);return o.constructor.createProperty(i,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(o,i):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function V(t){return Je({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee=t=>t??$t;var vr=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Gn=class extends we{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=me.state.address,this.balanceVal=me.state.balance,this.balanceSymbol=me.state.balanceSymbol,this.profileName=me.state.profileName,this.profileImage=me.state.profileImage,this.network=Pe.state.caipNetwork,this.isUnsupportedChain=Pe.state.isUnsupportedChain,this.unsubscribe.push(me.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),Pe.subscribeKey("caipNetwork",e=>this.network=e),Pe.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=tt.getNetworkImage(this.network),n=this.balance==="show";return O`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${this.isUnsupportedChain}
        address=${Ee(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${Ee(e)}
        avatarSrc=${Ee(this.profileImage)}
        balance=${n?le.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){this.isUnsupportedChain?Me.open({view:"UnsupportedChain"}):Me.open()}};vr([Je({type:Boolean})],Gn.prototype,"disabled",void 0);vr([Je()],Gn.prototype,"balance",void 0);vr([Je()],Gn.prototype,"charsStart",void 0);vr([Je()],Gn.prototype,"charsEnd",void 0);vr([V()],Gn.prototype,"address",void 0);vr([V()],Gn.prototype,"balanceVal",void 0);vr([V()],Gn.prototype,"balanceSymbol",void 0);vr([V()],Gn.prototype,"profileName",void 0);vr([V()],Gn.prototype,"profileImage",void 0);vr([V()],Gn.prototype,"network",void 0);vr([V()],Gn.prototype,"isUnsupportedChain",void 0);Gn=vr([B("w3m-account-button")],Gn);const pD=Le`
  :host {
    display: block;
    width: max-content;
  }
`;var io=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Ur=class extends we{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=me.state.isConnected,this.unsubscribe.push(me.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?O`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${Ee(this.balance)}
            .charsStart=${Ee(this.charsStart)}
            .charsEnd=${Ee(this.charsEnd)}
          >
          </w3m-account-button>
        `:O`
          <w3m-connect-button
            size=${Ee(this.size)}
            label=${Ee(this.label)}
            loadingLabel=${Ee(this.loadingLabel)}
          ></w3m-connect-button>
        `}};Ur.styles=pD;io([Je({type:Boolean})],Ur.prototype,"disabled",void 0);io([Je()],Ur.prototype,"balance",void 0);io([Je()],Ur.prototype,"size",void 0);io([Je()],Ur.prototype,"label",void 0);io([Je()],Ur.prototype,"loadingLabel",void 0);io([Je()],Ur.prototype,"charsStart",void 0);io([Je()],Ur.prototype,"charsEnd",void 0);io([V()],Ur.prototype,"isAccount",void 0);Ur=io([B("w3m-button")],Ur);var Dc=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let va=class extends we{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=Me.state.open,this.loading=Me.state.loading,this.unsubscribe.push(Me.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.loading||this.open;return O`
      <wui-connect-button
        size=${Ee(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?Me.close():this.loading||Me.open()}};Dc([Je()],va.prototype,"size",void 0);Dc([Je()],va.prototype,"label",void 0);Dc([Je()],va.prototype,"loadingLabel",void 0);Dc([V()],va.prototype,"open",void 0);Dc([V()],va.prototype,"loading",void 0);va=Dc([B("w3m-connect-button")],va);const mD=Le`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var U0=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const M5="scroll-lock";let ba=class extends we{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=Me.state.open,this.caipAddress=me.state.caipAddress,this.isSiweEnabled=Ce.state.isSiweEnabled,this.initializeTheming(),Ae.prefetch(),this.unsubscribe.push(Me.subscribeKey("open",e=>e?this.onOpen():this.onClose()),me.subscribe(e=>this.onNewAccountState(e))),xe.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?O`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){if(this.isSiweEnabled){const{SIWEController:e}=await Pr(()=>import("./index-Cby94Co8.js"),__vite__mapDeps([]));e.state.status!=="success"&&await De.disconnect()}Me.close()}initializeTheming(){const{themeVariables:e,themeMode:n}=Mt.state,r=ze.getColorTheme(n);L8(e,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,Ve.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=M5,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${M5}"]`);e&&e.remove()}onAddKeyboardListener(){var n;this.abortController=new AbortController;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")this.handleClose();else if(r.key==="Tab"){const{tagName:o}=r.target;o&&!o.includes("W3M-")&&!o.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}async onNewAccountState(e){const{isConnected:n,caipAddress:r}=e;if(this.isSiweEnabled){const{SIWEController:o}=await Pr(()=>import("./index-Cby94Co8.js"),__vite__mapDeps([]));n&&!this.caipAddress&&(this.caipAddress=r),n&&r&&this.caipAddress!==r&&(await o.signOut(),this.onSiweNavigation(),this.caipAddress=r);try{const i=await o.getSession();i&&!n?await o.signOut():n&&!i&&this.onSiweNavigation()}catch{n&&this.onSiweNavigation()}}}onSiweNavigation(){this.open?J.push("ConnectingSiwe"):Me.open({view:"ConnectingSiwe"})}};ba.styles=mD;U0([V()],ba.prototype,"open",void 0);U0([V()],ba.prototype,"caipAddress",void 0);U0([V()],ba.prototype,"isSiweEnabled",void 0);ba=U0([B("w3m-modal")],ba);const gD=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return ba}},Symbol.toStringTag,{value:"Module"})),wD=Le`
  :host {
    display: block;
    width: max-content;
  }
`;var jc=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let es=class extends we{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=Pe.state.caipNetwork,this.connected=me.state.isConnected,this.loading=Me.state.loading,this.isUnsupportedChain=Pe.state.isUnsupportedChain,this.unsubscribe.push(Pe.subscribeKey("caipNetwork",e=>this.network=e),me.subscribeKey("isConnected",e=>this.connected=e),Me.subscribeKey("loading",e=>this.loading=e),Pe.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return O`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        imageSrc=${Ee(tt.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.isUnsupportedChain?"Switch Network":((e=this.network)==null?void 0:e.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){this.loading||(xe.sendEvent({type:"track",event:"CLICK_NETWORKS"}),Me.open({view:"Networks"}))}};es.styles=wD;jc([Je({type:Boolean})],es.prototype,"disabled",void 0);jc([V()],es.prototype,"network",void 0);jc([V()],es.prototype,"connected",void 0);jc([V()],es.prototype,"loading",void 0);jc([V()],es.prototype,"isUnsupportedChain",void 0);es=jc([B("w3m-network-button")],es);const yD=Le`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var _C=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Ap=class extends we{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=J.state.view,this.unsubscribe.push(J.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{const n=`${e==null?void 0:e.contentRect.height}px`;this.prevHeight!=="0px"&&(await this.animate([{height:this.prevHeight},{height:n}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=n}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var e;(e=this.resizeObserver)==null||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(n=>n())}render(){return O`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return O`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return O`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return O`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return O`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return O`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return O`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return O`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return O`<w3m-account-view></w3m-account-view>`;case"AccountSettings":return O`<w3m-account-settings-view></w3m-account-settings-view>`;case"WhatIsAWallet":return O`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return O`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return O`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return O`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return O`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return O`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return O`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return O`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return O`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpgradeToSmartAccount":return O`<w3m-upgrade-to-smart-account-view></w3m-upgrade-to-smart-account-view>`;case"UpdateEmailWallet":return O`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return O`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return O`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return O`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"OnRampProviders":return O`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return O`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return O`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return O`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"WhatIsABuy":return O`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"BuyInProgress":return O`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"WalletReceive":return O`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return O`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;default:return O`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(e){const{history:n}=J.state;let r=-10,o=10;n.length<this.prevHistoryLength&&(r=10,o=-10),this.prevHistoryLength=n.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${o}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}};Ap.styles=yD;_C([V()],Ap.prototype,"view",void 0);Ap=_C([B("w3m-router")],Ap);const vD=Le`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var ms=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const bD={USD:"$",EUR:"€",GBP:"£"},xD=[100,250,500,1e3];let gi=class extends we{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.connected=me.state.isConnected,this.loading=Me.state.loading,this.paymentCurrency=Ge.state.paymentCurrency,this.paymentAmount=Ge.state.paymentAmount,this.purchaseAmount=Ge.state.purchaseAmount,this.quoteLoading=Ge.state.quotesLoading,this.unsubscribe.push(me.subscribeKey("isConnected",e=>{this.connected=e}),Me.subscribeKey("loading",e=>{this.loading=e}),Ge.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return O`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-swap-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-swap-input>
          <w3m-swap-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-swap-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${xD.map(e=>{var n;return O`<wui-button
                  variant=${this.paymentAmount===e?"accentBg":"shade"}
                  size="xs"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${bD[((n=this.paymentCurrency)==null?void 0:n.id)||"USD"]} ${e}`}</wui-button
                >`})}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.connected?O`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="fill"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:O`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accentBg"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||Me.open({view:"OnRampProviders"})}openModal(){Me.open({view:"Connect"})}async onPaymentAmountChange(e){Ge.setPaymentAmount(Number(e.detail)),await Ge.getQuote()}async selectPresetAmount(e){Ge.setPaymentAmount(e),await Ge.getQuote()}};gi.styles=vD;ms([Je({type:Boolean})],gi.prototype,"disabled",void 0);ms([V()],gi.prototype,"connected",void 0);ms([V()],gi.prototype,"loading",void 0);ms([V()],gi.prototype,"paymentCurrency",void 0);ms([V()],gi.prototype,"paymentAmount",void 0);ms([V()],gi.prototype,"purchaseAmount",void 0);ms([V()],gi.prototype,"quoteLoading",void 0);gi=ms([B("w3m-onramp-widget")],gi);const CD=Le`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background 0.2s linear;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`;var Bc=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ts=class extends we{constructor(){super(),this.usubscribe=[],this.networkImages=zt.state.networkImages,this.address=me.state.address,this.profileImage=me.state.profileImage,this.profileName=me.state.profileName,this.network=Pe.state.caipNetwork,this.disconnecting=!1,this.usubscribe.push(me.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName):Me.close()}),Pe.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var n,r;if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[((n=this.network)==null?void 0:n.imageId)??""];return O`
      <wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${Ee(this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?ze.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):ze.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","xl","m","xl"]}>
          ${this.emailBtnTemplate()}
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${Ee(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${((r=this.network)==null?void 0:r.name)??"Unknown"}
            </wui-text>
          </wui-list-item>
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=Pe.state,n=e?e.length>1:!1,r=e==null?void 0:e.find(({id:o})=>{var i;return o===((i=this.network)==null?void 0:i.id)});return n||!r}onCopyAddress(){try{this.address&&(le.copyToClopboard(this.address),Ve.showSuccess("Address copied"))}catch{Ve.showError("Failed to copy")}}emailBtnTemplate(){const e=Qt.getConnectedConnector(),n=ot.getEmailConnector();if(!n||e!=="EMAIL")return null;const r=n.provider.getEmail()??"";return O`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(r)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(e){J.push("UpdateEmailWallet",{email:e})}onNetworks(){this.isAllowedNetworkSwitch()&&J.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await De.disconnect(),xe.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Me.close()}catch{xe.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Ve.showError("Failed to disconnect")}finally{this.disconnecting=!1}}};ts.styles=CD;Bc([V()],ts.prototype,"address",void 0);Bc([V()],ts.prototype,"profileImage",void 0);Bc([V()],ts.prototype,"profileName",void 0);Bc([V()],ts.prototype,"network",void 0);Bc([V()],ts.prototype,"disconnecting",void 0);ts=Bc([B("w3m-account-settings-view")],ts);var ED=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let L5=class extends we{render(){const e=Qt.getConnectedConnector();return O`
      ${Ce.state.enableWalletFeatures&&e==="EMAIL"?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return O`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return O`<w3m-account-default-widget></w3m-account-default-widget>`}};L5=ED([B("w3m-account-view")],L5);var SC=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ow=class extends we{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=le.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return O`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?O`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:O`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return le.isMobile()?O`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){J.push("ConnectingWalletConnect")}};SC([V()],ow.prototype,"search",void 0);ow=SC([B("w3m-all-wallets-view")],ow);const _D=Le`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`;var Zr=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Kn=class extends we{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=Ge.state.selectedProvider,this.uri=De.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(Ge.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e})),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){var r,o;let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${(r=this.selectedOnRampProvider)==null?void 0:r.label}`);const n=this.error?"Buy can be declined from your side or due to and error on the provider app":"We’ll notify you once your Buy is processed";return O`
      <wui-flex
        data-error=${Ee(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${Ee((o=this.selectedOnRampProvider)==null?void 0:o.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${n}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){if(this.selectedOnRampProvider)switch(this.selectedOnRampProvider.name){case"coinbase":this.startTime=Date.now(),this.initializeCoinbaseTransactions();break}}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval(()=>this.watchCoinbaseTransactions(),4e3)}async watchCoinbaseTransactions(){try{const e=me.state.address,n=Ce.state.projectId;if(!e)throw new Error("No address found");(await ra.fetchTransactions({account:e,onramp:"coinbase",projectId:n})).data.filter(i=>new Date(i.metadata.minedAt)>new Date(this.startTime)||i.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length?(clearInterval(this.intervalId),J.replace("OnRampActivity")):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){Ve.showError(e)}}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,le.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){var e;return(e=this.selectedOnRampProvider)!=null&&e.url?O`<wui-button variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){const e=Mt.state.themeVariables["--w3m-border-radius-master"],n=e?parseInt(e.replace("px",""),10):4;return O`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){var e;if(!((e=this.selectedOnRampProvider)!=null&&e.url)){Ve.showError("No link found"),J.goBack();return}try{le.copyToClopboard(this.selectedOnRampProvider.url),Ve.showSuccess("Link copied")}catch{Ve.showError("Failed to copy")}}};Kn.styles=_D;Zr([V()],Kn.prototype,"selectedOnRampProvider",void 0);Zr([V()],Kn.prototype,"uri",void 0);Zr([V()],Kn.prototype,"ready",void 0);Zr([V()],Kn.prototype,"showRetry",void 0);Zr([V()],Kn.prototype,"buffering",void 0);Zr([V()],Kn.prototype,"error",void 0);Zr([V()],Kn.prototype,"intervalId",void 0);Zr([V()],Kn.prototype,"startTime",void 0);Zr([Je({type:Boolean})],Kn.prototype,"isMobile",void 0);Zr([Je()],Kn.prototype,"onRetry",void 0);Kn=Zr([B("w3m-buy-in-progress-view")],Kn);const SD=Le`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var AC=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let $p=class extends we{constructor(){super(),this.unsubscribe=[],this.connectors=ot.state.connectors,this.unsubscribe.push(ot.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return O`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.externalTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(le.isMobile())return null;const e=this.connectors.find(n=>n.type==="WALLET_CONNECT");return e?O`
      <wui-list-wallet
        imageSrc=${Ee(tt.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=Ce.state;return e!=null&&e.length?this.filterOutDuplicateWallets(e).map(r=>O`
        <wui-list-wallet
          imageSrc=${Ee(tt.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
          data-testid=${`wallet-selector-${r.id}`}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){if(!this.connectors.find(o=>o.type==="WALLET_CONNECT"))return null;const{featured:n}=Ae.state;return n.length?this.filterOutDuplicateWallets(n).map(o=>O`
        <wui-list-wallet
          imageSrc=${Ee(tt.getWalletImage(o))}
          name=${o.name??"Unknown"}
          @click=${()=>this.onConnectWallet(o)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return Qt.getRecentWallets().map(n=>O`
        <wui-list-wallet
          imageSrc=${Ee(tt.getWalletImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnectWallet(n)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>e.type!=="ANNOUNCED"?null:O`
        <wui-list-wallet
          imageSrc=${Ee(tt.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagVariant="success"
          .installed=${!0}
        >
        </wui-list-wallet>
      `)}injectedTemplate(){return this.connectors.map(e=>e.type!=="INJECTED"||!De.checkInstalled()?null:O`
        <wui-list-wallet
          imageSrc=${Ee(tt.getConnectorImage(e))}
          .installed=${!0}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `)}externalTemplate(){const e=ot.getAnnouncedConnectorRdns();return this.connectors.map(n=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(n.type)||e.includes(Fn.CONNECTOR_RDNS_MAP[n.id])?null:O`
        <wui-list-wallet
          imageSrc=${Ee(tt.getConnectorImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnector(n)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){const e=this.connectors.find(l=>l.type==="WALLET_CONNECT"),{allWallets:n}=Ce.state;if(!e||n==="HIDE"||n==="ONLY_MOBILE"&&!le.isMobile())return null;const r=Ae.state.count,o=Ae.state.featured.length,i=r+o,s=i<10?i:Math.floor(i/10)*10,a=s<i?`${s}+`:`${s}`;return O`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${a}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){if(!this.connectors.find(h=>h.type==="WALLET_CONNECT"))return null;const{recommended:n}=Ae.state,{customWallets:r,featuredWalletIds:o}=Ce.state,{connectors:i}=ot.state,s=Qt.getRecentWallets(),l=i.filter(h=>h.type==="INJECTED").filter(h=>h.name!=="Browser Wallet");if(o||r||!n.length)return null;const c=l.length+s.length,u=Math.max(0,2-c);return this.filterOutDuplicateWallets(n).slice(0,u).map(h=>O`
        <wui-list-wallet
          imageSrc=${Ee(tt.getWalletImage(h))}
          name=${(h==null?void 0:h.name)??"Unknown"}
          @click=${()=>this.onConnectWallet(h)}
        >
        </wui-list-wallet>
      `)}onConnector(e){e.type==="WALLET_CONNECT"?le.isMobile()?J.push("AllWallets"):J.push("ConnectingWalletConnect"):J.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){const r=Qt.getRecentWallets().map(i=>i.id);return e.filter(i=>!r.includes(i.id))}onAllWallets(){xe.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),J.push("AllWallets")}onConnectWallet(e){J.push("ConnectingWalletConnect",{wallet:e})}};$p.styles=SD;AC([V()],$p.prototype,"connectors",void 0);$p=AC([B("w3m-connect-view")],$p);const AD=Le`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var Na=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};class Mn extends we{constructor(){var e,n,r,o;super(),this.wallet=(e=J.state.data)==null?void 0:e.wallet,this.connector=(n=J.state.data)==null?void 0:n.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=tt.getWalletImage(this.wallet)??tt.getConnectorImage(this.connector),this.name=((r=this.wallet)==null?void 0:r.name)??((o=this.connector)==null?void 0:o.name)??"Wallet",this.isRetrying=!1,this.uri=De.state.wcUri,this.error=De.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(De.subscribeKey("wcUri",i=>{var s;this.uri=i,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),De.subscribeKey("wcError",i=>this.error=i),De.subscribeKey("buffering",i=>this.buffering=i))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var r;(r=this.onRender)==null||r.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let n=`Continue in ${this.name}`;return this.buffering&&(n="Connecting..."),this.error&&(n="Connection declined"),O`
      <wui-flex
        data-error=${Ee(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${Ee(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?O`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const n=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");n==null||n.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,n;this.buffering||(De.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(n=this.onConnect)==null||n.call(this))}loaderTemplate(){const e=Mt.state.themeVariables["--w3m-border-radius-master"],n=e?parseInt(e.replace("px",""),10):4;return O`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(le.copyToClopboard(this.uri),Ve.showSuccess("Link copied"))}catch{Ve.showError("Failed to copy")}}}Mn.styles=AD;Na([V()],Mn.prototype,"uri",void 0);Na([V()],Mn.prototype,"error",void 0);Na([V()],Mn.prototype,"ready",void 0);Na([V()],Mn.prototype,"showRetry",void 0);Na([V()],Mn.prototype,"buffering",void 0);Na([Je({type:Boolean})],Mn.prototype,"isMobile",void 0);Na([Je()],Mn.prototype,"onRetry",void 0);var $D=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let D5=class extends Mn{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&Qt.setConnectedWalletImageUrl(this.connector.imageUrl),await De.connectExternal(this.connector),Ce.state.isSiweEnabled?J.push("ConnectingSiwe"):Me.close(),xe.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}}))}catch(e){xe.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};D5=$D([B("w3m-connecting-external-view")],D5);var yv=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Rp=class extends we{constructor(){var e;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(e=J.state.data)==null?void 0:e.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),Fn.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),O`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):O`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:n}=De.state;if(e||le.isPairingExpired(n)){if(De.connectWalletConnect(),this.wallet){const r=tt.getWalletImage(this.wallet);r&&Qt.setConnectedWalletImageUrl(r)}else{const o=ot.state.connectors.find(s=>s.type==="WALLET_CONNECT"),i=tt.getConnectorImage(o);i&&Qt.setConnectedWalletImageUrl(i)}await De.state.wcPromise,this.finalizeConnection(),Ce.state.isSiweEnabled?J.push("ConnectingSiwe"):Me.close()}}catch(n){xe.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(n==null?void 0:n.message)??"Unknown"}}),De.setWcError(!0),le.isAllowedRetry(this.lastRetry)&&(Ve.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){var r;const{wcLinking:e,recentWallet:n}=De.state;e&&Qt.setWalletConnectDeepLink(e),n&&Qt.setWeb3ModalRecent(n),xe.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode",name:((r=this.wallet)==null?void 0:r.name)||"Unknown"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:n,webapp_link:r,injected:o,rdns:i}=this.wallet,s=o==null?void 0:o.map(({injected_id:m})=>m).filter(Boolean),a=i?[i]:s??[],l=a.length,c=e,u=r,d=De.checkInstalled(a),h=l&&d,g=n&&!le.isMobile();h&&this.platforms.push("browser"),c&&this.platforms.push(le.isMobile()?"mobile":"qrcode"),u&&this.platforms.push("web"),g&&this.platforms.push("desktop"),!h&&l&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return O`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return O`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return O`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return O`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return O`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return O`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?O`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("div");n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};yv([V()],Rp.prototype,"platform",void 0);yv([V()],Rp.prototype,"platforms",void 0);Rp=yv([B("w3m-connecting-wc-view")],Rp);var RD=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let j5=class extends we{constructor(){var e;super(...arguments),this.wallet=(e=J.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return O`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?O`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?O`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?O`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?O`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&le.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&le.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&le.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&le.openHref(this.wallet.homepage,"_blank")}};j5=RD([B("w3m-downloads-view")],j5);var TD=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const PD="https://walletconnect.com/explorer";let B5=class extends we{render(){return O`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{le.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:n}=Ae.state,{customWallets:r}=Ce.state;return[...n,...r??[],...e].slice(0,4).map(i=>O`
        <wui-list-wallet
          name=${i.name??"Unknown"}
          tagVariant="main"
          imageSrc=${Ee(tt.getWalletImage(i))}
          @click=${()=>{le.openHref(i.homepage??PD,"_blank")}}
        ></wui-list-wallet>
      `)}};B5=TD([B("w3m-get-wallet-view")],B5);const OD=Le`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var vv=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Md=class extends we{constructor(){var e;super(),this.network=(e=J.state.data)==null?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.error?"Switch declined":"Approve in wallet",n=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return O`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${Ee(tt.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:O`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${n}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const n=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");n==null||n.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await Pe.switchActiveNetwork(this.network),Ce.state.isSiweEnabled||zy.navigateAfterNetworkSwitch())}catch{this.error=!0}}};Md.styles=OD;vv([V()],Md.prototype,"showRetry",void 0);vv([V()],Md.prototype,"error",void 0);Md=vv([B("w3m-network-switch-view")],Md);const ID=Le`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var $C=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Tp=class extends we{constructor(){super(),this.unsubscribe=[],this.caipNetwork=Pe.state.caipNetwork,this.unsubscribe.push(Pe.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return O`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){xe.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),J.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:n,supportsAllNetworks:r}=Pe.state,o=le.sortRequestedNetworks(e,n);return o==null?void 0:o.map(i=>{var s;return O`
        <wui-card-select
          .selected=${((s=this.caipNetwork)==null?void 0:s.id)===i.id}
          imageSrc=${Ee(tt.getNetworkImage(i))}
          type="network"
          name=${i.name??i.id}
          @click=${()=>this.onSwitchNetwork(i)}
          .disabled=${!r&&!(e!=null&&e.includes(i.id))}
          data-testid=${`w3m-network-switch-${i.name??i.id}`}
        ></wui-card-select>
      `})}async onSwitchNetwork(e){const{isConnected:n}=me.state,{approvedCaipNetworkIds:r,supportsAllNetworks:o,caipNetwork:i}=Pe.state,{data:s}=J.state;n&&(i==null?void 0:i.id)!==e.id?r!=null&&r.includes(e.id)?(await Pe.switchActiveNetwork(e),zy.navigateAfterNetworkSwitch()):o&&J.push("SwitchNetwork",{...s,network:e}):n||(Pe.setCaipNetwork(e),J.push("Connect"))}};Tp.styles=ID;$C([V()],Tp.prototype,"caipNetwork",void 0);Tp=$C([B("w3m-networks-view")],Tp);const kD=Le`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;var xf=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const ND=7;let xa=class extends we{constructor(){super(),this.unsubscribe=[],this.refetchTimeout=void 0,this.selectedOnRampProvider=Ge.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=An.state.coinbaseTransactions,this.tokenImages=zt.state.tokenImages,this.unsubscribe.push(Ge.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e}),zt.subscribeKey("tokenImages",e=>this.tokenImages=e),()=>{clearTimeout(this.refetchTimeout)},An.subscribe(e=>{this.coinbaseTransactions={...e.coinbaseTransactions}})),this.fetchTransactions()}render(){return O`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e==null?void 0:e.map(n=>{var a,l,c;const r=pv.formatDate((a=n==null?void 0:n.metadata)==null?void 0:a.minedAt),o=n.transfers[0],i=o==null?void 0:o.fungible_info;if(!i)return null;const s=((l=i==null?void 0:i.icon)==null?void 0:l.url)||((c=this.tokenImages)==null?void 0:c[i.symbol||""]);return O`
        <wui-onramp-activity-item
          label="Bought"
          .completed=${n.metadata.status==="ONRAMP_TRANSACTION_STATUS_SUCCESS"}
          .inProgress=${n.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"}
          .failed=${n.metadata.status==="ONRAMP_TRANSACTION_STATUS_FAILED"}
          purchaseCurrency=${Ee(i.symbol)}
          purchaseValue=${o.quantity.numeric}
          date=${r}
          icon=${Ee(s)}
          symbol=${Ee(i.symbol)}
        ></wui-onramp-activity-item>
      `})}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map(n=>{const r=parseInt(n,10);return new Array(12).fill(null).map((i,s)=>s).reverse().map(i=>{var l;const s=Io.getTransactionGroupTitle(r,i),a=(l=this.coinbaseTransactions[r])==null?void 0:l[i];return a?O`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${s}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(a)}
            </wui-flex>
          </wui-flex>
        `:null})})}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){const e=me.state.address,n=Ce.state.projectId;if(!e)throw new Error("No address found");if(!n)throw new Error("No projectId found");this.loading=!0,await An.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){var o;const e=new Date;if((((o=this.coinbaseTransactions[e.getFullYear()])==null?void 0:o[e.getMonth()])||[]).filter(i=>i.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length===0){clearTimeout(this.refetchTimeout);return}this.refetchTimeout=setTimeout(async()=>{const i=me.state.address;await An.fetchTransactions(i,"coinbase"),this.refetchLoadingTransactions()},3e3)}templateLoading(){return Array(ND).fill(O` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}};xa.styles=kD;xf([V()],xa.prototype,"selectedOnRampProvider",void 0);xf([V()],xa.prototype,"loading",void 0);xf([V()],xa.prototype,"coinbaseTransactions",void 0);xf([V()],xa.prototype,"tokenImages",void 0);xa=xf([B("w3m-onramp-activity-view")],xa);const MD=Le`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var F0=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let mc=class extends we{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=Ge.state.paymentCurrency,this.currencies=Ge.state.paymentCurrencies,this.currencyImages=zt.state.currencyImages,this.unsubscribe.push(Ge.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),zt.subscribeKey("currencyImages",e=>this.currencyImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return O`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.currencies.map(e=>{var n;return O`
        <wui-list-item
          imageSrc=${Ee((n=this.currencyImages)==null?void 0:n[e.id])}
          @click=${()=>this.selectCurrency(e)}
          variant="image"
        >
          <wui-text variant="paragraph-500" color="fg-100">${e.id}</wui-text>
        </wui-list-item>
      `})}selectCurrency(e){e&&(Ge.setPaymentCurrency(e),Me.close())}};mc.styles=MD;F0([V()],mc.prototype,"selectedCurrency",void 0);F0([V()],mc.prototype,"currencies",void 0);F0([V()],mc.prototype,"currencyImages",void 0);mc=F0([B("w3m-onramp-fiat-select-view")],mc);var RC=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let sw=class extends we{constructor(){super(),this.unsubscribe=[],this.providers=Ge.state.providers,this.unsubscribe.push(Ge.subscribeKey("providers",e=>{this.providers=e}))}firstUpdated(){const e=this.providers.map(async n=>n.name==="coinbase"?await this.getCoinbaseOnRampURL():Promise.resolve(n==null?void 0:n.url));Promise.all(e).then(n=>{this.providers=this.providers.map((r,o)=>({...r,url:n[o]||""}))})}render(){return O`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.map(e=>O`
        <wui-onramp-provider-item
          label=${e.label}
          name=${e.name}
          feeRange=${e.feeRange}
          @click=${()=>{this.onClickProvider(e)}}
          ?disabled=${!e.url}
        ></wui-onramp-provider-item>
      `)}onClickProvider(e){Ge.setSelectedProvider(e),J.push("BuyInProgress"),le.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes")}async getCoinbaseOnRampURL(){const e=me.state.address,n=Pe.state.caipNetwork;if(!e)throw new Error("No address found");if(!(n!=null&&n.name))throw new Error("No network found");const r=Fn.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[n.name]??Fn.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,o=Ge.state.purchaseCurrency,i=o?[o.symbol]:Ge.state.purchaseCurrencies.map(s=>s.symbol);return await ra.generateOnRampURL({defaultNetwork:r,destinationWallets:[{address:e,blockchains:Fn.WC_COINBASE_PAY_SDK_CHAINS,assets:i}],partnerUserId:e,purchaseAmount:Ge.state.purchaseAmount})}};RC([V()],sw.prototype,"providers",void 0);sw=RC([B("w3m-onramp-providers-view")],sw);const LD=Le`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var W0=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let gc=class extends we{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=Ge.state.purchaseCurrencies,this.tokens=Ge.state.purchaseCurrencies,this.tokenImages=zt.state.tokenImages,this.unsubscribe.push(Ge.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),zt.subscribeKey("tokenImages",e=>this.tokenImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return O`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.tokens.map(e=>{var n;return O`
        <wui-list-item
          imageSrc=${Ee((n=this.tokenImages)==null?void 0:n[e.symbol])}
          @click=${()=>this.selectToken(e)}
          variant="image"
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${e.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${e.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `})}selectToken(e){e&&(Ge.setPurchaseCurrency(e),Me.close())}};gc.styles=LD;W0([V()],gc.prototype,"selectedCurrency",void 0);W0([V()],gc.prototype,"tokens",void 0);W0([V()],gc.prototype,"tokenImages",void 0);gc=W0([B("w3m-onramp-token-select-view")],gc);const DD=Le`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var jD=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let aw=class extends we{render(){return O`
      <wui-flex flexDirection="column" gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};aw.styles=DD;aw=jD([B("w3m-transactions-view")],aw);var BD=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const UD=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let U5=class extends we{render(){return O`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${UD}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{le.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};U5=BD([B("w3m-what-is-a-network-view")],U5);var FD=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const WD=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let F5=class extends we{render(){return O`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${WD}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){xe.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),J.push("GetWallet")}};F5=FD([B("w3m-what-is-a-wallet-view")],F5);var zD=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let W5=class extends we{render(){return O`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${J.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};W5=zD([B("w3m-what-is-a-buy-view")],W5);const HD=Le`
  wui-loading-spinner {
    margin: 9px auto;
  }
`,te={SECURE_SITE_SDK:"https://secure.walletconnect.com/sdk",APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",PREFERRED_ACCOUNT_TYPE:"PREFERRED_ACCOUNT_TYPE",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:"@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",APP_INIT_SMART_ACCOUNT:"@w3m-app/INIT_SMART_ACCOUNT",APP_SET_PREFERRED_ACCOUNT:"@w3m-app/SET_PREFERRED_ACCOUNT",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",FRAME_INIT_SMART_ACCOUNT_SUCCESS:"@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",FRAME_INIT_SMART_ACCOUNT_ERROR:"@w3m-frame/INIT_SMART_ACCOUNT_ERROR",FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:"@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",FRAME_SET_PREFERRED_ACCOUNT_ERROR:"@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR"},xl={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed"};var Ze;(function(t){t.assertEqual=o=>o;function e(o){}t.assertIs=e;function n(o){throw new Error}t.assertNever=n,t.arrayToEnum=o=>{const i={};for(const s of o)i[s]=s;return i},t.getValidEnumValues=o=>{const i=t.objectKeys(o).filter(a=>typeof o[o[a]]!="number"),s={};for(const a of i)s[a]=o[a];return t.objectValues(s)},t.objectValues=o=>t.objectKeys(o).map(function(i){return o[i]}),t.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const i=[];for(const s in o)Object.prototype.hasOwnProperty.call(o,s)&&i.push(s);return i},t.find=(o,i)=>{for(const s of o)if(i(s))return s},t.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function r(o,i=" | "){return o.map(s=>typeof s=="string"?`'${s}'`:s).join(i)}t.joinValues=r,t.jsonStringifyReplacer=(o,i)=>typeof i=="bigint"?i.toString():i})(Ze||(Ze={}));var lw;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(lw||(lw={}));const ie=Ze.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Co=t=>{switch(typeof t){case"undefined":return ie.undefined;case"string":return ie.string;case"number":return isNaN(t)?ie.nan:ie.number;case"boolean":return ie.boolean;case"function":return ie.function;case"bigint":return ie.bigint;case"symbol":return ie.symbol;case"object":return Array.isArray(t)?ie.array:t===null?ie.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?ie.promise:typeof Map<"u"&&t instanceof Map?ie.map:typeof Set<"u"&&t instanceof Set?ie.set:typeof Date<"u"&&t instanceof Date?ie.date:ie.object;default:return ie.unknown}},ee=Ze.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),VD=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class kr extends Error{constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(i){return i.message},r={_errors:[]},o=i=>{for(const s of i.issues)if(s.code==="invalid_union")s.unionErrors.map(o);else if(s.code==="invalid_return_type")o(s.returnTypeError);else if(s.code==="invalid_arguments")o(s.argumentsError);else if(s.path.length===0)r._errors.push(n(s));else{let a=r,l=0;for(;l<s.path.length;){const c=s.path[l];l===s.path.length-1?(a[c]=a[c]||{_errors:[]},a[c]._errors.push(n(s))):a[c]=a[c]||{_errors:[]},a=a[c],l++}}};return o(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,Ze.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},r=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(e(o))):r.push(e(o));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}}kr.create=t=>new kr(t);const Ld=(t,e)=>{let n;switch(t.code){case ee.invalid_type:t.received===ie.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case ee.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,Ze.jsonStringifyReplacer)}`;break;case ee.unrecognized_keys:n=`Unrecognized key(s) in object: ${Ze.joinValues(t.keys,", ")}`;break;case ee.invalid_union:n="Invalid input";break;case ee.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Ze.joinValues(t.options)}`;break;case ee.invalid_enum_value:n=`Invalid enum value. Expected ${Ze.joinValues(t.options)}, received '${t.received}'`;break;case ee.invalid_arguments:n="Invalid function arguments";break;case ee.invalid_return_type:n="Invalid function return type";break;case ee.invalid_date:n="Invalid date";break;case ee.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:Ze.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case ee.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case ee.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case ee.custom:n="Invalid input";break;case ee.invalid_intersection_types:n="Intersection results could not be merged";break;case ee.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case ee.not_finite:n="Number must be finite";break;default:n=e.defaultError,Ze.assertNever(t)}return{message:n}};let TC=Ld;function ZD(t){TC=t}function Pp(){return TC}const Op=t=>{const{data:e,path:n,errorMaps:r,issueData:o}=t,i=[...n,...o.path||[]],s={...o,path:i};let a="";const l=r.filter(c=>!!c).slice().reverse();for(const c of l)a=c(s,{data:e,defaultError:a}).message;return{...o,path:i,message:o.message||a}},qD=[];function ae(t,e){const n=Op({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Pp(),Ld].filter(r=>!!r)});t.common.issues.push(n)}class dn{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const r=[];for(const o of n){if(o.status==="aborted")return Re;o.status==="dirty"&&e.dirty(),r.push(o.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,n){const r=[];for(const o of n)r.push({key:await o.key,value:await o.value});return dn.mergeObjectSync(e,r)}static mergeObjectSync(e,n){const r={};for(const o of n){const{key:i,value:s}=o;if(i.status==="aborted"||s.status==="aborted")return Re;i.status==="dirty"&&e.dirty(),s.status==="dirty"&&e.dirty(),i.value!=="__proto__"&&(typeof s.value<"u"||o.alwaysSet)&&(r[i.value]=s.value)}return{status:e.value,value:r}}}const Re=Object.freeze({status:"aborted"}),PC=t=>({status:"dirty",value:t}),vn=t=>({status:"valid",value:t}),cw=t=>t.status==="aborted",uw=t=>t.status==="dirty",Dd=t=>t.status==="valid",Ip=t=>typeof Promise<"u"&&t instanceof Promise;var ve;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(ve||(ve={}));class wi{constructor(e,n,r,o){this._cachedPath=[],this.parent=e,this.data=n,this._path=r,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const z5=(t,e)=>{if(Dd(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new kr(t.common.issues);return this._error=n,this._error}}};function Oe(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:r,description:o}=t;if(e&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:o}:{errorMap:(s,a)=>s.code!=="invalid_type"?{message:a.defaultError}:typeof a.data>"u"?{message:r??a.defaultError}:{message:n??a.defaultError},description:o}}class Ne{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Co(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:Co(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new dn,ctx:{common:e.parent.common,data:e.data,parsedType:Co(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(Ip(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const r=this.safeParse(e,n);if(r.success)return r.data;throw r.error}safeParse(e,n){var r;const o={common:{issues:[],async:(r=n==null?void 0:n.async)!==null&&r!==void 0?r:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Co(e)},i=this._parseSync({data:e,path:o.path,parent:o});return z5(o,i)}async parseAsync(e,n){const r=await this.safeParseAsync(e,n);if(r.success)return r.data;throw r.error}async safeParseAsync(e,n){const r={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Co(e)},o=this._parse({data:e,path:r.path,parent:r}),i=await(Ip(o)?o:Promise.resolve(o));return z5(r,i)}refine(e,n){const r=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,i)=>{const s=e(o),a=()=>i.addIssue({code:ee.custom,...r(o)});return typeof Promise<"u"&&s instanceof Promise?s.then(l=>l?!0:(a(),!1)):s?!0:(a(),!1)})}refinement(e,n){return this._refinement((r,o)=>e(r)?!0:(o.addIssue(typeof n=="function"?n(r,o):n),!1))}_refinement(e){return new Fr({schema:this,typeName:_e.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return Fi.create(this,this._def)}nullable(){return _a.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Nr.create(this,this._def)}promise(){return yc.create(this,this._def)}or(e){return Fd.create([this,e],this._def)}and(e){return Wd.create(this,e,this._def)}transform(e){return new Fr({...Oe(this._def),schema:this,typeName:_e.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new qd({...Oe(this._def),innerType:this,defaultValue:n,typeName:_e.ZodDefault})}brand(){return new IC({typeName:_e.ZodBranded,type:this,...Oe(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new Lp({...Oe(this._def),innerType:this,catchValue:n,typeName:_e.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return Cf.create(this,e)}readonly(){return jp.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const GD=/^c[^\s-]{8,}$/i,KD=/^[a-z][a-z0-9]*$/,YD=/^[0-9A-HJKMNP-TV-Z]{26}$/,QD=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,JD=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,XD="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Cm;const ej=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,tj=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,nj=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function rj(t,e){return!!((e==="v4"||!e)&&ej.test(t)||(e==="v6"||!e)&&tj.test(t))}class Tr extends Ne{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==ie.string){const i=this._getOrReturnCtx(e);return ae(i,{code:ee.invalid_type,expected:ie.string,received:i.parsedType}),Re}const r=new dn;let o;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(o=this._getOrReturnCtx(e,o),ae(o,{code:ee.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="max")e.data.length>i.value&&(o=this._getOrReturnCtx(e,o),ae(o,{code:ee.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="length"){const s=e.data.length>i.value,a=e.data.length<i.value;(s||a)&&(o=this._getOrReturnCtx(e,o),s?ae(o,{code:ee.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):a&&ae(o,{code:ee.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),r.dirty())}else if(i.kind==="email")JD.test(e.data)||(o=this._getOrReturnCtx(e,o),ae(o,{validation:"email",code:ee.invalid_string,message:i.message}),r.dirty());else if(i.kind==="emoji")Cm||(Cm=new RegExp(XD,"u")),Cm.test(e.data)||(o=this._getOrReturnCtx(e,o),ae(o,{validation:"emoji",code:ee.invalid_string,message:i.message}),r.dirty());else if(i.kind==="uuid")QD.test(e.data)||(o=this._getOrReturnCtx(e,o),ae(o,{validation:"uuid",code:ee.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid")GD.test(e.data)||(o=this._getOrReturnCtx(e,o),ae(o,{validation:"cuid",code:ee.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid2")KD.test(e.data)||(o=this._getOrReturnCtx(e,o),ae(o,{validation:"cuid2",code:ee.invalid_string,message:i.message}),r.dirty());else if(i.kind==="ulid")YD.test(e.data)||(o=this._getOrReturnCtx(e,o),ae(o,{validation:"ulid",code:ee.invalid_string,message:i.message}),r.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{o=this._getOrReturnCtx(e,o),ae(o,{validation:"url",code:ee.invalid_string,message:i.message}),r.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(o=this._getOrReturnCtx(e,o),ae(o,{validation:"regex",code:ee.invalid_string,message:i.message}),r.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(o=this._getOrReturnCtx(e,o),ae(o,{code:ee.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),r.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(o=this._getOrReturnCtx(e,o),ae(o,{code:ee.invalid_string,validation:{startsWith:i.value},message:i.message}),r.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(o=this._getOrReturnCtx(e,o),ae(o,{code:ee.invalid_string,validation:{endsWith:i.value},message:i.message}),r.dirty()):i.kind==="datetime"?nj(i).test(e.data)||(o=this._getOrReturnCtx(e,o),ae(o,{code:ee.invalid_string,validation:"datetime",message:i.message}),r.dirty()):i.kind==="ip"?rj(e.data,i.version)||(o=this._getOrReturnCtx(e,o),ae(o,{validation:"ip",code:ee.invalid_string,message:i.message}),r.dirty()):Ze.assertNever(i);return{status:r.value,value:e.data}}_regex(e,n,r){return this.refinement(o=>e.test(o),{validation:n,code:ee.invalid_string,...ve.errToObj(r)})}_addCheck(e){return new Tr({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...ve.errToObj(e)})}url(e){return this._addCheck({kind:"url",...ve.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...ve.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...ve.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...ve.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...ve.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...ve.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...ve.errToObj(e)})}datetime(e){var n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(n=e==null?void 0:e.offset)!==null&&n!==void 0?n:!1,...ve.errToObj(e==null?void 0:e.message)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...ve.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n==null?void 0:n.position,...ve.errToObj(n==null?void 0:n.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...ve.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...ve.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...ve.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...ve.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...ve.errToObj(n)})}nonempty(e){return this.min(1,ve.errToObj(e))}trim(){return new Tr({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Tr({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Tr({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Tr.create=t=>{var e;return new Tr({checks:[],typeName:_e.ZodString,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...Oe(t)})};function ij(t,e){const n=(t.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,o=n>r?n:r,i=parseInt(t.toFixed(o).replace(".","")),s=parseInt(e.toFixed(o).replace(".",""));return i%s/Math.pow(10,o)}class ns extends Ne{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==ie.number){const i=this._getOrReturnCtx(e);return ae(i,{code:ee.invalid_type,expected:ie.number,received:i.parsedType}),Re}let r;const o=new dn;for(const i of this._def.checks)i.kind==="int"?Ze.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),ae(r,{code:ee.invalid_type,expected:"integer",received:"float",message:i.message}),o.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),ae(r,{code:ee.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),o.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),ae(r,{code:ee.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),o.dirty()):i.kind==="multipleOf"?ij(e.data,i.value)!==0&&(r=this._getOrReturnCtx(e,r),ae(r,{code:ee.not_multiple_of,multipleOf:i.value,message:i.message}),o.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),ae(r,{code:ee.not_finite,message:i.message}),o.dirty()):Ze.assertNever(i);return{status:o.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,ve.toString(n))}gt(e,n){return this.setLimit("min",e,!1,ve.toString(n))}lte(e,n){return this.setLimit("max",e,!0,ve.toString(n))}lt(e,n){return this.setLimit("max",e,!1,ve.toString(n))}setLimit(e,n,r,o){return new ns({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:ve.toString(o)}]})}_addCheck(e){return new ns({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:ve.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:ve.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:ve.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:ve.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:ve.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:ve.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:ve.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:ve.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:ve.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Ze.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(n)&&Number.isFinite(e)}}ns.create=t=>new ns({checks:[],typeName:_e.ZodNumber,coerce:(t==null?void 0:t.coerce)||!1,...Oe(t)});class rs extends Ne{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==ie.bigint){const i=this._getOrReturnCtx(e);return ae(i,{code:ee.invalid_type,expected:ie.bigint,received:i.parsedType}),Re}let r;const o=new dn;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),ae(r,{code:ee.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),o.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),ae(r,{code:ee.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),o.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),ae(r,{code:ee.not_multiple_of,multipleOf:i.value,message:i.message}),o.dirty()):Ze.assertNever(i);return{status:o.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,ve.toString(n))}gt(e,n){return this.setLimit("min",e,!1,ve.toString(n))}lte(e,n){return this.setLimit("max",e,!0,ve.toString(n))}lt(e,n){return this.setLimit("max",e,!1,ve.toString(n))}setLimit(e,n,r,o){return new rs({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:ve.toString(o)}]})}_addCheck(e){return new rs({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:ve.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:ve.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:ve.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:ve.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:ve.toString(n)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}rs.create=t=>{var e;return new rs({checks:[],typeName:_e.ZodBigInt,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...Oe(t)})};class jd extends Ne{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==ie.boolean){const r=this._getOrReturnCtx(e);return ae(r,{code:ee.invalid_type,expected:ie.boolean,received:r.parsedType}),Re}return vn(e.data)}}jd.create=t=>new jd({typeName:_e.ZodBoolean,coerce:(t==null?void 0:t.coerce)||!1,...Oe(t)});class Ca extends Ne{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==ie.date){const i=this._getOrReturnCtx(e);return ae(i,{code:ee.invalid_type,expected:ie.date,received:i.parsedType}),Re}if(isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return ae(i,{code:ee.invalid_date}),Re}const r=new dn;let o;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(o=this._getOrReturnCtx(e,o),ae(o,{code:ee.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(o=this._getOrReturnCtx(e,o),ae(o,{code:ee.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):Ze.assertNever(i);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Ca({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:ve.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:ve.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}Ca.create=t=>new Ca({checks:[],coerce:(t==null?void 0:t.coerce)||!1,typeName:_e.ZodDate,...Oe(t)});class kp extends Ne{_parse(e){if(this._getType(e)!==ie.symbol){const r=this._getOrReturnCtx(e);return ae(r,{code:ee.invalid_type,expected:ie.symbol,received:r.parsedType}),Re}return vn(e.data)}}kp.create=t=>new kp({typeName:_e.ZodSymbol,...Oe(t)});class Bd extends Ne{_parse(e){if(this._getType(e)!==ie.undefined){const r=this._getOrReturnCtx(e);return ae(r,{code:ee.invalid_type,expected:ie.undefined,received:r.parsedType}),Re}return vn(e.data)}}Bd.create=t=>new Bd({typeName:_e.ZodUndefined,...Oe(t)});class Ud extends Ne{_parse(e){if(this._getType(e)!==ie.null){const r=this._getOrReturnCtx(e);return ae(r,{code:ee.invalid_type,expected:ie.null,received:r.parsedType}),Re}return vn(e.data)}}Ud.create=t=>new Ud({typeName:_e.ZodNull,...Oe(t)});class wc extends Ne{constructor(){super(...arguments),this._any=!0}_parse(e){return vn(e.data)}}wc.create=t=>new wc({typeName:_e.ZodAny,...Oe(t)});class Ks extends Ne{constructor(){super(...arguments),this._unknown=!0}_parse(e){return vn(e.data)}}Ks.create=t=>new Ks({typeName:_e.ZodUnknown,...Oe(t)});class Yi extends Ne{_parse(e){const n=this._getOrReturnCtx(e);return ae(n,{code:ee.invalid_type,expected:ie.never,received:n.parsedType}),Re}}Yi.create=t=>new Yi({typeName:_e.ZodNever,...Oe(t)});class Np extends Ne{_parse(e){if(this._getType(e)!==ie.undefined){const r=this._getOrReturnCtx(e);return ae(r,{code:ee.invalid_type,expected:ie.void,received:r.parsedType}),Re}return vn(e.data)}}Np.create=t=>new Np({typeName:_e.ZodVoid,...Oe(t)});class Nr extends Ne{_parse(e){const{ctx:n,status:r}=this._processInputParams(e),o=this._def;if(n.parsedType!==ie.array)return ae(n,{code:ee.invalid_type,expected:ie.array,received:n.parsedType}),Re;if(o.exactLength!==null){const s=n.data.length>o.exactLength.value,a=n.data.length<o.exactLength.value;(s||a)&&(ae(n,{code:s?ee.too_big:ee.too_small,minimum:a?o.exactLength.value:void 0,maximum:s?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),r.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(ae(n,{code:ee.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),r.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(ae(n,{code:ee.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((s,a)=>o.type._parseAsync(new wi(n,s,n.path,a)))).then(s=>dn.mergeArray(r,s));const i=[...n.data].map((s,a)=>o.type._parseSync(new wi(n,s,n.path,a)));return dn.mergeArray(r,i)}get element(){return this._def.type}min(e,n){return new Nr({...this._def,minLength:{value:e,message:ve.toString(n)}})}max(e,n){return new Nr({...this._def,maxLength:{value:e,message:ve.toString(n)}})}length(e,n){return new Nr({...this._def,exactLength:{value:e,message:ve.toString(n)}})}nonempty(e){return this.min(1,e)}}Nr.create=(t,e)=>new Nr({type:t,minLength:null,maxLength:null,exactLength:null,typeName:_e.ZodArray,...Oe(e)});function Qa(t){if(t instanceof mt){const e={};for(const n in t.shape){const r=t.shape[n];e[n]=Fi.create(Qa(r))}return new mt({...t._def,shape:()=>e})}else return t instanceof Nr?new Nr({...t._def,type:Qa(t.element)}):t instanceof Fi?Fi.create(Qa(t.unwrap())):t instanceof _a?_a.create(Qa(t.unwrap())):t instanceof yi?yi.create(t.items.map(e=>Qa(e))):t}class mt extends Ne{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=Ze.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==ie.object){const c=this._getOrReturnCtx(e);return ae(c,{code:ee.invalid_type,expected:ie.object,received:c.parsedType}),Re}const{status:r,ctx:o}=this._processInputParams(e),{shape:i,keys:s}=this._getCached(),a=[];if(!(this._def.catchall instanceof Yi&&this._def.unknownKeys==="strip"))for(const c in o.data)s.includes(c)||a.push(c);const l=[];for(const c of s){const u=i[c],d=o.data[c];l.push({key:{status:"valid",value:c},value:u._parse(new wi(o,d,o.path,c)),alwaysSet:c in o.data})}if(this._def.catchall instanceof Yi){const c=this._def.unknownKeys;if(c==="passthrough")for(const u of a)l.push({key:{status:"valid",value:u},value:{status:"valid",value:o.data[u]}});else if(c==="strict")a.length>0&&(ae(o,{code:ee.unrecognized_keys,keys:a}),r.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const c=this._def.catchall;for(const u of a){const d=o.data[u];l.push({key:{status:"valid",value:u},value:c._parse(new wi(o,d,o.path,u)),alwaysSet:u in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const c=[];for(const u of l){const d=await u.key;c.push({key:d,value:await u.value,alwaysSet:u.alwaysSet})}return c}).then(c=>dn.mergeObjectSync(r,c)):dn.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(e){return ve.errToObj,new mt({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,r)=>{var o,i,s,a;const l=(s=(i=(o=this._def).errorMap)===null||i===void 0?void 0:i.call(o,n,r).message)!==null&&s!==void 0?s:r.defaultError;return n.code==="unrecognized_keys"?{message:(a=ve.errToObj(e).message)!==null&&a!==void 0?a:l}:{message:l}}}:{}})}strip(){return new mt({...this._def,unknownKeys:"strip"})}passthrough(){return new mt({...this._def,unknownKeys:"passthrough"})}extend(e){return new mt({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new mt({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:_e.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new mt({...this._def,catchall:e})}pick(e){const n={};return Ze.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new mt({...this._def,shape:()=>n})}omit(e){const n={};return Ze.objectKeys(this.shape).forEach(r=>{e[r]||(n[r]=this.shape[r])}),new mt({...this._def,shape:()=>n})}deepPartial(){return Qa(this)}partial(e){const n={};return Ze.objectKeys(this.shape).forEach(r=>{const o=this.shape[r];e&&!e[r]?n[r]=o:n[r]=o.optional()}),new mt({...this._def,shape:()=>n})}required(e){const n={};return Ze.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])n[r]=this.shape[r];else{let i=this.shape[r];for(;i instanceof Fi;)i=i._def.innerType;n[r]=i}}),new mt({...this._def,shape:()=>n})}keyof(){return OC(Ze.objectKeys(this.shape))}}mt.create=(t,e)=>new mt({shape:()=>t,unknownKeys:"strip",catchall:Yi.create(),typeName:_e.ZodObject,...Oe(e)});mt.strictCreate=(t,e)=>new mt({shape:()=>t,unknownKeys:"strict",catchall:Yi.create(),typeName:_e.ZodObject,...Oe(e)});mt.lazycreate=(t,e)=>new mt({shape:t,unknownKeys:"strip",catchall:Yi.create(),typeName:_e.ZodObject,...Oe(e)});class Fd extends Ne{_parse(e){const{ctx:n}=this._processInputParams(e),r=this._def.options;function o(i){for(const a of i)if(a.result.status==="valid")return a.result;for(const a of i)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;const s=i.map(a=>new kr(a.ctx.common.issues));return ae(n,{code:ee.invalid_union,unionErrors:s}),Re}if(n.common.async)return Promise.all(r.map(async i=>{const s={...n,common:{...n.common,issues:[]},parent:null};return{result:await i._parseAsync({data:n.data,path:n.path,parent:s}),ctx:s}})).then(o);{let i;const s=[];for(const l of r){const c={...n,common:{...n.common,issues:[]},parent:null},u=l._parseSync({data:n.data,path:n.path,parent:c});if(u.status==="valid")return u;u.status==="dirty"&&!i&&(i={result:u,ctx:c}),c.common.issues.length&&s.push(c.common.issues)}if(i)return n.common.issues.push(...i.ctx.common.issues),i.result;const a=s.map(l=>new kr(l));return ae(n,{code:ee.invalid_union,unionErrors:a}),Re}}get options(){return this._def.options}}Fd.create=(t,e)=>new Fd({options:t,typeName:_e.ZodUnion,...Oe(e)});const Oh=t=>t instanceof Hd?Oh(t.schema):t instanceof Fr?Oh(t.innerType()):t instanceof Vd?[t.value]:t instanceof is?t.options:t instanceof Zd?Object.keys(t.enum):t instanceof qd?Oh(t._def.innerType):t instanceof Bd?[void 0]:t instanceof Ud?[null]:null;class z0 extends Ne{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==ie.object)return ae(n,{code:ee.invalid_type,expected:ie.object,received:n.parsedType}),Re;const r=this.discriminator,o=n.data[r],i=this.optionsMap.get(o);return i?n.common.async?i._parseAsync({data:n.data,path:n.path,parent:n}):i._parseSync({data:n.data,path:n.path,parent:n}):(ae(n,{code:ee.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),Re)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,r){const o=new Map;for(const i of n){const s=Oh(i.shape[e]);if(!s)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const a of s){if(o.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);o.set(a,i)}}return new z0({typeName:_e.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:o,...Oe(r)})}}function dw(t,e){const n=Co(t),r=Co(e);if(t===e)return{valid:!0,data:t};if(n===ie.object&&r===ie.object){const o=Ze.objectKeys(e),i=Ze.objectKeys(t).filter(a=>o.indexOf(a)!==-1),s={...t,...e};for(const a of i){const l=dw(t[a],e[a]);if(!l.valid)return{valid:!1};s[a]=l.data}return{valid:!0,data:s}}else if(n===ie.array&&r===ie.array){if(t.length!==e.length)return{valid:!1};const o=[];for(let i=0;i<t.length;i++){const s=t[i],a=e[i],l=dw(s,a);if(!l.valid)return{valid:!1};o.push(l.data)}return{valid:!0,data:o}}else return n===ie.date&&r===ie.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class Wd extends Ne{_parse(e){const{status:n,ctx:r}=this._processInputParams(e),o=(i,s)=>{if(cw(i)||cw(s))return Re;const a=dw(i.value,s.value);return a.valid?((uw(i)||uw(s))&&n.dirty(),{status:n.value,value:a.data}):(ae(r,{code:ee.invalid_intersection_types}),Re)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([i,s])=>o(i,s)):o(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}Wd.create=(t,e,n)=>new Wd({left:t,right:e,typeName:_e.ZodIntersection,...Oe(n)});class yi extends Ne{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==ie.array)return ae(r,{code:ee.invalid_type,expected:ie.array,received:r.parsedType}),Re;if(r.data.length<this._def.items.length)return ae(r,{code:ee.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Re;!this._def.rest&&r.data.length>this._def.items.length&&(ae(r,{code:ee.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const i=[...r.data].map((s,a)=>{const l=this._def.items[a]||this._def.rest;return l?l._parse(new wi(r,s,r.path,a)):null}).filter(s=>!!s);return r.common.async?Promise.all(i).then(s=>dn.mergeArray(n,s)):dn.mergeArray(n,i)}get items(){return this._def.items}rest(e){return new yi({...this._def,rest:e})}}yi.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new yi({items:t,typeName:_e.ZodTuple,rest:null,...Oe(e)})};class zd extends Ne{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==ie.object)return ae(r,{code:ee.invalid_type,expected:ie.object,received:r.parsedType}),Re;const o=[],i=this._def.keyType,s=this._def.valueType;for(const a in r.data)o.push({key:i._parse(new wi(r,a,r.path,a)),value:s._parse(new wi(r,r.data[a],r.path,a))});return r.common.async?dn.mergeObjectAsync(n,o):dn.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(e,n,r){return n instanceof Ne?new zd({keyType:e,valueType:n,typeName:_e.ZodRecord,...Oe(r)}):new zd({keyType:Tr.create(),valueType:e,typeName:_e.ZodRecord,...Oe(n)})}}class Mp extends Ne{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==ie.map)return ae(r,{code:ee.invalid_type,expected:ie.map,received:r.parsedType}),Re;const o=this._def.keyType,i=this._def.valueType,s=[...r.data.entries()].map(([a,l],c)=>({key:o._parse(new wi(r,a,r.path,[c,"key"])),value:i._parse(new wi(r,l,r.path,[c,"value"]))}));if(r.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const l of s){const c=await l.key,u=await l.value;if(c.status==="aborted"||u.status==="aborted")return Re;(c.status==="dirty"||u.status==="dirty")&&n.dirty(),a.set(c.value,u.value)}return{status:n.value,value:a}})}else{const a=new Map;for(const l of s){const c=l.key,u=l.value;if(c.status==="aborted"||u.status==="aborted")return Re;(c.status==="dirty"||u.status==="dirty")&&n.dirty(),a.set(c.value,u.value)}return{status:n.value,value:a}}}}Mp.create=(t,e,n)=>new Mp({valueType:e,keyType:t,typeName:_e.ZodMap,...Oe(n)});class Ea extends Ne{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==ie.set)return ae(r,{code:ee.invalid_type,expected:ie.set,received:r.parsedType}),Re;const o=this._def;o.minSize!==null&&r.data.size<o.minSize.value&&(ae(r,{code:ee.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&r.data.size>o.maxSize.value&&(ae(r,{code:ee.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const i=this._def.valueType;function s(l){const c=new Set;for(const u of l){if(u.status==="aborted")return Re;u.status==="dirty"&&n.dirty(),c.add(u.value)}return{status:n.value,value:c}}const a=[...r.data.values()].map((l,c)=>i._parse(new wi(r,l,r.path,c)));return r.common.async?Promise.all(a).then(l=>s(l)):s(a)}min(e,n){return new Ea({...this._def,minSize:{value:e,message:ve.toString(n)}})}max(e,n){return new Ea({...this._def,maxSize:{value:e,message:ve.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}Ea.create=(t,e)=>new Ea({valueType:t,minSize:null,maxSize:null,typeName:_e.ZodSet,...Oe(e)});class Cl extends Ne{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==ie.function)return ae(n,{code:ee.invalid_type,expected:ie.function,received:n.parsedType}),Re;function r(a,l){return Op({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Pp(),Ld].filter(c=>!!c),issueData:{code:ee.invalid_arguments,argumentsError:l}})}function o(a,l){return Op({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Pp(),Ld].filter(c=>!!c),issueData:{code:ee.invalid_return_type,returnTypeError:l}})}const i={errorMap:n.common.contextualErrorMap},s=n.data;if(this._def.returns instanceof yc){const a=this;return vn(async function(...l){const c=new kr([]),u=await a._def.args.parseAsync(l,i).catch(g=>{throw c.addIssue(r(l,g)),c}),d=await Reflect.apply(s,this,u);return await a._def.returns._def.type.parseAsync(d,i).catch(g=>{throw c.addIssue(o(d,g)),c})})}else{const a=this;return vn(function(...l){const c=a._def.args.safeParse(l,i);if(!c.success)throw new kr([r(l,c.error)]);const u=Reflect.apply(s,this,c.data),d=a._def.returns.safeParse(u,i);if(!d.success)throw new kr([o(u,d.error)]);return d.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Cl({...this._def,args:yi.create(e).rest(Ks.create())})}returns(e){return new Cl({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,r){return new Cl({args:e||yi.create([]).rest(Ks.create()),returns:n||Ks.create(),typeName:_e.ZodFunction,...Oe(r)})}}class Hd extends Ne{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}Hd.create=(t,e)=>new Hd({getter:t,typeName:_e.ZodLazy,...Oe(e)});class Vd extends Ne{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return ae(n,{received:n.data,code:ee.invalid_literal,expected:this._def.value}),Re}return{status:"valid",value:e.data}}get value(){return this._def.value}}Vd.create=(t,e)=>new Vd({value:t,typeName:_e.ZodLiteral,...Oe(e)});function OC(t,e){return new is({values:t,typeName:_e.ZodEnum,...Oe(e)})}class is extends Ne{_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),r=this._def.values;return ae(n,{expected:Ze.joinValues(r),received:n.parsedType,code:ee.invalid_type}),Re}if(this._def.values.indexOf(e.data)===-1){const n=this._getOrReturnCtx(e),r=this._def.values;return ae(n,{received:n.data,code:ee.invalid_enum_value,options:r}),Re}return vn(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e){return is.create(e)}exclude(e){return is.create(this.options.filter(n=>!e.includes(n)))}}is.create=OC;class Zd extends Ne{_parse(e){const n=Ze.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==ie.string&&r.parsedType!==ie.number){const o=Ze.objectValues(n);return ae(r,{expected:Ze.joinValues(o),received:r.parsedType,code:ee.invalid_type}),Re}if(n.indexOf(e.data)===-1){const o=Ze.objectValues(n);return ae(r,{received:r.data,code:ee.invalid_enum_value,options:o}),Re}return vn(e.data)}get enum(){return this._def.values}}Zd.create=(t,e)=>new Zd({values:t,typeName:_e.ZodNativeEnum,...Oe(e)});class yc extends Ne{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==ie.promise&&n.common.async===!1)return ae(n,{code:ee.invalid_type,expected:ie.promise,received:n.parsedType}),Re;const r=n.parsedType===ie.promise?n.data:Promise.resolve(n.data);return vn(r.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}yc.create=(t,e)=>new yc({type:t,typeName:_e.ZodPromise,...Oe(e)});class Fr extends Ne{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===_e.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:r}=this._processInputParams(e),o=this._def.effect||null,i={addIssue:s=>{ae(r,s),s.fatal?n.abort():n.dirty()},get path(){return r.path}};if(i.addIssue=i.addIssue.bind(i),o.type==="preprocess"){const s=o.transform(r.data,i);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(s).then(a=>this._def.schema._parseAsync({data:a,path:r.path,parent:r})):this._def.schema._parseSync({data:s,path:r.path,parent:r})}if(o.type==="refinement"){const s=a=>{const l=o.refinement(a,i);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(r.common.async===!1){const a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?Re:(a.status==="dirty"&&n.dirty(),s(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>a.status==="aborted"?Re:(a.status==="dirty"&&n.dirty(),s(a.value).then(()=>({status:n.value,value:a.value}))))}if(o.type==="transform")if(r.common.async===!1){const s=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Dd(s))return s;const a=o.transform(s.value,i);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(s=>Dd(s)?Promise.resolve(o.transform(s.value,i)).then(a=>({status:n.value,value:a})):s);Ze.assertNever(o)}}Fr.create=(t,e,n)=>new Fr({schema:t,typeName:_e.ZodEffects,effect:e,...Oe(n)});Fr.createWithPreprocess=(t,e,n)=>new Fr({schema:e,effect:{type:"preprocess",transform:t},typeName:_e.ZodEffects,...Oe(n)});class Fi extends Ne{_parse(e){return this._getType(e)===ie.undefined?vn(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Fi.create=(t,e)=>new Fi({innerType:t,typeName:_e.ZodOptional,...Oe(e)});class _a extends Ne{_parse(e){return this._getType(e)===ie.null?vn(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}_a.create=(t,e)=>new _a({innerType:t,typeName:_e.ZodNullable,...Oe(e)});class qd extends Ne{_parse(e){const{ctx:n}=this._processInputParams(e);let r=n.data;return n.parsedType===ie.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}qd.create=(t,e)=>new qd({innerType:t,typeName:_e.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...Oe(e)});class Lp extends Ne{_parse(e){const{ctx:n}=this._processInputParams(e),r={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return Ip(o)?o.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new kr(r.common.issues)},input:r.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new kr(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}Lp.create=(t,e)=>new Lp({innerType:t,typeName:_e.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...Oe(e)});class Dp extends Ne{_parse(e){if(this._getType(e)!==ie.nan){const r=this._getOrReturnCtx(e);return ae(r,{code:ee.invalid_type,expected:ie.nan,received:r.parsedType}),Re}return{status:"valid",value:e.data}}}Dp.create=t=>new Dp({typeName:_e.ZodNaN,...Oe(t)});const oj=Symbol("zod_brand");class IC extends Ne{_parse(e){const{ctx:n}=this._processInputParams(e),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}}class Cf extends Ne{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?Re:i.status==="dirty"?(n.dirty(),PC(i.value)):this._def.out._parseAsync({data:i.value,path:r.path,parent:r})})();{const o=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return o.status==="aborted"?Re:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:r.path,parent:r})}}static create(e,n){return new Cf({in:e,out:n,typeName:_e.ZodPipeline})}}class jp extends Ne{_parse(e){const n=this._def.innerType._parse(e);return Dd(n)&&(n.value=Object.freeze(n.value)),n}}jp.create=(t,e)=>new jp({innerType:t,typeName:_e.ZodReadonly,...Oe(e)});const kC=(t,e={},n)=>t?wc.create().superRefine((r,o)=>{var i,s;if(!t(r)){const a=typeof e=="function"?e(r):typeof e=="string"?{message:e}:e,l=(s=(i=a.fatal)!==null&&i!==void 0?i:n)!==null&&s!==void 0?s:!0,c=typeof a=="string"?{message:a}:a;o.addIssue({code:"custom",...c,fatal:l})}}):wc.create(),sj={object:mt.lazycreate};var _e;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(_e||(_e={}));const aj=(t,e={message:`Input not instance of ${t.name}`})=>kC(n=>n instanceof t,e),NC=Tr.create,MC=ns.create,lj=Dp.create,cj=rs.create,LC=jd.create,uj=Ca.create,dj=kp.create,fj=Bd.create,hj=Ud.create,pj=wc.create,mj=Ks.create,gj=Yi.create,wj=Np.create,yj=Nr.create,vj=mt.create,bj=mt.strictCreate,xj=Fd.create,Cj=z0.create,Ej=Wd.create,_j=yi.create,Sj=zd.create,Aj=Mp.create,$j=Ea.create,Rj=Cl.create,Tj=Hd.create,Pj=Vd.create,Oj=is.create,Ij=Zd.create,kj=yc.create,H5=Fr.create,Nj=Fi.create,Mj=_a.create,Lj=Fr.createWithPreprocess,Dj=Cf.create,jj=()=>NC().optional(),Bj=()=>MC().optional(),Uj=()=>LC().optional(),Fj={string:t=>Tr.create({...t,coerce:!0}),number:t=>ns.create({...t,coerce:!0}),boolean:t=>jd.create({...t,coerce:!0}),bigint:t=>rs.create({...t,coerce:!0}),date:t=>Ca.create({...t,coerce:!0})},Wj=Re;var S=Object.freeze({__proto__:null,defaultErrorMap:Ld,setErrorMap:ZD,getErrorMap:Pp,makeIssue:Op,EMPTY_PATH:qD,addIssueToContext:ae,ParseStatus:dn,INVALID:Re,DIRTY:PC,OK:vn,isAborted:cw,isDirty:uw,isValid:Dd,isAsync:Ip,get util(){return Ze},get objectUtil(){return lw},ZodParsedType:ie,getParsedType:Co,ZodType:Ne,ZodString:Tr,ZodNumber:ns,ZodBigInt:rs,ZodBoolean:jd,ZodDate:Ca,ZodSymbol:kp,ZodUndefined:Bd,ZodNull:Ud,ZodAny:wc,ZodUnknown:Ks,ZodNever:Yi,ZodVoid:Np,ZodArray:Nr,ZodObject:mt,ZodUnion:Fd,ZodDiscriminatedUnion:z0,ZodIntersection:Wd,ZodTuple:yi,ZodRecord:zd,ZodMap:Mp,ZodSet:Ea,ZodFunction:Cl,ZodLazy:Hd,ZodLiteral:Vd,ZodEnum:is,ZodNativeEnum:Zd,ZodPromise:yc,ZodEffects:Fr,ZodTransformer:Fr,ZodOptional:Fi,ZodNullable:_a,ZodDefault:qd,ZodCatch:Lp,ZodNaN:Dp,BRAND:oj,ZodBranded:IC,ZodPipeline:Cf,ZodReadonly:jp,custom:kC,Schema:Ne,ZodSchema:Ne,late:sj,get ZodFirstPartyTypeKind(){return _e},coerce:Fj,any:pj,array:yj,bigint:cj,boolean:LC,date:uj,discriminatedUnion:Cj,effect:H5,enum:Oj,function:Rj,instanceof:aj,intersection:Ej,lazy:Tj,literal:Pj,map:Aj,nan:lj,nativeEnum:Ij,never:gj,null:hj,nullable:Mj,number:MC,object:vj,oboolean:Uj,onumber:Bj,optional:Nj,ostring:jj,pipeline:Dj,preprocess:Lj,promise:kj,record:Sj,set:$j,strictObject:bj,string:NC,symbol:dj,transformer:H5,tuple:_j,undefined:fj,union:xj,unknown:mj,void:wj,NEVER:Wj,ZodIssueCode:ee,quotelessJson:VD,ZodError:kr});const Gt=S.object({message:S.string()});function be(t){return S.literal(te[t])}S.object({accessList:S.array(S.string()),blockHash:S.string().nullable(),blockNumber:S.string().nullable(),chainId:S.string(),from:S.string(),gas:S.string(),hash:S.string(),input:S.string().nullable(),maxFeePerGas:S.string(),maxPriorityFeePerGas:S.string(),nonce:S.string(),r:S.string(),s:S.string(),to:S.string(),transactionIndex:S.string().nullable(),type:S.string(),v:S.string(),value:S.string()});const zj=S.object({chainId:S.number()}),Hj=S.object({email:S.string().email()}),Vj=S.object({otp:S.string()}),Zj=S.object({chainId:S.optional(S.number())}),qj=S.object({email:S.string().email()}),Gj=S.object({otp:S.string()}),Kj=S.object({otp:S.string()}),Yj=S.object({themeMode:S.optional(S.enum(["light","dark"])),themeVariables:S.optional(S.record(S.string(),S.string().or(S.number())))}),Qj=S.object({metadata:S.object({name:S.string(),description:S.string(),url:S.string(),icons:S.array(S.string())}).optional(),sdkVersion:S.string(),projectId:S.string()}),Jj=S.object({type:S.string()}),Xj=S.object({action:S.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),eB=S.object({email:S.string().email(),address:S.string(),chainId:S.number()}),tB=S.object({isConnected:S.boolean()}),nB=S.object({chainId:S.number()}),rB=S.object({chainId:S.number()}),iB=S.object({newEmail:S.string().email()}),oB=S.object({smartAccountEnabledNetworks:S.array(S.number())}),sB=S.object({address:S.string(),isDeployed:S.boolean()}),aB=S.object({type:S.string()}),lB=S.any(),cB=S.object({method:S.literal("eth_accounts")}),uB=S.object({method:S.literal("eth_blockNumber")}),dB=S.object({method:S.literal("eth_call"),params:S.array(S.any())}),fB=S.object({method:S.literal("eth_chainId")}),hB=S.object({method:S.literal("eth_estimateGas"),params:S.array(S.any())}),pB=S.object({method:S.literal("eth_feeHistory"),params:S.array(S.any())}),mB=S.object({method:S.literal("eth_gasPrice")}),gB=S.object({method:S.literal("eth_getAccount"),params:S.array(S.any())}),wB=S.object({method:S.literal("eth_getBalance"),params:S.array(S.any())}),yB=S.object({method:S.literal("eth_getBlockByHash"),params:S.array(S.any())}),vB=S.object({method:S.literal("eth_getBlockByNumber"),params:S.array(S.any())}),bB=S.object({method:S.literal("eth_getBlockReceipts"),params:S.array(S.any())}),xB=S.object({method:S.literal("eth_getBlockTransactionCountByHash"),params:S.array(S.any())}),CB=S.object({method:S.literal("eth_getBlockTransactionCountByNumber"),params:S.array(S.any())}),EB=S.object({method:S.literal("eth_getCode"),params:S.array(S.any())}),_B=S.object({method:S.literal("eth_getFilterChanges"),params:S.array(S.any())}),SB=S.object({method:S.literal("eth_getFilterLogs"),params:S.array(S.any())}),AB=S.object({method:S.literal("eth_getLogs"),params:S.array(S.any())}),$B=S.object({method:S.literal("eth_getProof"),params:S.array(S.any())}),RB=S.object({method:S.literal("eth_getStorageAt"),params:S.array(S.any())}),TB=S.object({method:S.literal("eth_getTransactionByBlockHashAndIndex"),params:S.array(S.any())}),PB=S.object({method:S.literal("eth_getTransactionByBlockNumberAndIndex"),params:S.array(S.any())}),OB=S.object({method:S.literal("eth_getTransactionByHash"),params:S.array(S.any())}),IB=S.object({method:S.literal("eth_getTransactionCount"),params:S.array(S.any())}),kB=S.object({method:S.literal("eth_getTransactionReceipt"),params:S.array(S.any())}),NB=S.object({method:S.literal("eth_getUncleCountByBlockHash"),params:S.array(S.any())}),MB=S.object({method:S.literal("eth_getUncleCountByBlockNumber"),params:S.array(S.any())}),LB=S.object({method:S.literal("eth_maxPriorityFeePerGas")}),DB=S.object({method:S.literal("eth_newBlockFilter")}),jB=S.object({method:S.literal("eth_newFilter"),params:S.array(S.any())}),BB=S.object({method:S.literal("eth_newPendingTransactionFilter")}),UB=S.object({method:S.literal("eth_sendRawTransaction"),params:S.array(S.any())}),FB=S.object({method:S.literal("eth_syncing"),params:S.array(S.any())}),WB=S.object({method:S.literal("eth_uninstallFilter"),params:S.array(S.any())}),V5=S.object({method:S.literal("personal_sign"),params:S.array(S.any())}),zB=S.object({method:S.literal("eth_signTypedData_v4"),params:S.array(S.any())}),Z5=S.object({method:S.literal("eth_sendTransaction"),params:S.array(S.any())}),q5=S.object({token:S.string()}),sh={appEvent:S.object({type:be("APP_SWITCH_NETWORK"),payload:zj}).or(S.object({type:be("APP_CONNECT_EMAIL"),payload:Hj})).or(S.object({type:be("APP_CONNECT_DEVICE")})).or(S.object({type:be("APP_CONNECT_OTP"),payload:Vj})).or(S.object({type:be("APP_GET_USER"),payload:S.optional(Zj)})).or(S.object({type:be("APP_SIGN_OUT")})).or(S.object({type:be("APP_IS_CONNECTED"),payload:S.optional(q5)})).or(S.object({type:be("APP_GET_CHAIN_ID")})).or(S.object({type:be("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS")})).or(S.object({type:be("APP_INIT_SMART_ACCOUNT")})).or(S.object({type:be("APP_SET_PREFERRED_ACCOUNT"),payload:Jj})).or(S.object({type:be("APP_RPC_REQUEST"),payload:V5.or(Z5).or(cB).or(uB).or(dB).or(fB).or(hB).or(pB).or(mB).or(gB).or(wB).or(yB).or(vB).or(bB).or(xB).or(CB).or(EB).or(_B).or(SB).or(AB).or($B).or(RB).or(TB).or(PB).or(OB).or(IB).or(kB).or(NB).or(MB).or(LB).or(DB).or(jB).or(BB).or(UB).or(FB).or(WB).or(V5).or(zB).or(Z5)})).or(S.object({type:be("APP_UPDATE_EMAIL"),payload:qj})).or(S.object({type:be("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:Gj})).or(S.object({type:be("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:Kj})).or(S.object({type:be("APP_SYNC_THEME"),payload:Yj})).or(S.object({type:be("APP_SYNC_DAPP_DATA"),payload:Qj})),frameEvent:S.object({type:be("FRAME_SWITCH_NETWORK_ERROR"),payload:Gt}).or(S.object({type:be("FRAME_SWITCH_NETWORK_SUCCESS"),payload:rB})).or(S.object({type:be("FRAME_CONNECT_EMAIL_ERROR"),payload:Gt})).or(S.object({type:be("FRAME_CONNECT_EMAIL_SUCCESS"),payload:Xj})).or(S.object({type:be("FRAME_CONNECT_OTP_ERROR"),payload:Gt})).or(S.object({type:be("FRAME_CONNECT_OTP_SUCCESS")})).or(S.object({type:be("FRAME_CONNECT_DEVICE_ERROR"),payload:Gt})).or(S.object({type:be("FRAME_CONNECT_DEVICE_SUCCESS")})).or(S.object({type:be("FRAME_GET_USER_ERROR"),payload:Gt})).or(S.object({type:be("FRAME_GET_USER_SUCCESS"),payload:eB})).or(S.object({type:be("FRAME_SIGN_OUT_ERROR"),payload:Gt})).or(S.object({type:be("FRAME_SIGN_OUT_SUCCESS")})).or(S.object({type:be("FRAME_IS_CONNECTED_ERROR"),payload:Gt})).or(S.object({type:be("FRAME_IS_CONNECTED_SUCCESS"),payload:tB})).or(S.object({type:be("FRAME_GET_CHAIN_ID_ERROR"),payload:Gt})).or(S.object({type:be("FRAME_GET_CHAIN_ID_SUCCESS"),payload:nB})).or(S.object({type:be("FRAME_RPC_REQUEST_ERROR"),payload:Gt})).or(S.object({type:be("FRAME_RPC_REQUEST_SUCCESS"),payload:lB})).or(S.object({type:be("FRAME_SESSION_UPDATE"),payload:q5})).or(S.object({type:be("FRAME_UPDATE_EMAIL_ERROR"),payload:Gt})).or(S.object({type:be("FRAME_UPDATE_EMAIL_SUCCESS")})).or(S.object({type:be("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:Gt})).or(S.object({type:be("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(S.object({type:be("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:Gt})).or(S.object({type:be("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:iB})).or(S.object({type:be("FRAME_SYNC_THEME_ERROR"),payload:Gt})).or(S.object({type:be("FRAME_SYNC_THEME_SUCCESS")})).or(S.object({type:be("FRAME_SYNC_DAPP_DATA_ERROR"),payload:Gt})).or(S.object({type:be("FRAME_SYNC_DAPP_DATA_SUCCESS")})).or(S.object({type:be("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),payload:oB})).or(S.object({type:be("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),payload:Gt})).or(S.object({type:be("FRAME_INIT_SMART_ACCOUNT_SUCCESS"),payload:sB})).or(S.object({type:be("FRAME_INIT_SMART_ACCOUNT_ERROR"),payload:Gt})).or(S.object({type:be("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),payload:aB})).or(S.object({type:be("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),payload:Gt}))},Sn={set(t,e){Yt.isClient&&localStorage.setItem(`${te.STORAGE_KEY}${t}`,e)},get(t){return Yt.isClient?localStorage.getItem(`${te.STORAGE_KEY}${t}`):null},delete(t){Yt.isClient&&localStorage.removeItem(`${te.STORAGE_KEY}${t}`)}},HB=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],ah=30*1e3,Yt={getBlockchainApiUrl(){try{const{timeZone:t}=new Intl.DateTimeFormat().resolvedOptions(),e=t.toUpperCase();return HB.includes(e)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){const t=Sn.get(te.LAST_EMAIL_LOGIN_TIME);if(t){const e=Date.now()-Number(t);if(e<ah){const n=Math.ceil((ah-e)/1e3);throw new Error(`Please try again after ${n} seconds`)}}},getTimeToNextEmailLogin(){const t=Sn.get(te.LAST_EMAIL_LOGIN_TIME);if(t){const e=Date.now()-Number(t);if(e<ah)return Math.ceil((ah-e)/1e3)}return 0},checkIfRequestExists(t){const e=this.getRequestMethod(t);return xl.NOT_SAFE_RPC_METHODS.includes(e)||xl.SAFE_RPC_METHODS.includes(e)},getRequestMethod(t){var e;return(e=t==null?void 0:t.payload)==null?void 0:e.method},checkIfRequestIsAllowed(t){const e=this.getRequestMethod(t);return xl.SAFE_RPC_METHODS.includes(e)},isClient:typeof window<"u"};class VB{constructor(e,n=!1){if(this.iframe=null,this.rpcUrl=Yt.getBlockchainApiUrl(),this.events={onFrameEvent:r=>{Yt.isClient&&window.addEventListener("message",({data:o})=>{var s;if(!((s=o.type)!=null&&s.includes(te.FRAME_EVENT_KEY)))return;const i=sh.frameEvent.parse(o);r(i)})},onAppEvent:r=>{Yt.isClient&&window.addEventListener("message",({data:o})=>{var s;if(!((s=o.type)!=null&&s.includes(te.APP_EVENT_KEY)))return;const i=sh.appEvent.parse(o);r(i)})},postAppEvent:r=>{var o;if(Yt.isClient){if(!((o=this.iframe)!=null&&o.contentWindow))throw new Error("W3mFrame: iframe is not set");sh.appEvent.parse(r),window.postMessage(r),this.iframe.contentWindow.postMessage(r,"*")}},postFrameEvent:r=>{if(Yt.isClient){if(!parent)throw new Error("W3mFrame: parent is not set");sh.frameEvent.parse(r),parent.postMessage(r,"*")}}},this.projectId=e,this.frameLoadPromise=new Promise((r,o)=>{this.frameLoadPromiseResolver={resolve:r,reject:o}}),n&&(this.frameLoadPromise=new Promise((r,o)=>{this.frameLoadPromiseResolver={resolve:r,reject:o}}),Yt.isClient)){const r=document.createElement("iframe");r.id="w3m-iframe",r.src=`${te.SECURE_SITE_SDK}?projectId=${e}`,r.style.position="fixed",r.style.zIndex="999999",r.style.display="none",r.style.opacity="0",r.style.borderRadius="clamp(0px, var(--wui-border-radius-l), 44px)",document.body.appendChild(r),this.iframe=r,this.iframe.onload=()=>{var o;(o=this.frameLoadPromiseResolver)==null||o.resolve(void 0)},this.iframe.onerror=()=>{var o;(o=this.frameLoadPromiseResolver)==null||o.reject("Unable to load email login dependency")}}}get networks(){const e=[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,324,280,100,8453,84531,7777777,999].map(n=>({[n]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=eip155:${n}&projectId=${this.projectId}`,chainId:n}}));return Object.assign({},...e)}}class ZB{constructor(e){this.connectEmailResolver=void 0,this.connectDeviceResolver=void 0,this.connectOtpResolver=void 0,this.connectResolver=void 0,this.disconnectResolver=void 0,this.isConnectedResolver=void 0,this.getChainIdResolver=void 0,this.switchChainResolver=void 0,this.rpcRequestResolver=void 0,this.updateEmailResolver=void 0,this.updateEmailPrimaryOtpResolver=void 0,this.updateEmailSecondaryOtpResolver=void 0,this.syncThemeResolver=void 0,this.syncDappDataResolver=void 0,this.smartAccountEnabledNetworksResolver=void 0,this.initSmartAccountResolver=void 0,this.setPreferredAccountResolver=void 0,this.w3mFrame=new VB(e,!0),this.w3mFrame.events.onFrameEvent(n=>{switch(console.log("💻 received",n),n.type){case te.FRAME_CONNECT_EMAIL_SUCCESS:return this.onConnectEmailSuccess(n);case te.FRAME_CONNECT_EMAIL_ERROR:return this.onConnectEmailError(n);case te.FRAME_CONNECT_DEVICE_SUCCESS:return this.onConnectDeviceSuccess();case te.FRAME_CONNECT_DEVICE_ERROR:return this.onConnectDeviceError(n);case te.FRAME_CONNECT_OTP_SUCCESS:return this.onConnectOtpSuccess();case te.FRAME_CONNECT_OTP_ERROR:return this.onConnectOtpError(n);case te.FRAME_GET_USER_SUCCESS:return this.onConnectSuccess(n);case te.FRAME_GET_USER_ERROR:return this.onConnectError(n);case te.FRAME_IS_CONNECTED_SUCCESS:return this.onIsConnectedSuccess(n);case te.FRAME_IS_CONNECTED_ERROR:return this.onIsConnectedError(n);case te.FRAME_GET_CHAIN_ID_SUCCESS:return this.onGetChainIdSuccess(n);case te.FRAME_GET_CHAIN_ID_ERROR:return this.onGetChainIdError(n);case te.FRAME_SIGN_OUT_SUCCESS:return this.onSignOutSuccess();case te.FRAME_SIGN_OUT_ERROR:return this.onSignOutError(n);case te.FRAME_SWITCH_NETWORK_SUCCESS:return this.onSwitchChainSuccess(n);case te.FRAME_SWITCH_NETWORK_ERROR:return this.onSwitchChainError(n);case te.FRAME_RPC_REQUEST_SUCCESS:return this.onRpcRequestSuccess(n);case te.FRAME_RPC_REQUEST_ERROR:return this.onRpcRequestError(n);case te.FRAME_SESSION_UPDATE:return this.onSessionUpdate(n);case te.FRAME_UPDATE_EMAIL_SUCCESS:return this.onUpdateEmailSuccess();case te.FRAME_UPDATE_EMAIL_ERROR:return this.onUpdateEmailError(n);case te.FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:return this.onUpdateEmailPrimaryOtpSuccess();case te.FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:return this.onUpdateEmailPrimaryOtpError(n);case te.FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:return this.onUpdateEmailSecondaryOtpSuccess(n);case te.FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:return this.onUpdateEmailSecondaryOtpError(n);case te.FRAME_SYNC_THEME_SUCCESS:return this.onSyncThemeSuccess();case te.FRAME_SYNC_THEME_ERROR:return this.onSyncThemeError(n);case te.FRAME_SYNC_DAPP_DATA_SUCCESS:return this.onSyncDappDataSuccess();case te.FRAME_SYNC_DAPP_DATA_ERROR:return this.onSyncDappDataError(n);case te.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:return this.onSmartAccountEnabledNetworksSuccess(n);case te.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:return this.onSmartAccountEnabledNetworksError(n);case te.FRAME_INIT_SMART_ACCOUNT_SUCCESS:return this.onInitSmartAccountSuccess(n);case te.FRAME_INIT_SMART_ACCOUNT_ERROR:return this.onInitSmartAccountError(n);case te.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:return this.onPreferSmartAccountSuccess(n);case te.FRAME_SET_PREFERRED_ACCOUNT_ERROR:return this.onPreferSmartAccountError();default:return null}})}getLoginEmailUsed(){return!!Sn.get(te.EMAIL_LOGIN_USED_KEY)}getEmail(){return Sn.get(te.EMAIL)}rejectRpcRequest(){var e;(e=this.rpcRequestResolver)==null||e.reject()}async connectEmail(e){return await this.w3mFrame.frameLoadPromise,Yt.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:te.APP_CONNECT_EMAIL,payload:e}),new Promise((n,r)=>{this.connectEmailResolver={resolve:n,reject:r}})}async connectDevice(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_CONNECT_DEVICE}),new Promise((e,n)=>{this.connectDeviceResolver={resolve:e,reject:n}})}async connectOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_CONNECT_OTP,payload:e}),new Promise((n,r)=>{this.connectOtpResolver={resolve:n,reject:r}})}async isConnected(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_IS_CONNECTED,payload:void 0}),new Promise((e,n)=>{this.isConnectedResolver={resolve:e,reject:n}})}async getChainId(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_GET_CHAIN_ID}),new Promise((e,n)=>{this.getChainIdResolver={resolve:e,reject:n}})}async updateEmail(e){return await this.w3mFrame.frameLoadPromise,Yt.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:te.APP_UPDATE_EMAIL,payload:e}),new Promise((n,r)=>{this.updateEmailResolver={resolve:n,reject:r}})}async updateEmailPrimaryOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_UPDATE_EMAIL_PRIMARY_OTP,payload:e}),new Promise((n,r)=>{this.updateEmailPrimaryOtpResolver={resolve:n,reject:r}})}async updateEmailSecondaryOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_UPDATE_EMAIL_SECONDARY_OTP,payload:e}),new Promise((n,r)=>{this.updateEmailSecondaryOtpResolver={resolve:n,reject:r}})}async syncTheme(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_SYNC_THEME,payload:e}),new Promise((n,r)=>{this.syncThemeResolver={resolve:n,reject:r}})}async syncDappData(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_SYNC_DAPP_DATA,payload:e}),new Promise((n,r)=>{this.syncDappDataResolver={resolve:n,reject:r}})}async getSmartAccountEnabledNetworks(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS}),new Promise((e,n)=>{this.smartAccountEnabledNetworksResolver={resolve:e,reject:n}})}async initSmartAccount(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_INIT_SMART_ACCOUNT}),new Promise((e,n)=>{this.initSmartAccountResolver={resolve:e,reject:n}})}async setPreferredAccount(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_SET_PREFERRED_ACCOUNT,payload:{type:e}}),new Promise((n,r)=>{this.setPreferredAccountResolver={resolve:n,reject:r}})}async connect(e){const n=(e==null?void 0:e.chainId)??this.getLastUsedChainId()??1;return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_GET_USER,payload:{chainId:n}}),new Promise((r,o)=>{this.connectResolver={resolve:r,reject:o}})}async switchNetwork(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_SWITCH_NETWORK,payload:{chainId:e}}),new Promise((n,r)=>{this.switchChainResolver={resolve:n,reject:r}})}async disconnect(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_SIGN_OUT}),new Promise((e,n)=>{this.disconnectResolver={resolve:e,reject:n}})}async request(e){return await this.w3mFrame.frameLoadPromise,xl.GET_CHAIN_ID===e.method?this.getLastUsedChainId():(this.w3mFrame.events.postAppEvent({type:te.APP_RPC_REQUEST,payload:e}),new Promise((n,r)=>{this.rpcRequestResolver={resolve:n,reject:r}}))}onRpcRequest(e){this.w3mFrame.events.onAppEvent(n=>{n.type.includes(te.RPC_METHOD_KEY)&&e(n)})}onRpcResponse(e){this.w3mFrame.events.onFrameEvent(n=>{n.type.includes(te.RPC_METHOD_KEY)&&e(n)})}onIsConnected(e){this.w3mFrame.events.onFrameEvent(n=>{n.type===te.FRAME_GET_USER_SUCCESS&&e()})}onNotConnected(e){this.w3mFrame.events.onFrameEvent(n=>{n.type===te.FRAME_IS_CONNECTED_ERROR&&e(),n.type===te.FRAME_IS_CONNECTED_SUCCESS&&!n.payload.isConnected&&e()})}onInitSmartAccount(e){this.w3mFrame.events.onFrameEvent(n=>{n.type===te.FRAME_INIT_SMART_ACCOUNT_SUCCESS?e(n.payload.isDeployed):n.type===te.FRAME_INIT_SMART_ACCOUNT_ERROR&&e(!1)})}onConnectEmailSuccess(e){var n;(n=this.connectEmailResolver)==null||n.resolve(e.payload),this.setNewLastEmailLoginTime()}onConnectEmailError(e){var n;(n=this.connectEmailResolver)==null||n.reject(e.payload.message)}onConnectDeviceSuccess(){var e;(e=this.connectDeviceResolver)==null||e.resolve(void 0)}onConnectDeviceError(e){var n;(n=this.connectDeviceResolver)==null||n.reject(e.payload.message)}onConnectOtpSuccess(){var e;(e=this.connectOtpResolver)==null||e.resolve(void 0)}onConnectOtpError(e){var n;(n=this.connectOtpResolver)==null||n.reject(e.payload.message)}onConnectSuccess(e){var n;this.setEmailLoginSuccess(e.payload.email),this.setLastUsedChainId(e.payload.chainId),(n=this.connectResolver)==null||n.resolve(e.payload)}onConnectError(e){var n;(n=this.connectResolver)==null||n.reject(e.payload.message)}onIsConnectedSuccess(e){var n;e.payload.isConnected||this.deleteEmailLoginCache(),(n=this.isConnectedResolver)==null||n.resolve(e.payload)}onIsConnectedError(e){var n;(n=this.isConnectedResolver)==null||n.reject(e.payload.message)}onGetChainIdSuccess(e){var n;this.setLastUsedChainId(e.payload.chainId),(n=this.getChainIdResolver)==null||n.resolve(e.payload)}onGetChainIdError(e){var n;(n=this.getChainIdResolver)==null||n.reject(e.payload.message)}onSignOutSuccess(){var e;(e=this.disconnectResolver)==null||e.resolve(void 0),this.deleteEmailLoginCache()}onSignOutError(e){var n;(n=this.disconnectResolver)==null||n.reject(e.payload.message)}onSwitchChainSuccess(e){var n;this.setLastUsedChainId(e.payload.chainId),(n=this.switchChainResolver)==null||n.resolve(e.payload)}onSwitchChainError(e){var n;(n=this.switchChainResolver)==null||n.reject(e.payload.message)}onRpcRequestSuccess(e){var n;(n=this.rpcRequestResolver)==null||n.resolve(e.payload)}onRpcRequestError(e){var n;(n=this.rpcRequestResolver)==null||n.reject(e.payload.message)}onSessionUpdate(e){}onUpdateEmailSuccess(){var e;(e=this.updateEmailResolver)==null||e.resolve(void 0),this.setNewLastEmailLoginTime()}onUpdateEmailError(e){var n;(n=this.updateEmailResolver)==null||n.reject(e.payload.message)}onUpdateEmailPrimaryOtpSuccess(){var e;(e=this.updateEmailPrimaryOtpResolver)==null||e.resolve(void 0)}onUpdateEmailPrimaryOtpError(e){var n;(n=this.updateEmailPrimaryOtpResolver)==null||n.reject(e.payload.message)}onUpdateEmailSecondaryOtpSuccess(e){var r;const{newEmail:n}=e.payload;this.setEmailLoginSuccess(n),(r=this.updateEmailSecondaryOtpResolver)==null||r.resolve({newEmail:n})}onUpdateEmailSecondaryOtpError(e){var n;(n=this.updateEmailSecondaryOtpResolver)==null||n.reject(e.payload.message)}onSyncThemeSuccess(){var e;(e=this.syncThemeResolver)==null||e.resolve(void 0)}onSyncThemeError(e){var n;(n=this.syncThemeResolver)==null||n.reject(e.payload.message)}onSyncDappDataSuccess(){var e;(e=this.syncDappDataResolver)==null||e.resolve(void 0)}onSyncDappDataError(e){var n;(n=this.syncDappDataResolver)==null||n.reject(e.payload.message)}onSmartAccountEnabledNetworksSuccess(e){var n;(n=this.smartAccountEnabledNetworksResolver)==null||n.resolve(e.payload)}onSmartAccountEnabledNetworksError(e){var n;(n=this.smartAccountEnabledNetworksResolver)==null||n.reject(e.payload.message)}onInitSmartAccountSuccess(e){var n;(n=this.initSmartAccountResolver)==null||n.resolve(e.payload)}onInitSmartAccountError(e){var n;(n=this.initSmartAccountResolver)==null||n.reject(e.payload.message)}onPreferSmartAccountSuccess(e){var n;this.persistPreferredAccount(e.payload.type),(n=this.setPreferredAccountResolver)==null||n.resolve(void 0)}onPreferSmartAccountError(){var e;(e=this.setPreferredAccountResolver)==null||e.reject()}setNewLastEmailLoginTime(){Sn.set(te.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setEmailLoginSuccess(e){Sn.set(te.EMAIL,e),Sn.set(te.EMAIL_LOGIN_USED_KEY,"true"),Sn.delete(te.LAST_EMAIL_LOGIN_TIME)}deleteEmailLoginCache(){Sn.delete(te.EMAIL_LOGIN_USED_KEY),Sn.delete(te.EMAIL),Sn.delete(te.LAST_USED_CHAIN_KEY)}setLastUsedChainId(e){Sn.set(te.LAST_USED_CHAIN_KEY,String(e))}getLastUsedChainId(){return Number(Sn.get(te.LAST_USED_CHAIN_KEY))}persistPreferredAccount(e){Sn.set(te.PREFERRED_ACCOUNT_TYPE,e)}}var H0=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const qB=6;let Qi=class extends we{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){var e;super(),this.loading=!1,this.timeoutTimeLeft=Yt.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=(e=J.state.data)==null?void 0:e.email,this.emailConnector=ot.getEmailConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const e=!!this.timeoutTimeLeft,n=this.getFooterLabels(e);return O`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">Enter the code we sent to</wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?O`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:O` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?O`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">${n.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${n.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=Yt.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=Yt.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){var n;try{this.loading||(this.otp=e.detail,this.emailConnector&&this.otp.length===qB&&(this.loading=!0,await((n=this.onOtpSubmit)==null?void 0:n.call(this,this.otp))))}catch(r){this.error=le.parseError(r),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!ot.getEmailConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),Ve.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){Ve.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:`Try again ${e?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}`}}};Qi.styles=HD;H0([V()],Qi.prototype,"loading",void 0);H0([V()],Qi.prototype,"timeoutTimeLeft",void 0);H0([V()],Qi.prototype,"error",void 0);Qi=H0([B("w3m-email-otp-widget")],Qi);var GB=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let G5=class extends Qi{constructor(){super(),this.onOtpSubmit=async e=>{try{this.emailConnector&&(await this.emailConnector.provider.connectOtp({otp:e}),xe.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await De.connectExternal(this.emailConnector),Me.close(),xe.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.emailConnector.name||"Unknown"}}))}catch(n){throw xe.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),n}},this.onOtpResend=async e=>{this.emailConnector&&(await this.emailConnector.provider.connectEmail({email:e}),xe.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};G5=GB([B("w3m-email-verify-otp-view")],G5);const KB=Le`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var DC=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Bp=class extends we{constructor(){var e;super(),this.email=(e=J.state.data)==null?void 0:e.email,this.emailConnector=ot.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw new Error("w3m-email-verify-device-view: No email connector provided");return O`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.emailConnector)try{await this.emailConnector.provider.connectDevice(),xe.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),xe.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),J.replace("EmailVerifyOtp",{email:this.email})}catch{J.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.emailConnector.provider.connectEmail({email:this.email}),Ve.showSuccess("Code email resent")}}catch(e){Ve.showError(e)}finally{this.loading=!1}}};Bp.styles=KB;DC([V()],Bp.prototype,"loading",void 0);Bp=DC([B("w3m-email-verify-device-view")],Bp);const YB=Le`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var jC=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Up=class extends we{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(Me.subscribeKey("open",e=>{e||this.onHideIframe()}))}disconnectedCallback(){var e;this.unsubscribe.forEach(n=>n()),(e=this.bodyObserver)==null||e.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block";const n=this.renderRoot.querySelector("div");this.bodyObserver=new ResizeObserver(()=>{const o=(n==null?void 0:n.getBoundingClientRect())??{left:0,top:0,width:0,height:0};this.iframe.style.width=`${o.width}px`,this.iframe.style.height=`${o.height-10}px`,this.iframe.style.left=`${o.left}px`,this.iframe.style.top=`${o.top+10/2}px`,this.ready=!0}),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),O`<div data-ready=${this.ready}></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards",delay:300})}async onHideIframe(){await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.iframe.style.display="none"}async syncTheme(){const e=ot.getEmailConnector();e&&await e.provider.syncTheme({themeVariables:Mt.getSnapshot().themeVariables})}};Up.styles=YB;jC([V()],Up.prototype,"ready",void 0);Up=jC([B("w3m-approve-transaction-view")],Up);var QB=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let K5=class extends we{render(){return O`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${Fn.SECURE_SITE_DASHBOARD}
          imageSrc=${Fn.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};K5=QB([B("w3m-upgrade-wallet-view")],K5);var JB=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Y5=class extends we{render(){return O`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link>
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return O` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-visual name="onrampCard"></wui-visual>
        <wui-visual name="onrampCard"></wui-visual>
        <wui-visual name="onrampCard"></wui-visual>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Discover Smart Accounts
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Access advanced features such as username, social login, improved security and a smoother
          user experience!
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return O`<wui-flex .padding=${["0","2l","0","2l"]} gap="s">
      <wui-button variant="accentBg" @click=${J.goBack} size="lg" borderRadius="xs">
        Do it later
      </wui-button>
      <wui-button size="lg" borderRadius="xs"> Continue </wui-button>
    </wui-flex>`}};Y5=JB([B("w3m-upgrade-to-smart-account-view")],Y5);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const XB=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const eU={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},tU=t=>(...e)=>({_$litDirective$:t,values:e});let nU=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Du=(t,e)=>{var r;const n=t._$AN;if(n===void 0)return!1;for(const o of n)(r=o._$AO)==null||r.call(o,e,!1),Du(o,e);return!0},Fp=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while((n==null?void 0:n.size)===0)},BC=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),oU(e)}};function rU(t){this._$AN!==void 0?(Fp(this),this._$AM=t,BC(this)):this._$AM=t}function iU(t,e=!1,n=0){const r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(r))for(let i=n;i<r.length;i++)Du(r[i],!1),Fp(r[i]);else r!=null&&(Du(r,!1),Fp(r));else Du(this,t)}const oU=t=>{t.type==eU.CHILD&&(t._$AP??(t._$AP=iU),t._$AQ??(t._$AQ=rU))};class sU extends nU{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,r){super._$AT(e,n,r),BC(this),this.isConnected=e._$AU}_$AO(e,n=!0){var r,o;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)==null||r.call(this):(o=this.disconnected)==null||o.call(this)),n&&(Du(this,e),Fp(this))}setValue(e){if(XB(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const UC=()=>new aU;class aU{}const Em=new WeakMap,FC=tU(class extends sU{render(t){return $t}update(t,[e]){var r;const n=e!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=e,this.ht=(r=t.options)==null?void 0:r.host,this.rt(this.ct=t.element)),$t}rt(t){if(typeof this.Y=="function"){const e=this.ht??globalThis;let n=Em.get(e);n===void 0&&(n=new WeakMap,Em.set(e,n)),n.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),n.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=Em.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),lU=Le`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var bv=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Gd=class extends we{constructor(){var e;super(...arguments),this.formRef=UC(),this.initialEmail=((e=J.state.data)==null?void 0:e.email)??"",this.email="",this.loading=!1}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",n=>{n.key==="Enter"&&this.onSubmitEmail(n)})}render(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return O`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${FC(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${J.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const n=ot.getEmailConnector();if(!n)throw new Error("w3m-update-email-wallet: Email connector not found");await n.provider.updateEmail({email:this.email}),xe.sendEvent({type:"track",event:"EMAIL_EDIT"}),J.replace("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email})}catch(n){Ve.showError(n),this.loading=!1}}};Gd.styles=lU;bv([V()],Gd.prototype,"email",void 0);bv([V()],Gd.prototype,"loading",void 0);Gd=bv([B("w3m-update-email-wallet-view")],Gd);var cU=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Q5=class extends Qi{constructor(){var e;super(),this.email=(e=J.state.data)==null?void 0:e.email,this.onOtpSubmit=async n=>{try{this.emailConnector&&(await this.emailConnector.provider.updateEmailPrimaryOtp({otp:n}),xe.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),J.replace("UpdateEmailSecondaryOtp",J.state.data))}catch(r){throw xe.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),r}},this.onStartOver=()=>{J.replace("UpdateEmailWallet",J.state.data)}}};Q5=cU([B("w3m-update-email-primary-otp-view")],Q5);var uU=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let J5=class extends Qi{constructor(){var e;super(),this.email=(e=J.state.data)==null?void 0:e.newEmail,this.onOtpSubmit=async n=>{try{this.emailConnector&&(await this.emailConnector.provider.updateEmailSecondaryOtp({otp:n}),xe.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),J.reset("Account"))}catch(r){throw xe.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),r}},this.onStartOver=()=>{J.replace("UpdateEmailWallet",J.state.data)}}};J5=uU([B("w3m-update-email-secondary-otp-view")],J5);const dU=Le`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var WC=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Wp=class extends we{constructor(){super(...arguments),this.disconecting=!1}render(){return O`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            This app doesn’t support your current network. Switch to an available option following
            to continue.
          </wui-text>
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:n}=Pe.state;return le.sortRequestedNetworks(e,n).map(o=>O`
        <wui-list-network
          imageSrc=${Ee(tt.getNetworkImage(o))}
          name=${o.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(o)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconecting=!0,await De.disconnect(),xe.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Me.close()}catch{xe.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Ve.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){const{isConnected:n}=me.state,{approvedCaipNetworkIds:r,supportsAllNetworks:o,caipNetwork:i}=Pe.state,{data:s}=J.state;n&&(i==null?void 0:i.id)!==e.id?r!=null&&r.includes(e.id)?(await Pe.switchActiveNetwork(e),zy.navigateAfterNetworkSwitch()):o&&J.push("SwitchNetwork",{...s,network:e}):n||(Pe.setCaipNetwork(e),J.push("Connect"))}};Wp.styles=dU;WC([V()],Wp.prototype,"disconecting",void 0);Wp=WC([B("w3m-unsupported-chain-view")],Wp);const fU=Le`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var V0=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let vc=class extends we{constructor(){super(),this.unsubscribe=[],this.address=me.state.address,this.profileName=me.state.profileName,this.network=Pe.state.caipNetwork,this.unsubscribe.push(me.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName):Ve.showError("Account not found")}),Pe.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=tt.getNetworkImage(this.network);return O` <wui-flex
      flexDirection="column"
      .padding=${["xl","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        @click=${this.onCopyClick.bind(this)}
        text=${ze.getTruncateString({string:this.address??"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        imageSrc=${e||""}
        variant="shadeSmall"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${Mt.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){var o;const e=Pe.getRequestedCaipNetworks(),r=((o=e==null?void 0:e.filter(i=>i==null?void 0:i.imageId))==null?void 0:o.slice(0,5)).map(tt.getNetworkImage).filter(Boolean);return O`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${r}
    ></wui-compatible-network>`}onReceiveClick(){J.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(le.copyToClopboard(this.address),Ve.showSuccess("Address copied"))}catch{Ve.showError("Failed to copy")}}};vc.styles=fU;V0([V()],vc.prototype,"address",void 0);V0([V()],vc.prototype,"profileName",void 0);V0([V()],vc.prototype,"network",void 0);vc=V0([B("w3m-wallet-receive-view")],vc);const hU=Le`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var pU=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let fw=class extends we{render(){return O` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:n}=Pe.state;return le.sortRequestedNetworks(e,n).map(o=>O`
        <wui-list-network
          imageSrc=${Ee(tt.getNetworkImage(o))}
          name=${o.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};fw.styles=hU;fw=pU([B("w3m-wallet-compatible-networks-view")],fw);const mU=Le`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function zC(t){const{connectors:e}=ot.state,n=e.filter(i=>i.type==="ANNOUNCED").reduce((i,s)=>{var a;return(a=s.info)!=null&&a.rdns&&(i[s.info.rdns]=!0),i},{});return t.map(i=>({...i,installed:!!i.rdns&&!!n[i.rdns??""]})).sort((i,s)=>Number(s.installed)-Number(i.installed))}var Ef=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const X5="local-paginator";let Sa=class extends we{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!Ae.state.wallets.length,this.wallets=Ae.state.wallets,this.recommended=Ae.state.recommended,this.featured=Ae.state.featured,this.unsubscribe.push(Ae.subscribeKey("wallets",e=>this.wallets=e),Ae.subscribeKey("recommended",e=>this.recommended=e),Ae.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(n=>n()),(e=this.paginationObserver)==null||e.disconnect()}render(){return O`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-grid");this.initial&&e&&(await Ae.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,n){return[...Array(e)].map(()=>O`
        <wui-card-select-loader type="wallet" id=${Ee(n)}></wui-card-select-loader>
      `)}walletsTemplate(){const e=[...this.featured,...this.recommended,...this.wallets];return zC(e).map(r=>O`
        <wui-card-select
          imageSrc=${Ee(tt.getWalletImage(r))}
          type="wallet"
          name=${r.name}
          @click=${()=>this.onConnectWallet(r)}
          .installed=${r.installed}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:n,featured:r,count:o}=Ae.state,i=window.innerWidth<352?3:4,s=e.length+n.length;let l=Math.ceil(s/i)*i-s+i;return l-=e.length?r.length%i:0,o===0&&r.length>0?null:o===0||[...r,...e,...n].length<o?this.shimmerTemplate(l,X5):null}createPaginationObserver(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector(`#${X5}`);e&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r!=null&&r.isIntersecting&&!this.initial){const{page:o,count:i,wallets:s}=Ae.state;s.length<i&&Ae.fetchWallets({page:o+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){const{connectors:n}=ot.state,r=n.find(({explorerId:o})=>o===e.id);r?J.push("ConnectingExternal",{connector:r}):J.push("ConnectingWalletConnect",{wallet:e})}};Sa.styles=mU;Ef([V()],Sa.prototype,"initial",void 0);Ef([V()],Sa.prototype,"wallets",void 0);Ef([V()],Sa.prototype,"recommended",void 0);Ef([V()],Sa.prototype,"featured",void 0);Sa=Ef([B("w3m-all-wallets-list")],Sa);const gU=Le`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var xv=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Kd=class extends we{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?O`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await Ae.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=Ae.state,n=zC(e);return e.length?O`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${n.map(r=>O`
            <wui-card-select
              imageSrc=${Ee(tt.getWalletImage(r))}
              type="wallet"
              name=${r.name}
              @click=${()=>this.onConnectWallet(r)}
              .installed=${r.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:O`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const{connectors:n}=ot.state,r=n.find(({explorerId:o})=>o===e.id);r?J.push("ConnectingExternal",{connector:r}):J.push("ConnectingWalletConnect",{wallet:e})}};Kd.styles=gU;xv([V()],Kd.prototype,"loading",void 0);xv([Je()],Kd.prototype,"query",void 0);Kd=xv([B("w3m-all-wallets-search")],Kd);var Z0=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Yd=class extends we{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(De.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return O`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(n=>n==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:n==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:n==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:n==="web"?{label:"Webapp",icon:"browser",platform:"web"}:n==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:n})=>n),e}onTabChange(e){var r;const n=this.platformTabs[e];n&&((r=this.onSelectPlatfrom)==null||r.call(this,n))}};Z0([Je({type:Array})],Yd.prototype,"platforms",void 0);Z0([Je()],Yd.prototype,"onSelectPlatfrom",void 0);Z0([V()],Yd.prototype,"buffering",void 0);Yd=Z0([B("w3m-connecting-header")],Yd);var wU=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let eb=class extends Mn{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){var e;try{this.error=!1;const{connectors:n}=ot.state,r=n.find(i=>{var s,a;return i.type==="ANNOUNCED"&&((s=i.info)==null?void 0:s.rdns)===((a=this.wallet)==null?void 0:a.rdns)}),o=n.find(i=>i.type==="INJECTED");r?await De.connectExternal(r):o&&await De.connectExternal(o),Me.close(),xe.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:((e=this.wallet)==null?void 0:e.name)||"Unknown"}})}catch(n){xe.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(n==null?void 0:n.message)??"Unknown"}}),this.error=!0}}};eb=wU([B("w3m-connecting-wc-browser")],eb);var yU=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let tb=class extends Mn{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{var e;(e=this.onConnect)==null||e.call(this)},200))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:n,name:r}=this.wallet,{redirect:o,href:i}=le.formatNativeUrl(n,this.uri);De.setWcLinking({name:r,href:i}),De.setRecentWallet(this.wallet),le.openHref(o,"_blank")}catch{this.error=!0}}};tb=yU([B("w3m-connecting-wc-desktop")],tb);var vU=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let nb=class extends Mn{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:n,name:r}=this.wallet,{redirect:o,href:i}=le.formatNativeUrl(n,this.uri);De.setWcLinking({name:r,href:i}),De.setRecentWallet(this.wallet),le.openHref(o,"_self")}catch{this.error=!0}}onBuffering(){const e=le.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&e&&(De.setBuffering(!0),setTimeout(()=>{De.setBuffering(!1)},5e3))}};nb=vU([B("w3m-connecting-wc-mobile")],nb);const bU=Le`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var xU=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let hw=class extends Mn{constructor(){var e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((e=this.wallet)==null?void 0:e.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),O`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,n=this.wallet?this.wallet.name:void 0;return De.setWcLinking(void 0),De.setRecentWallet(this.wallet),O` <wui-qr-code
      size=${e}
      theme=${Mt.state.themeMode}
      uri=${this.uri}
      imageSrc=${Ee(tt.getWalletImage(this.wallet))}
      alt=${Ee(n)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return O`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};hw.styles=bU;hw=xU([B("w3m-connecting-wc-qrcode")],hw);var CU=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let rb=class extends we{constructor(){var e;if(super(),this.wallet=(e=J.state.data)==null?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return O`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${Ee(tt.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};rb=CU([B("w3m-connecting-wc-unsupported")],rb);var EU=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ib=class extends Mn{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:n,name:r}=this.wallet,{redirect:o,href:i}=le.formatUniversalUrl(n,this.uri);De.setWcLinking({name:r,href:i}),De.setRecentWallet(this.wallet),le.openHref(o,"_blank")}catch{this.error=!0}}};ib=EU([B("w3m-connecting-wc-web")],ib);const _U=Le`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var q0=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};function ob(){var s,a,l,c,u,d,h;const t=(a=(s=J.state.data)==null?void 0:s.connector)==null?void 0:a.name,e=(c=(l=J.state.data)==null?void 0:l.wallet)==null?void 0:c.name,n=(d=(u=J.state.data)==null?void 0:u.network)==null?void 0:d.name,r=e??t,o=ot.getConnectors();return{Connect:`Connect ${o.length===1&&((h=o[0])==null?void 0:h.id)==="w3m-email"?"Email":""} Wallet`,Account:void 0,AccountSettings:void 0,ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:n??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:r?`Get ${r}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpgradeToSmartAccount:void 0,UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",UnsupportedChain:"Switch Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",WhatIsABuy:"What is Buy?",BuyInProgress:"Buy",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks"}}let bc=class extends we{constructor(){super(),this.unsubscribe=[],this.heading=ob()[J.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(J.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),De.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return O`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){xe.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),J.push("WhatIsAWallet")}async onClose(){if(Ce.state.isSiweEnabled){const{SIWEController:e}=await Pr(()=>import("./index-Cby94Co8.js"),__vite__mapDeps([]));e.state.status!=="success"&&await De.disconnect()}Me.close()}titleTemplate(){return O`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=J.state,n=e==="Connect",i=e==="ApproveTransaction"||e==="UpgradeToSmartAccount";return this.showBack&&!i?O`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:O`<wui-icon-link
      data-hidden=${!n}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?O`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("wui-text");if(n){const o=ob()[e];await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=o,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var r;const{history:e}=J.state,n=(r=this.shadowRoot)==null?void 0:r.querySelector("#dynamic");e.length>1&&!this.showBack&&n?(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){J.state.view==="ConnectingSiwe"?J.push("Connect"):J.goBack()}};bc.styles=[_U];q0([V()],bc.prototype,"heading",void 0);q0([V()],bc.prototype,"buffering",void 0);q0([V()],bc.prototype,"showBack",void 0);bc=q0([B("w3m-header")],bc);var HC=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let pw=class extends we{constructor(){super(...arguments),this.data=[]}render(){return O`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>O`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(n=>O`<wui-visual name=${n}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};HC([Je({type:Array})],pw.prototype,"data",void 0);pw=HC([B("w3m-help-widget")],pw);const SU=Le`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-gray-glass-002);
    background: var(--wui-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var Ma=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Ji=class extends we{constructor(){var e;super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=(e=this.currencies)==null?void 0:e[0],this.currencyImages=zt.state.currencyImages,this.tokenImages=zt.state.tokenImages,this.unsubscribe.push(Ge.subscribeKey("purchaseCurrency",n=>{!n||this.type==="Fiat"||(this.selectedCurrency=this.formatPurchaseCurrency(n))}),Ge.subscribeKey("paymentCurrency",n=>{!n||this.type==="Token"||(this.selectedCurrency=this.formatPaymentCurrency(n))}),Ge.subscribe(n=>{this.type==="Fiat"?this.currencies=n.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=n.paymentCurrencies.map(this.formatPaymentCurrency)}),zt.subscribe(n=>{this.currencyImages={...n.currencyImages},this.tokenImages={...n.tokenImages}}))}firstUpdated(){Ge.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var r;const e=((r=this.selectedCurrency)==null?void 0:r.symbol)||"",n=this.currencyImages[e]||this.tokenImages[e];return O` <wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?O` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>Me.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${Ee(n)}></wui-image>
            <wui-text color="fg-100"> ${this.selectedCurrency.symbol} </wui-text>
          </wui-flex>`:O`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};Ji.styles=SU;Ma([Je({type:String})],Ji.prototype,"type",void 0);Ma([Je({type:Number})],Ji.prototype,"value",void 0);Ma([V()],Ji.prototype,"currencies",void 0);Ma([V()],Ji.prototype,"selectedCurrency",void 0);Ma([V()],Ji.prototype,"currencyImages",void 0);Ma([V()],Ji.prototype,"tokenImages",void 0);Ji=Ma([B("w3m-swap-input")],Ji);const AU=Le`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var $U=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let mw=class extends we{render(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=Ce.state;return!e&&!n?null:O`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=Ce.state;return e&&n?"and":""}termsTemplate(){const{termsConditionsUrl:e}=Ce.state;return e?O`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=Ce.state;return e?O`<a href=${e}>Privacy Policy</a>`:null}};mw.styles=[AU];mw=$U([B("w3m-legal-footer")],mw);const RU=Le`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var VC=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let zp=class extends we{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:n,play_store:r,chrome_store:o,homepage:i}=this.wallet,s=le.isMobile(),a=le.isIos(),l=le.isAndroid(),c=[n,r,i,o].filter(Boolean).length>1,u=ze.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return c&&!s?O`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${()=>J.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&i?O`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:n&&a?O`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&l?O`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&le.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&le.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&le.openHref(this.wallet.homepage,"_blank")}};zp.styles=[RU];VC([Je({type:Object})],zp.prototype,"wallet",void 0);zp=VC([B("w3m-mobile-download-links")],zp);const TU=Le`
  wui-flex {
    border-top: 1px solid var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;var PU=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let gw=class extends we{render(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=Ce.state;return!e&&!n?null:O`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to fit your buyer needs, region, and to get you the lowest
          fees
        </wui-text>

        ${this.whatIsBuyTemplate()}
      </wui-flex>
    `}whatIsBuyTemplate(){return O` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      What is Buy
    </wui-link>`}onWhatIsBuy(){J.push("WhatIsABuy")}};gw.styles=[TU];gw=PU([B("w3m-onramp-providers-footer")],gw);const OU=Le`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var ZC=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const IU={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let Hp=class extends we{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=Ve.state.open,this.unsubscribe.push(Ve.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:n}=Ve.state,r=IU[n];return O`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>Ve.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};Hp.styles=OU;ZC([V()],Hp.prototype,"open",void 0);Hp=ZC([B("w3m-snackbar")],Hp);const kU=Le`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 21px;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }
`;var _f=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Aa=class extends we{constructor(){super(),this.unsubscribe=[],this.formRef=UC(),this.connectors=ot.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(ot.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",n=>{n.key==="Enter"&&this.onSubmitEmail(n)})}render(){const e=this.connectors.length>1;return this.connectors.find(r=>r.type==="EMAIL")?O`
      <form ${FC(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e?O`<wui-separator text="or"></wui-separator>`:null}
    `:null}submitButtonTemplate(){return!this.loading&&this.email.length>3?O`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?O`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail,this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const n=ot.getEmailConnector();if(!n)throw new Error("w3m-email-login-widget: Email connector not found");const{action:r}=await n.provider.connectEmail({email:this.email});xe.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),r==="VERIFY_OTP"?(xe.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),J.push("EmailVerifyOtp",{email:this.email})):r==="VERIFY_DEVICE"&&J.push("EmailVerifyDevice",{email:this.email})}catch(n){const r=le.parseError(n);r!=null&&r.includes("Invalid email")?this.error="Invalid email. Try again.":Ve.showError(n)}finally{this.loading=!1}}onFocusEvent(){xe.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};Aa.styles=kU;_f([V()],Aa.prototype,"connectors",void 0);_f([V()],Aa.prototype,"email",void 0);_f([V()],Aa.prototype,"loading",void 0);_f([V()],Aa.prototype,"error",void 0);Aa=_f([B("w3m-email-login-widget")],Aa);const NU=Le`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    border-radius: 24px;
    transaction: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background 0.2s linear;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`;var gs=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let vi=class extends we{constructor(){super(),this.unsubscribe=[],this.address=me.state.address,this.profileImage=me.state.profileImage,this.profileName=me.state.profileName,this.network=Pe.state.caipNetwork,this.disconnecting=!1,this.balance=me.state.balance,this.balanceSymbol=me.state.balanceSymbol,this.unsubscribe.push(me.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):Ve.showError("Account not found")}),Pe.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var n;if(!this.address)throw new Error("w3m-account-view: No account provided");const e=tt.getNetworkImage(this.network);return O`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${Ee(this.address)}
          address=${Ee(this.address)}
          imageSrc=${Ee(this.profileImage===null?void 0:this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="medium-title-600" color="fg-100">
              ${this.profileName?ze.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):ze.getTruncateString({string:this.address?this.address:"",charsStart:4,charsEnd:4,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-text variant="paragraph-500" color="fg-200"
            >${le.formatBalance(this.balance,this.balanceSymbol)}</wui-text
          >
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${Ee(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((n=this.network)==null?void 0:n.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        ${this.onrampTemplate()}
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalMedium"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){const{enableOnramp:e}=Ce.state;return e?O`
      <wui-list-item
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}emailCardTemplate(){const e=Qt.getConnectedConnector(),n=ot.getEmailConnector(),{origin:r}=location;return!n||e!=="EMAIL"||r.includes(Fn.SECURE_SITE)?null:O`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickPay(){J.push("OnRampProviders")}explorerBtnTemplate(){const{addressExplorerUrl:e}=me.state;return e?O`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}emailBtnTemplate(){const e=Qt.getConnectedConnector(),n=ot.getEmailConnector();if(!n||e!=="EMAIL")return null;const r=n.provider.getEmail()??"";return O`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(r)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=Pe.state,n=e?e.length>1:!1,r=e==null?void 0:e.find(({id:o})=>{var i;return o===((i=this.network)==null?void 0:i.id)});return n||!r}onCopyAddress(){try{this.address&&(le.copyToClopboard(this.address),Ve.showSuccess("Address copied"))}catch{Ve.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&(xe.sendEvent({type:"track",event:"CLICK_NETWORKS"}),J.push("Networks"))}onTransactions(){xe.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),J.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await De.disconnect(),xe.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Me.close()}catch{xe.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Ve.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const{addressExplorerUrl:e}=me.state;e&&le.openHref(e,"_blank")}onGoToUpgradeView(){xe.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),J.push("UpgradeEmailWallet")}onGoToUpdateEmail(e){J.push("UpdateEmailWallet",{email:e})}};vi.styles=NU;gs([V()],vi.prototype,"address",void 0);gs([V()],vi.prototype,"profileImage",void 0);gs([V()],vi.prototype,"profileName",void 0);gs([V()],vi.prototype,"network",void 0);gs([V()],vi.prototype,"disconnecting",void 0);gs([V()],vi.prototype,"balance",void 0);gs([V()],vi.prototype,"balanceSymbol",void 0);vi=gs([B("w3m-account-default-widget")],vi);const MU=Le`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tooltip-select {
    width: 100%;
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`,LU={ACCOUNT_TABS:[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}]};var La=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Xi=class extends we{constructor(){super(),this.unsubscribe=[],this.address=me.state.address,this.profileImage=me.state.profileImage,this.profileName=me.state.profileName,this.network=Pe.state.caipNetwork,this.currentTab=me.state.currentTab,this.tokenBalance=me.state.tokenBalance,this.unsubscribe.push(me.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance):Me.close()}),Pe.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=tt.getNetworkImage(this.network);return O`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
    >
      ${this.activateAccountTemplate()}
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${Ee(this.address)}
        networkSrc=${Ee(e)}
        icon="chevronBottom"
        avatarSrc=${Ee(this.profileImage?this.profileImage:void 0)}
        ?isprofilename=${!!this.profileName}
      ></wui-profile-button>
      ${this.tokenBalanceTemplate()}
      <wui-flex gap="s">
        <wui-tooltip-select
          @click=${this.onBuyClick.bind(this)}
          text="Buy"
          icon="card"
        ></wui-tooltip-select>
        <wui-tooltip-select text="Convert" icon="recycleHorizontal"></wui-tooltip-select>
        <wui-tooltip-select
          @click=${this.onReceiveClick.bind(this)}
          text="Receive"
          icon="arrowBottomCircle"
        ></wui-tooltip-select>
        <wui-tooltip-select text="Send" icon="send"></wui-tooltip-select>
      </wui-flex>

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth="104px"
        .tabs=${LU.ACCOUNT_TABS}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`}listContentTemplate(){return this.currentTab===0?O`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:this.currentTab===1?O`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:this.currentTab===2?O`<w3m-account-activity-widget></w3m-account-activity-widget>`:O`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){var e;if(this.tokenBalance&&((e=this.tokenBalance)==null?void 0:e.length)>=0){const n=le.calculateBalance(this.tokenBalance),{dollars:r="0",pennies:o="00"}=le.formatTokenBalance(n);return O`<wui-balance dollars=${r} pennies=${o}></wui-balance>`}return O`<wui-balance dollars="0" pennies="00"></wui-balance>`}activateAccountTemplate(){return O` <wui-promo text="Activate your account"></wui-promo>`}onTabChange(e){me.setCurrentTab(e)}onProfileButtonClick(){J.push("AccountSettings")}onBuyClick(){J.push("OnRampProviders")}onReceiveClick(){J.push("WalletReceive")}};Xi.styles=MU;La([V()],Xi.prototype,"address",void 0);La([V()],Xi.prototype,"profileImage",void 0);La([V()],Xi.prototype,"profileName",void 0);La([V()],Xi.prototype,"network",void 0);La([V()],Xi.prototype,"currentTab",void 0);La([V()],Xi.prototype,"tokenBalance",void 0);Xi=La([B("w3m-account-wallet-features-widget")],Xi);const DU=Le`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }
`;var jU=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let ww=class extends we{render(){return O`<w3m-activity-list page="account"></w3m-activity-list>`}};ww.styles=DU;ww=jU([B("w3m-account-activity-widget")],ww);const BU=Le`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var UU=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let yw=class extends we{render(){return O`${this.nftTemplate()}`}nftTemplate(){return O` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No NFTs yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Transfer from another wallets to get started</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Receive NFTs</wui-link>
    </wui-flex>`}onReceiveClick(){J.push("WalletReceive")}};yw.styles=BU;yw=UU([B("w3m-account-nfts-widget")],yw);const FU=Le`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }
`;var qC=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};let Vp=class extends we{constructor(){super(),this.unsubscribe=[],this.tokenBalance=me.state.tokenBalance,this.unsubscribe.push(me.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){me.fetchTokenBalance()}render(){return O`${this.tokenTemplate()}`}tokenTemplate(){var e;return this.tokenBalance&&((e=this.tokenBalance)==null?void 0:e.length)>0?O`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:O` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
      ></wui-list-description
    ></wui-flex>`}tokenItemTemplate(){var e;return(e=this.tokenBalance)==null?void 0:e.map(n=>O`<wui-list-token
          tokenName=${n.name}
          tokenImageUrl=${n.iconUrl}
          tokenAmount=${n.quantity.numeric}
          tokenValue=${n.value}
          tokenCurrency=${n.symbol}
        ></wui-list-token>`)}onReceiveClick(){J.push("WalletReceive")}onBuyClick(){J.push("OnRampProviders")}};Vp.styles=FU;qC([V()],Vp.prototype,"tokenBalance",void 0);Vp=qC([B("w3m-account-tokens-widget")],Vp);const WU=Le`
  :host {
    height: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var Da=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};const lh="last-transaction",zU=7;let eo=class extends we{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.address=me.state.address,this.transactionsByYear=An.state.transactionsByYear,this.loading=An.state.loading,this.empty=An.state.empty,this.next=An.state.next,this.unsubscribe.push(me.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,An.resetTransactions(),An.fetchTransactions(e.address))}),An.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){An.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return O` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}templateTransactionsByYear(){const e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((n,r)=>{const o=r===e.length-1,i=parseInt(n,10);return new Array(12).fill(null).map((a,l)=>l).reverse().map(a=>{var u;const l=Io.getTransactionGroupTitle(i,a),c=(u=this.transactionsByYear[i])==null?void 0:u[a];return c?O`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${l}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(c,o)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,n){const{date:r,descriptions:o,direction:i,isAllNFT:s,images:a,status:l,transfers:c,type:u}=this.getTransactionListItemProps(e),d=(c==null?void 0:c.length)>1;return(c==null?void 0:c.length)===2&&!s?O`
        <wui-transaction-list-item
          date=${r}
          .direction=${i}
          id=${n&&this.next?lh:""}
          status=${l}
          type=${u}
          .images=${a}
          .descriptions=${o}
        ></wui-transaction-list-item>
      `:d?c.map((g,m)=>{const w=Io.getTransferDescription(g),C=n&&m===c.length-1;return O` <wui-transaction-list-item
          date=${r}
          direction=${g.direction}
          id=${C&&this.next?lh:""}
          status=${l}
          type=${u}
          .onlyDirectionIcon=${!0}
          .images=${[a[m]]}
          .descriptions=${[w]}
        ></wui-transaction-list-item>`}):O`
      <wui-transaction-list-item
        date=${r}
        .direction=${i}
        id=${n&&this.next?lh:""}
        status=${l}
        type=${u}
        .images=${a}
        .descriptions=${o}
      ></wui-transaction-list-item>
    `}templateTransactions(e,n){return e.map((r,o)=>{const i=n&&o===e.length-1;return O`${this.templateRenderTransaction(r,i)}`})}emptyStateActivity(){return O`<wui-flex
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
    >
      <wui-icon-box
        backgroundColor="glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return O`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return this.page==="account"?O`${this.emptyStateAccount()}`:O`${this.emptyStateActivity()}`}templateLoading(){return this.page==="activity"?Array(zU).fill(O` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e):null}onReceiveClick(){J.push("WalletReceive")}createPaginationObserver(){const{projectId:e}=Ce.state;this.paginationObserver=new IntersectionObserver(([n])=>{n!=null&&n.isIntersecting&&!this.loading&&(An.fetchTransactions(this.address),xe.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var n,r,o;(n=this.paginationObserver)==null||n.disconnect();const e=(r=this.shadowRoot)==null?void 0:r.querySelector(`#${lh}`);e&&((o=this.paginationObserver)==null||o.observe(e))}getTransactionListItemProps(e){var l,c,u,d,h;const n=pv.formatDate((l=e==null?void 0:e.metadata)==null?void 0:l.minedAt),r=Io.getTransactionDescriptions(e),o=e==null?void 0:e.transfers,i=(c=e==null?void 0:e.transfers)==null?void 0:c[0],s=!!i&&((u=e==null?void 0:e.transfers)==null?void 0:u.every(g=>!!g.nft_info)),a=Io.getTransactionImages(o);return{date:n,direction:i==null?void 0:i.direction,descriptions:r,isAllNFT:s,images:a,status:(d=e.metadata)==null?void 0:d.status,transfers:o,type:(h=e.metadata)==null?void 0:h.operationType}}};eo.styles=WU;Da([Je()],eo.prototype,"page",void 0);Da([V()],eo.prototype,"address",void 0);Da([V()],eo.prototype,"transactionsByYear",void 0);Da([V()],eo.prototype,"loading",void 0);Da([V()],eo.prototype,"empty",void 0);Da([V()],eo.prototype,"next",void 0);eo=Da([B("w3m-activity-list")],eo);let sb=!1;class HU{constructor(e){this.initPromise=void 0,this.setIsConnected=n=>{me.setIsConnected(n)},this.setCaipAddress=n=>{me.setCaipAddress(n)},this.setBalance=(n,r)=>{me.setBalance(n,r)},this.fetchTokenBalance=()=>{me.fetchTokenBalance()},this.setProfileName=n=>{me.setProfileName(n)},this.setProfileImage=n=>{me.setProfileImage(n)},this.resetAccount=()=>{me.resetAccount()},this.setCaipNetwork=n=>{Pe.setCaipNetwork(n)},this.getCaipNetwork=()=>Pe.state.caipNetwork,this.setRequestedCaipNetworks=n=>{Pe.setRequestedCaipNetworks(n)},this.getApprovedCaipNetworksData=()=>Pe.getApprovedCaipNetworksData(),this.resetNetwork=()=>{Pe.resetNetwork()},this.setConnectors=n=>{ot.setConnectors(n)},this.addConnector=n=>{ot.addConnector(n)},this.getConnectors=()=>ot.getConnectors(),this.resetWcConnection=()=>{De.resetWcConnection()},this.fetchIdentity=n=>ra.fetchIdentity(n),this.setAddressExplorerUrl=n=>{me.setAddressExplorerUrl(n)},this.setSmartAccountDeployed=n=>{me.setSmartAccountDeployed(n)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),Me.open(e)}async close(){await this.initOrContinue(),Me.close()}setLoading(e){Me.setLoading(e)}getThemeMode(){return Mt.state.themeMode}getThemeVariables(){return Mt.state.themeVariables}setThemeMode(e){Mt.setThemeMode(e),Gy(Mt.state.themeMode)}setThemeVariables(e){Mt.setThemeVariables(e),D8(Mt.state.themeVariables)}subscribeTheme(e){return Mt.subscribe(e)}getState(){return{...Kl.state}}subscribeState(e){return Kl.subscribe(e)}showErrorMessage(e){Ve.showError(e)}showSuccessMessage(e){Ve.showSuccess(e)}getEvent(){return{...xe.state}}subscribeEvents(e){return xe.subscribe(e)}async initControllers(e){if(Pe.setClient(e.networkControllerClient),Pe.setDefaultCaipNetwork(e.defaultChain),Ce.setProjectId(e.projectId),Ce.setAllWallets(e.allWallets),Ce.setIncludeWalletIds(e.includeWalletIds),Ce.setExcludeWalletIds(e.excludeWalletIds),Ce.setFeaturedWalletIds(e.featuredWalletIds),Ce.setTokens(e.tokens),Ce.setTermsConditionsUrl(e.termsConditionsUrl),Ce.setPrivacyPolicyUrl(e.privacyPolicyUrl),Ce.setCustomWallets(e.customWallets),Ce.setEnableAnalytics(e.enableAnalytics),Ce.setSdkVersion(e._sdkVersion),De.setClient(e.connectionControllerClient),e.siweControllerClient){const{SIWEController:n}=await Pr(()=>import("./index-Cby94Co8.js"),__vite__mapDeps([]));n.setSIWEClient(e.siweControllerClient)}e.metadata&&Ce.setMetadata(e.metadata),e.themeMode&&Mt.setThemeMode(e.themeMode),e.themeVariables&&Mt.setThemeVariables(e.themeVariables),e.enableOnramp&&Ce.setOnrampEnabled(!!e.enableOnramp),e.enableWalletFeatures&&Ce.setWalletFeaturesEnabled(!!e.enableWalletFeatures),e.allowUnsupportedChain&&Pe.setAllowUnsupportedChain(e.allowUnsupportedChain)}async initOrContinue(){return!this.initPromise&&!sb&&le.isClient()&&(sb=!0,this.initPromise=new Promise(async e=>{await Promise.all([Pr(()=>Promise.resolve().then(()=>ZL),void 0),Pr(()=>Promise.resolve().then(()=>gD),void 0)]);const n=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",n),e()})),this.initPromise}}const Te={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",COINBASE_SDK_CONNECTOR_ID:"coinbaseWalletSDK",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EMAIL_CONNECTOR_ID:"w3mEmail",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"4.1.1"},Ni={ConnectorExplorerIds:{[Te.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[Te.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[Te.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00"},ConnectorImageIds:{[Te.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[Te.COINBASE_SDK_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[Te.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[Te.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[Te.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[Te.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[Te.INJECTED_CONNECTOR_ID]:"Browser Wallet",[Te.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[Te.COINBASE_CONNECTOR_ID]:"Coinbase",[Te.COINBASE_SDK_CONNECTOR_ID]:"Coinbase",[Te.LEDGER_CONNECTOR_ID]:"Ledger",[Te.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[Te.INJECTED_CONNECTOR_ID]:"INJECTED",[Te.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[Te.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[Te.EMAIL_CONNECTOR_ID]:"EMAIL"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},Za={caipNetworkIdToNumber(t){return t?Number(t.split(":")[1]):void 0},getCaipTokens(t){if(!t)return;const e={};return Object.entries(t).forEach(([n,r])=>{e[`${Te.EIP155}:${n}`]=r}),e}};function VU(t){if(t)return{id:`${Te.EIP155}:${t.id}`,name:t.name,imageId:Ni.EIP155NetworkImageIds[t.id]}}async function ZU(t){var i,s,a,l;if(!t)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const e=await(t==null?void 0:t.getProvider()),n=(s=(i=e==null?void 0:e.signer)==null?void 0:i.session)==null?void 0:s.namespaces,r=(a=n==null?void 0:n[Te.EIP155])==null?void 0:a.methods,o=(l=n==null?void 0:n[Te.EIP155])==null?void 0:l.chains;return{supportsAllNetworks:!!(r!=null&&r.includes(Te.ADD_CHAIN_METHOD)),approvedCaipNetworkIds:o}}function qU(){return{supportsAllNetworks:!1,approvedCaipNetworkIds:Ni.WalletConnectRpcChainIds.map(t=>`${Te.EIP155}:${t}`)}}function GU({chainId:t,projectId:e}){const n=le.getBlockchainApiUrl();return Ni.WalletConnectRpcChainIds.includes(t)?X3(`${n}/v1/?chainId=${Te.EIP155}:${t}&projectId=${e}`):X3()}class KU extends HU{constructor(e){const{wagmiConfig:n,siweConfig:r,defaultChain:o,tokens:i,_sdkVersion:s,...a}=e;if(!n)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!a.projectId)throw new Error("web3modal:constructor - projectId is undefined");const l={switchCaipNetwork:async u=>{const d=Za.caipNetworkIdToNumber(u==null?void 0:u.id);d&&await uI(this.wagmiConfig,{chainId:d})},getApprovedCaipNetworksData:async()=>new Promise(u=>{var g,m;const h=new Map(n.state.connections).get(n.state.current||"");if(((g=h==null?void 0:h.connector)==null?void 0:g.id)===Te.EMAIL_CONNECTOR_ID)u(qU());else if(((m=h==null?void 0:h.connector)==null?void 0:m.id)===Te.WALLET_CONNECT_CONNECTOR_ID){const w=n.connectors.find(C=>C.id===Te.WALLET_CONNECT_CONNECTOR_ID);u(ZU(w))}u({approvedCaipNetworkIds:void 0,supportsAllNetworks:!0})})},c={connectWalletConnect:async u=>{var m;const d=n.connectors.find(w=>w.id===Te.WALLET_CONNECT_CONNECTOR_ID);if(!d)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");(await d.getProvider()).on("display_uri",w=>{u(w)});const g=Za.caipNetworkIdToNumber((m=this.getCaipNetwork())==null?void 0:m.id);await r5(this.wagmiConfig,{connector:d,chainId:g})},connectExternal:async({id:u,provider:d,info:h})=>{var w,C;const g=n.connectors.find(y=>y.id===u);if(!g)throw new Error("connectionControllerClient:connectExternal - connector is undefined");d&&h&&g.id===Te.EIP6963_CONNECTOR_ID&&((w=g.setEip6963Wallet)==null||w.call(g,{provider:d,info:h}));const m=Za.caipNetworkIdToNumber((C=this.getCaipNetwork())==null?void 0:C.id);await r5(this.wagmiConfig,{connector:g,chainId:m})},checkInstalled:u=>{const d=this.getConnectors().find(h=>h.type==="INJECTED");return u?d&&window!=null&&window.ethereum?u.some(h=>{var g;return!!((g=window.ethereum)!=null&&g[String(h)])}):!1:!!window.ethereum},disconnect:async()=>{var u;await eI(this.wagmiConfig),(u=r==null?void 0:r.options)!=null&&u.signOutOnDisconnect&&await r.signOut()},signMessage:async u=>cI(this.wagmiConfig,{message:u})};super({networkControllerClient:l,connectionControllerClient:c,siweControllerClient:r,defaultChain:VU(o),tokens:Za.getCaipTokens(i),_sdkVersion:s??`html-wagmi-${Te.VERSION}`,...a}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.wagmiConfig=n,this.syncRequestedNetworks([...n.chains]),this.syncConnectors([...n.connectors]),fI(this.wagmiConfig,{onChange:u=>this.syncConnectors(u)}),dI(this.wagmiConfig,{onChange:u=>this.syncAccount({...u})})}getState(){const e=super.getState();return{...e,selectedNetworkId:Za.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(n=>e({...n,selectedNetworkId:Za.caipNetworkIdToNumber(n.selectedNetworkId)}))}syncRequestedNetworks(e){const n=e==null?void 0:e.map(r=>{var o,i;return{id:`${Te.EIP155}:${r.id}`,name:r.name,imageId:Ni.EIP155NetworkImageIds[r.id],imageUrl:(i=(o=this.options)==null?void 0:o.chainImages)==null?void 0:i[r.id]}});this.setRequestedCaipNetworks(n??[])}async syncAccount({address:e,isConnected:n,chainId:r}){if(this.resetAccount(),this.syncNetwork(),n&&e&&r){const o=`${Te.EIP155}:${r}:${e}`;this.setIsConnected(n),this.setCaipAddress(o),await Promise.all([this.syncProfile(e,r),this.syncBalance(e,r),this.fetchTokenBalance(),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!n&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){var i,s,a,l;const{address:e,isConnected:n,chainId:r}=E8(this.wagmiConfig),o=this.wagmiConfig.chains.find(c=>c.id===r);if(o||r){const c=(o==null?void 0:o.name)??(r==null?void 0:r.toString()),u=Number((o==null?void 0:o.id)??r),d=`${Te.EIP155}:${u}`;if(this.setCaipNetwork({id:d,name:c,imageId:Ni.EIP155NetworkImageIds[u],imageUrl:(s=(i=this.options)==null?void 0:i.chainImages)==null?void 0:s[u]}),n&&e&&r){const h=`${Te.EIP155}:${u}:${e}`;if(this.setCaipAddress(h),(l=(a=o==null?void 0:o.blockExplorers)==null?void 0:a.default)!=null&&l.url){const g=`${o.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(g)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&(await this.syncProfile(e,r),await this.syncBalance(e,r))}}}async syncProfile(e,n){if(n!==_8.id){this.setProfileName(null),this.setProfileImage(null);return}try{const{name:r,avatar:o}=await this.fetchIdentity({caipChainId:`${Te.EIP155}:${n}`,address:e});this.setProfileName(r),this.setProfileImage(o)}catch{const r=await aI(this.wagmiConfig,{address:e,chainId:n});if(r){this.setProfileName(r);const o=await sI(this.wagmiConfig,{name:r,chainId:n});o&&this.setProfileImage(o)}}}async syncBalance(e,n){var o,i,s;const r=this.wagmiConfig.chains.find(a=>a.id===n);if(r){const a=await oI(this.wagmiConfig,{address:e,chainId:r.id,token:(s=(i=(o=this.options)==null?void 0:o.tokens)==null?void 0:i[r.id])==null?void 0:s.address});this.setBalance(a.formatted,a.symbol);return}this.setBalance(void 0,void 0)}syncConnectors(e){const n=new Set,r=e.filter(a=>!n.has(a.id)&&n.add(a.id)),o=[],i=Te.COINBASE_SDK_CONNECTOR_ID,s=r.find(a=>a.id===Fn.CONNECTOR_RDNS_MAP[i]);r.forEach(({id:a,name:l,type:c,icon:u})=>{var h,g;s&&a===i||Te.EMAIL_CONNECTOR_ID===a||o.push({id:a,explorerId:Ni.ConnectorExplorerIds[a],imageUrl:((g=(h=this.options)==null?void 0:h.connectorImages)==null?void 0:g[a])??u,name:Ni.ConnectorNamesMap[a]??l,imageId:Ni.ConnectorImageIds[a],type:Ni.ConnectorTypesMap[c]??"EXTERNAL"})}),this.setConnectors(o),this.syncEmailConnector(r)}async syncEmailConnector(e){const n=e.find(({id:r})=>r===Te.EMAIL_CONNECTOR_ID);if(n){const r=await n.getProvider();this.addConnector({id:Te.EMAIL_CONNECTOR_ID,type:"EMAIL",name:"Email",provider:r}),this.listenEmailConnector(n),this.listenModal(n)}}async listenEmailConnector(e){if(typeof window<"u"&&e){super.setLoading(!0);const n=await e.getProvider(),r=n.getLoginEmailUsed();super.setLoading(r),r&&this.setIsConnected(!1),n.onInitSmartAccount(o=>{this.setSmartAccountDeployed(o)}),n.onRpcRequest(o=>{if(Yt.checkIfRequestExists(o))Yt.checkIfRequestIsAllowed(o)||super.open({view:"ApproveTransaction"});else{super.open();const i=Yt.getRequestMethod(o);console.error(xl.RPC_METHOD_NOT_ALLOWED_MESSAGE,{method:i}),setTimeout(()=>{this.showErrorMessage(xl.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE)},300),n.rejectRpcRequest()}}),n.onRpcResponse(()=>{super.close()}),n.onNotConnected(()=>{this.setIsConnected(!1),super.setLoading(!1)}),n.onIsConnected(()=>{this.setIsConnected(!0),super.setLoading(!1)})}}async listenModal(e){const n=await e.getProvider();this.subscribeState(r=>{r.open||n.rejectRpcRequest()})}}let ch;function YU(t){return ch||(ch=new KU({...t,_sdkVersion:`react-wagmi-${Te.VERSION}`}),HR(ch)),ch}var GC={},G0={};G0.byteLength=XU;G0.toByteArray=tF;G0.fromByteArray=iF;var oi=[],or=[],QU=typeof Uint8Array<"u"?Uint8Array:Array,_m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var qa=0,JU=_m.length;qa<JU;++qa)oi[qa]=_m[qa],or[_m.charCodeAt(qa)]=qa;or[45]=62;or[95]=63;function KC(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");n===-1&&(n=e);var r=n===e?0:4-n%4;return[n,r]}function XU(t){var e=KC(t),n=e[0],r=e[1];return(n+r)*3/4-r}function eF(t,e,n){return(e+n)*3/4-n}function tF(t){var e,n=KC(t),r=n[0],o=n[1],i=new QU(eF(t,r,o)),s=0,a=o>0?r-4:r,l;for(l=0;l<a;l+=4)e=or[t.charCodeAt(l)]<<18|or[t.charCodeAt(l+1)]<<12|or[t.charCodeAt(l+2)]<<6|or[t.charCodeAt(l+3)],i[s++]=e>>16&255,i[s++]=e>>8&255,i[s++]=e&255;return o===2&&(e=or[t.charCodeAt(l)]<<2|or[t.charCodeAt(l+1)]>>4,i[s++]=e&255),o===1&&(e=or[t.charCodeAt(l)]<<10|or[t.charCodeAt(l+1)]<<4|or[t.charCodeAt(l+2)]>>2,i[s++]=e>>8&255,i[s++]=e&255),i}function nF(t){return oi[t>>18&63]+oi[t>>12&63]+oi[t>>6&63]+oi[t&63]}function rF(t,e,n){for(var r,o=[],i=e;i<n;i+=3)r=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(t[i+2]&255),o.push(nF(r));return o.join("")}function iF(t){for(var e,n=t.length,r=n%3,o=[],i=16383,s=0,a=n-r;s<a;s+=i)o.push(rF(t,s,s+i>a?a:s+i));return r===1?(e=t[n-1],o.push(oi[e>>2]+oi[e<<4&63]+"==")):r===2&&(e=(t[n-2]<<8)+t[n-1],o.push(oi[e>>10]+oi[e>>4&63]+oi[e<<2&63]+"=")),o.join("")}var Cv={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Cv.read=function(t,e,n,r,o){var i,s,a=o*8-r-1,l=(1<<a)-1,c=l>>1,u=-7,d=n?o-1:0,h=n?-1:1,g=t[e+d];for(d+=h,i=g&(1<<-u)-1,g>>=-u,u+=a;u>0;i=i*256+t[e+d],d+=h,u-=8);for(s=i&(1<<-u)-1,i>>=-u,u+=r;u>0;s=s*256+t[e+d],d+=h,u-=8);if(i===0)i=1-c;else{if(i===l)return s?NaN:(g?-1:1)*(1/0);s=s+Math.pow(2,r),i=i-c}return(g?-1:1)*s*Math.pow(2,i-r)};Cv.write=function(t,e,n,r,o,i){var s,a,l,c=i*8-o-1,u=(1<<c)-1,d=u>>1,h=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=r?0:i-1,m=r?1:-1,w=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=u):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+d>=1?e+=h/l:e+=h*Math.pow(2,1-d),e*l>=2&&(s++,l/=2),s+d>=u?(a=0,s=u):s+d>=1?(a=(e*l-1)*Math.pow(2,o),s=s+d):(a=e*Math.pow(2,d-1)*Math.pow(2,o),s=0));o>=8;t[n+g]=a&255,g+=m,a/=256,o-=8);for(s=s<<o|a,c+=o;c>0;t[n+g]=s&255,g+=m,s/=256,c-=8);t[n+g-m]|=w*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT