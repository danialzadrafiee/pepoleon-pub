import{A as at,o as mt,N as yt,C as ct,R as wt,p as St,q as At,s as vt,t as Et,O as q,S as bt,v as lt,E as O,w as Ct,M as xt,x as Ut}from"./app-CraWNmOJ.js";const J={FIVE_MINUTES_IN_MS:3e5};class Pt{constructor(t){const{enabled:e=!0,nonceRefetchIntervalMs:s=J.FIVE_MINUTES_IN_MS,sessionRefetchIntervalMs:i=J.FIVE_MINUTES_IN_MS,signOutOnAccountChange:r=!0,signOutOnDisconnect:o=!0,signOutOnNetworkChange:c=!0,...a}=t;this.options={enabled:e,nonceRefetchIntervalMs:s,sessionRefetchIntervalMs:i,signOutOnDisconnect:o,signOutOnAccountChange:r,signOutOnNetworkChange:c},this.methods=a}async getNonce(){const t=await this.methods.getNonce();if(!t)throw new Error("siweControllerClient:getNonce - nonce is undefined");return t}createMessage(t){const e=this.methods.createMessage(t);if(!e)throw new Error("siweControllerClient:createMessage - message is undefined");return e}async verifyMessage(t){return await this.methods.verifyMessage(t)}async getSession(){const t=await this.methods.getSession();if(!t)throw new Error("siweControllerClient:getSession - session is undefined");return t}async signIn(){var a;const t=await this.methods.getNonce(),{address:e}=at.state;if(!e)throw new Error("An address is required to create a SIWE message.");const s=mt.caipNetworkIdToNumber((a=yt.state.caipNetwork)==null?void 0:a.id);if(!s)throw new Error("A chainId is required to create a SIWE message.");const i=this.methods.createMessage({address:e,nonce:t,chainId:s}),r=await ct.signMessage(i);if(!await this.methods.verifyMessage({message:i,signature:r}))throw new Error("Error verifying SIWE signature");const c=await this.methods.getSession();if(!c)throw new Error("Error verifying SIWE signature");return this.methods.onSignIn&&this.methods.onSignIn(c),wt.navigateAfterNetworkSwitch(),c}async signOut(){return this.methods.signOut()}}const p=St({status:"uninitialized"}),R={state:p,subscribeKey(n,t){return At(p,n,t)},subscribe(n){return vt(p,()=>n(p))},_getClient(){if(!p._client)throw new Error("SIWEController client not set");return p._client},async getNonce(){const t=await this._getClient().getNonce();return this.setNonce(t),t},async getSession(){const t=await this._getClient().getSession();return t&&(this.setSession(t),this.setStatus("success")),t},createMessage(n){const e=this._getClient().createMessage(n);return this.setMessage(e),e},async verifyMessage(n){return await this._getClient().verifyMessage(n)},async signIn(){return await this._getClient().signIn()},async signOut(){var t;const n=this._getClient();await n.signOut(),this.setStatus("ready"),(t=n.onSignOut)==null||t.call(n)},onSignIn(n){var e;const t=this._getClient();(e=t.onSignIn)==null||e.call(t,n)},onSignOut(){var t;const n=this._getClient();(t=n.onSignOut)==null||t.call(n)},setSIWEClient(n){p._client=Et(n),p.status="ready",q.setIsSiweEnabled(n.options.enabled)},setNonce(n){p.nonce=n},setStatus(n){p.status=n},setMessage(n){p.message=n},setSession(n){p.session=n}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis,K=T.ShadowRoot&&(T.ShadyCSS===void 0||T.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),X=new WeakMap;let ht=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(K&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=X.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&X.set(e,t))}return t}toString(){return this.cssText}};const It=n=>new ht(typeof n=="string"?n:n+"",void 0,F),Mt=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new ht(e,n,F)},Nt=(n,t)=>{if(K)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=T.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)}},Z=K?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return It(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ot,defineProperty:Rt,getOwnPropertyDescriptor:Tt,getOwnPropertyNames:Ht,getOwnPropertySymbols:Wt,getPrototypeOf:jt}=Object,_=globalThis,Q=_.trustedTypes,kt=Q?Q.emptyScript:"",k=_.reactiveElementPolyfillSupport,C=(n,t)=>n,H={toAttribute(n,t){switch(t){case Boolean:n=n?kt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},G=(n,t)=>!Ot(n,t),Y={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:G};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);class S extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Y){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Rt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=Tt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const c=i==null?void 0:i.call(this);r.call(this,o),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Y}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const t=jt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const e=this.properties,s=[...Ht(e),...Wt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(Z(i))}else t!==void 0&&e.push(Z(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Nt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var r;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:H).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){var r;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:H;this._$Em=i,this[i]=c.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??G)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,o]of i)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[C("elementProperties")]=new Map,S[C("finalized")]=new Map,k==null||k({ReactiveElement:S}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=globalThis,W=x.trustedTypes,tt=W?W.createPolicy("lit-html",{createHTML:n=>n}):void 0,dt="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,ut="?"+$,zt=`<${ut}>`,w=document,U=()=>w.createComment(""),P=n=>n===null||typeof n!="object"&&typeof n!="function",pt=Array.isArray,Lt=n=>pt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",z=`[ 	
\f\r]`,b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,et=/-->/g,st=/>/g,m=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),it=/'/g,nt=/"/g,gt=/^(?:script|style|textarea|title)$/i,Dt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),ft=Dt(1),v=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),rt=new WeakMap,y=w.createTreeWalker(w,129);function $t(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return tt!==void 0?tt.createHTML(t):t}const Vt=(n,t)=>{const e=n.length-1,s=[];let i,r=t===2?"<svg>":"",o=b;for(let c=0;c<e;c++){const a=n[c];let h,u,l=-1,g=0;for(;g<a.length&&(o.lastIndex=g,u=o.exec(a),u!==null);)g=o.lastIndex,o===b?u[1]==="!--"?o=et:u[1]!==void 0?o=st:u[2]!==void 0?(gt.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=m):u[3]!==void 0&&(o=m):o===m?u[0]===">"?(o=i??b,l=-1):u[1]===void 0?l=-2:(l=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?m:u[3]==='"'?nt:it):o===nt||o===it?o=m:o===et||o===st?o=b:(o=m,i=void 0);const f=o===m&&n[c+1].startsWith("/>")?" ":"";r+=o===b?a+zt:l>=0?(s.push(h),a.slice(0,l)+dt+a.slice(l)+$+f):a+$+(l===-2?c:f)}return[$t(n,r+(n[e]||"<?>")+(t===2?"</svg>":"")),s]};class I{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const c=t.length-1,a=this.parts,[h,u]=Vt(t,e);if(this.el=I.createElement(h,s),y.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=y.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(dt)){const g=u[o++],f=i.getAttribute(l).split($),N=/([.?@])?(.*)/.exec(g);a.push({type:1,index:r,name:N[2],strings:f,ctor:N[1]==="."?qt:N[1]==="?"?Kt:N[1]==="@"?Ft:j}),i.removeAttribute(l)}else l.startsWith($)&&(a.push({type:6,index:r}),i.removeAttribute(l));if(gt.test(i.tagName)){const l=i.textContent.split($),g=l.length-1;if(g>0){i.textContent=W?W.emptyScript:"";for(let f=0;f<g;f++)i.append(l[f],U()),y.nextNode(),a.push({type:2,index:++r});i.append(l[g],U())}}}else if(i.nodeType===8)if(i.data===ut)a.push({type:2,index:r});else{let l=-1;for(;(l=i.data.indexOf($,l+1))!==-1;)a.push({type:7,index:r}),l+=$.length-1}r++}}static createElement(t,e){const s=w.createElement("template");return s.innerHTML=t,s}}function E(n,t,e=n,s){var o,c;if(t===v)return t;let i=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl;const r=P(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),r===void 0?i=void 0:(i=new r(n),i._$AT(n,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=E(n,i._$AS(n,t.values),i,s)),t}class Bt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??w).importNode(e,!0);y.currentNode=i;let r=y.nextNode(),o=0,c=0,a=s[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new M(r,r.nextSibling,this,t):a.type===1?h=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(h=new Gt(r,this,t)),this._$AV.push(h),a=s[++c]}o!==(a==null?void 0:a.index)&&(r=y.nextNode(),o++)}return y.currentNode=w,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class M{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),P(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==v&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Lt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==d&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(w.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=I.createElement($t(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(e);else{const o=new Bt(i,this),c=o.u(this.options);o.p(e),this.T(c),this._$AH=o}}_$AC(t){let e=rt.get(t.strings);return e===void 0&&rt.set(t.strings,e=new I(t)),e}k(t){pt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new M(this.S(U()),this.S(U()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(r===void 0)t=E(this,t,e,0),o=!P(t)||t!==this._$AH&&t!==v,o&&(this._$AH=t);else{const c=t;let a,h;for(t=r[0],a=0;a<r.length-1;a++)h=E(this,c[s+a],e,a),h===v&&(h=this._$AH[a]),o||(o=!P(h)||h!==this._$AH[a]),h===d?t=d:t!==d&&(t+=(h??"")+r[a+1]),this._$AH[a]=h}o&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class qt extends j{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Kt extends j{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Ft extends j{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??d)===v)return;const s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Gt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const L=x.litHtmlPolyfillSupport;L==null||L(I,M),(x.litHtmlVersions??(x.litHtmlVersions=[])).push("3.1.2");const Jt=(n,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const r=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new M(t.insertBefore(U(),r),r,void 0,e??{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class A extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Jt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return v}}var ot;A._$litElement$=!0,A.finalized=!0,(ot=globalThis.litElementHydrateSupport)==null||ot.call(globalThis,{LitElement:A});const D=globalThis.litElementPolyfillSupport;D==null||D({LitElement:A});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");const Xt=Mt`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var Zt=function(n,t,e,s){var i=arguments.length,r=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,t,e,s);else for(var c=n.length-1;c>=0;c--)(o=n[c])&&(r=(i<3?o(r):i>3?o(t,e,r):o(t,e))||r);return i>3&&r&&Object.defineProperty(t,e,r),r};let V=class extends A{constructor(){var t;super(...arguments),this.dappImageUrl=(t=q.state.metadata)==null?void 0:t.icons,this.walletImageUrl=bt.getConnectedWalletImageUrl()}firstUpdated(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelectorAll("wui-visual-thumbnail");t!=null&&t[0]&&this.createAnimation(t[0],"translate(18px)"),t!=null&&t[1]&&this.createAnimation(t[1],"translate(-18px)")}render(){var t;return ft`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(t=this.dappImageUrl)==null?void 0:t[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(t,e){t.animate([{transform:"translateX(0px)"},{transform:e}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};V.styles=Xt;V=Zt([lt("w3m-connecting-siwe")],V);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:G},Yt=(n=Qt,t,e)=>{const{kind:s,metadata:i}=e;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(e.name,n),s==="accessor"){const{name:o}=e;return{set(c){const a=t.get.call(this);t.set.call(this,c),this.requestUpdate(o,a,n)},init(c){return c!==void 0&&this.P(o,void 0,n),c}}}if(s==="setter"){const{name:o}=e;return function(c){const a=this[o];t.call(this,c),this.requestUpdate(o,a,n)}}throw Error("Unsupported decorator location: "+s)};function te(n){return(t,e)=>typeof e=="object"?Yt(n,t,e):((s,i,r)=>{const o=i.hasOwnProperty(r);return i.constructor.createProperty(r,o?{...s,wrapped:!0}:s),o?Object.getOwnPropertyDescriptor(i,r):void 0})(n,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ee(n){return te({...n,state:!0,attribute:!1})}var _t=function(n,t,e,s){var i=arguments.length,r=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,t,e,s);else for(var c=n.length-1;c>=0;c--)(o=n[c])&&(r=(i<3?o(r):i>3?o(t,e,r):o(t,e))||r);return i>3&&r&&Object.defineProperty(t,e,r),r};let B=class extends A{constructor(){var t;super(...arguments),this.dappName=(t=q.state.metadata)==null?void 0:t.name,this.isSigning=!1}render(){return ft`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="shade"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="fill"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,O.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{R.setStatus("loading");const t=await R.signIn();return R.setStatus("success"),O.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),t}catch{return Ct.showError("Signature declined"),R.setStatus("error"),O.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{this.isSigning=!1}}async onCancel(){const{isConnected:t}=at.state;t?(await ct.disconnect(),xt.close()):Ut.push("Connect"),O.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})}};_t([ee()],B.prototype,"isSigning",void 0);B=_t([lt("w3m-connecting-siwe-view")],B);function oe(n){return new Pt(n)}export{R as SIWEController,V as W3mConnectingSiwe,B as W3mConnectingSiweView,oe as createSIWEConfig};
